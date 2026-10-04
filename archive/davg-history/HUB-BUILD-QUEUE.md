# DAVG — Build queue

**Page frame and public copy in this file were superseded on 3 October 2026.** The rendered page is `docs/v4-build/hubs/DAVG-V4-Hub-*.md` inside `ServicePageShell.astro`. Do not rebuild a hub from `src/data/services/*.json`, and do not put a full-width hero outside the rail. Image notes below are reference only.

# Earlier queue — screenshot component system
Updated 30 September 2026. Execution handoff, not a new visual design or a replacement repository.

## Paste this into Cursor

Read `docs/v4-build/HUB-BUILD-QUEUE.md` and the accompanying `hub-production-kit/image-plan.json`. You own implementation and verification. Build the hubs sequentially from the screenshot section components I supplied, using the complete current content master and the selected Dropbox assets. Start with Architectural Lighting, then follow the queue. Inspect the actual screenshot/component kit already in this workspace; reuse its components and match their composition, typography, image scale, alignment and spacing. Do not redesign them into generic text sections, repeated cards or a copied Motorized Shades page. Preserve the current five-chapter 25/75 frame and surface rules. Meet the six-photo plus two-study baseline per hub, preserve additional required product views, and record filled versus missing slots accurately. Build, inspect, commit and deploy to the existing test project, then continue automatically to the next hub. A missing proof image is a tracked gap, not a reason to stop the entire build or block its temporary preview. Do not call a page finished while required images or visual checks are missing. Do not change custom-domain routing.

## Install this handoff once

1. Open the actual DAVG repository in Cursor. Inspect its path, Git status and the server serving port 4321. Preserve local edits.
2. Copy this Markdown to `docs/v4-build/HUB-BUILD-QUEUE.md`. Copy this package directory to `docs/v4-build/hub-production-kit/`. This is an additive asset/task handoff; do not replace the whole repository.
3. The final repair/build package remains the base. Compare this kit’s current-contracts and current-content snapshots with active files. Integrate applicable missing decisions; do not overwrite newer supported user changes. If the active project is still the old checkpoint, apply the earlier final package before rendering these hubs. Do not use an older archive or skill to resolve a current layout conflict.
4. Reuse the additional screenshot component library the owner already gave Cursor. The eight references included here are real supplied visual inputs, but they are not evidence that a complete component library has been implemented. Locate the actual kit and its exports before referring to it as installed. If its source is missing, reproduce the supplied composition locally and report that fact; never invent token values or claim an absent file was read.
5. Copy selected `assets/*.webp` into `public/images/` using each record’s `publicPath` filename. Keep this image-plan as provenance. Run the existing image pipeline to generate responsive variants. Do not serve images from Dropbox links.

## Sources by responsibility

| Responsibility | Active input |
|---|---|
| Visual component composition | Owner’s screenshot/component kit; included `references/` for the eight inspected examples |
| Fonts / tokens / spacing | `src/styles/global.css`, `01-DESIGN-SYSTEM.md`, `SPACING-PROVENANCE.md` |
| Page frame / nested chapters | `02-SERVICE-LAYOUT.md`, `ServicePageShell.astro`, `src/config/site.ts` |
| Surface assignment | `DAVG-SURFACE-COLOR-SYSTEM.md` |
| Full educational content | `10-ALL-EIGHT-SERVICE-PAGES-CONTENT-AND-BUILD.md` and `src/data/services/<slug>.json`; reconcile instead of truncating |
| Image selection / placement / count | This queue and `hub-production-kit/image-plan.json` |
| Eight-slot baseline provenance | Included September 27 photo guide; use its photo/study requirements, not its obsolete fifteen-section frame or deployment holds |
| Deployment / current status | Current owner authorization, `11-SYNC-CONTRACT.md`, active build configuration and actual deployment result |

Latest explicit owner instructions govern conflicts. Keep historical documents out of active prompts. Record conflicting lines and the exact file fixed. Never state “all files current” from a successful build alone.

## Shared frame and screenshot components

Two full-width opening sections → bounded 25% Forest sticky navigation / 75% reading field → two full-width closing sections (Questions, Inquiry). The middle links are exactly Overview, Design, Systems, Installation, Investment, nested immediately below the active service. FAQ questions never become navigation labels. The rail ends at Investment. On mobile use the existing compact menu and one document scroll.

Use sustained Paper for ordinary reading, Charcoal for Systems, Stone for Investment, Ink for hero/inquiry. Forest in the right field belongs only to the designated high-end study composition; do not paint every comparison green or alternate cream/black mechanically. A second technical study can be neutral. Keep original brand artwork colors.

