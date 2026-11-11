import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Skyrim Legendaris Berkat Orang Lama Saat Bos Game Hobi Depak Developer Berpengalaman",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Bethesda", "Bruce Nesmith", "Industri Game", "PC Gaming", "PHK Developer", "Skyrim", "The Elder Scrolls"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/MyvfFsTsp3uiJPAp3NHRnB-1920-80.jpg",
    imageAlt: "Ilustrasi lanskap pegunungan salju provinsi Skyrim dari waralaba The Elder Scrolls garapan Bethesda",
    sourceUrl: "https://www.pcgamer.com/games/the-elder-scrolls/lead-designer-bruce-nesmith-says-skyrim-was-a-hit-because-it-was-built-on-institutional-knowledge-from-oblivion/",
    excerpt: "Bruce Nesmith, mantan lead designer Skyrim, membongkar rahasia mengapa game legendaris tersebut bisa begitu dicintai: akumulasi pengetahuan para pengembang veteran dari era Morrowind dan Oblivion. Di tengah gelombang PHK massal industri modern yang hobi mendepak staf senior demi laporan keuangan kuartalan, pengakuan ini menjadi tamparan keras bagi para eksekutif studio yang mengira baris kode berkualitas bisa digantikan oleh tenaga kerja instan.",
    content: `Kalau Anda mampir ke tongkrongan gamer PC hari ini dan bertanya mengapa rilisan game blockbuster modern belakangan ini kerap terasa hambar, jawabannya jarang berkutat soal urusan spesifikasi kartu grafis. Kita hidup di masa ketika game beranggaran ratusan juta dolar bisa meluncur ke pasar dengan visual fotorealistis yang memanjakan mata, namun anehnya sering kali terasa kosong melompong tanpa jiwa. Mekanik permainannya kikuk, peluncurannya dipenuhi ribuan galat teknis yang bikin sakit kepala, dan pemain disuruh menunggu deretan tambalan pembaruan berbulan-bulan hanya demi membuat game bisa dimainkan dengan layak.

Kontras menggelikan ini menjadi semakin benderang tatkala kita menengok kembali fenomena The Elder Scrolls V: Skyrim. Tiga belas tahun silam, game petualangan dunia terbuka garapan Bethesda Game Studios ini meluncur dan seketika menyihir jutaan orang di seantero jagat. Meskipun mesin permainannya kala itu sarat dengan tingkah laku kocak khas Bethesda—mulai dari kuda yang sanggup mendaki tebing vertikal hingga prajurit kota yang mengeluh lututnya terkena panah—Skyrim tetap kokoh berdiri sebagai monumen kebebasan bermain peran yang tak tergoyahkan. Jutaan pemain rela menghabiskan ribuan jam menjelajahi puncak gunung bersalju tanpa pernah merasa bosan.

Banyak analis industri mengira keberhasilan raksasa tersebut lahir dari mukjizat teknologi baru atau hasil rapat dewan direksi yang cemerlang. Namun asumsi tersebut baru saja dimentahkan langsung oleh sang arsitek perancang utamanya, Bruce Nesmith. Sebagaimana dicatat dalam laporan perbincangan PC Gamer awal pekan ini, mantan lead designer yang mengabdi lebih dari dua dekade di Bethesda tersebut menegaskan bahwa Skyrim bisa menjadi karya fenomenal murni karena ditopang oleh akumulasi memori institusional (*institutional knowledge*) dari tim veteran yang sama.

Nesmith memaparkan bahwa ketika mereka menggarap Skyrim, mayoritas staf inti pengembang adalah orang-orang lama yang sebelumnya telah berkeringat bersama mematangkan Daggerfall, Morrowind, dan Oblivion. Mereka tidak perlu membuang waktu setahun penuh hanya untuk saling menebak alur kerja rekan di meja sebelah atau meraba-raba kelemahan mesin Creation Engine. Tim sudah hafal di luar kepala bagaimana menyeimbangkan sistem sihir, meracik interaksi kecerdasan buatan warga kota, serta menciptakan rasa takjub saat pemain melangkah keluar dari gua pengantar tanpa perlu panduan tutorial yang cerewet.

![Ilustrasi lanskap pegunungan salju provinsi Skyrim dari waralaba The Elder Scrolls garapan Bethesda](https://cdn.mos.cms.futurecdn.net/MyvfFsTsp3uiJPAp3NHRnB-1920-80.jpg)

Pelajaran berharga yang diungkapkan oleh Bruce Nesmith ini pada hakikatnya adalah kritik telak terhadap kegilaan industri game modern. Selama beberapa tahun terakhir, para bos penerbit raksasa seperti Sony, Microsoft, Embracer Group, hingga EA tampak kalap memperlakukan kreator game senior sekadar baris beban pengeluaran di lembar pembukuan. Puluhan ribu developer berpengalaman didepak lewat gelombang pemutusan hubungan kerja massal hanya demi mempercantik margin dividen para pemegang saham di akhir kuartal. Para eksekutif yang mengenakan setelan jas necis ini dengan pongah percaya bahwa pengalaman puluhan tahun para veteran bisa dengan mudah digantikan oleh pekerja alih daya (*outsource*) berupah murah atau bahkan kecerdasan buatan generatif.

Hasil dari kecongkakan manajemen korporasi tersebut kini bisa kita saksikan bersama di etalase toko digital. Studio yang kehilangan para empunya terpaksa membangun roda dari nol, tersandung pada kesalahan pemula yang sama, dan menelurkan sekuel yang rapuh. Fenomena ini tercermin jelas saat [janji manis developer yang berujung penundaan rilis berkali-kali](/warhammer-blood-bowl-kena-tunda-ke-2027-saat-gamer-sudah-lelah) kini menjadi santapan harian komunitas pemain, di mana studio terengah-engah mengejar tenggat waktu akibat tim yang compang-camping. Di saat yang sama, kekosongan nyawa pada rilisan kelas atas membuat pemain lebih terpikat pada [keberanian studio independen merawat orisinalitas gameplay](/ketika-game-jaga-toko-loak-cyberpunk-malah-lebih-memikat) karena digarap oleh tim kecil yang solid dan berjiwa utuh.

Membuat sebuah video game yang asyik bukan sekadar urusan mengetik kode di atas komputer atau menyewa aktor pengisi suara papan atas Hollywood. Ia adalah proses kerajinan tangan kolektif yang membutuhkan kepekaan rasa, chemistry antarmanusia, dan memori kegagalan masa lalu yang saling dibagikan di meja kerja. Pengalaman semacam itu tidak bisa diunduh dari internet dalam semalam, apalagi dibeli lewat instruksi konsultan manajemen.

Para petinggi studio barangkali bisa bertepuk dada di depan forum investor karena berhasil menekan pos anggaran gaji beberapa kuartal ke depan. Namun saat sekuel kebanggaan mereka meluncur dalam keadaan hancur lebur dan dihujat habis-habisan di kolom ulasan Steam, barulah mereka sadar bahwa memecat orang-orang yang paham cara membuat game bagus demi bonus laba sekejap adalah cara paling tolol untuk bunuh diri berjamaah.`
  },
  {
    title: "Pejabat Pamer Konser Ye Sedot Turis Asing Saat Panggung Musisi Lokal Masih Terseok",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Budaya Urban", "Festival Musik", "Gigs Lokal", "Industri Musik", "Kemenpar", "Konser Internasional", "Margaretha Nina", "Ye"],
    imageUrl: "https://api.kemenpar.go.id/storage/app/uploads/public/6ad/fe0/656/thumb_16869_1200_630_0_0_crop.jpeg",
    imageAlt: "Suasana kemegahan panggung konser musik internasional dengan tata cahaya spektakuler di stadion Jakarta",
    sourceUrl: "https://www.kemenpar.go.id/pelatihan-parekraf/siaran-pers-konser-ye-sedot-25-ribu-penonton-asing-indonesia-kian-diperhitungkan-di-panggung-musik-dunia",
    excerpt: "Kementerian Pariwisata membanggakan konser Ye di Jakarta yang diklaim menyedot 25 ribu penonton mancanegara sebagai bukti kebangkitan panggung musik nasional. Namun di balik gegap gempita devisa kilat artis kontroversial Amerika tersebut, ada nasib musisi lokal dan festival mandiri di daerah yang kian tercekik oleh labirin perizinan rumit dan pungutan aparat.",
    content: `Menyaksikan gegap gempita konser megabintang mancanegara di Jakarta belakangan ini memang selalu menghadirkan sensasi yang campur aduk di benak para penikmat musik tanah air. Dalam hitungan detik setelah situs tiket daring dibuka, puluhan ribu lembar karcis berharga jutaan rupiah langsung ludes disapu bersih. Garis linimasa media sosial seketika dipenuhi adu gengsi pamer gelang akses area VIP, sementara di luar stadion megah ibu kota, calo tiket dan pengemudi ojek daring berdesakan di tengah kepulan asap knalpot. Bagi para pengamat gaya hidup di kafe-kafe perkotaan, pemandangan semacam ini kerap dirayakan sebagai simbol prestise bahwa Jakarta sudah sejajar dengan kota-kota metropolitan dunia.

Keriaan konsumtif tersebut kian berlipat ganda manakala aparat birokrasi negara ikut menari di atas panggung euforia. Sebagaimana dicatat dalam rilis resmi Kementerian Pariwisata awal pekan ini, pemerintah secara terbuka membanggakan keberhasilan gelaran konser Ye—nama panggung resmi rapper kontroversial asal Amerika Serikat, Kanye West—yang diklaim sukses menyedot sekitar 25 ribu penonton mancanegara ke Jakarta. Dengan nada penuh kemenangan, kementerian menyebut perhelatan ini sebagai tonggak penting yang membuktikan bahwa industri pertunjukan musik Indonesia kian diperhitungkan di kancah global sekaligus menjadi magnet devisa pariwisata yang dahsyat.

Melihat kalkulasi di atas kertas laporan humas dinas, klaim tersebut barangkali terdengar manis dan patut dibanggakan di depan sorot lampu kamera. Siapa yang tidak senang melihat hotel-hotel berbintang penuh terisi, restoran mewah disesaki pelancong berkantong tebal, dan nama Indonesia wara-wiri di portal berita musik dunia? Namun bila Anda melangkah sedikit menjauh dari karpet merah stadion megah Senayan dan melongok kehidupan para musisi di gang-gang sempit, kemilau tersebut seketika terasa bagai fatamorgana yang getir.

![Suasana kemegahan panggung konser musik internasional dengan tata cahaya spektakuler di stadion Jakarta](https://api.kemenpar.go.id/storage/app/uploads/public/6ad/fe0/656/thumb_16869_1200_630_0_0_crop.jpeg)

Ada kontradiksi telanjang yang menyengat rasa keadilan publik. Sementara musisi asing dengan rekam jejak kontroversi pelik diberi karpet merah, perizinan kilat, dan pengawalan sirene patwal tanpa halangan, ekosistem musik independen lokal justru dipaksa merayap di atas duri birokrasi. Para penyelenggara gigs komunitas dan festival musik arus bawah di daerah saban hari harus bergulat dengan labirin perizinan kepolisian yang luar biasa rumit, bayang-bayang pungutan liar dari berbagai ormas lokal, hingga ancaman pembatalan sepihak hanya beberapa jam sebelum pertunjukan dimulai dengan dalih ketertiban umum. Belum lagi urusan beban pajak hiburan daerah yang mencekik napas para promotor mandiri hingga bangkrut sebelum sempat balik modal.

Uang ratusan miliar yang berputar dalam semalam di panggung Kanye West nyatanya hanya mengalir kembali ke rekening manajemen asing dan segelintir korporasi promotor raksasa. Ekosistem kesenian akar rumput praktis tidak kebagian remah-remah berkah tersebut. Ironi ketimpangan ini bukanlah cerita baru, melainkan cerminan watak lama di mana [kebijakan industri musik nasional terlalu sibuk berfokus pada panggung elite Jakarta](/ketika-jurnalisme-musik-indonesia-terjebak-menatap-daerah-lewat) sehingga kerap mengabaikan denyut nadi kesenian di daerah. Hal ini senada dengan kegelisahan saat [kegelisahan nasib musisi daerah tertutupi oleh gemerlap seremonial penghargaan resmi](/ketika-lagu-ciptaan-menteri-borong-piala-ami-awards-saat-musisi), di mana pejabat lebih suka bersolek di panggung pesta ketimbang membereskan regulasi royalti dan ruang berekspresi bagi anak negeri sendiri.

Membangun ekosistem musik yang sehat dan bermartabat tidak bisa diukur dari seberapa sering kita menyewa megabintang luar negeri untuk menghibur kaum jetset ibu kota. Prestise sebuah bangsa di panggung kebudayaan ditentukan oleh seberapa ramah ruang publik kita bagi anak-anak muda lokal yang ingin memetik gitar di balai warga, menghidupkan panggung gigs bawah tanah di kantong-kantong komunitas, dan merawat karya asli tanpa rasa takut dibubarkan aparat.

Para birokrat boleh saja terus tersenyum semringah merilis grafik perputaran miliaran rupiah dari konser semalam sang musisi Amerika. Namun bagi ribuan musisi lokal yang malam minggunya masih diisi dengan patungan uang bensin demi bisa manggung di kafe remang-remang dan waswas izinnya dicabut mendadak, klaim panggung dunia itu hanyalah pesta kembang api tetangga kaya yang debunya jatuh mengotori atap rumah mereka.`
  }
];

export async function runBatch() {
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
      markAsSeen(art.sourceUrl.trim());
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi 17:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261109-1700.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
