/**
 * Tujuhcahaya Feed Ingestion Engine
 *
 * Ingests live, authentic RSS & Atom news feeds across the 4 core editorial pillars:
 * - Tech (Ars Technica, Antara Tekno, The Verge)
 * - Game (PC Gamer, Polygon, IGN)
 * - Kesehatan (ScienceDaily Health, Antara Kesehatan)
 * - Musik (Pitchfork, NME, Antara Musik)
 *
 * Persists parsed candidates into scripts/inbox/candidates.json and tracks seen items
 * in scripts/inbox/seen-urls.json to prevent duplicate stories.
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execSync } from "node:child_process";

const SOURCES_CONFIG_FILE = path.resolve(process.cwd(), "scripts", "sources.json");

export function loadFeedSources() {
	if (fs.existsSync(SOURCES_CONFIG_FILE)) {
		try {
			const cfg = JSON.parse(fs.readFileSync(SOURCES_CONFIG_FILE, "utf-8"));
			return (cfg.sources || []).filter(s => s.enabled !== false);
		} catch (err) {
			console.warn("[Sources Config Warning] Gagal membaca sources.json, menggunakan fallback:", err.message);
		}
	}
	return [
		{ name: "Antara Tekno", category: "tech", url: "https://www.antaranews.com/rss/tekno.xml", lang: "id" },
		{ name: "PC Gamer", category: "game", url: "https://www.pcgamer.com/rss/", lang: "en" },
		{ name: "Pophariini", category: "musik", url: "https://pophariini.com/feed/", lang: "id" }
	];
}

const INBOX_DIR = path.resolve(process.cwd(), "scripts", "inbox");
const CANDIDATES_FILE = path.join(INBOX_DIR, "candidates.json");
const SEEN_URLS_FILE = path.join(INBOX_DIR, "seen-urls.json");

function ensureInbox() {
	if (!fs.existsSync(INBOX_DIR)) {
		fs.mkdirSync(INBOX_DIR, { recursive: true });
	}
}

function loadSeenUrls() {
	ensureInbox();
	if (fs.existsSync(SEEN_URLS_FILE)) {
		try {
			return new Set(JSON.parse(fs.readFileSync(SEEN_URLS_FILE, "utf-8")));
		} catch {
			return new Set();
		}
	}
	return new Set();
}

function saveSeenUrls(seenSet) {
	ensureInbox();
	const arr = Array.from(seenSet).slice(-2000); // retain last 2000 URLs
	fs.writeFileSync(SEEN_URLS_FILE, JSON.stringify(arr, null, 2), "utf-8");
}

function cleanHtmlText(text) {
	if (!text) return "";
	return text
		.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/gi, "$1")
		.replace(/<[^>]+>/g, " ")
		.replace(/&amp;/g, "&")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/\s+/g, " ")
		.trim();
}

function extractImageUrl(rawXml) {
	// 1. Check <enclosure url="..." type="image/..." />
	const encMatch = rawXml.match(/<enclosure[^>]+url=["']([^"']+)["'][^>]*>/i);
	if (encMatch && (encMatch[0].includes("image") || encMatch[1].match(/\.(jpg|jpeg|png|webp)/i))) {
		return encMatch[1];
	}

	// 2. Check <media:content url="..." />
	const mediaContent = rawXml.match(/<media:content[^>]+url=["']([^"']+)["'][^>]*>/i);
	if (mediaContent && mediaContent[1]) return mediaContent[1];

	// 3. Check <media:thumbnail url="..." />
	const mediaThumb = rawXml.match(/<media:thumbnail[^>]+url=["']([^"']+)["'][^>]*>/i);
	if (mediaThumb && mediaThumb[1]) return mediaThumb[1];

	// 4. Check <img src="..." /> inside description or content
	const imgMatch = rawXml.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
	if (imgMatch && imgMatch[1] && imgMatch[1].startsWith("http")) return imgMatch[1];

	return null;
}

export function resolveGoogleNewsImage(url) {
	if (!url || !url.includes("news.google.com")) return null;
	try {
		const scriptPath = path.resolve(process.cwd(), "scripts", "resolve-gnews.py");
		const cmd = `uv run --with googlenewsdecoder python "${scriptPath}" "${url}"`;
		const rawOut = execSync(cmd, { encoding: "utf-8", timeout: 8000, stdio: ["ignore", "pipe", "ignore"] });
		const parsed = JSON.parse(rawOut.trim());
		if (parsed.success && parsed.imageUrl) {
			return {
				imageUrl: parsed.imageUrl,
				decodedUrl: parsed.decodedUrl
			};
		}
		return null;
	} catch {
		return null;
	}
}

export function scrapeJatengGalleryImages(url) {
	if (!url || !url.includes("jatengprov.go.id")) return [];
	try {
		const cmd = `curl.exe -s -L --max-time 6 "${url}"`;
		const html = execSync(cmd, { encoding: "utf-8", maxBuffer: 10 * 1024 * 1024 });

		// Pattern: class="news-content-gallery ... href="..."
		const galleryRegex = /<a[^>]+class=["'][^"']*news-content-gallery__item[^"']*["'][^>]+href=["']([^"']+\.(?:jpg|jpeg|png|webp))["']/gi;
		const matches = Array.from(html.matchAll(galleryRegex)).map(m => m[1]);

		if (matches.length > 0) {
			return Array.from(new Set(matches));
		}

		// Fallback to single hero image: <img src="..." class="rounded-2xl" ...>
		const heroMatch = html.match(/<img[^>]+src=["'](https:\/\/jatengprov\.go\.id\/wp-content\/uploads\/[^\s"']+\.(?:jpg|jpeg|png|webp))["'][^>]*class=["'][^"']*rounded-2xl[^"']*["']/i)
			|| html.match(/<img[^>]+class=["'][^"']*rounded-2xl[^"']*["'][^>]+src=["'](https:\/\/jatengprov\.go\.id\/wp-content\/uploads\/[^\s"']+\.(?:jpg|jpeg|png|webp))["']/i);

		if (heroMatch && heroMatch[1]) {
			return [heroMatch[1]];
		}

		return [];
	} catch {
		return [];
	}
}

function resolveFallbackImage(source, title = "") {
	const t = title.toLowerCase();
	if (source.name.includes("Jateng") || t.includes("jateng") || t.includes("semarang") || t.includes("solo") || t.includes("pantura")) {
		return "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=1200&auto=format&fit=crop"; // Gedung bersejarah Jawa Tengah
	}
	if (t.includes("konser") || t.includes("festival") || t.includes("gigs") || t.includes("panggung") || t.includes("tur ")) {
		return "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop"; // Live konser & panggung musik
	}
	if (t.includes("award") || t.includes("penghargaan") || t.includes("pemenang") || t.includes("trofi")) {
		return "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop"; // Panggung penghargaan seni
	}
	if (t.includes("gaya hidup") || t.includes("anak muda") || t.includes("tren") || t.includes("nongkrong") || t.includes("kopi")) {
		return "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1200&auto=format&fit=crop"; // Tren urban lifestyle anak muda
	}
	if (source.category === "tech") {
		return "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop";
	}
	if (source.category === "game") {
		return "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop";
	}
	return "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop";
}

function parseFeedXml(xml, source) {
	const items = [];

	// 1. Try standard RSS <item> tags
	const itemMatches = xml.matchAll(/<item[\s\S]*?<\/item>/gi);
	for (const match of itemMatches) {
		const raw = match[0];
		const titleMatch = raw.match(/<title>([\s\S]*?)<\/title>/i);
		const linkMatch = raw.match(/<link>([\s\S]*?)<\/link>/i) || raw.match(/<feedburner:origLink>([\s\S]*?)<\/feedburner:origLink>/i);
		const pubDateMatch = raw.match(/<pubDate>([\s\S]*?)<\/pubDate>/i) || raw.match(/<dc:date>([\s\S]*?)<\/dc:date>/i);
		const descMatch = raw.match(/<description>([\s\S]*?)<\/description>/i) || raw.match(/<content:encoded>([\s\S]*?)<\/content:encoded>/i);

		let title = cleanHtmlText(titleMatch ? titleMatch[1] : "");
		const link = cleanHtmlText(linkMatch ? linkMatch[1] : "");
		const pubDate = cleanHtmlText(pubDateMatch ? pubDateMatch[1] : "");
		const snippet = cleanHtmlText(descMatch ? descMatch[1] : "").slice(0, 320);

		// Handle Google News <source> and strip trailing publisher suffix from title
		let itemSourceName = source.name;
		const sourceMatch = raw.match(/<source[^>]*>([\s\S]*?)<\/source>/i);
		if (sourceMatch && sourceMatch[1]) {
			const publisher = cleanHtmlText(sourceMatch[1]);
			if (publisher) {
				itemSourceName = `${source.name} [${publisher}]`;
				const suffixRegex = new RegExp(`\\s*-\\s*${publisher.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`, "i");
				title = title.replace(suffixRegex, "").trim();
			}
		}

		// Extract authentic image from RSS or Jatengprov gallery scrape
		let rawImage = extractImageUrl(raw);
		let galleryImages = [];

		if (!rawImage && link.includes("jatengprov.go.id")) {
			galleryImages = scrapeJatengGalleryImages(link);
			if (galleryImages.length > 0) {
				rawImage = galleryImages[0];
			}
		}

		const imageUrl = rawImage || resolveFallbackImage(source, title);
		const isOriginalImage = Boolean(rawImage);

		if (title && link) {
			items.push({
				id: crypto.createHash("md5").update(link).digest("hex").slice(0, 16),
				sourceName: itemSourceName,
				category: source.category,
				lang: source.lang,
				title,
				link,
				pubDate,
				snippet,
				imageUrl,
				galleryImages,
				isOriginalImage
			});
		}
	}

	// 2. Try Atom <entry> tags if no items found
	if (items.length === 0) {
		const entryMatches = xml.matchAll(/<entry[\s\S]*?<\/entry>/gi);
		for (const match of entryMatches) {
			const raw = match[0];
			const titleMatch = raw.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
			const linkMatch = raw.match(/<link[^>]+href=["']([^"']+)["']/i);
			const pubDateMatch = raw.match(/<updated>([\s\S]*?)<\/updated>/i) || raw.match(/<published>([\s\S]*?)<\/published>/i);
			const descMatch = raw.match(/<summary[^>]*>([\s\S]*?)<\/summary>/i) || raw.match(/<content[^>]*>([\s\S]*?)<\/content>/i);

			const title = cleanHtmlText(titleMatch ? titleMatch[1] : "");
			const link = linkMatch ? linkMatch[1].trim() : "";
			const pubDate = cleanHtmlText(pubDateMatch ? pubDateMatch[1] : "");
			const snippet = cleanHtmlText(descMatch ? descMatch[1] : "").slice(0, 320);

			const rawImage = extractImageUrl(raw);
			const imageUrl = rawImage || resolveFallbackImage(source, title);
			const isOriginalImage = Boolean(rawImage);

			if (title && link) {
				items.push({
					id: crypto.createHash("md5").update(link).digest("hex").slice(0, 16),
					sourceName: source.name,
					category: source.category,
					lang: source.lang,
					title,
					link,
					pubDate,
					snippet,
					imageUrl,
					isOriginalImage
				});
			}
		}
	}

	return items;
}

export async function fetchFeed(source, timeoutMs = 15000) {
	try {
		const controller = new AbortController();
		const timer = setTimeout(() => controller.abort(), timeoutMs);

		const res = await fetch(source.url, {
			headers: {
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) TujuhcahayaEditorialBot/1.0",
				"Accept": "application/rss+xml, application/xml, text/xml, */*"
			},
			signal: controller.signal
		});
		clearTimeout(timer);

		if (!res.ok) {
			console.warn(`[Feed Warning] ${source.name} returned HTTP ${res.status}`);
			return [];
		}

		const xml = await res.text();
		return parseFeedXml(xml, source);
	} catch (err) {
		console.warn(`[Feed Fetch Error] ${source.name}: ${err.message}`);
		return [];
	}
}

