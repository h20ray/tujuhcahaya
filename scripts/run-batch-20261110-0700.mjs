import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Take-Two Bidik Rp55 Triliun dari GTA 6 tapi Wall Street Masih Mengeluh Kurang Kenyang",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Gamer Indonesia", "Grand Theft Auto", "GTA 6", "Industri Game", "Konsol Game", "Rockstar Games", "Take-Two"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/9SieU3JpSSPX34eMduXqsW-1920-80.jpg",
    imageAlt: "Ilustrasi grafis logo Grand Theft Auto 6 dan siluet karakter protagonis di bawah sorotan lampu kota Vice City",
    sourceUrl: "https://www.pcgamer.com/games/grand-theft-auto/take-two-expects-to-make-as-much-as-usd3-5-billion-during-the-gta-6-launch-period/",
    excerpt: "Take-Two memproyeksikan perolehan pemesanan bersih hingga 3,5 miliar dolar AS atau setara Rp55 triliun pada kuartal peluncuran GTA 6. Namun pialang saham Wall Street justru mengeluh kecewa karena angka fantastis itu sedikit meleset dari ekspektasi mereka, membuktikan jurang nafsu korporasi yang kian rakus memerah dompet gamer.",
    content: `Bagi gamer kelas pekerja yang gajinya pas-pasan upah minimum kota, menabung demi menebus satu keping game incaran sering kali menuntut pengorbanan batin yang tidak main-main. Kita harus rela memangkas jatah nongkrong di warung kopi, menahan godaan jajan camilan sore hari, hingga menyisihkan sisa uang bensin selama berbulan-bulan cuma agar bisa membeli edisi standar yang banderol harganya kian melambung mendekati angka satu juta rupiah. Di kamar kos yang sempit, game bukan sekadar komoditas digital pengusir penat, melainkan ruang pelarian mewah yang diperjuangkan dengan keringat nyata. Namun di menara gading bursa saham New York, pengorbanan jutaan anak muda di seluruh dunia itu hanyalah deretan angka dingin pada tabel neraca keuangan yang tidak pernah sanggup memuaskan dahaga para pemodal besar.

Pemandangan absurd tersebut terpampang gamblang pekan ini. Sebagaimana dicatat dalam laporan PC Gamer dan Reuters, penerbit raksasa Take-Two Interactive baru saja merilis proyeksi perolehan pemesanan bersih (net bookings) untuk kuartal ketiga tahun fiskal 2027. Korporasi induk Rockstar Games tersebut memperkirakan bakal meraup pemasukan antara 3,35 hingga 3,5 miliar dolar AS—atau setara lima puluh lima triliun rupiah—yang seluruhnya didorong oleh ledakan peluncuran Grand Theft Auto 6 dalam hitungan hari ke depan. Chief Executive Officer Take-Two, Strauss Zelnick, bahkan dengan bangga sesumbar bahwa angka pra-pemesanan (pre-order) GTA 6 terus memecahkan rekor yang belum pernah terjadi sebelumnya sepanjang sejarah industri hiburan modern. Kendati demikian, laporan konsensus analis pasar modal Wall Street yang dihimpun LSEG Data & Analytics justru menyambut parade triliunan tersebut dengan dahi berkerut dan nada kecewa, hanya gara-gara angka proyeksi Take-Two sedikit berada di bawah perkiraan muluk mereka sebesar 3,51 miliar dolar AS.

Membaca keluh kesah para pialang saham tersebut rasanya seperti melihat orang super kaya yang menangis histeris karena cuma disajikan steak wagyu seharga puluhan juta rupiah alih-alih berlian mentah. Di dunia nyata, angka lima puluh lima triliun rupiah sanggup membiayai pembangunan infrastruktur jalan tol lintas provinsi atau merenovasi ribuan sekolah dasar yang atapnya ambruk di pelosok daerah. Tetapi bagi ekosistem pemegang saham, uang triliunan dari kantong pemain itu dianggap belum cukup tebal jika grafik pertumbuhannya tidak melompat melampaui batas langit. Nafsu korporasi yang tak pernah kenyang inilah yang selama ini mencekik leher para pemain. Demi menyenangkan selera investor, penerbit game tak ragu mendongkrak harga jual eceran ke standar seratus dolar AS, mengunci konten menarik di balik edisi kolektor mahal, dan menyiapkan perangkap mikrotransaksi agresif di mode online.

![Ilustrasi grafis logo Grand Theft Auto 6 dan siluet karakter protagonis di bawah sorotan lampu kota Vice City](https://cdn.mos.cms.futurecdn.net/9SieU3JpSSPX34eMduXqsW-1920-80.jpg)

Ketamakan industri semacam ini sudah lama menjadi bahan gunjingan panas di komunitas pemain tanah air. Kita dipaksa menyaksikan bagaimana raksasa video game memperlakukan konsumen layaknya dompet berjalan yang bisa terus diperas tanpa ampun. Pola monetisasi serakah ini mengingatkan kita pada kekhawatiran yang mencuat seputar [pembajakan game dan kecemasan kenaikan harga](/ketika-bos-take-two-santai-hadapi-pembajakan-gta-6-tapi-bikin), di mana sikap santai bos penerbit justru menyimpan ancaman tersembunyi bagi stabilitas isi dompet para pencinta game legal. Situasi kian menggelikan ketika kita melihat hilangnya penghargaan industri terhadap koleksi fisik para pemain, persis seperti skandal [kotak fisik game yang cuma berisi selembar kode unduhan digital](/ketika-kotak-fisik-gta-6-mulai-beredar-tapi-isinya-cuma-selembar) yang membuat pembeli merasa tertipu mentah-mentah di kasir toko ritel. Segala romantisme mencintai sebuah karya seni interaktif seketika menguap begitu melihat bagaimana korporasi memandang komunitas setia semata-mata sebagai statistik serapan pasar.

Jika pendapatan lima puluh lima triliun rupiah dalam sekejap saja masih membuat para investor Wall Street cemberut dan merasa kurang kenyang, masalahnya jelas bukan berada pada kesetiaan para gamer yang sudah rela merogoh tabungan terakhir mereka. Sebelum para petinggi bursa menuntut gamer membayar lebih mahal untuk setiap petualangan digital di Vice City, ada baiknya mereka mencuci muka dengan air dingin warkop agar sadar bahwa video game pada hakikatnya diciptakan untuk menghibur manusia yang lelah bekerja, bukan menjadi tumbal pemuas dividen para konglomerat yang tak pernah merasa cukup.`
  },
  {
    title: "Musisi Indie Menembus New York City Saat Pejabat Baru Sibuk Menempelkan Nama",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Badan Ekonomi Kreatif", "Budaya Urban", "Ekonomi Kreatif", "Gigs Lokal", "Industri Musik", "Kemenekraf", "Margaretha Nina", "Musisi Indie", "The New Colossus Festival"],
    imageUrl: "https://storage.googleapis.com/ekraf-web-prd-bucket-01/landing_page/post_thumbnail_seo/01M70E74DWMEKJCGZMSADE3EYP.webp",
    imageAlt: "Wakil Menteri Ekonomi Kreatif Irene Umar bersama musisi solo Lauren Karina dari proyek .notyourwife saat sesi audiensi resmi di kantor kementerian di Jakarta",
    sourceUrl: "https://ekraf.go.id/news/dari-jakarta-ke-nyc-notyourwife-bawa-warna-baru-musik-indie-indonesia-di-pentas",
    excerpt: "Musisi solo indie Lauren Karina lewat proyek .notyourwife berhasil menembus kurasi The New Colossus Festival 2027 di New York City. Di balik senyum pejabat kementerian yang menjanjikan dukungan moral di depan kamera, para musisi mandiri tanah air masih harus berdarah-darah menanggung sendiri ongkos terbang dan bertahan di ekosistem lokal yang serba sempit.",
    content: `Menjalani hidup sebagai musisi independen di kota-kota besar Indonesia menuntut ketahanan mental baja dan cadangan kesabaran yang nyaris tanpa batas. Tanpa sokongan modal dari label rekaman raksasa, para musisi kamar tidur harus mengotak-atik perangkat rekaman sendiri di kamar kos, merancang sampul album secara mandiri, hingga membiayai distribusi lagu ke platform streaming dari sisa gaji bulanan. Saat turun ke gelanggang pertunjukan, realitas di lapangan kerap kali terasa jauh lebih getir. Mengisi panggung di gigs kecil pinggiran kota sering kali hanya dihargai dengan ucapan terima kasih basa-basi, stiker komunitas, dan sebungkus nasi rames yang dingin. Namun ketika ada seorang seniman mandiri yang berjuang sendiri dari bawah dan berhasil menembus seleksi festival musik bergengsi di belahan bumi lain, mendadak saja pintu kantor kementerian terbuka sangat lebar dengan senyuman paling manis di depan lampu kilat kamera humas.

Pemandangan birokrasi yang menggelitik tersebut kembali tersaji awal pekan ini di Jakarta. Menurut rilis resmi Kementerian Ekonomi Kreatif (Kemenekraf/Bekraf), Wakil Menteri Irene Umar menggelar audiensi resmi untuk menyambut musisi solo Lauren Karina yang mengusung proyek musik indie alternative pop bernama .notyourwife. Lauren berhasil mencatatkan namanya sebagai satu-satunya penampil asal Indonesia dalam pengumuman penampil gelombang pertama ajang The New Colossus Festival 2027 yang bakal dihelat di kawasan Lower East Side, New York City, Amerika Serikat. Dalam pertemuan di gedung kementerian berlantai marmer tersebut, sang wakil menteri mengumbar komitmen bahwa pemerintah berupaya memastikan "pejuang ekraf tidak berjalan sendirian" seraya memuji keberanian Lauren membawa identitas karya nasional ke hadapan kurator industri musik internasional.

Mendengar janji manis bahwa musisi tidak akan berjalan sendirian dari lisan pejabat negara tentu terdengar menyejukkan hati, asalkan kita menutup mata dari fakta bagaimana kerasnya perjalanan menuju New York City. Siapa pun yang pernah berurusan dengan tur lintas negara paham betul bahwa tiket pesawat ke Amerika Serikat, biaya visa seniman yang berbelit-belit, hingga ongkos sewa tempat tinggal di Manhattan selama berhari-hari menelan biaya puluhan juta rupiah. Selama bertahun-tahun, mayoritas musisi lokal yang berangkat ke festival musik mancanegara terpaksa menguras tabungan keluarga, menjual instrumen pribadi, atau mengedarkan kotak donasi patungan ke sesama kawan tongkrongan karena bantuan negara kerap kali mandek di tumpukan proposal birokrasi. Kebiasaan elite yang gemar menumpang panggung saat sang musisi sudah berprestasi setali tiga uang dengan fenomena [pamer angka turis konser asing saat musisi sendiri megap-megap](/kemenpar-pamer-konser-ye-sedot-turis-asing-saat-panggung-musisi), di mana pejabat lebih bersemangat memoles citra pariwisata ketimbang menyiram akar rumput kesenian sendiri.

![Wakil Menteri Ekonomi Kreatif Irene Umar bersama musisi solo Lauren Karina dari proyek .notyourwife saat sesi audiensi resmi di kantor kementerian di Jakarta](https://storage.googleapis.com/ekraf-web-prd-bucket-01/landing_page/post_thumbnail_seo/01M70E74DWMEKJCGZMSADE3EYP.webp)

Dukungan sejati bagi pelaku seni seharusnya tidak berhenti pada sesi seremonial jabat tangan dan foto bersama yang diunggah ke akun media sosial humas. Di tanah air, para musisi independen masih harus pontang-panting menghadapi perizinan acara yang berbelit, pungutan liar aparat saat menyelenggarakan pertunjukan alternatif, hingga semrawutnya [kebijakan hak cipta yang manis di atas kertas tapi royaltinya gaib](/pemerintah-bangga-gratiskan-hak-cipta-saat-royalti-musisi-masih) bagi para pencipta lagu independen. Ketika ruang-ruang kreasi alternatif di dalam negeri terus terhimpit oleh kepentingan komersial dan musisi daerah kesulitan sekadar menyewa tata suara yang layak, lolosnya Lauren Karina ke panggung New York adalah bukti keuletan individu yang luar biasa, bukan hasil dari pembinaan birokrasi yang patut ditepuk dadanya.

Mengundang musisi berprestasi ke ruangan berpendingin udara saat tiket festival internasional sudah di tangan memang cara paling aman bagi pejabat untuk memamerkan kinerja tanpa perlu repot berkeringat. Tetapi bagi ribuan anak band yang saban malam masih patungan menyewa studio latihan di sudut kota, kehadiran negara yang sesungguhnya bukan diukur dari seberapa puitis pidato menteri di depan mikrofon, melainkan dari kemudahan mereka mendapat izin manggung di tanah kelahirannya sendiri tanpa harus dipalak uang keamanan.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 07:00 WIB)");
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
  console.log(`🎉 Batch Publikasi 07:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261110-0700.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
