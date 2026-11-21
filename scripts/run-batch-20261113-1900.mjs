import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Server Microsoft 365 Tumbang Bukti Ketergantungan Cloud Malah Bikin Jantungan",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Microsoft", "Cloud Computing", "Microsoft 365", "Infrastruktur IT", "Keamanan Siber", "Elang Elano"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/cfgisUwZ3YoQNzEfxyMQwE-1920-80.jpg",
    imageAlt: "Logo Microsoft terpampang di layar komputer dengan latar belakang visual gangguan jaringan server",
    sourceUrl: "https://www.pcgamer.com/software/security/microsoft-says-there-is-no-evidence-of-malicious-activity-being-the-cause-of-the-global-service-outage-affecting-governments-and-organisations-around-the-world/",
    excerpt: "Microsoft menegaskan tumbangnya layanan Microsoft 365 secara global bukan akibat serangan siber. Namun insiden yang melumpuhkan rumah sakit dan kantor pemerintah seantero bumi ini membuktikan betapa rapuhnya sentralisasi cloud modern.",
    content: `Ada hukum tak tertulis di kalangan pekerja kantoran yang saban hari duduk di depan monitor: makin canggih jargon komputasi awan yang digembar-gemborkan para bos IT, makin besar pula potensi kepanikan massal saat ada satu kabel data yang tersenggol di belahan bumi lain. Kita hidup di masa ketika segala urusan—mulai dari absensi kehadiran, obrolan santai di kanal kerja, draf laporan keuangan, hingga rekam medis pasien di instalasi rawat jalan—dilemparkan bulat-bulat ke awan virtual bernama cloud. Para konsultan teknologi dengan setelan necis selalu meyakinkan para direksi bahwa menyewa server raksasa dari korporasi multinasional adalah jalan paling aman menuju efisiensi masa depan. Namun begitu layar komputer mendadak memunculkan kode galat berputar tanpa ujung, seluruh ilusi kemandirian kerja itu langsung runtuh seketika.

Kepanikan berskala raksasa itu meledak di berbagai belahan dunia pekan ini. Sebagaimana dicatat dalam laporan PC Gamer dan The Verge, layanan ekosistem Microsoft 365 mengalami kelumpuhan operasional dahsyat yang menyengat kantor-kantor pemerintahan, institusi publik, dan ribuan korporasi lintas negara. Di Inggris, aparatur kementerian mendadak kehilangan akses berkirim email dinas, sementara layanan kesehatan nasional National Health Service (NHS) dilaporkan kelabakan akibat para dokter tak sanggup membuka portal konsultasi pasien secara daring. Insiden ini tak pelak memicu kecurigaan bahwa sebuah serangan siber berskala global tengah mengoyak benteng pertahanan digital negara-negara barat.

Namun Microsoft buru-buru menyiramkan klarifikasi yang, anehnya, sama sekali tidak membuat situasi terasa lebih menenangkan. Dalam pernyataan resmi yang dirilis tim rekayasa infrastruktur mereka, Microsoft menegaskan bahwa sejauh ini tidak ditemukan bukti adanya aktivitas berbahaya atau serangan peretas di balik insiden tumbangnya sistem. Pihak perusahaan mengakui bahwa pemulihan jaringan telemetri global mereka harus dilakukan secara bertahap dan kapasitas operasional belum sepenuhnya pulih ke titik normal. Saking parahnya tumpukan antrean surat elektronik yang macet di pipa lalu lintas digital, Microsoft bahkan terpaksa memperpanjang batas kedaluwarsa sistem antrean pengiriman email hingga 48 jam penuh demi mencegah pesan-pesan penting terhapus di tengah jalan.

![Logo Microsoft terpampang di layar komputer dengan latar belakang visual gangguan jaringan server](https://cdn.mos.cms.futurecdn.net/cfgisUwZ3YoQNzEfxyMQwE-1920-80.jpg)

Bagi siapa saja yang terbiasa mengurus server lokal di pojokan warkop, pengakuan resmi bahwa kekacauan ini bukan ulah peretas justru terdengar jauh lebih menggelikan sekaligus mengerikan. Jika sebuah serangan peretas canggih berhasil merobohkan sistem, kita setidaknya tahu ada lawan berdarah daging yang sedang berusaha membobol pintu. Tetapi ketika infrastruktur vital sekelas rumah sakit dan birokrasi pemerintahan lumpuh total hanya karena anomali konfigurasi internal dari satu vendor tunggal, kita dipaksa menelan kenyataan pahit bahwa sentralisasi komputasi modern telah menjelma menjadi titik kegagalan tunggal (single point of failure) yang amat rapuh. Kita menertawakan kantor kelurahan yang masih menyimpan arsip di lemari kayu, sembari tak sadar bahwa ketergantungan buta pada satu konglomerat piranti lunak bisa membuat seluruh peradaban perkantoran mati kutu dalam hitungan menit.

Kontradiksi ini memperlihatkan bagaimana janji manis korporasi penyedia awan virtual kerap meninabobokan para pengambil kebijakan. Lembaga negara dan institusi medis dipaksa membayar biaya langganan tahunan berharga selangit demi mengejar predikat modernitas digital, tetapi mereka rela memangkas anggaran untuk membangun infrastruktur cadangan di pelataran lokal. Kerapuhan sistem terpusat ini senada dengan ironi saat [sistem kuno terbukti lebih waras daripada gimmick cloud](/faa-baru-pensiunkan-disket-liuk-bukti-sistem-kuno-lebih-waras) yang sempat mengemuka beberapa waktu lalu, ketika teknologi mandiri tanpa ketergantungan jaringan eksternal justru sanggup bertahan melayani kebutuhan publik tanpa drama server tumbang berjamaah. Menaruh seluruh nasib operasional bangsa di keranjang server milik pihak ketiga di luar negeri adalah perjudian konyol yang selalu membebankan risiko kepada masyarakat biasa.

Di warung kopi pinggir jalan, kejadian ini persis seperti warga satu rukun tetangga yang sepakat membuang semua sumur timba masing-masing demi berlangganan pipa air dari satu juragan kaya di ujung desa. Sang juragan berjanji airnya disaring teknologi canggih dan tak bakal pernah kering. Namun begitu keran induk milik si juragan mampet karena klepnya macet, sekampung langsung kelimpungan tak bisa mandi dan menanak nasi, sementara si juragan santai berkilah bahwa pompanya tidak sedang dirusak maling. Menolak ketergantungan cloud buta bukan berarti anti-kemajuan, melainkan menyadari bahwa kedaulatan operasional adalah hak dasar yang tak pantas digadaikan ke meja tagihan korporasi silikon.`
  },
  {
    title: "Kemenpar Berburu Turis Asing Lewat Konser BTS Saat Penonton Lokal Berdarah-darah",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Kemenpar", "Konser Musik", "BTS", "Guns N Roses", "Budaya Urban", "Margaretha Nina"],
    imageUrl: "https://www.sinarharapan.net/wp-content/uploads/2026/11/IMG-20261113-WA0132-scaled.jpg",
    imageAlt: "Suasana konferensi pers Kementerian Pariwisata terkait optimalisasi wisata musik internasional di Balai Kota Jakarta",
    sourceUrl: "https://www.sinarharapan.net/bts-dan-guns-n-roses-siap-guncang-jakarta-kemenpar-bidik-triliunan-rupiah-dari-wisata-musik/",
    excerpt: "Kementerian Pariwisata membidik perputaran uang triliunan rupiah dari turis asing lewat konser Guns N Roses dan BTS di Senayan. Namun ambisi manis wisata musik ini kontras dengan derita penonton lokal yang diperas calo dan macet parah.",
    content: `Ada pemandangan yang selalu mengulang ironi tiap kali Jakarta kedatangan musisi kelas wahid dari seberang lautan. Beberapa bulan sebelum panggung didirikan, ratusan ribu anak muda di berbagai sudut kota sudah bersiap mengorbankan tabungan, menatap layar ponsel dengan jempol gemetar, dan melakoni ritual perang tiket online yang tingkat stresnya melampaui ujian masuk perguruan tinggi negeri. Begitu tiket ludes dalam hitungan detik ke tangan sindikat calo dan bot otomatis, para penikmat musik lokal cuma bisa gigit jari atau terpaksa merogoh kocek dua kali lipat lebih dalam demi sekadar berdiri di barisan paling belakang. Selama bertahun-tahun, menjadi penonton konser di negeri sendiri terasa seperti perjuangan bertahan hidup yang menguras dompet dan kewarasan.

Namun di mata para pejabat kementerian, hiruk-pikuk konser internasional tampaknya dipandang dengan kacamata yang serba berkilau dan penuh angka rupiah berderet panjang. Dalam konferensi pers di Balai Kota DKI Jakarta pada Jumat, 13 November 2026, Menteri Pariwisata Widiyanti Putri Wardhana secara terbuka mengumumkan strategi mengoptimalkan wisata musik alias music tourism lewat gelaran konser akbar Guns N Roses dan BTS di ibu kota. Pemerintah membidik konser Guns N Roses di Stadion Madya GBK pada 21 November 2026 sanggup menyedot dua ribu turis asing, sementara tur dunia BTS bertajuk Arirang selama tiga hari di Stadion Utama GBK pada akhir Desember 2026 diproyeksikan menarik lebih dari tiga puluh ribu pelancong mancanegara dengan potensi perputaran belanja mencapai ratusan miliar rupiah.

Pihak kementerian menyandarkan rasa percaya diri ini pada capaian konser Ye di Jakarta pada Oktober lalu yang diklaim berhasil menggerakkan ekonomi ratusan miliar rupiah dan membuat hotel-hotel di sekitar Senayan penuh sesak. Angka-angka statistik tersebut dipajang rapi dalam paparan program Event by Indonesia, seolah-olah mendatangkan megabintang pop global otomatis menyulap Jakarta menjadi surga pariwisata pertunjukan sekelas Singapura atau Tokyo.

![Suasana konferensi pers Kementerian Pariwisata terkait optimalisasi wisata musik internasional di Balai Kota Jakarta](https://www.sinarharapan.net/wp-content/uploads/2026/11/IMG-20261113-WA0132-scaled.jpg)

Bagi anak-anak muda yang biasa berkeringat di arena konser independen maupun festival musik arus bawah, retorika manis wisata musik ini terasa begitu berjarak dari realitas lapangan yang semrawut. Menjual mimpi mendatangkan puluhan ribu turis asing ke Senayan terdengar sangat muluk ketika problem mendasar penonton domestik saja tak pernah benar-benar diselesaikan oleh pemangku kebijakan. Sistem penjualan tiket masih dibiarkan menjadi sarang empuk bagi para calo dan spekulan digital tanpa ada regulasi batas harga sekunder yang tegas. Belum lagi urusan logistik venue: kemacetan horor yang mengunci kawasan Gelora Bung Karno hingga dini hari, trotoar yang dikepung parkir liar bertarif getok, serta minimnya integrasi transportasi umum massal ketika puluhan ribu penonton serentak bubar selepas tengah malam. Turis asing mana yang sudi membayar tiket mahal jika harus berakhir telantar di trotoar Sudirman sambil berdebat dengan sopir taksi gelap?

Kecanduan pejabat dalam memamerkan angka konser berbiaya jumbo ini juga kian memperparah ketimpangan skena pertunjukan antara ibu kota dan daerah. Kebijakan ini mengingatkan kita pada kritik tajam saat [pejabat memamerkan konser Ye menyedot turis asing](/kemenpar-pamer-konser-ye-sedot-turis-asing-saat-panggung-musisi) sementara ekosistem panggung musisi lokal di berbagai kota masih terseok-seok mencari panggung yang layak. Anggaran dan kemudahan birokrasi perizinan diobral murah untuk promotor konglomerat yang memboyong artis global, sementara festival musik komunitas di Semarang, Surabaya, atau Yogyakarta kerap dihadapkan pada pungutan liar dan perizinan berbelit-belit. Fenomena ini semakin mempertegas masalah kronis [venue konser musik yang menumpuk di Jakarta](/venue-konser-musik-menumpuk-di-jakarta-saat-penonton-daerah-cuma), memaksa pencinta musik luar pulau merogoh tabungan jutaan rupiah hanya demi membeli tiket pesawat ke Senayan.

Di tongkrongan kedai kopi, ambisi kementerian ini persis seperti tuan rumah yang bernafsu mengundang tamu agung dari luar negeri untuk berpesta di ruang tamu ber-AC, sementara atap dapur rumahnya sendiri bocor dan anak-anaknya disuruh makan mie instan di pojokan. Membuka pintu bagi musisi dunia memang sah-sah saja untuk memutar roda bisnis hiburan, tetapi membanggakannya sebagai prestasi wisata nasional di tengah karut-marut perlindungan penonton lokal adalah bentuk kenaifan birokrasi yang bikin tepuk jidat. Menata kenyamanan transportasi dan membasmi calo tiket semestinya jauh lebih mendesak daripada sekadar sibuk menghitung proyeksi cuan dari saku para pelancong luar negeri.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 19:00 WIB)");
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
      markAsSeen(art.sourceUrl);
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
}

runBatch().catch(err => {
  console.error("Batch Execution Error:", err);
  process.exit(1);
});
