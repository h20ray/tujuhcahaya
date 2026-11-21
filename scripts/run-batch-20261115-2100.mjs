import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Lagu Rock Indie Morfem Masuk Film Timnas Bukti Kemenangan Milik Warga Tribun",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Morfem", "Jimi Multhazam", "Timnas Indonesia", "Soundtrack Film", "Musik Indie", "Margaretha Nina"],
    imageUrl: "https://cdn-jjmn.jawapos.com/images/4/2026/11/15/morfem-melalui-lagu-rayakan-pemenang-menjadi-bagian-dari-film-dokumenter-perjalanan-timnas-indonesia-the-longest-wait-dokjawapos-V6QLN.webp",
    imageAlt: "Grup musik indie rock Morfem tampil bertenaga di atas panggung dengan vokal Jimi Multhazam",
    sourceUrl: "https://pontianakpost.jawapos.com/entertainment/2611150043/lagu-rayakan-pemenang-milik-morfem-jadi-soundtrack-film-dokumenter-timnas-indonesia",
    excerpt: "Lagu Rayakan Pemenang milik band indie rock Morfem jadi musik latar dokumenter Timnas Indonesia. Bukti haru sepak bola lahir dari keringat tribun warga.",
    content: `Bagi siapa pun yang pernah berdesak-desakan di warung kopi perempatan gang saat tim nasional Indonesia bertanding, ada sebuah atmosfer ganjil yang tak akan pernah bisa dibeli dengan tiket VIP berpendingin ruangan. Di atas bangku plastik yang reot, di antara kepulan asap rokok kretek murahan dan aroma seduhan kopi tubruk, sekelompok orang yang saling tidak mengenal mendadak bisa berpelukan erat hanya gara-gara sebutir bola meluncur mulus melewati garis gawang lawan. Tidak ada basa-basi status sosial di sana; bos bengkel, tukang ojek pangkalan, hingga mahasiswa semester akhir yang skripsinya macet sama-sama meneteskan air mata haru saat menyaksikan lambang Garuda di dada para pemain berjuang mati-matian menahan gempuran musuh.

Maka ketika kabar mengenai penggarapan film dokumenter perjalanan perjuangan tim nasional mulai berembus ke ruang publik, kekhawatiran terbesar kita selalu bermuara pada satu hal: apakah narasi visual tersebut akan disulap menjadi tontonan kaku pesanan korporasi yang kehilangan detak nadinya di lapangan? Beruntung, keraguan tersebut seketika terpatahkan oleh sebuah keputusan artistik yang sangat menyegarkan. Sebagaimana dicatat dalam laporan Pontianak Post akhir pekan ini, lagu bertajuk "Rayakan Pemenang" karya kuartet indie rock legendaris asal Jakarta, Morfem, resmi diumumkan sebagai salah satu lagu latar utama untuk film dokumenter bertajuk The Longest Wait.

![Grup musik indie rock Morfem tampil bertenaga di atas panggung dengan vokal Jimi Multhazam](https://cdn-jjmn.jawapos.com/images/4/2026/11/15/morfem-melalui-lagu-rayakan-pemenang-menjadi-bagian-dari-film-dokumenter-perjalanan-timnas-indonesia-the-longest-wait-dokjawapos-V6QLN.webp)

Lagu ciptaan Jimi Multhazam bersama rekan-rekannya yang dirilis satu dekade silam itu bukan jenis musik pop manis bertempo lambat yang lazim mengisi tangga lagu radio komersial. Sebaliknya, nomor ini dipersenjatai deru distorsi gitar fuzz yang kasar, ketukan drum bertenaga tanpa polesan digital berlebihan, serta lirik lugas tanpa kepura-puraan. Memilih raungan musik bawah tanah ini untuk mengiringi rekaman air mata dan peluh para atlet Garuda adalah pilihan kuratorial yang terbilang berani sekaligus tepat sasaran.

Selama bertahun-tahun, proyek audiovisual berskala nasional di tanah air kerap terjebak kebiasaan buruk yang melelahkan nurani penonton. Setiap kali ada agenda besar yang menyinggung nama negara, panitia atau produser hampir selalu latah memesan aransemen orkestra simfoni megah dari komposer ternama atau membeli lisensi tembang pop mendayu-dayu yang dipoles autotune sedemikian rupa. Tujuannya jelas, ingin menghadirkan kesan agung bak upacara kenegaraan di istana. Namun di mata penonton biasa, pendekatan semacam itu kerap terasa dingin, steril, dan berjarak dengan kenyataan pahit di akar rumput.

Sepak bola Indonesia tidak pernah lahir dari karpet merah gedung konser mewah. Sepak bola kita adalah drama berdarah di lapangan rumput becek, antrean berjam-jam di loket tiket yang pengap, serta keberangkatan suporter menaiki bak truk terbuka demi mengawal klub kebanggaan. Ketika Morfem menyanyikan bait-bait tentang merayakan kemenangan bersama kawan sejawat tanpa perlu jumawa, mereka tidak sedang menjual mimpi puitis humas pemerintah. Mereka tengah memotret realitas warga biasa yang terbiasa babak belur dihajar kerasnya hidup, namun tetap menemukan secuil kebahagiaan murni di atas tribun stadion.

Keberanian tim produksi The Longest Wait menggandeng unit musik independen ini menjadi angin segar tersendiri di tengah iklim perfilman nasional yang kian tertekan formula pasar. Di masa ketika [film bioskop Indonesia kompak rilis hari Kamis](/film-bioskop-indonesia-kompak-rilis-hari-kamis-bukti-layar-perak) demi mengamankan kuota layar dari serbuan film luar, film dokumenter olahraga membutuhkan nyawa kultural yang otentik agar tidak bernasib seperti kompilasi pidato seremonial pejabat. Masuknya nomor fuzz rock Morfem ke layar lebar ini sekaligus menjadi sentilan halus di saat [kementerian pamer musisi indie tembus luar negeri](/kementerian-ekraf-pamer-musisi-indie-tembus-new-york-saat), sementara denyut nadi panggung musik akar rumput dan ruang-ruang kreasi alternatif di kota-kota satelit kerap dibiarkan hidup segan mati tak mau tanpa perlindungan nyata.

Suporter bola dan pendengar musik independen sejatinya adalah entitas kultural yang serupa: sama-sama militan, sama-sama terbiasa diabaikan para pengambil kebijakan, dan sama-sama mampu menciptakan pesta mandiri dari keterbatasan. Saat distorsi gitar Jimi Multhazam bersahut-sahutan dengan riuh nyanyian tribun di dalam bioskop nanti, penonton disadarkan bahwa rasa cinta pada timnas tidak butuh slogan-slogan kaku kementerian yang dibacakan di atas podium berukir.

Di warung kopi tempat gelas kaca bekas seduhan kopi tubruk mulai bertumpuk, kabar dipilihnya lagu Morfem ini disambut senyum simpul para penikmat sepak bola jalanan. Kita tentu berharap skuad Garuda terus mengukir prestasi gemilang hingga ke panggung dunia tanpa terbebani intrik politik para pengurus federasi. Namun andai hari esok kembali menghadirkan kekalahan pahit yang membuat dada sesak, kita tahu bahwa lagu perayaan ini akan tetap dinyanyikan di trotoar jalanan—sebab esensi kemenangan sejati suporter akar rumput adalah keteguhan hati untuk tetap saling merangkul, menyeduh kopi bersama, dan menolak patah arang di tengah dunia yang makin gemar memeras keringat rakyat kecil.`
  },
  {
    title: "Dune Awakening Lepas Jeratan Online Bukti Gamer Menang Melawan Server Manja",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Dune Awakening", "Funcom", "Game Survival", "PC Gaming", "Industri Game", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/BZPSyzyi8PwUy6nwAn4z6Y-1920-80.jpg",
    imageAlt: "Pemain bertahan hidup di padang pasir gurun Arrakis dalam game survival Dune Awakening",
    sourceUrl: "https://www.pcgamer.com/games/survival-crafting/former-survival-mmo-dune-awakening-can-now-be-played-without-requiring-an-internet-connection-at-any-point-as-its-much-requested-offline-mode-arrives/",
    excerpt: "Funcom resmi hadirkan mode offline penuh untuk Dune Awakening tanpa internet. Kemenangan akal sehat melawan tren game yang gemar menyandera pemain.",
    content: `Bagi siapa saja yang menghabiskan masa mudanya nongkrong di warnet atau merakit PC sendiri di pojok kamar tidur, tidak ada momen yang lebih menguras kesabaran selain menyaksikan layar monitor mendadak membeku di tengah permainan seru, lalu disusul kemunculan kotak dialog merah bertuliskan "Connection Lost to Server". Seluruh pencapaian membangun markas selama dua jam lenyap seketika, terlempar kembali ke desktop tanpa belas kasihan. Kita dipaksa menelan rasa jengkel hanya karena kabel internet mendadak tersendat beberapa detik, padahal saat itu kita sedang bermain sendirian tanpa ada satu pun pemain lain di sekitar karakter kita.

Maka kabar terbaru dari kancah game PC global akhir pekan ini terasa seperti embusan angin segar di tengah gurun pasir yang terik. Sebagaimana dicatat dalam laporan mendalam PC Gamer, pengembang kenamaan Funcom akhirnya mengumumkan perubahan haluan fundamental untuk proyek ambisius mereka, Dune: Awakening. Game aksi bertahan hidup bertema semesta fiksi ilmiah mahakarya Frank Herbert yang awalnya dipromosikan sebagai survival MMO selalu daring (*always-online*) tersebut kini resmi mendapatkan mode luring penuh (*offline mode*). Pihak pengembang memastikan bahwa pemain dapat memainkan seluruh konten petualangan, meracik markas, hingga membuat dan menghapus karakter tanpa perlu menyentuh sambungan internet sama sekali kapan pun.

![Pemain bertahan hidup di padang pasir gurun Arrakis dalam game survival Dune Awakening](https://cdn.mos.cms.futurecdn.net/BZPSyzyi8PwUy6nwAn4z6Y-1920-80.jpg)

Keputusan ini menjadi titik balik penting setelah gelombang protes deras dilayangkan oleh komunitas pemain sejak game ini pertama kali diperkenalkan. Para penggemar setia genre survival merasa jengah dengan paksaan koneksi internet permanen yang tidak relevan dengan esensi eksplorasi Arrakis.

Selama hampir satu dekade terakhir, para eksekutif industri game di seantero dunia tampak terjangkit penyakit akut: kecanduan melabeli setiap judul baru dengan embel-embel live-service dan kewajiban tersambung ke server pusat. Motivasinya sederhana dan sangat transparan, yakni demi mengendalikan dompet pemain lewat transaksi mikro kosmetik, musim pas tempur, serta mencegah pembajakan dengan cara yang merugikan pembeli sah. Di ruang rapat direksi, skema always-online dipuja bak rumus emas mencetak laba berkelanjutan tanpa henti.

Namun bagi pemain yang mengeluarkan uang ratusan ribu rupiah untuk membeli lisensi game, model semacam itu tak ubahnya perbudakan digital halus. Pembeli tidak lagi memiliki game tersebut secara berdaulat; mereka sekadar menyewa izin bermain sementara dari server penerbit. Begitu angka pemain harian menyusut dan biaya sewa server awan dianggap membebani neraca keuangan perusahaan, penerbit dengan dingin akan mematikan tombol sakelar, meninggalkan game tersebut menjadi tumpukan biner mati yang tak bisa lagi diakses.

Kecemasan komunitas gamer ini tentu bukan histeria tanpa dasar. Kita sudah terlalu sering menyaksikan tragedi saat [janji manis game survival berujung gulung tikar](/pioner-gulung-tikar-kurang-dari-setahun-bukti-janji-manis), membiarkan ribuan pendukung awal gigit jari meratapi saldo dompet yang menguap. Sikap keras kepala mempertahankan format daring juga terbukti menjadi bumerang komersial yang mengerikan, memaksa pengembang lain pontang-panting [menghindari kuburan live service](/bungie-putar-haluan-jadikan-marathon-game-roguelite-demi-hindari) demi menyelamatkan napas dapur perusahaan, persis seperti skandal [kegagalan proyek live service mahal](/sony-batalkan-fairgames-bukti-live-service-playstation-berujung) yang dibatalkan sepihak sebelum sempat dinikmati publik.

Di tongkrongan gamer tanah air yang saban hari berhadapan dengan kuota data sekarat dan kecepatan internet ISP lokal yang sering kembang kempis, kehadiran mode offline mandiri di Dune: Awakening adalah kemenangan moral akal sehat. Pemain berhak menikmati petualangan bertahan hidup di tengah badai pasir tanpa harus cemas kuota internet habis di tengah jalan atau waswas server ditutup lima tahun ke depan.

Di pos ronda warkop tempat anak-anak muda biasa berbagi trik game PC sembari menikmati gorengan hangat, kabar rilisnya mode offline ini disambut tepuk tangan riang. Kita disadarkan kembali bahwa ancaman paling menakutkan di gurun Arrakis sejatinya bukanlah cacing raksasa pemangsa manusia, melainkan nafsu serakah korporasi game yang gemar menyandera karya seni di balik tembok server manja. Kini, setelah pintu luring dibuka lebar, para petualang akhirnya bisa menaklukkan bukit pasir dengan tenang tanpa perlu lagi menyembah colokan router sepanjang malam.`
  }
];

async function runBatch() {
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
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 BATCH SELESAI: ${results.length} artikel berhasil diaudit & dipublikasikan.`);
  console.log("=================================================================");
  for (const r of results) {
    console.log(`- [${r.status.toUpperCase()}] ${r.slug} (Skor: ${r.score}) -> ${r.url}`);
  }
}

runBatch().catch(err => {
  console.error("FATAL BATCH ERROR:", err);
  process.exit(1);
});
