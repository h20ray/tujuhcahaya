import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Kematian Hak Memperbaiki Mandiri: Bagaimana Serialisasi Suku Cadang Mengubah Pemilik Gadget Menjadi Penyewa Abadi",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Right to Repair", "Gadget", "Hardware", "Hak Konsumen", "Monopoli"],
    imageUrl: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Komponen papan sirkuit elektronik dan obeng presisi untuk reparasi perangkat",
    excerpt: "Ketika mengganti layar atau baterai smartphone dengan suku cadang orisinal dari unit lain memicu pesan galat dan penonaktifan fitur, kepemilikan perangkat fisik telah mati. Produsen teknologi secara sistematis mengunci hak reparasi mandiri.",
    content: `Secara hukum perdata tradisional, transaksi jual beli barang elektronik memberikan hak kepemilikan mutlak kepada konsumen. Ketika Anda membayar lunas sebuah smartphone seharga belasan juta rupiah, perangkat keras di tangan Anda semestinya sepenuhnya berada di bawah kendali Anda—termasuk kebebasan untuk membongkar, membersihkan, atau mengganti suku cadang yang aus di bengkel servis langganan dekat rumah.

Namun dalam praktiknya hari ini, produsen elektronik raksasa diam-diam merampas kedaulatan tersebut melalui mekanisme yang disebut serialisasi suku cadang (*part serialization*). Setiap komponen kecil—mulai dari panel layar, modul baterai, kamera belakang, hingga sensor biometrik—kini diprogram dengan nomor seri unik yang dikunci secara kriptografis ke papan sirkuit utama (*logic board*).

## Jebakan Enkripsi Komponen Fisik

Strategi penguncian digital ini melumpuhkan ekosistem reparasi independen melalui rekayasa sistemik:

* **Penonaktifan Fitur Otomatis (*Artificial Feature Disabling*)**: Jika Anda menukar layar orisinal antara dua unit ponsel baru bertipe identik, sistem operasi akan menampilkan peringatan palsu bahwa komponen "tidak dapat diverifikasi", disertai pemutusan fitur vital seperti kalibrasi warna dinamis atau sensor pengenal wajah.
* **Monopoli Perangkat Lunak Kalibrasi**: Untuk menghilangkan pesan galat tersebut, teknisi diwajibkan mengakses server kalibrasi privat milik pabrikan. Akses ini sengaja dibatasi hanya untuk jaringan bengkel resmi atau mitra berlisensi mahal, mematikan ribuan bengkel servis kecil independen.
* **Pemborosan Sampah Elektronik (*E-Waste*)**: Komponen yang masih berfungsi sempurna dari perangkat rusak tidak dapat didaur ulang sebagai suku cadang pengganti untuk perangkat lain. Jutaan papan sirkuit fungsional akhirnya berakhir di tempat pembuangan sampah demi memaksa konsumen membeli perangkat baru.

## Menggugat Ilusi Kepemilikan Perangkat

Membeli sebuah barang tidak boleh direduksi menjadi izin sewa jangka panjang yang sewaktu-waktu dapat dicekik oleh pembaruan perangkat lunak sepihak. Konsumen berhak menuntut regulasi *Right to Repair* yang mewajibkan penyediaan suku cadang tanpa gembok kriptografis, skema sirkuit terbuka, dan panduan reparasi publik.

Jika Anda tidak dapat memperbaiki perangkat yang Anda beli, maka secara de facto Anda bukanlah pemilik sah perangkat tersebut, melainkan sekadar penyewa yang membayar premi mahal kepada raksasa teknologi.`
  },
  {
    title: "Ilusi Kepemilikan Game Digital: Mengapa Koleksi Pembelian Anda Bisa Dilenyapkan Sepihak Kapan Saja",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Distribusi Digital", "Hak Konsumen", "Pelestarian Game", "Steam", "PlayStation"],
    imageUrl: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pengendali game modern di samping layar monitor dengan pencahayaan neon atmosferik",
    excerpt: "Label 'Beli Sekarang' di etalase toko game digital adalah kebohongan pemasaran terbesar dekade ini. Anda tidak pernah benar-benar membeli game, melainkan menyewa lisensi terbatas yang dapat dicabut kapan saja saat server dimatikan.",
    content: `Lihatlah perpustakaan akun game digital Anda di Steam, PlayStation Network, atau Nintendo eShop. Di sana berderet ratusan judul game yang telah Anda kumpulkan selama bertahun-tahun dengan mengorbankan jutaan rupiah uang tabungan. Ada rasa bangga melihat koleksi virtual yang begitu melimpah dan siap dimainkan kapan pun hanya dengan sekali klik.

Namun kenyataan hukum di balik koleksi tersebut jauh lebih suram. Tulisan tombol "Beli" (*Buy*) pada antarmuka etalase digital sesungguhnya adalah distorsi semantik. Anda tidak pernah memiliki satu bita pun dari game tersebut. Yang Anda bayar hanyalah lisensi akses bersyarat yang dapat dicabut, diubah, atau dihapus secara sepihak oleh penerbit game kapan saja tanpa kewajiban memberikan ganti rugi satu rupiah pun.

## Kematian Server dan Kepunahan Warisan Budaya

Kerentanan arsitektur digital ini terbukti lewat berbagai insiden nyata yang merugikan komunitas gamer:

* **Penghapusan Akses Tanpa Jejak**: Ketika game daring seperti *The Crew* atau *Concord* menutup server otentikasi mereka, penerbit tidak segan menarik lisensi game secara paksa dari pustaka pengguna. Game yang pernah dibeli seharga ratusan ribu rupiah seketika lenyap dari daftar unduhan dan menjadi file sampah tak berguna.
* **Hilangnya Konten Akibat Kedaluwarsa Hak Cipta**: Lisensi lagu radio dalam game balap atau penampilan merek mobil sering kali kedaluwarsa setelah beberapa tahun. Alih-alih memperbarui izin, penerbit kerap memilih mencabut game dari penjualan atau merilis pembaruan wajib yang memotong separuh lagu dari rilis asli.
* **Musnahnya Upaya Pelestarian Sejarah**: Tanpa media fisik mandiri (*standalone offline physical disc*), ribuan karya seni interaktif generasi ini terancam punah dari rekaman sejarah begitu server aktivasi pusat dinonaktifkan oleh dewan direksi korporat.

## Menegakkan Transparansi Transaksi Digital

Komunitas gamer dan regulator perlindungan konsumen harus mendesak perubahan aturan main transaksi daring. Toko digital wajib mengganti tombol "Beli" dengan "Sewa Lisensi Terbatas" agar konsumen memahami risiko hilangnya akses di masa depan.

Lebih dari itu, penerbit game wajib diwajibkan secara hukum untuk merilis tambalan luring (*offline patch*) sebelum mematikan server permainan, sehingga karya kreatif tersebut tetap dapat dinikmati oleh generasi mendatang sebagai bagian dari sejarah peradaban digital.`
  },
  {
    title: "Krisis Kurang Gerak di Balik Jam Kerja Statis: Mengapa Kursi Ergonomis Mahal Bukan Jawaban Sakit Punggung",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Ergonomi", "Kebugaran", "Postur Tubuh", "Sakit Punggung", "Gaya Hidup"],
    imageUrl: "https://images.unsplash.com/photo-1580481077197-987994508493?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kursi kantor ergonomis dengan sandaran jaring di ruang kerja modern yang terang",
    excerpt: "Membeli kursi kantor ergonomis berharga belasan juta rupiah sering dianggap sebagai investasi penyelamat kesehatan tulang punggung. Padahal masalah utamanya bukan pada kualitas busa kursi, melainkan durasi duduk statis yang melumpuhkan sirkulasi tubuh.",
    content: `Ketika keluhan nyeri leher, bahu kaku, dan pegal punggung bawah mulai mengganggu produktivitas harian, refleks pertama pekerja kantoran modern adalah menjelajahi internet untuk mencari kursi ergonomis terbaik. Iklan perabot kantor dengan gencar mempromosikan penyangga pinggang dinamis (*lumbar support*), sandaran lengan multi-arah, dan jaring elastis kedirgantaraan yang diklaim mampu menyembuhkan segala keluhan postur kerja.

Banyak profesional rela menguras tabungan belasan juta rupiah demi menduduki kursi idaman para eksekutif Silicon Valley. Namun setelah beberapa minggu berlalu, rasa nyeri tumpul di pangkal tulang punggung kerap datang kembali tanpa ampun. Kekecewaan ini muncul karena satu kesalahpahaman mendasar: kursi ergonomis paling canggih di dunia sekali pun tidak dapat membatalkan dampak biologis dari tubuh yang diam membeku selama delapan jam berturut-turut.

## Jebakan Kenyamanan Statis bagi Metabolisme

Tubuh manusia berevolusi untuk bergerak, bukan bertengger tanpa jeda di atas bantalan busa mewah:

* **Deaktivasi Otot Penopang Utama**: Duduk dalam waktu lama melumpuhkan aktivitas elektrik pada otot-otot besar kaki dan bokong (*gluteal amnesia*). Akibatnya, beban tumpuan tubuh beralih langsung ke bantalan tulang belakang (*diskus intervertebralis*), memicu peradangan saraf kejepit.
* **Perlambatan Enzim Pemecah Lemak**: Sirkulasi darah melambat secara dramatis ketika tungkai kaki tidak bergerak. Pelepasan enzim lipase lipoprotein—yang bertugas memecah lemak dalam pembuluh darah—turun hingga sembilan puluh persen saat tubuh duduk diam lebih dari dua jam berturut-turut.
* **Ilusi Postur Sempurna**: Mempertahankan satu posisi duduk yang kaku selama berjam-jam, meski posisinya dianggap "tegak sempurna", tetap menciptakan ketegangan isometrik yang memicu kejang mikro pada serat otot punggung.

## Mengintegrasikan Gerakan Mikro ke Rutinitas Kerja

Kunci kesehatan muskuloskeletal bukanlah mencari sandaran yang lebih empuk, melainkan memecah rantai perilaku sedenter secara sadar:

1. **Prinsip Gerakan Mikro Tiap 30 Menit**: Bangkitlah dari kursi setiap tiga puluh menit untuk sekadar meregangkan betis, berjalan mengambil air minum, atau mengayunkan pinggul selama dua menit.
2. **Variasi Posisi Bekerja**: Gunakan meja kerja berdiri (*standing desk*) secara berselingan. Berdirilah selama dua puluh menit, lalu duduk selama empat puluh menit. Pergantian gravitasi ini merangsang elastisitas ligamen sendi.
3. **Latihan Penguatan Rantai Posterior**: Luangkan waktu lima belas menit setiap pagi untuk melatih otot punggung atas, pinggul, dan paha belakang dengan gerakan sederhana seperti *glute bridge* dan *bird-dog*.

Punggung yang sehat lahir dari frekuensi gerak aktif sepanjang hari, bukan dari kemewahan kursi mahal yang meninabobokan otot-otot tubuh Anda.`
  },
  {
    title: "Standardisasi Suara Musik Streaming: Bagaimana Loudness Normalization Meratakan Dinamika Rekaman",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Audio Streaming", "Mastering", "Loudness War", "Spotify", "Dinamika Suara"],
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Deretan fader dan kenop pada konsol mixer audio rekaman profesional di studio",
    excerpt: "Platform streaming musik menerapkan normalisasi kenyaringan otomatis demi mencegah lompatan volume antar-lagu. Namun di balik kenyamanan pendengar, standarisasi target kenyaringan LUFS justru meratakan dinamika emosional dan detail organik rekaman audio.",
    content: `Kekuatan magis sebuah aransemen musik klasik atau balada rock legendaris sering kali terletak pada ketegangan dinamikanya: bisikan vokal lembut yang nyaris tak terdengar, disusul dentuman simbal drum yang meledak menggetarkan dada, sebelum meluncur kembali ke dalam keheningan yang intim. Kontras antara bagian tenang (*pianissimo*) dan bagian bertenaga (*fortissimo*) adalah kanvas utama tempat seorang komposer menenun emosi manusia.

Namun di era konsumsi audio via platform streaming seperti Spotify, Apple Music, dan YouTube Music, kontras dinamika tersebut kian terancam lenyap. Demi memastikan pengguna tidak terkejut oleh perbedaan volume saat berpindah dari satu trek ke trek lain di dalam daftar putar acak, platform menerapkan algoritma penyeragaman kenyaringan otomatis (*loudness normalization*) berbasis standar -14 LUFS (*Loudness Units relative to Full Scale*).

## Dari Perang Volume ke Perataan Spektrum Suara

Upaya menciptakan kenyamanan pendengaran ini menimbulkan konsekuensi teknis dan artistik yang mendalam:

* **Pengebirian Ledakan Transien (*Transient Punch*)**: Agar sebuah lagu dapat berbunyi sekeras mungkin dalam batas normalisasi, para insinyur mastering dipaksa menggunakan kompresor dan pembatas (*limiter*) agresif. Pukulan snar drum dan petikan senar akustik yang tajam dipangkas hingga mendatar, menghasilkan suara yang padat namun kering tanpa nafas alami.
* **Kelelahan Telinga (*Ear Fatigue*)**: Musik yang diproduksi dengan rentang dinamika sempit memborbardir gendang telinga dengan energi tekanan konstan tanpa jeda istirahat. Hal ini membuat pendengar cepat merasa jenuh dan lelah secara tidak sadar setelah mendengarkan beberapa lagu berturut-turut.
* **Homogenitas Estetika Produksi Modern**: Produser rekaman pemula kini terbiasa memproduksi musik dengan memantau meteran LUFS alih-alih mempercayai kepekaan telinga mereka. Aransemen instrumen disederhanakan agar tidak memicu deteksi penalti penurunan volume dari algoritma platform.

## Mengembalikan Jiwa Dinamika Musik

Musik rekaman bukanlah produk industri massal yang wajib dipotong dengan cetakan ukuran seragam. Keberanian menyajikan dinamika audio—mulai dari desah napas tipis hingga dentuman klimaks tanpa kompresi berlebihan—adalah hakikat kejujuran artistik sebuah karya seni bunyi.

Para musisi dan penikmat audio berhak menonaktifkan fitur normalisasi volume di pengaturan aplikasi mereka, memasang pelantang suara berkualitas, dan menikmati setiap desah nada sesuai dengan visi murni sang pencipta karya.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 06:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 06:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-0600.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
