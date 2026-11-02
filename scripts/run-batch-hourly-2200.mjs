import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Kematian Privasi Biometrik: Mengapa Pemindai Wajah di Ruang Publik Mengubah Pejalan Kaki Menjadi Titik Data",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Privasi", "Biometrik", "Kecerdasan Buatan", "Pengawasan Massal", "Kedaulatan Digital"],
    imageUrl: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kamera pengawas CCTV dengan sensor analitik terpasang di tiang ruang publik kota",
    excerpt: "Di stasiun kereta, pusat perbelanjaan, hingga persimpangan jalan kota, lensa kamera cerdas merekam kontur wajah setiap pejalan kaki. Identitas biologis kita dipanen dan diperdagangkan tanpa ada opsi untuk menolak.",
    content: `Ketika melangkah keluar dari pintu rumah menuju stasiun transportasi publik, Anda mungkin merasa sebagai individu bebas yang berdaulat atas tubuh sendiri. Namun bagi puluhan lensa kamera sirkuit tertutup (*CCTV*) yang terpasang di langit-langit terminal, Anda hanyalah kumpulan koordinat geometris wajah yang dipindai, dianalisis, dan dicocokkan dengan basis data kepolisian maupun korporasi komersial secara *real-time*.

Pemindaian biometrik massal telah merayap ke ruang publik tanpa debat terbuka maupun persetujuan eksplisit dari warga negara. Berbeda dengan kata sandi (*password*) yang dapat diganti sewaktu-waktu ketika bocor, sidik jari dan kontur wajah adalah tanda pengenal biologis permanen yang melekat seumur hidup. Sekali data biometrik Anda disusupi atau disalahgunakan, kedaulatan identitas Anda hilang untuk selamanya.

## Komodifikasi Data Biologis Tanpa Konsen

Praktik pengawasan algoritmik ini menggeser batas etika dasar perlindungan hak privasi:

* **Asimetri Kekuasaan Pengawasan**: Warga biasa dipaksa menyerahkan data biometrik mereka hanya demi melintasi pintu gerbang transportasi atau memasuki gedung perkantoran. Pilihan untuk menolak (*opt-out*) ditiadakan, menciptakan normalisasi paksa bahwa ruang publik adalah zona pengawasan total.
* **Tingkat Kesalahan Algoritmik dan Diskriminasi Sistemik**: Perangkat lunak pengenal wajah memiliki tingkat kesalahan positif palsu (*false positive*) yang signifikan pada kelompok demografi tertentu. Kesalahan komputasi ini berisiko menjerumuskan warga tak bersalah ke dalam interogasi hukum yang keliru.
* **Integrasi Pasar Gelap dan Monopoli Server**: Basis data biometrik yang disimpan pada server pihak ketiga kerap menjadi sasaran empuk serangan peretasan. Ketika basis data ini bocor, pelaku kejahatan dapat merekayasa tiruan identitas sintetis untuk membobol akses perbankan digital.

## Menegakkan Batas Garis Merah Privasi

Masyarakat demokratis tidak boleh membiarkan dalih keamanan dan efisiensi melindas hak asasi untuk bergerak tanpa diawasi. Regulasi perlindungan data pribadi harus melarang secara tegas penggunaan teknologi pengenal wajah massal di ruang publik tanpa izin pengadilan yang sah.

Tubuh dan paras biologis manusia bukan properti tak bertuan yang boleh dieksploitasi bebas oleh kamera pengawas dan algoritma korporasi.`
  },
  {
    title: "Ilusi Akses Awal: Ketika Gamer Membayar Penuh demi Menjadi Penguji Beta Tak Berbayar",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Industri Game", "Early Access", "Steam", "Gamer", "Kritik Game"],
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Gamer bermain di depan monitor beresolusi tinggi dengan headphone studio",
    excerpt: "Label Early Access yang awalnya sarana membantu studio independen kini bermutasi menjadi tameng kenyamanan bagi pengembang untuk merilis game rusak berharga mahal tanpa tanggung jawab kualitas.",
    content: `Ketika platform Steam pertama kali memperkenalkan program Akses Awal (*Early Access*) lebih dari satu dekade lalu, konsep tersebut disambut sebagai terobosan revolusioner. Pengembang independen yang kekurangan dana dapat membagikan versi awal proyek mereka, mengumpulkan umpan balik berharga dari komunitas setia, dan menyelesaikan pengembangan dengan dukungan finansial langsung dari pemain.

Namun beberapa tahun terakhir, mekanisme simpatik tersebut telah dibajak menjadi model monetisasi yang merugikan konsumen. Kini, semakin banyak penerbit menjual game yang baru rampung tiga puluh persen dengan banderol harga rilis penuh. Label *Early Access* dipasang bukan lagi sebagai tahap persiapan kreatif, melainkan sebagai tameng impunitas hukum untuk melegalkan tumpukan kutu peranti lunak (*bugs*), performa bingkai gambar (*framerate*) yang hancur, dan server multipemain yang sering mogok.

## Normalisasi Pekerja Penguji Tanpa Gaji

Pergeseran dinamika ini menciptakan kebiasaan industri yang memanjakan pengembang malas:

* **Eksploitasi Waktu Komunitas Gamer**: Pemain yang telah mengeluarkan uang ratusan ribu rupiah secara de facto dipekerjakan sebagai tim kendali mutu (*quality assurance*) sukarela. Mereka menghabiskan puluhan jam mencatat galat sistemik, sementara pengembang menghemat anggaran pengujian internal yang semestinya menjadi biaya produksi pokok.
* **Fenomena Game Terbengkalai (*Abandonware*)**: Banyak proyek akses awal yang mendadak ditinggalkan pengembangnya begitu angka penjualan awal mulai melandai. Dana pemain telah masuk ke kantong studio, sementara janji peta jalan (*roadmap*) fitur utama menguap begitu saja tanpa kompensasi sepeser pun.
* **Distorsi Standar Industri**: Penerbit besar mulai ikut-ikutan mengadopsi taktik ini, membiasakan pasar menerima produk setengah matang dengan janji tambalan pembaruan di masa depan yang tak pernah ditepati.

## Mengembalikan Integritas Transaksi Video Game

Komunitas gamer perlu lebih bijak dan disiplin dalam membelanjakan uang tabungan mereka. Menghentikan kebiasaan membeli game akses awal yang belum memiliki fondasi gameplay matang adalah langkah pertama untuk memaksa industri kembali menghargai konsumen.

Game adalah produk hiburan yang layak dinikmati dalam wujud terbaiknya, bukan draf kasar berkepanjangan yang memperlakukan pembeli setianya sebagai kelinci percobaan.`
  },
  {
    title: "Bahaya Tersembunyi Diet Ekstrem Media Sosial: Mengapa Tren Fisiologi Instan Merusak Metabolisme",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Nutrisi", "Diet", "Metabolisme", "Media Sosial", "Gaya Hidup"],
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Piring berisi kombinasi makanan bergizi seimbang dengan sayuran segar dan alpukat",
    excerpt: "Video singkat bertajuk tips turun berat badan lima kilogram dalam tiga hari membanjiri linimasa media sosial. Di balik klaim fantastis tersebut, tubuh justru dipaksa memasuki mode kelaparan biologis.",
    content: `Algoritma media sosial sangat menyukai narasi transformasi fisik yang dramatis dan instan. Dalam linimasa video pendek berdurasi tiga puluh detik, para pegiat kebugaran tanpa kredensial medis memamerkan bentuk perut ramping sembari merekomendasikan pola makan ekstrem: mulai dari puasa air ekstrem, penghapusan total karbohidrat, hingga konsumsi suplemen pencahar berbaju teh detoks herbal.

Bagi mereka yang mendambakan perubahan bentuk tubuh secara cepat, anjuran tersebut terdengar seperti jalan pintas yang masuk akal. Namun dari kacamata endokrinologi dan biokimia nutrisi, pemangkasan kalori radikal dalam waktu singkat adalah serangan langsung terhadap homeostasis tubuh yang memicu kerusakan metabolisme jangka panjang.

## Reaksi Bertahan Hidup Tubuh Manusia

Fisiologi tubuh manusia tidak dirancang untuk memahami tren estetika media sosial; tubuh merespons kelaparan ekstrem sebagai sinyal krisis lingkungan hidup:

* **Penurunan Drastis Laju Metabolisme Basal**: Ketika asupan kalori dipotong terlalu curam, kelenjar tiroid memperlambat produksi hormon pengatur energi. Akibatnya, tubuh menghemat pembakaran energi sekecil mungkin. Saat pola makan normal kembali, berat badan melonjak dua kali lipat lebih cepat (*efek yo-yo*).
* **Penyusutan Massa Otot dan Kerusakan Jaringan Tulang**: Untuk mempertahankan fungsi organ vital seperti otak dan jantung saat glukosa menipis, tubuh mulai memecah jaringan protein otot. Penurunan berat badan di timbangan sering kali bukan lemak yang terbakar, melainkan massa otot berharga dan cairan tubuh.
* **Kekacauan Hormon Leptin dan Ghrelin**: Diet ekstrem melumpuhkan komunikasi hormon kenyang (leptin) dan memicu lonjakan hormon lapar (ghrelin) secara kronis. Kondisi ini menumbuhkan obsesi makanan berlebih (*binge eating*) yang memicu depresi emosional berat.

## Membangun Hubungan Berkelanjutan dengan Makanan

Kebugaran sejati adalah maraton seumur hidup, bukan perlombaan pamer foto di media sosial yang mengorbankan fungsi organ dalam. Tubuh membutuhkan asupan nutrisi makro yang seimbang, mikronutrien yang kaya, serta hidrasi alami untuk menunjang aktivitas harian.

Tolak godaan klaim instan dari figur dunia maya yang menjual ilusi semu. Kesehatan holistik dibangun di atas fondasi konsistensi, makanan utuh (*whole foods*), tidur berkualitas, dan rasa hormat terhadap sinyal alami tubuh kita sendiri.`
  },
  {
    title: "Standarisasi Nada Tiga Menit: Bagaimana Durasi Lagu Modern Dimutilasi demi Metrik Streaming",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Industri Musik", "Streaming", "Songwriting", "Budaya Pop", "Royalti"],
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Panggung konser musik dengan tata cahaya dramatis dan kerumunan penonton",
    excerpt: "Lagu pop berdurasi empat hingga lima menit dengan solo gitar megah kini menjadi barang langka. Platform streaming membayar royalti penuh setelah lagu diputar tiga puluh detik, memicu pemotongan durasi secara massal.",
    content: `Perhatikan tangga lagu terpopuler di platform streaming musik favorit Anda belakangan ini. Deretan lagu hit yang bertengger di posisi puncak semakin jarang menembus durasi tiga menit. Lagu berdurasi dua menit dua puluh detik—bahkan ada yang di bawah dua menit—kini menjadi norma baru di seluruh katalog industri musik arus utama.

Pemangkasan durasi ini bukan terjadi karena perkembangan selera estetika alami musisi, melainkan hasil manipulasi algoritma ekonomi platform streaming. Di bawah skema royalti mayoritas platform komersial, sebuah pemutaran (*stream*) dihitung sah dan dibayar penuh asalkan pengguna memutar berkas audio selama minimal tiga puluh detik. Bagi label rekaman besar, membuat dua lagu pendek berdurasi dua menit menghasilkan royalti dua kali lipat lebih besar dibanding merilis satu lagu panjang berdurasi empat menit.

## Mutilasi Struktur Komposisi Musik

Dampak ekonomi royalti per putaran ini merombak total pakem penulisan lagu (*songwriting*) pop kontemporer:

* **Kematian Bagian Intro dan Bridge**: Demi mencegah pendengar menekan tombol lewati (*skip*) sebelum detik ketiga puluh, intro instrumental yang atmosferik dipangkas habis. Lagu langsung melonjak ke bagian refrain (*chorus*) dalam hitungan detik pertama, menghilangkan proses pembangunan emosi naratif musik.
* **Punahnya Eksplorasi Solo Instrumen**: Bagian jembatan lagu (*bridge*) dan solo melodi instrumental dianggap pemborosan waktu yang tidak menguntungkan metrik. Akibatnya, lagu-lagu pop modern terdengar berulang-ulang tanpa variasi progresi akor yang mengejutkan.
* **Perancangan Musik Demi Pengulangan Otomatis**: Lagu sengaja dibuat mengambang tanpa penutup yang tegas (*fade-out* instan) agar saat daftar putar beralih, pendengar tidak sadar bahwa lagu telah usai dan memutarnya kembali berkali-kali.

## Merawat Kembali Keberanian Berekspresi

Musik adalah perjalanan audio yang menuntut waktu untuk meresap ke dalam jiwa pendengar, bukan sekadar komoditas jajanan pasar yang didesain agar cepat habis dikonsumsi. Karya-karya agung yang dikenang sepanjang masa selalu memiliki keberanian untuk mengambil waktu yang mereka butuhkan.

Musisi independen dan penikmat musik sejati harus menolak penyeragaman formulaik ini. Dengarkan album secara utuh, hargai struktur komposisi yang berani dan berliku, serta berikan ruang bagi nada-nada untuk bernapas melampaui batasan algoritma ekonomi digital.`
  }
];

async function main() {
  console.log("=== MEMULAI BATCH AUTO-PUBLISH TUJUHCAHAYA (JADWAL TIAP 1 JAM / 22:00 WIB) ===");
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

  console.log("\n=== SELURUH BATCH 22:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-2200.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
