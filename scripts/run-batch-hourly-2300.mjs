import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Bahaya Cadangan Chat Cloud Tanpa Enkripsi Mandiri: Mengapa Fitur Backup Otomatis Diam-diam Membocorkan Privasi E2EE Anda",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Aplikasi Chat", "Enkripsi E2EE", "Keamanan Siber", "Cloud Backup", "Privasi"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Layar ponsel cerdas menampilkan gembok digital hijau yang melambangkan enkripsi pesan pribadi",
    excerpt: "Label enkripsi ujung-ke-ujung di aplikasi obrolan memberi rasa aman mutlak bahwa pesan Anda tidak bisa diintip siapa pun. Namun mengaktifkan cadangan otomatis ke cloud tanpa proteksi kata sandi mandiri membongkar seluruh kunci privasi Anda.",
    content: `Setiap kali kita membuka jendela percakapan baru di aplikasi pesan instan populer, sebuah spanduk kecil berwarna kuning selalu menyapa dengan pesan yang menenangkan: "Pesan dan panggilan dienkripsi secara ujung-ke-ujung (end-to-end encryption / E2EE). Tidak ada orang di luar obrolan ini, bahkan penyedia layanan sekalipun, yang dapat membaca atau mendengarkannya." Bagi ratusan juta pengguna, kalimat ini terasa seperti sertifikat kekebalan privasi mutlak di jagat maya.

Namun rasa aman tersebut sesungguhnya menyembunyikan sebuah pintu belakang raksasa yang sengaja dibiarkan terbuka lebar demi kenyamanan pengguna kasual. Begitu Anda menyetujui tawaran ramah aplikasi untuk mencadangkan seluruh riwayat pesan obrolan, foto keluarga, dan dokumen kerja ke layanan penyimpanan awan pihak ketiga (seperti Google Drive atau iCloud), seluruh benteng kriptografi E2EE yang canggih tersebut seketika runtuh tanpa sisa.

## Ilusi Keamanan di Balik Pintu Belakang Pencadangan Awan

Penyimpanan berkas cadangan tanpa perlindungan enkripsi mandiri menyimpan bahaya kebocoran data yang masif:

* **Penyimpanan Berkas Teks Terbuka di Server Pihak Ketiga**: Saat pesan masih melayang di jaringan transmisi, ia memang terlindungi rapat oleh algoritma enkripsi. Namun begitu berkas cadangan (*database backup*) mendarat di server penyedia awan, salinan basis data tersebut disimpan dalam bentuk yang dapat didekripsi menggunakan kunci enkripsi milik penyedia awan itu sendiri, bukan kunci privat di perangkat Anda.
* **Kerentanan Terhadap Surat Panggilan Hukum Administratif**: Karena penyedia awan memegang kendali atas kunci penyimpanan data, aparat penegak hukum atau otoritas intelijen dapat dengan mudah meminta akses ke seluruh isi riwayat obrolan Anda cukup dengan menyodorkan surat perintah pengadilan resmi kepada operator server, tanpa perlu menyentuh fisik ponsel Anda.
* **Bahaya Pengambilalihan Akun Awan Tunggal**: Bila akun email utama atau akun penyimpanan awan Anda berhasil dibobol peretas akibat kebocoran kata sandi di tempat lain, pelaku dapat langsung mengunduh seluruh arsip obrolan Anda selama sepuluh tahun terakhir dan memulihkannya ke perangkat milik mereka dalam hitungan menit.

## Menegakkan Kedaulatan Kriptografi Percakapan Pribadi

Melindungi kerahasiaan komunikasi harian Anda menuntut kedisiplinan pengaturan keamanan tingkat lanjut:

1. **Aktifkan Fitur Cadangan Terenkripsi Ujung-ke-Ujung (End-to-End Encrypted Backup)**: Masuk ke menu setelan cadangan chat aplikasi Anda dan wajibkan penggunaan kata sandi mandiri enam puluh empat digit atau frasa sandi buatan sendiri yang kuncinya tidak disimpan oleh Google mau pun Apple.
2. **Pertimbangkan Mematikan Cadangan Awan Sepenuhnya**: Bagi obrolan yang memuat informasi sensitif atau rahasia bisnis, matikan opsi cadangan otomatis dan lakukan pemindahan data secara lokal antar-ponsel melalui kabel data fisik saat berganti perangkat baru.
3. **Waspadai Penyimpanan Tangkapan Layar Otomatis**: Hindari kebiasaan menyimpan foto dokumen rahasia di galeri utama ponsel yang secara otomatis disinkronkan ke album foto awan tanpa penguncian folder aman.

Kerahasiaan sebuah obrolan pribadi dibangun di atas rasa percaya. Jangan biarkan kemudahan fitur pencadangan otomatis melucuti hak fundamental Anda atas ruang percakapan yang bebas dari intaian mata asing.`
  },
  {
    title: "Kematian Komunitas Modifikasi Game di PC: Ketika Penerbit Mengunci Berkas Permainan demi Menjaga Monopoli Toko Skin",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "PC Gaming", "Modding", "Komunitas Gamer", "Mikrotransaksi", "Industri Game"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pengaturan komputer meja gaming dengan pencahayaan neon yang menampilkan program editor kode permainan",
    excerpt: "Sejarah emas industri game PC lahir dari kebebasan komunitas membongkar dan memodifikasi berkas permainan secara bebas. Kini penerbit mengunci seluruh aset di balik enkripsi ketat demi memaksa pemain membeli kosmetik digital berbayar.",
    content: `Dalam lembaran sejarah industri game komputer pribadi, komunitas pembuat modifikasi (*modder*) adalah pahlawan tanpa tanda jasa yang melahirkan banyak mahakarya terbesar dunia. Genre game paling populer saat ini—mulai dari arena pertarungan daring (*MOBA*) seperti Dota, pertempuran taktis Counter-Strike, hingga simulasi bertahan hidup DayZ—semuanya berakar dari eksperimen liar para gamer yang membongkar berkas permainan asli di kamar tidur mereka untuk menciptakan aturan main baru secara sukarela dan cuma-cuma.

Namun tradisi inovasi akar rumput yang telah menghidupkan ekosistem game PC selama tiga dekade tersebut kini sedang dihancurkan secara sengaja oleh para penerbit korporat kelas kakap. Alih-alih merilis perkakas pengembangan (*modding tools*) resmi untuk memberdayakan komunitas, pengembang game keluaran terbaru mengunci seluruh folder aset permainan di balik lapisan enkripsi kepemilikan yang rapat, dilengkapi dengan sistem anti-manipulasi (*anti-tamper*) agresif yang memblokir setiap upaya modifikasi berkas lokal.

## Mematikan Kreativitas Pemain demi Mengamankan Keran Mikrotransaksi

Motif di balik penindasan budaya modifikasi permainan sama sekali bukan demi alasan keamanan teknis, melainkan monopoli komersial:

* **Ketakutan Terhadap Kostum Karakter Gratisan**: Alasan utama penerbit mengunci berkas grafis adalah untuk melindungi etalase toko digital mereka. Bila komunitas diizinkan memasang modifikasi kostum buatan penggemar secara bebas, pemain tidak akan lagi merasa perlu merogoh kocek puluhan hingga ratusan ribu rupiah demi membeli skin kosmetik virtual yang dijual resmi oleh penerbit.
* **Pelenyapan Perbaikan Bug Mandiri oleh Komunitas**: Di masa lalu, ketika penerbit merilis game yang dipenuhi galat performa dan meninggalkan proyek tersebut begitu saja, komunitas pemain sering kali merilis tambalan mandiri (*community unofficial patches*) yang memperbaiki kestabilan game secara sukarela. Dengan mengunci berkas permainan, gamer dipaksa hidup selamanya bersama produk yang rusak tanpa ada jalan keluar teknis.
* **Kriminalisasi Para Kreator Independen**: Penerbit modern tidak ragu melayangkan surat somasi hukum (*cease and desist*) bernada ancaman pidana kepada para pembuat modifikasi legendaris yang mencoba menyajikan ekspansi cerita buatan sendiri, membungkam ekspresi kreatif komunitas yang sebenarnya telah membesarkan nama waralaba game tersebut.

## Menjaga Warisan Kedaulatan Modifikasi Komputer Pribadi

Platform komputer pribadi adalah ruang terbuka yang menolak disamakan dengan sistem konsol yang terkunci rapat:

1. **Dukung Game yang Menghormati Fitur Modifikasi Terbuka**: Berikan apresiasi finansial tertinggi kepada studio game yang menyediakan dukungan integrasi Steam Workshop dan membagikan perkakas editor level secara cuma-cuma kepada komunitas.
2. **Kritisi Kebijakan Enkripsi Aset pada Ulasan Toko**: Suarakan keberatan di kolom ulasan publik bila sebuah game PC pemain tunggal sengaja memblokir modifikasi berkas lokal dengan dalih yang dibuat-buat.
3. **Arsipkan Karya Modifikasi Klasik**: Berpartisipasilah dalam merawat server komunitas dan repositori arsip modifikasi mandiri agar karya bersejarah para pembuat mod lama tetap dapat dinikmati oleh generasi pemain masa depan.

Game PC adalah kanvas kolaborasi terbuka antara pengembang dan komunitas pemainnya. Jangan biarkan keserakahan toko mikrotransaksi mematikan benih inovasi kreatif yang menjadi jiwa sejati dari budaya bermain kita.`
  },
  {
    title: "Bahaya Mandi Air Terlalu Panas Sebelum Tidur: Mengapa Suhu Ekstrem Meluruhkan Lipid Kulit dan Mengacaukan Termoregulasi Tubuh",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Dermatologi", "Kualitas Tidur", "Kesehatan Kulit", "Termoregulasi", "Gaya Hidup"],
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Uap air hangat mengepul di dalam kamar mandi bernuansa spa yang menenangkan",
    excerpt: "Berendam atau mandi air mendidih setelah seharian bekerja terasa sangat memanjakan otot yang tegang. Namun suhu air di atas empat puluh derajat Celsius melarutkan lapisan lipid pelindung kulit dan menunda pelepasan hormon tidur alami.",
    content: `Setelah seharian berhadapan dengan tenggat pekerjaan yang menguras tenaga dan menembus udara malam perkotaan yang dingin, memutar keran pancuran air ke batas suhu terpanas terasa seperti kenikmatan surgawi. Siraman air yang mengepulkan uap tebal membasahi punggung dan pundak yang kaku, menghadirkan ilusi bahwa seluruh beban stres fisik dan kelelahan mental sedang luntur bersama buih sabun mandi.

Banyak orang bahkan meyakini mitos populer bahwa mandi air panas mendidih sesaat sebelum tidur adalah resep ampuh untuk membuat tubuh lemas dan cepat mengantuk. Namun dalam perspektif dermatologi klinis dan kronobiologi tidur, kebiasaan mengguyur tubuh dengan air bersuhu ekstrem adalah sabotase biologis ganda: ia mengikis benteng pertahanan alami kulit Anda sekaligus mengacaukan mekanisme pendinginan tubuh yang esensial bagi tercapainya fase tidur nyenyak.

## Erosi Mantel Asam Kulit dan Gangguan Ritme Sirkadian

Dampak buruk dari paparan air bersuhu di atas empat puluh derajat Celsius merusak sistem fisiologis tubuh secara mendalam:

* **Pelarutan Lapisan Seramida dan Pelindung Kulit**: Lapisan terluar kulit (*stratum corneum*) direkatkan oleh molekul lemak alami berupa seramida dan asam lemak bebas yang berfungsi mengunci kelembapan dan menahan masuknya bakteri. Air yang terlalu panas melarutkan lapisan lipid pelindung ini persis seperti air panas meluruhkan minyak pada wajan penggorengan, memicu pengelupasan mikro, rasa gatal hebat (*pruritus*), dan peradangan eksim atopik yang kronis.
* **Penundaan Pelepasan Hormon Melatonin Alami**: Agar manusia dapat memasuki fase tidur gelombang lambat (*deep sleep*), suhu inti tubuh (*core body temperature*) secara biologis harus turun sekitar satu derajat Celsius di malam hari. Mengguyur tubuh dengan air panas sesaat sebelum berbaring menaikkan suhu organ dalam secara mendadak, menipu jam biologis otak sehingga produksi hormon melatonin tertunda dan membuat Anda gelisah bolak-balik di atas ranjang.
* **Vasodilatasi Berlebih dan Beban Sirkulasi Darah**: Suhu panas memicu pelebaran pembuluh darah tepi (*vasodilatasi*) secara masif di permukaan kulit, menyebabkan penurunan tekanan darah mendadak yang dapat memicu pusing kliyengan saat keluar dari kamar mandi serta membebani kerja pompa ruang bilik jantung.

## Menemukan Suhu Sehat untuk Relaksasi Tubuh Optimal

Mendapatkan manfaat relaksasi mandi malam tanpa mengorbankan kesehatan kulit menuntut penyesuaian suhu dan waktu yang presisi:

1. **Jaga Suhu Air pada Rentang Suam-Suam Kuku (37 hingga 38 Derajat Celsius)**: Gunakan air hangat kuku yang terasa nyaman di kulit tanpa membuat cermin kamar mandi tertutup kabut uap tebal atau membuat kulit tampak memerah.
2. **Terapkan Jeda Sembilan Puluh Menit Sebelum Waktu Tidur**: Mandilah satu setengah jam sebelum Anda berencana memadamkan lampu kamar. Jeda waktu ini memberi kesempatan bagi sirkulasi darah tepi memancarkan kelebihan panas ke udara, memicu efek pendinginan alami yang akan mengantar Anda tertidur pulas.
3. **Kunci Kelembapan dengan Losion Pelembap Segera**: Dalam waktu tiga menit sehabis mengeringkan tubuh dengan handuk lembut, oleskan krim pelembap yang mengandung seramida untuk memulihkan mantel lipid kulit sebelum cairan seluler menguap.

Kesehatan kulit dan kedamaian tidur adalah fondasi utama dari peremajaan seluler raga Anda. Rawatlah tubuh Anda dengan kehangatan yang proporsional, bukan dengan panas ekstrem yang membakar vitalitas biologis Anda.`
  },
  {
    title: "Kepunahan Format Hidden Track pada Album Musik: Ketika Era Streaming Mematikan Kejutan Rahasia di Balik Menit Keheningan",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Hidden Track", "Industri Musik", "Streaming", "Piringan Hitam", "Karya Seni"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Cakram padat compact disc berkilau warna pelangi di atas meja kayu studio rekaman",
    excerpt: "Di era kejayaan cakram padat, musisi kerap menyembunyikan lagu rahasia setelah jeda lima menit keheningan di akhir album. Di era keterbukaan algoritma streaming hari ini, keajaiban kejutan tak terduga tersebut telah punah ditelan kepastian daftar putar.",
    content: `Bagi generasi pendengar musik yang tumbuh di era keemasan compact disc pada dekade 1990-an dan awal 2000-an, ada sebuah sensasi magis yang tak terlupakan saat mendengarkan album fisik musisi idola hingga tuntas. Setelah lagu terakhir selesai diputar, alih-alih pemutar musik berhenti, jarum waktu pada layar LCD kecil terus berjalan menembus keheningan bisu selama lima hingga sepuluh menit. Dan mendadak, di tengah kesunyian kamar tidur yang gelap, mengalun sebuah petikan gitar akustik mentah atau rekaman suara candaan musisi di studio yang tidak pernah tertulis pada daftar lagu di sampul belakang album.

Tradisi lagu tersembunyi (*hidden track*) ini adalah bentuk interaksi rahasia yang intim antara seniman dengan penggemar setianya. Dari lagu legendaris "Endless, Nameless" milik Nirvana yang terkubur di ujung album Nevermind, nomor tersembunyi Green Day di Dookie, hingga trek rahasia Coldplay di Parachutes, menemukan lagu-lagu kejutan ini menghadirkan kegembiraan personal layaknya menemukan harta karun terpendam yang hanya diketahui oleh mereka yang rela meluangkan waktu mendengarkan karya musik dengan penuh kesabaran.

## Transparansi Algoritma yang Membunuh Misteri Artistik

Kemenangan format platform streaming digital berbasis awan telah melenyapkan tradisi lagu tersembunyi secara permanen dari kebudayaan populer:

* **Bedah Data Metadata yang Menghilangkan Efek Kejut**: Antarmuka aplikasi pemutar musik modern membedah setiap berkas audio menjadi baris data transparan: judul lagu, durasi detik, jumlah putaran, hingga lirik lengkap terpampang telanjang di layar ponsel. Tidak ada lagi ruang bagi misteri ketika algoritma menuntut kepastian informasi untuk keperluan monetisasi per putaran lagu.
* **Ketidakmampuan Mengakomodasi Menit Keheningan Bisu**: Memasukkan jeda sunyi selama lima menit di era streaming adalah bunuh diri komersial. Pendengar kasual akan mengira aplikasi sedang mengalami gangguan jaringan lalu menekan tombol lewati (*skip*), yang seketika menghukum skor retensi algoritma sang musisi pada sistem rekomendasi otomatis platform.
* **Pemisahan Lagu Tersembunyi Menjadi Trek Komersial Lepas**: Demi memeras royalti tambahan, label rekaman kini memecah lagu-lagu rahasia masa lalu menjadi trek mandiri berlabel edisi mewah (*Deluxe Edition*), mereduksi sebuah lelucon seni yang tulus menjadi komoditas penjualan yang dangkal.

## Menghidupkan Kembali Dahaga Akan Pengalaman Magis Mendengarkan

Menikmati karya seni secara mendalam menuntut ruang bagi hal-hal yang tak terduga dan tidak serba pasti:

1. **Eksplorasi Rilisan Fisik Cakram Padat dan Kaset Pita**: Koleksi kembali format album fisik yang masih menyimpan keaslian alur aransemen orisinal tanpa penyuntingan paksa oleh algoritma komersial.
2. **Dukung Musisi yang Berani Memasukkan Elemen Kejutan Sonik**: Berikan apresiasi kepada musisi independen yang masih setia bereksperimen dengan interlud tanpa nama atau materi rekaman tersembunyi di kanal distribusi mandiri mereka.
3. **Latih Kesabaran Mendengar Tanpa Menatap Layar**: Matikan layar smartphone Anda saat mendengarkan sebuah album musik baru, biarkan imajinasi Anda melayang bebas tanpa terikat pada barisan teks durasi dan visualisasi metrik yang mendistraksi rasa.

Seni musik yang sejati selalu membutuhkan sedikit ruang misteri untuk memantik rasa kagum di sanubari pendengarnya. Jangan biarkan dinginnya keteraturan algoritma merampas keajaiban kejutan tak terduga yang pernah membuat kita jatuh cinta pada kekuatan sebuah karya cipta manusiawi.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 23:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 23:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-2300.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
