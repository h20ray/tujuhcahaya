	import { getCurrentTheme, setTheme } from "../../scripts/7c-theme";

	interface SearchResultItem {
		collection: "posts" | "pages";
		id: string;
		slug: string;
		title: string;
		snippet?: string;
		locale?: string;
	}

	declare global {
		interface Window {
			c7AudioPreview?: { toggle: (track: { title: string; artist: string; artworkUrl?: string }) => void };
		}
	}

	interface RequestableSong {
		requestId: string;
		songId?: string;
		title: string;
		artist: string;
		album?: string;
		artworkUrl?: string | null;
	}

	interface C7CommandAction {
		type: "action" | "nav";
		id?: string;
		title: string;
		subtitle?: string;
		badge?: string;
		url?: string;
		handler?: () => void;
	}

	interface HistorySong {
		title: string;
		artist: string;
		album?: string;
		artworkUrl?: string;
		playedAt: number;
		duration?: number;
	}

	class C7CommandPaletteElement extends HTMLElement {
		#isOpen = false;
		#activeTab = "all";
		#query = "";
		#debounceTimer: ReturnType<typeof setTimeout> | null = null;
		#abortController: AbortController | null = null;
		#cachedRequestableSongs: RequestableSong[] | null = null;
		#cachedHistorySongs: HistorySong[] | null = null;
		#activeIndex = 0;
		#localPreviewAudio: HTMLAudioElement | null = null;
		#localPreviewKey: string | null = null;
		#previousActiveElement: HTMLElement | null = null;

		connectedCallback() {
			this.#setupListeners();
		}

		#setupListeners() {
			// Global Keyboard Shortcut: Cmd+K / Ctrl+K or /
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

			// Custom Event listener for external triggers (Navbar search icon)
			window.addEventListener("c7:open-command-palette", () => {
				this.open();
			});

			// Broadcast listener for Apple Music / iTunes preview state changes
			window.addEventListener("c7-preview-state-change", (e: Event) => {
				const state = (e as CustomEvent).detail;
				if (state) {
					this.#syncPreviewButtonsUI(state.activeKey, state.isPlaying, state.isLoading);
					if (state.error && state.activeKey) {
						this.#showToast(state.error);
					}
				}
			});

			// Backdrop click to close
			const backdrop = this.querySelector("[data-cp-backdrop]");
			backdrop?.addEventListener("click", () => this.close());

			// Close badge click
			const closeBadge = this.querySelector("[data-cp-close]");
			closeBadge?.addEventListener("click", () => this.close());

			// Clear button click
			const clearBtn = this.querySelector("[data-cp-clear]") as HTMLButtonElement | null;
			clearBtn?.addEventListener("click", () => {
				const input = this.querySelector("[data-cp-input]") as HTMLInputElement | null;
				if (input) {
					input.value = "";
					this.#onSearchInput("");
					input.focus();
				}
			});

			// Input Search Handler
			const input = this.querySelector("[data-cp-input]") as HTMLInputElement | null;
			input?.addEventListener("input", () => {
				const val = input.value;
				if (clearBtn) clearBtn.hidden = val.length === 0;
				this.#onSearchInput(val);
			});

			// Tabs click handler
			const tabs = this.querySelectorAll<HTMLButtonElement>("[data-cp-tab]");
			tabs.forEach((tab) => {
				tab.addEventListener("click", () => {
					tabs.forEach((t) => {
						t.classList.remove("active");
						t.setAttribute("aria-selected", "false");
					});
					tab.classList.add("active");
					tab.setAttribute("aria-selected", "true");
					this.#activeTab = tab.getAttribute("data-cp-tab") || "all";
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

			// Preload radio song catalogs in background
			this.#preloadRadioData();

			// Initial render
			this.#renderResults();
		}

		public close() {
			this.#isOpen = false;
			this.removeAttribute("data-open");
			document.body.style.overflow = "";
			this.#hideToast();

			this.#stopLocalPreview();
			window.dispatchEvent(new CustomEvent("c7-stop-preview"));

			// 1. Defuse active focus within the palette before hiding from assistive tech
			if (this.contains(document.activeElement)) {
				(document.activeElement as HTMLElement)?.blur();
			}

			// 2. Restore focus to outside trigger (search button or previous active element)
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

			// 3. Mark inert and aria-hidden safely now that focus is guaranteed outside
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

		async #preloadRadioData() {
			if (!this.#cachedRequestableSongs) {
				try {
					const res = await fetch("/_emdash/api/plugins/tujuhcahaya-radio/song-request");
					const json = await res.json();
					const songs = (json?.data?.songs || json?.songs) as RequestableSong[] | undefined;
					if (Array.isArray(songs)) {
						this.#cachedRequestableSongs = songs;
					}
				} catch (_) {}
			}

			if (!this.#cachedHistorySongs) {
				try {
					const res = await fetch("/_emdash/api/plugins/tujuhcahaya-radio/now-playing");
					const json = await res.json();
					const history = (json?.data?.data?.history || json?.history) as HistorySong[] | undefined;
					if (Array.isArray(history)) {
						this.#cachedHistorySongs = history;
					}
				} catch (_) {}
			}
		}

		#getDefaultActions(): C7CommandAction[] {
			const prefix = this.getAttribute("data-prefix") || "";
			const isEn = this.getAttribute("data-locale") === "en";
			const idPath = this.getAttribute("data-id-path") || "/";
			const enPath = this.getAttribute("data-en-path") || "/en";

			return [
				{
					type: "action" as const,
					id: "theme-toggle",
					title: isEn ? "Toggle Dark / Light Theme" : "Beralih Tema Gelap / Terang",
					subtitle: isEn ? "Switch visual appearance between OLED dark & crisp light" : "Ganti tampilan antara mode gelap pekat OLED dan terang",
					badge: isEn ? "System Action" : "Aksi Sistem",
					handler: () => {
						const current = getCurrentTheme();
						setTheme(current === "dark" ? "light" : "dark");
						this.#showToast(isEn ? "Theme switched successfully" : "Mode tema berhasil dialihkan.");
					},
				},
				{
					type: "action" as const,
					id: "radio-toggle",
					title: isEn ? "Play / Pause 7C Radio Stream" : "Putar / Jeda Siaran Radio Tujuhcahaya",
					subtitle: isEn ? "Toggle live 24/7 audio broadcast" : "Kendalikan pemutaran siaran langsung 24/7",
					badge: isEn ? "Radio Control" : "Kontrol Radio",
					handler: () => {
						const dockPlayBtn = document.querySelector(".c7-dock-play-btn") as HTMLButtonElement | null;
						if (dockPlayBtn) {
							dockPlayBtn.click();
							this.#showToast(isEn ? "Radio playback toggled" : "Status siaran radio dialihkan.");
						} else {
							window.dispatchEvent(new KeyboardEvent("keydown", { code: "Space" }));
						}
					},
				},
				{
					type: "action" as const,
					id: "lyrics-open",
					title: isEn ? "Open Broadcast Lyrics Drawer" : "Buka Panel Lirik Siaran Lagu",
					subtitle: isEn ? "View synchronized karaoke lyrics for current song" : "Tampilkan lirik sinkron karaoke untuk lagu yang mengudara",
					badge: isEn ? "Lyrics Drawer" : "Lirik Lagu",
					handler: () => {
						this.close();
						const lyricsBtn = document.querySelector(".c7-dock-lyrics-btn") as HTMLButtonElement | null;
						if (lyricsBtn) lyricsBtn.click();
					},
				},
				{
					type: "nav" as const,
					url: `${prefix}/posts`,
					title: isEn ? "Complete Archive" : "Arsip Lengkap",
					subtitle: isEn ? "Explore investigative journalism archive" : "Jelajahi seluruh basis data investigasi dan liputan redaksi",
					badge: isEn ? "Archive" : "Arsip",
				},
				{
					type: "nav" as const,
					url: `${prefix}/kirim-tulisan`,
					title: isEn ? "Submit Op-Ed / Community Dispatch" : "Kirim Naskah Opini & Gagasan",
					subtitle: isEn ? "Publish your essay or field report on Tujuhcahaya" : "Kirim tulisan, resensi, atau pandangan kritis Anda ke redaksi",
					badge: isEn ? "Dispatch" : "Opini",
				},
				{
					type: "nav" as const,
					url: `${prefix}/category/berita`,
					title: isEn ? "Rubrik: News & Investigative" : "Rubrik: Berita & Investigasi",
					subtitle: isEn ? "Hard news, politics, and current affairs" : "Kanal berita terkini, investigasi, dan peristiwa utama",
					badge: isEn ? "News" : "Berita",
				},
				{
					type: "nav" as const,
					url: `${prefix}/category/tech`,
					title: isEn ? "Rubrik: Tech & Future" : "Rubrik: Tech & Masa Depan",
					subtitle: isEn ? "AI, developer tools, hardware, and privacy" : "Kanal kecerdasan buatan, gadget, software, dan teknologi",
					badge: "Tech",
				},
				{
					type: "nav" as const,
					url: `${prefix}/category/game`,
					title: isEn ? "Rubrik: Gaming & Culture" : "Rubrik: Game & Industri",
					subtitle: isEn ? "Esports, reviews, game design, and gaming scene" : "Kanal esports, ulasan permainan, dan industri kreatif gaming",
					badge: "Game",
				},
				{
					type: "nav" as const,
					url: `${prefix}/category/musik`,
					title: isEn ? "Rubrik: Music & Soundwaves" : "Rubrik: Musik & Nada",
					subtitle: isEn ? "Curated records, scene dispatches, reviews" : "Kanal rilisan musik baru, ulasan album, dan profil musisi",
					badge: isEn ? "Music" : "Musik",
				},
				{
					type: "nav" as const,
					url: `${prefix}/category/budaya`,
					title: isEn ? "Rubrik: Culture & Heritage" : "Rubrik: Budaya & Seni",
					subtitle: isEn ? "Heritage, urban culture, essays, and philosophy" : "Kanal tradisi, kultur urban, esai budaya, dan sastra",
					badge: isEn ? "Culture" : "Budaya",
				},
				{
					type: "nav" as const,
					url: `${prefix}/category/kesehatan`,
					title: isEn ? "Rubrik: Health & Wellness" : "Rubrik: Kesehatan & Sains",
					subtitle: isEn ? "Medical science, mental health, and wellness" : "Kanal riset medis, kesehatan mental, dan pola hidup",
					badge: isEn ? "Health" : "Kesehatan",
				},
				{
					type: "nav" as const,
					url: `${prefix}/about-us`,
					title: isEn ? "About PT Tujuh Cahaya Media House" : "Tentang Kami (Profil Tujuhcahaya)",
					subtitle: isEn ? "Mission, editorial independence, and corporate structure" : "Misi, independensi redaksi, dan badan hukum pengelola",
					badge: isEn ? "Page" : "Profil",
				},
				{
					type: "nav" as const,
					url: `${prefix}/redaksi`,
					title: isEn ? "Editorial Masthead & Journalists" : "Susunan Redaksi & Dewan Jurnalis",
					subtitle: isEn ? "Authentic editorial board and contributing writers" : "Daftar pengurus dewan redaksi dan jurnalis autentik 7C",
					badge: isEn ? "Masthead" : "Redaksi",
				},
				{
					type: "nav" as const,
					url: isEn ? idPath : enPath,
					title: isEn ? "Switch Language to Bahasa Indonesia" : "Ganti Bahasa ke English (EN)",
					subtitle: isEn ? "Beralih membaca situs ke edisi Bahasa Indonesia" : "Switch reading experience to international English edition",
					badge: isEn ? "Bahasa ID" : "English EN",
				},
			];
		}

		async #renderResults() {
			const container = this.querySelector("[data-cp-results]");
			if (!container) return;

			const q = this.#query.toLowerCase();
			const activeTab = this.#activeTab;
			const isEn = this.getAttribute("data-locale") === "en";
			const prefix = this.getAttribute("data-prefix") || "";

			// Abort any ongoing fetch
			this.#abortController?.abort();
			this.#abortController = new AbortController();

			// 1. If Empty Query: Render Actions & Destinations
			if (!q) {
				const defaultActions = this.#getDefaultActions();
				const filteredActions = activeTab === "all" || activeTab === "actions"
					? defaultActions
					: [];

				let html = "";
				if (filteredActions.length > 0) {
					html += `<div class="c7-cp-section">
						<div class="c7-cp-section-title">${isEn ? "Quick Actions & Navigation" : "Aksi Cepat & Navigasi Utama"}</div>`;
					filteredActions.forEach((item) => {
						const urlAttr = item.url ? `data-url="${item.url}"` : "";
						const actionAttr = item.id ? `data-action="${item.id}"` : "";
						html += `
							<div class="c7-cp-item" data-cp-item ${urlAttr} ${actionAttr} tabindex="-1" role="option">
								<span class="c7-cp-item-icon">
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
										<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
									</svg>
								</span>
								<div class="c7-cp-item-content">
									<span class="c7-cp-item-title">${item.title}</span>
									<span class="c7-cp-item-subtitle">${item.subtitle}</span>
								</div>
								<span class="c7-cp-badge ${item.type === "action" ? "action" : ""}">${item.badge}</span>
							</div>`;
					});
					html += `</div>`;
				} else {
					html = `<div class="c7-cp-empty">
						<span>${isEn ? "Type to search content or songs..." : "Ketik kata kunci untuk mencari konten atau lagu..."}</span>
					</div>`;
				}

				container.innerHTML = html;
				this.#bindItemClicks();
				this.#setActiveIndex(0);
				return;
			}

			// 2. Filtered Search Mode
			container.innerHTML = `<div class="c7-cp-loading"><span>${isEn ? "Searching..." : "Mencari..."}</span></div>`;

			// A. Local Quick Actions Search
			const matchedActions = this.#getDefaultActions().filter((a) =>
				a.title.toLowerCase().includes(q) || (a.subtitle?.toLowerCase().includes(q) ?? false)
			);

			// B. Radio Song Requests Search (In-memory filter)
			let matchedSongs: RequestableSong[] = [];
			if (this.#cachedRequestableSongs && (activeTab === "all" || activeTab === "request")) {
				matchedSongs = this.#cachedRequestableSongs.filter((s) =>
					s.title.toLowerCase().includes(q) ||
					s.artist.toLowerCase().includes(q) ||
					(s.album && s.album.toLowerCase().includes(q))
				).slice(0, 8);
			}

			// C. Radio Song History Search
			let matchedHistory: HistorySong[] = [];
			if (this.#cachedHistorySongs && (activeTab === "all" || activeTab === "history")) {
				matchedHistory = this.#cachedHistorySongs.filter((h) =>
					h.title.toLowerCase().includes(q) ||
					h.artist.toLowerCase().includes(q) ||
					(h.album && h.album.toLowerCase().includes(q))
				).slice(0, 6);
			}

			// D. EmDash Posts & Pages Search (Live network API)
			let searchItems: SearchResultItem[] = [];
			if (activeTab === "all" || activeTab === "posts" || activeTab === "pages") {
				try {
					const collections = activeTab === "posts" ? "posts" : activeTab === "pages" ? "pages" : "posts,pages";
					const res = await fetch(`/_emdash/api/search?q=${encodeURIComponent(q)}&collections=${collections}&limit=8`, {
						signal: this.#abortController.signal,
					});
					const json = await res.json();
					if (json?.data?.items && Array.isArray(json.data.items)) {
						searchItems = json.data.items;
					}
				} catch (_) {}
			}

			// Render HTML Sections (Zero arrow icons)
			let html = "";
			let hasResults = false;

			// Section 1: Posts (Liputan)
			const postResults = searchItems.filter((i) => i.collection === "posts");
			if (postResults.length > 0 && (activeTab === "all" || activeTab === "posts")) {
				hasResults = true;
				html += `<div class="c7-cp-section">
					<div class="c7-cp-section-title">${isEn ? "Stories & News" : "Liputan & Berita"}</div>`;
				postResults.forEach((item) => {
					const url = `${prefix}/${item.slug}`;
					html += `
						<div class="c7-cp-item" data-cp-item data-url="${url}" tabindex="-1" role="option">
							<span class="c7-cp-item-icon">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
									<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
								</svg>
							</span>
							<div class="c7-cp-item-content">
								<span class="c7-cp-item-title">${item.title}</span>
								<span class="c7-cp-item-subtitle">${item.snippet || url}</span>
							</div>
							<span class="c7-cp-badge">${isEn ? "Story" : "Liputan"}</span>
						</div>`;
				});
				html += `</div>`;
			}

			// Section 2: Song Requests (Request Lagu Radio)
			if (matchedSongs.length > 0 && (activeTab === "all" || activeTab === "request")) {
				hasResults = true;
				html += `<div class="c7-cp-section">
					<div class="c7-cp-section-title">${isEn ? "Radio Song Request Catalog" : "Katalog Permintaan Lagu Radio"}</div>`;
				matchedSongs.forEach((song) => {
					const artwork = song.artworkUrl
						? `<img class="c7-cp-item-thumb" src="${song.artworkUrl}" alt="" loading="lazy" />`
						: `<span class="c7-cp-item-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></span>`;

					html += `
						<div class="c7-cp-item" data-cp-item data-request-id="${song.requestId}" data-song-title="${encodeURIComponent(song.title)}" data-song-artist="${encodeURIComponent(song.artist)}" tabindex="-1" role="option">
							${artwork}
							<div class="c7-cp-item-content">
								<span class="c7-cp-item-title">${song.title}</span>
								<span class="c7-cp-item-subtitle">${song.artist}${song.album ? ` • ${song.album}` : ""}</span>
							</div>
							<div class="c7-cp-item-actions">
								<button
									type="button"
									class="c7-cp-preview-play-btn"
									data-cp-preview-btn
									data-title="${encodeURIComponent(song.title)}"
									data-artist="${encodeURIComponent(song.artist)}"
									data-artwork="${encodeURIComponent(song.artworkUrl || "")}"
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
								</button>
								<span class="c7-cp-badge request-btn">${isEn ? "Request" : "Request Lagu"}</span>
							</div>
						</div>`;
				});
				html += `</div>`;
			}

			// Section 3: Song History (Riwayat Putar Radio)
			if (matchedHistory.length > 0 && (activeTab === "all" || activeTab === "history")) {
				hasResults = true;
				html += `<div class="c7-cp-section">
					<div class="c7-cp-section-title">${isEn ? "Recently Played on Radio" : "Baru Saja Mengudara di Radio"}</div>`;
				matchedHistory.forEach((track) => {
					const artwork = track.artworkUrl
						? `<img class="c7-cp-item-thumb" src="${track.artworkUrl}" alt="" loading="lazy" />`
						: `<span class="c7-cp-item-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></span>`;

					const playedMinAgo = track.playedAt ? Math.max(1, Math.round((Date.now() / 1000 - track.playedAt) / 60)) : 0;
					const timeText = playedMinAgo > 0 ? (isEn ? `${playedMinAgo}m ago` : `${playedMinAgo} mnt lalu`) : "";

					html += `
						<div class="c7-cp-item" data-cp-item data-history-title="${encodeURIComponent(track.title)}" data-history-artist="${encodeURIComponent(track.artist)}" tabindex="-1" role="option">
							${artwork}
							<div class="c7-cp-item-content">
								<span class="c7-cp-item-title">${track.title}</span>
								<span class="c7-cp-item-subtitle">${track.artist}${timeText ? ` • ${timeText}` : ""}</span>
							</div>
							<div class="c7-cp-item-actions">
								<button
									type="button"
									class="c7-cp-preview-play-btn"
									data-cp-preview-btn
									data-title="${encodeURIComponent(track.title)}"
									data-artist="${encodeURIComponent(track.artist)}"
									data-artwork="${encodeURIComponent(track.artworkUrl || "")}"
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
								</button>
								<span class="c7-cp-badge">${isEn ? "Radio Track" : "Siaran"}</span>
							</div>
						</div>`;
				});
				html += `</div>`;
			}

			// Section 4: Static Pages
			const pageResults = searchItems.filter((i) => i.collection === "pages");
			if (pageResults.length > 0 && (activeTab === "all" || activeTab === "pages")) {
				hasResults = true;
				html += `<div class="c7-cp-section">
					<div class="c7-cp-section-title">${isEn ? "Pages & Information" : "Halaman & Informasi"}</div>`;
				pageResults.forEach((item) => {
					const url = `${prefix}/${item.slug}`;
					html += `
						<div class="c7-cp-item" data-cp-item data-url="${url}" tabindex="-1" role="option">
							<span class="c7-cp-item-icon">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
									<line x1="9" y1="9" x2="15" y2="9"></line>
									<line x1="9" y1="13" x2="15" y2="13"></line>
								</svg>
							</span>
							<div class="c7-cp-item-content">
								<span class="c7-cp-item-title">${item.title}</span>
								<span class="c7-cp-item-subtitle">${item.snippet || url}</span>
							</div>
							<span class="c7-cp-badge">${isEn ? "Page" : "Halaman"}</span>
						</div>`;
				});
				html += `</div>`;
			}

			// Section 5: Matching Actions
			if (matchedActions.length > 0 && (activeTab === "all" || activeTab === "actions")) {
				hasResults = true;
				html += `<div class="c7-cp-section">
					<div class="c7-cp-section-title">${isEn ? "Commands & Actions" : "Aksi & Perintah"}</div>`;
				matchedActions.forEach((item) => {
					const urlAttr = item.url ? `data-url="${item.url}"` : "";
					const actionAttr = item.id ? `data-action="${item.id}"` : "";
					html += `
						<div class="c7-cp-item" data-cp-item ${urlAttr} ${actionAttr} tabindex="-1" role="option">
							<span class="c7-cp-item-icon">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
								</svg>
							</span>
							<div class="c7-cp-item-content">
								<span class="c7-cp-item-title">${item.title}</span>
								<span class="c7-cp-item-subtitle">${item.subtitle}</span>
							</div>
							<span class="c7-cp-badge ${item.type === "action" ? "action" : ""}">${item.badge}</span>
						</div>`;
				});
				html += `</div>`;
			}

			if (!hasResults) {
				html = `<div class="c7-cp-empty">
					<span>${isEn ? `No results found for "${q}"` : `Tidak ada hasil untuk "${q}"`}</span>
					<p>${isEn ? "Try searching for another topic, artist, or system command" : "Coba kata kunci topik berita, musisi radio, atau perintah lain"}</p>
				</div>`;
			}

			container.innerHTML = html;
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

			// Apple Music / iTunes preview buttons
			const previewBtns = this.querySelectorAll<HTMLButtonElement>("[data-cp-preview-btn]");
			previewBtns.forEach((btn) => {
				btn.addEventListener("click", (e) => {
					e.stopPropagation();
					const title = decodeURIComponent(btn.getAttribute("data-title") || "");
					const artist = decodeURIComponent(btn.getAttribute("data-artist") || "");
					const artwork = decodeURIComponent(btn.getAttribute("data-artwork") || "");
					this.#togglePreviewTrack({ title, artist, artworkUrl: artwork }, btn);
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
			// A. Radio Song Request submission
			const requestId = item.getAttribute("data-request-id");
			if (requestId) {
				const title = decodeURIComponent(item.getAttribute("data-song-title") || "");
				const artist = decodeURIComponent(item.getAttribute("data-song-artist") || "");
				await this.#submitSongRequest(requestId, title, artist);
				return;
			}

			// B. Radio Song History selection (Open lyrics drawer or preview)
			const historyTitle = item.getAttribute("data-history-title");
			if (historyTitle) {
				this.close();
				const lyricsBtn = document.querySelector(".c7-dock-lyrics-btn") as HTMLButtonElement | null;
				if (lyricsBtn) lyricsBtn.click();
				return;
			}

			// C. System Action Execution
			const actionId = item.getAttribute("data-action");
			if (actionId) {
				const action = this.#getDefaultActions().find((a) => a.id === actionId);
				if (action && typeof action.handler === "function") {
					action.handler();
				}
				return;
			}

			// D. Navigation Link
			const url = item.getAttribute("data-url");
			if (url) {
				this.close();
				window.location.href = url;
			}
		}

		async #submitSongRequest(requestId: string, title: string, artist: string) {
			const isEn = this.getAttribute("data-locale") === "en";
			this.#showToast(isEn ? `Sending request for "${title}"...` : `Mengirim permintaan lagu "${title}"...`);

			try {
				const res = await fetch("/_emdash/api/plugins/tujuhcahaya-radio/song-request", {
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
					// Save pending request to localStorage for player dock tracking
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

					this.#showToast(
						isEn
							? `Request for "${title}" sent to broadcast queue!`
							: `Permintaan lagu "${title}" berhasil masuk ke antrean siaran Tujuhcahaya Radio!`,
						false
					);
				} else {
					this.#showToast(
						data?.message || (isEn ? "Failed to submit request" : "Gagal mengirim permintaan lagu"),
						true
					);
				}
			} catch (_) {
				this.#showToast(
					isEn ? "Network error submitting song request" : "Terjadi kesalahan jaringan saat mengirim permintaan lagu",
					true
				);
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

		#togglePreviewTrack = async (
			track: { title: string; artist: string; artworkUrl?: string },
			btn: HTMLButtonElement,
		) => {
			const isPlaying = btn.classList.contains("is-playing");
			const isLoading = btn.classList.contains("is-loading");

			if (isPlaying || isLoading) {
				window.dispatchEvent(new CustomEvent("c7-stop-preview"));
				this.#stopLocalPreview();
				return;
			}

			// Optimistic button loading state
			btn.classList.add("is-loading");
			btn.classList.remove("is-playing");

			// If global c7AudioPreview instance is available from radio player island
			if (window.c7AudioPreview) {
				window.c7AudioPreview.toggle(track);
				return;
			}

			// Broadcast custom event for radio player plugin
			window.dispatchEvent(new CustomEvent("c7-toggle-preview", { detail: track }));

			// Standalone preview fallback
			this.#playLocalPreview(track);
		};

		#stopLocalPreview() {
			if (this.#localPreviewAudio) {
				this.#localPreviewAudio.pause();
				this.#localPreviewAudio.removeAttribute("src");
				this.#localPreviewAudio = null;
			}
			this.#localPreviewKey = null;
			window.dispatchEvent(new CustomEvent("c7-radio-unduck", { detail: { source: "cp-preview" } }));
			this.#syncPreviewButtonsUI(null, false, false);
		}

		async #playLocalPreview(track: { title: string; artist: string; artworkUrl?: string }) {
			const key = `${track.artist.toLowerCase().trim()}:::${track.title.toLowerCase().trim()}`;
			this.#localPreviewKey = key;

			try {
				const url = `/_emdash/api/plugins/tujuhcahaya-radio/track-preview?title=${encodeURIComponent(track.title)}&artist=${encodeURIComponent(track.artist)}`;
				const res = await fetch(url, { signal: AbortSignal.timeout(4500) });
				let previewUrl: string | null = null;
				if (res.ok) {
					const raw = await res.json();
					let payload = raw;
					while (payload && typeof payload === "object" && payload.data && typeof payload.data === "object" && !Array.isArray(payload.data)) {
						payload = payload.data;
					}
					previewUrl = payload?.previewUrl || raw?.data?.previewUrl || raw?.previewUrl || null;
				}

				if (!previewUrl) {
					const itunesRes = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(`${track.title} ${track.artist}`)}&entity=song&limit=1`);
					if (itunesRes.ok) {
						const itunesData = await itunesRes.json();
						previewUrl = itunesData?.results?.[0]?.previewUrl || null;
					}
				}

				if (!previewUrl) {
					this.#syncPreviewButtonsUI(key, false, false);
					this.#showToast(this.getAttribute("data-locale") === "en" ? "Preview not available on Apple Music" : "Pratinjau tidak tersedia di Apple Music");
					return;
				}

				if (this.#localPreviewKey !== key) return;

				if (!this.#localPreviewAudio) {
					this.#localPreviewAudio = new Audio();
				}
				this.#localPreviewAudio.src = previewUrl;
				this.#localPreviewAudio.onended = () => {
					this.#stopLocalPreview();
				};
				this.#localPreviewAudio.onerror = () => {
					this.#stopLocalPreview();
					this.#showToast(this.getAttribute("data-locale") === "en" ? "Failed to play audio preview" : "Gagal memutar pratinjau audio");
				};

				window.dispatchEvent(new CustomEvent("c7-radio-duck", { detail: { source: "cp-preview" } }));
				await this.#localPreviewAudio.play();
				this.#syncPreviewButtonsUI(key, true, false);
			} catch (_) {
				this.#stopLocalPreview();
			}
		}

		#syncPreviewButtonsUI(activeKey: string | null, isPlaying: boolean, isLoading: boolean) {
			const btns = this.querySelectorAll<HTMLButtonElement>("[data-cp-preview-btn]");
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
	}

	if (!customElements.get("c7-command-palette")) {
		customElements.define("c7-command-palette", C7CommandPaletteElement);
	}
