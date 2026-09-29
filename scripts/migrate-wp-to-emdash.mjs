import sqlite3 from "node:sqlite";
import mysql from "mysql2/promise";
import crypto from "node:crypto";
import { gutenbergToPortableText } from "@emdash-cms/gutenberg-to-portable-text";

// Generate ULID-like 26-char identifier
function generateId() {
    const timestamp = Date.now().toString(36).toUpperCase().padStart(10, "0");
    const random = crypto.randomBytes(10).toString("hex").toUpperCase().slice(0, 16);
    return `01${timestamp}${random}`.slice(0, 26);
}

// Strip HTML tags for clean text excerpt
function stripHtml(html) {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, "").replace(/\s+/g, " ").trim();
}

async function main() {
    const args = process.argv.slice(2);
    let limit = 500;
    const limitArg = args.find(a => a.startsWith("--limit="));
    if (limitArg) {
        limit = parseInt(limitArg.split("=")[1], 10);
    } else if (args.includes("--all")) {
        limit = 50000;
    }

    console.log(`=======================================================`);
    console.log(`🚀 Tujuhcahaya: WordPress -> EmDash 1.0.0 Content Bridge`);
    console.log(`Target Limit: ${limit === 50000 ? "ALL" : limit} posts`);
    console.log(`=======================================================\n`);

    const startTime = Date.now();

    // 1. Connect to MariaDB
    console.log("🔌 Connecting to local MariaDB 12.2 (wp_nlmfb_7c)...");
    const maria = await mysql.createConnection({
        host: process.env.MARIADB_HOST || "127.0.0.1",
        port: Number(process.env.MARIADB_PORT) || 3306,
        user: process.env.MARIADB_USER || "root",
        password: process.env.MARIADB_PASSWORD || "root",
        database: process.env.MARIADB_DATABASE || "wp_nlmfb_7c",
    });
    console.log("   Connected to MariaDB successfully.\n");

    // 2. Connect to SQLite
    console.log("🔌 Connecting to EmDash SQLite store (data.db)...");
    const sqlite = new sqlite3.DatabaseSync("data.db");
    console.log("   Connected to SQLite successfully.\n");

    // 3. Migrate Categories
    console.log("📂 Migrating Categories...");
    const [categories] = await maria.query(`
        SELECT t.term_id, t.name, t.slug, tt.parent, tt.count
        FROM ERPtffHR_terms t
        JOIN ERPtffHR_term_taxonomy tt ON t.term_id = tt.term_id
        WHERE tt.taxonomy = 'category'
        ORDER BY tt.count DESC;
    `);

    const categoryIdMap = new Map(); // slug -> sqlite taxonomy id
    const insertTax = sqlite.prepare(`
        INSERT INTO taxonomies (id, name, slug, label, parent_id, data, locale, translation_group, sort_order)
        VALUES (?, ?, ?, ?, ?, NULL, 'id', ?, ?)
        ON CONFLICT(name, slug, locale) DO UPDATE SET label = excluded.label;
    `);

    let catOrder = 0;
    for (const cat of categories) {
        const existing = sqlite.prepare("SELECT id FROM taxonomies WHERE name = 'category' AND slug = ? AND locale = 'id'").get(cat.slug);
        const taxId = existing ? existing.id : generateId();
        insertTax.run(taxId, "category", cat.slug, cat.name, null, taxId, catOrder++);
        categoryIdMap.set(cat.slug, taxId);
    }
    console.log(`   Migrated ${categories.length} categories.\n`);

    // 4. Migrate Top Tags
    console.log("🏷️ Migrating Top Tags...");
    const [tags] = await maria.query(`
        SELECT t.term_id, t.name, t.slug, tt.count
        FROM ERPtffHR_terms t
        JOIN ERPtffHR_term_taxonomy tt ON t.term_id = tt.term_id
        WHERE tt.taxonomy = 'post_tag' AND tt.count >= 2
        ORDER BY tt.count DESC
        LIMIT 500;
    `);

    const tagIdMap = new Map(); // slug -> sqlite taxonomy id
    let tagOrder = 0;
    for (const tag of tags) {
        const existing = sqlite.prepare("SELECT id FROM taxonomies WHERE name = 'tag' AND slug = ? AND locale = 'id'").get(tag.slug);
        const taxId = existing ? existing.id : generateId();
        insertTax.run(taxId, "tag", tag.slug, tag.name, null, taxId, tagOrder++);
        tagIdMap.set(tag.slug, taxId);
    }
    console.log(`   Migrated ${tags.length} tags.\n`);

    // 5. Query Published Posts with Thumbnails & Categories
    console.log(`📰 Fetching up to ${limit} published posts from MariaDB...`);
    const [posts] = await maria.query(`
        SELECT 
            p.ID,
            p.post_title,
            p.post_name,
            p.post_content,
            p.post_excerpt,
            p.post_date,
            p.post_modified,
            att.guid as featured_image_url
        FROM ERPtffHR_posts p
        LEFT JOIN ERPtffHR_postmeta pm ON p.ID = pm.post_id AND pm.meta_key = '_thumbnail_id'
        LEFT JOIN ERPtffHR_posts att ON pm.meta_value = att.ID
        WHERE p.post_type = 'post' AND p.post_status = 'publish' AND p.post_name != ''
        ORDER BY p.post_date DESC
        LIMIT ?;
    `, [limit]);

    console.log(`   Retrieved ${posts.length} posts. Processing & inserting into EmDash...`);

    const insertRevision = sqlite.prepare(`
        INSERT INTO revisions (id, collection, entry_id, data, author_id, created_at)
        VALUES (?, 'posts', ?, ?, NULL, ?)
        ON CONFLICT(id) DO UPDATE SET data = excluded.data;
    `);

    const insertPost = sqlite.prepare(`
        INSERT INTO ec_posts (
            id, slug, status, author_id, primary_byline_id, created_at, updated_at,
            published_at, scheduled_at, deleted_at, version, live_revision_id,
            draft_revision_id, locale, translation_group, title, featured_image,
            content, excerpt
        ) VALUES (
            ?, ?, 'published', NULL, NULL, ?, ?,
            ?, NULL, NULL, 1, ?,
            NULL, 'id', ?, ?, ?,
            ?, ?
        )
        ON CONFLICT(slug, locale) DO UPDATE SET
            title = excluded.title,
            content = excluded.content,
            excerpt = excluded.excerpt,
            featured_image = excluded.featured_image,
            live_revision_id = excluded.live_revision_id,
            updated_at = excluded.updated_at;
    `);

    const insertContentTax = sqlite.prepare(`
        INSERT OR IGNORE INTO content_taxonomies (
            collection, entry_id, taxonomy_id, status, scheduled_at, deleted_at,
            locale, published_at, created_at
        ) VALUES (
            'posts', ?, ?, NULL, NULL, NULL, NULL, NULL, NULL
        );
    `);

    // Fetch taxonomy relationships in bulk
    const postIds = posts.map(p => p.ID);
    const postTermsMap = new Map();

    if (postIds.length > 0) {
        const [termRelationships] = await maria.query(`
            SELECT tr.object_id, t.slug, tt.taxonomy
            FROM ERPtffHR_term_relationships tr
            JOIN ERPtffHR_term_taxonomy tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
            JOIN ERPtffHR_terms t ON tt.term_id = t.term_id
            WHERE tr.object_id IN (?) AND tt.taxonomy IN ('category', 'post_tag');
        `, [postIds]);

        for (const rel of termRelationships) {
            if (!postTermsMap.has(rel.object_id)) {
                postTermsMap.set(rel.object_id, { categories: [], tags: [] });
            }
            const record = postTermsMap.get(rel.object_id);
            if (rel.taxonomy === "category") {
                record.categories.push(rel.slug);
            } else if (rel.taxonomy === "post_tag") {
                record.tags.push(rel.slug);
            }
        }
    }

    // Begin SQLite Transaction
    sqlite.exec("BEGIN TRANSACTION;");

    let count = 0;
    for (const post of posts) {
        // Check if post with this slug already exists in ec_posts
        const existingPost = sqlite.prepare("SELECT id FROM ec_posts WHERE slug = ? AND locale = 'id'").get(post.post_name);
        const entryId = existingPost ? existingPost.id : generateId();
        const revisionId = generateId();
        const createdAt = new Date(post.post_date).toISOString();
        const updatedAt = new Date(post.post_modified).toISOString();

        // Convert HTML content to PortableText
        let portableTextContent = [];
        try {
            if (post.post_content && post.post_content.trim()) {
                portableTextContent = gutenbergToPortableText(post.post_content);
            }
        } catch {
            portableTextContent = [{
                _type: "block",
                _key: `fb-${post.ID}`,
                style: "normal",
                children: [{
                    _type: "span",
                    _key: `span-${post.ID}`,
                    text: stripHtml(post.post_content).slice(0, 2000)
                }]
            }];
        }

        // Featured Image JSON
        let featuredImageJson = null;
        let featuredImageObj = null;
        if (post.featured_image_url) {
            featuredImageObj = {
                id: generateId(),
                src: post.featured_image_url,
                alt: post.post_title,
                previewUrl: post.featured_image_url,
            };
            featuredImageJson = JSON.stringify(featuredImageObj);
        }

        // Excerpt
        let excerpt = post.post_excerpt ? stripHtml(post.post_excerpt) : "";
        if (!excerpt && post.post_content) {
            excerpt = stripHtml(post.post_content).slice(0, 160) + "...";
        }

        // Insert revision
        const revisionData = JSON.stringify({
            title: post.post_title,
            slug: post.post_name,
            content: portableTextContent,
            excerpt,
            featured_image: featuredImageObj
        });
        insertRevision.run(revisionId, entryId, revisionData, createdAt);

        // Insert ec_posts
        insertPost.run(
            entryId,
            post.post_name,
            createdAt,
            updatedAt,
            createdAt, // published_at
            revisionId, // live_revision_id
            entryId, // translation_group
            post.post_title,
            featuredImageJson,
            JSON.stringify(portableTextContent),
            excerpt
        );

        // Associate Taxonomies
        const terms = postTermsMap.get(post.ID) || { categories: [], tags: [] };
        for (const catSlug of terms.categories) {
            const taxId = categoryIdMap.get(catSlug);
            if (taxId) {
                insertContentTax.run(entryId, taxId);
            }
        }
        for (const tagSlug of terms.tags) {
            const taxId = tagIdMap.get(tagSlug);
            if (taxId) {
                insertContentTax.run(entryId, taxId);
            }
        }

        count++;
        if (count % 100 === 0 || count === posts.length) {
            process.stdout.write(`   Inserted ${count}/${posts.length} posts...\r`);
        }
    }

    sqlite.exec("COMMIT;");
    console.log(`\n\n✅ Successfully imported ${count} posts into EmDash ec_posts!`);

    // 6. Migrate Static Pages
    console.log("\n📄 Migrating Static Pages...");
    const [pages] = await maria.query(`
        SELECT ID, post_title, post_name, post_content, post_date, post_modified
        FROM ERPtffHR_posts
        WHERE post_type = 'page' AND post_status = 'publish' AND post_name != '';
    `);

    const insertPageRevision = sqlite.prepare(`
        INSERT INTO revisions (id, collection, entry_id, data, author_id, created_at)
        VALUES (?, 'pages', ?, ?, NULL, ?)
        ON CONFLICT(id) DO UPDATE SET data = excluded.data;
    `);

    const insertPage = sqlite.prepare(`
        INSERT INTO ec_pages (
            id, slug, status, author_id, primary_byline_id, created_at, updated_at,
            published_at, scheduled_at, deleted_at, version, live_revision_id,
            draft_revision_id, locale, translation_group, title, content
        ) VALUES (
            ?, ?, 'published', NULL, NULL, ?, ?,
            ?, NULL, NULL, 1, ?,
            NULL, 'id', ?, ?, ?
        )
        ON CONFLICT(slug, locale) DO UPDATE SET
            title = excluded.title,
            content = excluded.content,
            live_revision_id = excluded.live_revision_id,
            updated_at = excluded.updated_at;
    `);

    sqlite.exec("BEGIN TRANSACTION;");
    for (const page of pages) {
        const existingPage = sqlite.prepare("SELECT id FROM ec_pages WHERE slug = ? AND locale = 'id'").get(page.post_name);
        const pageId = existingPage ? existingPage.id : generateId();
        const revisionId = generateId();
        const createdAt = new Date(page.post_date).toISOString();
        const updatedAt = new Date(page.post_modified).toISOString();

        let pageBlocks = [];
        try {
            if (page.post_content) {
                pageBlocks = gutenbergToPortableText(page.post_content);
            }
        } catch {
            pageBlocks = [{
                _type: "block",
                _key: `p-${page.ID}`,
                style: "normal",
                children: [{ _type: "span", _key: `sp-${page.ID}`, text: stripHtml(page.post_content) }]
            }];
        }

        const pageRevData = JSON.stringify({
            title: page.post_title,
            slug: page.post_name,
            content: pageBlocks
        });
        insertPageRevision.run(revisionId, pageId, pageRevData, createdAt);

        insertPage.run(
            pageId,
            page.post_name,
            createdAt,
            updatedAt,
            createdAt,
            revisionId,
            pageId,
            page.post_title,
            JSON.stringify(pageBlocks)
        );
    }
    sqlite.exec("COMMIT;");
    console.log(`   Migrated ${pages.length} static pages.`);

    await maria.end();

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`\n=======================================================`);
    console.log(`🎉 Migration Completed in ${elapsed}s!`);
    console.log(`   - Categories: ${categories.length}`);
    console.log(`   - Tags: ${tags.length}`);
    console.log(`   - Posts: ${count}`);
    console.log(`   - Pages: ${pages.length}`);
    console.log(`=======================================================`);
}

main().catch(err => {
    console.error("Migration error:", err);
    process.exit(1);
});
