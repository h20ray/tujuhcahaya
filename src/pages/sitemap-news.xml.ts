import type { APIRoute } from "astro";
import { generate7cGoogleNewsSitemap } from "../lib/7c-feeds";

export const GET: APIRoute = async ({ site }) => {
	const siteUrl = site?.toString().replace(/\/$/, "") || "https://www.tujuhcahaya.com";
	const xml = generate7cGoogleNewsSitemap(siteUrl);

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "public, max-age=600, s-maxage=600",
		},
	});
};
