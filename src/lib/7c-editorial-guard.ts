/**
 * 7C Editorial Guard — Quality & Anti-AI Slop Validator
 *
 * Implements the guidelines established in EDITORIAL.md and .agent/rules/07-editorial-anti-slop.md:
 * - Scans headline for cheap emojis, excessive length, and formulaic bot patterns
 * - Scans prose for blacklisted AI clichés and preachy moralizing conclusions
 * - Enforces anti-pedantic KBBI lookup (suggests natural tech/gaming slang)
 * - Flags rigid copy-paste structural templates
 * - Verifies real journalistic source attribution
 * - Flags thin content / placeholder text
 */

export interface EditorialAuditResult {
	valid: boolean;
	score: number; // 0 to 100
	errors: string[];
	warnings: string[];
	suggestions: string[];
}

const BANNED_AI_CLICHES: Array<{ pattern: RegExp; message: string }> = [
	{
		pattern: /di era digital yang serba cepat/i,
		message: 'Frasa klise AI terdeteksi: "Di era digital yang serba cepat". Gunakan pembuka yang langsung to-the-point.',
	},
	{
		pattern: /tak bisa dimungkiri bahwa/i,
		message: 'Frasa klise AI terdeteksi: "Tak bisa dimungkiri bahwa". Langsung utarakan argumen tanpa basa-basi.',
	},
	{
		pattern: /menyelami lebih dalam/i,
		message: 'Frasa klise AI terdeteksi: "Menyelami lebih dalam" (dive deeper). Gunakan padanan alami seperti "bedah", "ulik", atau "lihat".',
	},
	{
		pattern: /sebuah mahakarya yang memukau/i,
		message: 'Frasa hiperbolik AI terdeteksi: "Sebuah mahakarya yang memukau". Berikan bukti konkret daripada pujian hampa.',
	},
	{
		pattern: /kesimpulannya adalah/i,
		message: 'Kesimpulan kaku AI terdeteksi: "Kesimpulannya adalah". Artikel 7C harus diakhiri dengan punchline atau open-ended reflection.',
	},
	{
		pattern: /seiring berjalannya waktu/i,
		message: 'Frasa klise AI terdeteksi: "Seiring berjalannya waktu".',
	},
	{
		pattern: /menjadi bukti nyata bahwa/i,
		message: 'Frasa klise AI terdeteksi: "Menjadi bukti nyata bahwa".',
	},
	{
		pattern: /sebuah langkah yang patut diapresiasi/i,
		message: 'Frasa normatif AI terdeteksi: "Sebuah langkah yang patut diapresiasi". Jangan basa-basi PR humas.',
	},
	{
		pattern: /membuka lembaran baru dalam/i,
		message: 'Frasa hiperbolik AI terdeteksi: "Membuka lembaran baru dalam".',
	},
];

const BANNED_HEADLINE_FORMULAS: Array<{ pattern: RegExp; message: string }> = [
	{
		pattern: /^(Bahaya|Tirani|Erosi|Dilema|Obsesi|Kematian|Standarisasi)\b.+:\s*Mengapa\b/i,
		message: 'Pola judul formulaik robotik terdeteksi ("Bahaya/Tirani...: Mengapa..."). Judul Tujuhcahaya harus renyah, punya sikap, dan tidak terdengar seperti abstrak skripsi.',
	},
	{
		pattern: /^Mengapa\b.+\bBisa Menjadi Bom Waktu\b/i,
		message: 'Pola judul klise bombastis AI ("...Bom Waktu").',
	},
];

const PREACHY_AI_ENDINGS: Array<{ pattern: RegExp; message: string }> = [
	{
		pattern: /selalu berakar pada kesadaran/i,
		message: 'Penutup berceramah sok bijak ala AI terdeteksi: "...selalu berakar pada kesadaran". Tutup dengan punchline atau observasi tajam.',
	},
	{
		pattern: /tidak ditentukan oleh seberapa.*melainkan/i,
		message: 'Penutup retorika AI kontras palsu terdeteksi: "tidak ditentukan oleh... melainkan...". Tunjukkan realitas tanpa menggurui.',
	},
	{
		pattern: /kembali kepada kesadaran kita/i,
		message: 'Penutup moralistik AI terdeteksi: "...kembali kepada kesadaran kita".',
	},
	{
		pattern: /tubuh manusia adalah keseimbangan.*bukan wadah/i,
		message: 'Penutup ceramah medis kaku AI terdeteksi.',
	},
	{
		pattern: /pada akhirnya,.*adalah tanggung jawab kita/i,
		message: 'Penutup wejangan moral klise: "...pada akhirnya adalah tanggung jawab kita".',
	},
];

