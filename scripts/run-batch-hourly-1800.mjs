import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Bahaya Pengawasan Tersembunyi Smart TV Ruang Keluarga: Bagaimana Fitur ACR Diam-diam Merekam Layar Anda",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Smart TV", "Privasi", "ACR", "IoT", "Keamanan Data"],
    imageUrl: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Layar televisi pintar menyala di ruang keluarga modern dengan pencahayaan hangat",
    excerpt: "Membeli televisi modern layar lebar kini bukan lagi sekadar memiliki perangkat penampil visual pasif. Lewat teknologi Automated Content Recognition, aktivitas menonton keluarga Anda dipindai dan dijual ke broker iklan setiap detik.",
    content: `Ruang keluarga sejatinya adalah episentrum keintiman rumah tangga, tempat di mana kita bisa bersantai di sofa, mengenakan pakaian santai, dan menikmati tayangan favorit tanpa merasa dihakimi atau diawasi oleh orang asing. Menyalakan televisi di ruang ini mestinya menjadi pengalaman hiburan yang privat dan menenangkan.

Namun di era televisi pintar (*smart TV*), privasi ruang keluarga tersebut telah lama dibongkar oleh produsen perangkat keras. Harga unit TV layar datar berukuran besar bisa ditekan sangat murah di etalase toko bukan semata karena efisiensi pabrik panel kaca, melainkan karena model bisnis pabrikan telah bergeser: Anda bukan lagi sekadar pembeli barang fisik, melainkan sumber data pemirsa yang monetisasinya dipanen tanpa henti melalui teknologi pemindai visual otomatis.

## Mesin Pelacak di Balik Teknologi ACR

Teknologi inti yang mengubah smart TV menjadi mata-mata digital di dinding ruang tamu adalah *Automated Content Recognition* (ACR):

* **Pemindaian Sidik Jari Piksel Setiap Detik**: Sistem ACR mengambil sampel ribuan piksel di layar Anda secara berulang-ulang, baik saat Anda menonton siaran TV kabel, memutar piringan film Blu-ray, maupun memainkan game lewat konsol. Sampel piksel tersebut dicocokkan ke database server pusat untuk mengidentifikasi adegan, judul film, hingga iklan komersial yang sedang Anda saksikan secara *real-time*.
* **Penjualan Profil Minat ke Pialang Iklan Pihak Ketiga**: Riwayat tontonan Anda digabungkan dengan alamat IP jaringan rumah, ID pengiklan ponsel, dan data geolokasi. Data agregat ini kemudian dilelang kepada agensi periklanan untuk membanjiri feed media sosial di smartphone Anda dengan promosi bertarget beberapa menit setelah Anda selesai menonton sebuah acara di televisi.
* **Perjanjian Layanan Panjang yang Menjebak Pengguna**: Saat pertama kali menyalakan TV baru, antarmuka penyiapan awal (*setup wizard*) menyajikan belasan lembar klausul persetujuan dengan tombol "Setujui Semua" yang mencolok. Fitur pelacakan ACR sering disamarkan di balik istilah manipulatif seperti "Peningkatan Pengalaman Menonton Interaktif".

## Mengamankan Privasi Ruang Tamu Anda

Mengembalikan kedaulatan ruang keluarga menuntut tindakan pencegahan aktif pada menu konfigurasi:

1. **Nonaktifkan Fitur ACR di Menu Pengaturan Privasi**: Telusuri menu sistem smart TV Anda, cari submenu *Terms & Policy* atau *Viewing Data*, lalu matikan semua opsi yang mencantumkan *Automated Content Recognition*, *Live Plus*, atau *Interactivity*.
2. **Batasi Pelacakan Iklan dan Reset ID Periklanan**: Aktifkan fitur *Limit Ad Tracking* dan lakukan penghapusan atau reset berkala pada ID pengiklan digital bawaan sistem operasi TV Anda.
3. **Pisahkan Jaringan Internet Smart TV ke Jaringan Tamu (*Guest Wi-Fi*)**: Hubungkan smart TV ke segmen Wi-Fi khusus tamu yang terisolasi dari perangkat komputer kerja dan server penyimpanan data lokal Anda untuk mencegah potensi pemindaian port jaringan internal.

Televisi adalah perabotan elektronik yang bertugas menghibur keluarga Anda, bukan memasang kamera intai korporasi di ruang santai Anda. Rawatlah batas privasi rumah tangga Anda dengan berani mematikan fitur pemindai komersial yang tak pernah Anda butuhkan.`
  },
  {
    title: "Tirani Animasi Narasi yang Tak Bisa Dilewati: Ketika Game Lupa Bahwa Pemain Membeli Kendali Penuh",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Desain Game", "Cutscene", "Industri Game", "Gameplay", "User Experience"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kontroler video game tergeletak di depan layar monitor game petualangan",
    excerpt: "Menonton adegan sinematik dalam game memang memikat pada putaran pertama. Namun memaksakan adegan cerita tanpa tombol lewati saat pemain mengulang babak pertarungan merampas esensi interaktivitas media game.",
    content: `Media video game memiliki satu keunggulan mutlak yang membedakannya dari seni pertunjukan lain seperti film layar lebar atau sastra novel: interaktivitas. Dalam sebuah game, kita bukanlah penonton pasif yang duduk diam di kursi bioskop, melainkan sutradara sekaligus aktor utama yang menggerakkan tubuh karakter, mengambil keputusan taktis, dan merasakan sensasi benturan tombol kontroler secara langsung di telapak tangan.

Namun keunggulan filosofis tersebut kerap dilupakan oleh studio pengembang yang terobsesi mengejar pretensi artistik sinematik. Kita semakin sering disuguhi game petualangan beranggaran raksasa yang merampas kendali pemain secara sepihak melalui animasi cerita (*unskippable cutscenes*) dan adegan berjalan lambat (*forced walking segments*) yang tidak menyediakan tombol lewati (*skip*), bahkan ketika pemain harus mengulang pertarungan bos yang sama untuk kelima kalinya.

## Ego Kreatif dan Kematian Nilai Main Ulang

Pemaksaan durasi tontonan naratif merusak ritme pengalaman bermain yang menyenangkan:

* **Siksaan Emosional Saat Mengulang Babak Sulit**: Tidak ada hal yang lebih merusak mood bermain selain dipaksa mendengarkan monolog dramatis sang musuh selama tiga menit berturut-turut sebelum tiap kali pertarungan dimulai kembali. Kegagalan taktis pemain semestinya dibalas dengan kesempatan mencoba strategi baru secara instan, bukan hukuman duduk menonton adegan yang sama sampai hafal di luar kepala.
* **Kehancuran Daya Tarik Main Ulang (*Replayability*)**: Bagi gamer yang ingin menguji kemampuan di tingkat kesulitan tertinggi (*hardcore*) atau mencoba tantangan lari cepat (*speedrun*), ketiadaan fitur lewati animasi adalah mimpi buruk. Waktu bermain yang semestinya diisi oleh adu mekanik jari justru tersedot menjadi waktu tunggu membosankan yang tidak bernilai.
* **Ego Sutradara yang Mengorbankan Kenyamanan Pengguna**: Sebagian perancang game memandang karya mereka layaknya naskah teater suci yang haram dilewati satu detik pun oleh penikmatnya. Sikap arogan ini mengabaikan fakta dasar bahwa pemain membayar harga penuh demi menikmati mekanisme permainan (*gameplay loop*), bukan demi dijadikan tawanan ego narasi sang kreator.

## Menegakkan Prinsip Desain Berpusat pada Pemain

Desain game interaktif modern yang matang wajib menghormati kebebasan waktu bermain:

1. **Sediakan Opsi Tahan Tombol untuk Melewati (*Hold to Skip*)**: Terapkan standar industri cerdas di mana pemain cukup menahan tombol tertentu selama satu detik untuk langsung melompat ke awal pertarungan tanpa risiko terpencet tak sengaja.
2. **Kembangkan Fitur Ringkasan Teks Cepat (*Dialogue Log*)**: Izinkan pemain membaca naskah dialog melalui sistem teks cepat sehingga penikmat cerita yang membaca cepat tidak terhambat oleh lambatnya jeda intonasi suara karakter.
3. **Beri Kebebasan Penuh pada Mode Putaran Kedua (*New Game Plus*)**: Hapus seluruh segmen berjalan lambat dan tutorial narasi wajib saat pemain memasuki putaran permainan kedua agar mereka dapat fokus mengeksplorasi build karakter dan mekanik tempur maksimal.

Game adalah ruang interaksi aktif yang memuliakan kedaulatan kendali jemari Anda. Jangan biarkan obsesi sinematik yang keliru mengubah petualangan interaktif menjadi bioskop paksa yang menjemukan.`
  },
  {
    title: "Bahaya Duduk Bersila Berjam-jam di Meja Lesehan: Mengapa Penjepitan Saraf Peroneal Kerap Disalahartikan Kesemutan",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Ergonomi", "Saraf Peroneal", "Postur Tubuh", "Kesehatan Saraf", "Gaya Hidup Sehat"],
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang duduk bersila di atas lantai dengan bantal busa memperhatikan postur tubuh",
    excerpt: "Bekerja atau bersantai di meja lesehan berjam-jam sering dianggap nyaman dan santai. Namun lipatan sendi lutut ekstrem dan tekanan lantai keras diam-diam menjepit saraf peroneal yang dapat memicu kelumpuhan telapak kaki.",
    content: `Bagi masyarakat di tanah air, duduk bersila di atas lantai karpet atau tikar sambil menghadap meja lesehan adalah tradisi yang sangat akrab. Kebiasaan ini sering diterapkan saat bekerja santai dengan laptop, berdiskusi santai di kedai kopi, hingga menikmati santapan malam bersama keluarga. Duduk di lantai dipandang menghadirkan suasana hangat, akrab, serta dianggap melatih kelenturan sendi panggul secara alami.

Namun bila dilakukan secara statis selama berjam-jam tanpa sandaran postur yang tepat, duduk bersila menyimpan ancaman neurologis yang berbahaya bagi tungkai bawah Anda. Tekanan mekanis berat antara tulang kaki dan permukaan lantai yang keras, berpadu dengan sudut tekukan lutut yang tajam, secara langsung menekan serabut saraf penting yang melintasi sisi luar sendi lutut, yakni saraf peroneal komunis (*common peroneal nerve*).

## Jalur Saraf yang Terjepit dan Risiko Foot Drop

Gangguan kompresi saraf kaki yang diabaikan dapat berkembang dari sekadar kesemutan ringan menjadi kelumpuhan motorik fungsional:

* **Iskemia pada Cabang Saraf Peroneal**: Saraf peroneal berjalan sangat dangkal tepat di bawah permukaan kulit di sekitar leher tulang fibula pada sisi luar lutut. Saat Anda duduk bersila, berat badan dan tumpukan tulang kaki yang saling menyilang menjepit pembuluh darah mikro yang memberi makan saraf ini, memicu sensasi kebas, mati rasa, atau sensasi terbakar yang menusuk.
* **Bahaya Sindrom Telapak Kaki Lumpuh (*Foot Drop*)**: Kerusakan kompresi saraf peroneal yang berulang dan berkepanjangan dapat melumpuhkan kelompok otot ekstensor jari dan otot pengangkat telapak kaki (*dorsiflexion*). Akibatnya, penderita tidak mampu mengangkat ujung jari kaki saat melangkah, sehingga ujung jari terseret di tanah dan memicu langkah kaki pincang yang abnormal (*steppage gait*).
* **Beban Kompresi Berlebih pada Tulang Belakang Lumbal**: Duduk di lantai tanpa sandaran punggung ergonomis memaksa panggul berputar ke belakang (*posterior pelvic tilt*), memusnahkan lengkungan alami pinggang dan melipatgandakan beban tekanan pada bantalan cakram tulang belakang lumbar hingga dua kali lipat dibanding duduk tegak di kursi kerja.

## Menjaga Kesehatan Saraf Saat Beraktivitas Lesehan

Menikmati kenyamanan lesehan tanpa mengorbankan integritas sistem saraf menuntut disiplin biomekanika:

1. **Batasi Durasi Duduk Bersila Maksimal Tiga Puluh Menit**: Jangan biarkan kaki berada dalam lipatan silang statis melampaui tiga puluh menit. Berdirilah sejenak, luruskan kedua kaki ke depan, dan lakukan peregangan pergelangan kaki secara lembut.
2. **Gunakan Alas Bantal Panggul yang Cukup Tebal**: Duduklah di atas bantal panggul (*zafu* atau alas busa padat) agar posisi pinggul terangkat lebih tinggi dari sendi lutut, sehingga mengurangi sudut fleksi tajam pada sendi lutut dan menurunkan tegangan pada saraf peroneal.
3. **Jangan Abaikan Kebas yang Berlangsung Lebih dari Sepuluh Menit**: Jika setelah berdiri dan meluruskan kaki sensasi baal atau kelemahan mengangkat ujung telapak kaki menetap lebih dari sepuluh menit, hindari memijat area samping lutut dengan keras dan segera periksakan diri ke dokter spesialis saraf.

Fleksibilitas tubuh manusia adalah berkah fisik yang harus dirawat dengan bijak. Jangan tukar kenyamanan santai sesaat di lantai dengan cedera saraf tungkai yang dapat merampas kebebasan langkah kaki Anda di kemudian hari.`
  },
  {
    title: "Tirani Auto-Tune Nada Sempurna: Mengapa Vokal Tanpa Cacat Menghilangkan Jiwa dan Karakter Emosi Manusiawi",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Produksi Musik", "Auto-Tune", "Vokal", "Industri Musik", "Estetika Audio"],
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Mikrofon rekaman studio musik dengan latar peredam suara dan lampu indikator audio",
    excerpt: "Di studio rekaman modern, setiap desah nafas dan nada sumbang vokal dapat diratakan secara matematis oleh algoritma pengoreksi titinada. Namun perburuan nada presisi digital tersebut mengikis getaran emosi paling purba dalam seni bernyanyi.",
    content: `Ketika kita mendengarkan rekaman legendaris Billie Holiday menyanyikan lagu balada muram, Freddie Mercury menjangkau nada tinggi rock berenergi, atau Kurt Cobain meneriakkan kepedihan batin di panggung Nirvana, ada satu benang merah sonik yang begitu menusuk dada: ketidaksempurnaan. Suara mereka bergetar, nada meleset tipis beberapa sen saat emosi memuncak, dan tarikan nafas serak menjadi bukti tak terbantahkan bahwa ada jiwa manusia yang rapuh di balik corong mikrofon.

Namun estetika vokal organik tersebut kini telah disapu bersih oleh dominasi perangkat lunak pengoreksi titinada (*pitch correction*) seperti Auto-Tune dan Melodyne di dapur produksi rekaman modern. Nada vokal tidak lagi dibiarkan melayang bebas sesuai dinamika emosional penyanyi, melainkan ditarik paksa secara matematis menuju garis tangga nada yang lurus sempurna. Suara manusia telah ditransformasikan menjadi instrumen sintetis tanpa cela yang dingin dan hampa getaran jiwa.

## Standarisasi Suara dan Kematian Nuansa Emosional

Obsesi mengejar kesempurnaan tala menghasilkan krisis estetika yang mendalam dalam lanskap musik kontemporer:

* **Pelenyapan Mikrotonalitas dan Karakter Khas Penyanyi**: Keindahan vokal manusia terletak pada ketidaksempurnaan mikro (*micro-tonal variations*) yang membedakan warna suara satu penyanyi dari milyaran manusia lainnya. Ketika algoritma komputer mengunci setiap suku kata ke nada paten terdekat, seluruh keunikan artikulasi individu dimusnahkan demi melahirkan bunyi vokal plastik yang seragam.
* **Kematian Keaslian Pertunjukan Panggung Langsung**: Kebiasaan mendengar vokal rekaman yang terlalu dipoles membuat telinga pendengar awam memiliki ekspektasi yang tidak realistis terhadap panggung langsung (*live concert*). Demi mempertahankan ilusi suara tanpa cela tersebut di depan publik, banyak penyanyi terpaksa bergantung pada *playback* rekaman vokal atau memasang koreksi nada real-time di panggung yang mematikan spontanitas artistik.
* **Kemalasan Berproses di Bilik Studio Rekaman**: Produser musik masa kini kerap tidak lagi meluangkan waktu berhari-hari untuk membimbing sang penyanyi menemukan interpretasi emosi naskah lirik terbaik melalui latihan vokal yang tekun. Sikap "nanti kita perbaiki saja di komputer" (*we'll fix it in the mix*) telah mereduksi bilik rekaman sakral menjadi sekadar jalur perakitan mekanis yang pragmatis.

## Menemukan Kembali Getaran Otentik Suara Manusia

Mengapresiasi keindahan musik sejati menuntut telinga kita untuk kembali memeluk kehangatan ketidaksempurnaan:

1. **Hargai Musisi yang Berani Merilis Rekaman Akustik Mentah**: Dengarkan sesi rekaman langsung studio tanpa banyak polesan pascaproduksi, di mana tarikan nafas, desis udara, dan getaran vibrato alami penyanyi dibiarkan bernafas secara jujur.
2. **Kritisi Tren Manipulasi Vokal Robotik yang Membosankan**: Berikan tanggapan kritis terhadap produksi musik pop yang memperlakukan vokal manusia layaknya instrumen synthesizer MIDI tanpa dinamika artikulasi.
3. **Dukung Ruang Pertunjukan Musik Intim dan Lepas**: Kunjungi ruang konser musik kecil dan komunitas independen tempat para musisi tampil bernyanyi dengan seluruh kerapuhan teknik alaminya tanpa bantuan filter pengoreksi nada otomatis.

Suara manusia adalah instrumen musik paling purba dan paling sakral di muka bumi. Jangan biarkan rumus algoritma digital merampas hakikat seni bernyanyi dari sebuah getaran jiwa menjadi sekadar kalkulasi angka frekuensi yang membosankan.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 18:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

    // 2. Publish (Local SQLite & Outbox JSON, optional Remote)
    const syncRemote = process.env.SYNC_REMOTE === '1' || process.argv.includes('--remote');
    console.log(`Mempublikasikan ke Local DB & Outbox (remote: ${syncRemote})...`);
    const res = await autoPublishPost(art, { remote: syncRemote });
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

  console.log("\n=== SELURUH BATCH 18:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-1800.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
