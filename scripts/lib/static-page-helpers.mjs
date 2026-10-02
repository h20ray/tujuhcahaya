import sqlite3 from "node:sqlite";
import crypto from "node:crypto";

export function generateId() {
	const timestamp = Date.now().toString(36).toUpperCase().padStart(10, "0");
	const random = crypto.randomBytes(10).toString("hex").toUpperCase().slice(0, 16);
	return `01${timestamp}${random}`.slice(0, 26);
}

export function block(text, style = "normal", marks = []) {
	return {
		_type: "block",
		_key: "k-" + crypto.randomBytes(4).toString("hex"),
		style,
		children: [
			{
				_type: "span",
				_key: "s-" + crypto.randomBytes(4).toString("hex"),
				text,
				marks,
			},
		],
	};
}

export function multiSpanBlock(spans, style = "normal") {
	return {
		_type: "block",
		_key: "k-" + crypto.randomBytes(4).toString("hex"),
		style,
		children: spans.map((s) => ({
			_type: "span",
			_key: "s-" + crypto.randomBytes(4).toString("hex"),
			text: s.text,
			marks: s.marks || [],
		})),
	};
}

export const db = new sqlite3.DatabaseSync("data.db");

export const upsertPage = db.prepare(`
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

export const insertRevision = db.prepare(`
  INSERT INTO revisions (id, collection, entry_id, data, author_id, created_at)
  VALUES (?, 'pages', ?, ?, NULL, ?)
  ON CONFLICT(id) DO UPDATE SET data = excluded.data;
`);

export function savePage(slug, locale, title, contentBlocks) {
	const existing = db
		.prepare("SELECT id, translation_group FROM ec_pages WHERE slug = ? AND locale = ?")
		.get(slug, locale);
	const pageId = existing ? existing.id : generateId();
	const translationGroup = existing?.translation_group || generateId();
	const revisionId = generateId();
	const now = new Date().toISOString();

	const revisionData = JSON.stringify({
		title,
		slug,
		content: contentBlocks,
	});

	insertRevision.run(revisionId, pageId, revisionData, now);
	upsertPage.run(
		pageId,
		slug,
		now,
		now,
		now,
		revisionId,
		locale,
		translationGroup,
		title,
		JSON.stringify(contentBlocks),
	);
	console.log(`   [Saved] ${slug} (${locale}) -> "${title}" [${contentBlocks.length} blocks]`);
}
