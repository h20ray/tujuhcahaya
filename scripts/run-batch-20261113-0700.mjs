import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Medsos Baru Whoop Wajibkan Syarat Detak Jantung Bukti Paranoia Bot AI Makin Absurd",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Whoop", "Media Sosial", "Privasi Digital", "Kebugaran", "Teknologi", "Kecerdasan Buatan"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/whoop-humans-launch-screenshots-trio-2.jpeg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Tangkapan layar antarmuka aplikasi jejaring sosial Whoop Humans yang menampilkan verifikasi biometrik detak jantung pengguna",
    sourceUrl: "https://www.theverge.com/gadgets/1032630/whoop-humans-social-network",
    excerpt: "Whoop resmi meluncurkan jejaring sosial Whoop Humans dengan syarat masuk wajib memiliki detak jantung terverifikasi dari gelang kebugaran. Sebuah inovasi absurd yang membuktikan betapa mahalnya harga membuktikan diri sebagai manusia di tengah ketakutan massal terhadap bot AI.",
    content: `Di tongkrongan warung kopi pinggir jalan, kita sering menertawakan kelakuan orang-orang yang rela melakukan apa saja demi mendapatkan pengakuan status sosial di internet. Zaman dulu, untuk membuat akun media sosial baru, syaratnya sangat sederhana dan bersahaja: Anda cukup memasukkan alamat email gratisan atau nomor kartu prabayar seharga sepuluh ribu rupiah yang dibeli di konter pulsa emperan jalan. Semua orang bisa masuk ke gelanggang percakapan maya tanpa harus ditanya garis keturunan atau isi saldo rekening. Namun seiring berjalannya kegilaan dunia digital, pintu masuk ke ruang publik tersebut perlahan dipasangi jeruji kawat berduri dan mesin kasir otomatis.

Komersialisasi identitas digital itu dimulai saat Elon Musk mematok tarif delapan dolar per bulan demi selembar centang biru di Twitter, yang kemudian latah ditiru oleh Mark Zuckerberg lewat layanan berbayar Meta Verified. Pengguna dipaksa membayar biaya bulanan dan mengunggah kartu identitas resmi demi membuktikan bahwa mereka bukan akun siluman hasil kloningan kecerdasan buatan. Namun jika Anda mengira pemerasan identitas berkedok biaya administrasi itu sudah menjadi puncak kegilaan Silicon Valley, Anda jelas perlu berkenalan dengan manuver teranyar dari industri perangkat kebugaran pintar.

Sebagaimana dicatat dalam laporan investigasi The Verge pekan ini, perusahaan tali kebugaran pintar asal Boston, Whoop, secara resmi meluncurkan platform jejaring sosial mandiri yang diberi nama Whoop Humans. Di dalam aplikasi ini, pengguna bisa membagikan metrik catatan olahraga, pamer capaian pembakaran kalori, hingga mengunggah foto aktivitas harian lengkap dengan takarir mirip fitur cerita Instagram Stories. Namun di balik tampilan antarmukanya yang serba necis dan penuh nuansa gaya hidup atletis, ada satu syarat mutlak yang membikin bulu kuduk merinding: setiap anggota wajib memiliki status detak jantung terverifikasi alias *verified heartbeat* langsung dari sensor gelang Whoop yang terpasang di tubuh.

Mekanisme verifikasi biologis ini dirancang sangat ketat tanpa kompromi. Sensor optik di bagian bawah tali kain Whoop akan terus membaca denyut pembuluh darah mikro di pergelangan tangan pengguna secara seketika. Bila sistem mendeteksi tidak adanya pompa denyut darah dari jantung manusia hidup, Anda tidak akan pernah diizinkan membuat postingan atau menyematkan komentar di linimasa. Pihak manajemen perusahaan dengan bangga mengklaim bahwa kebijakan radikal ini adalah solusi paling mutakhir untuk menciptakan benteng pertahanan digital yang seratus persen steril dari serbuan akun bot cerdas, pendengung bayaran, dan manipulator opini publik yang belakangan mengotori ruang maya kita.

![Tangkapan layar antarmuka aplikasi jejaring sosial Whoop Humans yang menampilkan verifikasi biometrik detak jantung pengguna](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/whoop-humans-launch-screenshots-trio-2.jpeg?quality=90&strip=all&crop=0,0,100,100)

Sekilas mendengar paparan humas tersebut, orang-orang yang sudah muak melihat kolom komentar dibanjiri spam bot iklan obat pelangsing mungkin bakal spontan bertepuk tangan girang. Namun mari kita gunakan sedikit akal sehat untuk membedah kontradiksi kapitalistik di balik inovasi ini. Gelang Whoop bukanlah perangkat medis murah yang dibagikan secara cuma-cuma oleh puskesmas kelurahan. Perangkat ini tidak memiliki layar digital dan dijual dengan skema langganan keanggotaan wajib yang biayanya menembus ratusan ribu rupiah setiap bulan. Artinya, agar eksistensi Anda diakui sah sebagai manusia bernyawa di platform tersebut, Anda diwajibkan menyetor upeti bulanan secara rutin ke rekening korporasi teknologi asing.

Menjadikan denyut nadi manusia sebagai komoditas tiket masuk jejaring sosial adalah bentuk paranoia termahal yang pernah diciptakan industri teknologi konsumen. Di satu sisi, korporasi terus menakut-nakuti publik dengan narasi distopia bahwa internet kini sudah dikuasai oleh pasukan hantu tak kasatmata berbasis komputasi cerdas. Di sisi lain, mereka menyodorkan solusi instan yang mewajibkan warga menyerahkan data biologis tubuh paling intim ke dalam server komputasi awan. Pola pembajakan privasi atas nama kenyamanan dan fitur canggih semacam ini terasa sangat akrab jika kita menengok polemik [kacamata pintar yang diam-diam merekam wajah orang di ruang publik](/kacamata-ai-gemini-berkedok-ramah-privasi-padahal-rekam-muka), di mana batas sakral antara kedaulatan fisik manusia dan mesin korporat sengaja dikaburkan secara perlahan.

Data biometrik detak jantung bukanlah sekadar angka statistik hampa. Ritme pompa darah per menit menyimpan informasi akurat mengenai tingkat stres psikologis, kondisi kesehatan jantung, pola tidur malam, hingga kecenderungan penyakit kronis seseorang. Ketika data tersebut dihubungkan langsung ke profil jejaring sosial dan dibagikan ke lingkaran pertemanan digital, kita sesungguhnya sedang membangun sistem panoptikon sukarela yang menelanjangi privasi diri sendiri. Orang-orang kelas menengah perkotaan rela membayar mahal demi diikatkan sensor pengawas di pergelangan tangan, lalu merasa superior di hadapan pengguna media sosial gratisan karena profil mereka berdenyut secara riil.

Bila standar abnormal ini terus dinormalisasi atas dalih keamanan identitas, kita patut waswas memikirkan masa depan interaksi digital sepuluh tahun ke depan. Bukan mustahil suatu hari nanti orang yang ingin mengunggah status keluhan di forum komunitas harus melampirkan rekaman elektrokardiogram, atau anak kuliahan yang mau bergabung ke grup obrolan tugas kampus diwajibkan menyertakan hasil tes urine resmi laboratorium. Menatap kegilaan fitur Whoop Humans menyadarkan kita pada kenyataan getir masyarakat modern: di era serbuan algoritma buatan, membuktikan diri sebagai manusia bernyawa ternyata membutuhkan biaya langganan yang jauh lebih mahal daripada sekadar menghirup udara di dunia nyata.`
  },
  {
    title: "Studio Palworld Liburkan Karyawan Demi GTA 6 Bukti Bos Jujur Lebih Berfaedah",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Palworld", "Pocketpair", "GTA 6", "Industri Game", "Budaya Kerja", "Video Game"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/qssUN2VdpiBrvmcfvqWGdK-1920-80.jpg",
    imageAlt: "Ilustrasi karakter game aksi Grand Theft Auto 6 dan logo studio Pocketpair kreator Palworld",
    sourceUrl: "https://www.pcgamer.com/games/grand-theft-auto/palworld-developer-pocketpair-gives-employees-time-off-for-a-5-day-business-trip-in-vice-city-when-gta-6-launches/",
    excerpt: "Pocketpair studio pencipta Palworld resmi mengumumkan kebijakan meliburkan seluruh staf selama 5 hari saat peluncuran GTA 6. Sebuah langkah jujur yang menampar kemunafikan budaya lembur industri game korporat yang kerap memperlakukan pekerja seperti mesin pabrik.",
    content: `Di lingkungan kantor mana pun, dari lantai perkantoran megah kawasan segitiga emas hingga studio rintisan sempit di ruko pinggir rel, ada satu bentuk sandiwara massal yang nyaris selalu dimainkan tiap kali ada peristiwa budaya pop raksasa meledak di dunia nyata. Skenarionya sangat mudah ditebak dan berulang dari tahun ke tahun: ketika laga final Piala Dunia dimulai, konser musisi pujaan digelar, atau sekuel video game legendaris resmi dilepas ke pasaran, mendadak puluhan karyawan terserang wabah sakit misterius. Ada yang tiba-tiba izin tidak masuk karena asam lambung kambuh, ada yang mendadak harus mengantar kakek berobat, atau yang paling sering, fisik mereka duduk mematung menatap lembar kerja Excel di meja kantor padahal separuh jiwanya sedang bertualang bebas di dunia lain.

Semua orang pura-pura bekerja keras, para manajer pura-pura percaya dengan surat izin dokter klinik, dan hasil pekerjaan kuartalan tetap saja berakhir berantakan tanpa arah. Namun ketimbang membiarkan drama kemunafikan massal itu mencoreng produktivitas studio mereka, manajemen perusahaan pengembang game asal Tokyo, Pocketpair, justru mengambil jalur kejujuran ekstrem yang membikin gempar industri hiburan interaktif global.

Sebagaimana dicatat dalam laporan PC Gamer pekan ini, sang kreator di balik fenomena game Palworld tersebut secara resmi mengumumkan kebijakan meliburkan seluruh staf dan karyawannya selama lima hari kerja penuh tepat pada hari peluncuran Grand Theft Auto 6. Yang membikin publik tertawa geli sekaligus menaruh respek tinggi, surat edaran resmi perusahaan tersebut tidak malu-malu membungkus cuti massal tersebut sebagai agenda resmi bernama perjalanan dinas lima hari ke kota Vice City. Manajemen sadar betul bahwa memaksa para pemrogram kode dan perancang animasi duduk di depan komputer kantor saat game paling diantisipasi sedunia itu meluncur adalah perbuatan yang sia-sia dan melawan kodrat kemanusiaan.

Langkah Pocketpair ini terasa sangat menyegarkan sekaligus menjadi tamparan telak bagi wajah industri video game kelas kakap yang belakangan makin membusuk oleh budaya kerja beracun. Di studio penerbit raksasa Barat, kita sudah terlalu kenyang disuguhi cerita getir tentang praktik kerja lembur paksa tanpa ampun yang merusak kesehatan fisik para kreator muda demi mengejar tenggat rilis laporan pemegang saham Wall Street. Mentalitas korporasi yang dingin ini tampak begitu menyedihkan jika dibandingkan dengan pemandangan ironis saat [bos Xbox sibuk merayakan ulang tahun sambil memamerkan mesin AI saat ribuan developer habis didepak](/bos-xbox-rayakan-ultah-pamer-mesin-ai-saat-ribuan-developer-habis), sebuah potret suram tentang bagaimana studio besar kerap memandang talenta manusia hanya sebagai pos anggaran biaya yang bisa dipotong sesuka hati.

![Ilustrasi karakter game aksi Grand Theft Auto 6 dan logo studio Pocketpair kreator Palworld](https://cdn.mos.cms.futurecdn.net/qssUN2VdpiBrvmcfvqWGdK-1920-80.jpg)

Keputusan Pocketpair untuk berdamai dengan kenyataan membuktikan pemahaman mendalam mereka terhadap psikologi orang-orang kreatif. Para perancang mekanisme permainan, penulis narasi, dan seniman tekstur visual pada dasarnya adalah penggemar berat game sejati yang tumbuh besar bersama stik konsol di tangan mereka. Mengharapkan seorang gamer garis keras bisa berkonsentrasi membenahi galat sistem kode di hari ketika Rockstar Games membuka pintu gerbang dunia fiksi teranyarnya adalah lelucon yang tidak lucu. Dengan memberikan hak cuti resmi berbayar tanpa potongan gaji, manajemen justru membebaskan pekerjanya dari rasa bersalah, mempererat ikatan kekeluargaan tim, dan memastikan mereka kembali ke meja kerja dengan tabung inspirasi yang penuh setelah menuntaskan dahaga rasa penasaran mereka.

Dampak kultural peluncuran GTA 6 memang bukan fenomena sepele yang bisa diabaikan oleh para petinggi perusahaan mana pun. Gelombang antusiasme massa yang meluap-luap ini tercermin jelas dari berbagai dinamika sebelumnya, termasuk ketika [lembaga sensor Korea Selatan kelabakan mau mencekal GTA 6 karena ketakutan moral](/lembaga-sensor-korea-sempat-mau-cekal-gta-6-cuma-gara-gara-takut) beberapa waktu silam. Ketika sebuah karya seni interaktif sanggup menggetarkan sendi birokrasi negara maju dan menyedot perhatian puluhan juta pasang mata lintas benua, pura-pura bersikap seolah hari peluncuran tersebut hanyalah hari kerja biasa adalah bentuk penolakan terhadap realitas zaman.

Bagi para pekerja kantoran di tanah air yang kerap dipaksa menelan pil pahit budaya kerja lembur tanpa bayaran lembur memadai, keberanian studio independen Jepang ini adalah impian indah yang teramat mewah. Di hadapan gempuran tuntutan produktivitas tanpa henti dan target korporat yang kian mencekik leher, kita disadarkan bahwa kepemimpinan yang berjiwa manusia selalu tahu kapan harus menginjak rem dan mengistirahatkan pasukannya. Toh, di hadapan daya pikat megah lampu neon kota Vice City, seorang pimpinan perusahaan yang waras paham betul satu hal mendasar: jauh lebih mulia membiarkan anak buah bermain game dengan senyum merekah di rumah daripada melihat mereka pura-pura sibuk mengetik kibor sambil menyembunyikan jendela siaran langsung di balik berkas laporan kerja.`
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
      markAsSeen(art.sourceUrl);
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`✨ BATCH 07:00 WIB SELESAI: ${results.length} artikel terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261113-0700.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Batch Runner Error:", err);
      process.exit(1);
    });
}
