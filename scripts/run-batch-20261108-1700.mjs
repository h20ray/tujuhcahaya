import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "EA Akhirnya Lepas Kunci Gembok Wing Commander di Steam Saat Game Modern Boncos",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Electronic Arts", "Wing Commander", "Ultima", "Steam", "GOG", "PC Gaming", "Industri Game"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2026/11/EACOM-News-EA_Classics_Feature_Article_16x9-Screenshot_09.avif",
    imageAlt: "Tangkapan layar pertempuran pesawat luar angkasa dan kokpit game legendaris Wing Commander yang dirilis ulang",
    sourceUrl: "https://arstechnica.com/gaming/2026/11/ea-producer-tells-the-inside-story-behind-new-wing-commander-remasters/",
    excerpt: "Setelah puluhan tahun mengurung waralaba legendaris Origin Systems di laci berdebu, Electronic Arts tiba-tiba merilis ulang Wing Commander dan Ultima ke Steam dan GOG. Manuver tak biasa dari penerbit yang gemar membunuh studio legendaris ini menjadi oase langka bagi pegiat preservasi game PC.",
    content: `Bagi siapa saja yang sempat merasakan masa kejayaan komputer pribadi berprosesor Pentium atau masa-masa awal grafis VGA berwarna 256 piksel, ingatan tentang suara deru mesin pesawat luar angkasa di game simulasi tempur klasik selalu punya tempat istimewa di sudut kepala. Di era itu, memasukkan tumpukan disket liuk ke dalam drive komputer adalah ritual sakral yang menuntut kesabaran ekstra. Kita rela mengutak-atik berkas konfigurasi sistem di layar DOS hitam-putih hanya demi mendengar sebaris efek ledakan monokrom yang renyah.

Namun memasuki dekade modern, romansa masa lalu tersebut mendadak berubah menjadi mimpi buruk birokrasi digital. Bila Anda ingin memainkan kembali mahakarya lawas yang membentuk masa kecil Anda, rintangan yang dihadapi sering kali lebih rumit daripada melawan armada alien luar angkasa. Game-game bersejarah tersebut kerap disandera oleh penerbit raksasa yang membiarkan kodenya membusuk, atau kalaupun dirilis ulang, dipaksa berjalan di atas peluncur aplikasi pihak ketiga yang lambat dan mewajibkan koneksi internet tanpa henti.

Maka ketika salah satu korporasi paling rakus di industri video game tiba-tiba melonggarkan cengkeraman tangannya, wajar jika komunitas gamer sempat mengira ada kesalahan pada sistem server.

![Tangkapan layar pertempuran pesawat luar angkasa dan kokpit game legendaris Wing Commander yang dirilis ulang](https://cdn.arstechnica.net/wp-content/uploads/2026/11/EACOM-News-EA_Classics_Feature_Article_16x9-Screenshot_09.avif)

Kejutan menyenangkan tersebut resmi menjadi kenyataan pada pekan ini. Sebagaimana dicatat dalam laporan eksklusif jurnalis Kyle Orland di Ars Technica, Electronic Arts secara diam-diam meluncurkan kembali katalog mahakarya klasik era 1990-an milik studio legendaris Origin Systems ke etalase toko digital Steam dan GOG. Judul-judul legendaris seperti serial simulasi tempur antariksa Wing Commander hingga serial pelopor RPG fantasi Ultima kini bisa dibeli dan dimainkan secara langsung di komputer modern tanpa perlu memasang aplikasi EA App yang terkenal rewel.

Langkah ini terasa bagaikan mukjizat kecil bagi pegiat pelestarian game PC. Dalam wawancaranya, sang produser EA menceritakan bagaimana proses pemulihan berkas-berkas digital kuno tersebut membutuhkan perjuangan keras membongkar arsip lama, menyelamatkan kode sumber yang nyaris tercecer, serta menyesuaikan emulator DOSBox agar kompatibel dengan sistem operasi Windows mutakhir. Mereka bahkan merilisnya di etalase GOG lengkap dengan kemasan tanpa DRM (*Digital Rights Management*), memungkinkan pemain menyimpan berkas instalasi cadangan secara luring tanpa waswas dicabut sewaktu-waktu.

Bagi komunitas gamer yang sudah hafal tabiat korporasi video game, keterkejutan ini sangat beralasan. Electronic Arts selama bertahun-tahun memegang reputasi kelam sebagai kuburan bagi studio-studio pengembang terbaik di dunia. Kita tentu belum lupa bagaimana nasib tragis studio Origin Systems, Westwood Studios, hingga Bullfrog Productions yang satu per satu ditutup paksa setelah diakuisisi. 

Kecemasan serupa juga sempat memuncak saat melihat [rekam jejak buruk penerbit raksasa yang kerap mematikan studio legendaris](/ketika-dokumenter-bioware-berubah-jadi-surat-duka-cita-akibat) demi memaksakan tren pasar sesaat. Selama bertahun-tahun pula, EA bersikukuh mengunci waralaba klasik ini di dalam ekosistem peluncur mandiri mereka, mengabaikan seruan ribuan penggemar yang mendambakan kenyamanan di [platform bebas DRM seperti GOG yang ramah bagi pemain](/ketika-gog-galaxy-akhirnya-buka-pintu-buat-gamer-linux-yang) tanpa perlu diawasi algoritma pelacak.

Sikap melunak EA kali ini tentu bukan lahir dari panggilan moral murni untuk menjadi pahlawan kebudayaan digital. Ada realitas ekonomi yang sangat dingin di balik layar rapat dewan direksi. Di tengah lesunya industri game arus utama, di mana proyek-proyek game berbiaya triliunan rupiah kerap boncos di pasaran karena pemain sudah jenuh dengan formula live-service yang serakah, merilis ulang waralaba retro berbiaya murah adalah cara paling mudah untuk mendulang recehan keuntungan yang pasti.

Selama puluhan tahun, kerja keras melestarikan waralaba game klasik di atas panggung sejarah komputer sejatinya tidak pernah dipedulikan oleh para petinggi korporasi. Bila bukan karena kegigihan komunitas relawan, peretas emulator, dan penggemar fanatik yang sukarela merawat kode program tanpa bayaran sepeser pun, deretan game legendaris ini barangkali sudah lama punah ditelan bumi. 

Melihat kembali kokpit pesawat Wing Commander terpampang megah di monitor komputer modern tentu memantik senyum lega bagi siapa pun yang mencintai sejarah video game. Namun sebelum Anda buru-buru menaruh hormat pada kedermawanan penerbit raksasa ini, ingatlah baik-baik satu kaidah dasar di tongkrongan gamer: korporasi baru akan membuka peti harta karun masa lalunya ketika kantong celana masa kininya mulai kehabisan uang receh.`
  },
  {
    title: "Serahkan Urusan Dapur ke Chatbot AI Kalau Mau Siap-siap Makan Kue Gosong Berasa Garam",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Kecerdasan Buatan", "Chatbot AI", "Aplikasi Mobile", "Gaya Hidup Digital", "Teknologi", "Software"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/268844_NY_Times_Cooking_App_JTuohy_0006.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Pengujian asisten kecerdasan buatan AI pada aplikasi resep masakan NYT Cooking di smartphone",
    sourceUrl: "https://www.theverge.com/tech/1029489/nyt-cooking-ai-assistant-review",
    excerpt: "Uji coba asisten kecerdasan buatan pada aplikasi resep NYT Cooking membuktikan batas nyata teknologi generatif. Sukses menyarankan bumbu ayam tumis tapi gagal total saat memanggang kue, chatbot membuktikan bahwa algoritma silikon tidak pernah paham beda tekstur tepung dengan bencana dapur.",
    content: `Bagi siapa saja yang sering pulang kerja dalam keadaan letih saat azan magrib berkumandang, momen berdiri mematung di depan pintu kulkas yang terbuka lebar adalah pemandangan paling lumrah di rumah petak perkotaan. Di hadapan kita hanya tersisa sepotong dada ayam dingin, dua butir telur, separuh bawang bombai yang mulai layu, dan sejumput daun seledri sisa pekan lalu. Perut sudah berbunyi nyaring menuntut jatah makan malam, tetapi otak kita sudah terlalu lelah untuk memikirkan formula resep yang masuk akal.

Di tengah keputusasaan dapur semacam itu, janji manis para perancang teknologi kecerdasan buatan terdengar bagaikan mukjizat penyelamat. Mengapa harus repot-repot membolak-balik buku masak warisan keluarga jika Anda cukup memotret isi kulkas, mengetik keluhan singkat, lalu membiarkan model bahasa raksasa meracik menu makan malam Anda secara instan?

Namun memasak sesungguhnya bukan sekadar urusan mencocokkan deretan teks dan angka probabilitas di atas kertas. Begitu urusan wajan diserahkan kepada algoritma, batas antara santapan lezat dan bencana dapur ternyata hanya terpaut setipis kulit bawang.

![Pengujian asisten kecerdasan buatan AI pada aplikasi resep masakan NYT Cooking di smartphone](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/268844_NY_Times_Cooking_App_JTuohy_0006.jpg?quality=90&strip=all&crop=0,0,100,100)

Kerapuhan logika silikon tersebut baru saja diuji secara langsung di medan dapur nyata. Sebagaimana dicatat dalam laporan pengujian mendalam oleh jurnalis Jennifer Tuohy di The Verge pekan ini, aplikasi kuliner ternama The New York Times Cooking resmi meluncurkan asisten percakapan cerdas berbasis AI untuk memandu pengguna mengolah masakan harian. Hasil pengujiannya menyuguhkan kontras yang sangat menggelitik: asisten digital ini memang cukup piawai membantu meracik bumbu marinasi tumisan ayam dengan bahan seadanya, tetapi mendadak menjelma menjadi petaka saat diuji untuk urusan memanggang kue bolu.

Ketika sang penguji meminta saran takaran pengganti bahan kue dan durasi oven, chatbot tersebut dengan percaya diri memberikan instruksi yang terdengar sangat meyakinkan. Sayangnya, begitu loyang ditarik keluar dari panggangan, adonan kue yang diharapkan mengembang lembut justru bantat total, keras menyerupai batu bata, dan menyisakan rasa asin menyengat akibat takaran ragi serta soda kue yang ngawur.

Insiden kue bantat ini merangkum ironi terbesar dari demam kecerdasan buatan yang melanda berbagai sektor hari ini. Para pemodal ventura di Silicon Valley boleh saja membanggakan triliunan parameter matematika yang tertanam di pusat data mereka. Realitas menggelikan ini sejalan dengan [investasi raksasa yang digelontorkan untuk chatbot yang hobi halusinasi](/ketika-openai-dihargai-belasan-kuadriliun-rupiah-sementara) di mana model komputasi tercanggih sekalipun masih sering keliru membedakan fakta ilmiah dengan khayalan statistik.

Kelemahan paling mendasar dari chatbot percakapan terletak pada ketiadaan panca indra biologis. Model bahasa generatif tidak pernah memiliki lidah untuk mengecap rasa getir, tidak memiliki hidung untuk mencium bau gosong, dan tidak memiliki telinga untuk mendengar desisan minyak panas di atas wajan. Mereka hanya menyusun kata demi kata berdasarkan frekuensi kemunculan teks di internet. Jika ribuan blog resep abal-abal di dunia maya salah menuliskan takaran garam, maka chatbot akan menyalin kesalahan tersebut dengan gaya tutur yang sangat sopan dan percaya diri.

Ketergantungan buta masyarakat modern pada asisten digital ini mencerminkan fenomena kepanikan yang kian lazim, menyerupai [sensasi panik masyarakat modern akibat ketergantungan layar kaca](/ketika-baterai-hp-boros-bikin-pengguna-panik-mengira-disadap) yang membuat manusia perlahan-lahan kehilangan kepercayaan pada kemampuan dasarnya sendiri. Generasi orang tua kita di kampung halaman tidak pernah membutuhkan koneksi internet berkecepatan tinggi atau asisten virtual untuk mengetahui kapan adonan kue siap dipanggang. Cukup dengan menancapkan sebatang lidi bersih ke tengah loyang atau mengandalkan insting aroma yang tercium dari ventilasi oven, kelezatan santapan keluarga sudah terjamin.

Mencoba fitur chatbot di aplikasi kuliner untuk sekadar mencari ide nama masakan ayam tumis di kala lelah tentu sah-sah saja sebagai hiburan pelepas penat sehabis lembur. Namun jika Anda berniat menyerahkan takaran ragi dan suhu oven sepenuhnya ke tangan kecerdasan buatan, bersiaplah menerima kenyataan getir di meja makan: algoritma komputasi awan tercanggih di dunia mungkin bisa menulis puisi tentang kelezatan roti, tetapi mereka sama sekali tidak bertanggung jawab saat kue ulang tahun keluarga Anda berakhir di tempat sampah dapur.`
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
      markAsSeen(art.sourceUrl);
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261108-1700.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Run Error:", err);
    process.exit(1);
  });
}
