import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Nvidia Loloskan Penjualan Chip AI Canggih ke Kantor Kosong Tanpa Meja",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["AI", "Departemen Perdagangan AS", "Elang Elano", "Geopolitik", "Hardware", "Nvidia", "Semikonduktor"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/06/STK083_NVIDIA_2.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
    imageAlt: "Fasilitas manufaktur dan semikonduktor chip kecerdasan buatan Nvidia berkecepatan tinggi",
    sourceUrl: "https://www.theverge.com/ai-artificial-intelligence/1029483/nvidia-ai-chips-china-blacklist-government",
    excerpt: "Departemen Perdagangan AS dan tim kepatuhan Nvidia meloloskan izin ekspor chip AI super canggih H200 ke sebuah kantor di Tiongkok yang ternyata hanyalah ruangan kosong berdebu dengan kabel listrik menjuntai. Ironi geopolitik semikonduktor ini membuktikan betapa rapuhnya pengawasan ekspor teknologi bernilai ratusan triliun rupiah.",
    content: `Bagi siapa saja yang pernah mencoba membeli kartu grafis bekas di pusat pertokoan Mangga Dua atau merakit komputer di kamar kos, Anda tentu akrab dengan ritual pemeriksaan yang luar biasa rewel. Penjual akan meneliti segel garansi hingga ke celah sekrup terkecil, mengecek nomor seri dengan kaca pembesar, dan memastikan kita tidak mencoba mengklaim garansi palsu. Di luar negeri, pemerintah Amerika Serikat bahkan bersumpah di depan podium parlemen bahwa mereka telah membangun benteng regulasi semikonduktor paling rapat di muka bumi demi mencegah teknologi kecerdasan buatan tercanggih jatuh ke tangan entitas terlarang.

Namun, di panggung perdagangan internasional bernilai ribuan triliun rupiah, ketelitian birokrasi tersebut mendadak menguap seperti embun pagi di atas heatpipe GPU yang mendidih. 

Sebagaimana diungkap dalam laporan investigasi The New York Times yang dilansir The Verge pekan ini, Departemen Perdagangan AS bersama tim pengawasan Nvidia resmi memberikan izin penjualan chip akselerator kecerdasan buatan kelas kakap, Nvidia H200, kepada sebuah perusahaan bernama New Matrix. Izin ini diberikan dengan penuh percaya diri setelah nama perusahaan tersebut dicantumkan dalam daftar entitas yang lolos uji tuntas. Namun ketika wartawan investigasi mendatangi alamat resmi kantor New Matrix yang tertera di dokumen legal, kenyataan di lapangan sungguh di luar nalar sehat: ruangan tersebut hanyalah cangkang kosong berdebu dengan dinding semen abu-abu dan kabel-kabel listrik yang menjuntai lemas dari langit-langit tanpa lampu, tanpa meja kerja, apalagi tumpukan rak server.

![Fasilitas manufaktur dan semikonduktor chip kecerdasan buatan Nvidia berkecepatan tinggi](https://platform.theverge.com/wp-content/uploads/sites/2/2025/06/STK083_NVIDIA_2.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200)

Temuan ini tentu menjadi tamparan telak bagi retorika geopolitik Washington yang selama bertahun-tahun gembar-gembor soal keamanan siber dan embargo semikonduktor. Para petinggi birokrasi di seberang samudra tampak begitu sibuk merancang tumpukan berkas regulasi ekspor yang rumit, tetapi mereka bahkan lupa melakukan hal paling mendasar yang biasa dilakukan anak magang di perusahaan leasing lokal: menyuruh staf lapangan memotret kantor calon debitur sebelum mencairkan pinjaman. Bagaimana mungkin sebuah kantor hantu yang bahkan tidak memiliki stopkontak aktif bisa lolos dari sistem audit korporasi bernilai tiga triliun dolar?

Jawabannya barangkali terletak pada derasnya arus uang dan euforia liar teknologi modern. Di era sekarang, apa pun yang ditempeli label kecerdasan buatan langsung dianggap tambang emas yang tak boleh disia-siakan. Sikap kompromistis semacam ini mengulang kekonyolan di lembah Silicon saat [OpenAI dihargai belasan kuadriliun rupiah tapi chatbot masih sering halu](/ketika-openai-dihargai-belasan-kuadriliun-rupiah-sementara) dan menguras pasokan listrik pembangkit demi membalas pertanyaan remeh para pengguna internet. Ketika angka di lembar valuasi saham menjanjikan bonus tahunan selangit bagi jajaran direksi, prosedur verifikasi identitas korporasi kerap kali hanya diperlakukan sebagai formalitas centang hijau di lembar Excel.

Bagi masyarakat di negara berkembang seperti Indonesia, tontonan geopolitik ini terasa begitu menggelikan sekaligus getir. Di tanah air, para perakit komputer, teknisi warnet, dan mahasiswa teknik informatika harus merogoh kocek dalam-dalam hanya demi membeli kartu grafis kelas menengah akibat lonjakan harga semikonduktor global yang tak kunjung waras. Kita juga baru saja disadarkan betapa rapuhnya tulang punggung digital dunia saat [internet sedunia bisa mendadak lumpuh karena senggolan jangkar](/ketika-internet-sedunia-bisa-mendadak-lumpuh-karena-senggolan) kapal di dasar laut. Namun di saat yang sama, entitas bayangan di kawasan Asia Timur bisa dengan santai memborong tumpukan silikon pemroses data kelas dewa tanpa perlu menyalakan sebiji pun lampu ruangan di kantor terdaftar mereka.

Kisah New Matrix membuktikan bahwa di balik jargon pertahanan nasional dan keamanan data global, logika perdagangan bebas korporasi multinasional selalu menemukan jalan tikus untuk menyalurkan barang dagangannya. Selama neraca keuangan Nvidia terus mencatatkan rekor laba bersih triwulanan dan para investor di Wall Street tersenyum puas, sehelai kabel yang menggantung dari plafon ruko kosong di Tiongkok tampaknya sudah cukup dianggap sebagai infrastruktur riset komputasi modern.

Kalau ruko kosong tak bertuan saja bisa lolos audit pembelian chip termahal di dunia, barangkali teknisi komputer lokal di Glodok cuma kurang satu keahlian: mencetak stempel formal berbahasa asing dan membiarkan sarang laba-laba menggantung di sudut ruangan.`
  },
  {
    title: "Ketika GOG Galaxy Akhirnya Buka Pintu Buat Gamer Linux yang Alergi DRM Ketat",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "CD Projekt", "DRM-Free", "Gamer Indonesia", "GOG Galaxy", "Industri Game", "Linux Gaming", "PC Gaming"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/eyYchBd274FJCGzgDdyxyT-2560-80.jpg",
    imageAlt: "Tampilan antarmuka peluncur game GOG Galaxy yang tengah dirombak untuk mendukung ekosistem Linux desktop",
    sourceUrl: "https://www.pcgamer.com/software/linux/linux-on-the-desktop-marches-on-as-gog-announces-its-galaxy-client-is-getting-a-revamp-headed-to-windows-macos-and-your-distro-of-choice/",
    excerpt: "Etalase game digital GOG resmi mengumumkan perombakan total klien desktop Galaxy yang akan mendukung ekosistem Linux secara native. Di tengah industri game yang gemar menyandera pembeli dengan rantai DRM dan launcher ganda yang menyiksa, komitmen ini menjadi kabar gembira bagi siapa saja yang merindukan kepemilikan game sejati.",
    content: `Bagi seorang gamer PC yang menghabiskan waktu berjam-jam di depan meja kerja, tidak ada momen yang lebih merusak suasana hati selain berniat bermain game santai demi melepas penat, tetapi justru disambut rentetan siksaan teknis yang tak masuk akal. Begitu tombol jalankan ditekan, komputer mendadak macet karena sistem operasi harus memanggil peluncur pihak ketiga yang lambat, disusul jendela masuk yang menuntut verifikasi dua langkah, dan diakhiri pesan eror bahwa sambungan ke server pusat terputus. Padahal, game yang hendak kita mainkan adalah petualangan seorang diri (*single-player*) yang sama sekali tidak membutuhkan kehadiran pemain lain di belahan bumi mana pun.

Rantai belenggu piranti lunak semacam itulah yang selama bertahun-tahun membuat gamer PC merasa seperti menumpang di rumah sendiri. 

Sebagaimana dicatat dalam laporan PC Gamer menyusul siaran perdana GOG Showcase pekan ini, etalase game digital milik CD Projekt, Good Old Games (GOG), akhirnya mengumumkan rencana perombakan besar-besaran untuk peluncur desktop andalan mereka, GOG Galaxy. Klien yang selama ini tertahan dalam fase uji coba versi 2.0 dan kerap dikeluhkan karena memakan memori komputer tersebut kini dirancang ulang agar jauh lebih ramping, gesit, dan yang paling penting: resmi mendarat secara native di sistem operasi Linux pada 2027 mendatang. Pengumuman ini menjadi angin segar yang telah dinantikan selama satu dekade oleh komunitas pengguna distro open source.

![Tampilan antarmuka peluncur game GOG Galaxy yang tengah dirombak untuk mendukung ekosistem Linux desktop](https://cdn.mos.cms.futurecdn.net/eyYchBd274FJCGzgDdyxyT-2560-80.jpg)

Langkah GOG ini terasa sangat bermakna karena membawa panji filosofi yang kian langka di industri hiburan modern: kebebasan dari perlindungan hak cipta digital (*DRM-free*). Di era ketika hampir semua penerbit raksasa memperlakukan konsumen layaknya tersangka pembajakan, GOG tetap setia membiarkan pemain mengunduh berkas instalasi mandiri yang bisa disimpan di flashdisk tanpa perlu koneksi internet untuk memverifikasi lisensi. Kejengkelan gamer terhadap belenggu perangkat lunak proprietary ini senada dengan kegelisahan kita saat menghadapi [tirani peluncur game ganda di PC](/tirani-peluncur-game-ganda-di-pc-ketika-membeli-di-steam-tetap) yang kerap membebani kartu grafis dan prosesor secara cuma-cuma.

Selama ini, para pengguna Linux dan pemilik konsol genggam seperti Steam Deck harus memeras keringat mengutak-atik lapisan kompatibilitas seperti Wine, Proton, atau mengandalkan aplikasi pihak ketiga semacam Heroic Games Launcher dan Lutris hanya untuk menikmati koleksi game GOG mereka. Kehadiran klien resmi yang terintegrasi langsung ke berbagai distro populer membuktikan bahwa ekosistem komputer alternatif kini bukan lagi mainan sampingan para peretas, melainkan kekuatan nyata yang tak bisa lagi diabaikan oleh para pengembang piranti lunak global.

Sikap ramah konsumen yang ditunjukkan GOG ini menjadi kontras yang sangat mencolok jika dibandingkan dengan kerakusan korporasi game konsol arus utama. Publik gamer tentu belum lupa betapa menyebalkannya fenomena saat [Nintendo pelit merilis game lawas di Switch Online](/ketika-nintendo-pelit-merilis-game-gba-di-switch-online-padahal) padahal para pemain setia sudah rajin menyetor uang langganan bulanan demi memainkan judul-judul klasik era sembilan puluhan. Korporasi raksasa lebih suka menyewakan nostalgia dengan sistem sewa berjangka, ketimbang memberi hak kepemilikan penuh kepada orang-orang yang telah membesarkan nama mereka.

Bagi gamer tanah air yang sehari-hari bertarung dengan kuota internet terbatas dan spesifikasi komputer seadanya, janji GOG Galaxy versi anyar ini menawarkan kepastian yang menyejukkan hati. Kita tidak perlu cemas permainan favorit kita mendadak lenyap dari pustaka digital hanya karena penerbit berselisih soal lisensi musik atau mematikan server otentikasi di markas mereka.

Pada akhirnya, membeli game dengan uang hasil jerih payah sendiri semestinya memberi kita hak untuk memainkannya kapan saja, di sistem operasi apa saja, tanpa perlu meminta izin ke server korporat di seberang benua. Jika GOG Galaxy kelak benar-benar berjalan mulus di distro Linux kesayangan, barangkali hari itu adalah saat yang tepat untuk menghapus instalasi sistem operasi komersial yang setiap pekan hobi memaksakan pembaruan otomatis tanpa permisi.`
  }
];

export async function runBatch() {
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
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261107-2300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
