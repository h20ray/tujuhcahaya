import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Ribuan Gamer Memohon Pemerintah Kanada Selamatkan BioWare dari Cengkeraman EA",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Industri Game", "BioWare", "Electronic Arts", "Mass Effect", "Dragon Age", "PC Gaming"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/r4shVaCZRmckKRV5h4T9dc-1920-80.jpg",
    imageAlt: "Ilustrasi logo studio pengembang BioWare dan latar fiksi petualangan Mass Effect",
    sourceUrl: "https://www.pcgamer.com/games/mass-effect/a-public-petition-to-save-bioware-has-drawn-enough-signatures-that-the-canadian-government-will-at-least-have-to-think-about-it-this-is-absolutely-possible-mp-says/",
    excerpt: "Sebuah petisi publik resmi mendesak parlemen Kanada untuk turun tangan menyelamatkan BioWare sebagai aset warisan budaya nasional. Di balik ide yang terdengar menggelitik ini, tersimpan jeritan keputusasaan para gamer yang muak melihat studio legendaris diobrak-abrik oleh kalkulasi dingin Electronic Arts.",
    content: `Jika Anda sempat melewati masa remaja di era awal tahun 2000-an dengan menghabiskan malam di depan monitor komputer yang mendengung, nama BioWare kemungkinan besar terukir rapi di ruang nostalgia Anda. Studio asal Edmonton, Kanada ini bukan sekadar pengembang game biasa. Lewat mahakarya seperti *Baldur's Gate*, *Star Wars: Knights of the Old Republic*, trilogi *Mass Effect*, hingga petualangan kelam *Dragon Age: Origins*, mereka pernah menjadi raja mutlak dalam meracik cerita interaktif yang sanggup mengaduk-aduk emosi pemainnya.

Namun kejayaan itu perlahan berubah menjadi cerita muram semenjak sang induk semang raksasa, Electronic Arts, mulai mendikte dapur produksi mereka. Selama satu dekade terakhir, para pemain dipaksa menyaksikan studio kesayangannya dipreteli satu demi satu. Penulis naskah kawakan hengkang, proyek game pemain tunggal yang berfokus pada kedalaman narasi dipaksa bertransformasi menjadi game live-service karbitan semacam *Anthem* yang berujung bencana, hingga gelombang pemutusan hubungan kerja yang tak henti-hentinya menyapu ruang kerja para kreator.

Saking frustrasinya melihat kehancuran lambat tersebut, komunitas pemain di Kanada baru saja melakukan langkah yang barangkali terdengar seperti lelucon tongkrongan, namun digarap dengan sangat serius. Sebagaimana dicatat dalam laporan PC Gamer pekan ini, sebuah petisi publik resmi yang diajukan ke House of Commons Kanada telah mengumpulkan ribuan tanda tangan sah dari warga negara setempat. Tuntutannya tidak main-main: mendesak pemerintah federal Kanada untuk turun tangan menyelamatkan BioWare, melindunginya dari pembongkaran korporat, atau bahkan menjadikannya aset warisan budaya yang dilindungi negara.

Menariknya, inisiatif warga ini tidak bertepuk sebelah tangan. Charlie Angus, seorang anggota parlemen Kanada terkemuka, secara terbuka menanggapi petisi tersebut dan menyatakan bahwa langkah penyelamatan sektor kreatif semacam ini secara hukum dan kebijakan publik "sangat mungkin terjadi". Menurutnya, industri video game modern bukan lagi sekadar mainan anak-anak pelepas penat, melainkan pilar ekonomi kreatif sekaligus medium penceritaan modern yang mewakili identitas budaya bangsa.

![Ilustrasi logo pengembang BioWare dan latar fiksi petualangan Mass Effect](https://cdn.mos.cms.futurecdn.net/r4shVaCZRmckKRV5h4T9dc-1920-80.jpg)

Bagi gamer yang kerap memantau dinamika industri game, kabar ini tentu memicu senyum getir sekaligus rasa haru. Di satu sisi, gagasan bahwa kementerian kebudayaan sebuah negara adidaya harus turun tangan untuk menghentikan nafsu dividen para pemegang saham Wall Street memang terdengar absurd. Kita seolah sedang membayangkan seorang birokrat berkemeja rapi datang ke ruang rapat direksi EA untuk menjelaskan betapa pentingnya dialog percabangan karakter Commander Shepard bagi kelangsungan peradaban manusia.

Namun di sisi lain, petisi ini adalah manifestasi nyata dari keputusasaan paling jujur yang pernah lahir dari akar rumput komunitas pemain. Selama bertahun-tahun, komunitas pemain telah mencoba segala cara menghadapi [kebijakan efisiensi korporasi yang mematikan studio game](/pemasok-chip-angkat-kaki-dan-nasib-kaset-game-fisik-yang-kian): memboikot pemesanan awal (*pre-order*), menulis kritik pedas di forum daring, hingga menahan uang belanja game mereka. Nyatanya, logika korporasi multinasional tidak pernah bekerja dengan sensitivitas seni. Bagi para manajer berjas rapi, studio legendaris yang mempekerjakan ratusan seniman bertalenta hanyalah baris angka biaya operasional yang siap dicoret begitu laporan keuangan kuartalan membutuhkan polesan laba instan.

Melihat fenomena ini dari kacamata gamer kasual, apa yang menimpa BioWare sejatinya mengulang kepasrahan serupa saat [penerbit game memeras dompet pemain demi mengejar dividen investor](/laba-sony-melonjak-berkat-spider-man-tapi-dompet-gamer-tetap) yang sedang melanda industri hiburan digital secara global. Kita hidup di zaman di mana video game diperlakukan tak ubahnya mesin judi kasino digital yang dipasangi grafik tiga dimensi memukau. Publisher tidak lagi puas menjual sebuah karya utuh yang bisa dinikmati dari awal hingga tamat. Mereka menginginkan seluruh sisa waktu luang dan limit kartu kredit Anda disedot melalui skema monetisasi musiman, tiket pertempuran, dan kosmetik senjata yang harganya kerap melampaui biaya makan siang sepekan.

Tentu saja, jalan bagi pemerintah Kanada untuk benar-benar mengintervensi atau menasionalisasi BioWare masih berupa jalan terjal penuh rintangan birokrasi. EA tentu tidak akan semudah itu melepaskan hak cipta intelektual atas waralaba bernilai triliunan rupiah hanya karena rasa iba terhadap memori masa kecil penggemarnya.

Kendati demikian, keberanian para gamer mengajukan petisi ke meja parlemen telah mengirimkan tamparan keras yang menyegarkan ke wajah industri. Ketika para pemain sampai merasa perlu mengadu kepada wakil rakyat demi menyelamatkan sebuah cerita fiksi, itu pertanda bahwa korporasi game modern sudah terlalu lama lupa bagaimana caranya bersikap layaknya manusia yang mencintai karya seni.`
  },
  {
    title: "Ketika Panggung Megah AMI Awards Disengat Salam Tiga Jari dan Keresahan Warga",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["AMI Awards", "Industri Musik", "Musisi Indie", "Kritik Sosial", "Skena Musik", "Budaya Populer"],
    imageUrl: "https://cms.owrite.id/wp-content/uploads/2026/11/utama-image-47-mw4mc1ne-1024x576.webp",
    imageAlt: "Penampilan musisi di atas panggung megah malam penganugerahan AMI Awards",
    sourceUrl: "https://news.google.com/rss/articles/CBMiswFBVV95cUxNV0tsU0pjU1NpVGVhVU55bDhqWHRZUmpBRzR4ZElFN2dNdFpJeWI5dFN4T04xTGxTTXRxZmtkT1JPOVJZSE1oc01XaWt0c0dnZmY2NEhnWHBQX3pXN1lnMHAzU3pjRUZrVXhYS19GNEVweGZybnlpR3VGbUhZQ0hiQlNRMzk3Q0hvdVZIcEhJTmkzbktWcmstMzR0ZVhWUGJSenJLRkNBQXRxY0xMOXJiMW8wOA?oc=5",
    excerpt: "Malam puncak AMI Awards biasanya menjadi parade busana gemerlap dan sanjungan manis kepada sponsor. Namun tahun ini, panggung megah itu mendadak disengat pesan kritis ketika sejumlah musisi mengacungkan salam tiga jari dan membawakan suara keresahan warga akar rumput.",
    content: `Kalau Anda sudah terbiasa menonton siaran malam penganugerahan penghargaan musik di layar kaca tanah air, susunan acaranya hampir selalu bisa ditebak dengan mata terpejam. Dimulai dari karpet merah bertabur gaun malam mewah, rentetan ucapan terima kasih standar yang menyapa pihak label rekaman, pembacaan nominasi yang diselingi lelucon kaku pembawa acara, hingga ucapan syukur berulang kali kepada jajaran sponsor korporat yang logonya terpampang di latar panggung. Semuanya tertata sangat rapi, steril, dan dirancang agar tidak membuat para pemegang kuasa tersinggung.

Namun pemandangan yang tersaji dalam perhelatan tahun ini memperlihatkan letupan yang sangat berbeda. Sebagaimana dicatat dalam laporan OWRITE dan sejumlah media peliput musik independen pekan ini, panggung Anugerah Musik Indonesia mendadak kehilangan watak sterilnya ketika para penerima piala melangkah ke podium. Baskara Putra alias Hindia bersama sejumlah musisi lintas disiplin menolak sekadar melempar senyum manis basa-basi. Di hadapan sorotan kamera langsung dan tatapan para petinggi industri hiburan, mereka mengacungkan gestur salam tiga jari seraya melontarkan pidato yang menyinggung suramnya ruang kebebasan berpendapat serta himpitan hidup rakyat jelata.

Aksi simbolik tersebut langsung memicu kegaduhan yang riuh di linimasa media sosial. Bagi sebagian penonton yang terbiasa menganggap panggung penghargaan sebagai etalase pesta hura-hura belaka, manuver para musisi ini barangkali dianggap merusak suasana perayaan atau dicap mencari panggung sensasi politik. Mereka menuntut agar para penampil tetap berada di jalurnya: menyanyikan melodi yang merdu, bergoyang di atas panggung, dan membiarkan urusan penderitaan sosial dibicarakan di tempat lain.

Namun bagi siapa pun yang mencermati dinamika di skena musik indie, letupan di atas panggung tersebut sejatinya bukanlah manuver kejutan yang jatuh dari langit. Di balik kemegahan tata lampu panggung bernilai ratusan juta rupiah itu, realitas kehidupan warga di luar gedung pementasan sedang berada di titik nadir yang mencekik. Mulai dari lonjakan harga bahan pokok yang menggerus tabungan keluarga pekerja, ancaman penggusuran ruang hidup warga di daerah, hingga maraknya kriminalisasi terhadap suara kritis yang berani mempertanyakan kebijakan para penguasa.

![Penampilan musisi di atas panggung megah malam penganugerahan AMI Awards](https://cms.owrite.id/wp-content/uploads/2026/11/utama-image-47-mw4mc1ne-1024x576.webp)

Di sinilah letak keberanian yang patut dicatat dari peristiwa tersebut. Bila kita menelaah sejarah kuratorial musik populer di Nusantara sejak dekade lawas, karya bunyi sejak dekade lawas memang tidak pernah lahir dari ruang hampa yang terisolasi dari jeritan sosial. Dari lirik-lirik balada protes Iwan Fals di masa Orde Baru, distorsi punk komunitas bawah tanah era reformasi, hingga barisan nada kelompok musik independen kiwari, karya bunyi terbaik bangsa ini selalu berfungsi sebagai perekam sejarah yang paling jujur mengenai luka masyarakatnya.

Ketika para musisi memilih mengangkat tangan dan menyuarakan kegelisahan warga, peristiwa ini mengingatkan kita pada kritik tajam ketika [piala AMI Awards tak cukup membayar tagihan dan royalti musisi](/ketika-piala-ami-awards-tak-cukup-membayar-tagihan-dan-royalti). Mereka sejatinya sedang mengembalikan marwah seni musik ke habitat aslinya. Mereka menolak menjadi sekadar badut penghibur yang meninabobokan publik di tengah situasi darurat. Panggung penghargaan bukanlah kuil suci yang harus dijauhkan dari realitas kotor jalanan, melainkan pelantang suara paling strategis untuk mengingatkan jutaan pasang mata penonton bahwa ada banyak hal yang sedang tidak beres dengan tata kelola negeri ini.

Langkah ini juga menjadi sentilan telak bagi tata kelola industri hiburan yang belakangan ini semakin terobsesi dengan metrik angka putar streaming, sebuah tren yang sempat disorot ketika [musisi janjian rilis lagu tiap Jumat hingga telinga pendengar kebas](/ketika-seluruh-musisi-janjian-rilis-lagu-tiap-jumat-dan-telinga) dan tren algoritma video pendek. Di era di mana banyak artis pemula rela memangkas durasi lagu mereka menjadi di bawah dua menit hanya demi ramah konten media sosial, menyaksikan musisi yang rela mempertaruhkan zona nyaman kontrak panggung demi membela nasib kaum marginal adalah hembusan angin segar yang sangat melegakan.

Tentu saja, piala trofi berlapis kuningan itu pada akhirnya akan disimpan rapi di lemari pajangan kaca dan lampu sorot panggung megah akan dipadamkan begitu acara usai. Namun gaung keberanian para musisi yang menolak tunduk pada kepura-puraan industri hiburan akan terus bergema di lorong-lorong kampus, tongkrongan warkop, dan ruang dengar anak muda perkotaan.

Lain kali jika ada pesohor panggung yang menyuruh musisi untuk diam dan hanya bernyanyi tanpa ikut campur urusan nasib rakyat, ingatkan saja mereka dengan santai: musik yang kehilangan empati pada keresahan warganya hanyalah deretan bunyi bising yang menunggu waktu untuk dilupakan zaman.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 01:00 WIB)");
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

    results.push({
      title: art.title,
      slug: pubResult.slug,
      status: pubResult.status,
      score: audit.score,
      wordCount,
      url: pubResult.url,
      byline: art.byline,
      dbSaved: pubResult.dbSaved,
      remotePublished: pubResult.remotePublished
    });
  }

  console.log("\n=================================================================");
  console.log("🎉 SELURUH ARTIKEL BATCH BERHASIL DITERBITKAN!");
  console.log("=================================================================\n");
  console.log(JSON.stringify(results, null, 2));
}

// Execute if run directly
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261107-0100.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Failed:", err);
    process.exit(1);
  });
}
