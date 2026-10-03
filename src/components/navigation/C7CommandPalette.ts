import { C7CommandPaletteSearchEngine } from "./C7CommandPaletteSearchEngine";
import { C7CommandPalettePreviewController } from "./C7CommandPalettePreviewController";
import { buildDefaultActions } from "./C7CommandPaletteActionProvider";
import * as renderer from "./C7CommandPaletteRenderer";
import type { C7PaletteTab, C7PreviewTrack } from "./C7CommandPaletteTypes";

const SafeHTMLElement = typeof HTMLElement !== "undefined" ? HTMLElement : (class {} as typeof HTMLElement);

class C7CommandPaletteElement extends SafeHTMLElement {
	#isOpen = false;
	#activeTab: C7PaletteTab = "all";
	#query = "";
	#debounceTimer: ReturnType<typeof setTimeout> | null = null;
	#abortController: AbortController | null = null;
	#activeIndex = 0;
	#previousActiveElement: HTMLElement | null = null;

	#engine = new C7CommandPaletteSearchEngine();
	#previewController = new C7CommandPalettePreviewController(
		this,
		() => this.getAttribute("data-locale") || "id",
		(message, isError) => this.#showToast(message, isError)
	);

	connectedCallback() {
		this.#setupListeners();
	}

	#isEn(): boolean {
		return this.getAttribute("data-locale") === "en";
	}

	#getActionContext() {
		const prefix = this.getAttribute("data-prefix") || "";
		const idPath = this.getAttribute("data-id-path") || "/";
		const enPath = this.getAttribute("data-en-path") || "/en";
		return {
			prefix,
			isEn: this.#isEn(),
			idPath,
			enPath,
			close: () => this.close(),
			showToast: (message: string, isError = false) => this.#showToast(message, isError),
		};
	}

	#setupListeners() {
		window.addEventListener("keydown", (e: KeyboardEvent) => {
			const isModK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
			const isSlash = e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName);

			if (isModK || isSlash) {
				e.preventDefault();
				this.toggle();
				return;
			}

			if (this.#isOpen) {
				if (e.key === "Escape") {
					e.preventDefault();
					this.close();
				} else if (e.key === "ArrowDown") {
					e.preventDefault();
					this.#moveActive(1);
				} else if (e.key === "ArrowUp") {
					e.preventDefault();
					this.#moveActive(-1);
				} else if (e.key === "Enter") {
					e.preventDefault();
					this.#executeActive();
				}
			}
		});

		window.addEventListener("c7:open-command-palette", () => {
			this.open();
		});

		window.addEventListener("c7-preview-state-change", (e: Event) => {
			const state = (e as CustomEvent).detail;
			if (state) {
				this.#previewController.applyExternalState(state.activeKey, state.isPlaying, state.isLoading);
				if (state.error && state.activeKey) {
					this.#showToast(state.error);
				}
			}
		});

		this.querySelector("[data-cp-backdrop]")?.addEventListener("click", () => this.close());
		this.querySelector("[data-cp-close]")?.addEventListener("click", () => this.close());

		const clearBtn = this.querySelector("[data-cp-clear]") as HTMLButtonElement | null;
		clearBtn?.addEventListener("click", () => {
			const input = this.querySelector("[data-cp-input]") as HTMLInputElement | null;
			if (input) {
				input.value = "";
				this.#onSearchInput("");
				input.focus();
			}
		});

		const input = this.querySelector("[data-cp-input]") as HTMLInputElement | null;
		input?.addEventListener("input", () => {
			if (input && clearBtn) clearBtn.hidden = input.value.length === 0;
			this.#onSearchInput(input?.value || "");
		});

		const tabs = this.querySelectorAll<HTMLButtonElement>("[data-cp-tab]");
		tabs.forEach((tab) => {
			tab.addEventListener("click", () => {
				tabs.forEach((t) => {
					t.classList.remove("active");
					t.setAttribute("aria-selected", "false");
				});
				tab.classList.add("active");
				tab.setAttribute("aria-selected", "true");
				const tabValue = tab.getAttribute("data-cp-tab");
				this.#activeTab = (tabValue as C7PaletteTab) || "all";
				this.#renderResults();
			});
		});
	}

	public open() {
		this.#previousActiveElement = document.activeElement as HTMLElement | null;
		this.#isOpen = true;
		this.removeAttribute("inert");
		this.removeAttribute("aria-hidden");
		this.setAttribute("data-open", "");
		document.body.style.overflow = "hidden";

		const input = this.querySelector("[data-cp-input]") as HTMLInputElement | null;
		if (input) {
			input.focus();
			input.select();
		}

		this.#engine.preloadRadioData();
		this.#renderResults();
	}

	public close() {
		this.#isOpen = false;
		this.removeAttribute("data-open");
		document.body.style.overflow = "";
		this.#hideToast();

		this.#previewController.stop();
		window.dispatchEvent(new CustomEvent("c7-stop-preview"));

		if (this.contains(document.activeElement)) {
			(document.activeElement as HTMLElement)?.blur();
		}

		if (
			this.#previousActiveElement &&
			typeof this.#previousActiveElement.focus === "function" &&
			document.body.contains(this.#previousActiveElement)
		) {
			this.#previousActiveElement.focus();
		} else {
			const searchBtn = document.querySelector(".c7-rn-search-btn") as HTMLElement | null;
			searchBtn?.focus();
		}
		this.#previousActiveElement = null;

		this.setAttribute("inert", "");
		this.setAttribute("aria-hidden", "true");
	}

	public toggle() {
		if (this.#isOpen) {
			this.close();
		} else {
			this.open();
		}
	}

	#onSearchInput(value: string) {
		this.#query = value.trim();
		if (this.#debounceTimer) clearTimeout(this.#debounceTimer);
		this.#debounceTimer = setTimeout(() => {
			this.#renderResults();
		}, 150);
	}

	async #renderResults() {
		const container = this.querySelector("[data-cp-results]");
		if (!container) return;

		const q = this.#query.toLowerCase();
		const activeTab = this.#activeTab;
		const isEn = this.#isEn();
		const prefix = this.getAttribute("data-prefix") || "";

		if (!q) {
			const defaultActions = buildDefaultActions(this.#getActionContext());
			const filteredActions = activeTab === "all" || activeTab === "actions" ? defaultActions : [];
			container.innerHTML = renderer.renderQuickActions(filteredActions, isEn) || renderer.renderInitialPrompt(isEn);
			this.#bindItemClicks();
			this.#setActiveIndex(0);
			return;
		}

		this.#abortController?.abort();
		this.#abortController = new AbortController();

		container.innerHTML = renderer.renderLoading(isEn);

		const matchedActions = buildDefaultActions(this.#getActionContext()).filter(
			(a) =>
				a.title.toLowerCase().includes(q) ||
				(a.subtitle?.toLowerCase().includes(q) ?? false)
		);
		const matchedSongs = this.#engine.getMatchedSongs(q, activeTab);
		const matchedHistory = this.#engine.getMatchedHistory(q, activeTab);

		let searchItems: renderer.C7SearchRenderModel["postResults"] = [];
		try {
			searchItems = await this.#engine.searchPostsAndPages(q, activeTab, this.#abortController.signal);
		} catch (_) {}

		container.innerHTML = renderer.renderSearchResults({
			query: this.#query,
			isEn,
			prefix,
			postResults: searchItems.filter((i) => i.collection === "posts"),
			pageResults: searchItems.filter((i) => i.collection === "pages"),
			matchedSongs,
			matchedHistory,
			matchedActions: activeTab === "all" || activeTab === "actions" ? matchedActions : [],
		});

		this.#bindItemClicks();
		this.#setActiveIndex(0);
	}

	#bindItemClicks() {
		const items = this.querySelectorAll<HTMLElement>("[data-cp-item]");
		items.forEach((item, idx) => {
			item.addEventListener("click", () => {
				this.#activateItem(item);
			});
			item.addEventListener("mouseenter", () => {
				this.#setActiveIndex(idx);
			});
		});

		const previewBtns = this.querySelectorAll<HTMLButtonElement>("[data-cp-preview-btn]");
		previewBtns.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				e.stopPropagation();
				const title = decodeURIComponent(btn.getAttribute("data-title") || "");
				const artist = decodeURIComponent(btn.getAttribute("data-artist") || "");
				const artwork = decodeURIComponent(btn.getAttribute("data-artwork") || "");
				this.#previewController.toggle({ title, artist, artworkUrl: artwork } as C7PreviewTrack, btn);
			});
		});
	}

	#moveActive(delta: number) {
		const items = this.querySelectorAll<HTMLElement>("[data-cp-item]");
		if (items.length === 0) return;
		const next = (this.#activeIndex + delta + items.length) % items.length;
		this.#setActiveIndex(next);
	}

	#setActiveIndex(index: number) {
		const items = this.querySelectorAll<HTMLElement>("[data-cp-item]");
		if (items.length === 0) return;
		items.forEach((item) => item.removeAttribute("data-active"));
		this.#activeIndex = Math.max(0, Math.min(index, items.length - 1));
		const current = items[this.#activeIndex];
		if (current) {
			current.setAttribute("data-active", "");
			current.scrollIntoView({ block: "nearest" });
		}
	}

	#executeActive() {
		const items = this.querySelectorAll<HTMLElement>("[data-cp-item]");
		const current = items[this.#activeIndex];
		if (current) {
			this.#activateItem(current);
		}
	}

	async #activateItem(item: HTMLElement) {
		const requestId = item.getAttribute("data-request-id");
		if (requestId) {
			const title = decodeURIComponent(item.getAttribute("data-song-title") || "");
			const artist = decodeURIComponent(item.getAttribute("data-song-artist") || "");
			const isEn = this.#isEn();
			this.#showToast(isEn ? `Sending request for "${title}"...` : `Mengirim permintaan lagu "${title}"...`);
			const result = await this.#engine.submitSongRequest(requestId, title, artist);
			if (result.ok) {
				this.#showToast(
					isEn
						? `Request for "${title}" sent to broadcast queue!`
						: `Permintaan lagu "${title}" berhasil masuk ke antrean siaran Tujuhcahaya Radio!`,
					false
				);
			} else {
				this.#showToast(
					result.message || (isEn ? "Failed to submit request" : "Gagal mengirim permintaan lagu"),
					true
				);
			}
			return;
		}

		const historyTitle = item.getAttribute("data-history-title");
		if (historyTitle) {
			this.close();
			const lyricsBtn = document.querySelector(".c7-dock-lyrics-btn") as HTMLButtonElement | null;
			if (lyricsBtn) lyricsBtn.click();
			return;
		}

		const actionId = item.getAttribute("data-action");
		if (actionId) {
			const action = buildDefaultActions(this.#getActionContext()).find((a) => a.id === actionId);
			if (action && typeof action.handler === "function") {
				action.handler();
			}
			return;
		}

		const url = item.getAttribute("data-url");
		if (url) {
			this.close();
			window.location.href = url;
		}
	}

	#showToast(message: string, isError = false) {
		const toast = this.querySelector("[data-cp-toast]") as HTMLElement | null;
		const text = this.querySelector("[data-cp-toast-text]") as HTMLElement | null;
		if (!toast || !text) return;

		text.textContent = message;
		toast.classList.toggle("error", isError);
		toast.hidden = false;
	}

	#hideToast() {
		const toast = this.querySelector("[data-cp-toast]") as HTMLElement | null;
		if (toast) toast.hidden = true;
	}
}

if (typeof customElements !== "undefined" && !customElements.get("c7-command-palette")) {
	customElements.define("c7-command-palette", C7CommandPaletteElement);
}
