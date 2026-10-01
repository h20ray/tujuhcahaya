import sqlite3 from "node:sqlite";

const db = new sqlite3.DatabaseSync("data.db");

const bios = {
	elangelano: {
		id: "Jurnalis dan redaktur Tujuhcahaya, meliput lanskap teknologi, kecerdasan buatan, budaya digital, dan inovasi masa depan.",
		en: "Journalist and editor at Tujuhcahaya, covering technology, artificial intelligence, digital culture, and future innovations.",
	},
	margarethanina: {
		id: "Kurator musik dan budaya urban kontemporer, mengulas dinamika kreatif, seni arus bawah, dan gaya hidup modern.",
		en: "Curator of music and contemporary urban culture, reviewing creative scenes, underground art, and modern lifestyle.",
	},
	wodemahendra: {
		id: "Pemimpin Redaksi Tujuhcahaya, mengawal standar jurnalisme berkualitas, investigasi mendalam, etika redaksi, dan keterbukaan informasi publik.",
		en: "Editor-in-Chief at Tujuhcahaya, guiding quality journalism standards, in-depth investigations, editorial ethics, and public transparency.",
	},
	rachelpatricia: {
		id: "Jurnalis lapangan yang aktif merekam dinamika sosial masyarakat, tren perkotaan, industri kreatif, dan isu generasi muda.",
		en: "Field reporter capturing social dynamics, urban trends, creative movements, and youth culture.",
	},
	sarahdilla: {
		id: "Penulis riset dan jurnalis investigatif yang mengeksplorasi isu sosial-kultural, kebijakan publik, dan narasi kritis kontemporer.",
		en: "Research writer and investigative journalist exploring sociocultural developments, public policy, and critical narratives.",
	},
};

const updateStmt = db.prepare(`
	UPDATE _emdash_bylines
	SET bio = ?, updated_at = datetime('now')
	WHERE slug = ? AND locale = ? AND (bio = '' OR bio IS NULL);
`);

for (const [slug, data] of Object.entries(bios)) {
	updateStmt.run(data.id, slug, "id");
	updateStmt.run(data.en, slug, "en");
}

console.log("Updated bylines in SQLite:");
const rows = db.prepare("SELECT slug, locale, display_name, bio FROM _emdash_bylines").all();
console.table(rows);
