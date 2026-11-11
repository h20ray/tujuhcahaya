import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Studio Game Star Wars Memanggil Balik Tim yang Dirumahkan Demi Dipecat Lagi",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Bit Reactor", "Gamer Indonesia", "Industri Game", "Layoff", "PC Gaming", "Pekerja Game", "Star Wars"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/QzGk2ZJyUzdTRQXxUM2RhW-1920-80.png",
    imageAlt: "Konsep visual pertarungan taktis pasukan klon dalam semesta fiksi Star Wars garapan studio Bit Reactor",
    sourceUrl: "https://www.pcgamer.com/games/strategy/after-furloughing-its-developers-and-then-hiring-some-of-them-back-star-wars-zero-company-developer-has-laid-off-an-unspecified-number-of-staff/",
    excerpt: "Bit Reactor, studio pengembang game taktis Star Wars Zero Company, kembali memangkas pekerjanya setelah sebelumnya sempat merumahkan seluruh tim dan memanggil balik sebagian dari mereka. Permainan tarik-ulur nasib pekerja ini menjadi cermin getir betapa dinginnya manajemen industri game modern dalam memperlakukan manusia di balik layar.",
    content: `Kalau ada penghargaan khusus untuk manuver manajemen paling bikin sakit hati di industri hiburan tahun ini, studio game Bit Reactor pantas masuk nominasi papan atas. Bayangkan perasaan seorang pekerja kreatif yang sudah mencurahkan keringat bertahun-tahun merancang sebuah proyek, mendadak dirumahkan tanpa kejelasan gaji selama berbulan-bulan, lalu ditelepon kembali oleh bos kantor dengan janji manis bahwa badai keuangan sudah lewat. Namun selang beberapa pekan setelah Anda kembali duduk di depan monitor kerja dan bernapas lega, surat pemutusan hubungan kerja resmi melayang ke meja Anda.

Drama tarik-ulur yang menguras mental semacam ini bukan fiksi komedi gelap di serial televisi perkantoran. Sebagaimana dicatat dalam laporan PC Gamer pekan ini berdasarkan penelusuran media komunitas Star Wars Bespin Bulletin, studio Bit Reactor yang tengah mengembangkan game taktis Star Wars Zero Company resmi melakukan pemutusan hubungan kerja terhadap sejumlah pengembang intinya. Ironisnya, gelombang pemecatan ini terjadi tak lama setelah studio tersebut sempat merumahkan seluruh stafnya (*furlough*) dan kemudian memanggil kembali sebagian dari mereka untuk melanjutkan proyek.

Daftar korban pemangkasan ini mencakup figur-figur senior yang bukan kemarin sore berkecimpung di industri. Ryan Lopez, seorang penata lingkungan visual (*senior environment artist*) yang telah mendedikasikan waktu selama tiga setengah tahun untuk memoles dunia taktis Star Wars tersebut, mengonfirmasi di linimasa profesional LinkedIn bahwa perjalanannya di studio telah resmi berakhir setelah sebelumnya terkatung-katung dalam status dirumahkan selama tiga setengah bulan. Nasib serupa juga menimpa insinyur antarmuka pengguna Tyler Eichten serta analis penjamin mutu (*senior QA analyst*) Ryan Mosher, seorang veteran yang sempat mengabdi di Firaxis Games dan 1047 Games sebelum berlabuh ke Bit Reactor.

![Konsep visual pertarungan taktis pasukan klon dalam semesta fiksi Star Wars garapan studio Bit Reactor](https://cdn.mos.cms.futurecdn.net/QzGk2ZJyUzdTRQXxUM2RhW-1920-80.png)

Kabar ini menjadi pukulan telak yang kian mempertegas betapa rapuhnya ekosistem kerja di industri video game global saat ini. Nama besar waralaba Star Wars yang bergelimang royalti miliaran dolar dari lisensi Lucasfilm dan Disney ternyata sama sekali bukan jaminan rasa aman bagi para perajin kode dan seniman digital di balik layar. Fenomena dingin ini memperlihatkan pola serupa dengan nasib para pekerja kreatif yang kerap [dicampakkan korporasi setelah habis manis sepah dibuang](/ketika-wajah-komunitas-game-dicampakkan-setelah-habis-manis-sepah) tanpa sedikit pun rasa terima kasih saat proyek mendekati garis akhir atau saat investor mulai mengetatkan ikat pinggang.

Bagi para pemain di tanah air yang setiap hari menikmati keindahan grafis game, realitas di balik dapur produksi kerap luput dari sorotan. Kita sering terpukau melihat video cuplikan sinematik yang megah di panggung festival internasional, sementara gamer di rumah masih sibuk mengeluhkan [ukuran pembaruan game yang membengkak gila-gilaan](/ketika-update-nier-automata-membengkak-jadi-366-gb-dan-bikin-ssd) akibat manajemen proyek yang berantakan dan minim empati teknis. Jarang sekali publik menyadari bahwa di balik kemilau efek partikel dan animasi halus tembakan laser bluster tersebut, ada ratusan tenaga ahli yang tidur beralas matras kantor dan hidup dalam bayang-bayang ketakutan kehilangan nafkah esok hari.

Sikap tabah yang ditunjukkan Ryan Lopez dalam unggahan perpisahannya—yang mengaku tetap bangga atas apa yang telah mereka bangun bersama meski kenyataan ini terasa menyakitkan—justru kian mengiris hati siapa saja yang membacanya. Korporasi teknologi dan penerbit game raksasa seakan telah menormalisasi siklus bakar uang saat mencari pendanaan, lalu membuang manusia-manusia berbakat seperti baterai bekas sekali pakai ketika kalkulasi angka di lembar pembukuan triwulanan tidak memenuhi target dividen para pemegang saham.

Jika studio yang memegang lisensi waralaba fiksi ilmiah terbesar di galaksi saja bisa memperlakukan pekerjanya laksana pion catur murahan, bayangkan betapa lebih mengenaskannya nasib para pengembang indie skala kecil. Janji manis para petinggi industri tentang masa depan cerah video game kini terdengar bak bualan kosong di tongkrongan warkop. Menjadi pengembang game di era sekarang rupanya butuh ketabahan batin yang jauh melampaui kemampuan seorang kesatria Jedi menghadapi serbuan pasukan klon.`
  },
  {
    title: "Ketika Album Rock Jahanam Milik Black Horses Sukses Menyabet Piala AMI Awards",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["AMI Awards", "Black Horses", "Classic Rock", "Industri Musik", "Musik Indonesia", "Musisi Indie", "Rock Jahanam"],
    imageUrl: "https://cdn.bsinews.id/media/images/2026/11/BAJLgWsMut.jpeg?location=1&width=1200&height=674&quality=80&watermark=1",
    imageAlt: "Personel Black Horses memegang piala penghargaan Album Rock Terbaik di ajang AMI Awards",
    sourceUrl: "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBXcXNIN2FLX1JvVTd3UHdlbTNfckw4QmdLSEFxRFhTWm5YNE1DeGNaRG1SanI4cDZ5VkhRTGw2ejF3LVVLZWwxOGZFckJVaHRLRFRUZ1N5aXJKd3k2eWw4?oc=5",
    excerpt: "Kuartet classic rock ibu kota Black Horses sukses mengukir sejarah dengan membawa pulang trofi Album Rock Terbaik di ajang AMI Awards ke-29 lewat album Jahanam. Kemenangan distorsi kasar yang diproduseri John Paul Patton ini membuktikan bahwa energi rock murni tanah air masih berakar kuat, menolak tunduk pada rumus manis algoritma streaming pop.",
    content: `Ada pemandangan yang selalu terasa kontras nan menggemaskan tatkala anak-anak band rock independen harus melangkahkan sepatu bot belel mereka ke atas karpet merah ruangan berpendingin udara mewah. Di sekeliling mereka, para pesohor industri hiburan berbalut busana perancang kenamaan tersenyum anggun di depan lampu kilat kamera. Namun aroma harum ruangan ballroom hotel berbintang itu mendadak terbelah oleh kehadiran kuartet berambut gondrong yang auranya lebih akrab dengan hawa sumpek studio latihan sempit dan deru knalpot jalanan ibu kota.

Pemandangan segar itulah yang tersaji dalam perhelatan Anugerah Musik Indonesia (AMI) Awards ke-29 yang dihelat di Ciputra Artpreneur Jakarta pekan ini. Unit *classic rock* asal Jakarta, Black Horses, sukses mengukir sejarah manis dalam perjalanan karier mereka dengan menyabet piala untuk kategori bergengsi Album Rock Terbaik lewat karya studio ketiga mereka yang bertajuk *Jahanam*. Kemenangan band yang digawangi oleh Dimas Oscario pada vokal, Kevin Indriawan pada gitar, Lucky Azary pada bas, dan Julian Aditya pada drum ini menjadi kejutan menyenangkan sekaligus pengakuan tulus bagi denyut musik arus bawah.

Sebagaimana dicatat dalam laporan liputan musik nasional, album *Jahanam* yang dirilis di bawah bendera FireFly Records dan diproduseri langsung oleh John Paul Patton alias Coki dari Kelompok Penerbang Roket berhasil mengungguli para pesaing tangguh lainnya di kategori tersebut. Black Horses mampu menyisihkan nama-nama berkarakter kuat seperti Akbar Bagus Giox lewat album *ABG*, Sukses Lancar Rejeki dengan *Bisa Meledak*, unit veteran pop punk Pee Wee Gaskins lewat *Salute From Pee Wee Gaskins*, hingga grup cadas 510 lewat album *Spiritual*.

![Personel Black Horses memegang piala penghargaan Album Rock Terbaik di ajang AMI Awards](https://cdn.bsinews.id/media/images/2026/11/BAJLgWsMut.jpeg?location=1&width=1200&height=674&quality=80&watermark=1)

Kemenangan ini terasa sangat melegakan bagi para penikmat musik tanah air yang sudah jenuh dengan dominasi lagu-lagu seragam hasil racikan algoritma media sosial. Selama beberapa tahun terakhir, panggung penghargaan musik kerap menuai sorotan tajam karena dianggap terlalu kompromistis terhadap angka tontonan digital yang sering kali semu. Publik tentu masih ingat betapa janggalnya situasi ketika [lagu ciptaan pejabat kementerian memborong piala AMI Awards](/ketika-lagu-ciptaan-menteri-borong-piala-ami-awards-saat-musisi) di saat para pencipta lagu independen pontang-panting memikirkan tagihan listrik studio yang terus menumpuk.

Hadirnya album *Jahanam* sebagai pemenang seakan menjadi penawar dahaga yang membuktikan bahwa kurasi juri AMI Awards tahun ini masih memiliki telinga yang peka terhadap keringat dan nyawa bermusik. Sound rekaman yang disuguhkan Black Horses dalam album tersebut tidak berupaya memoles distorsi menjadi steril demi ramah telinga penonton televisi. Mereka membiarkan raungan gitar Gibson menabrak ketukan drum berbobot berat ala Led Zeppelin era 1970-an, dibalut lirik lugas berbahasa Indonesia yang memotret kepenatan mental anak muda di tengah kerasnya rimba perkotaan.

Semangat perlawanan estetika ini sejalan dengan fenomena positif di mana ekosistem musik alternatif tanah air kian mandiri mencari jalurnya sendiri. Kegigihan Black Horses di jalur rock klasik senada dengan kabar membanggakan saat [band metal asal daerah sukses menembus panggung KEXP](/ketika-band-metal-tulungagung-mengguncang-panggung-kexp-tanpa) di Amerika Serikat tanpa perlu mengemis restu produser mayor label di ibu kota. Keduanya menjadi bukti konkret bahwa karya yang jujur dan bertenaga akan selalu menemukan telinganya sendiri, tak peduli seberapa gencar pasar streaming membombardir telinga pendengar dengan musik pop saset instan.

Membawa pulang piala replika burung kuningan tentu tidak serta-merta membuat rekening tabungan anak-anak band rock langsung membengkak bak pengusaha tambang. Bayaran manggung di festival akhir pekan mungkin naik sedikit, tetapi sepulang dari panggung megah itu, mereka akan tetap kembali ke ruang studio berdebu untuk membetulkan kabel gitar yang berdengung. Setidaknya malam itu, trofi berkelas tersebut sempat singgah di tangan kawanan pembuat bising yang menolak tunduk pada keharusan memotong durasi lagu menjadi tiga puluh detik demi kepentingan konten video pendek.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 21:00 WIB)");
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261107-2100.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
