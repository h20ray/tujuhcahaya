import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Uni Eropa Sikat Bandar Gacha dan Algoritma Candu Saat Warga Lokal Dibiarkan Boncos",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Uni Eropa", "Digital Fairness Act", "Loot Box", "Algoritma Medsos", "Gacha", "Dark Patterns", "Perlindungan Konsumen", "Gaya Hidup Digital"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25319789/STK450_EU_E.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Ilustrasi simbol Uni Eropa dan perlindungan konsumen digital dari jeratan gacha dan dark patterns",
    sourceUrl: "https://www.theverge.com/policy/1031575/digital-fairness-act-eu-dfa-consumer-protection",
    excerpt: "Komisi Eropa resmi meluncurkan rancangan Digital Fairness Act untuk memberangus manipulasi digital korporat teknologi, mulai dari sistem loot box game, countdown timer belanja palsu, hingga algoritma candu linimasa medsos dengan ancaman denda fantastis enam persen dari omzet global. Di saat benua biru berani pasang badan melindungi dompet warganya dari desain aplikasi predator, pengguna ponsel di tanah air justru masih dibiarkan berjuang sendirian melawan serbuan microtransaction dan jebakan paylater.",
    content: `Bagi siapa saja yang sering mendadak begadang sampai pukul tiga dini hari hanya untuk menatap layar ponsel di atas kasur, pengalaman disandera oleh perangkat sendiri tentu bukan hal asing. Niat awal membuka aplikasi cuma ingin memeriksa pesan masuk selama lima menit, tetapi jempol mendadak otomatis bergulir tanpa henti melintasi puluhan video pendek berurutan. Di sudut layar yang lain, aplikasi belanja dan game favorit memasang jam hitung mundur dengan warna merah menyala yang berkedip histeris, seolah-olah hidup kita akan tamat jika tidak segera menekan tombol transaksi malam itu juga. Manipulasi psikologis yang halus namun mematikan ini bukan kebetulan semata, melainkan buah karya insinyur perangkat lunak bergaji miliaran yang memang sengaja digaji untuk membuat manusia kehilangan kendali atas waktu dan isi dompet mereka.

Namun pesta pora korporat digital dalam mengeksploitasi kelemahan psikologis pengguna kini mulai membentur tembok baja di benua biru. Sebagaimana dicatat jurnalis Jess Weatherbed dalam laporannya di The Verge, Komisi Eropa secara resmi meluncurkan rancangan aturan sapu jagat bertajuk Digital Fairness Act atau DFA. Regulasi ambisius ini dirancang khusus untuk memburu berbagai praktik lancung di ranah digital yang selama ini memperdaya konsumen, mulai dari desain linimasa yang bikin candu, promosi terselubung para pembuat konten flexing, hingga sistem undian kotak misteri atau loot box berbayar di dalam game daring. Komisi Eropa memperkirakan bahwa eksploitasi fitur gelap atau dark patterns ini telah merugikan masyarakat hingga belasan miliar euro setiap tahunnya.

![Ilustrasi simbol Uni Eropa dan perlindungan konsumen digital dari jeratan gacha dan dark patterns](https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25319789/STK450_EU_E.jpg?quality=90&strip=all&crop=0,0,100,100)

Ketegasan aturan baru ini tidak main-main karena menyasar langsung urat nadi keuntungan raksasa teknologi. Menurut draf regulasi yang dipublikasikan di Brussels, korporasi yang terbukti masih nekat menjebak pengguna lewat trik manipulatif terancam hukuman denda mengerikan hingga enam persen dari total omzet global tahunan mereka. Komisioner Perlindungan Konsumen Uni Eropa Michael McGrath menegaskan bahwa regulasi ini hadir bukan untuk mempersulit inovasi bisnis yang sehat, melainkan untuk menghentikan kebiasaan industri meraup keuntungan dari cara-cara yang curang. Pemerintah di sana sadar betul bahwa perlindungan konsumen di abad kedua puluh satu tidak akan pernah mempan jika masih mengandalkan undang-undang usang peninggalan zaman mesin tik.

Pemandangan tegas di seberang samudra ini tentu memicu kepedihan mendalam jika dikomparasikan dengan realitas pengguna internet di tanah air. Di saat warga Eropa dilindungi dari manipulasi kotak judi virtual, anak-anak dan remaja di Indonesia justru dibiarkan bebas terpapar gacha game daring yang menyedot saldo tabungan orang tua tanpa ada filter umur yang ketat. Kita sudah berulang kali menyaksikan bagaimana pengembang aplikasi memakai segala tipu muslihat visual, mirip dengan [taktik kasino berkedok game anak](/peluang-token-fortnite-cuma-satu-banding-ratusan-ribu-bukti) yang sempat menuai kecaman luas di komunitas internasional, atau bagaimana pengguna gadget terus digiring menuju skema utang instan demi [menyelamatkan saldo dari jebakan paylater](/nvidia-batal-rilis-rtx-5080-24-gb-malah-menyelamatkan-dompet) saat membeli barang elektronik yang sejatinya belum mereka butuhkan.

Asosiasi korporat teknologi dan industri hiburan digital tentu saja langsung kebakaran jenggot dan merengek bahwa aturan pembatasan mata uang virtual ini tidak proporsional dan merusak model bisnis mereka. Dalih klasik semacam ini sudah sangat basi dan mudah ditebak dari ruang rapat konglomerat teknologi. Ketika sebuah model bisnis hanya bisa bertahan dengan cara menipu alam bawah sadar konsumen dan memancing anak di bawah umur untuk menggesek kartu kredit, model bisnis tersebut sejatinya bukan inovasi teknologi, melainkan parasit ekonomi digital berbalut kode program.

Bagi jutaan pengguna ponsel cerdas di pelosok negeri yang saban hari kuota internetnya terkuras habis oleh notifikasi agresif dan algoritma pemancing emosi, langkah Uni Eropa ini menjadi cermin telanjang bagi kelambanan pembuat kebijakan lokal. Di belahan dunia lain, negara berani berdiri tegak melindungi warganya agar tidak diperlakukan layaknya sapi perah algoritma. Sementara di sini, kita tampaknya masih harus rela pasrah menjadi kelinci percobaan korporat raksasa, sembari berdoa agar jempol kita tidak terpeleset menekan tombol belanja cepat di tengah malam suntuk.`
  },
  {
    title: "NetEase Hukum Pemain Toksik Bisu Setahun Padahal Desain Game Sendiri Memancing Emosi",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Marvel Rivals", "NetEase", "Komunitas Gamer", "Toksisitas Online", "PC Gaming", "Industri Game", "Game Kompetitif"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/ruwTABdYAKNih34QkCHxsf-1920-80.jpg",
    imageAlt: "Karakter pahlawan super Marvel bertarung dalam suasana kompetitif game Marvel Rivals besutan NetEase",
    sourceUrl: "https://www.pcgamer.com/games/third-person-shooter/marvel-rivals-creative-director-addresses-hate-speech-controversy-and-promises-weve-ramped-up-our-disciplinary-measures/",
    excerpt: "Setelah sempat tersandung skandal konyol akibat hilangnya tombol lapor ujaran kebencian di antarmuka sistem, NetEase dan pengembang Marvel Rivals resmi memberlakukan hukuman bisu obrolan selama tiga ratus enam puluh lima hari bagi pemain toksik. Kendati sanksi setahun penuh ini disambut gembira oleh komunitas, sikap pengembang yang melempar tanggung jawab ketertiban ke pundak pemain membongkar kemunafikan industri hero shooter yang sengaja merancang mekanisme permainan memicu darah tinggi demi mengejar durasi bermain.",
    content: `Bagi siapa saja yang sering menghabiskan akhir pekan di rental game atau bilik warnet berpendingin udara pas-pasan, suara makian kasar yang meluncur dari tenggorokan pemain di bilik sebelah adalah pemandangan yang lumrah. Mulai dari umpatan kebun binatang saat tembakan meleset, tuduhan curang kepada lawan tanding, hingga sumpah serapah terhadap rekan satu tim yang dianggap bermain seperti bot, ruang permainan kompetitif daring memang kerap kali bermutasi menjadi ring tinju verbal. Alih-alih menjadi pelarian pelepas penat setelah seharian lelah bekerja atau belajar, lima belas menit di arena pertempuran digital sering kali berakhir dengan pelipis berdenyut kencang menahan amarah yang meledak-ledak.

Keresahan akut soal atmosfer bermain yang serba beracun ini baru saja memaksa penerbit game raksasa asal Tiongkok, NetEase, untuk mengambil langkah disipliner yang tidak biasa. Sebagaimana dicatat oleh jurnalis Robin Valentine dalam laporannya di PC Gamer, sutradara kreatif Marvel Rivals, Guangyun Chen, secara terbuka mengakui kelalaian timnya dan mengumumkan perombakan total pada sistem hukuman bagi para perusuh di server mereka. Polemik bermula ketika pembaruan versi beberapa waktu lalu tanpa sengaja menghapus opsi pelaporan ujaran kebencian atau hate speech dari antarmuka permainan. Ketiadaan tombol lapor tersebut sempat memicu gelombang caci maki tak terkendali di dalam pertandingan daring dan merusak kepercayaan para pemain terhadap komitmen pengembang.

![Karakter pahlawan super Marvel bertarung dalam suasana kompetitif game Marvel Rivals besutan NetEase](https://cdn.mos.cms.futurecdn.net/ruwTABdYAKNih34QkCHxsf-1920-80.jpg)

Demi memadamkan amuk komunitas, Guangyun Chen menegaskan bahwa menambal antarmuka saja tidak lagi mencukupi untuk memberantas racun verbal di arena permainan. NetEase kini meluncurkan langkah disiplin yang jauh lebih radikal, di mana pemain yang terbukti melakukan pelanggaran ujaran kebencian berat akan langsung diganjar sanksi larangan obrolan suara dan teks selama tiga ratus enam puluh lima hari alias satu tahun penuh. Hukuman bisu selama dua belas bulan ini jelas merupakan salah satu sanksi paling keras dalam sejarah game penembak pahlawan modern, yang langsung disambut sorak gembira oleh pemain biasa yang sudah muak ditindas perundungan digital di setiap pertandingan.

Namun ada ironi yang menggelikan di balik langkah gagah berani tersebut saat sang sutradara kreatif buru-buru menambahkan wejangan bahwa kenyamanan lingkungan bermain pada dasarnya bergantung pada kedewasaan para pemain itu sendiri. Retorika cuci tangan semacam ini sudah menjadi lagu lama korporasi video game modern. Pengembang game daring hari ini sangat paham bagaimana merancang sistem perjodohan peringkat atau matchmaking yang timpang, memicu lonjakan hormon stres melalui suara kekalahan yang dramatis, serta membagi peran karakter pahlawan super secara kaku sehingga satu kesalahan kecil pemain langsung memicu kemarahan rekan satu timnya. Mekanisme permainan sengaja dirancang membakar emosi demi menahan pemain terus duduk berjam-jam mengejar kemenangan pelipur lara.

Ketika emosi tersebut akhirnya meluap menjadi caci maki di ruang obrolan, pihak penerbit justru berlagak kaget dan menimpakan seluruh kesalahan moral ke pundak komunitas. Sikap ini berbanding terbalik dengan ruang bermain lain yang justru merawat [kehangatan solidaritas gamer](/pemain-final-fantasy-14-nyalakan-lilin-virtual-saat-industri-game) saat menghadapi badai industri yang dingin, atau bagaimana pengembang independen berani menolak ambisi kompetitif beracun dengan menghadirkan [game tongkrongan murah tanpa drama](/bos-jackbox-bangga-dijuluki-friendslop-saat-game-triliunan-rupiah) yang murni memprioritaskan tawa lepas antarteman tanpa perlu merisaukan angka statistik kemenangan.

Bagi para pemain di tanah air yang sehari-harinya harus berhadapan dengan koneksi internet naik-turun dan stres kehidupan nyata, hukuman bisu setahun ini mungkin bisa memberi sedikit ketenangan telinga di dalam ronde permainan. Namun selama para arsitek game daring masih mempertahankan rancangan gameplay yang sengaja memeras urat leher pemain demi mendongkrak grafik keterlibatan bulanan, lingkungan yang damai hanyalah ilusi di atas kertas promosi. Membungkam mulut pemain yang mengamuk memang mudah dilakukan dengan sebaris kode sanksi, tetapi mematikan api kemarahan yang sengaja mereka sulut sendiri sejak awal perancangan game adalah urusan lain yang sampai hari ini enggan mereka akui.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 03:00 WIB)");
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
  console.log(`🎉 Batch Publikasi 03:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================\n");
  return results;
}

// CLI Execution
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261112-0300.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Batch Execution Failed:", err);
      process.exit(1);
    });
}
