/**
 * C7CommandPaletteActionProvider — Default quick actions and navigational items.
 *
 * Kept separate from the orchestrator so UI text, routes, and handler logic
 * can evolve independently from the custom element lifecycle.
 */

import { getCurrentTheme, setTheme } from "../../scripts/7c-theme";
import type { C7CommandAction, C7CommandPaletteActionContext } from "./C7CommandPaletteTypes";
import { use7cTranslation, type Locale } from "../../i18n/utils";

export function buildDefaultActions(ctx: C7CommandPaletteActionContext): C7CommandAction[] {
	const { prefix, isEn, idPath, enPath, close, showToast } = ctx;
	const locale: Locale = isEn ? "en" : "id";
	const { t } = use7cTranslation(locale);

	return [
		{
			type: "action",
			id: "theme-toggle",
			title: t.palette.theme_toggle_title,
			subtitle: t.palette.theme_toggle_sub,
			badge: t.palette.theme_toggle_badge,
			handler: () => {
				const current = getCurrentTheme();
				setTheme(current === "dark" ? "light" : "dark");
				showToast(t.palette.theme_toggle_toast);
			},
		},
		{
			type: "action",
			id: "radio-toggle",
			title: t.palette.radio_toggle_title,
			subtitle: t.palette.radio_toggle_sub,
			badge: t.palette.radio_toggle_badge,
			handler: () => {
				const dockPlayBtn = document.querySelector(".c7-dock-play-btn") as HTMLButtonElement | null;
				if (dockPlayBtn) {
					dockPlayBtn.click();
					showToast(t.palette.radio_toggle_toast);
				} else {
					window.dispatchEvent(new KeyboardEvent("keydown", { code: "Space" }));
				}
			},
		},
		{
			type: "action",
			id: "lyrics-open",
			title: t.palette.lyrics_open_title,
			subtitle: t.palette.lyrics_open_sub,
			badge: t.palette.lyrics_open_badge,
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
			url: isEn ? "/en/submit" : "/kirim-tulisan",
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
			title: t.palette.lang_toggle_title,
			subtitle: t.palette.lang_toggle_sub,
			badge: t.palette.lang_toggle_badge,
		},
	];
}
