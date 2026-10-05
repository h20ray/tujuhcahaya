/**
 * 7C Dispatch Drawer Client Controller
 *
 * Handles slide-over pane interactions, full post navigation,
 * read-state tracking, and localStorage persistence.
 * Fully harmonized with Astro View Transitions (<ClientRouter />).
 */

declare global {
	interface Window {
		__c7DispatchDrawerInitialized?: boolean;
	}
}

import { use7cTranslation } from "../i18n/utils";
import {
	type C7DispatchDrawerCopy,
	type C7DispatchPreviewData,
	getDrawerElements,
	renderDrawerContent,
	renderDrawerReadState,
} from "./7c-dispatch-drawer-preview";

export type { C7DispatchPreviewData } from "./7c-dispatch-drawer-preview";

export const C7_READ_ARTICLES_STORAGE_KEY = "c7_read_articles";

/** Resolve locale + dictionary copy for client-side rendering. */
function getDrawerCopy(): C7DispatchDrawerCopy {
	const isEn =
		typeof window !== "undefined" && window.location.pathname.startsWith("/en");
	const { t } = use7cTranslation(isEn ? "en" : "id");
	return {
		common: t.common,
		dispatch: t.dispatch,
		fallbackCategory: t.pillars.berita.title,
	};
}

export function getReadSlugs(): Set<string> {
	try {
		const raw = localStorage.getItem(C7_READ_ARTICLES_STORAGE_KEY);
		if (!raw) return new Set();
		const list = JSON.parse(raw);
		return new Set(Array.isArray(list) ? list : []);
	} catch {
		return new Set();
	}
}

export function saveReadSlugs(slugs: Set<string>): void {
	try {
		localStorage.setItem(C7_READ_ARTICLES_STORAGE_KEY, JSON.stringify(Array.from(slugs)));
	} catch {}
}

