/**
 * 7C Bespoke RSS & Sitemap Generation Engine
 *
 * Provides high-performance, W3C-valid XML feeds and indexed sitemaps
 * for 16,745 articles, taxonomies, and static editorial pages.
 */

import sqlite3 from "node:sqlite";
import duplicateRedirects from "../data/duplicate-redirects.json";
import { c7PortableToHtml } from "./7c-portable-html";

const DUPLICATE_SLUGS = new Set(Object.keys(duplicateRedirects));

function escapeXml(unsafe: string | null | undefined): string {
	if (!unsafe) return "";
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

function getDb(): sqlite3.DatabaseSync {
	return new sqlite3.DatabaseSync("data.db");
}

function rssImage(raw: string | null): { url: string; type: string } | null {
	let url = "";
	try {
		const img = raw ? JSON.parse(raw) : null;
		url = (typeof img === "string" ? img : img?.url || img?.src) || "";
	} catch {
		url = raw || "";
	}
	if (!/^https?:\/\//.test(url)) return null;
	const ext = url.split("?")[0].split(".").pop()?.toLowerCase();
	const type = ext === "png" ? "image/png" : ext === "webp" ? "image/webp" : ext === "gif" ? "image/gif" : "image/jpeg";
	return { url, type };
}

/**
 * Generate standard RSS 2.0 feed for the latest 50 articles
 */
export function generate7cRssFeed(siteUrl: string = "https://www.tujuhcahaya.com"): string {
	const db = getDb();
	const base = siteUrl.replace(/\/$/, "");

	try {
		const posts = db.prepare(`
			SELECT p.title, p.slug, p.excerpt, p.published_at, p.updated_at,
			       p.featured_image, p.content,
			       b.display_name as author_name,
			       (SELECT GROUP_CONCAT(t.label, '|') FROM content_taxonomies ct
			         JOIN taxonomies t ON t.id = ct.taxonomy_id AND t.name = 'category'
			        WHERE ct.entry_id = p.id AND ct.collection = 'posts') AS categories
			FROM ec_posts p
			LEFT JOIN _emdash_bylines b ON p.primary_byline_id = b.translation_group AND b.locale = 'id'
			WHERE p.status = 'published' AND p.published_at IS NOT NULL
			ORDER BY p.published_at DESC
			LIMIT 50;
		`).all() as Array<{
			title: string;
			slug: string;
			excerpt: string | null;
			published_at: string;
			updated_at: string;
			author_name: string | null;
			featured_image: string | null;
			content: string | null;
			categories: string | null;
		}>;

		const lastBuildDate = posts[0]?.published_at
			? new Date(posts[0].published_at).toUTCString()
			: new Date().toUTCString();

		const itemsXml = posts
			.map((p) => {
				const postUrl = `${base}/${p.slug}`;
				const pubDate = new Date(p.published_at).toUTCString();
				const author = p.author_name || "Redaksi Tujuhcahaya";
				const desc = escapeXml(p.excerpt || p.title);
				const image = rssImage(p.featured_image);
				const cats = (p.categories || "").split("|").filter(Boolean)
					.map((c) => `\n      <category>${escapeXml(c)}</category>`).join("");
				const enclosure = image
					? `\n      <enclosure url="${escapeXml(image.url)}" length="0" type="${image.type}" />` +
						`\n      <media:content url="${escapeXml(image.url)}" medium="image" />`
					: "";
				// Text inside is HTML-escaped, so "]]>" can never appear and close the CDATA early.
				const body = c7PortableToHtml(p.content, base);
				const encoded = body ? `\n      <content:encoded><![CDATA[${body}]]></content:encoded>` : "";
				return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <dc:creator xmlns:dc="http://purl.org/dc/elements/1.1/">${escapeXml(author)}</dc:creator>
      <description>${desc}</description>${cats}${enclosure}${encoded}
    </item>`;
			})
			.join("\n");

		return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Tujuhcahaya — Media Independen Game, Teknologi &amp; Musik</title>
    <link>${base}</link>
    <description>Liputan mendalam, perspektif segar kultur pop, teknologi, musik, dan warta independen.</description>
    <language>id-ID</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${base}/rss.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`;
	} finally {
		db.close();
	}
}

/**
 * Generate Master Sitemap Index XML referencing chunked sub-sitemaps
 */
export function generate7cSitemapIndex(siteUrl: string = "https://www.tujuhcahaya.com"): string {
	const base = siteUrl.replace(/\/$/, "");
	const nowIso = new Date().toISOString();

	return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${base}/sitemap-pages.xml</loc>
    <lastmod>${nowIso}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${base}/sitemap-taxonomies.xml</loc>
    <lastmod>${nowIso}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${base}/sitemap-posts-1.xml</loc>
    <lastmod>${nowIso}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${base}/sitemap-posts-2.xml</loc>
    <lastmod>${nowIso}</lastmod>
  </sitemap>
</sitemapindex>`;
}

/**
 * Generate Sitemap for Core Editorial & Static Pages
 */
export function generate7cPagesSitemap(siteUrl: string = "https://www.tujuhcahaya.com"): string {
	const db = getDb();
	const base = siteUrl.replace(/\/$/, "");
	const nowIso = new Date().toISOString();

	try {
		const staticRoutes = [
			{ path: "/", priority: "1.0", changefreq: "hourly" },
			{ path: "/posts", priority: "0.9", changefreq: "hourly" },
			{ path: "/live", priority: "0.9", changefreq: "hourly" },
			{ path: "/kirim-tulisan", priority: "0.8", changefreq: "monthly" },
		];

		// Exclude internal/stale slugs, group by slug for unique URLs
		const pages = db.prepare(`
			SELECT slug, MAX(updated_at) AS updated_at
			FROM ec_pages
			WHERE status = 'published'
			  AND slug NOT IN ('shop', 'cart', 'checkout', 'my-account', 'tujuhcahaya', 'homepage', 'about', 'live')
			GROUP BY slug
			ORDER BY slug ASC;
		`).all() as Array<{ slug: string; updated_at: string | null }>;

		const urls = staticRoutes.map((r) => `  <url>
    <loc>${base}${r.path}</loc>
    <lastmod>${nowIso}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`);

		for (const p of pages) {
			const lastmod = p.updated_at ? new Date(p.updated_at).toISOString() : nowIso;
			urls.push(`  <url>
    <loc>${base}/${p.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`);
		}

		return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
	} finally {
		db.close();
	}
}

/**
 * Generate Sitemap for Taxonomies (Categories and Tags)
 */
export function generate7cTaxonomiesSitemap(siteUrl: string = "https://www.tujuhcahaya.com"): string {
	const db = getDb();
	const base = siteUrl.replace(/\/$/, "");
	const nowIso = new Date().toISOString();

	try {
		const categories = db.prepare(`
			SELECT slug FROM taxonomies WHERE name = 'category' AND locale = 'id' ORDER BY slug ASC;
		`).all() as Array<{ slug: string }>;

		const urls: string[] = [];

		for (const c of categories) {
			urls.push(`  <url>
    <loc>${base}/category/${c.slug}</loc>
    <lastmod>${nowIso}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`);
		}

		return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
	} finally {
		db.close();
	}
}

/**
 * Generate Chunked Posts Sitemap (e.g. 1-10000, 10001+)
 */
export function generate7cPostsSitemap(
	siteUrl: string = "https://www.tujuhcahaya.com",
	offset: number = 0,
	limit: number = 10000
): string {
	const db = getDb();
	const base = siteUrl.replace(/\/$/, "");

	try {
		const posts = db.prepare(`
			SELECT slug, published_at, updated_at
			FROM ec_posts
			WHERE status = 'published' AND published_at IS NOT NULL
			ORDER BY published_at DESC
			LIMIT ? OFFSET ?;
		`).all(limit, offset) as Array<{ slug: string; published_at: string; updated_at: string | null }>;

		const urls = posts.filter((p) => !DUPLICATE_SLUGS.has(p.slug)).map((p) => {
			const lastmod = p.updated_at
				? new Date(p.updated_at).toISOString()
				: new Date(p.published_at).toISOString();
			return `  <url>
    <loc>${base}/${p.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
		});

		return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
	} finally {
		db.close();
	}
}


/**
 * Generate Google News XML Sitemap for fresh news articles
 */
export function generate7cGoogleNewsSitemap(siteUrl: string = "https://www.tujuhcahaya.com"): string {
	const db = getDb();
	const base = siteUrl.replace(/\/$/, "");
	// Google News Sitemap specification limits entries to articles published within the last 48 hours
	const cutoffIso = new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString();

	try {
		const posts = db.prepare(`
			SELECT title, slug, published_at
			FROM ec_posts
			WHERE status = 'published'
			  AND published_at IS NOT NULL
			  AND published_at >= ?
			ORDER BY published_at DESC
			LIMIT 1000;
		`).all(cutoffIso) as Array<{
			title: string;
			slug: string;
			published_at: string;
		}>;

		const itemsXml = posts
			.map((p) => {
				const postUrl = `${base}/${p.slug}`;
				const pubDate = new Date(p.published_at).toISOString();
				return `  <url>
    <loc>${postUrl}</loc>
    <news:news>
      <news:publication>
        <news:name>Tujuhcahaya</news:name>
        <news:language>id</news:language>
      </news:publication>
      <news:publication_date>${pubDate}</news:publication_date>
      <news:title>${escapeXml(p.title)}</news:title>
    </news:news>
  </url>`;
			})
			.join("\n");

		return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${itemsXml}
</urlset>`;
	} finally {
		db.close();
	}
}
