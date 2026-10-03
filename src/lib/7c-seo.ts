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
 * 7C Bespoke Generator Signature
 */
export const C7_GENERATOR_SIGNATURE = "7C Digital Engine (Astro + EmDash)";
