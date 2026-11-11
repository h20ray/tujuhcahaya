import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Dulu Menghina Linux, Sekarang Epic Games Malah Rela Sungkem ke SteamOS",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Epic Games", "Handheld Gaming", "Industri Game", "Linux", "Steam Deck", "SteamOS", "Valve"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/05/STK108_EPIC_GAMES_C.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Ilustrasi logo Epic Games Store dan antarmuka konsol genggam berbasis Linux SteamOS",
    sourceUrl: "https://www.theverge.com/games/1029557/epic-games-launcher-is-coming-to-steamos",
    excerpt: "Setelah bertahun-tahun meremehkan ekosistem Linux dan ogah merilis Fortnite di Steam Deck, Epic Games akhirnya menyerah dan memastikan peluncur gamenya bakal meluncur resmi di SteamOS. Bukti nyata bahwa arogansi korporasi bisa runtuh seketika saat dominasi pasar Valve kian tak terbendung.",
    content: `Bagi siapa saja yang hobi menimbun game gratisan mingguan di Epic Games Store, perpustakaan digital Anda barangkali sudah menampung ratusan judul yang nasibnya lebih sering dianggurkan ketimbang dimainkan. Namun situasinya mendadak berubah menjadi drama teknis yang menjengkelkan ketika konsol genggam PC seperti Steam Deck mulai menjamur di meja kerja dan ruang tamu. Selama bertahun-tahun, gamer yang ingin memainkan koleksi game Epic mereka di perangkat berbasis Linux terpaksa bertingkah bak teknisi komputer amatir: mengutak-atik mode desktop, memasang piranti pembantu pihak ketiga seperti Heroic Games Launcher, hingga berdoa agar pembaruan sistem berikutnya tidak merusak kompatibilitas peluncur.

Semua kerepotan itu bukan lahir dari ketidakmampuan teknis perangkat keras, melainkan dari arogansi dingin sang empu toko. CEO Epic Games Tim Sweeney selama ini berulang kali melontarkan komentar sinis terhadap Linux. Sang taipan menyebut ekosistem open source tersebut terlalu terfragmentasi bak labirin hutan belantara, seraya berdalih bahwa sistem perlindungan antikecurangan Easy Anti-Cheat milik mereka terlalu rentan dibobol jika dipaksa berjalan di lingkungan SteamOS. Akibatnya, jutaan pemilik konsol genggam yang ingin menikmati Fortnite atau judul eksklusif lainnya dibiarkan gigit jari di pinggir lapangan.

![Ilustrasi logo Epic Games Store dan antarmuka konsol genggam berbasis Linux SteamOS](https://platform.theverge.com/wp-content/uploads/sites/2/2025/05/STK108_EPIC_GAMES_C.jpg?quality=90&strip=all&crop=0,0,100,100)

Namun hukum besi industri komputasi mengajarkan satu kebenaran sederhana: sebesar apa pun ego seorang miliarder, ia akan selalu tunduk pada suara dompet konsumen. Sebagaimana dicatat dalam laporan The Verge pekan ini, Direktur Komunikasi Epic Games Jake Jones akhirnya mengonfirmasi bahwa Epic Games Launcher sedang dipersiapkan untuk meluncur secara resmi di SteamOS. Pernyataan ini sekaligus melengkapi rencana pengujian Fortnite yang sempat mereka dengungkan secara malu-malu beberapa waktu sebelumnya. Epic yang dulu memandang sebelah mata sistem operasi buatan Valve kini buru-buru merapikan koper demi mengamankan lapak di ekosistem pinguin.

Melihat manuver putar haluan ini, para pemerhati infrastruktur digital hanya bisa tersenyum getir di pojokan warkop. Ironi kepanikan Epic sungguh telanjang. Di hadapan meja hijau pengadilan Amerika dan Eropa, Epic Games gemar memoles citra sebagai ksatria pembela kebebasan digital yang lantang menggugat monopoli Apple dan Google. Mereka berkoar-koar menuntut ekosistem terbuka di mana setiap pengembang bebas mendistribusikan aplikasi tanpa dipungut pajak platform yang mencekik. Tapi begitu Valve benar-benar mewujudkan impian ekosistem gaming terbuka lewat Steam Deck dan memperluas SteamOS ke pabrikan perangkat genggam lain, Epic malah menutup diri dan menolak mendukung platform tersebut dengan alasan keamanan yang mengada-ada.

Bagi komunitas gamer dan sysadmin yang sudah lama muak dengan [tirani peluncur game mandiri yang rakus sumber daya](/tirani-peluncur-game-mandiri-di-pc-ketika-setiap-penerbit-memaksa), keputusan Epic ini terasa seperti kemenangan moral yang manis. Pengguna komputer selama ini sudah cukup menderita oleh [kewajiban memasang peluncur game ganda](/tirani-peluncur-game-ganda-di-pc-ketika-membeli-di-steam-tetap) yang terus-menerus memakan alokasi memori RAM dan memperlambat waktu booting sistem operasi. Mereka tidak butuh janji revolusi distribusi digital yang muluk-muluk dari bos korporasi; yang dibutuhkan masyarakat gamer hanyalah aplikasi ringan yang bisa langsung menyala begitu tombol power ditekan tanpa drama galat server.

Keputusan Epic Games untuk sungkem ke SteamOS menegaskan bahwa perang platform di era modern tidak lagi bisa dimenangkan hanya dengan membakar triliunan rupiah uang promosi dan bagi-bagi game cuma-cuma. Gabe Newell dan tim insinyur Valve membuktikan bahwa membangun fondasi perangkat lunak yang solid, menghormati hak kepemilikan pengguna, dan merangkul komunitas Linux yang militan adalah strategi jangka panjang yang jauh lebih ampuh ketimbang retorika humas.

Kini Tim Sweeney terpaksa menelan kembali kata-katanya sendiri di hadapan jutaan pemilik konsol genggam yang tersenyum puas. Anda boleh saja memiliki mesin pencetak uang sebesar Unreal Engine dan toko digital yang disokong dana tanpa batas, tapi begitu pasar memilih kenyamanan dan kebebasan sistem operasi terbuka, Anda tetap harus mengetuk pintu Valve dengan sopan sambil berharap diizinkan masuk ke ruang bermain mereka.`
  },
  {
    title: "Suno Dituntut Keluarga Elvis dan Eminem Karena Nekat Mengklona Suara demi Cuan",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["AI Musik", "Elvis Presley", "Eminem", "Hak Cipta", "Industri Musik", "Margaretha Nina", "Royalti Musik", "Suno AI"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22202367/517216004.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Kolase foto ikon musik rap Eminem dan sang raja rock and roll Elvis Presley dalam sengketa hak cipta musik AI",
    sourceUrl: "https://www.theverge.com/ai-artificial-intelligence/1029533/elvis-eminem-suno-ai-music-clone-lawsuit",
    excerpt: "Startup kecerdasan buatan Suno kembali dihantam gugatan hukum baru dari pemegang hak cipta Elvis Presley dan penerbit lagu-lagu Eminem atas tuduhan penjarahan vokal ilegal. Cermin keserakahan industri teknologi yang gemar membajak keringat musisi atas nama demokratisasi seni.",
    content: `Kalau Anda rajin membuka linimasa TikTok atau Reels belakangan ini, Anda hampir pasti pernah menjumpai video parodi dengan suara vokal yang terdengar sangat akrab. Ada lagu campursari yang mendadak dinyanyikan oleh karakter vokal mendiang Freddie Mercury, celotehan patah hati anak kos yang dilantunkan dengan rima cepat Eminem, hingga lagu pop modern yang dibawakan memakai cengkok khas sang Raja Rock and Roll, Elvis Presley. Bagi warganet yang sedang suntuk di sela jam kerja kantor, konten semacam itu memang terasa menghibur, mengundang tawa, dan cocok dibagikan ke grup percakapan keluarga.

Namun di balik tawa renyah itu, ada borok pembajakan industri paling telanjang yang sedang dipoles rapi oleh para pemodal ventura. Sebagaimana dicatat dalam laporan The Verge pekan ini, perusahaan perintis musik kecerdasan buatan Suno resmi diseret ke meja hijau melalui dua gugatan hukum terpisah di pengadilan federal. Sekelompok pemegang hak cipta resmi atas warisan musikal Elvis Presley bersama perusahaan penerbit yang menaungi katalog lagu-lagu terbesar Eminem menuduh Suno melakukan pelanggaran hak cipta secara sistematis dan terencana. Platform pembuat musik otomatis tersebut dituding sengaja melatih model algoritma mereka memakai rekaman master asli para musisi legendaris demi menghasilkan klona vokal yang identik tanpa izin dan tanpa membayar sepeser pun hak royalti.

![Kolase foto ikon musik rap Eminem dan sang raja rock and roll Elvis Presley dalam sengketa hak cipta musik AI](https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22202367/517216004.jpg?quality=90&strip=all&crop=0,0,100,100)

Gugatan terbaru ini membongkar kembali pola kerja usang para taipan teknologi Silicon Valley: rampok dulu karya orang lain secara diam-diam, kemas menjadi aplikasi canggih bernilai triliunan rupiah, lalu pasang tampang polos dengan berdalih bahwa semua tindakan itu adalah bagian dari konsep penggunaan wajar alias fair use. Suno dengan percaya diri mengklaim layanan mereka sekadar mendemokratisasi proses penciptaan lagu agar siapa saja bisa menjadi musisi hanya lewat beberapa baris ketikan teks. Masalahnya, bagaimana mungkin Anda mengaku mendemokratisasi seni jika fondasi utama dari kecerdasan buatan Anda dibangun di atas tumpukan karya bajakan yang dicuri dari musisi yang menghabiskan seumur hidupnya mengasah pita suara di studio rekaman?

Keserakahan korporat semacam ini bukan barang baru bagi para musisi independen dan pekerja seni arus bawah. Fenomena ini memperlihatkan ancaman yang setara dengan [krisis artis bayangan AI membajak royalti musisi asli](/krisis-ghost-artist-di-spotify-bagaimana-musik-buatan-ai-membajak) di berbagai platform streaming musik, di mana seniman manusia yang memeras keringat justru disingkirkan demi algoritma murah yang tidak menuntut jaminan sosial. Beban para kreator kian bertambah getir mengingat industri hiburan konvensional sendiri belum tuntas menyelesaikan persoalan hak cipta, sebagaimana terlihat saat [musisi tanah air mengeluhkan pembagian royalti yang seret](/ketika-piala-ami-awards-tak-cukup-membayar-tagihan-dan-royalti) meski karya mereka diputar jutaan kali di ruang publik.

Bagi telinga para insinyur peranti lunak, musik barangkali cuma dipandang sebagai susunan spektrum frekuensi, deretan angka desibel, dan pola matematika yang bisa dikloning secara mekanis. Mereka mengira kehebatan vokal Eminem hanya terletak pada kecepatan pelafalan silabel, atau pesona Elvis sekadar kombinasi getaran vibrato rendah. Padahal ada sesuatu yang tak terhitung harganya di balik rekaman vokal musisi sejati: rasa lapar di masa muda, trauma masa kecil, amarah sosial, dan tarikan napas lelah yang mustahil disimulasikan oleh rangkaian kartu grafis yang dipacu arus listrik tinggi di ruang server.

Langkah tegas keluarga Elvis dan manajemen Eminem menyeret Suno ke pengadilan adalah alarm penting bagi kelangsungan ekosistem kebudayaan manusia. Bila penjarahan identitas suara ini dibiarkan lolos atas nama kemajuan teknologi, kita sedang menyerahkan masa depan kesenian kepada mesin fotokopi digital yang diprogram untuk memperkaya segelintir investor tanpa pernah menghargai martabat sang pencipta karya.

Startup teknologi boleh saja membanggakan diri mampu memproduksi ribuan lagu instan dalam hitungan detik. Tapi publik yang masih punya nurani tahu betul bedanya karya yang lahir dari pergulatan jiwa manusia dengan sekadar sampah digital yang dimuntahkan oleh barisan kode server dingin.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 05:00 WIB)");
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
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261109-0500.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Run Error:", err);
    process.exit(1);
  });
}
