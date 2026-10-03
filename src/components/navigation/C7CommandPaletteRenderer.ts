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

function previewButton(title: string, artist: string, artwork: string, isEn: boolean): string {
	return `<button
		type="button"
		class="c7-cp-preview-play-btn"
		data-cp-preview-btn
		data-title="${encodeURIComponent(title)}"
		data-artist="${encodeURIComponent(artist)}"
		data-artwork="${encodeURIComponent(artwork)}"
		aria-label="${isEn ? "Preview on Apple Music" : "Putar pratinjau Apple Music"}"
		title="${isEn ? "30s iTunes / Apple Music Preview" : "Pratinjau lagu (iTunes / Apple Music)"}"
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

export function renderQuickActions(actions: C7CommandAction[], isEn: boolean): string {
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
		<div class="c7-cp-section-title">${isEn ? "Quick Actions & Navigation" : "Aksi Cepat & Navigasi Utama"}</div>
		${itemsHtml}
	</div>`;
}

export function renderEmptyState(isEn: boolean, query?: string): string {
	const q = query ? escapeHtml(query) : "";
	return `<div class="c7-cp-empty">
		<span>${isEn ? `No results found for "${q}"` : `Tidak ada hasil untuk "${q}"`}</span>
		<p>${isEn ? "Try searching for another topic, artist, or system command" : "Coba kata kunci topik berita, musisi radio, atau perintah lain"}</p>
	</div>`;
}

export function renderInitialPrompt(isEn: boolean): string {
	return `<div class="c7-cp-empty">
		<span>${isEn ? "Type to search content or songs..." : "Ketik kata kunci untuk mencari konten atau lagu..."}</span>
	</div>`;
}

export function renderLoading(isEn: boolean): string {
	return `<div class="c7-cp-loading"><span>${isEn ? "Searching..." : "Mencari..."}</span></div>`;
}

export function renderPostsSection(posts: SearchResultItem[], prefix: string, isEn: boolean): string {
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
				<span class="c7-cp-badge">${isEn ? "Story" : "Liputan"}</span>
			</div>`;
		})
		.join("");

	return `<div class="c7-cp-section">
		<div class="c7-cp-section-title">${isEn ? "Stories & News" : "Liputan & Berita"}</div>
		${itemsHtml}
	</div>`;
}

export function renderPagesSection(pages: SearchResultItem[], prefix: string, isEn: boolean): string {
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
				<span class="c7-cp-badge">${isEn ? "Page" : "Halaman"}</span>
			</div>`;
		})
		.join("");

	return `<div class="c7-cp-section">
		<div class="c7-cp-section-title">${isEn ? "Pages & Information" : "Halaman & Informasi"}</div>
		${itemsHtml}
	</div>`;
}

export function renderSongRequestsSection(songs: RequestableSong[], isEn: boolean): string {
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
					${previewButton(song.title, song.artist, song.artworkUrl || "", isEn)}
					<span class="c7-cp-badge request-btn">${isEn ? "Request" : "Request Lagu"}</span>
				</div>
			</div>`;
		})
		.join("");

	return `<div class="c7-cp-section">
		<div class="c7-cp-section-title">${isEn ? "Radio Song Request Catalog" : "Katalog Permintaan Lagu Radio"}</div>
		${itemsHtml}
	</div>`;
}

export function renderHistorySection(tracks: HistorySong[], isEn: boolean): string {
	if (tracks.length === 0) return "";
	const itemsHtml = tracks
		.map((track) => {
			const artwork = track.artworkUrl
				? `<img class="c7-cp-item-thumb" src="${escapeHtml(track.artworkUrl)}" alt="" loading="lazy" />`
				: historyFallbackIcon();

			const playedMinAgo = track.playedAt
				? Math.max(1, Math.round((Date.now() / 1000 - track.playedAt) / 60))
				: 0;
			const timeText = playedMinAgo > 0 ? (isEn ? `${playedMinAgo}m ago` : `${playedMinAgo} mnt lalu`) : "";

			return `<div class="c7-cp-item" data-cp-item data-history-title="${encodeURIComponent(track.title)}" data-history-artist="${encodeURIComponent(track.artist)}" tabindex="-1" role="option">
				${artwork}
				<div class="c7-cp-item-content">
					<span class="c7-cp-item-title">${escapeHtml(track.title)}</span>
					<span class="c7-cp-item-subtitle">${escapeHtml(track.artist)}${timeText ? ` • ${timeText}` : ""}</span>
				</div>
				<div class="c7-cp-item-actions">
					${previewButton(track.title, track.artist, track.artworkUrl || "", isEn)}
					<span class="c7-cp-badge">${isEn ? "Radio Track" : "Siaran"}</span>
				</div>
			</div>`;
		})
		.join("");

	return `<div class="c7-cp-section">
		<div class="c7-cp-section-title">${isEn ? "Recently Played on Radio" : "Baru Saja Mengudara di Radio"}</div>
		${itemsHtml}
	</div>`;
}

export function renderActionsSection(actions: C7CommandAction[], isEn: boolean): string {
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
		<div class="c7-cp-section-title">${isEn ? "Commands & Actions" : "Aksi & Perintah"}</div>
		${itemsHtml}
	</div>`;
}

export interface C7SearchRenderModel {
	query: string;
	isEn: boolean;
	prefix: string;
	postResults: SearchResultItem[];
	pageResults: SearchResultItem[];
	matchedSongs: RequestableSong[];
	matchedHistory: HistorySong[];
	matchedActions: C7CommandAction[];
}

export function renderSearchResults(model: C7SearchRenderModel): string {
	const { query, isEn, prefix, postResults, pageResults, matchedSongs, matchedHistory, matchedActions } = model;

	let html = "";
	html += renderPostsSection(postResults, prefix, isEn);
	html += renderSongRequestsSection(matchedSongs, isEn);
	html += renderHistorySection(matchedHistory, isEn);
	html += renderPagesSection(pageResults, prefix, isEn);
	html += renderActionsSection(matchedActions, isEn);

	if (!html) {
		return renderEmptyState(isEn, query);
	}

	return html;
}
