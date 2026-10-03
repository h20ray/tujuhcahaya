/**
 * C7CommandPaletteTypes — Shared contracts for the 7C Command Palette modules.
 *
 * These types model the EmDash public HTTP payloads and 7C internal UI state.
 * No EmDash runtime import is used here; update this file when a public API
 * response shape changes.
 */

export interface SearchResultItem {
	collection: "posts" | "pages";
	id: string;
	slug: string;
	title: string;
	snippet?: string;
	locale?: string;
}

export interface RequestableSong {
	requestId: string;
	songId?: string;
	title: string;
	artist: string;
	album?: string;
	artworkUrl?: string | null;
}

export interface HistorySong {
	title: string;
	artist: string;
	album?: string;
	artworkUrl?: string;
	playedAt: number;
	duration?: number;
}

export interface C7CommandAction {
	type: "action" | "nav";
	id?: string;
	title: string;
	subtitle?: string;
	badge?: string;
	url?: string;
	handler?: () => void;
}

export interface C7PreviewTrack {
	title: string;
	artist: string;
	artworkUrl?: string;
}

export interface C7PreviewState {
	activeKey: string | null;
	isPlaying: boolean;
	isLoading: boolean;
	error?: string;
}

export type C7PaletteTab = "all" | "posts" | "pages" | "request" | "history" | "actions";

export interface C7CommandPaletteActionContext {
	prefix: string;
	isEn: boolean;
	idPath: string;
	enPath: string;
	close: () => void;
	showToast: (message: string, isError?: boolean) => void;
}

declare global {
	interface Window {
		c7AudioPreview?: { toggle: (track: C7PreviewTrack) => void };
	}
}
