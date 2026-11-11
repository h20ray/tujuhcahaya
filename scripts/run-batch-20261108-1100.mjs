import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Sendi Jempol Mulai Mogok Kerja Akibat Dipaksa Push Rank Tanpa Ampun",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Kesehatan Digital", "Smartphone", "Gamer Indonesia", "Mobile Gaming", "Gadget", "Hardware"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2021/11/09/pexels-jeshootscom-442576.jpg",
    imageAlt: "Ilustrasi tangan gamer yang mencengkeram controller saat bermain game hingga mengalami ketegangan otot",
    sourceUrl: "https://www.antaranews.com/berita/5839379/mengenal-istilah-gamers-thumb-yang-sering-muncul-saat-main-game",
    excerpt: "Rasa ngilu dan kaku di pangkal jempol setelah berjam-jam push rank kerap dianggap sepele sebagai pegal biasa. Padahal, selubung tendon yang meradang akibat gerakan berulang adalah sinyal tegas bahwa tubuh manusia bukan mesin arcade yang bisa digeber tanpa henti.",
    content: `Bagi siapa saja yang terbiasa menghabiskan malam di warung kopi sembari menatap layar smartphone dengan posisi kepala tertunduk enam puluh derajat, sensasi pegal linu barangkali sudah dianggap sebagai ongkos wajar pergaulan modern. Kita sudah sangat terbiasa mengabaikan leher yang berderit kaku atau telapak tangan yang kebas setelah lima jam berturut-turut mencoba menaikkan peringkat akun game kompetitif. 

Biasanya, respons kilat kita ketika jari mulai kesemutan sangat seragam: membunyikan sendi jari sampai terdengar bunyi gemeretak keras, mengibas-ngibaskan pergelangan tangan dua atau tiga kali, lalu kembali menatap layar sembari memaki rekan satu tim yang bermain ceroboh. Kita selalu berasumsi bahwa tubuh manusia punya kemampuan regenerasi seajaib karakter fantasi yang cukup meminum ramuan kesehatan untuk kembali bugar.

Namun ketika suatu pagi Anda terbangun dan mendapati pangkal ibu jari mendadak terkunci, ngilu tak tertahankan saat hendak memutar kunci pintu kamar kosan, atau mendadak berdenyut hebat hanya karena mencoba membuka tutup toples kopi, ilusi kebal itu langsung runtuh seketika. 

![Ilustrasi tangan gamer yang mencengkeram controller saat bermain game hingga mengalami ketegangan otot](https://img.antaranews.com/cache/800x533/2021/11/09/pexels-jeshootscom-442576.jpg)

Keresahan fisik ini nyatanya bukan sekadar keluhan manja generasi layar sentuh. Sebagaimana dicatat dalam laporan Antara Tekno akhir pekan ini, fenomena gangguan pada sendi jempol pemain game atau yang akrab dijuluki gamer's thumb kian marak menjangkiti anak-anak muda. Secara medis, kondisi nyeri menusuk di pangkal ibu jari tersebut merujuk pada de Quervain's tenosynovitis, yakni peradangan dan penebalan selubung tendon yang bertugas mengendalikan pergerakan jempol menuju pergelangan tangan.

Data riset dari American Society for Surgery of the Hand (ASSH) bahkan menegaskan bahwa gerakan mikroskopis yang diulang ribuan kali dalam tempo singkat—seperti menggeser analog virtual di layar sentuh ponsel atau memencet tombol kombo controller secara membabi-buta—menimbulkan gesekan berlebih yang membuat lorong tendon membengkak. Menariknya, laporan medis dalam jurnal Archives of Physical Medicine and Rehabilitation mencatat bahwa kasus radang selubung tendon ini sejatinya telah terdokumentasi sejak era mesin arkade tahun 1980-an, membuktikan bahwa ketamakan manusia mengejar skor tinggi selalu menuntut tumbal fisik yang sama.

Kondisi ini memperlihatkan kontradiksi menggelikan di tengah gaya hidup digital hari ini. Industri perangkat keras rajin memamerkan refresh rate layar 144Hz yang luar biasa licin, konektivitas sinyal super cepat, dan sensor tombol controller bertaraf turnamen e-sport. Namun di balik kecanggihan silikon tersebut, tangan manusia yang mengoperasikannya tetaplah susunan daging, urat, dan tulang purba yang tidak pernah dirancang oleh evolusi biologis untuk menggeser kaca licin selama delapan jam sehari.

Beban ergonomis ini melengkapi derita fisik pengguna teknologi modern lainnya, mengulang keluhan serupa saat [beban fisik serupa dialami ketika mata dihajar kedipan layar](/kutukan-kedipan-layar-oled-mengapa-peredupan-pwm-di-smartphone) berkualitas rendah, atau derita pengguna laptop saat [bodi mesin yang panas membakar paha](/ketika-kipas-laptop-mendesing-bak-pesawat-tempur-dan-bodi-panas) saat bekerja lembur. Desainer antarmuka aplikasi dan pengembang game sengaja merancang mekanisme permainan agar jempol kita tidak pernah berhenti bergerak barang sedetik pun lewat lingkaran gameplay yang memicu dopamin instan.

Bagi anak muda di kota-kota besar yang menjadikan game seluler sebagai sarana hiburan paling murah meriah selepas lelah bekerja di kantor, istirahat sering kali terasa seperti kemewahan yang mustahil. Menghadapi jempol yang meradang dengan koyo hangat atau minyak angin murahan hanyalah upaya menambal perahu bocor. Tubuh kita sesungguhnya sedang mengirimkan sinyal peringatan darurat yang amat nyata sebelum peradangan kronis tersebut menuntut tindakan operasi bedah yang mahal.

Memaksakan jempol yang sudah gemetar demi mengejar bintang virtual di papan peringkat pada akhirnya adalah bentuk kesia-siaan yang hakiki. Algoritma game tidak akan pernah peduli apakah urat tangan Anda terkilir atau kaku selamanya, sebab bagi penerbit aplikasi, Anda hanyalah sepasang ibu jari yang menyumbang statistik waktu keterlibatan pengguna harian.`
  },
  {
    title: "Ketika Dokumenter BioWare Berubah Jadi Surat Duka Cita Akibat Ulah EA",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "BioWare", "Electronic Arts", "Mass Effect", "Gamer Indonesia", "Industri Game", "PC Gaming", "Dragon Age"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/uSjqHDZA7WMXxsKULPqTL3-1920-80.jpg",
    imageAlt: "Logo dan arsip dokumentasi studio game legendaris BioWare yang resmi ditutup",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/a-bioware-documentary-was-already-in-the-works-when-the-shutdown-was-announced-with-the-studios-recent-closure-the-film-is-now-a-profound-valediction/",
    excerpt: "Film dokumenter Massive Effect: The BioWare Story sudah syuting dua tahun untuk merayakan tiga dekade warisan studio pencipta Mass Effect. Namun keputusan Electronic Arts menutup studio legendaris tersebut mendadak mengubah perayaan sejarah menjadi rekaman nisan yang getir.",
    content: `Bagi komunitas gamer yang tumbuh besar bersama komputer tabung dan rental PlayStation di dekade 2000-an, nama BioWare bukan sekadar logo perusahaan yang tercetak di sampul cakram DVD. Bagi jutaan pemain di seantero bumi, nama itu adalah sinonim dari petualangan fiksi ilmiah yang megah, percakapan antarkarakter yang menyentuh sanubari, serta deretan dilema moral berbobot yang sanggup membuat kita termenung di depan monitor hingga fajar menyingsing. 

Kita mengingat jelas bagaimana keputusan sulit menyelamatkan galaksi di *Mass Effect*, atau ketegangan menyusuri intrik politik takhta di *Dragon Age*, berhasil menghadirkan standar emas penulisan cerita yang belum pernah dicapai oleh media hiburan mana pun sebelumnya. Karakter-karakter seperti Garrus Vakarian atau Morrigan bukan sekadar kumpulan piksel tiga dimensi, melainkan kawan seperjalanan yang terasa hidup dan bernapas.

Namun ketika sebuah studio dengan integritas naratif tinggi jatuh ke dalam cengkeraman korporasi raksasa yang hanya bernafsu mengejar grafik pertumbuhan kuartalan di bursa saham, takdir tragis biasanya tinggal menunggu waktu.

![Logo dan arsip dokumentasi studio game legendaris BioWare yang resmi ditutup](https://cdn.mos.cms.futurecdn.net/uSjqHDZA7WMXxsKULPqTL3-1920-80.jpg)

Tragedi getir tersebut kini terpampang telanjang di hadapan publik lewat sebuah ironi yang memilukan. Sebagaimana dicatat dalam laporan PC Gamer dan media hiburan Deadline pekan ini, sebuah proyek film dokumenter bertajuk *Massive Effect: The BioWare Story* sejatinya telah memasuki tahun kedua masa produksi. Proyek film garapan sineas Kanada, Akash Sherman, tersebut awalnya dirancang sebagai perayaan akbar tiga dekade dedikasi studio dalam memajukan industri game dunia.

Ironisnya, di tengah proses wawancara mendalam bersama para perintis studio, pemilik konglomerasi Electronic Arts (EA) secara sepihak memutuskan untuk membubarkan studio legendaris tersebut. Keputusan dingin para eksekutif sontak membalikkan arah film secara dramatis. Proyek yang tadinya diniatkan sebagai panggung kehormatan dan pesta nostalgia mendadak bertransformasi menjadi surat duka cita audio visual serta rekaman nisan bagi studio kesayangan para gamer.

Sutradara Akash Sherman sendiri mengakui bahwa penutupan mendadak tersebut meninggalkan duka yang teramat mendalam bagi seluruh tim produksi film. Wawancara eksklusif bersama para dokter pendiri awal seperti Ray Muzyka dan Greg Zeschuk, perancang narasi ulung Drew Karpyshyn, hingga Jennifer Hale sang pengisi suara Commander Shepard, kini tidak lagi terasa seperti reuni hangat masa kejayaan. Setiap untaian kalimat dan kenangan yang mereka tuturkan di depan kamera kini bergaung bak rekaman wasiat dari sebuah era keemasan yang telah dirampas secara paksa.

Bagi para penikmat game di Indonesia yang sering kali menyisihkan uang jajan sekolah demi menyewa bilik warnet semalaman suntuk, kematian BioWare terasa seperti kehilangan kawan lama. Pola predator korporasi ini sesungguhnya bukan barang baru. EA sudah berulang kali memperlakukan studio berbakat bak barang rongsokan sekali pakai—mulai dari mematikan Westwood pengembang Command & Conquer, Visceral kreator Dead Space, hingga Pandemic Studios. 

Pola manajemen dingin semacam ini memperlihatkan krisis kemanusiaan yang akut di balik panggung industri modern. Kebijakan brutal ini terasa sangat akrab di mata pengamat industri, mengulang peristiwa mengenaskan saat [studio game merumahkan puluhan pekerja lalu memanggilnya kembali cuma demi dipecat lagi](/ketika-studio-game-star-wars-memanggil-balik-tim-yang-dirumahkan) beberapa pekan kemudian, atau bagaimana penerbit modern tega meninggalkan akar naratif berbobot dari [game RPG klasik era kejayaan studio yang pernah menghapus Windows](/ketika-game-dd-yang-dulu-suka-menghapus-windows-tiba-tiba-bangkit) demi mengejar tren monetisasi live-service yang hampa.

Melihat studio pembuat mahakarya narasi berakhir menjadi arsip film duka cita pada akhirnya memberikan pelajaran berharga bagi siapa saja yang mencintai video game. Korporasi raksasa mungkin punya kekuasaan hukum untuk menghapus plang nama studio, mematikan server, dan mendepak ratusan pengembang bertalenta ke jalanan. Namun mereka tidak akan pernah bisa membeli jiwa dari sebuah cerita yang telah telanjur hidup abadi di sanubari para pemainnya.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 11:00 WIB)");
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261108-1100.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Run Error:", err);
    process.exit(1);
  });
}
