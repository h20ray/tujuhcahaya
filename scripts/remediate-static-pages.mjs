import {
  block,
  multiSpanBlock,
  savePage,
  db,
} from "./lib/static-page-helpers.mjs";

console.log("=== Tujuhcahaya Static Pages Remediation ===");
console.log("1. Removing stale pages (about dummy, tujuhcahaya builder leftover)...");
db.prepare("DELETE FROM ec_pages WHERE slug IN ('about', 'tujuhcahaya', 'homepage')").run();

// -------------------------------------------------------------
// A. PEDOMAN PEMBERITAAN MEDIA SIBER (ID & EN)
// -------------------------------------------------------------
console.log("\n2. Authoring Pedoman Pemberitaan Media Siber...");

const pedomanIdBlocks = [
  block("Pedoman Pemberitaan Media Siber Tujuhcahaya", "h2"),
  block(
    "Kemerdekaan berpendapat, kemerdekaan berekspresi, dan kemerdekaan pers adalah hak asasi manusia yang dilindungi oleh Pancasila, Undang-Undang Dasar 1945, serta Deklarasi Universal Hak Asasi Manusia PBB. Sebagai media siber independen yang mengedepankan etika, kecerdasan publik, dan akuntabilitas informasi, Tujuhcahaya (tujuhcahaya.com) menjunjung tinggi dan menerapkan secara utuh Pedoman Pemberitaan Media Siber yang disahkan oleh Dewan Pers dan komunitas pers di Jakarta pada 3 Februari 2012."
  ),
  block("1. Ruang Lingkup", "h3"),
  block(
    "Media Siber adalah segala bentuk media yang menggunakan wahana internet dan melaksanakan kegiatan jurnalistik, serta memenuhi persyaratan Undang-Undang Pers dan Standar Perusahaan Pers yang ditetapkan Dewan Pers."
  ),
  block(
    "Isi Buatan Pengguna (User Generated Content) adalah segala isi yang dibuat dan/atau dipublikasikan oleh pengguna media siber, antara lain artikel, komentar, opini, foto, audio, maupun video."
  ),
  block("2. Verifikasi dan Keberimbangan Berita", "h3"),
  block(
    "Pada prinsipnya setiap berita harus melalui verifikasi. Berita yang dapat merugikan pihak lain memerlukan verifikasi pada berita yang sama untuk memenuhi prinsip akurasi dan keberimbangan."
  ),
  block(
    "Setiap berita yang dipublikasikan di Tujuhcahaya wajib mencantumkan waktu pemuatan (timestamp) dan identitas jurnalis/kontributor redaksi."
  ),
  block("3. Isi Buatan Pengguna (User Generated Content)", "h3"),
  block(
    "Tujuhcahaya menyediakan kanal pengiriman naskah dan opini publik melalui ruang Kirim Tulisan. Seluruh materi kiriman pengguna disaring melalui mekanisme kurasi redaksi sebelum dipublikasikan."
  ),
  block(
    "Pengguna dilarang memuat isi buatan pengguna yang mengandung kebohongan, fitnah, ujaran kebencian, diskriminasi, serta pelanggaran hak kekayaan intelektual."
  ),
  block("4. Ralat, Koreksi, dan Hak Jawab", "h3"),
  block(
    "Ralat, koreksi, dan hak jawab mengacu pada Undang-Undang Pers, Kode Etik Jurnalistik, dan Pedoman Hak Jawab yang ditetapkan Dewan Pers."
  ),
  block(
    "Ralat atau koreksi wajib ditautkan secara langsung pada berita awal yang diralat, disertai keterangan waktu pelaksanaan koreksi."
  ),
  block("5. Pencabutan Berita", "h3"),
  block(
    "Berita yang sudah dipublikasikan tidak dapat dicabut karena alasan penyensoran oleh pihak luar redaksi, kecuali terkait masalah perlindungan masa depan anak, kerahasiaan korban kekerasan, atau atas pertimbangan khusus Dewan Pers."
  ),
  block("6. Praktik Iklan dan Sponsor", "h3"),
  block(
    "Tujuhcahaya membedakan secara tegas dan terang antara produk berita/liputan jurnalistik dengan materi iklan, advetorial, atau konten bersponsor."
  ),
  block("7. Hak Cipta dan Pengutipan", "h3"),
  block(
    "Tujuhcahaya menghormati hak cipta pihak lain dan mewajibkan pencantuman sumber secara jelas pada setiap rujukan kutipan, infografis, data riset, atau materi audiovisual yang digunakan."
  ),
  block("8. Pengaduan dan Penyelesaian Sengketa", "h3"),
  block(
    "Masyarakat atau pihak yang merasa dirugikan oleh pemberitaan dapat menyampaikan surat tanggapan, koreksi, atau pengaduan langsung melalui meja redaksi di email: redaksi@tujuhcahaya.com. Penilaian akhir atas sengketa pelaksanaan pedoman ini diselesaikan oleh Dewan Pers."
  ),
];

