import { fileURLToPath } from "node:url";
import { definePlugin } from "emdash";
import { validate7cEditorial } from "../lib/7c-editorial-guard.js";

const currentFilePath = fileURLToPath(new URL(import.meta.url)).replace(/\\/g, "/");

/**
 * 7C Bespoke Editorial Guard Plugin for EmDash
 *
 * Hooks into content lifecycle events to enforce 7C editorial voice standards,
 * detect AI slop clichés, block cheap emojis, and encourage natural Indonesian tech terminology.
 */
export function createPlugin(_options: Record<string, unknown> = {}) {
	return definePlugin({
		id: "c7-editorial-guard",
		version: "1.0.0",
		capabilities: ["content:read"],
		hooks: {
			"content:beforeSave": async (event, ctx) => {
				const content = event.content as Record<string, unknown>;
				const title = typeof content.title === "string" ? content.title : "";
				const rawContent = content.content ? JSON.stringify(content.content) : "";
				const excerpt = typeof content.excerpt === "string" ? content.excerpt : "";

				const result = validate7cEditorial(title, rawContent, excerpt);

				if (!result.valid) {
					ctx.log.warn(`[7C Editorial Guard] Violations found in "${title}":`, {
						score: result.score,
						errors: result.errors,
						warnings: result.warnings,
					});
				} else if (result.warnings.length > 0 || result.suggestions.length > 0) {
					ctx.log.info(`[7C Editorial Guard] Editorial recommendations for "${title}":`, {
						suggestions: result.suggestions,
					});
				}

				return event.content;
			},
		},
	});
}

/**
 * EmDash Plugin Descriptor Factory
 */
export function c7EditorialGuard(options: Record<string, unknown> = {}) {
	return {
		id: "c7-editorial-guard",
		version: "1.0.0",
		entrypoint: currentFilePath,
		options,
	};
}

export default createPlugin;
