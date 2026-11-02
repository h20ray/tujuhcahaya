import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Obsesi Layar Lipat dan Retakan Dua Tahun: Mengapa Ponsel Lipat Tetap Menjadi Eksperimen Mahal yang Rentan Rusak",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Smartphone", "Layar Lipat", "Foldable", "Hardware", "Hak Konsumen"],
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ponsel pintar dengan bodi kaca elegan tergeletak di atas meja minimalis",
    excerpt: "Di etalase toko, engsel mekanik presisi dan lipatan layar fleksibel dipamerkan sebagai puncak rekayasa modern. Namun setelah dua tahun pemakaian riil, film pelindung terkelupas dan garis retakan permanen membuktikan kerapuhan mendasar material polimer.",
    content: `Ketika produsen pertama kali memamerkan ponsel dengan layar yang dapat ditekuk di panggung teknologi internasional, publik seketika terpesona. Menonton sebilah kaca lentur yang melipat mulus tanpa patah terasa seperti menyaksikan fiksi ilmiah menjadi kenyataan. Para eksekutif pemasaran dengan lantang memproklamasikan bahwa format ponsel batang konvensional telah usang dan era layar lipat (*foldables*) telah resmi tiba.

Namun lima generasi kemudian, kilau masa depan tersebut masih terbelenggu oleh hukum fisika material yang tak kunjung terpecahkan. Di etalase berlampu sorot terang, unit pameran tampak kokoh dan tanpa cacat. Namun begitu ponsel berharga dua puluh lima hingga tiga puluh juta rupiah tersebut mendarat di saku celana pengguna sehari-hari, ia kembali menjadi perangkat eksperimental rapuh yang menuntut kehati-hatian berlebih.

## Bom Waktu Kelelahan Material Polimer

Membengkokkan layar ribuan kali setiap bulan menciptakan tantangan durabilitas yang belum sanggup ditaklukkan oleh rekayasa kaca fleksibel (*ultra-thin glass*):

* **Retakan Garis Lipatan Pasca-Garansi**: Lapisan pelindung layar fleksibel terbuat dari material polimer yang sensitif terhadap suhu dan oksidasi udara. Setelah delapan belas hingga dua puluh empat bulan pemakaian, tekanan tekukan konstan mulai memunculkan retakan mikro di sepanjang engsel tengah—tepat ketika masa garansi resmi pabrikan telah kedaluwarsa.
* **Kerentanan Fatal Terhadap Partikel Debu**: Berbeda dengan ponsel konvensional yang memiliki sertifikasi ketahanan air dan debu tingkat tinggi, engsel mekanik ponsel lipat memiliki celah mikro yang rentan dimasuki butiran pasir atau serat kain saku. Partikel debu yang terselip di bawah panel layar dapat langsung melubangi panel OLED dari dalam.
* **Biaya Penggantian Setara Banderol Laptop Baru**: Ketika layar fleksibel mengalami kerusakan garis hitam (*crease failure*), pengguna dihadapkan pada tagihan servis resmi yang mencapai separuh harga beli perangkat. Angka perbaikan yang tidak masuk akal ini secara efektif mengubah ponsel menjadi sampah elektronik sekali pakai.

## Menolak Eksperimen Mahal Tanpa Kepastian Durabilitas

Inovasi bentuk perangkat keras adalah hal yang patut dihargai dalam industri teknologi yang mulai menjemukan. Namun konsumen tidak semestinya dijadikan kelinci percobaan berbayar mahal untuk teknologi yang belum matang secara struktur ketahanan fisik.

Hingga sains material mampu menjamin bahwa layar fleksibel dapat bertahan lima tahun tanpa mengalami delaminasi atau retak spontan, ponsel batang konvensional dengan kaca keras anti-gores tetap menjadi pilihan paling rasional bagi kedaulatan dompet pengguna.`
  },
  {
    title: "Monetisasi Akses Awal Tiga Hari: Ketika Penerbit Memeras Penggemar Setia demi Menghindari Spoiler Game",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Industri Game", "Early Access", "Monetisasi", "Pre-Order", "Gamer"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pencahayaan neon dramatis pada pengaturan komputer gaming dan stik konsol",
    excerpt: "Edisi Deluxe video game kini bukan lagi soal memorabilia fisik atau kostum kosmetik langka, melainkan hak istimewa bermain tiga hari lebih cepat. Penerbit mengeksploitasi ketakutan bocoran cerita di media sosial demi memungut biaya ekstra.",
    content: `Beberapa tahun lalu, edisi khusus sebuah rilis video game—entah berlabel *Deluxe*, *Collector's*, atau *Ultimate Edition*—biasanya dibeli oleh penggemar fanatik yang menginginkan barang koleksi fisik nyata: patung miniatur karakter, buku sampul tebal berisi sketsa konsep, keping kaset lagu latar orkestra, atau kotak kemasan logam eksklusif. Ada kompensasi estetika konkret atas uang ekstra yang dikeluarkan.

Hari ini, taktik pemasaran tersebut telah bergeser menjadi bentuk pemerasan psikologis yang manipulatif. Penerbit game raksasa kini rutin menyematkan satu klausul sakti pada edisi mahal mereka: hak istimewa untuk memainkan permainan tiga hingga lima hari lebih awal dari tanggal rilis publik (*advanced access*). Tanpa tambahan konten cerita sepeser pun, gamer dipaksa membayar selisih harga ratusan ribu rupiah hanya demi menghindari keterlambatan waktu bermain.

## Eksploitasi Ketakutan Bocoran Cerita di Linimasa

Model monetisasi akses lebih awal ini dirancang dengan memanfaatkan dinamika beracun di media sosial:

* **Teror Bocoran Cerita (*Spoiler Culture*)**: Bagi game aksi yang berpusat pada kekuatan narasi, beredarnya cuplikan video akhir cerita di TikTok atau YouTube dalam hitungan jam pasca-rilis adalah momok yang menakutkan. Penggemar setia rela membayar upeti ekstra semata-mata agar dapat menamatkan cerita terlebih dahulu sebelum linimasa media sosial merusak kejutan plot.
* **Pergeseran Tanggal Rilis Asli yang Menipu**: Secara teknis, ketika server game sudah dinyalakan dan kode permainan siap dimainkan oleh pemilik edisi mahal, itulah tanggal rilis riil permainan tersebut. Tanggal rilis standar yang jatuh beberapa hari kemudian sejatinya adalah penundaan buatan (*artificial delay*) yang dirancang untuk menghukum pemain yang hanya mampu membeli edisi standar.
* **Kekacauan Server Tanpa Kompensasi**: Ironisnya, pemain yang membayar ekstra untuk akses awal ini kerap kali justru menjadi penguji kestabilan server peluncuran. Ketika infrastruktur online game tumbang di akhir pekan akses awal, penerbit jarang memberikan pengembalian dana atas hilangnya hak bermain yang telah dibeli lunas.

## Menghentikan Normalisasi Pajak Waktu Bermain

Praktik menahan akses game digital selama beberapa hari berdasarkan tebalnya dompet pemain adalah tren berbahaya yang mencederai integritas komunitas gamer. Tidak ada justifikasi logis mengapa sebuah file digital yang sama persis harus ditahan distribusinya selain dari keserakahan dividen kuartalan penerbit.

Gamer memiliki kekuatan untuk memutus rantai manipulasi ini dengan berhenti melakukan pembelian *pre-order* edisi mahal. Jangan biarkan rasa takut ketinggalan tren di media sosial mendikte cara Anda menikmati karya seni interaktif.`
  },
  {
    title: "Sindrom Kafein Pagi Buta: Mengapa Minum Kopi Sesaat Setelah Bangun Tidur Mengacaukan Ritme Kortisol Tubuh",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Kafein", "Kopi", "Kortisol", "Ritme Sirkadian", "Gaya Hidup"],
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Secangkir kopi espresso hangat mengepul di atas meja kayu di pagi hari",
    excerpt: "Menyeruput kopi hitam panas beberapa detik setelah membuka mata telah menjadi ritual otomatis jutaan orang. Namun secara neuroendokrin, membanjiri tubuh dengan stimulan saat kadar kortisol alami sedang di puncak justru memicu kelelahan ekstrem di siang hari.",
    content: `Bunyi alarm ponsel memecah keheningan fajar, tangan meraih selimut, dan dalam hitungan menit kaki sudah melangkah otomatis menuju dapur atau kedai kopi terdekat. Bagi jutaan pekerja profesional dan mahasiswa, menenggak secangkir kopi pekat sesaat setelah membuka mata dipandang sebagai satu-satunya cara untuk mengusir kabut kantuk dan menyalakan mesin produktivitas harian.

Namun bila ditinjau dari kacamata kronobiologi dan endokrinologi manusia, kebiasaan menyeruput kafein tepat setelah bangun tidur adalah kekeliruan fisiologis yang justru melemahkan stamina alami tubuh dalam jangka panjang. Tubuh manusia sejatinya telah memiliki mekanisme pembangun bawaan yang bekerja secara mandiri tanpa membutuhkan bantuan biji kopi impor.

## Pembajakan Respon Kebangkitan Kortisol Alami

Mengonsumsi kafein di saat jam biologis tubuh sedang bekerja optimal memicu rentetan benturan hormonal:

* **Penumpulan Respon Kebangkitan Kortisol (*CAR*)**: Dalam rentang tiga puluh hingga empat puluh lima menit setelah bangun tidur, kelenjar adrenal secara alami memompa hormon kortisol ke aliran darah untuk meningkatkan tekanan darah, memacu kewaspadaan mental, dan menyalakan metabolisme. Memasukkan kafein saat kortisol berada di puncaknya akan mengurangi kepekaan reseptor alami tubuh terhadap hormon tersebut.
* **Percepatan Toleransi Kafein Tubuh**: Karena sinyal kafein bertabrakan dengan puncak kortisol alami, tubuh dengan cepat membangun toleransi biokimia. Akibatnya, satu cangkir kopi tidak lagi cukup untuk memberikan efek bertenaga, memaksa seseorang menambah dosis menjadi dua atau tiga cangkir demi mendapatkan tingkat fokus yang sama.
* **Serangan Kelelahan Menabrak Tembok (*Afternoon Crash*)**: Kafein bekerja dengan cara menempel pada reseptor adenosin di otak untuk menutupi sinyal kantuk. Ketika efek kafein luntur di siang hari, tumpukan adenosin yang tertahan seketika membanjiri reseptor otak, memicu serangan kantuk dan letih luar biasa pada pukul dua atau tiga sore.

## Menggeser Jendela Menyeruput Kopi yang Tepat

Anda tidak perlu membuang cangkir kopi kesayangan untuk hidup sehat; Anda hanya perlu menyelaraskannya dengan jam biologis tubuh:

1. **Beri Jeda Enam Puluh hingga Sembilan Puluh Menit**: Tundalah tegukan kopi pertama hingga satu setengah jam setelah bangun tidur, saat lonjakan hormon kortisol alami tubuh mulai melandai secara bertahap.
2. **Awali Pagi dengan Hidrasi Air Putih**: Setelah berpuasa cairan selama tujuh jam tidur malam, organ tubuh membutuhkan rehidrasi air putih segar untuk memulihkan volume plasma darah sebelum mencerna minuman diuretik seperti kopi.
3. **Manfaatkan Paparan Sinar Matahari Pagi**: Berdiri di luar ruangan selama sepuluh menit di bawah sinar matahari pagi jauh lebih efektif memprogram jam sirkadian otak untuk terjaga daripada suntikan kafein instan di ruang gelap.

Hormati ritme alami tubuh Anda. Jadikan secangkir kopi sebagai kawan penyemangat di waktu yang tepat, bukan tongkat penopang paksa yang menutupi kelelahan seluler kronis.`
  },
  {
    title: "Kematian Toko Kaset dan CD Fisik di Era Digital: Mengapa Keintiman Berburu Rilisan Tak Tergantikan Algoritma",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Rilisan Fisik", "Kaset", "CD", "Toko Musik", "Budaya Urban"],
    imageUrl: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Tumpukan kaset audio klasik dan pemutar musik pita di sudut ruangan studio",
    excerpt: "Menyusuri lorong sempit toko kaset independen dan mengamati sampul album fisik adalah ritual sensorik yang membentuk apresiasi budaya. Di hadapan kepraktisan dingin tombol streaming, perjumpaan tak terduga dengan musisi baru kini lenyap tak berbekas.",
    content: `Bagi siapa pun yang pernah menghabiskan akhir pekan di toko kaset atau cakram padat independen era 1990-an dan awal 2000-an, suasananya selalu membekas kuat di ingatan. Aroma khas kertas sampul booklet baru yang bercampur bau pita magnetik, bunyi derik kotak mika kaset yang digeser di rak kayu, serta obrolan santai bersama pemilik toko yang merekomendasikan demo kaset band underground lokal yang baru dititipkan kemarin sore.

Di era aplikasi streaming dengan katalog seratus juta lagu di genggaman tangan, toko-toko rilisan fisik tersebut telah digusur dari peta kota modern. Kita memang mendapatkan kemudahan akses instan yang tak terbayangkan sebelumnya: cukup mengetikkan sepenggal lirik atau judul lagu di kolom pencarian, dan musik langsung mengalun tanpa biaya kaset sepeser pun. Namun kepraktisan tanpa gesekan tersebut harus dibayar dengan hilangnya sebuah dimensi budaya yang sangat sakral: keintiman berburu karya seni.

## Pelenyapan Sentuhan Sensorik dan Ritual Mendengarkan

Perpindahan mutlak ke ranah digital mengubah hubungan emosional antara pendengar dengan karya musik:

* **Kepunahan Pengalaman Serendipitas Nyata**: Di toko kaset fisik, seseorang sering kali membeli sebuah album bukan karena rekomendasi algoritma periklanan, melainkan karena terpikat oleh ilustrasi sampul yang misterius atau ucapan terima kasih musisi di lembar lirik. Perjumpaan tak sengaja yang organik ini melatih keberanian telinga untuk menerima spektrum suara yang sama sekali baru.
* **Degradasi Musik Menjadi File Nirwujud**: Memegang keping CD fisik, membaca lirik lagu kata demi kata, dan mempelajari nama teknisi mixing di lembar kredit menciptakan ikatan penghargaan mendalam terhadap proses kreasi musisi. Ketika musik direduksi menjadi deretan bita tak kasatmata di aplikasi ponsel, ia kehilangan bobot fisiknya dan dengan mudah dihapus begitu saja dari memori ingatan.
* **Erosi Ruang Temu Komunitas Subkultur**: Toko musik bukan sekadar tempat transaksi jual beli barang niaga, melainkan suaka berkumpul bagi anak-anak muda yang mencari kawan sefrekuensi pemikiran. Matinya ruang-ruang fisik ini membuyarkan jaringan kolektif independen yang menjadi rahim kelahiran gerakan budaya tanding di kota-kota besar.

## Merawat Memori Fisik di Tengah Arus Virtual

Untungnya, secercah perlawanan kultural mulai tumbuh kembali melalui gerakan pecinta piringan hitam dan rilisan kaset pita mandiri. Semakin banyak generasi muda yang mulai menyadari bahwa pengalaman mendengarkan musik yang utuh membutuhkan komitmen waktu, sentuhan fisik, dan kesabaran menikmati setiap detik putaran lagu dari awal hingga akhir.

Kaset pita dan cakram padat mungkin bukan format audio paling efisien di dunia komputasi awan. Namun mereka adalah artefak peradaban berharga yang menyimpan detak jantung manusia—sebuah pengingat bahwa seni musik terlalu bernilai untuk sekadar dijadikan deretan angka biner di peladen korporasi.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 07:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 07:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-0700.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
