import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Bahaya Ekstensi Browser yang Diam-diam Dijual ke Pihak Ketiga: Ketika Alat Bantu Produktivitas Berubah Menjadi Mesin Pencuri Token Sesi dan Data Pribadi",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Keamanan Siber", "Ekstensi Browser", "Privasi Digital", "Malware", "Web Security"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Layar laptop menampilkan baris kode dan peringatan izin ekstensi peramban di lingkungan kantor teknologi",
    excerpt: "Banyak pengguna browser memasang ekstensi pemblokir iklan atau pengatur tab yang terpercaya selama bertahun-tahun. Namun akuisisi senyap oleh sindikat iklan dan data broker diam-diam menyuntikkan skrip berbahaya melalui pembaruan otomatis untuk mencuri token sesi dan kredensial sensitif.",
    content: `Ekstensi peramban telah lama menjadi pilar esensial dalam menopang kenyamanan berselancar di dunia web. Mulai dari pemblokir iklan agresif, pemeriksa tata bahasa, alat tangkapan layar praktis, hingga pengelola tab otomatis, perkakas mungil ini diunduh jutaan kali di toko aplikasi Chrome Web Store atau Firefox Add-ons. Pengguna terbiasa memberikan izin akses tingkat tinggi—seperti membaca dan memodifikasi semua data pada situs web yang dikunjungi—karena menaruh kepercayaan penuh pada reputasi pengembang awal yang dinilai berdedikasi dan tulus membantu komunitas.

Namun di balik utilitas tersebut, terdapat rantai pasok perangkat lunak (*software supply chain*) yang rapuh dan menggiurkan bagi sindikat kriminal siber. Ketika sebuah ekstensi independen berhasil mengumpulkan ratusan ribu hingga jutaan basis pengguna aktif, pengembang aslinya kerap didekati oleh perusahaan pembeli anonim yang menawarkan akuisisi dengan imbalan puluhan ribu dolar. Godaan finansial ini memicu fenomena pengalihan kepemilikan di bawah meja tanpa pemberitahuan resmi kepada basis pengguna. Dalam sekejap, alat bantu yang selama ini Anda percaya bermutasi menjadi kuda Troya digital.

## Modus Infiltrasi Kode Jahat Pasca-Akuisisi Senyap

Sindikat pembeli ekstensi jarang membongkar reputasi alat secara vulgar. Mereka memanfaatkan celah kepercayaan pengguna melalui strategi pembaruan terselubung:

* **Pembaruan Bertahap Berkedok Perbaikan Bug (*Silent Update Exploitation*)**: Pemilik baru sengaja membiarkan ekstensi berjalan normal selama beberapa pekan untuk menghindari kecurigaan moderasi toko aplikasi. Setelah itu, mereka merilis pembaruan kecil yang diklaim sebagai optimalisasi performa. Di balik kode tersebut, disisipkan skrip *obfuscated JavaScript* yang memuat instruksi dinamis dari server komando pengendali jarak jauh.
* **Pencurian Token Sesi dan Cookie Otorisasi (*Session Hijacking*)**: Ekstensi dengan izin akses tab memiliki kapabilitas membaca objek dokumen web secara penuh (*DOM access*). Skrip jahat dapat mencegat token otorisasi OAuth, cookie sesi perbankan, hingga rekaman keystroke pada kolom formulir sensitif. Penyerang dapat masuk ke akun email, dompet kripto, atau portal internal perusahaan korban tanpa perlu mengetahui kata sandi asli maupun melewati otentikasi dua faktor.
* **Penyuntikan Tautan Afiliasi Agresif dan Pembelokan Mesin Pencari**: Alih-alih merusak peramban secara frontal, sebagian pembeli ekstensi memanfaatkannya untuk menyuntikkan kode pelacak iklan (*adware*). Hasil pencarian Google diam-diam dimanipulasi dengan menyelipkan tautan bersponsor pihak ketiga, sementara riwayat penelusuran pribadi dikemas dan dijual ke makelar data global.

## Strategi Membentengi Diri dari Risiko Ekstensi Korup

Menjaga integritas data di lingkungan peramban menuntut disiplin kebersihan digital yang ketat:

1. **Terapkan Kebijakan Minimalis Izin Ekstensi (*Principle of Least Privilege*)**: Buka menu pengaturan ekstensi di browser Anda dan ubah izin akses situs dari "Di semua situs" menjadi "Hanya saat diklik" (*On click*) atau batasi hanya pada situs tertentu yang benar-benar relevan. Membatasi lingkup kerja ekstensi mencegah skrip nakal mengintip aktivitas perbankan atau dashboard kantor Anda.
2. **Audit dan Pangkas Ekstensi Secara Berkala**: Hapus ekstensi lama yang sudah tidak Anda gunakan setiap tiga bulan sekali. Ekstensi yang ditinggalkan oleh pembuatnya (*abandoned extensions*) adalah sasaran empuk akuisisi sindikat atau eksploitasi kerentanan zero-day. Jika sebuah fitur sederhana dapat dikerjakan lewat bookmarklet atau fitur bawaan browser, jangan pasang ekstensi tambahan.
3. **Waspadai Perubahan Tiba-tiba pada Antarmuka dan Syarat Layanan**: Perhatikan jika ekstensi meminta izin akses baru secara mendadak atau mulai menampilkan tab promosi aneh saat browser dibuka. Manfaatkan alat audit sumber terbuka seperti *CRXcavator* atau forum komunitas pengembang untuk memantau apakah ada laporan anomali terhadap ekstensi populer yang Anda pasang.

Kenyamanan satu klik di bilah peramban tidak boleh dibayar dengan kedaulatan data pribadi Anda. Kewaspadaan berkala adalah perisai terbaik menghadapi metamorfosis senyap di balik toko aplikasi digital.`
  },
  {
    title: "Ilusi Pilihan Moral dalam Game Naratif Interaktif: Ketika Percabangan Cerita Semu Menghancurkan Bobot Konsekuensi Emosional Pemain",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Desain Game", "Naratif Game", "Interaktif", "Mekanik Game", "Industri Game"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pemain game memegang stik kontroler konsol di hadapan layar monitor dengan grafis petualangan futuristik",
    excerpt: "Janji bahwa setiap keputusan akan mengubah takdir dunia game sering kali berakhir sebagai fatamorgana pemasaran. Ketika seluruh percabangan moral bermuara pada kesimpulan akhir yang seragam, pemain kehilangan keterikatan emosional dan merasa dikhianati oleh naskah yang malas.",
    content: `Daya tarik utama yang membedakan media video game dari karya sastra dan film layar perak terletak pada agensi pemain. Dalam genre petualangan naratif interaktif, pemain tidak hanya diposisikan sebagai penonton pasif yang terpaku di depan panggung sandiwara. Melalui mekanik pemilihan dialog dan keputusan moral berkeputusan tinggi, pemain dijanjikan kendali penuh untuk menenun takdir karakter fiktif, menentukan hidup-mati rekan seperjuangan, hingga merombak peta geopolitik dunia fiksi yang sedang mereka jelajahi. Kalimat pembuka seperti "pilihan Anda akan menentukan jalannya cerita" telah lama menjadi mantra pemasaran paling sakti bagi studio pengembang.

Namun keintiman emosional tersebut sering kali hancur berkeping-keping begitu tirai ilusi tersingkap pada putaran permainan kedua (*second playthrough*). Banyak pemain mendapati kenyataan pahit bahwa puluhan dilema moral yang menguras batin sepanjang puluhan jam permainan hanyalah ornamen kosmetik belaka. Karakter pendamping yang bersusah payah diselamatkan tetap saja tewas beberapa bab kemudian dengan cara yang dipaksakan demi menjaga naskah utama tidak bergeser. Janji percabangan cerita tanpa batas berubah menjadi lorong sempit yang digiring menuju muara kesimpulan yang sama.

## Jebakan Desain Jalur Corong dan Penolakan Konsekuensi Nyata

Kecenderungan pengembang mengandalkan ilusi agensi lahir dari kompromi produksi dan kemalasan merancang variasi skenario yang berbobot:

* **Penerapan Struktur Percabangan Corong (*Funneling Narrative Design*)**: Demi menghemat anggaran rekaman suara pengisi suara dan animasi adegan sinematik, studio membiarkan pemain memilih ranting dialog berbeda di awal bab, namun secara paksa menyatukan kembali semua konsekuensi tersebut di akhir bab. Apapun sikap yang diambil pemain—baik menjadi pahlawan penyayang maupun sosok oportunis kejam—jalur narasi akan diarahkan kembali ke titik persimpangan yang sama (*chokepoint*).
* **Sindrom Kematian Tertunda Tokoh Pendamping (*Quantum Determinism*)**: Ketika pemain diberi kesempatan dramatis untuk menyelamatkan seorang karakter dari eksekusi mati, karakter tersebut biasanya seketika kehilangan peran aktif dalam sisa cerita. Naskah memperlakukan mereka layaknya bayangan bisu yang tidak lagi memiliki pengaruh dialog penting, sebelum akhirnya dihabisi di adegan berikutnya demi menghindari kerumitan menulis cabang skenario ganda.
* **Reduksi Klimaks Akhir Menjadi Tombol Pilihan Warna**: Bentuk pengkhianatan naratif paling vulgar terjadi saat konklusi akhir ratusan jam petualangan dipangkas menjadi sekadar pemilihan tiga opsi tombol di menit-menit terakhir. Seluruh jerih payah keputusan moral masa lalu sama sekali tidak diperhitungkan, mereduksi bobot emosional pemain menjadi sekadar perbedaan filter warna adegan penutup.

## Membangun Integritas Konsekuensi Narasi yang Jujur

Menghadirkan pengalaman interaktif yang membekas menuntut keberanian studio game untuk menghormati otonomi pemain:

1. **Hargai Skala Konsekuensi Mikro daripada Janji Kosong Skala Makro**: Pengembang tidak perlu memaksakan janji mustahil menghadirkan ratusan akhir cerita dunia yang berbeda secara drastis. Hubungan personal yang berubah secara organik, respons dialog karakter sampingan yang mencerminkan reputasi moral pemain, serta detail kecil pada lingkungan sekitar jauh lebih efektif membangun rasa memiliki (*ownership*) daripada klaim epik yang palsu.
2. **Berikan Ruang Kegagalan yang Membuka Jalur Cerita Alternatif (*Failing Forward*)**: Berhentilah menghentikan permainan dengan layar *Game Over* kaku saat pemain membuat keputusan ceroboh atau gagal membujuk musuh dalam negosiasi. Izinkan cerita terus bergulir menembus konsekuensi kekalahan tersebut, menghadirkan tantangan baru yang menuntut adaptasi taktik dan menawarkan sudut pandang kepahlawanan yang tidak sempurna.
3. **Transparansi Integritas Desain Tanpa Hype Menyesatkan**: Komunitas pemain game modern jauh lebih mengapresiasi linearitas cerita yang dirajut dengan penulisan karakter yang tajam daripada labirin opsi semu yang mempermainkan emosi mereka. Kejujuran studio mengenai batasan ruang lingkup permainan membangun ikatan kepercayaan yang langgeng.

Kekuatan sejati sebuah game naratif tidak pernah terletak pada seberapa banyak cabang percabangan pohon keputusan yang dipamerkan di lembar promosi, melainkan seberapa dalam luka dan kebanggaan yang tertinggal di sanubari pemain saat pilihan sulit mereka benar-benar dihormati oleh dunia game.`
  },
  {
    title: "Bahaya Kebiasaan Makan Larut Malam bagi Irama Sirkadian: Mengapa Asupan Kalori Jelang Tidur Diam-diam Mematikan Sensitivitas Insulin dan Produksi Melatonin",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Irama Sirkadian", "Metabolisme", "Insulin", "Tidur", "Nutrisi"],
    imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang membuka lemari pendingin di dapur yang temaram pada malam hari untuk mencari kudapan larut malam",
    excerpt: "Kebiasaan menyantap mie instan atau kudapan tinggi karbohidrat menjelang tengah malam menyimpan risiko metabolik berbahaya. Tubuh manusia secara genetis diprogram menurunkan fungsi pencernaan saat gelap, sehingga asupan kalori larut malam memicu resistensi insulin dan merusak arsitektur tidur.",
    content: `Gaya hidup modern yang sarat lembur malam dan maraknya layanan pesan-antar makanan 24 jam telah menggeser pola makan jutaan masyarakat perkotaan. Menyantap semangkuk mie instan hangat, martabak manis, atau hidangan cepat saji sambil menonton tayangan serial streaming pada tengah malam kerap dianggap sebagai bentuk relaksasi yang lumrah setelah seharian memeras tenaga di tempat kerja. Anggapan naif bahwa "kalori adalah kalori, kapan pun ia dikonsumsi asalkan jumlahnya tidak berlebih" membuat banyak orang mengabaikan waktu biologis tubuh mereka.

Padahal, metabolisme manusia tidak bekerja seperti tungku pembakaran konvensional yang menyala konstan sepanjang 24 jam tanpa henti. Di dalam setiap sel organ manusia tertanam jam biologis mikro yang diatur oleh irama sirkadian (*circadian rhythm*), selaras dengan siklus terbit dan tenggelamnya matahari. Ketika kegelapan malam tiba, sistem metabolisme di dalam pankreas, hati, dan saluran pencernaan secara alami memasuki mode pemulihan dan pembersihan internal. Memaksa lambung mencerna makanan padat berkalori tinggi saat jam biologis memerintahkan tubuh untuk beristirahat adalah resep pasti memicu kekacauan metabolik jangka panjang.

## Pembelokan Biokimiawi Akibat Makan di Luar Jam Sirkadian

Asupan nutrisi yang bertentangan dengan siklus biologis alami memicu tabrakan hormon yang merugikan organ vital:

* **Penurunan Drastis Sensitivitas Insulin di Malam Hari**: Sel-sel beta pankreas manusia dirancang memiliki efisiensi sekresi insulin tertinggi pada pagi dan siang hari saat matahari bersinar. Ketika malam hari tiba, kemampuan sel tubuh menyerap glukosa darah menurun hingga 30 persen. Menyantap karbohidrat sederhana jelang tidur memaksa pankreas memompa insulin dalam dosis masif, namun glukosa tetap tertahan di aliran darah dan langsung dikonversi menjadi cadangan lemak viseral di sekitar rongga perut dan organ hati.
* **Supresi Hormon Melatonin dan Kerusakan Struktur Tidur Nyenyak**: Kenaikan tajam kadar gula darah dan aktivitas pencernaan yang intens mengirimkan sinyal bahaya ke otak yang menekan produksi hormon melatonin—senyawa alami yang mengatur rasa kantuk dan perbaikan seluler. Akibatnya, fase tidur gelombang lambat (*slow-wave deep sleep*) dan fase *REM* menjadi terfragmentasi. Meski seseorang tidur selama delapan jam, mereka akan terbangun dalam kondisi lelah, linglung, dan mengalami kabut otak (*brain fog*).
* **Memicu Refluks Asam Lambung dan Peradangan Endotel Saluran Cerna**: Berbaring dalam kurun waktu kurang dari dua jam setelah makan malam menghalangi kerja gravitasi dalam menahan asam lambung di dasar perut. Cairan asam bercampur enzim pepsin dapat naik kembali ke kerongkongan (*gastroesophageal reflux* atau GERD), menyebabkan sensasi panas di dada, iritasi tenggorokan kronis, hingga peradangan mikro pada dinding mukosa saluran cerna.

## Memulihkan Kebugaran Lewat Penataan Waktu Makan yang Teratur

Mengembalikan keharmonisan metabolisme menuntut keselarasan antara waktu santap dan ritme biologi sirkadian:

1. **Kunci Jendela Puasa Malam Minimal Dua Belas Jam (*Time-Restricted Feeding*)**: Usahakan menyelesaikan makan malam terakhir setidaknya tiga hingga empat jam sebelum waktu tidur Anda, idealnya sebelum pukul tujuh atau delapan malam. Memberikan jeda puasa 12 jam hingga sarapan esok hari memberi kesempatan emas bagi sel-sel hati dan mitokondria untuk melakukan mekanisme pembersihan diri otomatis (*autofagi*).
2. **Pilih Makanan Ringan Ramah Pencernaan Jika Kelaparan Tak Tertahankan**: Jika rasa lapar larut malam benar-benar mengganggu konsentrasi akibat jadwal kerja giliran (*shift work*), hindari camilan tinggi gula, tepung olahan, dan minyak jenuh. Pilihlah segelas air putih hangat, seduhan teh kamomil tanpa gula, atau segenggam kecil kacang almon yang kaya magnesium untuk menenangkan sistem saraf tanpa membebani pankreas.
3. **Sejajarkan Asupan Kalori Terbesar pada Waktu Siang Hari**: Geser proporsi kalori dan karbohidrat utama ke sarapan dan makan siang saat laju metabolisme basal dan sensitivitas insulin tubuh sedang berada di puncak performa. Pola ini memastikan kalori diubah menjadi energi kinetik untuk beraktivitas, bukan ditimbun sebagai lemak darah trigliserida yang membahayakan jantung.

Kunci kesehatan prima bukan hanya tentang apa yang Anda masukkan ke dalam piring makan, melainkan kapan tubuh Anda siap menyambutnya. Menghormati jam tidur organ pencernaan adalah investasi paling murah demi umur panjang yang bugar dan berkualitas.`
  },
  {
    title: "Tirani Pemangkasan Durasi Lagu Demi Algoritma Media Sosial: Mengapa Format Dua Menit Menghancurkan Jembatan Harmoni dan Kedalaman Jiwa Komposisi Musik",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Produksi Musik", "Komposisi", "Streaming Musik", "Industri Musik", "Media Sosial"],
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seorang musisi produser rekaman mengatur instrumen synthesizer dan trek digital di studio musik kontemporer",
    excerpt: "Demi mengejar rasio putar ulang maksimal dan potongan viral 15 detik di aplikasi video pendek, durasi lagu modern dipangkas hingga di bawah dua menit. Struktur bridge dan solo instrumen dihilangkan demi reff instan, mereduksi karya seni menjadi produk komoditas sekali pakai.",
    content: `Dalam sejarah panjang seni tata bunyi, arsitektur sebuah lagu dibangun dengan kehati-hatian layaknya merancang karya arsitektur megah. Komponis klasik hingga musisi era keemasan pop dan rock merajut struktur komposisi secara berjenjang: petikan introduksi yang menuntun emosi, bait pembuka (*verse*) yang memperkenalkan karakter cerita, transisi menegangkan (*pre-chorus*), ledakan klimaks (*chorus*), hingga jembatan penjelajah (*bridge*) yang menyuguhkan eksplorasi harmoni dan modulasi tangga nada tak terduga sebelum lagu kembali ke pelukan melodi utama. Durasi standar antara tiga hingga empat menit dianggap sebagai ruang kanvas ideal bagi sebuah karya musik untuk bersemi dan bernapas.

Namun dalam lanskap industri musik kontemporer, tradisi penciptaan tersebut tengah terancam punah di bawah tekanan ekonomi perhatian (*attention economy*). Algoritma platform video pendek seperti TikTok dan sistem pembayaran royalti per putaran (*per-stream payout*) di Spotify telah mendikte para produser rekaman untuk memangkas durasi lagu secara radikal. Lagu-lagu baru kini dirilis dengan durasi di bawah dua menit, bahkan tidak sedikit yang hanya menyentuh satu menit empat puluh detik. Komposisi musik tidak lagi diperlakukan sebagai narasi emosional yang utuh, melainkan direduksi menjadi komoditas klip promosi instan yang dirancang semata-mata agar mudah diulang-ulang oleh pengguna media sosial.

## Dampak Kehancuran Anatomi Musik Akibat Pemenggalan Durasi

Pemaksaan formula kilat demi mengejar angka metrik keterlibatan telah mengebiri kekayaan musikalitas dari dalam rekaman:

* **Kematian Bagian Bridge dan Modulasi Kunci Akord (*The Death of the Bridge*)**: Bagian bridge adalah momen paling sakral dalam struktur lagu pop klasik—sebuah ruang di mana pendengar diajak bertamasya ke warna akord baru, pergantian ritme, atau perubahan sudut pandang lirik sebelum memasuki klimaks penutup. Dalam formula lagu kilat dua menit, bridge adalah elemen pertama yang dibuang ke tong sampah oleh produser karena dianggap memperlambat tempo dan berisiko membuat jempol pendengar menekan tombol lewati (*skip*).
* **Penghapusan Intro dan Keharusan Hook Instan di Detik Pertama**: Jika pada era piringan hitam musisi bebas bereksplorasi dengan intro instrumental selama tiga puluh detik untuk membangun atmosfer mistis, lagu zaman sekarang wajib menembakkan bagian reff atau vokal utama tepat di detik kelima. Ketiadaan ruang antisipasi membuat musik terasa seragam, terburu-buru, dan kehilangan keanggunan dinamika penceritaan.
* **Kepunahan Solo Instrumen dan Virtuositas Musisi**: Melodi solo gitar listrik yang menyayat hati, petikan bas solo yang groovy, atau solo saksofon jazz yang memabukkan kini hampir sepenuhnya absen dari tangga lagu komersial. Ketika waktu rekaman ditekan habis-habisan, tidak ada lagi ruang bernapas bagi musisi instrumen untuk unjuk kebolehan rasa dan teknik. Hasilnya adalah musik pop sintetis yang steril, seragam, dan lekas terlupakan begitu tren video reda.

## Melawan Pendangkalan dan Merawat Keutuhan Seni Rekaman

Menyelamatkan kedalaman seni komposisi menuntut keberanian para kreator dan apresiasi sadar dari para penikmat musik:

1. **Prioritaskan Kebutuhan Estetika Lagu daripada Metrik Durasi**: Komposer sejati harus membiarkan sebuah lagu menemukan panjang alaminya sendiri. Jika sebuah pesan membutuhkan enam menit aransemen orkestrasi untuk menyampaikan luka batin yang sesungguhnya, jangan ragu untuk mewujudkannya. Karya agung yang melegenda lintas generasi tidak pernah dilahirkan dari ketakutan akan rentang perhatian manusia yang pendek.
2. **Eksplorasi Format Rilisan Versi Panjang (*Extended Cut*)**: Musisi dapat memanfaatkan platform digital untuk merilis karya dengan dua versi: versi radio pendek untuk kebutuhan promosi kasual, dan versi album berdurasi utuh yang mempertahankan seluruh bagian intro, bridge, serta outro instrumental bagi pendengar setia yang mendambakan pengalaman auditif mendalam.
3. **Mendidik Kembali Telinga Pendengar untuk Menikmati Perjalanan Narasi Bunyi**: Komunitas penikmat seni perlu membiasakan diri mendengarkan satu album secara utuh dari awal hingga akhir tanpa terdistraksi notifikasi layar ponsel. Menikmati proses pembentukan nada dari bisikan pelan hingga ledakan harmoni megah adalah latihan meditasi estetika yang mengasah kepekaan jiwa manusia.

Musik adalah jembatan komunikasi rasa dari kedalaman kalbu musisi menuju sanubari pendengar, bukan sekadar audio latar pengisi video joget berdurasi belasan detik. Mempertahankan ruang bernapas dalam sebuah lagu adalah benteng terakhir untuk menjaga martabat musik sebagai karya seni yang luhur.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 00:00 WIB (5 NOV 2026) - ${articles.length} ARTIKEL ===\n`);
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

  console.log("\n=== SELURUH BATCH 00:00 WIB (5 NOV 2026) BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261105-0000.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
