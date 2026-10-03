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
			title: t.palette.actions[0].title,
			subtitle: t.palette.actions[0].subtitle,
			badge: t.palette.actions[0].badge,
		},
		{
			type: "nav",
			url: isEn ? "/en/submit" : "/kirim-tulisan",
			title: t.palette.actions[1].title,
			subtitle: t.palette.actions[1].subtitle,
			badge: t.palette.actions[1].badge,
		},
		{
			type: "nav",
			url: `${prefix}/category/berita`,
			title: t.palette.actions[2].title,
			subtitle: t.palette.actions[2].subtitle,
			badge: t.palette.actions[2].badge,
		},
		{
			type: "nav",
			url: `${prefix}/category/tech`,
			title: t.palette.actions[3].title,
			subtitle: t.palette.actions[3].subtitle,
			badge: t.palette.actions[3].badge,
		},
		{
			type: "nav",
			url: `${prefix}/category/game`,
			title: t.palette.actions[4].title,
			subtitle: t.palette.actions[4].subtitle,
			badge: t.palette.actions[4].badge,
		},
		{
			type: "nav",
			url: `${prefix}/category/musik`,
			title: t.palette.actions[5].title,
			subtitle: t.palette.actions[5].subtitle,
			badge: t.palette.actions[5].badge,
		},
		{
			type: "nav",
			url: `${prefix}/category/budaya`,
			title: t.palette.actions[6].title,
			subtitle: t.palette.actions[6].subtitle,
			badge: t.palette.actions[6].badge,
		},
		{
			type: "nav",
			url: `${prefix}/category/kesehatan`,
			title: t.palette.actions[7].title,
			subtitle: t.palette.actions[7].subtitle,
			badge: t.palette.actions[7].badge,
		},
		{
			type: "nav",
			url: `${prefix}/about-us`,
			title: t.palette.actions[8].title,
			subtitle: t.palette.actions[8].subtitle,
			badge: t.palette.actions[8].badge,
		},
		{
			type: "nav",
			url: `${prefix}/redaksi`,
			title: t.palette.actions[9].title,
			subtitle: t.palette.actions[9].subtitle,
			badge: t.palette.actions[9].badge,
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
