/**
 * 7C CMS Adapter Layer — Public API Surface
 *
 * This barrel file re-exports the modular 7C CMS adapters so consumers can
 * continue to import from `../lib/7c-cms`. Each submodule is scoped to a
 * single responsibility to keep files under the 400-LOC monolith guard.
 */

export type { Locale } from "../i18n/utils";

export type {
	C7RawByline,
	C7FeaturedImage,
	C7PostData,
	C7PostEntry,
	Get7cPostsOptions,
	Resolved7cImage,
	C7AuthorProfile,
} from "./7c-cms-types";

export {
	calc7cReadingTime,
	format7cDate,
	format7cCompactDate,
} from "./7c-cms-dates";

export {
	C7_DEFAULT_FEATURED_IMAGE,
	resolve7cFeaturedImage,
} from "./7c-cms-images";

export { get7cSiteIdentity } from "./7c-cms-identity";

export { C7_AUTHORS, C7_BYLINE_ID_MAP, resolve7cAuthor } from "./7c-cms-authors";

export {
	get7cPublishedPosts,
	get7cEntryBySlug,
	get7cSidebarPosts,
	get7cRelatedPosts,
	get7cPostsByAuthor,
} from "./7c-cms-posts";
