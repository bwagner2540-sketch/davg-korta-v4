# DAVG V4 — Build state
Updated 30 September 2026 for the local working-build checkpoint. Earlier import notes below stay as history.

## Shared checkpoint
- Repository: `bwagner2540-sketch/davg-korta-v4` (`origin` `https://github.com/bwagner2540-sketch/davg-korta-v4.git`). Matches the expected remote. No reset and no merge into `main`.
- Branch: `checkpoint/davg-local-2026-09-30`, created from local `main` at `d00f5e23cc8422a0dcaaba9f8cd323a0983f3659`. `main` still tracks `origin/main` and was not updated by this checkpoint.
- Head inspected before this checkpoint commit: `d00f5e23cc8422a0dcaaba9f8cd323a0983f3659`. The audit snapshot `462c90a7b49719efacd607fc22390d61b15a6953` (10 September 2026) did not see the newer local work now included here.
- Local path: `/Users/brandon-davg/Desktop/DAVG Korta V4`.
- Sync-kit import: applied 29 September 2026 from `DAVG-V4-Sync-Update-2026-09-29.zip`. Payload text copied into `docs/v4-build/`. Existing reference screenshots, PDF, spreadsheet, manifests and starter README kept.
- Active specification after import: `docs/v4-build/`. Shading authority is `09-SHADING-STORY-SYSTEMS-AND-PROJECT-PATHS.md`, which supersedes `08`'s chapter map. `08` supersedes the original shading hub's rendered order where the two still agree. Other hubs use their own file in `hubs/` plus `content-additions/gbb/`. `v4-gpt-original-design/` stays historical.
- Import commit: `b71bf120fc1bc3573a57333c051cc15b3c345c72` on `main` (`docs: import the 29 September V4 source sync`). This note was added after that commit, so the follow-up SHA is the handoff head.
- Cloudflare project/environment/deployment: not deployed by this checkpoint. `wrangler.toml` still only names `davg-korta-v4`, compatibility date `2026-09-10`, and `assets.directory = "./dist"`. Workers Builds is connected to this GitHub repo. A push to `main` has produced a production build. A push to `seo-backend-v4` has produced a preview URL. This checkpoint branch was therefore not pushed. Motorized Shades at `/solutions/motorized-shades/` is a design sandbox: it must reflect the latest approved decisions and must not be deployed.

## Adopted architecture
Decision: **adopted for the current build** — static Astro file routes, shared components, CSS-first Tailwind. Content Collections + MDX in `10-ASTRO-ARCHITECTURE-AND-PREBUILD-AUDIT.md` stay **proposed**. This sync did not migrate hubs.

| Piece | Adopted now | Difference from the audit snapshot or the proposed target |
|---|---|---|
| Output | `output: 'static'`, `site: 'https://davg.ai'`, `@astrojs/cloudflare` | Matches the audit. No runtime POST routes. |
| Versions | Astro 7.3.2, Tailwind 4.3.3, `@tailwindcss/vite` 4.3.3, Cloudflare adapter 14.3.1, Node v24.18.0 | Lockfile matches the audit. Node meets `>=22.12.0`. |
| Routes | `src/pages/index.astro`, `src/pages/solutions/motorized-shades.astro` | No `src/content.config.ts`, no MDX, no `solutions/[slug].astro`. Other seven service URLs are linked and not built. |
| Shell | `src/components/ServicePageShell.astro` and `src/components/MediaPlaceholder.astro` | Present locally. The audit only saw the Dropbox starter. Working files were not replaced by `docs/v4-build/starter/`. |
| Rail | 25/75 frame. Rail background is Forest (`--color-surface-forest`) | `01` and `09` ask for a Forest sticky rail. The local shell already used Forest before this shading pass. The 29 Sep sync note that said the rail was still Ink is superseded by that component and by this task. |
| Tokens | `src/styles/global.css` `@theme` block, including pack aliases such as `--color-text-on-dark` | Local uncommitted token work kept. Starter `v4-tokens.css` remains a reference under `docs/`. |
| Fonts | Self-hosted Schibsted Grotesk and Instrument Sans through `@fontsource-variable` imports in `global.css` | Mono is still JetBrains Mono, on purpose in the current CSS comment. IBM Plex Mono is not installed. Homepage no longer depends on a Google Fonts link in the current page source. The three `@fontsource-variable` packages are in `package.json` and `package-lock.json` for this checkpoint. |
| SEO | Shared `Layout.astro` accepts an optional `description` and emits it when passed. Homepage keeps its own description and LocalBusiness/FAQPage JSON-LD | No canonical, social image, sitemap, robots, or 404 source. Shading does not pass a description into the layout. |
| Shading page | Working specimen at `/solutions/motorized-shades/`. Document 09’s 11-chapter sequence is the rendered map. Shade photographs moved with the decisions they illustrate. `shading-11-proof` stays a blank reservation | Implemented in the local page on 30 September 2026. Design sandbox. Not deployed, and this checkpoint must not deploy it. |
| Forms | Shading inquiry form posts nowhere (`action="#"`) and states that no destination is connected. Homepage uses mailto and visible phone/email | No Worker endpoint, Turnstile, or HubSpot mapping. |
| Checks | `package.json` scripts are `dev`, `build`, and `preview` only | No `astro check` script and no CI workflow. |

