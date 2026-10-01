import { getPluginSettings } from "emdash";

export interface C7NotificationSettings {
	discordWebhookUrl: string;
	telegramBotToken: string;
	telegramChatId: string;
	enableDiscord: boolean;
	enableTelegram: boolean;
}

export interface C7SubmissionPayload {
	title: string;
	authorName: string;
	authorEmail: string;
	authorPhone?: string;
	category: string;
	content: string;
	submissionId?: string;
	locale?: string;
}

export interface C7NotificationResult {
	discord: { sent: boolean; error?: string };
	telegram: { sent: boolean; error?: string };
}

/**
 * Escape HTML special characters for Telegram HTML parse mode
 */
function escapeHtml(text: string): string {
	return text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
}

/**
 * Retrieve current notification settings from EmDash database options
 * with transparent fallback to process.env.
 */
export async function get7cNotificationSettings(): Promise<C7NotificationSettings> {
	let dbSettings: Record<string, unknown> = {};

	try {
		dbSettings = (await getPluginSettings("c7-notifications")) || {};
	} catch {
		// Fall back to environment if database is initializing or in standalone scripts
		dbSettings = {};
	}

	return {
		discordWebhookUrl: String(
			dbSettings.discordWebhookUrl || process.env.DISCORD_WEBHOOK_URL || "",
		).trim(),
		telegramBotToken: String(
			dbSettings.telegramBotToken || process.env.TELEGRAM_BOT_TOKEN || "",
		).trim(),
		telegramChatId: String(
			dbSettings.telegramChatId || process.env.TELEGRAM_CHAT_ID || "",
		).trim(),
		enableDiscord:
			dbSettings.enableDiscord !== undefined
				? Boolean(dbSettings.enableDiscord)
				: true,
		enableTelegram:
			dbSettings.enableTelegram !== undefined
				? Boolean(dbSettings.enableTelegram)
				: true,
	};
}

/**
 * Dispatch instant notifications to Discord and Telegram when a new reader submission arrives.
 * Safe & resilient: never throws or disrupts the contributor form submission.
 */
export async function send7cSubmissionNotification(
	submission: C7SubmissionPayload,
): Promise<C7NotificationResult> {
	const settings = await get7cNotificationSettings();
	const result: C7NotificationResult = {
		discord: { sent: false },
		telegram: { sent: false },
	};

	const snippet =
		submission.content.length > 280
			? `${submission.content.slice(0, 280)}...`
			: submission.content;

	const promises: Promise<void>[] = [];

	// 1. Dispatch Discord Webhook
	if (settings.enableDiscord && settings.discordWebhookUrl) {
		promises.push(
			(async () => {
				try {
					const embed = {
						title: `📬 Naskah Baru: ${submission.title}`,
						description: `"${snippet}"`,
						color: 0x0b57d0, // 7C Expressive Primary Blue
						fields: [
							{
								name: "Penulis",
								value: `${submission.authorName} (${submission.authorEmail})`,
								inline: true,
							},
							{
								name: "Rubrik / Kanal",
								value: submission.category.toUpperCase(),
								inline: true,
							},
							{
								name: "Kontak / WA",
								value: submission.authorPhone || "Tidak disertakan",
								inline: true,
							},
							{
								name: "Status Kurasi",
								value: "⏳ Menunggu Review Redaksi",
								inline: true,
							},
						],
						footer: {
							text: "7C Editorial Engine • EmDash CMS Submissions",
						},
						timestamp: new Date().toISOString(),
					};

					const response = await fetch(settings.discordWebhookUrl, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							username: "Tujuhcahaya Redaksi",
							avatar_url: "https://tujuhcahaya.com/favicon.ico",
							embeds: [embed],
						}),
					});

					if (!response.ok) {
						const errText = await response.text();
						result.discord = {
							sent: false,
							error: `HTTP ${response.status}: ${errText}`,
						};
					} else {
						result.discord = { sent: true };
					}
				} catch (err: unknown) {
					result.discord = {
						sent: false,
						error: err instanceof Error ? err.message : String(err),
					};
				}
			})(),
		);
	}

	// 2. Dispatch Telegram Bot Message
	if (
		settings.enableTelegram &&
		settings.telegramBotToken &&
		settings.telegramChatId
	) {
		promises.push(
			(async () => {
				try {
					const tgUrl = `https://api.telegram.org/bot${settings.telegramBotToken}/sendMessage`;
					const tgMessage = [
						`📬 <b>Naskah Baru Masuk — Tujuhcahaya</b>`,
						`━━━━━━━━━━━━━━━━━━`,
						`📝 <b>Judul:</b> ${escapeHtml(submission.title)}`,
						`👤 <b>Penulis:</b> ${escapeHtml(submission.authorName)} (<code>${escapeHtml(submission.authorEmail)}</code>)`,
						`🏷️ <b>Rubrik:</b> #${escapeHtml(submission.category)}`,
						`📱 <b>Kontak:</b> ${escapeHtml(submission.authorPhone || "-")}`,
						`🆔 <b>ID Naskah:</b> <code>${submission.submissionId || "-"}</code>`,
						`━━━━━━━━━━━━━━━━━━`,
						`💬 <b>Cuplikan:</b>`,
						`<i>"${escapeHtml(snippet)}"</i>`,
						`━━━━━━━━━━━━━━━━━━`,
						`👉 <i>Buka EmDash Admin (<code>/_emdash/admin</code>) untuk kurasi naskah.</i>`,
					].join("\n");

					const response = await fetch(tgUrl, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							chat_id: settings.telegramChatId,
							text: tgMessage,
							parse_mode: "HTML",
						}),
					});

					if (!response.ok) {
						const errText = await response.text();
						result.telegram = {
							sent: false,
							error: `HTTP ${response.status}: ${errText}`,
						};
					} else {
						result.telegram = { sent: true };
					}
				} catch (err: unknown) {
					result.telegram = {
						sent: false,
						error: err instanceof Error ? err.message : String(err),
					};
				}
			})(),
		);
	}

	await Promise.allSettled(promises);
	return result;
}
