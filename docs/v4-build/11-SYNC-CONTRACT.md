# DAVG V4 — Shared build contract
Revision: 3 October 2026. The source index is `00-START-HERE.md`.

The site Cloudflare serves is a git commit on the branch connected to that deploy. A file that exists only on a machine, in Dropbox, or in an uncommitted checkout is not on the site. Commit and push the same branch the deploy builds.

## Source order
1. Current explicit user instructions.
2. `00-START-HERE.md`, this contract, and `BUILD-STATE.md`.
3. `docs/v4-build/hubs/DAVG-V4-Hub-*.md` for the words, section order, and route of each service page.
4. `02-SERVICE-LAYOUT.md` and `src/components/ServicePageShell.astro` for the one page frame. `src/components/services/hubs/HubPage.astro` is the renderer. Each hub keeps its own section order inside that frame. The frame is the Korta chapter grammar: ink TopNav, ink chapter rail at `minmax(240px, 18%)`, one `.k-ch` frame, paper chapters, and one ink comparison chapter.
5. `01-DESIGN-SYSTEM.md` and `src/styles/global.css` for type, color, and spacing. Live gutter is `--page-gutter`. Fonts are Schibsted Grotesk, Instrument Sans, and JetBrains Mono.
6. `05-BUSINESS-FACTS.md` for unresolved business facts.

`archive/davg-history/` is historical. It does not supply public copy and it does not replace the shell. `src/content/services/*.json` is loaded by `src/content.config.ts` and is not a routed page.

## The page
All eight services use `HubPage.astro`, including Architectural Lighting. It reads the git hub file at build time. The frame is `ServicePageShell.astro`: a sticky ink chapter rail beside the page, under `TopNav`. Section 01 is the ink hero in the main column. Later sections are chapters in `.k-ch`. `/solutions/<slug>/` is the route written in the hub file. `/systems/<slug>/` renders the same component so older links still open it. Do not mount a second lighting composition.

Do not add a second renderer, a full-width hero outside the rail, or a rewritten JSON draft. A change to a service page is a change to its git hub file, or a change to the shared shell when the frame itself changes.

## Working rules
Inspect branch, head, and status before editing. Update this contract, `00-START-HERE.md`, or `02-SERVICE-LAYOUT.md` when the frame or the copy source changes, and record the result in `BUILD-STATE.md`. The task steps are in `.cursor/rules/davg-v4-sync.mdc`. One writer per checkout. Do not reset or force-push. A passing build is not a production deploy. Preview deploys of the working branch are authorized. `davg.ai` stays on its current production target until the owner says a page is ready to replace it.

`10-ASTRO-ARCHITECTURE-AND-PREBUILD-AUDIT.md` describes a collections and MDX architecture. That remains proposed. Do not migrate to it from this contract.
