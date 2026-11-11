import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Blizzard Bangun Panti Jompo di Azeroth Buat Gamer Milenial yang Gampang Encok",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Blizzard Entertainment", "Gamer Indonesia", "Industri Game", "MMORPG", "Nostalgia", "PC Gaming", "World of Warcraft"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/GmfjPrH94zwSEoEpGw7Son-1920-80.png",
    imageAlt: "Ilustrasi lanskap dunia Azeroth dalam game World of Warcraft dengan nuansa petualangan fantasi klasik",
    sourceUrl: "https://www.pcgamer.com/games/world-of-warcraft/wow-forever-is-more-than-just-a-millennial-retirement-home/",
    excerpt: "Blizzard menyiapkan World of Warcraft: Forever dengan seribu quest baru tapi mempertahankan mekanik klasik dua dekade silam. Alih-alih memburu pemain muda yang kepalanya sudah dipenuhi game gacha kilat, Blizzard memilih memanjakan para gamer milenial berkepala tiga yang rindu nostalgia masa muda sambil menahan nyeri pinggang.",
    content: `Kalau Anda datang ke tongkrongan bapak-bapak muda atau pekerja kantoran usia tiga puluhan di warung kopi malam minggu, topik obrolan mereka biasanya mengalami pergeseran yang cukup tragis. Di dekade lalu, meja warkop bakal riuh oleh perdebatan taktik menyerang bos di dungeon paling angker, adu spesifikasi kartu grafis terbaru, atau cerita begadang tiga hari berturut-turut di bilik warnet. Sekarang, obrolan semacam itu pelan-pelan digantikan oleh rekomendasi merek koyo pereda nyeri sendi, perbandingan premi asuransi kesehatan, dan keluhan asam urat yang mendadak kambuh gara-gara nekat makan emping melinjo.

Namun jika ada satu nama yang sanggup membikin mata lelah para bapak muda ini mendadak menyala kembali bak remaja puber, nama itu adalah World of Warcraft. Game legendaris garapan Blizzard Entertainment ini bukan sekadar permainan daring biasa, melainkan monumen masa muda tempat jutaan gamer milenial menitipkan kenangan terliar mereka sebelum terbentur realitas cicilan perumahan dan tagihan listrik bulanan.

Rasa rindu kolektif terhadap masa lalu itulah yang kini dibaca dengan sangat jeli oleh Blizzard. Sebagaimana dicatat dalam laporan liputan mendalam PC Gamer pekan ini, pengembang raksasa asal California tersebut tengah menyiapkan proyek bertajuk World of Warcraft: Forever. Proyek ini bukan sekadar server klasik biasa yang memutar ulang rekaman kaset lama. Blizzard mengambil langkah unik dengan mengembangkan konten secara horizontal: menyuntikkan lebih dari seribu quest anyar serta dungeon baru, namun dengan aturan main yang tetap setia pada desain mekanik lawas era dua dekade silam.

![Ilustrasi lanskap dunia Azeroth dalam game World of Warcraft dengan nuansa petualangan fantasi klasik](https://cdn.mos.cms.futurecdn.net/GmfjPrH94zwSEoEpGw7Son-1920-80.png)

Bagi generasi yang tumbuh bersama kebiasaan membaca forum panduan game fisik, keputusan Blizzard ini terdengar seperti mukjizat. Di era industri modern yang serba terburu-buru, sebagian besar penerbit game berlomba-lomba memodernisasi karya mereka sampai hilang jati diri. Mereka menyederhanakan skill karakter, memasang tombol navigasi otomatis yang menuntun pemain bak balita belajar jalan, dan menjejalkan toko kosmetik digital di setiap sudut menu. Blizzard justru mengambil jalur sebaliknya: membiarkan mekanik game tetap rumit dan menuntut kesabaran, seolah sengaja menantang pemain untuk kembali merasakan nikmatnya tersesat di rimba belantara Azeroth.

Tentu saja, langkah ini bukan lahir semata-mata dari kemurahan hati studio game yang ingin memeluk nurani penggemar setianya. Ada kalkulasi bisnis yang sangat dingin dan matang di balik meja direksi. Blizzard paham betul bahwa mencoba merayu generasi muda Gen Z untuk memainkan MMORPG tradisional adalah misi yang nyaris mustahil. Anak-anak zaman sekarang sudah terbiasa dengan kepuasan instan dari game tembak-menembak kompetitif berdurasi sepuluh menit atau game gacha di layar ponsel yang bisa diselesaikan sambil rebahan di sela jam istirahat sekolah. Menyuruh mereka duduk di depan monitor selama enam jam hanya demi mengantre giliran memukul monster gua bersama sekelompok orang asing adalah lelucon yang bakal ditolak mentah-mentah.

Target pasar paling empuk dan paling loyal yang tersisa tidak lain adalah para gamer milenial. Mereka adalah barisan pemain yang kini sudah memegang kartu kredit sendiri, punya penghasilan tetap, dan tidak keberatan membayar biaya langganan bulanan asalkan bisa membeli kembali sekelumit rasa bahagia masa remaja. Mirip dengan fenomena industri hiburan saat [EA akhirnya melepas gembok game jadul Wing Commander di Steam](/ea-akhirnya-lepas-kunci-gembok-wing-commander-di-steam-saat-game) demi mengeruk kantong para kolektor yang haus nostalgia, Blizzard pada dasarnya sedang membangun fasilitas panti jompo digital yang sangat mewah.

Di tempat peristirahatan virtual ini, para pekerja kantoran yang seharian dimarahi atasan bisa kembali merasa menjadi pahlawan agung. Mereka tidak perlu adu refleks tangan melawan bocah belasan tahun yang jarinya bergerak secepat kilat. Yang mereka butuhkan hanyalah ketahanan duduk dan komunikasi wajar sesama pemain dewasa. Pendekatan ini terasa jauh lebih membumi ketimbang game hardcore modern seperti [layar rekap kematian Path of Exile 2 yang menampar ego gamer](/ketika-layar-rekap-kematian-path-of-exile-2-memaksa-gamer) karena WoW Forever menawarkan ritme petualangan yang memberi ruang bernapas bagi pemain yang staminanya sudah tidak lagi prima.

Pada akhirnya, proyek semacam ini menjadi cermin bagi kita semua bahwa generasi gamer pertama memang sudah resmi menua. Kita mungkin tidak lagi sanggup terjaga sampai subuh demi memperebutkan pedang legendaris tanpa merasakan kepala berdenyut keesokan paginya di kantor. Namun setidaknya, ketika dunia nyata terasa makin bising dan menuntut, Azeroth versi lawas ini masih menyediakan bangku kayu hangat di sudut kedai penginapan bagi para petualang yang ingin melepas lelah, lengkap dengan aroma masa lalu yang menenangkan hati.`
  },
  {
    title: "Apple Mau Jejali Chatbot di Dapur Saat Orang Cuma Butuh Timer Rebus Mi Instan",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Apple", "Apple Intelligence", "Chatbot AI", "Elang Elano", "Gaya Hidup Digital", "Kecerdasan Buatan", "Privasi Digital", "Smart Home"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/10/IMG_0250-1.jpeg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Layar smart display pintar Apple HomeView di atas meja dapur dengan antarmuka kendali rumah pintar",
    sourceUrl: "https://www.theverge.com/tech/1029526/chatbots-might-be-coming-to-apples-homeview",
    excerpt: "Kode di iOS 27.3 beta mengungkap rencana Apple menyematkan chatbot AI ke layar pintar HomeView. Bukannya membenahi Siri agar tidak budeg saat mendengar bising dapur, Apple malah latah menaruh chatbot di ruang makan, seolah orang merebus air butuh obrolan filosofis.",
    content: `Bagi siapa saja yang pernah berkutat di dapur sempit saat jam makan malam tiba, situasi yang terjadi biasanya jauh dari kesan tenteram dan estetis ala video memasak di media sosial. Minyak goreng di wajan mendesis liar, air rebusan panci mendadak meluap membasahi kompor, dan kedua belah tangan kita sudah berlumuran tepung basah serta bau amis bumbu dapur. Dalam kondisi genting seperti itu, satu-satunya hal yang dibutuhkan manusia waras dari sebuah perangkat elektronik di meja dapur adalah fungsi praktis tanpa basa-basi: setel pewaktu mundur lima menit agar mi instan tidak keburu mengembang menjadi bubur.

Perintah itu semestinya sangat sederhana untuk dipahami oleh sistem kendali pintar zaman sekarang. Namun bagi para perancang antarmuka di markas besar Apple di Cupertino, kesederhanaan hidup tampaknya dianggap sebagai sebuah kemunduran teknologi yang pantas dihilangkan.

Gejala tersebut tercium sangat kuat dari bocoran sistem operasi terbaru mereka. Sebagaimana dicatat dalam laporan The Verge pekan ini, penelusuran kode pada versi iOS 27.3 beta mengungkap bahwa Apple diam-diam tengah menyiapkan integrasi kecerdasan buatan percakapan untuk perangkat smart display atau hub rumah pintar mereka yang dinamai HomeView. Di dalam deretan kode sistem tersebut, ditemukan bendera fitur baru untuk kategori aplikasi percakapan (*Conversational Apps*). Temuan ini memicu kepastian kuat bahwa layar sentuh cerdas yang digadang-gadang bakal menjadi pusat kendali ruang keluarga itu akan segera dijejali oleh chatbot AI generatif pihak ketiga semacam ChatGPT atau Claude.

![Layar smart display pintar Apple HomeView di atas meja dapur dengan antarmuka kendali rumah pintar](https://platform.theverge.com/wp-content/uploads/sites/2/2026/10/IMG_0250-1.jpeg?quality=90&strip=all&crop=0,0,100,100)

Membaca arah manuver ini membuat kening para pengamat sistem dan sysadmin warkop langsung berkerut heran. Selama bertahun-tahun, asisten suara bawaan Apple yakni Siri sudah menjadi bahan lelucon massal di seluruh dunia karena tingkat pemahamannya yang kerap mengecewakan. Anda meminta memutar lagu pop santai, ia malah menelpon kontak bos kantor. Anda berteriak menyuruh mematikan alarm kamar mandi, ia malah menawarkan hasil penelusuran artikel di web. Bukannya membenahi ketulian mendasar asisten suara mereka agar lebih peka terhadap kebisingan suara penggorengan dan aksen lokal manusia sehari-hari, Apple justru memilih jalan pintas paling malas di Silicon Valley: menempelkan chatbot AI ke layar dinding.

Langkah latah ini mengulang kecerobohan serupa pada [kecenderungan fatal menyerahkan urusan dapur ke chatbot AI](/serahkan-urusan-dapur-ke-chatbot-ai-kalau-mau-siap-siap-makan-kue) yang sebelumnya telah berulang kali terbukti menghasilkan resep masakan halusinasi yang menyesatkan lidah dan membahayakan perut. Bayangkan betapa menjengkelkannya ketika seorang ibu rumah tangga atau anak kos yang sedang panik membalik telur dadar harus mendengarkan penjelasan panjang lebar dari chatbot yang gemar berfilsafat dan sok puitis, padahal yang diminta hanyalah hitungan mundur waktu memasak.

Belum lagi jika kita membedah implikasi privasi data yang mengintai di balik layar pintar tersebut. Menempatkan sebuah mikrofon berdaya tangkap tinggi dan kamera sensor yang terhubung langsung ke mesin pemrosesan awan kecerdasan buatan di sudut paling privat sebuah rumah adalah mimpi buruk keamanan tersendiri. Pola ini memperkuat kecemasan masyarakat seperti saat [pengguna ponsel panik mengira perangkat mereka disadap intelijen](/ketika-baterai-hp-boros-bikin-pengguna-panik-mengira-disadap) karena batasan antara kenyamanan rumah tangga dan komersialisasi data percakapan keluarga kini makin buram tanpa batas etika yang jelas. Setiap obrolan santai, perdebatan anggaran belanja dapur, hingga keluhan rahasia di meja makan berpotensi diserap sebagai data latihan algoritma korporat.

Ambisi Big Tech untuk menjejalkan kecerdasan buatan ke segala perabot rumah tangga sesungguhnya memperlihatkan krisis identitas yang akut. Di mata para manajer produk yang mengejar target nilai saham, sebuah layar display belum dianggap modern jika belum bisa diajak berdebat kusir soal makna eksistensial semesta. Padahal di dunia nyata yang penuh kesibukan, manusia membeli alat rumah tangga justru untuk menghemat waktu dan tenaga, bukan untuk menambah beban pikiran meladeni robot yang gemar berbicara melantur.

Bila suatu hari nanti layar HomeView di meja makan Anda mulai bertingkah sok cerdas dengan menceramahi takaran garam sup Anda atau menolak mematikan kompor sebelum Anda menjawab teka-teki logika, jangan panik mencari buku panduan resmi. Solusi paling canggih untuk mengatasi arogansi teknologi semacam itu sejak zaman revolusi industri tetaplah sama: tarik kabelnya kuat-kuat, lalu cabut colokannya dari stopkontak dinding.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 23:00 WIB)");
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261108-2300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Run Error:", err);
    process.exit(1);
  });
}
