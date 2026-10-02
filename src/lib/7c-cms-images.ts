/**
 * 7C CMS Image Resolution Utilities
 */

import type { Resolved7cImage } from "./7c-cms-types";

export const C7_DEFAULT_FEATURED_IMAGE = "/images/default-featured-image.png";

/**
 * Resolve post featured image with fallback to 7C branded placeholder
 */
export function resolve7cFeaturedImage(image: unknown, fallbackAlt: string = "Tujuhcahaya"): Resolved7cImage {
	if (image) {
		if (typeof image === "string" && image.trim().length > 0) {
			return { url: image.trim(), alt: fallbackAlt, isFallback: false };
		}
		if (typeof image === "object" && image !== null) {
			const imgObj = image as { url?: string; src?: string; alt?: string };
			const url = imgObj.url || imgObj.src;
			if (url && typeof url === "string" && url.trim().length > 0) {
				return {
					url: url.trim(),
					alt: imgObj.alt || fallbackAlt,
					isFallback: false,
				};
			}
		}
	}

	return {
		url: C7_DEFAULT_FEATURED_IMAGE,
		alt: fallbackAlt,
		isFallback: true,
	};
}
