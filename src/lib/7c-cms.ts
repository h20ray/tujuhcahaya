/**
 * 7C CMS Adapter Layer — Loose Coupling Abstraction for EmDash
 *
 * This adapter decouples Astro presentation templates from direct private EmDash APIs.
 * If EmDash upstream changes its query function signatures or internals, only this file
 * needs adjustment, preserving stability across all Astro components and pages.
 */

import {
	getEmDashCollection,
	getEmDashEntry,
	getSiteSettings,
	decodeSlug,
} from "emdash";
import { resolveStarterSiteIdentity } from "../utils/site-identity";
import type { Locale } from "../i18n/utils";

export interface Get7cPostsOptions {
	limit?: number;
	offset?: number;
	orderBy?: Record<string, "asc" | "desc">;
	locale?: Locale;
}

/**
 * Fetch published posts sorted by publication date descending with optional locale filtering
 */
export async function get7cPublishedPosts(options: Get7cPostsOptions = {}) {
	const { limit = 10, offset = 0, orderBy = { published_at: "desc" }, locale } = options;

	const queryArgs: Parameters<typeof getEmDashCollection>[1] = {
		limit,
		offset,
		orderBy,
	};

	if (locale) {
		queryArgs.locale = locale;
	}

	let result = await getEmDashCollection("posts", queryArgs);

	// If no posts found for the requested locale, gracefully fallback to default posts (locale 'id')
	if (result.entries.length === 0 && locale && locale !== "id") {
		const fallbackResult = await getEmDashCollection("posts", {
			...queryArgs,
			locale: undefined,
		});
		if (fallbackResult.entries.length > 0) {
			result = fallbackResult;
		}
	}

	return {
		posts: result.entries,
		cacheHint: result.cacheHint,
	};
}

/**
 * Retrieve a post or static page by slug (WordPress /%postname%/ canonical fallback)
 */
export async function get7cEntryBySlug(rawSlug: string | undefined, locale?: Locale) {
	const slug = decodeSlug(rawSlug);

	if (!slug) {
		return { entry: null, isPost: false, cacheHint: null };
	}

	// 1. Try querying the posts collection first (matches canonical WP URLs)
	let isPost = true;
	let { entry, cacheHint } = await getEmDashEntry("posts", slug);

	// If entry has locale mismatch, check if alternative exists or respect locale
	if (entry && locale) {
		const postData = entry.data as unknown as Record<string, unknown>;
		if (postData?.locale && postData.locale !== locale) {
			// Locale-specific entry matching
		}
	}

	// 2. Fallback to static pages collection (e.g. /tentang-kami, /redaksi)
	if (!entry) {
		isPost = false;
		const pageResult = await getEmDashEntry("pages", slug);
		entry = pageResult.entry;
		cacheHint = pageResult.cacheHint;
	}

	return {
		entry,
		isPost,
		cacheHint,
		slug,
	};
}

/**
 * Resolve site identity (title, tagline)
 */
export async function get7cSiteIdentity() {
	const rawSettings = await getSiteSettings();
	return resolveStarterSiteIdentity(rawSettings);
}

/**
 * Calculate estimated reading time in minutes from Portable Text content
 */
export function calc7cReadingTime(content: unknown): number {
	if (!content) return 1;
	const contentWords = JSON.stringify(content).split(/\s+/).length;
	return Math.max(1, Math.round(contentWords / 200));
}

/**
 * Format timestamp into formal editorial date
 */
export function format7cDate(dateInput: string | Date | null | undefined, locale: Locale = "id"): string {
	if (!dateInput) return "";
	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
	if (isNaN(date.getTime())) return "";
	const langTag = locale === "en" ? "en-US" : "id-ID";
	return date.toLocaleDateString(langTag, {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

/**
 * Format timestamp into compact date (e.g. "29 Sep 2026")
 */
export function format7cCompactDate(dateInput: string | Date | null | undefined, locale: Locale = "id"): string {
	if (!dateInput) return "";
	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
	if (isNaN(date.getTime())) return "";
	const langTag = locale === "en" ? "en-US" : "id-ID";
	return date.toLocaleDateString(langTag, {
		day: "numeric",
		month: "short",
		year: "numeric",
	});
}

/**
 * Fetch top recent posts for the editorial sidebar ranked list
 */
export async function get7cSidebarPosts(currentSlug?: string, limit: number = 5, locale?: Locale) {
	const queryArgs: Parameters<typeof getEmDashCollection>[1] = {
		orderBy: { published_at: "desc" },
		limit: limit + 3,
	};
	if (locale) {
		queryArgs.locale = locale;
	}

	const result = await getEmDashCollection("posts", queryArgs);
	const posts = result.entries
		.filter((post) => (post.data?.slug || post.id) !== currentSlug)
		.slice(0, limit);

	return {
		posts,
		cacheHint: result.cacheHint,
	};
}

/**
 * Fetch related posts by category or recent posts for bottom-of-article recommendations
 */
export async function get7cRelatedPosts(categorySlug?: string, currentSlug?: string, limit: number = 3, locale?: Locale) {
	let entries: any[] = [];
	let cacheHint: any = null;

	if (categorySlug) {
		const catResult = await getEmDashCollection("posts", {
			where: { category: categorySlug },
			orderBy: { published_at: "desc" },
			limit: limit + 2,
			locale,
		});
		entries = catResult.entries.filter((post) => (post.data?.slug || post.id) !== currentSlug);
		cacheHint = catResult.cacheHint;
	}

	// Fallback to recent posts if not enough category posts found
	if (entries.length < limit) {
		const fallbackResult = await getEmDashCollection("posts", {
			orderBy: { published_at: "desc" },
			limit: limit + 3,
			locale,
		});
		const seenSlugs = new Set([currentSlug, ...entries.map((p) => p.data?.slug || p.id)]);
		for (const post of fallbackResult.entries) {
			const slug = post.data?.slug || post.id;
			if (!seenSlugs.has(slug)) {
				entries.push(post);
				seenSlugs.add(slug);
				if (entries.length >= limit) break;
			}
		}
	}

	return {
		posts: entries.slice(0, limit),
		cacheHint,
	};
}

/**
 * Official Tujuhcahaya branded placeholder image path
 */
export const C7_DEFAULT_FEATURED_IMAGE = "/images/default-featured-image.png";

export interface Resolved7cImage {
	url: string;
	alt: string;
	isFallback: boolean;
}

/**
 * Resolve post featured image with fallback to 7C branded placeholder
 */
export function resolve7cFeaturedImage(image: unknown, fallbackAlt: string = "Tujuhcahaya"): Resolved7cImage {
	if (image) {
		if (typeof image === "string" && image.trim().length > 0) {
			return { url: image.trim(), alt: fallbackAlt, isFallback: false };
		}
		if (typeof image === "object" && image !== null) {
			const imgObj = image as { url?: string; src?: string; alt?: string };
			const url = imgObj.url || imgObj.src;
			if (url && typeof url === "string" && url.trim().length > 0) {
				return {
					url: url.trim(),
					alt: imgObj.alt || fallbackAlt,
					isFallback: false,
				};
			}
		}
	}

	return {
		url: C7_DEFAULT_FEATURED_IMAGE,
		alt: fallbackAlt,
		isFallback: true,
	};
}


