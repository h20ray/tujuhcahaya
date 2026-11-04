import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Ancaman Quishing di Ruang Publik: Mengapa Stiker QR Code Palsu pada Meja Pembayaran Diam-diam Membelokkan Transaksi dan Mencuri Sesi Digital",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Keamanan Siber", "Quishing", "QR Code", "Pembayaran Digital", "Phishing"],
    imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pengunjung memindai kode QR pembayaran digital menggunakan kamera smartphone di kafe modern",
    excerpt: "Kepraktisan memindai kode QR di meja kafe dan loket parkir menyimpan celah keamanan berbahaya bernama quishing. Penyerang menempelkan stiker manipulasi fisik yang mengarahkan peramban korban ke portal perbankan tiruan untuk merampas kredensial dan sesi otorisasi transaksi.",
    content: `Kepraktisan memindai kode batang dua dimensi alias QR code telah merevolusi ekosistem pembayaran nirkontak di berbagai sudut kota. Mulai dari gerai kopi lokal, loket pembayaran parkir otomatis, hingga tagihan meja restoran, konsumen kini terbiasa mengarahkan kamera smartphone untuk menyelesaikan transaksi dalam hitungan detik. Kecepatan transfer dana dan kemudahan tanpa sentuh ini dipandang sebagai puncak modernisasi sistem keuangan mikro.

Namun di balik kenyamanan tersebut, tersimpan titik buta krusial dalam keamanan siber yang dikenal dengan istilah *quishing* (*QR phishing*). Berbeda dengan tautan teks konvensional yang memungkinkan pengguna awam mengeja keabsahan nama domain sebelum mengkliknya, QR code pada dasarnya adalah kotak matriks piksel hitam-putih yang mustahil diuraikan maknanya oleh mata telanjang manusia. Celah visual inilah yang dieksploitasi oleh pelaku kejahatan untuk menyisipkan alamat web berbahaya tepat di bawah hidung korban.

## Anatomi Serangan Quishing dan Pembajakan Sesi Finansial

Serangan manipulasi QR code memanfaatkan kombinasi infiltrasi dunia nyata dan rekayasa digital yang rapi:

* **Penempelan Stiker Fisik Berlapis (*Adhesive Overlay Attack*)**: Pelaku tidak perlu meretas sistem perbankan pusat yang memiliki enkripsi ketat. Mereka cukup mencetak stiker kode QR palsu berkualitas tinggi lalu menempelkannya menutupi kode QR resmi milik gerai pedagang di meja kafe atau mesin tiket parkir. Ketika pengunjung yang terburu-buru memindai kode tersebut, kamera ponsel langsung membuka laman web jebakan tanpa disadari oleh pengelola toko.
* **Pengelabuan Tautan Berkedok Pembaruan Sesi (*Session Gateway Cloaking*)**: Tautan hasil pemindaian sering kali tidak langsung meminta kata sandi secara mencurigakan. Korban diarahkan ke antarmuka tiruan yang sangat identik dengan gateway pembayaran bank atau dompet digital ternama, lengkap dengan logo resmi dan protokol SSL hijau. Laman ini memunculkan dalih "sesi pembayaran Anda kedaluwarsa, silakan konfirmasi nomor ponsel dan kode verifikasi Anda".
* **Pencurian Cookie Sesi dan Pembelokan Otorisasi Transaksi**: Begitu korban memasukkan kredensial login atau kode otentikasi di laman palsu tersebut, penyerang di balik layar langsung mencegat token sesi (*session cookies*) secara langsung. Dalam hitungan detik, saldo transaksi bukan berpindah ke rekening pedagang, melainkan dialihkan menuju rekening penampung milik sindikat penipu.

## Langkah Mitigasi Bertransaksi Nirkontak dengan Aman

Membangun benteng pertahanan terhadap manipulasi kode respon cepat menuntut kewaspadaan ganda, baik fisik maupun digital:

1. **Periksa Integritas Fisik Permukaan Stiker Kode QR**: Sebelum mengarahkan lensa kamera smartphone, raba permukaan stiker kode QR di meja pembayaran atau kasir. Waspadai jika Anda merasakan tonjolan stiker ganda, bekas tempelan baru yang tidak rapi, atau sudut kertas yang mengelupas. Jika ragu, mintalah konfirmasi langsung kepada petugas kasir mengenai keaslian papan kode pembayaran tersebut.
2. **Gunakan Aplikasi Pemindai yang Menampilkan URL Lengkap Sebelum Membuka**: Nonaktifkan fitur peramban smartphone yang otomatis membuka tautan web tanpa konfirmasi pengguna. Gunakan aplikasi pemindai yang menyajikan pratinjau alamat web lengkap terlebih dahulu. Periksa apakah domain yang tertera benar-benar domain resmi penyedia jasa pembayaran, bukan domain aneh dengan susunan huruf membingungkan (*typosquatting*).
3. **Aktifkan Verifikasi Biometrik Tambahan untuk Setiap Pemindahan Dana**: Pastikan aplikasi perbankan digital dan dompet digital Anda mewajibkan pemindaian sidik jari atau pengenalan wajah sebelum mengeksekusi transfer keluar. Kunci proteksi ini mencegah skrip pencuri sesi menguras saldo Anda secara otomatis saat peramban diarahkan ke portal tak dikenal.

Teknologi pembayaran nirkontak dirancang untuk mempermudah hidup, bukan menumpulkan kewaspadaan naluriah kita terhadap rekayasa penipuan modern.`
  },
  {
    title: "Kutukan Sistem Level Scaling pada Game RPG: Ketika Musuh yang Selalu Mengikuti Kekuatan Karakter Menghancurkan Sensasi Progresi Pemain",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Desain Game", "RPG", "Level Scaling", "Mekanik Game", "Industri Game"],
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pemain game memegang kontroler konsol di depan layar televisi yang menampilkan karakter petualangan RPG",
    excerpt: "Niat baik pengembang menghadirkan tantangan konstan lewat mekanisme level scaling sering kali berbuah bumerang. Ketika bandit jalanan biasa menjadi sekuat naga purba hanya karena level pemain naik, sensasi progresi kerja keras dan kepuasan menjadi kuat seketika musnah.",
    content: `Daya pikat paling magis dari sebuah game bermain peran (*Role-Playing Game* atau RPG) berakar pada sensasi pertumbuhan karakter yang nyata. Pemain memulai petualangan sebagai sosok petarung biasa yang kaku, bersenjatakan pedang tumpul berkarat, dan kerap kocar-kacir saat disergap gerombolan serigala hutan. Namun setelah mengorbankan puluhan jam menjelajahi ruang bawah tanah yang berbahaya, menumpas monster ganas, serta meramu zirah legendaris, pemain merasakan kepuasan luar biasa saat karakter mereka bermetamorfosis menjadi sosok pahlawan tangguh yang ditakuti musuh.

Momen kepuasan sejati terjadi ketika pemain kembali ke desa permulaan dan mampu menumbangkan bandit pengganggu hanya dengan sekali tebasan pedang. Kontras kekuatan inilah yang menjadi imbalan emosional atas investasi waktu dan dedikasi grinding pemain. Sayangnya, banyak pengembang game modern memilih jalan pintas dengan menanamkan sistem penyesuaian level dinamis (*level scaling*) secara agresif di seluruh penjuru dunia game. Mekanisme yang berniat menjaga intensitas pertempuran ini justru sering kali menjadi racun yang melumpuhkan esensi petualangan RPG.

## Dampak Perusakan Siklus Progresi Akibat Penyesuaian Level Otomatis

Penerapan *level scaling* tanpa batas menciptakan anomali desain yang merusak logika dunia dan kenyamanan pemain:

* **Matinya Sensasi Daya Pukul dan Hadiah Kerja Keras (*Ludonarrative Dissonance*)**: Ketika pemain mencapai level 50 dengan persenjataan magis dewa, mereka terkejut mendapati tikus selokan dan perampok miskin di pinggir jalan kini mengenakan baju besi termahal dan membutuhkan puluhan pukulan untuk dikalahkan. Alih-alih merasa perkasa, pemain merasa bahwa kenaikan level karakter hanyalah ilusi angka yang tidak memberikan dampak nyata pada dominasi pertempuran.
* **Munculnya Paradoks Anti-Peningkatan Level (*Anti-Levelling Paradox*)**: Pada sejumlah game dengan kalkulasi *level scaling* yang cacat, menaikkan level karakter justru membuat permainan menjadi jauh lebih sulit. Musuh mendapatkan peningkatan poin nyawa (*HP*) dan daya hancur (*damage*) secara eksponensial, sementara peningkatan statistik karakter pemain terbagi ke berbagai atribut utilitas. Akibatnya, strategi paling optimal justru menahan diri agar tidak naik level—sebuah ironi besar dalam genre RPG.
* **Homogenisasi Bahaya yang Membunuh Eksplorasi Organik**: Tanpa zona dengan level tetap, dunia game kehilangan rasa gentar dan ketegangan. Tidak ada lagi wilayah angker terlarang yang menantang nyali pemain untuk menyelinap dan mencuri peti harta karun langka di luar batas kemampuan mereka. Setiap sudut peta terasa sama hambar dan seragam karena musuh selalu disesuaikan dengan statistik pemain saat ini.

## Merancang Sistem Tantangan yang Menghormati Investasi Waktu Pemain

Menjaga keseimbangan antara tantangan yang memikat dan rasa progresi menuntut pendekatan desain bertingkat:

1. **Terapkan Pembatasan Level Berbasis Wilayah Geografis (*Regional Level Caps*)**: Biarkan monster di wilayah awal memiliki batas level maksimal tertentu, misalnya level 15. Sementara area pegunungan terjal atau reruntuhan purba memiliki batas bawah level 40. Pola ini memberi ruang bagi pemain pemula untuk merasakan bahaya nyata di alam liar, sekaligus menikmati kepuasan dominasi ketika kembali ke kampung halaman setelah menjadi kesatria perkasa.
2. **Tingkatkan Kompleksitas Taktik AI Musuh, Bukan Sekadar Menebalkan Poin Darah**: Jadikan monster tingkat tinggi lebih menantang melalui variasi pola serangan, koordinasi kelompok yang cerdas, dan penggunaan sihir taktis. Menggandakan cadangan nyawa musuh hanya menciptakan pertarungan spons peluru (*bullet sponge*) yang melelahkan tanpa memberikan kepuasan adu strategi.
3. **Hadirkan Bos Opsional di Luar Jalur Utama Sebagai Tolok Ukur Kemampuan**: Sediakan sarang naga atau arena petarung legendaris yang sengaja dirancang berkali-kali lipat lebih kuat dari level pemain rata-rata. Menghadirkan ujian ekstrem yang membutuhkan perencanaan matang, ramuan terbaik, dan penguasaan mekanik mendalam jauh lebih dihargai komunitas pemain daripada mengubah seluruh musuh kroco menjadi monster raksasa secara seragam.

Game petualangan yang memikat adalah game yang mempercayai kecerdasan pemainnya, bukan game yang takut membiarkan pemainnya merasakan manisnya buah kerja keras menjadi sosok yang tangguh.`
  },
  {
    title: "Bahaya Mengonsumsi Suplemen Vitamin D Dosis Tinggi Tanpa Vitamin K2: Mengapa Kalsium Tak Terarah Berisiko Mengendap di Dinding Pembuluh Darah Jantung",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Nutrisi", "Vitamin D3", "Vitamin K2", "Kardiovaskular", "Kalsium"],
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kapsul suplemen vitamin dan nutrisi kesehatan tersusun rapi di atas wadah kaca laboratorium",
    excerpt: "Tren konsumsi suplemen vitamin D dosis megadosis kian marak dipromosikan demi kekebalan tubuh. Namun menenggak vitamin D dalam jumlah masif tanpa pendamping vitamin K2 justru mendorong kalsium salah sasaran, memicu kalsifikasi pembuluh darah dan risiko serangan jantung.",
    content: `Tren konsumsi suplemen kesehatan mandiri mengalami ledakan popularitas yang masif pasca-pandemi. Salah satu primadona nutrisi yang paling banyak diburu dan direkomendasikan di media sosial adalah vitamin D3. Dikenal luas karena perannya yang vital dalam modulasi sistem kekebalan tubuh, kesehatan mental, dan penyerapan mineral tulang, vitamin D kerap diposisikan sebagai ramuan ajaib penangkal berbagai penyakit degeneratif.

Euforia ini sayangnya melahirkan kebiasaan konsumsi yang serampangan. Tanpa konsultasi dokter atau uji laboratorium darah, tidak sedikit masyarakat yang mengonsumsi kapsul vitamin D dosis megadosis antara 5.000 hingga 10.000 IU setiap hari secara berkelanjutan selama berbulan-bulan. Asumsi keliru bahwa "semakin banyak vitamin yang diserap tubuh maka semakin sehat organ kita" menyimpan petaka biologis yang jarang disadari: konsumsi vitamin D berlebih tanpa diimbangi vitamin K2 membuka jalan lebar bagi kalsifikasi pembuluh darah yang mematikan.

## Paradoks Kalsium dan Petaka Kalsifikasi Vaskular

Mekanisme metabolisme kalsium dalam tubuh bertumpu pada sinergi dua hormon dan vitamin yang harus selalu seimbang:

* **Penyerapan Kalsium Berlebih Tanpa Arah Navigasi**: Tugas utama vitamin D di dalam usus halus adalah membuka gerbang penyerapan kalsium dari makanan ke dalam sirkulasi darah. Ketika kadar vitamin D melonjak tinggi, konsentrasi kalsium dalam darah (*hiperkalsemia*) akan melimpah ruah. Namun vitamin D tidak memiliki kemampuan biokimiawi untuk memerintahkan ke mana kalsium tersebut harus dikirimkan.
* **Peran Kunci Vitamin K2 Mengaktifkan Protein Osteokalsin dan MGP**: Di sinilah vitamin K2 (khususnya bentuk *menaquinone-7* atau MK-7) memegang peranan krusial. Vitamin K2 mengaktifkan dua jenis protein penentu: *osteokalsin* yang bertugas mengunci kalsium masuk ke dalam matriks tulang dan gigi, serta *Matrix Gla Protein* (MGP) yang bertindak sebagai pembersih kalsium agar tidak menempel di jaringan lunak. Tanpa K2 yang cukup, protein penjaga ini tetap tidak aktif (*inaktif*).
* **Penimbunan Plak Keras di Dinding Arteri dan Ginjal**: Akibat ketiadaan navigasi dari vitamin K2, kalsium bebas yang bersirkulasi dalam darah akan mengendap di tempat yang salah. Kalsium menempel pada lapisan endotel pembuluh darah arteri koroner, menyebabkan dinding pembuluh darah mengeras dan kehilangan elastisitas alaminya (*arteriosklerosis*). Dalam jangka panjang, kondisi ini memicu penyumbatan jantung dan beban berat pembentukan batu kalsium oksalat pada ginjal.

## Strategi Rasional Memenuhi Vitamin D Tanpa Merusak Jantung

Menjaga kesehatan tulang dan imunitas tanpa mengorbankan sistem kardiovaskular menuntut pendekatan nutrisi yang cerdas:

1. **Selalu Pasangkan Suplementasi Vitamin D3 Bersama Vitamin K2**: Jika Anda memang terbukti mengalami defisiensi vitamin D dan membutuhkan asupan tambahan, pilihlah formula suplemen kombinasi D3 + K2 (MK-7). Vitamin K2 memastikan bahwa setiap miligram kalsium yang diserap berkat bantuan vitamin D diarahkan secara presisi ke dalam struktur tulang, bukan mengotori dinding pembuluh darah Anda.
2. **Lakukan Uji Darah Kadar 25-Hydroxyvitamin D Secara Rutin**: Hindari menebak-nebak kebutuhan tubuh Anda hanya bermodalkan rasa lelah atau tren di media sosial. Lakukan pemeriksaan laboratorium untuk mengukur kadar *25(OH)D* total dalam darah. Rentang optimal bagi kesehatan umumnya berada di kisaran 30 hingga 50 ng/mL. Dosis suplemen harian di atas 4.000 IU wajib berada di bawah pemantauan tenaga medis profesional.
3. **Optimalkan Sumber Alami Melalui Paparan Sinar Matahari dan Pangan Utuh**: Tubuh manusia memiliki sistem pengaman otomatis terhadap sintesis vitamin D dari paparan sinar ultraviolet B (UVB) matahari pagi—tubuh tidak akan mengalami keracunan vitamin D dari sinar surya alami. Kombinasikan berjemur 15 menit dengan pola makan kaya vitamin K2 alami seperti makanan fermentasi kedelai (*natto*), keju fermentasi matang, kuning telur ayam kampung, dan hati sapi.

Kesehatan jangka panjang tidak pernah diraih melalui pintasan dosis ekstrem. Menghormati keseimbangan biokimiawi organ tubuh adalah kunci meraih vitalitas yang kokoh tanpa mengundang bahaya tersembunyi bagi jantung Anda.`
  },
  {
    title: "Tirani Loudness War di Era Algoritma Streaming Musik: Mengapa Pemaksaan Volume Maksimal Menghancurkan Rentang Dinamis dan Mematikan Detil Emosional Lagu",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Produksi Musik", "Loudness War", "Mastering", "Audio", "Streaming Musik"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Konsol mixing audio profesional dengan fader frekuensi dan gelombang suara di ruang studio rekaman",
    excerpt: "Perang volume alias loudness war masih terus menghantui rekaman musik komersial. Ambisi membuat lagu terdengar paling keras di penyuara telinga justru memangkas rentang dinamika akustik, meratakan dentuman drum, dan memicu kelelahan pendengaran telinga penikmat musik.",
    content: `Musik adalah seni yang bernapas melalui ruang kontras antara sunyi dan riuh. Keindahan sebuah komposisi orkestra simfoni, balada syahdu, hingga hentakan musik rock bertenaga tidak semata-mata bertumpu pada seberapa memekakkan puncak bagian reff lagu. Jiwa sebuah rekaman lahir dari dinamika—jarak emosional antara bisikan lembut petikan dawai gitar akustik pada bait pembuka dan dentuman membahana seluruh instrumen saat lagu mencapai klimaks emosi. Dalam dunia rekayasa audio profesional, perbedaan level tekanan suara terlembut dan terkeras ini disebut sebagai rentang dinamika (*dynamic range*).

Namun dalam lanskap industri rekaman modern, keindahan dinamika tersebut kerap dikorbankan demi obsesi sepihak yang dikenal luas sebagai *loudness war* (perang volume). Berawal dari persaingan memperebutkan perhatian pendengar di radio analog pada era 1990-an dan era keemasan compact disc (CD), para produser dan label musik berlomba-lomba membuat rilisan mereka terdengar paling menggelegar saat tombol putar ditekan. Pola pikir destruktif ini ironisnya masih bercokol kuat di meja mixing rekaman digital masa kini.

## Dampak Kerusakan Akustik Akibat Kompresi Ekstrem

Ambisi mengejar desibel maksimal dengan menggunakan peranti pembatas suara dinding bata (*brickwall limiter*) membawa dampak buruk bagi kualitas seni rekaman:

* **Tergerusnya Pukulan Pukulan Transien Perkusi (*Loss of Punch*)**: Pukulan drum snare dan tendangan bass drum (*kick drum*) memiliki puncak lonjakan energi akustik yang sangat singkat (*transient*). Ketika sebuah lagu ditekan secara ekstrem demi mengejar volume konstan yang serba keras, puncak transien ini dipotong rata tanpa ampun. Hasilnya, suara drum kehilangan hentakan fisikal yang menggetarkan dada dan berubah menjadi bunyi letupan tumpul yang pipih.
* **Penalti Penurunan Volume Algoritmik Platform Streaming**: Banyak produser muda tidak menyadari bahwa platform streaming kontemporer seperti Spotify, Apple Music, dan YouTube Music menerapkan sistem normalisasi kenyaringan otomatis (berkisar antara -14 hingga -16 *LUFS*). Lagu yang dimastering terlalu padat dan bising justru akan diturunkan volumenya secara otomatis oleh algoritma platform. Lagu yang volumenya dipaksa keras pun berakhir terdengar lebih kecil dan kempis dibandingkan lagu dengan dinamika sehat yang diberi ruang bernapas.
* **Memicu Kelelahan Akustik pada Telinga Pendengar (*Ear Fatigue*)**: Telinga manusia dirancang secara biologis untuk merespons variasi gelombang suara yang dinamis. Ketika gendang telinga dihantam oleh gelombang suara datar dengan amplitudo maksimal tanpa jeda hening selama tiga menit penuh, otot-otot pendengaran akan mengalami ketegangan konstan. Pendengar akan merasa cepat lelah, jenuh, dan secara bawah sadar terdorong untuk menekan tombol lewati (*skip*) sebelum lagu berakhir.

## Mengembalikan Keanggunan Dinamika Rekaman Musik

Menyelamatkan integritas audio menuntut keberanian para kreator dan penikmat musik untuk menolak tirani volume semu:

1. **Patuhi Standar Target Kenyaringan Terintegrasi Modern (-14 LUFS)**: Hindari memaksakan master rekaman menyentuh angka ekstrem seperti -6 atau -7 LUFS hanya demi kepuasan sesaat di monitor studio. Berikan ruang kepala (*headroom*) yang cukup bagi instrumen musik untuk beresonansi secara alami. Lagu yang mempertahankan rentang dinamika luas akan terdengar jauh lebih megah, bertenaga, dan berwibawa saat diputar di sistem audio resolusi tinggi.
2. **Percayakan Bobot Emosional pada Penataan Aransemen, Bukan Limiter**: Jika bagian reff sebuah lagu terasa kurang bertenaga, perbaikilah komposisi musik, penambahan lapisan instrumen (*layering*), atau otomatisasi volume instrumen secara manual. Mengandalkan kompresor untuk menciptakan ilusi kekuatan adalah kemalasan aransemen yang merusak detail mikro tekstur instrumen.
3. **Apresiasi Format Rilisan Audio Resolusi Tinggi (*Lossless & Hi-Res*)**: Komunitas penikmat musik perlu mulai membiasakan diri mendengarkan rekaman melalui format tanpa kompresi dengan mematikan fitur kompresi volume dinamis di menu pengaturan pemutar musik. Merasakan hembusan napas vokalis dan gemerisik desis senar gitar di tengah ruang dengar yang luas adalah kenikmatan estetika tertinggi yang tidak boleh punah.

Kehebatan sebuah karya musik sejati tidak pernah diukur dari seberapa keras ia mampu memekakkan telinga, melainkan dari seberapa dalam getaran nadanya mampu menyentuh relung sanubari manusia.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 23:00 WIB (4 NOV 2026) - ${articles.length} ARTIKEL ===\n`);
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

  console.log("\n=== SELURUH BATCH 23:00 WIB (4 NOV 2026) BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261104-2300.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
