import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

const articles = [
  {
    title: "Ilusi Fitur AI di Smartphone Flagship: Mengapa Konsumen Dipaksa Membayar Mahal demi Gimik yang Seharusnya Gratis",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Kecerdasan Buatan", "Smartphone", "Gadget", "Inovasi", "Hak Konsumen"],
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang memegang smartphone canggih dengan tampilan antarmuka pemrosesan kecerdasan buatan",
    excerpt: "Pabrikan smartphone berlomba-lomba menyematkan label AI pada setiap tombol kamera dan aplikasi catatan demi membenarkan kenaikan harga. Namun di balik kehebohan pemasaran, sebagian besar fungsi tersebut hanyalah pemrosesan awan yang segera dipagari langganan bulanan.",
    content: `Jika Anda menyimak peluncuran produk ponsel pintar premium dalam dua tahun terakhir, satu hal tampak seragam: kata *Artificial Intelligence* diulang ratusan kali layaknya mantra ajaib. Mulai dari fitur penghapus bayangan di foto, perangkum rekaman suara rapat, hingga generator wallpaper otomatis, semuanya dipromosikan sebagai lompatan revolusioner yang mewajibkan konsumen menebus perangkat anyar dengan banderol di atas dua puluh juta rupiah.

Namun begitu ponsel tersebut mendarat di genggaman tangan sehari-hari, kilau magis itu memudar menjadi kenyataan pahit. Sebagian besar fitur yang dibanggakan pabrikan sesungguhnya bukan inovasi perangkat keras yang memerlukan cip prosesor termahal, melainkan sekadar aplikasi antarmuka tipis (*API wrapper*) yang mengirim data pengguna ke server komputasi awan.

## Komersialisasi Fitur Dasar Menjadi Pintu Masuk Langganan

Langkah pabrikan membungkus peranti lunak biasa menjadi gimik mewah menyimpan motif bisnis yang kian agresif terhadap dompet konsumen:

* **Justifikasi Kenaikan Harga Tanpa Inovasi Nyata**: Ketika evolusi sensor kamera fisik, kapasitas baterai, dan resolusi layar telah mencapai titik jenuh, label AI dijadikan senjata pamungkas bagian pemasaran untuk menaikkan harga jual rata-rata (*ASP*) tanpa menawarkan peningkatan durabilitas material.
* **Jebakan Paywall Pasca-Pembelian**: Berbagai vendor besar mulai menyelipkan klausul cetak kecil dalam lembar ketentuan layanan: bahwa fitur-fitur pemrosesan generatif tersebut hanya digratiskan selama masa promosi terbatas satu atau dua tahun. Setelah itu, pengguna diwajibkan membayar iuran sewa bulanan agar tombol edit di galeri foto tetap berfungsi.
* **Ketergantungan Absolut pada Sambungan Internet**: Fitur yang diklaim tersemat di perangkat (*on-device*) kerap menolak berjalan ketika ponsel berada di mode pesawat atau area minim sinyal. Tanpa koneksi aktif ke server pusat, ponsel belasan juta rupiah tersebut seketika kehilangan separuh daya tariknya.

## Menolak Ilusi Demi Kedaulatan Konsumen

Konsumen teknologi berhak bersikap lebih skeptis terhadap kampanye hiperbolik industri. Ponsel pintar terbaik adalah perangkat yang menghormati privasi pemiliknya, memberikan daya tahan baterai seharian penuh, dan dirancang dengan suku cadang yang mudah diperbaiki—bukan mesin promosi yang memaksa penggunanya menyewa kembali fitur yang sudah dibayar lunas di meja kasir.

Sudah saatnya kita berhenti terpukau oleh kilau gimik perangkat lunak awan dan mulai menuntut integritas rekayasa yang nyata.`
  },
  {
    title: "Jebakan Battle Pass dan Misi Harian: Bagaimana Video Game Berubah Menjadi Pekerjaan Kantor Kedua yang Menghisap Jiwa",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Industri Game", "Battle Pass", "Monetisasi", "Gamer", "Psikologi"],
    imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pemandangan setup gaming dengan keyboard mekanik dan lampu RGB menyala di ruangan temaram",
    excerpt: "Dulu kita menyalakan game untuk melepas penat setelah seharian bekerja keras. Kini, deretan misi harian berbatas waktu dan tangga level battle pass justru menuntut absensi harian layaknya sistem presensi kantor.",
    content: `Sepulang dari rutinitas kantor yang menguras tenaga, menyalakan konsol atau PC pernah menjadi tempat perlindungan paling menenangkan. Kita bisa masuk ke dunia fantasi, bermain selama tiga puluh menit tanpa beban, lalu mematikannya kapan saja tanpa rasa bersalah. Game hadir sebagai kawan rekreasi yang tulus menghargai waktu luang pemainnya.

Namun pemandangan itu kini dijungkirbalikkan oleh mekanika monetisasi game modern. Begitu Anda masuk ke lobi permainan, layar langsung dihujani pemberitahuan bertubi-tubi: penghitung waktu mundur musim kompetisi, deretan misi harian yang harus diselesaikan sebelum tengah malam, serta palang tangga level *battle pass* yang mengancam akan menghanguskan hadiah kosmetik jika Anda berani bolos bermain.

## Psikologi Manipulatif di Balik FOMO Digital

Format battle pass sengaja dirancang oleh pakar psikologi perilaku industri game untuk memanfaatkan sindrom ketakutan tertinggal (*fear of missing out*):

* **Membayar Uang demi Hak Bekerja**: Dalam sistem battle pass berbayar, pemain sejatinya mengeluarkan uang muka hanya untuk mendapatkan hak menggiling waktu (*grinding*). Jika tidak sanggup menginvestasikan puluhan jam permainan dalam tempo sebulan, barang digital yang sudah dibeli lunas tersebut lenyap tanpa kompensasi.
* **Transformasi Hobi Menjadi Jam Lembur**: Mekanisme misi harian seperti membunuh sepuluh musuh dengan senjata tertentu membelenggu kebebasan bermain. Seseorang tidak lagi bermain untuk bersenang-senang mengeksplorasi strategi, melainkan menuntaskan daftar tugas layaknya lembar kerja harian.
* **Erosi Kebersamaan Komunitas**: Tekanan untuk terus mengejar level individual merusak kebersamaan antar-kawan. Sering kali pemain enggan mencoba game baru bersama sahabat karena takut kehilangan jatah poin pengalaman (*XP*) pada game utama mereka.

## Merebut Kembali Kemerdekaan Bermain

Video game seharusnya menjadi oase imajinasi dan katarsis rasa lelah, bukan lini produksi pabrik kedua yang menagih kehadiran Anda dengan ancaman hukuman psikologis. 

Keberhasilan judul-judul mandiri yang menghargai tempo pemain membuktikan bahwa gamer sesungguhnya mendambakan petualangan yang memiliki garis akhir. Menolak untuk tunduk pada kalender musiman battle pass adalah langkah awal untuk mengembalikan video game ke takhta sejatinya: sebagai karya seni interaktif yang membebaskan jiwa.`
  },
  {
    title: "Mitos Detoks Dopamin: Mengapa Tren Puasa Kesenangan Menyesatkan dan Gagal Mengatasi Burnout Kronis",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Kesehatan Mental", "Neuroscience", "Produktivitas", "Burnout", "Gaya Hidup"],
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang duduk tenang menenangkan pikiran di tepi jendela dengan pemandangan alam terbuka",
    excerpt: "Gagasan bahwa kita bisa 'menguras' hormon dopamin dengan mengisolasi diri dari hiburan hanyalah salah kaprah neurosains. Alih-alih menyembuhkan kelelahan mental, tren ini justru menyamarkan akar masalah beban kerja berlebihan.",
    content: `Di linimasa media sosial dan kanal video motivasi pengembangan diri, istilah 'detoks dopamin' meledak menjadi tren gaya hidup baru kaum urban. Resepnya terdengar radikal sekaligus menjanjikan: matikan seluruh layar ponsel selama 24 jam, hindari percakapan santai, jangan mendengarkan musik, dan pantang mengonsumsi makanan enak. Tujuannya adalah mereset reseptor otak agar kita kembali termotivasi dan produktif bekerja layaknya mesin kerja tanpa emosi.

Namun dari kacamata neurobiologi medis, klaim tersebut berdiri di atas fondasi pseudosains yang keliru memahami mekanisme kimiawi otak manusia. Dopamin bukanlah racun yang menumpuk di pembuluh darah layaknya kolesterol jahat yang bisa dikuras dengan puasa sensorik ekstrem.

## Distorsi Pemahaman Kimiawi Otak

Memperlakukan neurotransmiter otak layaknya tangki bensin yang bisa dikosongkan dan diisi ulang adalah simplifikasi berbahaya yang melahirkan sejumlah risiko kesehatan mental:

* **Dopamin Esensial bagi Kelangsungan Hidup**: Dopamin diproduksi secara alami oleh otak untuk mengatur fungsi motorik tubuh, konsentrasi belajar, refleks gerak, dan kesadaran dasar. Menganggap dopamin sebagai musuh produktivitas adalah kekeliruan fatal yang bertentangan dengan fisiologi dasar.
* **Menyalahkan Individu dan Mengabaikan Eksploitasi Sistemik**: Tren ini mendorong narasi beracun bahwa kelelahan ekstrem (*burnout*) semata-mata diakibatkan oleh kurangnya disiplin diri menatap layar smartphone. Padahal, akar utama keletihan pekerja modern berporos pada beban kerja eksesif, upah yang tidak seimbang, dan hilangnya ruang istirahat yang manusiawi.
* **Siklus Rasa Bersalah dan Efek Bumerang**: Menghukum diri sendiri dengan isolasi total sering kali memicu kecemasan akut. Begitu masa 'puasa' selesai, individu cenderung melampiaskan hasrat tertahan dengan mengonsumsi konten media sosial secara berlebihan (*binge scrolling*).

## Menemukan Pemulihan Otentik

Otak manusia tidak membutuhkan detoksifikasi kimiawi yang dipaksakan lewat ritual asketis media sosial. Yang sesungguhnya didambakan oleh tubuh dan pikiran kita adalah penetapan batas kerja yang tegas, pemenuhan tidur nyenyak delapan jam, interaksi sosial hangat bersama orang-orang terdekat, dan keberanian untuk membiarkan diri melamun tanpa rasa bersalah.

Berhenti memperlakukan otak sendiri layaknya perangkat keras pabrik yang harus di-overclock setiap hari. Pemulihan sejati lahir ketika kita berani mengakui keterbatasan fisik dan memperlakukan diri sendiri dengan kelembutan yang jujur.`
  },
  {
    title: "Hilangnya Keheningan Ruang Publik: Mengapa Kota Modern Menyerang Telinga Kita dengan Kebisingan Komersial Tanpa Henti",
    category: "budaya",
    byline: "0100MUNS3DJSD97205CCB31353", // Sarah Dilla
    tags: ["Budaya", "Ruang Publik", "Polusi Suara", "Tata Kota", "Kesehatan Mental", "Gaya Hidup"],
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Suasana jalanan kota modern metropolitan yang padat dengan kendaraan dan gemerlap papan iklan elektronik",
    excerpt: "Dari pengeras suara pusat perbelanjaan hingga jingle promosi di minimarket dan stasiun, keheningan telah sirna dari ruang bersama kita. Polusi akustik ini bukan sekadar gangguan kecil, melainkan perampasan hak atas ketenangan mental.",
    content: `Kapan terakhir kali Anda melangkah ke sebuah ruang bersama di tengah kota dan mendapati suasana yang benar-benar hening? Bagi warga yang tinggal dan beraktivitas di kawasan urban Indonesia, pertanyaan tersebut hampir mustahil dijawab dengan mudah.

Ke mana pun kaki melangkah, indra pendengaran kita dikepung oleh rentetan lanskap suara yang bising dan agresif. Di stasiun kereta komuter, pengeras suara meraung-raung mengulang maklumat keselamatan setiap tiga menit. Di koridor pusat perbelanjaan, lagu pop bertempo tinggi bertubrukan dengan suara video promo dari layar iklan videotron raksasa. Bahkan di minimarket sudut pemukiman, denting melodi promosi produk terus diputar berulang-ulang tanpa jeda.

## Privatisasi Suara dan Kolonisasi Perhatian

Invasi akustik yang terjadi di kota modern bukan sekadar hasil sampingan dari aktivitas transportasi, melainkan strategi terencana dalam merebut ruang perhatian publik:

* **Tirani Pengeras Suara Komersial**: Ruang publik yang semestinya menjadi area bersama yang menenangkan kini diubah menjadi etalase periklanan audio agresif. Korporasi dan pengelola gedung merasa berhak memenuhi udara publik dengan jingle promosi tanpa memikirkan hak warga atas ruang dengar yang sehat.
* **Kelelahan Sensorik Kronis**: Paparan kebisingan konstan di atas 70 desibel secara terus-menerus memicu pelepasan hormon stres kortisol, memicu ketegangan urat leher, dan mengikis kemampuan fokus mendalam. Tanpa disadari, warga kota pulang ke rumah dalam keadaan lelah emosional hanya karena telinga mereka terus-menerus diserang polusi nada.
* **Kompensasi Mahal Headphone Peredam Bising**: Karena negara dan perancang kota gagal menyediakan ruang dengar yang damai, beban ini dialihkan ke pundak individu. Warga terpaksa merogoh kocek jutaan rupiah untuk membeli headphone berfitur *active noise cancelling* demi menciptakan gelembung hening buatan di tengah kepungan deru kota.

## Memperjuangkan Hak atas Ketenangan Akustik

Keheningan bukanlah kemewahan eksklusif yang hanya boleh dinikmati oleh mereka yang mampu menyewa vila di puncak bukit atau memesan kamar hotel bintang lima. Keheningan adalah hak asasi ekologis mendasar bagi kesehatan mental seluruh warga kota.

Perencanaan tata kota masa depan harus mulai memasukkan batas baku mutu polusi suara ke dalam regulasi publik. Kita berhak menuntut kota yang tidak melulu berteriak, menuntut stasiun yang memercayai kecerdasan warganya tanpa maklumat pengeras suara berulang, dan merawat sudut-sudut taman hijau di mana desau angin dan gemerisik daun kembali menjadi musik utama kehidupan bersama.`
  }
];

async function main() {
  console.log("=== MEMULAI BATCH AUTO-PUBLISH TUJUHCAHAYA (JADWAL 01:30 WIB / TIAP 30 MENIT) ===");
  const results = [];

  for (let i = 0; i < articles.length; i++) {
    const art = articles[i];
    console.log(`\n--- [${i + 1}/${articles.length}] Memvalidasi 7C Editorial Guard: "${art.title}" ---`);
    
    // 1. Audit 7C Editorial Guard
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

  console.log("\n=== SELURUH BATCH 01:30 WIB BERHASIL DIPUBLIKASIKAN ===");
}

main().catch(err => {
  console.error("Batch Error:", err);
  process.exit(1);
});
