import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { autoPublishPost } from "./auto-publish.mjs";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Kota San Diego Copot Lima Ratus Kamera Pintar Usai Warga Muak Diawasi",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Privasi Digital", "Kamera Pengawas", "Smart City", "Flock Safety", "Pengawasan Massal"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2026/05/flock-camera-1152x648-1779223467.jpg",
    imageAlt: "Kamera pengawas pembaca pelat nomor otomatis Flock Safety yang terpasang di tiang jalan raya kota",
    sourceUrl: "https://arstechnica.com/tech-policy/2026/11/san-diego-dumps-both-flock-cameras-and-smart-streetlights/",
    excerpt: "Dewan Kota San Diego sepakat mencopot lebih dari 500 kamera pembaca pelat nomor dan lampu jalan pintar Flock Safety senilai hampir 12 juta dolar akibat krisis privasi.",
    content: `Di warung kopi pinggir jalan mana pun, kata "pintar" yang ditempelkan pada proyek pemerintah kota biasanya langsung memancing senyum kecut. Mulai dari lampu jalan pintar, tempat sampah pintar, sampai kamera persimpangan pintar, semuanya hampir selalu dijual dengan brosur mengilap yang menjanjikan kota aman, lalu lintas lancar, dan kejahatan rontok seketika. Padahal, di balik jargon teknologi serba otomatis itu, warga sering kali cuma kebagian dua hal: anggaran pajak yang tersedot ke kantong vendor dan perasaan tidak nyaman karena setiap gerak-gerik di jalan raya mendadak punya mata elektronik yang mencatat tanpa permisi.

Dongeng manis soal kota pintar yang serba diawasi itu baru saja tamat secara memalukan di San Diego, Amerika Serikat. Sebagaimana dicatat dalam laporan Ars Technica dan Times of San Diego pekan ini, Dewan Kota San Diego resmi mengetuk palu untuk menghentikan dua program pengawasan jalanan sekaligus, yakni jaringan pembaca pelat nomor otomatis atau ALPR serta program Smart Streetlights. Hasil pemungutan suaranya bahkan tidak menyisakan ruang tawar: anggota dewan sepakat bulat 7 banding 0 untuk menangguhkan kamera pembaca pelat nomor, lalu menyusul dengan suara 5 banding 2 menolak kebijakan pengawasan pada lampu jalan pintar.

Ironisnya, proyek pengawasan massal tersebut baru berumur sekitar tiga tahun sejak wali kota setempat mati-matian melobi agar disetujui. Kala itu, pemerintah kota meneken kontrak vendor senilai hampir 12 juta dolar Amerika Serikat dengan perusahaan teknologi pengawasan Flock Safety dan Ubicquia untuk memasang jaringan lebih dari 500 unit kamera di berbagai sudut kota. Karena skema kamera pembaca pelat nomor dan perangkat lampu jalan pintar dalam paket kontrak tersebut saling mengunci dan sulit dipisahkan, keputusan dewan kota otomatis memaksa seluruh jaringan pengawasan itu dimatikan dan dibongkar secara fisik dari tiang-tiang jalan.

Gelombang penolakan yang membuat para politikus kota akhirnya berbalik arah tidak muncul dari ruang hampa. Menurut laporan koalisi masyarakat sipil TRUST SD bersama organisasi hak sipil ACLU, sistem pengumpulan data kendaraan massal itu beroperasi dengan transparansi yang sangat minim sejak hari pertama. Warga menyoal ke mana saja data pergerakan harian mereka mengalir, termasuk kecurigaan bahwa rekaman kamera jalanan kota bisa diakses oleh lembaga penegak hukum federal seperti otoritas imigrasi ICE tanpa pengawasan publik yang memadai. Kepercayaan masyarakat makin hancur setelah muncul sejumlah laporan kesalahan pembacaan sistem ALPR yang berujung pada penahanan keliru terhadap warga yang tidak bersalah, disertai tanda tanya besar soal cara penyidik kepolisian mengakses basis data perjalanan warga tersebut.

Fenomena proyek pengawasan yang dibungkus kata "pintar" ini sejatinya berakar dari penyakit lama birokrasi dan industri teknologi yang gemar memuja alat sebelum memikirkan dampaknya bagi manusia biasa. Ketika perusahaan seperti Meta saja sudah memicu kegelisahan baru lewat [kacamata AI seharga motor bekas yang merisaukan privasi ruang publik](/kacamata-ai-meta-masuk-indonesia-seharga-motor-bekas-saat-privasi), pemerintah kota justru ikut-ikutan menanam ratusan mata kamera di tiang lampu dengan dalih ketertiban umum. Pola kecerobohan serupa juga terus berulang di kantor-kantor modern, persis seperti kasus [kebiasaan bot AI yang diam-diam mengintip data kantor tengah malam](/grok-bot-diam-diam-akses-data-kantor-tengah-malam-lalu-mengaku) sementara para pengelola sistem sibuk membanggakan efisiensi.

Kini, pemerintah kota San Diego harus menanggung pekerjaan rumah yang jauh lebih merepotkan daripada sekadar memotong pita peresmian tiga tahun lalu. Selain wajib mengurai sisa kewajiban kontrak bernilai jutaan dolar bersama Flock Safety dan Ubicquia, petugas lapangan juga harus turun satu per satu mencopot lebih dari lima ratus perangkat kamera yang sudah terlanjur bertengger di jalanan. Semua ongkos politik dan biaya pembongkaran itu pada akhirnya tetap ditanggung oleh pembayar pajak biasa, bukan oleh eksekutif perusahaan vendor yang dulu paling rajin berpidato soal masa depan keamanan kota.

Keputusan warga dan Dewan Kota San Diego setidaknya membuktikan satu hal yang sering dilupakan para pembuat kebijakan di mana saja, termasuk di negeri kita yang juga rajin mengimpor slogan kota pintar. Jalan raya yang aman tidak pernah lahir dari menyulap setiap tiang listrik menjadi mata-mata yang mencurigai seluruh warganya setiap detik. Kalau miliaran rupiah anggaran publik habis hanya untuk memasang kamera canggih yang ujung-ujungnya harus dibongkar sendiri karena bikin salah tangkap dan menggerogoti privasi, barang yang paling tidak pintar dari proyek itu jelas bukan lampunya.`
  },
  {
    title: "Aktor Resident Evil Requiem Rela Push-Up dan Diseret Demi Akting Horor Nyata",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Resident Evil Requiem", "The Game Awards", "Motion Capture", "Game Horor", "Industri Game"],
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/11/grace-ashcroft-holding-flashlight.png",
    imageAlt: "Karakter Grace Ashcroft memegang senter di tengah suasana horor game Resident Evil Requiem",
    sourceUrl: "https://www.polygon.com/resident-evil-requiem-grace-angela-santalbano-actor-game-awards-nomination-2026/",
    excerpt: "Angela Sant'Albano meraih nominasi The Game Awards 2026 lewat Resident Evil Requiem setelah melakoni mocap fisik ekstrem, dari push-up hingga diseret terbalik.",
    content: `Di tengah hiruk-pikuk pameran teknologi game tahun ini, para eksekutif studio besar senang sekali menyombongkan betapa praktisnya memproduksi karakter digital lewat kecerdasan buatan dan generator suara sintetis. Katanya, cukup bermodal beberapa baris perintah teks dan bank suara rekaman, karakter game sudah bisa menangis, berteriak ketakutan, atau berbicara penuh emosi tanpa perlu repot menyewa studio rekaman mahal. Namun, siapa pun yang pernah memainkan game horor murahan berbekal akting kaku pasti tahu bedanya: algoritma bisa meniru intonasi panik, tetapi ia tidak pernah tahu rasanya jantung berdegup kencang saat napas benar-benar habis di ruangan gelap.

Kejujuran fisik itulah yang belakangan mencuri perhatian publik dari balik layar *Resident Evil Requiem*. Sebagaimana dicatat dalam wawancara Polygon pekan ini, aktris Angela Sant'Albano resmi masuk nominasi The Game Awards 2026 berkat perannya sebagai Grace Ashcroft. Yang membuat capaian itu terasa manis bukan sekadar status piala bergengsi, melainkan fakta bahwa *Requiem* adalah debut perdananya di dunia video game sekaligus pengalaman pertamanya berakting mengenakan baju *motion capture*. Bagi Sant'Albano, bekerja di studio gelap Imaginarium Studios, London, justru memadukan kebebasan gerak teater panggung dengan keintiman kamera televisi yang menangkap setiap getaran wajah dari jarak dekat.

Untuk menghidupkan sosok Grace yang mudah cemas, Sant'Albano menolak jalan pintas berdiri manis di depan mikrofon studio ber-AC sambil berpura-pura ngos-ngosan. Ia memilih menyiksa fisiknya sendiri sebelum sutradara berteriak mulai. Sebelum merekam adegan kejar-kejaran atau momen menegangkan, ia berlarian memutari ruangan, melakukan *push-up*, hingga *jumping jacks* demi memaksa detak jantungnya melonjak dan napasnya memburu secara alami. Bahkan ketika naskah menuntut adegan awal Grace terbangun terikat di atas brankar rumah sakit, kru produksi benar-benar memiringkan tubuhnya dalam posisi terbalik, lalu menyeretnya melintasi lantai studio saat adegan Grace ditarik paksa.

Dedikasi gila-gilaan itu tidak berhenti pada urusan keringat dan memar di lantai studio. Dalam penuturannya kepada Polygon, Sant'Albano mengaku melakukan riset serius mengenai kebiasaan gagap agar dialog Grace tidak terdengar seperti akting orang sehat yang dibuat-buat. Ia membedah latar belakang trauma karakter tersebut, hubungan rumit dengan ibunya, sampai rasa kikuk bekerja di lingkungan biro federal. Ia bahkan nekat mengusulkan detail kecil yang terasa sangat manusiawi bagi perempuan berusia pertengahan dua puluhan saat nyawanya terancam monster: alih-alih melontarkan dialog heroik yang rapi seperti naskah film, Grace memilih mengumpat kasar secara spontan.

Kontras antara kerja keras berdarah-keringat para aktor lapangan dengan sandiwara panggung industri game modern terasa makin mencolok tahun ini. Di saat panggung yang sama sedang ramai disorot gara-gara [nominasi The Game Awards 2026 diborong GTA 6 meski gamenya belum rilis](/game-belum-rilis-tapi-gta-6-sudah-borong-delapan-nominasi-the), kisah Sant'Albano mengingatkan pemain biasa bahwa kualitas sebuah game tetap bertumpu pada keringat pekerja kreatif di ruang produksi. Ironisnya, pengorbanan para seniman dan pengembang di balik layar kerap berbanding terbalik dengan nasib mereka di meja rapat korporasi, seperti terlihat saat [ratusan staf studio Firaxis didepak begitu penjualan lesu di Steam](/firaxis-depak-sepertiga-staf-demi-babak-baru-usai-civilization-7).

Bagi para penggemar seri horor klasik yang sudah bosan melihat tokoh utama berubah menjadi manusia super pemusnah zombie bermodal tendangan salto, visi Sant'Albano terhadap masa depan Grace terdengar sangat menyegarkan. Meski berharap Grace kembali hadir di sekuel mendatang untuk menuntaskan misteri pekerjaan ibunya, hubungannya dengan Emily, serta ikatannya bersama Leon Kennedy, ia menolak mentah-mentah ide menyulap Grace menjadi jagoan kebal peluru ala Sarah Connor atau Leon versi veteran. Menurutnya, Grace harus tetap rapuh, canggung, dan ketakutan setengah mati agar horor tetap terasa menakutkan.

Pada akhirnya, nominasi penghargaan yang diraih dari posisi diseret terbalik di lantai London itu mengirim pesan telak bagi industri game yang makin malas dan serba otomatis. Pemain tidak pernah merindukan karakter sempurna hasil racikan mesin yang suaranya datar tanpa beban emosi. Yang membuat kita betah menggenggam kontroler di kamar gelap sampai subuh tetaplah napas terengah, umpatan spontan, dan gemetar tangan seorang manusia biasa yang sungguh-sungguh merasa takut.`
  }
];

