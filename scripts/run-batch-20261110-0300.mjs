import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Apple Patok Tarif AI Delapan Ratus Ribu di Logic Pro Saat Janji Gratisan Menguap",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Apple", "Apple Intelligence", "Elang Elano", "Gaya Hidup Digital", "Kecerdasan Buatan", "Logic Pro", "Software Musik"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/logicpro.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Tampilan antarmuka Logic Pro di layar Mac dengan pemberitahuan paket pembelian Intelligence Usage Packs",
    sourceUrl: "https://www.theverge.com/tech/1030084/apple-intelligence-usage-packs-ai-features-creator-studio-logic-pro",
    excerpt: "Apple diam-diam mulai memungut biaya 49,99 dolar AS atau sekitar delapan ratus ribu rupiah lewat Intelligence Usage Packs di aplikasi Logic Pro. Janji manis pemrosesan AI lokal di chip M-Series akhirnya berujung tagihan kuota awan OpenAI dan Google Gemini.",
    content: `Beli laptop Apple rasanya seperti membeli tiket masuk ke kasta sosial yang serba eksklusif. Di kafe-kafe hipster kota besar, logo apel menyala di punggung layar selalu jadi tameng gengsi paling ampuh saat membuka obrolan soal produktivitas digital. Kita rela merogoh tabungan belasan hingga puluhan juta rupiah demi chip silikon M-Series yang dipromosikan sangat bertenaga, hemat daya, dan sanggup melibas tugas-tugas kreatif tanpa perlu bantuan server luar. Di panggung peluncuran resminya, para petinggi Cupertino berulang kali meyakinkan pengguna bahwa era baru komputasi cerdas kini ada di genggaman tangan, privat, aman, dan tanpa biaya langganan siluman.

Namun fatamorgana ekosistem serba gratis itu mendadak buyar pekan ini. Sebagaimana dicatat dalam laporan The Verge, Apple diam-diam mulai memberlakukan tarif tambahan bertajuk Intelligence Usage Packs pada aplikasi produksi audio andalan mereka, Logic Pro. Fitur anyar yang pertama kali diendus oleh situs pemerhati gadget 9to5Mac ini mematok harga 49,99 dolar AS atau setara delapan ratus ribu rupiah sekali beli jika pengguna ingin terus menggunakan asisten kecerdasan buatan di dalam proyek musik mereka. Asisten cerdas tersebut selama ini digembar-gemborkan bisa membantu produser membuat lagu dari nol, menata vokal hanya lewat satu perintah teks, hingga merapikan aransemen yang rumit. Kuota pemakaian ini ternyata memiliki batas ketat karena proses komputasinya tidak benar-benar dikerjakan oleh chip lokal di laptop Anda, melainkan dilempar ke server awan milik OpenAI dan Google Gemini.

Langkah Apple menyuntikkan gerbang tol berbayar ini adalah lelucon yang getir bagi komunitas kreator konten. Selama bertahun-tahun, Apple menjual narasi bahwa harga perangkat keras mereka yang selangit adalah investasi jangka panjang demi pengalaman peranti lunak yang mulus tanpa gangguan monetisasi receh. Pengguna profesional sudah membayar mahal lisensi Logic Pro seharga ratusan dolar, belum termasuk modal membeli komputer Mac berkapasitas memori besar agar sanggup menampung model kecerdasan buatan. Nyatanya, begitu fitur berbasis teks dan prompt mulai aktif, Apple justru bertingkah layaknya pemilik warnet lawas yang langsung menyodorkan struk billing tambahan saat durasi sewa habis. Kontradiksi ini semakin konyol jika mengingat aturan main paket tersebut: sisa kuota yang tidak terpakai akan hangus dalam dua belas bulan, dan fitur berbagi keluarga sengaja dimatikan agar setiap orang diwajibkan membeli paketnya masing-masing.

![Tampilan antarmuka Logic Pro di layar Mac dengan pemberitahuan paket pembelian Intelligence Usage Packs](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/logicpro.jpg?quality=90&strip=all&crop=0,0,100,100)

Bagi musisi kamar tidur atau editor audio lepasan di tanah air yang hidup dari proyek pesanan berbiaya pas-pasan, tarikan biaya delapan ratus ribu rupiah per paket adalah beban finansial nyata yang bikin pening kepala. Di tengah krisis ekonomi dan sepinya tawaran manggung, para pekerja kreatif kini dituntut membayar jatah token awan hanya untuk sekadar meminta saran penyelarasan trek vokal. Ironi komersialisasi ini mengingatkan kita pada [ambisi Apple yang memaksakan Siri jadi asisten serbabisa](/apple-ngotot-bikin-siri-jadi-agen-ai-saat-paham-perintah-saja) yang pada praktiknya lebih sering membuat kesal pengguna ketimbang memberikan solusi konkret. Fenomena serupa juga terlihat saat [korporasi besar gemar mengklaim kecerdasan buatan demi memanjakan seniman](/disney-gandeng-adobe-bikin-alat-ai-mandiri-berdalih-memanjakan), padahal ujung-ujungnya hanya menjadi pintu masuk untuk memeras dompet para pekerja seni lewat model sewa berulang.

Ke depan, paket penggunaan berbayar ini rencananya bakal merembet ke aplikasi produksi video Final Cut Pro, Pixelmator Pro, hingga paket perkantoran Pages dan Keynote. Pengguna Mac tampaknya harus mulai membiasakan diri melihat jendela peringatan pulsa habis di tengah-tengah proses merender karya. Kalau untuk mengetik dokumen atau menyusun ketukan drum saja kita harus rutin menyetor upeti ratusan ribu rupiah ke markas Cupertino, mungkin sudah saatnya kita kembali mengandalkan keahlian kuping sendiri ketimbang menggantungkan nasib kreatif pada bot awan yang doyan nagih kasbon.`
  },
  {
    title: "Tripwire Depak 36 Karyawan Seminggu Setelah Pamer Ekspansi Divisi Penerbitan",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Industri Game", "Killing Floor 3", "Maneater", "PC Gaming", "PHK Developer", "Tripwire Interactive"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/u3pB62ZFdhyJToq4ytTGJH-1920-80.jpg",
    imageAlt: "Ilustrasi suasana laga horor Killing Floor buatan Tripwire Interactive yang baru saja memangkas puluhan staf pengembang",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/a-week-after-expanding-its-publishing-division-killing-floor-studio-tripwire-interactive-lays-off-36-people/",
    excerpt: "Hanya berselang sepekan setelah memamerkan perluasan divisi penerbitan Tripwire Presents, studio Tripwire Interactive mendadak memecat 36 pengembang dan staf internal. Dalih efisiensi organisasi kembali dipakai bos industri untuk menutupi lesunya performa Killing Floor 3.",
    content: `Bagi para penikmat game PC di tanah air, akhir pekan biasanya dihabiskan dengan berburu diskon musiman di etalase Steam atau begadang mabar bareng kawan tongkrongan demi menuntaskan misi coop yang menegangkan. Kita sering membayangkan bekerja di studio video game adalah profesi idaman paling menyenangkan di muka bumi: dibayar untuk merancang monster menyeramkan, memprogram efek ledakan grafis, dan bersulang saat karya buatan sendiri dipuji ribuan pemain. Namun di balik gemerlap siaran trailer dan riuh tepuk tangan pameran industri, realitas dapur studio game modern saat ini justru lebih mirip wahana rumah hantu yang dipenuhi ketidakpastian kerja dan surat pemutusan hubungan kerja yang datang tiba-tiba tanpa aba-aba.

Kabar kelam pemangkasan tenaga kerja kembali mengguncang industri game pekan ini. Sebagaimana dicatat dalam laporan PC Gamer, studio pengembang game ternama Tripwire Interactive resmi mendepak 36 orang karyawannya sekaligus. Studio yang terkenal lewat waralaba pembantaian zombi Killing Floor dan game aksi hiu Maneater ini mengumumkan pemangkasan tersebut melalui pernyataan singkat di jejaring profesional LinkedIn, menyebut keputusan pahit itu sebagai langkah yang sangat diperlukan bagi organisasi. Ironi yang paling menampar akal sehat adalah fakta bahwa pemecatan massal ini terjadi kurang dari seminggu setelah jajaran petinggi Tripwire menggelar jumpa pers pamer ekspansi, di mana mereka mengumumkan perluasan divisi penerbitan Tripwire Presents untuk mendanai pengembang independen berskala kecil. Menurut pengakuan sumber internal studio yang berbicara kepada media, gelombang PHK ini menyapu hampir separuh kekuatan tim pengembang, menyisakan hanya sekitar 40 hingga 50 karyawan yang bertahan di kantor.

Alasan korporasi di balik pemecatan ini sangat mudah ditebak bagi siapa pun yang mengikuti rekam jejak finansial mereka. Sukses besar Maneater pada tahun 2020 lalu rupanya gagal diulangi oleh proyek-proyek terbaru Tripwire. Peluncuran Killing Floor 3 pada tahun 2025 kemarin justru terperosok dalam ulasan pemain yang terbelah dan lesu di platform Steam, di mana jumlah pemain aktif harian mereka anjlok drastis jika dibandingkan dengan masa kejayaan Killing Floor 2 satu dekade silam. Alih-alih mengevaluasi kesalahan keputusan manajemen puncak yang keliru membaca selera komunitas dan terlalu bernafsu menggelontorkan modal ke divisi penerbitan, para bos studio justru memilih mengorbankan para pekerja kreatif di lini bawah. Tiga puluh enam programmer, artis 3D, dan staf pendukung dipaksa angkat kaki dari meja kerja mereka demi menyelamatkan neraca keuangan para pemegang saham, sementara manajemen tetap santai menjanjikan pengembangan sekuel Maneater 2 kepada publik.

![Ilustrasi suasana laga horor Killing Floor buatan Tripwire Interactive yang baru saja memangkas puluhan staf pengembang](https://cdn.mos.cms.futurecdn.net/u3pB62ZFdhyJToq4ytTGJH-1920-80.jpg)

Bagi komunitas gamer kasual dan calon pengembang game lokal di Indonesia, sandiwara korporasi semacam ini sudah sangat menjemukan untuk disaksikan. Tragedi di markas Tripwire ini semakin menegaskan bahwa [kebiasaan buruk petinggi studio yang doyan mendepak developer berpengalaman](/skyrim-legendaris-berkat-orang-lama-saat-bos-game-hobi-depak) telah menjadi penyakit kronis industri modern. Setiap kali ada proyek besar yang lesu di pasaran atau [janji manis perilisan game yang berujung kekecewaan berkepanjangan](/warhammer-blood-bowl-kena-tunda-ke-2027-saat-gamer-sudah-lelah), para pekerja di balik layar selalu menjadi pihak pertama yang dikorbankan. Para eksekutif yang mengenakan jas rapi di ruang rapat tidak pernah ikut kehilangan gaji atau tunjangan kesehatan mereka saat strategi pemasaran mereka terbukti boncos di hadapan gamer.

Manajemen Tripwire mungkin merasa telah bertindak bijak dengan mengamankan laba melalui efisiensi brutal atas nama kelangsungan bisnis. Namun di mata para gamer yang menghabiskan ribuan jam di server Killing Floor, sebuah game horor tidak akan pernah terasa menakutkan jika dibandingkan dengan tabiat petinggi korporasi yang begitu dingin membuang pencipta dunianya sendiri ke jalanan. Selamat berjuang bagi 36 pekerja yang terdepak, semoga kalian segera menemukan rumah baru yang tahu cara menghargai keringat manusia lebih dari sekadar baris beban biaya di buku akuntansi.`
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
      markAsSeen(art.sourceUrl.trim());
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi 03:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261110-0300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
