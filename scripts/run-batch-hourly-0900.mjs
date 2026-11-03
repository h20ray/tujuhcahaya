import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Kebohongan Klaim IP68 dan Kerusakan Air Garam: Mengapa Sertifikasi Kedap Air Menjadi Alibi Produsen Menolak Garansi",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Smartphone", "Sertifikasi IP68", "Garansi", "Hardware", "Konsumen"],
    imageUrl: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Tetesan air membasahi permukaan kaca ponsel pintar modern di tempat uji coba",
    excerpt: "Brosur promosi menampilkan ponsel tercebur ke kolam renang tanpa kendala. Namun ketika perangkat mati total akibat air garam atau klorin, klausul garansi kecil di buku manual langsung menggugurkan hak perbaikan konsumen.",
    content: `Setiap kali peluncuran ponsel pintar kelas menengah ke atas digelar, video promosi resmi hampir selalu menyuguhkan adegan teatrikal yang serupa: seorang pengguna menjatuhkan perangkat ke dalam air, mencucinya di bawah keran mengalir, atau membawanya berenang di tepi kolam dengan senyum tanpa beban. Di pojok layar, logo IP68 dicetak mentereng, memberi ilusi perlindungan absolut bahwa perangkat tersebut kebal terhadap segala bentuk cairan.

Namun coba bawa ponsel berlabel IP68 yang kemasukan air ke pusat layanan resmi (*service center*). Petugas di balik meja akan dengan cepat membongkar bodi belakang, memeriksa stiker indikator kontak cairan (*Liquid Contact Indicator* / LCI) yang telah berubah menjadi merah pekat, lalu menatap Anda dengan penolakan dingin: garansi resmi batal karena kerusakan akibat cairan (*water damage*).

## Jebakan Uji Laboratorium Air Statis

Ketidaksesuaian antara iklan mewah dan kenyataan pahit garansi ini berakar dari manipulasi makna sertifikasi ketahanan air:

* **Standar Laboratorium Air Tawar Statis**: Pengujian sertifikasi IP68 dilakukan di laboratorium tertutup menggunakan air tawar murni dengan suhu stabil dan tanpa arus kinetik. Di dunia nyata, air kolam renang sarat dengan senyawa klorin yang agresif, sementara air laut mengandung mineral garam korosif yang merusak lapisan karet perekat (*gasket*) tahan air dalam hitungan detik.
* **Degradasi Lapisan Perekat Seiring Pemakaian**: Perlindungan kedap air ponsel mengandalkan lem silikon dan membran perekat elastis di sekitar lubang speaker, mikrofon, dan baki kartu SIM. Panas mesin dari prosesor, benturan mikro saat ditaruh di meja, dan uap udara hangat harian secara perlahan mengikis kelenturan perekat tersebut tanpa ada tanda visual yang tampak dari luar.
* **Standar Ganda Produsen yang Tidak Bertanggung Jawab**: Sangat munafik bagi produsen teknologi yang membanggakan ketahanan air sebagai nilai jual utama produk di media iklan, namun serentak mengecualikan seluruh bentuk kerusakan cairan dalam syarat dan ketentuan garansi satu tahun mereka.

## Mengakhiri Ilusi Kebal Air

Sertifikasi IP68 seharusnya diperlakukan sebagai sabuk pengaman darurat saat perangkat tidak sengaja tersiram air hujan atau tumpahan kopi di meja kerja, bukan kartu pas untuk membawa ponsel bermain basah-basahan di pantai atau merekam video di bawah kolam renang.

Konsumen perlu berhenti memercayai hiperbola pemasaran visual ini. Selama produsen masih menolak menanggung biaya perbaikan akibat rembesan cairan, jangan pernah mengorbankan ponsel belasan juta rupiah Anda hanya demi membuat konten video pendek di dalam air.`
  },
  {
    title: "Erosi Kedaulatan Kepemilikan Game Digital: Mengapa Beli Game Seharga Satu Juta Rupiah Sejatinya Hanya Menyewa Izin Akses Sementara",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Industri Game", "Game Digital", "Hak Milik", "Distribusi Digital", "Gamer"],
    imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Rak kaset game fisik klasik dan stik pengendali permainan video",
    excerpt: "Menekan tombol Beli Sekarang di toko game digital memberi ilusi kepemilikan abadi. Namun ketika penerbit mencabut lisensi dan mematikan server secara sepihak, ratusan jam progres dan uang Anda lenyap tanpa jejak.",
    content: `Di era kaset cakram PlayStation 1 atau kartrid Super Nintendo, konsep kepemilikan sebuah karya permainan video sangatlah sederhana dan gamblang: begitu Anda menukar uang di kasir toko dan membawa pulang kotak plastik tersebut, permainan itu sah menjadi milik pribadi Anda seutuhnya. Anda bebas memainkannya dua puluh tahun kemudian, meminjamkannya kepada sahabat karib, atau mewariskannya kepada anak cucu tanpa ada pihak luar yang bisa merampasnya.

Hari ini, peralihan menuju ekosistem serba digital telah diam-diam mereduksi kedaulatan tersebut menjadi ilusi rapuh. Ketika Anda menekan tombol bertuliskan *Buy Now* seharga delapan ratus ribu hingga satu juta rupiah di etalase digital seperti PlayStation Store, Steam, atau Xbox Live, Anda sesungguhnya tidak pernah membeli game tersebut. Anda hanya membayar sewa seumur hidup atas selembar lisensi akses perangkat lunak (*software license*) yang dapat dibatalkan sewaktu-waktu oleh sang penerbit secara sepihak.

## Realitas Pahit Lisensi yang Menguap

Kematian beberapa judul game daring ternama belakangan ini menjadi pengingat brutal mengenai betapa lemahnya posisi hukum para pemain:

* **Pencabutan Izin Akses Tanpa Ganti Rugi**: Ketika penerbit memutuskan untuk mematikan server game multipemain karena alasan penghematan biaya operasional, akses permainan langsung terputus total. Dalam kasus ekstrem, game yang telah dibeli bahkan dihapus paksa dari pustaka (*library*) akun pengguna, membuat judul tersebut lenyap seolah-olah tidak pernah ada.
* **Ketergantungan Palsu pada Sambungan Daring**: Banyak game modern menyematkan protokol autentikasi server berkala (*always-online DRM*) bahkan untuk mode petualangan pemain tunggal (*single-player campaign*). Ketika server otentikasi tersebut dinonaktifkan sepuluh tahun mendatang, game tersebut langsung bermutasi menjadi berkas data digital mati yang tidak bisa dieksekusi.
* **Hilangnya Arsip Sejarah Kebudayaan Digital**: Berbeda dengan buku fisik atau lukisan museum yang bisa bertahan berabad-abad, karya seni digital interaktif terancam punah ditelan waktu. Ketika tidak ada salinan fisik yang dapat dijalankan secara luring (*offline*), sejarah perkembangan seni desain game lenyap bersama matinya server korporat.

## Memperjuangkan Hak Kepemilikan Konsumen Digital

Gerakan perlindungan konsumen di berbagai negara kini mulai menggugat eufemisme tombol *Beli* pada toko digital. Lembaga regulasi seharusnya mewajibkan platform untuk secara jujur mengganti kata *Beli* menjadi *Sewa Lisensi Hingga Server Dimatikan* agar pembeli menyadari risiko kepunahan aset digital mereka.

Gamer harus mulai menyadari bahwa tanpa perlindungan hukum yang tegas atas kepemilikan digital, seluruh perpustakaan permainan yang kita kumpulkan hari ini hanyalah pinjaman sementara yang rapuh di tangan korporasi teknologi.`
  },
  {
    title: "Bahaya Tersembunyi Menatap Layar Sebelum Tidur: Bagaimana Radiasi Cahaya Biru Menekan Hormon Melatonin dan Merusak Fase Tidur Dalam",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Tidur", "Cahaya Biru", "Melatonin", "Irama Sirkadian", "Gaya Hidup"],
    imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kamar tidur bernuansa tenang dengan pencahayaan temaram hangat dan bantal rapi",
    excerpt: "Menatap layar ponsel di atas kasur temaram tampak seperti cara santai menutup hari. Padahal secara neurokimia, gelombang cahaya biru menipu jam biologis otak dan menunda pelepasan hormon melatonin hingga dua jam penuh.",
    content: `Bagi mayoritas masyarakat urban, ritual terakhir sebelum memejamkan mata di malam hari bukan lagi membaca buku kertas atau berdoa dalam hening, melainkan merebahkan kepala di bantal sambil memegang ponsel pintar beberapa sentimeter di depan wajah. Usapan demi usapan video pendek atau linimasa percakapan dinikmati di dalam kamar yang gelap gulita, di bawah anggapan bahwa kebiasaan tersebut membantu menenangkan pikiran dari kepenatan kerja seharian.

Namun bagi sistem saraf pusat dan endokrin manusia, pancaran cahaya dari panel kaca tersebut mengirimkan sinyal bahaya yang memporak-porandakan jam biologis tubuh. Cahaya yang tampak sepele tersebut bertindak layaknya matahari tiruan yang membingungkan sel-sel fotoreseptor retina, memicu kekacauan hormonal yang berakibat fatal pada kualitas istirahat malam.

## Sabotase Neurobiologis Irama Sirkadian

Mekanisme biologis di balik gangguan tidur akibat paparan layar beroperasi melalui rantai reaksi neurokimia:

* **Supresi Hormon Melatonin oleh Nukleus Suprakiasmatik**: Cahaya biru dengan panjang gelombang 450 hingga 480 nanometer menembus langsung ke sel ganglion retina fotosensitif (ipRGCs). Sinyal ini diteruskan ke nukleus suprakiasmatik di otak yang berfungsi sebagai konduktor utama jam biologis tubuh, memerintahkan kelenjar pineal untuk menunda produksi hormon melatonin—senyawa alami penginduksi rasa kantuk—hingga dua jam lebih lambat.
* **Pemotongan Durasi Tidur Gelombang Lambat (*Deep Sleep*)**: Ketika tubuh akhirnya terlelap, arsitektur tidur telah mengalami distorsi parah. Fase tidur gelombang lambat (*slow-wave sleep*) yang merupakan momen krusial untuk pembersihan limbah metabolik beta-amiloid di otak dan regenerasi jaringan sel menjadi sangat singkat.
* **Sensasi Lelah Kronis Saat Bangun Pagi**: Meskipun jam menunjukkan Anda telah berbaring selama tujuh jam, Anda tetap terbangun dengan kepala berat, kabut otak (*brain fog*), dan rasa letih yang menjalar. Otak tidak mendapatkan waktu istirahat restoratif yang cukup akibat tertundanya siklus biologis alami.

## Menciptakan Barikade Malam yang Bersih

Memulihkan kedalaman kualitas tidur malam menuntut ketegasan dalam membatasi kontak dengan perangkat elektronik:

1. **Tetapkan Jam Malam Digital (*Digital Sunset*)**: Matikan atau jauhkan ponsel dari jangkauan tangan minimal empat puluh lima menit sebelum jadwal tidur. Ganti kebiasaan membaca layar dengan buku cetak atau latihan pernapasan dalam.
2. **Keluarkan Pengisi Daya dari Ruang Tidur**: Pindahkan kabel pengecasan baterai ke meja ruang tamu atau luar kamar tidur untuk mengeliminasi dorongan kompulsif meraih ponsel saat terbangun di tengah malam.
3. **Optimalkan Pencahayaan Ruang Berwarna Hangat**: Gunakan lampu tidur bertemperatur warna kuning hangat (di bawah 2700 Kelvin) yang ramah terhadap ritme sirkadian dan tidak menstimulasi retina secara agresif.

Tidur nyenyak bukan sekadar hilangnya kesadaran sementara, melainkan proses biologis sakral tempat tubuh mereparasi kerusakan selular. Hormatilah kebutuhan regenerasi otak Anda dengan memadamkan layar sebelum memejamkan mata.`
  },
  {
    title: "Standarisasi Audio Kompresi Bluetooth AAC dan SBC: Mengapa Earphone Nirkabel Sejuta Rupiah Tak Pernah Mampu Menandingi Kabel Jack Klasik",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Audio", "TWS", "Bluetooth", "Earphone", "Akustik"],
    imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Headphone kabel studio profesional terpasang rapi di samping perangkat pemutar musik",
    excerpt: "Kepraktisan earphone nirkabel TWS dibayar mahal dengan hilangnya separuh tekstur suara asli. Kompresi lossy kodek Bluetooth dan konverter mini murah mengorbankan dinamika akustik demi kenyamanan tanpa kabel.",
    content: `Keputusan para raksasa teknologi untuk memangkas lubang audio jack 3,5mm dari bodi ponsel pintar hampir satu dekade lalu telah berhasil memaksa ratusan juta penikmat musik bermigrasi ke ekosistem earphone nirkabel (*true wireless stereo* / TWS). Kotak pengisi daya kecil yang pas di saku celana dan ketiadaan lilitan kabel yang kusut diakui sebagai puncak kenyamanan hidup modern.

Namun dalam dunia reproduksi audio fidelitas tinggi (*high-fidelity*), kenyamanan nirkabel tersebut dibayar dengan harga yang sangat mahal: degradasi masif pada kualitas sonik rekaman musik yang Anda dengar. Bahkan earphone nirkabel seharga satu hingga dua juta rupiah sekalipun kerap kalah telak saat diadu dengan earphone kabel analog berharga sepertiganya.

## Hambatan Kompresi Bandwidth dan Konverter Mini

Jurang pemisah kualitas antara transmisi kabel analog dan nirkabel bersumber dari limitasi fisik teknologi Bluetooth:

* **Pemotongan Data pada Kodek SBC dan AAC**: Saluran Bluetooth konvensional memiliki lebar pita data yang sangat sempit. Demi memastikan transmisi audio tidak terputus-putus, berkas musik beresolusi tinggi harus dikompresi secara agresif menggunakan algoritma *lossy*. Frekuensi harmonik tinggi di atas 16kHz dipangkas habis, menghasilkan suara simbal drum yang terdengar mendesis kasar dan vokal yang kehilangan desah resonansi alamiah.
* **Keterbatasan Fisik Komponen DAC dan Amplifier Internal**: Pada headphone kabel, sinyal audio diproses oleh sirkuit konverter digital-ke-analog (*DAC*) dan penguat daya (*amp*) berukuran memadai. Sebaliknya pada TWS, cip DAC dan amplifier mini harus dijejalkan ke dalam ruang sebesar biji kopi bersama baterai dan antena, memicu kompromi daya yang merusak dinamika instrumen musik.
* **Kematian Usia Perangkat Akibat Baterai Mati**: Earphone nirkabel dirancang dengan masa pakai terencana (*planned obsolescence*). Sel baterai litium mikro di dalam tangkai earphone umumnya mengalami penurunan kapasitas drastis setelah dua tahun pemakaian harian, memaksa pengguna membuang perangkat audio utuh yang sirkuit bunyinya sebenarnya masih berfungsi sempurna.

## Menemukan Kembali Kemurnian Akustik Analog

Bagi mereka yang benar-benar peduli terhadap keaslian emosi yang ditiupkan musisi ke dalam rekaman studio, kembalinya kabel adalah sebuah kebangkitan estetika:

1. **Jalur Transmisi Tanpa Kompresi Data**: Sambungan tembaga murni menghantarkan getaran gelombang listrik analog secara instan tanpa perlu dikodekan ulang oleh algoritma kompresi digital, menjaga keutuhan separasi instrumen dan kedalaman panggung suara (*soundstage*).
2. **Keandalan Tanpa Kecemasan Baterai Habis**: Earphone kabel klasik siap bernyanyi kapan pun Anda membutuhkannya tanpa perlu memikirkan sisa daya baterai atau masalah desinkronisasi sinyal nirkabel di tempat ramai.
3. **Investasi Audio Jangka Panjang yang Abadi**: Sepasang headphone monitor kabel berkualitas dapat bertahan belasan hingga puluhan tahun bila dirawat dengan wajar, menjadi instrumen apresiasi seni yang melampaui siklus tren konsumsi gadget instan.

Jangan biarkan kenyamanan instan menumpulkan kepekaan telinga Anda. Berikan kesempatan pada telinga Anda untuk kembali menikmati getaran musik yang utuh dan bernyawa melalui kejujuran kabel analog.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 09:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 09:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-0900.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
