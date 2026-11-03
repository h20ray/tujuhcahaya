import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Matinya Baterai yang Dapat Dilepas Sendiri: Mengapa Lem Perekat Permanen Mengubah Ponsel Menjadi Barang Sekali Pakai",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Hardware", "Baterai", "Right to Repair", "Limbah Elektronik", "Smartphone"],
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ponsel pintar dengan bodi kaca elegan tergeletak di atas meja minimalis",
    excerpt: "Dulu, mengganti baterai ponsel yang drop cukup dengan membuka penutup belakang plastik. Kini, pabrikan mengunci baterai dengan lem industri permanen di balik panel kaca rapuh, memaksa konsumen membeli perangkat baru.",
    content: `Generasi pengguna telepon seluler era awal milenium tentu masih ingat betapa sederhananya mengatasi baterai yang mulai aus: membuka penutup belakang bodi plastik dengan kuku jempol, mengeluarkan baterai kotak kecil yang kembung, lalu memasang baterai cadangan baru yang dibeli seharga seratus ribu rupiah di gerai terdekat. Ponsel seketika kembali hidup dengan daya seratus persen tanpa perlu menginap di pusat servis resmi.

Kini, ritual perawatan mandiri yang ramah lingkungan tersebut telah sengaja dilenyapkan oleh industri teknologi modern. Di bawah panji desain bodi kaca unibody yang kedap air dan ramping, para raksasa teknologi mengunci modul baterai litium menggunakan perekat industri berkekuatan ekstrem (*industrial pull-tabs*). Baterai ditanam persis di bawah layar sentuh yang rapuh dan kabel pita tipis yang mudah putus, membuat tindakan melepas baterai sendiri menjadi prosedur berisiko tinggi yang mengancam keselamatan fisik pengguna.

## Desain Usang Terencana di Balik Segel Lem Industri

Praktik menanam baterai secara permanen merupakan salah satu bentuk keusangan terencana (*planned obsolescence*) paling menguntungkan korporasi:

* **Penyanderaan Siklus Hidup Perangkat**: Secara elektrokimia, kapasitas baterai litium pasti akan merosot hingga di bawah delapan puluh persen setelah dua tahun pemakaian normal. Dengan mempersulit proses penggantian baterai, pabrikan secara efektif menetapkan tanggal kedaluwarsa buatan pada seluruh perangkat keras ponsel, mendorong pengguna membeli model terbaru.
* **Biaya Servis Resmi yang Sengaja Dimahalkan**: Ketika pengguna membawa ponsel berumur dua tahun ke pusat servis resmi, mereka kerap disodori estimasi biaya penggantian baterai yang mencapai sepertiga harga baru ponsel tersebut. Tenaga penjualan kemudian menyarankan agar pengguna melakukan tukar tambah (*trade-in*), memperparah tumpukan sampah elektronik (*e-waste*) global.
* **Risiko Ledakan dan Kebakaran Mandiri**: Pengguna awam yang nekat mencongkel baterai yang dilekatkan kuat menggunakan obeng logam berisiko menusuk lapisan pemisah kimia, memicu pelepasan panas termal spontan (*thermal runaway*) yang menghasilkan kobaran api beracun di ruang keluarga.

## Mengembalikan Kedaulatan Hak Memperbaiki Mandiri

Gerakan kedaulatan hak memperbaiki (*Right to Repair*) di Uni Eropa dan berbagai belahan dunia telah mulai menuntut regulasi tegas: bahwa seluruh perangkat elektronik portabel wajib memiliki baterai yang dapat dilepas dan diganti oleh konsumen biasa menggunakan alat standar rumah tangga. Desain ramah lingkungan sejati diukur dari kemudahan merawat perangkat agar bertahan lima hingga tujuh tahun, bukan dari klaim pemasaran kotak daur ulang yang hipokrit.

Konsumen berhak memiliki kendali utuh atas barang yang telah mereka bayar lunas. Kembalikan baterai yang mudah dilepas ke genggaman masyarakat.`
  },
  {
    title: "Monokultur Mode Battle Royale: Ketika Keberagaman Desain Game Ditelan Zona Gas Beracun yang Mengecil",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Battle Royale", "Desain Game", "Industri Game", "Multiplayer", "Gamer"],
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Monitor gaming dengan tampilan grafis interaktif dan headphone studio",
    excerpt: "Keberhasilan komersial satu formula permainan memicu latah massal industri. Waralaba game legendaris ramai-ramai dipaksa menanamkan mode terjun payung seratus pemain dan lingkaran gas menyusut yang mematikan inovasi genre.",
    content: `Ketika konsep mode permainan bertahan hidup seratus orang (*Battle Royale*) pertama kali meledak lebih dari setengah dekade lalu, format tersebut disambut sebagai inovasi kompetitif yang menyegarkan. Menjatuhkan seratus pemain tanpa senjata ke pulau terpencil, memaksa mereka berebut perlengkapan di rumah-rumah kosong, dan menyempitkan ruang gerak secara bertahap melalui lingkaran medan gaya atau gas beracun menghadirkan ketegangan adrenalin yang belum pernah dirasakan dalam game tembak-menembak konvensional.

Namun seperti biasa dalam sejarah industri hiburan modern, kesuksesan satu karya segera memicu gelombang peniruan massal yang membabi buta. Dewan direksi penerbit game raksasa yang panik melihat arus pemain bermigrasi seketika memerintahkan seluruh studio internal mereka untuk menyuntikkan mode battle royale ke dalam setiap waralaba yang mereka miliki—bahkan pada game-game legendaris yang sejatinya memiliki identitas taktis dan fokus naratif yang sama sekali berbeda.

## Pelenyapan Warisan Mode Permainan Berbasis Objektif

Keseragaman format ini menenggelamkan keberagaman mode permainan klasik yang telah dirawat selama puluhan tahun:

* **Tergusurnya Mode Tim Klasik yang Terarah**: Mode-mode kerja sama taktis seperti Perebutan Bendera (*Capture the Flag*), Penguasaan Wilayah (*Domination*), dan Penanaman Bom (*Search and Destroy*) perlahan ditinggalkan oleh penerbit karena seluruh sumber daya server dan tim pengembang dialihkan untuk menopang peta raksasa battle royale.
* **Fragmentasi Komunitas dan Proyek Terbengkalai**: Demi mengejar tren pasar yang fana, pengembang mengorbankan kampanye cerita pemain tunggal (*single-player campaign*) dan mode multipemain inti. Ketika mode battle royale tiruan mereka gagal bersaing dengan penguasa pasar yang sudah mapan, penerbit langsung mematikan server game tersebut dalam waktu kurang dari satu tahun.
* **Monotonitas Pola Permainan yang Membosankan**: Menghabiskan waktu lima belas menit berlari di padang rumput kosong semata-mata demi mencari rompi antipeluru dan senjata langka, lalu tewas seketika oleh tembakan penembak runduk dari jarak lima ratus meter, telah menjadi rutinitas mekanis yang mengikis keasyikan bermain interaktif.

## Membebaskan Desain Game dari Penjara Satu Formula

Kekayaan medium video game dibangun di atas keberanian menjelajahi spektrum interaksi manusia yang luas: dari ketegangan kerja sama kooperatif, adu kecepatan refleks di koridor sempit, hingga narasi emosional yang menyentuh kalbu. Mempersempit seluruh jagat permainan digital menjadi sekadar simulasi bertahan hidup di pulau gas beracun adalah bentuk kemiskinan imajinasi kolektif industri.

Komunitas gamer berhak menuntut kebaruan ide yang tulus dari para pencipta permainan. Dukunglah studio-studio yang berani menolak formula pasar dan setia merancang pengalaman bermain yang memiliki jiwa dan identitas mandiri.`
  },
  {
    title: "Bahaya Ketergantungan Obat Tidur Tanpa Resep: Mengapa Sedatif Kimiawi Menipu Fase Gelombang Otak Alami",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Tidur", "Insomnia", "Farmakologi", "Kesehatan Mental", "Ritme Sirkadian"],
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Peralatan latihan kebugaran dalam pencahayaan dramatis di ruang olahraga",
    excerpt: "Menenggak pil tidur atau suplemen penenang setiap malam untuk mengobati insomnia kerja dipandang sebagai jalan keluar praktis. Namun zat sedatif kimiawi hanya melumpuhkan kesadaran tanpa memicu fase tidur gelombang lambat yang memulihkan sel otak.",
    content: `Lampu kamar tidur telah dipadamkan sejak dua jam lalu, mata terpejam rapat, namun pikiran tetap berputar kencang memikirkan tumpukan pekerjaan kantor dan tagihan yang belum tuntas. Rasa frustrasi karena tak kunjung terlelap sering kali mendorong tangan membuka laci meja samping tempat tidur, meraih botol obat tidur tanpa resep atau permen penenang berkandungan melatonin dan antihistamin, lalu menenggaknya dengan segelas air putih.

Tiga puluh menit kemudian, kelopak mata terasa berat dan kesadaran perlahan lenyap. Di pagi hari, banyak orang merasa telah memecahkan masalah insomnia mereka secara cerdas. Namun bila ditinjau dari kacamata neurosains tidur dan elektroensefalografi (*EEG*), zat-zat penenang kimiawi tersebut sejatinya tidak memberikan tidur alami, melainkan sekadar membuat korteks serebral otak pingsan (*sedation*) dalam keadaan tidak sadar.

## Kerusakan Arsitektur Tidur Gelombang Lambat dan Fase REM

Perbedaan antara tidur alami dengan sedasi kimiawi memiliki implikasi besar bagi pemulihan fungsi biologis:

* **Pengebirian Gelombang Otak Delta (*Slow-Wave Sleep*)**: Tidur alami yang berkualitas ditandai oleh ritme gelombang otak delta yang lambat dan sinkron, fase di mana sistem glimfatik otak bekerja aktif membilas protein racun amiloid dan kelenjar pituitari melepaskan hormon pertumbuhan. Obat penenang menekan gelombang pemulihan ini, membuat jaringan tubuh gagal beregenerasi secara optimal.
* **Penekanan Fase Mimpi REM yang Merawat Memori**: Fase tidur dengan gerakan mata cepat (*REM sleep*) adalah panggung di mana otak memproses memori emosional dan mengonsolidasikan informasi baru. Sedatif kimiawi memangkas durasi fase REM, memicu penurunan daya ingat jangka pendek, kabut pikiran, dan ketidakstabilan suasana hati di siang hari.
* **Toleransi Dosis dan Fenomena Insomnia Rebound**: Penggunaan obat tidur secara rutin membuat reseptor GABA di otak mengalami desensitisasi. Ketika seseorang mencoba berhenti mengonsumsinya, mereka dihadapkan pada serangan insomnia pantulan (*rebound insomnia*) yang jauh lebih parah daripada gangguan tidur awal, menciptakan lingkaran ketergantungan psikologis dan fisik.

## Membangun Kembali Kebiasaan Tidur yang Berkesadaran

Mengatasi gangguan tidur kronis membutuhkan keberanian membedah akar penyebab stres dan merestrukturisasi kebiasaan tidur (*sleep hygiene*) secara fundamental:

1. **Disiplin Jam Bangun Tidur yang Konsisten**: Bangunlah pada jam yang sama persis setiap pagi, termasuk di akhir pekan, untuk mengunci ritme sirkadian jam biologis tubuh secara permanen.
2. **Sterilkan Kamar dari Distraksi Layar**: Jauhkan ponsel pintar dan televisi dari kamar tidur minimal satu jam sebelum beristirahat agar produksi hormon melatonin alami tidak terhambat cahaya spektrum biru.
3. **Turunkan Suhu Ruangan dan Redupkan Cahaya**: Tubuh manusia membutuhkan penurunan suhu inti tubuh untuk memicu rasa kantuk alami. Kamar tidur yang sejuk dan gelap gulita adalah pemicu biologis terkuat untuk tidur lelap.

Tidur adalah proses pemulihan biologis paling sakral yang dianugerahkan alam pada tubuh manusia. Rawatlah keaslian ritmenya tanpa jalan pintas kimiawi yang menipu kesadaran Anda.`
  },
  {
    title: "Standarisasi Suara Drum Digital 808: Ketika Bass Sub Rendah Menenggelamkan Harmoni Alat Musik Akustik",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Produksi Audio", "Bass 808", "Mixing", "Harmoni", "Akustik"],
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Konsol mixer audio profesional dengan kenop fader dan lampu level suara di studio rekaman",
    excerpt: "Dentuman nada sub-bass Roland 808 kini menjejali hampir setiap produksi lagu komersial. Ketergantungan pada getaran frekuensi rendah ekstrem ini memaksa teknisi audio memotong ruang harmoni instrumen organik alami.",
    content: `Nyalakan pengeras suara mobil atau dengarkan musik melalui subwoofer bertenaga tinggi saat memutar tangga lagu teratas hari ini: dada Anda seketika akan dihantam oleh getaran frekuensi rendah yang berguncang di bawah enam puluh Hertz. Nada bas sintetis yang mendengung panjang dan tebal tersebut adalah tanda tangan sonik paling dominan abad ke-21: bass dari mesin drum klasik Roland TR-808 yang telah dimodifikasi secara digital.

Ketika pertama kali dipopulerkan oleh pionir musik elektro dan hip-hop dekade 1980-an, suara bas 808 adalah eksperimen revolusioner yang mendobrak batas akustik rekaman. Namun apa yang dulunya merupakan pilihan artistik yang berani kini telah bermutasi menjadi dogma produksi musik yang membosankan dan merusak keseimbangan frekuensi rekaman audio secara masif.

## Perampasan Ruang Frekuensi dan Mutilasi Instrumen Akustik

Hukum fisika akustik menyatakan bahwa ruang spektrum frekuensi pendengaran manusia memiliki batas volume dan dinamika yang terbatas (*headroom*):

* **Pemotongan Paksa Nada Rendah Alat Musik Organik**: Gelombang sub-bass sintetis yang sangat masif memakan porsi energi energi audio (*power consumption*) terbesar dalam sebuah lagu. Demi mencegah distorsi suara pecah (*clipping*), teknisi mixing terpaksa menggunakan filter pemotong nada rendah (*high-pass filter*) yang agresif pada instrumen organik seperti gitar bas elektrik, piano grand akustik, dan tabung drum fisik, mengebiri kehangatan resonansi kayu alami mereka.
* **Pelenyapan Progresi Harmoni yang Rumit**: Frekuensi sub-bass yang terlalu tebal menciptakan fenomena akustik pelumpuhan nada (*frequency masking*). Untuk mencegah suara terdengar keruh dan berantakan, produser rekaman terpaksa menyederhanakan akord lagu menjadi hanya satu atau dua progresi akord dasar, melenyapkan kekayaan eksplorasi harmoni musik yang matang.
* **Optimasi Musik demi Pengeras Suara Portabel Murah**: Lagu-lagu modern sengaja diisi distorsi harmonik 808 agar dapat bergetar di membran speaker ponsel pintar atau speaker Bluetooth mungil, mengorbankan pengalaman pendengar yang menggunakan sistem audio berkualitas tinggi beresolusi tinggi.

## Merawat Keanekaragaman Spektrum Akustik

Keindahan seni musik tidak semestinya diukur dari seberapa keras ia sanggup menggetarkan pelat nomor kendaraan di jalan raya. Keseimbangan artistik sejati lahir dari dialog yang harmonis antara dentuman ritme, kehangatan frekuensi menengah tempat vokal dan instrumen melodi bernapas, serta gemerlap nada tinggi simbal yang jernih.

Produser rekaman harus berani keluar dari ketergantungan pada gelombang sinus sub-bass yang monoton. Beri ruang kembali bagi instrumen bas tradisional untuk berbicara dengan dinamika jemari manusia yang bernyawa.`
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
