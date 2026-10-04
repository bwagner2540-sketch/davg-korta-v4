# AGENTS.md

## DAVG V4 shared sources
For DAVG V4 work, read `docs/v4-build/00-START-HERE.md`, `docs/v4-build/11-SYNC-CONTRACT.md`, and `docs/v4-build/BUILD-STATE.md`.

The eight service pages take their public copy from `docs/v4-build/hubs/DAVG-V4-Hub-*.md`. `src/components/services/hubs/HubPage.astro` renders that file inside `src/components/ServicePageShell.astro`: TopNav, the ink chapter rail, and one chapter frame. Each hub keeps the section order in its own markdown file. Cloudflare publishes a git commit. Uncommitted files are not the site.

`archive/davg-history/` is historical and is not an instruction. Do not render `src/content/services/*.json` or another rewritten hub. Do not add a second page frame.

Update the affected active specification and `BUILD-STATE.md` with each substantive change. The task workflow lives in `.cursor/rules/davg-v4-sync.mdc`. One writer per checkout. Report the branch, commit, checks, and whether the result is a preview or production.

For any visible page change, after checks and commit run `npm run preview:deliver -- /actual/affected/route/`. It pushes the working preview branch and waits for the exact commit to appear on the live route. Begin the final response with the printed page link and revision. A failed command means the preview is stale; include its actual error instead of claiming delivery.
