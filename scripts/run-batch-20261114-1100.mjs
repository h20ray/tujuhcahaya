import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Warga Klaten Tekor Beli Galon Tiap Hari Saat Pipa Air Bersih Masih Sebatas Janji",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Klaten", "Jawa Tengah", "Krisis Air", "Kebijakan Publik", "Sosial Warga", "Margaretha Nina"],
    imageUrl: "https://jatengprov.go.id/wp-content/uploads/2026/11/Bantuan-air-Kalikebo-klaten13.jpg",
    imageAlt: "Warga Desa Kalikebo Klaten antre membawa jeriken dan galon untuk mengambil bantuan air bersih dari tangki",
    sourceUrl: "https://jatengprov.go.id/publik/tak-sekadar-droping-air-pemprov-jateng-siapkan-spam-untuk-atasi-krisis-air-di-kalikebo-klaten/",
    excerpt: "Ratusan kepala keluarga di Desa Kalikebo, Klaten, terpaksa merogoh kocek hingga ratusan ribu sebulan demi membeli galon air minum akibat sumur kering dan payau. Bantuan tangki air memang datang, tetapi solusi permanen masih berupa janji proyek pipa antardesa.",
    content: `Bagi masyarakat perkotaan yang saban pagi tinggal memutar keran wastafel untuk menyikat gigi atau menyeduh kopi sebelum berangkat kerja, membayangkan air bersih sebagai barang mewah barangkali terasa mustahil. Jika tagihan bulanan membengkak beberapa puluh ribu rupiah saja, lini masa media sosial langsung ramai oleh keluhan warga kota yang merasa diperlakukan tidak adil oleh operator utilitas publik. Namun cobalah sesekali melipir ke pelosok pedesaan Jawa Tengah ketika musim kemarau menyapa. Di sana, air jernih yang bisa diminum tanpa membuat perut melilit bukan lagi sekadar kebutuhan biologis, melainkan perjuangan harian yang sanggup menguras seluruh sisa uang belanja dapur dan memaksa otot-otot pinggang bekerja lembur memanggul jeriken plastik.

Pemandangan getir itulah yang setiap hari dijalani oleh warga Desa Kalikebo, Kecamatan Trucuk, Kabupaten Klaten. Sebagaimana dicatat dalam laporan resmi Pemerintah Provinsi Jawa Tengah pekan ini, sekitar 700 kepala keluarga di desa tersebut harus bergelut menghadapi krisis air bersih berkepanjangan sejak Oktober lalu. Sumur-sumur galian milik penduduk mengering tanpa ampun. Jikapun ada sumur bor yang masih memuntahkan cairan dari perut bumi, air yang keluar rasanya payau, pekat berkapur, dan mengalir sangat sedikit (*ithir-ithir*). Warga seperti Ibu Saedah terpaksa mengendapkan air kapur tersebut berjam-jam hanya agar bisa dipakai merebus singkong. Sementara untuk urusan minum dan menanak nasi sekeluarga, warga lain bernama Bu Tukinem mengaku harus membeli empat hingga lima galon air isi ulang setiap hari seharga lima ribu rupiah per galon, sembari terpaksa mandi di aliran sungai desa yang kondisinya kian menyusut.

Jika kita hitung dengan kalkulator sederhana di atas meja warung kopi, seorang ibu rumah tangga di pedesaan Klaten harus membakar uang setidaknya dua puluh hingga dua puluh lima ribu rupiah setiap hari murni untuk membeli air minum kemasan. Dalam kurun waktu satu bulan penuh, angka itu menembus tujuh ratus ribu rupiah—sebuah beban pengeluaran yang teramat mencekik bagi keluarga petani atau buruh harian lepas yang pendapatan bulanannya tidak menentu. Ironisnya, krisis air ini bukanlah bencana alam gaib yang datang mendadak tanpa kabar, melainkan rutinitas tahunan yang terus berulang tanpa penyelesaian tuntas di tingkat akar rumput.

![Warga Desa Kalikebo Klaten antre membawa jeriken dan galon untuk mengambil bantuan air bersih dari tangki](https://jatengprov.go.id/wp-content/uploads/2026/11/Bantuan-air-Kalikebo-klaten13.jpg)

Di tengah jeritan dompet warga yang kian tipis, aparat pemerintah daerah memang akhirnya hadir membawa armada truk tangki air ke balai desa. Seremoni penyaluran air bersih pun digelar dengan rapi, lengkap dengan dokumentasi pejabat yang menyaksikan ember-ember warga terisi penuh. Manajemen birokrasi kemudian melontarkan wacana puitis tentang pembangunan jaringan Sistem Penyediaan Air Minum (SPAM) antardesa sebagai solusi permanen jangka panjang. Namun bagi ratusan warga desa yang tenggorokannya sudah kering berpekan-pekan, retorika proyek infrastruktur di masa depan tidak bisa diminum hari ini. Mentalitas pemadam kebakaran yang hanya sibuk mengucurkan bantuan tangki dadakan saat krisis sudah mencapai puncaknya adalah cermin klasik dari birokrasi yang gagap mitigasi. Pola penanganan tambal sulam ini mengulang kebiasaan lama [kebijakan daerah yang kerap melempar beban gotong royong ke pundak warga](/ketika-99-persen-paud-jateng-dikelola-warga-dan-negara-cuma), di mana rakyat kecil dipaksa bertahan hidup sendiri dengan biaya swadaya sebelum aparatur negara turun tangan. Realitas pahit warga Klaten ini sekaligus menjadi antitesis telanjang terhadap narasi megah tentang [klaim kemajuan ekonomi yang kontras dengan realitas warga di lapangan](/ekonomi-jateng-naik-583-persen-diklaim-berkat-mtq-logika-anggaran), saat statistik pertumbuhan ekonomi dipamerkan di podium seminar sementara kebutuhan paling purba rakyatnya belum kunjung terjamin.

Di obrolan pos ronda desa ketika deretan jeriken biru masih mengular menunggu giliran kucuran tangki bantuan, warga Kalikebo cuma bisa tersenyum getir sembari membetulkan letak sarung. Menikmati kucuran air tangki gratisan sembari menanti realisasi pipa transmisi memang patut disyukuri ketimbang tidak dapat sama sekali. Namun jika musim kemarau tahun depan warga Klaten masih harus tekor ratusan ribu rupiah demi menenggak air galon isi ulang, barangkali yang kekeringan di Jawa Tengah sesungguhnya bukan sumber mata air tanah, melainkan komitmen para pemangku kebijakan untuk menuntaskan perkara paling mendasar warganya.`
  },
  {
    title: "Bethesda Umbar Janji Fallout 5 Saat Gamer Masih Menanti The Elder Scrolls 6",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Bethesda", "Fallout 5", "Fallout 3 Remaster", "Industri Game", "PC Gaming", "Andoru Ray"],
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2025/12/fallouts2tbimage3_3000.jpg",
    imageAlt: "Ilustrasi baju zirah Power Armor ikonik dari semesta pasca-apokaliptik Fallout garapan Bethesda",
    sourceUrl: "https://www.polygon.com/fallout-5-fo3-remaster-new-games-bethesda-softworks/ ",
    excerpt: "Bethesda resmi mengumumkan pengerjaan Fallout 5 bersama proyek poles ulang Fallout 3 dan New Vegas. Alih-alih gembira, gamer PC justru tersenyum masam mengingat proyek The Elder Scrolls 6 saja belum kunjung berwujud setelah bertahun-tahun dijanjikan.",
    content: `Jika ada satu hal yang paling dikuasai oleh Bethesda Softworks melebihi kemahiran mereka merancang dunia permainan peran berlatar gurun nuklir, hal itu tidak lain adalah keahlian menjual angan-angan fiktif puluhan tahun sebelum barangnya selesai digarap. Bagi siapa saja yang sudah mengarungi jagat game PC sejak era monitor tabung, pengumuman proyek anyar dari studio pimpinan Todd Howard ini selalu memicu dilema emosional yang campur aduk: antara rasa penasaran setengah mati atau rasa jengah yang teramat sangat. Kita semua masih ingat betul bagaimana video cuplikan pemandangan gunung berkabut di ajang E3 bertahun-tahun silam sukses membakar antusiasme jutaan orang di seluruh muka bumi, namun sampai hari ini wujud aslinya masih gelap gulita layaknya menjelajahi gua bawah tanah tanpa obor.

Kini, formula tebar pesona yang sama kembali mereka putar ke hadapan publik. Sebagaimana dicatat dalam laporan investigasi Polygon pekan ini, Bethesda secara resmi mengumumkan peta jalan ambisius untuk semesta pasca-kiamat mereka. Tidak tanggung-tanggung, studio yang kini bernaung di bawah payung Microsoft tersebut mengonfirmasi bahwa pengerjaan Fallout 5 telah resmi dimulai sebagai target jangka panjang. Untuk mengisi kekosongan waktu tunggu yang diprediksi bakal memakan waktu bertahun-tahun, manajemen menyiapkan rentetan proyek transisi: mulai dari polesan ulang (remaster) untuk judul legendaris Fallout 3 dan Fallout: New Vegas ke konsol generasi mutakhir, ekspansi anyar Raven Rock untuk Fallout 76 pada 2027, hingga proyek misterius tanpa judul yang digarap bersama Obsidian Entertainment.

Mendengar parade janji manis tersebut di warung kopi tempat gamer PC biasa nongkrong, tanggapan yang muncul bukanlah teriakan histeris girang, melainkan senyum masam yang penuh rasa skeptis. Komunitas pemain bukan anak kemarin sore yang gampang terpukau oleh selembar logo atau klaim peta jalan di atas kertas siaran pers. Kita tahu persis bahwa Fallout 5 saat ini barangkali baru berupa tumpukan dokumen konsep di meja perancang naskah. Mengumumkan sebuah judul game raksasa ketika studio masih pontang-panting menyelesaikan proyek fantasi lain adalah taktik promosi klasik yang kian usang. Publik belum lupa bagaimana [kekecewaan fans menanti kabar The Elder Scrolls 6](/bethesda-siram-air-dingin-ke-muka-gamer-yang-ngarep-kabar-anyar) masih terus berlanjut tanpa kepastian tanggal rilis yang nyata, membuktikan bahwa Bethesda lebih mahir menanam harapan palsu ketimbang menepati jadwal kerja.

![Ilustrasi baju zirah Power Armor ikonik dari semesta pasca-apokaliptik Fallout garapan Bethesda](https://static0.polygonimages.com/wordpress/wp-content/uploads/2025/12/fallouts2tbimage3_3000.jpg)

Keputusan Bethesda untuk menabur nostalgia lewat proyek polesan ulang Fallout 3 dan New Vegas pun mempertegas kepanikan korporat di tengah keringnya rilisan orisinal berkelas. Di platform komputer, para gamer sudah puluhan tahun menikmati kedua game tersebut dengan kualitas grafis modern, tata cahaya fotorealistis, dan kestabilan sistem yang jauh lebih superior berkat dedikasi komunitas modder sukarela yang bekerja tanpa bayaran sepeser pun. Menjual kembali permainan lawas berumur belasan tahun dengan kemasan resolusi 4K dan banderol harga penuh adalah jalan pintas yang sangat menggiurkan bagi kas kasir korporasi. Strategi daur ulang ini melengkapi catatan buruk [kebiasaan Bethesda yang gemar menjual kembali kaset lawas demi cuan mudah](/modder-bikin-skyrim-jadi-mmo-abadi-saat-bethesda-masih-doyan-jual), daripada berinvestasi serius membangun mesin permainan modern yang bebas dari aneka gangguan bug mekanik warisan masa lampau. Janji manis ini kian terasa klise saat para bos penerbit game besar terus mengulang [kebiasaan menebar janji kosong proyek ambisius](/xbox-pamer-naskah-wolfenstein-3-saat-gamer-pc-sudah-kenyang-janji) demi menjaga harga saham perusahaan tetap kinclong di mata para pemodal.

Pada akhirnya, para penikmat game PC hanya bisa menghela napas panjang sembari kembali menyalakan komputer dan meluncurkan modding buatan kawan sebaya di forum komunitas. Tidak ada gunanya menahan napas menunggu Fallout 5 yang entah baru akan terbit saat anak-anak kita sudah masuk bangku kuliah. Menatap pengumuman Bethesda hari ini seperti mendengarkan kawan tongkrongan yang berjanji bakal mentraktir makan di restoran bintang lima suatu hari nanti, padahal untuk membayar secangkir kopi saset di depan mata saja ia masih gemar meminjam uang receh. Nikmati saja apa yang bisa dimainkan hari ini di etalase Steam, karena janji manis Todd Howard tidak akan pernah bisa dimuat ke dalam kartu grafis komputer kita.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 11:00 WIB)");
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
  console.log(`🎉 Batch 11:00 selesai! Total artikel terbit: ${results.length}`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261114-1100.mjs")) {
  runBatch().catch(err => {
    console.error("Batch 11:00 execution failed:", err);
    process.exit(1);
  });
}
