import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "HP Menganggur di Meja tapi Baterai Menguap Digerogoti Aplikasi Siluman",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Android", "Aplikasi Mobile", "Baterai HP", "Elang Elano", "Gadget", "Hardware", "Keamanan Siber", "Smartphone"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2015/07/20150709antarafoto-fasilitas-charger-090715-adb.jpg",
    imageAlt: "Fasilitas pengisian daya baterai HP di stasiun kereta api yang dipadati pengguna gadget",
    sourceUrl: "https://www.antaranews.com/berita/5840543/baterai-hp-cepat-habis-padahal-jarang-dipakai-apa-penyebabnya",
    excerpt: "Baterai HP mendadak sekarat padahal seharian cuma tergeletak diam di atas meja kerja. Fenomena baterai bocor halus ini bukan perkara mistis, melainkan ulah puluhan aplikasi siluman yang diam-diam rakus menyedot daya lewat sinkronisasi latar belakang dan pelacakan data tanpa henti.",
    content: `Pernahkah Anda meninggalkan HP di atas meja kerja dalam kondisi baterai terisi penuh delapan puluh persen, lalu ditinggal mengetik laporan atau menyeduh kopi selama dua jam, dan begitu layar dinyalakan kembali angkanya sudah terjun bebas ke angka tiga puluh persen? Reaksi spontan mayoritas orang biasanya langsung panik sambil mengelus dada. Kita buru-buru menuduh baterai HP sudah bocor parah, kabel charger murahan di rumah telah merusak sirkuit pengisian daya, atau bahkan curiga ada perangkat penyadap misterius yang sedang menguras tenaga ponsel dari jarak jauh. Padahal di dunia nyata, tidak ada konspirasi intelijen tingkat tinggi di kamar kos Anda. Yang terjadi hanyalah opera sabun klasik di mana sistem operasi HP modern Anda sedang diperdaya oleh puluhan aplikasi siluman yang rakus dan enggan beristirahat.

Fenomena baterai bocor halus ini memang menjadi keluhan harian jutaan pengguna smartphone. Sebagaimana dicatat dalam laporan edukasi teknologi Antara, baterai ponsel yang terkuras cepat kendati layar dalam posisi mati merupakan imbas langsung dari aktivitas latar belakang (background activity) yang terus berjalan tanpa izin sadar sang pemilik. Mulai dari aplikasi media sosial yang tiada henti menyegarkan linimasa, aplikasi belanja online yang bolak-balik memeriksa promo kilat, layanan email yang memindai kotak masuk tiap tiga puluh detik, hingga aplikasi navigasi peta yang diam-diam terus melacak koordinat GPS ponsel secara presisi. Dalam keadaan layar mati suri, jeroan chipset dan modem sinyal di dalam casing HP Anda sejatinya sedang bekerja lembur bagaikan kuli bangunan mengejar setoran akhir bulan.

![Fasilitas pengisian daya baterai HP di stasiun kereta api yang dipadati pengguna gadget](https://img.antaranews.com/cache/800x533/2015/07/20150709antarafoto-fasilitas-charger-090715-adb.jpg)

Celakanya, para pengembang aplikasi digital hari ini sengaja merancang software mereka agar seposesif mungkin terhadap sumber daya perangkat. Demi memastikan notifikasi diskon kilat atau video viral terbaru bisa mendarat mulus dalam hitungan detik, aplikasi-aplikasi ini menolak masuk ke mode tidur nyenyak (deep sleep). Mereka memasang alarm sistem buatan sendiri yang membangunkan prosesor HP ribuan kali dalam sehari. Kondisi ini kian diperparah oleh kegagapan sinyal jaringan seluler. Ketika Anda berada di ruangan berdinding tebal dengan jangkauan 4G atau 5G yang kembang kempis, modem HP Anda akan melipatgandakan daya pancar antena demi mencari pemancar terdekat, membakar daya baterai dengan kecepatan gila-gilaan hanya agar simbol sinyal di pojok atas layar tidak menghilang.

Keputusasaan menghadapi daya tahan baterai yang menyedihkan ini sering kali melahirkan mitos-mitos absurd di tongkrongan. Banyak pengguna mencoba jalan pintas konyol, seperti [kebiasaan pasang mode pesawat demi baterai cepat penuh](/ketika-pengguna-hp-pasang-mode-pesawat-sambil-berharap-baterai) yang sejatinya cuma memberikan ilusi ketenangan sesaat tanpa menyelesaikan akar kerakusan aplikasi di latar belakang. Lebih parah lagi, sebagian orang memilih terus mencolokkan ponsel ke kepala charger fast charging sepanjang hari di meja kantor. Akibatnya, sel kimia lithium-ion di dalam baterai terus terpapar panas ekstrem tanpa henti, memicu degradasi kapasitas permanen yang berujung pada [kondisi baterai kembung yang siap meledak](/baterai-hp-hamil-sampai-casing-melengkung-itu-sinyal-bencana) dan merusak panel layar dari dalam.

Pabrikan smartphone tentu saja tidak sepenuhnya suci dari dosa. Demi memoles desain bodi HP agar tetap setipis wafer dan nyaman dipamerkan di etalase toko, mereka enggan menanamkan kapasitas baterai raksasa yang lebih tebal. Mereka lebih suka menjual solusi tambal sulam berupa charger ratusan watt yang menjanjikan pengisian instan dari nol ke seratus persen dalam lima belas menit. Padahal yang sebetulnya dibutuhkan para pekerja kantoran bukanlah charger sebesar batu bata yang bikin tas ransel berat, melainkan sistem operasi yang tegas memenggal leher aplikasi-aplikasi nakal yang hobi mencuri daya di balik punggung kita.

Menyalahkan kualitas baterai atas keteledoran kita membiarkan puluhan aplikasi belanja dan media sosial hidup bebas di latar belakang adalah kemalasan berpikir yang mahal harganya. Selama Anda masih malas memeriksa menu izin aplikasi, enggan mematikan fitur pembaruan otomatis yang tidak penting, dan membiarkan aplikasi pinjaman online melacak GPS sepanjang hari, jangan kaget jika baterai HP Anda bakal terus menguap bagaikan uang gajian di tanggal muda kendati ponselnya cuma Anda pandangi dari kejauhan.`
  },
  {
    title: "Bos Take-Two Sebut Pengalaman PC dan Konsol Sama Padahal GTA 6 Versi PC Masih Gaib",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Gamer Indonesia", "Grand Theft Auto", "GTA 6", "Industri Game", "Konsol Game", "PC Gaming", "Rockstar Games", "Take-Two"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/Er7sxeh8RRbBBp8GXXPfsC-1920-80.jpg",
    imageAlt: "Tangkapan layar grafis GTA 6 dan potret CEO Take-Two Strauss Zelnick dalam sesi paparan investor",
    sourceUrl: "https://www.pcgamer.com/games/grand-theft-auto/the-experiences-on-console-and-pc-tend-to-be-roughly-the-same-says-take-two-ceo-in-response-to-question-about-gta-roleplaying/",
    excerpt: "CEO Take-Two Strauss Zelnick berdalih pengalaman bermain game di PC dan konsol cenderung serupa saat ditanya soal masa depan GTA Roleplay. Pernyataan enteng ini langsung memicu tawa getir para gamer PC yang jangankan mencicipi server modding, kepastian tanggal rilis GTA 6 di komputer saja masih sengaja digantung demi memeras laba penjualan konsol.",
    content: `Bagi komunitas gamer PC di tanah air, menjadi anak tiri di hadapan raksasa penerbit game asal barat adalah nasib apes yang sudah berlangsung selama puluhan tahun. Kita sudah terbiasa menabung uang bertahun-tahun demi merakit komputer dengan kartu grafis bertenaga, mengorbankan waktu akhir pekan untuk menyetel pengaturan grafis demi mengejar frame rate stabil, hingga membesarkan ekosistem modifikasi game secara sukarela tanpa sepeser pun bayaran dari pengembang. Namun ketika momen peluncuran judul game paling akbar sejagat raya tiba, para pemilik modal selalu memalingkan muka dan menyuruh pemain PC berdiri antre di pojok ruangan paling belakang. Dan yang paling menjengkelkan dari perlakuan diskriminatif ini adalah ketika sang pimpinan korporasi dengan muka tanpa dosa berlagak seolah-olah kedua platform tersebut diperlakukan setara di hadapan meja kasir mereka.

Pemandangan menggelikan tersebut kembali tersaji dalam forum komunikasi keuangan global pekan ini. Sebagaimana dicatat dalam laporan PC Gamer, Chief Executive Officer Take-Two Interactive Strauss Zelnick dicecar pertanyaan menarik oleh analis investasi Oppenheimer mengenai bagaimana masa depan server kustom dan fitur GTA Roleplay (RP) bakal diadopsi ke dalam peluncuran Grand Theft Auto 6. Alih-alih memberikan peta jalan teknologi yang jelas, sang bos penerbit justru melemparkan jawaban diplomatis yang bikin dahi mengernyit. Zelnick dengan santai menyatakan bahwa pengalaman bermain di konsol dan PC pada dasarnya cenderung sama saja. Ia bahkan menambahkan bahwa perusahaannya bersikap tidak terlalu kaku soal urusan modifikasi komunitas, kendati pada saat yang sama Rockstar Games sudah resmi menetapkan bahwa GTA 6 bakal meluncur perdana hanya untuk konsol PlayStation 5 dan Xbox Series X/S tanpa kepastian rilis PC sama sekali.

![Tangkapan layar grafis GTA 6 dan potret CEO Take-Two Strauss Zelnick dalam sesi paparan investor](https://cdn.mos.cms.futurecdn.net/Er7sxeh8RRbBBp8GXXPfsC-1920-80.jpg)

Mendengar seorang eksekutif bursa saham mengklaim pengalaman bermain di PC dan konsol sama saja rasanya seperti mendengar penjual mobil bekas yang menyamakan sensasi mengendarai gerobak dorong dengan mobil sedan sport. Siapa pun yang pernah terjun ke dunia GTA Online paham betul bahwa denyut nadi terpanas dari komunitas game ini justru ditenagai oleh kejeniusan para kreator modding PC lewat platform FiveM. Merekalah yang menciptakan skenario roleplay polisi versus gangster, merancang mekanik pekerjaan kota virtual, dan menghidupkan ekosistem streaming video yang ditonton miliaran kali di jagat internet. Di konsol, pemain cuma disodori gameplay baku bawaan pabrik dengan batasan sistem yang kaku. Mengabaikan jurang perbedaan kultur teknis tersebut adalah bukti nyata betapa berjaraknya pemikiran petinggi korporasi dari denyut nadi komunitas pemain yang sesungguhnya.

Tentu saja, dalih menyamakan PC dan konsol ini hanyalah topeng pemanis untuk menutupi siasat dagang lama yang licik. Penerbit game raksasa sengaja menunda versi PC demi memicu gelombang pembelian ganda (double dipping). Mereka tahu betul banyak gamer berkantong tebal yang tidak sabar dan terpaksa membeli konsol baru beserta kaset game versi standar, lalu setahun kemudian dipaksa membeli ulang game yang sama di Steam demi mencicipi kualitas grafis 4K tanpa batasan. Manuver ini selaras dengan [pesta dividen triliunan rupiah dari pemesanan GTA 6](/take-two-bidik-rp55-triliun-dari-gta-6-tapi-wall-street-masih) yang baru saja dipamerkan Take-Two di hadapan investor Wall Street, di mana angka pemesanan fantastis dijadikan panggung pembuktian keserakahan laba. Ironisnya, di tengah perlakuan tidak adil tersebut, [sikap tabah gamer PC menolak beli konsol demi menunggu GTA 6](/ketika-mayoritas-gamer-pc-rela-pasang-badan-menunggu-gta-6) justru memperlihatkan bahwa loyalitas pemain sejati tidak bisa dibeli dengan gertakan taktik penundaan rilis.

Perlakuan setengah hati terhadap gamer PC ini kian menegaskan bahwa di mata korporasi hiburan multinasional, komunitas pemain hanyalah angka-angka konversi statistik pada lembar neraca tahunan. Komunitas modder yang telah berjasa menjaga GTA 5 tetap relevan dan menghasilkan miliaran dolar selama satu dekade terakhir mendadak dianggap angin lalu saat proyek baru hendak dipasarkan ke publik bursa. Para petinggi studio lebih memilih mengunci pintu ekosistem demi mengamankan kontrak eksklusivitas jangka pendek bersama pemilik platform konsol daripada menghormati dedikasi jutaan gamer PC yang setia membesarkan waralaba mereka.

Jika bos Take-Two memang tulus percaya bahwa pengalaman bermain di konsol dan komputer itu sama saja, mengapa mereka tidak berani merilis GTA 6 secara serentak di platform PC sejak hari pertama peluncuran? Sebelum para pialang Wall Street kembali mendikte cara pemain menikmati sebuah karya seni interaktif, ada baiknya para eksekutif itu meluangkan waktu sejenak menengok warung internet dan kamar kos para gamer PC. Di sana, mereka akan menyadari bahwa bermain game di komputer bukan sekadar menekan tombol kontroler di depan televisi, melainkan tentang kebebasan mengeksplorasi batas teknologi tanpa harus didikte oleh kalkulasi rakus para pemegang saham.`
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
      markAsSeen(art.sourceUrl.trim());
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi 11:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261110-1100.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
