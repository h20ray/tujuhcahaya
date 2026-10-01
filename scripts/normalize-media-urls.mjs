import sqlite3 from "node:sqlite";
import fs from "node:fs";

async function main() {
    console.log("=======================================================");
    console.log("🧹 Tujuhcahaya 7C: Media URL Normalization Pipeline");
    console.log("=======================================================\n");

    const dbPath = "data.db";
    const backupPath = "data.db.pre-media-norm.bak";

    if (!fs.existsSync(dbPath)) {
        console.error(`Error: ${dbPath} not found!`);
        process.exit(1);
    }

    // 1. Checkpoint WAL and create backup
    console.log("1. Checkpointing WAL and creating authoritative backup...");
    let db = new sqlite3.DatabaseSync(dbPath);
    db.prepare("PRAGMA wal_checkpoint(TRUNCATE);").run();
    db.close();

    fs.copyFileSync(dbPath, backupPath);
    console.log(`   ✅ Backup saved -> ${backupPath}\n`);

    // 2. Reopen DB
    db = new sqlite3.DatabaseSync(dbPath);

    // Matches standard URLs, JSON-escaped URLs, and Jetpack CDN (i0.wp.com/www.tujuhcahaya.com/...)
    const internalUrlDimRegex = /(https?:(?:\/|\\\/){2}(?:i[0-3]\.wp\.com(?:\/|\\\/)(?:www\.)?tujuhcahaya\.com(?:\/|\\\/)wp-content|media\.xlocal\.id(?:\/|\\\/)tujuhcahaya|www\.tujuhcahaya\.com|tujuhcahaya\.com)(?:\/|\\\/)uploads(?:\/|\\\/)[^\s"'\\>]+?)-(\d{2,4})x(\d{2,4})\.(jpg|jpeg|png|webp|gif)/gi;

    // 3. Process Featured Images
    console.log("2. Scanning & Normalizing Featured Images...");
    const postsWithImages = db.prepare("SELECT id, slug, featured_image FROM ec_posts WHERE featured_image IS NOT NULL;").all();
    const updateFeatured = db.prepare("UPDATE ec_posts SET featured_image = ? WHERE id = ?;");
    
    let featUpdated = 0;
    db.exec("BEGIN TRANSACTION;");
    for (const post of postsWithImages) {
        if (!post.featured_image) continue;
        if (internalUrlDimRegex.test(post.featured_image)) {
            internalUrlDimRegex.lastIndex = 0;
            const normalized = post.featured_image.replace(internalUrlDimRegex, "$1.$4");
            updateFeatured.run(normalized, post.id);
            featUpdated++;
            console.log(`   - Normalized featured image for: ${post.slug}`);
        }
        internalUrlDimRegex.lastIndex = 0;
    }
    db.exec("COMMIT;");
    console.log(`   ✅ Normalized ${featUpdated} featured images.\n`);

    // 4. Process Content Body
    console.log("3. Scanning & Normalizing Post Content Body...");
    const postsWithContent = db.prepare("SELECT id, slug, content FROM ec_posts WHERE content IS NOT NULL;").all();
    const updateContent = db.prepare("UPDATE ec_posts SET content = ? WHERE id = ?;");

    let contentUpdated = 0;
    let totalUrlsReplaced = 0;

    db.exec("BEGIN TRANSACTION;");
    for (const post of postsWithContent) {
        if (!post.content) continue;
        const contentStr = post.content;
        
        const matches = contentStr.match(internalUrlDimRegex);
        if (matches && matches.length > 0) {
            internalUrlDimRegex.lastIndex = 0;
            // Replace internal URL dimensions
            let normalized = contentStr.replace(internalUrlDimRegex, "$1.$4");
            
            // Clean up legacy WordPress srcset attributes that might have lingering thumbnail dimensions
            // e.g. srcset="..." or srcset=\"...\"
            normalized = normalized.replace(/srcset=\\?["'][^"']+?\\?["']/gi, "");

            updateContent.run(normalized, post.id);
            contentUpdated++;
            totalUrlsReplaced += matches.length;
        }
        internalUrlDimRegex.lastIndex = 0;
    }
    db.exec("COMMIT;");
    console.log(`   ✅ Normalized ${contentUpdated} post content bodies (${totalUrlsReplaced} internal URLs fixed).\n`);

    // 5. Verification Check
    console.log("4. Running Post-Normalization Verification...");
    const verifyPosts = db.prepare("SELECT id, slug, featured_image, content FROM ec_posts;").all();
    let remainingFeat = 0;
    let remainingContent = 0;

    for (const p of verifyPosts) {
        if (p.featured_image && internalUrlDimRegex.test(p.featured_image)) {
            remainingFeat++;
        }
        internalUrlDimRegex.lastIndex = 0;
        if (p.content && internalUrlDimRegex.test(p.content)) {
            remainingContent++;
        }
        internalUrlDimRegex.lastIndex = 0;
    }

    console.log(`   - Remaining internal resized featured images: ${remainingFeat}`);
    console.log(`   - Remaining internal resized content URLs: ${remainingContent}`);

    if (remainingFeat === 0 && remainingContent === 0) {
        console.log("   🎉 VERIFICATION PASSED: 0 internal resized URLs remain in ec_posts!\n");
    } else {
        console.warn(`   ⚠️ WARNING: Some internal resized URLs still remain!`);
    }

    // 6. Checkpoint WAL
    db.prepare("PRAGMA wal_checkpoint(TRUNCATE);").run();
    db.close();

    console.log("=======================================================");
    console.log("🎉 DATABASE NORMALIZATION COMPLETE!");
    console.log("=======================================================\n");
}

main().catch(err => {
    console.error("Normalization error:", err);
    process.exit(1);
});
