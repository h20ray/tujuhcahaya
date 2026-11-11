import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Disney Gandeng Adobe Bikin Alat AI Mandiri Berdalih Memanjakan Seniman",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Adobe", "Animasi", "Artificial Intelligence", "Disney", "Elang Elano", "Generative AI", "Industri Kreatif", "Teknologi"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/Disney-Adobe-AI-partnership.jpg",
    imageAlt: "Logo kolaborasi The Walt Disney Company dan Adobe dalam pengembangan teknologi kecerdasan buatan generatif",
    sourceUrl: "https://www.theverge.com/tech/1029773/disney-adobe-generative-ai-partnership",
    excerpt: "Disney resmi menggandeng Adobe untuk mengembangkan model generative AI internal yang diklaim ramah seniman. Di atas kertas terdengar mulia, tapi di mata para pekerja kreatif, langkah ini tak ubahnya persiapan rapi korporasi untuk memangkas kru produksi studio di masa depan.",
    content: `Kalau ada satu entitas di muka bumi ini yang paling ditakuti soal urusan hak cipta dan perlindungan kekayaan intelektual, kerajaan hiburan The Walt Disney Company pastilah duduk di singgasana tertinggi. Selama puluhan tahun, korporasi berlogo istana dongeng ini dikenal punya bala tentara pengacara paling agresif sedunia. Menggambar siluet telinga tikus Mickey Mouse di dinding warung kelontong atau mural sekolah taman kanak-kanak tanpa izin resmi bisa berujung somasi hukum berkepanjangan. Bagi Disney, setiap guratan kuas, sketsa karakter, dan bingkai animasi adalah tambang emas eksklusif yang wajib dipagari kawat berduri hukum paten internasional.

Namun ketika gelombang kecerdasan buatan generatif mulai menyapu pundi-pundi industri kreatif, prinsip kesucian karya cipta tersebut mendadak lentur mengikuti arah tiupan angin efisiensi modal. Sebagaimana dicatat dalam laporan The Verge pekan ini, Disney resmi mengumumkan kemitraan multi-tahun dengan raksasa perangkat lunak desain Adobe. Keduanya bersekutu untuk membangun model-model generative AI eksklusif yang dirancang khusus guna mempercepat alur kerja produksi internal studio Disney, mulai dari pembuatan konsep visual hingga pascaproduksi film animasi layar lebar.

Untuk meredam potensi badai penolakan dari serikat pekerja seni di Hollywood yang trauma dengan aksi mogok kerja massal setahun silam, humas kedua korporasi ini buru-buru membungkus proyek tersebut dengan jargon manis. Mereka melabeli perkakas ini sebagai kecerdasan buatan yang "dipimpin seniman" (*artist-led AI*), sebuah frasa puitis yang dirancang sedemikian rupa agar terdengar seperti pemberian hadiah cuma-cuma bagi para animator dan ilustrator di meja kerja mereka.

![Logo kolaborasi The Walt Disney Company dan Adobe dalam pengembangan teknologi kecerdasan buatan generatif](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/Disney-Adobe-AI-partnership.jpg)

Bagi siapa saja yang terbiasa mengamati geliat industri teknologi di [ulasan produk cerdas](/apple-ngotot-bikin-siri-jadi-agen-ai-saat-paham-perintah-saja), label ramah seniman semacam itu jelas memicu aroma kecurigaan yang menyengat. Narasi bahwa AI hadir semata-mata untuk meringankan beban gambar latar belakang atau mewarnai sketsa kasar adalah taktik penjinakan klasik Silicon Valley. Korporasi raksasa tidak pernah menghamburkan anggaran riset bernilai ratusan juta dolar hanya demi membuat tangan seniman lepas tidak pegal saat memegang stylus tablet.

Kenyataan pahitnya jauh lebih dingin: Disney sedang membangun lumbung data privat raksasa dari tumpukan ratusan film animasi klasik mereka sendiri, lalu menyuapkannya ke mesin komputasi Adobe Firefly. Para seniman dan animator senior yang saat ini masih bekerja di studio pada dasarnya sedang dipaksa melatih mesin pengganti mereka sendiri. Setiap coretan dan perbaikan yang mereka lakukan hari ini berfungsi menyempurnakan bobot algoritma sistem, hingga pada akhirnya model AI tersebut cukup mandiri untuk menghasilkan lusinan variasi adegan visual hanya dengan mengetikkan sebaris prompt teks di layar monitor. Ketika target itu tercapai, dalih efisiensi biaya produksi otomatis akan menyingkirkan ratusan pekerja kontrak dari daftar gaji bulanan perusahaan.

Sikap latah korporasi hiburan menyuntikkan algoritma otomatis ke setiap lini bisnis ini setali tiga uang dengan fenomena absurd ketika orang [menyerahkan urusan dapur ke chatbot AI hanya untuk mendapati kue gosong berasa garam](/serahkan-urusan-dapur-ke-chatbot-ai-kalau-mau-siap-siap-makan-kue). Ada ilusi kemudahan semu yang terus dijual oleh para eksekutif pemegang saham, sembari menutup mata bahwa keajaiban karya seni klasik lahir dari keringat, kelelahan, dan ketidaksempurnaan emosi manusia yang tak bisa diwakili oleh deretan probabilitas token matematika.

Di tongkrongan para desainer grafis dan pekerja visual lepas di kota-kota besar Indonesia, persekutuan Disney dan Adobe ini menjadi kabar yang membikin dada sesak. Puluhan ribu talenta muda tanah air selama ini mengais rezeki sebagai pekerja alih daya (*outsource*) studio animasi global, menghabiskan belasan jam sehari memoles aset tiga dimensi dan mewarnai bingkai gambar dengan upah pas-pasan. Bila studio raksasa sekelas Disney saja sudah mulai merangkul mesin pembuat aset otomatis demi menekan ongkos produksi, nasib para pekerja kreatif akar rumput di rantai pasok terbawah tinggal menunggu waktu untuk terpental ke tepi jurang pengangguran.

Para petinggi di ruang rapat dewan direksi Disney dan Adobe barangkali bisa terus bertepuk tangan merayakan lonjakan grafik efisiensi biaya operasional yang memukau para analis Wall Street. Namun bagi ribuan seniman yang masa kecilnya terinspirasi oleh dongeng-dongeng klasik Disney, keajaiban itu kini terasa hambar dan menakutkan. Pabrik dongeng tertua di dunia itu tampaknya telah memilih jalan pintas: ketimbang merawat imajinasi manusia yang menuntut upah layak dan jam kerja manusiawi, mereka lebih suka menyalakan deretan mesin server dingin yang tak pernah meminta jatah cuti melahirkan atau uang lembur di akhir pekan.`
  },
  {
    title: "Instalasi Nier Automata Bengkak Sampai 366 GB Bukti Developer Makin Malas Kompresi",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Industri Game", "Nier Automata", "PC Gaming", "Square Enix", "SSD Storage", "Windows PC"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/eTceoVV4K4YG2qgZbVPT7H-1920-80.jpg",
    imageAlt: "Tangkapan layar karakter 2B dalam game Nier Automata dengan latar reruntuhan kota distopia",
    sourceUrl: "https://www.pcgamer.com/games/rpg/great-news-nier-automatas-install-size-is-no-longer-7x-bigger-than-it-should-be-it-was-366-gb/",
    excerpt: "Pembaruan Nier: Automata di Windows Store sempat membengkakkan ukuran instalasi hingga 366 GB, tujuh kali lipat dari ukuran aslinya. Blunder konyol ini membuktikan betapa pemalasnya studio game modern dalam urusan kompresi data, memaksa gamer menanggung krisis kapasitas SSD.",
    content: `Bagi siapa saja yang merakit komputer pribadi untuk bermain game dalam beberapa tahun belakangan, membeli media penyimpanan berkecepatan tinggi jenis SSD NVMe sudah setara dengan membeli beras di warung: kebutuhan primer yang harganya terus merangkak naik dan bikin dompet menangis. Kalau dulu kapasitas satu terabita terasa seperti gudang raksasa tanpa dasar yang muat menampung puluhan judul game sekaligus, kini ruang sebesar itu mendadak sempit bak indekos tiga kali tiga meter di pinggiran Jakarta Barat. Belum sempat kita menuntaskan petualangan di satu dunia fiktif, indikator kapasitas drive di File Explorer Windows sudah menjerit merah pekat, memaksa kita bermain undian menghapus game lama demi menyisakan ruang bernapas.

Dalam situasi krisis ruang penyimpanan yang menyiksa batin itu, kabar pembaruan game mestinya menjadi angin segar yang memperbaiki performa atau menambal *bug* menyebalkan. Namun apa yang dialami komunitas pemain game aksi RPG legendaris Nier: Automata pada ekosistem Windows Store dan Xbox App pekan ini justru terdengar seperti lelucon horor. Sebagaimana dicatat dalam laporan PC Gamer, sebuah tambalan pembaruan mendadak membuat ukuran instalasi game rilisan tahun 2017 tersebut membengkak hingga menyentuh angka fantastis: 366 Gigabyte!

Angka tersebut sungguh di luar nalar akal sehat manusia beradab. Sebagai pembanding, ukuran berkas instalasi normal dari petualangan android tempur 2B itu hanya berkisar di angka 45 hingga 50 Gigabyte. Dengan kata lain, patch pembaruan ceroboh dari pihak pengembang telah melipatgandakan ukuran game hingga lebih dari tujuh kali lipat, melahap lebih dari sepertiga total kapasitas drive SSD milik pemain hanya untuk satu judul game tunggal.

![Tangkapan layar karakter 2B dalam game Nier Automata dengan latar reruntuhan kota distopia](https://cdn.mos.cms.futurecdn.net/eTceoVV4K4YG2qgZbVPT7H-1920-80.jpg)

Penyelidikan teknis para pemain di forum komunitas segera mengungkap biang keladi di balik kegilaan ini. Alih-alih menyuntikkan paket tekstur grafis resolusi 8K atau konten cerita baru yang megah, pembengkakan ukuran ini murni disebabkan oleh kekacauan struktur pengemasan berkas instalasi. Sistem pengunduh Windows Store dilaporkan gagal mengenali berkas arsip yang sudah ada, lalu menduplikasi seluruh folder data aset game berulang kali ke dalam direktori tersembunyi tanpa melakukan pembersihan berkas lama.

Meski pihak penerbit akhirnya merilis perbaikan darurat untuk menyunat ukuran instalasi kembali normal, insiden konyol ini menelanjangi borok kronis yang kian akut di industri game modern: kemalasan para pengembang dalam melakukan kompresi dan optimasi data. Sejak era distribusi digital merajai pasar, para eksekutif studio tampaknya menganggap bahwa kuota internet dan kapasitas hard disk pemain adalah sumber daya tak terbatas milik nenek moyang mereka. 

Tabiat ugal-ugalan pengembang yang melempar beban teknis ke pundak konsumen ini mencerminkan arogansi korporasi yang setali tiga uang dengan fenomena saat [kabel RTX 50 meleleh membuktikan gamer PC puluhan juta masih waswas rumah kebakaran](/kabel-rtx-50-meleleh-bukti-gamer-pc-puluhan-juta-masih-waswas). Alih-alih memeras otak demi efisiensi kode dan teknik kompresi cerdas, para produsen game dan hardware raksasa lebih suka menyuruh gamer merogoh kocek lebih dalam untuk membeli komponen tambahan. Industri game seolah lupa pada masa keemasan masa lalu saat pengembang berusaha mati-matian memampatkan game kolosal ke dalam satu keping cakram, sebuah etos kerja yang kini langka sebagaimana terlihat tatkala [EA akhirnya lepas kunci gembok Wing Commander di Steam saat game modern boncos](/ea-akhirnya-lepas-kunci-gembok-wing-commander-di-steam-saat-game).

Bagi anak muda di tongkrongan warnet dan kamar kos tanah air, kasus Nier berukuran 366 GB ini adalah mimpi buruk nyata. Mengunduh data sebesar itu dengan kecepatan internet rumah yang kembang kempis membutuhkan waktu berhari-hari, belum lagi risiko kuota internet bulanan yang mendadak ludes tak bersisa. Gamer lokal yang penghasilannya pas-pasan dipaksa menjadi kurator dadakan di depan layar komputer: menimbang dengan berat hati apakah harus menghapus rekaman tugas kuliah, koleksi foto kenangan keluarga, atau game kesayangan lain demi memberi jalan bagi sebuah patch pembaruan yang ceroboh.

Para petinggi studio game di Jepang maupun Barat barangkali bisa menganggap insiden 366 GB ini sebagai sekadar kekhilafan teknis kecil yang selesai dengan satu rilis permintaan maaf di media sosial. Namun bagi jutaan gamer yang setiap hari harus hidup hemat kuota dan mengelus dada melihat kapasitas penyimpanan laptopnya kian megap-megap, insiden ini adalah bukti telanjang bahwa industri game modern sedang terserang penyakit obesitas digital yang akut. Bila developer terus malas merampingkan kode mereka, jangan heran jika suatu hari nanti kita butuh satu unit server data center rumahan cuma buat memainkan game memancing ikan.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 23:00 WIB)");
  console.log("=================================================================\n");

  const results = [];

  for (let i = 0; i < articles.length; i++) {
    const art = articles[i];
    console.log(`\n-------------------------------------------------------------`);
    console.log(`📝 [Artikel ${i + 1}/${articles.length}] ${art.title}`);
    console.log(`👤 Byline: ${art.byline} | Kategori: ${art.category}`);

    const wordCount = art.content.trim().split(/\s+/).filter(Boolean).length;
    console.log(`📊 Word count: ${wordCount} kata`);

    // 1. Audit editorial 7C
    const audit = validate7cEditorial(art.title, art.content, art.excerpt, art.tags);
    console.log(`🎯 Editorial Score: ${audit.score}/100 | Valid: ${audit.valid}`);
    if (audit.errors.length > 0) {
      console.error(`❌ Errors:`, audit.errors);
      throw new Error(`Artikel "${art.title}" gagal audit 7C: ` + audit.errors.join(", "));
    }
    if (audit.warnings.length > 0) console.warn(`⚠️ Warnings:`, audit.warnings);
    if (audit.suggestions.length > 0) console.log(`💡 Suggestions:`, audit.suggestions);

    if (!audit.valid || audit.score < 80) {
      throw new Error(`Artikel "${art.title}" memiliki skor editorial di bawah 80!`);
    }

    // 2. Publish ke local DB dan remote Plesk
    console.log(`📡 Menerbitkan artikel via autoPublishPost (remote: true)...`);
    const pubResult = await autoPublishPost(art, { bypassPause: true, remote: true });
    console.log(`✅ Status: ${pubResult.status} | URL: ${pubResult.url}`);
    console.log(`   Local DB: ${pubResult.dbSaved} | Remote Plesk: ${pubResult.remotePublished}`);

    // 3. Tandai URL sumber asli sebagai sudah diproses di seen-urls.json
    if (art.sourceUrl) {
      markAsSeen(art.sourceUrl.trim());
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi 23:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261109-2300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
