/**
 * 7C SEO & Digital Branding Engine
 */

import { getSeoMeta, getHreflangAlternates } from "emdash";
import { get7cLocalizedPath } from "../i18n/utils";

export type SeoEntryInput = Parameters<typeof getSeoMeta>[0];

export interface SeoContext {
	siteTitle: string;
	siteUrl: string;
	path: string;
}

export interface HreflangLink {
	rel: "alternate";
	hreflang: string;
	href: string;
}

/**
 * Known 1:1 Static Page Pairs between Indonesian and English editions
 */
const STATIC_PAGE_PAIRS: Record<string, string> = {
	"/": "/en",
	"/posts": "/en/posts",
	"/kirim-tulisan": "/en/submit",
	"/about-us": "/en/about-us",
	"/tentang-kami": "/en/about-us",
	"/redaksi": "/en/redaksi",
	"/pedoman-media-siber": "/en/pedoman-media-siber",
	"/privacy-policy": "/en/privacy-policy",
	"/terms-of-use": "/en/terms-of-use",
};

const REVERSE_STATIC_PAGE_PAIRS: Record<string, string> = Object.fromEntries(
	Object.entries(STATIC_PAGE_PAIRS).map(([idPath, enPath]) => [enPath, idPath])
);

/**
 * Generate comprehensive SEO metadata from an EmDash entry
 */
export function get7cSeoMeta(entry: SeoEntryInput | null | undefined, context: SeoContext) {
	if (!entry) {
		return null;
	}

	return getSeoMeta(entry, {
		siteTitle: context.siteTitle,
		siteUrl: context.siteUrl,
		path: context.path.replace(/\/$/, ""),
	});
}

/**
 * Generate valid alternate hreflang links for known static routes & taxonomies
 */
export function get7cHreflangLinks(path: string, origin: string): HreflangLink[] {
	const cleanOrigin = origin.replace(/\/$/, "");
	const cleanPath = path.replace(/\/$/, "") || "/";

	// 1. Direct Static Mapping (forward and reverse)
	const enPair = STATIC_PAGE_PAIRS[cleanPath];
	if (enPair) {
		const idUrl = `${cleanOrigin}${cleanPath === "/en" ? "" : cleanPath}`;
		const enUrl = `${cleanOrigin}${enPair}`;
		return [
			{ rel: "alternate", hreflang: "id", href: idUrl || `${cleanOrigin}/` },
			{ rel: "alternate", hreflang: "en", href: enUrl },
			{ rel: "alternate", hreflang: "x-default", href: idUrl || `${cleanOrigin}/` },
		];
	}

	const reversePair = REVERSE_STATIC_PAGE_PAIRS[cleanPath];
	if (reversePair) {
		const idUrl = `${cleanOrigin}${reversePair}`;
		const enUrl = `${cleanOrigin}${cleanPath}`;
		return [
			{ rel: "alternate", hreflang: "id", href: idUrl },
			{ rel: "alternate", hreflang: "en", href: enUrl },
			{ rel: "alternate", hreflang: "x-default", href: idUrl },
		];
	}

	// 2. Taxonomy Archives (Category / Tag)
	const isCategoryOrTag = cleanPath.startsWith("/category/") ||
		cleanPath.startsWith("/en/category/") ||
		cleanPath.startsWith("/tag/") ||
		cleanPath.startsWith("/en/tag/");

	if (isCategoryOrTag) {
		const idPath = get7cLocalizedPath(cleanPath, "id");
		const enPath = get7cLocalizedPath(cleanPath, "en");
		return [
			{ rel: "alternate", hreflang: "id", href: `${cleanOrigin}${idPath}` },
			{ rel: "alternate", hreflang: "en", href: `${cleanOrigin}${enPath}` },
			{ rel: "alternate", hreflang: "x-default", href: `${cleanOrigin}${idPath}` },
		];
	}

	// For single post entries, do not emit naive alternates without translation proof.
	return [];
}

/**
 * Resolve database-backed hreflang alternates via EmDash translation_group
 */
export async function get7cContentHreflang(
	collection: string,
	entryId: string,
	origin: string,
): Promise<HreflangLink[]> {
	try {
		const alternates = await getHreflangAlternates(collection, entryId, {
			siteUrl: origin,
		});
		return alternates.map((alt) => ({
			rel: "alternate",
			hreflang: alt.hreflang,
			href: alt.href,
		}));
	} catch {
		return [];
	}
}

