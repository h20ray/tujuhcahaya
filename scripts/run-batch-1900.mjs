import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

const articles = [
  {
    title: "Hak Memperbaiki dan Arsitektur Modular: Mengapa Laptop Bongkar-Pasang Jadi Simbol Perlawanan Planned Obsolescence",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Hardware", "Right to Repair", "Laptop", "Open Source", "Gadget"],
    imageUrl: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Papan sirkuit motherboard dan komponen modular perangkat keras laptop",
    excerpt: "RAM dan SSD yang disolder mati bukan demi estetika bodi tipis, melainkan strategi mengunci siklus belanja konsumen. Gerakan laptop modular kini menagih kedaulatan kepemilikan perangkat keras.",
    content: `Membeli laptop baru sepuluh tahun lalu adalah investasi jangka panjang yang menyenangkan. Ketika kapasitas penyimpanan terasa sempit atau aplikasi menuntut memori lebih lapang, kita cukup memutar empat baut di sasis bawah, membeli keping RAM DDR atau SSD baru di mangga dua, lalu memasangnya sendiri dalam waktu lima belas menit. Laptop lama langsung kembali bertenaga untuk menemani kerja lima tahun berikutnya.

Bandingkan pengalaman tersebut dengan produk unggulan yang membanjiri rak toko elektronik hari ini. Bodi laptop memang semakin ramping dengan bobot kurang dari satu kilogram. Namun, estetika minimalis tersebut dibayar mahal dengan pengorbanan terbesar: hilangnya hak pengguna untuk memperbaiki barang milik sendiri. Memori RAM, chip penyimpanan flash SSD, hingga modul Wi-Fi kini hampir seluruhnya disolder mati ke papan induk (*motherboard*).

## Jebakan Planned Obsolescence Berbalut Desain Minimalis

Alasan klasik yang kerap didengungkan divisi pemasaran korporasi adalah demi efisiensi ketebalan sasis dan optimalisasi konsumsi daya baterai. Walaupun ada benarnya dari sudut pandang rekayasa termal ekstrem, motivasi ekonomi di baliknya jauh lebih dingin: *planned obsolescence* atau keusangan terencana.

Ketika satu komponen kecil seperti modul SSD mengalami kerusakan blok baca-tulis setelah tiga atau empat tahun pemakaian intensif, laptop seharga dua puluh juta rupiah langsung lumpuh total. Pihak pusat servis resmi biasanya menolak perbaikan parsial dan menyodorkan estimasi biaya penggantian seluruh papan induk yang harganya mencapai 70 hingga 80 persen dari harga unit baru. Pilihan logis bagi konsumen akhirnya terpaksa membeli laptop baru, mempercepat siklus konsumsi dan melipatgandakan timbunan limbah elektronik (*e-waste*) di tempat pembuangan akhir.

Strategi penguncian ini memicu tiga dampak sistemik:

* **Monopoli Biaya Servis**: Ketiadaan skema perbaikan modular membuat bengkel servis independen lokal gulung tikar karena tidak memiliki akses ke skema sirkuit atau suku cadang resmi.
* **Perampasan Otonomi Pembeli**: Anda membayar penuh untuk memiliki perangkat keras tersebut, namun kendali atas kelangsungan hidup perangkat tetap digenggam erat oleh produsen.
* **Praktek Markup Spek Tak Wajar**: Vendor laptop dengan leluasa mematok selisih harga hingga empat juta rupiah hanya untuk lompatan kapasitas RAM dari 16GB ke 32GB, padahal harga keping memori mentah di pasar komponen tidak sampai sepertiganya.

## Kebangkitan Desain Modular dan Kemenangan Right to Repair

Gerakan perlawanan terhadap budaya buang-beli ini akhirnya menemukan momentum nyata. Keberhasilan pionir seperti Framework Laptop—yang merancang laptop dengan port ekspansi modular lepas-pasang, papan ketik yang bisa diganti mandiri, serta kartu ekspansi USB-C fleksibel—membuktikan bahwa laptop berdaya tahan tinggi dan mudah dibongkar tetap bisa tampil ramping serta bertenaga.

Di ranah regulasi internasional, Uni Eropa dan sejumlah negara bagian Amerika Serikat mulai mengesahkan undang-undang hak perbaikan (*Right to Repair*). Kebijakan ini mewajibkan pabrikan menyediakan suku cadang asli, buku panduan reparasi terbuka, serta melarang praktik *parts pairing*—kode perangkat lunak yang sengaja memblokir fungsi komponen pengganti jika tidak diotorisasi oleh server pabrikan.

Bahkan Apple yang selama bertahun-tahun menjadi simbol desain tertutup akhirnya terpaksa melonggarkan program *Self Service Repair*, meski birokrasi dan biaya sewa peralatannya masih menuai kritik dari para penggiat perbaikan mandiri.

## Mengembalikan Kedaulatan Konsumen

Sebuah perangkat komputasi personal seharusnya melayani manusia, bukan membelenggu pemiliknya dalam ketergantungan seumur hidup pada ekosistem suku cadang tertutup. Menuntut keberadaan komponen modular yang mudah dibongkar-pasang bukan tanda ketinggalan zaman, melainkan tuntutan etis demi kedaulatan konsumen dan keberlanjutan bumi.

Ketika kita memilih mendukung perangkat keras yang menghargai hak perbaikan, kita sedang menolak masa depan di mana barang kepemilikan pribadi hanya disewa sementara sebelum dicampakkan ke tong sampah industri.`
  },
  {
    title: "Krisis Pelestarian Game Klasik: Ketika Emulasi Komunitas Jadi Benteng Terakhir Penjaga Sejarah Interaktif",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Emulasi", "Pelestarian Game", "Retro Gaming", "Sejarah Game", "Nintendo"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Koleksi konsol game klasik dan kaset game retro di atas meja studio",
    excerpt: "Sebanyak 87 persen video game klasik sebelum 2010 kini lenyap dari pasar resmi. Ketika penerbit menutup toko digital dan memburu arsip ROM, emulasi komunitas relawan menjadi penjaga warisan budaya.",
    content: `Jika Anda ingin membaca novel klasik terbitan tahun 1920 atau menonton kembali film bisu era awal abad ke-20, Anda dapat dengan mudah meminjamnya di perpustakaan nasional atau mengakses arsip publik tanpa melanggar hukum. Karya sastra dan sinema diakui secara luas sebagai warisan budaya peradaban yang berhak dilindungi dan dipelajari oleh generasi mendatang.

Sayangnya, perlakuan terhormat tersebut belum berlaku bagi video game, medium seni paling interaktif di abad modern. Laporan komprehensif yang dirilis oleh Video Game History Foundation (VGHF) bersama Software Preservation Network mengungkap fakta mencengangkan: sebanyak 87 persen video game klasik yang dirilis sebelum tahun 2010 di Amerika Serikat kini berada dalam status terancam punah (*critically endangered*). Hanya 13 persen yang masih dapat diakses dan dibeli secara legal di toko digital modern.

## Penutupan Toko Digital dan Kematian Arsip Komersial

Krisis aksesibilitas ini semakin parah seiring maraknya penutupan etalase digital oleh pemilik platform. Ketika Nintendo mematikan layanan eShop untuk konsol Nintendo 3DS dan Wii U, serta Sony yang nyaris menutup PlayStation Store untuk PS3 dan PS Vita, ribuan judul game eksklusif yang hanya dirilis dalam format digital lenyap dalam semalam.

Penerbit raksasa kerap beralasan bahwa mempertahankan server toko digital lama tidak lagi menguntungkan secara bisnis (*cost of maintenance*). Namun, pada saat yang sama, tim legal korporasi terus melancarkan gugatan hukum agresif terhadap situs repositori ROM dan pengembang emulator pihak ketiga.

Dampaknya menciptakan jurang ironis:

* **Monopoli Lisensi yang Terbengkalai**: Hak cipta ratusan game legendaris sering kali terkunci dalam sengketa kepemilikan rumit antar-perusahaan yang sudah bangkrut (*abandonware*), sehingga tidak ada pihak yang bisa merilisnya kembali secara resmi.
* **Harga Koleksi Fisik yang Menggila**: Karena ketiadaan versi digital legal, para penikmat sejarah game terpaksa berburu kaset fisik bekas di pasar daring yang harganya telah digoreng spekulan hingga belasan juta rupiah.
* **Matinya Konteks Sejarah Bagi Peneliti**: Akademisi dan jurnalis game kesulitan meneliti evolusi desain mekanika permainan masa lalu karena perangkat keras aslinya perlahan rusak termakan usia (*capacitor leakage* dan degradasi media optik).

## Jasa Heroik Emulator dan Komunitas Pelestari

Di tengah kepasifan industri, benteng pertahanan paling kokoh justru dibangun oleh komunitas independen dan pengembang perangkat lunak sumber terbuka (*open source*). Proyek rekayasa balik (*reverse engineering*) seperti RPCS3, Dolphin, PCSX2, RetroArch, hingga inisiatif pelestarian perangkat keras FPGA seperti MiSTer FPGA bekerja tanpa lelah mendokumentasikan setiap instruksi mikroprosesor konsol jadul.

Komunitas ini tidak bekerja demi mencari keuntungan materiil. Mereka adalah sekelompok teknisi, sejarawan amatir, dan gamer berdedikasi yang menyadari bahwa tanpa upaya dokumentasi mandiri, memori interaktif dari dekade 1980-an hingga 2000-an akan hilang tanpa jejak layaknya film bisu era awal Hollywood yang musnah terbakar.

Emulasi bukan sekadar sarana untuk bermain game gratis. Dalam kacamata ilmu komputer dan preservasi budaya, emulasi adalah bentuk preservasi fungsional: memastikan bahwa kode logika dan respon interaktivitas sebuah karya seni dapat terus berjalan di arsitektur komputasi masa depan, terlepas dari punahnya silikon fisik aslinya.

## Menyelamatkan Sejarah Sebelum Terlambat

Menyamakan seluruh aktivitas emulasi dan pengarsipan game dengan pembajakan komersial adalah cara pandang picik yang merugikan peradaban. Jika penerbit game menolak menyediakan jalur pembelian resmi yang masuk akal, mereka tidak berhak menghalangi upaya institusi pendidikan dan komunitas sukarelawan untuk menjaga artefak kebudayaan tersebut tetap bernyawa.

Video game telah membentuk lanskap estetika dan memori jutaan manusia di seluruh dunia. Merawat ketersediaannya untuk masa depan bukan tindakan kriminal, melainkan penghormatan paling mendasar terhadap para kreator yang telah meletakkan batu bata pertama bagi industri kreatif interaktif hari ini.`
  },
  {
    title: "Jerat Phantom Vibration Syndrome: Mengapa Paha Kita Kerap Merasa Ponsel Bergetar Padahal Hening?",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Psikologi", "Smartphone", "Kesehatan Mental", "Kebiasaan", "Gaya Hidup"],
    imageUrl: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang memegang smartphone di tangan dalam suasana hening dan tenang",
    excerpt: "Merogoh saku celana karena merasa ada getaran masuk, padahal layar smartphone bersih tanpa notifikasi. Mengapa otak kita terjebak dalam halusinasi getaran sensorik di tengah kepungan notifikasi?",
    content: `Anda sedang berdiri menunggu antrean kopi atau duduk di bangku kereta komuter, ketika tiba-tiba ada getaran halus terasa di paha kanan Anda. Secara refleks, tangan Anda langsung merogoh saku celana, mengeluarkan smartphone, dan menatap layarnya penuh antisipasi. Namun, tidak ada panggilan masuk, tidak ada pesan WhatsApp baru, dan tidak ada notifikasi aplikasi yang menyala. Smartphone Anda sedang hening sempurna.

Sensasi getaran semu ini bukan ilusi mistis atau kerusakan saraf tepi. Fenomena tersebut dikenal dalam literatur psikologi perilaku sebagai *Phantom Vibration Syndrome* (PVS) atau sindrom getaran hantu. Penelitian menunjukkan bahwa lebih dari 80 hingga 90 persen pengguna smartphone di perkotaan pernah mengalami ilusi taktil ini setidaknya seminggu sekali.

## Mekanisme Sensorik: Mengapa Otak Mengantisipasi Getaran?

Untuk memahami bagaimana getaran palsu ini terjadi, kita perlu melihat bagaimana otak manusia memproses rangsangan sensasi fisik di bawah teori deteksi sinyal (*signal detection theory*). Otak kita terus-menerus memilah ribuan input sensorik yang masuk dari saraf kulit: gesekan kain celana jins, kontraksi kecil otot paha, perubahan suhu, hingga getaran langkah kaki saat berjalan.

Ketika kita hidup dalam kebiasaan memeriksa ponsel puluhan kali setiap jam, sirkuit saraf otak menggeser nilai ambang batas responsnya. Otak masuk ke dalam status antisipasi kronis (*hyper-vigilance*). Dalam kondisi siaga tinggi ini, otak lebih memilih membuat kesalahan positif palsu (*false positive*)—mengira gesekan kain sebagai getaran notifikasi penting—daripada menanggung risiko melewatkan panggilan darurat dari atasan atau klien.

Tiga faktor pemicu yang memperparah ilusi getaran ini meliputi:

* **Kecemasan FOMO (*Fear of Missing Out*)**: Beban mental akibat keharusan membalas pesan kerja atau memantau linimasa media sosial membuat sistem saraf simpatik kita selalu berada dalam mode tegang.
* **Kondisioning Pavlovian**: Bunyi denting dan dengung getaran ponsel telah dipasangkan dengan suntikan dopamin instan di otak. Setiap kali ponsel bergetar, kita berharap ada hal baru yang menarik untuk dilihat.
* **Perluasan Persepsi Tubuh**: Smartphone yang diletakkan di saku celana selama belasan jam sehari perlahan diintegrasikan oleh peta sensorik otak (*homunculus cortex*) sebagai bagian organik dari tubuh kita sendiri.

## Dampak Kelelahan Kognitif Bawah Sadar

Meskipun sindrom getaran hantu umumnya tidak berbahaya secara fisik, kemunculannya yang berulang adalah barometer nyata dari kelelahan kognitif bawah sadar. Setiap kali kita merogoh saku untuk memeriksa notifikasi palsu, alur konsentrasi otak terpotong.

Dibutuhkan waktu antara lima hingga lima belas menit bagi pikiran untuk kembali fokus ke tugas utama setelah mengalami interupsi. Jika dalam satu hari kerja Anda mengalami lima kali getaran palsu disertai sepuluh kali pemeriksaan layar tanpa tujuan, puluhan menit produktivitas dan energi mental terbuang sia-sia hanya untuk melayani kecemasan algoritma.

## Memutus Pola dan Menenangkan Saraf Sensorik

Mengembalikan ketenangan indera taktil kita tidak memerlukan langkah ekstrem seperti membuang smartphone ke tempat sampah. Langkah-langkah penyesuaian sederhana berikut terbukti efektif memulihkan kepekaan saraf:

1. **Ubah Posisi Simpan Ponsel**: Jangan selalu menaruh smartphone di kantong saku celana yang sama. Pindahkan ponsel ke dalam tas ransel, tas selempang, atau letakkan di atas meja saat sedang bekerja. Memutus kontak fisik langsung dengan kulit memprogram ulang ekspektasi taktil otak.
2. **Matikan Fitur Getar untuk Notifikasi Non-Penting**: Evaluasi ulang pengaturan aplikasi Anda. Batasi getaran hanya untuk panggilan telepon kontak keluarga terdekat. Matikan seluruh getaran untuk grup obrolan santai, email promosi, dan aplikasi belanja online.
3. **Jadwalkan Waktu Bebas Layar Terencana**: Berikan jeda satu jam sebelum tidur dan satu jam setelah bangun pagi di mana ponsel berada di luar jangkauan tangan. Biarkan otak menikmati keheningan sensorik tanpa beban antisipasi digital.

Smartphone adalah perkakas kerja yang semestinya tunduk pada kenyamanan hidup kita, bukan sumber kepanikan bawah sadar yang mendikte setiap kedipan mata dan sentakan saraf kita di kehidupan sehari-hari.`
  }
];

