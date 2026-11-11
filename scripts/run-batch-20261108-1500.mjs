import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Warga Kota Butuh Sensor UV Jutaan Rupiah Cuma Demi Sadar Panasnya Matahari",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Wearable Gadget", "Kesehatan Digital", "Gaya Hidup Urban", "Gadget", "Teknologi", "Hardware"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/10/268829_The90_Gem_SVasani_0002.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Perangkat kalung pintar Gem pemantau paparan sinar ultraviolet UV yang terhubung ke aplikasi smartphone",
    sourceUrl: "https://www.theverge.com/tech/1023230/the90-gem-necklace-hands-on-impressions",
    excerpt: "Kehadiran kalung sensor sinar ultraviolet seharga jutaan rupiah memperlihatkan puncak absurditas gaya hidup serba terukur masyarakat perkotaan. Ketika insting purba manusia merasakan panas digantikan oleh grafik baterai dan notifikasi ponsel pintar, kita sesungguhnya sedang menyewa teknologi mahal hanya untuk menggantikan akal sehat.",
    content: `Bagi siapa saja yang menghabiskan separuh hidupnya di balik meja kubikel berpendingin udara di gedung perkantoran ibu kota, melangkah keluar pintu lobi saat jam makan siang sering kali memicu kepanikan kecil yang ganjil. Begitu hawa panas jalanan menyapa kulit, refleks spontan kita bukan lagi buru-buru mencari naungan pohon rindang atau warung es teh terdekat. 

Jari-jemari kita justru sibuk merogoh saku celana, membuka kunci smartphone, lalu menatap layar kaca demi memeriksa aplikasi cuaca. Kita butuh kepastian algoritma untuk meyakinkan diri sendiri bahwa udara di luar memang terasa terik. Jika indikator ponsel belum menampilkan angka indeks ekstrem berwarna merah menyala, kita seolah belum merasa berhak untuk mengeluh gerah.

Ketergantungan kronis pada layar kaca ini rupanya belum cukup memuaskan nafsu industri perangkat keras modern. Mengapa repot-repot melirik ponsel jika Anda bisa menggantungkan komputer kecil di leher Anda seharian penuh?

![Perangkat kalung pintar Gem pemantau paparan sinar ultraviolet UV yang terhubung ke aplikasi smartphone](https://platform.theverge.com/wp-content/uploads/sites/2/2026/10/268829_The90_Gem_SVasani_0002.jpg?quality=90&strip=all&crop=0,0,100,100)

Absurditas teknologi mutakhir tersebut resmi menemukan wujud fisiknya pekan ini. Sebagaimana dicatat dalam laporan pengujian gadget oleh jurnalis Sheena Vasani di The Verge, sebuah perangkat sandang mutakhir berbentuk kalung pintar bernama The Gem resmi diperkenalkan ke pasar komersial. Dihargai sebesar 90 dolar Amerika Serikat atau berkisar di angka 1,4 juta rupiah di luar biaya pajak impor, kalung mungil ini dibekali sensor khusus untuk memantau akumulasi radiasi sinar ultraviolet (UV) yang mengenai tubuh pemakainya secara langsung.

Cara kerjanya dibuat seringkas mungkin untuk memanjakan generasi serba instan. Perangkat ini tidak memiliki layar penampil apa pun demi menjaga estetika perhiasan minimalis. Sensor optik di kalung tersebut terus-menerus mengukur intensitas cahaya sekitar, lalu mengirimkan datanya lewat sambungan nirkabel Bluetooth ke aplikasi ponsel cerdas. Begitu paparan sinar matahari dinilai telah melampaui ambang batas aman bagi kesehatan kulit, aplikasi akan memunculkan alarm peringatan berbunyi nyaring: menyuruh pengguna segera menepi ke tempat teduh atau mengoleskan ulang krim tabir surya.

Pemandangan ini menyuguhkan ironi yang menggelikan di tengah kancah teknologi konsumen hari ini. Nenek moyang kita ribuan tahun yang lalu—bahkan para petani dan buruh pelabuhan di pesisir Pantura hari ini—tidak pernah membutuhkan sambungan internet atau sensor silikon berdaya baterai koin untuk menyadari bahwa sengatan matahari jam satu siang sanggup memanggang kulit punggung. Manusia telah dibekali ratusan ribu reseptor saraf biologis di sekujur kulit yang bertugas mengirimkan sinyal rasa panas ke otak secara instan tanpa perlu menunggu pembaruan firmware.

Namun di tangan para insinyur lembah silikon dan pemodal ventura, kemampuan alami tubuh manusia tersebut berhasil dipreteli lalu dijual kembali sebagai solusi revolusioner. Kita sengaja dibuat tidak percaya pada sinyal biologis tubuh sendiri demi melanggengkan kultus kuantifikasi diri (*quantified self*). 

Semua hal wajib diukur, dicatat, dan diubah menjadi diagram batang berwarna-warni di layar ponsel. Mulai dari berapa langkah kaki yang kita ayunkan, berapa mililiter air yang kita teguk, berapa denyut nadi saat tidur, hingga kini urusan merasakan hangatnya sinar matahari pun harus diserahkan kepada izin aplikasi.

Bagi kelas pekerja urban yang gajinya kerap terkuras untuk membeli ragam gadget pintar pelacak kesehatan, tren ini sejatinya adalah ilusi kenyamanan yang rapuh. Fenomena ini terasa sangat akrab dengan kebiasaan buruk masyarakat modern, mengulang [kebiasaan buruk memaksakan fisik saat push rank hingga sendi kaku](/ketika-sendi-jempol-mulai-mogok-kerja-akibat-dipaksa-push-rank) di mana tubuh sudah merintih kelelahan namun terus diabaikan demi skor virtual. Begitu pula derita pekerja digital saat [bodi laptop panas membakar paha saat dipaksa lembur](/ketika-kipas-laptop-mendesing-bak-pesawat-tempur-dan-bodi-panas), kita lebih memilih membeli kipas tambahan ketimbang menutup laptop dan beristirahat.

Para perancang teknologi sengaja menanamkan kecemasan medis berlebihan (*health anxiety*) ke benak konsumen. Kita dibuat cemas bahwa melangkah tanpa kalung sensor akan membuat kulit kita rusak seketika. Padahal, masalah kesehatan masyarakat perkotaan hari ini bukan karena ketiadaan sensor radiasi di leher, melainkan pola kerja eksploitatif yang memaksa orang terkurung sepuluh jam di ruangan ber-AC tanpa pernah melihat cahaya fajar secara wajar.

Membeli kalung sensor seharga satu setengah juta rupiah demi menerima peringatan bahwa matahari di luar sedang panas terik barangkali adalah cara paling boros untuk membuktikan bahwa kita masih berstatus manusia hidup. Jika suatu hari baterai kalung tersebut habis dan Anda kebingungan menentukan apakah Anda sedang kepanasan atau tidak, barangkali yang eror sejak awal memang bukan sensor radionya, melainkan akal sehat kita sendiri.`
  },
  {
    title: "Ketika Album Pop Terbaik AMI Awards Direbut Anak Pesisir Wakatobi Bernama Raim Laode",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Margaretha Nina", "Raim Laode", "AMI Awards 2026", "Musik Indonesia", "Budaya Populer", "Industri Musik", "Musisi Indie"],
    imageUrl: "https://rri-portal-app-assets.obs.ap-southeast-4.myhuaweicloud.com/upload/berita/image/batam/thumbs/xl_1793866593379927_8e5154b8a1_berita_batam.webp",
    imageAlt: "Musisi dan komika Raim Laode memegang piala penghargaan Album Pop Terbaik pada malam anugerah AMI Awards 2026",
    sourceUrl: "https://rri.co.id/batam/hiburan/2873554/raim-laode-raih-album-pop-terbaik-di-ami-awards-2026",
    excerpt: "Kemenangan musisi asal pesisir Wakatobi Raim Laode merebut piala Album Pop Terbaik di AMI Awards 2026 menjadi tamparan telak bagi hegemoni industri metropolitan. Karya musik pop yang jujur dari pinggiran terbukti sanggup meruntuhkan dominasi produksi mahal label rekaman Jakarta.",
    content: `Bagi siapa pun yang rutin mengamati peta musik populer Indonesia selama dua dekade terakhir, panggung penghargaan bergengsi akhir tahun hampir selalu terasa seperti acara arisan keluarga besar korporasi rekaman Jakarta Selatan. Di atas karpet merah bertabur lampu sorot dan busana rancangan desainer ternama, trofi-trofi piringan emas seolah sudah dipesan terlebih dahulu untuk barisan artis metropolitan dengan modal promosi miliaran rupiah, aransemen orkestrasi megah, dan bilik rekaman mewah berstandar internasional.

Masyarakat pendengar di luar kota-kota besar seakan ditakdirkan hanya menjadi konsumen pasif di ujung hilir. Kalaupun ada bakat dari daerah pesisir atau pedalaman yang berhasil mencuri perhatian nasional, industri biasanya buru-buru memoles mereka dengan cetak biru seragam: melatih logat bicara agar terdengar metropolitan, mendandani mereka dengan gaya busana serba steril, lalu menyodorkan materi lagu patah hati pabrikan yang aman di telinga para pengiklan televisi.

Pola hegemoni metropolitan yang telah berkarat puluhan tahun tersebut mendadak dihantam ombak besar pekan ini.

![Musisi dan komika Raim Laode memegang piala penghargaan Album Pop Terbaik pada malam anugerah AMI Awards 2026](https://rri-portal-app-assets.obs.ap-southeast-4.myhuaweicloud.com/upload/berita/image/batam/thumbs/xl_1793866593379927_8e5154b8a1_berita_batam.webp)

Panggung Anugerah Musik Indonesia (AMI Awards) 2026 resmi mencatatkan sejarah baru yang amat menyegarkan. Sebagaimana dicatat dalam laporan liputan hiburan RRI dan siaran langsung malam puncak anugerah, komika sekaligus musisi mandiri asal Wakatobi, Sulawesi Tenggara, Raim Laode, secara mengejutkan berhasil memboyong pulang piala paling prestisius untuk kategori Album Pop Terbaik. Melalui album penuh perdananya yang digarap dengan napas ketulusan bertajuk *Kilas Balik*, Raim sukses mengungguli deretan nama mentereng dan komposer kondang yang disokong mesin industri raksasa.

Kemenangan ini menghadirkan tamparan keras bagi para pemburu formula pasar instan di ibu kota. Selama ini, para petinggi label rekaman terbiasa mendikte bahwa lagu pop yang layak jual wajib mengikuti resep pabrikan tertentu: denting piano elektrik yang manis, modulasi vokal meliuk-liuk di nada tinggi, serta lirik puitis yang aman dari risiko sosial. Raim Laode justru menabrak seluruh pakem usang tersebut dari bibir pantai timur Nusantara. 

Bersenjatakan petikan gitar akustik sederhana, tutur kata yang membumi tanpa kepalsuan gaya, serta dialek khas pesisir yang dipertahankan dengan penuh rasa bangga, Raim membuktikan bahwa daya pikat musik pop sesungguhnya berakar pada kejujuran narasi. Kisah-kisah tentang perjuangan anak rantau, aroma laut kampung halaman, kerinduan pada orang tua, serta kehangatan cinta yang tidak berjarak sanggup menembus sanubari pendengar dari Sabang sampai Merauke tanpa perlu bantuan manipulasi orkestrasi yang rumit.

Keberhasilan Raim Laode terasa sangat kontras jika disandingkan dengan kelesuan imajinasi para pemodal musik saat ini. Di tengah [kebiasaan industri pop yang terus mendaur ulang lagu cinta lawas karena takut rugi](/ketika-lagu-cinta-lawas-yovie-widianto-terus-didaur-ulang-karena) demi mencari jaminan angka pemutaran instan, keberanian seorang musisi independen merilis karya orisinal penuh risiko adalah oase yang sangat mahal. Momentum ini juga mengulang kejutan artistik ketika [panggung penghargaan musisi cilik yang sempat menyentak panggung serupa](/ketika-etenia-croft-rebut-piala-ami-awards-saat-lagu-anak-digerus) membuktikan bahwa pendengar tanah air sesungguhnya sudah muak dengan homogenisasi selera yang disodorkan algoritma.

Bagi jutaan pemuda kreatif di pulau-pulau terluar Indonesia yang selama ini kerap dipandang sebelah mata oleh industri arus utama, langkah Raim di atas panggung AMI Awards adalah simbol perlawanan kultural yang nyata. Selama bertahun-tahun, musisi daerah harus membiayai rekaman dari kantong pribadi yang pas-pasan, menyewa studio murahan seadanya, dan memutar otak agar karyanya didengar tanpa pernah disorot kamera media nasional. 

Kemenangan album *Kilas Balik* menegaskan fakta tak terbantahkan bahwa sentralisme musik Indonesia di Jakarta sesungguhnya telah usang. Telinga publik tidak lagi bisa dibodohi oleh kemasan promosi mahal bernilai miliaran jika jiwanya hampa dari keaslian hidup warga biasa.

Melihat seorang anak pesisir Wakatobi tersenyum bangga sembari mengangkat piala Album Pop Terbaik di panggung tertinggi musik nasional pada akhirnya mengirimkan pesan yang amat jernih bagi para pemodal label di ibu kota: lagu pop terbaik tidak pernah diracik di ruang rapat gedung pencakar langit berpendingin ruangan, melainkan lahir dari ombak kejujuran yang mengalir bebas dari tanah pinggiran.`
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
      markAsSeen(art.sourceUrl);
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  // Tandai juga link google news bila ada
  const gnewsRaim = "https://news.google.com/rss/articles/CBMilwFBVV95cUxQaFdudEJzMS1UbDdhRmx0Mm9udGR2cjgwS0dkZ0F3N2N3d3JoZUV2TG9EUTVaRUxfOVFkWXk3bk5rV0RubHFwRUF0dnlNRHE5cmY1ZmhKOXFac3c5dk00SEFtMmd4ekQ1Z083OEcycHRrLUJYUnh4ejVZNDJxNnpnVDMyRWtSbVZpd2I2X19qTE1yLXZWWEtF?oc=5";
  markAsSeen(gnewsRaim);

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261108-1500.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Run Error:", err);
    process.exit(1);
  });
}
