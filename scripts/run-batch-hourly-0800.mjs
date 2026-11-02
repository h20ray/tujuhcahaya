import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Perangkap Langganan Cloud di Perangkat Rumah Pintar: Ketika Kamera CCTV Menolak Berfungsi Tanpa Iuran Bulanan",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Smart Home", "CCTV", "Langganan Cloud", "Privasi", "Hak Konsumen"],
    imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kamera keamanan modern terpasang rapi di sudut dinding rumah minimalis",
    excerpt: "Membeli kamera keamanan pintar berharga jutaan rupiah bukan lagi jaminan kepemilikan penuh. Pabrikan kian agresif mematikan penyimpanan lokal dan membatasi rekaman gerak demi memaksa konsumen menyetor iuran langganan cloud tanpa henti.",
    content: `Ketika Anda mengeluarkan uang jutaan rupiah untuk membeli kamera pengawas pintar atau bel pintu berkamera, asumsi wajar yang muncul adalah perangkat keras tersebut telah menjadi milik Anda seutuhnya. Anda memasangnya di dinding teras, menyambungkannya ke jaringan Wi-Fi rumah, dan berharap sistem keamanan bekerja mandiri menjaga hunian.

Namun realitas industri perangkat rumah pintar (*smart home*) hari ini jauh dari asas kepemilikan adil. Para produsen kini menerapkan strategi perangkap langganan (*subscription trap*) yang melucuti utilitas dasar perangkat keras jika pengguna tidak membayar iuran komputasi awan (*cloud*) bulanan. Fitur-fitur vital seperti penyimpanan riwayat rekaman sepuluh hari, deteksi wajah presisi, hingga resolusi penuh mendadak disandera di balik dinding pembayaran.

## Pembunuhan Sistematis Slot Memori Lokal

Ketergantungan paksa pada server pihak ketiga ini dibangun melalui pembatasan buatan yang disengaja:

* **Pengebirian Slot Kartu MicroSD**: Demi memaksa pengguna menyewa kapasitas cloud seharga puluhan ribu rupiah per bulan, semakin banyak produsen meniadakan slot memori lokal atau membatasi kecepatannya secara artifisial melalui pembaruan aplikasi.
* **Pajak Ekstra Deteksi Kecerdasan Buatan**: Algoritma pengenalan manusia atau kendaraan yang sebenarnya sanggup diproses oleh cip mikro di dalam kamera sengaja dialihkan ke server komputasi awan. Tanpa langganan aktif, kamera hanya mampu mengirimkan notifikasi gerak umum yang membingungkan akibat tiupan angin atau dedaunan jatuh.
* **Ancaman Kematian Perangkat (*Bricking*)**: Saat korporasi memutuskan menghentikan dukungan server model lama atau mengubah kebijakan bisnis, kamera yang dibeli lunas berisiko seketika menjadi tumpukan plastik mati yang kehilangan seluruh fungsinya.

## Menegakkan Kembali Kedaulatan Data Rumahan

Privasi dan keamanan hunian pribadi tidak semestinya digantungkan pada kerentanan server korporasi multinasional dan skema iuran abadi. Konsumen kini semakin terdorong untuk melirik solusi penyimpanan lokal berbasis *Network Attached Storage* (NAS) serta protokol sumber terbuka yang mandiri dari kendali vendor.

Jangan biarkan perangkat keras yang Anda beli secara tunai berbalik menjadi penyedot saldo rekening setiap bulan. Saatnya menuntut transparansi pabrikan dan menolak normalisasi pemerasan fitur di ranah rumah pintar.`
  },
  {
    title: "Obsesi Remake dan Remaster Instan: Ketika Industri Game Kehilangan Nyali Menciptakan Waralaba Baru",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Industri Game", "Remake", "Remaster", "PlayStation", "Inovasi"],
    imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Layar monitor menampilkan grafis permainan aksi petualangan dengan pencahayaan sinematik",
    excerpt: "Anggaran pengembangan game kelas kakap kini menembus angka triliunan rupiah. Alih-alih mendanai ide orisinal yang berani, para penerbit raksasa memilih berlindung di balik proyek poles ulang game yang umurnya belum genap satu dekade.",
    content: `Setiap kali pameran industri video game global digelar, sorak-sorai antusiasme gamer kian sering diiringi rasa jenuh yang mendalam. Alih-alih diperkenalkan pada dunia fantasi baru dengan mekanisme permainan yang revolusioner, layar panggung utama justru dipenuhi pengumuman versi *remake* atau *remaster* dari judul-judul yang sebagian besar pemain masih ingat betul jalan ceritanya.

Ketika sebuah karya klasik era 1990-an dibangun ulang dari nol dengan engine modern, langkah tersebut masih memiliki nilai pelestarian sejarah yang masuk akal. Namun ketika game keluaran tahun 2017 atau 2020 yang grafisnya masih tampak sangat memukau di konsol generasi sebelumnya sudah dipoles ulang dan dipatok seharga satu juta rupiah, industri game tampak jelas sedang menderita krisis keberanian kreatif.

## Jebakan Anggaran Raksasa dan Ketakutan Finansial

Obsesi mendaur ulang waralaba mapan berakar pada struktur modal industri yang makin rapuh:

* **Biaya Produksi Setara Film Hollywood**: Ongkos pembuatan satu judul game kelas AAA kini dengan mudah menembus angka dua ratus hingga tiga ratus juta dolar AS. Skala investasi yang terlampau masif ini membuat dewan direksi penerbit enggan mengambil risiko pada konsep cerita atau karakter baru yang belum teruji pasar.
* **Eksploitasi Memori Nostalgia Komunitas**: Menjual kembali rasa nostalgia jauh lebih murah dari segi biaya pemasaran. Penerbit cukup memamerkan tekstur pori-pori kulit karakter yang lebih rapat dan tata cahaya *ray tracing* untuk meyakinkan basis penggemar fanatik agar bersedia membayar penuh untuk pengalaman yang sama.
* **Pengorbanan Studio Kreatif Independen**: Alokasi sumber daya talenta programmer dan desainer grafis terbaik yang tersedot untuk menggarap proyek daur ulang secara tidak langsung memangkas anggaran bagi inkubasi studio-studio baru yang membawa angin segar bagi industri.

## Menghentikan Siklus Pengulangan yang Melelahkan

Video game adalah medium seni interaktif paling dinamis di muka bumi, di mana lompatan imajinasi semestinya terus menembus batas-batas baru. Bila industri hanya terus mengulang formula lama demi memenuhi proyeksi laba kuartalan para pemegang saham, medium ini akan kehilangan daya pikat utamanya.

Dukungan nyata dari komunitas pemain terhadap judul-judul orisinal berskala menengah adalah kunci memecah stagnasi ini. Jangan biarkan masa depan industri game hanya menjadi museum berputar dari kejayaan masa lalu yang terus dipoles tanpa henti.`
  },
  {
    title: "Kesesatan Tren Puasa Dopamin Ekstrem: Mengapa Memblokir Seluruh Kesenangan Justru Menumpulkan Otak",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Neurosains", "Dopamin", "Kesehatan Mental", "Gaya Hidup", "Otak"],
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang bermeditasi tenang menghadap panorama alam di pagi hari yang sejuk",
    excerpt: "Di kalangan profesional kota besar, tren berpuasa dopamin secara ekstrem dipuja sebagai tombol reset otak. Padahal secara neurokimia, memusuhi kesenangan alami justru memicu kekacauan suasana hati dan kecemasan mendalam.",
    content: `Di tengah gempuran stimulasi digital tanpa jeda, sebuah protokol gaya hidup ekstrem lahir dari lingkaran pekerja teknologi Lembah Silikon dan dengan cepat menular ke kota-kota besar dunia: puasa dopamin (*dopamine fasting*). Dalam versi radikalnya, para pengikut tren ini mengunci diri di kamar, menolak mendengarkan musik, menghindari kontak mata dan obrolan dengan sesama, bahkan berpuasa dari rasa makanan gurih selama berhari-hari demi "membersihkan" reseptor otak mereka.

Praktik pertapaan modern ini dibungkus dengan jargon ilmiah yang meyakinkan, menjanjikan kembalinya fokus tajam dan motivasi kerja yang hilang. Namun bila ditelaah dari kacamata neurobiologi manusia, gagasan bahwa manusia dapat "mereset" atau "mengosongkan" cadangan dopamin tubuh adalah kesalahpahaman fundamental terhadap cara kerja sistem saraf.

## Kekeliruan Memperlakukan Neurotransmitter Seperti Tangki Bensin

Sains otak membuktikan bahwa dopamin adalah molekul biologis yang jauh lebih kompleks daripada sekadar tombol rasa senang:

* **Fungsi Vital Penggerak Motorik dan Motivasi**: Dopamin bukan racun adiktif, melainkan pembawa pesan kimiawi esensial yang mengatur gerakan tubuh, kesiapan bertindak, proses belajar, hingga memori kerja. Kadar dopamin tidak pernah dan tidak boleh berada di angka nol; penurunan drastis justru beririsan dengan gejala depresi klinis berat dan gangguan motorik.
* **Isolasi Sensorik yang Memicu Lonjakan Stres**: Menjauhkan diri secara paksa dari seluruh bentuk interaksi sosial hangat dan kegembiraan kecil bukanlah metode pemulihan yang sehat. Keheningan ekstrem yang dipaksakan justru memicu peningkatan hormon kortisol dan mengaktifkan respon kecemasan di amigdala.
* **Salah Sasaran Perilaku Adiksi**: Masalah utama manusia modern bukanlah molekul dopamin itu sendiri, melainkan algoritma aplikasi media sosial dan gim daring yang dirancang untuk memanipulasi sistem penghargaan (*reward system*) otak secara berulang-ulang tanpa memberi jeda kepuasan alami.

## Menata Pola Hubungan yang Rasional dengan Stimulasi

Otak manusia tidak membutuhkan ritual penyiksaan diri tanpa dasar ilmiah untuk mendapatkan kembali ketenangan berpikir:

1. **Batasi Pemicu Kompulsif, Bukan Kesenangan Manusiawi**: Berhentilah memeriksa notifikasi ponsel setiap lima menit, tetapi jangan memusuhi makan siang lezat bersama keluarga atau obrolan hangat bersama sahabat.
2. **Kembalikan Interaksi di Dunia Riil**: Gantilah kebiasaan bergulir tanpa henti di linimasa ponsel dengan aktivitas fisik nyata seperti berjalan santai di taman kota atau membaca buku fisik di ruang terbuka.
3. **Pahami Batas Kapasitas Mental Harian**: Kelelahan fokus sering kali merupakan tanda tubuh kekurangan tidur berkualitas dan hidrasi yang cukup, bukan karena otak Anda kotor oleh dopamin.

Rawatlah kesehatan mental dengan pendekatan berbasis bukti ilmiah yang welas asih. Otak Anda adalah organ biologis yang butuh keseimbangan ritme hidup, bukan mesin komputer yang harus dimatikan paksa demi mengejar ilusi produktivitas tanpa batas.`
  },
  {
    title: "Komodifikasi Konser Format Festival Raksasa: Ketika Keintiman Musik Tergusur Panggung Multi-Sponsor yang Melelahkan",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Konser", "Festival Musik", "Industri Musik", "Budaya Menonton", "Gaya Hidup"],
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Panggung musik megah dengan sorot lampu warna-warni di hadapan ribuan penonton konser",
    excerpt: "Tiket jutaan rupiah, set panggung bertabrakan suara, dan durasi manggung musisi yang dipangkas menjadi empat puluh menit. Model bisnis festival musik raksasa perlahan membunuh sakralitas hubungan emosional antara musisi dan pendengarnya.",
    content: `Jadwal akhir pekan di kota-kota metropolitan kini hampir selalu dihiasi poster festival musik berukuran masif. Menampilkan deretan puluhan nama musisi dalam desain tipografi padat, festival-festival ini dipromosikan sebagai perayaan akbar budaya pop yang wajib dihadiri. Ribuan penonton rela merogoh kocek jutaan rupiah, mengenakan pakaian paling modis, dan menembus kemacetan menuju lapangan parkir atau area terbuka beraspal panas.

Namun sesampainya di lokasi pertunjukan, pengalaman musikal yang didapatkan sering kali jauh dari ekspektasi luhur sebuah apresiasi seni. Alih-alih larut dalam narasi repertoar sebuah album, penonton justru dihadapkan pada perlombaan maraton fisik yang menguras energi di tengah kepungan stan promosi merek dagang perbankan dan rokok.

## Erosi Pengalaman Artistik demi Perputaran Massa Cepat

Format festival berskala raksasa menuntut kompromi teknis yang mengorbankan kedalaman performa panggung:

* **Pemangkasan Durasi Set Musisi**: Demi menampung belasan artis dalam satu hari, waktu tampil musisi dipangkas habis menjadi tiga puluh hingga empat puluh menit. Musisi dipaksa hanya membawakan nomor-nomor hits radio paling populer tanpa ruang untuk mengeksplorasi lagu-lagu katalog mendalam (*deep cuts*) yang memiliki resonansi emosional paling kuat.
* **Bencana Kebocoran Suara Antar-Panggung**: Di area festival yang memaksakan berdirinya tiga atau empat panggung berdampingan, dentuman bas panggung elektronik kerap bocor mengganggu keheningan petikan gitar akustik di panggung sebelah, merusak dinamika suara yang telah dirancang musisi dengan susah payah.
* **Pergeseran Motif Menonton ke Ranah Validasi Sosial**: Suasana komunal yang intim perlahan terkikis oleh lautan layar ponsel pintar yang terangkat ke udara demi merekam konten sepuluh detik untuk media sosial, menciptakan pagar pembatas visual yang merusak koneksi mata antara penyanyi dan penikmat karya.

## Menghidupkan Kembali Tradisi Tur Konser Tunggal

Keberadaan festival multi-genre tentu memiliki fungsi rekreasi tersendiri. Namun industri musik tidak boleh membiarkan format ini menelan habis ekosistem tur konser mandiri berformat teater atau gelanggang tertutup yang intim.

Sebuah lagu membutuhkan ruang akustik yang terlindung dan pendengar yang sabar agar pesan liriknya merasuk ke sanubari. Sudah saatnya pecinta musik kembali menuntut panggung-panggung tunggal yang berfokus penuh pada kemurnian suara, bukan sekadar riuh festival komersial yang melelahkan fisik dan dompet.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 08:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 08:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-0800.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
