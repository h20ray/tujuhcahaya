import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Meta Mengira Pengelola Halaman Facebook Tak Membaca Syarat Ketentuan Diam-diam",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Meta", "Facebook", "Kecerdasan Buatan", "Privasi Digital", "Hak Cipta", "Etika Web"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ilustrasi algoritma kecerdasan buatan dan perayap data di layar komputer",
    sourceUrl: "https://arstechnica.com/tech-policy/2026/11/does-meta-think-we-cant-read-meta-abandons-sketchy-commercial-terms-update/",
    excerpt: "Meta sempat menyusupkan klausul sepihak yang memaksa jutaan pengelola halaman Facebook menyerahkan konten situs luar mereka untuk dijadikan santapan model kecerdasan buatan. Sayangnya bagi Mark Zuckerberg, para pengelola situs ternyata belum buta huruf.",
    content: `Menyetujui dokumen syarat dan ketentuan layanan (*terms of service*) di internet sudah lama menjadi kebohongan massal paling lazim yang kita lakukan setiap hari. Dari anak kuliahan yang terburu-buru mengunduh aplikasi baru, admin toko daring di pojok kontrakan, hingga pegawai kantoran yang butuh membuka dokumen kerja, jemari kita punya refleks otomatis: menggulir cepat kotak teks berkas hukum ribuan kata itu ke dasar halaman, lalu mengeklik tombol centang persetujuan tanpa membaca sepatah kata pun. Kita mempercayakan nasib privasi kita pada asumsi polos bahwa korporasi sebesar Silicon Valley tidak akan sejahat itu menyelipkan klausul menjual organ pengguna di pasal tiga puluh lima.

Namun celah kelengahan kolektif itulah yang baru-baru ini nyaris dimanfaatkan secara licik oleh korporasi induk Facebook dan Instagram. Sebagaimana dicatat dalam laporan investigasi Ars Technica dan Nieman Lab pekan ini, Meta mendadak memperbarui dokumen Ketentuan Komersial (*Commercial Terms*) mereka. Di antara tumpukan bahasa hukum korporat yang bertele-tele, terselip satu jebakan maut: siapa pun yang mengelola akun bisnis, fanpage Facebook, atau menggunakan dasbor Meta Business Suite, secara otomatis dianggap memberi izin kepada bot crawler Meta untuk menyedot (*scraping*) seluruh konten di situs web luar milik mereka. Yang lebih keterlaluan, naskah awal dokumen tersebut secara gamblang menyatakan bahwa data rampasan dari tautan luar itu bakal dipakai untuk melatih model kecerdasan buatan komersial mereka alias Meta AI.

Manuver ini terang saja membuat para pemilik situs dan pegiat kebebasan informasi geleng-geleng kepala. Bayangkan situasi absurdnya: Anda membangun situs media lokal, toko daring, atau blog esai independen dengan modal sewa server sendiri dan tetesan keringat menulis konten bertahun-tahun. Lalu Anda sekadar menaruh tautan artikel tersebut di laman Facebook agar ada pembaca mampir. Menurut logika serakah manajemen Meta, tindakan menempel tautan itu sudah cukup menjadi tiket gratis bagi mesin mereka untuk melahap seluruh isi server Anda tanpa membayar sepeser pun hak cipta. Di panggung konferensi internasional, Mark Zuckerberg boleh saja berbicara manis soal masa depan teknologi yang inklusif dan memajukan peradaban. Namun di balik layar, dapur kecerdasan buatan mereka rupanya sedang kelaparan bahan bakar data gratisan hingga tega menyusupkan pasal penjarahan lewat pintu belakang.

![Ilustrasi algoritma kecerdasan buatan dan perayap data di layar komputer](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop)

Sial bagi Meta, para pengelola web dan aktivis hak digital di berbagai belahan dunia ternyata belum sepenuhnya kehilangan ketelitian. Gelombang protes langsung meledak begitu para peneliti membongkar pasal siluman tersebut ke ruang publik. Pertanyaan satir apakah Meta mengira pemilik situs tidak bisa membaca syarat layanan menggema kencang di forum-forum pengembang dan linimasa komunitas siber. Menghadapi kepungan kritik pedas dari serikat penerbit dan ancaman penyelidikan otoritas antimonopoli di Eropa, manajemen Meta sempat gelagapan dengan diam-diam menghapus kata pelatihan AI dari naskah ketentuan, sebelum akhirnya mengumumkan pembekuan total pembaruan aturan tersebut hingga batas waktu yang tidak ditentukan.

Manuver licik ini sejatinya mengulang pola lama ketika raksasa teknologi kerap menguji batas kesabaran publik lewat pembaruan kebijakan yang manipulatif. Sikap lancang korporasi Silicon Valley semacam ini mengingatkan kita pada bagaimana [trik halus perusahaan teknologi membatasi kedaulatan pengguna](/ketika-sensor-rahasia-keyboard-iphone-menentukan-kata-apa-yang) terus berulang dengan berbagai variasi kemasan. Bila publik lengah dan pasrah menerima klaim efisiensi sepihak, korporasi akan dengan senang hati melenggang mengambil alih kendali. Bahkan peristiwa ini berakar pada watak rakus yang sama ketika [kebiasaan korporasi mengutak-atik aturan demi menyedot data pengguna](/ketika-whatsapp-menolak-membiarkan-orang-hidup-tenang-tanpa) selalu dibungkus dengan jargon manis peningkatan kenyamanan konsumen.

Bagi para pengelola situs dan pekerja kreatif di tanah air, drama pembatalan sepihak ini menghadirkan pelajaran berharga yang tak boleh dilupakan. Kedaulatan data di ruang maya bukan barang gratis yang bisa kita percayakan pada kemurahan hati konglomerat platform luar negeri. Menutup celah pengikisan hak digital tidak cukup hanya dengan berharap raksasa media sosial bertobat menjadi dermawan.

Lain kali jika ada raksasa teknologi yang mendadak menyodorkan lembaran panjang syarat ketentuan baru dan meminta Anda mengeklik tombol setuju secara kilat, luangkan waktu sejenak untuk menyeruput kopi dan membaca detailnya. Sebab di balik kalimat berbunga-bunga tentang inovasi teknologi, siapa tahu mereka sedang diam-diam mendaftarkan seluruh isi rumah virtual Anda sebagai menu prasmanan gratis untuk mesin kecerdasan buatan mereka.`
  },
  {
    title: "Ketika Mayoritas Gamer PC Rela Pasang Badan Menunggu GTA 6 Ketimbang Beli Konsol Baru",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["GTA 6", "Rockstar Games", "PC Gaming", "Industri Game", "Gamer Indonesia", "Konsol Game"],
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pengaturan meja komputer gaming PC lengkap dengan monitor dan pencahayaan RGB",
    sourceUrl: "https://www.pcgamer.com/games/grand-theft-auto/pc-players-wait-for-gta-6-port-poll/",
    excerpt: "Survei terbaru menunjukkan lebih dari tujuh puluh persen pemain komputer memilih bersabar menanti GTA 6 hadir di PC ketimbang membeli konsol baru. Di balik ketabahan itu, tersimpan pembuktian bahwa kesetiaan gamer sejati tidak bisa dibeli dengan perangkap eksklusivitas temporer.",
    content: `Di tengah perbincangan hangat tongkrongan gamer manapun belakangan ini, ada satu pertanyaan keramat yang hampir pasti terlontar begitu topik tentang *Grand Theft Auto 6* mulai dibicarakan: apakah Anda bersedia merogoh kocek jutaan rupiah membeli PlayStation 5 hanya demi memainkan petualangan anyar tersebut di hari peluncuran? Bagi sebagian orang yang dompetnya tebal atau mereka yang memang sejak awal hidup damai berdampingan dengan konsol di ruang keluarga, jawabannya tentu enteng saja. Namun bagi jutaan pengguna komputer yang terbiasa merakit rig PC dengan penuh perjuangan menyisihkan uang gaji bulanan, pertanyaan tersebut kerap disambut helaan napas panjang yang diiringi senyum kecut.

Dilema klasik itu rupanya bukan sekadar obrolan iseng di warung kopi internet lokal. Sebagaimana dicatat dalam laporan jajak pendapat terbaru PC Gamer pekan ini, sebanyak tujuh puluh satu persen gamer PC di seluruh dunia secara tegas menyatakan bakal tetap menunggu perilisan versi PC dari GTA 6. Angka mayoritas mutlak ini memperlihatkan bahwa sebagian besar pemain komputer menolak tunduk pada skema perilisan bertahap yang sengaja dimainkan oleh Rockstar Games dan Take-Two Interactive, kendati mereka harus bersiap menanti satu hingga dua tahun lebih lama setelah versi konsol membanjiri pasar.

Bukan rahasia lagi bahwa taktik menunda rilis versi PC adalah strategi bisnis kuno yang sangat menguntungkan bagi para pemegang saham industri game. Dengan menahan portingan komputer, penerbit game berhasil memicu kepanikan psikologis yang memaksa para penggemar berat untuk membeli konsol terlebih dahulu, sebelum kemudian menjual judul game yang sama untuk kedua kalinya ketika versi PC akhirnya meluncur dengan grafik yang lebih mantap. Praktik monetisasi berlapis semacam ini memang lihai memompa pundi-pundi dividen korporasi. Namun bagi pemain biasa, strategi tersebut tak ubahnya pemerasan halus yang memperlakukan kesetiaan komunitas sebagai sapi perah yang bisa diperas berulang kali.

![Pengaturan meja komputer gaming PC lengkap dengan monitor dan pencahayaan RGB](https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop)

Sikap cuek penerbit terhadap ekosistem PC sebenarnya bukanlah fenomena baru, mengingat kita sudah melihat [sikap santai petinggi Rockstar menghadapi isu pembajakan](/ketika-bos-take-two-santai-hadapi-pembajakan-gta-6-tapi-bikin) sambil tetap percaya diri mematok harga tinggi untuk produk mereka. Kendati demikian, tekad para gamer PC untuk bertahan kali ini memiliki fondasi argumen yang sangat rasional. Bermain game aksi dunia terbuka di komputer bukan melulu soal mengejar angka *frame rate* ratusan hertz atau resolusi ultra tajam yang memanjakan mata. Keunggulan mutlak yang tidak pernah bisa ditandingi oleh mesin konsol tertutup adalah kebebasan komunitas modifikasi (*modding*).

Di tangan para modder kreatif, petualangan di jalanan fiksi Leonida kelak bukan hanya milik alur cerita baku yang dirancang studio pengembang. Komunitas modding bisa menghadirkan ribuan fitur baru, mulai dari perbaikan kualitas visual, penyesuaian kendali mouse dan keyboard yang presisi, hingga konten-konten gila buatan penggemar yang membuat sebuah game tetap bernyawa hingga belasan tahun ke depan. Membeli konsol seharga enam atau tujuh juta rupiah hanya demi memainkan satu judul game dengan batasan ekosistem tertutup adalah kalkulasi ekonomi yang terasa sangat mubazir bagi akal sehat pekerja biasa. Terlebih di tengah situasi saat ini ketika [strategi memeras dompet pemain demi mengejar dividen investor](/laba-sony-melonjak-berkat-spider-man-tapi-dompet-gamer-tetap) kian merajalela di industri hiburan digital.

Menghadapi masa penantian panjang tersebut tentu bukan tanpa risiko sosial bagi para pemain komputer. Selama berbulan-bulan sejak peluncuran konsol tiba, linimasa media sosial, kanal video daring, hingga grup percakapan obrolan dipastikan bakal bertransformasi menjadi ladang ranjau bocoran cerita (*spoiler*). Gamer PC dituntut memiliki disiplin batin sekuat biksu pertapa: menahan godaan menonton video cuplikan ending di internet, mematikan algoritma rekomendasi beranda, dan menulikan telinga dari celoteh kawan-kawan yang sibuk memamerkan tangkapan layar petualangan karakter Jason dan Lucia di konsol mereka.

Bagi komunitas pemain PC, kesabaran menanti adalah bentuk perlawanan paling elegan terhadap arogansi strategi rilis bertahap. Biarkan saja para pengguna konsol berpesta pora lebih dulu mencicipi jalanan Vice City di hari pertama. Pada saatnya nanti ketika versi komputer mendarat di aplikasi Steam lengkap dengan ribuan mod liar buatan komunitas, para gamer PC tahu persis bahwa menunggu dua tahun jauh lebih terhormat daripada harus menyerahkan separuh tabungan demi kotak konsol yang bakal berdebu di kolong meja televisi.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 03:00 WIB)");
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
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261107-0300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Failed:", err);
    process.exit(1);
  });
}
