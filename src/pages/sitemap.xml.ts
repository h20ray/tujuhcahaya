import type { APIRoute } from "astro";
import { generate7cSitemapIndex } from "../lib/7c-feeds";

export const GET: APIRoute = async ({ site, url }) => {
	const siteUrl = site?.toString() || url.origin || "https://tujuhcahaya.com";
	const xml = generate7cSitemapIndex(siteUrl);

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "public, max-age=3600, s-maxage=3600",
		},
	});
};
