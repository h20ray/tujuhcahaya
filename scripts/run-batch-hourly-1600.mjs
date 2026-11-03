import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Ilusi Rasa Aman Cloud Storage: Mengapa Hard Disk Eksternal Tetap Menjadi Benteng Terakhir Arsip Digital",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Cloud Storage", "Backup Data", "Hard Disk", "Privasi", "Kedaulatan Data"],
    imageUrl: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Deretan perangkat penyimpanan data eksternal dan kabel koneksi di meja studio kerja",
    excerpt: "Menyimpan seluruh foto keluarga dan dokumen penting di cloud terasa praktis tanpa beban fisik. Namun ketergantungan pada server korporasi membuat arsip hidup Anda rentan terkunci oleh perubahan syarat layanan sepihak.",
    content: `Memindahkan seluruh folder arsip foto keluarga, salinan ijazah, dan dokumen penting pekerjaan ke dalam layanan penyimpanan awan (*cloud storage*) sering kali menghadirkan sensasi kelegaan yang instan. Kita diyakinkan oleh narasi pemasaran bahwa data yang melayang di angkasa digital korporasi raksasa akan abadi selamanya, kebal terhadap kerusakan perangkat keras, serta dapat diakses kapan pun melalui layar smartphone kita.

Namun penyerahan total kedaulatan data kepada pihak ketiga menyimpan bom waktu yang jarang diantisipasi oleh pengguna kasual. Server cloud bukanlah ruang magis tanpa pemilik, melainkan komputer milik korporasi multinasional yang tunduk pada kalkulasi laba rugi dan perubahan klausul perjanjian layanan (*Terms of Service*) yang sewaktu-waktu dapat direvisi tanpa persetujuan Anda.

## Kerapuhan Lisensi dan Bahaya Penguncian Akun Sepihak

Ketergantungan buta pada ekosistem penyimpanan awan menghadirkan risiko kehilangan data yang sangat nyata:

* **Penghapusan Data pada Akun Nonaktif**: Raksasa teknologi kini menerapkan aturan ketat yang menghapus seluruh isi penyimpanan bila sebuah akun dianggap tidak aktif dalam kurun waktu dua tahun. Bila terjadi musibah pada pemilik akun atau akses otentikasi dua langkah terputus, seluruh riwayat kenangan digital keluarga dapat dimusnahkan secara permanen oleh algoritma pembersih server.
* **Kenaikan Tarif Langganan yang Menjerat**: Strategi bisnis penyedia awan selalu dimulai dengan memberikan ruang gratis yang memikat. Begitu arsip Anda membengkak hingga ratusan gigabita, harga sewa bulanan dinaikkan secara berkala, memaksa Anda terus membayar "uang tebusan" bulanan seumur hidup demi mempertahankan akses ke berkas milik Anda sendiri.
* **Penyitaan Akun oleh Algoritma Pemindai Otomatis**: Sistem kecerdasan buatan yang bertugas memindai konten cloud kerap melakukan kesalahan klasifikasi (*false positive*). Banyak kasus profesional kehilangan seluruh akun kerja mereka hanya karena algoritma keliru menandai foto medis keluarga atau kode pemrograman sebagai pelanggaran hak cipta berat tanpa adanya jalur banding manusiawi yang responsif.

## Membangun Benteng Perlindungan Data Mandiri

Kedaulatan informasi pribadi menuntut kepemilikan media penyimpanan fisik yang berada sepenuhnya di bawah kendali tangan Anda:

1. **Terapkan Aturan Pencadangan Tiga Dua Satu (3-2-1 Backup)**: Simpan minimal tiga salinan data Anda pada dua media penyimpanan berbeda (misalnya SSD dan HDD eksternal), dengan satu salinan cadangan tersimpan di lokasi fisik yang terpisah.
2. **Investasikan Dana pada Hard Disk Fisik Berkualitas**: Hard disk mekanis atau SSD portabel tanpa ketergantungan koneksi internet adalah benteng pertahanan terbaik melawan sensor korporat dan kegagalan jaringan transmisi data.
3. **Lakukan Pemeriksaan Integritas Berkas Berkala**: Hubungkan drive cadangan ke komputer setidaknya enam bulan sekali untuk memeriksa kesehatan sektor penyimpanan (*disk health*) dan memastikan tidak ada data yang mengalami pembusukan bit (*bit rot*).

Data pribadi Anda adalah rekam jejak eksistensi hidup Anda. Jangan pernah menggantungkan nasib arsip paling berharga dalam genggaman server korporasi yang sewaktu-waktu dapat memutus akses Anda dengan sekali klik tombol administratif.`
  },
  {
    title: "Tirani Mode Always-Online pada Game Single-Player: Ketika Petualangan Pribadi Disandera Koneksi Internet",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Single Player", "Always-Online", "DRM", "Industri Game", "Preservasi Game"],
    imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Konsol game dan kontroler di atas meja dengan pencahayaan neon yang futuristik",
    excerpt: "Menikmati alur narasi game petualangan seorang diri mestinya menjadi ruang privasi yang tenang. Namun penerbit game modern memaksa koneksi internet non-stop yang merampas kenyamanan dan mengancam umur panjang karya seni interaktif.",
    content: `Ada daya pikat tersendiri saat kita memutuskan memainkan sebuah game naratif pemain tunggal (*single-player*). Kita ingin menyendiri, tenggelam ke dalam pembangunan dunia fiksi yang memikat, dan menikmati alur dialog karakter dengan ritme santai tanpa harus bersaing dengan pemain lain atau diganggu oleh obrolan teks yang berisik.

Namun ketenangan tersebut kini kian terancam oleh kebijakan penerbit game yang memaksakan kewajiban koneksi internet terus-menerus (*always-online requirement*) pada petualangan yang sejatinya dirancang untuk dinikmati secara solo. Ketika kabel internet di rumah Anda mengalami gangguan sesaat atau server penerbit kelebihan beban, permainan seketika membeku dan melempar Anda keluar ke menu utama, memusnahkan seluruh progres babak cerita yang baru saja Anda selesaikan dengan susah payah.

## Motif Komersial di Balik Sandera Koneksi Konstan

Pemaksaan status daring tanpa jeda bukanlah kebutuhan teknis permainan, melainkan instrumen kendali korporasi:

* **Tirani Sistem Manajemen Hak Digital (DRM) Agresif**: Penerbit memperlakukan setiap pembeli sah layaknya tersangka pembajakan. Server game diperintahkan melakukan verifikasi sertifikat enkripsi secara berkala setiap beberapa menit, memastikan bahwa pemain terus berada dalam jangkauan pengawasan mereka.
* **Penyisipan Toko Mikrotransaksi ke Dalam Mode Cerita**: Memaksa game selalu terhubung ke server memungkinkan penerbit terus menampilkan etalase kostum digital berbayar, promosi tiket musim (*season pass*), dan pop-up diskon yang merusak imersi dunia fantasi yang sedang dibangun oleh tim naratif pengembang.
* **Kematian Permanen Karya Seni Saat Server Ditutup**: Bahaya terbesar dari skema always-online adalah preservasi game jangka panjang. Ketika angka penjualan game mulai menurun setelah lima tahun dan dewan direksi memutuskan mematikan server otentikasi pusat, game yang telah Anda beli dengan harga penuh berubah seketika menjadi berkas sampah tak berguna yang tak lagi dapat dimainkan oleh siapa pun di muka bumi.

## Menegakkan Hak Pemain atas Pengalaman Bermain Mandiri

Komunitas penggemar game berhak menuntut integritas produk yang mereka beli secara legal:

1. **Dukung Etalase Game Bebas DRM**: Belilah karya game melalui kanal distribusi yang menggaransi berkas instalasi offline murni tanpa pelindung digital yang membebani sistem komputer.
2. **Kritisi Kebijakan Daring Paksa Lewat Boikot Pembelian**: Jangan ragu untuk menahan diri dari membeli game pemain tunggal yang mencantumkan syarat koneksi internet wajib pada label spesifikasinya.
3. **Dorong Gerakan Preservasi Perangkat Lunak Legal**: Suarakan dukungan bagi inisiatif hukum hak konsumen yang menuntut pengembang merilis tambalan luring (*offline patch*) sebelum mereka resmi menonaktifkan server operasional game.

Karya interaktif naratif adalah warisan kebudayaan yang berhak hidup melintasi dekade. Jangan biarkan arogansi korporat mengubah hak kepemilikan karya seni menjadi izin sewa fana yang dapat ditarik sepihak.`
  },
  {
    title: "Bahaya Mengunyah Permen Karet Berlebihan: Mengapa Pengalih Stres Kerja Diam-diam Merusak Sendi Rahang",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Sendi TMJ", "Rahang", "Kesehatan Gigi", "Ergonomi", "Kesehatan Kerja"],
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang memegang pipi dan rahang yang tegang saat bekerja di depan meja kantor",
    excerpt: "Mengunyah permen karet bebas gula sering diandalkan pekerja kantor untuk mengusir rasa kantuk dan meredakan ketegangan tugas. Namun gerakan mengunyah satu sisi yang berulang-ulang tanpa henti memberi beban tekanan kronis pada sendi temporomandibular.",
    content: `Di tengah deru tuntutan pekerjaan kantor yang padat, setoples permen karet bebas gula kerap menjadi penghuni setia sudut meja kerja. Menyelipkan sebutir permen kenyal ke dalam mulut dipandang sebagai trik cerdas yang tidak berbahaya: ia menyegarkan napas, mencegah rasa kantuk di jam rawan siang hari, serta menjadi saluran pelepas kecemasan saat jemari mengetik laporan rumit.

Namun apa yang dianggap sebagai kebiasaan sepele yang menyehatkan rongga mulut tersebut diam-diam menyimpan ancaman biomekanika yang serius bagi sendi kepala dan leher Anda. Rongga mulut manusia tidak dirancang oleh alam untuk melakukan gerakan mengunyah bertekanan tinggi selama berjam-jam tanpa jeda istirahat. Mengunyah benda liat secara mekanis memaksa otot pengunyah bekerja dalam status kontraksi hiperaktif yang mengikis bantalan sendi rahang (*temporomandibular joint* / TMJ).

## Mekanika Tekanan Sendi Rahang dan Komplikasi Muskuloskeletal

Stres mekanis yang dihasilkan oleh kebiasaan mengunyah kompulsoris menjalar jauh melampaui area gigi:

* **Dislokasi Piringan Sendi Tulang Rahang**: Di dalam persendian TMJ terdapat piringan fibrokartilago yang bertindak sebagai peredam gesekan antara rahang bawah dan tulang tengkorak. Beban kompresi yang berulang-ulang menggeser posisi piringan ini, memicu sensasi bunyi letupan (*clicking* atau *popping*) setiap kali Anda membuka mulut lebar-lebar untuk makan.
* **Pemicu Sakit Kepala Ketegangan dan Migrain Kronis**: Otot masseter dan temporalis yang bertugas menggerakkan rahang memiliki serabut saraf yang terhubung langsung dengan selaput saraf trigeminal di kepala. Ketegangan kronis pada kelompok otot ini kerap memancarkan nyeri tumpul yang menjalar ke pelipis, belakang mata, hingga tengkuk leher yang sering disalahartikan sebagai migrain biasa.
* **Ketidakseimbangan Otot Wajah Akibat Kebiasaan Satu Sisi**: Mayoritas orang memiliki kecenderungan mengunyah hanya pada satu sisi rahang yang dominan. Bila dibiarkan berbulan-bulan, asimetri beban ini menyebabkan hipertrofi otot di satu sisi wajah dan memicu keausan abnormal pada enamel gigi geraham yang berhadapan.

## Menjaga Keseimbangan Fisiologis Sendi Rahang

Menghentikan siklus beban berlebih pada rahang menuntut kesadaran postur dan alternatif manajemen stres yang lebih ramah tubuh:

1. **Batasi Durasi Mengunyah Tidak Lebih dari Sepuluh Menit**: Bila Anda ingin mengunyah permen karet untuk menyegarkan napas setelah makan siang, buanglah permen tersebut begitu rasa manis dan aromanya memudar; jangan terus mengunyahnya seperti lilin mainan.
2. **Latih Posisi Rahang Netral**: Terapkan rumus relaksasi mulut: bibir terkatup santai, barisan gigi atas dan bawah tidak saling bersentuhan, dan ujung lidah menempel lembut di langit-langit mulut tepat di belakang gigi seri depan.
3. **Alihkan Kebiasaan Stres ke Relaksasi Pernapasan**: Ganti dorongan mengunyah kompulsoris saat stres dengan latihan pernapasan dalam diafragma atau meminum seteguk air putih hangat untuk menenangkan sistem saraf simpatik.

Kenyamanan berbicara dan menikmati kelezatan makanan bertumpu pada kesehatan sendi rahang Anda. Rawatlah perkakas artikulasi alami tersebut dengan memberikan waktu istirahat yang cukup setiap harinya.`
  },
  {
    title: "Kematian Transisi Lagu Antar-Trek: Mengapa Format Shuffle Membunuh Seni Merajut Alur Album Musik",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Album Konsep", "Produksi Musik", "Format Shuffle", "Transisi Lagu", "Komposisi"],
    imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Piringan hitam klasik berputar halus di atas turntable vintage di ruang dengar musik",
    excerpt: "Dalam karya musik agung, jeda antar-lagu bukanlah ruang kosong bisu, melainkan jembatan emosional yang dirancang secara matang. Di era budaya putar acak dan daftar putar algoritma, seni merajut jalinan naratif utuh sebuah album kini terancam punah.",
    content: `Bagi siapa pun yang pernah mendengarkan karya monumental seperti album The Dark Side of the Moon karya Pink Floyd atau Abbey Road milik The Beatles secara berurutan dari detik pertama hingga akhir, ada sebuah keajaiban arsitektur audio yang tak terlupakan: sambungan antar-trek (*segue*) yang mengalir mulus tanpa celah retakan. Denting piano di ujung lagu pertama bertransformasi menjadi petikan gitar di awal lagu berikutnya, tempo bergeser secara alami, dan kunci nada berpindah bagai babak-babak dalam sebuah simfoni pertunjukan orkestra utuh.

Namun keanggunan seni merajut narasi musik tersebut kini kian terpinggirkan dari cara manusia modern mengonsumsi audio. Dominasi platform streaming yang memprioritaskan tombol putar acak (*shuffle*) dan budaya mengonsumsi musik melalui daftar putar (*playlist*) tematik telah memutilasi karya rekaman menjadi potongan fragmen yang terisolasi. Album bukan lagi dipandang sebagai sebuah bangunan katedral yang megah, melainkan sekadar tumpukan batu bata lepas yang diaduk secara sporadis oleh algoritma periklanan.

## Dampak Mutilasi Algoritmik pada Kreativitas Komposisi

Kemenangan budaya acak merusak salah satu cabang keterampilan paling rumit dalam rekayasa audio dan penciptaan lagu:

* **Pelenyapan Seni Membangun Dinamika Naratif**: Sebuah album yang luar biasa memiliki struktur dramatik yang matang: ia memiliki babak pembuka yang menggugah, gelombang klimaks yang bertenaga, serta babak pendinginan yang meditatif. Memutar lagu secara acak merusak dinamika emosional ini, menempatkan lagu balada yang hening tepat setelah lagu rock berdistorsi bising tanpa adanya konteks pengantar yang harmonis.
* **Kematian Ruang Sunyi yang Penuh Makna**: Durasi jeda dua detik antar-lagu (*gap silence*) pada format rilisan klasik bukanlah kecelakaan teknis, melainkan pilihan artistik yang ditentukan secara presisi oleh penata mastering untuk memberi waktu bagi batin pendengar mencerna emosi lagu sebelumnya. Algoritma masa kini meniadakan jeda sakral tersebut demi mengejar retensi perhatian instan.
* **Tekanan Pasar untuk Menulis Lagu Berdiri Sendiri Tanpa Konteks**: Label rekaman kini mendesak musisi agar tidak lagi menyusun lagu intro, outro, atau komposisi instrumental penghubung karena jenis trek semacam itu kerap dilewati (*skip*) oleh pendengar kasual di sepuluh detik pertama, yang berakibat fatal pada algoritma penilaian popularitas sang musisi di etalase digital.

## Menghidupkan Kembali Budaya Menghargai Album Utuh

Menikmati sebuah karya seni secara bermartabat menuntut kemauan kita untuk menghormati visi utuh sang pencipta:

1. **Matikan Tombol Putar Acak Saat Mendengarkan Rilisan Baru**: Dengarkan sebuah album baru sesuai dengan urutan daftar lagu (*tracklist*) asli yang telah disusun dengan penuh perenungan oleh musisi dan produser rekaman.
2. **Koleksi Media Fisik atau Format Berkas Utuh**: Rawatlah kembali tradisi memutar cakram padat (CD) atau piringan hitam vinil yang secara mekanis mengajak Anda menikmati perjalanan sonik dari awal hingga tuntas tanpa godaan mengganti lagu setiap dua menit.
3. **Apresiasi Musisi yang Berani Merilis Album Tematik**: Berikan dukungan finansial dan ulasan positif bagi seniman yang masih memegang teguh komitmen melahirkan album konsep yang kohesif di tengah tren lagu potongan pendek media sosial.

Musik adalah jalinan bahasa jiwa yang paling murni. Jangan biarkan algoritma acak merampas hak Anda untuk merasakan keagungan sebuah cerita yang dirajut dengan penuh cinta dari nada pertama hingga hening penutup.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 16:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

    // 2. Publish (Local SQLite & Outbox JSON, optional Remote)
    const syncRemote = process.env.SYNC_REMOTE === '1' || process.argv.includes('--remote');
    console.log(`Mempublikasikan ke Local DB & Outbox (remote: ${syncRemote})...`);
    const res = await autoPublishPost(art, { remote: syncRemote });
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

  console.log("\n=== SELURUH BATCH 16:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-1600.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
