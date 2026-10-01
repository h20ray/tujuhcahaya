import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

console.log("=== Testing 7C Editorial Guard Validator ===");

// Test 1: Slop content
const slopTitle = "🚀 Inilah Revolusi Terbaru di Era Digital!";
const slopBody = "Di era digital yang serba cepat ini, tak bisa dimungkiri bahwa kita harus menyelami lebih dalam penggunaan tetikus nirkabel. Kesimpulannya adalah produk ini sebuah mahakarya yang memukau.";
const slopResult = validate7cEditorial(slopTitle, slopBody);

console.log("\n[Test 1 - Slop Article]");
console.log("Valid:", slopResult.valid);
console.log("Score:", slopResult.score);
console.log("Errors:", slopResult.errors);
console.log("Suggestions:", slopResult.suggestions);

if (slopResult.valid === false && slopResult.errors.length >= 3) {
	console.log("--> Slop detection successfully BLOCKED invalid article!");
} else {
	console.error("--> Slop detection failed to block!");
	process.exit(1);
}

// Test 2: Authentic human prose
const authenticTitle = "Logitech G Pro X Superlight: Mouse Kencang yang Gak Neko-neko";
const authenticBody = "Setelah dua minggu kami pakai buat push rank di Valorant sampai begadang, mouse ini terbukti ringan banget. Bobotnya yang cuma 63 gram bikin pergerakan flick shot terasa instan tanpa delay. Sensor Hero 25K-nya presisi, gak pernah stutter atau ngelag meskipun di-swipe secepat kilat di atas mousepad kain.";
const authResult = validate7cEditorial(authenticTitle, authenticBody);

console.log("\n[Test 2 - Authentic Human Prose]");
console.log("Valid:", authResult.valid);
console.log("Score:", authResult.score);
console.log("Warnings:", authResult.warnings);

if (authResult.valid === true) {
	console.log("--> Authentic article APPROVED with score:", authResult.score);
} else {
	console.error("--> Authentic article wrongly flagged!");
	process.exit(1);
}

console.log("\nAll editorial guard test cases PASSED!");
