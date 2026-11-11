import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Idgitaf Rilis Sedia Aku Sebelum Hujan Tangkap Getir Anak Muda Terjepit Realitas",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Brigitta Meliala", "Budaya Urban", "Idgitaf", "Industri Musik", "Kritik Sosial", "Margaretha Nina", "Musik Indie", "Pop Indonesia"],
    imageUrl: "https://images.genpi.co/uploads/arsip/normal/2026/11/09/penyanyi-cantik-idgitaf-menilai-lagunya-yang-berju-ixvr.jpg",
    imageAlt: "Potret penyanyi Idgitaf saat berbicara mengenai makna dan latar belakang lagu Sedia Aku Sebelum Hujan",
    sourceUrl: "https://www.genpi.co/film-dan-musik/292546/idgitaf-sebut-sedia-aku-sebelum-hujan-relevan-dengan-kondisi-indonesia-lagu-lahir-dari-keresahan",
    excerpt: "Idgitaf merilis lagu Sedia Aku Sebelum Hujan yang terinspirasi dari keresahan nyata atas karut-marut kondisi sosial di Indonesia. Di saat industri musik arus utama sibuk memproduksi lagu cinta seragam demi algoritma media sosial, karya anyar ini hadir sebagai suara jujur generasi muda yang lelah bertahan di tengah ketidakpastian hidup.",
    content: `Bagi anak muda yang saban hari berdesakan di gerbong kereta rel listrik atau terjebak macet berjam-jam di atas motor kredit, daftar putar musik di ponsel adalah benteng pertahanan terakhir agar kewarasan tidak lekas runtuh sebelum jam kantor usai. Namun jika Anda menyisir tangga lagu teratas di aplikasi streaming hari ini, deretan lagunya nyaris seragam dan menjemukan. Sebagian besar cuma mengulang formula klise tentang drama patah hati remaja, perselingkuhan murahan, atau melodi riang gembira yang sengaja dirancang seringkas mungkin agar lekas dipotong menjadi musik latar video pendek. Musik pop arus utama seolah hidup di ruang kedap udara yang steril dari debu jalanan, berpura-pura bahwa beban terberat warga republik ini hanyalah perkara pesan singkat yang tidak kunjung dibalas gebetan.

Di tengah lanskap hiburan yang serba manis artifisial tersebut, sebuah karya anyar hadir mengetuk pintu kesadaran dengan kejujuran yang menampar. Sebagaimana dikutip dari keterangan resmi sang penyanyi yang dicatat GenPI.co, solois muda Brigitta Meliala alias Idgitaf resmi meluncurkan tembang terbarunya yang bertajuk Sedia Aku Sebelum Hujan. Alih-alih meratapi drama asmara yang remeh-temeh, penyanyi yang kerap memikat lewat lirik kontemplatif ini menegaskan bahwa lagu tersebut lahir murni dari kegelisahan batin memandang situasi Indonesia hari ini yang kian tidak menentu bagi banyak orang.

![Potret penyanyi Idgitaf saat berbicara mengenai makna dan latar belakang lagu Sedia Aku Sebelum Hujan](https://images.genpi.co/uploads/arsip/normal/2026/11/09/penyanyi-cantik-idgitaf-menilai-lagunya-yang-berju-ixvr.jpg)

Idgitaf menolak menjadikan karyanya sekadar komoditas penenang telinga sesaat. Dalam pandangannya, ruang bermusik semestinya dimanfaatkan untuk menyuarakan pergulatan warga yang jauh lebih besar dan nyata di luar sana. Menariknya, ia membedah metafora hujan bukan sekadar fenomena alam romantis tempat dua orang berbagi payung berdua. Bagi sebagian masyarakat di pelosok atau kawasan bantaran kali, hujan lebat adalah lonceng tanda bahaya yang mendatangkan banjir bandang dan tanah longsor akibat tata kelola ruang yang bobrok. Sementara di belahan pulau lain, petani dan warga justru berdoa memohon setitik air hujan di tengah bencana kekeringan berkepanjangan serta kepulan asap kebakaran hutan. Dua nasib yang bertolak belakang tersebut diikat oleh benang merah yang sama, yakni tuntutan atas pemulihan lingkungan dan akuntabilitas para pengambil kebijakan.

Kerap kali musisi perempuan di kancah independen disederhanakan oleh media hanya sebagai penghias etalase bergaya estetik dengan petikan gitar akustik manis. Padahal melalui karya ini, Idgitaf membuktikan bahwa kepekaan musikalitas perempuan sanggup menjadi instrumen kritik sosial yang berdaya ledak tinggi. Ia tidak perlu berteriak kasar untuk menunjukkan kemarahan; pilihan kata yang lugas dan melodi sendu justru lebih efektif menguliti kegagalan struktural negara yang sering kali bersembunyi di balik slogan pembangunan puitis.

Keberanian menenun kegelisahan publik ke dalam karya seni ini kontras dengan kebiasaan umum industri hiburan tanah air. Kita sudah terlalu lelah melihat bagaimana [musisi tanah air ramai-ramai merilis lagu tiap Jumat](/ketika-seluruh-musisi-janjian-rilis-lagu-tiap-jumat-dan-telinga) hanya demi memburu metrik putar algoritma platform streaming tanpa memedulikan bobot pesan yang disampaikan. Kebanyakan label rekaman lebih memilih jalur aman mendaur ulang formula basi daripada membiarkan artis mereka berbicara lantang soal realitas sosial. Fenomena Idgitaf ini menyegarkan kembali ingatan kita pada sikap serupa saat [grup blues lokal menolak tunduk pada rumus viral](/gugun-blues-shelter-tolak-tunduk-algoritma-lewat-raungan-enam) dengan tetap mempertahankan lirik membumi yang merekam kegelisahan masyarakat kelas pekerja.

Menyanyikan keresahan hidup di negeri yang serba mahal dan minim jaminan hari tua bukanlah perkara mudah. Generasi muda hari ini dituntut tangguh menghadapi gelombang pemutusan hubungan kerja, harga sewa hunian yang melangit, serta upah minimum yang habis digerus inflasi sembako. Dalam kondisi serba terjepit itu, nasihat klise pejabat yang menyuruh rakyat terus bersabar terdengar bagai ejekan hampa. Musik yang berani memotret kerentanan ini bukan sedang menjual kesedihan, melainkan menawarkan pelukan hangat bagi siapa saja yang merasa sendirian menanggung beban hidup.

Sedia payung sebelum hujan mungkin terdengar seperti petuah bijak kuno di buku pelajaran sekolah dasar. Namun ketika hujan yang turun membawa lumpur banjir kiriman dan payung yang kita miliki sudah bolong di sana-sini, lagu seperti milik Idgitaf ini menjadi pengingat getir bahwa sebelum menuntut rakyat selalu siap sedia, ada baiknya para pemangku kuasa mulai belajar mengurus genteng dan saluran air yang mereka biarkan bocor bertahun-tahun.`
  },
  {
    title: "Janji Monitor OLED Murah Datang Lebih Cepat tapi Gamer Masih Waswas Dihantui Burn-in",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Hardware PC", "Industri Game", "Inkjet OLED", "Monitor Gaming", "OLED", "PC Gaming", "TCL CSOT"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/jFv4meMpMKV2hedgdGx6Zd-1920-80.jpg",
    imageAlt: "Ilustrasi monitor gaming panel OLED di atas meja komputer dengan latar pencahayaan ruangan gelap",
    sourceUrl: "https://www.pcgamer.com/hardware/gaming-monitors/cheaper-oleds-may-be-here-even-quicker-than-we-thought-as-tcl-csot-says-its-new-inkjet-printing-facility-could-be-up-and-running-as-soon-as-this-time-next-year/",
    excerpt: "Pabrikan panel TCL CSOT mempercepat instalasi mesin pabrik inkjet OLED yang menjanjikan monitor gaming berkualitas tinggi dengan harga jauh lebih terjangkau mulai tahun depan. Namun bagi komunitas gamer PC, janji harga miring ini masih dibayangi trauma lama soal ancaman layar berbayang permanen dan siasat dagang produsen.",
    content: `Bagi pencinta rakitan PC di tanah air, menatap etalase toko komputer modern sering kali terasa seperti menonton parade kemewahan yang mustahil disentuh. Di saat harga komponen utama seperti kartu grafis, prosesor, dan memori RAM sudah menguras tabungan berbulan-bulan, monitor gaming berpanel OLED kerap diposisikan sebagai kasta tertinggi yang hanya bisa dinikmati kalangan sultan berkantong tebal. Warna hitam pekat yang sempurna, kontras visual tanpa batas, serta waktu respons instan tanpa jejak buram memang menjadi impian setiap pemain game tembak-menembak maupun petualangan sinematis. Namun begitu melirik label harga di atas belasan juta rupiah, mayoritas gamer berakal sehat langsung menarik napas panjang dan memilih bertahan dengan monitor panel IPS lawas yang sudut layarnya sudah mulai menguning.

Harapan untuk mendemokratisasi kemewahan visual tersebut mendadak merebak kencang pekan ini. Sebagaimana dicatat dalam laporan teknis PC Gamer dan TechPowerUp, pabrikan layar raksasa TCL CSOT mengumumkan bahwa fasilitas pabrik pencetakan OLED inkjet (IJP) milik mereka telah resmi memasuki tahap instalasi peralatan mesin produksi. Perkembangan proyek berteknologi tinggi ini berjalan jauh melampaui jadwal semula. Alih-alih baru beroperasi pada 2028 seperti rumor yang beredar sebelumnya, anak perusahaan TCL tersebut kini menargetkan produksi massal panel OLED inkjet siap digulirkan pada akhir tahun depan. Metode cetak inkjet ini digadang-gadang memangkas biaya fabrikasi secara drastis dibandingkan proses evaporasi termal konvensional yang rumit dan boros bahan baku.

![Ilustrasi monitor gaming panel OLED di atas meja komputer dengan latar pencahayaan ruangan gelap](https://cdn.mos.cms.futurecdn.net/jFv4meMpMKV2hedgdGx6Zd-1920-80.jpg)

Di atas kertas, kabar percepatan pabrik ini tentu terdengar bagaikan angin surga bagi pasar perangkat keras PC yang kian mencekik. Jika ongkos produksi panel bisa ditekan ke titik terendah, monitor gaming OLED berkecepatan 240 Hz yang selama ini berharga selangit berpotensi dibanderol seharga monitor kantor kelas menengah. Namun bagi komunitas gamer yang sudah kenyang menelan janji manis pabrikan, antusiasme ini selalu disertai rasa skeptis wajar. Persoalan panel OLED bukan melulu soal berapa lembar uang rupiah yang harus diserahkan ke kasir toko, melainkan sejauh mana ketahanan panel tersebut saat dipaksa bekerja rodi menampilkan elemen antarmuka game (HUD) yang statis selama berjam-jam setiap malam.

Kekhawatiran akan fenomena layar terbakar permanen (burn-in) masih menjadi momok menakutkan yang membuat gamer ragu beralih. Mengetahui bahwa logo mini-map game atau bilah tugas Windows bisa tercetak abadi di tengah layar tentu bukan pengalaman yang menyenangkan setelah merogoh kocek dalam-dalam. Kecemasan semacam ini serupa dengan trauma saat [kabel daya kartu grafis puluhan juta rawan meleleh](/kabel-rtx-50-meleleh-bukti-gamer-pc-puluhan-juta-masih-waswas) yang sempat membuat para pemilik komputer waswas meninggalkan PC dalam keadaan menyala. Lebih menjengkelkan lagi, pabrikan hardware sering kali menutup mata terhadap kegelisahan teknis para pemain, persis seperti kebiasaan saat [eksekutif korporasi menyamakan pengalaman bermain di komputer](/bos-take-two-sebut-pengalaman-pc-dan-konsol-sama-padahal-gta-6) dengan perangkat konsol yang tidak memerlukan fleksibilitas penggunaan harian.

Kondisi ini kian pelik jika kita menengok ekosistem jual-beli komputer di pasar sekunder Indonesia. Komunitas gamer kita sangat mengandalkan nilai jual kembali saat hendak meningkatkan spesifikasi perangkat. Di forum jual-beli daring atau sentra komputer Mangga Dua, menjual monitor bekas panel OLED yang masa garansinya sudah habis ibarat menjual mobil bekas tabrakan parah; calon pembeli bakal memeriksa setiap milimeter piksel dengan kaca pembesar demi mencari jejak bayangan tipis. Tanpa jaminan ketahanan bahan organik jangka panjang, monitor OLED murah berpotensi menjadi barang sekali pakai yang nilainya langsung terjun bebas ke titik nol begitu masa garansi toko kedaluwarsa.

Tantangan terbesar bagi teknologi cetak inkjet TCL bukanlah sekadar membuktikan bahwa mereka sanggup mencetak layar dengan harga murah meriah di lantai pabrik. Ujian sesungguhnya adalah membuktikan bahwa senyawa organik yang disemprotkan lewat nosel presisi tersebut memiliki usia pakai yang tangguh, tidak rentan mengalami penurunan kecerahan drastis setelah pemakaian setahun, dan didukung garansi tukar unit tanpa syarat berbelit dari distributor resmi di tanah air. Tanpa kepastian purnajual yang nyata, embel-embel harga terjangkau hanya akan mengalihkan risiko cacat produksi langsung ke pundak pembeli.

Mengharapkan teknologi visual mutakhir turun harga ke tingkat yang ramah kantong memang impian sah setiap gamer kelas pekerja. Namun sebelum Anda buru-buru membongkar celengan ayam demi menyambut era monitor OLED murah, ada baiknya tetap bersikap dingin dan membiarkan para pengulas teknologi independen menguji ketahanannya terlebih dahulu. Menikmati game favorit dengan monitor sederhana yang awet bertahun-tahun jelas jauh lebih menenangkan jiwa daripada pamer layar hitam pekat yang diam-diam bikin jantung berdebar tiap kali melihat ikon desktop diam terlalu lama.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 13:00 WIB)");
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
  console.log(`🎉 Batch Publikasi 13:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261110-1300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
