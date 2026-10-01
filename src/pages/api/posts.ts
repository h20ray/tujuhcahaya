import type { APIRoute } from "astro";
import { getEmDashCollection, getTermsForEntries } from "emdash";
import { resolve7cAuthor } from "../../lib/7c-cms";
import { build7cDispatchPreview } from "../../lib/7c-dispatch";

export const GET: APIRoute = async ({ url }) => {
	const cursor = url.searchParams.get("cursor") || undefined;
	const category = url.searchParams.get("category") || undefined;
	const tag = url.searchParams.get("tag") || undefined;
	const localeParam = url.searchParams.get("locale") || "id";
	const locale = localeParam === "en" ? "en" : "id";
	const isEn = locale === "en";

	const whereClause: Record<string, any> = {};
	if (category) {
		whereClause.category = category;
	} else if (tag) {
		whereClause.tag = tag;
	}

	const queryArgs: Parameters<typeof getEmDashCollection>[1] = {
		where: Object.keys(whereClause).length > 0 ? whereClause : undefined,
		orderBy: { published_at: "desc" },
		limit: 25,
		cursor,
		locale,
	};

	try {
		const { entries: posts, nextCursor } = await getEmDashCollection("posts", queryArgs);

		// Batch fetch category terms
		const categoriesByEntry = await getTermsForEntries(
			"posts",
			posts.map((p) => p.data.id),
			"category",
		);

		const formattedPosts = posts.map((post) => {
			const cats = categoriesByEntry.get(post.data.id) ?? [];
			const firstCategory = cats[0] ?? {
				label: isEn ? "News" : "Berita",
				slug: "berita",
			};
			const formattedDate = post.data.publishedAt
				? new Date(post.data.publishedAt).toLocaleDateString(isEn ? "en-US" : "id-ID", {
						day: "numeric",
						month: "short",
				  })
				: "";

			const authorProfile = resolve7cAuthor(
				(post.data as any)?.byline ||
					(post.data as any)?.primaryBylineId ||
					(post.data as any)?.primary_byline_id ||
					post.data,
				locale,
			);

			return {
				slug: post.data?.slug || post.id,
				title: post.data?.title || "",
				category: {
					label: firstCategory.label,
					slug: firstCategory.slug,
				},
				author: {
					name: authorProfile.name,
					slug: authorProfile.slug,
				},
				formattedDate,
				publishedAt: post.data.publishedAt
					? new Date(post.data.publishedAt).toISOString()
					: "",
				preview: build7cDispatchPreview(post, firstCategory, locale),
			};
		});

		return new Response(
			JSON.stringify({
				posts: formattedPosts,
				nextCursor: nextCursor || null,
				hasMore: Boolean(nextCursor),
			}),
			{
				status: 200,
				headers: {
					"Content-Type": "application/json",
					"Cache-Control": "public, max-age=60, s-maxage=300",
				},
			},
		);
	} catch (err: any) {
		return new Response(
			JSON.stringify({
				error: "Failed to fetch posts",
				message: err?.message || String(err),
			}),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			},
		);
	}
};
