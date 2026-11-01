import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

const articles = [
  {
    title: "Matinya Kepemilikan Gadget: Ketika Fitur Hardware Dikunci di Balik Langganan Bulanan",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Hardware", "Langganan", "Hak Konsumen", "Right to Repair", "Industri Gadget"],
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Peralatan elektronik dan sirkuit motherboard modern di meja kerja perakitan hardware",
    excerpt: "Membeli perangkat elektronik seharga puluhan juta rupiah kini bukan jaminan akses penuh. Pabrikan mulai mengunci fungsi fisik komponen di balik dinding langganan berbayar bulanan.",
    content: `Bayangkan Anda membeli sebuah mobil, printer, atau smartphone dengan harga puluhan juta rupiah, namun komponen fisik yang sudah terpasang di dalamnya menolak berfungsi kecuali Anda membayar biaya sewa bulanan. Skenario yang dulu terdengar seperti lelucon distopia kini resmi menjadi kenyataan dalam lanskap bisnis perangkat keras global.

Dari kursi pemanas mobil mewah yang membutuhkan langganan ratusan ribu rupiah per bulan, printer yang memblokir fungsi pemindaian dokumen jika langganan tinta dibatalkan, hingga kamera pintar yang mengunci sudut rotasi fisik di balik paket premium—model bisnis *hardware-as-a-service* sedang menggerus definisi kepemilikan konsumen secara agresif.

## Rekayasa Finansial Berkedok Fleksibilitas

Alasan yang kerap didengungkan korporasi manufaktur terdengar manis: efisiensi lini perakitan dan keleluasaan bagi konsumen untuk hanya membayar fitur yang mereka butuhkan. Pabrikan memproduksi satu varian hardware yang identik secara massal di pabrik, lalu mengaktifkan atau menonaktifkan fitur melalui pembaruan firmware berkala.

Namun di balik retorika efisiensi tersebut, tersimpan motif finansial yang dingin:

* **Mengejar Pendapatan Berulang (*Recurring Revenue*)**: Di mata investor Wall Street, pendapatan satu kali dari penjualan produk fisik dianggap tidak semenarik arus kas langganan berulang yang stabil tiap kuartal.
* **Membatalkan Hak Perbaikan Mandiri (*Right to Repair*)**: Komponen hardware yang terikat erat dengan enkripsi server pusat membuat teknisi independen mustahil melakukan perbaikan tanpa otorisasi kunci digital dari pabrikan.
* **Perendahan Status Pemilik Menjadi Penyewa Abadi**: Konsumen menanggung seluruh risiko depresiasi aset fisik dan biaya perawatan suku cadang, namun pabrikan tetap memegang kendali penuh atas fungsi perangkat dari jarak jauh.

## Sandera Digital di Ruang Fisik

Praktik penguncian hardware menimbulkan dilema etis dan hukum yang sangat mendasar. Ketika seseorang telah membayar lunas seluruh harga material, silikon, tembaga, dan baterai yang ada di dalam perangkat tersebut, secara moral dan hukum kepemilikan benda fisik telah berpindah tangan sepenuhnya. 

Mematikan fungsi pemanas kursi, kecepatan prosesor grafis, atau resolusi kamera yang secara fisik sudah ada di dalam genggaman tangan pembeli melalui sakelar digital dari server jarak jauh adalah bentuk penyerobotan kedaulatan konsumen. Jika pabrikan suatu hari bangkrut atau memutuskan mematikan server autentikasi, perangkat keras bernilai tinggi tersebut seketika kehilangan separuh fungsi vitalnya.

Kondisi ini diperparah oleh klausul perjanjian lisensi pengguna akhir (*EULA*) yang panjang dan rumit, di mana konsumen dipaksa menyetujui perubahan aturan main sepihak tanpa opsi negosiasi.

## Menegakkan Batas Kedaulatan Konsumen

Keserakahan model langganan pada perangkat fisik tidak boleh dinormalisasi sebagai kemajuan teknologi. Lembaga perlindungan konsumen dan pembuat kebijakan di berbagai negara mulai mengkaji regulasi tegas untuk melarang pabrikan mengunci kapasitas fisik perangkat keras yang sudah dibeli konsumen secara lunas.

Kepemilikan sejati bukan sekadar hak untuk memegang barang di atas meja, melainkan hak otonom untuk menggunakan fungsi materialnya tanpa izin sewa berkala. Sudah saatnya publik menolak masa depan di mana kita membayar penuh untuk membeli sebuah gadget, namun diperlakukan seperti pengontrak yang bisa diusir kapan saja oleh algoritma pabrikan.`
  },
  {
    title: "Jebakan Game Live-Service: Mengapa Raksasa Game Berbujet Ratusan Juta Dolar Runtuh dalam Hitungan Bulan",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Industri Game", "Live Service", "PlayStation", "Gamer", "Desain Game"],
    imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pemain memegang kontroler konsol game dengan latar belakang pencahayaan monitor neon gelap",
    excerpt: "Raksasa penerbit game terobsesi mengejar tambang emas Fortnite berikutnya. Tragedi penutupan server berbiaya ratusan juta dolar membuktikan bahwa waktu luang pemain bukanlah sumber daya tanpa batas.",
    content: `Tahun-tahun belakangan menjadi saksi kuburan massal bagi deretan judul game berlabel harga produksi astronomis. Game tembak-menembak daring yang dikembangkan selama delapan tahun dengan anggaran ratusan juta dolar ditutup permanen hanya dua pekan setelah peluncuran. Judul-judul lain yang didanai korporasi raksasa bernasib tak kalah getir: ditinggalkan pemain dalam hitungan bulan, memicu pemutusan hubungan kerja ribuan pengembang berbakat.

Penyebab bencana industri ini berpangkal pada satu obsesi tunggal para eksekutif studio: memaksakan format *live-service* pada setiap proyek yang mereka biayai demi memburu pendapatan mikrotransaksi tanpa henti.

## Ilusi Tambang Emas Tanpa Batas

Keberhasilan segelintir raksasa seperti *Fortnite*, *Apex Legends*, atau *Counter-Strike* menyilaukan mata dewan direksi penerbit game. Mereka membayangkan jika sebuah game dirilis sebagai platform daring yang terus diperbarui dengan *battle pass*, *skin* karakter berkilau, dan acara musiman, mereka akan menikmati aliran uang kas abadi dari kantong pemain.

Namun para petinggi industri melupakan satu hukum matematika dasar:

* **Keterbatasan Waktu Luang Manusia**: Seorang gamer mungkin memiliki uang untuk membeli sepuluh game pemain tunggal setahun, tetapi mereka hanya memiliki waktu dan atensi untuk mendedikasikan hidup pada satu atau dua game kompetitif daring secara intensif.
* **Formula Desain yang Seragam dan Menjemukan**: Demi mengejar metrik retensi harian, game dirancang layaknya pekerjaan paruh waktu kedua dengan misi harian (*daily quest*) repetitif, alih-alih menyajikan kejutan mekanik yang menyenangkan.
* **Biaya Pemeliharaan yang Mencekik**: Menjaga server global tetap aktif, memoderasi komunitas, serta merilis konten berkala menuntut biaya operasional harian yang sangat tinggi; begitu jumlah pemain harian merosot, proyek tersebut langsung merugi parah.

## Ketika Seni Bercerita Dikorbankan

Tragedi terbesar dari demam *live-service* adalah terpinggirkannya studio-studio legendaris yang sebelumnya piawai merajut narasi pemain tunggal yang memikat. Talenta penulis cerita, komposer musik latar, dan perancang level yang jenius dipaksa menyusun sistem toko digital dan kosmetik virtual yang tidak mereka kuasai.

Hasilnya adalah game-game berwajah hibrida tanpa jiwa: terlalu hambar untuk dinikmati sebagai karya petualangan naratif mendalam, dan terlalu telat serta kaku untuk menyaingi raksasa kompetitif yang telah menguasai pasar selama satu dekade.

Pemain modern tidak bodoh. Mereka mampu mencium bau komersialisasi murahan dari kejauhan. Ketika sebuah game terasa lebih mirip etalase toko kasino daripada taman bermain petualangan magis, pemain tidak ragu untuk segera mencopot instalasi game tersebut dari media penyimpanan mereka.

## Kerinduan pada Pengalaman yang Berakhir

Keruntuhan beruntun proyek *live-service* beranggaran raksasa ini semestinya menjadi lonceng peringatan keras bagi industri video game internasional. Kesuksesan karya seni interaktif tidak diukur dari seberapa lama algoritma mampu menyandera rentang atensi seseorang di depan layar.

Ada keindahan tak tergantikan dari game yang berani menyajikan pengalaman yang utuh: memiliki pembuka yang memikat, konflik yang menantang, dan bab penutup yang menyentuh hati tanpa menodongkan kartu kredit pemain di setiap menu jeda. Sudah saatnya industri kembali menghormati waktu luang pemain, bukan sekadar memandangnya sebagai ladang panen metrik yang bisa dieksploitasi tanpa batas.`
  },
  {
    title: "Hilangnya Third Place: Mengapa Generasi Urban Makin Terisolasi Tanpa Ruang Publik Bebas Biaya",
    category: "budaya",
    byline: "0100MUNS3DJSD97205CCB31353", // Sarah Dilla
    tags: ["Budaya", "Urban", "Sosiologi", "Kesehatan Mental", "Ruang Publik", "Gaya Hidup"],
    imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Sekelompok anak muda duduk mengobrol santai di bangku taman kota saat senja hari",
    excerpt: "Tempat pertama adalah rumah, tempat kedua adalah kantor. Namun hilangnya tempat ketiga di mana orang bisa bersosialisasi tanpa kewajiban membeli kopi mahal memicu krisis kesepian massal di kota besar.",
    content: `Sosiolog Ray Oldenburg pada akhir dekade 1980-an merumuskan konsep penting dalam dinamika masyarakat sipil yang sehat: keberadaan *third place* (ruang ketiga). Jika ruang pertama adalah rumah tempat berlindung dan ruang kedua adalah tempat kerja atau sekolah, maka ruang ketiga adalah lingkungan fisik publik di mana masyarakat dapat berkumpul, bersantai, berinteraksi secara egaliter, dan menjalin ikatan komunal tanpa beban transaksi keuangan.

Taman kota yang teduh, perpustakaan publik yang nyaman, balai warga, serta pelataran alun-alun terbuka dulunya berfungsi sebagai jangkar sosial ini. Namun bagi masyarakat urban kontemporer hari ini, ruang ketiga tersebut nyaris lenyap sepenuhnya dari peta kehidupan sehari-hari.

## Ketika Interaksi Manusia Dikenai Tarif Masuk

Di kota-kota megapolitan modern, hampir setiap jengkal ruang publik telah dikomodifikasi dan diprivatisasi. Ketika seorang pemuda ingin bertemu sahabat lamanya atau sekadar ingin duduk membaca buku di luar kamar kos yang sempit, pilihan yang tersedia hampir selalu bermuara pada pusat perbelanjaan atau kafe komersial.

Ketergantungan pada ruang komersial melahirkan berbagai friksi sosial:

* **Kewajiban Konsumsi Ekonomi**: Anda tidak bisa sekadar hadir; Anda harus membeli secangkir kopi seharga puluhan ribu rupiah demi mendapatkan hak duduk selama dua jam dan kata sandi jaringan Wi-Fi.
* **Eksklusi Sosial Berdasarkan Kelas**: Ruang-ruang swasta menyortir pengunjung secara tidak kasat mata melalui penjagaan satpam, standar pakaian, dan daftar harga menu, meminggirkan kelompok masyarakat ekonomi rentan dari ruang komunal.
* **Ilusi Ruang Virtual yang Dingin**: Media sosial daring yang kerap diklaim sebagai ruang ketiga masa kini gagal menyediakan kehangatan kontak fisik, bahasa tubuh, dan obrolan spontan tanpa filter kurasi algoritma.

## Epidemi Kesepian di Tengah Kerumunan

Hilangnya ruang ketiga fisik berkorelasi erat dengan meroketnya krisis kesehatan mental dan isolasi sosial di kalangan generasi muda urban. Kita hidup di pemukiman padat penduduk, berdesakan di gerbong transportasi publik setiap jam sibuk, namun merasa terasing secara mendalam.

Tanpa ruang bersama yang netral dan tanpa pamrih, interaksi lintas generasi dan lintas latar belakang sosial menjadi sangat langka. Orang-orang semakin terkurung dalam gelembung sosial masing-masing, memandang orang asing di sekitarnya dengan tatapan curiga dan waswas.

Keberadaan ruang publik terbuka hijau bukan sekadar soal estetika tata kota atau serapan air hujan; ia adalah instrumen keadilan sosial yang menyetarakan martabat warga. Di bangku taman publik, seorang konglomerat dan seorang buruh harian bisa duduk berdampingan menikmati semilir angin sore tanpa ada pelayan yang datang menagih pesanan tagihan meja.

## Merebut Kembali Hak Atas Kota

Kota yang beradab tidak diukur dari seberapa megah gedung pencakar langitnya atau seberapa padat pusat perbelanjaan mewah yang didirikan investor. Tolok ukur peradaban sejati terletak pada seberapa banyak ruang gratis yang disediakan pemerintah kota agar warganya dapat saling menyapa dan membangun rasa memiliki.

Membangun kembali perpustakaan komunitas yang ramah, memperbanyak jalur pedestrian berpepohonan rimbun, dan membuka lapangan terbuka hijau tanpa pungutan liar adalah investasi mendesak bagi kesehatan jiwa masyarakat urban. Ruang ketiga adalah oksigen sosial; tanpa itu, sebuah kota hanyalah mesin ekonomi raksasa yang dingin dan sunyi bagi jiwa-jiwa manusia yang terasing di dalamnya.`
  },
  {
    title: "Kebangkitan Kaset Pita dan Pemutar Analog: Romantisisme Ketidaksempurnaan Suara di Era Streaming",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Audio", "Kaset Pita", "Format Fisik", "Koleksi Musik", "Nostalgia Analog"],
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Sebuah kaset pita audio vintage diletakkan di atas pemutar tape deck analog klasik",
    excerpt: "Ketika seratus juta lagu tersedia instan di ujung jari, generasi muda justru memburu pita kaset dengan desis khasnya. Format pita magnetik menawarkan pengalaman mendengarkan yang menuntut komitmen penuh.",
    content: `Jika sepuluh tahun lalu seseorang meramalkan bahwa pita kaset audio (*cassette tape*) akan kembali diproduksi massal dan diburu oleh remaja generasi Z di berbagai toko musik independen, ramalan tersebut pasti ditertawakan sebagai lelucon usang. Kaset adalah media yang secara teknis dianggap merepotkan: pita magnetiknya rentan kusut terlilit roda pemutar, kapasitas suaranya terbatas, respons frekuensi audionya tidak seluas cakram padat, dan Anda harus memutar pensil untuk menggulung pita yang kendur.

Namun di tengah dominasi mutlak platform streaming yang menawarkan akses instan ke lebih dari seratus juta katalog musik secara cuma-cuma, pabrik-pabrik pita magnetik di Eropa dan Asia kini kewalahan melayani lonjakan pesanan album kaset dari musisi independen maupun label rekaman arus utama.

## Kejenuhan Paradoks Kelimpahan Digital

Kembalinya kaset pita bukan sekadar gaya hidup retro atau tren fesyen temporer. Ini adalah antitesis psikologis terhadap fenomena *choice fatigue* (kelelahan memilih) yang dipicu oleh algoritma streaming modern.

Ketika seluruh musik dunia tersedia dalam genggaman, nilai apresiasi terhadap sebuah karya rekaman kerap terdegradasi secara mengenaskan:

* **Matinya Pengalaman Menikmati Album Penuh**: Di aplikasi streaming, pendengar dengan mudah melompati lagu (*skip*) hanya dalam lima detik pertama jika intronya terasa lambat, merusak konsep album sebagai narasi karya yang utuh.
* **Ritual Fisik yang Menuntut Atensi Penuh**: Mendengarkan kaset menuntut keterlibatan fisik: membuka kemasan mika plastik, membaca lembar lirik lipat (*J-card*), memasukkan kaset ke pemutar, dan mendengarkan urutan trek dari sisi A hingga sisi B tanpa godaan tombol acak (*shuffle*).
* **Desis Hangat Suara Analog (*Tape Hiss*)**: Ketidaksempurnaan sonik berupa desis pita magnetik halus dan saturasi harmonik hangat memberikan karakter personal yang organik, sangat kontras dengan kepresisian digital yang dingin dan steril.

## Kedaulatan Koleksi Tanpa Kuota Internet

Bagi generasi pendengar muda yang tumbuh di tengah era kepemilikan maya berbasis komputasi awan, memegang sebuah benda fisik karya musisi idola memberikan rasa keterhubungan batin yang tidak bisa dihadirkan oleh deretan piksel di layar ponsel. Anda tidak bisa meminjamkan algoritma kepada sahabat karib Anda, tetapi Anda bisa bertukar kaset rekaman campuran (*mixtape*) yang dihiasi tulisan tangan penuh makna.

Selain itu, kaset pita menawarkan jaminan kepemilikan yang berdaulat. Lagu yang tersimpan di dalam pita magnetik Anda tidak akan mendadak dihapus dari perpustakaan pribadi hanya karena sengketa lisensi antara label rekaman dan platform digital internasional. Musik tersebut tetap menjadi milik Anda sepenuhnya selama pita magnetiknya terawat dengan baik.

Bagi musisi independen lokal, kaset pita juga menjadi pahlawan finansial. Biaya produksinya jauh lebih terjangkau dibandingkan mencetak piringan hitam (*vinyl*), namun tetap memiliki nilai apresiasi koleksi yang tinggi di etalase merchandise konser untuk mendukung kelangsungan hidup sang artis.

## Menemukan Jiwa di Dalam Ketidaksempurnaan

Musik pada hakikatnya bukan sekadar deretan angka biner berkecepatan tinggi yang dialirkan melalui kabel serat optik. Ia adalah pengalaman emosional yang membutuhkan ruang napas, waktu jeda, dan keterlibatan rasa yang tulus.

Di balik putaran roda kaset pita dan desis analognya yang sederhana, tersimpan perlawanan sunyi terhadap tirani efisiensi algoritma modern. Kaset mengajarkan kita untuk kembali melambat: duduk tenang di sudut ruangan, menikmati alur melodi dari awal hingga akhir, dan membiarkan suara musik menyentuh relung batin sebagaimana mestinya karya seni dirayakan.`
  }
];

async function main() {
  console.log("=== MEMULAI BATCH AUTO-PUBLISH TUJUHCAHAYA (JADWAL 22:00 WIB / TIAP 30 MENIT) ===");
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

  console.log("\n=== SELURUH BATCH 22:00 BERHASIL DIPUBLIKASIKAN ===");
}

main().catch(err => {
  console.error("Batch Error:", err);
  process.exit(1);
});
