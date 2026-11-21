import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Amazon Mau Petakan Seluruh Barang di Internet Demi Mengurung Dompet Konsumen",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Amazon", "E-Commerce", "Kecerdasan Buatan", "Belanja Online", "Monopoli Digital", "Elang Elano"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/09/acastro_STK103__03.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Ilustrasi troli belanja digital dan kotak paket pesanan berlogo senyum khas raksasa niaga daring Amazon",
    sourceUrl: "https://www.theverge.com/tech/1033697/amazon-world-product-graph-ai-search",
    excerpt: "Amazon diam-diam merancang proyek World Product Graph untuk mengindeks seluruh barang yang dijual di jagat maya. Berbekal teknologi kecerdasan buatan, raksasa niaga ini ingin memastikan pembeli tak pernah melirik toko lain.",
    content: `Ada sebuah kebiasaan naluriah yang hampir selalu dilakukan oleh siapa saja yang hendak membeli barang secara daring di internet. Begitu menemukan sepasang sepatu idaman atau suku cadang motor di salah satu etalase belanja, jari jemari kita secara otomatis akan membuka tab baru di peramban web untuk melakukan satu hal paling manusiawi: membandingkan harga. Kita mengetik nama barang yang sama di mesin pencari, melongok toko sebelah, memeriksa lapak impor, lalu menimbang promo ongkos kirim. Bagi konsumen kelas pekerja yang gajinya pas-pasan, ritual mondar-mandir antar-situs belanja ini adalah jurus bertahan hidup paling masuk akal agar uang bulanan tidak amblas begitu saja.

Namun bagi korporasi raksasa sekelas Amazon, tabiat konsumen yang gemar melirik toko sebelah adalah mimpi buruk yang harus segera diberangus. Dalam pandangan para pialang modal di Seattle, setiap detik yang dihabiskan seorang pembeli di luar situs web mereka adalah potensi keuntungan yang bocor ke tangan kompetitor. Dan untuk menyumbat kebocoran itu, mereka tidak segan-segan mengerahkan seluruh daya komputasi yang mereka miliki demi membangun sangkar emas digital paling kedap udara di muka bumi.

Rencana mahabesar tersebut baru saja terkuak ke hadapan publik. Sebagaimana dicatat dalam laporan Reuters yang kemudian diulas oleh The Verge pekan ini, Amazon sedang sibuk mengembangkan sebuah repositori data raksasa bernama World Product Graph. Ambisi proyek ini terdengar gila sekaligus mengerikan: Amazon berniat mendata, mengatalogkan, dan mengindeks seluruh produk yang dijual di mana pun di kolong internet, termasuk barang-barang yang sama sekali tidak dijual di etalase Amazon. Seluruh gunungan data dagang sedunia tersebut nantinya akan dikawinkan dengan mesin pencarian berbasis kecerdasan buatan, sehingga calon pembeli bisa menemukan spesifikasi, ulasan, hingga riwayat harga barang apa pun langsung dari dalam aplikasi Amazon tanpa pernah merasa perlu melangkah keluar.

Bagi mereka yang menelan mentah-mentah janji manis promosi korporasi, fitur semacam ini barangkali terdengar seperti kemudahan belanja yang sangat memanjakan. Bayangkan betapa praktisnya membuka satu aplikasi saja untuk mengetahui perbandingan harga barang di seluruh jagat maya. Namun bila kita membedah taktik ini lewat kacamata sistem di warung kopi, World Product Graph pada hakikatnya adalah manuver monopoli klasik untuk membunuh kemerdekaan berselancar pengguna.

![Ilustrasi troli belanja digital dan kotak paket pesanan berlogo senyum khas raksasa niaga daring Amazon](https://platform.theverge.com/wp-content/uploads/sites/2/2025/09/acastro_STK103__03.jpg?quality=90&strip=all&crop=0,0,100,100)

Selama ini, benteng pertahanan terakhir konsumen melawan hegemoni platform raksasa adalah kemampuan kita untuk berpindah lapak secara bebas. Kita bisa meninggalkan Amazon atau marketplace lokal kapan pun kita mau begitu menemukan toko independen yang menawarkan harga lebih jujur. Dengan memindahkan seluruh informasi web luar ke dalam halaman mereka, Amazon sedang berusaha menghapus konsep peramban terbuka. Mereka ingin menjadi pintu gerbang tunggal tempat Anda memulai dan mengakhiri seluruh aktivitas perputaran uang di internet.

Nafsu rakus untuk mengontrol setiap jengkal keseharian pengguna ini sejatinya bukan cerita baru. Publik tentu masih ingat bagaimana Amazon pernah bernafsu memantau ruang keluarga pelanggan lewat [robot patroli rumahan berbanderol belasan juta rupiah](/amazon-rilis-robot-satpam-rp15-juta-tapi-tak-berdaya-menghadapi) yang nyatanya langsung tak berdaya saat tersandung undakan tangga kayu. Begitu pula saat privasi hunian pribadi terancam tamat akibat ambisi menerbangkan [kamera terbang di dalam hunian pribadi](/amazon-terbangkan-drone-ring-di-ruang-tamu-menandai-tamatnya) atas nama keamanan modern. Pola perilakunya selalu serupa: menawarkan kemudahan teknologi canggih sembari diam-diam merampas kendali dan data pribadi pengguna hingga tak bersisa.

Di balik dalih integrasi kecerdasan buatan yang dipamerkan kepada para investor, proyek ini menyimpan ancaman nyata bagi keberlangsungan ribuan peritel independen dan Usaha Mikro Kecil dan Menengah di berbagai negara. Ketika sebuah raksasa pengendali infrastruktur komputasi awan bertindak merangkap sebagai kurator informasi global, algoritma pencarian akan sangat mudah diarahkan untuk mendahulukan produk-produk yang menguntungkan kas mereka sendiri. Toko-toko kecil yang tidak sanggup membayar tarif iklan atau menolak sistem bagi hasil korporat perlahan akan terkubur di halaman terbawah pencarian, kehilangan akses langsung ke hadapan calon pelanggan.

Di pos ronda warkop tempat obrolan teknologi biasa bergulir santai, rencana Amazon ini disambut dengan tawa sinis para teknisi jaringan. Kita disadarkan kembali bahwa slogan internet sebagai ruang bebas yang demokratis kian hari kian tergerus oleh kerakusan oligopoli teknologi. Para pemodal Silicon Valley selalu gelisah melihat pengguna internet memiliki kemerdekaan untuk menutup tab dan memilih lapak lain dengan akal sehatnya sendiri. Mereka ingin memastikan bahwa dari saat Anda membuka mata hingga memasukkan nomor kartu kredit, jempol Anda tidak pernah lepas dari lingkaran cengkeraman logo senyum mereka. Sebelum kandang algoritma itu benar-benar mengunci pintu keluar, ada baiknya kita tetap rajin mengetik alamat toko sebelah secara manual di peramban, sekadar untuk mengingatkan para raksasa itu bahwa isi dompet kita bukanlah milik mereka.`
  },
  {
    title: "Professor Layton Dibikin Ulang Bukti Industri Game Boncos Kehabisan Gagasan Segar",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Level-5", "Nintendo DS", "Nintendo Switch", "Professor Layton", "Industri Game", "Andoru Ray"],
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/09/professor-layton-and-the-new-world-of-steam.jpg",
    imageAlt: "Ilustrasi karakter detektif berotak encer Profesor Hershel Layton dan asisten cilik Luke Triton dari semesta game teka-teki Level-5",
    sourceUrl: "https://www.polygon.com/professor-layton-nintendo-ds-remake-release-date-2027/",
    excerpt: "Level-5 resmi mengumumkan pembuatan ulang game teka-teki legendaris Profesor Layton dari era Nintendo DS. Di balik nostalgia manis penggemar lawas, keputusan daur ulang ini menyiratkan krisis kreativitas di tengah industri game modern.",
    content: `Bagi siapa saja yang sempat melewati masa remaja pada pertengahan dekade dua ribuan dengan menggenggam konsol saku Nintendo DS, bunyi denting pena stilus di atas layar sentuh resistif adalah memori kolektif yang sulit terhapus oleh zaman. Di era ketika smartphone belum menjelma menjadi mesin penghisap waktu berbayar, kita rela menghabiskan berjam-jam di bangku teras rumah sembari memutar otak memecahkan teka-teki geser balok, menghitung sudut korek api, atau menyusun potongan teka-teki gambar yang membingungkan. Sosok detektif sopan bertopi tinggi bernama Hershel Layton bersama asisten ciliknya, Luke Triton, bukan sekadar karakter piksel di layar saku, melainkan kawan berpikir yang mengajarkan bahwa sebuah permainan bermutu tidak selalu butuh ledakan dinamit atau pertumpahan darah demi memikat hati pemainnya.

Setelah hampir dua dekade berselang sejak debut perdananya, kabar mengejutkan tiba-tiba ditiupkan kembali oleh sang perancang aslinya. Sebagaimana dicatat dalam laporan resmi Polygon pekan ini, studio pengembang asal Jepang Level-5 mengumumkan bahwa mereka sedang menggarap proyek pembuatan ulang (remake) penuh dari judul klasik Professor Layton and the Curious Village. Permainan teka-teki legendaris yang pertama kali meluncur pada tahun 2007 itu direncanakan melenggang kembali ke pasaran pada 2027 mendatang dengan balutan visual modern dan tata audio beresolusi tinggi.

Mendengar kabar kembalinya sang profesor di sela obrolan warung kopi para pencinta game konsol, riak emosi yang muncul terasa sangat kontras. Di satu sisi, para gamer gaek tentu menyambut hangat kesempatan untuk kembali bernostalgia memecahkan teka-teki desa misterius Saint-Mystere bersama keluarga di ruang tamu. Namun di sisi lain, bagi siapa saja yang jeli mengamati arah angin bisnis hiburan digital, pengumuman ini sejatinya adalah surat pengakuan dosa terselubung: industri game hari ini sedang mengalami kemarau gagasan segar yang teramat parah.

![Ilustrasi karakter detektif berotak encer Profesor Hershel Layton dan asisten cilik Luke Triton dari semesta game teka-teki Level-5](https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/09/professor-layton-and-the-new-world-of-steam.jpg)

Keputusan Level-5 untuk menggali kembali kuburan judul lawas berumur dua puluh tahun mempertegas fenomena kepanikan massal para penerbit game di panggung global. Membangun kekayaan intelektual anyar hari ini dianggap sebagai perjudian bunuh diri oleh para pialang saham, apalagi setelah melihat betapa banyak proyek game layanan langsung berbujet ratusan miliar rupiah gulung tikar hanya dalam hitungan pekan. Alhasil, jalan pintas paling aman untuk menyelamatkan neraca keuangan kas korporat adalah memerah memori masa kecil generasi milenial yang kini sudah bekerja dan memiliki daya beli sendiri.

Strategi daur ulang nostalgia ini semakin lazim ditemui di mana-mana, menyerupai kebiasaan menahun [hobi penerbit besar menjual kembali kaset usang](/modder-bikin-skyrim-jadi-mmo-abadi-saat-bethesda-masih-doyan-jual) dengan polesan resolusi visual alakadarnya demi meraup keuntungan gampang tanpa perlu memeras keringat merancang mekanik orisinal. Rasa jenuh pemain kian memuncak saat pabrikan konsol sendiri kerap mempermainkan kesabaran komunitas lewat [kebijakan kikir katalog permainan lawas](/ketika-nintendo-pelit-merilis-game-gba-di-switch-online-padahal) di layanan langganan berbayar mereka, membuktikan bahwa karya klasik kerap dijadikan alat tawar untuk menjerat dompet gamer secara berkala.

Ironi terbesarnya justru terletak pada perbandingan kualitas pengalaman bermain. Dua puluh tahun silam, sebuah game teka-teki seharga beberapa ratus ribu rupiah disajikan secara utuh dan terhormat: tanpa toko mikrotransaksi di dalam menu, tanpa sistem poin energi yang memaksa pemain membayar agar stilus bisa kembali digerakkan, dan tanpa pop-up iklan kasino online yang merusak konsentrasi. Di era industri modern yang rakus ini, game semacam itu terasa seperti peninggalan peradaban masa silam yang amat mulia, saat pengembang masih memandang konsumen sebagai penikmat karya seni ketimbang komoditas sapi perah.

Di tongkrongan warkop ketika kawan-kawan gamer kasual kembali membicarakan rencana peluncuran kembali petualangan Profesor Layton pada 2027 kelak, kita cuma bisa tersenyum masam sembari meneguk sisa kopi hitam. Memainkan kembali teka-teki klasik memang menyenangkan, tetapi bergantung pada nostalgia masa lalu adalah alarm bahaya bahwa daya cipta para pengembang papan atas sedang sekarat. Kita tentu bersedia kembali memutar otak membantu Profesor Layton memecahkan misteri di desa terpencil, sembari berdoa dalam hati semoga korporasi tidak tergoda menaruh tiket berbayar pada setiap petunjuk teka-teki yang hendak kita buka.`
  }
];

async function runBatch() {
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
      markAsSeen(art.sourceUrl);
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch 13:00 selesai! Total artikel terbit: ${results.length}`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261114-1300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch 13:00 execution failed:", err);
    process.exit(1);
  });
}
