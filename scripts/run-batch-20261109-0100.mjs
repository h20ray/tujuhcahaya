import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "King Nassar Mengacak-acak AMI Awards Saat Penonton Sok Elitis Ikut Bergoyang",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["AMI Awards 2026", "Budaya Populer", "Dangdut", "Industri Musik", "King Nassar", "Margaretha Nina", "Musik Indonesia"],
    imageUrl: "https://awsimages.detik.net.id/api/wm/2026/11/07/nassar-1794027403957_169.jpeg?wid=54&w=1200&v=1&t=jpeg",
    imageAlt: "Aksi panggung King Nassar yang flamboyan dan memukau ribuan penonton di panggung megah Anugerah Musik Indonesia",
    sourceUrl: "https://www.detik.com/pop/trending/d-8744034/pemenang-ami-awards-2026-panggung-luar-biasa-nassar",
    excerpt: "Penampilan King Nassar di malam puncak AMI Awards ke-29 membuktikan satu hal telak: ketika dangdut dihantamkan tanpa rasa malu di depan barisan pesohor berjas rapi, arogansi musik pop elitis langsung rontok dan berganti goyangan massal.",
    content: `Kalau Anda sempat mengintip siaran malam penganugerahan musik bergengsi di layar kaca atau linimasa media sosial beberapa hari belakangan, pemandangan awalnya terasa sangat akrab sekaligus menjemukan. Deretan pesohor industri hiburan duduk mematung di kursi VIP dengan balutan setelan jas kaku dan gaun malam berkilau seharga puluhan juta rupiah. Mereka melempar senyum simetris yang sangat dijaga, bertepuk tangan sopan dengan tempo terukur, dan berbicara memakai intonasi teratur seolah-olah sedang menghadiri sidang pleno diplomatik antarnegara. Suasana kaku semacam itu seakan menegaskan dinding pemisah yang tebal antara gemerlap panggung borjuis ibu kota dan denyut kehidupan warga biasa di jalanan.

Namun kepalsuan estetika yang dirawat dengan sangat rapi itu mendadak luluh lantak begitu lampu sorot utama mengarah ke sosok Nassar Sungkar. Sebagaimana dicatat dalam laporan detikcom pada malam puncak perhelatan Anugerah Musik Indonesia ke-29 pekan ini, penyanyi yang kini lekat dengan julukan King Nassar itu datang bukan sekadar untuk membawakan nomor lagu pengisi jeda siaran. Ia hadir bak badai tropis di tengah ruangan berpendingin udara: mengenakan jubah flamboyan dengan aksen megah, meliuk lincah dari ujung panggung ke panggung lain, dan menyanyikan cengkok dangdut dengan kepiawaian vokal yang sanggup membikin penyanyi pop sekolah vokal mana pun menelan ludah.

![Aksi panggung King Nassar yang flamboyan dan memukau ribuan penonton di panggung megah Anugerah Musik Indonesia](https://awsimages.detik.net.id/api/wm/2026/11/07/nassar-1794027403957_169.jpeg?wid=54&w=1200&v=1&t=jpeg)

Aksi panggung Nassar tidak berhenti pada unjuk kualitas pita suara. Dengan rasa percaya diri yang meluap tanpa tedeng al-aling, sang biduan memanjat konstruksi tiang tata panggung, menari bersama kru penata lampu, lalu melemparkan mikrofon ke udara sambil berteriak membakar semangat penonton. Reaksi yang terjadi di lantai dansa sungguh pemandangan yang menggelikan sekaligus melegakan. Barisan produser necis, penyanyi indie berkacamata bulat tebal, hingga eksekutif label musik yang semenit sebelumnya masih sok anggun mendadak kehilangan kendali atas reputasi mahal mereka. Mereka serempak berdiri dari kursi empuk, menggoyangkan pinggul, dan ikut melafalkan lirik lagu dangdut tanpa memedulikan tatanan rambut yang mulai berantakan.

Momen pecahnya ruangan megah itu adalah pukulan telak bagi arogansi kultural yang sudah puluhan tahun menjangkiti skena musik tanah air. Ada anggapan usang di kalangan kelas menengah perkotaan bahwa dangdut adalah musik kelas dua—hiburan pinggiran yang pasnya hanya diputar di kabin truk pantura atau panggung hajatan kampung dengan pelantang suara bising. Sebaliknya, panggung penghargaan resmi kerap diposisikan sebagai tempat suci bagi lagu balada melankolis berbahasa asing atau musik pop manis yang diproduksi dengan formula aman demi memburu angka streaming algoritma.

Padahal sejarah mencatat bahwa kejujuran artistik kerap lahir dari keberanian merangkul akar rumput, mirip seperti kejutan kultural saat [panggung megah AMI Awards sempat disengat keresahan warga](/ketika-panggung-megah-ami-awards-disengat-salam-tiga-jari-dan) dan momen ketika [album pop terbaik direbut anak pesisir Wakatobi Raim Laode](/ketika-album-pop-terbaik-ami-awards-direbut-anak-pesisir-wakatobi) yang membuktikan bahwa publik sesungguhnya haus akan ekspresi yang tidak dibuat-buat. King Nassar tidak butuh pengakuan dari kritikus musik yang hobi memakai istilah teknis rumit untuk membuktikan kehebatannya. Keringat yang membasahi dahinya dan ribuan pasang kaki yang meloncat girang di hadapannya sudah cukup menjadi mahkota yang tak terbantahkan.

Dangdut dalam genggaman penyanyi kaliber Nassar memperlihatkan fungsi purba dari sebuah pertunjukan seni: meruntuhkan hierarki sosial dan menyatukan manusia lewat katarsis kegembiraan bersama. Di depan dentuman kendang dan gesekan mandolin yang menghipnosis, tidak ada lagi perbedaan antara bos label rekaman kaya raya dan buruh kasar yang menanti upah bulanan. Semuanya luluh menjadi kerumunan yang sama-sama membutuhkan pelampiasan atas penatnya beban hidup sehari-hari.

Pelajaran dari malam itu sangat jelas bagi siapa saja yang masih gemar bersikap sok elitis dalam urusan selera nada. Anda boleh saja mengoleksi piringan hitam impor dari London dan berlagak cuma mendengarkan alunan jazz kamar tidur, tapi begitu ketukan intro lagu dangdut dihantamkan ke dada Anda, tubuh Anda yang lelah akan selalu memilih untuk bergoyang sampai tumit pegal linu.`
  },
  {
    title: "Modder Bikin Skyrim Jadi MMO Abadi Saat Bethesda Masih Doyan Jual Kaset Lawas",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Bethesda", "Industri Game", "Modding", "MMORPG", "PC Gaming", "Skyrim"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/zcxc3uHvAH7FJr4rQrSwXE-1920-80.jpg",
    imageAlt: "Tangkapan layar mod Aurbis yang mengubah lanskap dunia Skyrim menjadi server daring multipemain abadi",
    sourceUrl: "https://www.pcgamer.com/games/the-elder-scrolls/this-massive-mod-essentially-turns-skyrim-into-a-persistent-mmo-where-player-actions-create-lasting-consequences/",
    excerpt: "Proyek modifikasi independen Aurbis sukses menyulap petualangan solo The Elder Scrolls V: Skyrim menjadi dunia MMO daring yang persisten. Sementara Bethesda sibuk mendaur ulang game yang sama selama 15 tahun demi cuan receh, para gamer sukarela justru membuktikan kekuatan dedikasi komunitas tanpa embel-embel mikrotransaksi serakah.",
    content: `Lelucon paling awet di kalangan gamer PC adalah bahwa Todd Howard dan Bethesda kemungkinan bakal merilis Skyrim di jam tangan pintar, pemanggang roti, hingga layar kulkas dua pintu sebelum mereka sempat merampungkan The Elder Scrolls VI. Sudah lima belas tahun berlalu sejak game petualangan dunia salju ini pertama kali mendarat di pasaran, dan selama itu pula para petualang di provinsi Tamriel sudah hafal di luar kepala letak setiap keranjang apel, pola serangan naga, hingga dialog ikonik penjaga gerbang kota yang lututnya tertusuk anak panah.

Namun keajaiban sejati Skyrim tidak pernah berada di tangan korporasi penerbitnya, melainkan di pundak komunitas modder yang pantang menyerah menyuntikkan napas kehidupan baru. Sebagaimana dicatat dalam laporan PC Gamer pekan ini, sebuah proyek modifikasi skala masif bertajuk Aurbis resmi mengumumkan lompatan paling berani dalam sejarah game ini. Mod ini bukan sekadar alat bermain bersama skala kecil seperti mod pendahulu, melainkan merombak total petualangan solo Skyrim menjadi server MMO abadi dengan dunia persisten. Di dalam proyek tersebut, setiap tindakan pemain meninggalkan dampak permanen, lengkap dengan roda ekonomi yang digerakkan oleh sesama pemain, kepemilikan aset rumah, sistem profesi berjenjang, hingga quest buatan komunitas.

![Tangkapan layar mod Aurbis yang mengubah lanskap dunia Skyrim menjadi server daring multipemain abadi](https://cdn.mos.cms.futurecdn.net/zcxc3uHvAH7FJr4rQrSwXE-1920-80.jpg)

Skala perombakan yang digarap oleh tim sukarela di balik Aurbis sungguh bikin geleng-geleng kepala. Mereka menyusun ulang sistem perkembangan karakter agar kekuatan avatar berkembang perlahan lewat latihan disiplin dan kerja sama tim, alih-alih mendadak menjadi dewa tak terkalahkan dalam beberapa jam bermain. Eksplorasi gua dan dungeon yang dulu bisa ditaklukkan sendirian sambil mengunyah camilan kini dirancang ulang menjadi misi berbahaya yang menuntut pembagian peran jelas: ada petarung garis depan yang menahan hantaman monster, perapal sihir penyembuh di barisan belakang, dan pengintai yang waspada membuka peti harta.

Melihat dedikasi tanpa pamrih ini, siapa pun yang mengamati industri game modern bakal merasakan ironi yang menohok ulu hati. Di satu sisi, penerbit game kelas kakap dengan ribuan karyawan dan kucuran dana triliunan rupiah kerap gagal menelurkan game multipemain yang solid. Alih-alih menyuguhkan petualangan yang memikat, rilisan modern sering kali hadir compang-camping dengan server rapuh dan toko kosmetik digital serakah. Fenomena ini mengingatkan kita pada kekacauan serupa saat [Starfield mendadak menyenangkan begitu cerita utamanya dibuang](/starfield-mendadak-menyenangkan-begitu-cerita-utamanya-dibuang-ke) dan langkah putus asa saat [Blizzard membangun panti jompo di Azeroth](/blizzard-bangun-panti-jompo-di-azeroth-buat-gamer-milenial-yang) demi memeras rasa rindu pemain berumur tanpa mau bersusah payah menciptakan inovasi desain yang segar.

Bethesda selama belasan tahun terus mengeruk keuntungan dari penjualan ulang Skyrim dalam kemasan remaster, anniversary edition, hingga porting konsol generasi baru tanpa pernah benar-benar membedah kode usang mesin game mereka. Sementara itu, sekelompok programmer dan penggiat komunitas rela mengorbankan waktu istirahat malam mereka demi mewujudkan mimpi bermain peran bersama di Tamriel secara cuma-cuma, tanpa ada tagihan battle pass musiman atau pop-up promosi koin mikrotransaksi yang merusak pemandangan mata.

Bagi barisan gamer yang nongkrong di bilik warnet atau duduk berjam-jam di depan monitor kamar kos, proyek seperti Aurbis membuktikan bahwa nilai sebuah game tidak pernah ditentukan oleh seberapa megah stan pameran humas di konvensi tahunan. Daya pikat sejati sebuah karya lahir dari kebebasan pemain untuk membentuk nasib mereka sendiri di tengah dunia yang menghargai kecerdasan dan kerja keras mereka.

Pelajaran paling berharga dari proyek Aurbis sangatlah terang benderang bagi para direksi studio game besar: Anda bisa saja memegang hak paten atas merek dagang legendaris, tapi jiwa dan denyut nadi permainan itu selamanya berada di tangan komunitas pemain yang rela begadang semalaman demi menjaga dunia fantasi mereka tetap bernyawa.`
  }
];

export async function runBatch() {
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
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261109-0100.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Run Error:", err);
    process.exit(1);
  });
}
