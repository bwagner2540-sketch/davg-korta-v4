# DAVG V4 — Build state

## Current ownership — 3 October 2026
This section is the current record. The logs below it are history from earlier passes. Do not treat those logs as the live source map.

- Repository: `bwagner2540-sketch/davg-korta-v4`. Branch: `cursor/git-hub-source-13db`. Repair commits still in ancestry: `080a0b3` (git hubs and layout tokens) and `e35d1bd` (local preview note).
- Source index: `docs/v4-build/00-START-HERE.md`. Contract: `11-SYNC-CONTRACT.md`.
- Public copy: `docs/v4-build/hubs/DAVG-V4-Hub-*.md`, loaded only by `src/lib/git-hubs.mjs`.
- Frame: `src/components/ServicePageShell.astro`. Renderer: `src/components/services/hubs/HubPage.astro`. Section presentation: `src/lib/hub-composition.mjs` (surfaces, studies, catalog photographs, product rows). Routes: `/solutions/<slug>/` and the `/systems/<slug>/` alias.
- Tokens: `src/styles/global.css`. Fonts implemented: Schibsted Grotesk 400–900, Instrument Sans, JetBrains Mono. Live gutter implemented: `--page-gutter` 1.5rem / 3rem / 4rem. `--spacing-page-inline` aliases `--page-gutter`. Section rhythm is role-based. `--spacing-section` is one step on the scale, not the padding of every hub section.
- Historical packs: `archive/davg-history/`. Not implementation authority. See that README for original paths.
- Deployment configuration: `wrangler.toml` name `davg-korta-v4`, assets `./dist`, build command `node scripts/assert-production.mjs`. Production domain `davg.ai` is the existing coming-soon target. This file does not claim a production deploy.
- Publication: `src/config/publication.json` `approvedPages` is empty. `npm run build` is expected to stop. Sandbox output is `dist-sandbox/` via `npm run build:sandbox`.

### Status of decisions
| Topic | Status |
|---|---|
| Git hubs as public copy, sticky Forest 25/75 shell, `/solutions/` routes | Implemented. Verified on the local server before this cleanup. |
| Layout tokens (H1 64px at 1440 and 40px at 390, gutters 64px and 24px) | Implemented in `src/styles/global.css`. The spacing tokens are a scale. Identical section padding is not the layout. |
| Collections, MDX, and JSON as the public copy (`10`) | Proposed. Do not migrate. |
| Shading briefs 08 and 09 chapter maps | Historical. Not applied over the git hub. |
| GBB additions | Pending. Not applied by this cleanup. Wording already in a git hub stays there. |
| Surface roles in `13` beyond the Forest rail | Implemented on the eight hubs. Paper for the opening answer and ordinary reading, Charcoal for system layers, Stone for investment, Ink for hero and inquiry. The signature study is the Forest-to-Ink passage. |
| Editorial frames (opening bleed, answer measure, system ledger, signature study, product scale, inquiry close) | Implemented in `hub-composition.mjs` and `HubPage.astro`. See the task log for what was verified. |
| Public phone, cleared project proof, inquiry destination | Pending in `05-BUSINESS-FACTS.md`. |
| Production release | Not authorized. `approvedPages` is empty. |
| Workers branch preview for `cursor/git-hub-source-13db` | See the latest task log. A push is not a verified preview. |

The September and early October logs below recorded older owners (JSON drafts, document 09 as the shading map, IBM Plex as an open font question, branch `main`). Those statements are superseded by this section.

