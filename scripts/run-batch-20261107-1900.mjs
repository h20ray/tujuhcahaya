import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Update Nier Automata Membengkak Jadi 366 GB dan Bikin SSD Gamer Penuh Sesak",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Nier Automata", "Square Enix", "Steam", "PC Gaming", "Gamer Indonesia", "Industri Game", "Storage SSD"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/k598NBBJiCSKJrL33QJRvC-1920-80.jpg",
    imageAlt: "Karakter android 2B dalam game Nier Automata dengan latar reruntuhan kota distopia futuristik",
    sourceUrl: "https://www.pcgamer.com/games/rpg/nier-automata-developer-is-currently-investigating-a-bizarre-update-bug-that-drastically-inflated-the-games-file-size-from-50gb-to-366gb/",
    excerpt: "Nier: Automata mendadak menggegerkan komunitas PC saat pembaruan terbarunya di Steam menuntut ruang instalasi hingga 366 GB dari yang semula cuma 50 GB. Square Enix memang sudah mengakuinya sebagai bug anomali, tetapi kepanikan gamer yang mendadak kehabisan ruang SSD ini menjadi cermin getir betapa rakusnya ukuran game modern.",
    content: `Bayangkan skenario lumrah di akhir pekan: Anda baru saja menyeduh secangkir kopi hangat, meregangkan otot punggung setelah sepekan digilas tenggat pekerjaan, lalu menyalakan komputer dengan niat luhur bernostalgia mengayunkan pedang bersama android 2B di dunia distopia Nier: Automata. Anda mengeklik tombol Play di etalase Steam, mengharapkan denting musik orkestra yang merdu segera menyapa telinga. Namun alih-alih masuk ke menu utama, layar monitor Anda mendadak memuntahkan jendela peringatan berwarna merah pekat bertuliskan ruang penyimpanan tidak mencukupi.

Anda mengerjapkan mata, memeriksa sisa kapasitas drive komputer, lalu mengira mata Anda salah membaca digit angka. Pembaruan teranyar untuk game rilisan tahun 2017 itu ternyata menuntut alokasi ruang penyimpanan sebesar 366 gigabita. Angka fantastis yang sanggup membikin kartu memori SSD berkapasitas 512 gigabita milik gamer kelas menengah langsung menjerit histeris minta tolong.

Kejadian janggal yang melanda komunitas PC internasional ini bukan rekaman suntingan lelucon di forum Reddit. Sebagaimana dicatat dalam laporan PC Gamer pekan ini dan pengumuman darurat di laman komunitas resmi Steam, sang penerbit raksasa Square Enix mengonfirmasi adanya kesalahan teknis anomali pascapembaruan terkini yang menyebabkan instalasi Nier: Automata membengkak gila-gilaan jauh melampaui ukuran aslinya. Pihak penerbit menyatakan tengah melakukan investigasi mendalam dan meminta maaf atas ketidaknyamanan tersebut sembari berjanji merilis tambalan darurat secepat mungkin.

Padahal sejak pertama kali menyihir jagat video game dunia lewat narasi eksistensial gubahan sutradara Yoko Taro, instalasi Nier: Automata di komputer hanya memakan ruang sekitar 50 gigabita. Lonjakan ukuran lebih dari tujuh kali lipat dalam semalam ini sontak memaksa para pemain di berbagai belahan dunia kelabakan membongkar isi kandar penyimpanan mereka, menghapus rekaman video lama hingga mencopot instalasi game lain demi menampung berkas pembaruan yang mendadak berbobot bak gajah bengkak.

![Karakter android 2B dalam game Nier Automata dengan latar reruntuhan kota distopia futuristik](https://cdn.mos.cms.futurecdn.net/k598NBBJiCSKJrL33QJRvC-1920-80.jpg)

Meskipun Square Enix berdalih bahwa insiden ini murni merupakan malafungsi kompresi berkas, anomali 366 gigabita tersebut menyodorkan sentilan psikologis yang sangat menakutkan bagi masa depan industri game. Di balik tawa kecut komunitas melihat bug aneh tersebut, terselip kesadaran pahit bahwa kerakusan ukuran instalasi game modern memang sedang melaju ke titik yang tidak masuk akal.

Kita kini hidup di tengah iklim industri di mana [game berbujet triliunan kerap ketar-ketir](/ketika-path-of-exile-2-menjelang-rilis-dan-bikin-game-berbujet) menghadapi ekspektasi pemain, namun ironisnya tetap malas melakukan efisiensi data. Judul-judul tembak-menembak populer seperti Call of Duty belakangan ini sudah terbiasa merampok ruang penyimpanan di atas 200 gigabita hanya demi menampung tekstur resolusi tinggi dan bundel kostum karakter yang tak pernah diminta pemain. Bahkan simulator penerbangan tempur DCS World sempat mencatatkan rekor instalasi hingga 250 gigabita. Para eksekutif studio seakan bersepakat bahwa beban penghematan ruang penyimpanan bukan lagi tugas juru rekayasa piranti lunak mereka, melainkan urusan nasib konsumen yang dipaksa merogoh kocek untuk membeli drive penyimpanan baru setiap tahun.

Bagi para pemain di tanah air yang masih mengandalkan koneksi internet rumah berkecepatan pas-pasan atau mengandalkan kuota seluler, ukuran berkas ratusan gigabita adalah mimpi buruk logistik. Mengunduh data sebesar itu membutuhkan waktu berhari-hari, lengkap dengan kekhawatiran sambungan terputus di tengah jalan. Keangkuhan korporasi dalam memperlakukan ruang penyimpanan pemain ini senada dengan kejengkelan gamer saat mendapati [penerbit game pelit memperlakukan katalog lawas](/ketika-nintendo-pelit-merilis-game-gba-di-switch-online-padahal) di layanan sewa daring mereka. Konsumen diminta terus membayar dan berkorban ruang, sementara penyedia layanan makin santai melempar tanggung jawab optimasi ke pundak pembeli.

Square Enix barangkali bakal menuntaskan tambalan darurat ini dalam beberapa hari ke depan dan mengembalikan bobot instalasi Nier: Automata ke kisaran 50 gigabita yang bersahabat. Namun kepanikan massal ini sudah cukup memberi kita bocoran getir perihal masa depan industri game. Jika kebiasaan studio malas memampatkan berkas terus dinormalisasi, jangan kaget bila dalam kurun waktu lima tahun mendatang, syarat minimum untuk memainkan sebuah game petualangan bukan lagi urusan spesifikasi prosesor, melainkan kewajiban menyewa satu unit server mini di kolong meja kamar Anda.`
  },
  {
    title: "Ketika Baterai HP Boros Bikin Pengguna Panik Mengira Disadap Intelijen Negara",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Keamanan Siber", "Smartphone", "Spyware", "Privasi Digital", "Baterai HP", "Sysadmin", "Tips Gadget"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2024/08/16/1001195287.jpg",
    imageAlt: "Pengguna sedang memeriksa pengaturan privasi dan keamanan pada layar smartphone",
    sourceUrl: "https://www.antaranews.com/berita/5832475/cara-mengetahui-hp-disadap-tanpa-sepengetahuan-pemiliknya",
    excerpt: "Bodi ponsel pintar yang mendadak panas dan baterai yang terkuras kilat kerap membikin pengguna panik mengira perangkatnya sedang disadap agen rahasia. Fenomena paranoia digital ini marak dimanfaatkan penipu jasa sadap bodong, padahal dalam kenyataan teknis, biang keladinya sering kali cuma baterai yang menua dan tumpukan aplikasi rakus kuota.",
    content: `Ada sebuah momen menggelikan dalam dinamika hidup perkotaan ketika ponsel pintar di saku celana mendadak terasa menghangat bak martabak manis yang baru saja diangkat dari cetakan. Anda merogohnya dengan dahi berkerut, menyalakan layar, dan mendapati indikator baterai terjun bebas dari angka delapan puluh persen ke sisa belasan persen hanya dalam kurun waktu satu jam perjalanan. Dalam sekejap, imajinasi Anda langsung melompat liar ke film intrik spionase: jangan-jangan obrolan kritis Anda di tongkrongan semalam bocor, mikrofon ponsel sedang merekam tanpa henti, dan seluruh data pribadi Anda tengah disedot oleh agen intelijen negara.

Kepanikan digital yang bercampur rasa penting diri semacam itu ternyata merupakan fenomena psikologis yang sangat lumrah menjangkiti warga perkotaan. Sebagaimana dicatat dalam laporan edukasi keamanan digital Antara Tekno pekan ini, kewaspadaan masyarakat terhadap potensi penyadapan perangkat memang memiliki landasan faktual. Ancaman perangkat lunak mata-mata (*spyware*) komersial serta aplikasi pelacak liar (*stalkerware*) merupakan bahaya nyata yang kerap disorot oleh lembaga perlindungan konsumen seperti Federal Trade Commission (FTC).

Aplikasi berbahaya semacam ini biasanya menyusup secara licik menggunakan nama proses sistem palsu—seperti layanan sinkronisasi pembaruan atau pengelola daya tiruan—agar tidak dicurigai oleh pemilik perangkat. Saat beroperasi di latar belakang, modul jahat ini memang rakus menguras daya baterai karena terus-menerus memindai koordinat GPS, mencatat ketukan papan tombol, dan mengirimkan paket rekaman suara ke server penyerang. Namun para pakar keamanan siber menegaskan bahwa menyimpulkan ponsel Anda sedang disadap hanya gara-gara casing terasa hangat adalah sebuah kesimpulan yang terlalu mendramatisasi keadaan.

Ketakutan massal yang berlebihan ini celakanya justru menjadi lahan panen empuk bagi para sindikat penipu di media sosial. Di linimasa TikTok, Instagram, hingga kanal Telegram, menjamur akun-akun siluman yang menjajakan jasa sadap aplikasi percakapan tanpa perlu memegang ponsel sasaran dengan tarif ratusan ribu rupiah. Banyak orang yang sedang dibutakan rasa cemburu atau curiga terhadap pasangannya rela mentransfer uang demi tautan palsu yang ujung-ujungnya justru membobol saldo rekening bank mereka sendiri.

Kenaifan publik dalam memahami teknologi ini senada dengan kebiasaan warga yang [mengira mode pesawat bisa mengisi baterai secepat kilat](/ketika-pengguna-hp-pasang-mode-pesawat-sambil-berharap-baterai) tanpa mengerti arsitektur kelistrikan perangkat. Alih-alih menjadi target operasi spionase bernilai puluhan miliar rupiah sekelas Pegasus, biang kerok ponsel panas di tangan warga biasanya jauh lebih sepele: sel baterai lithium-ion yang kapasitas kimianya memang sudah aus dimakan waktu, aplikasi belanja online yang rakus memindai lokasi demi menyodorkan promo diskon, atau tumpukan berkas cache yang lupa dibersihkan selama berbulan-bulan.

Kesadaran melindungi ruang privasi tentu merupakan hal positif yang patut dirawat, terutama setelah kita memahami risiko kebocoran data saat [menjual HP bekas tanpa prosedur sanitasi menyeluruh](/ketika-factory-reset-hp-bekas-ternyata-belum-tentu-bikin-data) yang kerap menyisakan jejak digital berbahaya. Namun kewaspadaan yang sehat mestinya dibangun di atas pemahaman teknis yang rasional, bukan histeria yang lahir dari mitos grup percakapan keluarga.

Memeriksa secara berkala daftar izin akses kamera dan mikrofon di menu pengaturan, menolak mengklik tautan berkas APK misterius yang dikirimkan nomor asing berkedok surat undangan pesta atau tagihan paket, serta rutin memperbarui sistem operasi adalah langkah mitigasi yang konkret. Tindakan-tindakan sederhana itu jauh lebih berguna ketimbang sibuk mengetikkan kode dial rahasia bintang pagar yang kerap diklaim di media sosial bisa mendeteksi keberadaan mata-mata.

Kecuali Anda seorang deputi kementerian atau taipan minyak yang memegang rahasia triliunan rupiah, kemungkinan besar ponsel Anda tidak sedang dibuntuti oleh badan intelijen mana pun. Ponsel pintar Anda terasa panas dan lekas padam murni karena Anda enggan mengganti baterai yang sudah kembung dan terus membiarkan puluhan aplikasi berjalan serentak. Sudahi lamunan dramatis menjadi tokoh spionase dunia, lalu segera luangkan waktu untuk mencopot aplikasi sampah yang menumpuk di memori ponsel Anda.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 19:00 WIB)");
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261107-1900.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
