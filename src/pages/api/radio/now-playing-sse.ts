import type { APIRoute } from "astro";
import { createNowPlayingSseResponse } from "@tujuhcahaya/radio-player";

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
	const stationSlug = url.searchParams.get("station") || "tujuhcahaya-radio";
	return await createNowPlayingSseResponse(stationSlug);
};