async function run() {
  const isDryRun = process.argv.includes("--dry-run");
  for (let i = 0; i < articles.length; i++) {
    const art = articles[i];
    const wordCount = art.content.trim().split(/\s+/).filter(Boolean).length;
    const audit = validate7cEditorial(art.title, art.content, art.excerpt, art.tags);

    console.log(`\n=== [${i + 1}/${articles.length}] ${art.category.toUpperCase()}: "${art.title}" ===`);
    console.log(`Title len: ${art.title.length} chars | Words: ${wordCount} | Score: ${audit.score}/100 | Valid: ${audit.valid}`);
    if (audit.errors.length) console.log("Errors:", audit.errors);
    if (audit.warnings.length) console.log("Warnings:", audit.warnings);
    if (audit.suggestions.length) console.log("Suggestions:", audit.suggestions);

    if (!isDryRun) {
      if (!audit.valid || audit.score < 80) {
        throw new Error(`7C Gate Failed for "${art.title}" (score ${audit.score})`);
      }
      const res = await autoPublishPost(art, { bypassPause: true, remote: true });
      console.log(`Published -> Status: ${res.status} | DB: ${res.dbSaved} | Remote: ${res.remotePublished} | URL: ${res.url}`);
      if (art.sourceUrl) {
        markAsSeen(art.sourceUrl);
        console.log(`Marked seen: ${art.sourceUrl}`);
      }
    }
  }
}

run().catch(err => {
  console.error("Fatal:", err);
  process.exit(1);
});
