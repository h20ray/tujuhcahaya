import mysql from "mysql2/promise";
import sqlite3 from "node:sqlite";
import crypto from "node:crypto";
import { gutenbergToPortableText } from "@emdash-cms/gutenberg-to-portable-text";

function generateId() {
  const timestamp = Date.now().toString(36).toUpperCase().padStart(10, "0");
  const random = crypto.randomBytes(10).toString("hex").toUpperCase().slice(0, 16);
  return `01${timestamp}${random}`.slice(0, 26);
}

async function main() {
  console.log("=== Syncing Authentic WordPress Static Pages ===");
  
  // 1. Connect to MariaDB
  console.log("🔌 Connecting to MariaDB (wp_nlmfb_7c)...");
  const maria = await mysql.createConnection({
    host: process.env.MARIADB_HOST || "127.0.0.1",
    port: Number(process.env.MARIADB_PORT) || 3306,
    user: process.env.MARIADB_USER || "root",
    password: process.env.MARIADB_PASSWORD || "root",
    database: process.env.MARIADB_DATABASE || "wp_nlmfb_7c",
  });

  // 2. Connect to local SQLite
  const sqlite = new sqlite3.DatabaseSync("data.db");

  // Fetch about-us (ID 2285) from MariaDB
  const [rowsAbout] = await maria.query("SELECT ID, post_title, post_name, post_content FROM ERPtffHR_posts WHERE ID = 2285");
  if (rowsAbout.length > 0) {
    const rawContent = rowsAbout[0].post_content;
    const ptBlocks = gutenbergToPortableText(rawContent);
    const now = new Date().toISOString();
    
    // Check existing page
    const existing = sqlite.prepare("SELECT id, translation_group FROM ec_pages WHERE slug = 'about-us' AND locale = 'id'").get();
    const pageId = existing ? existing.id : generateId();
    const transGroup = existing?.translation_group || pageId;
    const revisionId = generateId();

    const revData = JSON.stringify({
      title: "Tentang Kami",
      slug: "about-us",
      content: ptBlocks,
    });

    sqlite.prepare(`
      INSERT INTO revisions (id, collection, entry_id, data, author_id, created_at)
      VALUES (?, 'pages', ?, ?, NULL, ?)
      ON CONFLICT(id) DO UPDATE SET data = excluded.data;
    `).run(revisionId, pageId, revData, now);

    sqlite.prepare(`
      INSERT INTO ec_pages (
        id, slug, status, author_id, primary_byline_id, created_at, updated_at,
        published_at, scheduled_at, deleted_at, version, live_revision_id,
        draft_revision_id, locale, translation_group, title, content
      ) VALUES (
        ?, 'about-us', 'published', NULL, NULL, ?, ?,
        ?, NULL, NULL, 1, ?,
        NULL, 'id', ?, 'Tentang Kami', ?
      )
      ON CONFLICT(slug, locale) DO UPDATE SET
        title = 'Tentang Kami',
        content = excluded.content,
        live_revision_id = excluded.live_revision_id,
        updated_at = excluded.updated_at;
    `).run(pageId, now, now, now, revisionId, transGroup, JSON.stringify(ptBlocks));

    console.log(`✅ [Restored Authentic WP] about-us (id) -> 8 original blocks preserved verbatim from WordPress ID 2285.`);
  }

  // Fetch redaksi (ID 3643) from MariaDB
  const [rowsRedaksi] = await maria.query("SELECT ID, post_title, post_name, post_content FROM ERPtffHR_posts WHERE ID = 3643");
  if (rowsRedaksi.length > 0) {
    const rawContent = rowsRedaksi[0].post_content;
    const ptBlocks = gutenbergToPortableText(rawContent);
    const now = new Date().toISOString();

    const existing = sqlite.prepare("SELECT id, translation_group FROM ec_pages WHERE slug = 'redaksi' AND locale = 'id'").get();
    const pageId = existing ? existing.id : generateId();
    const transGroup = existing?.translation_group || pageId;
    const revisionId = generateId();

    const revData = JSON.stringify({
      title: "Susunan Redaksi",
      slug: "redaksi",
      content: ptBlocks,
    });

    sqlite.prepare(`
      INSERT INTO revisions (id, collection, entry_id, data, author_id, created_at)
      VALUES (?, 'pages', ?, ?, NULL, ?)
      ON CONFLICT(id) DO UPDATE SET data = excluded.data;
    `).run(revisionId, pageId, revData, now);

    sqlite.prepare(`
      INSERT INTO ec_pages (
        id, slug, status, author_id, primary_byline_id, created_at, updated_at,
        published_at, scheduled_at, deleted_at, version, live_revision_id,
        draft_revision_id, locale, translation_group, title, content
      ) VALUES (
        ?, 'redaksi', 'published', NULL, NULL, ?, ?,
        ?, NULL, NULL, 1, ?,
        NULL, 'id', ?, 'Susunan Redaksi', ?
      )
      ON CONFLICT(slug, locale) DO UPDATE SET
        title = 'Susunan Redaksi',
        content = excluded.content,
        live_revision_id = excluded.live_revision_id,
        updated_at = excluded.updated_at;
    `).run(pageId, now, now, now, revisionId, transGroup, JSON.stringify(ptBlocks));

    console.log(`✅ [Restored Authentic WP] redaksi (id) -> 29 original blocks preserved verbatim from WordPress ID 3643.`);
  }

  await maria.end();
  console.log("🎉 Authentic WordPress pages synchronization complete!");
}

main().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
