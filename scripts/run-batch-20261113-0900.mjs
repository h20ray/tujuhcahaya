import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "No Na Bikin Bangga Tembus Coachella 2027 Saat Panggung Musik Lokal Masih Megap-Megap",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Coachella 2027", "No Na", "88rising", "Gigs Lokal", "Budaya Urban", "Industri Musik"],
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Panggung festival musik megah dengan sorotan lampu sorot panggung dan lautan penonton",
    sourceUrl: "https://www.limapagi.id/no-na-grup-indonesia-coachella-2027",
    excerpt: "No Na mencatat sejarah sebagai girl group Indonesia pertama di Coachella 2027. Namun euforia panggung global ini kontras dengan nasib panggung musik lokal yang kian terjepit birokrasi dan minimnya ruang apresiasi.",
    content: `Setiap kali ada nama musisi Indonesia terselip di poster festival musik luar negeri, tombol kebanggaan nasional instan warganet langsung ditekan serempak. Linimasa media sosial mendadak riuh dengan tagar kebanggaan, klip reaksi diunggah beruntun, dan kolom komentar dipenuhi ucapan selamat seragam yang menasbihkan momen tersebut sebagai bukti bahwa karya anak bangsa akhirnya diakui dunia. Pemandangan serupa kembali meledak saat pengumuman resmi daftar penampil festival musik bergengsi Coachella Valley Music and Arts Festival 2027 dirilis ke publik. Girl group pendatang baru bernama No Na mendadak menjadi bahan perbincangan hangat setelah dipastikan bakal manggung di Empire Polo Club, California pada April 2027 mendatang.

Menurut pengumuman poster resmi penyelenggara Coachella dan laporan yang dicatat Kompas, No Na yang digawangi empat perempuan muda berbakat—Baila Fauri, Christy Gardena, Esther Geraldine, dan Shazfa Adesya—resmi mencatatkan sejarah baru sebagai girl group pertama asal Indonesia yang menembus panggung festival legendaris Amerika Serikat tersebut. Grup yang bernaung di bawah payung label internasional 88rising ini dijadwalkan tampil pada hari kedua di dua akhir pekan penyelenggaraan, tepatnya Sabtu 10 April dan 17 April 2027. Nama mereka bersanding langsung dalam satu poster megah bersama jajaran musisi global ternama seperti Tame Impala, Phoebe Bridgers, Weezer, hingga boy group kenamaan NCT. Capaian ini tentu memperpanjang daftar musisi Indonesia yang berhasil mencicipi atmosfer panggung Indio setelah sebelumnya Rich Brian, NIKI, hingga trio Voice of Baceprot menorehkan jejak serupa di kancah festival musik barat.

![Panggung festival musik megah dengan sorotan lampu sorot panggung dan lautan penonton](https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop)

Namun di balik gegap gempita ucapan selamat dan pesta kembang api digital para penikmat musik layar kaca, ada rasa getir yang sukar disangkal jika kita menengok sejenak ke halaman belakang industri musik di tanah air. Euforia panggung internasional semacam ini kerap membuat kita terbuai dan amnesia terhadap kenyataan pahit bahwa ekosistem pertunjukan musik di akar rumput sedang tidak baik-baik saja. Menembus festival di California memang pencapaian personal dan manajerial yang patut diacungi jempol, tetapi menjadikannya cermin kemajuan musik nasional adalah lompatan logika yang terlalu jauh. Di negeri sendiri, musisi independen dan kolektif panggung alternatif masih harus pontang-panting menghadapi rumitnya birokrasi izin keramaian yang sewaktu-waktu bisa dibatalkan sepihak oleh aparat tanpa alasan yang transparan.

Ironi ini makin menyengat saat kita mengulik rantai ekonomi para pekerja seni mandiri. Di era ketika platform streaming digital membagikan royalti pecahan rupiah yang bahkan tidak cukup untuk membeli seporsi nasi padang, panggung langsung (*live gigs*) adalah urat nadi terakhir bagi musisi lokal untuk menyambung hidup dan menjual cinderamata fisik. Sayangnya, urat nadi itu justru terus dicekik oleh minimnya ruang publik yang ramah terhadap seni komunitas. Kedai-kedai kecil yang berani menyediakan panggung akustik sering kali diintai ancaman penertiban, sementara gedung kesenian daerah dibiarkan terbengkalai atau dipatok harga sewa komersial yang mustahil dijangkau band pemula.

Kesenjangan ruang apresiasi ini kian kentara ketika kita mengamati bagaimana festival dan konser musik di tanah air makin eksklusif dan elitis. Seperti polemik tata kelola hiburan nasional ketika [venue konser musik menumpuk di Jakarta saat penonton daerah cuma bisa gigit jari](/venue-konser-musik-menumpuk-di-jakarta-saat-penonton-daerah-cuma), denyut pertunjukan musik di luar kota metropolitan kian layu dan terisolasi. Penyelenggara gigs komunitas di daerah harus memeras keringat dengan sistem urunan demi menyewa peralatan tata suara alakadarnya, sementara penonton muda dihadapkan pada harga tiket festival yang kian melambung tinggi demi menutup ongkos logistik dan sewa lahan. Di saat yang sama, pemangku kebijakan sering kali baru hadir ketika ada artis yang sudah kadung sukses di luar negeri, berbondong-bondong merapat untuk sekadar berfoto dan mengklaim keberhasilan diplomasi budaya yang sama sekali tidak pernah mereka pupuk dari bawah.

Merayakan keberhasilan No Na tampil di hadapan puluhan ribu penonton di padang pasir California tentu sah-sah saja sebagai hiburan moral di tengah kabar ekonomi yang serba muram. Kita layak bersorak melihat empat perempuan muda Indonesia berbagi panggung dengan nama-nama besar dunia. Tetapi jangan sampai tepuk tangan riuh itu membuat kita lupa bahwa panggung musik independen di gang sebelah kemarin malam baru saja mati lampu karena panitia kehabisan uang kas buat membeli solar genset.`
  },
  {
    title: "Xbox Pamer Naskah Wolfenstein 3 Saat Gamer PC Sudah Kenyang Janji Kosong Bethesda",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Wolfenstein 3", "MachineGames", "Xbox", "Bethesda", "Industri Game", "PC Gaming"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/kLcpoTPbNywZi79u2Nox5C-1920-80.jpg",
    imageAlt: "Karakter BJ Blazkowicz dalam game Wolfenstein dengan tatapan tajam dan senjata ganda",
    sourceUrl: "https://www.pcgamer.com/games/fps/wolfenstein-3-is-in-production-at-machinegames/",
    excerpt: "Xbox mengumumkan Wolfenstein 3 resmi masuk tahap produksi di MachineGames dengan pamer naskah bab pertama. Namun tanpa jadwal rilis dan gameplay, pengumuman ini terasa seperti janji hampa Bethesda kesekian kalinya.",
    content: `Gamer modern agaknya perlu mulai belajar ilmu kebal terhadap pengumuman proyek korporat raksasa. Ada satu kebiasaan menjengkelkan dari penerbit game besar saat merayakan hari ulang tahun mereka: melemparkan secuplik nama waralaba legendaris ke udara tanpa wujud nyata, lalu berharap para pemain setia bakal bersorak histeris selama bertahun-tahun ke depan tanpa kepastian. Pola lama ini kembali dipertontonkan oleh Xbox saat merayakan seperempat abad eksistensi mereka di industri hiburan digital. Alih-alih memamerkan cuplikan permainan (*gameplay*) atau tanggal peluncuran yang konkret, mereka justru memilih memamerkan selembar naskah dan mengumumkan bahwa sekuel petualangan aksi tembak-menembak Wolfenstein 3 resmi masuk dapur produksi MachineGames.

Menurut pengumuman resmi petinggi Xbox dan laporan yang dicatat PC Gamer serta IGN, pengembang MachineGames bersama id Software akhirnya memastikan bahwa kelanjutan kisah petualangan William B.J. Blazkowicz sedang digarap. Melalui unggahan media sosial eksekutif Xbox, studio asal Swedia tersebut membagikan foto selembar naskah bab pertama berjudul "Nazitraz" lengkap dengan konfirmasi kembalinya dua pengisi suara veteran, yakni Brian Bloom sebagai Blazkowicz dan Debra Wilson sebagai Grace Walker di studio penangkap gerak (*motion capture*). Terakhir kali MachineGames merilis lini utama waralaba ini adalah lewat Wolfenstein II: The New Colossus pada 2017 silam—nyaris satu dekade lalu—sebelum mereka dialihkan menggarap proyek petualangan Indiana Jones and the Great Circle. Namun di balik kegembiraan kembalinya sang pembasmi rezim fasis, pengumuman ini sama sekali hampa dari detail teknis mendasar: nihil tanggal rilis, tanpa kejelasan platform, dan tanpa sepotong pun cuplikan grafis permainan riil.

![Karakter BJ Blazkowicz dalam game Wolfenstein dengan tatapan tajam dan senjata ganda](https://cdn.mos.cms.futurecdn.net/kLcpoTPbNywZi79u2Nox5C-1920-80.jpg)

Ekspektasi tinggi penggemar memang sangat beralasan. Ketika MachineGames membangkitkan kembali waralaba legendaris ini lewat *Wolfenstein: The New Order* pada 2014, mereka membuktikan bahwa game tembak-menembak linier berkategori orang pertama (*first-person shooter*) masih sanggup menyuguhkan penulisan cerita yang emosional dan bernas tanpa harus terseret tren dunia terbuka yang menjemukan. Namun reputasi apik itu sempat tercoreng oleh eksperimen setengah matang bertajuk *Youngblood*, yang memaksakan elemen leveling kaku dan monetisasi mikro ala game online. Para penggemar tentu merindukan penutup trilogi murni yang fokus pada narasi tunggal, bukan produk hibrida yang dijejali tren musiman demi memeras waktu bermain pemain.

Sikap skeptis para gamer veteran tentu bukan lahir dari ruang hampa. Di bawah payung Microsoft dan Bethesda, taktik mengumumkan judul game bertahun-tahun sebelum barangnya siap saji sudah menjadi penyakit kronis industri. Kita tentu belum lupa bagaimana para penggemar setia RPG dibuat menunggu tanpa kepastian seperti saat [Bethesda menyiram air dingin ke muka gamer yang berharap kabar anyar The Elder Scrolls 6](/bethesda-siram-air-dingin-ke-muka-gamer-yang-ngarep-kabar-anyar), sebuah game yang logonya sudah dipamerkan sejak zaman purba tetapi wujud permainannya masih terkubur entah di mana. Mengumumkan sebuah judul hanya bermodalkan lembaran naskah dan foto sesi rekaman gerak terasa lebih mirip strategi menenangkan pemegang saham dan menjaga valuasi layanan langganan ketimbang bentuk kepedulian tulus terhadap komunitas pemain. Industri game modern kini dipenuhi proyek-proyek berbujet triliunan yang diumumkan terlalu dini, hanya untuk berujung penundaan tanpa akhir, restrukturisasi internal, atau pemutusan hubungan kerja massal saat proses produksi tersendat di tengah jalan.

Bagi komunitas gamer PC dan konsol yang telah menghabiskan ribuan jam menembus bunker virtual, mereka tidak butuh janji manis di media sosial atau perayaan seremonial yang hampa. Komunitas pemain sudah lelah dijadikan kelinci percobaan untuk menjaga angka keterlibatan (*engagement*) di linimasa internet. Yang dibutuhkan gamer saat ini adalah kepastian jadwal kerja pengembang yang manusiawi dan kejujuran studio: jika game memang baru berada di tahap coretan naskah awal, simpanlah dulu hingga permainannya bisa dijalankan tanpa drama *stuttering* atau pembaruan puluhan gigabyte di hari pertama rilis. Memaksa gamer bersorak atas proyek yang kemungkinan baru bisa disentuh tiga atau empat tahun lagi adalah bentuk rasa percaya diri korporasi yang kelewat batas, terutama di tengah gelombang kebosanan pasar terhadap janji-janji kosong panggung pameran.

Melihat B.J. Blazkowicz bersiap kembali mengokang senapan ganda tentu kabar yang menyenangkan bagi pencinta aksi tembak-menembak klasik. Namun selama Xbox dan MachineGames cuma bisa menyodorkan selembar kertas naskah fotokopian, gamer yang waras lebih baik kembali membereskan tumpukan game lama di pustaka Steam daripada ikut-ikutan bertepuk tangan untuk kue ulang tahun yang tepung terigunya saja baru mau dibeli.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 09:00 WIB)");
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
