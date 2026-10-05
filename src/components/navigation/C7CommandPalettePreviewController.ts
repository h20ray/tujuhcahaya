/**
 * C7CommandPalettePreviewController — Apple Music / iTunes preview lifecycle.
 *
 * Isolates audio preview state so the orchestrator only sees toggle/stop/sync.
 */

import type { C7PreviewTrack } from "./C7CommandPaletteTypes";
import { use7cTranslation } from "../../i18n/utils";

const TRACK_PREVIEW_ENDPOINT = "/_emdash/api/plugins/tujuhcahaya-radio/track-preview";
const PREVIEW_TIMEOUT = 4500;

export class C7CommandPalettePreviewController {
	#host: HTMLElement;
	#showToast: (message: string, isError?: boolean) => void;
	#getLocale: () => string;
	#localPreviewAudio: HTMLAudioElement | null = null;
	#localPreviewKey: string | null = null;

	constructor(host: HTMLElement, getLocale: () => string, showToast: (message: string, isError?: boolean) => void) {
		this.#host = host;
		this.#getLocale = getLocale;
		this.#showToast = showToast;
	}

	#t() {
		return use7cTranslation(this.#getLocale() === "en" ? "en" : "id").t;
	}

	async toggle(track: C7PreviewTrack, btn: HTMLButtonElement): Promise<void> {
		const isPlaying = btn.classList.contains("is-playing");
		const isLoading = btn.classList.contains("is-loading");

		if (isPlaying || isLoading) {
			window.dispatchEvent(new CustomEvent("c7-stop-preview"));
			this.stop();
			return;
		}

		btn.classList.add("is-loading");
		btn.classList.remove("is-playing");

		if (window.c7AudioPreview) {
			window.c7AudioPreview.toggle(track);
			return;
		}

		window.dispatchEvent(new CustomEvent("c7-toggle-preview", { detail: track }));
		await this.#playLocalPreview(track);
	}

	stop(): void {
		if (this.#localPreviewAudio) {
			this.#localPreviewAudio.pause();
			this.#localPreviewAudio.removeAttribute("src");
			this.#localPreviewAudio = null;
		}
		this.#localPreviewKey = null;
		window.dispatchEvent(new CustomEvent("c7-radio-unduck", { detail: { source: "cp-preview" } }));
		this.#syncButtonsUI(null, false, false);
	}

	async #playLocalPreview(track: C7PreviewTrack): Promise<void> {
		const key = `${track.artist.toLowerCase().trim()}:::${track.title.toLowerCase().trim()}`;
		this.#localPreviewKey = key;

		try {
			const previewUrl = await this.#resolvePreviewUrl(track);

			if (!previewUrl) {
				this.#syncButtonsUI(key, false, false);
				this.#showToast(this.#t().palette.preview_unavailable);
				return;
			}

			if (this.#localPreviewKey !== key) return;

			if (!this.#localPreviewAudio) {
				this.#localPreviewAudio = new Audio();
			}
			this.#localPreviewAudio.src = previewUrl;
			this.#localPreviewAudio.onended = () => this.stop();
			this.#localPreviewAudio.onerror = () => {
				this.stop();
				this.#showToast(this.#t().palette.preview_failed);
			};

			window.dispatchEvent(new CustomEvent("c7-radio-duck", { detail: { source: "cp-preview" } }));
			await this.#localPreviewAudio.play();
			this.#syncButtonsUI(key, true, false);
		} catch (_) {
			this.stop();
		}
	}

	async #resolvePreviewUrl(track: C7PreviewTrack): Promise<string | null> {
		try {
			const url = `${TRACK_PREVIEW_ENDPOINT}?title=${encodeURIComponent(track.title)}&artist=${encodeURIComponent(track.artist)}`;
			const res = await fetch(url, { signal: AbortSignal.timeout(PREVIEW_TIMEOUT) });
			if (res.ok) {
				const raw = await res.json();
				let payload: unknown = raw;
				while (
					payload &&
					typeof payload === "object" &&
					(payload as Record<string, unknown>).data &&
					typeof (payload as Record<string, unknown>).data === "object" &&
					!Array.isArray((payload as Record<string, unknown>).data)
				) {
					payload = (payload as Record<string, unknown>).data;
				}
				const previewUrl =
					(payload as Record<string, unknown>)?.previewUrl ||
					raw?.data?.previewUrl ||
					raw?.previewUrl;
				if (typeof previewUrl === "string") return previewUrl;
			}
		} catch (_) {}

		try {
			const itunesRes = await fetch(
				`https://itunes.apple.com/search?term=${encodeURIComponent(`${track.title} ${track.artist}`)}&entity=song&limit=1`
			);
			if (itunesRes.ok) {
				const itunesData = (await itunesRes.json()) as { results?: { previewUrl?: string }[] };
				if (typeof itunesData?.results?.[0]?.previewUrl === "string") {
					return itunesData.results[0].previewUrl;
				}
			}
		} catch (_) {}

		return null;
	}

	#syncButtonsUI(activeKey: string | null, isPlaying: boolean, isLoading: boolean): void {
		const btns = this.#host.querySelectorAll<HTMLButtonElement>("[data-cp-preview-btn]");
		btns.forEach((btn) => {
			const t = decodeURIComponent(btn.getAttribute("data-title") || "");
			const a = decodeURIComponent(btn.getAttribute("data-artist") || "");
			const key = `${a.toLowerCase().trim()}:::${t.toLowerCase().trim()}`;
			const isThis = activeKey === key;

			btn.classList.toggle("is-playing", isThis && isPlaying);
			btn.classList.toggle("is-loading", isThis && isLoading);
			btn.setAttribute("aria-pressed", String(isThis && isPlaying));
		});
	}

	/** Public entry used by external c7-preview-state-change events. */
	applyExternalState(activeKey: string | null, isPlaying: boolean, isLoading: boolean): void {
		this.#syncButtonsUI(activeKey, isPlaying, isLoading);
	}
}
