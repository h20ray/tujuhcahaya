import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Kacamata AI Gemini Berkedok Ramah Privasi Padahal Rekam Muka Orang Sembarangan",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Google", "Samsung", "Kacamata Pintar", "Smart Glasses", "Gemini AI", "Privasi Digital", "Gadget"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2026/11/WP_ALDEN-Carousel_Lifestyle-copy-1152x648.jpg",
    imageAlt: "Model mengenakan kacamata pintar berbingkai kasual hasil kolaborasi Google dan produsen kacamata dengan sensor kamera terintegrasi",
    sourceUrl: "https://arstechnica.com/google/2026/11/google-pushes-privacy-angle-as-gemini-powered-smartglasses-debut-starting-at-395/",
    excerpt: "Google dan Samsung resmi memamerkan kacamata pintar bertenaga Gemini seharga enam juta rupiah dengan klaim mengutamakan privasi. Janji manis sensor wajah otomatis nyatanya tak mampu menutupi keresahan warga yang wajahnya ditatap kamera 12 megapiksel di ruang publik.",
    content: `Bayangkan Anda sedang duduk santai menyeruput es teh manis di warung pecel lele pinggir jalan selepas jam pulang kantor yang melelahkan. Di meja seberang, seorang pemuda necis menatap lurus ke arah Anda sambil sesekali mengangguk-angguk kecil dan bergumam sendirian. Sekilas ia tampak seperti pengunjung biasa yang sekadar memakai kacamata baca berbingkai modis. Namun di balik sudut engsel bingkai plastik tersebut, terdapat sebuah mata lensa kamera beresolusi tinggi yang diam-diam menyapu gerak-gerik Anda, merekam ekspresi muka yang kusut, dan menyetorkannya ke server kecerdasan buatan di seberang samudra. Saat Anda merasa risih dan melotot balik, sang pemakai kacamata mungkin bakal tersenyum santai sambil menyodorkan dalih bahwa gadget pintarnya sudah dilengkapi fitur privasi canggih. Selamat datang di era baru ketika hak privasi warga di ruang publik resmi dijadikan kelinci percobaan oleh para raksasa teknologi.

Kecemasan wajar ini kembali mencuat ke permukaan menyusul pengumuman resmi lini perangkat keras Intelligent Eyewear terbaru. Sebagaimana dicatat oleh tim jurnalis Ars Technica dalam laporan perdananya pekan ini, Google resmi menggandeng Samsung, Warby Parker, dan rumah mode Gentle Monster untuk meluncurkan lini kacamata pintar bertenaga asisten Gemini. Perangkat audio-visual tanpa layar display ini dilepas ke pasaran dengan harga mulai dari 395 dolar Amerika Serikat atau sekitar 6,3 juta rupiah untuk koleksi Warby Parker, hingga menembus 489 dolar untuk bingkai rancangan Gentle Monster. Di balik bobotnya yang hanya 41 gram, Samsung menanamkan chipset Qualcomm Snapdragon AR1 Gen 1, kamera ultra-wide 12 megapiksel berkemampuan rekam video 3K, empat mikrofon spasial, serta integrasi penuh dengan sistem operasi Android XR.

![Model mengenakan kacamata pintar berbingkai kasual hasil kolaborasi Google dan produsen kacamata dengan sensor kamera terintegrasi](https://cdn.arstechnica.net/wp-content/uploads/2026/11/WP_ALDEN-Carousel_Lifestyle-copy-1152x648.jpg)

Sadar betul bahwa produk berkamera di wajah selalu dihantui trauma masa lalu era Google Glass yang sempat dicap memalukan oleh publik, Google kali ini mati-matian memainkan narasi perlindungan privasi. Dalam materi pemasarannya, raksasa mesin pencari itu mengeklaim telah menyematkan fitur peredam wajah otomatis (bystander face redaction) yang konon bakal menyamarkan wajah orang-orang di sekitar sebelum data gambar diproses oleh server Gemini. Mereka juga berjanji tidak akan menyimpan tangkapan visual ke riwayat akun atau menggunakannya untuk melatih model iklan, ditambah lampu indikator LED putih tahan sabotase yang bakal mematikan kamera bila lensanya ditutup selotip. Namun, menjanjikan rasa aman berbasis algoritma buatan perusahaan periklanan terbesar di dunia sungguh terdengar seperti serigala yang berjanji menjaga pintu kandang domba. Lampu LED sekecil biji beras sama sekali tidak memberi jaminan bahwa rekaman visual tidak disalahgunakan, apalagi meminta persetujuan sadar dari orang-orang asing yang kebetulan berpapasan di jalan.

Bagi masyarakat biasa yang saban hari berdesak-desakan di gerbong KRL Commuter Line atau antre busway, kehadiran kamera pengintai yang menyamar sebagai aksesoris fesyen adalah bentuk pelecehan terhadap ruang personal. Kita tidak pernah tahu apakah orang di depan kita sedang mendengarkan musik atau sedang merekam wajah anak kita untuk dianalisis oleh bot. Obsesi Big Tech memasukkan perangkat mata-mata ke ranah privat ini mengingatkan kita pada fenomena serupa ketika [Amazon nekat menerbangkan kamera di ruang tamu](/amazon-terbangkan-drone-ring-di-ruang-tamu-menandai-tamatnya) demi menjual mimpi keamanan semu, di mana kenyamanan warga selalu dikorbankan demi ambisi korporasi mengumpulkan data perilaku manusia secara masif. Ditambah lagi dengan rekam jejak [sensor wearable yang sering bikin panik pengguna](/sensor-jantung-smartwatch-sering-ngawur-bikin-warga-sehat-kena) dengan aneka diagnosis ngawur, menyerahkan persepsi visual sehari-hari ke asisten digital yang doyan berhalusinasi adalah lelucon yang kelewat mahal.

Jika melihat tren ini, tampaknya kita harus bersiap menghadapi babak baru pergaulan sosial yang serba curiga dan melelahkan. Dulu kita hanya perlu waspada pada dompet yang terselip di kantong celana saat berada di keramaian; kini kita dituntut waspada pada setiap pasang mata berkacamata hitam yang menatap kita terlalu lama di lampu merah. Menempelkan kamera 12 megapiksel di batang hidung lalu mengklaimnya ramah privasi itu ibarat menyetel petasan di ruang tamu lalu berpesan agar penghuni rumah jangan kaget saat ledakan terjadi. Sebelum Anda tergiur merogoh tabungan enam juta rupiah demi kacamata pintar ini, ada baiknya tanyakan dulu pada diri sendiri: apakah hidup Anda benar-benar begitu hampa sampai-sampai menyapa orang di warung kopi saja masih butuh panduan dari chatbot?`
  },
  {
    title: "Call of Duty Bayar Conor McGregor Cuma Buat Banting Sutradara di Panggung Mo-Cap",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Call of Duty", "Conor McGregor", "Infinity Ward", "Activision", "PC Gaming", "Industri Game", "Budaya Gamer"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/7eeissVNyfbgehTuYCLKah-1920-80.jpg",
    imageAlt: "Cuplikan karakter Conor McGregor dalam balutan seragam militer futuristik pada game Call of Duty Infinite Warfare",
    sourceUrl: "https://www.pcgamer.com/games/call-of-duty/conor-mcgregor-picked-up-and-flipped-a-call-of-duty-dev-during-the-making-of-infinite-warfare-i-wanted-him-to-do-something-really-physical-to-demonstrate-how-capable-he-is/",
    excerpt: "Activision rela mengucurkan jutaan dolar demi merekrut bintang UFC Conor McGregor ke Call of Duty hanya untuk mati konyol di cutscene prolog. Nostalgia absurd di panggung motion capture membuktikan obsesi publisher memanjakan gimmick ketimbang membenahi game.",
    content: `Ada kebiasaan menggelikan dari para raksasa penerbit game blockbuster yang saban tahun tak pernah gagal bikin geleng-geleng kepala para gamer di tongkrongan rental: sindrom pamer bintang Hollywood. Alih-alih memeras keringat untuk meracik kecerdasan musuh yang cerdik, membasmi kutu pemrograman yang bersarang di kartu grafis, atau menambal sistem anti-cheat yang bolong-bolong, para petinggi korporasi game triple-A lebih suka menghamburkan ratusan miliar rupiah demi merekrut selebritas papan atas ke dalam proyek mereka. Logikanya sederhana sekaligus picik: tempelkan wajah pesohor dunia di poster promosi dan trailer YouTube, maka jutaan pemain kasual bakal berbondong-bondong menyodorkan dompet tanpa peduli apakah mekanika tembak-menembak di dalamnya terasa hambar seperti mengunyah kardus basah.

Kisah konyol di balik taktik belanja selebritas ini baru saja diungkap kembali secara blak-blakan oleh para pembuatnya sendiri. Sebagaimana dicatat oleh jurnalis Harvey Randall dalam wawancara kilas balik di PC Gamer pekan ini, sutradara naratif Taylor Kurosaki dan Jordan Hirsh mengenang momen gila saat mereka menggarap Call of Duty: Infinite Warfare pada 2016 silam. Demi mendongkrak pamor seri bertema luar angkasa tersebut, studio Infinity Ward nekat merekrut petarung bebas UFC paling sensasional di dunia, Conor McGregor, untuk memerankan tokoh antagonis Captain Bradley Fillion. Tak tanggung-tanggung, studio bahkan membangun panggung penangkap gerak tubuh alias performance capture khusus bernilai fantastis agar sang atlet MMA bisa beraksi secara total. Saat sesi latihan koreografi, Kurosaki meminta McGregor mendemonstrasikan kebolehan fisiknya secara nyata. Tanpa basa-basi, McGregor langsung mencengkeram tubuh sang sutradara, membantingnya ke lantai matras, lalu melayangkan tinju kilat berkecepatan penuh yang berhenti tepat beberapa milimeter di depan hidung Kurosaki hingga desau angin pukulannya terasa membakar kulit muka sang pengarah adegan.

![Cuplikan karakter Conor McGregor dalam balutan seragam militer futuristik pada game Call of Duty Infinite Warfare](https://cdn.mos.cms.futurecdn.net/7eeissVNyfbgehTuYCLKah-1920-80.jpg)

Namun di balik adegan heroik yang bikin nyali sutradara ciut di panggung motion capture tersebut, apa yang sesungguhnya didapatkan oleh para gamer di layar monitor? Sungguh sebuah kepalsuan yang antiklimaks. Karakter Bradley Fillion yang diperankan McGregor ternyata hanya muncul sekelumit di babak pembuka permainan, melontarkan beberapa patah kalimat gertak sambal dengan logat Irlandia yang kental, sebelum akhirnya tewas terbunuh secara murahan dalam cutscene kilat tanpa pernah memberi kesempatan pada pemain untuk merasakan duel bos yang menantang. Jutaan dolar anggaran produksi hangus hanya demi menyewa petarung kelas dunia selama beberapa menit tayang. Taktik semacam ini mengulang arogansi serupa dua tahun sebelumnya saat Activision memamerkan Kevin Spacey di Call of Duty: Advanced Warfare, membuktikan betapa studio game arus utama kerap memperlakukan aktor mahal layaknya permen pemanis sesaat untuk menutupi desain kampanye yang repetitif dan dangkal.

Bagi anak-anak warnet dan gamer PC berkantong pas-pasan yang saban bulan berjuang membersihkan ruang penyimpanan SSD dari [tirani ukuran game yang menembus ratusan gigabyte](/tirani-ukuran-game-menembus-ratusan-gigabyte-mengapa-penerbit), pemborosan bujet untuk membayar bintang tamu selebritas terasa seperti tamparan yang menyakitkan. Alih-alih mengalokasikan anggaran triliunan rupiah untuk mengoptimalkan kompresi tekstur, merawat kestabilan server multiplayer, atau memangkas harga paket DLC yang makin mencekik, penerbit justru sibuk menggelar karpet merah bagi pesohor yang bahkan belum tentu pernah menyentuh stik controller seumur hidupnya. Sikap manja industri arus utama ini kian kontras saat disandingkan dengan bagaimana [karya studio game mandiri mampu memikat jutaan pemain](/crimson-desert-sabet-game-pc-terbaik-bukti-pemain-haus) murni berkat kedalaman gameplay, kebebasan eksplorasi, dan rasa hormat yang tulus kepada waktu luang para pemainnya.

Di atas panggung motion capture berteknologi tinggi, Conor McGregor mungkin sukses membuktikan kekuatannya dengan membanting sutradara ke lantai tanpa mencederai sehelai rambut pun. Namun di mata komunitas gamer yang sudah kenyang disuguhi trailer bombastis dan janji manis korporasi, yang sesungguhnya terpelanting babak belur adalah akal sehat industri game itu sendiri. Membayar mahal atlet bela diri kelas wahid cuma untuk dijadikan pajangan cutscene lima menit sama konyolnya dengan menyewa koki bintang lima Michelin hanya untuk disuruh menyeduh mi instan rebus di pos kamling. Selama publisher masih mengira bahwa tempelan wajah selebritas sanggup menggantikan sensasi gameplay yang seru dan berbobot, selama itu pula kita akan terus disuguhi game berbanderol sejuta rupiah yang megah di baliho promosi tapi keropos di tangan pemain.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 23:00 WIB)");
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
  console.log(`🎉 Batch 23:00 selesai! Total artikel terbit: ${results.length}`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261112-2300.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Batch Execution Error:", err);
      process.exit(1);
    });
}
