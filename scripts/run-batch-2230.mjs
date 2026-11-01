import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

const articles = [
  {
    title: "Kematian Smartphone Modular: Mengapa Ambisi HP Bongkar-Pasang Selalu Digagalkan Monopoli Industri",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Hardware", "Smartphone", "Right to Repair", "Elektronik", "Desain Produk"],
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Komponen sirkuit dan bodi internal ponsel pintar yang sedang dibongkar di atas meja teknisi",
    excerpt: "Konsep smartphone bongkar-pasang pernah digadang-gadang sebagai masa depan ramah lingkungan. Namun di balik kegagalannya, ada kepentingan raksasa manufaktur yang menolak hilangnya siklus upgrade tahunan.",
    content: `Satu dekade lalu, jagat teknologi sempat dihebohkan oleh visi futuristik proyek telepon genggam modular. Gagasan di balik Phonebloks dan Project Ara terdengar begitu brilian sekaligus mulia: pengguna tidak perlu lagi membuang seluruh bodi smartphone hanya karena baterainya mulai soak atau ingin sensor kamera beresolusi lebih tajam. Cukup cabut balok komponen yang lama, pasang modul baru dengan sistem kait magnetis, dan perangkat kesayangan Anda seketika berevolusi.

Namun mimpi indah tentang smartphone yang tahan dipakai seumur hidup itu perlahan mati suri. Raksasa teknologi yang mendanai proyek tersebut satu per satu membatalkan riset mereka, mengubur konsep modularitas ke dalam laci arsip kegagalan industri.

## Alasan Efisiensi Fisik Melawan Motif Finansial

Argumen resmi yang selalu disodorkan para insinyur pabrikan berporos pada kompromi ketebalan dan daya tahan. Menyatukan seluruh cip prosesor, sirkuit memori, dan sensor ke dalam satu papan induk (*motherboard*) unibody yang padat memang memungkinkan bodi ponsel tampil super tipis, elegan, dan tahan cipratan air. Desain modular dengan konektor pin fisik yang terpisah diakui membutuhkan ruang internal lebih boros dan rentan patah saat perangkat terjatuh ke lantai keras.

Namun alasan teknis tersebut hanyalah separuh cerita. Alasan sebenarnya berakar pada benturan keras dengan model bisnis konsumerisme modern:

* **Matinya Siklus Upgrade Dua Tahunan**: Industri smartphone global bertumpu pada siklus penjualan unit baru setiap 12 hingga 24 bulan. Jika konsumen bisa memperbarui komponen kamera atau baterai secara mandiri seharga ratusan ribu rupiah, penjualan perangkat flagship seharga belasan juta rupiah akan anjlok drastis.
* **Trik Lem Industri dan Komponen Terenkripsi**: Demi mencegah perbaikan pihak ketiga, pabrikan justru bergerak ke arah yang berlawanan dengan modularitas. Baterai direkatkan dengan lem berkekuatan industri, sasis disegel panas tanpa baut standar, dan layar dipasangkan secara kriptografis ke prosesor agar tidak bisa diganti di bengkel servis independen.
* **Limbah Elektronik yang Diabaikan**: Dampak dari keterikatan desain unibody adalah timbulan ratusan juta ton sampah elektronik setiap tahun. Perangkat dengan kerusakan sepele pada soket pengisi daya sering kali langsung dibuang ke tempat sampah karena biaya servis resmi setara membeli unit anyar.

## Perlawanan Minoritas dan Jalan Panjang Hak Memperbaiki

Kendati diboikot oleh para pemain utama, napas modularitas belum sepenuhnya padam. Inisiatif ceruk seperti Fairphone di Eropa dan produsen laptop Framework membuktikan bahwa rancang bangun perangkat modular yang tahan banting dan mudah diperbaiki sama sekali bukan kemustahilan rekayasa. Mereka membuktikan bahwa pengguna menyukai produk yang bisa dibuka dengan obeng standar dan suku cadangnya dijual bebas secara transparan.

Kunci masa depan perangkat elektronik bukan terletak pada kepasrahan konsumen terhadap tren sasis tipis yang rapuh. Tanpa regulasi ketat dari pemerintah untuk mewajibkan standarisasi suku cadang dan hak perbaikan mandiri (*Right to Repair*), industri akan terus memaksakan ilusi kemajuan semu yang menimbun limbah beracun di planet bumi demi menjaga grafik pendapatan kuartalan.`
  },
  {
    title: "Dilema Always-Online pada Game Single-Player: Mengapa Pemain Dipaksa Bergantung pada Server yang Rentan Tumbang",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Industri Game", "DRM", "Koneksi Internet", "Hak Konsumen", "Gamer"],
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Layar monitor komputer menampilkan pesan kesalahan koneksi server dengan latar belakang setup gaming gelap",
    excerpt: "Membeli game petualangan pemain tunggal secara lunas kini tak lagi menjamin Anda bisa memainkannya kapan saja. Penerbit memaksa koneksi internet konstan yang mengubah hak bermain menjadi izin sewa rapuh.",
    content: `Bayangkan Anda sedang duduk santai di akhir pekan, bersiap menikmati babak klimaks dalam game petualangan naratif yang Anda beli seharga delapan ratus ribu rupiah. Tidak ada musuh manusia lain di arena; Anda hanya berniat menjelajahi dunia fantasi seorang diri. Namun di tengah ketegangan cerita, layar mendadak membeku, berganti dengan jendela peringatan dingin: *'Koneksi ke server pusat terputus. Mengembalikan Anda ke menu utama.'*

Pengalaman menjengkelkan ini bukan lagi insiden langka, melainkan pemandangan lazim dalam ekosistem game modern. Penerbit raksasa semakin agresif memaksakan kewajiban koneksi internet konstan (*always-online*) pada judul-judul yang secara mekanik murni dirancang untuk pemain tunggal (*single-player*).

## Dalih Proteksi yang Merugikan Konsumen Jujur

Alasan yang kerap diajukan korporasi penerbit berkisar pada pengamanan hak cipta digital (*DRM*), sinkronisasi papan skor global, serta pencegahan kecurangan pada sistem kosmetik mikrotransaksi. Namun bagi jutaan pemain yang membayar penuh dengan uang hasil kerja keras, kebijakan ini melahirkan sejumlah kerugian mendasar:

* **Tersandera Pemeliharaan Server Rutin**: Ketika pengembang melakukan perawatan infrastruktur atau server diserang peretas, pemain legal yang berada di belahan bumi lain otomatis dilarang memainkan mode kampanye cerita offline mereka.
* **Kerentanan Jaringan Lokal**: Di negara kepulauan dengan stabilitas koneksi internet yang belum merata, sedikit gangguan kabel serat optik atau lonjakan latensi cuaca buruk cukup untuk membatalkan progres petualangan puluhan jam.
* **Ancaman Kematian Permanen**: Begitu penerbit memutuskan sebuah game sudah tidak menguntungkan setelah lima atau sepuluh tahun, server autentikasi akan dimatikan selamanya. Seluruh kaset fisik maupun lisensi digital yang dibeli konsumen seketika berubah menjadi barang rongsok yang tidak bisa dibuka kembali.

## Mengembalikan Ruang Pelarian yang Berdaulat

Video game pemain tunggal pada hakikatnya adalah santuan kontemplatif—sebuah tempat pelarian imajinatif di mana seseorang bisa membenamkan diri dalam cerita fiksi tanpa intervensi dunia luar. Menuntut perangkat game kita untuk terus melapor ke server korporat setiap beberapa menit adalah bentuk kecurigaan berlebihan yang melecehkan pembeli jujur.

Ironisnya, sistem proteksi daring yang rumit ini kerap kali dibobol oleh kelompok pembajak dalam hitungan pekan, menghadirkan versi bajakan yang justru lebih nyaman dimainkan secara offline tanpa gangguan lag. Pemain legal yang setia membayar justru diperlakukan layaknya tersangka yang harus diawasi 24 jam.

Komunitas gamer dan asosiasi perlindungan konsumen berhak menuntut aturan baku: setiap game yang memuat mode kampanye pemain tunggal wajib menyertakan tambalan mode luring permanen (*offline patch*) sebelum penerbit menghentikan dukungan server. Hak untuk memainkan karya seni interaktif yang telah dibeli lunas adalah batas kedaulatan yang tidak boleh dinegosiasikan.`
  },
  {
    title: "Komersialisasi Hobi Kreatif: Mengapa Setiap Kesenangan Personal Kini Dituntut Menghasilkan Cuan Pasif",
    category: "budaya",
    byline: "0100MUNS3DJSD97205CCB31353", // Sarah Dilla
    tags: ["Budaya", "Gaya Hidup", "Hustle Culture", "Kesehatan Mental", "Pekerja Urban", "Sosiologi"],
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seorang perajin sedang membuat tembikar tanah liat dengan laptop terbuka mencatat analitik media sosial di dekatnya",
    excerpt: "Bercocok tanam, melukis, atau membuat kue dulunya adalah pelarian murni dari kepenatan kerja. Namun narasi produktivitas modern meracuni hobi menjadi etalase bisnis sampingan yang melelahkan.",
    content: `Sebuah pola percakapan berulang kerap terjadi di linimasa media sosial: seseorang dengan bangga mengunggah foto syal rajutan pertamanya yang sedikit miring, sepiring roti sourdough buatan dapur rumah, atau sketsa lukisan cat air sederhana. Tanpa menunggu lama, kolom komentar langsung dibanjiri respons bernada seragam: *"Bagus banget, kenapa nggak kamu buka pesanan aja?"* atau *"Sayang kalau nggak dibikin konten TikTok terus dijual di e-commerce!"*

Komentar yang sekilas terdengar seperti pujian manis tersebut sesungguhnya mencerminkan patologi sosial kontemporer yang meresahkan: ketidakmampuan masyarakat urban untuk menikmati sebuah aktivitas tanpa menempelkan label nilai moneter di atasnya.

## Tirani Produktivitas dan Invasi Nalar Bisnis

Di bawah cengkeraman *hustle culture* dan doktrin optimasi diri tanpa henti, waktu luang tidak lagi dipandang sebagai hak asasi untuk memulihkan raga dan pikiran. Setiap jam senggang di luar jam kantor diposisikan sebagai modal tidur yang wajib diubah menjadi pundi-pundi pendapatan sampingan (*side hustle*).

Ketika kesenangan personal dipaksa menjadi ladang bisnis mikro, relasi psikologis kita terhadap hobi tersebut langsung tercemar:

* **Beban Metrik Finansial**: Melukis yang awalnya dilakukan untuk menyalurkan emosi mendadak terbebani oleh kalkulasi harga bahan baku cat, algoritma keterlibatan video media sosial, dan negosiasi tawar-menawar harga dengan pembeli rewel.
* **Matinya Hak untuk Tampil Berantakan**: Hobi adalah tempat di mana manusia berhak melakukan kesalahan dengan gembira. Namun begitu karya ditujukan untuk etalase komersial, kita kehilangan kemewahan untuk bereksplorasi secara santai tanpa takut dihakimi oleh ulasan bintang satu.
* **Kelelahan Fisik dan Mental Ganda**: Alih-alih mendapatkan penyegaran setelah lelah bekerja lembur di kantor, kita justru menciptakan giliran kerja malam kedua di rumah sendiri, mempercepat datangnya jurang kejenuhan kronis (*burnout*).

## Merayakan Kesenangan yang Tidak Perlu Menghasilkan Uang

Ada kebijaksanaan kuno yang sengaja dihapus oleh algoritma modern: bahwa nilai hidup seorang manusia tidak ditentukan oleh seberapa efisien ia memeras waktu hidupnya menjadi saldo tabungan. Berkebun hanya untuk melihat pucuk daun baru bertunas, bermain gitar dengan tiga kunci dasar yang fals, atau menulis jurnal yang tidak akan pernah dibaca orang lain adalah tindakan perlawanan yang sangat sehat.

Kesenangan murni tidak berutang penjelasan kepada neraca laba rugi. Mempertahankan sebuah ruang aktivitas yang sepenuhnya bebas dari pamrih komersial adalah benteng terakhir kewarasan di tengah dunia yang terobsesi mengukur segala sesuatu dengan angka rupiah. Sudah saatnya kita berani menikmati hal-hal sederhana tanpa merasa berdosa hanya karena hal itu tidak menghasilkan uang.`
  },
  {
    title: "Tirani Playlist Mood: Bagaimana Kurasi Algoritmik Mengubah Musik Jadi Wallpaper Fungsional Tanpa Jiwa",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Industri Musik", "Streaming", "Spotify", "Kurasi Playlist", "Budaya Pop"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang mengenakan headphone di meja kerja dengan pencahayaan temaram mendengarkan alunan musik latar",
    excerpt: "Daftar putar bertajuk 'Deep Focus' atau 'Chill Beats' merajai platform streaming. Namun di balik kepraktisannya, musik direduksi menjadi komoditas fungsional pengisi sunyi di mana identitas musisi sengaja dihilangkan.",
    content: `Buka aplikasi streaming musik favorit Anda hari ini, dan beranda depan kemungkinan besar tidak lagi menyapa Anda dengan rilisan album penuh terbaru dari band independen atau ulasan kritis tentang pergerakan skena musik lokal. Alih-alih merayakan identitas musisi, layar aplikasi dipenuhi deretan kartu bernuansa pastel dengan judul-judul utilitarian: *'Deep Focus Workspace'*, *'Chill Lofi Study'*, *'Morning Energy Boost'*, atau *'Sleep Ambient Rain'*.

Pergeseran ini menandai babak baru dalam sejarah konsumsi audio global. Musik perlahan dipreteli dari statusnya sebagai karya seni emosional yang berdaulat, diturunkan derajatnya menjadi sekadar peranti fungsional pembantu produktivitas harian.

## Reduksi Audio Menjadi Cat Dinding Ruangan

Daftar putar berbasis suasana hati (*mood playlist*) dirancang dengan satu prinsip algoritma yang kaku: konsistensi gelombang suara yang homogen. Lagu-lagu yang dipilih tidak boleh memiliki progresi akord yang terlalu mengejutkan, vokal solo yang menggelegar, atau lirik puitis yang memancing perenungan mendalam. Semuanya diseragamkan pada ketukan tempo sedang dan nada rendah yang nyaman agar tidak memecah konsentrasi pendengar yang sedang mengetik laporan kerja.

Dampak dari penyeragaman fungsional ini menghantam ekosistem musik secara luas:

* **Anonimitas Musisi Kreatif**: Jutaan pendengar mendengarkan sebuah trek instrumental setiap hari tanpa pernah mengetahui siapa nama komposer di baliknya, dari kota mana ia berasal, atau kisah hidup apa yang melatarbelakangi pembuatan lagu tersebut.
* **Matinya Konsep Narasi Album**: Tradisi menyusun album rekaman sebagai sebuah perjalanan konsep yang utuh dari trek pembuka hingga penutup dikorbankan demi mengejar penempatan satu lagu lepasan di dalam daftar putar editorial berlabel jutaan pengikut.
* **Manipulasi 'Artis Bayangan' (*Ghost Artists*)**: Sejumlah laporan investigasi membongkar bagaimana platform streaming sengaja memasukkan trek-trek murah produksi studio internal dengan nama musisi samaran ke dalam daftar putar populer mereka, memangkas alokasi royalti yang seharusnya mengalir ke musisi independen berdarah daging.

## Mengembalikan Musik Sebagai Pertemuan Jiwa

Musik pada fitrah tertingginya bukan penyejuk ruangan akustik atau sekadar pelumas konsentrasi agar pekerja kantoran tahan menatap layar komputer selama sepuluh jam. Musik adalah monumen getaran jiwa—ia hadir untuk mengguncang dada, menantang prasangka batin, menyuarakan amarah sosial, atau merangkul duka lara yang tak terucap oleh kata-kata.

Memilih untuk sesekali mematikan daftar putar algoritma dan kembali mendengarkan album musisi dari trek awal hingga akhir adalah wujud penghormatan kita pada kemanusiaan seniman. Musik berhak didengarkan secara utuh dengan segenap atensi dan rasa, bukan sekadar diperlakukan seperti kertas dinding digital yang menguap tanpa bekas begitu tombol jeda ditekan.`
  }
];

async function main() {
  console.log("=== MEMULAI BATCH AUTO-PUBLISH TUJUHCAHAYA (JADWAL 22:30 WIB / TIAP 30 MENIT) ===");
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

  console.log("\n=== SELURUH BATCH 22:30 BERHASIL DIPUBLIKASIKAN ===");
}

main().catch(err => {
  console.error("Batch Error:", err);
  process.exit(1);
});