| Supplied screenshot | Component / hub application |
|---|---|
| 01 — One interface. Every room. | Paper device/interface presentation for Home Intelligence |
| 02 — INTELLIGENCE device study | Home Intelligence signature folio |
| 03 — What are you planning? | Shared full-width guided inquiry; actual controls, not a flat screenshot |
| 04 — Architectural lighting comparison | Architectural Lighting comparison folio; retain large paired visuals and restrained annotations |
| 05 — Residential architecture hero | Hero composition vocabulary; choose a unique finished photograph for each hub |
| 06 — INVISIBLE audio cutaway | Media & Audio speaker folio composition |
| 07 — RECESSED shade cutaway | Motorized Shading signature study composition |
| 08 — Centralized equipment core | Infrastructure architectural cutaway composition |

These references show anatomy, visual hierarchy and composition. They are not proof photographs or verified hardware specifications. Rebuild editable text, controls and accessible labels. Keep generated reference artwork as internal reference unless deliberately using it as labelled conceptual illustration. Do not publish guessed dimensions, dBA, RF coverage, speed, outcome or project identity from reference labels. No dedicated cinema/security/outdoor mockup is present in this attachment set: adapt existing approved section anatomy to that service; do not claim a missing approved mockup exists.

## Sequential queue

Motorized Shading is the existing test specimen. Check its shared frame once and preserve useful current content; do not spend another round rebuilding it before finishing the seven other hubs.

| Order | Hub | Route | Page / content input |
|---|---|---|---|
| 1 | Architectural Lighting | `/systems/architectural-lighting/` | `src/pages/systems/architectural-lighting.astro` / `src/data/services/architectural-lighting.json` |
| 2 | Home Intelligence | `/systems/home-intelligence/` | Matching page and JSON by slug |
| 3 | Media & Audio | `/systems/media-audio/` | Matching page and JSON by slug |
| 4 | Private Cinemas | `/systems/private-cinemas/` | Matching page and JSON by slug |
| 5 | Digital Infrastructure & Privacy | `/systems/infrastructure-privacy/` | Matching page and JSON by slug |
| 6 | Security Cameras & Access Control | `/systems/security-access/` | Matching page and JSON by slug |
| 7 | Outdoor Entertainment | `/systems/outdoor-entertainment/` | Matching page and JSON by slug |
| 8 | Motorized Shading final consistency pass | `/systems/motorized-shades/` | Same implementation as `/solutions/motorized-shades/`; preserve existing additional imagery |

Complete one page’s composition, assets and checks before opening the next. Build one reusable screenshot component when needed, then populate it for the active hub. Avoid speculative universal components or a framework migration. `ServiceDraft.astro` supplies content scaffolding, not a finished visual design: replace its plain repeated chapter rendering with appropriate kit compositions while retaining content and shared mechanics.

## Image counts — recovered, not invented

The directly inspected September 27 guide specifies **six real-photo slots + two study slots per hub**. Across eight hubs: **48 photo slots + 16 study slots = 64 required slots**, before additional product-gallery photographs. This is a minimum content requirement, not a cap and not a reason to remove existing useful shading photos.

| Slot | Type | Best current placement | What qualifies |
|---|---|---|---|
| 01 | Photo | Full-width hero | Unique clean finished architecture appropriate to the service; never rack/progress imagery |
| 02 | Photo | Overview / nearby service explanation | Actual installed control, hardware, material or service detail |
| 03 | Photo | Design / experience passage | Distinct finished room/use view that teaches the choice |
| 04 | Study | Design signature component | Service-specific folio built from the supplied component language |
| 05 | Study | Systems or Installation, beside the explanation | Accurate technical cutaway/map; use neutral treatment unless it is an explicitly designated approved folio |
| 06 | Photo | Installation proof spread | Permission-cleared genuine DAVG project wide view |
| 07 | Photo | Same proof spread | Different detail of that same verified project |
| 08 | Photo | Overview or Installation local-conditions passage | Verified regional architecture relevant to climate/material/context; do not add unrelated photo filler to the FAQs |

The older S01/S02/etc. labels identify image jobs, not mandatory live chapter labels. Preserve counts and meaning while placing them in the current five-chapter frame.

