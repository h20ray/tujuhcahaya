import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Bahaya Microfrontends Monolitik Terdistribusi pada Aplikasi Web: Mengapa Memecah UI Menjadi Belasan Remote Module Membengkakkan Latensi Bundle dan State Management",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Microfrontends", "Arsitektur Web", "JavaScript", "Frontend", "Kinerja Web"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Tampilan struktur modul kode pada editor teks pengembang frontend modern",
    excerpt: "Memecah aplikasi web monolitik menjadi puluhan remote module kerap dijanjikan sebagai kunci skalabilitas tim. Namun tanpa tata kelola modul ketat, arsitektur ini memicu pembengkakan bundle JavaScript ganda dan mimpi buruk sinkronisasi state.",
    content: `Dalam beberapa tahun terakhir, tren dekomposisi sistem monolitik merambah ke ranah antarmuka pengguna melalui konsep arsitektur microfrontends. Didorong oleh keberhasilan arsitektur microservices di sisi backend, banyak tim rekayasa frontend di perusahaan skala menengah hingga besar tergoda menerapkan pola serupa: memecah satu halaman web tunggal menjadi puluhan fragmen independen yang diunggah dan dijalankan dari repositori terpisah melalui Module Federation atau runtime iframe. Setiap tim lini bisnis diberikan kebebasan penuh mengelola siklus rilis dan pustaka komponen mereka sendiri tanpa perlu berkoordinasi dengan tim lain.

Namun di balik janji manis otonomi organisasi tersebut, microfrontends sering kali bermutasi menjadi monster performa yang dikenal sebagai monolit terdistribusi (*distributed monolith*). Alih-alih mendapatkan sistem yang lincah dan terukur, pengguna akhir justru dipaksa menanggung beban unduhan bundle JavaScript berulang kali, jeda perenderan antarmuka yang lamban, serta anomali perilaku interaksi akibat fragmentasi status data global di dalam satu sesi peramban yang sama.

## Jebakan Beban Runtime Ganda dan Fragmentasi State Global

Kelemahan arsitektur microfrontends tanpa disiplin tata kelola tercermin dalam sejumlah friksi teknis yang nyata:

* **Duplikasi Pustaka Runtime Eksternal (*Dependency Bloat*)**: Ketika setiap modul mikro dibiarkan mengimpor versinya sendiri, satu halaman web dapat memuat tiga versi React yang berbeda, dua pustaka manajemen state terpisah, dan salinan ganda file CSS reset. Dampaknya, ukuran bundle yang harus diunduh dan diparsing oleh mesin peramban melonjak dari beberapa ratus kilobita menjadi beberapa megabita, memperparah metrik Total Blocking Time (TBT) dan Largest Contentful Paint (LCP) pada perangkat seluler berdaya rendah.
* **Kerapuhan Jalur Komunikasi Antar-Modul (*Custom Event Chaos*)**: Karena modul-modul ini hidup di lingkungan isolasi yang berbeda, sinkronisasi data—seperti token autentikasi sesi, isi keranjang belanja, atau preferensi tema gelap—terpaksa mengandalkan bus peristiwa kustom (\`window.dispatchEvent\`) atau iframe postMessage. Ketiadaan kontrak tipe statis yang ketat membuat perubahan skema pada satu modul dengan mudah memicu kegagalan diam-diam (*silent failure*) pada modul tetangga yang bergantung padanya.
* **Mimpi Buruk Penelusuran Bug dan Observabilitas Sesi (*Debugging Hell*)**: Menemukan akar permasalahan saat terjadi galat perenderan menjadi tugas yang sangat menguras tenaga. Pelacak kesalahan runtime seperti Sentry dipenuhi tumpukan panggilan stack trace yang terpotong-potong melintasi batas domain modul dinamis, membuat tim pengembang saling lempar tanggung jawab atas anomali yang muncul di layar pengguna.

## Alternatif Rasional Menuju Skalabilitas Tanpa Mengorbankan Pengalaman Pengguna

Membangun arsitektur frontend berkinerja tinggi menuntut penilaian kritis terhadap rasio biaya operasional versus kebutuhan aktual:

1. **Prioritaskan Monolit Modular (*Modular Monolith*) dengan Batas Domain Jelas**: Sebelum melompat ke arsitektur remote terdistribusi, terapkan struktur monorepo terorganisasi (seperti Nx atau Turborepo). Monolit modular memberikan otonomi pengembangan kode per domain bisnis sembari tetap mempertahankan proses kompilasi terpadu, dedublikasi dependensi otomatis, dan verifikasi tipe data TypeScript lintas modul secara menyeluruh.
2. **Terapkan Arsitektur Islands atau Server-Driven UI**: Manfaatkan framework web modern yang mendukung isolasi komponen interaktif berbasis pulau (*Islands Architecture* seperti Astro) atau kompilasi streaming komponen server. Dengan pendekatan ini, sebagian besar halaman dikirim sebagai HTML statis murni dengan latensi nol, sementara JavaScript hanya dihidupkan (*hydrated*) pada komponen interaktif yang benar-benar membutuhkan interaktivitas pengguna.
3. **Kunci Kontrak Tata Kelola Shared Dependencies**: Jika microfrontends memang tak terelakkan karena skala korporasi yang melibatkan ratusan insinyur lintas benua, berlakukan kebijakan ketat pada konfigurasi Module Federation. Kunci versi dependensi inti (seperti React, Vue, atau UI library dasar) sebagai *singleton shared modules* wajib, dan tolak proses build jika modul anak mencoba menyuntikkan dependensi duplikat yang bertabrakan dengan host utama.

Skalabilitas organisasi rekayasa perangkat lunak tidak boleh dibayar dengan merusak kenyamanan berselancar para pengguna. Memilih arsitektur yang sederhana, deterministik, dan terukur secara kompilasi adalah investasi terbaik demi menjaga kecepatan dan keandalan produk digital Anda.`
  },
  {
    title: "Ancaman Ergonomi dari Desain UI Game Berbasis Kursor Virtual pada Konsol: Mengapa Memaksakan Navigasi Mouse ke Kontroler Merusak Kenyamanan Bermain",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Desain UI", "Konsol Game", "Aksesibilitas", "Gamepad", "Pengalaman Pengguna"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kontroler video game modern di atas meja dengan latar antarmuka permainan",
    excerpt: "Demi menghemat biaya adaptasi antarmuka lintas platform, studio game konsol semakin gemar memaksakan kursor virtual berbasis stik analog. Keputusan desain yang malas ini melumpuhkan navigasi taktil cepat dan membuat manajemen menu terasa melelahkan.",
    content: `Dalam evolusi desain antarmuka pengguna (*UI/UX*) video game konsol selama tiga dekade, prinsip kenyamanan interaksi selalu berpijak pada responsivitas tombol arah (*D-pad snapping*). Ketika pemain menekan tombol bawah pada kontroler, sorotan fokus antarmuka secara seketika melompat dengan presisi diskrit ke menu berikutnya. Pemain tidak perlu memikirkan posisi koordinat piksel di layar; memori otot (*muscle memory*) jemari dapat menavigasi tumpukan menu inventaris, pohon keterampilan (*skill tree*), dan jurnal misi dalam hitungan pecahan detik tanpa harus menatap layar secara kaku.

Namun sejak tren konvergensi platform PC dan konsol kian mendominasi industri, para desainer antarmuka game blockbuster mulai mengadopsi jalan pintas yang sangat merugikan: kursor virtual bebas (*free-floating virtual cursor*). Alih-alih merancang sistem navigasi kisi berbasis tombol arah yang ramah stik kontroler, pemain konsol kini dipaksa menggeser lingkaran kursor lambat menggunakan stik analog jempol kanan untuk mengeklik kotak perlengkapan kecil. Praktik ini memperlakukan kontroler gamepad seolah-olah sebagai tiruan mouse komputer yang canggung dan tidak presisi.

## Beban Kognitif dan Hilangnya Kecepatan Memori Otot

Penerapan kursor bebas pada kontroler gamepad melahirkan serangkaian friksi ergonomis yang mengganggu kenikmatan bermain:

* **Hilangnya Kecepatan Navigasi Blind-Testing**: Sistem penyorotan diskrit memungkinkan pemain berpengalaman mengganti senjata atau mengonsumsi ramuan pemulih di tengah hiruk-pikuk pertempuran tanpa perlu melihat menu secara saksama—cukup dengan kombinasi cepat \`Kanan-Kanan-Bawah-A\`. Sebaliknya, kursor analog menuntut koordinasi mata dan tangan penuh (*hand-eye tracking*) hanya untuk mengarahkan titik lingkaran kecil ke atas ikon tombol seleksi, memperlambat ritme permainan secara drastis.
* **Kelelahan Fisik Jemari Akibat Kompensasi *Deadzone* Analog**: Stik analog dirancang untuk modulasi vektor gerak karakter di ruang tiga dimensi, bukan penunjukan presisi dua dimensi pada koordinat layar. Menggerakkan kursor lambat menuntut jempol pemain menahan tuas stik pada sudut kemiringan mikro secara konstan, memicu ketegangan otot tendon tangan dalam sesi bermain panjang. Jika sensitivitas stik disetel terlalu tinggi, kursor meleset dari target; jika terlalu rendah, memindahkan kursor melintasi layar televisi 65 inci terasa lambat bagai merayap di lumpur.
* **Jalan Pintas Malas Pengembang (*Lazy Multiplatform Porting*)**: Alasan utama di balik merebaknya kursor virtual di game konsol bukanlah demi kenyamanan pemain, melainkan pemangkasan anggaran produksi studio. Dengan membuat satu desain antarmuka berbasis mouse untuk PC lalu menjejalkannya langsung ke versi PlayStation dan Xbox, studio dapat memangkas ratusan jam kerja tim pengembang antarmuka. Pemain konsol lah yang akhirnya harus membayar kemalasan studio tersebut dengan pengalaman kontrol yang inferior.

## Mengembalikan Kehormatan Navigasi Taktil pada Kontroler Konsol

Merancang antarmuka game modern yang memikat menuntut komitmen menghormati keunikan perangkat kendali masing-masing platform:

1. **Wajibkan Navigasi Kisi Diskrit (*Directional Grid Snapping*) Penuh**: Setiap elemen menu yang dapat dipilih harus terhubung dalam matriks navigasi tombol arah yang logis. Menekan tombol arah harus memindahkan fokus seleksi secara instan dengan efek umpan balik audio dan haptik yang tegas, memberikan kepastian posisi tanpa mengharuskan pemain melacak kursor terbang di layar.
2. **Manfaatkan Tombol Pemicu (*Bumper/Trigger Paging*) untuk Organisasi Tab**: Alih-alih menumpuk ratusan opsi dalam satu kanvas raksasa yang menuntut kursor menjelajah dari pojok kiri atas ke kanan bawah, bagi arsitektur menu ke dalam panel-panel tematik yang dapat berpindah mulus menggunakan tombol bahu L1/R1 atau L2/R2 kontroler.
3. **Sediakan Aksesibilitas Kustomisasi Gaya Kendali**: Berikan kebebasan pada menu pengaturan bagi pemain untuk memilih antara navigasi kursor analog atau kisi tombol arah. Studio yang memprioritaskan kenyamanan pengguna harus memperlakukan pengalaman navigasi menu sebagai bagian integral dari pesona sebuah game, bukan sekadar pelengkap administratif yang digarap seadanya.

Video game adalah medium interaktif yang kekuatannya bertumpu pada keintiman genggaman kendali di tangan pemain. Memaksa kontroler konsol berperilaku bagai mouse kantor adalah anomali desain yang merendahkan kematangan tradisi antarmuka konsol dunia.`
  },
  {
    title: "Bahaya Paparan Cahaya Biru dan Notifikasi Larut Malam terhadap Sekresi Melatonin: Mengapa Revenge Bedtime Procrastination Merusak Arsitektur Tidur REM",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Ritme Sirkadian", "Tidur REM", "Kesehatan Saraf", "Melatonin", "Kebugaran"],
    imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kamar tidur bernuansa tenang dengan pencahayaan hangat temaram yang mendukung istirahat malam",
    excerpt: "Kebiasaan begadang demi membalas waktu pribadi lewat scrolling layar smartphone menyimpan bahaya neurobiologis serius. Paparan foton cahaya biru menekan pelepasan hormon melatonin dan merusak tahapan tidur REM yang krusial bagi otak.",
    content: `Setelah seharian penuh terbelenggu oleh tuntutan pekerjaan kantor, target tenggat waktu, dan rutinitas domestik yang melelahkan, malam hari kerap dipandang sebagai satu-satunya waktu luang pribadi yang tersisa. Banyak orang secara sadar menunda waktu tidur mereka hingga larut malam demi menonton serial video, menelusuri lini masa media sosial, atau membaca pesan obrolan di tempat tidur. Fenomena psikologis ini dikenal luas sebagai penundaan tidur balas dendam (*revenge bedtime procrastination*)—sebuah upaya kompensasi bawah sadar untuk merebut kembali kendali atas waktu hidup sendiri.

Namun di balik kenyamanan sesaat scrolling layar di bawah selimut hangat, sistem saraf manusia diam-diam menanggung disrupsi biologis yang parah. Otak manusia berevolusi selama jutaan tahun dengan mengandalkan siklus terang dan gelap alami matahari sebagai orkestrator metabolisme tubuh. Ketika retina mata dihujani foton spektrum cahaya biru bersuhu warna tinggi tepat sebelum tidur, jam biologis sirkadian di dalam hipotalamus tertipu mentah-mentah, mengira bahwa hari masih siang benderang dan seketika menahan produksi hormon tidur alami tubuh.

## Gangguan Fisiologis Akibat Supresi Hormon Melatonin

Paparan cahaya layar smartphone pada malam hari merusak keseimbangan biologis melalui sejumlah tahapan kritis:

* **Blokade Pelepasan Melatonin oleh Kelenjar Pineal**: Sel-sel ganglion retina fotosensitif intrinsik (*ipRGC*) sangat peka terhadap panjang gelombang cahaya biru antara 460 hingga 480 nanometer. Stimulasi gelombang ini mengirimkan sinyal listrik langsung ke nukleus suprakiasmatik (*SCN*), yang kemudian memerintahkan kelenjar pineal untuk menghentikan sekresi hormon melatonin. Ketiadaan lonjakan melatonin membuat rasa kantuk alami tertunda selama berjam-jam, memicu insomnia onset yang melelahkan.
* **Fragmentasi Arsitektur Tidur Gelombang Lambat dan Fase REM**: Kualitas tidur bukan sekadar durasi jam di tempat tidur, melainkan kesinambungan siklus arsitektur tidur. Terhambatnya ritme sirkadian memangkas durasi tidur gelombang lambat (*deep sleep*) dan fase Rapid Eye Movement (REM). Fase REM adalah jendela neurobiologis di mana otak membersihkan residu protein beracun beta-amiloid, mengonsolidasi memori jangka panjang, serta menstabilkan regulasi emosi harian.
* **Kerapuhan Daya Tahan Imun dan Regulasi Glukosa Darah**: Gangguan tidur kronis memicu peningkatan hormon stres kortisol di pagi hari dan menekan sensitivitas sel terhadap insulin. Akibatnya, individu yang rutin begadang di depan layar mengalami lonjakan rasa lapar palsu terhadap makanan berkarbohidrat tinggi, penurunan konsentrasi kognitif, serta peningkatan kerentanan terhadap peradangan sistemik dan infeksi saluran napas.

## Membangun Ritual Pemulihan Malam yang Mendukung Biologi Tubuh

Memulihkan kualitas tidur menuntut kedisiplinan dalam menciptakan batasan tegas antara teknologi digital dan ruang istirahat:

1. **Terapkan Jam Malam Digital (*Digital Curfew*) Satu Jam Sebelum Tidur**: Matikan seluruh perangkat berlayar—smartphone, tablet, dan laptop—setidaknya enam puluh menit sebelum Anda berniat memejamkan mata. Gantilah kebiasaan membaca layar dengan aktivitas analog yang menenangkan saraf, seperti membaca buku fisik, peregangan otot ringan, atau mendengarkan rekaman musik santai.
2. **Karantina Smartphone di Luar Kamar Tidur**: Jangan jadikan smartphone sebagai alarm meja samping tempat tidur. Ketika perangkat berada dalam jangkauan tangan, godaan refleks untuk memeriksa notifikasi saat terbangun di tengah malam akan sangat sulit dilawan. Gunakan jam weker meja konvensional tanpa layar menyala untuk membangunkan Anda di pagi hari.
3. **Pencahayaan Redup Bernuansa Hangat di Area Kamar**: Ganti lampu kamar utama dengan bohlam berspektrum hangat (*warm amber* di bawah 2700 Kelvin) dengan intensitas cahaya rendah. Paparan cahaya temaram merangsang mata untuk memulai sintesis melatonin alami, membantu tubuh memasuki fase kantuk secara bertahap dan alami tanpa bantuan obat penenang kimiawi.

Tidur malam yang berkualitas bukanlah kemewahan pasif yang bisa dikorbankan demi beberapa jam hiburan digital instan, melainkan fondasi biologis mutlak bagi ketahanan mental dan fisik Anda. Menghormati jam sirkadian tubuh adalah wujud penghargaan tertinggi terhadap kesehatan hidup jangka panjang.`
  },
  {
    title: "Bahaya Penggunaan Limiter Agresif pada Tahap Mastering Musik: Mengapa Memaksakan Loudness War Menghancurkan Transien Drum dan Kedalaman Soundstage",
    category: "musik",
    byline: "0100MUNS3DJPWFDDBCE343C11A", // Margaretha Nina
    tags: ["Musik", "Audio Mastering", "Loudness War", "Mixing", "Produksi Musik", "Teknik Audio"],
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Peralatan mastering audio studio profesional dengan indikator level VU meter bercahaya",
    excerpt: "Mengejar angka kenyaringan ekstrem dengan memangkas batas puncak limiter digital kerap dianggap kunci agar musik terdengar kompetitif. Namun pemotongan transien agresif ini justru meratakan dinamika suara, memicu distorsi, dan membuat lagu melelahkan di telinga.",
    content: `Dalam sejarah industri rekaman musik global, fenomena perang kenyaringan (*Loudness War*) telah menjadi perdebatan sengit yang tak kunjung padam selama hampir tiga dekade. Berakar dari anggapan psikologis bahwa trek yang bersuara lebih keras akan seketika terdengar lebih bertenaga dan memikat telinga pendengar awam di radio atau daftar putar komersial, para produser musik berlomba-lomba menekan tombol penguatan input pada plugin brickwall limiter ke batas maksimal. Target angka kenyaringan terintegrasi (*Integrated Loudness*) dipaksa menembus minus enam atau bahkan minus empat LUFS (*Loudness Units Full Scale*), mengorbankan ruang dinamika yang tersisa demi menorehkan gelombang audio berbentuk sosis padat tanpa celah napas.

Namun era platform streaming modern telah mengubah aturan main distribusi musik secara fundamental. Layanan seperti Spotify, Apple Music, YouTube Music, dan Tidal kini secara bawaan menerapkan mekanisme normalisasi kenyaringan otomatis (*Loudness Normalization*) ke target kisaran minus empat belas LUFS. Dampaknya, lagu yang diproduksi dengan kompresi brutal tidak akan diputar lebih keras daripada karya lain; volume keseluruhannya justru akan diturunkan secara otomatis oleh algoritma platform, menyingkap seluruh kelemahan tekstur suara yang telah gepeng dan kehilangan daya hidup musikalnya.

## Rusaknya Ketajaman Pukulan Transien dan Kedalaman Spasial

Memaksa limiter bekerja melampaui batas kewajaran teknis memicu degradasi audio yang merugikan integritas karya seni:

* **Pemenggalan Transien Pukulan Snare dan Kick Drum (*Transient Smearing*)**: Transien awal adalah ledakan energi mikro berdurasi beberapa milidetik yang dihasilkan saat stik drum menghantam kulit membran snare atau beater menabrak kick drum. Transien inilah yang memberi rasa sentakan dada, definisi ritmik, dan artikulasi pada musik. Ketika limiter digital memotong puncak transien ini secara agresif demi mengejar desibel rata-rata, suara drum kehilangan ketajaman pukulannya (*punch*), berubah menjadi bunyi letukan tumpul yang tenggelam di balik dinding instrumen lain.
* **Kemunculan Distorsi Puncak Antar-Sampel (*Inter-Sample Peak Clipping*)**: Indikator meter digital di workstation audio hanya mengukur nilai sampel diskrit pada titik kuantisasi tertentu. Namun ketika sinyal digital yang dimaksimalkan tersebut dikonversi kembali ke bentuk gelombang analog oleh chip DAC di headphone atau speaker pendengar, rekonstruksi kurva gelombang melompat melampaui batas nol desibel (*true peak clipping*). Hal ini menimbulkan distorsi harmonik kasar yang membuat vokal terdengar serak dan cymbal terdengar berdengung menyakitkan telinga.
* **Kolapsnya Kedalaman Panggung Suara (*Soundstage Flattening*)**: Persepsi pendengar terhadap kedalaman ruang tiga dimensi—jarak antara instrumen yang berada di depan dekat telinga versus elemen yang berada di latar belakang—terbangun melalui variasi kontras mikro-dinamika. Ketika seluruh instrumen dipaksa memiliki volume keras yang seragam sepanjang durasi lagu, ilusi kedalaman ruang seketika lenyap; musik terdengar datar, padat membosankan, dan memicu kelelahan indra dengar (*listener fatigue*) hanya dalam waktu beberapa menit.

## Presisi Penataan Dinamika di Era Normalisasi Kenyaringan

Meraih rekaman musik yang bertenaga tanpa mengorbankan kejernihan artikulasi menuntut kedewasaan teknik penataan dinamika:

1. **Fokuskan Keseimbangan Frekuensi dan Kontrol Dinamika di Tahap Mixing**: Jangan pernah membebankan perbaikan instrumen yang saling bertabrakan kepada limiter di saluran master. Bereskan masalah energi frekuensi rendah yang berlebih (*muddy low-end*), kendalikan transien drum liar menggunakan kompresor bus berbasis VCA dengan rasio lembut (1.5:1 atau 2:1), dan gunakan pemotongan saturasi lembut (*soft clipping*) secara bertahap pada masing-masing trek terpisah sebelum sinyal mencapai master bus.
2. **Manfaatkan True Peak Limiting dengan Margin Headroom Aman**: Pasang target true peak ceiling minimal pada minus satu desibel (-1.0 dBFS) atau minus dua desibel (-2.0 dBFS) jika trek Anda akan dikodekan ke format lossy seperti MP3 atau AAC. Margin aman ini mencegah munculnya distorsi harmonik tidak diinginkan saat rekaman dikompresi oleh server distribusi streaming.
3. **Pertahankan Rentang Dinamika Alami (*Crest Factor*) demi Energi Fisikal**: Biarkan transien drum bernapas dengan mempertahankan rentang dinamika yang sehat (kisaran 8 hingga 12 dB antara level puncak dan level RMS). Ketika platform streaming menormalkan trek Anda, lagu yang mempertahankan transien tajam justru akan terdengar jauh lebih dinamis, jernih, dan menonjol dibandingkan rekaman pesaing yang gepeng tercekik limiter.

Kekuatan sejati sebuah aransemen musik tidak lahir dari seberapa keras volume sinyal elektrik yang dihantamkan ke gendang telinga, melainkan dari tarian dinamis antara jeda hening dan ledakan ritme yang membangkitkan emosi jiwa pendengar.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 08:00 WIB (5 NOV 2026) - ${articles.length} ARTIKEL ===\n`);
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

  console.log("\n=== SELURUH BATCH 08:00 WIB (5 NOV 2026) BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261105-0800.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
