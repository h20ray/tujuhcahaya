import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Obsesi Laptop Ultrathin dan Matinya Manajemen Termal: Mengapa Performa Cip Tercekik demi Ketebalan Milimeter",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Hardware", "Laptop", "Komputasi", "Thermal Throttling", "Cip Prosesor"],
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Laptop ramping modern dengan sasis aluminium terbuka di atas meja kerja minimalis",
    excerpt: "Pabrikan laptop berlomba menipiskan sasis hingga ketebalan beberapa milimeter, mengorbankan ruang kipas pendingin dan heatpipe tembaga. Akibatnya, cip prosesor mahal mengalami thermal throttling parah dalam sepuluh menit pertama kerja berat.",
    content: `Dalam setiap panggung peluncuran perangkat keras komputer jinjing, angka ketebalan sasis selalu dipamerkan dengan sorak-sorai paling meriah. Tim pemasaran dengan bangga membandingkan profil samping laptop mereka dengan ketebalan koin logam atau pensil kayu, mengklaim bahwa keanggunan portabilitas adalah puncak kemajuan rekayasa modern. Namun di balik kilau sasis aluminium tipis tersebut, tersimpan kompromi termal yang menipu ekspektasi performa pembeli.

Hukum termodinamika tidak dapat dimanipulasi oleh brosur promosi. Ketika cip prosesor mutakhir dipaksa menelan daya puluhan watt di dalam ruang tertutup setebal beberapa milimeter tanpa aliran udara yang memadai, panas ekstrem seketika menumpuk di atas inti silikon. Alih-alih memberikan performa konstan yang dibayar mahal oleh pengguna, unit pengendali daya laptop terpaksa mencekik frekuensi kerja (*thermal throttling*) hingga separuh kapasitas demi mencegah papan sirkuit meleleh.

## Jebakan Performa Puncak Semu

Praktik menomorsatukan estetika fisik di atas fungsi pendinginan memicu deretan masalah nyata bagi pengguna profesional:

* **Manipulasi Angka Tolok Ukur (*Benchmark*)**: Laptop ultrathin sering kali mencatatkan skor tinggi dalam uji beban singkat berdurasi tiga puluh detik karena sensor suhu belum mencapai ambang batas kritis. Namun ketika dihadapkan pada rendering video panjang atau simulasi kode komputasi, performa anjlok drastis hingga lebih lambat daripada laptop generasi lama yang memiliki sistem ventilasi tebal.
* **Degenerasi Dini Komponen Elektronik**: Siklus panas ekstrem yang berulang secara harian mempercepat degradasi kapasitor, memperpendek usia pakai baterai litium yang terhimpit di dekat papan pendingin, dan membuat keyboard terasa panas membakar jemari saat mengetik.
* **Kebisingan Kipas Berfrekuensi Tinggi**: Demi mengimbangi volume udara yang sempit, produsen memasang kipas miniatur berkecepatan putar sangat tinggi. Hasilnya adalah dengungan melengking tajam yang mengganggu konsentrasi di ruang kerja sunyi.

## Mengembalikan Kehormatan Rekayasa Fungsional

Sebuah komputer kerja semestinya dinilai dari kemampuannya mempertahankan performa stabil selama berjam-jam, bukan dari seberapa tipis ia terlihat saat diselipkan ke dalam tas tangan. Pengguna profesional berhak mendapatkan perangkat yang dirancang untuk bekerja keras, dengan ruang sirkulasi udara yang cukup dan kemudahan membuka panel bawah untuk membersihkan debu kipas secara berkala.

Sudah waktunya industri berhenti mengorbankan utilitas komputasi demi mengejar obsesi milimeter yang hampa.`
  },
  {
    title: "Ilusi Peta Terbuka 100 Jam: Mengapa Dunia Game Raksasa Modern Terasa Begitu Hampa dan Melelahkan",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Open World", "Desain Game", "Industri Game", "Gamer", "Eksplorasi"],
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pemandangan pegunungan luas berkabut yang menyerupai hamparan lanskap petualangan dunia game",
    excerpt: "Luas peta ratusan kilometer persegi dan janji ratusan jam eksplorasi kini menjadi standar pemasaran game petualangan modern. Namun di balik skala geografis raksasa itu, pemain hanya disuguhi hamparan tugas administratif repetitif yang mematikan rasa takjub petualangan sejati.",
    content: `Di era kejayaan konsol generasi lawas, menemukan ruang tersembunyi di balik air terjun atau mengendus gua rahasia di lereng bukit memicu ledakan kepuasan yang murni. Tidak ada penanda kompas yang berkedip, tidak ada daftar periksa inventaris yang membosankan—hanya rasa penasaran alami manusia yang memandu langkah karakter menjelajahi dunia fiksi yang hidup.

Kini, keajaiban petualangan organik tersebut telah terkubur di bawah tumpukan ratusan ikon peta (*map markers*) yang seragam. Penerbit game raksasa bersaing menggembar-gemborkan luas peta ratusan kilometer persegi dan janji konten hingga seratus jam permainan demi membenarkan banderol harga rilis yang kian melambung. Namun begitu pemain menjejakkan kaki di dunia tersebut, mereka segera menyadari bahwa skala geografis raksasa itu hanyalah hamparan tanah kosong yang disalin-rekat tanpa jiwa naratif.

## Pabrikasi Tugas Administratif di Ruang Virtual

Formula dunia terbuka modern telah tereduksi menjadi serangkaian rutinitas mekanis yang mengikis kenikmatan bermain:

* **Sindrom Daftar Belanjaan (*Checklist Gaming*)**: Menara pengawas yang harus dipanjat untuk membuka kabut peta, kamp bandit dengan pola musuh identik, serta peti harta karun berisi material kerajinan sepele tersebar di setiap sudut. Pemain tidak lagi menjelajah dengan rasa ingin tahu, melainkan bekerja lembur mencentang daftar tugas demi membersihkan ikon dari layar radar.
* **Kematian Desain Lingkungan yang Bermakna**: Ketika lanskap dirancang terlalu luas secara artifisial, setiap jengkal ruang kehilangan kepadatan kontekstualnya. Bangunan-bangunan bersejarah berdiri sebagai dekorasi mati yang tidak bisa dimasuki, sementara karakter non-pemain (*NPC*) berbaris kaku tanpa jadwal hidup yang realistis.
* **Peregangan Durasi Demi Metrik Keterlibatan**: Narasi utama yang semestinya padat dan berbobot dalam tempo dua puluh jam sengaja diencerkan dengan rintangan tingkat karakter (*level gating*) yang memaksa pemain melakukan penggilingan pengalaman (*grinding*) repetitif melintasi jarak kosong yang membosankan.

## Keberanian Mengutamakan Kepadatan daripada Luas Hampa

Dunia game yang memikat tidak membutuhkan bentangan gurun tanpa batas untuk membuktikan kehebatannya. Sebuah distrik kota kecil yang padat, penuh lorong rahasia berlapis, dan dihuni karakter dengan relasi sosial yang dinamis jauh lebih berharga daripada sepuluh benua digital yang dingin dan sunyi.

Pengembang harus berani memangkas ilusi kuantitas jam bermain dan mengembalikan fokus pada kedalaman pengalaman interaktif yang membekas di sanubari pemain.`
  },
  {
    title: "Bahaya Olahraga Malam Berlebihan: Mengapa Memacu Jantung Sebelum Tidur Membajak Ritme Sirkadian",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Tidur", "Ritme Sirkadian", "Kebugaran", "Gaya Hidup", "Olahraga Malam"],
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Peralatan barbel dan beban gym dalam pencahayaan dramatis di ruang latihan kebugaran",
    excerpt: "Merasa bersalah akibat duduk seharian di kantor, banyak orang memacu latihan beban intensif atau lari cepat menjelang tengah malam. Namun lonjakan hormon kortisol dan suhu tubuh inti pasca-latihan justru mematikan produksi melatonin dan menghancurkan kualitas pemulihan sel.",
    content: `Setelah menghabiskan delapan hingga sepuluh jam terpaku di depan layar komputer kantor, rasa bersalah atas tubuh yang kurang bergerak sering kali memicu dorongan mendadak untuk berolahraga keras di malam hari. Pusat kebugaran yang buka dua puluh empat jam kini dipadati para pekerja urban pada pukul sembilan atau sepuluh malam, mengangkat beban berat hingga otot gemetar atau berlari cepat di atas treadmill dengan iringan dentuman musik berenergi tinggi.

Secara psikologis, menyelesaikan sesi latihan keringat di penghujung hari memang memberikan kepuasan instan seolah-olah kita telah membayar lunas hutang gerak harian. Namun dalam sistem kronobiologi manusia, memacu detak jantung hingga batas maksimal mendekati jam istirahat malam adalah tindakan kontraproduktif yang mengirimkan sinyal bahaya ke seluruh jaringan organ.

## Kekacauan Hormonal dan Pemadaman Fase Pemulihan

Aktivitas kardiovaskular intensif pada larut malam membongkar keseimbangan alami yang dibutuhkan tubuh untuk meregenerasi sel:

* **Penekanan Sekresi Melatonin oleh Kortisol**: Latihan intensif membanjiri aliran darah dengan hormon stres kortisol dan adrenalin. Kehadiran hormon siaga ini menghambat kelenjar pineal memproduksi melatonin, hormon penting yang semestinya memandu otak memasuki fase kantuk alami secara bertahap.
* **Peningkatan Suhu Inti Tubuh (*Core Body Temperature*)**: Agar dapat memulai fase tidur lelap (*deep sleep*), suhu inti tubuh manusia secara biologis harus turun sekitar satu derajat Celsius. Latihan fisik berat justru menaikkan suhu jaringan dalam tubuh hingga berjam-jam setelahnya, menyebabkan tidur gelisah dan sering terbangun di tengah malam.
* **Peregangan Pemulihan Jaringan yang Terhambat**: Kerusakan mikro pada serat otot membutuhkan aliran hormon pertumbuhan manusia (*HGH*) yang dilepaskan secara optimal pada siklus tidur gelombang lambat. Ketika fase tidur lelap terpangkas, sintesis protein terganggu, meninggalkan rasa pegal berkepanjangan dan penurunan sistem imunitas di pagi hari.

## Menata Jadwal Gerak yang Selaras dengan Biologi

Jika malam hari adalah satu-satunya waktu luang yang Anda miliki, gantilah menu latihan berintensitas tinggi dengan aktivitas restoratif seperti peregangan dinamis, yoga ringan, atau jalan santai tanpa beban target. Batasi latihan kekuatan intensif maksimal tiga jam sebelum jadwal tidur agar detak jantung dan suhu tubuh memiliki jeda waktu untuk kembali ke ritme dasar.

Kebugaran sejati bukan diukur dari seberapa keras Anda menyiksa tubuh di ujung malam, melainkan dari seberapa bijak Anda menghormati kebutuhan biologis tubuh untuk memulihkan diri.`
  },
  {
    title: "Tirani Musik Latar Ambient di Kafe: Ketika Keberanian Kurasi Akustik Dilenyapkan Daftar Putar Seragam",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Kurasi Musik", "Budaya Urban", "Kafe", "Playlist", "Identitas Suara"],
    imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Piringan hitam klasik berputar di atas turntable antik dengan suasana hangat kedai kopi",
    excerpt: "Masuk ke kedai kopi di Jakarta, Bandung, atau Surabaya, dan Anda akan disambut daftar putar lo-fi hip-hop santai atau bossa nova instan yang sama persis. Fenomena muzak modern ini mengebiri peran musik sebagai identitas ruang dan menurunkannya menjadi sekadar peredam kebisingan steril.",
    content: `Cobalah lakukan eksperimen kecil saat mengunjungi kedai kopi independen di berbagai sudut kota: pejamkan mata dan dengarkan melodi yang mengalun dari pengeras suara di sudut langit-langit. Sembilan dari sepuluh tempat kemungkinan besar memutar ketukan *lo-fi hip-hop* tanpa vokal dengan sampel piano yang berulang, atau lagu pop barat populer yang diaransemen ulang menjadi versi bossa nova lembut bernada datar.

Pola suara yang seragam ini bukanlah kebetulan estetika yang menyenangkan, melainkan gejala dari matinya keberanian kurasi musik di ruang-ruang publik perkotaan. Musik di kedai kopi modern tidak lagi dipilih oleh barista yang memiliki kecintaan mendalam pada arsip kaset atau album piringan hitam lokal, melainkan diserahkan sepenuhnya kepada daftar putar otomatis algoritma streaming dengan label generik seperti *chill study beats* atau *coffee shop aesthetic*.

## Degradasi Seni Menjadi Insulasi Suara Steril

Penyeragaman lanskap sonik komersial ini mereduksi karya musisi menjadi fungsi utilitas yang membosankan:

* **Muzak Gaya Baru Abad Digital**: Pada era 1970-an, industri mengenal konsep *Muzak*—musik elevator tanpa dinamika yang dirancang khusus untuk menenangkan pekerja kantor tanpa mengalihkan perhatian mereka. Hari ini, daftar putar algoritma mengambil alih peran tersebut, memproduksi ribuan komposisi tanpa dinamika emosional yang sengaja dirancang agar tidak diingat oleh pendengarnya.
* **Pelenyapan Identitas Karakter Tempat**: Di masa lalu, selera musik sebuah kedai kopi adalah cerminan dari komunitas yang berkumpul di dalamnya. Sebuah tempat bisa dikenal karena keberaniannya memutar rilisan post-punk lokal, jazz eksperimental, atau folk Nusantara. Kini, ruang-ruang tersebut kehilangan kepribadian akustik, bertransformasi menjadi koridor komersial yang terasa hambar dan seragam.
* **Penyisihan Musisi Independen dari Ruang Dengar Fisik**: Ruang publik yang semestinya menjadi etalase perjumpaan antara pengunjung dengan karya seniman independen lokal kini tertutup rapat. Musisi yang merilis karya berkarakter kuat tidak pernah mendapatkan tempat di pengeras suara publik karena dianggap terlalu berisiko mengganggu ketenangan pengunjung yang sedang mengetik laptop.

## Mengembalikan Jiwa dan Dinamika ke Udara Publik

Musik adalah nafas kebudayaan yang memiliki daya untuk memantik percakapan, membangkitkan gairah berpikir, dan memberikan jiwa pada sebuah ruangan fisik. Pengelola ruang publik harus berani mengambil risiko kuratorial: matikan daftar putar algoritma yang membosankan, putar album penuh musisi independen dari awal hingga akhir, dan biarkan gelombang frekuensi suara mengisi ruang dengan kejujuran rasa.

Sebuah tempat berkumpul yang berkarakter tidak membutuhkan musik latar yang pura-pura tenang, melainkan keberanian akustik yang berani bersuara.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 04:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 04:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-0400.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
