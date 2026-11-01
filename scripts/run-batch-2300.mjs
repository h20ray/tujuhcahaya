import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

const articles = [
  {
    title: "Krisis Lisensi Open Source: Ketika Proyek Komunitas Tiba-Tiba Dikunci oleh Korporasi yang Haus Monopoli",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Open Source", "Software", "Lisensi", "Komunitas Developer", "Kedaulatan Digital"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Deretan baris kode pemrograman perangkat lunak terbuka di layar terminal komputer programmer",
    excerpt: "Gerakan open source dibangun atas kepercayaan bahwa kode bebas pakai akan memajukan dunia bersama. Namun kini, sejumlah korporasi seenaknya mengubah lisensi saat bisnis mereka terancam penyedia cloud raksasa.",
    content: `Perjanjian tak tertulis yang menopang fondasi internet selama tiga dekade terakhir kini berada di titik nadir. Dahulu, jutaan pengembang perangkat lunak sukarela menyumbangkan waktu, tenaga, dan baris kode terbaik mereka ke proyek-proyek terbuka (*open source*) dengan satu keyakinan luhur: bahwa karya kolektif ini akan selamanya bebas dimanfaatkan, dimodifikasi, dan diaudit oleh publik demi kemajuan bersama.

Namun begitu proyek tersebut menjelma menjadi tulang punggung infrastruktur perbankan, telekomunikasi, dan sistem komputasi global, janji itu perlahan dikhianati. Gelombang perubahan lisensi dari lisensi bebas murni seperti MIT, Apache, atau BSD menjadi lisensi restriktif seperti BSL (*Business Source License*) atau SSPL kian marak dilancarkan oleh entitas bisnis yang menguasai merek proyek tersebut.

## Dalih Perlindungan Diri Melawan Predator Cloud

Alasan defensif yang selalu diapungkan pihak korporasi berporos pada perilaku raksasa penyedia layanan komputasi awan (*hyperscalers*). Raksasa seperti AWS, Google Cloud, atau Microsoft dituding meraup keuntungan ratusan triliun rupiah dengan cara membungkus peranti lunak sumber terbuka menjadi layanan terkelola (*managed service*), tanpa memberikan kontribusi finansial maupun kode yang sepadan kepada pencipta aslinya.

Dalam posisi terdesak, perusahaan pengelola proyek merasa berhak mengubah aturan main. Namun langkah ini justru memicu kerugian sistemik yang melukai seluruh ekosistem:

* **Eksploitasi Kontributor Komunitas**: Ribuan programmer independen yang menyumbang kode gratis selama bertahun-tahun mendadak mendapati kontribusi mereka dikunci di balik gerbang lisensi komersial sepihak.
* **Fragmentasi dan Kebingungan Hukum**: Lisensi hibrida menciptakan ketakutan di kalangan startup dan divisi legal perusahaan rintisan, memaksa tim teknis membuang ribuan jam kerja hanya untuk memastikan apakah sebuah pustaka kode aman digunakan.
* **Lahirnya Gelombang Fork Tandingan**: Sebagai respons atas pengkhianatan ini, komunitas membalas dengan membelah kode (*forking*). Proyek alternatif lahir untuk menjaga api kebebasan tetap menyala, meski harus menanggung beban pemeliharaan infrastruktur secara mandiri.

## Membangun Kedaulatan di Luar Cengkeraman Entitas Tunggal

Pelajaran paling mahal dari krisis lisensi ini adalah bahaya membiarkan sebuah proyek sumber terbuka dikendalikan oleh entitas korporasi tunggal. Sejarah membuktikan bahwa begitu sebuah proyek open source dipegang oleh yayasan independen yang netral seperti Linux Foundation atau Apache Software Foundation, hak cipta dan tata kelolanya terlindungi dari godaan manuver moneter para pemegang saham.

Dunia rekayasa perangkat lunak harus berani menolak ilusi keterbukaan semu (*open washing*). Komunitas teknologi global berhak menuntut transparansi tata kelola sejak hari pertama: kode yang dibangun dari keringat publik tidak boleh disandera menjadi benteng kepemilikan privat begitu keuntungan komersial mulai menggiurkan.`
  },
  {
    title: "Kematian Mode Splitscreen Couch Co-op: Bagaimana Industri Game Mengorbankan Kehangatan Main Bareng demi Penjualan Konsol Ganda",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Industri Game", "Splitscreen", "Multiplayer", "Konsol", "Gamer"],
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Dua orang gamer duduk berdampingan di sofa ruang keluarga memegang stik kontroler konsol",
    excerpt: "Duduk berhimpitan di satu sofa sambil berebut layar televisi pernah menjadi puncak kegembiraan video game. Sayangnya, fitur splitscreen sengaja disingkirkan penerbit demi memaksa tiap pemain membeli perangkat dan langganan online masing-masing.",
    content: `Bagi siapa saja yang tumbuh di era kejayaan konsol PlayStation, Nintendo 64, atau Xbox klasik, memori terbaik bermain game hampir selalu berlatar di ruang keluarga. Duduk berdempetan di atas karpet bersama kawan akrab, saling melirik sudut layar lawan dalam permainan tembak-menembak, atau menjerit histeris ketika cangkang kura-kura membalikkan hasil balapan di garis finis—itulah sihir murni yang menjadikan video game media hiburan paling sosial di bumi.

Kini, kehangatan bermain bareng di satu layar (*couch co-op*) tersebut nyaris punah dari etalase rilisan besar. Game modern menuntut setiap orang untuk pulang ke rumah masing-masing, mengunci diri di kamar tidur, menyalakan perangkat terpisah, dan berbicara melalui mikrofon headset berlatar sunyi.

## Efisiensi Grafis Menjadi Kambing Hitam Finansial

Pengembang dan penerbit sering kali berkilah di balik tantangan teknis. Menampilkan dua atau empat sudut pandang kamera sekaligus pada satu layar resolusi 4K dengan target 60 bingkai per detik (*fps*) memang menuntut kerja keras kartu grafis dan prosesor konsol. Demi mengejar estetika visual yang fotorealistis dan pencahayaan dinamis yang memukau mata di video trailer, kompromi fitur layar terbagi (*splitscreen*) dipangkas tanpa ampun.

Namun alasan teknis tersebut lagi-lagi hanyalah tabir penutup bagi kalkulasi ekonomi yang jauh lebih agresif:

* **Misi Penjualan Perangkat Ganda**: Satu keluarga dengan dua anak yang dahulu cukup membeli satu konsol dan dua stik kontroler kini ditekan untuk membeli dua unit mesin terpisah agar anak-anak mereka bisa bermain bersama di judul yang sama.
* **Pajak Langganan Multipemain Daring**: Menghapus fitur lokal memaksa setiap pemain berlangganan layanan jaringan berbayar tahunan dari platform konsol, mengalirkan pendapatan berulang tanpa henti ke kas korporasi.
* **Komersialisasi Toko Kosmetik Digital**: Pengalaman daring memungkinkan penerbit memamerkan skin karakter berbayar kepada pemain lain di lobi publik, sebuah tekanan sosial konsumtif yang tidak bekerja di ruang tamu rumah sendiri.

## Mengembalikan Kemanusiaan di Hadapan Layar

Keberhasilan luar biasa dari judul-judul independen seperti *It Takes Two* atau *A Way Out* membuktikan bahwa hasrat manusia untuk berbagi tawa dan emosi di ruang fisik yang sama tidak pernah luntur. Pemain tidak selalu menuntut bayangan sinar matahari yang paling akurat atau tekstur dedaunan paling rapat jika taruhannya adalah hilangnya koneksi tatap muka langsung.

Video game pada esensi terdalamnya adalah media perjumpaan, bukan sekadar instrumen isolasi diri yang dipagari langganan server bulanan. Menghidupkan kembali mode splitscreen adalah perjuangan merebut kembali ruang tamu keluarga dari monopoli kesendirian digital.`
  },
  {
    title: "Romantisisme Kafe Sunyi: Mengapa Pekerja Urban Rela Membayar Secangkir Kopi Mahal demi Bekerja di Tengah Orang Asing",
    category: "budaya",
    byline: "0100MUNS3DJSD97205CCB31353", // Sarah Dilla
    tags: ["Budaya", "Gaya Hidup", "Pekerja Urban", "Kedai Kopi", "Sosiologi", "Kesehatan Mental"],
    imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang sedang fokus mengetik di laptop di samping cangkir kopi latte di sudut kedai kopi yang hangat",
    excerpt: "Bekerja dari rumah menawarkan kebebasan dan nol biaya transportasi, namun ribuan profesional urban tetap berbondong-bondong memadati kedai kopi. Fenomena ini bukan soal rasa kafein, melainkan dahaga akan kebersamaan pasif di tengah isolasi kota modern.",
    content: `Secara kalkulasi rasional dan finansial, kebiasaan ini tampak tidak masuk akal. Di atas meja kerja kamar tidur sendiri, seseorang memiliki koneksi internet serat optik yang stabil, kursi ergonomis yang disetel pas dengan lekuk punggung, serta seduhan kopi bubuk yang biayanya tidak sampai lima ribu rupiah per cangkir. Tidak ada deru bising mesin penggiling kopi, tidak ada musik latar yang diputar di luar selera pribadi, dan tidak ada kewajiban berdandan rapi.

Namun setiap hari kerja menjelang siang di berbagai sudut kota besar Indonesia, kedai-kedai kopi spesialisasi tetap dipadati barisan laptop terbuka. Para pekerja lepas, karyawan kerja jarak jauh (*remote worker*), dan pendiri usaha rintisan rela merogoh kocek lima puluh ribu rupiah hanya untuk mendapatkan hak menduduki satu kursi kayu selama empat jam.

## Fenomena Body Doubling dan Dahaga Kehadiran Manusia

Kajian psikologi kognitif dan sosiologi perkotaan menawarkan penjelasan menarik di balik paradoks ini. Alasan utama kepindahan ruang kerja ini berakar pada konsep *body doubling*—sebuah kecenderungan psikologis di mana kehadiran orang lain yang juga sedang sibuk berkonsentrasi mampu menstimulasi fokus dan menahan dorongan menunda pekerjaan (*procrastination*).

Di balik kepraktisan kerja fleksibel dari rumah (*work from home*), tersimpan jebakan kesepian yang mengikis motivasi:

* **Matinya Batas Domestik dan Profesional**: Ketika kamar tidur merangkap sebagai ruang kerja, batasan psikologis antara tempat beristirahat dan tempat berjuang runtuh. Kedai kopi menjadi 'kantor proksi' yang memaksa seseorang bangun pagi, menyisir rambut, dan melangkah keluar pintu rumah.
* **Kebersamaan Pasif yang Membebaskan**: Di kedai kopi, kita berada di tengah kerumunan tanpa tuntutan untuk berinteraksi intens. Kehadiran manusia lain memberikan rasa keterikatan sosial tanpa beban basa-basi sopan santun korporat yang melelahkan.
* **Ritual Pembelian Rasa Berdaya**: Membayar secangkir kopi mahal berfungsi seperti tiket masuk transaksional untuk membeli suasana disiplin dan rasa memiliki kendali atas ritme hidup harian sendiri.

## Mencari Jangkar Makna di Tengah Kota yang Kering

Kedai kopi modern sesungguhnya telah bermutasi menjadi tempat perlindungan psikologis bagi generasi yang terombang-ambing di antara fleksibilitas tanpa batas dan keterasingan digital. Denting sendok membentur cangkir keramik, desis uap susu mesin espresso, dan aroma sangrai biji kopi menjadi lanskap suara organik yang menggantikan dinginnya sunyi empat dinding kamar kos.

Keberadaan kita di sudut meja kafe yang temaram adalah pengakuan jujur: bahwa seberapa pun canggihnya teknologi komunikasi jarak jauh, manusia tetaplah makhluk sosial yang membutuhkan kehadiran fisik sesamanya agar tidak tersesat dalam kesendirian pikiran sendiri.`
  },
  {
    title: "Kematian Solo Gitar dalam Musik Pop: Mengapa Melodi Ikonis Dihapus demi Memikat Algoritma Singkat",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Industri Musik", "Solo Gitar", "Gitaris", "Streaming", "Budaya Pop"],
    imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seorang gitaris sedang memainkan petikan solo gitar elektrik di atas panggung dengan pencahayaan dramatis",
    excerpt: "Dulu, solo gitar adalah titik kulminasi yang membakar emosi pendengar dan menegaskan identitas sebuah lagu. Kini di tangga lagu populer, bagian instrumental tersebut raib tak berbekas karena dianggap memperlambat tempo konsumsi instan.",
    content: `Coba dengarkan kembali lagu-lagu legendaris dari dekade 1970-an hingga awal 2000-an. Mulai dari lengkingan nada tajam di pertengahan lagu rock klasik hingga liukan melodi gitar manis pada tembang pop balada Indonesia, solo gitar selalu memegang takhta sakral. Ia bukan sekadar jeda pengisi kekosongan vokal, melainkan klimaks emosional di mana musisi menumpahkan rasa yang tak sanggup diartikulasikan oleh lirik kata-kata.

Namun jika Anda memindai lima puluh lagu teratas di tangga lagu populer global maupun domestik hari ini, Anda akan menyaksikan fenomena yang sunyi: solo gitar telah lenyap dari peredaran musik arus utama.

## Tirani Durasi Tiga Puluh Detik dan Metrik Retensi

Hilangnya solo instrumen bukan disebabkan oleh habisnya bakat gitaris muda berbakat. Kepunahan ini adalah konsekuensi langsung dari rekayasa arsitektur platform streaming audio dan media sosial berbasis video pendek:

* **Hukuman Tombol Lewati (*Skip Rate*)**: Algoritma platform streaming menuntut lagu untuk langsung menangkap perhatian pendengar dalam lima detik pertama. Bagian jembatan instrumental yang panjang dianggap berisiko tinggi memicu pendengar menekan tombol lewati, yang langsung menurunkan skor rekomendasi lagu di sistem kurasi mesin.
* **Penyusutan Durasi Lagu**: Demi memaksimalkan frekuensi pemutaran lagu (*play count*) dan royalti per putaran, rata-rata durasi lagu pop menyusut dari empat menit menjadi kurang dari dua setengah menit. Di ruang sempit tersebut, tidak ada lagi jatah detik tersisa untuk solo instrumental yang bernapas lega.
* **Fokus pada Melodi Vokal Berulang**: Struktur lagu modern didesain seperti lingkaran umpan dopamin: pembuka vokal langsung masuk ke reff utama, diikuti bait pendek, lalu kembali ke reff penutup agar potongan audionya mudah dipotong menjadi latar video berdurasi lima belas detik.

## Merawat Jiwa Instrumental di Ruang Komunitas

Meski tersingkir dari sorotan tangga lagu pop arus utama, napas instrumen gitar tidak pernah benar-benar padam. Di panggung-panggung konser independen dan komunitas penggemar fisik, petikan solo gitar yang berkarakter tetap disambut tepukan membahana. Penikmat musik sejati selalu mendambakan ketegangan dinamika panggung saat jari-jemari sang musisi berkejaran di atas fretboard kayu, melahirkan momen magis yang tidak bisa ditiru oleh deretan preset synthesizer otomatis.

Musik pada derajat estetikanya yang murni adalah percakapan rasa yang utuh, bukan jajaran produk jualan yang harus dipotong-potong demi menyesuaikan rentang atensi layar sentuh. Mengembalikan ruang bagi solo instrumental adalah cara kita merayakan ketrampilan artistik manusia di hadapan kepungan homogenitas algoritma komersial.`
  }
];

async function main() {
  console.log("=== MEMULAI BATCH AUTO-PUBLISH TUJUHCAHAYA (JADWAL 23:00 WIB / TIAP 30 MENIT) ===");
  const results = [];

  for (let i = 0; i < articles.length; i++) {
    const art = articles[i];
    console.log(`\n--- [${i + 1}/${articles.length}] Memvalidasi 7C Editorial Guard: "${art.title}" ---`);
    
    // 1. Audit
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

  console.log("\n=== SELURUH BATCH 23:00 BERHASIL DIPUBLIKASIKAN ===");
}

main().catch(err => {
  console.error("Batch Error:", err);
  process.exit(1);
});
