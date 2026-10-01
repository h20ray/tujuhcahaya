import fs from "node:fs";
import { Kysely } from "kysely";
import { createDialect } from "emdash/db/sqlite";
import { applySeed } from "emdash";

async function main() {
	const seed = JSON.parse(fs.readFileSync("seed/seed.json", "utf-8"));
	const db = new Kysely({
		dialect: createDialect({ url: "file:./data.db" }),
	});

	try {
		console.log("Applying seed to data.db (onConflict: skip)...");
		const { result } = await applySeed(db, seed, {
			onConflict: "skip",
			includeContent: false,
		});
		console.log("Seed apply result:", JSON.stringify(result, null, 2));
	} catch (err) {
		console.error("Error applying seed:", err);
		process.exit(1);
	} finally {
		await db.destroy();
	}
}

main();
