import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Kemenpar Sesumbar Cuan Konser BTS dan Guns N Roses Saat Panggung Lokal Terseok",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Konser Musik", "Kemenpar", "Music Tourism", "BTS", "Guns N Roses", "Margaretha Nina"],
    imageUrl: "https://api.kemenpar.go.id/storage/app/uploads/public/6af/6c3/4c3/thumb_16954_1200_630_0_0_crop.jpeg",
    imageAlt: "Menteri Pariwisata Widiyanti Putri Wardhana bersama jajaran promotor saat memaparkan potensi music tourism konser internasional di Balai Kota DKI Jakarta",
    sourceUrl: "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNbmpJVmNVV1JTaUxUOGhhOHFjbUt1ZzJhZ19uRE1BUjVnd2JzbnA3TWpZVEpUdk5qUW9DV0U5Z0Q2dkF6M3dMM2o0T0RLdnRqYWpYTGVtQ3d4OEl4YWUzeDNzaXdtUGwxVndIclZOVGlBb1dVUi1JY0VYRGNPWW9ndTJFTXU3OVdPdnZ3UGJZSHdSVGxZWjQ5YXJqQ2N0eVdBQ01xR3dxM21FVHZGUjNyWmhoUGs3OFg0Q1JieS1Od3U0VV9lZXJXZXBNalZ5aXE1a2ZhV2tuTm5IdHI1eTBCcFd5bDh5cGE4YXRPVENsU2VCdw?oc=5",
    excerpt: "Kemenpar getol mempromosikan wisata musik lewat konser akbar Guns N' Roses dan BTS demi target cuan triliunan rupiah. Sayangnya retorika manis ini melupakan penderitaan penonton biasa dan nasib panggung independen yang kian terhimpit di tanah sendiri.",
    content: `Kalau Anda pernah merasakan langsung bagaimana rasanya berdiri di tengah lautan manusia saat bubaran konser musik stadion di Senayan sekitar pukul dua belas malam, Anda pasti paham bahwa menonton pertunjukan musik megah di Jakarta sejatinya adalah latihan ketahanan fisik dan mental. Begitu lampu panggung utama padam dan lagu penutup berhenti menggelegar, keajaiban visual mendadak lenyap berganti menjadi simulasi evakuasi bencana. Puluhan ribu penonton yang kelelahan dan kehausan terpaksa berjalan kaki berkilo-kilo meter menyusuri trotoar gelap Palmerah karena akses jalan ditutup. Sinyal ponsel mendadak mati kutu dihantam kepadatan jaringan, tarif ojek daring melambung lima kali lipat dengan status pesanan yang tak kunjung dijemput, dan kepulan asap mi instan rebus dari gerobak pedagang kaki lima di pinggir rel kereta api menjadi satu-satunya penyelamat kewarasan sebelum subuh menjelang.

Namun gambaran penderitaan jalanan yang dialami para penikmat musik berkantong pas-pasan itu tampaknya sama sekali tidak terlihat dari balik jendela ruang rapat berpendingin udara para pembuat kebijakan. Sebagaimana diutarakan Menteri Pariwisata Widiyanti Putri Wardhana dalam konferensi pers di Balai Kota DKI Jakarta akhir pekan ini, pemerintah secara resmi mengumumkan langkah agresif untuk memaksimalkan potensi pariwisata berbasis musik alias wisata konser. Dengan menggandeng promotor kenamaan seperti Rajawali Indonesia dan iMe Indonesia, kementerian dengan penuh percaya diri menyambut kedatangan dua panggung raksasa lintas generasi: reuni grup rock gaek Guns N' Roses dan kembalinya fenomena boyband K-Pop global BTS ke ibu kota.

Di hadapan kamera awak media, para pejabat kementerian begitu fasih membeberkan deretan angka proyeksi ekonomi yang bikin mata terbelalak. Mengutip riset pasar global yang memperkirakan perputaran industri konser dunia bakal menembus ratusan miliar dolar dalam beberapa tahun ke depan, pemerintah mengklaim Jakarta siap memposisikan diri sebagai magnet devisa utama di kawasan Asia Tenggara. Mereka bahkan dengan bangga mengungkit rekam jejak konser Ye yang sempat menyedot puluhan ribu wisatawan mancanegara dan diklaim memutar uang hingga ratusan miliar rupiah di sektor perhotelan dan kuliner.

![Menteri Pariwisata Widiyanti Putri Wardhana bersama jajaran promotor saat memaparkan potensi music tourism konser internasional di Balai Kota DKI Jakarta](https://api.kemenpar.go.id/storage/app/uploads/public/6af/6c3/4c3/thumb_16954_1200_630_0_0_crop.jpeg)

Mendengar retorika manis tentang ledakan ekonomi tersebut tentu sangat membahagiakan di atas kertas dokumen paparan anggaran. Tetapi bila kita menengok realitas ekosistem pertunjukan dari sudut pandang penonton akar rumput dan musisi lokal, klaim bombastis ini justru menyisakan rasa getir yang luar biasa. Industri konser musik di Jakarta selama ini masih dibiarkan berjalan liar seperti rimba belantara tanpa perlindungan konsumen yang jelas. Publik penikmat musik dipaksa bertarung melawan sindikat calo tiket daring yang menggunakan perangkat lunak otomatis, menghadapi pungutan liar parkir kendaraan yang mematok tarif tidak masuk akal, serta menelan pil pahit ketika [penyelenggaraan konser di Jakarta membuat musisi kapok](/hayley-williams-coret-jakarta-dari-tur-asia-bukti-konser-lokal) mampir akibat carut-marut perizinan dan tata kelola promotor nakal yang kerap lepas tangan saat terjadi masalah teknis di lapangan.

Yang jauh lebih ironis, perhatian luar biasa pemerintah terhadap promotor pemodal raksasa yang mendatangkan musisi impor terasa sangat jomplang bila dikomparasikan dengan nasib ruang pertunjukan musik independen di tingkat lokal. Di saat pejabat negara begitu antusias menggelar karpet merah dan menawarkan fasilitas bagi musisi luar negeri yang tarif manggungnya memakan devisa puluhan miliar, klub-klub musik skala kecil dan panggung gigs komunitas di sudut-sudut kota justru kian sekarat. Mereka terus dihantam tarif pajak hiburan daerah yang mencekik leher, penggusuran ruang kreatif mandiri, dan ketiadaan subsidi gedung pertunjukan publik yang layak bagi anak-anak muda berkarya. Pemerintah seolah lupa bahwa identitas kultural sebuah kota tidak pernah lahir dari panggung sewa dua malam milik bintang pop mancanegara, melainkan dirawat secara tekun oleh [panggung musik mandiri berjuang merayakan kemenangan warga](/lagu-rock-indie-morfem-masuk-film-timnas-bukti-kemenangan-milik) yang selama ini menghidupi musisi arus bawah tanpa pernah mencicipi sepeser pun anggaran promosi kementerian.

Kebiasaan birokrasi yang hobi menunggangi keriuhan panggung pihak swasta ini adalah pola klasik yang terus berulang tanpa evaluasi substansial. Ketika tiket terjual habis dalam hitungan detik dan hotel berbintang di sekitar kawasan Senayan penuh terisi, pejabat negara bergegas menepuk dada mengklaim kesuksesan program kerja. Namun ketika konser bubar dengan menyisakan sampah yang berserakan, kemacetan horor berjam-jam yang mengunci ruas jalan protokol, dan dompet anak muda yang terkuras habis demi membayar calo, para pembuat kebijakan kembali menghilang ke balik meja kantor yang nyaman.

Di obrolan warung kopi tempat anak-anak muda berbagi keluh kesah seusai menonton gigs kecil, musik selamanya adalah ruang perayaan kebebasan, persahabatan, dan katarsis emosi yang tulus. Menjual euforia konser stadion impor sebagai mesin pencetak triliunan rupiah devisa adalah hak prerogatif pejabat pariwisata. Namun bila ekosistem musik lokal dibiarkan hidup segan mati tak mau sementara penonton biasa terus diperlakukan seperti sapi perah yang disuruh pulang jalan kaki menembus pekatnya malam, wisata konser yang digembar-gemborkan itu sejatinya tak lebih dari sekadar pesta pora kaum berduit yang menari di atas tanah panggung musisi lokal yang kelaparan.`
  },
  {
    title: "Amazfit Patok Jam Sebelas Juta Rupiah Saat Panas Matahari Masih Terasa Gratisan",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Amazfit", "Smartwatch", "Gadget", "Teknologi", "Gaya Hidup Digital", "Elang Elano"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2026/11/15/amazfit-t-rex-pro.jpg",
    imageAlt: "Smartwatch tangguh Amazfit T-Rex Dual Solar dengan bezel titanium dan layar pengisian daya tenaga surya",
    sourceUrl: "https://www.antaranews.com/berita/5855127/amazfit-t-rex-dual-solar-resmi-di-indonesia-harga-rp1139-juta",
    excerpt: "Amazfit resmi memboyong jam tangan pintar T-Rex Dual Solar ke Indonesia seharga Rp11,39 juta. Menjual fitur tahan banting militer dan pengisian tenaga surya untuk kaum urban yang aktivitas paling ekstremnya cuma berdesakan di gerbong KRL.",
    content: `Bagi siapa saja yang setiap hari harus mengarungi kerasnya aspal jalanan kota besar di Indonesia dengan sepeda motor bebek atau skuter matik, terik sinar matahari siang bolong adalah musuh alami nomor satu. Di bawah kolong jembatan layang atau di perempatan lampu merah yang durasi merahnya mencapai ratusan detik, para komuter jalanan rela berhimpitan mencari bayangan sejuk demi menyelamatkan kulit dari sengatan sinar ultraviolet yang membakar pori-pori. Panas mentari di negeri tropis ini melimpah ruah dan datang tanpa permisi secara cuma-cuma, dan naluri paling dasar setiap manusia waras di jalanan adalah menghindarinya sejauh mungkin agar tidak pulang kerja dalam kondisi kepala pening atau pakaian berlumur keringat lengket.

Namun di mata divisi pemasaran produsen gadget modern, penderitaan iklim tropis yang dialami rakyat pekerja tersebut ternyata bisa disulap menjadi narasi maskulinitas futuristik yang dibanderol sangat mahal. Sebagaimana dicatat dalam laporan resmi peluncuran produk di Antara Tekno pekan ini, merek elektronik Amazfit resmi meluncurkan jam tangan pintar teranyar mereka, Amazfit T-Rex Dual Solar, ke pasar Indonesia. Perangkat ini diposisikan di kasta tertinggi jam tangan olahraga luar ruangan dengan label harga yang membuat dahi mengernyit: Rp11.399.000. Sebuah nominal yang sanggup melunasi sewa kamar kos mahasiswa selama satu tahun penuh atau setara dengan dua bulan upah minimum pekerja di ibu kota.

Dengan banderol harga sebelas juta rupiah tersebut, pembeli dijanjikan sederet material mewah yang terdengar seperti perlengkapan perang tentara khusus. Jam tangan ini dibungkus rangka bezel logam Titanium Grade 5, kaca pelindung kristal safir yang diklaim antipores terhadap benturan batu karang, serta layar sentuh AMOLED dengan tingkat kecerahan gila-gilaan hingga 3.000 nits. Fitur yang paling digembar-gemborkan tentu saja teknologi pengisian daya ganda berbasis tenaga surya (*dual solar charging*), yang diklaim mampu menyerap sinar matahari untuk mengisi baterai internal berkapasitas 660 mAh secara otomatis saat pengguna berpetualang menaklukkan puncak gunung atau menjelajahi rimba belantara.

![Smartwatch tangguh Amazfit T-Rex Dual Solar dengan bezel titanium dan layar pengisian daya tenaga surya](https://img.antaranews.com/cache/800x533/2026/11/15/amazfit-t-rex-pro.jpg)

Spesifikasi monster semacam ini tentu terdengar sangat heroik di atas kertas brosur promosi. Namun bila kita membedahnya dari kacamata sysadmin warkop yang terbiasa melihat fungsi riil perangkat keras, muncul sebuah pertanyaan mendasar yang menggelitik: siapa sebenarnya orang Indonesia yang benar-benar membutuhkan jam tangan pintar seharga sebelas juta rupiah ini? Para penggiat alam bebas dan pendaki gunung sejati umumnya lebih menaruh kepercayaan pada jam tangan analog legendaris tahan air atau kompas mekanik yang tidak memiliki risiko sistem operasi *crash* atau baterai aus di tengah hutan rimba.

Kenyataan di lapangan membuktikan bahwa mayoritas pembeli jam tangan taktis berharga belasan juta rupiah di kota-kota besar bukanlah petualang yang tiap akhir pekan tidur di dalam tenda survival. Konsumen terbesarnya adalah para pekerja kantoran dan eksekutif muda yang medan petualangan paling ekstrem dalam hidupnya hanyalah berdesak-desakan berebut pintu masuk KRL Commuter Line di Stasiun Manggarai pada jam sibuk, atau berjalan santai dari meja kerja berpendingin ruangan menuju kantin lantai bawah untuk membeli semangkuk soto ayam. Fitur sensor barometer badai, peta topografi luring, dan penangkap sinar surya canggih itu akhirnya cuma berakhir menjadi ornamen pamer di pergelangan tangan saat menghadiri rapat koordinasi mingguan atau berfoto di depan cermin tempat kebugaran tubuh.

Kecenderungan masyarakat urban untuk mengoleksi perangkat keras berspesifikasi berlebihan demi gaya hidup kosmetik ini semakin menegaskan penyakit konsumerisme era digital. Kita menyaksikan sendiri bagaimana korporat teknologi dengan lihai membujuk konsumen agar gemar [membeli gadget mahal yang menawarkan solusi untuk masalah tak kasatmata](/robot-anjing-sony-puluhan-juta-bukti-korporat-gemar-bikin-solusi) dan tidak pernah ada di dunia nyata, atau memaksakan diri mencicil perabot elektronik canggih ketika [harga perangkat keras melonjak gila-gilaan demi spesifikasi tanggung](/mac-mini-m6-dijual-tujuh-belas-juta-tapi-ssd-dasarnya-masih-kikir) yang separuh fungsinya tak pernah disentuh jari pemiliknya. Membayar mahal sebuah jam tangan pintar hanya agar baterainya bisa terisi beberapa persen saat motor Anda mogok kepanasan di jalan tol lingkar luar adalah ironi paling sempurna dari kemewahan semu kelas menengah kota.

Di tongkrongan warung kopi dekat pangkalan ojek, matahari khatulistiwa selamanya dihormati sebagai berkah alami yang mengeringkan jemuran cucian warga dan membikin kerupuk kaleng tetap renyah tanpa perlu ditagih biaya langganan bulanan. Membeli jam tangan pintar seharga sebelas juta rupiah hanya demi membuktikan kepada kawan sekantor bahwa Anda sanggup memanen tenaga matahari adalah cara paling boros untuk mengumumkan kelemahan diri sendiri. Kalau Anda memang sedang kegerahan di bawah terik matahari Jakarta, solusi paling cerdas bukanlah melirik persentase baterai di layar titanium jam tangan, melainkan menepi sejenak ke emperan toko dan memesan segelas es teh manis seharga tiga ribu perak.`
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261116-0100.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
