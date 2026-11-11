import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Media Massa Mengulang Dosa Lama Pivot ke Video Demi Menjilat Algoritma TikTok",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Media Digital", "Pivot to Video", "TikTok", "Jurnalisme", "Algoritma", "Teknologi", "Media Sosial"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/gettyimages-2264895316.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Ilustrasi jurnalisme modern yang terdistorsi oleh tuntutan konten video pendek vertikal dan algoritma media sosial",
    sourceUrl: "https://www.theverge.com/column/1026252/video-media-news-tiktok-pivot",
    excerpt: "Satu dekade setelah kebohongan metrik Facebook menghancurkan ratusan ruang redaksi, industri media massa kembali mengulang blunder serupa lewat pivot-to-video 2.0. Kali ini para jurnalis dipaksa bertransformasi menjadi kreator TikTok, mengorbankan kedalaman liputan demi memburu recehan algoritma video vertikal.",
    content: `Bagi siapa saja yang masih memiliki kebiasaan membaca koran cetak di teras rumah sambil menikmati pisang goreng hangat, membuka laman portal berita di peramban ponsel hari ini adalah pengalaman yang menguji kesabaran jiwa. Niat hati ingin membaca ulasan mendalam soal kondisi ekonomi terkini, layar ponsel kita justru langsung dihajar oleh pemutar video otomatis yang mengambang menutupi separuh teks, lengkap dengan iklan pop-up berisik yang memekakkan telinga. Belum sempat jari kita menggulir paragraf kedua, sebuah video vertikal berdurasi tiga puluh detik sudah memaksa tampil, memperlihatkan seorang pembawa berita muda yang berbicara dengan gaya terburu-buru bak dikejar penagih utang.

Kekacauan visual ini bukan sekadar ketidaknyamanan teknis peramban, melainkan gejala dari penyakit korporasi menahun yang kini kambuh kembali di ruang-ruang redaksi digital. Rasa panik para pemilik modal terhadap hilangnya atensi pembaca membuat mereka rela menumbalkan kenyamanan dasar audiens demi mengejar ilusi metrik keterlibatan.

Sebagaimana dicatat dalam kolom ulasan The Verge pekan ini, industri media global kini resmi terjerumus ke dalam fenomena yang dijuluki sebagai pivot-to-video babak kedua. Hampir tepat sepuluh tahun lalu, sekitar pertengahan dekade 2010-an, para pemilik modal dan eksekutif media berbondong-bondong memangkas ribuan staf penulis teks demi membangun studio rekaman video mewah. Keputusan panik itu dipicu oleh janji manis para petinggi Facebook yang mengklaim bahwa konsumsi video tumbuh luar biasa pesat. Belakangan terbukti di pengadilan bahwa data metrik tontonan tersebut digelembungkan hingga 900 persen oleh pihak platform. Ratusan ruang redaksi independen telanjur bangkrut dan jurnalis andal kehilangan nafkah, sementara para bos Silicon Valley cuma tersenyum meminta maaf atas kesalahan kalkulasi teknis.

![Ilustrasi jurnalisme modern yang terdistorsi oleh tuntutan konten video pendek vertikal dan algoritma media sosial](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/gettyimages-2264895316.jpg?quality=90&strip=all&crop=0,0,100,100)

Bukannya memetik pelajaran berharga dari kuburan massal media digital satu dekade silam, para direksi media massa hari ini justru mengulangi kekonyolan yang sama dengan antusiasme yang lebih gila. Kali ini kiblat pemujaan mereka berpindah ke aplikasi video pendek TikTok dan format gulir vertikal Instagram Reels. Di mata para manajer ruang redaksi yang terpaku pada grafik grafik kunjungan semu, teks panjang dianggap sudah kuno dan membosankan bagi generasi muda. Akibatnya, jurnalis investigasi yang semestinya dikirim ke lapangan untuk membongkar kongkalikong proyek pemerintah daerah malah dipaksa duduk di depan ring light, merias wajah, dan menghafal naskah ringkas demi memancing algoritma rekomendasi berdurasi satu menit.

Dinamika ini memperlihatkan betapa rapuhnya kedaulatan industri informasi ketika seluruh nasib dapur redaksi diserahkan kepada kemauan tuan tanah platform digital. Kita melihat kemiripan pola ini dengan [ekspansi rakus aplikasi belanja TikTok yang membajak waktu luang](/tiktok-bikin-aplikasi-belanja-terpisah-demi-menagih-gaji-bulanan) di mana perhatian pengguna diperlakukan bagaikan komoditas tambang yang harus dikuras habis sampai tetes terakhir. Alih-alih membangun loyalitas pembaca organik lewat laporan yang bernas dan berbobot, media arus utama memilih menjadi buruh konten lepas yang mengemis recehan impresi dari algoritma yang aturannya bisa diubah semena-mena oleh sang pemilik server setiap pekan.

Ketergantungan buta terhadap tren algoritma kilat ini juga mengingatkan kita pada [kegagalan kecerdasan buatan dalam memahami nuansa pekerjaan manusia](/serahkan-urusan-dapur-ke-chatbot-ai-kalau-mau-siap-siap-makan-kue) di mana otomasi dan metrik angka kerap dianggap sebagai jawaban tunggal untuk segala urusan. Padahal esensi utama jurnalisme bukan terletak pada seberapa cepat gambar bergerak di layar kaca ponsel, melainkan pada ketajaman sudut pandang dan keberpihakan moral terhadap kebenaran publik. Ketika berita investigasi yang rumit disunat menjadi potongan video vertikal yang dangkal cuma demi menghindari tombol lewati, publik sejatinya tidak sedang disuguhi informasi, melainkan sekadar dibius oleh tontonan komedi pengisi waktu luang.

Di tongkrongan warkop, orang-orang sebetulnya masih menghargai tulisan yang jernih dan berbobot untuk memahami mengapa harga beras melambung atau kenapa tarif listrik diam-diam naik. Mereka tidak butuh reporter yang berpose heboh sambil menunjuk-nunjuk teks melayang di layar. Namun selama dewan redaksi masih dipimpin oleh manajer yang lebih takut pada grafik algoritma ketimbang kehilangan martabat pers, ruang redaksi akan terus disulap menjadi pabrik konten kilat.

Bila para pengelola media digital tetap bersikukuh bahwa jurnalisme masa depan harus berwujud reporter yang berjoget canggung mengikuti tren audio viral, jangan heran jika suatu hari nanti pembaca mereka benar-benar lenyap dari muka bumi. Membaca teks berita berkualitas butuh waktu dan ketenangan berpikir, sementara menyuruh seluruh dunia menatap video vertikal tanpa henti hanyalah cara paling cepat untuk memastikan bahwa otak generasi kita mencair sebelum sempat membedakan mana fakta dan mana lelucon.`
  },
  {
    title: "Permainan Hompimpa Dipinjam Jadi Lagu Pop Bukti Musisi Kehabisan Metafora Patah Hati",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Margaretha Nina", "Nabila Taqiyyah", "Musik Pop", "Musik Indonesia", "Tangga Lagu", "Budaya Populer", "Industri Musik"],
    imageUrl: "https://rri-portal-app-assets.obs.ap-southeast-4.myhuaweicloud.com/upload/berita/image/banjarmasin/thumbs/xl_1794137447753992_25832c2afe_berita_banjarmasin.webp",
    imageAlt: "Penyanyi Nabila Taqiyyah saat membawakan lagu pop terbarunya berjudul Tak Semudah Hompimpa",
    sourceUrl: "https://rri.co.id/banjarmasin/hiburan/2880283/nabila-taqiyyah-tak-semudah-hompimpa-puncaki-top-20-indonesia-pekan-ini",
    excerpt: "Single Tak Semudah Hompimpa milik Nabila Taqiyyah sukses merajai tangga lagu Top 20 Indonesia. Keberhasilan meminjam mantra permainan anak-anak menjadi balada asmara membuktikan satu hal: industri musik pop kita sedang kehabisan kosakata patah hati sehingga harus menggeledah kenangan masa kecil.",
    content: `Bagi siapa saja yang masa kecilnya sempat dihabiskan dengan berlari tanpa alas kaki di atas tanah lapang kampung menjelang waktu magrib, mantra hompimpa alaium gambrang selalu membawa getaran nostalgia yang hangat. Kita semua ingat betapa sederhananya aturan hidup saat itu: cukup ayunkan tangan bersama-sama, perlihatkan telapak tangan putih atau punggung tangan hitam, dan dalam hitungan detik urusan siapa yang harus menjaga pos ronda langsung tuntas tanpa debat kusir. Tidak ada rasa dendam kesumat, tidak ada drama blokir nomor kontak, dan tidak ada air mata yang tumpah hanya karena punggung tangan kita berbeda warna dengan teman sebaya.

Namun di tangan para peracik lagu pop melankolis ibu kota, kepolosan ritual dolanan anak-anak tersebut kini diseret masuk ke dalam pusaran asmara dewasa yang penuh keluh kesah.

Fenomena tersebut tercermin jelas dalam pergerakan tangga nada musik tanah air pekan ini. Sebagaimana dicatat dalam laporan tangga lagu resmi yang dilansir dari RRI, tembang terbaru bertajuk Tak Semudah Hompimpa yang dibawakan oleh penyanyi muda Nabila Taqiyyah resmi memuncaki tangga lagu Top 20 Indonesia. Lagu yang mengandalkan aransemen piano lembut berbalut gesekan dawai biola mendayu-dayu ini berhasil menyalip puluhan lagu pop arus utama lainnya, membuktikan bahwa formula metafora masa kecil masih sangat ampuh membius telinga pendengar lokal.

![Penyanyi Nabila Taqiyyah saat membawakan lagu pop terbarunya berjudul Tak Semudah Hompimpa](https://rri-portal-app-assets.obs.ap-southeast-4.myhuaweicloud.com/upload/berita/image/banjarmasin/thumbs/xl_1794137447753992_25832c2afe_berita_banjarmasin.webp)

Keberhasilan single ini sesungguhnya memantik senyum geli sekaligus tanda tanya besar mengenai kondisi kreativitas lirik lagu pop Indonesia hari ini. Selama puluhan tahun, perbendaharaan kata para pencipta lagu asmara tanah air berputar pada perumpamaan yang itu-itu saja: hujan gerimis di kaca jendela kafe, kopi hitam yang mendingin di atas meja, bayangan senja yang muram, atau janji manis yang terbang tertiup angin malam. Ketika stok kata puitis dari kamus besar bahasa Indonesia sudah terkuras habis akibat dipakai berulang kali oleh ratusan penyanyi berbeda, produser rekaman tampaknya mulai panik dan memutuskan untuk menjarah memori taman kanak-kanak.

Maka lahirlah lagu-lagu yang membandingkan pahitnya dikhianati kekasih dengan permainan petak umpet, adu kelereng, hingga hompimpa. Strategi ini memang tergolong cerdik untuk memancing efek viral instan di linimasa media sosial. Generasi muda yang setiap hari dirundung kecemasan masa depan mudah sekali terpancing emosinya ketika disuguhi kontras antara manisnya kenangan masa kecil dan getirnya realitas percintaan orang dewasa. Lirik yang akrab di telinga membuat lagu cepat dihafal oleh para penumpang angkutan kota, pekerja kantoran yang penat di gerbong kereta rel listrik, hingga kasir minimarket yang memutar radio seharian.

Kecenderungan industri musik yang gemar mencari jalan pintas formula komersial ini sejatinya menggemakan fenomena serupa pada [kecenderungan label rekaman mendaur ulang formula asmara seragam](/ketika-lagu-cinta-lawas-yovie-widianto-terus-didaur-ulang-karena) di mana keberanian untuk melahirkan narasi puitis orisinal kerap dikalahkan oleh ketakutan rugi di meja kalkulasi produser. Ketika satu tema dolanan anak terbukti laris manis di pasaran, kita bisa menebak bahwa beberapa bulan ke depan studio rekaman bakal kebanjiran demo lagu cinta bertema lompat tali, gobak sodor, atau layang-layang putus.

Padahal di ranah musik nusantara yang lebih luas, keberhasilan merebut hati rakyat jelata tidak melulu harus mengandalkan gimik judul nostalgia yang dibuat-buat, persis seperti [keberhasilan musisi non-Jakarta merebut puncak penghargaan musik](/ketika-album-pop-terbaik-ami-awards-direbut-anak-pesisir-wakatobi) yang membuktikan bahwa kejujuran bertutur tentang realitas hidup sehari-hari selalu memiliki bobot yang jauh lebih abadi daripada sekadar menumpang tenar pada permainan anak-anak. Menulis lirik cinta semestinya berangkat dari pengamatan sosial yang jujur, bukan sekadar meminjam kosakata masa kecil demi memancing rasa iba sesaat di aplikasi streaming musik.

Mendengarkan kepedihan asmara yang disandingkan dengan hompimpa memang terasa menggemaskan di beberapa menit awal. Namun jika untuk sekadar move on dari mantan pacar saja orang dewasa harus merengek membandingkan nasibnya dengan permainan anak sekolah dasar, barangkali yang perlu dievaluasi bukan cuma kedewasaan hubungan asmaranya, melainkan apakah para pencipta lagu kita memang sudah benar-benar kehabisan bahan obrolan.`
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261108-2100.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Run Error:", err);
    process.exit(1);
  });
}
