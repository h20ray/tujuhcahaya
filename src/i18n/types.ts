/**
 * 7C i18n Translation Schema & Type Definitions
 */

export interface NavDict {
	home: string;
	archive: string;
	about: string;
	news: string;
	search_placeholder: string;
	mode: string;
	mode_dark: string;
	mode_light: string;
	mobile_menu_open: string;
	mobile_menu_close: string;
	search_command: string;
	search_tooltip: string;
}

export interface PillarItemDict {
	title: string;
	desc: string;
}

export interface PillarsDict {
	berita: PillarItemDict;
	tech: PillarItemDict;
	game: PillarItemDict;
	musik: PillarItemDict;
	budaya: PillarItemDict;
	kesehatan: PillarItemDict;
}

export interface TopbarDict {
	brand_tagline: string;
	dispatch_live: string;
	switch_lang: string;
}

export interface EditorialDict {
	read_time: string;
	published_on: string;
	by: string;
	all: string;
	articles_count: string;
	trending: string;
	latest: string;
	empty_state: string;
	back_to_home: string;
	page_not_found: string;
	read_next: string;
	reading_progress: string;
	score_verdict: string;
	score_pros: string;
	score_cons: string;
	table_spec: string;
	table_value: string;
	mark_as_read: string;
	loading_next: string;
	all_loaded: string;
	next_page: string;
	share_label: string;
	copy_label: string;
	copied_label: string;
	topics_label: string;
	related_title: string;
	aria_breadcrumbs: string;
}

export interface PaletteDict {
	placeholder: string;
	aria_label: string;
	quick_search: string;
	section_posts: string;
	section_pages: string;
	section_actions: string;
	section_radio: string;
	theme_toggle_title: string;
	theme_toggle_sub: string;
	theme_toggle_badge: string;
	theme_toggle_toast: string;
	radio_toggle_title: string;
	radio_toggle_sub: string;
	radio_toggle_badge: string;
	radio_toggle_toast: string;
	lyrics_open_title: string;
	lyrics_open_sub: string;
	lyrics_open_badge: string;
	lang_toggle_title: string;
	lang_toggle_sub: string;
	lang_toggle_badge: string;
	lang_toggle_toast: string;
}

export interface SidebarDict {
	topics_title: string;
	topics_related: string;
	trending_title: string;
	newsletter_title: string;
	newsletter_desc: string;
	newsletter_placeholder: string;
	newsletter_button: string;
	newsletter_success: string;
	search_title: string;
	search_placeholder: string;
}

export interface AuthorDict {
	articles_written: string;
	about_author: string;
	view_all_by: string;
	browse_authors: string;
	default_bio: string;
	page_title: string;
	page_description: string;
	kicker: string;
	published_stories: string;
	all_stories_by: string;
	previous: string;
	next: string;
	page_of_total: string;
	aria_profile: string;
}

export interface FooterDict {
	tagline: string;
	pillars_title: string;
	company_title: string;
	about: string;
	editorial_team: string;
	cyber_guidelines: string;
	privacy: string;
	terms: string;
	contact: string;
	copyright: string;
	built_with: string;
	with_love: string;
	social_channels: string;
	footer_nav: string;
}

export interface SubmissionCategory {
	value: string;
	label: string;
}

export interface SubmissionDict {
	title: string;
	tagline: string;
	desc: string;
	name_label: string;
	name_placeholder: string;
	email_label: string;
	phone_label: string;
	category_label: string;
	categories: SubmissionCategory[];
	title_label: string;
	title_placeholder: string;
	content_label: string;
	content_placeholder: string;
	submit_btn: string;
	submitting: string;
	success_title: string;
	success_msg: string;
	send_another: string;
	error_required: string;
}

export interface ErrorsDict {
	title_404: string;
	desc_404: string;
	back_to_home: string;
	explore_archive: string;
}

export interface A11yDict {
	skip_to_content: string;
	search_articles: string;
	toggle_menu: string;
	close_menu: string;
	site_footer: string;
	breadcrumbs: string;
}

export interface C7TranslationSchema {
	nav: NavDict;
	pillars: PillarsDict;
	topbar: TopbarDict;
	editorial: EditorialDict;
	palette: PaletteDict;
	sidebar: SidebarDict;
	author: AuthorDict;
	footer: FooterDict;
	submission: SubmissionDict;
	errors: ErrorsDict;
	a11y: A11yDict;
}
