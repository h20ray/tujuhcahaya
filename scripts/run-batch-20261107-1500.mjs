import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Path of Exile 2 Menjelang Rilis dan Bikin Game Berbujet Triliunan Ketar-ketir",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Path of Exile 2", "Grinding Gear Games", "Diablo 4", "ARPG", "Industri Game", "PC Gaming", "Gamer Indonesia"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/PhVjZbGy2wt3kcRcFUPNc7-1920-80.jpg",
    imageAlt: "Atmosfer pertarungan gelap dan eksplorasi kelas karakter baru di game RPG aksi Path of Exile 2",
    sourceUrl: "https://www.pcgamer.com/games/rpg/heres-whats-in-path-of-exile-2s-huge-1-0-release-coming-in-december/",
    excerpt: "Grinding Gear Games mengumumkan peluncuran penuh versi 1.0 Path of Exile 2 dengan kampanye utuh dan kelas baru Shadow. Di saat publisher raksasa sibuk memeras dompet pemain lewat battle pass dan ekspansi mahal, studio asal Selandia Baru ini membuktikan kualitas gameplay tetap pemenang sejati.",
    content: `Kalau Anda sering nongkrong di discord bareng kawan-kawan pencinta game aksi RPG, suasana akhir tahun biasanya selalu diwarnai obrolan getir soal dompet yang diperas habis-habisan. Kita hidup di masa ketika membeli sebuah kaset atau berkas digital game seharga satu juta rupiah sudah tidak lagi menjamin kita mendapatkan pengalaman bermain yang utuh. Masuk ke menu utama saja, layar monitor langsung dihujani tawaran tiket musiman (*battle pass*), skin kosmetik kuda berharga ratusan ribu rupiah, hingga pop-up promosi ekspansi berbayar yang membatasi akses konten cerita. Rasa lelah menghadapi keserakahan korporasi besar ini perlahan mematikan gairah bermain, menyisakan tanya apakah masih ada pengembang yang tulus membuat game demi kepuasan pemain, bukan sekadar memburu setoran laporan kuartalan para investor.

Jawaban atas kegelisahan menahun itu rupanya datang dari studio independen Grinding Gear Games yang berbasis di Selandia Baru. Sebagaimana dicatat dalam laporan PC Gamer pekan ini, pengembang kawakan tersebut resmi membeberkan rincian peluncuran penuh versi 1.0 untuk game aksi RPG andalan mereka, Path of Exile 2, yang dijadwalkan meluncur secara global pada bulan Desember mendatang. Tidak tanggung-tanggung, rilis akbar ini langsung memboyong kampanye cerita baru yang rampung secara penuh, pengenalan kelas karakter Shadow yang lincah dan mematikan, serta ratusan jenis bos monster unik yang dirancang dengan pola pertarungan reaktif tanpa perlu trik murahan menaikkan status musuh secara artifisial.

Melihat manuver Grinding Gear Games, para petinggi raksasa game global semestinya kebakaran jenggot. Selama beberapa tahun terakhir, studio raksasa seperti Blizzard di waralaba Diablo seakan memegang anggapan arogan bahwa gamer kasual akan selalu pasrah disodori model bisnis live-service yang hampa. Mereka merilis game dengan banderol harga selangit, memangkas fitur dasar demi dijual kembali lewat paket tambahan, lalu berdalih bahwa biaya produksi game modern memang menuntut monetisasi agresif. Sikap masa bodoh publisher terhadap keluhan komunitas ini mengingatkan kita pada [keserakahan publisher yang memagari game lawas di balik sistem sewa](/ketika-nintendo-pelit-merilis-game-gba-di-switch-online-padahal). Namun ketika Path of Exile 2 hadir menawarkan mekanisme pohon keahlian yang begitu dalam, grafis mutakhir, dan komitmen model gratis tanpa bayar untuk menang (*free-to-play non-pay-to-win*), dalih korporat tersebut seketika runtuh menjadi lelucon basi.

Di kalangan gamer warkop dan komunitas PC tanah air, antusiasme menyambut Path of Exile 2 bukan sekadar soal grafik yang memanjakan mata, melainkan rasa hormat terhadap waktu dan keringat pemain. Menghabiskan waktu ratusan jam meracik kombinasi permata keahlian (*skill gems*) dan menyusun strategi build karakter terasa sangat memuaskan ketika hasil jerih payah kita tidak mendadak di-nerf secara brutal atau dikunci di balik dinding transaksi mikro. Kegagalan memahami psikologi pemain inilah yang selama ini memicu [tragedi kutukan game live-service berongkos triliunan yang rontok](/tragedi-kutukan-live-service-mengapa-game-berbujet-triliunan) hanya dalam hitungan pekan setelah diluncurkan. Gamer modern sudah terlalu cerdas untuk bisa ditipu oleh kampanye pemasaran bombastis dan trailer sinematik jika jeroan gameplay dasarnya terasa hambar dan mengejar uang semata.

![Atmosfer pertarungan gelap dan eksplorasi kelas karakter baru di game RPG aksi Path of Exile 2](https://cdn.mos.cms.futurecdn.net/PhVjZbGy2wt3kcRcFUPNc7-1920-80.jpg)

Pembaruan versi 1.0 ini sekaligus menjadi bukti bahwa mendengarkan keluhan komunitas adalah investasi terbaik yang bisa dilakukan sebuah studio pengembang. Alih-alih memaksakan sistem pertarungan kaku yang mengharuskan pemain mengulang grinding membosankan, Grinding Gear Games merombak mekanik pergerakan dengan fitur berguling (*dodge roll*) tanpa jeda cooldown dan sistem animasi serangan yang responsif terhadap input mouse dan keyboard. Bagi gamer yang sehari-hari berkutat dengan monitor di kamar kos, fleksibilitas mekanik ini memberikan sensasi ketangkasan murni yang setara dengan game aksi kelas atas tanpa menuntut komputer berspesifikasi dewa.

Pertarungan industri game aksi RPG di pengujung tahun ini pada akhirnya mengirimkan pesan yang sangat gamblang kepada para eksekutif studio raksasa. Menjejali pemain dengan selebaran promosi diskon di menu utama dan menjual ekspansi mahal mungkin bisa menambal neraca keuangan sesaat, tetapi rasa cinta komunitas hanya bisa dibeli dengan dedikasi merawat kualitas gameplay. Jika sebuah studio kecil dari belahan selatan bumi bisa menyajikan petualangan kolosal yang menghormati martabat gamer, maka kepanikan para raksasa beranggaran triliunan rupiah di luar sana memang layak kita tonton sambil menyeruput kopi saset hangat di depan monitor.`
  },
  {
    title: "Ketika Factory Reset HP Bekas Ternyata Belum Tentu Bikin Data Pribadi Kita Lenyap",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Smartphone", "Privasi Digital", "Keamanan Siber", "Android", "iPhone", "Data Pribadi", "Sysadmin"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2025/10/05/kebijakan-blokir-imei-2639121.jpg",
    imageAlt: "Pengecekan fisik dan memori ponsel pintar bekas di konter tukar tambah HP",
    sourceUrl: "https://www.antaranews.com/berita/5835679/mau-jual-hp-bekas-ini-9-langkah-menghapus-data-pribadi",
    excerpt: "Menjual HP bekas ke konter pinggir jalan demi uang jajan atau ganti seri anyar sering dibayangi rasa aman palsu. Memencet tombol factory reset tanpa enkripsi menyeluruh dan pelepasan akun yang benar justru meninggalkan jejak privasi yang gampang diobok-obok sindikat digital.",
    content: `Bagi masyarakat perkotaan, etalase konter ponsel di ITC Roxy Mas atau lapak tukar tambah di pinggir jalan adalah penolong darurat paling praktis saat tanggal tua mencekik dompet atau saat mata mendadak silau melihat peluncuran smartphone seri teranyar. Cukup bawa kardus ponsel lama, tawar-menawar harga sebentar dengan abang penjaga konter, lalu sebelum unit diserahkan, kita dengan percaya diri membuka menu pengaturan dan memencet tombol keramat: "Kembalikan ke Setelan Pabrik". Dalam benak kebanyakan orang awam, begitu lingkaran proses restart berputar dan layar kembali menyapa dengan tulisan selamat datang bawaan toko, seluruh dosa masa lalu di dalam perangkat tersebut sudah musnah tanpa bekas.

Sayangnya, rasa tenang itu sering kali cuma ilusi semu yang sangat berbahaya. Sebagaimana dicatat dalam panduan keamanan Antara Tekno pekan ini, menjual ponsel atau smartphone bekas membutuhkan setidaknya sembilan langkah proteksi terstruktur, bukan sekadar memencet tombol reset secara tergesa-gesa. Para analis keamanan siber mengingatkan bahwa arsitektur memori kilat (*flash memory NAND*) yang tertanam di dalam ponsel pintar bekerja dengan logika penyimpanan yang jauh lebih rumit daripada sekadar menghapus folder foto atau riwayat pesan obrolan di aplikasi perpesanan.

Dalam realitas teknis sistem operasi modern, perintah factory reset konvensional sering kali hanya bertindak menghapus indeks atau penanda lokasi berkas di tabel partisi, sementara bit-bit data biner aslinya masih tertinggal utuh di sektor penyimpanan fisik hingga tertimpa oleh data baru. Celakanya, di pasar loak digital, unit smartphone bekas kerap dibeli secara borongan oleh sindikat gelap yang memang spesialis mengais sisa-sisa data digital. Menggunakan perangkat lunak pemulihan forensik yang bisa diunduh bebas di internet, mereka dapat dengan mudah membangkitkan kembali foto KTP, swafoto untuk verifikasi perbankan, riwayat slip gaji, hingga daftar kontak keluarga yang pernah tersimpan di perangkat tersebut. Keteledoran semacam ini adalah pintu masuk empuk bagi teror penagih pinjaman online ilegal dan pemerasan digital yang menyasar warga awam.

Bagi teknisi yang sehari-hari berkutat dengan keamanan server, kebiasaan memperlakukan memori ponsel secara serampangan ini memperlihatkan betapa rapuhnya pemahaman privasi masyarakat kita. Ancaman kebocoran semacam ini punya kemiripan pola dengan [kebocoran data privasi akibat cadangan pesan otomatis tanpa proteksi](/bahaya-cadangan-chat-cloud-tanpa-enkripsi-mandiri-mengapa-fitur). Orang mengira data mereka aman karena sudah tersinkronisasi rapi, padahal pintu belakangnya terbuka lebar tanpa enkripsi mandiri. Sebelum menjual perangkat bekas, langkah paling fundamental adalah memastikan enkripsi penyimpanan bawaan aktif secara penuh, melakukan pencadangan mandiri, lalu mencabut (*log out*) seluruh akun Google, Apple ID, dan akun m-banking secara manual dari menu manajemen perangkat. Jika perlu, timpa ruang kosong penyimpanan dengan merekam video asal berdurasi panjang agar sektor memori lama benar-benar tertimpa secara fisik (*data overwriting*).

![Pengecekan fisik dan memori ponsel pintar bekas di konter tukar tambah HP](https://img.antaranews.com/cache/800x533/2025/10/05/kebijakan-blokir-imei-2639121.jpg)

Kerapuhan data personal di level akar rumput ini kian ironis jika kita melihat bagaimana korporasi raksasa di panggung global sendiri kerap kedodoran mengamankan sistem mereka, persis seperti [ironi rapuhnya sistem saat perusahaan forensik siber ikut kecolongan](/ketika-perusahaan-forensik-pelacak-hacker-sedunia-malah-ikut). Jika institusi keamanan kelas kakap saja bisa kecolongan akibat keteledoran prosedur dasar, maka menaruh rasa percaya buta pada tombol reset bawaan pabrikan ponsel murah adalah perjudian yang terlalu mahal untuk dipertaruhkan. Di tengah lemahnya penegakan hukum pelindungan data pribadi di tanah air, benteng pertahanan paling kokoh selalu berada di ujung jari pemilik perangkat itu sendiri.

Uang hasil penjualan HP bekas di konter jalanan mungkin cuma cukup untuk membayar tagihan listrik atau mentraktir teman ngopi selama beberapa malam. Namun keteledoran membiarkan serpihan identitas pribadi tertinggal di dalam chip memori bisa membuat hidup Anda dan keluarga dihantui teror penipu selama bertahun-tahun ke depan. Sebelum melangkah keluar dari pintu konter dengan senyum semringah menggenggam uang tunai, pastikan ponsel lama Anda benar-benar telah menjadi bangkai digital yang bisu, bukan bom waktu yang siap meledak di tangan orang asing.`
  }
];

async function runBatch() {
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261107-1500.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
