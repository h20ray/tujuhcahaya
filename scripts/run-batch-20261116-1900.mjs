import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ribuan Metalhead Padati Pantai Glagah Bukti Panggung Bising Tak Butuh Restu Jakarta",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Kulon Progo Metal Fest", "Wilujengan Underground", "Musik Metal", "Pantai Glagah", "Budaya Gigs", "Margaretha Nina"],
    imageUrl: "https://pophariini.com/wp-content/uploads/2026/11/KPMF_103-1200.webp",
    imageAlt: "Ratusan penonton berbaju hitam memadati area pertunjukan musik cadas di kawasan Pantai Glagah Kulon Progo",
    sourceUrl: "https://pophariini.com/bising-kota/kabupaten-metal-di-pinggir-pantai-selatan-perjalanan-wilujengan-underground-hingga-kulon-progo-metal-fest/",
    excerpt: "Ribuan pencinta musik cadas berkumpul di Pantai Glagah dalam Wilujengan Underground dan Kulon Progo Metal Fest. Bukti nyata subkultur pesisir selatan tetap berdaulat tanpa sponsor korporat.",
    content: `Di linimasa media sosial anak muda metropolitan, ritual menonton konser musik belakangan ini terasa lebih mirip ajang perlombaan gengsi sosial ketimbang ruang perayaan bebunyian. Orang-orang rela antre tiket daring berjam-jam, menguras tabungan demi selembar gelang akses festival seharga jutaan rupiah, lalu memajang foto gelang tersebut di pergelangan tangan seolah baru saja memenangkan lotre hidup. Konser musik arus utama tak ubahnya etalase swafoto di depan bilik sponsor korporat raksasa, lengkap dengan deretan stan makanan cepat saji berlisensi khusus dengan harga tiga kali lipat harga warung kelontong. Segala hal dirancang begitu higienis, penuh kalkulasi algoritma, dan dikawal ketat oleh protokol promotor bermodal puluhan miliar rupiah. Ruang keintiman bermusik yang jujur seolah lenyap tergilas tirani komersialisasi panggung ibu kota yang kian steril.

Namun atmosfer yang bertolak seratus delapan puluh derajat justru membuncah di bibir Samudra Hindia. Sebagaimana dicatat dalam laporan liputan budaya Pophariini awal pekan ini, kawasan pesisir Pantai Glagah di Kabupaten Kulon Progo mendadak berubah menjadi lautan manusia berkaus hitam. Ribuan penikmat musik ekstrem dari berbagai pelosok Jawa Tengah dan Daerah Istimewa Yogyakarta berkumpul memadati pasir pantai dalam helatan Wilujengan Underground edisi kedua, bersiap menyongsong agenda tahunan Kulon Progo Metal Fest. Pemandangan ini sungguh memikat nalar: dentuman distorsi gitar berkecepatan tinggi bersahut-sahutan dengan deburan ombak laut selatan yang bergulung kencang, sementara para metalhead melakukan moshing beringas beralaskan hamparan pasir pantai yang panas menyengat.

Hal paling memikat dari denyut "Kabupaten Metal" ini adalah persilangan kulturalnya yang begitu bersahaja dan membumi. Alih-alih silau meniru konsep festival impor yang kaku dan elitis, komunitas Phobia Community dan Black Castle yang membidani panggung ini justru membuka acara dengan tradisi wilujengan: sebuah ritual doa bersama memohon keselamatan dan berkah sembari menyantap nasi tumpeng bersama para sesepuh desa dan warga setempat. Tak ada karpet merah VIP berpendingin udara atau sekat pembatas besi berjarak puluhan meter yang mengisolasi band dari penontonnya. Di Pantai Glagah, batas antara panggung dan penonton lebur tanpa kepalsuan. Para vokalis band cadas menyeduh kopi saset di warung terpal yang sama dengan para pedagang es kelapa muda dan nelayan setempat yang baru menepikan perahu jaring.

![Ratusan penonton berbaju hitam memadati area pertunjukan musik cadas di kawasan Pantai Glagah Kulon Progo](https://pophariini.com/wp-content/uploads/2026/11/KPMF_103-1200.webp)

Kemandirian kolektif di pesisir Kulon Progo ini menghadirkan tamparan telak bagi industri hiburan arus utama. Di tengah situasi di mana [harga tiket konser kian mencekik dompet](/harga-tiket-konser-kian-tak-masuk-akal-mengapa-gig-intim) akibat monopoli promotor dan permainan calo daring, anak-anak muda Kulon Progo membuktikan bahwa pesta musik cadas dapat terselenggara bermodalkan urungan sukarela dan gotong royong warga. Mereka tidak pusing memikirkan ketiadaan sponsor aplikasi perbankan digital atau sokongan konglomerasi rokok. Hubungan mutualisme yang terjalin dengan pedagang lokal justru menciptakan perputaran ekonomi mikro yang nyata: warung makan warga laris manis, lapak parkir pemuda desa terisi penuh, dan warga sekitar tidak merasa terasing dari keriuhan yang terjadi di pekarangan rumah mereka sendiri.

Keberanian bersikap mandiri ini sekaligus menjadi penawar rasa muak atas fenomena [panggung festival raksasa yang kian melelahkan](/komodifikasi-konser-format-festival-raksasa-ketika-keintiman) yang kerap memperlakukan penonton tak lebih dari sekadar komoditas dalam laporan metrik pemasaran jenama. Bagi masyarakat pesisir selatan, festival musik bukanlah arena pamer gaya hidup konsumtif, melainkan ruang temu warga tempat pekerja bengkel, petani cabai, hingga buruh pabrik melepas penat hidup sejenak lewat keliaran sonik yang membebaskan jiwa.

Dunia musik tanah air mungkin masih sering silau memusatkan sorotan kamera ke panggung-panggung megah di pusat metropolitan Jakarta. Namun ketika sekelompok pemuda pesisir sanggup menggetarkan bibir pantai dengan raungan distorsi dan doa keselamatan dari sepiring nasi tumpeng, kita disadarkan pada satu kenyataan fundamental: nyawa musik perlawanan tidak pernah lahir dari ruang rapat para eksekutif pemasaran berjas rapi, melainkan dari sela deburan ombak dan kepulan debu tanah yang dipijak orang-orang yang berdaulat atas panggungnya sendiri.`
  },
  {
    title: "SteamOS Akhirnya Akur dengan Nvidia Tapi Gamer PC Jangan Keburu Girang",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["SteamOS", "Valve", "Nvidia", "PC Gaming", "Linux Gaming", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/RZ8a3C2bRtPfEBwCrN9W9j-1920-80.jpg",
    imageAlt: "Antarmuka sistem operasi SteamOS yang kini mulai memperluas dukungan bagi kartu grafis Nvidia di PC rakitan",
    sourceUrl: "https://www.pcgamer.com/hardware/steam-machines/the-latest-steamos-update-improves-support-on-nvidia-powered-pcs-makes-swapping-your-rig-to-the-os-less-painful/",
    excerpt: "Valve merilis pembaruan SteamOS 3.10.0 yang kian ramah terhadap kartu grafis Nvidia. Kabar segar bagi gamer yang muak dengan Windows, meski hijrah ke Linux tetap butuh nyali.",
    content: `Bagi siapa saja yang mendedikasikan sudut kamar tidurnya untuk merakit komputer gaming, ada satu ritual menyebalkan yang hampir pasti dilalui setiap beberapa pekan sekali: menyalakan komputer dengan niat tulus ingin bersantai memainkan satu atau dua babak game favorit, hanya untuk disambut oleh layar biru pembaruan paksa Windows yang tak kunjung usai. Belum cukup disiksa oleh proses restart yang lambat, sistem operasi kepunyaan Microsoft belakangan ini kian agresif menyusupkan iklan gimik kecerdasan buatan, fitur perekam aktivitas layar Recall yang mencurigakan, serta tumpukan aplikasi bawaan yang rakus memakan kapasitas memori RAM. Kita seolah diperlakukan seperti penyewa yang menumpang di komputer rakitan yang komponennya kita beli lunas dengan tetes keringat sendiri. Hasrat untuk mencampakkan Windows dan berpindah haluan ke ekosistem Linux sebenarnya sudah lama menggelora di dada banyak gamer PC. Namun begitu melirik kartu grafis di dalam casing komputer berlogo hijau Nvidia, impian merdeka tersebut seketika layu sebelum berkembang akibat momok kompatibilitas driver yang kerap berujung malapetaka layar hitam.

Angin segar yang berpotensi memutus kutukan panjang tersebut baru saja dihembuskan oleh Valve. Sebagaimana dicatat dalam laporan jurnalis James Bentley di PC Gamer awal pekan ini, perusahaan asuhan Gabe Newell itu resmi meluncurkan berkas pembaruan uji coba SteamOS versi 3.10.0. Fondasi sistem operasinya kini telah ditingkatkan ke kernel Linux 7.3, menghadirkan peningkatan performa krusial bagi perangkat keras grafis kubu merah maupun hijau. Bagi para pengguna kartu grafis Nvidia dengan arsitektur Turing ke atas, Valve akhirnya menyuntikkan dukungan penuh untuk fitur Mesh Shaders, menambal kecacatan rendering visual yang sempat merusak grafis game Shadow of the Tomb Raider, serta menjanjikan stabilitas komputasi yang jauh lebih waras saat dipasang di rig PC rakitan konvensional.

Peningkatan dukungan untuk kartu grafis Nvidia ini merupakan langkah politik teknologi yang sangat diperhitungkan oleh Valve. Selama ini, kesuksesan konsol genggam Steam Deck praktis berdiri kokoh di atas arsitektur prosesor kustom AMD yang memang memiliki reputasi driver sumber terbuka sangat ramah terhadap Linux. Sebaliknya, keengganan Nvidia membuka kode sumber driver grafis mereka telah menjadi duri dalam daging bagi komunitas open-source selama puluhan tahun. Sikap kaku kubu hijau ini bahkan pernah memicu amarah legendaris dari sang pencipta Linux Linus Torvalds di masa lalu. Keberhasilan teknisi Valve menjinakkan arsitektur GPU Nvidia di pembaruan teranyar ini membuktikan bahwa batas eksklusivitas ekosistem perangkat keras perlahan mulai luntur demi ambisi memperluas jangkauan sistem operasi mandiri mereka ke meja kerja jutaan gamer desktop.

![Antarmuka sistem operasi SteamOS yang kini mulai memperluas dukungan bagi kartu grafis Nvidia di PC rakitan](https://cdn.mos.cms.futurecdn.net/RZ8a3C2bRtPfEBwCrN9W9j-1920-80.jpg)

Kendati kabar ini terasa seperti hadiah manis dari surga, para penikmat game rakitan di tanah air sebaiknya tidak terburu-buru menghapus partisi penyimpanan Windows mereka malam ini juga. Kita tentu masih ingat bagaimana [kegagalan membasmi kutukan kompilasi shader](/kutukan-kompilasi-shader-di-pc-gaming-mengapa-game-ratusan-ribu) sempat membuat kartu grafis berharga belasan juta rupiah megap-megap menjalankan rilis game baru akibat lapisan penerjemah Proton yang harus bekerja pontang-panting. Di samping itu, kendati hari ini kita menyaksikan gelombang [penerbit raksasa yang rela sungkem ke SteamOS](/dulu-menghina-linux-sekarang-epic-games-malah-rela-sungkem-ke) demi mengamankan basis pemain konsol genggam, tembok tebal sistem anti-cheat level kernel pada game kompetitif populer seperti Valorant atau Apex Legends masih menjadi ganjalan besar yang mustahil ditembus di lingkungan Linux tanpa risiko pemblokiran akun permanen.

Menyaksikan SteamOS kian lihai merangkul GPU Nvidia adalah secercah harapan berharga bagi siapa saja yang muak disandera oleh monopoli perangkat lunak raksasa Redmond. Namun sebelum Anda nekat mengubah komputer kesayangan menjadi mesin bertenaga Linux seutuhnya, pastikan Anda siap secara mental menghadapi realitas lapangan: sebab tidak ada kepedihan yang lebih perih bagi seorang gamer selain mendapati dirinya menghabiskan malam minggu bukan untuk menembak monster bersama kawan tongkrongan, melainkan sibuk mengetik baris perintah terminal di forum Reddit hanya demi membuat mouse dan pengeras suara kembali bersuara normal.`
  }
];

async function runBatch() {
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
  console.log(`🎉 BATCH SELESAI: ${results.length} artikel berhasil diaudit & dipublikasikan.`);
  console.log("=================================================================");
  for (const res of results) {
    console.log(`- [${res.status.toUpperCase()}] ${res.slug} (Skor: ${res.score}) -> ${res.url}`);
  }
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261116-1900.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
