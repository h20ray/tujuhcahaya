import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Claude Code Bocorkan Ribuan Kunci Rahasia di GitHub Saat Developer Terlena Asisten AI",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["AI Coding", "Anthropic", "Claude Code", "Elang Elano", "GitHub", "Keamanan Digital", "Kebocoran Data"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2026/11/claude-github-leaks-1152x648.jpg",
    imageAlt: "Ilustrasi logo peranti lunak Claude Code dari Anthropic dan ancaman kebocoran data sensitif pada repositori GitHub",
    sourceUrl: "https://arstechnica.com/ai/2026/11/claude-code-settings-files-expose-thousands-of-secrets-on-github/",
    excerpt: "Riset keamanan menemukan ribuan kunci API, kata sandi basis data, hingga kredensial cloud bocor ke repositori publik GitHub akibat fitur izin otomatis di Claude Code. Kecerobohan pengembang yang enggan membaca dialog konfirmasi membuktikan asisten AI justru bisa jadi pintu masuk pembobolan sistem paling konyol.",
    content: `Bagi anak-anak kantor yang saban hari bergelut di depan terminal konsol hitam, kehadiran asisten coding berbasis kecerdasan buatan terasa seperti mukjizat dari langit. Kalau dulu kita harus menghabiskan waktu berjam-jam memelototi dokumentasi teknis atau tersesat di forum tanya-jawab Stack Overflow cuma demi mencari sintaks bash script yang keliru, sekarang semuanya terasa gampang. Cukup ketik perintah dengan bahasa santai layaknya menyuruh anak magang di warung kopi, lalu asisten pintar itu langsung mengeksekusi instruksi perbaikan sistem secara kilat. Kita merasa seperti peretas jenius di film Hollywood yang bisa mengendalikan infrastruktur raksasa hanya dengan sesekali menekan tombol enter sambil menyeruput kopi saset.

Namun rasa percaya diri yang kelewat tinggi terhadap keajaiban bot cerdas ini baru saja meledak menjadi mimpi buruk keamanan siber yang memalukan. Sebagaimana dicatat dalam laporan investigasi Ars Technica bersama firma riset keamanan Apiiro pekan ini, peranti lunak asisten baris perintah Claude Code besutan Anthropic kedapatan mengumbar ribuan data rahasia ke repositori publik GitHub. Bukan karena server mereka dibobol sindikat peretas Rusia berdarah dingin, melainkan murni akibat kelalaian fitur izin otomatis dan tabiat malas para programmer yang terbiasa mengeklik setuju tanpa membaca peringatan di layar.

Biang kerok dari skandal kebocoran ini berpangkal pada dialog persetujuan terminal bernama "Yes, and don't ask again". Fitur yang sejatinya dirancang untuk mempermudah hidup pengguna agar tidak melulu diganggu jendela pop-up perizinan tiap kali Claude Code menjalankan perintah sistem, rupanya menyimpan jebakan maut. Setiap kali pengguna memilih opsi tersebut saat mengeksekusi perintah yang memuat kredensial penting—seperti token API, kata sandi basis data produksi, kunci akses Amazon Web Services, hingga kunci privat SSH—sistem Claude Code secara lugu mencatat seluruh baris perintah itu dalam bentuk teks polos (plain text) ke dalam berkas konfigurasi lokal bernama settings.local.json di dalam direktori proyek.

Petaka kian sempurna karena Anthropic hanya mencoba mengamankan berkas tersebut dengan mendaftarkannya pada konfigurasi pengabaian global mesin lokal pengembang. Begitu folder proyek tersebut dipindahkan, dikloning ke komputer lain, atau diunggah ke repositori GitHub oleh tim yang tidak menyetel aturan pengabaian identik, berkas berisi kumpulan kunci brankas digital itu ikut terdorong bebas ke jagat maya. Riset Apiiro membuktikan ada lebih dari dua ribu lima ratus kunci rahasia unik yang tercecer di hampir dua ribu repositori terbuka milik puluhan korporasi ternama. Ironisnya lagi, peranti pemindai keamanan populer semacam Gitleaks dan TruffleHog sempat kecolongan mendeteksi kebocoran ini karena format tokennya terselip rapi di antara baris perintah JSON lokal.

![Ilustrasi logo peranti lunak Claude Code dari Anthropic dan ancaman kebocoran data sensitif pada repositori GitHub](https://cdn.arstechnica.net/wp-content/uploads/2026/11/claude-github-leaks-1152x648.jpg)

Bagi para sysadmin kawakan yang terbiasa begadang di ruang server, pemandangan developer teledor semacam ini adalah santapan lezat untuk bahan tertawaan getir di tongkrongan warkop. Kita hidup di masa aneh ketika perusahaan rela menggelontorkan ratusan juta rupiah untuk menyewa model bahasa cerdas tercanggih, tetapi masih luput menerapkan kebiasaan dasar manajemen sandi yang diajarkan pada siswa sekolah menengah. Fenomena latah kecerdasan buatan ini setali tiga uang dengan [ambisi korporasi teknologi yang gemar memaksakan fitur AI di aplikasi kreatif](/apple-patok-tarif-ai-delapan-ratus-ribu-di-logic-pro-saat-janji). Industri sibuk membujuk publik bahwa mesin otomatis bisa menggantikan logika manusia, padahal tanpa pemahaman fondasi keamanan yang disiplin, bot coding justru bertindak layaknya satpam ceroboh yang menggantung kunci pintu utama di pagar luar kantor.

Kebocoran massal ini menjadi tamparan keras bagi para pengembang peranti lunak yang terlalu mendewakan kecepatan instan. Keasyikan mengandalkan bot pintar untuk menulis skrip otomatis sering kali membuat akal sehat kritis tumpul seketika. Banyak pekerja teknologi modern lupa bahwa kecerdasan buatan tidak punya kesadaran etis maupun insting perlindungan diri saat disuruh mengetik perintah terminal. Sikap abai semacam ini mengingatkan kita pada [kecerobohan pengembang yang memaksakan produk setengah matang ke publik](/apple-ngotot-bikin-siri-jadi-agen-ai-saat-paham-perintah-saja), di mana kenyamanan jangka pendek selalu dibayar mahal dengan kerentanan sistem yang menganga lebar.

Kalau kunci brankas data pelanggan dan token akses server cloud Anda saja bisa tersebar cuma gara-gara jemari Anda terlalu gatal menekan tombol jangan tanya lagi, mungkin masalah terbesarnya bukan terletak pada model AI Anthropic. Sebelum bermimpi membangun arsitektur komputasi masa depan yang serba otonom, ada baiknya para programmer kembali belajar membuka berkas gitignore secara manual ketimbang pasrah nasib pada asisten teks yang doyan mengumbar aib majikannya sendiri.`
  },
  {
    title: "Kemenpar Pamer Konser Ye Sedot Turis Asing Saat Panggung Musisi Lokal Masih Megap-megap",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Budaya Urban", "Industri Musik", "Kemenpar", "Konser Musik", "Kritik Kebijakan", "Margaretha Nina", "Music Tourism", "Pariwisata"],
    imageUrl: "https://api.kemenpar.go.id/storage/app/uploads/public/6ad/fe0/656/thumb_16869_1200_630_0_0_crop.jpeg",
    imageAlt: "Pemandangan riuh puluhan ribu penonton memadati Stadion Utama Gelora Bung Karno Jakarta saat gelaran konser musik akbar",
    sourceUrl: "https://news.google.com/rss/articles/CBMi5AFBVV95cUxQZGhVZ3lVVUdySzYzRUl3NlhqTm0xeUtzNlZ5SmhCamZ4NWF6ODhoYVNHRlh6OW0tZXMwNXVrWXNKd0ptd0hjTjZZaU9QRFZqc3piMXh0Sy1JQy1OSVpNWkRfVERrRzFBN2JkdTJzRkdQNmk0RFpSUS1VX1dOMHY3dkdpSGV3XzBWamlBNThYSUZsV0tjR1lHNHFlRmlPaWN1X3hUQzZ4ejVfcl9HRVo2WnkxN3B6MGVFblhJdUQ4czNwdlE5bkF4Y2Jzdk5hSkNWZmJ0bGlRb2ZmOFQ4djBNYTdvLXE?oc=5",
    excerpt: "Kementerian Pariwisata membanggakan konser Ye di Stadion Utama Gelora Bung Karno yang menyedot 25 ribu penonton asing dengan perputaran uang 600 miliar rupiah. Pamer angka manis ala birokrasi ini terasa kontras dengan nasib musisi independen lokal yang masih kesulitan mengurus izin gigs dan panggung di tanah air.",
    content: `Bagi para pejabat negara yang hobi memoles citra di atas podium berkarpet tebal, tidak ada hidangan statistik yang lebih lezat daripada angka-angka bombastis bernilai ratusan miliar rupiah. Setiap kali ada gelaran akbar yang dihadiri kerumunan orang banyak, rilis resmi kementerian langsung dihujani kalkulasi perputaran ekonomi, lonjakan okupansi hotel berbintang, dan serapan tenaga kerja musiman yang terdengar sangat mentereng di layar proyektor rapat kabinet. Kita seolah diajak percaya bahwa negeri ini sudah menjelma menjadi surga industri hiburan kelas dunia hanya karena berhasil menyediakan stadion raksasa bagi pesohor mancanegara untuk bernyanyi beberapa jam di atas panggung megah.

Kegenitan birokrasi tersebut kembali tampak mencolok pekan ini. Dalam rilis resmi Kementerian Pariwisata, pemerintah membanggakan kesuksesan konser Ye alias Kanye West yang digelar di Stadion Utama Gelora Bung Karno Jakarta. Berdasarkan klaim kementerian dan catatan perhimpunan hotel, hajatan musik megah yang disesaki tujuh puluh ribu penonton itu disebut sanggup menyedot dua puluh lima ribu wisatawan mancanegara dari delapan puluh negara berbeda. Dengan perputaran uang yang ditaksir menembus angka enam ratus miliar rupiah, Menteri Pariwisata Widiyanti Putri Wardhana dengan bangga menyebut konser ini sebagai tonggak penguat pariwisata berbasis musik yang mengangkat pamor Indonesia di kancah global.

Mendengar parade angka manis tersebut dari kacamata penikmat gigs arus bawah rasanya seperti mendengarkan dongeng antariksa yang jauh dari realitas bumi. Ada kontradiksi yang sangat menusuk hati di balik pesta pora ratusan miliar tersebut. Pemerintah begitu sigap menggelar karpet merah, mempermudah birokrasi pengamanan, hingga memuji dampak ekonomi dari musisi kontroversial asal Amerika Serikat yang membawa pulang devisa puluhan juta dolar ke negerinya. Namun pada saat yang sama, komunitas musisi independen lokal di berbagai kota justru harus mengais remah-remah panggung dan megap-megap menghadapi pungutan liar, ketidakpastian izin keramaian dari aparat, hingga sepinya ruang pertunjukan yang layak dan terjangkau bagi seniman mandiri.

![Pemandangan riuh puluhan ribu penonton memadati Stadion Utama Gelora Bung Karno Jakarta saat gelaran konser musik akbar](https://api.kemenpar.go.id/storage/app/uploads/public/6ad/fe0/656/thumb_16869_1200_630_0_0_crop.jpeg)

Kesenjangan perlakuan negara terhadap panggung musik ini memperlihatkan tabiat elite yang gemar menumpang tenar pada gemerlap nama besar impor ketimbang merawat ekosistem sendiri. Band-band kampus atau musisi kamar tidur yang hendak menggelar konser amal atau peluncuran mini album di gedung serbaguna daerah sering kali dicurigai, dimintai setoran dana pengamanan yang mencekik, atau bahkan dibubarkan aparat dengan dalih gangguan ketertiban umum. Di banyak kota penyangga, ruang-ruang kreasi alternatif terus tergusur oleh proyek ruko dan pusat perbelanjaan, menyisakan musisi muda yang terpaksa patungan menyewa mixer bekas demi mengadakan pentas kecil-kecilan di garasi rumah. Situasi timpang ini mengingatkan kita pada perjuangan [Methosa yang menyuarakan derita rakyat di tengah dinginnya birokrasi](/methosa-nyalakan-gemuruh-revolusi-tampar-sikap-dingin-pejabat), membuktikan bahwa panggung seni lokal kerap dibiarkan bertarung sendirian tanpa sokongan negara. Sikap acuh birokrasi terhadap musisi sendiri juga terlihat saat [musisi daerah di panggung festival tradisi berjuang menjaga marwah budaya](/musik-dayak-palui-banaran-tembus-ami-awards-saat-jakarta-asyik) dengan dana swadaya tanpa pernah disorot dalam laporan pariwisata bergengsi.

Sektor ekonomi kreatif tidak akan pernah benar-benar berdaulat jika pemerintah hanya memosisikan Indonesia sebagai tempat penampungan penonton pasif bagi tur konser artis luar negeri. Duit enam ratus miliar rupiah yang diagung-agungkan di lembar siaran pers itu sebagian besar menguap ke pundi-pundi manajemen promotor raksasa dan rekening artis dunia, sementara musisi lokal di kafe-kafe pinggiran masih harus berdebat sengit soal transparansi royalti dan jatah honor manggung yang kerap dipotong seenaknya oleh pemilik modal.

Membanggakan puluhan ribu turis berdompet tebal yang berjoget di Senayan memang cara paling mudah untuk mengklaim keberhasilan program kerja di hadapan atasan. Tetapi selama band lokal masih harus merogoh kocek sendiri untuk menyewa genset dan memohon izin polisi layaknya kriminal, klaim pariwisata musik kelas dunia itu tak lebih dari sekadar pesta kembang api: ramai sesaat di langit Jakarta, lalu menyisakan kepulan asap kelabu bagi para musisi yang tertinggal di bawah panggung.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 05:00 WIB)");
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
  console.log(`🎉 Batch Publikasi 05:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261110-0500.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