const pedomanEnBlocks = [
  block("Cyber Media News Guidelines", "h2"),
  block(
    "Freedom of speech, freedom of expression, and freedom of the press are fundamental human rights protected by the Constitution of the Republic of Indonesia and the Universal Declaration of Human Rights. Tujuhcahaya (tujuhcahaya.com) strictly adheres to the Cyber Media News Guidelines officially enacted by the Indonesian Press Council (Dewan Pers)."
  ),
  block("1. Scope", "h3"),
  block(
    "Cyber Media encompasses all digital platforms utilizing internet infrastructure to conduct journalistic operations in accordance with the Press Law and Press Company Standards."
  ),
  block("2. Verification and Balance", "h3"),
  block(
    "Every article published undergoes thorough verification. News reports involving allegations or disputes must ensure fair, proportional opportunities for response to maintain accuracy and balance."
  ),
  block("3. User-Generated Content (UGC)", "h3"),
  block(
    "Reader submissions and community essays submitted via our platform are curated by editorial staff. Submissions promoting defamation, hate speech, unlawful incitement, or copyright infringement will not be published."
  ),
  block("4. Corrections and Right of Reply", "h3"),
  block(
    "Corrections and Rights of Reply are handled in accordance with journalistic standards. Any corrected article will contain an explicit editorial note detailing the nature and timestamp of the update."
  ),
  block("5. Retractions", "h3"),
  block(
    "Published news reports cannot be arbitrarily retracted or censored due to external pressure, except when necessary for the protection of minors or per Press Council rulings."
  ),
  block("6. Advertising and Sponsored Content", "h3"),
  block(
    "Tujuhcahaya strictly differentiates between editorial journalism and sponsored or advertising material through clear labeling."
  ),
  block("7. Dispute Resolution", "h3"),
  block(
    "Complaints or requests for correction regarding any published coverage should be directed to the editorial desk at: editorial@tujuhcahaya.com. Final arbitrations are resolved through the Indonesian Press Council."
  ),
];

savePage("pedoman-media-siber", "id", "Pedoman Pemberitaan Media Siber", pedomanIdBlocks);
savePage("pedoman-media-siber", "en", "Cyber Media News Guidelines", pedomanEnBlocks);

// -------------------------------------------------------------
// B. PRIVACY POLICY (CLEAN ID & EN)
// -------------------------------------------------------------
console.log("\n3. Cleaning and separating Privacy Policy...");

