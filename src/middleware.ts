import { defineMiddleware } from "astro:middleware";
import duplicateRedirects from "./data/duplicate-redirects.json";

/**
 * 7C Security Headers Middleware
 * Protects SSR and API endpoints from clickjacking, MIME confusion, and insecure transport.
 */
// Dead WordPress endpoints: tell crawlers they are gone for good.
const GONE_PATHS = /^\/(?:wp-login\.php|wp-json(?:\/.*)?|wp-content\/themes\/.*|xmlrpc\.php)$/i;

export const onRequest = defineMiddleware(async (context, next) => {
	if (GONE_PATHS.test(context.url.pathname)) {
		return new Response("Gone", {
			status: 410,
			headers: { "Content-Type": "text/plain; charset=utf-8", "X-Robots-Tag": "noindex" },
		});
	}
	// Near-duplicate posts: 301 straight to the canonical keeper (see src/data/duplicate-redirects.json).
	const dupPath = context.url.pathname.replace(/^\/(en\/)?/, "").replace(/\/$/, "");
	let keeper: string | undefined;
	try {
		keeper = (duplicateRedirects as Record<string, string>)[decodeURIComponent(dupPath)];
	} catch {}
	if (keeper) {
		return new Response(null, { status: 301, headers: { Location: `/${keeper}` } });
	}
	const response = await next();

	// Guard against clickjacking attacks
	response.headers.set("X-Frame-Options", "SAMEORIGIN");

	// Prevent MIME-sniffing
	response.headers.set("X-Content-Type-Options", "nosniff");

	// Privacy and referrer leakage protection
	response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

	// Enforce HTTPS
	response.headers.set(
		"Strict-Transport-Security",
		"max-age=31536000; includeSubDomains; preload",
	);

	// Restrict unnecessary browser capabilities
	response.headers.set(
		"Permissions-Policy",
		"camera=(), microphone=(), geolocation=()",
	);

	return response;
});
