import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Apple Ngotot Bikin Siri Jadi Agen AI Saat Paham Perintah Saja Masih Susah",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Apple", "Apple Intelligence", "Asisten Virtual", "Elang Elano", "Gaya Hidup Digital", "Kecerdasan Buatan", "Siri"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/07/Siri-AI-Being-invoked-3.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Animasi antarmuka Siri AI yang menyala pada layar ponsel pintar saat menerima perintah suara pengguna",
    sourceUrl: "https://www.theverge.com/ai-artificial-intelligence/1029552/apple-siri-ai-agentic",
    excerpt: "Apple dilaporkan mempercepat pengembangan Siri agar memiliki kemampuan agen AI mandiri demi mengejar ketertinggalan dari OpenAI dan Meta. Langkah tergesa-gesa ini mengundang tanda tanya besar ketika asisten suara bawaan iPhone tersebut sampai hari ini masih kerap salah dengar saat disuruh mematikan alarm.",
    content: `Kalau Anda pernah mencoba memakai fitur asisten suara di ponsel pintar saat sedang berkendara motor atau ketika kedua tangan sedang berlumuran minyak goreng di dapur, pengalaman yang didapat biasanya jauh dari kesan canggih. Anda berbisik pelan meminta sistem menelepon tukang tambal ban langganan, layar ponsel malah dengan percaya diri memutar lagu rok bervolume maksimal. Anda menyuruh mematikan alarm jam enam pagi, sistemnya malah menawarkan tautan pencarian web tentang sejarah jam weker kuno. Selama lebih dari satu dekade hadir di saku miliaran manusia, asisten virtual di perangkat kita lebih sering bertingkah seperti tetangga budeg yang pura-pura ramah ketimbang alat bantu yang bisa diandalkan.

Namun di balik dinding kaca kantor pusat Apple di Cupertino, realitas sehari-hari yang menjengkelkan itu tampaknya dianggap sebagai angin lalu. Sebagaimana dicatat dalam laporan The Verge pekan ini berdasarkan bocoran jurnalis Mark Gurman di Bloomberg, jajaran petinggi Apple tengah panik dan menekan tim rekayasa kecerdasan buatan mereka. Wakil Presiden Senior Craig Federighi dikabarkan didesak untuk memangkas jadwal pengembangan dan segera menghadirkan versi Siri yang memiliki kemampuan agen otonom alias agentic AI. Apple merasa cemas tertinggal dari proyek Dots milik OpenAI maupun model Muse besutan Meta yang dirancang mampu menjalankan rangkaian tindakan rumit atas nama pengguna tanpa perlu dituntun langkah demi langkah.

![Animasi antarmuka Siri AI yang menyala pada layar ponsel pintar saat menerima perintah suara pengguna](https://platform.theverge.com/wp-content/uploads/sites/2/2026/07/Siri-AI-Being-invoked-3.jpg?quality=90&strip=all&crop=0,0,100,100)

Bagi siapa saja yang terbiasa mengelola sistem komputer dan memahami seluk-beluk infrastruktur digital, manuver terburu-buru ini memperlihatkan aroma kepanikan korporat yang kental. Konsep agen cerdas yang digembar-gemborkan para bos teknologi memang terdengar memikat di atas panggung presentasi. Bayangkan sebuah program yang bisa memesan tiket pesawat, membandingkan tarif penginapan, mengisi formulir pemesanan, hingga memindahkan berkas foto keluarga hanya dengan satu kalimat perintah santai. Masalahnya, bagaimana mungkin sebuah sistem yang selama sepuluh tahun belum becus membedakan nama kontak teman kantor mau diberi wewenang memegang nomor kartu kredit dan mengeksekusi saldo dompet digital secara mandiri?

Kecenderungan memaksakan fitur canggih sebelum fondasi dasarnya matang adalah penyakit menahun industri gadget modern. Alih-alih membereskan sensitivitas mikrofon terhadap deru bising knalpot atau memperkaya pemahaman tata bahasa lokal, Apple justru memilih jalan pintas dengan menempelkan label agen mandiri ke produk mereka. Fenomena ini terasa sangat mirip dengan [rencana Apple menjejalkan chatbot di ruang makan](/apple-mau-jejali-chatbot-di-dapur-saat-orang-cuma-butuh-timer) yang membuat perabot rumah tangga makin rumit tanpa menambah faedah nyata bagi penghuni rumah. Korporasi raksasa seakan lupa bahwa kecerdasan buatan yang berhalusinasi saat disuruh menyalin data belanjaan bukan cuma membuang waktu, melainkan bisa membikin kantong pengguna jebol seketika.

Di negara berkembang seperti Indonesia, tantangannya berlipat ganda lebih runyam. Mayoritas pengguna ponsel pintar berbicara dengan logat daerah yang campur aduk, menembus bisingnya suara klakson angkot, atau berteriak di tengah riuhnya warung kopi pinggir jalan. Jika diperintahkan memesan ojek daring saat hujan lebat saja sistem sering menyerah dan melempar halaman pencarian mesin peramban, membayangkan agen otonom tersebut mengelola urusan pribadi terasa seperti menyerahkan kunci rumah kepada orang asing yang linglung. Risiko kegagalan sistem semacam ini mengulang kekacauan serupa saat publik diperdaya oleh [kecenderungan menyerahkan urusan dapur ke chatbot AI](/serahkan-urusan-dapur-ke-chatbot-ai-kalau-mau-siap-siap-makan-kue) yang berujung hidangan gosong tak layak makan.

Dunia teknologi semestinya sadar bahwa pengguna tidak butuh asisten yang pintar berfilsafat atau gemar pamer kecerdasan buatan di layar sentuh. Kebutuhan warga biasa sesungguhnya sangat membumi: kami hanya butuh alat genggam yang telinganya tidak budeg saat disuruh menyetel pewaktu rebusan mi instan atau membalas pesan singkat tanpa salah ketik.

Sebelum para insinyur di Silicon Valley bermimpi membiarkan Siri mengambil alih urusan hidup manusia dari balik layar, ada baiknya mereka duduk sebentar di warung tenda dan menguji sendiri program kebanggaan mereka di tengah deru bising jalanan. Kalau membedakan suara manusia dan desis minyak goreng saja masih gelagapan, memberi izin agen AI mengutak-atik rekening bank adalah resep paling jitu untuk memicu kepanikan massal.`
  },
  {
    title: "Desainer Skyrim Bela Ilusi Bebas Saat Baldur's Gate 3 Buktikan Serunya Konsekuensi",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Baldurs Gate 3", "Bethesda", "Industri Game", "Larian Studios", "PC Gaming", "RPG", "Skyrim"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/9fXDM6ZgfniUps2Mv9Gmei-1920-80.jpg",
    imageAlt: "Pemandangan kastel Dragonsreach di Whiterun dalam game The Elder Scrolls V: Skyrim karya Bethesda",
    sourceUrl: "https://www.pcgamer.com/games/the-elder-scrolls/skyrim-lead-designer-bruce-nesmith-loved-that-baldurs-gate-3-closed-off-story-paths-based-on-your-decisions-but-defends-bethesdas-approach-they-were-both-fun-theyre-just-fun-in-different-ways/",
    excerpt: "Mantan kepala desainer Skyrim Bruce Nesmith membela filosofi Bethesda yang membiarkan pemain menjadi dewa segala faksi tanpa konsekuensi moral. Padahal keberhasilan masif Baldur's Gate 3 justru membuktikan bahwa gamer merindukan bobot pilihan nyata di mana setiap keputusan berani menuntut pengorbanan narasi.",
    content: `Salah satu keanehan paling menggelikan yang sudah lama dimaklumi para penjelajah dunia game peran adalah status sosial karakter kita di provinsi Tamriel. Di dalam game The Elder Scrolls V: Skyrim, Anda bisa dilantik menjadi Arch-Mage alias pimpinan tertinggi kampus sihir Winterhold tanpa pernah mengeluarkan satu pun mantra magis selain menyalakan obor pemantik api di lorong gelap. Di saat bersamaan, Anda juga bisa menjabat sebagai ketua serikat pencuri, algojo utama kelompok pembunuh bayaran Dark Brotherhood, sekaligus tangan kanan jenderal kekaisaran. Semua faksi besar di negeri salju itu menyambut Anda dengan karpet merah tanpa ada sedikit pun rasa curiga atau benturan kepentingan.

Dunia permainan dirancang seperti taman hiburan anak-anak yang luar biasa ramah: semua pintu terbuka lebar, semua wahana boleh dicoba, dan tidak ada satu pun tindakan konyol Anda yang bakal berujung pada pengusiran permanen.

Filosofi desain serba boleh itulah yang pekan ini kembali diungkit oleh tokoh kuncinya. Sebagaimana dicatat dalam laporan PC Gamer pekan ini dari hasil wawancaranya bersama Bruce Nesmith, mantan kepala desainer Skyrim tersebut angkat bicara mengenai perdebatan arah game RPG modern. Nesmith secara jujur mengakui rasa kagumnya terhadap mahakarya Baldur's Gate 3 garapan Larian Studios yang berani mengunci jalan cerita dan melenyapkan faksi tertentu secara permanen akibat keputusan moral pemain. Namun di sisi lain, Nesmith tetap membela mati-matian tradisi Bethesda. Menurutnya, pendekatan membiarkan pemain mencicipi seluruh isi konten dalam satu kali sesi permainan adalah formula kebebasan yang sama menyenangkannya.

![Pemandangan kastel Dragonsreach di Whiterun dalam game The Elder Scrolls V: Skyrim karya Bethesda](https://cdn.mos.cms.futurecdn.net/9fXDM6ZgfniUps2Mv9Gmei-1920-80.jpg)

Argumen pembelaan tersebut sekilas terdengar demokratis bagi gamer santai yang tidak punya banyak waktu luang. Siapa yang tidak senang bisa mengoleksi semua senjata legendaris dan menyelesaikan setiap alur cerita tanpa takut kehilangan akses ke ruang bawah tanah tertentu? Namun jika dibedah lebih dalam dari kacamata desain narasi, dalih kebebasan tanpa batas itu sesungguhnya adalah topeng manis untuk menutupi rasa malas merancang percabangan cerita yang berbobot. Ketika semua pilihan dialog berujung pada akhir yang sama persis, konsep permainan peran seketika kehilangan nyawanya. Pemain tidak benar-benar menghidupkan sebuah karakter dengan prinsip moral, melainkan hanya bertindak bak turis borjuis yang sibuk mengumpulkan stempel di tempat rekreasi.

Dampak buruk dari kenyamanan palsu ini terlihat telanjang pada judul-judul penerus garapan Bethesda. Pendekatan bermain aman yang menolak menyakiti perasaan pemain terbukti melahirkan jagat permainan yang hambar dan steril, sebagaimana yang dirasakan gamer saat menjumpai [dunia hambar Starfield akibat formula usang Bethesda](/starfield-mendadak-menyenangkan-begitu-cerita-utamanya-dibuang-ke) yang cepat ditinggalkan komunitasnya karena miskin dinamika konflik batin. Bila sebuah semesta fiksi tidak memiliki ketegasan untuk menolak kehadiran pemain jahat di kuil suci, seluruh hukum dan mitologi di dalamnya otomatis runtuh menjadi lelucon belaka.

Keberhasilan luar biasa Baldur's Gate 3 beberapa waktu lalu membuktikan kerinduan terpendam para pemain terhadap bobot konsekuensi yang nyata. Kenikmatan bermain RPG sejati tidak lahir dari kemudahan memenangkan segalanya, melainkan dari getaran cemas saat melempar dadu takdir atau rasa getir ketika harus kehilangan sahabat karib akibat salah mengambil sikap politik. Pengorbanan itulah yang menyatukan emosi pemain dengan nasib karakter di layar monitor. Tanpa adanya risiko kehilangan, petualangan ratusan jam terasa datar seperti menonton parade patung lilin. Kehampaan rasa itulah yang selama bertahun-tahun terpaksa ditambal oleh [komunitas modder yang mati-matian merombak Skyrim](/modder-bikin-skyrim-jadi-mmo-abadi-saat-bethesda-masih-doyan-jual) demi menyuntikkan kembali rasa lapar, bahaya kematian, dan sistem ekonomi yang kejam.

Menjadikan karakter kita sebagai pahlawan serbabisa yang dipuja semua golongan memang ampuh membius rasa percaya diri setelah seharian lelah menghadapi kerasnya kehidupan kantor. Tapi kalau setiap pilihan jalan tidak pernah menuntut harga yang harus dibayar, gelar penyelamat dunia yang disematkan di pundak Anda tak lebih dari sekadar piagam partisipasi yang dibagi-bagikan cuma-cuma kepada siapa saja yang mau meluangkan waktu duduk di depan komputer.`
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261109-0300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Run Error:", err);
    process.exit(1);
  });
}
