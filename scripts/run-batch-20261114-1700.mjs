import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Merendam HP Basah ke Dalam Beras Cuma Mitos Warisan yang Bikin Teknisi Puyeng",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Smartphone", "Tips Gadget", "Hardware", "Mitos Teknologi", "Servis HP", "Elang Elano"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2026/08/18/photo_member-7-af.jpg",
    imageAlt: "Ilustrasi seorang pengguna memeriksa smartphone basah setelah terjatuh dan terendam air",
    sourceUrl: "https://www.antaranews.com/berita/5854111/hp-terendam-air-apa-yang-sebaiknya-dilakukan-dan-dihindari",
    excerpt: "Kepanikan saat HP tercebur air kerap memicu tindakan fatal, mulai dari menyalakan perangkat hingga menimbunnya di karung beras. Di balik mitos turun-temurun ini, teknisi justru kerap mendapati logic board berkarat dan saluran port penuh tepung pati.",
    content: `Ada sebuah kepanikan massal yang nyaris seragam di seantero negeri ini setiap kali sebuah benda persegi bernama smartphone tiba-tiba tercebur ke tempat yang tidak semestinya. Entah itu meluncur bebas ke dalam bak mandi saat sedang asyik memutar video musik, tersenggol jatuh ke genangan air hujan di pelataran parkir, atau yang paling klasik: tersiram kuah soto panas di warung tenda pinggir jalan. Dalam sepersekian detik, detak jantung pemiliknya mendadak berdegup kencang bak mendengar petir di siang bolong. Tangan gemetar langsung menyambar perangkat yang basah kuyup, lalu dengan kepanikan yang membuncah, jari jemari secara refleks memencet tombol daya berulang kali demi memastikan layar masih menyala.

Dan jika layar ternyata padam, fatwa sakral dari kawan nongkrong di sebelah biasanya langsung meluncur dengan nada sangat meyakinkan: "Cepat benamkan ke dalam karung beras semalaman, besok pasti sembuh sendiri!" 

Mitos menimbun ponsel basah di dalam timbunan beras ini sudah menjelma menjadi ritual turun-temurun yang dipercaya layaknya mukjizat penyembuhan gaib. Dari ibu rumah tangga, mahasiswa perantauan, hingga pegawai kantoran yang sehari-hari berkutat dengan laptop canggih, banyak yang mengira butiran beras memiliki kekuatan hisap supranatural yang mampu menyedot seluruh molekul air keluar dari sela-sela mikroskopis bodi ponsel. Padahal bila dipandang dari meja kerja para teknisi perangkat keras, ritual ini adalah resep paling jitu untuk mempercepat kematian perangkat elektronik kesayangan Anda.

Kekeliruan fatal ini kembali dibedah secara gamblang dalam laporan panduan resmi Antara Tekno pekan ini mengenai langkah darurat penyelamatan perangkat bergerak. Sebagaimana dicatat dalam rilis dan edukasi teknis tersebut, dua tindakan paling lazim yang dilakukan orang awam saat ponselnya terendam air—yakni langsung menyalakan tombol daya dan menenggelamkannya ke wadah beras—justru merupakan pemicu utama kerusakan permanen. Arus listrik yang dipaksakan mengalir di atas tetesan cairan konduktif akan seketika menyulut hubungan arus pendek (*short circuit*), sementara debu tepung pati beras justru mengendap menjadi kerak lumpur yang merusak rongga-rongga sensitif.

![Ilustrasi seorang pengguna memeriksa smartphone basah setelah terjatuh dan terendam air](https://img.antaranews.com/cache/800x533/2026/08/18/photo_member-7-af.jpg)

Beras pada hakikatnya adalah komoditas pangan pokok untuk mengisi lambung manusia, bukan material pengering silika gel yang dirancang laboratorium presisi. Menjejalkan ponsel modern yang memiliki lubang mikrofon, kisi speaker, dan rongga port USB Type-C ke dalam gunungan beras sama saja dengan mengundang partikel tepung pati dan serpihan halus masuk ke dalam ruang sirkuit. Begitu serbuk beras bertemu dengan sisa tetesan air di dalam lubang colokan, ia tidak menyerap kelembapan hingga kering, melainkan berubah bentuk menjadi adonan pasta lengket yang memerangkap air lebih lama di dalam papan sirkuit utama (*motherboard*).

Di era ponsel modern berdesain unibody yang tertutup rapat dengan segel perekat kimia, air yang sudah telanjur menerobos masuk ke bagian dalam tidak akan pernah bisa keluar hanya dengan bantuan beras. Air tersebut akan terperangkap di celah-celah resistor dan chip memori, memicu reaksi oksidasi kimia yang melahirkan korosi hijau berkarat secara perlahan. Ketika pemiliknya merasa aman karena mengira ponselnya sudah "kering" setelah dua hari dikubur di dapur lalu mencoba mencolokkan kabel pengisi daya, percikan api mikro seketika menghanguskan jalur tegangan tinggi di dalam baterai litium.

Kepanikan irasional masyarakat menghadapi ponsel yang rusak ini sejatinya berpangkal dari ketiadaan pemahaman dasar mengenai fisika perangkat keras. Kita kerap memperlakukan gadget modern dengan mitos lama, persis seperti kepanikan berlebihan saat [baterai HP hamil hingga casing melengkung](/baterai-hp-hamil-sampai-casing-melengkung-itu-sinyal-bencana) yang malah disimpan di laci meja alih-alih ditangani teknisi. Tabiat ini setali tiga uang dengan kebiasaan latah sebagian pengguna yang meyakini [mitos pasang mode pesawat demi baterai cepat terisi](/ketika-pengguna-hp-pasang-mode-pesawat-sambil-berharap-baterai) tanpa pernah memahami regulasi voltase pada adaptor modern. Begitu pula saat ponsel basah, banyak orang nekat meniupkan udara panas dari pengering rambut (*hair dryer*), tanpa menyadari bahwa hembusan angin kencang tersebut justru mendorong butiran air merangsek lebih jauh ke sudut-sudut paling terlindung di balik kamera.

Bahkan klaim sertifikasi ketahanan air IP68 yang dibanggakan para vendor di materi iklan kerap melahirkan rasa percaya diri semu yang menyesatkan. Banyak pengguna lupa bahwa lem karet pelindung ponsel lambat laun akan getas dan melemah akibat panas saku celana, keringat berlebih, atau benturan mikro sehari-hari. Begitu daya rekat lem pudar, celah mikroskopis terbuka lebar, dan cairan apa pun bisa leluasa merembes masuk tanpa permisi.

Di pos ronda warkop tempat para teknisi servis pinggir jalan biasa menyeruput kopi saset, cerita tentang ponsel beraroma apek bekas beras sudah menjadi bahan lelucon mingguan yang tak ada habisnya. Para tukang solder ini kerap hanya bisa menggelengkan kepala saat membongkar baut ponsel pelanggan dan menemukan butiran beras terjepit di antara baterai yang melepuh. Menghadapi ponsel tercebur air sejatinya hanya butuh ketenangan akal sehat: segera matikan sistem, seka permukaan luarnya dengan lap lembut tanpa diguncang-guncang, tegakkan lubang port menghadap ke bawah, lalu serahkan kepada teknisi yang memiliki cairan pembersih isopropil alkohol dan bak ultrasonik. Biarkan beras Anda tetap setia berdiam di dalam panci penanak nasi, karena tugas mulianya adalah menjadi teman lauk pauk makan siang, bukan menjadi makam darurat bagi smartphone Anda yang malang.`
  },
  {
    title: "8BitDo Rilis Stik Dua Juta Rupiah Saat Komunitas Gamer Kere Hore Ditinggalkan",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["8BitDo", "Xbox", "PC Gaming", "Hardware", "Gamepad", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/HWw3vf4iqkz9VpWYQt7sA6-1920-80.jpg",
    imageAlt: "Kontroler nirkabel 8BitDo Ultimate 3E dengan lisensi resmi Xbox dan komponen stik modular",
    sourceUrl: "https://www.pcgamer.com/hardware/controllers/8bitdo-ultimate-3e-review/",
    excerpt: "8BitDo meluncurkan gamepad nirkabel berlisensi resmi Xbox seharga 150 dolar atau setara dua setengah juta rupiah. Di balik komponen modular dan sensor presisi, pabrikan yang dulu dicintai gamer berkantong tipis ini kian latah mematok harga elitis.",
    content: `Bagi siapa saja yang menghabiskan masa-masa kuliah atau merintis karier di kamar indekos sembari mengutak-atik emulator game klasik di laptop lawas, nama pabrikan 8BitDo dulunya memiliki tempat yang sangat istimewa di lubuk sanubari. Di masa-masa keemasan itu, 8BitDo adalah oase penyejuk bagi kaum mendang-mending dan gamer berkantong pas-pasan. Ketika kontroler resmi bikinan Sony, Microsoft, atau Nintendo dibanderol dengan harga yang bikin jatah makan mingguan terancam, 8BitDo hadir menawarkan jalan ninja: kontroler bertampang retro yang kokoh, tombol D-pad empuk nan presisi, dan harga yang sangat bersahabat bagi saldo dompet mahasiswa. Membeli stik 8BitDo saat itu adalah simbol perlawanan kaum kere hore terhadap arogansi harga konsol arus utama.

Namun roda industri hiburan digital rupanya selalu memiliki cara untuk menggoda idealisme masa lalu. Begitu nama merek mulai melambung dan skala bisnis kian membesar, aroma komersialisasi elitis perlahan mulai merayap masuk ke ruang kerja para perancangnya. Pabrikan yang dulu dibanggakan karena setia membela kepentingan gamer proletar itu kini tampaknya mulai nyaman mengenakan setelan jas pialang modal, bernafsu mencicipi manisnya fulus dari ceruk pasar periferal premium yang gemar memamerkan gengsi tanpa dasar.

Tanda-tanda pergeseran kiblat tersebut terpampang nyata pekan ini. Sebagaimana dicatat dalam laporan ulasan mendalam PC Gamer, 8BitDo secara resmi meluncurkan kontroler nirkabel teranyar mereka yang diberi nama 8BitDo Ultimate 3E. Mengusung lisensi resmi nirkabel dari Microsoft Xbox, perangkat ini memboyong segudang fitur mutakhir: mulai dari modul stik analog yang bisa dicopot-pasang secara mandiri, tombol belakang yang dapat diprogram, hingga bobot ergonomis yang mantap di genggaman tangan. Namun begitu pandangan mata tertuju pada label banderol harganya, senyum para gamer lawas seketika membeku: 150 dolar Amerika Serikat, atau menembus angka fantastis 2,4 juta rupiah di pasar tanah air.

![Kontroler nirkabel 8BitDo Ultimate 3E dengan lisensi resmi Xbox dan komponen stik modular](https://cdn.mos.cms.futurecdn.net/HWw3vf4iqkz9VpWYQt7sA6-1920-80.jpg)

Melihat angka dua setengah juta rupiah tertera pada sebuah kontroler buatan pabrikan pihak ketiga adalah pemandangan yang membuat dada terasa sesak. Di tongkrongan warung kopi tempat para pekerja lepas dan gamer kasual biasa meluapkan unek-unek, uang dua juta rupiah lebih adalah angka yang sangat sakral. Nominal sebesar itu setara dengan biaya belanja kebutuhan dapur sebulan penuh, uang cicilan motor bebek, atau modal membeli sekeping kartu grafis kelas menengah seken yang masih sanggup melibas judul game modern dengan mulus. Mengeluarkan dana sebesar itu hanya demi seonggok plastik berisi sensor elektromagnetik dan getaran motorik adalah keputusan belanja yang menuntut pertanggungjawaban moral yang berat.

Para perancang di 8BitDo tentu akan membela diri dengan menunjuk chip nirkabel resmi Microsoft yang tertanam di dalamnya. Mereka berdalih bahwa mendapatkan restu sertifikasi dari raksasa konsol asal Redmond itu membutuhkan biaya lisensi yang tidak murah. Namun ironi terbesarnya justru dibongkar sendiri oleh para penguji perangkat keras independen. Di pasaran saat ini, terdapat lusinan pilihan kontroler nirkabel bersensor Hall Effect dengan tingkat presisi setara—bahkan beberapa di antaranya menawarkan polling rate lebih tinggi—yang bisa ditebus dengan harga setengahnya atau bahkan sepertiganya saja. Menjual kontroler dengan harga selangit di tengah iklim ekonomi yang sedang seret adalah bentuk ketidakpekaan sosial yang nyata.

Manuver mematok harga selangit ini kian menegaskan penyakit menular yang sedang menjangkiti industri periferal modern. Para produsen kini berlomba-lomba menjejalkan embel-embel modularitas dan material mewah demi membenarkan kenaikan harga yang tidak masuk akal, persis seperti kebiasaan produsen merancang [mouse berdesain fleksibel tapi tetap bikin encok](/keychron-bikin-mouse-trackball-fleksibel-tapi-encok-pekerja) yang menyasar kaum berkantong tebal. Taktik semacam ini setali tiga uang dengan strategi korporasi yang terus memeras dompet penggemar di lini [konsol genggam Xbox Ally X](/auto-sr-microsoft-hadir-di-handheld-xbox-ally-x-bikin-gamer) lewat janji pembaruan performa yang minim faedah nyata. 

Gamer biasa pada hakikatnya tidak pernah meminta kontroler yang bisa dibongkar pasang layaknya senapan serbu militer atau dilengkapi kotak pengisi daya berlapis beludru. Kebutuhan dasar pemain game sangatlah bersahaja: tombol responsif yang tidak gampang jebol saat dipakai bermain game laga, analog yang tahan banting tanpa terkena wabah penyakit melayang (*analog drift*), serta harga jujur yang tidak membuat perut keroncongan di akhir bulan. Ketika 8BitDo mulai sibuk mengejar laba dari konsumen berkantong tebal, mereka sejatinya sedang mengikis identitas unik yang selama ini membuat jutaan penggemar jatuh cinta pada merek mereka.

Di pos ronda warkop tempat anak-anak muda biasa adu ketangkasan bermain game sepak bola hingga larut malam, peluncuran stik dua juta rupiah ini cuma disambut dengan dengusan tawa getir. Kita disadarkan kembali bahwa di mata korporasi teknologi, romantisme nostalgia komunitas akar rumput hanyalah batu loncatan sebelum mereka terbang tinggi menuju pasar elitis. Bagi kawan-kawan gamer kere hore yang jempolnya masih setia menekan stik kabel murah meriah bertombol longgar, tetaplah tersenyum santai di tongkrongan. Karena sebaik apa pun stik berlisensi dua juta rupiah yang dipamerkan kawan Anda di linimasa, rasa sakit hatinya saat kalah telak di menit-menit akhir pertandingan sepak bola virtual tetap terasa sama perihnya—hanya bedanya, dompet Anda masih utuh untuk beli es teh dan gorengan hangat sampai akhir bulan.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 17:00 WIB)");
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
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 BATCH SELESAI: ${results.length} artikel berhasil diaudit & dipublikasikan.`);
  console.log("=================================================================");
  for (const r of results) {
    console.log(`- [${r.status.toUpperCase()}] ${r.slug} (Skor: ${r.score}) -> ${r.url}`);
  }
}

runBatch().catch(err => {
  console.error("FATAL BATCH ERROR:", err);
  process.exit(1);
});
