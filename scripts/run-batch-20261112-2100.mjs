import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Jensen Huang Resmi Lengser dari Nvidia Bukti Tahta Raja AI Bisa Runtuh dalam Semalam",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Nvidia", "Jensen Huang", "Kecerdasan Buatan", "Industri Semikonduktor", "Skandal Korporasi", "Hardware"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/gettyimages-2301620664.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Jensen Huang mengenakan jaket kulit hitam khasnya di atas panggung konferensi teknologi",
    sourceUrl: "https://www.theverge.com/ai-artificial-intelligence/1031689/jensen-huang-fired-nvidia",
    excerpt: "Jensen Huang resmi menanggalkan jabatan CEO dan anggota dewan Nvidia usai terjerat skandal hubungan gelap ganda dengan pejabat internal dan terduga mata-mata. Jaket kulit hitam legendaris tak sanggup lagi menahan runtuhnya tahta sang penguasa chip AI dunia.",
    content: `Ada pemandangan lumrah di panggung konferensi teknologi internasional selama beberapa tahun belakangan: seorang pria paruh baya berjaket kulit hitam mengkilap berjalan santai di depan layar raksasa, disambut sorak-sorai histeris para petinggi korporasi Silicon Valley layaknya nabi pembawa wahyu digital masa depan. Di hadapan ribuan pasang mata pengembang piranti lunak dan juragan modal ventura, sosok Jensen Huang praktis diposisikan seperti raja tak bermahkota dari revolusi kecerdasan buatan. Dialah juragan yang mengendalikan pasokan chip pemroses grafis paling dicari di muka bumi, sosok yang membuat raksasa teknologi semacam Microsoft, Google, hingga Meta rela antre berbulan-bulan sambil menyodorkan cek bernilai ratusan triliun rupiah demi sekeranjang silikon ajaib. Namun jika ada satu pelajaran penting yang kerap diajarkan oleh drama panggung bisnis warkop, itu adalah kenyataan bahwa semakin tinggi menara gading yang Anda bangun di atas kepulan sensasi kecerdasan buatan, semakin dahsyat pula dentuman yang tercipta saat fondasi moralnya ambruk dalam semalam.

Kabar mengejutkan yang mengguncang panggung komputasi global itu akhirnya meletus tanpa aba-aba. Sebagaimana dicatat oleh jurnalis Hayden Field dalam laporan terkininya di The Verge, dewan direksi Nvidia secara resmi mengumumkan pengunduran diri Jensen Huang dari posisinya sebagai CEO, Presiden, sekaligus anggota dewan komisaris, yang berlaku efektif saat ini juga. Pengumuman pahit yang dirilis menyusul rapat darurat dewan direksi pada Rabu malam itu menuntaskan masa dinas panjang selama tiga puluh tiga tahun bagi sang pendiri yang telah memimpin perusahaan semikonduktor tersebut sejak pertama kali berdiri pada 1993 silam. Untuk mengisi kekosongan nakhoda kapal, dewan direksi langsung menunjuk sang direktur keuangan, Colette Kress, sebagai CEO interim, sembari mengangkat mantan bos Synopsys Harvey C. Jones sebagai ketua dewan komisaris independen pertama sepanjang sejarah perseroan.

Langkah pencopotan drastis ini menjadi ujung dari lingkaran prahara pribadi yang menggelinding cepat menjadi ancaman keamanan nasional. Persoalan bermula ketika laporan investigasi mendalam The New York Times membongkar keterlibatan asmara rahasia antara Huang dengan Alice Huang, salah seorang petinggi Megaspeed, perusahaan penyedia komputasi awan asal Singapura yang notabene adalah klien borongan Nvidia. Ironisnya, perempuan tersebut diduga kuat oleh aparat intelijen federal sebagai mata-mata Kementerian Keamanan Negara Tiongkok yang bertugas mengorek rahasia arsitektur chip AI teranyar sekaligus memuluskan celah ekspor teknologi ke Beijing. Belum sempat publik mencerna pengakuan khilaf Huang yang meminta maaf kepada keluarga dan para pemegang saham, laporan lanjutan dari The Wall Street Journal kembali menampar kredibilitas sang juragan: Huang tercatat menjalin hubungan terlarang kedua dengan Kimberly Powell, wakil presiden bidang kesehatan Nvidia yang merupakan anak buah langsung di bawah komandonya.

![Jensen Huang mengenakan jaket kulit hitam khasnya di atas panggung konferensi teknologi](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/gettyimages-2301620664.jpg?quality=90&strip=all&crop=0,0,100,100)

Bagi komunitas pegiat hardware dan pekerja IT yang saban hari mengamati tingkah polah raksasa teknologi, lengsernya Huang membuka tabir kemunafikan yang selama ini terselubung rapi di balik retorika pemujaan inovasi. Selama puncak kegilaan AI berlangsung, ekosistem teknologi seolah membiarkan satu entitas memegang kendali monopoli mutlak atas masa depan komputasi dunia. Korporasi diperlakukan kebal kritik hanya karena produknya laku keras, sementara para eksekutifnya dibiarkan bersikap arogan menentukan siapa yang berhak mendapatkan pasokan akselerator dan siapa yang harus gigit jari di pinggir jalan. Gejala keretakan di ruang internal petinggi ini sesungguhnya sudah mulai tercium ketika [kabar dewan direksi yang mulai gelisah](/dewan-direksi-nvidia-bersiap-depak-jensen-huang-saat-jaket) merebak ke permukaan, di mana para investor kakap mulai menyadari bahwa figur pemimpin yang terlalu kultus justru menjadi bom waktu terbesar bagi kelangsungan bisnis puluhan kuadriliun rupiah.

Di kalangan kawan-kawan warkop yang terbiasa merakit komputer sendiri di kamar kontrakan, kejatuhan mendadak ini memicu senyum getir yang campur aduk. Masih segar dalam ingatan bagaimana gamer biasa dan kreator konten grafis dipaksa membeli kartu grafis dengan harga selangit selama bertahun-tahun karena jalur produksi pabrik diprioritaskan demi memanjakan pasar server data center korporat. Suara konsumen akar rumput yang setia membesarkan nama GeForce sejak era sembilan puluhan diabaikan begitu saja demi mengejar valuasi saham kilat dari tren chatbot dan model generatif. Kini, ketika sang nakhoda terjerembap bukan karena kalah bersaing dalam litografi silikon melainkan karena skandal etika personal di bilik tertutup, dunia diingatkan kembali bahwa keangkuhan pasar modal sering kali dibutakan oleh puja-puji kosong yang mengabaikan akal sehat tata kelola korporasi.

Masa depan industri semikonduktor pasca-kepergian figur sentralnya kini berada di persimpangan jalan yang penuh turbulensi. Kehilangan sosok pendiri yang telah menjadi wajah tunggal perusahaan selama tiga dekade jelas bukan perkara sepele bagi ribuan karyawan dan mitra bisnis global yang terlanjur terbiasa digerakkan oleh karisma pribadi sang maestro. Namun, transisi kepemimpinan darurat kepada figur finansial seperti Colette Kress membuktikan bahwa roda bisnis triliunan dolar tidak akan pernah sudi berhenti berputar hanya demi meratapi satu nama. Jaket kulit hitam mengkilap mungkin berhasil membius panggung auditorium selama bertahun-tahun, tetapi integritas kepemimpinan tetaplah mata uang paling mahal yang tak bisa ditebus bahkan dengan seluruh tumpukan chip AI di kolong langit.`
  },
  {
    title: "Redesain Toko Humble Bundle Malah Buang Fitur 2FA Bikin Akun Pengguna Rawan Dibobol",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Humble Bundle", "Keamanan Siber", "PC Gaming", "Industri Game", "Toko Digital"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/h5FQugqRYn3eeekkWheUzT-1920-80.jpg",
    imageAlt: "Tampilan antarmuka toko digital Humble Bundle di layar komputer dengan logo khas berwarna merah",
    sourceUrl: "https://www.pcgamer.com/software/platforms/humble-bundles-new-redesign-inexplicably-removes-2-factor-authentication-dramatically-weakening-account-security/",
    excerpt: "Humble Bundle memamerkan antarmuka baru yang diklaim lebih segar dan modern, namun secara mengejutkan mencopot total proteksi autentikasi dua faktor (2FA). Pengguna lama kini bisa login hanya dengan password biasa tanpa konfirmasi kode keamanan.",
    content: `Bagi siapa saja yang menghabiskan masa mudanya di depan layar monitor komputer, nama Humble Bundle memiliki tempat yang sangat istimewa di sudut hati. Masih lekat dalam ingatan kolektif kita ketika lebih dari satu dekade silam, platform ini hadir layaknya juru selamat berkantong tebal bagi para gamer berkantong tipis. Dengan konsep bayar sesuka hati yang hasilnya disumbangkan untuk misi kemanusiaan, siapa pun bisa memborong belasan game independen jempolan hanya bermodalkan recehan sisa uang saku kuliah. Kala itu, Humble Bundle dipandang sebagai simbol perlawanan paling murni terhadap keserakahan penerbit arus utama: sebuah ruang transaksi yang hangat, jujur, dan menaruh rasa hormat setinggi langit kepada komunitas penggemar game PC.

Namun romantisme masa lalu itu perlahan memudar ketika platform ini dicaplok konglomerat media dan dipaksa memeras margin keuntungan korporasi. Kekecewaan terbaru yang membikin para penggemar setia mengelus dada kini hadir bukan dalam bentuk kenaikan harga paket game, melainkan melalui blunder teknis yang sungguh di luar nalar akal sehat. Sebagaimana dicatat oleh jurnalis Josh Wolens dalam laporannya di PC Gamer pekan ini, Humble Bundle baru saja menggulirkan pembaruan desain situs web secara besar-besaran. Alih-alih menghadirkan pengalaman belanja yang makin aman dan nyaman, perombakan antarmuka yang konon serba estetik tersebut justru mencabut total mekanisme autentikasi dua faktor alias two-factor authentication (2FA).

Kekacauan yang ditimbulkan oleh keputusan ganjil ini sungguh membikin kening berkerut. Para pengguna baru yang hendak mendaftarkan diri kini mendapati ketiadaan menu untuk mengaktifkan sistem keamanan berlapis tersebut. Yang jauh lebih mengerikan, jutaan pelanggan setia yang selama bertahun-tahun telah mengunci akun mereka menggunakan aplikasi autentikator di smartphone mendadak bisa melenggang masuk hanya dengan mengetikkan alamat email dan kata sandi biasa. Pada titik mana pun dalam proses login antarmuka baru tersebut, sistem tidak pernah lagi menagih kode verifikasi enam digit. Sebuah fitur keselamatan paling fundamental dalam peradaban internet modern mendadak raib begitu saja, seolah-olah proteksi akun konsumen dianggap tak lebih dari sekadar baris kode usang yang layak dibuang ke tempat sampah.

![Tampilan antarmuka toko digital Humble Bundle di layar komputer dengan logo khas berwarna merah](https://cdn.mos.cms.futurecdn.net/h5FQugqRYn3eeekkWheUzT-1920-80.jpg)

Tingkat keparahan dari kecerobohan ini terasa semakin ironis ketika kita menengok halaman bantuan pelanggan milik Humble Bundle sendiri. Di laman tanya-jawab resmi, pihak pengelola toko masih memajang artikel panduan yang dengan gagah mengimbau seluruh pengguna untuk rajin memanfaatkan fitur keamanan dua faktor demi menjaga akun tetap kebal dari aksi peretasan. Sementara di etalase nyata, pintu gerbang pengaman tersebut sudah dicopot paksa oleh tim pengembang tanpa pengumuman resmi apa pun. Bagi toko digital yang menyimpan ribuan inventaris berharga—mulai dari sambungan kartu kredit, akun dompet digital yang tertaut otomatis, hak akses langganan bulanan Humble Choice, hingga tumpukan kode lisensi game yang belum sempat diklaim ke peluncur Steam—ketiadaan 2FA adalah undangan terbuka bagi para pencuri data untuk berpesta pora di tengah malam.

Di tongkrongan warkop tempat anak-anak muda berkumpul sehabis mabar semalaman, obrolan seputar hilangnya fitur pengaman ini langsung memicu imbauan darurat antar-kawan. Komunitas gamer di berbagai forum daring bahkan mulai ramai-ramai menyarankan pemilik akun untuk segera menghapus seluruh data kartu pembayaran yang tersimpan di profil mereka demi mencegah transaksi liar yang tak diinginkan. Kecerobohan pengelola platform ini mengingatkan kita pada betapa rapuhnya nasib pemain yang harus ekstra waspada merawat [koleksi akun digital yang dibangun bertahun-tahun](/akun-steam-sembilan-tahun-resmi-dianggap-dewasa-jadi-tamparan) dari aneka risiko malfungsi sistem, di mana satu kelalaian kecil dari pengembang web bisa memusnahkan aset digital bernilai jutaan rupiah dalam sekejap mata.

Sangat sulit dipahami bagaimana sebuah anak perusahaan media raksasa sekelas IGN Entertainment bisa meloloskan sistem transaksi moneter ke ruang publik tanpa melewati uji kepatuhan keamanan yang ketat. Mengorbankan ketahanan akun pengguna demi mengejar estetika visual antarmuka yang bersih dan minimalis adalah cermin dari cara pandang picik para eksekutif yang lebih memedulikan kemasan luar ketimbang substansi keselamatan konsumen. Ketika sebuah toko daring dengan reputasi belasan tahun memperlakukan proteksi data penggunanya seperti fitur opsional yang gampang dilupakan saat ganti seragam desain, ada kewaspadaan sehat yang patut dihidupkan kembali di benak para penikmat game PC.

Tampilan situs web baru boleh saja terlihat lebih kinclong dan sedap dipandang mata di layar monitor, tetapi toko tanpa gembok pintu tetaplah sarang empuk bagi para pencuri yang siap menguras seisi rak saat penjaga toko sedang terlelap tidur. Sebelum tim pengembang mereka sadar dan memasang kembali gerbang autentikasi yang dibuang, ada baiknya kita kembali mengingat aturan bertahan hidup paling purba di rimba internet: jangan pernah menaruh nomor kartu kredit di etalase toko yang mengunci pintunya saja masih belum becus.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 21:00 WIB)");
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
  console.log(`🎉 Batch 21:00 Selesai! Berhasil menerbitkan ${results.length} artikel.`);
  console.log("=================================================================\n");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261112-2100.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
