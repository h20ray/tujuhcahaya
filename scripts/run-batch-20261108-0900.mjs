import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Lagu Galau Lawas Astrid Mendadak Jadi Pengiring Komedi Absurd di Linimasa",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Margaretha Nina", "Astrid", "Tren Musik", "Budaya Populer", "TikTok", "Musik Indonesia", "Media Sosial"],
    imageUrl: "https://cdn.koridor.co.id/media/images/2026/11/pMVsB13HYE.jpeg?location=1&width=1200&height=674&quality=80&watermark=1",
    imageAlt: "Potret penyanyi Astrid yang lagunya kembali viral di platform media sosial",
    sourceUrl: "https://koridor.co.id/terpukau-astrid-viral-tren-mantan",
    excerpt: "Lagu lawas Terpukau dari Astrid mendadak meledak lagi di linimasa TikTok dan ditonton puluhan juta kali. Alih-alih dipakai meratapi patah hati, generasi muda hari ini justru menjadikannya latar lelucon getir saat salah tingkah atau kepergok mantan di kasir minimarket.",
    content: `Bagi siapa saja yang gemar begadang sembari menatap layar smartphone di sudut kamar kosan, linimasa media sosial belakangan ini menyajikan pemandangan musikal yang cukup ganjil. Di tengah keheningan malam, sayup-sayup terdengar petikan piano melankolis yang segera disusul oleh vokal sendu milik penyanyi Astrid melantunkan lirik patah hati legendaris: *"Aku terpukau... mendengarmu..."*.

Di masa kejayaan radio FM dan toko kaset belasan tahun silam, alunan melodi sekhusyuk itu biasanya langsung mengondisikan pendengar untuk menatap jendela berembun, mengingat mantan kekasih yang menikah dengan orang lain, atau menangis sesenggukan di pojok kasur. 

Namun ketika Anda melihat video yang menyertainya di layar hari ini, atmosfer melankolis itu langsung runtuh berkeping-keping.

Lagu syahdu tersebut bukan mengiringi adegan sinetron patah hati, melainkan rekaman seorang pemuda yang celananya mendadak robek saat hendak jongkok di hajatan tetangga, momen panik seseorang yang berpapasan langsung dengan mantan mertua di antrean kasir minimarket sambil menenteng sabun cuci diskonan, hingga kepolosan kucing peliharaan yang tercebur ke bak mandi. Alunan lagu balada yang tadinya ditulis dengan cucuran air mata kini resmi bertransformasi menjadi lagu kebangsaan bagi rasa malu dan momen canggung tingkat tinggi.

![Potret penyanyi Astrid yang lagunya kembali viral di platform media sosial](https://cdn.koridor.co.id/media/images/2026/11/pMVsB13HYE.jpeg?location=1&width=1200&height=674&quality=80&watermark=1)

Fenomena daur ulang rasa ini bukan sekadar kebetulan sesaat di jagat maya. Sebagaimana dicatat dalam laporan Koridor.co.id dan pantauan tren media sosial pekan ini, lagu *Terpukau* yang pertama kali diluncurkan Astrid pada awal era 2010-an kembali melesat ke jajaran tangga audio paling populer di TikTok dan Instagram Reels dengan puluhan ribu video kreasi baru. Generasi Z yang barangkali masih duduk di bangku taman kanak-kanak saat lagu itu pertama kali mengudara di stasiun televisi, kini secara kolektif menjadikannya latar suara paling pas untuk merayakan kesialan hidup sehari-hari.

Menyaksikan fenomena ini melahirkan perasaan campur aduk: geli sekaligus kagum. Di satu sisi, ada rasa takjub melihat bagaimana sebuah karya audio lawas memiliki daya tahan organik yang luar biasa. Tanpa perlu suntikan dana promosi jutaan rupiah dari label rekaman raksasa, lagu tersebut bangkit kembali murni karena kecerdikan warganet menemukan benang merah antara kepedihan lirik dengan ironi hidup masa kini.

Namun di sisi lain, fenomena ini juga menyingkap pergeseran mendasar tentang cara generasi muda mengonsumsi seni pertunjukan. Generasi hari ini sudah terlalu lelah dihajar tekanan ekonomi, biaya sewa tempat tinggal yang mencekik, dan kecemasan masa depan. Mereka tidak lagi punya kemewahan energi untuk meratapi drama asmara berlarut-larut sebagaimana pendahulu mereka di era milenium. Pilihan paling sehat bagi kewarasan mental mereka bukanlah larut dalam tangisan, melainkan menertawakan nestapa itu sendiri sekeras-kerasnya.

Kendati demikian, kebangkitan kedua katalog musik lawas ini juga menyimpan ironi getir bagi industri kreatif. Di tengah situasi di mana [ekosistem lagu anak yang tergerus algoritma](/ketika-etenia-croft-rebut-piala-ami-awards-saat-lagu-anak-digerus) memperlihatkan betapa kejamnya seleksi konten modern, musisi sering kali berada di posisi pasif. Jutaan tontonan di aplikasi video pendek jarang sekali berbanding lurus dengan royalti digital yang masuk ke kantong sang penyanyi. Platform teknologi mengeruk miliaran jam keterlibatan pengguna, sementara pencipta karya aslinya sering kali hanya mendapatkan remah-remah apresiasi dan lonjakan tipis di grafik streaming Spotify.

Situasi tersebut kian kontras saat disandingkan dengan fenomena [kebiasaan mendengar yang kian kebas akibat banjir rilisan serentak](/ketika-seluruh-musisi-janjian-rilis-lagu-tiap-jumat-dan-telinga) setiap akhir pekan. Di saat karya-karya baru berbiaya produksi mahal sering kali tenggelam dalam hitungan hari tanpa sempat menancap di ingatan publik, lagu berumur satu dekade lebih justru mendikte percakapan budaya populer hanya bermodal potongan durasi lima belas detik.

Menikmati lagu *Terpukau* versi komedi warganet hari ini pada akhirnya menyadarkan kita pada satu kenyataan sederhana. Kita mungkin tidak bisa memilih untuk selalu terhindar dari momen-momen paling memalukan dalam hidup. Namun selama kita masih bisa menyetel alunan suara Astrid dan menertawakan kecanggungan diri sendiri bersama ratusan ribu orang asing di linimasa, rasa perih akibat gengsi yang terinjak itu setidaknya masih bisa terasa sedikit merdu.`
  },
  {
    title: "Ketika Game Jaga Toko Loak Cyberpunk Malah Lebih Memikat Ketimbang Rilisan Bergengsi AAA",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Game Indie", "Steam", "Cyberpunk", "Gamer Indonesia", "Industri Game", "PC Gaming"],
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/11/probably-stolen-steam-hit-header.jpg",
    imageAlt: "Tangkapan layar game indie Probably Stolen yang menampilkan atmosfer toko loak distopia cyberpunk",
    sourceUrl: "https://www.polygon.com/probably-stolen-cyberpunk-shopkeeping-simulator-steam-hit/",
    excerpt: "Game indie berkonsep toko loak distopia Probably Stolen mendadak mencatatkan 150 ribu pemain aktif di Steam. Di saat publisher raksasa sibuk merilis game setengah matang berharga jutaan rupiah, menyortir barang selundupan di gang kumuh futuristik justru jadi pelarian paling adiktif.",
    content: `Bagi para gamer PC yang setiap bulan dibombardir oleh trailer game beranggaran triliunan rupiah dengan janji revolusi grafis, rasa lelah psikologis barangkali sudah menjadi makanan sehari-hari. Proyek-proyek raksasa berkategori AAA itu makin ke sini makin terasa seragam: peta dunia terbuka yang kelewat luas tetapi minim interaksi bermakna, rentetan bug grafis yang memaksa pemain mengunduh patch puluhan gigabyte di hari pertama rilis, serta kerakusan penerbit yang tanpa malu menyisipkan transaksi mikro di setiap sudut menu.

Namun ketika industri arus utama sibuk memoles cangkang visual sembari melupakan keasyikan bermain yang tulus, penawar dahaga terbaik justru kerap muncul dari garasi pengembang independen yang bekerja dengan komputer seadanya.

Kabar mengejutkan pekan ini menjadi bukti paling telak. Sebagaimana dicatat dalam laporan Polygon akhir pekan ini, sebuah game indie berjudul *Probably Stolen* mendadak meledak di etalase Steam dengan menorehkan lebih dari 150.000 pemain yang bermain secara bersamaan (*concurrent players*). Angka fantastis tersebut bahkan dengan mudah melibas jumlah pemain aktif dari beberapa game petualangan beranggaran raksasa yang diluncurkan oleh korporasi besar dalam beberapa bulan terakhir.

![Tangkapan layar game indie Probably Stolen yang menampilkan atmosfer toko loak distopia cyberpunk](https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/11/probably-stolen-steam-hit-header.jpg)

Daya tarik *Probably Stolen* sesungguhnya tidak terletak pada teknologi grafis fotorealistis yang menyiksa kartu grafis komputer. Kekuatannya justru berpijak pada premis gameplay yang sangat segar dan membumi: mengawinkan atmosfer kota distopia kumuh ala fiksi ilmiah dengan ketegangan moral serta birokrasi jalanan yang mengingatkan kita pada karya klasik *Papers, Please*.

Di game ini, Anda sama sekali tidak berperan sebagai pembasmi kejahatan super sakti yang menenteng senapan plasma untuk menyelamatkan galaksi. Peran Anda jauh lebih realistis sekaligus penuh kompromi: pemilik toko loak dan pegadaian sempit di sudut gang becek yang dipenuhi asap pabrik dan papan reklame neon berkedip. Tugas harian Anda adalah menerima berbagai macam barang rongsokan dari pelanggan misterius—mulai dari lengan bionik berlumuran pelumas mesin, chip memori bekas peretasan korporasi, hingga motherboard komputer tua.

Tantangannya hadir lewat kaca pembesar dan alat pemindai nomor seri. Anda harus memeriksa apakah barang yang dibawa pelanggan tersebut merupakan rongsokan legal atau barang curian panas milik sindikat mafia lokal. Salah menaksir harga atau menerima barang curian terlalu ceroboh bisa berujung pada penggerebekan oleh petugas patroli kepolisian kota yang korup. Namun menolak semua barang curian juga berarti toko Anda akan bangkrut karena kekurangan pemasukan tunai untuk membayar sewa tempat dan tagihan listrik.

Bagi komunitas gamer di Indonesia, dinamika semacam ini terasa sangat dekat dengan denyut nadi keseharian. Sensasi menawar harga suku cadang bekas di pasar loak pinggir rel kereta api atau mencurigai asal-usul barang elektronik murah di lapak pinggir jalan berhasil diterjemahkan ke dalam mekanisme permainan yang memikat. Ketegangan saat bernegosiasi dengan preman jalanan yang putus asa jauh lebih memacu adrenalin ketimbang menembaki ratusan prajurit bayaran berotak tumpul di game perang modern.

Kesuksesan tak terduga ini menjadi tamparan keras bagi eksekutif penerbit besar. Realitas ini menegaskan kembali bagaimana [game berbujet triliunan kerap ketar-ketir menghadapi karya indie](/ketika-path-of-exile-2-menjelang-rilis-dan-bikin-game-berbujet) yang dirancang dengan dedikasi mekanika murni. Gamer pada dasarnya tidak butuh ilusi grafis berlebihan jika pada akhirnya penerbit memperlakukan mereka hanya sebagai sapi perah, fenomena yang kian memuakkan ketika korporasi bahkan tega [menjual kotak fisik kosong berisi selembar kode unduhan](/ketika-kotak-fisik-gta-6-mulai-beredar-tapi-isinya-cuma-selembar) demi memangkas biaya distribusi.

Duduk di depan meja kasir digital *Probably Stolen* hingga larut malam pada akhirnya menyadarkan kita tentang arti hiburan yang sejati. Kita tidak selalu butuh menyelamatkan peradaban manusia dari kehancuran antariksa. Terkadang, pelarian paling memuaskan setelah seharian letih bergulat dengan rutinitas dunia nyata hanyalah berhasil menawar harga cip komputer bekas dari pencuri amatir tanpa harus digiring ke kantor polisi.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 09:00 WIB)");
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261108-0900.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
