/**
 * 7C Portable Text → plain HTML for feeds (RSS `content:encoded`).
 *
 * Covers what EmDash posts use: blocks (normal, h2–h4, blockquote),
 * bullet/number lists, em/strong/code/underline marks, links and images.
 * Unknown block types are skipped, never echoed raw.
 */

type C7PtSpan = { _type?: string; text?: string; marks?: string[] };
type C7PtBlock = {
	_type?: string;
	style?: string;
	listItem?: string;
	children?: C7PtSpan[];
	markDefs?: Array<{ _key?: string; _type?: string; href?: string }>;
	asset?: { url?: string };
	url?: string;
	alt?: string;
	caption?: string;
};

const C7_PT_DECORATORS: Record<string, string> = { em: "em", strong: "strong", code: "code", underline: "u" };
const C7_PT_STYLES = new Set(["h2", "h3", "h4", "blockquote"]);

function c7Html(s: string | undefined): string {
	return (s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function c7Spans(b: C7PtBlock, base: string): string {
	const links = new Map((b.markDefs ?? []).filter((m) => m._type === "link" && m._key).map((m) => [m._key!, c7Abs(m.href ?? "", base)]));
	return (b.children ?? [])
		.map((sp) => {
			let out = c7Html(sp.text);
			for (const m of sp.marks ?? []) {
				const tag = C7_PT_DECORATORS[m];
				if (tag) out = `<${tag}>${out}</${tag}>`;
				else if (links.has(m)) out = `<a href="${c7Html(links.get(m))}">${out}</a>`;
			}
			return out;
		})
		.join("");
}

// Feed readers have no page URL, so site-relative links and images need the origin.
function c7Abs(url: string, base: string): string {
	return url.startsWith("/") && !url.startsWith("//") ? base + url : url;
}

export function c7PortableToHtml(raw: string | null | undefined, base = ""): string {
	let blocks: C7PtBlock[];
	try {
		blocks = JSON.parse(raw || "[]");
	} catch {
		return "";
	}
	if (!Array.isArray(blocks)) return "";

	const out: string[] = [];
	let list: string | null = null;
	for (const b of blocks) {
		const wantList = b._type === "block" && b.listItem ? (b.listItem === "number" ? "ol" : "ul") : null;
		if (list && list !== wantList) {
			out.push(`</${list}>`);
			list = null;
		}
		if (wantList) {
			if (!list) out.push(`<${(list = wantList)}>`);
			out.push(`<li>${c7Spans(b, base)}</li>`);
		} else if (b._type === "block") {
			const tag = C7_PT_STYLES.has(b.style ?? "") ? b.style! : "p";
			out.push(`<${tag}>${c7Spans(b, base)}</${tag}>`);
		} else if (b._type === "image") {
			const src = c7Abs(b.asset?.url || b.url || "", base);
			if (!src) continue;
			const cap = b.caption ? `<figcaption>${c7Html(b.caption)}</figcaption>` : "";
			out.push(`<figure><img src="${c7Html(src)}" alt="${c7Html(b.alt)}" />${cap}</figure>`);
		}
	}
	if (list) out.push(`</${list}>`);
	return out.join("\n");
}
