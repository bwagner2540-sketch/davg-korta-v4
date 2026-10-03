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
