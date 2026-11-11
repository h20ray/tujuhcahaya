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
import { marked } from "marked";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { submitToIndexNow } from "./indexnow.mjs";

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
 * Helper to traverse marked tokens and generate PortableText spans and markDefs
 */
export function parseTokensToSpans(tokens) {
	const spans = [];
	const markDefs = [];
	const extractedImages = [];
	let linkCounter = 0;

	function traverse(tokenList, activeMarks = []) {
		for (const t of tokenList) {
			if (t.type === "text") {
				if (t.tokens && t.tokens.length > 0) {
					traverse(t.tokens, activeMarks);
				} else {
					spans.push({
						_type: "span",
						_key: `spn-${spans.length}-${crypto.randomBytes(3).toString("hex")}`,
						text: t.text || t.raw || "",
						marks: [...activeMarks]
					});
				}
			} else if (t.type === "strong") {
				const nextMarks = activeMarks.includes("strong") ? activeMarks : [...activeMarks, "strong"];
				if (t.tokens && t.tokens.length > 0) {
					traverse(t.tokens, nextMarks);
				} else {
					spans.push({
						_type: "span",
						_key: `spn-${spans.length}-${crypto.randomBytes(3).toString("hex")}`,
						text: t.text || "",
						marks: nextMarks
					});
				}
			} else if (t.type === "em") {
				const nextMarks = activeMarks.includes("em") ? activeMarks : [...activeMarks, "em"];
				if (t.tokens && t.tokens.length > 0) {
					traverse(t.tokens, nextMarks);
				} else {
					spans.push({
						_type: "span",
						_key: `spn-${spans.length}-${crypto.randomBytes(3).toString("hex")}`,
						text: t.text || "",
						marks: nextMarks
					});
				}
			} else if (t.type === "codespan") {
				spans.push({
					_type: "span",
					_key: `spn-${spans.length}-${crypto.randomBytes(3).toString("hex")}`,
					text: t.text || "",
					marks: activeMarks.includes("code") ? [...activeMarks] : [...activeMarks, "code"]
				});
			} else if (t.type === "del") {
				const nextMarks = activeMarks.includes("strike-through") ? activeMarks : [...activeMarks, "strike-through"];
				if (t.tokens && t.tokens.length > 0) {
					traverse(t.tokens, nextMarks);
				} else {
					spans.push({
						_type: "span",
						_key: `spn-${spans.length}-${crypto.randomBytes(3).toString("hex")}`,
						text: t.text || "",
						marks: nextMarks
					});
				}
			} else if (t.type === "link") {
				const markKey = `lnk-${linkCounter++}`;
				markDefs.push({
					_key: markKey,
					_type: "link",
					href: t.href
				});
				const nextMarks = [...activeMarks, markKey];
				if (t.tokens && t.tokens.length > 0) {
					traverse(t.tokens, nextMarks);
				} else {
					spans.push({
						_type: "span",
						_key: `spn-${spans.length}-${crypto.randomBytes(3).toString("hex")}`,
						text: t.text || "",
						marks: nextMarks
					});
				}
			} else if (t.type === "image") {
				extractedImages.push({
					_type: "image",
					_key: `img-${extractedImages.length}-${crypto.randomBytes(3).toString("hex")}`,
					asset: {
						_type: "reference",
						_ref: `ast-${crypto.randomBytes(4).toString("hex")}`,
						url: t.href
					},
					alt: t.text || "",
					caption: t.title || t.text || "",
					width: 1200,
					height: 675
				});
			} else if (t.raw) {
				spans.push({
					_type: "span",
					_key: `spn-${spans.length}-${crypto.randomBytes(3).toString("hex")}`,
					text: t.raw,
					marks: [...activeMarks]
				});
			}
		}
	}

	traverse(tokens);
	return { spans, markDefs, extractedImages };
}

/**
 * Parse inline markdown (bold, italic, links, code) into PortableText spans and markDefs
 */
export function parseInlineSpans(text) {
	if (!text) return { spans: [], markDefs: [] };
	const tokens = marked.lexer(text, { gfm: true });
	const inlineTokens = [];
	for (const t of tokens) {
		if (t.tokens) inlineTokens.push(...t.tokens);
		else inlineTokens.push(t);
	}
	const { spans, markDefs } = parseTokensToSpans(inlineTokens);
	if (spans.length === 0) {
		spans.push({
			_type: "span",
			_key: `spn-0-${crypto.randomBytes(3).toString("hex")}`,
			text: text,
			marks: []
		});
	}
	return { spans, markDefs };
}

