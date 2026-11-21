import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "TheOvertunes Rilis Album Kini Gini Saat Industri Musik Sibuk Dikte Lagu Tiga Puluh Detik",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["TheOvertunes", "Album Baru", "Musik Pop", "Industri Musik", "Budaya Urban", "Margaretha Nina"],
    imageUrl: "https://img.antaranews.com/cache/1200x800/2026/11/16/TheOvertunes-03-2.jpg",
    imageAlt: "Tiga personel TheOvertunes Mikha Angelo Reuben Nathaniel dan Mada Emmanuelle dalam peluncuran album penuh ketiga Kini Gini",
    sourceUrl: "https://sumsel.antaranews.com/berita/828479/theovertunes-rilis-albumkini-gini",
    excerpt: "TheOvertunes resmi merilis album ketiga Kini Gini berisi 12 lagu kolaboratif. Di tengah gempuran tren lagu instan demi algoritma medsos, trio bersaudara ini memilih merawat proses bertumbuh.",
    content: `Bagi anak muda perkotaan yang saban hari terbiasa menatap layar ponsel di sela himpitan gerbong kereta atau kemacetan jalan raya, kebiasaan mendengarkan musik kini telah mengalami pergeseran makna yang sangat drastis. Lagu-lagu baru yang melintas di linimasa media sosial diperlakukan mirip barang dagangan sekali pakai yang umurnya tak lebih dari hitungan pekan. Bagian intro yang syahdu dan perlahan dipangkas habis demi mengejar rentang perhatian pendengar yang kian menyempit. Aransemen instrumen dipaksa langsung melompat ke bagian refrain centil dalam lima belas detik pertama, dan bila sebuah karya gagal viral menjadi latar video joget di aplikasi ponsel, manajemen label rekaman tanpa ragu langsung mengarsipkannya ke dalam keranjang kegagalan komersial. Menemukan karya musik dalam format album penuh yang digarap dengan napas panjang, perenungan mendalam, dan kesabaran artistik hari ini sudah sama langkanya dengan mencari udara bersih di pusat kota metropolitan.

Di tengah lanskap industri musik arus utama yang serba terburu-buru mengejar statistik pemutaran kilat tersebut, kabar menyejukkan justru datang dari trio musisi bersaudara TheOvertunes. Sebagaimana dicatat dalam laporan industri hiburan Antara awal pekan ini, grup yang diawaki oleh Mikha Angelo, Reuben Nathaniel, dan Mada Emmanuelle ini resmi merilis album studio ketiga mereka yang diberi tajuk Kini Gini. Alih-alih sekadar melempar satu single pancingan demi menguji selera pasar digital yang mudah bosan, mereka berani menghadirkan karya utuh berisikan dua belas nomor lagu sekaligus. Tak main-main, album ini merangkul kolaborasi berbobot bersama deretan musisi independen ternama tanah air, mulai dari Nadin Amizah, Kunto Aji, Ify Alyssa, hingga Nathantania, menyempurnakan tembang-tembang reflektif seperti Sakura!, Once in a While, Sampai Kapan?, dan Makhluk Cahaya.

Dalam penuturannya kepada awak media, sang vokalis Mikha Angelo mengungkapkan bahwa pengerjaan album ini memakan waktu satu tahun penuh dan dirancang sebagai rekaman jujur atas fase kehidupan yang sedang mereka jalani tanpa perlu dilebih-lebihkan atau disesuaikan dengan formula tren sesaat. Gitaris Reuben Nathaniel turut menggarisbawahi bahwa penamaan frasa kini gini lahir sebagai jangkar pengingat ketika rasa cemas atas masa lalu dan ketakutan menghadapi masa depan mulai membebani pikiran manusia modern. Pengakuan bersahaja dari trio bersaudara ini menjadi sentilan berharga bagi panggung hiburan kita yang belakangan kian terobsesi dengan persona palsu. Alih-alih memeras otak demi menciptakan sensasi drama murahan di jagat maya, mereka memilih memusatkan seluruh energi di dalam studio rekaman untuk merajut melodi akustik yang intim, harmonisasi vokal yang hangat, dan lirik kontemplatif yang membumi.

![Tiga personel TheOvertunes Mikha Angelo Reuben Nathaniel dan Mada Emmanuelle dalam peluncuran album penuh ketiga Kini Gini](https://img.antaranews.com/cache/1200x800/2026/11/16/TheOvertunes-03-2.jpg)

Keputusan mempertahankan format album penuh di tengah dominasi lagu instan mengingatkan kita pada dinamika saat [Maliq and D Essentials rilis album baru](/maliq-and-d-essentials-rilis-album-baru-bukti-band-tua-nggak) yang membuktikan bahwa konsistensi musikalitas jangka panjang selalu sanggup menemukan pendengar setianya sendiri tanpa harus mengemis belas kasihan tren algoritma. Namun ironi dunia kesenian kita kerap berulang saat para pejabat pembuat kebijakan lebih suka membanggakan pencapaian seremonial, persis ketika [kementerian ekraf pamer musisi indie](/kementerian-ekraf-pamer-musisi-indie-tembus-new-york-saat) yang berhasil manggung di luar negeri sembari menutup mata terhadap sulitnya musisi lokal mendapatkan ruang pertunjukan yang layak di tanah air sendiri. Padahal panggung pertunjukan berskala kecil dan komunitas gigs akar rumput di berbagai daerah adalah wadah sesungguhnya tempat talenta muda mengasah keterampilan bermusik mereka sebelum melangkah ke industri yang lebih luas.

Bagi generasi muda perkotaan yang sedang pusing menghadapi fase krisis seperempat abad kehidupan di kamar kos sempit, keberadaan dua belas lagu yang bercerita jujur tentang kerentanan manusia jauh lebih menyembuhkan ketimbang seribu nasihat puitis yang ditebar akun motivasi korporat. Musik tidak melulu harus menjadi komoditas bising yang menuntut kita untuk selalu tampil ceria atau sukses secara finansial. Kadang kala, yang kita butuhkan di penghujung hari yang melelahkan hanyalah petikan dawai gitar yang tenang dan larik lirik sederhana yang mengizinkan kita bernapas sejenak mengakui bahwa kondisi hidup kita saat ini memang sedang begini adanya.

Merawat karya musik secara sabar pada hakikatnya adalah perlawanan kultural paling elegan terhadap tirani konten kilat yang mendangkalkan selera masyarakat. Ketika sebuah band keluarga sanggup membuktikan bahwa karya yang lahir dari ketulusan hati masih memiliki daya pikat magis tanpa harus tunduk pada dikte pasar tiga puluh detik, kita setidaknya masih punya alasan untuk percaya bahwa denyut industri musik tanah air belum seutuhnya ditelan oleh mesin komersialisasi yang dingin.`
  },
  {
    title: "Bos Silicon Valley Kompak Bela Jensen Huang Saat Skandal Kekuasaan Dianggap Wajar",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Nvidia", "Jensen Huang", "Silicon Valley", "Kecerdasan Buatan", "Industri Teknologi", "Elang Elano"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/Nvidia_Jensen_huang_03.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Mantan CEO Nvidia Jensen Huang mengenakan jaket kulit hitam khasnya dalam sebuah sesi konferensi teknologi grafis komputasi",
    sourceUrl: "https://www.theverge.com/tech/1033999/jensen-huang-return-nvidia-megaspeed",
    excerpt: "Jensen Huang terdepak dari kursi CEO Nvidia akibat skandal internal, namun para elit teknologi seperti Elon Musk justru menuntutnya kembali. Cermin kultur Silicon Valley yang kebal etika.",
    content: `Bagi siapa saja yang terbiasa mengelola sistem komputer kantor atau menghabiskan malam memantau baris perintah di ruang kendali jaringan, ada satu prinsip dasar yang tidak pernah bisa ditawar: semakin besar tingkat hak akses yang diberikan ke tangan Anda, semakin ketat pula batasan etika dan tanggung jawab yang harus dipertanggungjawabkan. Jika seorang teknisi jaringan rendahan teledor memasukkan konfigurasi yang memicu gangguan sistem selama setengah jam, surat teguran resmi sudah pasti bertengger di atas meja kerja sebelum waktu istirahat siang tiba. Namun aturan kepatutan yang masuk akal tersebut mendadak menguap tanpa bekas begitu memasuki kasta tertinggi para taipan teknologi Silicon Valley, di mana batas pelanggaran etika kerja mendadak dianggap sepele selama sang figur puncak dipandang mampu melipatgandakan grafik keuntungan pemegang saham.

Pemandangan janggal ini terpampang gamblang dalam kemelut suksesi kepemimpinan yang tengah melanda raksasa cip akselerator kecerdasan buatan Nvidia. Sebagaimana dicatat dalam laporan mendalam jurnalis The Verge awal pekan ini, gerakan untuk mengembalikan sang pendiri Jensen Huang ke tampuk kekuasaan Chief Executive Officer mendadak bergulir kencang pasca-pengunduran dirinya akibat skandal hubungan asmara terlarang dengan bawahan langsung. Alih-alih menghormati proses penegakan disiplin tata kelola korporasi, sederet figur tersohor seperti Elon Musk hingga nakhoda Epic Games Tim Sweeney justru pasang badan secara terbuka dengan menyerukan dukungan pada petisi publik yang mendesak dewan direksi membatalkan sanksi pemecatan. Petisi tersebut diklaim telah mendulang ratusan ribu tanda tangan, kendati penelusuran media menemukan kejanggalan berupa nama-nama rekaan jenaka mulai dari plesetan bintang film laga hingga nama presiden mancanegara.

Ketololan publikasi petisi itu kian menyingkap borok lama kultus individu yang telah lama mengakar kuat di kiblat industri teknologi global. Sebagaimana diungkapkan oleh pendiri 23andMe Anne Wojcicki dalam wawancara kritisnya bersama Bloomberg, konsentrasi modal raksasa telah menjebak masyarakat dalam ilusi berbahaya yang memperlakukan para bos startup dan raksasa semikonduktor layaknya manusia setengah dewa yang kebal dari segala jerat hukum. Di lingkungan korporasi mana pun, hubungan personal antara pimpinan puncak dengan karyawan bawahan bukanlah sekadar urusan privasi percintaan, melainkan pelanggaran berat atas penyalahgunaan kekuasaan struktural yang menindas prinsip keadilan tempat kerja. Namun di hadapan para investor yang mabuk melihat kenaikan valuasi pasar triliunan dolar, kepatuhan moral mendadak dinegosiasikan seolah-olah etika hanyalah catatan kaki yang tak bernilai.

![Mantan CEO Nvidia Jensen Huang mengenakan jaket kulit hitam khasnya dalam sebuah sesi konferensi teknologi grafis komputasi](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/Nvidia_Jensen_huang_03.jpg?quality=90&strip=all&crop=0,0,100,100)

Kemesraan para elit teknologi dalam membela kawan sekelasnya memperlihatkan standar ganda yang kian mencolok di jagat digital modern. Di satu sisi, industri komputasi gemar memamerkan terobosan mutakhir yang menjanjikan efisiensi peradaban, persis saat [OpenAI pasang dompet di chatbot](/openai-pasang-dompet-di-chatbot-supaya-agen-ai-bisa-belanja-pakai) guna mempermudah transaksi belanja otomatis, atau saat para raksasa gencar membombardir pasar konsumen ketika [kacamata AI Meta masuk Indonesia](/kacamata-ai-meta-masuk-indonesia-seharga-motor-bekas-saat-privasi) dengan embel-embel gaya hidup cerdas masa kini. Namun di balik kecanggihan baris kode pemrograman dan arsitektur mikrocip nan canggih, moralitas para penguasa industrinya kerap kali mandek pada arogansi feodal masa lampau: keyakinan semu bahwa siapa saja yang mengendalikan infrastruktur ekonomi digital berhak berdiri di atas norma kepatutan masyarakat kebanyakan.

Kondisi ini terasa kian menyakitkan bagi jutaan pekerja teknologi biasa, mulai dari moderator konten hingga teknisi data center, yang setiap hari hidup dalam bayang-bayang pemutusan hubungan kerja sepihak dan target kinerja yang mencekik leher. Para pekerja di lapisan bawah dituntut menandatangani tumpukan dokumen kepatuhan etika yang mengikat, sementara para eksekutif miliarder yang melanggar aturan dasar justru diselamatkan oleh jejaring lobi kawan seprofesi. Kontradiksi ini membuktikan bahwa jargon tata kelola profesional dan perlindungan lingkungan kerja yang kerap diumbar divisi humas korporasi hanyalah hiasan bibir pemanis presentasi tahunan belaka.

Karisma jaket kulit hitam dan kepiawaian merancang cip pengolah grafis tercanggih di dunia mungkin sanggup melontarkan sebuah perusahaan ke puncak kejayaan bursa saham global. Namun apabila seorang eksekutif merasa dirinya berhak mengabaikan batas integritas kerja hanya karena merasa perusahaannya terlalu besar untuk runtuh, maka masalah sesungguhnya bukan lagi terletak pada skandal individu sang mantan bos, melainkan pada kebobrokan ekosistem teknologi modern yang telanjur menyembah kekayaan materi sebagai satu-satunya ukuran kebenaran.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 15:00 WIB)");
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261116-1500.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