Count unique usable assets, not image tags: duplicate crops, thumbnails, responsive variants and the same photograph in several tabs count once. Real product photographs can populate appropriate supplemental galleries but cannot replace architectural/proof slots. Reference screenshots, blanks and unbuilt diagrams do not count as finished studies. Distinct genuine day/evening photographs can count separately; do not fake scene states by recoloring or label different rooms a controlled comparison.

Never reuse a photograph across hubs or reuse another page’s hero. Check the actual repo’s existing images by content hash before adopting these candidates. Shading aliases share one page and are one exception to route-level duplicate detection. Steele Street/Belcaro and Castle Rock project images require their actual cleared use; filename or historic suggestion is not proof of rights or scope.

## Selected Dropbox photographs and exact placement

I inspected 55 candidate images from the actual Website Images folder and selected the primary images below plus supplemental product/detail assets. The folder’s pipeline README describes a manufacturer/dealer library. Treat these as illustrations, not completed DAVG work. The three selected photos per hub below are starting selections for slots 01–03, not a claim all six photo slots are complete.

### Architectural Lighting

Rebuild the architectural lighting comparison from the screenshot. A separate neutral fixture → driver → dimmer study explains compatibility. Available photographs show different rooms: do not label them a same-room before/after or quantified comparison. Exact Sunnata and driver photographs remain outstanding.

| Slot | Placement / job | Selected original |
|---|---|---|
| 01 | Finished architectural hero | `Denver-Penthouse_Case-Study-1.jpg` |
| 02 | Installed interface / service detail | `Alisse Vignette_1c2b_GP_Gray Tile_Left.jpg` |
| 03 | Distinct finished room / experience | `Kit_Prv Res_Orlando CH_Dim.jpg` |

Supplemental assets: `Alisse_Woven Wallpaper_1c3b_AB_Engraved.jpg`, `lutron_palladiom-qs-keypad.jpg`, `RRD-W7B-WH.jpg`, `RRD-H6BRL-MN.jpg`, `RR-T10RL-SW.jpg`, `Vibrant_AZ-43.jpg`.

Proof wide/detail and verified regional-context slots remain unfilled. Both studies require actual component implementation and factual review.

### Home Intelligence

Use the Forest device study for the coordinated operating layer; use the Paper interface presentation for interface roles. Keep one conceptual residence through Arrival / Evening / Away. The second study traces a command through controller, driver and network on a neutral field.

| Slot | Placement / job | Selected original |
|---|---|---|
| 01 | Finished architectural hero | `Ext_Prv Res_Orlando F_Dusk_Front.jpg` |
| 02 | Installed interface / service detail | `Lux-Lighting-Lifestyle-Avalon-Beach_21.jpg` |
| 03 | Distinct finished room / experience | `HaloLifestyle_Alpine-5.jpg` |

Supplemental assets: `C4-HALO-BL_6_DemiRightDock_Z.jpg`, `C4-HALO-TS-AS_6_DemiRightDock_Z.jpg`, `MediaInnovations-14.jpg`.

Proof wide/detail and verified regional-context slots remain unfilled. Both studies require actual component implementation and factual review.

### Media & Audio

Use the supplied invisible-audio folio component composition for the designated Forest study. Use a separate neutral multi-zone sound map tied to real room use. The PDX photo is a visible loudspeaker detail; it cannot illustrate Sonance Invisible, VX or a verified invisible assembly without exact product evidence.

| Slot | Placement / job | Selected original |
|---|---|---|
| 01 | Finished architectural hero | `MediaInnovations-1.jpg` |
| 02 | Installed interface / service detail | `MediaInnovations-2.jpg` |
| 03 | Distinct finished room / experience | `C4-VBTX17.jpg` |

Supplemental assets: `PDX_Callouts-LCR_Tweeter.jpg`.

Proof wide/detail and verified regional-context slots remain unfilled. Both studies require actual component implementation and factual review.

### Private Cinemas

Use approved cutaway and annotated-study component anatomy to show one cinema, not a clone of the shade diagram. Create a sightline study plus a separate neutral wall/acoustics/air-path section. No dedicated cinema mockup is present among these eight supplied references; label the derived composition honestly. Rack photograph explains service access and never becomes the hero.

| Slot | Placement / job | Selected original |
|---|---|---|
| 01 | Finished architectural hero | `MediaInnovations-10.jpg` |
| 02 | Installed interface / service detail | `MediaInnovations-22.jpg` |
| 03 | Distinct finished room / experience | `MediaInnovations-11.jpg` |

Proof wide/detail and verified regional-context slots remain unfilled. Both studies require actual component implementation and factual review.

### Digital Infrastructure & Privacy

