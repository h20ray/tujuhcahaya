import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Paranoia HP Disadap Bikin Geger Warkop Padahal Diri Sendiri Rajin Unduh File Bodong",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Keamanan Siber", "Privasi Digital", "Smartphone", "Aplikasi Liar", "Elang Elano"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2026/11/10/ilustrasi_penyadapan.jpg",
    imageAlt: "Ilustrasi seseorang memegang ponsel pintar dengan layar peringatan keamanan siber dan kebocoran data digital",
    sourceUrl: "https://www.antaranews.com/berita/5855075/cara-mengetahui-hp-disadap-kenali-5-ciri-dan-cara-mengatasinya",
    excerpt: "Masyarakat sering panik mengira HP disadap intelijen negara saat baterai cepat habis. Padahal biang keroknya cuma kebiasaan sembrono mengunduh file APK tak jelas.",
    content: `Duduk di warung kopi pinggir jalan pada malam hari sering kali menyuguhkan pemandangan teatrikal yang menggelikan. Seorang kawan mendadak meletakkan ponselnya telungkup di atas meja kayu yang basah oleh tumpahan kopi hitam, lalu memasang wajah tegang bak buronan kelas kakap. Sambil melirik waswas ke kanan dan kiri, ia berbisik setengah panik bahwa perangkat pintarnya pasti sedang disadap oleh agen intelijen rahasia atau sindikat pembobol rekening bank. Buktinya tak main-main menurut logikanya sendiri: bodi ponsel mendadak terasa hangat saat disimpan di saku celana, kuota paket data bulanan amblas sebelum tanggal gajian, dan terdengar dengungan bunyi kresek-kresek aneh saat ia menelepon pedagang martabak langganan.

Paranoia massal semacam ini rupanya bukan monopoli segelintir pelanggan warkop yang terlalu banyak menonton film spionase Hollywood. Sebagaimana dicatat dalam laporan edukasi keamanan teknologi dari Antara Tekno akhir pekan ini, kepanikan masyarakat perihal perangkat seluler yang disadap pihak ketiga kian hari kian merebak luas di tengah masyarakat digital kita. Berbagai artikel panduan mengenali ciri-ciri ponsel yang dibobol, mulai dari lonjakan aktivitas data siluman, penurunan drastis kesehatan baterai, hingga munculnya jendela iklan misterius, terus dibagikan ribuan kali di grup percakapan keluarga. Masalahnya, narasi ketakutan yang dibangun di ruang publik kerap melenceng jauh dari kenyataan teknis di lapangan.

Banyak pengguna awam langsung berimajinasi bahwa mereka adalah target operasi mata-mata canggih sekelas perangkat lunak spionase Pegasus buatan Israel yang bernilai puluhan miliar rupiah. Padahal kalau dipikir memakai akal sehat yang jernih, apa untungnya badan intelijen asing atau peretas profesional kelas dunia membuang sumber daya server jutaan dolar hanya untuk memantau rekaman percakapan kita yang isinya cuma keluhan cicilan motor atau perdebatan sengit tentang menu sarapan bubur diaduk. Kenyataannya, ponsel yang mendadak panas, lemot, dan boros kuota nyaris selalu bermula dari keteledoran pemiliknya sendiri yang malas membaca peringatan sistem.

![Ilustrasi seseorang memegang ponsel pintar dengan layar peringatan keamanan siber dan kebocoran data digital](https://img.antaranews.com/cache/800x533/2026/11/10/ilustrasi_penyadapan.jpg)

Menurut penuturan para praktisi keamanan sistem, sebagian besar kasus anomali perangkat yang menimpa masyarakat kelas pekerja terjadi karena pengguna gemar memencet tautan sembarangan. Modusnya pun sangat klasik dan terus berulang: mulai dari kiriman file berekstensi APK bermodus undangan pernikahan digital, resi pelacakan paket ekspedisi palsu, surat tilang kepolisian palsu, hingga penawaran aplikasi pinjaman online kilat tanpa jaminan. Ketika aplikasi bodong tersebut diinstal, pengguna tanpa berpikir panjang langsung menekan tombol setuju untuk memberikan izin akses kontak telepon, mikrofon, kamera, dan kotak pesan SMS. Ini jelas bukan aksi peretasan canggih yang menembus enkripsi ketat sistem operasi; ini adalah aksi bunuh diri digital di mana pengguna membukakan pintu gerbang rumahnya sendiri lebar-lebar untuk maling.

Kekeliruan logika ini sangat mirip dengan kebiasaan masyarakat yang mengaitkan kerusakan teknis dengan hal gaib atau mitos usang, persis seperti [mitos merendam HP basah ke dalam beras](/merendam-hp-basah-ke-dalam-beras-cuma-mitos-warisan-yang-bikin) yang selama bertahun-tahun dipercaya bisa menyedot cairan padahal cuma bikin port konektor karatan. Kita juga kerap mengabaikan fakta sederhana bahwa [baterai HP boros digerogoti aplikasi siluman](/hp-menganggur-di-meja-tapi-baterai-menguap-digerogoti-aplikasi) yang terus bekerja di latar belakang mengikis daya pemrosesan prosesor tanpa henti. Membuka aplikasi belanja daring sambil memutar video siaran langsung, berpindah ke game berat, lalu lupa menutup puluhan tab peramban dengan tingkat kecerahan layar maksimal tentu saja bakal membuat komponen silikon ponsel menjerit kepanasan tanpa perlu campur tangan mata-mata negara.

Alih-alih panik mengecek kode dial misterius bintang pagar yang diklaim di media sosial bisa mendeteksi nomor penyadap, langkah paling waras sejatinya sangat sederhana dan murah meriah. Luangkan waktu lima menit untuk membersihkan tumpukan aplikasi sampah yang tak pernah dipakai, cabut izin akses berlebihan yang mencurigakan, pasang autentikasi dua langkah pada seluruh akun penting, dan yang paling krusial: berhentilah tergoda mengklik tautan saldo dompet digital kaget di grup pesan singkat. Ponsel pintar Anda bukanlah incaran spionase geopolitik internasional. Kalau smartphone Anda mendadak bersuhu seperti penggorengan martabak, kemungkinan terbesarnya adalah baterai Anda sudah mulai aus atau Anda baru saja memaksa prosesor bekerja lemur sambil mencolokkan kabel pengisi daya murahan berdaya arus tidak stabil.`
  },
  {
    title: "Riot Pamer Rombakan League of Legends Saat Gamer PC Sudah Bosan Disiksa Client Lemot",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["League of Legends", "Riot Games", "PC Gaming", "Industri Game", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/9ioSw2Gug8fVTiMxZ36YyA-1920-80.png",
    imageAlt: "Tampilan pembaruan grafis dan antarmuka client game League of Legends New Dawn garapan Riot Games",
    sourceUrl: "https://www.pcgamer.com/games/moba/league-of-legends-will-get-an-overhaul-called-new-dawn-with-new-visuals-build-options-and-an-updated-client/",
    excerpt: "Riot Games umumkan pembaruan besar League of Legends bertajuk New Dawn. Janji visual anyar dan client baru datang setelah belasan tahun pemain disiksa bug dan lag.",
    content: `Bagi siapa saja yang mendedikasikan sebagian besar masa mudanya mengarungi lorong-lorong Summoner's Rift, League of Legends adalah sebuah hubungan asmara beracun yang mustahil diputus begitu saja. Anda bisa saja memaki-maki rekan satu tim yang bermain buruk tanpa koordinasi, bersumpah menghapus instalasi game sehabis menelan kekalahan lima kali beruntun, atau mengeluh sakit pinggang karena duduk berjam-jam di kursi warnet berbau asap rokok. Namun begitu seorang kawan mengirim pesan singkat di Discord mengajak mabar satu ronde penutup, jari-jemari tangan mendadak bergerak refleks mengeklik ikon pintasan permainan seolah semua sumpah serapah tadi lenyap tersapu angin malam.

Keterikatan emosional jutaan gamer PC di seantero dunia itulah yang selama lebih dari lima belas tahun terakhir dieksploitasi dengan sangat lihai oleh Riot Games. Namun di balik gemerlap panggung turnamen akbar Worlds yang rutin memadati stadion megah dan konser musik orkestra bertaraf internasional, ada satu borok menahun yang sudah menjadi bahan lelucon pahit komunitas global: antarmuka peluncur alias client permainan yang luar biasa bapuk. Client berbasis web lawas yang terus ditambal sulam itu legendaris dengan kemampuannya membekukan layar komputer secara tiba-tiba saat fase krusial pemilihan champion, menyedot kapasitas memori RAM secara rakus, dan mendadak menutup paksa tanpa meninggalkan pesan kesalahan yang masuk akal.

Maka ketika Riot Games akhirnya mengibarkan bendera revolusi teknologi, komunitas gamer PC langsung memasang telinga lebar-lebar sembari menahan senyum skeptis. Sebagaimana dicatat dalam laporan mendalam media game PC Gamer akhir pekan ini, Riot secara resmi mengumumkan proyek perombakan besar-besaran untuk League of Legends yang diberi tajuk New Dawn. Mengusung slogan ambisius untuk menjaga sang raksasa MOBA tetap relevan menghadapi ujian zaman, studio raksasa tersebut menjanjikan pembaruan menyeluruh pada sistem tata cahaya arena pertarungan, perluasan opsi build item yang lebih luwes, serta hal yang paling didambakan jutaan pemain selama satu dekade: perombakan total terhadap arsitektur dasar client peluncur game.

![Tampilan pembaruan grafis dan antarmuka client game League of Legends New Dawn garapan Riot Games](https://cdn.mos.cms.futurecdn.net/9ioSw2Gug8fVTiMxZ36YyA-1920-80.png)

Menurut keterangan resmi tim pengembang, pembaruan New Dawn sengaja dirancang untuk melibas tumpukan utang teknis berupa kode pemrograman usang yang selama belasan tahun menumpuk seperti sampah di sudut ruangan. Kendati terdengar seperti kabar surgawi bagi mereka yang lelah bolak-balik memulai ulang komputer sehabis tanding, pengumuman manis ini disambut dengan tawa getir oleh para pemain veteran. Rasanya sungguh ironis melihat sebuah korporasi raksasa yang sanggup meraup pendapatan triliunan rupiah dari penjualan skin kosmetik virtual seharga ratusan ribu perak baru tergerak membereskan antarmuka dasarnya setelah komunitas pemain tersiksa selama lebih dari satu dekade penuh.

Situasi ini semakin menegaskan bagaimana publisher game daring papan atas kerap menomorduakan kenyamanan teknis para pemain demi mengejar target monetisasi kuartalan. Kita sudah kenyang menyaksikan [ketergantungan server manja yang kerap menyiksa pemain](/dune-awakening-lepas-jeratan-online-bukti-gamer-menang-melawan) di berbagai judul permainan daring modern, di mana studio lebih sibuk memikirkan cara memeras isi dompet pengguna ketimbang memastikan perangkat lunak mereka bisa berjalan mulus di spesifikasi komputer kelas pekerja. Padahal industri berkali-kali ditampar oleh fenomena [proyek triliunan yang dipermalukan game buatan dua orang](/game-indie-bikinan-dua-orang-berhasil-tampar-proyek-triliunan), yang membuktikan bahwa gameplay solid, efisiensi kode, dan kejujuran teknis jauh lebih dihargai oleh para pemain ketimbang tumpukan janji manis perbaikan di masa depan.

Di bilik warnet pinggiran kota dan kamar kos sempit tempat para pemain mengelus dada setiap kali client game mendadak macet di tengah malam, kabar proyek New Dawn ini tentu tetap patut dipantau realisasinya. Namun sebelum Riot benar-benar membuktikan bahwa peluncur anyar mereka tidak lagi mengonsumsi sumber daya laptop seperti monster kelaparan, jangan buru-buru menyalakan kembang api perayaan. Menjual janji masa depan memang pekerjaan paling murah di industri hiburan digital, terutama bagi korporasi yang butuh waktu belasan tahun hanya untuk membuat tombol keluar permainan berfungsi sebagaimana mestinya tanpa bikin komputer mogok kerja.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 05:00 WIB)");
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261116-0500.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
