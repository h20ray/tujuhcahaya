import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Mengenal LIMS: Alat Sadap yang Bikin Presiden Prabowo Ikut Kena Kuping-kupingan",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Keamanan Siber", "Privasi Digital", "Penyadapan", "LIMS", "Prabowo"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2026/11/04/Bareskrim-Tetapkan-Tiga-Tersangka-Kasus-Dugaan-Penyadapan-Ilegal-031126-gp-4.jpg",
    imageAlt: "Penyidik Bareskrim Polri saat merilis penetapan tersangka kasus dugaan penyadapan ilegal",
    sourceUrl: "https://www.antaranews.com/berita/5832595/mengenal-lims-alat-yang-digunakan-untuk-menyadap-presiden-prabowo",
    excerpt: "Selama ini rakyat jelata yang rajin diingatkan hati-hati menjaga data pribadi. Tapi begitu dengar kabar Presiden Prabowo disadap pakai LIMS, kita baru sadar: di depan alat sadap kelas dewa, status jenderal bintang empat pun tetap bisa tembus.",
    content: `Kalau ada pelajaran paling berharga dari geger kasus penyadapan yang baru saja dibongkar Bareskrim Polri, itu adalah satu hal: ternyata di republik ini, status presiden pun nggak bikin HP kamu kebal dari kuping jahil.

Kabar mengejutkan yang dirilis lewat [laporan Bareskrim di Antara](https://www.antaranews.com/berita/5832595/mengenal-lims-alat-yang-digunakan-untuk-menyadap-presiden-prabowo) menyebut bahwa Presiden Prabowo Subianto diduga ikut disadap menggunakan perangkat bernama LIMS (*Lawful Interception Management System*). Tiga orang tersangka sudah diciduk, termasuk operator dan mantan perwira. Publik pun langsung garuk-garuk kepala: barang apa sebenarnya si LIMS ini sampai bisa bikin orang nomor satu di Indonesia ikut kena rekam?

Di dunia telekomunikasi dan jaringan, LIMS sebenarnya bukan malware kaleng-kaleng yang dikirim via undangan pernikahan palsu berformat APK di WhatsApp. LIMS adalah sistem infrastruktur resmi tingkat operator telekomunikasi. Perangkat keras dan lunak ini dipasang langsung di pusat data penyedia seluler (*core network*) untuk memfasilitasi perintah penyadapan sah dari penegak hukum—seperti KPK, BIN, atau Polri.

Masalahnya, begitu alat sekuat ini dipegang oleh oknum tanpa pengawasan sistemik (*zero oversight*), ia berubah jadi senjata mata-mata paling mengerikan. LIMS bisa mencegat panggilan suara, membedah percakapan pesan, hingga melacak koordinat BTS secara *real-time* tanpa korban merasakan tanda-tanda keanehan di ponselnya. Tidak ada notifikasi mencurigakan, tidak ada baterai panas mendadak. Semua data tersedot halus dari level infrastruktur pusat.

Ironisnya, selama bertahun-tahun para pejabat kita paling hobi menasihati rakyat kecil agar "rajin ganti password" dan "jangan klik sembarangan" tiap kali ada kebocoran miliaran data kependudukan. Sekarang, saat Presiden mereka sendiri kena imbasnya, baru terlihat jelas betapa rentannya tata kelola keamanan digital kita ketika sistem pengawasan internal diserahkan pada asas saling percaya.

Kalau presiden dengan protokol kawalan Paspampres dan staf sandi negara saja bisa disadap semudah itu, bayangkan betapa telanjangnya data obrolan kita yang cuma rakyat biasa langganan paket kuota malam.`
  },
  {
    title: "The Elder Scrolls 6 Masih Dua Tahun Lagi: Ketika Fans Bethesda Mulai Halusinasi",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "The Elder Scrolls 6", "Bethesda", "RPG", "Skyrim", "PC Gaming"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/2tZ8acjKKVc9o26nuhBAEi-1920-80.jpg",
    imageAlt: "Pemandangan pegunungan Tamriel dalam cuplikan pengumuman The Elder Scrolls 6",
    sourceUrl: "https://www.pcgamer.com/games/the-elder-scrolls/the-elder-scrolls-6-is-reportedly-more-than-two-years-away-and-some-fans-are-not-coping-well/",
    excerpt: "Todd Howard pertama kali mengumumkan The Elder Scrolls 6 pada 2018. Kini menjelang akhir 2026, kabar terbaru menyebut gamenya masih butuh minimal dua tahun lagi. Fans yang lelah menunggu mulai mencocoklogi bayangan awan di teaser.",
    content: `Menjadi penggemar game buatan Bethesda itu butuh ketabahan setingkat pertapa di puncak Gunung Hrothgar. Pertama, kamu harus tahan banting dengan bug khas mesin fisika mereka yang doyan melempar gerobak ke langit. Kedua, kamu harus punya umur panjang luar biasa hanya untuk menunggu satu sekuel game dirilis.

Kabar paling anyar dari [laporan industri di PC Gamer](https://www.pcgamer.com/games/the-elder-scrolls/the-elder-scrolls-6-is-reportedly-more-than-two-years-away-and-some-fans-are-not-coping-well/) menegaskan kenyataan pahit yang sudah lama ditakuti komunitas: *The Elder Scrolls 6* diperkirakan masih berjarak lebih dari dua tahun ke depan. Artinya, kalau kita beruntung dan tidak ada drama penundaan internal, game ini paling cepat mendarat di tangan pemain pada akhir 2028 atau awal 2029.

Sebagai pengingat bagi memori kolektif kita: *Skyrim* dirilis pada November 2011. Saat itu anak-anak SD yang pertama kali memanah lutut bandit di Whiterun sekarang mungkin sudah cicil KPR atau pusing mengurus akta kelahiran anak kedua. Sementara Bethesda? Selama 15 tahun terakhir mereka lebih sibuk merilis ulang *Skyrim* di setiap perangkat berlayar yang ada di muka bumi—dari PlayStation 4, Switch, sampai lelucon kulkas pintar—sebelum sempat-sempatnya bikin petualangan baru di Tamriel.

Reaksi fans di forum Reddit pun sudah masuk ke fase psikologis *denial* akut bercampur halusinasi. Setiap kali akun media sosial Bethesda mengunggah tangkapan layar langit gurun atau logo perayaan ulang tahun, para penggemar langsung membedah bayangan batu untuk mencari koordinat rilis tersembunyi. Beberapa bahkan yakin trailer berdurasi 30 detik dari ajang E3 2018 menyimpan pesan morse rahasia.

Todd Howard memang piawai melempar janji manis berbalut jargon "it just works". Tapi melihat proyek *Starfield* kemarin yang rasanya hampa seperti mi instan tanpa bumbu asin, wajar kalau ekspektasi komunitas mulai bercampur rasa cemas. Kita cuma berharap, saat game ini akhirnya rilis nanti, kita tidak perlu memainkannya lewat monitor ruang panti jompo.`
  },
  {
    title: "Bob Dylan Pakai Hoodie Ketemu Paus: Puncak Tertinggi Kakek-Kakek Gak Mau Diatur",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Bob Dylan", "Kultur Pop", "Vatikan", "Folk Rock", "Gaya Hidup"],
    imageUrl: "https://media.pitchfork.com/photos/6aeb7f4436dc15f46c7d1de9/master/pass/GettyImages-2303509652%20(1).jpg",
    imageAlt: "Bob Dylan mengenakan kupluk hoodie saat bersalaman dengan Paus di Vatikan",
    sourceUrl: "https://pitchfork.com/story/bob-dylan-wearing-hoodie-meets-pope/",
    excerpt: "Di saat semua tamu negara repot menyewa tuksedo sutra dan menata dasi kupu-kupu untuk sowan ke Vatikan, Bob Dylan datang menemui Paus dengan hoodie hitam santai. Sikap cuek bebek legendaris yang membuktikan jiwa rock 'n' roll tak bisa dibeli protokoler.",
    content: `Ada dua jenis manusia saat diundang menghadiri audiensi resmi dengan pemimpin tertinggi Gereja Katolik di Vatikan: kelompok pertama yang panik menyetrika setelan jas wol terbaik mereka, dan kelompok kedua... yang namanya Bob Dylan.

Foto-foto yang diunggah [dokumentasi liputan Pitchfork](https://pitchfork.com/story/bob-dylan-wearing-hoodie-meets-pope/) seketika bikin gempar jagat musik dan media sosial pekan ini. Sang maestro folk legendaris peraih Nobel Sastra berusia 85 tahun itu tampak santai menyalami Paus Fransiskus dengan mengenakan jaket hoodie hitam bertudung, dipadu celana kasual dan sepasang sepatu bot tanpa kilap semir. 

Sementara para staf protokoler kepausan berdiri tegak dengan busana serba rapi dan kaku, Dylan melangkah seperti kakek-kakek yang baru saja mampir beli rokok lintingan di warung kelontong seberang gang. Tidak ada jas berdasi, tidak ada medali kehormatan yang disematkan di dada, apalagi ekspresi tegang takut salah tingkah.

Momen ini adalah antitesis sempurna bagi budaya pencitraan karpet merah zaman sekarang. Di era musisi muda menyewa puluhan *fashion stylist* dan konsultan etiket hanya untuk tampil tiga menit di pesta gala, Bob Dylan mengingatkan kita pada esensi purba musik rock: ketulusan untuk menjadi diri sendiri tanpa peduli ekspektasi mata dunia.

Dylan sudah menulis *Blowin' in the Wind* dan *Like a Rolling Stone* sebelum sebagian besar pejabat Vatikan hari ini dilahirkan. Bagi pria yang pernah menolak datang mengambil piala Nobel Sastra di Swedia hanya karena "ada jadwal manggung lain", jaket hoodie di depan Sri Paus bukanlah bentuk penghinaan, melainkan pernyataan bahwa kemanusiaan dan karya seni tidak pernah diukur dari seberapa licin dasi kupu-kupu yang melilit lehermu.`
  },
  {
    title: "Ekonomi Jateng Naik 5,83 Persen Diklaim Berkat MTQ: Logika Anggaran yang Bikin Dompet Warga Garuk Kepala",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Jawa Tengah", "Ekonomi", "BPS", "MTQ", "Semarang", "Kebijakan Publik"],
    imageUrl: "https://jatengprov.go.id/wp-content/uploads/2026/11/Rilis-BPS.jpg",
    imageAlt: "Rilis resmi BPS terkait pertumbuhan ekonomi Jawa Tengah Triwulan III 2026",
    sourceUrl: "https://jatengprov.go.id/publik/mtq-dan-program-prioritas-nasional-kerek-ekonomi-jateng-triwulan-iii-tumbuh-583-persen/",
    excerpt: "BPS mencatat ekonomi Jawa Tengah tumbuh 5,83 persen pada Triwulan III 2026, ditopang perhelatan MTQ Nasional dan percepatan program nasional. Angka makro yang mentereng di kertas, tapi bikin buruh harian dan bakul pasar geleng-geleng kepala saat belanja beras.",
    content: `Kalau Anda membaca siaran pers resmi birokrasi, Jawa Tengah rasanya seperti negeri dongeng yang ekonominya sedang melesat kencang tanpa hambatan.

Data paling gres yang dipaparkan dalam [rilis resmi BPS Jawa Tengah](https://jatengprov.go.id/publik/mtq-dan-program-prioritas-nasional-kerek-ekonomi-jateng-triwulan-iii-tumbuh-583-persen/) mencatat bahwa pertumbuhan ekonomi provinsi ini menyentuh angka 5,83 persen secara tahunan (*year-on-year*) pada Triwulan III 2026. Angka yang melampaui rata-rata nasional itu langsung diklaim pejabat Pemprov sebagai buah manis dari penyelenggaraan Musabaqah Tilawatil Qur'an (MTQ) Nasional XXXI di Kota Semarang serta akselerasi proyek prioritas nasional.

Tentu saja, kita patut bersyukur Semarang kebagian rezeki nomplok dari ribuan kafilah yang datang menginap di hotel berbintang dan memborong wingko babat serta lumpia matang. Sektor perhotelan dan transportasi jelas tersenyum lebar selama sepekan acara berlangsung.

![Rilis Resmi BPS Terkait Pertumbuhan Ekonomi Jawa Tengah](https://jatengprov.go.id/wp-content/uploads/2026/11/Rilis-BPS.jpg)

Namun, ada jurang pemisah yang sangat menganga antara angka agregat makro di atas kertas grafik BPS dengan isi dompet buruh pabrik tekstil di Sukoharjo atau petani bawang di Brebes. Lonjakan ekonomi yang didorong oleh kegiatan seremoni tahunan dan kucuran proyek infrastruktur pusat bukanlah mesin kesejahteraan yang berakar di tanah. Begitu panggung MTQ dibongkar dan para pejabat kembali ke Jakarta, denyut ekonomi harian kembali berhadapan dengan realitas lama: upah minimum regional (UMR) yang masih tergolong paling ketat di Pulau Jawa dan harga bahan pokok yang enggan turun.

Merayakan angka pertumbuhan 5,83 persen tentu sah-sah saja bagi laporan pertanggungjawaban gubernur di hadapan dewan. Tapi bagi rakyat kebanyakan yang tiap hari harus memutar otak membagi uang jajan anak dan bayar cicilan motor, kemakmuran itu baru benar-benar nyata kalau harga beras di warung kelontong ikut ramah di kantong.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 18:00 WIB (5 NOV 2026) - ${articles.length} ARTIKEL OTENTIK ===\n`);
  const results = [];

  for (let i = 0; i < articles.length; i++) {
    const art = articles[i];
    console.log(`\n--- [${i + 1}/${articles.length}] Memvalidasi 7C Editorial Guard: "${art.title}" ---`);

    // 1. Audit 7C Editorial Guard
    const audit = validate7cEditorial(art.title, art.content, art.excerpt, art.tags);
    console.log(`Audit Score: ${audit.score}/100 | Valid: ${audit.valid}`);
    if (!audit.valid || audit.score < 80) {
      console.error("Ditolak oleh 7C Editorial Guard:", audit.errors);
      process.exit(1);
    }
    if (audit.warnings.length > 0) console.log("Warnings:", audit.warnings);
    if (audit.suggestions.length > 0) console.log("Suggestions:", audit.suggestions);

    // 2. Publish (Local SQLite & Remote Production Plesk)
    console.log(`Mempublikasikan ke Local DB & Remote Production...`);
    const res = await autoPublishPost(art, { remote: true });
    console.log(`Hasil Publikasi:`, JSON.stringify({
      slug: res.slug,
      status: res.status,
      score: res.score,
      dbSaved: res.dbSaved,
      remotePublished: res.remotePublished,
      url: res.url
    }, null, 2));

    // 3. Tandai URL sumber asli sebagai sudah diproses di inbox
    if (art.sourceUrl) {
      markAsSeen(art.sourceUrl);
    }

    results.push(res);
  }

  console.log("\n=== SELURUH BATCH 18:00 WIB (5 NOV 2026) BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261105-1800.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
