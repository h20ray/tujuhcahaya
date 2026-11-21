import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Sensor Jantung Smartwatch Sering Ngawur Bikin Warga Sehat Kena Serangan Panik Sendiri",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Smartwatch", "Gadget", "Kesehatan Digital", "Teknologi", "Gaya Hidup", "Kardiovaskular"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2024/05/21/1000152165.jpg",
    imageAlt: "Seorang pengguna memeriksa indikator angka detak jantung pada layar jam tangan pintar di pergelangan tangannya",
    sourceUrl: "https://www.antaranews.com/berita/5849091/seberapa-akurat-pengukuran-detak-jantung-di-smartwatch",
    excerpt: "Alih-alih membikin hidup lebih tenang, obsesi memantau denyut nadi di smartwatch justru memicu gelombang kardiofobia artifisial. Padahal lampu hijau sensor optik di pergelangan tangan sangat rentan terdistorsi oleh keringat dan goyangan lengan.",
    content: `Ada pemandangan menggelikan yang kini lumrah tersaji di berbagai kedai kopi dan ruang tunggu perkantoran ibu kota. Anda mungkin sedang asyik mengobrol santai dengan seorang kawan lama sambil menyeruput es kopi susu gula aren yang manisnya kelewatan. Tiba-tiba saja, lawan bicara Anda mendadak mematung, menatap nanar ke arah pergelangan tangan kirinya, lalu raut mukanya berubah pucat pasi seolah baru saja melihat hantu di siang bolong. Bukan karena ada kabar duka lewat pesan singkat, melainkan karena gelang silikon yang melingkar di tangannya baru saja bergetar hebat seraya menampilkan angka denyut nadi seratus tiga puluh kali per menit. Dalam hitungan detik, obrolan akrab buyar seketika dan suasana santai berganti menjadi sesi pemeriksaan darurat di mana sang kawan mulai sibuk memegang lehernya sendiri dengan napas memburu.

Pemandangan histeris semacam itu adalah potret telanjang dari mewabahnya sindrom kardiofobia digital di kalangan masyarakat perkotaan. Kita hidup di tengah masyarakat yang begitu terobsesi dengan angka-angka biometrik artifisial hingga rela melupakan sinyal alami yang dikirimkan oleh tubuhnya sendiri. Sebagaimana dicatat oleh jurnalis Raihan Fadilah dalam laporan Antara pekan ini, jam tangan pintar modern kini memang dijejali berbagai fitur pemantau kebugaran yang tampak sangat canggih di atas kertas. Namun di balik kilauan antarmuka grafisnya yang memukau, teknologi sensor yang tertanam di bagian punggung jam sesungguhnya memiliki keterbatasan fisik mendasar yang kerap disalahpahami oleh penggunanya sebagai vonis medis mutlak.

![Seorang pengguna memeriksa indikator angka detak jantung pada layar jam tangan pintar di pergelangan tangannya](https://img.antaranews.com/cache/800x533/2024/05/21/1000152165.jpg)

Sebagian besar perangkat wearable yang beredar di pasaran hari ini mengandalkan teknologi photoplethysmography (PPG). Mekanismenya sebetulnya cukup sederhana: sensor memancarkan cahaya lampu LED hijau menembus lapisan kulit pergelangan tangan, lalu fotodioda di sebelahnya akan mengukur seberapa banyak pantulan cahaya yang diserap oleh aliran darah di pembuluh darah mikroskopis. Masalahnya, pergelangan tangan manusia bukanlah tabung reaksi laboratorium yang steril dari gangguan eksternal. Dikutip dari studi dalam jurnal Medicine & Science in Sports & Exercise serta riset Journal of Medical Internet Research, akurasi pembacaan sensor PPG optik ini sangat mudah terdistorsi oleh variabel-variabel sepele. Keringat yang membasahi kulit saat Anda bergegas naik tangga, pigmen kulit, bulu lengan yang lebat, suhu udara ruangan berpendingin yang dingin, hingga posisi tali jam yang agak kendor saat Anda mengetik di keyboard sudah lebih dari cukup untuk membikin algoritma jam menghasilkan angka kalkulasi yang melompat liar.

Ironisnya, ketidaksempurnaan teknologi murah meriah ini justru berhasil menciptakan industri kecemasan baru yang sangat menguntungkan secara psikologis. Gejala ini sejalan dengan tren konsumerisme modern di mana masyarakat perkotaan rela merogoh kocek dalam-dalam demi [perangkat pelacak mandiri berharga selangit](/starlink-mini-2-bawa-baterai-mandiri-tapi-harganya-bikin-dompet) hanya demi membeli secuil ilusi kendali atas hidup mereka. Ketika jam tangan pintar memunculkan notifikasi lonjakan denyut jantung akibat sensor yang goyang terkena goncangan motor di jalan berlubang, sang pengguna langsung diserang kecemasan akut. Detak jantung yang awalnya normal mendadak benar-benar berdegup kencang murni akibat kepanikan psikologis yang dipicu oleh getaran arloji itu sendiri. Akibatnya, ruang praktik dokter spesialis kardiovaskular belakangan ini kian kerap didatangi oleh pemuda-pemudi usia dua puluhan tahun yang sebetulnya sehat bugar tetapi gemetaran sambil menyodorkan riwayat grafik aplikasi di layar HP mereka.

Para dokter dan pakar kardiologi di berbagai belahan dunia sejatinya sudah berulang kali menegaskan bahwa gelang pintar berharga sejutaan rupiah bukanlah mesin elektrokardiogram dua belas sadapan yang beroperasi di unit gawat darurat rumah sakit. Perangkat komersial tersebut dirancang sebatas instrumen taksiran gaya hidup untuk memandu intensitas olahraga santai, bukan alat diagnosis klinis yang punya legitimasi menentukan apakah Anda sedang mengalami serangan jantung koroner atau tidak. Menggunakan indikator jam tangan sebagai rujukan panik harian sama konyolnya dengan mempercayai ramalan cuaca aplikasi ponsel ketika di luar jendela rumah Anda matahari sedang bersinar terik benderang tanpa segumpal pun awan hitam.

Menyerahkan ketenangan jiwa dan pikiran kita pada seutas tali karet berperekat dan sepasang dioda lampu hijau yang gampang dikelabui oleh tetesan keringat adalah lelucon paling ironis dari peradaban serba canggih hari ini. Tubuh manusia dibekali sistem saraf dan insting jutaan tahun yang jauh lebih peka dalam memberi sinyal rasa lelah atau sakit ketimbang barisan kode algoritma pabrikan gadget. Jika setiap kali pergelangan tangan Anda bergetar dada Anda langsung berdegup histeris dan panik mencari rujukan rumah sakit terdekat, masalah terbesarnya barangkali bukan terletak pada bilik jantung Anda, melainkan pada kebiasaan kepala Anda yang terlalu gampang ditakut-takuti oleh seonggok mainan plastik berlayar sentuh.`
  },
  {
    title: "Spellogger Ledakkan Hutan Pakai Sihir Bukti Gamer Muak Disuruh Bertani Ala Pegawai Magang",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Spellogger", "Game Indie", "PC Gaming", "Steam", "Industri Game", "Budaya Gamer", "RPG"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/krsqiXHZ4dMMZ9GDYDTdwM-1920-80.jpg",
    imageAlt: "Aksi penyihir penebang kayu melontarkan gelombang energi magis dahsyat dalam permainan Spellogger",
    sourceUrl: "https://www.pcgamer.com/games/rpg/this-solo-dev-is-building-the-most-violent-cozy-farming-game-ever-made-and-lumberjacking-has-never-looked-cooler/",
    excerpt: "Di tengah kejenuhan massal terhadap game santai bertema perkebunan yang menuntut kerja rodi virtual, seorang pengembang solo asal Swedia meracik Spellogger. Sebuah RPG penebangan kayu penuh ledakan sihir yang menampar pakem membosankan genre cozy farming.",
    content: `Bagi jutaan pekerja kantoran yang setiap hari bergulat dengan tumpukan berkas dan omelan atasan, menyalakan komputer di kamar kos selepas waktu magrib semestinya menjadi ritual suci untuk melepas penat. Niat hatinya sederhana: mencari hiburan santai yang tidak menuntut keahlian menembak ala atlet esport profesional ataupun strategi perang rumit yang membikin kepala berdenyut. Maka meluncurlah mereka ke etalase toko digital Steam, mencari game dengan label santai atau cozy game yang menampilkan gambar sampul bernuansa warna pastel menenangkan. Namun apa yang kerap mereka temui di balik tampilan visual imut tersebut sesungguhnya adalah sebuah jebakan kerja rodi digital yang dirancang tanpa sedikit pun rasa belas kasihan.

Alih-alih merasa rileks, Anda justru dipaksa menjalani shift kerja kedua tanpa upah sepeser pun. Anda harus bangun pukul enam pagi waktu game demi menyiram puluhan petak tanaman lobak sebelum kehabisan stamina, membersihkan kotoran kandang ayam secara terjadwal, serta berkeliling desa demi mengemis percakapan dengan penduduk lokal agar bilah pertemanan tidak menyusut. Genre game simulasi santai yang awalnya dipopulerkan secara apik oleh Stardew Valley belakangan ini telah bermutasi menjadi pabrik kepenatan baru yang membosankan setengah mati. Para pengembang indie maupun korporasi besar tampak berlomba-lomba mendaur ulang formula serupa, memperlakukan pemain tak ubahnya seperti pegawai magang agrikultur yang diwajibkan menyetor target harian demi menjaga keharmonisan desa virtual.

Sebagaimana dicatat oleh jurnalis Lincoln Carpenter dalam laporannya di PC Gamer pekan ini, angin segar pendobrak kejenuhan itu akhirnya ditiupkan oleh seorang pengembang solo asal Swedia bernama Basti. Merasa muak dengan klise simulasi berkebun yang serba lamban dan penuh basa-basi, Basti memutuskan untuk meracik sebuah game aksi peran berperspektif orang pertama bertajuk Spellogger. Proyek unik ini secara lantang memproklamirkan diri sebagai game bertani paling rusuh dan bertenaga yang pernah dibuat di panggung industri game mandiri.

![Aksi penyihir penebang kayu melontarkan gelombang energi magis dahsyat dalam permainan Spellogger](https://cdn.mos.cms.futurecdn.net/krsqiXHZ4dMMZ9GDYDTdwM-1920-80.jpg)

Daya pikat Spellogger terletak pada keberaniannya menelanjangi kemunafikan genre simulasi santai dengan menyajikan konsep sihir penebangan kayu yang luar biasa brutal sekaligus menggelikan. Di game ini, Anda tidak akan disibukkan oleh urusan mengelus sapi perah, menakar pakan ternak, atau mengkhawatirkan musim dingin yang bakal membikin bibit tanaman Anda membusuk. Yang ada hanyalah hamparan hutan belantara tanpa batas tempat karakter Anda—seorang penebang kayu bertubuh kekar merangkap penyihir sakti—melancarkan berbagai jurus magis berdaya hancur tinggi untuk meratakan pepohonan. Anda bisa melempar kapak bermantra layaknya bumerang maut, menyemburkan petir berantai yang membikin deretan pohon pinus meledak berkeping-keping, hingga memanggil hujan meteor raksasa dari langit untuk membabat habis seisi lembah dalam sekejap mata. Tiap kali batang pohon tumbang, layar monitor akan memercikkan angka kerusakan fantastis bertuliskan OVERKILL layaknya Anda sedang menghajar bos monster di arena pertarungan aksi.

Keberanian kreator tunggal dalam menabrak pakem industri semacam ini adalah tamparan telak bagi tren produksi game modern yang kian penakut. Fenomena ini mengingatkan kita pada keberanian tim kreatif yang memilih [membeli kebebasan studio mandiri dari cengkeraman korporasi](/black-forest-games-beli-kebebasan-dari-embracer-bukti-tim-kecil) demi menyelamatkan integritas karya mereka dari cengkeraman para manajer investasi yang hanya peduli pada proyeksi laba kuartalan. Ketika penerbit-penerbit besar sibuk membanjiri pasar dengan ratusan judul klona simulasi berkebun yang seragam dan hambar, pengembang solo di kamar tidurnya justru membuktikan bahwa kesenangan bermain game sejatinya berakar pada kebebasan berbuat konyol tanpa beban aturan moralistik yang membelenggu.

Penebangan kayu bermodal badai meteor dalam Spellogger barangkali terdengar sangat ganjil dan aneh bagi mereka yang mengagungkan kelembutan simulasi hidup pedesaan. Namun bagi komunitas gamer yang sudah kepalang lelah disuruh lembur virtual membersihkan gulma dan menyirami wortel piksel setelah seharian diperas tenaganya di dunia nyata, game ini adalah obat penawar paling manjur. Terkadang, katarsis terbaik untuk memulihkan kewarasan pikiran setelah lelah bekerja bukanlah dengan memaksakan diri memanen kentang di depan layar monitor, melainkan dengan memegang kapak sihir raksasa dan meledakkan seluruh isi hutan sampai rata dengan tanah.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 15:00 WIB)");
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
  console.log(`🎉 Batch Publikasi 15:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================\n");
  return results;
}

// CLI Execution
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261112-1500.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Batch Execution Failed:", err);
      process.exit(1);
    });
}
