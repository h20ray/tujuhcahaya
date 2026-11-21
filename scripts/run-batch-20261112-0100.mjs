import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Apple Gembok Forum Komunitas 28 Tahun Demi Menggiring Pengguna ke Layanan Berbayar",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Apple", "Apple Support", "Komunitas Online", "Forum Diskusi", "Teknologi", "Hak Memperbaiki", "Gadget"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2026/11/GettyImages-1560398364-966x648.jpg",
    imageAlt: "Tampilan logo Apple dan antarmuka forum komunitas pengguna Apple Support yang kini digembok menjadi mode baca saja",
    sourceUrl: "https://arstechnica.com/gadgets/2026/11/apple-is-shuttering-its-28-year-old-online-community-forum/",
    excerpt: "Setelah hampir tiga dekade menjadi tempat bernaung jutaan pengguna Mac dan iPhone untuk saling membantu mengatasi kendala perangkat secara mandiri, Apple resmi menggembok forum Apple Support Community menjadi mode baca saja dan bersiap mematikannya secara permanen pada 20 November 2026. Di balik dalih evaluasi strategi dan kenyamanan pelanggan, terselip langkah korporasi mematikan arsip gotong royong warga demi memonopoli kanal bantuan ke ekosistem dukungan berbayar yang serba terkontrol.",
    content: `Bagi siapa saja yang pernah mengais rezeki dengan membuka jasa servis laptop dan komputer bekas di pinggir jalan, ada satu hukum tak tertulis yang selalu dipegang teguh saat menghadapi perangkat berlogo apel gigit. Ketika layar monitor mendadak blank, kipas pendingin berputar layaknya mesin jet, atau sistem operasi menolak booting setelah pembaruan malam hari, tempat pelarian pertama bukanlah gerai resmi dengan teknisi berseragam rapi, melainkan kolom pencarian internet. Di sana, kita hampir selalu terdampar di halaman forum komunitas lawas tempat seorang pengguna asing dari belahan bumi lain pada tahun 2007 pernah mengalami nasib serupa dan menuliskan solusi ajaibnya secara cuma-cuma. Gotong royong tanpa pamrih antarsesama pemilik perangkat itulah yang selama berdekade menjaga jutaan gadget tua tetap bernapas dan terhindar dari tumpukan sampah elektronik.

Namun kehangatan ruang arsip digital tersebut kini resmi divonis mati oleh sang empunya ekosistem. Sebagaimana dicatat oleh jurnalis Scharon Harding dalam laporannya di Ars Technica, Apple secara resmi mengumumkan penutupan permanen platform diskusi legendaris mereka, Apple Support Community. Layanan berbasis web yang telah beroperasi selama 28 tahun sejak pertama kali dirilis dengan nama Apple Tech Exchange pada tahun 1998 tersebut kini telah digembok ke status mode baca saja, sebelum seluruh peladennya dimatikan total pada tanggal 20 November 2026. Dalam pernyataan resminya, raksasa teknologi asal Cupertino itu berdalih bahwa langkah drastis ini diambil setelah melakukan evaluasi menyeluruh terhadap strategi dan kebutuhan pelanggan, seraya mengarahkan para pengguna untuk mencari panduan pemecahan masalah melalui situs bantuan resmi Apple Support.

![Tampilan logo Apple dan antarmuka forum komunitas pengguna Apple Support yang kini digembok menjadi mode baca saja](https://cdn.arstechnica.net/wp-content/uploads/2026/11/GettyImages-1560398364-966x648.jpg)

Membaca dalih manis korporasi tentang efisiensi layanan pelanggan tentu memicu senyum getir bagi siapa saja yang paham cara kerja industri teknologi modern. Alasan di balik penutupan forum publik ini sesungguhnya sangat gamblang dan berbau kalkulasi bisnis dingin. Di dalam forum terbuka, para pengguna bebas mendokumentasikan cacat desain produk, membagikan trik solder mandiri, membongkar rahasia firmware yang sengaja dikunci, hingga saling berbagi cara downgrade ke versi sistem operasi lama yang lebih hemat baterai. Keterbukaan semacam itu adalah mimpi buruk bagi bagian pemasaran korporat karena seluruh keluhan dan solusi alternatif tersebut terindeks rapi oleh mesin pencari global. Dengan menggiring semua interaksi ke kanal resmi tertutup, Apple bisa menyaring arus informasi, menutupi isu massal sebelum viral, dan tentu saja memastikan bahwa setiap masalah perangkat keras berujung pada tagihan biaya perbaikan resmi yang mencekik leher.

Langkah mematikan ruang organik ini sejalan dengan watak korporasi yang makin haus memonopoli pundi-pundi rupiah dari setiap sudut ekosistem mereka. Kita sudah berulang kali menyaksikan bagaimana raksasa teknologi kian getol membatasi hak pengguna demi memeras dompet, seperti siasat saat [Apple mematok tarif fitur di Logic Pro](/apple-patok-tarif-ai-delapan-ratus-ribu-di-logic-pro-saat-janji) atau bagaimana [ambisi Apple menyulap asisten virtual Siri](/apple-ngotot-bikin-siri-jadi-agen-ai-saat-paham-perintah-saja) yang terus dipaksakan meski kerap melenceng dari kebutuhan mendasar pengguna sehari-hari. Ketika ruang tanya-jawab sesama manusia dimatikan, para pemilik gadget tua dipaksa berhadapan dengan bot penjawab otomatis yang serba kaku atau disuruh pasrah membayar biaya servis seharga separuh laptop baru di meja kasir gerai resmi.

Bagi masyarakat pengguna komputer dan gadget di tanah air yang sehari-harinya bertahan hidup dengan perangkat bekas dan suku cadang rekondisi, penutupan forum 28 tahun ini adalah lonceng duka bagi kebebasan internet purba. Kita sedang dipaksa menyaksikan kematian perlahan era web terbuka, di mana pengetahuan komunal digantikan oleh tembok berbayar dan kebun tertutup yang steril dari suara kritis warga. Di masa depan, ketika laptop Anda mendadak mogok di tengah malam tenggat pekerjaan kantor, jangan heran jika satu-satunya saran yang tersisa dari bot korporat bukanlah cara memperbaiki perangkat kesayangan Anda, melainkan tautan belanja cepat untuk segera membeli model keluaran terbaru.`
  },
  {
    title: "Developer Big Walk Diboikot Juri Festival Game Cuma Gara-Gara Sepuluh Baris Kode AI",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Big Walk", "House House", "Indie Games Festival", "Kecerdasan Buatan", "Industri Game", "Game Indie", "PC Gaming"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2026/11/bigwalkdebate-1152x648.png",
    imageAlt: "Ilustrasi karakter game Big Walk dengan perdebatan pemanfaatan kecerdasan buatan dalam pengembangan game indie",
    sourceUrl: "https://arstechnica.com/gaming/2026/11/big-walk-used-ai-to-fix-a-bug-now-the-indie-gaming-world-is-having-a-reckoning/",
    excerpt: "Studio House House yang tersohor lewat Untitled Goose Game mendadak terseret polemik panas di panggung Independent Games Festival setelah sembilan belas juri menandatangani petisi boikot terhadap game terbaru mereka, Big Walk. Gara-garanya sepele: pengembang jujur mengakui memakai bantuan model bahasa kecerdasan buatan untuk meracik sepuluh baris kode demi menambal bug bayangan mesin Unity yang gagal dipecahkan teknisi resminya. Kasus ini membongkar kemunafikan standar ganda di industri game modern yang lebih suka menghukum kejujuran kreator indie ketimbang memberangus kerakusan korporasi besar.",
    content: `Siapa pun yang pernah begadang semalaman di depan layar monitor demi menyelesaikan proyek koding game indie pasti akrab dengan rasa frustrasi menghadapi bug misterius. Mata sudah merah perih dihajar paparan cahaya biru, cangkir kopi saset di atas meja sudah mengering menyisakan ampas hitam, tetapi animasi karakter di layar tetap saja tersendat patah-patah tanpa penjelasan logis. Di saat dokumen petunjuk mesin permainan tidak memberikan jawaban dan teknisi resmi angkat tangan, seorang pengembang perangkat lunak mandiri akan mencoba cara apa pun agar karyanya bisa dinikmati pemain tanpa membuat kartu grafis komputer kepanasan. Beruntung bagi koder masa kini, bantuan mesin pencari cerdas dan asisten percakapan digital sering kali sanggup memberikan secercah pencerahan untuk memecahkan kebuntuan logika tersebut.

Namun di panggung festival seni video game internasional, kepraktisan teknis semacam itu mendadak diperlakukan layaknya dosa besar yang tak terampuni. Sebagaimana dicatat oleh jurnalis Kyle Orland dalam laporannya di Ars Technica, studio independen asal Australia, House House, baru saja menjadi sasaran boikot massal di ajang bergengsi Independent Games Festival atau IGF. Studio kreatif yang sebelumnya dipuja-puja dunia berkat mahakarya komedi Untitled Goose Game tersebut tersandung masalah saat mendaftarkan karya anyar mereka bertajuk Big Walk. Menjelang tahap akhir pembuatan, tim pengembang membentur kendala teknis pelik pada sistem Universal Render Pipeline di mesin Unity, di mana sistem bayangan gagal memangkas kalkulasi grafis sehingga performa game anjlok hingga lima puluh persen setiap kali matahari terbit dan terbenam. Setelah teknisi resmi Unity menyerah dan menyatakan bahwa perbaikan bug itu mustahil dilakukan, tim House House berkonsultasi dengan model kecerdasan buatan hingga akhirnya berhasil merangkai sekitar sepuluh baris kode penambal.

![Ilustrasi karakter game Big Walk dengan perdebatan pemanfaatan kecerdasan buatan dalam pengembangan game indie](https://cdn.arstechnica.net/wp-content/uploads/2026/11/bigwalkdebate-1152x648.png)

Masalah bermula ketika tim House House dengan jujur mencantumkan riwayat pemakaian kecerdasan buatan tersebut pada kuesioner transparansi festival. Mereka menegaskan bahwa porsi kode yang dipengaruhi bantuan mesin itu bahkan tidak mencapai nol koma satu persen dari keseluruhan proyek, serta tidak ada selembar pun aset visual, musik, atau naskah dialog yang dihasilkan generator digital. Namun kejujuran tanpa tedeng aling-aling itu justru disambut petisi keras oleh sembilan belas juri festival IGF yang menandatangani ikrar menolak memberikan penilaian bagi game mana pun yang menggunakan kecerdasan buatan dalam bentuk apa pun. Alhasil, karya gotong royong manusia yang digarap selama bertahun-tahun dengan penuh keringat itu terancam dicoret hanya gara-gara sepuluh baris kode penambal bug mesin grafis.

Reaksi berlebihan para juri festival independen ini memperlihatkan standar ganda yang luar biasa munafik di panggung hiburan digital dunia. Di saat penerbit korporat triliunan dolar bebas merumahkan ribuan pekerja seni demi memangkas biaya produksi, juri festival justru memilih menghakimi pengembang mandiri yang hanya memanfaatkan alat bantu logika demi menyelamatkan performa permainan. Padahal esensi sejati dari karya indie adalah keberanian menghadirkan kehangatan bermain bersama, persis seperti ketika [bos Jackbox bangga dengan game tongkrongan murah](/bos-jackbox-bangga-dijuluki-friendslop-saat-game-triliunan-rupiah) tanpa perlu silau oleh anggaran raksasa, atau bagaimana [solidaritas tulus para petualang dunia maya](/pemain-final-fantasy-14-nyalakan-lilin-virtual-saat-industri-game) sanggup menjadi benteng pertahanan terakhir kemanusiaan di tengah industri hiburan yang makin dingin dan serakah.

Bagi komunitas gamer dan pembuat game di tanah air yang saban hari bergulat dengan keterbatasan dana dan perangkat keras pas-pasan, polemik boikot game Big Walk ini menyisakan sentilan tajam. Menolak kecerdasan buatan yang menjarah karya ilustrator manusia adalah sikap moral yang terpuji. Namun jika aturan kaku itu dipukul rata sampai mengharamkan sepuluh baris kode penolong untuk mengatasi bug mesin grafis yang rusak dari pabriknya, dewan juri sejatinya bukan sedang membela martabat seniman manusia, melainkan sekadar mempertontonkan kepicikan dogmatis yang salah sasaran.`
  }
];

export async function runBatch() {
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
  console.log(`🎉 Batch Publikasi 01:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================\n");
  return results;
}

// CLI Execution
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261112-0100.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Batch Execution Failed:", err);
      process.exit(1);
    });
}
