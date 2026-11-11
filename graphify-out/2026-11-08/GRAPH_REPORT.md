# Graph Report - tujuhcahaya  (2026-11-08)

## Corpus Check
- 268 files · ~392,511 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 20 file(s) not represented in the graph (top: .css 16, (none) 3, .example 1)

## Summary
- 1392 nodes · 3275 edges · 139 communities (53 shown, 86 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1917fb25`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- validate-coverage-ledger.cjs
- C7CommandPaletteRenderer.ts
- validate-findings.cjs
- live.config.ts
- 7c-feeds.ts
- autoPublishPost
- check-taxonomies.mjs
- 7c-seo.ts
- types.ts
- 7c-dispatch-drawer.ts
- i18n/utils.ts
- 7c-cms.ts
- C7ArticleView.astro
- emdash
- package.json
- ref_node_fs
- en/[slug].astro
- 7c-submissions.ts
- @tujuhcahaya/radio-player
- google-news-url-decoder
- check-resources.mjs
- C7IsometricStack.astro
- ingest-feeds.mjs
- remediate-static-pages.mjs
- publish_remote.py
- run-batch-1900.mjs
- seed.json
- C7ResizableNavbar.astro
- run-batch-1800.mjs
- ref_node_crypto
- C7LiveStudio.tsx
- test-sse.mjs
- dependencies
- markAsSeen
- ref_node_sqlite
- find-inner-links.mjs
- C7ResizableNavbarElement
- update-byline-bios.mjs
- run-batch-20261105-0800.mjs
- pnpm-workspace.yaml
- inspect-media-urls.mjs
- scripts
- tsconfig.json
- apply-pages-payload.mjs
- setup-menu.mjs
- audit-db.mjs
- 7c-dispatch-smart-fill.ts
- test-queries.mjs
- middleware.ts
- run-batch-1930.mjs
- run-batch-0130.mjs
- remediate-inner-links.mjs
- ref_node_path
- C7Block.astro
- test-editorial-guard.mjs
- run-batch-20261105-0930.mjs
- C7PortableText.astro
- emdash-env.d.ts
- run-batch-2000.mjs
- 7c-editorial-guard.ts
- validate7cEditorial
- run-batch-20261104-1600.mjs
- run-batch-hourly-2200.mjs
- run-batch-20261104-1700.mjs
- run-batch-20261105-0830.mjs
- run-batch-20261105-0700.mjs
- emdash
- run-batch-20261104-2200.mjs
- run-batch-20261104-2100.mjs
- run-batch-20261105-0630.mjs
- run-batch-20261105-0200.mjs
- run-batch-20261107-1100.mjs
- run-batch-20261105-2100.mjs
- run-batch-20261105-2000.mjs
- run-batch-20261105-1130.mjs
- auto-publish.mjs
- run-batch-20261105-2300.mjs
- run-batch-20261107-1500.mjs
- run-batch-20261106-0700.mjs
- run-batch-20261106-0500.mjs
- run-batch-20261105-0530.mjs
- run-batch-20261106-2300.mjs
- run-batch-20261107-0300.mjs
- run-batch-20261107-0500.mjs
- run-batch-20261107-0700.mjs
- run-batch-20261104-1800.mjs
- run-batch-20261107-1900.mjs
- run-batch-20261108-1100.mjs
- run-batch-20261105-1230.mjs
- run-batch-20261107-1300.mjs
- run-batch-20261105-1100.mjs
- run-batch-2030.mjs
- run-batch-20261105-1900.mjs
- run-batch-20261107-2100.mjs
- run-batch-20261107-2300.mjs
- run-curation-batch.mjs
- project.yml
- run-batch-20261105-1300.mjs
- test-decode.mjs
- run-batch-20261105-0400.mjs
- run-batch-20261108-0100.mjs
- run-batch-20261107-0100.mjs
- run-batch-hourly-1300.mjs
- run-batch-20261108-0500.mjs
- run-batch-20261107-0900.mjs
- run-batch-20261107-1700.mjs
- run-batch-20261108-1300.mjs
- run-batch-20261105-1600.mjs
- run-batch-20261106-0100.mjs
- run-batch-20261105-0900.mjs
- run-batch-20261106-0400.mjs
- run-batch-hourly-0600.mjs
- run-batch-20261106-1300.mjs
- run-batch-20261108-1700.mjs
- run-batch-hourly-0700.mjs
- run-batch-20261108-2100.mjs
- run-batch-hourly-0500.mjs
- run-batch-hourly-2000.mjs
- test-publish-jateng.mjs
- run-batch-20261106-0200.mjs
- run-batch-20261106-0800.mjs
- run-batch-hourly-0800.mjs
- run-batch-20261108-1500.mjs
- run-batch-hourly-1000.mjs
- run-batch-2230.mjs
- run-batch-hourly-1500.mjs
- run-batch-hourly-1600.mjs
- run-batch-hourly-1800.mjs
- run-batch-hourly-1700.mjs
- run-batch-hourly-1900.mjs
- test-live-publish.mjs
- test-publish-paud-jateng.mjs

## God Nodes (most connected - your core abstractions)
1. `validate7cEditorial()` - 246 edges
2. `autoPublishPost()` - 245 edges
3. `markAsSeen()` - 61 edges
4. `use7cTranslation()` - 45 edges
5. `emdash` - 31 edges
6. `Locale` - 30 edges
7. `build7cDispatchPreview()` - 29 edges
8. `format7cCompactDate()` - 22 edges
9. `DEFAULT_LOCALE` - 20 edges
10. `C7CommandPaletteElement` - 19 edges

## Surprising Connections (you probably didn't know these)
- `runBatch()` --calls--> `validate7cEditorial()`  [EXTRACTED]
  scripts/run-batch-20261108-2100.mjs → src/lib/7c-editorial-guard.ts
- `main()` --calls--> `validate7cEditorial()`  [EXTRACTED]
  scripts/run-batch-20261105-0400.mjs → src/lib/7c-editorial-guard.ts
- `runBatch()` --calls--> `validate7cEditorial()`  [EXTRACTED]
  scripts/run-batch-20261108-0100.mjs → src/lib/7c-editorial-guard.ts
- `runBatch()` --calls--> `validate7cEditorial()`  [EXTRACTED]
  scripts/run-batch-20261107-0100.mjs → src/lib/7c-editorial-guard.ts
- `main()` --calls--> `validate7cEditorial()`  [EXTRACTED]
  scripts/run-batch-hourly-1300.mjs → src/lib/7c-editorial-guard.ts

## Import Cycles
- None detected.

## Communities (139 total, 86 thin omitted)

### Community 0 - "validate-coverage-ledger.cjs"
Cohesion: 0.06
Nodes (65): ATTEMPT_FIELDS, ATTEMPT_STATUSES, canonicalCoverageId(), collectUnitErrors(), createErrorList(), encodeCanonicalRef(), escapeUnsafeDiagnosticCharacters(), fs (+57 more)

### Community 1 - "C7CommandPaletteRenderer.ts"
Cohesion: 0.06
Nodes (47): C7CommandPaletteElement, buildDefaultActions(), C7CommandPalettePreviewController, actionIcon(), C7SearchRenderModel, escapeHtml(), historyFallbackIcon(), pageIcon() (+39 more)

### Community 2 - "validate-findings.cjs"
Cohesion: 0.05
Nodes (55): canonicalKey(), append(), encode(), codePointLength(), collect(), collectDataLimitErrors(), collectFindingSemanticErrors(), collectSchemaErrors() (+47 more)

### Community 4 - "7c-feeds.ts"
Cohesion: 0.13
Nodes (23): astro, indexXml, pagesXml, postsXml, rss, taxXml, escapeXml(), generate7cGoogleNewsSitemap() (+15 more)

### Community 5 - "autoPublishPost"
Cohesion: 0.31
Nodes (7): autoPublishPost(), generateSlug(), syncPostTaxonomies(), articles, main(), articles, main()

### Community 6 - "check-taxonomies.mjs"
Cohesion: 0.40
Nodes (4): contentTaxSamples, db, taxDefs, taxSamples

### Community 7 - "7c-seo.ts"
Cohesion: 0.04
Nodes (46): defaultFaqsEn, defaultFaqsId, FaqItem, jsonLd, Props, breadcrumbItems, breadcrumbsJsonLd, filterPillars (+38 more)

### Community 8 - "types.ts"
Cohesion: 0.10
Nodes (20): A11yDict, AuthorDict, C7TranslationSchema, EditorialDict, ErrorsDict, FooterDict, IsometricDict, IsometricSectionDict (+12 more)

### Community 9 - "7c-dispatch-drawer.ts"
Cohesion: 0.20
Nodes (24): CommonDict, DispatchDict, C7_READ_ARTICLES_STORAGE_KEY, closeDrawer(), closeDrawerImmediate(), getDrawerCopy(), getReadSlugs(), hydrateAllBullets() (+16 more)

### Community 10 - "i18n/utils.ts"
Cohesion: 0.06
Nodes (45): Props, { t }, Props, { t }, Props, { t }, Props, { t } (+37 more)

### Community 11 - "7c-cms.ts"
Cohesion: 0.16
Nodes (19): C7_AUTHORS, C7_BYLINE_ID_MAP, calc7cReadingTime(), format7cDate(), C7_DEFAULT_FEATURED_IMAGE, resolve7cFeaturedImage(), get7cEntryBySlug(), get7cPostsByAuthor() (+11 more)

### Community 12 - "C7ArticleView.astro"
Cohesion: 0.08
Nodes (16): categoryUrl, cleanSlug, dateFormatted, postUrl, Props, normalizedPillar, Props, authorProfile (+8 more)

### Community 13 - "emdash"
Cohesion: 0.23
Nodes (7): __dirname, c7EditorialGuard(), createPlugin(), currentFilePath, C7_NOTIFICATIONS_SETTINGS_SCHEMA, c7Notifications(), currentFilePath

### Community 14 - "package.json"
Cohesion: 0.10
Nodes (22): allowScripts, esbuild@0.28.2, devDependencies, @astrojs/check@^0.9.10, clsx@^2.1.1, lucide-react@^1.48.0, tailwind-merge@^3.7.0, tailwindcss@^4.3.3 (+14 more)

### Community 15 - "ref_node_fs"
Cohesion: 0.07
Nodes (18): articles, main(), articles, main(), articles, main(), articles, main() (+10 more)

### Community 17 - "en/[slug].astro"
Cohesion: 0.10
Nodes (21): testCases, get7cLocaleFromUrl(), get7cSiteIdentity(), C7_CANONICAL_ORIGIN, CATEGORY_MAP, LegacyRedirectResult, resolve7cLegacyUrl(), archiveUrl (+13 more)

### Community 18 - "7c-submissions.ts"
Cohesion: 0.19
Nodes (15): runTests(), C7NotificationResult, C7NotificationSettings, C7SubmissionPayload, escapeHtml(), get7cNotificationSettings(), send7cSubmissionNotification(), C7SavedSubmission (+7 more)

### Community 19 - "@tujuhcahaya/radio-player"
Cohesion: 0.40
Nodes (3): @tujuhcahaya/radio-player@file:../plugins/tujuhcahaya-radio-player, @tujuhcahaya/radio-player, prerender

### Community 20 - "google-news-url-decoder"
Cohesion: 0.40
Nodes (3): google-news-url-decoder@^1.2.2, google-news-url-decoder, decoder

### Community 21 - "check-resources.mjs"
Cohesion: 0.50
Nodes (3): iframes, links, scripts

### Community 22 - "C7IsometricStack.astro"
Cohesion: 0.12
Nodes (14): initCakeWidget(), activate(), handleClick(), handleKeydown(), renderCard(), selectLayer(), Props, rubriks (+6 more)

### Community 23 - "ingest-feeds.mjs"
Cohesion: 0.21
Nodes (16): CANDIDATES_FILE, cleanHtmlText(), ensureInbox(), extractImageUrl(), fetchFeed(), INBOX_DIR, ingestAllFeeds(), loadFeedSources() (+8 more)

### Community 24 - "remediate-static-pages.mjs"
Cohesion: 0.13
Nodes (17): block(), db, generateId(), insertRevision, multiSpanBlock(), savePage(), upsertPage, aboutEnBlocks (+9 more)

### Community 25 - "publish_remote.py"
Cohesion: 0.09
Nodes (9): resolve_image(), generate_id(), generate_slug(), parse_inline_markdown(), parse_inline_spans(), prose_to_portable_text(), publish_payload_to_remote(), extract_og_image() (+1 more)

### Community 27 - "seed.json"
Cohesion: 0.12
Nodes (16): collections, content, pages, posts, menus, meta, author, description (+8 more)

### Community 28 - "C7ResizableNavbar.astro"
Cohesion: 0.11
Nodes (13): defaultNavItems, enPath, idPath, NavAction, NavItem, pillars, Props, { t } (+5 more)

### Community 30 - "ref_node_crypto"
Cohesion: 0.22
Nodes (9): mysql2@^3.24.4, mysql2, generateId(), main(), generateId(), main(), stripHtml(), generateId() (+1 more)

### Community 31 - "C7LiveStudio.tsx"
Cohesion: 0.19
Nodes (14): react@19.2.4, react, C7LiveHero(), C7LiveHeroProps, C7LiveInteractiveDeck(), C7LiveInteractiveDeckProps, formatRelativeTime(), InteractiveDeckTab (+6 more)

### Community 33 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, astro@^7.3.2, @astrojs/node@^11.1.5, @astrojs/react@^6.0.5, emdash@^1.4.0, react-dom@19.2.4, @tujuhcahaya/live-chat@file:../plugins/tujuhcahaya-live-chat, @astrojs/node (+3 more)

### Community 34 - "markAsSeen"
Cohesion: 0.14
Nodes (13): markAsSeen(), article, publishArticle(), articles, main(), articles, runBatch(), articles (+5 more)

### Community 35 - "ref_node_sqlite"
Cohesion: 0.12
Nodes (11): cols, db, tables, tagTables, db, db, del, remaining (+3 more)

### Community 36 - "find-inner-links.mjs"
Cohesion: 0.33
Nodes (5): args, db, dbPath, params, rows

### Community 38 - "update-byline-bios.mjs"
Cohesion: 0.40
Nodes (4): bios, db, rows, updateStmt

### Community 40 - "pnpm-workspace.yaml"
Cohesion: 0.25
Nodes (7): allowBuilds, esbuild, sharp, workerd, blockExoticSubdeps, minimumReleaseAge, minimumReleaseAgeExclude

### Community 41 - "inspect-media-urls.mjs"
Cohesion: 0.25
Nodes (7): allImages, bodyUploadsCount, countWithImages, db, domainCounts, sampleImages, sampleWp

### Community 42 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, preview, start, typecheck

### Community 43 - "tsconfig.json"
Cohesion: 0.33
Nodes (5): astro/tsconfigs/base, compilerOptions, types, extends, include

### Community 44 - "apply-pages-payload.mjs"
Cohesion: 0.33
Nodes (4): db, insertRevision, payload, upsertPage

### Community 45 - "setup-menu.mjs"
Cohesion: 0.40
Nodes (4): db, insertStmt, menu, menuItems

### Community 47 - "audit-db.mjs"
Cohesion: 0.83
Nodes (3): auditMariaDB(), auditSQLite(), run()

### Community 48 - "7c-dispatch-smart-fill.ts"
Cohesion: 1.00
Nodes (3): initDispatchSmartFill(), initHeroMobileTabs(), smartFillDispatch()

### Community 53 - "remediate-inner-links.mjs"
Cohesion: 0.29
Nodes (7): parseInlineSpans(), parseTokensToSpans(), traverse(), proseToPortableText(), db, remediateAll(), REMEDIATIONS

### Community 54 - "ref_node_path"
Cohesion: 0.07
Nodes (18): articles, main(), articles, main(), articles, main(), articles, main() (+10 more)

### Community 55 - "C7Block.astro"
Cohesion: 0.22
Nodes (4): alignClass, Props, props, TextAlignedNode

### Community 56 - "test-editorial-guard.mjs"
Cohesion: 0.40
Nodes (4): authResult, faqResult, ketikaResult, slopResult

### Community 58 - "C7PortableText.astro"
Cohesion: 0.15
Nodes (10): customComponents, Props, pillarColorMap, Props, formattedScore, Props, { t }, Props (+2 more)

### Community 59 - "emdash-env.d.ts"
Cohesion: 0.33
Nodes (5): emdash, EmDashCollections, Page, Post, Submission

### Community 61 - "7c-editorial-guard.ts"
Cohesion: 0.06
Nodes (22): articles, main(), articles, main(), articles, main(), articles, main() (+14 more)

### Community 62 - "validate7cEditorial"
Cohesion: 0.38
Nodes (5): articles, main(), articles, main(), validate7cEditorial()

### Community 68 - "emdash"
Cohesion: 0.09
Nodes (42): emdash, resolve7cAuthor(), format7cCompactDate(), build7cDispatchPreview(), C7_READ_ARTICLES_STORAGE_KEY, C7ArticleSource, C7DispatchPreviewItem, C7PortableTextBlock (+34 more)

### Community 77 - "auto-publish.mjs"
Cohesion: 0.07
Nodes (18): generateId(), resolveAuthorByline(), articles, main(), articles, main(), articles, main() (+10 more)

### Community 85 - "run-batch-20261107-0500.mjs"
Cohesion: 0.27
Nodes (4): articles, runBatch(), articles, runBatch()

### Community 98 - "project.yml"
Cohesion: 0.08
Nodes (25): activation_command, activation_command_timeout, added_modes, agent_interface, default_modes, encoding, excluded_apis, excluded_tools (+17 more)

## Knowledge Gaps
- **1 isolated node(s):** `astro/tsconfigs/base`
  These have ≤1 connection - possible missing edges. (Counts symbols only; 584 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **86 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `emdash` connect `emdash` to `dependencies`, `live.config.ts`, `7c-seo.ts`, `7c-cms.ts`, `C7ArticleView.astro`, `emdash`, `package.json`, `sync-seed-db.mjs`, `en/[slug].astro`, `7c-submissions.ts`, `C7PortableText.astro`, `emdash-env.d.ts`, `C7ResizableNavbar.astro`?**
  _High betweenness centrality (0.270) - this node is a cross-community bridge._
- **What connects `astro/tsconfigs/base` to the rest of the system?**
  _1 weakly-connected nodes found - possible missing edges._
- **Should `validate-coverage-ledger.cjs` be split into smaller, more focused modules?**
  _Cohesion score 0.06416275430359937 - nodes in this community are weakly interconnected._
- **Why does `validate7cEditorial()` connect `validate7cEditorial` to `autoPublishPost`, `emdash`, `ref_node_fs`, `run-batch-1900.mjs`, `run-batch-1800.mjs`, `markAsSeen`, `run-batch-20261105-0800.mjs`, `run-batch-1930.mjs`, `run-batch-0130.mjs`, `remediate-inner-links.mjs`, `ref_node_path`, `test-editorial-guard.mjs`, `run-batch-20261105-0930.mjs`, `run-batch-2000.mjs`, `7c-editorial-guard.ts`, `run-batch-20261104-1600.mjs`, `run-batch-hourly-2200.mjs`, `run-batch-20261104-1700.mjs`, `run-batch-20261105-0830.mjs`, `run-batch-20261105-0700.mjs`, `run-batch-20261104-2200.mjs`, `run-batch-20261104-2100.mjs`, `run-batch-20261105-0630.mjs`, `run-batch-20261105-0200.mjs`, `run-batch-20261107-1100.mjs`, `run-batch-20261105-2100.mjs`, `run-batch-20261105-2000.mjs`, `run-batch-20261105-1130.mjs`, `auto-publish.mjs`, `run-batch-20261105-2300.mjs`, `run-batch-20261107-1500.mjs`, `run-batch-20261106-0700.mjs`, `run-batch-20261106-0500.mjs`, `run-batch-20261105-0530.mjs`, `run-batch-20261106-2300.mjs`, `run-batch-20261107-0300.mjs`, `run-batch-20261107-0500.mjs`, `run-batch-20261107-0700.mjs`, `run-batch-20261104-1800.mjs`, `run-batch-20261107-1900.mjs`, `run-batch-20261108-1100.mjs`, `run-batch-20261105-1230.mjs`, `run-batch-20261107-1300.mjs`, `run-batch-20261105-1100.mjs`, `run-batch-2030.mjs`, `run-batch-20261105-1900.mjs`, `run-batch-20261107-2100.mjs`, `run-batch-20261107-2300.mjs`, `run-curation-batch.mjs`, `run-batch-20261105-1300.mjs`, `run-batch-20261105-0400.mjs`, `run-batch-20261108-0100.mjs`, `run-batch-20261107-0100.mjs`, `run-batch-hourly-1300.mjs`, `run-batch-20261108-0500.mjs`, `run-batch-20261107-0900.mjs`, `run-batch-20261107-1700.mjs`, `run-batch-20261108-1300.mjs`, `run-batch-20261105-1600.mjs`, `run-batch-20261106-0100.mjs`, `run-batch-20261105-0900.mjs`, `run-batch-20261106-0400.mjs`, `run-batch-hourly-0600.mjs`, `run-batch-20261106-1300.mjs`, `run-batch-20261108-1700.mjs`, `run-batch-hourly-0700.mjs`, `run-batch-20261108-2100.mjs`, `run-batch-hourly-0500.mjs`, `run-batch-hourly-2000.mjs`, `test-publish-jateng.mjs`, `run-batch-20261106-0200.mjs`, `run-batch-20261106-0800.mjs`, `run-batch-hourly-0800.mjs`, `run-batch-20261108-1500.mjs`, `run-batch-hourly-1000.mjs`, `run-batch-2230.mjs`, `run-batch-hourly-1500.mjs`, `run-batch-hourly-1600.mjs`, `run-batch-hourly-1800.mjs`, `run-batch-hourly-1700.mjs`, `run-batch-hourly-1900.mjs`, `test-live-publish.mjs`, `test-publish-paud-jateng.mjs`?**
  _High betweenness centrality (0.132) - this node is a cross-community bridge._
- **Should `C7CommandPaletteRenderer.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05669050051072523 - nodes in this community are weakly interconnected._
- **Why does `@tujuhcahaya/radio-player` connect `@tujuhcahaya/radio-player` to `C7CommandPaletteRenderer.ts`, `7c-seo.ts`, `emdash`, `package.json`, `C7LiveStudio.tsx`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Should `validate-findings.cjs` be split into smaller, more focused modules?**
  _Cohesion score 0.05311871227364185 - nodes in this community are weakly interconnected._