const privacyIdBlocks = [
  block("Kebijakan Privasi Tujuhcahaya", "h2"),
  block(
    "Di Tujuhcahaya (tujuhcahaya.com), privasi pengunjung adalah prioritas utama kami. Kebijakan Privasi ini menerangkan jenis data dan informasi yang kami kumpulkan, bagaimana informasi tersebut digunakan, serta langkah-langkah yang kami ambil untuk melindungi privasi Anda saat membaca dan berinteraksi di platform kami."
  ),
  block("1. Informasi yang Kami Kumpulkan", "h3"),
  block(
    "Kami tidak mewajibkan pembaca untuk mendaftar akun atau masuk log hanya untuk membaca berita. Informasi teknis yang terkumpul secara otomatis melalui log server dan analitik meliputi:"
  ),
  block(
    "• Data Teknis: Alamat protokol internet (IP address), jenis peramban (browser), sistem operasi, dan tipe perangkat."
  ),
  block(
    "• Data Kunjungan: Halaman yang diakses, durasi membaca, halaman perujuk (referrer), dan timestamp kunjungan."
  ),
  block("2. Penggunaan Informasi", "h3"),
  block(
    "Informasi yang dikumpulkan semata-mata dimanfaatkan untuk kepentingan teknis dan editorial internal:"
  ),
  block("• Memantau kecepatan dan kestabilan pemuatan halaman web di berbagai perangkat."),
  block("• Memahami minat pembaca guna meningkatkan mutu dan keragaman topik liputan."),
  block("• Kami tidak pernah menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga."),
  block("3. Kuki (Cookies)", "h3"),
  block(
    "Tujuhcahaya menggunakan cookies teknis ringan untuk mengingat preferensi tampilan Anda (seperti pilihan mode terang/gelap). Anda dapat menonaktifkan cookies melalui pengaturan browser Anda kapan saja tanpa kehilangan akses membaca berita."
  ),
  block("4. Layanan Pihak Ketiga & Jaringan Eksternal", "h3"),
  block(
    "Situs kami dapat memuat tautan ke situs eksternal atau memutar aliran audio siaran radio streaming. Kami tidak bertanggung jawab atas kebijakan privasi di situs web eksternal tersebut dan menganjurkan pembaca memeriksa kebijakan privasi masing-masing."
  ),
  block("5. Keamanan Data", "h3"),
  block(
    "Kami menerapkan standar keamanan enkripsi modern (HTTPS/TLS) untuk mengamankan seluruh jalur transmisi data antara peramban Anda dan server Tujuhcahaya."
  ),
  block("6. Hubungi Kami", "h3"),
  block(
    "Pertanyaan atau permohonan informasi terkait kebijakan privasi dapat disampaikan melalui email: redaksi@tujuhcahaya.com."
  ),
  block("Kebijakan ini berlaku efektif sejak 28 September 2024 dan diperbarui secara berkala.", "normal", ["em"]),
];

const privacyEnBlocks = [
  block("Tujuhcahaya Privacy Policy", "h2"),
  block(
    "At Tujuhcahaya (tujuhcahaya.com), protecting your privacy is our top priority. This Privacy Policy outlines what information we collect, how it is used, and the steps we take to safeguard your data while visiting our news platform."
  ),
  block("1. Information We Collect", "h3"),
  block(
    "We do not require user account registration or login to read our news coverage. Like standard web platforms, non-personally identifiable technical information is collected automatically:"
  ),
  block("• Technical Data: IP address, browser type, operating system, and device category."),
  block("• Usage Data: Viewed articles, reading duration, referring pages, and visit timestamps."),
  block("2. How We Use Information", "h3"),
  block("Collected metrics are used solely for performance monitoring and editorial optimization:"),
  block("• Ensuring fast article loading and responsive layout rendering across devices."),
  block("• Analyzing readership trends to enhance journalistic coverage."),
  block("• We do not sell, rent, or trade your personal data to third parties."),
  block("3. Cookies", "h3"),
  block(
    "Tujuhcahaya utilizes lightweight client cookies strictly to preserve your interface preferences (such as light/dark theme). You may disable cookies in your browser settings at any time without restricting access to our articles."
  ),
  block("4. Data Security", "h3"),
  block(
    "We employ standard encrypted transport protocols (HTTPS/TLS) to protect data transmissions between your browser and our servers."
  ),
  block("5. Contact", "h3"),
  block("For privacy inquiries, please contact: editorial@tujuhcahaya.com."),
  block("This policy is effective as of September 28, 2024.", "normal", ["em"]),
];

