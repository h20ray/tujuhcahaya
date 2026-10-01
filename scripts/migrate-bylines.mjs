import sqlite3 from "node:sqlite";
import mysql from "mysql2/promise";
import crypto from "node:crypto";

function generateId() {
    const timestamp = Date.now().toString(36).toUpperCase().padStart(10, "0");
    const random = crypto.randomBytes(10).toString("hex").toUpperCase().slice(0, 16);
    return `01${timestamp}${random}`.slice(0, 26);
}

async function main() {
    console.log("=======================================================");
    console.log("🖋️ Tujuhcahaya: WordPress Authors to EmDash Bylines Bridge");
    console.log("=======================================================\n");

    const startTime = Date.now();

    // 1. Connect to MariaDB
    console.log("🔌 Connecting to MariaDB (wp_nlmfb_7c)...");
    const maria = await mysql.createConnection({
        host: process.env.MARIADB_HOST || "127.0.0.1",
        port: Number(process.env.MARIADB_PORT) || 3306,
        user: process.env.MARIADB_USER || "root",
        password: process.env.MARIADB_PASSWORD || "root",
        database: process.env.MARIADB_DATABASE || "wp_nlmfb_7c",
    });
    console.log("   Connected to MariaDB successfully.\n");

    // 2. Connect to SQLite
    console.log("🔌 Connecting to EmDash SQLite (data.db)...");
    const sqlite = new sqlite3.DatabaseSync("data.db");
    console.log("   Connected to SQLite successfully.\n");

    // 3. Fetch Authors from WordPress
    console.log("👥 Fetching WordPress users with published articles...");
    const [wpUsers] = await maria.query(`
        SELECT u.ID, u.user_login, u.user_nicename, u.user_email, u.display_name,
               (SELECT meta_value FROM ERPtffHR_usermeta WHERE user_id = u.ID AND meta_key = 'description' LIMIT 1) as bio
        FROM ERPtffHR_users u
        WHERE u.ID IN (
            SELECT DISTINCT post_author FROM ERPtffHR_posts WHERE post_type = 'post' AND post_status = 'publish'
        );
    `);
    console.log(`   Found ${wpUsers.length} editorial authors.\n`);

    // 4. Upsert into _emdash_bylines
    console.log("📝 Registering Bylines in EmDash for both 'id' and 'en' locales...");
    const authorToBylineMap = new Map(); // wp_user_id -> translation_group

    const insertBylineStmt = sqlite.prepare(`
        INSERT INTO _emdash_bylines (
            id, slug, display_name, bio, avatar_media_id, website_url, user_id,
            is_guest, created_at, updated_at, locale, translation_group
        ) VALUES (?, ?, ?, ?, NULL, NULL, NULL, 0, datetime('now'), datetime('now'), ?, ?)
        ON CONFLICT(id) DO UPDATE SET
            display_name = excluded.display_name,
            bio = excluded.bio,
            updated_at = excluded.updated_at;
    `);

    for (const u of wpUsers) {
        const slug = u.user_nicename || u.user_login.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        
        // Check if byline already exists in id locale
        const existing = sqlite.prepare("SELECT id, translation_group FROM _emdash_bylines WHERE slug = ? AND locale = 'id'").get(slug);
        const bylineIdId = existing ? existing.id : generateId();
        const translationGroup = existing ? existing.translation_group : bylineIdId;

        // Insert / update Indonesian byline
        insertBylineStmt.run(bylineIdId, slug, u.display_name, u.bio || "", "id", translationGroup);

        // Also ensure English byline exists with the same translation_group
        const existingEn = sqlite.prepare("SELECT id FROM _emdash_bylines WHERE translation_group = ? AND locale = 'en'").get(translationGroup);
        const bylineIdEn = existingEn ? existingEn.id : generateId();
        insertBylineStmt.run(bylineIdEn, slug, u.display_name, u.bio || "", "en", translationGroup);

        authorToBylineMap.set(u.ID, translationGroup);
        console.log(`   ✓ Author: ${u.display_name} (Slug: ${slug}, Group: ${translationGroup})`);
    }
    console.log("");

    // 5. Query all posts with author from MariaDB
    console.log("📰 Fetching post author assignments from MariaDB...");
    const [wpPosts] = await maria.query(`
        SELECT post_name as slug, post_author
        FROM ERPtffHR_posts
        WHERE post_type = 'post' AND post_status = 'publish' AND post_name != '';
    `);
    console.log(`   Retrieved ${wpPosts.length} post-author mappings.\n`);

    // 6. Update ec_posts and _emdash_content_bylines in SQLite
    console.log("🔗 Linking bylines to ec_posts & _emdash_content_bylines in SQLite...");
    
    // Begin transaction for speed
    sqlite.exec("BEGIN TRANSACTION;");

    const updatePostBylineStmt = sqlite.prepare(`
        UPDATE ec_posts
        SET primary_byline_id = ?
        WHERE slug = ?;
    `);

    const insertContentBylineStmt = sqlite.prepare(`
        INSERT INTO _emdash_content_bylines (
            id, collection_slug, content_id, byline_id, sort_order, role_label, created_at
        ) VALUES (?, 'posts', ?, ?, 0, NULL, datetime('now'))
        ON CONFLICT(id) DO NOTHING;
    `);

    // Pre-clear content_bylines for posts collection to prevent duplication
    sqlite.exec("DELETE FROM _emdash_content_bylines WHERE collection_slug = 'posts';");

    // Fetch all ec_posts id and slug
    const ecPosts = sqlite.prepare("SELECT id, slug FROM ec_posts").all();
    const postSlugToIdMap = new Map();
    for (const p of ecPosts) {
        postSlugToIdMap.set(p.slug, p.id);
    }

    let linkedCount = 0;
    for (const wpP of wpPosts) {
        const translationGroup = authorToBylineMap.get(wpP.post_author);
        if (!translationGroup) continue;

        const postId = postSlugToIdMap.get(wpP.slug);
        if (!postId) continue;

        // Update ec_posts
        updatePostBylineStmt.run(translationGroup, wpP.slug);

        // Insert into _emdash_content_bylines
        const cbId = generateId();
        insertContentBylineStmt.run(cbId, postId, translationGroup);

        linkedCount++;
    }

    sqlite.exec("COMMIT;");
    console.log(`   Successfully linked ${linkedCount} articles to their authentic authors!\n`);

    // 7. Verify Results
    const verifyCount = sqlite.prepare("SELECT count(*) as c FROM ec_posts WHERE primary_byline_id IS NOT NULL").get().c;
    const cbCount = sqlite.prepare("SELECT count(*) as c FROM _emdash_content_bylines WHERE collection_slug = 'posts'").get().c;
    console.log("📊 Verification:");
    console.log(`   - ec_posts with primary_byline_id: ${verifyCount} / ${ecPosts.length}`);
    console.log(`   - _emdash_content_bylines rows:     ${cbCount}`);

    const breakdown = sqlite.prepare(`
        SELECT b.display_name, count(cb.id) as article_count
        FROM _emdash_content_bylines cb
        JOIN _emdash_bylines b ON cb.byline_id = b.translation_group AND b.locale = 'id'
        GROUP BY b.display_name
        ORDER BY article_count DESC;
    `).all();
    console.table(breakdown);

    await maria.end();
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`✨ Byline Migration completed in ${duration}s!\n`);
}

main().catch((err) => {
    console.error("❌ Migration failed:", err);
    process.exit(1);
});
