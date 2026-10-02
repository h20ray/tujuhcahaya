/**
 * 7C CMS Date & Reading Time Utilities
 */

import type { Locale } from "../i18n/utils";

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
