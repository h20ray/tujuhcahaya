import path from "node:path";
import { fileURLToPath } from "node:url";
import node from "@astrojs/node";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import emdash, { local, s3 } from "emdash/astro";
import { sqlite } from "emdash/db";
import { google } from "emdash/auth/providers/google";
import tailwindcss from "@tailwindcss/vite";
import { c7EditorialGuard } from "./src/plugins/c7-editorial-guard.js";
import { c7Notifications } from "./src/plugins/c7-notifications.js";
import { c7RadioPlugin } from "@tujuhcahaya/radio-player";
import { c7LiveChatPlugin } from "@tujuhcahaya/live-chat";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load .env at config time so build/verify pick up build-time env vars
// (e.g. EMDASH_OAUTH_GOOGLE_CLIENT_ID, SITE_URL) without manual exports.
try {
	process.loadEnvFile(path.join(__dirname, ".env"));
} catch {}

// "Login dengan Google" next to passkeys, enabled when OAuth client is configured.
const authProviders = process.env.EMDASH_OAUTH_GOOGLE_CLIENT_ID ? [google()] : [];

const storageDriver = process.env.S3_ACCESS_KEY_ID
	? s3({
			endpoint: process.env.S3_ENDPOINT,
			bucket: process.env.S3_BUCKET || "xlocal",
			accessKeyId: process.env.S3_ACCESS_KEY_ID,
			secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
			region: process.env.S3_REGION || "auto",
			publicUrl: process.env.S3_PUBLIC_URL || "https://media.xlocal.id",
	  })
	: local({
			directory: "./uploads",
			baseUrl: "/_emdash/api/media/file",
	  });

export default defineConfig({
	site: process.env.SITE_URL ?? "https://www.tujuhcahaya.com",
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	i18n: {
		defaultLocale: "id",
		locales: ["id", "en"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	redirects: {
		"/wp-admin": "/_emdash/admin",
		"/wp-admin/[...path]": "/_emdash/admin",
		"/wp-login.php": "/_emdash/admin",
	},
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			dedupe: ["react", "react-dom", "lucide-react"],
			alias: {
				"@tujuhcahaya/live-chat/react": path.resolve(__dirname, "../plugins/tujuhcahaya-live-chat/dist/client/components/C7LiveChatPanel.js"),
			},
		},
		server: {
			fs: {
				allow: [path.resolve(__dirname, "..")],
			},
		},
		ssr: {
			noExternal: ["@tujuhcahaya/radio-player", "@tujuhcahaya/live-chat", "lucide-react"],
		},
		build: {
			chunkSizeWarningLimit: 1000,
		},
	},
	integrations: [
		react(),
		emdash({
			database: sqlite({ url: "file:./data.db" }),
			storage: storageDriver,
			authProviders,
			plugins: [c7EditorialGuard(), c7Notifications(), c7RadioPlugin(), c7LiveChatPlugin()],
		}),
	],
	devToolbar: { enabled: false },
});
