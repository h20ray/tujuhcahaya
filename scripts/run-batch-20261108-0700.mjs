import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Game D&D yang Dulu Suka Menghapus Windows Tiba-tiba Bangkit dari Kubur",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Game RPG", "Industri Game", "D&D", "Gamer Indonesia", "Retrogaming", "PC Gaming"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/RTBYtRwwXNQ5uHRWkUh2FL-1920-80.jpg",
    imageAlt: "Tangkapan layar pembaruan visual game RPG klasik Pool of Radiance Ruins of Myth Drannor yang dirilis ulang",
    sourceUrl: "https://www.pcgamer.com/games/rpg/one-of-the-buggiest-d-and-d-games-ever-released-pool-of-radiance-ruins-of-myth-drannor-is-back-and-actually-playable-again/",
    excerpt: "Game RPG legendaris D&D Pool of Radiance Ruins of Myth Drannor yang sempat bikin geger tahun 2001 gara-gara uninstaller-nya tega menghapus sistem Windows mendadak dirilis ulang di Steam dan GOG. Setelah dua puluh lima tahun, game penuh kutukan ini akhirnya bisa dimainkan dengan mulus, meski nostalgia masa lalu tetap tak sanggup menutupi betapa lambatnya pertempuran di lorong bawah tanah tersebut.",
    content: `Bagi generasi gamer yang sempat mencicipi masa-masa keemasan rental komputer dan warnet di awal era milenium, suara desing kipas casing tebal dan bunyi putaran keping cakram CD-ROM berkecepatan 52x adalah musik pengantar tidur yang paling menenangkan. Kala itu, menginstal game di komputer berbasis Windows 98 atau Windows ME ibarat memainkan rolet Rusia: kita tak pernah benar-benar tahu apakah game tersebut bakal berjalan lancar, memicu layar biru kematian (*blue screen of death*), atau menuntut driver kartu grafis baru yang harus diunduh berjam-jam lewat modem dial-up bersuara cempreng.

Namun dari sekian banyak judul game bermasalah yang pernah dilahirkan industri hiburan interaktif, tidak ada satu pun yang mampu menandingi reputasi horor milik *Pool of Radiance: Ruins of Myth Drannor*.

Game bermain peran (*role-playing game*) garapan Stormfront Studios dan penerbit SSI yang meluncur pada tahun 2001 itu bukan cuma dipenuhi kutukan bug teknis biasa. Game adaptasi lisensi resmi Dungeons & Dragons (D&D) tersebut mencatatkan dosa paling legendaris dalam sejarah komputasi: jika Anda kecewa memainkannya lalu memutuskan untuk menghapus game itu menggunakan program uninstaller bawaannya, skrip pembersih tersebut dengan dingin akan ikut menyapu bersih seluruh berkas sistem di direktori C:\\Windows atau folder utama Program Files. Alih-alih mendapatkan kembali ruang hard disk, gamer era itu malah dihadiahi komputer yang mogok total dan terpaksa diinstal ulang dari nol.

![Tangkapan layar pembaruan visual game RPG klasik Pool of Radiance Ruins of Myth Drannor yang dirilis ulang](https://cdn.mos.cms.futurecdn.net/RTBYtRwwXNQ5uHRWkUh2FL-1920-80.jpg)

Dua puluh lima tahun setelah skandal memalukan tersebut mereda, kabar mengejutkan mendadak datang dari jagat distribusi digital. Sebagaimana dicatat dalam laporan PC Gamer pekan ini, penerbit spesialis game retro SNEG resmi merilis ulang *Pool of Radiance: Ruins of Myth Drannor* di etalase Steam dan platform [GOG yang membuka pintu bagi pencinta game klasik tanpa DRM](/ketika-gog-galaxy-akhirnya-buka-pintu-buat-gamer-linux-yang).

Hebatnya, versi modern ini bukan sekadar berkas emulator lawas yang dijejalkan sembarangan. SNEG melakukan pembenahan teknis menyeluruh: menambahkan dukungan resolusi layar lebar (*widescreen*), kompatibilitas penuh dengan kontroler modern, fitur pengaturan kecepatan pertarungan, bilah aksi cepat, hingga perbaikan tekstur visual. Dan yang paling melegakan hati siapa saja yang sempat trauma di masa remaja: program pembersihnya dipastikan sudah dijinakkan, sehingga Anda tidak perlu takut partisi sistem operasi Anda terhapus saat hendak mencopot game ini dari komputer.

Mendengar kabar kembalinya sang legenda terkutuk ini, sebagian komunitas gamer purba mungkin tergoda untuk bernostalgia sembari mengagumi keberanian penerbit yang mau repot-repot memulihkan game yang dulunya diejek habis-habisan. Apalagi di tengah lesunya industri game modern yang kerap meluncurkan karya setengah matang berharga jutaan rupiah, kehadiran kembali peninggalan era aturan D&D Edisi Ketiga terdengar seperti hiburan alternatif yang menggoda.

Namun mari kita jujur pada diri sendiri dan menanggalkan kacamata nostalgia yang sering kali menipu. Mengangkat kembali *Ruins of Myth Drannor* ke permukaan sesungguhnya membuktikan satu hal: game yang pada dasarnya membosankan tidak akan mendadak berubah menjadi mahakarya hanya karena bug penghancur hard disk-nya sudah diperbaiki.

Di balik reputasi bug-nya yang menghebohkan, gameplay inti game ini sejatinya adalah penjelajahan ruang bawah tanah (*dungeon crawl*) berbasis giliran yang luar biasa lambat dan repetitif. Menggerakkan karakter dari satu lorong batu ke lorong batu lainnya terasa seperti menyeret karung beras basah. Setiap pertempuran melawan sekelompok goblin rendahan bisa memakan waktu belasan menit hanya untuk menunggu giliran animasi berjalan. Game ini tidak memiliki kedalaman narasi emosional atau dinamika pilihan moral yang memukau seperti waralaba RPG legendaris lainnya.

Bagi gamer Indonesia yang saat ini sudah cukup pusing menghadapi masalah [ukuran instalasi raksasa yang menyiksa penyimpanan komputer](/ketika-update-nier-automata-membengkak-jadi-366-gb-dan-bikin-ssd), bernostalgia dengan game seberat beberapa ratus megabita memang terasa menyegarkan. Kita setidaknya bisa mengapresiasi upaya pengarsipan digital (*video game preservation*) yang dilakukan SNEG. Membiarkan game cacat tetap bisa diakses secara legal adalah bagian penting dari edukasi sejarah agar pengembang generasi sekarang paham betapa berbahayanya meremehkan pengujian kualitas (*quality assurance*).

Kendati demikian, menghabiskan waktu puluhan jam menyusuri labirin Myth Drannor yang monoton di tahun 2026 jelas membutuhkan tingkat kesabaran setara pertapa gua. Gamer modern sudah terbiasa dengan ritme aksi yang tanggap dan desain antar-muka yang memanjakan kenyamanan pemain. Memaksa diri menatap layar statis selama berjam-jam demi membuktikan bahwa diri kita adalah gamer garis keras sejati sering kali berakhir dengan rasa kantuk yang tak tertahankan di depan monitor.

Merayakan kembalinya *Pool of Radiance* hari ini pada akhirnya lebih mirip seperti reuni dengan teman lama yang dulu pernah meminjam uang jajan lalu kabur tanpa kabar. Kita senang melihatnya masih hidup dan tampak jauh lebih rapi, tetapi untuk mengajaknya nongkrong berlama-lama sampai larut malam, rasanya tabungan waktu kita masih terlalu berharga untuk disia-siakan.`
  },
  {
    title: "Ketika Warga Mengira Data KTP di Server Pinjol Bisa Lenyap Cuma Modal Hapus Aplikasi",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Privasi Digital", "Keamanan Siber", "Pinjol", "Data Pribadi", "Teknologi", "Fintech"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2026/07/28/WhatsApp-Image-2026-07-28-at-19.12.27_1.jpeg",
    imageAlt: "Ilustrasi pengisian data identitas KTP dan dokumen pribadi pada aplikasi pinjaman online di smartphone",
    sourceUrl: "https://www.antaranews.com/berita/5830407/cara-menghapus-data-ktp-dari-pinjol-ini-7-langkah-yang-bisa-dilakukan",
    excerpt: "Deretan tips internet getol membagikan panduan menghapus data KTP dari aplikasi pinjaman online: dari berkirim email ke CS sampai lapor OJK. Namun di mata sysadmin dan arsitektur basis data, sekali foto selfie identitas Anda disedot ke server fintech, menghapusnya tidak semudah membuang sampah ke keranjang desktop.",
    content: `Pemandangan ini barangkali sudah menjadi rutinitas lumrah di sudut-sudut warkop dan pos ronda tanah air. Seorang kawan duduk termangu menatap layar smartphone, memandangi saldo rekening yang pas-pasan, lalu dengan napas lega yang dibuat-buat menggeser jari ke ikon aplikasi pinjaman online (*pinjol*). Ia menekan tombol copot pemasangan (*uninstall*), menyaksikan ikon tersebut lenyap dari layar beranda, lalu tersenyum puas seolah-olah seluruh catatan utang dan riwayat hidupnya baru saja terhapus dari peradaban manusia.

"Beres! Aplikasinya sudah kuhapus, nomor teleponnya sudah kuganti, aman sekarang," begitu gumamnya penuh percaya diri sambil menyeruput kopi susu saset.

Kita memang hidup di tengah masyarakat yang punya keyakinan magis terhadap tombol di layar sentuh. Bagi sebagian orang, menghapus aplikasi dari ponsel disamakan dengan membakar tumpukan berkas kuitansi di halaman belakang rumah: begitu abunya hilang ditiup angin, hilang pula kewajiban masa lalu. Sayangnya, bagi siapa saja yang pernah berkecimpung di balik meja kerja pusat data dan arsitektur jaringan, ilusi ketenangan tersebut terasa sangat menggelikan sekaligus bikin elus dada.

Keresahan seputar jejak data pribadi di industri keuangan digital memang kian meruncing. Sebagaimana diulas dalam laporan Antara Tekno pekan ini, masyarakat banyak mencari cara untuk menghapus salinan data Nomor Induk Kependudukan (NIK) dan foto Kartu Tanda Penduduk (KTP) setelah pinjaman lunas. Laporan tersebut merinci serangkaian panduan formal: mulai dari melunasi seluruh kewajiban utang, mengajukan permohonan tertulis ke layanan pelanggan (*customer service*) perusahaan pinjol, meminta konfirmasi pemusnahan dokumen, hingga melaporkan kendala ke kontak pengaduan Otoritas Jasa Keuangan (OJK).

Secara hukum normatif, langkah-langkah di atas memang berpijak pada hak warga negara yang dijamin dalam Undang-Undang Perlindungan Data Pribadi (UU PDP). Pengguna berhak meminta penghentian pemrosesan dan penghapusan data jika tujuan penggunaannya telah selesai.

![Ilustrasi pengisian data identitas KTP dan dokumen pribadi pada aplikasi pinjaman online di smartphone](https://img.antaranews.com/cache/800x533/2026/07/28/WhatsApp-Image-2026-07-28-at-19.12.27_1.jpeg)

Namun di sinilah letak jurang menganga antara pasal manis di atas kertas undang-undang dengan cara kerja mesin komputasi di dunia nyata. Bagi para insinyur backend yang mengelola basis data relasional di industri teknologi finansial, konsep menghapus data secara permanen (*hard delete*) pada dasarnya adalah pantangan besar.

Pertama, aturan main dari otoritas keuangan sendiri secara tegas mewajibkan penyelenggara fintech untuk menerapkan prinsip masa retensi data. Peraturan OJK mewajibkan seluruh rekam jejak transaksi keuangan, dokumen verifikasi identitas (*Know Your Customer* / KYC), dan log aktivitas nasabah disimpan minimal selama lima tahun untuk keperluan audit kepatuhan, pencegahan pencucian uang, dan penyelesaian sengketa hukum. Artinya, surat permohonan penghapusan data yang Anda kirimkan ke alamat email pengaduan paling banter hanya akan mengubah status akun Anda dari aktif menjadi nonaktif (*soft delete*). Foto selfie Anda sambil memegang KTP tetap tersimpan rapi di dalam ember penyimpanan awan (*cloud object storage*) milik perusahaan.

Kedua, ada masalah infrastruktur cadangan data (*backup*). Server produksi aplikasi modern membuat salinan basis data secara otomatis setiap hari, minggu, dan bulan, lalu mereplikasikannya ke berbagai zona server terpisah. Bahkan andaikata seorang administrator sistem dengan sukarela menghapus baris data KTP Anda di server utama, identitas tersebut masih tetap hidup abadi di puluhan berkas cadangan kompresi yang mustahil dibongkar satu per satu hanya demi memenuhi permintaan satu orang pengguna.

Situasi ini bertambah runyam ketika kita membicarakan platform pinjaman semi-legal atau sindikat fintech nakal yang menjamur di luar radar pengawasan. Bukan rahasia lagi bahwa komoditas paling mahal di era internet bukanlah biaya bunga cicilan, melainkan basis data profil konsumen itu sendiri. Sebelum Anda sempat berpikir untuk melunasi tagihan, daftar kontak telepon, riwayat SMS, dan foto identitas Anda kerap kali sudah disalin ke server pihak ketiga, dialihkan ke agensi penagih utang (*debt collector*), atau bahkan bocor ke forum pertukaran data gelap.

Kondisi tersebut sangat mirip dengan kepolosan kita saat menduga [factory reset HP bekas belum tentu bikin data pribadi benar-benar lenyap](/ketika-factory-reset-hp-bekas-ternyata-belum-tentu-bikin-data) dari cip memori internal. Menghapus jejak digital menuntut pemahaman mendalam tentang bagaimana perangkat keras dan jaringan bekerja, bukan sekadar mengandalkan sugesti tombol reset, fenomena yang juga terlihat saat [kebocoran privasi digital akibat kecerobohan perangkat](/ketika-prajurit-militer-kena-peras-intel-asing-gara-gara-malas) mengancam orang-orang yang merasa sistem keamanannya sudah rapat.

Terlebih lagi belakangan ini marak modus penipuan baru yang menawarkan jasa pemutihan data pinjol kilat di media sosial dengan meminta bayaran uang muka. Bukannya identitas jadi aman, warga yang putus asa justru menjadi korban pemerasan dua kali lipat oleh sindikat kriminal yang sama.

Mengirimkan swafoto bersama selembar KTP ke server pinjaman daring pada akhirnya ibarat menaburkan segenggam garam ke dalam semangkuk kuah soto yang mengepul. Anda bisa saja membuang mangkuknya, mencuci sendoknya, dan mengganti meja makan dengan yang baru, tetapi rasa asinnya sudah telanjur menyatu dengan kuah dan mustahil untuk dipisahkan kembali.`
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
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261108-0700.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
