import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Band Metal Tulungagung Mengguncang Panggung KEXP Tanpa Perlu Menjilat Ibu Kota",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Numeron", "KEXP", "Post-Black Metal", "Musik Ekstrem", "Musisi Indie", "Tulungagung", "Skena Musik"],
    imageUrl: "https://rri-portal-app-assets.obs.ap-southeast-4.myhuaweicloud.com/upload/berita/image/manado/thumbs/xl_1793953547549693_cfaeffd954_berita_manado.webp",
    imageAlt: "Penampilan band post-black metal Numeron asal Tulungagung dalam sesi rekaman internasional Live on KEXP",
    sourceUrl: "https://rri.co.id/manado/hiburan/2876264/numeron-bawa-post-black-metal-indonesia-ke-kexp",
    excerpt: "Dari sudut tenang Tulungagung di Jawa Timur, unit post-black metal Numeron resmi mencatatkan sejarah di panggung siaran Live on KEXP. Di saat industri musik ibu kota sibuk memoles pop seragam dan mengejar tren TikTok, musisi akar rumput daerah membuktikan distorsi pekat bernuansa kosmik sanggup menembus kancah internasional tanpa perlu mengemis panggung Jakarta.",
    content: `Kalau Anda sempat singgah di sudut-sudut warung kopi Tulungagung pada malam hari, ritme kehidupan daerah di selatan Jawa Timur ini biasanya mengalir santai tanpa pretensi. Di tengah semilir angin perbukitan dan deru knalpot motor warga yang pulang bertani atau mengurus sentra marmer, rasanya sulit membayangkan sebuah dentuman drum berkecepatan blast-beat dan jeritan vokal melengking bakal lahir dari sana. Namun bagi siapa saja yang memahami denyut subkultur bawah tanah, daerah pinggiran justru kerap menjadi kawah candradimuka paling subur bagi karya-karya seni yang jujur dan tak kenal kompromi.

Kejutan kultural itu meledak ke permukaan global pekan ini. Sebagaimana dicatat dalam laporan RRI dan rilis resmi AXEAN Festival, unit pengusung genre post-black metal dan blackgaze asal Tulungagung bernama Numeron resmi melakoni debut bersejarah mereka di panggung bergengsi Live on KEXP. Bagi pendengar musik alternatif di seantero jagat, sesi siaran langsung radio asal Seattle, Amerika Serikat, tersebut adalah kiblat independen paling sakral tempat nama-nama besar dunia membuktikan kelihaian musikalitas mereka secara telanjang. Dalam rekaman sesi khusus di Bali, kuartet Jawa Timur ini melibas lima komposisi andalan mereka, termasuk "Triumph Of Death" dan "Cosmic Symphony", dengan atmosfer distorsi gitar yang megah sekaligus melankolis.

Pencapaian Numeron ini menyodorkan sentilan yang sangat menohok ke muka industri hiburan arus utama kita. Selama berpuluh-puluh tahun, ekosistem musik komersial Indonesia seakan mengunci dogma usang bahwa pintu kesuksesan mutlak harus melewati gerbang Jakarta. Musisi daerah dicekoki ilusi bahwa mereka harus merantau ke ibu kota, nongkrong di lingkaran produser parlente, lalu memoles karya mereka agar pas dengan cetakan lagu pop menye-menye yang gampang diputar algoritma radio komersial. Jika tidak mau berkompromi dengan selera pasar yang seragam itu, karya mereka dipandang sebelah mata sebagai tontonan pinggiran yang mustahil menghasilkan apa-apa.

Dogma sempit tersebut kian terasa basi ketika kita melihat bagaimana panggung-panggung formal di Jakarta belakangan justru semakin elitis dan berjarak dari keresahan anak muda. Masih lekat dalam ingatan kita bagaimana [panggung megah AMI Awards yang serba berkilau](/ketika-panggung-megah-ami-awards-disengat-salam-tiga-jari-dan) kerap disorot karena sibuk membagi karpet merah untuk lingkaran pesohor elite, sementara para pekerja kreatif di daerah berjuang sendirian tanpa sokongan promosi. Jurang ketimpangan ini kian menganga tatkala kita mendapati [musisi yang pusing memikirkan royalti recehan](/ketika-lagu-ciptaan-menteri-borong-piala-ami-awards-saat-musisi) di tengah karut-marut birokrasi hak cipta yang lamban berbenah.

![Penampilan band post-black metal Numeron asal Tulungagung dalam sesi rekaman internasional Live on KEXP](https://rri-portal-app-assets.obs.ap-southeast-4.myhuaweicloud.com/upload/berita/image/manado/thumbs/xl_1793953547549693_cfaeffd954_berita_manado.webp)

Di tengah kemandekan logika industri korporat itu, Numeron justru memilih jalur sunyi. Mengusung konsep eksplorasi kosmik dan refleksi spiritual alam semesta sejak terbentuk pada tahun 2020, mereka merawat aransemen lagu yang memadukan raungan distorsi ekstrem dengan petikan nada yang tenang dan kontemplatif. Mereka tidak butuh polesan studio rekaman berharga ratusan juta rupiah milik konglomerat Jakarta untuk memikat kurator musik internasional sekelas Chris Sanley dari KEXP. Musik mereka berbicara sendiri lewat internet, menyusup ke telinga kurator lintas benua murni karena kedalaman rasa dan karakter suara yang otentik.

Lompatan dari bilik latihan sederhana di Tulungagung menuju katalog siaran radio Seattle adalah tamparan keras bagi siapa saja yang masih menganggap musik daerah kelas dua. Di era ketika internet menghubungkan telinga pendengar dari gang sempit pinggiran Jawa hingga kafe-kafe di sudut benua Amerika, musisi akar rumput tidak lagi butuh restu para cukong industri ibu kota untuk mengabarkan keberadaannya. Kualitas aransemen yang digarap dengan keringat dan kejujuran nurani akan selalu menemukan jalannya sendiri, bahkan ketika ia dinyanyikan lewat lengkingan parau musik cadas.`
  },
  {
    title: "Ketika Pengguna HP Pasang Mode Pesawat Sambil Berharap Baterai Penuh Bak Keajaiban",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Smartphone", "Baterai HP", "Mode Pesawat", "Fast Charging", "Gadget", "Sysadmin", "Tips Gadget"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2026/05/23/WhatsApp-Image-2026-05-22-at-22.09.38.jpeg",
    imageAlt: "Pengisian daya baterai smartphone menggunakan kabel charger USB Type-C di meja kerja",
    sourceUrl: "https://www.antaranews.com/berita/5833071/benarkah-mode-pesawat-bisa-percepat-pengisian-daya-hp",
    excerpt: "Kebiasaan mengaktifkan mode pesawat saat mengecas HP sering dianggap jurus pamungkas bikin baterai lekas penuh. Dalam obrolan warkop atau kepanikan mengejar kereta, trik ini diyakini bekerja ajaib, padahal secara arsitektur daya listrik pengaruhnya cuma mempercepat beberapa menit sembari memutus seluruh komunikasi darurat.",
    content: `Pemandangan orang panik mencari colokan listrik di sudut stasiun kereta atau di kolong meja warkop sudah menjadi pemandangan harian yang lumrah bagi masyarakat perkotaan. Saat indikator baterai di sudut layar ponsel pintar mendadak berubah merah dan berkedip di angka lima persen, detak jantung rasanya berdegup dua kali lebih kencang ketimbang saat ditegur atasan di kantor. Dalam situasi darurat semacam itu, ketika waktu yang tersisa sebelum kereta meluncur tinggal hitungan belasan menit, refleks jari jemari kita hampir pasti melakukan satu ritual keramat: menyapu bilah notifikasi ke bawah lalu mengetuk ikon pesawat terbang.

Mitos bahwa mengaktifkan mode pesawat (*airplane mode*) sanggup melipatgandakan kecepatan pengisian baterai sudah lama beredar bak resep jamu mujarab di grup obrolan keluarga. Sebagaimana dicatat dalam ulasan teknis Antara Tekno pekan ini, trik tersebut memang bukan sepenuhnya isapan jempol, tetapi efektivitas aslinya sering kali dibesar-besarkan secara berlebihan. Mematikan antena seluler memang mengurangi beban kerja perangkat keras ponsel, tetapi mengira baterai yang butuh dua jam bakal langsung terisi penuh dalam tempo tiga puluh menit adalah lamunan kosong.

Secara teknis arsitektur hardware, saat mode pesawat diaktifkan, modul baseband modem yang bertugas mencari sinyal pemancar BTS, menyambungkan jaringan 5G, serta memindai pemancar Wi-Fi dan Bluetooth memang dipaksa tertidur. Dalam kondisi sinyal pas-pasan di pelosok atau di ruang bawah tanah, modem ponsel memang rakus menyedot arus listrik hingga beberapa ratus miliwatt demi mempertahankan koneksi data. Menyetop pencarian sinyal liar tersebut memang menyisakan lebih banyak arus listrik yang masuk ke sel baterai, namun selisih waktu pengisian total yang didapat dalam pengujian riil rata-rata hanyalah berkisar antara lima hingga sepuluh menit saja.

Angka penghematan beberapa menit itu seketika terasa konyol jika dibenturkan dengan risiko kehilangan panggilan telepon penting dari keluarga atau notifikasi darurat kantor yang ikut terputus. Apalagi di era pengisian daya cepat (*fast charging*) modern yang sanggup mengalirkan daya puluhan hingga seratus watt, faktor penentu kecepatan mengecas sama sekali bukan terletak pada aktif atau tidaknya antena seluler. Musuh terbesar dari proses pengisian daya baterai adalah temperatur panas. Ketika kita mengecas ponsel di atas kasur busa atau sambil membiarkan casing karet tebal terpasang, sistem manajemen daya (*power IC*) ponsel otomatis memangkas voltase masuk demi mencegah kebakaran sirkuit.

Kerapuhan logika pengguna dalam memahami perangkat keras ini memperlihatkan fenomena serupa dengan [kebiasaan serampangan memperlakukan memori ponsel pintar](/ketika-factory-reset-hp-bekas-ternyata-belum-tentu-bikin-data) yang baru terungkap bahayanya saat perangkat dijual. Banyak orang malas mempelajari cara kerja teknologi yang mereka genggam setiap detik, memilih percaya pada mitos jalan pintas yang disebarkan dari mulut ke mulut. Padahal, memasang kepala charger abal-abal seharga dua puluh ribu rupiah yang dibeli di emperan jalan jauh lebih merusak kesehatan baterai ketimbang membiarkan kartu SIM menyala saat proses pengisian.

![Pengisian daya baterai smartphone menggunakan kabel charger USB Type-C di meja kerja](https://img.antaranews.com/cache/800x533/2026/05/23/WhatsApp-Image-2026-05-22-at-22.09.38.jpeg)

Ketergantungan akut kita pada pasokan daya baterai portabel ini sejatinya menjadi cerminan betapa rapuhnya rantai kenyamanan hidup manusia modern, persis seperti [ketergantungan kita pada kabel infrastruktur digital](/ketika-internet-sedunia-bisa-mendadak-lumpuh-karena-senggolan) yang seketika runtuh saat jalur fisiknya terganggu. Kita membangun peradaban yang serba pintar, namun panik setengah mati hanya karena indikator daya lithium-ion di saku celana menyentuh angka nol.

Mengaktifkan mode pesawat saat mengecas ponsel bukanlah mukjizat magis yang bisa memanipulasi hukum fisika kelistrikan. Jika Anda memang sedang diburu waktu mengejar jadwal kereta, langkah paling realistis adalah menyingkirkan casing pelindung, meletakkan HP di atas permukaan ubin dingin, dan berhenti menyalakan layar setiap tiga puluh detik sekali demi mengecek apakah persentase baterai sudah bertambah.`
  }
];

async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 17:00 WIB)");
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261107-1700.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