/**
 * Convert standard markdown/prose text into EmDash-compatible PortableText AST:
 * Supports headings, bold/italic, lists (numbered/bullet), blockquotes, code blocks, and in-body images.
 */
export function proseToPortableText(bodyText) {
	if (!bodyText || typeof bodyText !== "string") return [];

	const tokens = marked.lexer(bodyText, { gfm: true });
	const blocks = [];

	for (let i = 0; i < tokens.length; i++) {
		const token = tokens[i];
		const key = `blk-${i}-${crypto.randomBytes(4).toString("hex")}`;

		if (token.type === "heading") {
			const style = token.depth <= 2 ? "h2" : token.depth === 3 ? "h3" : "h4";
			const { spans, markDefs } = parseTokensToSpans(token.tokens || []);
			blocks.push({
				_type: "block",
				_key: key,
				style,
				markDefs,
				children: spans.length > 0 ? spans : [{ _type: "span", _key: `spn-${crypto.randomBytes(3).toString("hex")}`, text: token.text, marks: [] }]
			});
		} else if (token.type === "paragraph") {
			// If paragraph consists solely of an image: ![alt](url)
			if (token.tokens?.length === 1 && token.tokens[0].type === "image") {
				const img = token.tokens[0];
				blocks.push({
					_type: "image",
					_key: `img-${crypto.randomBytes(4).toString("hex")}`,
					asset: {
						_type: "reference",
						_ref: `ast-${crypto.randomBytes(4).toString("hex")}`,
						url: img.href
					},
					alt: img.text || "",
					caption: img.title || img.text || "",
					width: 1200,
					height: 675
				});
			} else {
				const { spans, markDefs, extractedImages } = parseTokensToSpans(token.tokens || []);
				for (const imgBlock of extractedImages) {
					blocks.push(imgBlock);
				}
				if (spans.length > 0 && spans.some(s => s.text.trim().length > 0)) {
					blocks.push({
						_type: "block",
						_key: key,
						style: "normal",
						markDefs,
						children: spans
					});
				}
			}
		} else if (token.type === "list") {
			const listItemType = token.ordered ? "number" : "bullet";
			for (let j = 0; j < token.items.length; j++) {
				const item = token.items[j];
				const itemTokens = [];
				if (item.tokens) {
					for (const it of item.tokens) {
						if (it.type === "text" && it.tokens) {
							itemTokens.push(...it.tokens);
						} else if (it.type === "paragraph" && it.tokens) {
							itemTokens.push(...it.tokens);
						} else if (it.tokens) {
							itemTokens.push(...it.tokens);
						} else {
							itemTokens.push(it);
						}
					}
				}
				const { spans, markDefs } = parseTokensToSpans(itemTokens.length > 0 ? itemTokens : [{ type: "text", text: item.text }]);
				blocks.push({
					_type: "block",
					_key: `blk-${i}-${j}-${crypto.randomBytes(3).toString("hex")}`,
					style: "normal",
					listItem: listItemType,
					level: 1,
					markDefs,
					children: spans.length > 0 ? spans : [{ _type: "span", _key: `spn-${crypto.randomBytes(3).toString("hex")}`, text: item.text, marks: [] }]
				});
			}
		} else if (token.type === "blockquote") {
			for (const inner of token.tokens || []) {
				if (inner.type === "paragraph") {
					const { spans, markDefs } = parseTokensToSpans(inner.tokens || []);
					blocks.push({
						_type: "block",
						_key: `blk-${crypto.randomBytes(4).toString("hex")}`,
						style: "blockquote",
						markDefs,
						children: spans.length > 0 ? spans : [{ _type: "span", _key: `spn-${crypto.randomBytes(3).toString("hex")}`, text: inner.text, marks: [] }]
					});
				}
			}
		} else if (token.type === "code") {
			blocks.push({
				_type: "code",
				_key: `cod-${crypto.randomBytes(4).toString("hex")}`,
				code: token.text,
				language: token.lang || ""
			});
		}
	}

	return blocks;
}

/**
 * Resolve Author Byline ID based on category
 */
export function resolveAuthorByline(category) {
	const cat = (category || "").toLowerCase();
	if (cat.includes("tech") || cat.includes("teknologi") || cat.includes("gadget") || cat.includes("code") || cat.includes("ai")) {
		return "0100MUNS3DJPCA4539BDBEB12A"; // Elang Elano
	}
	if (cat.includes("game") || cat.includes("gaming") || cat.includes("esport")) {
		return "0100MUNS3DJL68FA69B26FACE9"; // Andoru Ray
	}
	// Seluruh liputan musik, budaya urban, seni, dan gaya hidup ke Nina
	return "0100MUNS3DJOA35D985DFFDBA0"; // Margaretha Nina
}

