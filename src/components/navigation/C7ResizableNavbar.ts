	const SafeHTMLElement = typeof HTMLElement !== "undefined" ? HTMLElement : (class {} as typeof HTMLElement);

	class C7ResizableNavbarElement extends SafeHTMLElement {
		#abort: AbortController | null = null;
		#megaCloseTimer: ReturnType<typeof setTimeout> | null = null;

		connectedCallback() {
			this.#abort = new AbortController();
			const { signal } = this.#abort;

			const toggle = this.querySelector<HTMLButtonElement>(".c7-rn-mobile-toggle");
			toggle?.addEventListener(
				"click",
				() => {
					this.#setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
				},
				{ signal },
			);

			// Command Palette trigger buttons
			const paletteTriggers = this.querySelectorAll<HTMLButtonElement>("[data-palette-trigger]");
			paletteTriggers.forEach((btn) => {
				btn.addEventListener(
					"click",
					(e) => {
						e.preventDefault();
						window.dispatchEvent(new CustomEvent("c7:open-command-palette"));
					},
					{ signal },
				);
			});

			// Mega menu dynamic position & intentional hover grace period
			const megaWrapper = this.querySelector<HTMLElement>(".c7-rn-mega-wrapper");
			const megaTrigger = this.querySelector<HTMLAnchorElement>(".c7-rn-mega-trigger");
			const megaDropdown = this.querySelector<HTMLElement>(".c7-rn-mega-dropdown");

			if (megaWrapper && megaTrigger && megaDropdown) {
				const handleEnter = () => this.#openMegaMenu();
				const handleLeave = () => this.#closeMegaMenu(false);

				megaWrapper.addEventListener("mouseenter", handleEnter, { signal });
				megaWrapper.addEventListener("mouseleave", handleLeave, { signal });
				megaDropdown.addEventListener("mouseenter", handleEnter, { signal });
				megaDropdown.addEventListener("mouseleave", handleLeave, { signal });

				// Toggle on click (for touch or direct mouse click)
				megaTrigger.addEventListener(
					"click",
					(e) => {
						e.preventDefault();
						const isOpen = megaWrapper.hasAttribute("data-open");
						if (isOpen) {
							this.#closeMegaMenu(true);
						} else {
							this.#openMegaMenu();
						}
					},
					{ signal },
				);

				// Close on click outside
				document.addEventListener(
					"click",
					(e) => {
						if (!megaWrapper.contains(e.target as Node)) {
							this.#closeMegaMenu(true);
						}
					},
					{ signal },
				);

				// Recalculate dynamic position on window resize
				window.addEventListener("resize", this.#updateMegaMenuPosition, { passive: true, signal });
			}

			// Close on Escape key
			this.addEventListener(
				"keydown",
				(event) => {
					if (event.key === "Escape") {
						if (toggle?.getAttribute("aria-expanded") === "true") {
							this.#setMenuOpen(false);
							toggle.focus();
						}
						this.#closeMegaMenu(true);
					}
				},
				{ signal },
			);

			// Close mobile menu if resized to desktop breakpoint
			const desktopMedia = window.matchMedia("(min-width: 1024px)");
			desktopMedia.addEventListener(
				"change",
				(event) => {
					if (event.matches) {
						this.#setMenuOpen(false);
						this.#closeMegaMenu(true);
					}
				},
				{ signal },
			);

			// Robust multi-source scroll listener (window, document, and body containers)
			const scrollHandler = this.#onScroll;
			window.addEventListener("scroll", scrollHandler, { passive: true, signal });
			document.addEventListener("scroll", scrollHandler, { passive: true, capture: true, signal });
			document.body?.addEventListener("scroll", scrollHandler, { passive: true, signal });
			document.addEventListener("astro:page-load", this.#onScroll, { signal });
			document.addEventListener("astro:after-swap", this.#onScroll, { signal });

			this.#onScroll();
		}

		disconnectedCallback() {
			if (this.#megaCloseTimer) {
				clearTimeout(this.#megaCloseTimer);
				this.#megaCloseTimer = null;
			}
			this.#abort?.abort();
			this.#abort = null;
		}

		#updateMegaMenuPosition = () => {
			const megaWrapper = this.querySelector<HTMLElement>(".c7-rn-mega-wrapper");
			const megaDropdown = this.querySelector<HTMLElement>(".c7-rn-mega-dropdown");
			if (!megaWrapper || !megaDropdown) return;

			const wrapperRect = megaWrapper.getBoundingClientRect();
			const dropdownWidth = megaDropdown.offsetWidth || 608;
			const viewportWidth = window.innerWidth;

			let desiredViewportX = wrapperRect.left;
			if (desiredViewportX + dropdownWidth > viewportWidth - 16) {
				desiredViewportX = viewportWidth - dropdownWidth - 16;
			}
			if (desiredViewportX < 16) {
				desiredViewportX = 16;
			}

			const localLeft = desiredViewportX - wrapperRect.left;
			megaDropdown.style.setProperty("--c7-mega-left", `${Math.round(localLeft)}px`);
		};

		#openMegaMenu = () => {
			const megaWrapper = this.querySelector<HTMLElement>(".c7-rn-mega-wrapper");
			const megaTrigger = this.querySelector<HTMLAnchorElement>(".c7-rn-mega-trigger");
			if (!megaWrapper || !megaTrigger) return;

			if (this.#megaCloseTimer) {
				clearTimeout(this.#megaCloseTimer);
				this.#megaCloseTimer = null;
			}

			this.#updateMegaMenuPosition();
			megaWrapper.setAttribute("data-open", "");
			megaTrigger.setAttribute("aria-expanded", "true");
		};

		#closeMegaMenu = (immediate = false) => {
			const megaWrapper = this.querySelector<HTMLElement>(".c7-rn-mega-wrapper");
			const megaTrigger = this.querySelector<HTMLAnchorElement>(".c7-rn-mega-trigger");
			if (!megaWrapper || !megaTrigger) return;

			if (immediate) {
				if (this.#megaCloseTimer) {
					clearTimeout(this.#megaCloseTimer);
					this.#megaCloseTimer = null;
				}
				megaWrapper.removeAttribute("data-open");
				megaTrigger.setAttribute("aria-expanded", "false");
				return;
			}

			if (this.#megaCloseTimer) clearTimeout(this.#megaCloseTimer);
			this.#megaCloseTimer = setTimeout(() => {
				megaWrapper.removeAttribute("data-open");
				megaTrigger.setAttribute("aria-expanded", "false");
			}, 250);
		};

		#getScrollY = (): number => {
			return (
				window.scrollY ||
				document.documentElement.scrollTop ||
				document.body?.scrollTop ||
				0
			);
		};

		#onScroll = () => {
			const scrollY = this.#getScrollY();
			// Instant & smooth: morphs right as scrolling starts (24px)
			if (scrollY > 24) {
				this.setAttribute("data-scrolled", "");
			} else {
				this.removeAttribute("data-scrolled");
			}

			// Keep mega menu position dynamically aligned as navbar shape/position morphs
			const megaWrapper = this.querySelector<HTMLElement>(".c7-rn-mega-wrapper");
			if (megaWrapper?.hasAttribute("data-open")) {
				this.#updateMegaMenuPosition();
			}
		};

		#setMenuOpen(open: boolean) {
			const toggle = this.querySelector<HTMLButtonElement>(".c7-rn-mobile-toggle");
			const menu = this.querySelector<HTMLElement>(".c7-rn-mobile-menu");
			toggle?.setAttribute("aria-expanded", String(open));
			if (open) {
				menu?.setAttribute("data-open", "");
				menu?.removeAttribute("aria-hidden");
			} else {
				menu?.removeAttribute("data-open");
				menu?.setAttribute("aria-hidden", "true");
			}
		}
	}

	if (typeof customElements !== "undefined") {
		if (!customElements.get("c7-resizable-navbar")) {
			customElements.define("c7-resizable-navbar", C7ResizableNavbarElement);
		}

		class NularResizableNavbarElement extends C7ResizableNavbarElement {}
		if (!customElements.get("nular-resizable-navbar")) {
			customElements.define("nular-resizable-navbar", NularResizableNavbarElement);
		}
	}
