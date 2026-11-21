import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Seribu Jam di Baldurs Gate 3 Bikin Ashens Muak Dusta Romantisasi Game Retro",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Ashens", "Baldurs Gate 3", "Budaya Gaming", "Game Retro", "PC Gaming", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/ZL99unBNACpzEBF2YsvoM6-1920-80.png",
    imageAlt: "Ilustrasi kreator konten Ashens bersanding dengan grafis petualangan Baldur's Gate 3",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/youtuber-and-comedian-ashens-has-1-000-hours-in-baldurs-gate-3-and-reveals-the-worst-retro-game-hes-ever-played-by-the-time-youve-hacked-it-to-work-its-just-no-fun-whatsoever/",
    excerpt: "Stuart Ashen menghabiskan hampir seribu jam di Baldur's Gate 3 dan membeberkan SQIJ sebagai game retro terburuk. Peringatan keras bagi gamer yang kerap terjebak nostalgia semu.",
    content: `Bagi siapa saja yang menghabiskan masa remaja di sela derit kipas komputer kamar kos atau meja biliar rental PlayStation, ada satu penyakit psikologis ganjil yang kerap menjangkiti para penikmat game PC: sindrom nostalgia selektif. Kita sering kali mendadak menjadi makhluk paling melankolis di muka bumi ketika mengingat masa-masa indah bermain game lawas di era monitor tabung. Merasa rindu dengan masa lalu yang sederhana, kita rela begadang berjam-jam mengunduh emulator, berselancar di forum antah-berantah demi mencari berkas tambalan konfigurasi, hingga meretas baris kode biner yang sudah lapuk dimakan zaman. Namun begitu petualangan piksel tersebut akhirnya berhasil menyala di layar monitor modern, keajaiban yang kita impikan mendadak sirna dalam lima menit pertama: karakter yang digerakkan terasa seberat batu kali, sudut kamera membuat isi perut bergejolak, dan mekanisme kontrolnya terasa seperti hukuman fisik bagi jari jemari.

Pengakuan tanpa tedeng aling-aling atas absurditas romantisisme masa lalu ini baru saja disuarakan secara lantang oleh Stuart Ashen, komedian kawakan sekaligus pengulas konsol klasik asal Inggris yang lebih masyhur dikenal lewat kanal YouTube Ashens. Sebagaimana dicatat dalam laporan wawancara santai jurnalis PC Gamer dalam rubrik Disk Cleanup awal pekan ini, kreator yang telah dua dasawarsa membedah kegagalan produk konsol murahan tersebut membeberkan isi komputer pribadinya. Di luar dugaan banyak penggemar yang mengiranya melulu hidup di masa purbakala era konsol delapan bit, Ashens tercatat telah menumpahkan waktu bermain fantastis hingga 927 jam di dalam dunia permainan peran mahakarya Larian Studios, Baldur's Gate 3, serta mengantongi 350 jam di game taktik Gloomhaven.

Namun kontras paling menggelitik mencuat saat sang kreator ditanya perihal game retro paling buruk yang pernah ia cicipi sepanjang hayat. Alih-alih menyebut judul yang memiliki cacat minor, Ashens tanpa ragu menunjuk SQIJ, sebuah game buatan era komputer ZX Spectrum legendaris. Game tersebut begitu hancur lebur hingga pemain harus melakukan peretasan kode mesin terlebih dahulu hanya untuk melewati layar pemuatan utama, dan begitu berhasil dimainkan, permainannya sama sekali tidak menyajikan kesenangan apa pun selain sakit kepala. Pengakuan bersahaja dari seorang kurator game kawakan ini menjadi tamparan telak bagi narasi sok puritan yang kerap diagung-agungkan di tongkrongan warkop: bahwa semua karya zaman dulu secara otomatis lebih berjiwa dan lebih mulia ketimbang game produksi masa kini.

![Ilustrasi kreator konten Ashens bersanding dengan grafis petualangan Baldur's Gate 3](https://cdn.mos.cms.futurecdn.net/ZL99unBNACpzEBF2YsvoM6-1920-80.png)

Kritik tajam yang dilontarkan Ashens menyentil kemunafikan industri hiburan yang gemar menjual nostalgia sebagai komoditas instan berharga mahal. Kita memang patut muak melihat taktik korporasi modern yang serakah saat fenomena [main game berubah jadi kerja lembur](/bocoran-trofi-gta-6-tembus-ratusan-jam-bukti-main-game-berubah) demi memburu trofi artifisial dan setumpuk transaksi mikro kosmetik yang menguras dompet. Namun menutup mata terhadap kenyamanan desain game modern juga merupakan bentuk kebodohan yang nyata. Hari ini kita beruntung menyaksikan bagaimana [game indie bikinan dua orang berhasil tampar proyek triliunan](/game-indie-bikinan-dua-orang-berhasil-tampar-proyek-triliunan) berkat kejelian merancang narasi yang memikat dan mekanisme kendali yang luwes, tanpa perlu memaksa pemain bertindak layaknya montir mesin pabrik hanya untuk menggerakkan karakter sejauh sepuluh langkah.

Bagi gamer kasual di tanah air yang waktu luangnya sudah habis diperas jam kerja kantor dan kemacetan jalan raya, waktu dua jam di malam hari adalah barang mewah yang tak ternilai harganya. Menghabiskan waktu yang berharga tersebut untuk bertarung melawan galat peranti lunak kuno demi sebuah game retro yang mekaniknya tak manusiawi bukanlah tanda dedikasi artistik, melainkan bentuk penyiksaan sukarela yang tak berfaedah. Game hebat seperti Baldur's Gate 3 membuktikan bahwa sebuah karya dapat menyerap ratusan jam hidup kita bukan karena mempersulit pemain dengan masalah teknis yang rusak, melainkan karena keagungan penulisan naskah, kebebasan moralitas pemain, dan rasa hormat yang mendalam terhadap daya imajinasi manusia.

Romantisasi berlebihan terhadap masa lalu pada dasarnya hanyalah pelarian dari rasa jenuh kita menghadapi realitas hidup yang kian membosankan. Namun bila untuk memainkan sebuah game lawas Anda harus menyamar menjadi teknisi komputer yang membongkar baris perintah selama setengah hari hanya untuk menyadari bahwa game tersebut membuat kepala pusing, mungkin sudah saatnya Anda mematikan emulator dan melangkah keluar kamar. Kadang kala, tanda kedewasaan tertinggi seorang gamer bukanlah seberapa banyak tumpukan kaset kuno yang berdebu di lemari pajangan, melainkan keberanian mengakui bahwa sebagian besar memori masa kecil kita terasa indah semata-mata karena kita belum mengenal betapa nikmatnya fitur simpan otomatis dan kontrol karakter yang responsif.`
  },
  {
    title: "Politisi Amerika Sibuk Blokir Ekspor Cip AI Saat Jalur Gelap Selalu Punya Cara",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Cip AI", "Elang Elano", "Geopolitik", "Industri Semikonduktor", "Kongres AS", "Nvidia"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25545717/STK481_STK432_CONGRESS_GOVERNMENT_CIVRGINIA_D.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Gedung Capitol Amerika Serikat tempat Kongres memperdebatkan pengetatan aturan ekspor cip kecerdasan buatan",
    sourceUrl: "https://www.theverge.com/ai-artificial-intelligence/1033984/congress-export-rules-ai-chips-china",
    excerpt: "Kongres Amerika Serikat mendadak panik memperketat aturan ekspor cip AI menyusul skandal Nvidia. Sandiwara birokrasi yang menutup mata dari kebocoran rantai pasok global.",
    content: `Bagi siapa saja yang pernah berkutat menjaga kestabilan ruang server atau menghabiskan malam di depan terminal baris perintah memantau lalu lintas data jaringan, ada satu tabiat birokrat yang polanya selalu berulang: ketika sebuah insiden keamanan meledak akibat keteledoran pengawasan di lingkaran dalam mereka sendiri, respon pertama para pejabat bukanlah mengevaluasi kelemahan struktural, melainkan buru-buru menerbitkan aturan pelarangan baru yang terdengar galak demi menutupi rasa malu di depan publik. Panggung sandiwara serupa kini tengah dipertontonkan secara vulgar di Washington DC, di mana para politisi Capitol Hill mendadak kompak bersuara lantang menuntut pengetatan gerbang ekspor mikrocip akselerator kecerdasan buatan ke pasar internasional.

Kepanikan politik di pusat kekuasaan Amerika Serikat ini meletup sebagai buntut panjang dari kemelut skandal yang mengguncang singgasana raksasa semikonduktor Nvidia. Sebagaimana dicatat dalam laporan politik teknologi The Verge awal pekan ini, Kongres Amerika Serikat kini tengah merapatkan barisan lintas partai untuk menggodok paket regulasi perdagangan baru yang jauh lebih represif. Menariknya, isu pembatasan ekspor cip pemrosesan grafis canggih ini menjadi satu dari sedikit topik yang sanggup menyatukan politisi Partai Demokrat dan Partai Republik dalam satu panggung koor yang sama. Para anggota dewan tersebut menuntut pemanggilan para eksekutif puncak semikonduktor ke meja sidang dengar pendapat resmi menyusul terungkapnya relasi personal sang mantan nakhoda korporasi dengan oknum yang dicurigai sebagai perantara intelijen negara pesaing.

Retorika heroik para senator yang berapi-api mendengungkan doktrin keamanan nasional tersebut sejatinya memperlihatkan betapa naifnya para penyusun kebijakan dalam memahami tabiat rantai pasok teknologi silikon modern. Menutup keran pengiriman cip komputasi kelas berat dengan selembar maklumat hukum di atas kertas ibarat memasang palang pintu di jalan tol sembari membiarkan ratusan jalur tikus di sekitarnya tetap beroperasi bebas hambatan. Selama sebuah papan akselerator kecerdasan buatan sanggup mendatangkan keuntungan puluhan ribu dolar bagi para spekulan, jejaring perantara perdagangan gelap dan perusahaan cangkang di kawasan persinggahan netral akan selalu menemukan siasat untuk menyelundupkan kotak-kotak komponen silikon tersebut ke tangan penawar tertinggi.

![Gedung Capitol Amerika Serikat tempat Kongres memperdebatkan pengetatan aturan ekspor cip kecerdasan buatan](https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25545717/STK481_STK432_CONGRESS_GOVERNMENT_CIVRGINIA_D.jpg?quality=90&strip=all&crop=0,0,100,100)

Kebijakan embargo yang serampangan ini semakin menyingkap standar ganda yang menjengkelkan bagi ekosistem komputasi global. Di panggung bursa saham, para pemodal besar terbiasa merayakan lonjakan kapitalisasi pasar hingga lupa daratan, sampai akhirnya tersadar bahwa [tahta Raja AI bisa runtuh dalam semalam](/jensen-huang-resmi-lengser-dari-nvidia-bukti-tahta-raja-ai-bisa) begitu friksi etika dan skandal personal menampar figur sentralnya. Namun kepanikan para birokrat negara adidaya yang terlambat mengantisipasi kebocoran komoditas strategis ini terasa sangat janggal, terutama ketika jejak rekam lapangan membuktikan bagaimana [penjualan chip AI canggih ke kantor kosong tanpa meja](/ketika-nvidia-loloskan-penjualan-chip-ai-canggih-ke-kantor-kosong) tetap sanggup melenggang mulus tanpa pernah terendus oleh instrumen pengawas kementerian perdagangan mereka sendiri.

Bagi para pengembang peranti lunak, perintis teknologi, dan praktisi data di negara berkembang seperti Indonesia, perseteruan geopolitik para elit global ini mendatangkan dampak nyata yang sangat merugikan. Akibat sanksi yang membabi buta dan kepanikan pasar global, pasokan perangkat keras komputasi berperforma tinggi menjadi komoditas langka yang harganya terkerek naik secara tidak masuk akal. Komunitas teknologi akar rumput yang sedang berjuang membangun model komputasi mandiri untuk memecahkan persoalan warga lokal dipaksa bersaing memperebutkan sisa-sisa alokasi cip yang kian mahal, sementara para spekulan bermodal jumbo di pasar gelap tertawa lebar menikmati marjin keuntungan penyelundupan yang kian menggiurkan.

Memperagakan ekspresi murka di depan kamera televisi ruang sidang parlemen mungkin efektif untuk mengamankan simpati konstituen menjelang kontestasi politik elektoral. Namun mempercayai bahwa lalu lintas mikrocip semikonduktor tercanggih di dunia dapat dibendung hanya dengan segepok dokumen larangan ekspor sama konyolnya dengan berharap banjir bandang berhenti mengalir hanya karena dinas pekerjaan umum memasang papan peringatan dilarang melintas. Selama komoditas cip kecerdasan buatan diperlakukan layaknya emas baru peradaban abad kedua puluh satu, aturan birokrasi yang kaku tak akan pernah mampu mengejar kelincahan kaki-kaki penyelundup yang selalu selangkah lebih cerdik di lapangan.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 17:00 WIB)");
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261116-1700.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
