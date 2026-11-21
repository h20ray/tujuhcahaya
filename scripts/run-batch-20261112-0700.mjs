import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "United Airlines Tolak Agen AI Pesan Tiket Pesawat Takut Monopoli Terganggu",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "United Airlines", "Kecerdasan Buatan", "Agen AI", "Tiket Pesawat", "Privasi Digital", "Gaya Hidup Digital", "Teknologi"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/23176430/1237621702.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Pesawat komersial United Airlines terparkir di bandara di tengah kebijakan larangan pemesanan tiket otomatis oleh agen AI pribadi",
    sourceUrl: "https://www.theverge.com/ai-artificial-intelligence/1031623/united-unauthorized-ai-agents",
    excerpt: "Maskapai penerbangan raksasa United Airlines resmi memblokir asisten dan agen kecerdasan buatan pribadi untuk menyelesaikan transaksi pemesanan tiket penumpang. Di balik dalih birokratis soal regulasi bagasi dan privasi data, pernyataan jujur sang pucuk pimpinan yang menolak kehadiran calo digital baru membongkar ketakutan industri penerbangan saat konsumen mulai dipersenjatai bot mandiri untuk mencari celah harga termurah.",
    content: `Bagi siapa saja yang pernah menghabiskan waktu berjam-jam di depan layar monitor hanya untuk membandingkan tarif tiket pesawat terbang, pengalaman berburu kursi murah kerap terasa seperti pertandingan catur melawan siluman. Anda membuka belasan tab di browser komputer, menghapus riwayat kuki berulang kali, menyalakan mode penyamaran, hingga berganti jaringan internet karena mencurigai algoritma maskapai sengaja menaikkan harga setiap kali halaman dimuat ulang. Ketika startup kecerdasan buatan belakangan ini gembar-gembor menjanjikan hadirnya asisten pribadi otonom yang bisa disuruh memesan tiket, memilih kursi jendela, dan membayar transaksi secara otomatis dalam sekejap mata, jutaan calon pelancong sempat mengira mimpi buruk birokrasi pemesanan tiket daring akhirnya bakal segera berakhir.

Namun angan-angan manis tentang hidup santai menyerahkan urusan tetek bengek penerbangan ke pundak robot rupanya langsung dibanting ke landasan pacu oleh maskapai raksasa Amerika Serikat, United Airlines. Sebagaimana dicatat oleh jurnalis Lauren Feiner dalam laporannya di The Verge yang mengutip investigasi The Wall Street Journal, manajemen United Airlines secara tegas menyatakan menolak akses agen kecerdasan buatan pihak ketiga untuk menyelesaikan transaksi pembelian tiket penumpang. Bot pintar milik konsumen memang masih diizinkan membaca jadwal keberangkatan, tetapi pintu gerbang pembayaran otomatis ditutup rapat-rapat tanpa ampun.

![Pesawat komersial United Airlines terparkir di bandara di tengah kebijakan larangan pemesanan tiket otomatis oleh agen AI pribadi](https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/23176430/1237621702.jpg?quality=90&strip=all&crop=0,0,100,100)

Untuk membenarkan aksi blokir tersebut, pihak maskapai buru-buru menyodorkan setumpuk alasan birokratis yang terdengar sangat mulia. Mereka berdalih bahwa agen digital berisiko membocorkan data pribadi pelanggan, rawan keliru membeli rute yang tidak diinginkan, serta melanggar regulasi federal penerbangan. Salah satu aturan ketat pemerintah mewajibkan setiap calon penumpang bersumpah secara sadar bahwa koper bagasi mereka tidak membawa bahan peledak atau barang berbahaya. Maskapai berkilah bahwa sebaris kode program bot tidak akan pernah memiliki tanggung jawab hukum untuk menyatakan kejujuran isi tas manusia di hadapan hukum negara.

Tetapi alasan teknis semacam itu sejatinya hanyalah pemanis bibir humas korporasi. Keresahan yang sesungguhnya diakui secara sangat jujur dan tanpa basa-basi oleh nahkoda tertinggi United Airlines sendiri, Scott Kirby. Di hadapan para pelaku industri, sang direktur utama berterus terang bahwa dirinya sama sekali enggan menciptakan calo perantara baru di antara maskapai dan penumpang. Sikap defensif ini memperlihatkan ketakutan hakiki para pemilik maskapai: selama bertahun-tahun mereka menikmati kendali mutlak atas data kebiasaan pengguna dan margin penjualan tiket tambahan, mulai dari biaya bagasi ekstra hingga asuransi perjalanan kilat yang sengaja diselipkan di halaman akhir. Jika agen otomatis mengambil alih transaksi, seluruh trik penjualan halus itu akan langsung disapu bersih oleh algoritma yang hanya peduli pada angka paling hemat.

Ketakutan korporasi terhadap bot konsumen ini menghadirkan ironi yang sangat menggelikan di lanskap teknologi modern. Selama bertahun-tahun, raksasa industri leluasa memanfaatkan algoritma penetapan harga dinamis untuk memeras kantong konsumen, mirip dengan fenomena [jeratan manipulasi digital korporasi](/uni-eropa-sikat-bandar-gacha-dan-algoritma-candu-saat-warga-lokal) yang kerap mempermainkan psikologi pengguna demi mengejar margin keuntungan kuartalan. Namun begitu konsumen mulai dibekali perkakas digital pintar untuk membela kepentingan dompet sendiri, korporasi mendadak panik dan buru-buru memasang gembok pengaman. Fenomena pembatasan ini mengingatkan kita pada risiko nyata saat [asisten AI ceroboh membocorkan data rahasia](/claude-code-bocorkan-ribuan-kunci-rahasia-di-github-saat), di mana ketidaksiapan infrastruktur keamanan kerap dijadikan dalih empuk untuk merawat hegemoni aplikasi resmi.

Bagi calon penumpang yang saban musim liburan pusing memikirkan mahalnya tarif angkutan udara, langkah United Airlines ini adalah peringatan nyata bahwa revolusi kecerdasan buatan tidak akan pernah berjalan netral. Para konglomerat penerbangan sangat menyukai otomatisasi ketika teknologi tersebut mampu memangkas gaji petugas loket di bandara atau menaikkan harga kursi secara sepihak. Tetapi saat kecerdasan buatan yang sama hendak dipakai oleh rakyat jelata demi menghindari jebakan biaya tersembunyi, pintu otomatis itu akan langsung digrendel rapat dengan alasan demi keselamatan penumpang.`
  },
  {
    title: "Arrowhead Babat Mod Kosmetik Helldivers 2 Berujung Dihajar Ulasan Buruk Steam",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Helldivers 2", "Arrowhead Game Studios", "Easy Anti-Cheat", "Modding Komunitas", "Steam", "PC Gaming", "Industri Game"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/Ezff6eq7GdhApmB5Dax2Zi-1920-80.jpg",
    imageAlt: "Prajurit Helldivers 2 beraksi dalam pertempuran galaksi di tengah gelombang protes komunitas modding PC",
    sourceUrl: "https://www.pcgamer.com/games/third-person-shooter/after-cracking-down-on-cheat-mods-in-helldivers-2-and-taking-another-steam-review-beating-arrowhead-plans-hotfix-that-should-allow-harmless-cosmetics/",
    excerpt: "Keputusan sepihak studio Arrowhead mengganti proteksi Helldivers 2 menjadi Easy Anti-Cheat berujung petaka setelah sistem tersebut membabat habis mod kosmetik buatan komunitas. Dihajar lebih dari sepuluh ribu ulasan negatif hingga reputasi di etalase Steam ambruk, pengembang asal Swedia ini akhirnya panik dan berjanji merilis perbaikan darurat demi meredam amuk para pejuang galaksi.",
    content: `Bagi komunitas gamer komputer pribadi, memasang modifikasi buatan penggemar atau mod adalah salah satu kenikmatan sakral yang membedakan bermain di PC dengan kurungan konsol rumahan. Dari sekadar mengubah seragam tempur prajurit menjadi kostum karakter kartun konyol, mengganti bunyi desingan peluru menjadi tawa badut, hingga menyempurnakan tampilan antarmuka yang kaku rancangan developer, kreativitas komunitas selalu menjadi denyut nadi yang memperpanjang umur sebuah permainan. Selama modifikasi visual tersebut hanya dinikmati sendiri di layar monitor dan tidak merugikan pemain lain dalam sesi mabar, tradisi utak-atik berkas game ini lazimnya dibiarkan tumbuh subur sebagai bentuk rasa cinta pemain terhadap karya favorit mereka.

Namun kebiasaan bermain santai tersebut mendadak diobrak-abrik oleh studio Arrowhead Game Studios yang menggarap Helldivers 2. Sebagaimana dicatat oleh jurnalis Joshua Wolens dalam laporannya di PC Gamer, pengembang asal Swedia tersebut baru saja menerapkan perombakan sistem keamanan besar-besaran dengan menggusur perangkat anti-cheat lawas dan menggantikannya dengan Easy Anti-Cheat atau EAC. Studio berdalih bahwa langkah keras ini mutlak diperlukan demi membasmi gerombolan pemain curang yang merusak misi pertempuran antarbintang. Sayangnya, senjata sapu jagat EAC tersebut bekerja secara membabi buta: ribuan berkas mod kosmetik visual tak berbahaya yang diracik susah payah oleh komunitas langsung dideteksi sebagai program jahat dan game mendadak menolak berjalan.

![Prajurit Helldivers 2 beraksi dalam pertempuran galaksi di tengah gelombang protes komunitas modding PC](https://cdn.mos.cms.futurecdn.net/Ezff6eq7GdhApmB5Dax2Zi-1920-80.jpg)

Reaksi komunitas gamer PC menghadapi penindasan kreatif ini datang laksana badai rudal orbital. Menolak tinggal diam melihat hak bermain mereka disunat sepihak, para prajurit Super Earth serentak melancarkan serangan balasan paling ditakuti oleh setiap penerbit game: mengebom kolom ulasan di toko digital Steam. Hanya dalam kurun waktu beberapa puluh jam saja, lebih dari sepuluh ribu ulasan bernada murka membanjiri etalase permainan, membanting status ulasan terkini Helldivers 2 dari predikat sangat positif menjadi mayoritas negatif. Bagi studio independen yang menggantungkan reputasi penjualan pada algoritma rekomendasi toko digital, ambruknya grafik kepuasan pembeli adalah vonis mati komersial yang langsung membikin keringat dingin seluruh jajaran manajemen.

Melihat kebakaran besar yang mengancam reputasi studio, petinggi Arrowhead buru-buru mengeluarkan siaran pers pemadam kebakaran. Mereka berdalih bahwa dari kacamata teknis sistem deteksi, berkas mod kosmetik memang sering kali tidak bisa dibedakan dengan injeksi kode kecurangan. Kendati demikian, studio akhirnya mengaku salah langkah dan berjanji bakal meluncurkan perbaikan darurat atau hotfix untuk mengembalikan fungsi mod visual non-gameplay. Keringat dingin pengembang ini membuktikan satu hal: senjata ulasan pengguna masih menjadi instrumen perlawanan paling ampuh yang dimiliki konsumen, persis seperti ketika [keterbukaan etalase toko Steam](/valve-pajang-data-fps-riil-di-toko-steam-tamparan-keras-untuk) sukses memaksa para peracik game pemalas untuk memperhatikan hak pembeli, atau saat studio game besar kalang kabut menghadapi [ledakan amarah komunitas pemain](/netease-hukum-pemain-toksik-bisu-setahun-padahal-desain-game) yang menolak diperlakukan layaknya sapi perah.

Namun di balik retorika perang melawan cheater, banyak pemain kawakan mencurigai motif ekonomi tersembunyi yang lebih pragmatis. Di Helldivers 2, mod kosmetik komunitas kerap menghadirkan alternatif baju zirah dan helm yang jauh lebih keren ketimbang item berbayar di etalase Warbond. Ketika pemain bisa dengan gampang memakai skin impian secara gratis berkat karya sesama modder, motivasi untuk membeli mata uang mikrotransaksi Super Credits tentu ikut menyusut drastis. Studio game modern boleh saja berkhotbah soal sportivitas pertempuran, tetapi begitu kreativitas gratisan komunitas mulai membayangi penjualan baju besi digital mereka, palu anti-cheat biasanya akan langsung diayunkan tanpa ragu.

Bagi jutaan pejuang galaksi yang sudah mengorbankan ratusan jam menaklukkan serangga raksasa dan robot pembunuh, mundurnya Arrowhead adalah kemenangan manis solidaritas akar rumput. Mengakui kekeliruan dan berjanji merestorasi mod kosmetik membuktikan bahwa developer masih ingat siapa pihak yang membiayai dapur studio mereka selama ini. Menembaki musuh alien di medan tempur memang seru, tapi memaksa developer game meminta maaf lewat sepuluh ribu ulasan jempol ke bawah di Steam jelas menghadirkan sensasi kemenangan yang jauh lebih memuaskan.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 07:00 WIB)");
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
  console.log(`🎉 Batch Publikasi 07:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================\n");
  return results;
}

// CLI Execution
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261112-0700.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Batch Execution Failed:", err);
      process.exit(1);
    });
}
