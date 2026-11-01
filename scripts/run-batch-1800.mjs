import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

const articles = [
  {
    title: "Ritual Memutar Piringan Hitam: Mengapa Generasi Streaming Justru Memburu Kaset Pita dan Vinyl?",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Vinyl", "Kaset Pita", "Gaya Hidup", "Audio", "Budaya Pop"],
    imageUrl: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Piringan hitam vinyl berputar di atas turntable kayu klasik",
    excerpt: "Ketika jutaan lagu bisa dipanggil dalam satu ketukan, rak kaset pita dan piringan hitam justru diserbu anak muda. Ada rindu yang tak terjawab oleh algoritma streaming: ritual menikmati musik secara utuh.",
    content: `Akses tanpa batas terhadap katalog lebih dari 100 juta lagu di platform streaming telah mengubah drastis cara kita memperlakukan karya musik. Lagu-lagu yang digarap berbulan-bulan di studio rekaman kini kerap terdegradasi menjadi sekadar dengung latar belakang pengusir sunyi saat bekerja atau menembus kemacetan jalan raya. Kebiasaan melompati lagu (*skipping*) dalam rentang lima detik pertama menjadi norma baru pendengar modern.

Namun, di tengah kemudahan serba instan tersebut, arus balik yang mengejutkan justru berhembus kencang. Generasi muda yang tumbuh besar di era unduhan digital kini berbondong-bondong memadati bursa rilisan fisik, mengantre rilisan piringan hitam (*vinyl*) edisi terbatas di Record Store Day, serta memburu kaset pita rilisan band indie lokal di pasar barang antik Blok M dan Jalan Surabaya.

## Hilangnya Sentuhan Fisik dan Matinya Ritual Mendengar

Mendengarkan musik analog menuntut komitmen fisik dan atensi penuh yang telah lama sirna dari layar sentuh smartphone. Anda tidak bisa begitu saja menekan tombol acak (*shuffle*) saat memutar piringan hitam. 

Prosesnya melibatkan ritual tak tergantikan:

* **Sentuhan Indrawi**: Mengeluarkan piringan hitam dari sampul karton berukuran 12 inci, mengagumi tata letak sampul album dan lembar lirik cetak, lalu menaruh piringan tersebut dengan hati-hati ke atas pemutar (*turntable*).
* **Fokus Penuh**: Menurunkan jarum stylus ke alur piringan hitam secara presisi dan menunggu desis hangat (*analog crackle*) yang khas sebelum dentuman nada pertama mengalun.
* **Mendengarkan Album Utuh**: Format kaset pita dan piringan hitam memaksa pendengar menyimak urutan lagu dari sisi A hingga sisi B sebagaimana yang diniatkan oleh sang musisi, tanpa distraksi notifikasi obrolan instan.

Ritual ini mengembalikan bobot apresiasi terhadap sebuah album sebagai karya seni terpadu, bukan sekadar kompilasi potongan audio berdurasi 30 detik untuk latar video pendek media sosial.

## Nafas Finansial bagi Musisi Independen

Di balik aspek nostalgia dan tren gaya hidup, perburuan rilisan fisik menyimpan dimensi ekonomi krusial bagi keberlangsungan ekosistem musik independen di Indonesia. Model bisnis platform streaming global selama ini menuai kritik tajam karena hanya memberikan royalti pecahan sen rupiah per putaran lagu kepada para pencipta karya.

Bagi band independen di Jakarta, Bandung, atau Yogyakarta, penjualan 300 keping kaset pita dan 100 piringan hitam di etalase konser sering kali menghasilkan pendapatan bersih yang jauh lebih bermakna daripada capaian ratusan ribu putaran di aplikasi musik digital. Membeli merchandise dan rilisan fisik menjadi bentuk dukungan nyata paling murni dari penggemar setia untuk memastikan musisi favorit mereka dapat terus menyewa studio dan memproduksi karya berikutnya.

## Kehangatan Ketidaksempurnaan Analog

Kualitas suara analog sejatinya tidak selalu berarti resolusi teknis yang lebih jernih jika dibandingkan dengan berkas audio resolusi tinggi 24-bit tanpa kompresi. Daya tarik utama format pita magnetik dan vinil justru terletak pada ketidaksempurnaannya: warna suara yang lebih hangat, dinamika bas yang organik, serta sedikit saturasi alami yang membuat musik terasa hidup dan bernyawa.

Membeli piringan hitam atau kaset pita bukan tanda anti-kemajuan, melainkan pilihan sadar untuk memulihkan daya resap kita terhadap seni bunyi. Di tengah kepungan algoritma rekomendasi yang kian seragam, meluangkan waktu setengah jam untuk duduk tenang menyimak satu sisi album vinyl adalah kemewahan batin yang tak ternilai harganya.`
  },
  {
    title: "Jerat Sleep Procrastination: Mengapa Pekerja Remote Kerap Menukar Waktu Tidur demi Otonomi Semu",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Tidur", "Pekerja Remote", "Kesehatan Mental", "Gaya Hidup", "Produktivitas"],
    imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kamar tidur temaram dengan pencahayaan lembut dan suasana istirahat malam",
    excerpt: "Batas kabur antara jam kerja dan ruang pribadi membuat pekerja remote merasa harinya dirampas. Menatap layar ponsel hingga larut malam bukan tanda bugar, melainkan jeratan balas dendam waktu tidur.",
    content: `Jam dinding di kamar sudah menunjukkan pukul 01.30 dini hari. Kelopak mata terasa berat dan kepala mulai berdenyut ringan karena kelelahan setelah seharian menatap monitor kerja. Namun, alih-alih mematikan lampu dan bersiap tidur, jari tangan Anda masih lincah menggulir linimasa media sosial, berpindah dari satu video lucu ke utas perdebatan viral, atau menonton kelanjutan episode serial televisi yang sebetulnya tidak terlalu menarik.

Kondisi psikologis ini dikenal dalam dunia medis sebagai *revenge bedtime procrastination* atau prokrastinasi balas dendam waktu tidur. Istilah ini merujuk pada keputusan sadar untuk menunda waktu tidur malam demi melakukan aktivitas hiburan pribadi, padahal tidak ada hal mendesak yang menghalangi seseorang untuk beristirahat.

## Defisit Kendali dan Ilusi Kemerdekaan Malam

Akar masalah fenomena ini bukan kemalasan atau kurangnya disiplin diri, melainkan krisis kendali waktu di siang hari. Pola kerja jarak jauh (*remote work*) dan budaya kerja selalu siaga (*always-on*) telah meruntuhkan sekat pembatas antara kantor dan rumah tangga.

Ketika seorang pekerja menghabiskan 10 hingga 12 jam sehari meladeni panggilan konferensi daring, membalas pesan instan manajer proyek, dan mengejar target tenggat waktu, mereka merasa kehilangan kepemilikan atas hidup pribadi. Bagi mereka, jam sembilan malam hingga dini hari adalah satu-satunya jendela waktu ketika tidak ada orang yang menuntut laporan atau meminta revisi pekerjaan.

Di titik inilah kompromi berisiko terjadi: mengorbankan waktu istirahat tubuh demi membeli secuil otonomi semu. Menatap layar ponsel di keheningan malam memberi sensasi kemerdekaan yang menipu bahwa kita memegang kendali penuh atas diri sendiri.

## Rantai Kerusakan Biologis Akibat Hutang Tidur

Kompensasi psikologis tersebut menuntut harga biologis yang amat mahal bagi tubuh manusia. Paparan cahaya biru (*blue light*) dari smartphone dan tablet pada larut malam menekan produksi hormon melatonin, hormon alami yang memberi sinyal pada otak untuk memasuki fase perbaikan seluler.

Dampaknya merambat sistemik ke berbagai fungsi tubuh:

* **Kabut Otak (*Brain Fog*) di Pagi Hari**: Kurangnya fase tidur gelombang lambat (*deep sleep*) dan tidur REM menghambat pembersihan racun metabolik amiloid di otak, memicu kesulitan mengingat dan konsentrasi tumpul saat jam kerja dimulai.
* **Lonjakan Hormon Stres**: Kurang tidur kronis memicu kelenjar adrenal memproduksi kortisol berlebih, memicu jantung berdebar dan kecemasan tanpa sebab yang jelas.
* **Perangkap Kafein dan Gula**: Untuk mengatasi rasa kantuk di siang hari, tubuh menuntut asupan kopi susu manis dan camilan tinggi karbohidrat secara berulang, merusak stabilitas insulin dan memperburuk kelelahan di sore hari.

Tubuh dipaksa beroperasi dalam status darurat terus-menerus, meminjam energi hari esok dengan beban bunga kesehatan yang berbunga lipat ganda.

## Merebut Kembali Kedaulatan Siang Hari

Keluar dari jerat penundaan tidur malam tidak bisa diselesaikan hanya dengan memasang alarm tidur atau mengandalkan suplemen penenang. Solusinya harus menyentuh akar penyebab: menata ulang batas otonomi di jam kerja terang.

Langkah konkret yang bisa segera diterapkan:

1. **Terapkan Ritual Penutup Hari (*Shutdown Ritual*)**: Tetapkan waktu tegas untuk menutup laptop dan menonaktifkan notifikasi aplikasi kantor setiap sore. Beri sinyal tegas pada alam bawah sadar bahwa fase kerja telah resmi usai.
2. **Karantina Layar 45 Menit Sebelum Tidur**: Letakkan smartphone di luar jangkauan kasur atau gunakan mode monokrom hitam-putih untuk menurunkan daya pikat dopamin visual. Ganti waktu menatap layar dengan membaca buku fisik atau latihan pernapasan santai.
3. **Selipkan Waktu Jeda Mikro di Jam Siang**: Jangan biarkan jadwal kerja menelan seluruh energi tanpa sisa. Luangkan waktu 15 menit di tengah hari untuk berjalan kaki santai atau menyeduh teh tanpa ditemani gadget kerja.

Tidur malam bukanlah hadiah yang harus ditukar dengan penderitaan kerja seharian, melainkan hak asasi raga agar kita tetap waras menjalani tantangan berikutnya.`
  },
  {
    title: "Eksodus dari Hyperscale: Mengapa Startup Mulai Mundur ke Server Bare-Metal Setelah Boncos Bayar Cloud",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Cloud Computing", "Bare Metal", "DevOps", "Infrastruktur", "Startup"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Rak server pusat data dengan indikator lampu jaringan berkedip",
    excerpt: "Janji manis efisiensi cloud sering berakhir dengan tagihan ratusan juta per bulan untuk mikroservis berlebihan. Gelombang cloud repatriation kini menjadi langkah finansial rasional bagi tim software.",
    content: `Selama lebih dari satu dekade, doktrin industri teknologi dunia terdengar seragam: buang seluruh server fisik di kantor Anda dan pindahkan semua beban kerja ke layanan cloud publik seperti AWS, Google Cloud, atau Azure. Narasi pemasaran yang dijual sangat memikat: skalabilitas tak terbatas, kemudahan operasional tanpa staf infrastruktur, serta biaya yang diklaim hanya dihitung sesuai pemakaian riil (*pay-as-you-go*).

Namun, seiring matangnya ekosistem perangkat lunak dan mengetatnya kucuran modal ventura global, banyak pendiri startup dan direktur teknologi (CTO) mulai menyadari kenyataan pahit di balik lembar tagihan bulanan mereka. Biaya sewa komputasi cloud yang melonjak tak terkendali kini berubah menjadi salah satu pos pengeluaran terbesar yang menggerus margin keuntungan bisnis digital.

Kini, fenomena baru yang dikenal sebagai *cloud repatriation*—atau langkah memindahkan kembali beban kerja dari hyperscale cloud ke server fisik sewaan (*bare-metal*) atau pusat data mandiri—tengah bergulir kencang di kalangan pelaku rekayasa perangkat lunak.

## Jebakan Biaya Tersembunyi dan Kerumitan yang Dibuat-buat

Mengapa tagihan cloud bisa membengkak sedemikian masif? Masalahnya jarang terletak pada biaya komputasi dasar (vCPU dan RAM), melainkan pada jaring biaya periferal yang dipatok sangat mahal oleh penyedia cloud raksasa.

Faktor-faktor pemborosan biaya tersebut meliputi:

* **Biaya Transfer Data Keluar (*Egress Fees*)**: Memindahkan data antar-wilayah atau mengalirkan trafik ke internet publik dikenai tarif selangit. Bagi aplikasi dengan aliran media atau basis data besar, pos ini bisa menyedot 30 hingga 50 persen dari total tagihan bulanan.
* **Premium Layanan Terkelola (*Managed Services Markup*)**: Menjalankan kluster basis data PostgreSQL atau Redis di layanan terkelola cloud sering kali dipatok dengan harga tiga hingga lima kali lipat lebih mahal daripada biaya perangkat keras komputasi yang menopangnya.
* **Overhead Orkestrasi Mikroservis**: Mengadopsi arsitektur Kubernetes yang terlalu rumit untuk aplikasi berskala menengah memaksa tim menyewa puluhan mesin virtual cadangan hanya untuk melayani beban kerja orkestrasi internal.

Langkah berani yang diambil oleh 37signals (pengembang Basecamp dan layanan email HEY) menjadi salah satu studi kasus paling terkenal. Dengan meninggalkan cloud publik dan beralih ke server bare-metal milik sendiri, mereka berhasil menghemat pengeluaran infrastruktur hingga lebih dari 3,2 juta dolar AS dalam rentang waktu lima tahun tanpa menurunkan kecepatan akses pengguna.

## Lompatan Kinerja Perangkat Keras Modern

Argumen klasik bahwa mengelola server fisik membutuhkan armada tim operasi yang rumit kini sudah kehilangan relevansi teknisnya. Perangkat keras modern saat ini menawarkan performa komputasi yang luar biasa padat.

Satu unit server bare-metal modern yang ditenagai prosesor AMD EPYC 64-core atau Intel Xeon generasi terbaru bersama RAM 256 GB dan penyimpanan NVMe berkecepatan tinggi sanggup menangani puluhan ribu kueri per detik secara santai. Dengan biaya sewa bulanan server bare-metal di penyedia seperti Hetzner atau OVHcloud yang hanya berkisar belasan juta rupiah, kapasitas komputasi tersebut sanggup melayani skala trafik aplikasi yang pada platform cloud publik menuntut biaya ratusan juta rupiah.

Ditambah lagi, evolusi perkakas otomatisasi modern seperti Docker, Ansible, Kamal, serta basis data SQLite terdistribusi telah menyederhanakan proses penerapan kode (*deployment*) ke server fisik. Tim kecil berisi tiga hingga lima insinyur kini dapat mengelola infrastruktur bare-metal dengan keandalan setara layanan cloud tanpa harus bergulat dengan kerumitan ratusan dasbor manajemen cloud yang membingungkan.

## Menemukan Keseimbangan Arsitektur yang Rasional

Langkah repatriasi ini tentu bukan berarti memvonis layanan cloud publik tidak berguna sama sekali. Cloud hyperscale tetap merupakan pilihan terbaik untuk proyek eksperimental tahap awal (MVP) yang membutuhkan validasi cepat atau bisnis dengan lonjakan trafik musiman yang sangat ekstrem.

Namun, bagi perusahaan teknologi yang telah memiliki pola beban kerja stabil dan terprediksi, menyewa atau membeli server bare-metal adalah keputusan finansial yang sangat logis. Mengoptimalkan kode aplikasi dan menyederhanakan arsitektur server fisik terbukti jauh lebih efektif meningkatkan profitabilitas bisnis daripada sekadar menggelontorkan dana investor untuk membakar tagihan cloud yang tak pernah turun.`
  }
];

async function main() {
  console.log("=== MEMULAI BATCH AUTO-PUBLISH TUJUHCAHAYA (JADWAL 18:00 WIB / TIAP 30 MENIT) ===");
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

  console.log("\n=== SELURUH BATCH 18:00 BERHASIL DIPUBLIKASIKAN ===");
}

main().catch(err => {
  console.error("Batch Error:", err);
  process.exit(1);
});
