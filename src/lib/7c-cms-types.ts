/**
 * 7C CMS Public Types
 */

export type C7RawByline =
	| string
	| {
			id?: string;
			slug?: string;
			displayName?: string;
			primaryBylineId?: string;
			primary_byline_id?: string;
			translation_group?: string;
			bio?: string;
			websiteUrl?: string | null;
	  }
	| null;

export type C7FeaturedImage = string | { url?: string; src?: string } | null;

export interface C7PostData {
	id: string;
	slug?: string;
	title?: string;
	excerpt?: string;
	published_at?: string;
	publishedAt?: string | Date | null;
	content?: unknown;
	byline?: C7RawByline;
	primaryBylineId?: C7RawByline;
	primary_byline_id?: C7RawByline;
	featured_image?: C7FeaturedImage;
	edit?: { title?: string };
	terms?: { category?: Array<{ label?: string; slug?: string }> };
	[key: string]: unknown;
}

export interface C7PostEntry {
	id: string;
	data: C7PostData;
	edit?: { title?: Record<string, string> };
}

export interface C7AuthorPost {
	id: string;
	slug: string;
	title: string;
	excerpt: string | null;
	published_at: string;
	featured_image: string | null;
	category_label: string | null;
	category_slug: string | null;
}

export interface Get7cPostsOptions {
	limit?: number;
	offset?: number;
	orderBy?: Record<string, "asc" | "desc">;
	locale?: import("../i18n/utils").Locale;
}

export interface Resolved7cImage {
	url: string;
	alt: string;
	isFallback: boolean;
}

export interface C7AuthorProfile {
	id?: string;
	slug: string;
	name: string;
	role: string;
	bio: string;
	avatarUrl: string | null;
	archiveUrl: string;
	websiteUrl?: string | null;
	isEditorialFallback: boolean;
}