export async function ingestAllFeeds(options = {}) {
	const { limitPerCategory = 5 } = options;
	const seenUrls = loadSeenUrls();

	const feedSources = loadFeedSources();
	console.log(`🌐 Memulai Ingestion Feed dari ${feedSources.length} sumber berita aktif di sources.json...`);

	const fetchPromises = feedSources.map(source => fetchFeed(source));
	const results = await Promise.allSettled(fetchPromises);

	const allItems = [];
	for (const res of results) {
		if (res.status === "fulfilled" && Array.isArray(res.value)) {
			allItems.push(...res.value);
		}
	}

	console.log(`📥 Total item feed terunduh: ${allItems.length} artikel.`);

	// Group and select fresh candidates for our 3 core writers
	const categories = ["tech", "game", "musik"];
	const authorMap = {
		tech: { name: "Elang Elano", byline: "0100MUNS3DJPCA4539BDBEB12A" },
		game: { name: "Andoru Ray", byline: "0100MUNS3DJL68FA69B26FACE9" },
		musik: { name: "Margaretha Nina", byline: "0100MUNS3DJOA35D985DFFDBA0" }
	};
	const categorizedCandidates = {};

	for (const cat of categories) {
		const itemsInCat = allItems
			.filter(item => item.category === cat)
			// Filter out already seen URLs
			.filter(item => !seenUrls.has(item.link))
			// Deduplicate within the batch by URL
			.filter((item, index, self) => index === self.findIndex(t => t.link === item.link));

		// Balance candidates across different sources (max 3 per source) to prevent one feed dominating
		const balanced = [];
		const sourceCounts = {};
		for (const it of itemsInCat) {
			sourceCounts[it.sourceName] = (sourceCounts[it.sourceName] || 0);
			if (sourceCounts[it.sourceName] < 3) {
				balanced.push({
					...it,
					author: authorMap[cat]
				});
				sourceCounts[it.sourceName]++;
			}
			if (balanced.length >= 10) break;
		}

		// Resolve original images & URLs for candidates originating from Google News
		for (const cand of balanced) {
			if (cand.link.includes("news.google.com") && !cand.isOriginalImage) {
				const res = resolveGoogleNewsImage(cand.link);
				if (res && res.imageUrl) {
					cand.imageUrl = res.imageUrl;
					cand.originalArticleUrl = res.decodedUrl;
					cand.isOriginalImage = true;
				}
			}
		}

		categorizedCandidates[cat] = balanced;
	}

	const candidatesPayload = {
		updatedAt: new Date().toISOString(),
		totalCandidates: Object.values(categorizedCandidates).reduce((acc, list) => acc + list.length, 0),
		categories: categorizedCandidates
	};

	ensureInbox();
	fs.writeFileSync(CANDIDATES_FILE, JSON.stringify(candidatesPayload, null, 2), "utf-8");
	console.log(`💾 Kandidat kurasi disimpan ke: ${CANDIDATES_FILE}`);

	return candidatesPayload;
}