const PEDANTIC_KBBI_LOOKUP: Array<{ pattern: RegExp; preferred: string; original: string }> = [
	{ pattern: /\btetikus\b/i, original: "tetikus", preferred: "mouse" },
	{ pattern: /\bgawai\b/i, original: "gawai", preferred: "smartphone / HP / gadget" },
	{ pattern: /\bsurel\b/i, original: "surel", preferred: "email" },
	{ pattern: /\bpeladen\b/i, original: "peladen", preferred: "server" },
	{ pattern: /\bperangkat tegar\b/i, original: "perangkat tegar", preferred: "firmware" },
	{ pattern: /\bpenjelajah web\b/i, original: "penjelajah web", preferred: "browser" },
];

const CHEAP_EMOJI_REGEX = /[\u{1F680}\u{1F525}\u{1F9E0}\u{1F449}\u{26A1}\u{1F4A5}\u{1F4AF}\u{2728}\u{1F389}\u{1F6A8}]/u;

const SOURCE_ATTRIBUTION_REGEX = /(menurut|dikutip dari|laporan|dilansir dari|rilis resmi|dalam rilis|dalam pidato|keterangan resmi|konferensi pers|studi dari|riset dari|kata |ujar |tutur |dicatat oleh|sebagaimana dicatat)/i;

const BANNED_TAGS = ["mojok", "malesbanget", "mbdc", "detik", "kompas", "kumparan", "tribun"];

/**
 * Audit an article's title, body prose, excerpt, and tags
 */
