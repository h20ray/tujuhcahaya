import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "AMD Ngaku Cinta Gamer Padahal Baru Saja Mengaku Lebih Utamakan Pusat Data",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["AMD", "Kartu Grafis", "PC Gaming", "Hardware PC", "Industri Game", "Pusat Data"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/HPZZoqVz3GyBbJX3DsQ4GR-1920-80.jpg",
    imageAlt: "Ilustrasi kartu grafis AMD Radeon di tengah pergeseran fokus perusahaan ke cip pusat data",
    sourceUrl: "https://www.pcgamer.com/hardware/graphics-cards/amd-says-it-loves-gamers-only-weeks-after-proclaiming-it-is-a-datacenter-first-company/",
    excerpt: "AMD Japan mengklaim mencintai gamer di atas segalanya hanya beberapa pekan setelah CEO Lisa Su menyebut perusahaannya mengutamakan pusat data.",
    content: `Pernah punya teman tongkrongan yang mendadak menghilang berbulan-bulan karena sibuk mengejar proyek bareng bos besar, lalu tiba-tiba muncul lagi di grup chat sambil bilang kalian tetap sahabat nomor satunya? Biasanya kita cuma bisa tersenyum kecut sambil membatin dalam hati bahwa ucapan manis tanpa bukti cuma buang-buang kuota.

Perasaan canggung macam itulah yang sedang dirasakan komunitas pemain PC ketika melihat manuver terbaru dari kubu merah, AMD. Baru saja beberapa pekan lalu para eksekutif mereka bicara blak-blakan di hadapan pemegang saham, eh minggu ini akun media sosial resminya mendadak menebar rayuan gombal ke pemain gim.

## Rayuan Manis di Tengah Harga Komponen Mencekik

Sebagaimana dicatat dalam laporan PC Gamer pekan ini, akun resmi AMD Japan baru saja melontarkan pernyataan terbuka bahwa AMD mencintai gamer. Tidak berhenti di situ, mereka bahkan berani menambahkan klaim bahwa perusahaan menghargai interaksi bersama komunitas pemain di atas segalanya.

Cuitan bernada penuh kasih sayang tersebut rupanya dilontarkan untuk merespons laporan media hardware Tom's Hardware soal kunjungan CEO AMD, Dr. Lisa Su, ke pembukaan gerai baru Micro Center di Austin, Texas. Dalam acara tersebut, Lisa Su memang menyempatkan diri menyapa pengunjung serta membagikan kartu grafis RX 9070 XT bertanda tangan dan bingkisan suvenir.

Masalahnya, aksi bagi-bagi tanda tangan di satu toko ritel Amerika Serikat jelas tidak otomatis menghapus jejak ucapan Lisa Su sendiri beberapa minggu sebelumnya. Dalam paparan resmi di hadapan investor, sang bos besar sudah telanjur keceplosan menyebut AMD kini beroperasi sebagai perusahaan yang memprioritaskan pusat data alias *datacenter-first company*.

![Ilustrasi kartu grafis AMD Radeon di tengah pergeseran fokus perusahaan ke cip pusat data](https://cdn.mos.cms.futurecdn.net/HPZZoqVz3GyBbJX3DsQ4GR-1920-80.jpg)

Tak butuh waktu lama, unggahan AMD Japan di platform X langsung diserbu balasan sinis dari warganet dan ditempeli fitur *Community Notes*. Catatan pembaca itu secara dingin mengingatkan kembali deklarasi *datacenter-first* yang masih segar di ingatan para perakit PC.

## Angka Kuartalan yang Sulit Dibantah

Secara logika bisnis perusahaan terbuka, langkah AMD mengejar pasar kecerdasan buatan dan komputasi awan sebenarnya masuk akal. Dalam laporan kinerja kuartal ketiga mereka, pendapatan dari segmen pusat data tercatat menembus 8,5 miliar dolar AS atau melonjak hingga 97 persen.

Angka fantastis tersebut lebih dari dua kali lipat gabungan pendapatan segmen klien dan gaming yang hanya berada di kisaran 3,7 miliar dolar AS. Lebih miris lagi jika melihat pos pendapatan murni divisi gaming yang cuma menyentuh 773 juta dolar AS dan masih terus merosot.

Data keuangan itu membuktikan ke mana sebenarnya aliran silikon dan prioritas riset perusahaan berlabuh. Kondisi ini nyaris identik dengan yang dialami rival utamanya, seperti terlihat saat [laba Nvidia menembus rekor sementara gamer PC cuma kebagian remahan](/laba-nvidia-tembus-rekor-tanpa-jensen-huang-saat-gamer-pc) dari sisa kapasitas produksi pabrik semikonduktor.

Bagi rakyat jelata yang cuma ingin merakit komputer buat main game sepulang kerja, ketimpangan prioritas ini terasa langsung di dompet. Harga kartu grafis kelas menengah dan SSD melonjak melampaui bujet wajar anak kos, diperparah oleh fenomena [pusat data AI yang menyedot pasokan RAM dunia](/sam-altman-ngaku-dukung-warga-punya-banyak-ram-saat-pusat-data-ai) hingga membuat komponen rakitan makin langka.

## Jangan Jual Gimmick Cinta Saat Stok Menipis

Sebenarnya tidak ada gamer waras yang melarang pabrikan perangkat keras mencari untung dari perusahaan teknologi raksasa. Semua orang paham bahwa margin keuntungan cip server jauh lebih menggiurkan daripada menjual GPU ke pemain rumahan yang hobi berburu diskon akhir tahun.

Namun memaksa tim pemasaran menulis kalimat cinta sejati untuk gamer saat rak toko masih sepi inovasi dan harganya bikin sesak napas adalah blunder komunikasi yang kelewat polos. Ucapan manis tanpa jaminan ketersediaan stok dan harga masuk akal hanya terdengar seperti basa-basi humas korporasi yang takut kehilangan muka.

Kalau memang pusat data sudah jadi anak emas nomor satu di ruang rapat direksi, akui saja dengan jujur tanpa perlu drama pengakuan cinta di media sosial. Lagipula, tanda tangan CEO di atas boks kartu grafis tidak pernah bisa menurunkan suhu panas tagihan cicilan rakitan PC yang harganya sudah setara motor bekas.`
  },
  {
    title: "JOOX 10.0 Campur Dangdut dengan Drama AI dan Misi Poin Demi Kejar Jam Tayang",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["JOOX", "Musik Indonesia", "Streaming Musik", "Kecerdasan Buatan", "Budaya Pop", "Industri Musik"],
    imageUrl: "https://image.idn.media/post/20261118/joox-a_d59f6fd5-68a5-407c-9806-f0e6672da6c9.jpg",
    imageAlt: "Tampilan peluncuran pembaruan aplikasi JOOX 10.0 di Indonesia dengan fitur hiburan musik dan AI",
    sourceUrl: "https://duniaku.idntimes.com/tekno/tren/joox-10-0-resmi-hadir-di-indonesia-fitur-video-pendek-dan-musik-ai-00-t44m3-ysl166",
    candidateLink: "https://news.google.com/rss/articles/CBMivwFBVV95cUxNZ25UaG9xQ1dYY2hzLTNaUkFCbUttdTlKM0hwVHlzNUFPRFdLd3ZjSTRpcU5XZkI4ak9tNGxrbGhlcVZwR3hYaElqNTdRT2dOVXNielZzdWlaclVEeU5RRVQyQkJBM3VSQUZHVU5aV2JHOXgwcXFGdFhtd01oRjMzZXpfRkttazFzdTRvYnk5REdLVzhQTERIRElBZ0xzUVlmRTZYUlI4YVZYUHc0Q1FvaC15RnFGWmxqOE15R1FLTQ?oc=5",
    excerpt: "JOOX 10.0 resmi hadir di Indonesia membawa katalog Dangdut, drama pendek berbasis AI, fitur AI Songwriting, serta sistem misi berhadiah poin.",
    content: `Dulu kalau membuka aplikasi pemutar lagu di ponsel, niat kita cuma satu dan sederhana: pasang earphone, putar daftar lagu andalan, lalu lanjut bengong menatap jendela bus kota atau kereta komuter. Aplikasi musik tidak perlu repot menyuruh kita menonton sinetron atau berburu koin harian seperti permainan kasual di pusat perbelanjaan.

Namun lanskap layanan *streaming* hari ini rupanya semakin gelisah mengejar durasi layar pengguna. Alih-alih sekadar jadi tempat singgah yang tenang untuk telinga, aplikasi pemutar lagu kini berlomba menyulap dirinya menjadi etalase hiburan serba ada yang takut kalah ramai dari platform video pendek.

## Dari Dangdut hingga Drama Pendek Berbasis AI

Bukti teranyar dari kegelisahan industri tersebut baru saja mendarat lewat peluncuran JOOX 10.0 di pasar Indonesia. Menurut laporan Duniaku pekan ini, JOOX secara resmi merombak aplikasi mereka agar tidak lagi berhenti pada fungsi pemutar musik semata.

Dalam keterangan resminya, Head of JOOX Business Camile Chen menyebut pembaruan versi kesepuluh ini dirancang sebagai ruang eksplorasi berbagai aktivitas hiburan dalam satu aplikasi. Di sisi katalog musik, mereka memang memperluas koleksi lokal dengan kategori genre yang sangat membumi seperti Dangdut, Galau, Lagu Timur, dan Indo Pop.

Sayangnya, langkah merangkul selera lokal itu langsung dibarengi sajian yang bikin alis terangkat: koleksi drama pendek berbasis AI. Beberapa judul yang sudah nangkring di beranda aplikasi antara lain *The Wife's Counterattack (Serangan Balik Sang Istri)* serta drama fantasi *xianxia* berjudul *Wild Cat (Kucing Liar)*.

![Tampilan peluncuran pembaruan aplikasi JOOX 10.0 di Indonesia dengan fitur hiburan musik dan AI](https://image.idn.media/post/20261118/joox-a_d59f6fd5-68a5-407c-9806-f0e6672da6c9.jpg)

Tidak cukup menyodorkan tontonan sintetis, JOOX 10.0 turut menanamkan fitur *AI Songwriting* yang mengizinkan siapa pun membikin lagu orisinal dalam beberapa ketukan tanpa butuh keahlian bermusik. Untuk mengikat pengguna agar betah berlama-lama, tersedia pula mini-game dan sistem tugas harian berhadiah poin yang bisa ditukar berbagai imbalan.

## Musik Jadi Umpan di Tengah Banjir Konten Instan

Jika dicermati lebih jauh, pergeseran JOOX menuju format aplikasi super berbalut misi poin dan generator lagu instan mencerminkan krisis identitas yang makin akut di bisnis *streaming*. Persaingan ketat melawan raksasa global dan algoritma media sosial membuat margin dari sekadar memutar lagu resmi terasa makin sempit.

Fenomena merangkap mesin pembuat konten AI ini juga mengingatkan pada langkah [platform musik AI yang sibuk merilis fitur video padahal audionya masih diprotes](/suno-bikin-video-ai-padahal-urusan-audio-saja-masih-diprotes). Semua pemain tampak terobsesi mengejar metrik keterlibatan pengguna dengan cara membanjiri layar lewat konten cepat saji.

Di sisi lain, kemudahan membikin lagu lewat tombol AI menimbulkan pertanyaan besar bagi ekosistem musisi tanah air yang selama ini bekerja keras di studio. Ketika aplikasi mendorong pendengarnya memproduksi lagu sendiri demi mengumpulkan poin tugas, posisi karya musisi sungguhan berisiko tergeser menjadi sekadar suara latar di antara drama AI dan iklan.

Ironisnya, gebrakan otomatisasi lagu ini hadir di saat para pekerja kreatif lokal masih terus memperjuangkan hak dasar mereka, mulai dari [kegelisahan pencipta lagu soal transparansi royalti](/kci-sodorkan-alat-pencatat-royalti-ke-menteri-saat-pencipta-lagu) hingga upaya mencari ruang hidup yang adil di luar algoritma.

Di tengah gempuran konten serba otomatis itu, musisi independen daerah maupun pendatang baru makin dituntut bersaing bukan hanya melawan sesama manusia, melainkan juga lagu-lagu bikinan mesin yang bertebaran demi mengejar poin aplikasi. Penikmat musik pun diam-diam diajak menggeser kebiasaan mendengar menjadi sekadar menyicil tugas harian demi hadiah receh.

## Saat Telinga Butuh Ruang Tanpa Misi Harian

Bagi penikmat hiburan yang senang mengisi waktu luang sambil mengumpulkan poin hadiah atau menonton drama singkat, paket lengkap JOOX 10.0 barangkali terasa menghibur. Tidak ada yang salah dengan memasukkan playlist Lagu Timur atau Dangdut di tengah fitur gamifikasi ponsel.

Namun bagi pendengar yang datang murni untuk menikmati karya musik dengan kepala jernih, tumpukan drama AI dan misi harian ini terasa seperti warung kopi syahdu yang mendadak memasang layar karaoke dan mesin capit boneka di setiap sudut meja. Musiknya masih ada di daftar menu, tapi suasananya sudah jauh lebih berisik dari yang pernah kita minta.`
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

    const cleanProse = art.content
      .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/\s+/g, " ")
      .trim();
    const wordCount = cleanProse.split(/\s+/).filter(Boolean).length;
    console.log(`📊 Word count: ${wordCount} kata | Clean chars: ${cleanProse.length}`);

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

    if (process.argv.includes("--dry-run")) {
      console.log(`🧪 [DRY RUN] Melewati publikasi untuk: ${art.title}`);
      continue;
    }

    console.log(`📡 Menerbitkan artikel via autoPublishPost (remote: true)...`);
    const pubResult = await autoPublishPost(art, { bypassPause: true, remote: true });
    console.log(`✅ Status: ${pubResult.status} | URL: ${pubResult.url}`);
    console.log(`   Local DB: ${pubResult.dbSaved} | Remote Plesk: ${pubResult.remotePublished}`);

    if (art.sourceUrl) {
      markAsSeen(art.sourceUrl);
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }
    if (art.candidateLink) {
      markAsSeen(art.candidateLink);
      console.log(`📌 Feed Link ditandai seen: ${art.candidateLink}`);
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
