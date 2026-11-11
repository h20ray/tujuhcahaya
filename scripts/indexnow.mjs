/**
 * 7C IndexNow Dispatcher
 * Submits published URLs instantly to IndexNow API (Bing, Yandex, Naver, Seznam).
 */

const INDEXNOW_KEY = "d856e24ba0a2df3d07ac8b11aae6ed1d";
const HOST = "www.tujuhcahaya.com";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

export async function submitToIndexNow(urls = []) {
	if (!urls.length) {
		console.log("[IndexNow] No URLs to submit.");
		return;
	}

	const fullUrls = urls.map((u) => (u.startsWith("http") ? u : `https://${HOST}/${u.replace(/^\//, "")}`));

	const payload = {
		host: HOST,
		key: INDEXNOW_KEY,
		keyLocation: KEY_LOCATION,
		urlList: fullUrls,
	};

	try {
		console.log(`[IndexNow] Submitting ${fullUrls.length} URL(s) to api.indexnow.org...`);
		const res = await fetch("https://api.indexnow.org/indexnow", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify(payload),
		});

		console.log(`[IndexNow] Response status: ${res.status} ${res.statusText}`);
		if (res.status === 200 || res.status === 202) {
			console.log("[IndexNow] Successfully accepted by IndexNow engine network!");
			return true;
		} else {
			const text = await res.text();
			console.warn(`[IndexNow] Non-200 response:`, text);
			return false;
		}
	} catch (err) {
		console.error("[IndexNow] Submission error:", err.message);
		return false;
	}
}

// Allow CLI execution: node scripts/indexnow.mjs <url1> <url2> ...
if (process.argv[1]?.endsWith("indexnow.mjs")) {
	const cliUrls = process.argv.slice(2);
	if (cliUrls.length > 0) {
		submitToIndexNow(cliUrls);
	} else {
		// Default: fetch latest from sitemap-news and submit
		(async () => {
			try {
				const r = await fetch(`https://${HOST}/sitemap-news.xml`);
				const xml = await r.text();
				const locs = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1]);
				console.log(`[IndexNow] Auto-submitting latest ${locs.length} URLs from sitemap-news.xml...`);
				await submitToIndexNow(locs);
			} catch (e) {
				console.error("[IndexNow] Auto-fetch error:", e.message);
			}
		})();
	}
}
