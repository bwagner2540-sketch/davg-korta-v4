# DAVG V4 — Current build entry point
Revision: 30 September 2026 · repair based on checkpoint dc9ff37.

Work in the existing `bwagner2540-sketch/davg-korta-v4` checkout. Read `11-SYNC-CONTRACT.md`, `02-SERVICE-LAYOUT.md` and `BUILD-STATE.md`. Use `npm run dev` for local review and `npm run build:sandbox` for the local static check. `npm run build` is a public-release build and deliberately stops while no pages are approved.

The Motorized Shading sandbox is one implementation rendered at both `/systems/motorized-shades/` and `/solutions/motorized-shades/`. The live copy is `src/content/services/motorized-shades.json` with `src/components/services/ServicePage.astro`. Neither route may be published, including a Cloudflare preview. Keep the specimen current with approved decisions; do not replace it with an archived starter.

Architectural Lighting is a draft rendered by `src/components/services/hubs/HubPage.astro` from `src/data/services/architectural-lighting.json`. It is not a collection entry and it is not approved for release. The other six `/systems/` routes remain `ServiceDraft` drafts until their hub pass. A route existing is not a finished page.

Active ownership:
- `01-DESIGN-SYSTEM.md`: visual tokens and typography.
- `13-SURFACE-COLOR-SYSTEM.md`: service-page surface roles. It replaces the previous two-surface addendum, including any forced dark/cream ratio, consecutive-cream limit, brass accent or conversion claim.
- `02-SERVICE-LAYOUT.md`: full-width openings/closings, five chapters and nested navigation.
- `src/content/services/motorized-shades.json`: live shading copy. The other seven services stay in `src/data/services/*.json` as drafts, not collection entries. Architectural Lighting is rendered by `HubPage`; progress is `HUB-PROGRESS.md`.
- `src/config/site.ts`: names, URLs and contact configuration.
- `src/config/publication.json`: explicit page-release allowlist, empty today.
- `src/components/services/ServicePage.astro`: integrated shading specimen, used by both shading routes.
- `11-SYNC-CONTRACT.md` / `BUILD-STATE.md`: source precedence and actual verification.

Everything under `archive/` and `v4-gpt-original-design/` is reference. Old 15-section maps, document 09's eleven labels and the nine-label starter cannot override these active files. Archived PDFs and spreadsheets are not current completion reports. Reference artwork does not establish dimensions, measured outcomes or project proof.

No push, merge or deployment is part of this repair. Workers Builds preview settings were not changed. Apply the patch locally first; report the resulting commit and verify it before claiming Cursor is synced.
