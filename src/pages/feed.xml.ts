import type { APIRoute } from "astro";
import { generate7cRssFeed } from "../lib/7c-feeds";

export const GET: APIRoute = async ({ site, url }) => {
	const siteUrl = site?.toString() || url.origin || "https://tujuhcahaya.com";
	const xml = generate7cRssFeed(siteUrl);

	return new Response(xml, {
		headers: {
			"Content-Type": "application/rss+xml; charset=utf-8",
			"Cache-Control": "public, max-age=3600, s-maxage=3600",
		},
	});
};
