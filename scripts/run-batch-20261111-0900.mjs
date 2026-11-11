import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Auto SR Microsoft Hadir di Handheld Xbox Ally X Bikin Gamer Khawatir Baterai Meleleh",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Microsoft", "Xbox Ally X", "Auto SR", "Upscaling AI", "Handheld PC", "Windows 11", "Hardware"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/10/257996_ROG_Xbox_Ally_and_Xbox_Ally_X_AKrales_0073.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Perangkat handheld gaming Xbox Ally X yang kini mendapatkan pembaruan fitur upscaling Auto SR dari Microsoft",
    sourceUrl: "https://www.theverge.com/tech/1031446/microsoft-automatic-super-resolution-auto-sr-upscaling",
    excerpt: "Microsoft resmi merilis fitur upscaling Auto SR untuk perangkat handheld Xbox Ally X dan Copilot+ PC. Fitur penambah resolusi berbasis kecerdasan buatan ini kini bisa dipakai dalam mode baterai di resolusi 1080p, meski Microsoft sendiri mengakui performanya berisiko menguras daya.",
    content: `Ada satu hukum alam tak tertulis yang diam-diam disepakati oleh semua pemilik konsol genggam PC di muka bumi: indikator persentase baterai di pojok kanan atas layar selalu berbohong. Di atas kertas, brosur promosi dengan bangga mencantumkan klaim daya tahan bermain hingga empat jam. Namun begitu Anda duduk manis di gerbong kereta dan mulai memuat game petualangan grafis berat, angka persenan itu biasanya terjun bebas lebih cepat ketimbang penurunan moral pekerja lembur di akhir bulan. Belum genap satu jam sesi penjelajahan bawah tanah berlangsung, kipas pendingin di bodi perangkat sudah meraung seperti mesin jet lepas landas, meniupkan hawa panas tepat ke sela-sela jemari Anda.

Kini, Microsoft datang membawa kabar gembira yang sekaligus menyelipkan rasa waswas bagi para pengguna ekosistem tersebut. Sebagaimana dilaporkan jurnalis Jay Peters di The Verge, raksasa perangkat lunak Redmond resmi meluncurkan teknologi Automatic Super Resolution atau Auto SR secara penuh untuk konsol genggam Xbox Ally X, seri Ally X20, serta sejumlah jajaran Copilot+ PC terpilih. Fitur upscaling berbasis kecerdasan buatan yang digadang-gadang bakal menjadi penantang DLSS milik Nvidia ini sejatinya sudah diuji coba sejak April lalu. Bedanya, pada masa pengujian awal, Auto SR hanya sudi menyala ketika perangkat tertancap erat pada dock daya listrik. Dalam rilis pembaruan terbarunya, Microsoft akhirnya mengizinkan teknologi ini bekerja saat konsol dimainkan murni mengandalkan daya baterai pada resolusi 1080p dengan target kecepatan hingga 120 FPS melalui mode performa baru.

![Perangkat handheld gaming Xbox Ally X yang kini mendapatkan pembaruan fitur upscaling Auto SR dari Microsoft](https://platform.theverge.com/wp-content/uploads/sites/2/2025/10/257996_ROG_Xbox_Ally_and_Xbox_Ally_X_AKrales_0073.jpg?quality=90&strip=all&crop=0,0,100,100)

Sekilas, janji peningkatan ketajaman visual pada game-game lawas tanpa mengorbankan kelancaran animasi terdengar sangat menggiurkan. Namun jika Anda membaca catatan teknisnya dengan teliti, Microsoft sendiri menyelipkan peringatan jujur yang menggelitik: menjalankan Auto SR pada resolusi 1080p di mode genggam berpotensi menghasilkan performa yang mungkin tidak seoptimal konfigurasi lainnya. Kalimat sopan khas divisi humas korporasi ini sejatinya adalah kode peringatan keras bahwa chip pemrosesan saraf atau NPU di perangkat Anda bakal dipaksa bekerja pontang-panting merender piksel tiruan selagi sirkuit baterai diperas sampai tetes terakhir. Alih-alih menikmati peningkatan grafis yang mulus, pengguna justru dihantui kekhawatiran perangkat genggam kesayangan mereka bakal berubah fungsi menjadi pemanggang roti portabel di pangkuan.

Masalah mendasarnya bukan semata-mata pada algoritma kecerdasan buatan milik Microsoft, melainkan kecenderungan industri teknologi modern yang semakin malas membenahi efisiensi mendasar. Alih-alih menuntut pengembang game untuk memoles kode program mereka agar hemat memori dan ramah komputasi, korporasi besar lebih suka melempar solusi instan berupa upscaling otomatis berbasis AI. Kebiasaan menambal kelemahan perangkat lunak dengan membebani konsumsi daya ini mengingatkan kita pada problem serupa di ekosistem mobile, seperti saat [baterai HP yang mendadak habis digerogoti aplikasi](/hp-menganggur-di-meja-tapi-baterai-menguap-digerogoti-aplikasi) akibat proses latar belakang yang rakus tanpa kendali. Fenomena ini diperparah oleh reputasi Microsoft yang belakangan sangat getol memaksakan fitur-fitur pintar ke dalam sistem operasi, sebagaimana terlihat pada rencana [perombakan mesin Windows 11 27H2](/ketika-microsoft-bersiap-rombak-total-mesin-windows-11-27h2-dan) yang kerap membuat pengguna awam bertanya-tanya apakah semua kerumitan komputasi baru tersebut benar-benar mereka butuhkan sehari-hari.

Bagi gamer kasual yang membeli konsol genggam demi membunuh waktu di warung kopi atau sela-sela jam istirahat kantor, tawaran 120 FPS dengan interpolasi AI terasa seperti solusi mewah untuk masalah yang salah. Mereka tidak butuh algoritma rumit yang menebak-nebak tekstur daun di kejauhan jika harganya harus dibayar dengan membawa tas punggung penuh kabel adaptor dan power bank berbobot setengah kilogram. Kebebasan bermain game genggam sejatinya terletak pada ketenangan pikiran saat menekan tombol power tanpa rasa takut mendadak mati kutu di tengah perjalanan. Jika setiap pembaruan teknologi justru membuat baterai makin tercekik dan tangan kepanasan, mungkin sudah saatnya para insinyur di ruang rapat ber-AC itu diingatkan bahwa konsol portabel diciptakan untuk digenggam dengan nyaman, bukan untuk dijadikan pengganti setrika arang.`
  },
  {
    title: "Akun Steam Sembilan Tahun Resmi Dianggap Dewasa Jadi Tamparan Nyata Bagi Gamer Gaek",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Valve", "Steam", "Verifikasi Usia", "Industri Game", "Gamer PC", "Game Dewasa", "PC Gaming"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/UoEzWoavREo9zwpFLKCqC-1920-80.jpg",
    imageAlt: "Tampilan etalase platform toko digital Steam milik Valve yang menerapkan aturan verifikasi umur baru bagi gamer",
    sourceUrl: "https://www.pcgamer.com/software/platforms/steams-age-verification-in-australia-now-takes-your-accounts-age-into-consideration/",
    excerpt: "Valve memperbarui sistem verifikasi usia Steam untuk kawasan Australia dengan aturan unik: akun yang berusia minimal sembilan tahun otomatis dianggap dewasa. Kebijakan pragmatis ini menjadi jalan pintas legal tanpa harus memaksa gamer mengunggah pindaian KTP atau wajah ke server pihak ketiga.",
    content: `Ada momen krisis eksistensial yang kerap melanda para pemain game PC ketika sedang iseng merapikan profil digital mereka di akhir pekan: menatap lencana masa dinas akun Steam yang terpampang di pojok profil. Ketika angka di lencana itu sudah menembus dua digit, ada rasa bangga semu yang langsung disusul oleh nyeri punggung dan kesadaran getir bahwa separuh hidup kita telah dihabiskan untuk menimbun judul-judul diskonan musiman yang bahkan belum pernah diunduh sama sekali. Kita merasa masih menjadi remaja yang lincah menembak musuh di warung internet, padahal tanggal pembuatan akun menunjukkan era ketika monitor tabung masih berjejer rapi di meja rental komputer dan voucher fisik masih digosok menggunakan koin recehan.

Kini, status sebagai gamer gaek alias veteran digital itu akhirnya memiliki legitimasi hukum yang nyata, setidaknya bagi mereka yang bermukim di Negeri Kanguru. Sebagaimana dicatat oleh editor Jody Macgregor dalam laporan PC Gamer, Valve diam-diam merombak mekanisme verifikasi usia bagi para pengguna Steam di Australia. Kebijakan ini merupakan respon terhadap regulasi sensor ketat pemerintah setempat yang mewajibkan penyaringan umur untuk pembelian konten kategori dewasa R18+. Alih-alih memaksa jutaan pengguna menyetor kartu kredit atau memindai wajah mereka ke sistem penjamin pihak ketiga, Valve memilih jalan pintas yang sangat pragmatis: akun Steam yang telah berumur minimal sembilan tahun dan memiliki catatan riwayat email atau data penagihan yang konsisten akan otomatis dianggap dewasa tanpa perlu prosedur verifikasi tambahan.

![Tampilan etalase platform toko digital Steam milik Valve yang menerapkan aturan verifikasi umur baru bagi gamer](https://cdn.mos.cms.futurecdn.net/UoEzWoavREo9zwpFLKCqC-1920-80.jpg)

Langkah yang diambil Valve ini terasa seperti sindiran elegan terhadap keruwetan birokrasi sensor digital modern. Di platform tetangga seperti Microsoft Store atau YouTube, pengguna kerap dipaksa melewati proses pemindaian identitas diri atau swafoto biometrik melalui penyedia layanan pihak ketiga demi membuktikan tanggal lahir. Sebaliknya, pendekatan Gabe Newell dan kawan-kawan di Bellevue sangat sederhana: jika akun Anda sudah aktif membeli game sejak era sembilan tahun lalu tanpa pernah bermasalah, probabilitas Anda masih bocah di bawah umur secara biologis nyaris mustahil. Logika warkop ini tentu sangat melegakan bagi komunitas yang peduli pada privasi data pribadi. Gamer tidak perlu lagi waswas membayangkan dokumen kependudukan mereka tersimpan di basis data asing yang rawan bocor hanya demi membeli game tembak-menembak berdarah atau horor psikologis.

Gaya pembangkangan sipil yang cerdik ini sejalan dengan tradisi Valve yang memang kerap mengambil jalan tidak biasa ketika berhadapan dengan tuntutan regulasi dan industri. Kita tentu ingat bagaimana mereka memilih memihak kenyamanan komunitas saat [Valve memajang data frame rate riil](/valve-pajang-data-fps-riil-di-toko-steam-tamparan-keras-untuk) di etalase toko demi menelanjangi developer nakal yang gemar menyembunyikan kinerja buruk game mereka di balik trailer manis. Kejujuran semacam itu langka di tengah industri yang gemar memoles citra. Di sisi lain, kebijakan usia akun ini tetap menyisakan ironi lucu bagi gamer yang hidupnya nomaden. Jika Anda termasuk orang yang rajin berpindah tempat tinggal sewaan atau terpaksa berganti alamat email dalam sembilan tahun terakhir, konsistensi data penagihan Anda bakal gugur dan pintu jalan tol otomatis ini pun langsung tertutup rapat.

Pada akhirnya, keputusan Valve mengakui ketuaan akun Steam adalah pengingat telak yang tak terbantahkan bagi generasi kita yang tumbuh bersama diskonan musim panas. Menolak mengunggah pindaian identitas memang sebuah kemenangan kecil untuk privasi digital, tetapi melihat toko game resmi menepuk pundak kita sambil berkata bahwa akun kita sudah terlalu tua untuk dipersulit adalah tamparan psikologis tersendiri. Kita mungkin berhasil mengakali sensor birokrasi tanpa perlu mengeluarkan dompet dan kartu pengenal, namun kita tidak akan pernah bisa lari dari fakta menyakitkan bahwa deretan game di keranjang belanjaan digital itu kini lebih sering kita pandangi ketimbang benar-benar kita mainkan sampai tamat.`
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
      markAsSeen(art.sourceUrl.trim());
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi 09:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261111-0900.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
