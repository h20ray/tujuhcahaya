import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ketika Etenia Croft Rebut Piala AMI Awards Saat Lagu Anak Digerus Algoritma",
    category: "musik",
    byline: "0100MUNS3DJOA35D985DFFDBA0", // Margaretha Nina
    tags: ["Margaretha Nina", "AMI Awards", "Musik Anak", "Industri Musik", "Budaya Populer", "Musisi Indonesia", "Etenia Croft"],
    imageUrl: "https://cdn.medcom.id/dynamic/content/2026/11/07/1853388/rtqA4RHdzi.jpg?w=1024",
    imageAlt: "Penyanyi cilik Etenia Croft memegang piala AMI Awards 2026 di panggung Ciputra Artpreneur Jakarta",
    sourceUrl: "https://www.medcom.id/hiburan/musik/4KZQLzwk-etenia-croft-kaget-raih-artis-solo-anak-anak-terbaik-di-ami-awards-2026",
    excerpt: "Penyanyi cilik Etenia Croft sukses menyabet trofi Artis Solo Anak-Anak Terbaik di ajang AMI Awards 2026 lewat lagu 'Semua Rasa'. Kemenangan ini membawa angin segar sekaligus menyentil ironi industri musik kita: di tengah gempuran algoritma yang mencekoki balita dengan lirik patah hati orang dewasa, ekosistem lagu anak tanah air masih berjuang keras mencari ruang napas.",
    content: `Kalau Anda sempat menghadiri acara arisan keluarga, pesta ulang tahun anak tetangga, atau sekadar menumpang mikrolet di kota-kota besar belakangan ini, Anda pasti pernah menyaksikan satu pemandangan ganjil yang bikin mengelus dada. Ada anak balita yang bicaranya saja masih cadel, namun sudah sangat fasih melantunkan tembang patah hati tentang dikhianati kekasih, diselingi goyangan pinggul meniru video viral di layar ponsel pintar sang ibu. Kita hidup di sebuah masa ketika telinga anak-anak kita dicekoki deretan lagu ratapan asmara dewasa lewat corong algoritma media sosial yang rakus jam tontonan.

Ruang bermain musikal yang riang, polos, dan penuh imajinasi masa kecil seolah menguap ditelan bumi. Di tengah kegelisahan kolektif para orang tua yang rindu mendengar buah hatinya menyanyikan lagu tentang indahnya pelangi atau kelucuan tingkah hewan peliharaan, sebuah kabar menggembirakan mendadak mencuat dari panggung gemerlap Ciputra Artpreneur Jakarta.

Sebagaimana dicatat dalam laporan Medcom.id pada malam penganugerahan AMI Awards 2026 akhir pekan ini, penyanyi cilik berbakat Etenia Croft sukses membawa pulang piala bergengsi untuk kategori Artis Solo Pria/Wanita Anak-Anak Terbaik. Trofi idaman insan musik tersebut diraihnya berkat kepiawaian membawakan tembang berjudul "Semua Rasa". Dalam keterangannya kepada para juru warta, Etenia mengaku sangat terkejut dan tak pernah menyangka namanya bakal dipanggil naik ke atas panggung, mengingat deretan nomine di kategori tersebut diisi oleh talenta-talenta cilik yang tak kalah mengagumkan.

![Penyanyi cilik Etenia Croft memegang piala AMI Awards 2026 di panggung Ciputra Artpreneur Jakarta](https://cdn.medcom.id/dynamic/content/2026/11/07/1853388/rtqA4RHdzi.jpg?w=1024)

Kemenangan Etenia tentu adalah prestasi manis yang patut disyukuri oleh siapa saja yang masih peduli pada perkembangan mental generasi penerus. Namun bila kita menanggalkan kacamata euforia panggung malam penghargaan dan melihat realitas industri musik tanah air secara lebih jernih, sorak tepuk tangan di gedung kesenian megah itu sesungguhnya menyisakan getir yang mendalam.

Kategori lagu anak di ajang penghargaan tahunan kerap kali terasa seperti oasis sunyi di tengah padang pasir komersialisme yang gersang. Korporasi label rekaman raksasa dan produser musik arus utama sudah lama bersikap dingin terhadap produksi musik anak. Di mata kalkulasi bisnis streaming yang dingin, membiayai produksi lagu anak dianggap sebagai investasi berisiko tinggi dengan margin keuntungan yang tidak seberapa. Jauh lebih mudah dan murah memproduksi lagu pop patah hati tiga menit dengan formula melodi cengeng yang gampang disetel berulang-ulang di kafe remang-remang demi mendulang royalti digital.

Situasi timpang ini mengingatkan kita pada catatan kritis saat [piala AMI Awards yang sempat diborong lagu pejabat](/ketika-lagu-ciptaan-menteri-borong-piala-ami-awards-saat-musisi), di mana panggung kehormatan musik kerap berjarak dari jeritan dapur pencipta karya yang sesungguhnya. Membuat lagu anak yang bermutu sesungguhnya menuntut kepekaan rasa dan tanggung jawab moral yang jauh lebih berat ketimbang meracik lagu pop romantis biasa. Seorang pencipta lagu anak harus mampu menyelami cara pandang bocah, menjaga kesantunan bahasa, dan menanamkan nilai empati tanpa terdengar menggurui. Sayangnya, komitmen estetik semacam ini hampir tidak pernah dihargai pantas oleh pasar modal yang hanya memuja grafik kurva viralitas sesaat.

Akibatnya, kita mengalami kekosongan figur idola anak yang sangat mengerikan sejak era keemasan dekade sembilan puluhan memudar. Generasi milenial dulu beruntung tumbuh ditemani suara merdu Tasya Kamila, keceriaan Joshua Suherman, hingga petualangan musikal Sherina Munaf yang legendaris. Kini, anak-anak generasi masa kini dipaksa dewasa sebelum waktunya, menyerap kosakata perselingkuhan dan trauma hubungan beracun sebelum mereka sempat paham makna persahabatan di bangku taman kanak-kanak.

Bahkan ketika ada musisi independen yang nekat memproduksi karya ramah anak secara mandiri, mereka langsung dibenturkan pada tembok tebal distribusi. Di toko aplikasi dan platform streaming musik digital, katalog lagu anak Indonesia sering kali terkubur di pojok terpencil tanpa algoritma kurasi yang memadai. Belum lagi urusan pembagian kue pemasukan yang selalu menindas musisi arus bawah, sebuah realitas pahit yang juga menimpa [musisi tanah air yang masih mengais hak royalti](/ketika-tulus-memborong-piala-ami-awards-dan-realitas-musisi-yang) di negeri sendiri.

Piala penghargaan AMI Awards yang digenggam Etenia Croft adalah secercah lentera di tengah lorong gulita industri lagu anak kita. Keberhasilannya membuktikan bahwa talenta vokal murni dan lagu yang diracik khusus untuk anak-anak masih memiliki daya pikat magis yang sanggup mengetuk nurani para juri festival. Namun trofi berlapis emas di lemari kaca tidak akan sanggup mengubah keadaan jika para pelaku industri dan pemilik stasiun penyiaran tetap menutup mata. Selama para pemodal musik hanya memikirkan metrik klik cepat dan membiarkan layar HP anak-anak dikuasai lagu galau dewasa, kemenangan di panggung penghargaan hanyalah perayaan sesaat sebelum kita kembali menyaksikan bocah lima tahun menangis di pojok warkop sambil mendendangkan lagu patah hati.`
  },
  {
    title: "Ketika Kipas Laptop Mendesing Bak Pesawat Tempur dan Bodi Panas Membakar Paha",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Hardware", "Laptop", "Teknologi", "Tips Gadget", "Komputer", "Thermal Throttling"],
    imageUrl: "https://img.antaranews.com/cache/800x533/2026/10/19/IMG_20261018_164905.jpg",
    imageAlt: "Ilustrasi laptop kerja yang mengalami panas berlebih pada bagian ventilasi kipas pendingin",
    sourceUrl: "https://www.antaranews.com/berita/5831603/laptop-cepat-panas-dan-kipas-berisik-apa-penyebabnya",
    excerpt: "Bagi jutaan pekerja lepas dan mahasiswa yang doyan nongkrong di warkop, suara dengungan kipas laptop yang mendesing bak mesin jet adalah pertanda buruk. Bukannya membersihkan debu atau mengganti pasta termal, banyak orang malah tergiur membeli tatakan kipas murah meriah, padahal biang kerok panasnya laptop berakar dari kompromi desain vendor yang mengejar bodi tipis tanpa memikirkan iklim tropis.",
    content: `Bagi siapa saja yang menghabiskan separuh hidupnya mengetik tugas kuliah atau menyelesaikan tenggat kerjaan kantor di meja warkop berpendingin udara seadanya, Anda pasti sangat akrab dengan suara horor ini. Anda baru saja menyalakan laptop, membuka sekitar lima belas tab di Google Chrome, memutar lagu latar di latar belakang, dan mulai mengetik di dokumen. Tiba-tiba dari bagian bawah bodi laptop terdengar suara dengungan halus yang dalam beberapa menit berubah menjadi raungan mirip turbin jet pesawat komersial yang bersiap lepas landas.

Sensasi horor tersebut makin lengkap saat bagian bawah keyboard mulai menghangat, menjalar ke telapak tangan, dan seketika membuat paha Anda terasa seperti sedang memanggang roti bakar bila nekat memangku komputer jinjing tersebut.

Kepanikan pengguna awam saat menghadapi laptop yang mendadak panas dan meraung kencang biasanya langsung berujung pada diagnosis ngawur. Ada yang panik menduga komputernya disusupi program virus jahat dari situs film bajakan, ada yang buru-buru mematikan paksa dengan menekan tombol daya secara brutal, dan tak sedikit pula yang langsung membuka lokapasar daring untuk membeli tatakan pendingin berlampu warna-warni seharga tiga puluh ribu rupiah. Mereka percaya bahwa deru angin sepoi-sepoi dari kipas plastik murah bercolokan USB itu sanggup meredakan amarah prosesor silikon di dalam mesin.

Sebagaimana dicatat dalam ulasan teknis Antara Tekno pekan ini, fenomena laptop mendadak panas membara disertai kipas yang menjerit berisik sebetulnya adalah mekanisme perlindungan diri bawaan perangkat yang lumrah. Ketika beban kerja prosesor utama (*CPU*) dan cip grafis melonjak tajam, suhu silikon akan meroket mendekati ambang batas kritis di kisaran sembilan puluh derajat Celcius. Pada titik itulah sistem kendali daya akan memicu fenomena penurunan kecepatan paksa (*thermal throttling*) sembari memerintahkan kipas internal berputar pada kecepatan putaran maksimal demi mencegah cip meleleh.

![Ilustrasi laptop kerja yang mengalami panas berlebih pada bagian ventilasi kipas pendingin](https://img.antaranews.com/cache/800x533/2026/10/19/IMG_20261018_164905.jpg)

Namun yang jarang disadari oleh para pengguna adalah bahwa musuh nomor satu dari sistem pendingin laptop bukanlah usia perangkat, melainkan debu dan kompromi desain dari produsen itu sendiri. Di negara beriklim tropis dengan kelembapan tinggi dan paparan debu jalanan yang melimpah seperti Indonesia, kisi-kisi pembuangan panas pada laptop ibarat magnet bagi kotoran halus. Serat kain dari tas ransel, abu rokok di meja warung, hingga gumpalan rambut kucing perlahan tapi pasti akan menumpuk di bilah pendingin tembaga, membentuk dinding penyumbat yang kedap udara. Akibatnya, panas yang dihasilkan pipa pembuangan terperangkap di dalam ruangan sempit, memaksa kipas meniupkan kembali udara panas ke seluruh papan sirkuit.

Kondisi tersebut diperparah oleh kegilaan para vendor laptop dalam beberapa tahun terakhir yang terobsesi membikin bodi perangkat setipis mungkin. Demi memamerkan bodi ramping seringan buku tulis di etalase toko, para insinyur pabrikan terpaksa memangkas ketebalan sirip pendingin tembaga dan memasang kipas mini berdaya hisap loyo. Memaksa prosesor modern berkekuatan belasan inti bekerja di dalam kurungan aluminium tipis tanpa sirkulasi udara yang memadai adalah resep sempurna untuk menciptakan kompor listrik portabel di atas meja kerja Anda.

Kepanikan pengguna laptop ini sebetulnya sebangun dengan kegundahan warga warkop saat mengeluhkan [baterai HP yang mendadak boros dan panas](/ketika-baterai-hp-boros-bikin-pengguna-panik-mengira-disadap) yang kerap dikira intaian spionase digital. Kita juga sering menyaksikan kelucuan serupa ketika [pengguna HP memasang mode pesawat demi cas kilat](/ketika-pengguna-hp-pasang-mode-pesawat-sambil-berharap-baterai) dengan harapan hukum fisika termal bisa diakali oleh trik pintas murahan.

Alih-alih membuang uang membeli alas pendingin plastik berlampu disko yang anginnya cuma meniup casing luar tanpa menyentuh pipa pembuangan, tindakan paling bijak sesungguhnya sangat sederhana. Bersihkan ventilasi pembuangan secara berkala dengan kuas lembut, ganti pasta termal kering di bengkel komputer terpercaya tiap satu atau dua tahun sekali, dan hindari kebiasaan menaruh laptop di atas kasur empuk atau bantal yang mencekik lubang sirkulasi bawah.

Laptop Anda bukanlah mesin roket luar angkasa yang kebal terhadap hukum termodinamika dasar. Di tengah cuaca terik khatulistiwa dan tuntutan kerjaan yang tak ada habisnya, laptop yang adem bukan didapat dari pajangan lampu RGB di bawah meja, melainkan dari kemauan kita merawat saluran napas kipasnya sebelum mesin tersebut mogok total di tengah malam saat tenggat waktu tinggal lima menit.`
  }
];

export async function runBatch() {
  console.log("=================================================================");
  console.log("🚀 TUJUHCAHAYA BATCH RUNNER (Jadwal Tiap 2 Jam: 05:00 WIB)");
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

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261108-0500.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
