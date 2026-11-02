import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Kutukan Kedipan Layar OLED: Mengapa Peredupan PWM di Smartphone Modern Memicu Sakit Kepala dan Mata Lelah",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Layar OLED", "PWM Dimming", "Smartphone", "Kesehatan Mata", "Hardware"],
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang memegang smartphone modern dengan layar bercahaya di ruangan remang",
    excerpt: "Peralihan masif ke panel AMOLED menghadirkan kontras warna tajam, namun menyimpan kompromi kelam: modulasi lebar pulsa (PWM) frekuensi rendah yang memicu asthenopia dan sakit kepala pada mata sensitif.",
    content: `Pernahkah Anda merasakan sakit kepala berdenyut atau mata terasa kering dan berpasir setelah menatap layar ponsel flagship baru selama setengah jam di tempat tidur? Banyak pengguna mengira kelelahan ini murni akibat pantulan cahaya malam atau kebiasaan begadang. Namun di balik warna hitam pekat dan kontras tajam panel AMOLED termutakhir, tersembunyi kompromi rekayasa yang jarang diungkap di brosur penjualan: kedipan modulasi lebar pulsa (*Pulse Width Modulation* atau PWM).

Layar OLED modern tidak meredupkan cahaya seperti panel LCD konvensional yang mengatur voltase arus listrik searah (*DC dimming*). Untuk menurunkan tingkat kecerahan, sirkuit pengontrol layar OLED menyalakan dan mematikan piksel secara berulang dengan kecepatan sangat tinggi. Ilusi mata kita menganggap layar menjadi lebih redup karena durasi fase mati lebih lama daripada fase nyala.

## Mengorbankan Kenyamanan Penglihatan demi Akurasi Warna

Alasan utama produsen enggan menerapkan peredupan arus searah pada panel OLED adalah keterbatasan fisika material organik:

* **Penyimpangan Warna pada Voltase Rendah**: Bahan pemancar cahaya organik pada layar OLED menghasilkan pergeseran warna (*color tint*) yang nyata ketika dialiri voltase rendah. Untuk menjaga kalibrasi warna tetap presisi di segala level kecerahan, pabrikan memilih menyiksa mata pengguna dengan kedipan pulsa listrik berkekuatan penuh.
* **Frekuensi Rendah yang Membebani Otot Mata**: Sejumlah ponsel premium masih mengoperasikan PWM pada frekuensi rendah antara 240 Hz hingga 480 Hz. Meski otak manusia tidak sadar melihat kedipan kasat mata di atas 60 Hz, retina dan saraf optik tetap memproses denyut cahaya tersebut, memaksa pupil berkontraksi tanpa henti dan memicu ketegangan otot mata (*asthenopia*).
* **Minimnya Regulasi Perlindungan Konsumen**: Berbeda dengan monitor ruang kerja profesional yang memiliki sertifikasi bebas kedip (*flicker-free*), industri smartphone masih bebas memasarkan perangkat berkedip agresif tanpa label peringatan kesehatan yang transparan.

## Menuntut Hak Layar yang Ramah Biologis

Kecanggihan sebuah layar seharusnya dinilai dari kemampuannya menjaga kesehatan organ penglihatan pengguna, bukan sekadar memecahkan rekor angka kecerahan puncak ribuan nits yang menyilaukan. Sejumlah vendor inovatif telah mulai membuktikan bahwa peredupan frekuensi tinggi di atas 2.160 Hz atau peredupan hibrida DC dapat diterapkan tanpa mengorbankan kualitas grafis.

Konsumen berhak menuntut transparansi teknis dari para raksasa teknologi. Layar smartphone adalah jendela utama kita berinteraksi dengan dunia, dan kenyamanan biologis mata manusia tidak boleh digadaikan demi mengejar skor uji laboratorium sintetis.`
  },
  {
    title: "Perangkap Battle Pass dan Tugas Harian: Bagaimana Game Modern Mengubah Hiburan Menjadi Beban Kerja Kedua",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Battle Pass", "Live Service", "Psikologi Gamer", "Monetisasi", "Industri Game"],
    imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ruang bermain game dengan pencahayaan neon temaram dan deretan monitor PC",
    excerpt: "Fitur battle pass dan rotasi misi harian perlahan membajak esensi bermain game. Mekanisme psikologis rasa takut ketinggalan (FOMO) mereduksi kesenangan petualangan interaktif menjadi daftar absensi tugas yang melelahkan.",
    content: `Duduk santai di depan komputer atau konsol setelah seharian lelah bekerja semestinya menjadi momen pelepasan stres yang membebaskan imajinasi. Namun bagi jutaan pemain game modern berformat layanan langsung (*live-service*), menyalakan game kini terasa tidak ubahnya seperti melakukan absensi masuk ke kantor kedua yang tak dibayar.

Daftar tugas harian (*daily quests*), target mingguan, dan indikator kemajuan tiket musim (*battle pass*) langsung menyambut di layar beranda. Anda tidak lagi bermain berdasarkan suasana hati atau keinginan mengeksplorasi cerita, melainkan terpaksa menuruti algoritma pengembang: menyelesaikan lima pertandingan berturut-turut, memenangkan senjata tertentu, atau sekadar login demi mengamankan bonus poin sebelum batas waktu kedaluwarsa tengah malam nanti.

## Rekayasa Psikologis Pengikat Rentang Perhatian

Mekanisme battle pass dirancang dengan kalkulasi psikologi perilaku yang sangat terukur untuk memaksimalkan retensi pemain:

* **Eksploitasi Rasa Takut Tertinggal (*FOMO*)**: Kostum karakter, animasi unik, dan skin senjata eksklusif sengaja dikunci dalam jendela waktu terbatas selama beberapa pekan. Pemain yang melewatkan musim tersebut tidak akan pernah bisa mendapatkan aset tersebut kembali, memicu kecemasan irasional yang memaksa pemain terus login setiap hari.
* **Perangkap Biaya Hangus (*Sunk Cost Fallacy*)**: Setelah mengeluarkan uang untuk membeli tiket battle pass premium, pemain merasa wajib menghabiskan puluhan jam demi membuka seluruh jenjang hadiah. Jika berhenti di tengah jalan, uang yang telah dibayarkan terasa sia-sia, sehingga bermain berubah menjadi paksaan moral alih-alih rekreasi.
* **Mereduksi Makna Kebebasan Bermain**: Game klasik memikat hati kita lewat kejutan mekanik yang organik dan alur narasi yang menyentuh jiwa. Ketika seluruh pencapaian digital dipatok pada angka pengalaman (*XP*) dari rutinitas repetitif, jiwa artistik medium video game tereduksi menjadi simulasi pabrik digital.

## Menyelamatkan Kedaulatan Waktu Luang Kita

Waktu luang manusia adalah komoditas paling berharga di era serbuan layar modern, dan para penerbit game rakus tidak berhak membajaknya lewat manipulasi dopamin buatan. Para gamer harus mulai berani menolak siklus tugas harian yang memperbudak pikiran dan meninggalkan game yang memperlakukan pemain seperti statistik keterlibatan (*engagement metrics*).

Bermain game sejatinya adalah perayaan kegembiraan dan kebebasan berekspresi. Jika sebuah permainan mulai terasa seperti daftar beban kerja dengan tenggat waktu ketat, tombol paling ampuh yang harus segera kita tekan adalah tombol hapus instalasi.`
  },
  {
    title: "Mitos Kacamata Anti-Radiasi Sinar Biru: Mengapa Mata Lelah di Depan Layar Bukan Disebabkan Cahaya Layar",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Kesehatan Mata", "Sinar Biru", "Oftalmologi", "Sindrom Layar Komputer", "Gaya Hidup"],
    imageUrl: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kacamata optik dengan lensa bening diletakkan di dekat layar monitor komputer",
    excerpt: "Penjualan lensa kacamata anti sinar biru meledak dengan klaim menangkal mata lelah akibat menatap layar monitor. Berbagai uji klinis oftalmologi independen membuktikan bahwa biang keladi mata tegang sesungguhnya adalah penurunan drastis frekuensi kedipan alami.",
    content: `Masuklah ke gerai optik kacamata mana pun hari ini, dan staf penjualan hampir pasti akan menyodorkan lensa pelapis anti sinar biru (*blue light blocking*) sebagai perlengkapan wajib bagi siapa saja yang bekerja di depan komputer. Promosi gencar di internet memperingatkan bahwa radiasi cahaya biru dari layar laptop dan smartphone dapat merusak retina, memicu kelelahan mata kronis, dan merusak penglihatan jangka panjang.

Ratusan ribu hingga jutaan rupiah rela digelontorkan konsumen demi sepasang kacamata dengan lensa kekuningan tersebut. Namun bila kita meneliti konsensus ilmiah dari asosiasi dokter spesialis mata terkemuka seperti American Academy of Ophthalmology dan puluhan uji klinis acak terkontrol independen, narasi pemasaran tersebut ternyata berlandaskan mitos yang dilebih-lebihkan.

## Realitas Fisiologis di Balik Sindrom Layar Komputer

Kelelahan mata yang dialami para pekerja digital sesungguhnya bukan dipicu oleh panjang gelombang cahaya biru, melainkan oleh respons biologis alami tubuh terhadap fokus statis jarak dekat:

* **Penurunan Drastis Refleks Mengedip**: Dalam kondisi normal saat berinteraksi tatap muka, manusia mengedip sekitar 15 hingga 20 kali per menit untuk membasahi bola mata dengan lapisan air mata segar. Saat fokus menatap layar monitor yang menampilkan teks rapat, frekuensi kedipan merosot tajam hingga hanya 5 sampai 7 kali per menit. Akibatnya, permukaan kornea mengering dan memicu rasa perih terbakar.
* **Spasme Akomodasi Otot Siliaris**: Menatap objek pada jarak tetap 40 hingga 50 sentimeter selama berjam-jam memaksa otot siliaris di dalam bola mata terus berkontraksi tanpa henti. Kondisi inilah yang memicu ketegangan otot dan pandangan kabur sesaat ketika Anda mendadak melayangkan pandangan ke kejauhan.
* **Intensitas Sinar Biru Layar yang Sangat Rendah**: Paparan spektrum sinar biru yang dipancarkan oleh monitor komputer dan layar smartphone sesungguhnya ribuan kali lebih lemah daripada pancaran sinar biru alami dari matahari di siang hari. Belum ada bukti ilmiah valid yang menunjukkan cahaya layar perangkat mampu merusak sel fotoreseptor retina manusia.

## Mengembalikan Kebiasaan Hidrasi dan Istirahat Okular Alami

Membeli lensa mahal berfilter warna kuning tidak akan menyembuhkan mata lelah jika Anda tetap menatap layar selama delapan jam tanpa jeda dan lupa mengedipkan mata. Solusi paling ampuh untuk menjaga kesehatan mata para pekerja digital justru sama sekali tidak memerlukan biaya finansial.

Terapkan aturan sederhana 20-20-20: setiap 20 menit menatap layar, alihkan pandangan mata ke objek sejauh 20 kaki (sekitar 6 meter) selama minimal 20 detik untuk mengistirahatkan otot fokus mata. Lengkapi dengan penggunaan tetes mata air mata buatan (*artificial tears*) tanpa pengawet bila ruangan ber-AC terlalu kering, dan ingatlah untuk selalu mengedipkan mata secara sadar.`
  },
  {
    title: "Kepunahan Solo Gitar dan Intro Panjang: Ketika Royalti Detik ke-30 Memangkas Struktur Lagu Pop",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Industri Musik", "Streaming", "Solo Gitar", "Komposisi Lagu", "Spotify"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Mikrofon studio rekaman klasik dengan latar belakang peredam suara temaram",
    excerpt: "Format royalti platform streaming yang baru terhitung setelah 30 detik pemutaran telah mengubah cetak biru komposisi lagu modern. Pembuka instrumental yang megah dan solo melodi gitar disingkirkan demi menjejalkan vokal instan dalam lima detik pertama.",
    content: `Dengarkan kembali karya-karya legendaris era kejayaan kaset dan piringan hitam: petikan gitar pembuka yang menghipnotis selama empat puluh detik di lagu rock klasik, gesekan biola atmosferik yang membangun ketegangan emosional secara perlahan, atau raungan solo melodi di sepertiga akhir lagu yang menjadi klimaks tak terlupakan. Musik pada masa itu diberi ruang bernapas untuk membangun dinamika dan membawa pendengar masuk ke dalam semesta yang diciptakan sang komposer.

Kini, arsitektur lagu semacam itu hampir punah dari radar musik arus utama. Rata-rata durasi lagu di tangga nada global merosot tajam dari empat menit menjadi kurang dari dua setengah menit. Bagian intro instrumental dipangkas habis hingga tinggal tersisa satu atau dua detik saja, atau bahkan langsung dihantam bait vokal dan nada pengait (*hook*) sejak detik pertama lagu diputar.

## Dikte Kejam Algoritma dan Aturan Detik ke-30

Transformasi drastis bentuk komposisi ini bukan terjadi secara kebetulan, melainkan hasil penyesuaian mekanis terhadap model bisnis platform streaming:

* **Ambang Batas Pembayaran Royalti**: Layanan streaming musik raksasa seperti Spotify menerapkan aturan baku: royalti pemutaran hanya dihitung jika sebuah lagu didengar setidaknya selama 30 detik penuh. Jika seorang pendengar merasa bosan dan menekan tombol lewati (*skip*) pada detik ke-29, artis dan label rekaman tidak menerima sepeser pun uang dari putaran tersebut.
* **Penyingkiran Solo Gitar demi Menghindari Skip**: Produser musik modern kini dilanda kepanikan terhadap tombol lewati. Bagian solo instrumental yang tidak memuat lirik vokal dianggap sebagai momen rawan yang membuat pendengar kasual bosan. Akibatnya, jatah solo melodi instrumen secara sistematis dihapus dari bagan lagu demi menjaga rentang perhatian pengguna.
* **Optimalisasi Frekuensi Putaran Per Jam**: Lagu berdurasi dua menit secara matematis dapat diputar tiga puluh kali dalam satu jam, menghasilkan pendapatan royalti 50 persen lebih banyak dibandingkan lagu berdurasi empat menit yang hanya bisa diputar lima belas kali. Insentif finansial ini mendorong pabrik lagu memproduksi materi serba pendek secara massal.

## Menyelamatkan Jiwa Komposisi yang Berkelana

Ketika karya seni sepenuhnya didikte oleh kalkulasi per detik kalkulator bisnis korporasi streaming, keberanian eksplorasi bunyi menjadi korban pertama yang tumbang. Struktur lagu pop modern seragam seperti makanan cepat saji: langsung manis di gigitan pertama, namun kehilangan kedalaman rasa dan nuansa yang melekat abadi di dalam ingatan.

Para pencinta musik sejati perlu terus merayakan dan mendukung musisi-musisi independen yang berani melawan arus seragam ini. Musik yang agung adalah sebuah perjalanan batin yang membutuhkan kesabaran, bukan sekadar komoditas dopamin cepat saji yang dirancang untuk memuaskan algoritma angka.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 07:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 07:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-0700.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
