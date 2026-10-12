# DAVG V4 — Start building in Cursor

29 September 2026. This is the active build pack. It replaces the earlier pre-build, Claude reconciliation and fixed motion directives. The Relume chat is excluded.

## Cursor already building?

Keep working in the existing local Cursor project. Read `06-CURSOR-LOCAL-WORKFLOW.md` first. Add this pack only as reference files at `docs/v4-build/`; do not replace working website code or restart the build.

## Your first hour

1. Copy this folder into the existing Cursor project as `docs/v4-build/`. Keep your local code and assets.
2. Open `prompts/01-FIRST-HOUR.md` and paste its prompt into Cursor Agent. Attach the supplied layout screenshots and `07-motorized-shades-green.jpeg`.
3. Build the 25% sticky left / 75% scrolling right shell and the first five Motorized Shading sections with the actual copy and blank media rectangles.
4. Open the preview. Check desktop proportions, mobile order and text. Save this small win. The rest of the page can follow in the next batch.

The hour is a work target, not a promise to deploy the whole site. If the shell takes longer, finish it and the hero before adding another task.

## What stays fixed

DAVG's voice, the Korta visual direction, its logo treatment, the eight service names, the requested 25/75 service-page shell, and each service's detailed educational content. Read `01-DESIGN-SYSTEM.md` once. Then use only the hub you are building.

## What can wait

Photo sourcing, finished cutaways, advanced interaction, final background-word selection, named bylines, future city/spoke/resource pages, CMS, and old component-library paperwork. A blank image slot is enough to build and review a section. No Claude approval, component reconciliation, research dossier, or architectural-technician wording is required to start or finish a page layout.

## Finish pages in small wins

Recommended order: Motorized Shading → Architectural Lighting → Media & Audio → Home Intelligence → Private Cinemas → Digital Infrastructure & Privacy → Security Cameras & Access Control → Outdoor Entertainment. This order reuses the Lutron selection components first. It is a practical recommendation, not a requirement.

For each service: build 01–05, then 06–10, then 11–15; do a mobile pass; save. The IDs locate content. They do not require fifteen full-height screens. Section 06 can contain several scrollable selection modules without becoming five new pages.

The spreadsheet has one service tab at a time. Mark Content and Layout separately. Leave Media pending until the section is ready for imagery.

## Open only these files

| Job | File |
|---|---|
| Visual decisions | `01-DESIGN-SYSTEM.md` |
| Service shell and section anatomy | `02-SERVICE-LAYOUT.md` |
| Build order and remaining pages | `03-PAGES-AND-BUILD-ORDER.md` |
| Paste-ready Cursor tasks | `prompts/` |
| Copy, topics and exact section order | The selected file in `hubs/` |
| Decisions recovered, actual gaps, archive history | `04-RECONCILIATION.md` |
| Brand and contact configuration | `05-BUSINESS-FACTS.md` |

## Confirmed project and local workflow

Brandon confirmed that `bwagner2540-sketch/davg-korta-v4` is the deployment repository. Cursor edits the local project already open on his computer. GitHub receives committed code for deployment; Dropbox supplies the current reference pack. Motorized Shading on localhost is the design/layout test page before creating the other pages. That page is a design sandbox: it must reflect the latest approved decisions, and it must not be deployed to production or preview.

Preserve Cursor's current files and unpublished experiments. Do not change projects, reset work, fetch another implementation, or treat the earlier `davg-ai` typography PR as a prerequisite. Read the local `docs/v4-build/` files for brand, layout, exact section order and copy. A separate agent checkout is not the running Cursor project.

## Build complete versus public release

A page layout is complete when its real text, tables, section order, blank image dimensions, links and mobile behavior work. Missing images do not stop that milestone. Before a public release, replace or hide empty proof modules, test the form end-to-end, and remove unresolved factual claims from public copy. Test the existing project's normal production build. A working preview can be deployed earlier with indexing disabled.

## New: cleaned GBB comparisons

Read `07-GBB-SECTION-MAP.md` for the content adapted from Claude GBB Refined 6.7.pdf. Section-ready copy and JSON are in `content-additions/gbb/`. Use them to refine the existing service chapters, beginning with the current Motorized Shading test page. No new product pages or process gates are required.


