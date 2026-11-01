import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

const articles = [
  {
    title: "Fenomena Enshittification Platform Digital: Mengapa Layanan Favorit Kita Selalu Berakhir Memuakkan dan Memeras Pengguna",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Platform Digital", "Monetisasi", "Internet", "Media Sosial", "Bisnis Digital"],
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Gedung pencakar langit berteknologi tinggi dengan siluet jaringan kabel optik dan data",
    excerpt: "Awalnya memanjakan pengguna dengan fitur gratis dan tanpa iklan, lalu memikat para kreator, hingga akhirnya memeras keduanya demi dividen pemegang saham. Inilah siklus pembusukan platform modern yang tak terelakkan.",
    content: `Setiap pengguna internet kawakan pasti pernah merasakan kepedihan yang sama: menyaksikan aplikasi atau layanan daring kesayangan perlahan bermutasi menjadi ruang yang menyebalkan. Aplikasi yang dulunya ringan, bersih, dan berfokus melayani kebutuhan komunitas mendadak dijejali iklan bertubi-tubi, algoritma linimasa yang dipaksakan, serta fitur berbayar yang mengunci fungsi-fungsi mendasar.

Kondisi ini bukan kebetulan teknis belaka, melainkan konsekuensi logis dari model bisnis korporasi teknologi yang dirangkum oleh penulis Cory Doctorow dalam istilah *enshittification* (pembusukan platform). Ini adalah siklus hidup sistemik yang hampir selalu dilewati oleh raksasa teknologi berstatus semi-monopoli.

## Tiga Babak Siklus Pembusukan Platform

Menurut Doctorow, degradasi sebuah platform digital bekerja melalui tiga fase yang sangat terstruktur dan dingin:

* **Fase Pertama: Memanjakan Pengguna Biasa**: Pada tahap awal, platform membakar uang modal ventura (*venture capital*) untuk memberikan pengalaman terbaik tanpa pamrih. Layanan disajikan gratis, antarmuka bersih tanpa gangguan iklan, dan nilai utilitas dimaksimalkan demi menarik basis pengguna sebesar mungkin.
* **Fase Kedua: Memikat Para Mitra dan Kreator Bisnis**: Setelah pengguna terkunci dalam efek jaringan (*network effect*) dan mustahil berpindah ke aplikasi lain, platform mulai mengalihkan keuntungan kepada para kreator konten dan pedagang. Jangkauan organik dibuka lebar, komisi dibuat murah, dan analitik dibagikan gratis agar ekosistem bisnis bergantung sepenuhnya pada mereka.
* **Fase Ketiga: Memeras Semua Pihak demi Pemegang Saham**: Ketika pengguna dan pelaku bisnis tidak lagi memiliki alternatif tempat bernaung, platform menarik kembali seluruh nilai tambah tersebut. Linimasa dipenuhi konten sponsor, algoritma membatasi jangkauan organik agar kreator membayar biaya promosi, dan biaya langganan dinaikkan berulang kali. Segala nilai surplus dikeruk habis demi memuaskan target dividen kuartalan investor di bursa saham.

## Jebakan Dinding Taman (*Walled Garden*)

Mengapa pengguna tidak langsung angkat kaki ketika sebuah platform mulai membusuk? Jawabannya terletak pada arsitektur taman berdinding tinggi yang sengaja dirancang tanpa interoperabilitas. 

Jika Anda ingin meninggalkan sebuah platform media sosial raksasa, Anda tidak bisa membawa serta daftar pengikut, arsip percakapan, atau jaringan relasi kerja Anda ke platform kompetitor. Biaya sosial untuk memulai dari nol di tempat baru terlalu mahal bagi kebanyakan orang. Keterisolasian data inilah yang dijadikan sandera oleh manajemen platform untuk terus menekan kenyamanan pengguna tanpa takut kehilangan pangsa pasar secara massal.

Fenomena serupa melanda mesin pencari global terpopuler. Halaman pertama hasil pencarian yang satu dekade lalu berisi tautan rujukan organik paling kredibel, kini didominasi oleh deretan blok sponsor komersial, cuplikan ringkasan mesin otomatis, serta situs web yang lihai memanipulasi kata kunci alih-alih menyajikan informasi bermutu.

## Menuntut Kembalinya Protokol Terbuka

Siklus pembusukan platform membuktikan bahwa mempercayakan ruang publik digital kepada entitas korporasi yang digerakkan semata-mata oleh pertumbuhan tanpa batas adalah sebuah kesalahan struktural. Solusi jangka panjang tidak bisa hanya mengandalkan himbauan moral kepada dewan direksi platform.

Masa depan internet yang sehat menuntut kebangkitan protokol terbuka (*open protocols*) dan regulasi interoperabilitas yang ketat. Pengguna harus memiliki hak hukum untuk mengekspor grafik sosial mereka secara instan dan berkomunikasi lintas platform tanpa batasan pagar kepemilikan. 

Hanya dengan merobohkan monopoli penguncian data, platform digital akan dipaksa berkompetisi secara jujur: menyajikan perangkat lunak yang menghormati martabat penggunanya, bukan menjadikannya komoditas perahan yang tak berdaya.`
  },
  {
    title: "Krisis Konservasi Game Digital: Ketika Game Seharga Jutaan Rupiah Lenyap Selamanya Saat Server Dimatikan",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Industri Game", "Preservasi Game", "Always Online", "DRM", "Hak Konsumen"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Koleksi konsol game retro dan tumpukan kaset game fisik di atas meja kayu",
    excerpt: "Membeli game digital pada era modern sejatinya bukan membeli kepemilikan karya, melainkan sewa lisensi temporer. Ketika penerbit mencabut dukungan server, ratusan jam progres dan uang jutaan rupiah menguap seketika.",
    content: `Jika Anda membeli sebuah buku fisik, piringan hitam, atau kaset game retro dari tiga dekade lalu, karya-karya tersebut masih dapat Anda nikmati hari ini tanpa memerlukan izin dari penciptanya. Benda tersebut sepenuhnya menjadi milik pribadi Anda. Anda bisa meminjamkannya kepada sahabat, mewariskannya kepada anak cucu, atau menyimpannya sebagai bagian dari memori personal.

Namun, dunia video game modern telah bergeser ke realitas hukum yang sangat timpang. Membeli game berlabel harga satu juta rupiah di etalase toko digital masa kini sesungguhnya tidak memberikan Anda hak kepemilikan sejati atas karya tersebut. Anda sekadar membayar biaya sewa atas lisensi perangkat lunak yang sifatnya temporer dan dapat dicabut sepihak kapan saja oleh pihak penerbit (*publisher*).

Kerapuhan status kepemilikan ini berubah menjadi tragedi nyata ketika tren kewajiban koneksi internet konstan (*always-online DRM*) disematkan bahkan pada mode permainan pemain tunggal (*single-player*).

## Ketika Judul Bersejarah Menjadi Tumpukan Bita Mati

Dalam beberapa tahun terakhir, komunitas gamer internasional dikejutkan oleh gelombang pemadaman server secara massal terhadap deretan judul game populer. Salah satu kasus paling mencolok terjadi ketika sebuah game balap dunia terbuka berskala besar dimatikan server autentikasinya oleh sang penerbit raksasa. 

Dampaknya sangat fatal: cakram fisik dan berkas data digital yang tersimpan di ruang penyimpanan pemain seketika berubah menjadi tumpukan bita tak bernyawa. Meskipun pemain hanya ingin berkendara santai secara mandiri tanpa terhubung dengan pemain lain, game tersebut menolak berjalan karena gagal menghubungi server pusat yang telah ditutup.

Fenomena penghancuran karya ini memicu ancaman serius bagi sejarah kebudayaan digital:

* **Kematian Akses Permanen**: Ratusan karya seni interaktif yang digarap oleh ribuan desainer grafis dan penulis naskah lenyap dari peradaban manusia hanya karena biaya sewa server dianggap tidak lagi menguntungkan neraca korporat.
* **Perampasan Hak Milik Konsumen**: Konsumen yang telah membayar lunas harga penuh diperlakukan layaknya penyewa kamar hotel yang diusir paksa di tengah malam tanpa pengembalian dana sepeser pun.
* **Kriminalisasi Inisiatif Preservasi**: Komunitas pengarsip game independen yang berupaya merekayasa balik (*reverse engineering*) server lokal demi menyelamatkan game tua kerap diancam tuntutan hukum pelanggaran hak cipta oleh korporasi.

## Gerakan Global Menolak Pembunuhan Game

Kesadaran akan ketidakadilan struktural ini melahirkan perlawanan terorganisir dari jutaan gamer di berbagai belahan dunia. Inisiatif seperti gerakan *Stop Killing Games* mulai menuntut parlemen di Uni Eropa dan lembaga perlindungan konsumen internasional untuk merevisi regulasi perdagangan digital.

Tuntutan yang disuarakan sangat masuk akal dan adil bagi kedua belah pihak: penerbit game tidak diwajibkan untuk menanggung biaya pemeliharaan server daring selamanya, tetapi ketika mereka memutuskan untuk menghentikan dukungan resmi, mereka berkewajiban merilis berkas pembaruan penutup (*end-of-life patch*). 

Pembaruan tersebut memungkinkan game untuk dijalankan secara offline mandiri atau memberikan akses bagi komunitas penggemar untuk mendirikan server lokal pribadi (*custom dedicated servers*).

## Menghargai Game Sebagai Warisan Budaya

Video game bukan sekadar komoditas perangkat lunak layaknya aplikasi lembar kerja kantor. Ia adalah medium seni interaktif abad ke-21 yang merangkum estetika audio visual, pencapaian arsitektur kode komputer, serta ekspresi naratif zaman.

Membiarkan sebuah karya seni interaktif lenyap begitu saja atas nama efisiensi laba kuartalan adalah bentuk vandalisme kebudayaan modern. Sudah saatnya ekosistem industri game beralih dari arogansi lisensi sepihak menuju penghormatan tulus atas hak konsumen dan kelestarian sejarah digital.`
  },
  {
    title: "Matinya Durasi Lagu 4 Menit: Bagaimana Algoritma Video Pendek Memangkas Intro dan Struktur Musik Pop",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Industri Musik", "Streaming", "TikTok", "Komposisi Musik", "Audio"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Mikrofon studio rekaman klasik dengan latar belakang mixer audio profesional",
    excerpt: "Intro gitar yang syahdu dan bait jembatan yang emosional kian langka di tangga lagu global. Demi memikat algoritma video vertikal dan metrik streaming, lagu modern dipaksa menyajikan hook dalam hitungan detik pertama.",
    content: `Dengarkan kembali rekaman lagu-lagu pop legendaris dari dekade 1970-an hingga 1990-an. Anda akan dengan mudah menemukan komposisi yang meluangkan waktu tiga puluh detik pertama hanya untuk membangun suasana melalui petikan instrumen pembuka (*intro*), gesekan biola atmosferik, atau dentuman bassline perlahan sebelum bait vokal pertama terdengar.

Kini, coba putar sepuluh lagu teratas di tangga lagu platform streaming global hari ini. Dalam tempo tiga hingga lima detik pertama, vokal utama langsung meledak menyanyikan penggalan nada inti (*hook*). Durasi total trek lagu yang dulunya berkisar antara tiga setengah hingga empat menit, kini terpangkas drastis menjadi hanya dua menit lima belas detik.

Perubahan drastis ini bukan lahir dari eksplorasi artistik musisi secara murni, melainkan respons tunduk industri rekaman terhadap dua kekuatan penentu di ruang digital: formula pembayaran royalti platform streaming dan algoritma video vertikal berkecepatan tinggi.

## Anatomi Pemangkasan Komposisi Modern

Dalam ekosistem platform streaming audio terkemuka, sebuah putaran lagu (*stream*) hanya dihitung menghasilkan royalti jika pendengar mendengarkannya minimal selama tiga puluh detik. Sementara itu, di platform video pendek seperti TikTok dan Instagram Reels, rentang atensi pengguna untuk menentukan apakah mereka akan menonton atau menggeser layar (*swipe away*) hanya berlangsung kurang dari tiga detik.

Kombinasi metrik dingin ini merombak total anatomi penulisan lagu di ruang studio rekaman:

* **Peniadaan Intro Musik**: Bagian pembuka instrumental dianggap sebagai beban yang memicu kebosanan pendengar kasual. Akibatnya, intro dihilangkan sepenuhnya agar vokal langsung menyapa telinga sebelum detik kelima.
* **Kematian Bagian Bridge**: Struktur komposisi klasik yang mengandalkan bait jembatan emosional (*bridge*) untuk menghubungkan reff kedua menuju puncak lagu kini hampir lenyap, demi memangkas durasi lagu di bawah dua setengah menit.
* **Percepatan Tempo dan Pola Nada Melingkar (*Looping*)**: Komposisi dirancang sengaja mengulang-ulang melodi adiktif yang pas dipadukan dengan format video vertikal lima belas detik, sehingga memicu tren kreasi konten di media sosial.

## Ekonomi Kuantitas Menggeser Kedalaman Jiwa

Secara matematis, memproduksi lagu-lagu berdurasi pendek memberikan keuntungan finansial yang jauh lebih besar bagi label rekaman komersial. Jika seorang pengguna mendengarkan album berisi lagu-lagu berdurasi dua menit selama satu jam, platform akan mencatatkan tiga puluh kali pemutaran lagu yang menghasilkan royalti. Sebaliknya, jika album tersebut memuat lagu-lagu berdurasi empat menit, jumlah pemutaran yang tercatat hanya separuhnya.

Pola insentif ekonomi ini mendistorsi proses kreasi musik menjadi pabrik komoditas sonik cepat saji. Para penulis lagu berbakat tidak lagi didorong untuk mengeksplorasi modulasi nada yang kompleks atau membangun dinamika emosi yang perlahan membuncah; mereka dituntut menjadi perakit umpan melodi instan demi memburu metrik viralitas kilat.

Banyak musisi bahkan mulai merilis dua versi lagu secara bersamaan di etalase digital: versi standar dan versi yang sengaja dipercepat (*sped-up version*) demi memenuhi selera konsumsi konten audio instan di linimasa.

## Mengembalikan Martabat Seni Mendengarkan

Musik pada hakikatnya adalah seni mengolah waktu dan ruang keheningan. Dinamika sebuah komposisi membutuhkan kesabaran untuk berkembang: membiarkan ketukan drum masuk perlahan, memberi ruang bagi solo instrumen untuk bernarasi, serta mengizinkan pendengar tenggelam dalam nuansa rasa yang utuh.

Ketika sebuah lagu direduksi sekadar menjadi potongan audio latar belakang berdurasi lima belas detik, ikatan batin yang mendalam antara pendengar dan karya seni tereduksi menjadi stimulasi dopamin dangkal yang lekas terlupakan.

Menolak tirani durasi instan menuntut keberanian dari para musisi untuk kembali memercayai kekuatan bercerita. Para pendengar sejati tidak membutuhkan lagu yang melolong panik di detik pertama; kita merindukan karya yang berani bernapas dengan tenang dan meninggalkan jejak rasa abadi di dalam relung jiwa.`
  },
  {
    title: "Mitos Kacamata Anti Radiasi: Mengapa Lensa Blue-Light Gagal Menyelamatkan Mata Lelah di Depan Monitor",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Kesehatan Mata", "Ergonomi", "Work From Home", "Layar Monitor", "Gaya Hidup"],
    imageUrl: "https://images.unsplash.com/photo-1591076482161-42ce6da69f68?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Sepasang kacamata berbingkai tipis diletakkan di depan layar monitor laptop yang menyala",
    excerpt: "Membeli kacamata berfilter cahaya biru sering dianggap sebagai investasi penyelamat mata dari paparan layar harian. Padahal, riset oftalmologi membuktikan pemicu utama kelelahan bukanlah spektrum warna, melainkan ritme kedipan.",
    content: `Bagi para pekerja profesional, programer, maupun kreator konten yang menghabiskan delapan hingga dua belas jam sehari menatap layar monitor komputer, keluhan mata perih, kering, buram, dan sakit kepala berdenyut adalah makanan sehari-hari. Industri kacamata komersial dengan cepat menangkap kecemasan ini dengan menawarkan solusi instan yang sangat populer: kacamata berfilter cahaya biru (*blue-light blocking glasses*).

Dengan embel-embel "kacamata anti radiasi komputer", jutaan orang rela mengeluarkan dana ratusan ribu hingga jutaan rupiah demi membeli sepasang lensa berlapis filter kuning tipis tersebut. Harapannya jelas: agar mata terbebas dari siksaan lelah dan tetap segar meskipun bekerja maraton menatap monitor hingga larut malam.

Namun, tinjauan ilmiah sistematis dari berbagai asosiasi kedokteran mata internasional—termasuk *American Academy of Ophthalmology* (AAO) dan riset klinis *Cochrane Review*—mengungkap kesimpulan yang mengejutkan: tidak ada bukti medis yang solid bahwa kacamata filter cahaya biru mampu mengurangi kelelahan mata akibat penggunaan komputer.

## Biang Keladi Sebenarnya: Mata Lupa Berkedip

Penyebab utama dari sindrom kelelahan mata digital (*Digital Eye Strain* atau *Computer Vision Syndrome*) bukanlah radiasi berbahaya dari panel layar LED modern. Tingkat radiasi cahaya biru yang dipancarkan oleh layar monitor komputer dan ponsel pintar sesungguhnya jauh lebih rendah dibandingkan paparan cahaya biru alami dari sinar matahari luar ruangan di siang hari.

Masalah sesungguhnya berakar pada biomekanik visual kita sendiri saat memusatkan pandangan:

* **Penurunan Frekuensi Kedipan Secara Drastis**: Dalam kondisi santai normal, mata manusia berkedip sekitar 15 hingga 18 kali per menit untuk menyebarkan lapisan air mata pelindung (*tear film*). Namun ketika mata terpaku membaca teks atau memindai kode di layar komputer, frekuensi kedipan merosot tajam menjadi hanya 5 sampai 7 kali per menit.
* **Penguapan Lapisan Kornea**: Berkurangnya kedipan membuat permukaan kornea mengering dan terpapar udara AC kantor secara konstan, memicu sensasi perih, berpasir, dan pandangan yang mendadak kabur.
* **Kram Otot Akomodasi Mata**: Mempertahankan fokus visual pada jarak konstan yang sama (sekitar 50–60 cm dari layar) selama berjam-jam memaksa otot siliaris di dalam bola mata terus berkontraksi tanpa relaksasi, memicu ketegangan saraf di area pelipis kepala.

## Mengapa Kacamata Blue-Light Masih Memberikan Efek Nyaman?

Jika memang secara medis tidak terbukti menangkal kelelahan mata, mengapa banyak pengguna kacamata ini mengaku merasa matanya lebih nyaman?

Fenomena ini sebagian besar didorong oleh dua faktor psikologis dan optis: efek plasebo yang kuat serta sedikit penurunan tingkat silau (*glare*) dari lapisan anti-refleksi standar yang menyertai lensa tersebut, bukan karena pemblokiran spektrum warna birunya itu sendiri. 

Satu-satunya peran positif cahaya biru yang terbukti secara biologis adalah pengaruhnya terhadap ritme sirkadian tubuh. Paparan cahaya terang di malam hari memang dapat menekan produksi hormon melatonin yang mengatur tidur, sehingga membatasi penggunaan layar menjelang jam istirahat malam tetap merupakan anjuran kesehatan yang valid.

## Kebiasaan Nyata yang Efektif Melindungi Penglihatan

Daripada menggantungkan keselamatan mata pada aksesori kacamata mahal, para dokter spesialis mata menyarankan penerapan protokol ergonomi visual yang terbukti secara klinis:

* **Terapkan Rumus 20-20-20 Secara Disiplin**: Setiap 20 menit menatap layar monitor, alihkan pandangan mata Anda ke objek yang berjarak minimal 20 kaki (sekitar 6 meter) selama 20 detik penuh. Kebiasaan sederhana ini melemaskan otot siliaris mata yang tegang.
* **Latihan Berkedip Sadar (*Blink Training*)**: Pasang pengingat visual kecil di bingkai monitor untuk mengingatkan Anda mengedipkan mata secara penuh dan teratur agar kornea tetap terhidrasi.
* **Gunakan Obat Tetes Air Mata Buatan (*Artificial Tears*)**: Jika ruangan kerja ber-AC membuat mata terasa kering dan panas, gunakan tetes mata pelumas bebas pengawet untuk memulihkan kelembapan permukaan bola mata.
* **Atur Kontras dan Posisi Layar**: Pastikan posisi bagian atas layar monitor sejajar atau sedikit di bawah garis horizontal mata, dengan jarak minimal satu rentangan lengan penuh, serta hindari pencahayaan ruangan yang menimbulkan pantulan silau tajam di permukaan layar.

Kesehatan organ penglihatan kita adalah aset biologis yang tak tergantikan. Memahami cara kerja mata secara ilmiah jauh lebih berharga daripada terpukau oleh klaim pemasaran produk yang menutupi kebiasaan kerja yang keliru.`
  }
];

async function main() {
  console.log("=== MEMULAI BATCH AUTO-PUBLISH TUJUHCAHAYA (JADWAL 21:30 WIB / TIAP 30 MENIT) ===");
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

  console.log("\n=== SELURUH BATCH 21:30 BERHASIL DIPUBLIKASIKAN ===");
}

main().catch(err => {
  console.error("Batch Error:", err);
  process.exit(1);
});
