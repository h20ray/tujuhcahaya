import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const testJatengArticle = {
	title: "Ketika 99 Persen PAUD Jateng Dikelola Warga dan Negara Cuma Menepuk Dada",
	category: "musik",
	byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
	tags: ["Jawa Tengah", "Pendidikan", "Sosial", "PAUD", "Kritik", "Anggaran Daerah"],
	imageUrl: "https://jatengprov.go.id/wp-content/uploads/2026/11/Sosialisasi-PAUD-Emas.jpg",
	imageAlt: "Sosialisasi PAUD Emas Jawa Tengah bersama kader penggerak masyarakat",
	excerpt: "Dari 27.700 satuan PAUD di Jawa Tengah, yang berstatus negeri cuma 0,7 persen. Pemerintah membanggakannya sebagai 'gotong royong', padahal ini potret lepas tangan paling telanjang di depan emak-emak.",
	content: `Setiap kali pejabat pemerintah memuji "tingginya semangat gotong royong masyarakat", biasanya ada dua kemungkinan: kalau bukan karena lagi kerja bakti bersih-bersih selokan kampung, ya negara sedang sukses melimpahkan kewajibannya ke pundak rakyat tanpa perlu keluar banyak modal.

Angka yang dipaparkan Kepala Dinas Pendidikan Jawa Tengah tempo hari dalam rilis [kebijakan pendidikan Jawa Tengah](/tag/jawa-tengah) adalah buktinya: dari 27.700 satuan Pendidikan Anak Usia Dini (PAUD) di Jawa Tengah, yang berstatus negeri cuma 214 biji alias 0,7 persen saja. Sisanya—sebanyak 99,3 persen—sepenuhnya hidup dari swadaya murni masyarakat.

Dalam kacamata birokrasi, angka timpang ini dipamerkan sebagai prestasi partisipasi publik yang mengharukan. Tapi kalau kita bedah memakai kacamata akal sehat, ini potret cuci tangan yang telanjang. Hak pendidikan dasar anak yang mestinya dijamin penuh oleh APBD justru dialihkan menjadi kerja perawatan cuma-cuma (*unpaid care work*) yang digendong oleh kader PKK, ibu-ibu majelis taklim, dan pengurus RW.

![Sosialisasi Program PAUD Jawa Tengah](https://jatengprov.go.id/wp-content/uploads/2026/11/Sosialisasi-PAUD-Emas4.jpg)

Ada 57 ribu pengajar yang tiap pagi menyambut hampir satu juta balita di pelosok Jateng. Mayoritas dari mereka bukan ASN bergaji tetap dengan tunjangan pensiun, melainkan petani dan ibu rumah tangga yang rela menyulap teras rumah atau pos ronda jadi ruang kelas. Insentifnya? Jangan tanya. Sering kali cuma ucapan terima kasih tulus dan sebungkus tahu susur waktu rapat desa.

Pemerintah daerah boleh saja membungkus kenyataan ini dengan program bernama puitis seperti *Ngopeni Bocah* atau *PAUD Emas*. Tapi selama kas daerah enggan dipakai untuk membangun sekolah negeri di tiap desa dan menjamin upah layak para pengajarnya, gotong royong itu cuma dalih manis agar negara bisa lepas tangan dengan elegan.`
};

async function runTest() {
	console.log("=======================================================");
	console.log("📰 TEST AUTO-PUBLISH: 1 ARTIKEL JATENG (SAYAP KIRI MOJOK)");
	console.log("=======================================================\n");

	// 1. Audit editorial
	console.log("🔍 Menjalankan 7C Editorial Guard...");
	const audit = validate7cEditorial(testJatengArticle.title, testJatengArticle.content, testJatengArticle.excerpt);
	console.log(`   Score: ${audit.score}/100 | Valid: ${audit.valid}`);
	if (audit.errors.length > 0) console.log("   Errors:", audit.errors);
	if (audit.warnings.length > 0) console.log("   Warnings:", audit.warnings);

	if (!audit.valid || audit.score < 80) {
		console.error("❌ Artikel gagal lolos kualifikasi editorial!");
		process.exit(1);
	}

	// 2. Eksekusi auto-publish
	console.log("\n🚀 Menerbitkan artikel ke sistem (Local DB & Outbox)...");
	const result = await autoPublishPost(testJatengArticle, { bypassPause: true, remote: false });
	console.log("\n✅ Hasil Publikasi:");
	console.log(JSON.stringify(result, null, 2));
}

runTest().catch(console.error);
