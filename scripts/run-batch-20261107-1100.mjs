import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Lagu Ciptaan Menteri Borong Piala AMI Awards Saat Musisi Pusing Bayar Tagihan",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["AMI Awards", "Industri Musik", "Kemendikdasmen", "Musik Anak", "Royalti Musisi", "Kritik Sosial"],
    imageUrl: "https://img.antaranews.com/cache/1200x800/2026/11/05/1000302291.jpg",
    imageAlt: "Penyerahan piala Anugerah Musik Indonesia AMI Awards 2026 untuk lagu anak-anak karya kementerian",
    sourceUrl: "https://jogja.antaranews.com/berita/865875/kemendikdasmen-raih-dua-penghargaan-ami-awards-lewat-lagu-anak",
    excerpt: "Lagu anak gubahan Menteri Pendidikan menyabet dua penghargaan sekaligus di ajang AMI Awards 2026. Di atas panggung acara tampak berkilau dan penuh senyum birokrasi, namun di akar rumput para pencipta lagu independen masih berdarah-darah mengais royalti yang kerap menguap tanpa kejelasan.",
    content: `Bagi musisi arus pinggiran yang tiap akhir pekan pontang-panting mengangkut ampli gitar sendiri ke panggung gigs sempit, malam penganugerahan musik di televisi selalu menyajikan pemandangan ganjil. Di layar kaca, para pesohor berdandan necis saling melempar pelukan hangat, lampu sorot megah berpendar ke segala penjuru ballroom, dan piala-piala logam bersepuh emas dibagikan diiringi tepuk tangan meriah para pejabat industri. Namun begitu siaran langsung berakhir, realitas yang tersisa di luar gedung megah itu kembali pada nasib lama: struk sewa studio latihan yang belum lunas dan obrolan getir di angkringan tentang honor panggung yang dipotong panitia.

Pemandangan kontras semacam itu kembali tersaji mencolok pada gelaran Anugerah Musik Indonesia (AMI) Awards ke-28 tahun 2026. Sebagaimana dicatat dalam laporan ANTARA News dan siaran pers kementerian, Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) berhasil memborong dua trofi bergengsi sekaligus. Lagu anak bertajuk "Rukun Sama Teman" ciptaan Menteri Pendidikan Abdul Mu'ti dinobatkan sebagai Pencipta Lagu Anak-Anak Terbaik sekaligus memenangkan kategori Artis Solo Pria/Wanita/Grup/Kolaborasi Anak-Anak Terbaik lewat penampilan trio cilik Vania, Arina, dan Ryan.

Secara seremonial humas, pencapaian ini tentu terdengar manis dan membanggakan bagi jajaran birokrasi kementerian. Pihak kementerian dengan bangga menyebut penghargaan ini sebagai wujud komitmen menghidupkan kembali lagu anak Indonesia yang puluhan tahun mati suri akibat digilas lagu-lagu romansa dewasa di media sosial.

![Penyerahan piala Anugerah Musik Indonesia AMI Awards 2026 untuk lagu anak-anak karya kementerian](https://img.antaranews.com/cache/1200x800/2026/11/05/1000302291.jpg)

Namun bagi siapa pun yang mencermati sengkarut industri musik tanah air, kemenangan pejabat negara di ajang apresiasi musik independen justru menyodorkan ironi yang getir. Ekosistem lagu anak di Indonesia memang lama terbengkalai, tetapi keterbengkalaian itu lahir bukan karena pencipta lagu di pelosok daerah kehilangan kreativitas. Masalah utamanya berakar pada ketiadaan ruang distribusi yang adil, hilangnya jam tayang konten anak di stasiun televisi swasta, dan minimnya perlindungan royalti bagi para komposer yang tidak punya koneksi ke lingkaran kekuasaan.

Ketika seorang menteri yang memegang anggaran negara triliunan rupiah dengan mudah memanfaatkan infrastruktur kehumasan untuk memproduksi, mempromosikan, dan meloloskan karyanya ke panggung penghargaan paling prestisius, panggung kompetisi seketika terasa jomplang. Musisi anak jalanan atau pencipta lagu daerah yang bertahun-tahun merilis karya edukatif lewat kanal mandiri hanya bisa menonton dari kejauhan tanpa pernah mendapat privilese promosi serupa.

Kecanggungan ini membawa ingatan publik pada momen ketika [panggung megah AMI Awards disengat salam tiga jari dan keresahan warga](/ketika-panggung-megah-ami-awards-disengat-salam-tiga-jari-dan). Di tempat yang sama, musisi independen kerap melontarkan kritik terbuka bahwa karpet merah penganugerahan sering kali berfungsi sebagai etalase kosmetik untuk menutupi borok industri, mulai dari monopoli panggung festival hingga kompensasi royalti digital yang nilainya recehan.

Situasi tersebut mencerminkan kembali catatan muram saat [musisi tanah air masih mengais royalti di balik kilau piala](/ketika-tulus-memborong-piala-ami-awards-dan-realitas-musisi-yang). Berapa pun banyaknya penghargaan yang dibagikan kepada figur publik atau selebritas ternama, sistem distribusi hak cipta kita masih compang-camping. Banyak pencipta lagu legendaris di usia senja hidup serba pas-pasan karena royalti karya mereka tersangkut di meja birokrasi lembaga manajemen kolektif.

Alih-alih berlomba menggubah lagu dan mengoleksi plakat penghargaan pribadi, peran paling mendesak dari kementerian pendidikan sejatinya adalah mereformasi kurikulum kesenian di sekolah dan membereskan kesejahteraan para guru honorer yang mengajar seni budaya di pelosok desa. Kehadiran ruang apresiasi musik di sekolah tidak boleh hanya mengandalkan inisiatif sporadis dari elite pejabat, melainkan harus dibangun secara sistematis lewat kebijakan publik yang berpihak pada warga akar rumput.

Dua piala AMI Awards kini boleh saja terpajang gagah di lemari pajangan kantor kementerian di Jakarta. Namun jika para komposer independen di daerah masih harus mengamen demi membeli beras dan anak-anak sekolah tetap kekurangan alat musik layak di kelasnya, trofi emas itu pada akhirnya tak lebih dari sekadar suvenir mewah para pejabat yang hobi manggung di sela-sela jam kerja dinas.`
  },
  {
    title: "Ketika OpenAI Dihargai Belasan Kuadriliun Rupiah Sementara Chatbot Masih Sering Halu",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["OpenAI", "Kecerdasan Buatan", "Sam Altman", "Silicon Valley", "Valuasi Startup", "Big Tech"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/09/STK155_OPEN_AI_CVirginia_2_A.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Gedung perkantoran dan logo OpenAI dengan latar belakang komputasi kecerdasan buatan",
    sourceUrl: "https://www.theverge.com/ai-artificial-intelligence/1029380/openai-1-25-trillion-investment-valuation",
    excerpt: "Valuasi OpenAI dilaporkan menembus 1,25 triliun dolar AS setelah menyedot kucuran dana segar 11 miliar dolar. Di mata pemodal ventura angkanya terdengar fantastis, namun bagi sysadmin warkop ini hanyalah babak baru festival bakar uang komputasi awan yang makin tidak masuk akal.",
    content: `Kalau Anda bekerja menjaga rak server di ruang bawah tanah kantor yang bising atau sekadar gemar merakit komputer sendiri di kamar kos, obrolan tentang valuasi startup Silicon Valley belakangan ini terasa semakin mirip dongeng antariksa. Tiap beberapa bulan sekali, angka-angka yang dilempar para bankir investasi ke media massa sudah berada di luar batas nalar orang yang tiap bulan pusing menghitung tagihan listrik pendingin server. Triliun rupiah sudah dianggap uang receh; kini mereka mulai terbiasa melempar angka kuadriliun tanpa sedikit pun rasa bersalah.

Puncak dari histeria bursa modal itu kembali tercatat pekan ini. Sebagaimana dicatat dalam laporan Bloomberg dan ulasan The Verge, OpenAI baru saja mengamankan komitmen putaran pendanaan anyar senilai 11 miliar dolar AS. Kucuran dana jumbo ini mendongkrak valuasi korporasi pencipta ChatGPT tersebut hingga menyentuh angka 1,25 triliun dolar AS—atau setara sekitar Rp19.800 triliun dengan kurs saat ini. Valuasi mencengangkan ini melonjak drastis hanya dalam rentang delapan bulan setelah Maret lalu mereka mengantongi dana investor di angka valuasi 852 miliar dolar, sementara rival terdekatnya Anthropic juga dikabarkan bersiap melantai di bursa saham lewat penawaran umum perdana.

Angka dua puluh ribu triliun rupiah untuk sebuah perusahaan perangkat lunak yang baru berumur seumur jagung tentu terdengar sangat memesona di atas kertas prospektus presentasi PowerPoint. Namun bagi teknisi yang sehari-hari berhadapan dengan baris kode dan terminal Linux, nilai fantastis itu menyisakan satu pertanyaan mendasar yang menggelitik: apa sebenarnya yang sedang dibeli dengan uang sebanyak itu?

![Gedung perkantoran dan logo OpenAI dengan latar belakang komputasi kecerdasan buatan](https://platform.theverge.com/wp-content/uploads/sites/2/2026/09/STK155_OPEN_AI_CVirginia_2_A.jpg?quality=90&strip=all&crop=0,0,100,100)

Kenyataannya, di balik tabir optimisme para eksekutif korporasi, OpenAI masih merupakan mesin pemakar uang paling rakus dalam sejarah industri komputasi. Demi melatih model bahasa generasi berikutnya dan mempertahankan jutaan kueri percakapan harian, kas perusahaan terus terkuras miliaran dolar untuk menyewa klaster ribuan kartu grafis mutakhir, membangun gardu daya listrik mandiri, dan memborong hak lisensi data teks dari berbagai penjuru internet.

Ironi terbesarnya terasa langsung di tangan jutaan pengguna awam di tingkat bawah. Kendati valuasinya sudah menyaingi kapitalisasi pasar raksasa energi global, chatbot yang disuguhkan ke meja kerja kita masih kerap mengalami halusinasi konyol. Model bahasa tersebut masih suka mengarang nama pasal hukum fiktif, memberikan rujukan artikel ilmiah palsu, atau mendadak bengong dengan pesan kesalahan server kehabisan kapasitas tepat saat tenggat tugas kantor tinggal hitungan menit.

Kecurigaan publik terhadap ambisi ugal-ugalan korporasi kecerdasan buatan ini sejalan dengan kegusaran para pengelola situs web independen, persis seperti skandal etika saat [Meta diam-diam melatih AI dari postingan pengguna](/ketika-meta-mengira-pengelola-halaman-facebook-tak-membaca-syarat). Demi memuaskan dahaga algoritma yang haus data latihan, para raksasa teknologi tidak ragu menyedot karya cipta warga internet tanpa izin dan tanpa kompensasi sepeser pun.

Perlombaan membangun fasilitas komputasi bernilai fantastis ini juga menciptakan perburuan perangkat keras yang luar biasa sengit, bahkan sampai menyeret operasi intelijen tingkat tinggi sebagaimana terungkap saat [bos Nvidia dibuntuti mata-mata berkedok rekan bisnis](/ketika-bos-nvidia-jensen-huang-dibuntuti-mata-mata-berkedok-rekan). Ketika lempengan chip semikonduktor diperebutkan seperti emas hitam di bursa gelap, biaya yang harus ditanggung masyarakat awam justru membengkak: harga kartu grafis komputer rumahan melambung tinggi dan pasokan energi listrik perkotaan tersedot demi menghidupkan deretan server kecerdasan buatan.

Para konglomerat dan manajer pengelola dana pensiun di New York boleh saja terus mengerek valuasi OpenAI hingga menembus batas langit bursa saham demi menjaga ilusi pertumbuhan eksponensial. Namun bagi kita yang tiap hari duduk di warung kopi sembari memperbaiki sistem kantor yang tumbang, hukum dasar rekayasa perangkat lunak tidak pernah berubah: secanggih apa pun algoritma kecerdasan buatan yang bernilai ribuan triliun rupiah, ia akan langsung mati kutu menjadi kotak besi rongsokan begitu kabel colokan listriknya terlepas dari stopkontak dinding.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 11:00 WIB)");
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
  console.log("🎉 SELURUH ARTIKEL BATCH 11:00 WIB BERHASIL DITERBITKAN!");
  console.log("=================================================================\n");
  console.log(JSON.stringify(results, null, 2));
}

// Execute if run directly
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261107-1100.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Failed:", err);
    process.exit(1);
  });
}
