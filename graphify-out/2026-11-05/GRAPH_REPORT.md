# Graph Report - tujuhcahaya  (2026-11-05)

## Corpus Check
- 275 files · ~348,997 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 19 file(s) not represented in the graph (top: .css 16, (none) 2, .example 1)

## Summary
- 1276 nodes · 2889 edges · 115 communities (50 shown, 65 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `856ff40b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- validate-coverage-ledger.cjs
- C7CommandPaletteRenderer.ts
- validate-findings.cjs
- emdash
- 7c-feeds.ts
- validate7cEditorial
- 7c-editorial-guard.ts
- emdash-env.d.ts
- types.ts
- 7c-dispatch-drawer.ts
- i18n/utils.ts
- 7c-cms.ts
- C7ArticleView.astro
- emdash
- package.json
- autoPublishPost
- 7c-seo.ts
- ref_node_fs
- 7c-submissions.ts
- C7Block.astro
- google-news-url-decoder
- check-resources.mjs
- C7IsometricStack.astro
- run-batch-20261104-2100.mjs
- remediate-static-pages.mjs
- publish_remote.py
- auto-publish.mjs
- seed.json
- C7ResizableNavbar.astro
- C7PortableText.astro
- ref_node_crypto
- C7LiveStudio.tsx
- test-sse.mjs
- dependencies
- ingest-feeds.mjs
- ref_node_sqlite
- Base.astro
- C7ResizableNavbarElement
- update-byline-bios.mjs
- @tujuhcahaya/radio-player
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
- ref_node_path
- run-batch-1900.mjs
- check-taxonomies.mjs
- run-batch-1800.mjs
- run-batch-1830.mjs
- run-batch-2000.mjs
- run-batch-0130.mjs
- run-batch-20261105-0100.mjs
- run-batch-20261104-2000.mjs
- run-batch-20261105-0000.mjs
- run-batch-20261105-0530.mjs
- run-batch-20261105-0300.mjs
- run-batch-20261105-0400.mjs
- run-batch-20261105-0700.mjs
- run-batch-20261105-1030.mjs
- run-batch-20261105-0430.mjs
- run-batch-20261105-1130.mjs
- run-batch-20261105-1200.mjs
- run-batch-20261105-0830.mjs
- run-batch-20261105-2100.mjs
- run-batch-20261105-0630.mjs
- run-batch-20261105-0500.mjs
- run-batch-20261105-0730.mjs
- run-batch-20261105-1000.mjs
- run-batch-20261105-1300.mjs
- run-batch-20261105-1230.mjs
- run-batch-20261106-0700.mjs
- run-batch-20261105-1800.mjs
- run-batch-20261106-1300.mjs
- run-batch-20261105-2300.mjs
- run-batch-2130.mjs
- emdash
- run-batch-20261106-1200.mjs
- initCakeWidget
- run-batch-hourly-0700.mjs
- run-batch-hourly-0500.mjs
- run-batch-hourly-0600.mjs
- check-db.mjs
- run-batch-20261106-1000.mjs
- run-batch-20261106-1100.mjs
- C7IsometricGrid.astro
- run-batch-hourly-1300.mjs
- run-batch-2300.mjs
- run-batch-hourly-0000.mjs
- run-batch-hourly-1900.mjs
- live.config.ts
- run-batch-hourly-2200.mjs
- run-batch-20261106-0100.mjs
- test-decode.mjs
- run-batch-hourly-2000.mjs
- run-batch-hourly-1800.mjs
- run-batch-hourly-2300.mjs
- setupInteractions
- run-batch-30m.mjs
- run-batch-hourly-0900.mjs
- run-batch-hourly-1200.mjs
- run-batch-hourly-1700.mjs
- test-editorial-guard.mjs

## God Nodes (most connected - your core abstractions)
1. `autoPublishPost()` - 193 edges
2. `validate7cEditorial()` - 192 edges
3. `use7cTranslation()` - 45 edges
4. `emdash` - 31 edges
5. `Locale` - 30 edges
6. `build7cDispatchPreview()` - 29 edges
7. `format7cCompactDate()` - 22 edges
8. `DEFAULT_LOCALE` - 20 edges
9. `C7CommandPaletteElement` - 19 edges
10. `resolve7cAuthor()` - 18 edges

## Surprising Connections (you probably didn't know these)
- `runBatch()` --calls--> `validate7cEditorial()`  [EXTRACTED]
  scripts/run-batch-20261105-2200.mjs → src/lib/7c-editorial-guard.ts
- `main()` --calls--> `validate7cEditorial()`  [EXTRACTED]
  scripts/run-batch-hourly-2000.mjs → src/lib/7c-editorial-guard.ts
- `main()` --calls--> `validate7cEditorial()`  [EXTRACTED]
  scripts/run-batch-hourly-1800.mjs → src/lib/7c-editorial-guard.ts
- `main()` --calls--> `validate7cEditorial()`  [EXTRACTED]
  scripts/run-batch-hourly-2300.mjs → src/lib/7c-editorial-guard.ts
- `main()` --calls--> `validate7cEditorial()`  [EXTRACTED]
  scripts/run-batch-30m.mjs → src/lib/7c-editorial-guard.ts

## Import Cycles
- None detected.

## Communities (115 total, 65 thin omitted)

### Community 0 - "validate-coverage-ledger.cjs"
Cohesion: 0.06
Nodes (65): ATTEMPT_FIELDS, ATTEMPT_STATUSES, canonicalCoverageId(), collectUnitErrors(), createErrorList(), encodeCanonicalRef(), escapeUnsafeDiagnosticCharacters(), fs (+57 more)

### Community 1 - "C7CommandPaletteRenderer.ts"
Cohesion: 0.06
Nodes (48): C7CommandPaletteElement, buildDefaultActions(), C7CommandPalettePreviewController, actionIcon(), C7SearchRenderModel, escapeHtml(), historyFallbackIcon(), pageIcon() (+40 more)

### Community 2 - "validate-findings.cjs"
Cohesion: 0.06
Nodes (54): canonicalKey(), append(), encode(), codePointLength(), collect(), collectDataLimitErrors(), collectFindingSemanticErrors(), collectSchemaErrors() (+46 more)

### Community 3 - "emdash"
Cohesion: 0.09
Nodes (42): emdash, resolve7cAuthor(), format7cCompactDate(), build7cDispatchPreview(), C7_READ_ARTICLES_STORAGE_KEY, C7ArticleSource, C7DispatchPreviewItem, C7PortableTextBlock (+34 more)

### Community 4 - "7c-feeds.ts"
Cohesion: 0.13
Nodes (23): astro, indexXml, pagesXml, postsXml, rss, taxXml, escapeXml(), generate7cGoogleNewsSitemap() (+15 more)

### Community 5 - "validate7cEditorial"
Cohesion: 0.07
Nodes (25): articles, main(), articles, main(), articles, main(), articles, runBatch() (+17 more)

### Community 6 - "7c-editorial-guard.ts"
Cohesion: 0.09
Nodes (16): articles, main(), articles, main(), articles, main(), articles, main() (+8 more)

### Community 7 - "emdash-env.d.ts"
Cohesion: 0.33
Nodes (5): emdash, EmDashCollections, Page, Post, Submission

### Community 8 - "types.ts"
Cohesion: 0.10
Nodes (19): A11yDict, AuthorDict, C7TranslationSchema, EditorialDict, ErrorsDict, FooterDict, IsometricDict, IsometricSectionDict (+11 more)

### Community 9 - "7c-dispatch-drawer.ts"
Cohesion: 0.20
Nodes (24): CommonDict, DispatchDict, C7_READ_ARTICLES_STORAGE_KEY, closeDrawer(), closeDrawerImmediate(), getDrawerCopy(), getReadSlugs(), hydrateAllBullets() (+16 more)

### Community 10 - "i18n/utils.ts"
Cohesion: 0.06
Nodes (43): Props, { t }, Props, { t }, Props, { t }, Props, { t } (+35 more)

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
Cohesion: 0.12
Nodes (19): allowScripts, esbuild@0.28.2, devDependencies, @astrojs/check@^0.9.10, clsx@^2.1.1, lucide-react@^1.48.0, tailwind-merge@^3.7.0, tailwindcss@^4.3.3 (+11 more)

### Community 15 - "autoPublishPost"
Cohesion: 0.07
Nodes (25): autoPublishPost(), generateSlug(), syncPostTaxonomies(), articles, main(), articles, main(), articles (+17 more)

### Community 16 - "7c-seo.ts"
Cohesion: 0.04
Nodes (48): defaultFaqsEn, defaultFaqsId, FaqItem, jsonLd, Props, breadcrumbItems, breadcrumbsJsonLd, filterPillars (+40 more)

### Community 17 - "ref_node_fs"
Cohesion: 0.10
Nodes (12): articles, main(), articles, main(), articles, main(), articles, main() (+4 more)

### Community 18 - "7c-submissions.ts"
Cohesion: 0.19
Nodes (15): runTests(), C7NotificationResult, C7NotificationSettings, C7SubmissionPayload, escapeHtml(), get7cNotificationSettings(), send7cSubmissionNotification(), C7SavedSubmission (+7 more)

### Community 19 - "C7Block.astro"
Cohesion: 0.22
Nodes (4): alignClass, Props, props, TextAlignedNode

### Community 20 - "google-news-url-decoder"
Cohesion: 0.40
Nodes (3): google-news-url-decoder@^1.2.2, google-news-url-decoder, decoder

### Community 21 - "check-resources.mjs"
Cohesion: 0.50
Nodes (3): iframes, links, scripts

### Community 22 - "C7IsometricStack.astro"
Cohesion: 0.20
Nodes (6): Props, rubriks, serializedRubrikData, { t }, Props, Props

### Community 24 - "remediate-static-pages.mjs"
Cohesion: 0.13
Nodes (17): block(), db, generateId(), insertRevision, multiSpanBlock(), savePage(), upsertPage, aboutEnBlocks (+9 more)

### Community 25 - "publish_remote.py"
Cohesion: 0.09
Nodes (9): resolve_image(), generate_id(), generate_slug(), parse_inline_markdown(), parse_inline_spans(), prose_to_portable_text(), publish_payload_to_remote(), extract_og_image() (+1 more)

### Community 26 - "auto-publish.mjs"
Cohesion: 0.11
Nodes (14): generateId(), parseInlineSpans(), parseTokensToSpans(), traverse(), proseToPortableText(), resolveAuthorByline(), articles, main() (+6 more)

### Community 27 - "seed.json"
Cohesion: 0.12
Nodes (16): collections, content, pages, posts, menus, meta, author, description (+8 more)

### Community 28 - "C7ResizableNavbar.astro"
Cohesion: 0.11
Nodes (13): defaultNavItems, enPath, idPath, NavAction, NavItem, pillars, Props, { t } (+5 more)

### Community 29 - "C7PortableText.astro"
Cohesion: 0.15
Nodes (10): customComponents, Props, pillarColorMap, Props, formattedScore, Props, { t }, Props (+2 more)

### Community 30 - "ref_node_crypto"
Cohesion: 0.22
Nodes (9): mysql2@^3.24.4, mysql2, generateId(), main(), generateId(), main(), stripHtml(), generateId() (+1 more)

### Community 31 - "C7LiveStudio.tsx"
Cohesion: 0.19
Nodes (14): react@19.2.4, react, C7LiveHero(), C7LiveHeroProps, C7LiveInteractiveDeck(), C7LiveInteractiveDeckProps, formatRelativeTime(), InteractiveDeckTab (+6 more)

### Community 33 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, astro@^7.3.2, @astrojs/node@^11.1.5, @astrojs/react@^6.0.5, emdash@^1.4.0, react-dom@19.2.4, @tujuhcahaya/live-chat@file:../plugins/tujuhcahaya-live-chat, @astrojs/node (+3 more)

### Community 34 - "ingest-feeds.mjs"
Cohesion: 0.13
Nodes (18): urls, CANDIDATES_FILE, cleanHtmlText(), ensureInbox(), extractImageUrl(), fetchFeed(), INBOX_DIR, ingestAllFeeds() (+10 more)

### Community 35 - "ref_node_sqlite"
Cohesion: 0.18
Nodes (7): db, db, del, remaining, authors, db, sample

### Community 36 - "Base.astro"
Cohesion: 0.10
Nodes (20): testCases, get7cLocaleFromUrl(), get7cSiteIdentity(), CATEGORY_MAP, LegacyRedirectResult, resolve7cLegacyUrl(), archiveUrl, homeUrl (+12 more)

### Community 38 - "update-byline-bios.mjs"
Cohesion: 0.40
Nodes (4): bios, db, rows, updateStmt

### Community 39 - "@tujuhcahaya/radio-player"
Cohesion: 0.40
Nodes (3): @tujuhcahaya/radio-player@file:../plugins/tujuhcahaya-radio-player, @tujuhcahaya/radio-player, prerender

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

### Community 51 - "ref_node_path"
Cohesion: 0.10
Nodes (12): articles, main(), articles, main(), articles, main(), articles, main() (+4 more)

### Community 53 - "check-taxonomies.mjs"
Cohesion: 0.40
Nodes (4): contentTaxSamples, db, taxDefs, taxSamples

### Community 82 - "emdash"
Cohesion: 0.67
Nodes (3): emdash, label, seed

### Community 84 - "initCakeWidget"
Cohesion: 0.60
Nodes (6): initCakeWidget(), activate(), handleClick(), handleKeydown(), renderCard(), selectLayer()

### Community 88 - "check-db.mjs"
Cohesion: 0.40
Nodes (4): cols, db, tables, tagTables

## Knowledge Gaps
- **1 isolated node(s):** `astro/tsconfigs/base`
  These have ≤1 connection - possible missing edges. (Counts symbols only; 524 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **65 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `emdash` connect `emdash` to `live.config.ts`, `dependencies`, `sync-seed-db.mjs`, `Base.astro`, `emdash-env.d.ts`, `7c-cms.ts`, `C7ArticleView.astro`, `emdash`, `package.json`, `7c-seo.ts`, `7c-submissions.ts`, `C7ResizableNavbar.astro`, `C7PortableText.astro`?**
  _High betweenness centrality (0.256) - this node is a cross-community bridge._
- **What connects `astro/tsconfigs/base` to the rest of the system?**
  _1 weakly-connected nodes found - possible missing edges._
- **Should `validate-coverage-ledger.cjs` be split into smaller, more focused modules?**
  _Cohesion score 0.06416275430359937 - nodes in this community are weakly interconnected._
- **Why does `validate7cEditorial()` connect `validate7cEditorial` to `7c-editorial-guard.ts`, `emdash`, `autoPublishPost`, `ref_node_fs`, `run-batch-20261104-2100.mjs`, `auto-publish.mjs`, `ref_node_path`, `run-batch-1900.mjs`, `run-batch-1800.mjs`, `run-batch-1830.mjs`, `run-batch-2000.mjs`, `run-batch-0130.mjs`, `run-batch-20261105-0100.mjs`, `run-batch-20261104-2000.mjs`, `run-batch-20261105-0000.mjs`, `run-batch-20261105-0530.mjs`, `run-batch-20261105-0300.mjs`, `run-batch-20261105-0400.mjs`, `run-batch-20261105-0700.mjs`, `run-batch-20261105-1030.mjs`, `run-batch-20261105-0430.mjs`, `run-batch-20261105-1130.mjs`, `run-batch-20261105-1200.mjs`, `run-batch-20261105-0830.mjs`, `run-batch-20261105-2100.mjs`, `run-batch-20261105-0630.mjs`, `run-batch-20261105-0500.mjs`, `run-batch-20261105-0730.mjs`, `run-batch-20261105-1000.mjs`, `run-batch-20261105-1300.mjs`, `run-batch-20261105-1230.mjs`, `run-batch-20261106-0700.mjs`, `run-batch-20261105-1800.mjs`, `run-batch-20261106-1300.mjs`, `run-batch-20261105-2300.mjs`, `run-batch-2130.mjs`, `run-batch-20261106-1200.mjs`, `run-batch-hourly-0700.mjs`, `run-batch-hourly-0500.mjs`, `run-batch-hourly-0600.mjs`, `run-batch-20261106-1000.mjs`, `run-batch-20261106-1100.mjs`, `run-batch-hourly-1300.mjs`, `run-batch-2300.mjs`, `run-batch-hourly-0000.mjs`, `run-batch-hourly-1900.mjs`, `run-batch-hourly-2200.mjs`, `run-batch-20261106-0100.mjs`, `run-batch-hourly-2000.mjs`, `run-batch-hourly-1800.mjs`, `run-batch-hourly-2300.mjs`, `run-batch-30m.mjs`, `run-batch-hourly-0900.mjs`, `run-batch-hourly-1200.mjs`, `run-batch-hourly-1700.mjs`, `test-editorial-guard.mjs`?**
  _High betweenness centrality (0.105) - this node is a cross-community bridge._
- **Should `C7CommandPaletteRenderer.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.056179775280898875 - nodes in this community are weakly interconnected._
- **Why does `@tujuhcahaya/radio-player` connect `@tujuhcahaya/radio-player` to `C7CommandPaletteRenderer.ts`, `emdash`, `package.json`, `7c-seo.ts`, `C7LiveStudio.tsx`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **Should `validate-findings.cjs` be split into smaller, more focused modules?**
  _Cohesion score 0.06057692307692308 - nodes in this community are weakly interconnected._