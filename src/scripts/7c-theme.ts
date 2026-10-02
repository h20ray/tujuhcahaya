/**
 * 7C Theme Controller (Light, Dark OLED & System Mode)
 *
 * Provides single-source-of-truth theme management, persistence in localStorage,
 * system preference detection, and seamless Astro View Transitions (<ClientRouter />) lifecycle support.
 */

export type C7ThemeSetting = "light" | "dark" | "system";
export type C7EffectiveTheme = "light" | "dark";
// Backward compatibility alias
export type C7Theme = C7EffectiveTheme;

declare global {
	interface Window {
		__c7ThemeInitialized?: boolean;
	}
}

export const C7_THEME_STORAGE_KEY = "theme";

export function getSystemPreference(): C7EffectiveTheme {
	if (typeof window === "undefined") return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function getSavedTheme(): C7ThemeSetting | null {
	if (typeof localStorage === "undefined") return null;
	try {
		const saved = localStorage.getItem(C7_THEME_STORAGE_KEY);
		if (saved === "light" || saved === "dark" || saved === "system") return saved;
		return null;
	} catch {
		return null;
	}
}

export function getThemeSetting(): C7ThemeSetting {
	return getSavedTheme() || "system";
}

export function getEffectiveTheme(setting?: C7ThemeSetting): C7EffectiveTheme {
	const currentSetting = setting || getThemeSetting();
	if (currentSetting === "light") return "light";
	if (currentSetting === "dark") return "dark";
	return getSystemPreference();
}

export function getCurrentTheme(): C7EffectiveTheme {
	return getEffectiveTheme();
}

/**
 * Apply theme attribute to target documentElement.
 * Can be applied to live document.documentElement or incoming e.newDocument.documentElement.
 */
export function applyThemeToElement(el: HTMLElement, theme: C7EffectiveTheme): void {
	if (theme === "dark") {
		el.setAttribute("data-theme", "dark");
	} else {
		el.removeAttribute("data-theme");
	}
}

export function syncThemeButtons(currentSetting?: C7ThemeSetting): void {
	if (typeof document === "undefined") return;
	const activeSetting = currentSetting || getThemeSetting();
	const effective = getEffectiveTheme(activeSetting);
	const isDark = effective === "dark";
	const isEn = document.documentElement.lang === "en";

	// 1. Sync segmented theme buttons (if present)
	const themeBtns = document.querySelectorAll(".c7-theme-btn, .theme-btn");
	themeBtns.forEach((btn) => {
		const btnTheme = btn.getAttribute("data-theme");
		const isActive = btnTheme === activeSetting;
		btn.classList.toggle("active", isActive);
		btn.setAttribute("aria-pressed", String(isActive));
	});

	// 2. Sync single animated toggle buttons (.c7-theme-toggle)
	const toggles = document.querySelectorAll(".c7-theme-toggle, [data-c7-theme-toggle]");
	toggles.forEach((btn) => {
		btn.setAttribute("aria-pressed", String(isDark));
		btn.setAttribute(
			"aria-label",
			isDark
				? (isEn ? "Switch to light mode" : "Beralih ke mode terang")
				: (isEn ? "Switch to dark mode" : "Beralih ke mode gelap"),
		);
		btn.setAttribute(
			"title",
			isDark
				? (isEn ? "Switch to light mode" : "Beralih ke mode terang")
				: (isEn ? "Switch to dark mode" : "Beralih ke mode gelap"),
		);
	});
}

export function applyTheme(setting?: C7ThemeSetting): C7EffectiveTheme {
	const currentSetting = setting || getThemeSetting();
	const effective = getEffectiveTheme(currentSetting);
	if (typeof document !== "undefined") {
		applyThemeToElement(document.documentElement, effective);
		syncThemeButtons(currentSetting);
	}
	return effective;
}

export function setThemeSetting(setting: C7ThemeSetting): void {
	try {
		if (setting === "system") {
			localStorage.removeItem(C7_THEME_STORAGE_KEY);
		} else {
			localStorage.setItem(C7_THEME_STORAGE_KEY, setting);
		}
	} catch {}
	applyTheme(setting);
}

// Backward compatibility helper
export function setTheme(theme: C7ThemeSetting): void {
	setThemeSetting(theme);
}

// Backward compatibility helper
export function toggleTheme(): C7EffectiveTheme {
	const current = getEffectiveTheme();
	const next: C7ThemeSetting = current === "dark" ? "light" : "dark";
	setThemeSetting(next);
	return getEffectiveTheme(next);
}

/**
 * Global lifecycle attachment for Astro View Transitions (<ClientRouter />).
 * Ensures theme state survives across page swaps, BFCache, and system changes.
 */
export function initThemeLifecycle(): void {
	if (typeof window === "undefined") return;
	if (window.__c7ThemeInitialized) return;
	window.__c7ThemeInitialized = true;

	// 1. Initial application on bundle execution
	applyTheme();

	// 2. CRITICAL: Preserve data-theme attribute on incoming document BEFORE Astro swaps the DOM
	document.addEventListener("astro:before-swap", (e) => {
		const activeTheme = getEffectiveTheme();
		const swapEvent = e as Event & { newDocument?: Document };
		if (swapEvent.newDocument?.documentElement) {
			applyThemeToElement(swapEvent.newDocument.documentElement, activeTheme);
		}
	});

	// 3. Re-sync button active states after DOM is swapped
	document.addEventListener("astro:page-load", () => {
		applyTheme();
	});

	// 4. Handle BFCache restorations
	window.addEventListener("pageshow", () => {
		applyTheme();
	});

	// 5. Respond to OS color scheme changes in real-time (when in system mode)
	try {
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		media.addEventListener("change", () => {
			if (getThemeSetting() === "system") {
				applyTheme("system");
			}
		});
	} catch {}

	// 6. Global delegated click handler for single-icon toggle & segmented buttons
	document.addEventListener(
		"click",
		(e) => {
			const target = e.target as HTMLElement | null;
			if (!target) return;

			// Handle single-icon animated theme toggle (.c7-theme-toggle)
			const toggleBtn = target.closest(".c7-theme-toggle, [data-c7-theme-toggle]");
			if (toggleBtn) {
				e.preventDefault();
				e.stopPropagation();
				toggleTheme();
				return;
			}

			// Handle segmented theme buttons (if present)
			const btn = target.closest(".c7-theme-btn, .theme-btn");
			if (!btn) return;

			e.preventDefault();
			e.stopPropagation();
			const targetTheme = (btn.getAttribute("data-theme") || "system") as C7ThemeSetting;
			setThemeSetting(targetTheme);
		},
		{ capture: true },
	);
}

// Auto-initialize when loaded
if (typeof document !== "undefined") {
	initThemeLifecycle();
}
