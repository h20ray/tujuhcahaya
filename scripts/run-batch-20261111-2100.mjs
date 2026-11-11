import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Nvidia Batal Rilis RTX 5080 24 GB Malah Menyelamatkan Dompet Gamer dari Paylater",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Nvidia", "GeForce RTX", "RTX 5080", "Hardware PC", "Gamer PC", "PC Gaming", "VRAM"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/PAyH44t76kADMXqtedRwtk-1920-80.jpg",
    imageAlt: "Ilustrasi kartu grafis GeForce RTX seri 50 buatan Nvidia dengan kipas pendingin masif yang menyita ruang casing komputer",
    sourceUrl: "https://www.pcgamer.com/hardware/graphics-cards/apparently-now-we-wont-see-a-24-gb-rtx-5080-which-is-probably-actually-good-for-our-wallets/",
    excerpt: "Beredar kabar bahwa Nvidia membatalkan rencana perilisan kartu grafis GeForce RTX 5080 varian memori 24 GB dan cuma mempertahankan versi 16 GB. Di tengah harga komponen komputer yang kian tak masuk akal akibat demam kecerdasan buatan, keputusan hijau abu-abu ini justru terasa seperti berkah terselubung bagi dompet para pemain game kasual yang selamat dari godaan cicilan paylater demi barang mewah yang harganya setara motor matic anyar.",
    content: `Bagi siapa saja yang hobi merakit komputer di Indonesia, membuka etalase toko daring saban awal bulan selalu menyajikan pengalaman batin yang campur aduk antara kagum dan depresi ringan. Di satu sisi, kita disuguhi pemandangan jajaran kartu grafis mutakhir berbalut lempengan aluminium tebal dengan deretan lampu kelap-kelip yang sanggup menyilaukan mata kucing tetangga. Di sisi lain, deretan angka nol di label harganya kerap memicu serangan panik mendadak. Membeli satu unit komponen pengolah visual kelas atas hari ini sudah bukan lagi urusan menyisihkan sisa uang jajan, melainkan menuntut komitmen finansial setara uang panai atau setoran muka rumah petak di pinggiran kota. Banyak kawan tongkrongan yang terpaksa memelototi tawaran cicilan kartu kredit atau fitur paylater dengan hati waswas, menimbang apakah rela makan mi instan polos selama dua tahun ke depan hanya demi memanjakan mata di depan layar monitor.

Kepanikan finansial para perakit PC tampaknya bakal sedikit mereda, setidaknya dari godaan kartu grafis kelas sultan yang makin liar. Sebagaimana dicatat oleh jurnalis Jacob Ridley dalam laporannya di PC Gamer, rumor kencang dari kalangan pembocor industri perangkat keras menyebutkan bahwa Nvidia telah membatalkan rencana untuk merilis varian GeForce RTX 5080 berkapasitas memori 24 GB. Alih-alih meluncurkan monster grafis dengan kapasitas VRAM melimpah untuk konsumen umum, kubu hijau dilaporkan hanya akan mempertahankan varian standar berkapasitas 16 GB. Keputusan ini diperkuat oleh pernyataan Senior Vice President Nvidia GeForce, Jeff Fisher, yang menegaskan bahwa fokus produksi perusahaan saat ini tetap terkonsentrasi pada pengapalan varian cip utama seperti seri RTX 5090 tanpa berniat membanjiri pasar dengan terlalu banyak pecahan model eksperimental.

![Ilustrasi kartu grafis GeForce RTX seri 50 buatan Nvidia dengan kipas pendingin masif yang menyita ruang casing komputer](https://cdn.mos.cms.futurecdn.net/PAyH44t76kADMXqtedRwtk-1920-80.jpg)

Mendengar kabar bahwa sebuah produk idaman batal diproduksi biasanya memicu keluhan massal dari para peminat teknologi. Namun di hadapan kartu grafis modern, reaksi komunitas justru berbalik seratus delapan puluh derajat: kita justru bernapas lega. Mengapa? Karena jika varian RTX 5080 dengan memori 16 GB saja sudah diprediksi bakal dipatok menembus angka lebih dari dua puluh lima hingga tiga puluh juta rupiah di pasar tanah air, kita tidak sanggup membayangkan berapa angka keramat yang bakal ditempelkan pada edisi 24 GB. Nvidia selama beberapa tahun terakhir tampaknya sudah kepalang mabuk oleh gelontoran cuan triliunan rupiah dari para raksasa korporasi yang memborong cip akselerator server kecerdasan buatan. Di mata sang raksasa semikonduktor, pasar gamer tradisional yang setia membesarkan nama mereka sejak zaman kartu grafis TNT2 kini cuma dipandang sebagai konsumen kelas dua yang bisa diperas sesuka hati lewat pembagian memori yang pelit.

Kekhawatiran gamer di meja komputer kontrakan sejatinya sangat beralasan. Membeli perangkat keras premium hari ini tidak cuma menguras tabungan pensiun dini, tetapi juga kerap dibayangi kecemasan teknis yang melelahkan. Kita tentu masih ingat betapa paniknya komunitas saat banyak gamer yang [waswas dihantui risiko kabel daya kartu grafis meleleh](/kabel-rtx-50-meleleh-bukti-gamer-pc-puluhan-juta-masih-waswas) akibat standar colokan daya baru yang ringkih, padahal mereka sudah merogoh kocek belasan juta rupiah. Belum lagi urusan optimasi perangkat lunak dari para pengembang game global yang kian ugal-ugalan. Bukannya memoles kode agar permainan berjalan mulus di perangkat menengah, developer studio besar belakangan ini lebih gemar membebankan dosa kemalasan mereka ke pundak konsumen. Situasi timpang ini membuat para pemain game PC merasa dipermainkan, terlebih saat [Valve memajang data frame rate riil di toko Steam](/valve-pajang-data-fps-riil-di-toko-steam-tamparan-keras-untuk) untuk membongkar kebohongan klaim performa yang selama ini ditutup-tutupi para penerbit nakal.

Oleh sebab itu, pembatalan RTX 5080 edisi 24 GB bukanlah sebuah tragedi yang patut diratapi dengan tabur bunga di depan toko komputer mangga dua. Ketiadaan produk tersebut sejatinya adalah berkah keselamatan yang dikirimkan semesta agar kita tidak terjerumus ke jurang utang demi mengejar angka frame rate di pojok layar. Biarlah para konglomerat Lembah Silikon berebut membeli cip komputasi dengan harga selangit untuk melatih robot obrolan mereka. Bagi kita para pemain game santai di warung kopi, bisa menamatkan petualangan favorit dengan kartu grafis generasi lama tanpa mencium aroma plastik terbakar dari dalam casing sudah merupakan kenikmatan hidup yang tiada tara.`
  },
  {
    title: "Boy Group SEEN Siapkan Lagu Anyar di Tengah Keringnya Panggung Musik Pop Tanah Air",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Margaretha Nina", "Boy Group SEEN", "Musik Pop", "Idol Lokal", "Industri Musik", "Budaya Urban", "Lagu Baru"],
    imageUrl: "https://rri-portal-app-assets.obs.ap-southeast-4.myhuaweicloud.com/upload/berita/image/purwokerto/thumbs/xl_1794398028805399_c8e9c5e2fa_berita_purwokerto.webp",
    imageAlt: "Personel grup vokal pria SEEN saat sesi pemotretan promosi karya musik terbaru mereka",
    sourceUrl: "https://rri.co.id/purwokerto/hiburan/2889163/boy-group-seen-siapkan-rilisan-musik-terbaru-akhir-november",
    excerpt: "Grup vokal pria SEEN mengumumkan rencana peluncuran karya musik anyar pada pengujung November 2026 sebagai kelanjutan debut mereka lewat lagu Up Up Up dan Morning Boy. Di tengah dominasi gempuran boy group asal Korea Selatan dan matinya panggung musik varietas televisi nasional, langkah nekat talenta muda lokal ini menyuarakan pergulatan berat idol domestik yang berjuang mencari panggung di negeri sendiri.",
    content: `Kalau Anda sempat tumbuh besar di era akhir dekade dua ribuan, pagi hari di layar kaca televisi keluarga Indonesia pernah menjadi arena paling riuh bagi industri musik pop. Sebelum berangkat ke sekolah atau kantor, ruang tamu kita dihangatkan oleh siaran langsung panggung varietas musik yang disesaki ratusan remaja berkaus seragam sambil memegang tongkat lampu warna-warni. Dari studio berlantai semen itu lahir puluhan grup vokal pria dan wanita dengan koreografi lincah, potongan poni lempar, serta lirik cinta remaja yang mudah nempel di telinga. Namun memori manis tersebut kini tampak seperti artefak dari peradaban kuno yang sudah punah. Jam tayang televisi nasional hari ini telah sepenuhnya dikuasai oleh rentetan sinetron azab keluarga berdurasi ratusan episode atau perdebatan kusir seputar kasus perselingkuhan selebritas, menyisakan ruang hampa bagi musisi muda yang ingin memamerkan karya lewat tarian dan harmoni suara.

Di tengah lanskap hiburan yang serba tandus itulah kabar mengejutkan datang dari ranah musik arus bawah. Sebagaimana dicatat oleh jurnalis Fenny Ayuwardhani Mulyono dalam laporan siaran RRI, grup vokal pria pendatang baru bertajuk SEEN secara resmi mengumumkan tengah mematangkan materi karya musik terbaru yang dijadwalkan meluncur pada akhir November 2026 mendatang. Rilisan anyar ini dirancang sebagai batu loncatan berikutnya bagi boy group tersebut setelah sebelumnya memberanikan diri memperkenalkan warna musikalitas mereka lewat dua lagu debut bertajuk Up Up Up serta Morning Boy pada pengujung September lalu. Langkah konsisten kelompok vokal ini untuk terus melahirkan karya orisinal terasa menyegarkan di tengah kelesuan regenerasi format grup vokal pria dalam negeri.

![Personel grup vokal pria SEEN saat sesi pemotretan promosi karya musik terbaru mereka](https://rri-portal-app-assets.obs.ap-southeast-4.myhuaweicloud.com/upload/berita/image/purwokerto/thumbs/xl_1794398028805399_c8e9c5e2fa_berita_purwokerto.webp)

Menyaksikan sekumpulan pemuda lokal nekat membentuk boy group di Indonesia hari ini sesungguhnya membutuhkan nyali sekeras baja. Mereka tidak hanya harus bertarung melawan persepsi miring publik yang gampang melabeli musisi dalam negeri sebagai pengekor tren luar, tetapi juga harus berhadapan dengan tembok raksasa industri hiburan multinasional. Para penikmat musik muda di kota-kota besar rela merogoh tabungan hingga jutaan rupiah demi membeli tiket konser musisi luar atau album foto eksklusif dari agensi luar negeri. Namun ketika ada anak-anak bangsa yang berlatih koreografi berdarah-darah di studio sewaan sempit demi menyuguhkan harmoni pop serupa, sambutan industri kerap berjarak dingin. Para promotor acara dan pemilik modal lebih suka bermain aman dengan mengulang formula nostalgia yang terbukti laris manis ketimbang menggelontorkan dana pembinaan untuk talenta muda yang sedang merintis reputasi.

Kondisi ini menciptakan jurang pemisah yang kian lebar bagi ekosistem seni pertunjukan kita. Kita menyaksikan bagaimana beberapa talenta perempuan tanah air berhasil mencuri perhatian global, persis saat [grup vokal No Na melenggang ke Coachella](/no-na-melenggang-ke-coachella-2027-saat-panggung-musik-lokal) berkat sokongan jejaring manajemen internasional yang solid. Sayangnya, keberuntungan semacam itu adalah anomali langka bagi ratusan kelompok musik lain yang tertahan di level akar rumput. Di panggung daerah sendiri, kancah pertunjukan lebih sering disesaki oleh kepanikan kurator yang [lebih memilih menjual paket nostalgia musisi gaek](/paket-nostalgia-dewa-19-di-de-tjolomadoe-bukti-panggung-musik) demi menjamin penjualan tiket ludes tanpa risiko rugi. Akibatnya, boy group independen lokal seperti SEEN terpaksa mengandalkan kanal video pendek dan algoritma media sosial yang penuh teka-teki hanya agar musik mereka didengar oleh segelintir pendengar yang penasaran.

Perjuangan anak-anak muda di ruang latihan berlantai licin ini menegaskan bahwa hasrat bermusik tidak bisa dibungkam semata-mata oleh ketiadaan panggung megah di televisi. Membangun basis penggemar setia di negeri sendiri mungkin terasa lambat dan penuh kerikil tajam, tetapi ketulusan berkarya selalu memiliki cara tersendiri untuk menemukan telinga yang tepat. Daripada terus-menerus meratapi punahnya panggung musik pagi yang dulu setia menemani sarapan bubur ayam kita, memberi ruang apresiasi pada karya anyar musisi lokal yang berani bersuara jauh lebih berharga ketimbang sekadar menjadi konsumen pasif di barisan depan konser artis mancanegara.`
  }
];

export async function runBatch() {
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
      markAsSeen(art.sourceUrl.trim());
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi 21:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================\n");
  return results;
}

// CLI Execution
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261111-2100.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Batch Execution Failed:", err);
      process.exit(1);
    });
}
