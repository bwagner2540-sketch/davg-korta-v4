# DAVG V4 — repair state, 30 September 2026

## Hub production — Motorized Shading consistency
Implemented on the existing `ServicePage`, not `HubPage`. `motorized-shades-04` is the recessed Forest signature study. `motorized-shades-05` is the existing paper comparison of solar fabric and darkness. Kit photographs were not substituted. Slots 06–08 stay missing. Desktop 1440 and mobile 390 checked on `/systems/motorized-shades/`. `/solutions/motorized-shades/` serves the same studies. Not added to `approvedPages`. Not deployed.

## Hub production — Outdoor Entertainment
Draft at `/systems/outdoor-entertainment/` via `HubPage`. Three photographs and the Episode ES-LS-2 pair are placed. Captions identify Episode and SunBrite, not Sonance. Sonance Landscape/Garden is still missing. Slots 06–08 missing. Sandbox build at 14:41 passed, 26 pages. Desktop 1440 and mobile 390 checked. Not deployed.

## Hub production — Security
Draft at `/systems/security-access/` via `HubPage`. Three camera photographs and the Luma rack are placed. The plan study is labelled fictitious. Entry hardware is missing. Slots 06–08 missing. Desktop 1440 and mobile 390 checked. Not deployed.

## Hub production — Infrastructure
Draft at `/systems/infrastructure-privacy/` via `HubPage`. Hero and ceiling photograph placed. `Rack_cables-1.jpg` withheld because it shows switch name SW03 and port labels. Slots 06–08 missing. Studies state no bandwidth figures. Desktop 1440 and mobile 390 checked. Not deployed.

## Hub production — Private Cinemas
Draft at `/systems/private-cinemas/` via `HubPage`. Three manufacturer photographs placed. The rack stays off the hero. Both studies are derived diagrams and say so. Slots 06–08, screen/projector and isolation photographs are missing. Desktop 1440 and mobile 390 checked. Sandbox build passed with the later hubs also wired locally. Not deployed.

## Hub production — Media & Audio
Draft at `/systems/media-audio/` via `HubPage`. Slots 01–03 placed. Slots 06–08 missing. The Forest study is a conceptual invisible-speaker section. The PDX photograph is captioned as a visible loudspeaker. Desktop 1440 and mobile 390 checked: images decoded, no overflow, no Vite overlay. Not deployed.

## Hub production — Home Intelligence
Draft rendered by `HubPage` at `/systems/home-intelligence/`. Slots 01 and 03 placed. Slot 02 withheld because the touchscreen shows personal names. Slots 06–08 missing. Halo and Halo Touch product photographs are placed. Studies are conceptual. Desktop 1440 and mobile 390 checked in the browser: no overflow, no Vite overlay, Forest only on the rail and the signature study. Not deployed.

## Hub production — Architectural Lighting
Implemented on branch `checkpoint/davg-local-2026-09-30`. Handoff installed from `/Users/brandon-davg/Documents/DAVG-HUB-BUILD-QUEUE.md` and `DAVG-HUB-PRODUCTION-KIT.zip`. The Dropbox copies are byte-identical (`a79a2e170d0ddaf2a6cb42767f2d680b14acb9379bc980e4f1072a1fce29c7af` and `52ed83075466579d020038f0fea19b5904781e7d12353e8ea7dfffa5f17e6c4b`). Kit path: `docs/v4-build/hub-production-kit/`. Progress: `docs/v4-build/HUB-PROGRESS.md`.

Architectural Lighting is rendered by `HubPage`. Slots 01–03 are placed manufacturer illustrations. Slots 06–08 are missing. Both studies are built as labelled conceptual compositions, not measured artwork. Sunnata and driver photographs are missing. `publication.json` is unchanged and empty. Sandbox build passed, 26 pages. `npm run verify` still fails on the existing rail lockup `/brand/davg-lockup-on-black.png`, which has no srcset. Public `npm run build` was not used. Nothing was pushed. Deploy was not run: the only remote path is a GitHub push, and Workers Builds is still connected.

Desktop check at 1440px: hero is two columns, Forest rail visible, no horizontal overflow, no Vite overlay, photographs decoded. Mobile check at 390px: rail hidden, chapter menu present, hero one column, no overflow, no overlay. A mobile screenshot timed out; the measurements above are from the page at that width.

## This session — surface roles
Uncommitted local work on branch `checkpoint/davg-local-2026-09-30`, HEAD `dc9ff37a34bd65c9c7ad6fefe8f998bc524c0031`. Service pages use the 30 September surface map. The Forest rail is constant. Hero and inquiry are Ink. The opening answer, Overview, ordinary Design, Installation and Questions are Paper. Systems is Charcoal. Investment is Stone. Forest-to-Ink is only `#signature-study`. Draft services have no filler study. Nothing was pushed or deployed.

Preview on the running dev server, 30 September 2026: desktop 1920px at `/systems/motorized-shades/`. Rail 480/1920, Forest, with a 1px hairline. Computed fills matched the map. Forest appeared only on the rail and the signature study. Privacy tab selected with a Signal underline. Installation stayed the active chapter after its link. The remodel path set the inquiry stage to `remodel`. Questions measured full width after the rail had scrolled away. Mobile emulation at 390px: desktop rail hidden, Forest chapter menu closed after Investment, no horizontal overflow, same surface order. `/solutions/motorized-shades/` returned the same specimen markup. `/systems/home-intelligence/` used the draft roles and had no signature study.

