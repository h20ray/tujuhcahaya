import { fileURLToPath } from "node:url";
import { definePlugin } from "emdash";

const currentFilePath = fileURLToPath(new URL(import.meta.url)).replace(/\\/g, "/");

/**
 * Settings Schema for 7C Editorial Notifications
 * Auto-rendered in EmDash Admin Panel under Plugins -> 7C Notifications -> Settings
 */
export const C7_NOTIFICATIONS_SETTINGS_SCHEMA = {
	discordWebhookUrl: {
		type: "url" as const,
		label: "Discord Webhook URL",
		description: "URL webhook Discord untuk menerima alert naskah kiriman pembaca",
		placeholder: "https://discord.com/api/webhooks/...",
	},
	telegramBotToken: {
		type: "secret" as const,
		label: "Telegram Bot Token",
		description: "Token bot Telegram resmi dari @BotFather",
	},
	telegramChatId: {
		type: "string" as const,
		label: "Telegram Chat ID",
		description: "ID chat personal atau Channel/Group Telegram (misal: -100123456789)",
	},
	enableDiscord: {
		type: "boolean" as const,
		label: "Aktifkan Alert Discord",
		description: "Kirim alert embed instan ke Discord saat naskah masuk",
		default: true,
	},
	enableTelegram: {
		type: "boolean" as const,
		label: "Aktifkan Alert Telegram",
		description: "Kirim pesan ringkasan instan ke Telegram saat naskah masuk",
		default: true,
	},
};

/**
 * 7C Bespoke Notifications Plugin for EmDash
 */
export function createPlugin(_options: Record<string, unknown> = {}) {
	return definePlugin({
		id: "c7-notifications",
		version: "1.0.0",
		capabilities: [],
		admin: {
			settingsSchema: C7_NOTIFICATIONS_SETTINGS_SCHEMA,
		},
	});
}

/**
 * EmDash Plugin Descriptor Factory
 */
export function c7Notifications(options: Record<string, unknown> = {}) {
	return {
		id: "c7-notifications",
		version: "1.0.0",
		entrypoint: currentFilePath,
		settingsSchema: C7_NOTIFICATIONS_SETTINGS_SCHEMA,
		options,
	};
}

export default createPlugin;
