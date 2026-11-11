import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Tablet Puluhan Juta Berkedok Produktivitas Ujungnya Cuma Jadi Pemutar Drakor Sebelum Tidur",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Gadget", "Hardware", "Produktivitas", "Samsung", "Tablet", "Teknologi"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2026/09/30/1000154994.jpg",
    imageAlt: "Deretan varian tablet flagship Samsung Galaxy Tab S12 Series dengan stylus S-Pen di meja kerja modern",
    sourceUrl: "https://www.antaranews.com/berita/5840999/samsung-galaxy-tab-s12-series-resmi-hadir-ini-harga-dan-speknya",
    excerpt: "Samsung resmi memboyong Galaxy Tab S12 Series ke Indonesia dengan banderol menembus Rp28 juta. Embel-embel kecerdasan buatan dan fitur desktop DeX kembali didengungkan sebagai mesin produktivitas pengganti laptop. Namun melihat realitas keseharian, mengeluarkan uang setara motor matic demi layar sentuh yang ujung-ujungnya cuma dipakai nonton serial drama sambil rebahan adalah lelucon konsumen modern yang enggan kita akui.",
    content: `Setiap kali pabrikan teknologi merilis lini tablet kelas atas dengan embel-embel "Pro" atau "Ultra", skenario promosinya selalu tampak anggun bak iklan parfum mahal. Kita disuguhi video sinematik berisi para profesional muda yang bekerja santai di kafe berpemandangan taman kota, menggambar diagram arsitektur rumit dengan sapuan stylus tanpa jeda, atau mengetik draf laporan keuangan ratusan halaman sembari tersenyum percaya diri. Narasi yang dicekoki ke kepala calon pembeli selalu sama: lupakan laptop tebal Anda yang berat itu, beli tablet layar sentuh ramping ini, dan Anda akan langsung bertransformasi menjadi pekerja serba bisa yang efisien.

Namun mari kita jujur pada diri sendiri dan menengok fakta di atas meja kamar. Berapa banyak dari kita yang benar-benar memeras tablet premium tersebut untuk merender model tiga dimensi atau menganalisis tumpukan data makro? Dalam kenyataan sehari-hari yang jauh dari polesan brosur humas, nasib tablet berharga selangit itu nyaris seragam: disandarkan di atas tumpukan bantal kamar tidur dengan kecerahan layar redup, sekadar menjadi layar kedua yang mahal untuk memutar maraton serial drama Korea atau gulir video kompilasi masak tengah malam hingga baterainya sekarat.

Ambisi mendandani tablet menjadi pengganti komputer kerja ini kembali mengemuka tatkala Samsung Electronics resmi meluncurkan Galaxy Tab S12 Series ke pasar tanah air. Sebagaimana dicatat dalam laporan peluncuran Antara Tekno, raksasa asal Korea Selatan tersebut membawa dua model flagship, yakni Tab S12+ dan Tab S12 Ultra. Dapur pacunya memang buas berkat sokongan cip MediaTek Dimensity 9500 fabrikasi 3 nanometer, panel Dynamic AMOLED 2X berkecepatan 120Hz, serta deretan kemampuan Galaxy AI di atas sistem operasi Android 17. Namun yang membuat mata terbelalak adalah angka di struk kasir: varian Tab S12+ dipatok mulai Rp21.999.000, sedangkan varian kasta tertingginya, Galaxy Tab S12 Ultra 5G, dibanderol mencapai Rp27.999.000.

![Deretan varian tablet flagship Samsung Galaxy Tab S12 Series dengan stylus S-Pen di meja kerja modern](https://img.antaranews.com/cache/800x533/2026/09/30/1000154994.jpg)

Mari kita berhenti sejenak dan mencerna angka dua puluh delapan juta rupiah tersebut. Di rentang harga setara sepeda motor matic baru itu, Anda sudah bisa membawa pulang sebuah laptop workstation bisnis atau laptop gaming bertenaga buas yang sanggup melibas kompilasi kode pemrograman dan rendering video multi-lapisan tanpa tersengal-sengal. Laptop memberi Anda kebebasan penuh mengelola file sistem, membuka puluhan jendela browser tanpa takut manajemen memori membunuh proses di latar belakang, serta navigasi keyboard fisik yang nyaman dipakai mengetik ribuan kata seharian.

Sebaliknya, pada ekosistem tablet Android, sistem operasinya pada hakikatnya tetaplah software ponsel pintar yang ditarik paksa agar memenuhi layar raksasa 14 inci. Fitur desktop buatan seperti Samsung DeX memang patut diakui sebagai usaha keras yang cerdas, tetapi ia tidak pernah bisa menipu keterbatasan fondasi aplikasinya. Aplikasi kantoran seperti pengolah lembar sebar di Android masih terasa terpangkas dibandingkan versi desktop utuh, manajemen pintasan keyboard-nya kerap membingungkan, dan jendela multitasking-nya masih sering kikuk saat dipaksa berpindah cepat. Belum lagi urusan aksesori penunjang: papan ketik magnetik resminya kerap dijual terpisah dengan banderol yang sanggup menebus satu unit smartphone kelas menengah.

Ironi kepemilikan gadget mahal ini kerap berujung pada siklus penyesalan yang serupa. Kita tergiur membeli gadget mutakhir demi ilusi produktivitas tanpa batas, tetapi pada akhirnya mendapati diri kita terjebak dalam masalah klasik perawatan perangkat harian. Entah itu urusan [kebiasaan buruk yang membuat baterai gadget cepat soak dan rusak](/baterai-hp-hamil-sampai-casing-melengkung-itu-sinyal-bencana) karena ditinggal mengecas semalaman di kasur empuk, atau [ilusi kenyamanan kerja digital yang rawan buyar saat laptop bermasalah di ruang publik](/ikon-wi-fi-laptop-hilang-saat-deadline-bukan-berarti-barista-kafe) akibat kartu jaringan yang menolak kompromi dengan hotspot gratisan. 

Membeli tablet berharga dua puluh delapan juta rupiah untuk kebutuhan profesional tentu sah-sah saja bagi segelintir kreator visual atau ilustrator digital yang memang hidup dari goresan ujung pena layar. Namun jika motif utama Anda mentransfer puluhan juta tabungan hanya karena terbius kampanye pemasaran canggih tentang kerja cerdas masa depan, sebaiknya simpan kartu debit Anda kembali ke dalam dompet. Sebab tidak ada rasa getir yang lebih murni ketimbang menyadari bahwa mesin komputasi bertenaga monster di tangan Anda cuma berakhir sebagai tatakan piring cemilan dan pemutar episode serial komedi menjelang tidur pulas.`
  },
  {
    title: "Musik Dayak Palui Banaran Tembus AMI Awards Saat Jakarta Asyik Daur Ulang Lagu Lawas",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["AMI Awards 2026", "Budaya Urban", "Dayak Maanyan", "Industri Musik", "Margaretha Nina", "Musik Tradisi", "Palui Banaran", "Tabalong"],
    imageUrl: "https://tvtabalong.com/wp-content/uploads/2026/11/17-new.jpg",
    imageAlt: "Penampilan seniman musik Dayak Palui Banaran membawakan instrumen tradisional sape di atas panggung budaya",
    sourceUrl: "https://tvtabalong.com/dari-tabalong-ke-panggung-nasional-karya-musik-dayak-palui-banaran-masuk-ami-awards-2026/",
    excerpt: "Seniman asal Tabalong Kalimantan Selatan, Palui Banaran, sukses menembus nominasi AMI Awards 2026 lewat tembang etno 'Wadian Dadas – Belian Dayak Ma’anyan'. Di tengah industri musik ibukota yang malas dan gemar memamah biak tembang pop lawas demi mengejar algoritma streaming, keberhasilan musisi pedalaman Banua ini adalah tamparan keras bagi ekosistem musik nasional yang selama ini kelewat Jakarta-sentris.",
    content: `Memperhatikan tingkah polah industri musik arus utama di Jakarta belakangan ini sering kali memicu rasa kantuk yang luar biasa. Setiap kali kita membuka tangga lagu terpopuler di aplikasi streaming digital, telinga kita nyaris selalu disodori menu daur ulang yang membosankan: lagu balada melankolis dekade sembilan puluhan yang digubah ulang menjadi aransemen pop menye-menye, atau lagu patah hati generik yang sengaja dipotong pendek demi mengejar durasi lima belas detik di linimasa TikTok. Para produser rekaman besar tampak begitu ketakutan merugi sampai-sampai enggan mengambil risiko artistik sedikit pun, memilih bermain aman di zona nyaman formula komersial yang sudah usang.

Kelesuan kreatif di pusat kota ini kian terasa menjemukan tatkala studio-studio rekaman besar lebih gemar menggelar audisi instan bagi pesohor media sosial ketimbang mengasah kedalaman materi lagu. Musik diproduksi layaknya barang pabrikan di ban berjalan: beat drum digital yang identik, vokal yang disiram auto-tune tebal hingga kehilangan karakter nafas manusianya, serta struktur bait-chorus yang diprogram agar gampang dicaplok algoritma pengantar tidur. Eksplorasi sonik dianggap dosa besar karena tidak menjamin angka pemutaran kilat di platform streaming global.

Di tengah atmosfer industri yang makin steril dan miskin nyali itulah, kabar mengejutkan justru berhembus dari pedalaman Kalimantan Selatan. Seorang seniman tradisi mandiri asal Tanjung, Kabupaten Tabalong, bernama Muhamad Irfan Maulana—yang lebih karib disapa dengan nama panggung Palui Banaran—secara tak terduga berhasil melesat ke jajaran nominasi ajang paling bergengsi di tanah air, Anugerah Musik Indonesia (AMI) Awards 2026.

Sebagaimana dicatat dalam laporan liputan TV Tabalong awal pekan ini, Palui Banaran sukses menembus babak nominasi untuk kategori bergengsi Karya Produksi Musik Etno Terbaik. Karya yang berhasil mencuri perhatian dewan juri tersebut bertajuk "Wadian Dadas – Belian Dayak Ma’anyan", sebuah komposisi magis yang meramu ritual sakral penyembuhan suku Dayak Ma'anyan ke dalam lanskap produksi suara modern. Prestasi ini bukan sekadar piala pajangan bagi sang seniman, melainkan pengakuan resmi bahwa kekayaan bunyi nusantara memiliki martabat tinggi di panggung musik nasional.

![Penampilan seniman musik Dayak Palui Banaran membawakan instrumen tradisional sape di atas panggung budaya](https://tvtabalong.com/wp-content/uploads/2026/11/17-new.jpg)

Apa yang dicapai oleh Palui Banaran adalah tamparan telak bagi hegemoni panggung musik ibukota yang selama berdekade-dekade memusatkan kiblat musikalitas hanya pada gemerlap studio Jakarta dan Bandung. Untuk bisa didengar secara luas, musisi luar pulau kerap dipaksa mengorbankan identitas kedaerahan mereka: menanggalkan dialek asli, membuang instrumen tradisi, lalu tunduk menyanyikan pop melankolis seragam demi bisa menembus rotasi putar radio ibu kota. 

Namun Palui Banaran menolak jalan pintas yang menghamba selera pasar tersebut. Tanpa modal promosi raksasa dari korporasi label rekaman, ia gigih mengeksplorasi denting dawai sape, resonansi perkusi rimba, dan mantra ritmik ritual Belian tanpa melucuti kesakralan akar budayanya. Menghadiri rangkaian kegiatan nominasi di Jakarta, ia bahkan melenggang bangga mengenakan balutan kain sasirangan berpadu motif Dayak pada penutup kepala laung yang dipakainya—sebuah pernyataan visual yang menegaskan bahwa seniman Banua datang bukan sebagai penggembira, melainkan pembawa warisan adiluhung yang mandiri.

Ledakan musikalitas dari daerah semacam ini mengingatkan kita pada [kejutan serupa saat musisi pesisir Wakatobi merebut panggung pop AMI Awards](/ketika-album-pop-terbaik-ami-awards-direbut-anak-pesisir-wakatobi) lewat kejujuran liriknya, sekaligus menjadi perlawanan artistik terhadap [polemik industri yang takut rugi sehingga doyan mendaur ulang karya lama](/ketika-lagu-cinta-lawas-yovie-widianto-terus-didaur-ulang-karena) tanpa menyisakan ruang bagi suara baru. Jalur sunyi ini membuktikan kredo para pegiat independen, persis seperti [fenomena musisi yang menolak tunduk pada selera algoritma streaming](/gugun-blues-shelter-tolak-tunduk-algoritma-lewat-raungan-enam) demi menjaga denyut nadi karya tetap jujur dan bernyawa.

Menembus dinding tebal AMI Awards lewat karya musik etno berbasis ritual Dayak adalah kemenangan kultural yang patut dirayakan. Ini membuktikan bahwa telinga penikmat musik tanah air sejatinya belum sepenuhnya tumpul oleh racun formula seragam. Menang atau kalah dalam malam penganugerahan piala nanti hanyalah urusan seremonial di atas kertas; yang jauh lebih penting, gema denting sape dari pedalaman Tabalong kini telah berhasil membungkam kepongahan industri musik pop yang selama ini mengira selera musik Indonesia hanya berputar di sekitar jalanan Jakarta.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 15:00 WIB)");
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
      markAsSeen(art.sourceUrl.trim());
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push({
      title: art.title,
      url: pubResult.url,
      score: audit.score,
      category: art.category,
      wordCount,
      remotePublished: pubResult.remotePublished
    });
  }

  console.log("\n=================================================================");
  console.log(`🎉 BATCH 15:00 WIB SELESAI: ${results.length} artikel terbit sempurna!`);
  console.log("=================================================================\n");
  return results;
}

// Auto-run if executed directly
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261109-1500.mjs")) {
  runBatch().catch(err => {
    console.error("FATAL ERROR pada batch runner 15:00:", err);
    process.exit(1);
  });
}