Use the centralized-core house cutaway composition for the designated study. Show a separate neutral RF/backhaul/guest-boundary study. Keep equipment photos in Systems and Installation. The hero remains a clean finished residence; never use a rack or wiring-progress image there. Remove or avoid network identifiers in chosen photos.

| Slot | Placement / job | Selected original |
|---|---|---|
| 01 | Finished architectural hero | `ANU-A670-US00-LIfestyleResidentialOption2v3.jpg` |
| 02 | Installed interface / service detail | `Rack_cables-1.jpg` |
| 03 | Distinct finished room / experience | `AN-530-AP-Residential.jpg` |

Supplemental assets: `AN-830_AP_InCeiling_Install.jpg`, `Rack-2.jpg`, `Rack_Front.jpg`, `WB-820-12-Front.jpg`.

Proof wide/detail and verified regional-context slots remain unfilled. Both studies require actual component implementation and factual review.

### Security Cameras & Access Control

Use the kit’s annotated plan component for a fictitious perimeter and privacy exclusions. The second neutral study traces an entry event to access/recording. No dedicated security mockup is present in this attachment set. Luma-X20-Residential-Install-47 is the recorder rack photograph; Outdoor-2024-Luma-6 is the mounted camera. Entry hardware and exact model-front photography remain outstanding.

| Slot | Placement / job | Selected original |
|---|---|---|
| 01 | Finished architectural hero | `Avalon Beach-Lifestyle_11.jpg` |
| 02 | Installed interface / service detail | `Outdoor-2024-Luma-6.jpg` |
| 03 | Distinct finished room / experience | `Outdoor-2024-Luma-3.jpg` |

Supplemental assets: `Luma-X20-Residential-Install-47.jpg`.

Proof wide/detail and verified regional-context slots remain unfilled. Both studies require actual component implementation and factual review.

### Outdoor Entertainment

Adapt the approved annotated architecture component to landscape sound zones, exposure and neighbor edges; second study covers mount/conduit/drainage on neutral. No dedicated outdoor mockup is present here. Included speaker photographs are Episode assets, not Sonance: keep captions honest and fill exact Sonance slots from the synced folder when available.

| Slot | Placement / job | Selected original |
|---|---|---|
| 01 | Finished architectural hero | `MediaInnovations-18.jpg` |
| 02 | Installed interface / service detail | `Episode Landscape Satellite Speaker 6.jpg` |
| 03 | Distinct finished room / experience | `SunBriteTVSignatureProLowRes.jpg` |

Supplemental assets: `ES-LS-2.jpg`.

Proof wide/detail and verified regional-context slots remain unfilled. Both studies require actual component implementation and factual review.

### Motorized Shading

Preserve the RECESSED folio composition: cutaway, restrained leaders, adjacent decision copy, architectural scale and cropped word. Build a separate neutral solar/privacy study. Keep all useful photographs already on the shading page; eight slots is a baseline, not permission to delete its current sixteen-photo story. Do not copy dimensions, noise figures or system claims from the generated reference.

| Slot | Placement / job | Selected original |
|---|---|---|
| 01 | Finished architectural hero | `LivRm_Prv Res_Orlando CH_Angle_with Shade.jpg` |
| 02 | Installed interface / service detail | `BedRm_Atelier_Triathlon_Hachure_PewterBO_det1 fascia.png` |
| 03 | Distinct finished room / experience | `BedRm_Atelier_Palladiom_Stria_SilverBO_pre ang.jpg` |

Supplemental assets: `BedRm_Atelier_Sivoia QS_Boucle_MinkBO_pre ang.jpg`, `Kit_NY Loft_Shades Closed.png`, `PJ2-3BRL-TMN-A02.jpg`, `PJ2-4B-GWH-P01_Family Room_Pedestal_Left.jpg`.

Proof wide/detail and verified regional-context slots remain unfilled. Both studies require actual component implementation and factual review.

## Use the actual Dropbox folder

Confirmed folder: `/Brandon Wagner/1 - DAVGai Master/2 - Website Images`. The included inventory lists 805 immediate children; it does not claim visual review of every image or contents of every subfolder. The included pipeline manifest is historical categorization evidence, not a visual/rights approval list.

Cursor does not automatically share ChatGPT’s Dropbox connection. Use the downloaded selected assets in this kit immediately. For further photos, locate the owner’s locally synced Dropbox folder (commonly beneath `~/Library/CloudStorage/`; inspect, do not assume a path) and make required files available offline. If a working Dropbox connector is configured in Cursor, it may retrieve the exact namespace paths/file IDs in the plan instead. No additional account setup is needed to use this kit’s assets.