async function main() {
  console.log("=== MEMULAI BATCH AUTO-PUBLISH TUJUHCAHAYA (JADWAL 19:00 WIB / TIAP 30 MENIT) ===");
  const results = [];

  for (let i = 0; i < articles.length; i++) {
    const art = articles[i];
    console.log(`\n--- [${i + 1}/${articles.length}] Memvalidasi 7C Editorial Guard: "${art.title}" ---`);
    
    // 1. Audit
    const audit = validate7cEditorial(art.title, art.content, art.excerpt);
    console.log(`Audit Score: ${audit.score}/100 | Valid: ${audit.valid}`);
    if (!audit.valid) {
      console.error("Ditolak oleh 7C Editorial Guard:", audit.errors);
      process.exit(1);
    }
    if (audit.warnings.length > 0) console.log("Warnings:", audit.warnings);
    if (audit.suggestions.length > 0) console.log("Suggestions:", audit.suggestions);

    // 2. Publish (Local SQLite & Remote Production Plesk)
    console.log(`Mempublikasikan ke Local DB & Remote Production...`);
    const res = await autoPublishPost(art, { remote: true });
    console.log(`Hasil Publikasi:`, JSON.stringify({
      slug: res.slug,
      status: res.status,
      score: res.score,
      dbSaved: res.dbSaved,
      remotePublished: res.remotePublished,
      url: res.url
    }, null, 2));
    results.push(res);
  }

  console.log("\n=== SELURUH BATCH 19:00 BERHASIL DIPUBLIKASIKAN ===");
}

main().catch(err => {
  console.error("Batch Error:", err);
  process.exit(1);
});
