import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Gugun Blues Shelter Pulang ke Bahasa Ibu Saat Linimasa Kebanjiran Pop Menye-Menye",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Margaretha Nina", "Gugun Blues Shelter", "Blues", "Musik Indonesia", "Ruang Rasa", "Indie", "Gitar Listrik"],
    imageUrl: "https://analisnews.co.id/wp-content/uploads/2026/11/IMG-20261108-WA0021.jpg",
    imageAlt: "Penampilan Gugun Blues Shelter di atas panggung saat membawakan materi mini album Ruang Rasa",
    sourceUrl: "https://analisnews.co.id/index.php/2026/11/08/gugun-blues-shelter-rilis-ep-ruang-rasa-hadirkan-enam-lagu-blues-berbahasa-indonesia/",
    excerpt: "Setelah belasan tahun merajai festival internasional dengan lirik bahasa Inggris, trio Gugun Blues Shelter merilis EP Ruang Rasa. Enam nomor blues murni berbahasa Indonesia ini menjadi tamparan segar di tengah linimasa yang dipenuhi lagu pop patah hati seragam.",
    content: `Bagi siapa saja yang kerap menghabiskan malam di kedai kopi pinggir jalan dengan secangkir kopi hitam pekat dan kepulan asap rokok, bebunyian gitar blues selalu punya daya pikat magis tersendiri. Ada sesuatu yang sangat jujur dari suara senar baja yang ditarik meliuk-liuk di atas papan fret kayu tua. Nada-nada sumbang yang disengaja, ketukan drum lambat yang mengayun santai, serta desah vokal serak yang lahir dari rasa letih kehidupan sehari-hari bukan sekadar tontonan musikal, melainkan pelampiasan batin yang paling murni.

Namun di etalase musik digital tanah air hari ini, kemewahan suara organik semacam itu kian sulit ditemukan. Buka saja daftar putar tangga lagu terpopuler di aplikasi streaming ponsel Anda: telinga kita hampir pasti diserbu oleh ratusan lagu balada pop patah hati yang nadanya seragam, liriknya merengek-rengek manja meminta belas kasihan mantan pacar, dan diproduksi menggunakan ketukan instrumen sintetis tanpa jiwa.

Maka ketika salah satu unit trio blues paling disegani di Asia Tenggara memutuskan pulang kandang dan bernyanyi dengan bahasa rakyat, peristiwa ini terasa bagaikan siraman air dingin di tengah kegerahan musim kemarau.

![Penampilan Gugun Blues Shelter di atas panggung saat membawakan materi mini album Ruang Rasa](https://analisnews.co.id/wp-content/uploads/2026/11/IMG-20261108-WA0021.jpg)

Kabar gembira tersebut resmi mendarat di telinga penikmat musik tanah air pada akhir pekan ini. Sebagaimana dicatat dalam laporan peluncuran resmi yang dilansir dari Analis News, kelompok trio legendaris Gugun Blues Shelter resmi melepas karya rekaman teranyar mereka berupa album mini bertajuk Ruang Rasa. Album ini memuat enam lagu baru yang seluruh liriknya ditulis dan dinyanyikan secara utuh dalam bahasa Indonesia.

Bagi mereka yang mengikuti sepak terjang Gugun, Jono Armstrong, dan Bowie sejak awal dekade 2000-an, keputusan ini membawa bobot emosional yang sangat spesial. Selama hampir dua dekade, trio ini lebih sering melanglang buana ke festival bergengsi di Eropa dan Amerika Serikat dengan repertoar lagu berbahasa Inggris. Mereka sempat membuktikan bahwa musisi asal Indonesia sanggup berdiri sejajar dengan pahlawan blues dunia di panggung festival bergengsi Hyde Park London.

Menulis lirik lagu blues menggunakan kosakata bahasa Indonesia sejatinya bukan perkara gampang. Ritme ketukan shuffle dan melodi pentatonik blues lahir dari tradisi Afro-Amerika yang sangat bergantung pada intonasi suku kata bahasa Inggris. Bila salah merangkai kalimat, vokal blues berbahasa Indonesia bisa terdengar canggung bak deklamasi puisi lomba agustusan atau malah jatuh menjadi lelucon murahan.

Namun lewat tembang-tembang seperti "Jelita", "Pagi yang Damai", hingga nomor balada "Kini", Gugun membuktikan kelihaiannya meracik kosakata harian menjadi untaian nada yang renyah tanpa kehilangan cengkok blues yang berkarat. Lirik-liriknya tidak sibuk berfantasi tentang gedung pencakar langit kota Chicago, melainkan merekam obrolan tongkrongan, lelahnya perjuangan mencari nafkah, dan kerinduan sederhana manusia biasa.

Keberanian Gugun Blues Shelter untuk terus merawat akar suara analog ini mengingatkan kita pada fenomena [pemberontakan distorsi rock analog yang organik](/ketika-album-rock-jahanam-milik-black-horses-sukses-menyabet) di mana dahaga publik terhadap musik berenergi murni selalu berhasil mengalahkan trik komersial produser rekaman. Format rekaman live session yang mereka pilih di studio juga menyuguhkan dinamika bunyi yang telanjang, membiarkan dengung amplifier tabung dan petikan pick gitar terdengar apa adanya tanpa polesan koreksi nada digital.

Langkah ini sekaligus menjadi antitesis telak terhadap [kejenuhan pendengar terhadap lagu cinta seragam](/ketika-lagu-cinta-lawas-yovie-widianto-terus-didaur-ulang-karena) yang diproduksi massal oleh industri semata demi memburu viralitas potongan audio lima belas detik di linimasa media sosial. Ketika sebagian besar produser rekaman hari ini sibuk mendikte musisi agar berkompromi dengan selera algoritma, trio Gugun memilih setia menancapkan kabel instrumen ke amplifier dan membiarkan jemari mereka bercerita dengan jujur.

Menikmati enam nomor di album Ruang Rasa memberi kita kepastian berharga bahwa musik Indonesia tidak sedang kekurangan talenta hebat, melainkan sekadar kekurangan keberanian untuk tampil beda. Di tangan para empu blues yang sudah kenyang makan asam garam panggung jalanan ini, bahasa Indonesia terdengar gagah, hangat, dan berwibawa tanpa perlu kosmetik berlebihan.`
  },
  {
    title: "Starfield Mendadak Menyenangkan Begitu Cerita Utamanya Dibuang ke Tempat Sampah",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Bethesda", "Starfield", "RPG", "PC Gaming", "Xbox", "Eksplorasi Antariksa"],
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/11/sam-coe-starfield.jpg",
    imageAlt: "Karakter Sam Coe dan kapal luar angkasa dalam petualangan eksplorasi galaksi game Starfield buatan Bethesda",
    sourceUrl: "https://www.polygon.com/starfield-retrospective-bethesda-story/",
    excerpt: "Dihujat habis-habisan saat rilis karena plot pencarian artefak antariksa yang hambar, Starfield justru membuktikan daya pikat aslinya saat pemain mengabaikan misi utama dan memilih hidup bebas sebagai pembajak kapal luar angkasa.",
    content: `Bagi para penggemar setia game bermain peran di komputer dan konsol, nama Bethesda Game Studios selama dua dekade terakhir selalu identik dengan kebebasan tanpa batas. Kita mengenang Skyrim bukan karena alur cerita pembantaian naga yang kaku, melainkan karena kita bisa menghabiskan ratusan jam mencopet keju dari kantong pedagang desa, mendaki lereng gunung bersalju tanpa tujuan, atau sekadar menembakkan panah ke lutut penjaga kota. Daya tarik utama karya Bethesda selalu berakar pada kekacauan tak terduga yang diciptakan oleh pemain itu sendiri.

Itulah sebabnya ketika Starfield pertama kali meluncur ke pasaran, gelombang kekecewaan melanda komunitas gamer dengan skala yang menghancurkan. Janji manis petualangan seribu planet dari sang sutradara Todd Howard mendadak terasa hambar. Cerita utamanya yang berpusat pada kelompok penjelajah Constellation terasa membosankan, karakter rekannya hambar bak patung manekin toko pakaian, dan alur pencarian serpihan artefak magis terasa bagaikan tugas piket harian yang melelahkan.

Namun memberi vonis mati pada sebuah game luar angkasa raksasa hanya berdasarkan naskah cerita buatan penulis skenario korporat ternyata sebuah kekeliruan besar.

![Karakter Sam Coe dan kapal luar angkasa dalam petualangan eksplorasi galaksi game Starfield buatan Bethesda](https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/11/sam-coe-starfield.jpg)

Pandangan menyegarkan tersebut baru saja diulas tuntas dalam analisis retrospektif jurnalis Polygon pekan ini. Laporan tersebut membedah bagaimana Starfield bertransformasi menjadi game bernilai sempurna sepuluh dari sepuluh, dengan satu syarat mutlak: Anda harus membuang jauh-jauh buku panduan misi utama dan tidak pernah lagi menggubris ocehan karakter bernama Sarah Morgan atau Sam Coe.

Begitu Anda memutuskan untuk kabur dari garis narasi resmi Bethesda, galaksi Starfield mendadak berubah menjadi panggung bermain yang liar dan mengasyikkan. Tanpa beban moral untuk menyelamatkan peradaban galaksi, pemain bebas menjalani profesi apa pun yang terlintas di kepala. Anda bisa menjadi penyelundup barang terlarang yang lihai menyembunyikan kontainer narkotika antariksa Aurora di rongga lambung kapal, atau menjadi pembajak kapal luar angkasa yang melumpuhkan mesin kapal kargo korporasi sebelum menjarah seluruh perbekalannya.

Mekanisme perakitan kapal luar angkasa di game ini adalah mahakarya rekayasa sistem yang luar biasa kaya. Pemain bisa menghabiskan waktu berjam-jam di bengkel antariksa hanya untuk mencocokkan modul kokpit, generator perisai pelindung, dan susunan meriam laser demi membangun replika kapal tempur impian. Ditambah sistem pembangunan pangkalan di planet antah berantah dengan panorama cincin Saturnus yang menawan, game ini menyuguhkan simulasi bertahan hidup yang sangat adiktif.

Di tongkrongan gamer PC, perdebatan soal game ini sering kali berujung pada perbandingan sengit dengan simulasi antariksa lain seperti No Man's Sky atau Elite Dangerous. Bedanya, Bethesda tetap mempertahankan sentuhan fisika objek interaktif yang khas: setiap cangkir kopi, botol soda, dan lembaran dokumen yang berserakan di kabin kapal memiliki bobot serta collision box tersendiri. Sensasi duduk di kursi pilot sambil menyaksikan badai pasir menerpa kaca kokpit saat mesin pendorong lepas landas memberikan keintiman visual yang sukar ditandingi oleh game luar angkasa lainnya.

Kelemahan alur cerita Starfield sejatinya menggemakan borok menahun di industri game arus utama, persis seperti [kegagalan narasi klise yang membosankan di game berbujet triliunan rupiah](/ketika-dokumenter-bioware-berubah-jadi-surat-duka-cita-akibat) di mana ambisi sutradara untuk tampil sinematik justru membelenggu keseruan bermain. Ketika studio besar terlalu sibuk memaksakan alur drama sok serius, mereka kerap lupa bahwa kesenangan sejati seorang gamer terletak pada agensi pribadi untuk berbuat semaunya di dunia virtual.

Dinamika ini mengingatkan kita pada kenikmatan [kebebasan eksplorasi tanpa beban yang ditawarkan studio independen](/ketika-game-jaga-toko-loak-cyberpunk-malah-lebih-memikat) yang paham betul cara memanjakan rasa ingin tahu pemain tanpa perlu dijejali ceramah moral panjang lebar. Starfield pada kondisi terbaiknya bukanlah sebuah opera luar angkasa filosofis yang puitis, melainkan sebuah kotak mainan lego raksasa bertema antariksa.

Bagi Anda yang sempat mencampakkan game ini ke folder arsip digital dengan perasaan kecewa, barangkali sekarang adalah saat yang tepat untuk memasang kembali instalasinya ke media penyimpanan SSD Anda. Lupakan takdir megah para penjelajah artefak kosmik. Nyalakan mesin jet kapal Anda, terbanglah ke sudut galaksi paling gelap tanpa izin pangkalan, dan nikmatilah hidup sebagai bajak laut yang tidak berutang penjelasan apa pun kepada siapa pun.`
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261108-1900.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Run Error:", err);
    process.exit(1);
  });
}