/**
 * Sync taxonomy entries into taxonomies and content_taxonomies
 */
export function syncPostTaxonomies(db, entryId, category, tags = [], locale = "id", now = new Date().toISOString()) {
	try {
		// 1. Sync category taxonomy
		if (category) {
			const catSlug = generateSlug(category);
			const catId = `cat_${catSlug}`;
			db.prepare(`
				INSERT OR IGNORE INTO taxonomies (id, name, slug, label, parent_id, data, locale, translation_group, sort_order)
				VALUES (?, 'category', ?, ?, NULL, '{}', ?, ?, 0)
			`).run(catId, catSlug, category, locale, catId);

			const existingCat = db.prepare("SELECT id FROM taxonomies WHERE name = 'category' AND slug = ? AND locale = ?").get(catSlug, locale);
			const finalCatId = existingCat ? existingCat.id : catId;

			db.prepare(`
				INSERT OR IGNORE INTO content_taxonomies (collection, entry_id, taxonomy_id, status, scheduled_at, deleted_at, locale, published_at, created_at)
				VALUES ('posts', ?, ?, 'published', NULL, NULL, ?, ?, ?)
			`).run(entryId, finalCatId, locale, now, now);
		}

		// 2. Sync tag taxonomies
		for (const tag of tags) {
			const tagLabel = tag.trim();
			if (!tagLabel) continue;
			const tagSlug = generateSlug(tagLabel);
			const tagId = `tag_${tagSlug}`;

			db.prepare(`
				INSERT OR IGNORE INTO taxonomies (id, name, slug, label, parent_id, data, locale, translation_group, sort_order)
				VALUES (?, 'tag', ?, ?, NULL, '{}', ?, ?, 0)
			`).run(tagId, tagSlug, tagLabel, locale, tagId);

			const existingTag = db.prepare("SELECT id FROM taxonomies WHERE name = 'tag' AND slug = ? AND locale = ?").get(tagSlug, locale);
			const finalTagId = existingTag ? existingTag.id : tagId;

			db.prepare(`
				INSERT OR IGNORE INTO content_taxonomies (collection, entry_id, taxonomy_id, status, scheduled_at, deleted_at, locale, published_at, created_at)
				VALUES ('posts', ?, ?, 'published', NULL, NULL, ?, ?, ?)
			`).run(entryId, finalTagId, locale, now, now);
		}
	} catch (err) {
		console.warn("[Taxonomy Sync Warning]:", err.message);
	}
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

	// 0. Circuit Breaker / Safety Pause Check
	const pauseFile = path.resolve(process.cwd(), ".pause-auto-publish");
	if (!options.bypassPause && (process.env.AUTO_PUBLISH_PAUSED === "true" || fs.existsSync(pauseFile))) {
		console.warn("⚠️ [CIRCUIT BREAKER]: Auto-Publish sedang DIJEDA via .pause-auto-publish / AUTO_PUBLISH_PAUSED.");
		return {
			success: false,
			paused: true,
			message: "Auto-publish is paused for editorial pipeline revamp.",
			slug: generateSlug(title),
			title
		};
	}

	// 1. Run 7C Editorial Quality Gate
	const cleanTags = (Array.isArray(tags) ? tags : []).filter(t => !["mojok", "malesbanget", "mbdc", "detik", "kompas"].includes(t.toLowerCase().trim()));
	const audit = validate7cEditorial(title, content, excerpt, cleanTags);
	const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

	// Check if qualified for published status (minimum 350 words for in-depth editorial)
	const isQualified = audit.valid && audit.score >= 80 && wordCount >= 350 && !forceDraft;
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
		tags: cleanTags,
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
				tags: cleanTags,
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

			// Synchronize category & tag taxonomies into EmDash relational tables
			syncPostTaxonomies(db, targetId, category, cleanTags, "id", now);

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

	// Instantly ping IndexNow engine network (Bing, Yandex, Seznam) for immediate crawling
	if (status === "published" && (dbSaved || remotePublished)) {
		const publishedUrl = `https://www.tujuhcahaya.com/${slug}`;
		submitToIndexNow([publishedUrl]).catch((err) => {
			console.warn("[IndexNow Auto-Ping Warning]:", err.message);
		});
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
