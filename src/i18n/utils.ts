/**
 * 7C i18n Translation & Routing Utilities
 */

import idDict from "./id.json";
import enDict from "./en.json";

export type Locale = "id" | "en";

export const DEFAULT_LOCALE: Locale = "id";
export const SUPPORTED_LOCALES: Locale[] = ["id", "en"];

const dictionaries = {
	id: idDict,
	en: enDict,
};

/**
 * Determine locale from URL pathname
 */
export function get7cLocaleFromUrl(url: URL): Locale {
	const pathname = url.pathname;
	if (pathname === "/en" || pathname.startsWith("/en/")) {
		return "en";
	}
	return "id";
}

/**
 * Retrieve translation dictionary for the given locale
 */
export function use7cTranslation(locale: Locale = DEFAULT_LOCALE) {
	const dict = dictionaries[locale] || dictionaries[DEFAULT_LOCALE];

	return {
		t: dict,
		locale,
	};
}

/**
 * Switch a path to target locale while respecting the prefixDefaultLocale: false rule
 */
export function get7cLocalizedPath(pathname: string, targetLocale: Locale): string {
	// Strip existing /en/ prefix if present
	const cleanPath = pathname.replace(/^\/en(\/|$)/, "/");

	if (targetLocale === "en") {
		return cleanPath === "/" ? "/en" : `/en${cleanPath}`;
	}

	// Indonesian is root without prefix
	return cleanPath;
}