## Task log — 3 October 2026 editorial frames
- Date/task: Replace the repeated hub-section padding with a frame per section role. Copy stays in the git hubs. The uniform loop from `080a0b3` is not the layout.
- Decision: implemented. `sectionRole()` now returns `frame`. `HubPage.astro` renders `data-section-frame` and `hub-frame-*`. Opening padding is 0 and the hero photograph bleeds to the right edge of the field. Answer, reading, and quiet bands use the text and micro steps. System and ledger tables use a mono header, hairline rows, and a horizontal scroller. The signature study is a full-width Forest-to-Ink split plate. Product photographs sit on the field. Inquiry is a two-column close with more air than the chapters.
- Specification: `02-SERVICE-LAYOUT.md` presentation table. `01-DESIGN-SYSTEM.md` spacing paragraph. `00-START-HERE.md` names the scale instead of one section padding.
- Verification, this environment: `npm test` 18 passed. `npm run build:sandbox` wrote 35 pages. `npm run verify` passed: 35 HTML routes, 2725 local links, 90 responsive images, distinct frames, hero bleed, split signature study, git H1, IBM Plex absent, Schibsted 400–900. `npm run build` exited 1 with `PUBLIC BUILD BLOCKED`. Full-page Chrome comparisons are in the task artifact set. Production `davg.ai` was not deployed.
- Preview: `https://cursor-git-hub-source-13db-davg-korta-v4.brandon-763.workers.dev/` served `davg-revision` `128e4d774ef919c0d2d84c07dbeda126b0292544` on `/`, `/solutions/home-intelligence/`, and `/systems/home-intelligence/`. The deployed opening photograph measured 659×702 and met the right edge of the field. Opening padding was 0, the answer band 28.8px, the inquiry close 81px. The production Worker route stayed 404.
- Still different from the September plates: opening captions stay on the photograph; Halo photographs knock out a white studio ground and their screens go dark; system tables are the git multi-column ledgers, not a two-column specification beside a cutaway; comparison photographs are the catalog rooms, not the reference’s conventional/architectural pair.

## Task log — 3 October 2026 hub presentation
- Date/task: Restore the hub presentation layer on top of the git-hub renderer. Copy stays in `docs/v4-build/hubs/DAVG-V4-Hub-*.md`. No return to `src/data/services/*.json` or `archive/davg-history/`.
- Decision: implemented. `src/lib/hub-composition.mjs` maps each of the fifteen sections by purpose. `HubPage.astro` reads that map.
- Specification: `02-SERVICE-LAYOUT.md` presentation section. `00-START-HERE.md` names the composition module. `13-SURFACE-COLOR-SYSTEM.md` remains the surface source.
- Per hub, section purpose to composition:
  - Shared: 01 opening on Ink with the existing hero photograph; 02 answer on Paper; 03 moments on Paper with the catalog room photograph when that illustration is selected; 12 investment on Stone; 14 questions on Paper; 15 inquiry on Ink.
  - Home Intelligence: 04 system layers on Charcoal with the command-path study; 05 signature study, word CONTROL, Halo photographs; 07 interfaces with the placed product photographs.
  - Architectural Lighting: 05 signature study, word LIGHTING, two room photographs; 06 keypad comparison with the interface photograph and placed keypads; 08 compatibility study.
  - Motorized Shading: 05 signature study, word SHADES, the existing recessed/fascia/exposed specimen; 06 fabric study with the sheer and closed specimen photographs. Body slots marked not-yet-substituted stay off the page. Hero slot 01 is unchanged.
  - Media & Audio: 04 connection diagram; 05 signature study, word MEDIA; 06 speaker product; 10 Control4 section with the interface photograph.
  - Private Cinemas: 04 rack photograph; 05 signature study, word CINEMA; 08 room-section study.
  - Security & Access: 04 recorder product; 05 signature study, word SECURITY; 06 camera photograph; 09 entry-sequence study.
  - Infrastructure & Privacy: 04 placed equipment photographs; 05 signature study, word NETWORK; 06 coverage study.
  - Outdoor Entertainment: 05 signature study, word OUTDOOR; 06 speaker photograph and product; 08 pathway study.
