import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Ilusi Standardisasi Port USB Type-C: Mengapa Bentuk Fisik Colokan yang Seragam Menyembunyikan Jebakan Kecepatan Transfer Kuno",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Hardware", "USB Type-C", "Gadget", "Smartphone", "Standar Teknologi"],
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kabel USB Type-C dan deretan konektor perangkat keras di atas meja kerja teknis",
    excerpt: "Kemenangan kabel USB Type-C sebagai colokan universal di semua perangkat modern disambut gembira konsumen. Namun di balik keseragaman bentuk fisiknya, pabrikan ponsel cerdik menyembunyikan protokol transfer data purba USB 2.0 yang sangat lambat.",
    content: `Ketika regulator global akhirnya mewajibkan seluruh produsen elektronik mengadopsi konektor USB Type-C sebagai standar pengisian daya dan transfer data tunggal, konsumen di seluruh dunia bernapas lega. Kita membayangkan masa depan yang harmonis: cukup membawa seutas kabel di dalam tas kerja, kabel yang sama dapat digunakan untuk mengisi daya laptop, menghubungkan smartphone ke monitor eksternal, serta memindahkan berkas rekaman video beresolusi tinggi dalam hitungan detik.

Namun di balik kemenangan bentuk fisik simetris tersebut, industri teknologi diam-diam menanamkan jebakan fragmentasi spesifikasi yang sangat membingungkan. USB Type-C hanyalah nama bentuk colokan mekanis luar (*form factor*), bukan jaminan protokol kecepatan transfer data di dalamnya. Banyak konsumen tidak menyadari bahwa perangkat smartphone seharga belasan juta rupiah yang mereka beli masih menggunakan standar transmisi data USB 2.0 dari era tahun 2000.

## Jebakan Kecepatan Kuno di Balik Colokan Modern

Strategi penghematan biaya produksi oleh pabrikan perangkat keras melahirkan kontradiksi teknologi yang merugikan pembeli:

* **Penyelundupan Protokol Berusia Seperempat Abad**: Bentuk colokan USB-C mampu mendukung kecepatan Thunderbolt 4 hingga 40 Gbps. Namun demi memangkas biaya cip kontroler sebesar beberapa dolar, pabrikan smartphone kelas menengah dan beberapa seri ponsel unggulan hanya menyambungkan pin data berkecepatan 480 Mbps (USB 2.0). Akibatnya, memindahkan video rekaman 4K berukuran puluhan gigabita ke komputer membutuhkan waktu berjam-jam layaknya memindahkan data di era komputer lawas.
* **Kekacauan Kompatibilitas Kabel Tanpa Label**: Kabel USB-C yang disertakan di dalam kotak penjualan ponsel pintar umumnya hanyalah kabel pengisian daya (*charge-only cable*) yang tipis. Jika Anda menggunakan kabel tersebut untuk mentransfer data atau menyambungkan layar eksternal (*DisplayPort Alt Mode*), kabel tersebut akan menolak berfungsi tanpa memberikan pesan kesalahan yang jelas kepada pengguna.
* **Risiko Kerusakan Akibat Standar Pengisian Liar**: Di luar kecepatan transfer berkas, fragmentasi protokol pengisian daya cepat (*Power Delivery*, Quick Charge, hingga protokol proprietary pabrikan tertentu) membuat pengguna kerap terjebak membeli kepala charger mahal yang ternyata tidak kompatibel dengan daya maksimal perangkat mereka.

## Menjadi Konsumen Cerdas di Era USB-C

Menghindari jebakan pemasaran menuntut ketelitian membaca spesifikasi teknis sebelum membeli perangkat:

1. **Periksa Angka Generasi USB di Lembar Spesifikasi**: Jangan puas hanya melihat keterangan "USB Type-C" pada kotak smartphone; cari keterangan spesifik apakah perangkat mendukung USB 3.2 Gen 1 (5 Gbps), USB 3.2 Gen 2 (10 Gbps), atau hanya tertulis USB 2.0.
2. **Investasikan Dana pada Kabel Bersertifikasi Resmi**: Belilah kabel pihak ketiga yang memiliki sertifikasi jelas seperti USB-IF dengan label kapasitas daya (misalnya 100W atau 240W) dan kecepatan transfer data (10 Gbps atau 40 Gbps) yang tertera jelas pada kemasan.
3. **Manfaatkan Pembaca Kartu Memori Mandiri untuk Produksi Konten**: Jika ponsel Anda terkunci pada protokol transfer kabel yang lambat, gunakan pembaca kartu microSD berkecepatan tinggi atau protokol transfer nirkabel lokal berkecepatan tinggi melalui Wi-Fi 6 untuk memindahkan aset rekaman berukuran gigabita.

Standardisasi semestinya mempermudah hidup konsumen, bukan menyamarkan kemunduran teknologi di balik bungkus modern. Tuntut transparansi dari pabrikan perangkat keras dengan menolak kompromi kecepatan purba pada perangkat berharga mahal.`
  },
  {
    title: "Kematian Mode Cerita Single-Player di Game FPS: Ketika Kedalaman Narasi Ditumbalkan demi Siklus Monetisasi Multiplayer",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "FPS", "Desain Game", "Single Player", "Kampanye Cerita", "Industri Game"],
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Setup komputer gaming dengan keyboard mekanis dan layar monitor menampilkan permainan aksi interaktif",
    excerpt: "Merasakan petualangan kampanye cerita berbobot dengan karakter yang menggetarkan batin pernah menjadi menu utama game tembak-menembak. Kini penerbit raksasa memangkas mode cerita pemain tunggal demi mengejar arena kompetitif tanpa henti.",
    content: `Siapa pun yang pernah memainkan babak kampanye legendaris seperti misi "All Ghillied Up" di Call of Duty 4: Modern Warfare atau mengarungi lorong-lorong sunyi penuh misteri di seri awal BioShock dan Halo tentu mengingat sensasi emosional yang tertinggal: rasa tegang menyelinap di antara rerumputan Chernobyl, bobot moral dari sebuah pengorbanan militer, serta dialog naratif antar-karakter yang dirajut dengan sinematografi kelas satu.

Namun dalam lanskap industri game tembak-menembak sudut pandang pertama (*first-person shooter* / FPS) modern, pengalaman naratif bernyawa tersebut kian dipinggirkan ke jurang kepunahan. Studio-studio raksasa kini tidak ragu merilis game berbanderol harga penuh satu juta rupiah tanpa menyertakan mode kampanye cerita sama sekali, atau hanya menyajikan serangkaian misi pendek tiga jam yang tampak jelas digarap secara terburu-buru sekadar untuk dijadikan tutorial pengantar menuju arena kompetitif.

## Dalih Finansial di Balik Pemangkasan Kampanye Cerita

Pelenyapan mode pemain tunggal bukanlah cermin dari kehendak kreatif desainer game, melainkan keputusan dingin manajer keuangan penerbit:

* **Biaya Produksi Aset Naratif yang Sangat Mahal**: Membangun kampanye cerita berkualitas tinggi menuntut investasi besar untuk menyewa aktor penangkap gerak tubuh (*motion capture*), penulis naskah profesional, rekaman musik orkestra, dan perancangan lingkungan permainan yang unik di setiap babak tanpa bisa didaur ulang.
* **Ketiadaan Saluran Monetisasi Pascapembelian**: Bagi korporasi penerbit, mode kampanye pemain tunggal dianggap sebagai investasi mati. Sekali pemain menyelesaikan cerita dan melihat gulungan kredit akhir, tidak ada celah bagi penerbit untuk terus menjual kostum senjata digital, tiket musiman (*battle pass*), atau peti hadiah acak layaknya di mode multiplayer daring.
* **Perburuan Metrik Waktu Putar dan Keterikatan Harian**: Investor di pasar saham menuntut laporan metrik keterikatan pengguna aktif harian (*DAU*) yang tinggi. Mode arena daring tanpa akhir yang dirancang untuk memicu kecanduan kompetitif jauh lebih mudah dijadikan bahan promosi laporan keuangan ketimbang karya seni cerita yang memiliki titik tamat.

## Menghargai Warisan Narasi dalam Game Interaktif

Menikmati media video game secara utuh menuntut kita untuk tidak membiarkan genre aksi tereduksi menjadi kasino kompetitif:

1. **Dukung Pengembang yang Berani Mempertahankan Kampanye Cerita Mandiri**: Berikan dukungan finansial dengan membeli karya studio yang tetap setia menggarap game FPS naratif murni seperti seri Doom, Wolfenstein, Metro, atau karya independen yang menempatkan jiwa cerita di atas metrik pasar.
2. **Kritisi Kebijakan Menjual Game Multiplayer Tanpa Mode Cerita dengan Harga Penuh**: Jangan ragu menyuarakan ketidakpuasan jika penerbit memangkas separuh konten tradisional namun tetap mematok harga premium yang melambung tinggi.
3. **Eksplorasi Kembali Judul Klasik Era Keemasan**: Luangkan waktu untuk memainkan kembali mahakarya tembak-menembak naratif masa lampau melalui platform preservasi digital untuk mengingatkan diri kita betapa megahnya seni bercerita melalui kacamata bidikan senjata interaktif.

Game FPS bukan sekadar simulasi menembak titik piksel di layar bersama orang asing. Ia adalah kanvas seni interaktif tempat kita dapat merasakan denyut ketegangan jiwa manusia di tengah skenario ekstrem yang tak mungkin kita alami di dunia nyata.`
  },
  {
    title: "Bahaya Membersihkan Saluran Telinga dengan Cotton Bud: Mengapa Dorongan Kapas Diam-diam Memadatkan Serumen dan Memicu Infeksi",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "THT", "Kesehatan Telinga", "Serumen", "Infeksi Telinga", "Gaya Hidup Sehat"],
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Peralatan medis steril dan kapas medis di ruang pemeriksaan klinik kesehatan",
    excerpt: "Sensasi geli yang melegakan saat mengorek liang telinga dengan batang kapas membuat banyak orang menjadikannya ritual harian sehabis mandi. Namun tindakan mekanis ini justru mendorong gumpalan lilin telinga menempel ke gendang pendengaran.",
    content: `Bagi jutaan orang di seluruh dunia, menyelipkan sebatang korek kuping kapas (*cotton bud*) ke dalam liang telinga sesaat setelah mandi pagi adalah salah satu kenikmatan kecil yang sulit dihilangkan. Ujung kapas yang lembut diputar-putar di lorong telinga untuk menyerap sisa air hangat dan membersihkan cairan kuning kecokelatan, menghadirkan sensasi geli yang melegakan sekaligus perasaan puas bahwa indra pendengaran telah steril dari kotoran.

Namun apa yang dianggap sebagai kebiasaan higienis tersebut adalah salah satu kesalahan perawatan tubuh paling umum yang terus disuarakan oleh para dokter spesialis telinga, hidung, dan tenggorokan (THT). Liang telinga manusia bukanlah saluran pembuangan kotor yang harus dikeruk secara berkala. Menusukkan batang kapas ke lorong telinga yang sempit ibarat menggunakan tongkat pemadat tanah: Anda mungkin mengangkat secuil kotoran di ujung kapas, namun sebagian besar massa lilin justru terdorong semakin jauh ke dalam.

## Anatomi Pertahanan Mandiri dan Bahaya Impaksi Serumen

Lilin telinga atau serumen (*cerumen*) sesungguhnya adalah sistem pertahanan hayati tercanggih yang dirancang oleh tubuh:

* **Fungsi Pelindung Antibakteri dan Penjaga Kelembapan**: Serumen bukan kotoran limbah, melainkan cairan khusus yang diproduksi oleh kelenjar sebasea dan seruminosa. Ia bersifat asam untuk mematikan bakteri dan jamur, bertekstur lengket untuk menjebak debu dan serangga kecil agar tidak merayap ke gendang telinga, serta menjaga lapisan kulit liang telinga tetap elastis dan tidak gatal.
* **Mekanisme Pembersihan Mandiri (*Self-Cleaning System*)**: Kulit liang telinga tumbuh secara unik bergerak ke arah luar layaknya sabuk berjalan (*conveyor belt*). Gerakan mengunyah makanan, berbicara, dan menguap secara alami mendorong serumen tua yang kering keluar ke muara liang telinga dengan sendirinya tanpa bantuan alat apa pun.
* **Bahaya Impaksi Serumen dan Perforasi Gendang Telinga**: Dorongan batang kapas berulang kali memadatkan serumen menjadi gumpalan keras seperti semen (*serumen prop*) yang menempel di membran timpani. Kondisi ini memicu penurunan daya dengar, dengung telinga konstan (*tinnitus*), vertigo pusing berputar, bahkan risiko fatal robeknya gendang telinga jika tangan Anda tersenggol orang lain saat sedang mengorek kuping.

## Merawat Kebersihan Indra Pendengaran yang Tepat

Merawat kesehatan telinga menuntut penghentian intervensi mekanis agresif di dalam liang telinga:

1. **Batasi Pembersihan Hanya pada Daun Telinga Luar**: Gunakan ujung handuk lembut atau kain basah untuk menyeka area daun telinga dan muara liang luar sehabis mandi; jangan pernah memasukkan benda apa pun yang lebih kecil dari jari kelingking Anda ke dalam lubang telinga.
2. **Gunakan Obat Tetes Pelunak Serumen Jika Diperlukan**: Jika Anda merasa telinga Anda tersumbat air atau serumen yang tebal, teteskan beberapa tetes larutan karbamid peroksida atau minyak mineral khusus telinga yang dijual di apotek untuk melunakkan kotoran agar mengalir keluar secara alami.
3. **Kunjungi Dokter THT untuk Tindakan Ekstraksi Profesional**: Lakukan pemeriksaan telinga ke dokter spesialis setidaknya enam bulan sekali untuk tindakan pembersihan aman menggunakan teknik irigasi air hangat atau penyedotan mikro (*micro-suction*) di bawah panduan mikroskop medis.

Telinga Anda memiliki perkakas pembersih mandiri yang bekerja tanpa henti setiap detik. Hormati mekanisme alami tubuh Anda dengan membiarkan liang telinga bekerja sendiri tanpa diganggu oleh tusukan kapas yang berbahaya.`
  },
  {
    title: "Kepunahan Format Album Konsep Ganda: Mengapa Eksplorasi Musikalitas Skala Besar Tak Lagi Ditoleransi Industri Streaming",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Album Konsep", "Industri Musik", "Streaming", "Produksi Musik", "Karya Seni"],
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Panggung pertunjukan musik dengan tata lampu megah dan kabut dramatis di atas panggung",
    excerpt: "Melahirkan album ganda berisi puluhan lagu yang merajut alur opera naratif pernah menjadi puncak pembuktian kedewasaan seorang musisi. Kini arsitektur sonik megah tersebut dimusnahkan oleh tuntutan platform streaming yang mendikte rilis lagu eceran.",
    content: `Dalam sejarah perkembangan musik modern, format rekaman album ganda (*double album*) selalu dipandang sebagai puncak keberanian artistik sebuah band atau pencipta lagu. Ketika The Beatles merilis *The White Album*, Pink Floyd membangun narasi pengasingan jiwa dalam *The Wall*, atau The Smashing Pumpkins meluncurkan *Mellon Collie and the Infinite Sadness*, mereka tidak sekadar mengumpulkan lagu-lagu populer ke dalam satu wadah. Mereka mendirikan sebuah katedral sonik dua jam yang megah: memiliki babak pembuka yang luas, percabangan cerita yang liar, hingga klimaks orkestra yang menghancurkan batin pendengarnya.

Mendengarkan album ganda menuntut waktu, perenungan batin, dan kesiapan emosional dari para penikmatnya. Di era kejayaan piringan hitam dan cakram padat ganda, merilis dua puluh delapan lagu sekaligus adalah pernyataan sikap bahwa sang seniman menolak dikerdilkan oleh formula komersial stasiun radio komersial tiga menit.

## Pembunuhan Sistemik terhadap Narasi Musik Berskala Besar

Namun di era ekonomi streaming berbasis platform digital saat ini, keberanian melahirkan karya konsep skala masif tersebut nyaris mustahil ditemukan di lanskap musik arus utama:

* **Tirani Metrik Perhatian dan Algoritma Playlist**: Algoritma layanan streaming dirancang untuk memaksimalkan retensi pengguna kasual. Membagikan karya berisi dua puluh lagu dengan alur naratif yang saling terhubung dianggap sebagai bencana bagi metrik performa, karena trek instrumental transisi atau lagu atmosferik yang berdurasi panjang akan langsung dilewati (*skip*) oleh pendengar, yang berakibat fatal pada penurunan skor rekomendasi sang musisi di beranda aplikasi.
* **Desakan Label untuk Merilis Single Eceran Setiap Bulan**: Eksekutif label rekaman modern kini mendesak musisi agar membedah karya mereka menjadi single lepasan yang dirilis berkala setiap empat minggu sekali. Tujuannya murni demi menjaga algoritma media sosial tetap terisi konten segar, mengorbankan kohesi estetika dan narasi dramatis yang seharusnya dinikmati dalam satu tarikan nafas utuh.
* **Devaluasi Nilai Karya di Mata Generasi Instan**: Budaya mendengarkan musik telah bergeser dari pengalaman kontemplatif mendalam menjadi sekadar konsumsi audio fungsional untuk latar bekerja atau tren tarian video pendek. Ketiadaan waktu luang membuat karya seni yang menuntut konsentrasi pendengar selama sembilan puluh menit dipandang sebagai beban yang melelahkan.

## Merawat Kembali Keagungan Mahakarya Naratif

Menikmati musik bermartabat menuntut kita untuk menolak pendangkalan budaya dengar instan:

1. **Luangkan Waktu untuk Menyimak Album Utuh Tanpa Distraksi**: Jadwalkan satu malam di akhir pekan untuk mendengarkan sebuah album konsep dari lagu pertama hingga penutup tanpa memegang ponsel atau berpindah aplikasi, biarkan imajinasi visual Anda merajut cerita dari harmoni nada yang mengalir.
2. **Koleksi Rilisan Fisik Format Gatefold**: Miliki kembali piringan hitam vinil ganda atau set kotak cakram CD untuk menikmati kemegahan tata letak buku lirik, ilustrasi seni visual, dan catatan produksi yang menjadi separuh jiwa dari karya rekaman megah tersebut.
3. **Dukung Musisi yang Melawan Standarisasi Format Singkat**: Berikan apresiasi penuh dan beli merchandise resmi dari kelompok musisi rock progresif, metal simfonik, jazz, atau musik kamar yang tetap berani melahirkan karya bertema besar di tengah arus tren serba instan.

Musik pada hakikat tertingginya adalah sastra pendengaran yang mampu merangkum keluasan jagat raya emosi manusia. Jangan biarkan rumus efisiensi algoritma mereduksi kedalaman sebuah novel simfoni menjadi sekadar deretan kutipan singkat yang lewat tanpa jejak di layar beranda Anda.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 21:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

    // 2. Publish (Local SQLite & Outbox JSON, Remote Production Plesk)
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

  console.log("\n=== SELURUH BATCH 21:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-2100.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
