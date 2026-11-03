import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Obsesi Layar 120Hz di Ponsel Menengah: Mengapa Baterai Dikorbankan demi Animasi Gulir yang Tak Dirasakan Pengguna",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Smartphone", "Layar", "Refresh Rate", "Baterai", "Hardware"],
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ponsel pintar dengan layar menyala menampilkan detail antarmuka grafis di tempat terang",
    excerpt: "Di segmen ponsel menengah, angka 120Hz dijadikan senjata pemasaran utama. Namun tanpa teknologi adaptif LTPO yang mahal, panel ini menguras daya baterai hingga tiga puluh persen lebih boros hanya demi kehalusan animasi menu.",
    content: `Dalam beberapa tahun belakangan, angka *refresh rate* layar telah menjadi medan pertempuran spesifikasi paling bising di kelas ponsel pintar tiga hingga lima jutaan rupiah. Kotak kemasan perangkat dicetak tebal dengan tulisan 120Hz Ultra Smooth Display, menjanjikan sensasi usapan jari sehalus sutra yang diklaim akan mengubah total pengalaman interaksi pengguna.

Namun di balik kebanggaan angka tersebut, tersimpan kompromi daya yang merugikan fungsi paling mendasar sebuah gadget komunikasi: daya tahan baterai. Berbeda dengan ponsel kelas atas (*flagship*) yang menggunakan panel LTPO canggih yang mampu menurunkan laju penyegaran layar hingga 1Hz saat membaca teks statis, ponsel kelas menengah umumnya mengusung panel LCD atau AMOLED konvensional dengan laju penyegaran kaku.

## Pemborosan Daya di Layar Statis

Memaksa layar ponsel menyegarkan gambar seratus dua puluh kali per detik sepanjang waktu menciptakan beban baterai yang masif:

* **Penyedotan Daya Tanpa Henti Saat Membaca**: Ketika Anda membaca artikel berita panjang atau dokumen kerja, gambar di layar praktis tidak bergerak. Namun pada panel 120Hz non-adaptif, unit pengolah grafis dan panel layar tetap dipaksa bekerja pada frekuensi maksimal, membakar daya baterai tiga puluh persen lebih rakus tanpa ada manfaat fungsional.
* **Degenerasi Siklus Pengisian Baterai**: Konsumsi daya yang boros memaksa pengguna mengisi ulang baterai dua hingga tiga kali dalam sehari. Peningkatan frekuensi pengecasan cepat (*fast charging*) ini mempercepat degradasi sel baterai litium, membuat kapasitas penampungan daya anjlok drastis sebelum pemakaian satu tahun.
* **Kenaikan Suhu Perangkat yang Memicu Throttling**: Kerja konstan panel pada frekuensi tinggi menimbulkan panas berlebih pada bodi ponsel. Saat suhu internal melonjak, sistem operasi secara otomatis menurunkan kecerahan layar (*dimming*) dan mencekik kecepatan prosesor, menghasilkan ironi performa yang justru terasa lambat.

## Mengutamakan Efisiensi Energi di Atas Angka Brosur

Kecepatan animasi gulir layar adalah kemewahan estetika, namun kemampuan ponsel untuk bertahan hidup seharian penuh dalam situasi darurat adalah kebutuhan hidup yang hakiki. Konsumen yang cerdas sebaiknya mempertimbangkan untuk menyetel layar ke mode seimbang 60Hz atau 90Hz demi mendapatkan masa pakai baterai yang jauh lebih panjang.

Sudah saatnya kita berhenti terhipnotis oleh perlombaan angka spesifikasi semu dan mulai menuntut keandalan daya tahan nyata dari perangkat harian kita.`
  },
  {
    title: "Kepunahan Menu Utama Video Game yang Hening: Ketika Lobi Game Diubah Menjadi Etalase Iklan Mikrotransaksi Berisik",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Industri Game", "Monetisasi", "Desain Antarmuka", "Gamer", "UI/UX"],
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Monitor gaming dengan tampilan grafis interaktif dan headphone studio",
    excerpt: "Nyalakan game modern dan Anda tidak lagi disambut menu sederhana yang hening, melainkan deretan jendela pop-up tawaran skin diskon dan banner promosi musim yang berkedip agresif layaknya etalase kasino digital.",
    content: `Coba ingat kembali rasa takjub saat pertama kali menyalakan video game klasik di era PlayStation 2 atau PC lawas: layar pembuka menampilkan ilustrasi karakter utama berlatar pemandangan temaram, musik orkestra atau petikan gitar lembut mengalun perlahan, dan hanya ada tiga atau empat opsi menu yang bersih: New Game, Load Game, Options, dan Credits. Ada keheningan khidmat yang mengundang pemain untuk melangkah masuk ke dalam dunia naratif baru.

Bandingkan kesyahduan tersebut dengan pengalaman menyalakan game aksi modern hari ini. Belum sempat menekan tombol apa pun, layar televisi atau monitor langsung dihujani tiga hingga lima jendela sembulan (*pop-up*) bertubi-tubi: penawaran bundel kostum diskon berbatas waktu, hitungan mundur musim kompetisi, ajakan membeli koin mata uang virtual, serta banner promosi acara akhir pekan yang berkedip menyilaukan mata.

## Transformasi Antarmuka Menjadi Mesin Pengait Kasino

Perubahan drastis desain antarmuka (*UI/UX*) game modern ini mencerminkan pergeseran identitas dari karya seni interaktif menjadi etalase ritel agresif:

* **Pengepungan Ruang Pandang Pemain**: Opsi untuk memulai permainan (*Play*) kini kerap disembunyikan di sudut kecil layar atau digeser ke tab sekunder, sementara panggung utama antarmuka diserahkan sepenuhnya kepada karakter 3D yang mengenakan kostum berbayar mahal dengan tombol pintas menuju toko digital (*Item Shop*).
* **Pemanfaatan Bunyi Rangsangan Dopamin (*Casino Sound Effects*)**: Setiap kali pemain mengeklik menu toko, terdengar denting suara koin emas atau kembang api digital yang dirancang khusus oleh pakar psikologi perilaku untuk memicu dorongan belanja impulsif di alam bawah sadar.
* **Perusakan Imersi Sebelum Permainan Dimulai**: Atmosfer mencekam dari game perang atau cerita distopia seketika hancur berkeping-keping ketika menu utama justru memamerkan karakter mengenakan kostum berwarna neon cerah hasil kolaborasi promosi jenama makanan cepat saji.

## Menyelamatkan Kesakralan Pintu Gerbang Virtual

Menu utama sebuah video game adalah jembatan sakral antara realitas sehari-hari dengan dunia imajinasi penciptanya. Ketika pintu gerbang tersebut dicemari oleh spanduk komersial yang rakus, rasa hormat terhadap karya seni yang ada di baliknya ikut terkikis habis.

Komunitas gamer berhak menolak antarmuka game yang memperlakukan mereka layaknya dompet berjalan. Kita merindukan kembali era di mana menu pembuka adalah karya seni yang bernyawa, bukan etalase toko serba ada yang berisik.`
  },
  {
    title: "Bahaya Duduk Silang Kaki Kronis: Bagaimana Kebiasaan Sepele Menggeser Panggul dan Menjepit Saraf Perifer",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Ergonomi", "Postur", "Biomekanika", "Tulang Belakang", "Gaya Hidup"],
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seseorang dalam posisi relaksasi tubuh dan postur tegak seimbang",
    excerpt: "Menyilangkan satu kaki di atas lutut saat bekerja di meja kantor adalah gestur refleks yang tampak nyaman dan elegan. Namun secara biomekanika, posisi asimetris ini memutar sendi panggul dan menjepit saraf perifer pemicu nyeri punggung bawah kronis.",
    content: `Perhatikan posisi kaki Anda saat ini saat membaca tulisan ini di kursi meja kerja: apakah salah satu kaki Anda sedang bertengger menyilang di atas lutut kaki lainnya? Bagi jutaan pekerja kantoran, duduk dengan posisi kaki menyilang (*cross-legged sitting*) telah menjadi kebiasaan motorik otomatis yang terjadi tanpa disadari begitu tubuh mendarat di atas kursi busa.

Secara sosial, gestur ini kerap diasosiasikan dengan keanggunan dan kenyamanan santai. Namun bila dianalisis dari kacamata ortopedi dan biomekanika muskuloskeletal, menyilangkan kaki selama berjam-jam setiap hari adalah salah satu pemicu utama distorsi struktural kerangka tubuh bagian bawah yang merusak keseimbangan postur secara permanen.

## Efek Domino Ketidakseimbangan Sendi Panggul

Beban tubuh yang didistribusikan secara timpang memicu rentetan gangguan anatomis pada rantai kinetik tubuh:

* **Rotasi Sendi Sakroiliaka dan Pelintiran Panggul**: Saat satu kaki diangkat menyilang, tulang panggul di sisi tersebut terangkat dan berputar ke arah dalam. Posisi asimetris ini memaksa sendi sakroiliaka meregang tidak seimbang, memicu peradangan ligamen panggul yang kerap menimbulkan nyeri tajam di bokong dan selangkangan.
* **Kompensasi Skoliosis Fungsional pada Tulang Belakang**: Demi menjaga pandangan mata tetap horizontal di depan monitor komputer saat panggul miring, kolom tulang belakang secara otomatis melengkung ke arah samping. Lengkungan kompensasi ini menekan bantalan cakram tulang belakang (*intervertebral discs*), mempercepat risiko pengapuran sendi dan saraf kejepit (*sciatica*).
* **Kompresi Saraf Peroneal dan Hambatan Sirkulasi Balik**: Tekanan lutut bagian atas pada lipatan lutut bawah menekan langsung jalur saraf peroneal (*peroneal nerve*) dan pembuluh darah balik (*vena*). Tekanan konstan ini menyebabkan sensasi kesemutan mati rasa pada telapak kaki serta meningkatkan risiko varises vena di betis.

## Melatih Disiplin Ergonomis Kedua Telapak Kaki

Memulihkan keselarasan biomekanika panggul dimulai dari membangun kesadaran posisi duduk yang simetris:

1. **Jangkar Dua Telapak Kaki Rata di Lantai**: Biasakan kedua telapak kaki menapak kokoh di atas lantai dengan sudut lutut membentuk sembilan puluh derajat. Jika kursi terlalu tinggi, gunakan bantalan pijakan kaki (*footrest*).
2. **Gunakan Pengingat Sensori Kursi**: Atur posisi pinggul rapat menyentuh sandaran kursi belakang agar distribusi bobot tubuh tertumpu rata pada kedua tuberositas iskium (tulang duduk).
3. **Lakukan Peregangan Otot Piriformis**: Setiap dua jam sekali, lakukan peregangan peregangan angka empat (*figure-four stretch*) sambil duduk tegak untuk mengendurkan otot bokong dalam yang tegang akibat kompresi panggul.

Tubuh manusia dirancang untuk bertumpu pada fondasi simetri yang kokoh. Rawatlah kelurusan panggul Anda sebelum kebiasaan sepele di meja kerja bermutasi menjadi keluhan sendi kronis yang membatasi ruang gerak hidup.`
  },
  {
    title: "Monokultur Auto-Tune dalam Vokal Pop: Ketika Ketidaksempurnaan Manusiawi Dihapus demi Nada Robotik yang Seragam",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Auto-Tune", "Produksi Musik", "Vokal", "Industri Rekaman", "Budaya Pop"],
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Konsol mixer audio profesional dengan kenop fader dan lampu level suara di studio rekaman",
    excerpt: "Perangkat lunak koreksi nada vokal kini tidak lagi dipakai sekadar memoles nada fals minor, melainkan menjadi filter seragam yang mengikis serak emosional, getaran alami, dan karakter khas vokal manusia demi kesempurnaan nada sintetis.",
    content: `Dengarkan kembali rekaman vokal legendaris dari dekade 1960-an hingga 1990-an: desah nafas Freddie Mercury yang bertenaga, tarikan serak emosional Janis Joplin yang membakar panggung, atau ketidakteraturan intonasi Kurt Cobain yang penuh kepedihan mentah. Rekaman-rekaman tersebut sarat dengan ketidaksempurnaan mikro (*micro-imperfections*) nada yang sedikit meleset dari skala nada matematis—namun justru di sanalah letak jiwa dan resonansi kemanusiaan yang menggetarkan dada pendengarnya.

Kini, tekstur vokal yang hidup tersebut hampir sepenuhnya disterilkan dari lanskap musik pop arus utama. Melalui peranti lunak koreksi nada digital (*pitch correction*) seperti Auto-Tune dan Melodyne, setiap suku kata yang keluar dari pita suara penyanyi langsung ditarik secara paksa menuju kisi-kisi frekuensi nada yang sempurna tanpa toleransi simpangan sepeser pun.

## Pengebirian Emosi Demi Kesempurnaan Matematis

Dominasi perangkat koreksi nada mengubah studio rekaman menjadi jalur perakitan produk yang dingin:

* **Pelenyapan Karakter Timbre Alami**: Setiap pita suara manusia memiliki keunikan getaran (*vibrato*) dan warna suara (*timbre*) yang dipengaruhi oleh anatomi fisik rongga mulut dan tenggorokan. Ketika algoritma memotong transisi nada alami menjadi lompatan instan, karakter khas sang penyanyi lenyap, berganti menjadi tekstur vokal plastik yang terdengar serupa di semua lagu.
* **Kemalasan Pelatihan Teknik Vokal Dasar**: Kemudahan menambal nada sumbang di meja mixing membuat produser rekaman tidak lagi menuntut disiplin latihan pernapasan dan kontrol intonasi dari para vokalis muda. Daya tarik visual dan popularitas media sosial lebih diutamakan karena kelemahan teknik bernyanyi dapat diselesaikan dengan beberapa klik mouse di komputer studio.
* **Normalisasi Standar Nada Tiruan di Telinga Publik**: Paparan terus-menerus terhadap vokal yang terkoreksi sempurna membiasakan generasi baru pendengar menganggap nada alami yang sedikit bergetar sebagai kesalahan produksi, menciptakan lingkaran setan estetika yang memusuhi kejujuran ekspresi organik.

## Merayakan Kerapuhan Emosi Manusiawi

Kesenian musik pada hakikatnya adalah jembatan penyampaian rasa dari satu jiwa manusia ke jiwa manusia lainnya. Emosi duka, amarah, dan cinta tidak pernah berwujud kurva matematis yang kaku dan mulus; ia bergetar, retak, dan terkadang tersendat oleh luapan perasaan yang tulus.

Para produser dan artis musik independen harus berani mematikan efek koreksi nada otomatis tersebut. Kembalikan desah nafas penyanyi ke dalam mikrofone, biarkan sedikit ketidaksempurnaan nada hadir sebagai bukti kehadiran manusia sejati di balik mikrofon studio.`
  }
];

export async function main() {
  console.log(`=== MEMULAI BATCH AUTO-PUBLISH HOURLY 08:00 WIB (${articles.length} ARTIKEL) ===\n`);
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

  console.log("\n=== SELURUH BATCH 08:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-0800.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
