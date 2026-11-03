import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Kematian Tombol Sakelar Fisik pada Mobil Modern: Mengapa Pemindahan Seluruh Kontrol ke Layar Sentuh Mengancam Keselamatan Pengemudi",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Otomotif", "Layar Sentuh", "Keselamatan Berkendara", "Desain Antarmuka", "Ergonomi"],
    imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kabin mobil modern dengan layar sentuh infotainment besar di konsol tengah dasbor",
    excerpt: "Membungkus dasbor mobil dengan layar sentuh raksasa kerap dipasarkan sebagai simbol kemewahan masa depan. Namun memindahkan tombol fisik pendingin udara dan lampu darurat ke dalam sub-menu digital terbukti memperpanjang waktu lepas pandang pengemudi dari jalan raya.",
    content: `Proses masuk ke kabin kendaraan roda empat keluaran terbaru kini terasa layaknya melangkah ke dalam kokpit simulator penerbangan. Konsol tengah yang dahulu dipenuhi jajaran tombol kenop putar dan sakelar mekanis kini disapu bersih, digantikan oleh bentangan panel kaca layar sentuh berukuran belasan inci. Dari pengaturan suhu pendingin kabin (*AC*), volume audio, pembuka laci sarung tangan, hingga aktivasi lampu hazard, seluruh interaksi dipaksa berpindah ke balik lapisan kaca datar.

Produsen otomotif dengan bangga menjual perubahan arsitektur interior ini sebagai lambang kecanggihan desain minimalis dan kemewahan modern. Namun di balik kilau panel kaca tersebut, ada motif pemangkasan biaya manufaktur yang diselubungi estetika: memasang satu panel layar sentuh jauh lebih murah ketimbang merancang, memproduksi, dan merakit puluhan sakelar mekanis kabel individual. Harga murah bagi pabrikan ini sayangnya harus ditebus dengan lonjakan risiko kecelakaan fatal bagi pengendara di jalan raya.

## Bahaya Kehilangan Memori Otot dan Umpan Balik Taktil

Mengoperasikan antarmuka layar sentuh saat kendaraan melaju dengan kecepatan tinggi merusak prinsip dasar ergonomi berkendara:

* **Erosi Umpan Balik Kinestetik (*Muscle Memory*)**: Pada tombol fisik klasik, seorang pengemudi dapat mengulurkan tangan dan memutar kenop suhu atau menyalakan pemanas kaca tanpa perlu mengalihkan pandangan dari kaca depan. Jari manusia mengandalkan tekstur fisik dan klik mekanis sebagai konfirmasi tindakan. Pada layar kaca yang licin, ketiadaan kontur fisik memaksa mata pengemudi menatap langsung ke panel untuk memastikan titik sentuhan tepat sasaran.
* **Jebakan Lapisan Sub-Menu Digital**: Demi menjaga tampilan layar tetap rapi, fungsi-fungsi krusial sering kali disembunyikan di balik dua atau tiga lapis menu perangkat lunak. Ketika kaca depan mendadak berembun di tengah guyuran hujan lebat, mencari ikon *defogger* di dalam layar sentuh yang rumit memakan waktu beberapa detik yang sangat krusial.
* **Lonjakan Distraksi Waktu Lepas Pandang (*Eyes-off-Road Time*)**: Berbagai riset keselamatan transportasi independen mencatat bahwa waktu reaksi pengemudi saat menavigasi menu layar sentuh mobil lebih lambat daripada reaksi pengemudi yang berada di bawah pengaruh alkohol ringan. Melaju pada kecepatan delapan puluh kilometer per jam, pengalihan fokus selama tiga detik berarti kendaraan meluncur buta sejauh lebih dari enam puluh meter.

## Mengembalikan Martabat Kendali Mekanis

Tekanan publik dan lembaga uji keselamatan internasional kini mulai memaksa industri otomotif memikirkan ulang obsesi digitalisasi berlebih:

1. **Dukung Standar Regulasi Euro NCAP**: Lembaga keselamatan kendaraan terkemuka Euro NCAP telah menetapkan pedoman baru yang mewajibkan tombol fisik mandiri untuk lima fungsi krusial—lampu sein, lampu hazard, klakson, bilah penghapus kaca, dan panggilan darurat—sebagai syarat mutlak meraih peringkat keselamatan lima bintang.
2. **Prioritaskan Kendali Kenop Fisik Saat Memilih Kendaraan**: Konsumen cerdas patut mempertimbangkan mobil yang masih mempertahankan keseimbangan antara layar navigasi dan sakelar fisik untuk fungsi harian, ketimbang tergiur estetika layar penuh yang merepotkan.
3. **Manfaatkan Tombol Pintas Roda Kemudi**: Bila mobil Anda sudah terlanjur mengadopsi kontrol terpusat layar sentuh, biasakan memaksimalkan tombol kontrol fisik pada setir kemudi untuk meminimalkan gerakan tangan ke arah konsol tengah.

Kabin mobil adalah ruang operasional mesin seberat dua ton yang bergerak cepat, bukan ruang santai untuk berselancar di tablet. Jangan biarkan ilusi modernitas produsen otomotif merampas kendali taktil yang terbukti menyelamatkan nyawa di atas aspal.`
  },
  {
    title: "Tirani FOMO Battle Pass Musiman: Bagaimana Game Modern Mengubah Waktu Santai Menjadi Kewajiban Kerja Shift Kedua",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Monetisasi Game", "Battle Pass", "FOMO", "Psikologi Game", "Industri Game"],
    imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pengendali game konsol menyala dengan latar monitor menampilkan antarmuka grafis permainan aksi",
    excerpt: "Membeli tiket musim kompetisi kerap dianggap sebagai cara adil mendukung pengembang game. Namun mekanisme batas waktu kedaluwarsa dan misi harian yang menumpuk diam-diam mengeksploitasi rasa takut tertinggal, menyulap hobi bermain game menjadi beban pekerjaan tambahan tanpa gaji.",
    content: `Setelah seharian berkutat dengan rutinitas kantor yang menguras tenaga, menyalakan konsol atau komputer untuk bermain video game seharusnya menjadi ruang jeda katarsis paling menyenangkan. Kita ingin menjelajahi dunia fantasi baru, mengasah refleks bersama sahabat karib, atau sekadar menikmati cerita fiksi interaktif dengan tempo santai.

Namun pada ekosistem game multipemain modern berlabel *free-to-play*, ruang santai tersebut telah berubah wujud menjadi lingkungan kerja kedua yang menuntut presensi ketat. Begitu Anda membayar tiket musiman (*battle pass*), hitung mundur waktu kedaluwarsa seketika berdetik di sudut kanan atas layar: "Musim Berakhir dalam 45 Hari". Sejak detik itu, hak bermain Anda disandera oleh daftar tugas harian (*daily quests*) yang harus diselesaikan agar uang yang Anda keluarkan tidak lenyap sia-sia.

## Eksploitasi Psikologis di Balik Skema Berbatas Waktu

Struktur monetisasi battle pass dirancang dengan membedah kelemahan kognitif manusia secara cermat:

* **Manipulasi Ketakutan Kehilangan (*Loss Aversion*)**: Berbeda dengan transaksi konvensional di mana pembeli langsung menerima barang secara instan, battle pass hanya menjual "hak untuk bekerja keras mengejar barang". Karena pemain merasa telah menginvestasikan uang nyata di awal, mereka merasa bersalah bila tidak membuka seluruh seratus tingkatan hadiah kostum karakter, memicu sindrom *sunk cost fallacy*.
* **Erosi Kebebasan Gaya Bermain**: Desain misi musiman kerap mendikte tindakan pemain secara mikro: "Bunuh dua puluh musuh menggunakan senjata shotgun di area tertentu" atau "Login selama tujuh hari berturut-turut". Pemain tidak lagi bebas bermain demi kesenangan murni, melainkan terpaksa menjalankan serangkaian rutinitas mekanis yang repetitif layaknya mengisi lembar absensi pabrik.
* **Perangkap Pembayaran Jalan Pintas (*Tier Skips*)**: Ketika batas akhir musim tinggal menghitung hari sementara level pemain masih tertinggal, penerbit dengan lihai menawarkan opsi membeli level secara instan dengan mata uang premium. Ini adalah strategi bisnis yang menciptakan masalah buatan berupa kelangkaan waktu, lalu menjual solusinya dengan harga mahal.

## Mengambil Kembali Kedaulatan Waktu Luang

Menikmati hobi game menuntut keberanian pemain untuk menarik garis batas tegas terhadap manipulasi retensi:

1. **Karantina Pembelian Tiket Musiman Berbatas Waktu**: Jangan membeli battle pass di hari pertama sebuah musim dibuka. Mainkan game tersebut murni sesuai dorongan minat Anda; beli tiket musiman hanya di pengujung periode bila level permainan Anda memang telah tercapai secara alami.
2. **Apresiasi Sistem Musim Abadi (*Non-Expiring Passes*)**: Berikan dukungan komunitas kepada judul game progresif yang menerapkan sistem battle pass tanpa tanggal kedaluwarsa, di mana konten yang telah dibeli tetap dapat dibuka kapan pun tanpa teror batas waktu kalender.
3. **Pilih Game Pemain Tunggal (*Single-Player*) yang Menghargai Waktu**: Luangkan waktu mencicipi game naratif atau karya indie berkualitas yang tamat secara utuh dalam hitungan belasan jam tanpa menuntut kewajiban login harian.

Waktu luang Anda adalah aset paling berharga setelah lelah mengarungi dunia nyata. Jangan biarkan algoritma korporasi game mengubah hobi pelepasan stres Anda menjadi beban kerja shift kedua yang memeras energi batin.`
  },
  {
    title: "Bahaya Menahan Bersin dengan Menutup Hidung dan Mulut: Mengapa Lonjakan Tekanan Udara Mampu Memicu Pecahnya Gendang Telinga",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "THT", "Tekanan Udara", "Bersin", "Fisiologi Tubuh", "Pencegahan Medis"],
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seorang tenaga medis profesional memeriksa saluran telinga dan pernapasan dengan alat otoskop",
    excerpt: "Memencet hidung dan mengatupkan bibir rapat-rapat saat hendak bersin kerap dianggap sebagai etika kesopanan di ruang rapat. Namun menahan refleks pelepasan udara berkecepatan ratusan kilometer per jam ini menciptakan gelombang kejut internal yang sanggup merobek membran timpani telinga.",
    content: `Di tengah keheningan ruang rapat kantor yang formal, di dalam gerbong kereta yang padat, atau di tengah ruangan perpustakaan yang sunyi, dorongan menggelitik di dalam rongga hidung mendadak muncul tanpa aba-aba. Karena merasa canggung atau takut dianggap tidak sopan bila mengeluarkan suara ledakan bersin yang menggelegar, reaksi spontan banyak orang adalah menjepit batang hidung dengan ibu jari dan telunjuk sambil mengatupkan bibir rapat-rapat.

Suara bersin memang berhasil diredam menjadi letupan kecil yang tak terdengar orang lain. Namun dari perspektif anatomi telinga, hidung, dan tenggorokan (*THT*), tindakan menahan bersin dengan memblokir saluran napas adalah manuver fisiologis yang sangat berbahaya. Udara yang seharusnya tersembur keluar dengan kecepatan tinggi terperangkap di dalam kepala, menciptakan lonjakan tekanan eksplosif yang mengancam struktur organ vital di sekitarnya.

## Gelombang Kejut di Ruang Faring dan Tuba Eustachius

Bersin adalah mekanisme pertahanan alami tubuh untuk membersihkan saluran pernapasan dari partikel debu, alergen, atau bakteri patogen:

* **Lonjakan Tekanan Udara Ekstrem**: Udara bersin yang terlontar secara bebas dapat mencapai kecepatan hingga seratus enam puluh kilometer per jam. Saat kedua lubang hidung dan mulut ditutup bersamaan, tekanan udara di dalam rongga nasofaring melonjak hingga dua puluh sampai tiga puluh kali lipat lebih tinggi dibandingkan bersin normal.
* **Robeknya Membran Gendang Telinga (*Tympanic Perforation*)**: Udara bertekanan dahsyat yang tersumbat mencari jalan keluar termudah melalui saluran tuba eustachius yang menghubungkan bagian belakang hidung ke telinga tengah. Hantaman gelombang kejut ini dapat seketika merobek lapisan tipis gendang telinga, memicu pendarahan, dengung parah (*tinnitus*), hingga gangguan pendengaran mendadak.
* **Risiko Emfisema dan Pecahnya Pembuluh Darah Mikro**: Pada kasus-kasus klinis ekstrem yang tercatat dalam literatur medis, penahanan bersin yang dipaksakan sanggup merobek jaringan lunak di dinding belakang tenggorokan (*pharyngeal rupture*), merusak pembuluh darah kapiler di selaput mata, hingga menyusupkan gelembung udara ke jaringan leher dan rongga dada (*pneumomediastinum*).

## Menghadapi Refleks Bersin dengan Aman dan Higienis

Etika bersin yang beradab tidak boleh mengorbankan keselamatan organ tubuh Anda sendiri:

1. **Lepaskan Udara Bersin Tanpa Menutup Lubang Napas**: Biarkan udara bertekanan tinggi keluar melalui mulut dan hidung secara leluasa tanpa ada hambatan mekanis pada kedua saluran pernapasan tersebut.
2. **Terapkan Etika Lipatan Siku Dalam**: Hindari menutupi mulut menggunakan telapak tangan karena kuman akan mudah berpindah ke gagang pintu atau ponsel; tutupi hidung dan mulut Anda dengan bagian dalam lipatan siku lengan atau selembar tisu bersih.
3. **Redakan Rangsangan Geli di Pangkal Hidung**: Bila Anda berada dalam situasi hening di mana bersin sangat tidak diinginkan, Anda dapat mencoba menekan kuat langit-langit mulut dengan lidah atau menggosok pelan area filtrum di atas bibir atas untuk memutus sinyal saraf trigeminal sebelum refleks bersin terpicu.

Tubuh manusia merancang refleks bersin sebagai katup penyelamat darurat untuk menjaga kemurnian paru-paru. Dengarkan peringatan biologis tersebut dan biarkan udara keluar tanpa rasa malu, demi menjaga keutuhan gendang telinga dan pembuluh darah kepala Anda.`
  },
  {
    title: "Krisis Kepunahan Toko Rilisan Fisik Independen: Ketika Budaya Mengulik Rak Musik Digantikan Gulir Layar Algoritma",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Rilisan Fisik", "Toko Musik", "Piringan Hitam", "Kurasi Musik", "Budaya Audio"],
    imageUrl: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Tumpukan piringan hitam vinil vintage di dalam rak kayu toko musik independen",
    excerpt: "Berjam-jam mengotori jari membolak-balik sampul piringan hitam di toko rilisan fisik dahulu adalah ritus pencarian musik paling sakral. Kini ketika jutaan lagu tersaji instan di layar ponsel, kematian gerai musik mandiri mengikis keajaiban perjumpaan artistik yang tak disengaja.",
    content: `Bagi generasi pencinta audio yang tumbuh sebelum era komputasi awan mendominasi peradaban, aroma khas kertas karton tua dan debu vinil di dalam toko musik independen adalah aroma kebebasan. Kegiatan menelusuri deretan peti kayu berisi piringan hitam, kaset pita, atau kepingan cakram padat—yang di kalangan penggemar dikenal sebagai tradisi *crate digging*—merupakan petualangan artistik yang menyita waktu akhir pekan dari siang hingga petang.

Di lorong-lorong toko yang sempit tersebut, kita kerap menemukan album luar biasa dari band antah berantah hanya karena terpikat oleh lukisan sampulnya yang eksentrik, atau karena membaca tulisan tangan sang pemilik toko yang merekomendasikan musisi tersebut pada stiker kecil di sudut plastik pelindung. Interaksi tatap muka, rekomendasi hangat antar-kolektor, dan kegembiraan meraba artefak fisik menjadikan toko musik bukan sekadar tempat transaksi niaga, melainkan suaka kebudayaan komunitas alternatif.

## Monokultur Rasa di Balik Filter Gelembung Algoritmik

Kematian massal toko rilisan fisik independen di berbagai kota besar menyingkap biaya kultural mahal dari era serba praktis:

* **Hilangnya Keajaiban Perjumpaan Tak Sengaja (*Serendipity*)**: Platform streaming musik memanjakan pengguna dengan puluhan juta lagu dalam genggaman saku. Namun algoritma kurasi digital dirancang untuk memprediksi kecenderungan selera Anda secara matematis, menyajikan lagu-lagu yang terdengar mirip dengan apa yang biasa Anda putar. Akibatnya, pendengar terkurung di dalam gelembung selera (*echo chamber*) yang monoton tanpa pernah terpapar kejutan sonik lintas genre.
* **Reduksi Karya Seni Menjadi Komoditas Latar Belakang**: Ketika musik diakses sebagai aliran data tanpa batas, nilai penghargaan terhadap sebuah album utuh terkikis tajam. Sampul seni visual yang megah, catatan lirik (*liner notes*) yang puitis, dan nama musisi pendukung di balik layar lenyap tak berbekas, menyisakan deretan berkas audio tanpa wujud fisik yang diperlakukan layaknya derau peneman tidur.
* **Hancurnya Ruang Komunitas Subkultur Lokal**: Toko musik independen adalah simpul pertemuan penting bagi generasi muda lintas profesi untuk saling bertukar gagasan, membentuk band baru, atau mengorganisasi pertunjukan swadaya. Runtuhnya ruang-ruang fisik ini memecah komunitas pecinta musik menjadi entitas individu terisolasi yang hanya berinteraksi melalui kolom komentar media sosial.

## Menghidupkan Kembali Denyut Apresiasi Musik Nyata

Menjaga ekosistem seni audio menuntut tindakan nyata untuk merawat simpul-simpul komunitas fisik yang tersisa:

1. **Kunjungi dan Belanjalah di Toko Musik Independen Terdekat**: Luangkan waktu mengunjungi gerai rilisan fisik lokal di kota Anda; belilah setidaknya satu kaset, CD, atau vinil dari musisi lokal independen untuk memastikan gerai tersebut mampu bertahan di tengah tekanan biaya sewa kota.
2. **Dengarkan Musik dengan Ritual Apresiasi Penuh**: Sisihkan satu jam di akhir pekan untuk mendengarkan satu album musik utuh dari lagu pertama hingga penutup tanpa menyentuh layar ponsel pintar, sambil mencermati lembaran sampul fisik yang menyertainya.
3. **Dukung Inisiatif Perayaan Gerai Mandiri (*Record Store Day*)**: Ikut serta dalam gerakan apresiasi rilisan fisik global dan lokal guna menyuarakan bahwa nilai karya musik jauh melampaui tarif bagi hasil recehan dari raksasa platform streaming.

Musik adalah warisan ekspresi jiwa manusia yang memiliki bobot fisik, visual, dan emosional yang utuh. Jangan biarkan toko musik mandiri punah dari sudut jalan kota, karena di sanalah kejujuran kurasi manusiawi tetap bernyawa melawan dinginnya otomasi kode mesin.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 21:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

    // 2. Publish (Local SQLite & Outbox JSON, Remote Production Plesk)
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

  console.log("\n=== SELURUH BATCH 21:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-2100.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