- Parser: visitor HTML no longer prints Publish hold, Project module, Editorial use, Builder credit, Verified project facts, or `Use \`filename\`` instruction lines. The shading Interaction note that names IBM Plex stays in the markdown file and is not rendered. IBM Plex is not loaded.
- Verification, this environment: `npm test` 18 passed. `npm run build:sandbox` wrote 35 pages. `npm run verify` passed: 35 HTML routes, 2725 local links, 90 responsive images, one git H1 inside the sticky shell, spatial word and signature study on each hub, IBM Plex absent from CSS, Schibsted range 400–900. `npm run build` exited 1 with `PUBLIC BUILD BLOCKED`. Chrome on the dev server: all eight `/solutions/` hubs at 1440 have Paper `rgb(237, 233, 224)` on section 02, Charcoal `rgb(15, 19, 16)` on section 04, Stone `rgb(226, 221, 206)` on section 12, Ink on section 15, Forest rail `rgb(24, 59, 49)`, columns 360/1080, no document overflow. Home Intelligence H1 is Schibsted Grotesk, 64px, weight 400, tracking -2.24px, line-height 62.72px. At 390, Home Intelligence and Motorized Shading H1 is 40px, the desktop rail is `display: none`, and the disclosure menu is visible.
- Preview/production: production `davg.ai` was not deployed. `https://davg-korta-v4.brandon-763.workers.dev/solutions/home-intelligence/` stayed 404. The branch preview `https://cursor-git-hub-source-13db-davg-korta-v4.brandon-763.workers.dev/` served `davg-revision` `a5d6a0f5e9e36614811a11a45b1e38a9b9645794` on `/`, all eight `/solutions/` hubs, and `/systems/home-intelligence/`, with the git H1, the hub spatial word, and Paper sections. No IBM Plex and no Publish hold text. The preview is noindex.

## Earlier record — 29 September 2026 source sync
Updated 29 September 2026 during the one-time source sync. This replaces the remote-audit unknowns with the local project that was actually open. The ownership notes in that pass are historical.

## Shared checkpoint
- Repository: `bwagner2540-sketch/davg-korta-v4` (`origin` `https://github.com/bwagner2540-sketch/davg-korta-v4.git`). Matches the expected remote. No branch switch or reset.
- Branch: `main`, tracking `origin/main`.
- Head inspected before this import commit: `462c90a7b49719efacd607fc22390d61b15a6953` (10 September 2026). The audit used this same committed snapshot and did not see newer uncommitted Cursor work.
- Local path: `/Users/brandon-davg/Desktop/DAVG Korta V4`.
- Sync-kit import: applied 29 September 2026 from `DAVG-V4-Sync-Update-2026-09-29.zip`. Payload text copied into `docs/v4-build/`. Existing reference screenshots, PDF, spreadsheet, manifests and starter README kept.
- Active specification after import: `docs/v4-build/`. Shading authority is `09-SHADING-STORY-SYSTEMS-AND-PROJECT-PATHS.md`, which supersedes `08`'s chapter map. `08` supersedes the original shading hub's rendered order where the two still agree. Other hubs use their own file in `hubs/` plus `content-additions/gbb/`. `v4-gpt-original-design/` stays historical.
- Import commit: `b71bf120fc1bc3573a57333c051cc15b3c345c72` on `main` (`docs: import the 29 September V4 source sync`). This note was added after that commit, so the follow-up SHA is the handoff head.
- Cloudflare project/environment/deployment: not deployed by this task. `wrangler.toml` still only names `davg-korta-v4`, compatibility date `2026-09-10`, and `assets.directory = "./dist"`. No production deploy was run.

## Adopted architecture
Decision: **adopted for the current build** — static Astro file routes, shared components, CSS-first Tailwind. Content Collections + MDX in `10-ASTRO-ARCHITECTURE-AND-PREBUILD-AUDIT.md` stay **proposed**. This sync did not migrate hubs.

