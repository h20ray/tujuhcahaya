import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Starlink Mini 2 Bawa Baterai Mandiri tapi Harganya Bikin Dompet Menangis Histeris",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Starlink Mini 2", "SpaceX", "Internet Satelit", "Elon Musk", "Gadget", "Teknologi Jaringan"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/starlinkmini2.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Terminal antena satelit portabel Starlink Mini 2 buatan SpaceX yang kini dibekali baterai built-in isi ulang",
    sourceUrl: "https://www.theverge.com/tech/1031028/spacex-starlink-mini-2-satellite-internet-terminal-hot-swap-battery",
    excerpt: "SpaceX resmi memperkenalkan terminal internet satelit Starlink Mini 2 yang kini mengintegrasikan baterai internal mandiri serta opsi baterai cadangan bongkar-pasang. Di balik janji manis koneksi internet di tengah rimba tanpa colokan listrik, banderol seribu dolar dan bobot perangkat yang kian membengkak menegaskan bahwa gadget ini hanyalah mainan pamer bagi kaum pekerja perkotaan yang gemar berlagak menjadi petualang alam bebas.",
    content: `Ada satu mitos modern yang terus dipelihara oleh para pekerja kantoran berpenghasilan lumayan di kota-kota besar: impian menjadi petualang digital mandiri yang sanggup mengetik laporan pekerjaan dari tepi tebing terpencil, lereng gunung berkabut, atau pantai sunyi tanpa gangguan siapa pun. Gambaran ini selalu tampil memikat di linimasa media sosial. Secangkir kopi seduh manual yang mengepul di atas batu kali, laptop ramping yang menyala di pangkuan, dan pemandangan cakrawala luas seolah menjadi bukti mutlak bahwa kemerdekaan sejati dari kubikel kantor akhirnya berhasil diraih. Namun siapa pun yang pernah benar-benar mencoba bekerja di alam terbuka pasti tahu realitas brutalnya yang jauh dari kesan estetik. Angin kencang yang menerbangkan kertas kerja, silau matahari terik yang membuat layar monitor gelap gulita, debu pasir yang menyusup ke sela-sela tombol keyboard, dan kepanikan paling purba ketika indikator baterai laptop mendadak berkedip merah tanpa ada satu pun stopkontak dalam radius lima puluh kilometer.

Bagi mereka yang rela merogoh tabungan dalam-dalam demi mempertahankan ilusi bekerja di tengah belantara, Elon Musk dan pasukannya di SpaceX baru saja menyodorkan godaan terbaru. Sebagaimana dicatat oleh jurnalis Andrew Liszewski dalam laporannya di The Verge, SpaceX resmi meluncurkan terminal internet satelit generasi anyar bertajuk Starlink Mini 2. Perangkat berukuran mirip laptop tebal ini membawa pembaruan besar yang selama ini diidam-idamkan para penjelajah: baterai internal mandiri yang sanggup bertahan menyala hingga empat setengah jam dalam sekali pengisian daya. Tak hanya itu, SpaceX juga merancang sistem baterai cadangan bongkar-pasang (hot-swappable) yang dapat diganti secara langsung di lapangan tanpa mematikan koneksi, serta opsi pengisian daya darurat melalui port USB-C berkekuatan 60 watt. Di atas kertas rancangan, bodi piringan antena ini bahkan berhasil dipangkas menjadi lebih ramping dengan ketebalan 23,1 milimeter dibanding generasi pendahulunya yang mencapai 38,5 milimeter, lengkap dengan sertifikasi ketahanan debu dan air IP67 agar tetap perkasa diterpa hujan badai.

![Terminal antena satelit portabel Starlink Mini 2 buatan SpaceX yang kini dibekali baterai built-in isi ulang](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/starlinkmini2.jpg?quality=90&strip=all&crop=0,0,100,100)

Sekilas pandang, memiliki piringan antena yang sanggup memancarkan sinyal Wi-Fi dari konstelasi satelit orbit rendah tanpa perlu menenteng kabel adaptor panjang terdengar bak keajaiban sains. Namun euforia itu seketika buyar begitu kita menengok label harganya yang bikin kepala mendadak pusing. Melalui skema undangan pesanan awal bagi pelanggan tertentu di Amerika Serikat, terminal Starlink Mini 2 dibanderol dengan harga 999 dolar AS atau setara dengan enam belas juta rupiah lebih. Kendati angka fantastis tersebut sudah dipaketkan dengan layanan paket Roam Unlimited selama satu tahun yang diklaim bernilai 2.100 dolar, angka belasan juta rupiah untuk sebongkah antena portabel jelas bukan keputusan belanja yang masuk akal bagi masyarakat awam. Tambahan modul baterai internal tersebut juga mengerek bobot perangkat menjadi 3,5 pon atau sekitar 1,6 kilogram. Memasukkan sebongkah lempengan plastik padat seberat itu ke dalam ransel bersama laptop dan perbekalan mendaki dijamin bakal membuat tulang pundak Anda menjerit kepayahan sebelum sempat mendirikan tenda.

Di sisi teknis, ketergantungan pada baterai berdurasi empat setengah jam sejatinya hanyalah menunda kepanikan pengguna dari satu masalah ke masalah lainnya. Di tengah rimba atau kawasan pesisir pelosok, waktu empat jam akan berlalu sekejap mata jika Anda memakainya untuk rapat virtual maraton atau menyunting berkas berukuran raksasa. Menghadapi situasi semacam itu, Anda tetap saja dituntut membeli baterai cadangan tambahan yang harganya dipastikan tidak murah, atau repot-repot membawa stasiun daya portabel berkapasitas besar. Keterbatasan daya pada perangkat portabel yang dipaksa bekerja berat semacam ini mengingatkan kita pada fenomena [baterai yang mendadak habis digerogoti aplikasi siluman](/hp-menganggur-di-meja-tapi-baterai-menguap-digerogoti-aplikasi) saat sistem operasi gagal menjaga efisiensi konsumsi arus, atau momok klasik ketika [kerapuhan jaringan internet kabel bawah laut](/ketika-internet-sedunia-bisa-mendadak-lumpuh-karena-senggolan) membuktikan bahwa infrastruktur komunikasi secanggih apa pun selalu memiliki titik lemah yang tak terduga. Janji mobilitas tanpa batas acap kali berakhir menjadi kerepotan logistik baru yang membebani punggung penggunanya.

Bagi mayoritas warga di daerah kepulauan atau pelosok Nusantara, kehadiran terminal internet satelit seharga sepeda motor matik bekas ini tentu terasa kontras dengan kebutuhan riil di akar rumput. Masyarakat pedesaan dan anak sekolah di pelosok negeri tidak membutuhkan antena canggih tipis berbalut gimmick baterai bongkar-pasang untuk bergaya di tempat perkemahan mewah glamping. Mereka hanya mendambakan sinyal seluler stabil dan kuota internet murah yang tidak putus-nyambung saat dipakai mengunduh tugas pelajaran atau mengecek harga komoditas pertanian di pasar kecamatan. Mengemas kembali teknologi satelit ke dalam bodi mewah berbanderol selangit membuktikan bahwa target pasar SpaceX bukanlah pemerataan akses informasi bagi kaum marjinal, melainkan sekadar memanjakan kaum borjuis digital yang ingin tetap bisa pamer status di media sosial dari puncak bukit.

Bila Anda memang berniat pergi berlibur ke alam bebas untuk menepi dari kepenatan rutinitas kantor, hal paling bijak yang semestinya Anda lakukan adalah mematikan laptop dan menikmati hembusan angin pegunungan secara tulus. Menggendong terminal satelit seharga belasan juta rupiah hanya demi memastikan bos kantor bisa tetap menghubungi Anda via panggilan video di tengah hutan bukanlah tanda kebebasan sejati, melainkan bentuk pengabdian sukarela pada perbudakan korporat dengan pemandangan pohon pinus.`
  },
  {
    title: "Paket Nostalgia Dewa 19 di De Tjolomadoe Bukti Panggung Musik Daerah Takut Boncos",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Margaretha Nina", "Dewa 19", "J-Rocks", "Iwa K", "De Tjolomadoe", "Solo", "Konser Musik", "Industri Musik"],
    imageUrl: "https://imgcdn.espos.id/@espos/images/2026/11/20261110210039-img-0864.jpeg",
    imageAlt: "Poster gelaran konser musik Timeless Project Live Solo yang mempertemukan Dewa 19, J-Rocks, dan Iwa K di De Tjolomadoe",
    sourceUrl: "https://solopos.espos.id/timeless-project-live-di-solo-13-november-ada-dewa-19-feat-ello-hingga-j-rocks-2265763/amp",
    excerpt: "Gelaran Timeless Project Live resmi memboyong Dewa 19 feat Ello, J-Rocks, dan Iwa K ke De Tjolomadoe Solo dengan mengusung konsep lintas generasi. Di balik kemeriahan reuni musisi legendaris dan pasar kaget era 2000-an, panggung musik luar Jakarta ini mencerminkan kegamangan akut promotor yang enggan mengambil risiko finansial selain mengandalkan formula jualan nostalgia usang.",
    content: `Bagi penikmat musik yang tinggal di luar lingkar kenyamanan Jakarta, kabar mengenai pengumuman sebuah festival musik di kota sendiri selalu disambut dengan rasa syukur yang campur aduk. Di satu sisi, ada kelegaan luar biasa karena akhirnya tidak perlu lagi menyisihkan anggaran jutaan rupiah demi membeli tiket kereta api, memesan kamar hotel murah di kawasan Mangga Dua, atau berdesak-desakan menembus kemacetan horor ibu kota hanya untuk menyaksikan musisi idola beraksi di atas panggung megah. Namun di sisi lain, jika kita mengamati susunan nama pengisi acara yang terpampang pada poster festival di daerah, perasaan jenuh perlahan mulai merayap. Nama-nama yang diundang hampir selalu berputar pada lingkaran musisi yang itu-itu saja: barisan band era sembilan puluhan yang sudah berkali-kali menggelar tur reuni perayaan dekade emas mereka, atau legenda pop yang katalog lagunya sudah dihafal luar kepala oleh bapak-bapak penjual angkringan di sudut perempatan.

Dinamika ketergantungan pada rasa rindu masa lalu itu kembali mewujud secara nyata di Jawa Tengah. Sebagaimana dicatat oleh tim jurnalis Solopos dan Medcom, promotor RESONINE resmi mengumumkan perhelatan konser bertajuk Timeless Project Live Solo yang bakal dihelat di kawasan cagar budaya De Tjolomadoe pada 13 November 2026. Promotor memboyong tiga nama besar yang merepresentasikan tonggak sejarah musik pop Indonesia lintas dekade: Dewa 19 bersama vokalis Ello yang telah mengarungi empat puluh tahun perjalanan bermusik, band beraliran Japanese rock J-Rocks yang sudah berkarya lebih dari dua puluh tahun, serta sang maestro pelopor hip-hop tanah air Iwa K yang telah melintasi tiga dekade karier solonya. Tak tanggung-tanggung, promotor mengemas gelaran ini ke dalam empat babak pengalaman bertajuk remember, relive, celebrate, dan recharge, lengkap dengan suguhan pasar budaya populer tempo dulu bertema era 2000-an dan panggung sesi karaoke hip-hop bagi para pengunjung.

![Poster gelaran konser musik Timeless Project Live Solo yang mempertemukan Dewa 19, J-Rocks, dan Iwa K di De Tjolomadoe](https://imgcdn.espos.id/@espos/images/2026/11/20261110210039-img-0864.jpeg)

Hadirnya konser skala besar di bangunan bekas pabrik gula peninggalan Mangkunegaran tersebut tentu menjadi angin segar bagi ekosistem hiburan di Solo dan sekitarnya. Publik daerah akhirnya mendapat porsi tontonan berkualitas yang digarap secara profesional tanpa harus menunggu mukjizat anggaran dari dinas pariwisata setempat. Kendati demikian, konsep nostalgia lintas era yang digadang-gadang promotor sejatinya adalah cermin paling jernih dari ketakutan akut industri panggung kita terhadap risiko finansial. Pascapandemi, ongkos produksi menggelar pertunjukan panggung kian melambung tinggi: mulai dari sewa tata suara berdaya puluhan ribu watt, panggung megah berkonstruksi kokoh, hingga jaminan keamanan kerumunan massa. Dalam kalkulasi bisnis promotor yang serba ketat, menyajikan lagu-lagu legendaris yang sudah pasti memicu koor massal ribuan penonton adalah satu-satunya jaminan aman agar lembaran tiket lekas ludes terjual dan modal kembali utuh.

Ketakutan mengambil risiko kurasi ini membuat panggung musik di luar Jakarta kian berjarak dari geliat musisi muda independen yang tumbuh subur di akar rumput. Di saat [venue konser musik yang menumpuk di Jakarta](/venue-konser-musik-menumpuk-di-jakarta-saat-penonton-daerah-cuma) menyedot mayoritas perputaran modal hiburan nasional, kota-kota sekunder justru diperlakukan sekadar sebagai pasar empuk bagi sirkuit nostalgia musisi senior ibu kota. Dampaknya, [panggung musisi lokal yang masih megap-megap](/kemenpar-pamer-konser-ye-sedot-turis-asing-saat-panggung-musisi) makin kesulitan mendapatkan ruang apresiasi yang layak di hadapan publik mereka sendiri. Talenta-talenta muda berbakat di Solo, Semarang, atau Yogyakarta terpaksa terus bergerilya di kedai kopi sempit atau gigs mandiri komunitas dengan peralatan seadanya, karena panggung besar berpapan reklame megah selalu dikapling untuk jualan tembang kenangan yang ramah bagi kantong sponsor korporasi.

Menikmati petikan melodi gitar Andra Ramadhan atau melompat bersama ketukan rima cepat Iwa K di De Tjolomadoe tentu akan tetap menjadi pengalaman menonton konser yang menyenangkan bagi siapa pun yang membeli tiket. Kita bisa bernyanyi sekeras mungkin, mengenang masa-masa berseragam putih abu-abu, dan melupakan sejenak tagihan cicilan yang menumpuk di rumah. Namun sebuah ekosistem kebudayaan yang sehat tidak bisa terus-menerus hidup dari mencuri nafas masa lalu. Jika setiap promotor musik di daerah hanya berani menjual obat rindu tanpa pernah memberi ruang bagi lahirnya pahlawan musik generasi baru, kita sesungguhnya sedang menyaksikan sebuah industri hiburan yang berjiwa renta: berjalan di tempat, takut melangkah ke depan, dan terlalu lelah untuk bermimpi.`
  }
];

export async function runBatch() {
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
      markAsSeen(art.sourceUrl.trim());
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi 15:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261111-1500.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
