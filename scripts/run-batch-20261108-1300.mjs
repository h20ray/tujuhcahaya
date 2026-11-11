import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Lagu Cinta Lawas Yovie Widianto Terus Didaur Ulang Karena Industri Takut Rugi",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Margaretha Nina", "Yovie Widianto", "Andi Rianto", "LTZ", "Industri Musik", "Musik Indonesia", "Budaya Populer"],
    imageUrl: "https://cdn.medcom.id/dynamic/content/2026/11/08/1853422/jW9iuZxPlQ.jpeg?w=1024",
    imageAlt: "Kolaborasi komposer Yovie Widianto dan Andi Rianto bersama trio vokal LTZ dalam penggarapan lagu daur ulang",
    sourceUrl: "https://www.medcom.id/hiburan/musik/akWmRx3N-yovie-widianto-kembali-gandeng-ltz-bersama-andi-rianto-siapkan-versi-baru-lagu-aku-dirimu-dirinya",
    excerpt: "Kolaborasi Yovie Widianto, Andi Rianto, dan trio LTZ mendaur ulang lagu Aku, Dirimu, Dirinya kembali memperlihatkan zona nyaman industri musik tanah air. Alih-alih melahirkan karya baru yang menantang zaman, label rekaman lebih memilih memutar ulang nostalgia masa lalu demi jaminan angka streaming yang aman dari risiko rugi.",
    content: `Bagi siapa saja yang gemar nongkrong di kafe kekinian atau terjebak kemacetan sore sembari menyalakan radio mobil, daftar putar musik Indonesia belakangan ini kerap memicu sensasi déjà vu yang ganjil. Di sela-sela denting sendok kopi dan bising knalpot, telinga kita disuguhi progresi akor piano manis yang luar biasa akrab di kepala, diiringi vokal bertenaga penyanyi muda jebolan ajang pencarian bakat. 

Sejenak kita merasa sedang mendengarkan karya anyar yang segar. Namun begitu bait kedua mengalun, memori kolektif kita langsung melompat mundur dua puluh tahun ke masa sekolah menengah pertama: ini kan lagu cinta zaman kaset pita yang liriknya dulu kita tulis di buku harian untuk meratapi cinta monyet yang kandas. Alih-alih terkejut, kita hanya bisa tersenyum simpul sembari bergumam pelan di dalam hati bahwa mesin waktu industri pop kita rupanya belum beranjak ke mana-mana.

![Kolaborasi komposer Yovie Widianto dan Andi Rianto bersama trio vokal LTZ dalam penggarapan lagu daur ulang](https://cdn.medcom.id/dynamic/content/2026/11/08/1853422/jW9iuZxPlQ.jpeg?w=1024)

Sensasi kaset kusut yang terus diputar ulang tersebut kembali menemukan buktinya pada pekan ini. Sebagaimana dicatat dalam laporan Medcom.id dan pantauan rilisan musik digital, maestro pop Yovie Widianto kembali mengumumkan proyek kolaborasi terbarunya bersama trio vokal LTZ—yang digawangi tiga solois muda bersuara emas, Lyodra, Tiara Andini, dan Ziva Magnolya. Kali ini, mereka menggandeng komposer kondang Andi Rianto dan Magenta Orchestra untuk meramu ulang tembang balada legendaris bertajuk *Aku, Dirimu, Dirinya*.

Kabar ini tentu disambut sorak-sorai para penggemar fanatik di media sosial. Siapa yang bisa meragukan kepiawaian Andi Rianto dalam menenun aransemen orkestrasi megah, atau meragukan teknik modulasi nada tinggi milik Lyodra dan kawan-kawan yang sanggup meremukkan sanubari pendengar? Namun di balik kemilau produksi mahal tersebut, pola ini sesungguhnya bukan kejutan baru. Formula daur ulang serupa sudah dipraktikkan berulang kali lewat lagu *Menyesal*, berlanjut ke tembang *Apa Artinya Aku*, hingga proyek kolaborasi Andi Rianto bersama Rony Parulian dalam nomor *Salahi Aku*. Strategi memoles ulang katalog lama seakan telah menjadi resep pabrikan yang wajib dikeluarkan setiap kali label rekaman membutuhkan suntikan angka keterlibatan pasar.

Kecenderungan mendaur ulang karya lama memperlihatkan kontradiksi menggelikan di tengah ekosistem industri kreatif hari ini. Di satu sisi, para petinggi label rekaman dan promotor festival tidak pernah lelah berpidato di hadapan publik tentang betapa kayanya bakat musik generasi baru tanah air. Kita memiliki barisan vokalis muda dengan musikalitas luar biasa, artikulasi vokal kelas dunia, dan basis penggemar militan yang siap menggerakkan algoritma internet dalam hitungan menit.

Namun ketika tiba saatnya membiayai proses produksi di bilik rekaman, nyali para pemodal mendadak ciut. Mengorbitkan lagu orisinal dengan komposisi baru yang berani menabrak kelaziman selalu dianggap sebagai perjudian yang terlalu mahal. Mengapa harus mengambil risiko merugi jika mendaur ulang katalog emas tahun 2000-an sudah menjamin jutaan angka pemutaran di Spotify dan TikTok tanpa perlu memeras otak? 

Akibatnya, talenta vokal emas generasi muda justru direduksi fungsinya menjadi sekadar mesin penyegar katalog bagi maestro senior dan katalog korporasi. Generasi baru yang seharusnya diberi ruang seluas-luasnya untuk mendefinisikan keresahan, patah hati, dan bahasa cinta zaman mereka sendiri, malah dipaksa bernyanyi dengan kacamata nostalgia para pendengar paruh baya yang rindu masa remaja.

Bagi anak muda perkotaan yang sehari-hari dicekik kecemasan harga sewa tempat tinggal dan tekanan pekerjaan yang makin menuntut, ketergantungan industri pada nostalgia masa lalu ini terasa sangat kontras. Kita seolah-olah hidup dalam masyarakat yang enggan menatap masa depan karena terlalu nyaman berlindung di balik kejayaan masa silam. Fenomena ini terasa sangat relevan dengan dinamika kultur digital, sebagaimana [daur ulang lagu pop galau yang mendadak meledak lagi di linimasa](/ketika-lagu-galau-lawas-astrid-mendadak-jadi-pengiring-komedi) berkat video pendek lelucon warganet beberapa pekan terakhir.

Situasi tersebut kian mempertegas fakta bahwa di tengah [banjir rilisan serentak tiap akhir pekan](/ketika-seluruh-musisi-janjian-rilis-lagu-tiap-jumat-dan-telinga) yang menenggelamkan ribuan karya baru, industri musik arus utama justru makin kehilangan keberanian estetika. Para musisi independen di berbagai kota harus berdarah-darah mengumpulkan recehan gigs demi merilis album penuh bermuatan kritik sosial, sementara label raksasa tetap puas memetik dividen dari balada cinta segitiga yang ditulis seperempat abad silam.

Menikmati versi orkestrasi megah dari lagu *Aku, Dirimu, Dirinya* memang akan tetap terasa nikmat di telinga, terutama saat kita butuh pelarian manis sehabis lembur di kantor. Namun kebiasaan industri yang gemar menghangatkan sayur basi pada akhirnya menyisakan satu pertanyaan getir: dua puluh tahun dari sekarang, lagu apa yang bakal didaur ulang oleh anak cucu kita jika musisi generasi hari ini tidak pernah diberi panggung untuk menulis karya besarnya sendiri?`
  },
  {
    title: "Ketika Layar Rekap Kematian Path of Exile 2 Memaksa Gamer Mengakui Kesalahan Sendiri",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Path of Exile 2", "Grinding Gear Games", "Gamer Indonesia", "PC Gaming", "Game RPG", "Industri Game"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/DGA7LqKTtAjY5xuVxbZqUa-1920-80.jpg",
    imageAlt: "Tampilan pertarungan bos dan layar rekap kematian di game Path of Exile 2",
    sourceUrl: "https://www.pcgamer.com/games/rpg/path-of-exile-2s-game-director-thinks-a-death-recap-will-finally-allow-us-players-to-complain-about-the-right-things/",
    excerpt: "Selama satu dekade, kambing hitam paling populer di kalangan pemain action RPG saat karakternya mati mendadak adalah server lag atau hitbox curang. Kehadiran layar rekap kematian di Path of Exile 2 kini merampas alasan klise tersebut dan memaksa gamer menatap data pahit bahwa pertahanan karakternya memang keropos.",
    content: `Bagi siapa pun yang pernah menghabiskan malam di rental komputer atau bilik kamar kosan demi memainkan game action RPG bertempo cepat, repertoar sumpah serapah gamer saat karakternya mati mendadak barangkali sudah bisa dibukukan menjadi kamus tersendiri. Begitu bilah nyawa karakter yang tadinya penuh mendadak ludes dalam tempo sepersekian detik, reaksi spontan kita hampir selalu seragam di seluruh muka bumi: membanting mouse ke meja, melotot ke arah monitor, lalu menyalahkan kabel LAN, server yang dianggap tidak stabil, atau hitbox musuh yang dituding curang.

Kita selalu punya seribu satu pembelaan diri agar ego kita tetap utuh. Mustahil kesalahan itu datang dari kecerobohan kita sendiri; yang salah pastilah game developer yang tidak becus menyeimbangkan mekanik permainan. Kita selalu merasa karakter kita sudah berstatus dewa yang kebal dari segala macam bencana duniawi, sampai akhirnya sebuah proyektil nyasar dari luar layar meledakkan tubuh karakter kita berkeping-keping.

![Tampilan pertarungan bos dan layar rekap kematian di game Path of Exile 2](https://cdn.mos.cms.futurecdn.net/DGA7LqKTtAjY5xuVxbZqUa-1920-80.jpg)

Alasan klise yang telah mendarah daging selama lebih dari satu dekade tersebut kini resmi berada di ujung tanduk. Sebagaimana dicatat dalam laporan PC Gamer dari ajang ExileCon pekan ini, sutradara game Jonathan Rogers secara resmi mengonfirmasi kehadiran fitur death recap atau layar rekapitulasi kematian pada perilisan penuh *Path of Exile 2* yang dijadwalkan meluncur pada 11 Desember mendatang.

Pengumuman fitur idaman para gamer ini bahkan terjadi secara tak disengaja di atas panggung utama. Ketika perancang game Mark Roberts mendemonstrasikan konten baru di hadapan ribuan pasang mata penonton, karakternya mendadak tewas tersungkur. Alih-alih layar hitam hampa seperti di seri pendahulunya, layar komputer seketika menampilkan rincian angka mendalam mengenai jenis kerusakan terakhir yang diterima karakter: mulai dari pukulan fisik musuh, penetrasi elemen api, hingga serangan beruntun yang menguras habis ketahanan karakter. Jonathan Rogers mengakui bahwa tim Grinding Gear Games telah bekerja keras mematangkan fitur tersebut agar data yang ditampilkan akurat, meski ia berkelakar bahwa pelacakan kerusakan berkala (*damage over time*) masih terus mereka sempurnakan.

Kehadiran fitur rekap kematian ini menghadirkan ironi psikologis yang cukup getir bagi komunitas gamer modern. Selama bertahun-tahun, ketiadaan informasi transparan pascakematian menjadi benteng pertahanan terakhir bagi gengsi para pemain. Di fase akhir permainan (*endgame*), layar monitor kerap dipenuhi oleh puluhan monster, rentetan proyektil sihir, ledakan es, serta ribuan angka kalkulasi visual yang menutupi seluruh pandangan. Ketika karakter mati seketika, gamer dengan sangat nyaman bisa berteriak menuduh server mengalami penurunan performa secara sepihak.

Namun dengan dibukanya buku catatan medis digital di layar rekapitulasi, ilusi kehebatan pemain langsung dirontokkan tanpa ampun. Layar tersebut dengan dingin akan menunjukkan bahwa karakter Anda mati bukan karena konspirasi algoritma studio, melainkan karena Anda terlalu pelit menaikkan persentase ketahanan elemen (*elemental resistance*) atau terlalu sombong berdiri di atas kubangan racun bos. 

Studio game yang biasanya dicaci-maki karena dianggap terlalu kejam mendesain tingkat kesulitan, kini justru menyerahkan cermin besar ke wajah para pemainnya sendiri. Jonathan Rogers secara cerdik memahami bahwa cara terbaik meredam amukan warganet di forum Reddit bukanlah dengan menurunkan tingkat kesulitan game, melainkan dengan menyodorkan bukti forensik hitam di atas putih bahwa kematian karakter murni disebabkan oleh kecerobohan taktik pemain itu sendiri.

Bagi para pencinta game PC di Indonesia yang kerap mengorbankan waktu istirahat malam demi meracik susunan kemampuan karakter (*character build*) yang rumit, kejujuran mekanik semacam ini sesungguhnya adalah oase yang menyegarkan. Pendekatan berbasis transparansi data ini terasa sangat berbeda jika disandingkan dengan era keemasan [game RPG klasik dengan mekanisme eksplorasi manual](/ketika-game-dd-yang-dulu-suka-menghapus-windows-tiba-tiba-bangkit) di masa lampau yang sering kali menghukum pemain tanpa penjelasan logis apa pun.

Kendati demikian, data forensik kematian ini juga menjadi peringatan nyata bagi kesehatan mental para pemain. Mengulang [kondisi fisik pemain saat sendi jempol dipaksa push rank tanpa henti](/ketika-sendi-jempol-mulai-mogok-kerja-akibat-dipaksa-push-rank) demi mengejar progres permainan, obsesi menaklukkan ruang bawah tanah digital kerap membuat gamer lupa waktu. Ketika layar kematian berulang kali membuktikan kelemahan taktik kita, dorongan untuk terus mencoba dan mengorbankan jam tidur menjadi godaan yang sangat sulit dilawan.

Pada akhirnya, fitur rekap kematian di *Path of Exile 2* membuktikan satu kebenaran purba di jagat video game: musuh paling mematikan di arena pertarungan bukanlah monster raksasa atau iblis purba pemegang tombak api, melainkan rasa percaya diri kita yang terlalu tinggi tanpa didukung oleh perhitungan resistensi pertahanan yang matang. Selamat datang di era baru para gamer, era di mana Anda tidak bisa lagi menyalahkan kabel koneksi internet atas kebodohan taktik Anda sendiri.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 13:00 WIB)");
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

  // Tandai juga link google news bila ada
  const gnewsMedcom = "https://news.google.com/rss/articles/CBMi2gFBVV95cUxPVWQ5QVJLWWd4QjlRY0Qwd3lvanVlWGpqbWM5SXoybHllRF9tbmpzaGsyVThxRXFWaENKeXg4QklDVFFxWmtUdEQ4Ry13MEdaRHBxSUdUTjZOQ1FQTTV2azVCNjJsRkNDd2VseEdYYU1rOThVdDhZTjlUVF9WZ3V1dElQWV9HZmdNSEpjYWNRWHg2V0swc1Jqc1RBNFpWTGptUlcxcFlpa2g0ZHkzekpvc0ZZaEdyQTE1U3BtYUJONjRNYlE5bEdNMHgzWHJGQXI3U28zZ1FjajlKZw?oc=5";
  markAsSeen(gnewsMedcom);

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261108-1300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Run Error:", err);
    process.exit(1);
  });
}
