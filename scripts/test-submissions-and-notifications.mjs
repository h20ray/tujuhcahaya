import { save7cSubmission, get7cSubmissions } from "../src/lib/7c-submissions.ts";
import { get7cNotificationSettings, send7cSubmissionNotification } from "../src/lib/7c-notifications.ts";

async function runTests() {
	console.log("=== 1. Testing Notification Settings Retrieval ===");
	const settings = await get7cNotificationSettings();
	console.log("Settings loaded successfully:", {
		hasDiscordUrl: Boolean(settings.discordWebhookUrl),
		hasTelegramToken: Boolean(settings.telegramBotToken),
		hasTelegramChatId: Boolean(settings.telegramChatId),
		enableDiscord: settings.enableDiscord,
		enableTelegram: settings.enableTelegram,
	});

	console.log("\n=== 2. Testing Submission Storage ===");
	const mockSubmission = {
		title: "Refleksi Santai: Kenapa Keyboard Mekanikal Bikin Nagih",
		authorName: "Budi Santoso",
		authorEmail: "budi@santoso.dev",
		authorPhone: "081234567890",
		category: "tech",
		content: "Awalnya saya cuma iseng beli keyboard mekanikal murah di marketplace. Tapi setelah dengar bunyi 'thock' dan merasakan tactile feedback-nya, kembali ke keyboard laptop rasanya seperti mengetik di atas tahu bejek.",
		locale: "id",
	};

	const saveResult = await save7cSubmission(mockSubmission);
	console.log("Save result:", saveResult);

	console.log("\n=== 3. Testing Submission Query ===");
	const submissions = await get7cSubmissions({ limit: 5 });
	console.log(`Total submissions fetched: ${submissions.length}`);
	const found = submissions.find(s => s.id === saveResult.id);
	if (!found) {
		throw new Error(`Saved submission with id ${saveResult.id} not found in database!`);
	}
	console.log("Verified submission in database:", {
		id: found.id,
		title: found.title,
		author: found.author_name,
		email: found.author_email,
		phone: found.author_phone,
		status: found.curation_status,
		created_at: found.created_at,
	});

	console.log("\n=== 4. Testing Notification Dispatch (Graceful when unconfigured) ===");
	const notifyResult = await send7cSubmissionNotification({
		title: mockSubmission.title,
		authorName: mockSubmission.authorName,
		authorEmail: mockSubmission.authorEmail,
		authorPhone: mockSubmission.authorPhone,
		category: mockSubmission.category,
		content: mockSubmission.content,
		submissionId: saveResult.id,
		locale: "id",
	});
	console.log("Notification dispatch result (safe fallback):", notifyResult);

	console.log("\n✅ All Reader Submission & Notification tests passed successfully!");
}

runTests().catch(err => {
	console.error("❌ Test failed:", err);
	process.exit(1);
});