| Piece | Adopted now | Difference from the audit snapshot or the proposed target |
|---|---|---|
| Output | `output: 'static'`, `site: 'https://davg.ai'`, `@astrojs/cloudflare` | Matches the audit. No runtime POST routes. |
| Versions | Astro 7.3.2, Tailwind 4.3.3, `@tailwindcss/vite` 4.3.3, Cloudflare adapter 14.3.1, Node v24.18.0 | Lockfile matches the audit. Node meets `>=22.12.0`. |
| Routes | `src/pages/index.astro`, `src/pages/solutions/motorized-shades.astro` | No `src/content.config.ts`, no MDX, no `solutions/[slug].astro`. Other seven service URLs are linked and not built. |
| Shell | `src/components/ServicePageShell.astro` and `src/components/MediaPlaceholder.astro` | Present locally. The audit only saw the Dropbox starter. Working files were not replaced by `docs/v4-build/starter/`. |
| Rail | 25/75 frame. Rail background is Ink (`--color-surface-ink`), not Forest | `01` and `09` now ask for a Forest sticky rail. That visual change is not applied in this sync. |
| Tokens | `src/styles/global.css` `@theme` block, including pack aliases such as `--color-text-on-dark` | Local uncommitted token work kept. Starter `v4-tokens.css` remains a reference under `docs/`. |
| Fonts | Self-hosted Schibsted Grotesk (display), Instrument Sans (body/UI) and JetBrains Mono (technical metadata) from `global.css` | IBM Plex Mono is retired and not installed. Homepage no longer loads Google Fonts. Variable Schibsted covers 400–900, so a CSS weight of 300 renders at 400. |
| SEO | Shared `Layout.astro` accepts an optional `description` and emits it when passed. Homepage keeps its own description and LocalBusiness/FAQPage JSON-LD | No canonical, social image, sitemap, robots, or 404 source. Shading does not pass a description into the layout. |
| Shading page | Working specimen at `/solutions/motorized-shades/`. Section IDs exist. Fourteen shade photographs are placed. `shading-11-proof` stays a blank reservation | Chapter order is the earlier editorial sequence (daylight through inquiry), not the 11-chapter map in `09`. Photographs and structure were preserved on purpose. |
| Forms | Shading inquiry form posts nowhere (`action="#"`) and states that no destination is connected. Homepage uses mailto and visible phone/email | No Worker endpoint, Turnstile, or HubSpot mapping. |
| Checks | `package.json` scripts are `dev`, `build`, and `preview` only | No `astro check` script and no CI workflow. |

## Current work record
| Area | Decision / specification | Implementation | Verification / next action |
|---|---|---|---|
| Visual design | Adopted: `01-DESIGN-SYSTEM.md` (Forest called out as the sidebar primary on 29 Sep). `02-SERVICE-LAYOUT.md` | Partial. Tokens and 25/75 shell exist. Rail is Ink | Do not restyle the rail until a shading task explicitly applies `01`/`09` |
| Shading story | Adopted spec: `09` supersedes `08` chapter map. Page code not migrated in this sync | Partial. Local page is the pre-09 specimen with real media slots filled except proof | Next shading task may reconcile chapters to `09` without dropping the 14 photographs or the blank proof slot |
| GBB additions | Proposed refinement. `07-GBB-SECTION-MAP.md` and `content-additions/gbb/` | Pending. Not applied to page copy | Use when refining the current shading page; no new product pages |
| Content routing | Proposed in `10`: collections + MDX + `[slug]` | Pending. Standalone static routes remain the adopted path | Migrate shading first only in a later task, after this import |
| SEO | Proposed shared head/sitemap/robots in `10` | Partial. Homepage metadata and optional layout description only | Add one metadata owner before indexing |
| Forms / backend | Proposed Worker POST contract in `10` | Pending. Explicit non-sending form | Confirm phone, email, and destination before any success state |
| Security | Proposed headers and runtime controls in `10` | Not implemented in source. `.gitignore` excludes `.env` and `.env.*` | No security pass claimed |
| Contact and proof | `05-BUSINESS-FACTS.md`. Conflicting phones remain unresolved: fact file cites 720-327-7337 and 303-914-2700; homepage also shows 720.638.1603 and 720.327.7337, plus `info@davg.ai` | Homepage keeps the owner's current contact block. Proof slot stays empty | Confirm one public phone and cleared project proof before release |
| Checks / deployment | Local `npm run build` is the existing check | See task log | Not deployed |

## Left uncommitted on purpose
These files were already dirty local work. This sync did not overwrite them and did not include them in the source checkpoint:

- `src/pages/solutions/motorized-shades.astro`
- `src/components/ServicePageShell.astro`
- `src/components/MediaPlaceholder.astro`
- `src/styles/global.css`
- `src/layouts/Layout.astro`
- `src/pages/index.astro`
- `package.json` and `package-lock.json` (fontsource dependencies)
- `public/images/` shade photographs added for the shading page
- `v4-gpt-original-design/DAVG-Korta-Design-System-V4-CURRENT.md`
- `v4-gpt-original-design/DAVG-Korta-V4-IMPLEMENTATION-NOTES-2026-09-12.md`

A dev server was already listening on port 4321. This task did not start another one.

