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

export interface C7AuthorProfile {
	id?: string;
	slug: string;
	name: string;
	role: string;
	bio: string;
	avatarUrl: string | null;
	archiveUrl: string;
	websiteUrl?: string | null;
	isEditorialFallback: boolean;
}

/**
 * Verified author registry derived from WordPress legacy users and Cloudflare R2 CDN assets
 */
export const C7_AUTHORS: Record<
	string,
	{
		name: string;
		roleId: string;
		roleEn: string;
		avatarUrl: string;
		bioId: string;
		bioEn: string;
	}
> = {
	h20ray: {
		name: "Andoru Ray",
		roleId: "Founder & Pemimpin Umum",
		roleEn: "Founder & Publisher",
		avatarUrl: "https://media.xlocal.id/tujuhcahaya/uploads/2025/09/cropped-IMG_20250331_000108_788.avif",
		bioId: "CEO, influencer, public figure, engineer, scientist, adalah contoh nama-nama pekerjaan orang.",
		bioEn: "CEO, influencer, public figure, engineer, scientist, adalah contoh nama-nama pekerjaan orang.",
	},
	elangelano: {
		name: "Elang Elano",
		roleId: "Redaktur Senior & Teknologi",
		roleEn: "Senior & Tech Editor",
		avatarUrl: "https://media.xlocal.id/tujuhcahaya/uploads/2025/01/tj_pp-1-png.avif",
		bioId: "Jurnalis dan redaktur Tujuhcahaya, meliput lanskap teknologi, kecerdasan buatan, budaya digital, dan inovasi masa depan.",
		bioEn: "Journalist and editor at Tujuhcahaya, covering technology, artificial intelligence, digital culture, and future innovations.",
	},
	margarethanina: {
		name: "Margaretha Nina",
		roleId: "Redaktur Musik & Budaya Urban",
		roleEn: "Music & Urban Culture Editor",
		avatarUrl: "https://media.xlocal.id/tujuhcahaya/uploads/2025/01/photo_2025-01-13_05-21-07.avif",
		bioId: "Kurator musik dan budaya urban kontemporer, mengulas dinamika kreatif, seni arus bawah, dan gaya hidup modern.",
		bioEn: "Curator of music and contemporary urban culture, reviewing creative scenes, underground art, and modern lifestyle.",
	},
	wodemahendra: {
		name: "Hendra Tujuhcahaya",
		roleId: "Pemimpin Redaksi",
		roleEn: "Editor-in-Chief",
		avatarUrl: "https://media.xlocal.id/tujuhcahaya/uploads/2025/01/tj_pp-4-png.avif",
		bioId: "Pemimpin Redaksi Tujuhcahaya, mengawal standar jurnalisme berkualitas, investigasi mendalam, etika redaksi, dan keterbukaan informasi publik.",
		bioEn: "Editor-in-Chief at Tujuhcahaya, guiding quality journalism standards, in-depth investigations, editorial ethics, and public transparency.",
	},
	rachelpatricia: {
		name: "Rachel Patricia",
		roleId: "Jurnalis & Dinamika Sosial",
		roleEn: "Journalist & Social Dynamics",
		avatarUrl: "https://media.xlocal.id/tujuhcahaya/uploads/2025/01/tj_pp-2-png.avif",
		bioId: "Jurnalis lapangan yang aktif merekam dinamika sosial masyarakat, tren perkotaan, industri kreatif, dan isu generasi muda.",
		bioEn: "Field reporter capturing social dynamics, urban trends, creative movements, and youth culture.",
	},
	sarahdilla: {
		name: "Sarah Dilla",
		roleId: "Jurnalis Riset & Opini",
		roleEn: "Research & Opinion Journalist",
		avatarUrl: "https://media.xlocal.id/tujuhcahaya/uploads/2025/01/tj_pp-3-png.avif",
		bioId: "Penulis riset dan jurnalis investigatif yang mengeksplorasi isu sosial-kultural, kebijakan publik, dan narasi kritis kontemporer.",
		bioEn: "Research writer and investigative journalist exploring sociocultural developments, public policy, and critical narratives.",
	},
};

/**
 * Translation group & Byline ID mappings to canonical author slugs
 */
export const C7_BYLINE_ID_MAP: Record<string, string> = {
	"0100MUNS3DJL68FA69B26FACE9": "h20ray",
	"0100MUNS3DJN572038F317780B": "h20ray",
	"0100MUNS3DJOA35D985DFFDBA0": "margarethanina",
	"0100MUNS3DJP23DBBB7C836C77": "margarethanina",
	"0100MUNS3DJPCA4539BDBEB12A": "elangelano",
	"0100MUNS3DJQ2297CDA3676A67": "elangelano",
	"0100MUNS3DJQ06A12A6DABF37A": "rachelpatricia",
	"0100MUNS3DJR758DF40AB5AD39": "rachelpatricia",
	"0100MUNS3DJSD97205CCB31353": "sarahdilla",
	"0100MUNS3DJT5A2245DC3513DC": "sarahdilla",
	"0100MUNS3DJT76BFD04713B98E": "wodemahendra",
	"0100MUNS3DJU33A11FDD2E6A64": "wodemahendra",
};

