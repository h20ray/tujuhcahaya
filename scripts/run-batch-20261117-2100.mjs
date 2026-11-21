import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Tiga Masalah Sepele Bikin Microsoft 365 Tumbang Seharian Saat Kantor Mengemis Cloud",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Microsoft 365", "Cloud Computing", "Infrastruktur IT", "Outage", "Elang Elano"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2025/10/network-outage.jpg",
    imageAlt: "Ilustrasi kabel jaringan server pusat data yang mengalami gangguan konektivitas",
    sourceUrl: "https://arstechnica.com/gadgets/2026/11/microsoft-details-how-three-problems-combined-for-a-global-outage/",
    excerpt: "Microsoft membeberkan penyebab tumbangnya Microsoft 365 hampir 24 jam secara global. Kombinasi bug uji coba di server lawas, lonjakan trafik Teams, dan kapasitas menyusut melumpuhkan layanan.",
    content: `Di hampir semua rapat transformasi digital kantor zaman sekarang, ada satu mantra sakti yang paling sering diucapkan konsultan berjas rapi: pindahkan saja semua pekerjaan ke cloud supaya hidup tenang dan bebas drama. Server di kantor dituding barang rongsokan yang rawan panas, boros listrik, dan merepotkan divisi IT. Sebagai gantinya, perusahaan rela membayar biaya langganan per kepala setiap bulan agar seluruh dokumen, email kantor, dan ruang rapat virtual dititipkan ke raksasa teknologi asal Redmond. Namun mantra paling sakti sekalipun mendadak terdengar seperti lelucon garing begitu layar laptop pekerja di berbagai belahan dunia mendadak lumpuh serentak.

Pekan ini, Microsoft akhirnya membuka dapur masalah di balik insiden tumbangnya layanan Microsoft 365 secara global selama hampir 24 jam penuh. Sebagaimana dicatat dalam laporan Ars Technica yang mengutip bedah teknis resmi perusahaan tersebut, bencana digital itu bukan ulah peretas negara asing atau serangan siber canggih seperti di film laga. Biang keroknya justru persekutuan tiga masalah kecil yang kedengarannya terlalu konyol untuk ukuran infrastruktur bernilai triliunan rupiah.

Masalah pertama berawal dari sebuah tambalan kode yang sudah diselipkan ke server gateway jaringan Microsoft 365 sejak Juli lalu. Di dalam pembaruan itu terselip bug tersembunyi bernama *lock contention* yang membuat server macet dan tak lagi merespons saat dibanjiri permintaan berat. Bagian paling bikin geleng-geleng kepala adalah alasan mengapa cacat kode itu bisa lolos ke dunia nyata: pengujian standar internal Microsoft ternyata dijalankan di atas perangkat keras lama berspesifikasi lebih rendah. Ketika kode yang sama mendarat di server produksi modern berinti prosesor banyak (*multi-core*), bug tidur itu langsung bangun dan mengamuk.

Masalah kedua menyusul sekitar 15 jam sebelum kejadian tumbang massal, ketika sistem melakukan pengalihan rutin (*failover*) yang memindahkan arus trafik Microsoft Teams ke gateway utama yang juga menanggung beban Exchange Online. Belum cukup sesak, masalah ketiga ikut menumpuk karena hampir 14 persen kapasitas server gateway tersebut sudah lebih dulu tumbang sehari sebelumnya akibat gangguan terpisah. Dalam kondisi normal, sisa kapasitas mungkin masih sanggup menelan beban tambahan. Namun gabungan kapasitas yang pincang, banjir trafik Teams, dan bug lama di server baru langsung memicu efek domino ke seluruh penjuru dunia.

Begitu beberapa server mulai terkunci dan menjatuhkan permintaan pengguna, sistem perutean otomatis memindahkan antrean trafik ke node lain yang masih sehat. Hasilnya mudah ditebak: server sehat ikut kewalahan, ikut terkunci, lalu tumbang berjamaah. Proses pemulihan pun berjalan lambat menyakitkan karena setiap kali server dinyalakan ulang, lautan permintaan yang sudah menumpuk langsung menghajarnya kembali hingga pingsan sebelum sempat bernapas. Para insinyur akhirnya terpaksa menambal dan memulihkan layanan secara manual blok demi blok.

![Ilustrasi kabel jaringan server pusat data yang mengalami gangguan konektivitas](https://cdn.arstechnica.net/wp-content/uploads/2025/10/network-outage.jpg)

Bagi admin IT lokal yang seharian ikut kena semprot direksi padahal server kantor mereka sama sekali tidak bermasalah, pengakuan Microsoft ini terasa seperti tamparan berlapis. Insiden ini memanjangkan daftar kekhawatiran setelah [tumbangnya layanan Microsoft 365](/server-microsoft-365-tumbang-bukti-ketergantungan-cloud-malah) berulang kali membuktikan rapuhnya ketergantungan total pada satu penyedia awan. Publik pun wajar kembali menyoroti apakah krisis kualitas pengujian di dapur perangkat keras modern ini punya kaitan erat dengan [gelombang PHK puluhan ribu insinyur Microsoft](/microsoft-minta-maaf-layanan-tumbang-tapi-ogah-akui-efek-phk) yang sempat mengorbankan banyak tenaga teknis berpengalaman demi mengejar efisiensi laporan keuangan.

Pada akhirnya, korporasi besar selalu punya seribu istilah teknis yang rapi untuk menjelaskan mengapa sistem mereka bisa lumpuh seharian penuh hanya gara-gara salah pilih mesin uji coba. Sementara itu, pekerja biasa di balik meja kubikel dan mahasiswa yang tugasnya tersandera di awan harus menelan pil pahit sendirian. Di tengah megahnya janji komputasi awan serba tangguh, anak warkop yang masih rajin mencadangkan berkas kerja ke flashdisk lima puluh ribuan ternyata tetap memegang kunci ketenangan hidup yang jauh lebih masuk akal.`
  },
  {
    title: "Feast Lepas Vinyl Membangun dan Menghancurkan Saat Industri Musik Mabuk Streaming",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Feast", "Vinyl", "Rilisan Fisik", "Musik Indie", "Bojakrama Press", "Margaretha Nina"],
    imageUrl: "https://xposeindonesia.com/wp-content/uploads/2026/11/feast-rilis-vinyl-membangun-menghancurkan.jpg",
    imageAlt: "Kemasan piringan hitam vinyl album Membangun dan Menghancurkan milik band rock .Feast bersama Bojakrama Press",
    sourceUrl: "https://news.google.com/rss/articles/CBMiswFBVV95cUxObmdVbWlOMzlUajhEVXU5OWdwZ1lTWjhuazhEVzVvRVAwWE5jU3p3cUREeTVXbnYxV3RSM3YwcWlhTFNocW5HY1M0TFRYNzVWcnpXLUIwZ1ZvaUcyTzFfMEZabHl6eDIxVG1FOXBWWWtaNnpzUlg2Mzl3eHZReTZkN2QwWG4zWno3VWdlU0twQjV6SVBPTV9fRjNseWpVQnF4eVVuNDEwSjlxbTdKdUNEblJIOA?oc=5",
    excerpt: "Band rock .Feast merilis edisi vinyl album Membangun & Menghancurkan bersama label independen Bojakrama Press. Di tengah era streaming serba sewa, rilisan fisik tetap punya nyawa.",
    content: `Mendengarkan musik hari ini sering terasa tidak jauh berbeda dari menyantap mi instan di warung pinggir jalan saat sedang buru-buru mengejar kereta terakhir: serba cepat, serba seragam, dan nyaris tak meninggalkan jejak rasa setelah piringnya dibereskan. Algoritma aplikasi pemutar lagu memaksa telinga kita menelan potongan lagu tiga puluh detik yang paling ramah dijadikan latar video joget singkat di media sosial. Kita merasa punya akses ke jutaan lagu di dalam saku celana, padahal secara hukum kepemilikan kita tidak pernah benar-benar memiliki satu lagu pun. Sekali telat membayar tagihan langganan bulanan atau terjadi sengketa lisensi label, daftar putar kesayangan bisa menguap begitu saja dari layar smartphone.

Di tengah kepungan kultur serba sewa digital itulah langkah band rock asal Jakarta, .Feast, terasa menyegarkan kepala. Sebagaimana dicatat dalam laporan Xpose Indonesia pekan ini, kuartet yang digawangi Baskara Putra, Adnan Satyanugraha Putra, Dicky Renanda Putra, dan Fadli Fikriawan Wibowo tersebut resmi merilis album ketiga mereka, *Membangun & Menghancurkan*, dalam format piringan hitam atau vinyl. Rilisan fisik ini hadir dua tahun setelah versi digital dan CD-nya beredar luas serta memboyong dua piala AMI Awards lewat deretan nomor penting di panggung mereka seperti "Nina", "Tarot", "Arteri", dan "o,Tuan".

Untuk mewujudkan monumen fisik ini, .Feast menggandeng label independen berbasis di Surabaya, Bojakrama Press, yang sebelumnya telah mencetak rilisan vinyl sejumlah nama penting musik lokal mulai dari Sajama Cut, Morfem, Silampukau, Superman Is Dead, Banda Neira, hingga Kuntari. Rilisan ini diedarkan secara bertahap sepanjang November 2026 melalui jalur yang beragam, mulai dari lelang amal, undian akses pembelian awal bagi penggemar, penjualan luring terbatas, hingga jaringan distribusi Bojakrama Press.

Penggarapan fisiknya jelas tidak dikerjakan setengah hati layaknya suvenir tempelan demi menaikkan harga jual. Bagian *gatefold* piringan hitam ini memajang ilustrasi karya Aldi Tirta Pratama atau Altar of Sorrow yang diramu ulang menjadi visual bertekstur relief tiga dimensi oleh Bima Nurdiansyah Putra di bawah arahan Hanief Bagus Pratama dari Sun Eater dan Septian Dwi Satria dari Bojakrama Press. Sampul depannya yang ikonik dengan lukisan rumah terbakar bahkan disulap menjadi pigura interaktif berisi empat kartu dengan tingkat kobaran api berbeda yang bisa diganti-ganti sendiri oleh pembeli, lengkap dengan buklet lirik, kredit, foto, dan tulisan dari tiga penulis termasuk Pramedya Nataprawira yang dikurasi Rifanda Putri alias Panda bersama Reno Surya.

![Kemasan piringan hitam vinyl album Membangun dan Menghancurkan milik band rock .Feast bersama Bojakrama Press](https://xposeindonesia.com/wp-content/uploads/2026/11/feast-rilis-vinyl-membangun-menghancurkan.jpg)

Bagi personel band maupun pengelola labelnya, kepingan hitam ini punya bobot emosional yang tak bisa digantikan angka statistik di layar dasbor streaming. Dicky Renanda mengakui bahwa *Membangun & Menghancurkan* menjadi titik balik yang menyelamatkan perjalanan sekaligus mengubah hidup mereka, sementara Adnan menambahkan bahwa album yang turut digarap bersama produser Laleilmanino, Vega Antares, Iga Massardi, dan Lafa Pratomo itu sukses memperluas demografi pendengar mereka ke berbagai daerah. Di mata salah satu pendiri Bojakrama Press, Agus Ega Pamungkas, album tersebut dipilih karena merekam kegelisahan sosial-politik masyarakat dengan jujur.

Keputusan memuliakan satu album utuh dalam wujud piringan hitam berharga ratusan ribu rupiah tentu terasa melawan arus di tengah industri yang gemar memuja [format album utuh yang mulai langka](/theovertunes-rilis-album-kini-gini-saat-industri-musik-sibuk) akibat tuntutan kejar tayang konten media sosial. Kolaborasi Jakarta–Surabaya tanpa embel-embel sponsor merek korporat besar ini juga memperlihatkan daya tahan ekosistem independen yang serupa dengan semangat [tur mandiri tanpa mengemis sponsor](/tur-mandiri-beltigs-ke-enam-kota-jepang-tampar-musisi-yang-doyan), ketika musisi dan label kecil bersekutu merawat basis pendengarnya sendiri.

Para penggemar kelas pekerja mungkin harus rela menyisihkan uang jajan kopi susu berpekan-pekan demi menebus satu keping vinyl edisi ini dan menyiapkan ruang khusus di sudut kamar kosan. Namun di zaman serba sementara seperti sekarang, ada kepuasan batin yang sulit dibeli oleh paket streaming premium: memegangi sampul bergambar rumah terbakar yang tak akan pernah hilang hanya gara-gara server perusahaan musik mendadak bangkrut atau kuota internet habis di tanggal tua.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 21:00 WIB)");
  console.log("=================================================================\n");

  const results = [];

  for (let i = 0; i < articles.length; i++) {
    const art = articles[i];
    console.log(`\n-------------------------------------------------------------`);
    console.log(`📝 [Artikel ${i + 1}/${articles.length}] ${art.title}`);
    console.log(`👤 Byline: ${art.byline} | Kategori: ${art.category}`);

    const wordCount = art.content.trim().split(/\s+/).filter(Boolean).length;
    console.log(`📊 Word count: ${wordCount} kata`);

    // 1. Audit editorial 7C
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

    // 2. Publish ke local DB dan remote Plesk
    console.log(`📡 Menerbitkan artikel via autoPublishPost (remote: true)...`);
    const pubResult = await autoPublishPost(art, { bypassPause: true, remote: true });
    console.log(`✅ Status: ${pubResult.status} | URL: ${pubResult.url}`);
    console.log(`   Local DB: ${pubResult.dbSaved} | Remote Plesk: ${pubResult.remotePublished}`);

    // 3. Tandai URL sumber asli sebagai sudah diproses di seen-urls.json
    if (art.sourceUrl) {
      markAsSeen(art.sourceUrl);
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 BATCH SELESAI: ${results.length} artikel berhasil diaudit & dipublikasikan.`);
  console.log("=================================================================");
  for (const res of results) {
    console.log(`- [${res.status.toUpperCase()}] ${res.slug} (Skor: ${res.score}) -> ${res.url}`);
  }
}

runBatch().catch(err => {
  console.error("Batch Execution Error:", err);
  process.exit(1);
});
