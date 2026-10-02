import sqlite3 from "node:sqlite";
import fs from "node:fs";
import crypto from "node:crypto";

function generateId() {
  const timestamp = Date.now().toString(36).toUpperCase().padStart(10, "0");
  const random = crypto.randomBytes(10).toString("hex").toUpperCase().slice(0, 16);
  return `01${timestamp}${random}`.slice(0, 26);
}

const db = new sqlite3.DatabaseSync("data.db");
const payload = JSON.parse(fs.readFileSync("scripts/static-pages-payload.json", "utf8"));

console.log("=== Applying Static Pages Payload to SQLite Database ===");

// 1. Purge stale pages
db.prepare("DELETE FROM ec_pages WHERE slug IN ('about', 'tujuhcahaya', 'homepage')").run();

const upsertPage = db.prepare(`
  INSERT INTO ec_pages (
    id, slug, status, author_id, primary_byline_id, created_at, updated_at,
    published_at, scheduled_at, deleted_at, version, live_revision_id,
    draft_revision_id, locale, translation_group, title, content
  ) VALUES (
    ?, ?, 'published', NULL, NULL, ?, ?,
    ?, NULL, NULL, 1, ?,
    NULL, ?, ?, ?, ?
  )
  ON CONFLICT(slug, locale) DO UPDATE SET
    title = excluded.title,
    content = excluded.content,
    live_revision_id = excluded.live_revision_id,
    updated_at = excluded.updated_at;
`);

const insertRevision = db.prepare(`
  INSERT INTO revisions (id, collection, entry_id, data, author_id, created_at)
  VALUES (?, 'pages', ?, ?, NULL, ?)
  ON CONFLICT(id) DO UPDATE SET data = excluded.data;
`);

for (const p of payload) {
  const existing = db.prepare("SELECT id, translation_group FROM ec_pages WHERE slug = ? AND locale = ?").get(p.slug, p.locale);
  const pageId = existing ? existing.id : generateId();
  const transGroup = existing?.translation_group || pageId;
  const revisionId = generateId();
  const now = new Date().toISOString();

  const revData = JSON.stringify({
    title: p.title,
    slug: p.slug,
    content: p.content,
  });

  insertRevision.run(revisionId, pageId, revData, now);
  upsertPage.run(
    pageId,
    p.slug,
    now,
    now,
    now,
    revisionId,
    p.locale,
    transGroup,
    p.title,
    JSON.stringify(p.content)
  );
  console.log(`   [Applied] ${p.slug} (${p.locale}) -> "${p.title}" [${p.content.length} blocks]`);
}

db.exec("PRAGMA wal_checkpoint(TRUNCATE);");
console.log("✅ All static pages successfully synchronized and WAL checkpointed!");
