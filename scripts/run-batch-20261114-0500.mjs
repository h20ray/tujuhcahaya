import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Pioner Gulung Tikar Kurang dari Setahun Bukti Janji Manis Survival Cuma Angin Surga",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Pioner", "Game Survival", "PC Gaming", "Industri Game", "Steam", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/BBZv25a4mg7z9HrBRBStEj-1920-80.jpg",
    imageAlt: "Tangkapan layar karakter bersenjata laras panjang menjelajahi kawasan anomali Soviet dalam game Pioner",
    sourceUrl: "https://www.pcgamer.com/games/fps/a-survival-game-we-once-called-stalker-and-tarkovs-alien-baby-is-closing-down-less-than-a-year-after-launch/",
    excerpt: "Game survival MMO Pioner resmi gulung tikar dan mematikan servernya kurang dari setahun sejak rilis di Steam. Pengembang GFAGames kehabisan dana investor, menyisakan tumpukan janji manis dan kekecewaan pemain.",
    content: `Ada siklus musiman yang sangat akrab di telinga para penikmat game PC, terutama mereka yang punya hobi begadang di kamar kos sembari menatap etalase toko Steam. Semuanya selalu berawal dari sebuah video trailer berdurasi dua menit yang memamerkan visual grafis memukau: kilau genangan air hujan yang memantulkan cahaya senja, reruntuhan gedung bergaya Uni Soviet yang angker, suara kokangan senapan laras panjang yang renyah, dan sosok monster mutan menyeramkan yang melompat dari balik semak belukar. Narasi promosi pun langsung disebar ke seantero jagat maya dengan bumbu hiperbola yang menggiurkan. Game tersebut lantas dijuluki sebagai perkawinan silang paling sempurna antara keangkeran alam liar S.T.A.L.K.E.R. dan ketegangan mekanik bertahan hidup ala Escape from Tarkov. Ratusan ribu gamer yang haus petualangan langsung terpancing memasukkan judul tersebut ke dalam daftar wishlist, sembari membayangkan sensasi menjelajahi dunia anomali bersama kawan satu tongkrongan warkop.

Mimpi indah berbalut visual sinematik itulah yang baru saja berakhir dengan suara debak pintu tertutup rapat. Sebagaimana dicatat dalam laporan PC Gamer pekan ini, game tembak-menembak bertahan hidup daring bertajuk Pioner resmi mengumumkan penghentian total seluruh proses pengembangan sekaligus mematikan server permainan mereka. Padahal, game ambisius garapan studio GFAGames ini belum genap satu tahun mencicipi status early access sejak pertama kali dilepas ke publik pada akhir tahun 2025 lalu. Melalui pengumuman tertulis di forum Steam, pihak pengembang mengakui terus terang bahwa mereka gagal mengamankan kucuran dana segar dari mitra investor lama maupun calon penyuntik modal baru. Tanpa uang operasional di brankas studio, mereka tidak lagi sanggup membayar biaya sewa server bulanan, apalagi menuntaskan janji pembaruan besar versi 2.0 yang sempat digadang-gadang bakal menyulap game ini menjadi mahakarya multipemain sejati.

Bagi komunitas gamer yang sudah kenyang asam garam di industri hiburan digital, drama kematian dini Pioner sesungguhnya bukan hal yang mengejutkan, melainkan sebuah tragedi klise yang terus berulang tanpa pernah ada yang mau belajar. Saat pertama kali membuka pintu akses awal, game ini sempat mencatat lonjakan pemain bersamaan hingga hampir seribu tujuh ratus orang di Steam. Namun angka pembuka yang lumayan tersebut segera menguap begitu para pemain sadar bahwa isi di dalam permainan jauh panggang dari api jika dibandingkan dengan rekaman promosi yang diedit sedemikian rupa. Permainan dipenuhi aneka bug mekanik, optimalisasi frame rate yang kedodoran di komputer kelas menengah, serta loop gameplay yang cepat terasa hampa setelah beberapa jam dimainkan. Situasi menyedihkan ini mengingatkan kita pada [kebiasaan studio game yang gemar menebar janji kosong](/xbox-pamer-naskah-wolfenstein-3-saat-gamer-pc-sudah-kenyang-janji), di mana para petinggi proyek lebih gemar menjajakan konsep naskah di awang-awang ketimbang membuktikan ketangguhan teknis produk di hadapan pemain nyata.

![Tangkapan layar karakter bersenjata laras panjang menjelajahi kawasan anomali Soviet dalam game Pioner](https://cdn.mos.cms.futurecdn.net/BBZv25a4mg7z9HrBRBStEj-1920-80.jpg)

Skema early access di platform komputer kini kian bergeser maknanya dari wadah kolaborasi tulus antara pengembang independen dan komunitas menjadi tameng pelindung bagi manajemen studio yang ceroboh. Pengembang menjual naskah mentah dengan harga penuh, lalu berlindung di balik label pengembangan berjalan tiap kali pemain memprotes cacat teknis yang fatal. Begitu kas kasir mengering dan jumlah pemain aktif harian menyusut tajam ke angka belasan, manajemen tinggal mengetik surat permohonan maaf puitis berlatar belakang hitam, lalu melenggang pergi meninggalkan server yang padam. Pola cuci tangan ini melahirkan luka psikologis yang persis sama dengan [kekecewaan pemain saat membeli kotak fisik yang isinya cuma selembar kode unduhan](/ketika-kotak-fisik-gta-6-mulai-beredar-tapi-isinya-cuma-selembar), di mana uang hasil jerih payah bekerja yang disisihkan dengan ikhlas oleh para pemain cuma diganjar dengan selembar ilusi kepemilikan yang tidak pernah terwujud nyata.

Di warung kopi tempat gamer berkumpul membicarakan koleksi perpustakaan Steam mereka, bangkai Pioner kini tinggal menjadi bahan obrolan sarkastis yang disambut tawa getir. Kita diajarkan pelajaran mahal bahwa tidak ada trailer game yang terlalu indah untuk dipercaya begitu saja, apalagi jika pengembangnya berani menjanjikan revolusi industri hanya bermodalkan video cuplikan pra-render. Menatap judul game seharga ratusan ribu rupiah yang kini cuma menjadi ikon mati tak berguna di sudut layar monitor adalah hukuman bagi rasa optimisme kita yang kelewat murah. Besok lusa, ketika ada studio antah-berantah lain yang kembali memamerkan game penembak anomali pasca-kiamat dengan embel-embel grafis tercanggih, barangkali langkah paling waras bagi dompet kita adalah segera menutup jendela toko dan kembali memainkan game lama yang servernya terbukti tidak kabur saat kehabisan bensin.`
  },
  {
    title: "OpenAI Pasang Dompet di Chatbot Supaya Agen AI Bisa Belanja Pakai Saldo Kita",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["OpenAI", "ChatGPT", "Kecerdasan Buatan", "Dompet Digital", "Teknologi", "Elang Elano"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/10/STKS539_AI_AGENTS_SHOPPING_B.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Ilustrasi dompet digital dan keranjang belanja online yang dikendalikan oleh agen kecerdasan buatan",
    sourceUrl: "https://www.theverge.com/ai-artificial-intelligence/1033425/openai-chatgpt-wallet",
    excerpt: "OpenAI meluncurkan fitur ChatGPT Wallet yang memungkinkan agen AI Dots berbelanja secara mandiri di internet. Ambisi otomatisasi ini terdengar canggih di atas kertas, namun berisiko menguras isi rekening pengguna.",
    content: `Bagi siapa saja yang saban hari duduk di depan laptop kantor sembari mengotak-atik perintah teks ke dalam jendela obrolan kecerdasan buatan, kita tentu paham betul kadar kemampuan piranti tersebut. Di satu detik, model bahasa buatan Silicon Valley itu bisa memuntahkan bait puisi puitis dalam hitungan kejap. Namun di detik berikutnya saat disuruh merangkum tabel pengeluaran kas kantor atau menjumlahkan angka pecahan sederhana, ia malah melontarkan hasil halusinasi yang bikin geleng-geleng kepala. Jangankan disuruh mengurus urusan hidup dan mati, disuruh membedakan mana fakta sejarah dan mana karangan fiksi saja bot ini masih kerap bertingkah seperti mahasiswa magang yang panik dikejar tenggat skripsi. Lucunya, di tengah rentetan kelemahan elementer yang belum juga tuntas dibereskan tersebut, para petinggi laboratorium AI di San Francisco kini justru punya ide yang jauh lebih berani: bagaimana kalau kita pasangi dompet digital di badan sang chatbot dan kita biarkan ia belanja sendiri di internet menggunakan kartu kredit kita?

Gagasan menggelikan itulah yang kini resmi diwujudkan ke dunia nyata oleh Sam Altman dan pasukannya. Sebagaimana dicatat dalam laporan The Verge pekan ini, OpenAI resmi menggulirkan fitur anyar bernama ChatGPT Wallet. Fitur ini dirancang khusus untuk memberi amunisi finansial bagi jajaran agen AI otonom mereka yang berjuluk Dots. Mekanismenya terdengar muluk sekaligus bikin bulu kuduk berdiri. Pengguna cukup memasukkan data kartu pembayaran mereka sekali saja ke dalam sistem. Nantinya ketika agen AI tersebut ditugaskan berselancar di rimba toko daring untuk memburu barang atau tiket perjalanan, sang bot bisa langsung melenggang menuju meja kasir virtual dan mengeksekusi transaksi secara mandiri. OpenAI berdalih bahwa mereka telah menggandeng jaringan pembayaran global macam Visa, Mastercard, dan American Express untuk membuat token enkripsi khusus agar data nomor kartu asli tidak bocor ke penjual. Untuk tahap awal, pengguna memang masih diwajibkan menempelkan sidik jari atau memindai wajah lewat sensor biometrik sebelum pembayaran disahkan. Namun ambisi jangka panjang mereka sudah sangat gamblang: menciptakan ekosistem belanja otomatis di mana agen AI bebas menggesek saldo rekening tanpa perlu campur tangan manusia lagi.

Melihat manuver OpenAI ini, kita sulit untuk tidak tersenyum sinis di meja warkop. Lembah Silikon tampaknya tidak pernah kehabisan akal untuk menciptakan solusi canggih bagi persoalan yang sebenarnya tidak pernah diminta oleh umat manusia. Mereka berasumsi bahwa penderitaan terbesar masyarakat modern hari ini adalah rasa lelah karena harus mengetik nomor CVV kartu debit saat berbelanja celana kerja di toko daring. Padahal bagi kelas pekerja bergaji pas-pasan, musuh utama di akhir bulan bukanlah proses verifikasi kasir yang memakan waktu tiga puluh detik, melainkan saldo rekening yang kerap menipis sebelum tanggal gajian tiba. Memberikan wewenang belanja kepada algoritma yang bahkan belum bisa membedakan diskon asli dan jebakan promosi palsu adalah resep instan menuju bencana finansial rumah tangga. Kecerobohan menyerahkan kendali keuangan kepada mesin pintar ini sejalan dengan fenomena [kehilangan saldo tabungan gara-gara celah keamanan](/bangga-punya-iphone-anti-sadap-padahal-rekening-tetap-amblas-kena), di mana rasa percaya diri berlebih terhadap kecanggihan teknologi pada akhirnya cuma menyisakan tangisan penyesalan saat uang tabungan lenyap tanpa jejak.

![Ilustrasi dompet digital dan keranjang belanja online yang dikendalikan oleh agen kecerdasan buatan](https://platform.theverge.com/wp-content/uploads/sites/2/2026/10/STKS539_AI_AGENTS_SHOPPING_B.jpg?quality=90&strip=all&crop=0,0,100,100)

Kekacauan ini kian benderang saat kita menengok reaksi dari para pemilik toko retail di dunia nyata. Alih-alih menyambut gembira serbuan pasukan bot belanja OpenAI, raksasa e-commerce seperti Amazon hingga maskapai United Airlines justru kompak memasang barikade pertahanan digital. Mereka memblokir agen AI yang mencoba merayapi sistem mereka karena khawatir server toko bakal tumbang dihantam jutaan permintaan otomatis yang rakus kuota. Situasi saling jegal antara raksasa teknologi ini memperlihatkan betapa kacaunya lanskap digital modern saat [histeria korporasi yang latah membenamkan otomatisasi](/faa-bangga-pasang-ai-di-langit-amerika-tapi-lupa-ajak-serikat) bertabrakan dengan kesiapan infrastruktur nyata di lapangan. Di atas panggung seminar promosi, agen AI digambarkan sebagai asisten pribadi serba bisa yang setia meringankan beban hidup tuannya. Namun di balik layar peranti keras, ia tak lebih dari sekadar program bot scraping agresif yang berpotensi memborong barang salah ukuran, salah warna, atau salah alamat pengiriman hanya karena salah mengartikan secuil kalimat perintah dari tuannya.

Pada akhirnya, dompet digital di tangan chatbot bukanlah bukti kemajuan peradaban, melainkan puncak kemalasan industri yang kehabisan ide segar untuk memeras dompet penggunanya. Selama bertahun-tahun kita dicekoki narasi bahwa kecerdasan buatan diciptakan untuk menggantikan pekerjaan manusia yang berat, kotor, dan berbahaya. Namun kenyataan pahit yang kini tersaji di depan mata justru sebaliknya: manusia tetap disuruh membanting tulang peras keringat di bilik kantor sampai punggung remuk, sementara sang chatbot santai berleha-leha di internet sembari asyik menghabiskan sisa limit kartu kredit kita untuk berbelanja barang yang sama sekali tidak kita perlukan.`
  }
];

async function runBatch() {
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
      markAsSeen(art.sourceUrl);
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch 05:00 selesai! Total artikel terbit: ${results.length}`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261114-0500.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Batch run failed:", err);
      process.exit(1);
    });
}
