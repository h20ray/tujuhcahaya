import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Bahaya Ekstensi Browser yang Diam-diam Berganti Kepemilikan: Mengapa Alat Bantu Populer Kerap Berubah Menjadi Spyware Penguras Data",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Keamanan Siber", "Browser", "Ekstensi Browser", "Privasi Digital", "Malware"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Tampilan kode keamanan siber dan perlindungan privasi data pada layar monitor komputer",
    excerpt: "Banyak pengguna browser memasang ekstensi pemblokir iklan atau pengunduh video terpercaya lalu melupakannya selama bertahun-tahun. Namun tren akuisisi rahasia oleh broker data tak bertanggung jawab diam-diam mengubah ekstensi favorit Anda menjadi mesin penyedot riwayat berselancar.",
    content: `Bagi sebagian besar pengguna internet modern, ekstensi peramban atau *browser extension* adalah perkakas wajib yang tak terpisahkan dari rutinitas harian. Mulai dari pemblokir iklan agresif, pengoreksi tata bahasa otomatis, hingga alat tangkap layar satu klik, ekstensi memberikan kekuatan kustomisasi yang membuat pengalaman berselancar terasa jauh lebih efisien. Reputasi bintang lima di Chrome Web Store atau Firefox Add-ons dengan jutaan unduhan kerap menjadi jaminan instan bahwa sebuah ekstensi aman dipasang dan dibiarkan berjalan di latar belakang peramban kita.

Namun kenyamanan tersebut menyimpan celah rantai pasok (*software supply chain*) yang kian dieksploitasi pelaku industri abu-abu. Membangun ekstensi berkualitas tinggi menuntut waktu dan biaya perawatan server yang tidak sedikit, sementara sebagian besar pengembang independen menyediakannya secara gratis tanpa model monetisasi yang berkelanjutan. Ketika pengembang asli mulai jenuh merawat proyek hobinya atau tergiur tawaran uang tunai ratusan juta rupiah dari entitas korporasi asing anonim, kepemilikan ekstensi berpindah tangan di balik layar tanpa pemberitahuan apa pun kepada basis pengguna setianya.

## Rantai Pembajakan Halus Lewat Pembaruan Otomatis

Modus pengambilalihan ekstensi populer untuk keperluan pengawasan komersial bekerja melalui mekanisme yang terstruktur rapi:

* **Pembaruan Senyap Tanpa Pemicu Izin Baru**: Arsitektur peramban modern dirancang untuk memperbarui ekstensi secara otomatis di latar belakang tanpa meminta konfirmasi pengguna, selama pembaruan tersebut tidak meminta izin akses (*permissions*) baru di luar cakupan lama. Jika ekstensi sejak awal sudah mengantongi izin luas seperti membaca data di seluruh situs yang Anda kunjungi (*read and change all your data on all websites*), pemilik baru dapat menyuntikkan skrip pelacak berbahaya (*telemetry injector*) ke dalam pembaruan berkala tanpa memicu alarm keamanan sedikit pun.
* **Pencurian Token Sesi dan Pembajakan Cookie Autentikasi**: Setelah kode berbahaya aktif, ekstensi dapat menyadap data formulir, merekam penekanan tombol (*keystroke logging*), mencuri token sesi login perbankan atau email, hingga menyuntikkan tautan afiliasi terselubung ke setiap hasil pencarian yang Anda buka. Data penjelajahan ini kemudian dikemas rapi dan dikirim ke server broker data pihak ketiga untuk diperjualbelikan demi target periklanan invasif.
* **Kamuflase Jeda Waktu (*Delayed Execution*)**: Pembeli ekstensi biasanya tidak langsung menyuntikkan kode berbahaya sesaat setelah transaksi jual-beli rampung. Mereka menunggu beberapa bulan dengan merilis pembaruan perbaikan *bug* minor untuk memupuk kepercayaan sistem audit toko aplikasi, sebelum akhirnya mengaktifkan fungsi mata-mata secara bertahap ke sebagian kecil target populasi pengguna.

## Membentengi Peramban dari Ekstensi Siluman

Mempertahankan integritas privasi digital menuntut kewaspadaan berkala terhadap ekosistem perkakas yang terpasang di komputer Anda:

1. **Batasi Akses Ekstensi Hanya pada Situs Tertentu**: Jangan berikan izin akses permanen ke seluruh situs web (*on all sites*). Manfaatkan fitur kontrol izin peramban untuk menyetel ekstensi agar hanya aktif ketika ikonnya diklik secara manual (*on click*), atau batasi operasinya hanya pada domain yang benar-benar relevan.
2. **Lakukan Audit dan Pembersihan Berkala**: Buka menu manajer ekstensi setiap beberapa bulan sekali. Hapus seluruh ekstensi yang sudah jarang Anda gunakan atau yang tidak lagi menerima pembaruan dari pengembang aslinya, karena ekstensi terbengkalai adalah target empuk peretasan kredensial akun toko peramban.
3. **Prioritaskan Proyek Sumber Terbuka Terverifikasi**: Pilihlah ekstensi yang basis kodenya dipublikasikan secara transparan di repositori publik dan memiliki komunitas audit independen yang aktif, bukan perkakas *proprietary* yang kepemilikan korporasinya tidak jelas asal-usulnya.

Ekstensi peramban memiliki hak istimewa yang sangat intim dalam membaca denyut nadi aktivitas digital kita. Tanpa kewaspadaan aktif menyaring siapa yang mengendalikan kode di balik layar, jalan pintas kemudahan berselancar yang kita nikmati hari ini bisa berubah menjadi jendela pengawasan yang menelanjangi privasi kita sendiri.`
  },
  {
    title: "Tirani Kamera Over-the-Shoulder Terlalu Ketat pada Game Aksi: Mengapa Sudut Pandang Sinematik Mengorbankan Refleks dan Kesadaran Spasial",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Desain Game", "Kamera Game", "Mekanik Game", "Game Aksi", "Industri Game"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Konsol permainan video dan pengontrol stik modern di atas meja bernuansa futuristik",
    excerpt: "Demi mengejar estetika sinematik ala film Hollywood, game aksi modern memangkas luas pandang pemain dengan kamera over-the-shoulder yang sangat menempel di punggung karakter. Akibatnya, refleks murni pemain digantikan oleh indikator tanda panah artifisial.",
    content: `Industri game arus utama selama satu dekade terakhir tampak terobsesi dengan satu tujuan estetika: mengaburkan batas antara permainan interaktif dan film sinematik layar perak. Ambisi ini melahirkan grafis fotorealistis dengan tangkapan gerak (*motion capture*) kelas atas dan pencahayaan dramatis. Namun demi menghadirkan sensasi emosional yang intim layaknya menonton film laga, studio-studio besar mengambil keputusan desain yang mengorbankan fondasi kenyamanan bermain: menempatkan sudut pandang kamera tepat di belakang bahu karakter (*over-the-shoulder*) dengan sudut pandang (*field of view*) yang teramat sempit.

Ketika kamera ditarik begitu dekat hingga punggung karakter memenuhi sepertiga layar televisi, pemain memang disuguhi detail jahitan rompi zirah dan tetesan keringat sang jagoan. Namun dalam konteks game aksi berkecepatan tinggi, kompromi visual ini merupakan malapetaka bagi kesadaran spasial (*spatial awareness*). Pemain seketika kehilangan kemampuan alami untuk membaca medan pertempuran, mengantisipasi manuver musuh dari arah samping, atau sekadar menikmati keleluasaan manuver akrobatik di ruang terbuka.

## Indikator Serangan Artifisial Sebagai Penambal Cacat Desain

Penyempitan sudut pandang kamera memicu efek domino yang merusak kemurnian interaksi refleks pemain:

* **Ketergantungan pada UI Indikator Ancaman (*Off-Screen Warning UI*)**: Sadar bahwa pemain tidak mungkin melihat monster yang mengayunkan gada dari arah belakang akibat kamera yang terlalu mepet, pengembang terpaksa menambal cacat tersebut dengan menyematkan antarmuka peringatan artifisial. Layar dipenuhi busur panah menyala, kilatan warna merah, atau teriakan karakter pendamping yang memberi tahu kapan harus menekan tombol berguling. Alih-alih mengamati gerakan tubuh musuh secara organik, pemain justru dipaksa bermain layaknya menatap lampu indikator dasbor mobil.
* **Pergerakan Karakter yang Terasa Lamban dan Kaku**: Agar kamera tidak memicu mual visual saat pemain berbelok tajam, pengembang kerap memperberat bobot kendali fisik karakter (*inertia*). Sudut putar karakter diperlambat, animasi serangan dikunci dalam poros lurus, dan sensasi kelincahan bermain tergantikan oleh kendali karakter yang terasa berat seperti mengemudikan traktor lapis baja.
* **Matinya Desain Pertarungan Multi-Arah yang Adil**: Game aksi klasik seperti Devil May Cry atau Ninja Gaiden menempatkan kamera di sudut pandang yang cukup jauh dan tinggi, memungkinkan pemain membaca posisi puluhan musuh sekaligus secara adil. Sebaliknya, kamera *over-the-shoulder* ketat memaksa pertempuran berubah menjadi duel satu lawan satu yang dipaksakan (*magnetic lock-on*), di mana musuh lain di luar pandangan kamera hanya berdiri pasif menunggu giliran menyerang.

## Mengembalikan Kedaulatan Spasial Pemain

Menciptakan game aksi yang memuaskan menuntut keberanian tim desainer untuk mendahulukan kejernihan mekanik di atas pretensi sinematik:

1. **Sediakan Opsi Pengaturan Field of View (FOV) yang Luwes**: Berikan kebebasan bagi pemain di konsol maupun PC untuk memperlebar sudut pandang kamera sesuai kenyamanan mata mereka, bukan menguncinya di angka sempit 65 atau 70 derajat demi mempertahankan target framerate grafis.
2. **Terapkan Dinamika Kamera Adaptif**: Tarik kamera menjauh ke atas secara mulus saat pertarungan intens melawan banyak musuh dimulai, dan baru dekatkan kembali kamera ke bahu karakter saat momen eksplorasi naratif atau interaksi teka-teki tenang.
3. **Percayai Kepekaan Visual Pemain Tanpa Pop-Up Menyilaukan**: Desainlah gerak animasi ancaman musuh dengan isyarat audio (*audio cues*) dan bayangan visual yang terbaca alami di lingkungan sekitar, sehingga kemenangan lahir dari refleks mata pemain, bukan dari respons membaca panah grafis di layar.

Game adalah media interaktif yang denyut keindahannya terletak pada kendali penuh dan responsivitas jemari. Membatasi ruang pandang pemain demi ilusi sinema hanya akan menyisakan rasa frustrasi di balik bungkus visual yang tampak megah dari kejauhan.`
  },
  {
    title: "Bahaya Duduk Bersandar Kaku 90 Derajat Sepanjang Hari: Mengapa Posisi yang Dianggap Tegak Ideal Justru Membebani Diskus Tulang Belakang",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Ergonomi", "Postur Tubuh", "Tulang Belakang", "Nyeri Punggung", "Gaya Hidup Sehat"],
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang duduk bekerja di meja kantor dengan laptop dan penataan ergonomis kursi kerja",
    excerpt: "Sejak bangku sekolah, kita diajarkan bahwa duduk tegak lurus 90 derajat adalah lambang postur sempurna. Namun penelitian radiologis modern membuktikan bahwa duduk kaku 90 derajat justru memberikan tekanan hidrolik tertinggi pada bantalan diskus tulang belakang.",
    content: `Sejak usia dini di bangku sekolah dasar, sebagian besar dari kita didoktrin dengan nasihat postur yang sama: duduklah dengan tegak lurus sempurna, tarik bahu ke belakang, dan jangan pernah membungkuk. Gambaran seseorang yang duduk membentuk sudut 90 derajat antara paha dan torso tubuh telah lama dipromosikan sebagai lambang disiplin fisik dan postur ideal bagi pekerja kantoran. Di ruang kerja modern, para pekerja urban rela merogoh kocek belasan juta rupiah demi membeli kursi kerja ergonomis, lalu menguncinya dalam posisi tegak 90 derajat dengan keyakinan bahwa punggung mereka akan terlindungi dari ancaman saraf terjepit.

Namun pandangan ortopedis konvensional tersebut kini terbantahkan oleh bukti pencitraan resonansi magnetik (*MRI*) berposisi dinamis. Duduk mematung dalam sudut tegak lurus 90 derajat dalam durasi berjam-jam bukanlah posisi netral bagi anatomi manusia. Secara biomekanika, postur kaku ini justru memaksa tulang belakang lumbar menahan tekanan beban aksial yang jauh lebih berat dibanding posisi duduk bersandar santai dengan sudut kemiringan alami.

## Biomekanika Tekanan Intradiskal dan Kelelahan Otot Lumbar

Menahan sudut 90 derajat secara statis memicu rangkaian kompensasi fisik yang merugikan bantalan tulang belakang:

* **Lonjakan Tekanan Hidrolik pada Diskus L4-L5**: Penelitian radiologis yang dipelopori para pakar ortopedi di Inggris dan Kanada menunjukkan bahwa duduk tegak 90 derajat menghasilkan beban tekanan intradiskal terbesar pada bantalan tulang rawan (*intervertebral disc*) di area lumbar bawah. Tekanan internal ini memeras cairan hidrolik alami keluar dari bantalan diskus, mempercepat proses degenerasi aus dini, dan melipatgandakan risiko herniasi nukleus pulposus (*sciatica*).
* **Spasme Otot Erector Spinae Akibat Kontraksi Isometrik**: Untuk mempertahankan torso tetap tegak tanpa sandaran miring, kelompok otot penegak punggung bawah (*erector spinae*) dipaksa berkontraksi secara isometrik tanpa henti. Setelah dua puluh menit bekerja, aliran oksigen ke serabut otot mulai terhambat oleh penumpukan asam laktat, memicu rasa pegal menyiksa, kaku leher, dan tegang di pangkal bahu.
* **Perataan Kurva Alami Lordosis Tulang Belakang**: Kurvatur lordosis alami pada punggung bawah berfungsi layaknya pegas elastis yang meredam guncangan beban gravitasi tubuh. Duduk kaku 90 derajat cenderung menarik panggul berputar ke belakang (*posterior pelvic tilt*), meratakan kelengkungan lordosis menjadi garis datar yang rapuh terhadap benturan aksial harian.

## Menata Kebiasaan Duduk Dinamis yang Membebaskan Punggung

Menjaga kesehatan sistem muskuloskeletal di depan meja kerja menuntut pergeseran paradigma dari postur kaku menuju ergonomi dinamis:

1. **Condongkan Sandaran Kursi ke Sudut 110 Hingga 135 Derajat**: Penyelidikan ilmiah membuktikan bahwa posisi duduk dengan sandaran punggung condong ke belakang antara 110 hingga 135 derajat secara dramatis menurunkan tekanan beban pada diskus lumbar. Sandaran kursi akan menopang sebagian besar bobot tubuh bagian atas, mendistribusikan beban secara merata ke seluruh struktur tulang.
2. **Gunakan Penopang Lekuk Pinggang (*Lumbar Support*) yang Pas**: Pastikan tonjolan bantal kursi menempel tepat di lekukan pinggang bawah Anda untuk mempertahankan kurva lordosis alami tanpa perlu mengerahkan tenaga otot perut atau punggung secara paksa.
3. **Terapkan Prinsip Postur Duduk Dinamis (*Dynamic Sitting*)**: Postur terbaik sesungguhnya adalah postur yang terus berganti. Ubah posisi duduk Anda setiap setengah jam sekali: bersandar santai saat membaca dokumen, condong sedikit ke depan saat mengetik intensif, dan berdirilah untuk meregangkan sendi pinggul minimal dua menit setiap satu jam.

Tubuh manusia diciptakan melalui rancangan evolusi gerak aktif, bukan struktur semen yang harus dibekukan dalam satu sudut geometri kaku. Memberikan ruang bagi tulang belakang untuk bernapas dan bersandar secara alami adalah investasi terbaik bagi produktivitas kerja jangka panjang.`
  },
  {
    title: "Kepunahan Dinamika Bassline Akustik di Era Gelombang Sub-Bass 808: Ketika Karakter Petikan Dawai Disingkirkan Dentuman Sintetis Monoton",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Produksi Musik", "Bassline", "Audio", "Aransemen", "Industri Musik"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Alat musik bass dan peralatan rekaman suara di dalam studio produksi musik",
    excerpt: "Dominasi sampel sub-bass 808 pada lagu-lagu pop dan hip-hop modern berhasil menggetarkan subwoofer mobil dan headphone pendengar. Namun standarisasi gelombang sinus mono ini memusnahkan artikulasi dinamis dan tekstur petikan bass nyata dari panggung rekaman.",
    content: `Di era kejayaan musik funk, soul, motown, hingga rock progresif pada paruh kedua abad ke-20, garis bas (*bassline*) adalah jiwa tak kasat mata yang menjembatani ketukan drum dan harmoni vokal. Dari sentuhan jari James Jamerson yang sarat nada gesek senar hangat, petikan lincah slap-bass Marcus Miller, hingga aksen melodi dinamis Paul McCartney, instrumen bas elektrik dan kontrabas akustik dimainkan dengan mikro-dinamika yang kaya rasa. Setiap perbedaan tekanan ujung jemari musisi melahirkan perubahan warna timbre (*tone color*), menghasilkan alur irama yang bernapas dan membuat tubuh pendengar tergerak berdansa secara instinktif.

Namun lanskap produksi musik komersial satu dekade terakhir memperlihatkan pergeseran sonik yang teramat drastis. Masuknya era perangkat lunak DAW (*digital audio workstation*) dan dominasi tren musik trap di tangga lagu dunia telah meminggirkan instrumen bass nyata ke sudut museum rekaman. Ruang frekuensi rendah kini hampir sepenuhnya dikuasai oleh satu formula seragam: sampel gelombang sinus distorsi dari mesin drum elektronik klasik Roland TR-808, atau yang lebih dikenal secara luas sebagai instrumen sub-bass 808.

## Distorsi Harmoni Akibat Monokultur Frekuensi Rendah

Popularitas instrumen sub-bass sintetis yang seragam membawa konsekuensi hilangnya keberagaman musikalitas aransemen:

* **Melenyapkan Nuansa Artikulasi (*Micro-Dynamics*) dan Karakter Kayu**: Bas elektrik menghasilkan resonansi nada kompleks berkat interaksi fisik antara petikan jari, tegangan senar nikel, getaran pickup magnetik, dan kayu badan instrumen. Sebaliknya, nada bass 808 adalah gelombang sinus murni terkompresi yang datar. Ketiadaan aksen *ghost notes*, gesekan fret, dan variasi dinamika volume membuat fondasi ritme musik terdengar steril dan mekanis layaknya deruman mesin pabrik.
* **Mempersempit Ruang Eksplorasi Progresi Akord**: Sifat gelombang sub-bass 808 yang memiliki ekor dengung frekuensi ultra-rendah (30 Hz hingga 60 Hz) sangat memakan ruang energi di saluran mastering. Jika produser mencoba memasukkan melodi bas yang meliuk-liuk atau progresi akord yang padat, frekuensi tersebut akan seketika bertabrakan dan menghasilkan distorsi keruh (*muddy mix*). Akibatnya, produser terpaksa menyederhanakan struktur lagu menjadi hanya satu atau dua nada akar (*root notes*) yang ditahan datar sepanjang lagu.
* **Homogenisasi Produksi Musik Demi Speaker Smartphone**: Karena speaker mungil ponsel pintar tidak mampu memproduksi spektrum frekuensi di bawah 100 Hz, para produser musik modern menyuntikkan harmonik saturasi buatan (*saturation/distortion*) ke sampel 808 agar tetap terdengar berisik di earphone murah. Hasilnya adalah gelombang dengung monoton yang identik di hampir setiap rilisan lagu pop baru.

## Memulihkan Denyut Jiwa Organik pada Frekuensi Rendah

Menghidupkan kembali kedalaman aransemen musik menuntut keberanian produser untuk merajut kembali kekayaan instrumen organik:

1. **Kombinasikan Tekstur Bas Elektrik Riil dengan Lapisan Sub-Sintetis (*Hybrid Layering*)**: Produser cerdas tidak perlu anti terhadap teknologi modern; gunakan bas dawai nyata untuk mengisi spektrum frekuensi menengah-rendah (100 Hz hingga 500 Hz) demi mendapatkan aksen petikan dan karakter manusia, sementara frekuensi ultra-bawah dikunci dengan gelombang sinus bersih.
2. **Berikan Ruang Bernapas pada Aransemen Vokal dan Melodi**: Jangan biarkan dengung bas memenuhi setiap ketukan birama. Berikan jeda hening (*space and rest*) agar instrumen lain memiliki ruang resonansi akustik yang jernih di panggung pementasan suara (*soundstage*).
3. **Hargai Kembali Keahlian Musisi Sesi (*Session Bassist*)**: Mengundang pemain bas berpengalaman ke dalam studio rekaman menghadirkan spontanitas groove dan kepekaan rasa yang mustahil disamai oleh deretan balok MIDI di layar monitor komputer.

Musik bukan sekadar getaran desibel keras yang mengguncang kaca jendela mobil. Esensi musik sejati selalu bermula dari sentuhan emosional manusia yang mengalir lewat petikan dawai, menghidupkan setiap ruang frekuensi dengan jiwa dan kehangatan yang tak lekang oleh zaman.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 20:00 WIB (4 NOV 2026) - ${articles.length} ARTIKEL ===\n`);
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

  console.log("\n=== SELURUH BATCH 20:00 WIB (4 NOV 2026) BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261104-2000.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