export function validate7cEditorial(
	title: string = "",
	bodyText: string = "",
	excerpt?: string,
	tags: string[] = [],
): EditorialAuditResult {
	const errors: string[] = [];
	const warnings: string[] = [];
	const suggestions: string[] = [];
	let score = 100;

	// 1. Headline Audit
	if (CHEAP_EMOJI_REGEX.test(title)) {
		errors.push("Haram menggunakan emoji promosi (🚀, 🔥, 🧠, 👉, ⚡) pada judul headline.");
		score -= 20;
	}

	if (title.length < 15) {
		warnings.push("Judul terlalu pendek. Buat judul yang informatif dan memiliki sudut pandang tajam.");
		score -= 5;
	}

	if (title.length > 105) {
		warnings.push(`Judul terlalu panjang (${title.length} karakter). Judul media online ideal 40-85 karakter agar tidak terpotong dan tidak membosankan.`);
		score -= 10;
	}

	// Ban colon ":" in headlines (strict anti-AI formula)
	if (title.includes(":")) {
		errors.push('Haram menggunakan tanda titik dua (":") pada judul. Pola "Topik: Penjelasan" (seperti "Mengenal X: ...") adalah ciri khas formulaik bot/skripsi. Tulis judul sebagai kalimat mengalir utuh, satir, atau pernyataan tajam tanpa titik dua ala Mojok.co.');
		score -= 25;
	}

	// Ban robotic tutorial prefixes
	if (/^(mengenal|menelisik|memahami|menguak|bedah tuntas|panduan lengkap|inilah)\b/i.test(title)) {
		errors.push('Awalan judul kaku ala tutorial/makalah terdeteksi ("Mengenal...", "Menelisik...", "Memahami..."). Buka judul dengan keresahan warga, ironi, atau sudut pandang kritis.');
		score -= 20;
	}

	// Scan for formulaic robotic titles
	for (const { pattern, message } of BANNED_HEADLINE_FORMULAS) {
		if (pattern.test(title)) {
			errors.push(message);
			score -= 25;
		}
	}

	// 2. Prose Blacklist Audit
	for (const { pattern, message } of BANNED_AI_CLICHES) {
		if (pattern.test(bodyText) || (excerpt && pattern.test(excerpt))) {
			errors.push(message);
			score -= 15;
		}
	}

	// 3. Preachy AI Ending Audit
	for (const { pattern, message } of PREACHY_AI_ENDINGS) {
		if (pattern.test(bodyText)) {
			errors.push(message);
			score -= 20;
		}
	}

	// 4. Anti-Pedantic KBBI Audit
	for (const item of PEDANTIC_KBBI_LOOKUP) {
		if (item.pattern.test(bodyText) || item.pattern.test(title)) {
			suggestions.push(
				`Hindari istilah kaku KBBI "${item.original}". Komunitas tech/gaming Indonesia menggunakan "${item.preferred}".`,
			);
			score -= 5;
		}
	}

	// 5. Formulaic Structural Blueprint Detection (Exact 3-bullet + 3-numbering pattern)
	const bulletMatches = bodyText.match(/^[\*\-]\s+\*\*[^*]+\*\*:/gm) || [];
	const numberMatches = bodyText.match(/^\d+\.\s+\*\*[^*]+\*\*:/gm) || [];
	if (bulletMatches.length === 3 && numberMatches.length === 3) {
		warnings.push("Struktur naskah terlalu mirip dengan template bot lama (persis 3 bullet + 3 nomor tebal). Variasikan gaya penyampaian secara luwes.");
		score -= 15;
	}

	// 6. Source Attribution Check
	if (!SOURCE_ATTRIBUTION_REGEX.test(bodyText)) {
		warnings.push('Naskah belum mencantumkan atribusi sumber berita (misal: "menurut...", "dikutip dari...", "dalam laporan...", atau rilis resmi).');
		score -= 10;
	}

	// 7. Anti-Leakage External Links & Inner Linking Audit
	// Strip markdown images (![alt](url)) first so they aren't confused with text links
	const proseWithoutImages = bodyText.replace(/!\[[^\]]*\]\([^\)]+\)/g, "");
	const externalLinks = Array.from(proseWithoutImages.matchAll(/\[([^\]]+)\]\((https?:\/\/(?!tujuhcahaya\.com)[^\)]+)\)/gi));
	if (externalLinks.length > 0) {
		warnings.push(`Ditemukan ${externalLinks.length} tautan eksternal ke situs luar (${externalLinks.map(m => m[2].slice(0, 30) + '...').join(', ')}). Alihkan menjadi inner link internal (/tag/..., /category/..., /author/...) dan sebut sumber eksternal sebagai teks biasa agar tidak membuang pembaca keluar situs.`);
		score -= 10;
	}

	const innerLinks = Array.from(proseWithoutImages.matchAll(/\[([^\]]+)\]\((\/[^\)]*)\)/gi));
	if (innerLinks.length === 0) {
		suggestions.push('Disarankan menyematkan minimal 1 inner link (misal: [topik terkait](/tag/nama-topik) atau [rubrik](/category/nama-rubrik)) untuk memperkuat SEO internal dan retensi pembaca.');
	}

	// 8. Content Volume & Placeholder Audit
	const wordCount = bodyText.trim().split(/\s+/).filter(Boolean).length;
	if (wordCount < 350) {
		warnings.push(`Panjang artikel hanya ${wordCount} kata (di bawah batas minimum 350 kata). Naskah berpotensi merupakan 'thin content' yang kurang mendalam.`);
		score -= 15;
	} else if (wordCount < 550) {
		suggestions.push(`Panjang artikel (${wordCount} kata) masih di bawah standar esai ideal Tujuhcahaya (600 - 900 kata). Tambahkan latar belakang komparatif atau perspektif akar rumput agar ulasan lebih berbobot.`);
	}

	if (/lorem ipsum/i.test(bodyText)) {
		errors.push('Teks placeholder "Lorem Ipsum" masih tersisa di dalam badan artikel.');
		score -= 25;
	}

	// 8. Banned External Brand Tags Audit
	if (Array.isArray(tags)) {
		for (const tag of tags) {
			if (BANNED_TAGS.includes(tag.trim().toLowerCase())) {
				errors.push(`Haram menggunakan nama media luar ("${tag}") sebagai tag artikel Tujuhcahaya. Gunakan tag topik substantif (misal: "Pendidikan", "Kebijakan Publik").`);
				score -= 20;
			}
		}
	}

	return {
		valid: errors.length === 0,
		score: Math.max(0, score),
		errors,
		warnings,
		suggestions,
	};
}
