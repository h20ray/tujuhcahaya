import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Chip Nvidia Senilai Ratusan Miliar Raib Tanpa Jejak di Jalan Tol",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Nvidia", "Hardware", "Kecerdasan Buatan", "Industri Semikonduktor", "Kejahatan Siber", "Logistik"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2026/11/GettyImages-2303158972-1152x648.jpg",
    imageAlt: "Deretan rak server pusat data dan perangkat keras pemrosesan grafis Nvidia",
    sourceUrl: "https://arstechnica.com/gadgets/2026/11/nvidia-hardware-worth-11-4m-vanished-between-oakland-and-texas/",
    excerpt: "Enam palet chip Nvidia senilai Rp180 miliar mendadak lenyap di jalan tol AS. Di tengah gegap gempita revolusi AI, konvoi chip termahal di bumi ternyata tak berdaya di hadapan pencuri kargo.",
    content: `Di setiap panggung seminar teknologi dan konferensi pers Silicon Valley, para petinggi industri semikonduktor hampir selalu berbicara layaknya juru selamat peradaban. Mereka memamerkan bagaimana cip akselerator kecerdasan buatan rancangan terbaru sanggup memproses triliunan parameter data dalam hitungan milidetik, mengenali wajah buronan dari kejauhan satelit, hingga meramalkan cuaca buruk berminggu-minggu sebelum badai mendarat. Di hadapan para investor Wall Street, dunia masa depan digambarkan begitu presisi, serba otomatis, dan nyaris mustahil disusupi celah kekeliruan.

Namun segala kemegahan narasi futuristik itu mendadak tampak konyol ketika dihadapkan pada realitas jalan raya antarnegara bagian. Sebagaimana dicatat dalam laporan investigasi Ars Technica pekan ini, muatan perangkat keras berharga milik Nvidia senilai 11,4 juta dolar Amerika Serikat—atau setara dengan Rp180 miliar—dilaporkan lenyap tanpa bekas dalam perjalanan logistik darat dari Oakland menuju Texas. Enam palet penuh berisi komponen pemrosesan grafis mutakhir raib bak ditelan bumi, dan setelah lebih dari dua bulan penyelidikan berlangsung, aparat kepolisian setempat masih meraba-raba kegelapan tanpa satu pun nama tersangka di tangan.

Kabar hilangnya muatan bernilai fantastis ini tentu memicu gelak tawa satir di kalangan pengamat teknologi siber. Bayangkan ironinya: kita sedang membicarakan komponen paling dicari di kolong langit saat ini, perangkat keras yang menjadi rebutan para konglomerat komputasi awan dan memicu perang dagang geopolitik antarbangsa. Namun ketika tiba urusan memindahkan tumpukan lempeng silikon supermahal tersebut dari satu gudang ke fasilitas perakitan, sistem pengawalan yang dipakai ternyata tidak jauh berbeda dengan cara pedagang beras antarkota mengirimkan karung gabah di atas bak truk tronton.

![Deretan rak server pusat data dan perangkat keras pemrosesan grafis Nvidia](https://cdn.arstechnica.net/wp-content/uploads/2026/11/GettyImages-2303158972-1152x648.jpg)

Peristiwa pembajakan kargo ini sesungguhnya menyingkap tabir kerapuhan akut yang selama ini disembunyikan rapat-rapat oleh industri komputasi modern. Di balik klaim efisiensi algoritma dan keamanan siber berlapis, rantai pasok fisik teknologi tinggi nyatanya masih bertumpu pada infrastruktur konvensional yang sangat rentan. Fenomena serupa pernah terlihat ketika [pemasok chip angkat kaki dari rantai pasok](/pemasok-chip-angkat-kaki-dan-nasib-kaset-game-fisik-yang-kian), yang seketika melumpuhkan ketersediaan perangkat keras di berbagai belahan bumi. Ketika pasokan langka dan harga pasar gelap melonjak gila-gilaan, sindikat kriminal tidak perlu repot meretas enkripsi server; mereka cukup mencegat sopir truk di tempat peristirahatan jalan tol yang remang-remang.

Pencurian bermodal keberanian lapangan ini juga menjadi tamparan telak bagi arogansi korporasi kecerdasan buatan. Selama dua tahun terakhir, publik terus dijejali ketakutan bahwa mesin cerdas bakal mengambil alih seluruh fungsi pekerjaan manusia. Nyatanya, untuk urusan melacak enam kotak kayu bernilai ratusan miliar rupiah yang hilang di jalan tol, algoritma pelacak tercanggih sekalipun tidak berdaya tanpa laporan saksi mata dan rekaman kamera pengawas buram di pinggir pom bensin. Ambisi korporasi yang begitu bernafsu memperluas fasilitas pusat data, yang sering kali mengingatkan kita pada bagaimana [trik korporasi teknologi menguras data pengguna](/ketika-meta-mengira-pengelola-halaman-facebook-tak-membaca-syarat), ternyata sering kali melupakan prinsip paling mendasar: menjaga barang fisik di alam nyata.

Bagi masyarakat yang mengamati dari kejauhan, drama raibnya kargo chip Nvidia menghadirkan humor gelap yang menyegarkan. Sementara CEO Jensen Huang terus berkeliling dunia mengenakan jaket kulit ikoniknya sembari menjanjikan revolusi industri keempat, entah di sudut garasi mana di pelosok Amerika sana ada sekelompok pencuri amatir yang barangkali sedang kebingungan menatap tumpukan papan sirkuit mahal yang bahkan tidak bisa dicolokkan ke stopkontak rumah biasa.

Lain kali jika ada konsultan teknologi yang sesumbar bahwa kecerdasan buatan sanggup menyelesaikan segala persoalan manusia, cukup ingatkan mereka dengan santai tentang kisah enam palet chip di Texas ini. Sebab secanggih apa pun baris kode biner yang dipamerkan di atas kertas, dunia nyata tetaplah panggung liar di mana sebuah truk kargo sederhana bisa mendadak menguap bersama ratusan miliar rupiah harapan Silicon Valley.`
  },
  {
    title: "Ketika Wajah Komunitas Game Dicampakkan Setelah Habis Manis Sepah Dibuang",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Industri Game", "Hunt Showdown", "Crytek", "Komunitas Gamer", "PHK Game", "PC Gaming"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/guRENWiogEnRFh78VTeCuG-1920-80.jpg",
    imageAlt: "Tampilan visual karakter pemburu dan suasana rawa kelam dalam game Hunt Showdown",
    sourceUrl: "https://www.pcgamer.com/games/fps/it-came-out-of-nowhere-i-was-shocked-and-sad-he-was-the-face-of-hunt-showdown-for-years-then-crytek-laid-him-off/",
    excerpt: "Crytek mendadak memecat Beka Gyorfi, sosok pengelola komunitas yang bertahun-tahun menjadi nyawa Hunt: Showdown. Loyalitas tulus terbukti cuma komoditas murah di mata korporasi game.",
    content: `Bagi siapa pun yang rutin menghabiskan akhir pekan menyusuri rawa-rawa beracun Louisiana dalam game tembak-menembak *Hunt: Showdown*, sosok Beka "Bence" Gyorfi tentu bukan pemandangan yang asing. Selama bertahun-tahun, pria ramah berkacamata ini adalah representasi paling hidup dari pengembang Crytek. Ketika server mendadak tumbang di tengah malam, pembaruan patch memicu gelombang bug yang membuat pemain meradang, atau ketika komunitas menuntut kejelasan peta jalan konten baru, Bence adalah orang pertama yang rela duduk berjam-jam di depan kamera siaran langsung (*livestream*), menenangkan amarah pemain dengan senyum tulus dan kesabaran tanpa batas.

Namun dalam ekosistem industri video game korporat yang kian dingin, dedikasi emosional semacam itu rupanya tidak memiliki nilai tawar di hadapan tabel kalkulasi Microsoft Excel. Sebagaimana dicatat dalam laporan eksklusif PC Gamer pekan ini, Crytek secara mendadak mengumumkan pemutusan hubungan kerja terhadap Bence tanpa peringatan awal. Dalam unggahan perpisahannya yang mengharukan, Bence mengaku terkejut dan patah hati mendapati dirinya terdepak dari proyek yang telah ia rawat sepenuh jiwa selama lima tahun terakhir.

Kabar pemecatan ini langsung memicu ledakan simpati sekaligus kemarahan luas di forum Reddit, Discord, hingga kolom komentar media sosial. Reaksi keras para pemain sangat bisa dipahami. Mengelola komunitas game kompetitif bukanlah pekerjaan mudah yang bisa digantikan oleh kecerdasan buatan atau bot penjawab otomatis. Pekerjaan ini menuntut stamina empati yang luar biasa: mendengarkan keluh kesah ribuan gamer yang temperamental, menyaring masukan teknis dari para pemain pro, sembari melindungi martabat para pembuat game di internal studio dari caci maki publik.

![Tampilan visual karakter pemburu dan suasana rawa kelam dalam game Hunt Showdown](https://cdn.mos.cms.futurecdn.net/guRENWiogEnRFh78VTeCuG-1920-80.jpg)

Ironisnya, manajemen Crytek justru memilih mencampakkan figur yang paling dipercaya oleh komunitas tepat ketika game tersebut sedang berjuang mempertahankan basis pemain setianya. Tragedi ini sejatinya mengulang pola bobrok serupa yang belakangan melanda studio-studio besar dunia, mengingatkan kita pada bagaimana [gelombang efisiensi korporat menghancurkan studio game legendaris](/ketika-ribuan-gamer-memohon-pemerintah-kanada-selamatkan-bioware) tanpa memedulikan warisan karya yang telah dibangun puluhan tahun. Ketika tekanan investor mulai menuntut pemangkasan anggaran operasional, divisi komunitas dan kehumasan garis depan hampir selalu menjadi tumbal pertama yang disembelih para direksi.

Perlakuan kejam terhadap staf komunitas ini mempertegas fakta pahit bahwa industri hiburan digital kiwari telah kehilangan jiwa kemanusiaannya. Penerbit game tidak lagi memandang interaksi sosial antara pembuat karya dan penggemar sebagai fondasi kelangsungan hidup mereka. Dalam cara pandang manajemen modern yang rakus mengejar pertumbuhan instan, hubungan emosional hanyalah trik pemasaran sementara untuk memancing pemain membeli tiket pertempuran musiman (*battle pass*). Sikap dingin ini sangat mirip dengan bagaimana [penerbit game memeras dompet pemain demi mengejar dividen investor](/laba-sony-melonjak-berkat-spider-man-tapi-dompet-gamer-tetap), di mana semua hal diukur murni berdasarkan efisiensi rasio biaya terhadap pendapatan.

Bagi para gamer yang selama ini setia menemani perjalanan sebuah judul game, peristiwa ini menghadirkan rasa getir yang mendalam. Kita disadarkan kembali bahwa di balik kemasan promosi ramah bertajuk "kami mendengarkan komunitas", perusahaan game pada hakikatnya tetaplah mesin korporat tanpa nurani. Mereka tidak segan menendang sosok yang telah berpeluh keringat membangun jembatan persahabatan, demi menyelamatkan beberapa digit persentase pada laporan keuangan akhir tahun.

Crytek barangkali bisa menghemat sedikit anggaran gaji bulanan dengan menyingkirkan figur seperti Bence dari daftar penggajian mereka. Namun mereka lupa bahwa kepercayaan komunitas yang telah hancur tidak bisa dibeli kembali dengan diskon koin digital di toko dalam game. Sekali pemain menyadari bahwa manusia di balik layar studio mereka diperlakukan layaknya suku cadang bekas yang gampang dibuang, kehangatan sebuah game akan menguap dan yang tersisa hanyalah kekosongan kode biner yang dingin.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 05:00 WIB)");
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

    results.push({
      title: art.title,
      slug: pubResult.slug,
      status: pubResult.status,
      score: audit.score,
      wordCount,
      url: pubResult.url,
      byline: art.byline,
      dbSaved: pubResult.dbSaved,
      remotePublished: pubResult.remotePublished
    });
  }

  console.log("\n=================================================================");
  console.log("🎉 SELURUH ARTIKEL BATCH BERHASIL DITERBITKAN!");
  console.log("=================================================================\n");
  console.log(JSON.stringify(results, null, 2));
}

// Execute if run directly
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261107-0500.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Failed:", err);
    process.exit(1);
  });
}
