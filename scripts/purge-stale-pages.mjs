import sqlite3 from "node:sqlite";

const db = new sqlite3.DatabaseSync("data.db");
const del = db.prepare("DELETE FROM ec_pages WHERE slug IN ('shop', 'cart', 'checkout', 'my-account')").run();
console.log("Deleted stale WooCommerce pages:", del);

const remaining = db.prepare("SELECT slug, title, status FROM ec_pages").all();
console.table(remaining);
