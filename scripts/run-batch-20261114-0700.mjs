import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Perunggu Boyong Piala AMI Awards tapi Maul Gerak Cepat Pamer Pencapaian di LinkedIn",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Perunggu", "AMI Awards 2026", "Musik Indonesia", "Budaya Urban", "Industri Musik", "Margaretha Nina"],
    imageUrl: "https://awsimages.detik.net.id/api/wm/2026/04/01/tiga-personel-perunggu-1775048805305_169.jpeg?wid=54&w=1200&v=1&t=jpeg",
    imageAlt: "Tiga personel grup musik rock Perunggu berpose santai mengenakan kemeja rapi ala pekerja korporat",
    sourceUrl: "https://www.detik.com/pop/music/d-8751553/perunggu-menang-ami-awards-maul-langsung-update-linkedin",
    excerpt: "Trio rock kantoran Perunggu sukses membawa pulang trofi AMI Awards ke-29 lewat album Pikiran Yang Matang. Bukannya pamer pesta hura-hura, sang vokalis Maul Ibrahim justru gerak cepat memperbarui profil profesional di LinkedIn.",
    content: `Bayangkan Anda adalah seorang pekerja kantoran di Jakarta yang usianya sudah menyentuh kepala tiga. Hari Senin sampai Jumat dihabiskan untuk menatap layar laptop, merevisi berkas presentasi atas perintah atasan, dan mengelus dada saat saldo rekening terpotong otomatis untuk cicilan rumah serta premi asuransi. Lalu di akhir pekan, alih-alih rebahan untuk mengistirahatkan pinggang yang mulai rawan encok, Anda malah memanggul gitar listrik ke atas panggung festival, berteriak di depan ribuan penonton, dan beberapa jam kemudian dipanggil naik ke atas panggung megah untuk menerima piala insan musik tertinggi di tanah air. Skenario absurd yang terdengar seperti khayalan pengantar tidur karyawan korporat itu baru saja menjadi kenyataan manis bagi trio rock asal ibu kota, Perunggu.

Sebagaimana dicatat dalam laporan Detikcom pekan ini, grup musik yang digawangi Maul Ibrahim, Ildo Hasman, dan Adam Adenan tersebut resmi menorehkan prestasi gemilang di ajang Anugerah Musik Indonesia alias AMI Awards ke-29. Lewat karya penuh kontemplasi bertajuk Pikiran Yang Matang, band yang kerap menjuluki diri mereka sendiri sebagai kelompok musik rock pulang ngantor ini berhasil membawa pulang trofi bergengsi. Namun kelucuan justru meledak beberapa saat setelah seremonial pembacaan pemenang usai. Di saat musisi rock pada umumnya bakal merayakan kemenangan dengan pesta pora sampai subuh atau mengunggah foto estetik berbalut filter hitam-putih di Instagram, Maul sang vokalis sekaligus gitaris justru bertindak sangat taktis ala pekerja kantoran teladan: ia langsung membuka ponsel pintarnya, masuk ke aplikasi LinkedIn, dan memperbarui riwayat pencapaian kariernya malam itu juga.

Aksi kilat memperbarui profil jejaring profesional tersebut sontak memantik gelak tawa para penggemar di media sosial, sekaligus menjadi antitesis paling segar terhadap mitos usang tentang gaya hidup musisi rock. Selama puluhan tahun, industri hiburan kita dicekoki bayangan klise bahwa anak band rock haruslah sosok urakan yang doyan mabuk-mabukan, tidur menjelang siang, dan alergi terhadap segala hal yang berbau tata krama korporat. Perunggu membongkar ilusi murahan itu dengan cara yang paling elegan. Mereka membuktikan bahwa musisi rock era sekarang tidak perlu pura-pura menjadi pemberontak jalanan jika kenyataan hidup mereka memang berakar dari bilik kantor bersekat dan perjuangan mengejar kereta komuter tepat waktu. Kontras jenaka ini terasa menyejukkan di tengah panggung penghargaan musik yang belakangan kerap terasa kaku dan elitis. Situasi ini mengingatkan kita pada momen saat [album rock garapan Black Horses menyabet piala AMI Awards](/ketika-album-rock-jahanam-milik-black-horses-sukses-menyabet), di mana karya yang lahir dari keringat komunitas akar rumput mampu mendobrak dominasi pop pabrikan yang seragam.

![Tiga personel grup musik rock Perunggu berpose santai mengenakan kemeja rapi ala pekerja korporat](https://awsimages.detik.net.id/api/wm/2026/04/01/tiga-personel-perunggu-1775048805305_169.jpeg?wid=54&w=1200&v=1&t=jpeg)

Keberhasilan Perunggu bukan semata-mata soal piala berlapis kuningan yang bakal dipajang di ruang tamu, melainkan perayaan atas kejujuran lirik yang memotret keresahan nyata kelas pekerja urban. Lagu-lagu mereka tidak bicara soal patah hati remaja belasan tahun yang mendramatisir penolakan cinta, melainkan tentang ketakutan menjadi tua tanpa tabungan yang cukup, kelelahan mental sepulang rapat evaluasi, dan kerinduan sederhana untuk bisa pulang ke rumah menemui keluarga dengan kepala tegak. Di tengah sengkarut industri pertunjukan tanah air, di mana para musisi sering kali harus berdarah-darah menghadapi [polemik pembagian royalti yang mencekik napas musisi independen](/afgan-borong-piala-ami-awards-saat-musisi-independen-menjerit), keputusan personel Perunggu untuk tetap mempertahankan pekerjaan tetap mereka di siang hari adalah strategi bertahan hidup yang sangat rasional. Mereka tidak perlu mengorbankan integritas artistik demi mengejar algoritma tren sesaat, karena periuk nasi di dapur sudah diamankan oleh slip gaji bulanan.

Di meja warung kopi tempat para pekerja kantoran melepas penat sembari menyeruput es teh manis, kabar kemenangan Perunggu disambut dengan senyum bangga yang tulus. Kita akhirnya punya bukti sahih bahwa seorang karyawan yang siangnya disuruh revisi berkas presentasi oleh bos ternyata malamnya bisa menyabet piala musisi terbaik nasional. Besok lusa, jika Anda melihat seorang rekan kerja mendadak memperbarui riwayat lisensi dan sertifikasi di LinkedIn dengan lampiran trofi AMI Awards, jangan buru-buru mengira itu hasil editan aplikasi peramban. Bisa jadi ia memang habis menaklukkan panggung musik ibu kota sebelum kembali duduk manis menatap lembar kerja Excel di meja kerjanya.`
  },
  {
    title: "Pearl Abyss Minta Maaf Soal Gambar AI tapi Diam-Diam Tambah Kecanduan Bot",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Crimson Desert", "Pearl Abyss", "Industri Game", "Kecerdasan Buatan", "PC Gaming", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/nLRUSe282Y7dBidATad2pm-1920-80.jpg",
    imageAlt: "Tangkapan layar karakter petualang Kliff bertarung di dunia fantasi Pywel dalam game Crimson Desert",
    sourceUrl: "https://www.pcgamer.com/software/ai/dont-like-ai-in-games-crimson-desert-studio-pearl-abyss-aint-care-its-expanding-ai-use-throughout-our-entire-development-pipeline/",
    excerpt: "Pengembang Crimson Desert, Pearl Abyss, sempat meminta maaf karena memasang materi promosi buatan AI art. Namun di hadapan para investor, sang bos studio justru blak-blakan bakal memperluas penggunaan bot kecerdasan buatan ke seluruh lini dapur produksi.",
    content: `Ada sebuah pola tingkah laku yang makin lazim kita jumpai di panggung industri video game modern, terutama saat para petinggi korporat mulai tertular demam tren kecerdasan buatan. Pola tersebut sangat sederhana sekaligus menyebalkan: ketika ketahuan berbuat salah di hadapan komunitas pemain, mereka buru-buru merilis surat permohonan maaf dengan nada penyesalan yang mendayu-dayu. Namun selang beberapa bulan kemudian di dalam ruangan tertutup bersama para pemegang saham, mereka justru dengan bangga memamerkan rencana untuk mengulangi perbuatan yang sama dalam skala yang jauh lebih masif. Bagi para gamer yang setiap malam nongkrong di depan monitor sembari mengamati sepak terjang penerbit game global, dagelan semacam ini sudah bukan lagi barang baru, melainkan sandiwara humas yang makin gampang ditebak ujungnya.

Sandiwara itulah yang kini dipertontonkan secara telanjang oleh Pearl Abyss, studio asal Korea Selatan yang tengah menggarap game petualangan dunia terbuka paling diantisipasi, Crimson Desert. Sebagaimana dicatat dalam laporan PC Gamer pekan ini, pengembang yang sohor lewat Black Desert tersebut baru saja menggelar paparan kinerja keuangan kuartalan di hadapan para pemodal. Menariknya, dalam sesi tanya jawab bisnis tersebut, CEO Pearl Abyss Heo Jin-young secara blak-blakan mengungkapkan komitmen studio untuk memperluas pemanfaatan kecerdasan buatan generatif ke seluruh rantai produksi permainan mereka. Padahal belum genap satu tahun berselang, studio yang sama sempat dihujani kritik pedas dari komunitas setelah ketahuan memajang materi promosi Crimson Desert yang diproduksi menggunakan peranti AI gambar. Kala itu, manajemen Pearl Abyss buru-buru menarik gambar tersebut dan merilis permohonan maaf resmi, sembari berjanji bakal lebih menghargai sentuhan tangan manusia dalam proses berkarya.

Nyatanya janji manis tersebut menguap seketika begitu kalkulator efisiensi biaya disodorkan ke atas meja rapat manajemen. Sang pimpinan studio tanpa ragu mengumumkan bahwa teknologi AI kini tidak cuma dipakai untuk menghasilkan gambar latar belakang murahan, melainkan mulai dibenamkan untuk merancang animasi gerak karakter, menciptakan aset grafis tiga dimensi, hingga menyusun baris kode pemrograman dasar. Alasan yang dijual ke telinga investor tentu terdengar sangat memikat: memangkas anggaran produksi yang membengkak dan mempercepat jadwal rilis game agar tidak terus-menerus tertunda. Namun bagi pemain yang sudah menaruh harapan besar terhadap Crimson Desert, manuver ini terasa seperti pukulan telak yang merusak optimisme. Padahal sebelumnya, proyek ini sempat banjir pujian dan menuai [ekspektasi tinggi para gamer saat Crimson Desert dinobatkan sebagai game PC paling dinanti](/crimson-desert-sabet-game-pc-terbaik-bukti-pemain-haus) karena menjanjikan petualangan laga murni pemain tunggal tanpa racun monetisasi gacha.

![Tangkapan layar karakter petualang Kliff bertarung di dunia fantasi Pywel dalam game Crimson Desert](https://cdn.mos.cms.futurecdn.net/nLRUSe282Y7dBidATad2pm-1920-80.jpg)

Sikap keras kepala manajemen Pearl Abyss mencerminkan penyakit laten para petinggi industri hiburan modern yang lebih takut dianggap ketinggalan zaman oleh pasar modal ketimbang menjaga kualitas jiwa sebuah karya seni. Di atas kertas grafik presentasi bisnis, menggantikan seniman manusia dan animator berpengalaman dengan serangkaian algoritma generatif memang terlihat seperti langkah cerdas untuk menghemat kas operasional. Namun para bos studio sering kali lupa bahwa keindahan sebuah dunia fantasi seperti tanah Pywel di Crimson Desert lahir dari ketelitian mata manusia, rasa lelah para perancang yang memikirkan setiap sudut arsitektur kastel, dan dedikasi animator yang menguji luwesnya kibasan pedang berulang kali di komputer kerja mereka. Ketika seluruh proses artistik itu dialihdayakan ke serangkaian prompt bot otomatis, hasil akhirnya hampir selalu terasa steril, hambar, dan kehilangan sentuhan emosi nyata. Kegandrungan membabi buta terhadap mesin pintar ini sejalan dengan [kebiasaan petinggi industri yang membanggakan teknologi otomatisasi di tengah pemecatan massal](/bos-xbox-rayakan-ultah-pamer-mesin-ai-saat-ribuan-developer-habis), di mana keringat para pekerja kreatif disingkirkan begitu saja demi menyenangkan para pialang saham yang bahkan tidak pernah memainkan game tersebut sampai tamat.

Di warung kopi tempat para pemain PC berdiskusi sembari memandangi spesifikasi kartu grafis terbaru mereka, sandiwara permohonan maaf Pearl Abyss kini cuma menjadi lelucon satir penutup obrolan. Kita diingatkan kembali bahwa surat penyesalan dari korporasi game beranggaran triliunan rupiah tidak ubahnya janji manis kekasih yang tertangkap basah berselingkuh: di bibir berucap sumpah setia tak akan mengulangi perbuatannya, tetapi di belakang punggung sudah menyiapkan aplikasi kencan yang baru. Jika besok lusa Crimson Desert akhirnya meluncur ke pasaran dan kita menjumpai karakter NPC yang bertingkah aneh atau detail bangunan yang tampak janggal seperti gambar halusinasi bot, kita tidak perlu repot-repot mengirimkan laporan bug ke forum pengembang. Cukup buka lembar laporan keuangan mereka, dan kita akan langsung paham siapa yang sebenarnya sedang bermain-main dengan uang dan kesabaran kita.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 07:00 WIB)");
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
  console.log(`🎉 Batch 07:00 selesai! Total artikel terbit: ${results.length}`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261114-0700.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Batch run failed:", err);
      process.exit(1);
    });
}
