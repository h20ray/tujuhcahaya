import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Obsesi Fast Charging 120W di Ponsel Pintar: Mengapa Baterai Membayar Mahal Kecepatan Pengisian yang Berlebihan",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Smartphone", "Baterai", "Fast Charging", "Hardware", "Degradasi"],
    imageUrl: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kabel pengisi daya ponsel terhubung ke smartphone di atas meja kerja kayu",
    excerpt: "Mengisi baterai penuh dalam lima belas menit dipromosikan sebagai lompatan revolusioner ponsel modern. Namun arus listrik raksasa dan suhu panas ekstrem mempercepat pembusukan sel litium dan memperpendek usia gadget secara prematur.",
    content: `Dalam materi promosi peluncuran smartphone belakangan ini, angka watt pengisian daya telah menjadi ajang pamer otot teknologi paling mencolok. Kotak kemasan dihiasi angka seratus dua puluh watt atau bahkan dua ratus watt, lengkap dengan video demonstrasi dramatis yang memperlihatkan persentase baterai merangkak naik secepat jarum stopwatch—menjanjikan pengisian daya dari nol hingga penuh hanya dalam tempo lima belas menit.

Bagi pengguna dengan mobilitas tinggi, janji waktu pengisian instan tersebut memang terdengar seperti mukjizat kepraktisan. Namun hukum kimia elektrokimia baterai tidak pernah bisa ditipu oleh teknik pemasaran. Memaksa arus listrik berkekuatan raksasa masuk ke dalam sel baterai litium-ion tipis di ruang ponsel yang sempit adalah resep pasti menuju penurunan kesehatan baterai secara drastis dalam jangka pendek.

## Ancaman Panas Ekstrem dan Pembentukan Dendrit

Dua musuh bebuyutan baterai litium adalah suhu tinggi dan arus pengisian yang terlalu agresif:

* **Stres Termal yang Memasak Struktur Katoda**: Pengisian daya di atas seratus watt menghasilkan lonjakan panas internal yang sering kali menembus empat puluh lima derajat Celsius. Paparan panas konstan ini merusak lapisan elektrolit padat (*SEI layer*), mengikis kapasitas simpan energi secara permanen sebelum masa pakai mencapai delapan ratus siklus.
* **Risiko Pertumbuhan Kristal Dendrit Litium**: Arus listrik tinggi yang dipaksakan membuat ion litium mengendap terlalu cepat di permukaan anoda alih-alih meresap rapi ke dalam kisi grafit. Pengendapan tidak rata ini memicu pembentukan kristal jarum mikro (*dendrites*) yang dapat menembus separator dan menimbulkan risiko korsleting internal.
* **Biaya Penggantian Adaptor dan Kabel Khusus**: Protokol pengisian daya ultra-cepat umumnya bersifat kepemilikan privat (*proprietary*). Jika kepala charger atau kabel tebal bawaan pabrik hilang, pengguna dipaksa membeli aksesori pengganti berharga mahal karena charger USB Power Delivery standar tidak sanggup memicu kecepatan pengisian puncak tersebut.

## Menemukan Keseimbangan Antara Kecepatan dan Ketahanan

Pengisian daya cepat idealnya diperlakukan sebagai fitur darurat saat terdesak waktu, bukan metode pengecasan harian standar. Pengisian dengan daya moderat tiga puluh hingga empat puluh lima watt jauh lebih ramah terhadap struktur molekul baterai dan menjamin ponsel dapat bertahan prima selama tiga hingga empat tahun tanpa memerlukan servis penggantian baterai.

Konsumen yang bijak semestinya lebih menghargai baterai yang awet bertahun-tahun daripada sekadar sensasi lima belas menit di depan colokan listrik dinding.`
  },
  {
    title: "Kematian Fitur Simpan Game Manual: Ketika Checkpoint Otomatis Merampas Kebebasan Bereksperimen Pemain",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Desain Game", "Save Game", "Checkpoint", "Gamer", "Eksperimen"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Dua pengontrol konsol permainan video tergeletak berdampingan di atas meja kayu",
    excerpt: "Fitur simpan progres manual di berbagai slot penyimpanan kini disingkirkan oleh sistem checkpoint otomatis tunggal. Keputusan desain ini merampas kebebasan pemain untuk bereksperimen dengan rute cerita bercabang.",
    content: `Ingatkah Anda saat bermain game peran (*RPG*) klasik dan membuka menu penyimpanan untuk melihat deretan dua puluh slot penyimpanan manual (*manual save slots*) yang tersusun rapi? Setiap slot diberi label nama bab, level karakter, dan cap waktu yang jelas. Pemain memiliki kedaulatan mutlak untuk menyimpan permainan tepat sebelum membuka pintu ruang bos yang mencurigakan, mencoba dialog moral berisiko, atau sekadar mengamankan rute eksplorasi alternatif.

Kini, tradisi kebebasan kendali arsip tersebut telah digusur oleh sistem titik periksa otomatis (*auto-checkpoint*) dengan satu slot simpan tunggal. Di banyak game aksi petualangan modern, menu penyimpanan manual sengaja dihilangkan. Layar hanya sesekali menampilkan ikon lingkaran berputar kecil di sudut kanan bawah untuk menandakan bahwa sistem baru saja menimpa data permainan Anda tanpa meminta konfirmasi terlebih dahulu.

## Penyeragaman Alur dan Frustrasi Siklus Buntu

Penghapusan opsi penyimpanan manual menciptakan kompromi desain yang membatasi imajinasi pemain:

* **Hukuman Terhadap Eksperimen Berani**: Dalam game bergenre naratif bercabang, pemain enggan memilih opsi dialog yang radikal atau mencoba taktik pertempuran nyeleneh karena takut sistem otomatis akan langsung menimpa data progres mereka. Ketakutan akan konsekuensi permanen yang tidak bisa dibatalkan ini memaksa pemain memilih rute bermain yang aman dan membosankan.
* **Perangkap Siklus Spawn Rusak (*Deadly Save Loops*)**: Ketika sistem checkpoint otomatis menyimpan progres tepat satu detik sebelum proyektil musuh menghantam karakter atau saat darah karakter tersisa satu persen di tengah kobaran api, pemain terjebak dalam siklus kematian tanpa akhir. Tanpa adanya slot simpan lama untuk kembali, satu-satunya jalan keluar adalah mengulang seluruh bab permainan dari awal.
* **Ketidakpastian Waktu Berhenti Bermain**: Di era kesibukan orang dewasa, seseorang sering kali harus mematikan konsol secara mendadak untuk urusan keluarga atau pekerjaan. Ketiadaan tombol simpan manual memaksa pemain terus bermain mencari titik checkpoint berikutnya atau pasrah kehilangan progres bermain selama setengah jam terakhir.

## Mengembalikan Kedaulatan Waktu ke Tangan Pemain

Mekanisme penyimpanan permainan bukan sekadar urusan teknis baris kode basis data, melainkan kontrak kepercayaan antara perancang game dengan waktu hidup pemainnya. Menyediakan slot penyimpanan manual tanpa batas adalah bentuk penghormatan paling mendasar terhadap kenyamanan dan gaya bermain masing-masing individu.

Pengembang game harus berhenti memaksakan arsitektur penyimpanan tunggal yang kaku. Berikan kembali hak pemain untuk menyimpan progres mereka kapan pun dan di mana pun mereka inginkan.`
  },
  {
    title: "Bahaya Mengabaikan Otot Mata di Depan Monitor: Mengapa Aturan 20-20-20 Menyelamatkan Akomodasi Lensa",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Kesehatan Mata", "Ergonomi", "Mata Kering", "Gaya Hidup", "Monitor"],
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang dalam pose relaksasi dan peregangan tubuh teratur",
    excerpt: "Menatap layar monitor kerja selama delapan jam tanpa jeda membekukan otot siliaris mata pada titik fokus jarak dekat. Kebiasaan ini memicu spasme akomodasi, sindrom mata kering kronis, dan mempercepat penurunan ketajaman penglihatan.",
    content: `Setiap sore hari menjelang jam pulang kantor, keluhan fisik yang dirasakan para pekerja profesional perkotaan hampir selalu sama: bola mata terasa panas berpasir, pandangan mulai mengabur saat menatap rambu jalan raya, dan rasa nyeri berdenyut menjalar di area sekitar alis dan pelipis. Sebagian besar orang menganggap gejala ini sekadar kelelahan biasa yang akan hilang setelah tidur malam.

Namun dari perspektif oftalmologi dan ergonomi visual, keluhan tersebut adalah tanda klinis dari sindrom penglihatan komputer (*Computer Vision Syndrome*). Di era modern di mana hampir seluruh aktivitas kerja, belajar, dan hiburan berlangsung di balik panel piksel berjarak lima puluh sentimeter dari wajah, mata manusia dipaksa bekerja di luar batas desain biologis evolusionernya.

## Pembekuan Otot Siliaris dan Kematian Kedipan Alami

Mata manusia berevolusi untuk memindai lanskap alam terbuka dengan kedalaman pandang yang dinamis, bukan mengunci fokus statis pada satu bidang datar:

* **Spasme Akomodasi Otot Siliaris**: Agar dapat melihat objek jarak dekat seperti layar laptop dengan tajam, otot siliaris di dalam bola mata harus berkontraksi kencang untuk mencembungkan lensa mata. Mengunci kontraksi otot ini selama delapan jam berturut-turut menyebabkan kram otot mata (*ciliary spasm*), membuat lensa sulit kembali rileks saat Anda mencoba melihat objek jarak jauh.
* **Anjloknya Frekuensi Kedipan dan Sindrom Mata Kering**: Secara alami, manusia berkedip sekitar lima belas hingga dua puluh kali per menit untuk meratakan lapisan air mata pelindung kornea. Saat mata terpaku pada layar monitor yang memancarkan cahaya, frekuensi berkedip merosot drastis hingga hanya lima kali per menit, menyebabkan kornea terhidrasi buruk dan meradang.
* **Efek Refleksi Silau dan Kontras Cahaya Berlebih**: Bekerja di ruangan dengan pencahayaan ruangan yang tidak seimbang dengan tingkat kecerahan monitor memaksa pupil mata terus-menerus menyesuaikan ukuran bukaan, menguras stamina saraf optik secara berlebihan.

## Menerapkan Disiplin Istirahat Visual Dua Puluh Detik

Menjaga kesehatan indra penglihatan tidak menuntut Anda membuang komputer kerja, melainkan menerapkan disiplin relaksasi optik yang teratur:

1. **Prinsip Universal 20-20-20**: Setiap dua puluh menit menatap layar monitor, alihkan pandangan mata ke objek yang berjarak minimal dua puluh kaki (sekitar enam meter) selama dua puluh detik. Jeda singkat ini memberi waktu bagi otot siliaris untuk rileks sempurna.
2. **Latihan Berkedip Sadar (*Conscious Blinking*)**: Tempelkan pengingat kecil di sudut bezel layar untuk mengingatkan diri berkedip penuh secara sengaja demi membasahi permukaan kornea.
3. **Sejajarkan Posisi Bagian Atas Layar dengan Mata**: Atur ketinggian dudukan monitor agar bagian atas layar sejajar dengan garis horizontal mata, sehingga kelopak mata menutup sebagian dan mengurangi area penguapan air mata.

Penglihatan yang jernih adalah anugerah biologis tak ternilai yang menopang seluruh kualitas hidup Anda. Beri mata Anda hak untuk beristirahat di sela-sela padatnya rutinitas kerja digital.`
  },
  {
    title: "Monokultur Snare Trap Berulang: Ketika Eksplorasi Ketukan Drum Ditelan Preset Digital yang Seragam",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Produksi Musik", "Drum", "Trap Beats", "Sample Packs", "Kreativitas"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Mikrofon studio rekaman profesional dengan panel akustik di ruang rekaman musik",
    excerpt: "Mulai dari lagu pop arus utama, R&B, hingga musik dansa elektronik, ketukan drum kini seragam menggunakan preset snare trap dan hi-hat roll digital yang sama. Ketergantungan buta pada paket sampel instan mematikan dinamika ritmis musisi.",
    content: `Dengarkan kembali karya-karya musik rekaman dari era 1970-an hingga 1990-an di berbagai penjuru dunia: ada karakter dentuman snare bergaung tebal dari John Bonham di panggung rock, ayunan ritme funk lentur dari Clyde Stubblefield yang menggetarkan pinggul, hingga gesekan kuas simbal jazz yang sarat dinamika sentuhan tangan manusia. Ketukan drum (*drumming*) bukan sekadar metronom penentu tempo, melainkan fondasi emosional yang memberi denyut nadi unik pada setiap lagu.

Bandingkan kekayaan tekstur ritmis tersebut dengan gelombang lagu-lagu populer yang mendominasi tangga lagu digital hari ini. Dari intro hingga outro, hampir semua genre—entah itu pop remaja, balada perkotaan, hingga musik hip-hop komersial—menggunakan cetak biru ketukan drum yang sama persis: gulungan simbal berkecepatan tinggi (*hi-hat rolls*) dengan bunyi tipis sintetis, disusul dentuman nada bass 808 yang monoton, dan pukulan snare trap bernada cempreng yang dipotong tajam tanpa ekor resonansi alami.

## Kemunduran Kreativitas di Jalur Perakitan Sampel Instan

Standardisasi pola ritmis yang membosankan ini lahir dari ketergantungan industri rekaman pada paket suara pabrikan:

* **Dominasi Paket Sampel Massal (*Sample Packs Dependency*)**: Produser musik kamar tidur maupun studio komersial kini terbiasa mengunduh pustaka sampel digital siap pakai dari penyedia daring. Alih-alih merancang tekstur suara sendiri atau merekam pemain drum fisik di ruangan berakustik bagus, mereka sekadar menyeret preset ketukan drum yang sudah dipakai oleh ribuan produser lain di seluruh dunia.
* **Pelenyapan Dinamika Kecepatan Pukulan (*Velocity Flattening*)**: Drummer manusia tidak pernah memukul membran drum dengan kekuatan yang sama persis di setiap birama; fluktuasi mikro pada tenaga pukulan inilah yang melahirkan rasa ayunan (*groove*) yang hidup. Di stasiun kerja audio digital (*DAW*), produser malas sering mengunci nilai kekuatan pukulan (*velocity*) pada angka maksimal seratus dua puluh tujuh, menghasilkan bunyi ketukan robotik yang dingin dan kaku.
* **Penyempitan Ruang Eksplorasi Genre**: Karakteristik ritme lokal yang kaya—seperti sinkopasi perkusi tradisional Nusantara atau poliritme Afrika—dipinggirkan dari industri arus utama karena dianggap tidak ramah terhadap formula algoritma streaming yang menghendaki tempo seragam seratus tiga puluh ketukan per menit.

## Menghidupkan Kembali Denyut Ritmis yang Bernyawa

Ketukan drum adalah detak jantung kebudayaan manusia sejak masa purba. Ia hadir untuk memantik getaran tubuh, mengajak orang menari dengan lepas, dan menyampaikan ketegangan dramatis sebuah komposisi seni.

Para produser musik independen harus berani memutus rantai ketergantungan pada preset instan tersebut. Matikan kisi kuantisasi otomatis, ajak kembali pemain instrumen perkusi asli ke dalam studio rekaman, dan biarkan ketukan drum berbicara dengan kejujuran dinamika yang membebaskan telinga pendengar.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 11:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 11:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-1100.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
