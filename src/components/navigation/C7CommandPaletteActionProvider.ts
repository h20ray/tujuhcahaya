/**
 * C7CommandPaletteActionProvider — Default quick actions and navigational items.
 *
 * Kept separate from the orchestrator so UI text, routes, and handler logic
 * can evolve independently from the custom element lifecycle.
 */

import { getCurrentTheme, setTheme } from "../../scripts/7c-theme";
import type { C7CommandAction, C7CommandPaletteActionContext } from "./C7CommandPaletteTypes";

export function buildDefaultActions(ctx: C7CommandPaletteActionContext): C7CommandAction[] {
	const { prefix, isEn, idPath, enPath, close, showToast } = ctx;

	return [
		{
			type: "action",
			id: "theme-toggle",
			title: isEn ? "Toggle Dark / Light Theme" : "Beralih Tema Gelap / Terang",
			subtitle:
				isEn
					? "Switch visual appearance between OLED dark & crisp light"
					: "Ganti tampilan antara mode gelap pekat OLED dan terang",
			badge: isEn ? "System Action" : "Aksi Sistem",
			handler: () => {
				const current = getCurrentTheme();
				setTheme(current === "dark" ? "light" : "dark");
				showToast(isEn ? "Theme switched successfully" : "Mode tema berhasil dialihkan.");
			},
		},
		{
			type: "action",
			id: "radio-toggle",
			title: isEn ? "Play / Pause 7C Radio Stream" : "Putar / Jeda Siaran Radio Tujuhcahaya",
			subtitle: isEn ? "Toggle live 24/7 audio broadcast" : "Kendalikan pemutaran siaran langsung 24/7",
			badge: isEn ? "Radio Control" : "Kontrol Radio",
			handler: () => {
				const dockPlayBtn = document.querySelector(".c7-dock-play-btn") as HTMLButtonElement | null;
				if (dockPlayBtn) {
					dockPlayBtn.click();
					showToast(isEn ? "Radio playback toggled" : "Status siaran radio dialihkan.");
				} else {
					window.dispatchEvent(new KeyboardEvent("keydown", { code: "Space" }));
				}
			},
		},
		{
			type: "action",
			id: "lyrics-open",
			title: isEn ? "Open Broadcast Lyrics Drawer" : "Buka Panel Lirik Siaran Lagu",
			subtitle:
				isEn
					? "View synchronized karaoke lyrics for current song"
					: "Tampilkan lirik sinkron karaoke untuk lagu yang mengudara",
			badge: isEn ? "Lyrics Drawer" : "Lirik Lagu",
			handler: () => {
				close();
				const lyricsBtn = document.querySelector(".c7-dock-lyrics-btn") as HTMLButtonElement | null;
				if (lyricsBtn) lyricsBtn.click();
			},
		},
		{
			type: "nav",
			url: `${prefix}/posts`,
			title: isEn ? "Complete Archive" : "Arsip Lengkap",
			subtitle: isEn ? "Explore investigative journalism archive" : "Jelajahi seluruh basis data investigasi dan liputan redaksi",
			badge: isEn ? "Archive" : "Arsip",
		},
		{
			type: "nav",
			url: `${prefix}/kirim-tulisan`,
			title: isEn ? "Submit Op-Ed / Community Dispatch" : "Kirim Naskah Opini & Gagasan",
			subtitle: isEn ? "Publish your essay or field report on Tujuhcahaya" : "Kirim tulisan, resensi, atau pandangan kritis Anda ke redaksi",
			badge: isEn ? "Dispatch" : "Opini",
		},
		{
			type: "nav",
			url: `${prefix}/category/berita`,
			title: isEn ? "Rubrik: News & Investigative" : "Rubrik: Berita & Investigasi",
			subtitle: isEn ? "Hard news, politics, and current affairs" : "Kanal berita terkini, investigasi, dan peristiwa utama",
			badge: isEn ? "News" : "Berita",
		},
		{
			type: "nav",
			url: `${prefix}/category/tech`,
			title: isEn ? "Rubrik: Tech & Future" : "Rubrik: Tech & Masa Depan",
			subtitle: isEn ? "AI, developer tools, hardware, and privacy" : "Kanal kecerdasan buatan, gadget, software, dan teknologi",
			badge: "Tech",
		},
		{
			type: "nav",
			url: `${prefix}/category/game`,
			title: isEn ? "Rubrik: Gaming & Culture" : "Rubrik: Game & Industri",
			subtitle: isEn ? "Esports, reviews, game design, and gaming scene" : "Kanal esports, ulasan permainan, dan industri kreatif gaming",
			badge: "Game",
		},
		{
			type: "nav",
			url: `${prefix}/category/musik`,
			title: isEn ? "Rubrik: Music & Soundwaves" : "Rubrik: Musik & Nada",
			subtitle: isEn ? "Curated records, scene dispatches, reviews" : "Kanal rilisan musik baru, ulasan album, dan profil musisi",
			badge: isEn ? "Music" : "Musik",
		},
		{
			type: "nav",
			url: `${prefix}/category/budaya`,
			title: isEn ? "Rubrik: Culture & Heritage" : "Rubrik: Budaya & Seni",
			subtitle: isEn ? "Heritage, urban culture, essays, and philosophy" : "Kanal tradisi, kultur urban, esai budaya, dan sastra",
			badge: isEn ? "Culture" : "Budaya",
		},
		{
			type: "nav",
			url: `${prefix}/category/kesehatan`,
			title: isEn ? "Rubrik: Health & Wellness" : "Rubrik: Kesehatan & Sains",
			subtitle: isEn ? "Medical science, mental health, and wellness" : "Kanal riset medis, kesehatan mental, dan pola hidup",
			badge: isEn ? "Health" : "Kesehatan",
		},
		{
			type: "nav",
			url: `${prefix}/about-us`,
			title: isEn ? "About PT Tujuh Cahaya Media House" : "Tentang Kami (Profil Tujuhcahaya)",
			subtitle: isEn ? "Mission, editorial independence, and corporate structure" : "Misi, independensi redaksi, dan badan hukum pengelola",
			badge: isEn ? "Page" : "Profil",
		},
		{
			type: "nav",
			url: `${prefix}/redaksi`,
			title: isEn ? "Editorial Masthead & Journalists" : "Susunan Redaksi & Dewan Jurnalis",
			subtitle: isEn ? "Authentic editorial board and contributing writers" : "Daftar pengurus dewan redaksi dan jurnalis autentik 7C",
			badge: isEn ? "Masthead" : "Redaksi",
		},
		{
			type: "nav",
			url: isEn ? idPath : enPath,
			title: isEn ? "Switch Language to Bahasa Indonesia" : "Ganti Bahasa ke English (EN)",
			subtitle: isEn ? "Beralih membaca situs ke edisi Bahasa Indonesia" : "Switch reading experience to international English edition",
			badge: isEn ? "Bahasa ID" : "English EN",
		},
	];
}
