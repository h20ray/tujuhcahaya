import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Prajurit Militer Kena Peras Intel Asing Gara-Gara Malas Copot Kartu SIM",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Keamanan Siber", "Militer", "Privasi Digital", "Smartphone", "Spyware", "Teknologi"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2026/11/GettyImages-2290156853-1024x648.jpg",
    imageAlt: "Ilustrasi pengamanan perangkat komunikasi militer dan risiko pelacakan sinyal seluler di medan operasi",
    sourceUrl: "https://arstechnica.com/security/2026/11/british-soldier-ignored-order-to-pull-his-sim-card-then-got-blackmailed/",
    excerpt: "Seorang prajurit Inggris divonis 10 bulan tahanan militer setelah berulang kali mengabaikan perintah mencopot kartu SIM saat bertugas di perbatasan Estonia. Ponselnya diretas intel asing, foto pribadinya diperas, membuktikan bahwa secanggih apa pun protokol militer, celah keamanan terbesar tetaplah rasa malas manusia.",
    content: `Bagi siapa saja yang pernah bekerja mengurus jaringan komputer kantor atau sekadar jadi rujukan tempat bertanya keluarga saat ponsel mendadak ngadat, Anda pasti hafal betul betapa susahnya mendisiplinkan manusia soal keamanan digital. Kita bisa saja menggelontorkan uang puluhan juta rupiah untuk membeli lisensi antivirus kelas korporat, memasang firewall berlapis, dan mewajibkan autentikasi dua faktor di semua aplikasi. Namun seluruh benteng pertahanan itu biasanya langsung jebol hanya gara-gara satu hal sepele: rasa malas pengguna yang menempelkan secarik kertas berisi kata sandi di pinggir layar monitor.

Kita kerap mengira bahwa kecerobohan semacam ini hanyalah monopoli bapak-bapak pengguna WhatsApp grup ronda atau pegawai magang yang belum paham prosedur operasional standar. Namun ketika kecerobohan serupa dilakukan oleh seorang prajurit tempur profesional di garis depan pertahanan sebuah aliansi militer global, leluconnya mendadak berubah menjadi tragedi spionase yang memalukan.

Sebagaimana diungkap dalam laporan investigasi Ars Technica pekan ini, seorang prajurit infanteri kawakan asal Inggris, Kopral Daniel Barton-Kennedy dari Batalyon 1 Resimen Duke of Lancaster, resmi dijatuhi vonis hukuman sepuluh bulan penjara militer dan diturunkan pangkatnya ke tingkat prajurit biasa. Penyebabnya terdengar sepele bagi orang awam: ia berkali-kali membangkang perintah komandan untuk mencopot kartu SIM fisik dari ponsel pintar pribadinya saat ditugaskan dalam misi pengamanan NATO di Estonia, persis di bibir perbatasan wilayah Rusia.

Sebelum diberangkatkan ke perbatasan yang suhunya sedang panas dingin itu, jajaran komando militer Inggris sesungguhnya telah berkali-kali memberikan pengarahan operasional yang sangat gamblang. Peraturannya tegas dan tidak membuka ruang kompromi: seluruh prajurit wajib mencopot kartu SIM asal Inggris sebelum mendarat di negara Baltik tersebut. Logikanya sederhana, menara BTS seluler di dekat perbatasan negara musuh memiliki kemampuan otomatis untuk memindai lalu lintas jaringan. Begitu ada sinyal kartu SIM asing yang aktif mencari sambungan operator lokal, menara pemancar lawan bisa langsung mengendus koordinat geografis barak militer, memetakan pergerakan pasukan, hingga mencegat paket data yang beterbangan di udara.

![Ilustrasi pengamanan perangkat komunikasi militer dan risiko pelacakan sinyal seluler di medan operasi](https://cdn.arstechnica.net/wp-content/uploads/2026/11/GettyImages-2290156853-1024x648.jpg)

Namun bagi sang kopral yang sudah berdinas lebih dari tujuh tahun, aturan ketat tersebut rupanya dianggap angin lalu. Entah karena dorongan rindu mengabari sanak keluarga di kampung halaman, takut ketinggalan gosip di linimasa media sosial, atau sekadar enggan repot mencari tusukan jarum kartu SIM, ia tetap membiarkan cip selulernya tertanam manis di dalam smartphone miliknya.

Pihak intelijen musuh tentu tidak menyia-nyiakan durian runtuh ini. Tanpa perlu mengerahkan agen spionase berkacamata hitam ala film Hollywood, sindikat siber lawan cukup memanfaatkan nomor telepon yang telanjur terpapar sinyal menara pengawas. Ponsel sang prajurit langsung diterobos, data pribadinya disedot, dan berkas foto intim tanpa busana milik sang kopral berhasil digondol peretas. Dari situ, mimpi buruk sesungguhnya dimulai. Sang prajurit menjadi korban pemerasan seksual (*sextortion*), di mana ia diancam bahwa foto-foto pribadinya akan disebarkan ke publik dan institusi militer jika ia tidak memenuhi tuntutan pihak pemeras.

Menghadapi tekanan psikologis yang mencekik, sang kopral akhirnya menyerah dan melapor ke atasannya. Alih-alih mendapatkan simpati sebagai korban peretasan, ia langsung diseret ke meja hijau mahkamah militer (*court-martial*). Majelis hakim militer tidak memberikan ampun, bukan semata karena foto intimnya bocor, melainkan karena ia secara sadar telah melanggar perintah sah atasan yang mempertaruhkan keselamatan nyawa rekan-rekan satu batalyonnya di medan operasi.

Kasus memalukan di perbatasan Baltik ini menjadi cermin telanjang bagi kita semua mengenai ilusi privasi digital di era ponsel pintar. Kita sering kali merasa terlalu penting untuk disadap, atau sebaliknya, merasa diri kita terlalu remeh sehingga mengira para penjahat siber tidak akan sudi melirik data pribadi kita. Banyak orang di tanah air baru kalang kabut ketika mencurigai [baterai HP yang mendadak boros karena spyware](/ketika-baterai-hp-boros-bikin-pengguna-panik-mengira-disadap) atau panik berjamaah tiap kali muncul gosip miring perihal [skandal penyadapan alat sadap LIMS](/mengenal-lims-alat-sadap-yang-bikin-presiden-prabowo-ikut-kena) yang menyasar pejabat tinggi negara.

Padahal, celah keamanan siber paling mematikan di kolong langit hampir tidak pernah berasal dari kehebatan baris kode pemrograman musuh. Celah terbesar itu bernama kebiasaan manusia yang malas menuruti prosedur demi sejumput kenyamanan sesaat. Korporasi teknologi boleh saja memamerkan enkripsi ujung-ke-ujung paling mutakhir di dunia, tetapi benteng secanggih apa pun akan selalu runtuh seketika jika penggunanya masih merasa mencopot kartu SIM seukuran kuku jari kelingking adalah pekerjaan yang terlalu melelahkan.

Kalau prajurit terlatih dengan seragam tempur lengkap saja bisa tersungkur ke sel tahanan cuma karena sepotong plastik kartu seluler, bayangkan betapa rapuhnya nasib data kita yang setiap hari bebas memasang aplikasi pinjaman online dan login WiFi gratisan di warkop pinggir jalan.`
  },
  {
    title: "Ketika AMD Terang-terangan Pilih Memanjakan Server AI Ketimbang Komunitas Gamer PC",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["AMD", "Andoru Ray", "Gamer Indonesia", "Hardware", "Industri Game", "PC Gaming", "Radeon"],
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ilustrasi perangkat keras komputer gaming dan kartu grafis dengan pencahayaan RGB di dalam casing PC",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/amd-ceo-lisa-su-we-are-a-data-center-first-company/",
    excerpt: "CEO AMD Lisa Su blak-blakan menegaskan bahwa AMD kini resmi menjadi perusahaan yang mengutamakan data center. Bagi jutaan gamer yang bertahun-tahun membela Kubu Merah di forum internet, pengakuan ini adalah surat cerai resmi: dompet gamer tak lagi menarik dibanding triliunan rupiah dari server kecerdasan buatan.",
    content: `Bagi siapa saja yang menghabiskan masa remaja di warnet atau gemar merakit komputer sendiri, Anda pasti paham betul bagaimana peta persaingan suci antara dua kubu raksasa produsen semikonduktor grafis: Kubu Hijau milik Nvidia dan Kubu Merah kepunyaan AMD. Selama lebih dari dua dekade, AMD selalu memainkan peran sebagai pahlawan rakyat jelata. Tiap kali bos Nvidia Jensen Huang menaikkan banderol harga kartu grafis seri GeForce ke angka yang bikin kepala pusing, para gamer di forum internet akan serentak menoleh ke arah AMD dengan penuh harap, menanti kartu grafis Radeon murah meriah yang sanggup menyelamatkan isi dompet kaum proletar.

Narasi cinta romantis antara gamer berkantong tipis dan AMD ini dipelihara dengan sangat apik selama bertahun-tahun. Kita membela prosesor Ryzen mereka mati-matian saat melibas dominasi Intel, dan kita rela memaklumi kekurangan driver Radeon yang kerap rewel demi mendukung iklim kompetisi pasar yang sehat. Gamer PC merasa bahwa AMD adalah kawan seperjuangan yang memahami derita anak kos yang cuma ingin memainkan game idaman di resolusi sepuluh delapan puluh piksel dengan frame rate stabil.

Namun jika Anda masih memelihara ilusi romantisme tersebut hari ini, ada baiknya Anda segera membasuh muka di wastafel terdekat. Hubungan asmara itu resmi berakhir, dan surat cerainya baru saja diteken langsung oleh sang nakhoda tertinggi AMD sendiri.

Sebagaimana dicatat dalam laporan PC Gamer pekan ini, CEO AMD Lisa Su melontarkan pernyataan yang sangat jujur sekaligus menyakitkan hati para penggemar perangkat keras PC. Dalam wawancara terbarunya bersama Yahoo Finance menyusul rilis laporan keuangan kuartal ketiga 2026, Lisa Su secara terang-terangan menegaskan orientasi baru perusahaannya: *"We are a data center-first company"*. Secara harfiah, AMD kini resmi memproklamirkan diri sebagai korporasi yang memprioritaskan pusat data di atas segalanya.

Alasan di balik pernyataan dingin sang pucuk pimpinan tentu sangat mudah ditebak jika kita melirik lembar arus kas mereka. Laporan keuangan kuartal ketiga membuktikan bahwa lini bisnis data center dan akselerator kecerdasan buatan seri Instinct milik AMD meledak luar biasa, menyumbang hampir 64 persen dari total keseluruhan pendapatan korporasi. Sebaliknya, pilar bisnis gaming yang dulu menjadi penyelamat nyawa AMD saat terpuruk justru mencatatkan penurunan pendapatan yang sangat curam, anjlok hingga 40 persen dibandingkan periode yang sama tahun lalu.

![Ilustrasi perangkat keras komputer gaming dan kartu grafis dengan pencahayaan RGB di dalam casing PC](https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop)

Bagi direksi dan investor di bursa saham Wall Street, pergeseran kiblat ini tentu adalah langkah bisnis brilian yang layak diganjar tepuk tangan meriah. Menjual satu keping prosesor akselerator AI kelas enterprise kepada korporasi teknologi global bisa menghasilkan margin laba bersih puluhan kali lipat ketimbang meladeni gamer rewel yang menuntut kartu grafis murah dengan pendingin tiga kipas dan garansi tiga tahun. Saking menggiurkannya aliran dana dari sektor kecerdasan buatan, kita bahkan sempat melihat bagaimana [kegilaan korporasi memborong chip AI untuk kantor hantu](/ketika-nvidia-loloskan-penjualan-chip-ai-canggih-ke-kantor-kosong) tetap diloloskan demi mengejar target penjualan yang tak masuk akal.

Namun bagi komunitas gamer di tanah air, pengakuan jujur Lisa Su ini terasa seperti tamparan telak di pipi kiri setelah sebelumnya ditendang di pipi kanan oleh Nvidia. Selama bertahun-tahun, gamer PC telah dijadikan batu loncatan yang setia menemani AMD merangkak dari jurang kebangkrutan di era kegagalan arsitektur Bulldozer belasan tahun silam. Kini, setelah perusahaan kembali perkasa dan pundi-pundi kas mereka meluber berkat demam kecerdasan buatan, sang kawan lama justru dicampakkan ke bangku cadangan. 

Harapan bahwa AMD bakal merilis kartu grafis kelas atas generasi baru untuk menantang monopoli kartu grafis monster milik Nvidia kian menipis. Pihak AMD bahkan sudah mengisyaratkan bahwa mereka akan menarik diri dari perlombaan GPU kelas antusias (*flagship*) pada generasi berikutnya, memilih bermain aman di kelas menengah ke bawah sembari mengalihkan seluruh kapasitas lini produksi silikon terbaik mereka ke pabrik pengecoran cip server.

Dampaknya langsung terasa nyata di etalase toko komputer lokal Mangga Dua maupun lokapasar daring Indonesia. Pilihan kartu grafis anyar makin sedikit, harganya kian menguras tabungan, sementara kebutuhan spesifikasi game modern justru makin membengkak gila-gilaan. Tak heran jika saat ini semakin banyak kawan-kawan gamer di tanah air yang memilih [rela bertahan memakai kartu grafis lama demi GTA 6](/ketika-mayoritas-gamer-pc-rela-pasang-badan-menunggu-gta-6) sambil pasrah mengutak-atik pengaturan grafis rata kiri, ketimbang memaksakan diri membeli kartu grafis baru yang harganya setara uang muka sepeda motor matik.

Pada akhirnya, industri perangkat keras komputer telah mengajari kita satu hukum besi kapitalisme digital: tidak pernah ada yang namanya kesetiaan emosional antara korporasi dan konsumen. Gamer PC boleh saja merasa berjasa membesarkan nama Kubu Merah selama puluhan tahun, tetapi di hadapan ratusan triliun rupiah uang korporasi AI, nostalgia gamer warkop hanyalah catatan kaki kecil yang bisa dihapus kapan saja dengan satu senyuman ramah sang direktur utama.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 03:00 WIB)");
  console.log("=================================================================\n");

  const results = [];

  for (let i = 0; i < articles.length; i++) {
    const art = articles[i];
    console.log(`\n-------------------------------------------------------------`);
    console.log(`📝 [Artikel ${i + 1}/${articles.length}] ${art.title}`);
    console.log(`👤 Byline: ${art.byline} | Kategori: ${art.category}`);

    const wordCount = art.content.trim().split(/\s+/).filter(Boolean).length;
    console.log(`📊 Word count: ${wordCount} kata`);

    // 1. Audit editorial 7C
    const audit = validate7cEditorial(art.title, art.content, art.excerpt, art.tags);
    console.log(`🎯 Editorial Score: ${audit.score}/100 | Valid: ${audit.valid}`);
    if (audit.errors.length > 0) {
      console.error(`❌ Errors:`, audit.errors);
      throw new Error(`Artikel "${art.title}" gagal audit 7C: ` + audit.errors.join(", "));
    }
    if (audit.warnings.length > 0) console.warn(`⚠️ Warnings:`, audit.warnings);
    if (audit.suggestions.length > 0) console.log(`💡 Suggestions:`, audit.suggestions);

    if (!audit.valid || audit.score < 80) {
      throw new Error(`Artikel "${art.title}" memiliki skor editorial di bawah 80!`);
    }

    // 2. Publish ke local DB dan remote Plesk
    console.log(`📡 Menerbitkan artikel via autoPublishPost (remote: true)...`);
    const pubResult = await autoPublishPost(art, { bypassPause: true, remote: true });
    console.log(`✅ Status: ${pubResult.status} | URL: ${pubResult.url}`);
    console.log(`   Local DB: ${pubResult.dbSaved} | Remote Plesk: ${pubResult.remotePublished}`);

    // 3. Tandai URL sumber asli sebagai sudah diproses di seen-urls.json
    if (art.sourceUrl) {
      markAsSeen(art.sourceUrl);
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261108-0300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
