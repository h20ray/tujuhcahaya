/**
 * 7C CMS Author Registry & Resolution
 */

import type { Locale } from "../i18n/utils";
import type { C7AuthorProfile, C7RawByline } from "./7c-cms-types";

/**
 * Verified author registry derived from WordPress legacy users and Cloudflare R2 CDN assets
 */
export const C7_AUTHORS: Record<
	string,
	{
		name: string;
		roleId: string;
		roleEn: string;
		avatarUrl: string;
		bioId: string;
		bioEn: string;
	}
> = {
	h20ray: {
		name: "Andoru Ray",
		roleId: "Founder & Pemimpin Umum",
		roleEn: "Founder & Publisher",
		avatarUrl: "https://media.xlocal.id/tujuhcahaya/uploads/2025/09/cropped-IMG_20250331_000108_788.avif",
		bioId: "CEO, influencer, public figure, engineer, scientist, adalah contoh nama-nama pekerjaan orang.",
		bioEn: "CEO, influencer, public figure, engineer, scientist, adalah contoh nama-nama pekerjaan orang.",
	},
	elangelano: {
		name: "Elang Elano",
		roleId: "Redaktur Senior & Teknologi",
		roleEn: "Senior & Tech Editor",
		avatarUrl: "https://media.xlocal.id/tujuhcahaya/uploads/2025/01/tj_pp-1-png.avif",
		bioId: "Jurnalis dan redaktur Tujuhcahaya, meliput lanskap teknologi, kecerdasan buatan, budaya digital, dan inovasi masa depan.",
		bioEn: "Journalist and editor at Tujuhcahaya, covering technology, artificial intelligence, digital culture, and future innovations.",
	},
	margarethanina: {
		name: "Margaretha Nina",
		roleId: "Redaktur Musik & Budaya Urban",
		roleEn: "Music & Urban Culture Editor",
		avatarUrl: "https://media.xlocal.id/tujuhcahaya/uploads/2025/01/photo_2025-01-13_05-21-07.avif",
		bioId: "Kurator musik dan budaya urban kontemporer, mengulas dinamika kreatif, seni arus bawah, dan gaya hidup modern.",
		bioEn: "Curator of music and contemporary urban culture, reviewing creative scenes, underground art, and modern lifestyle.",
	},
	wodemahendra: {
		name: "Hendra Tujuhcahaya",
		roleId: "Pemimpin Redaksi",
		roleEn: "Editor-in-Chief",
		avatarUrl: "https://media.xlocal.id/tujuhcahaya/uploads/2025/01/tj_pp-4-png.avif",
		bioId: "Pemimpin Redaksi Tujuhcahaya, mengawal standar jurnalisme berkualitas, investigasi mendalam, etika redaksi, dan keterbukaan informasi publik.",
		bioEn: "Editor-in-Chief at Tujuhcahaya, guiding quality journalism standards, in-depth investigations, editorial ethics, and public transparency.",
	},
	rachelpatricia: {
		name: "Rachel Patricia",
		roleId: "Jurnalis & Dinamika Sosial",
		roleEn: "Journalist & Social Dynamics",
		avatarUrl: "https://media.xlocal.id/tujuhcahaya/uploads/2025/01/tj_pp-2-png.avif",
		bioId: "Jurnalis lapangan yang aktif merekam dinamika sosial masyarakat, tren perkotaan, industri kreatif, dan isu generasi muda.",
		bioEn: "Field reporter capturing social dynamics, urban trends, creative movements, and youth culture.",
	},
	sarahdilla: {
		name: "Sarah Dilla",
		roleId: "Jurnalis Riset & Opini",
		roleEn: "Research & Opinion Journalist",
		avatarUrl: "https://media.xlocal.id/tujuhcahaya/uploads/2025/01/tj_pp-3-png.avif",
		bioId: "Penulis riset dan jurnalis investigatif yang mengeksplorasi isu sosial-kultural, kebijakan publik, dan narasi kritis kontemporer.",
		bioEn: "Research writer and investigative journalist exploring sociocultural developments, public policy, and critical narratives.",
	},
};

/**
 * Translation group & Byline ID mappings to canonical author slugs
 */
export const C7_BYLINE_ID_MAP: Record<string, string> = {
	"0100MUNS3DJL68FA69B26FACE9": "h20ray",
	"0100MUNS3DJN572038F317780B": "h20ray",
	"0100MUNS3DJOA35D985DFFDBA0": "margarethanina",
	"0100MUNS3DJP23DBBB7C836C77": "margarethanina",
	"0100MUNS3DJPCA4539BDBEB12A": "elangelano",
	"0100MUNS3DJQ2297CDA3676A67": "elangelano",
	"0100MUNS3DJQ06A12A6DABF37A": "rachelpatricia",
	"0100MUNS3DJR758DF40AB5AD39": "rachelpatricia",
	"0100MUNS3DJSD97205CCB31353": "sarahdilla",
	"0100MUNS3DJT5A2245DC3513DC": "sarahdilla",
	"0100MUNS3DJT76BFD04713B98E": "wodemahendra",
	"0100MUNS3DJU33A11FDD2E6A64": "wodemahendra",
};

