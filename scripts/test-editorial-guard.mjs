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
const authenticTitle = "Logitech G Pro X Superlight Jadi Senjata Andalan Anak Warnet";
const authenticBody = `Setelah dua minggu kami pakai buat push rank di Valorant sampai begadang, mouse ini terbukti ringan banget. Bobotnya yang cuma 63 gram bikin pergerakan flick shot terasa instan tanpa hambatan kabel kusut di sudut meja. Sensor Hero 25K-nya presisi, gak pernah stutter atau ngelag meskipun di-swipe secepat kilat di atas mousepad kain murah.

Sebagaimana dicatat dalam laporan pengujian hardware Tom's Hardware, efisiensi baterai mouse nirkabel ini sanggup bertahan hingga 70 jam penggunaan intensif. Daya tahan semacam ini jelas sebuah kemewahan buat gamer yang sering lupa mencolokkan kabel pengisi daya sebelum tidur.

Di tengah gempuran tren mouse gaming bolong-bolong sarang lebah yang sering kemasukan abu rokok dan debu kamar kos, Logitech justru mempertahankan cangkang solid yang bersih. Tidak ada lampu RGB gemerlap yang menguras daya baterai secara sia-sia, dan tidak ada tombol ekstra aneh-aneh yang bikin jempol kepeleset saat duel sengit. Semua elemen desainnya dirancang untuk satu tujuan fungsional: responsivitas murni.

Tentu saja banderol harganya yang menyentuh angka dua juta rupiah terasa cukup menguras kantong anak kos. Namun jika dibandingkan dengan periferal gaming dalam [ulasan mouse gaming sebelumnya](/ulasan-mouse-gaming-murah) yang sering menjual gimmick lampu ketimbang durabilitas switch, investasi ini terasa masuk akal bagi siapa saja yang serius mengejar rank kompetitif.

Pada akhirnya, mouse seringan kapas ini tetap tidak bisa menyulap aim bapuk kita menjadi sekelas pemain profesional secara instan. Tapi setidaknya, ketika tembakan kita masih saja meleset di ronde penentuan, kita sudah tidak punya alasan lagi buat menyalahkan lag mouse atau kabel yang nyangkut di pojokan monitor.`;
const authResult = validate7cEditorial(authenticTitle, authenticBody, undefined, ["Hardware", "Gaming Gear"]);

console.log("\n[Test 2 - Authentic Human Prose]");
console.log("Valid:", authResult.valid);
console.log("Score:", authResult.score);
console.log("Errors:", authResult.errors);
console.log("Warnings:", authResult.warnings);
console.log("Suggestions:", authResult.suggestions);

if (authResult.valid === true) {
	console.log("--> Authentic article APPROVED with score:", authResult.score);
} else {
	console.error("--> Authentic article wrongly flagged!");
	process.exit(1);
}

// Test 3: Anti-"Ketika" headline addiction gate
const ketikaTitle = "Ketika Gamer PC Menolak Beli Konsol Baru Demi Menunggu GTA 6";
const ketikaResult = validate7cEditorial(ketikaTitle, authenticBody);
console.log("\n[Test 3 - Anti-Ketika Headline]");
console.log("Valid:", ketikaResult.valid);
console.log("Errors:", ketikaResult.errors);
if (ketikaResult.valid === false && ketikaResult.errors.some(e => e.includes('"Ketika..."'))) {
	console.log("--> Anti-Ketika headline detection successfully BLOCKED!");
} else {
	console.error("--> Failed to block repetitive 'Ketika' headline!");
	process.exit(1);
}

// Test 4: Anti-FAQ/Question headline gate ("Kenapa...", "Mengapa...", "?")
const faqTitle = "Kenapa Baterai HP Boros Banget Pas Main Game?";
const faqResult = validate7cEditorial(faqTitle, authenticBody);
console.log("\n[Test 4 - Anti-FAQ/Question Headline]");
console.log("Valid:", faqResult.valid);
console.log("Errors:", faqResult.errors);
if (faqResult.valid === false && faqResult.errors.length >= 2) {
	console.log("--> Anti-FAQ headline and question mark successfully BLOCKED!");
} else {
	console.error("--> Failed to block FAQ/Question headline!");
	process.exit(1);
}

console.log("\nAll editorial guard test cases PASSED!");
