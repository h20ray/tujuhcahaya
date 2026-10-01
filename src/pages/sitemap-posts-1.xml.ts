import type { APIRoute } from "astro";
import { generate7cPostsSitemap } from "../lib/7c-feeds";

export const GET: APIRoute = async ({ site, url }) => {
	const siteUrl = site?.toString() || url.origin || "https://tujuhcahaya.com";
	// Chunk 1: posts 1 to 10,000
	const xml = generate7cPostsSitemap(siteUrl, 0, 10000);

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "public, max-age=3600, s-maxage=3600",
		},
	});
};
