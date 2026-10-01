import {
    generate7cRssFeed,
    generate7cSitemapIndex,
    generate7cPagesSitemap,
    generate7cTaxonomiesSitemap,
    generate7cPostsSitemap
} from "../src/lib/7c-feeds.ts";

console.log("=== Testing RSS Feed ===");
const rss = generate7cRssFeed("https://tujuhcahaya.com");
console.log("RSS Length:", rss.length, "bytes");
console.log("RSS Preview:", rss.slice(0, 500));
console.log("RSS Item count:", (rss.match(/<item>/g) || []).length);

console.log("\n=== Testing Sitemap Index ===");
const indexXml = generate7cSitemapIndex("https://tujuhcahaya.com");
console.log("Sitemap Index:", indexXml);

console.log("\n=== Testing Pages Sitemap ===");
const pagesXml = generate7cPagesSitemap("https://tujuhcahaya.com");
console.log("Pages count:", (pagesXml.match(/<url>/g) || []).length);

console.log("\n=== Testing Taxonomies Sitemap ===");
const taxXml = generate7cTaxonomiesSitemap("https://tujuhcahaya.com");
console.log("Taxonomies count:", (taxXml.match(/<url>/g) || []).length);

console.log("\n=== Testing Posts Sitemap (sample 50) ===");
const postsXml = generate7cPostsSitemap("https://tujuhcahaya.com", 0, 50);
console.log("Posts XML count:", (postsXml.match(/<url>/g) || []).length);
console.log("Posts XML Preview:\n", postsXml.slice(0, 400));
