# AGENTS.md

## DAVG V4 shared sources
For DAVG V4 work, read `docs/v4-build/11-SYNC-CONTRACT.md` and `docs/v4-build/BUILD-STATE.md`.

The eight service pages have one public copy: `docs/v4-build/hubs/DAVG-V4-Hub-*.md`. One renderer reads it: `src/components/services/hubs/HubPage.astro`. One frame wraps it: the sticky 25/75 rail in `src/components/ServicePageShell.astro`. Cloudflare publishes a git commit. Uncommitted Mac or Dropbox files are not the site.

Do not render `src/data/services/*.json` or another rewritten hub. Do not add a second page frame. Update the affected active specification and `BUILD-STATE.md` with each substantive change. Report the branch, commit, checks, and whether the result is a preview or production.
