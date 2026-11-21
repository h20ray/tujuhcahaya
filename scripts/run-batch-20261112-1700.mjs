import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Home Assistant Rilis Aux-2 Bukti Rumah Pintar Nggak Butuh Disandera Cloud",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Home Assistant", "Nabu Casa", "Smart Home", "Open Source", "Hardware", "Elang Elano"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/aux2-hero.jpg?quality=90&strip=all&crop=0,10.738824991648,100,78.522350016704",
    imageAlt: "Perangkat Home Assistant Connect Aux-2 berwarna hitam bersanding dengan aneka konektor kabel dan sensor",
    sourceUrl: "https://www.theverge.com/tech/1031601/home-assistant-connect-aux-2-hands-on",
    excerpt: "Nabu Casa resmi meluncurkan Home Assistant Connect Aux-2 seharga 69 dolar untuk menyulap perangkat jadul menjadi pintar secara lokal. Tamparan telak bagi raksasa teknologi yang gemar mematikan server cloud dan menyandera privasi penghuni rumah.",
    content: `Pernahkah Anda membayangkan situasi konyol di mana lampu teras rumah mendadak mogok menyala hanya gara-gara kabel fiber optik di dasar samudra Pasifik putus digigit hiu? Kedengarannya seperti lelucon warkop yang terlalu mengada-ada, tetapi bagi siapa saja yang terlanjur mempercayakan urusan rumah tangganya pada ekosistem smart home besutan raksasa Big Tech, mimpi buruk semacam itu adalah santapan sehari-hari. Anda membeli bohlam pintar, saklar otomatis, atau kamera pengawas dengan label serba canggih, memasang aplikasinya di smartphone, lalu mengaitkannya ke server cloud di belahan bumi lain. Begitu tagihan langganan lupa dibayar, server pusat mereka mengalami gangguan massal, atau korporasi pembuatnya memutuskan untuk menghentikan dukungan perangkat demi memaksa konsumen membeli model teranyar, seketika itu pula perabotan di rumah Anda bermutasi menjadi seonggok rongsokan plastik yang bisu dan tak berguna.

Di tengah cengkeraman model bisnis berlangganan cloud yang kian membelenggu tersebut, angin segar kebebasan komputasi lokal kembali ditiupkan oleh komunitas perangkat lunak sumber terbuka. Sebagaimana dicatat oleh jurnalis Nathan Edwards dalam laporannya di The Verge pekan ini, Nabu Casa—sayap komersial dari Open Home Foundation yang menaungi proyek Home Assistant—resmi merilis perangkat keras terbarunya bertajuk Home Assistant Connect Aux-2. Kotak serbaguna seukuran tumpukan kartu remi ini dilepas ke pasaran dengan banderol harga 69 dolar Amerika Serikat, membawa misi sederhana namun sangat revolusioner: menyulap perabotan rumah konvensional yang tak memiliki embel-embel pintar menjadi bagian dari sistem otomasi cerdas tanpa perlu sedikit pun bergantung pada server internet luar.

Secara teknis, Aux-2 dirancang layaknya pisau lipat tentara Swiss untuk urusan interkoneksi lokal. Ditenagai oleh platform ESPHome dan mikrokontroler yang sangat fleksibel, kotak mungil ini dibekali konektivitas Wi-Fi 2,4 GHz, Bluetooth, colokan Ethernet kabel, porta USB-A dan USB-C, colokan audio analog-digital 3,5 mm, porta sensor Grove, hingga sepasang porta serial RS-232 jadul. Keberadaan porta serial ini sontak menarik perhatian para pegiat hardware kawakan. Alih-alih memaksa pengguna membuang perangkat lama demi membeli ekosistem baru berharga selangit, Aux-2 memungkinkan pengguna mengendalikan langsung inverter panel surya di atap, televisi lawas, hingga sistem tata suara analog menggunakan instruksi lokal murni. Anda bahkan bisa menyulapnya menjadi perantara Bluetooth untuk memantau suhu lemari es di garasi tanpa khawatir sinyalnya terputus saat pintu kulkas tertutup rapat.

![Perangkat Home Assistant Connect Aux-2 berwarna hitam bersanding dengan aneka konektor kabel dan sensor](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/aux2-hero.jpg?quality=90&strip=all&crop=0,10.738824991648,100,78.522350016704)

Bagi orang-orang yang terbiasa mengamati industri komputasi dari balik meja teknis, daya pikat sejati dari inisiatif ini bukanlah sekadar urusan porta kabel yang melimpah, melainkan keberanian sikap ideologisnya dalam merawat kedaulatan data di ruang privat keluarga. Selama bertahun-tahun, raksasa komputasi global memperlakukan konsep rumah pintar tak ubahnya seperti perangkap langganan digital. Mereka membujuk kita menyerahkan rekaman suara di ruang tamu, data konsumsi listrik, dan kebiasaan harian keluarga ke server komputasi awan mereka, sembari diam-diam mengunci konsumen dalam taman berdinding tebal yang mustahil ditembus oleh produk kompetitor. Ironi ketergantungan ini sangat mirip dengan situasi ketika [sensor biometrik perangkat pintar komersial](/sensor-jantung-smartwatch-sering-ngawur-bikin-warga-sehat-kena) kerap memperdaya pengguna dengan ilusi kendali semu, di mana angka-angka digital pabrikan diperlakukan lebih suci ketimbang akal sehat dan kenyamanan hidup yang sebenarnya.

Di tongkrongan warkop pinggir jalan, kita kerap menjumpai obrolan kawan-kawan yang mengeluhkan betapa merepotkannya mengurus aneka aplikasi gadget di ponsel mereka. Mau menyalakan saklar kipas angin saja harus membuka aplikasi berbeda, menunggu proses sinkronisasi server yang lambat, dan menerima serbuan iklan pop-up yang menjengkelkan. Pendekatan lokal yang diusung oleh Nabu Casa dan ekosistem Home Assistant membuktikan bahwa efisiensi teknologi semestinya memudahkan urusan manusia, bukan menciptakan lapisan kecemasan baru yang memeras dompet. Siapa pun sejatinya bebas merakit modul serupa secara mandiri menggunakan papan sirkuit ESP32 murah meriah seharga puluhan ribu rupiah di toko komponen elektronik. Namun kehadiran produk siap pakai seperti Aux-2 memberikan jalan pintas yang sangat ramah bagi warga awam yang ingin memiliki kendali penuh atas tempat tinggalnya sendiri tanpa harus pusing menyolder kabel timah hingga larut malam.

Keberhasilan Home Assistant dalam memperluas jangkauan ke konsumen awam juga menjadi tamparan telak bagi narasi korporat yang mengeklaim bahwa otomatisasi rumah hanya bisa berjalan mulus lewat perantara kecerdasan buatan berbasis langganan bulanan. Ketika perangkat lunak lokal mampu memutar musik di seluruh sudut ruangan secara sinkron lewat integrasi Music Assistant, mendeteksi pintu freezer yang terbuka lewat sensor nirkabel murah, serta mematikan seluruh aliran listrik yang boros saat rumah ditinggal pergi, apa lagi urgensi kita untuk menyerahkan privasi hunian kepada server Big Tech? Otomatisasi lokal memberikan kepastian hukum dan teknis yang tidak bisa ditandingi oleh layanan cloud komersial mana pun: perangkat Anda akan tetap berfungsi sebagaimana mestinya selama bertahun-tahun ke depan, tak peduli apakah perusahaan pembuatnya masih beroperasi atau sudah gulung tikar.

Rumah semestinya menjadi benteng perlindungan paling privat tempat kita beristirahat dengan tenang tanpa diawasi oleh algoritma pelacak data para pemodal ventura. Ketika sebuah saklar lampu di ruang makan Anda masih membutuhkan izin dari server di seberang samudra hanya demi menyala dalam gelap, ada hal yang sangat keliru dari cara kita mendefinisikan kemajuan peradaban modern. Home Assistant lewat Aux-2 mengingatkan kita pada satu kebenaran warkop yang sangat mendasar: kecerdasan sebuah teknologi tidak diukur dari seberapa jauh datanya melayang di awan internet, melainkan dari seberapa patuh ia melayani pemiliknya saat kabel modem di ruang tamu tiba-tiba dicabut.`
  },
  {
    title: "Crimson Desert Sabet Game PC Terbaik Bukti Pemain Haus Petualangan Tanpa Gacha",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Crimson Desert", "Pearl Abyss", "PC Gaming", "Golden Joystick Awards", "RPG", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/5uSFBL8SwZsL8eN6i48NTm-1920-80.jpg",
    imageAlt: "Karakter utama Kliff bertarung di tengah lanskap terbuka dalam game Crimson Desert",
    sourceUrl: "https://www.pcgamer.com/games/crimson-desert-wins-pc-game-of-the-year-at-the-2026-golden-joystick-awards/",
    excerpt: "Crimson Desert besutan Pearl Abyss sukses menyabet gelar PC Game of the Year di ajang Golden Joystick Awards 2026. Tamparan telak bagi tren game gacha dan live-service korporat yang gemar memeras dompet pemain lewat transaksi mikro.",
    content: `Coba tanyakan kepada seorang kawan gamer PC di tongkrongan warkop mengenai apa hal paling menyebalkan dari industri game modern saat ini. Jawabannya hampir pasti seragam dan meluncur tanpa perlu berpikir dua kali: lelah diperlakukan layaknya sapi perah berjalan. Buka etalase toko digital atau peluncur game mana pun hari ini, mata kita langsung diserbu oleh jendela promosi tiket musiman berbayar, putaran roda keberuntungan gacha dengan peluang menang yang mustahil, hingga pop-up penjualan kostum kosmetik seharga cicilan sepeda motor. Rasanya sudah lama sekali kita tidak merasakan sensasi murni menyalakan komputer bertenaga tinggi, memegang kendali kontroler, lalu tersesat di sebuah dunia fantasi megah tanpa disodori peringatan bahwa stamina karakter harian kita sudah habis terpakai dan harus diisi ulang menggunakan uang asli.

Dahaga akut komunitas pemain terhadap karya petualangan tunggal berkelas dunia itulah yang menjadi panggung utama dalam perhelatan akbar industri interaktif tahun ini. Sebagaimana dicatat oleh jurnalis Andy Chalk dalam laporannya di PC Gamer pekan ini, ajang penghargaan bersejarah Golden Joystick Awards ke-44 baru saja menuntaskan malam penganugerahannya. Di tengah persaingan sengit berbagai judul raksasa global, game aksi petualangan dunia terbuka besutan studio asal Korea Selatan Pearl Abyss, Crimson Desert, secara mengejutkan berhasil memboyong trofi bergengsi PC Game of the Year. Game ini bersanding di podium kehormatan bersama Resident Evil Requiem garapan Capcom yang dinobatkan sebagai penerima mahkota tertinggi Ultimate Game of the Year.

Kemenangan Crimson Desert di kategori komputer personal ini sejatinya memicu gelombang diskusi yang sangat menarik di kalangan kritikus game. Dalam ulasannya di media yang sama, kritikus Mollie Taylor menyematkan nilai delapan puluh persen untuk petualangan Kliff sang tentara bayaran di benua Pywel, sembari menggambarkan permainannya sebagai sebuah karya yang teramat luas dan rumit hingga sanggup memicu frustrasi sekaligus rasa takjub yang luar biasa bagi siapa pun yang memainkannya. Crimson Desert bukanlah game santai yang ramah bagi pemain yang manja dan malas membaca gerak-gerik lawan. Sistem pertarungannya padat dengan kombo gulat bebas, lemparan senjata yang dinamis, hingga interaksi fisika lingkungan yang menuntut kartu grafis bekerja keras hingga kipas pendinginnya mendesing kencang layaknya mesin jet di kamar tidur.

![Karakter utama Kliff bertarung di tengah lanskap terbuka dalam game Crimson Desert](https://cdn.mos.cms.futurecdn.net/5uSFBL8SwZsL8eN6i48NTm-1920-80.jpg)

Bagi komunitas pemain yang bertahun-tahun diuji kesabarannya oleh rentetan penundaan jadwal rilis sejak pertama kali dipamerkan pada 2019 silam, kemenangan ini terasa seperti sebuah pembuktian harga diri. Di saat para penerbit game barat berlomba-lomba memecat ribuan pekerja kreatif dan merilis game tembak-menembak daring yang sepi peminat dalam tempo tiga bulan, Pearl Abyss justru memilih jalan sunyi untuk menyempurnakan mesin pengolah grafis milik mereka sendiri. Keberanian studio Asia dalam mendobrak dominasi barat ini mengulang fenomena menyegarkan saat [kreator solo membongkar formula klise industri game](/spellogger-ledakkan-hutan-pakai-sihir-bukti-gamer-muak-disuruh) demi mengembalikan hakikat bermain game sebagai arena katarsis yang membebaskan imajinasi, bukan pabrik kepenatan baru yang menuntut lembur virtual setiap malam.

Di kalangan gamer kasual yang rela menabung berbulan-bulan demi membeli komponen PC idaman, kemenangan Crimson Desert adalah pengingat bahwa gamer sejatinya tidak pernah keberatan menghadapi game yang rumit dan menantang asalkan mereka dihormati sebagai manusia seutuhnya. Komunitas rela menghabiskan puluhan jam mempelajari mekanika permainan yang berbelit-belit, tersesat di rimba belantara Pywel, dan mengulang pertarungan melawan monster raksasa berkali-kali sampai jari jemari kapalan. Yang membikin pemain muak bukanlah tingkat kesulitan tombol di keyboard atau kerumitan menu inventaris, melainkan sikap culas para eksekutif korporasi yang sengaja mendesain ritme permainan menjadi membosankan setengah mati demi memaksa pemain membeli jalan pintas lewat menu transaksi mikro di dalam permainan.

Fenomena ini juga sekaligus menelanjangi kegagalan massal para konglomerat hiburan yang terlalu memuja konsep live-service sebagai tambang uang abadi. Selama lima tahun terakhir, industri game dibanjiri puluhan proyek multiplayer generik yang mati suri hanya dalam hitungan minggu usai peluncuran, menelan korban ratusan juta dolar anggaran produksi dan masa depan para karyawannya. Crimson Desert membuktikan bahwa investasi besar pada kedalaman narasi, visual spektakuler, serta kebebasan eksplorasi dunia terbuka masih memiliki tempat paling terhormat di hati para penikmat game PC. Ketika pengembang berani menyajikan pengalaman bermain yang tuntas dan mandiri tanpa embel-embel sambungan internet permanen, para pemain dengan sukarela akan mengapresiasi kerja keras tersebut dengan antusiasme yang tulus.

Panggung megah Golden Joystick Awards tahun ini mengirimkan pesan yang sangat terang benderang bagi para juragan industri hiburan digital. Gamer PC pada dasarnya tidak butuh janji manis tentang ekosistem permainan yang bakal didukung selama sepuluh tahun ke depan jika fondasi gameplay yang disajikan terasa hambar dan tanpa jiwa. Terkadang, yang dibutuhkan seorang pemain yang lelah bekerja seharian hanyalah sebilah pedang tajam, kuda tunggangan yang gagah, dan dunia antah-berantah yang luas untuk ditaklukkan, tanpa perlu diteror oleh bilah notifikasi diskon koin virtual tiap kali menekan tombol jeda di layar monitor.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 17:00 WIB)");
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

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch 17:00 Selesai! Berhasil menerbitkan ${results.length} artikel.`);
  console.log("=================================================================\n");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261112-1700.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
