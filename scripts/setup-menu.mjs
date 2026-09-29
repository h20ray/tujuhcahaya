import { DatabaseSync } from "node:sqlite";
import crypto from "node:crypto";

const db = new DatabaseSync("data.db");

// Find primary menu
const menu = db.prepare("SELECT id FROM _emdash_menus WHERE name = 'primary'").get();
if (!menu) {
  console.log("No primary menu found");
  process.exit(1);
}

// Clear existing items
db.prepare("DELETE FROM _emdash_menu_items WHERE menu_id = ?").run(menu.id);

const menuItems = [
  { label: "Berita", url: "/category/berita" },
  { label: "Tech", url: "/category/tech" },
  { label: "Game", url: "/category/game" },
  { label: "Musik", url: "/category/musik" },
  { label: "Budaya", url: "/category/budaya" },
  { label: "Kesehatan", url: "/category/kesehatan" },
  { label: "Tentang Kami", url: "/about-us" },
];

const insertStmt = db.prepare(`
  INSERT INTO _emdash_menu_items 
  (id, menu_id, parent_id, sort_order, type, reference_collection, reference_id, custom_url, label, title_attr, target, css_classes, created_at, locale, translation_group)
  VALUES (?, ?, NULL, ?, 'custom', NULL, NULL, ?, ?, NULL, NULL, NULL, datetime('now'), 'id', ?)
`);

menuItems.forEach((item, index) => {
  const id = "01M3" + crypto.randomBytes(11).toString("hex").toUpperCase();
  insertStmt.run(id, menu.id, index, item.url, item.label, id);
});

console.log("Primary navigation updated successfully with", menuItems.length, "items.");
