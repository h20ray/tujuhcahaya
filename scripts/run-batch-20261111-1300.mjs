import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Nonton Film 3D Disney Plus di Meta Quest Jadi Cara Termahal Bikin Leher Pegal",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Disney Plus", "Meta Quest", "Film 3D", "Virtual Reality", "Headset VR", "Gadget", "Teknologi Layar"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/05.-EN-US_Meta-3D.png?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Tampilan aplikasi Disney Plus pada headset realitas virtual Meta Quest yang kini menghadirkan katalog film 3D",
    sourceUrl: "https://www.theverge.com/tech/1031256/meta-quest-disney-plus-vr-3d-movies",
    excerpt: "Pembaruan aplikasi Disney Plus di headset realitas virtual Meta Quest resmi menghadirkan lebih dari 60 film berformat 3D lengkap dengan latar virtual tematik bioskop. Alih-alih menjadi revolusi sinematik masa depan, tontonan berbobot setengah kilogram di wajah ini justru mengingatkan kita pada repotnya mengorbankan kenyamanan leher hanya demi gimmick visual usang yang dulu sempat ditinggalkan industri bioskop.",
    content: `Ada satu kenikmatan sederhana yang selalu dijaga rapat-rapat oleh kaum pekerja setelah seharian memeras keringat di hadapan monitor kantor: merebahkan punggung di sofa ruang tamu, menyalakan televisi layar datar, dan membiarkan tubuh selonjoran santai tanpa beban apa pun yang menempel di kepala. Dalam posisi santai seperti itu, menonton film adalah medium pelepas penat yang paling murni. Kita bisa mengunyah camilan berminyak, menyeruput kopi saset yang mulai mendingin, atau menoleh ke samping untuk menertawakan adegan konyol bersama anggota keluarga. Namun bagi para petinggi raksasa teknologi di Silicon Valley, kenyamanan manusiawi semacam itu rupanya dianggap kurang futuristik dan membosankan. Mereka tampaknya tidak akan puas sampai berhasil memaksa setiap orang mengikatkan sebongkah perangkat komputasi seberat setengah kilogram tepat di depan rongga mata mereka.

Kekhawatiran itu kembali mengemuka menyusul kabar terbaru dari kolaborasi raksasa hiburan dan teknologi. Menurut laporan jurnalis Jay Peters di The Verge, platform Disney Plus resmi merilis pembaruan aplikasi untuk perangkat realitas virtual Meta Quest yang memboyong lebih dari enam puluh katalog film berformat 3D. Melalui aplikasi ini, para pelanggan kini dapat menyaksikan deretan judul populer seperti The Avengers hingga Black Panther dalam format dimensi ruang. Meta bahkan menambahkan fitur lingkungan visual tematik, memungkinkan penonton serasa berada di tengah gurun pasir Tatooine saat memutar Star Wars atau bersantai di lantai pabrik Scare Floor saat memutar Monsters Inc. Ambisi ini tidak berhenti di situ, karena aplikasi serupa rencananya akan ditanamkan pada kacamata pintar VR Glasses yang dijadwalkan meluncur pada musim semi 2027 lengkap dengan dukungan film berformat IMAX Enhanced dan katalog tambahan dari studio Lionsgate.

![Tampilan aplikasi Disney Plus pada headset realitas virtual Meta Quest yang kini menghadirkan katalog film 3D](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/05.-EN-US_Meta-3D.png?quality=90&strip=all&crop=0,0,100,100)

Janji sensasi bioskop megah di ruang tidur pribadi memang terdengar memikat jika Anda hanya membaca materi promosi humas selama lima menit. Namun siapa pun yang pernah menghabiskan waktu lebih dari tiga puluh menit mengenakan headset realitas virtual pasti mafhum dengan siksaan fisiknya. Menonton film aksi berdurasi hampir tiga jam dengan tali pengikat yang menekan tulang pipi, bantalan busa yang mulai lembap oleh keringat, dan lensa kaca yang rawan mengembun bukanlah hiburan santai, melainkan ujian ketahanan fisik bagi otot leher Anda. Industri hiburan tampaknya menderita amnesia selektif: format film tiga dimensi sejatinya sudah berkali-kali mati di bioskop konvensional dan pasar televisi rumahan justru karena penonton muak mengenakan kacamata tambahan yang merepotkan dan membuat mata lelah. Mengemas kembali teknologi usang tersebut ke dalam bodi headset seharga belasan juta rupiah terasa seperti memaksakan solusi mewah untuk masalah yang tidak pernah ada.

Problem komputasi spasial ini semakin runyam ketika kita membicarakan urusan daya tahan. Mayoritas headset mandiri di pasaran saat ini rata-rata hanya sanggup bertahan menyala sekitar dua hingga dua setengah jam sebelum baterainya minta diisi ulang. Artinya, jika Anda berniat menonton film aksi dengan durasi panjang, perangkat tersebut dijamin bakal mati mendadak tepat saat pahlawan super sedang bersiap melancarkan pukulan pamungkas. Kebiasaan memaksakan teknologi canggih tanpa diimbangi efisiensi daya yang matang ini adalah penyakit menahun industri digital, serupa dengan fenomena saat [kekhawatiran baterai cepat meleleh](/auto-sr-microsoft-hadir-di-handheld-xbox-ally-x-bikin-gamer) menghantui para pengguna konsol genggam, atau kasus klasik ketika [baterai yang mendadak habis digerogoti aplikasi siluman](/hp-menganggur-di-meja-tapi-baterai-menguap-digerogoti-aplikasi) akibat kegagalan pengembang merancang efisiensi sistem yang ramah pengguna. Menonton film sambil kepala tertambat kabel adaptor ke colokan dinding jelas merusak ilusi futuristik yang digembar-gemborkan.

Pada akhirnya, menonton film sejatinya adalah pengalaman sosial dan relaksasi yang tidak memerlukan sekat isolasi plastik di ruang tamu. Menatap pemandangan planet fiksi Tatooine dalam ilusi ruang memang terasa mengagumkan pada sepuluh menit awal, tetapi pesona visual itu akan cepat menguap begitu leher Anda mulai terasa kaku dan hidung Anda memerah karena terjepit bodi perangkat. Para insinyur perangkat lunak mungkin bisa menciptakan simulasi layar bioskop sebesar gedung sepuluh lantai di dalam lensa mata kita, namun mereka tetap tidak bisa menggantikan kenikmatan bersandar di sofa empuk sambil mengobrol santai tanpa perlu takut wajah terasa terpanggang baterai hangat.`
  },
  {
    title: "Bungie Putar Haluan Jadikan Marathon Game Roguelite Demi Hindari Kuburan Live Service",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Bungie", "Marathon", "Symbiosis", "Roguelite", "Live Service", "PlayStation", "PC Gaming"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/qsoUEKZJuZjDSsWKVnbSzh-1920-80.jpg",
    imageAlt: "Tangkapan layar cuplikan gameplay pembaruan Symbiosis game Marathon garapan Bungie yang memperkenalkan mode PvE",
    sourceUrl: "https://www.pcgamer.com/games/fps/bungie-drops-gameplay-trailer-for-marathons-co-op-pve-roguelite-mode-and-swanky-new-social-space/",
    excerpt: "Bungie resmi merilis cuplikan gameplay perdana untuk pembaruan besar Marathon bertajuk Symbiosis yang mengumumkan pergeseran radikal: menghadirkan mode permanen co-op PvE roguelite bernama Expedition dan ruang nongkrong Limbo. Manuver putar haluan dari formula murni PvP extraction shooter ini menjadi sinyal panik studio demi menghindari nasib tragis deretan proyek live service Sony yang berguguran di tengah jalan.",
    content: `Tidak ada yang lebih merusak suasana hati seorang gamer pekerja selain momen ketika niat hati ingin bersantai sepulang mencari nafkah, menyalakan komputer dengan harapan bisa tertawa lepas, lalu lima menit kemudian mendapati karakter virtualnya tersungkur tewas ditembak oleh bocah sekolah yang menghabiskan enam belas jam sehari melatih refleks bidikan mouse. Genre tembak-menembak berbasis extraction shooter yang sempat dielu-elukan sebagai masa depan industri game perlahan menjelma menjadi arena kerja paksa baru. Mekanik hukumannya yang kejam, di mana seluruh senjata dan perlengkapan mahal yang dikumpulkan berjam-jam bisa raib dalam sekejap mata akibat sergapan sniper yang bersembunyi di semak-semak, membuat komunitas pemain kasual berpikir seribu kali sebelum bersedia menginvestasikan waktu luang mereka yang berharga.

Keresahan massal itulah yang tampaknya akhirnya menyentil kesadaran petinggi studio di Bellevue. Sebagaimana dicatat oleh editor Andy Chalk dalam laporannya di PC Gamer, Bungie resmi memperlihatkan cuplikan gameplay mendalam untuk pembaruan besar bertajuk Symbiosis pada game Marathon. Alih-alih mempertahankan keangkuhan formula murni pertempuran antar-pemain, Bungie mengumumkan penambahan mode permanen baru bernama Expedition yang secara resmi dilabeli sebagai co-op PvE roguelite. Langkah ini didampingi oleh peluncuran ruang sosial ramah bernama Limbo yang dilengkapi area uji coba senjata tanpa ancaman diserang pemain lain, perluasan terowongan di peta Perimeter, perkenalan cangkang karakter baru bersenjata pedang bernama Bishop, serta uji coba mode Team Deathmatch. Sebagai pemanis, Bungie bahkan menjadwalkan pekan bermain gratis saat pembaruan ini meluncur pada 8 Desember mendatang dengan jaminan bahwa seluruh progres pemain akan tersimpan utuh jika mereka memutuskan membeli gamenya nanti.

![Tangkapan layar cuplikan gameplay pembaruan Symbiosis game Marathon garapan Bungie yang memperkenalkan mode PvE](https://cdn.mos.cms.futurecdn.net/qsoUEKZJuZjDSsWKVnbSzh-1920-80.jpg)

Keputusan Bungie membanting setir ke arah roguelite kooperatif jelas merupakan manuver darurat yang lahir dari insting bertahan hidup. Setelah dihajar gelombang pemutusan hubungan kerja karyawan yang menyakitkan dan desakan target finansial ketat dari Sony Interactive Entertainment, Bungie sadar betul bahwa mereka sedang berdiri di bibir jurang kehancuran reputasi. Pasar game live service modern sudah tidak lagi memiliki toleransi bagi proyek arogan yang menuntut komitmen harian pemain tanpa menawarkan rasa aman dan kenyamanan bermain bersama kawan. Ketakutan studio legendaris pencipta waralaba Halo ini sangat beralasan bila berkaca pada kenyataan pahit saat [Sony batalkan Fairgames bukti live service PlayStation berujung boncos](/sony-batalkan-fairgames-bukti-live-service-playstation-berujung) setelah sebelumnya membakar ratusan miliar rupiah pada kegagalan memalukan proyek Concord. Bungie jelas tidak ingin mengulang petaka serupa ketika [ambisi transmedia runtuh akibat game hambar](/bandai-namco-tutup-studio-unknown-9-bukti-ambisi-transmedia) yang membuat studio kompetitor terpaksa gulung tikar dalam hitungan bulan.

Bagi gamer biasa yang mencintai estetika fiksi ilmiah grafis cerah khas Marathon, pergeseran menuju mode roguelite bersama kawan tongkrongan adalah kabar yang sangat melegakan. Format bermain bersama menumpas musuh komputer sambil mengumpulkan modifikasi kemampuan secara bertahap menawarkan sensasi pencapaian yang jauh lebih sehat ketimbang dipaksa bersaing dengan para atlet esport profesional di server publik. Adanya ruang santai Limbo untuk sekadar memamerkan kostum karakter atau berbincang santai membuktikan bahwa sebuah judul game multipemain tetap membutuhkan jiwa sosial yang hangat, bukan sekadar medan pembantaian yang memicu naiknya tekanan darah. Keberanian Bungie mengakui kekeliruan konsep awal mereka adalah kabar baik yang patut dicermati secara kritis, sembari tetap mengawal apakah mode ini benar-benar didukung dengan konten mendalam atau sekadar umpan pancingan agar angka penjualan awal tidak terjun bebas.

Waktu yang akan membuktikan apakah perombakan besar ini sanggup memulihkan pamor Marathon dari bayang-bayang pesimisme komunitas. Menyajikan pekan coba gratis dan mode santai adalah taktik cerdas untuk mengetuk kembali pintu hati para pemain lama Destiny yang sempat kecewa dan patah arang. Setidaknya, Bungie kini telah memberikan satu pelajaran berharga bagi para eksekutif industri game yang kerap mabuk oleh tren monetisasi: bahwa sehebat apa pun nama besar pengembang dan semegah apa pun anggaran promosi yang digelontorkan, gamer menyalakan konsol dan komputer mereka demi mencari kesenangan batin, bukan untuk mendaftar menjadi korban perpeloncoan di server daring setiap malam.`
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
      markAsSeen(art.sourceUrl.trim());
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi 13:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261111-1300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
