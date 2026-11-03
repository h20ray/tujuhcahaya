import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Monopoli Format File Kepemilikan Privat: Bagaimana Vendor Software Mengunci Data Pengguna di Balik Dinding Langganan",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Software", "Open Source", "Hak Konsumen", "Cloud", "Kedaulatan Data"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Papan sirkuit server pusat data dan jaringan koneksi komputasi awan",
    excerpt: "Dari dokumen kantor hingga aset desain visual, vendor peranti lunak mengunci format data dalam ekosistem tertutup. Begitu langganan dihentikan, arsip karya bertahun-tahun seketika disandera tanpa opsi ekspor yang adil.",
    content: `Bayangkan Anda membeli sebidang tanah, membangun rumah di atasnya dengan keringat sendiri, namun kunci pintu pagar rumah tersebut dipegang oleh pihak kontraktor yang mewajibkan Anda membayar biaya sewa gerbang setiap awal bulan. Jika suatu hari Anda memutuskan berhenti membayar sewa, kontraktor tersebut berhak mengunci Anda di luar dan melarang Anda mengambil barang-barang berharga di dalam kamar tidur Anda sendiri.

Analogi mengerikan ini bukanlah cerita distopia fiktif, melainkan realitas hukum kepemilikan data digital yang dihadapi jutaan profesional kreatif dan korporat setiap hari. Melalui model bisnis perangkat lunak berbasis langganan bulanan (*SaaS*) yang dikombinasikan dengan format file biner privat (*proprietary formats*), para vendor raksasa secara sistematis merampas kedaulatan pengguna atas karya intelektual mereka sendiri.

## Strategi Penyanderaan Arsip Karya Kreatif

Mekanisme format terkunci sengaja dirancang untuk menciptakan friksi migrasi yang mustahil ditembus:

* **Inkompatibilitas Ekspor yang Disengaja**: Perangkat lunak pengolah grafik atau vektor terkemuka sengaja menolak menyediakan fitur ekspor standar terbuka yang sempurna. Jika pengguna mencoba membuka file proyek lama mereka menggunakan aplikasi alternatif sumber terbuka (*open-source*), lapisan dokumen berantakan, efek warna hilang, dan teks bergeser kacau.
* **Biaya Tebusan Akses Masa Lalu**: Ketika seorang pekerja lepas (*freelancer*) pensiun atau beralih profesi dan menghentikan langganan bulanannya, mereka kehilangan hak membuka arsip proyek yang mereka buat lima tahun silam. Untuk sekadar melihat kembali riwayat portofolio sendiri, mereka dipaksa membayar biaya tebusan langganan satu bulan penuh.
* **Kerentanan Jangka Panjang Pelestarian Dokumen**: Format kepemilikan privat berisiko menjadi tidak terbaca jika sang vendor peranti lunak bangkrut atau memutuskan mematikan server aktivasi lisensi lawas mereka di masa depan, menghapus warisan data digital peradaban tanpa jejak.

## Memperjuangkan Hak Kedaulatan Standar Terbuka

Masyarakat profesional dan instansi pemerintahan harus mulai mengambil sikap tegas dengan memprioritaskan format penyimpanan terbuka universal (*open standards*) seperti ODF, SVG, dan format arsip netral platform. Regulasi perlindungan data konsumen wajib mewajibkan vendor menyediakan fitur ekspor lossless tanpa enkripsi kepemilikan yang mengikat.

Karya intelektual Anda adalah milik sah pikiran Anda seutuhnya, bukan aset sandera yang boleh digembok sepihak di balik pintu brankas korporasi software.`
  },
  {
    title: "Ilusi Grafik Fotorealistis: Mengapa Desain Gaya Artistik yang Kuat Jauh Lebih Abadi daripada Triliunan Poligon",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Art Direction", "Grafis", "Desain Game", "Industri Game", "Estetika"],
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pemandangan arsitektur kastil fantasi dengan pencahayaan langit senja yang magis",
    excerpt: "Industri game membakar ratusan juta dolar demi mensimulasikan pori-pori kulit dan helai rambut realistis. Namun proyek fotorealistis cepat terlihat usang dalam lima tahun, sementara game dengan gaya seni distingtif tetap memukau lintas dekade.",
    content: `Perhatikan video cuplikan game-game aksi beranggaran raksasa (*blockbuster AAA*) yang dipamerkan di panggung konferensi internasional belakangan ini: sorotan kamera dizoom sedekat mungkin ke wajah karakter untuk memamerkan butiran keringat mikro, pantulan cahaya pada kornea mata yang dihitung secara fisik, dan simulasi fisika helai rambut yang bergerak mengikuti tiupan angin. Angka poligon geometris dibanggakan hingga triliunan unit dengan dukungan teknologi pencahayaan *path tracing* tercanggih.

Namun ada paradoks visual yang aneh dalam perlombaan fotorealisme ini. Begitu sebuah game yang mengklaim diri berpenampilan paling nyata di dunia dirilis ke pasaran, visualnya hanya sanggup memukau mata pemain selama beberapa tahun saja. Ketika generasi kartu grafis baru lahir dengan teknik pencahayaan yang lebih mutakhir, tampilan game fotorealistis tersebut seketika terlihat kaku, artifisial, dan terjebak di dalam lembah ketakutan (*uncanny valley*).

## Usia Singkat Ambisi Realisme Mentah

Pengejaran visual fotorealistis tanpa fondasi artistik yang berkarakter menelan biaya produksi yang melumpuhkan inovasi:

* **Penyedotan Anggaran dan Durasi Produksi yang Menggila**: Demi memindai tekstur pori-pori kulit aktor asli dan merekam gerak wajah tingkat tinggi, anggaran produksi game melonjak hingga ratusan juta dolar dan memakan waktu pengembangan hingga enam atau tujuh tahun. Tekanan finansial ekstrem ini membuat penerbit takut bereksperimen dengan mekanik permainan baru yang berisiko.
* **Ketahanan Visual yang Cepat Kadaluwarsa**: Game fotorealistis dinilai dari seberapa dekat ia meniru dunia nyata. Karena batas teknologi komputasi terus maju tanpa henti, tolok ukur kesempurnaan tersebut selalu bergeser, membuat game-game realis dari dekade lalu terlihat sangat kusam dan kaku di mata generasi baru pemain.
* **Keabadian Gaya Seni Distingtif (*Stylized Art Direction*)**: Bandingkan hal itu dengan mahakarya animasi cel-shaded atau game berpiksel artistik yang mengedepankan komposisi warna berani, siluet karakter ikonik, dan atmosfer pencahayaan ekspresif. Game-game yang mengutamakan arahan seni unik ini tetap tampak mempesona dan tidak lekang oleh waktu meski dimainkan dua puluh tahun setelah peluncurannya.

## Mengembalikan Martabat Seni Rupa Virtual

Video game adalah kanvas imajinasi interaktif, bukan sekadar perangkat lunak uji coba simulasi fisik untuk menjual perangkat keras komputer terbaru. Kemampuan merancang dunia fiksi yang memikat lahir dari kepekaan rasa, pemahaman harmoni visual, dan keberanian menetapkan identitas estetika yang distingtif.

Pengembang game harus berhenti terobsesi menjadi cermin peniru dunia nyata. Ciptakanlah dunia baru dengan bahasa visual yang berjiwa—karena keindahan artistik yang sejati tidak akan pernah lapuk oleh pergantian generasi cip prosesor.`
  },
  {
    title: "Kutukan Suara Bising Earphone di Kereta: Bagaimana Menaikkan Volume Musik Diam-diam Merusak Rambut Sensori Koklea",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Pendengaran", "Earphone", "Tinitus", "Koklea", "Gaya Hidup Urban"],
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Headphone studio modern tergeletak di atas permukaan meja kayu berlatar hangat",
    excerpt: "Menenggelamkan deru mesin kereta komuter dengan menaikkan volume earphone hingga delapan puluh lima desibel telah menjadi kebiasaan refleks jutaan pekerja. Namun tekanan gelombang akustik berlebih ini meremukkan sel rambut koklea telinga dalam secara permanen.",
    content: `Setiap pagi dan sore di dalam gerbong kereta komuter atau bus kota yang padat, pemandangan para penumpang hampir seragam: mata terpaku pada layar smartphone, sementara telinga disumbat rapat oleh sepasang earphone nirkabel. Ketika suara gesekan roda besi kereta di rel atau gemuruh obrolan penumpang lain mulai memekakkan ruangan, jari tangan secara refleks menekan tombol pengeras volume di sisi ponsel hingga bilah penunjuk volume berubah warna menjadi merah peringatan.

Di dalam isolasi musik tersebut, perjalanan pulang pergi terasa lebih nyaman dan bebas dari kebisingan kota. Namun di balik kelegaan psikologis sesaat itu, sebuah bencana mikroskopis sedang berlangsung tanpa rasa sakit di dalam rongga telinga dalam Anda: kematian sel-sel rambut sensori pendengaran yang tidak akan pernah bisa beregenerasi seumur hidup.

## Mekanisme Kerusakan Sel Rambut Koklea Tanpa Rasa Sakit

Gelombang suara bervolume tinggi yang dipancarkan dari jarak beberapa milimeter dari gendang telinga memicu kerusakan struktural organ pendengaran:

* **Trauma Mekanik pada Sel Rambut Luar (*Outer Hair Cells*)**: Di dalam koklea berbentuk rumah siput, terdapat belasan ribu sel rambut mikroskopis yang bertugas mengubah getaran akustik menjadi impuls listrik saraf menuju otak. Tekanan suara di atas delapan puluh lima desibel yang berlangsung selama berjam-jam meremukkan sel-sel silia halus ini layaknya rumput diinjak roda kendaraan berat.
* **Tinitus Permanen dan Hantu Dering Telinga**: Kerusakan pada sel rambut koklea membuat jalur saraf pendengaran mengirimkan sinyal kosong yang kacau ke otak. Kondisi ini melahirkan tinitus kronis—bunyi denging atau desis bernada tinggi yang terus berbunyi di dalam kepala selama dua puluh empat jam tanpa ada sumber suara luar, memicu gangguan tidur dan depresi.
* **Ketulian Tersembunyi Usia Muda (*Hidden Hearing Loss*)**: Korban paparan bising earphone kronis kerap tidak menyadari kerusakan pendengaran mereka karena mereka masih mampu mendengar nada tunggal dalam tes audiometri biasa. Namun kemampuan otak mereka untuk membedakan suara percakapan manusia di tengah keramaian ruangan (*speech-in-noise recognition*) anjlok drastis sebelum menginjak usia empat puluh tahun.

## Menjaga Aset Pendengaran di Tengah Hiruk-Pikuk Kota

Menyelamatkan ketajaman indra pendengaran tidak menuntut Anda berhenti menikmati alunan lagu favorit saat bepergian, melainkan membiasakan disiplin akustik yang bertanggung jawab:

1. **Gunakan Teknologi Peredam Bising Aktif (*ANC*)**: Berinvestasilah pada earphone atau headphone dengan fitur peredam bising aktif berkualitas baik. Dengan mematikan suara gemuruh mesin kereta dari luar secara elektronik, Anda tidak perlu menaikkan volume musik melebihi ambang batas aman enam puluh persen.
2. **Terapkan Aturan Enam Puluh-Enam Puluh**: Batasi mendengarkan musik lewat earphone maksimal enam puluh menit dalam satu sesi dengan volume tidak melebihi enam puluh persen kapasitas maksimal, lalu beri jeda istirahat hening selama lima belas menit.
3. **Peka Terhadap Peringatan Batas Volume Ponsel**: Jangan pernah mengabaikan jendela peringatan batas aman desibel yang muncul di layar ponsel saat Anda mencoba menaikkan volume suara.

Telinga Anda adalah satu-satunya jendela akustik seumur hidup yang tidak memiliki suku cadang biologis pengganti. Lindungi kepekaannya dari ancaman kebisingan kota sebelum keheningan abadi merenggut keindahan melodi dunia dari hidup Anda.`
  },
  {
    title: "Hilangnya Kompilasi Mixtape Kaset Buatan Tangan: Ketika Kurasi Musik Personal Ditelan Kemudahan Berbagi Tautan Playlist",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Mixtape", "Kaset Pita", "Kurasi Personal", "Nostalgia", "Budaya Kaset"],
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Sorotan cahaya lampu panggung konser menyinari ruang pertunjukan musik hangat",
    excerpt: "Merekam kaset mixtape untuk sahabat atau pasangan di era analog adalah proses kurasi personal yang sarat pengorbanan waktu dan dedikasi rasa. Kemudahan mengirim tautan playlist instan memang praktis, namun mengikis kehangatan emosional pertukaran karya musik.",
    content: `Di era pita kaset magnetik beberapa dekade silam, memberikan sebuah kaset kompilasi lagu buatan tangan (*mixtape*) kepada seorang kawan karib atau orang yang sedang ditaksir adalah salah satu bentuk pernyataan rasa paling mendalam yang bisa dilakukan manusia. Proses pembuatannya tidak bisa diselesaikan hanya dengan beberapa ketukan jempol di atas kaca smartphone, melainkan menuntut kesabaran, kepekaan artistik, dan investasi waktu berjam-jam yang tulus.

Sang pembuat harus duduk diam di depan pemutar tape deck ganda, memutar lagu satu per satu secara langsung (*real-time*), sigap menekan tombol rekam dan jeda tepat saat intro lagu dimulai, serta menghitung sisa durasi pita pada sisi A dan sisi B agar tidak ada lagu yang terpotong canggung di ujung putaran. Di lembar kertas pembungkus kaset (*J-card*), daftar lagu ditulis rapi dengan pena tinta, kerap dihiasi coretan ilustrasi tangan atau pesan personal yang intim.

## Erosi Pengorbanan Waktu dalam Pertukaran Seni

Pergeseran ke era tautan daftar putar (*playlist link*) di aplikasi musik digital memang menyajikan kepraktisan tanpa tara, namun kepraktisan tersebut menanggalkan bobot emosional di dalamnya:

* **Ketiadaan Gesekan Fisik dan Pengorbanan Usaha**: Hari ini, menyusun daftar putar seratus lagu dapat diselesaikan dalam tempo lima menit sambil menunggu antrean kopi. Mengirimkan tautan tersebut melalui pesan obrolan instan tidak menuntut komitmen usaha sepeser pun. Karena tidak ada energi hidup yang diinvestasikan dalam pembuatannya, penerima pun kerap memperlakukan tautan tersebut sebagai angin lalu yang tidak pernah benar-benar didengarkan tuntas.
* **Kematian Disiplin Kurasi Terbatas**: Sebuah pita kaset C-60 atau C-90 memiliki batas durasi fisik yang mutlak: tiga puluh atau empat puluh lima menit per sisi. Keterbatasan ruang ini memaksa peracik mixtape melakukan kurasi ketat—hanya lagu-lagu paling bernyawa dan memiliki keterikatan makna yang layak dimasukkan. Di platform streaming dengan ruang tak terbatas, daftar putar membengkak menjadi tempat pembuangan ratusan lagu acak yang kehilangan fokus tematik.
* **Pelenyapan Bahasa Benda Fisik**: Mixtape kaset pita adalah artefak fisik nyata yang dapat disimpan di laci meja, digenggam di telapak tangan, dan diwariskan melintasi waktu. Ketika pita kaset itu diputar di pemutar mobil tua bertahun-tahun kemudian, desis halus pita magnetik (*tape hiss*) membawa kembali ingatan utuh tentang siapa yang meracik lagu tersebut dan dalam situasi emosi apa rekaman itu dilahirkan.

## Merayakan Kembali Kurasi Musik yang Bertaruh Rasa

Kemudahan teknologi digital tidak semestinya menumpulkan naluri kita untuk merawat hubungan antarmanusia melalui karya seni. Kita mungkin tidak lagi menggunakan pita kaset magnetik sehari-hari, namun semangat di balik pembuatan mixtape—yakni komitmen meluangkan waktu demi mendengarkan secara utuh dan membagikan keindahan rasa kepada orang lain—tetap merupakan nilai kemanusiaan yang wajib dijaga.

Cobalah sesekali menyusun daftar lagu pendek yang benar-benar Anda renungkan urutan dinamikanya, dengarkan bersama orang terdekat Anda tanpa distraksi layar, dan biarkan frekuensi musik kembali bekerja sebagai bahasa persahabatan yang tulus.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 09:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 09:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-0900.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
