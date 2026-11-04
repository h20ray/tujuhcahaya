import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Mitos Mode Privasi Incognito di Browser: Mengapa Sidik Jari Kanvas Perangkat Tetap Mengidentifikasi Identitas Anda Tanpa Butuh Cookie",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Privasi Digital", "Browser", "Incognito", "Canvas Fingerprinting", "Keamanan Siber"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ilustrasi kode keamanan digital dan enkripsi pada layar monitor komputer studio",
    excerpt: "Membuka jendela penyamaran incognito sering dianggap sebagai benteng privasi mutlak di internet. Namun teknik kanvas rendering dan sidik jari perangkat keras mampu mengidentifikasi identitas Anda tanpa memerlukan sebutir cookie pun.",
    content: `Membuka jendela penyamaran (*incognito mode*) pada aplikasi browser sering kali menghadirkan rasa aman semu bagi para pengguna internet. Ikon kacamata hitam dan topi detektif di pojok bilah navigasi seolah memberi janji manis bahwa seluruh jejak penelusuran, riwayat belanja, dan pencarian rahasia kita lenyap tanpa bekas begitu tab ditutup. Banyak orang meyakini bahwa selama jendela gelap tersebut aktif, identitas digital mereka sepenuhnya anonim dari intaian pelacak iklan korporasi.

Namun keyakinan tersebut adalah ilusi pemasaran yang mengaburkan realitas arsitektur pelacakan web modern. Mode incognito sejak awal hanya dirancang untuk menghapus jejak lokal di komputer Anda sendiri—seperti riwayat unduhan, cache berkas sementara, dan cookie sesi. Di hadapan server penyedia iklan dan pialang data (*data brokers*), identitas Anda tetap telanjang bulat berkat teknik pelacakan canggih bernama sidik jari kanvas (*canvas fingerprinting*).

## Menambang Keunikan Perangkat Keras Lewat Lapisan Grafis

Tanpa perlu menyusupkan sebutir cookie pun ke penyimpanan hard disk, situs web mampu mengenali identitas unik komputer Anda melalui interaksi grafis tingkat rendah:

* **Eksploitasi Elemen HTML5 Canvas dan WebGL**: Saat Anda mengunjungi sebuah situs, skrip pelacak tersembunyi memerintahkan browser menggambar teks latar dan objek tiga dimensi mikroskopis yang tidak terlihat oleh mata. Perbedaan mikroskopis pada arsitektur cip kartu grafis (GPU), versi driver penampil, serta algoritma antialiasing pada sistem operasi menghasilkan citra piksel dengan nilai hash kriptografis yang sangat unik bagi perangkat Anda.
* **Pengukuran Karakteristik Latensi Buffer Audio**: Selain kanvas visual, modul audio API dimanfaatkan untuk memancarkan sinyal suara tak terdengar melalui mesin sintesis audio peramban. Variasi perangkat keras chip suara dan latensi pemrosesan matematis menghasilkan sidik jari akustik sekunder yang memperkuat akurasi identifikasi hingga di atas sembilan puluh sembilan persen.
* **Inventarisasi Daftar Font dan Resolusi Layar**: Skrip analitik memindai ratusan jenis font tipografi yang terpasang di komputer Anda beserta konfigurasi monitor sekunder. Kombinasi daftar font sistem yang unik bertindak layaknya sidik jari biometrik yang mustahil disamarkan oleh sekadar mode penyamaran biasa.

## Langkah Konkret Membentengi Privasi dari Pemindaian Kanvas

Melindungi privasi daring secara nyata menuntut perlindungan aktif terhadap kebocoran telemetri peramban:

1. **Gunakan Browser yang Mengacak Derau Kanvas (*Canvas Noise Injection*)**: Pilih peramban berbasis privasi yang secara sengaja menyuntikkan gangguan derau acak pada setiap kalkulasi kanvas, sehingga hash yang terbaca selalu berubah di setiap sesi kunjungan.
2. **Matikan Fitur WebGL Bila Tidak Dibutuhkan**: Nonaktifkan akses langsung situs terhadap akselerasi kartu grafis tingkat rendah melalui menu setelan lanjutan atau pasang ekstensi penangkal pelacakan sidik jari.
3. **Hindari Memasang Terlalu Banyak Font Kustom Langka**: Gunakan kumpulan font standar sistem agar profil tipografi komputer Anda membaur sempurna di tengah jutaan pengguna lainnya.

Privasi digital sejati tidak diperoleh dari sekadar menekan kombinasi tombol pintas jendela gelap. Kenali cara mesin pelacak bekerja di balik layar dan ambil kendali penuh atas sinyal perangkat keras yang dibocorkan oleh sistem Anda.`
  },
  {
    title: "Tirani Fitur Quick Time Event yang Merusak Alur Cutscene: Ketika Tombol Refleks Acak Mematikan Apresiasi Sinematik Game",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Game Design", "QTE", "Sinematografi Game", "Narasi Interaktif", "Industri Game"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pengaturan komputer gaming dan layar monitor menampilkan adegan aksi visual interaktif",
    excerpt: "Menyaksikan adegan sinematik dramatis dalam video game semestinya menjadi momen perenungan narasi yang memikat. Namun desakan menyisipkan tombol refleks acak justru merusak imersi visual dan memperlakukan pemain bak subjek uji coba mekanis.",
    content: `Bagi para penikmat game naratif modern, momen transisi menuju adegan sinematik (*cutscene*) berpencahayaan sinematik adalah saat di mana kita bersandar sejenak di kursi, melepaskan ketegangan jari dari tombol kontroler, dan bersiap meresapi puncak konflik dramatik antar-karakter. Sutradara game dan tim animator telah menghabiskan ribuan jam kerja untuk merajut gerak mikro wajah (*facial capture*), kedalaman akting suara pengisi peran, serta komposisi tata kamera yang menawan setara film layar lebar.

Namun kenikmatan estetika tersebut mendadak dihancurkan oleh serbuan ikon tombol segitiga atau kotak yang berkedip ganas di tengah layar. Selamat datang di era tirani Quick Time Event (QTE)—sebuah fitur usang yang terus dipaksakan oleh para perancang game di bawah dalih palsu menjaga keterlibatan aktif (*engagement*) pemain selama adegan narasi berlangsung.

## Merampas Fokus Visual dan Memutilasi Nilai Artistik Adegan

Alih-alih memperdalam keterlibatan emosional, pemaksaan mekanisme QTE pada sekuens sinematik menghadirkan anomali desain interaktif yang merugikan:

* **Mata Pemain Terkunci pada Simbol Tombol Bukan Aksi Karakter**: Begitu ancaman QTE mengintai, pandangan pemain tidak lagi mengapresiasi koreografi pertarungan atau kegetiran tatapan mata tokoh utama. Seluruh perhatian retina terpusat kaku pada sudut layar di mana lingkaran batas waktu tombol menyusut, mengubah karya seni visual megah menjadi permainan pencet tombol refleks yang membosankan.
* **Hukuman Layar Kematian yang Menghancurkan Ritme Cerita**: Gagal menekan tombol dalam jendela waktu sepertiga detik kerap diganjar dengan layar "Game Over" instan. Pemain terpaksa menyaksikan adegan emosional yang sama secara berulang-ulang hingga rasa haru berubah total menjadi kekesalan mekanis yang menjemukan.
* **Ilusi Kontrol Semu yang Melecehkan Agensi Pemain**: Menekan satu tombol demi memicu rentetan akrobat lima menit bukanlah interaktivitas sejati, melainkan kepura-puraan partisipasi. Mekanisme ini membuktikan kemalasan perancang dalam mengintegrasikan sistem kendali fisik pemain secara langsung ke dalam mekanika inti permainan.

## Merestorasi Keagungan Bahasa Sinematik Video Game

Industri game perlu berani memercayai kecerdasan audiens dan mengembalikan fungsi murni adegan narasi:

1. **Sediakan Opsi Aksesibilitas untuk Melewati QTE Secara Otomatis**: Berikan kebebasan bagi pemain untuk menikmati alur sinematik murni tanpa distraksi tombol kedip lewat toggle aksesibilitas di menu utama.
2. **Integrasikan Konsekuensi Alami Bukan Kematian Instan**: Bila QTE tetap dipertahankan, biarkan kegagalan input mengubah cabang dialog atau memicu cedera ringan pada karakter tanpa harus memutus alur cerita secara kasar.
3. **Fokuskan Interaktivitas pada Pilihan Moral Bukan Uji Kecepatan Jari**: Salurkan agensi pemain pada pengambilan keputusan etis yang bermakna dibanding sekadar menguji refleks motorik kasar di tengah momen kontemplasi.

Video game adalah medium seni interaktif yang luhur. Jangan biarkan adegan dramatis paling menyentuh hati direduksi menjadi sekadar ujian refleks tombol plastik yang melelahkan jiwa.`
  },
  {
    title: "Bahaya Menatap Layar HP Sebelum Tidur dengan Mode Gelap Semu: Mengapa Filter Blue Light Bukan Izin Begadang Bebas Insomnia",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Tidur", "Insomnia", "Blue Light", "Mode Gelap", "Irama Sirkadian"],
    imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang beristirahat di tempat tidur dengan suasana kamar temaram di malam hari",
    excerpt: "Mengaktifkan filter cahaya kuning dan tampilan mode gelap di layar smartphone sering dipandang sebagai lisensi bebas insomnia. Padahal rangsangan dopamin dari guliran konten tanpa batas tetap melumpuhkan produksi melatonin alami tubuh.",
    content: `Di era serbuan notifikasi tanpa jeda, ritual menjelang tidur jutaan pekerja modern nyaris tidak pernah lepas dari genggaman ponsel pintar. Untuk menenangkan rasa bersalah akibat menatap layar terang di atas ranjang tidur, sebagian besar dari kita mengandalkan fitur penyelamat: menyalakan mode malam (*Night Shift* atau pelindung mata) yang mengubah layar menjadi kekuningan, sembari mengaktifkan palet warna gelap (*Dark Mode*). Layar yang temaram dan hangat menghadirkan pembenaran psikologis bahwa mata kita kini terlindungi dari ancaman insomnia.

Namun keyakinan bahwa filter perangkat lunak mampu menetralkan bahaya begadang adalah kekeliruan fisiologis yang fatal. Menghilangkan porsi spektrum cahaya biru memang sedikit meredakan kelelahan otot fokus mata, tetapi sama sekali tidak mematikan mekanisme kewaspadaan otak yang dipicu oleh stimulasi kognitif interaksi digital. Anda tidak dapat menyaring banjir dopamin hanya dengan mengubah warna piksel layar menjadi kuning tembaga.

## Sabotase Biologis di Balik Guliran Layar Malam Hari

Membiarkan mata terpapar arus informasi digital saat berbaring di tempat tidur merusak arsitektur istirahat alami tubuh melalui beberapa jalur kritis:

* **Penundaan Pelepasan Hormon Melatonin Akibat Keterjagaan Visual**: Kelenjar pineal di dasar otak sangat peka terhadap intensitas foton cahaya secara umum, bukan hanya spektrum biru murni. Cahaya redup dari jarak dua puluh sentimeter di depan wajah tetap mengirimkan sinyal palsu ke nukleus suprakiasmatik bahwa siang hari belum usai, menunda pelepasan hormon melatonin hingga dua jam penuh.
* **Perangkap Siklus Dopaminergik Tanpa Batas**: Membuka linimasa media sosial, membaca pesan obrolan grup, atau menonton video pendek memicu semburan dopamin mikro di otak setiap kali konten baru muncul. Status antisipasi neurologis ini menempatkan sistem saraf simpatik dalam mode siaga tinggi (*fight or flight*), menaikkan denyut nadi dan menggagalkan transisi tubuh menuju relaksasi parasimpatis.
* **Pemenggalan Fase Tidur Gelombang Lambat (Deep Sleep)**: Walaupun Anda akhirnya tertidur karena kelelahan fisik, otak yang terstimulasi sebelum tidur mengalami fragmentasi gelombang otak. Durasi fase tidur restoratif dan fase REM merosot drastis, menyebabkan Anda terbangun di pagi hari dengan kepala berat dan otot kaku meski durasi tidur di jam dinding tampak cukup.

## Membangun Batas Nyata Antara Layar dan Tempat Tidur

Meraih kualitas tidur yang menyegarkan membutuhkan pemulihan disiplin ruang istirahat yang bebas dari intervensi layar:

1. **Tetapkan Jam Malam Digital Minimal Satu Jam Sebelum Rehat**: Matikan seluruh layar ponsel, tablet, maupun laptop setidaknya enam puluh menit sebelum Anda berniat memejamkan mata.
2. **Keluarkan Ponsel dari Jangkauan Jari di Tempat Tidur**: Letakkan perangkat di atas meja yang berjarak minimal dua meter dari kasur atau gunakan jam weker fisik mandiri agar tangan Anda tidak refleks meraba layar saat terbangun di tengah malam.
3. **Alihkan Kebiasaan Menggulir Layar ke Buku Fisik atau Jurnal Refleksi**: Berikan ruang bagi batin Anda mencerna peristiwa harian melalui pembacaan halaman buku cetak atau latihan relaksasi pernapasan lambat.

Tidur adalah hak biologis paling sakral untuk regenerasi sel tubuh dan kesehatan mental Anda. Jangan biarkan manipulasi algoritma media sosial dan kenyamanan palsu filter layar merampas kedamaian malam yang menjadi hak tubuh Anda.`
  },
  {
    title: "Kematian Intro Lagu Akustik yang Panjang: Mengapa Lima Detik Pertama Kini Menentukan Nasib Royalti Musisi di Platform Streaming",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Industri Musik", "Streaming Musik", "Produksi Lagu", "Komposisi", "Royalti Musik"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Mikrofon rekaman studio klasik dengan headphone hitam di samping partitur musik",
    excerpt: "Intro instrumental yang syahdu dan perlahan membangun suasana kini lenyap dari rilisan pop modern. Di bawah tekanan aturan royalti streaming, musisi dipaksa meledakkan vokal refrain sejak detik ketiga demi mencegah jari pendengar melompat ke lagu berikutnya.",
    content: `Dengarkan kembali karya-karya legendaris era piringan hitam dan cakram padat: petikan gitar akustik pembuka lagu "Hotel California" karya Eagles yang mengalun santai selama hampir semenit, atau intro denting piano meditatif dalam "Bohemian Rhapsody" milik Queen yang sabar menenun atmosfer sebelum bait lirik pertama diucapkan. Ada sebuah kemewahan artistik dalam membiarkan instrumen bernapas, menyiapkan batin pendengar, dan merajut jembatan imajinasi sebelum sang vokalis mengambil alih kendali cerita.

Namun keindahan tradisi pembuka lagu tersebut kini nyaris punah dari peta rekaman musik komersial kontemporer. Di tangga lagu platform streaming hari ini, lagu-lagu baru berpacu saling mendahului dengan melenyapkan intro instrumental sama sekali. Lagu dimulai langsung pada ketukan drum pertama, disusul vokal refrain utama yang meledak di detik ketiga tanpa ada ruang basa-basi sonik. Musik pop telah ditundukkan oleh tirani tombol lewati (*skip button*) dan kalkulasi dingin algoritma platform distribusi digital.

## Perhitungan Dingin Royalti Tiga Puluh Detik

Kepunahan intro lagu bukanlah perubahan selera estetika yang tumbuh alami dari para pencipta lagu, melainkan bentuk kepatuhan terhadap ekonomi algoritma:

* **Klausul Pembayaran Royalti Ambang Batas 30 Detik**: Platform streaming menerapkan aturan baku di mana pemutaran lagu hanya dihitung sah menghasilkan pundi royalti jika didengarkan minimal selama tiga puluh detik. Bila seorang pendengar menekan tombol lewati di detik kedua puluh sembilan akibat merasa bosan menunggu vokal masuk, musisi tidak memperoleh satu sen pun dari pemutaran tersebut.
* **Fenomena Lompatan Lima Detik Pertama (*First 5-Second Drop-off*)**: Data analitik industri menunjukkan bahwa lebih dari dua puluh lima persen pendengar kasual akan segera mengganti lagu bila dalam lima detik pertama telinga mereka tidak disuguhi hook melodi yang mencolok. Demi menyelamatkan metrik retensi lagu di daftar putar kurasi, produser rekaman memangkas intro akustik secara brutal di meja mixing studio.
* **Standarisasi Formula Musik Cepat Saji**: Keharusan memikat perhatian dalam sekejap mendorong penciptaan lagu berdurasi sangat ringkas yang langsung menembak ke bagian reff berulang-ulang. Keberanian bereksplorasi dengan overture orkestrasi, perpindahan progresi akor yang lambat, atau solo gitar pembuka dianggap sebagai liabilitas komersial yang berbahaya bagi kelangsungan karier sang artis.

## Menyelamatkan Jiwa Komposisi dari Penyeragaman Mesin

Merawat keberagaman seni musik menuntut kesadaran kolektif dari para penikmat dan kurator karya:

1. **Latih Kembali Kesabaran Mendengarkan Karya Kontemplatif**: Biasakan diri menikmati lagu-lagu dengan intro panjang yang kaya detail aransemen tanpa tergesa-gesa memencet layar smartphone untuk melompat ke trek berikutnya.
2. **Dukung Musisi yang Menolak Tunduk pada Rumus Algoritmik**: Beli karya rilisan fisik, tiket konser mandiri, dan merchandise musisi independen yang konsisten mempertahankan struktur komposisi organik yang kaya jiwa.
3. **Kritisi Kebijakan Metrik Platform Distribusi**: Suarakan pentingnya model pembagian royalti yang lebih adil dan menghargai apresiasi seni menyeluruh dibanding sekadar mengejar retensi durasi tayang yang dangkal.

Musik adalah arsitektur bunyi yang hidup dan bernyawa. Jangan biarkan kalkulator algoritma memangkas keagungan pintu gerbang sebuah lagu hingga menjadi deretan nada seragam yang kehilangan pesona misteri awalnya.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 16:00 WIB (4 NOV 2026) - ${articles.length} ARTIKEL ===\n`);
  const results = [];

  for (let i = 0; i < articles.length; i++) {
    const art = articles[i];
    console.log(`\n--- [${i + 1}/${articles.length}] Memvalidasi 7C Editorial Guard: "${art.title}" ---`);

    // 1. Audit 7C Editorial Guard
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

  console.log("\n=== SELURUH BATCH 16:00 WIB (4 NOV 2026) BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261104-1600.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
