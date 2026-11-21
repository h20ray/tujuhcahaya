import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Google DeepMind Buktikan Enkripsi Signal Saat Chatbot Sendiri Masih Doyan Halu",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Google DeepMind", "Signal", "Enkripsi Kriptografi", "Keamanan Siber", "Chatbot AI", "Privasi Digital", "Aplikasi Chat"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2026/11/signal_icon-1024x648.jpg",
    imageAlt: "Ikon aplikasi perpesanan terenkripsi Signal dengan latar belakang biru khas keamanan data digital",
    sourceUrl: "https://arstechnica.com/ai/2026/11/signals-encryption-just-passed-an-ai-powered-mathematical-checkup/",
    excerpt: "Google DeepMind mengumumkan keberhasilan tim penelitinya dalam memverifikasi secara matematis protokol enkripsi aplikasi Signal menggunakan kecerdasan buatan. Di balik klaim pembuktian kode formal yang terdengar adiluhung ini, publik warkop justru tersenyum masam melihat ironi raksasa mesin pencari yang gemar mengutak-atik benteng privasi pihak lain sementara produk komunikasi dan chatbot buatannya sendiri masih rentan melantur dan rakus memanen data pribadi.",
    content: `Bagi siapa saja yang sehari-harinya berkutat dengan urusan jaringan komputer dan server kantor di tanah air, obrolan seputar privasi digital sering kali berakhir menjadi guyonan pahit di sela tegukan kopi saset. Saban hari kita membaca rilis pers mentereng tentang kecanggihan proteksi data pribadi tingkat militer, tetapi kenyataan di lapangan berkata lain. Ponsel kita tidak pernah berhenti dibombardir tawaran pinjaman online ilegal lewat pesan singkat, nomor kontak keluarga mendadak masuk ke grup investasi bodong, dan riwayat belanja kita langsung menjelma menjadi iklan banner yang mengejar ke mana pun kursor diarahkan. Di tengah kekacauan itu, aplikasi Signal selama bertahun-tahun berdiri tegak laksana tempat pengungsian terakhir bagi siapa saja yang masih waras dan menghargai kerahasiaan percakapan pribadi. Tanpa iklan pelacak, tanpa algoritma pemanen emosi, dan dikelola oleh yayasan nirlaba yang tidak punya nafsu menjual data pengguna ke pemodal ventura.

Ketenangan benteng privasi tersebut belakangan ini mendadak menarik perhatian para ilmuwan elit dari raksasa teknologi Lembah Silikon. Sebagaimana dicatat oleh jurnalis Benj Edwards dalam laporannya di Ars Technica, tim peneliti Google DeepMind baru saja menuntaskan proyek pembuktian formal selama empat pekan terhadap protokol kriptografi Signal. Menggunakan model kecerdasan buatan Gemini yang dipadukan dengan piranti lunak pembuktian interaktif Lean, para periset berhasil memverifikasi secara matematis bahwa implementasi protokol pertukaran kunci kriptografi milik Signal bebas dari celah logika mendasar. Metode verifikasi formal semacam ini selama berdekade dikenal sebagai pekerjaan para dewa matematika yang luar biasa rumit, mahal, dan melelahkan sehingga jarang diterapkan pada aplikasi konsumen skala luas. Dengan menyuntikkan model penalaran terarah, DeepMind mengeklaim telah memangkas proses pembuktian kode rumit tersebut menjadi sekadar hitungan minggu.

![Ikon aplikasi perpesanan terenkripsi Signal dengan latar belakang biru khas keamanan data digital](https://cdn.arstechnica.net/wp-content/uploads/2026/11/signal_icon-1024x648.jpg)

Mendengar kabar bahwa sebuah algoritma kecerdasan buatan sanggup memeriksa rumus matematika kriptografi tanpa cela sepintas terasa seperti lompatan sains yang menakjubkan. Namun jika kita memandang peristiwa ini dengan sudut pandang warkop yang skeptis, ada ironi yang luar biasa tebal terpampang di depan mata. Google, korporasi yang menyokong riset DeepMind, adalah entitas raksasa yang sejarah panjangnya dipenuhi rekam jejak kegagalan mengelola privasi dan aplikasi pesan instan. Kita tentu belum lupa bagaimana Google berkali-kali meluncurkan dan membunuh belasan aplikasi obrolan mereka sendiri, mulai dari Google Talk, Hangouts, Allo, hingga Spaces, yang semuanya dirancang dengan arsitektur komersial haus data profil pengguna. Sungguh pemandangan menggelitik ketika ilmuwan Google sibuk membuktikan kesucian matematika Signal, sementara raksasa iklan tempat mereka bernaung justru hidup dari monetisasi miliaran riwayat obrolan dan pencarian manusia di seluruh dunia.

Kontradiksi ini semakin tajam jika kita menengok performa produk kecerdasan buatan konsumen yang dijajakan ke ruang publik. Di saat tim peneliti membanggakan ketelitian matematika AI mereka di jurnal ilmiah, chatbot percakapan yang dilepas ke pasar komersial masih kerap berhalusinasi, mengarang fakta sejarah fiktif, atau bahkan memberikan instruksi berbahaya dengan nada sangat percaya diri. Bahaya kelalaian korporasi teknologi dalam memoles kecerdasan buatan sudah berulang kali menelan korban di dunia nyata, persis seperti peristiwa ketika [kecerobohan asisten koding AI membocorkan rahasia](/claude-code-bocorkan-ribuan-kunci-rahasia-di-github-saat) dan kredensial sensitif ribuan pengembang ke repositori terbuka. Terlebih lagi, hasrat tak terbendung korporat teknologi untuk terus menyusup ke ruang privat warga semakin vulgar, sebagaimana terlihat dari langkah agresif [pelanggaran privasi di ruang tamu rumah sendiri](/amazon-terbangkan-drone-ring-di-ruang-tamu-menandai-tamatnya) demi melatih algoritma pengawasan yang makin agresif.

Bagi masyarakat pengguna internet di Indonesia yang saban hari terbiasa mengelus dada menghadapi kebocoran data instansi publik, validasi matematika dari Google DeepMind terhadap Signal sejatinya tidak mengubah prinsip dasar keamanan digital. Privasi sejati bukanlah sesuatu yang dihadiahkan oleh kebaikan hati korporasi triliunan dolar, melainkan hak asasi yang harus kita rawat sendiri lewat pemilihan alat yang tidak rakus modal. Selama aplikasi perpesanan utama yang kita pakai sehari-hari masih dikuasai oleh konglomerasi media sosial yang hobi mengintip metadata kontak demi kepentingan target periklanan, pembuktian matematika tercanggih di dunia pun tidak akan sanggup menyelamatkan kita dari kepungan iklan panci presto dan teror pinjol ilegal.`
  },
  {
    title: "Pemain Final Fantasy 14 Nyalakan Lilin Virtual Saat Industri Game Kian Dingin",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Final Fantasy 14", "Square Enix", "The Primals", "Eikichi Iwai", "Komunitas Gamer", "MMORPG", "PC Gaming"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/fE9QpmpttoXK7UyGkBX2Kk-1920-80.jpg",
    imageAlt: "Para pemain Final Fantasy 14 berkumpul menggelar malam keakraban virtual di pelataran kota Limsa Lominsa untuk menghormati mendiang pemetik bas Eikichi Iwai",
    sourceUrl: "https://www.pcgamer.com/games/final-fantasy/final-fantasy-14-players-are-gathering-in-virtual-vigils-to-honour-the-passing-of-the-games-most-prestigious-bass-player/",
    excerpt: "Ratusan ribu pemain Final Fantasy 14 serentak menggelar malam perenungan virtual di alun-alun kota Eorzea demi menghormati berpulangnya Eikichi Iwai, pemetik bas legendaris band resmi The Primals. Di tengah industri game modern yang kian dingin oleh gelombang PHK massal dan kerakusan monetisasi live-service, solidaritas tulus komunitas petualang dunia maya ini menjadi oase penyejuk bahwa video game masih memiliki jiwa kemanusiaan yang hangat.",
    content: `Menghidupkan monitor komputer di tengah malam buta setelah seharian memeras keringat di jalanan macet kota sering kali menjadi satu-satunya pelarian damai bagi jutaan penikmat game di tanah air. Di atas meja kerja kontrakan yang sempit, deru pelan kipas pendingin dan kelap-kelip lampu keyboard mekanik menjadi saksi bisu rutinitas kita melepaskan lelah. Kita masuk ke dunia virtual bukan untuk berburu piala kehormatan atau adu gengsi perangkat keras, melainkan untuk mencari ruang bernapas di mana keberadaan kita dihargai apa adanya. Di dalam rimba permainan peran daring multipemain seperti Final Fantasy 14, karakter berkostum zirah tebal atau jubah penyihir di layar bukan sekadar susunan piksel tiga dimensi yang bergerak kaku. Di balik setiap nama petualang itu ada detak jantung manusia nyata yang sedang mencari pelipur lara, tawa bersama kawan karib, atau sekadar ketenangan batin dari beban kenyataan yang kian menghimpit.

Kehangatan ikatan batin antarpemain tersebut mendadak menjelma menjadi pemandangan mengharukan yang membanjiri seluruh server permainan di berbagai penjuru dunia. Sebagaimana dicatat oleh jurnalis Harvey Randall dalam laporannya di PC Gamer, komunitas petualang Final Fantasy 14 serempak berkumpul menggelar malam penghormatan dan perenungan virtual menyusul kabar duka berpulangnya Eikichi Iwai pada usia lima puluh tujuh tahun. Bagi para penjelajah tanah Eorzea, sosok Iwai bukan sekadar musisi panggung biasa, melainkan pemetik bas legendaris dari The Primals, band rock resmi gubahan komposer Masayoshi Soken yang selama bertahun-tahun meniupkan roh musik pertempuran epik ke dalam game kesayangan mereka. Mulai dari pelataran kota pelabuhan Limsa Lominsa, lorong batu Ul'dah, hingga kota suci Ishgard, ribuan petualang duduk bersila membentuk lingkaran di sekeliling api unggun virtual, membunyikan instrumen kelas bard, dan menyalakan lentera cahaya tanpa henti selama berjam-jam sebagai wujud belasungkawa mendalam.

![Para pemain Final Fantasy 14 berkumpul menggelar malam keakraban virtual di pelataran kota Limsa Lominsa untuk menghormati mendiang pemetik bas Eikichi Iwai](https://cdn.mos.cms.futurecdn.net/fE9QpmpttoXK7UyGkBX2Kk-1920-80.jpg)

Pemandangan ribuan avatar yang hening meratapi kepergian seorang seniman di dalam dunia digital terasa begitu kontras dengan kondisi industri hiburan modern yang sedang sakit parah. Selama beberapa tahun belakangan, panggung industri video game global kian terasa hampa dan mekanis, dikuasai oleh para eksekutif berjas rapi yang hanya peduli pada grafik pertumbuhan laba kuartalan dan harga saham. Ratusan studio kreatif ditutup sepihak, ribuan pekerja kreatif dipecat tanpa ampun, dan karya-karya baru diperlakukan layaknya mesin kasir otomatis pemeras dompet lewat skema battle pass dan gacha yang melelahkan jiwa. Betapa seringnya kita menyaksikan kepedihan saat [arogansi studio yang mencampakkan wajah komunitas](/ketika-wajah-komunitas-game-dicampakkan-setelah-habis-manis-sepah) demi mengejar tren sesaat, atau bagaimana studio besar kalang kabut mengubah haluan proyek karena produk mahal mereka ditinggalkan pemain yang muak diperas.

Di tengah kegelapan kapitalisme industri itulah aksi spontan para pemain Final Fantasy 14 hadir laksana percikan lentera yang menghangatkan jiwa. Fenomena ini membuktikan bahwa sebuah karya permainan daring tidak akan pernah bisa bertahan hidup puluhan tahun hanya berkat kemegahan grafis atau agresivitas pemasaran. Nilai abadi sebuah game justru berakar pada jalinan persaudaraan organik antarmanusia di dalamnya, persis sebagaimana [kehangatan bermain bersama kawan tongkrongan](/bos-jackbox-bangga-dijuluki-friendslop-saat-game-triliunan-rupiah) yang selalu sanggup mengalahkan kemegahan game beranggaran triliunan rupiah yang dingin tanpa jiwa. Di pelataran Limsa Lominsa malam itu, tidak ada sekat pemisah antara pemain veteran berkasta tinggi dan petualang pemula yang baru menjejakkan kaki. Semua duduk bersila sejajar di depan api unggun, menyatukan denting petikan senar dawai virtual demi menghormati petikan bas seorang musisi yang petikan nadanya pernah menemani perjuangan mereka menundukkan naga langit.

Bagi kita para pemain game biasa yang saban hari bergulat dengan kerasnya hidup di dunia nyata, berkumpulnya ribuan petualang virtual ini menyisakan sebuah pengingat yang sangat menohok. Para petinggi korporasi game global boleh saja terus sibuk merancang formula cerdik untuk menguras saldo tabungan kita lewat deretan kosmetik digital mahal. Namun selama para pemain masih memiliki kepekaan rasa untuk duduk bersama, menyalakan lilin, dan menitikkan air mata bagi sesama manusia di balik layar monitor, jiwa sejati dari video game tidak akan pernah bisa mereka beli atau hancurkan.`
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
      markAsSeen(art.sourceUrl.trim());
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi 23:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================\n");
  return results;
}

// CLI Execution
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261111-2300.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Batch Execution Failed:", err);
      process.exit(1);
    });
}
