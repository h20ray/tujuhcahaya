import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Robot Anjing Sony Puluhan Juta Bukti Korporat Gemar Bikin Solusi yang Tak Diminta",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Sony", "Robotika", "Kecerdasan Buatan", "Gadget", "Teknologi", "Elang Elano"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/AIBO_Site.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Robot anjing Sony Aibo dengan mata kamera digital dan sendi mekanik futuristik",
    sourceUrl: "https://www.theverge.com/podcast/1033948/sony-aibo-robot-dog-version-history",
    excerpt: "Sony pernah mengira masa depan adalah manusia hidup berdampingan dengan anjing robot. Tapi menjual robot seharga puluhan juta rupiah cuma membuktikan nafsu korporat menciptakan solusi mahal untuk masalah yang sebenarnya tidak ada.",
    content: `Kalau Anda sempat mampir ke tongkrongan warung kopi dekat kos-kosan mahasiswa atau pemukiman padat di pinggiran kota, selalu ada satu pemandangan yang tak pernah berubah dari zaman baheula: kucing liar belang tiga yang tidur pulas di atas kardus mi instan, sesekali mengeong minta remah gorengan kepada siapa saja yang lewat. Hubungan antara manusia dan hewan peliharaan di dunia nyata sesederhana itu; modal sebungkus sisa kepala lele atau usapan hangat di kepala, rasa lelah sehabis seharian dimarahi atasan kantor mendadak bisa luntur seketika. Tidak ada protokol jaringan rumit, tidak ada pembaruan sistem operasi dadakan, dan yang terpenting, kucing kampung tidak pernah menuntut colokan listrik dinding 220 volt agar tetap bernyawa.

Namun bagi para petinggi korporasi teknologi global di Tokyo dan Silicon Valley, kesederhanaan hubungan emosional semacam itu tampaknya dianggap sebagai celah pasar yang belum cukup dimonetisasi. Sebagaimana dicatat dalam laporan retrospektif The Verge pekan ini mengenai sejarah panjang Sony Aibo, raksasa elektronik asal Jepang tersebut pada era akhir 1990-an sempat sangat yakin bahwa peradaban manusia sedang berada di ambang revolusi robotik total. Para eksekutifnya membayangkan dunia masa depan di mana setiap ruang tamu keluarga bakal dihuni oleh robot humanoid, robot pembersih, dan setidaknya satu ekor robot anjing cerdas sebagai hewan kesayangan keluarga modern.

Maka lahirlah Aibo, sebongkah anjing mekanik berkulit plastik mengilap yang dipersenjatai puluhan sensor sentuh, kamera digital di moncong hidungnya, serta kecerdasan buatan awal yang diklaim sanggup belajar mengenali wajah dan suasana hati sang pemilik. Banderol harganya pun tidak main-main, menyentuh angka ribuan dolar Amerika Serikat atau setara puluhan juta rupiah bila dikonversi ke saldo rekening anak kos di Jakarta.

![Robot anjing Sony Aibo dengan mata kamera digital dan sendi mekanik futuristik](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/AIBO_Site.jpg?quality=90&strip=all&crop=0,0,100,100)

Bagi kalangan eksekutif kaya yang punya obsesi futuristik dan uang dingin melimpah, memamerkan robot berkaki empat yang bisa menggoyangkan ekor logam di karpet ruang tamu barangkali terasa keren luar biasa. Namun bila dilihat dari sudut pandang sysadmin warkop yang sehari-hari berkutat dengan kerusakan kabel jaringan, proyek Aibo ini adalah prototipe paling sempurna dari penyakit kronis industri teknologi: hobi menciptakan solusi mahal dan rumit untuk persoalan yang sejatinya tidak pernah ada.

Anjing atau kucing beneran mungkin sesekali buang kotoran sembarangan di teras rumah dan butuh dimandikan sebulan sekali. Tetapi setidaknya, hewan biologis tidak akan mendadak lumpuh total hanya karena baterai internalnya mengalami degradasi kapasitas setelah dua tahun pemakaian. Yang jauh lebih tragis, nasib robot peliharaan berharga puluhan juta ini sepenuhnya disandera oleh server cloud milik produsen. Ketika Sony pada akhirnya menghentikan program perbaikan resmi dan mematikan server pendukung generasi lama Aibo beberapa tahun berselang, ribuan robot anjing tersebut seketika berubah menjadi rongsokan elektronik bisu. Di Jepang, para pemilik yang terlanjur terikat emosional bahkan sampai menggelar upacara pemakaman massal di kuil Buddha untuk bangkai robot mereka yang tak bisa lagi diperbaiki.

Tragedi konyol semacam ini sayangnya terus berulang di era gempuran produk pintar masa kini. Korporasi teknologi modern tampak tidak pernah kapok menjejali ruang domestik warga dengan gadget-gadget absurd yang sarat gimik kecerdasan buatan. Kita sudah melihat sendiri bagaimana lelucon serupa terjadi saat [drone kamera autopilot di ruang tamu](/drone-kamera-ring-nyungsep-di-siaran-tv-bukti-ai-autopilot-di) yang dipromosikan sebagai penjaga rumah canggih justru berujung menabrak perabotan dan vas bunga keluarga, atau ketika raksasa teknologi ngotot meluncurkan [kacamata pintar pencatat muka orang](/kacamata-ai-gemini-berkedok-ramah-privasi-padahal-rekam-muka) yang berkedok asisten pribadi padahal mengancam privasi orang di ruang publik.

Semua produk mahal tersebut lahir dari asumsi keliru para insinyur laboratorium yang terlalu lama terisolasi dari realitas jalanan. Mereka mengira bahwa kesepian manusia modern bisa disembuhkan dengan seonggok mikroprosesor bersensor inframerah yang diprogram untuk menggonggong lewat speaker mini. Padahal bagi orang biasa yang tiap hari pusing memikirkan tagihan air PDAM dan cicilan motor, teman hidup yang tulus tidak butuh lisensi langganan bulanan apalagi kuota internet cepat.

Di pos ronda malam tempat kopi tubruk panas mengepul di samping piring pisang goreng, ambisi korporat menjual robot anjing ini cuma jadi bahan tertawaan hangat. Kalau memang sedang merasa kesepian atau butuh kawan bicara sehabis pulang lembur, melangkahkan kaki ke warung kopi sebelah rumah dan mengelus kucing kampung liar jauh lebih menenangkan jiwa ketimbang merogoh tabungan puluhan juta demi memeluk sebongkah plastik bersirkuit yang sewaktu-waktu bakal mati kutu saat token listrik prabayar berbunyi tet-tot di tengah malam.`
  },
  {
    title: "Game Indie Bikinan Dua Orang Berhasil Tampar Proyek Triliunan Raksasa Game AAA",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Queen's Domain", "Dark Souls", "Game Indie", "PC Gaming", "Industri Game", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/4VT5ApRCBpRhSw3ke8HCqm-1920-80.jpg",
    imageAlt: "Eksplorasi kastel dan labirin gelap dalam permainan aksi RPG petualangan Queen's Domain",
    sourceUrl: "https://www.pcgamer.com/games/rpg/queens-domain-is-the-best-dark-souls-1-since-dark-souls-1/",
    excerpt: "Queen's Domain digarap cuma oleh dua pengembang indie tapi dinobatkan sebagai pewaris sejati Dark Souls 1. Bukti telak bahwa keasyikan bermain tak bisa dibeli dengan anggaran triliunan rupiah.",
    content: `Bagi siapa saja yang sempat merasakan nikmatnya begadang di depan layar tabung monitor belasan tahun silam, ada sebuah sensasi magis saat pertama kali terdampar di dunia Lordran dalam Dark Souls edisi perdana. Tidak ada peta radar mini yang berputar di sudut kanan layar, tidak ada garis petunjuk arah berwarna kuning menyala di atas tanah, dan tidak ada suara narator cerewet yang memberi tahu ke mana kita harus melangkah selanjutnya. Setiap jengkal koridor batu yang pengap harus dijelajahi dengan tarikan napas tertahan, memegang tameng kayu lapuk sembari berdoa agar tidak ada monster bertaring raksasa yang mendadak melompat dari balik kegelapan. Ketika kita akhirnya menemukan tuas tersembunyi yang membuka pintu besi tua lalu menyadari bahwa pintu tersebut membawa kita kembali ke api unggun pertama, rasa takjub itu meledak seketika di dalam dada.

Sihir eksplorasi organik semacam itulah yang belakangan nyaris punah ditelan arus modernisasi industri game komersial. Namun kabar mengejutkan datang dari kancah game komputer akhir pekan ini. Sebagaimana dicatat dalam ulasan antusias PC Gamer, sebuah game aksi RPG petualangan bertajuk Queen's Domain garapan penerbit Future Friends Games mendadak mencuri perhatian luas komunitas gamer global. Game ini bahkan dijuluki sebagai pewaris spiritual terbaik Dark Souls 1 dan King's Field yang pernah dirilis dalam kurun waktu satu dekade terakhir. Fakta paling mencengangkan di balik pujian setinggi langit tersebut adalah proses produksinya: mahakarya eksplorasi labirin ini ternyata hanya digarap oleh tim mungil yang beranggotakan dua orang pengembang saja.

![Eksplorasi kastel dan labirin gelap dalam permainan aksi RPG petualangan Queen's Domain](https://cdn.mos.cms.futurecdn.net/4VT5ApRCBpRhSw3ke8HCqm-1920-80.jpg)

Kehadiran Queen's Domain terasa seperti tamparan telak tepat di wajah para petinggi korporasi penerbit raksasa berkategori AAA. Selama bertahun-tahun, studio-studio besar di Amerika Serikat dan Eropa getol membakar anggaran produksi hingga ratusan juta dolar demi mempekerjakan ribuan staf pengembang dan studio animasi luar. Namun ironisnya, produk yang mereka telurkan di etalase toko digital nyaris selalu terasa hambar dan seragam: dunia terbuka raksasa seluas ratusan kilometer persegi yang isinya sekadar salin-tempel pos penjaga, menara pemantau yang wajib dipanjat, deretan misi sampingan menjemput paket yang membosankan, serta toko mikrotransaksi kosmetik norak yang merusak imersi visual.

Dua kreator Queen's Domain justru memilih jalur berlawanan yang bersahaja namun menuntut dedikasi artistik luar biasa. Alih-alih membuat peta raksasa yang hampa makna, mereka merajut sebuah lanskap kepulauan dan reruntuhan benteng misterius yang saling terhubung secara vertikal dan cerdas (*interconnected level design*). Setiap sudut lorong punya alasan arsitektural untuk hadir di sana. Mekanika pertarungannya pun dirancang berbobot dan menuntut kesabaran ekstra; stamina karakter sangat berharga, dan setiap senjata mulai dari gada batu hingga tombak besi memiliki kepribadian sendiri yang bisa naik tingkat bahkan berevolusi menjadi bentuk magis baru layaknya monster fantasi. Pemain dipaksa belajar dari kekalahan, menghafal ritme serangan musuh, dan merasakan kepuasan murni saat berhasil menaklukkan rintangan dengan kemampuannya sendiri.

Bagi komunitas gamer di tongkrongan yang tiap bulan harus menyisihkan uang jajan demi berburu diskon musiman di platform Steam, kemunculan fenomena Queen's Domain adalah angin surga yang menyejukkan hati. Kita melihat bukti konkret bahwa inovasi dan kecintaan terhadap seni permainan video masih menyala terang saat [developer indie nekat rilis game di Steam](/developer-indie-nekat-rilis-game-di-steam-saat-publisher-raksasa) tanpa rasa gentar berhadapan dengan raksasa pasar. Fenomena ini sekaligus menjadi antitesis membanggakan di tengah carut-marut korporasi besar yang kerap kalap hingga [studio game gulung tikar akibat salah urus](/studio-game-abad-pertengahan-bangkrut-seharian-sebelum) keuangan dan PHK sepihak, atau penerbit uzur yang [latah merilis daur ulang nostalgia tanpa ide segar](/professor-layton-dibikin-ulang-bukti-industri-game-boncos) semata-mata demi mengejar laporan kuartalan pemegang saham.

Penerbit raksasa dengan neraca kas triliunan rupiah boleh saja terus berbangga diri memamerkan teknologi grafis fotorealistis mutakhir, simulasi helai rambut canggih, dan rekaman gerak tubuh aktor Hollywood papan atas di panggung presentasi megah. Namun ketika dua orang pemuda yang bekerja dengan komputer seadanya sanggup membikin pemain di seluruh dunia terpaku di depan monitor selama berjam-jam sampai lupa menyeduh mi instan di sudut kamar kos, industri game sebenarnya sedang dipaksa menelan satu kebenaran purba: nyawa sebuah video game selamanya terletak pada misteri eksplorasi dan keasyikan bermain yang tulus, bukan pada tumpukan dolar di rekening para komisaris korporat.`
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261115-2300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
