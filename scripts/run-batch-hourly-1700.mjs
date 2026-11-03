import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Bahaya Izin Ekstensi Browser Pihak Ketiga: Mengapa Fitur Tambahan Sepele Diam-diam Mengintai Seluruh Tab Anda",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Browser", "Ekstensi", "Keamanan Siber", "Privasi", "Data Pribadi"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Layar laptop menampilkan diagram keamanan siber dengan latar belakang kode program berwarna biru",
    excerpt: "Menginstal ekstensi browser untuk mengubah kursor atau mencari kupon diskon tampak menyenangkan. Namun izin membaca seluruh situs web membuka celah bagi skrip jahat untuk mencuri kuki sesi dan kata sandi Anda.",
    content: `Setiap kali kita membuka toko pengaya peramban (*browser extension store*), kita disuguhi ribuan perkakas gratis yang menjanjikan kemudahan hidup: pemindai kupon belanja otomatis, penerjemah teks instan, pengatur tata letak dokumen, hingga pengganti tema warna tampilan. Dengan sekali menekan tombol "Tambahkan", fitur-fitur mungil tersebut langsung bersarang di bilah alat kerja kita.

Namun di balik kemudahan instan tersebut, ada transaksi berbahaya yang kerap disetujui tanpa berpikir panjang. Saat jendela persetujuan kecil muncul, mayoritas pengguna menekan tombol izinkan tanpa membaca klausul peringatannya: "Ekstensi ini dapat membaca dan mengubah semua data Anda di semua situs web yang Anda kunjungi." Kalimat sederhana ini sesungguhnya adalah penyerahan kunci brankas digital Anda kepada entitas asing tanpa jaminan integritas.

## Rantai Pasok Rapuh dan Modus Pembajakan Ekstensi Populer

Struktur teknis peramban modern memberikan kekuatan tak terbatas bagi modul pengaya yang telah disetujui:

* **Injeksi Skrip Dokumen Tingkat Penuh (DOM Injection)**: Ekstensi dengan izin akses penuh memiliki kemampuan menyisipkan baris kode JavaScript ke dalam setiap halaman yang Anda buka. Saat Anda mengisi formulir perbankan, mengetik kata sandi akun kerja, atau membaca pesan rahasia, ekstensi tersebut dapat menyalin seluruh ketukan kibor (*keylogger*) dan mengirimkannya ke server pengendali di luar negeri.
* **Bisnis Gelap Pembelian Kepemilikan Ekstensi**: Banyak pengembang ekstensi independen yang awalnya jujur akhirnya menyerah pada godaan uang tunai. Agensi periklanan atau pialang data gelap kerap membeli proyek ekstensi yang telah memiliki jutaan pengguna aktif, lalu secara diam-diam menyuntikkan kode pelacak kuki sesi (*session hijacking*) melalui pembaruan otomatis di latar belakang tanpa disadari pengguna lama.
* **Kelumpuhan Sistem Pengawasan Toko Resmi**: Kendati raksasa pengembang peramban mengklaim memiliki sistem pemindaian keamanan berkala, ribuan ekstensi berbahaya berhasil lolos kurasi setiap tahunnya dengan cara menunda eksekusi kode jahat mereka selama beberapa minggu setelah lolos audit awal.

## Menegakkan Disiplin Kebersihan Peramban Digital

Melindungi integritas data pribadi menuntut sikap skeptis terhadap setiap baris modul tambahan:

1. **Audit dan Pangkas Ekstensi Secara Berkala**: Buka menu manajemen pengaya peramban Anda hari ini juga dan hapus seluruh ekstensi yang tidak benar-benar Anda gunakan dalam aktivitas harian.
2. **Batasi Izin Akses Berdasarkan Klik**: Ubah setelan izin ekstensi dari "Pada semua situs" menjadi "Hanya saat diklik" (*On click*) guna mencegah ekstensi membaca tab lain saat Anda sedang membuka situs perbankan atau email kerja.
3. **Pilihlah Ekstensi Sumber Terbuka (*Open Source*)**: Prioritaskan pengaya yang kodenya dapat diaudit secara terbuka oleh komunitas pengembang global dan hindari ekstensi komersial anonim yang menawarkan janji berlebihan.

Peramban Anda adalah jendela utama tempat seluruh rahasia digital Anda berlalu-lalang. Jangan pernah membiarkan orang asing memasang cermin tembus pandang di bilik pribadi Anda hanya demi fitur sepele yang tidak esensial.`
  },
  {
    title: "Obsesi Resolusi AI dan Upscaling: Mengapa DLSS Menjadi Alasan Pengembang Malas Mengoptimalkan Game PC",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "PC Gaming", "DLSS", "FSR", "Optimasi Mesin", "Grafis Game"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Papan sirkuit kartu grafis komputer canggih dengan pencahayaan LED internal yang menyala",
    excerpt: "Teknologi peningkatan resolusi berbasis kecerdasan buatan mestinya menjadi bonus pendorong frame rate di PC tua. Namun penerbit menjadikannya tongkat penyangga wajib untuk menutupi kegagalan optimasi mesin grafis mentah.",
    content: `Ketika teknologi peningkatan resolusi berbasis jaringan saraf tiruan seperti DLSS milik Nvidia atau FSR besutan AMD pertama kali diperkenalkan ke industri video game, komunitas menyambutnya sebagai terobosan masa depan. Idenya terdengar luar biasa: komputer merender frame pada resolusi rendah yang ringan, lalu algoritma rekonstruksi cerdas merekonstruksi gambar tersebut menjadi ketajaman 4K secara instan dengan efisiensi daya listrik yang mengagumkan.

Namun harapan indah bahwa teknologi ini akan memperpanjang usia kartu grafis kelas menengah kini berbalik menjadi bumerang yang menyakitkan. Alih-alih digunakan sebagai fitur bonus untuk mengangkat performa perangkat keras lawas, teknologi upscaling temporal ini telah dibajak oleh para penerbit game besar sebagai alasan pembenaran untuk melempar karya yang belum dioptimalkan (*unoptimized mess*) ke pasar komersial.

## Kematian Seni Optimasi Tingkat Rendah Mesin Game

Ketergantungan buta pada jalan pintas berbasis perangkat lunak merusak disiplin rekayasa grafis:

* **Tuntutan Spesifikasi Kartu Grafis yang Tak Masuk Akal**: Kini, membaca lembar spesifikasi minimum game keluaran baru kerap mengundang rasa getir. Untuk sekadar meraih kestabilan enam puluh frame per detik pada resolusi standar 1080p, pengembang tanpa malu-malu mewajibkan fitur upscaling diaktifkan pada profil performa tertinggi. Tanpa teknologi tersebut, game berjalan tersendat-sendat layaknya tayangan salindia di kartu grafis seharga belasan juta rupiah.
* **Degradasi Kualitas Visual dan Artefak Gerak**: Rekonstruksi gambar berbasis tebakan algoritma temporal bukanlah pengganti piksel asli. Pada adegan berkecepatan tinggi, upscaling kerap meninggalkan bayangan kabur di belakang karakter (*ghosting*), kilatan piksel yang berkedip aneh pada kabel dan jeruji (*shimmering*), serta melenyapkan detail tekstur halus dedaunan.
* **Pengabaian Manajemen Memori Video (VRAM)**: Karena merasa terlindungi oleh jalan pintas resolusi buatan, tim produksi kerap mengabaikan teknik kompresi tekstur dan penataan beban instruksi kalkulasi (*draw calls*). Akibatnya, alokasi memori video meluap drastis, memicu fenomena pembekuan sistem sesaat (*micro-stuttering*) yang merusak ritme bermain.

## Menuntut Kembalinya Integritas Rekayasa Perangkat Lunak

Komunitas gamer PC tidak boleh membiarkan kelalaian optimasi teknis terus dimaklumi sebagai standar baru:

1. **Uji Performa Game pada Resolusi Render Asli (*Native*)**: Saat membaca ulasan teknis, jadikan tolok ukur performa tanpa upscaling sebagai acuan utama dalam menilai mutu rekayasa sebuah game.
2. **Kritisi Praktik Perilisan Tergesa-Gesa**: Tahan diri dari memuji pengembang yang menambal laju frame rendah semata-mata dengan memperbarui versi pustaka DLSS alih-alih memperbaiki kode mesin grafis mereka yang bermasalah.
3. **Hargai Studio yang Mengedepankan Efisiensi Mesin**: Berikan apresiasi penuh kepada pengembang indie dan studio berdedikasi yang mampu menyajikan dunia visual spektakuler yang meluncur mulus pada perangkat keras tanpa rekayasa resolusi semu.

Perangkat keras komputasi yang mahal layak mendapatkan penghormatan berupa kode permainan yang dirancang dengan dedikasi tinggi, bukan sekadar produk setengah matang yang dipoles perban digital darurat.`
  },
  {
    title: "Sindrom Napas Dangkal di Depan Komputer: Mengapa Screen Apnea Diam-diam Memicu Kelelahan dan Stres Hipoksia",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Screen Apnea", "Pernapasan", "Ergonomi", "Kesehatan Kerja", "Stres"],
    imageUrl: "https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pekerja memejamkan mata dan menghela napas panjang untuk meredakan ketegangan di meja kantor",
    excerpt: "Rasa lelah menusuk dan pening di kepala saat sore hari kerap dituduhkan pada radiasi layar monitor. Padahal tanpa disadari, fokus intens di meja kerja membuat pernapasan Anda melambat drastis atau terhenti puluhan detik.",
    content: `Pernahkah Anda memperhatikan pola pernapasan dada Anda sendiri saat sedang membaca email teguran yang mendesak, menyusun tabel angka yang rumit, atau mengetik balasan pesan penting di layar kerja? Bila Anda mengamatinya dengan jujur, ada kemungkinan besar Anda sedang menahan napas sepenuhnya atau hanya menghirup udara secara sangat dangkal di bagian puncak tenggorokan.

Fenomena fisiologis yang aneh namun meluas ini dikenal dalam dunia kedokteran okupasi sebagai *screen apnea*. Diperkirakan lebih dari delapan puluh persen pekerja profesional perkantoran mengalami episode berhentinya refleks pernapasan alami saat berhadapan dengan layar monitor komputer atau ponsel pintar. Tanpa disadari, kebiasaan menahan napas mikro ini menyabotase pasokan oksigen ke otak dan menjadi akar tersembunyi dari kelelahan mental berkepanjangan.

## Pembajakan Sistem Saraf dan Ledakan Hormon Stres

Mekanisme screen apnea berakar dari respons purba tubuh manusia saat menghadapi ancaman lingkungan:

* **Aktivasi Respon Lawan atau Lari yang Keliru**: Otak manusia memproses rentetan notifikasi tugas yang menumpuk sebagai ancaman predator masa lalu. Untuk memusatkan indra penglihatan pada satu titik bahaya, sistem saraf secara otomatis menahan napas guna mendengarkan suara ancaman di sekitar. Akibatnya, tubuh terkunci dalam status alarm simpatik yang melelahkan.
* **Penumpukan Karbon Dioksida dan Asidosis Mikro**: Menahan napas berulang kali membuat kadar karbon dioksida dalam darah meningkat sementara pasokan oksigen menurun (*hipoksia ringan*). Kondisi ini memicu penyempitan pembuluh darah di kepala, menjelaskan mengapa pekerja kerap merasakan nyeri denyut tumpul di pelipis dan rasa kantuk berat setelah dua jam menatap dokumen.
* **Kelumpuhan Irama Detak Jantung dan Saraf Vagus**: Pernapasan dangkal memutus modulasi alami saraf vagus yang bertugas menenangkan detak jantung. Tanpa ritme tarikan napas diafragma yang dalam, tubuh kehilangan kemampuan menurunkan kadar hormon kortisol, meninggalkan Anda dalam kondisi cemas dan gelisah sepanjang hari kerja.

## Memulihkan Kedaulatan Pernapasan di Ruang Kerja

Memutus rantai kebiasaan screen apnea menuntut pembiasaan kesadaran somatik yang sederhana namun konsisten:

1. **Pasang Pengingat Bernapas di Layar**: Tempelkan catatan kecil di sudut bawah monitor bertuliskan "Tarik Napas Dalam" atau gunakan aplikasi interval hening setiap tiga puluh menit untuk mengamati apakah diafragma Anda bergerak bebas.
2. **Latih Pernapasan Perut Diafragma (Box Breathing)**: Sisihkan waktu dua menit di antara perpindahan tugas: tarik napas perlahan lewat hidung selama empat hitungan hingga perut mengembang, tahan empat hitungan, dan buang perlahan lewat mulut selama empat hitungan.
3. **Perbaiki Sudut Pandang Leher dan Bahu**: Posisi duduk membungkuk dengan kepala condong ke depan secara mekanis menekan rongga dada dan mengunci tulang rusuk. Tegakkan punggung dan turunkan bahu agar paru-paru memiliki volume ekspansi maksimal.

Napas adalah bahan bakar utama ketenangan pikiran dan kejernihan berpikir Anda. Jangan biarkan kotak piksel buatan merampas hak paling mendasar dari tubuh biologis Anda untuk bernapas dengan lega.`
  },
  {
    title: "Kematian Intro Lagu Berdurasi Panjang: Ketika Tuntutan Tiga Puluh Detik Streaming Memutilasi Pembuka Musik Pop",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Produksi Musik", "Industri Musik", "Streaming", "Struktur Lagu", "Komposisi"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Alat musik biola klasik dan partitur kertas di studio musik dengan tata pencahayaan hangat",
    excerpt: "Lagu-lagu legendaris masa lalu berani meluangkan waktu satu menit penuh untuk merajut suasana melalui petikan instrumen pembuka. Di era algoritma streaming hari ini, tradisi intro panjang telah dimutilasi demi aturan royalti tiga puluh detik.",
    content: `Ingatkah Anda pada petikan gitar dua belas senar yang mengalun syahdu selama hampir satu menit penuh sebelum vokal pertama masuk dalam lagu legendaris "Hotel California" milik Eagles? Atau dentingan piano solo yang membangun antisipasi penuh misteri dalam "Bohemian Rhapsody" karya Queen? Bagian pembuka (*intro*) lagu-lagu klasik tersebut bukanlah pemborosan pita kaset rekaman, melainkan pintu gerbang emosional yang mempersiapkan jiwa pendengar sebelum melangkah masuk ke dalam inti cerita lagu.

Namun bila Anda mendengarkan tangga lagu teratas di platform streaming digital hari ini, Anda akan menyaksikan fenomena yang sangat kontras: intro lagu praktis telah lenyap. Dalam tiga atau empat detik pertama, pendengar langsung dihantam oleh vokal utama atau bahkan langsung dilempar ke bagian refrein (*chorus*) lagu dengan ritme yang padat dan terburu-buru tanpa adanya ruang pembangun suasana.

## Jeratan Aturan Finansial Tiga Puluh Detik Pertama

Pelenyapan seni intro lagu bukanlah kebetulan selera musisi, melainkan konsekuensi logis dari formula monetisasi platform streaming:

* **Ambang Batas Pembayaran Royalti Streaming**: Sebagian besar platform pemutar musik berbasis langganan menerapkan aturan ketat: sebuah lagu baru dihitung menghasilkan satu poin royalti bila pendengar mendengarkannya minimal selama tiga puluh detik penuh. Bila pendengar menekan tombol lewati (*skip*) pada detik kedua puluh sembilan, musisi dan label rekaman tidak mendapatkan sepeser pun imbalan uang atas lagu tersebut.
* **Ketakutan Ekstrem Terhadap Tombol Skip Algoritmik**: Riset data analitik menunjukkan bahwa pendengar generasi ponsel pintar memiliki rentang perhatian mikro. Bila lagu dibuka dengan aransemen instrumen yang tenang atau solo melodi yang berkembang perlahan, peluang lagu tersebut dilewati melonjak hingga lima puluh persen, yang seketika menghukum popularitas lagu dalam algoritma kurasi rekomendasi otomatis.
* **Kematian Struktur Narasi Tradisional**: Formula penulisan lagu pop yang telah teruji ratusan tahun—mulai dari intro, bait pertama, jembatan penghubung (*pre-chorus*), hingga refrein yang meledak—telah dipangkas habis demi mengejar format potongan lima belas detik yang ramah dijadikan suara latar belakang video media sosial.

## Menyelamatkan Keindahan Membangun Suasana Musikal

Sebuah karya komposisi musik yang bermartabat menolak diperlakukan layaknya kudapan instan yang harus ditelan dalam sekali suap:

1. **Apresiasi Musisi yang Setia Membangun Dinamika Pembuka**: Berikan apresiasi nyata kepada pencipta lagu independen yang tetap berani menyisipkan intro instrumental yang kaya warna dan membiarkan aransemen lagu berkembang dengan tempo yang wajar.
2. **Latih Kembali Kesabaran Mendengarkan**: Tahan godaan jari Anda untuk segera menekan tombol berikutnya bila sebuah lagu dibuka dengan petikan instrumen yang hening. Biarkan telinga Anda menikmati perjalanan bertahap menuju puncak emosional lagu.
3. **Dukung Format Rilisan yang Utuh**: Nikmati katalog karya musik melalui album format utuh atau sesi rekaman langsung (*live session*) yang memelihara keaslian dinamika aransemen tanpa filter komersial platform daring.

Musik adalah seni menenun waktu dan ruang suara. Mengorbankan keindahan pembuka lagu semata-mata demi memuaskan rumus metrik platform digital adalah kerugian budaya yang merampas keanggunan seni bercerita manusiawi.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 17:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 17:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-1700.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
