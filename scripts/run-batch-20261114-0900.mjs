import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Microsoft Minta Maaf Layanan Tumbang tapi Ogah Akui Efek PHK Puluhan Ribu Insinyur",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Microsoft", "Cloud Computing", "PHK Karyawan", "Infrastruktur IT", "Teknologi", "Elang Elano"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/kc77wf7a29YuNrdx6Ugct9-1920-80.jpg",
    imageAlt: "Gedung kantor pusat Microsoft dengan logo jendela empat warna di Redmond Washington",
    sourceUrl: "https://www.pcgamer.com/software/microsoft-deeply-apologizes-for-global-service-outage-says-no-ai-or-hackers-are-to-blame/",
    excerpt: "Microsoft merilis permohonan maaf mendalam usai layanan komputasi awan dan sistem perkantoran mereka tumbang berjamaah di seluruh dunia. Manajemen membantah keterlibatan peretas dan bot kecerdasan buatan, namun bungkam soal dampak pemangkasan puluhan ribu staf teknis.",
    content: `Ada sebuah pemandangan ajaib yang mendadak terjadi di lantai gedung perkantoran ibu kota ketika jam kerja baru saja beranjak siang. Suasana ruangan yang biasanya riuh oleh derak papan ketik dan obrolan panik mengejar tenggat laporan mendadak berubah menjadi hening layaknya ruang meditasi spiritual. Karyawan yang tadinya menatap layar monitor dengan dahi berkerut serentak melepaskan genggaman mouse, bertukar pandang dengan rekan di sebelah kubikel, lalu tersenyum simpul penuh kelegaan. Layanan surat elektronik Outlook menolak memuat pesan baru, aplikasi panggilan video Teams menampilkan layar putih tanpa nyawa, dan dokumen kerja daring mendadak terkunci tanpa aba-aba. Tanpa perlu surat edaran libur bersama dari bagian personalia, seisi kantor serempak beranjak menuju ruang pantri untuk menyeduh cangkir kopi kedua sembari selonjoran santai. Kerapuhan infrastruktur digital modern kembali memberikan anugerah istirahat cuma-cuma yang tidak direncanakan.

Namun di balik momen rehat dadakan bagi para pekerja kelas buruh tersebut, para petinggi teknologi di seberang samudra sedang sibuk menyusun kalimat penyesalan paling manis. Sebagaimana dicatat dalam laporan PC Gamer pekan ini, raksasa piranti lunak Microsoft secara resmi melayangkan permohonan maaf mendalam kepada pelanggan global mereka setelah serangkaian layanan penting mendadak lumpuh berjamaah selama berjam-jam. Gangguan masif tersebut menumbangkan akses jutaan pengguna di berbagai belahan dunia, melumpuhkan operasional korporasi besar, hingga memicu kepanikan di kalangan administrator jaringan. Yang menarik dari klarifikasi resmi yang dirilis oleh manajemen, mereka buru-buru menegaskan dua hal krusial: kekacauan ini sama sekali bukan disebabkan oleh serangan siber dari kelompok peretas (*hackers*), dan bukan pula karena adanya malafungsi dari algoritma kecerdasan buatan (*artificial intelligence*) yang belakangan gencar mereka pasang di berbagai produk.

Mendengar dalih defensif tersebut di meja warung kopi, kita yang saban hari berurusan dengan kabel jaringan dan konfigurasi server tentu sulit untuk menahan senyum sinis. Bila bukan musuh tak kasat mata dari luar dan bukan pula robot pintar yang berulah, lantas siapa sebenarnya biang keladi yang membuat jutaan baris kode infrastruktur tersebut mendadak korsleting? Jawaban paling masuk akal sesungguhnya tidak tersimpan di dalam berkas log sistem yang rumit, melainkan terpampang nyata pada grafik efisiensi anggaran korporasi. Dalam kurun waktu empat tahun terakhir, Microsoft tercatat telah memangkas tidak kurang dari 30.000 karyawan mereka lewat rentetan gelombang pemutusan hubungan kerja. Dari insinyur senior yang sudah hafal seluk-beluk arsitektur sistem luar kepala, hingga staf pemeliharaan teknis di lapangan yang bertugas mengawasi lalu lintas jaringan, ribuan tenaga ahli disingkirkan begitu saja demi menyenangkan para pialang saham di Wall Street.

![Gedung kantor pusat Microsoft dengan logo jendela empat warna di Redmond Washington](https://cdn.mos.cms.futurecdn.net/kc77wf7a29YuNrdx6Ugct9-1920-80.jpg)

Ketika ribuan tenaga ahli disingkirkan demi memoles margin laba kuartalan, beban merawat ribuan rak server komputasi awan yang kian rakus daya otomatis ditimpakan ke atas pundak segelintir pekerja yang tersisa. Di saat yang sama, kas kasir perusahaan dibakar habis-habisan hingga ratusan triliun rupiah demi memborong kartu akselerator grafis dan mendanai riset bot percakapan generatif yang digembar-gemborkan bakal merevolusi peradaban manusia. Para eksekutif puncak tampaknya lupa bahwa secanggih apa pun model bahasa buatan yang dipamerkan di panggung seminar teknologi, seluruh ekosistem komputasi tersebut tetaplah bertumpu pada kabel tembaga fisik, pendingin ruang data, dan perhatian manusia nyata yang terjaga setiap malam. Ironi ketergantungan rapuh ini mengulang kekacauan serupa saat [server Microsoft 365 yang mendadak tumbang](/server-microsoft-365-tumbang-bukti-ketergantungan-cloud-malah) sempat mengunci jutaan dokumen penting perkantoran beberapa waktu lalu. Sikap abai korporat ini kian telanjang saat para bos teknologi lebih gemar [merayakan pencapaian otomatisasi di tengah pemecatan massal](/bos-xbox-rayakan-ultah-pamer-mesin-ai-saat-ribuan-developer-habis), menganggap kecerdasan mesin bisa menambal kekosongan tangan-tangan terampil yang didepak demi efisiensi laporan keuangan.

Pada akhirnya, selembar surat permohonan maaf puitis dari korporat berkapitalisasi triliunan dolar tidak akan pernah bisa menebus rasa jengkel para sysadmin dan karyawan kantor yang jadwal kerjanya berantakan. Kita diajarkan pelajaran berharga bahwa pemadaman layanan berskala global bukanlah bencana alam yang turun tiba-tiba dari langit, melainkan konsekuensi logis dari keserakahan manajemen yang memeras sumber daya manusia hingga tetes terakhir demi mengejar ilusi efisiensi otomatisasi. Jika besok lusa layar kerja Anda kembali menampilkan pesan galat koneksi yang berputar tanpa henti, jangan buang waktu mengutuk peretas di belahan bumi lain. Cukup tatap cangkir kopi Anda dengan santai, nikmati jeda istirahat yang dihadiahkan oleh keangkuhan korporasi, dan biarkan para eksekutif itu memeras otak mencari kambing hitam berikutnya.`
  },
  {
    title: "Developer Indie Nekat Rilis Game di Steam Saat Publisher Raksasa Gemetaran Hadapi GTA 6",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Grand Theft Auto", "GTA 6", "Game Indie", "Steam", "Industri Game", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/8TjNUwvCTei477eGjE9ymL-1920-80.jpg",
    imageAlt: "Kompilasi tangkapan layar game indie simulasi jalanan dan petualangan roguelike di etalase toko Steam",
    sourceUrl: "https://www.pcgamer.com/games/yes-some-brave-games-are-still-launching-on-steam-during-gta-6-launch-week/",
    excerpt: "Jadwal peluncuran Grand Theft Auto 6 sukses membikin para penerbit game raksasa gemetaran hingga menunda proyek mereka. Namun di tengah kepanikan industri, sejumlah pengembang game independen di Steam justru nekat merilis karya mereka di pekan yang sama.",
    content: `Bagi siapa saja yang gemar menghabiskan waktu luang di malam hari sembari menatap etalase toko Steam, kalender rilis video game belakangan ini terasa seperti zona evakuasi bencana alam skala penuh. Semua orang di industri hiburan digital mafhum betul bahwa ada satu monster raksasa bernama Grand Theft Auto 6 yang siap menghantam daratan dan menyapu bersih seluruh atensi jagat internet. Di ruang rapat direksi para penerbit game kelas kakap, suasana tegang sudah menyerupai posko krisis darurat militer. Begitu desas-desus jendela peluncuran karya kolosal Rockstar Games itu mulai mengkristal, para bos publisher multinasional langsung mengambil langkah seribu. Proyek game aksi berbujet ratusan miliar rupiah buru-buru digeser jadwal rilisnya, ada yang diundur berbulan-bulan ke tahun berikutnya, dan tidak sedikit yang dimajukan secara terburu-buru demi menghindari tabrakan maut dengan mobil monster dari kota fiktif Vice City.

Namun di tengah pemandangan menggelikan saat para eksekutif beranggaran triliunan rupiah gemetaran ketakutan, sebuah kejutan menyegarkan justru meletup dari sudut etalase game komputer pribadi. Sebagaimana dicatat dalam laporan PC Gamer pekan ini, sejumlah studio game independen bernyali baja menegaskan pantang mengibarkan bendera putih atau menggeser tanggal peluncuran mereka di Steam, sekalipun harus bersinggungan langsung dengan pekan keramat peluncuran GTA 6. Alih-alih gentar ditelan badai publisitas sang raksasa, para kreator game indie ini dengan penuh percaya diri tetap mematok tanggal rilis karya mereka. Judul-judul yang siap menantang sang monster pun sangat bervariasi sekaligus nyentrik: mulai dari game simulasi mengatur kelancaran arus bundaran jalan raya, petualangan strategi tata kelola republik maritim kuno, hingga penjelajahan ruang bawah tanah ala roguelike bernuansa fantasi gelap yang menuntut ketangkasan jari pemain.

Keberanian para pengembang skala kecil ini terasa seperti angin surga yang menampar kemalasan industri game arus utama. Publisher raksasa yang punya modal promosi selangit dan tim pemasaran ratusan orang justru bertingkah seperti anak ayam ketakutan, menunda game mereka karena sadar produk yang mereka jajakan tidak memiliki keunikan mendasar. Ketakutan korporat itu lahir karena formula game aksi beranggaran besar hari ini nyaris seragam: dunia terbuka hambar yang dipenuhi ikon misi repetitif, visual grafis fotorealistis yang menyiksa kartu grafis, dan balutan monetisasi live-service yang haus dompet pemain. Ketika produk mereka hanya berupa tiruan kelas dua dari formula yang sudah disempurnakan oleh Rockstar, wajar jika para eksekutif itu lari terbirit-birit mencari tanggal kalender yang aman.

![Kompilasi tangkapan layar game indie simulasi jalanan dan petualangan roguelike di etalase toko Steam](https://cdn.mos.cms.futurecdn.net/8TjNUwvCTei477eGjE9ymL-1920-80.jpg)

Sebaliknya, para perancang game independen paham betul bahwa penikmat karya mereka bukanlah kerumunan pemain kasual yang gampang terseret arus tren media sosial. Seorang gamer yang rela menghabiskan waktu berjam-jam untuk memikirkan sudut belokan truk di game simulasi bundaran jalan atau merancang rute kapal dagang abad pertengahan tidak sedang mencari sensasi baku tembak liar melawan polisi di jalan tol. Ceruk pasar yang setia dan punya apresiasi tinggi terhadap gameplay murni inilah yang menjadi benteng pertahanan terkuat bagi studio kecil. Keberanian mereka berdiri tegak di tengah histeria industri hiburan bahkan kontras dengan sikap korporasi lain yang sampai melahirkan [kebijakan bos studio Palworld yang meliburkan kantor](/studio-palworld-liburkan-karyawan-demi-gta-6-bukti-bos-jujur) demi menyambut peluncuran GTA 6. Di saat yang sama, para penikmat game yang sudah muak dipermainkan oleh [bungkusan fisik game yang isinya cuma selembar kode unduhan](/ketika-kotak-fisik-gta-6-mulai-beredar-tapi-isinya-cuma-selembar) justru menaruh respek mendalam pada kejujuran game indie yang menjual karya utuh tanpa gimmick promosi palsu.

Di tongkrongan warkop para pencinta game PC, aksi nekat para developer indie ini disambut dengan tepuk tangan bangga dan rasa hormat yang tulus. Mereka membuktikan bahwa dunia video game tidak harus selalu bertekuk lutut di bawah tirani satu judul raksasa beranggaran tanpa batas. Di saat para bos korporat sibuk mengeluh soal persaingan pasar yang kejam, studio-studio kecil ini dengan santai membuktikan bahwa karya yang dibuat dengan cinta, orisinalitas ide, dan rasa hormat kepada pemain akan selalu menemukan jalannya sendiri menuju monitor para gamer. Besok lusa, jika Anda melihat jutaan orang sibuk merampok bank di Vice City, luangkanlah sedikit waktu untuk melirik studio independen yang merilis game simulasi bundaran jalan di etalase sebelah. Siapa tahu, kedamaian sejati justru tersimpan di sana.`
  }
];

async function runBatch() {
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
  console.log(`🎉 Batch 09:00 selesai! Total artikel terbit: ${results.length}`);
  console.log("=================================================================");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("run-batch-20261114-0900.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Batch run failed:", err);
      process.exit(1);
    });
}
