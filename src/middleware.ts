import { defineMiddleware } from "astro:middleware";

/**
 * 7C Security Headers Middleware
 * Protects SSR and API endpoints from clickjacking, MIME confusion, and insecure transport.
 */
export const onRequest = defineMiddleware(async (_context, next) => {
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
