/**
 * Tujuhcahaya Auto-Publish Pipeline with 7C Editorial Quality Gate
 *
 * Enforces editorial standards, anti-AI cliches, proper bylines, and featured image
 * fallbacks. Supports local database, remote production Plesk database syncing,
 * and Markdown-to-PortableText in-text internal link parsing.
 */

import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execSync } from "node:child_process";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export function generateId() {
	const timestamp = Date.now().toString(36).toUpperCase().padStart(10, "0");
	const random = crypto.randomBytes(10).toString("hex").toUpperCase().slice(0, 16);
	return `01${timestamp}${random}`.slice(0, 26);
}

export function generateSlug(title, maxLen = 65) {
	let slug = title
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-");

	if (slug.length > maxLen) {
		const lastHyphen = slug.lastIndexOf("-", maxLen);
		if (lastHyphen > 25) {
			slug = slug.slice(0, lastHyphen);
		} else {
			slug = slug.slice(0, maxLen);
		}
	}
	return slug.replace(/-+$/, "").replace(/^-+/, "");
}

/**
 * Parse inline markdown links [anchor text](url) into PortableText spans and markDefs
 */
export function parseInlineSpans(text) {
	const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
	const spans = [];
	const markDefs = [];
	let lastIndex = 0;
	let match;
	let linkIdx = 0;

	while ((match = linkRegex.exec(text)) !== null) {
		if (match.index > lastIndex) {
			spans.push({
				_type: "span",
				_key: `spn-${spans.length}-${crypto.randomBytes(3).toString("hex")}`,
				text: text.slice(lastIndex, match.index)
			});
		}
		const markKey = `lnk-${linkIdx++}`;
		markDefs.push({
			_key: markKey,
			_type: "link",
			href: match[2]
		});
		spans.push({
			_type: "span",
			_key: `spn-${spans.length}-${crypto.randomBytes(3).toString("hex")}`,
			text: match[1],
			marks: [markKey]
		});
		lastIndex = linkRegex.lastIndex;
	}

	if (lastIndex < text.length) {
		spans.push({
			_type: "span",
			_key: `spn-${spans.length}-${crypto.randomBytes(3).toString("hex")}`,
			text: text.slice(lastIndex)
		});
	}

	if (spans.length === 0) {
		spans.push({
			_type: "span",
			_key: `spn-0-${crypto.randomBytes(3).toString("hex")}`,
			text: text
		});
	}

	return { spans, markDefs };
}

/**
 * Convert standard markdown/prose text into EmDash-compatible PortableText with link support
 */
