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
| Fonts | Self-hosted Schibsted Grotesk and Instrument Sans through `@fontsource-variable` imports in `global.css` | Mono is still JetBrains Mono, on purpose in the current CSS comment. IBM Plex Mono is not installed. Homepage no longer depends on a Google Fonts link in the current page source. Font package edits in `package.json` are local and were not part of this commit. |
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

- Date/task: 30 September 2026 — install complete Korta V4 Astro service build from `DAVG_Korta_V4_Design_System` zip (`astro/` payload).
- Decision: **adopted for implementation on branch** — eight service hubs via `src/pages/[...route].astro`, shared ServiceLayout 25/75 Forest rail, photo hero (`site.heroVariant: 'photo'`). Content Collections + MDX in `10` remain proposed.
- Specification: hub masters in `src/data/hubs/*.md` (verbatim); layout/token intent in zip + `01`/`02` as active docs. `global.css` keeps old token names in `@theme inline`. Cream-gradient `.architectural-background-title` removed (deprecated).
- Implementation: **implemented on branch** `korta-v4-photo-hero`. Copied zip `src/` + `public/` over repo. Kept specimen `src/pages/index.astro` and `src/layouts/Layout.astro`. Moved clashing specimen `src/pages/solutions/motorized-shades.astro` → `src/pages/_old/motorized-shades.astro` because hub route `/solutions/motorized-shades/` is generated by `[...route].astro`.
- Checks: `npm run build` passed — 9 pages (`/` + 8 hubs). Manual photo-hero / rail checks at 1440×900 and 390px recorded in the same task.
- Remaining: homepage still the older specimen; formAction/contact empty; Google Fonts in BaseLayout (self-host later); proof slots DEV-only; no merge to `main` until Brandon reviews preview.
- Commit/branch: see handoff on `korta-v4-photo-hero` (not merged to `main`).
- Preview/production status: branch preview only; not production.

Do not publish this internal record on the public website.
