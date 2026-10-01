/**
 * 7C Theme Controller (Light & Dark OLED Mode)
 *
 * Provides single-source-of-truth theme management, persistence in localStorage,
 * system preference detection, and seamless Astro View Transitions (<ClientRouter />) lifecycle support.
 */

export type C7Theme = "light" | "dark";

export const C7_THEME_STORAGE_KEY = "theme";

export function getSystemPreference(): C7Theme {
	if (typeof window === "undefined") return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function getSavedTheme(): C7Theme | null {
	if (typeof localStorage === "undefined") return null;
	try {
		const saved = localStorage.getItem(C7_THEME_STORAGE_KEY);
		if (saved === "light" || saved === "dark") return saved;
		return null;
	} catch {
		return null;
	}
}

export function getCurrentTheme(): C7Theme {
	const saved = getSavedTheme();
	if (saved) return saved;
	return getSystemPreference();
}

/**
 * Apply theme attribute to target documentElement.
 * Can be applied to live document.documentElement or incoming e.newDocument.documentElement.
 */
export function applyThemeToElement(el: HTMLElement, theme: C7Theme): void {
	if (theme === "dark") {
		el.setAttribute("data-theme", "dark");
	} else {
		el.removeAttribute("data-theme");
	}
}

export function applyTheme(theme?: C7Theme): C7Theme {
	const resolved = theme || getCurrentTheme();
	if (typeof document !== "undefined") {
		applyThemeToElement(document.documentElement, resolved);
		syncThemeAccessibility(resolved);
	}
	return resolved;
}

export function setTheme(theme: C7Theme): void {
	try {
		localStorage.setItem(C7_THEME_STORAGE_KEY, theme);
	} catch {}
	applyTheme(theme);
}

export function toggleTheme(): C7Theme {
	const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
	const next: C7Theme = current === "dark" ? "light" : "dark";
	setTheme(next);
	return next;
}

export function syncThemeAccessibility(theme?: C7Theme): void {
	if (typeof document === "undefined") return;
	const isDark = (theme || getCurrentTheme()) === "dark";
	const isEn = window.location.pathname.startsWith("/en");

	const toggleBtns = document.querySelectorAll(".c7-theme-toggle");
	toggleBtns.forEach((btn) => {
		btn.setAttribute("aria-pressed", isDark ? "true" : "false");
		if (isEn) {
			btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
			btn.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
		} else {
			btn.setAttribute("aria-label", isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap");
			btn.setAttribute("title", isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap");
		}
	});
}

/**
 * Global lifecycle attachment for Astro View Transitions (<ClientRouter />).
 * Ensures theme state survives across page swaps, BFCache, and system changes.
 */
export function initThemeLifecycle(): void {
	if (typeof window === "undefined") return;
	if ((window as any).__c7ThemeInitialized) return;
	(window as any).__c7ThemeInitialized = true;

	// 1. Initial application on bundle execution
	applyTheme();

	// 2. CRITICAL: Preserve data-theme attribute on the incoming document BEFORE Astro swaps the DOM
	document.addEventListener("astro:before-swap", (e: any) => {
		const activeTheme = getCurrentTheme();
		if (e.newDocument && e.newDocument.documentElement) {
			applyThemeToElement(e.newDocument.documentElement, activeTheme);
		}
	});

	// 3. Re-sync accessibility attributes after DOM is swapped
	document.addEventListener("astro:page-load", () => {
		applyTheme();
	});

	// 4. Handle BFCache restorations
	window.addEventListener("pageshow", () => {
		applyTheme();
	});

	// 5. Respond to OS color scheme changes in real-time (only if user hasn't explicitly set a preference)
	try {
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		media.addEventListener("change", () => {
			if (!getSavedTheme()) {
				applyTheme();
			}
		});
	} catch {}

	// 6. Global delegated click handler (attached once to document, zero listener stacking)
	document.addEventListener(
		"click",
		(e) => {
			const target = e.target as HTMLElement | null;
			if (!target) return;
			const btn = target.closest(".c7-theme-toggle");
			if (!btn) return;

			e.preventDefault();
			e.stopPropagation();
			toggleTheme();
		},
		{ capture: true },
	);
}

// Auto-initialize when loaded
if (typeof document !== "undefined") {
	initThemeLifecycle();
}
