import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Tulus Memborong Piala AMI Awards dan Realitas Musisi yang Masih Mengais Royalti",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik Indonesia", "AMI Awards", "Tulus", "Industri Musik", "Royalti Musisi", "Gaya Hidup"],
    imageUrl: "https://cdn.medcom.id/dynamic/content/2026/11/05/1852950/CGI6hnkAFi.jpg?w=1024",
    imageAlt: "Penyanyi Tulus saat menerima trofi penganugerahan AMI Awards 2026",
    sourceUrl: "https://news.google.com/rss/articles/CBMixgFBVV95cUxNakE3Y1kzYWpjelR3WEtvRnIzSkVkTnRFLTNPd2ZWdTUtdEFLUWF0N0FDeDVicTE5WGNjMWwzb0JrWnh2WXZ1RVBMNUowOW12dldINVcyMkI4MDVGSjNIMVp0RGJZSHp0QkpfdVJGU1JhOHFoS3B5UjBpNWhZVEwwMVJ4aG5JTGtlNXVIU1hnb2dvaGI3bWJfWmkwVzY0VTJjdkpoTk1pWkJFUWlKRnNDbjZlbmE5eVJ4SFNxRlh4dDJNd0JSTHc?oc=5",
    excerpt: "Tulus baru saja menggenapi koleksi 21 piala AMI Awards setelah memborong lima piala lewat lagu Teh Hijau. Di balik gemerlap panggung dan tepuk tangan trofi, ekosistem musik tanah air menyisakan jurang menganga bagi musisi akar rumput.",
    content: `Kalau ada solois pria di negeri ini yang paling lihai meracik lirik puitis tanpa terdengar menye-menye lalu menyulapnya menjadi langganan piala bergengsi, sosok itu tak lain adalah Tulus. Pada malam puncak perhelatan Anugerah Musik Indonesia (AMI) Awards 2026, pria kelahiran Bukittinggi itu kembali naik ke panggung dengan langkah tenang khasnya, memborong lima piala sekaligus berkat nomor andalan terbarunya bertajuk "Teh Hijau". Kemenangan telak ini kian mengukuhkan posisinya di puncak piramida industri pop Indonesia, melengkapi lemari pialanya menjadi 21 trofi sepanjang lebih dari satu dekade berkarier.

Sebagaimana dicatat dalam laporan Medcom.id pada malam penganugerahan tersebut, pidato kemenangan Tulus terdengar membumi dan hangat. Di depan podium dengan sorotan lampu megah, ia menegaskan bahwa tanpa para pendengar setianya, ia bukanlah siapa-siapa. Pernyataan yang manis, tulus, dan pantas disambut riuh tepuk tangan dari barisan kursi VIP yang dipadati para bos label rekaman serta petinggi televisi swasta yang tampil necis dengan setelan jas mahal.

Namun bila Anda melangkahkan kaki keluar dari gedung serbaguna ber-AC dingin itu dan beranjak ke bar-bar sempit atau studio latihan di gang-gang sempit Jakarta Selatan, Bandung, hingga tongkrongan skena di Yogyakarta, atmosfer yang tersaji memperlihatkan kontras yang bikin sesak dada. Di balik gemerlap lampu sorot perayaan tahunan tersebut, ratusan musisi independen dan pekerja panggung sedang pontang-panting menghitung sisa honor manggung yang sering kali tak cukup untuk menutup ongkos sewa mobil pick-up pengangkut ampli atau sekadar membeli senar gitar pengganti.

![Penyanyi Tulus memegang piala AMI Awards 2026](https://cdn.medcom.id/dynamic/content/2026/11/05/1852950/CGI6hnkAFi.jpg?w=1024)

Bagi pengamat yang rutin memantau dinamika di [rubrik Musik & Gaya Hidup](/category/musik), pesta tahunan AMI Awards memang selalu memancarkan paradoks menahun. Di satu sisi, ia adalah etalase kemakmuran bagi segelintir talenta papan atas yang sudah berhasil membangun benteng pendengar loyal. Namun di sisi lain, ia sekaligus menjadi pengingat pahit tentang jurang kesejahteraan yang menganga lebar dalam ekosistem musik tanah air.

Keresahan terbesar musisi hari ini bukan lagi soal bagaimana menciptakan melodi yang catchy atau merekam vokal yang jernih, melainkan sistem pembagian royalti digital yang mirip lelucon buruk. Platform streaming raksasa membayar rata-rata hanya tiga puluh hingga empat puluh rupiah per putar (*stream*), itu pun masih dipotong berbagai biaya administrasi pihak ketiga. Sementara itu, Lembaga Manajemen Kolektif (LMK) di dalam negeri masih saja berkutat dengan sengkarut transparansi penarikan dan distribusi hak cipta lagu dari kafe, karaoke, dan hotel. Akibatnya, bagi musisi non-bintang lima yang menghidupi [arsip musik indie](/tag/musik) lokal, catatan ratusan ribu putar di playlist populer sama sekali tidak menjamin mereka sanggup membayar uang kontrakan bulanan tepat waktu.

Kondisi serba terjepit ini memaksa para musisi akar rumput memutar otak lebih keras demi menjaga dapur tetap mengepul. Di berbagai kota di Jawa Tengah, gelombang rilisan fisik independen berupa kaset pita edisi terbatas dan penjualan kaus merchandise bersablon manual justru menjadi penyelamat utama kelangsungan hidup sebuah band. Mereka menyadari sepenuhnya bahwa berharap pada transferan royalti digital dari aplikasi streaming adalah cara paling pasti untuk mati kelaparan secara perlahan.

Ironisnya, para pengambil kebijakan di kementerian dan asosiasi industri paling gemar berkoar-koar soal "potensi ekonomi kreatif nusantara" tiap kali ada perhelatan akbar semacam ini. Mereka bangga memamerkan statistik pertumbuhan industri hiburan di hadapan investor, padahal perlindungan jaminan sosial dan kepastian hukum bagi para pencipta lagu di akar rumput masih compang-camping. Ketika musisi legendaris jatuh sakit atau wafat dalam kondisi serba kekurangan, asosiasi baru tergopoh-gopoh menggelar konser amal dan menggalang donasi daring di media sosial.

Kemenangan Tulus dengan lima pialanya tentu layak dirayakan sebagai bukti ketelatenan seorang seniman menjaga konsistensi rasa dan mutu penulisan lirik. Namun trofi emas bersepuh kemilau itu seharusnya menjadi alarm nyaring bagi seluruh pemangku kepentingan industri musik kita. 

Musik Indonesia jelas tidak pernah kekurangan talenta hebat yang mampu menyentuh hati jutaan orang. Yang masih defisit parah adalah sistem industri yang memperlakukan para pembuat lagunya sebagai manusia bermartabat, bukan sekadar pemasok konten gratis bagi raksasa platform streaming.`
  },
  {
    title: "Kini Penumpang Pesawat Bisa Streaming Spotify tapi Ruang Melamun Kita Resmi Hilang",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Spotify", "United Airlines", "Starlink", "Teknologi Penerbangan", "Internet Satelit", "Privasi Digital"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/Image-4.jpg.jpeg",
    imageAlt: "Antarmuka aplikasi Spotify yang terpasang pada layar sandaran kursi kabin pesawat",
    sourceUrl: "https://www.theverge.com/transportation/1026472/united-seatback-spotify-app-starlink-wifi",
    excerpt: "United Airlines mengumumkan pemasangan aplikasi Spotify langsung di layar kursi pesawat dengan sokongan internet satelit Starlink. Di atas kertas terdengar canggih, namun ini sekaligus menandai hilangnya benteng terakhir ruang privat untuk melamun tanpa koneksi.",
    content: `Dulu, sebelum dunia dikepung oleh koneksi internet nirkabel di setiap jengkal sudut bumi, kabin pesawat terbang komersial adalah suaka terakhir bagi kewarasan manusia modern. Begitu pintu kabin ditutup rapat dan pramugari menginstruksikan penumpang mengaktifkan mode pesawat di smartphone masing-masing, ada kelegaan sunyi yang menyelinap ke dalam dada. Selama beberapa jam melayang di ketinggian tiga puluh ribu kaki di atas awan, kita punya alasan sah yang tak terbantahkan untuk mematikan notifikasi pesan instan, menolak panggilan telepon kantor, dan sekadar menatap hamparan sayap pesawat sembari melamun tanpa rasa bersalah.

Sayangnya, benteng kedamaian terakhir itu kini resmi diruntuhkan oleh ambisi korporasi teknologi. Sebagaimana dicatat dalam laporan The Verge pekan ini, maskapai United Airlines baru saja mengumumkan kerja sama besar dengan Spotify. Mereka membangun aplikasi pemutar musik bawaan khusus yang dipasang langsung ke dalam ribuan unit layar sandaran kursi (*seatback displays*). Lewat integrasi yang ditenagai oleh jaringan internet satelit Starlink milik Elon Musk, seluruh penumpang kini dipersilakan masuk (*log in*) menggunakan akun pribadi mereka untuk memutar lagu, daftar putar favorit, hingga menonton video podcast sembari mengarungi langit antar benua.

Bagi mereka yang kerap menelaah tren gadget konsumen di [kanal Teknologi](/category/tech), pengumuman ini tentu saja dikemas dengan segala bumbu pemasaran futuristik yang memikat. Maskapai berjanji bahwa perjalanan membosankan kelas ekonomi akan disulap menjadi ruang hiburan personal tanpa jeda. Anda bisa melanjutkan lagu yang tadi Anda dengar di taksi bandara persis di detik yang sama saat bokong Anda mendarat di kursi kabin.

![Antarmuka aplikasi Spotify pada sandaran kursi pesawat](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/Image-4.jpg.jpeg)

Namun bila Anda memandang inovasi ini dengan kacamata sysadmin yang skeptis terhadap ilusi kenyamanan digital ala [Elang Elano](/author/elang-elano), ada sederet kejanggalan yang bikin dahi berkerut. Hal paling mendasar adalah soal privasi dan keamanan akun di ruang publik. Memasukkan kredensial kata sandi atau memindai kode autentikasi akun pribadi pada perangkat layar sentuh yang saban hari dipegang oleh ribuan orang asing di kabin pesawat adalah kebiasaan yang berisiko mengundang masalah kebocoran data sesi. Sekalipun pihak maskapai mengklaim sistem akan menghapus jejak login secara otomatis saat pesawat mendarat, sejarah keamanan perangkat keras publik berulang kali membuktikan bahwa celah cache selalu menyisakan celah intip.

Dari sisi teknis jaringan, menghubungkan ratusan penumpang sekaligus ke koneksi satelit di ketinggian 35.000 kaki juga bukan perkara dongeng tanpa cela. Ketika separuh kabin penumpang serentak streaming video podcast beresolusi tinggi, pembagian kuota pita lebar (*bandwidth*) akan tersendat, menyisakan ikon putaran loading yang menjengkelkan. Belum lagi dampak psikologis bagi para pekerja lepas dan budak korporat: alasan pamungkas "maaf tadi saya di pesawat jadi tidak dapat sinyal" kini resmi dicabut dari daftar tameng keselamatan diri dari todongan revisi mendadak manajer di akhir pekan.

Lebih dari itu, manuver ini adalah puncak dari siasat industri penerbangan modern dalam mengalihkan perhatian konsumen. Maskapai penerbangan global selama bertahun-tahun rajin menyunat ruang gerak kaki (*legroom*), memangkas jatah bagasi cuma-cuma, dan mematok harga tiket selangit dengan alasan lonjakan biaya bahan bakar avtur. Sebagai gantinya, mereka melempar remah-remah hiburan algoritma di depan mata kita agar penumpang lupa bahwa lutut mereka sedang menempel kencang di punggung kursi penumpang depan.

Kita digiring untuk percaya bahwa manusia tidak lagi sanggup bertahan hidup dalam kesendirian pikiran mereka sendiri selama dua jam penerbangan. Otak kita harus terus-menerus disuapi asupan dopamin digital, podcast motivasi pengembangan diri yang melelahkan, atau alunan musik latar yang dikurasi oleh kecerdasan buatan.

Melayang di atas awan mestinya menjadi pengingat betapa kecilnya urusan duniawi kita di bawah sana. Namun berkat perpaduan satelit orbit rendah dan layar sentuh kursi, kita kini dipaksa tetap terjaga di dalam penjara algoritma yang sama, bahkan saat berada ribuan meter di atas permukaan bumi.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 22:00 WIB)");
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

    // 2. Publish ke local DB dan remote Plesk
    console.log(`📡 Menerbitkan artikel via autoPublishPost (remote: true)...`);
    const pubResult = await autoPublishPost(art, { bypassPause: true, remote: true });
    console.log(`✅ Status: ${pubResult.status} | URL: ${pubResult.url}`);
    console.log(`   Local DB: ${pubResult.dbSaved} | Remote Plesk: ${pubResult.remotePublished}`);
    
    // 3. Tandai URL sumber asli sebagai sudah diproses di seen-urls.json
    if (art.sourceUrl) {
      markAsSeen(art.sourceUrl);
    }
    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 BATCH 2-JAM SELESAI: ${results.length} artikel berhasil diperbarui & dipublikasikan.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261105-2200.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch(err => {
      console.error("Batch Execution Error:", err);
      process.exit(1);
    });
}
