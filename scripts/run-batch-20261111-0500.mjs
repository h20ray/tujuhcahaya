import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Oura Beli Chatbot AI Medis Rp10 Triliun Demi Menyulap Cincin Pintar Jadi Dokter Langganan",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Oura Ring", "Counsel Health", "Kecerdasan Buatan", "Chatbot AI", "Teknologi Kesehatan", "Smart Ring", "Gadget"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/06/268600_oura_ring_5_AKrales_0104.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Cincin pintar Oura Ring yang diletakkan di atas meja dengan sensor biometrik kesehatan yang menyala di bagian dalam",
    sourceUrl: "https://www.theverge.com/gadgets/1031284/oura-counsel-health-acquisition",
    excerpt: "Oura mengumumkan kesepakatan bernilai 625 juta dolar AS atau sekitar 10 triliun rupiah untuk mencaplok startup chatbot AI medis Counsel Health. Alih-alih sekadar menjadi alat pemantau tidur dan detak jantung, cincin pintar ini berambisi menjadi klinik berjalan pribadi yang siap mendiagnosis keluhan fisik pengguna, sembari terus mengunci dompet konsumen dalam skema langganan bulanan tanpa henti.",
    content: `Pernahkah Anda membayangkan sebuah masa depan di mana sepotong cincin logam kecil yang melingkar di jari manis bukan lagi lambang ikatan asmara, melainkan mandor kesehatan yang cerewet mengawasi setiap tarikan napas Anda? Di pagi hari, saat mata Anda baru terbuka setengah watt, cincin itu sudah memvonis kualitas tidur Anda buruk hanya karena Anda sempat terbangun mengambil segelas air putih. Di siang hari, getaran halusnya mengingatkan Anda bahwa tingkat stres sedang melonjak saat bos kantor melayangkan teguran di grup obrolan kerja. Kini, mimpi buruk para pencemas kesehatan itu siap naik kelas ke tingkatan yang jauh lebih mahal. Bukan cuma sekadar mencatat angka detak jantung atau suhu kulit, perangkat di jari Anda kini bertekad menjelma menjadi dokter pribadi yang siap mendiagnosis penyakit Anda lewat kecerdasan buatan.

Langkah agresif tersebut resmi diumumkan oleh produsen cincin pintar asal Finlandia, Oura. Sebagaimana dicatat dalam laporan keuangan kuartalan perusahaan dan rilis peliputan The Verge, Oura telah menyepakati perjanjian akuisisi raksasa senilai 625 juta dolar AS atau setara hampir 10 triliun rupiah untuk membeli Counsel Health, sebuah startup penyedia asisten medis berbasis kecerdasan buatan. Dalam wawancara dengan Bloomberg, CEO Oura Tom Hale menegaskan bahwa akuisisi ini dirancang untuk menjembatani jurang antara data biometrik perangkat pintar dengan tindakan medis nyata. Dengan menyerap seluruh staf teknis dan jaringan dokter internal Counsel Health, Oura ingin agar penggunanya bisa berkonsultasi langsung dengan bot medis yang membaca riwayat tubuh mereka, sebelum kemudian dialihkan ke panggilan dokter manusia sungguhan.

![Cincin pintar Oura Ring yang diletakkan di atas meja dengan sensor biometrik kesehatan yang menyala di bagian dalam](https://platform.theverge.com/wp-content/uploads/sites/2/2026/06/268600_oura_ring_5_AKrales_0104.jpg?quality=90&strip=all&crop=0,0,100,100)

Di atas kertas promosi perusahaan rintisan Silicon Valley, narasi yang disajikan tentu terdengar luar biasa revolusioner. Siapa yang tidak tergiur dengan janji deteksi dini penyakit kardiovaskular, pemantauan kesehatan reproduksi yang presisi, hingga saran pemulihan stamina yang diracik khusus untuk metabolisme tubuh masing-masing? Namun bagi siapa saja yang memahami tabiat industri teknologi modern, langkah akuisisi bernilai triliunan rupiah ini menyimpan tanda bahaya besar yang tak boleh diabaikan. Ketika diagnosis medis diserahkan ke tangan algoritma pembelajaran mesin, batas antara saran kesehatan yang obyektif dengan kecemasan yang sengaja diproduksi demi mempertahankan keterikatan aplikasi menjadi sangat kabur. Kita tahu betul bahwa model bahasa kecerdasan buatan punya kebiasaan berhalusinasi, dan menyerahkan penafsiran denyut nadi acak kepada bot otomatis bisa dengan mudah membuat orang sehat mendadak panik mengira dirinya terkena serangan jantung ringan.

Kecurigaan ini makin beralasan mengingat model bisnis Oura yang sejak awal mengandalkan sistem upeti bulanan. Untuk bisa melihat grafik data kesehatan secara lengkap, pemilik cincin yang sudah merogoh kocek lima sampai tujuh juta rupiah di muka masih diwajibkan membayar biaya langganan bulanan. Dengan hadirnya fitur konsultasi dokter AI Counsel Health, sangat mudah ditebak ke mana arah komersialisasi ini bakal bermuara: tingkatan langganan premium baru dengan tarif selangit. Pengguna sejatinya sedang digiring ke dalam perangkap ketergantungan digital baru. Anda membayar mahal demi membeli rasa cemas harian, lalu Anda membayar biaya tambahan bulanan agar asisten bot pintar menenangkan kecemasan yang diciptakan oleh alat itu sendiri. Fenomena memeras kantong konsumen berkedok fitur cerdas semacam ini sejalan dengan [obsesi korporasi menjejalkan kecerdasan buatan ke segala perangkat](/amazon-rilis-robot-satpam-rp15-juta-tapi-tak-berdaya-menghadapi) tanpa memedulikan apakah solusi tersebut benar-benar memecahkan masalah riil di dunia nyata.

Isu yang tak kalah mencemaskan tentu saja adalah privasi data pribadi. Rekam medis dan fluktuasi biometrik adalah informasi biologis paling intim yang dimiliki seorang manusia. Ketika Oura secara terang-terangan berencana menjual akses platform AI ini ke mitra korporat, perusahaan asuransi kesehatan, dan pemberi kerja skala besar, kedaulatan tubuh pengguna berada dalam ancaman nyata. Bayangkan jika di masa depan premi asuransi kesehatan Anda dinaikkan secara sepihak atau lamaran pekerjaan Anda ditolak hanya karena cincin pintar mencatat pola tidur Anda yang berantakan selama dua pekan berturut-turut. Korporasi teknologi selalu berjanji menjaga enkripsi data, namun riwayat kebocoran basis data di berbagai belahan dunia selalu membuktikan bahwa keamanan siber tidak pernah seratus persen kebal dari kecerobohan internal.

Bagi masyarakat awam di tanah air yang sehari-hari menjaga kebugaran tubuh cukup dengan jalan kaki pagi keliling kampung, meminum air rebusan jahe hangat, atau tidur cukup tanpa intervensi notifikasi HP, langkah Oura terasa seperti potret kegilaan warga urban yang kehilangan pegangan hidup sehat. Tubuh manusia bukanlah mesin pabrik yang harus terus-menerus dioptimalkan performanya lewat dasbor analitik komputer. Jika untuk merasa sehat saja kita harus menyewa bot medis seharga sepuluh triliun rupiah di jari manis, mungkin yang sesungguhnya sedang sakit parah bukanlah kondisi fisik kita, melainkan cara kita mendefinisikan ketenangan hidup di tengah bombardir ilusi teknologi digital.`
  },
  {
    title: "Bandai Namco Tutup Studio Unknown 9 Bukti Ambisi Transmedia Runtuh Akibat Gamenya Hambar",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Bandai Namco", "Unknown 9 Awakening", "Reflector Entertainment", "Industri Game", "Steam", "Gamer PC", "Game Flop"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/WTrJjDChn3v8ozas2KjHmf-1920-80.jpg",
    imageAlt: "Cuplikan adegan karakter Haroona dalam game Unknown 9 Awakening dengan latar pemandangan kota kuno bernuansa mistis",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/2-years-after-unknown-9-awakening-bombed-bandai-namco-is-closing-the-studio-that-made-it/",
    excerpt: "Bandai Namco resmi memutuskan untuk melikuidasi dan membubarkan Reflector Entertainment, studio pengembang game Unknown 9: Awakening. Penutupan tragis ini menjadi bukti telak runtuhnya ambisi korporasi Jepang tersebut yang kebelet membangun semesta waralaba lintas media raksasa sebelum membuktikan apakah game perdananya enak dimainkan di tangan komunitas pemain.",
    content: `Dalam beberapa tahun terakhir, ada satu penyakit kronis yang menjangkiti para petinggi penerbit game papan atas: sindrom kebelet menjadi produser Hollywood. Para eksekutif di ruang rapat direksi tampaknya tidak lagi puas hanya merilis satu judul permainan yang seru dan dicintai para pemain. Di kepala mereka, setiap proyek anyar yang disetujui harus langsung dibaptis menjadi sebuah semesta sinematik raksasa alias waralaba lintas media. Sebelum kode permainannya rampung diuji coba, mereka sudah lebih dulu menandatangani kontrak penerbitan novel komersial, memproduksi serial podcast fiksi, mencetak buku komik berwarna, dan membayar aktris papan atas demi memindai wajahnya ke dalam grafis komputer. Mereka bertaruh jutaan dolar dengan asumsi pongah bahwa para penggemar bakal otomatis berbondong-bondong membeli seluruh pernak-pernik cerita tersebut hanya karena namanya dipajang di poster billboard kota besar.

Kini, ilusi arogan itu resmi runtuh berkeping-keping di meja pembukuan. Sebagaimana dicatat dalam laporan resmi Bandai Namco yang dilansir Game Informer dan peliputan PC Gamer, raksasa penerbit asal Jepang tersebut telah mengeluarkan resolusi resmi untuk membubarkan dan melikuidasi anak perusahaan mereka, Reflector Entertainment. Studio yang berbasis di Montreal, Kanada tersebut adalah dalang utama di balik kelahiran game aksi petualangan Unknown 9: Awakening. Dalam pernyataan korporatnya, manajemen Bandai Namco mengaku keputusan likuidasi ini diambil setelah meninjau secara komprehensif prospek bisnis, kebutuhan investasi lanjutan yang terlampau besar, serta minimnya peluang balik modal dari proyek baru yang tengah digarap di tahap pra-produksi.

![Cuplikan adegan karakter Haroona dalam game Unknown 9 Awakening dengan latar pemandangan kota kuno bernuansa mistis](https://cdn.mos.cms.futurecdn.net/WTrJjDChn3v8ozas2KjHmf-1920-80.jpg)

Bagi siapa saja yang sempat memantau peluncuran Unknown 9 pada akhir 2024 lalu, kabar pembubaran ini sebetulnya sama sekali tidak mengagetkan. Proyek yang menghabiskan waktu pengembangan bertahun-tahun dan disokong dana puluhan juta dolar tersebut mendarat di pasar seperti batu kali yang dilempar ke dalam lumpur: lenyap seketika tanpa cipratan ombak. Meski menggandeng aktris serial The Witcher Anya Chalotra sebagai bintang utama dan menggembar-gemborkan semesta narasi terpadu di berbagai media, gameplay inti yang disajikan justru terasa hambar, kaku, dan membosankan. Mekanik siluman yang dijanjikan inovatif ternyata repetitif, kecerdasan buatan musuh sering macet di pojokan dinding, dan optimasi performanya di komputer membuat para pemain geleng-geleng kepala. Di etalase toko Steam, puncak pemain aktif bersamaan bahkan gagal menembus angka tiga ratus orang, sebuah rekor tragis bagi judul yang digadang-gadang sebagai pilar waralaba baru penerbit sekelas Bandai Namco.

Dampak kegagalan telak tersebut langsung memicu efek domino berdarah di dalam studio. Hanya sebulan setelah permainan meluncur ke pasaran, Reflector terpaksa memangkas delapan belas persen karyawannya. Gelombang pemutusan hubungan kerja berlanjut pada awal 2025 ketika proyek internal lain dibatalkan di tengah jalan. Saat itu, CEO Reflector Herve Hoerdt mengakui secara terbuka bahwa keputusan pahit itu berkolerasi langsung dengan kegagalan Unknown 9 yang penjualannya jauh di bawah ekspektasi perusahaan. Hingga akhirnya, Bandai Namco kehabisan kesabaran dan memilih mencabut steker pendanaan secara permanen ketimbang terus menyuntikkan dana ke dalam sumur tanpa dasar. Tragedi penutupan studio akibat salah perhitungan arah desain ini mengingatkan kita pada fenomena saat [kebiasaan industri merilis produk mentah demi mengejar target keuangan](/warhammer-survivors-latah-menjiplak-game-indie-demi-meraup-cuan) selalu berujung pada penolakan keras dari komunitas gamer yang sudah muak disuguhi janji manis promosi kosong.

Yang membuat dada terasa sesak dari peristiwa ini adalah kenyataan bahwa mereka yang menanggung derita paling berat selalu para pengembang di barisan bawah. Para seniman grafis, desainer level, dan programmer yang bekerja lembur demi mengejar tenggat waktu rilis kini harus kehilangan mata pencaharian di tengah pasar kerja industri game yang sedang membeku. Sementara itu, para perancang strategi bisnis yang sejak awal memaksakan konsep semesta transmedia yang muluk-muluk itu biasanya tetap melenggang aman dengan pesangon eksekutif mereka. Mereka lupa pada hukum paling mendasar di industri hiburan interaktif: sebuah game tidak akan pernah bisa menjadi fenomena budaya jika pengalaman memegang pengontrol di tangan pemain tidak menghadirkan kegembiraan yang tulus. Menjual novel dan siniar pendamping tidak ada gunanya jika pemain bahkan tidak betah memainkan gamenya selama dua jam pertama.

Runtuhnya Reflector Entertainment dan semesta Unknown 9 seharusnya menjadi alarm peringatan yang memekakkan telinga bagi seluruh penerbit game di panggung global. Jangan pernah menaruh gerobak di depan kuda. Bangunlah sebuah permainan yang solid, asyik, dan menghargai waktu para pemain terlebih dahulu sebelum sibuk bermimpi menjual hak siar adaptasi film ke layanan streaming daring. Bila para raksasa industri masih bersikeras memperlakukan video game sekadar sebagai etalase jualan waralaba dan bukan sebagai karya seni yang membutuhkan keahlian mekanik mendalam, bersiaplah menyaksikan lebih banyak lagi studio bertalenta yang ditutup paksa di tengah jalan akibat keangkuhan para petinggi yang tak pernah menyentuh stik permainan.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 05:00 WIB)");
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

    if (!audit.valid || audit.score < 80) {
      throw new Error(`Artikel "${art.title}" memiliki skor editorial di bawah 80!`);
    }

    // 2. Publish ke local DB dan remote Plesk
    console.log(`📡 Menerbitkan artikel via autoPublishPost (remote: true)...`);
    const pubResult = await autoPublishPost(art, { bypassPause: true, remote: true });
    console.log(`✅ Status: ${pubResult.status} | URL: ${pubResult.url}`);
    console.log(`   Local DB: ${pubResult.dbSaved} | Remote Plesk: ${pubResult.remotePublished}`);

    // 3. Tandai URL sumber asli sebagai sudah diproses di seen-urls.json
    if (art.sourceUrl) {
      markAsSeen(art.sourceUrl.trim());
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi 05:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261111-0500.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
