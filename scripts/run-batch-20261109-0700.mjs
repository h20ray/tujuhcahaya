import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Bos Nvidia Menggurui Dunia Soal AI tapi Malah Terpeleset Asmara Mata-mata",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["AI", "Elang Elano", "Geopolitik", "Hardware", "Industri Semikonduktor", "Jensen Huang", "Keamanan Siber", "Kecerdasan Buatan", "Nvidia", "Spionase"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/07/STKP210_JENSEN_HUANG_A.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "CEO Nvidia Jensen Huang dalam balutan jaket kulit hitam khasnya saat memamerkan arsitektur chip akselerator AI",
    sourceUrl: "https://www.theverge.com/ai-artificial-intelligence/1029562/nvidia-investigating-jensen-huang-relationship-chinese-spy",
    excerpt: "CEO Nvidia Jensen Huang yang selama ini disembah bagai nabi baru kecerdasan buatan mendadak diperiksa dewan direksi perusahaannya sendiri akibat skandal asmara dengan pejabat Megaspeed yang diduga mata-mata intelijen Tiongkok. Ironi paling telanjang dari industri teknologi: benteng pertahanan chip tercanggih dunia ternyata jebol bukan oleh serangan siber mutakhir, melainkan oleh rayuan asmara.",
    content: `Kalau Anda rutin menyimak panggung peluncuran teknologi global dalam dua tahun terakhir, sosok Jensen Huang praktis sudah diperlakukan bak nabi baru peradaban digital. Lengkap dengan seragam kebesarannya—jaket kulit hitam mengilat dan senyum percaya diri—sang pendiri Nvidia sanggup membuat para bos korporasi multinasional dan pendiri startup antre berjam-jam cuma demi mendengar wejangannya soal masa depan komputasi akselerasi. Di mata Wall Street dan para menteri perdagangan negara adidaya, tiap keeping silikon yang keluar dari pabrik Nvidia bukan sekadar perangkat keras biasa, melainkan tiket emas menuju hegemoni kecerdasan buatan dunia.

Namun keangkuhan Silicon Valley yang merasa sanggup mendikte masa depan manusia mendadak tersedak ludah sendiri di awal pekan ini. Sebagaimana dicatat dalam laporan The Verge, Dewan Direksi Nvidia secara mengejutkan mengumumkan penyelidikan independen terhadap sang nahkoda tertinggi perusahaan. Jensen Huang tersandung skandal hubungan asmara dengan Alice Huang, salah satu petinggi perusahaan Megaspeed yang dilaporkan telah direkrut oleh Kementerian Keamanan Negara Tiongkok untuk melakukan spionase industri. Pria berjaket kulit itu bahkan sudah mengirimkan memo internal resmi ke seluruh meja kerja karyawan Nvidia untuk mengakui hubungan gelap tersebut seraya meminta maaf atas kegaduhan yang tercipta.

![CEO Nvidia Jensen Huang dalam balutan jaket kulit hitam khasnya saat memamerkan arsitektur chip akselerator AI](https://platform.theverge.com/wp-content/uploads/sites/2/2026/07/STKP210_JENSEN_HUANG_A.jpg?quality=90&strip=all&crop=0,0,100,100)

Kabar ini sontak membikin para pengamat geopolitik dan sysadmin warkop terpingkal-pingkal sekaligus geleng-geleng kepala. Bayangkan, selama berbulan-bulan Pentagon dan Departemen Perdagangan Amerika Serikat sibuk menyusun aturan pembatasan ekspor yang rumitnya minta ampun. Mereka menyensor arsitektur chip, melarang pengiriman unit akselerator H100 dan B200 ke daratan Tiongkok, hingga menekan pabrik semikonduktor di Taiwan dan Belanda agar tidak melayani pesanan dari Beijing. Semua paranoia perang dingin itu dibangun atas dalih melindungi rahasia negara paling keramat dari intipan intelijen asing.

Tapi apa lacur, benteng pertahanan teknologi bernilai triliunan dolar yang dijaga ribuan protokol enkripsi dan regulasi militer itu ternyata runtuh bukan oleh serangan zero-day eksploit atau malware perusak firmware. Pintu brankas rahasia itu justru terbuka lebar akibat kelemahan purba umat manusia yang sudah ada sejak zaman kerajaan kuno: jerat rayuan asmara di balik meja makan malam. Badan intelijen asing bahkan tidak perlu repot-repot meretas server pusat data Nvidia, cukup dengan menempatkan agen yang sanggup meluluhkan hati sang nabi chip di waktu santainya.

Bagi mereka yang mengamati rekam jejak Nvidia dari balik meja teknisi, skandal ini memperlihatkan rapuhnya tata kelola internal perusahaan yang sedang mabuk popularitas. Bukan rahasia lagi bahwa nafsu mengeruk cuan sering kali membuat produsen perangkat keras mengabaikan rambu-rambu kehati-hatian. Kita tentu belum lupa kerentanan serupa yang sempat memicu kehebohan saat [bos Nvidia dibuntuti mata-mata berkedok rekan bisnis](/ketika-bos-nvidia-jensen-huang-dibuntuti-mata-mata-berkedok-rekan) beberapa waktu lalu demi mengamankan kontrak pasokan komponen. Bahkan dalam urusan rantai distribusi, pengawasan internal mereka terbukti begitu longgar ketika [Nvidia meloloskan penjualan chip AI ke kantor kosong tanpa meja](/ketika-nvidia-loloskan-penjualan-chip-ai-canggih-ke-kantor-kosong) di kawasan Asia Tenggara lewat jejaring perantara bayangan.

Kini para pemodal ventura dan dewan komisaris dipaksa menelan realitas getir yang menampar wajah mereka. Anda boleh saja mengklaim telah menciptakan jaringan syaraf tiruan paling pintar yang sanggup menulis puisi, membedah molekul obat, hingga mengoperasikan robot tempur otonom. Anda bisa membanggakan diri sebagai juru selamat peradaban yang memegang kunci masa depan umat manusia.

Namun secerdas apa pun algoritma pemrosesan token yang Anda racik di ruang server, otak manusia di balik jaket kulit legendaris itu rupanya tetap tunduk pada hukum alam yang sama tuanya dengan bumi. Ternyata di balik tirai kecerdasan buatan bernilai ribuan triliun rupiah, satu senyuman manis agen rahasia masih jauh lebih efektif melumpuhkan benteng teknologi ketimbang sejuta baris kode antikebobolan.`
  },
  {
    title: "Jackbox Games Tolak Mentah-mentah AI Karena Selera Humor Bot Pasti Garing",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Industri Game", "Jackbox Games", "Kecerdasan Buatan", "PC Gaming", "Video Game"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/6offQUY4CXebir2TC27dMd.jpg",
    imageAlt: "Tangkapan layar karakter penuh warna dan suasana permainan pesta Jackbox Party Pack",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/game-development/jackbox-games-isnt-interested-in-ai-development-all-that-is-done-by-people-and-we-have-no-intention-of-changing-that/",
    excerpt: "Di saat para eksekutif industri game beramai-ramai memecat pekerja kreatif demi menghemat anggaran dengan bot generatif, pengembang Jackbox Games memilih jalan waras: menolak mentah-mentah penggunaan AI. Sebab lelucon tongkrongan yang bikin sakit perut hanya bisa lahir dari rasa malu dan keabsurdan manusia, bukan dari mesin pemroses token.",
    content: `Bagi siapa saja yang pernah mengundang kawan-kawan sekantor atau teman satu tongkrongan untuk berkumpul di ruang tengah pada malam akhir pekan, Anda pasti paham sensasi magis game pesta seperti Jackbox Party Pack. Cukup modal layar televisi yang memajang permainan dan smartphone di genggaman masing-masing sebagai pengendali, suasana yang tadinya kaku mendadak berubah menjadi arena perpeloncoan tawa tanpa ampun. Mulai dari saling melempar jawaban ngawur di Quiplash, mengarang kebohongan paling meyakinkan di Fibbage, hingga aksi saling fitnah di Trivia Murder Party.

Daya tarik utama dari game semacam ini sama sekali bukan terletak pada grafis fotorealistis ratusan gigabita atau simulasi fisika yang bikin kartu grafis menjerit. Nyawa sejati Jackbox bersemayam pada penulisan naskah yang cerdas, timing komedi yang tak terduga, ilustrasi visual yang unik, serta kepekaan tajam terhadap hal-hal absurd dalam keseharian masyarakat modern. Setiap lelucon yang muncul dirancang untuk memancing reaksi paling spontan dari para pemain: rasa geli, tawa terbahak-bahak, atau rasa malu berjamaah yang membekas sampai berhari-hari.

Namun di tengah tren industri hiburan digital yang belakangan ini sedang kesurupan teknologi generatif, banyak pihak bertanya-tanya apakah studio asal Chicago tersebut bakal tergoda memangkas biaya produksi dengan mempekerjakan kecerdasan buatan. Jawaban tegas pun akhirnya meluncur ke publik. Sebagaimana diungkapkan dalam wawancara eksklusif bersama PC Gamer pekan ini, CEO Jackbox Games Mike Bilder memastikan bahwa perusahaannya sama sekali tidak berminat menggunakan kecerdasan buatan generatif untuk menggarap lelucon, naskah narasi, maupun aset seni dalam proyek-proyek game mereka. Mike menegaskan bahwa manusia adalah fondasi utama yang menghidupkan produk mereka, dan perusahaan tidak memiliki niat sedikit pun untuk mengubah prinsip tersebut.

![Tangkapan layar karakter penuh warna dan suasana permainan pesta Jackbox Party Pack](https://cdn.mos.cms.futurecdn.net/6offQUY4CXebir2TC27dMd.jpg)

Pernyataan lugas dari petinggi Jackbox ini bagaikan siraman air dingin di tengah kegilaan para bos penerbit game kelas kakap. Selama setahun belakangan, kita disuguhi pemandangan memilukan di mana korporasi besar beramai-ramai memecat ribuan seniman dan penulis berbakat dengan alasan efisiensi anggaran, lalu menggantikan posisi mereka dengan bot generatif. Sikap berani Jackbox mengingatkan kita pada perjuangan para pekerja visual saat [seniman game lebih memilih ditinggal zaman ketimbang menyembah mesin AI](/ketika-seniman-game-lebih-memilih-ditinggal-zaman-ketimbang) demi mempertahankan marwah karya seni yang bermartabat.

Sikap skeptis Jackbox terhadap kecerdasan buatan sangat masuk akal bagi siapa pun yang paham hakikat komedi. Humor adalah seni yang lahir dari ketidaksempurnaan, trauma masa kecil, kecanggungan sosial, serta empati mendalam antarmanusia. Sebuah lelucon menjadi lucu justru karena ada keberanian untuk menertawakan penderitaan bersama atau menyentil tabu kultural secara elegan. Mesin kecerdasan buatan, dengan segala kecanggihan matematika probabilistiknya, pada dasarnya hanyalah sistem statistik pencari kata rata-rata. Komedi buatan bot akan selalu berujung pada lelucon basi yang steril, hambar, dan canggung seperti basa-basi humas korporat dalam email tahunan.

Ironi industri hiburan modern kian terasa saat para produsen perangkat keras sibuk [memanjakan server AI ketimbang komunitas gamer PC](/ketika-amd-terang-terangan-pilih-memanjakan-server-ai-ketimbang), seolah-olah masa depan game hanya ditentukan oleh seberapa banyak cip pemrosesan data yang dibakar di ruang server. Mereka lupa bahwa gamer menyalakan konsol atau komputer bukan untuk mengagumi kecanggihan algoritma otomatis, melainkan untuk mencari koneksi emosional dan hiburan yang tulus bersama sesama manusia.

Jackbox membuktikan bahwa studio independen yang tahu diri dan menghormati talenta pekerjanya jauh lebih berkelas ketimbang raksasa industri yang gemar menjual janji revolusi digital hampa. Mereka sadar bahwa kepingan keseruan pesta tidak pernah bisa diproduksi secara massal lewat perintah ketikan prompt.

Publisher besar silakan saja terus berkhayal memangkas biaya sampai titik nol dengan menyuruh komputer menulis jalan cerita game mereka. Tapi bagi gamer waras yang butuh tertawa lepas di malam Minggu bersama lingkaran sahabat terdekat, lelucon garing dari barisan kode server dingin tidak akan pernah sanggup menggantikan celotehan usil karya komedian manusia sungguhan.`
  }
];

export async function runBatch() {
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
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261109-0700.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Run Error:", err);
    process.exit(1);
  });
}
