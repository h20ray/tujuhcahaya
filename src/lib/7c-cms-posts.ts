/**
 * 7C CMS Post Queries
 */

import { getEmDashCollection, getEmDashEntry, decodeSlug } from "emdash";
import type { Locale } from "../i18n/utils";
import type { C7PostEntry, C7AuthorPost, Get7cPostsOptions } from "./7c-cms-types";

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
		posts: result.entries as unknown as C7PostEntry[],
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
	const posts = (result.entries as unknown as C7PostEntry[])
		.filter((post) => (post.data.slug || post.id) !== currentSlug)
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
	let entries: C7PostEntry[] = [];
	let cacheHint: Awaited<ReturnType<typeof getEmDashCollection>>["cacheHint"] | null = null;

	if (categorySlug) {
		const catResult = await getEmDashCollection("posts", {
			where: { category: categorySlug },
			orderBy: { published_at: "desc" },
			limit: limit + 2,
			locale,
		});
		entries = (catResult.entries as unknown as C7PostEntry[]).filter(
			(post) => (post.data.slug || post.id) !== currentSlug,
		);
		cacheHint = catResult.cacheHint;
	}

	// Fallback to recent posts if not enough category posts found
	if (entries.length < limit) {
		const fallbackResult = await getEmDashCollection("posts", {
			orderBy: { published_at: "desc" },
			limit: limit + 3,
			locale,
		});
		const seenSlugs = new Set([currentSlug, ...entries.map((p) => p.data.slug || p.id)]);
		for (const post of fallbackResult.entries as unknown as C7PostEntry[]) {
			const slug = post.data.slug || post.id;
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
 * Fetch paginated articles by author slug
 */
export async function get7cPostsByAuthor(
	authorSlug: string,
	page: number = 1,
	limit: number = 25,
	locale: Locale = "id"
) {
	const sqlite3 = await import("node:sqlite");
	const db = new sqlite3.DatabaseSync("data.db");

	try {
		const byline = db
			.prepare("SELECT * FROM _emdash_bylines WHERE slug = ? AND locale = ? LIMIT 1")
			.get(authorSlug, locale) as { translation_group?: string } | undefined;

		if (!byline || typeof byline.translation_group !== "string") {
			const { resolve7cAuthor } = await import("./7c-cms-authors");
			return {
				byline: null,
				author: resolve7cAuthor({ slug: authorSlug }, locale),
				posts: [] as C7AuthorPost[],
				total: 0,
				page,
				totalPages: 0,
				hasMore: false,
			};
		}

		const offset = Math.max(0, (page - 1) * limit);
		const countRow = db
			.prepare(
				"SELECT count(DISTINCT p.id) as total FROM ec_posts p WHERE p.primary_byline_id = ? AND p.status = 'published'",
			)
			.get(byline.translation_group) as { total: number };

		const total = countRow?.total || 0;
		const totalPages = Math.ceil(total / limit);

		const posts = db
			.prepare(
				`
				SELECT p.id, p.slug, p.title, p.excerpt, p.published_at, p.featured_image,
				       t.label as category_label, t.slug as category_slug
				FROM ec_posts p
				JOIN _emdash_bylines b ON p.primary_byline_id = b.translation_group AND b.locale = ?
				LEFT JOIN content_taxonomies ct ON p.id = ct.entry_id AND ct.collection = 'posts'
				LEFT JOIN taxonomies t ON ct.taxonomy_id = t.id AND t.name = 'category'
				WHERE b.slug = ? AND p.status = 'published'
				GROUP BY p.id
				ORDER BY p.published_at DESC
				LIMIT ? OFFSET ?;
			`,
			)
			.all(locale, authorSlug, limit, offset) as unknown as C7AuthorPost[];

		const { resolve7cAuthor } = await import("./7c-cms-authors");
		const author = resolve7cAuthor(byline, locale);

		return {
			byline,
			author,
			posts,
			total,
			page,
			totalPages,
			hasMore: offset + posts.length < total,
		};
	} finally {
		db.close();
	}
}
