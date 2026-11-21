import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Suno Bikin Video AI Padahal Urusan Audio Saja Masih Diprotes Pelanggan",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Kecerdasan Buatan", "Suno AI", "Musik Generatif", "Video AI", "Hak Cipta", "Industri Kreatif"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/suno-ai-visuals.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Ilustrasi antarmuka fitur Visuals pada platform pembuat musik kecerdasan buatan Suno untuk menghasilkan klip video dan gambar",
    sourceUrl: "https://www.theverge.com/ai-artificial-intelligence/1036415/suno-visuals-ai-generated-video-images-feature",
    excerpt: "Suno resmi meluncurkan fitur Visuals agar pengguna bisa menyulap lagu AI menjadi video klip lipsync otomatis. Masalahnya, fitur ini memakai kuota kredit terpisah sementara pelanggan setianya masih sibuk protes soal kualitas audio.",
    content: `Pernah ketemu tukang tambal ban yang ban dalamnya saja masih suka bocor halus, tapi sudah sibuk menawarkan jasa cat velg mengilap plus pasang stiker lampu kelap-kelip? Kira-kira begitulah rasa heran banyak pengguna teknologi saat melihat manuver terbaru perusahaan pembuat musik kecerdasan buatan, Suno. Alih-alih membereskan dulu cacat suara robotik dan vokal sumbang yang kerap dikeluhkan pelanggan, mereka malah tancap gas merilis mesin pembuat video klip.

Sebagaimana dicatat dalam laporan The Verge pekan ini, Suno baru saja meluncurkan fitur bernama Visuals di versi web, iOS, maupun Android. Lewat tab khusus di menu Create atau tombol titik tiga pada daftar lagu, pengguna kini bisa menyulap lagu buatan AI menjadi gambar sampul album sekaligus klip video berdurasi maksimal lima belas detik yang bibir karakternya otomatis bergerak mengikuti lirik lagu.

Di atas kertas, paket fitur yang disodorkan terdengar cukup lengkap untuk memanjakan pengelola akun media sosial yang malas menyunting video. Pengguna diberi tiga pilihan bahan gambar awal: memakai karakter preset bawaan Suno, mengunggah foto atau ilustrasi sendiri, atau mengetik *prompt* teks untuk menggambar sampul dalam format potret maupun lanskap. Setelah itu, gambar dijadikan bingkai awal atau akhir klip, lengkap dengan *timeline* penyuntingan sederhana untuk menyambung potongan lima belas detik tadi menjadi video yang lebih panjang beserta teks lirik berjalan.

Untuk urusan mesin di balik layar, Suno menggandeng model AI bernama H3 Move yang dibangun di atas fondasi model H3 milik MiniMax. Perusahaan juga buru-buru mengklaim telah menanamkan filter teks dan visual baru guna mencegah pengguna memproduksi wajah artis sungguhan, tokoh publik, atau properti intelektual berhak cipta. Klaim ini terdengar agak ironis mengingat Suno sendiri masih harus berjibaku menghadapi sejumlah gugatan hukum kelas kakap dari industri rekaman terkait dugaan penggunaan katalog musik berhak cipta saat melatih model audionya.

![Ilustrasi antarmuka fitur Visuals pada platform pembuat musik kecerdasan buatan Suno untuk menghasilkan klip video dan gambar](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/suno-ai-visuals.jpg?quality=90&strip=all&crop=0,0,100,100)

Namun bagian yang paling bikin pengguna mengernyitkan dahi bukan sekadar soal ambisi visualnya, melainkan urusan dompet. Fitur Visuals tidak masuk dalam jatah kredit lagu biasa, melainkan menuntut sistem *"Visuals credits"* terpisah. Artinya, pelanggan yang sudah membayar langganan bulanan tetap dipaksa merogoh kocek tambahan jika ingin menjajal fitur video ini—pola monetisasi yang mengingatkan kita pada [krisis jatah kuota asisten AI di ponsel mahal](/beli-iphone-belasan-juta-malah-dijatah-kuota-harian-buat-nyuruh) ketika pabrikan lebih sibuk mengunci fitur di balik batas harian daripada memastikan fungsinya benar-benar beres dipakai kerja.

Tak heran jika di kolom komentar video pengumuman peluncuran Visuals di YouTube, sambutan yang muncul justru jauh dari kata meriah. Salah satu komentar pengguna yang langsung menyedot perhatian berbunyi tegas: perbaiki dulu audionya sebelum menambahkan fitur sampah yang tidak diminta siapa pun. Komentar bernada jengkel itu diamini banyak pelanggan lain yang merasa kualitas generasi musik Suno belakangan jalan di tempat sementara prioritas pengembang malah melebar ke fitur suara narasi (*Speech*) bulan lalu dan kini ke video generatif.

Di dunia startup AI, kebiasaan menumpuk fitur baru sebelum fondasi utamanya beres memang sudah menjadi penyakit menahun. Demi mempertahankan valuasi di mata investor, perusahaan dituntut terus memamerkan label "serba bisa" dari audio, teks, hingga video, meski beban komputasinya terus membengkak dan ikut membebani [pusat data raksasa yang menyedot pasokan RAM dunia](/sam-altman-ngaku-dukung-warga-punya-banyak-ram-saat-pusat-data-ai).

Bagi pengguna rumahan yang sekadar butuh musik latar video pendek tanpa repot bayar royalti, tombol instan Visuals memang kelihatan menggoda. Tapi bagi orang-orang yang sudah telanjur bayar langganan demi berharap suara vokal AI-nya terdengar manusiawi dan tidak mendadak pecah di bagian reff, fitur klip video ini terasa seperti disuguhi kerupuk warna-warni saat nasi di piringnya masih setengah matang.`
  },
  {
    title: "Bernadya Gandeng Eross hingga Pongki Saat Industri Musik Doyan Rumus Instan",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Bernadya", "Musik Indonesia", "Album Deluxe", "Eross Candra", "Pongki Barata", "Pamungkas"],
    imageUrl: "https://eventguide.id/wp-content/uploads/2026/11/bernadya1.jpg",
    imageAlt: "Penyanyi dan penulis lagu Bernadya dalam peluncuran album deluxe Semoga Hanya di Mimpi Pagi Setelahnya",
    sourceUrl: "https://eventguide.id/2026/11/18/deluxe-album-terbaru-bernadya-diperkaya-sentuhan-musik-eross-candra-pongki-barata-hingga-pamungkas/",
    excerpt: "Bernadya merilis versi deluxe album Semoga Hanya di Mimpi dengan menggandeng Eross Candra, Pongki Barata, Noey Java Jive, hingga Pamungkas. Langkah ini terasa menyegarkan di tengah industri musik yang terlalu tergila-gila pada formula viral instan.",
    content: `Di ruang tunggu kafe kawasan Kemang atau antrean kedai kopi pinggir jalan di Yogyakarta, obrolan musisi muda belakangan ini hampir selalu berputar di dua hal: algoritma video pendek dan resep membuat bagian *chorus* yang gampang menempel dalam lima belas detik. Banyak label rekaman dan tim produksi mendorong artisnya bekerja seperti pabrik konten harian—cukup buka laptop, pilih paket instrumen digital seragam, lalu lempar ke platform streaming secepat mungkin sebelum tren berganti minggu depan.

Di tengah riuh industri yang serba terburu-buru itu, langkah Bernadya lewat album *deluxe* bertajuk *Semoga Hanya di Mimpi (Pagi Setelahnya)* terasa seperti jeda napas yang jujur. Alih-alih sekadar menempel dua lagu sisa rekaman lama demi label edisi spesial, Bernadya memilih mengetuk pintu para penulis lagu dan produser lintas generasi untuk merombak sekaligus mematangkan lagu-lagu barunya.

Menurut laporan EventGuide.id yang terbit pekan ini, album edisi *deluxe* tersebut melibatkan nama-nama besar yang sudah kenyang asam garam di dapur rekaman Indonesia, mulai dari Eross Candra, Pongki Barata, Mochamad "Noey" Noerwana, Rishanda Singgih, hingga Pamungkas. Menariknya, pertemuan musikal ini tidak terdengar seperti proyek pamer nama besar di sampul depan, melainkan proses kreatif yang tumbuh dari obrolan dan rasa percaya antar-penulis lagu.

Eross Candra, misalnya, didapuk menggarap lagu *"Lebih Beruntung Sedikit"*. Gitaris Sheila On 7 itu bercerita bahwa demo mentah yang dikirim Bernadya sudah terasa enak sejak awal, ibarat umpan matang yang tinggal disambut di lapangan. Bernadya sendiri mengaku menulis dan merekam demo lagu tersebut secara terburu-buru karena Eross sudah menunggunya, lalu bertemu beberapa hari kemudian untuk mendengarkan aransemen baru garapan Eross sebelum masuk tahap rekaman yang lebih rapi. Uniknya, sepulang mendengarkan hasil garapan itu berulang-ulang di jalan, Bernadya merasa terngiang karakter suara Pamungkas, yang belakangan bersedia ikut mengisi vokal sekaligus menyumbang penulisan lagu tersebut.

![Penyanyi dan penulis lagu Bernadya dalam peluncuran album deluxe Semoga Hanya di Mimpi Pagi Setelahnya](https://eventguide.id/wp-content/uploads/2026/11/bernadya1.jpg)

Cerita tak kalah hangat muncul dari keterlibatan Pongki Barata pada nomor *"Nanti Juga Kita Mengerti"*. Mantan motor penulis lagu Jikustik yang karyanya pernah dibawakan Chrisye hingga Iwan Fals itu menyebut perannya cukup sederhana namun krusial: menyelesaikan apa yang belum sempat dirampungkan Bernadya. Sementara untuk lagu *"Cari Aku di Bandung"*, Bernadya bahkan meluangkan waktu khusus menyambangi Noey—basis Java Jive sekaligus produser yang dulu ikut membidani Peterpan, Nidji, dan D'Masiv—di Bandung untuk berdiskusi panjang soal produksi sebelum hasilnya disempurnakan Rishanda Singgih di Jakarta.

Pendekatan kolaboratif yang mau bersusah-payah mendatangi produser ke luar kota dan membiarkan demo bertumbuh secara organik ini terasa kontras dengan [tekanan industri yang mendikte musisi membuat lagu tiga puluh detik](/theovertunes-rilis-album-kini-gini-saat-industri-musik-sibuk) demi memancing klip viral di media sosial. Di era ketika lagu sering dianggap sekadar pelengkap latar video joget atau curhat singkat, kesabaran meramu aransemen bareng musisi senior justru memberi ruang bagi sebuah lagu untuk punya nyawa yang lebih awet.

Tentu tidak semua musisi muda punya akses semulus itu untuk langsung mengetuk studio para maestro era sembilan puluhan dan dua ribuan. Banyak band indie di daerah masih harus patungan menyewa studio latihan berjam-jam sambil berhadapan dengan [kegelisahan pencipta lagu soal transparansi royalti di tanah air](/kci-sodorkan-alat-pencatat-royalti-ke-menteri-saat-pencipta-lagu) yang sampai hari ini kerap bikin musisi waswas menghitung pemasukan karya mereka.

Namun pesan yang dibawa Bernadya lewat kolaborasi ini tetap relevan bagi siapa saja yang masih mencintai musik sebagai karya utuh. Lagu yang bagus nyaris tidak pernah lahir dari ketakutan mengejar jadwal unggah algoritma, melainkan dari keberanian duduk bareng di ruang studio, saling lempar demo kasar, lalu mencari bentuk terbaik sampai lagu itu benar-benar selesai dengan kepala tegak.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 19:00 WIB)");
  console.log("=================================================================\n");

  const results = [];

  for (let i = 0; i < articles.length; i++) {
    const art = articles[i];
    console.log(`\n-------------------------------------------------------------`);
    console.log(`📝 [Artikel ${i + 1}/${articles.length}] ${art.title}`);
    console.log(`👤 Byline: ${art.byline} | Kategori: ${art.category}`);

    const wordCount = art.content.trim().split(/\s+/).filter(Boolean).length;
    console.log(`📊 Word count: ${wordCount} kata`);

    const audit = validate7cEditorial(art.title, art.content, art.excerpt, art.tags);
    console.log(`🎯 Editorial Score: ${audit.score}/100 | Valid: ${audit.valid}`);
    if (audit.errors.length > 0) {
      console.error(`❌ Errors:`, audit.errors);
      throw new Error(`Artikel "${art.title}" gagal audit 7C: ` + audit.errors.join(", "));
    }
    if (audit.warnings.length > 0) console.warn(`⚠️ Warnings:`, audit.warnings);
    if (audit.suggestions.length > 0) console.log(`💡 Suggestions:`, audit.suggestions);

    if (!audit.valid || audit.score < 80) {
      throw new Error(`Artikel "${art.title}" memiliki skor editorial di bawah 80!`);
    }

    console.log(`📡 Menerbitkan artikel via autoPublishPost (remote: true)...`);
    const pubResult = await autoPublishPost(art, { bypassPause: true, remote: true });
    console.log(`✅ Status: ${pubResult.status} | URL: ${pubResult.url}`);
    console.log(`   Local DB: ${pubResult.dbSaved} | Remote Plesk: ${pubResult.remotePublished}`);

    if (art.sourceUrl) {
      markAsSeen(art.sourceUrl);
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
}

runBatch().catch(err => {
  console.error("Batch Execution Error:", err);
  process.exit(1);
});
