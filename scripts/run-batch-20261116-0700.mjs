import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Borobudur Marathon Jadi Ajang Pamer Sepatu Karbon Saat Warga Desa Panen Rezeki",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Borobudur Marathon", "Budaya Urban", "Gaya Hidup", "Jawa Tengah", "Magelang", "Margaretha Nina"],
    imageUrl: "https://jatengprov.go.id/wp-content/uploads/2026/11/IMG-20261115-WA0040.jpg",
    imageAlt: "Suasana pelari Bank Jateng Borobudur Marathon 2026 melintasi rute perdesaan di kawasan Borobudur Magelang",
    sourceUrl: "https://jatengprov.go.id/publik/borobudur-marathon-dongkrak-ekonomi-pelaku-usaha-panen-rezeki/",
    excerpt: "Bank Jateng Borobudur Marathon 2026 memadati Magelang dengan 12.500 pelari. Di balik pamer jersey dan sepatu lari karbon jutaan rupiah, warga desa justru menikmati berkah homestay dan kuliner ludes.",
    content: `Kalau dulu hari Minggu pagi anak muda perkotaan dihabiskan dengan tidur lelap sehabis lembur atau sekadar menikmati seduhan kopi susu di kafe berpendingin ruangan, kini lanskap gaya hidup urban telah bergeser drastis. Linimasa media sosial setiap akhir pekan mendadak dibanjiri tangkapan layar catatan jarak tempuh aplikasi kebugaran dan parade swafoto berlatar belakang aspal jalanan. Menjelang fajar menyingsing, ribuan orang rela bangun pagi-pagi buta dengan perlengkapan lengkap dari ujung kepala hingga kaki: jersey lari berpori serat sintetis warna mencolok, kacamata hitam sporty bergaya aerodinamis, hingga sepasang sepatu lari berpelat karbon yang banderol harganya cukup untuk membayar sewa kamar kos selama tiga bulan penuh. Semua pengorbanan fisik dan finansial itu dijalani demi satu ritual sakral kelas pekerja kota: menuntaskan jarak puluhan kilometer dan memamerkan kalungan medali penamat di linimasa digital.

Puncak dari histeria demam lari massal tersebut baru saja membakar kawasan candi bersejarah di perhelatan Bank Jateng Borobudur Marathon 2026 di Kabupaten Magelang, Minggu kemarin. Sebagaimana dicatat dalam laporan resmi Portal Pemprov Jateng, ajang maraton tahunan berskala internasional ini sukses menyedot hampir 12.500 pelari yang berdatangan dari 38 negara berbeda. Jalanan aspal perdesaan yang biasanya lengang dan hanya dilalui sepeda ontel atau petani pembawa cangkul mendadak disulap menjadi panggung megah yang dipadati lautan manusia dengan deru langkah kaki berirama dan aroma semerbak balsem pereda otot.

Bagi siapa saja yang mengamati fenomena ini dari pinggir lintasan, pemandangan tersebut memang menyuguhkan ironi teatrikal yang sangat menghibur. Ada kontras sosial yang menggelitik ketika menyaksikan para profesional muda yang di hari kerja kerap mengeluh nyeri pinggang akibat duduk delapan jam di depan monitor mendadak memforsir paru-paru mereka berlari di bawah terik cuaca tropis Jawa Tengah. Mereka rela merogoh kocek jutaan rupiah untuk tiket pesawat, biaya registrasi lomba, hingga suplemen gel elektrolit impor, hanya untuk memastikan diri tidak tertinggal dari arus pergaulan urban.

![Suasana pelari Bank Jateng Borobudur Marathon 2026 melintasi rute perdesaan di kawasan Borobudur Magelang](https://jatengprov.go.id/wp-content/uploads/2026/11/IMG-20261115-WA0040.jpg)

Namun menuding keriuhan maraton ini semata-mata sebagai ajang pamer gengsi kelas menengah kota tentu akan menutup mata kita dari kenyataan yang jauh lebih bermakna di lapangan. Di balik gemerlap gaya hidup sehat para pelari, kehadiran belasan ribu tamu ini terbukti menjadi berkah ekonomi yang luar biasa nyata bagi masyarakat akar rumput di sekitar kawasan Borobudur. Menurut penuturan para pengelola Balai Ekonomi Desa (Balkondes) dan Paguyuban Homestay se-Kecamatan Borobudur, tingkat keterisian kamar penginapan, wisma desa, hingga rumah-rumah tinggal milik warga setempat menyentuh angka seratus persen penuh tanpa menyisakan satu pun kasur kosong.

Perputaran uang ratusan juta rupiah mengalir deras langsung ke kantong-kantong rakyat kecil tanpa tersumbat potongan birokrasi korporasi. Para pedagang kuliner lokal yang biasanya mencatat omzet pas-pasan mendadak panen penghasilan berlipat ganda hingga jutaan rupiah sehari sampai harus menambah tenaga kerja dan membuka lapak selama dua puluh empat jam penuh. Para pengemudi ojek online kebanjiran pesanan mengantar pelari sejak tiga hari sebelum perlombaan dimulai, sementara warung kelontong warga sibuk mengisi ulang pasokan air mineral dan pisang rebus segar.

Penyebaran dampak ekonomi yang merata ke tingkat perdesaan semacam ini menjadi cerminan berharga bagaimana ruang publik dan acara olahraga dapat memberdayakan warga lokal secara organik, serupa dengan upaya saat [komunitas warga merawat ruang publik di Semarang](/komunitas-semarang-rawat-roh-koes-plus-di-tugu-muda-saat-konser) lewat aksi kebudayaan mandiri. Momen ini sekaligus menjadi antitesis segar terhadap ketimpangan fasilitas hiburan nasional, di mana selama ini [venue acara besar menumpuk di Jakarta](/venue-konser-musik-menumpuk-di-jakarta-saat-penonton-daerah-cuma) dan kerap membiarkan daerah hanya menjadi penonton pasif dari gemerlap industri rekreasi.

Borobudur Marathon akhirnya memperlihatkan titik temu yang manis antara kebutuhan validasi anak kota dan denyut pertahanan ekonomi masyarakat desa. Para pelari mungkin akan pulang ke ibu kota membawa oleh-oleh otot paha yang kaku, telapak kaki lecet, dan ratusan stok foto untuk unggahan media sosial hingga beberapa pekan mendatang. Namun bagi warga desa di seputaran Borobudur yang tersenyum menghitung hasil dagangan di ujung hari, tetesan keringat para pelari modis itu adalah rezeki riil yang membuat dapur mereka terus mengepul hangat tanpa perlu janji manis program bantuan pemerintah.`
  },
  {
    title: "Sinyal HP Mendadak Sekarat di Keramaian Bukti Janji Kecepatan 5G Cuma Ilusi Brosur",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Jaringan 5G", "Sinyal HP", "Operator Seluler", "Base Transceiver Station", "Elang Elano"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ilustrasi infrastruktur teknologi telekomunikasi dan chip pemrosesan sinyal jaringan nirkabel digital",
    sourceUrl: "https://www.antaranews.com/berita/5853423/kenapa-sinyal-hp-lemot-di-tempat-aamai-ini-5-penyebabnya",
    excerpt: "Ponsel cerdas sering kali mendadak lumpuh dan kehilangan sinyal di tengah kerumunan konser atau stadion. Bukti nyata bahwa slogan 5G ultra kencang milik operator langsung rontok saat diuji realitas.",
    content: `Pernahkah Anda berdiri di tengah kerumunan puluhan ribu penonton di stadion sepak bola atau festival musik akbar, lalu mendadak merasa seperti terlempar kembali ke zaman batu? Perangkat smartphone canggih seharga belasan juta rupiah di genggaman tangan Anda masih dengan percaya diri memajang indikator bilah sinyal penuh, lengkap dengan logo huruf 5G yang tampak perkasa di sudut layar. Namun begitu Anda mencoba mengirimkan sebaris pesan singkat di WhatsApp untuk mengabari kawan satu rombongan, pesan tersebut hanya memunculkan lingkaran jarum jam yang berputar tanpa henti sebelum akhirnya menyerah dengan ikon centang abu-abu atau tanda seru merah.

Mencoba memuat ulang peta digital navigasi berakhir dengan tampilan layar putih hampa, membuka aplikasi transportasi online untuk memesan kendaraan pulang gagal menyambung ke server, bahkan sekadar memindai kode batang pembayaran digital demi membeli sebotol air mineral dingin pun mendadak terasa seperti misi hidup dan mati. Ponsel pintar yang di brosur penjualan diklaim mampu memproses kecerdasan buatan dalam kedipan mata seketika berubah fungsi menjadi ganjal pintu saku yang tidak ada gunanya.

Kelumpuhan massal semacam ini sejatinya bukan akibat kutukan takhayul atau kerusakan mendadak pada komponen antena ponsel Anda. Sebagaimana dicatat dalam laporan teknis Antara Tekno akhir pekan ini, fenomena hilangnya sambungan internet di tengah keramaian acara publik berakar pada momok menahun infrastruktur telekomunikasi yang bernama kemacetan jaringan atau *network congestion*. Masalah mendasarnya bukan semata-mata urusan jangkauan sinyal dari menara pemancar ke antena perangkat, melainkan keterbatasan daya tampung fisik menara *Base Transceiver Station* (BTS) yang mendadak dipaksa melayani puluhan ribu perangkat seluler secara bersamaan pada waktu yang persis sama.

![Ilustrasi infrastruktur teknologi telekomunikasi dan chip pemrosesan sinyal jaringan nirkabel digital](https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop)

Di sinilah letak ironi terbesar yang jarang dibicarakan secara jujur dalam materi promosi para petinggi korporasi seluler. Selama bertahun-tahun, operator telekomunikasi rajin menggelontorkan anggaran pemasaran miliaran rupiah untuk memasang papan reklame megah di jalan tol dan menayangkan video komersial beresolusi tinggi. Narasi yang mereka dengungkan selalu seragam: koneksi generasi kelima yang secepat kilat, latensi nol koma sekian milidetik, serta kebebasan mengunduh berkas ukuran puluhan gigabita hanya dalam hitungan detik.

Namun ketika janji manis pemasaran tersebut dihadapkan pada kenyataan lapangan di mana ribuan anak muda serentak menyalakan kamera ponsel untuk merekam video siaran langsung berkualitas tinggi ke media sosial, benteng teknologi 5G itu langsung rontok tak bersisa. Spektrum frekuensi radio yang dialokasikan pemerintah kepada operator ibarat ruas jalan protokol kota yang memiliki batas lebar maksimal. Ketika volume kendaraan data yang melintas melonjak ribuan kali lipat dalam satu detik, kemacetan total tak terelakkan dan menara BTS terpaksa membagi remah-remah lebar pita data yang tersisa hingga koneksi internet merangkak lambat bak siput.

Lucunya lagi, saat jaringan mereka megap-megap kekurangan kapasitas unit BTS temporer di lokasi perhelatan, solusi yang sering ditawarkan ke publik justru terdengar seperti lelucon warkop. Konsumen dengan santai disuruh mengaktifkan mode pesawat bolak-balik, mengubah pengaturan ke jaringan 4G lawas, atau disarankan bergeser mencari tempat sepi di tengah lautan penonton yang berhimpitan. Kebiasaan cuci tangan ini sangat identik dengan muslihat lama saat [operator memangkas kecepatan kuota pengguna secara sepihak](/t-mobile-pangkas-kecepatan-internet-warga-miskin-sampai-dijewer) dengan dalih kebijakan batas pemakaian wajar yang samar-samar. Konsumen yang sudah membayar mahal tagihan paket data bulanan diposisikan sebagai pihak yang bersalah hanya karena ingin menggunakan hak koneksi mereka, memicu kekecewaan yang serupa saat [server cloud tumbang berjamaah membikin kepanikan](/server-microsoft-365-tumbang-bukti-ketergantungan-cloud-malah) dan menelanjangi betapa rentannya ketergantungan kita pada infrastruktur digital terpusat.

Lain kali jika ponsel pintar Anda mendadak lumpuh dan kehilangan daya koneksi di tengah riuhnya kerumunan festival musik, berhentilah mengutak-atik tombol restart dengan perasaan dongkol. Tarik napas panjang, simpan ponsel tersebut ke dalam saku celana, dan nikmati saja pertunjukan di depan mata dengan panca indra alami Anda. Setidaknya Anda disadarkan pada satu pelajaran berharga bahwa secepat apa pun klaim kecepatan 5G yang tercetak di brosur operator, teknologi tersebut langsung tak berkutik begitu dihadapkan pada naluri purba manusia yang berebut ingin pamer keberadaan di dunia maya.`
  }
];

async function runBatch() {
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
  console.log(`🎉 BATCH SELESAI: ${results.length} artikel berhasil diaudit & dipublikasikan.`);
  console.log("=================================================================");
  for (const res of results) {
    console.log(`- [${res.status.toUpperCase()}] ${res.slug} (Skor: ${res.score}) -> ${res.url}`);
  }
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261116-0700.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
