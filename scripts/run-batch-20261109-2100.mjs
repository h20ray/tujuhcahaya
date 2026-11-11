import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Idgitaf Bawa Banjir dan Asap Hutan ke Panggung Gemerlap AMI Awards 2026",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["AMI Awards 2026", "Budaya Urban", "Ekologi", "Idgitaf", "Industri Musik", "Margaretha Nina", "Musik Pop Indie"],
    imageUrl: "https://sinarpaginews.com/wp-content/uploads/2026/11/IMG-20261109-WA0045.jpg",
    imageAlt: "Idgitaf memegang piala penghargaan AMI Awards 2026 dengan senyum penuh kebanggaan dan pesan ekologis",
    sourceUrl: "https://sinarpaginews.com/idgitaf-raih-tiga-ami-awards-2026-singgung-banjir-hingga-kebakaran-hutan/",
    excerpt: "Di tengah pesta gemerlap AMI Awards 2026 yang sarat gaun desainer dan senyum basa-basi selebritas, Idgitaf menyabet tiga piala sekaligus dan memilih berbicara soal banjir bandang serta kabut asap kebakaran hutan. Sebuah tamparan elegan bagi industri hiburan yang kerap pura-pura tuli terhadap nestapa lingkungan.",
    content: `Kalau ada perhelatan tahunan di Jakarta yang paling piawai menampilkan fatamorgana serba mewah, panggung Anugerah Musik Indonesia (AMI) Awards adalah pemenangnya. Karpet merah membentang megah menyambut langkah para pesohor, lampu sorot berkedip manja menyorot kain sutra gaun rancangan desainer papan atas, dan senyum kaku para eksekutif label rekaman merekah menyambut sorotan kamera televisi. Di dalam gedung pertunjukan megah berpendingin udara yang dinginnya menusuk tulang itu, realitas pahit bumi pertiwi mendadak sirna. Udara kotor Jakarta yang saban hari mencekik tenggorokan warga, upah musisi panggung kafe yang kerap dicicil tanpa kepastian, hingga harga beras yang mencekik dompet anak kos seketika lenyap disapu semerbak wangi parfum impor dan kemilau piala berlapis emas.

Namun malam puncak penganugerahan AMI Awards 2026 yang dihelat awal pekan ini mendadak kehilangan atmosfer kenyamanan sterilnya tatkala giliran solois muda Brigitta Sriulina Beru Meliala, atau yang lebih karib disapa Idgitaf, melangkah percaya diri menaiki podium panggung. Sebagaimana dicatat dalam laporan liputan Sinar Pagi News, musisi kelahiran tahun 2001 tersebut berhasil memborong tiga trofi piala bergengsi sekaligus. Lagu-lagunya yang jujur dan bernyawa mengantarkannya memenangi kategori Karya Produksi Folk/Country/Balada Terbaik, Album Pop Terbaik, hingga dinobatkan sebagai Artis Solo Wanita Pop Terbaik tahun ini.

Alih-alih melontarkan pidato klise penuh basa-basi ucapan terima kasih kepada jajaran direksi korporasi atau sponsor komersial yang memasang spanduk di dinding lobi, Idgitaf justru menyiramkan seember air es ke wajah para tamu undangan di barisan kursi VIP. Berdiri tegak mendekap ketiga pialanya, ia mengingatkan seisi ruangan bahwa karya seni yang baik tidak pernah lahir dari menara gading yang kedap suara. Di luar dinding tebal gedung mewah tempat mereka berpesta, jutaan rakyat akar rumput di pelosok daerah sedang berjibaku melawan bencana ekologis yang kian brutal: kepungan banjir bandang yang merendam pemukiman warga di Sumatra, kabut asap pekat akibat kebakaran hutan yang memanggang paru-paru anak-anak di pedalaman Kalimantan, serta krisis iklim yang meluluhlantakkan masa depan para petani.

![Idgitaf memegang piala penghargaan AMI Awards 2026 dengan senyum penuh kebanggaan dan pesan ekologis](https://sinarpaginews.com/wp-content/uploads/2026/11/IMG-20261109-WA0045.jpg)

Keberanian Idgitaf menyuarakan keresahan ekologis di hadapan para pembesar industri hiburan menjadi pemandangan langka yang menyegarkan dahaga publik. Momen berani ini kontras dengan riwayat masa lalu ajang penghargaan serupa yang kerap memicu sinisme publik, seperti polemik yang sempat memanas tatkala [lagu ciptaan menteri memborong piala AMI Awards saat musisi pusing bayar tagihan](/ketika-lagu-ciptaan-menteri-borong-piala-ami-awards-saat-musisi), di mana panggung kehormatan justru dijadikan arena promosi birokrasi ketimbang merayakan jerih payah seniman independen. 

Di kedai-kedai kopi tempat anak muda berkumpul dan membicarakan masa depan yang kian remang-remang, pidato Idgitaf bergetar sangat kuat. Kita sudah terlampau kenyang disuguhi lagu-lagu pop komersial seragam yang meninabobokan pendengar agar lari dari kenyataan hidup. Sikap kritis Idgitaf ini menyalakan kembali bara perlawanan yang serupa tatkala [karya musik tradisi Dayak Palui Banaran berhasil menembus panggung nasional](/musik-dayak-palui-banaran-tembus-ami-awards-saat-jakarta-asyik). Keduanya menjadi saksi nyata bahwa musik yang berakar pada derita tanah dan suara rakyat biasa selalu memiliki daya pikat magis yang mustahil disaingi oleh jutaan manipulasi angka streaming.

Idgitaf malam itu membuktikan bahwa tiga lempeng piala berlapis emas hanyalah rongsokan hiasan lemari bila sang empunya memilih bungkam melihat tanah airnya sedang porak-poranda. Industri hiburan ibu kota barangkali bisa terus menggelar pesta glamor berbiaya miliaran rupiah dan menepuk dada seolah-olah semua baik-baik saja. Namun ketika tirai panggung ditutup dan para pesohor melangkah keluar lobi gedung, langit malam yang menyambut mereka tetaplah langit yang sama: pekat oleh debu polusi dan kabut asap kebakaran hutan yang tak akan pernah bisa dipadamkan hanya dengan tepuk tangan meriah kaum borjuis.`
  },
  {
    title: "Kabel RTX 50 Meleleh Bukti Gamer PC Puluhan Juta Masih Waswas Rumah Kebakaran",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Hardware", "Industri Game", "Kartu Grafis", "Nvidia", "PC Gaming", "RTX 5090"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/niBcj57mhwMqkxwSGDQEQf-1920-80.jpg",
    imageAlt: "Konektor daya kartu grafis Nvidia yang menghitam dan meleleh akibat panas berlebih pada soket daya PC gaming",
    sourceUrl: "https://www.pcgamer.com/hardware/graphics-cards/consider-this-blackened-plug-your-weekly-reminder-to-check-your-rtx-50-series-gpu-cables/",
    excerpt: "Membeli kartu grafis generasi RTX 50 seharga puluhan juta rupiah ternyata belum cukup membeli ketenangan pikiran. Laporan terbaru konektor kabel daya yang menghitam dan meleleh kembali membayangi komunitas gamer PC, membuktikan bahwa perlombaan daya monster industri hardware justru melahirkan paranoia baru di atas meja kerja.",
    content: `Membeli perangkat keras komputer di zaman sekarang sudah mirip dengan mengambil cicilan mobil mewah bekas: biayanya menguras isi tabungan sampai kering kerontang, namun tingkat kecemasan yang dibawanya setara dengan menunggu pengumuman sidang tilang polisi. Bayangkan skenario ini: Anda baru saja merelakan gaji berbulan-bulan demi memboyong kartu grafis generasi terbaru keluarga RTX 50-series ke meja kamar. Di atas kertas brosur promosi, Anda dijanjikan surga visual fotorealistis dengan laju ratusan frame per detik dan pantulan cahaya ray tracing yang berkilauan bak film layar lebar. Namun realitasnya di dunia nyata, alih-alih duduk santai menikmati permainan, Anda justru menghabiskan malam bermain game sambil mendekatkan hidung ke lubang ventilasi casing, sibuk mengendus apakah ada bau sangit plastik terbakar yang meruap dari dalam mesin.

Rasa waswas yang menghantui tongkrongan gamer PC ini terbukti bukan sekadar histeria kosong warganet yang kurang kerjaan. Sebagaimana dicatat dalam laporan investigasi tim PC Gamer pekan ini, kasus colokan daya standar 16-pin (12V-2x6) yang hangus, gosong, dan meleleh menghitam kembali menimpa para pemilik kartu grafis kelas atas tersebut. Foto soket daya plastik yang lumer menyerupai lelehan lilin kembali ramai diperdebatkan di forum-forum perangkat keras komputer, memicu peringatan mingguan yang getir bagi para gamer untuk tidak pernah lengah memeriksa kesehatan kabel daya di balik pintu kaca komputer mereka.

Pemandangan ini sungguh menggelikan sekaligus menguji kesabaran akal sehat. Kita sedang membicarakan komponen elektronik premium yang di pasar tanah air dibanderol dengan harga fantastis, mulai dari 25 juta rupiah hingga menembus angka 40 juta rupiah untuk varian flagship. Untuk sebuah produk yang harganya sanggup menebus dua unit sepeda motor bebek baru, konsumen secara moral berhak menuntut keamanan tingkat tinggi yang bebas dari cacat desain. Namun kenyataannya, pabrikan silikon tampak begitu kesetanan memompa pasokan listrik hingga 500 sampai 600 watt ke papan kartu demi mengejar angka pengujian benchmark yang fantastis di lembar spesifikasi, sembari mengabaikan hukum fisika dasar bahwa memaksakan arus listrik sebesar itu lewat kabel konektor mungil dengan celah presisi yang sempit adalah undangan terbuka bagi bencana panas berlebih.

![Konektor daya kartu grafis Nvidia yang menghitam dan meleleh akibat panas berlebih pada soket daya PC gaming](https://cdn.mos.cms.futurecdn.net/niBcj57mhwMqkxwSGDQEQf-1920-80.jpg)

Saran teknis yang dilontarkan oleh para pengamat industri pun kian terdengar seperti lelucon satir. Para pembeli yang telah menguras rekening disarankan untuk membeli alat pemantau kabel tambahan, dilarang menekuk kabel barang beberapa milimeter, atau disuruh memastikan colokan ditekan dengan sekuat tenaga hingga terdengar bunyi klik keramat. Arogansi desain semacam ini mencerminkan mentalitas produsen yang gemar melempar beban risiko teknis ke pundak konsumen, tabiat yang setali tiga uang dengan sikap arogan korporasi saat [AMD terang-terangan memilih memanjakan server data center AI ketimbang komunitas gamer PC](/ketika-amd-terang-terangan-pilih-memanjakan-server-ai-ketimbang). Di hadapan nafsu miliaran dolar korporasi teknologi, keselamatan dan kenyamanan gamer rumahan jelas hanya menempati urutan kesekian di kertas perencanaan bisnis mereka.

Bagi anak muda dan pekerja kantoran di kota-kota besar yang menjadikan game sebagai pelarian waras setelah dihajar kemacetan dan lembur kerja, situasi ini sungguh menyiksa batin. Bukannya memperoleh ruang katarsis yang menenangkan pikiran, mereka justru harus berperan ganda sebagai petugas pemadam kebakaran amatir di kamar sendiri, ditemani desau bising [kipas pendingin komputer yang mendesing bak mesin jet pesawat tempur](/ketika-kipas-laptop-mendesing-bak-pesawat-tempur-dan-bodi-panas) demi mencegah komputer kesayangan meledak menjadi arang.

Para eksekutif produsen kartu grafis barangkali boleh tersenyum congkak saat mempresentasikan grafik keuntungan kuartalan yang meroket di hadapan para pemegang saham di Silicon Valley. Namun bagi gamer yang setiap malam tidur tidak nyenyak karena takut mendadak dibangunkan kobaran api dari meja PC, kemegahan grafis fotorealistis generasi anyar itu telah kehilangan pesonanya. Memasang kartu grafis monster di masa sekarang rasanya persis seperti menyalakan kompor gas tanpa pengaman di sebelah kasur busa: gambarnya memang luar biasa memanjakan mata, tapi salah senggol kabel sedikit saja, seisi kamar kos taruhannya.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 21:00 WIB)");
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
  console.log(`🎉 Batch Publikasi 21:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261109-2100.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
