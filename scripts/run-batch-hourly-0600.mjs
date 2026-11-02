import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Matinya Port Fisik di Gadget Modern: Mengapa Standar Nirkabel Memaksa Konsumen Membeli Dongle Tak Berujung",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Hardware", "Gadget", "Port Fisik", "Dongle", "Limbah Elektronik"],
    imageUrl: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Rangkaian kabel adaptor dan konektor komputer teratur di atas meja kerja",
    excerpt: "Mulai dari hilangnya colokan audio hingga peniadaan slot kartu memori dan port jaringan di laptop. Pabrikan membungkus pengurangan fitur ini dengan dalih estetika tipis, namun sejatinya memaksa pengguna membeli rentetan dongle yang menambah sampah elektronik.",
    content: `Ingatkah Anda saat membeli sebuah laptop atau ponsel pintar dan langsung dapat menyambungkannya ke pengeras suara, proyektor ruang rapat, atau kartu memori kamera tanpa memerlukan alat perantara tambahan? Hari-hari fungsionalitas langsung tersebut kini telah menjadi kenangan usang.

Demi mengejar ambisi desain sasis yang makin tipis dan serbuan konektivitas nirkabel, para raksasa teknologi secara bertahap memangkas colokan fisik (*ports*) dari perangkat mereka. Colokan audio 3,5 mm dicopot dari smartphone, slot kartu SD dihilangkan dari laptop kerja, dan port kabel jaringan LAN dipangkas habis. Konsumen dijanjikan masa depan nirkabel yang serba praktis, namun kenyataan di lapangan justru sebaliknya: tas kerja kita kini dipenuhi tumpukan konverter dan dongle plastik yang mudah hilang dan rusak.

## Monetisasi Melalui Ekosistem Adaptor Tambahan

Peniadaan soket sambungan fisik menyimpan kalkulasi bisnis aksesori yang sangat menguntungkan korporasi:

* **Pajak Ekstra Berkedok Dongle**: Untuk sekadar menyambungkan kabel HDMI atau kabel data USB konvensional ke laptop modern, pengguna dipaksa membeli hub sambungan multi-port berharga ratusan ribu hingga jutaan rupiah. Fitur utilitas dasar yang dulunya gratis kini dimonetisasi sebagai produk terpisah.
* **Ketergantungan Baterai pada Aksesori Audio**: Dihapusnya jack audio memaksa konsumen beralih ke earphone Bluetooth. Earphone nirkabel ini ditenagai baterai litium mini yang masa pakainya jarang melampaui tiga tahun, menciptakan siklus pembuangan limbah elektronik (*e-waste*) baru yang mencemari lingkungan.
* **Ketidakstabilan Transmisi Data**: Sambungan nirkabel seperti Wi-Fi dan Bluetooth rentan terhadap gangguan interferensi sinyal di ruangan padat. Bagi pekerja kreatif audio-visual, keandalan colokan fisik berkabel tembaga murni tetap tak tergantikan oleh latensi sinyal radio.

## Menuntut Hak Perangkat Fungsional yang Mandiri

Kecanggihan rekayasa sejati adalah merancang perangkat yang fungsional dan mandiri, bukan perangkat cacat yang menuntut pengguna membawa gantungan dongle ke mana pun mereka pergi. Pabrikan harus berhenti menjadikan estetika milimeter sebagai pembenaran untuk memangkas utilitas perangkat keras.

Konsumen berhak mendapatkan laptop dan ponsel yang siap diajak bekerja di dunia nyata, bukan sekadar perhiasan pameran yang lumpuh tanpa adaptor tambahan.`
  },
  {
    title: "Kepunahan Mode Split-Screen Lokal: Ketika Kebersamaan Bermain di Satu Sofa Dihabisi Ambisi Multiplayer Online",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Split-Screen", "Multiplayer", "Konsol", "Nostalgia", "Budaya Gamer"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Dua pengontrol konsol permainan video tergeletak berdampingan di atas meja kayu",
    excerpt: "Kenikmatan bermain konsol bersama kawan di satu sofa lewat mode layar belah perlahan punah dari industri game. Pengembang menyingkirkan fitur kebersamaan fisik ini demi mengejar kesempurnaan grafis dan memaksakan langganan multipemain online.",
    content: `Bagi generasi yang tumbuh di era konsol PlayStation, Nintendo 64, atau Xbox lawas, salah satu kenangan terindah masa kecil adalah berkumpul bersama kawan di ruang keluarga. Duduk berdampingan di atas karpet atau sofa yang sama, menatap layar televisi tabung yang terbagi menjadi dua atau empat kotak (*split-screen*), dan saling melontarkan tawa riuh saat bermain balap kart atau adu tembak.

Kini, kehangatan komunal tersebut hampir musnah dari katalog game modern beranggaran besar. Mode kerja sama lokal satu layar secara sistematis disingkirkan oleh penerbit. Jika Anda ingin bermain game aksi petualangan terbaru bersama sahabat yang sedang berkunjung ke rumah, Anda tidak lagi bisa sekadar menyerahkan stik kontroler kedua. Sang sahabat diwajibkan pulang ke rumahnya sendiri, membeli konsol miliknya sendiri, membeli keping game yang sama, dan membayar biaya langganan multipemain daring bulanan.

## Korban Ambisi Grafis Fotorealistis

Kepunahan fitur layar belah lokal ini dipicu oleh kompromi teknis dan keserakahan model bisnis industri:

* **Tuntutan Rendering Ganda yang Menguras Daya**: Membagi layar menjadi dua perspektif pemain berarti sistem konsol harus merender geometri dunia game dua kali secara bersamaan. Di tengah obsesi industri mengejar resolusi 4K dan efek pencahayaan fotorealistis (*ray tracing*), pengembang memilih membuang mode layar belah daripada menurunkan sedikit kualitas visual demi stabilitas performa.
* **Monetisasi Akun Ganda yang Menggiurkan**: Dari sudut pandang finansial penerbit, sistem bermain bersama di satu layar adalah model yang tidak efisien karena dua orang hanya membeli satu salinan game. Dengan memaksakan koneksi multipemain online, penerbit berhasil menggandakan angka penjualan kaset game, kosmetik digital, serta biaya langganan layanan jaringan berbayar.
* **Hilangnya Spontanitas Interaksi Manusia**: Komunikasi suara melalui mikrofon headset nirkabel tidak akan pernah mampu menggantikan ekspresi tawa langsung, senggolan bahu, dan kehangatan interaksi tatap muka di dunia nyata.

## Mengembalikan Jiwa Permainan Komunal

Video game pada hakikatnya adalah medium hiburan yang menghubungkan manusia, bukan mesin isolasi sosial yang memenjarakan setiap pemain di balik headset masing-masing. Komunitas game harus terus mengapresiasi pengembang independen yang masih setia merawat tradisi mode kerja sama lokal (*couch co-op*).

Kemajuan teknologi grafis kehilangan maknanya jika ia mengorbankan tawa riang bersama orang-orang terdekat di ruang hidup kita.`
  },
  {
    title: "Mitos Minum Delapan Gelas Air Sehari: Bagaimana Kampanye Komersial Membelokkan Kebutuhan Hidrasi Alami Tubuh",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Hidrasi", "Ginjal", "Fisiologi", "Mitos Kesehatan", "Gaya Hidup"],
    imageUrl: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Segelas air putih bening dengan tetesan embun segar di atas permukaan kaca",
    excerpt: "Doktrin wajib menenggak delapan gelas atau dua liter air putih setiap hari telah mendarah daging di masyarakat. Padahal dari kacamata fisiologi ginjal, memaksa menenggak cairan berlebih tanpa rasa haus justru membebani kerja penyaringan organ tubuh.",
    content: `Perhatikan meja kerja di kantor atau ruang belajar hari ini: botol minum berukuran raksasa dua liter dengan penanda waktu minum per jam telah menjadi pemandangan lazim. Di media sosial, para pemengaruh gaya hidup mempromosikan aturan minum delapan gelas air putih sehari sebagai kunci ajaib untuk kulit bercahaya, penurunan berat badan kilat, dan pembuangan racun tubuh.

Namun bila kita menelusuri literatur sains nefrologi dan kedokteran internal, anjuran baku delapan gelas tersebut sesungguhnya tidak memiliki landasan bukti klinis yang kuat. Asal-usul aturan ini berakar dari rekomendasi dewan nutrisi Amerika Serikat tahun 1945 yang menyebutkan kebutuhan cairan harian sekitar dua setengah liter—namun bagian penting dari pedoman tersebut sering sengaja diabaikan: bahwa sebagian besar cairan tersebut sudah terpenuhi dari makanan padat, buah-buahan, sayuran, sup, dan minuman harian lainnya.

## Beban Fisiologis dari Kelebihan Cairan Paksa

Memaksa diri menenggak air putih dalam volume besar saat tubuh tidak membutuhkannya dapat memicu gangguan metabolisme nyata:

* **Risiko Hiponatremia dan Pengenceran Elektrolit**: Ginjal orang dewasa yang sehat memiliki kapasitas penyaringan cairan maksimal sekitar delapan ratus mililiter hingga satu liter per jam. Menenggak air dalam jumlah berlebih melebihi ambang batas ini akan mengencerkan kadar natrium dalam darah (*hyponatremia*), memicu sakit kepala, pembengkakan sel, dan rasa mual.
* **Gangguan Kualitas Tidur Akibat Nokturia**: Kebiasaan memaksakan target minum air di malam hari memaksa kandung kemih terisi penuh saat tidur. Akibatnya, seseorang terbangun beberapa kali di tengah malam untuk buang air kecil, menghancurkan siklus tidur lelap yang sangat dibutuhkan untuk perbaikan seluler.
* **Pelenyapan Sinyal Haus Alami**: Jutaan tahun evolusi biologis telah membekali tubuh manusia dengan mekanisme rasa haus (*thirst mechanism*) yang sangat presisi di hipotalamus otak. Menggantikan mekanisme alami ini dengan jadwal jam botol mekanis justru menumpulkan kepekaan tubuh terhadap sinyal kebutuhan cairan riil.

## Mendengarkan Kebijaksanaan Sinyal Biologis

Kebutuhan air setiap individu sangat unik, dipengaruhi oleh suhu lingkungan, kelembapan udara, tingkat aktivitas fisik, dan komposisi menu makanan. Cara paling akurat untuk memantau status hidrasi adalah dengan memperhatikan rasa haus alami dan mengamati warna urine Anda—warna kuning muda jernih menandakan hidrasi yang optimal, tanpa perlu memaksa diri meminum air hingga kembung.

Kesehatan optimal tercapai dengan menghormati keseimbangan alami tubuh, bukan dengan menuruti dogma angka kaku yang dipopulerkan oleh industri botol minum komersial.`
  },
  {
    title: "Daur Ulang Sampel Musik Era 2000-an: Ketika Label Rekaman Kehabisan Keberanian Melahirkan Melodi Baru",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Sampling", "Industri Musik", "Nostalgia", "Kreativitas", "Lagu Pop"],
    imageUrl: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Koleksi kaset pita rekaman audio lawas tersusun rapi di rak kayu",
    excerpt: "Tangga lagu pop global kini dibanjiri rilisan baru yang sekadar mencomot bait melodi ikonis era 1990-an dan 2000-an. Industri rekaman terjebak dalam rasa takut mengambil risiko kreatif dan memilih mengeksploitasi nostalgia instan generasi muda.",
    content: `Nyalakan radio atau putar daftar lagu populer di aplikasi streaming hari ini, dan ada kemungkinan besar Anda akan mengalami sensasi *deja vu* musikal yang kuat. Melodi akord piano dari lagu dance lawas Eurodance tahun 1990-an, petikan gitar akustik dari hits pop remaja tahun 2000-an, atau pengait vokal dari tembang R&B klasik mendadak muncul kembali dalam balutan dentuman beat trap modern dengan lirik yang sedikit diubah.

Praktik mencomot cuplikan lagu lama (*sampling*) sesungguhnya merupakan bagian penting dari tradisi kreatif genre hip-hop dan musik elektronik. Namun apa yang terjadi di industri pop arus utama beberapa tahun belakangan bukan lagi eksplorasi artistik yang memperkaya karya asli, melainkan daur ulang komersial yang malas demi mencari keuntungan instan tanpa risiko.

## Rasa Takut Berinovasi di Bawah Bayang-Bayang Algoritma

Ketergantungan label rekaman multinasional pada formula melodi lama mencerminkan krisis keberanian di ruang produksi:

* **Mengeksploitasi Memori Emosional Generasi**: Manusia secara psikologis memiliki keterikatan nostalgia yang mendalam pada lagu-lagu yang mereka dengar di masa remaja. Dengan menyelipkan cuplikan lagu lama yang sudah terbukti populer ke dalam rilisan baru, produser memastikan lagu tersebut langsung terdengar akrab di telinga pendengar tanpa perlu proses perkenalan yang panjang.
* **Perangkap Metrik Daya Tarik Cepat**: Di era platform media sosial video pendek, produser hanya memiliki waktu tiga detik untuk memikat perhatian pengguna sebelum mereka menggeser layar (*swipe*). Menggunakan melodi yang sudah dikenal puluhan juta orang adalah jalan pintas paling murah untuk mengamankan angka putaran.
* **Penyempitan Ruang bagi Komposer Muda Orisinal**: Anggaran promosi label dialokasikan dalam jumlah raksasa untuk membayar royalti hak cipta lagu lawas alih-alih diinvestasikan pada penulis lagu independen baru yang menawarkan kebaruan melodi dan harmoni yang segar.

## Menuntut Kembalinya Keberanian Artistik

Musik pop yang berbobot tidak pernah lahir dari ruang kerja kalkulatif yang hanya mendaur ulang kejayaan masa lalu. Era-era emas musik dunia tercipta justru ketika para musisi berani menabrak kebiasaan lama, mengeksplorasi progresi akord yang tak terduga, dan melahirkan melodi orisinal yang kemudian menjadi tonggak sejarah baru.

Pendengar musik berhak menolak sajian nostalgia murahan yang terus dihangatkan kembali di meja saji audio. Sudah saatnya industri musik keluar dari zona nyaman masa lampau dan mulai menaruh kepercayaan pada melodi-melodi baru yang berani bernyawa.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 06:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 06:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-0600.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
