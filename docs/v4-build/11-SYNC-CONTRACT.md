# DAVG V4 — Shared build contract
Revision: 3 October 2026. Owner instruction: one shell, and the git hubs are the public copy.

The site Cloudflare serves is a git commit on the branch connected to that deploy. A file that exists only on a Mac, in Dropbox, or in an uncommitted checkout is not on the site. Commit and push the same branch the deploy builds.

## Source order
1. Current explicit user instructions.
2. This contract and `BUILD-STATE.md`.
3. `docs/v4-build/hubs/DAVG-V4-Hub-*.md` for the words, section order, and route of each service page.
4. `02-SERVICE-LAYOUT.md` and `ServicePageShell.astro` for the one page frame.
5. `01-DESIGN-SYSTEM.md` and `src/styles/global.css` for type, color, and spacing tokens.
6. `05-BUSINESS-FACTS.md` for unresolved business facts. `archive/`, `v4-gpt-original-design/`, `DAVG-ALL-EIGHT-SERVICE-PAGES/`, `hub-production-kit/`, and `src/data/services/*.json` are reference. They do not supply public copy and they do not replace the shell.

## The page
All eight services use `src/components/services/hubs/HubPage.astro`. It reads the git hub file at build time. The frame is the sticky 25/75 rail in `ServicePageShell.astro`, around the whole page, under the site header. Section 01 is the first block in the right column. `/solutions/<slug>/` is the route written in the hub file. `/systems/<slug>/` renders the same component so older links still open it.

Do not add a second renderer, a full-width hero outside the rail, or a rewritten JSON draft. A change to a service page is a change to its git hub file, or a change to the shared shell. It is not a new page design.

## Working rules
Inspect branch, head, and status before editing. Update this contract or `02-SERVICE-LAYOUT.md` when the frame or the copy source changes, and record the result in `BUILD-STATE.md`. Do not reset, force-push, or treat a passing build as a production deploy. `davg.ai` stays on its current production target until the owner says a page is ready to replace it.
