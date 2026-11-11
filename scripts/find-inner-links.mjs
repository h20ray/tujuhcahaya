#!/usr/bin/env node
/**
 * Tujuhcahaya Inner Link Finder
 *
 * Utility to search and retrieve relevant published posts from data.db for contextual
 * post-to-post SEO internal linking.
 *
 * Usage:
 *   node scripts/find-inner-links.mjs --q "bioware"
 *   node scripts/find-inner-links.mjs --category game --limit 5
 *   node scripts/find-inner-links.mjs --tag "industri-game"
 *   node scripts/find-inner-links.mjs --recent 8
 */

import { DatabaseSync } from "node:sqlite";
import path from "node:path";

const dbPath = path.resolve(process.cwd(), "data.db");
const db = new DatabaseSync(dbPath);

const args = process.argv.slice(2);
let query = "";
let category = "";
let tag = "";
let limit = 8;
let showRecent = false;

for (let i = 0; i < args.length; i++) {
	if (args[i] === "--q" && args[i + 1]) {
		query = args[++i];
	} else if (args[i] === "--category" && args[i + 1]) {
		category = args[++i].toLowerCase();
	} else if (args[i] === "--tag" && args[i + 1]) {
		tag = args[++i].toLowerCase();
	} else if (args[i] === "--limit" && args[i + 1]) {
		limit = parseInt(args[++i], 10) || 8;
	} else if (args[i] === "--recent") {
		showRecent = true;
		if (args[i + 1] && !args[i + 1].startsWith("-")) {
			limit = parseInt(args[++i], 10) || 8;
		}
	}
}

let sql = `
SELECT p.id, p.slug, p.title, p.created_at, p.published_at,
       GROUP_CONCAT(CASE WHEN t.name = 'category' THEN t.slug END) as categories,
       GROUP_CONCAT(CASE WHEN t.name = 'tag' THEN t.label END) as tags
FROM ec_posts p
LEFT JOIN content_taxonomies ct ON ct.entry_id = p.id AND ct.collection = 'posts'
LEFT JOIN taxonomies t ON t.id = ct.taxonomy_id
WHERE p.status = 'published'
`;

const params = [];

if (category) {
	sql += " AND EXISTS (SELECT 1 FROM content_taxonomies ct2 JOIN taxonomies t2 ON t2.id = ct2.taxonomy_id WHERE ct2.entry_id = p.id AND t2.name = 'category' AND t2.slug = ?)";
	params.push(category);
}

if (tag) {
	sql += " AND EXISTS (SELECT 1 FROM content_taxonomies ct3 JOIN taxonomies t3 ON t3.id = ct3.taxonomy_id WHERE ct3.entry_id = p.id AND t3.name = 'tag' AND (t3.slug = ? OR t3.label LIKE ?))";
	params.push(tag, `%${tag}%`);
}

if (query) {
	const keywords = query.trim().split(/\s+/).filter(Boolean);
	const likeClauses = keywords.map(() => "(p.title LIKE ? OR p.slug LIKE ?)");
	sql += ` AND (${likeClauses.join(" OR ")})`;
	for (const kw of keywords) {
		params.push(`%${kw}%`, `%${kw}%`);
	}
}

sql += `
GROUP BY p.id
ORDER BY p.published_at DESC, p.created_at DESC
LIMIT ?
`;
params.push(limit);

const rows = db.prepare(sql).all(...params);

console.log(`\n🔍 Ditemukan ${rows.length} kandidat artikel terkait untuk contextual inner link:`);
console.log("==========================================================================================");
for (const r of rows) {
	const cats = r.categories ? `[${r.categories}] ` : "";
	console.log(`📌 Judul   : ${cats}${r.title}`);
	console.log(`🔗 Slug    : /${r.slug}`);
	console.log(`💡 Markdown: [kata kunci / frasa konteks alami](/${r.slug})`);
	if (r.tags) {
		console.log(`🏷️ Tags    : ${r.tags.split(",").slice(0, 5).join(", ")}`);
	}
	console.log("------------------------------------------------------------------------------------------");
}
