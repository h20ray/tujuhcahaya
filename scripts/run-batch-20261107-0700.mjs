import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Rockstar Mengobral Game GTA Jadul di Platform yang Ditinggal GTA 6",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["GTA 6", "Rockstar Games", "PC Gaming", "Steam", "Industri Game", "Gamer Indonesia"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/Ga8N8nrBc2G2kBQqNRkFSG-1920-80.jpg",
    imageAlt: "Tangkapan layar karakter dan kendaraan dalam kompilasi game Grand Theft Auto klasik di PC",
    sourceUrl: "https://www.pcgamer.com/games/grand-theft-auto/rockstars-having-sale-on-old-gta-games-on-the-only-platform-grand-theft-auto-6-isnt-coming-to-ours/",
    excerpt: "Rockstar Games mendadak menggelar diskon besar-besaran untuk katalog game GTA lawas khusus di Steam. Bukannya girang, komunitas gamer PC justru merasa sedang diejek terang-terangan: disuruh bernostalgia dengan game belasan tahun lalu sementara GTA 6 mengunci pintu rapat-rapat.",
    content: `Membuka etalase digital Steam di akhir pekan biasanya menjadi ritual pelepas penat yang menyenangkan bagi para gamer komputer. Di tengah tumpukan daftar keinginan (*wishlist*) yang tak kunjung dibeli, kita selalu berharap ada keajaiban berupa potongan harga menggiurkan untuk judul-judul game incaran terbaru. Namun pemandangan di beranda toko daring milik Valve akhir pekan ini justru memantik tawa getir sekaligus rasa kesal yang sulit disembunyikan.

Banner raksasa yang terpampang di halaman depan bukan memamerkan tanggal rilis karya agung masa depan, melainkan promosi obral game-game uzur waralaba Grand Theft Auto yang sudah tamat dimainkan orang sejak zaman rental PlayStation atau warnet berlayar tabung cembung.

Sebagaimana dicatat dalam laporan PC Gamer dan GamesRadar pekan ini, Rockstar Games secara mengejutkan meluncurkan diskon besar-besaran untuk katalog game GTA klasik khusus di platform PC. Dua paket utama diobral dengan harga miring: *Grand Theft Auto: The Trilogy – The Definitive Edition* (berisi GTA 3, Vice City, dan San Andreas) dipangkas 67 persen menjadi sekitar 19 dolar, sementara *Grand Theft Auto 4: Complete Edition* beserta dua ekspansi ceritanya dilepas dengan diskon 70 persen di angka 6 dolar saja. Catatan dari situs pelacak harga Isthereanydeal menunjukkan bahwa banderol ini merupakan titik harga terendah sepanjang sejarah penjualan bundel tersebut di PC.

Kabar potongan harga ini di atas kertas terdengar seperti kabar gembira bagi siapa saja yang ingin bernostalgia menyusuri jalanan Liberty City bersama Niko Bellic. Namun bagi komunitas pengguna komputer pribadi yang paham duduk perkaranya, diskon mendadak ini terasa tak ubahnya lelucon satir bernada ejekan (*trolling*) dari Rockstar Games. Pasalnya, diskon istimewa tersebut hanya diberikan untuk etalase PC—satu-satunya platform yang secara resmi dianaktirikan dan ditinggalkan dari jadwal peluncuran akbar Grand Theft Auto 6 pada 19 November mendatang.

![Tangkapan layar karakter dan kendaraan dalam kompilasi game Grand Theft Auto klasik di PC](https://cdn.mos.cms.futurecdn.net/Ga8N8nrBc2G2kBQqNRkFSG-1920-80.jpg)

Situasi ini menghadirkan ironi komedi tingkat tinggi di panggung industri video game. Para pemilik konsol PlayStation 5 dan Xbox Series X/S yang siap menyambut petualangan Jason dan Lucia di kota Vice City sama sekali tidak kebagian diskon game jadul ini. Sebaliknya, jutaan gamer PC yang selama berbulan-bulan gigit jari karena komputernya tidak dianggap layak mencicipi GTA 6 di hari pertama, justru disodori tumpukan kaset lama yang sudah berdebu. Sikap Rockstar seolah berbisik dengan santai ke telinga para pemain PC: "Kalian memang tidak boleh main GTA 6 tahun ini, tapi ini kami beri diskon murah meriah untuk memainkan kembali game yang sudah kalian khatamkan sepuluh tahun lalu."

Bagi siapa pun yang rutin mengikuti dinamika industri, perlakuan diskriminatif semacam ini tentu bukan barang baru. Pola lama ini menegaskan kembali catatan tentang [ketika mayoritas gamer PC rela pasang badan menunggu GTA 6](/ketika-mayoritas-gamer-pc-rela-pasang-badan-menunggu-gta-6) daripada harus merogoh kocek belasan juta rupiah demi membeli mesin konsol baru yang hanya dipakai untuk satu judul game. Komunitas komputer sudah kenyang dengan siasat licik penerbit yang sengaja menunda versi PC selama satu atau dua tahun. Tujuannya sangat transparan dan sudah terbaca sejak era peluncuran GTA 5: memancing rasa tidak sabar para pemain agar mereka rela membeli game yang sama sebanyak dua kali alias *double dipping*.

Obsesi bisnis yang serba diperhitungkan ini semakin melengkapi manuver korporat yang sebelumnya terlihat saat [bos Take-Two santai hadapi pembajakan GTA 6 tapi bikin pemain waswas](/ketika-bos-take-two-santai-hadapi-pembajakan-gta-6-tapi-bikin). Di mata para pemegang saham, loyalitas komunitas pengguna PC hanyalah angka statistik cadangan yang baru akan diperas ketika grafik penjualan konsol mulai melandai. Mengobral game lawas di Steam pada hakikatnya hanyalah trik kehumasan murah untuk menjaga nama waralaba tetap menjadi topik perbincangan harian di internet tanpa harus mengeluarkan biaya produksi tambahan sepeser pun.

Gamer PC di tanah air barangkali bisa tersenyum kecut melihat tawaran obral tersebut. Mengulang kembali misi mengantar ambulans di Vice City atau mendengarkan stasiun radio Vladivostok FM di GTA 4 memang tetap menyenangkan untuk mengisi waktu luang. Namun bagi Rockstar Games, sebaiknya jangan terlalu percaya diri mengira bahwa obral game uzur ini sanggup membasuh rasa kecewa para pemain yang dianaktirikan. Sebab di era modern saat ini, pemain komputer bukanlah pasar pinggiran yang gampang disuap dengan diskon enam dolar sementara hidangan utamanya disembunyikan di meja sebelah.`
  },
  {
    title: "Ketika Perusahaan Forensik Pelacak Hacker Sedunia Malah Ikut Dibobol Maling",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Chainalysis", "Keamanan Siber", "Kripto", "Hacker", "Kecerdasan Buatan", "Privasi Digital"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2026/11/chainalysis-1152x648.png",
    imageAlt: "Grafik jaringan forensik blockchain dan visualisasi pemantauan transaksi mata uang kripto",
    sourceUrl: "https://arstechnica.com/security/2026/11/chainalysis-says-hackers-stole-credentials-and-tokens-for-all-of-its-customers/",
    excerpt: "Chainalysis, perusahaan intelijen blockchain yang biasa disewa FBI dan polisi sedunia untuk memburu peretas, mendadak kebobolan. Kredensial dan token autentikasi ribuan pelanggannya digondol maling digital yang memanfaatkan AI agent.",
    content: `Di komplek perumahan mana pun, sosok satpam yang paling disegani biasanya adalah mereka yang memasang tampang paling galak di depan gerbang. Setiap kurir paket yang lewat wajib lapor, tamu luar kota diinterogasi kelengkapan kartu tanda penduduknya, dan portal besi digembok rapat tepat pukul sepuluh malam. Warga merasa tenang karena mengira benteng pertahanan mereka dijaga oleh pendekar tanpa cela. Namun bayangkan betapa riuhnya grup pesan warga ketika suatu pagi tersiar kabar bahwa gembok pos satpam itu sendiri yang dicongkel maling jemuran saat sang penjaga sedang sibuk berceramah di pos ronda.

Humor getir semacam itulah yang kini sedang menimpa industri keamanan mata uang kripto global. Pelakunya bukan pemain sembarangan, melainkan Chainalysis—korporasi analitik blockchain paling tersohor di kolong langit yang selama ini menjadi rujukan utama biro investigasi federal Amerika Serikat (FBI), Europol, hingga jajaran kepolisian berbagai negara untuk melacak jejak transaksi pencucian uang dan sindikat peretas gelap.

Sebagaimana dicatat dalam laporan investigasi Ars Technica dan BleepingComputer pekan ini, Chainalysis terpaksa merilis pengakuan memalukan ke hadapan publik. Sistem internal mereka disusupi penyusup digital melalui serangan siber multi-arah yang melibatkan agen kecerdasan buatan (*AI agents*) dan taktik pencegatan data di tengah jalan (*on-path data snatch*). Jika pada pemberitahuan awal pihak perusahaan sempat berdalih bahwa insiden tersebut hanya menyentuh metadata nama dan alamat email, pembaruan investigasi terbaru justru mengungkap kenyataan yang jauh lebih mengerikan: peretas berhasil menggondol nama pengguna (*username*), remah sandi (*password hashes*), hingga token autentikasi aktif milik seluruh pelanggan Chainalysis tanpa terkecuali.

Kabar jebolnya benteng utama ini seketika memicu kepanikan massal di bursa kripto dan lembaga penegak hukum sedunia. Bayangkan dampaknya: token API dan kredensial yang dicuri bukanlah milik pengguna receh di warung kopi, melainkan kunci akses yang digunakan para penyidik kejahatan finansial internasional dan tim kepatuhan transaksi perbankan.

![Grafik jaringan forensik blockchain dan visualisasi pemantauan transaksi mata uang kripto](https://cdn.arstechnica.net/wp-content/uploads/2026/11/chainalysis-1152x648.png)

Menghadapi guncangan tersebut, manajemen Chainalysis langsung mengambil langkah darurat dengan mematikan sementara produk-produk andalan mereka dari peredaran. Alat pemantau transaksi berisiko tinggi seperti Reactor, Data Solutions, hingga sistem penyaring alamat dompet (*KYT/Address Screening*) mendadak lumpuh dan berstatus offline. Seluruh klien diwajibkan melakukan penyetelan ulang kata sandi secara paksa, memutar kunci API (*key rotation*), dan menerapkan pembatasan alamat IP ketat demi mencegah aksi penyusupan lanjutan.

Peristiwa ini menjadi tamparan telak bagi arogansi industri forensik digital yang selama ini gemar menjual rasa aman palsu dengan tarif puluhan ribu dolar per lisensi. Kejadian ini sejalan dengan kerapuhan sistemik yang pernah terungkap saat [muatan chip canggih raib tanpa jejak di tengah jalan tol](/ketika-chip-nvidia-senilai-ratusan-miliar-raib-tanpa-jejak-di), di mana teknologi bernilai fantastis nyatanya tetap bertekuk lutut di hadapan kelemahan dasar rantai operasional manusia. Di saat korporasi sibuk membanggakan algoritma pelacak uang haram tercanggih, mereka justru lalai melindungi kunci gerbang brankas mereka sendiri dari intaian musuh.

Ironi ini sekaligus memperingatkan kita pada bahaya laten sentralisasi pengawasan data. Ketika satu entitas tunggal dipercaya mengumpulkan seluruh rekaman investigasi sensitif dunia, korporasi tersebut otomatis menjadi sasaran empuk paling menggiurkan bagi kelompok kejahatan siber lintas negara. Sikap defensif korporasi teknologi yang kerap menutupi skala kebocoran di awal insiden sangat mirip dengan bagaimana [raksasa media sosial diam-diam menyusupkan syarat ketentuan sepihak](/ketika-meta-mengira-pengelola-halaman-facebook-tak-membaca-syarat), di mana transparansi baru dibuka perlahan setelah desakan publik tak lagi bisa dibendung.

Bagi komunitas pegiat teknologi di tanah air, skandal kebobolan Chainalysis ini menyodorkan satu pelajaran berharga yang sangat membumi. Di belantara dunia maya yang bising, klaim tentang sistem yang mustahil ditembus hanyalah dongeng pengantar tidur buatan tim pemasaran korporat. Sebab secanggih apa pun perangkat lunak pelacak yang dipajang di etalase, sang pemburu hacker ternyata bisa mendadak berubah menjadi korban yang panik mencari gembok cadangan begitu pintu rumahnya diketuk oleh maling yang sebenarnya.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 07:00 WIB)");
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
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261107-0700.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Failed:", err);
    process.exit(1);
  });
}
