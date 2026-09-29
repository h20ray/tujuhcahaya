/**
 * 7C SEO & Digital Branding Engine
 */

import { getSeoMeta } from "emdash";
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
 * Generate valid alternate hreflang links for multilingual indexing
 */
export function get7cHreflangLinks(path: string, origin: string): HreflangLink[] {
	const idPath = get7cLocalizedPath(path, "id");
	const enPath = get7cLocalizedPath(path, "en");

	return [
		{
			rel: "alternate",
			hreflang: "id",
			href: `${origin}${idPath === "/" ? "" : idPath}`,
		},
		{
			rel: "alternate",
			hreflang: "en",
			href: `${origin}${enPath}`,
		},
		{
			rel: "alternate",
			hreflang: "x-default",
			href: `${origin}${idPath === "/" ? "" : idPath}`,
		},
	];
}

/**
 * 7C Bespoke Generator Signature
 */
export const C7_GENERATOR_SIGNATURE = "7C Digital Engine (Astro + EmDash)";
