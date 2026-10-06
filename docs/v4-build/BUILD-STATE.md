# DAVG V4 — Build state
Updated 29 September 2026 during the one-time source sync. This replaces the remote-audit unknowns with the local project that was actually open.

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
| Checks / deployment | Adopted: branch preview revision check in `06-CURSOR-LOCAL-WORKFLOW.md` and `docs/live-previews.md` | Implemented: `.github/workflows/verify-live-revision.yml` waits for Cloudflare, checks `davg-revision`, and writes the review link to the Actions run summary | See the 6 October 2026 task log. Production was not deployed |

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

- Date/task: 30 September 2026 — install complete Korta V4 Astro service build from `DAVG_Korta_V4_Design_System` zip (`astro/` payload).
- Decision: **adopted for implementation on branch** — eight service hubs via `src/pages/[...route].astro`, shared ServiceLayout 25/75 Forest rail, photo hero (`site.heroVariant: 'photo'`). Content Collections + MDX in `10` remain proposed.
- Specification: hub masters in `src/data/hubs/*.md` (verbatim); layout/token intent in zip + `01`/`02` as active docs. `global.css` keeps old token names in `@theme inline`. Cream-gradient `.architectural-background-title` removed (deprecated).
- Implementation: **implemented on branch** `korta-v4-photo-hero`. Copied zip `src/` + `public/` over repo. Kept specimen `src/pages/index.astro` and `src/layouts/Layout.astro`. Moved clashing specimen `src/pages/solutions/motorized-shades.astro` → `src/pages/_old/motorized-shades.astro` because hub route `/solutions/motorized-shades/` is generated by `[...route].astro`.
- Checks: `npm run build` passed — 9 pages (`/` + 8 hubs). Manual photo-hero / rail checks at 1440×900 and 390px recorded in the same task.
- Remaining: homepage still the older specimen; formAction/contact empty; Google Fonts in BaseLayout (self-host later); proof slots DEV-only; no merge to `main` until Brandon reviews preview.
- Commit/branch: see handoff on `korta-v4-photo-hero` (not merged to `main`).
- Preview/production status: branch preview only; not production.

- Date/task: 30 September 2026 — fold section 02 into the Overview chapter of the 25/75, and replace the service inquiry form with guided brief step 01.
- Decision: **adopted**. Hero (01) stays full width above the split. Section 02 is the first Overview block inside the sticky 25/75, before 03. End zone (14 FAQ and 15 close) stays full width below the split. The inquiry form UI is replaced on every hub by one shared guided brief. Questions 2–4 were not in the reference and were not invented. CONTINUE and SKIP TO CONTACT both move to the existing inquiry close (`#s15-close`: the hub final headline and support line). No new color, type, or spacing token.
- Specification: `docs/v4-build/02-SERVICE-LAYOUT.md` (zones paragraph and Inquiry row). Hub markdown copy was not edited.
- Implementation: **implemented** on `korta-v4-photo-hero`. `src/data/services.ts` (`GROUPS`, `zoneOf`), `src/pages/[...route].astro`, `src/components/service/GuidedBrief.astro`, `src/components/service/PlanSection.astro`, `src/pages/scratchpad.astro`. `InquiryForm.astro` remains in the repo and is no longer rendered. Scratchpad lists the brief with Button, Heading, Eyebrow, and TextLink. Selected option uses a Forest field and a Signal hairline, not a Signal fill. No floor-plan illustration.
- Verification: **pass** on 30 September 2026. `npm run build` completed (10 pages). Chrome at 1440×900 on `/solutions/motorized-shades/`: hero full-bleed above the split; section 02 is the first Overview block inside the 75% column (rail 356px / field 1069px); FAQ and inquiry stay full width below the split; the bottom CTA is the guided brief, not the old form. Selected option computed style is Forest `rgb(24, 59, 49)` with Signal border `rgb(26, 143, 110)`. CONTINUE moves to `#s15-close`. The same brief is on `/solutions/home-intelligence/`.
- Remaining: guided brief steps 2–4 (questions, options, and what a completed brief submits); public phone, email, and form destination are still empty; scratchpad is a local bench at `/scratchpad/`.
- Commit/branch: this entry is on `korta-v4-photo-hero`. The handoff names the commit.
- Preview/production status: branch preview only; not production. Not merged to `main`.