For each missing slot, inspect contact sheets and then the chosen original. Score for exact subject, architectural fit, crop room, adequate resolution and complementary view. Choose subject fidelity before visual drama. Never infer brand/model/geography/project scope solely from a filename. Keep product finish, button configuration and system compatibility tied to source facts. Do not use a nice Episode speaker photo as a Sonance product photo. Exact product front/installed/finish views required by the content master remain additional requirements even when the eight-slot baseline is met.

Do not overwrite already approved actual project photographs with this illustrative library. Follow the known no-reuse rule. Keep captions factual and flag unclear publication rights for the specific image. Genuine DAVG proof must come from verified project records; never generate it. A missing asset can have an honest placeholder in the temporary build, but counts and completion status must show the gap.

## Run once per hub, automatically

1. Read the active hub’s complete content, kit components, references and image plan. List its component-to-content mapping internally before editing. Keep meaningful educational content and questions; layout notes stay internal.
2. Build the actual route using the shared frame. Use the screenshot component proportions/composition and current tokens; adapt the approved anatomy to the service’s argument. Use large useful visuals, real product photography and concise live text. Avoid unnecessary viewport-height padding.
3. Add chosen images to the repository with provenance, factual alt text, width/height and responsive sizes/srcset from the existing pipeline. Preserve product cutouts without destructive cropping; crop architectural images deliberately. Hero eager/high priority; lower images lazy. Keep useful captions beside the image they explain.
4. Implement both studies as accessible diagrams/components, with labelled conceptual content where unmeasured. Do not create fake AI before/after or fictitious finished-project results. Supplied reference labels require verification before reuse.
5. Check six photo slots and two study slots, supplemental required product views, duplicate hashes across hubs, and actual image availability. Record selected, rendered, rights/proof-verified and missing separately. Counts pass only when the right content is in the right slot; attractive filler does not pass.
6. Run `npm run images`, `npm run check`, `npm run build`, `npm run verify` and applicable existing interaction checks. Review the actual local route at desktop and mobile widths, all chapters, both closing sections, image crops, navigation bounds, tables, tabs, inquiry and visible text. Capture evidence. Source hashes/build success alone do not prove screenshot fidelity.
7. Compare shared-component changes against already built pages. Preserve all published routes/links, metadata, inquiry functionality and the shading alias. Do not rebuild the whole design system for a single page.
8. Commit a checkpoint containing only the intended changes, preserving unrelated user work. Deploy through the existing configured test workflow. `npm run deploy` exists in the final build package; avoid duplicate pushes/direct deploys when Git-triggered Cloudflare is the chosen workflow. Verify the actual returned deployment URL and page content. Do not revive the old no-push/no-deploy rule, disable preview triggers, or modify custom-domain routing. Continue to the next hub automatically.

If authentication/tool access blocks deployment, report that precise block, finish all locally authorized work, and keep building the remaining hubs. If a required source or asset is genuinely missing, record it and continue independent work; never silently invent it or report it complete.

## Completion record — maintained by Cursor

Create `docs/v4-build/HUB-PROGRESS.md` with one row per hub:

| Hub | Components built | Required photos / 6 | Studies / 2 | Additional product views | Visual checks | Commit | Deployment URL | Remaining gaps |
|---|---|---|---|---|---|---|---|---|
| Each hub | Actual component names | Selected / rendered / verified counts | Built and reviewed count | Met / missing list | Desktop + mobile evidence | Exact SHA | Actual verified URL | Exact slot IDs and cause |

Status distinctions: **scaffold**, **building**, **preview deployed**, **visually verified**, **image complete**. A deployed draft is allowed; it does not become finished automatically. Do not mark image complete with missing proof or product views. Before stopping a run, update the next unfinished task so a new Cursor session continues without requiring the owner to remember any decisions.

## What this handoff has actually verified

- Eight supplied reference images physically inspected; 55 Dropbox photo candidates visually inspected.
- Six-photo/two-study baseline recovered by directly reading all pages of the earlier guide.
- Primary images chosen for the content and mapped to exact slots; supplemental assets retain original-source identities.
- Current layout/surface/content snapshots included as comparison inputs; this task has not edited the owner’s Mac repository, built these hub pages or deployed them.
- Project-proof, verified local-context, exact missing hardware and unbuilt studies remain explicit gaps. Cursor must fill them, check the actual pages and record evidence rather than declaring them synchronized from this package alone.