/**
 * 7C Bespoke Generator Signature & Canonical Origin
 */
export const C7_GENERATOR_SIGNATURE = "7C Digital Engine (Astro + EmDash)";
export const C7_CANONICAL_ORIGIN = "https://www.tujuhcahaya.com";

/**
 * Resolve strict, absolute canonical URL matching 7C standards
 */
export function resolve7cCanonicalUrl(path: string, customCanonical?: string | null): string {
	if (customCanonical && /^https?:\/\//i.test(customCanonical)) {
		try {
			const parsed = new URL(customCanonical);
			return `${C7_CANONICAL_ORIGIN}${parsed.pathname === "/" ? "" : parsed.pathname.replace(/\/$/, "")}`;
		} catch {
			return customCanonical;
		}
	}

	const cleanPath = path.replace(/[?#].*$/, "").replace(/\/$/, "") || "";
	return `${C7_CANONICAL_ORIGIN}${cleanPath}`;
}

/**
 * Generate Schema.org BreadcrumbList JSON-LD
 */
export function build7cBreadcrumbsJsonLd(items: Array<{ name: string; url: string }>) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": items.map((item, idx) => ({
			"@type": "ListItem",
			"position": idx + 1,
			"name": item.name,
			"item": item.url.startsWith("http") ? item.url : `${C7_CANONICAL_ORIGIN}${item.url}`,
		})),
	};
}

/**
 * Generate Schema.org NewsArticle JSON-LD
 */
export function build7cArticleJsonLd(params: {
	title: string;
	description?: string | null;
	url: string;
	imageUrl?: string | null;
	datePublished?: string | null;
	dateModified?: string | null;
	authorName: string;
	authorUrl?: string | null;
	authorRole?: string | null;
	category?: string | null;
}) {
	const canonicalUrl = resolve7cCanonicalUrl(params.url);
	const image = params.imageUrl || `${C7_CANONICAL_ORIGIN}/images/default-featured-image.png`;

	return {
		"@context": "https://schema.org",
		"@type": "NewsArticle",
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": canonicalUrl,
		},
		"headline": params.title,
		"description": params.description || undefined,
		"image": [image],
		"datePublished": params.datePublished ? new Date(params.datePublished).toISOString() : undefined,
		"dateModified": params.dateModified
			? new Date(params.dateModified).toISOString()
			: params.datePublished
			? new Date(params.datePublished).toISOString()
			: undefined,
		"articleSection": params.category || undefined,
		"author": {
			"@type": "Person",
			"name": params.authorName,
			"url": params.authorUrl ? (params.authorUrl.startsWith("http") ? params.authorUrl : `${C7_CANONICAL_ORIGIN}${params.authorUrl}`) : undefined,
			"jobTitle": params.authorRole || undefined,
		},
		"publisher": {
			"@type": "Organization",
			"name": "Tujuhcahaya",
			"url": C7_CANONICAL_ORIGIN,
			"logo": {
				"@type": "ImageObject",
				"url": `${C7_CANONICAL_ORIGIN}/logo.svg`,
			},
		},
	};
}

/**
 * Generate Schema.org FAQPage JSON-LD
 */
export function build7cFaqJsonLd(faqs: Array<{ question: string; answer: string }>) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": faqs.map((faq) => ({
			"@type": "Question",
			"name": faq.question,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": faq.answer,
			},
		})),
	};
}

/**
 * Generate Schema.org Person JSON-LD
 */
export function build7cPersonJsonLd(author: {
	name: string;
	role?: string | null;
	bio?: string | null;
	avatarUrl?: string | null;
	archiveUrl?: string | null;
	websiteUrl?: string | null;
}) {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": author.name,
		"jobTitle": author.role || undefined,
		"description": author.bio || undefined,
		"image": author.avatarUrl || undefined,
		"url": author.archiveUrl ? `${C7_CANONICAL_ORIGIN}${author.archiveUrl}` : undefined,
		"sameAs": author.websiteUrl ? [author.websiteUrl] : undefined,
		"worksFor": {
			"@type": "Organization",
			"name": "Tujuhcahaya",
			"url": C7_CANONICAL_ORIGIN,
		},
	};
}
