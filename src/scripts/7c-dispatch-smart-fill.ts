/**
 * 7C Dispatch Smart Fill Controller
 *
 * Dynamically measures the hero split pane height and automatically fills
 * the dispatch table so that post rows occupy 100% of the available height
 * without any awkward voids or half-clipped rows.
 */

export function smartFillDispatch(): void {
	if (typeof window === "undefined" || typeof document === "undefined") return;

	const leftPane = document.querySelector(".hero-left-pane") as HTMLElement | null;
	const table = document.querySelector(".dispatch-table") as HTMLElement | null;
	const header = document.querySelector(".dispatch-header") as HTMLElement | null;
	const footer = document.querySelector(".dispatch-footer") as HTMLElement | null;

	if (!leftPane || !table) return;

	const rows = Array.from(table.querySelectorAll(".dispatch-row")) as HTMLElement[];
	if (rows.length === 0) return;

	// On mobile/tablet where columns are stacked (< 992px), show a clean fixed subset
	if (window.innerWidth <= 992) {
		table.classList.remove("smart-filled");
		const mobileLimit = Math.min(10, rows.length);
		rows.forEach((row, i) => {
			row.classList.remove("is-visible");
			if (i < mobileLimit) {
				row.style.display = "";
				if (i === mobileLimit - 1) {
					row.classList.add("is-last-visible");
				} else {
					row.classList.remove("is-last-visible");
				}
			} else {
				row.classList.remove("is-last-visible");
				row.style.display = "none";
			}
		});
		return;
	}

	// In desktop two-column mode: measure available vertical space
	const paneHeight = leftPane.clientHeight;
	const headerHeight = header ? header.offsetHeight : 48;
	const footerHeight = footer ? footer.offsetHeight : 44;
	const availableHeight = paneHeight - headerHeight - footerHeight;

	// Target comfortable row height: ~38px - 44px
	const targetRowHeight = 40;
	let maxRows = Math.floor(availableHeight / targetRowHeight);

	// Boundary guards: at least 8 rows, capped by actual fetched rows
	maxRows = Math.max(8, Math.min(maxRows, rows.length));

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
