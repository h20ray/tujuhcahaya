/**
 * 7C i18n Translation & Routing Utilities
 */

import idDict from "./id.json";
import enDict from "./en.json";
import type { C7TranslationSchema } from "./types";

export type Locale = "id" | "en";
export type { C7TranslationSchema } from "./types";

export const DEFAULT_LOCALE: Locale = "id";
export const SUPPORTED_LOCALES: Locale[] = ["id", "en"];

const dictionaries: Record<Locale, C7TranslationSchema> = {
	id: idDict as C7TranslationSchema,
	en: enDict as C7TranslationSchema,
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
 * Simple parameter interpolation helper
 * e.g. format7cText("Hello {name}", { name: "7C" }) -> "Hello 7C"
 */
export function format7cText(template: string, vars: Record<string, string | number>): string {
	return template.replace(/\{(\w+)\}/g, (_, key) => {
		return vars[key] !== undefined ? String(vars[key]) : `{${key}}`;
	});
}

/**
 * Retrieve strongly-typed translation dictionary for the given locale
 */
export function use7cTranslation(locale: Locale = DEFAULT_LOCALE) {
	const dict = dictionaries[locale] || dictionaries[DEFAULT_LOCALE];

	return {
		t: dict,
		locale,
		format: format7cText,
	};
}

/**
 * Switch a path to target locale while respecting the prefixDefaultLocale: false rule
 */
export function get7cLocalizedPath(pathname: string, targetLocale: Locale): string {
	// Ensure leading slash
	const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

	// Strip existing /en/ prefix if present
	const cleanPath = normalizedPath.replace(/^\/en(\/|$)/, "/");

	if (targetLocale === "en") {
		return cleanPath === "/" ? "/en" : `/en${cleanPath}`;
	}

	// Indonesian is root without prefix
	return cleanPath;
}
