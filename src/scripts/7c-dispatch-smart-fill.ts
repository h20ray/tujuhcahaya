/**
 * 7C Dispatch Smart Fill Controller
 *
 * Dynamically measures the hero split pane height and automatically fills
 * the dispatch table so that post rows occupy 100% of the available height
 * without any awkward voids or half-clipped rows.
 */

export function initHeroMobileTabs(): void {
	if (typeof window === "undefined" || typeof document === "undefined") return;

	const tabsContainer = document.querySelector(".c7-hero-mobile-tabs");
	const heroSplit = document.querySelector(".hero-split") as HTMLElement | null;
	if (!tabsContainer || !heroSplit) return;

	const buttons = tabsContainer.querySelectorAll<HTMLButtonElement>(".c7-hero-tab-btn");
	buttons.forEach((btn) => {
		btn.addEventListener("click", () => {
			const target = btn.getAttribute("data-hero-tab");
			if (!target) return;

			buttons.forEach((b) => {
				const isCurrent = b === btn;
				b.classList.toggle("is-active", isCurrent);
				b.setAttribute("aria-selected", isCurrent ? "true" : "false");
			});

			heroSplit.setAttribute("data-active-tab", target);

			if (target === "dispatch") {
				requestAnimationFrame(() => {
					smartFillDispatch();
				});
			}
		});
	});
}

export function smartFillDispatch(): void {
	if (typeof window === "undefined" || typeof document === "undefined") return;

	const leftPane = document.querySelector(".hero-left-pane") as HTMLElement | null;
	const table = document.querySelector(".dispatch-table") as HTMLElement | null;
	const header = document.querySelector(".dispatch-header") as HTMLElement | null;
	const footer = document.querySelector(".dispatch-footer") as HTMLElement | null;

	if (!leftPane || !table) return;

	const rows = Array.from(table.querySelectorAll(".dispatch-row")) as HTMLElement[];
	if (rows.length === 0) return;

	// Measure available vertical space in left pane
	const paneHeight = leftPane.clientHeight;
	const headerHeight = header ? header.offsetHeight : 44;
	const footerHeight = footer ? footer.offsetHeight : 40;
	const availableHeight = paneHeight - headerHeight - footerHeight;

	// Target comfortable row height: ~40px - 44px
	const isMobile = window.innerWidth <= 992;
	const targetRowHeight = isMobile ? 42 : 40;
	let maxRows = availableHeight > 80 ? Math.floor(availableHeight / targetRowHeight) : 8;

	// Boundary guards: at least 5 on mobile, 8 on desktop, capped by actual fetched rows
	const minLimit = isMobile ? 5 : 8;
	maxRows = Math.max(minLimit, Math.min(maxRows, rows.length));

	// If pane is tall enough to fit more rows at minimum height (~36px)
	if (availableHeight / maxRows > 46 && maxRows < rows.length) {
		const nextCandidate = Math.floor(availableHeight / 37);
		maxRows = Math.min(nextCandidate, rows.length);
	}

	// Apply visibility
	rows.forEach((row, index) => {
		if (index < maxRows) {
			row.classList.add("is-visible");
			row.style.display = "";
			if (index === maxRows - 1) {
				row.classList.add("is-last-visible");
			} else {
				row.classList.remove("is-last-visible");
			}
		} else {
			row.classList.remove("is-visible");
			row.classList.remove("is-last-visible");
			row.style.display = "none";
		}
	});

	table.classList.add("smart-filled");
}

let observer: ResizeObserver | null = null;

export function initDispatchSmartFill(): void {
	if (typeof window === "undefined" || typeof document === "undefined") return;

	// Disconnect any existing observer
	if (observer) {
		observer.disconnect();
		observer = null;
	}

	const leftPane = document.querySelector(".hero-left-pane");
	const rightPane = document.querySelector(".hero-right-pane");
	const heroSplit = document.querySelector(".hero-split");

	if (!leftPane) return;

	// Initialize mobile segmented tabs
	initHeroMobileTabs();

	// Initial calculation
	smartFillDispatch();

	// Observe container or window changes
	if (typeof ResizeObserver !== "undefined") {
		observer = new ResizeObserver(() => {
			requestAnimationFrame(smartFillDispatch);
		});
		if (heroSplit) observer.observe(heroSplit);
		if (rightPane) observer.observe(rightPane);
		observer.observe(leftPane);
	}

	// Window resize fallback (remove first to avoid duplicate listeners on Astro View Transitions)
	window.removeEventListener("resize", smartFillDispatch);
	window.addEventListener("resize", smartFillDispatch, { passive: true });
}

// Lifecycle hooks for initial load and Astro View Transitions
if (typeof document !== "undefined") {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", initDispatchSmartFill);
	} else {
		initDispatchSmartFill();
	}

	document.addEventListener("astro:page-load", initDispatchSmartFill);
}
