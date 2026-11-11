import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "FAA Baru Pensiunkan Disket Liuk Bukti Sistem Kuno Lebih Waras dari Gimmick Cloud",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "FAA", "Floppy Disk", "Hardware", "Infrastruktur IT", "Keamanan Siber", "Komputasi Cloud", "Teknologi"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/uZhGb6i69gnFxsevcHp427-1920-80.jpg",
    imageAlt: "Ilustrasi tumpukan disket liuk floppy disk 3,5 inci hitam di samping mesin komputer kuno",
    sourceUrl: "https://www.pcgamer.com/hardware/floppy-disks-are-out-21st-century-tech-is-in-the-faa-is-finally-ditching-55-year-old-storage/",
    excerpt: "Badan Penerbangan Federal AS (FAA) akhirnya memensiunkan sistem navigasi berbasis disket liuk 1,44 MB dan MS-DOS demi beralih ke komputasi modern. Di saat para bos IT sibuk memuja jargon cloud yang rentan padam massal, bertahannya disket selama setengah abad justru menjadi bukti telak bahwa kesederhanaan hardware sering kali jauh lebih tangguh daripada ilusi kecanggihan serba otomatis.",
    content: `Di ruang tongkrongan kantor IT atau obrolan warkop pegiat teknologi, kita sudah terbiasa mendengar para konsultan muda berjas necis mengkhotbahkan keagungan komputasi awan. Setiap masalah perusahaan seolah wajib diselesaikan dengan langganan server cloud berjuta-juta rupiah per bulan, pembaruan otomatis tanpa henti, dan bumbu kecerdasan buatan. Siapa pun yang masih menyimpan data di media fisik lokal langsung dicap kolot, kuno, dan anti-kemajuan. Di mata para penginjil teknologi silikon, segala sesuatu yang tidak terhubung ke jaringan internet 24 jam adalah dosa besar yang menghambat efisiensi bisnis. Namun, di balik arogansi modernitas serba daring tersebut, dunia penerbangan sipil yang mengangkut jutaan nyawa manusia tiap hari ternyata baru saja membocorkan rahasia kecil yang bikin para pemuja cloud tersedak kopi.

Fakta mengejutkan tersebut terungkap dalam laporan teknis PC Gamer dan Ars Technica pekan ini. Badan Penerbangan Federal Amerika Serikat (FAA) akhirnya memulai proses pemensiunan Information Display System 4 (IDS-4). Sistem pengendali lalu lintas udara yang mengawal ribuan jadwal pesawat di langit Negeri Paman Sam tersebut selama puluhan tahun ternyata beroperasi menggunakan komputer berbasis MS-DOS dan mengandalkan kepingan disket liuk (floppy disk) 3,5 inci berkapasitas 1,44 megabita. Administrator FAA Bryan Bedford menyatakan bahwa sistem legendaris tersebut kini mulai digantikan oleh Enterprise Information Display System (E-IDS) berbasis arsitektur digital modern guna mempercepat pencatatan laporan pilot dan informasi cuaca penerbangan. Menariknya, sistem disket ini telah mengawal ruang udara selama lebih dari setengah abad tanpa pernah mengalami drama peretasan massal.

![Ilustrasi tumpukan disket liuk floppy disk 3,5 inci hitam di samping mesin komputer kuno](https://cdn.mos.cms.futurecdn.net/uZhGb6i69gnFxsevcHp427-1920-80.jpg)

Bagi orang awam, fakta bahwa pesawat jet modern bernilai triliunan rupiah dipandu oleh disket berkapasitas secuil foto selfie barangkali terdengar menggelikan. Namun bagi kalangan sysadmin yang paham pahitnya dunia infrastruktur jaringan, keputusan FAA mempertahankan sistem kuno tersebut selama puluhan tahun bukanlah tanda kebodohan birokrasi, melainkan kalkulasi ketahanan sistem yang sangat matang. Media penyimpanan mekanis seperti disket 3,5 inci memiliki satu keunggulan mutlak yang tidak dimiliki oleh arsitektur web modern: ia terisolasi secara fisik (air-gapped). Tidak ada malware tebusan (ransomware), serangan penolakan layanan (DDoS), atau peretas asing yang bisa menyusup ke sirkuit MS-DOS melalui internet karena mesin tersebut bahkan tidak punya sambungan kabel jaringan luar.

Kelebihan lain yang kerap dilupakan orang adalah sifatnya yang deterministik dan anti-gimmick. Ketika sebuah menara pengawas memasukkan disket berisi data rute dan cuaca, sistem MS-DOS membaca data tersebut tanpa embel-embel skrip analitik, tanpa iklan tersembunyi, dan tanpa risiko gagal booting akibat server autentikasi di belahan benua lain mendadak tumbang. Mesin tersebut hanya melakukan satu tugas spesifik secara sempurna selama puluhan tahun. Kesederhanaan arsitektur perangkat keras semacam inilah yang membuat sistem penerbangan udara tetap kokoh berdiri ketika sistem modern di berbagai industri lain rontok bergantian.

Bandingkan ketangguhan disket jadul ini dengan kerapuhan ekosistem korporasi modern. Kita tentu belum lupa bagaimana beberapa waktu lalu pembaruan perangkat lunak pihak ketiga yang ceroboh sanggup melumpuhkan ribuan bandara dan rumah sakit di seluruh dunia dalam sekejap mata. Ketergantungan buta pada ekosistem daring telah menciptakan situasi rentan di mana [monopoli raksasa cloud yang rentan padam](/monopoli-tiga-raksasa-cloud-mengapa-kegagalan-satu-region-mampu) memicu kelumpuhan fasilitas publik dalam skala masif. Lebih konyol lagi, para petinggi IT kerap terjebak dalam [ilusi rasa aman cloud storage](/ilusi-rasa-aman-cloud-storage-mengapa-hard-disk-eksternal-tetap) yang menuntut biaya langganan membengkak tiap kuartal, padahal keandalan sistem operasi lokal yang teruji puluhan tahun sering kali jauh lebih terjamin dari kepanikan layar biru kematian (blue screen of death).

Kondisi ini kian menggelikan saat kita melihat bagaimana industri perangkat lunak modern memperlakukan pengguna. Alih-alih membuat program yang efisien dan hemat memori, para developer hari ini gemar menumpuk tumpukan kode gemuk berbasis Electron yang rakus memakan belasan gigabita RAM hanya untuk sekadar menampilkan teks obrolan sederhana. Kebiasaan boros sumber daya ini serupa dengan fenomena saat [aplikasi siluman di latar belakang menguras baterai HP](/hp-menganggur-di-meja-tapi-baterai-menguap-digerogoti-aplikasi) secara membabi buta tanpa memberi manfaat nyata bagi pemiliknya. Industri teknologi kita seolah bergerak mundur: perangkat keras makin kencang, tapi efisiensi software justru makin bobrok.

Melangkah ke era komputasi modern memang keharusan sejarah yang tidak bisa ditolak, dan FAA tentu butuh kecepatan pemrosesan data radar yang lebih gesit untuk mengimbangi kepadatan lalu lintas udara abad ke-21. Namun sebelum para petinggi bandara dan konsultan IT menertawakan kepingan disket hitam di museum teknologi, ada baiknya mereka merenungkan satu hal mendasar. Terkadang teknologi terbaik bukanlah yang paling banyak dijejali algoritma rumit, melainkan perangkat bersahaja yang tetap setia menyala ketika seluruh server mewah di Silicon Valley tiba-tiba padam berjamaah.`
  },
  {
    title: "Model AI Mulai Comot Bunyi Gamelan Sementara Seniman Tradisi Dibiarkan Melarat",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["AI Generatif", "Alat Musik Tradisional", "Budaya Nusantara", "Ekonomi Kreatif", "Gamelan", "Hak Cipta", "Industri Musik", "Margaretha Nina"],
    imageUrl: "https://geotimes.id/wp-content/uploads/2026/10/alat-musik-tradisional.jpg",
    imageAlt: "Seperangkat instrumen gamelan Jawa dari perunggu dan kayu ukir tradisional dalam ruangan sanggar seni",
    sourceUrl: "https://geotimes.id/?p=745005",
    excerpt: "Pengembangan model kecerdasan buatan generatif kian gencar menelan sampel bunyi instrumen musik tradisional Nusantara mulai dari gamelan hingga sasando. Namun di balik kebanggaan semu memamerkan komposisi etnik buatan mesin, para pelaku dan maestro seni tradisi di pelosok daerah tetap hidup terlunta-lunta tanpa pernah menerima royalti atau pengakuan atas warisan budaya leluhur mereka.",
    content: `Di ruang pameran teknologi ibu kota, para pegiat kecerdasan buatan kini punya mainan anyar untuk dipamerkan ke calon pemodal. Cukup dengan mengetikkan sebaris kalimat perintah bahasa Inggris di kotak obrolan, generator audio berbasis AI sanggup menyulap paduan bunyi gong ageng, petikan sasando, dan kendang Sunda menjadi lagu pop elektronik bertempo cepat dalam tempo tiga puluh detik. Para penonton bertepuk tangan kagum, pejabat mengangguk puas sambil menyebutnya sebagai lompatan pelestarian budaya era digital, dan si pembuat aplikasi tersenyum lebar membayangkan valuasi saham perusahaannya melesat. Namun jika Anda melangkah keluar dari ruangan berpendingin udara itu dan menengok kehidupan para pengrawit gamelan di sanggar-sanggar kampung Jawa Tengah atau Bali, kebanggaan artifisial tersebut mendadak terasa hambar dan menipu.

Isu penjarahan materi budaya oleh teknologi modern ini akhirnya mulai mendapat sorotan tajam. Sebagaimana dicatat dalam laporan Geotimes dan riset hukum budaya, Wakil Menteri Komunikasi dan Digital Nezar Patria secara terbuka mengingatkan bahaya pengabaian hak komunitas adat dalam pelatihan model AI. Pemerintah mencatat maraknya pemanfaatan rekaman bunyi instrumen tradisional Nusantara yang disedot begitu saja ke dalam dataset komputasi global tanpa kejelasan izin, royalti, maupun atribusi kepada masyarakat pemilik tradisi. Mengingat Undang-Undang Hak Cipta Nomor 28 Tahun 2014 telah menegaskan bahwa ekspresi budaya tradisional merupakan kekayaan intelektual komunal yang wajib dilindungi negara, praktik penyerapan data sepihak oleh korporasi AI ini berpotensi menjadi bentuk kolonialisme digital gaya baru.

![Seperangkat instrumen gamelan Jawa dari perunggu dan kayu ukir tradisional dalam ruangan sanggar seni](https://geotimes.id/wp-content/uploads/2026/10/alat-musik-tradisional.jpg)

Keabsurdan dari euforia musik AI ini terletak pada jurang ketidakadilan yang menganga lebar di baliknya. Musik tradisional bukanlah deretan gelombang frekuensi audio hampa yang tercipta secara kebetulan dari ruang vakum. Setiap ketukan laras slendro dan pelog pada bilah perunggu gamelan adalah hasil laku spiritual, perenungan filosofis, dan proses pewarisan turun-temurun selama ratusan tahun yang dijaga dengan cucuran keringat oleh para empu karawitan. Kini, korporasi teknologi dengan enteng mengais rekaman audio tersebut dari arsip daring, memasukkannya ke dalam mesin pembelajaran mesin, lalu menjual langganan perangkat lunaknya seharga puluhan dolar kepada agensi iklan komersial. Sementara itu, para sesepuh seniman tradisi yang mendedikasikan seluruh umurnya merawat nada-nada sakral tersebut tetap kesulitan membeli beras dan obat di hari tua.

Ketimpangan ini kian ironis jika kita menengok nasib para seniman daerah di panggung industri hiburan arus utama. Di saat [eksplorasi musik Dayak berjuang menembus apresiasi nasional](/musik-dayak-palui-banaran-tembus-ami-awards-saat-jakarta-asyik) dengan modal mandiri dan tekad baja melawan dominasi selera pop metropolitan, industri digital justru lebih bernafsu mereduksi identitas kultural mereka menjadi sekadar preset audio instan. Situasi ini mengingatkan kita pada kekacauan serupa saat [kebijakan hak cipta dan royalti musik mandeg di tingkat regulasi](/pemerintah-bangga-gratiskan-hak-cipta-saat-royalti-musisi-masih), di mana musisi lokal selalu menjadi pihak yang paling akhir menikmati buah dari jerih payah kreatifnya sendiri. Mengklaim bahwa mesin AI sedang melestarikan budaya tradisional sembari membiarkan manusianya mati kelaparan adalah kemunafikan paling telanjang di industri hiburan kontemporer.

Para petinggi kementerian boleh saja rajin menyusun deklarasi etika dan menggelar seminar perlindungan kekayaan intelektual komunal dari satu hotel berbintang ke hotel berbintang lainnya. Namun tanpa mekanisme penegakan hukum yang memaksa platform AI membayar royalti langsung ke kas desa adat atau sanggar seni tradisi, semua regulasi di atas kertas itu cuma jadi pajangan birokrasi yang mandul. Menyerahkan nasib warisan budaya leluhur pada itikad baik korporasi silikon adalah kenaifan yang berbahaya.

Melestarikan budaya bukanlah perkara memasukkan rekaman kendang ke dalam server komputer asing lalu menjualnya dengan tombol beli sekali klik. Jika negara dan industri teknologi hanya peduli pada eksotisme suara tanpa sudi menjamin periuk nasi para empu tradisi, maka komposisi gamelan buatan AI itu tak lebih dari tiruan murahan yang kehilangan ruh. Sebab gamelan bisa bersuara megah bukan karena baris kode pemrograman, melainkan karena ada denyut nadi manusia yang setia memukul bilahnya dengan cinta dan kesabaran.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 15:00 WIB)");
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
  console.log(`🎉 Batch Publikasi 15:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261110-1500.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
