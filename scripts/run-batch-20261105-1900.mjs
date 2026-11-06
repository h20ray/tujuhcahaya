import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Ketika Discord Akhirnya Menyerah pada Electron dan Membiarkan RAM Kita Bernapas Lega",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Discord", "Teknologi", "Software", "Aplikasi Desktop", "RAM", "Komputer"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/03/acastro_STK062_01.jpg",
    imageAlt: "Ilustrasi aplikasi desktop dan antarmuka komunikasi modern",
    excerpt: "Bertahun-tahun jutaan laptop dipaksa megap-megap hanya demi menjalankan ruang obrolan teks. Kini Discord akhirnya bersiap membuang Electron dan berpaling ke Rust, sebuah pengakuan dosa yang datang sangat terlambat.",
    content: `Kalau ada satu keajaiban rekayasa perangkat lunak modern yang paling sukses menyiksa jutaan kipas laptop di seluruh dunia, gelar terhormat itu hampir pasti jatuh ke tangan Electron. Framework ajaib ini memungkinkan para pengembang malas membungkus satu peramban web Chromium utuh, menyulapnya menjadi berkas instalasi desktop, lalu berpura-pura bahwa itu adalah aplikasi komputer yang sesungguhnya. Hasilnya adalah bencana memori yang kita rasakan setiap hari: cuma demi membuka ruang obrolan teks dan stiker katak meloncat, laptop kerja kita mendadak meraung seperti mesin traktor sawah, menelan alokasi memori RAM hingga dua gigabyte tanpa rasa bersalah.

Kabar baiknya, hari pertobatan itu akhirnya tiba. Sebagaimana dicatat dalam laporan The Verge pada awal November ini, tim teknis Discord diam-diam mulai mengibarkan bendera putih terhadap arsitektur Electron. Mereka dilaporkan tengah merombak fondasi aplikasi desktop mereka secara menyeluruh dan mengalihkan mesin utamanya ke bahasa pemrograman Rust. Sebuah langkah migrasi arsitektur yang diklaim mampu memangkas konsumsi memori secara drastis, mempercepat waktu buka aplikasi, dan menyetop kerak cache yang selama ini menumpuk di latar belakang.

Bagi mereka yang saban hari berkutat di dunia komputasi dan nongkrong di [kanal Teknologi](/category/tech), keputusan Discord ini rasanya seperti melihat seorang perokok berat yang mendadak sadar dan memutuskan ikut lari maraton. Selama hampir satu dekade, Electron dipuja-puji oleh ekosistem startup Silicon Valley sebagai jalan pintas paling hemat biaya. Cukup punya tim pengembang web yang mahir mengetik JavaScript dan CSS, perusahaan bisa meluncurkan aplikasi untuk Windows, macOS, dan Linux sekaligus dalam sekali kayuh. 

![Ilustrasi aplikasi desktop modern](https://platform.theverge.com/wp-content/uploads/sites/2/2025/03/acastro_STK062_01.jpg)

Namun kemalasan arsitektur itu dibayar sangat mahal oleh komputer para pengguna akhir. Bayangkan analogi sederhana ini: ketika Anda butuh mengirim sepucuk surat pos kilat ke tetangga sebelah rumah, alih-alih cukup menyuruh kurir bersepeda motor, pengembang Electron malah mengirimkan satu unit truk kontainer beroda delapan belas lengkap dengan mesin pendinginnya. Truk raksasa itu diparkir di halaman sempit rumah Anda seharian penuh, menghalangi pintu gerbang dan menghabiskan sisa ruang garasi. Begitu pula cara kerja Chromium di balik Discord, Slack, Spotify, hingga Microsoft Teams. Jika Anda membuka tiga aplikasi tersebut secara bersamaan di laptop kantor dengan kapasitas RAM 8GB standar pengadaan instansi, bersiaplah menyaksikan sistem operasi Anda mengalami koma mendadak.

Upaya Discord melompat ke gerbong Rust memperlihatkan pergeseran penting dalam selera industri perangkat lunak. Menurut penjelasan tim teknis yang beredar di komunitas pengembang, bahasa Rust memberikan kendali memori tingkat rendah tanpa perlu menyewa mesin pembersih sampah (*garbage collector*) yang kerap memicu jeda kaku (*lag spikes*). Dalam pengujian awal mereka, konsumsi memori idle berhasil ditekan hingga separuh dari versi lama, sementara konsumsi daya baterai saat panggilan suara berlangsung menunjukkan penurunan yang sangat signifikan.

Fenomena ini sekaligus menjadi tamparan telak bagi para penganut fanatik efisiensi semu. Kita hidup di masa ketika produsen laptop menjual perangkat dengan RAM 16GB sebagai standar mewah berharga belasan juta rupiah, namun kapasitas tersebut langsung lenyap ditelan kerak peramban web yang menyamar sebagai aplikasi native. Di warkop-warkop tempat para pekerja lepas berkumpul, keluhan soal Discord yang membekukan kursor mouse saat sedang rendering video adalah obrolan harian yang paling sering terdengar.

Tentu saja pekerjaan rumah Discord belum sepenuhnya rampung. Menulis ulang aplikasi berskala ratusan juta pengguna harian dari tumpukan JavaScript ke Rust adalah proyek raksasa yang rentan memunculkan kutu sistem (*bugs*) baru. Namun setidaknya, langkah ini membuktikan bahwa para insinyur mereka akhirnya mendengar jeritan keputusasaan para pengguna PC kentang.

Bila ada pelajaran berharga yang bisa kita petik dari tobatnya Discord ini, itu adalah pengingat bahwa perangkat lunak yang baik mestinya meringankan beban kerja otak kita, bukan memeras keringat kipas pendingin laptop sampai jebol.`
  },
  {
    title: "Pemasok Chip Angkat Kaki dan Nasib Kaset Game Fisik yang Kian Mendekati Liang Lahat",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Nintendo", "Industri Game", "Nintendo Switch", "Kaset Game", "Gamer", "Konsol"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2026/11/switchcarts-1152x648.jpg",
    imageAlt: "Kumpulan kartrid fisik game Nintendo Switch di atas meja",
    excerpt: "Keluarnya Macronix dari bisnis chip ROM kartrid bukan sekadar urusan rantai pasok semikonduktor. Ini adalah lonceng lelayu bagi para kolektor yang masih percaya bahwa membeli game berarti benar-benar memiliki fisiknya.",
    content: `Bagi generasi yang tumbuh dengan meniup lubang kaset Nintendo atau mengelus keping cakram PlayStation dengan ujung kaos, memegang kotak game fisik bukan sekadar transaksi jual-beli. Ada sensasi kepemilikan mutlak yang sulit dijelaskan kepada generasi serba streaming: membuka segel plastik yang masih berbau pabrik, membaca lembar buklet instruksi tipis di dalamnya, lalu menancapkan kartrid mungil itu ke slot konsol tanpa perlu pusing memikirkan kuota internet rumah yang tinggal sekarat.

Sayangnya, romantisme kepemilikan benda nyata itu tampaknya tinggal menunggu waktu untuk dimakamkan secara resmi. Menurut laporan investigasi Ars Technica yang dirilis pekan ini, Macronix, perusahaan semikonduktor asal Taiwan yang selama puluhan tahun menjadi pemasok tunggal chip Mask ROM bagi kartrid Nintendo, telah memutuskan untuk mundur teratur dari lini bisnis media fisik tersebut. Alasannya klasik: margin keuntungan pabrik yang kian menipis, disusul meroketnya biaya produksi chip silikon berkapasitas besar di tengah persaingan pasar memori kilat global.

Kabar ini sontak memicu kegelisahan mendalam di kalangan penggemar dan penikmat [ulasan game](/category/game) di seluruh dunia. Pasalnya, Nintendo Switch adalah benteng pertahanan terakhir industri game konsol yang masih sangat mengandalkan kartrid fisik padat (*solid-state*). Ketika sang produsen chip utama memutuskan angkat kaki menjelang peluncuran konsol generasi penerus Nintendo Switch 2, para penerbit game dihadapkan pada dua pilihan pahit: menaikkan harga kaset fisik ke angka yang tak masuk akal, atau menyerah sepenuhnya pada distribusi unduhan digital.

![Kumpulan kartrid fisik game Nintendo Switch](https://cdn.arstechnica.net/wp-content/uploads/2026/11/switchcarts-1152x648.jpg)

Pukulan ini terasa kian menyengat jika kita melihat tren manipulatif yang sudah dilakukan para penerbit game besar belakangan ini. Bahkan sebelum Macronix undur diri, banyak kaset game Switch berlabel mahal yang sejatinya cuma "wadah kosong". Pengguna membeli kotak plastik seharga delapan ratus ribu rupiah di toko game langganan, namun begitu dimasukkan ke dalam mesin, konsol tetap memaksa kita mengunduh berkas data tambalan (*patch*) sebesar tiga puluh gigabyte dari server pusat. Kartrid fisiknya praktis hanya berfungsi sebagai dongle kunci otentikasi plastik yang tak berguna andai koneksi internet Anda sedang terputus.

Di sinilah letak ironi terbesar yang jarang disadari para gamer kasual. Ketika seluruh ekosistem game dipaksa migrasi ke ranah serba digital, status kita sebagai konsumen otomatis diturunkan pangkatnya menjadi sekadar penyewa hak akses sementara. Sebagaimana dicatat oleh berbagai pengamat hukum digital, Anda tidak pernah benar-benar memiliki game digital yang Anda beli di toko daring. Kapan pun penerbit game kehilangan lisensi musik atau server autentikasi mereka ditutup sepihak, judul game bernilai ratusan ribu rupiah di pustaka digital Anda bisa lenyap tanpa ada ganti rugi sepeser pun.

Kartrid fisik adalah satu-satunya jangkar yang menjaga sejarah video game tetap bisa dimainkan sepuluh atau dua puluh tahun mendatang. Tanpa media fisik mandiri yang bisa berjalan tanpa restu server online, ribuan karya seni interaktif berpotensi lenyap ditelan lubang hitam digital ketika korporasi memutuskan mematikan saklar listrik mereka.

Bagi para kolektor dan gamer akar rumput yang gemar berburu kaset bekas di forum media sosial demi menghemat uang jajan, kabar mundurnya produsen chip ini adalah sinyal peringatan keras. Kita sedang digiring paksa memasuki era di mana memegang game secara fisik akan dianggap sebagai barang mewah eksklusif setara piringan hitam vinil.

Maka rawatlah tumpukan kaset game usang yang masih tersusun rapi di rak kamar Anda hari ini. Sebab beberapa tahun lagi, menjelaskan konsep "punya kaset game tanpa perlu izin download server" kepada anak cucu kita mungkin bakal terdengar seperti mendongengkan kisah kapal selam bertenaga uap.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA HOURLY BATCH (Standar 7C Redaksi & Universal JEV)");
  console.log("=================================================================\n");

  const results = [];

  for (let i = 0; i < articles.length; i++) {
    const art = articles[i];
    console.log(`\n-------------------------------------------------------------`);
    console.log(`📝 [Artikel ${i + 1}/${articles.length}] ${art.title}`);
    console.log(`👤 Byline: ${art.byline} | Kategori: ${art.category}`);

    const wordCount = art.content.trim().split(/\s+/).filter(Boolean).length;
    console.log(`📊 Word count: ${wordCount} kata`);

    // 1. Audit editorial 7C
    const audit = validate7cEditorial(art.title, art.content, art.excerpt, art.tags);
    console.log(`🎯 Editorial Score: ${audit.score}/100 | Valid: ${audit.valid}`);
    if (audit.errors.length > 0) {
      console.error(`❌ Errors:`, audit.errors);
      throw new Error(`Artikel "${art.title}" gagal audit 7C: ` + audit.errors.join(", "));
    }
    if (audit.warnings.length > 0) console.warn(`⚠️ Warnings:`, audit.warnings);
    if (audit.suggestions.length > 0) console.log(`💡 Suggestions:`, audit.suggestions);

    // 2. Publish ke local DB dan remote Plesk
    console.log(`📡 Menerbitkan artikel via autoPublishPost (remote: true)...`);
    const pubResult = await autoPublishPost(art, { bypassPause: true, remote: true });
    console.log(`✅ Status: ${pubResult.status} | URL: ${pubResult.url}`);
    console.log(`   Local DB: ${pubResult.dbSaved} | Remote Plesk: ${pubResult.remotePublished}`);
    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 BATCH SELESAI: ${results.length} artikel berhasil dipublikasikan.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261105-1900.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch(err => {
      console.error("Batch Execution Error:", err);
      process.exit(1);
    });
}
