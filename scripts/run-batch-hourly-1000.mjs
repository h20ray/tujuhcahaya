import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Perangkap Smart TV dan Iklan di Menu Utama: Mengapa Perangkat Hiburan Ruang Tamu Memata-matai Kebiasaan Nonton Anda",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Smart TV", "Privasi", "ACR", "Iklan", "Kedaulatan Digital"],
    imageUrl: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Layar televisi layar datar modern menyala di ruang keluarga dengan pencahayaan hangat",
    excerpt: "Membeli televisi seharga jutaan rupiah tidak lagi membebaskan Anda dari serbuan iklan. Setengah layar menu utama kini dikuasai spanduk sponsor dan teknologi pemindai piksel yang memanen privasi ruang keluarga.",
    content: `Ruang keluarga dulunya adalah suaka paling privat di dalam sebuah rumah. Tempat di mana anggota keluarga berkumpul di depan layar kaca setelah seharian bekerja keras, menyalakan pemutar video fisik atau siaran berita favorit tanpa ada rasa waswas bahwa gerak-gerik santai mereka sedang dicatat dan dimonetisasi oleh korporasi asing.

Namun kehadiran televisi pintar (*Smart TV*) bersambungan internet telah mengubah perangkat hiburan tersebut menjadi papan reklame digital dua arah yang agresif. Anda mungkin telah membayar lunas banderol perangkat senilai lima hingga lima belas juta rupiah di meja kasir toko elektronik. Namun begitu kabel daya ditancapkan dan sambungan Wi-Fi aktif, produsen memperlakukan layar kaca tersebut sebagai properti sewaan yang bebas mereka jejali spanduk iklan banner, video promosi bersuara otomatis, serta rekomendasi aplikasi berbayar di baris teratas antarmuka utama.

## Pengintaian Piksel Lewat Teknologi ACR

Di balik tampilan iklan yang mengganggu tersebut, tersimpan mekanisme panen data massal yang sangat invasif:

* **Pemindaian Konten Otomatis Tanpa Henti (*ACR*)**: Melalui fitur *Automatic Content Recognition*, mikroprosesor Smart TV mengambil tangkapan sidik jari optik dari piksel layar beberapa kali per detik. Baik Anda sedang menonton siaran TV lokal, memutar konsol game, atau menyaksikan video rekaman keluarga lewat USB, sistem secara diam-diam mencocokkan apa yang ada di layar dengan basis data komersial untuk mengetahui preferensi pribadi Anda.
* **Perdagangan Profil Perilaku ke Makelar Iklan**: Data tontonan real-time ini digabungkan dengan alamat protokol internet (*IP address*) rumah dan disambungkan ke akun perangkat lain di jaringan yang sama. Akibatnya, iklan produk yang baru saja muncul di televisi ruang keluarga langsung membayangi linimasa media sosial di ponsel Anda dalam tempo beberapa menit.
* **Penurunan Performa Antarmuka demi Iklan**: Sistem operasi televisi dipaksa mengunduh aset iklan beresolusi tinggi di latar belakang setiap kali TV dinyalakan. Beban komputasi iklan ini membuat respons remote control terasa lambat, lag, dan sering mengalami jeda saat berpindah saluran.

## Menegakkan Batas Privasi di Ruang Domestik

Konsumen berhak menikmati barang yang telah mereka beli lunas tanpa harus dipaksa menonton iklan sponsor di menu pengaturan perangkat. Lembaga perlindungan konsumen harus mewajibkan pabrikan Smart TV memberikan tombol penonaktifan teknologi ACR yang transparan dan mudah diakses, bukan menyembunyikannya di balik belasan halaman syarat dan ketentuan yang membingungkan.

Ruang tamu rumah Anda adalah wilayah pribadi yang berdaulat. Jangan biarkan layar kaca di dinding rumah Anda berubah menjadi mata-mata korporasi yang memantau setiap detik waktu istirahat keluarga.`
  },
  {
    title: "Kematian Manual Instruksi Fisik Video Game: Ketika Seni Buku Panduan Berwarna Dilenyapkan Tutorial Menjengkelkan",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Industri Game", "Manual Book", "Desain Game", "Nostalgia", "Gamer"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Dua pengontrol konsol permainan video tergeletak berdampingan di atas meja kayu",
    excerpt: "Membuka kotak game baru dulu disambut buku panduan tebal penuh ilustrasi karakter dan pengantar lore dunia. Kini kotak kaset kosong melompong, digantikan sesi tutorial in-game berjam-jam yang memperlakukan pemain seperti anak kecil.",
    content: `Generasi gamer yang tumbuh di era konsol Super Nintendo, PlayStation, atau Game Boy tentu masih mengingat ritual sakral sepulang dari toko kaset game: membuka segel plastik transparan kotak kaset dengan hati-hati, lalu mengeluarkan buku manual instruksi fisik berhalaman tebal yang terselip rapi di sisi kiri wadah mika.

Buku panduan tersebut bukan sekadar lembar kertas berisi daftar tombol stik kontroler, melainkan sebuah karya seni rupa tersendiri. Halamannya dicetak penuh warna di atas kertas mengilap (*glossy paper*), menyajikan sketsa konsep karakter yang belum pernah dipublikasikan, pengantar latar belakang dunia fiksi (*lore*), pesan hangat dari sang direktur game, hingga catatan rahasia yang sengaja dikosongkan untuk diisi tulisan tangan pemain. Membaca buku manual di perjalanan pulang di dalam mobil atau angkutan umum adalah pintu masuk imajinasi yang membangun rasa penasaran memuncak sebelum keping permainan dimasukkan ke dalam baki konsol.

## Pemangkasan Biaya yang Melumpuhkan Desain Game

Hilangnya buku instruksi fisik di era digital ini membawa dampak buruk pada struktur desain permainan modern:

* **Wabah Tutorial Pembuka yang Membosankan**: Karena tidak lagi menyediakan panduan tertulis di luar game, pengembang modern terpaksa menanamkan sesi tutorial paksa (*hand-holding tutorials*) di dua jam pertama permainan. Pemain dipaksa berhenti melangkah setiap beberapa detik hanya untuk membaca jendela teks instruksi dasar seperti cara melompat atau memutar sudut pandang kamera.
* **Kotak Kemasan Plastik yang Hampa Jiwa**: Membeli edisi fisik game hari ini terasa hambar karena kotak kemasan plastik hanya berisi selembar keping cakram atau bahkan sekadar secarik kertas bertuliskan kode unduhan digital. Pengurangan ini dilakukan murni demi efisiensi margin keuntungan penerbit, bukan kepedulian lingkungan seperti yang sering mereka gembar-gemborkan.
* **Hilangnya Kebebasan Eksplorasi Organik**: Game-game klasik era 1990-an mempercayai kecerdasan pemainnya. Manual memberi pemain pengetahuan dasar tentang fungsi peralatan, lalu melepas mereka menjelajahi dunia game secara mandiri. Di era modern, ketiadaan rasa percaya tersebut membuat game terasa seperti simulator kepatuhan yang minim kejutan kreatif.

## Merawat Memori Fisik Budaya Video Game

Video game adalah medium kebudayaan yang memiliki dimensi sejarah visual yang kaya. Buku panduan fisik adalah artefak berharga yang merekam jejak dedikasi artistik tim perancang di masa ketika game diciptakan dengan rasa cinta yang murni terhadap keindahan medium interaktif.

Komunitas game harus terus mengapresiasi penerbit independen dan proyek arsip fisik yang berani mencetak kembali buku panduan bergaya retro. Kemajuan distribusi digital tidak boleh menjadi dalih untuk menghapus kehangatan sentuhan tangan manusia dari seni video game.`
  },
  {
    title: "Bahaya Menahan Kencing Saat Bekerja: Bagaimana Ambisi Mengejar Tenggat Merusak Otot Kandung Kemih",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Urologi", "Ginjal", "Gaya Hidup", "Ergonomi Kerja", "Kandung Kemih"],
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang dalam posisi relaksasi tubuh dan postur tegak seimbang",
    excerpt: "Di tengah desakan tenggat waktu kantor dan panggilan rapat daring yang berurutan, menunda buang air kecil sering dianggap sepele. Namun kebiasaan menahan kencing meremukkan otot detrusor kandung kemih dan merusak ginjal.",
    content: `Jarum jam dinding kantor menunjukkan pukul sebelas siang, panggilan rapat daring baru saja berakhir, namun draf laporan penting harus segera dikirimkan sebelum jam makan siang tiba. Sinyal tekanan di perut bagian bawah mulai mengirimkan pesan jelas ke otak bahwa kandung kemih telah terisi penuh. Namun jemari tangan tetap memilih menari di atas papan ketik sembari berbisik dalam hati: *tahan sebentar lagi, lima belas menit lagi sampai email ini terkirim*.

Lima belas menit berganti menjadi satu jam, dan siklus penundaan tersebut berulang hampir setiap hari kerja. Di kalangan pekerja korporat dan profesional perkotaan, menahan kencing demi mempertahankan ritme produktivitas telah menjadi kebiasaan lazim yang dianggap sebagai pengorbanan profesional biasa. Namun dalam sistem urologi manusia, menahan cairan limbah metabolisme secara paksa adalah tindakan berbahaya yang dapat memicu kerusakan struktural organ urinari permanen.

## Distensi Otot Detrusor dan Bahaya Refluks Ginjal

Kandung kemih orang dewasa normal dirancang untuk menampung sekitar empat ratus hingga lima ratus mililiter cairan sebelum mengirimkan dorongan alami untuk mengosongkan diri:

* **Kehilangan Elastisitas Otot Detrusor**: Menahan urine secara kronis memaksa dinding otot kandung kemih (*detrusor muscle*) meregang melampaui kapasitas fisiologisnya. Dalam jangka panjang, serat otot mengalami atrofi dan meregang kendur, menyebabkan kondisi kandung kemih neurogenik di mana organ gagal mengosongkan diri secara tuntas saat buang air kecil (*urinary retention*).
* **Kolonisasi Bakteri dan Infeksi Saluran Kemih (*ISK*)**: Urine yang tergenang di dalam suhu hangat tubuh selama berjam-jam menjadi media perkembangbiakan sempurna bagi bakteri patogen seperti *Escherichia coli*. Bakteri dapat dengan mudah bermigrasi ke saluran uretra, menimbulkan peradangan kandung kemih (*sistitis*) yang ditandai sensasi panas perih saat berkemih.
* **Risiko Refluks Vesikoureteral Menuju Ginjal**: Ketika tekanan cairan di dalam kandung kemih melebihi ambang batas aman katup ureter, urine kotor dapat terdorong berbalik arah naik ke atas menuju ginjal (*vesicoureteral reflux*). Kondisi ini dapat memicu infeksi ginjal akut (*pielonefritis*) yang berujung pada penurunan fungsi penyaringan ginjal kronis.

## Memprioritaskan Panggilan Biologis di Atas Kalender Kerja

Tidak ada tenggat waktu kerja atau rapat presentasi bisnis yang sebanding harganya dengan kerusakan permanen pada sistem penyaringan tubuh Anda:

1. **Patuh pada Aturan Tiga Jam**: Jangan biarkan kandung kemih menahan cairan lebih dari tiga hingga empat jam di siang hari. Jadwalkan alarm berkala di meja kerja sebagai pengingat fisik untuk bangkit dan melangkah ke toilet.
2. **Kosongkan Kandung Kemih Secara Tuntas**: Luangkan waktu tiga puluh detik ekstra saat buang air kecil untuk memastikan aliran urine telah berhenti sepenuhnya tanpa terburu-buru kembali ke meja kerja.
3. **Penuhi Asupan Air Tanpa Rasa Takut**: Jangan membatasi minum air putih hanya karena malas bolak-balik ke toilet. Menjaga aliran urine tetap lancar adalah pertahanan alami terbaik tubuh untuk membilas koloni bakteri dari saluran kemih.

Hormati alarm biologis tubuh Anda. Berhentilah sejenak dari layar komputer dan tunaikan hak organ tubuh Anda—karena tubuh yang sehat adalah prasyarat mutlak bagi segala bentuk produktivitas hidup yang bermakna.`
  },
  {
    title: "Kepunahan Artwork Sampel Gatefold Vinyl: Ketika Kanvas Seni Dua Sisi Tergerus Thumbnail Persegi 50 Piksel",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Album Artwork", "Vinyl", "Desain Grafis", "Rilisan Fisik", "Budaya Visual"],
    imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Piringan hitam klasik berputar di atas turntable antik dengan suasana hangat",
    excerpt: "Sampul piringan hitam lipat dua era klasik adalah kanvas monumental berukuran enam puluh sentimeter yang menyatukan fotografi surealis dan manifesto musik. Di era streaming, visual album direduksi menjadi thumbnail mikro persegi di layar ponsel.",
    content: `Rentangkan kedua tangan Anda selebar enam puluh sentimeter di udara: itulah luas bidang kanvas visual yang dinikmati para pecinta musik ketika membuka sampul lipat dua (*gatefold sleeve*) dari sebuah piringan hitam klasik era 1970-an. Memegang sampul album legendaris seperti rilisan Pink Floyd, Led Zeppelin, atau karya-karya progresif Guruh Gipsy di Indonesia bukan sekadar mendengarkan musik, melainkan mengalami pameran seni rupa kontemporer di ruang tamu pribadi.

Di bidang kanvas raksasa tiga puluh kali enam puluh sentimeter tersebut, para perancang grafis legendaris seperti Hipgnosis mengeksplorasi teknik manipulasi fotografi surealis tanpa bantuan peranti lunak komputer, menyisipkan kolase lukisan cat minyak yang rumit, serta mencetak lembar lirik kaligrafi yang sarat makna filosofis. Artwork sampul bukan sekadar stiker pembungkus kemasan niaga, melainkan manifesto visual yang menjadi gerbang utama dalam memaknai konsep sonik yang disajikan musisi.

## Pengecilan Dimensi dan Kematian Narasi Rupa

Perpindahan mutlak ke platform streaming musik digital telah membantai tradisi seni visual tersebut hingga ke titik nadir:

* **Mutilasi Kanvas Menjadi Tombol Mikro 50 Piksel**: Di antarmuka aplikasi streaming ponsel pintar, karya visual yang digarap berbulan-bulan oleh perupa direduksi menjadi kotak thumbnail mikro berukuran beberapa puluh piksel. Gambar tersebut hanya diposisikan sebagai ikon tombol navigasi fungsional agar jari pengguna tahu lagu mana yang harus ditekan di layar sentuh.
* **Standarisasi Visual yang Monoton Demi Layar Kecil**: Karena harus tetap terlihat jelas di layar smartphone yang sempit, produser dan label musik modern tidak lagi berani menggunakan lukisan rumit dengan detail mikro yang halus. Desain sampul kini dipaksa mengikuti formula minimalis yang seragam: foto wajah artis close-up dengan kontras warna menyala agar mudah dikenali di linimasa algoritma.
* **Pelenyapan Pengalaman Membaca Lirik Secara Berkesadaran**: Membuka lipatan sampul vinyl sembari menatap ilustrasi lukisan sembari mendengarkan alunan solo instrumen melatih ketahanan apresiasi seni yang mendalam. Tanpa kehadiran media fisik tersebut, pendengar modern kehilangan jangkar visual yang menghubungkan bait puisi lagu dengan imajinasi penciptanya.

## Menghidupkan Kembali Kesatuan Suara dan Rupa

Musik dan seni rupa visual sejatinya adalah dua sayap dari burung kebudayaan yang sama; keduanya saling menguatkan dan memberi resonansi makna yang abadi. Gelombang kebangkitan rilisan piringan hitam dan cetak seni mandiri (*art prints*) yang dimotori komunitas independen hari ini membuktikan bahwa dahaga manusia akan keindahan visual nyata tidak pernah padam oleh dinginnya komputasi awan.

Musisi dan perupa harus terus berani merebut kembali ruang fisik. Pertahankan identitas visual album Anda sebagai karya seni yang utuh, karena musik yang agung selalu layak bersanding dengan kanvas visual yang berjiwa.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 10:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 10:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-1000.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
