import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Bahaya Fitur Simpan Kata Sandi di Browser: Mengapa Brankas Kredensial Otomatis Rentan Disedot Malware Infostealer",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Browser", "Kata Sandi", "Keamanan Siber", "Infostealer", "Privasi"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Gembok keamanan digital bercahaya di atas keyboard laptop gelap",
    excerpt: "Menekan tombol Simpan Kata Sandi di pop-up peramban terasa sangat praktis bagi aktivitas harian. Namun kemudahan ini mengubah berkas lokal komputer Anda menjadi mangsa empuk malware pencuri data.",
    content: `Setiap kali mendaftarkan akun baru atau masuk ke situs perbankan, jendela kecil di sudut peramban selalu muncul dengan ramah menawarkan bantuan: "Simpan kata sandi ini untuk lain kali?". Bagi jutaan pengguna komputer, menekan tombol biru persetujuan tersebut adalah jalan pintas yang sangat melegakan. Kita tidak perlu lagi mengingat kombinasi huruf rumit, angka acak, dan tanda baca di kepala kita.

Namun kenyamanan semu tersebut sesungguhnya menyembunyikan kerapuhan arsitektur keamanan yang sangat mencemaskan. Fitur penyimpan kata sandi bawaan (*built-in password manager*) pada sebagian besar peramban arus utama menyimpan seluruh basis data kredensial Anda di dalam berkas SQLite lokal pada direktori pengguna di sistem operasi komputer Anda.

## Anatomi Serangan Infostealer dan Pembobolan Brankas Lokal

Penyimpanan kata sandi di dalam peramban adalah target nomor satu dari sindikat kejahatan siber modern:

* **Eksploitasi Celah Enkripsi Tingkat Pengguna**: Meskipun peramban menggunakan kunci enkripsi bawaan sistem operasi (seperti DPAPI pada Windows), kunci tersebut dirancang untuk dapat didekripsi secara otomatis oleh proses apa pun yang berjalan di bawah izin sesi akun pengguna yang sama. Begitu Anda tidak sengaja mengunduh berkas berbahaya, malware infostealer (seperti RedLine atau Lumma) dapat membaca dan mendekripsi seluruh daftar kata sandi Anda dalam tempo kurang dari tiga detik.
* **Pencurian Kuki Sesi yang Melewati Otentikasi Dua Langkah (2FA)**: Bahaya yang lebih mengerikan adalah pencurian kuki sesi login aktif (*session cookies*). Bersamaan dengan data kata sandi, malware menyalin kuki peramban Anda, memungkinkan peretas masuk ke akun email atau rekening dompet digital Anda dari komputer mereka di belahan dunia lain tanpa perlu memasukkan kode OTP sama sekali.
* **Penyebaran Data Kredensial ke Pasar Gelap**: Berkas hasil sedotan (*logs*) tersebut langsung dikirimkan ke kanal obrolan terenkripsi milik sindikat penjahat siber dan diperjualbelikan dengan harga murah, membuka jalan bagi pengambilalihan akun secara massal sebelum korban menyadari komputernya telah terinfeksi.

## Membangun Arsitektur Pertahanan Kredensial Mandiri

Mengamankan brankas identitas digital Anda menuntut pemisahan tegas antara peramban dengan perkakas manajemen kata sandi:

1. **Beralih ke Pengelola Kata Sandi Khusus (*Dedicated Password Manager*)**: Gunakan aplikasi pihak ketiga teruji yang menerapkan enkripsi tanpa pengetahuan (*zero-knowledge*) dan mewajibkan kata sandi master unik yang didekripsi sepenuhnya di memori terisolasi.
2. **Bersihkan Seluruh Riwayat Kredensial dari Peramban**: Masuk ke menu setelan browser Anda hari ini juga, ekspor data penting Anda ke brankas baru, lalu hapus seluruh riwayat kata sandi yang tersimpan di dalam peramban.
3. **Matikan Fitur Penawaran Simpan Otomatis**: Nonaktifkan opsi "Tawarkan untuk menyimpan kata sandi" pada semua peramban di komputer dan smartphone Anda guna mencegah pengisian formulir kredensial secara serampangan.

Kunci rumah digital Anda tidak boleh digantung di samping pintu masuk yang transparan. Berikan perlindungan berlapis pada identitas Anda sebelum malware bayangan menyapu bersih seluruh akses kehidupan Anda.`
  },
  {
    title: "Ilusi Fitur Photo Mode dalam Video Game: Ketika Estetika Tangkapan Layar Dipakai Memoles Gameplay yang Dangkal",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Photo Mode", "Desain Game", "Industri Game", "Pemasaran", "Estetika"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Karakter video game berpose dramatis di bawah siraman cahaya bulan dalam tangkapan layar visual sinematik",
    excerpt: "Fitur Photo Mode kini menjadi menu wajib dalam setiap game kelas atas. Namun kebebasan mengatur sudut lensa kamera dan filter warna kerap dijadikan tameng pemasaran untuk menutupi mekanika permainan yang repetitif.",
    content: `Di era media sosial visual saat ini, hampir tidak ada game petualangan beranggaran besar yang berani meluncur ke pasaran tanpa menyertakan fitur Photo Mode. Dengan sekali menekan tombol kombinasi di stik kontroler, waktu di dalam permainan seketika membeku. Pemain diberikan kendali penuh atas sudut lensa kamera 360 derajat, pengaturan bukaan aperture, penyesuaian kedalaman bidang (*depth of field*), hingga puluhan filter saturasi warna yang membuat tampilan visual terlihat layaknya bidikan fotografer majalah profesional.

Namun di balik kemeriahan ribuan tangkapan layar artistik yang membanjiri lini masa media sosial setiap akhir pekan, ada strategi pemasaran licik yang kerap luput dari kesadaran komunitas gamer. Fitur Photo Mode telah bertransformasi dari sekadar sarana berekspresi rekreasional menjadi alat propaganda gratis yang sengaja dirancang untuk menutupi kerapuhan substansi mekanika permainan yang sebenarnya menjemukan.

## Menjual Gambar Diam demi Menutupi Dinamika Bermain yang Kering

Pemujaan berlebihan terhadap estetika tangkapan layar diam merusak esensi seni interaktif:

* **Pemanfaatan Komunitas Sebagai Agen Pemasaran Tanpa Upah**: Penerbit game menyadari bahwa foto tangkapan layar 4K dengan pencahayaan dramatis adalah senjata promosi paling ampuh untuk memancing angka penjualan pra-pesan. Dengan menyediakan perkakas foto yang canggih, mereka secara cerdik memanfaatkan antusiasme pemain untuk mempromosikan produk mereka tanpa perlu mengeluarkan anggaran iklan sepeser pun.
* **Ilusi Kemegahan yang Runtuh Begitu Karakter Bergerak**: Banyak game modern tampak spektakuler saat kamera dibekukan pada sudut tertentu di mode foto, namun seketika terasa kaku begitu tombol resume ditekan. Animasi gerakan karakter terasa berat, interaksi kecerdasan buatan (*AI*) musuh tampak bodoh, dan mekanika pertarungan tidak memiliki bobot kepuasan fisik yang sepadan dengan kemegahan visualnya.
* **Pengabaian Kualitas Desain Level Demi Pemandangan Kartu Pos**: Tim perancang dunia game kerap terdorong menata lanskap semata-mata agar tampak indah saat difoto (*Instagrammable scenery*), alih-alih merancang tantangan navigasi spasial yang menantang dan memicu rasa ingin tahu eksplorasi pemain yang sejati.

## Menilai Karya Interaktif dari Sentuhan Kendali Jemari

Kualitas sejati sebuah karya video game tidak ditentukan oleh keindahan gambar diam yang dapat diunggah ke internet:

1. **Ujilah Kegembiraan Mekanika Bermain (*Core Gameplay Loop*)**: Nilai sebuah game dari seberapa menyenangkan menggerakkan karakter, melompati rintangan, dan memecahkan teka-teki saat waktu permainan sedang berjalan normal tanpa filter foto.
2. **Kritisi Ulasan yang Hanya Mengandalkan Tangkapan Layar Sinematik**: Waspadai promosi yang hanya memamerkan pose dramatis karakter di bawah terik matahari senja tanpa menunjukkan rekaman pertempuran utuh yang jujur.
3. **Dukung Karya yang Memprioritaskan Kedalaman Responsivitas**: Berikan apresiasi tertinggi bagi pengembang yang mengalokasikan tenaga kreatif mereka untuk menyempurnakan fisika kendali tombol dan kecerdasan logika musuh alih-alih sekadar memoles tata rias visual semu.

Video game adalah seni interaksi yang hidup melalui sentuhan rasa di ujung jemari Anda. Jangan biarkan kilau kemewahan bingkai foto dua dimensi membodohi penilaian kritis Anda terhadap mutu permainan yang sebenarnya hampa makna.`
  },
  {
    title: "Bahaya Mengabaikan Otot Bokong Lumpuh: Mengapa Duduk Kursi Menahun Memicu Amnesia Gluteal dan Nyeri Sendi",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Ergonomi", "Amnesia Gluteal", "Nyeri Lutut", "Kesehatan Kerja", "Postur Tubuh"],
    imageUrl: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pekerja kantor duduk di kursi ergonomis dengan postur tubuh yang mulai lelah di penghujung hari",
    excerpt: "Duduk delapan jam di depan meja kerja membuat otot bokong meregang pasif sepanjang hari. Kondisi ini memicu fenomena amnesia gluteal yang memaksa sendi lutut dan pinggang bawah menanggung beban kompensasi yang merusak.",
    content: `Setelah menghabiskan waktu delapan hingga sepuluh jam duduk di kursi busa kantor menyelesaikan setumpuk pekerjaan, banyak pekerja mengeluhkan rasa pegal yang aneh di sekitar pangkal paha, ngilu menusuk di tempurung lutut saat menaiki tangga, atau rasa kaku yang mengunci pinggang bawah saat hendak berdiri tegak. Sering kali keluhan ini dianggap enteng sebagai tanda penuaan dini atau kelelahan otot biasa.

Namun di balik sensasi nyeri yang tampaknya terpisah-pisah tersebut, ilmu kedokteran olahraga dan fisioterapi mengenali sebuah gangguan disfungsi biomekanika yang sangat lazim terjadi pada pekerja modern: sindrom amnesia gluteal (*gluteal amnesia*) atau yang populer dikenal sebagai sindrom bokong mati (*dead butt syndrome*). Kondisi ini terjadi ketika kelompok otot bokong (*gluteus maximus* dan *medius*) kehilangan kemampuan neurologis untuk berkontraksi secara optimal akibat kompresi pasif yang berkepanjangan.

## Efek Domino Inhibisi Resiprokal pada Rantai Gerak Tubuh

Kelumpuhan fungsi otot bokong memicu kerusakan struktural di sepanjang rantai kinetik tubuh bagian bawah:

* **Fenomena Inhibisi Resiprokal Otot Panggul**: Duduk menahun membuat otot fleksor paha depan (*iliopsoas*) berada dalam status kontraksi memendek secara permanen. Melalui hukum neurologis inhibisi resiprokal, saraf tulang belakang secara otomatis menonaktifkan sinyal pemicu kontraksi pada otot antagonisnya, yaitu otot bokong di bagian belakang panggul. Akibatnya, otot gluteus praktis tertidur lelap dan "lupa" cara berkontraksi saat Anda berdiri atau berjalan.
* **Pergeseran Beban Menuju Bantalan Sendi Lutut**: Otot gluteus medius berfungsi sebagai stabilisator utama yang menjaga panggul tetap sejajar dan mencegah lutut menekuk ke arah dalam (*knee valgus*). Ketika otot ini tidak aktif, tulang paha berotasi tidak wajar, memicu gesekan berlebih pada tulang rawan tempurung lutut yang berujung pada sindrom nyeri patelofemoral yang menyiksa.
* **Beban Kompensasi Berlebih pada Tulang Belakang Lumbal**: Tanpa sokongan daya dorong dari otot gluteus maximus saat melangkah, tubuh terpaksa mengerahkan otot punggung bawah (*erector spinae*) dan otot paha belakang (*hamstring*) untuk menarik tubuh maju. Beban kerja paksa ini menjepit bantalan cakram tulang belakang dan memicu peradangan saraf skiatika yang menjalar ke kaki.

## Membangkitkan Kembali Memori Otot Panggul yang Tertidur

Memulihkan fungsi biologis otot bokong menuntut latihan aktivasi saraf yang terarah dan konsisten:

1. **Lakukan Latihan Jembatan Gluteus (Glute Bridges) Setiap Pagi**: Berbaringlah telentang dengan lutut tertekuk, lalu angkat panggul ke atas sembari meremas otot bokong secara sadar selama tiga detik sebelum menurunkannya perlahan sebanyak lima belas kali repetisi.
2. **Hindari Duduk Tanpa Jeda Lebih dari Empat Puluh Lima Menit**: Berdirilah secara berkala dan lakukan gerakan meremas otot bokong secara bergantian saat sedang menyeduh minuman atau menelepon rekan kerja guna melancarkan sirkulasi impuls saraf lokal.
3. **Peregangan Otot Fleksor Paha Depan**: Lakukan peregangan kuda-kuda rendah (*kneeling hip flexor stretch*) untuk melepaskan ketegangan otot psoas di selangkangan agar otot bokong memiliki ruang gerak bebas untuk kembali aktif.

Panggul adalah pusat gravitasi dan fondasi kekuatan gerak dari seluruh raga manusia. Jangan biarkan kursi kantor yang empuk menidurkan otot paling kuat di tubuh Anda hingga memicu kerusakan sendi permanen.`
  },
  {
    title: "Hilangnya Dinamika Tepuk Tangan Penonton Otentik: Mengapa Rekaman Konser Musik Modern Memalsukan Sorakan Massa",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Konser Musik", "Live Album", "Produksi Audio", "Rekaman Suara", "Otentisitas"],
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kerumunan penonton konser musik mengangkat tangan di bawah sorotan lampu panggung yang megah",
    excerpt: "Mendengarkan album rekaman konser langsung masa lalu menyajikan keaslian gemuruh riuh dan siulan penonton yang membakar atmosfer. Di era siaran festival digital hari ini, audio penonton kerap diredam dan diganti dengan sampel sorakan kalengan yang steril.",
    content: `Putar kembali album rekaman langsung (*live album*) legendaris dari dekade 1970-an atau 1990-an karya musisi seperti Nirvana, Led Zeppelin, atau Queen. Perhatikan bagaimana suara penonton terekam bukan sebagai derau pengganggu, melainkan sebagai instrumen musik tambahan yang tak ternilai harganya: ada teriakan histeris seorang penggemar di baris depan, siulan melengking yang memecah kesunyian jeda lagu, dan tepuk tangan spontan yang ritmenya tidak beraturan namun memancarkan gelombang energi listrik yang membuat bulu kuduk berdiri.

Namun bila Anda mendengarkan rekaman siaran festival musik daring atau album live yang dirilis di platform streaming komersial hari ini, Anda akan menjumpai pemandangan sonik yang sangat berbeda. Riak suara penonton terdengar terlalu rapi, seragam, dan berjarak. Tidak ada lagi kehangatan spontanitas manusiawi yang meledak-ledak. Yang tertinggal hanyalah dengungan suara sorak massa yang dipoles sedemikian rupa hingga terdengar layaknya efek suara penonton buatan (*canned crowd noise*) dari permainan simulasi sepak bola komputer.

## Sterilisasi Tata Suara Panggung demi Kesempurnaan Komersial

Pelenyapan suara otentik penonton dalam rekaman konser modern berakar dari obsesi kontrol teknis yang berlebihan:

* **Peredaman Mikrofon Ambien Ruangan (*Room Mics*) Secara Ekstrem**: Insinyur audio era sekarang kerap mematikan atau menyaring habis sinyal dari mikrofon penonton karena takut suara bising lapangan akan mengotori kejernihan vokal musisi utama yang hendak dipoles ulang menggunakan koreksi nada otomatis di studio pascaproduksi.
* **Penyisipan Bank Sampel Sorakan Tiruan**: Alih-alih merawat rekaman asli reaksi penonton lapangan yang dinamis, penata suara sering kali secara malas menempelkan sampel rekaman tepuk tangan generik dari pustaka suara digital. Hasilnya adalah suara riuh yang terdengar datar, mekanis, dan tidak memiliki kaitan emosional dengan peristiwa unik yang sedang terjadi di atas panggung.
* **Kematian Budaya Ketidaksempurnaan yang Indah**: Album rekaman langsung masa lalu dicintai justru karena cacat-cacat organiknya: vokal yang sedikit serak akibat melompat, petikan senar yang beradu dengan gemuruh koor massal ribuan orang, serta interaksi tatap muka yang tulus. Mensterilkan rekaman konser dari ketidaksempurnaan ini sama saja dengan merampas jiwa dari esensi pertunjukan panggung itu sendiri.

## Mengapresiasi Kembali Dialog Kejujuran di Panggung Pertunjukan

Karya seni pertunjukan musik adalah manifestasi perjumpaan jiwa antara seniman dengan komunitas pendengarnya:

1. **Koleksi Rilisan Rekaman Konser Independen yang Mentah**: Burulah rilisan album live independen (*bootleg* resmi atau rekaman meja mixing langsung) yang mempertahankan seluruh dinamika suara ruangan tanpa polesan autotune tambahan.
2. **Hadirilah Panggung Pertunjukan Musik Berskala Intim**: Nikmati konser di panggung klub atau ruang komunitas kecil tempat batas antara musisi dan penonton melebur tanpa adanya penyaring peranti lunak korporasi.
3. **Hargai Keringat dan Keaslian Nada di Atas Panggung**: Berikan apresiasi nyata kepada para musisi yang berani merilis rekaman pertunjukan langsung apa adanya, membuktikan bahwa keberanian tampil jujur jauh lebih berharga daripada kepalsuan audio yang steril.

Musik panggung adalah gelombang rasa yang hidup dan bernyawa. Jangan biarkan teknologi studio pascaproduksi membunuh keajaiban teriakan jiwa ribuan manusia yang bersatu di bawah langit pertunjukan.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 22:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 22:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-2200.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
