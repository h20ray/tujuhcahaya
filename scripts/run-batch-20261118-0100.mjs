import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Firaxis Depak Sepertiga Staf Demi Babak Baru Usai Civilization 7 Lesu di Steam",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Firaxis Games", "Civilization 7", "XCOM", "Industri Game", "Layoff", "PC Gaming"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/V4dgv2YNB3gESELLNoEvna-1920-80.jpg",
    imageAlt: "Ilustrasi game strategi Civilization 7 besutan studio Firaxis Games yang tengah melakukan perampingan karyawan",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/civilization-dev-firaxis-reportedly-lays-off-a-third-of-its-staff-studio-head-departs/",
    excerpt: "Studio di balik Civilization dan XCOM, Firaxis Games, memangkas sekitar sepertiga stafnya disertai mundurnya kepala studio Heather Hazen. Penerbit 2K Games mengemasnya sebagai restrukturisasi demi babak baru.",
    content: `Bagi penggemar game strategi PC, ada satu kutukan manis bernama sindrom *one more turn*. Anda berniat membuka *Civilization* cuma setengah jam sebelum tidur, tahu-tahu azan subuh berkumandang sementara pasukan tank masih sibuk mengepung kota tetangga. Selama tiga dekade terakhir, studio asal Maryland bernama Firaxis Games adalah bandar utama candu semacam itu lewat seri *Civilization* dan *XCOM* yang melegenda. Sayangnya, dedikasi bertahun-tahun merancang simulasi peradaban dunia ternyata tidak cukup kuat melindungi para perajinnya dari kapak efisiensi korporasi.

Pekan ini, kabar suram kembali datang dari markas pengembang legendaris tersebut. Sebagaimana dicatat dalam laporan PC Gamer yang mengutip temuan Bloomberg, Firaxis telah memangkas sekitar 60 karyawan atau hampir sepertiga dari total tenaga kerjanya. Bersamaan dengan gelombang pemutusan hubungan kerja itu, kepala studio Heather Hazen yang baru naik takhta pada 2023 setelah mengabdi lebih dari 25 tahun di Firaxis juga resmi mengundurkan diri dari kursinya.

Seperti biasa, induk penerbit 2K Games sudah menyiapkan paket kalimat humas paling rapi untuk membungkus kabar pahit tersebut. Juru bicara 2K mengonfirmasi terjadinya pengurangan pegawai dengan dalih bahwa Firaxis sedang melakukan restrukturisasi dan memusatkan ulang kekuatan inti mereka dalam merancang game strategi kelas dunia. Dalam pernyataan resminya, perusahaan menyebut penyusutan ukuran studio terpaksa dilakukan demi berfokus pada desain, teknologi, dan pengalaman pemain, sekaligus berpamitan kepada "rekan-rekan berbakat yang ikut membangun Firaxis" demi membuka babak berikutnya.

![Ilustrasi game strategi Civilization 7 besutan studio Firaxis Games yang tengah melakukan perampingan karyawan](https://cdn.mos.cms.futurecdn.net/V4dgv2YNB3gESELLNoEvna-1920-80.jpg)

Di telinga pemain yang rajin mengikuti rapor industri game beberapa tahun terakhir, jargon manis soal "fokus pada pengalaman pemain" itu terdengar agak getir. Badai di tubuh Firaxis sejatinya bukan muncul dalam semalam akibat cuaca buruk sesaat. Setelah *Marvel's Midnight Suns* dipuji kritikus namun mencatat penjualan yang biasa saja, pertaruhan terbesar mereka lewat *Civilization 7* pada 2025 justru tersandung di hadapan komunitasnya sendiri. Meski sudah diguyur segudang pembaruan pascarilis, rating ulasan pengguna *Civilization 7* di Steam masih betah menyandang status "mixed", sementara jumlah pemain aktifnya malah tertinggal jauh di belakang pendahulunya, *Civilization 6*.

Tekanan proyek ternyata tidak berhenti di situ. Laporan yang sama mengungkap bahwa sebuah proyek game *XCOM* baru yang sedang diracik Firaxis juga mengalami kesulitan teknis hingga meleset dari target *milestone* utama awal tahun ini. Pengerjaannya memang disebut masih berjalan, namun jelas nasibnya ikut membayangi meja kerja para pengembang yang tersisa. Sebelum pemangkasan besar pekan ini, studio tersebut sudah lebih dulu memotong sekitar 30 pekerja pada 2023 lalu menggelar pemangkasan susulan yang jumlahnya tidak diumumkan pada 2025.

Pola semacam ini memperlihatkan betapa tidak adilnya pembagian risiko di dapur produksi game raksasa. Ketika sebuah waralaba besar gagal meledak di pasar karena perubahan mekanik permainan yang terlalu dipaksakan oleh pengambil keputusan di ruang rapat, atau akibat jadwal rilis yang diburu-buru laporan keuangan, yang paling cepat kehilangan mata pencaharian hampir selalu pekerja teknis di level bawah. Sementara itu, kepergian pimpinan puncak cukup dibingkai sebagai "momen yang tepat dan disengaja untuk menyerahkan tongkat estafet" kepada pemimpin era baru.

Kisah Firaxis menambah panjang daftar luka buruh kreatif di industri video game global sepanjang tahun ini. Kita baru saja menyaksikan bagaimana [Tripwire mendepak 36 karyawan seminggu setelah pamer ekspansi](/tripwire-depak-36-karyawan-seminggu-setelah-pamer-ekspansi-divisi), dan belum reda pula rasa muak komunitas saat [bos Xbox pamer mesin AI di tengah ribuan developer yang dipecat](/bos-xbox-rayakan-ultah-pamer-mesin-ai-saat-ribuan-developer-habis). Di atas kertas, perusahaan selalu menyebut langkah ini sebagai penataan ulang yang berat tapi perlu. Di dunia nyata, istilah "babak baru" itu berarti enam puluh keluarga pekerja kreatif harus mengemas kardus meja kerja mereka.

Bagi gamer PC di Indonesia yang masih setia membuka kampanye *Civilization 6* atau menanti kembalinya *XCOM* tanpa drama mikrotransaksi, kabar dari Firaxis ini menyisakan rasa waswas tersendiri. Bermain satu giliran lagi di layar monitor memang terasa nikmat sampai lupa waktu, tetapi bagi para pembuat gamenya di balik layar, babak baru perusahaan sering kali justru menjadi giliran terakhir mereka sebelum pintu kantor ditutup dari luar.`
  },
  {
    title: "KCI Sodorkan Alat Pencatat Royalti ke Menteri Saat Pencipta Lagu Masih Waswas",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Royalti Musik", "KCI", "Hak Cipta", "Musik Indonesia", "Industri Musik", "Pencipta Lagu"],
    imageUrl: "https://sergap.co.id/wp-content/uploads/2026/11/WhatsApp-Image-2026-11-17-at-09.36.34-e1794888174447.jpeg",
    imageAlt: "Pertemuan Dewan Pembina Karya Cipta Indonesia dengan Menteri Hukum membahas tata kelola royalti pencipta lagu",
    sourceUrl: "https://news.google.com/rss/articles/CBMi0gFBVV95cUxOZW5BUGs4SXc1OXIxV2FTMkdGLUM1MmhILS13cmRKY3VnX1lEamFNVWdGd1Bvam1xaWtvcXU1a2QteTZRbjByWVF3OTNMZi15TXk3SktPemJTUEY5d05vc2hYbEJvR0ZKVlZhX0JfMmhkSGNxcldXaHd4M3JySFJBbFpybllFcFRzUU15S3hjRm52TzRXNDY0VDBjUkpQYktGLUUzWmdGVjE2WlNFTHV2eUs3Y3FBaERuZFhVbnFGOFJLSW5oVVZkMEtYcC1JblZCWmc?oc=5",
    excerpt: "Lembaga Manajemen Kolektif KCI menemui Menteri Hukum Supratman Andi Agtas sambil menawarkan sistem digitalisasi analog pencatat pemutaran lagu. Di balik janji transparansi, pencipta lagu tetap menagih bukti nyata di rekening.",
    content: `Di warung kopi pinggiran kota sampai aula karaoke keluarga, lagu-lagu ciptaan musisi Indonesia diputar nyaris tanpa henti dari siang hingga larut malam. Pelanggan ikut bernyanyi, pemilik tempat usaha menarik uang sewa ruangan atau menjual es kopi susu, sementara speaker terus mengumandangkan melodi yang membikin suasana hidup. Ironisnya, di ujung rantai ekonomi itu, tidak sedikit pencipta lagu yang masih harus mengelus dada tiap akhir bulan karena urusan pembagian royalti di negeri ini lebih sering terdengar seperti teka-teki silang tanpa kunci jawaban.

Upaya merapikan benang kusut itu kembali mengemuka lewat pertemuan di gedung Kementerian Hukum pekan ini. Sebagaimana dicatat dalam laporan SERGAP, jajaran Lembaga Manajemen Kolektif Karya Cipta Indonesia atau KCI melakukan audiensi dan disambut langsung oleh Menteri Hukum Supratman Andi Agtas di Jakarta pada 16 November 2026. Rombongan tersebut turut didampingi Ketua Dewan Pembina KCI Viva Yoga Mauladi, yang saat ini juga menjabat sebagai Wakil Menteri Transmigrasi.

Dalam pertemuan tersebut, Menteri Supratman melontarkan prinsip tegas "No Data No Royalty" sebagai pegangan pemerintah untuk membenahi tata kelola musik nasional. Menjawab tantangan pendataan itu, KCI menyodorkan perangkat berkonsep "digitalisasi analog" yang mereka kreasikan. Menurut paparan Viva Yoga, alat pencatat ini dirancang untuk menangkap lagu yang diputar, lalu mendata secara otomatis siapa penyanyinya, kapan lagu tersebut dibunyikan, serta di mana lokasinya tanpa campur tangan penghitungan manual manusia yang selama ini rawan memicu sengketa dan *moral hazard*.

![Pertemuan Dewan Pembina Karya Cipta Indonesia dengan Menteri Hukum membahas tata kelola royalti pencipta lagu](https://sergap.co.id/wp-content/uploads/2026/11/WhatsApp-Image-2026-11-17-at-09.36.34-e1794888174447.jpeg)

Menariknya, KCI menyatakan siap menghibahkan sistem pencatat tersebut kepada negara agar bisa dipakai secara luas menjawab persoalan ketiadaan data. Mereka menegaskan bahwa data yang masuk ke dalam sistem nantinya dapat diakses langsung oleh para pencipta lagu demi menjaga transparansi. Di atas kertas, gagasan memutus peran makelar pencatatan manual dengan perangkat otomatis terdengar seperti obat penawar bagi industri musik yang sudah bertahun-tahun bertengkar soal angka.

Namun di kalangan musisi arus bawah dan pemilik kedai kopi kecil, tawaran solusi serba teknologi dari ruang rapat kementerian tetap memantik tanda tanya besar. Persoalan royalti di Indonesia sejak lama bukan melulu perkara ketiadaan alat pendengar otomatis, melainkan krisis kepercayaan terhadap mekanisme penarikan dan distribusi lembaga kolektif itu sendiri. Banyak pemilik kafe mandiri yang masih trauma mendengar kabar tagihan royalti dadakan dengan hitungan yang kabur, sementara di sisi lain pencipta lagu yang karyanya rajin diputar sering kali tetap menerima laporan pembagian yang jauh dari masuk akal.

Sorotan tajam juga wajar diarahkan pada tata kelola kelembagaan. Ketika tokoh di pucuk pembina lembaga manajemen kolektif sekaligus duduk di kursi wakil menteri kabinet, publik berhak menagih batas pengawasan yang jernih agar kebijakan tata kelola musik tidak sekadar berjalan di lingkaran elite yang sama. Tanpa audit terbuka dari pihak independen dan kejelasan aturan main hingga ke panggung-panggung daerah, alat pencatat secanggih apa pun berisiko hanya menjadi monumen proyek baru yang manis di siaran pers.

Keresahan di tingkat akar rumput ini sejalan dengan keluhan berulang para pelaku seni yang hidup dari panggung ke panggung. Belum lama ini publik menyoroti bagaimana [musisi independen menjerit tercekik carut-marut royalti](/afgan-borong-piala-ami-awards-saat-musisi-independen-menjerit) di tengah gemerlap acara penghargaan tahunan, maupun kejanggalan ketika [kebijakan hak cipta dibanggakan tanpa kepastian nasib pencipta lagu](/pemerintah-bangga-gratiskan-hak-cipta-saat-royalti-musisi-masih). Bagi pencipta lagu kamar kos dan band indie yang patungan menyewa studio latihan, pengakuan bahwa royalti adalah bagian dari hak asasi manusia tentu baru terasa nyata jika sistem distribusinya tidak lagi penuh lubang.

Menghibahkan mesin pendeteksi lagu ke negara mungkin bisa dilakukan dalam satu seremoni jabat tangan yang rapi di kantor kementerian. Akan tetapi, bagi para pencipta lagu yang selama ini cuma kebagian tepuk tangan penonton tanpa melihat hak ekonominya, janji sistem tanpa campur tangan manusia baru layak dirayakan ketika angka di dasbor transparansi itu benar-benar berubah menjadi transferan bersih ke rekening dapur mereka.`
  }
];

async function runBatch() {
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

runBatch().catch(err => {
  console.error("Batch Execution Error:", err);
  process.exit(1);
});
