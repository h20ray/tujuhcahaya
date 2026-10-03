/**
 * C7CommandPaletteSearchEngine — Fetch/cache layer for command-palette data.
 *
 * This is the only module that knows the EmDash public endpoint URLsS and
 * response shapes. If an EmDash update changes a search endpoint, the fix is
 * localized to this file.
 */

import type {
	SearchResultItem,
	RequestableSong,
	HistorySong,
	C7PaletteTab,
} from "./C7CommandPaletteTypes";

const RADIO_SONG_REQUEST_ENDPOINT = "/_emdash/api/plugins/tujuhcahaya-radio/song-request";
const RADIO_NOW_PLAYING_ENDPOINT = "/_emdash/api/plugins/tujuhcahaya-radio/now-playing";
const SEARCH_ENDPOINT = "/_emdash/api/search";

export class C7CommandPaletteSearchEngine {
	#cachedRequestableSongs: RequestableSong[] | null = null;
	#cachedHistorySongs: HistorySong[] | null = null;

	async preloadRadioData(): Promise<void> {
		await Promise.all([this.#loadRequestableSongs(), this.#loadHistorySongs()]);
	}

	async #loadRequestableSongs(): Promise<void> {
		if (this.#cachedRequestableSongs) return;
		try {
			const res = await fetch(RADIO_SONG_REQUEST_ENDPOINT);
			const json = await res.json();
			const songs = (json?.data?.songs || json?.songs) as RequestableSong[] | undefined;
			if (Array.isArray(songs)) {
				this.#cachedRequestableSongs = songs;
			}
		} catch (_) {}
	}

	async #loadHistorySongs(): Promise<void> {
		if (this.#cachedHistorySongs) return;
		try {
			const res = await fetch(RADIO_NOW_PLAYING_ENDPOINT);
			const json = await res.json();
			const history = (json?.data?.data?.history || json?.history) as HistorySong[] | undefined;
			if (Array.isArray(history)) {
				this.#cachedHistorySongs = history;
			}
		} catch (_) {}
	}

	getMatchedSongs(query: string, activeTab: C7PaletteTab): RequestableSong[] {
		if (!this.#cachedRequestableSongs || (activeTab !== "all" && activeTab !== "request")) {
			return [];
		}
		const q = query.toLowerCase();
		return this.#cachedRequestableSongs
			.filter(
				(s) =>
					s.title.toLowerCase().includes(q) ||
					s.artist.toLowerCase().includes(q) ||
					(s.album && s.album.toLowerCase().includes(q))
			)
			.slice(0, 8);
	}

	getMatchedHistory(query: string, activeTab: C7PaletteTab): HistorySong[] {
		if (!this.#cachedHistorySongs || (activeTab !== "all" && activeTab !== "history")) {
			return [];
		}
		const q = query.toLowerCase();
		return this.#cachedHistorySongs
			.filter(
				(h) =>
					h.title.toLowerCase().includes(q) ||
					h.artist.toLowerCase().includes(q) ||
					(h.album && h.album.toLowerCase().includes(q))
			)
			.slice(0, 6);
	}

	async searchPostsAndPages(
		query: string,
		activeTab: C7PaletteTab,
		signal: AbortSignal
	): Promise<SearchResultItem[]> {
		if (activeTab !== "all" && activeTab !== "posts" && activeTab !== "pages") {
			return [];
		}
		const collections =
			activeTab === "posts" ? "posts" : activeTab === "pages" ? "pages" : "posts,pages";
		const res = await fetch(
			`${SEARCH_ENDPOINT}?q=${encodeURIComponent(query)}&collections=${collections}&limit=8`,
			{ signal }
		);
		const json = await res.json();
		if (json?.data?.items && Array.isArray(json.data.items)) {
			return json.data.items as SearchResultItem[];
		}
		return [];
	}

	async submitSongRequest(
		requestId: string,
		title: string,
		artist: string
	): Promise<{ ok: boolean; message?: string }> {
		try {
			const res = await fetch(RADIO_SONG_REQUEST_ENDPOINT, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "submit",
					requestId,
					station: "tujuhcahaya-radio",
				}),
			});
			const raw = await res.json();
			const data = raw?.data ?? raw;

			if (data?.ok === true) {
				this.#persistPendingRequest(requestId, title, artist);
			}

			return { ok: data?.ok === true, message: data?.message };
		} catch (_) {
			return { ok: false };
		}
	}

	#persistPendingRequest(requestId: string, title: string, artist: string): void {
		try {
			localStorage.setItem(
				"c7_radio_pending_request",
				JSON.stringify({
					requestId,
					title,
					artist,
					stationSlug: "tujuhcahaya-radio",
					registeredAt: Date.now(),
					status: "queued",
				})
			);
			window.dispatchEvent(new CustomEvent("c7-radio-request-changed"));
		} catch (_) {}
	}
}
