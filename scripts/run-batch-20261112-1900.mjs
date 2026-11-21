import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Drone Kamera Ring Nyungsep di Siaran TV Bukti AI Autopilot di Ruang Tamu Masih Jadi Lelucon",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Ring", "Amazon", "Drone", "Smart Home", "Kamera Keamanan", "Privasi Digital", "Kecerdasan Buatan"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/DSC01040.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Perangkat kamera pengawas terbang Ring Drone Cam bersiap meluncur dari dok pengisi daya di atas meja",
    sourceUrl: "https://www.theverge.com/tech/1031817/ring-drone-cam-manual-flight-controls",
    excerpt: "Kamera drone pengawas dalam rumah buatan Amazon Ring menabrak tembok saat siaran langsung di televisi nasional. Bukannya memperbaiki sensor, pihak pabrikan malah mencabut kendali manual dan memaksa konsumen pasrah pada AI autopilot.",
    content: `Bayangkan skenario absurd berikut ini di ruang tamu rumah Anda sendiri: Anda sedang asyik rebahan di sofa selepas pulang kerja, menikmati secangkir kopi panas sambil menonton tayangan sepak bola. Tiba-tiba dari sudut rak buku, terdengar dengungan melengking mirip suara gerombolan lebah raksasa yang marah. Sebuah kotak plastik seharga jutaan rupiah dengan empat baling-baling mini mendadak melesat ke udara, berputar linglung beberapa detik, lalu tanpa permisi menukik tajam menghantam pigura foto keluarga sebelum akhirnya terkapar tak berdaya di atas karpet. Anda terperangah bukan karena ada penyusup bersenjata yang menyatroni rumah, melainkan karena robot satpam pintar yang Anda beli dengan dalih keamanan canggih baru saja melancarkan aksi bunuh diri di depan mata kepala Anda sendiri.

Lelucon konyol semacam itu kini bukan lagi sekadar rekaan cerita komedi warkop, melainkan kenyataan pahit yang baru saja tersaji tanpa sensor di hadapan jutaan pemirsa televisi internasional. Sebagaimana dicatat oleh jurnalis Jess Weatherbed dalam laporannya di The Verge pekan ini, anak perusahaan Amazon yang membidangi ekosistem keamanan rumah pintar, Ring, baru saja mengalami insiden memalukan saat memamerkan purwarupa perangkat Drone Cam terbaru mereka dalam siaran langsung CBS Mornings. Sang pendiri Ring, Jamie Siminoff, yang hadir di studio dengan penuh rasa percaya diri mulanya mengizinkan reporter Jo Ling Kent untuk mengemudikan drone tersebut secara manual melalui aplikasi kontrol di smartphone.

Namun apa yang terjadi berikutnya justru menjadi bencana hubungan masyarakat yang mengocok perut sekaligus bikin elus dada. Drone mungil yang dipromosikan mampu berpatroli mandiri menjaga hunian tersebut malah tercatat mengalami kecelakaan sebanyak dua kali berturut-turut. Pada insiden pertama, sistem pendeteksi rintangan otomatisnya mendadak malfungsi dan pihak Ring bahkan menolak merilis rekaman video sesaat sebelum tabrakan. Tak berselang lama, kamera televisi kembali menangkap momen kedua yang lebih spektakuler: drone kehilangan sinyal konektivitas internet Wi-Fi di dalam ruangan, berhenti merespons perintah kemudi di layar ponsel reporter, dan langsung meluncur menghantam dinding ruangan tanpa ampun. Sang pendiri pun hanya bisa berdalih getir di depan kamera bahwa perangkat semestinya mendarat darurat saat putus sinyal, meski kenyataan di lapangan berkata sebaliknya.

![Perangkat kamera pengawas terbang Ring Drone Cam bersiap meluncur dari dok pengisi daya di atas meja](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/DSC01040.jpg?quality=90&strip=all&crop=0,0,100,100)

Menghadapi rasa malu di panggung nasional, langkah pembenahan yang diambil oleh para petinggi korporasi Silicon Valley ini sungguh di luar nalar sehat orang waras. Bukannya memperbaiki keandalan sensor fisik atau merancang mekanisme pengaman luring yang tahan banting, Ring justru mengambil jalan pintas dengan mengonfirmasi bahwa seluruh fitur kendali manual resmi dicabut saat produk ini dilepas ke pasaran pada Januari mendatang. Juru bicara Ring, Sam McGee, mengeklaim lewat pernyataan tertulis bahwa penerbangan otonom penuh mengandalkan sistem AI Pilot adalah opsi terbaik demi pengalaman konsumen. Dengan kata lain, logika bisnis mereka sangat arogan: jika pengguna menabrakkan drone saat menyetir sendiri, itu memalukan; maka cabut saja hak setir pengguna dan biarkan algoritma kecerdasan buatan mereka yang mengambil alih kemudi sepenuhnya, peduli setan apakah sensor mereka sanggup membedakan antara gorden jendela dan dinding beton.

Sikap mematikan kendali pengguna ini adalah puncak ironi dari tren perangkat rumah pintar modern yang kian gemar mendikte pemiliknya. Publik seolah dipaksa membayar mahal hanya demi memasukkan agen mata-mata terbang ke ruang privat keluarga yang pergerakannya bahkan tidak bisa dibatalkan secara manual saat sistem mendadak eror. Arogansi ini mengulang pola usang korporasi teknologi yang sempat dikritik tajam ketika [ambisi ganjil menerbangkan kamera di dalam rumah](/amazon-terbangkan-drone-ring-di-ruang-tamu-menandai-tamatnya) pertama kali digaungkan beberapa tahun silam, di mana kenyamanan dan privasi hunian terus-menerus digerus demi memuaskan fetish otomatisasi para pemodal ventura. Alih-alih menghadirkan rasa aman yang menenangkan, konsumen justru disuguhi kecemasan baru memikirkan bilah baling-baling yang berputar di dekat kepala balita atau hewan peliharaan mereka.

Bagi warga biasa yang sekadar ingin menjaga rumah tetap aman dari maling jemuran, solusi pengawasan semacam ini jelas sebuah pemborosan anggaran yang kehilangan pijakan akal budi. Keberanian komunitas dalam mengembangkan [ekosistem komputasi lokal tanpa sandera cloud](/home-assistant-rilis-aux-2-bukti-rumah-pintar-nggak-butuh) telah berulang kali membuktikan bahwa sistem keamanan terbaik adalah sistem yang patuh pada perintah langsung pemiliknya, bekerja tanpa ketergantungan koneksi server luar negeri, dan tidak berlagak sok pintar memakai label kecerdasan buatan. Menggantungkan keselamatan ruang tamu pada drone otomatis yang gampang linglung saat sinyal modem tersendat sama konyolnya dengan menyewa penjaga malam yang buta arah dan gemar menabrak pintu kaca.

Jika sebuah gadget pengawas ruangan membutuhkan izin server komputasi awan dan algoritma pilot otomatis hanya demi menghindari tiang lampu gantung tanpa mencelakakan pot bunga kesayangan ibu, ada baiknya kita kembali merenungkan batas kewarasan teknologi. Terkadang, kamera kabel statis murahan yang terpasang anteng di sudut plafon jauh lebih terhormat dan berguna ketimbang drone terbang ratusan dolar yang saat diterpa angin kipas angin langsung panik dan menabrak tembok kamarmu sendiri.`
  },
  {
    title: "Exterminauts Coba Tiru Helldivers 2 Tapi Sudah Pasang Kuda-kuda Tiket Musiman Berbayar",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Exterminauts", "Behaviour Interactive", "Helldivers 2", "PC Gaming", "Co-op Shooter", "Industri Game"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/hcfJYVuA8JFu3U4R9UyZKQ-1920-80.jpg",
    imageAlt: "Karakter pembasmi hama luar angkasa menembakkan senjata energi ke arah tanaman monster mutan dalam game Exterminauts",
    sourceUrl: "https://www.pcgamer.com/games/third-person-shooter/exterminauts-looks-like-another-helldivers-2-but-its-really-the-deep-rock-galactic-sickos-who-should-take-notice/",
    excerpt: "Behaviour Interactive memamerkan Exterminauts sebagai shooter kooperatif pembasmi hama luar angkasa. Formula permainannya meniru gaya Helldivers 2, namun aroma monetisasi tiket musiman dan paket sponsor berbayar sudah ditebar sejak versi uji coba.",
    content: `Ada penyakit menahun yang tampaknya belum juga sembuh dari ruang rapat para eksekutif industri game berskala besar: penyakit latah dan gemar menunggangi tren kilat. Begitu ada sebuah formula permainan orisinal yang meledak di pasaran dan mendadak dicintai jutaan gamer di seluruh dunia, para konglomerat penerbit biasanya langsung kebakaran jenggot. Alih-alih duduk manis mempelajari mengapa karya tersebut bisa menyentuh hati para pemain, respon refleks mereka hampir selalu sama: memerintahkan ratusan staf pengembang di bawah naungannya untuk buru-buru membikin jiplakan serupa dengan harapan bisa ikut mencuil remah-remah kue keuntungan finansial sebelum ombak popularitasnya surut.

Gelagat latah semacam itulah yang langsung tercium menyengat saat studio Behaviour Interactive—pencipta game horor asimetris Dead by Daylight—memamerkan proyek teranyar mereka bertajuk Exterminauts. Sebagaimana dicatat oleh jurnalis Morgan Park dalam laporannya di PC Gamer pekan ini, game tembak-menembak kooperatif orang ketiga ini secara kasat mata memancarkan aura yang teramat mirip dengan fenomena Helldivers 2. Mulai dari seragam tempur prajurit kerah biru yang serba anonim, lanskap planet antah-berantah yang keras, hingga narasi satir di mana para pemain ditugaskan sebagai buruh pembasmi hama demi memuluskan kepentingan ekstraksi sumber daya tambang milik korporasi serakah.

Kendati tim pengembang berdalih bahwa proyek ini sudah digarap bertahun-tahun sebelum gelombang demokrasi luar angkasa Arrowhead meletup, impresi awal yang dirasakan para penguji game versi alfa justru memperlihatkan jurang kualitas yang cukup mengkhawatirkan. Alih-alih menyajikan ketegangan taktis yang memompa adrenalin di mana sebutir peluru nyasar bisa membikin kawan satu tim tewas mengenaskan, Exterminauts justru terasa terlalu lembek dan hambar. Pengendalian senjata dengan mouse dibuat terlalu gampang, ancaman tembakan teman sendiri hampir ditiadakan, dan makhluk asing berbentuk monster tanaman karnivora yang dihadapi kerap kali tampak kehilangan taring mematikan saat diajak beradu tembak di medan ngarai berbatu.

![Karakter pembasmi hama luar angkasa menembakkan senjata energi ke arah tanaman monster mutan dalam game Exterminauts](https://cdn.mos.cms.futurecdn.net/hcfJYVuA8JFu3U4R9UyZKQ-1920-80.jpg)

Namun hal yang paling membikin kening para gamer berkerut bukanlah soal tingkat kesulitan permainan yang masih mentah, melainkan keberanian pihak studio dalam menggelar cetak biru monetisasi sejak hari pertama. Di saat ritme pertempuran dan mekanika kerja sama timnya masih compang-camping, Behaviour Interactive sudah dengan bangga mengumumkan rencana musim pembaruan berdurasi dua belas pekan lengkap dengan etalase paket sponsor berbayar. Karakter pemain memang bisa membuka modifikasi senjata lewat progres bermain murni, tetapi perusahaan buru-buru menegaskan bahwa siapa saja yang tidak sabaran dipersilakan menggelontorkan uang sungguhan untuk memborong senjata dan perlengkapan sakti secara instan.

Nafsu korporasi untuk memeras dompet pemain sebelum membuktikan kualitas gameplay ini adalah cermin keangkuhan yang sangat berbahaya. Sikap ini berbanding terbalik dengan dinamika komunitas yang sempat meledak saat [polemik modifikasi dan anticheat dalam Helldivers 2](/arrowhead-babat-mod-kosmetik-helldivers-2-berujung-dihajar-ulasan) membuktikan bahwa gamer PC bukanlah kerumunan domba penurut yang bisa disuapi keputusan sepihak tanpa perlawanan. Ketika sebuah studio game lebih bersemangat merancang jadwal peluncuran tiket musiman (*battle pass*) dan transaksi mikro daripada memoles bobot tembakan senjata serta variasi kecerdasan buatan musuh, proyek tersebut sesungguhnya sedang menggali liang lahadnya sendiri di tengah ketatnya persaingan toko digital Steam.

Di tongkrongan warkop tempat anak-anak muda berkumpul sehabis bekerja, kelelahan mental terhadap serbuan game bertema live-service semacam ini sudah mencapai titik nadir. Para pemain sejatinya rindu pada kesederhanaan bermain bersama kawan tongkrongan tanpa harus dibebani target tugas harian atau ancaman ketinggalan kosmetik musiman (*FOMO*). Kerinduan inilah yang membikin gamer kerap berpaling ke judul-judul independen segar untuk melampiaskan [kejenuhan gamer terhadap formula permainan yang repetitif](/spellogger-ledakkan-hutan-pakai-sihir-bukti-gamer-muak-disuruh) ketimbang harus menjadi sukarelawan kerja rodi di dalam server permainan yang serakah.

Membuat game kooperatif yang sanggup bertahan lama di ingatan para pemain tidak pernah semudah menempelkan kostum astronot dan menamai monster dengan istilah biologi fiktif. Jika fondasi gameplay terasa hambar dan minim risiko kegagalan yang menantang, ribuan item kosmetik dan kalender musim dua belas pekan tidak akan mampu menahan pemain dari godaan tombol hapus instalasi. Daripada sibuk memikirkan skema pembayaran koin virtual untuk paket sponsor masa depan, para petinggi studio mestinya belajar satu aturan dasar di industri hiburan PC: bikin dulu gamenya seru dimainkan sampai larut malam, baru setelah itu bicara soal jualan tiket musiman tanpa bikin pemain merasa dipalak di siang bolong.`
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
  console.log(`🎉 Batch 19:00 Selesai! Berhasil menerbitkan ${results.length} artikel.`);
  console.log("=================================================================\n");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261112-1900.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
