import sqlite3 from "node:sqlite";

const db = new sqlite3.DatabaseSync("data.db");

console.log("=== 7C Author Verification Test ===");

const authors = db.prepare(`
    SELECT b.slug, b.display_name, b.bio, count(p.id) as post_count
    FROM _emdash_bylines b
    LEFT JOIN ec_posts p ON b.translation_group = p.primary_byline_id
    WHERE b.locale = 'id'
    GROUP BY b.slug
    ORDER BY post_count DESC;
`).all();

console.table(authors);

console.log("\nSample article with author attribution:");
const sample = db.prepare(`
    SELECT p.title, p.slug, b.display_name as author_name, b.bio as author_bio
    FROM ec_posts p
    JOIN _emdash_bylines b ON p.primary_byline_id = b.translation_group AND b.locale = 'id'
    LIMIT 2;
`).all();

console.table(sample);