export function proseToPortableText(bodyText) {
	const paragraphs = bodyText.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
	const blocks = [];

	for (let i = 0; i < paragraphs.length; i++) {
		const p = paragraphs[i];
		const key = `blk-${i}-${crypto.randomBytes(4).toString("hex")}`;

		let style = "normal";
		let rawText = p;

		if (p.startsWith("### ")) {
			style = "h3";
			rawText = p.replace(/^###\s+/, "");
		} else if (p.startsWith("## ")) {
			style = "h2";
			rawText = p.replace(/^##\s+/, "");
		}

		const { spans, markDefs } = parseInlineSpans(rawText);

		blocks.push({
			_type: "block",
			_key: key,
			style,
			markDefs,
			children: spans
		});
	}

	return blocks;
}

/**
 * Resolve Author Byline ID based on category
 */
export function resolveAuthorByline(category) {
	const cat = (category || "").toLowerCase();
	if (cat.includes("tech")) return "0100MUNS3DJPCA4539BDBEB12A"; // Elang Elano
	if (cat.includes("musik") || cat.includes("music")) return "0100MUNS3DJOA35D985DFFDBA0"; // Margaretha Nina
	if (cat.includes("game")) return "0100MUNS3DJL68FA69B26FACE9"; // Andoru Ray
	if (cat.includes("kesehatan")) return "0100MUNS3DJQ06A12A6DABF37A"; // Rachel Patricia
	if (cat.includes("budaya")) return "0100MUNS3DJSD97205CCB31353"; // Sarah Dilla
	return "0100MUNS3DJT76BFD04713B98E"; // Hendra Tujuhcahaya (Pemimpin Redaksi)
}

/**
 * Main Auto-Publish execution function
 */
export async function autoPublishPost(payload, options = {}) {
	const {
		title,
		content,
		excerpt,
		category = "tech",
		tags = [],
		byline = null,
		imageUrl = null,
		imageAlt = null,
		forceDraft = false,
	} = payload;

	if (!title || !content) {
		throw new Error("Field wajib 'title' dan 'content' tidak boleh kosong.");
	}

	// 1. Run 7C Editorial Quality Gate
	const audit = validate7cEditorial(title, content, excerpt);
	const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

	// Check if qualified for published status
	const isQualified = audit.valid && audit.score >= 80 && wordCount >= 100 && !forceDraft;
	const status = isQualified ? "published" : "draft";

	const slug = generateSlug(title);
	const authorBylineId = byline || resolveAuthorByline(category);
	const now = new Date().toISOString();
	const entryId = generateId();
	const revisionId = generateId();

	// 2. Resolve Featured Image with safe fallback
	const finalImageUrl = imageUrl && typeof imageUrl === "string" && imageUrl.startsWith("http")
		? imageUrl.trim()
		: "/images/default-featured-image.webp";

	const featuredImageObj = {
		id: generateId(),
		src: finalImageUrl,
		url: finalImageUrl,
		alt: imageAlt || title,
		width: 1280,
		height: 720,
	};

	const portableTextContent = proseToPortableText(content);
	const cleanExcerpt = excerpt && excerpt.trim()
		? excerpt.trim().slice(0, 200)
		: content.slice(0, 160).replace(/\n/g, " ").trim();

	// 3. Save to outbox
	const pendingDir = path.resolve(process.cwd(), "scripts", "outbox");
	if (!fs.existsSync(pendingDir)) {
		fs.mkdirSync(pendingDir, { recursive: true });
	}
	const outboxPath = path.join(pendingDir, `${slug}.json`);
	fs.writeFileSync(outboxPath, JSON.stringify({
		entryId,
		slug,
		status,
		title,
		excerpt: cleanExcerpt,
		category,
		tags,
		byline: authorBylineId,
		featuredImage: featuredImageObj,
		portableTextContent,
		audit,
		createdAt: now,
	}, null, 2));

	// 4. Commit to SQLite Database (Local or Remote)
	const dbPath = path.resolve(process.cwd(), "data.db");
	let dbSaved = false;
	let remotePublished = false;

	if (fs.existsSync(dbPath) && !options.remoteOnly) {
		const db = new DatabaseSync(dbPath);
		try {
			const existing = db.prepare("SELECT id FROM ec_posts WHERE slug = ? AND locale = 'id'").get(slug);
			const targetId = existing ? existing.id : entryId;

			const revData = JSON.stringify({
				title,
				slug,
				excerpt: cleanExcerpt,
				content: portableTextContent,
				featured_image: featuredImageObj,
				category,
				tags,
				byline: authorBylineId,
			});

			db.prepare(`
				INSERT INTO revisions (id, collection, entry_id, data, author_id, created_at)
				VALUES (?, 'posts', ?, ?, NULL, ?)
				ON CONFLICT(id) DO UPDATE SET data = excluded.data
			`).run(revisionId, targetId, revData, now);

			db.prepare(`
				INSERT INTO ec_posts (
					id, slug, status, author_id, primary_byline_id, created_at, updated_at,
					published_at, scheduled_at, deleted_at, version, live_revision_id,
					draft_revision_id, locale, translation_group, title, featured_image,
					content, excerpt
				) VALUES (
					?, ?, ?, NULL, ?, ?, ?,
					?, NULL, NULL, 1, ?,
					NULL, 'id', ?, ?, ?,
					?, ?
				)
				ON CONFLICT(slug, locale) DO UPDATE SET
					title = excluded.title,
					content = excluded.content,
					excerpt = excluded.excerpt,
					featured_image = excluded.featured_image,
					primary_byline_id = excluded.primary_byline_id,
					status = excluded.status,
					live_revision_id = excluded.live_revision_id,
					updated_at = excluded.updated_at
			`).run(
				targetId,
				slug,
				status,
				authorBylineId,
				now,
				now,
				status === "published" ? now : null,
				status === "published" ? revisionId : null,
				targetId,
				title,
				JSON.stringify(featuredImageObj),
				JSON.stringify(portableTextContent),
				cleanExcerpt,
			);

			dbSaved = true;
		} finally {
			db.close();
		}
	}

	// Always sync to remote production Plesk server if remote flag is set or local db is absent
	if (!dbSaved || options.remote) {
		try {
			const pyCmd = `python scripts/publish_remote.py "${outboxPath}"`;
			const pyOut = execSync(pyCmd, { encoding: "utf-8" });
			const parsed = JSON.parse(pyOut);
			if (parsed.success) {
				remotePublished = true;
			}
		} catch (err) {
			console.error("[Remote Sync Warning]:", err.message);
		}
	}

	return {
		success: true,
		slug,
		status,
		score: audit.score,
		byline: authorBylineId,
		imageUrl: finalImageUrl,
		isFallbackImage: finalImageUrl.includes("default-featured-image"),
		wordCount,
		dbSaved,
		remotePublished,
		errors: audit.errors,
		warnings: audit.warnings,
		suggestions: audit.suggestions,
		url: `https://www.tujuhcahaya.com/${slug}`,
	};
}

// CLI Execution entrypoint
if (process.argv[1] && process.argv[1].endsWith("auto-publish.mjs")) {
	const args = process.argv.slice(2);
	if (args.includes("--recent")) {
		try {
			const recentOut = execSync("python scripts/publish_remote.py --recent", { encoding: "utf-8" });
			console.log(recentOut.trim());
			process.exit(0);
		} catch (e) {
			console.error("Failed to fetch recent posts:", e.message);
			process.exit(1);
		}
	}

	const payloadArg = args.find(a => a.startsWith("--payload="));
	const fileArg = args.find(a => a.startsWith("--file="));
	const isRemote = args.includes("--remote");

	let inputData = null;
	if (payloadArg) {
		inputData = JSON.parse(payloadArg.replace("--payload=", ""));
	} else if (fileArg) {
		const filePath = fileArg.replace("--file=", "");
		inputData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
	}

	if (!inputData) {
		console.error("Usage: node scripts/auto-publish.mjs --payload='<json>' or --file=<path> [--remote]");
		process.exit(1);
	}

	autoPublishPost(inputData, { remote: isRemote })
		.then(res => {
			console.log(JSON.stringify(res, null, 2));
		})
		.catch(err => {
			console.error("Auto-Publish Error:", err);
			process.exit(1);
		});
}
