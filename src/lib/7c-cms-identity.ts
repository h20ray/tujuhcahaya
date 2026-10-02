/**
 * 7C CMS Site Identity Adapter
 */

import { getSiteSettings } from "emdash";
import { resolveStarterSiteIdentity } from "../utils/site-identity";

/**
 * Resolve site identity (title, tagline)
 */
export async function get7cSiteIdentity() {
	const rawSettings = await getSiteSettings();
	return resolveStarterSiteIdentity(rawSettings);
}
