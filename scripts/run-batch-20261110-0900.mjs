import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Bos Skydance Puji AI Setinggi Langit Sementara Pengembang Game Malah Didepak",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "David Ellison", "Industri Game", "Kecerdasan Buatan", "PHK Massal", "Paramount", "Skydance Games", "Video Game"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/wKbv8zjAaUe8ogbgTPav7N-1920-80.jpg",
    imageAlt: "Gedung kantor dan logo studio game di bawah naungan korporasi media hiburan Skydance dan Paramount",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/a-month-after-paramount-acquired-warner-bros-discovery-its-merged-game-division-is-laying-people-off/",
    excerpt: "Baru sebulan merampungkan mega-merger bernilai puluhan miliar dolar, Paramount Skydance langsung memangkas puluhan staf di divisi video game. Ironisnya, di pekan yang sama sang CEO David Ellison justru sesumbar di hadapan investor bahwa kecerdasan buatan adalah pembuka gerbang kreativitas terbesar dalam sejarah.",
    content: `Bagi para pekerja kreatif di industri video game, janji manis para petinggi korporasi saat mengumumkan aksi akuisisi atau merger perusahaan biasanya berumur sangat pendek. Di atas panggung konferensi pers, para eksekutif berjas rapi selalu fasih mengumbar narasi klise soal sinergi bisnis, masa depan hiburan yang gemilang, dan komitmen membesarkan tim pengembang internal. Namun begitu dokumen kerja sama ditandatangani dan sorotan lampu kamera mulai padam, realitas pahit selalu datang mengetuk pintu meja kerja karyawan lapis bawah. Yang terjadi kemudian bukanlah lonjakan proyek impian, melainkan pemotongan anggaran serampangan dan pemutusan hubungan kerja massal yang membuang talenta manusia demi memoles laporan margin laba jangka pendek.

Pemandangan ironis tersebut kembali berulang di ranah hiburan global pekan ini. Sebagaimana dicatat dalam laporan investigasi PC Gamer dan Variety, studio Skydance Games resmi mengumumkan pemangkasan jumlah karyawan serta pembatalan sejumlah proyek internal hanya sebulan setelah induk perusahaan mereka menuntaskan proses merger raksasa dengan Paramount. Dalam keterangan resmi yang beredar kepada para mitra industri, manajemen Skydance berkilah bahwa langkah pahit ini terpaksa diambil demi merampingkan portofolio produksi dan menyesuaikan skala bisnis pasca-merger. Puluhan pengembang game, mulai dari perancang level, artis 3D, hingga programmer gameplay yang telah bekerja lembur berbulan-bulan, mendadak dipaksa mengemasi meja kerja mereka tanpa kepastian masa depan.

Namun yang membuat dada para pekerja kian sesak adalah sikap sang pemimpin tertinggi korporasi. Tepat pada pekan yang sama saat ratusan staf divisi game cemas menunggu nasib, Chief Executive Officer Paramount Skydance David Ellison justru berbicara lantang dalam panggilan pendapatan kuartalan bersama para investor Wall Street. Dalam forum para pemodal tersebut, sang pimpinan korporasi dengan percaya diri sesumbar bahwa teknologi generative AI bakal menjadi kunci pembuka gerbang kreativitas terbesar sepanjang peradaban modern. Ia bahkan menyebut kecerdasan buatan akan merevolusi seluruh proses produksi hiburan, mempercepat siklus pembuatan konten visual, serta memangkas biaya operasional secara radikal.

![Gedung kantor dan logo studio game di bawah naungan korporasi media hiburan Skydance dan Paramount](https://cdn.mos.cms.futurecdn.net/wKbv8zjAaUe8ogbgTPav7N-1920-80.jpg)

Mendengar seorang konglomerat memuji keajaiban software otomatis saat karyawannya sendiri baru saja kehilangan mata pencaharian terasa seperti sebuah penghinaan terang-terangan terhadap akal sehat. Pernyataan bombastis soal masa depan teknologi tersebut kian mengonfirmasi kecurigaan publik bahwa pemujaan berlebihan terhadap automasi hanyalah dalih korporat untuk melegalkan pemangkasan tenaga kerja manusia. Pola efisiensi brutal ini mengingatkan kita pada [gelombang pemecatan pengembang game serupa](/tripwire-depak-36-karyawan-seminggu-setelah-pamer-ekspansi-divisi) yang memperlihatkan bagaimana developer berbakat selalu dijadikan tumbal pertama saat perusahaan ingin mengamankan pembagian dividen. Siasat ini setali tiga uang dengan parade [janji manis alat kecerdasan buatan](/disney-gandeng-adobe-bikin-alat-ai-mandiri-berdalih-memanjakan) yang diobral raksasa media barat, di mana ilusi teknologi canggih dipakai untuk menutupi niat asli mengurangi ongkos produksi buruh kreatif.

Memperlakukan karya video game semata-mata sebagai rentetan aset digital yang bisa dirakit lewat instruksi prompt bot adalah kekeliruan fatal yang terus dipelihara para pemilik modal. Game legendaris yang membekas di hati jutaan pemain lahir dari tetes keringat, dedikasi artistik, dan sentuhan rasa para animator, komposer musik, serta penulis naskah manusia yang mendedikasikan hidupnya di balik layar monitor. Jika para petinggi korporasi lebih memilih mengorbankan tangan-tangan terampil demi mengejar ilusi efisiensi algoritma di bursa saham, jangan kaget jika judul game yang mereka telurkan di masa depan hanya akan menjadi komoditas hampa tanpa jiwa yang lekas dilupakan para pemain.`
  },
  {
    title: "Iga Massardi Rilis Ambivalensi Bukti Musisi Rock Menolak Tunduk Pada Algoritma",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Ambivalensi", "Barasuara", "Frekuensi Antara Music", "Iga Massardi", "Industri Musik", "Margaretha Nina", "Musik Indie", "Rock Indonesia"],
    imageUrl: "https://rri-portal-app-assets.obs.ap-southeast-4.myhuaweicloud.com/upload/berita/image/cirebon/thumbs/xl_1794230019195195_36c137fde9_berita_cirebon.webp",
    imageAlt: "Musisi dan vokalis Iga Massardi saat mengenakan busana khas panggung dalam sesi peluncuran karya musik terbarunya",
    sourceUrl: "https://rri.co.id/cirebon/hiburan/2883255/iga-massardi-gabung-frekuensi-antara-music-rilis-ambivalensi",
    excerpt: "Iga Massardi resmi menggandeng label Frekuensi Antara Music dan merilis lagu solo terbaru berjudul Ambivalensi. Di tengah industri musik yang dicekik tren serba instan TikTok dan potongan chorus lima belas detik, langkah sang vokalis Barasuara ini menjadi pembuktian bahwa integritas artistik rock alternatif masih sanggup bernapas lega.",
    content: `Dunia musik populer hari ini kerap kali terasa seperti pabrik makanan cepat saji yang membosankan. Algoritma aplikasi video pendek dan platform streaming digital telah mendikte para pencipta lagu untuk merombak struktur karya mereka agar sesuai dengan rentang perhatian pendengar yang kian menyusut. Bagian intro lagu dipangkas habis, ketukan drum dipaksa masuk di detik pertama, lirik dibuat seringan mungkin demi mengejar tren konten media sosial, dan bagian reff lagu diulang berkali-kali supaya gampang dicaplok menjadi latar video viral. Dalam ekosistem yang serba seragam tersebut, musik perlahan kehilangan kedalaman rasa dan cuma diperlakukan sebagai umpan statistik penarik klik receh.

Di tengah arus tren instan yang kian menyesakkan dada, kabar melegakan datang dari salah satu garda terdepan musik independen tanah air. Sebagaimana dikutip dari laporan RRI dan pengumuman resmi sang musisi di media sosial, vokalis sekaligus gitaris Barasuara, Iga Massardi, resmi mengumumkan babak baru perjalanan musikalnya dengan bergabung bersama label Frekuensi Antara Music. Langkah kerja sama strategis ini langsung ditandai dengan peluncuran karya solo terbarunya yang bertajuk Ambivalensi. Lewat lagu anyar tersebut, Iga menghadirkan lanskap bebunyian yang kontemplatif, meramu kepekaan lirik puitis khasnya dengan eksplorasi aransemen yang menolak tunduk pada rumus baku tangga lagu arus utama.

Pilihan Iga untuk menempuh rute solo bersama label anyar sekaligus mempertegas reputasinya sebagai seniman yang pantang mendikte karyanya demi selera pasar murah. Sejak era kebersamaannya dengan band terdahulu hingga membesarkan Barasuara lewat kemeja batik dan raungan distorsi gitarnya yang khas, Iga selalu konsisten menyuguhkan musik yang menuntut pendengar untuk benar-benar menyimak, bukan sekadar menjadikannya suara latar sambil lalu. Judul "Ambivalensi" sendiri menyiratkan pertarungan batin manusia modern yang kerap terbelah di antara dua kutub perasaan yang berlawanan, sebuah tema filosofis yang jarang disentuh oleh lagu-lagu komersial di stasiun radio swasta.

![Musisi dan vokalis Iga Massardi saat mengenakan busana khas panggung dalam sesi peluncuran karya musik terbarunya](https://rri-portal-app-assets.obs.ap-southeast-4.myhuaweicloud.com/upload/berita/image/cirebon/thumbs/xl_1794230019195195_36c137fde9_berita_cirebon.webp)

Namun merawat idealisme berkarya di tengah industri hiburan nasional jelas bukan jalan santai tanpa batu sandungan. Di luar euforia rilisan baru di jagat maya, realitas skena seni independen lokal masih dihadapkan pada minimnya ruang pertunjukan mandiri yang sehat. Kondisi [panggung musisi lokal yang masih megap-megap](/kemenpar-pamer-konser-ye-sedot-turis-asing-saat-panggung-musisi) akibat serbuan konser impor bermodal raksasa membuat para pencipta karya alternatif harus berjuang dua kali lipat lebih keras agar suaranya bisa didengar. Kegigihan para musisi mandiri ini seirama dengan [perjuangan musisi menembus festival internasional](/musisi-indie-menembus-new-york-city-saat-pejabat-baru-sibuk) yang membuktikan bahwa daya tahan artistik selalu lahir dari komitmen akar rumput, bukan dari belas kasihan korporasi rekaman raksasa.

Kehadiran karya seperti Ambivalensi adalah tamparan segar bagi mereka yang mengira bahwa masa depan musik Indonesia sudah sepenuhnya diserahkan kepada selera bot media sosial. Selama masih ada musisi yang berani meracik harmoni rumit, merawat diksi yang bernas, dan membiarkan karyanya bernapas secara wajar tanpa tergesa-gesa memburu viralitas semalam, kita tahu bahwa denyut nadi musik tanah air masih berdetak kencang di tangan seniman yang berdaulat.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 09:00 WIB)");
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
  console.log(`🎉 Batch Publikasi 09:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261110-0900.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
