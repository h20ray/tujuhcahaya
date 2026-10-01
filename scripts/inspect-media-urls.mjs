import sqlite3 from "node:sqlite";

const db = new sqlite3.DatabaseSync("data.db");

// 1. Featured image samples
const sampleImages = db.prepare("SELECT featured_image FROM ec_posts WHERE featured_image IS NOT NULL LIMIT 5;").all();
console.log("=== Featured Image Samples ===");
sampleImages.forEach((img, i) => {
    console.log(`[${i+1}]`, img.featured_image);
});

// 2. Count posts with featured images
const countWithImages = db.prepare("SELECT COUNT(*) as count FROM ec_posts WHERE featured_image IS NOT NULL;").get();
console.log("\nPosts with featured_image:", countWithImages.count);

// 3. Inspect unique domains in featured_image
const allImages = db.prepare("SELECT featured_image FROM ec_posts WHERE featured_image IS NOT NULL;").all();
const domainCounts = {};
for (const r of allImages) {
    try {
        const obj = JSON.parse(r.featured_image);
        if (obj && obj.src) {
            const url = new URL(obj.src);
            domainCounts[url.hostname] = (domainCounts[url.hostname] || 0) + 1;
        }
    } catch {}
}
console.log("\nHostnames in featured_image:", domainCounts);

const sampleWp = db.prepare("SELECT featured_image FROM ec_posts WHERE featured_image LIKE '%www.tujuhcahaya.com%' LIMIT 3;").all();
console.log("\nSample www.tujuhcahaya.com images:");
sampleWp.forEach(r => console.log(JSON.parse(r.featured_image).src));

const bodyUploadsCount = db.prepare("SELECT count(*) as c FROM ec_posts WHERE content LIKE '%wp-content/uploads%';").get();
console.log("\nPosts with wp-content/uploads in content body:", bodyUploadsCount.c);
