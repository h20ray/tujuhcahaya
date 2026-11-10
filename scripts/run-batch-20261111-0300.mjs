import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Sony Menutup Aplikasi PlayStation Plus PC Akibat Terlalu Malas Memoles Fitur",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "PlayStation Plus", "Sony", "Gamer PC", "Cloud Gaming", "Industri Game", "DualSense"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/wkTrHGFcrPxmNFFGDeyYtH-1920-80.jpg",
    imageAlt: "Logo resmi PlayStation Plus berlatar belakang biru pada layar monitor komputer dan antarmuka aplikasi gim streaming",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/playstation-plus-pc-app-is-being-shut-down-in-december-because-less-than-0-4-percent-of-eligible-subscribers-are-using-it/",
    excerpt: "Sony resmi menyuntik mati aplikasi PlayStation Plus untuk Windows PC per 10 Desember mendatang dengan alasan hanya disentuh oleh kurang dari 0,4 persen pelanggan. Alih-alih berbenah dan memperbaiki aplikasi yang kaku, lambat, dan minim fitur tersebut, sang raksasa teknologi Jepang justru memilih cuci tangan sembari menyalahkan ketiadaan minat dari komunitas gamer komputer.",
    content: `Bila Anda pernah mencoba menjalankan aplikasi PlayStation Plus di komputer jinjing atau PC rakitan kesayangan, Anda pasti tahu rasanya terjebak dalam mesin waktu yang salah sasaran. Antarmukanya terasa berat, navigasi menu sering patah-patah, dan yang paling konyol, aplikasi tersebut menolak mentah-mentah periferal mouse dan keyboard. Anda dipaksa menancapkan stik DualShock atau DualSense lewat kabel USB hanya demi menelusuri katalog permainan. Kualitas alirannya pun tertahan kaku di resolusi standar sepuluh delapan puluh piksel tanpa dukungan penyesuaian grafis modern. Bukannya memanjakan pengguna dengan kemewahan komputasi desktop, Sony seolah sengaja merancang aplikasi tersebut sebagai bilik siksaan kecil bagi siapa saja yang berani mencicipi katalog konsol tanpa membeli kotak hitam putih mereka.

Kini, sandiwara setengah hati itu resmi ditutup tirainya. Sebagaimana dicatat dalam laporan peliputan PC Gamer dan konfirmasi resmi pihak pengembang, Sony mengumumkan bakal menyuntik mati aplikasi PlayStation Plus untuk Windows PC mulai 10 Desember mendatang. Alasan yang disodorkan terdengar sangat klise: angka pemakai aktif yang terlalu minim. Berdasarkan keterangan internal perusahaan, aplikasi lawas tersebut ternyata hanya disentuh oleh kurang dari nol koma empat persen pelanggan tingkatan tertinggi mereka. Dengan dalih efisiensi operasional dan perampingan sumber daya, manajemen raksasa asal Tokyo ini memutuskan untuk menarik steker server dan menyuruh pengguna komputer kembali ke jalan yang benar menurut versi mereka, yakni membeli mesin PlayStation fisik.

![Logo resmi PlayStation Plus berlatar belakang biru pada layar monitor komputer dan antarmuka aplikasi gim streaming](https://cdn.mos.cms.futurecdn.net/wkTrHGFcrPxmNFFGDeyYtH-1920-80.jpg)

Melihat angka nol koma empat persen tersebut, para petinggi Sony mungkin mengira publik bakal mengangguk maklum. Namun bagi komunitas gamer yang sehari-hari berkutat dengan ekosistem PC, dalih ketiadaan minat itu terasa seperti lelucon yang tak lucu. Bagaimana mungkin sebuah layanan bisa meraih puluhan juta pengguna aktif jika selama bertahun-tahun keberadaannya sengaja ditelantarkan di sudut tergelap toko digital? Sejak era PlayStation Now dilebur menjadi bagian dari tingkatan Premium, Sony nyaris tidak pernah menyentuh baris kode aplikasi desktop tersebut. Tidak ada pembaruan resolusi empat K, ketiadaan integrasi toko lokal, tidak ada dukungan laju penyegaran layar tinggi, apalagi opsi pengunduhan berkas biner secara mandiri. Membandingkannya dengan aplikasi Xbox yang terintegrasi mulus dengan ekosistem Windows jelas seperti membandingkan mobil sport listrik mutakhir dengan gerobak dorong beroda kayu.

Sikap menganaktirikan pemain komputer pribadi sebenarnya adalah rahasia umum di balik strategi korporasi konsol. Di satu sisi, manajemen PlayStation rajin membual di hadapan para pemegang saham mengenai ambisi ekspansi lintas platform demi mendongkrak margin keuntungan perangkat lunak. Namun di sisi lain, ketakutan mereka bahwa penjualan kotak konsol bakal tergerus membuat setiap langkah di luar ruang keluarga diambil dengan langkah gemetar. Mengorbankan kenyamanan basis pengguna demi mengamankan penjualan perangkat keras adalah taktik usang yang terus diulang-ulang. Pola arogan semacam ini terasa sangat familiar bagi siapa saja yang mengikuti manuver industri modern, persis seperti drama ketika [gamer PC tetap disuruh gigit jari](/pre-order-gta-6-pecahkan-rekor-konsol-saat-gamer-pc-tetap-disuruh) tanpa kejelasan jadwal saat pesanan konsol dipuja-puji setinggi langit.

Bagi gamer tongkrongan yang terbiasa patungan membeli voucer bulanan di warkop, penutupan ini sebetulnya tidak terlalu mengejutkan. Siklus hubungan gamer PC dengan Sony memang selalu diwarnai kecurigaan timbal balik. Korporasi raksasa tersebut menuntut kesetiaan, mewajibkan pendaftaran akun pihak ketiga yang merepotkan, dan menyodorkan program aplikasi kerdil yang minim optimasi. Namun begitu pengguna enggan menggunakan aplikasi yang sejak awal memang dibikin setengah matang, para eksekutif dengan enteng menyimpulkan bahwa pasar komputer pribadi tidak ramah terhadap layanan komputasi awan. Padahal, platform seperti GeForce Now atau Steam Deck membuktikan bahwa layanan digital yang digarap dengan penuh dedikasi teknis bakal selalu disambut gegap gempita oleh para pemain.

Kini, babak penutupan aplikasi streaming tersebut menjadi pengingat berharga bagi siapa saja yang masih menaruh harapan pada kemurahan hati konglomerat konsol. Jangan pernah mengharapkan layanan kelas wahid dari perusahaan yang setengah hatinya masih terkunci rapat di dalam kotak plastik ruang tamu keluarga. Daripada meratapi hilangnya aplikasi yang sejak awal cuma membebani ruang penyimpanan sistem operasi, lebih baik kembali merawat pustaka gim bebas hak cipta digital di toko sebelah yang tidak pernah menuntut kita membeli stik mahal cuma buat menekan tombol mulai permainan.`
  },
  {
    title: "Venue Konser Musik Menumpuk di Jakarta Saat Penonton Daerah Cuma Bisa Gigit Jari",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Margaretha Nina", "Konser Musik", "Festival Musik", "GoodStats", "Budaya Urban", "Industri Musik", "GBK", "Pentas Musik"],
    imageUrl: "https://cdn.goodnewsfromindonesia.id/nyc/goodstats/uploads/infographics/original/2026/11/10/10-venue-yang-paling-sering-menggelar-konser-dan-festival-musik-di-indonesia-PzmXxh9X5J.jpg?tr=w-1200,h-1200,fo-center",
    imageAlt: "Infografik daftar sepuluh lokasi dan gedung pertunjukan yang paling sering menyelenggarakan konser musik di Indonesia",
    sourceUrl: "https://goodstats.id/infographic/10-venue-yang-paling-sering-menggelar-konser-dan-festival-musik-di-indonesia-nm5dC",
    excerpt: "Laporan riset GoodStats membuktikan fakta telanjang industri pertunjukan tanah air: sepuluh lokasi konser terpopuler di Indonesia masih terkonsentrasi mutlak di kawasan Jakarta dan Tangerang. Sentralisme panggung musik ini tak hanya memaksa penonton daerah boncos jutaan rupiah demi ongkos tiket perjalanan, tetapi juga membuktikan lambannya pemerataan infrastruktur seni di luar ibu kota.",
    content: `Kalau Anda membuka linimasa media sosial pada akhir pekan, pemandangan yang muncul hampir selalu seragam: teman sejawat Anda yang berdomisili di Jakarta memamerkan gelang festival musik beraneka warna, mengunggah video bernyanyi bersama dari tribun megah, lalu menutup malam dengan pamer makan malam tengah malam bersama lingkaran pertemanannya. Bagi anak muda yang tinggal di luar lingkar aglomerasi Jabodetabek, tontonan semacam itu kerap menimbulkan rasa getir di dada. Untuk bisa menyaksikan musisi idola melantunkan sebaris lirik secara langsung, warga daerah bukan cuma harus bertarung dalam perang tiket daring yang brutal, melainkan juga harus merogoh kocek tabungan berbulan-bulan demi tiket pesawat, sewa kamar penginapan, dan ongkos taksi daring yang tarifnya melonjak gila-gilaan saat bubaran acara.

Keresahan kultural tersebut bukanlah ilusi atau perasaan iri tanpa dasar. Sebagaimana dicatat dalam laporan data riset GoodStats mengenai lanskap pertunjukan musik nasional, sepuluh lokasi yang paling sering menyelenggarakan konser dan festival di tanah air praktis hanya berputar-putar di satu titik koordinat yang sama. Stadion Utama Gelora Bung Karno, JIExpo Kemayoran, Beach City International Stadium di pesisir Ancol, hingga gedung raksasa ICE BSD di Tangerang mendominasi daftar teratas dengan selisih frekuensi yang mencolok dibanding kota-kota lain. Dari total perputaran ratusan panggung skala besar sepanjang tahun, kota-kota pusat kebudayaan seperti Bandung, Yogyakarta, Surabaya, apalagi pulau-pulau di luar Jawa nyaris hanya kebagian remah-remah jadwal sisa yang kerap dibatalkan di menit-menit akhir akibat kendala perizinan setempat.

![Infografik daftar sepuluh lokasi dan gedung pertunjukan yang paling sering menyelenggarakan konser musik di Indonesia](https://cdn.goodnewsfromindonesia.id/nyc/goodstats/uploads/infographics/original/2026/11/10/10-venue-yang-paling-sering-menggelar-konser-dan-festival-musik-di-indonesia-PzmXxh9X5J.jpg?tr=w-1200,h-1200,fo-center)

Sentralisme panggung ini memperlihatkan betapa timpangnya tata kelola ekonomi kreatif kita di lapangan. Para promotor papan atas kerap berdalih bahwa daya beli penonton di daerah belum mampu menutup biaya produksi panggung yang membengkak. Namun dalih tersebut terasa sangat dangkal saat kita melihat ribuan penonton dari pelosok Kalimantan, Sumatra, hingga pelosok Jawa Timur yang rela menguras tabungan demi terbang ke ibu kota hanya untuk menonton panggung dua jam. Masalah sesungguhnya bukan ketiadaan antusiasme penikmat musik, melainkan keengganan para pemangku kebijakan daerah untuk membangun gedung pertunjukan dengan akustik layak dan akses transportasi umum yang ramah kantong. Di daerah, gedung olahraga serbaguna yang bising dan beratap seng panas masih menjadi satu-satunya tempat darurat bagi musisi yang nekat menyapa penggemar setianya.

Ironi ini terasa makin menyengat saat kita menyaksikan para birokrat pariwisata rajin berkoar-koar soal target kunjungan wisata musik global. Keberhasilan mendatangkan artis luar negeri ke stadion ibu kota selalu dijadikan ajang unjuk gigi di hadapan kamera wartawan, persis seperti keriuhan saat [pejabat memamerkan konser musisi internasional](/pejabat-pamer-konser-ye-sedot-turis-asing-saat-panggung-musisi) dengan klaim perputaran ekonomi triliunan rupiah, sementara ekosistem pertunjukan independen di kota-kota sekunder dibiarkan megap-megap mencari sponsor mandiri. Ketika seluruh perputaran uang musik berpusat di segelintir gedung mewah ibu kota, industri hiburan kita sejatinya sedang mengerdilkan dirinya sendiri menjadi klub eksklusif warga berpenghasilan ganda di sekitar jalur kereta komuter.

Bagi penikmat musik di daerah yang tiap minggu cuma bisa menyumbang angka streaming lagu di kamar kos, konsentrasi gedung konser ini adalah pengingat bahwa pemerataan kegembiraan masih menjadi barang mewah di republik ini. Menikmati seni pertunjukan langsung seharusnya menjadi hak kebudayaan yang bisa diakses tanpa harus berutang ke aplikasi pinjaman online demi tiket kereta eksekutif. Ketika panggung megah hanya berputar di antara gedung pameran Tangerang dan pesisir utara Jakarta, jargon bahwa musik adalah bahasa persatuan yang melintasi sekat wilayah terasa tak lebih dari sekadar pemanis materi promosi media sosial.

Kita tentu tidak menuntut stadion megah berkapasitas puluhan ribu penonton dibangun mendadak di setiap kabupaten pelosok. Namun selama para promotor dan pemerintah daerah masih menganggap pertunjukan seni sebagai hajatan sampingan yang kalah penting dibanding pembangunan mal beton, penikmat musik daerah akan terus dipaksa puas menjadi penyumbang komentar di tayangan siaran langsung. Selama ketimpangan panggung ini dibiarkan lestari, piala festival musik tanah air sejatinya belum pantas menyandang gelar panggung nasional, melainkan cuma hajatan arisan warga ibu kota yang kebetulan disaksikan oleh penonton daerah dari kejauhan.`
  }
];

export async function runBatch() {
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
      markAsSeen(art.sourceUrl.trim());
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi 03:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261111-0300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
