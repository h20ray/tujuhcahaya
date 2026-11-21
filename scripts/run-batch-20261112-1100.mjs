import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Dewan Direksi Nvidia Bersiap Depak Jensen Huang Saat Jaket Kulitnya Mulai Luntur",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Nvidia", "Jensen Huang", "Hardware", "Kecerdasan Buatan", "Silicon Valley", "Elang Elano"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/kR74yfqcmziKrBhAhFUNAd-1920-80.jpg",
    imageAlt: "Potret Jensen Huang mengenakan jaket kulit hitam khasnya dalam sebuah konferensi teknologi",
    sourceUrl: "https://www.pcgamer.com/software/ai/nvidia-ceo-jensen-huang-allegedly-had-a-second-affair-with-another-nvidia-exec/",
    excerpt: "Kabar mengejutkan berembus kencang dari Silicon Valley saat dewan direksi Nvidia dikabarkan bersiap melengserkan Jensen Huang usai mencuatnya skandal internal. Sosok yang selama ini dipuja sebagai nabi revolusi AI mendadak mendapati kursinya sendiri goyah di tangan para petinggi perusahaan.",
    content: `Ada pemandangan menggelitik yang kerap berulang di panggung industri komputasi modern. Tiap kali seorang petinggi korporasi mulai dielu-elukan layaknya manusia setengah dewa, membubuhkan tanda tangan di baju para penggemar, dan mengenakan seragam busana ikonik yang sama selama belasan tahun, saat itulah alarm bahaya di ruang rapat dewan direksi semestinya mulai berdering nyaring. Selama dua tahun terakhir, Jensen Huang adalah raja diraja yang nyaris tak tersentuh. Dengan balutan jaket kulit hitam yang legendaris, ia melenggang di berbagai panggung megah, memamerkan cip pemrosesan grafis seharga ratusan juta rupiah yang diperebutkan oleh seluruh raksasa teknologi dunia, sembari meyakinkan publik bahwa peradaban manusia sedang diselamatkan oleh gelombang kecerdasan buatan.

Namun aroma kekuasaan absolut di Silicon Valley sering kali menguap lebih cepat daripada secangkir kopi saset yang diseduh di pojok ruang server. Gempa politik korporasi berkekuatan dahsyat tiba-tiba mengguncang takhta sang maestro. Sebagaimana dicatat dalam laporan investigasi The Wall Street Journal dan kabar yang dirilis The New York Times pekan ini, dewan direksi Nvidia dikabarkan tengah menggelar serangkaian pembicaraan darurat tingkat tinggi untuk mempersiapkan langkah pendepakan Jensen Huang dari kursi kepemimpinan tertinggi perusahaan. Isu panas ini mencuat menyusul terkuaknya dugaan skandal asmara kedua yang melibatkan pejabat internal perusahaan, yang kini bahkan memicu kekhawatiran serius terkait kepatuhan hukum dan penyelidikan keamanan nasional.

Kabar ini sontak menyengat lantai bursa saham dan membikin para analis finansial kalang kabut. Maklum, selama ini valuasi pasar Nvidia yang sempat meroket menembus angka lebih dari tiga triliun dolar seolah-olah dipatok mati pada sosok pribadi sang pendiri. Pasar modal memperlakukan Nvidia bukan sekadar sebagai pabrik semikonduktor, melainkan kultus kepemimpinan tunggal di mana setiap deham, gurauan panggung, dan ramalan Jensen dianggap sebagai kitab suci arah masa depan teknologi. Begitu figur sentral tersebut tersandung masalah etika internal, seluruh fondasi kepercayaan pasar mendadak bergetar hebat.

![Potret Jensen Huang mengenakan jaket kulit hitam khasnya dalam sebuah konferensi teknologi](https://cdn.mos.cms.futurecdn.net/kR74yfqcmziKrBhAhFUNAd-1920-80.jpg)

Bagi orang-orang yang terbiasa mengamati intrik korporasi dari balik meja teknis, kepanikan dewan direksi ini sejatinya bukanlah hal yang sepenuhnya mengejutkan. Kondisi gamang ini mengingatkan kita pada fenomena saat [investor waswas nasib Nvidia digantungkan penuh pada Jensen Huang](/investor-waswas-nasib-nvidia-rp55-kuadriliun-cuma-digantungkan) yang tempo hari sempat menjadi perbincangan hangat di kalangan pengamat teknologi. Ketika sebuah korporasi raksasa meletakkan seluruh nasib bisnis bernilai triliunan dolar pada karisma satu orang figur, mereka sebetulnya sedang menaruh bom waktu di neraca keuangan sendiri tanpa menyiapkan rencana mitigasi yang waras.

Dikutip dari laporan media finansial Amerika Serikat, dewan komisaris Nvidia kini terjepit dalam dilema moral yang sangat pelik. Di satu sisi, mempertahankan seorang pimpinan yang tersandung pelanggaran etika berisiko merusak reputasi kepatuhan tata kelola perusahaan di mata regulator federal dan mitra bisnis institusi. Di sisi lain, mendepak Jensen secara mendadak berpotensi memicu gelombang kepanikan investor ritel maupun kakap yang sudah telanjur terbius narasi revolusi silikon. Pihak dewan dikabarkan menyadari bahwa keberlangsungan kontrak pengadaan pusat data komputasi skala raksasa dengan pemerintah dan korporasi global menuntut standar integritas yang bersih tanpa celah abu-abu.

Di warung kopi pinggir jalan, kita sering menyaksikan dinamika serupa dalam skala yang lebih merakyat. Ketika seorang juragan bengkel merasa usahanya sudah terlalu besar untuk bisa diatur oleh aturan main warga, ia kerap lupa bahwa baut-baut penopang atap bangunannya tetap dipasang oleh tangan para pekerja biasa. Jensen mungkin merasa jaket kulitnya sanggup menahan segala terpaan angin kritik, tetapi kalkulasi matematika di balik meja bundar pemegang saham selalu punya logika dingin yang tidak mempan digoyahkan oleh sekadar loyalitas sejarah masa lalu.

Panggung revolusi komputasi memang tidak pernah benar-benar kekurangan drama pahlawan kesiangan. Jensen Huang boleh saja menghabiskan tiga dekade membangun imperium grafis dari sebuah kedai sarapan Denny's hingga menjadi penguasa cip termahal di kolong langit. Namun ketika kursi empuk sang juragan mulai ditarik oleh kawan-kawan sekutunya sendiri, kita diingatkan pada satu fakta sederhana bahwa sehebat apa pun cip komputasi yang Anda rakit, ia tetap tidak punya tombol darurat untuk menyelamatkan ego tuannya dari intrik ruang rapat.`
  },
  {
    title: "Black Forest Games Beli Kebebasan dari Embracer Bukti Tim Kecil Jauh Lebih Waras",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Black Forest Games", "Embracer Group", "Industri Game", "PC Gaming", "Game Indie", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/Ybp2koTPxu9xofTxZ4U8f3-1920-80.jpg",
    imageAlt: "Tangkapan layar karakter petualangan aksi Destroy All Humans buatan studio Black Forest Games",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/giana-sisters-developer-black-forest-games-buys-itself-out-of-embracer-some-of-the-best-games-of-the-last-decade-came-from-teams-of-fifty-not-five-hundred/",
    excerpt: "Black Forest Games resmi membeli kembali kebebasan mereka dari cengkeraman Embracer Group untuk membentuk Third Signal. Sebuah tamparan telak bagi tren konglomerasi industri game yang membuktikan bahwa tim ramping berisi puluhan orang jauh lebih subur daripada pabrik raksasa nirjiwa.",
    content: `Bagi siapa saja yang mengikuti drama industri video game selama beberapa tahun terakhir, nama Embracer Group barangkali layak dinobatkan sebagai simbol paling sempurna dari kerakusan korporat yang berujung bencana. Berbekal kucuran dana murah di masa pandemi, raksasa asal Swedia ini sempat bernafsu memborong ratusan studio game di seluruh penjuru bumi layaknya orang kalap belanja keripik di minimarket. Namun begitu rencana kesepakatan investasi bernilai dua miliar dolar mereka mendadak ambruk, para eksekutif berdasi di pucuk pimpinan dengan enteng menutup studio-studio bersejarah, membatalkan puluhan proyek kreatif yang sedang dikerjakan setengah jalan, dan melempar ribuan pengembang berbakat ke jalanan tanpa sedikit pun rasa bersalah.

Di tengah lanskap industri yang suram dan dipenuhi kabar pemutusan hubungan kerja tersebut, sebuah kabar melegakan akhirnya datang membawa angin segar bagi komunitas pemain. Sebagaimana dicatat dalam laporan PC Gamer pekan ini, pengembang di balik waralaba Giana Sisters dan pembuatan ulang Destroy All Humans, Black Forest Games, resmi melakukan aksi pembelian manajemen secara mandiri (*management buyout*). Mereka menebus kebebasan mereka sendiri keluar dari dekapan Embracer Group dan mendirikan kelompok studio independen baru bernama Third Signal.

Langkah ini bukan sekadar urusan balik nama akta perusahaan di hadapan notaris, melainkan sebuah pernyataan sikap ideologis yang menohok tepat di ulu hati industri game modern. Sang pendiri sekaligus pimpinan Third Signal, Andreas Tobler, melontarkan kalimat bernas dalam keterangan resminya yang langsung disambut tepuk tangan oleh komunitas pengembang di seluruh dunia: sebagian game terbaik dalam satu dekade terakhir lahir dari tim berisi lima puluh orang, bukan lima ratus orang.

![Tangkapan layar karakter petualangan aksi Destroy All Humans buatan studio Black Forest Games](https://cdn.mos.cms.futurecdn.net/Ybp2koTPxu9xofTxZ4U8f3-1920-80.jpg)

Pernyataan tersebut adalah sebuah kebenaran telanjang yang selama ini berusaha ditutupi oleh para penerbit game berskala raksasa. Keberanian studio ini dalam merebut kembali kemerdekaan mereka sejalan dengan manuver berani saat [pecatan kreator DOOM bangkit mendirikan studio mandiri](/pecatan-kreator-doom-bangkit-bikin-studio-mandiri-demi-menampar) beberapa waktu lalu demi membuktikan bahwa visi kreatif murni tidak boleh disandera oleh hierarki manajemen korporasi yang tambun dan berbelit-belit. Ketika sebuah studio dipaksa mempekerjakan ratusan orang hanya demi memoles tekstur daun di latar belakang grafis, biaya produksi akan membengkak gila-gilaan ke angka ratusan juta dolar, dan hasilnya adalah game hambar yang takut mengambil risiko karena takut merugi di mata para pemodal.

Sementara itu, sejarah mencatat bahwa karya-karya interaktif yang benar-benar dicintai gamer justru sering kali diracik di dapur-dapur studio yang intim dan lincah. Studio dengan anggota puluhan orang memiliki ruang bernapas untuk berdialog secara manusiawi, menguji ide-ide gameplay yang unik tanpa perlu menunggu persetujuan sepuluh lapis komite direksi, serta menjaga kedekatan batin dengan komunitas pemain. Menumpuk ratusan pekerja dalam satu proyek megah ala pabrik perakitan mobil terbukti lebih sering melahirkan kepenatan massal (*burnout*) daripada melahirkan keajaiban interaktif yang sanggup menggetarkan sanubari gamer di depan layar monitor.

Bagi para gamer di tongkrongan yang lelah disuguhi rilisan berlabel harga satu juta rupiah namun dipenuhi bug serta transaksi mikro, kebangkitan studio mandiri semacam ini adalah secercah harapan nyata. Komunitas tidak butuh simulasi grafis fotorealistis jika mekanika permainan yang disajikan membosankan setengah mati. Pemain hanya merindukan karya yang diracik dengan dedikasi murni para kreatornya, bukan formula algoritma yang dirancang kaku demi memuaskan kurva proyeksi laba para pemodal ventura.

Direktur Pengelola Black Forest Games, Adrian Goersch, mengungkapkan bahwa setelah melewati sembilan tahun di bawah naungan THQ Nordic dan Embracer, kini timnya sangat bersemangat untuk kembali menentukan nasib mereka sendiri sebagai pemilik penuh. Mereka ingin fokus menggarap karya baru dengan kebebasan kreatif sejati tanpa dibayangi kecemasan apakah studio mereka bakal dijadikan tumbal laporan keuangan kuartalan berikutnya oleh para pialang saham di Eropa Utara.

Keluarnya Black Forest Games dari cengkeraman Embracer mengirimkan pesan yang sangat lantang bagi ekosistem pengembang global. Zaman di mana studio game merasa aman bernaung di bawah ketiak konglomerat multinasional telah resmi berakhir. Kebebasan kreatif mungkin menuntut kerja keras mencari mitra pendanaan yang tepat dan kehati-hatian mengelola anggaran secara cermat, namun kemerdekaan itu tetap jauh lebih bermartabat daripada menjadi pion tak berdaya di papan catur para juragan yang bahkan tidak pernah menyentuh kontroler game seumur hidup mereka.`
  }
];

async function runBatch() {
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

runBatch().catch(err => {
  console.error("Batch Execution Error:", err);
  process.exit(1);
});
