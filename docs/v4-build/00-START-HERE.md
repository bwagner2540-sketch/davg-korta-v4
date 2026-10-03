# DAVG V4 — Current build entry point
Revision: 30 September 2026 · repair based on checkpoint dc9ff37.

Work in the existing `bwagner2540-sketch/davg-korta-v4` checkout. Read `11-SYNC-CONTRACT.md`, `02-SERVICE-LAYOUT.md` and `BUILD-STATE.md`. Use `npm run dev` for local review and `npm run build:sandbox` for the local static check. `npm run build` is a public-release build and deliberately stops while no pages are approved.

The stable local review URL is http://127.0.0.1:4321/preview/. Refresh it after each local change. It is noindex and stays off the publication allowlist.

All eight service pages, including Motorized Shading, are one implementation. `HubPage.astro` reads `docs/v4-build/hubs/DAVG-V4-Hub-*.md` and places it in `ServicePageShell.astro`. `/solutions/<slug>/` is the git route. `/systems/<slug>/` renders the same page. None of these routes are on the production allowlist until the owner approves a release.

Active ownership:
- `docs/v4-build/hubs/DAVG-V4-Hub-*.md`: the only public words, section order, and routes.
- `02-SERVICE-LAYOUT.md` and `src/components/ServicePageShell.astro`: the one sticky 25/75 frame.
- `01-DESIGN-SYSTEM.md` and `src/styles/global.css`: visual tokens and typography.
- `13-SURFACE-COLOR-SYSTEM.md`: service-page surface roles.
- `src/config/site.ts`: the only ordered service list. Header, footer, and the rail read `services`.
- `src/config/publication.json`: explicit page-release allowlist.
- `11-SYNC-CONTRACT.md` / `BUILD-STATE.md`: source precedence and actual verification.

Everything under `archive/` and `v4-gpt-original-design/` is reference. Old 15-section maps, document 09's eleven labels and the nine-label starter cannot override these active files. Archived PDFs and spreadsheets are not current completion reports. Reference artwork does not establish dimensions, measured outcomes or project proof.

No push, merge or deployment is part of this repair. Workers Builds preview settings were not changed. Apply the patch locally first; report the resulting commit and verify it before claiming Cursor is synced.
