import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Lembaga Sensor Korea Sempat Mau Cekal GTA 6 Cuma Gara-Gara Takut Moral Rusak",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "GTA 6", "Grand Theft Auto", "Rockstar Games", "Sensor Game", "Industri Game", "PC Gaming"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/BngP9Kz6o4g3nurmmSzKYf-1920-80.jpg",
    imageAlt: "Poster promosi Grand Theft Auto 6 menampilkan karakter utama di bawah terik matahari Vice City",
    sourceUrl: "https://www.pcgamer.com/games/grand-theft-auto/south-korean-game-rating-board-almost-blocked-gta-6s-release-fearing-its-out-of-context-genital-nudity-would-disrupt-social-order/",
    excerpt: "Lembaga rating game Korea Selatan sempat hampir mencekal GTA 6 karena ketakutan setengah mati melihat adegan tanpa busana di versi bocoran developer. Kepanikan moral yang membuktikan betapa kocaknya birokrasi sensor saat berhadapan dengan game aksi paling ditunggu sedunia.",
    content: `Di tongkrongan rental PS atau warung kopi gamer, kita sering menyaksikan perdebatan sengit tentang hal-hal paling tidak masuk akal di dunia nyata. Namun rasanya belum ada yang bisa menandingi kelakuan para pejabat lembaga sensor game di Korea Selatan pekan ini. Ketika jutaan gamer di seluruh penjuru bumi rela menahan napas selama lebih dari satu dekade demi menanti peluncuran Grand Theft Auto 6, sekelompok birokrat berdasi di Seoul justru sibuk menggelar rapat darurat tiga babak hanya untuk memperdebatkan apakah tubuh manusia tanpa busana di layar monitor bakal meruntuhkan pilar peradaban bangsa mereka. Ketakutan yang berlebihan ini memperlihatkan betapa gagapnya aparat moral ketika berhadapan dengan ekspresi seni digital modern.

Namun kepanikan birokrasi itu segera berubah menjadi dagelan yang menggelikan di mata penikmat game internasional. Sebagaimana dicatat dalam laporan PC Gamer dan riset media game lokal Inven, Game Content Rating Board atau GCRB Korea Selatan hampir saja menolak memberikan label usia pada karya termutakhir Rockstar Games tersebut. Dalam notula rapat yang bocor ke publik, para anggota komite sensor tercatat memperdebatkan secara alot adegan yang mereka sebut sebagai ketelanjangan tanpa konteks. Yang membikin geleng-geleng kepala, ketakutan mereka ternyata bukan dipicu oleh salinan final game yang diserahkan resmi oleh penerbit, melainkan karena para pejabat tersebut termakan video bocoran awal versi pengembangan yang sempat disebarkan oleh peretas di internet beberapa tahun silam.

Rasa cemas para birokrat sensor ini sungguh memperlihatkan jurang pemikiran yang teramat lebar antara pembuat kebijakan dan realitas industri hiburan interaktif masa kini. Seri Grand Theft Auto sejak era kejayaan PlayStation 2 memang tidak pernah diniatkan sebagai tontonan anak-anak sekolah dasar. Rockstar Games membangun reputasi legendaris mereka lewat satir sosial yang tajam terhadap kebusukan kapitalisme, intrik mafia jalanan, dan kegilaan budaya konsumerisme modern. Mengharapkan kota fiksi Vice City bersih dari adegan dewasa sama konyolnya dengan memesan kopi hitam di warung pinggir jalan tetapi menuntut rasa kuah soto ayam.

![Poster promosi Grand Theft Auto 6 menampilkan karakter utama di bawah terik matahari Vice City](https://cdn.mos.cms.futurecdn.net/BngP9Kz6o4g3nurmmSzKYf-1920-80.jpg)

Kepanikan moral ini terasa makin ganjil jika kita menengok bagaimana antusiasme pasar global justru meledak tanpa terbendung. Keriuhan komunitas menyambut setiap cuplikan game ini mirip dengan euforia liar saat [pre-order GTA 6 memecahkan rekor penjualan konsol](/pre-order-gta-6-pecahkan-rekor-konsol-saat-gamer-pc-tetap-disuruh) beberapa waktu lalu, di mana jutaan pemain rela merogoh tabungan demi mencicipi simulasi dunia kriminal paling detail yang pernah dirancang manusia. Para gamer memahami batas tegas antara fantasi fiksi interaktif dan tindakan di dunia nyata, sebuah pemahaman mendasar yang anehnya kerap gagal dipahami oleh para petinggi lembaga sensor berjas rapi.

Bagi komunitas gamer di tanah air yang sudah kenyang menyaksikan tayangan televisi disensor secara serampangan dengan efek buram yang bikin pusing kepala, tingkah laku badan rating luar negeri ini menegaskan satu hal penting: sindrom kepanikan moral para pejabat publik ternyata berlaku universal di mana-mana. Para birokrat selalu merasa memikul beban suci sebagai benteng terakhir penjaga moralitas masyarakat, sembari berasumsi kerdil bahwa orang dewasa yang memegang pengendali stik konsol bakal langsung kehilangan akal sehat dan meniru semua adegan kekerasan di jalan raya. Asumsi merendahkan ini mengabaikan fakta sederhana bahwa mayoritas konsumen pembeli game dewasa adalah orang-orang matang yang bekerja keras saban hari, taat membayar tagihan listrik, dan sekadar butuh wadah katarsis untuk melepas penat setelah seharian diperas jam kerja kantor yang tidak manusiawi.

Di tengah tarik-ulur regulasi yang melelahkan tersebut, GCRB Korea Selatan pada akhirnya meloloskan GTA 6 dengan stempel rating khusus dewasa alias Adults Only. Kompromi akhir ini diambil bukan lantaran para birokrat mendadak memahami nilai artistik industri game, melainkan karena mereka menyadari risiko politik yang terlalu besar jika nekat memblokir game paling diantisipasi abad ini di hadapan jutaan pemilih muda mereka. Pada akhirnya, ketakutan bahwa video game bakal menghancurkan moral bangsa selalu terbukti sebagai dongeng ketakutan masa lalu; sebab satu-satunya hal nyata yang bakal hancur lebur saat game ini resmi beredar hanyalah jam tidur para pemain dan sisa saldo tabungan di rekening mereka.`
  },
  {
    title: "Kementerian Ekraf Pamer Musisi Indie Tembus New York Saat Panggung Lokal Megap-Megap",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Margaretha Nina", "Musik Indie", "Kementerian Ekraf", "The New Colossus", "New York City", "Industri Musik", "Gigs Lokal"],
    imageUrl: "https://strapi.pasardana.id/uploads/IMG_20261110_WA_0001_121bb21086.jpg",
    imageAlt: "Musisi solo indie Lauren Karina alias notyourwife berpose bersama Wakil Menteri Ekonomi Kreatif Irene Umar di kantor kementerian Jakarta",
    sourceUrl: "https://pasardana.id/news/2026/11/10/kementerian-ekraf-dorong-notyourwife-bawa-musik-indie-indonesia-ke-panggung-nyc",
    excerpt: "Kementerian Ekraf mendadak getol menggelar panggung audiensi usai musisi solo indie .notyourwife lolos tampil di festival musik New York. Pemandangan kontras yang memperlihatkan kebiasaan khas birokrat kita yang gemar menempel di puncak kesuksesan orang lain saat ekosistem gigs lokal dibiarkan hidup segan mati tak mau.",
    content: `Ada satu tradisi unik yang nyaris tidak pernah absen di panggung birokrasi tanah air setiap kali ada warga biasa yang sukses mengukir prestasi mentereng di kancah internasional. Polanya selalu berulang dengan ketepatan yang mengagumkan: ketika sang seniman masih pontang-panting mencari sponsor tiket pesawat, merogoh kantong pribadi demi membayar sewa studio latihan, dan tidur di lantai kamar kos yang sempit, tidak ada satu pun kantor dinas yang sudi melirik. Namun begitu nama sang musisi resmi terpampang di poster festival bergengsi luar negeri, mendadak pintu ruangan pejabat berpendingin udara langsung terbuka lebar, lengkap dengan spanduk ucapan selamat dan sesi pemotretan senyum merekah untuk kebutuhan unggahan media sosial kementerian.

Pemandangan akrab itulah yang kembali tersaji di ibu kota pekan ini. Sebagaimana dicatat dalam laporan kantor berita Pasardana, Wakil Menteri Ekonomi Kreatif Irene Umar secara resmi menerima audiensi musisi solo independen Lauren Karina yang mengusung monikernya, .notyourwife. Sang penyanyi solo berhasil menorehkan capaian gemilang dengan terpilih sebagai satu-satunya wakil Indonesia dalam jajaran penampil gelombang pertama ajang The New Colossus Festival 2027 di New York City, Amerika Serikat. Pihak kementerian pun dengan sigap menyatakan bahwa pertemuan ini adalah wujud nyata komitmen negara dalam mendorong perluasan akses pasar global bagi para pelaku industri kreatif anak bangsa.

![Musisi solo indie Lauren Karina alias notyourwife berpose bersama Wakil Menteri Ekonomi Kreatif Irene Umar di kantor kementerian Jakarta](https://strapi.pasardana.id/uploads/IMG_20261110_WA_0001_121bb21086.jpg)

Tentu saja kita patut angkat topi setinggi-tingginya atas pencapaian artistik .notyourwife yang sanggup menembus barikade kurasi ketat festival musik independen di jantung Manhattan. Namun melihat para petinggi kementerian yang mendadak sibuk memasang narasi pembinaan rasanya membikin kening berkerut masam. Kebiasaan gemar nebeng panggung ini terasa sangat ironis jika disandingkan dengan realitas getir yang dialami oleh ribuan band dan musisi kamar tidur di dalam negeri. Sebelum seorang musisi bisa melompat ke panggung New York, ia harus melalui kawah candradimuka ratusan panggung gigs kecil di daerah. Fenomena jurang nasib ini sempat menjadi potret telanjang saat [No Na melenggang ke Coachella saat panggung musik lokal masih megap-megap](/no-na-melenggang-ke-coachella-2027-saat-panggung-musik-lokal) di mana sorotan gemerlap internasional menutupi fakta bahwa panggung pertunjukan arus bawah kita sedang sekarat dihajar biaya perizinan aparat yang mencekik leher.

Bagi anak-anak muda yang aktif mengorganisir pertunjukan musik kolektif di kota-kota satelit, keluhan mereka selalu bermuara pada masalah yang sama: minimnya ruang apresiasi publik yang layak. Di Jakarta, Bandung, hingga Yogyakarta, tempat pertunjukan independen terus digusur menjadi deretan kafe waralaba mewah atau hunian vertikal komersial. Sementara di kota-kota lapis kedua seperti Purwokerto atau Solo, komunitas gigs harus memutar otak mencari aula serbaguna atau garasi rumah warga yang rela dipinjam tanpa digerebek warga sekitar. Mengurus selembar izin keramaian untuk acara musik seratus penonton di balai warga sering kali membutuhkan negosiasi panjang dengan aparat yang ongkosnya bisa lebih mahal daripada total anggaran sewa tata suara panggung. Alih-alih merumuskan regulasi perlindungan ruang komunal dan memangkas birokrasi izin konser komunitas di daerah, kementerian kita jauh lebih bersemangat menyambut musisi yang sudah berhasil menyeberang samudera berkat keringatnya sendiri.

Ketiadaan dukungan konkret di tingkat akar rumput ini membikin regenerasi musisi berbakat berjalan sangat lambat dan penuh keputusasaan. Banyak talenta muda potensial terpaksa mengubur mimpi bermusik mereka karena tercekik mahalnya biaya produksi rekaman mandiri dan nihilnya ekosistem apresiasi fisik di kota mereka. Mereka yang bertahan hidup hanyalah segelintir orang dengan privilese ekonomi cukup atau mereka yang rela hidup pas-pasan demi kecintaan buta pada nada. Ketika negara hanya hadir pada garis finis untuk memasang medali di leher sang juara, sesungguhnya pemerintah sedang mempraktikkan bentuk pemanfaatan citra yang tidak adil bagi masa depan kebudayaan populer kita sendiri.

Musisi independen Indonesia memang tidak pernah kekurangan bakat liar dan daya juang untuk mengguncang panggung dunia. Yang kerap membikin mereka lelah adalah kebiasaan para pemangku kebijakan yang baru datang membawa karpet merah ketika perjuangan berdarah-darah itu sudah selesai. Dukungan sejati untuk musik negeri ini sejatinya tidak diukur dari berapa banyak foto audiensi di ruang rapat kementerian berlantai marmer, melainkan dari keberanian negara memastikan anak-anak muda di gang-gang sempit perkotaan masih punya panggung kecil untuk menyalakan pengeras suara tanpa harus takut dibubarkan petugas ronda.`
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
      markAsSeen(art.sourceUrl);
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

// Auto-run if executed directly
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261113-0500.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