savePage("privacy-policy", "id", "Kebijakan Privasi", privacyIdBlocks);
savePage("privacy-policy", "en", "Privacy Policy", privacyEnBlocks);

// -------------------------------------------------------------
// C. TERMS OF USE (CLEAN ID & EN)
// -------------------------------------------------------------
console.log("\n4. Cleaning and separating Terms of Use...");

const termsIdBlocks = [
  block("Syarat dan Ketentuan Penggunaan", "h2"),
  block(
    "Selamat datang di Tujuhcahaya (tujuhcahaya.com). Dengan mengakses dan menggunakan situs ini, Anda menyetujui ketentuan penggunaan, Kebijakan Privasi, dan pedoman editorial yang tercantum di bawah ini."
  ),
  block("1. Hak Cipta dan Penggunaan Konten", "h3"),
  block(
    "Seluruh konten yang dipublikasikan di Tujuhcahaya, termasuk naskah artikel, ulasan, grafis, logo, dan tata letak desain, dilindungi oleh undang-undang hak cipta. Kami mendukung penyebaran informasi untuk kepentingan publik dan dialog konstruktif dengan ketentuan:"
  ),
  block("• Menyertakan atribusi sumber yang jelas dengan tautan aktif (backlink) ke Tujuhcahaya."),
  block("• Tidak memotong atau memanipulasi makna isi tulisan sehingga menimbulkan distorsi fakta."),
  block("• Penggunaan materi untuk tujuan non-komersial, edukasi, dan dialog sosial."),
  block("2. Batasan Tanggung Jawab", "h3"),
  block(
    "Tujuhcahaya menyajikan liputan, artikel opini, dan ulasan secara cermat dan bertanggung jawab. Kami berupaya semaksimal mungkin memastikan akurasi data pada saat pemuatan, namun tidak bertanggung jawab atas kerugian tidak langsung akibat keputusan pribadi yang diambil pembaca atas isi tulisan."
  ),
  block("3. Tautan Eksternal", "h3"),
  block(
    "Artikel kami dapat memuat tautan rujukan ke situs web eksternal untuk memperkaya konteks informasi. Keberadaan tautan tersebut tidak menunjukkan dukungan penuh atas isi atau kebijakan situs pihak ketiga."
  ),
  block("4. Perubahan Ketentuan", "h3"),
  block(
    "Tujuhcahaya berhak memperbarui ketentuan ini sewaktu-waktu. Perubahan akan dicantumkan secara transparan di halaman ini."
  ),
  block("Ketentuan ini berlaku efektif sejak 28 September 2024.", "normal", ["em"]),
];

const termsEnBlocks = [
  block("Terms of Use", "h2"),
  block(
    "Welcome to Tujuhcahaya (tujuhcahaya.com). By accessing and utilizing this platform, you agree to comply with the terms and legal notices outlined below."
  ),
  block("1. Intellectual Property and Content Usage", "h3"),
  block(
    "All editorial materials published on Tujuhcahaya, including articles, essays, graphics, and layout designs, are protected by intellectual property laws. You may quote and share excerpts provided that:"
  ),
  block("• Proper credit and active attribution links to Tujuhcahaya are included."),
  block("• Content is not modified or distorted to misrepresent original facts or editorial intent."),
  block("• Usage aligns with fair use, non-commercial research, or constructive public dialogue."),
  block("2. Disclaimer of Liability", "h3"),
  block(
    "Tujuhcahaya publishes reports, opinion essays, and technological analyses with high journalistic diligence. While we strive for accuracy at publication, content is provided 'as is' without warranties for individual consequential outcomes."
  ),
  block("3. External Links", "h3"),
  block(
    "Our dispatches may link to external websites for contextual reference. Tujuhcahaya is not responsible for the content or practices of external third-party sites."
  ),
  block("These terms are effective as of September 28, 2024.", "normal", ["em"]),
];

