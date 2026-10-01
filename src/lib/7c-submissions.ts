import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { ulid } from "ulidx";

export interface C7SubmissionInput {
	title: string;
	authorName: string;
	authorEmail: string;
	authorPhone?: string;
	category: string;
	content: string;
	locale?: string;
}

export interface C7SavedSubmission {
	id: string;
	slug: string;
	title: string;
	author_name: string;
	author_email: string;
	author_phone: string | null;
	category: string;
	content: string;
	curation_status: string;
	locale: string;
	created_at: string;
	notes: string | null;
}

function generateSlug(title: string): string {
	const base = title
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
		.slice(0, 48);

	const suffix = Math.random().toString(36).substring(2, 6);
	return `${base || "naskah"}-${suffix}`;
}

function getDatabaseConnection(): DatabaseSync {
	const dbPath = path.resolve(process.cwd(), "data.db");
	return new DatabaseSync(dbPath);
}

/**
 * Save incoming contributor manuscript into EmDash ec_submissions table.
 */
export async function save7cSubmission(
	input: C7SubmissionInput,
): Promise<{ success: boolean; id: string; slug: string }> {
	const title = input.title.trim();
	const authorName = input.authorName.trim();
	const authorEmail = input.authorEmail.trim();
	const authorPhone = input.authorPhone?.trim() || null;
	const category = input.category.trim() || "opini";
	const content = input.content.trim();
	const locale = input.locale?.trim() || "id";

	if (!title || !authorName || !authorEmail || !content) {
		throw new Error("Field wajib (title, authorName, authorEmail, content) tidak boleh kosong.");
	}

	const id = ulid();
	const slug = generateSlug(title);
	const db = getDatabaseConnection();

	try {
		const stmt = db.prepare(`
			INSERT INTO ec_submissions (
				id, slug, status, created_at, updated_at, locale,
				title, author_name, author_email, author_phone,
				category, content, curation_status
			) VALUES (
				?, ?, 'draft', datetime('now'), datetime('now'), ?,
				?, ?, ?, ?,
				?, ?, 'pending'
			)
		`);

		stmt.run(
			id,
			slug,
			locale,
			title,
			authorName,
			authorEmail,
			authorPhone,
			category,
			content,
		);

		return {
			success: true,
			id,
			slug,
		};
	} finally {
		db.close();
	}
}

/**
 * Fetch pending or all reader submissions for editorial dashboard/curation.
 */
export async function get7cSubmissions(options: {
	limit?: number;
	offset?: number;
	status?: string;
} = {}): Promise<C7SavedSubmission[]> {
	const limit = options.limit ?? 50;
	const offset = options.offset ?? 0;
	const db = getDatabaseConnection();

	try {
		if (options.status) {
			const stmt = db.prepare(`
				SELECT * FROM ec_submissions
				WHERE curation_status = ?
				ORDER BY created_at DESC
				LIMIT ? OFFSET ?
			`);
			return stmt.all(options.status, limit, offset) as unknown as C7SavedSubmission[];
		}

		const stmt = db.prepare(`
			SELECT * FROM ec_submissions
			ORDER BY created_at DESC
			LIMIT ? OFFSET ?
		`);
		return stmt.all(limit, offset) as unknown as C7SavedSubmission[];
	} finally {
		db.close();
	}
}
