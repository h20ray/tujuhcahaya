/**
 * 7C Dispatch Engine — Data Transformation & Preview Adapter
 *
 * Provides structured preview data for the 7C Dispatch Post List right-side dialog
 * and handles persistent article read tracking in localStorage.
 */

import type { Locale } from "../i18n/utils";
import {
	calc7cReadingTime,
	format7cCompactDate,
	resolve7cAuthor,
	resolve7cFeaturedImage,
} from "./7c-cms";

export const C7_READ_ARTICLES_STORAGE_KEY = "c7_read_articles";

export interface C7ArticleSource {
	name: string;
	label: string;
	is7c: boolean;
	slug: string;
}

/**
 * Resolve article publisher or syndication source.
 * Defaults to 7C (Tujuhcahaya) with brand red accent, supports external syndication partners.
 */
export function resolve7cArticleSource(post: any): C7ArticleSource {
	const data = post?.data || post || {};
	const rawSource =
		typeof data.source === "string"
			? data.source
			: typeof data.publisher === "string"
			? data.publisher
			: typeof data.origin === "string"
			? data.origin
			: typeof data.source_name === "string"
			? data.source_name
			: "";

	const trimmed = rawSource.trim();
	const is7c =
		!trimmed ||
		trimmed.toUpperCase() === "7C" ||
		trimmed.toLowerCase().includes("tujuhcahaya") ||
		trimmed.toLowerCase() === "tujuh cahaya";

	if (is7c) {
		return {
			name: "Tujuhcahaya",
			label: "7C",
			is7c: true,
			slug: "7c",
		};
	}

	return {
		name: trimmed,
		label: trimmed,
		is7c: false,
		slug: trimmed.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
	};
}

export interface C7DispatchPreviewItem {
	slug: string;
	title: string;
	excerpt: string;
	category: {
		label: string;
		slug: string;
	};
	source: C7ArticleSource;
	formattedDate: string;
	readingTimeMin: number;
	author: {
		name: string;
		role: string;
		avatarUrl: string | null;
	};
	imageUrl: string | null;
	imageAlt: string;
	paragraphs: string[];
}

/**
 * Check if a Portable Text block belongs to the header / subheader family
 */
export function isHeadingBlock(block: any): boolean {
	if (!block) return false;

	// 1. Check Portable Text style property (e.g. h1, h2, h3, h4, h5, h6, heading, title)
	const style = String(block.style || "").toLowerCase().trim();
	if (/^h[1-6]$/.test(style)) return true;
	if (["heading", "subheading", "header", "subheader", "title", "subtitle"].includes(style)) {
		return true;
	}

	// 2. Check block _type property
	const type = String(block._type || "").toLowerCase().trim();
	if (["heading", "subheading", "header", "subheader"].includes(type)) {
		return true;
	}

	return false;
}

/**
 * Check if a text string looks like a markdown or HTML heading
 */
export function isHeadingText(text: string): boolean {
	const trimmed = text.trim();
	// Markdown heading (# Heading, ## Subheading, etc.)
	if (/^#{1,6}\s+/.test(trimmed)) return true;
	// HTML heading tag (<h1...>...</h1>)
	if (/^<h[1-6][^>]*>[\s\S]*<\/h[1-6]>$/i.test(trimmed)) return true;
	return false;
}

/**
 * Extract clean text paragraphs from Portable Text blocks for preview display.
 * Strictly excludes any elements from the header / subheader family (h1-h6).
 */
export function extract7cPreviewParagraphs(content: unknown, maxParagraphs: number = 2): string[] {
	if (!content) return [];

	let blocks: any[] = [];
	if (typeof content === "string") {
		try {
			blocks = JSON.parse(content);
		} catch {
			// If raw HTML or text string, strip out all heading tags (h1-h6)
			const withoutHeadings = content.replace(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi, "");
			const pMatches = Array.from(withoutHeadings.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi));
			const extracted: string[] = [];
			for (const match of pMatches) {
				const clean = match[1].replace(/<[^>]+>/g, "").trim();
				if (clean.length > 25 && !isHeadingText(clean)) {
					extracted.push(clean);
					if (extracted.length >= maxParagraphs) return extracted;
				}
			}
			if (extracted.length > 0) return extracted;

			// Fallback: split by double line breaks and filter out headings
			const lines = withoutHeadings.split(/\n\s*\n/);
			for (const line of lines) {
				const clean = line.replace(/<[^>]+>/g, "").trim();
				if (clean.length > 25 && !isHeadingText(clean)) {
					extracted.push(clean);
					if (extracted.length >= maxParagraphs) return extracted;
				}
			}
			return extracted.slice(0, maxParagraphs);
		}
	} else if (Array.isArray(content)) {
		blocks = content;
	}

	const paragraphs: string[] = [];
	for (const block of blocks) {
		// Strictly exclude any block belonging to the header / subheader family
		if (isHeadingBlock(block)) {
			continue;
		}

		if (block && (block._type === "block" || !block._type) && Array.isArray(block.children)) {
			const text = block.children
				.map((c: any) => (typeof c?.text === "string" ? c.text : ""))
				.join("")
				.trim();

			// Exclude empty/short fragments and any text that starts with a markdown heading
			if (text.length > 25 && !isHeadingText(text)) {
				paragraphs.push(text);
				if (paragraphs.length >= maxParagraphs) break;
			}
		}
	}

	return paragraphs;
}

/**
 * Build structured preview payload for a single dispatch item
 */
export function build7cDispatchPreview(
	post: any,
	category?: { label: string; slug: string } | null,
	locale: Locale = "id",
): C7DispatchPreviewItem {
	const data = post?.data || post || {};
	const slug = data.slug || post?.id || "";
	const title = data.title || "Tanpa Judul";
	const excerpt = data.excerpt || "";
	const resolvedCategory = category || { label: "Berita", slug: "berita" };
	const publishedAt = data.published_at || data.publishedAt;
	const formattedDate = format7cCompactDate(publishedAt, locale);
	const readingTimeMin = calc7cReadingTime(data.content);

	const authorProfile = resolve7cAuthor(data.byline || data.primary_byline_id, locale);
	const resolvedImage = resolve7cFeaturedImage(data.featured_image, title);
	const imageUrl = resolvedImage.isFallback ? null : resolvedImage.url;

	const paragraphs = extract7cPreviewParagraphs(data.content, 2);
	const source = resolve7cArticleSource(post);

	return {
		slug,
		title,
		excerpt,
		category: resolvedCategory,
		source,
		formattedDate,
		readingTimeMin,
		author: {
			name: authorProfile.name,
			role: authorProfile.role,
			avatarUrl: authorProfile.avatarUrl,
		},
		imageUrl,
		imageAlt: resolvedImage.alt,
		paragraphs,
	};
}
