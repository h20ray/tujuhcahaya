import { resolve7cLegacyUrl } from "../src/lib/7c-url-guardian.ts";

const testCases = [
	{ input: "/2024/05/12/review-game-final-fantasy/", params: "", expected: "/review-game-final-fantasy" },
	{ input: "/2023/11/cara-setting-router-wifi", params: "", expected: "/cara-setting-router-wifi" },
	{ input: "/", params: "p=1459", expected: "/posts?legacy_id=1459" },
	{ input: "/category/games/feed", params: "", expected: "/category/game" },
	{ input: "/category/teknologi", params: "", expected: "/category/tech" },
	{ input: "/rss", params: "", expected: "/rss.xml" },
	{ input: "/author/budi-santoso/", params: "", expected: "/" },
	{ input: "/wp-content/uploads/2026/08/7c_gempa_p1.jpg", params: "", expected: "https://media.xlocal.id/tujuhcahaya/uploads/2026/08/7c_gempa_p1.jpg" },
	{ input: "/shop", params: "", expected: "/" },
	{ input: "/cart/", params: "", expected: "/" },
	{ input: "/checkout", params: "", expected: "/" },
	{ input: "/my-account/", params: "", expected: "/" },
];

console.log("=== Testing 7C Legacy URL Guardian ===");
let passed = 0;
for (const tc of testCases) {
	const params = new URLSearchParams(tc.params);
	const res = resolve7cLegacyUrl(tc.input, params);
	if (res && res.destination === tc.expected) {
		console.log(`[PASS] ${tc.input}${tc.params ? "?" + tc.params : ""} -> ${res.destination} (${res.matchedRule})`);
		passed++;
	} else {
		console.error(`[FAIL] ${tc.input} -> Got ${res ? res.destination : "null"}, expected ${tc.expected}`);
	}
}

if (passed === testCases.length) {
	console.log(`\nAll ${passed}/${testCases.length} legacy URL tests PASSED!`);
} else {
	process.exit(1);
}
