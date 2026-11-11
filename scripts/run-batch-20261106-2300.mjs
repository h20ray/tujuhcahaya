import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Seluruh Musisi Janjian Rilis Lagu Tiap Jumat dan Telinga Kita Berujung Kebas",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Industri Musik", "Rilis Lagu", "Platform Streaming", "Skena Musik", "Kebiasaan Mendengar", "Musisi Indie"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2025/10/06/Taylor.jpeg",
    imageAlt: "Ilustrasi hiruk-pikuk panggung megah konser musik dan rilisan lagu baru",
    sourceUrl: "https://www.antaranews.com/berita/5835695/mengapa-lagu-dan-album-baru-sering-dirilis-pada-hari-jumat",
    excerpt: "Pernahkah Anda heran mengapa hampir seluruh musisi di muka bumi kompak merilis lagu baru setiap hari Jumat? Di balik dalih memanjakan santai akhir pekan, tradisi seragam ini sejatinya adalah perangkap algoritma streaming yang menenggelamkan karya musisi independen.",
    content: `Kalau Anda punya kebiasaan membuka aplikasi pemutar lagu menjelang akhir pekan, pemandangan yang tersaji hampir selalu seragam. Baru saja melangkah keluar dari pintu kantor atau menepi di meja angkringan favorit pada Jumat sore, layar ponsel langsung dibanjiri deretan notifikasi. Mulai dari solois pop papan atas internasional, band rock lawas yang bangkit kembali, hingga unit indie lokal yang baru kemarin sore rekaman di kamar kos, semuanya serempak mengumumkan satu hal: lagu baru mereka sudah resmi mengudara.

Fenomena ini bukan kebetulan semata atau hasil musyawarah gaib antar-manajer musisi. Sebagaimana dicatat dalam laporan Antara Hiburan pekan ini, tradisi merilis karya pada hari Jumat—yang di kancah global dikenal sebagai *Global Release Day*—resmi diseragamkan oleh federasi industri rekaman internasional sejak Juli 2015 silam. Sebelum aturan itu diketok palu, tiap negara punya jadwal keramatnya masing-masing. Pasar Inggris terbiasa dengan hari Senin, Amerika Serikat setia dengan hari Selasa, sementara toko musik di Jepang merayakan hari Rabu. Alasan awal penyeragaman tersebut terdengar sangat masuk akal: menekan angka pembajakan digital dan menyelaraskan siklus penghitungan tangga lagu bergengsi dunia semacam Billboard.

Namun itu cerita sepuluh tahun lalu, ketika orang masih berburu piringan hitam atau mengantre membeli kepingan CD di toko fisik. Hari ini, ketika konsumsi bunyi sepenuhnya beralih ke wadah daring, kesepakatan dagang tersebut telah bermutasi menjadi medan tempur algoritma yang sangat brutal. Hari Jumat bukan lagi sekadar penanda akhir pekan, melainkan ritual tumpah ruah di mana puluhan ribu berkas audio dijejalkan serentak ke server penyedia streaming dalam rentang dua puluh empat jam.

![Ilustrasi panggung megah konser musik dan rilisan lagu baru](https://img.antaranews.com/cache/800x533/2025/10/06/Taylor.jpeg)

Di sinilah letak ironi terbesar industri musik modern. Alih-alih memberikan ruang apresiasi yang lapang, jadwal rilis yang menumpuk di hari yang sama justru menciptakan kepenatan sensorik akut bagi para penikmat musik. Playlist kurasi mingguan seperti *New Music Friday* kini menyerupai etalase hipermarket di jam diskon cuci gudang. Begitu banyak judul dan nama penampil yang berdesakan, hingga telinga pendengar kehilangan daya lekat emosional terhadap melodi yang didengarkan. Sebuah lagu yang digarap berbulan-bulan dengan cucuran keringat hanya diberi kesempatan beberapa detik sebelum jempol pengguna melompat ke trek berikutnya.

Bagi pemerhati denyut nada perkotaan seperti [Margaretha Nina](/author/margaretha-nina), sistem kalender seragam ini menempatkan para musisi independen pada posisi yang sangat terjepit. Grup musik arus bawah yang berkutat di [skena musik indie](/tag/musik) dan mengandalkan anggaran mandiri dari hasil manggung kecil-kecilan dipaksa bertarung memperebutkan atensi publik di hari yang sama dengan mesin pemasaran label multinasional beranggaran miliaran rupiah. Bila karya mereka luput dari sorotan kurator algoritma di hari Jumat itu, riwayat lagu tersebut kerap dianggap tamat sebelum sempat diperdengarkan secara layak.

Di tengah kepungan industri yang serba terburu-buru ini, siasat bertahan hidup dari kalangan akar rumput di berbagai kota justru memperlihatkan daya lentur yang mengagumkan. Alih-alih menggantungkan nasib sepenuhnya pada belas kasihan kurasi playlist hari Jumat, banyak musisi independen memilih kembali ke jalur gerilya: mencetak kaset pita dalam jumlah terbatas, menjual kaos di lapak gigs komunitas, atau memanfaatkan platform penjualan mandiri untuk bertransaksi langsung dengan pendengar loyal mereka. Bagi mereka, memiliki seratus kawan dengar setia yang hafal tiap baris lirik di depan panggung kecil jauh lebih bernyawa ketimbang mengejar ratusan ribu angka putar anonim di layanan streaming yang pembagian royaltinya bahkan kerap tak cukup untuk membeli kopi susu sasetan.

Dinamika ini juga mengubah cara pandang kita terhadap nilai sebuah karya di [rubrik Musik & Gaya Hidup](/category/musik). Musik perlahan kehilangan watak kontemplatifnya dan tereduksi menjadi sekadar komoditas pengisi kebisingan latar belakang. Kita seolah diwajibkan untuk selalu lapar akan rilisan teranyar, seolah lagu yang dirilis tiga pekan lalu sudah kedaluwarsa dan tak lagi relevan untuk dibicarakan di tongkrongan.

Kita barangkali merasa dimanjakan oleh kemewahan akses tanpa batas ini. Kapan pun kita mau, jutaan trek siap mengalir ke dalam earphone hanya dengan satu ketukan jari. Namun bila setiap Jumat tiba telinga kita hanya dipaksa menenggak tumpukan berkas nada baru tanpa sempat meresapi bait liriknya, barangkali yang paling kita butuhkan di pengujung pekan bukanlah dentuman lagu anyar, melainkan keheningan kamar kos yang damai tanpa bising rekomendasi mesin.`
  },
  {
    title: "Ketika Sensor Rahasia Keyboard iPhone Menentukan Kata Apa yang Boleh Diketik Cepat",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Apple", "iPhone", "iOS", "Sensor Digital", "Privasi Digital", "Keamanan Siber"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/02/DSC_2327.jpg",
    imageAlt: "Tampilan keyboard virtual di layar smartphone iPhone",
    sourceUrl: "https://www.theverge.com/tech/1028663/apple-ios-keyboard-blocked-words-autocomplete",
    excerpt: "Peneliti keamanan membongkar lebih dari seratus ribu kata dan frasa rahasia yang sengaja diblokir Apple dari fitur prediksi teks dan usap keyboard iOS. Di balik jargon privasi megah, raksasa Cupertino ini diam-diam bertindak bak polisi moral bagi jempol para penggunanya.",
    content: `Pernahkah Anda sedang asyik mengetik pesan singkat di aplikasi perpesanan menggunakan usapan jempol (*swipe-typing*), lalu mendadak kata yang Anda maksudkan menolak muncul di barisan prediksi atas keyboard? Biasanya, reaksi spontan kita adalah menyalahkan kondisi fisik: mengira layar smartphone sedang berminyak sehabis memegang gorengan, atau merasa jempol kita sendiri yang kurang presisi bermanuver di atas kaca. Kita jarang sekali curiga bahwa di balik layar bening itu, ada barisan algoritma yang sengaja menahan kata tersebut agar tidak meluncur bebas.

Kecurigaan itulah yang akhirnya terjawab secara gamblang baru-baru ini. Sebagaimana dicatat dalam laporan The Verge dan kantor berita Reuters pekan ini, seorang peneliti keamanan perangkat lunak bernama Derik Kauffman membongkar berkas konfigurasi tersembunyi di dalam sistem operasi iOS milik Apple. Temuannya cukup bikin dahi berkerut: pabrikan yang bermarkas di Cupertino itu ternyata menanamkan daftar hitam rahasia berisi lebih dari seratus ribu kata dan frasa dalam berbagai bahasa dunia yang sengaja dipasung dari fitur *autocomplete* dan pengetikan berbasis usap.

Daftar sensor tersebut merentang sangat luas dan sarat muatan politis. Mulai dari istilah makian vulgar, teori konspirasi kesehatan seputar pandemi, hingga sindiran politik tajam terhadap tokoh-tokoh negara adidaya. Apple memang tidak mematikan kata-kata itu secara total. Pengguna tetap bisa mengetikkan istilah terlarang tersebut, asalkan mau bersusah payah menekan abjadnya satu demi satu secara manual seperti murid sekolah dasar yang baru belajar membaca.

![Tampilan keyboard virtual di layar smartphone iPhone](https://platform.theverge.com/wp-content/uploads/sites/2/2025/02/DSC_2327.jpg)

Namun bagi siapa pun yang terbiasa menelaah polah tingkah korporasi teknologi dengan kacamata sysadmin warkop seperti [Elang Elano](/author/elang-elano), argumen pembiaran tersebut adalah bentuk pembelaan yang naif. Di zaman komunikasi kilat di mana kecepatan respons menjadi segalanya, mencabut sebuah kata dari fitur saran otomatis adalah bentuk sensor halus yang sangat efektif (*subtle friction*). Dengan menambahkan rasa malas bagi pengguna untuk mengeja kata tertentu, perusahaan raksasa ini secara sadar tengah mengarahkan kosakata publik ke zona nyaman yang steril dan ramah pengiklan.

Di panggung peluncuran tahunan dengan sorotan tata cahaya megah, Apple selalu gemar memposisikan dirinya sebagai pelindung suci hak-hak individu. Segala fitur dirancang dengan embel-embel menjaga keamanan data dan menghormati kebebasan pengguna. Namun temuan daftar hitam keyboard ini membuktikan bahwa batas antara moderasi konten yang bertanggung jawab dan campur tangan moral korporat sering kali sangat tipis. Tanpa pernah meminta persetujuan pemilik perangkat, para insinyur perangkat lunak di Silicon Valley merasa berhak menentukan diksi mana yang pantas meluncur mulus dan diksi mana yang harus dipersulit perjalanannya.

Bagi masyarakat pengguna gadget di tanah air yang sehari-hari menelusuri kabar di [kanal Teknologi](/category/tech), fenomena ini memperlihatkan rapuhnya kedaulatan kita sebagai konsumen. Kita merogoh kocek belasan hingga puluhan juta rupiah untuk membeli gadget premium, namun di dalam genggaman tangan, perangkat itu tetap beroperasi di bawah kendali ideologis sang pembuat mesin. Diskusi seputar [privasi digital](/tag/privasi) selama ini sering kali hanya berkutat pada ancaman pencurian data oleh peretas jahat, sembari kita menutup mata bahwa korporasi penyedia platform itu sendirilah yang setiap hari mengontrol cara kita berbicara di ruang digital.

Melihat kelakuan korporasi Silicon Valley yang gemar bertindak layaknya orang tua protektif ini, warganet di tanah air sebenarnya punya siasat tandingan yang sudah teruji zaman: kelihaian berbahasa gaul dan humor pelesetan. Sejak era forum internet lawas hingga linimasa media sosial modern, sensor algoritma kaku semacam ini selalu kedodoran membendung kegembiraan obrolan warga. Ketika sebuah kata resmi dilarang atau dipersulit kemunculannya, jemari anak muda kita dengan lincah melahirkan ratusan variasi ejaan baru, singkatan akronim, hingga pelesetan fonetik yang jauh lebih tajam dan mengocok perut. Sensor korporat yang dirancang di ruang rapat dingin di California mendadak terlihat kikuk begitu berhadapan dengan keliaran bahasa tongkrongan warkop kita.

Ada ironi yang cukup getir ketika melihat perusahaan yang dulu mendobrak industri komputer lewat slogan legendaris *Think Different* kini justru menyetel mesinnya agar jutaan orang mengetik dengan cara yang seragam. Lain kali jika keyboard ponsel pintar Anda mendadak mogok melengkapi kalimat satir yang ingin Anda kirimkan ke grup obrolan, tidak perlu buru-buru mengelap layar. Nikmati saja momen itu sebagai tanda bahwa Anda sedang dibimbing dengan santun oleh korporasi triliunan dolar.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 23:00 WIB)");
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
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261106-2300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Failed:", err);
    process.exit(1);
  });
}
