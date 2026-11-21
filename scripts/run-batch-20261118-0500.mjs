import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Laba Nvidia Tembus Rekor Tanpa Jensen Huang Saat Gamer PC Kebagian Remahan",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Nvidia", "Jensen Huang", "Kecerdasan Buatan", "Pusat Data", "PC Gaming", "Industri Semikonduktor"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25835739/STKP210_JENSEN_HUANG_B.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Ilustrasi mantan CEO Nvidia Jensen Huang di tengah sorotan laporan keuangan kuartal ketiga perusahaan cip AI tersebut",
    sourceUrl: "https://www.theverge.com/tech/1036032/nvidia-q3-2027-jensen-huang",
    excerpt: "Nvidia meraup pendapatan 115,8 miliar dolar AS di kuartal ketiga tanpa menyebut Jensen Huang sedikit pun. Mesin duit pusat data AI tetap ngebut sementara segmen gamer PC makin tampak seperti proyek sampingan.",
    content: `Di kantor mana pun yang masih waras mengurus infrastruktur server, ada satu kepercayaan konyol yang sering dipelihara direksi: kalau bos besar atau arsitek utama mendadak cuti panjang atau terdepak, mesin perusahaan bakal langsung batuk-batuk. Karyawan kecil di ruang server biasanya ikut cemas membayangkan grafik trafik anjlok dan tagihan vendor macet. Padahal di perusahaan raksasa yang sudah mengunci monopoli pasar, siapa pun yang duduk di kursi direktur utama ternyata tidak terlalu memengaruhi derasnya aliran duit masuk ke brankas.

Pemandangan itu terpampang terang benderang dalam laporan keuangan kuartal ketiga tahun fiskal Nvidia yang baru saja diumumkan pekan ini. Sebagaimana dicatat oleh jurnalis The Verge, CEO interim Nvidia Colette Kress membeberkan pencapaian finansial perusahaan pada Selasa waktu setempat dengan sikap yang luar biasa dingin: tidak sepatah kata pun ia menyinggung nama mantan CEO Jensen Huang, drama kepergiannya, maupun kasak-kusuk upayanya untuk kembali merebut kursi pimpinan. Di hadapan publik, mesin bisnis Nvidia berjalan seolah sosok berjaket kulit hitam itu tidak pernah ada.

Angkanya sendiri memang kelewat gila untuk ukuran perusahaan penjual cip komputer. Nvidia resmi masuk ke klub elite korporasi yang sanggup menangguk lebih dari seratus miliar dolar dalam satu kuartal saja. Total pendapatan mereka melonjak 103 persen dibanding tahun lalu hingga menembus 115,8 miliar dolar AS, melampaui proyeksi awal yang dipatok di kisaran 108 miliar dolar. Dari total pemasukan raksasa itu, perusahaan membukukan laba bersih sebesar 65,3 miliar dolar AS—sebuah rekor baru yang bahkan diproyeksikan bakal berlanjut menuju target pendapatan 130 miliar dolar pada kuartal keempat mendatang.

![Ilustrasi mantan CEO Nvidia Jensen Huang di tengah sorotan laporan keuangan kuartal ketiga perusahaan cip AI tersebut](https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25835739/STKP210_JENSEN_HUANG_B.jpg?quality=90&strip=all&crop=0,0,100,100)

Namun di balik perayaan rekor tersebut, ada rincian angka yang layak bikin orang-orang di warung kopi dan pengguna PC rumahan mengangkat alis. Dari total 115,8 miliar dolar pendapatan kuartalan tadi, sektor pusat data menyumbang 107,6 miliar dolar AS atau meroket 110 persen dari tahun sebelumnya. Sementara itu, divisi *edge computing*—yang mencakup bisnis kartu grafis PC gaming konsumen hingga perangkat seperti laptop RTX Spark—cuma menyumbang 8,2 miliar dolar AS. Angka tersebut memang naik 42 persen, tetapi porsinya kini bahkan tidak sampai delapan persen dari setoran rak-rak server kecerdasan buatan.

Kress dalam pernyataannya memuji habis-habisan momentum perusahaan dan menyebut lini arsitektur cip terbaru mereka, Vera Rubin, sudah tancap gas sejak garis awal. Di ruang rapat investor, narasi semacam ini tentu terdengar seperti musik pengantar tidur yang manis. Tetapi di luar gedung kaca korporasi, kontras neraca tersebut membuktikan sesuatu yang selama ini cuma menjadi bahan gerutuan teknisi dan perakit komputer: bisnis GPU konsumen kini bukan lagi anak emas, melainkan sekadar etalase nostalgia dari masa lalu perusahaan.

Lebih ironis lagi, performa bisnis yang tetap melaju kencang tanpa kehadiran sang pendiri justru menelanjangi betapa lucunya drama pemujaan tokoh di Lembah Silikon. Belum lama ini kita menyaksikan bagaimana [bos Silicon Valley kompak membela Jensen Huang](/bos-silicon-valley-kompak-bela-jensen-huang-saat-skandal) dengan dalih seolah kelangsungan inovasi semikonduktor dunia bakal kiamat tanpa dirinya. Kenyataannya, begitu kontrak pusat data dan rantai pasok cip AI sudah terkunci rapat, perusahaan tetap sanggup mencetak laba puluhan miliar dolar meski nama sang ikon sengaja dilupakan di naskah pembukaan laporan keuangan.

Bagi warga biasa, pekerja IT skala kecil, hingga perakit PC di Indonesia yang masih harus menabung berbulan-bulan demi menebus kartu grafis kelas menengah, ledakan uang di sektor pusat data ini justru membawa efek samping yang menyebalkan. Ketika setiap keping silikon dan pasokan memori tersedot ke gudang server perusahaan teknologi raksasa—persis seperti kejanggalan saat [bos AI ngaku dukung warga punya RAM melimpah](/sam-altman-ngaku-dukung-warga-punya-banyak-ram-saat-pusat-data-ai) di tengah krisis pasokan—konsumen ritel cuma kebagian harga komponen yang melambung dan janji pemanis belaka.

Laporan keuangan Nvidia pekan ini pada akhirnya menjadi pengingat pahit bagi siapa saja yang masih percaya dongeng bahwa perusahaan teknologi raksasa bergantung pada satu manusia jenius atau peduli pada penggemar lamanya. Ketika setoran dari pusat data AI sudah menembus seratus miliar dolar per tiga bulan, kursi CEO bisa diisi siapa saja dan konsumen gaming cukup diberi remahan 8,2 miliar dolar—itupun sambil diminta bertepuk tangan merayakan rekor laba yang tidak pernah turun ke dompet mereka.`
  },
  {
    title: "Musisi Indie notyourwife Tembus New York Saat Pejabat Baru Sibuk Audiensi",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["notyourwife", "Musik Indie", "The New Colossus Festival", "Ekonomi Kreatif", "Musisi Indonesia", "Budaya Gigs"],
    imageUrl: "https://lensabanten.co.id/wp-content/uploads/2026/11/1794882512229.jpg",
    imageAlt: "Lauren Karina dari proyek musik indie .notyourwife saat bersiap tampil di The New Colossus Festival 2027 di New York",
    sourceUrl: "https://news.google.com/rss/articles/CBMiygFBVV95cUxObk9US29SQ1JjY1RRSDJRMTh0c0dMMXM0NnFTdzNrY1dFalBKOHR2Wk5YS0FZTjJrX2ZBTGUzUXBDMXZfN2xXdFd6WEJab0NHM2Znc3JMc2ZHVTYtdF8tSTBoZm1IcG1Eb3lhYmNNXzNOTGlCdjRnY1ZQWk9ZdDR0dkNXUy1vM2J6WkFlZzMta2RFZ2docmphU3VabWVwNU9Tc2RGb1pEYS00UTdZWnhLZnlYZ3RZSUpBUnFDLUdNNklBUHJRelk0RzBB?oc=5",
    excerpt: "Proyek musik solo asal Jakarta .notyourwife resmi lolos ke lineup gelombang pertama The New Colossus Festival 2027 di New York. Di balik pencapaian mandiri itu, dukungan negara masih sering berhenti di meja audiensi.",
    content: `Di Jakarta dan kota-kota satelitnya, perjalanan musisi independen menembus panggung luar negeri hampir selalu dimulai dari ruang kamar sempit, bukan dari ruang rapat kementerian berpendingin udara. Mereka merekam demo dengan perlengkapan seadanya, mengirimkan email berisi tautan musik ke ratusan kurator festival asing yang sering kali tidak membalas, lalu menghitung ulang isi tabungan agar cukup membeli tiket pesawat kelas ekonomi tanpa bagasi tambahan. Kalau beruntung lolos kurasi, barulah pintu foto bersama pejabat mendadak terbuka lebar lengkap dengan kalimat penyemangat soal "musik Indonesia mendunia".

Kabar segar dari jalur sunyi itu datang pekan ini lewat proyek musik *indie alternative pop* asal Jakarta bernama .notyourwife yang digawangi Lauren Karina. Sebagaimana dilaporkan Lensa Banten, musisi solo tersebut resmi masuk dalam pengumuman *lineup* gelombang pertama The New Colossus Festival 2027 yang bakal digelar pada 9 hingga 14 Maret 2027 di kawasan Lower East Side, New York City. Hebatnya lagi, .notyourwife tercatat sebagai satu-satunya perwakilan musisi Indonesia dalam pengumuman gelombang awal ajang tersebut.

Bagi ekosistem musik arus bawah, The New Colossus bukan sekadar festival hura-hura pencari konten media sosial, melainkan konferensi sekaligus panggung *showcase* yang mempertemukan musisi pendatang baru dunia dengan puluhan jurnalis, kurator, dan label rekaman independen global. Dalam keterangannya, Lauren menyebut kehadirannya di New York membawa perjalanan serta perjuangan pribadinya sebagai penulis lagu asal Indonesia agar karya anak bangsa bisa memicu ketertarikan audiens internasional. Di sela kesibukan bermusik, Lauren juga dikenal aktif membuat konten edukasi melalui akun @indonesianwithlauren.

![Lauren Karina dari proyek musik indie .notyourwife saat bersiap tampil di The New Colossus Festival 2027 di New York](https://lensabanten.co.id/wp-content/uploads/2026/11/1794882512229.jpg)

Tentu saja kabar keberhasilan menembus New York ini langsung menyedot perhatian Jakarta. Wakil Menteri Ekonomi Kreatif Irene Umar sempat menerima audiensi Lauren dan menyampaikan bahwa pemerintah tengah berupaya memperluas kesempatan tampil bagi musisi tanah air di panggung internasional agar bisa membangun jejaring dan menjangkau pasar global. Di permukaan, ucapan manis semacam itu terdengar meneduhkan: seolah ada jembatan kokoh yang sudah dibangun negara untuk mengantar musisi kamar tidur melenggang ke panggung dunia.

Masalahnya, para pekerja musik independen dan kru panggung lokal sudah terlalu sering mendengar janji "memperluas kesempatan" yang berhenti sebatas sesi jabat tangan di depan kamera. Berangkat ke ajang *showcase* seperti di Lower East Side membutuhkan ongkos logistik, akomodasi, pengurusan visa kerja seni yang berbelit, hingga biaya sewa perangkat panggung yang tidak murah. Selama ini, beban raksasa itu hampir seluruhnya dipikul sendiri oleh musisi lewat kerja sampingan, patungan komunitas, atau menguras dana pribadi, persis seperti saat [Beltigs nekat menggelar tur mandiri ke enam kota Jepang](/tur-mandiri-beltigs-ke-enam-kota-jepang-tampar-musisi-yang-doyan) tanpa mengemis belas kasihan sponsor maupun program seremonial.

Ketimpangan ini makin terasa janggal jika menoleh ke kondisi dapur ekonomi musik di dalam negeri sendiri. Di saat musisi solo berjuang keras membangun nama di luar negeri lewat jalur kurasi ketat, persoalan mendasar seperti hak ekonomi kreator di rumah sendiri masih saja muter-muter di tempat yang sama, terlihat ketika [KCI sibuk menyodorkan alat pencatat royalti ke menteri](/kci-sodorkan-alat-pencatat-royalti-ke-menteri-saat-pencipta-lagu) sementara banyak pencipta lagu masih resah memantau rekening mereka. Negara sering tampak bersemangat menyambut piala dan undangan luar negeri, namun gagap mengurus fondasi ekosistem panggung kecil dan tata kelola royalti di halaman belakang sendiri.

Meski begitu, lolosnya .notyourwife tetap layak dirayakan sebagai kemenangan ketekunan anak muda yang menolak pasrah pada sempitnya panggung industri arus utama lokal. Ia membuktikan bahwa karya *alternative pop* yang lahir dari Jakarta mampu berbicara sejajar di hadapan kurator internasional tanpa perlu meniru resep seragam algoritma radio atau menunggu restu konglomerat rekaman.

Pada Maret nanti, Lauren Karina akan memanggul gitar dan suaranya ke panggung Lower East Side bukan karena karpet merah birokrasi, melainkan berkat kerja kerasnya mengetuk pintu dunia sendirian. Kita tentu berharap pemerintah kelak tidak cuma rajin menggelar audiensi manis saat musisi sudah memegang tiket keberangkatan, sebab tepuk tangan pejabat di Jakarta tidak pernah bisa dipakai membayar sewa penginapan maupun biaya visa di New York.`
  }
];

async function runBatch() {
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
