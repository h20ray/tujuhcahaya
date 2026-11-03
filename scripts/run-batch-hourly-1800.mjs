import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Bahaya Izin Notifikasi Push di Browser: Bagaimana Tombol Klik Sederhana Mengubah Sudut Layar Menjadi Papan Reklame Penipuan",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Browser", "Notifikasi Push", "Keamanan Siber", "Privasi", "Phishing"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Layar laptop menampilkan deretan baris kode dan peringatan keamanan sistem digital",
    excerpt: "Banyak situs web memunculkan kotak kecil meminta izin notifikasi di peramban. Begitu Anda mengklik izinkan, sudut layar komputer Anda seketika dibajak menjadi etalase pesan peringatan virus palsu dan jebakan penipuan.",
    content: `Saat sedang menelusuri artikel berita atau mencari tautan unduhan dokumen di internet, hampir setiap pengguna pernah dihadang oleh kotak dialog kecil di sudut kiri atas jendela browser bertuliskan pesan singkat: "Situs ini ingin mengirimkan notifikasi kepada Anda". Banyak pengelola situs nakal merekayasa tampilan ini dengan pesan manipulatif, seperti berpura-pura menjadi tombol verifikasi manusia (*CAPTCHA*) palsu yang memaksa pengunjung mengklik tombol "Izinkan" (*Allow*) demi melanjutkan bacaan.

Namun kepatuhan tanpa sadar pada tombol klik tersebut sesungguhnya adalah awal dari pembajakan ruang kerja visual Anda. Protokol Web Push API yang sejatinya dirancang untuk memberikan informasi penting dari aplikasi web terpercaya telah disulap oleh sindikat periklanan agresif menjadi jalan tol untuk menyusupkan sampah digital langsung ke baki sistem operasi komputer Anda.

## Eksploitasi Protokol Web Push dan Modus Peringatan Palsu

Bahaya izin notifikasi peramban melampaui sekadar gangguan suara dering yang mengesalkan:

* **Manipulasi Peringatan Sistem Antivirus Tiruan**: Begitu izin diberikan, sindikat pelaku kejahatan siber dapat mengirimkan pesan pop-up bertubi-tubi yang dirancang persis menyerupai logo sistem operasi Windows atau antivirus terkenal. Notifikasi berkedip ini mengabarkan bahwa komputer Anda telah terinfeksi puluhan trojan berbahaya, mendesak korban mengklik tautan darurat yang justru memasang perangkat lunak pemeras (*ransomware*).
* **Kemampuan Mengirim Iklan Tanpa Membuka Situs Asal**: Berbeda dengan iklan spanduk biasa yang lenyap saat tab ditutup, modul notifikasi push berjalan di latar belakang melalui skrip pekerja layanan (*service worker*). Sudut kanan bawah layar laptop Anda akan terus dibombardir oleh gambar promosi judi daring atau produk suplemen palsu bahkan saat peramban sedang dalam keadaan tertutup rapat.
* **Perangkap Pembelian Langganan Gelap**: Mengklik spanduk notifikasi palsu sering kali langsung mengarahkan pengguna ke situs web jebakan yang mengaktifkan pemotongan pulsa operator seluler atau pencurian token sesi login perbankan tanpa melewati verifikasi keamanan tambahan.

## Membersihkan Sudut Layar dari Jeratan Iklan Nakal

Mengembalikan ketenangan layar kerja Anda hanya membutuhkan beberapa langkah audit pengaturan:

1. **Blokir Permintaan Notifikasi Secara Permanen**: Masuk ke menu privasi peramban dan aktifkan opsi "Situs tidak diizinkan mengirim notifikasi" agar jendela izin menyebalkan tersebut tidak pernah lagi muncul di layar Anda.
2. **Cabut Seluruh Izin Situs Mencurigakan Hari Ini**: Periksa daftar situs yang telah mengantongi izin notifikasi di setelan browser Anda, lalu hapus seluruh domain yang tidak Anda kenali atau tidak memiliki reputasi kredibel.
3. **Edukasi Diri Terhadap Pola Verifikasi Tipuan**: Ingatlah bahwa verifikasi manusia CAPTCHA yang asli tidak pernah meminta izin pengiriman notifikasi; setiap situs yang menuntut klik tombol izin adalah penipuan terencana.

Sudut layar komputer Anda adalah ruang fokus yang berharga. Jangan pernah biarkan sindikat periklanan bayangan menyandera ketenangan kerja Anda dengan kepalsuan spanduk digital.`
  },
  {
    title: "Kematian Tombol Pause Sejati dalam Video Game: Ketika Waktu Bermain Menolak Berhenti demi Kebutuhan Hidup Nyata",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Desain Game", "Tombol Pause", "Video Game", "Ergonomi", "Industri Game"],
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kontroler video game tergeletak di atas meja ruang tamu di samping secangkir minuman hangat",
    excerpt: "Menekan tombol Start atau Escape mestinya menghentikan seluruh detak waktu di dalam dunia game petualangan solo. Namun tren game modern melenyapkan tombol jeda sejati, menghukum gamer dewasa yang memiliki tanggung jawab dunia nyata.",
    content: `Bagi siapa pun yang tumbuh bersama konsol permainan klasik, tombol Start di tengah stik kontroler adalah sahabat paling setia dalam situasi darurat. Ketika bel pintu rumah berbunyi, orang tua memanggil dari dapur, atau anak bayi menangis di kamar tidur, menekan tombol tersebut akan seketika membekukan seluruh semesta game: musuh berhenti mengayunkan pedang, kobaran api terdiam di udara, dan pemain dapat beranjak menuntaskan urusan nyata tanpa secuil pun rasa cemas.

Namun dalam lanskap video game modern dekade ini, hak dasar untuk menghentikan waktu permainan tersebut telah dirampas secara sistemik. Dari gelombang game aksi berlabel *soulslike* hingga petualangan pemain tunggal yang diam-diam tersambung ke jaringan daring, menekan tombol menu kini hanya memunculkan panel inventaris transparan sementara waktu di dalam game terus berdetak tanpa ampun. Karakter Anda tetap dapat diserang, dicabik monster, dan tewas sia-sia hanya karena Anda harus mengangkat panggilan telepon mendesak.

## Arogansi Filosofi Desain dan Pengabaian Realitas Pemain

Penghapusan fitur jeda waktu nyata kerap dibungkus dengan alasan artistik yang elitis dan merugikan konsumen:

* **Pemaksaan Konsep Imersi Semu yang Menghukum**: Pengembang kerap berdalih bahwa ketiadaan tombol pause dirancang untuk menjaga ketegangan psikologis pemain agar tidak bisa kabur saat situasi pertarungan memanas. Padahal ada jurang pemisah yang lebar antara tantangan mekanika bermain yang adil dengan arogansi desain yang menolak berkompromi dengan realitas fisik kehidupan pemain di dunia nyata.
* **Diskriminasi Terhadap Gamer Dewasa dan Orang Tua**: Komunitas penikmat game kini didominasi oleh generasi yang telah memasuki fase usia produktif dengan tanggung jawab domestik nyata. Menolak menyediakan tombol pause sejati pada mode solo adalah bentuk ketidakpedulian mutlak terhadap para pemain yang harus membagi fokus antara hobi hiburan dengan pengasuhan anak atau urusan darurat keluarga.
* **Kamuflase Arsitektur Server Terpusat yang Malas**: Banyak game petualangan cerita tunggal sengaja tidak menyertakan tombol pause semata-mata karena kode permainannya dijalankan di atas infrastruktur server daring bersama alih-alih di mesin lokal pemain, memangkas biaya perancangan logika permainan demi efisiensi sepihak korporasi penerbit.

## Menuntut Kembalinya Penghormatan Terhadap Waktu Pemain

Sebuah karya hiburan yang agung harus memiliki kerendahan hati untuk menghargai martabat kehidupan penikmatnya:

1. **Apresiasi Studio yang Menyediakan Mode Jeda Fleksibel**: Berikan pujian bagi pengembang yang tetap menyediakan fitur jeda waktu penuh pada mode pemain tunggal mereka tanpa mempermasalahkan tingkat kesulitan permainan.
2. **Kritisi Praktik Daring Paksa pada Game Naratif**: Suarakan kritik di kanal forum komunitas terhadap judul-judul game cerita tunggal yang memperlakukan sesi petualangan pribadi layaknya arena kompetitif tanpa tombol henti.
3. **Pilihlah Perangkat dengan Fitur Suspensi Sistem**: Maksimalkan fitur penangguhan instan (*system suspend*) pada konsol portabel yang mampu membekukan status memori prosesor secara paksa terlepas dari batasan desain game tersebut.

Game adalah sarana penyegar jiwa di waktu senggang, bukan majikan diktator yang berhak mendikte prioritas hidup manusia di dunia nyata.`
  },
  {
    title: "Mitos Dengkuran Keras Sebagai Tanda Tidur Lelap: Bagaimana Apnea Tidur Diam-diam Menghajar Jantung dan Tekanan Darah",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Sleep Apnea", "Mendengkur", "Jantung", "Kualitas Tidur", "Kesehatan Pernapasan"],
    imageUrl: "https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang berbaring di atas bantal kamar tidur dengan ekspresi kelelahan di pagi hari",
    excerpt: "Suara dengkuran yang menggelegar di kamar tidur sering kali ditertawakan dan dianggap sebagai bukti tidur yang sangat pulas. Padahal bunyi dengkuran adalah sinyal penyumbatan jalan napas yang memicu lonjakan tekanan darah mendadak.",
    content: `Di tengah obrolan santai keluarga atau candaan di lingkungan kerja, suara dengkuran orang yang sedang tidur kerap dijadikan bahan gurauan ringan. Muncul anggapan umum di tengah masyarakat bahwa semakin keras suara dengkur seseorang, semakin pulas dan nyenyak tidur yang ia nikmati setelah seharian memeras keringat mencari nafkah.

Namun dalam kacamata ilmu kedokteran paru dan somnologi (ilmu tidur), keyakinan tradisional tersebut adalah kekeliruan fatal yang sangat berbahaya bagi kelangsungan hidup. Suara dengkuran keras bukanlah tanda kepulasan tidur, melainkan jeritan mekanis dari jaringan lunak tenggorokan yang bergetar hebat akibat jalan napas atas yang menyempit atau tersumbat total. Kondisi ini adalah manifestasi klinis utama dari gangguan henti napas saat tidur (*Obstructive Sleep Apnea* / OSA).

## Badai Hipoksia Nokturnal dan Kerusakan Organ Kardiovaskular

Episode henti napas yang terjadi berulang kali setiap malam memicu rangkaian kerusakan biologis yang menghancurkan organ vital:

* **Lonjakan Adrenalin dan Hipertensi Nokturnal**: Ketika otot tenggorokan kolaps dan aliran udara terhenti selama sepuluh hingga tiga puluh detik, kadar oksigen dalam darah merosot drastis (*desaturasi oksigen*). Otak yang panik mendadak memicu refleks bangun darurat dengan menyemburkan hormon adrenalin ke aliran darah, membuat detak jantung berdegup kencang dan tekanan darah melonjak tajam ratusan kali sepanjang malam.
* **Kelelahan Kronis dan Sakit Kepala Pagi Hari**: Karena otak terus-menerus terbangun dari fase tidur dalam demi menyelamatkan tubuh dari bahaya mati lemas, penderita apnea praktis kehilangan hak menikmati fase tidur gelombang lambat (*deep sleep*) dan fase bermimpi REM. Akibatnya, mereka terbangun dengan mulut kering, tenggorokan sakit, kepala pening, serta rasa kantuk tak tertahankan di siang hari.
* **Pelipatgandaan Risiko Gagal Jantung dan Stroke**: Tekanan negatif ekstrem yang dihasilkan dinding dada saat berusaha menarik napas melawan saluran napas yang tersumbat meregangkan ruang bilik jantung. Dalam jangka panjang, kondisi ini memicu pembesaran bilik jantung, aritmia fibrilasi atrium, serta melipatgandakan risiko serangan stroke fatal saat sedang terlelap.

## Langkah Medis Menyelamatkan Kualitas Pernapasan Tidur

Menangani masalah dengkuran menuntut intervensi medis yang terukur alih-alih membiarkannya berlarut-larut:

1. **Lakukan Pemeriksaan Polisomnografi (Sleep Study)**: Konsultasikan pola dengkuran Anda ke dokter spesialis tidur untuk mengukur indeks henti napas (*Apnea-Hypopnea Index*) guna menentukan tingkat keparahan sumbatan.
2. **Hindari Posisi Tidur Telentang Secara Monoton**: Berbaring telentang memudahkan gaya gravitasi menarik pangkal lidah jatuh ke arah belakang tenggorokan. Latihlah posisi tidur menyamping dengan bantuan guling penopang punggung.
3. **Pertimbangkan Terapi Tekanan Udara Positif (CPAP)**: Bagi penderita OSA derajat sedang hingga berat, penggunaan perangkat masker CPAP yang mengalirkan udara bertekanan lembut saat tidur adalah standar emas medis untuk menjaga jalan napas tetap terbuka lebar sepanjang malam.

Tidur adalah ritual pemulihan seluler paling sakral yang dimiliki raga manusia. Jangan biarkan ilusi dengkuran menutupi bahaya henti napas yang diam-diam mengikis kesehatan jantung dan usia hidup Anda.`
  },
  {
    title: "Kepunahan Solo Saxophone dalam Musik Pop: Mengapa Desah Emosional Tiupan Kuningan Tergusur oleh Synthesizer Datar",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Saxophone", "Produksi Musik", "Industri Musik", "Aransemen", "Solo Instrumen"],
    imageUrl: "https://images.unsplash.com/photo-1525994886773-080587e161c2?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Alat musik saxophone kuningan berkilau emas di panggung musik dengan latar belakang gelap",
    excerpt: "Di era keemasan musik pop abad ke-20, solo tiupan saxophone adalah puncak ledakan emosi yang paling menghujam sukma pendengar. Kini desah hangat instrumen tiup kuningan tersebut telah lenyap dari tangga lagu, digantikan bunyi synthesizer digital yang steril.",
    content: `Putar kembali melodi ikonis pembuka lagu "Careless Whisper" karya George Michael, lengkingan liar tiupan saksofon Clarence Clemons dalam karya megah Bruce Springsteen, atau solo penutup yang memilukan dalam lagu-lagu pop balada dekade 1980-an. Ada satu karakteristik sonik yang membuat bulu kuduk merinding: tiupan instrumen saxophone kuningan mampu mereproduksi desah napas, jeritan parau, dan getaran vibrato yang meniru ekspresi tangis jiwa manusia secara sangat telanjang dan intim.

Namun bila Anda menyusuri seratus lagu terpopuler di tangga musik digital global hari ini, keberadaan instrumen saxophone telah praktis mengalami kepunahan massal. Solo instrumen tiup yang sarat emosi dan ketidaksempurnaan rasa tersebut telah disingkirkan dari studio aransemen musik komersial. Posisinya digantikan oleh preset instrumen sintetis berbasis komputer (*VST plugin*) yang menghasilkan nada-nada presisi, dingin, dan steril tanpa memiliki denyut kehangatan tubuh manusiawi.

## Komersialisasi Biaya Studio dan Dominasi Format Minimalis

Pelenyapan instrumen saxophone dari musik pop berakar dari pergeseran proses produksi dan efisiensi industri:

* **Tuntutan Biaya Rekaman Akustik yang Mahal**: Merekam instrumen tiup berbahan kuningan menuntut ruangan studio rekaman berakustik prima, pemilihan mikrofon pita (*ribbon microphone*) berharga puluhan juta rupiah, serta keahlian musisi sesi profesional dengan bayaran tinggi. Bagi label rekaman modern yang berfokus menekan biaya produksi serendah mungkin, menyewa musisi saxophone asli dipandang sebagai pemborosan anggaran yang tidak sepadan.
* **Keseragaman Tekstur Suara Musik Elektronik**: Selera produser generasi layar sentuh didominasi oleh tekstur bunyi digital yang datar dan mudah dikontrol lewat peranti lunak. Karakter saxophone yang liar, dengan variasi dinamika nada dari tiupan berbisik hingga dengungan serak (*growl*), dianggap terlalu rumit untuk diselipkan ke dalam struktur musik dansa elektronik yang menuntut keteraturan balok nada.
* **Hilangnya Keberanian Melahirkan Momen Melodramatis**: Budaya pop kontemporer kerap memandang solo instrumen tiup melodramatis sebagai elemen masa lalu yang terlalu berlebihan atau terkesan kuno (*cheesy*). Akibatnya, lagu-lagu masa kini kehilangan momen klimaks emosional yang berani meledak dan mengaduk-aduk batin pendengarnya.

## Merawat Kembali Kehangatan Napas Musikal Organik

Menyelamatkan keanekaragaman lanskap suara musik menuntut apresiasi tulus terhadap keterampilan instrumen fisik:

1. **Dengarkan Katalog Musik Jazz, Soul, dan Funk Klasik**: Luangkan waktu untuk menjelajahi karya maestro tiup dunia seperti John Coltrane, Wayne Shorter, atau Grover Washington Jr. guna melatih kembali kepekaan telinga Anda terhadap kekayaan warna suara instrumen tiup.
2. **Dukung Grup Musik yang Menampilkan Seksi Tiup Langsung**: Berikan dukungan penuh bagi band-band independen yang masih setia membawa pemain saxophone dan trompet asli ke atas panggung konser festival musik.
3. **Tuntut Keberanian Eksplorasi Timbre dari Produser Muda**: Suarakan harapan agar produser musik generasi baru tidak ragu mendobrak batas formula digital dan berani mengawinkan ketukan modern dengan kehangatan tiupan napas instrumen akustik.

Sebuah lagu membutuhkan jiwa yang berhembus dari udara paru-paru manusia, bukan sekadar kalkulasi angka biner di dalam cip komputer. Berikan kembali ruang bagi lengkingan saksofon untuk menangis dan bernyanyi di panggung kebudayaan kita.`
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
