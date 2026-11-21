import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "Bos Xbox Rayakan Ultah Pamer Mesin AI Saat Ribuan Developer Habis Didepak",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Xbox", "Microsoft", "Kecerdasan Buatan", "Industri Game", "PC Gaming", "PHK Developer"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/HggwSWr5d5qdRucowUPLXB-1920-80.jpg",
    imageAlt: "Ilustrasi logo hijau Xbox berpadu dengan perangkat keras konsol dan bayang-bayang masa depan industri game Microsoft",
    sourceUrl: "https://www.pcgamer.com/software/ai/xbox-ceo-looks-to-the-future-as-microsofts-console-turns-25-a-single-person-will-soon-be-able-to-wield-capabilities-that-once-required-entire-nations/",
    excerpt: "Menyambut usia ke-25 konsol Xbox, CEO Asha Sharma meramal masa depan di mana satu orang dengan AI sanggup menggantikan kerja satu negara. Khotbah teknologi yang terdengar getir di telinga para pengembang game yang baru saja disapu badai PHK massal.",
    content: `Bagi anak-anak rental yang masa remajanya dihabiskan dengan berebut stik berkabel di era 2000-an, mendengar konsol Xbox kini resmi menapaki usia seperempat abad rasanya seperti melihat kawan lama yang mendadak berganti haluan hidup secara drastis. Dulu, mesin kotak hitam bongsor berlogo silang hijau menyala itu dipuja karena keberaniannya menantang dominasi absolut PlayStation. Kita mengenangnya lewat serunya begadang main Halo bersama kawan satu tongkrongan, deru mesin mobil di Forza Motorsport yang bikin speaker tabung bergetar, serta etos kerja keras para insinyur piranti lunak yang rela lembur berbulan-bulan demi memastikan setiap piksel di layar televisi cembung tampil memukau. Xbox kala itu adalah simbol kerja keras para perajin game manusia yang menaruh jiwa mereka ke dalam setiap baris kode.

Namun nostalgia hangat tentang ulang tahun ke-25 itu mendadak disiram air es yang membekukan akal sehat. Sebagaimana dicatat dalam laporan PC Gamer dan ulasan Polygon pekan ini menyusul pesan perayaan resmi korporasi, nahkoda anyar divisi game Microsoft, CEO Asha Sharma, justru memilih merayakan hari jadi tersebut dengan melempar visi masa depan yang bikin bulu kuduk para kreator meremang. Dalam tulisan refleksinya, sang bos melontarkan ramalan bombastis bahwa tak lama lagi seorang individu tunggal bakal sanggup mengerahkan kapabilitas penciptaan karya yang pada masa lalu membutuhkan kekuatan seluruh bangsa. Walau kata kecerdasan buatan tidak dieja secara terang-terangan di setiap kalimat, komunitas industri game global paham betul arah angin yang sedang diembuskan: Microsoft berniat membanjiri lini produksi studio mereka dengan mesin generatif AI demi memangkas ongkos tenaga kerja manusia.

Khotbah futuristik semacam ini sungguh terasa seperti tamparan yang kelewat dingin bagi siapa saja yang mencermati nasib industri game dua tahun belakangan. Ramalan manis tentang seorang kreator solo yang bersenjatakan mesin pintar terdengar sangat munafik ketika disandingkan dengan rekam jejak Microsoft sendiri. Publik belum lupa bagaimana korporasi raksasa bernilai puluhan kuadriliun rupiah ini tega mendepak ribuan pengembang berbakat, menutup studio legendaris macam Tango Gameworks yang baru saja melahirkan karya brilian Hi-Fi Rush, serta merampingkan tim kreatif Arkane Austin demi menyenangkan pemegang saham di Wall Street. Memecat para seniman, desainer level, dan musisi manusia yang telah mendedikasikan hidupnya demi membangun jiwa waralaba Xbox, lalu berdiri di mimbar pameran sembari memuji mesin algoritma sebagai juru selamat efisiensi, adalah puncak arogansi korporat yang telah kehilangan rasa hormat pada proses kreatif.

![Ilustrasi logo hijau Xbox berpadu dengan perangkat keras konsol dan bayang-bayang masa depan industri game Microsoft](https://cdn.mos.cms.futurecdn.net/HggwSWr5d5qdRucowUPLXB-1920-80.jpg)

Bagi komunitas gamer di Indonesia yang saban hari menyaksikan game-game favorit mereka terperosok ke jurang daur ulang hambar, janji bahwa AI bakal melahirkan karya luar biasa terdengar seperti dongeng pengantar tidur yang basi. Sebuah video game bukan sekadar kompilasi aset visual tiga dimensi atau jalinan dialog otomatis yang dirangkai berdasarkan probabilitas statistik. Game yang membekas di sanubari pemain selalu lahir dari sentuhan emosi manusia, dari rasa frustrasi saat menyeimbangkan tingkat kesulitan bos, dan dari kehangatan naskah yang ditulis oleh orang yang pernah merasakan patah hati atau tawa lepas bersama kawan. Kecemasan akan hilangnya sentuhan organik ini sempat menjadi sorotan tajam saat [developer game diboikot cuma gara-gara baris kode AI](/developer-big-walk-diboikot-juri-festival-game-cuma-gara-gara) di panggung festival bergengsi, di mana publik mulai muak melihat korporasi menyodorkan jalan pintas digital ketimbang menghargai keringat tim pengembang tulen.

Ironisnya lagi, obsesi mengganti manusia dengan mesin ini justru berbanding terbalik dengan selera pasar yang makin cerdas. Para petinggi industri boleh saja bermimpi memencet satu tombol di komputer mereka lalu melihat sebuah game petualangan dunia terbuka selesai dalam semalam tanpa perlu menggaji animator dan komposer musik. Namun gamer bukan konsumen bodoh yang sudi membayar harga kaset satu juta rupiah demi mengonsumsi konten sintetis yang seragam, kaku, dan membosankan. Ketika studio-studio arus utama sibuk memangkas talenta manusia demi mengejar valuasi saham, mereka lupa bahwa waralaba legendaris seperti Halo, Gears of War, atau Fable bisa dicintai jutaan penggemar bukan karena algoritma komputasi awan yang canggih, melainkan karena ada ribuan kepala manusia yang berdebat sengit di ruang rapat demi menyempurnakan rasa ayunan pedang atau desing peluru di tangan pemain.

Konsol Xbox boleh saja berbangga telah bertahan hidup selama seperempat abad di medan laga industri hiburan global. Namun bila perayaan ulang tahun perak ini hanya dijadikan panggung pembenaran untuk menyingkirkan para kreator manusia demi memuja ilusi mesin pintar, maka masa depan yang sedang mereka tuju bukanlah peradaban emas bermain game, melainkan pabrik daur ulang digital yang dingin dan sunyi. Pada akhirnya, bermain game adalah cara manusia merayakan imajinasi sesamanya; dan di tongkrongan rental mana pun di muka bumi, belum pernah ada sejarahnya anak-anak rela patungan uang koin hanya demi menonton hasil kerja mesin fotokopi yang dipaksa mendongeng.`
  },
  {
    title: "Peneliti Google Koar-Koar AI Temukan Situs Maya Padahal Nyontek Riset Manusia",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "Google", "Agen AI", "Kecerdasan Buatan", "Arkeologi", "Hype Teknologi", "Riset Ilmiah"],
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/maya-sites.jpg?quality=90&strip=all&crop=0,0,100,100",
    imageAlt: "Foto udara lanskap reruntuhan peradaban suku Maya kuno yang tersembunyi di rimbunnya hutan belantara Meksiko",
    sourceUrl: "https://www.theverge.com/ai-artificial-intelligence/1032125/ai-agents-maya-site-archeology-discovery",
    excerpt: "Peneliti Google bikin heboh dunia maya usai mengeklaim agen AI otonomnya sukses menemukan situs peradaban Maya kuno yang belum terpetakan. Sialnya, para arkeolog segera membongkar fakta memalukan: situs tersebut sudah digali dan diterbitkan manusia tahun lalu.",
    content: `Di tongkrongan warung kopi pinggir jalan, kita hampir pasti pernah punya satu kawan yang hobinya pamer penemuan luar biasa dengan dada membusung. Dengan gaya misterius bak penjelajah rimba, ia bakal bercerita panjang lebar bahwa ia baru saja menemukan sebuah kedai kopi tersembunyi di pelosok gang yang kopinya luar biasa nikmat dan belum pernah dijamah orang luar. Kawan-kawan satu meja awalnya mendengarkan dengan takjub, sampai salah seorang pengunjung warung menyahut santai bahwa kedai yang ia maksud itu adalah warung milik pamannya yang sudah buka sejak zaman krisis moneter dan sudah masuk liputan koran lokal bertahun-tahun lalu. Momen ketika rasa bangga mendadak berubah menjadi cengengesan malu itulah yang persis dialami oleh para periset teknologi di Silicon Valley pekan ini. Sindrom merasa paling pintar dan gemar mengklaim kerja keras orang lain ternyata tidak cuma menjangkiti pemuda warkop, tetapi juga melanda korporasi mesin pencari terbesar di dunia.

Kisah menggelikan ini bermula dari unggahan viral di jagat media sosial yang ditiupkan oleh peneliti internal Google, Pietro Miotti. Sebagaimana dicatat dalam laporan investigasi The Verge pekan ini, sang insinyur dengan bangga memamerkan bahwa kawanan agen AI otonom yang ia rancang berhasil membuat terobosan ilmiah besar di bidang arkeologi. Berbekal analisis data sensor citra satelit dan pemindaian laser LiDAR, agen pintar tersebut diklaim sukses mendeteksi sebuah situs reruntuhan kota kuno peradaban Maya di pedalaman hutan Meksiko yang konon belum pernah terpetakan oleh peradaban modern. Di hadapan para pengikutnya di linimasa X, klaim itu langsung diglorifikasi sebagai bukti tak terbantahkan bahwa agen kecerdasan buatan masa kini sudah siap menggantikan peran peneliti lapangan dalam mengungkap misteri sejarah peradaban bumi.

Namun pesta pora para pemuja algoritma itu mendadak bubar jalan saat para arkeolog tulen turun tangan ke kolom komentar. Bukannya mendapat aplaus dari komunitas akademisi, klaim mentereng peneliti Google tersebut justru dihujani tamparan fakta yang sangat memalukan. Sejumlah pakar arkeologi Mesoamerika terkemuka membongkar bahwa koordinat reruntuhan yang dibanggakan itu sama sekali bukan temuan baru. Situs tersebut sudah ditemukan, disurvei langsung dengan jalan kaki menerobos hutan belantara, dan laporannya telah resmi diterbitkan dalam jurnal ilmiah bergengsi sejak tahun lalu oleh tim peneliti manusia. Mesin agen AI rancangan sang insinyur nyatanya tidak menemukan peradaban yang hilang; bot tersebut sekadar menyedot data publikasi ilmiah yang sudah beredar di internet, memuntahkannya kembali ke layar monitor, lalu tuannya yang mabuk publisitas langsung terburu-buru mengklaimnya sebagai penemuan perdananya di muka bumi.

![Foto udara lanskap reruntuhan peradaban suku Maya kuno yang tersembunyi di rimbunnya hutan belantara Meksiko](https://platform.theverge.com/wp-content/uploads/sites/2/2026/11/maya-sites.jpg?quality=90&strip=all&crop=0,0,100,100)

Bagi pekerja teknologi informasi dan sysadmin warkop yang saban hari bergelut dengan kebiasaan model bahasa besar, insiden candi Maya ini sebetulnya adalah potret telanjang dari bahaya over-claim teknologi. Agen pintar pada dasarnya bekerja seperti mesin pencari yang dirangkai dengan probabilitas teks tingkat lanjut; ia tidak memiliki kesadaran spasial apalagi intuisi sejarah. Saat diperintahkan mencari pola gundukan tanah di tengah hutan, algoritma hanya mencocokkan pola piksel dengan basis data yang pernah ia telan sebelumnya. Sikap terburu-buru merayakan kemenangan semu ini mengulang pola serupa saat [chatbot sendiri sebetulnya masih doyan berhalusinasi](/google-deepmind-buktikan-enkripsi-signal-saat-chatbot-sendiri) di berbagai tugas logika dasar. Alih-alih melakukan verifikasi silang ke literatur ilmiah lokal atau berkonsultasi dengan para peneliti yang telah berdarah-darah di lapangan, para pemuja otomasi lebih memilih mengunggah tangkapan layar ke internet demi meraup ribuan impresi dan pujian dari sesama lingkaran gelembung teknologi mereka.

Sikap jemawa ini juga memperlihatkan arogansi industri teknologi yang kerap memandang sebelah mata disiplin ilmu humaniora. Di mata para promotor startup, kerja keras arkeolog yang berbulan-bulan tidur di tenda terpal, bertaruh nyawa menghadapi ular berbisa, dan dengan sabar membersihkan pecahan tembikar menggunakan kuas halus dianggap sebagai proses lambat yang bisa digusur oleh beberapa menit pemrosesan cip server komputasi awan. Padahal, tanpa verifikasi lapangan dan pemahaman mendalam tentang konteks sosio-historis masyarakat setempat, deretan titik koordinat di monitor hanyalah sekumpulan angka mati. Mengklaim penemuan arkeologi tanpa pernah menjejakkan kaki di tanah yang bersangkutan adalah bentuk ketidaksopanan intelektual yang mengabaikan kedaulatan riset para peneliti lokal di Meksiko yang telah mendedikasikan hidupnya bagi sejarah leluhur mereka.

Kecerdasan buatan tentu saja alat bantu komputasi yang luar biasa ampuh bila ditempatkan di tangan yang waras dan rendah hati. Namun selama para insinyurnya masih mengidap penyakit haus validasi dan gampang silau oleh ilusi buatannya sendiri, kita akan terus disuguhi lelucon ilmiah semacam ini. Membanggakan agen digital yang menemukan situs kuno padahal sudah terdaftar di perpustakaan kampus itu persis seperti anak kecil yang pulang berlari ke rumah mengaku menemukan harta karun emas, padahal yang ia bawa cuma perhiasan ibunya yang diambil dari laci meja rias. Sebelum sibuk menyuruh bot mencari jejak kota hilang di hutan belantara, ada baiknya para pegiat teknologi belajar satu keahlian riset paling mendasar: membaca daftar pustaka sebelum mulai berkoar di linimasa.`
  }
];

export async function runBatch() {
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
  console.log(`🎉 Batch Publikasi Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================");
}

// Auto-run if executed directly
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261113-0300.mjs")) {
  runBatch().catch(err => {
    console.error("Batch Execution Error:", err);
    process.exit(1);
  });
}
