import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Amazon Rilis Robot Satpam Rp15 Juta tapi Tak Berdaya Menghadapi Undakan Tangga",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Amazon", "Ring Rover Cam", "Robotik", "Smart Home", "Privasi Digital", "Gaya Hidup Digital", "Gadget"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/ringrover1_31dee3.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=1200",
    imageAlt: "Robot patroli keamanan Amazon Ring Rover Cam dengan kamera periskop 4K dan lampu sirene berpatroli di lantai gedung",
    sourceUrl: "https://www.theverge.com/tech/1030282/amazon-ring-robotics-rover-cam-4k-security-business",
    excerpt: "Amazon resmi merilis robot patroli Ring Rover Cam seharga hampir seribu dolar untuk menjaga keamanan ruangan. Bukannya menjawab kebutuhan riil pengamanan fisik, raksasa teknologi ini justru mendaur ulang robot rumahan Astro yang sempat gagal total menjadi tong sampah beroda dengan sirene berkedip yang tak sanggup menaiki anak tangga.",
    content: `Kalau ada satu hal yang paling konsisten dari para raksasa teknologi Silicon Valley, itu adalah kemampuan ajaib mereka menciptakan solusi rumit untuk masalah yang sebetulnya tidak pernah ada. Kita hidup di zaman di mana pintu rumah cukup digembok dengan kunci besi seharga puluhan ribu rupiah buatan pandai besi lokal untuk tidur nyenyak sampai pagi. Namun bagi korporasi sekelas Amazon, solusi sederhana nan fungsional seperti itu dianggap ketinggalan zaman dan tidak menghasilkan aliran uang langganan bulanan. Maka lahirlah impian futuristis yang sedikit ganjil: rumah atau kantor Anda harus dijaga oleh tabung plastik beroda yang mondar-mandir merekam setiap sudut ruangan secara mandiri.

Sebagaimana dicatat dalam laporan peliputan The Verge, Amazon pekan ini resmi memperkenalkan Ring Rover Cam, sebuah robot patroli beroda dua yang dibanderol seharga 999 dolar AS atau sekitar 15 juta rupiah. Perangkat ini sejatinya adalah reinkarnasi dari Amazon Astro, robot asisten rumah tangga yang pertama kali dipamerkan pada 2021 namun gagal memikat konsumen dan sempat disuntik mati versi korporatnya tahun lalu. Pada varian terbarunya, Amazon melucuti layar ramah beranimasi sepasang mata bulat imut, lalu menggantinya dengan tiang sirene berkedip merah dan kamera periskop beresolusi 4K. Robot ini dirancang untuk berpatroli secara otomatis menelusuri rute yang telah diprogram, atau meluncur ke lokasi tertentu begitu sensor alarm Ring lainnya berbunyi, sembari memproyeksikan lingkaran cahaya biru ke langit-langit gedung agar posisinya mudah ditemukan di kegelapan.

![Robot patroli keamanan Amazon Ring Rover Cam dengan kamera periskop 4K dan lampu sirene berpatroli di lantai gedung](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/ringrover1_31dee3.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=1200)

Di atas brosur pemasaran yang mengkilap, Ring Rover Cam terdengar seperti penjaga keamanan masa depan yang gagah. Namun begitu kita menengok spesifikasi teknis dan keterbatasan fisiknya, ilusi kecanggihan itu langsung runtuh seketika. Robot ini cuma dibekali baterai yang mampu bertahan selama tiga puluh menit sebelum harus merayap kembali ke stasiun pengisian daya. Lebih menggelikan lagi, dengan konstruksi dua roda karetnya, robot satpam seharga belasan juta rupiah ini mutlak hanya bisa beroperasi di atas satu lantai yang rata mulus. Begitu berhadapan dengan selembar karpet tebal, kabel berseliweran di lantai gudang, atau undakan tangga setinggi lima sentimeter saja, mesin patroli berteknologi tinggi ini langsung mati kutu tak berdaya. Alih-alih mengejar penyusup, ia lebih berpotensi tersangkut kaki meja atau terjungkal saat mencoba melewati ambang pintu toilet.

Ada aroma ironi yang begitu pekat dari cara Amazon memonetisasi rasa takut masyarakat urban. Kehadiran kamera berjalan yang terus-menerus menyiarkan rekaman video ke server cloud bukanlah solusi keamanan fisik yang hakiki, melainkan pintu gerbang pengawasan massal yang memprivatisasi privasi ruang privat kita. Konsumen dipaksa membayar mahal untuk membeli unit perangkat kerasnya, lalu setiap bulan diperas lagi lewat tagihan langganan penyimpanan rekaman video digital. Pola menjebak pengguna ke dalam rantai pasak ketergantungan berbayar ini bukanlah barang baru di industri teknologi, persis seperti muslihat cerdik saat [Apple mematok tarif langganan fitur AI](/apple-patok-tarif-ai-delapan-ratus-ribu-di-logic-pro-saat-janji) setelah mengumbar janji manis inovasi modern yang ujung-ujungnya menagih dompet pengguna setiap pergantian bulan.

Bagi pemilik ruko atau manajer gudang di kota-kota kita, mengandalkan tabung beroda untuk ronda malam jelas terdengar seperti lelucon mahal. Menjaga aset dari niat jahat maling sejak ratusan tahun lalu selalu bertumpu pada pencegahan fisik yang nyata: teralis besi yang kokoh, anjing penjaga yang sigap, atau sekadar kopi hitam panas dan sebungkus rokok untuk bapak petugas hansip di pos ronda terdekat. Menggantungkan nasib keamanan tempat usaha pada robot mungil yang rentan mogok sama naifnya dengan sikap masyarakat modern yang menganggap semua problem hidup bisa tuntas hanya dengan mempercayai [gimmick modern berkedok inovasi cloud terpusat](/faa-baru-pensiunkan-disket-liuk-bukti-sistem-kuno-lebih-waras) yang terbukti rapuh saat diuji realitas lapangan.

Menggelontorkan lima belas juta rupiah demi menaruh tong sampah bermata kamera yang mondar-mandir di ruang tamu mungkin bisa membuat Anda merasa keren di depan tetangga arisan. Namun ingat, pencuri mana pun yang punya akal sehat tidak akan gentar melihat lampu biru berkedip di langit-langit; mereka cukup melempar selembar selimut tebal ke atas robot malang itu, lalu menggotongnya keluar bersama barang berharga lainnya tanpa perlu repot berlari.`
  },
  {
    title: "Valve Pajang Data FPS Riil di Toko Steam Tamparan Keras untuk Developer Pemalas",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Steam Deck", "Valve", "PC Gaming", "Frame Rate", "Optimasi Game", "Industri Game", "Steam"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/ayjXuyTNyLQvfidxvnbpF-1920-80.jpg",
    imageAlt: "Tampilan antarmuka konsol genggam Valve Steam Deck yang menampilkan visualisasi data performa frame rate di etalase toko Steam",
    sourceUrl: "https://www.pcgamer.com/hardware/handheld-gaming-pcs/steam-now-lets-you-see-exactly-what-frame-rate-you-should-get-in-games-using-a-steam-deck/",
    excerpt: "Valve resmi meluncurkan pembaruan etalase Steam yang menampilkan data rata-rata frame rate riil bagi pemilik konsol genggam Steam Deck. Kebijakan radikal ini sukses menampar para pengembang game malas yang selama ini gemar memoles klaim status verifikasi hijau palsu padahal produknya tersengal-sengal di bawah tiga puluh frame per detik.",
    content: `Membeli game PC di era modern sering kali terasa seperti membeli kucing dalam karung berlapis plastik hitam. Trailer promosi yang dipamerkan di YouTube selalu menampilkan rekaman gameplay sinematis enam puluh frame per detik yang mulus tanpa cela, lengkap dengan efek pencahayaan fotorealistis yang menyihir mata. Namun begitu transaksi kartu kredit berhasil dan tombol mainkan ditekan, realitas pahit langsung menampar wajah para gamer: menu utama mendadak freeze, animasi patah-patah seperti tayangan salindia presentasi kantor, dan suhu perangkat meroket panas hingga kipas pendingin melolong kencang. Industri game selama bertahun-tahun hidup nyaman di balik kabut dusta pemasaran ini, membiarkan pembeli meraba-raba apakah uang ratusan ribu rupiah yang baru mereka keluarkan sepadan dengan kinerja teknis yang didapat.

Kondisi buram tersebut akhirnya dirobek terang-terangan oleh Gabe Newell dan pasukannya. Sebagaimana dicatat dalam laporan ulasan teknis PC Gamer, Valve resmi memperbarui antarmuka etalase toko Steam dengan menyematkan data rata-rata frame rate riil beserta grafik histogram performa langsung di halaman informasi kompatibilitas Steam Deck. Fitur ini tidak hanya berlaku untuk judul yang menyandang status terverifikasi resmi, melainkan mencakup ribuan game yang sudah dimainkan oleh jutaan pengguna. Data tersebut dipanen langsung dari telemetri sesi permainan para gamer yang secara sukarela berbagi catatan performa. Kini, sebelum calon pembeli menekan tombol beli untuk game sekelas Elden Ring, mereka bisa melihat fakta tanpa sensor: perangkat Steam Deck OLED rata-rata menghasilkan 42 frame per detik, sementara varian layar LCD bertengger di kisaran 38 frame per detik dengan sebaran grafis yang menunjukkan mayoritas pemain terpaksa mengunci angka di 30 frame per detik demi menghindari lonjakan stutter yang bikin pusing kepala.

![Tampilan antarmuka konsol genggam Valve Steam Deck yang menampilkan visualisasi data performa frame rate di etalase toko Steam](https://cdn.mos.cms.futurecdn.net/ayjXuyTNyLQvfidxvnbpF-1920-80.jpg)

Langkah berani Valve ini praktis menjadi tamparan telak bagi reputasi studio pengembang dan penerbit papan atas yang hobi jalan pintas. Selama ini, para eksekutif industri kerap berlindung di balik stempel centang hijau bertuliskan status kompatibel untuk meyakinkan calon pelanggan. Padahal di dunia nyata, label ramah konsol genggam itu kerap kali cuma formalitas asal jalan: teks dialog terbaca dan tombol stik berfungsi, perkara framerate anjlok ke angka belasan saat adegan ledakan itu urusan belakangan. Kebiasaan meremehkan optimasi teknis ini sudah menjadi penyakit kronis industri modern yang lebih memprioritaskan jadwal rilis rapat daripada kestabilan kode, mirip dengan kecerobohan para produsen peranti keras saat [pembaruan driver grafis justru merusak daya tahan komponen](/driver-amd-gerus-kesehatan-ssd-satu-persen-tiap-bulan-bukti) hanya karena pengujian di laboratorium dilakukan secara terburu-buru.

Bagi komunitas gamer di tanah air yang harus bekerja keras menyisihkan sisa gaji bulanan demi membeli game idaman di Steam, transparansi data semacam ini adalah anugerah yang luar biasa. Di tengah tren perangkat genggam gaming yang kian menjamur di pasaran kota-kota besar, gamer tidak perlu lagi menghabiskan waktu berjam-jam menonton ulasan komparasi di forum internet hanya demi memastikan apakah uang mereka akan berakhir menjadi kekecewaan. Kejujuran data ini sekaligus merontokkan klaim sepihak para petinggi korporasi game yang kerap menganggap remeh disparitas performa antarmuka perangkat keras, persis seperti keangkuhan ketika [bos Take-Two menyamakan pengalaman bermain di konsol dan PC](/bos-take-two-sebut-pengalaman-pc-dan-konsol-sama-padahal-gta-6) sementara para pemain di lapangan tahu persis betapa beratnya perjuangan meracik konfigurasi grafis agar tidak mogok di tengah jalan.

Pada akhirnya, apa yang dilakukan Valve membuktikan bahwa melindungi hak konsumen sejatinya tidak membutuhkan undang-undang perlindungan yang rumit atau regulasi berbelit-belit; cukup buka data telemetri apa adanya di etalase toko dan biarkan pasar yang menilai. Ketika para pengembang game dipaksa telanjang di depan angka statistik yang jujur, mereka tidak punya pilihan lain selain mulai bekerja keras mengoptimasi kode permainan mereka sejak hari pertama. Jika developer masih nekat merilis game setengah matang dengan performa tersengal-sengal di bawah tiga puluh frame per detik, jangan kaget kalau grafik penjualan mereka di Steam langsung terjun bebas secepat angka drop rate koneksi internet gratisan di warung kopi.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 21:00 WIB)");
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
  console.log(`🎉 Batch Publikasi 21:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261110-2100.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
