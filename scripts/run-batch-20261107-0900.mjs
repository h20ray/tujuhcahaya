import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Seniman Game Lebih Memilih Ditinggal Zaman Ketimbang Menyembah Mesin AI",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Epic Games", "Tim Sweeney", "Industri Game", "Seniman Game", "Kecerdasan Buatan", "PC Gaming"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/QAh2KbRTQ6Y9BSbgacF6VT-1920-80.jpg",
    imageAlt: "Ilustrasi konsep karya seni digital buatan tangan manusia yang berhadapan dengan estetika kecerdasan buatan",
    sourceUrl: "https://www.pcgamer.com/software/ai/the-ai-posting-war-is-heating-up-please-leave-me-behind-says-artist-who-got-into-it-with-epic-ceo-tim-sweeney-on-x/",
    excerpt: "CEO Epic Games Tim Sweeney sibuk menceramahi seniman di media sosial bahwa menolak AI adalah bunuh diri. Jawaban seorang ilustrator game justru membungkam arogansi itu: silakan tinggalkan saya di belakang, biarkan saya tetap menggambar dengan tangan manusia.",
    content: `Kalau Anda sering nongkrong di warung kopi bersama kawan-kawan pekerja kreatif atau komunitas gamer yang saban malam begadang di depan tablet grafis, ada satu topik obrolan yang belakangan ini sukses bikin tensi darah naik mendadak: khotbah para petinggi teknologi Silicon Valley tentang kewajiban tunduk pada kecerdasan buatan. Tiap kali ada miliarder teknologi yang menggelar siaran langsung atau menulis utas panjang di media sosial, intonasinya hampir selalu sama dengan mandor proyek galak yang menakut-nakuti kuli bangunan: kalau tidak segera merangkul mesin pembuat gambar otomatis, kalian bakal punah digilas zaman.

Perang urat syaraf antara juragan korporasi dan seniman akar rumput ini baru saja meledak kembali menjadi tontonan publik yang panas. Sebagaimana dicatat dalam laporan PC Gamer pekan ini, nahkoda tertinggi Epic Games sekaligus empunya mesin grafis Unreal Engine, Tim Sweeney, terlibat perselisihan sengit di linimasa media sosial X dengan komunitas ilustrator game. Sweeney dengan nada menggurui menyamakan para penolak generator gambar AI dengan kelompok fotografer abad ke-19 yang sempat memusuhi kamera portabel. Menurut logikanya yang serba biner, menolak memakai generator prompt dalam alur kerja seni digital adalah tindakan konyol yang bakal membuat seorang kreator terbuang ke tong sampah sejarah.

Namun alih-alih panik atau meminta belas kasihan sang konglomerat, salah seorang seniman konsep game independen kawakan, Reid Southen, membalas ceramah Sweeney dengan kalimat ringkas yang seketika viral dan menusuk ulu hati: "Tolong, tinggalkan saja saya di belakang."

Southen menegaskan bahwa ia sama sekali tidak berminat ikut balapan mengejar metrik kecepatan artifisial yang diobral para penjual teknologi. Ia memilih tetap duduk berjam-jam membuat sketsa kasar dari nol, menikmati rasa pegal di pergelangan tangan saat memadukan palet warna, dan membiarkan ketidaksempurnaan manusiawi menjadi napas utama dari setiap goresan kanvas digitalnya.

![Ilustrasi konsep karya seni digital buatan tangan manusia yang berhadapan dengan estetika kecerdasan buatan](https://cdn.mos.cms.futurecdn.net/QAh2KbRTQ6Y9BSbgacF6VT-1920-80.jpg)

Bagi siapa pun yang mencermati tabiat industri game modern, arogansi Tim Sweeney sebetulnya sangat mudah ditebak muaranya. Di balik jargon puitis soal demokratisasi kreativitas, agenda sejati korporasi raksasa adalah efisiensi anggaran belanja upah. Para pemegang saham dan direksi studio game AAA sudah lama bermimpi memangkas divisi seni visual—yang selama ini memakan porsi gaji bulanan cukup besar—lalu menggantikannya dengan segelintir operator prompt yang digaji murah.

Ironi pahit ini memperlihatkan kembali bagaimana industri hiburan memandang manusia sebagai angka statistik yang bisa dibuang sewaktu-waktu. Pola pencampakkan dedikasi ini terasa sangat familiar bila kita menengok catatan duka saat [wajah komunitas game dicampakkan setelah habis manis sepah dibuang](/ketika-wajah-komunitas-game-dicampakkan-setelah-habis-manis-sepah), di mana tenaga kerja lapangan yang membangun reputasi karya bertahun-tahun langsung diputus kontrak kerjanya demi mempercantik margin laporan keuangan kuartalan.

Ambisi korporat memaksakan efisiensi mesin ini juga mengingatkan kita pada kekacauan manajerial ketika [ribuan gamer memohon pemerintah menyelamatkan studio legendaris](/ketika-ribuan-gamer-memohon-pemerintah-kanada-selamatkan-bioware). Setiap kali manajemen puncak studio lebih sibuk mengejar tren teknologi demi memikat investor ketimbang merawat keahlian para perajin karyanya, produk akhir yang lahir biasanya hanyalah game hampa tanpa jiwa yang kehilangan pesona artistik aslinya.

Para bos penerbit game boleh saja bermimpi menciptakan dunia virtual raksasa hanya bermodalkan ketikan perintah teks di terminal server. Namun mereka sering lupa bahwa gamer tidak pernah jatuh cinta pada kecepatan kalkulasi kartu grafis; gamer jatuh cinta pada keringat, rasa cinta, dan emosi jujur para seniman manusia yang menyuntikkan nyawa ke dalam setiap sudut kota fiktif dan tatapan mata karakter yang kita mainkan.

Jadi ketika Tim Sweeney mengancam bakal meninggalkan siapa pun yang menolak menyembah mesin, ia mungkin tidak sadar bahwa para seniman dan gamer justru merasa lega. Sebab tertinggal di belakang sembari menjaga martabat karya tangan sendiri masih jauh lebih mulia daripada berlari kencang ke jurang bersama para juragan yang bahkan tak paham nikmatnya memegang kuas lukis.`
  },
  {
    title: "Ketika Bos Nvidia Jensen Huang Dibuntuti Mata-Mata Berkedok Rekan Bisnis",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Jensen Huang", "Nvidia", "Kecerdasan Buatan", "Spionase", "Perang Dagang", "Semikonduktor"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/07/STKP210_JENSEN_HUANG_A.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "CEO Nvidia Jensen Huang mengenakan jaket kulit hitam khasnya di sebuah acara teknologi",
    sourceUrl: "https://www.theverge.com/tech/1029338/nvidia-ceo-jensen-huang-china-spy",
    excerpt: "Badan intelijen China dilaporkan merekrut eksekutif startup AI demi memata-matai bos Nvidia Jensen Huang. Perang chip kecerdasan buatan kini tak lagi cuma soal paten dan bursa saham, tapi sudah menjelma drama spionase dingin.",
    content: `Jika Anda kerap menonton film spionase jadul di televisi, sosok mata-mata internasional biasanya digambarkan dengan gaya stereotip: mengenakan mantel panjang berkerah tinggi, memakai kacamata hitam di tengah kegelapan malam, dan berdiri mencurigakan di sudut stasiun kereta berkabut sembari menyelipkan amplop cokelat rahasia. Namun di era perlombaan silikon komputasi awan saat ini, operasi telik sandi antarnegara ternyata beroperasi dengan setelan yang jauh lebih necis: kartu nama eksekutif startup bergengsi, undangan makan malam di restoran mewah Silicon Valley, dan senyum ramah seorang rekan bisnis yang paham istilah teknis pemrosesan grafis.

Dunia intelijen modern yang dingin itulah yang kini menyeret figur paling populer di jagat kecerdasan buatan, Jensen Huang. Sebagaimana dicatat dalam laporan investigasi The New York Times dan ulasan The Verge pekan ini, Kementerian Keamanan Negara China (MSS) dilaporkan merekrut seorang eksekutif perusahaan teknologi Megaspeed bernama Alice Huang untuk mendekati sang CEO Nvidia. Tujuannya bukan untuk mencuri dompet atau meretas kata sandi email kantor, melainkan mengumpulkan kepingan informasi rahasia mengenai arsitektur chip kecerdasan buatan tercanggih Amerika Serikat, sekaligus memengaruhi arah kebijakan pabrikan semikonduktor raksasa tersebut agar mau melonggarkan suplai prosesor mutakhir mereka ke daratan Tiongkok.

Kabar spionase tingkat tinggi ini seketika meruntuhkan citra glamor konferensi teknologi global. Selama beberapa tahun terakhir, Jensen Huang terbiasa berkeliling panggung dunia bak bintang rock panggung hiburan. Dengan jaket kulit hitamnya yang legendaris, ia membagikan tanda tangan di atas cangkang laptop mahasiswa, memamerkan grafik penjualan server yang tembus rekor triliunan rupiah, dan mengumandangkan masa depan baru di mana kecerdasan buatan bakal menyelesaikan segala problematika peradaban.

Namun di belakang tirai lampu sorot tersebut, lempengan silikon rancangan Nvidia sejatinya telah bermutasi menjadi komoditas geopolitik paling berbahaya di muka bumi, setara dengan cadangan minyak mentah atau hulu ledak militer pada abad lalu.

![CEO Nvidia Jensen Huang mengenakan jaket kulit hitam khasnya di sebuah acara teknologi](https://platform.theverge.com/wp-content/uploads/sites/2/2026/07/STKP210_JENSEN_HUANG_A.jpg?quality=90&strip=all&crop=0,0,100,100)

Kisah operasi rahasia ini menghadirkan satir tajam bagi para pegiat teknologi. Para petinggi Silicon Valley selama ini gemar mengkhotbahkan globalisasi terbuka dan keterhubungan tanpa batas, seolah teknologi adalah entitas suci yang kebal dari kepentingan politik kekuasaan. Nyatanya, ketika sebuah negara merasa terancam tertinggal dalam perlombaan komputasi super, batas etika bisnis seketika dirobek. Mereka tidak segan-segan mengerahkan agen spionase formal untuk membayangi setiap gerak-gerik sang nahkoda korporasi semikonduktor.

Kerapuhan ekosistem semikonduktor bernilai fantastis ini semakin mempertegas ironi yang tempo hari terjadi saat [muatan chip mutakhir Nvidia senilai ratusan miliar mendadak raib di jalan tol](/ketika-chip-nvidia-senilai-ratusan-miliar-raib-tanpa-jejak-di). Ketika pasokan komputasi menjadi barang langka yang diburu dari segala penjuru mata angin, celah keamanannya tidak selalu datang dari peretasan baris kode di dunia maya, melainkan dari kerapuhan manusiawi di alam fisik: mulai dari sopir truk kargo yang dicegat komplotan kriminal hingga rekan makan malam yang diam-diam menyetor laporan berkala ke dinas intelijen negara asing.

Peristiwa ini juga menjadi alarm pengingat bahwa bahkan institusi forensik dan intelijen yang paling disegani pun bisa kecolongan, persis seperti skandal memalukan saat [perusahaan forensik pelacak hacker sedunia malah ikut dibobol maling](/ketika-perusahaan-forensik-pelacak-hacker-sedunia-malah-ikut). Klaim tentang keamanan sistem yang sempurna pada akhirnya selalu bertekuk lutut di hadapan taktik manipulasi sosial (*social engineering*) yang lihai.

Bagi kita yang sehari-hari berkutat mengurus server lokal di pojokan kantor, drama spionase Jensen Huang menyodorkan sebuah lelucon satir warkop yang menggelitik. Jika kelak ada teman lama atau kenalan baru yang mendadak mengajak nongkrong di kafe mahal sembari getol menanyakan spesifikasi kartu grafis dan peta topologi jaringan kantor kita, jangan terburu-buru merasa bangga bahwa keahlian teknis kita sedang diapresiasi tinggi.

Siapa tahu, kawan ramah yang memesankan segelas kopi latte itu bukan sedang mencari partner proyek sampingan, melainkan seorang agen intelijen lepas yang kebetulan sedang dikejar tenggat laporan kuartalan oleh kantor dinas rahasianya.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 09:00 WIB)");
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
    }

    results.push({
      title: art.title,
      slug: pubResult.slug,
      status: pubResult.status,
      score: audit.score,
      wordCount,
      url: pubResult.url,
      byline: art.byline,
      dbSaved: pubResult.dbSaved,
      remotePublished: pubResult.remotePublished
    });
  }

  console.log("\n=================================================================");
  console.log("🎉 SELURUH ARTIKEL BATCH BERHASIL DITERBITKAN!");
  console.log("=================================================================\n");
  console.log(JSON.stringify(results, null, 2));
}

// Execute if run directly
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261107-0900.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Failed:", err);
    process.exit(1);
  });
}
