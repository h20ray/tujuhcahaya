import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Ilusi Kemudahan Passkey Tanpa Sinkronisasi Mandiri: Ketika Kunci Kriptografis Mengikat Identitas Anda ke Ekosistem Korporasi Raksasa",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Keamanan Siber", "Passkey", "Kriptografi", "Privasi Digital", "Autentikasi"],
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Gembok digital dan sirkuit kode enkripsi pada layar komputasi modern",
    excerpt: "Adopsi passkey FIDO2 dipuji sebagai loncatan besar mengakhiri era kata sandi rentan peretasan. Namun ketergantungan pada sinkronisasi rantai kunci tertutup milik raksasa teknologi diam-diam menjebak pengguna dalam dinding ekosistem proprietary.",
    content: `Gerakan mempensiunkan kata sandi (*passwordless*) mencapai momentum terbesarnya ketika konsorsium FIDO dan raksasa sistem operasi mengadopsi standar Passkey. Berpijak pada kriptografi kunci publik asimetris, passkey secara elegan memusnahkan ancaman rekayasa sosial tertua di jagat maya: *phishing*. Kunci privat tidak pernah meninggalkan perangkat keras pengguna, sementara server aplikasi hanya menyimpan kunci publik yang tidak berguna bagi peretas sekalipun basis data mereka bocor.

Namun di balik kenyamanan masuk akun tanpa mengetik kata sandi rumit, terselip strategi penguncian (*vendor lock-in*) yang kian mengencang. Standar passkey yang awalnya dirancang terbuka kini dikemas ke dalam brankas sinkronisasi awan tertutup (*synced passkeys*) milik tiga penguasa sistem operasi: iCloud Keychain, Google Password Manager, dan Windows Hello. Tanpa adanya protokol pertukaran mandiri yang terstandarisasi, kebebasan pengguna berpindah antar-platform kembali tersandera di balik tembok korporasi.

## Brankas Awan Terisolasi dan Jebakan Fragmentasi

Mekanisme sinkronisasi otomatis passkey membawa konsekuensi kontrol kepemilikan data yang krusial bagi kemandirian digital:

* **Ketiadaan Fitur Ekspor-Impor Kunci Lintas Ekosistem**: Tidak seperti manajer kata sandi tradisional yang memungkinkan Anda mengekspor data terenkripsi ke dalam berkas CSV atau JSON cadangan, kunci privat passkey diisolasi di dalam enklave perangkat keras (*Secure Enclave/TPM*). Berpindah dari iPhone ke perangkat Android atau komputer Linux menuntut Anda mengatur ulang kredensial satu demi satu secara manual dari nol.
* **Ketergantungan Absolut pada Akun Utama Korporasi**: Kunci passkey Anda disinkronkan melalui akun Google atau Apple ID. Bila akun induk tersebut sewaktu-waktu dibekukan akibat kekeliruan algoritma deteksi otomatis atau sengketa pembayaran, Anda seketika kehilangan akses login ke puluhan layanan pihak ketiga yang bergantung pada passkey tersebut.
* **Erosi Kebiasaan Manajemen Kredensial Mandiri**: Kemudahan biometrik sidik jari dan pemindai wajah meninabobokan kewaspadaan pengguna. Banyak yang mengira passkey disimpan di server web tujuan, padahal hilangnya akses ke rantai kunci lokal berarti putusnya rantai verifikasi kriptografis Anda.

## Mempertahankan Kedaulatan Kunci Autentikasi

Menerapkan standar keamanan modern tanpa terjebak hegemoni platform membutuhkan strategi pengelolaan kredensial yang netral:

1. **Gunakan Manajer Sandi Pihak Ketiga Multi-Platform**: Alihkan penyimpanan passkey ke solusi pengelola kredensial sumber terbuka independen seperti Bitwarden atau 1Password yang mendukung sinkronisasi lintas Windows, macOS, Android, dan Linux tanpa memihak ekosistem tertentu.
2. **Manfaatkan Kunci Keamanan Fisik Mandiri (*Hardware Security Key*)**: Untuk akun-akun paling kritis seperti email utama dan perbankan, simpan passkey secara luring (*offline*) di dalam kunci perangkat keras fisik berbasis FIDO2 seperti YubiKey.
3. **Simpan Opsi Pemulihan Multi-Faktor Cadangan**: Jangan pernah menonaktifkan seluruh jalur pemulihan darurat; selalu simpan kode pemulihan satu kali pakai (*backup codes*) di ruang penyimpanan terenkripsi yang aman.

Passkey adalah kemenangan telak bagi keamanan komputasi personal dari ancaman peretasan jarak jauh. Namun keamanan sejati harus selalu beriringan dengan kebebasan memilih, bukan kompromi kepemilikan kunci digital Anda kepada satu raksasa teknologi.`
  },
  {
    title: "Tirani Level Scaling pada Game RPG Terbuka: Mengapa Musuh yang Ikut Naik Level Melenyapkan Kepuasan Perkembangan Karakter",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Desain Game", "RPG", "Level Scaling", "Mekanik Game", "Industri Game"],
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Pemandangan lanskap dunia fantasi luas dalam permainan peran terbuka di layar monitor",
    excerpt: "Mekanik level scaling pada game RPG open-world dirancang agar tantangan selalu seimbang di setiap sudut peta. Namun sistem penyesuaian otomatis ini justru mengebiri sensasi perkembangan karakter dan membuat petualangan terasa hampa.",
    content: `Salah satu daya pikat paling mendasar dari genre role-playing game (RPG) adalah fantasi pertumbuhan kekuatan (*power progression*). Pemain memulai petualangan sebagai petualang ringkih yang nyaris tewas dipatuk serigala liar, mengumpulkan setiap keping zirah rongsokan, dan perlahan menapaki pohon keterampilan hingga menjelma menjadi ksatria tangguh yang mampu menaklukkan monster terkuat dengan sekali tebasan pedang. Kepuasan emosional ini lahir dari kontras nyata antara kelemahan di masa lalu dan dominasi di masa sekarang.

Sayangnya, dalam dua dekade terakhir, banyak studio game modern mengadopsi jalan pintas desain yang merusak keajaiban tersebut: *dynamic level scaling*. Demi memastikan pemain bebas menjelajahi peta terbuka ke arah mana pun tanpa terhalang tembok kesulitan regional, pengembang menyematkan algoritma yang secara otomatis menaikkan atribut kesehatan dan daya serang musuh seirama dengan level karakter utama. Niat menjaga keseimbangan tantangan ini pada praktiknya justru menjadi bumerang yang mematikan rasa pencapaian bermain.

## Ilusi Kekuatan dan Degradasi Dinamika Dunia Fantasi

Menerapkan penskalaan musuh secara agresif menghancurkan logika internal desain dunia dan motivasi eksplorasi:

* **Hilangnya Rasa Kepuasan Bertambah Kuat**: Ketika karakter Anda mencapai level lima puluh dengan persenjataan legendaris tetapi masih membutuhkan lima tebasan penuh hanya untuk membunuh bandit rendahan di pinggir jalan desa, angka level tersebut kehilangan maknanya. Pertumbuhan karakter terasa layaknya fatamorgana di mana musuh terus berlari di atas treadmill yang sama dengan Anda.
* **Lenyapnya Sensasi Bahaya Teritori Tertentu**: Dunia game klasik terasa hidup karena memiliki batas bahaya alami. Memasuki rawa beracun atau gua naga di level awal adalah petualangan menegangkan yang menguji nyali. Dengan *level scaling*, seluruh benua terasa homogen karena tingkat ancaman di sarang iblis purba sama ringannya dengan halaman belakang kuil awal.
* **Hukuman Tersembunyi Bagi Pilihan Karakter Non-Kombat**: Penskalaan otomatis kerap mengacaukan kalkulasi matematika internal. Pemain yang menghabiskan poin level untuk keterampilan meracik ramuan (*crafting*) atau diplomasi dialog justru mendapati musuh di alam liar bertambah buas dan mustahil dikalahkan karena atribut tempur musuh melonjak tanpa diimbangi peningkatan daya serang senjata pemain.

## Merancang Tantangan yang Menghormati Waktu Pemain

Membangun ekosistem RPG yang memuaskan menuntut keberanian tim pengembang untuk membiarkan pemain memanen hasil jerih payahnya:

1. **Terapkan Desain Tingkat Kesulitan Berbasis Wilayah (*Zone-Based Gating*)**: Petakan dunia dengan zona level yang jelas dan terkunci alami. Memberi ruang bagi pemain untuk merasakan teror saat tersesat di wilayah berbahaya adalah kunci melahirkan cerita perjalanan yang berkesan.
2. **Berikan Kepuasan Dominasi di Wilayah Awal**: Biarkan pemain yang telah menjelajah ratusan jam kembali ke desa pertama dan menyapu bersih monster liar dengan mudah, sebagai bukti nyata bahwa waktu puluhan jam yang mereka investasikan benar-benar membuahkan hasil.
3. **Fokus pada Variasi Perilaku Kecerdasan Buatan Bukan Sekadar Kantong Darah (*Bullet Sponge*)**: Menaikkan tingkat kesulitan seharusnya diwujudkan lewat pola serangan musuh yang lebih taktis dan formasi pertarungan yang cerdas, bukan melipatgandakan bar kesehatan musuh hingga pertarungan terasa monoton.

Game RPG bukan kalkulator angka statistik yang harus selalu seimbang dalam kurva datar. Jiwa petualangan sejati lahir dari keberanian menghadapi ketidakpastian dunia dan kebanggaan menaklukkan rintangan yang pernah membuat kita bertekuk lutut.`
  },
  {
    title: "Bahaya Mengonsumsi Suplemen Melatonin Tanpa Resep: Mengapa Dosis Bebas Pil Tidur Justru Mengacaukan Reseptor Otak dan Memperparah Insomnia",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Tidur", "Melatonin", "Insomnia", "Farmakologi", "Gaya Hidup Sehat"],
    imageUrl: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kapsul suplemen kesehatan dan botol kaca di samping lampu tidur temaram",
    excerpt: "Kerap dianggap sebagai suplemen alami tanpa efek samping, konsumsi pil melatonin marak dijadikan jalan pintas pekerja urban yang insomnia. Namun asupan hormon eksogen dosis tinggi justru menekan produksi alami tubuh dan merusak arsitektur tidur.",
    content: `Bagi kaum profesional perkotaan yang bergulat dengan tekanan tenggat kerja dan paparan cahaya layar ponsel hingga larut malam, insomnia telah menjadi momok kesehatan harian. Di tengah keputusasaan mencari rasa kantuk, produk suplemen melatonin kerap dipromosikan sebagai dewa penyelamat. Dijual bebas di rak toko swalayan dan lokapasar digital dalam bentuk permen jeli (*gummies*) manis atau kapsul ekstrak tidur alami, publik digiring percaya bahwa melatonin hanyalah vitamin penenang herbal biasa yang sepenuhnya aman dikonsumsi setiap hari tanpa resep dokter.

Namun persepsi bahwa melatonin adalah suplemen tanpa risiko merupakan kekeliruan medis yang berbahaya. Melatonin secara biologis bukanlah obat tidur penenang (*sedative*), melainkan molekul hormon pengatur waktu sirkadian yang sangat kuat. Memasukkan hormon eksogen sintetis ke dalam aliran darah tanpa dosis presisi dan pengawasan klinis berisiko melumpuhkan mekanisme pengaturan jam biologis alami yang dirancang tubuh manusia selama jutaan tahun evolusi.

## Disregulasi Kelenjar Pineal dan Efek Samping Farmakologis

Mengonsumsi melatonin bebas secara sembarangan menimbulkan distorsi ritme istirahat jangka panjang:

* **Dosis Berlebih yang Melampaui Batas Fisiologis**: Tubuh manusia normalnya hanya memproduksi melatonin alami dalam satuan mikrogram (sekitar 10 hingga 80 mikrogram per malam) dari kelenjar pineal di dasar otak. Produk suplemen komersial yang beredar di pasaran justru mengandung dosis 3 hingga 10 miligram—ratusan kali lipat lebih tinggi dari kebutuhan tubuh normal. Konsentrasi ekstrem ini membanjiri reseptor otak dan memicu rasa pening serta kantuk berkepanjangan di pagi hari (*melatonin hangover*).
* **Mekanisme Umpan Balik Negatif Produksi Endogen**: Ketika otak terus-menerus mendeteksi keberadaan hormon melatonin dalam jumlah melimpah dari luar, kelenjar pineal merespons dengan cara menurunkan sensitivitas reseptor (*downregulation*) dan memangkas produksi melatonin alami tubuh sendiri. Akibatnya, saat Anda mencoba berhenti mengonsumsinya, insomnia Anda justru kambuh jauh lebih parah daripada kondisi awal (*rebound insomnia*).
* **Merusak Arsitektur dan Fase Tidur REM**: Melatonin eksogenosis berlebih kerap memperpanjang durasi tidur gelombang lambat ringan tetapi memangkas proporsi fase tidur Rapid Eye Movement (REM). Fase REM adalah fase paling vital untuk pemrosesan memori emosional dan restorasi mental, sehingga seseorang bisa tetap merasa letih dan linglung meski telah terpejam selama delapan jam penuh.

## Mengembalikan Kebugaran Malam Lewat Regulasi Alami

Memulihkan pola tidur yang berkualitas menuntut perbaikan sinyal lingkungan dibanding ketergantungan pil sintetis:

1. **Jadikan Kegelapan Total Sebagai Pemicu Hormon Alami**: Hormon melatonin hanya akan dilepaskan secara optimal oleh kelenjar pineal saat retina mata mendeteksi ketiadaan spektrum cahaya biru. Matikan monitor kerja dan redupkan lampu kamar minimal enam puluh menit sebelum target waktu tidur.
2. **Kunci Jam Bangun Pagi Secara Konsisten**: Bangun di jam yang persis sama setiap pagi—termasuk di akhir pekan—dan segera dapatkan paparan sinar matahari langsung selama sepuluh menit untuk menyetel ulang jam sirkadian inti (nukleus suprakiasmatik).
3. **Batasi Penggunaan Melatonin Hanya untuk Terapi Darurat Singkat**: Jika memang diperlukan untuk mengatasi jet lag penerbangan melintasi zona waktu, batasi dosis terendah (0,5 hingga 1 miligram) dan gunakan paling lama tiga hari berturut-turut.

Tidur nyenyak adalah hak biologis alami tubuh yang terkalibrasi oleh keharmonisan gaya hidup, bukan komoditas instan yang bisa dibeli di dalam botol plastik suplemen harian.`
  },
  {
    title: "Mitos Kabel Audio Berlapis Emas Jutaan Rupiah: Mengapa Klaim Peningkatan Kehangatan Suara Sering Kali Hanyalah Efek Plasebo Audiophile",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Audio", "Audiophile", "Akustik", "Kabel Audio", "Produksi Musik"],
    imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kabel audio jack headphone berlapis logam tembaga dan perangkat penguat suara analog",
    excerpt: "Industri audio konsumen dipenuhi produk kabel interkoneksi eksotis berharga belasan juta rupiah dengan janji panggung suara lebih hangat. Namun hukum fisika transmisi listrik dan pengujian buta membuktikan bahwa klaim tersebut sering kali hanya ilusi psikologis.",
    content: `Di lorong pameran perangkat audio kelas atas dan forum-forum diskusi audiophile, perdebatan seputar kualitas kabel penghubung sinyal selalu menjadi topik yang memicu fanatisme tersendiri. Para pabrikan kabel butik berlomba-lomba meluncurkan kabel interkoneksi analog berlapis perak murni, konektor tembaga beroksigen rendah (*oxygen-free copper*), hingga balutan emas 24 karat yang dibanderol puluhan juta rupiah. Brosur pemasaran mereka dipenuhi istilah puitis: menjanjikan suara vokal yang lebih hangat, separasi instrumen yang lebih mengudara, dan lapisan panggung suara yang konon mustahil dicapai kabel standar.

Namun ketika klaim-klaim magis tersebut ditantang di laboratorium fisika dan uji dengar ilmiah berstandar ganda, tabir ilusi kemewahan itu runtuh seketika. Sinyal audio analog yang mengalir dari pemutar musik menuju headphone atau amplifier pada dasarnya hanyalah arus listrik bolak-balik berfrekuensi rendah. Berdasarkan hukum dasar elektromagnetik, kabel tembaga berkualitas wajar dengan pelindung interferensi yang baik sudah menghantarkan sinyal audio tanpa ada distorsi frekuensi yang dapat dideteksi telinga manusia.

## Hukum Konduktivitas Elektrik dan Bias Konfirmasi Manusia

Membedah fenomena kabel audio mewah menuntut pemahaman objektif atas hukum sains dan psikologi persepsi:

* **Parameter LCR dan Karakteristik Sinyal Audio**: Performa sebuah kabel listrik secara ilmiah hanya ditentukan oleh tiga parameter dasar: induktansi (*L*), kapasitansi (*C*), dan resistansi (*R*). Pada panjang kabel headphone standar (satu hingga dua meter) dengan rentang frekuensi dengar manusia (20 Hz hingga 20 kHz), perbedaan nilai LCR antara kabel tembaga standar seharga ratusan ribu rupiah dan kabel perak berharga belasan juta rupiah teramat mikroskopis hingga tidak mampu mengubah respons frekuensi sinyal musik.
* **Peran Emas Sebagai Pencegah Korosi Bukan Peningkat Kualitas Suara**: Secara fisika material, perak dan tembaga sesungguhnya memiliki daya konduktivitas listrik yang lebih tinggi dibanding emas. Penggunaan lapisan tipis emas pada ujung konektor jack semata-mata berfungsi untuk mencegah terjadinya oksidasi atau karat permukaan dalam jangka panjang, bukan untuk menyulap resolusi musik menjadi lebih renyah atau merdu.
* **Kekuatan Bias Biaya Terbenam (*Sunk Cost Fallacy*) dan Efek Plasebo**: Telinga manusia sangat mudah dipengaruhi oleh ekspektasi visual dan psikologis. Ketika seseorang baru saja mengeluarkan uang belasan juta rupiah untuk membeli seuntai kabel rajutan mewah, otak secara bawah sadar akan memvalidasi keputusan finansial tersebut dengan meyakinkan diri bahwa suara yang keluar terdengar jauh lebih megah. Saat diuji dalam metode uji dengar ganda acak (*double-blind ABX test*) di mana pendengar tidak tahu kabel mana yang sedang terpasang, para pendengar berpengalaman sekalipun terbukti gagal membedakan kabel mewah dari kabel biasa.

## Kebijaksanaan Mengalokasikan Anggaran Produksi Audio

Menata sistem audio yang berkualitas menuntut investasi dana pada mata rantai yang benar-benar memberikan dampak fisik nyata:

1. **Prioritaskan Pilihan Transduser Speaker dan Headphone**: Karakteristik membran diafragma, ruang resonansi akustik, dan kualitas driver speaker menyumbang lebih dari delapan puluh persen karakter reproduksi suara Anda.
2. **Pilih Kabel Berdasarkan Kualitas Sambungan Fisik dan Pelindung Luar**: Carilah kabel dengan solderan sambungan yang kokoh, jack logam yang pas presisi di lubang konektor, dan lapisan pelindung anyaman (*braided shielding*) yang rapat untuk mencegah dengung interferensi gelombang elektromagnetik sekitar.
3. **Benahi Penataan Akustik Ruang Dengar**: Mengatur penempatan sudut speaker dan memasang karpet atau peredam pantulan suara di dinding kamar akan memberikan lompatan kejernihan suara seratus kali lipat lebih drastis dibanding membeli kabel eksotis termahal di dunia.

Kesenangan mendengarkan musik sejati bersumber dari kepekaan meresapi bait harmoni dan dinamika karya para seniman, bukan dari rasa bangga memamerkan kabel berkilauan yang hanya memuaskan ego kepemilikan materi.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 19:00 WIB (4 NOV 2026) - ${articles.length} ARTIKEL ===\n`);
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

  console.log("\n=== SELURUH BATCH 19:00 WIB (4 NOV 2026) BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261104-1900.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
