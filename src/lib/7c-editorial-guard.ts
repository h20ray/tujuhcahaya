/**
 * 7C Editorial Guard — Quality & Anti-AI Slop Validator
 *
 * Implements the guidelines established in EDITORIAL.md and .agent/rules/07-editorial-anti-slop.md:
 * - Scans headline for cheap emojis and generic clickbait
 * - Scans prose for blacklisted AI clichés
 * - Enforces anti-pedantic KBBI lookup (suggests natural tech slang)
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

/**
 * Audit an article's title, body prose, and excerpt
 */
export function validate7cEditorial(
	title: string = "",
	bodyText: string = "",
	excerpt?: string,
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

	// 2. Prose Blacklist Audit
	for (const { pattern, message } of BANNED_AI_CLICHES) {
		if (pattern.test(bodyText) || (excerpt && pattern.test(excerpt))) {
			errors.push(message);
			score -= 15;
		}
	}

	// 3. Anti-Pedantic KBBI Audit
	for (const item of PEDANTIC_KBBI_LOOKUP) {
		if (item.pattern.test(bodyText) || item.pattern.test(title)) {
			suggestions.push(
				`Hindari istilah kaku KBBI "${item.original}". Komunitas tech/gaming Indonesia menggunakan "${item.preferred}".`,
			);
			score -= 5;
		}
	}

	// 4. Content Volume & Placeholder Audit
	const wordCount = bodyText.trim().split(/\s+/).filter(Boolean).length;
	if (wordCount < 100) {
		warnings.push(`Panjang artikel hanya ${wordCount} kata. Naskah berpotensi merupakan placeholder atau thin content.`);
		score -= 15;
	}

	if (/lorem ipsum/i.test(bodyText)) {
		errors.push('Teks placeholder "Lorem Ipsum" masih tersisa di dalam badan artikel.');
		score -= 25;
	}

	return {
		valid: errors.length === 0,
		score: Math.max(0, score),
		errors,
		warnings,
		suggestions,
	};
}
