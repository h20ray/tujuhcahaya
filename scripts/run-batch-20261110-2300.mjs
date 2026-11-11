import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Investor Waswas Nasib Nvidia Rp55 Kuadriliun Cuma Digantungkan pada Jensen Huang",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Nvidia", "Jensen Huang", "Kecerdasan Buatan", "AI", "Hardware", "Semikonduktor", "Wall Street"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2024/11/jensen_huang-1152x648.jpg",
    imageAlt: "CEO Nvidia Jensen Huang mengenakan jaket kulit hitam khasnya saat berbicara di atas panggung konferensi teknologi",
    sourceUrl: "https://arstechnica.com/gadgets/2026/11/nvidia-has-a-jensen-huang-problem-and-no-obvious-successor/",
    excerpt: "Di balik valuasi fantastis Nvidia yang menembus 55 kuadriliun rupiah, para investor Wall Street dan dewan direksi mulai dilanda kecemasan massal. Raksasa pemasok chip AI paling dominan di planet bumi ini ternyata sama sekali tidak memiliki rencana suksesi kepemimpinan yang jelas, menggantungkan seluruh nasib bisnis komputasi global pada pundak satu pria berusia 63 tahun berjaket kulit hitam.",
    content: `Kalau Anda mampir ke bengkel motor atau warung soto lamongan pinggir jalan, sistem manajemennya sering kali sangat sederhana: sang empu bengkel tahu letak setiap baut dan kunci inggris, sementara juragan soto memegang resep bumbu rahasia di dalam kepalanya sendiri. Bila si empu sakit pinggang atau juragan soto ketiduran, warung terpaksa tutup seharian dan pelanggan pulang dengan perut keroncongan. Kita mafhum dengan kerapuhan usaha kecil semacam itu karena modalnya memang terbatas pada tenaga satu keluarga. Namun, apa jadinya kalau cara kerja warung soto tersebut diadopsi mentah-mentah oleh korporasi paling bernilai di jagat teknologi modern dengan kapitalisasi pasar melampaui lima puluh lima kuadriliun rupiah?

Selamat datang di realitas bisnis Nvidia. Sebagaimana dicatat dalam laporan investigasi Ars Technica, dewan komisaris dan para investor kakap di Wall Street belakangan mulai dilanda insomnia memikirkan teka-teki suksesi kepemimpinan di tubuh sang raksasa semikonduktor. Jensen Huang, sosok karismatik yang mendirikan Nvidia sejak 1993 dan konsisten mengenakan jaket kulit hitam di setiap panggung pameran, kini telah menginjak usia 63 tahun. Masalahnya bukan sekadar faktor usia biologis, melainkan gaya manajemen *one-man show* yang luar biasa ekstrem: Jensen diketahui membawahi langsung lebih dari lima puluh pejabat eksekutif senior tanpa ada satu pun nama calon putra mahkota yang dipersiapkan untuk menggantikan posisinya.

![CEO Nvidia Jensen Huang mengenakan jaket kulit hitam khasnya saat berbicara di atas panggung konferensi teknologi](https://cdn.arstechnica.net/wp-content/uploads/2024/11/jensen_huang-1152x648.jpg)

Di atas lantai bursa, para pialang saham dan analis keuangan selama dua tahun terakhir memuja Jensen layaknya nabi baru era revolusi komputasi. Setiap kali pria asal Taiwan ini naik panggung mengumumkan arsitektur akselerator grafis terbaru, indeks saham langsung melonjak hijau dan ratusan miliar dolar uang segar mengalir deras. Namun di balik euforia grafik valuasi yang menembus 3,5 triliun dolar AS, para pemegang saham baru tersadar bahwa mereka sedang menaruh seluruh telur investasi masa depan di dalam satu keranjang yang sangat rapuh. Bila Jensen mendadak flu berat, terpeleset di kamar mandi, atau memutuskan pensiun mendadak demi menikmati masa tua di kebun anggur, Nvidia praktis tidak memiliki nakhoda cadangan yang punya wibawa setara untuk mengendalikan armada chip dunia.

Gaya kepemimpinan sentralistik seperti ini sebetulnya adalah anomali berbahaya bagi korporasi multinasional modern. Korporasi sekelas Apple dan Microsoft jauh-jauh hari sudah merancang peralihan estafet kepemimpinan yang mulus saat Steve Jobs atau Bill Gates lengser ke peraduan. Sementara di Nvidia, kultus individu dibiarkan tumbuh subur tanpa pengawasan memadai. Ketiadaan sistem tata kelola risiko yang matang ini kian mengkhawatirkan ketika kita menengok catatan masa lalu korporasi, seperti ketika kelengahan pengawasan internal sempat terbongkar saat [skandal penjualan chip yang lolos ke perusahaan cangkang](/ketika-nvidia-loloskan-penjualan-chip-ai-canggih-ke-kantor-kosong) mencuat ke publik, atau tatkala peristiwa janggal seperti [chip AI senilai ratusan miliar raib tanpa jejak di jalan tol](/ketika-chip-nvidia-senilai-ratusan-miliar-raib-tanpa-jejak-di) menunjukkan betapa rapuhnya rantai kendali logistik mereka di lapangan.

Bagi para penggiat peranti keras dan sysadmin yang sehari-hari berkutat mendinginkan rak server di ruang data, kepanikan Wall Street ini adalah cermin keangkuhan industri teknologi tinggi. Raksasa teknologi Silicon Valley gemar mengajari dunia luar tentang konsep redundansi server, failover jaringan otomatis, hingga ketahanan infrastruktur dari bencana. Namun ironisnya, organisasi bisnis mereka sendiri sama sekali tidak memiliki sistem pencadangan manusia di tingkat tertinggi. Ketika para taipan bursa saham panik hanya karena ketiadaan selembar rencana suksesi, mereka seolah lupa bahwa kejayaan chip AI bukanlah mukjizat mistis satu individu, melainkan buah keringat ribuan insinyur laboratorium yang bekerja dalam senyap.

Pada akhirnya, pasar modal modern memang lebih senang menjual mitos pahlawan tunggal berjaket kulit ketimbang membicarakan keberlanjutan institusi yang membosankan. Jika dewan direksi Nvidia masih terus bersantai dan menolak merumuskan pewaris takhta yang kredibel, jangan kaget kalau suatu hari nanti gelembung kecerdasan buatan bernilai puluhan kuadriliun rupiah ini mendadak meletus bukan karena krisis bahan mentah silikon, melainkan karena sang juragan lupa mengajari anak buahnya cara memegang kunci brankas utama.`
  },
  {
    title: "Methosa Rilis Gemuruh Revolusi Tamparan Keras Bagi Musisi Pop yang Bermain Aman",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Margaretha Nina", "Methosa", "Gemuruh Revolusi", "Musik Indonesia", "Rock Alternatif", "Kritik Sosial", "Budaya Urban", "Industri Musik"],
    imageUrl: "https://cdns.klimg.com/resized/1280x720/p/headline/methosa-rilis-039gemuruh-revolusi039-tu-97a9de.jpg",
    imageAlt: "Personel band Methosa berpose saat peluncuran single Gemuruh Revolusi yang menyuarakan kritik sosial di Jakarta",
    sourceUrl: "https://musik.kapanlagi.com/berita/methosa-rilis-039gemuruh-revolusi039-tuangkan-kekecewaan-terhadap-kondisi-indonesia-lewat-musik-97a9de.html",
    excerpt: "Unit rock alternatif Methosa mendobrak kejenuhan pasar musik arus utama dengan meluncurkan single Gemuruh Revolusi. Di tengah tren lagu pop melankolis seragam yang sibuk memburu durasi pendek demi algoritma video ponsel, karya ini hadir sebagai tamparan bernas yang menelanjangi ketidakbecusan negara menangani bencana dan nasib warga miskin yang kerap ditinggal berjuang sendirian.",
    content: `Putar radio swasta di mobil saat Anda terjebak macet petang hari, atau telusuri tangga lagu terpopuler di aplikasi streaming ponsel Anda, dan kemungkinan besar telinga Anda akan disuguhi menu yang nyaris seragam: ratapan patah hati dengan petikan gitar kopong, kisah rindu mantan yang dibalut aransemen piano manis, atau lirik romansa kasmaran yang dibuat pasrah demi memburu potongan klip viral di media sosial. Industri musik arus utama kita sedang berada di titik paling jinak sepanjang sejarah. Nyaris tidak ada lagi musisi yang berani menyentuh keresahan nyata di jalanan, seolah-olah persoalan terbesar rakyat republik ini setiap hari hanyalah bagaimana caranya membalas pesan teks dari sang pujaan hati yang tak kunjung membalas.

Keheningan yang menjemukan itu akhirnya diguncang dengan lantang oleh Methosa. Sebagaimana dicatat dalam laporan peliputan KapanLagi, grup musik rock alternatif asal Jakarta ini resmi meluncurkan karya terbaru bertajuk Gemuruh Revolusi. Lagu ini bukan lagu cinta cengeng pesanan produser rekaman komersial, melainkan akumulasi kemarahan dan kejengkelan atas berbagai karut-marut sosial, ekonomi, hingga kemanusiaan yang menimpa masyarakat tanah air. Methosa secara khusus menyoroti lambatnya penanganan bencana alam, sengkarut kebakaran hutan yang rutin membakar paru-paru warga tiap musim kemarau, serta nasib para korban pascabencana yang kerap ditinggalkan begitu saja dalam keputusasaan setelah lampu kamera peliput berita padam dan rombongan pejabat selesai membagikan paket sembako seremonial.

![Personel band Methosa berpose saat peluncuran single Gemuruh Revolusi yang menyuarakan kritik sosial di Jakarta](https://cdns.klimg.com/resized/1280x720/p/headline/methosa-rilis-039gemuruh-revolusi039-tu-97a9de.jpg)

Langkah Methosa melepas amunisi berdistorsi tebal dengan pesan sosial setajam ini adalah tindakan berani yang layak dicatat. Di era ketika mayoritas label rekaman dan promotor festival lebih gemar mendikte aransemen musik agar ramah sponsor korporasi rokok atau minuman boba, menyuarakan kritik pedas terhadap ketidakbecusan aparat adalah jalan sunyi yang rentan dijauhi etalase panggung komersial. Sikap menolak tunduk pada selera pasar yang steril ini mengingatkan kita pada konsistensi [musisi rock yang menolak tunduk pada algoritma](/iga-massardi-rilis-ambivalensi-bukti-musisi-rock-menolak-tunduk), sebuah ikhtiar menjaga marwah kesenian agar tidak melulu tereduksi menjadi sekadar barang dagangan sekali pakai yang kedaluwarsa dalam hitungan pekan.

Keresahan yang dituangkan Methosa terasa sangat menohok karena berakar langsung dari pengalaman empiris warga di akar rumput. Di berbagai pelosok daerah, rakyat jelata sudah hafal betul polanya: ketika banjir bandang merendam permukiman atau asap pekat mengepung ruang kelas sekolah anak-anak mereka, kehadiran negara kerap kali terlambat berhari-hari. Warga dipaksa patungan mendirikan dapur umum mandiri, mengarungi arus lumpur dengan ban bekas pinjaman tetangga, dan bergotong royong membersihkan puing-puing rumah mereka sendiri. Sementara di panggung megah ibu kota, narasi keberhasilan pembangunan terus didengungkan tanpa rasa malu, persis seperti ironi getir saat [musisi independen menjerit tercekik pembagian royalti](/afgan-borong-piala-ami-awards-saat-musisi-independen-menjerit) di balik gemerlap pesta penganugerahan piala musik bergengsi yang menutupi derita pekerja kreatif di balik layar.

Bagi anak-anak muda perkotaan yang nongkrong di kedai kopi atau berkeringat di gerbong kereta komuter, lagu seperti Gemuruh Revolusi adalah penawar dahaga yang menyegarkan nalar kritis. Seni musik sejak zaman Iwan Fals di dekade delapan puluhan hingga panggung bawah tanah era reformasi tidak pernah diciptakan semata-mata untuk meninabobokan pendengarnya agar lupa pada kenyataan hidup yang getir. Musik adalah medium pencatat sejarah, cermin kejujuran, dan pengingat bahwa ketidakadilan struktural tidak boleh dinormalisasi sebagai takdir yang harus diterima dengan senyuman pasrah.

Menikmati lagu pop sendu tentang asmara yang kandas tentu tidak ada salahnya untuk melepas penat setelah seharian diperas jam kerja kantor yang tak berkesudahan. Namun ketika rumah tetangga kita terancam terendam lumpur limbah pabrik dan asap kebakaran hutan mulai membuat anak-anak sesak napas, Anda butuh distorsi gitar yang menggelegar dan lirik yang berani memaki ketidakadilan, bukan lagu galau mendayu-dayu yang cuma menyuruh Anda menangis di bawah pancuran air kamar mandi.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 23:00 WIB)");
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
  console.log(`🎉 Batch Publikasi 23:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261110-2300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