## Task log
- Date/task: 29 September 2026 — one-time source and status sync from `DAVG-V4-Sync-Update-2026-09-29.zip`.
- Decision changed: imported current briefs, GBB additions, audit `10`, sync contract `11`, and this state file. Collections/MDX remain proposed. Shading page code was not redesigned.
- Current specification path: `docs/v4-build/` after import. Authority notes above.
- Code paths: none edited. Cursor rule `.cursor/rules/davg-v4-sync.mdc` and `AGENTS.md` added.
- Checks and results: `npm run build` on 29 September 2026 passed. Static output, two pages: `/` and `/solutions/motorized-shades/`. No `astro check` script exists. Dev server on port 4321 was already running and was not restarted. The Cloudflare adapter logged that it enables an `IMAGES` binding and a `SESSION` KV binding during this static build; those bindings are not configured in `wrangler.toml`. No deploy.
- Remaining items: Forest rail vs current Ink rail; `09` chapter map vs the live shading sequence; IBM Plex Mono vs installed JetBrains Mono; seven unbuilt service routes; sitemap/robots/canonical; form destination and conflicting phone numbers; empty project-proof slot.
- Commit/branch: import commit `b71bf120fc1bc3573a57333c051cc15b3c345c72` on `main`. Unrelated local files stay uncommitted.
- Preview/production status: not deployed. Local preview may already be served by the existing process on port 4321.

## Task log — 2 October 2026
- Date/task: 2 October 2026 — Phase 1 only: restore DAVG typography and add layout-foundation tokens. No page redesign. No deploy. No Phase 2.
- Decision changed: active fonts are Schibsted Grotesk (display), Instrument Sans (body/UI), JetBrains Mono (technical metadata). IBM Plex Mono is retired.
- Current specification path: typography and foundation tokens in `docs/v4-build/01-DESIGN-SYSTEM.md`. `11-SYNC-CONTRACT.md` still names IBM Plex Mono in its technical-target sentence; that file was outside this task's documentation scope.
- Code paths: `src/styles/global.css`, `src/pages/index.astro` (Google Fonts links removed so the self-hosted stack is the one that loads), `package.json`, `package-lock.json`.
- Checks and results: `npm run build` passed. Static output remains two pages: `/` and `/solutions/motorized-shades/`. Home Intelligence and Architectural Lighting are not built on this branch. Browser check at 1440, 1728, and 390 confirmed the three self-hosted families render and IBM Plex Mono is not a loaded face. No hero, nav, or document-level horizontal overflow regression from this change. Not deployed.
- Remaining items: Phase 2 layout work (measure, gutters, spatial-word placement, service compositions). Schibsted has no weight below 400. The sync contract's IBM Plex sentence is still the older wording.
- Commit/branch: parent inspected before this commit was `d00f5e23cc8422a0dcaaba9f8cd323a0983f3659` on `main`. The working tree was clean, so no checkpoint commit was created. This file cannot store its own commit SHA.
- Preview/production status: not deployed.

Do not publish this internal record on the public website.

## Task log — 3 October 2026
- Date/task: Lock one service-page architecture. The eight hubs render `docs/v4-build/hubs/DAVG-V4-Hub-*.md` through `HubPage.astro` inside the sticky 25/75 `ServicePageShell`. Section 01 is inside the right column. `/solutions/<slug>/` is the git route. `/systems/<slug>/` renders the same page.
- Decision: adopted. Owner instruction over the 30 September bounded-middle frame and the rewritten `src/data/services/*.json` drafts. Those JSON files, `DAVG-ALL-EIGHT-SERVICE-PAGES/`, and `hub-production-kit/` are not public copy.
- Specification: `11-SYNC-CONTRACT.md`, `02-SERVICE-LAYOUT.md`, `hubs/README.md`, `.cursor/rules/git-hubs-source.mdc`.
- Implementation: `src/lib/git-hubs.mjs`, `src/components/services/hubs/HubPage.astro`, `src/pages/solutions/[slug].astro`, `src/pages/systems/[slug].astro`. The 2 October layout lock is applied on the live pages: `.folio` and `--page-gutter` (1.5rem / 3rem / 4rem), `--spacing-section`, `--text-h1` / `--text-h2` / `--text-h3`, `--text-body`, `--text-body-lg`, and JetBrains Mono at `--text-mono`. Homepage no longer hardcodes 24/48/64 or clamp heading sizes. Hub headings and body use those same tokens. Shell spacing aliases (`--spacing-8`, `--spacing-12`, `--color-text-on-dark`) stay defined so the rail padding resolves.
- Verification: pass on the dev server, 3 October 2026. `npm test` 15 passed. `npm run build:sandbox` wrote 35 pages. `npm run verify` passed: git-hub copy inside the sticky 25/75 shell, JetBrains Mono registered, IBM Plex Mono absent. Chrome measured `/`, `/solutions/home-intelligence/`, and `/solutions/motorized-shades/` at 1440, 1000, 768, and 390. H1 is Schibsted Grotesk, weight 400, 64px / −2.24px at 1440, 45px / −1.575px at 1000, 40px / −1.4px at 390. Homepage folio gutters are 64px, 48px, 48px, and 24px at those widths. Hub section padding is the section token (86.4px at 1440, 48px at 390) with the same gutter. Rail is Forest `rgb(24, 59, 49)`, sticky, 356/1425 at 1440, hidden below 1024px. No document overflow. Not a production deploy. `davg.ai` stays on its current target.
- Cloudflare publishes the git commit on the connected branch. A Mac-only or Dropbox-only edit is not the site.

