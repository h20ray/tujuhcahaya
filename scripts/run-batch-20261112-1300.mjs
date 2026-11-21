import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Maliq & D'Essentials Rilis Album Baru Bukti Musisi Kawakan Masih Butuh Tekanan Cuan",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Margaretha Nina", "Maliq & D'Essentials", "Industri Musik", "Budaya Urban", "Album Baru", "Musik Pop", "Gen Z"],
    imageUrl: "https://awsimages.detik.net.id/api/wm/2026/11/12/maliq-dessentials-1794416598554_169.jpeg?wid=54&w=1200&v=1&t=jpeg",
    imageAlt: "Grup musik Maliq & D'Essentials saat memberikan keterangan terkait peluncuran album ke-10 bertajuk Kabar Bahagia di SCBD Jakarta",
    sourceUrl: "https://www.detik.com/pop/music/d-8749068/maliq-dessentials-rilis-album-baru-yang-dengerin-regenerasi-sampai-ke-gen-z",
    excerpt: "Memasuki album penuh ke-10, Maliq & D'Essentials membongkar rahasia panjang umur mereka di industri musik dengan blak-blakan soal uang dan kemitraan label besar. Kejujuran dua pentolannya menjadi tamparan telak bagi romantisme idealisme naif yang kerap melupakan realitas asap dapur.",
    content: `Di kalangan anak muda penikmat musik independen tanah air, ada satu mitos purba yang sering kali dipelihara dengan penuh kesucian semu: musisi keren adalah musisi yang hidup menggelandang, menolak mentah-mentah tawaran korporasi, dan rela makan mi instan kuah dingin demi menjaga apa yang mereka sebut sebagai idealisme murni. Setiap kali sebuah band yang membesarkan namanya dari panggung festival kampus memutuskan tanda tangan kontrak dengan label rekaman raksasa, koor penghakiman dari para puritan panggung gigs biasanya langsung bergema keras menuduh mereka telah menjual jiwa demi uang. Namun cobalah ajak obrolan itu bergeser ke meja dapur kos-kosan atau loket pembayaran sewa studio latihan yang tarif per jamnya terus merayap naik. Di sana, Anda akan segera menyadari bahwa romantisme menjadi musisi kelaparan sejatinya adalah kemewahan yang hanya sanggup dinikmati oleh anak orang berada yang tidak punya tanggungan cicilan pinjaman daring.

Realitas telanjang itulah yang baru saja dibongkar tanpa tedeng aling-aling oleh salah satu band pop urban paling disegani di negeri ini, Maliq & D'Essentials. Memasuki usia karier yang sudah menembus lebih dari dua dekade dan bersiap meluncurkan album penuh ke-10 bertajuk Kabar Bahagia, kelompok musik yang digawangi Angga Puradaredja dan Widi Puradiredja ini menunjukkan bahwa bertahan hidup di industri hiburan modern membutuhkan kalkulasi bisnis yang waras ketimbang nostalgia buta. Sebagaimana dicatat oleh tim peliput detikcom saat konferensi pers di kawasan SCBD Jakarta Selatan pekan ini, band yang pernah mendirikan label mandiri Organic Records tersebut secara terbuka membeberkan alasan mengapa mereka memilih bergabung di bawah naungan korporasi Sony Music dan tetap agresif merangkul generasi baru pendengar Gen Z.

![Grup musik Maliq & D'Essentials saat memberikan keterangan terkait peluncuran album ke-10 bertajuk Kabar Bahagia di SCBD Jakarta](https://awsimages.detik.net.id/api/wm/2026/11/12/maliq-dessentials-1794416598554_169.jpeg?wid=54&w=1200&v=1&t=jpeg)

Yang membikin pengakuan ini terasa sangat menyegarkan adalah kejujuran sang penabuh drum sekaligus motor produser, Widi Puradiredja, yang menolak bersikap munafik soal peranan uang dalam ekosistem kreatif. Alih-alih berkhotbah dengan jargon puitis tentang seni yang suci dari kapitalisme, Widi melontarkan sentilan yang membikin merah kuping para musisi senior yang kerap membanggakan status independen secara pongah. Menurut Widi, ketika sebuah band sudah merasa terlalu senior, merasa paling pintar, dan bersikeras mengurus segala hal sendirian tanpa mitra bisnis yang menuntut target, yang terjadi biasanya justru kemalasan berjamaah karena tidak ada tekanan untuk berinovasi. Bermitra dengan perusahaan besar memaksa mereka keluar dari zona nyaman, menghadirkan tenggat kerja profesional, dan memastikan roda ekonomi seluruh kru panggung berputar menguntungkan. Di tengah situasi muram di mana [musisi independen menjerit tercekik royalti](/afgan-borong-piala-ami-awards-saat-musisi-independen-menjerit) dan pembagian kue streaming yang tidak manusiawi, keberanian Maliq untuk menuntut transparansi keuntungan dan profesionalisme kerja adalah tamparan bagi romantisme seni yang kerap menyepelekan kesejahteraan pekerja musik.

Di sisi lain, vokalis Angga Puradaredja melengkapi kejujuran dapur tersebut dengan kedewasaan artistik yang jarang ditemui pada grup musik angkatan dua ribuan. Alih-alih merajuk karena selera pendengar muda telah beralih ke tren klip video singkat, Maliq justru berhasil merebut hati anak-anak Gen Z lewat tembang-tembang seperti Kita Bikin Romantis dan Aduh tanpa harus terdengar memaksakan diri menjadi remaja tanggung. Kuncinya sederhana: mereka tidak pernah mencoba mengulang formula lawas dari album era debut mereka yang meledak belasan tahun silam, melainkan membiarkan karya mereka tumbuh organik mengikuti fase hidup mereka sebagai manusia dewasa. Keberhasilan regenerasi penonton ini menghadirkan antitesis menarik terhadap kepanikan industri panggung hiburan, di mana promotor kerap menyajikan [paket nostalgia musisi lawas demi menghindari boncos](/komunitas-semarang-rawat-roh-koes-plus-di-tugu-muda-saat-konser) karena takut bertaruh pada materi segar. Maliq membuktikan bahwa karya yang jujur dan relevan dengan keresahan hari ini akan selalu menemukan telinga pendengarnya, bahkan di antara generasi muda yang lahir ketika kaset pita pertama mereka baru saja dicetak di pabrik.

Menyaksikan kedewasaan Maliq & D'Essentials melenggang mulus melintasi sekat generasi memberi pelajaran berharga bagi siapa saja yang menggantungkan periuk nasinya di lorong seni kreatif Indonesia. Mempertahankan idealisme berkarya itu wajib hukumnya, tetapi membiarkan ego pribadi membakar habis periuk nasi dan menolak beradaptasi dengan kenyataan pasar adalah kebodohan yang tidak perlu dibungkus dengan pita filosofis. Selama melodi yang mereka ciptakan masih sanggup membikin seisi kafe tersenyum dan tagihan sewa studio terbayar lunas tanpa sengketa, Maliq berhak melangkah dengan kepala tegak, mengingatkan kita bahwa musik yang bagus tidak pernah diukur dari seberapa kelaparan penciptanya di akhir bulan.`
  },
  {
    title: "Bethesda Siram Air Dingin ke Muka Gamer yang Ngarep Kabar Anyar Elder Scrolls 6",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Bethesda", "The Elder Scrolls 6", "Skyrim", "PC Gaming", "Industri Game", "Komunitas Gamer"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/MXhe5TuptpfcHyqsuFPj6P-1920-80.jpg",
    imageAlt: "Karakter Orc membaca buku di dunia Skyrim di tengah penantian panjang sekuel The Elder Scrolls 6",
    sourceUrl: "https://www.pcgamer.com/games/the-elder-scrolls/bethesda-shoots-down-elder-scrolls-6-sentinel-announcement-rumor-on-skyrims-15th-anniversary/",
    excerpt: "Tepat di perayaan 15 tahun Skyrim, Bethesda Game Studios resmi menyiramkan air dingin ke muka komunitas yang sempat terserang delusi massal soal The Elder Scrolls 6: Sentinel. Klarifikasi darurat ini menjadi potret getir betapa frustrasinya para pemain menghadapi kebiasaan studio yang gemar mengobral janji kosong.",
    content: `Bagi siapa saja yang mendaku diri sebagai gamer penjelajah dunia fantasi Tamriel, menunggu kabar sekuel The Elder Scrolls barangkali adalah ujian kesabaran paling brutal dalam sejarah peradaban industri video game modern. Ketika Anda pertama kali menciptakan karakter ras Khajiit atau Nord di desa bersalju Helgen dalam The Elder Scrolls V: Skyrim, Anda mungkin masih berstatus siswa sekolah menengah yang sibuk menabung uang saku demi membeli kartu grafis seadanya. Hari ini, lima belas tahun berselang, Anda mungkin sudah berkeluarga, memiliki cicilan rumah yang belum lunas, dan mulai merasakan ngilu di persendian lutut akibat terkena panah kehidupan nyata. Namun di balik layar monitor komputer, studio game raksasa Bethesda Game Studios masih memperlakukan penggemar setianya persis seperti anak kecil yang disuruh duduk manis di pojok kamar sambil menatap poster pegunungan bisu.

Puncak dari tragedi penantian tanpa ujung tersebut kembali pecah berantakan bertepatan dengan perayaan ulang tahun ke-15 Skyrim pekan ini. Sebagaimana dicatat oleh jurnalis Andy Chalk dalam laporannya di PC Gamer, gelombang spekulasi liar sempat membakar lini masa komunitas gamer di forum Reddit setelah penyiar podcast Kiwi Talkz, Reece Reilly, mengunggah cuitan samar di media sosial X tentang bakal hadirnya pengumuman besar yang bakal membikin komunitas pemain bersorak gembira. Tanpa butuh waktu lama, ribuan gamer yang sudah kelewat lapar langsung terjebak dalam delusi massal, meyakini bahwa pimpinan Bethesda bakal memanfaatkan momentum ulang tahun ini untuk membongkar rekaman gameplay perdana dari The Elder Scrolls 6: Sentinel. Sayangnya, gelembung harapan palsu itu langsung meletus dalam sekejap ketika pihak internal studio merasa terpaksa turun gunung untuk menyiramkan air dingin ke muka komunitas yang sedang histeris.

![Karakter Orc membaca buku di dunia Skyrim di tengah penantian panjang sekuel The Elder Scrolls 6](https://cdn.mos.cms.futurecdn.net/MXhe5TuptpfcHyqsuFPj6P-1920-80.jpg)

Melalui pernyataan resmi yang diunggah langsung ke forum penggemar Reddit, juru bicara Bethesda secara lugas menegaskan bahwa tidak ada pengumuman besar apa pun yang bakal dibagikan, seraya menegaskan bahwa kabar substantif mengenai Sentinel masih belum akan dirilis untuk waktu yang sangat lama. Pengakuan dingin ini bagaikan tamparan telak bagi jutaan penggemar yang sudah delapan tahun lamanya disuruh memelototi klip penggoda berdurasi tiga puluh detik bertuliskan logo angka romawi enam sejak pameran E3 2018 silam. Alih-alih merampungkan proyek yang paling dinantikan, Bethesda selama satu setengah dekade terakhir justru tampak lebih asyik mendaur ulang Skyrim ke nyaris setiap perkakas elektronik berlayar yang ada di pasaran, mulai dari jam tangan pintar hingga konsol generasi mutakhir. Keengganan studio merawat warisan intelektualnya dengan serius mengingatkan kita pada fenomena memalukan saat komunitas modder harus turun tangan sendiri melakukan aksi [porting game Elder Scrolls Nokia N-Gage ke PC demi menampar Bethesda](/porting-game-elder-scrolls-nokia-n-gage-ke-pc-tampar-bethesda) yang malas menyentuh katalog lawas mereka.

Di kalangan gamer akar rumput, fenomena delusi massal yang melanda komunitas ini sesungguhnya memotret keputusasaan kultural yang sangat getir. Kita berada di era industri di mana studio-studio raksasa bernilai puluhan triliun rupiah lebih gemar menghabiskan waktu bertahun-tahun meracik game layanan daring berbiaya fantastis yang kerap berujung hancur di pasaran ketimbang memenuhi dahaga pemain akan petualangan naratif pemain tunggal yang berbobot. Bahkan ketika para pembesar korporasi terus menunda janji mereka, kita melihat pengembang berbakat justru memilih hengkang dari cengkeraman raksasa teknologi, seperti saat [pecatan kreator DOOM bangkit mendirikan studio mandiri](/pecatan-kreator-doom-bangkit-bikin-studio-mandiri-demi-menampar) demi merebut kembali kendali atas karya mereka sendiri. Sementara itu, gamer kasual yang hanya ingin kembali menyusuri gurun pasir Hammerfell dipaksa terus mengunyah janji manis yang kedaluwarsa, menjadi saksi bagaimana sebuah perusahaan multinasional sebesar Bethesda kehilangan keberanian untuk sekadar memberi kepastian jadwal produksi kepada pelanggan setianya.

Menyaksikan pihak pengembang harus repot-repot merilis klarifikasi darurat cuma demi menyuruh penggemarnya berhenti berhalusinasi menghadirkan satu kesimpulan ironis yang sukar dibantah. Bethesda boleh saja berdalih bahwa meracik dunia terbuka sekelas Tamriel butuh waktu dan ketelitian mahadewa. Namun jika setelah lima belas tahun berlalu satu-satunya hal konkret yang sanggup mereka berikan hanyalah sebaris kalimat santai yang menyuruh gamer kembali tidur panjang, maka wajar saja bila komunitas mulai bertanya-tanya: apakah The Elder Scrolls 6 memang sedang dibangun dengan sepenuh hati, atau jangan-jangan proyek itu cuma fatamorgana di tengah padang pasir yang sengaja dipelihara agar harga saham induk perusahaannya tidak ikut membeku seperti puncak pegunungan salju High Hrothgar.`
  }
];

export async function runBatch() {
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
      markAsSeen(art.sourceUrl.trim());
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi 13:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================\n");
  return results;
}

// CLI Execution
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261112-1300.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Batch Execution Failed:", err);
      process.exit(1);
    });
}
