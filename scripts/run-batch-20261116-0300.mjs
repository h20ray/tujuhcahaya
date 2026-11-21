import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Bocoran Trofi GTA 6 Tembus Ratusan Jam Bukti Main Game Berubah Jadi Kerja Lembur",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["GTA 6", "Rockstar Games", "Trofi Platinum", "PlayStation 5", "Industri Game", "Andoru Ray"],
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/09/jason_and_lucia_04.jpg",
    imageAlt: "Dua protagonis Grand Theft Auto 6 Jason dan Lucia beristirahat di tepi jalan kota Vice City negara bagian Leonida",
    sourceUrl: "https://www.polygon.com/gta-6-platinum-trophy-mythic-achievement-time-to-get/",
    excerpt: "Bocoran trofi Platinum GTA 6 mengungkap pemain butuh lebih dari 200 jam termasuk meneliti 170 satwa liar. Bukti industri game makin gemar menyulap waktu santai jadi kerja rodi tanpa gaji.",
    content: `Bagi siapa saja yang hidupnya sudah kenyang dihajar rutinitas kantor delapan jam sehari, menyalakan konsol game sehabis mandi malam sejatinya adalah tempat pelarian paling suci. Tidak ada berkas laporan evaluasi yang harus ditandatangani, tidak ada pesan mendesak dari atasan di grup percakapan kantor, dan yang terpenting, tidak ada target angka yang menodong kepala. Duduk selonjoran di sofa dengan segelas kopi instan hangat sembari memegang kontroler nirkabel adalah momen sakral ketika seorang manusia biasa bisa merasa berdaulat penuh atas waktu luangnya sendiri, meski hanya untuk satu atau dua jam sebelum rasa kantuk memaksa mata terpejam.

Maka ketika kabar mengenai peluncuran mahakarya terbaru Rockstar Games, Grand Theft Auto 6, kian santer mendekati kenyataan, jutaan pemain di seantero dunia mulai sibuk menyusun strategi bertahan hidup. Obrolan di media sosial dan forum komunitas gamer dipenuhi pengakuan lucu para pekerja dewasa yang diam-diam sudah merencanakan cuti tahunan demi menyambut petualangan di negara bagian Leonida. Bahkan fenomena ini sempat menginspirasi [kantor studio game meliburkan karyawan demi main GTA 6](/studio-palworld-liburkan-karyawan-demi-gta-6-bukti-bos-jujur) demi menghormati antusiasme kolektif yang langka ini. Namun impian indah untuk bersenang-senang menelusuri gemerlap neon Vice City itu mendadak dihantam kabar yang cukup menguras energi batin.

Sebagaimana dicatat dalam laporan investigasi media game Polygon yang mengutip bocoran orang dalam dari Insider Gaming akhir pekan ini, menyelesaikan petualangan di GTA 6 tampaknya bakal menuntut pengorbanan waktu yang tidak main-main. Untuk menuntaskan alur cerita kampanye utama yang terbagi ke dalam lima babak besar dan hampir seratus misi, pemain rata-rata membutuhkan waktu sekitar 50 jam. Angka tersebut sebenarnya masih terdengar masuk akal bagi sebuah game petualangan dunia terbuka modern berskala kolosal. Masalah besarnya baru muncul ketika kita melihat syarat untuk meraih predikat seratus persen alias trofi Platinum.

![Dua protagonis Grand Theft Auto 6 Jason dan Lucia beristirahat di tepi jalan kota Vice City negara bagian Leonida](https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/09/jason_and_lucia_04.jpg)

Menurut data bocoran tersebut, pemain yang bernafsu mengoleksi seluruh 55 trofi pencapaian diperkirakan harus menghabiskan waktu bermain sedikitnya 200 jam di depan layar monitor. Pasalnya, Rockstar dilaporkan kembali mengadopsi mekanisme obsesif ala Red Dead Redemption 2, di mana pemain diwajibkan mempelajari dan mendata secara rinci sebanyak 170 spesies satwa liar yang tersebar di rawa-rawa dan padang rumput Leonida. Belum cukup sampai di situ, bocoran tersebut juga menyebutkan keberadaan trofi pencapaian yang sepenuhnya bergantung pada keberuntungan acak alias RNG di arena kasino dan mesin judi digital.

Membaca rincian syarat tersebut membuat kita tersadar bahwa industri game papan atas belakangan ini kian gemar mengaburkan batas antara hiburan santai dan kerja paksa sukarela. Di mata para manajer proyek dan pemegang saham studio raksasa, kualitas sebuah game tampaknya tidak lagi diukur dari seberapa berkesan alur naskah atau seberapa seru mekanik pertempurannya, melainkan seberapa lama mereka sanggup menyandera pemain di depan layar. Mengarungi rawa berlumpur selama puluhan jam demi mengamati perilaku reptil langka atau memencet tombol mesin judi virtual berulang kali bukanlah desain permainan yang menyenangkan; itu adalah pekerjaan membosankan yang dirancang semata-mata demi mempercantik grafik statistik retensi pemain dalam rapat pemegang saham kuartalan.

Ironi semacam ini kian terasa getir di tengah gelombang kepanikan industri hiburan digital yang terus tertekan beban biaya produksi. Kita melihat sendiri bagaimana para raksasa game getol menghadirkan [bocoran daftar stasiun radio GTA 6](/bocoran-radio-gta-6-penuh-musisi-beken-saat-gamer-masih-waswas) yang bertabur musisi papan atas demi memoles citra glamor, sementara di sisi lain [developer indie yang pontang-panting menghindari jadwal rilis](/developer-indie-nekat-rilis-game-di-steam-saat-publisher-raksasa) justru sanggup menyuguhkan keasyikan bermain murni tanpa perlu membebani pembeli dengan tumpukan daftar tugas rumah yang melelahkan.

Di obrolan warung kopi tempat para pekerja lepas berkumpul melepas penat di malam hari, hidup di dunia nyata sejatinya sudah terlalu penuh dengan daftar kewajiban: tagihan listrik prabayar, cicilan kendaraan, dan laporan lemburan kantor yang tak pernah habis. Membayar uang lebih dari satu juta rupiah hanya untuk disuruh lembur kedua kalinya demi mengamati 170 spesies binatang di dunia maya adalah lelucon yang bikin garuk-garuk kepala. Kalau Anda membeli game seharga ratusan ribu hingga jutaan perak hanya untuk diperbudak daftar checklist digital, mungkin sudah saatnya Anda mematikan konsol sejenak dan menyadari bahwa nikmatnya hidup merdeka tidak ditentukan oleh kilauan piala digital di profil akun Anda.`
  },
  {
    title: "Maliq Ajak Rhoma Irama Duet Bukti Musisi Pop Senopati Masih Butuh Karisma Raja Dangdut",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["MALIQ & D'Essentials", "Rhoma Irama", "Dangdut", "Musik Pop", "Industri Musik", "Margaretha Nina"],
    imageUrl: "https://pophariini.com/wp-content/uploads/2026/11/Untitled-Design-30.webp",
    imageAlt: "Proyek kolaborasi musik Kabar Gembira MALIQ & D'Essentials bersama Rhoma Irama, Bilal Indrajaya, dan Perunggu",
    sourceUrl: "https://pophariini.com/sehidup-semusik/maliq-dessentials-gandeng-rhoma-irama-bilal-indrajaya-dan-perunggu-di-kabar-gembira/",
    excerpt: "MALIQ & D'Essentials gandeng Rhoma Irama, Bilal Indrajaya, dan Perunggu dalam proyek Kabar Gembira. Bukti nyata bahwa musik pop kota tak akan pernah bisa menandingi magis dangdut rakyat.",
    content: `Bagi anak-anak muda perkotaan yang gemar menghabiskan akhir pekan di kedai kopi trendi kawasan Senopati atau Blok M, musik pop jazz berlirik manis nan rapi sudah lama menjadi lagu tema wajib pengiring gaya hidup. Denting piano elektrik yang lembut, petikan bas yang luwes, serta harmoni vokal yang sopan di telinga seolah menjadi lambang kemapanan estetika kaum urban modern. Sambil memegang cangkir kopi susu berbusa seharga lima puluh ribu perak, obrolan tentang kurasi playlist Spotify dan rilisan piringan hitam impor mengalir tanpa henti. Di lingkungan pergaulan semacam ini, musik dangdut klasik kerap dipandang sebelah mata sebagai artefak masa lalu yang cuma cocok diputar dari pengeras suara warung tegal pinggir jalan, sopir angkutan kota, atau pesta perkawinan warga di gang-gang sempit permukiman padat.

Namun sekat kelas selera yang sering dibangun secara angkuh oleh kalangan penikmat pop perkotaan itu mendadak runtuh tanpa sisa. Sebagaimana dicatat dalam laporan musik Pophariini akhir pekan ini, grup pop kenamaan ibu kota MALIQ & D'Essentials resmi mengumumkan proyek musikal terbaru bertajuk Kabar Gembira. Alih-alih sekadar merilis nomor pop jazzy konvensional yang aman di tangga lagu radio, Angga Puradiredja dan kawan-kawan justru mengambil langkah kuratorial yang mengejutkan: menggandeng sang Raja Dangdut Rhoma Irama untuk berkolaborasi dalam aransemen anyar lagu legendaris berjudul "Penasaran". Selain Rhoma, proyek ini turut melibatkan solois folk Bilal Indrajaya dalam tembang "Nyali" serta kuartet rock pekerja kantor Perunggu pada lagu "Pigura".

Keterlibatan Rhoma Irama dalam proyek ini tentu bukan sekadar tempelan nama besar untuk mencari sensasi viral di media sosial. Menurut penuturan resmi manajemen grup, benih kolaborasi ini bermula dari interaksi panggung Pestapora ketika kedua entitas musik yang berbeda kutub tersebut saling membawakan karya satu sama lain. Dalam rekaman versi terbarunya, sang maestro dangdut berusia senja itu tidak hanya menyumbangkan cengkok vokalnya yang khas dan berwibawa, melainkan juga turun tangan langsung mengisi raungan solo gitar elektrik yang sarat melodi melodramatis. Nada-nada pentatonik yang meliuk tegas di atas ketukan ritmis swing pop membuktikan bahwa kepiawaian bermusik Rhoma masih setajam saat ia memimpin Soneta Group mengguncang stadion-stadion daerah puluhan tahun silam.

![Proyek kolaborasi musik Kabar Gembira MALIQ & D'Essentials bersama Rhoma Irama, Bilal Indrajaya, dan Perunggu](https://pophariini.com/wp-content/uploads/2026/11/Untitled-Design-30.webp)

Kolaborasi lintas generasi ini menjadi peristiwa kultural yang sangat menyegarkan di tengah kelesuan skena musik populer tanah air. Selama bertahun-tahun, industri musik arus utama kerap terjebak pada formula aman yang monoton: lagu-lagu pop patah hati dengan nada dasar seragam yang diproduksi terburu-buru demi mengejar algoritma platform video pendek. Eksperimen musikal sering kali dihindari oleh label rekaman besar karena dianggap berisiko secara finansial. Keberanian MALIQ merangkul musik dangdut klasik menunjukkan kedewasaan artistik yang patut diapungkan ke permukaan, sekaligus menjadi pengingat bahwa dangdut memiliki aransemen ritmis yang rumit dan bernyawa tebal bila digarap secara tulus.

Langkah ini juga menjadi sentilan telak bagi sebagian kalangan industri kreatif yang kerap memandang musik arus bawah dengan nada meremehkan. Kita sudah melihat sendiri bagaimana apresiasi terhadap musisi pekerja independen kian merebak di kancah nasional, seperti [kemenangan band Perunggu yang langsung pamer pencapaian di LinkedIn](/perunggu-boyong-piala-ami-awards-tapi-maul-gerak-cepat-pamer) sebagai representasi kelas pekerja kota, atau fenomena [nomor rock indie Morfem yang dipilih menjadi lagu tema film](/lagu-rock-indie-morfem-masuk-film-timnas-bukti-kemenangan-milik) dokumenter tim nasional. Kini, ketika musisi pop mapan bersedia menanggalkan gengsi demi berguru pada khazanah dangdut lokal, peta musik tanah air kian membuktikan bahwa kekuatan karya sejati tidak pernah mengenal batas kelas sosial.

Di warung kopi pinggir jalan tempat radio transistor jadul tak pernah berhenti menyetel kaset pita Soneta, para penikmat musik akar rumput cuma bisa tersenyum simpul menyaksikan anak-anak muda metropolitan mulai menggoyangkan kepala mengikuti tabuhan ketipung. Musik pop modern boleh saja mendominasi playlist digital dan panggung festival berbayar jutaan rupiah. Namun ketika petikan gitar elektrik Rhoma Irama mulai bergetar dan lirik tentang gejolak penasaran asmara berkumandang, semua orang di ruangan itu akhirnya paham bahwa Raja Dangdut tetaplah raja yang tak tergoyahkan takhtanya di hati jutaan rakyat biasa.`
  }
];

async function runBatch() {
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
  console.log(`🎉 BATCH SELESAI: ${results.length} artikel berhasil diaudit & dipublikasikan.`);
  console.log("=================================================================");
  for (const res of results) {
    console.log(`- [${res.status.toUpperCase()}] ${res.slug} (Skor: ${res.score}) -> ${res.url}`);
  }
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261116-0300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
