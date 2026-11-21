import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Bangga Punya iPhone Anti Sadap Padahal Rekening Tetap Amblas Kena Tipu Paket",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Apple", "iPhone", "Keamanan Siber", "Privasi Digital", "Gadget", "Elang Elano"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2026/10/27/Apple-iPhone-18-Pro-2up-Geo-260909-lp.jpg.news_app_ed.jpg",
    imageAlt: "Ilustrasi jajaran ponsel Apple iPhone dengan bodi titanium di atas meja",
    sourceUrl: "https://www.antaranews.com/berita/5852807/benarkah-iphone-tidak-bisa-disadap-ini-faktanya",
    excerpt: "Kepercayaan buta bahwa iPhone mustahil disadap membuat banyak pengguna merasa kebal dari intaian siber. Padahal di balik taman bertembok Apple, ancaman spyware Pegasus hingga celah zero-click tetap mengintai siapa saja yang lengah.",
    content: `Ada pemandangan menggelitik yang hampir selalu berulang tiap kali perdebatan soal ponsel cerdas meledak di meja warung kopi. Para pengguna Android biasanya sibuk memamerkan fleksibilitas memasang aplikasi oprekan, mengatur tema antarmuka sesuka hati, atau membanggakan kecepatan pengisian daya baterai yang sanggup penuh dalam hitungan menit. Di seberang meja, pemilik iPhone biasanya hanya tersenyum tipis dengan tatapan sedikit merendahkan, lalu mengeluarkan senjata pamungkas yang dianggap tak terbantahkan: "Biar lambat, yang penting iPhone kami aman dari penyadapan dan data privasi selalu terjaga rapat." Di mata para pemujanya, logo buah apel digigit di punggung ponsel seolah bertindak layaknya jimat pelindung gaib yang membuat perangkat mereka kebal dari segala macam marabahaya jagat digital.

Namun rasa percaya diri yang berlebihan itu sering kali berdiri di atas fondasi mitos yang rapuh. Sebagaimana dicatat dalam laporan investigasi ANTARA News dan temuan mendalam dari lembaga riset Citizen Lab pada September 2026, anggapan bahwa iPhone mustahil disadap atau diretas resmi dinyatakan gugur demi hukum kenyataan. Laporan tersebut mengungkap kasus nyata seorang aktivis kemanusiaan di Serbia yang perangkat iPhone miliknya berhasil dibobol oleh perangkat lunak berbahaya Pegasus buatan konsorsium pengawasan siber NSO Group. Yang paling membikin bulu kuduk berdiri, penyusupan ini dilancarkan melalui metode serangan tanpa klik alias zero-click attack. Sang korban sama sekali tidak pernah mengeklik tautan aneh, tidak memasang aplikasi mencurigakan, dan tidak membuka dokumen beracun. Celah tak kasat mata di dalam protokol sistem operasi sudah cukup bagi operator intelijen untuk menyusup ke dalam perangkat secara diam-diam.

Begitu spyware semacam Pegasus berhasil menembus benteng pertahanan iOS, seluruh ilusi privasi eksklusif yang dibayar mahal oleh pengguna langsung menguap ke udara. Perangkat pengintai tersebut leluasa menguras riwayat obrolan pesan instan terenkripsi, menyalin galeri foto pribadi, melacak koordinat GPS secara waktu nyata, hingga mengaktifkan mikrofon dan kamera perangkat dari jarak jauh tanpa menyalakan lampu indikator apa pun. Kerentanan ini kian diperparah oleh rentetan temuan celah berbahaya pada mesin peramban WebKit yang memaksa tim teknisi Apple bekerja lembur merilis tambalan darurat hampir di setiap siklus pembaruan perangkat lunak bulanan.

![Ilustrasi jajaran ponsel Apple iPhone dengan bodi titanium di atas meja](https://img.antaranews.com/cache/800x533/2026/10/27/Apple-iPhone-18-Pro-2up-Geo-260909-lp.jpg.news_app_ed.jpg)

Di balik gegap gempita papan reklame raksasa Apple yang selalu mengagungkan privasi sebagai hak asasi, tersimpan kontradiksi nyata yang kerap meninabobokan para pemiliknya. Konsep taman bertembok atau walled garden yang diterapkan Apple memang efektif menyaring aplikasi sampah sembarangan di toko aplikasi resmi mereka. Namun sistem keamanan tercanggih di muka bumi sekalipun tidak akan pernah sanggup menambal kelemahan paling mendasar dalam rantai keamanan siber: faktor kelalaian manusia alias rekayasa sosial (social engineering). Sebanyak apa pun baris kode enkripsi yang dibanggakan para insinyur Cupertino, perlindungan itu mendadak menjadi lelucon tak berdaya ketika si pemilik ponsel dengan sukarela menyerahkan kode sandi sekali pakai (OTP) kepada penipu daring, atau terburu-buru mengeklik dokumen berformat APK jebakan yang menyamar sebagai tagihan paket kurir di aplikasi WhatsApp.

Kecanduan pada rasa aman semu ini persis seperti fenomena saat [kacamata pintar yang berkedok ramah privasi](/kacamata-ai-gemini-berkedok-ramah-privasi-padahal-rekam-muka) dipromosikan ke masyarakat, di mana publik diyakinkan bahwa teknologi mutakhir otomatis menjamin keselamatan data pribadi tanpa menuntut kewaspadaan kritis dari penggunanya. Rasa superioritas ekosistem tertutup ini juga sejalan dengan strategi korporasi ketika [ekosistem tertutup Apple yang makin protektif](/apple-gembok-forum-komunitas-28-tahun-demi-menggiring-pengguna-ke) sebenarnya dirancang untuk mengunci ketergantungan dompet konsumen ke dalam layanan berlangganan mereka sendiri ketimbang murni melindungi kebebasan pengguna. Bagi masyarakat perkotaan yang rela mencicil ponsel seharga belasan hingga puluhan juta rupiah demi mengejar gengsi sosial, menaruh kepercayaan buta pada merek HP adalah kenaifan modern yang sangat mahal tebusannya.

Di tongkrongan warkop pinggir jalan, orang yang merasa aman dari penyadapan hanya gara-gara mengantongi iPhone persis seperti pemilik warung yang memasang pintu brankas baja berstandar bank di depan rumah bambunya, tetapi membiarkan jendela dapur terbuka lebar tanpa teralis sembari menggantung kunci gembok di pagar luar. Para penjahat siber dan sindikat penipu rekening tidak perlu membuang jutaan dolar untuk membeli spyware kelas militer jika korbannya masih saja gampang panik saat menerima pesan gertakan dari nomor asing tak dikenal. Keamanan digital sejatinya bukan ditentukan oleh seberapa mahal logo gadget di saku celana Anda, melainkan seberapa waras nalar kritis Anda saat menatap layar kaca.`
  },
  {
    title: "Asyik Memanjakan Gamer Sultan Bikin Pasar Prosesor AMD Direbut Balik oleh Intel",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["AMD", "Intel", "Prosesor", "Hardware", "PC Gaming", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/xNPHqUrH9cAL7uimaVYGoG-1920-80.jpg",
    imageAlt: "Prosesor komputer terpasang pada soket motherboard rakitan PC gaming",
    sourceUrl: "https://www.pcgamer.com/hardware/processors/intel-takes-massive-chunk-out-of-amds-desktop-cpu-market-share-in-unexpected-turnaround-may-be-due-to-the-red-teams-dominance-in-gaming-chips-weirdly/",
    excerpt: "Keberhasilan AMD merajai prosesor gaming kelas atas lewat lini X3D ternyata berbuntut petaka di pasar desktop umum. Laporan Mercury Research mencatat Intel berhasil merebut kembali pangsa pasar prosesor desktop di tengah lesunya daya beli perakit PC rumahan.",
    content: `Bagi siapa saja yang pernah menghabiskan masa remajanya di bilik warnet atau bergerilya di grup jual-beli suku cadang komputer bekas, kubu merah AMD selama bertahun-tahun diperlakukan layaknya pahlawan pembebas kaum tertindas. Kita tentu masih mengingat betul masa-masa ketika prosesor Ryzen generasi pertama lahir ke dunia, mendobrak kemapanan Intel yang selama hampir satu dekade begitu pelit berinovasi, gemar membatasi jumlah inti komputasi, dan rajin memeras dompet konsumen dengan mengganti soket motherboard nyaris setiap dua tahun sekali. Kala itu, membela AMD di forum internet bukan sekadar soal memilih peranti keras, melainkan sebuah pernyataan sikap keberpihakan kepada mereka yang punya dana pas-pasan tetapi tetap bermimpi bisa memainkan game terbaru dengan lancar.

Namun romantisme masa lalu itu mendadak dihantam kenyataan getir di lantai bursa industri peranti keras pekan ini. Sebagaimana dicatat dalam laporan riset pasar terbaru dari lembaga analis Mercury Research pada kuartal ketiga 2026, peta pengapalan prosesor desktop dunia mengalami pergeseran haluan yang sangat mengejutkan. Intel secara tak terduga berhasil merebut kembali pangsa pasar prosesor komputer meja sebesar 5,1 persen dalam tempo tiga bulan saja. Angka ini terasa luar biasa menyakitkan bagi AMD. Pasalnya, kubu merah membutuhkan perjuangan berdarah-darah selama hampir sepuluh tahun untuk merangkak naik hingga mencapai pangsa pasar 35 persen pada pertengahan tahun ini, sebelum akhirnya langsung merosot tajam kembali ke level 29,9 persen.

Penyebab dari fenomena putar balik ini justru berakar dari keberhasilan AMD sendiri yang belakangan ini terlalu jemawa. Di ranah gaming kelas atas, AMD memang tidak terbantahkan lagi sebagai raja mutlak berkat kedahsyatan prosesor Ryzen 7 9800X3D dan jajaran cip berteknologi 3D V-Cache yang sanggup melibas judul game terberat dengan angka frame rate fantastis. Namun keasyikan memanjakan para gamer sultan berkantong tebal ini rupanya membuat manajemen AMD melupakan realitas pahit yang sedang melanda mayoritas perakit PC rumahan di berbagai belahan dunia: daya beli masyarakat sedang babak belur, sementara harga kartu grafis, memori RAM, dan penyimpanan sistem masih bertahan di angka yang mencekik leher.

![Prosesor komputer terpasang pada soket motherboard rakitan PC gaming](https://cdn.mos.cms.futurecdn.net/xNPHqUrH9cAL7uimaVYGoG-1920-80.jpg)

Ketika seorang gamer kere hore atau teknisi kantor dihadapkan pada anggaran belanja yang sangat terbatas, mereka tidak lagi peduli pada skor pengujian tolok ukur di lembar spesifikasi. Menghabiskan uang tujuh hingga delapan juta rupiah hanya untuk sebuah prosesor gaming adalah kemewahan absurd yang tak masuk akal bagi pengguna biasa. Di titik inilah Intel dengan cerdik memanfaatkan celah pasar yang ditinggalkan rivalnya. Intel membanjiri pasar rakitan komputer murah meriah dan memasok para perakit komputer skala besar (OEM) dengan prosesor kelas menengah ke bawah yang harganya jauh lebih bersahabat serta masih mendukung memori lawas DDR4 yang murah meriah di pasaran.

Perilaku jumawa AMD yang mulai meniru gaya elitis kompetitor lamanya ini kian diperparah oleh reputasi perangkat lunak mereka yang belakangan kerap bertingkah labil. Komunitas gamer PC tentu masih ingat betul bagaimana [driver AMD sempat menggerus kesehatan SSD](/driver-amd-gerus-kesehatan-ssd-satu-persen-tiap-bulan-bukti) para penggunanya secara misterius, yang kemudian disusul oleh situasi runyam ketika [tambalan driver AMD penyelamat SSD yang malah bikin game crash](/tambalan-driver-amd-penyelamat-ssd-malah-bikin-game-cyberpunk) saat dipakai berpetualang di Night City. Membayar harga mahal untuk perangkat keras yang peranti lunaknya gemar bikin senam jantung tentu membuat para perakit komputer rumahan berpikir dua kali untuk tetap setia pada bendera kubu merah.

Di meja angkringan tempat para pecinta rakit PC biasa nongkrong sepulang kerja, nasib AMD hari ini persis seperti warung soto kaki lima legendaris yang mendadak mengubah konsepnya menjadi kafe mewah ber-AC dengan porsi mungil dan harga bintang lima. Sang pemilik warung merasa bangga karena makanannya dipuji oleh para kurator kuliner borjuis, sembari lupa bahwa yang membuat periuk nasinya tetap mengepul selama bertahun-tahun adalah para buruh dan mahasiswa indekos yang saban hari memesan soto campur porsi dobel. Meraih predikat prosesor gaming terkencang di dunia memang patut dibanggakan di etalase pameran, tetapi membiarkan rakyat jelata gigit jari karena tak sanggup membeli produk Anda adalah cara paling tolol untuk menyerahkan kembali mahkota pasar ke pelukan musuh bebuyutan.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 23:00 WIB)");
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
}

runBatch().catch(err => {
  console.error("Batch Execution Error:", err);
  process.exit(1);
});