const CHECKED_SVG = `<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

export function updateRowBullet(row: Element, isRead: boolean): void {
	const bullet = row.querySelector(".dispatch-bullet");
	if (!bullet) return;

	if (isRead) {
		bullet.classList.add("checked");
		bullet.innerHTML = CHECKED_SVG;
		bullet.setAttribute("aria-label", getDrawerCopy().dispatch.already_read);
	} else {
		bullet.classList.remove("checked");
		bullet.innerHTML = "";
		bullet.removeAttribute("aria-label");
	}
}

export function hydrateAllBullets(): void {
	const readSlugs = getReadSlugs();
	const rows = document.querySelectorAll(".dispatch-row[data-post-slug]");
	rows.forEach((row) => {
		const slug = row.getAttribute("data-post-slug");
		if (!slug) return;
		updateRowBullet(row, readSlugs.has(slug));
	});

	// If currently on a single article page, automatically record as read
	const singleArticle = document.querySelector("article[data-single-post-slug]");
	if (singleArticle) {
		const currentSlug = singleArticle.getAttribute("data-single-post-slug");
		if (currentSlug && !readSlugs.has(currentSlug)) {
			readSlugs.add(currentSlug);
			saveReadSlugs(readSlugs);
		}
	}
}

let currentItemSlug: string | null = null;
let lastFocusedElement: HTMLElement | null = null;

export function openDrawer(itemData: C7DispatchPreviewData): void {
	const { backdrop, drawer, closeBtn } = getDrawerElements();

	if (!drawer || !backdrop) return;
	lastFocusedElement = document.activeElement as HTMLElement | null;
	currentItemSlug = itemData.slug;

	const isEn = window.location.pathname.startsWith("/en");
	const copy = getDrawerCopy();

	// 1. Mark as read immediately on open
	const readSlugs = getReadSlugs();
	readSlugs.add(itemData.slug);
	saveReadSlugs(readSlugs);
	renderDrawerReadState(true, copy);

	// 2. Update status circle in dispatch row
	const row = document.querySelector(`.dispatch-row[data-post-slug="${itemData.slug}"]`);
	if (row) updateRowBullet(row, true);

	// 3. Populate drawer elements
	renderDrawerContent(itemData, isEn ? "/en" : "", copy);

	// 4. Reveal drawer & backdrop with smooth animation
	backdrop.hidden = false;
	drawer.hidden = false;
	requestAnimationFrame(() => {
		backdrop.classList.add("is-visible");
		drawer.classList.add("is-open");
		closeBtn?.focus();
	});

	document.body.style.overflow = "hidden";
}

export function closeDrawer(): void {
	const { backdrop, drawer } = getDrawerElements();
	if (!drawer || !backdrop) return;

	backdrop.classList.remove("is-visible");
	drawer.classList.remove("is-open");

	setTimeout(() => {
		backdrop.hidden = true;
		drawer.hidden = true;
		document.body.style.overflow = "";
		lastFocusedElement?.focus();
	}, 260);
}

export function closeDrawerImmediate(): void {
	const { backdrop, drawer } = getDrawerElements();
	if (backdrop) {
		backdrop.classList.remove("is-visible");
		backdrop.hidden = true;
	}
	if (drawer) {
		drawer.classList.remove("is-open");
		drawer.hidden = true;
	}
	document.body.style.overflow = "";
}

function toggleSlugRead(slug: string): boolean {
	const readSlugs = getReadSlugs();
	const wasRead = readSlugs.has(slug);
	if (wasRead) {
		readSlugs.delete(slug);
	} else {
		readSlugs.add(slug);
	}
	saveReadSlugs(readSlugs);
	return !wasRead;
}

function toggleCurrentDrawerRead(): void {
	if (!currentItemSlug) return;
	const isNowRead = toggleSlugRead(currentItemSlug);
	renderDrawerReadState(isNowRead, getDrawerCopy());
	const row = document.querySelector(`.dispatch-row[data-post-slug="${currentItemSlug}"]`);
	if (row) updateRowBullet(row, isNowRead);
}

function setupGlobalDelegation(): void {
	if (typeof window === "undefined") return;
	if (window.__c7DispatchDrawerInitialized) return;
	window.__c7DispatchDrawerInitialized = true;

	// Close interactions via Escape
	window.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			const { drawer } = getDrawerElements();
			if (drawer && !drawer.hidden && drawer.classList.contains("is-open")) {
				closeDrawer();
			}
		}
	});

	// Close drawer on browser back/forward history navigation
	window.addEventListener("popstate", () => {
		closeDrawerImmediate();
	});

	// Handle cache restorations (BFCache)
	window.addEventListener("pageshow", () => {
		closeDrawerImmediate();
		hydrateAllBullets();
	});

	// Global event delegation using CAPTURE phase to intercept before Astro ClientRouter
	document.addEventListener(
		"click",
		(e) => {
			const target = e.target as HTMLElement | null;
			if (!target) return;

			// 1. Close Button click
			if (target.closest("#c7-drawer-close")) {
				e.preventDefault();
				closeDrawer();
				return;
			}

			// 2. Backdrop click
			if (target.id === "c7-dispatch-backdrop" || target.closest("#c7-dispatch-backdrop")) {
				e.preventDefault();
				closeDrawer();
				return;
			}

			// 3. Status Pill Toggle inside Drawer
			if (target.closest("#c7-drawer-read-toggle")) {
				e.preventDefault();
				toggleCurrentDrawerRead();
				return;
			}

			// 4. "Baca Selengkapnya" CTA link inside Drawer
			// Allow Astro ClientRouter to perform navigation, but immediately close drawer and reset body overflow
			if (target.closest("#c7-drawer-full-post")) {
				closeDrawerImmediate();
				return;
			}

			// 5. Status Bullet Wrapper click on a row (direct toggle action)
			const bulletWrapper = target.closest(".dispatch-bullet-wrapper");
			if (bulletWrapper) {
				const row = bulletWrapper.closest(".dispatch-row[data-post-slug]");
				const slug = row?.getAttribute("data-post-slug");
				if (slug) {
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
					const isNowRead = toggleSlugRead(slug);
					if (row) updateRowBullet(row, isNowRead);
					if (currentItemSlug === slug) renderDrawerReadState(isNowRead, getDrawerCopy());
					return;
				}
			}

			// 6. Dispatch Row click (open drawer preview)
			const row = target.closest(".dispatch-row[data-post-slug]") as HTMLElement | null;
			if (!row) return;

			// Ignore modifier clicks for native new tab behavior (Cmd/Ctrl/Shift/Middle click)
			if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.button && e.button !== 0)) {
				return;
			}

			const rawPreview = row.getAttribute("data-dispatch-preview");
			if (!rawPreview) return;

			// Stop browser & Astro ClientRouter navigation immediately
			e.preventDefault();
			e.stopPropagation();
			e.stopImmediatePropagation();

			try {
				const previewData = JSON.parse(rawPreview) as C7DispatchPreviewData;
				openDrawer(previewData);
			} catch (err) {
				console.error("Gagal membuka pratinjau dispatch:", err);
			}
		},
		{ capture: true },
	);

	// Astro View Transitions lifecycle hooks
	document.addEventListener("astro:before-swap", () => {
		closeDrawerImmediate();
	});

	document.addEventListener("astro:page-load", () => {
		closeDrawerImmediate();
		hydrateAllBullets();
	});
}

// Initial bootstrap
if (typeof document !== "undefined") {
	setupGlobalDelegation();
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", () => {
			hydrateAllBullets();
		});
	} else {
		hydrateAllBullets();
	}
}

