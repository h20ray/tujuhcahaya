import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Komunitas Semarang Rawat Roh Koes Plus di Tugu Muda Saat Konser Jakarta Bikin Boncos",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Margaretha Nina", "Koes Plus", "Tugu Muda Semarang", "Tembang Kenangan", "Gigs Lokal", "Budaya Urban", "Industri Musik"],
    imageUrl: "https://sumaterapost.co/wp-content/uploads/2026/11/InCollage_20261112_060211277.jpg",
    imageAlt: "Komunitas musisi dan penggemar Koes Plus bersiap menggelar Parade Musik Tembang Kenangan di kawasan cagar budaya Tugu Muda Semarang",
    sourceUrl: "https://sumaterapost.co/parade-musik-koes-plus-dan-tembang-kenangan-merawat-nostalgia-di-tugu-muda-semarang/",
    excerpt: "Di tengah gempuran tren konser berbanderol jutaan rupiah yang memusat di ibu kota dan dominasi algoritma streaming instan, puluhan musisi komunitas di Semarang bersiap menggelar Parade Musik Koes Plus dan Tembang Kenangan di pelataran bersejarah Tugu Muda secara swadaya. Gerakan organik lintas generasi ini membuktikan bahwa musik legendaris tak butuh tiket festival selangit untuk tetap berdenyut di hati rakyat biasa.",
    content: `Bagi siapa saja yang gemar nongkrong di angkringan pinggir jalan Jawa Tengah sambil menyeruput jahe hangat, obrolan tentang musik hampir selalu berputar pada dua kutub yang sangat timpang. Di satu sisi, lini masa media sosial anak muda saban hari dijejali kabar perburuan tiket konser megah di Jakarta dengan harga setara biaya sewa indekos tiga bulan. Para promotor kota besar berlomba-lomba merancang festival panggung spektakuler berpagar besi tinggi, mematok tiket VIP berdigit fantastis, dan memaksa penonton daerah menabung mati-matian hanya demi melihat siluet penyanyi pujaan dari jarak lima puluh meter. Di sisi lain, bagi orang tua kita yang menghabiskan masa mudanya ditemani siaran radio pita kaset, musik sejatinya tidak pernah serumit itu. Musik adalah alasan sederhana untuk duduk melingkar di emperan, memetik gitar akustik lecet, dan menyanyikan bait-bait lirik yang hafal di luar kepala tanpa ada yang menagih gelang tanda masuk berbayar.

Kerinduan akan panggung musik yang merakyat dan lepas dari komersialisasi mencekik itulah yang kini dihidupkan kembali oleh para musisi komunitas di Jawa Tengah. Sebagaimana dicatat oleh jurnalis Christian Saputro dalam laporannya di Sumatera Post, sejumlah kelompok musik penggemar tembang lawas bersiap menggelar Parade Musik bertajuk Melestarikan Budaya Kesenian dengan Lagu Koes Plus dan Tembang Lama di Kartika Grand Bistro, kawasan Museum Mandala Bhakti, Tugu Muda, Semarang. Acara panggung yang dijadwalkan berlangsung pada Minggu, 15 November 2026 sejak sore hingga larut malam ini bakal mempertemukan sedikitnya tujuh kelompok dedikasi Koes Plus, mulai dari J Plus, Rajawali, Kiss Plus, X Plus, Jab'Plus, Dekade, hingga Markoes, ditemani sederet grup pelestari lagu lawas era delapan puluhan.

![Komunitas musisi dan penggemar Koes Plus bersiap menggelar Parade Musik Tembang Kenangan di kawasan cagar budaya Tugu Muda Semarang](https://sumaterapost.co/wp-content/uploads/2026/11/InCollage_20261112_060211277.jpg)

Prakarsa mandiri yang digerakkan oleh para pegiat seni lokal seperti Budi Prabowo ini menghadirkan tamparan elegan bagi industri musik arus utama. Selama bertahun-tahun, korporasi rekaman dan platform streaming kerap memandang lagu-lagu lawas tak ubahnya komoditas nostalgia yang hanya layak diperas ketika mereka kehabisan ide segar. Kita menyaksikan sendiri bagaimana promotor industri kerap menyajikan [paket nostalgia musisi lawas demi menghindari boncos](/paket-nostalgia-dewa-19-di-de-tjolomadoe-bukti-panggung-musik) secara berulang-ulang dengan harga tiket mencekik, alih-alih merawat ekosistem akar rumput yang tulus mencintai karya tersebut. Sebaliknya, parade di Tugu Muda ini lahir dari kesadaran organik bahwa karya abadi Koes Plus tidak boleh dibiarkan membeku sebagai artefak usang di rak pajangan, melainkan harus terus dimainkan dan ditiupkan ke telinga generasi berikutnya di ruang-ruang terbuka kota.

Menghidupkan nada-nada legendaris di kawasan cagar budaya Tugu Muda juga menghadirkan perlawanan simbolis terhadap sentralisasi hiburan yang kian arogan. Ketika sebagian besar [venue konser musik menumpuk di Jakarta](/venue-konser-musik-menumpuk-di-jakarta-saat-penonton-daerah-cuma) dan meninggalkan warga luar ibu kota sebagai penonton yang cuma bisa gigit jari di layar kaca, paguyuban musisi Semarang membuktikan bahwa daerah punya daya hidup sendiri untuk menggelar perayaan kultural yang bermakna. Di ruang publik terbuka ini, batas-batas kasta ekonomi runtuh dengan sendirinya. Seorang pensiunan guru bisa bernyanyi bersama pemuda belasan tahun yang baru pertama kali mendengar petikan bass khas Koes Bersaudara, tanpa harus terintimidasi oleh petugas keamanan bertampang garang atau pemeriksaan tas berlebihan ala festival komersial.

Lagu-lagu Koes Plus memang memiliki sihir kepolosan yang tak mampu dibeli oleh dana pemasaran korporasi. Liriknya sederhana, melodinya akrab, dan potret kehidupannya memotret nasib orang biasa, mulai dari manisnya cinta remaja desa hingga kerasnya terpaan angin laut para nelayan. Merawat nyala lagu-lagu itu di pusat kota Semarang bukan sekadar ajang kumpul nostalgia bagi bapak-bapak berkemeja batik, melainkan cara warga kota merawat kewarasan kolektif di tengah dunia modern yang makin bising dan individualistis.

Menyaksikan puluhan band komunitas rela patungan menyewa pelantang suara dan membetot senar gitar di Tugu Muda menghadirkan satu penutup yang menyejukkan hati. Industri hiburan modern boleh saja terus membombardir telinga kita dengan lagu-lagu viral berdurasi lima belas detik di algoritma media sosial. Namun selama obrolan warkop masih dihangatkan oleh bait "Kolam Susu" dan senyum guyub para musisi jalanan yang bernyanyi lepas di bawah langit malam Semarang, kita tahu musik sejati akan selalu menemukan rumahnya di hati rakyat biasa, bukan di saldo aplikasi dompet digital.`
  },
  {
    title: "CD Projekt Poles Suara Geralt Pakai AI Demi Merawat Martabat Aktor Korban Stroke",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "CD Projekt Red", "The Witcher 3", "Jacek Rozenek", "Kecerdasan Buatan", "Industri Game", "Voice Acting", "PC Gaming"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/5483afef25da50579eaecf7825f28270-1920-80.jpg",
    imageAlt: "Karakter Geralt of Rivia dalam The Witcher 3 yang suaranya direstorasi menggunakan bantuan kecerdasan buatan demi menghormati sang aktor orisinal",
    sourceUrl: "https://www.pcgamer.com/games/the-witcher/cd-projekt-used-ai-to-modify-the-voice-of-geralts-polish-actor-after-a-stroke-left-it-significantly-changed-this-was-a-special-case/",
    excerpt: "Alih-alih mendepak aktor senior Jacek Rozenek yang suaranya berubah drastis akibat serangan stroke, studio CD Projekt Red memilih menggandeng teknologi kecerdasan buatan untuk merestorasi vokal sang pemburu monster dalam ekspansi The Witcher 3. Langkah langka yang melibatkan izin penuh dan kompensasi layak bagi sang aktor ini menjadi bukti penyejuk bahwa teknologi sintesis vokal sejatinya bisa dimanfaatkan untuk memanusiakan pekerja seni, bukan sekadar memangkas ongkos studio.",
    content: `Bagi jutaan gamer yang pernah menghabiskan ratusan jam menunggangi kuda menjelajahi rawa-rawa Velen atau menyusuri pulau karang Skellige di The Witcher 3: Wild Hunt, suara Geralt of Rivia adalah separuh dari jiwa permainan itu sendiri. Suaranya yang serak, dingin, sinis, namun menyimpan kehangatan nurani saat menolong rakyat jelata, telah menempel kuat di telinga penggemar selama lebih dari satu dekade. Di dunia industri video game modern yang kejam dan serba transaksional, kita sudah terbiasa melihat penerbit raksasa dengan enteng mengganti pengisi suara legendaris cuma gara-gara sengketa bayaran beberapa sen atau perubahan selera sutradara. Karakter boleh abadi di layar monitor, tetapi para seniman di balik mikrofon kerap diperlakukan layaknya suku cadang komputer yang bisa dibongkar-pasang sesuka hati pemilik modal.

Maka ketika kabar mengenai kondisi kesehatan pengisi suara versi Polandia dari Geralt of Rivia mencuat, komunitas gamer sempat bersiap menyambut berita duka tentang pergantian pemain. Sebagaimana dicatat oleh jurnalis Joshua Wolens dalam laporannya di PC Gamer yang mengutip investigasi jurnalis Stephen Totilo dari Game File, pengisi suara veteran Jacek Rozenek mengalami musibah serangan stroke parah pada tahun 2019 yang sempat membuatnya lumpuh dan kehilangan kemampuan berbicara. Meski melalui terapi rehabilitasi panjang Rozenek akhirnya berhasil pulih dan bisa kembali bekerja, pita suaranya mengalami perubahan fisik permanen: nadanya menjadi jauh lebih berat, serak, dan bergetar, sehingga tak lagi cocok dengan alur cerita ekspansi anyar bertajuk Songs of the Past yang berlatar di tengah linimasa The Witcher 3 lawas.

![Karakter Geralt of Rivia dalam The Witcher 3 yang suaranya direstorasi menggunakan bantuan kecerdasan buatan demi menghormati sang aktor orisinal](https://cdn.mos.cms.futurecdn.net/5483afef25da50579eaecf7825f28270-1920-80.jpg)

Namun alih-alih memanfaatkan dalih medis itu untuk mendepak sang aktor dan menyewa talenta baru yang lebih murah, studio pengembang asal Polandia, CD Projekt Red, justru mengambil rute yang sangat tidak lazim. Dengan persetujuan dan keterlibatan aktif Rozenek, CD Projekt menggandeng perusahaan teknologi suara Respeecher untuk melatih model kecerdasan buatan khusus. Rekaman suara Rozenek masa kini dipoles dan diselaraskan secara teliti hingga karakter vokalnya persis seperti suara sang aktor dua belas tahun silam saat The Witcher 3 pertama kali diracik. Artis sintesis vokal Dmytro Vasylets menuturkan bahwa proses restorasi emosional ini memakan waktu puluhan jam demi menangkap spektrum amarah, tawa, dan desah kepedihan Geralt tanpa meninggalkan residu kecacatan audio bot yang kaku.

Kebijakan etis CD Projekt ini bagaikan oase di tengah panasnya polemik kecerdasan buatan yang tengah mengguncang industri kreatif global. Kita kerap membaca kabar muram di mana [bos korporasi game memuja AI demi mendepak pekerja](/bos-skydance-puji-ai-setinggi-langit-sementara-pengembang-game) dari ruang studio demi mempercantik margin laporan keuangan kuartalan. Pemanfaatan teknologi sintesis vokal tanpa izin juga sempat memicu pemogokan besar-besaran serikat pekerja aktor layar dan suara di Amerika Serikat yang khawatir wajah dan vokal mereka dijarah oleh algoritma korporat. Sentimen anti-AI di kalangan komunitas bahkan pernah begitu sengit hingga [pengembang game independen diboikot akibat sepuluh baris kode AI](/developer-big-walk-diboikot-juri-festival-game-cuma-gara-gara) yang sejatinya hanya dipakai sebagai alat bantu teknis sederhana.

Produser lokalisasi CD Projekt, Mikołaj Szwed, secara terbuka menegaskan bahwa restorasi suara Rozenek adalah kasus kemanusiaan yang sangat khusus dan bukan pintu masuk untuk mengotomatisasi pengisi suara lain. Studio tidak berencana menyentuh vokal Doug Cockle yang memerankan Geralt versi bahasa Inggris, apalagi mencomot rekaman suara aktor secara sepihak untuk proyek masa depan tanpa kompensasi. Di sini kecerdasan buatan diposisikan persis seperti kursi roda canggih atau alat bantu dengar berteknologi tinggi: sebuah instrumen restoratif yang memperpanjang martabat seniman manusia untuk terus berkarya, bukan mesin pemenggal lapangan kerja.

Bagi komunitas gamer yang sudah kenyang melihat industri kesayangannya diacak-acak oleh keserakahan korporat, langkah CD Projekt membuktikan bahwa kemajuan teknologi tidak selalu harus berujung pada penyingkiran manusia. Algoritma pembelajaran mesin memang bisa meniru intonasi dan frekuensi desah napas sang Witcher hingga mendekati sempurna. Namun keberanian untuk tetap memanggil aktor yang sedang berjuang melawan stroke ke bilik rekaman dan membayar haknya secara terhormat adalah keputusan bernurani yang tidak akan pernah bisa dirumuskan oleh barisan kode biner mana pun.`
  }
];

export async function runBatch() {
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
      markAsSeen(art.sourceUrl.trim());
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi 09:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================\n");
  return results;
}

// CLI Execution
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261112-0900.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Batch Execution Failed:", err);
      process.exit(1);
    });
}