- Date/task: 30 September 2026 — replace the old masthead with one `TopNav` on the homepage and every service hub.
- Decision: **adopted**. No utility bar. Logo left, nine sentence-case links right (Home plus the eight services in `MASTHEAD_LINKS`). Photo hero uses `overlay`. Current service uses TopNav's existing active style.
- Specification: `docs/v4-build/02-SERVICE-LAYOUT.md` (masthead sentence under Page frame). Hub markdown was not edited.
- Implementation: **implemented** on `korta-v4-photo-hero`. `src/data/services.ts` (`MASTHEAD_LINKS`, `mastheadActive`), `src/components/nav/TopNav.astro`, `src/layouts/ServiceLayout.astro`, `src/components/service/SplitHero.astro` (photo hero draws the same list), `src/pages/index.astro` (inline header and mobile nav removed). At 1440 the nine labels do not fit `gap-8` (32px); the logo uses `--gap-headline-body` (24px) and the link row stays one line (`justify-between`, about 21px). No new colour, type, or spacing token.
- Verification: **pass** on 30 September 2026. `npm run build` completed (10 pages). Chrome at 1440×900: `/` shows the ink masthead, Home active, sentence-case links, no teal utility bar, no EST. 2013 bar, no uppercase Answer/Systems row. `/solutions/motorized-shades/` shows the same list over the photo (transparent, hairline), Motorized shading active, Forest rail below the hero. Screenshots: `nav-home-1440.png`, `nav-shades-1440.png`.
- Remaining: guided brief steps 2–4; public phone, email, and form destination still empty; homepage body is otherwise the specimen page.
- Commit/branch: this entry is on `korta-v4-photo-hero`. The handoff names the commit.
- Preview/production status: not deployed. Not merged to `main`. `davg.ai` was not changed.

## Task log — 2 October 2026
- Date/task: 2 October 2026 — Phase 1 only: restore DAVG typography and add layout-foundation tokens. No page redesign. No deploy. No Phase 2.
- Decision changed: active fonts are Schibsted Grotesk (display), Instrument Sans (body/UI), JetBrains Mono (technical metadata). IBM Plex Mono is retired.
- Current specification path: typography and foundation tokens in `docs/v4-build/01-DESIGN-SYSTEM.md`. `11-SYNC-CONTRACT.md` still names IBM Plex Mono in its technical-target sentence; that file was outside this task's documentation scope.
- Code paths: `src/styles/global.css`, `src/pages/index.astro` (Google Fonts links removed so the self-hosted stack is the one that loads), `package.json`, `package-lock.json`.
- Checks and results: `npm run build` passed. Static output remains two pages: `/` and `/solutions/motorized-shades/`. Home Intelligence and Architectural Lighting are not built on this branch. Browser check at 1440, 1728, and 390 confirmed the three self-hosted families render and IBM Plex Mono is not a loaded face. No hero, nav, or document-level horizontal overflow regression from this change. Not deployed.
- Remaining items: Phase 2 layout work (measure, gutters, spatial-word placement, service compositions). Schibsted has no weight below 400. The sync contract's IBM Plex sentence is still the older wording.
- Commit/branch: parent inspected before this commit was `d00f5e23cc8422a0dcaaba9f8cd323a0983f3659` on `main`. The working tree was clean, so no checkpoint commit was created. This file cannot store its own commit SHA.
- Preview/production status: not deployed.

- Date/task: 3 October 2026 — merge `origin/main` into `korta-v4-photo-hero`.
- Decision: kept both histories. Mono follows the later `main` decision (self-hosted JetBrains Mono; IBM Plex retired in `01-DESIGN-SYSTEM.md`). Service hubs keep the spatial-band word. The homepage specimen keeps `.architectural-background-title`, including the cream gradient `main` restored, because `index.astro` still uses that class.
- Code paths: `src/styles/global.css`, `src/layouts/BaseLayout.astro` (Google Fonts link removed so the self-hosted stack is the one that loads), `docs/v4-build/BUILD-STATE.md`.
- Remaining: `11-SYNC-CONTRACT.md` and `.cursor/rules/korta-v4.mdc` still name IBM Plex Mono. That wording was not rewritten in this merge.

## Task log — 6 October 2026
- Date/task: 6 October 2026 — add the check that waits for the Cloudflare branch preview, verifies the live page revision, and puts the review link in the GitHub Actions run summary. Triggered by the photo-hero merge to `main` (`09262d5`).
- Decision: **adopted**. Pushes to a branch other than `main` run **Verify live revision**. `main` is excluded so this check does not treat the production Worker host as a review link.
- Specification: `docs/v4-build/06-CURSOR-LOCAL-WORKFLOW.md` (Live revision check). Current review URL: `docs/live-previews.md`.
- Implementation: **implemented** on `cursor/cloudflare-page-revision-link-d2b5`. `scripts/build.mjs` stamps `<meta name="davg-revision">`. `scripts/verify-live-revision.mjs` writes the summary link, then polls `/` and the eight service hubs. Workflow: `.github/workflows/verify-live-revision.yml`. `src/components/RevisionMeta.astro` is rendered from `BaseLayout.astro` and `src/pages/index.astro`. `wrangler.toml` build command is `npm run build`.
- Verification: local `npm test` and `npm run build` on 6 October 2026. The Actions run is the live Cloudflare result; this file cannot store that later SHA.
- Remaining: green on the branch preview is the delivery proof. Guided brief steps 2–4, public phone, email, and form destination are unchanged. Production was not updated.
- Commit/branch: `cursor/cloudflare-page-revision-link-d2b5`. The handoff names the commit after it is created.
- Preview/production status: branch preview only, at the URL in `docs/live-previews.md`, once Cloudflare serves this commit. Not deployed to `davg.ai` or `https://davg-korta-v4.brandon-763.workers.dev/`.

Do not publish this internal record on the public website.
