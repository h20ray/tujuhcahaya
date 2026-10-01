/**
 * Tujuhcahaya 7C — Infinite Auto-load / Lazy Load Engine for Archive Dispatch Tables
 * Architecture: IntersectionObserver + /api/posts cursor-based pagination
 */

import { hydrateAllBullets } from "./7c-dispatch-drawer.js";

function escapeHtml(str: string): string {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

let activeObserver: IntersectionObserver | null = null;
let isLoading = false;

export function initPostsAutoload(): void {
	if (typeof window === "undefined") return;

	// Clean up previous observer if page swapped
	if (activeObserver) {
		activeObserver.disconnect();
		activeObserver = null;
	}

	const sentinel = document.getElementById("dispatch-load-sentinel");
	const table = document.querySelector(".dispatch-table");

	if (!sentinel || !table) return;

	let nextCursor = sentinel.getAttribute("data-next-cursor");
	const locale = sentinel.getAttribute("data-locale") || "id";
	const category = sentinel.getAttribute("data-category") || "";
	const tag = sentinel.getAttribute("data-tag") || "";
	const isEn = locale === "en";

	const loadingIndicator = sentinel.querySelector<HTMLElement>(".dispatch-loading-indicator");
	const endMessage = sentinel.querySelector<HTMLElement>(".dispatch-end-message");

	if (!nextCursor) {
		if (endMessage) endMessage.style.display = "block";
		return;
	}

	async function loadNextBatch() {
		if (isLoading || !nextCursor) return;
		isLoading = true;

		if (loadingIndicator) loadingIndicator.style.display = "inline-flex";

		try {
			const params = new URLSearchParams({
				cursor: nextCursor,
				locale,
			});
			if (category) {
				params.set("category", category);
			} else if (tag) {
				params.set("tag", tag);
			}

			const res = await fetch(`/api/posts?${params.toString()}`);
			if (!res.ok) throw new Error(`HTTP ${res.status}`);

			const data = await res.json();
			const posts = data.posts || [];

			if (Array.isArray(posts) && posts.length > 0) {
				const fragment = document.createDocumentFragment();

				for (const post of posts) {
					const row = document.createElement("a");
					row.href = (isEn ? "/en/" : "/") + post.slug;
					row.className = "dispatch-row";
					row.setAttribute("data-post-slug", post.slug);
					row.setAttribute("data-astro-reload", "");
					row.setAttribute("data-dispatch-preview", JSON.stringify(post.preview));

					const bulletTitle = isEn
						? "Toggle read status"
						: "Tandai status baca (Klik untuk ubah)";

					row.innerHTML = `
						<div class="dispatch-bullet-wrapper" title="${bulletTitle}">
							<span class="dispatch-bullet" aria-hidden="true"></span>
						</div>
						<span class="dispatch-title">${escapeHtml(post.title)}</span>
						<span class="dispatch-cat-pill cat-${escapeHtml(post.category.slug || "default")}">
							<span>${escapeHtml(post.category.label)}</span>
						</span>
						<span class="dispatch-author-pill">
							<span class="dispatch-author-avatar" aria-hidden="true">
								<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
									<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
							</span>
							<span class="dispatch-author-name">${escapeHtml(post.author.name)}</span>
						</span>
						<time class="dispatch-date" datetime="${escapeHtml(post.publishedAt)}">${escapeHtml(post.formattedDate)}</time>
					`;

					fragment.appendChild(row);
				}

				table?.appendChild(fragment);

				// Re-hydrate read bullets on newly created rows
				try {
					hydrateAllBullets();
				} catch {}
			}

			nextCursor = data.nextCursor || null;
			sentinel?.setAttribute("data-next-cursor", nextCursor || "");

			if (!nextCursor || !data.hasMore) {
				if (loadingIndicator) loadingIndicator.style.display = "none";
				if (endMessage) endMessage.style.display = "block";
				if (activeObserver) {
					activeObserver.disconnect();
					activeObserver = null;
				}
			}
		} catch (err) {
			console.error("[7C Autoload] Failed to fetch next batch:", err);
		} finally {
			isLoading = false;
			if (nextCursor && loadingIndicator) {
				loadingIndicator.style.display = "none";
			}
		}
	}

	activeObserver = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					loadNextBatch();
				}
			}
		},
		{
			root: null,
			rootMargin: "350px", // Trigger early before user hits the bottom
			threshold: 0.05,
		},
	);

	activeObserver.observe(sentinel);
}

// Bind to lifecycle hooks
if (typeof document !== "undefined") {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", initPostsAutoload);
	} else {
		initPostsAutoload();
	}
	document.addEventListener("astro:page-load", initPostsAutoload);
	document.addEventListener("astro:before-swap", () => {
		if (activeObserver) {
			activeObserver.disconnect();
			activeObserver = null;
		}
	});
}
