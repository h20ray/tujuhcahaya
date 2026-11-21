import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Garmin Fenix 9 Dijual Seharga Motor Matik Padahal Cuma Dipakai Nongkrong di Kafe",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Garmin", "Smartwatch", "Gadget", "Gaya Hidup", "Teknologi", "Elang Elano"],
    imageUrl: "https://cdn.antaranews.com/cache/1200x800/2025/09/04/InShot_20250904_123432556.jpg",
    imageAlt: "Jajaran jam tangan pintar Garmin fenix 9 series dengan bezel titanium di atas meja display",
    sourceUrl: "https://www.antaranews.com/berita/5852559/garmin-fnix-9-resmi-di-indonesia-ini-varian-spesifikasi-harganya",
    excerpt: "Garmin resmi meluncurkan jam tangan multisport fenix 9 dan 9 Pro di Indonesia dengan harga tembus belasan hingga puluhan juta rupiah. Arloji berstandar militer ini sarat fitur ekstrem yang ironisnya cuma dipakai di ruangan kantor ber-AC.",
    content: `Ada pemandangan menggelitik yang makin sering dijumpai saat melangkah ke dalam kedai kopi kekinian di bilangan perkantoran Sudirman atau Mega Kuningan pada jam makan siang. Di antara kepulan asap rokok dan deru pendingin ruangan, duduklah para profesional muda atau bapak-bapak korporat dengan kemeja rapi. Di pergelangan tangan mereka, melingkar sebuah jam tangan hitam raksasa berbodi tebal dengan jajaran baut kokoh dan tombol bergerigi yang tampak sangar. Dari kejauhan, penampilan perkakas itu memberi kesan pemiliknya adalah instruktur bertahan hidup pasukan khusus yang baru saja diterjunkan dari helikopter di pedalaman Kalimantan. Namun begitu obrolan dimulai, kita segera sadar rute penjelajahan paling menantang yang mereka taklukkan hari itu hanyalah menyeberangi jembatan penyeberangan orang dari lobi gedung menuju gerai kopi terdekat.

Kesan petualang tangguh berbiaya fantastis itulah yang kembali disuguhkan ke pasar tanah air pekan ini. Sebagaimana dicatat dalam laporan peluncuran resmi ANTARA News, Garmin resmi memboyong jam tangan pintar multisport premium fēnix 9 dan fēnix 9 Pro ke Indonesia. Banderol harganya sanggup membikin dahi siapa saja berkerut dalam: seri fēnix 9 standar dipasarkan mulai Rp18.790.000, sementara varian fēnix 9 Pro melesat mulai Rp20.790.000, bahkan melonjak lebih tinggi tergantung ukuran dan konfigurasi tali jam yang dipilih. Lembar spesifikasi teknisnya dipenuhi istilah wah: layar AMOLED berlapis kaca safir antipantul, bezel titanium berdaya tahan militer, tombol sensorik kedap air, senter LED internal multifungsi, hingga sistem pemetaan topografi offline mandiri yang sanggup memandu langkah tanpa butuh seutas pun sinyal seluler.

Menghabiskan uang belasan hingga puluhan juta rupiah—nominal yang setara untuk menebus satu unit sepeda motor matik keluaran baru secara tunai—demi seonggok jam tangan tentu sah-sah saja bagi mereka yang saldo rekeningnya berlebih. Akan tetapi, jurang ironi yang membentang antara peruntukan desain alat dengan realitas pemakaian sehari-hari adalah lelucon komikal yang tak pernah basi. Jam tangan tangguh ini dirancang oleh para insinyur peranti keras agar tidak remuk saat dihantam badai salju di puncak gunung atau diajak menyelam puluhan meter di laut lepas. Ironisnya di tangan masyarakat urban modern, peranti pemetaan satelit multi-band dan sensor altimeter barometer tersebut praktis cuma berfaedah untuk mengukur berapa puluh langkah yang dihabiskan dari meja kerja menuju toilet kantor, atau mengecek apakah lantai sepuluh tempat kerja mereka cukup membuat tekanan udara berubah. Bahkan fitur senter LED berkekuatan tinggi yang digadang-gadang untuk menembus kegelapan gua belantara, pada kenyataannya paling banter cuma dipakai untuk mencari colokan kabel charger ponsel yang jatuh ke kolong meja kerja.

![Jajaran jam tangan pintar Garmin fenix 9 series dengan bezel titanium di atas meja display](https://cdn.antaranews.com/cache/1200x800/2025/09/04/InShot_20250904_123432556.jpg)

Bagi pekerja kantoran yang setiap hari bergulat dengan tenggat laporan, kepemilikan jam tangan pintar serba tahu ini sering kali justru menambah beban pikiran baru yang tak perlu. Perangkat canggih ini gemar bertingkah cerewet dengan melontarkan peringatan stres atau anjuran waktu pemulihan tubuh di saat yang kurang tepat. Masalah ini persis seperti fenomena saat [sensor detak jantung smartwatch yang kerap bikin pemiliknya panik sendiri](/sensor-jantung-smartwatch-sering-ngawur-bikin-warga-sehat-kena), di mana getaran panik di pergelangan tangan sering kali cuma dipicu oleh rasa gugup membaca email teguran atasan atau secangkir kopi tubruk yang diminum terburu-buru. Namun demi gengsi visual dan [kebiasaan memamerkan metrik kebugaran ke media sosial](/medsos-baru-whoop-wajibkan-syarat-detak-jantung-bukti-paranoia), segala keanehan algoritma itu tetap ditelan mentah-mentah demi memvalidasi citra diri sebagai manusia urban yang bugar dan sadar kesehatan, walau denyut jantung tertinggi dalam sepekan terakhir cuma terpacu saat melihat saldo tabungan tergerus cicilan paylater.

Kontradiksi ini terasa kian kontras jika dibandingkan dengan realitas para pekerja lapangan di akar rumput. Di luar gedung kaca ber-AC tempat jam tangan seharga puluhan juta itu dipamerkan, ribuan kurir paket dan pengendara ojek daring saban hari berjibaku menembus terik matahari dan hujan badai tanpa henti. Di pergelangan tangan mereka, jam tangan digital seharga lima puluh ribu rupiah dari pasar malam tetap berdetak setia tanpa pernah menuntut pembaruan sistem berkala atau mengeluhkan kondisi cuaca ekstrem. Mereka adalah petualang jalanan yang sesungguhnya di rimba aspal kota, tetapi ironisnya tidak pernah membutuhkan gadget tangguh berharga selangit hanya untuk membuktikan ketangguhan fisik mereka kepada dunia.

Di meja warkop tempat obrolan mengalir tanpa pretensi, membeli jam tangan ekspedisi gunung seharga puluhan juta rupiah demi rutinitas harian persis seperti orang yang membeli mobil jip penakluk lumpur hanya untuk terjebak macet berjam-jam di jalanan aspal kota yang mulus. Kita membeli perlengkapan bertahan hidup ekstrem bukan karena benar-benar hendak mendaki punggung tebing terjal, melainkan demi membeli rasa aman semu dan ilusi kebebasan dari rutinitas bilik kantor yang menyesakkan. Jam tangannya mungkin sudah dirancang tahan banting menghadapi guncangan badai alam liar, tetapi pemiliknya masih saja gampang limbung begitu melihat tanggal jatuh tempo tagihan di akhir bulan.`
  },
  {
    title: "Hayley Williams Coret Jakarta dari Tur Asia Bukti Konser Lokal Masih Bikin Kapok",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Hayley Williams", "Paramore", "Konser Musik", "Tur Asia", "Industri Musik", "Margaretha Nina"],
    imageUrl: "https://awsimages.detik.net.id/api/wm/2018/02/22/cffb4126-9125-48c0-93e1-ad60edfc1464_169.jpeg?wid=54&w=1200&v=1&t=jpeg",
    imageAlt: "Vokalis Paramore Hayley Williams bernyanyi penuh energi di atas panggung festival musik",
    sourceUrl: "https://www.detik.com/pop/music/d-8751412/hayley-williams-bakal-tur-asia-2027-tapi-indonesia-gak-masuk-list",
    excerpt: "Hayley Williams resmi mengumumkan jadwal tur solo Asianya untuk 2027 mencakup Manila, Singapura, Seoul, dan Tokyo. Sayangnya Jakarta kembali dicoret dari daftar persinggahan, menyisakan desah kecewa bagi ribuan fans lokal.",
    content: `Ada sebuah rutinitas getir yang hampir selalu dirasakan para penikmat musik tanah air tiap kali poster tur musisi mancanegara melintas di linimasa media sosial. Jari-jemari kita refleks memperbesar gambar jadwal, mata menyusuri deretan nama kota dengan debaran dada tak karuan, sebelum akhirnya menghela napas panjang melihat kenyataan yang sama terulang kembali: Indonesia resmi dilewati. Kita seolah ditakdirkan menjadi bangsa yang paling rajin menyumbangkan jutaan angka pemutaran lagu di layanan streaming dan merajai daftar trending topic jagat maya, tetapi langsung dilupakan begitu sang artis mengemasi koper instrumen untuk menggelar panggung tatap muka di kawasan Asia Tenggara.

Kekecewaan kolektif itu kembali menyeruak setelah pengumuman jadwal tur solo vokalis Paramore, Hayley Williams, resmi diumumkan ke publik. Sebagaimana dicatat dalam laporan Detikcom, Hayley bakal memboyong pertunjukan solonya bertajuk The Hayley Williams Show ke sejumlah panggung Asia pada tahun 2027 mendatang. Rangkaian tur ini dirancang untuk merayakan eksplorasi musikalitas independennya lewat materi album Ego Death at a Bachelorette Party. Namun dalam deretan tanggal yang dipamerkan, Hayley hanya memasukkan empat kota persinggahan: Manila, Singapura, Seoul, dan Tokyo. Jakarta sama sekali tidak tercantum di dalam lembar pengumuman tersebut, memaksa ribuan penggemar setianya di Indonesia mulai menghitung ulang tabungan darurat demi kemungkinan berburu tiket pesawat ke negara tetangga.

Absennya Jakarta dari peta tur musisi dunia semacam ini tentu menjadi tamparan telak bagi narasi muluk para pembuat kebijakan wisata tanah air. Belakangan ini, kementerian terkait begitu gembar-gembor menjajakan konsep pariwisata musik, memamerkan mimpi memancing devisa triliunan rupiah dari kantong wisatawan asing yang datang berbondong-bondong menonton festival. Namun saat [pejabat sibuk berburu devisa turis asing lewat konser musik](/kemenpar-berburu-turis-asing-lewat-konser-bts-saat-penonton-lokal), kenyataan di lapangan justru memperlihatkan bahwa nama besar sekelas Hayley Williams saja enggan melirik panggung Indonesia. Kontradiksi ini menelanjangi jurang pemisah yang sangat lebar antara retorika manis di ruangan rapat pejabat dengan kepercayaan promotor global terhadap ekosistem pertunjukan musik kita.

![Vokalis Paramore Hayley Williams bernyanyi penuh energi di atas panggung festival musik](https://awsimages.detik.net.id/api/wm/2018/02/22/cffb4126-9125-48c0-93e1-ad60edfc1464_169.jpeg?wid=54&w=1200&v=1&t=jpeg)

Keputusan para musisi dunia untuk melewati Indonesia sejatinya bukan hal mengejutkan bagi siapa saja yang pernah merasakan getirnya menonton konser di negeri ini. Penonton kita sudah terlalu kenyang disuguhi drama berkepanjangan: mulai dari sindikat calo tiket daring yang membuat harga karcis melambung tak masuk akal, izin keramaian yang berbelit-belit dengan biaya tak kasat mata, hingga persoalan [venue konser musik di Jakarta yang makin menumpuk](/venue-konser-musik-menumpuk-di-jakarta-saat-penonton-daerah-cuma) tanpa dibarengi kesiapan transportasi umum massal, akustik gedung yang layak, maupun mitigasi cuaca yang manusiawi. Manajemen artis internasional tentu berpikir puluhan kali sebelum memboyong peralatan mahal dan reputasi mereka ke tempat yang tata kelolanya masih gemar bikin senam jantung.

Bandingkan dengan negara tetangga seperti Singapura yang memperlakukan industri pertunjukan dengan perhitungan kalkulatif yang matang. Di sana, perizinan dipusatkan dalam satu pintu terpadu, akses kereta bawah tanah langsung terhubung ke depan gerbang stadion, sistem pendingin udara beroperasi prima, dan aparat menindak tegas siapa saja yang berani memainkan perangkap calo tiket tak resmi. Sementara di Indonesia, penonton kelas pekerja bergaji pas-pasan harus berdesakan di lumpur lapangan terbuka yang becek, menghirup debu berjam-jam, lalu dipaksa menelan kenyataan bahwa tiket kategori festival yang dibeli dengan menyisihkan uang makan sebulan ternyata berada di balik tiang tenda sponsor VIP. Pengalaman menonton yang traumatis ini bukan hanya menguras emosi penonton lokal, tetapi juga menjadi catatan hitam yang cepat menyebar di meja manajemen artis global.

Di sudut-sudut kedai kopi tempat anak muda biasa nongkrong membicarakan rilisan musik, nasib penonton konser di Indonesia hari ini persis seperti tetangga jauh yang cuma dipanggil saat empunya hajatan butuh tepuk tangan riuh di halaman depan, tetapi kursinya buru-buru disembunyikan saat hidangan pesta mulai dibagikan di ruang tamu. Kita diminta terus berbangga hati menjadi pendengar musik paling berisik di Asia Tenggara, sembari dipaksa pasrah menikmati rekaman video konser idola dari layar ponsel milik penonton di Singapura. Algoritma peranti digital kita boleh saja mendekatkan suara sang idola ke dalam telinga setiap detik, tetapi selama tata kelola panggung lokal masih bobrok, jarak antara kita dengan panggung nyatanya akan selalu membentang sejauh tiket penerbangan internasional.`
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
  console.log(`🎉 Batch 01:00 selesai! Total artikel terbit: ${results.length}`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261114-0100.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Batch run failed:", err);
      process.exit(1);
    });
}
