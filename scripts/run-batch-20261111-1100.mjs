import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Gengsi Anak Kota Runtuh di Depan Hipdut Saat Dangdut Menguasai Panggung Gen Z",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Margaretha Nina", "Hipdut", "Musik Dangdut", "Tenxi", "Garam dan Madu", "Budaya Urban", "Gen Z", "Skena Musik"],
    imageUrl: "https://rri-portal-app-assets.obs.ap-southeast-4.myhuaweicloud.com/upload/berita/image/bukittinggi/thumbs/xl_1794297721151790_6d3e2f9dd3_berita_bukittinggi.webp",
    imageAlt: "Aksi panggung musisi dangdut modern yang memadukan instrumen kendang tradisional dengan aransemen musik elektronik di hadapan penonton muda",
    sourceUrl: "https://rri.co.id/bukittinggi/hiburan/2885363/dangdut-bertransformasi-menjadi-irama-baru-generasi-muda-indonesia",
    excerpt: "Laporan liputan RRI dan data survei Jakpat membuktikan pergeseran drastis selera musik tanah air: musik dangdut kini bertengger kokoh di posisi kedua genre paling digemari dengan torehan 31 persen responden. Lewat ledakan subgenre hipdut dan viralnya nomor Garam & Madu di linimasa TikTok, dinding gengsi kaum muda perkotaan yang dulu sok elitis kini resmi ambruk oleh ketukan kendang modern.",
    content: `Kalau Anda sempat nongkrong di kafe-kafe hipster ibu kota lima atau enam tahun lalu, mengakui diri sebagai pendengar setia musik dangdut ibarat melakukan bunuh diri sosial. Di hadapan teman-teman sebaya yang menenteng tas kanvas berisi majalah seni impor dan memutar playlist dream-pop Skandinavia, dangdut kerap distempel sebagai musik kelas dua: kampungan, norak, dan hanya pantas berputar di speaker retak warung pecel lele atau kabin truk pantura. Anak-anak muda perkotaan begitu protektif menjaga kurasi musik di ponsel mereka agar selalu terlihat berkelas, minimalis, dan murung. Namun waktu punya cara tersendiri untuk menelanjangi kepalsuan gengsi kelas menengah. Hari ini, di kelab malam paling mahal di Jakarta Selatan hingga barisan panggung festival musik bergengsi, orang-orang yang sama justru tampak berpeluh ria, meliukkan pinggang tanpa malu-malu saat ketukan kendang rampak mulai menyambar telinga.

Transformasi kultural ini bukan sekadar sensasi musiman di linimasa. Menurut laporan jurnalis liputan RRI Bukittinggi, musik dangdut tanah air tengah memasuki fase metamorfosis paling dinamis melalui perkawinan silang dengan bebunyian urban, melahirkan fenomena subgenre yang kini akrab disebut sebagai "hipdut". Perpaduan antara rima rap yang lincah, synthesizer elektronik yang padat, serta ketukan kendang dangdut yang presisi sukses memikat telinga pendengar Generasi Z. Salah satu buktinya meledak lewat lagu bertajuk "Garam & Madu (Sakit Dadaku)" yang dibawakan secara kolaboratif oleh Tenxi, Naykilla, dan Jemsii. Nomor tersebut merajai tren latar audio di TikTok dan platform streaming digital, menjangkau jutaan pasang telinga anak muda dalam hitungan pekan. Fakta ini diperkuat oleh data riset Jakpat pada periode Juni hingga Juli 2026 yang mencatat dangdut menempati posisi kedua sebagai genre musik paling digemari di Indonesia dengan persentase mencapai 31 persen responden, menempel ketat popularitas musik pop arus utama.

![Aksi panggung musisi dangdut modern yang memadukan instrumen kendang tradisional dengan aransemen musik elektronik di hadapan penonton muda](https://rri-portal-app-assets.obs.ap-southeast-4.myhuaweicloud.com/upload/berita/image/bukittinggi/thumbs/xl_1794297721151790_6d3e2f9dd3_berita_bukittinggi.webp)

Keberhasilan hipdut meruntuhkan sekat sosial tentu patut disorot dengan kacamata kritis. Di satu sisi, kemampuan musik rakyat ini menyerap elemen modern membuktikan daya lentur kebudayaan nusantara yang tidak kaku dimakan zaman. Dangdut membuktikan bahwa tradisi tidak harus diawetkan seperti mumi di museum berdebu agar tetap dicintai anak muda. Namun di sisi lain, ada aroma komodifikasi instan yang mulai tercium pekat dari ruang studio rekaman komersial. Ketika label-label rekaman besar melihat ada pasar gemuk di kalangan Gen Z, mereka mulai latah memproduksi massal lagu-lagu sejenis dengan formula seragam: intro rap patah-patah sepuluh detik, drop kendang cepat di bagian refrain, dan lirik patah hati klise yang sengaja dirancang ramah algoritma FYP. Keberanian eksplorasi yang tadinya lahir organik dari tongkrongan pinggiran kini terancam direduksi menjadi sekadar jualan komersial lima belas detik. Kita tentu mafhum bagaimana industri kreatif kerap mengeksploitasi tren lokal sampai kering, serupa dengan keresahan saat [musisi yang menolak tunduk pada algoritma](/iga-massardi-rilis-ambivalensi-bukti-musisi-rock-menolak-tunduk) berupaya mempertahankan kedalaman artistik di tengah serbuan formula instan tangga lagu digital.

Bagi anak-anak muda biasa yang sehari-hari kelelahan dihajar target kerja fleksibel dan upah bulanan yang pas-pasan, fenomena dangdut modern ini menawarkan ruang pelarian yang demokratis. Berjoget bersama di tengah riuhnya panggung terbuka tidak menuntut mereka berpura-pura memahami estetika lirik metaforis yang jelimet. Semua orang setara di bawah dentuman bas dan kendang, entah Anda staf magang yang gajinya telat cair atau eksekutif muda yang pusing memikirkan cicilan rumah. Ironisnya, euforia joget massal ini kerap terbentur pada persoalan aksesibilitas ruang publik, sebagaimana timpangnya sebaran [venue konser musik yang menumpuk di Jakarta](/venue-konser-musik-menumpuk-di-jakarta-saat-penonton-daerah-cuma) sementara anak-anak muda di pelosok daerah kerap hanya bisa menikmati atmosfer festival lewat potongan video pendek di layar ponsel. Di daerah-daerah luar pusat ekonomi, pertunjukan dangdut panggung tenda terpal warga tetap menjadi denyut nadi utama yang menghidupkan ekonomi pedagang asongan dan kru panggung lokal.

Pada ujung hari, runtuhnya gengsi kaum urban di hadapan irama hipdut adalah pengakuan jujur bahwa tubuh kita memang lebih jujur ketimbang selera musik di profil media sosial. Anda boleh saja mengisi bio Instagram dengan deretan band post-punk obscure asal Eropa Timur, tetapi saat ketukan kendang dan rima rap lokal mulai membakar lantai dansa, otot pinggang Anda akan bergerak dengan sendirinya tanpa sempat meminta izin pada kurasi estetika Anda yang mahal itu.`
  },
  {
    title: "Porting Game Elder Scrolls Nokia N-Gage ke PC Tampar Bethesda yang Malas Rawat Judul Lawas",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "The Elder Scrolls", "Bethesda", "Nokia N-Gage", "Shadowkey Reforged", "Preservasi Game", "Modder PC", "PC Gaming"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/nag2arKf76CYq2aNFJVzpd-1920-80.jpg",
    imageAlt: "Tangkapan layar pembaruan visual game The Elder Scrolls Travels Shadowkey buatan penggemar yang di-porting dari ponsel Nokia N-Gage ke PC",
    sourceUrl: "https://www.pcgamer.com/games/the-elder-scrolls/one-elder-scrolls-fan-is-reviving-and-upgrading-a-lost-spin-off-for-the-nokia-n-gage-and-porting-it-to-pc/",
    excerpt: "Seorang modder bernama Dan Whelan resmi meluncurkan proyek Shadowkey Reforged yang memboyong spin-off legendaris The Elder Scrolls Travels dari ponsel Nokia N-Gage ke PC. Lengkap dengan dukungan widescreen, gamepad modern, dan fisika ragdoll, aksi preservasi sukarela ini menjadi tamparan telak bagi Bethesda yang lebih suka memeras waralaba lewat rilis ulang berbayar ketimbang merawat arsip sejarah game mereka sendiri.",
    content: `Bagi siapa saja yang sempat melewati masa puber di awal dekade dua ribuan, ponsel Nokia N-Gage adalah simbol kemewahan sekaligus keanehan teknologi yang sulit dilupakan. Perangkat yang bentuk fisiknya kerap diejek menyerupai kue taco itu menuntut penggunanya menempelkan bagian sisi bodi ke telinga saat menelepon, membuat siapa pun yang memakainya di tempat umum terlihat seperti agen rahasia gadungan yang sedang salah tingkah. Namun di balik desain ergonomisnya yang kontroversial, mesin mungil asal Finlandia itu pernah menjadi panggung eksperimen paling berani bagi industri game saku. Sebelum pasar game mobile diseragamkan oleh layar sentuh datar dan jebakan transaksi mikro serakah, pengembang game pernah sungguh-sungguh memeras otak untuk menjejalkan pengalaman bermain peran tiga dimensi kelas berat ke dalam memori ponsel yang kapasitasnya bahkan lebih kecil daripada satu berkas foto selfie masa kini.

Salah satu peninggalan paling misterius dari era tersebut adalah The Elder Scrolls Travels: Shadowkey, judul spin-off resmi bergenre first-person RPG garapan Bethesda dan Vir2L Studios yang dirilis eksklusif untuk N-Gage pada tahun 2004 di antara jeda peluncuran Morrowind dan Oblivion. Selama dua dekade, game ini terkunci rapat di dalam kartu memori MMC kuno dan perlahan terlupakan seiring punahnya ekosistem Symbian. Namun sebagaimana dicatat oleh editor Jody Macgregor dalam laporan investigasi PC Gamer, karya yang nyaris punah tersebut kini bangkit dari kubur berkat kegigihan seorang modder independen bernama Dan Whelan. Melalui proyek ambisius bertajuk Shadowkey Reforged yang resmi dirilis ke publik hari ini, Whelan berhasil memboyong game tersebut ke platform Windows PC. Tidak sekadar memindahkan biner, ia menyematkan dukungan layar lebar modern, kompatibilitas controller penuh, tekstur grafis beresolusi tinggi, hingga mekanik gameplay baru seperti lari berbasis stamina, sistem mengendap-endap, dan simulasi fisika ragdoll yang dipinjam dari seri utama Elder Scrolls modern.

![Tangkapan layar pembaruan visual game The Elder Scrolls Travels Shadowkey buatan penggemar yang di-porting dari ponsel Nokia N-Gage ke PC](https://cdn.mos.cms.futurecdn.net/nag2arKf76CYq2aNFJVzpd-1920-80.jpg)

Kabar kembalinya Shadowkey ke tangan komunitas pemain komputer tentu disambut antusias, namun keberadaannya sekaligus memercikkan rasa malu bagi korporasi pemilik kekayaan intelektualnya. Bethesda Softworks dan induk perusahaannya, Microsoft, adalah raksasa industri bernilai triliunan rupiah dengan ribuan staf profesional. Namun dalam urusan merawat warisan sejarah mereka sendiri, catatan korporasi ini sangat memprihatikan. Todd Howard dan jajarannya jauh lebih bernafsu merilis ulang The Elder Scrolls V: Skyrim untuk yang kesepuluh kalinya di setiap konsol baru ketimbang menyisihkan anggaran kecil demi melestarikan judul-judul lawas yang pernah membangun reputasi mereka. Menyelamatkan arsip game dari kepunahan justru selalu diserahkan kepada para penggemar yang bekerja sukarela di kamar kos tanpa dibayar sepeser pun. Pola kemalasan korporasi ini bukanlah cerita baru, melainkan kebiasaan menahun yang juga terlihat saat [penutupan aplikasi PlayStation Plus PC](/sony-menutup-aplikasi-playstation-plus-pc-akibat-terlalu-malas) akibat keengganan raksasa teknologi merawat perangkat lunak yang mereka buat sendiri.

Bagi para gamer veteran yang lelah dengan tren industri game modern yang serba terhubung ke server dan penuh batasan hak cipta digital, proyek preservasi independen seperti Shadowkey Reforged adalah oase di tengah padang pasir. Komunitas penggemar membuktikan bahwa kecintaan tulus pada sebuah karya seni jauh lebih ampuh menjaga denyut kehidupan video game daripada deretan kontrak lisensi pengacara korporat. Pendekatan Whelan yang tetap menyediakan opsi tombol toggle untuk grafis orisinal juga menghormati estetika retro: jarak pandang pendek berkabut yang brutal di versi aslinya justru membangkitkan imajinasi petualangan gelap Tamriel yang magis. Upaya menjaga karya lawas ini sejalan dengan nostalgia komunitas ketika merayakan [pengakuan sembilan tahun akun Steam](/akun-steam-sembilan-tahun-resmi-dianggap-dewasa-jadi-tamparan) sebagai penanda era keemasan bermain game PC yang lebih jujur dan tidak melulu diintai oleh tagihan langganan bulanan tanpa akhir.

Melihat game saku jadul dari ponsel berbentuk taco bisa berjalan mulus di monitor komputer 4K adalah pengingat telak bagi para eksekutif industri game yang semakin malas berinovasi. Jika seorang penggemar yang bermodalkan kopi saset dan dedikasi di waktu luang sanggup menyelamatkan sebuah mahakarya yang terkubur selama dua puluh tahun, alasan korporasi triliunan rupiah yang selalu berdalih kekurangan sumber daya untuk merawat sejarah mereka sendiri jelas cuma omong kosong belaka.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 11:00 WIB)");
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
  console.log(`🎉 Batch Publikasi 11:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261111-1100.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
