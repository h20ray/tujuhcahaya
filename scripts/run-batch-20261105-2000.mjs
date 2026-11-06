import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Ketika Film Laut Bercerita Mengetuk Ingatan Kolektif yang Coba Dihapus Zaman",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Film Indonesia", "Sastra", "Budaya", "Sejarah", "Laut Bercerita", "Sinema"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2026/10/02/THE-SEA_STILLS_01-OK_Credit-Pal-8-Pictures-2.jpg",
    imageAlt: "Salah satu adegan kelompok studi Winatra dalam adaptasi film Laut Bercerita",
    excerpt: "Di tengah gempuran tontonan algoritma yang serba instan, adaptasi film Laut Bercerita karya Leila S. Chudori membuktikan satu hal: anak muda hari ini tidak pernah benar-benar lupa pada mereka yang sengaja dihilangkan.",
    content: `Di lorong-lorong bioskop kota besar pada akhir pekan, pemandangan lazim yang kerap kita temui adalah kerumunan anak muda yang antre membeli popcorn karamel berukuran jumbo sembari berburu tiket film horor murahan penuh suara jeritan jump-scare. Namun beberapa hari belakangan, ada keheningan ganjil yang menyusup di antara deretan poster film komersial tersebut. Antrean panjang tetap mengular, tetapi raut wajah penontonnya jauh lebih teduh dan gelisah. Mereka datang bukan untuk ditakut-takuti oleh sosok hantu jadi-jadian, melainkan untuk menatap langsung luka sejarah bangsa yang selama puluhan tahun coba disapu ke bawah karpet.

Keriuhan itu bermuara pada penayangan adaptasi film Laut Bercerita yang diangkat dari novel mahakarya Leila S. Chudori. Sebagaimana dicatat dalam laporan Antara News pada musim gugur ini, jadwal pemutaran layar lebar karya tersebut langsung diserbu penonton di berbagai kota sejak hari pertama rilis. Kisah pergerakan Biru Laut, Kasih Kinanti, dan kawan-kawan kelompok studi Winatra yang diculik serta dihilangkan secara paksa menjelang runtuhnya rezim Orde Baru mendadak kembali menjadi bahan perbincangan paling hangat di linimasa media sosial.

Fenomena ini sekaligus meremukkan stigma dangkal yang kerap disematkan generasi tua kepada anak muda hari ini. Generasi Z sering kali dicap sebagai gerombolan manusia apolitis yang cuma peduli pada joget viral lima belas detik, tren fesyen fomo, dan kopi susu gula aren. Namun ketika ribuan lembar tiket pemutaran film bertema penculikan aktivis 1998 ini ludes terjual dalam hitungan menit, kita dipaksa mengakui adanya dahaga kultural yang tak pernah terpuaskan oleh kurikulum sejarah sekolah.

![Adegan kelompok studi Winatra dalam film Laut Bercerita](https://img.antaranews.com/cache/800x533/2026/10/02/THE-SEA_STILLS_01-OK_Credit-Pal-8-Pictures-2.jpg)

Bagi mereka yang kerap menelusuri dinamika seni dan [rubrik Musik & Gaya Hidup](/category/musik) independen, kekuatan karya sastra yang dialihwujudkan ke layar perak selalu menyimpan daya gugah tersendiri. Buku pelajaran sejarah di ruang-ruang kelas formal kerap mereduksi tragedi kemanusiaan menjadi sekadar deretan angka tahun dan nama jenderal yang wajib dihafal demi kelulusan ujian semester. Sebaliknya, melalui sudut pandang sinematik, penonton diajak merasakan sesak napas di ruang bawah tanah yang gelap, derit suara rantai borgol, serta kegetiran keluarga korban yang setia menyeduh teh setiap hari Minggu di meja makan sembari menanti kepulangan anak mereka yang tak kunjung tiba.

Di sinilah seni membuktikan fungsinya sebagai benteng ingatan. Ketika para elit politik di panggung kekuasaan saling bertukar kursi dan sibuk memutihkan dosa pelanggaran hak asasi manusia masa lalu dengan dalih rekonsiliasi semu, karya fiksi justru berdiri tegak menjadi saksi yang menolak lupa. Lewat medium gambar bergerak dan tata suara yang intim, penderitaan para martir demokrasi tidak lagi terdengar seperti dongeng masa lampau yang berjarak, melainkan cermin telanjang yang memantulkan kebobrokan nurani kita hari ini.

Tentu saja, ada kekhawatiran klasik bahwa fenomena ini bakal tereduksi menjadi sekadar komodifikasi rasa sedih atau ajang pamer tiket di status Instagram cerita. Namun melihat riuhnya ruang-ruang diskusi alternatif yang digelar komunitas kampus seusai pemutaran film, optimisme itu rasanya pantas dipelihara. Anak-anak muda yang hadir di ruang gelap bioskop itu bukan sekadar konsumen tiket hiburan, mereka adalah generasi baru yang sedang menuntut hak untuk mengetahui kebenaran yang selama ini disembunyikan.

Kekuasaan tiran mungkin sanggup menenggelamkan tubuh para pemuda idealis ke dasar laut yang paling sunyi. Namun sebagaimana yang dibuktikan oleh riak gelombang film ini, kata-kata dan ingatan manusia adalah karang kokoh yang tak akan pernah bisa dibungkam oleh kedalaman samudra.`
  },
  {
    title: "Laba Sony Melonjak Berkat Spider-Man tapi Dompet Gamer Tetap Menjerit",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Sony", "PlayStation", "Industri Game", "Spider-Man", "Gamer", "Konsol"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/08/spider-man-brand-new-day.png",
    imageAlt: "Tampilan visual waralaba Spider-Man dan konsol game modern",
    excerpt: "Sony baru saja melaporkan lonjakan laba bersih hingga 449 miliar yen berkat PlayStation dan Spider-Man. Sayangnya bagi para gamer kasual, pesta cuan korporasi ini justru dibayar dengan kenaikan tarif langganan dan hilangnya disc drive.",
    content: `Jika Anda menyempatkan diri mampir ke lantai bursa Tokyo pekan ini, senyum lebar para eksekutif Sony Group dipastikan sedang merekah selebar-lebarnya. Bagaimana tidak, raksasa hiburan asal Jepang itu baru saja merilis laporan keuangan kuartalan dengan angka yang bikin silau mata: laba bersih mereka melonjak tajam menyentuh angka 449,6 miliar yen atau setara dengan 2,84 miliar dolar Amerika Serikat. Pundi-pundi uang tersebut mengalir deras terutama berkat moncernya divisi PlayStation serta kesuksesan luar biasa waralaba Spider-Man yang laris manis diserbu konsumen global.

Namun bila Anda memalingkan pandangan dari salindia presentasi investor yang megah itu dan menengok ke ruang tamu para pemain di tongkrongan rental, suasana yang tersaji justru berbanding terbalik 180 derajat. Di balik perayaan laba triliunan rupiah tersebut, ada jutaan dompet gamer kasual yang sedang megap-megap diperas habis oleh strategi monetisasi korporasi yang makin hari makin tidak masuk akal.

Sebagaimana dicatat dalam laporan The Verge, divisi game Sony menjadi lokomotif utama yang mengangkat pundi-pundi keuntungan perusahaan sepanjang kuartal ketiga. Penjualan judul game andalan seperti Spider-Man: Brand New Day berhasil mendongkrak pendapatan perangkat lunak ke rekor baru. Namun alih-alih membalas loyalitas komunitas dengan layanan yang lebih ramah di kantong, manajemen Sony justru memanfaatkan dominasi pasar konsol generasi sekarang untuk mengencangkan jerat harga kepada konsumennya sendiri.

![Tampilan visual Spider-Man dan konsol PlayStation](https://platform.theverge.com/wp-content/uploads/sites/2/2026/08/spider-man-brand-new-day.png)

Pukulan paling telak dirasakan para pengguna melalui kenaikan tarif langganan PlayStation Plus yang melambung tanpa ampun. Layanan yang dulunya menjadi syarat wajib bermain online dengan bonus pustaka game bulanan yang menarik, kini dibanderol dengan harga yang bikin geleng-geleng kepala. Ironisnya, kenaikan tarif tersebut sama sekali tidak diimbangi dengan perbaikan kualitas katalog game klasik atau infrastruktur server komputasi awan yang lebih stabil. Gamer diposisikan seperti sapi perah yang tak punya pilihan selain membayar upeti bulanan demi bisa menikmati game bersama teman satu tongkrongan.

Keserakahan korporasi ini mencapai puncaknya pada peluncuran varian konsol teranyar PS5 Pro. Dijual dengan banderol harga selangit yang menembus belasan juta rupiah, Sony dengan percaya diri melucuti komponen paling mendasar: pemutar piringan cakram fisik (*disc drive*). Bagi pemain yang ingin menjalankan koleksi kaset lama mereka, Sony dengan santai mewajibkan pembelian aksesori drive terpisah seharga jutaan rupiah tambahan. Ini adalah manuver bisnis yang secara sengaja membunuh pasar media fisik demi menggiring seluruh konsumen masuk ke dalam kandang monopoli toko digital PlayStation Store, tempat di mana mereka bebas mematok harga game tanpa saingan diskon dari toko game pinggir jalan.

Bagi para penikmat [ulasan game](/category/game) yang mengikuti sepak terjang industri konsol sejak era PlayStation 1, arogansi Sony saat memegang kendali pasar adalah pola lama yang berulang. Setiap kali mereka unggul jauh atas rival abadinya seperti Xbox, manajemen Sony cenderung lupa daratan dan mulai memandang pemain bukan lagi sebagai penggemar setia, melainkan deretan angka arus kas (*cash flow*) yang siap dipanen tiap kuartal.

Para eksekutif Sony boleh saja membanggakan grafik laba mereka yang menjulang tinggi di hadapan para pemilik saham. Namun sejarah video game selalu membuktikan bahwa kesetiaan gamer bukanlah cek kosong yang bisa dipermainkan selamanya.

Sang manusia laba-laba mungkin selalu berhasil menyelamatkan warga New York dari ancaman penjahat super di dalam game. Namun di dunia nyata, superhero berkostum merah-biru itu jelas tak berdaya menyelamatkan tabungan para penggemarnya dari jerat cengkeraman korporasi induknya sendiri.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA HOURLY BATCH 20:00 (Standar 7C Redaksi & JEV)");
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

    // 2. Publish ke local DB dan remote Plesk
    console.log(`📡 Menerbitkan artikel via autoPublishPost (remote: true)...`);
    const pubResult = await autoPublishPost(art, { bypassPause: true, remote: true });
    console.log(`✅ Status: ${pubResult.status} | URL: ${pubResult.url}`);
    console.log(`   Local DB: ${pubResult.dbSaved} | Remote Plesk: ${pubResult.remotePublished}`);
    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 BATCH SELESAI: ${results.length} artikel berhasil dipublikasikan.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261105-2000.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch(err => {
      console.error("Batch Execution Error:", err);
      process.exit(1);
    });
}
