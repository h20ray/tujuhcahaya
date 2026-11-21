import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Mac mini M6 Dijual Tujuh Belas Juta tapi SSD Dasarnya Masih Kikir Dua Ratus GB",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Apple", "Mac mini M6", "Hardware", "Sysadmin", "PC Desktop", "Elang Elano"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2026/11/15/Mac-mini-m6-m5.jpg",
    imageAlt: "Komputer desktop mini Apple Mac mini dengan chip M6 di atas meja kerja profesional",
    sourceUrl: "https://www.antaranews.com/berita/5855155/harga-dan-spesifikasi-mac-mini-m6-di-indonesia-mulai-rp17-juta",
    excerpt: "Apple resmi memboyong Mac mini M6 ke Indonesia dengan banderol mulai Rp17 juta berbekal cip 12-core dan ray tracing. Namun di balik klaim kecerdasan buatan serba kilat, pabrikan asal Cupertino ini masih tega menyematkan SSD dasar 256 GB yang kikir bagi pekerja kreatif.",
    content: `Ada sebuah tradisi tahunan yang tak pernah lekang oleh waktu di kalangan para perakit komputer dan teknisi studio desain saat Apple menggelar hajatan peluncuran produk: kita selalu terpana oleh keanggunan desain fisiknya, lalu beberapa menit kemudian dibuat mengurut dada oleh strategi dagangnya yang kelewat tega. Di meja kerja para pekerja lepas grafis, video editor lepasan, dan sysadmin yang sehari-hari berkutat dengan render video 4K, bodi aluminium kotak mungil Mac mini memang selalu menjadi impian ruang kerja minimalis yang sedap dipandang mata. Meja terasa lapang tanpa tumpukan kabel berantakan, sementara suara kipas pendingin nyaris senyap bak ruang kuburan.

Kini, pesona minimalis tersebut kembali hadir menyapa pasar tanah air. Sebagaimana dicatat dalam laporan Antara Tekno akhir pekan ini, Apple secara resmi telah mengumumkan kehadiran komputer desktop ringkas terbarunya, Mac mini bertenaga chip Apple M6, untuk konsumen di Indonesia. Dengan banderol harga resmi mulai dari angka Rp17 juta, raksasa teknologi asal Cupertino ini memamerkan lompatan performa yang terdengar begitu digdaya di atas kertas brosur.

![Komputer desktop mini Apple Mac mini dengan chip M6 di atas meja kerja profesional](https://img.antaranews.com/cache/800x533/2026/11/15/Mac-mini-m6-m5.jpg)

Di dalam dapur pacunya, Apple menjejalkan prosesor M6 dengan arsitektur CPU 12-core yang memadukan dua inti super, empat inti performa tinggi, dan enam inti efisiensi daya. Pengolah grafisnya mengusung GPU 12-core yang dilengkapi Neural Accelerator terintegrasi serta dukungan akselerasi perangkat keras untuk ray tracing. Tak ketinggalan, mesin ganda Dual 16-core Neural Engine digadang-gadang mampu mengeksekusi model kecerdasan buatan hingga empat kali lebih gegas dibandingkan pendahulunya di era M4. Bagi para profesional yang menaruh monitor beresolusi tinggi di studio, kotak seberat 670 gram ini sanggup menyuplai sinyal gambar ke tiga layar eksternal sekaligus dengan dukungan resolusi hingga 6K pada 60 Hz melalui colokan Thunderbolt mutakhir.

Namun begitu sorot lampu panggung promosi padam dan kita menengok tabel spesifikasi teknis paling bawah, senyum kagum itu seketika berubah menjadi dengusan masam. Di era ketika berkas mentah video rekaman ponsel pintar saja bisa menyentuh belasan gigabita dan pembaruan sistem operasi rakus memakan ruang kandar, Apple dengan percaya diri masih menjual varian dasar seharga tujuh belas juta rupiah dengan kapasitas penyimpanan internal sebesar 256 GB. Ya, Anda tidak salah baca: dua ratus lima puluh enam gigabita pada mesin yang dilabeli komputer produktivitas profesional tahun 2026.

Menjual komputer desktop seharga motor matik baru dengan penyimpanan 256 GB adalah lelucon absurd yang membuktikan betapa serakahnya rumus matematika Apple Tax. Di pasar perakitan komputer PC biasa, sekeping modul NVMe SSD berkapasitas 1 terabita generasi keempat kini bisa ditebus dengan uang saku tiga ratus ribuan rupiah di toko daring lokal. Namun bila Anda adalah seorang desainer grafis atau editor audio yang berniat melipatgandakan ruang penyimpanan Mac mini M6 menjadi 512 GB atau 1 TB saat memesan unit resmi, Apple menuntut tambahan mahar jutaan rupiah yang sanggup menguras tabungan darurat sebulan penuh.

Kekikiran dalam menentukan konfigurasi dasar ini kian menjengkelkan saat kita menyadari bahwa banderol tujuh belas juta rupiah tersebut hanyalah tiket masuk paling polos. Anda hanya membawa pulang satu buah kotak aluminium perak bersama kabel daya. Pengguna masih harus merogoh kocek sendiri untuk membeli monitor, keyboard mekanikal, serta [membeli mouse trackball ergonomis](/keychron-bikin-mouse-trackball-fleksibel-tapi-encok-pekerja) agar pergelangan tangan tidak nyeri saat mengejar tenggat kerja harian. Komputer mungil ini seolah sengaja dirancang untuk memancing konsumen masuk ke dalam perangkap belanja periferal dan langganan awan berbayar tanpa henti.

Kebijakan monopolistik semacam ini sejatinya bukanlah hal baru bagi para pengamat ekosistem Apple. Pola penguncian dompet konsumen ini setali tiga uang dengan manuver mereka saat [Apple mengunci akses forum komunitas](/apple-gembok-forum-komunitas-28-tahun-demi-menggiring-pengguna-ke) demi mengarahkan pengguna ke layanan dukungan berbayar. Seluruh arsitektur chip unibody yang menyolder chip memori dan modul penyimpanan secara mati ke atas motherboard membuat pengguna mustahil melakukan peningkatan kapasitas mandiri di masa depan. Jika kandar internal penuh, pilihannya cuma dua: membeli langganan penyimpanan awan bulanan atau menenteng hard disk eksternal ke mana pun kaki melangkah, merusak keindahan meja kerja minimalis yang dijanjikan sejak awal.

Di tongkrongan warung kopi tempat kawan-kawan pekerja lepas dan pekerja kreatif biasa berbagi colokan listrik, kabar rilisnya Mac mini M6 ini cuma memicu obrolan jenaka yang sarat ironi. Kita tentu mengakui kepiawaian para insinyur Apple dalam merancang cip silikon yang luar biasa kencang sekaligus dingin di dalam bodi sekecil kotak bekal makan siang. Namun ketika sebuah komputer bertenaga kecerdasan buatan tercanggih di muka bumi masih memaksa pemiliknya rajin menghapus berkas cache dan menghemat ruang penyimpanan seperti pengguna ponsel murah era 2015, kita disadarkan kembali bahwa kemajuan teknologi sering kali takluk di hadapan nafsu margin laba korporasi.`
  },
  {
    title: "Studio Game Abad Pertengahan Bangkrut Seharian Sebelum Diselamatkan Dolar Swedia",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Chronicles Medieval", "Raw Power Games", "Coffee Stain", "Industri Game", "PC Gaming", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/XKegTpWNWNwSysdkzRKN3o-1920-80.jpg",
    imageAlt: "Pasukan ksatria berkuda bersiap menyerbu dalam cuplikan permainan strategi Chronicles Medieval",
    sourceUrl: "https://www.pcgamer.com/games/strategy/chronicles-medieval-developer-declared-bankruptcy-on-the-day-it-announced-it-was-in-trouble-but-development-will-continue-after-a-usd5-million-reprieve-from-coffee-stain/",
    excerpt: "Pengembang game strategi Chronicles: Medieval menyatakan bangkrut tepat di hari mereka mengumumkan krisis finansial, sebelum diselamatkan publisher Coffee Stain lewat suntikan dana Rp86 miliar. Drama kilat ini menelanjangi rapuhnya nasib studio independen di era modern.",
    content: `Bagi para penikmat game strategi di platform PC yang gemar menghabiskan malam memandangi peta benua Eropa sembari mengatur formasi barisan kavaleri berkuda, ada satu romantisme tersendiri yang sulit digantikan oleh genre lain: kita menyukai kepuasan taktis saat membangun sebuah dinasti kecil dari puing-puing kemiskinan menjadi kerajaan adidaya yang disegani lawan. Namun ironisnya, seni bertahan hidup di medan perang fiktif abad pertengahan tersebut ternyata jauh lebih mudah ketimbang cara studio game independen mempertahankan saldo rekening kas perusahaan di dunia nyata.

Realitas brutal yang menyayat hati ini baru saja dipertontonkan secara dramatis di panggung industri game Eropa. Sebagaimana dicatat dalam laporan mendalam PC Gamer akhir pekan ini, pengembang game asal Copenhagen, Raw Power Games, mengalami salah satu peristiwa paling menyesakkan dada dalam sejarah studio modern. Studio yang tengah sibuk menggarap game strategi sejarah ambisius bertajuk Chronicles: Medieval tersebut mengumumkan kepada publik bahwa mereka tengah diterpa badai kesulitan likuiditas yang parah. Tak butuh waktu berhari-hari bagi kabar duka itu untuk memburuk; tepat pada hari yang sama saat pengumuman itu disiarkan, Raw Power Games langsung resmi mengajukan permohonan pailit ke pengadilan setempat akibat kehabisan uang operasional.

![Pasukan ksatria berkuda bersiap menyerbu dalam cuplikan permainan strategi Chronicles Medieval](https://cdn.mos.cms.futurecdn.net/XKegTpWNWNwSysdkzRKN3o-1920-80.jpg)

Beruntung, nasib proyek game yang sempat memikat ribuan gamer saat debut perdananya di ajang Summer Game Fest tahun lalu itu tidak langsung terkubur ke dalam liang lahad. Di saat-saat kritis proses lelang aset kepailitan, penerbit game ternama asal Swedia, Coffee Stain—yang tersohor berkat kesuksesan game pabrik simulasi Satisfactory—bergerak cepat menyodorkan tawaran akuisisi penyelamatan. Coffee Stain mengucurkan dana sebesar 36,75 juta Krona Denmark, atau setara dengan 5,42 juta dolar Amerika Serikat (sekitar Rp86 miliar), untuk menebus seluruh aset dan hak kekayaan intelektual Chronicles: Medieval dari kurator pengadilan.

Alih-alih menelan mentah-mentah aset tersebut ke dalam kantor pusat mereka, manajemen Coffee Stain memilih skema kemitraan yang terbilang unik dan melegakan nurani. Mereka mendirikan sebuah badan usaha baru yang kepemilikannya dibagi: 75 persen saham dipegang oleh Coffee Stain sebagai penyandang modal utama, sementara 25 persen sisanya diserahkan cuma-cuma kepada kelompok kecil tim pengembang inti asli game tersebut. Dengan dana segar tersebut, pengerjaan game dipastikan terus berjalan dengan target rilis versi akses awal (*early access*) di Steam pada 2027 mendatang.

Kendati kisah ini berujung pada resolusi yang tampak manis bak dongeng penyelamatan pangeran berkuda putih, peristiwa pailitnya Raw Power Games sejatinya menelanjangi borok krisis sistemik yang kian mencengkeram leher para kreator game PC. Di balik sorak-sorai gamer yang gembira karena game favorit mereka batal dibatalkan, drama satu hari ini adalah alarm bahaya betapa rapuhnya ekosistem pengembang mandiri saat ini. Ongkos riset grafis berkualitas tinggi, gaji insinyur mesin permainan, dan biaya lisensi perangkat lunak modern telah membengkak ke tingkat yang tidak masuk akal, sementara investor modal ventura kian pelit menyalurkan dana jika sebuah game tidak menjanjikan model monetisasi gacha atau tiket langganan musiman.

Krisis finansial yang menimpa studio di Copenhagen ini menambah panjang daftar kegelisahan para pembuat game di seantero dunia. Kita kerap menyaksikan bagaimana [developer indie nekat merilis game di Steam](/developer-indie-nekat-rilis-game-di-steam-saat-publisher-raksasa) di tengah jadwal padat hanya demi menghindari bayang-bayang raksasa komersial dan menyambung napas dapur kantor. Ketakutan akan kegagalan komersial kini menjadi teror harian yang nyata, persis seperti rentetan skandal saat [penutupan studio game akibat proyek hambar](/bandai-namco-tutup-studio-unknown-9-bukti-ambisi-transmedia) yang memaksa ratusan pekerja terampil kehilangan mata pencaharian hanya gara-gara salah kalkulasi tren pasar oleh para eksekutif puncak.

Gamer akar rumput yang saban hari menyisihkan uang jajan demi memburu diskon akhir pekan di Steam tentu mafhum bahwa industri kreatif ini sedang tidak baik-baik saja. Ketika sebuah studio harus melewati jurang kebangkrutan resmi dan menjual sebagian besar saham kedaulatannya kepada pemodal luar hanya agar bisa menyelesaikan baris-baris kode permainan, kita tahu ada sesuatu yang rusak dalam tata kelola industri hiburan modern. Tidak semua pengembang berbakat punya keberuntungan seperti Raw Power Games yang mendadak diselamatkan oleh kemurahan hati penerbit mapan.

Di pos ronda warkop tempat anak-anak muda biasa adu taktik bermain game strategi sembari menyeruput kopi panas, kabar selamatnya Chronicles: Medieval ini disambut dengan desah napas lega bercampur cemas. Kita tentu bersyukur bahwa karya seni para pemrogram Denmark ini tidak lenyap menjadi berkas digital tanpa nyawa di server pengadilan kepailitan. Namun hingga tombol beli resmi menyala di etalase digital nanti, kita diingatkan kembali bahwa perang paling berdarah dalam sejarah game strategi abad pertengahan bukanlah perebutan benteng batu berparit, melainkan perjuangan para pembuatnya untuk tidak bangkrut sebelum tanggal rilis tiba.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 19:00 WIB)");
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
