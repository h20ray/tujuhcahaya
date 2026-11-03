import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Mitos Keamanan Otentikasi SMS Dua Faktor: Mengapa SIM Swap Menjadi Lubang Hitam Rekening Digital",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Keamanan Siber", "SMS OTP", "SIM Swap", "Autentikasi", "Privasi Digital"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Smartphone menampilkan visual keamanan gembok digital dan pesan verifikasi kode keamanan",
    excerpt: "Menerima kode enam digit lewat pesan SMS sering dianggap sebagai benteng perlindungan akun paling praktis. Namun ketergantungan pada protokol telekomunikasi kuno tanpa enkripsi membuat saldo perbankan dan akun media sosial Anda rentan dibajak lewat serangan rekayasa sosial SIM swap.",
    content: `Menerima rentetan pesan singkat berisi enam digit kode rahasia (*one-time password* / OTP) pada layar ponsel telah menjadi ritual lumrah bagi siapa saja yang bertransaksi daring. Dari verifikasi masuk ke aplikasi dompet digital, konfirmasi mutasi rekening bank, hingga pemulihan akun email kerja, SMS diposisikan oleh institusi keuangan sebagai tembok pertahanan kedua yang kokoh.

Namun anggapan bahwa nomor telepon seluler adalah jangkar identitas yang aman merupakan ilusi keamanan digital yang berbahaya. Protokol pesan singkat seluler (*Short Message Service*) dirancang puluhan tahun silam tanpa mekanisme enkripsi bawaan dan sama sekali tidak diciptakan untuk mengamankan aset finansial bernilai ratusan juta rupiah. Ketergantungan buta pada jalur SMS membuka celah empuk bagi penjahat siber melalui modus pembajakan kartu perdana (*SIM swap fraud*).

## Anatomi Celah Eksploitasi pada Jalur Seluler

Kerentanan verifikasi berbasis SMS bertumpu pada kelemahan arsitektur telekomunikasi dan faktor manusia di gerai layanan:

* **Manipulasi Rekayasa Sosial di Gerai Operator**: Pelaku kejahatan kerap mendatangi gerai resmi operator seluler dengan dokumen identitas palsu, berpura-pura kehilangan smartphone, dan meminta penggantian kartu SIM baru. Petugas gerai yang kurang waspada sering meloloskan pencetakan kartu baru tersebut tanpa verifikasi biometrik ketat, seketika mematikan sinyal kartu SIM di ponsel korban dan mengalihkan seluruh lalu lintas SMS ke tangan penipu.
* **Kerapuhan Protokol Pensinyalan SS7**: Di level jaringan internasional, sistem pensinyalan telekomunikasi (*Signaling System No. 7*) memiliki kelemahan struktural yang memungkinkan peretas canggih membelokkan rute panggilan dan pesan teks dari belahan dunia lain tanpa menyentuh ponsel fisik pemilik nomor sama sekali.
* **Penyedotan Kode oleh Aplikasi Berizin Bahaya**: Pada ekosistem sistem operasi ponsel terbuka, malware kasual yang disamarkan sebagai aplikasi kalkulator atau pembersih memori sering meminta izin membaca SMS (*READ_SMS*). Begitu kode otentikasi masuk dari bank, skrip jahat langsung meneruskannya ke server penyerang dalam hitungan milidetik.

## Membentengi Akun dengan Standar Keamanan Modern

Melindungi aset digital menuntut migrasi segera dari otentikasi seluler ke standar kriptografi mandiri:

1. **Beralih ke Aplikasi Otentikator Waktu Nyata (TOTP)**: Tinggalkan opsi pengiriman kode lewat SMS dan beralihlah ke aplikasi otentikator mandiri seperti Google Authenticator, Microsoft Authenticator, atau aplikasi bersumber terbuka Aegis. Kode enam digit yang dihasilkan di dalam memori lokal ponsel tidak bergantung pada sinyal kartu seluler dan mustahil dibajak lewat gerai operator.
2. **Adopsi Kunci Keamanan Perangkat Keras (*Hardware Security Key*)**: Untuk akun paling berharga seperti email utama dan akun cloud, manfaatkan kunci fisik standar FIDO2 atau fitur Passkey bawaan sistem operasi yang kebal terhadap segala bentuk serangan phishing.
3. **Minta Penguncian Portabilitas Nomor ke Operator**: Hubungi layanan pelanggan operator seluler Anda untuk mengaktifkan kata sandi verbal (*PIN port-out*) guna memastikan tidak ada pihak lain yang dapat mencetak duplikat kartu SIM Anda tanpa kehadiran fisik pemilik sah.

Nomor ponsel Anda adalah saluran komunikasi publik, bukan brankas kunci rahasia. Putuskan ketergantungan keamanan akun finansial Anda dari transmisi pesan teks yang rapuh sebelum pintu rekening Anda dibobol dari jarak jauh.`
  },
  {
    title: "Ilusi Tingkat Kesulitan Adaptif di Game Modern: Bagaimana Manipulasi Algoritma Diam-diam Mengatur Kemenangan Pemain",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Desain Game", "Algoritma", "Dynamic Difficulty", "Industri Game", "Gameplay"],
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seorang gamer memegang kontroler konsol di depan monitor dengan suasana ruangan temaram",
    excerpt: "Merasakan sensasi bangkit dari ambang kekalahan di menit-menit akhir sering dianggap sebagai buah kerja keras refleks pemain. Namun di balik layar game modern, sistem Dynamic Difficulty Adjustment diam-diam memanipulasi akurasi peluru dan perilaku musuh demi menjaga dopamin Anda.",
    content: `Tidak ada kepuasan bermain yang lebih memabukkan selain berhasil membalikkan keadaan di detik-detik genting sebuah pertandingan. Indikator darah karakter utama Anda tinggal satu garis tipis, amunisi tersisa tiga butir, lalu tembakan terakhir Anda entah bagaimana menembus kepala musuh raksasa tepat saat serangan lawan hampir mengenai tubuh Anda. Jantung berdegup kencang, sorak kegembiraan meledak, dan Anda merasa bagai atlet e-sports profesional yang berhasil menguasai ritme permainan.

Namun di balik momen dramatis yang terasa begitu heroik tersebut, ada rahasia gelap desain perangkat lunak game modern yang jarang diungkap ke publik. Kemenangan dramatis tersebut sangat mungkin bukan buah murni dari keahlian jari Anda, melainkan hasil intervensi algoritma tak kasat mata yang dikenal sebagai *Dynamic Difficulty Adjustment* (DDA) atau penyesuaian tingkat kesulitan dinamis secara otomatis.

## Rekayasa Emosi di Balik Tirai Algoritmik

Di balik janji pengalaman bermain yang seimbang, sistem DDA bekerja layaknya sutradara licik yang memanipulasi hukum fisika dunia game:

* **Pelebaran Area Hit-Box dan Bantuan Tembak Siluman**: Ketika algoritma mendeteksi bahwa pemain telah tewas lima kali berturut-turut di tempat yang sama dan berpotensi menutup game karena frustrasi, sistem secara diam-diam memperbesar kotak sasaran tembak (*hit-box*) musuh dan meningkatkan toleransi bidikan peluru Anda hingga dua puluh persen.
* **Manipulasi Kerusakan Serangan Musuh yang Licik**: Musuh yang biasanya mampu melancarkan kombo mematikan tiba-tiba dibuat ragu-ragu menyerang, atau serangannya disetel hanya menyisakan satu poin darah agar pemain merasakan sensasi selamat yang memicu ledakan hormon dopamin secara buatan.
* **Penjodohan Lawan Berbasis Retensi (*EOMM*)**: Pada game kompetitif daring, sistem penjodohan pemain (*matchmaking*) tidak lagi murni didasarkan pada peringkat keterampilan (*skill level*). Algoritma sengaja memasangkan Anda dengan lawan yang lebih lemah setelah rentetan kekalahan agar Anda merasa puas dan terdorong membeli kostum senjata digital baru di toko game.

## Mengembalikan Martabat Penguasaan Keterampilan Murni

Bagi para penikmat game sejati, tantangan yang adil adalah pondasi dari rasa pencapaian artistik:

1. **Dukung Game dengan Aturan Mekanik Deterministik**: Apresiasi karya game aksi yang mempertahankan prinsip aturan pasti (*deterministic rules*) layaknya catur atau game souls-like klasik, di mana setiap kegagalan dan kemenangan murni berakar pada ketepatan kalkulasi pemain tanpa belas kasihan algoritma.
2. **Kritisi Praktik Paten Manipulasi Penjodohan**: Tuntut transparansi dari penerbit game daring besar terkait penggunaan algoritma keterikatan (*Engagement Optimized Matchmaking*) yang memperlakukan pemain layaknya kelinci percobaan psikologis di laboratorium kasino.
3. **Pilih Opsi Kesulitan Statis Bila Tersedia**: Selalu periksa menu aksesibilitas dan opsi permainan untuk menonaktifkan fitur bantuan adaptif otomatis jika Anda ingin menguji batas kemampuan refleks Anda secara jujur.

Video game adalah seni interaktif yang memuliakan proses pembelajaran dan ketekunan manusia. Jangan biarkan algoritma korporat mencuri keaslian keringat latihan Anda demi sekadar menjaga angka retensi harian di laporan rapat pemegang saham.`
  },
  {
    title: "Jebakan Olahraga Kardio Intensif Saat Kurang Tidur: Mengapa Beban Jantung Berlebih Merusak Otot Bukan Menyehatkan",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Kardiovaskular", "Kurang Tidur", "Olahraga", "Kortisol", "Gaya Hidup Sehat"],
    imageUrl: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Sepasang sepatu lari di atas lintasan atletik dengan latar pagi hari",
    excerpt: "Memaksa diri lari pagi atau berolahraga kardio berintensitas tinggi setelah begadang semalaman kerap dipandang sebagai tindakan disiplin heroik. Namun bagi jantung dan sistem saraf simpatik, memompa denyut nadi ekstrem dalam kondisi tubuh kekurangan istirahat adalah resep menuju peradangan miokardium.",
    content: `Narasi produktivitas modern tanpa henti mendengungkan pesan disiplin tanpa kompromi: "tidak ada alasan untuk melewatkan jadwal olahraga pagi". Bagi banyak pekerja urban dan pegiat kebugaran yang baru merebahkan kepala di bantal pada pukul dua dini hari karena tuntutan lembur, dering jam beker pukul lima pagi disambut dengan perasaan bersalah. Menepis rasa kantuk yang berat dan mata yang perih, mereka mengikat tali sepatu lari atau melangkah ke pusat kebugaran untuk menuntaskan sesi kardio berintensitas tinggi (*HIIT*).

Tindakan tersebut sering dipandang sebagai bukti keteguhan tekad yang patut diacungi jempol. Namun dari sudut pandang fisiologi kardiovaskular dan endokrinologi, memaksakan latihan beban berat atau lari cepat saat tubuh baru tidur kurang dari empat jam bukanlah investasi kesehatan, melainkan bentuk penganiayaan biologis yang mengancam keselamatan otot dan jantung Anda.

## Bahaya di Balik Badai Hormon Stres dan Kerusakan Jaringan

Kurang tidur menempatkan tubuh manusia dalam status gawat darurat hormonal:

* **Lonjakan Toksik Hormon Kortisol dan Tekanan Darah**: Begadang semalaman meningkatkan kadar hormon stres kortisol dan mengunci sistem saraf otonom pada mode simpatik hiperaktif. Ketika beban kardio berat dipaksakan di atas fondasi ini, tekanan darah melonjak tajam melampaui batas aman, membebani elastisitas dinding pembuluh darah arteri dan memicu peradangan mikroskopis pada otot jantung.
* **Fenomena Katabolisme dan Kerusakan Massa Otot**: Saat tubuh kekurangan energi akibat defisit tidur, olahraga intensitas tinggi memaksa metabolisme membakar jaringan otot Anda sendiri (*muscle wasting*) untuk dijadikan sumber bahan bakar glukosa darurat melalui proses glukoneogenesis. Alih-alih membakar lemak membandel, latihan keras tersebut justru mengikis massa otot yang telah Anda bangun dengan susah payah.
* **Kelumpuhan Refleks Koordinasi dan Risiko Cedera Sendi**: Kurang tidur merusak fungsi lobus frontal otak yang mengatur konsentrasi motorik halus dan waktu reaksi. Kaki yang tersandung saat lari cepat di atas treadmill atau posisi angkat beban yang sedikit miring dapat seketika merobek ligamen lutut atau mencederai bantalan cakram tulang belakang.

## Menyesuaikan Ritme Gerak dengan Kapasitas Tubuh

Kebugaran sejati adalah harmoni cerdas antara kerja keras fisik dan pemulihan seluler yang cukup:

1. **Prioritaskan Tidur Tambahan di Atas Sesi Olahraga**: Jika Anda tidur kurang dari lima jam dalam satu malam, tidurlah kembali selama satu hingga dua jam tambahan di pagi hari; tubuh Anda membutuhkan sintesis hormon pertumbuhan (*HGH*) saat tidur untuk memperbaiki kerusakan seluler harian.
2. **Ganti Kardio Berat dengan Pemulihan Aktif (*Active Recovery*)**: Jika Anda tetap ingin menggerakkan tubuh di pagi hari, pilihlah aktivitas berintensitas sangat rendah seperti jalan santai selama dua puluh menit di bawah sinar matahari pagi atau peregangan yoga ringan untuk melancarkan sirkulasi limfatik.
3. **Disiplinkan Batas Denyut Jantung Zona Rendah**: Saat merasa kurang fit, hindari membawa detak jantung masuk ke zona anaerobik maksimal; pertahankan denyut nadi pada zona dua yang nyaman di mana Anda masih dapat berbicara lancar tanpa terengah-engah.

Tubuh Anda bukanlah mesin industri tanpa batas toleransi keausan. Dengarkan sinyal kelelahan biologis Anda dengan bijaksana, karena otot dan jantung yang sehat dibangun di atas bantal tidur yang tenang, bukan dari ambisi buta di lintasan lari.`
  },
  {
    title: "Kepunahan Format Kaset Mixtape Buatan Sendiri: Ketika Kurasi Musik Personal Ditelan Kemudahan Tautan Playlist",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Kaset Pita", "Mixtape", "Kurasi Musik", "Budaya Analog", "Streaming"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kaset pita audio vintage dengan pita magnetik tergulung rapi di atas meja kayu",
    excerpt: "Merekam lagu satu per satu dari siaran radio atau piringan hitam ke dalam pita kaset adalah bahasa cinta emosional paling intim di masa lalu. Kini kemudahan membagikan tautan daftar putar digital mereduksi proses kurasi yang sabar menjadi pertukaran kode algoritma yang dingin.",
    content: `Bagi siapa pun yang melewati masa muda di era 80-an hingga akhir 90-an, tidak ada hadiah personal yang lebih bernilai sakral selain menerima sebilah kaset pita rekaman buatan tangan (*mixtape*). Di sampul kertas lipat (*J-card*)-nya tertera daftar judul lagu yang ditulis dengan tinta bolpoin penuh kehati-hatian, lengkap dengan goresan ilustrasi kecil atau catatan pribadi yang malu-malu untuk menyatakan perasaan batin yang tak sanggup diucapkan secara lisan.

Membuat mixtape pada masa itu adalah ritual kesabaran tingkat tinggi. Kita harus duduk bersila di depan tape deck radio selama berjam-jam, jari bersiaga di atas tombol *Play* dan *Record*, menanti dengan cemas agar sang penyiar radio tidak memotong nada intro lagu incaran. Setiap lagu dihitung durasi menit dan detiknya dengan kalkulator saku agar pita magnetik sisi A dan sisi B berdurasi enam puluh menit terisi penuh tanpa meninggalkan celah kesunyian panjang di ujung gulungan.

## Erosi Keintiman di Era Tautan Instan

Kemudahan distribusi audio digital di platform streaming telah mengubah lanskap pertukaran musik menjadi transaksi yang hampa bobot emosional:

* **Devaluasi Nilai Pengorbanan Waktu**: Menyusun daftar putar (*playlist*) di ponsel masa kini hanya membutuhkan beberapa kali usapan jemari dalam waktu kurang dari lima menit. Tanpa adanya investasi waktu, keringat kesabaran, dan keterbatasan fisik pita analog, sebuah kompilasi lagu kehilangan bobot pembuktian kasih sayang yang tulus antara dua manusia.
* **Kematian Disiplin Urutan Alur Narasi**: Pada pita kaset, pendengar dipaksa mendengarkan seluruh lagu dari urutan pertama hingga tuntas karena memajukan gulungan (*fast forward*) membutuhkan tenaga mekanis baterai pemutar walkman. Format streaming membunuh disiplin tersebut melalui tombol putar acak (*shuffle*) yang memutilasi konsep perjalanan emosi kurasi lagu menjadi sekadar tumpukan suara latar lepas.
* **Hilangnya Keabadian Artefak Fisik**: Tautan daftar putar yang Anda kirimkan lewat aplikasi percakapan dapat terkubur di riwayat obrolan dalam hitungan hari, atau bahkan rusak sewaktu-waktu ketika lisensi katalog lagu ditarik sepihak oleh platform. Sebaliknya, sebilah kaset mixtape tetap dapat tersimpan di laci meja kamar hingga tiga puluh tahun kemudian sebagai prasasti memori yang nyata disentuh.

## Merawat Kembali Jiwa Kurasi Musik yang Bernyawa

Menghargai keindahan dialog musik menuntut kemauan kita untuk memperlambat ritme konsumsi audio:

1. **Susun Daftar Putar Digital dengan Ketelitian Mixtape Klasik**: Batasi jumlah lagu maksimal sepuluh hingga dua belas trek saja, dan luangkan waktu merenungkan bagaimana nada penutup sebuah lagu menyambung secara harmonis dengan denting pembuka lagu berikutnya layaknya sebuah narasi film pendek.
2. **Sertakan Catatan Kontekstual Tertulis**: Saat membagikan kompilasi musik kepada kawan terdekat atau pasangan, jangan sekadar melempar tautan dingin; tuliskan satu dua kalimat pengantar tentang mengapa lagu tersebut mengingatkan Anda pada sosok mereka.
3. **Eksplorasi Kembali Media Rekaman Fisik Mandiri**: Cobalah sesekali merekam kompilasi lagu ke dalam cakram CD audio atau pita kaset analog bekas untuk merasakan kembali sentuhan taktil proses kurasi yang memanusiakan telinga Anda.

Musik adalah jembatan jiwa paling murni untuk menghubungkan getaran batin dua manusia. Jangan biarkan algoritma instan mengikis rasa cinta Anda dari sebuah karya kurasi yang sabar menjadi sekadar pertukaran baris kode piksel yang dingin.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 20:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 20:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-2000.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