/**
 * Resolve an author/byline into an authentic C7AuthorProfile with fallback to Redaksi
 */
export function resolve7cAuthor(byline: C7RawByline, locale: Locale = "id"): C7AuthorProfile {
	const bylineStr = typeof byline === "string" ? byline.trim() : "";
	const bylineObj =
		typeof byline === "object" && byline !== null
			? (byline as {
					id?: string;
					slug?: string;
					displayName?: string;
					primaryBylineId?: string;
					primary_byline_id?: string;
					translation_group?: string;
					bio?: string;
					websiteUrl?: string | null;
			  })
			: null;

	let slug = "";
	if (bylineStr) {
		slug = C7_BYLINE_ID_MAP[bylineStr] || (C7_AUTHORS[bylineStr.toLowerCase()] ? bylineStr.toLowerCase() : "");
	} else if (bylineObj) {
		if (typeof bylineObj.slug === "string" && bylineObj.slug.trim().length > 0) {
			slug = bylineObj.slug.toLowerCase().trim();
		} else if (typeof bylineObj.id === "string" && C7_BYLINE_ID_MAP[bylineObj.id]) {
			slug = C7_BYLINE_ID_MAP[bylineObj.id];
		} else if (typeof bylineObj.primaryBylineId === "string" && C7_BYLINE_ID_MAP[bylineObj.primaryBylineId]) {
			slug = C7_BYLINE_ID_MAP[bylineObj.primaryBylineId];
		} else if (typeof bylineObj.primary_byline_id === "string" && C7_BYLINE_ID_MAP[bylineObj.primary_byline_id]) {
			slug = C7_BYLINE_ID_MAP[bylineObj.primary_byline_id];
		}
	}

	const knownAuthor = C7_AUTHORS[slug];
	const isEn = locale === "en";

	if (knownAuthor) {
		const name = bylineObj?.displayName || knownAuthor.name;
		const role = isEn ? knownAuthor.roleEn : knownAuthor.roleId;
		const bio =
			typeof bylineObj?.bio === "string" && bylineObj.bio.trim().length > 0
				? bylineObj.bio.trim()
				: isEn
				? knownAuthor.bioEn
				: knownAuthor.bioId;
		const avatarUrl = knownAuthor.avatarUrl;
		const archiveUrl = isEn ? `/en/author/${slug}` : `/author/${slug}`;

		return {
			id: bylineObj?.id,
			slug,
			name,
			role,
			bio,
			avatarUrl,
			archiveUrl,
			websiteUrl: bylineObj?.websiteUrl ?? null,
			isEditorialFallback: false,
		};
	}

	// If byline is provided with non-empty displayName but not in static registry
	if (bylineObj?.displayName && typeof bylineObj.displayName === "string") {
		const name = bylineObj.displayName.trim();
		const bylineSlug = slug || name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
		const archiveUrl = isEn ? `/en/author/${bylineSlug}` : `/author/${bylineSlug}`;
		return {
			id: bylineObj.id,
			slug: bylineSlug,
			name,
			role: isEn ? "Editorial Contributor" : "Kontributor Redaksi",
			bio:
				typeof bylineObj.bio === "string" && bylineObj.bio.trim().length > 0
					? bylineObj.bio.trim()
					: isEn
					? "Editorial contributor for Tujuhcahaya."
					: "Kontributor editorial media digital Tujuhcahaya.",
			avatarUrl: null,
			archiveUrl,
			websiteUrl: bylineObj.websiteUrl ?? null,
			isEditorialFallback: false,
		};
	}

	// Institutional fallback to Redaksi Tujuhcahaya
	return {
		id: bylineObj?.id,
		slug: "redaksi",
		name: isEn ? "Tujuhcahaya Editorial" : "Redaksi Tujuhcahaya",
		role: isEn ? "Editorial Board" : "Dewan Redaksi",
		bio: isEn
			? "Independent digital media house exploring investigative journalism, technology, urban culture, music, and modern social dynamics adhering to high journalistic standards."
			: "Media house digital independen yang mengeksplorasi jurnalisme investigatif, teknologi, kultur urban, musik, dan dinamika sosial masyarakat modern berpedoman pada standar jurnalisme berkualitas.",
		avatarUrl: null,
		archiveUrl: isEn ? "/en/redaksi" : "/redaksi",
		websiteUrl: "https://tujuhcahaya.com",
		isEditorialFallback: true,
	};
}
