import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Bos Nintendo Berjanji Switch 2 Tak Naik Harga tapi Dompet Gamer Sudah Pasrah Duluan",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Nintendo Switch 2", "Konsol Game", "Nintendo", "Industri Game", "Harga Gadget", "Gamer Indonesia"],
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/02/switch-2-third-party-partner-games-february-direct.jpg",
    imageAlt: "Ilustrasi konsol Nintendo Switch 2 bersama deretan mitra game pihak ketiga",
    sourceUrl: "https://www.polygon.com/nintendo-switch-2-price-increase-november-2026/",
    excerpt: "Presiden Nintendo Shuntaro Furukawa menegaskan belum berencana menaikkan harga konsol Nintendo Switch 2 di tengah lonjakan biaya manufaktur. Namun di tongkrongan gamer tanah air, janji manis korporasi asal Kyoto ini disambut senyum getir di depan kalkulator kurs dolar dan pajak impor.",
    content: `Kalau ada kebiasaan para petinggi industri game yang paling cepat memicu senyum kecut di wajah para gamer, kebiasaan itu adalah obral janji manis di depan laporan keuangan pemegang saham. Baru-baru ini, Presiden Nintendo Shuntaro Furukawa tampil ke hadapan publik untuk menjawab kasak-kusuk yang sudah berbulan-bulan bikin tidur para pencinta Mario Bros tidak nyenyak. Sebagaimana dicatat dalam laporan Polygon pekan ini, orang nomor satu di markas Kyoto itu menegaskan bahwa perusahaannya untuk saat ini belum berencana menaikkan banderol harga peluncuran konsol generasi penerus mereka, yang akrab kita sebut sebagai Nintendo Switch 2.

Pernyataan Furukawa tersebut seketika disambut desah napas lega oleh para analis bursa Wall Street yang cemas melihat inflasi global dan melambungnya biaya produksi semikonduktor. Nintendo seolah ingin memosisikan diri sebagai pahlawan keluarga yang budiman: tetap setia menghadirkan hiburan murah meriah bagi semua kalangan di tengah kegilaan kompetitor sebelah yang hobi merilis konsol seharga motor matik bekas.

Namun kalau Anda sempatkan mampir ke tongkrongan warkop atau membuka grup diskusi komunitas di [ulasan Game](/category/game), pernyataan bos besar Nintendo itu justru disambut tawa getir bercampur skeptisisme akut. Para gamer di negara berkembang seperti Indonesia sudah terlalu khatam dengan jurang pemisah antara harga rekomendasi pabrik (*MSRP*) di Amerika Serikat dan angka riil yang tertera di struk kasir toko elektronik Mangga Dua.

![Ilustrasi konsol Nintendo Switch 2 bersama mitra game](https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/02/switch-2-third-party-partner-games-february-direct.jpg)

Mari kita bedah realitasnya dengan kepala dingin. Ketika Furukawa berjanji Switch 2 tidak akan naik harga, patokan yang ia gunakan adalah pasar domestik Jepang dan wilayah Amerika Utara. Katakanlah konsol anyar tersebut nantinya dilepas di angka 399 atau 449 dolar AS. Begitu unit kotak kardus merah itu diterbangkan menyeberangi samudra menuju pelabuhan Tanjung Priok, serentetan beban langsung menempel: bea masuk impor barang mewah, pajak pertambahan nilai, biaya margin distributor resmi yang haus laba, hingga ulah tengkulak toko daring (*scalper*) yang gemar menimbun stok di pekan pertama rilis.

Alhasil, barang yang di atas kertas dihargai enam juta rupiah bakal dengan enteng melesat ke angka delapan hingga sembilan juta rupiah di pasaran lokal. Angka tersebut jelas bukan lagi harga mainan anak-anak sepulang sekolah, melainkan setara dengan dua bulan uang kontrakan buruh pabrik atau biaya servis turun mesin mobil tua.

Bagi figur gamer kasual yang skeptis terhadap taktik korporasi seperti [Andoru Ray](/author/andoru-ray), kepura-puraan industri konsol hari ini memang sudah mencapai tahap yang melelahkan. Nintendo tahu betul bahwa mereka sedang memegang kartu as. Popularitas Switch generasi pertama yang telah menembus angka penjualan lebih dari 140 juta unit di seluruh dunia membuat pabrikan asal Jepang ini merasa berada di atas angin. Mereka sadar jutaan penggemar fanatik akan tetap rela menguras tabungan darurat demi mencicipi sekuel petualangan Link berikutnya di layar yang lebih tajam dan frame rate yang tidak lagi tersengal-sengal.

Kekhawatiran yang jauh lebih nyata bagi pemain bukan sekadar harga mesin plastiknya, melainkan biaya hidup ekosistem di dalamnya. Standar harga game fisik rilisan terbaru kini sudah digeser oleh para penerbit raksasa menuju angka 70 hingga 80 dolar AS per kaset. Membeli satu keping game orisinal kini membutuhkan pengorbanan anggaran makan siang selama dua pekan penuh. Ditambah lagi dengan biaya langganan layanan online bulanan yang tarifnya diam-diam dikerek naik tanpa kompensasi server lokal yang memadai.

Kerapuhan dompet para pencinta [arsip konsol Nintendo](/tag/nintendo) di tanah air akhirnya kembali bermuara pada siasat bertahan hidup khas akar rumput: menunggu versi diskon musiman dua tahun kemudian, membeli kaset seken batangan dari sesama gamer yang sedang butuh uang cepat, atau patungan sewa akun game digital keluarga dengan teman sekantor.

Janji bahwa Switch 2 tidak akan naik harga mungkin terdengar sangat menenangkan bagi para pemegang saham di Tokyo yang duduk manis menerima dividen tahunan. Namun bagi gamer lokal yang masih harus menyisihkan sisa gaji untuk cicilan motor dan tagihan listrik token, janji tersebut hanyalah pengingat pahit bahwa hobi bermain game orisinal kian bergeser menjadi barang mewah yang menuntut pengorbanan isi dompet tanpa ampun.`
  },
  {
    title: "TikTok Bikin Aplikasi Belanja Terpisah Demi Menagih Gaji Bulanan Kita Lebih Cepat",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["TikTok", "TikTok Shop", "E-Commerce", "Aplikasi Mobile", "Perilaku Konsumen", "Algoritma Digital"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/unnamed-4.png",
    imageAlt: "Tampilan antarmuka aplikasi mandiri TikTok Shop di layar smartphone",
    sourceUrl: "https://www.theverge.com/tech/1027772/tiktok-shop-app",
    excerpt: "ByteDance resmi meluncurkan aplikasi mandiri TikTok Shop secara terpisah di beberapa negara. Di balik dalih merapikan linimasa video dan memanjakan pemburu diskon, aplikasi belanja khusus ini sejatinya adalah jeratan algoritma baru untuk menguras sisa saldo rekening kita.",
    content: `Masih lekat dalam ingatan kita masa-masa ketika membuka aplikasi TikTok terasa seperti hiburan tanpa beban. Isinya kebanyakan video anak-anak muda berlatih koreografi tarian yang sedikit canggung, kucing oranye yang melompat salah perhitungan, atau tips memasak nasi goreng ala anak kos yang berakhir gosong. Menonton linimasa kala itu adalah pelarian instan dari kepenatan rutinitas kantor tanpa ada kewajiban mengeluarkan sepeser pun uang dari dompet.

Namun atmosfer santai warkop itu perlahan lenyap berganti menjadi pasar kaget digital yang sangat bising. Hari ini, baru mengusap layar tiga kali ke atas, kita sudah langsung disodori siaran langsung seorang penjual wajan anti-lengket yang berteriak histeris di depan mikrofon, menuntut penonton segera menekan keranjang kuning sebelum kehabisan voucer gratis ongkos kirim. Kelelahan mental menghadapi banjir promosi jualan ini rupanya mulai dibaca oleh sang empunya platform. Sebagaimana dicatat dalam laporan The Verge pekan ini, ByteDance resmi meluncurkan aplikasi mandiri terpisah bernama TikTok Shop di beberapa negara untuk memisahkan urusan belanja dari linimasa hiburan video.

Menurut pengamatan para pengamat perangkat lunak dan kebiasaan gadget di [kanal Teknologi](/category/tech), peluncuran aplikasi terpisah ini tentu saja dibungkus dengan narasi kenyamanan konsumen yang sangat rapi. Pihak korporasi berdalih bahwa para pemburu diskon kini bisa leluasa menjelajahi katalog barang murah, memantau pesanan paket, dan menonton siaran belanja tanpa terdistraksi oleh video komedi. Sebaliknya, mereka yang murni ingin mencari hiburan visual bisa menikmati linimasa video pendek dengan lebih tenang tanpa diserbu keranjang belanja di pojok kiri bawah.

![Tampilan antarmuka aplikasi belanja mandiri TikTok Shop](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/unnamed-4.png)

Namun bila Anda membedah siasat ini dari sudut pandang sysadmin warkop yang sinis terhadap monetisasi korporasi teknologi ala [Elang Elano](/author/elang-elano), manuver membuat aplikasi mandiri ini sesungguhnya bukan aksi amal untuk menenangkan pikiran pengguna. Ini adalah langkah ekspansi agresif demi mencaplok ruang penyimpanan memori HP dan menguras saldo rekening kita secara lebih sistematis.

Aplikasi media sosial induk TikTok sejatinya sudah terlalu gemuk (*bloated*). Ukuran pemasangan dan cache datanya di smartphone kelas menengah kerap membengkak hingga puluhan gigabyte, mencekik kinerja RAM dan membuat baterai HP cepat panas. Dengan melahirkan aplikasi belanja tersendiri, ByteDance kini memiliki jalan tol baru untuk meminta izin akses sistem operasi yang jauh lebih rakus: mulai dari pelacakan geolokasi latar belakang secara terus-menerus, sinkronisasi kontak darurat dompet digital, hingga notifikasi pop-up agresif yang dirancang untuk membangunkan layar HP Anda di jam-jam rawan lapar mata menjelang tengah malam.

Bagi masyarakat perkotaan kita yang rentan terhadap fenomena belanja impulsif (*doom-spending*), aplikasi terpisah ini adalah jebakan psikologis yang sangat berbahaya. Ketika toko belanja terpasang sebagai ikon mandiri di layar utama HP kita, batas pertahanan diri kita semakin rapuh. Kita tidak lagi membutuhkan alasan untuk membeli barang; algoritma rekomendasi mereka yang begitu presisi membaca kelemahan emosional pengguna akan terus menyodori pernak-pernik murah seharga sepuluh ribu rupiah yang sebetulnya sama sekali tidak kita perlukan di dalam rumah.

Langkah ByteDance ini juga menegaskan ambisi monopoli e-commerce mereka setelah sebelumnya sempat bikin heboh regulator perdagangan dalam negeri hingga berujung pada aksi korporasi mengakuisisi platform belanja lokal. Regulasi pemerintah yang berniat membatasi campur aduk antara media sosial dan transaksi dagang kini dijawab dengan solusi paling klise dari Silicon Valley dan Beijing: gandakan aplikasinya, pasang lebih banyak pelacak, dan biarkan konsumen tenggelam dalam ilusi tumpukan diskon palsu.

Kita mungkin merasa senang karena linimasa video utama kini sedikit lebih lengang dari teriakan pedagang keranjang kuning. Namun membiarkan satu aplikasi belanja baru bersarang di ponsel dengan notifikasi yang terus berdenting adalah cara paling ampuh untuk memastikan gaji bulanan kita menguap tanpa sisa sebelum tanggal sepuluh tiba.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 01:00 WIB)");
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
  console.log(`🎉 BATCH 2-JAM SELESAI: ${results.length} artikel berhasil diperbarui & dipublikasikan.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261106-0100.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch(err => {
      console.error("Batch Execution Error:", err);
      process.exit(1);
    });
}
