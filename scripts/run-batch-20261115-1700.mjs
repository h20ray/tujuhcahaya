import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Ganti Kabel Tembaga Tua Bikin Ribuan Pesawat Amerika Tertahan di Aspal",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Infrastruktur Jaringan", "FAA", "Sysadmin", "Aviasi", "Kabel Optik", "Elang Elano"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/gettyimages-2304493507.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Deretan pesawat komersial tertahan di landasan pacu bandara akibat instruksi ground stop nasional FAA",
    sourceUrl: "https://www.theverge.com/transportation/1033898/faa-ground-stop-sean-duffy-faa-copper-wire",
    excerpt: "Instruksi penghentian penerbangan nasional di Amerika Serikat dipicu oleh pemotongan kabel tembaga lawas saat teknisi memasang fiber optik di fasilitas FAA. Di balik jargon cloud modern, peradaban aviasi bernilai triliunan rupiah ternyata masih ditopang kawat renta.",
    content: `Ada sebuah adagium klasik di kalangan teknisi jaringan dan tukang servis komputer kampung yang selalu terbukti kebenarannya: sistem paling canggih di muka bumi ini selalu takluk pada satu hal sepele bernama kabel putus. Di warung kopi tempat para pekerja lepas dan sysadmin biasa berkumpul melepas penat, cerita soal koneksi internet mendadak lenyap gara-gara kabel utilitas tersangkut truk kontainer atau terpotong cangkul pekerja gorong-gorong sudah menjadi santapan harian yang mengundang gelak tawa. Kita kerap mencibir betapa rapuhnya instalasi kabel jalanan di tanah air yang semrawut layaknya sarang burung.

Namun siapa sangka, rasa jumawa negara adidaya sekelas Amerika Serikat yang kerap membanggakan supremasi teknologinya di angkasa luar seketika runtuh berantakan oleh perkara yang persis sama. Seluruh armada penerbangan di seantero negeri Paman Sam mendadak mati kutu di atas aspal bukan gara-gara serangan siber peretas asing atau badai geomagnetik matahari, melainkan karena seutas kabel tembaga tua yang dicabut dari soketnya.

Kejadian memalukan ini dibeberkan secara gamblang oleh Menteri Transportasi Amerika Serikat Sean Duffy dalam konferensi pers resminya akhir pekan ini. Sebagaimana dicatat dalam laporan The Verge, instruksi penghentian penerbangan massal (*nationwide ground stop*) yang diterbitkan regulator penerbangan FAA bermula dari pekerjaan penggantian kabel tembaga lawas dengan jaringan serat optik (*fiber optic*) di sebuah fasilitas terpencil FAA. Pihak kementerian dengan enteng menyebut insiden tersebut hanyalah imbas dari "pemeliharaan rutin" (*routine maintenance*). Namun bagi jutaan penumpang yang telantar di ruang tunggu bandara dan ratusan maskapai yang jadwalnya berantakan, pemeliharaan rutin tersebut adalah bencana logistik yang memalukan akal sehat.

![Deretan pesawat komersial tertahan di landasan pacu bandara akibat instruksi ground stop nasional FAA](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/gettyimages-2304493507.jpg?quality=90&strip=all&crop=0,0,100,100)

Bagi siapa saja yang memahami seluk-beluk arsitektur jaringan komputer, penjelasan birokrat tersebut justru menelanjangi borok manajemen infrastruktur publik yang sangat mengerikan. Istilah "pemeliharaan rutin" yang merontokkan seluruh sistem navigasi bandara nasional membuktikan satu hal krusial: ketiadaan sistem redundansi cadangan (*failover*) yang layak. Dalam protokol rekayasa server standar di perusahaan swasta kelas menengah saja, mencabut jalur kabel primer untuk migrasi data wajib memiliki jalur cadangan otomatis yang siap mengambil alih beban trafik dalam hitungan milidetik. Menjalankan migrasi fisik pada sistem keselamatan penerbangan tanpa pengaman ganda adalah kecerobohan luar biasa yang tak bisa ditoleransi.

Ironi ini terasa makin getir ketika kita menengok anggaran fantastis yang digelontorkan pemerintah federal setiap tahunnya untuk memodernisasi lalu lintas udara. Para pejabat FAA selama bertahun-tahun sangat gemar berpidato di hadapan parlemen memamerkan jargon kecerdasan buatan, komputasi awan, dan digitalisasi menara kontrol. Namun di balik layar presentasi yang memukau para politisi, urat nadi komunikasi aviasi mereka kenyataannya masih menggantungkan nasib pada untaian kawat tembaga analog peninggalan era perang dingin.

Ketergantungan kronis pada perangkat lawas ini sejatinya mengulang keprihatinan publik beberapa waktu lalu, persis seperti skandal menggelikan saat [FAA baru memensiunkan disket liuk](/faa-baru-pensiunkan-disket-liuk-bukti-sistem-kuno-lebih-waras) dari konsol menara pengawas setelah bertahun-tahun dianggap sakral. Tabiat birokrasi yang gemar menambal sistem purba dengan solusi tambal sulam ini setali tiga uang dengan fenomena saat [FAA berkoar memasang kecerdasan buatan](/faa-bangga-pasang-ai-di-langit-amerika-tapi-lupa-ajak-serikat) di ruang kendali lalu lintas udara, sementara fondasi fisik dan kesejahteraan teknisi di lapangan terus diabaikan. Ketika pejabat publik lebih terpikat pada proposal proyek bernilai miliaran rupiah ketimbang memastikan setiap jengkal kabel di ruang server terawat dengan baik, kekacauan massal semacam ini hanyalah tinggal menunggu waktu untuk meledak kembali.

Masyarakat perkotaan yang sehari-hari membayar tiket pesawat mahal bersama pungutan pajak bandara tentu berhak merasa murka. Kita dipaksa menelan kenyataan bahwa di balik moncong pesawat jet supersonik dan kokpit berlayar sentuh modern, nyawa ribuan manusia di udara ternyata dihubungkan oleh seutas kabel tembaga rapuh yang nasibnya ditentukan oleh ketelitian mata seorang teknisi di bilik terpencil. Begitu tang pemotong bekerja tanpa koordinasi yang rapi, seluruh armada burung besi modern itu langsung tak berdaya bak burung patah sayap.

Di pos ronda warkop tempat kawan-kawan teknisi jaringan biasa menyeruput kopi hitam sembari menggulung kabel LAN sisa proyek, insiden FAA ini cuma memicu dengusan tawa sinis. Kita disadarkan kembali bahwa peradaban digital modern yang diagung-agungkan para elit Silicon Valley ternyata masih berdiri di atas fondasi tanah liat yang sangat rapuh. Sebelum para petinggi aviasi sibuk merancang taksi terbang otonom atau kecerdasan buatan pengatur awan, ada baiknya mereka belajar dulu ke teknisi warnet di pojok gang perumahan tentang cara memasang jalur failover sederhana, agar jadwal penerbangan satu benua tidak mendadak lumpuh hanya gara-gara kabel tembaga tua sengaja dicabut untuk dipensiunkan.`
  },
  {
    title: "Bocoran Radio GTA 6 Penuh Musisi Beken Saat Gamer Masih Waswas Soal Harga",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["GTA 6", "Rockstar Games", "Soundtrack Game", "PC Gaming", "Industri Game", "Andoru Ray"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/AkvZgaawSvDoiAwX5qbvvY-1920-80.jpg",
    imageAlt: "Visual mobil sport melintasi jalanan neon Vice City dalam bocoran soundtrack Grand Theft Auto VI",
    sourceUrl: "https://www.pcgamer.com/games/grand-theft-auto/gta-6-soundtrack-leak-confirmed-accurate-with-new-songs-from-lana-del-rey-playboi-carti-and-keith-richards/",
    excerpt: "Bocoran lagu stasiun radio GTA 6 terbukti akurat menghadirkan Lana Del Rey, Playboi Carti, hingga Keith Richards. Di balik kemewahan lisensi musik kelas wahid ini, gamer akar rumput justru kian waswas menghadapi potensi lonjakan harga kaset.",
    content: `Bagi siapa saja yang pernah menghabiskan masa remajanya begadang di rental konsol atau kamar indekos demi memainkan seri Grand Theft Auto, ada satu kenikmatan sakral yang nilainya kerap melampaui misi utama permainan: membajak mobil sedan paling mengilap di persimpangan jalan, menyalakan radio mobil dengan volume maksimal, lalu berkendara santai menyusuri jalanan kota tanpa tujuan yang jelas. Selama lebih dari dua dekade, stasiun radio di dalam semesta GTA bukan sekadar instrumen pengisi kekosongan telinga, melainkan detak jantung kultural yang meniupkan jiwa ke dalam setiap jengkal aspal virtual yang dijelajahi pemain.

Maka tak mengherankan jika setiap kabar burung mengenai daftar putar musik untuk judul teranyar mereka, Grand Theft Auto VI, selalu sanggup menyulut kehebohan luar biasa di jagat maya. Pekan ini, desas-desus panjang tersebut akhirnya menemui titik terang. Sebagaimana dicatat dalam laporan mendalam PC Gamer, bocoran katalog musik radio GTA 6 terbukti akurat setelah sejumlah lagu rilisan terbaru mengonfirmasi keterlibatan nama-nama megabintang lintas generasi. Di antara daftar lagu yang bocor ke publik, terpampang nama-nama raksasa seperti biduanita melankolis Lana Del Rey, ikon hip-hop Playboi Carti, hingga petikan gitar legendaris pentolan grup musik The Rolling Stones, Keith Richards.

Rockstar Games dan induk perusahaannya, Take-Two Interactive, tampaknya kembali unjuk gigi menggelontorkan puluhan juta dolar demi mengamankan hak lisensi musik kelas wahid. Mereka bertekad menyulap kota fiktif Vice City menjadi panggung karnaval audio terakbar dalam sejarah industri hiburan interaktif.

![Visual mobil sport melintasi jalanan neon Vice City dalam bocoran soundtrack Grand Theft Auto VI](https://cdn.mos.cms.futurecdn.net/AkvZgaawSvDoiAwX5qbvvY-1920-80.jpg)

Namun bila dipandang dari kacamata gamer berkantong pas-pasan yang sehari-hari menimbang harga diskon musiman di platform toko digital, gemerlap nama besar para pemusik tersebut justru memicu kecemasan baru yang bikin kening berkerut. Di tongkrongan warung kopi tempat para pemain game kasual biasa meluapkan unek-unek, pertanyaan kritis langsung mencuat: siapa yang pada akhirnya bakal menanggung beban biaya royalti musik selangit ini? Di tengah kabar burung yang kian santer bahwa publisher berniat mematok banderol kaset edisi standar GTA 6 menembus angka 80 hingga 100 dolar Amerika Serikat, kemewahan soundtrack ini terasa seperti hidangan restoran bintang lima yang dipaksakan masuk ke meja warteg.

Kekhawatiran ini kian beralasan mengingat tabiat industri game arus utama yang belakangan kian getol memeras dompet pemain. Kita seolah digiring untuk memaklumi kenaikan harga kaset hingga menyentuh angka satu setengah juta rupiah demi fitur kosmetik dan katalog musik yang sejatinya bisa kita dengarkan secara gratis di aplikasi streaming di smartphone kita sendiri. Rasa cemas ini makin berlipat ganda karena hingga detik ini kepastian jadwal peluncuran game tersebut masih dibayangi ketidakpastian, apalagi [gamer PC masih disuruh gigit jari menunggu kepastian rilis](/pre-order-gta-6-pecahkan-rekor-konsol-saat-gamer-pc-tetap-disuruh) tanpa tanggal yang jelas.

Skala produksi GTA 6 yang begitu rakus menyedot perhatian dan kapital ini bahkan memicu turbulensi tersendiri di panggung industri global. Atmosfer persaingan yang kian tidak sehat memaksa banyak pengembang kecil memutar otak mencari celah bertahan hidup, persis seperti fenomena unik saat [developer indie nekat merilis game demi menghindari bayang-bayang GTA 6](/developer-indie-nekat-rilis-game-di-steam-saat-publisher-raksasa) sebelum raksasa tersebut melibas habis ruang etalase digital. Industri hiburan kini tampak didikte oleh obsesi korporasi raksasa yang gemar menghamburkan uang demi prestise visual dan audio, sementara ruang bernapas bagi inovasi gameplay organik kian terdesak ke sudut sempit.

Gamer akar rumput pada hakikatnya tidak pernah menuntut daftar lagu yang dipenuhi bintang papan atas pemenang piala grammy untuk bisa menikmati sensasi kejar-kejaran dengan mobil polisi virtual. Daya tarik GTA sejak era Playstation 2 selalu bertumpu pada kebebasan sandbox yang kocak, sindiran sosial yang menohok, dan mekanik bermain yang solid. Menjejalkan musisi berbayar mahal ke dalam stasiun radio terasa seperti kompensasi berlebihan untuk menutupi minimnya pembaruan gameplay yang revolusioner.

Di pos ronda warkop tempat anak-anak muda biasa adu ketangkasan bermain game bola sembari patungan membeli gorengan hangat, kabar bocoran lagu GTA 6 ini cuma disambut tawa getir. Mendengar tembang Lana Del Rey atau petikan dawai Keith Richards sambil kebut-kebutan di jalanan neon Vice City memang terdengar menggoda telinga. Namun selama tanggal rilis resminya masih berpotensi diundur sesuka hati para bos studio dan harga kasetnya mengancam uang belanja dapur sebulan penuh, kita mending tetap setia menyalakan radio butut di sudut kamar sembari menikmati game-game lama yang terbukti tidak pernah memeras isi dompet.`
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
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 BATCH SELESAI: ${results.length} artikel berhasil diaudit & dipublikasikan.`);
  console.log("=================================================================");
  for (const r of results) {
    console.log(`- [${r.status.toUpperCase()}] ${r.slug} (Skor: ${r.score}) -> ${r.url}`);
  }
}

runBatch().catch(err => {
  console.error("FATAL BATCH ERROR:", err);
  process.exit(1);
});
