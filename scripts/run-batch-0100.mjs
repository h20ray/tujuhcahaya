import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Elon Musk Suntik Mati Cybertruck Bikin Penggemar Fanatik Bingung Cari Jati Diri",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Cybertruck", "Elon Musk", "Mobil Listrik", "Tesla", "Teknologi Otomotif", "Elang Elano"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/05/STKS493_CYBERTRUCK_CVIRGINIA_C.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Mobil pikap listrik Tesla Cybertruck terparkir di pinggir jalan raya dengan bodi baja tahan karat bersudut tajam",
    sourceUrl: "https://www.theverge.com/transportation/1031991/elon-musk-cancels-cybertruck-tesla-fans-backlash",
    excerpt: "Tesla resmi menarik steker alias menghentikan kelanjutan pikap listrik Cybertruck. Keputusan mendadak Elon Musk ini membikin para loyalis garis keras yang telanjur menjadikan mobil segitiga baja itu sebagai identitas diri mendadak linglung dan merasa dikhianati.",
    content: `Kalau ada satu benda di jagat otomotif modern yang paling sukses membikin orang geleng-geleng kepala antara takjub atau geli, benda itu pastilah Tesla Cybertruck. Sejak pertama kali dipamerkan dengan insiden kaca pecah yang melegenda, mobil pikap listrik berbentuk prisma segitiga itu langsung membelah dunia menjadi dua kubu. Di satu sisi ada orang-orang waras yang melihatnya sebagai tempat sampah berjalan berbalut baja nirkarat, dan di sisi lain ada sekelompok loyalis fanatik yang menganggapnya sebagai mahakarya masa depan distopia fiksi ilmiah. Bagi kelompok kedua, mengendarai mobil seharga lebih dari satu miliar rupiah ini bukan sekadar urusan transportasi dari rumah ke kantor, melainkan pengumuman identitas ke seluruh jagat maya bahwa mereka adalah pionir peradaban baru.

Namun bulan madu para pemuja teknologi futuristik itu mendadak berakhir dengan suara benturan yang sangat keras. Sebagaimana dicatat dalam laporan investigasi The Verge pekan ini, Tesla secara resmi memutuskan untuk menyuntik mati proyek Cybertruck alias menghentikan produksinya ke depan. Keputusan drastis yang diambil langsung oleh sang nakhoda, Elon Musk, ini memicu gelombang kekecewaan luar biasa dari komunitas pemilik yang selama ini paling getol membela sang juragan dari segala cercaan di internet.

Rasa syok para loyalis sangat bisa dipahami. Selama bertahun-tahun, mereka rela pasang badan menghadapi olokan warga net. Ketika panel bodi mobil terlihat renggang dengan celah selebar jari tangan, mereka berdalih itu bagian dari estetika industri brutal. Saat pedal gas tiba-tiba macet terganjal karpet atau wiper raksasa di kaca depan mogok di tengah hujan deras, mereka tetap tersenyum sembari mengunggah video ke YouTube bahwa ini adalah dinamika produk revolusioner. Mereka membangun kepribadian daring di sekeliling mobil ini, menempelkan stiker kanal media sosial di pintu samping, dan merasa menjadi manusia paling keren saat bersusah payah memarkir kendaraan bongsor tersebut di area parkir minimarket yang sempit.

![Mobil pikap listrik Tesla Cybertruck terparkir di pinggir jalan raya dengan bodi baja tahan karat bersudut tajam](https://platform.theverge.com/wp-content/uploads/sites/2/2025/05/STKS493_CYBERTRUCK_CVIRGINIA_C.jpg?quality=90&strip=all&crop=0,0,100,100)

Kini, karpet merah itu mendadak ditarik dari bawah kaki mereka oleh tangan sang idola sendiri. Manuver ugal-ugalan Elon Musk ini sebetulnya bukan hal baru, melainkan kebiasaan lama sang triliuner yang gemar melempar janji manis revolusi teknologi tapi ujung-ujungnya [harganya membikin dompet pembeli menangis histeris](/starlink-mini-2-bawa-baterai-mandiri-tapi-harganya-bikin-dompet) tanpa jaminan masa depan yang beres. Dalam catatan industri otomotif global, mematikan lini produk yang baru seumur jagung adalah pengakuan terselubung bahwa produk tersebut sejatinya adalah kegagalan desain yang terlalu mahal untuk terus dipertahankan.

Di balik retorika manis tentang efisiensi modal dan fokus perusahaan ke proyek robot humanoid Optimus serta taksi otonom Cybercab, realitas di lapangan berbicara lebih jujur. Angka penjualan pikap ini jeblok jauh di bawah proyeksi awal ratusan ribu unit per tahun. Masyarakat luas yang awalnya penasaran segera sadar bahwa kendaraan ini tidak praktis untuk pekerjaan lapangan sungguhan, terlalu berbahaya bagi pejalan kaki di jalan raya, dan merepotkan saat diajak bermanuver di jalanan kota. Masalah ketersediaan suku cadang, bengkel bodi khusus yang langka, serta klausul kontrak garansi yang rumit akhirnya membuat konsumen berpikir seribu kali sebelum menandatangani surat pembiayaan. Korporasi akhirnya memilih menyelamatkan neraca keuangan mereka daripada terus membakar uang demi memuaskan gengsi segelintir penggemar fanatik.

Di tongkrongan warkop pinggir jalan, kita sering menyaksikan lelucon serupa tentang orang yang membeli barang antik mahal hanya demi dipuji kawan satu meja, lalu bingung saat barang itu mogok dan tidak ada bengkel yang mau menerima onderdilnya. Para pemilik pikap baja ini kini mendapati mobil kebanggaan mereka berubah menjadi monumen termahal di garasi rumah. Mereka memegang kendaraan langka yang ketersediaan suku cadangnya bakal menjadi misteri, nilainya di pasar mobil bekas merosot bebas, dan idola yang mereka agungkan di media sosial sudah beralih asyik memainkan mainan baru di panggung pameran berikutnya.`
  },
  {
    title: "Maliq and D Essentials Rilis Album Baru Bukti Band Tua Nggak Harus Mengemis Reuni",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Maliq and D Essentials", "Album Baru", "Musik Pop", "Industri Musik", "Gen Z", "Margaretha Nina"],
    imageUrl: "https://xposeindonesia.com/wp-content/uploads/2026/11/mad_02.jpg",
    imageAlt: "Grup musik pop jazz MALIQ and D Essentials berpose bersama dalam peluncuran album kesepuluh Kabar Gembira",
    sourceUrl: "https://www.detik.com/pop/music/d-8749068/maliq-dessentials-rilis-album-baru-yang-dengerin-regenerasi-sampai-ke-gen-z",
    excerpt: "MALIQ & D’Essentials resmi menelurkan album studio ke-10 bertajuk Kabar Gembira. Sebuah pencapaian langka yang membuktikan bahwa grup musik senior berusia lebih dari dua dekade sanggup menaklukkan telinga Gen Z tanpa perlu mengandalkan jualan nostalgia usang.",
    content: `Dalam siklus hidup industri musik populer di Indonesia, ada pola lumrah yang nyaris selalu menimpa band-band yang usianya sudah melewati angka dua dekade. Skenarionya sangat mudah ditebak: kalau tidak bubar jalan akibat perang ego antar-personel dan sengketa royalti lagu lama, nasib terbaik mereka biasanya terdampar menjadi band spesialis reuni. Mereka berkeliling dari satu festival musik ke festival lain, membawakan daftar lagu yang persis sama dengan yang mereka rekam di awal tahun 2000-an, demi memancing koor massal penonton usia kepala empat yang sedang rindu masa-masa berseragam putih abu-abu. Panggung nostalgia memang empuk dan minim risiko, tapi bagi sebuah entitas kreatif, itu adalah kuburan tempat ide-ide baru dipaksa mati suri.

Namun anggapan bahwa musisi senior cuma bisa hidup dari sisa-sisa kejayaan masa lalu dipatahkan secara telak oleh MALIQ & D’Essentials. Sebagaimana dicatat dalam laporan detikcom dan liputan media musik nasional pekan ini, grup yang dinakhodai Angga Puradiredja, Indah Wisnuwardhana, Widi Puradiredja, Jawa, Lale, dan Ilman tersebut resmi menelurkan album studio kesepuluh mereka yang diberi tajuk Kabar Gembira. Album penuh ini bukan sekadar penanda produktivitas, melainkan sebuah pernyataan artistik yang segar di tengah lesunya rilisan album fisik berkualitas.

Yang membikin fenomena ini istimewa di mata penikmat gigs urban adalah keberhasilan mereka merangkul generasi pendengar baru. Bila Anda mampir ke barisan terdepan konser musik mereka belakangan ini, wajah-wajah yang berteriak histeris menghafal lirik bukan lagi rekan sebaya mereka di awal era 2000-an, melainkan anak-anak muda Gen Z hingga Generasi Alfa yang bahkan belum lahir saat lagu legendaris seperti Terdiam atau Untitled pertama kali diputar di radio frekuensi FM. Ledakan karya-karya terbaru mereka di linimasa TikTok dan platform streaming membuktikan bahwa musik pop jazz dengan aransemen organik tetap punya daya pikat magis bagi telinga anak muda zaman sekarang.

![Grup musik pop jazz MALIQ and D Essentials berpose bersama dalam peluncuran album kesepuluh Kabar Gembira](https://xposeindonesia.com/wp-content/uploads/2026/11/mad_02.jpg)

Langkah berani merilis materi segar berisi kolaborasi lintas generasi ini terasa kontras jika dibandingkan dengan tren industri panggung yang kerap memilih jalan pintas menjual [paket nostalgia musisi lawas karena ketakutan merugi](/paket-nostalgia-dewa-19-di-de-tjolomadoe-bukti-panggung-musik) di hadapan sponsor korporat. Banyak promotor dan label rekaman menganggap pasar musik anak muda saat ini terlalu dangkal dan cuma peduli pada tren potongan audio lima belas detik. MALIQ membongkar prasangka sempit tersebut dengan menyodorkan aransemen instrumen yang kaya, perpaduan vokal yang matang, serta lirik yang membumi tanpa harus terdengar sok puitis atau memaksakan diri menjadi orang lain.

Menurut keterangan para personel dalam sesi jumpa media di Jakarta, penggarapan album kesepuluh ini mengusung semangat kebersamaan yang cair. Mereka tidak segan berkolaborasi dengan musisi dari ranah yang berbeda, meramu warna musik baru tanpa kehilangan identitas groove khas yang telah menjadi cap dagang mereka selama dua puluh empat tahun berkarier. Mereka menolak terjebak dalam sangkar emas kenyamanan masa lalu, memilih terus berkeringat di studio rekaman, dan membuktikan bahwa usia hanyalah angka di atas kertas kontrak kerja.

Denyut kesegaran karya baru ini terasa langsung di ruang-ruang komunal kota, mulai dari kafe kecil tempat anak muda nongkrong mengerjakan tugas hingga toko piringan hitam independen yang kembali ramai memesan rilisan fisik mereka. Komunitas penikmat musik arus bawah yang biasanya skeptis terhadap band arus utama pun menaruh hormat pada konsistensi penulisan lagu yang jujur dan tidak sekadar mengejar viralitas murahan. Sikap respek semacam ini tidak bisa dibeli dengan anggaran promosi media sosial, melainkan diraih lewat keringat di balik instrumen panggung dari panggung ke panggung.

Di tengah gempuran tren musik instan berbasis kecerdasan buatan dan daur ulang lagu-lagu lawas yang membosankan, keberanian MALIQ & D’Essentials adalah oase yang melegakan bagi ekosistem musik tanah air. Ketika bapak-bapak berkepala keluarga dan anak kuliahan semester satu bisa berdiri berdampingan menikmati ketukan drum dan gesekan bass yang sama di depan panggung, kita disadarkan pada satu hal sederhana: kabar paling gembira dalam dunia musik adalah ketika lagu yang bagus tidak pernah butuh surat izin dari tahun kelahiran pendengarnya.`
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
  console.log(`🎉 Batch Publikasi Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
}

runBatch().catch(err => {
  console.error("Batch Execution Error:", err);
  process.exit(1);
});
