import fs from "node:fs";
import path from "node:path";
import { autoPublishPost } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";
import { markAsSeen } from "./ingest-feeds.mjs";

export const articles = [
  {
    title: "T-Mobile Pangkas Kecepatan Internet Warga Miskin Sampai Dijewer Jaksa New York",
    category: "tech",
    byline: "0100MUNS3DJPCA4539BDBEB12A", // Elang Elano
    tags: ["Elang Elano", "T-Mobile", "Internet Rumah", "Kuota Internet", "Hak Konsumen", "Regulasi Digital", "Teknologi", "Gaya Hidup Digital"],
    imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2024/06/t-mobile-5g-1152x648-1794428350.jpg",
    imageAlt: "Logo dan menara pemancar operator seluler T-Mobile yang tersandung sanksi hukum di New York akibat manipulasi kuota internet warga miskin",
    sourceUrl: "https://arstechnica.com/tech-policy/2026/11/t-mobile-illegally-imposed-50-gb-cap-on-low-income-home-internet-plan-ny-says/",
    excerpt: "Setelah gembar-gembor menjajakan paket internet rumah murah seharga 15 dolar per bulan bagi keluarga berpenghasilan rendah, T-Mobile resmi dijewer Jaksa Agung New York Letitia James karena diam-diam menyematkan batas kuota 50 gigabita yang langsung mencekik kecepatan unduh hingga 97 persen menjadi setara koneksi siput. Praktik licik korporasi yang menyembunyikan halaman pendaftaran dari mesin pencari dan mematikan akses warga pedesaan ini membongkar kepalsuan filantropi korporat telekomunikasi yang gemar mengeksploitasi masyarakat rentan demi mempercantik laporan tanggung jawab sosial.",
    content: `Bagi siapa saja yang hidup pas-pasan dan menggantungkan rezeki pada koneksi internet di kamar indekos, spanduk promosi operator seluler sering kali terasa seperti jebakan Batman yang dirancang sangat matang. Tulisan di spanduk jalanan dipajang besar-besar dengan warna merah mentereng: internet rumah tanpa batas, kuota melimpah, dan tarif murah meriah yang ramah di kantong buruh. Namun begitu tanggal lima belas tiba dan tugas sekolah anak atau berkas pekerjaan kantor harus diunggah, sambungan mendadak macet total laksana mobil mogok di tengah banjir. Ketika dicek ke layanan pelanggan, jawaban yang diterima selalu sama dan serba klise: Anda telah melampaui batas wajar pemakaian. Istilah keren yang disingkat FUP itu sejatinya tak lebih dari dalih halus korporasi untuk menyunat hak pelanggan yang sudah membayar lunas di depan.

Kelakuan culas menyunat akses internet warga kecil ini ternyata bukan monopoli penyedia jasa telekomunikasi di tanah air. Di negara yang mengeklaim diri sebagai pusat kemajuan teknologi dunia, borok serupa baru saja dibongkar secara memalukan oleh aparat penegak hukum. Sebagaimana dicatat oleh jurnalis Jon Brodkin dalam laporannya di Ars Technica, Kantor Kejaksaan Agung New York yang dipimpin Letitia James bersama Gubernur Kathy Hochul resmi menjatuhkan tindakan penegakan hukum tegas terhadap operator raksasa T-Mobile. Penyelidikan mendalam aparat membongkar bahwa T-Mobile telah menipu ribuan keluarga berpenghasilan rendah lewat program subsidi internet rumah murah bertajuk Affordable Broadband Act atau ABA. Program negara bagian tersebut sejatinya mewajibkan korporasi menyediakan akses internet rumah berkecepatan minimal 25 Mbps seharga 15 dolar per bulan bagi warga kurang mampu. Namun alih-alih memberikan layanan yang layak, T-Mobile justru diam-diam menyematkan batas kuota bulanan sebesar 50 gigabita.

![Logo dan menara pemancar operator seluler T-Mobile yang tersandung sanksi hukum di New York akibat manipulasi kuota internet warga miskin](https://cdn.arstechnica.net/wp-content/uploads/2024/06/t-mobile-5g-1152x648-1794428350.jpg)

Batas kuota 50 gigabita untuk sambungan internet rumah tangga modern jelas merupakan lelucon yang sangat kejam. Di era streaming video pembelajaran daring, unduhan pembaruan sistem operasi komputer, dan pekerjaan jarak jauh, kuota sekecil itu biasanya ludes terbakar hanya dalam kurun waktu empat hari pertama setiap bulannya. Begitu batas tersebut terlampaui, sistem T-Mobile secara otomatis mencekik kecepatan unduh pelanggan hingga lebih dari 97 persen, merosot drastis menjadi hanya 650 kilobit per detik. Kecepatan purba yang mengingatkan kita pada derit modem dial-up era sembilan puluhan tersebut membuat internet praktis lumpuh dan tak sanggup lagi membuka situs berita sederhana sekalipun. Penyelidikan kejaksaan juga mengungkap siasat kotor lainnya: T-Mobile membatasi pendaftaran paket murah ini hanya untuk wilayah yang terjangkau jaringan 5G, secara sengaja mendiskriminasi warga pedesaan yang masih mengandalkan menara 4G. Lebih licik lagi, perancang situs web T-Mobile sengaja memasang instruksi khusus agar halaman pendaftaran program subsidi ini tidak terindeks oleh mesin pencari Google, memaksa warga miskin yang kebingungan untuk membeli paket komersial reguler yang harganya selangit.

Menyaksikan korporasi multinasional bernilai ribuan triliun rupiah tega mempermainkan keluarga prasejahtera demi menghemat kapasitas jaringan menghadirkan rasa geram yang luar biasa. Akses internet di abad sekarang bukan lagi barang mewah untuk pamer gengsi, melainkan urat nadi kebutuhan dasar setara air bersih dan listrik. Ketika korporasi memperlakukan kuota subsidi layaknya sedekah yang boleh dipangkas sesuka hati, mereka sesungguhnya sedang memutus peluang anak-anak dari keluarga miskin untuk belajar dan bersaing secara setara. Beruntung bagi warga New York, jaksa setempat tidak tinggal diam dan memaksa T-Mobile menghapus total batas kuota 50 gigabita serta menghentikan praktik pencekikan kecepatan tersebut. Ketegasan hukum semacam ini menjadi pengingat berharga tentang pentingnya [keberanian regulator menyikat tipu daya korporat](/uni-eropa-sikat-bandar-gacha-dan-algoritma-candu-saat-warga-lokal) yang gemar memanfaatkan kelemahan hukum demi menumpuk dividen. Realitas ini terasa sangat kontras dengan nasib konsumen lokal yang masih terus dipaksa pasrah menghadapi mahalnya tarif data, sementara opsi teknologi mandiri seperti [perangkat internet satelit berharga fantastis](/starlink-mini-2-bawa-baterai-mandiri-tapi-harganya-bikin-dompet) masih berada di luar jangkauan dompet rakyat kebanyakan.

Bagi para petinggi T-Mobile yang duduk nyaman di ruang direksi berpendingin udara, kesepakatan damai dengan kejaksaan New York ini mungkin cuma sekadar coretan denda kecil di pembukuan kuartalan. Namun bagi warga biasa, peristiwa ini membongkar topeng kemunafikan slogan tanggung jawab sosial korporat telekomunikasi yang sering dipajang manis di papan iklan kota. Memberi bantuan internet dengan kecepatan siput yang sengaja disembunyikan dari mesin pencari bukanlah wujud kepedulian sosial, melainkan tipu muslihat kelas teri berkedok filantropi modern.`
  },
  {
    title: "Pecatan Kreator DOOM Bangkit Bikin Studio Mandiri Demi Menampar Microsoft",
    category: "game",
    byline: "0100MUNS3DJL68FA69B26FACE9", // Andoru Ray
    tags: ["Andoru Ray", "Hidden Horses", "Danger Pay", "id Software", "DOOM", "Microsoft", "PHK Industri Game", "Studio Independen", "PC Gaming"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/3JdTywSbDrvngvG3ycgJm7-1920-80.jpg",
    imageAlt: "Tampilan visual proyek game tembak-menembak Danger Pay garapan Hidden Horses yang didirikan eks pengembang id Software",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/former-id-software-developers-form-their-own-employee-owned-shooter-studio-in-the-wake-of-microsofts-mass-layoffs/",
    excerpt: "Setelah menjadi korban badai pemutusan hubungan kerja brutal Microsoft yang membabat separuh awak studio id Software, sekitar dua puluh veteran peracik seri legendaris DOOM resmi mengibarkan bendera perlawanan dengan mendirikan Hidden Horses, sebuah studio game independen berstatus kepemilikan karyawan. Dengan mengumumkan proyek perdana bertajuk Danger Pay yang didanai melalui urun dana publik, langkah para pembuat kode legendaris ini membuktikan bahwa kreativitas dan keahlian sejati tidak akan pernah bisa diberangus oleh dinginnya kalkulasi laba rugi korporasi triliunan dolar.",
    content: `Bagi siapa pun yang tumbuh besar bersama bisingnya bunyi tembakan di bilik rental komputer atau menggemari aksi membantai monster di layar kaca, nama seri DOOM dan Quake memiliki posisi yang nyaris sakral. Sejak era disket hitam liat hingga grafis fotorealistis zaman sekarang, formula aksi tembak-menembak orang pertama yang cepat, brutal, dan penuh dentuman musik metal tersebut selalu berhasil memompa adrenalin jutaan pemain di seantero jagat. Di balik mahakarya mekanika permainan yang presisi tersebut, berdiri barisan desainer level, programmer mesin grafis, dan seniman visual yang mendedikasikan separuh hidup mereka di depan layar monitor demi memastikan setiap hentakan peluru terasa memuaskan di ujung jemari pemain.

Namun di mata korporasi raksasa penguasa modal, dedikasi belasan tahun para empu permainan tersebut rupanya tak lebih berharga daripada angka statistik di lembar laporan keuangan. Sebagaimana dicatat oleh jurnalis Harvey Randall dalam laporannya di PC Gamer, sekitar dua puluh mantan pengembang senior id Software yang menjadi korban pemutusan hubungan kerja massal oleh Microsoft resmi mendeklarasikan pendirian studio independen baru bernama Hidden Horses. Langkah berani ini lahir dari kepedihan mendalam setelah Microsoft pada pertengahan tahun ini melakukan pembantaian tenaga kerja secara brutal di divisi Xbox dan anak perusahaannya, termasuk memecat seratus tiga puluh enam pekerja di studio legendaris id Software alias separuh dari total kekuatan studio pencipta genre shooter tersebut. Menolak tenggelam dalam ratapan duka, para veteran yang telah bekerja sama selama lebih dari satu dekade ini memilih bersatu dan mengadopsi struktur kepemilikan karyawan secara mandiri.

![Tampilan visual proyek game tembak-menembak Danger Pay garapan Hidden Horses yang didirikan eks pengembang id Software](https://cdn.mos.cms.futurecdn.net/3JdTywSbDrvngvG3ycgJm7-1920-80.jpg)

Sebagai pembuktian taji perdana, Hidden Horses langsung mengumumkan proyek debut mereka yang diberi judul Danger Pay. Game ini dirancang sebagai penembak orang pertama bertempo tinggi untuk pemain tunggal, yang memadukan kebrutalan aksi arkade klasik ala Smash TV dengan latar dunia distopia satir yang terinspirasi film cult The Running Man. Demi menjaga integritas kreatif dan menolak campur tangan pemodal rakus yang hobi merusak visi artistik, studio ini memutuskan untuk mencari dana pengembangan melalui kampanye urun dana publik di Kickstarter. Mereka sadar betul bahwa membuat game aksi berkelas dunia tidak membutuhkan gedung pencakar langit megah atau ratusan manajer berjas rapi, melainkan kekompakan tim inti yang saling percaya dan benar-benar mencintai seni meracik mekanika tembak-menembak.

Kelahiran Hidden Horses menjadi oase yang menyejukkan di tengah musim dingin industri video game global yang belakangan ini terasa semakin kejam dan nir-empati. Kita telah berulang kali menyaksikan bagaimana kerakusan korporasi triliunan dolar tega membantai studio berbakat hanya demi mendongkrak margin keuntungan pemegang saham, persis seperti tragedi penutupan sepihak yang membuktikan [kebiasaan penerbit besar membunuh studio potensial](/bandai-namco-tutup-studio-unknown-9-bukti-ambisi-transmedia) tanpa rasa penyesalan. Ketika perusahaan teknologi raksasa lebih gemar membakar triliunan rupiah untuk mengakuisisi waralaba populer lalu memecat para kreatornya beberapa bulan kemudian, industri ini sesungguhnya sedang menggali kuburnya sendiri. Dalam situasi suram tersebut, keberanian para pekerja kreatif untuk menolak status budak korporat dan merawat [kehangatan solidaritas gamer](/pemain-final-fantasy-14-nyalakan-lilin-virtual-saat-industri-game) menjadi pesan moral yang sangat lantang bagi ekosistem hiburan interaktif.

Bagi para eksekutif Wall Street dan petinggi korporasi yang terbiasa melihat video game semata-mata sebagai pabrik pencetak dividen, tenaga kerja berbakat mungkin dianggap sebagai suku cadang yang gampang dibuang lalu diganti. Namun berdirinya Hidden Horses membuktikan satu hal mendasar yang kerap gagal dipahami para pemodal: Anda bisa membeli hak paten nama waralaba dan gedung kantornya dengan segepok uang triliunan, tetapi Anda tidak akan pernah bisa membeli jiwa, kreativitas, dan rasa cinta para peracik game yang sesungguhnya.`
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
      markAsSeen(art.sourceUrl.trim());
      console.log(`📌 Sumber URL ditandai seen: ${art.sourceUrl}`);
    }

    results.push(pubResult);
  }

  console.log("\n=================================================================");
  console.log(`🎉 Batch Publikasi 05:00 WIB Berhasil! Total ${results.length} esai berita terbit.`);
  console.log("=================================================================\n");
  return results;
}

// CLI Execution
if (process.argv[1] && process.argv[1].endsWith("run-batch-20261112-0500.mjs")) {
  runBatch()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Batch Execution Failed:", err);
      process.exit(1);
    });
}
