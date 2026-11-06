import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const liveArticle = {
	title: "Ketika Piala AMI Awards Tak Cukup Membayar Tagihan dan Royalti Musisi",
	category: "musik",
	byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
	tags: ["Musik", "AMI Awards", "Musisi Indonesia", "Royalti Musik", "Industri Kreatif"],
	imageUrl: "https://assetd.kompas.id/3m3o67xNthwsm0CokD1DV8klokw=/1024x683/smart/filters:format(webp):quality(80)/https://cdn-dam.kompas.id/photo/ori/2026/11/05/ed74e92b-5dce-491c-a294-663cc8ce21bb.jpg",
	imageAlt: "Suasana panggung perhelatan AMI Awards dan ekspresi para musisi penerima penghargaan",
	excerpt: "Malam anugerah musik selalu riuh dengan gaun gemerlap dan tepuk tangan pejabat. Tapi begitu turun panggung, para musisi tetap harus menghadapi kenyataan pahit: royalti recehan dari platform streaming dan ketimpangan ekosistem yang tak kunjung sembuh.",
	content: `Menonton siaran malam penganugerahan penghargaan musik di televisi atau layar ponsel kita sering kali menghadirkan rasa ganjil yang akrab: semuanya terlihat begitu megah, mewah, dan berkilau. Gaun malam berkibar, lampu sorot ratusan ribu watt menerangi panggung, dan para pesohor tersenyum lebar sambil memeluk piala berlapis emas imitasi di depan kamera.

Namun suasana di panggung [perhelatan AMI Awards](/tag/ami-awards) tempo hari justru memotret anomali yang melegakan. Alih-alih cuma memuntahkan ucapan terima kasih standar ala pidato birokrat, beberapa musisi justru memilih menumpahkan keresahan paling mentah yang selama ini mengganjal di tenggorokan mereka. Sebagaimana dicatat dalam laporan Kompas.id, podium penerimaan piala berubah fungsi menjadi mimbar curhat sosial: dari isu kebebasan berekspresi, sengkarut royalti hak cipta yang tak kunjung transparan, sampai getirnya nasib musisi arus bawah yang pendapatannya habis ditelan potongan platform distribusi digital.

![Panggung dan riuh penghargaan musik tanah air](https://assetd.kompas.id/3m3o67xNthwsm0CokD1DV8klokw=/1024x683/smart/filters:format(webp):quality(80)/https://cdn-dam.kompas.id/photo/ori/2026/11/05/ed74e92b-5dce-491c-a294-663cc8ce21bb.jpg)

Di atas kertas, industri hiburan kita rajin membanggakan angka pertumbuhan ekonomi kreatif yang katanya meroket belasan persen tiap kuartal. Tapi di dunia nyata yang diinjak para pencipta lagu, memproduksi satu album rekaman penuh kini terasa seperti bertaruh judi nasib. Royalti dari layanan streaming musik global sering kali cuma menyisakan puluhan rupiah per putar—jumlah yang bahkan tak cukup buat membeli sebungkus rokok eceran di warung kelontong.

Menghadiahi musisi dengan piala berlapis cat emas tentu menyenangkan untuk diunggah di Instagram feed. Tapi piala itu tak bisa dibawa ke kasir minimarket buat membayar token listrik kontrakan atau premi BPJS Kesehatan. Selama tata kelola royalti masih disandera perdebatan regulasi dan promotor besar terus menekan honor panggung musisi lokal, panggung karpet merah itu cuma fatamorgana: pesta mewah yang menari di atas keringat orang-orang yang dompetnya tetap compang-camping.`
};

async function run() {
	console.log("=======================================================");
	console.log("🚀 LIVE TEST AUTO-PUBLISH: 1 SHOOT LANGSUNG KE LIVE SERVER");
	console.log("=======================================================\n");

	// 1. Audit editorial
	console.log("🔍 Menjalankan 7C Editorial Guard...");
	const audit = validate7cEditorial(liveArticle.title, liveArticle.content, liveArticle.excerpt, liveArticle.tags);
	console.log(`   Score: ${audit.score}/100 | Valid: ${audit.valid}`);
	if (audit.errors.length > 0) console.log("   Errors:", audit.errors);
	if (audit.warnings.length > 0) console.log("   Warnings:", audit.warnings);

	if (!audit.valid || audit.score < 80) {
		console.error("❌ Artikel gagal lolos kualifikasi editorial!");
		process.exit(1);
	}

	// 2. Eksekusi auto-publish lokal + remote live
	console.log("\n📡 Menerbitkan artikel ke Local DB dan Sinkronisasi ke Live Plesk Server...");
	const result = await autoPublishPost(liveArticle, { bypassPause: true, remote: true });
	console.log("\n✅ Hasil Publikasi:");
	console.log(JSON.stringify(result, null, 2));
}

run().catch(console.error);
