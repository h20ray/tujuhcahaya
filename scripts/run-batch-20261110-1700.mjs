import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Nintendo Akhirnya Rilis Fitur Kirim Kado eShop tapi Cuma Boleh Buat Anggota Keluarga",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "eShop", "Gamer Indonesia", "Industri Game", "Konsol Game", "Nintendo", "Nintendo Switch", "Steam"],
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2025/12/mario-christmas.jpg",
    imageAlt: "Ilustrasi Mario mengenakan kostum Sinterklas dengan latar belakang pohon natal dan kado Nintendo Switch",
    sourceUrl: "https://www.polygon.com/nintendo-switch-2-digital-games-eshop-gifts/",
    excerpt: "Nintendo resmi menghadirkan fitur kirim kado digital di eShop lewat pembaruan firmware Switch terbaru. Namun alih-alih memberi kebebasan berbagi game ke sesama teman mabar, fitur ini malah dikunci rapat hanya untuk anggota Family Group. Ketakutan kronis Nintendo memperlakukan pemain dewasa layaknya bocah TK kembali membuktikan betapa tertinggalnya kultur daring sang raksasa Jepang.",
    content: `Bagi siapa pun yang pernah menghabiskan masa remaja di depan PC sambil memantau pesta diskon musiman Steam, tradisi saling melempar kado game digital adalah hal paling lumrah di dunia. Cukup klik tombol beli sebagai hadiah, pilih nama teman tongkrongan dari daftar kontak, dan dalam hitungan detik game tersebut sudah mendarat manis di perpustakaan digital mereka. Ekosistem konsol modern seperti PlayStation Network dan Xbox Store bahkan sudah mengadopsi mekanisme serupa selama bertahun-tahun. Namun jika Anda adalah pemilik Nintendo Switch yang setia menemani Mario melompat sejak 2017, Anda pasti mafhum bahwa urusan fitur daring di bawah kendali Nintendo selalu terasa seperti terjebak di era warung internet zaman batu. Butuh waktu hampir satu dekade penuh bagi para petinggi di Kyoto untuk akhirnya menyadari bahwa fitur kirim kado adalah kebutuhan dasar manusia modern.

Kabar pembaruan tersebut akhirnya datang juga pekan ini. Dalam laporan teknis Polygon dan rilis resmi perusahaan, Nintendo meluncurkan pembaruan sistem operasi Switch versi 23.5.0 yang menyiapkan infrastruktur fitur eShop gifting sebelum resmi diaktifkan pada 17 November 2026 mendatang. Pemain kini bisa mencentang opsi pembelian sebagai kado, memilih warna bungkus kado digital, dan mengirimkan game atau paket ekspansi langsung ke konsol penerima. Namun bukan Nintendo namanya jika tidak membubuhkan syarat konyol yang bikin dahi berkerut. Alih-alih mengizinkan pemain mengirim kado ke seluruh daftar teman, fitur hadiah ini dikunci secara eksklusif hanya untuk akun yang terdaftar dalam grup keluarga (Nintendo Account Family Group) dengan batasan maksimal delapan orang.

![Ilustrasi Mario mengenakan kostum Sinterklas dengan latar belakang pohon natal dan kado Nintendo Switch](https://static0.polygonimages.com/wordpress/wp-content/uploads/2025/12/mario-christmas.jpg)

Keputusan aneh ini seketika memicu tawa getir di kalangan komunitas gamer. Bayangkan skenario menggelikan ini: Anda ingin membelikan game indie favorit untuk sahabat karib yang sedang berulang tahun. Di platform waras mana pun, Anda tinggal mentransfer game tersebut lewat beberapa ketukan tombol. Di semesta Nintendo, Anda wajib mengundang teman tersebut masuk ke kartu keluarga digital Anda, menyuruhnya menyetujui undangan lewat email, memastikan status akunnya tidak berada di bawah pengawasan orang tua, barulah kado bisa terkirim. Jika slot keluarga Anda sudah penuh oleh keponakan atau sepupu, maka sahabat Anda harus gigit jari karena sistem menolak transaksi tersebut mentah-mentah.

Paranoia berlebihan semacam ini sebetulnya bukan barang baru bagi para pencinta Nintendo. Perusahaan ini sudah lama terkenal memiliki sindrom pengasuh anak (*nanny syndrome*) yang akut. Di mata para perancang sistem Nintendo, internet adalah rimba belantara berbahaya tempat anak-anak bisa diculik monster siber kapan saja, sehingga interaksi antar-pengguna wajib dikebiri habis-habisan. Kita masih ingat bagaimana mereka mewajibkan penggunaan kabel adapter rumit dan aplikasi ponsel pintar terpisah hanya untuk sekadar mengobrol suara saat bermain gim tembak-tembakan. Sikap kaku ini setali tiga uang dengan kebiasaan lama pabrikan asal Kyoto yang gemar membatasi keleluasaan pemain, persis seperti saat [Nintendo pelit membagikan katalog game lawas GBA di layanan berbayar](/ketika-nintendo-pelit-merilis-game-gba-di-switch-online-padahal) meski jutaan pelanggan sudah setia membayar biaya sewa tahunan tanpa henti.

Ironi ini kian terasa menyengat karena konsol Switch generasi pertama sejatinya sudah berada di ujung senja kehidupannya. Di saat para gamer di seluruh dunia mulai menahan belanja demi menanti kepastian [harga konsol penerus Switch 2 yang kian mahal](/ketika-bos-nintendo-berjanji-switch-2-tak-naik-harga-tapi-dompet), Nintendo baru sempat menambal fitur dasar yang semestinya sudah tersedia sejak hari pertama mesin ini dipajang di etalase toko. Meluncurkan fitur kirim kado dengan rantai pengaman seketat ini di tahun 2026 bukanlah sebuah terobosan, melainkan komedi birokrasi korporasi yang lambat bergerak.

Nintendo memang jagoan tak tertandingi dalam meracik mekanik permainan yang menyenangkan dan menghadirkan nostalgia masa kecil yang memikat. Namun dalam urusan membangun ekosistem daring yang memanusiakan pemainnya, mereka masih saja bersikap layaknya kakek protektif yang mencurigai setiap orang asing di halaman rumah. Menghadiahkan game digital semestinya menjadi momen perayaan keakraban antar-sahabat, bukan malah ujian kesabaran birokrasi keluarga berencana.`
  },
  {
    title: "Bursa Kalshi Digugat Penjudi Boncos Bukti Taruhan Online Dibalut Kosmetik Fintech",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Fintech", "Hukum Digital", "Infrastruktur IT", "Investasi Bodong", "Judi Online", "Kalshi", "Regulasi Digital"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2026/11/kalshi-baseball-1152x648-1794257974.jpg",
    imageAlt: "Ilustrasi aplikasi taruhan bursa prediksi olahraga Kalshi pada layar smartphone di lapangan bisbol",
    sourceUrl: "https://arstechnica.com/tech-policy/2026/11/man-who-lost-308000-on-sports-bets-sues-kalshi-for-offering-illegal-gambling/",
    excerpt: "Platform bursa prediksi Kalshi resmi digugat ke pengadilan oleh seorang pengguna yang boncos lebih dari 300 ribu dolar dalam taruhan olahraga. Berkedok kontrak peristiwa dan izin komoditas berjangka, startup Silicon Valley ini memperlihatkan bagaimana industri teknologi finansial gemar memoles praktik judi konvensional menjadi produk investasi canggih yang memperdaya warga.",
    content: `Bagi siapa pun yang kerap melintasi linimasa media sosial para penggila teknologi finansial belakangan ini, istilah bursa prediksi atau prediction market seolah menjadi kata kunci paling sakral. Para pemengaruh bursa saham dan pegiat kripto gemar mempromosikan platform semacam ini sebagai instrumen kecerdasan kolektif yang revolusioner. Pengguna tidak lagi disebut sedang berjudi, melainkan tengah memperdagangkan kontrak peristiwa berbasis probabilitas matematika. Mulai dari hasil pemilu presiden, arah suku bunga bank sentral, hingga skor pertandingan olahraga, semuanya dikemas rapi dalam grafik pergerakan harga yang tampak elegan dan terpelajar. Di hadapan layar monitor dengan angka-angka desimal yang berkedip cepat, siapa pun bisa merasa pintar layaknya pialang Wall Street. Padahal jika bungkus jargon teknologi itu kita kupas tuntas, yang tersisa di dalamnya hanyalah meja rolet kasino dengan penampilan baru yang lebih necis.

Topeng modernitas semu tersebut akhirnya mulai retak di meja hijau pekan ini. Sebagaimana dicatat dalam laporan investigasi Ars Technica, seorang warga Bellevue bernama Scott Bright resmi melayangkan gugatan perdata terhadap platform bursa prediksi Kalshi di Pengadilan Tinggi King County, Washington. Bright menuntut pengembalian dana kerugian sebesar 308 ribu dolar Amerika Serikat atau setara hampir lima miliar rupiah yang ludes akibat bertaruh pada hasil pertandingan olahraga di platform tersebut. Tak tanggung-tanggung, bersama tuntutan ganti rugi tambahan, total gugatan yang dilayangkan menembus angka 580 ribu dolar. Gugatan tersebut menegaskan bahwa kontrak taruhan olahraga Kalshi pada hakikatnya adalah praktik perjudian daring ilegal yang melanggar hukum negara bagian Washington, terlepas dari dalih izin federal komoditas berjangka yang selama ini diagung-agungkan perusahaan.

![Ilustrasi aplikasi taruhan bursa prediksi olahraga Kalshi pada layar smartphone di lapangan bisbol](https://cdn.arstechnica.net/wp-content/uploads/2026/11/kalshi-baseball-1152x648-1794257974.jpg)

Kasus gugatan Scott Bright ini menjadi tamparan telak bagi narasi industri tekfin yang selama ini berlindung di balik celah regulasi. Di Amerika Serikat, Kalshi berusaha memposisikan dirinya setara dengan bursa komoditas formal di bawah pengawasan Komisi Perdagangan Berjangka Komoditas (CFTC). Mereka berargumen bahwa menebak apakah tim bisbol favorit Anda akan menang atau kalah bukanlah aktivitas taruhan, melainkan lindung nilai terhadap risiko ekonomi. Manuver retorika semacam ini jelas merupakan akrobat hukum yang menggelikan. Bagi orang yang kehilangan ratusan juta rupiah dalam hitungan menit di depan layar smartphone, sensasi kecanduan dopamin dan rasa bangkrut yang dialami sama persis dengan penjudi sabung ayam atau mesin capit jackpot di pinggir jalan.

Kecenderungan perusahaan teknologi memoles bahaya nyata dengan istilah finansial canggih ini sejatinya memiliki pola yang sangat akrab di telinga kita. Kita sudah sering menyaksikan bagaimana industri perangkat lunak gemar mengeksploitasi celah hukum dan psikologi manusia demi mengeruk keuntungan kilat. Fenomena ini setali tiga uang dengan trik manipulasi digital saat [warga terjebak pinjol ilegal yang menipu peminjam](/ketika-warga-mengira-data-ktp-di-server-pinjol-bisa-lenyap-cuma) dengan ilusi kemudahan likuiditas dana tunai tanpa memikirkan bunga mencekik. Praktik tersebut juga diperparah oleh desain antarmuka aplikasi modern yang sengaja dirancang adiktif, serupa dengan langkah agresif korporasi saat [TikTok meluncurkan aplikasi belanja terpisah](/tiktok-bikin-aplikasi-belanja-terpisah-demi-menagih-gaji-bulanan) demi memudahkan pengguna membelanjakan tabungannya tanpa sempat menyalakan akal sehat.

Gugatan hukum di Washington ini semestinya menjadi peringatan keras bagi para regulator di berbagai belahan dunia, termasuk di Indonesia. Di saat aparat penegak hukum dan kementerian sibuk memblokir ribuan situs judi slot deposit pulsa yang tampil norak dengan kilatan petir dewa Zeus, industri teknologi Silicon Valley diam-diam tengah menyiapkan penggantinya yang jauh lebih licik. Mereka membungkus taruhan tebak skor menjadi kontrak derivatif keuangan yang sah, lengkap dengan verifikasi identitas resmi dan kartu debit bank konvensional. Jika regulator kita tetap gaptek dan silau pada proposal bisnis bertabur kata kunci inovasi tekfin, kita hanya tinggal menunggu waktu sebelum anak-anak muda perkotaan bangkrut berjamaah di bursa prediksi legal.

Mengganti kata taruhan menjadi kontrak probabilitas tidak serta-merta mengubah tabiat judi menjadi investasi produktif. Menangis di depan pengadilan setelah boncos ratusan ribu dolar memang terdengar menyedihkan bagi Scott Bright. Namun gugatan tersebut setidaknya menyadarkan kita pada satu hal sederhana: semahal apa pun kosmetik teknologi yang dipakai untuk merias kasino, aroma bau anyir kekalahan para korbannya tetap tidak bisa disembunyikan.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 17:00 WIB)");
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
  console.log(`🎉 Batch Publikasi 17:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261110-1700.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
