import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Bos Jackbox Bangga Dijuluki Friendslop Saat Game Triliunan Rupiah Malah Bikin Bosan",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Jackbox Games", "Friendslop", "Game Indie", "PC Gaming", "Lethal Company", "Industri Game", "Gamer PC"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/CfPExkt5CSM4jRfS6smJnW-1920-80.jpg",
    imageAlt: "Visual promosi karakter Jackbox Party Pack yang identik dengan keseruan bermain game pesta bersama kawan di Discord",
    sourceUrl: "https://www.pcgamer.com/games/were-kind-of-friendslop-ceo-of-jackbox-games-sees-the-link-between-party-games-and-this-new-trend-but-doesnt-think-its-necessarily-a-negative-moniker/",
    excerpt: "CEO Jackbox Games Mike Bilder menyambut santai julukan friendslop yang disematkan komunitas gamer pada genre permainan pesta kooperatif. Di tengah rontoknya studio raksasa akibat memaksakan proyek live-service beranggaran triliunan rupiah yang membosankan, meledaknya tren friendslop menjadi bukti bahwa gamer hari ini cuma butuh tawa lepas bareng teman tongkrongan tanpa dibebani battle pass dan grafis hiper-realistis yang melelahkan.",
    content: `Ada satu pemandangan ganjil yang hampir setiap akhir pekan terjadi di ruang obrolan suara Discord para pemain komputer di tanah air. Di atas meja kerja, menyala sebuah komputer rakitan berkartu grafis mutakhir seharga uang muka rumah subsidi, lengkap dengan monitor lengkung ratusan hertz dan jajaran lampu hias warna-warni yang berkilau bak etalase toko emas. Secara teori perangkat keras semahal itu dirancang untuk menjalankan game petualangan sinematik kelas berat dengan teknologi simulasi cahaya paling rumit yang bisa diciptakan manusia. Namun kenyataannya di layar monitor yang terpampang justru bukan prajurit lapis baja fotorealistis di medan perang epik, melainkan karakter berwajah konyol dengan gerakan patah-patah yang sibuk mengangkut rongsokan besi atau saling dorong ke jurang lava. Suara tawa terbahak-bahak dan teriakan panik para pemain memecah keheningan malam, jauh lebih meriah dibanding suasana bioskop premier.

Pilihan bermain yang terkesan merendahkan martabat perangkat mahal itu belakangan melahirkan sebuah label kultural anyar di jagat maya: *friendslop*. Istilah ini awalnya meluncur sebagai sindiran ringan untuk game kooperatif beranggaran rendah yang mekanik permainannya cenderung repetitif dan visualnya seadanya, tetapi mendadak meledak menjadi candu massal begitu dimainkan ramai-ramai bersama kawan karib. Judul-judul seperti Lethal Company, Phasmophobia, Content Warning, hingga Repo menjadi contoh nyata bagaimana kegembiraan bermain game bisa diproduksi tanpa perlu polesan visual mewah. Menariknya, label bernada ejekan tersebut justru ditanggapi dengan lapang dada oleh sesepuh genre permainan pesta. Sebagaimana dicatat oleh jurnalis Ted Litchfield dalam laporannya di PC Gamer, Chief Executive Officer Jackbox Games, Mike Bilder, secara terang-terangan mengakui bahwa formula karya mereka memang berada di ceruk yang sama.

![Visual promosi karakter Jackbox Party Pack yang identik dengan keseruan bermain game pesta bersama kawan di Discord](https://cdn.mos.cms.futurecdn.net/CfPExkt5CSM4jRfS6smJnW-1920-80.jpg)

Bagi Bilder, julukan friendslop sama sekali bukan stempel penghinaan yang merendahkan derajat karya cipta mereka. Di saat industri game skala besar tengah dilanda badai pemutusan hubungan kerja dan gelombang penutupan studio akibat kegagalan komersial proyek-proyek raksasa, kebangkitan game pesta mandiri justru membuktikan bahwa naluri dasar manusia untuk bercengkerama dan bersenang-senang tidak pernah luntur. Jackbox Games selama lebih dari satu dekade telah membuktikan bahwa game kuis dengan modal layar ponsel pintar sebagai pengontrol bisa memicu kegaduhan yang jauh lebih tulus di ruang keluarga dibanding game tembak-menembak kompetitif yang menuntut refleks jari secepat kilat. Penerimaan santai dari pihak pengembang ini terasa seperti tamparan telak bagi para eksekutif studio kakap yang selama bertahun-tahun terjebak dalam delusi grafis mewah.

Kegagalan industri arus utama membaca selera penikmat game sejatinya berakar dari arogansi korporasi yang enggan memahami arti sebuah permainan. Para petinggi penerbit global rela menggelontorkan dana triliunan rupiah dan mempekerjakan ratusan pemrogram hanya demi menyempurnakan helai rambut karakter atau kerutan baju zirah. Namun setelah produk mahal tersebut dirilis, para pemain bukannya terhibur melainkan justru dipaksa menjalani rutinitas harian yang membosankan demi menaikkan level battle pass virtual. Kita sudah berulang kali menyaksikan bagaimana ambisi memburu cuan instan ini berujung petaka, mulai dari kepanikan studio legendaris yang [memutar haluan demi menghindari kuburan live service](/bungie-putar-haluan-jadikan-marathon-game-roguelite-demi-hindari) hingga deretan pembatalan tragis saat [Sony membatalkan proyek Fairgames](/sony-batalkan-fairgames-bukti-live-service-playstation-berujung) setelah membakar kas perusahaan ratusan juta dolar. Korporat lupa bahwa gamer membeli komputer bukan untuk mendaftar menjadi karyawan magang di dunia virtual, melainkan untuk melarikan diri sejenak dari kepenatan dunia nyata.

Di tanah air sendiri, antusiasme terhadap game model friendslop ini bersinggungan langsung dengan realitas sosial anak-anak muda perkotaan. Menghabiskan waktu luang di kafe mentereng saban akhir pekan menuntut anggaran nongkrong yang kian mencekik kantong pekerja berupah minimum. Mabar game murah meriah di kamar kos berbekal sambungan internet pas-pasan dan secangkir mi instan kuah menjadi ruang katarsis paling terjangkau bagi kewarasan jiwa. Di hadapan game-game receh ini, tidak ada hierarki kasta antara mereka yang memakai laptop kantor lemot atau komputer gaming monster. Semua pemain berkedudukan sama di depan hukum kekonyolan: sama-sama bisa panik berteriak histeris saat diterkam monster alien berkepala labu, atau saling menertawakan gambar jelek kawan saat sesi tebak sketsa. Fenomena ini sekaligus mempertegas bahwa industri [latah menjiplak formula game indie demi meraup cuan kilat](/warhammer-survivors-latah-menjiplak-game-indie-demi-meraup-cuan) tidak akan pernah bisa membeli jiwa persahabatan yang tumbuh organik di atas meja makan para pemainnya.

Jika para petinggi industri game miliaran dolar di California atau Tokyo masih bingung mencari resep mengapa game mereka kian ditinggalkan pembeli, mereka mungkin perlu merendahkan hati untuk duduk bersila di pos ronda atau warung kopi terdekat. Permainan terbaik di muka bumi tidak pernah dinilai dari seberapa banyak jutaan piksel yang mampu dipompa kartu grafis ke atas layar, melainkan dari seberapa riuh tawa yang tertinggal di ruangan setelah tombol daya dimatikan.`
  },
  {
    title: "Amazon Terbangkan Drone Ring di Ruang Tamu Menandai Tamatnya Privasi Rumah Sendiri",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Amazon", "Ring Robotics", "Drone Pengintai", "Privasi Digital", "Smart Home", "Kamera Keamanan", "Gadget"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2026/11/Ring-Drone-1152x648.jpeg",
    imageAlt: "Perangkat drone kamera keamanan dalam ruangan Ring Drone Cam buatan Amazon yang dirancang terbang berpatroli di dalam rumah",
    sourceUrl: "https://arstechnica.com/ai/2026/11/ring-cameras-go-mobile-as-amazon-debuts-ai-powered-security-drone-and-robot/",
    excerpt: "Amazon resmi memperkenalkan divisi Ring Robotics lewat peluncuran drone kamera dalam ruangan Ring Drone Cam dan robot beroda Ring Rover Cam yang ditenagai sistem navigasi AI Pilot. Di balik dalih menjaga keamanan tempat tinggal dari jarak jauh, menerbangkan kamera bersayap baling-baling di sela ruang keluarga dan kamar tidur menjadi puncak ironi ketika kenyamanan ruang privat warga dikorbankan demi nafsu monetisasi data korporasi teknologi.",
    content: `Bagi kebanyakan orang biasa yang lelah membanting tulang seharian di jalanan macet dan kubikel kantor sempit, rumah adalah satu-satunya benteng perlindungan terakhir yang tersisa di muka bumi. Begitu pintu depan dikunci rapat dari dalam, kita merasa berhak menanggalkan topeng kepantasan sosial: merebahkan badan di atas karpet ruang tengah hanya mengenakan celana pendek gombrang, menyantap camilan sisa semalam langsung dari bungkusnya, atau mengomel sendirian menumpahkan kekesalan pada atasan tanpa perlu takut dihakimi siapa pun. Di dalam bilik rumah, kita berdaulat penuh atas tubuh dan pikiran kita sendiri. Namun surga privasi paling purba tersebut perlahan-lahan mulai digerogoti oleh racun paranoia yang disuntikkan para raksasa teknologi Lembah Silikon, yang dengan lihai meyakinkan konsumen bahwa hunian mereka tidak akan pernah aman sebelum setiap inci sudut dinding dipasangi mata lensa elektronik.

Bila selama ini kamera pengawas pintar hanya terpasang pasif menempel di kusen pintu atau langit-langit garasi, markas besar Amazon di Seattle kini memutuskan untuk melangkah lebih jauh ke dalam kamar tidur Anda. Sebagaimana dicatat oleh jurnalis Benj Edwards dalam laporannya di Ars Technica, raksasa niaga elektronik tersebut resmi mendirikan payung bisnis baru bernama Ring Robotics dan memperkenalkan dua gadget patroli otonom untuk pasar konsumen dan komersial. Produk pertamanya adalah Ring Drone Cam, sebuah helikopter mini nirawak seharga dua ratus lima puluh dolar yang dirancang untuk lepas landas dari stasiun dok, terbang melayang di lorong rumah dengan rekaman video beresolusi 2K selama lima hingga delapan menit, lalu kembali mendarat secara mandiri. Bila drone terbang dirasa kurang mengintimidasi, Amazon juga menyodorkan Ring Rover Cam, robot keamanan beroda empat seharga seribu dolar dengan kamera berputar 4K yang sanggup berpatroli keliling ruangan. Keduanya dikendalikan oleh sistem navigasi cerdas bertajuk AI Pilot yang terus-menerus memetakan denah tata ruang perabot hunian Anda ke server cloud perusahaan.

![Perangkat drone kamera keamanan dalam ruangan Ring Drone Cam buatan Amazon yang dirancang terbang berpatroli di dalam rumah](https://cdn.arstechnica.net/wp-content/uploads/2026/11/Ring-Drone-1152x648.jpeg)

Mendengar janji manis tim pemasaran bahwa rumah Anda kini dijaga oleh armada patroli mini berkamera canggih layaknya pangkalan militer mungkin terdengar memabukkan bagi kalangan pencinta teknologi berkantong tebal. Namun jika akal sehat kita dibiarkan bekerja barang lima menit saja, gagasan membiarkan baling-baling plastik berdengung di atas meja makan dan tempat tidur sejatinya adalah lelucon mahal yang membahayakan kewarasan. Kita tentu belum lupa bagaimana konyolnya rekam jejak perangkat otomasi konsumen perusahaan ini di masa lalu, persis ketika [Amazon merilis robot satpam belasan juta tapi tak berdaya menghadapi undakan tangga](/amazon-rilis-robot-satpam-rp15-juta-tapi-tak-berdaya-menghadapi) sehingga akhirnya cuma menjadi pajangan berdebu di pojok ruangan. Alih-alih mengevaluasi kekonyolan mendasar dari konsep satpam mekanik tersebut, solusi yang mereka sodorkan sekarang malah menerbangkan kamera ke udara dengan suara bising baling-baling yang sanggup menerbangkan tumpukan berkas kerja dan membuat kucing peliharaan lari ketakutan.

Persoalan yang jauh lebih genting tentu saja bukan sekadar risiko drone tersangkut jemuran baju atau menabrak lampu gantung. Masalah paling menakutkan dari ekosistem Ring Robotics adalah pemusatan data spasial rumah tangga yang dikirim langsung ke server Amazon. Sistem AI Pilot tidak hanya merekam gambar video, tetapi juga mempelajari denah tiga dimensi tempat tinggal Anda, mencatat letak perabotan berharga, hingga membaca kebiasaan jam tidur penghuni rumah. Dalam lanskap keamanan digital yang begitu rapuh, membiarkan raksasa periklanan memetakan ruang tidur Anda adalah bentuk keluguan yang luar biasa. Sejarah telah berulang kali membuktikan bahwa rekaman kamera pintar sangat rentan disusupi peretas jahat atau bahkan diintip secara sepihak oleh teknisi vendor nakal. Rasa aman palsu yang ditawarkan gadget semacam ini mengingatkan kita pada fenomena [warga kota yang butuh sensor UV jutaan rupiah cuma demi sadar panasnya matahari](/ketika-warga-kota-butuh-sensor-uv-jutaan-rupiah-cuma-demi-sadar), di mana naluri bertahan hidup alami manusia sengaja dimatikan agar korporasi bisa menjual obat cemas berbentuk langganan perangkat lunak berbayar.

Bagi masyarakat di lingkungan kampung atau perumahan Indonesia, konsep keamanan hunian sejatinya tidak pernah membutuhkan helikopter mini berdengung yang mengintip dari balik tirai jendela. Sejak puluhan tahun silam, rasa aman warga terjaga secara organik berkat tradisi ronda malam di poskamling, jalinan tegur sapa antar-tetangga yang tulus, serta kehadiran satpam kompleks yang hafal luar kepala siapa saja orang asing yang melintas di gang depan. Mengganti modal sosial yang hangat tersebut dengan drone pengawas mandiri seharga jutaan rupiah hanyalah bukti nyata keterasingan manusia modern yang makin curiga pada sesamanya.

Membeli drone pengintai untuk meneror ruang tamu sendiri bukanlah tanda bahwa Anda hidup di masa depan yang serba gemilang. Tindakan itu lebih mirip dengan membayar biaya sewa bulanan kepada korporasi asing hanya agar mereka bersedia menempatkan agen intelijen bersayap baling-baling di atas kepala Anda saat Anda sedang tertidur lelap.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 19:00 WIB)");
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
  console.log(`🎉 Batch Publikasi 19:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================\n");
  return results;
}

// CLI Execution
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261111-1900.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Batch Execution Failed:", err);
      process.exit(1);
    });
}
