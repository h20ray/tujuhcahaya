/**
 * C7CommandPaletteRenderer — Pure HTML builders for palette results.
 *
 * No business logic; only maps data into the same markup the old monolith used.
 */

import type {
	C7CommandAction,
	HistorySong,
	RequestableSong,
	SearchResultItem,
} from "./C7CommandPaletteTypes";
import type { PaletteDict } from "../../i18n/types";
import { format7cText } from "../../i18n/utils";

function escapeHtml(str: string): string {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

function actionIcon(): string {
	return `<span class="c7-cp-item-icon">
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
		</svg>
	</span>`;
}

function postIcon(): string {
	return `<span class="c7-cp-item-icon">
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
			<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
		</svg>
	</span>`;
}

function pageIcon(): string {
	return `<span class="c7-cp-item-icon">
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
			<line x1="9" y1="9" x2="15" y2="9"></line>
			<line x1="9" y1="13" x2="15" y2="13"></line>
		</svg>
	</span>`;
}

function songFallbackIcon(): string {
	return `<span class="c7-cp-item-icon">
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
			<path d="M9 18V5l12-2v13"></path>
			<circle cx="6" cy="18" r="3"></circle>
			<circle cx="18" cy="16" r="3"></circle>
		</svg>
	</span>`;
}

function historyFallbackIcon(): string {
	return `<span class="c7-cp-item-icon">
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
			<circle cx="12" cy="12" r="10"></circle>
			<polyline points="12 6 12 12 16 14"></polyline>
		</svg>
	</span>`;
}

function previewButton(title: string, artist: string, artwork: string, t: PaletteDict): string {
	return `<button
		type="button"
		class="c7-cp-preview-play-btn"
		data-cp-preview-btn
		data-title="${encodeURIComponent(title)}"
		data-artist="${encodeURIComponent(artist)}"
		data-artwork="${encodeURIComponent(artwork)}"
		aria-label="${t.preview_apple_music}"
		title="${t.preview_30s}"
	>
		<svg class="c7-cp-icon-play" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<polygon points="6 3 20 12 6 21 6 3"></polygon>
		</svg>
		<svg class="c7-cp-icon-pause" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<rect x="6" y="4" width="4" height="16"></rect>
			<rect x="14" y="4" width="4" height="16"></rect>
		</svg>
		<svg class="c7-cp-icon-spin" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
			<circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
			<path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
		</svg>
	</button>`;
}

export function renderQuickActions(actions: C7CommandAction[], t: PaletteDict): string {
	if (actions.length === 0) return "";

	const itemsHtml = actions
		.map((item) => {
			const urlAttr = item.url ? `data-url="${escapeHtml(item.url)}"` : "";
			const actionAttr = item.id ? `data-action="${escapeHtml(item.id)}"` : "";
			return `<div class="c7-cp-item" data-cp-item ${urlAttr} ${actionAttr} tabindex="-1" role="option">
				${actionIcon()}
				<div class="c7-cp-item-content">
					<span class="c7-cp-item-title">${escapeHtml(item.title)}</span>
					<span class="c7-cp-item-subtitle">${escapeHtml(item.subtitle || "")}</span>
				</div>
				<span class="c7-cp-badge ${item.type === "action" ? "action" : ""}">${escapeHtml(item.badge || "")}</span>
			</div>`;
		})
		.join("");

	return `<div class="c7-cp-section">
		<div class="c7-cp-section-title">${t.section_actions}</div>
		${itemsHtml}
	</div>`;
}

export function renderEmptyState(t: PaletteDict, query?: string): string {
	const q = query ? escapeHtml(query) : "";
	return `<div class="c7-cp-empty">
		<span>${format7cText(t.no_results, { query: q })}</span>
		<p>${t.no_results_hint}</p>
	</div>`;
}

export function renderInitialPrompt(t: PaletteDict): string {
	return `<div class="c7-cp-empty">
		<span>${t.initial_prompt}</span>
	</div>`;
}

export function renderLoading(t: PaletteDict): string {
	return `<div class="c7-cp-loading"><span>${t.searching}</span></div>`;
}

export function renderPostsSection(posts: SearchResultItem[], prefix: string, t: PaletteDict): string {
	if (posts.length === 0) return "";
	const itemsHtml = posts
		.map((item) => {
			const url = `${prefix}/${item.slug}`;
			return `<div class="c7-cp-item" data-cp-item data-url="${escapeHtml(url)}" tabindex="-1" role="option">
				${postIcon()}
				<div class="c7-cp-item-content">
					<span class="c7-cp-item-title">${escapeHtml(item.title)}</span>
					<span class="c7-cp-item-subtitle">${escapeHtml(item.snippet || url)}</span>
				</div>
				<span class="c7-cp-badge">${t.badge_story}</span>
			</div>`;
		})
		.join("");

	return `<div class="c7-cp-section">
		<div class="c7-cp-section-title">${t.results_stories}</div>
		${itemsHtml}
	</div>`;
}

export function renderPagesSection(pages: SearchResultItem[], prefix: string, t: PaletteDict): string {
	if (pages.length === 0) return "";
	const itemsHtml = pages
		.map((item) => {
			const url = `${prefix}/${item.slug}`;
			return `<div class="c7-cp-item" data-cp-item data-url="${escapeHtml(url)}" tabindex="-1" role="option">
				${pageIcon()}
				<div class="c7-cp-item-content">
					<span class="c7-cp-item-title">${escapeHtml(item.title)}</span>
					<span class="c7-cp-item-subtitle">${escapeHtml(item.snippet || url)}</span>
				</div>
				<span class="c7-cp-badge">${t.badge_page}</span>
			</div>`;
		})
		.join("");

	return `<div class="c7-cp-section">
		<div class="c7-cp-section-title">${t.results_pages}</div>
		${itemsHtml}
	</div>`;
}

export function renderSongRequestsSection(songs: RequestableSong[], t: PaletteDict): string {
	if (songs.length === 0) return "";
	const itemsHtml = songs
		.map((song) => {
			const artwork = song.artworkUrl
				? `<img class="c7-cp-item-thumb" src="${escapeHtml(song.artworkUrl)}" alt="" loading="lazy" />`
				: songFallbackIcon();

			return `<div class="c7-cp-item" data-cp-item data-request-id="${escapeHtml(song.requestId)}" data-song-title="${encodeURIComponent(song.title)}" data-song-artist="${encodeURIComponent(song.artist)}" tabindex="-1" role="option">
				${artwork}
				<div class="c7-cp-item-content">
					<span class="c7-cp-item-title">${escapeHtml(song.title)}</span>
					<span class="c7-cp-item-subtitle">${escapeHtml(song.artist)}${song.album ? ` • ${escapeHtml(song.album)}` : ""}</span>
				</div>
				<div class="c7-cp-item-actions">
					${previewButton(song.title, song.artist, song.artworkUrl || "", t)}
					<span class="c7-cp-badge request-btn">${t.request_badge}</span>
				</div>
			</div>`;
		})
		.join("");

	return `<div class="c7-cp-section">
		<div class="c7-cp-section-title">${t.results_radio}</div>
		${itemsHtml}
	</div>`;
}

export function renderHistorySection(tracks: HistorySong[], t: PaletteDict): string {
	if (tracks.length === 0) return "";
	const itemsHtml = tracks
		.map((track) => {
			const artwork = track.artworkUrl
				? `<img class="c7-cp-item-thumb" src="${escapeHtml(track.artworkUrl)}" alt="" loading="lazy" />`
				: historyFallbackIcon();

			const playedMinAgo = track.playedAt
				? Math.max(1, Math.round((Date.now() / 1000 - track.playedAt) / 60))
				: 0;
			const timeText = playedMinAgo > 0 ? format7cText(t.ago_minutes, { minutes: playedMinAgo }) : "";

			return `<div class="c7-cp-item" data-cp-item data-history-title="${encodeURIComponent(track.title)}" data-history-artist="${encodeURIComponent(track.artist)}" tabindex="-1" role="option">
				${artwork}
				<div class="c7-cp-item-content">
					<span class="c7-cp-item-title">${escapeHtml(track.title)}</span>
					<span class="c7-cp-item-subtitle">${escapeHtml(track.artist)}${timeText ? ` • ${timeText}` : ""}</span>
				</div>
				<div class="c7-cp-item-actions">
					${previewButton(track.title, track.artist, track.artworkUrl || "", t)}
					<span class="c7-cp-badge">${t.radio_track}</span>
				</div>
			</div>`;
		})
		.join("");

	return `<div class="c7-cp-section">
		<div class="c7-cp-section-title">${t.recently_played}</div>
		${itemsHtml}
	</div>`;
}

export function renderActionsSection(actions: C7CommandAction[], t: PaletteDict): string {
	if (actions.length === 0) return "";
	const itemsHtml = actions
		.map((item) => {
			const urlAttr = item.url ? `data-url="${escapeHtml(item.url)}"` : "";
			const actionAttr = item.id ? `data-action="${escapeHtml(item.id)}"` : "";
			return `<div class="c7-cp-item" data-cp-item ${urlAttr} ${actionAttr} tabindex="-1" role="option">
				${actionIcon()}
				<div class="c7-cp-item-content">
					<span class="c7-cp-item-title">${escapeHtml(item.title)}</span>
					<span class="c7-cp-item-subtitle">${escapeHtml(item.subtitle || "")}</span>
				</div>
				<span class="c7-cp-badge ${item.type === "action" ? "action" : ""}">${escapeHtml(item.badge || "")}</span>
			</div>`;
		})
		.join("");

	return `<div class="c7-cp-section">
		<div class="c7-cp-section-title">${t.results_actions}</div>
		${itemsHtml}
	</div>`;
}

export interface C7SearchRenderModel {
	query: string;
	t: PaletteDict;
	prefix: string;
	postResults: SearchResultItem[];
	pageResults: SearchResultItem[];
	matchedSongs: RequestableSong[];
	matchedHistory: HistorySong[];
	matchedActions: C7CommandAction[];
}

export function renderSearchResults(model: C7SearchRenderModel): string {
	const { query, t, prefix, postResults, pageResults, matchedSongs, matchedHistory, matchedActions } = model;

	let html = "";
	html += renderPostsSection(postResults, prefix, t);
	html += renderSongRequestsSection(matchedSongs, t);
	html += renderHistorySection(matchedHistory, t);
	html += renderPagesSection(pageResults, prefix, t);
	html += renderActionsSection(matchedActions, t);

	if (!html) {
		return renderEmptyState(t, query);
	}

	return html;
}
