import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

const articles = [
  {
    title: "RAM Tersolder dan Kematian Hak Memperbaiki: Ketika Laptop Rp20 Juta Menjadi Rongsokan Lebih Cepat",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Teknologi", "Hardware", "Laptop", "Right to Repair", "Gadget", "Keberlanjutan"],
    imageUrl: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Modul sirkuit semikonduktor dan komponen motherboard laptop modern",
    excerpt: "Menyolder modul RAM langsung ke motherboard kerap dipoles vendor dengan dalih sasis tipis dan efisiensi daya. Konsumen dipaksa menelan kenyataan pahit: perangkat premium yang mustahil di-upgrade dan berisiko menjadi rongsokan begitu beban memori membengkak.",
    content: `Dekade lalu, membeli laptop kelas menengah atau premium selalu disertai satu rasa aman: jika aplikasi di masa depan semakin rakus memori, pengguna cukup membuka penutup bawah sasis, membeli kepingan SO-DIMM tambahan seharga beberapa ratus ribu rupiah, lalu menggandakan kapasitas RAM tanpa ribet. Mesin kerja tersebut sanggup bertahan lima hingga tujuh tahun dengan performa prima.

Kini, tradisi kepemilikan rasional itu hampir punah. Masuk ke toko komputer mana pun hari ini, dan sebagian besar laptop ramping berbanderol belasan hingga puluhan juta rupiah menyematkan modul RAM yang dipatri mati dengan timah ke atas papan sirkuit utama (*motherboard*). Saat kapasitas memori terasa sesak oleh beban kerja modern atau salah satu chip memori mengalami kerusakan sel mikro, opsi perbaikannya hanya satu: mengganti seluruh motherboard dengan biaya yang kerap mencapai 70 persen dari harga baru unit tersebut.

## Dalih Efisiensi Daya dan Bodi Tipis

Pabrikan perangkat keras tentu tidak kekurangan amunisi alasan saat ditanya mengapa slot SO-DIMM modular disingkirkan. Alasan paling populer adalah performa transmisi data dan efisiensi energi. Penggunaan memori berkecepatan tinggi seperti LPDDR5X (Low Power Double Data Rate) memang menuntut jarak fisik yang amat dekat antara pengontrol memori di prosesor dengan chip RAM guna memangkas latensi serta menjaga integritas sinyal pada frekuensi tinggi di atas 6400 MT/s.

Selain itu, meniadakan soket mekanis SO-DIMM memangkas ketebalan sasis hingga beberapa milimeter. Di mata tim pemasaran korporat, laptop yang lebih tipis beberapa milimeter jauh lebih gampang dijual di etalase pameran daripada laptop yang memiliki soket modular namun sedikit lebih tebal. 

Namun, ada variabel tersembunyi yang jarang dibicarakan di panggung peluncuran produk: segmentasi harga terencana (*planned obsolescence*). Dengan menyolder RAM, produsen memegang kendali penuh atas hierarki harga. Konsumen yang menginginkan kapasitas 32 GB terpaksa membayar selisih harga jutaan rupiah sejak hari pertama pembelian—sering kali dipaketkan dengan varian prosesor tertinggi yang sebetulnya tidak mereka butuhkan—karena menyadari pintu upgrade di masa depan telah digembok rapat.

## Jerat Finansial dan Timbunan Sampah Elektronik

Bagi konsumen di pasar berkembang seperti Indonesia, tren RAM tersolder menimbulkan beban ekonomi yang nyata. Kebiasaan membeli laptop varian dasar 8 GB atau 16 GB dengan rencana menaikkan kapasitas RAM ketika tabungan terkumpul kini berujung buntu. 

Dampaknya terlihat jelas pada usia pakai perangkat:

* **Siklus Hidup Terpangkas**: Laptop yang prosesor dan layarnya masih sangat mumpuni terpaksa pensiun dini hanya karena alokasi RAM 16 GB sudah tidak sanggup melayani tab browser modern, aplikasi produktivitas berbasis Electron, serta eksekusi model komputasi lokal.
* **Nilai Jual Kembali Anjlok**: Pasar komputer bekas cenderung menghindari mesin dengan konfigurasi memori kaku yang tidak lagi relevan dengan standar sistem operasi mendatang.
* **Ledakan Limbah Elektronik (*E-waste*)**: Motherboard utuh yang seharusnya masih berfungsi normal berakhir di tempat pembuangan akhir hanya karena kegagalan modul silikon tunggal yang mustahil dilepas secara konvensional.

Gerakan *Right to Repair* global telah berulang kali mengecam praktik ini sebagai bentuk perampasan hak milik konsumen. Ketika seseorang membeli barang secara lunas, mereka berhak merawat, memodifikasi, dan memperpanjang umur pakai barang tersebut tanpa harus meminta restu atau bergantung pada pusat servis resmi vendor yang mengenakan tarif selangit.

## Harapan pada Standar CAMM2

Untungnya, harapan agar laptop modular kembali bernapas belum sepenuhnya padam. Konsorsium standardisasi memori JEDEC telah merilis spesifikasi CAMM2 (Compression Attached Memory Module). Desain ini memungkinkan chip memori berkecepatan tinggi LPDDR5X dipasang dalam modul datar yang dapat diganti dan dilepas-pasang dengan baut tanpa memerlukan ruang vertikal setebal soket SO-DIMM lawas.

Pertanyaannya kini bergeser ke tangan konsumen dan regulator. Apakah kita akan terus menormalisasi laptop seharga puluhan juta rupiah yang memiliki masa kedaluwarsa layaknya baterai sekali pakai? Memilih dengan cermat dan memberikan dukungan nyata kepada vendor yang berani mempertahankan komponen modular bukan sekadar soal menyelamatkan dompet pribadi, melainkan perlawanan konkret terhadap budaya boros teknologi yang kian tidak masuk akal.`
  },
  {
    title: "Beban Kognitif Digital Hoarding: Mengapa Puluhan Tab Browser yang Menumpuk Memicu Kecemasan Bawah Sadar",
    category: "budaya",
    byline: "0100MUNS3DJSD97205CCB31353", // Sarah Dilla
    tags: ["Budaya Digital", "Kesehatan Mental", "Produktivitas", "Psikologi", "Internet", "Gaya Hidup"],
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Layar laptop yang dipenuhi banyak jendela dan tab kerja di ruang temaram",
    excerpt: "Membuka puluhan tab browser hingga ikonnya berdesakan bukan sekadar kebiasaan sepele atau pemborosan memori RAM komputer. Di baliknya ada utang perhatian dan rasa cemas kehilangan informasi yang diam-diam menguras fokus harian pekerja kreatif.",
    content: `Lihat sudut atas jendela peramban Anda sekarang. Jika deretan tab di sana sudah menyusut begitu rapat hingga judul halamannya lenyap dan hanya menyisakan deretan favicon berukuran beberapa piksel, Anda tidak sendirian. Fenomena membuka 40, 70, hingga ratusan tab peramban secara serentak kini telah menjadi pemandangan lumrah di meja kerja para profesional, periset, dan pekerja lepas.

Secara teknis, peramban modern seperti Chrome, Firefox, atau Edge telah dibekali fitur penidur tab (*tab sleeping*) untuk mencegah sistem kehabisan memori RAM. Namun, masalah mendasar dari tumpukan tab ini sama sekali bukan perkara teknis konsumsi sumber daya komputer, melainkan beban kognitif tak kasat mata yang terus-menerus menagih perhatian otak manusia.

## Ilusi 'Akan Saya Baca Nanti' dan Utang Mental

Sebagian besar tab yang kita biarkan menggantung tidak dibuka untuk dibaca pada menit itu juga. Tab-tab tersebut adalah perwujudan dari niat yang tertunda: sebuah artikel analisis panjang yang menarik, draf jurnal akademis, referensi desain grafis, tautan tiket promo liburan, atau tutorial pemrograman yang kita janjikan pada diri sendiri akan dipelajari di akhir pekan.

Dalam psikologi kognitif, setiap tab yang dibiarkan terbuka bertindak sebagai *open loop*—lingkaran komitmen mental yang belum tuntas. Setiap kali pandangan mata melintasi deretan favicon di bilah atas layar, alam bawah sadar kita menyerap sinyal mikro bahwa ada kewajiban tertunggak yang belum kita selesaikan. 

Kondisi ini menciptakan utang mental (*cognitive debt*). Alih-alih merasa teratur, keberadaan puluhan tab justru menumbuhkan perasaan bersalah samar-samar dan keletihan mental sebelum pekerjaan utama bahkan dimulai. Keinginan awal untuk mengamankan wawasan justru bermutasi menjadi kecemasan bawah sadar: takut kehilangan informasi berharga (*fear of losing information*) jika tab tersebut ditutup begitu saja.

## Fragmentasi Atensi di Ruang Kerja Virtual

Dampak buruk lain dari penumpukan tab liar adalah runtuhnya ketahanan fokus mendalam (*deep work*). Ketika seseorang sedang menulis laporan atau menganalisis data, keberadaan jendela lain yang hanya berjarak satu klik membuat godaan untuk berpindah tugas (*task-switching*) menjadi sangat mudah dipicu.

Otak manusia tidak dirancang untuk memproses konteks yang melompat-lompat dalam hitungan detik. Ketika perhatian teralihkan ke tab lain:

* **Biaya Pengalihan Konteks (*Switching Cost*)**: Membutuhkan waktu rata-rata 15 hingga 20 menit bagi otak untuk kembali ke tingkat konsentrasi semula setelah terdistraksi oleh artikel atau media sosial yang mengintip di bilah tab.
* **Kelelahan Keputusan (*Decision Fatigue*)**: Memilih tab mana yang harus dikerjakan di antara belantara opsi yang bersaing menghabiskan energi kehendak harian yang seharusnya dialokasikan untuk memecahkan persoalan rumit.
* **Kebutaan Informasi**: Ironisnya, semakin banyak tab yang dibuka untuk disimpan, semakin kecil kemungkinan tab-tab tersebut benar-benar dibuka kembali secara utuh. Informasi tersebut terkubur dalam makam digital ciptaan sendiri.

## Memutus Siklus Penimbunan Digital

Menertibkan peramban tidak berarti kita harus berubah menjadi penganut minimalisme ekstrem yang hanya mengizinkan satu tab aktif setiap saat. Yang dibutuhkan adalah pemisahan tegas antara ruang kerja aktif (*workspace*) dengan gudang penyimpanan referensi (*archive*).

Langkah pertama yang paling realistis adalah membiasakan pembersihan harian (*daily inbox zero for tabs*). Jika sebuah artikel memang layak disimpan untuk riset jangka panjang, pindahkan tautan tersebut ke pengelola catatan seperti Obsidian, Notion, atau aplikasi baca-nanti seperti Readwise dan Pocket, lalu tutup tab tersebut tanpa ragu. Dengan begitu, informasi tetap terdokumentasi rapi tanpa harus menyandera ruang kerja visual Anda.

Tab peramban adalah meja kerja tempat kita menyelesaikan hal yang sedang dihadapi sekarang, bukan lemari arsip untuk menampung seluruh ambisi masa depan. Menutup tab yang sudah tidak relevan adalah tindakan sadar untuk merebut kembali kendali atas atensi dan kejernihan pikiran di tengah rimba informasi digital yang tak pernah tidur.`
  },
  {
    title: "Krisis Optimasi Unreal Engine 5: Mengapa Game PC Modern Kerap Gagap Shader Meski Berjalan di GPU Sultan?",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Game", "PC Gaming", "Unreal Engine 5", "Hardware", "GPU", "Grafis"],
    imageUrl: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Kartu grafis dan sistem pendingin rig PC gaming modern dengan pencahayaan internal",
    excerpt: "Patah-patah mikro dan kendala kompilasi shader kian lazim menyapa judul game baru berbasis Unreal Engine 5. Bahkan rig PC gaming kelas atas tak berdaya saat pengembang mengabaikan arsitektur pra-kompilasi aset.",
    content: `Membeli kartu grafis kelas atas berharga belasan hingga puluhan juta rupiah seharusnya memberikan jaminan pengalaman bermain game yang mulus tanpa kompromi pada resolusi 1440p atau 4K. Namun, belakangan ini gamer PC di seluruh dunia justru disuguhi pemandangan ironis: rig monster bertenaga GPU papan atas kerap mengalami patah-patah mikro (*micro-stuttering*) yang mengganggu ritme permainan, terutama pada judul-judul rilisan baru yang memanfaatkan mesin grafis Unreal Engine 5 (UE5).

Keluhan tersebut bukan datang dari segmen komputer berbiaya murah, melainkan dari para antusias perangkat keras yang menuntut konsistensi frame time. Mengapa mesin game paling canggih di planet ini—yang dipersenjatai teknologi pencahayaan Lumen dan geometri mikro Nanite—kerap kedodoran menyajikan performa stabil di platform PC?

## Anatomi Masalah: Shader Compilation dan Traversal Stutter

Untuk memahami akar kekacauan ini, kita harus membedakan antara performa rata-rata frame rate (FPS) dengan kestabilan waktu bingkai (*frame pacing*). Sebuah game bisa saja menampilkan angka 90 FPS di layar monitor, tetapi terasa sangat patah-patah jika terjadi lonjakan frame time dari 11 milidetik menjadi 80 milidetik secara tiba-tiba.

Penyebab utamanya bermuara pada dua fenomena teknis:

1. **Shader Compilation Stuttering**: Di era API grafis tingkat rendah seperti DirectX 12 dan Vulkan, tanggung jawab untuk mengompilasi kode shader dari bahasa perantara (*intermediate bytecode*) menjadi instruksi mesin khusus kartu grafis diserahkan langsung ke mesin game dan pengembang, bukan lagi ditangani otomatis secara tersembunyi oleh driver kartu grafis seperti pada era DirectX 11. Jika game tidak melakukan pra-kompilasi shader sebelum sesi bermain dimulai, sistem terpaksa mengompilasi shader tersebut tepat pada saat efek visual pertama kali muncul di layar (misalnya saat karakter menembakkan sihir api atau meledakkan granat). Proses dadakan ini membekukan alur rendering sepersekian detik.
2. **Traversal Stuttering**: Pemanggilan aset dunia game berskala masif yang dialirkan secara langsung (*virtualized geometry streaming*) saat pemain melintasi perbatasan zona peta. Pada UE5, fitur Nanite menuntut throughput I/O penyimpanan yang sangat tinggi dan pengelolaan memori VRAM yang disiplin. Ketika alokasi memori tersendat, pipa pemrosesan grafis terpaksa menunggu, menghasilkan sentakan frame yang terasa nyata di mata pemain.

## Budaya Menjadikan Fitur Upscaler Sebagai Obat Pusing

Alih-alih menyusun pipeline pra-kompilasi Pipeline State Object (PSO) caching yang matang sejak masa pengembangan awal, banyak studio game modern terkesan mengandalkan jalan pintas dengan memanfaatkan teknologi upscaler seperti DLSS, FSR, atau TSR sebagai penambal performa.

Logika ini keliru secara arsitektur. Fitur upscaler dan frame generation memang efektif melipatgandakan angka FPS rata-rata dengan merender resolusi internal lebih rendah lalu merekonstruksinya lewat bantuan algoritma kecerdasan buatan. Namun, upscaler sama sekali tidak berdaya melawan shader stuttering. Jika CPU dan GPU mengalami kemacetan pipeline akibat kompilasi shader mendadak, algoritma upscaler ikut membeku bersama sisa frame yang sedang diproses.

Mengandalkan upscaler sebagai pengganti optimasi fundamental ibarat menyemprotkan pengharum ruangan di atas tumpukan sampah yang belum dibersihkan. Angka benchmark di atas kertas mungkin terlihat memukau, tetapi kenyamanan bermain riil para pemain tetap terkorbankan.

## Menagih Disiplin Teknis dari Pengembang AAA

Unreal Engine 5 sebenarnya telah menyediakan perkakas PSO pre-caching yang jauh lebih baik pada pembaruan versi teranyarnya (5.2 hingga 5.4). Masalah sesungguhnya berakar pada jadwal rilis yang ditekan terburu-buru oleh dewan direksi penerbit game demi mengejar target laporan kuartalan.

Proses mengumpulkan dan memvalidasi seluruh kombinasi PSO di game PC berukuran puluhan gigabyte membutuhkan waktu uji coba yang ekstensif di berbagai konfigurasi perangkat keras yang berbeda. Ketika tenggat waktu mendekat, fase pengujian optimasi inilah yang paling sering disunat pertama kali oleh manajemen proyek.

Komunitas gamer PC kini semakin vokal menolak praktik lempar game mentah ke etalase toko digital. Menunggu layar tunggu selama lima hingga sepuluh menit pada awal peluncuran game untuk mengompilasi shader jauh lebih disukai daripada menikmati pemandangan grafis fotorealistis yang dirusak oleh sentakan patah-patah setiap kali memasuki arena pertarungan baru. Keindahan visual tidak ada artinya jika kenyamanan bermain dikorbankan demi mengejar tenggat rilis yang dipaksakan.`
  }
];

async function main() {
  console.log("=== MEMULAI BATCH AUTO-PUBLISH TUJUHCAHAYA (JADWAL TIAP 30 MENIT) ===");
  const results = [];

  for (let i = 0; i < articles.length; i++) {
    const art = articles[i];
    console.log(`\n--- [${i + 1}/${articles.length}] Memvalidasi 7C Editorial Guard: "${art.title}" ---`);
    
    // 1. Audit
    const audit = validate7cEditorial(art.title, art.content, art.excerpt);
    console.log(`Audit Score: ${audit.score}/100 | Valid: ${audit.valid}`);
    if (!audit.valid) {
      console.error("Ditolak oleh 7C Editorial Guard:", audit.errors);
      process.exit(1);
    }
    if (audit.warnings.length > 0) console.log("Warnings:", audit.warnings);
    if (audit.suggestions.length > 0) console.log("Suggestions:", audit.suggestions);

    // 2. Publish (Local SQLite & Remote SSH Plesk)
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

  console.log("\n=== SELURUH BATCH BERHASIL DIPUBLIKASIKAN ===");
}

main().catch(err => {
  console.error("Batch Error:", err);
  process.exit(1);
});
