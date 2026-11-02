import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Krisis Daya Komputasi dan Kelangkaan Air: Biaya Tersembunyi di Balik Dinginnya Ruang Server AI",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Kecerdasan Buatan", "Pusat Data", "Lingkungan", "Server", "Krisis Iklim"],
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kompleks pusat data modern dengan sistem pipa pendingin industri di bawah langit biru",
    excerpt: "Di balik antarmuka chatbot yang tampak mulus dan nirwujud, ribuan chip pemroses grafis membakar daya listrik skala raksasa dan menyedot jutaan liter air tawar setiap hari demi menjaga suhu ruangan server tetap dingin.",
    content: `Kecerdasan buatan kerap dipromosikan sebagai teknologi nirwujud yang melayang bebas di atas awan komputasi. Kita mengetikkan perintah pada aplikasi obrolan, dan dalam hitungan detik deretan paragraf cerdas tersaji di layar ponsel tanpa ada asap knalpot atau limbah padat yang kasatmata. Ilusi dematerialisasi ini meninabobokan publik dari kenyataan ekologis yang suram.

Pada kenyataannya, pelatihan dan pengoperasian model bahasa besar (*Large Language Models*) adalah industri ekstraktif yang rakus sumber daya fisik. Untuk mencegah puluhan ribu unit prosesor grafis (*GPU*) meleleh akibat beban kerja komputasi ekstrem, operator pusat data raksasa menyedot miliaran liter air tawar bersih dari akuifer bawah tanah demi mengalirkan sistem menara pendingin evaporatif.

## Penjarahan Air Bersih Komunitas Lokal

Dampak lingkungan dari perlombaan komputasi global ini kini mulai dirasakan langsung oleh masyarakat yang tinggal di sekitar klaster server:

* **Persaingan dengan Irigasi Pertanian**: Di wilayah agraris yang mengalami kekeringan berkepanjangan, fasilitas pusat data menyedot jutaan liter air minum harian, memicu penurunan drastis permukaan air sumur warga dan mengancam keberlangsungan panen petani lokal.
* **Beban Jaringan Listrik yang Mencekik**: Kebutuhan listrik sebuah fasilitas komputasi generasi baru setara dengan konsumsi daya kota berpenduduk puluhan ribu jiwa. Peningkatan konsumsi daya ini memaksa aktivasi kembali pembangkit listrik bahan bakar fosil tua demi menjamin stabilitas arus komputasi tanpa jeda.
* **Ketertutupan Data Korporasi**: Raksasa teknologi multinasional kerap merahasiakan angka konsumsi air dan jejak karbon riil per kueri pencarian, berlindung di balik klaim hak kekayaan intelektual dan komitmen pemasaran ramah lingkungan yang manipulatif (*greenwashing*).

## Menuntut Akuntabilitas Ekologis Industri Komputasi

Masyarakat sipil dan pembuat kebijakan harus berhenti memandang teknologi pintar sebagai inovasi tanpa konsekuensi fisik. Penggunaan air tawar publik untuk mendinginkan server komersial wajib dikenai pajak konservasi lingkungan yang ketat serta pembatasan kuota musiman.

Kemajuan kecerdasan komputasi tidak boleh dibangun di atas kekeringan sumur-sumur warga dan perusakan ekosistem air tawar bumi.`
  },
  {
    title: "Invasi Anti-Cheat Level Kernel: Ketika Game Online Menuntut Akses Terdalam Sistem Komputer Anda",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Keamanan Siber", "Anti-Cheat", "PC Gaming", "Privasi", "Gamer"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Komponen internal papan induk komputer gaming dengan pencahayaan sirkuit presisi",
    excerpt: "Demi membasmi pemain curang, pengembang game kompetitif kini menuntut izin instalasi driver Ring 0 yang berjalan sebelum Windows memuat. Hak istimewa ini membuka celah keamanan berbahaya bagi seluruh sistem.",
    content: `Bagi pemain game tembak-menembak kompetitif daring, kehadiran pemain curang (*cheaters*) yang menggunakan bidikan otomatis (*aimbot*) atau penglihatan tembus dinding (*wallhack*) adalah momok yang merusak keasyikan bermain. Kekecewaan komunitas gamer mendorong pengembang mencari cara paling ampuh untuk memberantas manipulasi memori permainan.

Namun solusi yang dihadirkan industri beberapa tahun belakangan telah melangkah terlalu jauh ke dalam wilayah yang membahayakan kedaulatan perangkat pribadi. Melalui perangkat lunak *anti-cheat* tingkat kernel (*Ring 0*), pengembang game kini menuntut hak istimewa paling mendasar dalam hierarki arsitektur sistem operasi—hak akses yang bahkan melampaui izin administrator sistem pengguna itu sendiri.

## Risiko Keamanan dari Hak Istimewa Tertinggi

Menyerahkan kendali tingkat kernel kepada aplikasi hiburan komersial membawa implikasi keamanan siber yang sangat berisiko:

* **Membuka Pintu Belakang Sistem (*Rootkit Attack Vector*)**: Driver kernel game berjalan sejak komputer pertama kali dinyalakan, bahkan sebelum pengguna membuka permainan. Jika driver ini memiliki celah kerentanan peranti lunak, peretas jahat dapat memanfaatkannya untuk mengeksekusi kode berbahaya dengan hak akses absolut tanpa terdeteksi program antivirus biasa.
* **Ancaman Ketidakstabilan Perangkat Keras**: Kesalahan kecil pada baris kode driver kernel dapat langsung memicu kegagalan sistem fatal berupa layar biru (*Blue Screen of Death*) atau benturan kompatibilitas dengan driver perangkat keras penting lainnya.
* **Pengawasan Memori yang Melanggar Batas**: Karena memiliki visibilitas ke seluruh lapisan memori RAM, perangkat anti-cheat kernel secara teknis mampu memindai dokumen pribadi, peramban web, dan proses kerja latar belakang pengguna tanpa transparansi audit pihak ketiga yang independen.

## Menolak Kompromi Keamanan demi Game

Pemberantasan kecurangan dalam game adalah tujuan yang sah, namun tidak boleh dicapai dengan mengebiri keamanan fundamental sistem operasi jutaan pengguna. Pendekatan deteksi perilaku berbasis server (*server-side analytics*) dan teknologi mitigasi perangkat keras tersertifikasi jauh lebih aman dibanding menanamkan driver invasif pada setiap komputer pribadi.

Gamer harus mulai menyadari bahwa integritas sistem komputer dan privasi data pribadi memiliki nilai yang jauh lebih tinggi daripada sekadar kenaikan peringkat musiman di dalam game kompetitif.`
  },
  {
    title: "Sindrom Tech Neck dan Degenerasi Postur: Mengapa Kebiasaan Menunduk Menghancurkan Tulang Leher",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Ergonomi", "Postur", "Tulang Belakang", "Smartphone", "Gaya Hidup"],
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang merelaksasikan otot leher dan bahu dalam pose peregangan yoga yang teratur",
    excerpt: "Menundukkan kepala enam puluh derajat untuk menatap layar ponsel membebani tulang leher setara menahan beban dua puluh tujuh kilogram. Tekanan konstan ini memicu pengapuran dini dan sakit kepala kronis.",
    content: `Perhatikan posisi duduk rekan kerja Anda di kantor atau sesama penumpang di dalam gerbong kereta. Mayoritas dari mereka duduk dengan punggung membungkuk, bahu merosot ke depan, dan kepala tertunduk tajam menatap layar smartphone di telapak tangan. Pemandangan ini telah menjadi gestur tubuh paling lazim dari manusia abad ke-21.

Secara biomekanis, kepala orang dewasa memiliki bobot alami sekitar empat hingga lima kilogram saat berada dalam posisi tegak lurus seimbang. Namun hukum fisika tuas berlaku tanpa ampun: setiap kali sudut leher condong ke depan sebesar lima belas derajat, beban kompresi pada bantalan tulang leher servikal meningkat berlipat ganda. Pada kemiringan enam puluh derajat—posisi standar saat membaca pesan teks—beban yang harus ditopang oleh ligamen dan otot leher melonjak drastis hingga mencapai dua puluh tujuh kilogram.

## Efek Domino Kerusakan Muskuloskeletal

Beban struktural yang abnormal ini memicu rentetan gangguan fisik yang dikenal dalam dunia ortopedi sebagai sindrom *tech neck*:

* **Kram Otot Trapesius dan Sakit Kepala Servikogenik**: Ketegangan konstan membuat otot-otot di pangkal tengkorak memendek dan meradang. Spasme otot ini menekan serabut saraf kranial, menimbulkan serangan sakit kepala tegang yang sering disalahartikan sebagai migrain biasa.
* **Perataan Kurva Alami Tulang Belakang**: Kurvatura lordosis alami leher perlahan melurus akibat tarikan kronis. Kondisi ini mempercepat degenerasi cakram sendi (*herniated disc*), memicu penonjolan bantalan yang dapat menekan saraf tulang belakang dan menjalar menjadi mati rasa pada jemari tangan.
* **Penyempitan Ruang Paru dan Kelelahan Oksigen**: Postur membungkuk menekan rongga dada, membatasi ekspansi diafragma hingga tiga puluh persen. Akibatnya, pernapasan menjadi dangkal dan suplai oksigen ke jaringan otak menurun, memperparah rasa letih di sore hari.

## Langkah Sederhana Mengembalikan Kelurusan Postur

Memperbaiki postur tubuh tidak menuntut Anda membuang perangkat elektronik kerja, melainkan membiasakan disiplin spasial yang ergonomis:

1. **Prinsip Mengangkat Layar Sejajar Mata**: Biasakan mengangkat ponsel sejajar dengan mata alih-alih menurunkan leher. Di meja kerja, gunakan dudukan laptop (*stand*) dan papan ketik eksternal agar sudut pandang tetap horizontal.
2. **Peregangan Retraksi Dagu (*Chin Tucks*)**: Setiap satu jam sekali, tarik dagu ke arah dalam secara perlahan seperti membentuk dagu ganda, tahan selama lima detik, dan ulangi sepuluh kali untuk memperkuat otot fleksor leher bagian dalam.
3. **Membuka Rongga Bahu**: Lakukan gerakan memutar bahu ke belakang dan merentangkan kedua lengan ke samping untuk melepaskan ketegangan otot pektoralis dada yang kaku.

Tulang belakang adalah tiang penyangga utama kehidupan fisik Anda. Lindungi kelengkungannya dari tarikan gravitasi layar gadget sebelum kerusakan struktural menuntut intervensi meja operasi.`
  },
  {
    title: "Musim Gugur Panggung Musik Independen: Mengapa Ruang Komunitas Tergusur Gentrifikasi Kota",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Indie", "Komunitas", "Budaya Urban", "Live Music", "Kolektif"],
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Sorotan lampu panggung konser musik menyinari vokalis dan instrumen band di ruang pertunjukan",
    excerpt: "Klub musik independen dan ruang kolektif bawah tanah yang menjadi kawah candradimuka musisi muda satu per satu gulung tikar. Gentrifikasi kota menyingkirkan ruang ekspresi mentah demi kafe waralaba steril.",
    content: `Hampir semua band legendaris dan musisi besar yang kita kagumi hari ini memulai langkah pertama mereka bukan dari panggung festival raksasa berpenonton puluhan ribu orang, melainkan dari sudut sempit ruang pertunjukan bawah tanah yang pengap. Di ruang-ruang kolektif independen berdinding akustik seadanya inilah, karya-karya mentah diuji, gesekan distorsi dieksplorasi, dan ikatan organik antara seniman dengan penonton sejati ditempa.

Sayangnya, ruang-ruang hidup tempat tumbuhnya subkultur musik tersebut kini sedang dihancurkan secara masif di berbagai kota besar Indonesia. Gelombang gentrifikasi urban tanpa kendali, kenaikan tarif sewa properti komersial yang ugal-ugalan, dan keluhan kebisingan dari penghuni perumahan baru membuat pemilik panggung independen tak sanggup lagi bertahan. Panggung-panggung penuh kenangan itu diratakan dengan tanah, berganti wujud menjadi kedai kopi waralaba steril atau minimarket berjaringan.

## Kehilangan Ekosistem Uji Nyali Fisik

Kepunahan ruang pertunjukan fisik kelas akar rumput membawa dampak destruktif bagi regenerasi musik nasional:

* **Sterilisasi Karakter Artistik Musisi Pemula**: Tanpa panggung fisik untuk melakukan eksperimen yang berani berantakan, musisi pendatang baru terpaksa bergantung seratus persen pada algoritma video media sosial. Musik yang diproduksi pun bergeser menjadi produk yang dirancang manis agar ramah algoritma ponsel, kehilangan daya letup anarki dan keaslian ekspresi jalanan.
* **Hilangnya Ruang Bertemu Lintas Generasi**: Ruang kolektif musik berfungsi sebagai ruang publik ketiga (*third place*) tempat bertemunya penulis zine, ilustrator sampul album, pengelola label rekaman mikro, dan komunitas penikmat seni alternatif. Ketika tempat ini lenyap, jejaring solidaritas ekonomi kreatif independen ikut tercerai-berai.
* **Monopoli Festival Korporasi**: Industri musik langsung ditarik ke dalam dominasi festival komersial bermodal konglomerat yang hanya menampilkan nama-nama aman yang sudah populer, menutup pintu bagi talenta baru yang belum memiliki jutaan pengikut di dunia maya.

## Menjaga Bara Ruang Pertunjukan Mandiri

Sebuah kota yang hidup dan berbudaya tidak diukur dari seberapa banyak gedung perkantoran kaca yang menjulang, melainkan dari ketersediaan ruang bagi warganya untuk berekspresi dan merayakan kesenian tanpa kompromi pasar.

Dukungan nyata dari penikmat musik—dengan membeli tiket pertunjukan lokal, mengoleksi cenderamata fisik langsung dari meja lapak musisi, dan memperjuangkan ruang publik bagi komunitas—adalah benteng pertahanan terakhir agar denyut musik independen tidak padam ditelan beton modernisasi.`
  }
];

async function main() {
  console.log("=== MEMULAI BATCH AUTO-PUBLISH TUJUHCAHAYA (JADWAL TIAP 1 JAM / 23:00 WIB) ===");
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

  console.log("\n=== SELURUH BATCH 23:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-2300.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
