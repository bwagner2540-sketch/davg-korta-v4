# Historical DAVG material

This directory is history. It is not the implementation authority for the site.

The current source index is `docs/v4-build/00-START-HERE.md`. Public service copy is `docs/v4-build/hubs/DAVG-V4-Hub-*.md`. Do not render, import, or replay the packs below. Do not treat a proposal here as a command to migrate routes, fonts, gutters, or chapter maps.

`.cursorignore` and `.rgignore` exclude this directory from Cursor context and routine `rg` searches. Those files do not block a direct path read or a runtime import. The hub loader glob stays on `docs/v4-build/hubs/DAVG-V4-Hub-*.md` only.

| Original path | Archive path | Reason | Current replacement |
|---|---|---|---|
| `v4-gpt-original-design/` | `archive/davg-history/v4-gpt-original-design/` | Early design pack. It is not the live token or copy source. | `docs/v4-build/01-DESIGN-SYSTEM.md` and `src/styles/global.css` |
| `docs/v4-build/starter/` | `archive/davg-history/starter/` | One-time starter components, including a clamped gutter and IBM Plex token file. | `src/components/ServicePageShell.astro`, `src/styles/global.css` |
| `docs/v4-build/prompts/` | `archive/davg-history/prompts/` | One-time onboarding prompts. The first-hour prompt told agents to install IBM Plex Mono and copy the starter. | `docs/v4-build/06-CURSOR-LOCAL-WORKFLOW.md` and `.cursor/rules/davg-v4-sync.mdc` |
| `docs/v4-build/DAVG-ALL-EIGHT-SERVICE-PAGES/` | `archive/davg-history/davg-all-eight-service-pages/` | Duplicate service-page pack and JSON drafts. Not imported by `src/`. | `docs/v4-build/hubs/DAVG-V4-Hub-*.md` and `src/components/services/hubs/HubPage.astro` |
| `docs/v4-build/hub-production-kit/` | `archive/davg-history/hub-production-kit/` | Duplicate content masters and contracts. The kit contracts still name IBM Plex and a clamped `--spacing-page-inline`. | Git hubs, `01-DESIGN-SYSTEM.md`, `src/styles/global.css` |
| `docs/v4-build/content-additions/` | `archive/davg-history/content-additions/` | GBB addition prompts. Not reapplied in this cleanup. | Wording already present in each git hub stays in that hub file. Unresolved prices, proof, and phone stay in `docs/v4-build/05-BUSINESS-FACTS.md`. |
| `docs/v4-build/archive/` | `archive/davg-history/docs-v4-build-archive/` | Checkpoint `dc9ff37` and its copies of the briefs above. | `docs/v4-build/00-START-HERE.md` |
| `docs/v4-build/HUB-BUILD-QUEUE.md` | `archive/davg-history/HUB-BUILD-QUEUE.md` | One-time rebuild prompt. The body still told agents to build from the kit and JSON. | `docs/v4-build/02-SERVICE-LAYOUT.md` and the git hubs |
| `docs/v4-build/HUB-PROGRESS.md` | `archive/davg-history/HUB-PROGRESS.md` | 30 September progress log. Its “do not push” line is not the current preview rule. | `docs/v4-build/BUILD-STATE.md` |
| `docs/v4-build/section-manifest.json` | `archive/davg-history/section-manifest.json` | Duplicate chapter map. No loader reads it. | Section order inside each `docs/v4-build/hubs/DAVG-V4-Hub-*.md` |
| `docs/v4-build/archive-manifest.json` | `archive/davg-history/archive-manifest.json` | Dropbox move log from an earlier archive pass. | This README |
| `src/data/services/` | `archive/davg-history/src-data-services/` | JSON drafts. No page imports them. | The matching git hub file |

Shading briefs `08` and `09`, and the GBB map `07`, stay in `docs/v4-build/` as short status notes. Their full historical text is under `archive/davg-history/docs-v4-build-archive/checkpoint-dc9ff37/`. Do not replay those chapter maps onto the live pages.

`src/content/services/motorized-shades.json` remains because `src/content.config.ts` loads that directory. No routed page renders it. It is not public copy.