## Task log — 3 October 2026 source-map cleanup
- Date/task: One current source index, archive of superseded packs, and the normal task workflow. No hub-copy rewrite, no route migration, no framework upgrade, no visual redesign.
- Decision: documented and implemented. `00-START-HERE.md` is the source index. `archive/davg-history/` holds the moved packs and is marked historical. GBB and shading briefs 08/09 stay pending or historical and were not applied to pages. Collections/MDX stay proposed.
- Specification: `00-START-HERE.md`, `11-SYNC-CONTRACT.md`, `01-DESIGN-SYSTEM.md`, `02-SERVICE-LAYOUT.md`, `03`, `04`, `05`, `06`, `07`, `08`, `09`, `10`, `12`, `hubs/README.md`, `AGENTS.md`, `.cursor/rules/davg-v4-sync.mdc`, `.cursor/rules/git-hubs-source.mdc`, `.cursor/rules/live-preview.mdc`.
- Code paths: archive moves; `tests/git-hubs.test.mjs`; unmounted `HubStudies.astro` label face; `scripts/build.mjs` writes `dist/` only for a Workers CI branch other than `main` when the allowlist is empty; `SeoHead.astro` and the homepage emit `davg-revision` when `DAVG_REVISION` is set.
- Preserved repair commits: `080a0b3`, `e35d1bd`. Cleanup commits are later on `cursor/git-hub-source-13db`.
- Checks, this environment: `npm test` 16 passed. `npm run build` exited 1 with `PUBLIC BUILD BLOCKED: no pages are approved for release.` `npm run test:publication` passed. `npm run build:sandbox` wrote 35 pages. `npm run verify` passed: 35 HTML routes, 2725 local links, 16 responsive images, git-hub copy inside the sticky shell, IBM Plex absent from CSS, Schibsted range 400–900. All eight `/solutions/` and `/systems/` hubs match the git H1 and do not contain `davg-history`. A simulated `WORKERS_CI=1` build of this branch wrote `dist/` and `node scripts/assert-production.mjs` still exited with `DEPLOY BLOCKED: production approval is absent`.
- Visual: Chrome at 1440 and 390. Home and the Home Intelligence hub at 1440, and home at 390, matched the pre-cleanup screenshots byte for byte. The 390 hub screenshot differed only inside the photograph. Rail, type, and the mobile disclosure did not move.
- Preview/production: `davg.ai` still serves the coming-soon page and was not deployed. `https://davg-korta-v4.brandon-763.workers.dev/` is the Worker production host and was not deployed; `/solutions/home-intelligence/` there stayed 404. Pushes `9694301` and `a4515c9` failed Workers Builds. Commit `c08f0cb` succeeded. The stable preview is `https://cursor-git-hub-source-13db-davg-korta-v4.brandon-763.workers.dev/`. Its `davg-revision` meta was `c08f0cb950ca776d1c5595b318473f136842db8c` on `/` and all eight `/solutions/` hubs, with the git H1 and no archive copy. `/systems/outdoor-entertainment/` matched the same hub. The preview is noindex. `wrangler deploy` still runs `assert-production.mjs`. Automatic preview builds are the existing Workers Builds integration on this Worker; this branch is not the production branch.


