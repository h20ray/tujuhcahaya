import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

const articles = [
  {
    title: "Monokultur Chromium dan Ancaman Web Tertutup: Mengapa Dominasi Satu Engine Merugikan Pengguna",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Browser", "Chromium", "Web Standards", "Open Source", "Google"],
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Barisan kode pemrograman dan antarmuka web pada monitor pengembang",
    excerpt: "Hampir semua browser populer kini memakai Chromium sebagai fondasinya. Ketika Google memegang kendali atas standar web dan meluncurkan Manifest V3 yang melemahkan adblocker, ekosistem internet kehilangan check and balance.",
    content: `Buka laptop atau smartphone Anda hari ini, dan kemungkinan besar Anda sedang berselancar menggunakan mesin yang sama persis: Chromium. Google Chrome, Microsoft Edge, Brave, Opera, Vivaldi, hingga deretan browser bawaan ponsel cerdas kini seluruhnya mengandalkan engine rendering Blink dan mesin JavaScript V8 yang dikembangkan di bawah payung proyek terbuka Google.

Satu-satunya benteng alternatif yang masih bertahan dengan mesin mandiri hanyalah Safari milik Apple dengan WebKit di ekosistem tertutupnya, serta Mozilla Firefox yang gigih mempertahankan Gecko. Di luar kedua nama tersebut, rimba web modern telah bertransformasi menjadi monokultur raksasa yang dikendalikan oleh satu korporasi periklanan terbesar di dunia.

## Sejarah Berulang: Dari Microsoft Internet Explorer ke Chromium

Kondisi ini mengingatkan kita pada era kelam akhir dekade 1990-an ketika Internet Explorer 6 menguasai lebih dari 90 persen pasar browser dunia. Bedanya, jika Microsoft dahulu menggunakan taktik monopoli kasar dengan memaketkan browser ke dalam Windows dan membiarkan produknya membeku tanpa inovasi selama bertahun-tahun, Google menempuh jalur yang jauh lebih halus: membangun proyek open source berkinerja tinggi, lalu perlahan mengarahkan konsorsium standar web (W3C) mengikuti agenda bisnisnya sendiri.

Dampaknya mulai terasa sangat nyata bagi para pengembang web dan pengguna akhir:

* **Standar Web Sepihak**: Fitur-fitur eksperimental kerap diluncurkan langsung di Chrome sebelum disepakati bersama oleh konsorsium web internasional, memaksa pengembang web untuk mendesain situs dengan label "optimized for Chrome" layaknya banner jadul era 2000-an.
* **Matinya Pengujian Lintas Engine**: Banyak startup teknologi kini hanya menguji situs mereka pada browser berbasis Chromium, mengabaikan pengguna Firefox yang kerap menjumpai tata letak rusak atau fungsi yang macet karena pengembang malas menguji mesin Gecko.
* **Pengikisan Privasi Pengguna**: Sebagai raksasa iklan digital, Google memiliki konflik kepentingan laten dalam mendesain kapabilitas browser. Setiap API baru yang dirilis kerap menyeimbangkan antara kenyamanan pengguna dengan kemampuan pelacakan audiens terarah (*targeted advertising*).

## Kasus Nyata Manifest V3 dan Pelumpuhan Adblocker

Bukti paling gamblang dari hegemoni monokultur ini adalah transisi paksa ke Manifest V3. Melalui pembaruan arsitektur ekstensi tersebut, Google secara efektif membatasi kapabilitas antarmuka *declarativeNetRequest*, yang berujung pada terpangkasnya efektivitas ekstensi pemblokir iklan canggih seperti uBlock Origin.

Meskipun vendor seperti Brave atau Vivaldi berjanji mempertahankan filter internal mereka, fondasi teknis browser mereka tetap terikat pada *codebase* upstream Chromium. Ketika Google memutuskan untuk mencabut API lama secara permanen dari inti Chromium, tidak ada vendor turunan yang memiliki sumber daya rekayasa perangkat lunak untuk mempertahankan percabangan (*fork*) mandiri dalam jangka panjang tanpa tertinggal pembaruan keamanan penting.

Satu-satunya pihak yang memiliki kebebasan arsitektur penuh untuk menolak pembatasan tersebut adalah Firefox, karena mereka mengendalikan mesin rendering dan subsistem ekstensinya sendiri dari nol.

## Mempertahankan Keragaman Demi Kedaulatan Digital

Internet dirancang sebagai jaringan terdesentralisasi yang tidak boleh dikendalikan oleh satu pintu gerbang tunggal. Ketika satu entitas menguasai standar web, engine rendering, sekaligus platform iklan digital terbesar di dunia, batas antara "standar terbuka" dengan "kepentingan komersial korporat" menjadi sangat tipis dan rentan disalahgunakan.

Mendukung browser alternatif dengan mesin mandiri seperti Firefox bukan sekadar perkara bernostalgia atau fanatisme merek. Ini adalah komitmen etis untuk menjaga keragaman ekosistem web agar masa depan internet tidak disandera oleh monokultur tunggal yang memutuskan apa yang boleh dan tidak boleh kita lihat di layar komputer.`
  },
  {
    title: "Tragedi Kutukan Live Service: Mengapa Game Berbujet Triliunan Rupiah Dimatikan dalam Hitungan Hari?",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Industri Game", "Live Service", "PlayStation", "Gaming", "Konsol"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Konsol video game retro dan kontroler modern di atas meja studio kreatif",
    excerpt: "Menghabiskan dana ratusan juta dolar dan masa pengembangan delapan tahun, game berformat live service kerap tutup buku hanya dalam dua pekan. Obsesi penerbit mengejar pendapatan berulang justru mengasingkan para pemain.",
    content: `Industri video game global tengah menghadapi krisis identitas paling mahal dalam sejarah modernnya. Judul-judul beranggaran raksasa yang menelan biaya produksi antara 100 juta hingga 400 juta dolar AS—setara dengan APBD kota menengah di Indonesia—kerap tumbang mengenaskan hanya dalam hitungan minggu setelah peluncuran komersialnya.

Kasus penarikan darurat game tembak-menembak daring *Concord* oleh Sony PlayStation hanya 14 hari pasca-rilis, disusul kegagalan komersial judul-judul ambisius seperti *Suicide Squad: Kill the Justice League* dan *Babylon's Fall*, membunyikan alarm keras di ruang rapat para eksekutif industri hiburan. Format *Games-as-a-Service* (GaaS) yang selama satu dekade dielu-elukan sebagai mesin pencetak uang abadi kini bermutasi menjadi kuburan massal bagi studio pengembang ternama.

## Paradoks Atensi dan Kejenuhan Battle Pass

Akar masalah kegagalan sistemik ini bukan sekadar urusan grafis yang kurang memukau atau kampanye pemasaran yang buruk, melainkan salah kalkulasi mendasar terhadap kapasitas waktu hidup manusia. 

Model bisnis GaaS dirancang dengan satu asumsi serakah: memaksa pemain menjadikan game tersebut sebagai satu-satunya hobi harian mereka. Dengan sistem *Daily Quests*, *Battle Pass* berbayar berbatas waktu, serta acara musiman (*seasonal events*) yang menuntut absensi harian, setiap penerbit game menuntut komitmen 20 hingga 40 jam seminggu dari basis penggemarnya.

Namun, waktu luang pemain bukanlah sumber daya yang elastis:

* **Saturasi Pasar yang Ekstrem**: Pasar game kompetitif daring telah disemen rapat oleh raksasa lama seperti *Fortnite*, *Apex Legends*, *Valorant*, *Counter-Strike 2*, dan *Dota 2*. Menggoda kelompok pertemanan untuk meninggalkan perpustakaan skin ratusan ribu rupiah di game lama demi game baru berbayar Rp600 ribu adalah misi yang nyaris mustahil.
* **Kelelahan Batin (*Gamer Fatigue*)**: Alih-alih memberikan relaksasi setelah penat bekerja, game modern kerap terasa seperti pekerjaan paruh waktu kedua tanpa gaji. Sistem *Fear of Missing Out* (FOMO) yang dipaksakan membuat pemain muak dan memilih kabur ke judul-judul yang lebih santai.
* **Perampasan Hak Milik Digital**: Ketika game live service gagal memenuhi target kuartalan investor, penerbit dapat mematikan server secara sepihak. Salinan fisik maupun digital yang dibeli konsumen langsung menjadi berkas sampah tak berguna karena ketiadaan mode permainan luring (*offline mode*).

## Kebangkitan Kembali Narasi Single-Player Tuntas

Di tengah puing-puing proyek live service yang berguguran, fenomena sebaliknya justru terjadi pada game naratif pemain tunggal (*single-player*). Kesuksesan spektakuler judul-judul seperti *Baldur's Gate 3*, *Elden Ring*, *Black Myth: Wukong*, hingga *Metaphor: ReFantazio* membuktikan bahwa pasar gamer global masih sangat lapar akan pengalaman bermain yang tuntas dan jujur.

Gamer bersedia membayar harga penuh di muka untuk sebuah karya seni interaktif yang menghormati waktu mereka: sebuah permainan yang dimulai dari prolog yang memikat, memiliki alur konflik terstruktur, dan ditutup dengan konklusi yang memuaskan tanpa todongan iklan mikrotransaksi setiap lima menit.

Ketika sebuah studio berani fokus pada mekanika permainan yang solid dan narasi mendalam daripada merancang toko kosmetik virtual, antusiasme komunitas akan meledak secara organik dari mulut ke mulut tanpa butuh sponsor berbayar yang dipaksakan.

## Mengembalikan Martabat Seni Permainan

Koreksi brutal yang tengah melanda industri game hari ini adalah obat pahit yang sangat dibutuhkan. Obsesi korporasi untuk mengubah setiap judul game menjadi kasino mini dengan balutan grafis modern telah terbukti menemui jalan buntu.

Video game pada hakikatnya adalah medium seni interaktif, bukan instrumen investasi dividen kuartalan. Menghargai waktu luang pemain, menyajikan cerita berbobot, dan mengizinkan sebuah karya untuk memiliki akhir yang paripurna adalah fondasi sejati yang akan menyelamatkan industri ini dari kehancuran kreativitas.`
  },
  {
    title: "Jerat Overchoice Paralysis: Mengapa Katalog Jutaan Tayangan Streaming Justru Bikin Malas Menonton?",
    category: "budaya",
    byline: "0100MUNS3DJSD97205CCB31353", // Sarah Dilla
    tags: ["Budaya Digital", "Streaming", "Psikologi", "Film", "Gaya Hidup", "Kesehatan Mental"],
    imageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ruang keluarga santai dengan layar televisi menampilkan pilihan menu film di malam hari",
    excerpt: "Menghabiskan waktu 45 menit hanya untuk menggulir daftar sinopsis dan trailer tanpa pernah memutar film. Paradoks opsi berlimpah di aplikasi streaming kini justru melahirkan keletihan mental bagi penikmat hiburan urban.",
    content: `Skenario ini hampir pasti pernah menimpa malam santai Anda. Jam menunjukkan pukul delapan malam, piring makan malam sudah dicuci bersih, dan Anda duduk di sofa empuk sambil menyalakan televisi pintar. Niatnya sederhana: mencari satu film bagus berdurasi dua jam atau dua episode serial drama untuk melepas penat setelah seharian berkutat dengan rapat daring dan lembar kerja kantor.

Namun, yang terjadi selanjutnya adalah komedi getir kehidupan modern. Tiga puluh menit berlalu, empat puluh lima menit menguap, dan jempol Anda masih terus menekan tombol arah pada remote control. Menelusuri deretan poster film di Netflix, berpindah ke katalog Disney+, memeriksa rekomendasi baru di Prime Video, menonton belasan cuplikan trailer pendek, membaca sinopsis sepintas, lalu membatalkannya karena merasa belum tentu cocok.

Akhirnya, jam dinding sudah menunjuk pukul sepuluh malam. Rasa kantuk mulai menyerang, mata perih, dan Anda mematikan televisi dengan rasa kesal tanpa sempat menonton satu tayangan pun.

## Paradoks Pilihan dan Biaya Oportunitas Mental

Fenomena psikologis ini dikenal luas sebagai *overchoice paralysis* atau kelumpuhan akibat kelimpahan pilihan. Dalam buku klasiknya *The Paradox of Choice*, psikolog Barry Schwartz telah mengingatkan bahwa penambahan opsi pilihan hanya membawa kepuasan hingga batas kurva tertentu. Begitu jumlah opsi melampaui kapasitas pemrosesan otak, yang lahir bukanlah kebebasan memilih, melainkan kecemasan eksistensial.

Mengapa memilih film di platform streaming terasa jauh lebih melelahkan daripada menonton siaran televisi konvensional dua dekade lalu?

* **Beban Tanggung Jawab Keputusan**: Di era televisi kabel, kita bersikap pasrah. Jika stasiun TV menayangkan film laga kelas dua pada jam delapan malam, kita menontonnya tanpa beban ekspektasi karena pilihan tersebut bukan keputusan kita. Sebaliknya, di platform streaming, beban kualitas pengalaman sepenuhnya berada di pundak penonton. Memilih film yang membosankan memicu penyesalan pribadi karena Anda sendiri yang memilihnya.
* **Tinggi Biaya Oportunitas (*Opportunity Cost*)**: Ketika Anda memutuskan memutar satu film berdurasi 120 menit, di alam bawah sadar Anda menyadari telah mengorbankan ribuan film lain yang mungkin saja jauh lebih seru. Rasa takut salah pilih (*fear of a suboptimal choice*) membuat otak terus menunda eksekusi keputusan.
* **Algoritma Rekomendasi yang Menyeragamkan Rasa**: Ironisnya, algoritma personalisasi sering kali tidak membantu memecahkan kebuntuan ini. Alih-alih menawarkan kejutan artistik, algoritma cenderung mengurung penonton dalam gelembung genre yang sama secara berulang, membuat katalog yang tampak megah terasa menjemukan dan monoton.

## Hilangnya Pengalaman Kurasi Komunal

Masalah kedua yang luput disadari dari ledakan platform on-demand adalah musnahnya peran kurator independen dan ritme tonton komunal. Di masa persewaan kaset VHS atau DVD dahulu, ada batas fisik yang menyehatkan: koleksi di rak toko terbatas, kita membaca ulasan penjaga toko di papan tulis kecil, atau berdiskusi singkat dengan sesama penyewa di lorong etalase.

Keterbatasan fisik tersebut justru memberi bobot emosional pada pilihan kita. Begitu keping cakram dibawa pulang ke rumah, kita berkomitmen menontonnya hingga tuntas dari awal sampai akhir, bahkan ketika bagian tengah film terasa sedikit lambat. Dari komitmen itulah sering kali kita menemukan apresiasi terhadap sinematografi yang bernilai tinggi.

Di era streaming nirbatas, tombol lompat sepuluh detik (*skip*) dan godaan untuk keluar dari aplikasi hanya berjarak satu sentuhan jari. Ketahanan penonton untuk menikmati penuturan cerita yang perlahan (*slow-burn narrative*) telah terkikis oleh konsumsi kilat media sosial.

## Menyelamatkan Kembali Kenikmatan Menonton

Mengatasi jerat kelumpuhan pilihan ini membutuhkan strategi pembatasan diri yang sadar. Salah satu pendekatan paling ampuh adalah mendelegasikan keputusan sebelum layar televisi menyala. Tentukan film apa yang ingin ditonton berdasarkan rekomendasi penulis film terpercaya, arsip festival sinema, atau saran teman dekat sebelum jam santai tiba.

Terapkan pula aturan lima menit: jika dalam waktu lima menit pertama membuka aplikasi Anda belum menemukan film yang meyakinkan, putar film apa pun dari daftar simpan (*watchlist*) tertua tanpa banyak menimbang, atau matikan televisi dan ganti dengan membaca satu bab novel fisik.

Hiburan sejatinya adalah jendela jeda untuk memperkaya imajinasi dan menenangkan jiwa, bukan arena baru untuk menghabiskan sisa energi kognitif kita. Menutup katalog dan berani menikmati satu tontonan sederhana dengan kesadaran penuh jauh lebih menyehatkan daripada terjebak semalaman di lorong labirin digital tanpa pernah mencapai tujuan.`
  }
];

async function main() {
  console.log("=== MEMULAI BATCH AUTO-PUBLISH TUJUHCAHAYA (JADWAL 18:30 WIB / TIAP 30 MENIT) ===");
  const results = [];

  for (let i = 0; i < articles.length; i++) {
    const art = articles[i];
    console.log(`\n--- [${i + 1}/${articles.length}] Memvalidasi 7C Editorial Guard: "${art.title}" ---`);
    
    // 1. Audit
    const audit = validate7cEditorial(art.title, art.content, art.excerpt);
    console.log(`Audit Score: ${audit.score}/100 | Valid: ${audit.valid}`);
    if (!audit.valid) {
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
    results.push(res);
  }

  console.log("\n=== SELURUH BATCH 18:30 BERHASIL DIPUBLIKASIKAN ===");
}

main().catch(err => {
  console.error("Batch Error:", err);
  process.exit(1);
});
