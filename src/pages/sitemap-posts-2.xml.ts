import type { APIRoute } from "astro";
import { generate7cPostsSitemap } from "../lib/7c-feeds";

export const GET: APIRoute = async ({ site, url }) => {
	const siteUrl = site?.toString() || url.origin || "https://tujuhcahaya.com";
	// Chunk 2: posts 10,001 to 20,000+
	const xml = generate7cPostsSitemap(siteUrl, 10000, 10000);

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "public, max-age=3600, s-maxage=3600",
		},
	});
};
