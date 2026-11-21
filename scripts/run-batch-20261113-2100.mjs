import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Tambalan Driver AMD Penyelamat SSD Malah Bikin Game Cyberpunk Rawan Crash",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["AMD", "Driver GPU", "Hardware", "PC Gaming", "Adrenalin", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/HhgRs2q5wjBRkGzn6o32Mh-1920-80.jpg",
    imageAlt: "Kartu grafis AMD Radeon tertancap di motherboard komputer dengan pencahayaan khas rakitan PC gaming",
    sourceUrl: "https://www.pcgamer.com/hardware/graphics-cards/amd-has-patched-its-ssd-eating-gpu-driver-bug-with-an-optional-adrenalin-update-for-rx-7000-series-graphics-cards-and-above/",
    excerpt: "AMD akhirnya merilis pembaruan driver Adrenalin untuk menyetop bug pembajak umur SSD. Namun alih-alih memberi ketenangan, tambalan opsional ini malah membawa daftar panjang galat yang rawan merusak sesi main game.",
    content: `Bagi anak warnet atau gamer PC yang merakit komputernya sendiri dengan memeras tabungan uang jajan berbulan-bulan, urusan hardware selalu dipandang dengan derajat kesucian yang tinggi. Kita rela menyisir toko daring demi membandingkan selisih harga lima puluh ribu rupiah, membaca ulasan kecepatan baca-tulis media penyimpanan NVMe sampai larut malam, hingga membersihkan debu kipas pendingin secara berkala layaknya merawat pusaka keluarga. Satu hal yang paling dihindari oleh siapa pun yang punya PC gaming di kamar kos adalah kabar buruk bahwa ada komponen mahal yang perlahan sekarat sebelum waktunya.

Kepanikan semacam itulah yang sempat menyelimuti para pemilik kartu grafis kubu merah belakangan ini. Sebagaimana dicatat dalam laporan investigasi PC Gamer, komunitas dibuat gempar oleh temuan anomali pada peranti lunak AMD Adrenalin yang tanpa henti membombardir penyimpanan SSD dengan operasi tulis data berukuran raksasa. Siklus penulisan liar yang berjalan tanpa henti di latar belakang sistem ini diam-diam memangkas persentase kesehatan media penyimpanan secara drastis, membikin para pengguna gigit jari melihat sisa umur drive mereka merosot cuma gara-gara menyalakan komputer.

Setelah gelombang protes membanjiri forum daring Reddit dan komunitas pengembang, AMD akhirnya melepas jurus pemadam kebakaran lewat rilis Adrenalin Edition 26.11.1. Dalam rilis catatan teknisnya, AMD menyatakan bahwa pembaruan ini difokuskan untuk menyembuhkan penyakit penulisan data berlebih ke penyimpanan sistem. Langkah tanggap darurat ini menyasar jajaran kartu grafis modern mulai dari seri Radeon RX 7000 ke atas, sebuah pengakuan tak langsung bahwa ada kekacauan serius di balik baris kode manajemen telemetri mereka sebelumnya.

![Kartu grafis AMD Radeon tertancap di motherboard komputer dengan pencahayaan khas rakitan PC gaming](https://cdn.mos.cms.futurecdn.net/HhgRs2q5wjBRkGzn6o32Mh-1920-80.jpg)

Namun kelegaan para pemilik kartu grafis rupanya langsung diuji oleh fakta getir yang tercantum di lembar pengumuman yang sama. Pembaruan ini tidak disalurkan secara otomatis lewat kanal reguler, melainkan dilabeli sebagai pembaruan opsional yang mewajibkan pengguna mengunduh berkas pemasang secara manual dari situs resmi. Yang lebih menggelikan lagi, dokumen resmi AMD terang-terangan melampirkan daftar panjang potensi masalah baru yang siap menyambut siapa saja yang nekat memasangnya: mulai dari ancaman mogok kerja alias crash dan driver timeout saat memainkan Assassin's Creed Black Flag Resynced, gangguan stabilitas di War Thunder, hingga risiko galat serupa saat menjalankan Cyberpunk 2077 dengan fitur peningkatan resolusi FSR aktif.

Bagi gamer yang terbiasa duduk di kursi warkop sambil berdebat spesifikasi, situasi ini benar-benar menyodorkan pilihan buah simalakama yang menyebalkan. Anda dipaksa memilih antara membiarkan [driver AMD yang sempat menggerus kesehatan SSD](/driver-amd-gerus-kesehatan-ssd-satu-persen-tiap-bulan-bukti) terus mengunyah sisa umur perangkat keras Anda secara perlahan, atau memasang obat penawar yang berpotensi membuat sesi adu tembak di Night City tiba-tiba membeku di tengah jalan. Menghadapi kartu grafis seharga belasan juta rupiah yang peranti lunaknya bertingkah labil semacam ini adalah ujian kesabaran yang menguras emosi para perakit komputer rumahan.

Kekacauan rilis tambalan ini kembali menelanjangi borok klasik industri perangkat keras modern yang makin ugal-ugalan dalam urusan jaminan mutu perangkat lunak. Demi mengejar siklus penjualan kartu grafis anyar dan melayani kebutuhan akselerasi kecerdasan buatan bagi korporasi besar, tim pengembang sering kali melepas driver ke tangan konsumen umum dengan pengujian yang terburu-buru. Beban menemukan kutu kode peranti lunak akhirnya dilempar mentah-mentah ke pundak pengguna biasa yang hanya ingin bermain game dengan tenang sepulang kerja.

Di meja angkringan pinggir jalan, kebijakan AMD ini persis seperti montir bengkel motor yang berhasil menambal kebocoran tangki bensin Anda, tapi sekaligus memperingatkan bahwa setelah tangki ditambal, rem depan motor Anda mungkin bakal blong sewaktu-waktu di turunan terjal. Konsumen disuruh berterima kasih atas tambalan darurat tersebut sembari diminta pasrah menerima risiko kecelakaan baru. Memperbaiki kesalahan fatal rekayasa kode memang kewajiban mutlak pabrikan, tetapi menyodorkan solusi setengah matang yang bikin game favorit mendadak macet adalah lelucon mahal yang membuktikan bahwa konsumen masih saja diperlakukan seperti kelinci percobaan cuma-cuma.`
  },
  {
    title: "Girl Group No Na Tembus Panggung Coachella Saat Industri Musik Lokal Masih Latah",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Coachella 2027", "No Na", "Musik Indonesia", "Budaya Urban", "Festival Musik", "Margaretha Nina"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2026/08/11/f8bdcb0b-a929-4b3c-9e9e-a0f5199b4700.jpeg",
    imageAlt: "Poster resmi festival musik Coachella menampilkan susunan musisi dunia di panggung California",
    sourceUrl: "https://www.antaranews.com/berita/5851619/daftar-lengkap-line-up-coachella-2027-ada-no-na-hingga-dua-lipa",
    excerpt: "Keberhasilan girl group No Na menembus panggung akbar Coachella 2027 disambut sorak-sorai di jagat maya. Namun di balik euforia go international ini, ekosistem musik tanah air masih pelit ruang bagi musisi perempuan dan komunitas arus bawah.",
    content: `Ada pemandangan yang selalu berulang tiap kali nama musisi Indonesia berhasil menyusup ke poster festival musik mancanegara: linimasa media sosial mendadak dibanjiri unggahan bangga beraroma nasionalisme, para pesohor berebut mengunggah ucapan selamat di cerita Instagram, dan publik seolah menemukan pelarian manis dari rutinitas harian yang menjemukan. Kita memang bangsa yang haus validasi panggung global. Begitu ada anak bangsa yang sanggup berdiri sejajar dengan raksasa industri hiburan dunia, tepuk tangan riuh langsung menggema dari Sabang sampai Merauke, tanpa ada yang sempat bertanya bagaimana terjalnya jalan yang harus mereka tempuh sendirian untuk sampai ke sana.

Panggung megah padang pasir California kembali menjadi saksi lompatan bersejarah itu pekan ini. Sebagaimana dicatat dalam laporan ANTARA News dan siaran resmi promotor Goldenvoice, nama grup idola perempuan asal Indonesia, No Na, secara resmi diumumkan masuk dalam jajaran penampil festival musik Coachella edisi 2027. Pencapaian ini menorehkan tinta emas baru sebagai girl group pertama dari tanah air yang berhasil menembus salah satu panggung musik paling bergengsi di muka bumi, bersanding dengan nama-nama tenar dunia seperti Dua Lipa dan sederet penampil papan atas lintas genre.

Kabar ini tentu layak dirayakan dengan kepalan tangan ke udara. Menempatkan musisi lokal di etalase budaya pop terakbar dunia membuktikan bahwa talenta anak muda Indonesia memiliki daya pikat dan musikalitas yang sanggup melompati sekat bahasa maupun batas geografis. Apalagi bagi sebuah grup idola perempuan yang tumbuh di tengah pasar musik yang kerap dipenuhi prasangka dan tuntutan visual seragam, menembus panggung Indio adalah pembuktian kualitas artistik yang tak terbantahkan.

![Poster resmi festival musik Coachella menampilkan susunan musisi dunia di panggung California](https://img.antaranews.com/cache/800x533/2026/08/11/f8bdcb0b-a929-4b3c-9e9e-a0f5199b4700.jpeg)

Namun di balik gegap gempita panggung padang pasir Indio, euforia ini menyimpan ironi getir yang kerap luput dari sorotan kamera. Di negeri sendiri, panggung pertunjukan yang aman, sehat, dan berkelanjutan bagi musisi perempuan serta talenta arus bawah masih menjadi barang langka yang mahal harganya. Ekosistem festival musik lokal belakangan ini justru makin terjebak dalam pusaran komersialisasi seragam yang membosankan. Kurator festival besar lebih gemar mendaur ulang nama-nama artis yang sudah mapan demi jaminan sponsor bir dan rokok, sementara grup vokal perempuan independen kerap dipandang sebelah mata atau hanya ditempatkan sebagai pemanis susunan acara di siang bolong saat penonton masih berteduh dari terik matahari.

Ketimpangan ini kian terasa menyengat jika melihat infrastruktur pertunjukan musik kita yang sangat sentralistik. Masalah klasik ini sejalan dengan potret ketimpangan saat [venue konser musik menumpuk di Jakarta](/venue-konser-musik-menumpuk-di-jakarta-saat-penonton-daerah-cuma), di mana panggung megah berstandar internasional hanya dinikmati segelintir elite ibu kota, sementara ruang apresiasi musik di kota-kota sekunder dibiarkan megap-megap kekurangan panggung layak. Ditambah lagi dengan carut-marut tata kelola royalti pertunjukan yang tak kunjung transparan, kondisi ini kian mempertegas polemik saat [musisi tanah air mengeluhkan pembagian royalti](/ketika-piala-ami-awards-tak-cukup-membayar-tagihan-dan-royalti) yang nilainya sering kali tak cukup untuk menutup ongkos sewa studio rekaman. Musisi yang berjuang di panggung lokal kerap harus pontang-panting membiayai produksi karya secara mandiri tanpa perlindungan hak ekonomi yang jelas dari asosiasi maupun regulator.

Di tongkrongan kedai kopi pojok kota, fenomena ini persis seperti warga satu kelurahan yang heboh menggelar arak-arakan karena ada salah satu anak tetangga yang berhasil diterima magang di kantor luar negeri, padahal sekolah di desanya sendiri sedang bocor atapnya dan sanggar tari lokal terpaksa tutup buku karena tak sanggup membayar sewa gedung. Kita terbiasa menumpang bangga pada prestasi individu yang bertarung di panggung global, tetapi malas membenahi ekosistem rumah sendiri agar lebih ramah bagi generasi baru. Merayakan langkah No Na di panggung dunia memang wajib, tapi menjadikannya alasan untuk menutup mata terhadap bobroknya industri musik lokal adalah kemalasan kultural yang bikin dada sesak.`
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
  console.log(`🎉 Batch Publikasi Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
}

runBatch().catch(err => {
  console.error("Batch Execution Error:", err);
  process.exit(1);
});
