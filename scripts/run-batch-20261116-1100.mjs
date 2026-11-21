import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Tradisi Bioskop Rilis Film Hari Kamis Jadi Taruhan Hidup Mati Produser Lokal",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Bioskop Indonesia", "Film Nasional", "Industri Perfilman", "Budaya Urban", "Layar Bioskop", "Margaretha Nina"],
    imageUrl: "https://img.antaranews.com/cache/1200x800/2026/08/16/IMG_20260702_165952.jpg",
    imageAlt: "Suasana peluncuran poster dan cuplikan film nasional di hadapan para pemeran dan sineas industri hiburan Indonesia",
    sourceUrl: "https://www.antaranews.com/berita/5853267/kenapa-mayoritas-film-di-indonesia-rilis-hari-kamis-ini-alasannya",
    excerpt: "Film Indonesia selalu serempak tayang perdana di bioskop setiap hari Kamis. Tradisi ini bukan sekadar penanda akhir pekan, melainkan pertaruhan kejam kuota layar 24 jam sebelum digusur film impor.",
    content: `Bagi penikmat film bioskop di tanah air, hari Kamis memiliki aura keramat tersendiri yang sudah mendarah daging dalam kalender hiburan mingguan. Begitu jam istirahat kantor tiba atau jam kuliah sore usai, grup obrolan tongkrongan mulai riuh menanyakan judul apa saja yang baru turun layar di etalase bioskop terdekat. Poster-poster anyar berjejer rapi di lobi mal megah, mulai dari film horor dengan judul puitis bernada mistis, drama percintaan anak muda perkotaan yang bikin baper, hingga film komedi bertabur komika ternama. Kebiasaan menonton di malam Jumat ini sudah dianggap sebagai ritual wajib untuk melepas penat setelah empat hari penuh diperas oleh rutinitas pekerjaan.

Namun jika ditelisik lebih cermat, tradisi merilis karya anyar setiap hari Kamis bukanlah kebetulan romantis apalagi sekadar kepatuhan kalender. Sebagaimana dicatat dalam laporan industri hiburan Antara akhir pekan ini, pemilihan hari Kamis merupakan strategi bisnis perfilman yang sangat diperhitungkan oleh jaringan eksibitor dan para distributor nasional. Memulai jadwal tayang pada hari Kamis memberi ruang napas bagi sebuah film untuk membangun momentum promosi dari mulut ke mulut (*word of mouth*) sebelum gelombang penonton akhir pekan menyerbu loket tiket pada Jumat malam hingga Minggu.

Di balik kalkulasi matematis tersebut, hari Kamis sejatinya adalah arena gladiator yang sangat brutal bagi kelangsungan hidup para produser film nasional. Sutradara kawakan Hanung Bramantyo dalam berbagai kesempatan diskusi perfilman pernah membeberkan kenyataan pahit di balik layar: performa penjualan tiket pada hari pertama penayangan adalah vonis kilat yang menentukan nasib film tersebut di hari-hari berikutnya. Manajemen jaringan bioskop memantau angka keterisian kursi secara ketat dan tanpa kompromi. Jika sebuah film lokal gagal menyedot penonton pada hari Kamis, jangan heran bila keesokan siangnya jadwal pertunjukan langsung dipangkas separuh, atau bahkan lenyap tak berbekas dari jadwal akhir pekan untuk dialihkan ke judul lain yang lebih laris.

![Suasana peluncuran poster dan cuplikan film nasional di hadapan para pemeran dan sineas industri hiburan Indonesia](https://img.antaranews.com/cache/1200x800/2026/08/16/IMG_20260702_165952.jpg)

Persaingan memperebutkan jatah layar ini kian mencekik leher sineas lokal karena keterbatasan infrastruktur bioskop kita. Sebagaimana sempat disorot dalam agenda dengar pendapat Komisi VII DPR RI mengenai tata kelola distribusi film nasional, jumlah layar bioskop di Indonesia masih sangat timpang dan terkonsentrasi di kota-kota besar Pulau Jawa. Di saat produksi film nasional tengah mengalami lonjakan produktivitas yang menggembirakan, para produser lokal harus rela berdesakan memperebutkan segelintir studio dengan film-film *blockbuster* impor asal Hollywood yang mengantongi anggaran promosi triliunan rupiah dan sokongan monopoli distribusi global.

Ketimpangan panggung hiburan ini memperlihatkan fenomena serupa di ranah pertunjukan lain, persis ketika [venue konser musik menumpuk di kota besar](/venue-konser-musik-menumpuk-di-jakarta-saat-penonton-daerah-cuma) dan memaksa masyarakat di pelosok daerah hanya bisa menelan ludah menyaksikan gemerlap industri kreatif dari kejauhan. Keterbatasan layar di daerah membikin film-film independen lokal yang sarat muatan kultural sering kali mati muda sebelum sempat bertemu penonton aslinya. Gerakan sineas arus bawah yang memutar karya di ruang alternatif sejatinya mengingatkan kita pada bagaimana [komunitas warga merawat ruang publik di daerah](/komunitas-semarang-rawat-roh-koes-plus-di-tugu-muda-saat-konser) secara mandiri demi mempertahankan denyut kesenian tanpa harus tunduk pada selera pasar korporasi besar.

Hari Kamis pada akhirnya adalah cermin kejujuran industri perfilman kita: sebuah perpaduan antara harapan tinggi produser independen dan hukum rimba seleksi alam modal raksasa. Menghabiskan uang puluhan ribu rupiah untuk membeli tiket bioskop lokal di hari Kamis bukan lagi sekadar urusan mencari hiburan pelepas lelah, melainkan bentuk solidaritas paling konkret agar layar bioskop kita tidak melulu diserbu oleh manusia berkostum spandeks impor yang sibuk menyelamatkan dunia fiktif sementara cerita kita sendiri terpinggirkan di tanah air sendiri.`
  },
  {
    title: "Apple Sibuk Poles AI Kesehatan Saat Pasien Masih Doyan Panik Percaya Robot Halu",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Apple", "Apple Health", "Kecerdasan Buatan", "Privasi Digital", "Kesehatan Digital", "Elang Elano"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/applestudy1b.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Tampilan antarmuka riset aplikasi kesehatan berbasis kecerdasan buatan Apple Health AI Usage Study pada perangkat iPhone",
    sourceUrl: "https://www.theverge.com/tech/1033355/apples-new-study-looks-to-improve-the-effectiveness-of-ai-health-tools",
    excerpt: "Apple menggandeng OpenEvidence menggelar riset Apple Health AI Usage Study lewat aplikasi iOS. Di saat korporasi memoles jawaban bot medis, warga masih gampang paranoid curhat ke chatbot.",
    content: `Perilaku orang modern saat tubuhnya mulai mengirimkan sinyal tidak beres sering kali mengundang tawa sekaligus rasa miris. Begitu tenggorokan terasa agak gatal atau pelipis kiri berdenyut sedikit sehabis begadang, alih-alih mematikan layar gadget lalu tidur lelap delapan jam, jari tangan kita refleks membuka aplikasi chatbot cerdas buatan atau mesin pencari. Kita mengetikkan keluhan fisik dengan deskripsi yang hiperbolik, lalu menunggu beberapa detik sebelum algoritma menampilkan daftar kemungkinan penyakit. Hasilnya bisa ditebak: berawal dari sekadar dehidrasi akibat kurang minum air putih di kantor, sepuluh menit kemudian kita sudah panik setengah mati karena layar smartphone menampilkan vonis gangguan saraf langka yang membuat jantung berdegup kencang.

Kecemasan massal akibat diagnosis mandiri semacam ini rupanya ditangkap sebagai peluang bisnis raksasa oleh korporasi teknologi Silicon Valley. Sebagaimana dicatat dalam laporan mendalam jurnalis The Verge awal pekan ini, raksasa teknologi Apple baru saja meluncurkan program riset bertajuk Apple Health AI Usage Study. Menggandeng platform kecerdasan buatan klinis OpenEvidence yang lazim dipakai tenaga medis profesional, Apple berniat merekrut hingga dua ratus ribu partisipan di Amerika Serikat untuk menguji bagaimana interaksi manusia dengan asisten percakapan cerdas dapat menghasilkan saran medis yang benar-benar akurat, relevan, dan mudah dipahami masyarakat awam.

Mekanisme penelitian ini dijalankan melalui sebuah aplikasi iOS khusus yang menuntut syarat perangkat cukup tinggi, yakni minimal iPhone 15 Pro dengan sistem operasi terbaru. Partisipan diajak melayangkan berbagai pertanyaan kesehatan sehari-hari, lalu menilai kualitas jawaban yang disuguhkan sistem berdasarkan ketepatan data dan rujukan jurnal ilmiah kedokteran. Pihak Apple melalui Wakil Presiden bidang Kesehatan dan Kebugaran Sumbul Desai menegaskan bahwa riset ini adalah langkah ilmiah yang bertanggung jawab untuk memastikan inovasi teknologi memiliki landasan klinis yang kuat, seraya berjanji bahwa data rekam medis pribadi dari ekosistem Apple HealthKit tidak akan disalahgunakan untuk melatih model kecerdasan buatan komersial mereka.

![Tampilan antarmuka riset aplikasi kesehatan berbasis kecerdasan buatan Apple Health AI Usage Study pada perangkat iPhone](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/applestudy1b.jpg?quality=90&strip=all&crop=0,0,100,100)

Janji manis tentang kepatuhan etika privasi tersebut tentu terdengar menyejukkan di atas kertas siaran pers. Namun bagi mereka yang sudah kenyang memperhatikan sepak terjang industri teknologi komputasi, menyerahkan data biometrik paling privat ke dalam ekosistem digital selalu membawa risiko laten yang patut diwaspadai. Obsesi korporasi mengumpulkan riwayat denyut jantung, siklus tidur, dan hasil laboratorium pengguna mengingatkan kita pada kontroversi saat [medsos baru Whoop mewajibkan syarat detak jantung](/medsos-baru-whoop-wajibkan-syarat-detak-jantung-bukti-paranoia) bagi pengguna demi dalih membendung serbuan bot otomatis. Kerapuhan batas perlindungan data pribadi juga sempat mencuat ketika [kacamata AI Gemini berkedok ramah privasi](/kacamata-ai-gemini-berkedok-ramah-privasi-padahal-rekam-muka) padahal terus merekam aktivitas lingkungan pengguna secara pasif tanpa henti.

Problem paling mendasar dari integrasi asisten cerdas ke ranah medis sesungguhnya bukan sekadar urusan kecanggihan kode atau kemewahan perangkat keras. Masalah utamanya terletak pada sifat dasar model bahasa besar yang masih sangat rentan mengalami halusinasi alias mengarang jawaban dengan nada percaya diri yang meyakinkan. Ketika sebuah program perangkat lunak salah mengenali kode pada server kantor, akibat terburuknya hanyalah situs web mengalami gangguan beberapa jam. Namun ketika asisten digital keliru menafsirkan gejala nyeri dada atau salah merekomendasikan takaran obat bebas kepada pengguna yang panik, taruhannya adalah nyawa manusia di dunia nyata.

Mengembangkan alat bantu medis cerdas tentu bukan dosa teknologi yang patut ditolak mentah-mentah. Namun selama masyarakat masih memiliki kecenderungan malas mengantre di puskesmas dan lebih percaya pada celoteh asisten virtual di layar kaca, ambisi Apple memoles chatbot medis tampaknya lebih berisiko melahirkan generasi yang hobi panik berjamaah. Bagaimanapun canggihnya algoritma kecerdasan buatan yang disematkan di dalam ponsel puluhan juta rupiah Anda, secangkir wedang jahe panas, istirahat cukup, dan tatap muka langsung dengan dokter di klinik terdekat tetaplah obat paling mujarab yang tak tergantikan oleh barisan kode biner mana pun.`
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
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 BATCH SELESAI: ${results.length} artikel berhasil diaudit & dipublikasikan.`);
  console.log("=================================================================");
  for (const res of results) {
    console.log(`- [${res.status.toUpperCase()}] ${res.slug} (Skor: ${res.score}) -> ${res.url}`);
  }
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261116-1100.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
