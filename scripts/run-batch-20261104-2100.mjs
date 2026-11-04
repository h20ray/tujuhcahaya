import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Ilusi Keamanan SMS Dua Faktor: Mengapa Kode Otentikasi Seluler Menjadi Titik Lemah Pembajakan Akun Digital dan Rekening Bank",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Keamanan Siber", "Autentikasi", "Privasi Digital", "Perbankan", "SIM Swap"],
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Visualisasi kode keamanan digital dan enkripsi data siber pada layar monitor",
    excerpt: "Banyak pengguna menganggap kode OTP lewat SMS sebagai benteng pertahanan terakhir yang kokoh bagi rekening bank dan email mereka. Kenyataannya, protokol telekomunikasi kuno dan maraknya kejahatan SIM swap menjadikan SMS sebagai metode verifikasi dua faktor paling rentan dieksploitasi.",
    content: `Di tengah maraknya insiden kebocoran data kredensial akun, otentikasi dua faktor (*two-factor authentication* atau 2FA) dipromosikan sebagai standar emas perlindungan identitas digital. Lembaga perbankan, platform e-commerce, hingga penyedia layanan surel massal kompak menerapkan verifikasi sandi sekali pakai (*one-time password* atau OTP) yang dikirimkan melalui pesan teks singkat (*SMS*). Bagi jutaan pengguna kasual, menerima rentetan enam digit angka di layar ponsel menghadirkan rasa aman semu bahwa akun mereka terlindungi dari tangan jahil peretas yang hanya bermodalkan kata sandi curian.

Namun menempatkan SMS sebagai gerbang verifikasi lapis kedua sesungguhnya merupakan kompromi arsitektur keamanan yang sangat rapuh. Protokol SMS dirancang puluhan tahun silam untuk komunikasi teks biasa antar-pelanggan seluler, bukan sebagai instrumen transmisi data kriptografis sensitif. Tanpa enkripsi ujung-ke-ujung (*end-to-end encryption*) dan ketergantungannya pada infrastruktur jaringan operator publik, SMS kini berubah menjadi sasaran empuk bagi pelaku kejahatan siber terorganisir.

## Titik Rentan Transmisi dan Rekayasa Sosial Seluler

Kelemahan mendasar verifikasi berbasis SMS bertumpu pada sejumlah vektor ancaman yang sulit dibendung oleh pengguna awam:

* **Eksploitasi Protokol SS7 pada Jaringan Telekomunikasi**: Sistem persinyalan SS7 (*Signalling System No. 7*) yang menghubungkan lalu lintas antar-operator global memiliki celah bawaan warisan masa lalu. Peretas profesional dengan akses ke simpul jaringan telekomunikasi dapat membelokkan rute panggilan dan pesan SMS secara langsung (*SMS interception*) tanpa perlu menyentuh fisik ponsel korban atau memasang perangkat perusak.
* **Maraknya Sindikat Kloning Kartu Lewat SIM Swap**: Kejahatan *SIM swap fraud* memanfaatkan rekayasa sosial terhadap staf layanan pelanggan gerai operator. Pelaku berbekal salinan KTP palsu dan data pribadi korban yang bocor dari internet mengajukan penggantian kartu SIM baru dengan dalih kartu lama hilang. Begitu nomor seluler berpindah ke tangan pelaku, seluruh aliran kode OTP perbankan akan mendarat mulus di perangkat pembajak, melucuti pertahanan akun korban dalam hitungan menit.
* **Penyadapan Notifikasi oleh Aplikasi Perusak (*Spyware*)**: Sistem operasi seluler yang disusupi malware pengembang pihak ketiga dapat memanfaatkan izin akses pembacaan notifikasi untuk menguras kode OTP yang baru tiba di layar kunci (*lock screen*), mengirimkannya ke server komando peretas secara otomatis sebelum pengguna sempat menyadarinya.

## Beralih ke Protokol Otentikasi Modern yang Kebal Intersepsi

Membangun benteng pertahanan digital yang solid menuntut transisi bertahap dari SMS menuju standar kriptografi modern:

1. **Gunakan Aplikasi Pembuat Kunci Lokal (TOTP)**: Segera nonaktifkan verifikasi SMS pada akun penting dan gantikan dengan aplikasi otentikator mandiri seperti Google Authenticator, Aegis, atau Bitwarden. Aplikasi ini menghasilkan kode berbasis waktu (*Time-based One-Time Password*) secara lokal di perangkat tanpa memerlukan koneksi jaringan internet atau transmisi gelombang seluler.
2. **Manfaatkan Kunci Keamanan Fisik Berstandar FIDO2**: Untuk proteksi maksimal pada akun komputasi awan dan rekening keuangan, gunakan kunci keamanan perangkat keras berbasis USB/NFC seperti YubiKey. Protokol WebAuthn secara otomatis memverifikasi keaslian domain situs web, sehingga kebal terhadap serangan phising maupun penyadapan lalu lintas jaringan.
3. **Kunci Akun Operator Telekomunikasi dengan PIN Pribadi Tambahan**: Hubungi penyedia layanan seluler Anda dan mintalah penguncian nomor dengan kata sandi verifikasi khusus (*port freeze/SIM lock PIN*). Langkah proteksi preventif ini mencegah pihak asing mengajukan duplikasi kartu SIM Anda di gerai fisik tanpa memasukkan kode otorisasi rahasia.

Keamanan siber yang andal tidak boleh bersandar pada kenyamanan semata. Menggantungkan nasib tabungan dan privasi digital pada sebaris pesan teks yang melayang di jaringan seluler tanpa proteksi adalah perjudian berisiko tinggi yang sewaktu-waktu dapat membobol integritas identitas Anda.`
  },
  {
    title: "Kutukan Sistem Durabilitas Senjata pada Game Aksi dan Petualangan: Ketika Mekanik Kerusakan Pedang Mengubah Ritme Pertarungan Menjadi Beban Inventaris",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Desain Game", "Mekanik Game", "Game Aksi", "RPG", "Industri Game"],
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pemain video game memegang kendali kontroler di depan layar monitor gaming bernuansa futuristik",
    excerpt: "Mekanik durabilitas senjata kerap disematkan pengembang demi menghadirkan sensasi bertahan hidup yang realistis. Namun bila diterapkan secara berlebihan pada game aksi cepat, kehancuran pedang setelah lima tebasan justru mematikan keseruan pertarungan menjadi rutinitas menyortir tas bawaan.",
    content: `Dalam filosofi desain game bertahan hidup (*survival*), keterbatasan sumber daya adalah bahan bakar utama pemicu ketegangan. Keharusan menghemat peluru, menambal baju pelindung yang koyak, hingga memperbaiki beliung yang retak memberikan bobot konsekuensi nyata pada setiap keputusan pemain. Terinspirasi oleh daya pikat realisme tersebut, sejumlah perancang game aksi dan petualangan beranggaran besar mulai mengadopsi mekanisme durabilitas senjata (*weapon degradation*) ke dalam dunia permainan terbuka yang luas dan bertempo tinggi.

Niat awalnya terdengar mulia: memaksa pemain bereksperimen dengan berbagai variasi senjata dan mencegah ketergantungan pada satu bilah pedang legendaris sejak awal cerita. Namun dalam praktiknya pada game aksi-petualangan, mekanik ini kerap menjelma menjadi gangguan ritme yang menjengkelkan. Ketika pedang pusaka yang diperoleh lewat perjuangan menumbangkan monster raksasa hancur berkeping-keping hanya setelah beberapa tebasan ringan, ilusi kepahlawanan pemain seketika runtuh digantikan oleh kejengkelan mengelola ruang tas (*inventory management*).

## Rusaknya Alur Pertarungan Akibat Keausan Artifisial

Penerapan durabilitas senjata yang kaku merusak psikologi kenikmatan bermain melalui sejumlah efek samping desain:

* **Sindrom Penimbun Senjata Langka (*Too Good to Use Syndrome*)**: Alih-alih memicu kreativitas bertarung, ancaman senjata patah justru melahirkan kecemasan bermain. Pemain cenderung menyimpan senjata terbaik di dalam tas inventaris karena takut merusaknya, dan memilih bertarung memakai senjata berkualitas rendah yang membosankan. Kemenangan pertarungan tidak lagi ditentukan oleh keahlian membaca gerakan lawan, melainkan oleh kalkulasi kikir mengorbankan stok peralatan.
* **Terputusnya Momentum Alur Tempur (*Combat Flow Interruption*)**: Kenikmatan game aksi modern berakar pada ritme kombo serangan yang mengalir dinamis. Ketika senjata pemain mendadak hancur di tengah bentrokan sengit, permainan dipaksa berhenti seketika. Pemain harus membuka menu antarmuka, menelusuri daftar senjata, dan melengkapi bilah baru. Jeda kaku ini menghancurkan adrenalin dan membuyarkan konsentrasi pertarungan.
* **Pelemahan Makna Imbalan Eksplorasi**: Menjelajahi gua rahasia di sudut peta terpencil terasa hampa ketika hadiah yang ditemukan di dasar peti harta karun adalah senjata rapuh yang akan lenyap setelah satu sesi pertempuran. Pemain kehilangan rasa kepemilikan personal (*attachment*) terhadap senjata yang mereka bawa berpetualang.

## Merancang Mekanik Ketahanan Peralatan yang Memperkaya Permainan

Menciptakan tantangan bermain yang seimbang menuntut keberanian tim desainer untuk merombak formula usang durabilitas:

1. **Terapkan Penurunan Efektivitas Tanpa Penghancuran Permanen**: Tirulah pendekatan game Souls-like klasik atau seri Monster Hunter, di mana senjata yang aus hanya mengalami penurunan ketajaman atau daya serang, bukan hancur menjadi debu. Pemain cukup menggunakan batu asah (*whetstone*) saat jeda pertempuran untuk memulihkan performa bilah tanpa kehilangan aset berharga mereka.
2. **Berikan Siklus Perbaikan dan Modifikasi Mandiri**: Integrasikan sistem tempa yang memberi keleluasaan bagi pemain untuk memperkuat material senjata favorit mereka. Memperbaiki senjata retak di bengkel pandai besi memberikan kepuasan investasi progresif, bukan hukuman kemunduran status yang menyebalkan.
3. **Fokuskan Pembatasan pada Mekanik Energi atau Mana**: Jika tujuan desainer adalah mencegah serangan terkuat dipakai terus-menerus, batasi frekuensi serangan menggunakan pengukur stamina, durasi waktu tunggu (*cooldown*), atau titik fokus magis, bukan dengan meremukkan senjata fisik yang telah diperjuangkan pemain dengan susah payah.

Video game aksi adalah sarana ekspresi ketangkasan dan imajinasi kepahlawanan. Membebani tangan pemain dengan senjata rapuh yang mudah patah demi pretensi realisme semu hanya akan memadamkan api keseruan di balik keindahan koreografi pertarungan.`
  },
  {
    title: "Bahaya Mengabaikan Mata Kering Akibat Menatap Monitor Berjam-jam: Mengapa Penurunan Refleks Berkedip Diam-diam Menggores Lapisan Kornea Mikro",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Kesehatan Mata", "Gaya Hidup", "Sindrom Penglihatan Komputer", "Produktivitas", "Ergonomi"],
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang menatap layar komputer kerja dengan ekspresi lelah dan memegang area sekitar mata",
    excerpt: "Mata terasa berpasir dan perih setelah seharian menatap laptop kerap dianggap sekadar kelelahan wajar. Namun penelitian oftalmologi membuktikan bahwa penurunan drastis frekuensi berkedip merusak lapisan air mata pelindung dan memicu erosi mikroskopis pada epitel kornea.",
    content: `Bagi jutaan pekerja kantoran, pemrogram, desainer, dan pelajar di kota-kota besar, menatap layar monitor komputer dan ponsel pintar selama delapan hingga sepuluh jam per hari telah menjadi rutinitas wajib. Saat jam kerja usai, sensasi mata terasa panas, merah, mengganjal seperti kelilipan pasir, atau penglihatan yang sesekali mengabur sering kali dianggap sebagai tanda kelelahan ringan yang akan pulih dengan sendirinya setelah tidur malam.

Sayangnya, anggapan menyepelekan tersebut menjadi celah berkembangnya komplikasi mata kering kronis (*dry eye disease*) akibat *Computer Vision Syndrome* (CVS). Menatap layar dengan fokus intensif secara drastis mengubah refleks biologis mata manusia. Ketiadaan pelumasan berkala akibat jarangnya kelopak mata berkedip bukan hanya memicu rasa tidak nyaman, melainkan secara perlahan mengikis lapisan pelindung kornea dan membuka pintu bagi peradangan jaringan mata yang lebih serius.

## Runtuhnya Perlindungan Film Air Mata di Depan Layar

Mekanisme kerusakan permukaan bola mata saat bekerja di depan monitor berlangsung melalui proses biomekanis yang spesifik:

* **Anjloknya Frekuensi Berkedip Hingga Enam Puluh Persen**: Dalam kondisi rileks normal, manusia berkedip sekitar 15 hingga 20 kali setiap menit. Setiap kedipan meratakan lapisan film air mata (*tear film*) ke seluruh permukaan bola mata. Namun saat mata terpaku pada teks monitor atau baris kode, frekuensi berkedip merosot tajam menjadi hanya 5 sampai 7 kali per menit. Yang lebih mengkhawatirkan, sebagian besar kedipan di depan layar adalah kedipan tak sempurna (*incomplete blinks*) yang tidak menutup kelopak secara rapat.
* **Penguapan Cepat Lapisan Lipid Pelindung**: Film air mata tersusun atas tiga lapisan esensial: lendir (*mucin*), cairan bening (*aqueous*), dan lapisan minyak tipis terluar (*lipid layer*) yang diproduksi oleh kelenjar meibom. Udara dingin pendingin ruangan (*AC*) yang kering mempercepat proses evaporasi cairan, menyebabkan lapisan minyak pecah dan meninggalkan permukaan kornea telanjang tanpa bantalan hidrolik.
* **Luka Gores Mikroskopis pada Sel Epitel Kornea**: Kornea yang mengering kehilangan perlindungan gesekannya. Setiap kali kelopak mata berkedip di atas permukaan bola mata yang kering, terjadi gesekan mekanis yang memicu abrasi mikro (*punctate epithelial erosions*). Pasien merasakan sensasi menusuk dan silau berlebihan terhadap cahaya lampu (*photophobia*).

## Menjaga Hidrasi Okular dan Kesehatan Kornea Jangka Panjang

Mencegah kerusakan permanen pada fungsi penglihatan menuntut penerapan kebiasaan kerja yang ramah bagi mata:

1. **Disiplin Menerapkan Kaidah 20-20-20 Secara Konsisten**: Setiap 20 menit menatap monitor, istirahatkan mata Anda selama 20 detik dengan melihat objek yang berada pada jarak minimal 20 kaki (sekitar 6 meter). Latihan sederhana ini mengendurkan otot siliaris yang tegang dan memicu refleks kedipan mata yang lebih dalam dan penuh.
2. **Gunakan Tetes Mata Air Mata Buatan Bebas Pengawet**: Sediakan tetes mata pelumas (*artificial tears*) dengan kandungan natrium hialuronat tanpa bahan pengawet (*preservative-free*) di meja kerja Anda. Teteskan 3 hingga 4 kali sehari untuk menjaga kelembapan epitel mata saat Anda harus menyelesaikan tenggat waktu kerja yang padat.
3. **Atur Sudut Pandang Monitor Lebih Rendah dari Garis Mata**: Tempatkan bagian atas layar monitor sekitar 10 hingga 15 derajat di bawah ketinggian mata lurus Anda. Posisi memandang ke arah bawah mempersempit bukaan kelopak mata, sehingga meminimalkan luas permukaan bola mata yang terpapar langsung oleh hembusan udara kering ruangan.

Penglihatan adalah jendela utama produktivitas dan kualitas hidup kita. Mengabaikan alarm rasa perih di kedua bola mata Anda demi memburu pekerjaan hanya akan menukar kesehatan organ visual yang tak tergantikan dengan penderitaan komplikasi kornea yang melelahkan.`
  },
  {
    title: "Kepunahan Jiwa Panggung Akibat Backing Track Berlebihan di Konser Musik: Ketika Penampilan Langsung Direduksi Menjadi Sesi Karaoke Berbayar Mahal",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Konser Musik", "Pertunjukan Langsung", "Audio", "Industri Musik", "Musisi"],
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Panggung pertunjukan konser musik dengan sorotan tata lampu megah di hadapan ribuan penonton",
    excerpt: "Menonton konser musik seharusnya menjadi perayaan spontanitas akustik dan interaksi emosional tanpa jaring pengaman. Namun tren ketergantungan pada rekaman pengiring otomatis atau backing track diam-diam mengubah panggung arena megah menjadi pertunjukan pantomim mekanis.",
    content: `Bagi para pecinta musik sejati, daya magis menonton musisi idola di atas panggung konser selalu bersumber dari satu elemen tak tergantikan: ketidaksempurnaan yang manusiawi. Suara serak vokalis saat mencapai nada tinggi di ujung konser, improvisasi petikan gitar yang berbeda dari versi album studio, hingga ayunan tempo drum yang mengikuti lonjakan energi penonton di barisan festival adalah denyut jantung seni pertunjukan langsung (*live performance*). Di sanalah ikatan intim antara panggung dan penonton tercipta secara organik.

Namun lanskap industri konser komersial dalam beberapa tahun terakhir memperlihatkan pergeseran estetika yang mengkhawatirkan. Tiket konser yang kini dijual dengan harga jutaan rupiah sering kali tidak lagi menyajikan kemurnian musik langsung. Di balik kemegahan tata panggung spektakuler dan ledakan piroteknik, semakin banyak artis dan band besar yang tampil dengan ketergantungan ekstrem pada trek rekaman suara pra-rekaman (*backing tracks*) yang berjalan di komputer jinjing ruang kontrol tata suara.

## Ilusi Kemegahan yang Mematikan Spontanitas Panggung

Ketergantungan berlebihan pada trek audio bantuan membawa konsekuensi serius yang merusak hakikat pementasan musik:

* **Matinya Ruang Improvisasi dan Variasi Dinamika Musisi**: Ketika seluruh instrumen panggung terikat secara kaku pada trek klik pengatur tempo (*click track*) di earphone monitor musisi demi menyelaraskan visual layar raksasa, fleksibilitas pementasan seketika mati. Musisi tidak bisa memperpanjang bagian solo lagu, tidak bisa mempercepat ketukan birama saat gairah panggung membara, dan tidak bisa memberikan ruang hening spontan untuk mendengar nyanyian penonton. Pertunjukan berubah menjadi replika kaset yang diputar ulang dengan presisi dingin.
* **Penipuan Vokal Lewat Penyamaran Jalur Audio Ganda (*Vocal Doubling*)**: Banyak penampil pop modern membiarkan jalur vokal utama studio (*lead vocal stems*) berbunyi kencang di sistem tata suara stadion, sementara sang artis hanya melafalkan beberapa patah kata di sela koreografi tari yang melelahkan. Penonton kerap kesulitan membedakan mana getaran pita suara asli dan mana rekaman digital yang disuntikkan secara tersembunyi dari balik konsol penata suara.
* **Dampak Buruk Terhadap Ekosistem Pemain Musik Pengiring**: Keberadaan trek digital sintetis menggusur peran pemain musik tiup, paduan suara latar, hingga seksi perkusi hidup. Demi menghemat anggaran akomodasi tur keliling dunia, manajemen promotor lebih memilih menaruh instrumen-instrumen organik tersebut ke dalam berkas audio digital, mematikan lapangan kerja bagi musisi sesi panggung yang berbakat.

## Mengembalikan Keberanian Tampil Jujur dan Bernyawa

Menyelamatkan marwah panggung musik langsung menuntut keberanian para musisi dan kedewasaan audiens untuk merayakan ketidaksempurnaan:

1. **Jadikan Rekaman Bantuan Sekadar Pemanis Tekstur Minor**: Jika aransemen memang membutuhkan efek synthesizer latar atau bunyi atmosferik yang mustahil dibawa ke panggung, gunakan trek tersebut dalam porsi minimal. Jangan pernah menggantikan fondasi instrumen utama seperti bass, drum, gitar, dan vokal utama dengan rekaman otomatis.
2. **Rayakan Keunikan Momen Spontan Bersama Penonton**: Musisi sejati tidak perlu takut jika vokal mereka sedikit goyah atau salah menyentuh fret gitar. Penonton datang ke arena konser bukan untuk mendengarkan salinan berkas audio resolusi tinggi, melainkan untuk merasakan keringat, kejujuran emosi, dan denyut getar energi yang hanya bisa lahir dari manusia hidup.
3. **Dorong Transparansi Format Konser dari Promotor**: Komunitas penikmat musik berhak mengetahui format pertunjukan yang mereka bayar. Menghargai band yang berani tampil seratus persen murni tanpa *backing track* adalah langkah penting untuk menjaga agar panggung musik tetap menjadi ruang seni yang bernyawa, bukan sekadar etalase sandiwara komersial.

Musik panggung adalah seni yang bernapas dalam kerapuhan saat ini. Menukar debar ketidakpastian tersebut dengan kenyamanan trek audio rekaman yang aman hanya akan mencabut nyawa pertunjukan dan meninggalkan ruang konser sebagai ruang hampa tanpa jiwa seni yang sejati.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 21:00 WIB (4 NOV 2026) - ${articles.length} ARTIKEL ===\n`);
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

    // 2. Publish (Local SQLite & Remote Production Plesk)
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

  console.log("\n=== SELURUH BATCH 21:00 WIB (4 NOV 2026) BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261104-2100.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