/**
 * Resolve an author/byline into an authentic C7AuthorProfile with fallback to Redaksi
 */
export function resolve7cAuthor(byline: any, locale: Locale = "id"): C7AuthorProfile {
	let slug = "";
	if (typeof byline === "string") {
		const clean = byline.trim();
		slug = C7_BYLINE_ID_MAP[clean] || (C7_AUTHORS[clean.toLowerCase()] ? clean.toLowerCase() : "");
	} else if (byline && typeof byline === "object") {
		if (typeof byline.slug === "string" && byline.slug.trim().length > 0) {
			slug = byline.slug.toLowerCase().trim();
		} else if (typeof byline.id === "string" && C7_BYLINE_ID_MAP[byline.id]) {
			slug = C7_BYLINE_ID_MAP[byline.id];
		} else if (typeof byline.primaryBylineId === "string" && C7_BYLINE_ID_MAP[byline.primaryBylineId]) {
			slug = C7_BYLINE_ID_MAP[byline.primaryBylineId];
		} else if (typeof byline.primary_byline_id === "string" && C7_BYLINE_ID_MAP[byline.primary_byline_id]) {
			slug = C7_BYLINE_ID_MAP[byline.primary_byline_id];
		}
	}
	const knownAuthor = C7_AUTHORS[slug];
	const isEn = locale === "en";

	if (knownAuthor) {
		const name = byline?.displayName || knownAuthor.name;
		const role = isEn ? knownAuthor.roleEn : knownAuthor.roleId;
		const bio =
			typeof byline?.bio === "string" && byline.bio.trim().length > 0
				? byline.bio.trim()
				: isEn
				? knownAuthor.bioEn
				: knownAuthor.bioId;
		const avatarUrl = knownAuthor.avatarUrl;
		const archiveUrl = isEn ? `/en/author/${slug}` : `/author/${slug}`;

		return {
			id: byline?.id,
			slug,
			name,
			role,
			bio,
			avatarUrl,
			archiveUrl,
			websiteUrl: byline?.websiteUrl ?? null,
			isEditorialFallback: false,
		};
	}

	// If byline is provided with non-empty displayName but not in static registry
	if (byline?.displayName && typeof byline.displayName === "string") {
		const name = byline.displayName.trim();
		const bylineSlug = slug || name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
		const archiveUrl = isEn ? `/en/author/${bylineSlug}` : `/author/${bylineSlug}`;
		return {
			id: byline?.id,
			slug: bylineSlug,
			name,
			role: isEn ? "Editorial Contributor" : "Kontributor Redaksi",
			bio:
				typeof byline?.bio === "string" && byline.bio.trim().length > 0
					? byline.bio.trim()
					: isEn
					? "Editorial contributor for Tujuhcahaya."
					: "Kontributor editorial media digital Tujuhcahaya.",
			avatarUrl: null,
			archiveUrl,
			websiteUrl: byline?.websiteUrl ?? null,
			isEditorialFallback: false,
		};
	}

	// Institutional fallback to Redaksi Tujuhcahaya
	return {
		id: byline?.id,
		slug: "redaksi",
		name: isEn ? "Tujuhcahaya Editorial" : "Redaksi Tujuhcahaya",
		role: isEn ? "Editorial Board" : "Dewan Redaksi",
		bio: isEn
			? "Independent digital media house exploring investigative journalism, technology, urban culture, music, and modern social dynamics adhering to high journalistic standards."
			: "Media house digital independen yang mengeksplorasi jurnalisme investigatif, teknologi, kultur urban, musik, dan dinamika sosial masyarakat modern berpedoman pada standar jurnalisme berkualitas.",
		avatarUrl: null,
		archiveUrl: isEn ? "/en/redaksi" : "/redaksi",
		websiteUrl: "https://tujuhcahaya.com",
		isEditorialFallback: true,
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
			.get(authorSlug, locale) as any;

		if (!byline) {
			return {
				byline: null,
				author: resolve7cAuthor({ slug: authorSlug }, locale),
				posts: [],
				total: 0,
				page,
				totalPages: 0,
				hasMore: false,
			};
		}

		const offset = Math.max(0, (page - 1) * limit);
		const countRow = db
			.prepare("SELECT count(DISTINCT p.id) as total FROM ec_posts p WHERE p.primary_byline_id = ? AND p.status = 'published'")
			.get(byline.translation_group) as { total: number };

		const total = countRow?.total || 0;
		const totalPages = Math.ceil(total / limit);

		const posts = db
			.prepare(`
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
			`)
			.all(locale, authorSlug, limit, offset) as Array<{
				id: string;
				slug: string;
				title: string;
				excerpt: string | null;
				published_at: string;
				featured_image: string | null;
				category_label: string | null;
				category_slug: string | null;
			}>;

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



