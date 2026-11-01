import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

const articles = [
  {
    title: "Fenomena Tur Perpisahan Palsu: Ketika Nostalgia dan Konser Terakhir Jadi Trik Pemasaran Berulang",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Konser", "Industri Musik", "Nostalgia", "Tiket Konser", "Band"],
    imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Suasana konser musik megah dengan sorotan lampu panggung dan ribuan penonton mengangkat tangan",
    excerpt: "Label 'tur perpisahan' kini kian kehilangan kesakralannya. Pengumuman pensiun dari panggung megah kerap berubah menjadi instrumen pemasaran berkala demi mengatrol penjualan tiket dengan harga selangit.",
    content: `Mengumumkan tur perpisahan (*farewell tour*) semestinya menjadi momen emosional yang agung bagi sebuah grup musik. Ini adalah titik temu di mana puluhan tahun dedikasi artistik dirayakan untuk terakhir kalinya bersama jutaan penggemar yang tumbuh bersama lagu-lagu mereka. Rasa kehilangan yang membayang membuat para penonton rela merogoh tabungan dalam-dalam, menempuh perjalanan lintas benua, hingga memburu tiket VIP yang dibanderol puluhan juta rupiah.

Namun, dalam dua dekade terakhir, kesakralan konser pamungkas tersebut perlahan terdegradasi menjadi trik komersial yang diputar ulang secara berkala. Banyak musisi kawakan mengumumkan perpisahan dengan air mata di atas panggung, hanya untuk kembali mengumumkan "tur reuni" atau "kembalinya formasi legendaris" selang dua atau tiga tahun kemudian.

## Manipulasi Emosi dan FOMO Penggemar

Industri hiburan live memahami betul bahwa rasa takut kehilangan momentum sejarah (*fear of missing out*) adalah tuas psikologis terkuat dalam penjualan tiket. Ketika sebuah konser dibubuhi embel-embel "kesempatan terakhir seumur hidup", elastisitas harga penonton praktis runtuh. Promotor leluasa menerapkan sistem dynamic pricing dan paket bundling mahal tanpa khawatir kehilangan permintaan pasar.

Strategi perpisahan berulang ini bekerja melalui pola yang sangat terencana:

* **Panggung Teatrikal Pamit**: Tur perpisahan dikemas dengan narasi dramatis, rilis piringan hitam kompilasi eksklusif, serta wawancara melankolis di berbagai media musik global.
* **Masa Hening Sementara**: Pasca tur berakhir, para personel mengambil jeda istirahat selama satu atau dua tahun untuk membiarkan kerinduan publik memuncak kembali.
* **Alasan Reuni yang Dibuat Puitis**: Kebangkitan panggung berikutnya hampir selalu dibungkus dengan alasan klise—seperti "kerinduan mendalam pada panggung", "desakan penggemar generasi baru", atau "penyelesaian konflik personal yang telah pulih".

## Ketika Integritas Artistik Tergerus Pragmatisme

Fenomena ini tidak lepas dari realitas runtuhnya pendapatan fisik industri rekaman. Di era platform streaming yang membayar royalti recehan per putaran lagu, tur konser berskala stadion adalah satu-satunya sumber arus kas masif bagi musisi senior dan manajemen promotor. Menjual tiket konser reguler tentu tidak menghasilkan sensasi histeria yang sama jika dibandingkan dengan membungkusnya dalam paket "malam terakhir perpisahan abadi".

Akibatnya, penggemar lama yang telah berkorban demi membeli tiket perpisahan pertama kerap merasa dikhianati. Janji pamit yang dilanggar merusak memori emosional konser terdahulu, mengubah kenangan intim menjadi sekadar transaksi dagang yang dingin.

## Menjaga Respek di Hadapan Penggemar

Pensiun dari dunia panggung tentu merupakan hak prerogatif setiap seniman. Fisik yang menua dan kejenuhan tur berbulan-bulan adalah alasan yang sepenuhnya manusiawi. Yang dipersoalkan publik bukanlah keputusan musisi untuk kembali berkarya, melainkan monetisasi ketulusan emosional penggemar lewat janji palsu yang berulang kali didaur ulang.

Sebuah warisan musikal yang agung semestinya dirawat dengan kejujuran. Ketika sebuah band mengumumkan perpisahan, biarkanlah panggung itu menjadi penutup yang bermartabat. Jika memang masih ada energi untuk terus bernyanyi, katakan saja dengan lugas tanpa perlu meminjam jubah duka perpisahan demi mendongkrak penjualan kupon konser.`
  },
  {
    title: "Eksodus dari Hyperscale Cloud: Mengapa Perusahaan Mulai Berpaling ke Arsitektur Colocation Bare-Metal",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Cloud Computing", "Bare Metal", "Data Center", "DevOps", "Infrastructure"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Deretan rak server berkedip di dalam fasilitas pusat data modern berskala enterprise",
    excerpt: "Tagihan bulanan cloud computing yang membengkak tanpa kendali mendorong para Chief Technology Officer mengambil langkah berani: menarik beban kerja kritis dari hyperscaler dan kembali membangun infrastruktur server sendiri.",
    content: `Satu dekade lalu, doktrin "cloud-first" didengungkan sebagai keharusan mutlak bagi setiap entitas teknologi modern. Memindahkan seluruh infrastruktur server ke raksasa komputasi awan (*hyperscaler*) dijanjikan bakal memangkas biaya operasional, melenyapkan kerumitan tim pengelola data center fisik, dan menawarkan fleksibilitas elastis yang tak terbatas. Startup hingga konglomerasi global berbondong-bondong menutup rak server lokal mereka demi bermigrasi ke layanan terkelola cloud.

Namun, memasuki paruh kedua dekade ini, realitas finansial mulai menampar banyak pimpinan teknologi (*Chief Technology Officer*). Tagihan bulanan cloud yang membengkak tak terkendali, biaya transfer data keluar (*data egress fees*) yang mencekik, serta fenomena vendor lock-in yang kompleks memicu gelombang pemikiran ulang yang radikal: repatriasi komputasi menuju server mandiri (*bare-metal*).

## Jebakan Biaya Tersembunyi di Balik Kemudahan Cloud

Komputasi awan publik memang sangat ideal untuk bisnis rintisan yang membutuhkan validasi cepat dan belum memiliki pola lalu lintas data yang stabil. Namun ketika beban komputasi sebuah platform mencapai skala stabil dan terprediksi, model sewa komputasi per detik berubah menjadi lubang hitam anggaran.

Banyak tim rekayasa perangkat lunak mulai menyadari anomali ekonomi berikut:

* **Pajak Egress Data yang Absurd**: Memasukkan data ke dalam cloud publik umumnya gratis, tetapi menarik data keluar atau memindahkannya antar-wilayah dikenai tarif yang sangat mahal. Biaya ini mengunci arsitektur aplikasi agar tidak bisa berpindah ke penyedia lain.
* **Markup Margin Tinggi**: Harga sewa mesin virtual dengan spesifikasi RAM dan CPU tinggi di penyedia cloud publik bisa mencapai tiga hingga lima kali lipat lebih mahal dibandingkan biaya amortisasi membeli perangkat keras server fisik secara tunai.
* **Biaya Layanan Terkelola (*Managed Services*)**: Fitur otomatis seperti pangkalan data terkelola, antrean pesan, dan orkestrasi kontainer sering kali menagih tarif premi yang tidak sebanding dengan beban kerja yang sesungguhnya digunakan.

## Efisiensi Nyata Colocation Modern

Langkah repatriasi ini bukan berarti perusahaan harus kembali membangun fasilitas ruang server ber-AC di ruang bawah tanah kantor mereka. Pendekatan modern bertumpu pada penyewaan rak di pusat data profesional (*colocation*) dengan memasang perangkat keras server mandiri yang dirancang khusus.

Dengan ketersediaan perkakas orkestrasi open source modern seperti Kubernetes, Proxmox, dan Linux modern, satu tim DevOps kecil kini mampu mengelola ratusan server fisik dengan tingkat otomatisasi yang setara dengan layanan cloud publik. Kasus nyata dari sejumlah platform teknologi global menunjukkan keberhasilan memangkas tagihan infrastruktur hingga jutaan dolar per tahun hanya dalam hitungan bulan setelah menarik beban kerja database utama ke server fisik.

## Kematangan Arsitektur Hybrid

Langkah meninggalkan hyperscaler bukan berarti menolak teknologi cloud secara membabi-buta. Pendekatan yang paling matang adalah menerapkan arsitektur hybrid: beban kerja dasar yang stabil dan intensif data dijalankan di server colocation mandiri, sementara lonjakan lalu lintas musiman tetap dialirkan ke cloud publik.

Kedaulatan infrastruktur digital menuntut kalkulasi ekonomi yang jujur. Mengikuti tren tanpa menghitung neraca keuangan jangka panjang adalah kekeliruan fatal dalam rekayasa sistem. Di tengah tuntutan efisiensi korporat yang kian ketat, kemampuan menguasai perangkat keras fisik kembali menjadi keunggulan kompetitif yang tak ternilai bagi para insinyur teknologi.`
  },
  {
    title: "Erosi 'Sense of Discovery' di Game Modern: Ketika Layar Dipenuhi Ratusan Penanda Mini-Map",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Desain Game", "Open World", "Gamer", "UI UX", "RPG"],
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pemain game sedang menatap monitor komputer yang menampilkan visual dunia fantasi luas",
    excerpt: "Dunia game open-world modern semakin luas dan memukau secara grafis, namun sensasi petualangan murni kian sirna. Pemain tak lagi menjelajah bentang alam, melainkan terpaku mengejar titik ikon di kompas navigasi.",
    content: `Membuka peta dalam game petualangan dunia terbuka (*open-world*) keluaran terbaru kini kerap memberikan sensasi yang mirip dengan membuka aplikasi peta digital di jam sibuk ibukota. Layar seketika dipenuhi ratusan titik penanda warna-warni: ikon peti harta karun, menara pengintai, titik kumpul misi sampingan, hingga penanda monster buronan yang semuanya telah tercantum lengkap dengan kalkulasi jarak meter yang presisi.

Visual dunia yang dibangun oleh ribuan seniman grafis 3D selama bertahun-tahun dengan dana triliunan rupiah tampak sangat spektakuler. Namun ironisnya, mata pemain justru menghabiskan mayoritas waktu permainan dengan terpaku pada lingkaran mini-map di pojok layar atau garis kompas navigasi di bagian atas. Kita tidak lagi menikmati pemandangan jurang terjal atau reruntuhan kuil kuno; kita hanya berjalan lurus mengikuti garis imajiner menuju titik objektif berikutnya.

## Dari Petualangan Murni Menjadi Checklist Pekerjaan

Hilangnya sensasi penemuan (*sense of discovery*) berakar dari pergeseran filosofi desain antarmuka permainan. Pada masa lalu, game mengajak pemain untuk benar-benar mengamati lingkungan sekitar. Petunjuk arah diberikan melalui dialog karakter non-pemain (NPC), landmark geografis yang mencolok—seperti puncak gunung bersalju atau pohon raksasa di kejauhan—serta perubahan vegetasi alam.

Kini, demi memastikan tidak ada satu pun konten yang terlewat oleh pemain kasual, pengembang memilih jalan pintas berupa penuntunan berlebih (*over-guidance*):

* **Mini-Map yang Terlalu Cerewet**: Informasi lokasi musuh, rute jalan terpendek, dan posisi item rahasia langsung dipaparkan di peta mini, melumpuhkan insting observasi visual pemain.
* **Sistem Vision Penglihatan Tembus Pandang**: Menekan satu tombol langsung mengubah layar menjadi filter monokrom yang menyorot musuh dan jejak kaki di balik tembok beton, meniadakan elemen kejutan dan ketegangan.
* **Misi Berbasis Daftar Belanja**: Struktur quest dirancang seperti daftar belanjaan supermarket yang harus dicentang satu per satu demi imbalan poin pengalaman (*XP*), bukan eksplorasi yang didorong oleh rasa penasaran murni.

## Pelajaran Berharga dari Desain Minimalis

Keberhasilan masif judul-judul game inovatif belakangan ini membuktikan bahwa para gamer sesungguhnya sangat merindukan kebebasan bereksplorasi tanpa disuapi tutorial tanpa henti. Ketika sebuah game berani mematikan mini-map dan membiarkan pemain tersesat di tengah hutan lebat, rasa pencapaian saat menemukan gua rahasia terasa puluhan kali lipat lebih berharga.

Eksplorasi yang bermakna menuntut rasa percaya dari pengembang kepada kecerdasan pemainnya. Membiarkan pemain menafsirkan petunjuk visual di lanskap alam, menyimak gemericik air terjun tersembunyi, atau membaca peta fisik tanpa bantuan navigasi otomatis adalah esensi utama dari petualangan interaktif.

## Mengembalikan Kemegahan Dunia Virtual

Sebuah dunia permainan yang memukau semestinya dirasakan, bukan sekadar dipindai layaknya lembar kode batang. Antarmuka permainan seharusnya berfungsi sebagai jembatan yang tak kasat mata, bukan lapisan dinding informasi tebal yang mengisolasi pemain dari karya seni di baliknya.

Para perancang game modern perlu berani menarik kembali rentetan ikon penanda yang membombardir layar. Dengan memberi ruang bagi kesunyian, ketidakpastian, dan kebebasan navigasi mandiri, video game dapat mengembalikan kembali daya magis petualangan yang selama ini terkikis oleh algoritma efisiensi.`
  },
  {
    title: "Matinya Waktu Senggang Murni: Mengapa Otak Kita Menolak Istirahat Tanpa Ditemani Audio dan Layar",
    category: "budaya",
    byline: "0100MUNS3DJSD97205CCB31353", // Sarah Dilla
    tags: ["Budaya", "Gaya Hidup", "Kesehatan Mental", "Urban", "Produktivitas", "Mindfulness"],
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang duduk termenung di kafe sambil memegang cangkir hangat tanpa menyentuh layar smartphone",
    excerpt: "Mencuci piring, berjalan kaki, atau sekadar menunggu lampu merah kini terasa hampa tanpa earphone menyala di telinga. Budaya optimasi tanpa henti membuat keheningan melamun dianggap sebagai dosa kemalasan.",
    content: `Kapan terakhir kali Anda melakukan aktivitas harian sederhana—seperti melipat pakaian, berjalan kaki ke minimarket terdekat, atau mencuci piring di dapur—dalam keheningan total tanpa ditemani apa pun? Bagi mayoritas masyarakat urban hari ini, skenario tersebut terasa sangat asing dan hampir mustahil dilakukan. 

Sebelum tangan kita menyentuh spons cuci piring atau melangkahkan kaki keluar pintu rumah, refleks pertama tubuh adalah meraih earphone nirkabel, memasangnya di telinga, lalu menyetel podcast informatif, rekaman diskusi buku dengan kecepatan 1,5 kali, atau video ringkasan berita di platform streaming. Kita merasa bahwa setiap detik hening yang terlewat tanpa asupan informasi eksternal adalah pemborosan waktu yang sia-sia.

## Hantu Produktivitas Beracun di Ruang Privat

Kecemasan terhadap keheningan ini merupakan buah dari internalisasi budaya optimasi tanpa henti (*toxic productivity*). Lingkungan kerja modern mengondisikan kita untuk selalu mengukur nilai diri berdasarkan produktivitas terukur. Pola pikir efisiensi industrial tersebut tanpa sadar kita terapkan ke sudut paling intim dari kehidupan personal kita.

Membuka ruang bagi waktu luang pasif kini dicap sebagai tanda kemalasan yang patut disesali. Fenomena ini melahirkan berbagai gejala perilaku baru di masyarakat urban:

* **Konsumsi Konten Berkecepatan Tinggi**: Mendengarkan narasi buku audio atau wawancara dengan percepatan 1.5x hingga 2x demi ambisi menuntaskan puluhan materi dalam satu pekan.
* **Fobia Keheningan Ruang Mental**: Merasa cemas, gelisah, atau disergap pikiran negatif ketika berada di ruangan sunyi selama lima menit saja tanpa ada suara latar (*white noise* atau obrolan digital).
* **Ilusi Perkembangan Diri (*Self-Improvement Illusion*)**: Menjejali kepala dengan ratusan kiat sukses dan rangkuman strategi bisnis saat memasak sarapan, namun otak sebetulnya tidak mampu menyerap maupun mempraktikkan satu pun dari gagasan tersebut.

## Mengapa Otak Manusia Membutuhkan Waktu Melamun

Para ahli neurosains telah lama membuktikan bahwa momen melamun tanpa stimulasi sensorik eksternal bukanlah ketidakefektifan biologis. Ketika kita tidak sedang fokus mengerjakan tugas tertentu, sebuah jaringan saraf di otak yang disebut Default Mode Network (DMN) akan aktif bekerja.

Jaringan DMN inilah yang memproses pengalaman emosional masa lalu, mengonsolidasikan ingatan jangka panjang, memicu empati sosial, dan melahirkan percikan kreativitas tak terduga. Ketika kita terus-menerus membanjiri indra pendengaran dan penglihatan dengan narasi orang lain sepanjang hari, aktivitas DMN ini tertekan secara drastis. Pikiran kita tidak pernah diberikan ruang hening untuk menyortir dan mencerna apa yang telah dialami.

Akibatnya, kita kerap merasa lelah secara psikologis dan tumpul secara kreatif meskipun tubuh sedang berada dalam kondisi duduk santai di atas sofa rumah.

## Mengembalikan Kedaulatan Melamun

Memulihkan hubungan sehat dengan kesunyian tidak menuntut kita untuk mengasingkan diri ke tengah hutan belantara. Kuncinya adalah keberanian sadar untuk melepaskan earphone dan mengizinkan pikiran kita berkelana tanpa panduan skrip konten.

Cobalah sesekali berjalan di sore hari hanya dengan menyimak suara desir angin, gemerisik dedaunan, dan dengung roda kendaraan yang melintas. Biarkan pikiran Anda mengembara bebas tanpa tujuan performatif. Ruang tenang yang kita berikan pada diri sendiri bukanlah kekosongan hampa, melainkan ruang bernapas yang paling hakiki bagi kejernihan jiwa manusia.`
  }
];

async function main() {
  console.log("=== MEMULAI BATCH AUTO-PUBLISH TUJUHCAHAYA (JADWAL 20:30 WIB / TIAP 30 MENIT) ===");
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

  console.log("\n=== SELURUH BATCH 20:30 BERHASIL DIPUBLIKASIKAN ===");
}

main().catch(err => {
  console.error("Batch Error:", err);
  process.exit(1);
});
