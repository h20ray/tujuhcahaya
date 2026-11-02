import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

const articles = [
  {
    title: "Erosi Hak Memperbaiki: Mengapa Pabrikan Mengunci Baterai dan Komponen di Balik Enkripsi Perangkat Lunak",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Right to Repair", "Hardware", "Smartphone", "Hak Konsumen", "Keberlanjutan"],
    imageUrl: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Peralatan teknisi membuka komponen internal perangkat elektronik untuk perbaikan perangkat keras",
    excerpt: "Mengganti baterai atau layar laptop dan smartphone kini bukan lagi sekadar urusan obeng dan solder. Pabrikan sengaja menanamkan kunci kriptografi pada suku cadang agar perangkat menolak bekerja di luar bengkel resmi.",
    content: `Ketika baterai smartphone Anda mulai aus setelah pemakaian dua tahun, langkah paling masuk akal adalah membawanya ke teknisi reparasi terdekat untuk diganti dengan sel baterai baru yang sehat. Di masa lalu, urusan perbaikan perangkat keras ini selesai dalam waktu tiga puluh menit dengan biaya terjangkau.

Namun pada generasi perangkat terbaru, skenario sederhana tersebut kian mustahil dilakukan. Begitu baterai baru dipasang—kendati komponen tersebut merupakan suku cadang asli copotan—perangkat seketika melontarkan pesan peringatan kegagalan sistem. Indikator kesehatan baterai dinonaktifkan, kecepatan pengisian daya dibatasi secara sepihak, atau layar sentuh kehilangan responsivitas kalibrasi warnanya.

## Tirani Kriptografi Komponen (*Parts Pairing*)

Fenomena ini dikenal di kalangan teknisi independen sebagai *parts pairing* atau serialisasi komponen perangkat keras:

* **Penyanderaan Perangkat Lunak atas Benda Fisik**: Pabrikan menanamkan mikrokontroler khusus pada setiap modul baterai, kamera, dan sensor layar. Mikrokontroler tersebut harus berjabat tangan (*cryptographic handshake*) dengan prosesor utama melalui peranti lunak kalibrasi eksklusif yang hanya dapat diakses melalui server bengkel resmi.
* **Monopoli Tarif dan Efek Usang Terencana**: Tanpa otorisasi kunci digital tersebut, komponen pengganti dianggap cacat. Praktik ini sengaja diciptakan untuk mematikan ribuan bengkel reparasi lokal independen, sekaligus mematok tarif servis resmi yang begitu mahal hingga konsumen merasa lebih menguntungkan membeli perangkat baru.
* **Tumpukan Sampah Elektronik Global**: Jutaan perangkat elektronik fungsional terpaksa dibuang ke tempat pembuangan akhir hanya karena komponen habis pakai seperti baterai tidak diizinkan diganti secara bebas oleh pemilik sahnya.

## Mengembalikan Kedaulatan Milik Konsumen

Ketika Anda membayar lunas sebuah perangkat di meja kasir, Anda membeli kepemilikan fisik seutuhnya atas benda tersebut—bukan sekadar lisensi terbatas untuk menggunakannya di bawah pengawasan pabrikan. Hak untuk membongkar, memperbaiki, dan mengganti suku cadang adalah hak milik fundamental yang tidak boleh dirampas oleh baris kode enkripsi korporasi.

Gerakan hak memperbaiki (*Right to Repair*) bukan semata advokasi bagi para teknisi elektronik, melainkan benteng pertahanan terakhir konsumen melawan hegemoni industri yang haus laba instan.`
  },
  {
    title: "Kematian Koleksi Fisik dan Bahaya Era Game Tanpa Kepemilikan: Ketika Server Dimatikan dan Lisensi Hangus",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Industri Game", "Konsol", "Hak Kepemilikan", "Preservasi Game", "Gamer"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Deretan cartridge dan kaset koleksi video game retro tertata rapi di rak perpustakaan pribadi",
    excerpt: "Kotak kaset game di etalase toko kini kerap hanya berisi selembar kertas bertuliskan kode unduh digital. Ketika penerbit memutuskan memutus sambungan server, game seharga satu juta rupiah tersebut seketika lenyap tak bersisa.",
    content: `Ada kepuasan tak tergantikan saat merobek plastik pembungkus kotak game fisik, membaca buklet panduan berwarna, lalu memasukkan keping cakram ke dalam baki konsol. Game tersebut menjadi milik Anda seutuhnya: dapat dimainkan kapan pun tanpa koneksi internet, dipinjamkan ke sahabat karib, atau disimpan puluhan tahun sebagai warisan koleksi berharga.

Sentimen kepemilikan abadi tersebut kini sedang dihancurkan secara sistematis oleh industri permainan modern. Di rak toko retail, konsumen kian sering mendapati kotak kemasan yang hanya memuat selembar voucher kode unduhan. Lebih buruk lagi, banyak cakram fisik kini hanya memuat data peluncur (*launcher*) seukuran beberapa ratus megabita, mewajibkan pemain mengunduh puluhan gigabita data utama dari server penerbit sebelum game dapat dimainkan.

## Bahaya Nyata Pembelian Berkedok Sewa

Transformasi dari kepemilikan fisik menuju distribusi digital seratus persen menyimpan jebakan struktural yang merugikan komunitas pecinta game:

* **Pencabutan Akses Sepihak Tanpa Kompensasi**: Ketika penerbit memutuskan untuk mematikan server autentikasi demi efisiensi biaya, game yang Anda beli seharga ratusan ribu rupiah bisa mendadak tidak dapat dijalankan sama sekali. Kasus penutupan game balap dan aksi daring populer baru-baru ini membuktikan bahwa pembeli sejatinya hanya memegang izin sewa temporer yang rentan hangus.
* **Ancaman Kematian Preservasi Budaya**: Video game adalah karya seni interaktif kontemporer yang merekam sejarah budaya pop dunia. Tanpa media fisik mandiri (*offline-playable disc*), ribuan judul bersejarah berisiko lenyap ditelan bumi begitu entitas bisnis pengembangnya gulung tikar.
* **Ketergantungan Infrastruktur Jaringan**: Pemain di daerah dengan koneksi internet terbatas praktis terpinggirkan. Ketiadaan data utuh di dalam cakram membuat hobi bermain game menjadi aktivitas eksklusif yang membebani kuota data secara ugal-ugalan.

## Menjaga Nyala Media Mandiri

Komunitas gamer global harus mulai menyuarakan penolakan terhadap model distribusi yang mengebiri hak konsumen. Regulasi perlindungan konsumen digital perlu menegaskan kewajiban penerbit untuk menyediakan tambalan luring (*offline patch*) sebelum menutup server game berbayar.

Koleksi fisik bukan sekadar nostalgia romantis masa lalu, melainkan jaminan kedaulatan bahwa karya seni yang telah kita bayar dengan keringat kerja tidak akan pernah bisa dihapus paksa oleh tombol remot korporasi.`
  },
  {
    title: "Obsesi Sleep Tracking dan Ortosomnia: Ketika Ambisi Mengejar Skor Tidur Sempurna Justru Memicu Insomnia Baru",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Kesehatan Mental", "Tidur", "Smartwatch", "Ortosomnia", "Gaya Hidup"],
    imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang terlelap tidur dengan nyaman di atas kasur berbalut selimut putih bersih",
    excerpt: "Alih-alih merasa segar saat membuka mata di pagi hari, banyak pengguna gadget kesehatan justru langsung didera kecemasan saat melihat skor tidur mereka anjlok di layar aplikasi. Fenomena medis ini dikenal sebagai ortosomnia.",
    content: `Bagi jutaan pemakai jam pintar dan cincin pelacak kesehatan modern, ritual bangun tidur telah bergeser drastis. Alih-alih merasakan kebugaran fisik dan kesegaran napas di pagi hari, jemari tangan secara refleks menyambar layar sentuh untuk memeriksa satu angka keramat: *sleep score* atau nilai kualitas tidur semalam.

Jika grafik menunjukkan angka di atas 85, hati terasa lega dan hari dimulai dengan keyakinan diri. Namun jika algoritma menampilkan angka 62 disertai warna merah dan peringatan "Tidur REM Kurang Optimal", perasaan lesu mendadak menjalar ke seluruh sendi tubuh, diikuti kepanikan bahwa stamina kerja akan hancur seharian penuh.

## Jebakan Psikologis Ortosomnia Modern

Klinik-klinik pengobatan gangguan tidur di berbagai belahan dunia mencatat lonjakan pasien yang mengalami kondisi medis baru yang dinamakan *orthosomnia*—kondisi kecemasan kronis yang dipicu oleh obsesi mencapai metrik tidur sempurna:

* **Profesi Medis Semu di Pergelangan Tangan**: Algoritma sensor inframerah dan detak jantung pada perangkat komersial sesungguhnya memiliki batas akurasi estimasi fase tidur yang cukup lebar jika dibandingkan dengan pemeriksaan medis polisomnografi (*PSG*) di rumah sakit. Memperlakukan estimasi perangkat konsumen setara diagnosis dokter adalah kekeliruan fatal.
* **Lingkaran Setan Kecemasan Berlebih**: Ketakutan bahwa tidur semalam tidak akan memenuhi standar algoritma justru memicu lonjakan hormon stres kortisol dan adrenalin menjelang jam istirahat. Akibatnya, pikiran menjadi terlalu awas (*hyperarousal*), denyut jantung meningkat, dan insomnia akut pun tercipta akibat kecemasan itu sendiri.
* **Disosiasi Tubuh dan Angka Digital**: Pengguna perlahan kehilangan kemampuan mendengarkan sinyal alami tubuhnya sendiri. Seseorang yang sebenarnya merasa segar bugar bisa mendadak merasa letih hanya karena aplikasi ponsel menyatakan fase tidur dalamnya kurang dari tiga puluh menit.

## Berdamai dengan Irama Alami Tubuh

Tidur adalah proses fisiologis biologis yang lembut dan adaptif, bukan perlombaan target kinerja kantor yang harus dianalisis dengan grafik persentase setiap pagi. Kualitas istirahat terbaik dibangun dari konsistensi jam tidur yang teratur, kamar yang sejuk dan gelap, serta keberanian untuk melepas perangkat pintar dari pergelangan tangan sebelum berbaring di atas bantal.

Belajarlah memercayai apa yang dirasakan oleh tubuh Anda sendiri daripada membiarkan algoritma perangkat lunak menentukan apakah pagi Anda layak disambut dengan bahagia atau kecemasan.`
  },
  {
    title: "Serbuan Audio AI di Streaming Musik: Ketika Musisi Asli Tersingkir oleh Ribuan Lagu Hantu Pabrikan Bot",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Industri Musik", "Streaming", "Kecerdasan Buatan", "Musisi Independen", "Royalti"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Mikrofon rekaman vokal profesional berdiri di studio musik berlatar akustik peredam suara",
    excerpt: "Katalog layanan streaming musik kini dibanjiri jutaan lagu instrumental generatif berdurasi pendek yang diunggah oleh peternakan bot. Skema royalti kolam bersama membuat pendapatan musisi manusia tergerus habis.",
    content: `Ketika Anda membuka daftar putar (*playlist*) musik relaksasi, musik latar belajar (*study beats*), atau deru hujan untuk pengantar tidur, perhatikan baik-baik nama artis yang tertera di layar. Nama-nama seperti "Rainfall Dreamer", "Cosmic Focus Zone", atau "Gentle Sleep Echoes" kerap bukan musisi sungguhan dengan instrumen di tangannya, melainkan deretan profil fiktif yang dikelola oleh peternakan bot otomatis.

Dengan bermodalkan generator audio berbasis model kecerdasan buatan, entitas industri gelap kini sanggup memproduksi ratusan ribu berkas audio per hari hanya dengan beberapa baris perintah teks. Lagu-lagu hantu ini kemudian dipompa ke katalog platform streaming global, siap memanen aliran putar dari pendengar pasif yang membiarkan musik menyala sepanjang hari.

## Penggerusan Sistemik Royalti Musisi

Dampak serbuan lagu hantu nir-jiwa ini bukan sekadar persoalan estetika seni, melainkan ancaman langsung terhadap keberlangsungan dapur musisi independen:

* **Parasitisme Model Kolam Royalti (*Pro-Rata Pool*)**: Mayoritas platform streaming membagikan kue royalti dari satu kolam bersama berdasarkan persentase total pemutaran global. Ketika jutaan lagu bot diputar tanpa henti oleh jaringan akun palsu, porsi royalti yang semestinya mengalir ke musisi independen yang berkeringat di studio rekaman tersedot habis oleh operator bot.
* **Devaluasi Nilai Karya Musik Manusia**: Fenomena ini memperlakukan musik bukan lagi sebagai medium ekspresi emosional manusia, melainkan komoditas utilitas bervolume tinggi yang diproduksi massal layaknya botol air mineral. Nilai keunikan aransemen dan lirik terpinggirkan demi audio berulang tanpa dinamika.
* **Penyumbatan Ruang Kurasi Algoritmik**: Musisi pendatang baru kian mustahil menembus algoritma rekomendasi karena kanal-kanal penemuan musik telah dijejali konten sintetis yang dipromosikan lewat trik optimasi mesin pencari internal platform.

## Menjaga Ruang Hidup Karya Bernyawa

Musik yang mampu menggetarkan relung batin manusia selalu lahir dari pengalaman hidup nyata: patah hati yang perih, kerinduan mendalam, atau sukacita yang meledak-ledak. Mesin komputasi bisa meniru harmoni nada, tetapi ia tidak akan pernah memiliki jiwa dan luka yang menjadi sari pati kesenian.

Layanan streaming musik berkewajiban membenahi sistem verifikasi katalog dan merombak pembagian royalti agar lebih berpihak pada pencipta karya tulen. Sebagai pendengar, kita bisa mulai dengan mencari tahu musisi di balik lagu yang kita putar, membeli rilisan fisik atau merchandise resmi, dan menolak menjadikan musik sekadar dengung latar hampa di telinga kita.`
  }
];

async function main() {
  console.log("=== MEMULAI BATCH AUTO-PUBLISH TUJUHCAHAYA (JADWAL TIAP 1 JAM / 20:00 WIB) ===");
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

  console.log("\n=== SELURUH BATCH 20:00 WIB BERHASIL DIPUBLIKASIKAN ===");
}

main().catch(err => {
  console.error("Batch Error:", err);
  process.exit(1);
});