## Current work record
| Area | Decision / specification | Implementation | Verification / next action |
|---|---|---|---|
| Visual design | Adopted: `01-DESIGN-SYSTEM.md` (Forest sidebar). `02-SERVICE-LAYOUT.md` | Implemented for the shading shell: Forest rail, tokens unchanged, hero full width of the reading field | Homepage magazine layout was not part of this shading pass |
| Shading story | Adopted spec: `09` supersedes `08` chapter map | Implemented on `src/pages/solutions/motorized-shades.astro`. Eleven rail chapters. Legacy anchors kept as aliases. Proof slot blank | Keypad family photos other than the existing Palladiom keypad, and the architectural cutaway, remain pending slots |
| GBB additions | Adopted for shading: `shade-design-paths` public copy from `content-additions/gbb/03-Motorized-Shading.md` | Implemented inside chapter 4, replacing the old Good/Better/Best family ladder. Other hubs still pending | No new product pages |
| Content routing | Proposed in `10`: collections + MDX + `[slug]` | Pending. Standalone static routes remain the adopted path | Migrate shading first only in a later task, after this import |
| SEO | Proposed shared head/sitemap/robots in `10` | Partial. Homepage metadata and optional layout description only | Add one metadata owner before indexing |
| Forms / backend | Proposed Worker POST contract in `10` | Pending. Explicit non-sending form | Confirm phone, email, and destination before any success state |
| Security | Proposed headers and runtime controls in `10` | Not implemented in source. `.gitignore` excludes `.env` and `.env.*` | No security pass claimed |
| Contact and proof | `05-BUSINESS-FACTS.md`. Conflicting phones remain unresolved: fact file cites 720-327-7337 and 303-914-2700; homepage also shows 720.638.1603 and 720.327.7337, plus `info@davg.ai` | Homepage keeps the owner's current contact block. Proof slot stays empty | Confirm one public phone and cleared project proof before release |
| Checks / deployment | Local `npm run build` is the existing check. Workers Builds deploys `main` to production and has previewed another branch | See task log. `npm run build` on 30 September 2026 passed: two static pages | Checkpoint branch not pushed, because a push would start a preview deploy |

## Included in the 30 September checkpoint
The 29 September import left these files uncommitted. This checkpoint keeps that work and includes it. Nothing here was replaced with a starter:

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

- Date/task: 30 September 2026 — apply document 09’s shading chapter map and the shading GBB module on the existing page.
- Decision changed: shading chapter order adopted from `09`. Forest rail kept because `01` and `09` require it and the local shell already used it. GBB `shade-design-paths` adopted as chapter 4 copy. Homepage left unchanged. Seven other service routes not created.
- Current specification path: `docs/v4-build/09-SHADING-STORY-SYSTEMS-AND-PROJECT-PATHS.md`, with fabric/FAQ/scope wording reused from `08` where consistent, and public GBB copy from `content-additions/gbb/03-Motorized-Shading.md`.
- Code paths: `src/pages/solutions/motorized-shades.astro`, `src/components/ServicePageShell.astro` (chapter highlight falls back to the section id). `src/styles/global.css` not restyled. `src/pages/index.astro` not edited.
- Checks and results: `npm run build` on 30 September 2026 passed. Static output, two pages. Dev server on port 4321 had been down and was started again. Headless Chrome on that server: 11 chapter links, Forest rail, 16 shade images load, proof slot empty, project-stage selection fills the form without a query string, inquiry submit stays unsent, no Vite overlay. Mobile width stacks to one column. No deploy. No commit.
- Remaining items: IBM Plex Mono vs installed JetBrains Mono; seven unbuilt service routes; sitemap/robots/canonical; form destination and conflicting phone numbers; empty project-proof slot; pending Pico, Sunnata, seeTouch and Alisse photographs; pending architectural cutaway.
- Commit/branch: uncommitted local work on `main`. Do not treat this file edit as a commit.
- Preview/production status: not deployed.

- Date/task: 30 September 2026 — checkpoint the existing local working build for inspection.
- Decision changed: no design or source replacement. Motorized Shades stays the sandbox and must not deploy. Parent of this checkpoint is `main` at `d00f5e23cc8422a0dcaaba9f8cd323a0983f3659`.
- Current specification path: `docs/v4-build/BUILD-STATE.md` and the sandbox sentence in `docs/v4-build/00-START-HERE.md`.
- Code paths: existing pages, `src/components/`, `src/styles/global.css`, `src/layouts/Layout.astro`, `package.json`, `package-lock.json`, and the shade images in `public/images/`. No starter files were copied over the working source.
- Checks and results: `npm run build` on 30 September 2026 passed. Static output, two pages: `/` and `/solutions/motorized-shades/`. Adapter again logged `IMAGES` and `SESSION` bindings that are not in `wrangler.toml`. Build failure was not a reason to discard work; this run passed.
- Deployment inspection: no `.github/workflows` on `main`. `seo-backend-v4` has `Validate Astro Build`, which only runs `npm run build` on push or pull request to `main`. Workers Builds is connected. The `main` tip check created a production version and no preview URL. The `seo-backend-v4` check created a preview URL and a branch alias. A push of `checkpoint/davg-local-2026-09-30` would therefore start a preview deploy. The branch was committed locally and not pushed. `main` was not merged and was not pushed.
- Remaining items: IBM Plex Mono vs installed JetBrains Mono; seven unbuilt service routes; sitemap/robots/canonical; form destination and conflicting phone numbers; empty project-proof slot; pending Pico, Sunnata, seeTouch and Alisse photographs; pending architectural cutaway. Push stays blocked until this branch cannot start a production or preview deploy.
- Commit/branch: `checkpoint/davg-local-2026-09-30`. The commit SHA is the commit that contains this note; the handoff reports it after creation.
- Preview/production status: not deployed by this task.

Do not publish this internal record on the public website.
