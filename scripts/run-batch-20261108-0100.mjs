import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Kotak Fisik GTA 6 Mulai Beredar tapi Isinya Cuma Selembar Kertas Kode Unduhan",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Gamer Indonesia", "Grand Theft Auto", "GTA 6", "Industri Game", "Konsol Game", "PC Gaming", "Rockstar Games"],
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/06/ultimate_edition_electric_fang_02.jpg",
    imageAlt: "Ilustrasi promosi game Grand Theft Auto 6 yang memperlihatkan visual karakter Jason dan Lucia di kota Leonida",
    sourceUrl: "https://www.polygon.com/gta-6-grand-theft-auto-physical-copies-retail/",
    excerpt: "Salinan kotak fisik GTA 6 mulai mendarat di jaringan toko retail Eropa lebih awal, namun pembeli hanya akan mendapati selembar kertas berisi kupon kode digital tanpa keping cakram sama sekali. Di tengah antusiasme menyambut rilis game paling dinanti dekade ini, lelucon kotak kosong membuktikan betapa absurdnya ilusi kepemilikan di industri modern.",
    content: `Bagi siapa saja yang tumbuh besar di era rental PlayStation 2 atau masa keemasan PC gaming dekade dua ribuan, membeli sebuah game fisik selalu melibatkan serangkaian ritual sakral yang menyenangkan. Ada kenikmatan tersendiri saat kita merobek segel plastik mika bening yang masih kencang, menghirup aroma khas pabrik cetakan kertas panduan warna-warni, lalu mendengar bunyi klik mantap saat kepingan cakram optik dilepas dari dudukannya. Kotak plastik tersebut bukan sekadar kemasan pelindung, melainkan monumen fisik yang bisa dipajang gagah di rak dinding kamar tidur sebagai bukti bahwa karya seni digital tersebut sah menjadi hak milik kita selamanya.

Namun, di panggung industri hiburan modern bernilai ribuan triliun rupiah hari ini, ritual sakral tersebut resmi disulap menjadi lelucon paling absurd yang memeras dompet konsumen.

Sebagaimana dicatat dalam laporan investigasi Polygon pekan ini, gelombang pengiriman kotak edisi fisik Grand Theft Auto 6 dilaporkan telah mulai mendarat di gudang jaringan ritel raksasa MediaMarkt di Jerman. Karyawan toko yang terlampau antusias bahkan tak tahan untuk tidak memamerkan kotak pembungkus tersebut di linimasa media sosial Instagram, memperlihatkan poster bonus pra-pesan, potret duo karakter protagonis Jason dan Lucia di negara bagian fiksi Leonida, hingga peringatan wajib soal fitur pembelian dalam game. Namun di balik kehebohan memegang kotak yang konon paling dinantikan oleh peradaban gamer sedunia itu, terselip satu fakta pahit yang mengundang tawa miris: di dalam kotak plastik seharga jutaan rupiah tersebut, sama sekali tidak ada keping cakram Blu-ray.

Penerbit kenamaan Rockstar Games rupanya memilih skema distribusi kode dalam boks (*code-in-box*). Artinya, para penggemar yang rela mengantre di depan pintu toko atau membayar biaya kurir ekspedisi ke rumah mereka hanyalah membeli sepotong limbah polikarbonat kosong yang memuat secarik kertas voucer berisi deretan digit huruf dan angka. Kertas tersebut nantinya tetap mewajibkan pembeli menyalakan sambungan internet berkecepatan tinggi demi mengunduh berkas instalasi digital raksasa yang ukurannya diprediksi menembus ratusan gigabita.

![Ilustrasi promosi game Grand Theft Auto 6 yang memperlihatkan visual karakter Jason dan Lucia di kota Leonida](https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/06/ultimate_edition_electric_fang_02.jpg)

Langkah culas ini menjadi cermin paling telanjang tentang bagaimana korporasi game memperlakukan konsep kepemilikan konsumen di era serba digital. Para petinggi industri ingin menikmati manisnya margin keuntungan dari penjualan fisik di toko ritel konvensional, tetapi di saat bersamaan enggan menanggung ongkos pencetakan cakram data berkapasitas ganda. Konsumen seakan ditipu oleh ilusi kepemilikan semu: Anda memegang kotak di tangan, tetapi Anda sejatinya tidak memiliki apa-apa selain izin sewa sementara yang bisa dicabut sewaktu-waktu oleh penyedia layanan. Kejengkelan gamer terhadap tipu muslihat semacam ini sejalan dengan kekhawatiran banyak pihak saat [harga game yang diprediksi bakal makin mencekik](/ketika-bos-take-two-santai-hadapi-pembajakan-gta-6-tapi-bikin) demi memuaskan target pendapatan para pemegang saham di Wall Street.

Bagi komunitas gamer di tanah air yang sehari-hari harus berakrobat dengan kecepatan internet pas-pasan dan kuota bulanan yang sering sekarat sebelum gajian, skema kotak kosong ini terasa seperti lelucon yang tak lucu sama sekali. Selama ini, alasan utama orang bersikeras membeli edisi kepingan fisik adalah agar mereka tidak perlu membuang waktu berhari-hari menyedot puluhan gigabita data dari server pusat yang rawan mengalami kegagalan unduhan. Jika pada akhirnya pemain tetap diwajibkan menyedot seluruh aset grafis resolusi tinggi melalui koneksi kabel, lantas apa faedahnya memproduksi wadah plastik yang cuma memperparah tumpukan sampah lingkungan hidup?

Kondisi inilah yang membuat semakin banyak komunitas pemain di Indonesia yang [rela pasang badan menunggu versi komputer](/ketika-mayoritas-gamer-pc-rela-pasang-badan-menunggu-gta-6) sembari tetap menikmati pustaka game lama mereka, ketimbang tergesa-gesa merogoh tabungan belasan juta rupiah demi membeli mesin konsol anyar. Di mata gamer kasual yang berkepala dingin, tren belanja perangkat keras dan kotak pajangan hampa udara ini tampak seperti kompetisi pamer gengsi yang tak berujung pangkal.

Jika korporasi raksasa tanpa rasa malu menjual kotak plastik kosong hanya untuk membungkus sebaris tautan unduh, jangan heran jika suatu hari nanti kita membeli konsol game anyar di toko elektronik dan hanya mendapati sepucuk kartu ucapan selamat datang dari sang direktur utama.`
  },
  {
    title: "Ketika Jurnalisme Musik Indonesia Terjebak Menatap Daerah Lewat Kacamata Jakarta",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Budaya Urban", "Industri Musik", "Jurnalisme Musik", "Kritik Musik", "Margaretha Nina", "Musik Daerah", "Musisi Indie"],
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Suasana panggung pertunjukan musik independen dengan sorotan tata lampu panggung dan antusiasme penonton di barisan depan",
    sourceUrl: "https://pophariini.com/essay/3-1-masalah-dalam-penulisan-musik-indonesia/",
    excerpt: "Kritik terhadap bias sentral ibu kota dalam penulisan musik tanah air kian mengemuka ketika grup musik daerah kerap hanya divalidasi lewat perbandingan sempit dengan band Jakarta. Di balik gegap gempita panggung komersial, persoalan riil ekosistem independen di daerah justru luput dari sorotan pena para jurnalis.",
    content: `Jika Anda kerap menghabiskan waktu luang duduk melingkar di kedai kopi atau warung angkringan sembari membicarakan perkembangan grup musik independen tanah air, Anda pasti akrab dengan satu formula obrolan yang membosankan. Begitu ada kuartet anak muda dari Purwokerto, Jember, atau Banyuwangi merilis karya yang terdengar segar, reaksi spontan para penikmat musik di lingkar ibu kota hampir selalu seragam: sibuk mencari padanan senior yang lebih dulu mapan di Jakarta. Kelompok musik baru tersebut akan serta-merta dilabeli sebagai The Adams versi Jawa Tengah, Efek Rumah Kaca cabang pantura, atau Kelompok Penerbang Roket dari tapal kuda.

Formula perbandingan serba instan ini sekilas terdengar seperti pujian ramah, tetapi sesungguhnya mencerminkan kemalasan berpikir yang akut dalam tradisi apresiasi seni kita. Kita seolah kehilangan perbendaharaan kata dan kepekaan rasa untuk membaca konteks sosiologis unik di balik distorsi gitar anak-anak daerah, sehingga jalan pintas terbaik adalah menempelkan stempel nama-nama pesohor ibu kota agar terdengar akrab di telinga pasar.

Sebagaimana dicatat dalam esai reflektif yang diterbitkan portal budaya Pophariini pekan ini, fenomena tersebut merupakan borok menahun yang menggerogoti jurnalisme musik Indonesia: bias sentral atau *central gaze*. Sebagian besar tulisan musik kita masih mengidap penyakit bawaan yang menganggap bahwa semua hal keren, berkelas, bernas, dan layak disematkan status penting harus selalu bertitik mula dari Jakarta. Karya seni yang lahir dari peluh anak-anak muda di luar poros utama kerap dianggap kelas dua atau sekadar ornamen pinggiran, sampai mereka berhasil mencuri perhatian algoritma di ibu kota atau dipanggil manggung di festival komersial berpagar sponsor rokok.

![Suasana panggung pertunjukan musik independen dengan sorotan tata lampu panggung dan antusiasme penonton di barisan depan](https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop)

Ironisnya, ketika media musik arus utama mendadak heboh merayakan kebangkitan musik daerah saat fenomena koplo Jawa atau irama hip-hop anak-anak Indonesia timur mendominasi tangga lagu digital, narasi yang dibangun hampir selalu terjebak pada romantisme kepahlawanan yang dangkal. Para penulis musik kerap luput membedah persoalan struktural yang jauh lebih mendesak di lapangan: mahalnya biaya izin keramaian yang dipatok aparat birokrasi setempat, minimnya ruang pertunjukan independen yang ramah kantong komunitas, hingga sensor moralitas pejabat lokal yang kerap memandang kumpul-kumpul anak band dengan kacamata curiga.

Kekeliruan perspektif ini terasa kian kontras saat kita melihat bagaimana sebuah kelompok musik cadas dari kota kecil justru sanggup membuktikan daya tawar mereka di kancah global tanpa perlu merengek meminta restu industri ibu kota. Kita tentu belum lupa bagaimana sebuah band metal independen asal Tulungagung [sukses menggebrak panggung internasional](/ketika-band-metal-tulungagung-mengguncang-panggung-kexp-tanpa) di studio siaran bergengsi KEXP Amerika Serikat berkat kegigihan mereka merawat identitas lokal. Di saat yang sama, panggung hiburan nasional di ibu kota kerap kali hanya sibuk memamerkan [panggung penghargaan megah yang penuh kompromi](/ketika-panggung-megah-ami-awards-disengat-salam-tiga-jari-dan) politik dan kepentingan korporasi label raksasa.

Ekosistem musik di luar Jakarta sejatinya tidak membutuhkan rasa iba apalagi stempel validasi dari kantor redaksi di kawasan Sudirman atau Senopati. Mereka telah lama mandiri dengan membangun jejaring tur antar-kolektif, mencetak zine fotokopian sendiri, dan merawat panggung-panggung kecil di teras rumah warga. Penulisan musik yang bernyawa semestinya hadir untuk membela ruang-ruang hidup komunal tersebut, menuntut transparansi tata kelola industri, dan mendengarkan suara akar rumput tanpa nada menggurui. Ketika media musik hanya puas menjadi juru salin siaran pers humas agensi dan pembagi gelar instan, jurnalisme musik pada hakikatnya telah menyerahkan taring kritisnya kepada algoritma pasar.

Selama para kurator musik kita masih memandang Nusantara laksana hamparan provinsi yang wajib mengantre tiket audisi ke Jakarta, apa yang kita banggakan sebagai musik Indonesia sejatinya hanyalah etalase hiburan ibu kota yang ditonton bersama-sama dari kejauhan.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 01:00 WIB)");
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261108-0100.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
