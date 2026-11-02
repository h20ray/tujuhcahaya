import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Monokultur Browser Chromium: Bahaya Monopoli Tersembunyi di Balik Kepunahan Engine Independen",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Web Browser", "Chromium", "Monopoli", "Privasi", "Standar Web"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Matriks kode biner dan data digital berpendar di layar komputer",
    excerpt: "Hampir seluruh browser modern kini ditenagai oleh mesin perender yang sama: Blink/Chromium. Kepunahan alternatif independen menyerahkan kendali arsitektur internet global ke tangan satu korporasi periklanan raksasa.",
    content: `Buka daftar aplikasi di komputer atau ponsel pintar Anda hari ini: Google Chrome, Microsoft Edge, Brave, Opera, hingga Vivaldi. Secara visual, masing-masing peramban menampilkan antarmuka yang berbeda dengan fitur unggulan tersendiri. Namun begitu Anda membedah kode intinya, seluruh aplikasi tersebut sesungguhnya digerakkan oleh satu mesin perender yang sama: Chromium.

Ilusi keberagaman pilihan ini menyembunyikan konsolidasi kekuasaan paling berbahaya dalam sejarah internet modern. Web lahir sebagai jaringan terdesentralisasi yang dibangun di atas standar terbuka universal. Ketika satu entitas korporasi menguasai lebih dari delapan puluh persen pangsa pasar mesin perender web, standar terbuka tersebut secara perlahan bermutasi menjadi spesifikasi kepemilikan privat (*proprietary*).

## Dikte Standar dan Erosi Alat Pemblokir Iklan

Dominasi mesin tunggal mengubah dinamika pengembangan web menjadi arena permainan yang timpang:

* **Pengebirian Efektivitas Pemblokir Iklan**: Penerapan arsitektur ekstensi baru (*Manifest V3*) membatasi kemampuan filter permintaan jaringan secara deklaratif. Langkah ini secara sistematis melemahkan keampuhan ekstensi privasi seperti uBlock Origin, menguntungkan model bisnis periklanan digital sang empunya mesin.
* **Pengabaian Standar Terbuka W3C**: Pengembang web global kini terbiasa menguji situs mereka hanya pada mesin Chromium. Ketika sebuah fitur berjalan mulus di Chromium meski menyalahi standar resmi web, pengembang enggan memperbaikinya untuk browser alternatif seperti Mozilla Firefox berbobot Gecko atau Safari berbasis WebKit.
* **Kerentanan Seragam pada Infrastruktur Web**: Ketika celah keamanan nol-hari (*zero-day vulnerability*) ditemukan pada mesin Chromium, hampir seluruh pengguna internet dunia seketika berada dalam posisi rentan terhadap eksploitasi serangan siber.

## Merawat Keberagaman Ekosistem Digital

Masa depan web yang sehat membutuhkan kompetisi antar-mesin render yang setara, bukan monokultur teknologi yang pasrah pada arahan dewan direksi satu perusahaan iklan. Pengguna internet yang sadar privasi perlu secara sadar mendukung mesin independen seperti Gecko dan menuntut lembaga antimonopoli global mengawasi integrasi vertikal teknologi peramban.

Internet bebas tidak boleh diserahkan pada monopoli satu mesin pemroses yang mendikte batas-batas interaksi digital umat manusia.`
  },
  {
    title: "Kutukan Kompilasi Shader di PC Gaming: Mengapa Game Ratusan Ribu Rupiah Masih Gagap di Kartu Grafis Termahal",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "PC Gaming", "GPU", "Shader Cache", "Optimasi", "Unreal Engine"],
    imageUrl: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Unit kartu grafis gaming bertenaga tinggi dengan kipas pendingin berputar",
    excerpt: "Membeli kartu grafis seharga puluhan juta rupiah tidak lagi menjamin pengalaman bermain yang mulus. Sindrom kompilasi shader mendadak merusak rilis game PC modern akibat kelalaian studio dalam mengoptimalkan pipeline grafis.",
    content: `Anda baru saja merakit PC gaming impian dengan kartu grafis termutakhir berharga puluhan juta rupiah, memasang pendingin cair, dan mengaktifkan monitor berkecepatan bingkai tinggi. Namun begitu masuk ke dalam game aksi petualangan terbaru berharga delapan ratus ribu rupiah, pengalaman bermain justru diwarnai kejutan yang menjengkelkan: layar mendadak membeku selama setengah detik (*micro-stutter*) setiap kali musuh menembakkan sihir baru atau pintu gerbang kastil dibuka.

Gangguan performa yang merusak imersi ini bukan disebabkan oleh keterbatasan tenaga perangkat keras Anda, melainkan oleh wabah teknis yang dikenal sebagai kompilasi shader saat berjalan (*shader compilation stutter*). Di era antarmuka pemrograman aplikasi tingkat rendah seperti DirectX 12 dan Vulkan, tanggung jawab menerjemahkan kode instruksi visual (*shader*) ke dalam bahasa mesin grafis diserahkan langsung kepada studio pembuat game.

## Kemalasan Rekayasa di Balik Kejutan Layar Beku

Alih-alih mengompilasi seluruh instruksi grafis sebelum permainan dimulai, banyak pengembang modern memilih jalan pintas yang merugikan pemain:

* **Kompilasi Just-in-Time yang Membebani Prosesor**: Ketika efek visual baru muncul pertama kali di layar, prosesor dipaksa menerjemahkan kode shader secara mendadak dalam hitungan milidetik. Beban komputasi lonjakan ini seketika menghentikan aliran bingkai grafis, menghasilkan efek jeda yang merusak timing permainan kompetitif.
* **Keengganan Memasang Layar Prapemrosesan (*Pre-compilation Step*)**: Solusi teknis untuk masalah ini sesungguhnya sangat sederhana: membiarkan komputer memproses tumpukan shader selama beberapa menit di menu utama sebelum memulai permainan baru. Namun demi mengejar metrik akses instan, banyak penerbit mengabaikan tahapan krusial ini.
* **Perangkap Porting Konsol yang Ceroboh**: Konsol permainan seperti PlayStation memiliki arsitektur perangkat keras seragam sehingga shader dapat dikompilasi sebelumnya dari server pabrikan. Ketika game tersebut diadaptasi ke PC tanpa restrukturisasi *pipeline*, keragaman kombinasi GPU dan driver pengguna membuat sistem komputasi kewalahan.

## Menolak Standar Ganda Kualitas Game PC

Komunitas PC gamer berhak menuntut produk jadi yang menghormati investasi perangkat keras mereka. Label rilis penuh harus mencakup pengujian performa yang ketat terhadap siklus kompilasi grafis, bukan sekadar janji perbaikan tambalan peranti lunak berbulan-bulan setelah rilis.

Pengembang game harus mengembalikan disiplin optimasi teknis ke baris kode mereka alih-alih berlindung di balik fitur peningkatan skala visual buatan (*DLSS/FSR*) yang sekadar menambal keretakan fondasi komputasi.`
  },
  {
    title: "Ilusi Multitasking di Meja Kerja: Bagaimana Pergantian Fokus Konstan Menghancurkan Korteks Prefrontal Otak",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Produktivitas", "Otak", "Multitasking", "Kesehatan Mental", "Fokus"],
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Meja kerja minimalis dengan secangkir kopi dan laptop di tengah suasana hening",
    excerpt: "Membuka puluhan tab browser sambil membalas pesan obrolan kerja dan menyimak rapat daring dipandang sebagai simbol produktivitas tinggi. Namun secara neurobiologis, otak manusia tidak mampu memproses beberapa tugas analitis sekaligus.",
    content: `Di lingkungan kerja korporat modern, kemampuan melakukan banyak hal secara serentak (*multitasking*) sering kali diagung-agungkan dalam deskripsi lowongan kerja sebagai keterampilan elit. Karyawan yang sanggup mengetik laporan keuangan sembari membalas pesan obrolan kantor dan sesekali mengangguk dalam panggilan video dipandang sebagai pekerja tangguh yang sangat produktif.

Namun dari sudut pandang neurosains kognitif, kebanggaan tersebut bertumpu pada ilusi biologis yang keliru. Sirkuit saraf di korteks prefrontal otak manusia tidak dirancang dengan arsitektur pemrosesan paralel untuk tugas-tugas berbasis bahasa dan pemikiran abstrak. Apa yang kita sebut sebagai multitasking sesungguhnya adalah pergantian konteks secara cepat (*rapid context switching*) yang membebani energi sel saraf secara berlebihan.

## Ongkos Biologis dari Perhatian yang Tercabik

Setiap kali perhatian Anda berpindah dari satu jendela aplikasi ke aplikasi lain, otak harus membayar harga metabolisme yang mahal:

* **Residu Perhatian (*Attention Residue*)**: Ketika beralih dari tugas menulis ke membaca email mendadak, sebagian kapasitas kerja memori kerja Anda masih tertinggal pada tugas sebelumnya. Residu mental ini menurunkan ketajaman logika hingga setara dengan kehilangan waktu tidur satu malam penuh.
* **Pengurasan Cadangan Glukosa Saraf**: Mengubah fokus mental secara konstan menghabiskan cadangan oksigen dan glukosa di otak jauh lebih cepat daripada berkonsentrasi mendalam pada satu hal. Kondisi ini memicu kelelahan mental dini dan perasaan hampa di sore hari.
* **Kecanduan Rangsangan Mikro-Dopamin**: Memeriksa notifikasi pesan baru memicu pelepasan dopamin cepat yang menipu otak agar merasa telah mencapai sesuatu, padahal tidak ada pekerjaan mendalam bernilai substansial yang berhasil diselesaikan.

## Membangun Benteng Perlindungan Konsentrasi Monotasking

Mengembalikan kedaulatan kognitif membutuhkan keberanian menetapkan batas tegas terhadap arus informasi:

1. **Penerapan Blok Waktu Tanpa Distraksi (*Time Blocking*)**: Dedikasikan waktu sembilan puluh menit tanpa menyalakan aplikasi obrolan untuk menuntaskan satu tugas analitis utama sebelum memeriksa pesan masuk secara berkala.
2. **Minimalisasi Jendela Antarmuka Kerja**: Tutup seluruh tab peramban yang tidak relevan dengan pekerjaan saat ini. Ruang kerja visual yang bersih meminimalkan tarikan perhatian visual yang tidak disengaja.
3. **Normalisasi Komunikasi Asinkron**: Berhentilah menganggap bahwa setiap pesan masuk wajib dibalas dalam tempo hitungan detik. Kualitas pekerjaan jangka panjang dibangun di atas kedalaman refleksi, bukan kecepatan reaksi instan.

Kapasitas berpikir jernih adalah aset paling berharga dari akal budi manusia. Jangan biarkan ia hancur berkeping-keping demi mengejar fatamorgana produktivitas semu.`
  },
  {
    title: "Standardisasi Algoritma Nada Pendek: Bagaimana TikTok Mengubah Struktur Penulisan Lagu Pop",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Industri Musik", "Lagu Pop", "TikTok", "Streaming", "Struktur Lagu"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Mikrofon studio rekaman profesional dengan latar belakang panel akustik",
    excerpt: "Lagu pop modern kini kerap menghilangkan intro instrumen dan langsung melompat ke bagian refrain dalam sepuluh detik pertama. Struktur lagu tradisional verse-chorus-bridge yang dinamis dikorbankan demi potongan audio lima belas detik yang ramah algoritma.",
    content: `Dengarkan kembali lagu-lagu pop legendaris dari dekade 1970-an atau 1980-an: petikan gitar pembuka yang memikat, dentuman drum yang membangun suasana secara bertahap, dan perjalanan melodi menuju puncak emosi yang dirajut dengan kesabaran artistik. Intro lagu bisa berlangsung hingga tiga puluh atau empat puluh detik, memberi ruang bagi pendengar untuk menyelami atmosfer sebelum suara vokal pertama kali menyapa.

Bandingkan pengalaman itu dengan deretan lagu populer yang merajai tangga musik digital hari ini. Dalam tempo lima detik pertama, vokal utama sudah langsung menyanyikan bait refrain (*chorus*), disusul tempo ritme cepat tanpa ada jeda eksplorasi instrumen. Struktur komposisi lagu pop telah dimutilasi menjadi format hiper-ringkas, dipangkas hingga hanya menyisakan bagian paling adiktif yang mudah dijadikan latar video berdurasi lima belas detik di media sosial.

## Dikte Durasi dan Hilangnya Kedalaman Cerita

Pergeseran mekanisme konsumsi audio di platform video pendek telah memaksa produser musik mengubah cetak biru penciptaan lagu:

* **Penghilangan Bagian Jembatan (*The Death of the Bridge*)**: Bagian bridge yang secara musikal berfungsi sebagai titik balik harmonis sebelum klimaks akhir kini hampir lenyap dari struktur penulisan pop. Lagu dirancang berputar di sekeliling satu melodi pengait (*hook*) yang diulang-ulang tanpa variasi progresi akord yang menantang.
* **Percepatan Tempo Demi Retensi Pendengar**: Algoritma pemeringkat streaming menghukum lagu yang dilewati (*skip*) pada tiga puluh detik awal. Rasa takut akan metrik ini memaksa penulis lagu menghilangkan intro lembut demi menyodorkan klimaks instan di awal putaran.
* **Fenomena Lagu Dipercepat (*Sped-Up Audio*)**: Tren menyetel ulang kecepatan lagu hingga seratus tiga puluh persen demi mencocokkan ritme visual memicu produser merilis versi cepat secara resmi, mengikis bobot penjiwaan vokal asli sang penyanyi.

## Menyelamatkan Musik dari Penjara Algoritma

Musik bukan sekadar jingle pengiring tarian singkat di layar ponsel. Lagu yang abadi adalah sebuah narasi utuh yang menuntut waktu untuk merayap ke dalam sanubari pendengarnya, menyajikan ketegangan dinamika yang naik dan turun secara organik.

Label rekaman dan musisi harus berani keluar dari perangkap metrik retensi instan. Kembalikan hak lagu untuk bernapas panjang, berikan ruang bagi intro yang syahdu, dan percayalah bahwa telinga manusia selalu merindukan keindahan komposisi yang utuh bukan sekadar potongan audio pendek tanpa jiwa.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 05:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 05:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-0500.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
