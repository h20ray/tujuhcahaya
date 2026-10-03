/**
 * 7C Dispatch Drawer — Preview Rendering Helpers
 *
 * Extracted from 7c-dispatch-drawer.ts to respect the Monolith Guard ceiling.
 * Owns DOM element lookup, read-state pill rendering, and content population
 * for the slide-over preview pane.
 */

import type { CommonDict, DispatchDict } from "../i18n/types";

export interface C7DispatchPreviewData {
	slug: string;
	title: string;
	excerpt?: string;
	formattedDate?: string;
	readingTimeMin?: number;
	imageUrl?: string;
	imageAlt?: string;
	category?: {
		label: string;
		slug: string;
	};
	source?: {
		name: string;
		label: string;
		is7c: boolean;
		slug: string;
	};
	author?: {
		name: string;
		role: string;
		avatarUrl?: string;
	};
	paragraphs?: string[];
}

export const byId = (id: string) => document.getElementById(id);

/**
 * Dynamically query active drawer elements from the live document.
 * This guarantees zero detached DOM references across Astro ClientRouter swaps.
 */
export function getDrawerElements() {
	return {
		backdrop: byId("c7-dispatch-backdrop"),
		drawer: byId("c7-dispatch-drawer"),
		closeBtn: byId("c7-drawer-close"),
		statusToggleBtn: byId("c7-drawer-read-toggle"),
		statusBullet: document.querySelector("#c7-drawer-read-toggle .c7-status-bullet"),
		statusText: byId("c7-drawer-status-text"),
		fullPostLink: byId("c7-drawer-full-post") as HTMLAnchorElement | null,
		ctaText: byId("c7-drawer-cta-text"),
		elCategory: byId("c7-drawer-category"),
		elTitle: byId("c7-drawer-title"),
		elImageWrap: byId("c7-drawer-image-wrap"),
		elImage: byId("c7-drawer-image") as HTMLImageElement | null,
		elExcerpt: byId("c7-drawer-excerpt"),
		elParagraphs: byId("c7-drawer-paragraphs"),
	};
}

export interface C7DispatchDrawerCopy {
	common: CommonDict;
	dispatch: DispatchDict;
	/** Plain-text fallback category label (e.g. "Berita" / "News"). */
	fallbackCategory: string;
}

/**
 * Render the read/unread status pill with the localized label.
 */
export function renderDrawerReadState(isRead: boolean, copy: C7DispatchDrawerCopy): void {
	const { statusBullet, statusText } = getDrawerElements();
	if (!statusBullet || !statusText) return;

	if (isRead) {
		statusBullet.classList.add("checked");
		statusBullet.innerHTML = `<svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
		statusText.textContent = copy.dispatch.already_read;
	} else {
		statusBullet.classList.remove("checked");
		statusBullet.innerHTML = "";
		statusText.textContent = copy.dispatch.mark_as_read;
	}
}

/**
 * Populate all content nodes of the drawer pane for the given item.
 */
export function renderDrawerContent(
	itemData: C7DispatchPreviewData,
	localePrefix: string,
	copy: C7DispatchDrawerCopy,
): void {
	const {
		elCategory,
		elTitle,
		elImageWrap,
		elImage,
		elExcerpt,
		elParagraphs,
		fullPostLink,
		ctaText,
	} = getDrawerElements();

	if (elCategory) {
		elCategory.textContent = itemData.category?.label || copy.fallbackCategory;
		elCategory.className = `c7-drawer-badge cat-${itemData.category?.slug || "berita"}`;
	}
	if (elTitle) elTitle.textContent = itemData.title || "";

	if (elImageWrap && elImage) {
		const hasImage = !!itemData.imageUrl;
		elImageWrap.hidden = !hasImage;
		if (hasImage && itemData.imageUrl) {
			elImage.src = itemData.imageUrl;
			elImage.alt = itemData.imageAlt || itemData.title;
		}
	}

	if (elExcerpt) {
		elExcerpt.textContent = itemData.excerpt || "";
		elExcerpt.style.display = itemData.excerpt ? "block" : "none";
	}

	if (elParagraphs) {
		elParagraphs.replaceChildren(
			...(itemData.paragraphs || []).slice(0, 2).map((text) => {
				const p = document.createElement("p");
				p.textContent = text;
				return p;
			}),
		);
	}

	if (fullPostLink) fullPostLink.href = `${localePrefix}/${itemData.slug}`;
	if (ctaText) ctaText.textContent = copy.common.read_full_story;
}
