import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Baterai HP Hamil Sampai Casing Melengkung Itu Sinyal Bencana Bukan Aset Koleksi",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Baterai HP", "Elang Elano", "Gadget", "Hardware", "Keamanan Digital", "Reparasi HP", "Smartphone", "Teknologi Konsumen"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2026/05/07/IMG-20260507-WA0039.jpg",
    imageAlt: "Ilustrasi baterai ponsel cerdas yang menggelembung dan mengalami kerusakan komponen kimia di atas meja reparasi gadget",
    sourceUrl: "https://www.antaranews.com/berita/5840547/baterai-hp-menggelembung-ini-4-penyebab-dan-bahayanya",
    excerpt: "Baterai smartphone yang menggelembung hingga mendongkel bodi ponsel kerap dianggap enteng oleh sebagian pengguna. Padahal membiarkan baterai lithium-ion hamil di dalam saku celana adalah perjudian berbahaya yang lahir dari nafsu fast-charging dan kebiasaan malas merawat gadget.",
    content: `Pernahkah Anda melongok meja tongkrongan warkop dan menemukan seorang kawan meletakkan ponselnya dalam kondisi mengenaskan? Bodi belakangnya sudah terangkat beberapa milimeter, layar sentuhnya melengkung menekan panel kaca, dan kalau ditaruh di permukaan meja ia bisa berputar mulus mirip mainan gasing tradisional. Begitu ditegur bahwa baterainya sudah hamil tua, si pemilik biasanya cuma tersenyum santai sambil membela diri: "Tenang, masih bisa nyala kok, paling cuma boros dikit kalau dipakai streaming."

Tingkat ketabahan orang Indonesia menghadapi perangkat rusak memang sering kali berada di level mistis. Kita terbiasa menoleransi keanehan gadget selama layarnya masih sanggup menampilkan linimasa media sosial. Fenomena ini bisa Anda jumpai dengan mudah di lorong-lorong pusat pertokoan ponsel ITC Roxy atau Roxy Mas, di mana teknisi servis geleng-geleng kepala melayani pelanggan yang ngotot minta layar ditutup pakai lem perekat tambahan tanpa mau mengganti baterai yang sudah menggembung. Padahal di dalam cangkang tipis smartphone tersebut, ada sebuah reaksi kimia berbahaya yang tinggal menunggu pemicu kecil sebelum berubah menjadi kembang api mini di atas kasur tidur Anda.

Kecerobohan kolektif ini kembali disorot dalam laporan Antara Tekno awal pekan ini. Sebagaimana dicatat dalam rilis panduan teknis tersebut, fenomena baterai menggelembung bukanlah tanda aus biasa yang bisa didiamkan berbulan-bulan, melainkan akumulasi gas berbahaya akibat degradasi lapisan elektrolit baterai lithium-ion. Ada empat dosa harian yang paling sering memicu malapetaka ini: penggunaan adaptor charger abal-abal tanpa sertifikasi regulasi, paparan suhu panas berlebih saat ponsel dipaksa bermain game berat sambil dicolok listrik, kebiasaan buruk membiarkan daya terkuras tuntas hingga nol persen, serta siklus pengisian daya liar semalaman suntuk.

![Ilustrasi baterai ponsel cerdas yang menggelembung dan mengalami kerusakan komponen kimia di atas meja reparasi gadget](https://img.antaranews.com/cache/800x533/2026/05/07/IMG-20260507-WA0039.jpg)

Bila kita bedah lebih jujur, dosa-dosa tersebut berakar dari perlombaan gila para pabrikan smartphone yang memanjakan konsumen dengan fitur fast-charging ratusan watt. Para vendor teknologi berlomba-lomba memamerkan teknologi pengisian daya kilat dua puluh menit penuh, seolah-olah waktu hidup pengguna di dunia ini begitu genting sehingga menunggu satu jam di depan colokan adalah dosa besar. Namun yang jarang dicantumkan di baliho promosi mereka adalah hukum dasar fisika: menyuntikkan arus listrik raksasa ke dalam ruang baterai yang kian menipis menghasilkan lonjakan panas ekstrem yang mempercepat degradasi sel baterai secara drastis.

Kondisi ini diperparah oleh mentalitas pemilik gadget yang gemar mengambil jalan pintas. Alih-alih merawat kesehatan perangkat dengan disiplin, kita sering kali mencari trik instan yang tak masuk akal, persis seperti [kebiasaan konyol saat pengguna berharap baterai cepat penuh lewat mode pesawat](/ketika-pengguna-hp-pasang-mode-pesawat-sambil-berharap-baterai) tanpa memahami cara kerja sirkuit daya yang sebenarnya. Ketika baterai mulai menunjukkan gelagat ngedrop, kepanikan yang muncul malah keliru sasaran, serupa dengan [kepanikan saat baterai mendadak boros dan pengguna mengira HP disadap](/ketika-baterai-hp-boros-bikin-pengguna-panik-mengira-disadap), padahal biang keladinya adalah sel baterai yang sudah soak akibat disiksa saban malam.

Mempertahankan baterai yang sudah bengkak demi menunda biaya reparasi dua ratus ribu rupiah adalah perjudian paling bodoh yang bisa Anda lakukan di era modern. Saat kantong baterai meregang, lapisan pemisah tipis antara kutub positif dan negatif berada di ambang robek. Sedikit benturan di saku celana jeans yang ketat atau tekanan kunci motor sudah cukup untuk memicu korsleting internal, yang langsung memicu pelarian termal (thermal runaway)—sebuah kondisi di mana baterai terbakar dengan semburan api bersuhu ratusan derajat yang mustahil dipadamkan dengan air biasa.

Ganti baterai yang sudah kembung ke bengkel resmi atau teknisi terpercaya bukanlah pilihan gaya hidup, melainkan urusan keselamatan nyawa. Kalau Anda memang belum punya anggaran untuk membeli baterai pengganti yang orisinal, minimal matikan perangkat tersebut dan simpan di wadah aman, bukan malah tetap ditaruh di bawah bantal sambil mendengarkan siniar pengantar tidur. Ponsel cerdas Anda mungkin canggih dan mahal, tetapi ia tidak punya nyawa cadangan kalau suatu malam meledak tepat di samping telinga Anda.`
  },
  {
    title: "Gugun Blues Shelter Tolak Tunduk Algoritma Lewat Raungan Enam Lagu Blues Lokal",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Budaya Urban", "EP Musik", "Gugun Blues Shelter", "Industri Musik", "Margaretha Nina", "Musik Blues", "Musisi Independen", "Ruang Rasa"],
    imageUrl: "https://analisnews.co.id/wp-content/uploads/2026/11/IMG-20261108-WA0021.jpg",
    imageAlt: "Personel grup musik Gugun Blues Shelter berpose saat peluncuran mini album Ruang Rasa di panggung musik Jakarta",
    sourceUrl: "https://analisnews.co.id/2026/11/08/gugun-blues-shelter-rilis-ep-ruang-rasa-hadirkan-enam-lagu-blues-berbahasa-indonesia/",
    excerpt: "Di tengah tren industri musik yang mendewakan lagu instan berdurasi singkat demi algoritma TikTok, Gugun Blues Shelter memilih melawan arus dengan melepas mini album 'Ruang Rasa'. Enam nomor blues berbahasa Indonesia ini menjadi tamparan hangat bagi pasar yang kelewat malas merawat dinamika musik organik.",
    content: `Jika Anda menyalakan aplikasi pemutar musik streaming hari ini dan membiarkan fitur kurasi otomatis bekerja, kemungkinan besar telinga Anda akan disuguhi parade lagu seragam yang membosankan. Durasinya dipangkas kejam di bawah dua setengah menit, intronya dihilangkan agar pendengar tidak keburu bosan di lima detik pertama, dan ketukan drumnya dipoles begitu steril oleh kecerdasan buatan hingga terdengar mirip bunyi mesin cuci pintar. Industri musik arus utama kini tampak seperti pabrik makanan cepat saji: semua hidangan diracik demi memancing potongan klip viral lima belas detik di media sosial, bukan untuk dinikmati dengan khusyuk di sudut kamar yang temaram.

Di tengah lanskap sonik yang kian artifisial dan kehilangan nyawa itulah, kabar terbaru dari kancah musik independen Jakarta terasa seperti hembusan angin segar yang menyejukkan. Sebagaimana dicatat dalam laporan Analisnews awal pekan ini, trio blues rock kawakan tanah air, Gugun Blues Shelter, secara resmi mengumumkan peluncuran album mini terbaru mereka bertajuk "Ruang Rasa". Tidak tanggung-tanggung, alih-alih mengejar formula lagu pop instan atau kembali memakai bahasa Inggris demi pasar festival mancanegara, Gugun dan kawan-kawan justru menelurkan enam nomor blues murni yang seluruh liriknya ditulis dalam bahasa Indonesia yang lugas dan mengalir.

![Personel grup musik Gugun Blues Shelter berpose saat peluncuran mini album Ruang Rasa di panggung musik Jakarta](https://analisnews.co.id/wp-content/uploads/2026/11/IMG-20261108-WA0021.jpg)

Bagi siapa saja yang mencintai aroma distorsi amplifier tabung dan cabikan dawai bass yang berdenyut di dada, langkah Gugun Blues Shelter ini adalah pernyataan sikap yang berani. Merilis album blues rock di tahun 2026 dengan lirik bahasa ibu adalah perjudian kultural melawan kemalasan pasar. Para manajer label rekaman besar mungkin akan menggelengkan kepala melihat nomor-nomor yang sarat solo gitar panjang dan improvisasi ketukan drum dinamis, karena nomor semacam itu mustahil masuk ke daftar putar algoritma kafe kekinian yang menuntut lagu santai tanpa riak emosi.

Namun seni sejati memang tidak pernah lahir dari grafik proyeksi penjualan kuartalan. Kegelisahan para musisi independen terhadap hegemoni tren digital ini kian nyata terlihat saat [para musisi terbiasa janjian merilis lagu serentak tiap Jumat demi algoritma streaming](/ketika-seluruh-musisi-janjian-rilis-lagu-tiap-jumat-dan-telinga) hingga membuat telinga publik kebas oleh banjir konten yang cepat usang. Keberanian Gugun Blues Shelter merawat identitas blues berbahasa Indonesia ini mengingatkan kita pada api perlawanan komunitas akar rumput, serupa dengan determinasi saat [band indie daerah berhasil mengguncang panggung internasional tanpa menjilat pasar ibu kota](/ketika-band-metal-tulungagung-mengguncang-panggung-kexp-tanpa) yang gemar mendikte tren musik lokal.

Kekuatan utama dari rekaman ini terletak pada interaksi organik antarmusisi di ruang studio yang tidak bisa dimanipulasi oleh perangkat lunak komputer. Gugun, Fajar, dan Bowie tidak sekadar memainkan tangga nada blues pentatonik standar, melainkan membangun dialog musikal yang hidup. Dinamika pukulan snare drum yang responsif, gesekan senar bas yang menopang alur nada, serta raungan gitar elektrik Stratocaster yang kotor namun berwibawa membuktikan bahwa musik akar rumput punya daya magis tersendiri saat dibiarkan bernapas bebas tanpa campur tangan autotune yang berlebihan.

Dalam enam lintasan di mini album "Ruang Rasa", Gugun membuktikan bahwa bahasa Indonesia memiliki kelenturan alami yang begitu klop saat dikawinkan dengan progresi akord blues tradisional. Keluhan soal hidup kota besar, hubungan antarmanusia yang rumit, hingga pergulatan batin musisi panggung disampaikan tanpa pretensi bahasa puitis yang njelimet. Setiap petikan senar gitarnya berbicara dengan kejujuran yang telanjang, sebuah kualitas organik yang tak akan pernah bisa diproduksi oleh generator audio digital secanggih apa pun.

Pada akhirnya, panggung musik tanah air selalu membutuhkan para pemberontak setia yang menolak tunduk pada rumus hitungan mesin. Gugun Blues Shelter tidak butuh jutaan tarian viral di TikTok demi membuktikan relevansi karya mereka setelah dua dekade berkarier. Biarkan saja para produser pop sibuk memangkas durasi lagu demi sepeser royalti recehan; selama masih ada bilik panggung kecil dengan bau asap rokok dan amplifier tua yang menderu kencang, musik yang jujur akan selalu menemukan telinga yang haus akan jiwa.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 11:00 WIB)");
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261109-1100.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Run Error:", err);
    process.exit(1);
  });
}
