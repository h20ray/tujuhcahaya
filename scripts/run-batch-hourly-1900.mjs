import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Bahaya Sinkronisasi Clipboard Lintas Perangkat: Mengapa Fitur Salin-Tempel Otomatis Diam-diam Membocorkan Kata Sandi dan Kode OTP Anda",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Keamanan Siber", "Privasi Data", "Clipboard", "Password Manager", "Smartphone"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Layar monitor dan smartphone menampilkan visual keamanan data digital dengan pencahayaan biru neon",
    excerpt: "Kemudahan menyalin teks di laptop dan langsung menempelkannya di smartphone memang terasa magis. Namun sinkronisasi papan klip otomatis tanpa enkripsi ujung-ke-ujung membuka celah empuk bagi aplikasi latar belakang untuk menyedot kredensial rahasia Anda.",
    content: `Fitur papan klip universal (*universal clipboard*) sering kali dipromosikan sebagai puncak kenyamanan ekosistem digital terintegrasi. Anda menyalin sebuah paragraf panjang atau tautan situs di laptop kerja, lalu dalam hitungan sepersekian detik, teks tersebut sudah siap ditempelkan ke dalam percakapan obrolan di smartphone Anda. Batas antara perangkat keras seolah runtuh, menyajikan alur kerja tanpa gesekan yang memanjakan para profesional modern.

Di balik pesona efisiensi tersebut, ada kerentanan arsitektural fatal yang jarang disadari pengguna. Papan klip (*clipboard*) pada sistem operasi komputer dan smartphone sejatinya dirancang sebagai memori transit sementara yang bersifat publik bagi semua aplikasi aktif. Ketika mekanisme sinkronisasi awan (*cloud sync*) dipasang untuk memantau setiap data yang disalin, seluruh kredensial sensitif yang melintasi memori tersebut ikut terbang melintasi jaringan internet tanpa filter pengamanan yang ketat.

## Lubang Pengawasan pada Memori Papan Klip

Struktur pertukaran data lintas perangkat menyimpan celah eksploitasi yang mengancam privasi:

* **Penyalinan Kata Sandi dan Kunci Kripto Tanpa Disadari**: Setiap kali Anda menekan tombol salin pada aplikasi pengelola kata sandi (*password manager*) atau menyalin token autentikasi dua faktor (OTP), deretan karakter rahasia tersebut tersimpan di clipboard. Fitur sinkronisasi langsung mengunggahnya ke server perantara ekosistem untuk disebarkan ke tablet dan jam tangan pintar Anda, memperluas bidang serangan secara eksponensial.
* **Eksploitasi Membaca Latar Belakang oleh Aplikasi Pihak Ketiga**: Banyak aplikasi smartphone yang berjalan di latar belakang secara agresif memindai isi papan klip setiap kali aplikasi tersebut dibuka. Jika clipboard ponsel Anda baru saja menerima kata sandi perbankan dari laptop kerja melalui fitur universal clipboard, skrip analitik di aplikasi belanja atau game kasual dapat langsung menyalin data tersebut ke server pemasaran mereka.
* **Risiko Riwayat Papan Klip Tanpa Perlindungan Sandi**: Beberapa vendor sistem operasi menyediakan fitur riwayat papan klip (*clipboard history*) yang menyimpan puluhan item teks terakhir yang disalin. Jika laptop ditinggalkan dalam keadaan tidak terkunci beberapa menit di kedai kopi, siapa pun dapat menekan pintasan papan tombol untuk melihat seluruh kata sandi yang pernah disalin hari itu.

## Menutup Celah Bocoran Data pada Papan Klip

Menjaga kerahasiaan identitas digital menuntut disiplin pengaturan memori salin-tempel:

1. **Matikan Fitur Sinkronisasi Papan Klip Awan**: Masuk ke menu pengaturan sistem operasi di laptop dan smartphone Anda, lalu nonaktifkan opsi *Cross-device copy and paste* atau *Clipboard sync across devices* agar data teks hanya tersimpan di memori lokal perangkat.
2. **Aktifkan Fitur Pembersihan Papan Klip Otomatis**: Gunakan aplikasi pengelola kata sandi yang memiliki pengaturan pembersihan memori otomatis (*auto-clear clipboard*) setelah tiga puluh detik pascapenyalinan kredensial.
3. **Hindari Menyalin Frasa Pemulihan dan Kunci Pribadi**: Jangan pernah menyalin frasa pemulihan dompet digital (*seed phrase*) atau kunci privat ke dalam papan klip; ketikkan secara manual atau gunakan autentikasi kunci perangkat keras (*hardware key*).

Papan klip komputer adalah jalur paling intim tempat seluruh rahasia login Anda melintas setiap hari. Rawatlah batas keamanan data Anda dengan mematikan fitur sinkronisasi lintas perangkat yang mengubah pintu brankas privat menjadi panggung terbuka bagi aplikasi lain.`
  },
  {
    title: "Tirani Shader Compilation Stutter di Game PC: Mengapa Komputer Puluhan Juta Rupiah Tetap Gagap Saat Membuka Babak Baru",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "PC Gaming", "DirectX 12", "Grafis Game", "Optimasi Mesin", "Hardware PC"],
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Komputer gaming modern dengan pendingin cair dan kartu grafis canggih menyala di ruangan temaram",
    excerpt: "Membeli kartu grafis kelas atas dan prosesor generasi mutakhir nyatanya tidak menjamin permainan berjalan mulus bebas hambatan. Masalah kompilasi shader DirectX 12 yang diabaikan pengembang terus menyiksa gamer dengan lonjakan patah-patah visual di momen paling krusial.",
    content: `Membangun komputer gaming kelas atas menuntut investasi finansial yang sangat besar. Para antusias rela merogoh tabungan hingga puluhan juta rupiah demi meminang kartu grafis generasi terbaru, prosesor berkecepatan tinggi, dan memori RAM berlatensi rendah. Harapannya sederhana dan wajar: menikmati petualangan grafis imersif dengan laju bingkai ratusan frame per detik (*fps*) yang mulus layaknya mentega.

Namun begitu game petualangan beranggaran besar dibuka untuk pertama kalinya, pengalaman bermain impian tersebut kerap hancur berkeping-keping. Saat karakter melangkah ke arena baru, mengayunkan pedang sihir, atau memicu ledakan pertama, layar monitor tiba-tiba membeku selama sepersekian detik sebelum melompat ke frame berikutnya. Gangguan patah visual ini bukan disebabkan oleh kelemahan perangkat keras Anda, melainkan dosa struktural industri yang dikenal sebagai *shader compilation stutter*.

## Dosa Pengembang di Balik Api Rendah DirectX 12

Peralihan standar antarmuka pemrograman grafis modern membuka borok efisiensi studio besar:

* **Peralihan Tanggung Jawab Kompilasi Shader ke Pengembang**: Pada era API grafis terdahulu seperti DirectX 11, driver kartu grafis secara proaktif menangani penerjemahan kode instruksi visual (*shader*). Namun arsitektur tingkat rendah modern seperti DirectX 12 dan Vulkan memindahkan beban pengelolaan kompilasi tersebut sepenuhnya ke pundak pembuat game. Sayangnya, banyak studio enggan mengalokasikan sumber daya rekayasa untuk mengoptimalkan proses ini.
* **Kompilasi Just-in-Time yang Menghentikan Render Pipeline**: Ketika game menolak melakukan kompilasi di awal dan memilih menerjemahkan shader tepat saat efek visual pertama kali muncul di layar (*just-in-time compilation*), prosesor terpaksa menghentikan antrean render frame. Akibatnya, pemain disuguhi lonjakan grafik *frametime* tajam yang merusak ritme pertempuran cepat.
* **Penerbitan Terburu-buru Mengabaikan Langkah Pra-Kompilasi**: Menerapkan layar tunggu pra-kompilasi shader (*pre-compilation step*) pada menu utama sejatinya adalah solusi teknis yang telah terbukti ampuh. Namun banyak penerbit menolak langkah ini karena takut pemain pemula merasa bosan menunggu beberapa menit di depan bilah proses saat pertama kali meluncurkan game.

## Menghadapi Masalah Patah Layar Kompilasi Shader

Menikmati visual game modern tanpa frustrasi patah-patah menuntut langkah antisipasi praktis:

1. **Biarkan Game Melakukan Pemindaian Shader di Menu Utama**: Jika game Anda menyediakan menu pembangunan cache shader di awal peluncuran, biarkan proses tersebut berjalan hingga seratus persen sebelum menekan tombol mulai bermain.
2. **Perbesar Ukuran Alokasi Shader Cache di Driver**: Buka panel kontrol kartu grafis Anda, cari pengaturan ukuran cache shader (*shader cache size*), lalu ubah nilainya dari default menjadi sepuluh gigabyte atau tanpa batas (*unlimited*).
3. **Suarakan Kritik terhadap Peluncuran Game yang Belum Matang**: Jangan ragu memberikan ulasan kritis pada platform distribusi game jika pengembang mengabaikan optimasi kompilasi shader dan hanya mengandalkan fitur upscaler buatan untuk menutupi kecacatan teknis.

Pengalaman bermain game di komputer mestinya menjadi simbol keunggulan performa visual tanpa kompromi. Jangan biarkan kemalasan optimasi mesin mengubah perangkat keras bertenaga monster menjadi sekadar panggung pertunjukan patah-patah yang mengecewakan selera bermain Anda.`
  },
  {
    title: "Bahaya Menaruh Laptop di Atas Paha Berjam-jam: Mengapa Paparan Panas Rendah Diam-diam Memicu Kerusakan Jaringan Kulit Permanen",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Ergonomi", "Dermatologi", "Laptop", "Gaya Hidup Sehat", "Kesehatan Tubuh"],
    imageUrl: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang bekerja dengan laptop diletakkan di atas meja kerja yang rapi dan terang",
    excerpt: "Bekerja santai sambil memangku laptop di sofa tampak nyaman dan praktis. Namun paparan radiasi termal kronis bersuhu 44 derajat Celsius secara berulang memicu sindrom kulit terpanggang (*erythema ab igne*) yang menggelapkan pigmen kulit paha secara menahun.",
    content: `Fleksibilitas kerja modern telah membebaskan kita dari kungkungan bilik kantor bersekat kaku. Kini siapa pun dapat menyelesaikan laporan penting, menyusun kode program, atau membalas pesan kerja sambil bersandar di sofa empuk ruang tamu, menikmati secangkir kopi di balkon rumah, atau bahkan berselonjor santai di atas kasur. Meletakkan komputer jinjing langsung di atas paha menjadi kebiasaan refleks yang dianggap wajar dan praktis bagi jutaan pekerja lepas.

Namun kebiasaan memangku laptop tanpa alas penyangga menyimpan konsekuensi dermatologis dan vaskular yang kerap diremehkan. Bagian bawah laptop modern yang tipis dan bertenaga tinggi menghasilkan panas konstan berkisar antara 43 hingga 47 derajat Celsius saat kipas pendingin bekerja keras. Panas tersebut memang tidak cukup tinggi untuk membakar kulit secara langsung, tetapi paparan panas suhu rendah yang menempel terus-menerus selama berbulan-bulan diam-diam merusak jaringan mikro pembuluh darah paha Anda.

## Gejala Dermatologis Sindrom Kulit Terpanggang

Radiasi termal berkepanjangan pada bagian tubuh bawah menimbulkan kerusakan sel bertahap:

* **Sindrom Erythema Ab Igne pada Jaringan Epidermis**: Paparan panas termal berulang merusak serat elastis dan pembuluh darah kapiler di lapisan dermis kulit paha. Kondisi ini memicu munculnya ruam kemerahan bermotif jaring laba-laba (*reticular erythema*) yang lama-kelamaan berubah warna menjadi kecokelatan gelap (*hyperpigmentation*) dan sulit hilang secara alami.
* **Peningkatan Suhu Ekstrem pada Area Organ Reproduksi**: Bagi pria, menaruh laptop panas di atas pangkuan menaikkan suhu skrotum hingga dua derajat Celsius dalam waktu kurang dari satu jam. Kenaikan suhu lokal ini mengganggu proses spermatogenesis alami dan berisiko menurunkan kualitas serta motilitas sel reproduksi.
* **Penyumbatan Jalur Ventilasi Udara Pendingin Komputer**: Permukaan paha dan kain celana yang lembut secara efektif menutup lubang intake kipas pendingin di bagian bawah sasis laptop. Akibatnya, komponen internal laptop bekerja dalam suhu lebih panas dari batas normal, melipatgandakan radiasi panas yang dipancarkan langsung ke kulit Anda.

## Menerapkan Perlindungan Fisik Saat Menggunakan Laptop

Mencegah cedera termal pada jaringan kulit menuntut modifikasi kebiasaan ergonomis:

1. **Gunakan Meja Pangkuan Berinsulasi (*Lap Desk*)**: Selalu gunakan alas meja pangkuan portabel yang memiliki bantalan ventilasi bawah atau lempengan kayu untuk menciptakan pembatas termal fisik antara laptop dan kulit paha.
2. **Hindari Memangku Laptop Saat Menjalankan Beban Komputasi Berat**: Jangan pernah meletakkan komputer di pangkuan saat Anda melakukan ekspor video, bermain game, atau menjalankan kompilasi data yang memaksa prosesor bekerja maksimal.
3. **Segera Periksakan Diri Jika Muncul Ruam Jaring Gelap**: Jika permukaan kulit paha mulai menunjukkan garis-garis gelap bermotif renda yang terasa hangat atau gatal, segera hentikan kebiasaan memangku laptop dan konsultasikan dengan dokter spesialis kulit.

Kenyamanan bekerja di sofa rumah semestinya menyehatkan mental dan raga, bukan meninggalkan jejak luka bakar termal tak kasat mata. Rawatlah kesehatan kulit dan postur tubuh Anda dengan menolak menjadikan pangkuan fisik sebagai meja kerja darurat harian Anda.`
  },
  {
    title: "Kematian Bagian Bridge dalam Struktur Lagu Pop: Mengapa Momen Transisi Emosional Paling Magis Dilenyapkan demi Retensi Algoritma",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Produksi Musik", "Industri Musik", "Songwriting", "Streaming", "Pop Modern"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Alat musik gitar akustik dan lembaran partitur nada tergeletak di atas meja kayu studio rekaman",
    excerpt: "Bagian bridge secara historis bertugas memecah kebosanan refrain dan mengantarkan klimaks emosi pendengar menuju puncak lagu. Sayangnya, demi menghindari risiko tombol lewati di platform streaming, produser pop modern tega memangkas habis jembatan melodi yang paling bermakna.",
    content: `Dalam sejarah arsitektur komposisi musik populer, ada satu formula emas yang selama puluhan tahun melahirkan karya-karya abadi di tangga lagu dunia: bait pertama, bait kedua, refrain pembuka, lalu sampailah kita pada bagian jembatan melodi (*bridge*). Bridge bukanlah sekadar pengisi waktu jeda, melainkan titik balik dramaturgi di mana harmoni akord berbelok ke arah tak terduga, melodi vokal berganti modulasi, dan lirik menyuarakan perenungan batin terdalam sebelum meledak kembali ke refrain penutup.

Namun di lanskap produksi musik zaman streaming dan konten video vertikal saat ini, keindahan bagian bridge sedang menghadapi ancaman kepunahan massal. Durasi lagu pop dipangkas secara drastis dari rata-rata empat menit menjadi kurang dari dua setengah menit demi mengejar jumlah putaran putar ulang (*play count*). Ketika durasi harus ditekan sependek mungkin, bagian pertama yang selalu dikorbankan oleh produser dan penulis lagu adalah bridge.

## Perataan Struktur Lagu di Bawah Teror Tombol Skip

Tuntutan algoritma pemutar musik digital membonsai keberanian eksplorasi aransemen:

* **Ketakutan Ekstrem Produser terhadap Penurunan Retensi**: Algoritma rekomendasi streaming memperhitungkan waktu retensi tiga puluh detik pertama dan rasio penyelesaian lagu sebagai metrik kelayakan promosi playlist. Jika pendengar mendapati dinamika tempo lagu melambat di bagian bridge, mereka cenderung menekan tombol lewati (*skip*), yang secara otomatis memberi sinyal negatif ke sistem rekomendasi.
* **Transformasi Lagu Menjadi Pengulangan Hook Berulang**: Demi mempertahankan perhatian instan pendengar media sosial, struktur lagu diubah menjadi siklus repetitif tanpa variasi emosi: langsung membuka dengan bait refrain (*chorus*), diselingi satu bait pendek (*verse*), lalu kembali menghujani telinga dengan refrain sampai lagu berakhir secara mendadak.
* **Hilangnya Keberanian Eksplorasi Harmoni Musisi**: Menulis bagian bridge yang memikat menuntut penguasaan teori harmoni akord alternatif dan kepekaan rasa musikal yang tinggi. Pelenyapan tradisi bridge melahirkan generasi produser pop instan yang hanya mahir merangkai pola empat akord seragam tanpa dinamika aransemen yang kaya.

## Menghidupkan Kembali Kekayaan Struktur Komposisi

Memulihkan kemegahan pengalaman mendengarkan musik menuntut apresiasi terhadap karya utuh:

1. **Apresiasi Lagu-Lagu yang Mempertahankan Arsitektur Lengkap**: Berikan dukungan nyata kepada musisi yang berani merilis karya dengan dinamika aransemen utuh dan tidak takut menyajikan bridge megah yang menyentuh kalbu.
2. **Dengarkan Musik Tanpa Mengandalkan Algoritma Shuffle**: Biasakan mendengarkan album musik secara berurutan dari awal hingga akhir untuk melatih kembali daya tahan apresiasi telinga terhadap pasang surut emosi lagu.
3. **Dorong Penulis Lagu Muda untuk Berani Bereksperimen**: Komunitas musisi independen perlu terus memelihara ruang berkarya yang membebaskan struktur lagu dari belenggu durasi pendek komersial yang menjemukan.

Musik bukan sekadar bunyi latar sepintas lalu untuk mengiringi guliran jemari di media sosial, melainkan sebuah perjalanan emosional yang butuh ruang bernapas. Rawatlah kepekaan apresiasi audio Anda dengan merayakan setiap jembatan nada yang membawa jiwa berkelana melampaui batas refrain biasa.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 19:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 19:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-1900.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
