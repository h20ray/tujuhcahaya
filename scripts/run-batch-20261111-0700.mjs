import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Sony Batalkan Fairgames Bukti Live Service PlayStation Berujung Boncos",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Sony PlayStation", "Fairgames", "Haven Studios", "Jade Raymond", "Industri Game", "Live Service", "Gamer PC"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/SBHGE8LS4dVjoP4g8qVmdS-1920-80.jpg",
    imageAlt: "Konsep karakter perampok bertopeng modern dalam game Fairgames garapan Haven Studios yang resmi dibatalkan Sony",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/sony-cancels-another-live-service-game-ahead-of-release-but-at-least-there-wont-be-any-layoffs-this-time/",
    excerpt: "Sony Interactive Entertainment resmi membatalkan proyek game perampokan multiplayer Fairgames garapan Haven Studios. Setelah kegagalan memalukan Concord, ambisi raksasa Jepang tersebut mengejar mesin uang live-service kini kian menumpuk bangkai proyek berbiaya triliunan rupiah.",
    content: `Kalau ada kebiasaan paling menjengkelkan dari para petinggi korporasi game dalam setengah dekade terakhir, itu adalah nafsu purba mereka yang selalu ingin memelihara sapi perah abadi. Mereka melihat kesuksesan Fortnite atau Apex Legends bukan sebagai anomali industri yang lahir dari momen unik, melainkan sebagai cetak biru wajib yang harus ditiru oleh semua studio. Setiap kali ada pengumuman proyek anyar di etalase digital, gamer sudah bisa menebak dengan helaan napas panjang: ini pasti game tembak-menembak multiplayer daring berbalut battle pass musiman, deretan skin kosmetik warna-warni seharga ratusan ribu rupiah, dan janji pembaruan konten bertahun-tahun yang jarang ditepati.

Kini, daftar korban dari ambisi serakah tersebut kembali bertambah panjang di kubu PlayStation. Sebagaimana dicatat dalam laporan investigasi PC Gamer dan Polygon, Sony Interactive Entertainment resmi memutuskan untuk membatalkan proyek game bertajuk Fairgames. Permainan aksi perampokan kompetitif berformat live-service ini pertama kali diumumkan ke hadapan publik pada ajang PlayStation Showcase 2023 silam. Proyek tersebut dikembangkan oleh Haven Studios, studio anyar di Montreal yang didirikan oleh veteran industri Jade Raymond—sosok di balik lahirnya waralaba Assassin's Creed. Menariknya, dua tahun lalu mantan bos PlayStation Jim Ryan sempat sesumbar bakal meluncurkan setidaknya dua belas game live-service hingga 2025. Sony bahkan sampai rela mengakuisisi Haven Studios secara penuh demi memuluskan ambisi tersebut. Namun menurut konfirmasi resmi dari juru bicara perusahaan, Fairgames kini resmi dicoret dari kalender rilis dan Haven Studios bakal dialihkan fungsinya sekadar menjadi tim pendukung teknis untuk proyek studio PlayStation lainnya.

![Konsep karakter perampok bertopeng modern dalam game Fairgames garapan Haven Studios yang resmi dibatalkan Sony](https://cdn.mos.cms.futurecdn.net/SBHGE8LS4dVjoP4g8qVmdS-1920-80.jpg)

Bagi komunitas gamer yang waras, pengumuman pembatalan ini terasa seperti lelucon pahit yang sudah bisa ditebak ujung ceritanya. Setelah babak belur menanggung kerugian ratusan miliar rupiah akibat bencana memalukan Concord yang ditarik dari peredaran hanya dua pekan pasca-rilis, Sony tampaknya baru mulai tersadar dari mimpi mabuk cuan mereka. Sebelumnya, proyek ambisius The Last of Us Online garapan Naughty Dog juga bernasib serupa: dikubur hidup-hidup setelah menghabiskan waktu bertahun-tahun dan sumber daya bernilai fantastis. Yang bikin jengkel adalah sikap arogan para eksekutif yang memperlakukan game murni sebagai kalkulasi spreadsheet keuntungan jangka panjang. Padahal, ekosistem PlayStation dibangun di atas fondasi judul naratif pemain tunggal yang solid seperti God of War, Uncharted, dan The Last of Us. Memaksa studio-studio bertalenta untuk meracik game tembak-menembak kompetitif berulang-ulang demi mengeruk recehan transaksi mikro ibarat menyuruh koki bintang lima memasak mi instan massal di kantin pabrik.

Kekecewaan ini makin berlipat ganda di kalangan pemain PC dan pemilik konsol yang sehari-hari hanya ingin menikmati pengalaman bermain yang tuntas tanpa harus dipaksa berkomitmen layaknya pekerjaan sampingan kedua. Kita tentu belum lupa bagaimana para petinggi industri begitu getol mengejar tren monetisasi instan, sebagaimana terlihat saat [penutupan studio pengembang game serupa](/bandai-namco-tutup-studio-unknown-9-bukti-ambisi-transmedia) yang gagal total akibat mengabaikan kenyamanan dasar bermain demi ambisi waralaba muluk-muluk. Alih-alih mengalokasikan anggaran ratusan juta dolar untuk memoles judul-judul eksperimental yang segar atau memperbaiki ekosistem perangkat lunak mereka—seperti blunder [aplikasi PlayStation Plus PC yang ditutup](/sony-menutup-aplikasi-playstation-plus-pc-akibat-terlalu-malas) karena terbengkalai tanpa pembaruan berarti—Sony justru terus menghamburkan waktu mengejar fatamorgana live-service yang sudah jenuh dimasuki kompetitor lain.

Untunglah kali ini manajemen Sony mengklaim tidak ada pemutusan hubungan kerja terhadap para karyawan di Haven Studios. Namun nasib sebuah studio pengembang yang kini direduksi menjadi tukang tambal proyek lain tetap menyisakan rasa getir yang mendalam. Para petinggi industri game seharusnya segera mencuci muka dan menyadari fakta sederhana: gamer membeli konsol dan hardware mahal bukan untuk diperas uang jajannya setiap pergantian musim turnamen. Jika Sony masih saja keras kepala bermimpi menelurkan mesin cetak uang otomatis, mereka sebaiknya menyiapkan lahan pekuburan yang jauh lebih luas untuk menampung bangkai proyek-proyek live-service berikutnya.`
  },
  {
    title: "Distorsi Grunge Cikini Rock Sentil Janji Manis Pemimpin dan Isu Fatherless",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Margaretha Nina", "Cikini Rock", "Great Expectation", "Musik Grunge", "Indie Rock", "Budaya Urban", "Kritik Sosial", "Gigs Musik"],
    imageUrl: "https://rri-portal-app-assets.obs.ap-southeast-4.myhuaweicloud.com/upload/berita/image/yogyakarta/thumbs/full_1794311172189508_a056ee8ef7_berita_yogyakarta.webp",
    imageAlt: "Personel band grunge Cikini Rock berpose dengan latar nuansa musik alternatif saat perilisan lagu Great Expectation",
    sourceUrl: "https://rri.co.id/yogyakarta/hiburan/2885998/cikini-rock-rilis-great-expectation-soroti-isu-fatherless",
    excerpt: "Kuartet rock alternatif Cikini Rock resmi merilis single perdana bertajuk Great Expectation. Menolak tunduk pada tren pop mendayu-dayu, mereka meledakkan distorsi grunge untuk menampar krisis keteladanan pemimpin publik sekaligus menyuarakan luka anak-anak yang tumbuh tanpa sosok ayah.",
    content: `Di tengah hiruk-pikuk skena musik arus utama Indonesia yang belakangan ini dipadati tembang pop mendayu-dayu tentang patah hati dan melankolia asmara seragam, mendengar raungan distorsi gitar kotor terasa seperti siraman air es di siang bolong. Kita seolah dibuat jenuh oleh lirik-lirik manis yang diracik semata demi memburu potongan klip viral berdurasi lima belas detik di media sosial. Di sisi lain, ruang publik kita setiap hari dijejali oleh pidato-pidato puitis para pejabat dan tokoh publik yang sibuk menampilkan citra bapak bangsa yang penuh welas asih. Namun di balik senyum lebar di baliho jalanan dan panggung kampanye, kehadiran nyata mereka saat rakyat menjerit terhimpit kebutuhan pokok justru kerap raib tanpa jejak.

Keresahan terhadap krisis keteladanan itulah yang coba diledakkan oleh unit grunge asal ibu kota, Cikini Rock. Sebagaimana dicatat dalam laporan liputan RRI, kuartet rock alternatif ini resmi melepas single perdana mereka yang diberi tajuk Great Expectation. Band yang digawangi oleh vokalis Acel, gitaris Eca, gitaris utama Nova, pencabik bass Ame The Martian, serta penggebuk drum Roni tersebut memilih jalur yang tidak biasa untuk sebuah karya pembuka. Alih-alih bercerita tentang romantika kasmaran anak muda, Great Expectation sengaja dihadirkan sebagai cermin refleksi terhadap besarnya ekspektasi masyarakat kepada para figur pemimpin yang seharusnya menjadi teladan. Lewat gebukan drum yang bertenaga dan riff gitar sarat distorsi mentah, lagu ini membongkar kepedihan mendalam akibat krisis figur pelindung, sebuah metafora yang bertaut erat dengan fenomena maraknya ketiadaan peran ayah atau fatherless di tengah tatanan keluarga modern.

![Personel band grunge Cikini Rock berpose dengan latar nuansa musik alternatif saat perilisan lagu Great Expectation](https://rri-portal-app-assets.obs.ap-southeast-4.myhuaweicloud.com/upload/berita/image/yogyakarta/thumbs/full_1794311172189508_a056ee8ef7_berita_yogyakarta.webp)

Keputusan Cikini Rock mengangkat tema krisis keteladanan terasa sangat tepat sasaran jika kita menengok lanskap sosial politik tanah air hari ini. Fenomena fatherless bukan cuma sekadar istilah psikologi tentang anak-anak yang tumbuh tanpa bimbingan moral di rumah, melainkan potret makro sebuah bangsa di mana warganya kerap dibiarkan terlunta-lunta menyelesaikan urusan hidup sendiri. Negara kerap hadir sekadar sebagai penagih kewajiban atau penyelenggara seremoni potong tumpeng, namun mendadak bisu ketika diminta bertanggung jawab atas nasib buruh, petani, dan komunitas kreatif di daerah. Kekecewaan semacam ini memperpanjang barisan karya independen yang menolak bungkam, sejalan dengan [kemarahan serupa dalam lirik kritik sosial](/methosa-rilis-gemuruh-revolusi-tamparan-keras-bagi-musisi-pop) yang baru-baru ini menyentak kesadaran publik lewat musik perlawanan. Ketika mereka yang duduk di kursi empuk kekuasaan lebih sibuk menjaga gengsi dan membagi-bagi jatah proyek ketimbang mendengar jeritan akar rumput, seni musik bawah tanah kembali mengambil peran purbanya sebagai penyambung lidah keresahan warga yang terabaikan.

Bagi anak-anak muda yang rutin bergerilya di sudut-sudut gigs underground kota-kota satelit, kehadiran single semacam ini menjadi semacam suaka emosional di tengah himpitan realitas kerja serabutan dan upah minimum yang tak pernah mengejar kenaikan harga beras. Perjuangan band independen seperti Cikini Rock untuk mengenalkan karyanya ke panggung yang lebih luas pun bukan perkara gampang. Mereka harus bertarung di tengah ekosistem pertunjukan yang pincang, saat ruang berekspresi dan [panggung musisi lokal terus tersisih](/venue-konser-musik-menumpuk-di-jakarta-saat-penonton-daerah-cuma) oleh festival komersial raksasa yang hanya berputar di lingkaran segelintir pemodal ibu kota. Band-band arus bawah kerap menyewa studio latihan secara patungan dan menjual pernak-pernik kaos demi membiayai rekaman sendiri, tanpa pernah mengemis belas kasihan sponsor korporasi.

Great Expectation pada akhirnya adalah tamparan keras bagi siapa saja yang masih hobi menaruh harapan kosong pada janji-janji manis para pemangku kebijakan. Mengharapkan keteladanan tulus dari pemimpin yang gemar tebar pesona sama sia-sianya dengan menunggu distorsi gitar grunge berubah menjadi denting harpa klasik di pesta makan malam pejabat. Jika para bapak bangsa di atas sana masih terus pura-pura tuli terhadap kegelisahan generasinya, jangan kaget kalau suara anak-anak muda di jalanan bakal terus membalasnya lewat dengung distorsi yang semakin bising dan tak kenal kompromi.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 07:00 WIB)");
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
  console.log(`🎉 Batch Publikasi 07:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261111-0700.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
