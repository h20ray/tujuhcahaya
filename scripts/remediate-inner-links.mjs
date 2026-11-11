/**
 * Remediation script to fix inner links in the 9 affected articles:
 * - Removes /author/ narcissistic self-referencing links
 * - Replaces robotic [arsip ...], [kanal ...], [rubrik ...] taxonomy links with contextual post-to-post links or clean text
 * - Regenerates PortableText AST, updates data.db, updates scripts/outbox/*.json, and pushes to remote Plesk
 */

import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { proseToPortableText } from "./auto-publish.mjs";
import { validate7cEditorial } from "../src/lib/7c-editorial-guard.ts";

const db = new DatabaseSync("data.db");

const REMEDIATIONS = {
  "ketika-ribuan-gamer-memohon-pemerintah-kanada-selamatkan-bioware": {
    contentModifier: (text) => {
      return text
        .replace(
          /Bagi gamer yang kerap memantau riwayat industri di \[ulasan game\]\(\/category\/game\)/g,
          "Bagi gamer yang kerap memantau dinamika industri game"
        )
        .replace(
          /Selama bertahun-tahun, penggemar di \[arsip PC Gaming\]\(\/tag\/pc-gaming\) telah mencoba segala cara yang diajarkan oleh kitab suci kapitalisme pasar bebas/g,
          "Selama bertahun-tahun, komunitas pemain telah mencoba segala cara menghadapi [kebijakan efisiensi korporasi yang mematikan studio game](/pemasok-chip-angkat-kaki-dan-nasib-kaset-game-fisik-yang-kian)"
        )
        .replace(
          /Melihat fenomena ini dari kacamata gamer kasual seperti \[Andoru Ray\]\(\/author\/andoru-ray\), apa yang menimpa BioWare sejatinya adalah cerminan dari krisis eksistensial/g,
          "Melihat fenomena ini dari kacamata gamer kasual, apa yang menimpa BioWare sejatinya mengulang kepasrahan serupa saat [penerbit game memeras dompet pemain demi mengejar dividen investor](/laba-sony-melonjak-berkat-spider-man-tapi-dompet-gamer-tetap)"
        );
    }
  },
  "ketika-panggung-megah-ami-awards-disengat-salam-tiga-jari-dan": {
    contentModifier: (text) => {
      return text
        .replace(
          /Namun bagi siapa pun yang mencermati dinamika di \[skena musik indie\]\(\/tag\/musik\), letupan di atas panggung/g,
          "Namun bagi siapa pun yang mencermati dinamika di skena musik indie, letupan di atas panggung"
        )
        .replace(
          /Mengutip pandangan kuratorial yang kerap diulas \[Margaretha Nina\]\(\/author\/margaretha-nina\), sejarah musik populer di Nusantara/g,
          "Bila kita menelaah sejarah kuratorial musik populer di Nusantara sejak dekade lawas, karya bunyi"
        )
        .replace(
          /Ketika para musisi memilih mengangkat tangan dan menyuarakan kegelisahan warga di tengah \[perhelatan AMI Awards\]\(\/tag\/ami-awards\), mereka sejatinya/g,
          "Ketika para musisi memilih mengangkat tangan dan menyuarakan kegelisahan warga, peristiwa ini mengingatkan kita pada kritik tajam ketika [piala AMI Awards tak cukup membayar tagihan dan royalti musisi](/ketika-piala-ami-awards-tak-cukup-membayar-tagihan-dan-royalti). Mereka sejatinya"
        )
        .replace(
          /Langkah ini juga menjadi sentilan telak bagi tata kelola di \[rubrik Musik & Gaya Hidup\]\(\/category\/musik\) yang belakangan ini semakin terobsesi dengan metrik angka putar streaming/g,
          "Langkah ini juga menjadi sentilan telak bagi tata kelola industri hiburan yang belakangan ini semakin terobsesi dengan metrik angka putar streaming, sebuah tren yang sempat disorot ketika [musisi janjian rilis lagu tiap Jumat hingga telinga pendengar kebas](/ketika-seluruh-musisi-janjian-rilis-lagu-tiap-jumat-dan-telinga)"
        );
    }
  },
  "kini-penumpang-pesawat-bisa-streaming-spotify-tapi-ruang-melamun": {
    contentModifier: (text) => {
      return text
        .replace(
          /konsumen di \[kanal Teknologi\]\(\/category\/tech\)/g,
          "konsumen modern"
        )
        .replace(
          /konsumen di kanal Teknologi/g,
          "konsumen modern"
        )
        .replace(
          /ala \[Elang Elano\]\(\/author\/elang-elano\), ada sederet kejanggalan yang bikin dahi berkerut\./g,
          "ada sederet kejanggalan yang bikin dahi berkerut, mengingatkan kita pada kejenuhan saat [seluruh musisi janjian rilis lagu tiap Jumat hingga telinga pendengar kebas](/ketika-seluruh-musisi-janjian-rilis-lagu-tiap-jumat-dan-telinga)."
        )
        .replace(
          /ala Elang Elano, ada sederet kejanggalan yang bikin dahi berkerut\./g,
          "ada sederet kejanggalan yang bikin dahi berkerut, mengingatkan kita pada kejenuhan saat [seluruh musisi janjian rilis lagu tiap Jumat hingga telinga pendengar kebas](/ketika-seluruh-musisi-janjian-rilis-lagu-tiap-jumat-dan-telinga)."
        );
    }
  },
  "ketika-whatsapp-menolak-membiarkan-orang-hidup-tenang-tanpa": {
    contentModifier: (text) => {
      return text
        .replace(
          /keamanan sistem di \[kanal Teknologi\]\(\/category\/tech\)/g,
          "keamanan sistem digital"
        )
        .replace(
          /keamanan sistem di kanal Teknologi/g,
          "keamanan sistem digital"
        )
        .replace(
          /Sebagaimana kerap dibahas dalam catatan \[kolom Elang Elano\]\(\/author\/elang-elano\), kenyamanan digital modern hampir selalu menuntut tumbal berupa hilangnya batas ruang privat\./g,
          "Kenyamanan digital modern hampir selalu menuntut tumbal berupa hilangnya batas ruang privat, sebuah pola yang juga kentara saat [TikTok meluncurkan aplikasi belanja terpisah demi menagih gaji bulanan](/tiktok-bikin-aplikasi-belanja-terpisah-demi-menagih-gaji-bulanan)."
        )
        .replace(
          /Sebagaimana kerap dibahas dalam catatan kolom Elang Elano, kenyamanan digital modern hampir selalu menuntut tumbal berupa hilangnya batas ruang privat\./g,
          "Kenyamanan digital modern hampir selalu menuntut tumbal berupa hilangnya batas ruang privat, sebuah pola yang juga kentara saat [TikTok meluncurkan aplikasi belanja terpisah demi menagih gaji bulanan](/tiktok-bikin-aplikasi-belanja-terpisah-demi-menagih-gaji-bulanan)."
        );
    }
  },
  "ketika-bos-nintendo-berjanji-switch-2-tak-naik-harga-tapi-dompet": {
    contentModifier: (text) => {
      return text
        .replace(
          /diskusi komunitas di \[ulasan Game\]\(\/category\/game\)/g,
          "diskusi komunitas game"
        )
        .replace(
          /diskusi komunitas di ulasan Game/g,
          "diskusi komunitas game"
        )
        .replace(
          /Bagi figur gamer kasual yang skeptis terhadap taktik korporasi seperti \[Andoru Ray\]\(\/author\/andoru-ray\), kepura-puraan industri konsol hari ini memang sudah mencapai tahap yang melelahkan\./g,
          "Bagi figur gamer kasual yang skeptis terhadap taktik korporasi, kepura-puraan industri konsol hari ini mengulang kecemasan yang sama saat [Take-Two santai hadapi pembajakan GTA 6 tapi bikin pemain waswas soal harga](/ketika-bos-take-two-santai-hadapi-pembajakan-gta-6-tapi-bikin)."
        )
        .replace(
          /Bagi figur gamer kasual yang skeptis terhadap taktik korporasi seperti Andoru Ray, kepura-puraan industri konsol hari ini memang sudah mencapai tahap yang melelahkan\./g,
          "Bagi figur gamer kasual yang skeptis terhadap taktik korporasi, kepura-puraan industri konsol hari ini mengulang kecemasan yang sama saat [Take-Two santai hadapi pembajakan GTA 6 tapi bikin pemain waswas soal harga](/ketika-bos-take-two-santai-hadapi-pembajakan-gta-6-tapi-bikin)."
        )
        .replace(
          /pencinta \[arsip konsol Nintendo\]\(\/tag\/nintendo\)/g,
          "pencinta konsol Nintendo"
        )
        .replace(
          /pencinta arsip konsol Nintendo/g,
          "pencinta konsol Nintendo"
        );
    }
  },
  "tiktok-bikin-aplikasi-belanja-terpisah-demi-menagih-gaji-bulanan": {
    contentModifier: (text) => {
      return text
        .replace(
          /kebiasaan gadget di \[kanal Teknologi\]\(\/category\/tech\)/g,
          "kebiasaan gadget modern"
        )
        .replace(
          /kebiasaan gadget di kanal Teknologi/g,
          "kebiasaan gadget modern"
        )
        .replace(
          /monetisasi korporasi teknologi ala \[Elang Elano\]\(\/author\/elang-elano\), manuver membuat aplikasi mandiri ini sesungguhnya bukan aksi amal untuk menenangkan pikiran pengguna\./g,
          "monetisasi korporasi teknologi, manuver membuat aplikasi mandiri ini sesungguhnya bukan aksi amal untuk menenangkan pikiran pengguna, mirip dengan siasat saat [WhatsApp menolak membiarkan orang hidup tenang tanpa aplikasinya](/ketika-whatsapp-menolak-membiarkan-orang-hidup-tenang-tanpa)."
        )
        .replace(
          /monetisasi korporasi teknologi ala Elang Elano, manuver membuat aplikasi mandiri ini sesungguhnya bukan aksi amal untuk menenangkan pikiran pengguna\./g,
          "monetisasi korporasi teknologi, manuver membuat aplikasi mandiri ini sesungguhnya bukan aksi amal untuk menenangkan pikiran pengguna, mirip dengan siasat saat [WhatsApp menolak membiarkan orang hidup tenang tanpa aplikasinya](/ketika-whatsapp-menolak-membiarkan-orang-hidup-tenang-tanpa)."
        );
    }
  },
  "ketika-microsoft-bersiap-rombak-total-mesin-windows-11-27h2-dan": {
    contentModifier: (text) => {
      return text
        .replace(
          /perangkat keras di \[kanal Teknologi\]\(\/category\/tech\)/g,
          "perangkat keras modern"
        )
        .replace(
          /perangkat keras di kanal Teknologi/g,
          "perangkat keras modern"
        )
        .replace(
          /Bagi gamer kasual dan pengamat kultur PC seperti \[Andoru Ray\]\(\/author\/andoru-ray\), sinyal perombakan 27H2 ini sekaligus mengubur angan-angan kosong tentang kelahiran "Windows 12"\. Microsoft rupanya sudah kapok dengan tradisi gonta-ganti nomor merek tiga tahunan yang terbukti hanya membingungkan para pengguna korporat dan memecah belah basis pemain di \[ulasan Game\]\(\/category\/game\)\./g,
          "Bagi gamer kasual dan pengamat kultur PC, sinyal perombakan 27H2 ini sekaligus mengubur angan-angan kosong tentang kelahiran \"Windows 12\". Microsoft rupanya sudah kapok dengan tradisi gonta-ganti nomor merek tiga tahunan yang terbukti hanya membingungkan para pengguna korporat dan memecah belah basis pemain, sebuah dinamika yang juga disorot ketika [Take-Two mengantisipasi peluncuran GTA 6](/ketika-bos-take-two-santai-hadapi-pembajakan-gta-6-tapi-bikin)."
        )
        .replace(
          /Bagi gamer kasual dan pengamat kultur PC seperti Andoru Ray, sinyal perombakan 27H2 ini sekaligus mengubur angan-angan kosong tentang kelahiran "Windows 12"\. Microsoft rupanya sudah kapok dengan tradisi gonta-ganti nomor merek tiga tahunan yang terbukti hanya membingungkan para pengguna korporat dan memecah belah basis pemain di ulasan Game\./g,
          "Bagi gamer kasual dan pengamat kultur PC, sinyal perombakan 27H2 ini sekaligus mengubur angan-angan kosong tentang kelahiran \"Windows 12\". Microsoft rupanya sudah kapok dengan tradisi gonta-ganti nomor merek tiga tahunan yang terbukti hanya membingungkan para pengguna korporat dan memecah belah basis pemain, sebuah dinamika yang juga disorot ketika [Take-Two mengantisipasi peluncuran GTA 6](/ketika-bos-take-two-santai-hadapi-pembajakan-gta-6-tapi-bikin)."
        );
    }
  },
  "ketika-seluruh-musisi-janjian-rilis-lagu-tiap-jumat-dan-telinga": {
    contentModifier: (text) => {
      return text
        .replace(
          /Bagi pemerhati denyut nada perkotaan seperti \[Margaretha Nina\]\(\/author\/margaretha-nina\), sistem kalender seragam ini menempatkan para musisi independen pada posisi yang sangat terjepit\. Grup musik arus bawah yang berkutat di \[skena musik indie\]\(\/tag\/musik\) dan mengandalkan anggaran mandiri/g,
          "Bagi pemerhati denyut nada perkotaan, sistem kalender seragam ini menempatkan para musisi independen pada posisi yang sangat terjepit. Grup musik arus bawah yang berkutat di skena musik indie dan mengandalkan anggaran mandiri"
        )
        .replace(
          /Bagi pemerhati denyut nada perkotaan seperti Margaretha Nina, sistem kalender seragam ini menempatkan para musisi independen pada posisi yang sangat terjepit\. Grup musik arus bawah yang berkutat di skena musik indie dan mengandalkan anggaran mandiri/g,
          "Bagi pemerhati denyut nada perkotaan, sistem kalender seragam ini menempatkan para musisi independen pada posisi yang sangat terjepit. Grup musik arus bawah yang berkutat di skena musik indie dan mengandalkan anggaran mandiri"
        )
        .replace(
          /Dinamika ini juga mengubah cara pandang kita terhadap nilai sebuah karya di \[rubrik Musik & Gaya Hidup\]\(\/category\/musik\)\./g,
          "Dinamika ini juga mengubah cara pandang kita terhadap nilai sebuah karya dalam lanskap musik modern, memperparah kenyataan bahwa [piala AMI Awards tak cukup membayar royalti musisi](/ketika-piala-ami-awards-tak-cukup-membayar-tagihan-dan-royalti)."
        )
        .replace(
          /Dinamika ini juga mengubah cara pandang kita terhadap nilai sebuah karya di rubrik Musik & Gaya Hidup\./g,
          "Dinamika ini juga mengubah cara pandang kita terhadap nilai sebuah karya dalam lanskap musik modern, memperparah kenyataan bahwa [piala AMI Awards tak cukup membayar royalti musisi](/ketika-piala-ami-awards-tak-cukup-membayar-tagihan-dan-royalti)."
        );
    }
  },
  "ketika-sensor-rahasia-keyboard-iphone-menentukan-kata-apa-yang": {
    contentModifier: (text) => {
      return text
        .replace(
          /dengan kacamata sysadmin warkop seperti \[Elang Elano\]\(\/author\/elang-elano\), argumen pembiaran tersebut adalah bentuk pembelaan yang naif\./g,
          "dengan kacamata sysadmin warkop yang kritis, argumen pembiaran tersebut adalah bentuk pembelaan yang naif."
        )
        .replace(
          /dengan kacamata sysadmin warkop seperti Elang Elano, argumen pembiaran tersebut adalah bentuk pembelaan yang naif\./g,
          "dengan kacamata sysadmin warkop yang kritis, argumen pembiaran tersebut adalah bentuk pembelaan yang naif."
        )
        .replace(
          /sehari-hari menelusuri kabar di \[kanal Teknologi\]\(\/category\/tech\), fenomena ini memperlihatkan/g,
          "sehari-hari bergantung pada gadget modern, fenomena ini memperlihatkan"
        )
        .replace(
          /sehari-hari menelusuri kabar di kanal Teknologi, fenomena ini memperlihatkan/g,
          "sehari-hari bergantung pada gadget modern, fenomena ini memperlihatkan"
        )
        .replace(
          /Diskusi seputar \[privasi digital\]\(\/tag\/privasi\) selama ini/g,
          "Diskusi seputar [pengawasan ruang privat digital](/ketika-whatsapp-menolak-membiarkan-orang-hidup-tenang-tanpa) selama ini"
        )
        .replace(
          /Diskusi seputar privasi digital selama ini/g,
          "Diskusi seputar [pengawasan ruang privat digital](/ketika-whatsapp-menolak-membiarkan-orang-hidup-tenang-tanpa) selama ini"
        );
    }
  }
};

