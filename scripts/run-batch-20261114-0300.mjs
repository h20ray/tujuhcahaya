import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Rockstar Pamer Trailer Baru GTA 6 tapi Isinya Cuma Acara TV Fiktif Bikin Gemas",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Grand Theft Auto", "GTA 6", "Industri Game", "PC Gaming", "Rockstar Games", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/6uAdn7tYNyji3HDiVVGeHR-1920-80.jpg",
    imageAlt: "Tangkapan layar cuplikan kartun fiktif Macca and Friends di stasiun televisi Weazel TV dalam game Grand Theft Auto 6",
    sourceUrl: "https://www.pcgamer.com/games/grand-theft-auto/new-grand-theft-auto-6-trailer-is-for-a-tv-show-that-exists-within-grand-theft-auto-6/",
    excerpt: "Rockstar Games meluncurkan cuplikan video anyar terkait Grand Theft Auto 6. Namun alih-alih memamerkan gameplay baku tembak atau aksi heist, video tersebut ternyata trailer serial animasi satir fiktif berjudul Macca and Friends di stasiun televisi dalam game.",
    content: `Di tongkrongan warkop mana pun yang dihuni oleh para pencinta video game, tidak ada topik pembicaraan yang sanggup menyedot perhatian lebih dahsyat daripada nasib Grand Theft Auto 6. Bayangkan saja, sudah lebih dari satu dekade sejak gamer disuruh mengitari kota Los Santos sampai hafal setiap kelokan gang sempitnya. Selama bertahun-tahun itu pula, kabar burung soal jadwal rilis, bocoran cuplikan animasi mentah, hingga spekulasi spesifikasi kartu grafis minimum diperlakukan layaknya naskah kuno yang harus dibedah dengan khidmat. Setiap kali logo Rockstar Games tiba-tiba menyala di linimasa media sosial, ritme jantung para pemain spontan berdegup kencang, berharap penantian panjang mereka akhirnya ditebus dengan sekelumit rekaman baku tembak atau aksi kebut-kebutan mobil yang memanjakan mata.

Namun bila ada satu keahlian Rockstar yang setara dengan kehebatan mereka merancang dunia terbuka, keahlian itu adalah bakat mempermainkan emosi para penggemarnya tanpa ampun. Sebagaimana dicatat dalam laporan PC Gamer pekan ini, studio raksasa tersebut baru saja melepas cuplikan video anyar yang langsung memicu kehebohan jagat maya. Jutaan pasang mata buru-buru memutar video berdurasi singkat tersebut dengan harapan menyaksikan aksi Lucia dan Jason beraksi di jalanan Vice City. Betapa terkejutnya mereka saat menyadari bahwa video resmi tersebut sama sekali bukan menampilkan adegan kejar-kejaran polisi, mekanik baku tembak, atau simulasi fisika air yang termasyhur. Rockstar justru merilis cuplikan serial animasi kartun satir fiktif bertajuk Macca and Friends yang dijadwalkan tayang pada saluran televisi dalam game bernama Weazel TV pada 19 November mendatang. Dalam cuplikan animasi tersebut, penonton disuguhi petualangan aneh boneka beruang dan boneka kaus kaki yang saling melempar lelucon sarkastis, lengkap dengan selipan humor gelap khas budaya pop Amerika Serikat.

Langkah promosi ini terasa seperti tamparan yang dibungkus sarung tangan sutra. Di saat para gamer sudah rela mengencangkan ikat pinggang, menyisihkan gaji bulanan demi mencicil kartu grafis generasi terbaru, atau berdebat sengit di forum internet soal apakah game ini bakal dibanderol seharga satu juta rupiah lebih, Rockstar malah santai memamerkan dagelan televisi fiktif yang bahkan tidak bisa dimainkan secara langsung. Tindakan ini membuktikan betapa pongahnya posisi tawar sang pengembang di industri hiburan modern. Mereka paham betul bahwa status mahakarya kultural yang disandang waralaba GTA membuat mereka tidak perlu repot-repot mematuhi kaidah promosi standar industri pada umumnya. Penerbit game lain mungkin harus bersujud merilis lusinan video diari pengembang atau membagikan demo permainan gratis demi memancing angka pemesanan awal. Sebaliknya, Rockstar cukup melempar selembar animasi kartun satir berdurasi semenit, dan dunia maya tetap akan bertekuk lutut membicarakannya selama berminggu-minggu tanpa henti. Ketenangan korporasi ini mengingatkan kita pada sikap arogan industri yang sempat tecermin dalam [klaim bos Take-Two soal perlakuan platform](/bos-take-two-sebut-pengalaman-pc-dan-konsol-sama-padahal-gta-6), di mana kenyamanan pemain kasual sering kali dijadikan komoditas taruhan demi memancing rasa penasaran massal yang makin liar.

![Tangkapan layar cuplikan kartun fiktif Macca and Friends di stasiun televisi Weazel TV dalam game Grand Theft Auto 6](https://cdn.mos.cms.futurecdn.net/6uAdn7tYNyji3HDiVVGeHR-1920-80.jpg)

Bagi komunitas pemain akar rumput yang saban malam nongkrong di depan monitor komputer tabung atau laptop kerja yang kipasnya mendesing kepanasan, manuver Rockstar ini memantik tawa getir sekaligus rasa kagum yang membingungkan. Di satu sisi, komitmen studio asal Skotlandia itu dalam merawat kedalaman dunia fiktif memang patut diacungi jempol. Sejak era GTA 3 di konsol jadul, keberadaan radio parodi, iklan komersial absurd, dan stasiun televisi internal seperti Weazel TV adalah nyawa utama yang membedakan GTA dari sekadar klona game aksi kriminal murahan. Detail satir inilah yang membuat dunia permainan mereka terasa bernapas dan hidup. Keriuhan komunitas menyambut setiap remah informasi ini bahkan sampai melahirkan fenomena unik seperti [kebijakan bos studio Palworld yang meliburkan kantor demi peluncuran GTA 6](/studio-palworld-liburkan-karyawan-demi-gta-6-bukti-bos-jujur). Namun di sisi lain, kebiasaan industri yang gemar menjual ilusi eksklusivitas sering kali berakhir antiklimaks di meja kasir, serupa dengan kegelisahan kolektif saat menjumpai [kotak fisik game yang cuma berisi selembar kode unduhan](/ketika-kotak-fisik-gta-6-mulai-beredar-tapi-isinya-cuma-selembar) tanpa kaset nyata di dalamnya.

Pada akhirnya, menonton cuplikan kartun fiktif di dalam game yang tanggal rilis resminya masih berjarak berbulan-bulan ke depan persis seperti orang lapar yang disuguhi foto buku menu makanan di etalase restoran mewah. Perut kita tetap keroncongan, tetapi otak kita dipaksa percaya bahwa hidangan lezat sedang dimasak di dapur belakang. Kita boleh saja mengeluh gemas dan mengutuk trik pemasaran Rockstar yang sok misterius ini sampai berbusa-busa, tetapi begitu tombol pemesanan awal benar-benar dinyalakan, jari-jemari yang sama juga yang bakal paling cepat mengetuk layar demi mengikhlaskan saldo rekening terkuras.`
  },
  {
    title: "Keychron Bikin Mouse Trackball Fleksibel tapi Encok Pekerja Kantor Tetap Abadi",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Keychron", "Mouse", "Hardware", "Ergonomi", "Teknologi", "Elang Elano"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/keychron1.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Mouse trackball nirkabel Keychron T1 HE dengan bola putar jempol yang posisinya dapat disesuaikan di atas meja kerja",
    sourceUrl: "https://www.theverge.com/tech/1033159/keychron-t1-he-trackball-wireless-mouse-adjustable",
    excerpt: "Keychron memperkenalkan mouse nirkabel trackball T1 HE dengan bola putar yang posisinya bisa digeser sesuai sudut tangan. Desain unik ini menyasar pekerja kantor yang didera nyeri pergelangan tangan, meski peranti canggih tak pernah bisa menyembuhkan beban kerja yang kelewat batas.",
    content: `Kalau Anda pernah menghabiskan waktu setidaknya delapan jam sehari duduk di bilik kantor dengan pendingin ruangan yang berhembus dingin menusuk tulang, Anda pasti akrab dengan ritual pemanasan tangan yang khas. Jam baru menunjukkan pukul dua siang, tetapi pergelangan tangan sebelah kanan sudah mulai berdenyut nyeri, jari telunjuk kram akibat ribuan kali mengklik sel spreadsheet, dan otot bahu terasa kaku seperti baru saja memikul karung semen. Di tengah keputusasaan menghadapi sindrom lorong karpal dan ancaman encok menahun tersebut, layar smartphone kita mendadak dibanjiri algoritma iklan peranti ergonomis yang menjanjikan keselamatan surgawi. Dari mulai bantalan busa memori, penyangga siku mekanis, hingga bentuk mouse aneh menyerupai setrika arang atau pistol mainan, semuanya dipasarkan dengan janji manis yang seragam: selamatkan tangan Anda sebelum terlambat.

Gairah produsen peranti keras dalam meraup pundi-pundi rupiah dari penderitaan otot pekerja kantoran itulah yang kini kembali disambut oleh Keychron. Sebagaimana dicatat dalam laporan The Verge pekan ini, jenama yang selama ini sohor lewat jajaran keyboard mekanikal modis tersebut resmi memperkenalkan produk terbarunya bernama Keychron T1 HE. Berbeda dari pendahulunya Nape Pro yang ringkas dan menempel rapat di sisi papan ketik, mouse nirkabel anyar ini mengusung wujud bongsor dengan bola trackball berdiameter 34 milimeter di sisi jempol. Senjata andalan yang digembar-gemborkan Keychron terletak pada mekanisme engsel modul bolanya yang fleksibel. Pengguna tidak lagi dipaksa pasrah dengan satu sudut cengkeraman kaku, melainkan bisa menggeser dan mengatur posisi bola putar tersebut agar pas dengan lekukan telapak tangan masing-masing. Di atas kertas, mouse ini tampak seperti puncak inovasi kenyamanan peranti navigasi digital bagi mereka yang sudah lelah menggeser-geser bodi mouse biasa di atas meja kerja yang sempit.

Membeli periferal komputer berlabel ergonomis dengan harga tembus jutaan rupiah memang memberi kepuasan psikologis instan di meja kerja. Namun jika kita menanggalkan kacamata pemasaran Silicon Valley yang serba muluk, inovasi engsel trackball Keychron ini sesungguhnya menyembunyikan kontradiksi yang menggelikan. Produsen teknologi gemar mengalihkan persoalan sistemik menjadi urusan belanja konsumtif pribadi. Mereka menjual narasi bahwa pergelangan tangan Anda remuk semata-mata karena Anda belum menggunakan sensor navigasi magnetik Hall Effect atau bola jempol dengan sudut kemiringan presisi lima belas derajat. Padahal di meja kerja nyata, biang kerok dari saraf kejepit dan nyeri sendi bukanlah bentuk mouse yang kurang fleksibel, melainkan budaya kerja ugal-ugalan yang menuntut buruh korporat memelototi monitor tanpa jeda selama belasan jam. Masalah struktural ini persis seperti [bahaya nyeri sendi pergelangan tangan akibat keyboard datar](/bahaya-mengabaikan-nyeri-sendi-pergelangan-tangan-mengapa), di mana peranti modern yang dirancang serba tipis dan estetis di Instagram pada akhirnya cuma menumpuk beban stres fisik ke sendi-sendi kecil tangan tanpa pernah memberi waktu istirahat yang layak bagi tubuh manusia.

![Mouse trackball nirkabel Keychron T1 HE dengan bola putar jempol yang posisinya dapat disesuaikan di atas meja kerja](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/keychron1.jpg?quality=90&strip=all&crop=0,0,100,100)

Bagi pekerja lepas, desainer grafis, maupun admin data yang setiap bulan harus menyisihkan honor demi bertahan hidup di kota besar, tren perangkat ergonomis ini sering kali menjelma menjadi jebakan ilusi belanja yang mahal. Kita rela merogoh kocek dalam-dalam demi peranti berteknologi mutakhir, namun lupa bahwa gadget tercanggih sekali pun tidak memiliki tombol ajaib untuk membatalkan revisi mendadak dari klien di tengah malam. Kebiasaan menimbun perkakas mahal demi menenangkan rasa cemas terhadap kesehatan tubuh ini sejalan dengan [fenomena gadget mahal yang cuma jadi pajangan nongkrong](/garmin-fenix-9-dijual-seharga-motor-matik-padahal-cuma-dipakai), di mana masyarakat urban modern begitu bersemangat memborong peranti berstandar canggih hanya untuk mendapati bahwa fungsi kesehariannya tidak pernah sepadan dengan uang yang telah dihamburkan. Di warung kopi dekat kantor, para pekerja saling memamerkan mouse trackball aneh mereka dengan bangga, sembari tetap menenggak obat pereda nyeri sendi demi bisa merampungkan laporan hingga subuh menjelang.

Pada akhirnya, peranti komputer paling ergonomis di muka bumi ini bukanlah mouse ber-trackball geser seharga jutaan rupiah, melainkan tombol matikan daya di pojok layar sistem operasi yang ditekan tepat pada pukul lima sore. Selama jam kerja lembur masih diagung-agungkan sebagai bukti loyalitas dan beban target mingguan terus beranak pinak, bola jempol paling fleksibel buatan Keychron sekalipun cuma akan menjadi saksi bisu betapa mahalnya biaya yang harus kita bayar untuk sekadar menunda datangnya encok di pergelangan tangan.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 03:00 WIB)");
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
  console.log(`🎉 Batch 03:00 selesai! Total artikel terbit: ${results.length}`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261114-0300.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Batch run failed:", err);
      process.exit(1);
    });
}
