import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

const articles = [
  {
    title: "Kerapuhan Rantai Pasok Open Source: Mengapa Satu Baris Kode Jahat di Repositori Publik Bisa Melumpuhkan Dunia",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Open Source", "Cybersecurity", "Software Engineering", "npm", "Developer"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Matriks kode biner dan enkripsi siber pada layar komputer pengembang",
    excerpt: "Ratusan ribu aplikasi modern bersandar pada tumpukan pustaka open source tanpa audit independen. Celah keamanan di satu dependensi remeh kini menjelma senjata mematikan bagi pelaku kejahatan siber.",
    content: `Menjalankan perintah \`npm install\` atau \`pip install\` adalah rutinitas yang diulang puluhan kali setiap hari oleh pengembang perangkat lunak di seluruh penjuru dunia. Dalam hitungan detik, terminal komputer mengunduh ratusan pustaka eksternal yang langsung disematkan ke dalam basis kode proyek. Praktik ini memangkas waktu kerja secara spektakuler, memungkinkan startup kecil membangun produk kelas enterprise hanya dengan segelintir insinyur.

Namun, di balik kenyamanan modular tersebut tersimpan kerentanan sistemik yang sangat rapuh: ketergantungan buta pada integritas rantai pasok perangkat lunak (*software supply chain*). Ketika pengembang memasang satu pustaka utilitas sederhana, mereka sejatinya sedang mengundang ratusan kode asing yang ditulis oleh orang tak dikenal untuk berjalan langsung di server produksi mereka.

## Ilusi Kepercayaan pada Repositori Publik

Ekosistem sumber terbuka (*open source*) dibangun di atas asas itikad baik dan kolaborasi sukarela. Mayoritas pustaka populer yang menopang perbankan, platform e-commerce, hingga infrastruktur rumah sakit dikelola oleh relawan di waktu luang tanpa kompensasi finansial sepadan.

Kesenjangan struktural ini dimanfaatkan secara agresif oleh para aktor ancaman melalui berbagai taktik manipulatif:

* **Typosquatting Cerdik**: Peretas mendaftarkan nama paket yang sengaja dibuat mirip dengan pustaka populer, hanya berbeda satu huruf tipis, untuk menjebak developer yang terburu-buru mengetik di terminal.
* **Pembajakan Akun Maintainer**: Pelaku kejahatan mengincar akun pengelola pustaka yang tidak mengaktifkan otentikasi dua faktor, lalu menyusupkan skrip pencuri kredensial ke dalam pembaruan versi minor (*patch update*).
* **Dependensi Terselubung (*Transitive Dependencies*)**: Sebuah aplikasi mungkin hanya mengimpor sepuluh paket utama, tetapi paket-paket tersebut secara berantai menarik ratusan paket turunan yang mustahil diaudit secara manual oleh tim pengembang.

## Serangan Nyata yang Mengguncang Industri

Tragedi keamanan seperti insiden \`left-pad\` yang melumpuhkan ribuan situs web dunia, hingga pembajakan pustaka kompresi \`xz Utils\` baru-baru ini, membuktikan bahwa satu aktor jahat yang sabar dapat menyusupkan pintu belakang (*backdoor*) ke fondasi komputasi global tanpa memicu kecurigaan selama berbulan-bulan.

Kode berbahaya modern tidak lagi sekadar merusak sistem secara kasar. Skrip jahat kini dirancang senyap: memindai kunci API, token AWS, dan variabel rahasia di lingkungan server (*environment variables*), lalu mengirimkannya ke server komando peretas sebelum mengeksekusi fungsi aslinya secara normal agar tidak dicurigai.

## Membangun Pertahanan Nol-Kepercayaan (*Zero Trust*)

Menghentikan adopsi open source tentu bukan solusi realistis. Kuncinya adalah mengubah paradigma kerja dari kepercayaan pasif menjadi verifikasi aktif tanpa kompromi.

Tim rekayasa perangkat lunak harus mulai menerapkan penguncian versi secara ketat (*dependency pinning*), mengaudit berkas hash integritas, serta menerapkan pemindaian otomatis berbasis analisis komposisi perangkat lunak (*Software Composition Analysis* / SCA) di dalam alur pipa CI/CD. 

Selain itu, industri teknologi global harus mulai berinvestasi nyata dalam mendanai keamanan proyek-proyek open source kritis. Kedaulatan keamanan digital tidak bisa terus-menerus disandarkan pada kebaikan hati sukarelawan yang kelelahan.`
  },
  {
    title: "Evolusi Battle Pass dan Jebakan FOMO: Ketika Bermain Game Terdistorsi Menjadi Beban Kerja Shift Malam",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Industri Game", "Battle Pass", "Monetisasi", "Gamer", "Live Service"],
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pemain video game memegang kontroler konsol di ruangan bernuansa lampu neon gaming",
    excerpt: "Sistem Battle Pass yang awalnya dipuji sebagai alternatif adil bagi loot box kini berevolusi menjadi instrumen retensi paksa. Menyalakan game setelah lelah bekerja kini terasa seperti mengisi daftar absensi shift malam kedua.",
    content: `Setelah menyelesaikan jam kerja kantor yang padat dan melelahkan, menyalakan konsol atau PC gaming semestinya menjadi sarana rekreasi untuk melepas penat. Kita ingin larut dalam tantangan seru bersama kawan-kawan atau menikmati petualangan interaktif tanpa tekanan jadwal. 

Namun, perhatikan apa yang terjadi saat Anda membuka judul game daring modern hari ini. Bukannya disambut layar petualangan yang memikat, pemain langsung dihujani rentetan papan pemberitahuan: hitung mundur masa berlaku musim, daftar misi harian (*daily quests*) yang harus diselesaikan sebelum jam berganti, serta pengingat progres level *Battle Pass* yang tertinggal.

Alih-alih menyegarkan pikiran, bermain game kini kerap memicu kecemasan baru yang terasa sangat mirip dengan beban kerja kantor: mengejar target *Key Performance Indicator* (KPI) di shift malam kedua.

## Dari Solusi Loot Box Menjadi Pabrik Rutinitas Paksa

Ketika sistem kotak undian acak (*loot box*) mulai dihantam regulasi perjudian di berbagai negara Eropa, para penerbit game multinasional memuji kehadiran Battle Pass sebagai model monetisasi yang transparan dan ramah konsumen. Konsepnya sekilas tampak adil: pemain membayar sejumlah biaya di awal musim, lalu dijanjikan membuka deretan kosmetik eksklusif dengan menyelesaikan tingkatan level permainan.

Namun, model bisnis ini perlahan dimanipulasi melalui rekayasa psikologi perilaku (*behavioral psychology*) yang agresif:

* **Eksploitasi Rasa Takut Kehilangan (*FOMO*)**: Hadiah dalam Battle Pass hampir selalu dirancang berstatus eksklusif musiman. Jika pemain gagal mencapai level maksimum sebelum musim berganti, hadiah tersebut akan hangus selamanya tanpa opsi pembelian ulang.
* **Sunk Cost Fallacy**: Begitu pemain mengeluarkan uang sepuluh atau dua puluh dolar untuk membeli tiket musiman, mereka merasa terikat secara psikologis untuk terus login setiap hari agar uang yang dikeluarkan tidak sia-sia.
* **Misi Absurd Penguras Waktu**: Alih-alih membiarkan pemain menikmati gaya bermain bebas, tugas musiman memaksa pengguna menggunakan senjata tertentu, memainkan mode yang tidak disukai, atau mengulang grinding repetitif selama berjam-jam.

## Ketika Kesenangan Murni Disingkirkan oleh Algoritma Retensi

Pola monetisasi ini mengubah tujuan utama desain permainan video. Bagi produsen game berbasis layanan (*live service*), kesenangan pemain bukanlah metrik keberhasilan utama. Metrik terpenting yang dipantau dewan direksi adalah angka pengguna aktif harian (*Daily Active Users* / DAU) dan waktu keterikatan layar (*engagement time*).

Pemain dimanipulasi agar merasa bersalah jika melewatkan satu malam saja tanpa bermain. Akibatnya, hubungan emosional antara pemain dan karya seni game menjadi toksik. Banyak gamer tetap memaksakan diri bermain hingga larut malam bukan karena mereka menikmati permainannya, melainkan murni terdorong oleh kepanikan menghindari hangusnya poin musiman yang telah mereka bayar.

## Mengambil Kembali Kedaulatan Waktu Luang

Waktu luang manusia modern adalah komoditas yang sangat berharga dan terbatas. Menghabiskannya di depan layar hiburan interaktif semestinya menjadi keputusan yang memicu kebahagiaan sejati, bukan keterikatan semu akibat rekayasa psikologis pengembang aplikasi.

Komunitas gamer kini mulai menunjukkan kejenuhan nyata terhadap ekosistem musiman yang melelahkan ini. Kebangkitan popularitas game naratif pemain tunggal (*single-player*) yang selesai dalam satu paket pembelian tanpa koneksi internet membuktikan bahwa kerinduan terhadap esensi murni bermain game masih sangat hidup.

Sebuah game berkualitas seharusnya menghormati waktu pemainnya. Ketika sebuah hiburan mulai menuntut komitmen kehadiran layaknya kantor pemberi upah, saat itulah kita harus berani menekan tombol keluar dan mematikan daya.`
  },
  {
    title: "Jerat Dopamin Instan Video Vertikal: Mengapa Otak Kita Semakin Gagap Membaca Buku dan Berfokus Panjang",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Kesehatan Mental", "Neurologi", "Produktivitas", "Smartphone", "Fokus"],
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang sedang membaca buku di samping smartphone yang menyala di atas meja kayu",
    excerpt: "Rangsangan mikro-stimulus dari geseran video berdurasi lima belas detik merombak sirkuit penghargaan di otak. Kemampuan kita untuk membaca literatur panjang dan mempertahankan konsentrasi mendalam kini runtuh perlahan.",
    content: `Banyak orang modern belakangan ini mengeluhkan gejala serupa saat mencoba membaca buku fisik atau artikel panjang: setelah baru membuka dua halaman pertama, pikiran mendadak gelisah, bola mata sulit bertahan di satu baris paragraf, dan jari tangan secara otomatis meraba layar smartphone yang tergeletak di samping meja. Kita merasa seperti kehilangan stamina mental yang dulu biasa kita miliki saat menghabiskan novel beratus-ratus halaman tanpa jeda.

Penurunan kapasitas fokus ini bukanlah tanda penuaan dini atau kelemahan karakter personal. Fenomena ini adalah konsekuensi biologis langsung dari adaptasi saraf (*neuroplasticity*) otak manusia yang setiap hari dibombardir oleh konsumsi video vertikal berdurasi singkat di platform media sosial.

## Mekanisme Pembajakan Sirkuit Dopamin

Sistem penghargaan (*reward system*) di otak manusia berevolusi untuk mendorong tindakan yang mendukung kelangsungan hidup dengan melepaskan neurotransmiter dopamin ketika kita menyelesaikan tugas yang bermakna. Pada masa lalu, pelepasan dopamin membutuhkan investasi usaha dan waktu nyata—seperti menuntaskan bacaan ilmiah, belajar memainkan instrumen musik, atau menyelesaikan karya kerajinan tangan.

Format video vertikal pendek memotong siklus alami tersebut dan menggantikannya dengan mekanisme rangsangan kilat tanpa jeda:

* **Micro-Reward Tanpa Usaha**: Setiap kali jari menggeser layar (*swipe*), otak disuguhi kejutan visual, nada musik yang memikat, atau lelucon instan dalam tempo kurang dari lima belas detik.
* **Jadwal Penguatan Acak (*Variable Reward Schedule*)**: Mirip dengan prinsip mesin judi slot di kasino, pengguna tidak pernah tahu konten apa yang akan muncul berikutnya. Ketidakpastian inilah yang memicu lonjakan dopamin terbesar dan mengunci perilaku scrolling tanpa henti.
* **Fragmentasi Rentang Perhatian**: Otak yang terbiasa menerima stimulus baru setiap sepuluh detik kehilangan toleransi terhadap rasa bosan (*boredom tolerance*). Aktivitas linier yang berjalan tenang langsung dianggap sebagai keheningan menyiksa oleh sistem saraf.

## Kematian Kemampuan Membaca Mendalam (*Deep Reading*)

Membaca teks panjang menuntut kerja kognitif tingkat tinggi: otak harus membangun interpretasi visual mandiri, menghubungkan konsep abstrak lintas bab, serta mengevaluasi argumen secara kritis. Proses ini dikenal oleh para ahli neurosains sebagai kemampuan membaca mendalam (*deep reading*).

Ketika sirkuit saraf terbiasa dengan rangsangan instan yang pasif, jaringan otak yang mengelola pemikiran kritis dan empati reflektif mulai mengalami atrofi fungsi. Kita berubah dari pembaca yang teliti menjadi pemindai kilat yang hanya mampu menyerap informasi dalam serpihan-serpihan dangkal. 

Akibatnya, pemahaman kita terhadap isu-isu kompleks menjadi terdistorsi, memicu kecemasan kognitif, dan memperlemah daya tahan mental saat menghadapi pekerjaan intelektual yang menuntut ketekunan tinggi.

## Merebut Kembali Ketenangan Pikiran

Memulihkan stamina mental dan daya konsentrasi membutuhkan disiplin pemulihan yang sadar. Otak kita memiliki plastisitas luar biasa untuk memulihkan sirkuit sarafnya jika diberikan ruang istirahat yang memadai.

Langkah pemulihan dapat dimulai dari tindakan-tindakan nyata yang terukur:

* **Menciptakan Zona Bebas Layar**: Tetapkan batas fisik yang tegas, seperti tidak meletakkan smartphone di ruang tidur atau meja baca pribadi.
* **Melatih Toleransi Kebosanan**: Izinkan diri Anda merasakan jeda hening tanpa buru-buru menyentuh layar saat mengantre atau menunggu transportasi umum.
* **Membaca Bertahap (*Incremental Reading*)**: Mulailah membaca buku fisik selama lima belas menit setiap pagi tanpa interupsi notifikasi, lalu tingkatkan durasinya secara berkala layaknya melatih otot fisik.

Kemampuan mempertahankan fokus panjang di tengah hiruk-pikuk distraksi digital adalah salah satu keterampilan paling berharga di zaman sekarang. Menjaga ruang tenang di dalam kepala kita bukanlah kemunduran, melainkan pertahanan esensial atas kejernihan akal budi manusia.`
  }
];

async function main() {
  console.log("=== MEMULAI BATCH AUTO-PUBLISH TUJUHCAHAYA (JADWAL 20:00 WIB / TIAP 30 MENIT) ===");
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

  console.log("\n=== SELURUH BATCH 20:00 BERHASIL DIPUBLIKASIKAN ===");
}

main().catch(err => {
  console.error("Batch Error:", err);
  process.exit(1);
});
