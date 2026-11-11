import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Driver AMD Gerus Kesehatan SSD Satu Persen Tiap Bulan Bukti Software Makin Ceroboh",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["AMD", "Andoru Ray", "Driver GPU", "Hardware", "Industri Game", "PC Gaming", "SSD Storage"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/6e2eGX2VSocFcNeEdt85NB-1920-80.jpg",
    imageAlt: "Ilustrasi kartu grafis AMD Radeon dan drive penyimpanan SSD NVMe pada motherboard komputer gaming",
    sourceUrl: "https://www.pcgamer.com/hardware/graphics-cards/amd-users-are-reporting-a-misfiring-utility-is-eating-ssd-health-by-1-percent-a-month-amd-says-a-fix-is-on-the-way-for-its-gpu-drivers/",
    excerpt: "Utilitas dalam driver kartu grafis AMD dilaporkan membakar masa pakai SSD hingga satu persen tiap bulan akibat penulisan data abnormal tanpa henti. Di tengah mahalnya harga komponen PC, gamer dipaksa menanggung keausan hardware akibat kelalaian perangkat lunak pabrikan.",
    content: `Bagi anak muda yang merakit komputer sendiri di kamar indekos, menjaga kesehatan setiap keping perangkat keras sudah seperti merawat peninggalan pusaka keluarga. Setiap deru kipas pendingin yang agak mendesing kencang bisa memicu keringat dingin, apalagi jika menyangkut kesehatan media simpan SSD berkecepatan tinggi yang harganya di toko daring tak pernah benar-benar ramah di kantong. Kita belajar menyetel batas konsumsi daya, mematikan efek visual Windows yang tak berguna, hingga rutin memeriksa indikator kesehatan drive melalui peranti pemantau per jam agar komponen mahal itu panjang umur sampai beberapa tahun ke depan.

Namun apa jadinya jika perusak utama kesehatan drive penyimpanan Anda justru datang dari peranti lunak resmi yang mestinya mengoptimalkan kartu grafis kesayangan? Kabar mengejutkan yang beredar di komunitas perakit komputer pekan ini menampar rasa aman para pengguna kartu grafis kubu merah. Sebagaimana dicatat dalam laporan PC Gamer, sejumlah pengguna di forum Reddit r/pcmasterrace mengungkap keanehan horor di mana utilitas latar belakang milik driver AMD terbukti rakus menggerus usia pakai SSD mereka hingga satu persen setiap bulan secara konstan.

Insiden ini bermula ketika seorang pengguna dengan nama akun Darklinkpower memperhatikan penurunan angka estimasi kesehatan SSD NVMe miliknya yang terjun bebas secara tak wajar. Setelah melakukan pelacakan aktivitas penyimpanan selama berbulan-bulan, ditemukan fakta ganjil: sebuah utilitas internal di dalam paket peranti lunak AMD Adrenalin terus-menerus melakukan penulisan log data galat tanpa henti ke dalam drive, melahap puluhan terabita jatah batas tulis (TBW) hanya dalam hitungan pekan. Pengguna lain di forum komunitas juga melaporkan gejala identik, di mana peranti pemantau mereka mencatat keausan sel memori flash sekitar satu persen tiap tiga puluh hari, padahal komputer mereka jarang digunakan untuk tugas komputasi berat.

![Ilustrasi kartu grafis AMD Radeon dan drive penyimpanan SSD NVMe pada motherboard komputer gaming](https://cdn.mos.cms.futurecdn.net/6e2eGX2VSocFcNeEdt85NB-1920-80.jpg)

Menanggapi kepanikan yang kian meluas di kalangan pemilik kartu grafis Radeon, perwakilan resmi AMD di forum komunitas dan media sosial akhirnya bersuara. Pihak perusahaan mengakui adanya ketidakberesan pada peranti lunak pengendali tersebut dan berjanji akan menyuntikkan perbaikan permanen pada paket pembaruan Adrenalin versi 26.11.1 yang dijadwalkan meluncur akhir bulan ini. Sayangnya, sikap santai korporasi semacam itu sama sekali tidak menghapus kenyataan bahwa sel memori SSD milik ribuan pengguna sudah terlanjur hangus dan tak bisa dikembalikan seperti semula.

Kelalaian fatal semacam ini menjadi cermin buram dari tabiat produsen teknologi modern yang makin ugal-ugalan dalam merilis kode program ke tangan konsumen. Kita berada di era ganjil ketika membeli peranti keras kelas atas seharga puluhan juta rupiah tidak lagi menjamin ketenangan batin. Fenomena perangkat lunak ceroboh ini setali tiga uang dengan kepanikan serupa saat [kabel RTX 50 meleleh membuktikan gamer PC puluhan juta masih waswas rumah kebakaran](/kabel-rtx-50-meleleh-bukti-gamer-pc-puluhan-juta-masih-waswas). Konsumen selalu berada di posisi paling lemah: disuruh merogoh tabungan dalam-dalam untuk membeli produk tercanggih, tetapi kemudian dijadikan kelinci percobaan pengujian sistem gratisan tanpa kompensasi apa pun.

Bagi gamer berkantong pas-pasan di tanah air, situasi ini jelas bikin dongkol bukan kepalang. Mengganti drive SSD NVMe berkapasitas besar bukan perkara sepele bagi buruh bergaji upah minimum atau mahasiswa yang mengandalkan sisa uang jajan bulanan. Kondisi ini kian menyakitkan karena ruang penyimpanan mereka sebelumnya sudah diperas habis-habisan oleh industri game yang kian malas melakukan kompresi data, sebagaimana tampak nyata tatkala [instalasi game modern membengkak ratusan gigabyte](/ketika-update-nier-automata-membengkak-jadi-366-gb-dan-bikin-ssd). Kini, bukan cuma kapasitasnya yang dilahap game raksasa, sel fisik penampung datanya pun ikut dipanggang perlahan oleh peranti lunak driver yang mestinya jadi pelindung.

Para insinyur perangkat lunak di Silicon Valley mungkin menganggap penyusutan kesehatan komponen sebesar belasan persen dalam setahun hanyalah anomali statistik kecil dalam grafik laporan teknis. Namun bagi orang biasa yang harus menghemat uang makan siang demi membeli satu keping drive penyimpanan berkualitas, kecerobohan ini adalah bentuk kerugian nyata yang tak adil. Bila pabrikan kartu grafis raksasa saja sudah begitu ceroboh menjaga kehormatan kode mereka, mungkin ke depannya kita harus bersiap membawa alat pemadam api dan sertifikat garansi tiap kali menekan tombol perbarui driver.`
  },
  {
    title: "Methosa Nyalakan Gemuruh Revolusi Tampar Sikap Dingin Pejabat Hadapi Derita Rakyat",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Budaya Urban", "Gemuruh Revolusi", "Industri Musik", "Kritik Sosial", "Margaretha Nina", "Methosa", "Musik Rock", "Perlawanan"],
    imageUrl: "https://cms.owrite.id/wp-content/uploads/2026/11/utama-img-7067-mw94p2cw-1024x780.webp",
    imageAlt: "Sampul lagu Gemuruh Revolusi dari band alternative rock Methosa yang memuat pesan kritik sosial dan perlawanan rakyat",
    sourceUrl: "https://www.owrite.id/hype/2026/11/09/muak-dengan-kondisi-negeri-methosa-gaungkan-perlawanan-lewat-lagu-gemuruh-revolusi/",
    excerpt: "Grup musik Methosa meluncurkan single beraliran alternative rock cadas berjudul Gemuruh Revolusi. Lagu bernada punk ini membidik apatisme elite politik, lambannya penanganan bencana, dan krisis empati birokrasi yang terus memperdaya warga akar rumput.",
    content: `Jika kita menyalakan radio atau membiarkan daftar putar algoritma layanan streaming musik mengalir seharian, negeri ini seolah sedang baik-baik saja tanpa ada noda sedikit pun. Deretan lirik yang mendominasi tangga lagu populer berkutat pada siklus asmara anak muda urban yang seragam: patah hati karena ditinggal menikah, rindu yang tak tersampaikan di stasiun kereta, atau lamunan puitis tentang aroma kopi senja di sudut kafe berpendingin ruangan. Industri musik arus utama begitu lihai mengemas kenyamanan semu, menyuntikkan obat bius penenang agar para pendengar melupakan realitas sosial di luar jendela kamar yang kian hari kian mencekik leher warga biasa.

Di tengah keheningan sikap kritis panggung hiburan itulah, grup musik rock alternatif asal Jakarta, Methosa, mendadak membanting pintu wacana publik lewat karya terbaru mereka. Sebagaimana dicatat dalam laporan jurnalis OWRITE, band yang digawangi vokalis Mansen Munthe ini resmi meluncurkan lagu bertajuk Gemuruh Revolusi. Berbalut distorsi gitar kasar bernuansa punk yang bertempo cepat, tembang anyar ini menjadi ledakan amarah frontal terhadap keangkuhan para penguasa dan mandeknya keadilan sosial di berbagai pelosok nusantara.

Lagu ini bukan sekadar luapan amarah hampa dari tongkrongan studio sewaan. Dalam keterangan resmi yang disampaikan pihak band, kelahiran Gemuruh Revolusi dipicu oleh rasa muak yang sudah menumpuk di ubun-ubun melihat lambannya respons birokrasi pemerintah dalam menangani bencana alam dan kebakaran hutan yang berulang kali menelan korban jiwa warga desa. Methosa menyoroti kontras yang menyakitkan antara nestapa para pengungsi di tenda darurat dengan tingkah polah para pejabat publik yang dingin, doyan mengumbar janji manis di media sosial, dan kerap melempar tanggung jawab ke faktor anomali cuaca.

![Sampul lagu Gemuruh Revolusi dari band alternative rock Methosa yang memuat pesan kritik sosial dan perlawanan rakyat](https://cms.owrite.id/wp-content/uploads/2026/11/utama-img-7067-mw94p2cw-1024x780.webp)

Langkah berani Methosa menghidupkan kembali fungsi musik sebagai senjata kontrol sosial terasa sangat menyegarkan di tengah lesunya nyali para musisi arus utama. Sudah terlalu lama etalase industri hiburan tanah air disterilkan dari kritik politik karena para produser dan label rekaman ketakutan kehilangan kontrak iklan korporasi atau izin pentas dari aparat keamanan. Keberanian Methosa menyuarakan isu kerakyatan ini mengingatkan kita pada momen langka saat [Idgitaf membawa isu banjir dan asap hutan ke panggung gemerlap](/idgitaf-bawa-banjir-dan-asap-hutan-ke-panggung-gemerlap-ami), membuktikan bahwa panggung seni mestinya menjadi pengeras suara bagi penderitaan warga yang tersingkirkan dari sorotan kamera.

Dengan menolak berkompromi pada selera pasar yang serba manis, Methosa pada dasarnya sedang merawat tradisi perlawanan yang dulu pernah dihidupkan oleh dedengkot musik protes tanah air. Mereka memilih jalan terjal yang sama dengan para seniman independen lain yang [menolak tunduk pada tirani algoritma musik](/gugun-blues-shelter-tolak-tunduk-algoritma-lewat-raungan-enam) demi menjaga martabat pesan di balik setiap lirik yang dinyanyikan. Di warung-warung kopi pinggir rel, bengkel motor malam hari, dan sudut tongkrongan buruh pabrik, lagu dengan amarah murni semacam inilah yang sesungguhnya punya daya rekat emosional kuat. Warga bawah tidak butuh nasehat puitis dari artis metropolitan yang tak pernah merasakan antre air bersih atau panik saat atap rumah diterbangkan angin puting beliung.

Kehadiran Gemuruh Revolusi juga menampar kemalasan industri musik digital yang selama ini gemar mendaur ulang tembang cinta lama demi keuntungan instan tanpa risiko rugi. Musik perlawanan membuktikan bahwa kesenian tidak harus selalu jinak dan meminta restu dewan sensor untuk bisa menyentuh sanubari massa. Keringat dan kepalan tangan penonton di gigs bawah tanah adalah bukti sahih bahwa kejujuran berekspresi masih memiliki tempat terhormat di tengah kepungan tren joget viral berbayar.

Para pemangku kebijakan di gedung-gedung parlemen barangkali tak akan pernah memutar lagu Gemuruh Revolusi di ruang sidang berpenyejuk udara mereka. Bagi mereka, keluhan korban bencana alam dan jeritan petani yang kehilangan lahan hanyalah baris angka kecil di tumpukan dokumen dinas yang bisa ditunda pembahasannya. Namun lewat distorsi gitar yang bising dan ketukan drum yang tak kenal ampun, Methosa telah menorehkan pengingat bersejarah: selama para elite terus berpesta di atas penderitaan rakyat jelata, musik cadas akan selalu menemukan jalannya untuk menggedor pintu nurani kekuasaan.`
  }
];

export async function runBatch() {
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
      markAsSeen(art.sourceUrl.trim());
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi 01:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261110-0100.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
