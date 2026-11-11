import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Capcom Pamer Monster Hunter Wilds Ascendance Saat Gamer PC Masih Trauma Origami",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Capcom", "Monster Hunter Wilds", "Steam", "PC Gaming", "Optimasi Game", "Ascendance", "Gamer PC"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/SjXLPquNhBisCmqpHuepoj-1920-80.jpg",
    imageAlt: "Tampilan visual kunci pemburu berhadapan dengan monster Arateka dalam pembaruan Monster Hunter Wilds Ascendance di Steam",
    sourceUrl: "https://www.pcgamer.com/games/action/capcom-quietly-updates-the-monster-hunter-wilds-beta-listing-on-steam-indicating-a-possible-expansion-playtest/",
    excerpt: "Capcom diam-diam memperbarui entri aplikasi beta Monster Hunter Wilds di Steam dengan menyematkan subjudul ekspansi Ascendance lengkap dengan aset visual monster anyar Arateka. Di balik kabar uji coba yang menggoda ini, komunitas gamer PC masih dihantui trauma buruknya optimasi game dasar yang sempat melahirkan anomali monster origami dan membuat kartu grafis puluhan juta megap-megap.",
    content: `Ada satu rasa waswas ganjil yang kerap menyergap benak para perakit komputer setiap kali membaca pengumuman uji coba game beranggaran raksasa di platform Steam. Di satu sisi, ada gairah kekanak-kanakan untuk segera menguji sejauh mana batas kemampuan perangkat keras yang dibeli dengan mencicil berbulan-bulan: memasang kartu grafis tebal tiga kipas seharga sepeda motor bekas, mengatur kurva pendingin cairan, dan memastikan monitor berkecepatan tinggi siap menampilkan grafis paling mutakhir tanpa cela. Namun di sisi lain, pengalaman pahit selama bertahun-tahun telah mendidik komunitas gamer PC untuk tidak gampang percaya pada janji manis pengembang. Terlalu sering kita menyaksikan bagaimana cuplikan video promosi yang tampak begitu sinematik dan memukau justru berakhir menjadi bencana teknis begitu dipasang di komputer riil: tekstur karakter yang pecah tak karuan, waktu pemuatan berkas yang memicu kantuk, dan angka frame rate yang terjun bebas bak wahana halilintar di pasar malam.

Kekhawatiran itu kini kembali bergolak di benak para pemburu monster menyusul gerak-gerik misterius dari markas besar Capcom di Osaka. Sebagaimana dicatat oleh jurnalis Lincoln Carpenter dalam laporannya di PC Gamer, catatan pembaruan pangkalan data SteamDB membocorkan bahwa Capcom baru saja memperbarui entri aplikasi beta publik Monster Hunter Wilds. Judul aplikasi uji coba yang semula bertuliskan "Monster Hunter Wilds Beta test" mendadak diubah menjadi "Monster Hunter Wilds: Ascendance Beta test". Tak hanya sekadar mengganti label nama, Capcom juga memperbarui seluruh aset visual pada etalase digital tersebut dengan memajang karya seni resmi seorang pemburu yang tengah menghunus senjata di hadapan Arateka, salah satu monster buas anyar yang bakal diperkenalkan dalam paket ekspansi Ascendance pada 2027 mendatang. Pembaruan aset diam-diam ini menjadi sinyal tak terbantahkan bahwa Capcom tengah mempersiapkan panggung uji coba tahap lanjutan bagi para pemain di seluruh dunia.

![Tampilan visual kunci pemburu berhadapan dengan monster Arateka dalam pembaruan Monster Hunter Wilds Ascendance di Steam](https://cdn.mos.cms.futurecdn.net/SjXLPquNhBisCmqpHuepoj-1920-80.jpg)

Bagi para pemburu kawakan yang sudah terbiasa menghabiskan ratusan jam demi menempa baju zirah dari sisik naga purba, kabar mengenai ekspansi baru tentu selalu menggoda selera. Namun di kalangan penikmat game PC, antusiasme itu langsung dibayangi oleh luka lama yang belum sepenuhnya kering. Siapa pun yang ikut mencicipi sesi uji coba perdana Wilds pada penghujung 2024 lalu pasti masih ingat betul bagaimana etalase grafis megah yang dijanjikan Capcom mendadak runtuh menjadi lelucon global. Kala itu, para pemain bukannya disuguhi pemandangan padang pasir yang dramatis atau detail helai bulu monster yang berkibar anggun, melainkan dipaksa berhadapan dengan fenomena horor bertajuk "monster origami". Kegagalan sistem streaming poligon dan tingginya beban kalkulasi prosesor membuat monster-monster ganas menyusut menjadi gumpalan kertas lipat kaku tanpa tekstur, mirip prakarya murid taman kanak-kanak yang belum selesai dilem.

Penyakit optimasi yang parah tersebut bukan sekadar insiden memalukan yang selesai dalam semalam. Masalah stuttering kronis dan ketidakstabilan performa mesin RE Engine sempat menenggelamkan reputasi Wilds di platform PC selama lebih dari setahun, memicu gelombang ulasan negatif dari ribuan pembeli yang merasa ditipu mentah-mentah. Keberanian Capcom menyodorkan godaan uji coba ekspansi baru di saat game dasarnya saja masih tertatih-tatih di berbagai konfigurasi perangkat keras terasa seperti koki restoran yang buru-buru menyajikan kue penutup mewah kepada tamu yang perutnya masih mulas akibat keracunan hidangan pembuka. Penerbit game seolah berasumsi bahwa memori para pemain bisa dengan mudah dihapus hanya dengan memajang monster baru bertaring lebih runcing.

Di tengah situasi industri ketika [tuntutan gamer PC yang kerap disuruh gigit jari](/pre-order-gta-6-pecahkan-rekor-konsol-saat-gamer-pc-tetap-disuruh) oleh kebijakan penerbit yang condong menganakemaskan konsol rumahan, kebiasaan melempar game yang belum matang sudah menjadi penyakit menahun. Gamer di Indonesia mayoritas bukanlah kaum sultan yang sanggup mengganti kartu grafis flagship setiap kali ada game baru yang haus daya komputasi. Mereka adalah anak-anak muda yang rela lembur kerja dan memangkas jatah jajan demi merakit komputer kerja yang bisa disambi bermain game di akhir pekan. Ketidakpedulian korporasi terhadap efisiensi teknis inilah yang semakin menegaskan betapa krusialnya [langkah Valve memajang data performa FPS riil di toko Steam](/valve-pajang-data-fps-riil-di-toko-steam-tamparan-keras-untuk) agar konsumen tidak terus-menerus dijadikan kelinci percobaan gratisan bagi pengembang yang malas memoles kode mereka.

Menaklukkan keliaran monster Arateka di layar komputer tentu menuntut koordinasi tangan yang gesit dan ketenangan mental yang prima. Namun bagi para gamer PC yang realistis, tantangan terberat saat ini bukanlah menghindari sambaran cakar monster raksasa, melainkan memastikan kipas pendingin komputer tidak meraung histeris bak mesin helikopter saat game dijalankan. Jika dalam playtest Ascendance nanti Capcom masih membiarkan monster origami berkeliaran di padang pasir, jangan heran bila para pemburu memilih menyarungkan pedang besar mereka dan beralih memainkan katalog game lawas yang jauh lebih menghormati kewarasan akal dan dompet mereka.`
  },
  {
    title: "No Na Melenggang ke Coachella 2027 Saat Panggung Musik Lokal Masih Megap-megap",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Margaretha Nina", "No Na", "Coachella 2027", "88rising", "Girl Group", "Industri Musik", "Gigs Lokal", "Budaya Urban"],
    imageUrl: "https://rri-portal-app-assets.obs.ap-southeast-4.myhuaweicloud.com/upload/berita/image/makassar/thumbs/xl_1791188515748202_3eed283902_berita_makassar.webp",
    imageAlt: "Potret empat personel grup vokal perempuan asal Indonesia No Na yang dipastikan tampil di panggung Coachella 2027",
    sourceUrl: "https://rri.co.id/hiburan/2888307/grup-vokal-no-na-wakili-indonesia-di-festival-coachella-valley-2027-as",
    excerpt: "Kuartet vokal perempuan asal Indonesia No Na resmi diumumkan masuk jajaran penampil festival bergengsi Coachella Valley 2027 di California. Di balik riuh tepuk tangan dan klaim kebanggaan nasional di linimasa media sosial, tembusnya grup naungan 88rising ini ke kancah global justru menampar wajah industri musik domestik yang masih gamang merawat ekosistem panggung lokal dan grup vokal perempuan.",
    content: `Ada satu fenomena psikologis yang selalu berulang di jagat maya tanah air setiap kali ada nama asal Indonesia yang terselip pada poster festival musik di belahan bumi barat: ledakan histeria nasionalisme instan yang meletup tanpa kendali. Kolom komentar mendadak dipenuhi simbol bendera merah putih, potongan video penampilan masa lalu disebarkan ulang dengan narasi haru, dan warganet yang sehari-harinya gemar saling caci soal urusan remeh-temeh seketika bersatu padu mengumandangkan pujian bagi sosok "anak bangsa yang mengharumkan nama pertiwi". Euforia semacam ini memang terasa manis dan menenangkan hati saat dibaca di layar ponsel sambil menyeruput kopi saset di teras rumah. Namun jika kita sejenak berani melangkah mundur dari riuhnya panggung pamer tersebut, gelombang kebanggaan massal itu acap kali berdiri di atas fondasi kemunafikan industri yang cukup getir.

Keriuhan terbaru itu meledak menyusul pengumuman resmi dari salah satu panggung musik paling prestisius di planet bumi. Sebagaimana dicatat dalam laporan siaran RRI dan berbagai media hiburan nasional, grup vokal perempuan asal Indonesia, No Na, dipastikan menjadi salah satu penampil resmi dalam gelaran Coachella Valley Music and Arts Festival 2027 di California, Amerika Serikat. Kuartet vokal yang digawangi oleh Baila Fauri, Christy Gardena, Esther Geraldine, dan Shazfa Adesya ini dijadwalkan mengentak panggung Empire Polo Club pada pertengahan April 2027, bersanding sejajar dengan musisi kaliber internasional seperti Tame Impala, Phoebe Bridgers, hingga Weezer. Tembusnya No Na ke festival gurun legendaris ini adalah kelanjutan logis dari etos kerja keras mereka sejak meluncurkan single debut Shoot pada pertengahan 2025 di bawah payung 88rising, disusul rilis album debut Island Girl yang berani memadukan ketukan pop R&B modern dengan sentuhan instrumen etnik tradisional Nusantara.

![Potret empat personel grup vokal perempuan asal Indonesia No Na yang dipastikan tampil di panggung Coachella 2027](https://rri-portal-app-assets.obs.ap-southeast-4.myhuaweicloud.com/upload/berita/image/makassar/thumbs/xl_1791188515748202_3eed283902_berita_makassar.webp)

Melihat empat perempuan muda berbakat asal tanah air sanggup menembus seleksi kurasi festival yang terkenal luar biasa ketat di California tentu merupakan pencapaian artistik yang wajib kita rayakan dengan kepala tegak. Namun mari kita berani menatap cermin realitas dengan jujur: keberhasilan No Na melenggang ke panggung Coachella adalah murni kemenangan determinasi individu mereka dan buah dari jejaring mesin promosi global 88rising, sama sekali bukan pertanda bahwa iklim industri hiburan di dalam negeri sedang sehat walafiat. Di tanah air sendiri, keberadaan grup vokal perempuan dan format girl group selama bertahun-tahun selalu diposisikan dalam relung yang serba canggung. Mereka kerap dipandang sebelah mata oleh penikmat musik arus pinggir dengan stigma produk pabrikan yang minim nilai seni, sementara promotor festival besar di kota-kota besar enggan mengambil risiko menyediakan jam tayang prima bagi talenta vokal perempuan di panggung utama.

Kesenjangan apresiasi ini terasa semakin kontras saat kita mengamati nasib kesenian di akar rumput. Di saat [panggung musisi lokal yang masih megap-megap](/kemenpar-pamer-konser-ye-sedot-turis-asing-saat-panggung-musisi) akibat mahalnya biaya sewa gedung pertunjukan dan karut-marutnya tata kelola royalti yang tak kunjung rampung, sirkuit festival kita justru dikuasai oleh [promotor yang takut boncos dan hanya mengandalkan formula jualan nostalgia](/paket-nostalgia-dewa-19-di-de-tjolomadoe-bukti-panggung-musik) musisi senior era sembilan puluhan. Talenta-talenta muda yang berpeluh keringat mengasah koreografi dan harmonisasi vokal di sanggar sempit di Jakarta, Bandung, atau Yogyakarta hampir tidak pernah mendapatkan ekosistem pembinaan yang berkelanjutan. Mereka dibiarkan bertarung sendirian menembus belantara algoritma media sosial, sampai ada tangan produser multinasional yang melirik mereka. Begitu mereka berhasil menembus pasar global, barulah deretan pejabat kementerian dan akun kurasi lokal berebut menempelkan nama dan mengklaim andil dalam proses pembibitan.

Melihat Baila dan kawan-kawannya menari rancak di bawah sorotan lampu panggung Coachella di tengah terik gurun California kelak tentu akan menjadi tontonan yang membakar dada penonton Indonesia. Namun rasa bangga itu selamanya akan terasa hampa bila sepulang dari panggung dunia, industri hiburan di negeri sendiri tetap saja pelit memberi panggung bagi generasi penerus dan hanya gemar menepuk dada saat musisi kita dipuji orang asing. Ekosistem kesenian yang bermartabat bukanlah mereka yang paling nyaring bersorak saat warganya sukses di luar negeri, melainkan mereka yang tekun menyirami tunas-tunas baru di kebun sendiri agar tidak perlu mengungsi ke tanah orang demi sekadar bertahan hidup.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 17:00 WIB)");
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
  console.log(`🎉 Batch Publikasi 17:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261111-1700.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
