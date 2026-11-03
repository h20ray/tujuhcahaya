import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Monopoli Format Gambar WebP dan AVIF: Mengapa JPEG Klasik Masih Sulit Ditumbangkan di Ekosistem Digital",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Web Standards", "JPEG", "WebP", "AVIF", "Kompresi Gambar"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Matriks kode biner dan data digital berpendar di layar komputer",
    excerpt: "Raksasa internet mendesak transisi ke format gambar baru seperti WebP dan AVIF demi efisiensi server. Namun keterbatasan kompatibilitas dan hak paten membuat format JPEG berusia tiga puluh tahun tetap tak tergantikan.",
    content: `Setiap kali Anda mencoba mengunduh gambar referensi dari peramban internet hari ini, ada kemungkinan besar file tersebut tidak lagi berformat JPG atau PNG konvensional, melainkan berakhiran WebP atau AVIF. Ketika Anda mencoba membuka file tersebut di aplikasi editor grafis lawas atau mengunggahnya ke formulir administrasi instansi, sistem kerap menolak dengan pesan galat format tidak didukung.

Format-format gambar modern ini lahir dari inisiatif korporasi teknologi global untuk memangkas ukuran bita file hingga tiga puluh persen lebih kecil demi menghemat pita data (*bandwidth*) dan beban komputasi server periklanan mereka. Di atas kertas tolok ukur algoritma kompresi, format baru ini memang unggul telak. Namun di dunia nyata, transisi paksa tersebut menciptakan gesekan interoperabilitas yang mengorbankan kenyamanan jutaan pengguna biasa.

## Friksi Kompatibilitas dan Fragmentasi Ekosistem

Dominasi standar gambar baru menyimpan kompleksitas teknis yang jarang diungkap ke publik:

* **Beban Komputasi Dekode pada Perangkat Tua**: Format AVIF menggunakan algoritma kompresi video AV1 yang sangat rumit. Pada laptop lama atau smartphone kelas pemula yang tidak memiliki akselerasi perangkat keras khusus, membuka halaman web yang dipenuhi gambar AVIF memicu lonjakan penggunaan prosesor dan membuat baterai cepat panas.
* **Perangkap Pembatasan Hak Cipta dan Paten Lisensi**: Format gambar bebas seperti PNG dan JPEG telah melewati masa perlindungan paten selama puluhan tahun sehingga benar-benar menjadi milik publik dunia. Sebaliknya, konsorsium di balik format baru kerap memuat klausul hak kekayaan intelektual yang sewaktu-waktu dapat dimonetisasi oleh pemegang paten.
* **Kerumitan Alur Kerja Desainer dan Fotografer**: Fotografer profesional masih mengandalkan format JPEG sebagai standar penyerahan karya karena dapat dibuka di komputer mana pun tanpa memerlukan instalasi plugin tambahan. Memaksa konversi gambar bolak-balik justru memicu penurunan ketajaman piksel (*generation loss*).

## Menghargai Ketahanan Standar Terbuka Abadi

Teknologi terbaik bukanlah teknologi yang paling canggih di atas kertas laboratorium, melainkan teknologi yang paling dapat diandalkan oleh masyarakat luas dalam segala kondisi. JPEG telah membuktikan ketangguhannya selama lebih dari tiga dekade melintasi revolusi sistem operasi dan perangkat keras.

Pengembang situs web harus bijak dalam menyajikan format gambar: sediakan opsi fallback JPEG yang transparan dan hormati kebebasan pengguna untuk menyimpan data visual dalam format yang universal.`
  },
  {
    title: "Obsesi Skala Dunia Terbuka Tanpa Jiwa: Mengapa Area Peta Padat Jauh Lebih Memikat daripada Ratusan Kilometer Kosong",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Level Design", "Open World", "Desain Game", "Industri Game", "Eksplorasi"],
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pemandangan pegunungan luas berkabut yang menyerupai hamparan lanskap petualangan game",
    excerpt: "Perlombaan memamerkan peta ratusan kilometer persegi terbukti menjadi bumerang bagi game modern. Pemain menghabiskan waktu melintasi ruang hampa tanpa interaksi, merindukan kembalinya desain level padat bertingkat yang bernyawa.",
    content: `Dalam setiap siaran pengumuman game petualangan dunia terbuka (*open-world*), klaim luas peta geografis selalu menjadi sorotan utama presentasi. Angka ratusan mil persegi dipamerkan dengan bangga, disandingkan dengan perbandingan luas kota nyata untuk meyakinkan gamer bahwa mereka sedang membeli dunia virtual paling kolosal yang pernah diciptakan manusia.

Namun ada jurang kekecewaan yang menganga begitu pemain menjelajahi hamparan peta raksasa tersebut. Membutuhkan waktu lima belas menit waktu nyata hanya untuk menunggang kuda atau mengendarai mobil virtual melintasi padang rumput kosong dan hutan buatan tanpa ada peristiwa naratif yang menarik. Skala geografis yang masif tersebut hanyalah ilusi kemegahan yang menutupi kekosongan substansi interaksi.

## Bencana Desain Ruang Hampa yang Melelahkan

Pengejaran kuantitas luas lahan virtual merusak aspek paling vital dari seni merancang level permainan (*level design*):

* **Kematian Keunikan Setiap Jengkal Lingkungan**: Ketika tim pengembang dipaksa mengisi benua virtual seluas ratusan kilometer, mereka terpaksa menggunakan algoritma pembuatan lingkungan otomatis (*procedural generation*). Hasilnya adalah deretan bukit, pohon, dan bebatuan yang tampak identik di setiap sudut, melenyapkan sensasi orientasi spasial alami pemain.
* **Ketergantungan Menjengkelkan pada Titik Perjalanan Cepat (*Fast Travel*)**: Ketika dunia game dirancang terlalu luas dan membosankan untuk dijelajahi dengan berjalan kaki, pemain akhirnya menghabiskan separuh waktu bermain menatap layar pemuatan (*loading screen*) sistem perjalanan cepat, membuktikan kegagalan mendasar dari konsep eksplorasi dunia terbuka itu sendiri.
* **Keunggulan Desain Ruang Padat Bertingkat**: Bandingkan hal itu dengan game yang membatasi areanya hanya pada satu distrik kota kecil atau kompleks kastil tua, namun merancangnya secara vertikal dengan lorong-lorong rahasia berlapis, pintu pintas yang saling terhubung, dan karakter non-pemain dengan kepribadian unik. Kepadatan makna di setiap meter ruang inilah yang melahirkan imersi petualangan sejati.

## Mengembalikan Martabat Keintiman Desain Level

Kemegahan sebuah karya fiksi interaktif tidak diukur dari angka kilometer persegi yang tertera pada lembar promosi, melainkan dari kedalaman kenangan yang tertinggal di benak pemain. Sepetak gang sempit yang sarat misteri jauh lebih berharga daripada sepuluh gurun pasir tak berujung yang dingin dan bisu.

Pengembang game harus memiliki keberanian untuk mengecilkan skala peta dan memfokuskan energi kreatif pada kualitas detail interaksi. Kembalikan keajaiban petualangan ke ruang-ruang yang bernyawa.`
  },
  {
    title: "Kutukan Makan Siang Sambil Menatap Layar: Bagaimana Distraksi Visual Memicu Gangguan Pencernaan dan Obesitas Tersembunyi",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Nutrisi", "Pencernaan", "Mindful Eating", "Gaya Hidup", "Ergonomi"],
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Meja kerja minimalis dengan secangkir kopi dan laptop di tengah suasana hening",
    excerpt: "Menyantap bekal makan siang di meja kerja sambil menonton video atau membaca dokumen kerja telah menjadi rutinitas harian jutaan pekerja. Namun distraksi visual mengacaukan fase sefalik pencernaan dan memicu kembung kronis.",
    content: `Waktu istirahat makan siang tiba di perkantoran modern, namun pemandangan di meja kerja praktis tidak berubah: laptop tetap menyala menampilkan lembar kerja atau video hiburan berdurasi panjang, sementara tangan kanan memegang sendok dan garpu menyuapkan makanan ke mulut secara mekanis tanpa pandangan mata pernah berpaling dari layar.

Bagi banyak pekerja profesional, makan siang sembari menatap layar (*screen-side dining*) dipandang sebagai cara efisien untuk menghemat waktu atau sarana melepas penat di tengah padatnya beban tugas. Namun dari perspektif gastroenterologi dan neurofisiologi pencernaan, kebiasaan menelan makanan tanpa kesadaran penuh adalah sabotase biologis yang mengacaukan mekanisme metabolisme tubuh secara mendasar.

## Pembajakan Fase Sefalik dan Keterlambatan Respon Kenyang

Proses pencernaan manusia tidak dimulai di dalam lambung, melainkan di dalam persepsi visual dan olfaktori otak:

* **Kelumpuhan Fase Sefalik Pencernaan**: Ketika kita mencium aroma hidangan dan mengamati tekstur makanan secara sadar, otak mengirimkan sinyal melalui saraf vagus untuk memicu produksi air liur berenzim amilase dan asam lambung (*fase sefalik*). Saat perhatian visual tersedot sepenuhnya ke layar komputer, sinyal saraf ini terhambat, menyebabkan makanan mendarat di lambung yang belum siap mencerna secara optimal.
* **Kegagalan Sinyal Hormon Kenyang Leptin**: Dibutuhkan waktu sekitar dua puluh menit bagi hormon leptin dan kolesistokinin (*CCK*) untuk mengalir dari dinding usus menuju hipotalamus otak guna menyampaikan pesan rasa kenyang. Distraksi visual yang intens menumpulkan kepekaan otak terhadap sinyal biologis ini, memicu konsumsi kalori berlebih tanpa rasa kenyang yang memuaskan.
* **Perut Kembung dan Gejala Dispepsia Fungsional**: Mengunyah makanan secara terburu-buru sembari menatap layar membuat seseorang menelan banyak udara (*aerofagi*) dan menelan gumpalan makanan yang belum lumat sempurna, memicu fermentasi bakteri berlebih di usus yang berujung pada rasa begah, kram perut, dan refluks asam lambung.

## Menyelamatkan Kesakralan Meja Makan

Mengembalikan kesehatan sistem pencernaan tidak menuntut menu diet yang mahal, melainkan menghormati ritual makan dengan kesadaran penuh (*mindful eating*):

1. **Tinggalkan Meja Kerja Saat Makan**: Beranjaklah dari depan monitor laptop dan nikmati hidangan Anda di ruang istirahat khusus, kantin, atau luar ruangan tanpa membawa gadget.
2. **Fokus pada Panca Indra Makanan**: Amati warna sayuran, kunyah perlahan minimal dua puluh kali per suapan, dan rasakan perpaduan bumbu rempah secara berkesadaran.
3. **Beri Jeda Lima Belas Menit**: Setelah suapan terakhir selesai, duduklah santai selama sepuluh hingga lima belas menit sebelum kembali berhadapan dengan papan ketik dan layar kerja.

Makanan adalah sumber energi kehidupan yang menopang seluruh kerja akal budi Anda. Berikan tubuh Anda penghormatan yang layak dengan menikmati setiap kunyahan tanpa distraksi piksel digital.`
  },
  {
    title: "Kematian Nada Dinamika dalam Produksi Musik: Mengapa Loudness War Abad Streaming Masih Memekakkan Telinga",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Loudness War", "Audio Engineering", "Mastering", "Kompresi", "Dinamika"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Mikrofon studio rekaman profesional dengan latar belakang panel akustik",
    excerpt: "Meskipun platform streaming menerapkan normalisasi volume otomatis, produser rekaman masih terobsesi mengompresi audio hingga batas ekstrem. Pelenyapan kontras dinamika melahirkan dinding suara padat yang melelahkan gendang telinga.",
    content: `Pernahkah Anda merasa sangat lelah dan pening setelah mendengarkan lima atau enam lagu pop baru berturut-turut melalui headphone dengan volume sedang? Bukan karena Anda tidak menyukai lagunya, melainkan karena gendang telinga Anda baru saja dihujani oleh tekanan gelombang suara yang dikompresi tanpa henti dari detik pertama hingga akhir lagu.

Fenomena kelelahan telinga (*listener fatigue*) ini adalah buah dari perang volume suara (*Loudness War*) yang telah meracuni industri rekaman musik selama tiga dekade terakhir. Di era keemasan compact disc pada dekade 1990-an, label rekaman berlomba-lomba membuat lagu mereka terdengar paling keras di radio mobil dengan cara memangkas puncak gelombang audio (*transients*) menggunakan perangkat pembatas sinyal (*brickwall limiter*). Gelombang suara yang dulunya memiliki lembah dan puncak dinamis yang indah dipangkas rata menjadi balok persegi panjang yang padat tanpa celah udara.

## Mitos Keras Lebih Baik di Bawah Normalisasi Algoritma

Ironisnya, di era platform streaming modern yang menerapkan sistem penyesuaian volume otomatis (*loudness normalization*), obsesi kompresi ekstrem ini sesungguhnya sudah tidak memiliki manfaat teknis sepeser pun:

* **Hukuman Pelemahan Volume oleh Platform**: Platform streaming seperti Spotify dan Apple Music memindai tingkat kenyaringan terintegrasi (*LUFS*) dari setiap lagu. Lagu yang di-mastering terlalu keras akan diturunkan volumenya secara otomatis agar sejajar dengan lagu lain, membuat rekaman yang terkompresi ekstrem justru terdengar lebih tipis dan lemah dibanding lagu dengan dinamika utuh.
* **Pelenyapan Pukulan Ritme yang Bertenaga**: Pukulan drum snare dan hentakan bas drum mengandalkan lonjakan energi sesaat (*transient punch*) untuk menggerakkan udara fisik di telinga pendengar. Ketika limiter memotong lonjakan ini demi mengejar volume rata-rata yang tinggi, hentakan ritme kehilangan kekuatannya, berganti menjadi bunyi letupan tumpul yang datar.
* **Kematian Ruang Bernapas Emosional**: Keindahan sebuah komposisi musik dibangun di atas kontras: bagian intro yang berbisik sunyi membuat ledakan emosi di bagian refrain terdengar megah dan menggetarkan dada. Menghilangkan kontras tersebut membuat seluruh lagu terdengar datar layaknya deru mesin pesawat tanpa jiwa.

## Mengembalikan Hak Telinga untuk Bernapas

Karya seni audio yang abadi tidak pernah memaksakan diri untuk memekakkan gendang telinga pendengarnya. Musik yang agung adalah gelombang yang mengalir dinamis—kadang membelai dengan kelembutan piano solo, kadang menghentak dengan dentuman orkestra penuh, memberi ruang bagi telinga manusia untuk meresapi setiap getaran rasa.

Para teknisi mastering dan produser musik independen harus berani mematikan plugin kompresor yang berlebihan. Berikan kembali ruang dinamika pada hasil rekaman, karena musik yang hidup selalu membutuhkan udara untuk bernapas dengan bebas.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 13:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

    // 2. Publish (Local SQLite & Outbox JSON, remote: false while network upstream restores)
    console.log(`Mempublikasikan ke Local DB SQLite & Outbox JSON...`);
    const res = await autoPublishPost(art, { remote: false });
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

  console.log("\n=== SELURUH BATCH 13:00 WIB BERHASIL DISIMPAN KE LOCAL DB & OUTBOX ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-1300.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
