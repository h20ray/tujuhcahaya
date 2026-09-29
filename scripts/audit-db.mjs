import sqlite3 from "node:sqlite";
import mysql from "mysql2/promise";
import fs from "node:fs";

async function auditMariaDB() {
    console.log("=======================================================");
    console.log("🔍 1. MARIADB AUDIT: wp_nlmfb_7c");
    console.log("=======================================================");

    const maria = await mysql.createConnection({
        host: process.env.MARIADB_HOST || "127.0.0.1",
        port: Number(process.env.MARIADB_PORT) || 3306,
        user: process.env.MARIADB_USER || "root",
        password: process.env.MARIADB_PASSWORD || "root",
        database: process.env.MARIADB_DATABASE || "wp_nlmfb_7c",
    });

    // 1. Table sizes
    const [tables] = await maria.query(`
        SELECT 
            table_name AS \`table\`,
            table_rows AS \`rows\`,
            ROUND((data_length + index_length) / 1024 / 1024, 2) AS total_mb,
            ROUND(data_length / 1024 / 1024, 2) AS data_mb,
            ROUND(index_length / 1024 / 1024, 2) AS index_mb
        FROM information_schema.tables
        WHERE table_schema = 'wp_nlmfb_7c'
        ORDER BY (data_length + index_length) DESC;
    `);

    console.log("\n📊 Top Tables by Disk Size:");
    console.table(tables.slice(0, 20));

    let totalDbMb = tables.reduce((acc, t) => acc + parseFloat(t.total_mb), 0);
    console.log(`Total MariaDB Size: ${totalDbMb.toFixed(2)} MB`);

    // 2. Options Table Analysis (Transients & Autoload)
    const [optionsAudit] = await maria.query(`
        SELECT 
            COUNT(*) as total_options,
            SUM(CASE WHEN option_name LIKE '%transient%' THEN 1 ELSE 0 END) as transient_count,
            ROUND(SUM(CASE WHEN option_name LIKE '%transient%' THEN LENGTH(option_value) ELSE 0 END) / 1024 / 1024, 2) as transient_mb,
            SUM(CASE WHEN autoload = 'yes' THEN 1 ELSE 0 END) as autoload_count,
            ROUND(SUM(CASE WHEN autoload = 'yes' THEN LENGTH(option_value) ELSE 0 END) / 1024 / 1024, 2) as autoload_mb,
            ROUND(SUM(LENGTH(option_value)) / 1024 / 1024, 2) as total_options_val_mb
        FROM ERPtffHR_options;
    `);
    console.log("\n⚙️ Options Table (ERPtffHR_options) Breakdown:");
    console.table(optionsAudit);

    const [topOptions] = await maria.query(`
        SELECT option_name, LENGTH(option_value) as bytes, autoload
        FROM ERPtffHR_options
        ORDER BY LENGTH(option_value) DESC
        LIMIT 10;
    `);
    console.log("\n🐘 Top 10 Largest Option Keys:");
    console.table(topOptions);

    // 3. Posts Breakdown by post_type and post_status
    const [postsAudit] = await maria.query(`
        SELECT post_type, post_status, COUNT(*) as count,
               ROUND(SUM(LENGTH(post_content)) / 1024 / 1024, 2) as content_mb
        FROM ERPtffHR_posts
        GROUP BY post_type, post_status
        ORDER BY count DESC;
    `);
    console.log("\n📝 Posts Breakdown by post_type & post_status:");
    console.table(postsAudit);

    // 4. Postmeta Analysis
    const [postmetaAudit] = await maria.query(`
        SELECT meta_key, COUNT(*) as count,
               ROUND(SUM(LENGTH(meta_value)) / 1024 / 1024, 2) as total_val_mb
        FROM ERPtffHR_postmeta
        GROUP BY meta_key
        ORDER BY total_val_mb DESC
        LIMIT 15;
    `);
    console.log("\n🏷️ Top 15 Postmeta Keys by Size:");
    console.table(postmetaAudit);

    // Orphaned postmeta check
    const [orphanedMeta] = await maria.query(`
        SELECT COUNT(*) as orphaned_postmeta_count
        FROM ERPtffHR_postmeta pm
        LEFT JOIN ERPtffHR_posts p ON pm.post_id = p.ID
        WHERE p.ID IS NULL;
    `);
    console.log("\n👻 Orphaned Postmeta Count:", orphanedMeta[0].orphaned_postmeta_count);

    await maria.end();
}

async function auditSQLite() {
    console.log("\n=======================================================");
    console.log("🔍 2. EMDASH SQLITE AUDIT: data.db");
    console.log("=======================================================");

    const dbPath = "data.db";
    const stat = fs.statSync(dbPath);
    console.log(`File: ${dbPath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);

    const db = new sqlite3.DatabaseSync(dbPath);

    // Page stats
    const pageSize = db.prepare("PRAGMA page_size;").get().page_size;
    const pageCount = db.prepare("PRAGMA page_count;").get().page_count;
    const freelistCount = db.prepare("PRAGMA freelist_count;").get().freelist_count;
    const freeMb = ((freelistCount * pageSize) / 1024 / 1024).toFixed(2);
    console.log(`Page Size: ${pageSize} bytes`);
    console.log(`Total Pages: ${pageCount} (~${((pageCount * pageSize) / 1024 / 1024).toFixed(2)} MB)`);
    console.log(`Freelist (unclaimed/free space inside DB): ${freelistCount} pages (~${freeMb} MB)`);

    // Tables
    const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';").all();
    console.log("\n📋 SQLite Tables & Row Counts:");
    const tableCounts = [];
    for (const t of tables) {
        try {
            const count = db.prepare(`SELECT COUNT(*) as c FROM "${t.name}"`).get().c;
            tableCounts.push({ table: t.name, rows: count });
        } catch (e) {
            tableCounts.push({ table: t.name, rows: "Error: " + e.message });
        }
    }
    console.table(tableCounts);

    // Revisions vs Posts inspection
    if (tables.some(t => t.name === "revisions")) {
        const revStats = db.prepare(`
            SELECT collection, COUNT(*) as count,
                   ROUND(SUM(LENGTH(data)) / 1024 / 1024, 2) as total_data_mb,
                   ROUND(AVG(LENGTH(data)), 0) as avg_data_bytes
            FROM revisions
            GROUP BY collection;
        `).all();
        console.log("\n📦 Revisions Table Breakdown:");
        console.table(revStats);
    }

    if (tables.some(t => t.name === "ec_posts")) {
        const postStats = db.prepare(`
            SELECT status, locale, COUNT(*) as count,
                   ROUND(SUM(LENGTH(content)) / 1024 / 1024, 2) as content_mb,
                   ROUND(SUM(LENGTH(title)) / 1024 / 1024, 2) as title_mb
            FROM ec_posts
            GROUP BY status, locale;
        `).all();
        console.log("\n📰 ec_posts Table Breakdown:");
        console.table(postStats);
    }
}

async function run() {
    try {
        await auditMariaDB();
    } catch (e) {
        console.error("MariaDB Audit Failed:", e);
    }

    try {
        await auditSQLite();
    } catch (e) {
        console.error("SQLite Audit Failed:", e);
    }
}

run();
