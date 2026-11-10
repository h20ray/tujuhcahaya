import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Afgan Borong Piala AMI Awards Saat Musisi Independen Menjerit Tercekik Royalti",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Margaretha Nina", "AMI Awards 2026", "Afgan", "Industri Musik", "Musisi Indie", "Royalti Musik", "Budaya Urban", "R&B Indonesia"],
    imageUrl: "https://rri-portal-app-assets.obs.ap-southeast-4.myhuaweicloud.com/upload/berita/image/jakarta/thumbs/xl_1794297338672205_09adb9f0de_berita_jakarta.webp",
    imageAlt: "Afgan memamerkan piala kemenangan kategori Artis Solo Pria R&B Terbaik pada ajang AMI Awards 2026 di Jakarta",
    sourceUrl: "https://rri.co.id/jakarta/hiburan/2885321/afgan-raih-piala-ami-awards-2026-lewat-kategori-rb",
    excerpt: "Afgan kembali memborong trofi bergengsi kategori Artis Solo Pria R&B Terbaik di ajang AMI Awards 2026. Namun di balik pesta gemerlap karpet merah para pesohor ibu kota, ribuan musisi independen di pelosok nusantara masih menjerit menghadapi pembagian royalti streaming yang bernilai pecahan sen rupiah.",
    content: `Panggung penghargaan musik di negeri ini selalu punya aroma yang seragam: kilau lampu sorot temaram, aroma parfum mahal para pesohor, dan senyum kaku di karpet merah yang dipenuhi para petinggi label rekaman besar. Di atas panggung megah itu, trofi berkilap dibagi-bagikan diiringi tepuk tangan meriah yang terdengar steril. Ajang Anugerah Musik Indonesia (AMI) Awards ke-29 tahun 2026 kembali mengulang ritual tahunan tersebut tanpa ada kejutan yang berarti. Nama-nama besar yang wajahnya sudah wara-wiri di baliho raksasa jalan protokol Jakarta kembali dipanggil ke podium untuk menerima piala demi piala. Publik dipaksa menyaksikan perayaan kemakmuran segelintir musisi papan atas yang sudah kenyang panggung sponsor, sementara ribuan musisi independen yang tiap malam berpeluh menyetel gitar di panggung kafe remang-remang hanya bisa menatap layar smartphone dengan senyum kecut.

Sebagaimana dicatat dalam laporan siaran RRI Jakarta dan catatan resmi Yayasan AMI, solois Afgan kembali menorehkan prestasi dengan menyabet trofi bergengsi untuk kategori Artis Solo Pria R&B Kontemporer Terbaik lewat karya terbarunya bertajuk "Shallow Water". Dalam pidato kemenangannya, penyanyi bersuara khas tersebut mengungkapkan rasa syukur mendalam karena eksplorasi musiknya masih diapresiasi di tengah dinamika pasar yang bergerak liar. Kemenangan ini memperpanjang deretan panjang koleksi piala Afgan di ajang AMI Awards sejak ia pertama kali menggebrak industri musik tanah air hampir dua dekade silam. Di satu sisi, pencapaian Afgan membuktikan konsistensi musikalitas seorang vokalis pop papan atas yang mampu menjaga kualitas produksi tetap prima. Namun di sisi lain, dominasi nama-nama veteran di kategori-kategori utama justru memperlihatkan betapa mandeknya sirkulasi udara di ruang redaksi kurasi musik arus utama Indonesia.

![Afgan memamerkan piala kemenangan kategori Artis Solo Pria R&B Terbaik pada ajang AMI Awards 2026 di Jakarta](https://rri-portal-app-assets.obs.ap-southeast-4.myhuaweicloud.com/upload/berita/image/jakarta/thumbs/xl_1794297338672205_09adb9f0de_berita_jakarta.webp)

Ada kontradiksi telanjang yang selalu disembunyikan di balik gemerlap panggung gala dinner bertiket jutaan rupiah tersebut. Industri musik arus utama Indonesia gemar merayakan angka-angka spektakuler: miliaran kali diputar di platform streaming, jutaan pengikut media sosial, dan sederet piala emas di lemari kaca. Namun mereka pura-pura buta pada kenyataan bahwa mesin industri ini sejatinya berjalan dengan mengorbankan rantai makanan paling bawah. Bagi musisi di luar lingkaran label raksasa, ekosistem musik tanah air saat ini sedang berada dalam kondisi gawat darurat. Tarif per putaran di layanan streaming digital kian menyusut hingga menyentuh pecahan sen rupiah yang menghina akal sehat. Untuk sekadar membayar sewa studio latihan bulanan saja, seorang musisi indie harus mengumpulkan ratusan ribu streaming organik tanpa bantuan bot atau promosi berbayar. Ketimpangan ini kian kontras saat kita melihat bagaimana panggung penghargaan formal lebih suka memberi karpet merah kepada figur mapan, berbeda dengan momen langka saat [Idgitaf membawa isu krisis iklim ke panggung megah AMI Awards](/idgitaf-bawa-banjir-dan-asap-hutan-ke-panggung-gemerlap-ami) yang sempat mengejutkan kemapanan para tamu undangan berdasi.

Keresahan ini bukan sekadar gerutuan iri dari para musisi kamar tidur yang gagal terkenal. Tengok saja bagaimana nasib band-band independen di berbagai kota di luar Jakarta. Mereka harus memutar otak mencari pinjaman dana hanya demi memproduksi rilisan fisik kaset pita atau mencetak kaus merchandise, karena pemasukan dari karya digital sama sekali tidak bisa diandalkan untuk membeli beras. Situasi ini diperparah oleh sengkarut regulasi hak cipta dan tata kelola royalti pertunjukan langsung yang tak kunjung menemukan titik terang. Alih-alih membenahi transparansi lembaga manajemen kolektif agar uang royalti benar-benar menetes ke kantong pencipta lagu di akar rumput, para pemangku kebijakan sering kali lebih sibuk memamerkan seremoni formalitas belaka, persis seperti sindiran tajam soal [royalti hak cipta yang masih menjadi misteri tak berujung bagi musisi kecil](/pemerintah-bangga-gratiskan-hak-cipta-saat-royalti-musisi-masih) yang hingga hari ini belum pernah merasakan sepeser pun uang hasil keringat karya mereka. Di ruang-ruang gigs komunitas independen, trofi AMI Awards sudah lama kehilangan sakralitasnya; ia tak ubahnya mainan pajangan bagi mereka yang punya privilese koneksi industri.

Melihat Afgan kembali tersenyum bangga menenteng piala emas tentu menyenangkan bagi para penggemar setianya yang setia menanti lagu cinta di radio mobil. Namun bagi ribuan anak muda yang masih menabung recehan demi menyewa sound system di pojok gang sempit, piala berkilau itu tak lebih dari lampu disko yang menyilaukan mata. Industri musik kita memang sangat pandai berpesta dan menepuk pundak sendiri, asalkan mereka tidak perlu menengok ke belakang panggung di mana para musisi arus bawah sedang kebingungan membayar tagihan listrik kontrakan.`
  },
  {
    title: "Warhammer Survivors Latah Menjiplak Game Indie Demi Meraup Cuan Kilat Tanpa Ide Baru",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Warhammer Survivors", "Vampire Survivors", "Games Workshop", "PC Gaming", "Industri Game", "Steam", "Game Indie"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/pUAtdsuf3rVrGneiJe6qXc-1920-80.jpg",
    imageAlt: "Tangkapan layar gameplay Warhammer Survivors yang menampilkan karakter Space Marine menembak gerombolan musuh bergaya Vampire Survivors",
    sourceUrl: "https://www.pcgamer.com/games/roguelike/warhammer-survivors-review/",
    excerpt: "Penerbit Games Workshop resmi merilis Warhammer Survivors di platform Steam. Bukannya merancang konsep segar dari semesta fiksi gelap 40K yang kaya cerita, korporasi raksasa ini justru menjiplak mentah formula mekanik Vampire Survivors dengan balutan skin Space Marines demi meraup cuan gampang dari kerja keras developer independen.",
    content: `Di tengah kelesuan industri video game yang kian hobi memecat karyawan dan mengeluhkan biaya produksi yang melangit, selalu ada pola memalukan yang berulang dari para penerbit raksasa: kemalasan berpikir. Ketika seorang pengembang independen berhasil menciptakan sebuah konsep mekanik yang segar dan meledak di pasaran hanya bermodalkan modal pas-pasan, Anda bisa bertaruh bahwa dalam waktu beberapa bulan saja para eksekutif berjas rapi akan segera memerintahkan anak buahnya untuk menyalin formula tersebut mentah-mentah. Kita sudah menyaksikan fenomena ini saat puluhan tiruan battle royale bermunculan pasca-meledaknya PUBG, atau serbuan game kartu digital abal-abal setelah Hearthstone merajai pasar. Kini, giliran subgenre survival bullet-heaven yang dipopulerkan oleh game fenomenal Vampire Survivors buatan Luca Galante yang harus rela dijarah habis-habisan oleh korporasi yang kehabisan ide segar.

Sebagaimana dicatat dalam laporan ulasan teknis PC Gamer dan Polygon, penerbit Games Workshop bersama studio pengembang resmi meluncurkan Warhammer Survivors di platform Steam pekan ini. Mengusung nama besar semesta fiksi gelap Warhammer 40.000 yang legendaris, game ini langsung memicu perdebatan sengit di forum-forum komunitas pemain PC. Pasalnya, gameplay yang disajikan benar-benar merupakan replika karbon dari Vampire Survivors: pemain mengendalikan prajurit antariksa Space Marine di tengah arena tertutup, menghindari ribuan monster Tyranid yang mengepung dari segala penjuru layar, sembari senjata bolter dan pedang rantai menembak otomatis tanpa perlu diarahkan secara manual. Tiap kali musuh tumbang dan menjatuhkan kristal pengalaman, pemain naik level untuk memilih tiga kartu upgrade acak demi membangun sinergi kekuatan ofensif. Perbedaan paling mencolok hanyalah grafis model tiga dimensi yang lebih mengilap dan deretan suara tembakan berat khas faksi Imperium manusia.

![Tangkapan layar gameplay Warhammer Survivors yang menampilkan karakter Space Marine menembak gerombolan musuh bergaya Vampire Survivors](https://cdn.mos.cms.futurecdn.net/pUAtdsuf3rVrGneiJe6qXc-1920-80.jpg)

Kelahiran Warhammer Survivors memperlihatkan ironi menyedihkan dari industri game arus utama yang berpenyakit akut: kemiskinan visi kreatif di balik tumpukan modal raksasa. Vampire Survivors meledak menjadi sensasi global pada 2022 justru karena kesederhanaan grafis piksel klasiknya yang jujur, banderol harga receh setara sebungkus rokok, dan mekanisme risiko-hadiah yang diracik dengan cinta oleh kreator indie solo. Game tersebut tidak butuh embel-embel waralaba bernilai triliunan rupiah untuk membuat jutaan orang rela begadang di depan monitor sampai mata merah. Sebaliknya, apa yang dilakukan Games Workshop dengan Warhammer Survivors terasa seperti jalan pintas pemalas. Alih-alih mendanai proyek berani yang mengeksplorasi kedalaman narasi atau mekanik strategi taktis yang menjadi kekuatan sejati lore Warhammer, mereka memilih menunggangi tren yang sudah dirintis orang lain, lalu berharap para gamer fanatik akan otomatis merogoh dompet hanya karena ada logo faksi Ultramarine di sampul menu utama. Langkah cari aman ini seirama dengan keputusasaan penerbit yang gemar mengumbar janji palsu, persis seperti drama [penundaan serial Warhammer Blood Bowl hingga 2027](/warhammer-blood-bowl-kena-tunda-ke-2027-saat-gamer-sudah-lelah) saat komunitas pemain sudah muak menanti perbaikan performa yang tak kunjung tiba.

Bagi komunitas gamer di Indonesia yang harus menyisihkan uang makan siang demi membeli game orisinal di Steam, produk semacam ini menghadirkan dilema yang menjengkelkan. Di satu sisi, membasmi ribuan gerombolan serangga alien dengan tembakan peluru peledak memang memberikan suntikan dopamin instan yang memuaskan selama satu atau dua jam pertama. Namun begitu kebaruan visual itu memudar, pemain segera menyadari bahwa mereka sedang memainkan game kloningan tanpa jiwa yang ritme permainannya kalah renyah dibanding karya aslinya. Fenomena memalukan ini menjadi cerminan nyata dari kebijakan korporasi game global yang lebih mempercayai matriks tren pasar ketimbang keberanian artistik para perancangnya. Ketika studio-studio papan atas sibuk memangkas talenta orisinal demi memuaskan laporan keuangan kuartalan, tidak mengherankan jika kualitas game modern kian terasa hambar, setali tiga uang dengan keprihatinan industri saat [publisher game besar gemar mendepak pekerja kreatif berpengalaman](/skyrim-legendaris-berkat-orang-lama-saat-bos-game-hobi-depak) hanya demi menggantinya dengan proyek-proyek tiruan yang cepat panen modal.

Menempelkan jubah baja Space Marine ke atas mekanik game indie seharga empat puluh ribu rupiah mungkin bisa menghasilkan grafik penjualan yang lumayan di pekan pertama perilisannya di Steam. Namun langkah itu tetap tidak bisa menghapus fakta telanjang bahwa raksasa penerbit sekelas Games Workshop sedang mengalami krisis identitas yang memalukan. Mengalahkan gerombolan alien di layar monitor memang terasa gagah dan heroik, tetapi menyaksikan korporasi bernilai puluhan triliun rupiah mencontek pekerjaan rumah pengembang indie demi recehan dolar adalah pemandangan paling menyedihkan di industri game hari ini.`
  }
];

export async function runBatch() {
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
      markAsSeen(art.sourceUrl.trim());
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi 19:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261110-1900.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