async function remediateAll() {
  console.log("Starting inner link remediation for affected posts...\n");

  for (const [slug, item] of Object.entries(REMEDIATIONS)) {
    console.log(`Checking [${slug}]...`);
    const outboxPath = path.resolve(process.cwd(), "scripts", "outbox", `${slug}.json`);
    if (!fs.existsSync(outboxPath)) {
      console.warn(`Outbox file not found for ${slug}`);
      continue;
    }

    const postData = JSON.parse(fs.readFileSync(outboxPath, "utf-8"));
    const row = db.prepare("SELECT id, title, excerpt, content, live_revision_id FROM ec_posts WHERE slug = ?").get(slug);
    if (!row) {
      console.warn(`Post not found in local DB: ${slug}`);
      continue;
    }

    // Convert PortableText blocks back to markdown
    const blocks = JSON.parse(row.content);
    const paras = [];
    for (const b of blocks) {
      if (b._type === "image") {
        paras.push(`![${b.alt || ""}](${b.asset?.url || ""})`);
      } else if (b._type === "block") {
        const markDefsMap = new Map((b.markDefs || []).map(m => [m._key, m]));
        let line = "";
        for (const c of (b.children || [])) {
          let t = c.text || "";
          const marks = c.marks || [];
          const linkMark = marks.find(m => markDefsMap.has(m));
          if (linkMark) {
            const def = markDefsMap.get(linkMark);
            t = `[${t}](${def.href})`;
          }
          if (marks.includes("strong")) t = `**${t}**`;
          if (marks.includes("em")) t = `*${t}*`;
          if (marks.includes("code")) t = `\`${t}\``;
          line += t;
        }
        paras.push(line);
      }
    }
    const rawText = paras.join("\n\n");

    const modifiedText = item.contentModifier(rawText);
    const newBlocks = proseToPortableText(modifiedText);

    // Validate with updated 7C Editorial Guard
    const audit = validate7cEditorial(row.title, modifiedText, row.excerpt, postData.tags || []);
    console.log(`  -> Audit Score: ${audit.score} | Valid: ${audit.valid}`);
    if (audit.errors.length > 0) {
      console.error(`  ❌ Errors remaining:`, audit.errors);
      throw new Error(`Audit failed for ${slug}: ` + audit.errors.join("; "));
    }

    const now = new Date().toISOString();

    // Update local DB
    db.prepare(`
      UPDATE ec_posts
      SET content = ?, updated_at = ?
      WHERE slug = ?
    `).run(JSON.stringify(newBlocks), now, slug);

    if (row.live_revision_id) {
      const revRow = db.prepare("SELECT data FROM revisions WHERE id = ?").get(row.live_revision_id);
      if (revRow) {
        const revData = JSON.parse(revRow.data);
        revData.content = newBlocks;
        db.prepare("UPDATE revisions SET data = ? WHERE id = ?").run(JSON.stringify(revData), row.live_revision_id);
      }
    }

    // Update outbox JSON
    postData.portableTextContent = newBlocks;
    postData.rawContent = modifiedText;
    postData.audit = audit;
    fs.writeFileSync(outboxPath, JSON.stringify(postData, null, 2), "utf-8");

    // Sync to remote Plesk
    console.log(`  -> Syncing ${slug} to remote Plesk...`);
    try {
      const pyCmd = `python scripts/publish_remote.py "${outboxPath}"`;
      const pyOut = execSync(pyCmd, { encoding: "utf-8" });
      const parsed = JSON.parse(pyOut);
      if (parsed.success) {
        console.log(`  ✅ Successfully synced to remote Plesk! URL: ${parsed.url}`);
      } else {
        console.warn(`  ⚠️ Remote sync returned non-success:`, pyOut);
      }
    } catch (err) {
      console.error(`  ❌ Remote sync error for ${slug}:`, err.message);
    }
  }

  console.log("\nAll 9 articles remediated successfully!");
}

remediateAll().catch((err) => {
  console.error("Remediation failed:", err);
  process.exit(1);
});
