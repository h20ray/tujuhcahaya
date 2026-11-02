import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Monopoli Tiga Raksasa Cloud: Mengapa Kegagalan Satu Region Mampu Melumpuhkan Separuh Layanan Digital",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Cloud Computing", "Kedaulatan Digital", "Infrastruktur", "Server", "Keamanan Siber"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Deretan rak server datacenter dengan lampu indikator jaringan berkedip di ruang server berpendingin",
    excerpt: "Ketika satu pusat data di Virginia Utara mengalami gangguan daya, transaksi perbankan, aplikasi pesan, hingga layanan streaming di belahan dunia lain ikut tumbang. Ilusi redundansi cloud menyingkap kerapuhan sistemik peradaban digital modern.",
    content: `Ketika infrastruktur komputasi global terkonsentrasi di segelintir korporasi multinasional, internet yang semula dirancang sebagai jejaring desentralisasi kini bermutasi menjadi piramida yang rapuh. Cukup satu kegagalan pembaruan konfigurasi DNS atau gangguan kelistrikan di klaster pusat data Virginia Utara, jutaan pengguna di Jakarta hingga Tokyo seketika terisolasi dari layanan perbankan, platform reservasi transportasi, hingga alat kolaborasi kerja harian.

Ketergantungan masif pada AWS, Microsoft Azure, dan Google Cloud Platform telah menciptakan *single point of failure* bagi peradaban informasi modern. Korporasi rintisan dan institusi publik berbondong-bondong memigrasikan beban kerja komputasi mereka ke arsitektur *serverless* dan basis data milik sang tiran teknologi dengan dalih efisiensi operasional. Namun di balik janji manis efisiensi tersebut, ada harga kedaulatan yang ditumbalkan.

## Jebakan Kuncian Ekosistem (*Vendor Lock-In*)

Fenomena sentralisasi awan ini tidak terjadi secara kebetulan, melainkan hasil rekayasa arsitektural yang disengaja:

* **Eksklusivitas Protokol Tertutup**: Pengembang sengaja dimanjakan dengan API proprietari, basis data khusus, dan fungsi komputasi otomatis yang mustahil dipindahkan ke penyedia lain tanpa merombak ulang puluhan ribu baris kode sumber aplikasi.
* **Biaya Pengeluaran Data (*Egress Fees*) yang Mencekik**: Mengunggah data ke dalam server cloud sering kali digratiskan, tetapi saat pemilik data ingin memindahkan asetnya ke infrastruktur lain, mereka dijatuhi tagihan lalu lintas data dengan tarif selangit. Ini adalah taktik penyanderaan aset informasi modern berkedok protokol jaringan.
* **Kerapuhan Sistemik Berantai**: Karena ribuan aplikasi SaaS (*Software as a Service*) menumpang di atas fondasi server yang sama, kegagalan pada satu penyedia infrastruktur primer seketika memicu efek domino yang menumbangkan ratusan layanan digital konsumen secara serentak.

## Merebut Kembali Kedaulatan Infrastruktur

Sudah saatnya industri teknologi melepaskan ketergantungan buta pada ekosistem komputasi terpusat. Solusi kedaulatan digital tidak terletak pada penambahan lapisan kontrak asuransi dengan hyperscaler, melainkan pada keberanian mengadopsi standar komputasi terbuka berbasis kontainer mandiri (*portable containers*), strategi arsitektur multi-cloud sungguhan, serta investasi serius pada pusat data lokal independen.

Infrastruktur digital nasional tidak boleh selamanya menggantungkan napas pada belas kasihan kabel bawah laut dan keputusan manajemen korporasi asing di seberang benua.`
  },
  {
    title: "Punahnya Game Kategori AA: Mengapa Industri Terjebak di Antara Blockbuster Rp4 Triliun dan Indie Murah",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Industri Game", "Game Development", "Studio Game", "Kritik Game", "Gamer"],
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Setup komputer gaming dengan lampu ambient neon dan layar menampilkan visual permainan interaktif",
    excerpt: "Ketiadaan game kelas menengah beranggaran moderat membuat lanskap gaming kian monoton. Penerbit raksasa menolak membiayai eksperimen kreatif yang tidak menjanjikan pendapatan miliaran dolar dari transaksi mikro.",
    content: `Dua dekade lalu, rak toko game dipenuhi oleh karya-karya eksperimental kelas menengah (*AA*) yang berani mengambil risiko artistik luar biasa. Judul-judul seperti seri awal *Dead Space*, *Alan Wake*, *Spec Ops: The Line*, atau *Darksiders* lahir dari anggaran terukur puluhan juta dolar. Game-game ini tidak dituntut untuk menjual tiga puluh juta kopi agar balik modal, sehingga para sutradara bebas merancang narasi gelap, mekanisme gameplay orisinal, dan tema-tema yang berani keluar dari pakem arus utama.

Kini, kelas menengah yang menjadi motor inovasi industri tersebut nyaris punah tak bersisa. Industri video game modern terbelah ke dalam dua kutub ekstrem: proyek monster AAA dengan bujet membengkak hingga Rp4 triliun yang dikendalikan oleh komite pemasaran korporasi, atau game indie berbiaya hemat yang dikerjakan oleh segelintir kreator di kamar tidur mereka.

## Jebakan Anggaran Raksasa dan Ketakutan Berinovasi

Hilangnya ruang gerak game AA memicu krisis orisinalitas yang kini dirasakan langsung oleh komunitas gamer:

* **Ketergantungan Formula Aman**: Ketika biaya produksi satu judul game melampaui bujet film bioskop Hollywood termahal, manajemen penerbit menolak segala bentuk inovasi yang belum teruji pasar. Akibatnya, etalase toko dibanjiri sekuel daur ulang, game aksi dunia terbuka (*open-world*) berdesain formulaik, dan peniruan tren yang terlambat.
* **Monetisasi Agresif Sebagai Keharusan**: Untuk menutup modal ratusan juta dolar dan memuaskan target pemegang saham, game berbayar penuh kini dijejali mekanisme *live-service*, tiket musiman (*battle pass*), dan kosmetik berbayar yang merusak ritme bermain murni.
* **Gelombang PHK Massal yang Brutal**: Kerapuhan model ekonomi AAA terlihat nyata saat sebuah studio beranggotakan ratusan karyawan langsung ditutup sepihak hanya karena game terbaru mereka "hanya" terjual lima juta kopi—angka yang di masa lalu merupakan kesuksesan komersial fantastis.

## Ruang Pemulihan Kreativitas Gaming

Masa depan industri video game tidak akan diselamatkan oleh grafis fotorealistis beresolusi 8K yang menuntut kartu grafis seharga sepeda motor. Komunitas gamer sudah jenuh dengan dunia permainan hampa yang hanya dirancang untuk menguras waktu dan dompet pemain.

Kebangkitan studio-studio AA mandiri yang berfokus pada kedalaman gameplay mekanik, optimasi performa yang efisien, dan cerita yang tuntas dalam belasan jam adalah penawar paling mujarab bagi kebosanan industri hiburan interaktif masa kini.`
  },
  {
    title: "Epidemi Kelelahan Sensorik Urban: Mengapa Otak Gagal Beristirahat Meski Layar Ponsel Sudah Padam",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Kesehatan Mental", "Sensory Overload", "Gaya Hidup", "Otak", "Wellness"],
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang duduk tenang memejamkan mata di samping jendela hangat menikmati ketenangan sore",
    excerpt: "Banyak pekerja urban merasa tetap kelelahan saat bangun pagi meski telah tidur delapan jam. Masalahnya bukan kekurangan durasi istirahat, melainkan ketidakmampuan sistem saraf meredakan rangsangan mikroskopis lingkungan kota.",
    content: `Anda mematikan lampu kamar, meletakkan smartphone di atas nakas, dan merebahkan tubuh di atas kasur selama delapan jam penuh. Namun ketika alarm berdering di pagi hari, sensasi kelelahan berat tetap membelenggu otot bahu dan pelipis Anda. Otak terasa tumpul, konsentrasi buyar, dan suasana hati dipenuhi kabut kecemasan tanpa pemicu yang jelas.

Kondisi kronis yang dialami jutaan masyarakat perkotaan ini kerap disalahartikan sebagai sekadar kurang tidur atau kekurangan asupan vitamin. Pada kenyataannya, sistem saraf manusia urban modern sedang mengalami sindrom kelelahan sensorik (*sensory overload exhaustion*)—suatu kegagalan biologis di mana otak tidak pernah benar-benar memasuki fase pemulihan mendalam akibat rentetan stimulasi lingkungan mikroskopis tanpa henti.

## Bombardir Rangsangan Lingkungan Tanpa Jeda

Sistem saraf simpatik kita berevolusi untuk merespons ancaman predator di alam bebas, bukan untuk mengolah ribuan sinyal frekuensi buatan perkotaan sepanjang waktu:

* **Polusi Kebisingan Frekuensi Rendah**: Deru kompresor pendingin ruangan (AC), dengung transformator listrik, getaran halus mesin kendaraan di jalan raya, dan gesekan konstan peralatan elektronik terus diproses oleh koklea telinga dan batang otak, bahkan saat kesadaran Anda sedang terlelap tidur.
* **Fragmentasi Perhatian Akibat Paparan Layar Mikro**: Sebelum tidur, kebiasaan menggulir puluhan video pendek berdurasi lima belas detik memaksa amigdala melompat dari satu emosi ke emosi lain dalam hitungan milidetik. Beban komputasi kognitif ini meninggalkan residu tegangan neurokimia yang menghalangi gelombang otak memasuki fase delta yang menenangkan.
* **Spektrum Cahaya Buatan yang Menipu Sirkadian**: Penerangan lampu LED perkotaan berspektrum dingin memblokir pelepasan hormon melatonin secara alami, membuat kualitas istirahat menjadi dangkal kendati durasi berbaring di tempat tidur tampak mencukupi.

## Membangun Suaka Sensorik Mandiri

Memulihkan ketajaman pikiran tidak cukup diselesaikan dengan secangkir kopi espreso ganda di pagi hari. Tubuh membutuhkan intervensi sadar untuk mengistirahatkan reseptor sensorik yang terkuras:

1. **Ritual Tiga Puluh Menit Nir-Layar Sebelum Tidur**: Ganti stimulasi visual digital dengan membaca buku fisik atau latihan pernapasan dalam (*diaphragmatic breathing*) untuk memindahkan dominasi sistem saraf ke mode parasimpatik.
2. **Isolasi Akustik Ruang Tidur**: Gunakan penyumbat telinga (*earplugs*) atau tirai kain tebal peredam gema untuk memotong frekuensi bising perkotaan yang merayap di malam hari.
3. **Sentuhan Alam Nyata Tanpa Penengah**: Berjalan kaki di ruang terbuka hijau tanpa mengenakan earphone, membiarkan mata memandang panorama dedaunan alami dan langit luas untuk merestorasi ketegangan otot visual.

Kesehatan mental sejati di era modern bukan tentang menambah aplikasi kebugaran baru di ponsel Anda, melainkan tentang keberanian mematikan kebisingan dunia demi memberi ruang bagi keheningan nurani.`
  },
  {
    title: "Loudness War Jilid Dua: Ketika Dinamika Musik Dikorbankan demi Pengeras Suara Mini Ponsel Pintar",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Audio", "Mastering", "Industri Musik", "Sound Engineering", "Streaming"],
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Konsol mixer audio profesional studio rekaman dengan fader dan tombol analog presisi",
    excerpt: "Demi terdengar menggelegar di speaker mungil ponsel pintar saat berseliweran di linimasa video pendek, insinyur rekaman dipaksa memangkas seluruh rentang dinamika lagu. Hasilnya adalah gelombang audio kotak tanpa napas.",
    content: `Jika Anda memutar rekaman musik klasik, jazz era 1970-an, atau album rock progresif masa lampau, ada kontras emosional yang begitu hidup antara petikan dawai gitar yang sunyi lembut (*pianissimo*) dengan ledakan gebukan drum simbal yang membahana (*fortissimo*). Musik memiliki ruang untuk bernapas, berayun lembut, lalu melonjak dramatis menggetarkan dada pendengar.

Bandingkan pengalaman tersebut dengan mayoritas lagu rilisan baru yang menduduki tangga lagu teratas hari ini. Dari detik pertama intro hingga outro terakhir, intensitas volume dipatok rata pada tingkat desibel tertinggi. Tidak ada bisikan, tidak ada jeda, dan tidak ada kelembutan. Selamat datang di babak baru perang desibel: *Loudness War* jilid dua di era konsumsi video pendek dan algoritma streaming.

## Pemenggalan Puncak Gelombang Audio (*Brickwall Limiting*)

Di masa lalu, perlombaan membesarkan volume musik dipicu oleh persaingan di stasiun radio FM dan etalase CD portabel. Namun hari ini, dorongan kompresi ekstrem lahir dari keterbatasan fisik perangkat konsumen modern:

* **Optimalisasi untuk Pengeras Suara Ponsel Berukuran 1 Sentimeter**: Mayoritas pendengar muda pertama kali menemukan lagu melalui cuplikan video vertikal di media sosial yang diputar langsung lewat speaker ponsel mono. Agar vokal dan ketukan bas terdengar menonjol di speaker miniatural tersebut tanpa pecah, teknisi *mastering* terpaksa menekan rentang dinamis (*dynamic range*) hingga sedatar balok beton.
* **Kelelahan Akustik Telinga (*Ear Fatigue*)**: Mendengarkan gelombang suara dengan kompresi agresif secara terus-menerus memaksa otot gendang telinga menegang tanpa relaksasi. Hal inilah yang menjelaskan mengapa kita kerap merasa jenuh atau pening setelah mendengarkan beberapa lagu modern berturut-turut, kendati melodinya cukup ramah di telinga.
* **Paradoks Kualitas Audio Resolusi Tinggi**: Platform streaming kini gencar mengiklankan format audio nirkelipatan (*lossless 24-bit/192kHz*). Namun penawaran resolusi teknis ini menjadi lelucon kosong jika master rekaman yang diunggah sudah dirusak oleh kompresor pembatas batas ekstrem sejak dari meja studio.

## Menghidupkan Kembali Keindahan Nada yang Bernapas

Musik adalah seni yang menari di antara suara dan keheningan. Menghilangkan dinamika nada demi mencuri perhatian tiga detik di linimasa media sosial adalah pengkhianatan terhadap nilai estetika musikalitas itu sendiri.

Insinyur suara, produser independen, dan penikmat musik perlu bersama-sama menolak standarisasi kompresi brutal ini. Pakai kembali headphone yang layak, nikmati rekaman dengan rentang dinamis utuh, dan biarkan telinga Anda merasakan getaran halus sebuah karya seni yang memiliki ruang untuk berdenyut.`
  }
];

async function main() {
  console.log("=== MEMULAI BATCH AUTO-PUBLISH TUJUHCAHAYA (JADWAL TIAP 1 JAM / 21:00 WIB) ===");
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

  console.log("\n=== SELURUH BATCH 21:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-2100.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
