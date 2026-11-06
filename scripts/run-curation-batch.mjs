import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Bos Take-Two Santai Hadapi Pembajakan GTA 6 tapi Bikin Pemain Waswas Soal Harga",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Grand Theft Auto", "GTA 6", "Industri Game", "PC Gaming", "Rockstar Games", "Video Game"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/qssUN2VdpiBrvmcfvqWGdK-1920-80.jpg",
    imageAlt: "Logo ikonik waralaba Grand Theft Auto dan ilustrasi karakter game petualangan dunia terbuka",
    sourceUrl: "https://www.pcgamer.com/games/grand-theft-auto/take-two-boss-strauss-zelnick-isnt-too-concerned-about-piracy-ahead-of-gta-6-even-if-he-is-worried-about-everything-all-the-time/",
    excerpt: "Bos Take-Two Strauss Zelnick mengaku sama sekali tidak cemas soal potensi pembajakan saat GTA 6 meluncur. Ketenangan bos publisher raksasa ini masuk akal: mereka sudah punya mesin pencetak uang bernama GTA Online, sementara dompet pemain justru yang dibikin waswas oleh rumor kenaikan harga dasar game.",
    content: `Kalau ada satu game di kolong langit yang sanggup membikin jagat internet berhenti berputar cuma gara-gara rumor tanggal rilis yang bocor di forum Reddit, judul itu pastilah Grand Theft Auto 6. Waralaba andalan Rockstar Games dan sang induk perusahaan, Take-Two Interactive, ini sudah menjadi fenomena kultural tersendiri. Trailer perdananya saja langsung memecahkan rekor tontonan dunia dalam hitungan jam, memicu ribuan video bedah teori dari para penggemar yang menganalisis setiap jengkal pantulan cahaya di kaca mobil kota Vice City.

Dengan antisipasi setinggi langit dan biaya produksi yang konon menembus angka miliaran dolar, wajar jika banyak orang mengira para petinggi Take-Two sedang keringat dingin memikirkan ancaman pembajakan digital. Maklum, di industri game komputer pribadi dan konsol, momok pembajakan selalu menjadi kambing hitam favorit para eksekutif tiap kali angka penjualan kuartalan mereka meleset dari target proyeksi investor.

Namun anggapan tersebut langsung ditepis dengan gaya santai oleh sang nahkoda tertinggi Take-Two, Strauss Zelnick. Sebagaimana dicatat dalam laporan PC Gamer pekan ini, ketika ditanya wartawan perihal kekhawatiran pembajakan yang mungkin membayangi peluncuran GTA 6, Zelnick menjawab dengan enteng bahwa pembajakan bukanlah hal yang terlalu ia risaukan, meskipun secara berkelakar ia mengaku selalu mencemaskan segala hal setiap waktu.

Bagi gamer yang kerap mengikuti dinamika industri di [ulasan game](/category/game), pernyataan santai Zelnick ini tentu bukan lahir dari sikap pasrah atau kemurahan hati korporat. Ada alasan bisnis yang sangat dingin di balik ketenangannya: Take-Two paham betul bahwa zaman di mana orang meraup laba murni dari sekadar menjual kepingan cakram fisik game pemain tunggal sudah lama lewat.

Kunci ketenangan para bos penerbit terletak pada ekosistem multi-pemain daring (*online multiplayer*). Kesuksesan luar biasa GTA 5 selama lebih dari satu dekade membuktikan bahwa uang receh terbesar bukan datang dari penjualan cerita utama Michael, Trevor, dan Franklin, melainkan dari transaksi kartu Shark Card di GTA Online. Pemain yang membajak salinan game lokal mungkin bisa menjelajahi kota Vice City sendirian, tapi mereka tidak akan pernah bisa mengakses server resmi GTA Online untuk pamer mobil sport berlapis emas bersama teman satu tongkrongan. Di situlah cengkeraman psikologis Rockstar bekerja: mereka membiarkan cerita tamat dinikmati siapa saja, karena jerat sebenarnya ada di dunia daring yang mustahil dibajak.

![Ilustrasi waralaba Grand Theft Auto dan lanskap kota fiktif Vice City](https://cdn.mos.cms.futurecdn.net/qssUN2VdpiBrvmcfvqWGdK-1920-80.jpg)

Alih-alih Take-Two yang cemas, justru komunitas pemain yang saat ini pantas waswas. Di balik senyum tenang sang bos, bayang-bayang monetisasi agresif mulai mengintai dompet para gamer. Zelnick sendiri dalam beberapa kesempatan wawancara investor pernah melontarkan pandangan kontroversial soal penetapan harga video game, di mana ia menilai bahwa harga sebuah game mestinya diukur dari nilai per jam hiburan yang dinikmati pemain. Logika korporasi semacam ini adalah sinyal bahaya yang memicu rumor kuat bahwa GTA 6 bisa saja menjadi pelopor kenaikan harga dasar game AAA ke angka 80 hingga 100 dolar per kopi.

Belum lagi nasib komunitas pemain di [arsip konsol & PC](/tag/pc-gaming) yang sudah menjadi rahasia umum selalu dianaktirikan. Rockstar punya kebiasaan lama merilis game mereka terlebih dahulu untuk konsol PlayStation dan Xbox, lalu membiarkan pemain PC gigit jari selama setahun atau dua tahun penuh sebelum akhirnya merilis versi komputer. Trik penundaan ini bukan semata urusan optimasi teknis, melainkan strategi bisnis cerdik agar gamer yang tidak sabar rela membeli game yang sama sebanyak dua kali.

Di atas kertas, GTA 6 hampir dipastikan bakal menjadi karya kolosal yang menetapkan standar baru dunia game terbuka. Kualitas grafis yang memukau, detail interaksi warga kota yang hidup, serta satir tajam khas Rockstar terhadap budaya konsumerisme Amerika Serikat akan kembali menjadi hidangan utama yang lezat.

Namun melihat gelagat para petinggi industri belakangan ini, kita patut menyiapkan mental dan saldo tabungan lebih tebal. Bos publisher boleh saja tidur nyenyak tanpa takut kaset gamenya dibajak di emperan toko, tapi bagi gamer yang setia menunggu selama belasan tahun, pertarungan sesungguhnya baru dimulai saat etalase pemesanan awal resmi dibuka.`
  },
  {
    title: "Ketika WhatsApp Menolak Membiarkan Orang Hidup Tenang Tanpa Aplikasinya",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["WhatsApp", "Meta", "Aplikasi Chat", "Privasi Digital", "Teknologi", "Komunikasi"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/whatsapp-events.png?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Tangkapan layar antarmuka fitur undangan kalender dan acara baru pada aplikasi WhatsApp",
    sourceUrl: "https://www.theverge.com/tech/1027412/whatsapp-events-invite-outside-app",
    excerpt: "WhatsApp meluncurkan fitur undangan acara yang bisa diakses oleh orang yang tidak menginstal aplikasinya. Terdengar solutif bagi panitia arisan, tapi ini bukti bahwa Meta pantang membiarkan siapa pun lepas dari orbit komunikasi mereka.",
    content: `Bagi sebagian orang yang sudah mencapai titik jenuh tertinggi dengan hiruk-pikuk percakapan digital, menghapus aplikasi WhatsApp dari smartphone adalah langkah pembebasan spiritual yang hakiki. Bayangkan betapa damainya hidup ketika Anda tidak lagi diteror oleh notifikasi grup kantor di hari Minggu malam, terbebas dari rantai pesan motivasi bergambar bunga dari kerabat jauh, dan lepas dari desakan iuran dadakan panitia reuni sekolah dasar. Anda merasa telah berhasil melarikan diri ke sebuah pulau tenang bernama kedaulatan waktu pribadi.

Namun jika Anda berpikir Mark Zuckerberg dan bala tentaranya di Menlo Park akan membiarkan Anda hidup damai begitu saja di luar radar mereka, Anda jelas terlalu meremehkan kegigihan Meta. Mereka punya seribu satu cara untuk memastikan bahwa selama Anda masih bernapas dan membutuhkan interaksi sosial dengan sesama manusia, Anda akan selalu ditarik kembali ke dalam gravitasi produk mereka.

Bukti teranyar dari ambisi tersebut baru saja meluncur ke permukaan. Sebagaimana dicatat dalam laporan The Verge pekan ini, WhatsApp sedang menggulirkan pembaruan fitur acara (*events*) yang memungkinkan pengguna mengundang orang lain, bahkan jika orang yang diundang tersebut sama sekali tidak memiliki atau tidak menginstal aplikasi WhatsApp di perangkat mereka.

Mekanismenya dirancang sangat mulus dan tanpa hambatan teknis. Ketika seorang pengguna membuat undangan acara di dalam sebuah grup WhatsApp—misalnya pesta ulang tahun, syukuran rumah baru, atau sekadar kumpul akhir pekan—sistem akan menghasilkan sebuah tautan web khusus. Tautan tersebut bisa disalin lalu dikirimkan via SMS, email, atau aplikasi obrolan lain kepada mereka yang menolak memakai WhatsApp. Si penerima cukup mengetuk tautan tersebut untuk membukanya di browser ponsel atau laptop, melihat detail lokasi serta waktu acara, lalu memberikan konfirmasi kehadiran tanpa perlu mendaftarkan nomor telepon mereka ke dalam aplikasi.

![Antarmuka fitur undangan kalender dan acara baru pada aplikasi WhatsApp](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/whatsapp-events.png?quality=90&strip=all&crop=0,0,100,100)

Bagi masyarakat awam dan panitia acara yang kerap pusing mendata daftar tamu, pembaruan ini barangkali disambut sebagai solusi praktis yang mempermudah hidup. Namun bila Anda meneliti manuver ini lewat kacamata keamanan sistem di [kanal Teknologi](/category/tech), fitur ini pada hakikatnya adalah taktik kuda troya (*Trojan horse*) klasik yang sudah teruji di Silicon Valley.

Selama bertahun-tahun, alasan paling ampuh bagi seseorang untuk menolak dilibatkan dalam kepanitiaan atau acara sosial tertentu adalah kalimat keramat: "Maaf, saya tidak pakai WhatsApp." Kalimat tersebut adalah benteng pertahanan terakhir yang membuat orang lain segan untuk merepotkan Anda. Dengan menyediakan halaman web RSVP yang ringan dan bisa diakses siapa saja, WhatsApp secara efektif menghancurkan benteng alasan tersebut. Sekarang, teman kantor atau koordinator arisan keluarga Anda bisa dengan enteng membalas bahwa Anda tinggal mengeklik tautan webnya saja tanpa perlu mengunduh aplikasi apa pun.

Di balik kemudahan akses via browser tersebut, ada pula agenda pengumpulan data yang patut dicermati. Ketika Anda membuka halaman web undangan milik Meta, browser Anda akan berinteraksi langsung dengan server mereka, membawa serta jejak digital seperti alamat IP, jenis perangkat (*user-agent*), hingga kuki penelusuran. Perlahan tapi pasti, profil digital Anda yang sempat terputus saat menghapus aplikasi mulai kembali dijahit dan dihubungkan ke jejaring kontak teman-teman Anda.

Dari sudut pandang strategi bisnis, langkah ini adalah cara cerdik Meta untuk memperluas jangkauan tanpa harus memaksa orang mengunduh berkas instalasi puluhan megabita di awal. Mereka membangun jembatan peramban yang ramah, membiasakan Anda menerima informasi dari ekosistem mereka, hingga suatu saat nanti Anda merasa bahwa menolak menginstal aplikasi tersebut sudah tidak ada gunanya lagi.

Sebagaimana kerap dibahas dalam catatan [kolom Elang Elano](/author/elang-elano), kenyamanan digital modern hampir selalu menuntut tumbal berupa hilangnya batas ruang privat. Kita mungkin bisa menghapus ikon aplikasinya dari layar beranda ponsel, tetapi di tengah masyarakat yang sudah telanjur bergantung total pada satu ekosistem percakapan, pintu keluar dari cengkeraman Meta ternyata selalu punya kunci cadangan yang dipegang oleh orang-orang di sekitar kita.`
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
