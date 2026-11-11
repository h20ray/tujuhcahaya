import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Nintendo Pelit Merilis Game GBA di Switch Online Padahal Gamer Rajin Bayar Sewa",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Nintendo", "Nintendo Switch", "Game Boy Advance", "Retrogaming", "Industri Game", "Gamer Indonesia"],
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/13148759/jbareham_180924_ply0802_0029.jpg",
    imageAlt: "Koleksi cartridge Game Boy Advance legendaris dan konsol genggam retro Nintendo",
    sourceUrl: "https://www.polygon.com/game-boy-advance-games-missing-nintendo-switch-online/",
    excerpt: "Layanan sewa Nintendo Switch Online masih pelit membagikan katalog klasik Game Boy Advance. Judul legendaris seperti Golden Sun dan Castlevania ditahan bak tetesan infus, padahal gamer kasual di emulator HP sudah bisa menamatkan semuanya tanpa perlu bayar langganan bulanan.",
    content: `Kalau Anda sempat melewati masa remaja di awal era dua ribuan, aroma plastik cartridge abu-abu Game Boy Advance dan bunyi denting bootleg khas Nintendo saat layar dinyalakan adalah memori sensorik yang mustahil luntur. Dulu, kita rela mengantre baterai isi ulang di warung kelontong atau duduk menempel di dekat jendela angkot demi mendapat pantulan cahaya matahari yang pas di atas layar non-backlight. Game seperti Golden Sun, Castlevania Aria of Sorrow, hingga petualangan taktik Final Fantasy Tactics Advance bukan sekadar hiburan pengisi waktu luang di sela jam istirahat sekolah, melainkan monumen emas era transisi grafis piksel portabel yang matang dan berkarakter.

Dua dekade berselang, industri game modern membungkus kembali kenangan manis masa kecil itu menjadi komoditas langganan bulanan. Sebagaimana dicatat dalam ulasan Polygon baru-baru ini, para pengguna konsol hibrida Nintendo Switch kembali menyuarakan kekecewaan atas lambatnya penambahan katalog klasik Game Boy Advance pada paket langganan Nintendo Switch Online Expansion Pack. Meski layanan berbayar ini sudah berjalan bertahun-tahun, sederet judul legendaris yang semestinya menjadi pilar utama pustaka retrogaming masih raib tanpa alasan logis.

Daftar ketidakhadiran game tersebut terasa ganjil sekaligus menyebalkan bagi siapa saja yang paham sejarah konsol genggam. Karya-karya agung seperti Golden Sun The Lost Age, Mega Man Battle Network, Drill Dozer, hingga serial klasik Mother 3 yang puluhan tahun dituntut penggemar Barat tak kunjung menampakkan batang hidungnya di daftar aplikasi resmi.

![Koleksi cartridge Game Boy Advance legendaris dan konsol genggam retro Nintendo](https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/13148759/jbareham_180924_ply0802_0029.jpg)

Dari sudut pandang bisnis korporasi raksasa asal Kyoto, taktik meneteskan game lama satu per satu bak cairan infus di ruang rawat inap ini tentu punya motif jelas: menjaga angka retensi pengguna agar terus memperpanjang iuran sewa tiap tahun. Jika seluruh pustaka terbaik langsung digelontorkan dalam satu hari, mereka khawatir pelanggan bakal lekas membatalkan langganan begitu rasa penasaran nostalgia tuntas terbayar.

Namun bagi para gamer yang tiap bulan rajin menyisihkan uang jajan untuk membayar tagihan akun keluarga, strategi ini terasa seperti ejekan terang-terangan. File mentah ROM game GBA rata-rata hanya berukuran delapan hingga tiga puluh dua megabyte—sebuah kapasitas yang hari ini bahkan lebih kecil ketimbang berkas stiker bergerak di aplikasi WhatsApp. Menahan deretan judul perangkat lunak berusia dua puluh tahun yang sudah lama balik modal sejak era milenium terasa kian kikir, apalagi biaya paket Expansion Pack mematok tarif hampir dua kali lipat dari paket dasar.

Taktik komersial semacam ini menguatkan skeptisisme publik terhadap kebijakan ekosistem tertutup pabrikan konsol Jepang tersebut, persis seperti keraguan yang mencuat saat [bos Nintendo berjanji Switch 2 tak naik harga](/ketika-bos-nintendo-berjanji-switch-2-tak-naik-harga-tapi-dompet). Di atas panggung presentasi humas, para petinggi gemar mengumandangkan janji ramah konsumen dan menjaga harga perangkat tetap terjangkau. Namun begitu pemain sudah terperangkap di dalam pagar ekosistem mereka, pintu monetisasi langganan diputar kencang-kencang tanpa memberi hak kepemilikan yang abadi.

Ketergantungan penuh pada server sewa digital ini kian memperjelas keprihatinan para pelestari arsip digital mengenai [nasib kaset game fisik yang mendekati liang lahat](/pemasok-chip-angkat-kaki-dan-nasib-kaset-game-fisik-yang-kian). Saat industri perlahan membunuh peredaran media fisik demi memangkas biaya pabrikasi, gamer tidak lagi benar-benar memiliki salinan game yang mereka beli. Kita hanya menyewa izin sementara untuk mengakses data di server cloud, yang sewaktu-waktu bisa dicabut sepihak saat kontrak lisensi kedaluwarsa atau ketika perusahaan memutuskan mematikan infrastruktur online konsol generasi lawas.

Ironi terbesarnya justru tersaji di ranah akar rumput. Di saat pelanggan resmi Nintendo Switch harus bersabar menanti remah-remah katalog lawas dengan membayar biaya tahunan ratusan ribu rupiah, anak-anak muda di tongkrongan warkop yang bermodalkan smartphone Android sejutaan sudah bisa menikmati seluruh katalog GBA dengan mulus. Lewat aplikasi emulator open-source gratisan, mereka bebas mengatur filter layar piksel, mempercepat animasi pertarungan, hingga menyimpan progres permainan kapan saja tanpa takut dicekik batas langganan.

Nintendo mungkin memegang hak cipta atas seluruh arsip nostalgia masa kecil kita, tetapi keserakahan memagari karya klasik di balik tembok sewa digital perlahan membuat layanan resmi mereka kalah memikat dibanding keleluasaan komunitas emulator akar rumput. Membayar mahal hanya untuk diberi jatah dua game jadul tiap enam bulan sekali bukanlah bentuk penghormatan warisan sejarah, melainkan siasat dagang usang yang menguji kesabaran dompet penggemar setianya.`
  },
  {
    title: "Ketika Internet Sedunia Bisa Mendadak Lumpuh Karena Senggolan Jangkar di Bawah Laut",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Infrastruktur Internet", "Kabel Bawah Laut", "Geopolitik", "Jaringan Komputer", "Sysadmin", "Keamanan Siber"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2026/11/Iranian-oil-tanker-and-flag-1152x648.jpg",
    imageAlt: "Kapal tanker minyak dan bendera Iran berlayar di dekat rute kabel serat optik bawah laut internasional",
    sourceUrl: "https://arstechnica.com/gadgets/2026/11/ships-loiter-near-subsea-cables-amid-irans-warnings-to-trump/",
    excerpt: "Ketegangan geopolitik di Selat Hormuz menempatkan kabel internet bawah laut sebagai sandera baru. Sysadmin warkop tahu persis bahwa dongeng awan komputasi serba canggih sejatinya cuma bertumpu pada pipa kaca rapuh di dasar samudra yang gampang terputus senggolan jangkar kapal.",
    content: `Para penginjil teknologi di seminar bisnis perkotaan sangat gemar mendengungkan kata 'cloud' seolah-olah seluruh peradaban digital kita melayang anggun di angkasa bebas hambatan. Di hadapan para calon investor berpakaian necis, mereka menggambarkan data center dan lalu lintas percakapan internet sebagai jejaring nirkabel ajaib yang tidak kasat mata, kebal terhadap gangguan fisik, dan selalu siap sedia dalam hitungan milidetik. Namun bagi siapa saja yang pernah berkeringat di lantai bawah tanah menjaga rak server, kita tahu persis bahwa dongeng komputasi awan itu adalah omong kosong pemasaran yang meninabobokan.

Pada kenyataannya, internet sedunia bukanlah awan uap air di langit, melainkan ribuan kilometer pipa serat optik setebal lengan manusia yang tergeletak pasrah di lumpur gelap dasar samudra. Lebih dari sembilan puluh lima persen lalu lintas data internasional—mulai dari percakapan obrolan instan, transaksi kliring perbankan, hingga video kucing lucu di beranda media sosial—mengalir melalui kabel kaca bawah laut yang melintasi palung sempit antarbenua.

Kerapuhan fisik tulang punggung peradaban modern itu kembali tersingkap ke permukaan pekan ini. Sebagaimana dilaporkan Ars Technica, armada kapal tanker dan kapal kargo dilaporkan mondar-mandir mencurigakan di atas koordinat jalur kabel bawah laut vital di perairan Timur Tengah, di tengah eskalasi ancaman militer Iran yang memperingatkan akan menyasar infrastruktur strategis internasional. Kawasan Selat Hormuz dan Laut Merah selama ini dikenal sebagai leher botol paling padat di dunia yang menampung belasan kabel serat optik utama penghubung benua Eropa, Asia, dan Afrika.

![Kapal tanker minyak dan bendera Iran berlayar di dekat rute kabel serat optik bawah laut internasional](https://cdn.arstechnica.net/wp-content/uploads/2026/11/Iranian-oil-tanker-and-flag-1152x648.jpg)

Bagi teknisi jaringan dan operator telekomunikasi, pemandangan kapal besar yang berdiam lama di zona kabel bawah laut adalah mimpi buruk paling nyata. Untuk melumpuhkan jalur komunikasi sebuah negara modern, seorang aktor sabotase tidak perlu repot-repot meluncurkan rudal balistik penembus benteng atau merancang malware komputer yang rumit. Cukup dengan menjatuhkan jangkar baja seberat belasan ton lalu menyeretnya di dasar laut sedalam beberapa ratus meter, untaian kaca pelindung sinyal optik bisa patah seketika seperti lidi kering.

Kontradiksi ini terasa sangat menggelikan jika disandingkan dengan histeria modal ventura Silicon Valley yang baru saja merayakan kabar saat [valuasi OpenAI melambung tinggi ke belasan kuadriliun rupiah](/ketika-openai-dihargai-belasan-kuadriliun-rupiah-sementara). Para pemodal ventura membakar puluhan miliar dolar demi membiayai impian kecerdasan buatan superpintar, tetapi mereka seolah lupa bahwa seluruh algoritma mutakhir tersebut akan langsung membisu tak berguna begitu kabel bawah laut di lepas pantai tersangkut rantai kapal barang berkarat.

Di panggung pertahanan siber global, korporasi dan birokrasi militer kerap membanggakan tembok api berlapis dan sertifikasi keamanan tingkat tinggi, situasi yang mengingatkan kita pada ironi memalukan saat [perusahaan forensik pelacak hacker sedunia ikut dibobol maling](/ketika-perusahaan-forensik-pelacak-hacker-sedunia-malah-ikut). Para konsultan keamanan sibuk menjual solusi enkripsi dan audit kode bernilai jutaan dolar, namun sering kali abai terhadap titik lemah paling mendasar: fisik infrastruktur komunikasi yang membentang tanpa penjagaan bersenjata di perairan internasional bebas.

Memperbaiki kabel serat optik yang putus di kedalaman laut bukanlah perkara memencet tombol restart di panel router kantor. Operasi perbaikan membutuhkan kapal reparasi khusus berteknologi robot penyelam yang jumlahnya di seluruh dunia bisa dihitung dengan jari. Proses pencarian ujung kabel yang robek, penyambungan kembali serat mikroskopis di atas dek kapal, hingga uji coba sinyal membutuhkan waktu berminggu-minggu di tengah ancaman cuaca buruk dan konflik maritim. Selama perbaikan berlangsung, jalur komunikasi harus dialihkan memutar ke kabel cadangan yang membuat koneksi lemot dan latensi jaringan bengkak tak keruan.

Dunia geopolitik modern mungkin masih terobsesi dengan adu senjata pemusnah massal dan satelit pengintai ruang angkasa. Namun bagi teknisi warkop yang sehari-hari berkutat dengan latensi ping dan colokan kabel ethernet, realitas perang masa kini jauh lebih sederhana: siapa pun yang menguasai jangkar kapal di atas jalur kabel serat optik bawah laut sesungguhnya memegang sakelar pemadam separuh denyut nadi perekonomian dunia.`
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
    }

    results.push({
      title: art.title,
      slug: pubResult.slug,
      status: pubResult.status,
      score: audit.score,
      wordCount,
      url: pubResult.url,
      byline: art.byline,
      dbSaved: pubResult.dbSaved,
      remotePublished: pubResult.remotePublished
    });
  }

  console.log("\n=================================================================");
  console.log("🎉 SELURUH ARTIKEL BATCH 13:00 WIB BERHASIL DITERBITKAN!");
  console.log("=================================================================\n");
  console.log(JSON.stringify(results, null, 2));
}

// Execute if run directly
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261107-1300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Failed:", err);
    process.exit(1);
  });
}
