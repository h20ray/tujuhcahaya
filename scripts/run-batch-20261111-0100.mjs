import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Aplikasi Paint Kena Bug Berbahaya Saat Pengguna Cuma Mau Bikin Coretan Iseng",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Microsoft Paint", "Windows 11", "Keamanan Siber", "Bug Software", "Microsoft Store", "Sysadmin"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/AqUo3Hq3EQvEiWLchwWWjM-1920-80.jpg",
    imageAlt: "Tampilan aplikasi Microsoft Paint di layar monitor komputer Windows 11 yang mengalami masalah keamanan dan pembaruan sistem",
    sourceUrl: "https://www.pcgamer.com/software/windows/ms-has-messily-patched-a-microsoft-paint-security-vulnerability-but-the-update-still-isnt-showing-up-for-some/",
    excerpt: "Siapa sangka aplikasi legendaris Microsoft Paint yang selama puluhan tahun cuma dipakai untuk mencoret-coret iseng atau memotong tangkapan layar kini mendadak bikin para pakar keamanan siber garuk-garuk kepala. Celah keamanan berkode keparahan tinggi ditemukan bersarang di dalamnya, sementara proses penambalan lewat Microsoft Store justru berlangsung berantakan dan membuat banyak pengguna Windows tetap rentan tanpa menyadarinya.",
    content: `Bila Anda pernah merasakan zaman keemasan laboratorium komputer sekolah dasar di awal dekade dua ribuan, Anda pasti punya memori kolektif yang sama: guru sibuk menerangkan fungsi tombol di papan ketik, sementara murid di barisan belakang diam-diam membuka aplikasi Microsoft Paint. Menggunakan mouse bola yang sering macet kotorannya, kita berlomba menggambar pemandangan paling legendaris sepanjang masa, yakni dua segitiga gunung kembar dengan matahari tersenyum di celahnya, sawah berpetak-petak di bagian bawah, serta jalan aspal yang membelah lurus ke arah cakrawala. Program itu adalah simbol kepolosan jagat digital. Paint tidak pernah meminta nomor kartu kredit, tidak rakus memori RAM, dan yang paling penting, tidak pernah terpikirkan bakal menjadi pintu gerbang bagi peretas jahat untuk membobol sistem komputer kita.

Namun waktu terus bergulir, dan kepolosan itu resmi tamat. Sebagaimana dicatat dalam laporan peliputan PC Gamer dan temuan tim riset Threat Defence, Microsoft Paint baru saja mencetak sejarah baru yang bikin para praktisi teknologi geleng-geleng kepala: aplikasi gambar paling bersahaja tersebut kebobolan celah keamanan berkategori serius. Kerentanan yang awalnya diganjar skor keparahan 8,1 pada skala CVSS sebelum direvisi menjadi 7,0 ini memungkinkan pelaku kejahatan siber mengeksekusi kode berbahaya di komputer korban. Skenarionya terdengar seperti lelucon satir: seorang pengguna cukup membuka selembar file gambar hasil manipulasi peretas lewat Paint, dan seketika itu pula kontrol sistem operasi di balik layar bisa terancam disusupi tanpa perlu interaksi rumit.

![Tampilan aplikasi Microsoft Paint di layar monitor komputer Windows 11 yang mengalami masalah keamanan dan pembaruan sistem](https://cdn.mos.cms.futurecdn.net/AqUo3Hq3EQvEiWLchwWWjM-1920-80.jpg)

Celakanya, kekacauan yang sebenarnya justru baru dimulai saat Microsoft berusaha menambal lubang tersebut. Di sistem operasi Windows modern, Paint bukan lagi berkas biner mandiri yang tenang bersemayam di direktori sistem, melainkan aplikasi yang diperbarui lewat mekanisme Microsoft Store. Berdasarkan laporan International Cyber Digest dan investigasi Windows Latest, proses penyaluran tambalan keamanan versi 11.2609.401.0 berjalan sangat semrawut. Sejumlah pengguna yang sudah menyalakan fitur pembaruan otomatis ternyata tetap disuguhi versi kedaluwarsa yang rentan, sementara informasi teknis dari pihak pengembang saling bertentangan antara apakah ini serangan jaringan tanpa klik atau eksploitasi berkas lokal.

Bagi para sysadmin dan teknisi jaringan yang tiap hari menjaga stabilitas ruang data, situasi ini ibarat ketiban pulung di siang bolong. Tugas rutin mereka menjaga benteng korporasi dari ancaman ransomware dan kebocoran basis data kini mendadak bertambah runyam dengan kewajiban konyol: mengecek versi program gambar bawaan karyawan satu per satu. Di banyak lingkungan komputer kantor, akses pengguna ke toko aplikasi sengaja dimatikan demi alasan regulasi dan kepatuhan sistem internal. Akibatnya, karyawan biasa tidak bisa memperbarui Paint secara mandiri dan terpaksa memanggil staf IT hanya untuk memastikan aplikasi gambar sederhana mereka aman dipakai memotong tangkapan layar bukti transfer gaji.

Fenomena absurd ini adalah buah dari nafsu korporasi teknologi yang gemar merumitkan hal-hal sederhana demi mengejar kesan futuristik. Di masa lampau, berkas biner mspaint hanya berukuran beberapa ratus kilobita dan bekerja tanpa cela tanpa butuh sambungan internet maupun akun login. Namun para insinyur perangkat lunak modern merasa perlu menjejalkan berbagai pernak-pernik kekinian: mulai dari kanvas berlapis, integrasi komputasi awan, hingga tombol asisten kecerdasan buatan penghasil gambar otomatis. Ketika perkakas paling dasar dipaksa bertransformasi menjadi aplikasi bengkak yang bergantung pada jaringan luar, setiap baris kode baru yang disuntikkan otomatis menjadi sarang potensi celah baru. Kegemaran memoles tampilan luar sambil melupakan keandalan dasar ini persis seperti rencana jangka panjang saat [Microsoft bersiap merombak total mesin Windows](/ketika-microsoft-bersiap-rombak-total-mesin-windows-11-27h2-dan) demi mengejar kemewahan visual, sementara mekanisme distribusi tambalan aplikasi bawaannya sendiri masih kerap tersendat di lapangan.

Di tengah sengkarut ini, komunitas teknologi mulai mempertanyakan arah pengembangan sistem operasi modern. Apakah kita benar-benar membutuhkan aplikasi pemotong gambar yang terintegrasi dengan toko aplikasi daring, atau ini hanyalah taktik vendor untuk memaksakan ekosistem layanan berbayar mereka ke dalam alur kerja harian pengguna? Ketika utilitas dasar yang sudah terbukti stabil selama empat dekade dirombak sedemikian rupa hingga memicu celah keamanan serius, dalih modernisasi terasa lebih menyerupai kemunduran yang dibungkus antarmuka manis.

Kita tentu tidak menolak inovasi peranti lunak, tetapi ada kalanya kesederhanaan adalah bentuk perlindungan terbaik yang pernah diciptakan manusia. Ketika sebuah program yang fungsinya cuma buat menaruh coretan merah di dokumen PDF kini butuh panduan audit keamanan berbelit-belit lewat baris perintah PowerShell, dunia komputasi kita tampaknya sedang bergerak mundur dengan sangat percaya diri. Kalau besok lusa program Notepad atau kalkulator Windows juga mendadak butuh izin administrator dan pemantauan lalu lintas server cuma agar tidak disusupi peretas, mungkin sudah saatnya kita kembali mencatat pembukuan di kertas folio bergaris dan menggambar gunung di buku gambar sidu memakai krayon.`
  },
  {
    title: "Pre-Order GTA 6 Pecahkan Rekor Konsol Saat Gamer PC Tetap Disuruh Gigit Jari",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "GTA 6", "Grand Theft Auto", "PlayStation", "Xbox", "Industri Game", "PC Gaming", "Rockstar Games"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/XmgQM2EHqUL9LoTv3eSBMF-1920-80.jpg",
    imageAlt: "Poster promosi permainan Grand Theft Auto 6 yang memperlihatkan dua karakter protagonis berlatar pemandangan kota fiksi Vice City",
    sourceUrl: "https://www.pcgamer.com/games/grand-theft-auto/grand-theft-auto-6-is-the-most-pre-ordered-game-of-all-time-on-both-xbox-and-playstation/",
    excerpt: "Grand Theft Auto 6 resmi dinobatkan sebagai game paling banyak dipesan sepanjang masa di PlayStation Store dan Xbox Store dengan fasilitas unduhan awal sembilan hari lebih cepat. Namun di balik gegap gempita perayaan miliaran dolar tersebut, jutaan gamer PC kembali dipaksa menjadi warga kelas dua yang hanya bisa gigit jari tanpa kepastian tanggal rilis maupun jatah akses cloud gaming.",
    content: `Kalau ada satu kebiasaan unik dari komunitas pencinta game yang bikin orang awam geleng-geleng kepala, itu adalah tradisi memesan game di muka alias pre-order. Bayangkan, Anda rela menyerahkan uang tabungan senilai satu juta rupiah lebih untuk membeli sebuah produk digital yang wujud aslinya belum Anda pegang, belum terbukti bebas kutu perusak sistem, dan baru bisa dimainkan berbulan-bulan kemudian. Semua risiko itu rela ditelan mentah-mentah cuma demi satu hal: gengsi bisa menjadi orang pertama yang mengunduh dan pamer cuplikan permainan di linimasa media sosial.

Kini, histeria massal tersebut resmi mencapai puncaknya. Sebagaimana dicatat dalam laporan liputan PC Gamer, Sony dan Microsoft serempak mengumumkan bahwa Grand Theft Auto 6 telah memecahkan rekor sebagai judul paling banyak dipesan sepanjang sejarah PlayStation Store dan Microsoft Store. Saking membludaknya antrean digital para pemegang konsol, Sony sampai membuka keran pra-unduh sembilan hari lebih awal agar server jaringan mereka tidak meledak di hari peluncuran. Di atas panggung bursa saham, CEO Take-Two Strauss Zelnick membanggakan lonjakan angka pesanan ini sebagai pencapaian tanpa tanding, meski dengan lihai ia menolak membeberkan angka penjualan riil karena berdalih data mentahnya bisa berpotensi menyesatkan publik.

![Poster promosi permainan Grand Theft Auto 6 yang memperlihatkan dua karakter protagonis berlatar pemandangan kota fiksi Vice City](https://cdn.mos.cms.futurecdn.net/XmgQM2EHqUL9LoTv3eSBMF-1920-80.jpg)

Namun di balik pesta pora miliaran dolar para petinggi industri dan pemilik konsol generasi terbaru, ada kelompok besar yang kembali dipaksa menelan pil pahit: komunitas gamer PC. Seperti pola berulang yang sudah dihafal luar kepala sejak era GTA 5 dan Red Dead Redemption 2, Rockstar Games kembali menempatkan pengguna komputer sebagai warga kelas dua. Jangankan kepastian tanggal rilis versi PC, fasilitas Xbox Cloud Gaming yang biasanya bisa dinikmati lintas perangkat pun secara gamblang mengunci pintu bagi pemain PC. Matthew Bell selaku pejabat strategi Xbox mengonfirmasi bahwa GTA 6 tidak akan bisa dialirkan ke komputer pribadi melalui layanan komputasi awan mereka.

Siasat bisnis semacam ini jelas bukan kebetulan teknis, melainkan manuver komersial yang sangat dingin. Dengan mengunci rilis perdana khusus di PlayStation 5 dan Xbox Series X/S, penerbit raksasa ini memaksa para penggemar berat yang tak sabar untuk membeli konsol mahal beserta salinan game versi awal. Begitu siklus keuntungan konsol mulai melandai setahun atau dua tahun kemudian, barulah versi PC diluncurkan dengan janji grafis lebih tajam dan framerate terbuka lebar, memancing para pemain yang sama untuk merogoh dompet mereka dua kali. Taktik eksploitasi antusiasme pemain yang agresif demi mengeruk laba instan ini mengingatkan kita pada fenomena saat [industri game latah menjiplak demi meraup cuan cepat](/warhammer-survivors-latah-menjiplak-game-indie-demi-meraup-cuan), di mana kepuasan dan perlakuan setara bagi seluruh basis pemain kerap kali dikorbankan demi memenuhi target laporan keuangan kuartalan.

Bagi gamer di tongkrongan warkop yang sehari-hari harus menabung dari sisa uang makan untuk merakit komputer impian, perlakuan diskriminatif ini terasa sangat menjengkelkan. Pengguna PC yang rela merogoh belasan juta rupiah membeli kartu grafis dan prosesor mutakhir justru disuruh menonton dari kejauhan, sementara para pemilik konsol asyik memamerkan lencana pre-order mereka. Ironisnya, para pemesan awal di konsol pun sebetulnya sedang mempertaruhkan nasib mereka sendiri pada janji manis promosi korporasi, seolah lupa bahwa industri game modern kerap kali melempar produk mentah yang terbata-bata di hari pertama rilis.

Penerbit raksasa dan pemilik platform konsol tentu berhak merayakan rekor pesanan mereka yang melangit. Namun bagi kita yang memegang teguh akal sehat, menahan diri untuk tidak ikut-ikutan menyetor uang muka adalah bentuk perlawanan paling elegan terhadap arogansi korporasi penerbit. Membiarkan para pemilik modal saling pamer angka di atas kertas jauh lebih menyehatkan dompet daripada terburu-buru membeli janji manis yang belum tentu seindah video promosinya.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 01:00 WIB)");
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
  console.log(`🎉 Batch Publikasi 01:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261111-0100.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
