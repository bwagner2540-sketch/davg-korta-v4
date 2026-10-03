# DAVG V4 — Build state
Updated 2 October 2026. The task log at the bottom is the current status. Earlier rows are corrected where they contradicted the code.

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
| Routes | `src/pages/index.astro`, dedicated `src/pages/solutions/motorized-shades.astro`, and `src/pages/solutions/[hub].astro` for the other seven hubs | No content collections or MDX. The seven hubs render from `docs/v4-build/hubs/`. Motorized shading stays the dedicated page. |
| Shell | 25/75 frame on the homepage and the seven generated hubs (`HubFrame`). Shading keeps its existing chapter sequence inside `Layout.astro` plus the page-index bar. | Starter `ServicePageShell` is still only a reference under `docs/v4-build/starter/`. |
| Rail | Forest sticky rail on the homepage and the seven generated hubs, carrying the page index. | Shading does not use that rail. Its chapters were left as locked on PR #6. |
| Tokens | Canonical names and values are `src/styles/global.css` `@theme`, plus stepped `--page-gutter` on `:root`. Pack aliases (`--color-text-on-dark`, muted, quiet, on-paper, spatial-dark / spatial-forest) resolve to those live values and do not change the rendered hex or alpha. | Implemented on `/` and `/solutions/motorized-shades/` for type, measure, the shared `.folio` gutter, and `py-section`. Starter `v4-tokens.css` is bannered as not the live theme. |
| Fonts | Self-hosted Schibsted Grotesk (display), Instrument Sans (body/UI) and JetBrains Mono (technical metadata) from `global.css` | IBM Plex Mono is explicitly retired in `01` and in the technical-target sentence of `11-SYNC-CONTRACT.md`. It is not installed. Variable faces start at weight 400, so a CSS weight of 300 renders at 400. Spatial-word rules still request 300. |
| SEO | Shared `Layout.astro` accepts an optional `description` and emits it when passed. Homepage keeps its own description and LocalBusiness/FAQPage JSON-LD | No canonical, social image, sitemap, robots, or 404 source. Shading does not pass a description into the layout. |
| Shading page | Working specimen at `/solutions/motorized-shades/`. Section IDs exist. Fourteen shade photographs are placed. `shading-11-proof` stays a blank reservation | Chapter order is the earlier editorial sequence (daylight through inquiry), not the 11-chapter map in `09`. Photographs and structure were preserved on purpose. |
| Forms | Shading inquiry form posts nowhere (`action="#"`) and states that no destination is connected. Homepage uses mailto and visible phone/email | No Worker endpoint, Turnstile, or HubSpot mapping. |
| Checks | `package.json` scripts are `dev`, `build`, and `preview` only | No `astro check` script and no CI workflow. |

## Current work record
| Area | Decision / specification | Implementation | Verification / next action |
|---|---|---|---|
| Visual design | Adopted: `01-DESIGN-SYSTEM.md` (sample matched to live CSS on 2 Oct). `02-SERVICE-LAYOUT.md` still specifies the 25/75 shell | Partial. Live pages use the global tokens and `.folio`. The 25/75 shell is still unmounted. Forest rail is not applied | Do not restyle a rail that is not mounted. Do not treat the starter or `v4-gpt-original-design/` as the theme |
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

Status after 2 October 2026: the page and CSS paths from that list are in git. `src/components/` is not in the tree. The 25/75 shell was never mounted. `v4-gpt-original-design/` stays historical and was not used as the token source.

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

