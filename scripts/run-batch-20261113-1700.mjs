import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Humble Bundle Sibuk Poles Tampilan Baru tapi Malah Babat Fitur Verifikasi Dua Langkah",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Humble Bundle", "Keamanan Siber", "Autentikasi Dua Langkah", "Privasi Digital", "Toko Game", "Elang Elano"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/Screenshot-2026-11-12-at-3.28.10-PM.png?quality=90&strip=all&crop=0,0,100,88.092261904762",
    imageAlt: "Tangkapan layar halaman pengaturan akun Humble Bundle yang kehilangan opsi verifikasi dua langkah",
    sourceUrl: "https://www.theverge.com/games/1032659/humble-bundle-redesign-two-factor-verification-security-settings",
    excerpt: "Humble Bundle merombak etalase web demi tampilan yang lebih modern. Namun alih-alih makin aman, menu pengaturan akun justru kehilangan opsi verifikasi dua langkah (2FA) dan membiarkan pergantian kata sandi tanpa verifikasi kredensial lama.",
    content: `Membeli paket game banting harga di Humble Bundle sudah menjadi ritual wajib para pemburu diskon di tanggal tua. Kita rela begadang menatap tumpukan bundle game indie demi mendapatkan selusin lisensi digital seharga semangkuk mie ayam komplit. Sejak era keemasannya belasan tahun lalu, platform ini selalu punya tempat istimewa di hati para gamer PC dan pembaca komik; selain menyumbang sebagian cuan ke lembaga amal, katalognya selalu menjadi cara paling hemat merapikan daftar keinginan di akun Steam. Selama akun tersebut aman dan kode lisensi bisa diklaim lancar, kita jarang ambil pusing dengan rupa antarmuka tokonya.

Namun gelombang perombakan desain yang belakangan melanda situs belanja digital rupanya menular ke dapur Humble Bundle dengan cara yang bikin garuk-garuk kepala. Sebagaimana dicatat dalam laporan The Verge dan Kotaku pekan ini, Humble Bundle baru saja menggulirkan desain ulang tampilan antarmuka etalase mereka agar terlihat lebih bersih, segar, dan selaras dengan standar modern. Sialnya, di balik polesan visual anyar yang serba rapi itu, sebuah celah konyol justru menyelinap ke halaman pengaturan akun pengguna: opsi verifikasi dua langkah atau two-factor authentication (2FA) mendadak lenyap tanpa bekas.

Sebelum pembaruan digulirkan, pengguna bisa dengan mudah menautkan aplikasi otentikasi seperti Google Authenticator atau 1Password untuk membentengi akun mereka dari serbuan peretas. Di halaman bantuan resmi yang masih aktif di situs mereka, panduan konfigurasi 2FA bahkan masih terpampang jelas. Tetapi begitu pengguna membuka menu setelan di versi baru, tombol untuk menambah atau memperbarui metode verifikasi tambahan tersebut sama sekali tidak ada. Kejadian aneh bertambah ganjil saat wartawan The Verge mencoba mengganti kata sandi akun; sistem membiarkan kata sandi baru disimpan tanpa mewajibkan pengguna mengetikkan kata sandi lama terlebih dahulu, dan kode verifikasi berputar dari aplikasi otentikator yang sudah lama dipasang bahkan tidak pernah ditanyakan lagi saat masuk. Pemilik platform, IGN Entertainment dan Ziff Davis, memilih bungkam saat dimintai klarifikasi.

![Tangkapan layar halaman pengaturan akun Humble Bundle yang kehilangan opsi verifikasi dua langkah](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/Screenshot-2026-11-12-at-3.28.10-PM.png?quality=90&strip=all&crop=0,0,100,88.092261904762)

Sebagai orang yang setiap hari berurusan dengan server dan protokol keamanan jaringan di warkop, melihat tim pengembang web mengorbankan pilar keamanan demi estetika desain minimalis adalah pemandangan yang bikin dada sesak. Dalam manual standar rekayasa perangkat lunak mana pun, antarmuka pengguna hanyalah cangkang kosmetik; lapisan keamanan autentikasi adalah pondasi beton yang haram diutak-atik secara serampangan. Bagaimana mungkin sebuah toko digital yang mengelola jutaan transaksi kartu kredit dan menampung ribuan pustaka game digital bernilai puluhan juta rupiah bisa lupa menaruh sakelar kunci pintu rumahnya sendiri?

Tren merombak antarmuka web modern memang sering kali terjebak dalam penyakit narsisme visual. Tim desainer produk begitu terobsesi dengan sudut tombol yang melengkung mulus, ruang kosong serba putih, dan tipografi elegan yang sedap dipandang mata dewan direksi saat presentasi akhir tahun. Mereka lupa bahwa pengguna datang ke platform bukan untuk mengagumi palet warna desainer, melainkan untuk bertransaksi dengan tenang tanpa dihantui ketakutan akunnya dibobol peretas dari belahan dunia lain. Menghilangkan fitur keamanan dasar demi mengejar peluncuran tampilan baru adalah cermin bagaimana logika pemasaran sering kali menabrak etika teknis paling elementer.

Di kalangan komunitas gamer PC akar rumput, hilangnya proteksi 2FA ini bukan urusan sepele. Akun Humble Bundle sering kali terhubung langsung ke akun Steam, Epic Games Store, hingga dompet digital PayPal. Sekali akun tersebut kebobolan karena serangan tebak kata sandi atau kebocoran data pihak ketiga, peretas bisa dengan leluasa menguras saldo simpanan, mengubah alamat email utama, hingga mengklaim ratusan kunci game yang belum sempat diaktifkan pemilik aslinya. Kontradiksi ini terasa kian getir bila kita mengingat bagaimana raksasa teknologi lain justru semakin paranoid mengunci akun pengguna sampai tahap merepotkan, seperti yang sempat terjadi saat [medsos baru Whoop mewajibkan syarat detak jantung](/medsos-baru-whoop-wajibkan-syarat-detak-jantung-bukti-paranoia) demi menyaring keberadaan bot. Sementara industri lain berlagak canggih mengawasi biometrik, Humble Bundle malah kembali ke zaman purba dengan membiarkan pergantian kata sandi tanpa verifikasi ganda.

Di warung kopi tongkrongan, tindakan Humble Bundle ini persis seperti pemilik toko kelontong yang baru saja merenovasi pintu kaca depan dengan kusen aluminium mengilap, tetapi lupa memasang grendel gembok karena merasa pintunya sudah terlihat cukup estetik. Pelanggan mungkin bakal memuji cat dindingnya yang kinclong saat siang bolong, tapi begitu malam tiba dan maling menyelinap masuk lewat pintu tanpa kunci, barulah si empunya toko kelimpungan menyalahkan keadaan. Memoles tampilan luar toko memang penting untuk gengsi, tapi mencopot kunci pengaman demi mengejar tenggat rilis visual hanyalah kebodohan birokratis yang mengorbankan ketenangan ribuan pembeli setia.`
  },
  {
    title: "Studio Doom Pamer Proyek Game Anyar tapi Gamer Disuruh Menunggu Entah Sampai Kapan",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["id Software", "Doom", "Industri Game", "Bethesda", "PC Gaming", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/SV4EqmWFf4gJaw5ie5QeYJ-1920-80.jpg",
    imageAlt: "Logo studio id Software pengembang waralaba legendaris Doom dan Quake",
    sourceUrl: "https://www.pcgamer.com/games/fps/doom-studio-id-software-confirms-its-working-on-a-new-game/",
    excerpt: "id Software mengonfirmasi sedang menggarap proyek game baru setelah gelombang pemecatan Microsoft. Namun gamer veteran diminta tidak berharap banyak dalam waktu dekat karena pengembangannya masih butuh waktu bertahun-tahun.",
    content: `Di kalangan gamer PC yang sudah kenyang asam garam di warnet sejak era monitor tabung, nama id Software punya derajat yang nyaris setara tempat ziarah suci. Dari tangan dingin John Carmack dan John Romero puluhan tahun silam, studio ini melahirkan Doom dan Quake yang mengubah selamanya cara manusia memegang mouse dan keyboard. Tiap kali dentuman musik heavy metal mengiringi tembakan shotgun ganda di lorong sempit penuh iblis, kita tahu kita sedang menikmati racikan game tembak-menembak paling murni di muka bumi. Maka dari itu, kabar apa pun yang keluar dari mulut para petingginya selalu sanggup membikin telinga para gamer berdiri tegak.

Kabar yang ditunggu-tunggu itu akhirnya meluncur juga ke permukaan, meski bungkusnya terasa agak hambar. Menurut laporan investigasi PC Gamer pekan ini, co-director id Software Marty Stratton secara resmi mengonfirmasi bahwa studio legendaris tersebut saat ini tengah aktif menggarap proyek game baru. Pengumuman ini datang sebagai angin segar setelah komunitas sempat dilanda kecemasan mendalam menyusul badai pemutusan hubungan kerja besar-besaran yang digulirkan Microsoft kepada divisi game Bethesda beberapa bulan sebelumnya. Stratton menegaskan bahwa studio mereka berhasil bertahan dan kini berkolaborasi jauh lebih erat dengan MachineGames, studio di balik waralaba Wolfenstein. Namun bagi para penggemar yang berharap bakal segera melihat cuplikan gameplay atau trailer teaser perdana, Stratton buru-buru menyiramkan seember air dingin: proyek ini masih berada di tahap sangat awal, dan butuh waktu yang sangat lama sebelum mereka siap memamerkan wujudnya ke hadapan publik.

![Logo studio id Software pengembang waralaba legendaris Doom dan Quake](https://cdn.mos.cms.futurecdn.net/SV4EqmWFf4gJaw5ie5QeYJ-1920-80.jpg)

Bagi gamer veteran yang sudah terlalu sering dipermainkan oleh jurus promosi penerbit game raksasa, kalimat butuh waktu lama ini jelas memicu rasa waswas yang familier. Pola melempar janji kosong di ruang publik sebelum baris kode game benar-benar rampung adalah kebiasaan buruk yang menular di industri modern. Korporasi penerbit butuh melempar narasi positif ke telinga pemegang saham dan analis pasar bahwa studio mereka masih produktif, meski di balik layar dapur pengembangannya mungkin baru sebatas berkas konsep di atas meja rapat. Kita sudah kenyang melihat bagaimana Bethesda mengumumkan The Elder Scrolls 6 lewat cuplikan bukit gersang berdurasi tiga puluh detik pada tahun 2018, dan sampai hari ini—delapan tahun berselang—game tersebut masih belum jelas rimbanya.

Kecenderungan melempar pengumuman prematur ini adalah buah dari kepanikan korporat yang kehabisan amunisi promosi. Setelah memangkas ribuan tenaga kerja berbakat demi mempercantik neraca laba kuartalan, manajemen butuh meyakinkan publik bahwa mesin bisnis mereka tetap melaju kencang. Siasat mengumbar wacana proyek tanpa bukti konkret semacam ini mengingatkan kita pada taktik serupa saat [Xbox pamer naskah Wolfenstein 3 saat gamer PC sudah kenyang janji kosong](/xbox-pamer-naskah-wolfenstein-3-saat-gamer-pc-sudah-kenyang-janji), di mana dokumen cerita sengaja dibocorkan demi memancing percakapan media sosial semata. Bagi studio sekelas id Software yang reputasinya dibangun di atas pondasi rekayasa teknis yang solid, ikut-ikutan menari di bawah irama gimmick pemasaran prematur adalah langkah yang terasa menurunkan marwah.

Di tingkat akar rumput komunitas pemain, dahaga terhadap aksi tembak-menembak berkecepatan tinggi sesungguhnya sangat nyata. Gamer PC sudah jenuh disuguhi game live-service serba daring yang menuntut komitmen harian seperti pekerjaan kedua di kantor. Mereka merindukan kembalinya aksi brutal Quake Champions yang dipoles ulang atau petualangan solo yang menantang adrenalin tanpa pusing memikirkan transaksi kosmetik berbayar. Namun ketika pengembang mengabarkan proyek baru sembari menodongkan syarat agar pemain bersabar tanpa batas waktu, antusiasme tulus tersebut perlahan luntur menjadi rasa skeptis yang getir. Gamer kasual di warung kopi hanya bisa tersenyum masam; mereka paham betul bahwa di era konsolidasi korporat yang kejam ini, sebuah proyek game yang baru dimulai bisa sewaktu-waktu dibatalkan di tengah jalan hanya karena pergantian dewan komisaris di kantor pusat.

Di tongkrongan warkop, pengumuman id Software ini persis seperti kawan lama yang tiba-tiba mentraktir gorengan sembari sesumbar bahwa ia sedang merintis usaha restoran bintang lima yang megah, tetapi ketika ditanya kapan warungnya buka, ia cuma menjawab bahwa ia baru saja membeli papan namanya. Kita tentu mendoakan yang terbaik agar proyeknya sukses besar dan tidak gulung tikar di tengah jalan. Namun sebelum ada semangkuk hidangan panas yang benar-benar tersaji di atas meja, ada baiknya para gamer menyimpan dulu sorak-sorai antusiasme mereka dan kembali menyelesaikan tumpukan game lama di pustaka Steam masing-masing.`
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
  console.log(`🎉 Batch Publikasi Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
}

runBatch().catch(err => {
  console.error("Batch Execution Error:", err);
  process.exit(1);
});
