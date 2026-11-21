import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ray-Ban Meta Resmi Dijual Nyaris Sembilan Juta Cuma Buat Tempel Kamera di Muka",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Ray-Ban Meta", "Oakley Meta", "Smart Glasses", "Meta AI", "Privasi Digital", "Elang Elano"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2025/10/13/InShot_20251013_180139974.jpg",
    imageAlt: "Ilustrasi kacamata pintar Ray-Ban Meta dengan sensor kamera terpasang di sudut bingkai kacamata",
    sourceUrl: "https://www.antaranews.com/berita/5853931/harga-ray-ban-meta-dan-oakley-meta-di-indonesia-mulai-rp87-juta",
    excerpt: "Ray-Ban dan Oakley Meta resmi mendarat di pasar Indonesia dengan harga mulai Rp8,7 juta hingga Rp10,9 juta. Di balik iming-iming asisten AI tanpa pegang smartphone, perangkat ini menuntut harga selangit demi privasi yang kian tergadaikan.",
    content: `Bagi sebagian orang yang hidupnya tak bisa lepas dari ilusi gaya hidup futuristik, mengenakan kacamata hitam sembari berbicara sendiri di ruang publik barangkali dianggap sebagai puncak pencapaian modernitas. Selama bertahun-tahun, film fiksi ilmiah sukses menanamkan fantasi bahwa manusia masa depan akan beraktivitas layaknya agen rahasia: menatap dunia luar sembari menerima bisikan data digital langsung di pelipis telinga. Maka tak heran, ketika sejumlah konglomerat teknologi mulai menjejalkan mikrofon, speaker mini, dan sensor optik ke dalam bingkai kacamata konvensional, sebagian kalangan langsung menyambutnya dengan decak kagum, seolah era manusia siborg akhirnya tiba di depan mata.

Namun begitu melihat label harga resminya mendarat di tanah air, decak kagum tersebut seketika berganti menjadi gelengan kepala yang getir. Sebagaimana dicatat dalam laporan resmi Antara Tekno pekan ini, Meta bersama raksasa kacamata EssilorLuxottica resmi memboyong lini kacamata pintar terbaru mereka ke etalase toko ritel Indonesia. Tidak tanggung-tanggung, ada empat varian produk yang siap menguras tabungan konsumen lokal: mulai dari Oakley Meta HSTN seharga Rp8.799.000, Ray-Ban Meta generasi ketiga seharga Rp8.999.000, Ray-Ban Meta Optics generasi kedua seharga Rp9.399.000, hingga varian kasta tertinggi Oakley Meta Vanguard yang menembus angka fantastis Rp10.999.000.

Bila dibedah memakai kalkulator sederhana di atas meja warung kopi, banderol harga tersebut terasa sangat tidak masuk akal untuk kantong kebanyakan warga perkotaan. Uang nyaris sembilan hingga sebelas juta rupiah itu setara dengan harga satu unit sepeda motor bebek seken yang siap diajak mengantar anak sekolah, atau biaya sewa kamar indekos sederhana di Jakarta selama hampir setahun penuh. Mengeluarkan dana sebesar itu hanya demi menempelkan kamera 12 megapiksel dan chip kecerdasan buatan di pangkal hidung adalah kemewahan absurd yang faedahnya patut dipertanyakan akal sehat.

![Ilustrasi kacamata pintar Ray-Ban Meta dengan sensor kamera terpasang di sudut bingkai kacamata](https://img.antaranews.com/cache/800x533/2025/10/13/InShot_20251013_180139974.jpg)

Para pemasar korporasi tentu akan berbusa-busa membela produk ini dengan dalih kepraktisan bebas genggam (*hands-free*). Mereka mengklaim pengguna kini bisa memotret momen indah, merekam video sudut pandang orang pertama (*POV*), membalas pesan, hingga bertanya kepada asisten Meta AI tanpa perlu repot merogoh smartphone dari saku celana. Namun dalam dunia nyata di luar studio iklan yang gemerlap, kacamata pintar ini justru membawa setumpuk kerepotan baru yang menjengkelkan.

Pertama, perkara daya tahan baterai. Mengoperasikan sensor kamera, koneksi nirkabel, pemrosesan algoritma, dan keluaran audio secara simultan dalam bingkai setipis itu adalah siksaan termal tersendiri bagi baterai lithium mini. Alhasil, setelah dipakai merekam beberapa video pendek dan memutar musik selama segelas es kopi habis di tongkrongan, baterai perangkat ini bakal langsung megap-megap minta pulang ke dalam kotak pengisi dayanya. Belum lagi tantangan iklim tropis Indonesia yang sarat debu knalpot dan keringat berminyak. Membersihkan lensa kacamata biasa saja butuh kehati-hatian, apalagi harus mengelap bingkai yang dipenuhi sensor mikro dan lubang sirkuit tanpa rasa cemas akan korsleting.

Namun persoalan paling runyam dari kacamata berkamera ini sesungguhnya terletak pada etika sosial dan ancaman privasi di ruang publik. Selama ini, interaksi antarmanusia di jalanan atau transportasi umum berlangsung nyaman karena kita tahu persis kapan seseorang sedang memotret menggunakan ponsel. Begitu kamera dipasang tepat di sudut mata seseorang, batasan ruang privat seketika runtuh berantakan. Lampu indikator LED kecil yang dipasang pabrikan sangat mudah diakali atau diabaikan oleh orang di sekitarnya.

Kekhawatiran semacam ini mengingatkan kita pada fenomena serupa saat raksasa teknologi lain berusaha memaksakan [ambisi kacamata pintar berteknologi kecerdasan buatan](/kacamata-ai-gemini-berkedok-ramah-privasi-padahal-rekam-muka) ke tengah masyarakat tanpa memedulikan kenyamanan warga di sekitarnya. Modusnya selalu serupa dengan pola korporasi yang menggiring pengguna menyerahkan kendali ruang personal, persis seperti [ancaman tamatnya privasi hunian pribadi](/amazon-terbangkan-drone-ring-di-ruang-tamu-menandai-tamatnya) atas nama keamanan cerdas modern. Kita diminta membayar jutaan rupiah untuk menjadi agen pengawas sukarela yang setiap hari rajin menyetorkan rekaman visual wajah orang asing ke server raksasa Silicon Valley demi melatih model kecerdasan buatan mereka.

Di pos ronda warkop tempat teknisi jaringan dan kawan-kawan kerja lepas biasa melepas penat, kehadiran kacamata sembilan juta rupiah ini cuma disambut dengan senyum kecut. Kita disadarkan bahwa kemajuan teknologi sering kali diciptakan bukan untuk menyelesaikan masalah riil rakyat kecil, melainkan menciptakan gengsi baru bagi mereka yang bingung menghabiskan uang. Jika baterai kacamata pintar Anda habis di tengah teriknya jalanan kota, barang mahal itu seketika kembali ke fungsi paling purbanya: kacamata hitam biasa penahan silau, yang bedanya cuma membuat isi dompet Anda terkuras tanpa sisa.`
  },
  {
    title: "Film Bioskop Indonesia Kompak Rilis Hari Kamis Bukti Layar Perak Penuh Intrik",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Bioskop Indonesia", "Film Nasional", "Budaya Urban", "Layar Lebar", "Tiket Bioskop", "Margaretha Nina"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2026/08/16/IMG_20260702_165952.jpg",
    imageAlt: "Suasana antrean penonton di depan lobi bioskop jaringan XXI dan Cinepolis menjelang penayangan film nasional",
    sourceUrl: "https://www.antaranews.com/berita/5853267/kenapa-mayoritas-film-di-indonesia-rilis-hari-kamis-ini-alasannya",
    excerpt: "Mayoritas film bioskop Indonesia selalu tayang perdana di hari Kamis. Bukan sekadar kebiasaan kalender, jadwal ini adalah panggung gladiator penentu jatah layar sekaligus siasat tiket murah bagi penonton.",
    content: `Bagi anak muda perkotaan dan para pekerja kantor yang saban hari terbiasa duduk menatap layar komputer, hari Kamis memiliki pesona magis tersendiri. Begitu jam makan siang tiba atau jam dinding kantor mulai menunjukkan pukul empat sore, perhatian jari jemari kerap melenceng sejenak membuka aplikasi pemesanan tiket bioskop di ponsel pintar. Ada rasa penasaran yang menggelitik untuk melihat jajaran judul baru yang mendadak muncul memenuhi daftar putar layar perak. Dari film horor berlatar pesugihan desa terpencil, drama cinta berurai air mata, hingga film aksi laga, hampir seluruh karya sinema nasional seolah bersepakat memilih hari Kamis sebagai momen pertama menyapa publik.

Kebiasaan serentak ini kerap dianggap oleh penonton kasual sebagai tradisi kalender tanpa makna khusus. Banyak yang mengira pemilihan hari kerja menjelang akhir pekan hanyalah kebetulan jadwal operator studio. Namun sebagaimana dicatat dalam laporan resmi Antara Hiburan pekan ini, tradisi penayangan film Indonesia setiap hari Kamis sejatinya adalah strategi bisnis industri perfilman yang sudah berurat akar sejak tahun 2008. Pilihan hari ini dirancang secara sadar untuk mengunci momentum akhir pekan, membangun percakapan dari mulut ke mulut (*word-of-mouth*), dan memaksimalkan pendapatan rumah produksi sebelum gelombang penonton memadati mal di hari Sabtu dan Minggu.

Namun bila kita menelisik dinamika di balik pintu kaca bioskop, hari Kamis sejatinya adalah arena gladiator paling berdarah dan menegangkan bagi para pembuat film lokal. Industri bioskop modern adalah ekosistem yang bekerja dengan algoritma dingin tanpa ampun. Dalam siklus bisnis bioskop tanah air, nasib hidup atau matinya sebuah film nasional ditentukan hanya dalam kurun waktu dua puluh empat jam pertama penayangannya. 

![Suasana antrean penonton di depan lobi bioskop jaringan XXI dan Cinepolis menjelang penayangan film nasional](https://img.antaranews.com/cache/800x533/2026/08/16/IMG_20260702_165952.jpg)

Jika sebuah film lokal di hari Kamis perdana gagal memikat antrean penonton atau minim dibicarakan di linimasa media sosial, manajemen bioskop tak akan ragu mengambil tindakan kejam. Begitu fajar hari Jumat menyingsing, jatah jam tayang film tersebut akan langsung dipangkas separuh. Dan bila situasi tak kunjung membaik saat malam minggu tiba, film itu bisa lenyap sama sekali dari jadwal studio, digantikan oleh film laris impor Hollywood yang dianggap lebih menjanjikan penjualan berondong jagung dan minuman manis. 

Situasi gladiator ini membuat para sineas independen dan produser bermodal pas-pasan harus bekerja lembur melakukan manuver promosi agresif sejak hari pertama. Mereka tahu betul bahwa tak ada ruang untuk bernapas santai. Kenyataan getir ini mengingatkan kita pada perjuangan panjang [kegetiran sineas lokal mempertahankan karya](/ketika-film-laut-bercerita-mengetuk-ingatan-kolektif-yang-coba) di hadapan hegemoni layar perak yang sangat komersial. Ditambah lagi, di era modern ketika layanan [penonton yang kecewa platform digital hobi menghapus arsip tontonan](/streaming-legal-hobi-hapus-film-lawas-saat-komunitas-torrent) kian membatasi akses masyarakat terhadap katalog sinema bermutu, bioskop konvensional tetap menjadi benteng pertahanan terakhir bagi karya lokal untuk menjemput penontonnya secara layak.

Menariknya, bagi penonton kelas pekerja dan mahasiswa berkantong tipis, tradisi rilis hari Kamis justru menjadi siasat bertahan hidup paling manjur. Di hari Kamis, tarif tiket bioskop masih bertengger pada tarif hari kerja (*weekdays*) yang ramah dompet, berkisar antara tiga puluh lima hingga empat puluh lima ribu rupiah. Bandingkan dengan tarif akhir pekan yang melonjak gila-gilaan hingga menyentuh enam puluh lima hingga delapan puluh ribu rupiah untuk selembar tiket yang sama. Menonton di hari Kamis bukan sekadar mendahului tren percakapan di media sosial, melainkan keputusan ekonomi paling rasional demi menikmati hiburan layar lebar tanpa membuat saldo rekening bulanan menangis.

Di obrolan warkop depan kampus tempat para mahasiswa seni dan penikmat film biasa nongkrong santai, siklus rilis hari Kamis selalu disambut dengan seloroh khas. Kita menyadari bahwa di balik kemilau karpet merah gala premiere dan poster mengilap di lobi bioskop, industri film kita tetaplah pertarungan keras antara modal korporasi dan selera pasar yang sulit ditebak. Maka jika kawan Anda mengajak menonton film karya anak bangsa di hari Kamis malam, sebaiknya jangan ditolak apalagi ditunda sampai pekan depan. Karena di rimba bioskop kita yang serba cepat, menunda menonton film lokal selama dua hari saja bisa berarti Anda selamanya kehilangan kesempatan melihatnya di layar lebar.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 15:00 WIB)");
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
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 BATCH SELESAI: ${results.length} artikel berhasil diaudit & dipublikasikan.`);
  console.log("=================================================================");
  for (const r of results) {
    console.log(`- [${r.status.toUpperCase()}] ${r.slug} (Skor: ${r.score}) -> ${r.url}`);
  }
}

runBatch().catch(err => {
  console.error("FATAL BATCH ERROR:", err);
  process.exit(1);
});
