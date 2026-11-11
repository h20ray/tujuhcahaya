import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ikon Wi-Fi Laptop Hilang Saat Deadline Bukan Berarti Barista Kafe Sengaja Mau Ngusir",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Hardware", "Jaringan Internet", "Laptop", "Sistem Operasi", "Teknologi", "Troubleshooting", "Wi-Fi"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2023/08/11/wifia.jpg",
    imageAlt: "Ilustrasi pengguna laptop yang mengalami masalah koneksi jaringan internet nirkabel Wi-Fi saat bekerja di meja kafe",
    sourceUrl: "https://www.antaranews.com/berita/5832947/laptop-tidak-bisa-terhubung-ke-wi-fi-apa-penyebabnya",
    excerpt: "Ikon sinyal Wi-Fi di sudut taskbar laptop yang mendadak lenyap atau berubah menjadi globe bertanda silang adalah momen horor paling murni bagi kaum budak korporat di kedai kopi. Sebelum menuduh barista pelit banderol kuota atau membanting modem kafe, ada baiknya melongok kebobrokan sirkuit driver dan tumpukan cache jaringan di laptop Anda sendiri.",
    content: `Pernahkah Anda duduk khusyuk di pojok kedai kopi dengan segelas es kopi susu yang es batunya sudah mencair jadi air tawar, sementara tenggat waktu pengiriman dokumen kantor tinggal tersisa lima belas menit lagi? Dalam situasi genting macam itu, tiba-tiba kursor mouse Anda membeku, laman peramban memunculkan dinosaurus kecil tanda putus sambungan, dan saat melirik ke sudut kanan bawah taskbar Windows, ikon gelombang sinyal nirkabel kebanggaan Anda raib tanpa pamit. Posisinya digantikan oleh gambar bola dunia abu-abu bertanda silang merah pekat yang seolah sedang mengejek kepanikan Anda.

Reaksi pertama sebagian besar pengunjung kafe biasanya seragam dan mudah ditebak: menatap curiga ke arah meja kasir. Kita langsung berprasangka buruk bahwa barista yang sedang sibuk menyeduh biji kopi arabika diam-diam mematikan saklar router demi mengusir pelanggan yang sudah nongkrong berjam-jam hanya bermodal satu minuman termurah. Namun sebelum Anda melangkah pongah ke meja pemesanan untuk melayangkan komplain bernada sewot, ada baiknya Anda menarik napas panjang dan menatap cermin. Sebab dalam banyak kasus absurd di dunia komputasi harian, biang kerok dari lenyapnya koneksi internet tersebut bukanlah konspirasi pihak kedai, melainkan sistem laptop Anda sendiri yang sedang mengalami serangan stroke digital ringan.

Kekacauan mental akibat hilangnya koneksi nirkabel ini kembali dibedah dalam laporan teknis Antara Tekno awal pekan ini. Sebagaimana dicatat dalam rilis panduan tersebut, ada sederet biang keladi yang kerap membuat kartu adapter Wi-Fi di laptop mendadak buta sinyal. Masalahnya bisa berkisar dari hal sepele yang memalukan—seperti tombol fisik atau pintasan keyboard mode pesawat yang tertekan secara tak sengaja oleh tumpukan map berkas—hingga kendala yang lebih teknis seperti tabrakan konfigurasi frekuensi antara kartu jaringan lawas berbasis pita 2,4 GHz dengan perangkat pemancar modern yang memaksakan kanal pita 5 GHz.

![Ilustrasi pengguna laptop yang mengalami masalah koneksi jaringan internet nirkabel Wi-Fi saat bekerja di meja kafe](https://img.antaranews.com/cache/800x533/2023/08/11/wifia.jpg)

Bila kita telisik lebih dalam kebiasaan para pekerja lapangan, kebiasaan memperlakukan laptop secara serampangan memang menjadi pupuk subur bagi munculnya keanehan jaringan semacam ini. Kita terbiasa tidak pernah mematikan perangkat sehabis bekerja, melainkan hanya melipat layarnya begitu saja ke dalam tas ransel tebal bersuhu panas. Perilaku ini persis seperti membiarkan [laptop yang kipasnya mendesing bak pesawat tempur](/ketika-kipas-laptop-mendesing-bak-pesawat-tempur-dan-bodi-panas) terus tersiksa tanpa sirkulasi udara, atau mengulang [kebiasaan buruk yang bikin baterai HP hamil dan soak](/baterai-hp-hamil-sampai-casing-melengkung-itu-sinyal-bencana) karena colokan adaptor dibiarkan menancap tanpa henti.

Ketika laptop terus dipaksa terjaga dalam mode sleep berhari-hari, modul manajemen daya di dalam sistem operasi kerap melakukan kesalahan fatal: memutus suplai daya ke cip nirkabel demi menghemat baterai, tetapi kemudian lupa membangunkannya kembali saat layar dibuka. Situasi ini kian runyam manakala pengguna rajin menerima pembaruan berkala dari Microsoft, yang dalam kasus [rombakan sistem operasi Windows yang kerap memicu keanehan driver](/ketika-microsoft-bersiap-rombak-total-mesin-windows-11-27h2-dan) sering kali menimpa perangkat lunak adapter yang sudah stabil dengan versi generik yang belum matang. Alhasil, kartu jaringan di Device Manager langsung menampilkan ikon segitiga kuning tanda menyerah.

Menghadapi adapter jaringan yang sedang ngambek sebenarnya tidak memerlukan ritual mistis atau makian kasar kepada penyedia internet. Langkah pertama yang paling masuk akal adalah melakukan pembersihan cache lewat jendela terminal command prompt dengan mengeksekusi perintah pelepasan IP serta pembersihan cache resolver DNS. Jika jalur tersebut masih buntu, fitur Network Reset di menu pengaturan Windows biasanya cukup ampuh untuk merontokkan konfigurasi soket yang kusut dan mengembalikan tumpukan protokol jaringan ke kondisi awal pabrik.

Pada akhirnya, perangkat elektronik kerja kita hanyalah rangkaian silikon dan tembaga yang juga butuh istirahat layak setelah digenjot bekerja tanpa henti. Sebelum Anda melayangkan tuduhan miring bahwa pemilik kedai kopi sengaja memasang batas kuota tersembunyi, cobalah mulai rutin merestart sistem dan merawat driver perangkat secara berkala. Dan kalau semua jurus command prompt sudah Anda kerahkan namun lambang bola dunia bertanda silang itu tetap tak bergeming, anggap saja itu sinyal ramah dari semesta agar Anda segera melipat laptop, menyandarkan punggung, dan menikmati kopi dingin Anda dalam damai.`
  },
  {
    title: "Deadlock Buktikan Raungan Jazz Okultis Mampu Bikin Gamer Betah Terjebak Neraka MOBA",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Deadlock", "Industri Game", "MOBA", "PC Gaming", "Soundtrack Game", "Valve"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/pbYEWFvkgVi8QrjcR2QAea-1920-80.jpg",
    imageAlt: "Tampilan visual atmosferik game Deadlock garapan Valve yang memadukan pertarungan MOBA dengan estetika mistis retro New York",
    sourceUrl: "https://www.pcgamer.com/games/moba/my-apologies-deadlock-i-wasnt-familiar-with-your-musical-game/ ",
    excerpt: "Di saat industri hero shooter sibuk mengobral kolaborasi kosmetik norak dan musik elektronik bising yang memekakkan kuping, Deadlock racikan Valve justru menghadirkan atmosfer sonik tak terduga. Alunan jazz okultis era 1950-an New York yang gelap dan penuh antisipasi mistis membuktikan bahwa Valve masih memiliki selera musik berkelas yang sanggup meredam racun kompetitif gamer PC.",
    content: `Masuk ke dalam antrean permainan kompetitif daring zaman sekarang kerap kali terasa seperti mendaftarkan diri secara sukarela ke dalam bilik tes ketahanan mental. Begitu Anda menekan tombol cari lawan di menu utama, telinga Anda langsung diserbu oleh dentuman musik tekno generik beroktan tinggi yang tempo ketukannya sengaja dirancang untuk memicu lonjakan hormon stres. Situasi di dalam arena pertandingan pun tidak jauh lebih ramah: rentetan efek suara tembakan laser yang memekakkan telinga, dengung sirine peringatan yang bising, serta sahut-sahutan sumpah serapah dari mikrofon rekan setim yang kalap karena kehilangan poin peringkat.

Di tengah lanskap game tembak-menembak modern yang kelewat bising dan miskin identitas itulah, karya eksperimental teranyar Valve bertajuk Deadlock hadir membawa kejutan yang sangat menyegarkan. Sebagaimana dicatat oleh ulasan PC Gamer awal pekan ini, proyek yang memadukan pertempuran taktis orang ketiga dengan mekanisme lorong creep ala Dota ini ternyata menyimpan keanggunan artistik yang tak disangka-sangka pada departemen tata suaranya. Alih-alih mengekor tren industri yang gemar memasang musik elektronik murahan atau lagu hip-hop lisensi mahal, Valve justru membungkus seluruh atmosfer Deadlock dengan aransemen jazz okultis berlatar kota New York dekade 1950-an yang kelam dan misterius.

Daya pikat sonik ini sudah menyapa pemain sejak detik pertama mereka mendarat di menu utama. Alunan instrumen tiupan kuningan yang murung berpadu dengan ketukan perkusi santai menciptakan aura ketegangan yang elegan—sebuah latar musik yang sempurna untuk menggambarkan kota metropolitan klasik yang sedang dikuasai oleh ritual pemujaan sekte rahasia. Keajaiban serupa berlanjut saat pemain memasuki area lobi markas persembunyian (The Hideout), di mana musik latar mengalun begitu tenang dan berwibawa di balik riuhnya suara karakter yang sedang mencoba kombinasi jurus pamungkas di ruang latihan sebelah.

![Tampilan visual atmosferik game Deadlock garapan Valve yang memadukan pertarungan MOBA dengan estetika mistis retro New York](https://cdn.mos.cms.futurecdn.net/pbYEWFvkgVi8QrjcR2QAea-1920-80.jpg)

Keberanian Valve merawat kedalaman musik berjiwa manusia ini adalah tamparan telak bagi tren industri game arus utama yang makin mekanis. Demi mengejar angka penjualan kosmetik virtual dan battle pass musiman, banyak publisher besar kini memperlakukan aransemen musik sekadar tempelan pengisi keheningan tanpa konsep artistik yang matang. Sikap komersial yang hambar tersebut senada dengan [penolakan studio terhadap sentuhan artifisial dan humor hambar bot](/jackbox-games-tolak-mentah-mentah-ai-karena-selera-humor-bot), di mana pemain sejatinya selalu haus akan sentuhan karya yang memiliki kepribadian otentik ketimbang polesan algoritma pemasaran korporasi.

Puncak kejeniusan tata suara Deadlock terlihat jelas pada aransemen trek pendek berjudul "For the King". Lagu berdurasi empat puluh satu detik ini dimainkan saat sistem menempatkan skuad Anda di kubu Hidden King. Petikan distorsi gitarnya terdengar kotor, sengau, dan membuncah mirip rekaman kaset pita usang yang diputar dari tape mobil rongsokan, tetapi justru berhasil menyulut adrenalin pemain ke level tertinggi. Nuansa brilian ini kembali terulang pada mode pertarungan cepat Street Brawl saat babak pemilihan barang belanjaan; di latar belakang melodi jazz yang mengalun santai, Valve menyisipkan detak jarum jam yang berdetak secara acak, yang kemudian berubah menjadi irama mendesak tatkala waktu pemilihan hampir habis.

Sentuhan detail semacam ini membuktikan bahwa Valve tidak pernah kehilangan insting magisnya dalam meracik sebuah dunia game, bahkan ketika komunitas sering kali dibuat geregetan oleh [kekecewaan gamer terhadap janji manis publisher yang suka menunda rilis](/warhammer-blood-bowl-kena-tunda-ke-2027-saat-gamer-sudah-lelah). Terlebih lagi, kenyamanan menikmati karya Valve ini kian terasa solid berkat fleksibilitas [ekosistem Steam dan SteamOS yang menolak tunduk monopoli peluncur game](/dulu-menghina-linux-sekarang-epic-games-malah-rela-sungkem-ke), memungkinkan para pencinta PC gaming menjelajahi atmosfer mistis ini di berbagai platform tanpa sekat batasan yang menjengkelkan.

Pada akhirnya, arena pertempuran Deadlock mungkin akan tetap menjadi kuburan bagi kewarasan Anda saat berhadapan dengan lawan yang lihai mengepung markas dari segala penjuru. Anda mungkin masih akan membanting mouse saat tertangkap basah di tengah lorong jalan raya oleh creep musuh. Namun setidaknya ketika kekalahan telak itu terpampang nyata di layar monitor, telinga Anda masih dihibur oleh raungan melodi terompet dan gitar klasik yang begitu mempesona, membuktikan bahwa kalah dalam balutan selera musik berkelas selalu terasa jauh lebih terhormat ketimbang menang di dalam game yang bising tanpa jiwa.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 13:00 WIB)");
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
  console.log(`🎉 Batch Publikasi Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261109-1300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Run Error:", err);
    process.exit(1);
  });
}