## Task log — 2 October 2026 — layout tokens
- Date/task: 2 October 2026 — lock the homepage and the shading page to the tokens already in `src/styles/global.css`. No copy redesign, no chapter reorder, no photography change, no Forest-rail change, no deploy.
- Decision: **adopted.** Canonical token names and values are the live `@theme` block plus the stepped `--page-gutter` on `:root`. Pack aliases resolve to those colors and do not change rendered hex or alpha. `--text-body-lg` (1.125rem / 1.45) is the emphasized body role. Section vertical padding is `--spacing-section` via `py-section`, once. The first homepage section clears the fixed header (`pt-16 md:pt-20`) and then applies section padding once. `.folio` is the shared frame. IBM Plex Mono stays retired. The 25/75 shell stays unmounted.
- Specification: `docs/v4-build/01-DESIGN-SYSTEM.md` sample now matches `src/styles/global.css`. `docs/v4-build/11-SYNC-CONTRACT.md` technical-target sentence names JetBrains Mono and retires IBM Plex Mono. Starter `v4-tokens.css`, starter shell CSS, and starter shading page CSS are bannered as not the live theme.
- Implementation: **implemented** for type, measure, gutter, and section padding on `src/pages/index.astro` and `src/pages/solutions/motorized-shades.astro`, with shared `.folio` and `.annotation-node` in `src/styles/global.css`. Homepage still has its own document shell. Shading still uses `Layout.astro`. `src/components/` was not created.
- Verification: **pass**, 2 October 2026. `npm run build` completed. Static output is two pages: `/` and `/solutions/motorized-shades/`. Chrome at 1440, 1200, 1000, 768, and 390 measured both pages. H1 at 1000px is 45px (token), weight 400, tracking −0.035em. H2 at 1200px is 36px. Folio gutters match on both pages: 64px at 1440, 48px at 768 and 1000, 24px at 390. Homepage `#answer` clears the header once (80px from 768px, 64px at 390px) and applies section padding once. Shading section padding is the section token (86.4px at 1440, 48px at 390), not 112px. Closing band background is ink with no gradient. Annotation node is 4×4px with radius 0. `scrollWidth` equals `clientWidth` on both pages at every measured width, with document overflow visible. Not deployed.
- Remaining items: 25/75 shell still unmounted; Forest rail not applied; shading chapter order is still the live sequence, not the `09` map; seven service routes unbuilt; sitemap/robots/canonical; form destination and conflicting phone numbers; empty project-proof slot; `text-red-700` on the shading comparison marks; `selection:text-white` on the shading main; homepage proof study still uses `py-16 md:py-20` inside the viewport band; character-count wraps `max-w-[18ch]` and `max-w-[16ch]` kept as line breaks; headline `max-w-3xl` / `max-w-4xl` wraps kept. Do not mark the shell, Forest rail, chapter map, forms, or SEO complete.
- Commit/branch: this file cannot store the hash of its own commit. Branch `cursor/lock-layout-tokens-bc95`.
- Preview/production status: not deployed.

## Task log — 3 October 2026 — homepage and eight hubs
- Date/task: 3 October 2026 — replace the shades-topic homepage with a firm index, publish the seven missing hubs, keep the layout-locked shading hub, and add a constant page index.
- Decision: **adopted.** The page index is required on every public page. Pages, hubs, routes, and sections are not removed unless the request names the removal. The shading test-page role is retired; `/solutions/motorized-shades/` remains the live hub. `/_old/motorized-shades/` stays unpublished.
- Why the seven hubs 404’d: they were never routes on `main` or on `cursor/lock-layout-tokens-bc95` (PR #6). `git log --diff-filter=D -- src/pages` is empty. No commit deletes `home-intelligence`, `architectural-lighting`, `media-audio`, `private-cinemas`, `security-access`, `infrastructure-privacy`, or `outdoor-entertainment` page files, because those files were never added on this lineage. Copy has lived in `docs/v4-build/hubs/` since the 29 September import. Generated routes exist only on `korta-v4-photo-hero` (`f067db3`, 30 September 2026, `[...route].astro`), which is not an ancestor of PR #6. That branch is older than PR #6 and was not used as the layout base.
- Specification: `docs/v4-build/03-PAGES-AND-BUILD-ORDER.md` (index, no-delete rule, deployment). `docs/v4-build/06-CURSOR-LOCAL-WORKFLOW.md` (test-page role retired). `docs/v4-build/05-BUSINESS-FACTS.md` (production domain). Rule: `.cursor/rules/keep-pages.mdc`.
- Implementation: **implemented.** `src/pages/index.astro`, `src/pages/solutions/[hub].astro`, `src/components/SiteIndex.astro`, `src/components/HubFrame.astro`, `src/lib/hub-markdown.ts`, `src/data/page-inventory.json`, `src/layouts/Layout.astro` (index bar on the shading hub), `src/styles/global.css`, `scripts/check-pages.mjs`. Shading chapter markup was not rewritten.
- Deployment: **not production.** `davg.ai` is the Cloudflare production domain for this repository. It currently serves the coming-soon page. This task does not deploy there and does not treat davg.ai as another project. Brandon will remove coming soon and point Cloudflare at this site only after he says a page is structurally, design, and technically ready. Review stays on a preview URL.
- Verification: **pass**, 3 October 2026, local. `npm run build` emitted nine pages and `scripts/check-pages.mjs` passed. Chrome opened `/`, clicked each page-index link, and confirmed the eight hub paths, their H1s, and `aria-current`. The homepage ledger link to Outdoor Entertainment opened that hub. `/_old/motorized-shades/` returned 404. No horizontal overflow at 1440 or at a 390px viewport on the homepage; the shading page also had no overflow at 390. Not a production deploy.
- Remaining items: shading chapter order is still the live sequence, not the `09` map; the shading page uses the index bar rather than the forest 25/75 rail; generated hubs use the forest rail and the hub-master copy, with blank media; sitemap/robots/canonical; form destination and conflicting phone numbers; empty project-proof slot. Do not mark forms, SEO, or production ready.

Do not publish this internal record on the public website.