savePage("terms-of-use", "id", "Syarat dan Ketentuan", termsIdBlocks);
savePage("terms-of-use", "en", "Terms of Use", termsEnBlocks);

// -------------------------------------------------------------
// D. ABOUT US / TENTANG KAMI (ID & EN)
// -------------------------------------------------------------
console.log("\n5. Updating Tentang Kami / About Us...");

const aboutIdBlocks = [
  multiSpanBlock([
    { text: "Selamat datang di " },
    { text: "Tujuhcahaya", marks: ["strong"] },
    {
      text: ", media siber independen yang terinspirasi oleh filosofi angka 7: keselarasan, spektrum warna yang utuh, dan siklus pemikiran yang berimbang. Dari tujuh rona pelangi hingga tujuh spektrum informasi, kami hadir menyajikan tujuh pilar liputan—berita aktual, teknologi, dunia game, musik, budaya pop, kesehatan, dan media lab kreatif.",
    },
  ]),
  multiSpanBlock([
    { text: "Kenapa tujuh? Karena di balik angka ini, kami ingin menghadirkan warna segar setelah hiruk-pikuk rutinitas harian. " },
    { text: "Tujuhcahaya", marks: ["strong"] },
    {
      text: " memadukan jurnalisme berbobot dengan gaya tutur santai, segar, dan reflektif ala Mojok x MBDC: lugas, bernas, dan tidak menggurui. Kami percaya informasi penting tidak harus disampaikan dengan bahasa yang kaku dan membosankan.",
    },
  ]),
  multiSpanBlock([
    {
      text: "Setiap artikel kami kerjakan dengan ketelitian kurasi, kejujuran pandangan, dan rasa ingin tahu yang tinggi. Entah itu investigasi peristiwa terkini, ulasan gadget tanpa basa-basi PR, cerita kultur dari sudut pandang yang luput dari sorotan utama, hingga stasiun radio kurasi musik 24 jam tanpa jeda iklan.",
    },
  ]),
  multiSpanBlock([
    { text: "Tujuhcahaya", marks: ["strong"] },
    {
      text: " adalah rumah bagi pembaca yang mencari perspektif alternatif dan ruang bertukar gagasan yang sehat. Nikmati setiap tulisan, temukan rona barumu, dan mari bersama-sama merawat akal sehat di ruang digital.",
    },
  ]),
];

const aboutEnBlocks = [
  multiSpanBlock([
    { text: "Welcome to " },
    { text: "Tujuhcahaya", marks: ["strong"] },
    {
      text: ", an independent digital newsroom inspired by the philosophy of the number 7: balance, completeness, and a dynamic spectrum of perspectives. From the seven colors of light to seven editorial pillars—investigative news, deep tech, gaming culture, music, contemporary arts, wellness, and experimental media.",
    },
  ]),
  multiSpanBlock([
    {
      text: "Our editorial philosophy pairs rigorous journalistic integrity with an observant, witty, and grounded voice reminiscent of Vice and Wired. We believe that critical discussions about technology, culture, and society need not be dry or pedantic.",
    },
  ]),
  multiSpanBlock([
    {
      text: "Beyond written journalism, Tujuhcahaya hosts an ad-free 24-hour curated music radio platform. Welcome to our publication, explore our reporting, and discover fresh perspectives from Southeast Asia and beyond.",
    },
  ]),
];

savePage("about-us", "id", "Tentang Kami", aboutIdBlocks);
savePage("about-us", "en", "About Us", aboutEnBlocks);

// -------------------------------------------------------------
// E. SUSUNAN REDAKSI / MASTHEAD (ID & EN)
// -------------------------------------------------------------
console.log("\n6. Updating Susunan Redaksi / Editorial Board...");

