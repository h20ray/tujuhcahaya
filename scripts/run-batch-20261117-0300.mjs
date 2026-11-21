import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Beli iPhone Belasan Juta Malah Dijatah Kuota Harian Buat Nyuruh Siri Mikir Keras",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Apple", "Apple Intelligence", "Siri", "Elang Elano", "Kecerdasan Buatan", "Smartphone", "Gaya Hidup Digital"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/06/siri-ai.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Ilustrasi antarmuka asisten virtual Siri bertenaga Apple Intelligence pada layar perangkat smartphone",
    sourceUrl: "https://www.theverge.com/tech/1034581/apple-intelligence-siri-ai-daily-usage-limits-icloud-subscription",
    excerpt: "Apple mulai menguji coba pembatasan kuota harian untuk fitur Siri AI tingkat lanjut di sistem operasi terbarunya. Beli perangkat belasan juta rupiah ternyata tak menjamin kebebasan komputasi tanpa jerat langganan awan.",
    content: `Ada satu pemandangan jenaka yang kerap mampir di meja warkop setiap kali musim peluncuran gadget baru tiba: seorang kawan merogoh saku celananya dengan gerakan lambat penuh wibawa, lalu meletakkan smartphone berlogo buah apel tergigit di atas meja kayu yang agak basah oleh tumpahan kopi tubruk. Banderol harganya setara dengan sepeda motor matik seken yang masih layak pakai jalan raya. Di kepalanya berputar angan-angan fiksi ilmiah nan megah: sebuah ponsel cerdas yang mampu bekerja serba otomatis layaknya asisten pribadi konglomerat minyak, merapikan jadwal rapat tanpa diminta, dan merangkum tumpukan email kantor yang berantakan hanya dengan satu bisikan suara. Pengguna rela merogoh tabungan hingga berdarah-darah demi menebus ilusi bahwa masa depan komputasi sudah sepenuhnya tergenggam di telapak tangan mereka sendiri.

Namun jika Anda mengira kemewahan perangkat keras seharga belasan juta rupiah tersebut otomatis memberi hak milik mutlak atas seluruh kecerdasan di dalamnya, Apple punya kabar pahit yang siap merusak suasana pagi Anda. Sebagaimana dicatat dalam laporan The Verge dan temuan kode uji coba pengembang di MacRumors pekan ini, perusahaan asuhan Tim Cook tersebut mulai menyusupkan sistem pembatasan penggunaan harian (*daily usage limits*) per perangkat pada versi beta pembaruan iOS 27.3, iPadOS 27.3, dan macOS 27.3. Fitur asisten virtual Siri dan kecerdasan Apple Intelligence yang digembar-gemborkan bakal menjadi otak masa depan perangkat mereka ternyata mulai dijatah layaknya kuota paket internet darurat anak kos di akhir bulan.

Aturan main yang dirancang Apple memperlihatkan batasan yang cukup menggelikan. Untuk perintah lokal yang remeh-temeh semacam menyetel alarm bangun tidur, memutar daftar lagu, atau membuka aplikasi kalkulator, sistem operasi masih berbaik hati membiarkannya berjalan bebas tanpa batasan kuota karena seluruh prosesnya dipikul oleh prosesor internal di dalam ponsel. Namun petaka dimulai begitu Anda meminta Siri melakukan komputasi yang menuntut logika multi-langkah dan pemahaman konteks lintas aplikasi—misalnya menyisir email tiket pesawat untuk dimasukkan otomatis ke kalender, memproses perbaikan foto rumit di Image Playground, atau merangkum dokumen kerja yang tebal. Begitu perintah tersebut membutuhkan sokongan server awan Apple, meteran kuota harian Anda langsung berputar kencang.

Ketika jatah harian itu habis terpakai akibat aktivitas kerja yang intensif, pengguna akan disuguhi pesan pemberitahuan dingin untuk menunggu hingga batas waktu reset pada pergantian hari berikutnya. Alternatif lain yang disodorkan tentu saja jalan pintas khas Silicon Valley: pengguna dipersilakan merogoh kocek lebih dalam untuk menyewa kapasitas server tambahan melalui paket langganan berbayar iCloud+ atau Apple One.

Manuver penjatahan kuota ini adalah tamparan telak bagi siapa saja yang menelan mentah-mentah janji manis promosi korporasi. Selama setahun belakangan, Apple gencar mendengungkan narasi *private cloud compute* sebagai benteng keunggulan moral mereka dibanding kompetitor. Mereka membujuk konsumen agar percaya bahwa perangkat mereka adalah benteng privasi yang mandiri. Namun realitas di balik dapur server berkata lain: menjalankan inferensi model bahasa berukuran raksasa di server awan menuntut biaya listrik dan pasokan cip pengolah grafis yang luar biasa mahal. Bahkan kas keuangan raksasa sekaliber Cupertino sekalipun mulai kelabakan menanggung beban operasional para pengguna yang doyan menyuruh chatbot berpikir keras tanpa membayar biaya sewa mingguan.

Bagi konsumen di tanah air, fenomena jatah kuota asisten digital ini memperpanjang riwayat kekecewaan atas janji manis ekosistem tertutup. Situasi ini mengulang ironi serupa ketika [Apple ngotot merombak Siri menjadi agen pintar](/apple-ngotot-bikin-siri-jadi-agen-ai-saat-paham-perintah-saja) padahal sekadar menangkap konteks kalimat percakapan bahasa manusia sehari-hari saja sering kali berakhir dengan jawaban salah tingkah. Alih-alih mendapatkan asisten digital yang tulus meringankan beban hidup, pembeli gadget mewah justru diperlakukan seperti penyewa mobil sport impor yang bensinnya dijatah setengah liter per hari oleh sang pemilik rental. Kita dipaksa sadar bahwa perangkat keras yang kita beli lunas di gerai resmi hanyalah sebuah cangkang kaca dan logam yang cantik, sementara nyawa dan kecerdasannya tetap disandera di server milik orang lain.

Melihat gelagat industri teknologi hari ini, batas antara kemajuan peradaban dan taktik pemerasan halus kian kabur tanpa sisa. Kita digiring untuk menukar jutaan rupiah tabungan demi fitur kecerdasan buatan yang sewaktu-waktu bisa dibatasi atau dimatikan sepihak oleh pengembangnya lewat pembaruan perangkat lunak. Pada akhirnya, kemewahan sejati bagi anak tongkrongan warkop bukanlah menggenggam ponsel cerdas yang sok tahu cara membalas email bos, melainkan menyadari bahwa alarm weker manual dan timer masak mi instan sepuluh ribu perak di dapur kosan jauh lebih setia melayani hidup tanpa pernah menagih biaya sewa kuota harian.`
  },
  {
    title: "Nintendo Minta Sepuluh Dolar Demi Upgrade Switch 2 yang Malah Bikin Pikmin 4 Lemot Berjamaah",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Nintendo", "Nintendo Switch 2", "Pikmin 4", "Andoru Ray", "Industri Game", "Konsol Game", "Gamer Indonesia"],
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/11/pikmin-4-screenshot-16-9.jpg",
    imageAlt: "Tangkapan layar karakter makhluk mungil dalam game Pikmin 4 yang dirilis kembali untuk konsol Nintendo Switch 2",
    sourceUrl: "https://www.polygon.com/pikmin-4-nintendo-switch-2-release-controversy/",
    excerpt: "Pembaruan berbayar Pikmin 4 untuk Nintendo Switch 2 menuai protes keras dari para penggemar. Banderol upgrade sepuluh dolar justru menghadirkan loading screen lebih lambat dan penurunan performa.",
    content: `Bagi siapa saja yang menghabiskan waktu luangnya di depan layar televisi bersama sebuah konsol game, ada satu harapan sederhana yang selalu menyala tiap kali generasi mesin baru diumumkan: keyakinan polos bahwa perangkat keras yang lebih bertenaga akan membebaskan kita dari penderitaan masa lalu. Kita membayangkan cip pemrosesan yang lebih kencang, grafis yang kian tajam tanpa gerigi kasar di sudut karakter, dan yang paling penting, punahnya ritual membosankan menatap layar tunggu (*loading screen*) sambil melamun menunggu game selesai memuat data. Berbekal janji tersebut, para gamer rela menyisihkan uang makan siang berbulan-bulan demi menyambut konsol generasi anyar dengan senyum semringah.

Namun di tangan pabrikan asal Kyoto sekelas Nintendo, mimpi indah tentang lompatan teknologi kerap kali dibumbui kejutan getir yang bikin kepala pening. Sebagaimana dicatat dalam laporan investigasi Polygon dan gelombang ulasan pedas di komunitas forum Reddit pekan ini, peluncuran paket peningkatan game Pikmin 4 untuk konsol Nintendo Switch 2—yang diberi tajuk pembaruan Dandori Academy—mendadak memicu amarah besar para penggemar setia. Alih-alih memberikan peningkatan visual yang memanjakan mata, berkas pembaruan seharga sepuluh dolar Amerika Serikat atau sekitar seratus enam puluh ribu rupiah tersebut justru dinilai para pemain sebagai langkah kemunduran performa berbayar (*paid downgrade*).

Keluhan para gamer bertebaran bukan karena mereka bersikap manja atau terlalu menuntut grafis fotorealistis. Bukti di lapangan menunjukkan fakta teknis yang memalukan: durasi layar tunggu saat pemain berpindah dari permukaan tanah menuju gua bawah tanah di Switch 2 justru memakan waktu lebih lambat beberapa detik dibanding saat memainkan kaset aslinya di konsol Switch generasi pertama. Peningkatan resolusi yang dipamerkan terasa setengah matang, sementara kestabilan tingkat bingkai per detik (*frame rate*) di area pertempuran yang padat musuh tetap saja mengalami penurunan yang mengganggu kenyamanan bermain. Skor ulasan pengguna di laman Metacritic pun seketika jeblok dihujani angka merah oleh komunitas yang merasa menjadi korban lelucon korporat.

Tindakan menjual paket peningkatan performa setengah matang ini menghadirkan tamparan moral yang memalukan bagi reputasi Nintendo. Selama puluhan tahun, perusahaan pencipta Mario Bros ini selalu memosisikan diri sebagai benteng terakhir kualitas video game keluarga yang murni, terbebas dari tabiat rakus penerbit barat yang doyan merilis game rusak lalu menambalnya belakangan dengan biaya tambahan. Namun keberanian memungut upeti sepuluh dolar demi berkas patch yang bahkan gagal mengoptimalkan waktu tunggu mesin membuktikan bahwa virus komersialisasi murahan kini telah menjalar ke jantung manajemen mereka.

Bagi gamer tanah air yang menghemat pengeluaran demi membeli kaset fisik seharga tujuh ratus ribu rupiah, kekacauan ini kian mempertegas keresahan yang sempat mengemuka saat [petinggi Nintendo berjanji menahan harga Switch 2](/ketika-bos-nintendo-berjanji-switch-2-tak-naik-harga-tapi-dompet) di pasar global. Publik kini paham bahwa harga konsol yang tampak ramah di etalase toko hanyalah umpan pancingan belaka. Celah keuntungan sesungguhnya justru dikeruk melalui deretan biaya upgrade printilan yang dipatok pada judul-judul game populer lama. Praktik semacam ini kian terasa menyakitkan hati bila dibandingkan dengan ekosistem PC, di mana patch peningkatan resolusi dan tekstur selalu dibagikan secara cuma-cuma oleh pengembang sebagai bentuk penghormatan atas kesetiaan komunitas pemain.

Perilaku industri konsol yang kian gemar memeras konsumen ini bukanlah kabar baik bagi masa depan hiburan digital. Pemain yang sudah membeli game dengan harga penuh di masa lalu kini diperlakukan layaknya penyewa yang wajib membayar karcis retribusi berkali-kali hanya untuk menikmati konten yang sudah mereka miliki. Jika pembiaran terhadap taktik semacam ini terus berlangsung, bukan mustahil di masa depan kita harus membayar biaya langganan bulanan terpisah hanya demi menyalakan opsi pengaturan grafis enam puluh bingkai per detik pada game favorit kita.

Ironi terbesar dari skandal ini tentu saja terletak pada filosofi "Dandori" yang menjadi jiwa utama dari permainan Pikmin itu sendiri. Di dalam game, pemain dilatih untuk menyusun strategi kerja seefisien mungkin: mengatur barisan makhluk mungil agar tidak membuang waktu dan tenaga secara sia-sia dalam menyelesaikan sebuah misi. Sungguh menggelikan menyaksikan para petinggi Nintendo mempraktikkan filosofi Dandori yang bertolak belakang di dunia nyata: meraup uang sepuluh dolar dari dompet pemain secepat kilat, sembari membiarkan sang pemain terdampar lebih lama di depan layar loading yang lambat tanpa rasa bersalah.`
  }
];

async function runBatch() {
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
  console.log(`🎉 BATCH SELESAI: ${results.length} artikel berhasil diaudit & dipublikasikan.`);
  console.log("=================================================================");
}

runBatch().catch(err => {
  console.error("Batch Execution Error:", err);
  process.exit(1);
});
