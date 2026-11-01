import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

const articles = [
  {
    title: "Dilema AI Copilot dalam Rekayasa Perangkat Lunak: Antara Efisiensi Semu dan Erosi Pemahaman Koding",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Software Engineering", "Artificial Intelligence", "Coding", "Developer", "Open Source"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Tampilan baris kode pemrograman pada monitor di ruang kerja developer",
    excerpt: "Menyerahkan penulisan kode pada generator kecerdasan buatan memang mendongkrak metrik commit harian. Namun di balik ilusi kecepatan tersebut, tim rekayasa perangkat lunak mulai membayar harga mahal: degradasi logika dasar dan akumulasi utang teknis tak terkendali.",
    content: `Menekan tombol Tab untuk menerima saran sepuluh baris kode dari asisten pemrograman cerdas telah menjadi kebiasaan baru di mayoritas editor teks para pengembang perangkat lunak. Laporan produktivitas internal berbagai perusahaan teknologi dengan bangga memamerkan lonjakan angka commit dan kecepatan siklus pengembangan fitur yang meningkat drastis hingga tiga puluh persen.

Di atas kertas, kehadiran asisten kode berbasis model bahasa besar tampak seperti lompatan produktivitas terbesar sejak ditemukannya compiler tingkat tinggi. Namun, ketika euforia kecepatan mulai mereda, para arsitek sistem senior mulai menemukan keretakan serius pada fondasi rekayasa perangkat lunak modern: hilangnya pemahaman mendalam atas kode yang dikirim ke lingkungan produksi.

## Ilusi Kecepatan dan Terkikisnya Pemodelan Mental

Kekuatan utama seorang insinyur perangkat lunak bukanlah kecepatan mengetik sintaksis di papan ketik, melainkan kemampuan membangun model mental yang kokoh mengenai alur data, batasan memori, serta penanganan kasus tepi (*edge cases*). Ketika seorang pengembang menulis kode secara manual, otak dipaksa memetakan relasi sebab-akibat dari setiap baris instruksi.

Asisten AI mereduksi proses kognitif tersebut menjadi sekadar kegiatan inspeksi pasif: membaca saran kilat, lalu menekan tombol persetujuan tanpa membedah implikasi tersembunyinya. 

Pola kerja ini memicu tiga krisis mendasar di ruang kerja tim rekayasa:

* **Blind Trust pada Boilerplate**: Pengembang junior kerap menerima cuplikan kode yang sekilas tampak rapi dan berhasil melewati uji fungsi dasar (*unit test*), namun menyembunyikan inefisiensi kompleksitas waktu O(n²) atau kebocoran memori pada skala lalu lintas tinggi.
* **Degradasi Kemampuan Problem-Solving Mandiri**: Ketika sistem mengalami kegagalan di tengah malam dan asisten AI tidak memahami konteks log yang kompleks, pengembang yang terbiasa disuapi solusi instan kerap kebingungan menelusuri akar masalah.
* **Erosi Budaya Code Review**: Volume perubahan kode yang melonjak dua kali lipat membuat proses *peer review* terdistorsi menjadi formalitas checklist belaka, karena reviewer sendiri kewalahan menelaah puluhan file yang dihasilkan dalam hitungan detik.

## Bom Waktu Utang Teknis di Lingkungan Enterprise

Sebuah studi empiris yang menganalisis ratusan repositori korporat mengungkap fenomena mencemaskan: tingkat perombakan ulang kode (*churn rate*) pasca-adopsi asisten AI justru melonjak signifikan. Kode yang dihasilkan oleh generator otomatis cenderung bertele-tele, menduplikasi utilitas yang sebetulnya sudah ada di basis kode proyek, serta mengimpor pustaka eksternal pihak ketiga yang tidak perlu.

Akibatnya, repositori perusahaan perlahan tercekik oleh utang teknis tak kasat mata. Kode berfungsi hari ini, tetapi menjadi mimpi buruk arsitektural yang mustahil dirawat enam bulan kemudian. Ketika arsitektur proyek berubah atau kebutuhan bisnis berkembang, membongkar kode yang ditulis tanpa visi kohesif membutuhkan biaya rekayasa yang jauh melampaui waktu yang dihemat di awal.

## Menempatkan AI Sebagai Asisten, Bukan Pilot Utama

Mematikan perkakas kecerdasan buatan sama sekali tentu bukan langkah rasional di tengah persaingan industri yang menuntut efisiensi tinggi. Kuncinya terletak pada penetapan batasan disiplin rekayasa yang tegas.

Asisten koding semestinya difungsikan sebagai perkakas otomasi tugas repetitif—seperti menyusun kerangka pengetesan otomatis (*scaffolding test*), mendokumentasikan antarmuka API, atau memformat kueri pangkalan data—bukan sebagai perancang logika inti bisnis. 

Tim pengembang yang matang harus memperketat standar kaji ulang kode (*code review*), menuntut pemahaman arsitektural penuh dari setiap insinyur atas apa pun yang mereka commit, dan tidak silau oleh metrik kecepatan semu. Kecepatan tanpa ketelitian bukanlah kemajuan, melainkan percepatan menuju kegagalan sistemik.`
  },
  {
    title: "Ilusi Kepemilikan Game Digital: Ketika Uang Jutaan Rupiah Hanya Membeli Izin Sewa Sementara",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Industri Game", "Steam", "PlayStation", "Hak Konsumen", "Digital Goods"],
    imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Koleksi game digital dan konsol modern di samping layar monitor gaming",
    excerpt: "Penutupan server The Crew dan penghapusan paksa lisensi dari perpustakaan pengguna memicu alarm keras bagi komunitas gamer global. Tombol 'Beli' di etalase digital kini terbukti sekadar eufemisme untuk perjanjian sewa bersyarat.",
    content: `Bagi sebagian besar gamer modern, lemari pajangan berisi deretan kotak kaset fisik dan cakram optik telah tergantikan oleh daftar pustaka digital di etalase Steam, PlayStation Store, atau Xbox Marketplace. Kita mengklik tombol bertuliskan "Beli Sekarang", memasukkan saldo kartu kredit atau dompet elektronik, lalu berasumsi bahwa salinan permainan tersebut telah resmi menjadi aset milik pribadi untuk dinikmati selamanya.

Namun, kenyataan pahit meledak ketika Ubisoft secara sepihak mematikan server game balap online *The Crew*, lalu melangkah lebih jauh dengan mencabut lisensi game tersebut dari akun pengguna sehingga permainan sama sekali tidak bisa diluncurkan lagi—bahkan bagi mereka yang telah membayar lunas seharga jutaan rupiah.

Insiden ini bukan anomali tunggal, melainkan sinyal alarm paling gamblang: di era serba unduh ini, konsumen tidak pernah benar-benar membeli game, melainkan hanya menyewa lisensi sementara yang bisa diputus sepihak oleh korporasi kapan saja.

## Retorika 'Beli' yang Menyesatkan Konsumen

Jika Anda membaca berkas Perjanjian Lisensi Pengguna Akhir (*End User License Agreement* / EULA) berukuran puluhan halaman dengan teliti, klausul hukumnya sangat tegas: Anda tidak membeli salinan perangkat lunak, melainkan hanya izin pakai terbatas yang tidak dapat dipindahtangankan dan dapat dibatalkan sewaktu-waktu atas diskresi tunggal pemilik platform.

Ketimpangan hukum ini memicu frustrasi massal akibat kontras yang sangat mencolok:

* **Pemasaran vs Legalitas**: Etalase digital menggunakan kata kerja aktif "Beli", "Miliki", atau "Tambahkan ke Pustaka Anda", alih-alih bahasa yang jujur seperti "Sewa Akses Digital Tanpa Jaminan Masa Depan".
* **Matinya Hak Jual Kembali**: Game fisik dapat dipinjamkan ke kerabat, disumbangkan, atau dijual kembali di pasar barang bekas (*secondhand market*). Lisensi digital terkunci rapat pada identitas akun tunggal dan akan musnah seketika jika akun tersebut terkena sanksi sepihak.
* **Ketergantungan Server Otentikasi**: Game berbasis narasi tunggal (*single-player*) kini semakin sering dipasangi kewajiban otentikasi internet berkala (*always-online DRM*). Begitu server otentikasi dimatikan demi efisiensi biaya korporasi, game yang telah dibeli lunas langsung berubah menjadi file sampah yang tidak berguna.

## Gelombang Tuntutan Regulasi dan Transparansi

Kemarahan gamer atas tindakan sewenang-wenang Ubisoft memicu inisiatif advokasi konsumen berskala global seperti kampanye *Stop Killing Games*. Petisi ini menuntut parlemen di Uni Eropa, Inggris, dan berbagai yurisdiksi internasional untuk mewajibkan penerbit game menyediakan patch luring (*offline mode*) atau merilis berkas peladen mandiri (*dedicated server tools*) sebelum mematikan infrastruktur daring sebuah game komersial.

Di California, regulator bahkan mulai meloloskan regulasi yang mewajibkan platform digital mencantumkan label peringatan jelas jika tombol transaksi tidak memberikan kepemilikan aset permanen kepada konsumen. Konsumen berhak mengetahui sejak detik pertama bahwa uang yang mereka bayarkan hanyalah biaya tiket masuk temporer ke taman hiburan digital milik korporasi.

## Menuntut Martabat Hak Konsumen Digital

Jika korporasi penerbit game bersikeras menyatakan bahwa membeli game tidak sama dengan memiliki game, maka konsumen berhak menyimpulkan konsekuensi logis di sisi sebaliknya: mengunduh dan memainkan salinan preservasi komunitas tidak boleh lagi dikriminalisasi sebagai bentuk pencurian.

Kita tidak boleh membiarkan sejarah dan budaya interaktif lenyap begitu saja di bawah kendali sepihak dewan direksi perusahaan. Menuntut perlindungan hukum atas kepemilikan barang digital bukan sekadar memperjuangkan hobi bermain game, melainkan membentengi hak-hak paling mendasar konsumen di era ekonomi serba langganan.`
  },
  {
    title: "Loudness War di Era Streaming: Mengapa Musik Pop Modern Kehilangan Dinamika dan Melelahkan Telinga",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Audio", "Mastering", "Spotify", "Produksi Musik", "Sound Engineering"],
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Konsol mixer rekaman profesional dengan fader dan tombol kontrol audio di studio musik",
    excerpt: "Kompresi volume ekstrem demi merebut atensi instan di telinga pendengar earphone murah mengorbankan dinamika instrumen. Bukannya terdengar megah, rentetan lagu pop modern justru memicu kelelahan akustik hanya setelah beberapa menit diputar.",
    content: `Pernahkah Anda menyadari bahwa mendengarkan sepuluh lagu teratas di tangga lagu populer hari ini terasa jauh lebih melelahkan daripada mendengarkan satu album penuh rekaman klasik dari era 1970-an atau 1980-an? Volume suaranya memang terdengar sangat bertenaga, dentuman bass menonjol sejak detik pertama, dan vokal penyanyi terasa berada persis di depan daun telinga.

Namun, sensasi kemegahan tersebut kerap hanya bertahan singkat. Setelah lima belas menit menyusuri daftar putar (*playlist*) kurasi algoritma, telinga mulai terasa letih, ritme musik terdengar seragam, dan kita merasa terdorong untuk segera melepas earphone. 

Fenomena ini adalah buntut panjang dari perang kelantangan suara (*Loudness War*) yang kini bermutasi ke babak baru di ekosistem platform streaming digital.

## Anatomi Loudness War: Mengorbankan Dinamika demi Kekerasan

Dalam dunia rekayasa tata suara (*sound engineering*), musik bernapas melalui apa yang disebut rentang dinamis (*dynamic range*): perbedaan rasio antara bagian instrumen yang terdengar paling pelan (seperti desah vokal atau petikan senar gitar lembut) dengan bagian yang berdentum paling keras (seperti tabuhan drum dan klimaks paduan suara). Dinamika inilah yang memberikan emosi, dimensi spasial, dan ruang gerak bagi instrumen musik untuk beresonansi secara alami.

Sejak era cakram padat (CD) pada dekade 1990-an, para produser rekaman terjebak dalam perlombaan senjata: meyakini bahwa rekaman yang terdengar paling keras di radio atau pemutar portabel akan lebih cepat memikat telinga pendengar awam. 

Untuk mendongkrak tingkat kekerasan rata-rata (*RMS / LUFS*), para teknisi mastering menggunakan kompresor dinamis dan limiter ekstrem. Puncak-puncak gelombang suara dipangkas rata layaknya dinding bata (*brickwall limiting*). 

Dampaknya merusak struktur artistik rekaman:

* **Kematian Ruang Spasial**: Ketika semua elemen instrumen dinaikkan ke level volume maksimum secara konstan, tidak ada lagi kontras antara bagian hening yang syahdu dan bagian ledakan emosional.
* **Distorsi Akustik Halus**: Pemotongan puncak gelombang suara menghasilkan harmonik distorsi buatan yang secara tidak sadar membebani membran gendang telinga.
* **Kelelahan Telinga (*Ear Fatigue*)**: Otak manusia membutuhkan variasi amplitudo suara untuk beristirahat. Paparan audio dengan tingkat kompresi ekstrem tanpa jeda dinamika memaksa sistem saraf pendengaran bekerja dalam tegangan konstan.

## Janji Semu Normalisasi Algoritma Streaming

Ketika platform streaming seperti Spotify, Apple Music, dan YouTube memperkenalkan fitur normalisasi volume otomatis (*loudness normalization*), banyak pihak berharap era perang kelantangan suara akan berakhir. Logikanya sederhana: algoritma platform akan secara otomatis menurunkan volume trek yang terlalu keras agar seimbang di kisaran patokan -14 LUFS.

Namun, industri produksi komersial menolak menyerah begitu saja. Alih-alih merilis materi mastering yang lebih dinamis dan bernapas lapang, banyak produser rekaman pop justru melipatgandakan teknik kompresi multi-band agresif. Tujuannya adalah memastikan energi musik tetap terdengar meninju dan menonjol saat didengarkan melalui pengeras suara ponsel pintar tanpa speaker bass atau earphone nirkabel kelas murah.

Hasilnya adalah musik pop yang dirancang untuk sekadar mencuri atensi sepuluh detik pertama sebelum pengguna menggeser layar (*swipe*), bukan karya komposisi yang dirancang untuk diresapi secara mendalam.

## Menemukan Kembali Kejernihan dan Keindahan Bunyi

Musik adalah bahasa getaran yang menuntut kedalaman rasa, bukan komoditas sonik yang harus diteriakkan sekeras mungkin ke lubang telinga. Penikmat musik yang cerdas kini mulai menyadari nilai dari rekaman yang dirawat dinamikanya.

Kebangkitan minat terhadap perangkat audio berkualitas tinggi (*audiophile*), adopsi format audio resolusi tinggi (*lossless*), hingga apresiasi terhadap rilisan piringan hitam menegaskan kerinduan publik terhadap kehangatan suara alami. 

Sudah saatnya industri musik keluar dari perangkap kompetisi volume hampa. Memberikan ruang bagi musik untuk bernapas, berbisik pelan, dan meledak pada saat yang tepat adalah penghormatan tertinggi bagi keindahan seni pendengaran manusia.`
  }
];

async function main() {
  console.log("=== MEMULAI BATCH AUTO-PUBLISH TUJUHCAHAYA (JADWAL 19:30 WIB / TIAP 30 MENIT) ===");
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

  console.log("\n=== SELURUH BATCH 19:30 BERHASIL DIPUBLIKASIKAN ===");
}

main().catch(err => {
  console.error("Batch Error:", err);
  process.exit(1);
});
