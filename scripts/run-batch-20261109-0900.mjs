import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Pemerintah Bangga Gratiskan Hak Cipta Saat Royalti Musisi Masih Jadi Misteri Ilahi",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Budaya Urban", "Ekonomi Kreatif", "Hak Cipta", "Industri Musik", "Kebijakan Publik", "Margaretha Nina", "Musisi Indonesia", "Pencatatan Karya", "Royalti Musik"],
    imageUrl: "https://images.bloombergtechnoz.com/data/2025/08/image-20250807134553.jpg",
    imageAlt: "Ilustrasi piringan hitam dan mikrofon rekaman dalam polemik pencatatan hak cipta serta transparansi royalti musik di Indonesia",
    sourceUrl: "https://www.bloombergtechnoz.com/detail-news/127113/tak-cuma-musik-pencatatan-hak-cipta-semua-karya-bakal-gratis",
    excerpt: "Kementerian Ekonomi Kreatif mengumumkan perluasan tarif nol rupiah untuk pendaftaran hak cipta seluruh karya seni dan musik. Sebuah kabar yang sekilas terdengar manis di atas kertas birokrasi, namun terasa hambar bagi musisi akar rumput yang sampai hari ini masih gigit jari menunggu kejelasan royalti panggung dan streaming.",
    content: `Bagi musisi kamar tidur atau anak-anak band independen yang menghabiskan akhir pekan di studio rental sempit pinggiran kota, proses melahirkan satu lagu rekaman adalah perjuangan lahir batin yang menguras dompet. Anda patungan membeli senar gitar cadangan, menyisihkan honor kerja paruh waktu demi membayar sewa bilik rekaman per jam, lalu begadang semalaman di depan laptop murah demi mengutak-atik mixing audio. Begitu master rekaman rampung, tantangan berikutnya yang menghadang justru bukan soal bagaimana memikat telinga pendengar, melainkan bagaimana melindungi karya tersebut dari tangan-tangan jahil tanpa harus tekor di meja administrasi negara.

Maka dari itu, pengumuman terbaru dari kantor kementerian di Jakarta sekilas terasa seperti angin segar bagi para pekerja kreatif. Sebagaimana dicatat dalam laporan Bloomberg Technoz awal pekan ini, Kementerian Ekonomi Kreatif resmi mendukung perluasan kebijakan tarif nol rupiah alias gratis untuk layanan pencatatan hak cipta di seluruh jenis karya seni. Menteri Ekonomi Kreatif Teuku Riefky Harsya menegaskan bahwa pembebasan tarif dari biaya normal sebesar dua ratus ribu rupiah per permohonan ini ditujukan untuk membuka pintu seluas-luasnya bagi para kreator kecil agar dapat mengamankan legalitas karya sekaligus mengomersialkannya dengan aman tanpa terbebani biaya administrasi.

![Ilustrasi piringan hitam dan mikrofon rekaman dalam polemik pencatatan hak cipta serta transparansi royalti musik di Indonesia](https://images.bloombergtechnoz.com/data/2025/08/image-20250807134553.jpg)

Namun bagi siapa saja yang terbiasa nongkrong di ruang ganti panggung gigs atau mengobrol dengan para pencipta lagu di sudut kedai kopi, euforia selembar sertifikat gratis itu mendadak terasa hambar. Para birokrat tampak begitu bangga memamerkan angka nol rupiah di depan lampu sorot media, seolah-olah masalah paling mendesak yang mencekik leher musisi hari ini adalah biaya pendaftaran karya. Padahal realitas pahit di lapangan justru berbanding terbalik: problem akut industri musik tanah air bukanlah kemalasan musisi mencatatkan lagunya ke pangkalan data pemerintah, melainkan sistem penarikan dan distribusi royalti yang selama berdekade-dekade dibiarkan gelap gulita bagai misteri ilahi.

Apa gunanya selembar dokumen PDF bertanda tangan digital pejabat jika setiap kali karya itu dimainkan di panggung festival megah, kafe waralaba, atau tempat karaoke keluarga, uang royaltinya tak pernah menetes ke rekening sang pencipta? Kita menghadapi kontradiksi yang menggelikan. Negara begitu bersemangat mencatat kepemilikan karya warga, tetapi mendadak pura-pura buta dan tuli ketika Lembaga Manajemen Kolektif Nasional (LMKN) dan para pengelola hak cipta saling lempar tanggung jawab soal audit penarikan dana royalti. Menawarkan pendaftaran hak cipta gratisan tanpa membenahi kasir royalti itu persis seperti membagikan SIM gratis kepada warga yang motornya mogok kehabisan bensin: formalitas hukumnya terpenuhi, tapi kendaraannya tetap diam tak bisa diajak mencari nafkah.

Kekecewaan para musisi arus bawah terhadap karut-marut tata kelola ini bukanlah histeria kosong. Luka lama para kreator terus berulang, mengingatkan kita pada polemik serupa saat [musisi tanah air mengeluhkan pembagian royalti yang seret](/ketika-piala-ami-awards-tak-cukup-membayar-tagihan-dan-royalti) meski karya mereka diputar jutaan kali di berbagai ruang publik dan mendulang trofi penghargaan bergengsi. Situasi kian runyam ketika gelombang teknologi digital kian agresif mengikis hak ekonomi seniman, sebagaimana terlihat saat [Suno dituntut keluarga musisi legendaris akibat klona vokal ilegal](/suno-dituntut-keluarga-elvis-dan-eminem-karena-nekat-mengklona) yang memanfaatkan kelemahan regulasi demi mengeruk keuntungan sepihak.

Pemerintah semestinya paham bahwa musisi dan pekerja seni tidak bisa membayar sewa kontrakan atau membeli beras dengan selembar piagam pencatatan hak cipta berlogo garuda. Yang dibutuhkan komunitas kreatif bukanlah tepuk tangan seremoni atau jargon pembebasan biaya pendaftaran dua ratus ribu rupiah. Yang mendesak adalah keberanian regulator untuk mengaudit tuntas aliran dana royalti, memaksa transparansi data pemutaran lagu secara terbuka, serta menindak tegas para pemilik modal yang gemar mengemplang hak ekonomi para pencipta lagu.

Sebelum urusan dapur musisi benar-benar terlindungi oleh sistem pembagian royalti yang adil dan transparan, program pendaftaran gratis dari kementerian hanyalah etalase kosmetik birokrasi. Pejabat boleh saja menepuk dada merasa telah menyelamatkan ekonomi kreatif, sementara di sudut panggung malam hari, para musisi tetap harus memutar otak mencari pinjaman uang demi sekadar mengganti senar gitar yang putus.`
  },
  {
    title: "Warhammer Blood Bowl Kena Tunda ke 2027 Saat Gamer Sudah Lelah Menelan Janji Manis",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Blood Bowl", "Industri Game", "PC Gaming", "Penundaan Game", "Slitherine", "Strategi Giliran", "Video Game", "Warhammer"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/yYFgBZtpHgQ9MwUKngZ8tV-1920-80.jpg",
    imageAlt: "Pemandangan lapangan pertandingan fantasi dan karakter orc dalam permainan Warhammer Blood Bowl karya Slitherine",
    sourceUrl: "https://www.pcgamer.com/games/sports/warhammer-blood-bowl-has-been-delayed-into-2027/",
    excerpt: "Penerbit Slitherine resmi menunda peluncuran Warhammer Blood Bowl hingga awal 2027 setelah menerima evaluasi sesi uji coba pemain. Fenomena penundaan ini kembali menggarisbawahi penyakit menahun industri video game: publisher gemar mengumbar jadwal rilis bombastis hanya untuk memaksa gamer menunggu bertahun-tahun demi produk yang belum tentu matang.",
    content: `Bagi siapa saja yang gemar menumpuk daftar game incaran di akun Steam, Anda pasti sudah sangat akrab dengan ritual kekecewaan yang datang silih berganti. Skenarionya selalu sama dan berulang bak kaset kusut: sebuah studio memamerkan cuplikan trailer sinematik yang memukau di panggung pameran internasional, menjanjikan grafis spektakuler serta mekanik gameplay revolusioner, lalu mematok target tahun rilis dengan penuh percaya diri. Para pemain yang terpikat lantas buru-buru memasukkannya ke daftar wishlist, membayangkan malam-malam seru bersama lingkaran kawan tongkrongan. Namun begitu kalender mendekati batas waktu yang dijanjikan, studio tersebut mendadak mengunggah gambar berlatar hitam polos berisi untaian kalimat maaf berbunga-bunga yang mengumumkan bahwa peluncuran game terpaksa dimundurkan hingga waktu yang tak pasti.

Penyakit menahun itu kini kembali memakan korban terbaru di jagat strategi fantasi. Sebagaimana dicatat dalam laporan PC Gamer awal pekan ini, penerbit Slitherine secara resmi mengumumkan penundaan versi penuh game olahraga fantasi bertema miniatur Warhammer Blood Bowl hingga awal tahun 2027. Pada pengumuman di panggung showcase Dominion Days di Berlin, pihak Slitherine berdalih bahwa masukan dari sesi uji coba pemain terbaru menuntut perombakan dan pemolesan menyeluruh agar tidak mengecewakan basis penggemar fanatik. Sebagai pelipur lara, pengembang memperpanjang masa pengujian dengan menyuntikkan mode Arena serta berjanji akan menyertakan dua faksi anyar, Tomb Kings dan Bretonnians, saat hari peluncuran tiba kelak.

![Pemandangan lapangan pertandingan fantasi dan karakter orc dalam permainan Warhammer Blood Bowl karya Slitherine](https://cdn.mos.cms.futurecdn.net/yYFgBZtpHgQ9MwUKngZ8tV-1920-80.jpg)

Bagi komunitas gamer yang sudah bertahun-tahun kenyang disuguhi janji palsu para penerbit, dalih pemolesan semacam ini terdengar seperti lagu lama yang diputar ulang dengan nada sumbang. Mengapa korporasi game begitu gemar mematok target rilis prematur jika arsitektur permainan mereka sendiri masih berantakan di sana-sini? Di industri hiburan digital modern, penundaan jadwal rilis tampaknya bukan lagi sebuah anomali atau musibah tak terduga, melainkan sudah menjelma menjadi pilar strategi pemasaran yang lumrah. Penerbit sengaja melempar versi setengah matang ke publik dengan kedok uji coba playtest, lalu memanfaatkan pemain sebagai tenaga penguji bug gratisan tanpa bayaran sepeser pun demi menutupi buruknya perencanaan manajemen produksi internal.

Kelesuan ekosistem game PC kian terasa saat para raksasa industri lebih sibuk mencari celah aman ketimbang menuntaskan proyek secara bermartabat. Alih-alih merampungkan produk baru dengan tata kelola jadwal yang sehat, banyak penerbit kawakan justru memilih jalan pintas memerah nostalgia lama, persis seperti manuver [EA melepas gembok game lawas di Steam](/ea-akhirnya-lepas-kunci-gembok-wing-commander-di-steam-saat-game) demi menutup lubang neraca keuangan akibat proyek modern yang boncos. Kegagalan manajemen waktu para penerbit besar ini sangat kontras dengan studio mandiri yang menghargai dedikasi pemain, sebagaimana terbukti saat [Baldur's Gate 3 membuktikan serunya konsekuensi nyata](/desainer-skyrim-bela-ilusi-bebas-saat-baldurs-gate-3-buktikan) lewat pondasi desain yang matang sejak hari pertama tanpa perlu membodohi komunitas dengan janji muluk.

Para petinggi studio barangkali masih gemar menghibur diri dengan mengutip wejangan legendaris Shigeru Miyamoto bahwa game yang ditunda pada akhirnya bisa menjadi bagus, sementara game yang terburu-buru dirilis akan selamanya dicap buruk. Sayangnya di tahun 2026, petuah bijak dari dekade sembilan puluhan itu sudah kehilangan relevansinya. Realitas pahit industri hari ini membuktikan bahwa game yang ditunda bertahun-tahun tetap saja rawan meluncur dalam kondisi compang-camping, penuh dengan celah galat teknis, serta sarat monetisasi mikrotransaksi yang menjengkelkan.

Slitherine dan para petinggi industri game silakan saja terus berkhayal bahwa penggemar akan setia menanti di lorong ruang tunggu hingga tahun 2027 tiba. Namun mereka lupa bahwa kesabaran gamer kasual ada batasnya. Begitu peluit pembuka laga akhirnya ditiup di masa depan, jangan kaget jika bangku penonton stadion fantasi mereka sudah sepi melompong karena para pemain sudah keburu pindah ke judul lain yang lebih tahu cara menghargai waktu dan antusiasme penikmatnya.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 09:00 WIB)");
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261109-0900.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Run Error:", err);
    process.exit(1);
  });
}