const redaksiIdBlocks = [
  block("Redaksi & Dewan Redaksi Tujuhcahaya", "h2"),
  block(
    "Tujuhcahaya didirikan pada 22 Agustus 2011 sebagai wadah jurnalisme independen, ulasan kritis, dan cerita dari sudut pandang yang sering luput dari arus utama media massa. Kami berdedikasi menyajikan liputan yang berimbang, berani bersikap, dan bebas dari sensasionalisme murahan."
  ),
  block("Struktur Manajemen & Pengurus Redaksi", "h3"),
  block("Pemimpin Umum: Sarah Dilla", "normal", ["strong"]),
  block("Mengawal arah strategis, integritas institusi, dan keberlanjutan media."),
  block("Pemimpin Redaksi: Rachel Patricia", "normal", ["strong"]),
  block("Penanggung jawab seluruh lini produk jurnalistik, standar kode etik, dan kebijakan pemberitaan."),
  block("Editor & Penulis Senior", "h3"),
  block("• Elang Elano — Editor Teknologi & Sains"),
  block("• Candra Tujuhcahaya — Editor Investigasi & Berita"),
  block("• Margaretha Nina — Editor Budaya & Kultur Pop"),
  block("• Nadya Putri — Editor Gaya Hidup & Komunitas"),
  block("Tim Kreatif, Media Lab & Audio", "h3"),
  block("• Hendra Tujuhcahaya — Koordinator Kreatif Visual"),
  block("• Andoru — Kurator Musik & Desain Siaran Radio 7Stream"),
  block("• Wode — Arsitektur Teknologi & Infrastruktur Data"),
  block("• Andi Gilang — Rekayasa Platform & Web Engine"),
  block("Kontak & Layanan Redaksi", "h3"),
  block(
    "Redaksi Tujuhcahaya menerapkan prinsip ruang redaksi digital terdesentralisasi (Digital Distributed Newsroom) berpusat di Indonesia."
  ),
  block("• Meja Redaksi & Hak Jawab: redaksi@tujuhcahaya.com"),
  block("• Kemitraan & Liputan: editorial@tujuhcahaya.com"),
  block("• Pengiriman Naskah: Melalui formulir daring di tujuhcahaya.com/kirim-tulisan"),
  block("• Kanal Resmi: @tujuhcahayahub (Instagram, X, TikTok)"),
];

const redaksiEnBlocks = [
  block("Editorial Masthead & Board", "h2"),
  block(
    "Founded on August 22, 2011, Tujuhcahaya operates as an independent media organization dedicated to investigative reporting, technology analysis, and cultural commentary."
  ),
  block("Executive & Editorial Leadership", "h3"),
  block("Publisher: Sarah Dilla", "normal", ["strong"]),
  block("Editor-in-Chief: Rachel Patricia", "normal", ["strong"]),
  block("Senior Editors", "h3"),
  block("• Elang Elano — Technology & Science"),
  block("• Candra Tujuhcahaya — News & Investigations"),
  block("• Margaretha Nina — Arts & Culture"),
  block("• Nadya Putri — Society & Features"),
  block("Creative, Technology & Audio Lab", "h3"),
  block("• Hendra Tujuhcahaya — Visual Director"),
  block("• Andoru — Music Curator & 7Stream Broadcasts"),
  block("• Wode — Systems Architecture"),
  block("• Andi Gilang — Platform Engineering"),
  block("Newsroom Inquiries", "h3"),
  block("General Newsroom & Corrections: editorial@tujuhcahaya.com"),
  block("Community Submissions: tujuhcahaya.com/en/submit"),
];

savePage("redaksi", "id", "Susunan Redaksi", redaksiIdBlocks);
savePage("redaksi", "en", "Editorial Board", redaksiEnBlocks);

console.log("\n✅ All static pages successfully remediated in SQLite database!");
