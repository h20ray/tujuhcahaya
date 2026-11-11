import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Streaming Legal Hobi Hapus Film Lawas Saat Komunitas Torrent Menjaga Warisan Budaya",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Arsip Digital", "Elang Elano", "Hak Cipta", "Keamanan Siber", "Koleksi Film", "Layanan Streaming", "Torrent"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/268792_private_torrent_trackers_CVirginia_LEDE_1.gif?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Ilustrasi jaringan pelacak torrent bawah tanah dan pengarsipan data film independen di ruang digital",
    sourceUrl: "https://www.theverge.com/cs/features/1027614/torrent-movies-file-sharing-download-piracy",
    excerpt: "Layanan streaming raksasa makin sering melenyapkan judul film dan dokumenter langka dari katalog demi penghematan pajak dan lisensi korporasi. Ironisnya, di tengah kepungan stigma pembajakan, komunitas pelacak torrent privat justru menjadi benteng terakhir yang menyelamatkan sejarah sinema dari kepunahan massal.",
    content: `Pernahkah Anda meluangkan waktu satu jam penuh pada malam libur hanya untuk menggulir menu Netflix atau Disney+, berniat menonton kembali film dokumenter kesayangan, lalu mendadak mendapati judul tersebut raib tanpa bekas? Tidak ada pemberitahuan perpisahan, tidak ada pengumuman di email langganan, dan tentu saja tidak ada opsi untuk membeli salinannya. Judul yang Anda cintai itu menguap begitu saja ke udara kosong digital. Di era serba sewa ini, ilusi kenyamanan streaming telah meninabobokan kita: kita merasa memiliki ribuan film di ujung jari, padahal kenyataannya kita cuma menyewa izin tonton sementara yang sewaktu-waktu bisa dicabut sepihak oleh manajer korporasi demi efisiensi laporan keuangan.

Kerapuhan ekosistem digital tersebut menjadi sorotan tajam dalam laporan investigasi The Verge awal pekan ini. Laporan mendalam itu menelusuri bagaimana jaringan pelacak torrent privat (*private torrent trackers*) kini diam-diam bermutasi menjadi perpustakaan peradaban paling tangguh di muka bumi. Salah satu kisah nyata menyorot Jane, seorang penulis asal Kanada yang terobsesi mencari *Memory and Imagination*, sebuah film dokumenter langka era 1990-an tentang Perpustakaan Kongres Amerika Serikat. Jane mencari ke mana-mana: tidak ada di katalog streaming resmi mana pun, tidak pernah diunggah ke YouTube, dan tidak dijual dalam bentuk cakram digital baru. Film tersebut praktis dinyatakan punah dari peredaran komersial.

Satu-satunya tempat di kolong jagat ini di mana salinan beresolusi tinggi film itu masih hidup dan berdenyut adalah di dalam kantong pelacak torrent bawah tanah yang dikelola komunitas sukarelawan. Di sana, para pengarsip independen merawat berkas master film dengan ketelitian seorang kurator museum nasional. Mereka membersihkan bintik pita seluloid, mencocokkan trek audio asli, dan memastikan ada setidaknya belasan orang yang setia menyalakan komputer tua mereka sebagai penyedia berkas (*seeder*) tanpa pamrih sepeser pun.

![Ilustrasi jaringan pelacak torrent bawah tanah dan pengarsipan data film independen di ruang digital](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/268792_private_torrent_trackers_CVirginia_LEDE_1.gif?quality=90&strip=all&crop=0,0,100,100)

Pemandangan ini menyajikan tamparan ironis bagi narasi moralitas hak cipta yang selama ini didengungkan oleh asosiasi studio Hollywood. Selama puluhan tahun, korporasi hiburan raksasa gemar memposisikan diri sebagai pembela suci karya cipta sambil melabeli komunitas pembagi berkas sebagai parasit perusak industri. Namun tatkala nafsu pemangkasan pajak datang, studio-studio mapan itu tanpa berkedip tega membakar berkas master serial orisinal mereka sendiri atau menghapus katalog sinema klasik demi menghindari pembayaran sisa royalti kepada kru film.

Jika industri hiburan arus utama memperlakukan karya seni sekadar aset neraca kas yang halal dimusnahkan kapan saja, lantas siapa sebenarnya yang lebih menghargai kebudayaan manusia? Apakah dewan direksi yang tega menghapus arsip sejarah demi bonus akhir tahun, ataukah komunitas warganet anonim yang rela patungan uang sewa server demi menjaga agar sebuah dokumenter lawas tetap bisa ditonton generasi penerus?

Bagi masyarakat di negara berkembang seperti Indonesia, kehadiran arsip mandiri ini bukan sekadar urusan bernostalgia. Di tengah realitas bioskop komersial yang didominasi oleh film horor formulaik dan waralaba pahlawan super, akses terhadap film-film eksperimental dunia adalah barang mewah yang mustahil dijangkau tanpa jaringan distribusi arus bawah. Ketergantungan buta pada [layanan streaming berbayar yang sewaktu-waktu bisa memutus akses](/kini-penumpang-pesawat-bisa-streaming-spotify-tapi-ruang-melamun) hanya akan menyusutkan wawasan kultural kita menjadi seragam mengikuti selera kecerdasan buatan. Kita membeli [gadget canggih berharga puluhan juta rupiah yang ujungnya cuma jadi pemutar video pasif](/tablet-puluhan-juta-berkedok-produktivitas-ujungnya-cuma-jadi), tanpa pernah benar-benar memegang kendali atas apa yang kita tonton.

Para eksekutif platform streaming barangkali boleh bertepuk dada di depan forum investor karena sukses memangkas biaya pemeliharaan server setelah menyapu bersih judul-judul film lawas dari etalase mereka. Namun suatu hari nanti, ketika generasi masa depan ingin meneliti sejarah kebudayaan visual abad ini dan menemukan arsip resmi korporasi telah hangus terbakar oleh kerakusan dividen, mereka tidak akan mencari jejaknya di kantor megah Los Angeles. Mereka akan membungkuk penuh hormat kepada seorang pemuda di kamar kos yang setia membiarkan torrent client di laptopnya tetap menyala menyebarkan data di tengah keheningan malam.`
  },
  {
    title: "Peluang Token Fortnite Cuma Satu Banding Ratusan Ribu Bukti Kasino Berkedok Game Anak",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Epic Games", "Fortnite", "Gacha Game", "Industri Game", "Mikrotransaksi", "PC Gaming"],
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/11/treasure-chest_fn.jpg",
    imageAlt: "Ilustrasi peti harta karun bercahaya emas dalam permainan Fortnite yang menyimpan peluang akses langka",
    sourceUrl: "https://www.polygon.com/fortnite-pirate-shop-access-token-treasure-odds-revealed/",
    excerpt: "Epic Games akhirnya membeberkan peluang mendapatkan Pirate Shop Access Token di Fortnite yang hanya sebesar 1 berbanding 137.500 per peti. Angka probabilitas mikroskopis ini menelanjangi wajah asli industri game modern: mengubah rasa penasaran anak-anak menjadi mesin kasino terselubung yang menuntut waktu dan uang tanpa batas.",
    content: `Jika ada orang dewasa yang nekat membuka lapak judi dadu di trotoar depan gerbang sekolah dasar dengan iming-iming hadiah mainan langka, aparat lingkungan pasti sudah menggiringnya ke kantor polisi dalam hitungan menit. Seluruh orang tua murid akan kompak murka menuntut keadilan. Namun ketika trik manipulasi psikologis yang serupa dibungkus dengan grafis animasi kartun penuh warna, tarian karakter kocak, dan logo megah Epic Games di etalase Fortnite, masyarakat dunia justru menganggapnya sebagai hiburan keluarga yang lumrah dimainkan anak-anak sepulang sekolah.

Tirai kepalsuan itu akhirnya tersingkap pekan ini. Sebagaimana dicatat dalam laporan peliputan Polygon, Epic Games untuk pertama kalinya secara resmi merilis tabel transparansi probabilitas terkait peluang perolehan item langka *Pirate Shop Access Token* di dalam permainan Fortnite. Bagi jutaan pemain muda yang saban hari bermimpi menembus toko rahasia bajak laut tersebut, kenyataan matematika yang disodorkan sungguh dingin tanpa ampun: peluang menemukan sebuah token di dalam peti harta karun standar adalah 1 berbanding 137.500 per peti, atau setara dengan 0,00073 persen.

Bahkan ketika Epic Games berbaik hati menggelar acara khusus bertajuk *Treasure Hours* yang digadang-gadang melipatgandakan keberuntungan pemain, angka probabilitasnya cuma terkerek tipis menjadi 1 berbanding 68.750 peti. Sebagai gambaran akal sehat, seorang pemain kasual memiliki peluang lebih besar untuk tersambar kilat di siang bolong atau menemukan dompet tebal berisi segepok uang tunai di pinggir jalan tol ketimbang mendapatkan token digital tersebut secara murni dari hasil bermain wajar.

![Ilustrasi peti harta karun bercahaya emas dalam permainan Fortnite yang menyimpan peluang akses langka](https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/11/treasure-chest_fn.jpg)

Membuka 137 ribu peti dalam game battle royale bukanlah perkara sederhana seperti membalikkan telapak tangan. Kegiatan itu menuntut ribuan jam waktu hidup yang dihabiskan untuk melakukan rutinitas membuka kotak virtual yang membosankan secara berulang-ulang. Di sinilah letak jebakan licik korporasi game modern. Ketika pemain muda mulai merasa frustrasi dan putus asa mengejar probabilitas yang mustahil tersebut, antarmuka game dengan ramah akan menyodorkan tombol pintas: silakan gesek kartu pembayaran atau beli paket koin virtual untuk memangkas waktu tunggu. Mekanik semacam ini bukan lagi bagian dari perancangan game yang menyenangkan, melainkan arsitektur mesin judi kasino yang sengaja dirancang untuk meretas hormon dopamin anak-anak yang belum matang secara emosional.

Ironi ini semakin menyengat manakala kita mengingat kembali rekam jejak panjang sang pengembang. Sikap eksploitatif yang dibalut senyum ramah ini mengingatkan kita pada tabiat [Epic Games yang sempat memusuhi ekosistem sistem operasi terbuka sebelum akhirnya tunduk pada pasar](/dulu-menghina-linux-sekarang-epic-games-malah-rela-sungkem-ke), di mana setiap retorika manis kebebasan selalu berujung pada kalkulasi monopoli pendapatan. Kita kini menyaksikan bagaimana kegembiraan bermain yang autentik telah ditenggelamkan oleh nafsu monetisasi agresif, sebuah penyakit kronis industri yang juga tampak pada [kekecewaan komunitas akibat penundaan rilis game besar tanpa kepastian](/warhammer-blood-bowl-kena-tunda-ke-2027-saat-gamer-sudah-lelah) karena studio terlalu sibuk memoles skema live-service ketimbang merapikan mekanik dasar permainan.

Di warung kopi dan tongkrongan anak muda kota, kita menyaksikan bagaimana obrolan gaming yang dulu hangat membicarakan strategi dan taktik kini terdistorsi menjadi pamer kepemilikan skin langka dan keluhan boncos akibat membeli tiket acara virtual. Anak-anak yang seharusnya belajar arti sportivitas dan kerja sama tim malah dicekoki mentalitas penjudi sejak usia dini, merasa rendah diri bila karakternya di layar tidak mengenakan pakaian berbayar paling mentereng.

Pihak manajemen Epic Games barangkali bisa membela diri di hadapan regulator dengan dalih bahwa mereka telah mematuhi aturan pengungkapan peluang undian secara terbuka. Namun memajang angka satu berbanding seratus tiga puluh tujuh ribu kepada pemain anak-anak bukanlah bentuk etika kejujuran. Itu adalah surat pengakuan bersalah yang dipamerkan dengan pongah, bukti telanjang bahwa di mata raksasa game modern, generasi muda bukanlah pemain yang harus dihibur, melainkan dompet berjalan yang harus diperas dopaminnya sampai tetes terakhir.`
  }
];

export async function runBatch() {
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
      markAsSeen(art.sourceUrl.trim());
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi 19:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261109-1900.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