Checks this session: `npm run check` passed, 0 errors. `npm test` passed, 12. `npm run build:sandbox` passed, 26 pages. `npm run verify` failed on the existing rail lockup `/brand/davg-lockup-on-black.png`, which has alt, width and height but no srcset. That image was not part of this surface change. Public `npm run build` was not re-run. Nothing was pushed or deployed.

## Prior session
Uncommitted local work on the shading sandbox. Global element margins and the 1.6 body line-height were removed. The rail, chapter lists, and Good/Better/Best block now use the locked spacing tokens and IBM Plex Mono labels. `--text-h5` and `--text-h6` are interpolated sizes, not locked tokens. Nothing was pushed or deployed.

## Scope and location
This repair was made against checkpoint dc9ff37a34bd65c9c7ad6fefe8f998bc524c0031 and imported into `/Users/brandon-davg/Desktop/DAVG Korta V4` on 30 September 2026. Branch `checkpoint/davg-local-2026-09-30`, HEAD `dc9ff37a34bd65c9c7ad6fefe8f998bc524c0031`. The import is uncommitted. Nothing was pushed, merged, or deployed.

`git apply` failed because newer uncommitted shading work had already changed the same files. The repair was reconciled into that work. The live shading page stayed the content-collection specimen. The patch’s second monolithic `solutions/motorized-shades.astro` was not installed over it.

The prior checkpoint state is preserved at archive/checkpoint-dc9ff37/BUILD-STATE.md. Its document-09 authority, eleven-chapter rail and JetBrains font notes are retired.

## Current implementation
- Full-width hero and direct answer precede the bounded 25/75 frame. Full-width Questions and Inquiry follow it.
- Exactly five middle chapter groups: Overview, Design, Systems, Installation, Investment. Links are nested under Motorized Shading in the eight-service navigation. The rail starts and stops with the middle frame.
- Decision: adopted for the shading sandbox. `/systems/motorized-shades/` comes from `src/pages/systems/[slug].astro`. `/solutions/motorized-shades/` renders the same `ServicePage`. Both are sandbox-only in `src/config/publication.json`. Specification: `02-SERVICE-LAYOUT.md`.
- The shading specimen keeps the content-collection compositions and the checkpoint photographs. Design shows the labelled conceptual RECESSED diagram from `ShadingStudy.astro` in the recessed mounting tab. Fascia and exposed tabs keep their product photographs. Product family tabs, control-platform distinctions and project-scope copy stay separate.
- The seven other `/systems/` routes are noindex drafts from `src/data/services/*.json` and `ServiceDraft.astro`. They were not added to the services collection. The homepage is the repair draft, not an approved redesign.
- Font families match installed Fontsource names: Schibsted Grotesk Variable and Instrument Sans Variable. IBM Plex Mono replaces JetBrains for factual labels. The installed Schibsted asset supports 400–900; a true 300-weight display asset remains missing. CSS requesting 300 does not make that asset exist.
- Images have intrinsic dimensions, responsive sources and sizes, lazy loading except the eager hero. npm scripts generate variants from originals without upscaling.
- Shared metadata, conditional canonical/social/schema, robots/sitemap, 404 and security headers are implemented. All current pages are drafts/noindex. No fabricated business phone/address, project outcome or price is published.
- Inquiry works as an email-draft fallback. The separate Worker has server-side Turnstile, origin/rate/body checks and HubSpot mapping, with mocked tests. It is not deployed or connected to real form delivery. Confirmation of destination, legal consent, field mapping and live delivery remains required.
- npm run build:sandbox creates local dist-sandbox. Default public build fails while approvedPages is empty. Production builds stage only approved page files and reject either shading alias. The deploy guard rejects sandbox output. Cloudflare account-level branch preview triggers have not been changed; do not push this sandbox branch.

## Verification and evidence
The separate repair workspace had already passed its own checks. This Mac import was checked again on 30 September 2026. See the import record below. A passing local sandbox build is not deployment and is not owner visual approval.

## Remaining gaps
True 300-weight display font; approved authentic brand assets; final architectural study artwork; keypad images; cleared DAVG project proof; verified public phone; approved social image; homepage design; visual studies for seven other services; live inquiry destination and delivery; Cloudflare preview-trigger exclusion; owner visual approval. These are gaps, not completed work.

## Cursor import record — 30 September 2026
- Decision: adopted repair, reconciled with the newer content-collection shading page. Specification: `02-SERVICE-LAYOUT.md`, `00-START-HERE.md`, this file.
- Implementation: repair infrastructure, draft service routes, IBM Plex Mono, publication guard, and the recessed schematic. Live shading copy remains `src/content/services/motorized-shades.json`.
- Not overwritten: `docs/v4-build/DAVG-ALL-EIGHT-SERVICE-PAGES/`, the services collection schema, and the shading compositions. `src/pages/systems/motorized-shades.astro` was not added, because `[slug].astro` already owns that URL. The 58 KB monolithic shading page from the zip was not copied over the live page.
- Checks: `python3 scripts/validate-service-content.py` passed (1 live page). `npm run check` passed, 0 errors. `npm test` passed, 12. `npm run build:sandbox` passed, 13 pages. `npm run verify` passed: 13 HTML routes, 326 local links, 40 responsive images, nested five-chapter rail, draft noindex. `npm run test:publication` passed. Public `npm run build` stays blocked.
- Preview: dev server left running at http://127.0.0.1:4321/ from this repository. Desktop at 1613px: recessed diagram rendered at 649×450 in Design, rail 403/1613, Design and Installation active states, highlight cleared after the split, Fascia photograph loaded, Sivoia tab selected, Remodel path set the inquiry stage. Mobile at 390px: one column, desktop rail hidden, chapter menu closed after Investment, diagram 350×243, no horizontal overflow. Not deployed.
