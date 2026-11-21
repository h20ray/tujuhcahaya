import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "FAA Bangga Pasang AI di Langit Amerika tapi Lupa Ajak Serikat Petugas Menara",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["FAA", "Kecerdasan Buatan", "Penerbangan", "Teknologi", "Tenaga Kerja", "Elang Elano"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2026/11/Pilots-during-DFW-departure-1152x648.jpg",
    imageAlt: "Dua orang pilot di dalam kokpit pesawat komersial bersiap lepas landas di landasan pacu bandara",
    sourceUrl: "https://arstechnica.com/ai/2026/11/faa-expands-ai-advice-to-manage-air-traffic-congestion-across-entire-us-airspace/",
    excerpt: "Regulator penerbangan FAA memperluas sistem AI SMART ke seluruh langit Amerika Serikat demi memangkas delay dan menghemat avtur. Namun di balik tepuk tangan maskapai, serikat petugas menara pengawas justru ditinggal tanpa pernah diajak bicara.",
    content: `Setiap kali kita duduk termenung lesu di ruang tunggu bandara sembari mendengar pengumuman penundaan jadwal terbang berjam-jam, alasan klise dari petugas meja depan selalu terdengar sama: cuaca buruk atau kepadatan lalu lintas udara. Para calon penumpang hanya bisa mengelus dada sembari menyeruput kopi saset kemahalan dan menatap nanar papan jadwal yang berubah warna merah. Kita dipaksa maklum bahwa langit di atas sana adalah ruang sempit yang ruwet, di mana ribuan burung besi berbadan ratusan ton saling berebut jalur meluncur ke landasan pacu. Menghadapi kekacauan musiman yang menjengkelkan ini, otoritas penerbangan di negeri Paman Sam rupanya punya obat penawar instan yang sedang digandrungi para petinggi korporat, apalagi kalau bukan memasang kecerdasan buatan.

Namun langkah pamer teknologi anyar ini segera memicu kegaduhan baru di balik layar. Sebagaimana dicatat dalam laporan investigasi Ars Technica dan pengumuman resmi regulator pekan ini, Federal Aviation Administration atau FAA secara resmi memperluas penerapan sistem manajemen ruang udara berbasis komputasi cerdas bernama SMART ke seluruh 22 pusat kendali rute udara di Amerika Serikat. Akronim mentereng dari Strategic Management of Airspace, Routes and Trajectories ini bertugas mengolah sekitar 200 hingga 250 aliran data seketika, mencakup prakiraan angin badai, volume penerbangan harian, kapasitas landasan pacu aktif, hingga catatan jam kerja personel. Mesin awan ini diklaim sanggup meramal titik kemacetan rute beberapa jam sebelum kekacauan terjadi, lalu otomatis menyodorkan rekomendasi rute belokan alternatif kepada pengawas lalu lintas udara.

![Dua orang pilot di dalam kokpit pesawat komersial bersiap lepas landas di landasan pacu bandara](https://cdn.arstechnica.net/wp-content/uploads/2026/11/Pilots-during-DFW-departure-1152x648.jpg)

Mendengar kabar manis tersebut, para bos maskapai penerbangan raksasa seperti United Airlines, Delta Air Lines, hingga American Airlines tentu saja langsung menyambutnya dengan tepuk tangan meriah. Bagi manajemen maskapai, efisiensi rute adalah urusan hidup dan mati neraca keuangan; setiap menit pesawat berputar-putar menghabiskan bahan bakar avtur di atas awan berarti jutaan dolar menguap sia-sia ke udara. Hasil uji coba terbatas di kawasan Washington DC dan Florida pada September lalu memang mencatat penghematan waktu terbang yang lumayan. Di atas kertas proposal bisnis, sistem prediktif ini terdengar seperti mukjizat teknologi komputasi yang sempurna tanpa cacat cela.

Namun euforia korporasi tersebut langsung tersandung batu karang begitu suara pekerja di lapangan mulai angkat bicara. Serikat pekerja pengatur lalu lintas udara nasional atau National Air Traffic Controllers Association yang menaungi lebih dari 15.000 petugas menara pengawas, melontarkan kritik keras dan menyatakan bahwa mereka sama sekali tidak pernah dilibatkan dalam perancangan, pengujian, maupun penerapan sistem algoritma tersebut di stasiun kerja mereka. Sikap sepihak para birokrat dan bos maskapai ini adalah cermin arogansi khas manajemen modern: mereka begitu bernafsu memaksakan otomasi canggih ke ruang kerja berisiko tinggi tanpa permisi kepada manusia yang setiap detik memelototi radar demi menjaga nyawa ratusan ribu penumpang.

Mengatur pergerakan pesawat di langit bukanlah urusan mengetik perintah baris kode di ruangan berpendingin udara yang bisa diulang seenaknya saat terjadi eror sistem. Petugas pengatur lalu lintas udara bekerja di bawah tekanan stres yang luar biasa tinggi, di mana satu kedipan mata atau salah ucap satu digit kode penerbangan bisa berujung pada petaka tabrakan maut di udara. Membanjiri ruang kendali mereka dengan rentetan saran otomatis dari algoritma awan tanpa pelatihan mendalam justru berisiko menciptakan kebingungan baru saat situasi darurat badai menghadang. Kecenderungan manajemen yang gemar mengagungkan otomasi sembari meminggirkan buruh teknis ini sejalan dengan kebiasaan umum industri komputasi saat [peneliti bangga koar-koar soal kecanggihan AI padahal sekadar menjiplak riset manusia](/peneliti-google-koar-koar-ai-temukan-situs-maya-padahal-nyontek), di mana etalase promosi publik sengaja dipoles berkilau demi menutupi realitas rapuh di lapangan.

Di tongkrongan warkop, kita sering melihat analogi serupa ketika seorang manajer kafe sok pintar memasang mesin kasir digital canggih tetapi tidak pernah bertanya kepada barista yang setiap hari pontang-panting meracik pesanan di jam sibuk. Mesin baru itu mungkin terlihat keren di mata pemegang saham, tetapi jika pelayan di bar kasir kebingungan mengoperasikannya saat antrean membeludak, pelanggan di depan pintu tetap saja bakal mengamuk karena lapar. Begitu pula halnya dengan urusan langit penerbangan; pamer algoritma cerdas tidak akan otomatis menyembuhkan penyakit delay kronis jika operator manusia yang memikul tanggung jawab keselamatan diabaikan hak suaranya.

Pada akhirnya, keselamatan penerbangan tidak pernah bisa disandarkan murni pada keajaiban baris kode komputasi awan. Selama regulator dan maskapai masih memandang petugas menara pengawas sebagai sekadar pelengkap penderita yang wajib mematuhi bisikan mesin, langit kita sesungguhnya tidak bertambah aman, melainkan cuma bertambah bising oleh ilusi efisiensi korporat. Sebab ketika pesawat berguncang hebat di tengah gulungan awan kumulonimbus yang gelap gulita, tak ada pilot berakal sehat yang bakal berserah diri pada rekomendasi chatbot tanpa kehadiran manusia yang teguh mengawasi radar di balik kaca menara.`
  },
  {
    title: "Trailer Gameplay Anyar Fable Terlalu Serius Sampai Lupa Jiwa Konyol Negeri Albion",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Fable", "Playground Games", "Xbox", "RPG", "Industri Game", "PC Gaming", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/vQV33tgAikCCCHGpnBucEo-1920-80.jpg",
    imageAlt: "Karakter pahlawan bertarung menggunakan pedang dan mantra sihir dalam cuplikan trailer gameplay game Fable",
    sourceUrl: "https://www.pcgamer.com/games/rpg/new-4-minute-fable-gameplay-trailer-shows-a-game-that-doesnt-look-much-like-fable/",
    excerpt: "Playground Games merilis trailer gameplay empat menit untuk reboot Fable dengan visual fotorealistis memukau. Namun di mata gamer veteran, pertarungan serba serius ini terasa asing dan kehilangan humor dongeng satir khas Albion.",
    content: `Menunggu rilisnya game impian selama belasan tahun sering kali berakhir seperti kencan buta yang canggung. Di kepala kita tersimpan kenangan manis tentang masa lalu yang hangat, jenaka, dan penuh tawa absurd. Tetapi ketika sang pujaan hati muncul di depan mata dengan dandanan yang terlalu necis, kaku, dan bertingkah sok serius, kita langsung sadar ada sesuatu yang hilang tak berbekas. Kekecewaan serupa kini mulai menjalari obrolan komunitas pencinta game peran klasik menyusul kemunculan cuplikan video terbaru dari salah satu waralaba paling legendaris milik Microsoft.

Menurut laporan PC Gamer dan pengamatan komunitas pemain pekan ini, pengembang Playground Games bersama Xbox resmi merilis cuplikan trailer gameplay berdurasi empat menit untuk reboot game legendaris Fable. Video unjuk kebolehan tersebut memamerkan mekanik pertarungan jarak dekat dengan tebasan pedang, bidikan panah lincah, hingga kombinasi mantra sihir yang dibungkus visual fotorealistis memukau. Kualitas tekstur daun di hutan lebat, pantulan cahaya pada zirah besi prajurit, dan animasi gerak karakter terlihat setara dengan standar grafis kelas atas masa kini. Namun di balik kemegahan visual tersebut, mayoritas pemain veteran justru merasa terasing; sajian aksi empat menit itu terlihat lebih mirip kloningan game aksi fantasi modern seperti The Witcher atau Hogwarts Legacy daripada kelanjutan dunia Fable yang mereka kenal.

![Karakter pahlawan bertarung menggunakan pedang dan mantra sihir dalam cuplikan trailer gameplay game Fable](https://cdn.mos.cms.futurecdn.net/vQV33tgAikCCCHGpnBucEo-1920-80.jpg)

Bagi siapa pun yang pernah menghabiskan masa remaja di era konsol lawas, Fable bukan sekadar game tentang mengayunkan senjata tajam menebas gerombolan bandit atau monster raksasa. Jiwa utama dari mahakarya ciptaan Peter Molyneux di studio Lionhead tempo dulu adalah dongeng satir khas Inggris yang luar biasa konyol dan bersahaja. Albion adalah negeri ajaib di mana pahlawan perkasa bisa dijuluki si Penendang Ayam, kentut di depan wajah bangsawan sombong, menikah dengan tiga warga desa sekaligus, dan menyaksikan tanduk iblis tumbuh pelan-pelan di dahi hanya karena punya hobi usil mencuri pai apel milik tetangga. Memoles Albion menjadi arena pertarungan pedang yang serba kelam dan fotorealistis adalah cermin bagaimana korporasi besar kerap salah mendiagnosis daya pikat sebuah karya klasik.

Penyakit menyeragamkan identitas demi memuaskan algoritma pasar global ini makin menjangkiti studio-studio raksasa di bawah naungan penerbit besar. Alih-alih merawat keunikan narasi yang eksentrik, pengembang dipaksa mengadopsi formula aman: visual serba realistis, antarmuka pertempuran yang steril, dan nada cerita yang sok dewasa agar disukai penonton festival game arus utama. Langkah promosi Playground Games ini mengingatkan kita pada strategi serupa saat [Xbox pamer naskah Wolfenstein 3 demi meredam kejenuhan komunitas](/xbox-pamer-naskah-wolfenstein-3-saat-gamer-pc-sudah-kenyang-janji), di mana korporasi getol melempar cuplikan demi menjaga nilai saham tanpa benar-benar memahami dahaga batin para pemain setia di akar rumput. Komunitas gamer tidak butuh kloningan RPG generik kesekian kalinya; mereka merindukan dunia fiksi yang berani menertawakan dirinya sendiri tanpa rasa malu.

Di tongkrongan gamer warkop, kita sudah kenyang melihat judul-judul legendaris yang hancur lebur gara-gara dipaksa berpenampilan keren menurut selera konsultan pemasaran korporat. Game yang kehilangan jati dirinya biasanya berakhir menjadi pajangan etalase digital yang cepat dilupakan orang setelah dua pekan pertama peluncuran. Gamer modern sudah terlalu lelah disuguhi pertarungan pedang standar dengan pohon keterampilan rumit yang membosankan. Mereka rela menunggu bertahun-tahun demi merasakan kembali kehangatan desa Oakvale, mendengar celoteh warga berkebun yang sarkastis, dan merasakan sensasi menjadi pahlawan yang tidak sempurna.

Visual fotorealistis yang sanggup merender setiap helai kumis karakter mungkin terlihat menawan di monitor pameran promosi. Tetapi jika di negeri Albion baru ini pemain sudah tidak bisa lagi menendang ayam melayang melintasi pagar desa sambil ditertawakan penduduk lokal berkostum badut, maka game tersebut sejatinya cuma meminjam nama besar Fable untuk menjual tontonan aksi pedang yang membosankan.`
  }
];

async function runBatch() {
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
      markAsSeen(art.sourceUrl);
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
}

runBatch().catch(err => {
  console.error("Batch Execution Error:", err);
  process.exit(1);
});
