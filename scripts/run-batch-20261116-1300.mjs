import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Kacamata AI Meta Masuk Indonesia Seharga Motor Bekas Saat Privasi Jadi Taruhan",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Meta", "Ray-Ban Meta", "Kacamata AI", "Privasi Digital", "Gadget", "Elang Elano"],
    imageUrl: "https://img.antaranews.com/cache/1200x800/2026/03/28/IMG_8311.jpeg",
    imageAlt: "Kacamata pintar Ray-Ban Meta berbasis kecerdasan buatan hasil kolaborasi Meta dan EssilorLuxottica yang resmi dipasarkan di Indonesia",
    sourceUrl: "https://www.antaranews.com/berita/5855199/kacamata-ai-meta-resmi-dijual-di-indonesia-ini-daftar-harganya",
    excerpt: "Meta resmi memboyong kacamata Ray-Ban Meta dan Oakley Meta ke Indonesia dengan banderol hingga Rp10,9 juta. Di balik kecanggihan kamera 12MP dan asisten suara, privasi warga di jalanan diam-diam kian terancam.",
    content: `Di warung kopi pinggir jalan atau gerbong kereta komuter yang padat berdesakan, pemandangan orang menatap layar ponsel sambil menunduk pegal sudah menjadi lanskap harian yang tak lagi asing bagi siapa pun. Kita terbiasa bersikap waspada kalau ada orang asing di sebelah yang mendadak mengangkat smartphone mengarah tepat ke wajah kita. Refleks tangan kita langsung menutupi muka atau melempar tatapan sinis yang meminta penjelasan. Batasan visual sederhana ini selama bertahun-tahun menjadi benteng pertahanan terakhir privasi masyarakat biasa dari intipan lensa liar di ruang publik. Namun benteng rasa aman yang sudah rapuh tersebut kini terancam runtuh total begitu perangkat pengintai visual disamarkan secara rapi di balik bingkai kacamata hitam modis yang tampak elegan dan tanpa dosa.

Kekhawatiran itu bukan lagi sekadar bumbu cerita film fiksi ilmiah distopia, melainkan sudah resmi mendarat di etalase mal-mal mewah tanah air. Sebagaimana dicatat dalam laporan peluncuran teknologi Antara awal pekan ini, raksasa teknologi Meta bersama konsorsium kacamata global EssilorLuxottica resmi menjual lini kacamata pintar berbasis kecerdasan buatan mereka di Indonesia. Tak tanggung-tanggung, ada empat varian yang langsung digelontorkan ke pasar domestik melalui jaringan Optik Seis: mulai dari Oakley Meta HSTN seharga Rp8,7 juta, Ray-Ban Meta Gen 3 di angka Rp8,9 juta, hingga varian termahal Oakley Meta Vanguard yang menembus angka mencengangkan Rp10,9 juta. Banderol harga yang setara dengan menebus satu unit sepeda motor matic bekas dalam kondisi prima ini mengusung kamera beresolusi 12 megapiksel dengan rekaman video 3K Ultra HD, susunan enam mikrofon peredam bising, speaker terintegrasi di pelipis telinga, serta asisten suara pintar Meta AI.

Pihak produsen tentu membungkus peluncuran ini dengan narasi kemudahan hidup yang sangat memikat di brosur promosi: pengguna bisa memotret momen liburan, merekam video sudut pandang mata pertama, mendengarkan siniar musik, atau meminta asisten virtual menerjemahkan obrolan bahasa asing tanpa perlu repot merogoh ponsel dari saku celana. Namun bagi siapa saja yang paham bagaimana ekosistem komputasi awan bekerja, kacamata pintar ini sejatinya adalah alat pengumpul data raksasa yang menempel tepat di batang hidung konsumen. Dengan daya tahan baterai yang cuma bertahan sekitar sembilan jam pemakaian normal dan tetap mewajibkan koneksi bluetooth nirkabel ke aplikasi ponsel pintar, kacamata ini bukanlah pengganti gadget harian, melainkan sekadar aksesoris mahal yang memaksa pemiliknya rajin berburu colokan listrik di sela aktivitas harian.

![Kacamata pintar Ray-Ban Meta berbasis kecerdasan buatan hasil kolaborasi Meta dan EssilorLuxottica yang resmi dipasarkan di Indonesia](https://img.antaranews.com/cache/1200x800/2026/03/28/IMG_8311.jpeg)

Problem paling runyam dari maraknya aksesoris berkamera tersembunyi semacam ini terletak pada lenyapnya persetujuan sadar dari orang-orang di sekitar pemakai. Lampu indikator LED kecil yang menyala saat perekaman berlangsung terbukti sangat mudah diakali atau luput dari perhatian di tengah terik matahari tropis dan keramaian pasar. Di negara yang regulasi perlindungan data pribadinya masih sering kedodoran di tingkat pembuktian lapangan, membayangkan ribuan pasang kacamata berkamera berkeliaran bebas di ruang publik adalah ancaman sosial yang nyata. Kerapuhan batas etika ini mengulang polemik serupa saat kemunculan [kacamata AI Gemini berkedok ramah privasi](/kacamata-ai-gemini-berkedok-ramah-privasi-padahal-rekam-muka) yang sempat dikecam lantaran merekam interaksi visual lingkungan sekitar secara pasif tanpa izin subjek yang terekam. Ironisnya, masyarakat kita kerap terjebak dalam [paranoia ponsel disadap yang sering jadi bahan obrolan warkop](/paranoia-hp-disadap-bikin-geger-warkop-padahal-diri-sendiri-rajin) padahal pada saat yang sama segelintir kaum urban justru bangga menggelontorkan uang belasan juta rupiah demi mengenakan kamera pengintai korporasi tepat di atas kedua matanya sendiri.

Membeli kacamata seharga sepuluh juta rupiah demi terlihat keren saat bersepeda sore memang hak prerogatif mereka yang saldo rekeningnya tak berseri. Namun sebelum merasa bangga melenggang di trotoar kota sambil membisikkan perintah suara ke gagang kacamata, ingatlah satu hal mendasar: di mata korporasi teknologi Silicon Valley, kacamata hitam itu bukanlah jendela untuk melihat dunia secara lebih cerdas, melainkan corong lensa gratisan agar raksasa media sosial bisa terus mengintip apa saja yang sedang Anda dan orang-orang di hadapan Anda saksikan setiap detik.`
  },
  {
    title: "Jackbox Bukti Nyata Game Modal Browser HP Jauh Lebih Seru dari Proyek Triliunan",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Jackbox Games", "PC Gaming", "Game Indie", "Budaya Gaming", "Party Games", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/ZimasKeFtUuoHSCqpCekQo-1920-80.png",
    imageAlt: "Koleksi karakter kartun jenaka dalam rangkaian seri permainan pesta Jackbox Party Pack",
    sourceUrl: "https://www.pcgamer.com/games/the-pandemic-was-transformative-for-jackbox-we-went-from-a-gamer-name-to-a-household-name/",
    excerpt: "CEO Jackbox Games Mike Bilder membeberkan bagaimana pandemi menyulap game mereka dari tontonan khusus gamer menjadi hiburan wajib keluarga. Bukti game seru tak butuh grafis miliaran rupiah.",
    content: `Kalau ada satu hal yang sering bikin jengkel saat mengajak teman tongkrongan non-gamer untuk bermain bersama di depan televisi, itu adalah kerumitan tombol pengontrol fisik yang membingungkan. Berikan mereka stik konsol modern yang dipenuhi belasan tombol analog, pemicu pegas di bagian bahu, dan tombol kombinasi rahasia, dijamin lima menit kemudian mereka bakal meletakkan kontroler tersebut ke atas meja sambil mengeluh pusing. Belum lagi kalau kita harus menunggu proses unduhan berkas instalasi pembaruan sebesar puluhan gigabyte yang memakan waktu berjam-jam sebelum game bisa dimainkan. Alih-alih mendapatkan hiburan malam akhir pekan yang cair dan penuh tawa, suasana ruang tamu mendadak kaku mirip ruang pelatihan sertifikasi teknologi yang menguras kesabaran.

Jurang pemisah antara gamer tulen dan masyarakat awam inilah yang berhasil dijembatani secara brilian oleh pengembang independen Jackbox Games. Sebagaimana dicatat dalam laporan wawancara mendalam jurnalis PC Gamer akhir pekan ini, Chief Executive Officer Jackbox Games Mike Bilder membeberkan bagaimana periode karantina pandemi silam menjadi titik balik revolusioner bagi eksistensi studio mereka. Sebelum wabah global melanda, seri Jackbox Party Pack hanyalah judul ceruk yang akrab di komunitas gamer PC dan penikmat siaran streaming. Namun begitu jutaan pekerja kantoran terkurung di dalam rumah dan dipaksa mencari cara melepas jenuh, permainan pesta berbasis kuis jenaka seperti Quiplash, Drawful, dan Trivia Murder Party mendadak meledak menjadi fenomena kultural lintas generasi. Jackbox bertransformasi dari sekadar nama asing di kalangan gamer menjadi nama yang akrab di ruang keluarga dan agenda sesi santai virtual kantor.

Kunci kejeniusan Jackbox sejatinya sangat sederhana sekaligus menampar wajah industri game modern: mereka membuang semua kerumitan perangkat keras ke tong sampah. Pemain tidak perlu membeli empat buah kontroler nirkabel berharga jutaan rupiah atau memaksa semua kawan mengunduh aplikasi khusus. Cukup ada satu layar utama yang disiarkan lewat panggilan video atau televisi ruang tamu, setiap orang di ruangan bisa langsung ikut bermain hanya dengan membuka browser di smartphone masing-masing dan mengetikkan empat huruf kode ruangan. Ketiadaan hambatan teknis ini membuktikan bahwa kenikmatan bermain game sesungguhnya terletak pada dinamika sosial dan kejujuran interaksi manusia, bukan pada adu kemewahan resolusi grafis atau efek pencahayaan fotorealistis yang menuntut kartu grafis seharga motor bebek.

![Koleksi karakter kartun jenaka dalam rangkaian seri permainan pesta Jackbox Party Pack](https://cdn.mos.cms.futurecdn.net/ZimasKeFtUuoHSCqpCekQo-1920-80.png)

Kesuksesan Jackbox merajai tongkrongan keluarga menjadi tamparan keras bagi para raksasa penerbit game AAA yang belakangan ini kian tersesat dalam ambisi megalomania mereka. Kita kerap menyaksikan publisher ternama menghamburkan dana triliunan rupiah untuk memproduksi game beranggaran raksasa yang ujung-ujungnya sepi pemain karena gameplay yang hambar dan mekanik yang menuntut komitmen waktu berlebihan. Situasi ini mengulang kembali pesan berharga ketika [game indie bikinan dua orang sukses tampar proyek triliunan](/game-indie-bikinan-dua-orang-berhasil-tampar-proyek-triliunan) korporasi besar yang terlalu sibuk memeras isi dompet pemain lewat transaksi mikro. Di tengah tren industri yang mencekik pemain dengan [tuntutan trofi ratusan jam yang bikin game terasa seperti kerja lembur](/bocoran-trofi-gta-6-tembus-ratusan-jam-bukti-main-game-berubah), kehadiran game pesta yang selesai dalam lima belas menit dan memicu gelak tawa lepas seketika terasa seperti oase segar bagi kewarasan para gamer kasual.

Bermain game pada hakikatnya diciptakan untuk merekatkan hubungan antarmanusia, bukan memamerkan seberapa tebal dompet Anda untuk membeli monitor lengkung atau konsol generasi terbaru. Jika selembar layar ponsel murah dan kuis tebak gambar jenaka sudah sanggup membuat satu keluarga atau kawan sekantor tertawa terpingkal-pingkal hingga perut kram, buat apa para publisher memusingkan hitungan piksel sinematik yang dingin? Terkadang, inovasi hiburan terbaik memang bukanlah sesuatu yang menuntut spesifikasi komputasi paling gila, melainkan karya bersahaja yang tahu diri kapan harus menyingkir dari jalan agar tawa manusia bisa mengalir bebas tanpa sekat.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 13:00 WIB)");
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
      markAsSeen(art.sourceUrl);
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 BATCH SELESAI: ${results.length} artikel berhasil diaudit & dipublikasikan.`);
  console.log("=================================================================");
  for (const res of results) {
    console.log(`- [${res.status.toUpperCase()}] ${res.slug} (Skor: ${res.score}) -> ${res.url}`);
  }
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261116-1300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
