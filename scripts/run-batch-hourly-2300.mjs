import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

export const articles = [
  {
    title: "Krisis Pencarian Web: Ketika Mesin Pencari Menyerah di Hadapan Banjir Konten Otomatis Buatan Bot",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Mesin Pencari", "Kecerdasan Buatan", "Internet", "SEO Slop", "Kedaulatan Digital"],
    imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Tampilan kode baris data dan matriks pencarian algoritma di layar monitor programmer komputer",
    excerpt: "Mencari jawaban teknis atau ulasan produk jujur di internet kini seperti menyusuri lorong sampah digital. Halaman pertama mesin pencari dikuasai pabrik konten sintetis hasil rekayasa SEO agresif yang hampa makna.",
    content: `Dua dekade lalu, mengetikkan pertanyaan spesifik ke dalam kolom pencarian internet terasa seperti membuka pintu perpustakaan raksasa yang diisi oleh catatan tangan manusia-manusia berpengetahuan. Mulai dari diskusi perbaikan motor di forum komunitas lawas, catatan teknis programmer di blog personal, hingga resep masakan rumahan yang ditulis dengan ketulusan pengalaman nyata.

Hari ini, pengalaman eksplorasi tersebut telah terkikis habis. Halaman pertama hasil pencarian kini dikuasai oleh ladang artikel sintetis tak bertuan (*content farms*) yang dirancang khusus untuk memuaskan algoritma pemeringkat Google, bukan menjawab kebutuhan pembaca manusia.

## Kolaps Ekosistem Akibat Trik SEO Agresif

Degradasi kualitas web publik ini dipicu oleh konvergensi dua kekuatan komersial yang merusak:

* **Pabrik Konten Bertenaga Model Bahasa Sintetis**: Ribuan situs agregator zombi memproduksi jutaan artikel sampah setiap hari dengan biaya komputasi yang nyaris nol. Artikel-artikel ini memutar kata kunci yang sama berulang-ulang dalam paragraf berputar-putar tanpa pernah menyentuh substansi solusi.
* **Perangkap Monopoli Iklan Terprogram (*Programmatic Ads*)**: Selama sebuah halaman situs mampu menyedot lalu lintas klik dan menampilkan spanduk iklan otomatis, pemilik domain tidak peduli apakah pembaca mendapatkan informasi valid atau justru tersesat dalam kebohongan logika.
* **Migrasi Masif ke Taman Bertembok (*Walled Gardens*)**: Karena frustrasi dengan halaman hasil pencarian yang dipenuhi artikel pesanan, para peselancar internet terpaksa menambahkan embel-embel nama forum komunitas tertutup seperti Reddit, Discord, atau GitHub di akhir kueri mereka semata demi menemukan percakapan antarmanusia asli.

## Menyelamatkan Web dari Kematian Kognitif

Kondisi kritis ini membuktikan teori *Dead Internet* bukan lagi sekadar spekulasi fiksi ilmiah murahan di forum maya. Jika internet publik terus dibiarkan dipenuhi oleh teks buatan bot yang kemudian dipanen kembali oleh bot lain untuk melatih bot berikutnya, ekosistem informasi kita akan mengalami pembusukan model (*model collapse*) secara permanen.

Inisiatif pengindeksan independen berskala kecil, kurasi editorial manual oleh manusia berintegritas, dan perlawanan terhadap hegemoni mesin pencari korporat adalah satu-satunya jalan agar jaringan web global tidak berakhir sebagai kuburan data yang sunyi dari akal budi manusia.`
  },
  {
    title: "Sindrom Daur Ulang Industri Game: Mengapa Penerbit Lebih Memilih Remaster Aman daripada Karya Baru",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "Industri Game", "Remaster", "Remake", "PlayStation", "Kritik Game"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Koleksi kontroler konsol video game dan konsol retro modern tertata di atas meja gamer",
    excerpt: "Game rilisan empat tahun lalu dipoles ulang dengan resolusi sedikit lebih tajam dan dijual kembali seharga satu juta rupiah. Ketakutan penerbit besar terhadap risiko finansial melahirkan era daur ulang yang membosankan.",
    content: `Jadwal pengumuman presentasi video game kini tak lagi menghadirkan debar kejutan yang memompa adrenalin. Jika di masa keemasan industri kita menanti pengenalan semesta fiksi baru atau mekanik gameplay yang merombak pakem lama, panggung showcase modern lebih sering dipenuhi oleh satu kata yang melelahkan: *Remastered* atau *Remake*.

Bahkan batasan waktu kelayakan sebuah game untuk diperbarui kian tak masuk akal. Judul-judul yang baru berumur empat atau lima tahun—yang secara visual dan mekanik masih sangat segar dimainkan di konsol generasi sebelumnya—mendadak dirilis ulang dengan banderol harga rilis penuh Rp1 juta ke atas hanya demi tambahan fitur penelusuran sinar (*ray tracing*) minor dan waktu muat yang lebih singkat beberapa detik.

## Pelarian Finansial Menghindari Risiko Kreatif

Kebijakan daur ulang tanpa henti ini adalah cerminan langsung dari kepanikan finansial para pemegang saham penerbit papan atas:

* **Bengkaknya Anggaran Produksi yang Tak Berkelanjutan**: Ketika biaya pembuatan satu proyek baru membutuhkan modal lebih dari Rp3 triliun dengan siklus pengembangan enam hingga tujuh tahun, kegagalan komersial satu judul saja dapat membangkrutkan seluruh divisi studio.
* **Eksploitasi Nostalgia Konsumen Setia**: Merilis ulang judul yang sudah memiliki basis penggemar militan adalah cara termudah mengamankan arus kas kuartalan. Biaya pemasaran menjadi sangat hemat karena publikasi telah mengenal karakter dan alur ceritanya sejak lama.
* **Kemacetan Inovasi Mekanik Gameplay**: Sumber daya talenta animator, pemrogram kecerdasan buatan musuh, dan penulis skenario terbaik studio dialihkan hanya untuk memoles tekstur daun dan bayangan karakter lama, mematikan inkubasi ide-ide segar yang berani melawan arus.

## Menuntut Keberanian Melangkah Maju

Video game adalah medium kesenian interaktif yang berkembang karena keberanian para perancangnya melompati batas teknologi dan imajinasi. Jika para pencipta era 1990-an hanya sibuk memoles game arcade dekade sebelumnya, kita tidak akan pernah menyaksikan lahirnya genre *survival horror*, petualangan aksi tiga dimensi, atau mekanik perayapan dunia terbuka yang memukau.

Komunitas gamer memiliki kekuatan menentukan arah masa depan industri dengan cara menghentikan pembelian impulsif terhadap produk daur ulang berharga mahal. Keberanian industri untuk kembali berinovasi hanya akan terpicu ketika pemain menuntut karya baru yang bernyawa, bukan sekadar etalase nostalgia berulang yang menguras saldo tabungan.`
  },
  {
    title: "Kelelahan Semu di Balik Kaleng Minuman Energi: Mengapa Stimulan Dosis Tinggi Membajak Batas Alami Tubuh",
    category: "kesehatan",
    byline: "0100MUNS3DJQ06A12A6DABF37A", // Rachel Patricia
    tags: ["Kesehatan", "Kafein", "Minuman Energi", "Metabolisme", "Gaya Hidup", "Kesehatan Mental"],
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Cangkir kopi pekat dan botol stimulan di atas meja kerja pekerja malam berlatar temaram",
    excerpt: "Menenggak dua kaleng minuman berenergi untuk menuntaskan tenggat kerja malam mungkin terasa seperti solusi instan. Namun stimulan tidak pernah memproduksi energi baru; ia hanya meminjam stamina masa depan dengan bunga biologis yang mahal.",
    content: `Di tengah tuntutan produktivitas tanpa henti dan jam lembur yang melar hingga dini hari, deretan kaleng minuman berenergi dan suntikan espresso ganda menjadi amunisi wajib di meja kerja pekerja urban maupun kamar kos mahasiswa. Begitu cairan berkafein tinggi tersebut mengalir ke lambung, detak jantung terpacu cepat, kantuk seketika sirna, dan fokus mata terasa terkunci tajam ke layar laptop.

Sensasi lonjakan stamina instan tersebut sering disalahartikan sebagai penambahan energi fisik. Namun dalam mekanisme biokimia tubuh, tidak ada kalori atau vitamin dalam kaleng tersebut yang sanggup menciptakan energi murni secara ajaib. Apa yang sesungguhnya terjadi adalah pembajakan sistem alarm biologis otak oleh molekul stimulan.

## Jebakan Manipulasi Reseptor Adenosin

Secara fisiologis, rasa lelah adalah mekanisme proteksi penting yang dirancang alam untuk mencegah kerusakan sel dan kelelahan organ dalam:

* **Penyumbatan Sinyal Kelelahan Otak**: Sepanjang kita beraktivitas, otak memproduksi senyawa adenosin yang perlahan menempel pada reseptor saraf untuk memicu kantuk dan relaksasi. Kafein dosis tinggi menyusup dan memblokir reseptor tersebut tanpa menghentikan produksi adenosin. Akibatnya, otak tertipu merasa segar bugar sementara tubuh aslinya sudah menjerit kelelahan.
* **Lonjakan Hormon Stres Berlebihan**: Stimulan dosis agresif memaksa kelenjar adrenal memompa hormon kortisol dan adrenalin ke pembuluh darah. Kondisi *fight-or-flight* buatan ini menaikkan tekanan darah, membebani otot jantung, dan menempatkan sistem saraf pusat dalam status siaga darurat berkepanjangan.
* **Hantaman Krisis Adenosin (*Energy Crash*)**: Begitu efek stimulan kafein luruh dari reseptor setelah beberapa jam, gunungan adenosin yang tertimbun tadi langsung menyerbu reseptor secara serentak. Inilah yang memicu kelelahan ekstrem seketika, sakit kepala berdenyut, dan ketidakmampuan berpikir jernih yang memaksa seseorang menenggak kaleng berikutnya.

## Memulihkan Hak Istirahat Tubuh

Konsumsi stimulan dosis tinggi untuk menambal kekurangan tidur kronis adalah ilusi gali lubang tutup lubang yang berbahaya bagi kesehatan kardiovaskular dan stabilitas mental jangka panjang. Tubuh manusia bukan mesin motorik yang bisa digas terus-menerus tanpa jeda pemeliharaan.

Satu-satunya sumber energi alami yang berkelanjutan adalah tidur malam berkualitas, kecukupan hidrasi air putih, dan asupan nutrisi utuh. Berhentilah meminjam stamina dari masa depan demi mengejar tenggat semu; dengarkan ketika tubuh Anda meminta hak istirahatnya yang paling mendasar.`
  },
  {
    title: "Kematian Konsep Album Musik: Ketika Karya Konseptual Seniman Dicabik-cabik oleh Algoritma Playlist Acak",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Musik", "Industri Musik", "Format Album", "Streaming", "Kurasi Musik", "Budaya Pop"],
    imageUrl: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Piringan hitam vinyl berputar di atas turntable pemutar piringan musik analog vintage",
    excerpt: "Mendengarkan album musik dari lagu pembuka hingga penutup pernah menjadi ritual sakral menyelami visi utuh seorang seniman. Kini, karya konseptual dibongkar menjadi lagu-lagu lepasan demi mengisi daftar putar algoritma.",
    content: `Bagi siapa saja yang pernah membuka bungkus plastik piringan hitam atau kaset pita audio lawas, mendengarkan sebuah album musik selalu melibatkan sebuah ritual yang khidmat. Urutan lagu dari trek pertama hingga trek penutup dirancang musisi dengan perhitungan dinamika emosional yang matang: ada lagu pembuka yang menyapa hangat, bait-bait tengah yang mengeksplorasi konflik batin, hingga komposisi penutup yang memberikan katarsis mendalam bagi pendengarnya.

Kini, tradisi mendengarkan karya musik sebagai kesatuan naratif yang utuh tersebut terancam punah. Di era dominasi platform streaming audio, konsep album panjang (*full-length album*) telah dibongkar dan direduksi menjadi sekadar katalog materi mentah untuk dipecah-pecah ke dalam jutaan daftar putar (*playlist*) algoritmis.

## Tirani Kurasi Suasana Hati (*Mood Playlist*)

Pergeseran perilaku konsumsi ini didorong oleh format kurasi digital yang memprioritaskan fungsi fungsional musik di atas nilai artistiknya:

* **Komodifikasi Musik Berdasarkan Suasana Hati**: Platform musik modern mengelompokkan karya seni bukan berdasarkan genre atau visi penciptanya, melainkan label aktivitas fungsional seperti "Musik Fokus Belajar", "Pengantar Tidur Santai", atau "Lagu Olahraga Pagi". Dalam kurasi semacam ini, identitas nama musisi dan judul album disamarkan, berubah menjadi sekadar suara latar pengisi kesunyian ruangan.
* **Kematian Lagu Eksperimental Non-Singel**: Trek-trek instrumental kontemplatif, interlud puitis, atau lagu berdurasi panjang yang menjadi perekat narasi antar-lagu utama kini dianggap beban mati oleh label rekaman karena jarang diputar secara acak oleh pendengar kasual.
* **Tekanan Merilis Singel Lepasan Secara Berkala**: Algoritma rekomendasi menghukum musisi yang menghilang dua tahun untuk merancang album berkonsep matang. Musisi dipaksa merilis singel lepasan setiap beberapa minggu agar profil mereka tetap aktif di linimasa algoritma pengguna.

## Menyelamatkan Penghayatan Naratif Seni Suara

Sebuah album musik yang dirancang sungguh-sungguh adalah novel dalam bentuk gelombang suara, bukan sekadar kumpulan potongan status pendek yang bisa dibaca acak tanpa konteks. Ketika kita hanya mengonsumsi potongan lagu terpopuler di tangga putar acak, kita kehilangan kedalaman percakapan filosofis yang ingin disampaikan sang komposer.

Pecinta musik sejati perlu melatih kembali daya tahan atensi mendengarkan mereka. Matikan fitur pemutar acak (*shuffle*), pasang pelantang suara berkualitas, dan luangkan waktu empat puluh menit untuk menyimak sebuah album secara runtut dari detik awal hingga hening terakhir. Seni suara layak dihormati sebagai sebuah perjalanan batin yang utuh.`
  }
];

async function main() {
  console.log("=== MEMULAI BATCH AUTO-PUBLISH TUJUHCAHAYA (JADWAL TIAP 1 JAM / 23:00 WIB) ===");
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

  console.log("\n=== SELURUH BATCH 23:00 WIB BERHASIL DIPUBLIKASIKAN KE PRODUKSI ===");
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-hourly-2300.mjs")) {
  main().catch(err => {
    console.error("Batch Error:", err);
    process.exit(1);
  });
}