## Task log — 3 October 2026 visual composition repair
- Starting branch/head: `cursor/git-hub-source-13db`, `acb270bed5a901236308c12d8afb0903ef25b6b6`; clean isolated checkout. No reset or source migration.
- Implemented: composition-specific section spacing; full-field photographic openings; primary comparison rows and optional secondary technical tables; process/pitfall/handoff layouts; individual FAQ disclosures; hidden empty project reservations; unique Home Intelligence study/product imagery; restored existing shading photographs; concise figure captions and removal of leaked production notes.
- Active copy remains the eight Git hub Markdown files, including their original 15-section source order. Fonts, logos, shared 25/75 frame, route aliases and production allowlist are unchanged.
- Checks so far: locked `npm ci`; `npm run check` reports zero errors; `npm test` passes 22 tests. Built-output and deployed-preview verification are recorded below when completed.
- Delivery target: existing automatic Cloudflare branch preview, not production. No production deploy is authorized by this repair.
- Remaining editorial decisions: final owner-selected signature compositions; genuine permission-cleared DAVG project proof; any additional imagery beyond existing selected assets. Schibsted's installed range remains 400–900; the repair does not introduce another font.
- Built-output verification: `npm run build:sandbox` passed (35 routes); `npm run verify` passed (2,693 local links, 88 responsive image instances across route aliases). Every original public comparison cell is retained in the composed output. Empty proof reservations are absent from chapter menus.
- Publication: repair commit `3c8210103bb5db53049e339cd280a56508951acf` was published on the existing branch through the connected GitHub account; terminal Git has no write credential. Home Intelligence's public `davg-revision` matches that commit. At the browser's 1363px viewport, its full-field opening, preserved rail, two-column system introduction, primary comparison rows and supplemental disclosures are present with no horizontal overflow or broken loaded images.
- Review-index follow-up: `/preview/` now uses same-host links instead of hardcoded localhost links and adds a 390px phone review. `npm run check` passed (zero errors; the existing homepage unused-import hint remains). Mobile inspection follows publication of this index.
- Live study review also caught editorial "avoid/do not promise/verify before public claims" instructions embedded inside otherwise public paragraphs. The loader now excludes those instruction sentences/clauses and image-production directions while retaining the public study explanation, representative-hardware wording and configuration-specific qualifiers. Source Markdown is preserved.
- The first phone-review iframe was rejected by the existing `X-Frame-Options: DENY` header. The index now reads this same host's built HTML into a 390px `srcdoc` review; the security header is preserved. It is a review tool, not a second page renderer or content source.
- Desktop study inspection caught a spatial-word layering defect: the photograph covered most of the word. SignatureFolio now puts the decorative word above the visual and below the reading copy, with a larger desktop scale and the existing mobile scale.
- Phone inspection: all eight hub openings resolve to the Git headlines and hide the desktop rail in the 390px review frame (375px content width with Chrome's scrollbar). Home Intelligence's mobile disclosure opens and its study chapter jump closes the menu. The built study paragraphs exclude the publication instructions. Opening an Infrastructure technical disclosure exposed a 608px-wide content grid inside the phone: SectionBody now uses shrinkable single-column tracks so paragraphs fit and only the supplemental table scrolls horizontally.
- Final checks: `npm run check` zero errors/zero warnings, one existing homepage unused-import hint; `npm test` 22 passed; sandbox build 35 routes; output verification 2,702 local links and 88 responsive image instances; `git diff --check` passed.
- Deployed visual verification: code commit `d8b529d0b176ca3e6409161df937296aa92ae54f`, all eight phone hubs match that revision with no horizontal page overflow and the desktop rail hidden after CSS loads. Infrastructure's open technical disclosure and paragraphs measure 327px; its table measures 608px inside a 327px horizontal scroller. Home Intelligence's mobile menu/chapter jump works; the representative-device explanation retains its qualifier without the publication instruction. The desktop spatial-word correction was checked at revision `10cfb9b253b0865ae93ae5a0b46c2f028f55a8da`: 231.71px display type, z-index 1, visibly spans the photograph and Forest copy field.
- These are shared visual repairs using the existing sources and selected assets. The attached September mockups remain exploratory references, not approved final specifications. No architecture migration, font substitution, logo change, history deletion, force-push or production release occurred.
