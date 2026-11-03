import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Ilusi Privasi Mode Incognito di Browser: Bagaimana Sidik Jari Digital Tetap Melacak Anda Tanpa Riwayat Lokal",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Privasi", "Browser", "Keamanan Siber", "Canvas Fingerprinting", "Big Tech"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Tampilan kode biner hijau di layar monitor gelap yang merepresentasikan privasi data",
    excerpt: "Membuka jendela penyamaran gelap berlogo kacamata dan topi sering disangka membuat aktivitas berinternet kebal pelacakan. Padahal mode penyamaran hanya mengosongkan riwayat lokal di laptop Anda, sementara skrip pelacak pihak ketiga tetap mengenali sidik jari perangkat keras Anda.",
    content: `Bagi jutaan pengguna internet, kombinasi pintasan kibor untuk membuka jendela penyamaran (*Incognito Window*) terasa seperti jubah tembus pandang digital. Tampilan antarmuka yang berubah menjadi gelap gulita, lengkap dengan ikon fedora dan kacamata misterius, menumbuhkan keyakinan psikologis bahwa seluruh jejak pencarian, situs yang dikunjungi, dan data pribadi telah lenyap tanpa bekas dari pantauan jagat maya.

Namun rasa aman tersebut sejatinya hanyalah ilusi pemasaran yang sengaja dibiarkan mengaburkan pemahaman publik. Mode penyamaran hanya melakukan satu tugas sederhana: menolak menyimpan riwayat peramban, kuki sesi, dan berkas singgahan secara lokal di hard disk komputer Anda. Di luar mesin pribadi Anda, lalu lintas data tetap terpampang telanjang bagi penyedia jasa internet (ISP), administrator jaringan kantor, dan raksasa periklanan digital.

## Anatomi Pelacakan Kanvas dan Sidik Jari Perangkat

Bahkan tanpa adanya kuki pelacak konvensional, korporasi periklanan modern menggunakan teknik pengenalan sidik jari perangkat (*device fingerprinting*) yang sangat agresif:

* **Eksploitasi Elemen HTML5 Canvas**: Skrip pelacak memerintahkan peramban menggambar teks dan bentuk grafis tersembunyi di latar belakang. Karena setiap kombinasi kartu grafis, driver perangkat keras, dan mesin perender huruf menghasilkan variasi piksel mikro yang unik, sistem dapat membuat tanda tangan digital permanen (*canvas hash*) untuk mengenali Anda.
* **Pembacaan Metadata Perangkat Keras Tanpa Izin**: Skrip situs web dapat dengan mudah menginterogasi resolusi layar, persentase daya baterai, daftar fon yang terpasang, zona waktu lokal, hingga konfigurasi arsitektur prosesor Anda, menghasilkan akurasi pelacakan di atas sembilan puluh persen lintas tab.
* **Pencatatan Alamat IP oleh Server Tujuan**: Mode penyamaran sama sekali tidak menyembunyikan alamat protokol internet (IP) asli Anda. Setiap server yang Anda hubungi tetap mengantongi catatan log lengkap mengenai lokasi geografis dan penyedia jaringan yang Anda pakai.

## Merebut Kembali Kendali Privasi yang Bermartabat

Bila Anda sungguh-sungguh menginginkan ruang jelajah yang bebas dari pengawasan komersial, langkah perlindungan harus melampaui sekadar menekan tombol Incognito:

1. **Gunakan Peramban Berfokus Privasi Ketat**: Beralihlah ke peramban independen seperti Brave, LibreWolf, atau Mullvad Browser yang secara bawaan mengacak output kanvas dan memblokir skrip telemetri pihak ketiga.
2. **Manfaatkan Jaringan Enkripsi Multi-Lapis**: Gunakan jaringan Tor atau layanan VPN tanpa pencatatan log (*no-logs policy*) yang telah diaudit independen untuk menyamarkan alamat IP dari penyedia jaringan.
3. **Pasang Ekstensi Pelindung Jejak Skrip**: Pasang pemblokir konten tingkat lanjut seperti uBlock Origin untuk memotong eksekusi skrip pelacak analitik sebelum sempat dijalankan di peramban.

Kerahasiaan data adalah hak asasi setiap warga digital. Jangan biarkan ilusi jendela gelap meninabobokan kewaspadaan Anda terhadap industri pengintaian modern.`
  },
  {
    title: "Kepunahan Demo Game Gratis yang Dapat Diunduh: Ketika Industri Memaksa Gamer Membeli Kucing dalam Karung",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Desain Game", "Industri Game", "Demo Game", "Steam", "Gamer"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ruang bermain game dengan konsol dan monitor yang menyala di meja kayu",
    excerpt: "Dulu, pemain dapat menguji babak prolog dan kecocokan performa game di PC mereka secara cuma-cuma lewat berkas demo mandiri. Kini penerbit mematikan tradisi tersebut, menggantinya dengan video promosi sinematik yang kerap menipu kenyataan grafis aslinya.",
    content: `Bagi generasi pemain game yang tumbuh di era keemasan majalah cetak dan peluncuran konsol klasik, tidak ada yang menandingi sensasi memasukkan cakram kompilasi demo ke dalam pemutar optik. Cakram tersebut memuat lima hingga sepuluh potongan game terbaru yang dapat dicoba secara bebas di ruang keluarga. Pemain dapat merasakan langsung responsivitas tombol kendali, menguji kestabilan frame rate pada spesifikasi komputer pribadi, serta memastikan apakah mekanika permainannya sungguh menyenangkan sebelum merogoh kocek tabungan.

Kini, tradisi uji coba gratis yang sehat bagi konsumen tersebut telah sengaja dilenyapkan dari etalase toko digital arus utama. Penerbit game kelas kakap enggan merilis demo yang dapat dimainkan mandiri (*standalone playable demo*). Sebagai gantinya, calon pembeli disuguhi rentetan trailer sinematik hasil render studio pra-produksi yang telah dipoles dengan efek visual berlebihan, kerap kali menyembunyikan kondisi teknis game yang sebenarnya masih compang-camping dan sarat galat.

## Mengunci Hak Uji Coba di Balik Dinding Langganan Berbayar

Penghapusan demo gratis bukan kecelakaan sejarah, melainkan strategi bisnis terencana yang merugikan komunitas gamer:

* **Komersialisasi Akses Uji Coba Terbatas**: Fitur mencoba permainan selama dua jam kini diubah menjadi komoditas langganan premium (seperti layanan PlayStation Plus tingkat tertinggi). Gamer dipaksa membayar biaya bulanan mahal semata-mata demi hak dasar untuk mengetahui apakah sebuah produk layak dibeli atau tidak.
* **Perangkap Batas Waktu Pengembalian Dana Dua Jam**: Di etalase komputer seperti Steam, kebijakan pengembalian dana (*refund*) dibatasi maksimal dua jam waktu bermain. Penerbit mengakali aturan ini dengan merancang bab pembuka yang sangat lambat—diisi tutorial panjang dan cutscene yang tak bisa dilewati—sehingga pemain melewati batas dua jam sebelum menyadari bahwa babak selanjutnya penuh bug parah dan penurunan performa grafis.
* **Ketakutan Penerbit Terhadap Keputusan Rasional Konsumen**: Riset pemasaran internal industri menunjukkan bahwa perilisan demo berkualitas sering kali menurunkan angka pra-pesan (*pre-order*). Ketika gamer menyadari mekanika permainan ternyata repetitif dan membosankan, mereka membatalkan pesanan. Oleh karena itu, penerbit lebih memilih mengunci informasi dengan embargo ulasan hingga menit-menit menjelang peluncuran resmi.

## Mengembalikan Budaya Transparansi Karya Interaktif

Medium video game adalah karya interaktif yang dinilai dari sentuhan rasa kendali jemari pemain, bukan dari kemilau poster promosi dua dimensi:

1. **Tolak Budaya Pra-Pesan Buta (*Never Pre-Order*)**: Tahan godaan bonus kosmetik digital yang fana dan tunggu hingga ulasan independen serta rekaman gameplay pemain nyata beredar luas di forum publik.
2. **Dukung Festival Coba Game Independen**: Apresiasi inisiatif seperti Steam Next Fest yang memberi panggung bagi studio independen untuk membagikan ratusan demo permainan segar secara cuma-cuma kepada komunitas.
3. **Tuntut Hak Transparansi Tolok Ukur Kinerja**: Komunitas berhak menuntut pengembang menyertakan fitur tolok ukur (*benchmark*) gratis yang dapat diunduh tanpa syarat untuk menguji kesiapan kartu grafis komputer pengguna.

Hormatilah uang hasil jerih payah Anda. Jangan pernah membeli karya hiburan digital sebelum Anda membuktikan sendiri kualitas dan integritas teknisnya.`
  },
  {
    title: "Bahaya Mengabaikan Nyeri Sendi Pergelangan Tangan: Mengapa Keyboard Datar Tipis Diam-diam Menjepit Saraf Karpal",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Ergonomi", "Carpal Tunnel", "Kesehatan Kerja", "Sendi", "Produktivitas"],
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Sepasang tangan mengetik di atas keyboard komputer di meja kerja kantor minimalis",
    excerpt: "Sensasi kesemutan di ujung jari dan pegal menusuk di pangkal telapak tangan kerap diabaikan sebagai kelelahan kerja biasa. Padahal mengetik berjam-jam di atas keyboard datar tipis memaksa pergelangan tangan menekuk tajam, menjepit saraf medianus di lorong karpal.",
    content: `Di era kerja jarak jauh dan maraknya meja kantor bergaya minimalis, tren perangkat keras komputer bergerak menuju desain serba tipis dan datar. Papan ketik ramping berbahan aluminium dengan tombol membran berjarak tekan pendek (*low-travel chiclet keys*) dipuja karena estetika visualnya yang bersih di atas meja kerja kayu.

Namun keindahan desain minimalis tersebut sering kali dibayar mahal oleh kesehatan sendi dan urat syaraf tangan penggunanya. Setelah duduk mengetik dokumen atau baris kode selama delapan jam berturut-turut, banyak pekerja mulai merasakan sensasi kebas, kesemutan seperti tertusuk jarum pada ibu jari dan jari telunjuk, serta ngilu pegal yang merambat hingga ke siku lengan. Gejala awal ini adalah sinyal bahaya terjadinya kompresi saraf di lorong karpal (*Carpal Tunnel Syndrome*).

## Mekanika Tekanan Lorong Karpal dan Kerusakan Saraf Medianus

Secara anatomi medis, pergelangan tangan manusia memiliki saluran sempit berotot yang disebut lorong karpal, jalur tempat melintasnya sembilan tendon fleksor dan saraf medianus utama:

* **Deviasi Ulnar dan Ekstensi Pergelangan Ekstrem**: Menggunakan keyboard datar tanpa sandaran telapak tangan memaksa pergelangan tangan mendongak ke atas (*dorsiflexion*) dan menekuk ke arah luar (*ulnar deviation*). Posisi janggal ini meningkatkan tekanan hidrostatik di dalam lorong karpal hingga tiga kali lipat di atas batas normal.
* **Friksi Berulang dan Pembengkakan Selubung Tendon**: Mengetik puluhan ribu ketukan tombol setiap hari dengan bantalan tombol yang keras menghasilkan gelombang kejut mikro langsung ke ujung jari. Gesekan konstan ini memicu peradangan pada selubung sinovial tendon, yang kemudian membengkak dan menekan saraf medianus hingga pasokan darah lokal terhambat.
* **Degenerasi Otot Tenar dan Penurunan Daya Cengkeram**: Bila dibiarkan tanpa penanganan medis selama berbulan-bulan, kerusakan saraf medianus dapat menyebabkan atrofi permanen pada bantalan otot ibu jari (*thenar eminence*), membuat penderita kehilangan kemampuan menggenggam cangkir kopi atau memutar anak kunci pintu dengan kokoh.

## Membangun Kebiasaan Mengetik yang Ramah Biomekanika

Mencegah cedera regangan berulang (*repetitive strain injury*) menuntut perombakan postur dan pemilihan alat kerja yang sadar ergonomi:

1. **Jaga Garis Lurus Lengan Bawah dan Telapak Tangan**: Posisikan tinggi kursi dan meja sedemikian rupa sehingga siku membentuk sudut siku-siku sembilan puluh derajat dan pergelangan tangan berada dalam posisi netral horizontal tanpa mendongak.
2. **Pertimbangkan Papan Ketik Ergonomis Terpisah (*Split Keyboard*)**: Desain papan ketik yang terbelah dua memungkinkan masing-masing tangan mengetik sesuai dengan sudut pundak alami, melenyapkan tekanan puntir pada tulang lengan bawah (*pronation*).
3. **Lakukan Peregangan Tendon Gliding Setiap Dua Jam**: Sisihkan waktu tiga menit di antara tenggat pekerjaan untuk merentangkan jemari, memutar pergelangan tangan secara perlahan, dan menekuk jari lembut ke arah belakang guna melancarkan sirkulasi cairan sendi.

Karier profesional Anda bergantung pada keutuhan saraf dan jemari tangan Anda. Rawatlah perkakas biologis tersebut dengan rasa hormat sebelum rasa nyeri menjelma menjadi disabilitas kerja permanen.`
  },
  {
    title: "Kematian Tradisi Lagu B-Side: Mengapa Musisi Kehilangan Ruang Eksperimen Bebas di Luar Tuntutan Single Komersial",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Industri Musik", "B-Side", "Streaming", "Produksi Audio", "Seniman"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Piringan hitam vinil klasik berputar di atas meja putar pemutar rekaman",
    excerpt: "Di era rilisan fisik kaset dan piringan hitam, sisi belakang rekaman (B-side) adalah laboratorium liar tempat musisi bebas bereksperimen tanpa beban pasar. Di era platform streaming digital berbasis algoritma metrik lagu tunggal, ruang eksplorasi artistik tersebut telah dilenyapkan.",
    content: `Dalam sejarah perkembangan musik populer abad ke-20, piringan vinil tujuh inci dan kaset pita memiliki keunikan format fisik yang melahirkan tradisi budaya istimewa: pembagian Sisi A dan Sisi B. Sisi A (*A-side*) adalah etalase komersial yang dipersiapkan produser untuk diputar di pemancar radio gelombang pendek demi memuncaki tangga lagu penjualan. Sementara Sisi B (*B-side*) adalah wilayah kedaulatan mutlak milik para musisi.

Di sisi belakang yang sunyi tersebut, para pembuat lagu merasa terbebas dari tuntutan dewan direksi label rekaman. Mereka berani merekam aransemen akustik mentah di garasi rumah, memasukkan instrumen etnik ganjil, menyusun puisi spoken word yang surealis, atau mencoba distorsi gitar eksperimental yang belum pernah didengar sebelumnya. Banyak dari nomor B-side ini—seperti lagu legendaris "Penny Lane" karya The Beatles atau "Yellow Ledbetter" milik Pearl Jam—justru bertransformasi menjadi karya agung yang abadi dan dicintai penggemar sejati melebihi single utamanya.

## Runtuhnya Ruang Laboratorium di Era Hitungan Detik Streaming

Transisi menuju ekosistem pemutar musik berbasis awan telah melenyapkan dinamika Sisi B secara sistemik:

* **Tuntutan Algoritma Nilai Metrik Tunggal**: Platform streaming modern menilai keberhasilan sebuah rilisan dari seberapa cepat lagu tersebut masuk ke dalam daftar putar rekomendasi algoritmik. Menaruh lagu berirama eksperimental atau berdurasi panjang dianggap sebagai bunuh diri komersial karena pendengar kasual akan segera menekan tombol lewati (*skip*), menurunkan peringkat kurasi otomatis seluruh katalog sang musisi.
* **Matematisasi Biaya Produksi Berbasis Royalti Pecahan Rupiah**: Karena pendapatan streaming dihitung per putaran tunggal yang bernilai sepersekian sen, studio rekaman enggan mendanai sesi rekaman untuk lagu-lagu yang dipandang tidak memiliki potensi viral di media sosial. Musisi dipaksa memeras seluruh energi kreatif hanya untuk merancang formula melodi pembuka lima belas detik yang ramah potongan video pendek.
* **Keseragaman Format Single Digital Lepas**: Alih-alih merilis paket karya yang memiliki nuansa kontras dan kedalaman narasi, label kini lebih memilih strategi merilis satu single setiap bulan secara mekanis. Akibatnya, musik pop modern kehilangan karya sampingan yang memiliki jiwa petualangan dan ketidaksempurnaan artistik yang menawan.

## Merawat Kembali Keberanian Bereksperimen Tanpa Batas

Kekayaan sebuah ekosistem kebudayaan tidak dapat diukur semata-mata dari daftar sepuluh lagu terpopuler yang diputar seragam di pusat perbelanjaan:

1. **Dukung Rilisan Mandiri Melalui Platform Bandcamp**: Belilah karya rekaman musisi secara utuh melalui kanal yang menghargai keberadaan trek demo mentah, edisi instrumental, dan materi rekaman alternatif yang tidak disaring algoritma korporasi.
2. **Koleksi Format Fisik dan Zine Komunitas**: Rawatlah kembali tradisi berburu rilisan kaset pita independen dan piringan hitam edisi terbatas yang masih setia menyertakan trek bonus eksklusif bagi pendengar setia.
3. **Beri Ruang Apresiasi Bagi Karya yang Tak Lazim**: Bukalah telinga Anda untuk mendengarkan lagu-lagu di luar lagu hits radio. Di dalam ketidaksempurnaan aransemen yang berani itulah denyut kejujuran seorang seniman sejati bersemayam.

Dukunglah musisi yang berani merusak formula pasar. Tanpa keberanian mencoba jalur samping yang liar, musik hanya akan berputar menjadi komoditas industri yang hampa makna.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 14:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

    // 2. Publish (Local SQLite & Outbox JSON, optional Remote)
    const syncRemote = process.env.SYNC_REMOTE === '1' || process.argv.includes('--remote');
    console.log(`Mempublikasikan ke Local DB & Outbox (remote: ${syncRemote})...`);
    const res = await autoPublishPost(art, { remote: syncRemote });
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

  console.log("\n=== SELURUH BATCH 14:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-1400.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
