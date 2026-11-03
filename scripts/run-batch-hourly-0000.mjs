import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Bahaya Fitur WebUSB dan WebHID di Browser: Bagaimana Halaman Web Asing Mampu Membaca Perangkat Keras Komputer Anda Tanpa Instalasi Driver",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Keamanan Siber", "Browser", "Hardware", "Privasi Digital", "Perangkat Lunak"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Matriks kode digital dan koneksi hardware siber bercahaya hijau",
    excerpt: "Dahulu browser dibatasi dalam sandbox ketat yang mustahil menyentuh fisik colokan USB komputer. Kini kehadiran API WebUSB dan WebHID membuka pintu bagi situs web jahat untuk berkomunikasi langsung dengan perangkat keras eksternal tanpa verifikasi sistem operasi.",
    content: `Selama bertahun-tahun, prinsip utama keamanan komputer modern berpegang teguh pada isolasi lingkungan peramban (*browser sandbox*). Skrip JavaScript yang dieksekusi di dalam tab peramban diperlakukan layaknya tamu asing di balik kaca tebal: ia bebas merender teks dan gambar di layar, namun sama sekali diharamkan menyentuh berkas sistem operasi atau membaca perangkat keras fisik yang tertancap di papan induk komputer Anda. Bila sebuah perangkat USB butuh berkomunikasi dengan sistem, pengguna wajib mengunduh driver resmi berlisensi dan memberikan izin administrator secara sadar.

Namun benteng pertahanan paling mendasar tersebut kini telah dilubangi dari dalam demi dalih kemudahan aplikasi web modern. Melalui standarisasi antarmuka pemrograman aplikasi seperti *WebUSB* dan *WebHID* (*Human Interface Device*) yang digulirkan oleh konsorsium Chromium, sebuah halaman web kini dapat meminta akses komunikasi biner dua arah langsung ke periferal fisik yang tersambung di port USB komputer Anda cukup dengan sebuah jendela konfirmasi pop-up yang mudah mengecoh pengguna awam.

## Membobol Pertahanan Lapisan Fisik dari Jendela Tab

Bahaya laten dari API antarmuka perangkat keras web ini membuka vektor serangan siber jenis baru yang jauh melampaui pencurian kuki biasa:

* **Manipulasi Firmware Periferal Tanpa Restu Sistem Operasi**: Melalui instruksi WebUSB mentah, situs web berbahaya yang berhasil membujuk pengguna mengklik tombol otorisasi dapat mengirimkan perintah kilat (*raw packets*) langsung ke mikrokontroler perangkat USB. Peretas mampu menimpa firmware keyboard mekanis, dongle nirkabel, atau mouse pintar dengan kode berbahaya (*malicious payload*) yang mengubah aksesori fisik Anda menjadi perangkat pengetik otomatis (*BadUSB*) permanen.
* **Penyedotan Kunci Keamanan Perangkat Keras (Hardware Wallets)**: Celah WebHID dan WebUSB secara historis telah beberapa kali dieksploitasi oleh situs penipuan (*phishing*) kripto palsu. Dengan menyamar sebagai antarmuka bursa pertukaran resmi, skrip jahat mencoba mengirimkan permintaan tanda tangan transaksi berbahaya langsung ke layar dompet perangkat keras (*hardware wallet*) yang sedang tertancap di komputer.
* **Pelacakan Perangkat Keras Akurat (Hardware Fingerprinting)**: Setiap perangkat USB memancarkan identitas vendor (*Vendor ID*) dan nomor seri unik (*Serial Number*). Mengakses metadata ini memungkinkan jaringan periklanan jahat melacak identitas fisik komputer Anda secara presisi melintasi berbagai browser dan jaringan VPN, meruntuhkan seluruh perlindungan mode penyamaran (*incognito mode*).

## Menutup Pintu Akses Perangkat Keras di Peramban Anda

Menjaga kedaulatan perangkat keras komputer Anda menuntut penegakan izin keamanan yang ketat:

1. **Nonaktifkan Izin WebUSB dan WebHID Secara Default**: Buka menu setelan privasi dan keamanan di peramban Anda, cari bagian setelan situs (*Site Settings*), lalu ubah izin untuk perangkat USB dan perangkat HID menjadi "Jangan izinkan situs meminta akses ke perangkat".
2. **Waspadai Pop-up Permintaan Akses Perangkat Eksternal**: Jangan pernah menekan tombol "Hubungkan" atau "Izinkan" pada dialog kotak USB peramban kecuali Anda sedang menggunakan perkakas pemulihan firmware terpercaya dari produsen resmi perangkat keras Anda.
3. **Gunakan Peramban Berorientasi Privasi yang Membatasi API Berbahaya**: Pertimbangkan menggunakan peramban independen seperti Firefox yang secara tegas menolak mengimplementasikan spesifikasi WebUSB karena memandangnya sebagai ancaman keamanan arsitektur web yang terlalu berisiko.

Port USB di komputer Anda adalah gerbang fisik langsung menuju jantung sirkuit mesin Anda. Jangan gadaikan benteng pertahanan tersebut hanya demi kemudahan antarmuka web yang sejatinya tak pernah berhak menyentuh kabel perangkat Anda.`
  },
  {
    title: "Tirani Ukuran Game Menembus Ratusan Gigabyte: Mengapa Penerbit Malas Mengompresi Aset Tekstur Mentah dan Memeras Kapasitas SSD Konsol",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Industri Game", "SSD Konsol", "PC Gaming", "Optimasi Game", "Penyimpanan Digital"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Konsol gaming dan drive SSD dengan pencahayaan neon bernuansa futuristik",
    excerpt: "Mengunduh sebuah game aksi modern kini menuntut pengorbanan ruang simpan hingga seratus lima puluh gigabyte. Fenomena ini bukan semata cerminan grafis ultra-realistis, melainkan cermin kemalasan penerbit mengompresi aset tekstur dan suara multi-bahasa.",
    content: `Membeli game aksi petualangan terbaru beranggaran raksasa (*AAA*) di era konsol modern tidak lagi menghadirkan sensasi kenikmatan instan seperti sepuluh tahun silam. Ketika Anda menekan tombol unduh di etalase toko digital, layar unduhan seketika menampilkan angka yang mencengangkan: seratus dua puluh gigabyte, seratus lima puluh gigabyte, bahkan ada judul game tembak-menembak populer yang rakus menelan hingga dua ratus lima puluh gigabyte ruang penyimpanan. Di hadapan kapasitas penyimpanan bawaan konsol modern yang rata-rata hanya menyisakan enam ratus gigabyte ruang kosong efektif, memasang tiga game saja sudah cukup untuk melumpuhkan seluruh kapasitas mesin Anda.

Narasi pemasaran korporat kerap berdalih bahwa pembengkakan ukuran ini adalah konsekuensi tak terelakkan dari resolusi grafis 4K dan kesetiaan visual fotorealistis generasi baru. Namun di kalangan insinyur perangkat lunak dan komunitas modifikasi independen, ledakan ukuran data game ini sesungguhnya adalah bukti nyata dari krisis optimasi aset dan kemalasan penerbit memangkas limbah komputasi digital.

## Dapur Produksi yang Boros Ruang Simpan

Di balik berkas raksasa yang menyiksa kuota internet gamer, tersimpan praktik rekayasa perangkat lunak yang serampangan:

* **Penyertaan Paket Audio Multi-Bahasa Tanpa Opsi Pemilahan**: Banyak penerbit memaksakan unduhan file audio rekaman suara aktor untuk dua belas bahasa berbeda sekaligus dalam satu paket berkas utama tanpa kompresi. Pemain di Indonesia yang hanya membutuhkan teks bahasa Inggris dan suara asli Jepang terpaksa mengunduh puluhan gigabyte data suara bahasa Jerman, Prancis, Spanyol, dan Italia yang tidak akan pernah mereka dengarkan.
* **Tekstur Resolusi Tinggi Mentah Tanpa Kompresi Cerdas**: Demi memangkas waktu pemrosesan (*build pipeline*) sebelum tanggal tenggat rilis yang ketat, pengembang kerap memasukkan berkas tekstur mentah beresolusi raksasa tanpa menggunakan algoritma kompresi tekstur modern (*BC7* atau *Kraken*). Aset lingkungan 3D yang hanya terlihat dari kejauhan sering kali memiliki resolusi yang sama besarnya dengan model karakter utama.
* **Duplikasi Aset demi Mengatasi Keterlambatan Waktu Baca**: Warisan arsitektur game masa lalu yang menduplikasi objek yang sama ratusan kali demi mempercepat pembacaan cakram optik magnetik masih sering terbawa ke era penyimpanan berbasis solid-state drive (*SSD*), menciptakan tumpukan sampah data duplikat yang mubazir.

## Menuntut Hak Modularitas dan Efisiensi Penyimpanan

Kapasitas penyimpanan solid-state drive Anda berharga mahal dan tidak boleh diperlakukan layaknya tempat pembuangan sampah aset mentah:

1. **Wajibkan Sistem Pemasangan Modular (*Modular Installation*)**: Pengembang game wajib memberikan kebebasan bagi pemain untuk memilih hanya memasang mode cerita pemain tunggal (*single-player*), membuang aset grafis 4K jika hanya bermain di monitor 1080p, dan menghapus paket suara bahasa asing yang tidak digunakan.
2. **Dukung Studio yang Menerapkan Teknologi Kompresi Mutakhir**: Berikan apresiasi kepada pengembang independen dan studio brilian yang berhasil merilis game dunia terbuka masif berdurasi puluhan jam dengan ukuran kurang dari tiga puluh gigabyte berkat keahlian kompresi prosedural yang elegan.
3. **Kritisi Kebijakan Penerbit yang Mengabaikan Optimasi Patch**: Jangan ragu menyuarakan protes di etalase ulasan digital ketika sebuah pembaruan kecil bernilai sepuluh megabyte memaksa pemain mengunduh ulang berkas basis data berukuran empat puluh gigabyte.

Karya seni video game yang bermutu tinggi dibangun dengan presisi mekanika dan disiplin rekayasa kode yang anggun. Jangan biarkan arogansi penerbit yang malas melakukan kompresi data merampas keleluasaan ruang simpan komputer dan konsol bermain Anda.`
  },
  {
    title: "Bahaya Kebiasaan Menatap Layar Ponsel Sambil Berjalan Kaki: Mengapa Posisi Tertunduk Membebani Leher Setara Menahan Beban Dua Puluh Tujuh Kilogram",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Ergonomi", "Postur Tubuh", "Text Neck", "Kesehatan Tulang Belakang", "Gaya Hidup"],
    imageUrl: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang memegang smartphone di jalan setapak perkotaan dengan postur menatap layar",
    excerpt: "Menundukkan kepala menatap linimasa media sosial sambil melangkah di trotoar telah menjadi pemandangan jamak di perkotaan. Namun biomekanika sendi membuktikan sudut kemiringan enam puluh derajat menumpuk beban setara karung beras pada ruas leher Anda.",
    content: `Melangkah di sepanjang trotoar jalan perkotaan, menyusuri lorong stasiun kereta bawah tanah, atau menyeberang di zebra cross, pemandangan manusia berjalan dengan leher tertunduk kaku menatap layar smartphone adalah pemandangan lumrah di zaman sekarang. Jemari kita lincah membalas pesan obrolan singkat, menggulir linimasa berita kilat, atau menonton video vertikal sembari langkah kaki menapak jalanan secara otomatis layaknya manusia tanpa jiwa.

Di balik kenyamanan memecah konsentrasi tersebut, kebiasaan menatap layar sambil berjalan kaki menyimpan ancaman kehancuran biomekanika leher yang sangat mengerikan. Secara anatomis, kepala manusia dewasa memiliki bobot rata-rata sekitar lima kilogram saat berada dalam posisi tegak sejajar dengan garis gravitasi bumi. Namun hukum pengungkit fisika pada persendian tubuh bekerja tanpa ampun begitu sudut kemiringan leher ditekuk ke arah depan.

## Hukum Tuas Biomekanika dan Sindrom Text Neck

Tekanan mekanis yang ditanggung oleh ruas tulang leher servikal meningkat secara eksponensial seiring bertambahnya sudut lekukan kepala:

* **Lonjakan Beban Menembus Dua Puluh Tujuh Kilogram**: Berdasarkan riset biomekanika tulang belakang, menundukkan kepala pada sudut enam puluh derajat—posisi standar saat membaca layar ponsel di bawah pandangan dada—melipatgandakan beban gravitasi pada tulang leher servikal hingga setara dengan menahan beban seberat dua puluh tujuh kilogram. Beban ini persis setara dengan memikul anak berusia delapan tahun atau menumpuk karung beras di atas pundak Anda sepanjang perjalanan.
* **Degradasi Bantalan Cakram Tulang Leher (Cervical Disc Herniation)**: Tekanan kompresi kronis yang berlangsung terus-menerus mengikis bantalan cakram tulang rawan antar-ruas tulang leher. Cairan gelatin di dalam cakram dapat terdorong keluar menonjol ke saluran saraf spinalis, memicu rasa nyeri tajam yang menjalar ke bahu, mati rasa pada ujung jemari tangan, hingga hilangnya kelengkungan alami lordosis leher.
* **Penyempitan Lapang Pandang dan Risiko Cedera Fisik Fatal**: Berjalan dengan pandangan tertunduk mereduksi lapang pandang perifer hingga lebih dari delapan puluh persen. Otak mengalami fenomena kebutaan atensi (*inattentional blindness*), melipatgandakan risiko tersandung trotoar rusak, menabrak pejalan kaki lain, atau bahkan tertabrak kendaraan bermotor saat menyeberang persimpangan jalan.

## Menegakkan Kembali Kedaulatan Postur Saat Melangkah

Memulihkan keselarasan anatomis tulang leher menuntut disiplin kesadaran gerak tubuh di ruang publik:

1. **Terapkan Aturan Berhenti Melangkah Sebelum Menatap Layar**: Jadikan prinsip sederhana sebagai kebiasaan baku: jika Anda harus membaca pesan penting atau memeriksa rute peta navigasi di ponsel, berhentilah sejenak, melipir ke tepi jalan yang aman, tuntaskan urusan di layar, lalu simpan kembali ponsel Anda sebelum melanjutkan langkah kaki.
2. **Angkat Ponsel Sejajar dengan Garis Mata (Eye-Level Rule)**: Bila terpaksa memeriksa layar saat duduk atau berdiri santai, angkatlah lengan Anda hingga layar smartphone berada tepat di depan pandangan mata, alih-alih menjatuhkan dagu menekuk ke arah dada.
3. **Lakukan Peregangan Retraksi Leher (Chin Tucks) Secara Rutin**: Setiap selesai menggunakan ponsel dalam waktu lama, lakukan latihan menyelipkan dagu ke belakang secara lembut untuk meregangkan otot suboksipital yang memendek dan memperkuat otot fleksor leher bagian dalam.

Leher Anda adalah pilar penyangga yang menopang organ berpikir dan kesadaran hidup Anda. Rawatlah keutuhan ruas tulang belakang Anda dengan berani mengangkat pandangan mata tegak menatap dunia nyata di depan Anda.`
  },
  {
    title: "Kepunahan Karakter Solo Drum dalam Pertunjukan Musik Rock: Ketika Tuntutan Durasi Singkat Festival Melenyapkan Ruang Eksplorasi Ritmik Spontan",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Musik Rock", "Drum Akustik", "Konser Musik", "Pertunjukan Langsung", "Komposisi Musik"],
    imageUrl: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Set drum akustik di atas panggung konser musik dengan sorot lampu panggung dramatis",
    excerpt: "Solo drum dahulu adalah babak paling sakral dalam sebuah konser rock, tempat penabuh drum memamerkan keliaran dinamika perkusi akustik. Kini di panggung festival komersial yang serba terjadwal ketat, panggung kebebasan instrumen ritmis tersebut telah punah.",
    content: `Bagi siapa pun yang pernah menyaksikan rekaman konser musik rock legendaris dari dekade 1970-an hingga 1990-an, ada sebuah segmen pertunjukan yang selalu dinantikan dengan degup jantung berpacu kencang: babak solo drum. Di tengah-tengah repertoar lagu, sang vokalis dan gitaris akan melangkah mundur ke belakang panggung, membiarkan sorot lampu panggung utama terfokus penuh pada sang penabuh drum dan perangkat instrumen perkusinya. Selama sepuluh hingga lima belas menit ke depan, sang drummer akan memamerkan keliaran eksplorasi ritmis—memadukan dentuman bas pedal ganda yang menggelegar, kecepatan teknik pukulan roll di atas snare, hingga sentuhan poliritmik rumit pada deretan simbal kuningan yang memukau ribuan penonton.

Tradisi solo drum bukan sekadar ajang unjuk kebolehan teknis (*showmanship*), melainkan pengakuan luhur terhadap penabuh drum sebagai musisi pencipta harmoni ritme yang setara, bukan sekadar metronom hidup di balik punggung sang penyanyi. Dari solo ikonik John Bonham bersama Led Zeppelin, keliaran Neil Peart di atas panggung Rush, hingga dinamika eksplosif Dave Grohl, atraksi instrumen mandiri ini menghadirkan pengalaman katarsis sonik yang tak tergantikan dalam sejarah musik langsung (*live music*).

## Jam Pasir Festival Komersial yang Mencekik Spontanitas

Namun kemegahan atraksi ritmis tersebut kini telah lenyap tanpa bekas dari lanskap pertunjukan musik modern:

* **Tuntutan Durasi Panggung Festival yang Dipatok Menit**: Ekosistem pertunjukan musik langsung masa kini didominasi oleh festival komersial berskala masif yang menjejalkan puluhan penampil dalam satu hari. Band musik hanya diberikan alokasi waktu tampil selama empat puluh lima hingga lima puluh menit. Menghadapi batas waktu yang kejam tersebut, manajemen grup musik langsung memangkas seluruh sesi solo instrumen demi memuat sebanyak mungkin lagu hit radio yang akrab di telinga penonton umum.
* **Keterikatan Kaku pada Lintasan Klik Metronom Digital (Click Track)**: Panggung konser modern kini sangat bergantung pada sinkronisasi sequencer otomatis, lampu panggung terprogram, dan visual latar video layar LED raksasa. Sang penabuh drum diwajibkan memakai ear-monitor yang memutar ketukan metronom digital (*click track*) kaku tanpa henti, memusnahkan ruang untuk melakukan improvisasi tempo atau memanjangkan birama drum secara spontan di atas panggung.
* **Pergeseran Selera Menuju Spektakel Visual Instan**: Generasi penonton festival yang terbiasa dengan rangsangan video pendek di media sosial cenderung tidak sabar menyimak eksplorasi instrumen solo yang membutuhkan proses mendengarkan secara kontemplatif. Promotor festival menganggap atraksi instrumen solo sebagai momen mati (*lull moment*) yang dapat membuat penonton beralih ke panggung festival sebelah.

## Menghargai Kembali Jiwa Organik Ketukan Akustik

Menyelamatkan martabat seni instrumen musik akustik menuntut keberanian penikmat musik untuk merayakan ketidaksempurnaan dan spontanitas:

1. **Apresiasi Musisi yang Mempertahankan Interaksi Panggung Tanpa Jalur Klik**: Berikan dukungan tulus bagi band yang berani tampil di kelab musik mandiri dengan aransemen panggung organik tanpa bantuan rekaman vokal latar (*backing tracks*) dan keterikatan metronom digital.
2. **Luangkan Waktu Mengulik Album Rekaman Langsung Otentik**: Dengarkan kembali album rekaman konser langsung (*live albums*) klasik yang menangkap dinamika mentah ketukan drum dan interaksi riuh penonton sebelum era penyuntingan perangkat lunak digital merapikan setiap kesalahan nada.
3. **Tuntut Variasi Aransemen pada Konser Musisi Idola**: Nyatakan apresiasi di forum komunitas ketika sebuah band berani menyajikan interpretasi lagu yang berbeda dan memberi panggung leluasa bagi pemain perkusi untuk mengekspresikan keliaran musikalitas mereka.

Musik rock yang sejati berdenyut dari keringat, ketukan spontan, dan kejujuran fisik instrumen akustik di atas panggung. Jangan biarkan dinginnya keteraturan jam festival korporat membungkam dentuman gairah para penabuh drum yang pernah membuat panggung musik dunia bergetar.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 00:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 00:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-0000.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
