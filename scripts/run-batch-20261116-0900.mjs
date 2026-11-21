import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Karakter Baru Slay the Spire 2 Terlalu Sakti Sampai Bos Mati Sekali Tembak",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Slay the Spire 2", "Mega Crit", "Game Indie", "PC Gaming", "Roguelike", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/itGuQiaWYKzcg4DooXdcAe-1920-80.png",
    imageAlt: "Tangkapan layar karakter baru The Fool dalam tahap pengujian game roguelike deckbuilder Slay the Spire 2 garapan Mega Crit",
    sourceUrl: "https://www.pcgamer.com/games/card-games/slay-the-spire-2-has-a-new-character-in-testing-and-shes-really-quite-busted/",
    excerpt: "Mega Crit merilis karakter anyar The Fool di beta branch Slay the Spire 2. Mekanik panah dan kartu Repeat Shot langsung dicap kelewat sakti sampai sanggup melibas bos dalam sekali giliran.",
    content: `Momen paling memuaskan saat begadang di depan monitor komputer bukanlah ketika kita berhasil menamatkan game dengan susah payah, melainkan saat kita tak sengaja menemukan kombinasi kartu atau senjata yang luar biasa curang sampai musuh tampak seperti badut tak berdaya. Sensasi menemukan celah mekanik alias *broken build* itu ibarat memesan seporsi mie instan di warung kopi malam hari lalu sang pemilik warkop salah menaruh dua butir telur setengah matang tanpa menagih bayaran tambahan. Ada rasa bersalah yang menggelitik, tapi mulut kita tetap mengunyah dengan senyum lebar penuh kemenangan. Kenikmatan primitif semacam inilah yang selama bertahun-tahun jarang lagi kita temukan di industri game modern yang terlalu terobsesi dengan kalkulasi keseimbangan kompetitif yang kaku dan membosankan.

Kerinduan para gamer kasual akan sensasi menjadi overpowered tersebut mendadak terbayar lunas lewat pengumuman teranyar dari Mega Crit. Sebagaimana dicatat dalam laporan mendalam jurnalis PC Gamer akhir pekan ini, studio pengembang indie tersebut baru saja merilis pembaruan besar di saluran uji coba atau *beta branch* untuk sekuel yang paling dinanti komunitas sedunia: Slay the Spire 2. Di balik deretan penyesuaian kode, perhatian jutaan pemain langsung tertuju pada kehadiran sesosok karakter protagonis anyar yang dijuluki The Fool. Mengusung konsep pemanah lincah bersenjatakan busur dan anak panah, karakter ini langsung mengguncang tangga peringkat komunitas karena statusnya yang dianggap kelewat sakti alias *busted*.

Keajaiban The Fool berakar pada mekanik bidikan atau *aim* yang terakumulasi di setiap giliran tempur. Tidak seperti karakter pemula di seri sebelumnya yang harus merangkak dari serangan berdaya rendah, kartu bawaan The Fool sudah mengantongi cadangan bidikan awal yang langsung melipatgandakan daya hancur sejak ronde pertama. Puncaknya terjadi ketika pemain beruntung menarik kartu langka bertajuk *Repeat Shot*. Dengan kombinasi status tertancap (*impale*) dan pelepasan anak panah (*dislodge*), pemain bisa meluncurkan rentetan serangan bertubi-tubi yang menghasilkan total kerusakan fantastis hingga mendekati delapan puluh poin dalam satu tarikan napas. Akibatnya sangat kocak: bos besar penjaga lantai pertama yang biasanya membuat pemain berkeringat dingin mendadak tewas hanya dalam sekali giliran tanpa sempat melancarkan serangan balasan.

![Tangkapan layar karakter baru The Fool dalam tahap pengujian game roguelike deckbuilder Slay the Spire 2 garapan Mega Crit](https://cdn.mos.cms.futurecdn.net/itGuQiaWYKzcg4DooXdcAe-1920-80.png)

Pihak Mega Crit sendiri dalam catatan tambalan resmi mereka mengakui secara blak-blakan bahwa The Fool memang masih sangat jauh dari kata seimbang dan bakal menerima segudang perombakan sebelum meluncur ke versi final. Namun respons komunitas gamer justru kebalikannya: alih-alih melayangkan protes berapi-api, para pemain malah bersorak gembira menikmati kekacauan tersebut. Sikap santai ini memperlihatkan jurang filosofis yang sangat kontras antara developer independen dan raksasa korporasi game AAA. Di ranah korporat arus utama, setiap kali pemain menemukan trik seru yang menyenangkan, publisher langsung panik menggelar pembaruan darurat demi mengebiri kemampuan karakter alias *nerf* massal dengan dalih menjaga integritas ekosistem komersial.

Keberanian Mega Crit membiarkan pemain bersenang-senang dengan kekacauan mekanik menjadi pengingat segar mengapa ekosistem indie tetap menjadi benteng pertahanan terakhir industri hiburan digital. Sikap jujur ini mengulang kembali fenomena ketika [game indie bikinan dua orang berhasil tampar proyek triliunan](/game-indie-bikinan-dua-orang-berhasil-tampar-proyek-triliunan) studio raksasa yang kehabisan ide segar. Komunitas pemain sudah terlalu lelah disuguhi produk korporat yang kaku dan penuh perhitungan matematis pelit, atau frustrasi menyaksikan publisher besar yang sibuk mengumbar [janji manis perombakan client yang terlambat belasan tahun](/riot-pamer-rombakan-league-of-legends-saat-gamer-pc-sudah-bosan) ketimbang memprioritaskan kesenangan murni saat bermain. Dalam game bertema *roguelike deckbuilder*, kegembiraan terbesar pemain justru lahir saat mereka berhasil meracik sinergi kartu gila yang merusak tatanan aturan permainan.

Pada akhirnya, membiarkan karakter baru tampil sedikit kelewat sakti di fase pengujian bukanlah dosa besar yang patut ditangisi. Biarkan saja para pemain bersenang-senang menumbangkan monster raksasa dalam sekali jentikan jari sebelum Mega Crit mengirimkan palu penyeimbang di pembaruan berikutnya. Lagipula, hidup di dunia nyata sudah cukup melelahkan dengan segala beban tagihan dan jam kerja lembur yang tak seimbang; masa di dalam game kartu virtual pun kita masih dilarang merasakan nikmatnya membantai bos tanpa perlu memeras keringat dingin?`
  },
  {
    title: "Roket Vulcan Hancurkan Satelit Amazon Saat Ambisi Saingi Starlink Kena Tampar",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Roket Vulcan", "United Launch Alliance", "Amazon Kuiper", "Starlink", "Satelit Internet", "Elang Elano"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2026/11/GettyImages-2304790934-1152x648.jpg",
    imageAlt: "Peluncuran roket Vulcan Centaur milik United Launch Alliance di Cape Canaveral Florida yang membawa 40 satelit Amazon Kuiper",
    sourceUrl: "https://arstechnica.com/space/2026/11/vulcan-rocket-fails-during-launch-dealing-major-blow-to-spacex-competitors/",
    excerpt: "Roket Vulcan Centaur milik ULA meledak dan menghancurkan 40 satelit broadband Project Kuiper milik Amazon. Pukulan telak bagi Jeff Bezos yang bermimpi menantang monopoli Starlink.",
    content: `Bagi masyarakat kelas pekerja yang saban bulan setia membayar tagihan internet rumahan, urusan koneksi lemot biasanya diselesaikan dengan ritual klasik yang sangat membumi: mencabut kabel adaptor router wifi, menunggu selama tiga puluh detik, lalu mencolokkannya kembali sambil komat-kamit berdoa. Kalau lampu indikator masih berkedip merah menyala, kita cukup menelepon pusat bantuan pelanggan operator untuk mendengarkan alunan musik tunggu yang monoton. Namun bagi para konglomerat teknologi Silicon Valley yang memiliki tumpukan uang tanpa batas, problem memperluas jaringan internet tidak diselesaikan dengan menarik kabel serat optik di tiang listrik pinggir jalan. Mereka lebih memilih membakar bahan bakar cair ratusan ton dan melontarkan ribuan satelit logam ke orbit bumi demi membangun kerajaan koneksi nirkabel antariksa.

Sialnya, ambisi langit para miliarder tersebut baru saja dihantam kenyataan pahit yang berakhir menjadi tontonan kembang api termahal tahun ini. Sebagaimana dicatat dalam laporan mendalam jurnalis sains Ars Technica awal pekan ini, roket pengangkut Vulcan Centaur milik konsorsium United Launch Alliance (ULA) mengalami kegagalan misi total hanya beberapa menit setelah meluncur dari pangkalan Cape Canaveral Space Force Station di Florida. Petaka antariksa tersebut bukan sekadar menghancurkan bodi roket setinggi puluhan meter, melainkan turut melenyapkan kargo berharga di dalamnya: empat puluh unit satelit broadband komersial milik Project Kuiper, proyek ambisius besutan raksasa e-commerce Amazon. Kegagalan perdana dalam sejarah dua puluh tahun ULA ini seketika memaksa seluruh jadwal penerbangan roket dibekukan tanpa batas waktu yang jelas.

Bagi Jeff Bezos dan jajaran petinggi Amazon, insiden meledaknya empat puluh satelit ini merupakan tamparan keras yang sangat memalukan. Selama beberapa tahun terakhir, Amazon dengan lantang sesumbar bakal meluncurkan lebih dari tiga ribu satelit orbit rendah demi meruntuhkan dominasi Starlink milik Elon Musk yang kini merajai langit dunia. Namun alih-alih memamerkan kecepatan unduhan perdana di hadapan para pemegang saham, Amazon justru harus menyaksikan investasi bernilai ratusan miliar rupiah mereka menguap menjadi serpihan debu panas yang jatuh kembali ke permukaan laut. Ironisnya lagi, misi naas ini baru merupakan peluncuran pertama dari total tiga puluh delapan kontrak peluncuran roket Vulcan yang sudah diteken Amazon dengan biaya luar biasa fantastis.

![Peluncuran roket Vulcan Centaur milik United Launch Alliance di Cape Canaveral Florida yang membawa 40 satelit Amazon Kuiper](https://cdn.arstechnica.net/wp-content/uploads/2026/11/GettyImages-2304790934-1152x648.jpg)

Di sinilah letak ironi terbesar dari obsesi perlombaan teknologi luar angkasa modern. Para taipan teknologi gemar mempromosikan gagasan puitis tentang menghubungkan masyarakat terpencil di pelosok bumi dengan internet satelit berkecepatan tinggi. Namun di balik retorika mulia tersebut, motivasi sejatinya adalah perebutan kue monopoli infrastruktur data global yang bernilai ribuan triliun rupiah. Ketika roket peluncur mereka mendadak mogok dan gagal menjalankan tugas, publik kembali disadarkan pada betapa rapuhnya rantai pasok teknologi yang terlalu bergantung pada segelintir korporasi raksasa pertahanan Amerika Serikat.

Bagi warga biasa yang tinggal di kawasan padat penduduk kota, kabar meledaknya satelit miliaran dolar ini mungkin terasa seperti dongeng fiksi ilmiah yang terlampau jauh dari realitas dapur mereka. Di lapangan, masyarakat kita lebih sering dipusingkan oleh [koneksi sinyal ponsel yang mendadak sekarat di tengah kerumunan](/sinyal-hp-mendadak-sekarat-di-keramaian-bukti-janji-kecepatan-5g) saat menghadiri acara publik ketimbang memikirkan konstelasi satelit di lapisan stratosfer. Petaka roket Vulcan ini sekaligus mempertegas bagaimana [kerentanan infrastruktur komputasi terpusat bisa mengacaukan layanan](/server-microsoft-365-tumbang-bukti-ketergantungan-cloud-malah) dalam skala global hanya karena sebuah anomali perangkat keras di hulu. Ketergantungan buta pada solusi teknologi serba otomatis sering kali mengabaikan fakta dasar bahwa hukum fisika dan gravitasi tidak bisa disuap dengan lembaran cek korporasi.

Perlombaan menembus langit memang terdengar gagah di atas panggung presentasi investor dan materi promosi humas. Namun selama roket pengangkut satelit mereka masih doyan terbakar di udara dan menyisakan tumpukan sampah antariksa, para petinggi korporasi sebaiknya menahan diri untuk tidak terlalu banyak berkhotbah soal masa depan peradaban digital. Menghubungkan seluruh penghuni bumi dengan internet cepat tentu cita-cita yang mulia, tetapi memastikan roket Anda tidak meledak lima menit sehabis lepas landas tampaknya adalah prioritas yang jauh lebih masuk akal untuk dikerjakan terlebih dahulu.`
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
  console.log(`🎉 BATCH SELESAI: ${results.length} artikel berhasil diaudit & dipublikasikan.`);
  console.log("=================================================================");
  for (const res of results) {
    console.log(`- [${res.status.toUpperCase()}] ${res.slug} (Skor: ${res.score}) -> ${res.url}`);
  }
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261116-0900.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
