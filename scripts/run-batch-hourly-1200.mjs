import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Matinya Hak Memperbaiki Mandiri: Bagaimana Desain Bodi Rekat Lem Memaksa Konsumen Membuang Gadget Rusak Minor",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Right to Repair", "Hardware", "Elektronik", "Keberlanjutan", "Kedaulatan Konsumen"],
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Papan sirkuit elektronik motherboard dan obeng presisi untuk perbaikan perangkat",
    excerpt: "Dahulu mengganti baterai atau layar ponsel hanya membutuhkan obeng kecil dan waktu sepuluh menit. Kini pabrikan merekatkan setiap komponen dengan lem industri dan enkripsi software, memaksa konsumen membeli perangkat baru saat terjadi kerusakan sepele.",
    content: `Dua dekade lalu, membuka bagian belakang perangkat elektronik portabel adalah hal lumrah yang bisa dilakukan siapa saja di meja makan. Baterai ponsel dapat dilepas cukup dengan mencungkil kuku jempol, modul memori laptop memiliki pintu akses sendiri dengan satu baut kecil, dan teknisi lokal di pinggir jalan mampu mengganti komponen rusak dalam hitungan jam tanpa halangan peranti lunak.

Kini, rancangan perangkat konsumen modern telah bertransformasi menjadi monolit tertutup yang kedap akses. Demi mengejar bodi ponsel yang lebih tipis satu milimeter dan sertifikasi ketahanan air, para raksasa teknologi sengaja melenyapkan baut mekanis konvensional dan menggantikannya dengan lapisan lem industri berkekuatan ekstrem. Perangkat yang Anda beli seharga belasan juta rupiah sejatinya dirancang bukan untuk dirawat seumur hidup, melainkan untuk dibuang begitu masa garansi satu tahun kedaluwarsa.

## Benteng Lem Industri dan Jebakan Pemasangan Berpasangan

Strategi usang terencana (*planned obsolescence*) ini dieksekusi melalui kombinasi rekayasa fisik dan pembatasan kode digital yang agresif:

* **Lapisan Lem Kimia yang Menyandera Komponen**: Untuk sekadar mengganti baterai litium yang mulai kembung, pengguna harus memanaskan panel kaca belakang hingga suhu delapan puluh derajat Celsius menggunakan blower khusus dan mencongkelnya dengan pisau tipis. Kesalahan tekanan sebesar satu milimeter saja akan meretakkan panel kaca atau menusuk sel baterai hingga memicu percikan api.
* **Enkripsi Serialisasi Komponen (*Parts Pairing*)**: Bahkan bila seorang teknisi berhasil memindahkan modul kamera asli dari satu unit ponsel donor ke ponsel identik lainnya, sistem operasi akan menampilkan jendela galat yang menjengkelkan. Pabrikan mengunci nomor seri setiap sensor ke papan sirkuit utama (*motherboard*) lewat kode kriptografi, melumpuhkan fungsi-fungsi penting seperti fokus otomatis atau pengenalan wajah biometrik bila perbaikan tidak dilakukan di pusat servis resmi mereka.
* **Ledakan Timbunan Sampah Elektronik Global**: Jutaan perangkat yang sembilan puluh persen komponennya masih berfungsi sempurna terpaksa berakhir di tempat pembuangan sampah (*e-waste landfill*) hanya karena biaya penggantian layar atau baterai di gerai resmi sengaja dibanderol setara separuh harga ponsel baru.

## Menuntut Kembali Kedaulatan Kepemilikan Konsumen

Prinsip dasar kepemilikan benda menyatakan bahwa barang yang telah dibayar lunas adalah milik sah pembeli seutuhnya. Konsumen memiliki hak moral dan hukum untuk membongkar, memperbaiki, atau memodifikasi perangkat miliknya tanpa perlu memohon izin atau membayar upeti lisensi kepada korporasi pembuat.

Gerakan Hak Memperbaiki Mandiri (*Right to Repair*) harus didukung dengan regulasi perlindungan konsumen yang tegas di tingkat nasional. Pemerintah wajib mewajibkan pabrikan elektronik menyediakan suku cadang orisinal dengan harga wajar, mendistribusikan buku panduan skematik secara terbuka, serta melarang praktik penguncian nomor seri komponen yang mematikan bengkel servis independen.`
  },
  {
    title: "Kematian Mode Multiplayer Split-Screen: Ketika Mabar Satu Sofa Tergerus Ambisi Menjual Konsol dan Game Dobel",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Split-Screen", "Multiplayer", "Desain Game", "Nostalgia", "Mabar"],
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Dua pengontrol konsol video game tergeletak di atas meja ruang santai",
    excerpt: "Duduk berdampingan di satu sofa sembari berteriak gembira di depan layar terbagi adalah memori emas generasi gamer klasik. Kini fitur split-screen sengaja dihapus demi memaksa setiap pemain membeli konsol terpisah dan langganan online pass.",
    content: `Bagi generasi pemain game yang tumbuh di era keemasan konsol Nintendo 64, PlayStation 2, atau Xbox orisinal, sebagian besar kenangan masa kecil paling hangat terukir di atas karpet ruang keluarga. Empat sahabat duduk berhimpitan di satu sofa, masing-masing menggenggam stik kontroler berkabel, menatap tajam ke seperempat bagian layar televisi tabung dalam pertandingan balap liar atau pertempuran arena tembak-menembak yang riuh.

Keseruan bermain bersama dalam satu ruangan (*local couch co-op*) lewat tampilan layar terbagi (*split-screen*) adalah perekat sosial nyata yang tak tergantikan. Riuh tawa ketika rekan bermain salah belok, sikutan fisik spontan saat lawan mengintip sudut layar Anda, serta camilan gorengan yang dinikmati bergantian menciptakan ikatan persahabatan yang otentik tanpa butuh koneksi internet sedetik pun.

## Efisiensi Grafis Murah dan Serakahnya Model Bisnis Digital

Namun di lanskap video game modern beresolusi 4K saat ini, tradisi kumpul bersama di ruang keluarga tersebut nyaris musnah sepenuhnya:

* **Dalih Beban Kartu Grafis dan Optimasi Mesin Game**: Penerbit game modern kerap berdalih bahwa merender dua atau empat sudut pandang kamera pemain secara simultan akan memangkas ketajaman tekstur dan menurunkan frame rate di bawah enam puluh frame per detik. Dalih teknis ini sering kali sekadar alibi malas untuk menghindari proses optimasi kode mesin game yang rumit demi mengejar tenggat rilis pasar.
* **Strategi Penjualan Ganda Perangkat Keras dan Lisensi**: Alasan ekonomi di balik lenyapnya split-screen jauh lebih dingin: bila dua orang bersaudara di satu rumah ingin bermain bersama, mereka kini dipaksa membeli dua unit konsol terpisah, dua keping lisensi game, dan dua biaya langganan layanan multiplayer online bulanan. Keputusan desain ini menggeser fokus studio dari merancang rekreasi sosial menjadi memaksimalkan monetisasi per kepala pemain.
* **Degradasi Komunikasi Menjadi Saluran Audio Dingin**: Kehangatan kontak mata dan tawa spontan di atas sofa telah digantikan oleh obrolan suara lewat mikrofon headset di antara avatar virtual. Tanpa kehadiran fisik lawan main di sebelah Anda, atmosfer permainan lebih mudah tergelincir ke dalam perilaku toksik dan ejekan hampa yang merusak suasana bermain.

## Merawat Tradisi Bermain Bersama Secara Nyata

Video game paling berkesan dalam sejarah kebudayaan bukanlah judul yang memiliki triliunan poligon fotorealistis, melainkan permainan yang sanggup menyulut kebahagiaan murni di antara manusia yang saling berbagi waktu di tempat yang sama.

Komunitas gamer harus terus melantangkan suara dukungan kepada para pengembang independen (*indie games*) yang masih berani mempertahankan mode multiplayer lokal. Jangan biarkan layar televisi di ruang tamu Anda kehilangan fungsinya sebagai panggung kebersamaan keluarga yang paling membahagiakan.`
  },
  {
    title: "Bahaya Mengunci Rahang Saat Stres Kerja: Bagaimana Bruxism Bawah Sadar Meremukkan Enamel Gigi dan Memicu Sakit Kepala Kronis",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Bruxism", "Gigi", "Ergonomi Kerja", "Stres", "Kesehatan Saraf"],
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang melakukan relaksasi leher dan rahang untuk meredakan ketegangan tubuh",
    excerpt: "Saat tenggat laporan mendekat atau emosi tertahan dalam rapat, rahang bawah sering mengatup kencang tanpa sadar. Kebiasaan menggertakkan gigi (*bruxism*) ini menghancurkan lapisan enamel pelindung dan memicu nyeri sendi temporomandibular yang menyiksa.",
    content: `Perhatikan posisi mulut dan rahang Anda saat ini, tepat ketika Anda sedang fokus membaca layar atau mengetik balasan pesan kerja yang mendesak: apakah gigi atas dan gigi bawah Anda sedang saling merapat kencang? Apakah otot-otot di sudut pipi dekat telinga Anda terasa tegang dan mengeras?

Bagi jutaan profesional perkotaan yang hidup di bawah tekanan tenggat waktu konstan, respons mengunci rahang (*clenching*) atau menggertakkan gigi (*bruxism*) adalah mekanisme fisik bawah sadar yang paling sering terabaikan. Beban emosional dan kecemasan mental yang tidak tersalurkan dialirkan secara otomatis oleh sistem saraf pusat menuju otot pengunyah (*masseter muscle*), mengubah rahang Anda menjadi mesin pres hidrolik berkekuatan puluhan kilogram yang beroperasi tanpa henti.

## Kerusakan Struktural Sendi Rahang dan Retak Mikro Enamel

Kebiasaan mengatupkan gigi di luar waktu mengunyah makanan menimbulkan dampak destruktif berantai pada sistem orofasial:

* **Pengikisan Lapisan Enamel Pelindung (*Atraksi Gigi*)**: Enamel adalah zat terkeras di dalam tubuh manusia, namun gesekan konstan antargigi dengan tekanan tinggi perlahan mengikis mahkota gigi hingga mendatar. Dentin bagian dalam yang sensitif menjadi terbuka, memicu rasa ngilu menusuk setiap kali mulut terkena hembusan udara dingin atau cairan manis.
* **Peradangan Sendi Temporomandibular (*TMD*)**: Sendi engsel rahang (*temporomandibular joint*) yang terletak persis di depan liang telinga menerima beban tekanan berlebih setiap detik rahang terkunci. Bantalan tulang rawan sendi dapat bergeser, menimbulkan sensasi letupan bunyi (*clicking sound*) yang menyakitkan saat membuka mulut lebar atau saat mengunyah makanan keras.
* **Sakit Kepala Tegang yang Menjalar ke Pelipis**: Otot masseter terhubung erat dengan jaringan otot temporalis di kedua sisi pelipis kepala dan otot leher bagian belakang. Kelelahan kronis pada kelompok otot pengunyah ini mengirimkan sinyal rasa nyeri tumpul yang menyebar, sering kali salah didiagnosis sebagai serangan migrain berkepanjangan.

## Membangun Kesadaran Relaksasi Rahang Sehari-hari

Memulihkan kesehatan sendi rahang dan melindungi gigi dari kehancuran dini menuntut latihan kesadaran fisik secara aktif di tempat kerja:

1. **Prinsip Istirahat Fisiologis Rahang**: Hafalkan mantra sederhana ini setiap kali duduk di meja kerja: *bibir tertutup lembut, deretan gigi tidak boleh bersentuhan, dan ujung lidah menempel santai di langit-langit mulut*. Beri jeda celah beberapa milimeter di antara gigi atas dan bawah saat Anda tidak sedang mengunyah makanan.
2. **Pijatan Lembut Otot Pipi**: Luangkan waktu satu menit setiap siang hari untuk memijat area otot masseter di kedua pipi dengan gerakan melingkar menggunakan bantalan jemari guna meredakan spasme otot.
3. **Pemasangan Pelindung Gigi Malam Hari (*Night Guard*)**: Bila Anda sering terbangun di pagi hari dengan rahang kaku dan lelah, konsultasikan dengan dokter gigi untuk membuat pelindung akrilik khusus yang dipasang di mulut saat tidur guna menyerap hentakan gaya gigitan nocturnal.

Dengarkan bahasa tubuh Anda. Redakan ketegangan rahang Anda sekarang juga—karena ketenangan pikiran sejati selalu terpancar dari otot wajah yang rileks dan beristirahat dengan damai.`
  },
  {
    title: "Tirani Lagu Sped-Up 1.5x di Media Sosial: Bagaimana Tren Percepat Tempo Musik Memutilasi Jiwa dan Bobot Emosional Aransemen",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Sped Up", "Produksi Musik", "Media Sosial", "Budaya Audio", "Tren Musik"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Piringan hitam berputar dan peralatan studio audio profesional",
    excerpt: "Banyak karya musik legendaris kini beredar di linimasa dalam versi dipercepat satu setengah kali lipat demi menyesuaikan durasi video pendek. Budaya percepatan ini meremukkan dinamika nada, mematikan jeda hening, dan mendegradasi seni audio menjadi sekadar stimulan dopamin instan.",
    content: `Gulir linimasa video pendek di media sosial hari ini selama lima belas menit, dan Anda akan segera disambut oleh gelombang trek audio berkecepatan tinggi: melodi lagu balada sedih yang dulunya mengalun megah kini terdengar melengking cepat seperti suara tokoh kartun tupai, diiringi ketukan bass drum yang dipacu hingga seratus lima puluh ketukan per menit (*BPM*).

Fenomena lagu yang dipercepat (*sped-up songs*) ini bukan lagi sekadar subkultur bawah tanah *nightcore* di platform video lama, melainkan telah menjadi komoditas industri arus utama. Label rekaman raksasa bahkan secara resmi merilis versi *Sped Up* dari lagu-lagu katalog mereka di platform streaming komersial, semata-mata demi mendongkrak angka putar di linimasa algoritma yang haus konten bertempo kilat.

## Mutilasi Timbre Vokal dan Kematian Jeda Kontemplatif

Praktik percepatan tempo secara instan ini merusak fondasi artistik yang telah dibangun musisi dan penata suara dengan penuh ketelitian:

* **Distorsi Warna Vokal dan Kerusakan Karakter Akustik**: Setiap penyanyi memiliki sidik jari sonik unik berupa timbre vokal, ayunan vibrato emosional, dan hembusan napas di antara bait lirik. Menaikkan tempo sebesar tiga puluh hingga lima puluh persen menggeser nada suara ke frekuensi tinggi yang melengking kaku, menghapus seluruh kedalaman emosi duka atau kehangatan yang tertanam dalam rekaman orisinal.
* **Pelenyapan Dinamika Jeda Hening (*Musical Rest*)**: Dalam arsitektur komposisi musik, keindahan sebuah lagu tidak hanya ditentukan oleh nada yang berbunyi, melainkan juga oleh ketukan hening (*silence*) di antara birama. Jeda singkat sebelum puncak melodi (*drop*) dirancang untuk membangun ketegangan emosional pendengar; versi yang dipercepat meratakan jeda tersebut menjadi deru ritmis bising yang monoton tanpa ruang bernapas.
* **Kecanduan Rangsangan Dopamin Sensorik Cepat**: Terbiasa mengonsumsi musik berkecepatan tinggi melatih otak pendengar generasi muda untuk menjadi tidak sabaran terhadap karya musik yang memiliki dinamika kontemplatif berdurasi panjang. Lagu balada klasik yang membutuhkan waktu empat menit untuk membangun klimaks emosionalnya kini dianggap membosankan hanya karena tidak langsung menyajikan dentuman instan di lima detik pertama.

## Menikmati Musik dalam Tempo yang Semestinya

Sebuah komposisi musik adalah keputusan artistik berdaulat dari penciptanya. Setiap detik ketukan tempo, tarikan napas penyanyi, dan jeda kesunyian dihitung dengan kepekaan rasa batin untuk menyampaikan sebuah cerita hidup yang bermakna kepada dunia.

Label rekaman dan kurator musik harus berhenti memutilasi integritas karya demi memburu statistik tayang algoritma sesaat. Kembalilah mendengarkan musik dalam tempo aslinya; luangkan waktu untuk menikmati setiap helaan napas instrumen, karena keindahan seni suara terbaik hanya bisa meresap ke dalam jiwa manusia yang bersedia memperlambat langkahnya.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 12:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 12:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-1200.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
