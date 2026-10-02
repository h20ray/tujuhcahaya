/**
 * 7C Legacy URL Guardian & 301 Redirect Engine
 *
 * Protects 16,745 legacy WordPress URLs from returning 404.
 * Seamlessly resolves old date-based permalinks, query IDs (?p=123),
 * category feed endpoints, and media upload paths to their canonical 7C routes.
 */

export interface LegacyRedirectResult {
	redirect: boolean;
	destination: string;
	status: 301 | 302;
	matchedRule: string;
}

/**
 * Common legacy category aliases mapped to standardized 7C categories
 */
const CATEGORY_MAP: Record<string, string> = {
	"uncategorized": "berita",
	"news": "berita",
	"warta": "berita",
	"games": "game",
	"gaming": "game",
	"technology": "tech",
	"teknologi": "tech",
	"gadget": "tech",
	"music": "musik",
	"culture": "budaya",
	"lifestyle": "budaya",
	"health": "kesehatan",
};

/**
 * Resolve an incoming request path or query against legacy WordPress URL rules
 */
export function resolve7cLegacyUrl(
	pathname: string,
	searchParams?: URLSearchParams,
): LegacyRedirectResult | null {
	// Normalize path (strip trailing slash if length > 1)
	const cleanPath = pathname.length > 1 && pathname.endsWith("/")
		? pathname.slice(0, -1)
		: pathname;

	// 1. Query parameter ?p=ID or ?page_id=ID (Classic WP numeric permalink)
	if (searchParams) {
		const pId = searchParams.get("p") || searchParams.get("page_id");
		if (pId) {
			// Will redirect to canonical slug search or archive fallback
			return {
				redirect: true,
				destination: `/posts?legacy_id=${encodeURIComponent(pId)}`,
				status: 301,
				matchedRule: "wp-query-id",
			};
		}
	}

	// 2. Date-based permalinks: /YYYY/MM/DD/slug or /YYYY/MM/slug -> /slug
	const dateSlugMatch = cleanPath.match(/^\/\d{4}\/\d{2}(?:\/\d{2})?\/([a-zA-Z0-9_\u0080-\uFFFF-]+)$/);
	if (dateSlugMatch && dateSlugMatch[1]) {
		const slug = dateSlugMatch[1];
		return {
			redirect: true,
			destination: `/${slug}`,
			status: 301,
			matchedRule: "wp-date-permalink",
		};
	}

	// 3. Legacy feeds: /rss, /feed/rss2, /atom -> /rss.xml
	if (/^\/(?:rss|feed\/rss2|rdf|atom)\/?$/i.test(cleanPath)) {
		return {
			redirect: true,
			destination: "/rss.xml",
			status: 301,
			matchedRule: "wp-feed",
		};
	}

	// 4. Legacy category feeds: /category/:slug/feed -> /category/:slug
	const catFeedMatch = cleanPath.match(/^\/category\/([a-zA-Z0-9_-]+)\/feed$/i);
	if (catFeedMatch && catFeedMatch[1]) {
		const rawCat = catFeedMatch[1].toLowerCase();
		const mappedCat = CATEGORY_MAP[rawCat] || rawCat;
		return {
			redirect: true,
			destination: `/category/${mappedCat}`,
			status: 301,
			matchedRule: "wp-category-feed",
		};
	}

	// 5. Category alias normalizer: /category/games -> /category/game
	const catMatch = cleanPath.match(/^\/category\/([a-zA-Z0-9_-]+)$/i);
	if (catMatch && catMatch[1]) {
		const rawCat = catMatch[1].toLowerCase();
		if (CATEGORY_MAP[rawCat] && CATEGORY_MAP[rawCat] !== rawCat) {
			return {
				redirect: true,
				destination: `/category/${CATEGORY_MAP[rawCat]}`,
				status: 301,
				matchedRule: "wp-category-alias",
			};
		}
	}

	// 6. Legacy tag feeds: /tag/:slug/feed -> /posts
	const tagFeedMatch = cleanPath.match(/^\/tag\/([a-zA-Z0-9_-]+)\/feed$/i);
	if (tagFeedMatch && tagFeedMatch[1]) {
		return {
			redirect: true,
			destination: "/posts",
			status: 301,
			matchedRule: "wp-tag-feed",
		};
	}

	// 7. Legacy uploads: /wp-content/uploads/(...) -> Cloudflare R2 CDN
	const uploadsMatch = cleanPath.match(/^\/wp-content\/uploads\/(.*)$/i);
	if (uploadsMatch && uploadsMatch[1]) {
		return {
			redirect: true,
			destination: `https://media.xlocal.id/tujuhcahaya/uploads/${uploadsMatch[1]}`,
			status: 301,
			matchedRule: "wp-uploads",
		};
	}

	// 8. Legacy author archive: /author/name -> /
	if (/^\/author\/[a-zA-Z0-9_-]+$/i.test(cleanPath)) {
		return {
			redirect: true,
			destination: "/",
			status: 301,
			matchedRule: "wp-author",
		};
	}

	// 9. Legacy WooCommerce pages: /shop, /cart, /checkout, /my-account -> /
	if (/^\/(?:shop|cart|checkout|my-account)\/?$/i.test(cleanPath)) {
		return {
			redirect: true,
			destination: "/",
			status: 301,
			matchedRule: "wp-woocommerce-stale",
		};
	}

	// 10. Stale / legacy static pages
	if (/^\/about\/?$/i.test(cleanPath)) {
		return {
			redirect: true,
			destination: "/about-us",
			status: 301,
			matchedRule: "7c-about-alias",
		};
	}
	if (/^\/(?:tujuhcahaya|homepage)\/?$/i.test(cleanPath)) {
		return {
			redirect: true,
			destination: "/",
			status: 301,
			matchedRule: "7c-homepage-alias",
		};
	}

	// 11. Legacy WP Admin & Login endpoints -> EmDash Admin dashboard
	if (/^\/(?:wp-admin(?:\/.*)?|wp-login\.php)$/i.test(cleanPath)) {
		return {
			redirect: true,
			destination: "/_emdash/admin",
			status: 302,
			matchedRule: "wp-admin-redirect",
		};
	}

	return null;
}