export function markAsSeen(url) {
	if (!url) return;
	const seenUrls = loadSeenUrls();
	seenUrls.add(url);
	saveSeenUrls(seenUrls);
}

// CLI runner
if (process.argv[1] && process.argv[1].endsWith("ingest-feeds.mjs")) {
	const args = process.argv.slice(2);
	const shouldPrint = args.includes("--print");
	const categoryFilter = args.find(a => a.startsWith("--category="))?.replace("--category=", "");

	ingestAllFeeds().then(data => {
		if (shouldPrint) {
			console.log("\n=======================================================");
			console.log("   DAFTAR KANDIDAT BERITA AKTUAL (TUJUHCAHAYA INBOX)   ");
			console.log("=======================================================\n");

			for (const [cat, list] of Object.entries(data.categories)) {
				if (categoryFilter && categoryFilter !== cat) continue;
				console.log(`\n📌 PILAR [${cat.toUpperCase()}] (${list.length} bahan):`);
				for (let i = 0; i < list.length; i++) {
					const item = list[i];
					console.log(`   ${i + 1}. [${item.sourceName}] ${item.title}`);
					console.log(`      🔗 ${item.link}`);
					console.log(`      📝 ${item.snippet.slice(0, 110)}...`);
				}
			}
		}
	}).catch(console.error);
}
