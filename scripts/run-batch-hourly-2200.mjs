import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Bahaya Pelacakan Sinyal Bluetooth di Pusat Perbelanjaan: Bagaimana Beacon Toko Diam-diam Merekam Gerak Fisik Anda Tanpa Izin GPS",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Privasi Digital", "Bluetooth", "Keamanan Siber", "Smartphone", "Retail"],
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang memegang smartphone di tengah keramaian pusat perbelanjaan modern",
    excerpt: "Mematikan akses GPS sering dipandang cukup untuk melindungi privasi lokasi Anda saat berjalan-jalan di mall. Namun jaringan pemancar Bluetooth Low Energy yang tersembunyi di langit-langit toko mampu memetakan langkah kaki Anda hingga tingkat rak barang.",
    content: `Bagi kebanyakan pengguna smartphone yang peduli privasi, mematikan tombol pelacak lokasi (*GPS*) saat melangkah ke luar rumah dipandang sebagai benteng pertahanan yang memadai. Kita merasa aman bahwa tidak ada aplikasi yang dapat melacak toko mana yang kita masuki atau rute jalan mana yang kita lewati selama kita tidak memberikan izin akses lokasi secara eksplisit.

Namun ketenangan tersebut sesungguhnya adalah ilusi yang dimanfaatkan secara agresif oleh industri periklanan ritel fisik. Di balik keheningan langit-langit lorong pusat perbelanjaan, toko pakaian ternama, hingga etalase pasar swalayan modern, terpasang ribuan perangkat pemancar kecil berukuran uang koin yang dikenal sebagai suar suar nirkabel (*Bluetooth Low Energy / BLE beacons*). Perangkat pemancar ini bekerja tanpa henti menangkap dan menyapa sinyal Bluetooth dari smartphone di dalam saku celana Anda.

## Arsitektur Pengawasan Tak Kasat Mata di Ruang Publik

Mekanisme pelacakan Bluetooth toko fisik beroperasi melalui kerja sama licik antara perangkat keras pemancar dan aplikasi ponsel:

* **Pemetaan Jalur Langkah Kaki Tanpa Kebutuhan Satelit**: Berbeda dengan sinyal GPS yang kerap melemah di dalam gedung bertingkat, sinyal suar BLE memanfaatkan teknik triangulasi kekuatan sinyal (*RSSI*). Sistem ritel mampu mengetahui secara presisi apakah Anda sedang berdiri di depan etalase sepatu olahraga, berapa menit Anda berdiam di lorong kosmetik, hingga produk mana yang Anda tatap paling lama.
* **Kolusi Izin Bluetooth pada Aplikasi Kasual**: Banyak aplikasi belanja daring, aplikasi diskon loyalty, hingga game seluler kasual meminta izin konektivitas Bluetooth dengan dalih "menghubungkan aksesori nirkabel". Begitu izin tersebut diberikan, skrip pelacak pihak ketiga di dalam aplikasi akan terus mendengarkan sinyal pengenal suar (*beacon UUID*) di mall dan mengirimkan data kehadiran fisik Anda ke server broker periklanan.
* **Penggabungan Data Dunia Nyata dan Profil Daring**: Data durasi kunjungan Anda di toko fisik digabungkan dengan riwayat pencarian peramban web dan identitas akun media sosial Anda. Tidak mengherankan jika beberapa saat setelah Anda keluar dari toko sepatu fisik, layar beranda media sosial Anda langsung dibanjiri iklan diskon produk sepatu yang baru saja Anda lihat di etalase nyata.

## Memutus Rantai Pengawasan di Ruang Ritel

Menjaga kedaulatan privasi di ruang publik menuntut tindakan pencegahan aktif pada manajemen nirkabel ponsel:

1. **Matikan Antena Bluetooth Saat Berada di Tempat Umum**: Jika Anda sedang tidak mendengarkan musik lewat headphone nirkabel atau memakai jam pintar, biasakan mematikan fungsi Bluetooth langsung dari menu pengaturan utama sistem operasi ponsel Anda.
2. **Audit Izin Perangkat Sekitar (*Nearby Devices*)**: Buka menu privasi smartphone dan cabut izin akses Bluetooth atau perangkat terdekat dari aplikasi yang sejatinya tidak membutuhkan koneksi fisik nirkabel, seperti aplikasi perbankan, portal berita, atau game kasual.
3. **Reset Pengidentifikasi Iklan Digital Secara Berkala**: Lakukan penghapusan riwayat pengiklan (*Reset Advertising ID*) pada sistem operasi Android atau matikan pelacakan lintas aplikasi (*Allow Apps to Request to Track*) pada iOS untuk memutus rantai korelasi data profil belanja Anda.

Pusat perbelanjaan adalah ruang publik untuk menikmati waktu santai bersama keluarga, bukan panggung pengintaian korporat tanpa batas. Rawatlah privasi gerak fisik Anda dengan berani membatasi komunikasi nirkabel ponsel dari pemancar komersial yang tak pernah Anda undang.`
  },
  {
    title: "Kematian Tombol Jeda di Game Modern: Ketika Fitur Always-Online Merampas Hak Rehat Pemain di Rumah Sendiri",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Desain Game", "Always-Online", "Single Player", "Ergonomi Game", "Industri Game"],
    imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kontroler video game tergeletak di samping cangkir kopi di meja ruang keluarga",
    excerpt: "Tombol pause dahulu merupakan ruang perlindungan sakral bagi gamer saat kehidupan nyata mendadak mengetuk pintu. Kini tren game always-online meniadakan fitur jeda bahkan pada petualangan solo, memaksa pemain mengorbankan tanggung jawab rumah tangga demi progres permainan.",
    content: `Bagi siapa saja yang tumbuh memainkan game di era konsol klasik dan komputer era awal, tombol *Pause* atau tombol *Escape* memiliki status yang nyaris sakral. Tombol tersebut adalah jangkar penyelamat yang menghubungkan dunia petualangan fiksi dengan dinamika realitas kehidupan nyata: saat bel pintu rumah berbunyi, air mendidih di dapur, anak balita terbangun menangis, atau panggilan telepon keluarga masuk, satu sentuhan jemari pada tombol jeda seketika membekukan waktu di dalam dunia permainan.

Namun kesopanan desain perangkat lunak yang menghormati kehidupan pemain tersebut kini kian dimusnahkan oleh industri game modern. Dari game aksi petualangan tunggal beranggaran raksasa hingga game peran (*RPG*) yang sejatinya dimainkan seorang diri di kamar tidur, pengembang semakin sering menolak menyertakan fungsi tombol jeda. Ketika Anda menekan menu opsi di tengah pertarungan sengit, dunia game tetap berjalan di latar belakang, dan karakter Anda dibiarkan mati tercabik-cabik oleh serangan musuh hanya karena Anda beranjak lima detik untuk mengambil paket kiriman.

## Filosofi Keliru di Balik Pelenyapan Fitur Jeda

Ketiadaan tombol pause pada game modern berakar dari kombinasi arogansi artistik dan komplikasi arsitektur server daring:

* **Pemaksaan Arsitektur Server Daring (*Live-Service Architecture*)**: Karena game dirancang untuk selalu terhubung ke server penerbit demi memverifikasi lisensi dan fitur sosial, dunia game diperlakukan layaknya ruang obrolan daring bersama. Sistem menolak menghentikan simulasi waktu karena menganggap tindakan menjeda akan membebani sinkronisasi status jaringan, kendati tidak ada pemain lain di dalam sesi permainan Anda.
* **Pretensi Artistik Ketegangan yang Menghukum Kehidupan Nyata**: Sebagian pengembang beralasan bahwa ketiadaan tombol jeda sengaja dirancang untuk menjaga ketegangan emosional (*immersion*) pemain agar tidak lari dari rasa panik. Argumen ini mengabaikan fakta mendasar bahwa mayoritas gamer dewasa memiliki tanggung jawab domestik nyata yang tidak bisa ditunda demi sekadar menjaga integritas suasana fiksi di layar.
* **Pemicu Stres Psikologis dan Pengabaian Kesehatan Tubuh**: Ketika permainan menolak untuk dijeda, pemain terdorong menahan buang air kecil, menunda makan malam, atau mengabaikan sapaan pasangan karena takut kehilangan progres babak permainan yang telah diperjuangkan selama empat puluh menit. Desain ini merusak hubungan harmonis antara hobi santai dan kesehatan mental pemain.

## Menuntut Kembalinya Kendali Waktu Bermain

Game yang hebat adalah karya interaktif yang memuliakan martabat manusia penikmatnya:

1. **Terapkan Standar Mode Jeda Cerdas (*Smart Pause System*)**: Desainer game wajib menyediakan opsi jeda penuh saat pemain memilih bermain di mode solo atau mode luring, serta menyediakan fungsi auto-pause jika kontroler mendadak kehabisan baterai atau aplikasi kehilangan fokus di desktop komputer.
2. **Manfaatkan Modifikasi Komunitas (*Community Mods*) di PC**: Bagi pengguna komputer, jangan ragu memanfaatkan alat modifikasi buatan komunitas yang memulihkan fungsi tombol jeda mandiri pada game aksi modern yang keras kepala menolak fitur tersebut.
3. **Kritisi Ulasan Game yang Mengabaikan Fitur Aksesibilitas**: Suarakan kritik di forum komunitas dan kolom ulasan etalase game daring terhadap judul-judul pemain tunggal yang tidak menyediakan tombol jeda sebagai bentuk kekurangan desain yang merugikan kenyamanan konsumen.

Video game adalah sarana hiburan yang melayani kehidupan Anda, bukan sebaliknya. Tolak desain permainan yang arogan memperlakukan waktu istirahat dan tanggung jawab keluarga Anda layaknya gangguan sepele yang layak dihukum.`
  },
  {
    title: "Bahaya Menyilangkan Kaki Berjam-jam Saat Bekerja: Mengapa Kebiasaan Santai Diam-diam Memicu Varises dan Asimetri Panggul",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Ergonomi", "Postur Tubuh", "Varises", "Kesehatan Vaskular", "Gaya Hidup Sehat"],
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Posisi duduk di kursi kantor memperhatikan postur kedua kaki menapak rata di lantai",
    excerpt: "Menyilangkan salah satu kaki di atas paha sering menjadi posisi duduk favorit pekerja kantor saat rapat panjang atau mengetik laporan. Namun lipatan sendi silang ini secara mekanis menekan pembuluh darah balik dan memuntir simetri tulang panggul.",
    content: `Di tengah padatnya jam kerja kantor dan durasi rapat virtual yang berderet tanpa jeda, menyilangkan salah satu kaki di atas lutut kaki lainnya adalah gestur postur yang sangat lazim ditemukan. Posisi duduk ini terasa nyaman, memberikan topangan santai pada tubuh bagian atas, serta sering diasosiasikan dengan bahasa tubuh yang elegan dan percaya diri di ruang pertemuan profesional.

Namun di balik kenyamanan mekanis semu tersebut, kebiasaan menyilangkan kaki saat duduk di kursi kerja adalah salah satu pemicu utama gangguan sirkulasi darah vena dan ketidakseimbangan muskuloskeletal kronis. Tubuh manusia dirancang oleh evolusi biologis untuk menyalurkan beban berat badan secara simetris ke kedua belah tulang duduk (*ischial tuberosities*) dengan kedua telapak kaki menapak rata di atas permukaan tanah.

## Kompresi Vaskular dan Ketidakseimbangan Biomekanika

Duduk menyilangkan kaki selama berjam-jam memicu rentetan reaksi patologis pada jaringan pembuluh darah dan persendian:

* **Penjepitan Vena Poplitea dan Pemicu Varises**: Di bagian belakang sendi lutut terdapat pembuluh darah balik utama yang disebut vena poplitea. Menumpuk beban tungkai kaki satu di atas lutut lainnya menekan pembuluh darah ini secara kuat, menghambat aliran darah vena kembali menuju jantung. Tekanan hidrostatik yang tertahan di tungkai bawah meregangkan katup vena satu arah, memicu pelebaran urat pembuluh darah berkelok-kelok (*varicose veins*) dan pembengkakan pergelangan kaki di penghujung hari.
* **Rotasi Miring pada Sendi Panggul dan Tulang Belakang**: Menyilangkan kaki memaksa satu sisi sendi panggul terangkat lebih tinggi dari sisi lainnya (*pelvic tilt and rotation*). Untuk menjaga kepala tetap tegak lurus menatap layar monitor, tulang belakang dipaksa melengkung ke samping secara kompensatoris, memicu ketegangan asimetris pada otot pinggang bawah (*quadratus lumborum*) dan mengikis bantalan cakram tulang belakang lumbar secara tidak merata.
* **Lonjakan Sementara Tekanan Darah Sistemik**: Berbagai studi klinis kardiologi membuktikan bahwa menyilangkan kaki setinggi lutut memicu lonjakan tekanan darah sistolik dan diastolik hingga sepuluh persen secara instan. Tubuh terpaksa memompa darah dengan daya dorong lebih keras guna menembus hambatan mekanis di lipatan sendi paha.

## Membiasakan Postur Duduk Sehat dan Ergonomis

Mengembalikan keseimbangan postur tubuh menuntut kesadaran posisi dan penyesuaian ergonomi meja kerja:

1. **Terapkan Aturan Telapak Kaki Menapak Rata (90-90 Rule)**: Atur ketinggian kursi kantor Anda hingga kedua telapak kaki dapat menapak rata di lantai dengan sudut tekukan lutut dan panggul membentuk sudut siku-siku sembilan puluh derajat yang santai.
2. **Gunakan Sandaran Kaki (*Footrest*) Jika Diperlukan**: Jika meja kerja Anda terlalu tinggi dan membuat kaki menggantung saat kursi dinaikkan, letakkan sandaran kaki ergonomis miring di bawah meja agar beban tungkai bawah tersangga dengan stabil.
3. **Lakukan Pergantian Posisi Gerak Setiap Tiga Puluh Menit**: Jika dorongan refleks menyilangkan kaki muncul karena rasa pegal, itu adalah sinyal biologis bahwa tubuh Anda butuh bergerak; berdirilah sejenak, berjalanlah mengelilingi ruangan, dan lakukan peregangan ringan pada otot panggul dan betis sebelum duduk kembali.

Kesehatan pembuluh darah dan kelurusan tulang belakang Anda bertumpu pada kebiasaan kecil yang Anda jalani setiap jam. Sayangi keutuhan postur fisik Anda dengan membiasakan kedua kaki menapak bumi secara sejajar dan seimbang.`
  },
  {
    title: "Tirani Durasi Lagu di Bawah Dua Menit: Bagaimana Tren Klip Pendek Media Sosial Memutilasi Seni Merajut Komposisi Musik Pop",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Produksi Musik", "Industri Musik", "Streaming", "Komposisi Lagu", "Media Sosial"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Headphone rekaman studio tergeletak di atas konsol mixer audio dengan lampu pengukur desibel",
    excerpt: "Dahulu sebuah lagu pop memerlukan waktu empat menit untuk merajut perkenalan melodi dan pelepasan klimaks emosional. Kini algoritma video pendek memaksa musisi memotong durasi lagu hingga di bawah dua menit, mematikan intro dan jembatan nada.",
    content: `Dalam tradisi penciptaan musik populer selama lebih dari setengah abad, sebuah karya lagu yang utuh memiliki anatomi arsitektural yang dirancang dengan penuh perhitungan dramatik. Dimulai dari petikan intro yang memperkenalkan nuansa atmosfer lagu, bait pertama (*verse*) yang menanamkan latar narasi, jembatan pra-reff (*pre-chorus*) yang membangun ketegangan harmoni, reff (*chorus*) yang meledakkan puncak emosi, hingga jembatan penengah (*bridge*) yang menyajikan perspektif kunci nada baru sebelum lagu dipungkasi oleh outro yang meditatif. Struktur klasik berdurasi tiga setengah hingga empat setengah menit ini memberi ruang bagi batin pendengar untuk tenggelam ke dalam perjalanan emosi yang utuh.

Namun keanggunan struktur naratif tersebut kini sedang dibongkar paksa oleh ekonomi atensi digital. Jika Anda memperhatikan tangga lagu musik pop global saat ini, Anda akan menjumpai anomali baru yang mencengangkan: deretan lagu baru yang berdurasi kurang dari dua menit, bahkan ada yang hanya berdurasi seratus detik. Lagu-lagu ini melompat seketika ke bagian reff dalam hitungan lima detik pertama, mengulang bait singkat satu kali, lalu diputus secara mendadak tanpa menyisakan jejak resonansi yang membekas di relung kalbu.

## Pabrik Lagu Pendek demi Algoritma dan Royalti Streaming

Pemotongan drastis durasi karya musik bukanlah perubahan selera estetika alami, melainkan rekayasa komersial yang dipaksakan oleh platform media sosial dan model pembayaran streaming:

* **Ketergantungan pada Format Cuplikan Video Vertikal**: Lagu pop masa kini dirancang bukan untuk dinikmati melalui tata suara sistem audio ruang tamu, melainkan diproduksi sebagai audio latar video tarian atau konten sketsa komedi berdurasi lima belas detik di platform video pendek. Produser musik dituntut menciptakan melodi yang langsung memicu candu instan (*earworm*) tanpa memedulikan kedalaman lirik atau variasi harmoni instrumen.
* **Trik Pelipatgandaan Royalti Putar per Jam**: Aturan pembayaran royalti layanan streaming mematok nilai uang yang sama untuk setiap lagu yang diputar selama tiga puluh detik, tidak peduli apakah lagu tersebut berdurasi enam menit atau hanya sembilan puluh detik. Musisi yang merilis lagu pendek berdurasi seratus detik secara matematis mampu meraup jumlah pemutaran (*stream counts*) dua kali lebih banyak dalam satu jam putar dibanding musisi yang merilis karya panjang, memicu perlombaan memperpendek lagu demi mengejar kalkulasi laba.
* **Kematian Ruang Eksperimen Musikalitas**: Struktur lagu yang dipangkas habis mengorbankan bagian intro yang puitis, solo instrumen yang melodis, dan transisi bridge yang megah. Lagu direduksi menjadi sekadar jingle komersial pendek tanpa dinamika crescendo yang berani.

## Menghidupkan Kembali Budaya Apresiasi Karya Utuh

Menyelamatkan kedalaman seni musik menuntut pendengar untuk tidak menyerah pada dikte kecepatan algoritma:

1. **Tolak Memperlakukan Musik Sekadar Bumbu Latar Video**: Luangkan waktu untuk mendengarkan lagu secara utuh melalui aplikasi pemutar musik beresolusi tinggi dengan headphone berkualitas tanpa sambil menggulir linimasa layar media sosial.
2. **Apresiasi Musisi yang Mempertahankan Durasi Naratif Ideal**: Berikan dukungan penuh bagi pencipta lagu dan produser yang tetap berkomitmen menyusun karya berdurasi panjang dengan eksplorasi aransemen instrumen yang kaya dan berani.
3. **Eksplorasi Genre Musik yang Mengagungkan Dinamika Waktu**: Jelajahi khazanah musik soul klasik, rock progresif, folk akustik, dan jazz yang membiarkan melodi berkembang secara sabar melintasi menit demi menit tanpa terburu-buru mengejar batas durasi aplikasi ponsel.

Lagu yang agung adalah sebuah lukisan sonik yang berhak memiliki ruang bernafas dan waktu untuk menyentuh relung batin Anda. Jangan biarkan algoritma video pendek mereduksi keajaiban sebuah simfoni lagu menjadi sekadar potongan nada instan yang lenyap dalam sekali kedipan mata.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 22:00 WIB (${articles.length} ARTIKEL) ===\n`);
  const results = [];

  for (let i = 0; i < articles.length; i++) {
    const art = articles[i];
    console.log(`\n--- [${i + 1}/${articles.length}] Memvalidasi 7C Editorial Guard: "${art.title}" ---`);

    // 1. Audit 7C Editorial Guard
    const audit = validate7cEditorial(art.title, art.content, art.excerpt);
    console.log(`Audit Score: ${audit.score}/100 | Valid: ${audit.valid}`);
    if (!audit.valid) {
      console.error("Ditolak oleh 7C Editorial Guard:", audit.errors);
      process.exit(1);
    }
    if (audit.warnings.length > 0) console.log("Warnings:", audit.warnings);
    if (audit.suggestions.length > 0) console.log("Suggestions:", audit.suggestions);

    // 2. Publish (Local SQLite & Outbox JSON, Remote Production Plesk)
    console.log(`Mempublikasikan ke Local DB & Remote Production...`);
    const res = await autoPublishPost(art, { remote: true });
    console.log(`Hasil Publikasi:`, JSON.stringify({
      slug: res.slug,
      status: res.status,
      score: res.score,
      dbSaved: res.dbSaved,
      remotePublished: res.remotePublished,
      url: res.url
    }, null, 2));
    results.push(res);
  }

  console.log("\n=== SELURUH BATCH 22:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-2200.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
