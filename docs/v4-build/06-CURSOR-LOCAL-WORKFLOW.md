# Cursor uses your existing local project

Cursor should keep editing the local `davg-korta-v4` folder it already has open. Do not switch projects or restart the pages that are already being built.

- **Local Cursor project:** working website code and localhost preview.
- **GitHub `bwagner2540-sketch/davg-korta-v4`:** committed code used for deployment.
- **Dropbox `1 - DAVGai Master/00 - CURSOR BUILD - V4`:** current build references, copy, screenshot references and checklist.

Dropbox connection here lets Codex update Dropbox. It does not give Codex direct access to the project folder open in Cursor on your computer. A separate checkout made in this conversation is not your running localhost project. No competing page implementation from that checkout is being handed off.

## Add the references once

Download the current `DAVG-V4-Cursor-Build-Pack.zip` from the Dropbox build folder and extract its contents into `docs/v4-build/` inside the local project already open in Cursor. This adds reference documents; it does not replace files under `src/` or `public/`. The `starter/` directory contains optional examples, not replacement project files.

If your local project already has `docs/v4-build/`, replace only the corresponding reference pack files after retaining any notes you added. Keep current page code and locally created assets.

Then tell the running Cursor Agent to read `docs/v4-build/01-DESIGN-SYSTEM.md`, `02-SERVICE-LAYOUT.md` and the selected `hubs/` file, and continue the current build. Use the provided latest copy and screenshot references without discarding existing layout experiments. The September 28 rail references set the 25% sticky left / 75% vertically scrolling right service-page layout. The September 3 images guide the Korta visual language. Images can remain blank dimensioned rectangles.

## Motorized Shading is the test page

Use `/solutions/motorized-shades/` on your existing localhost server to test design, layout and implementation. The current content master provides the fifteen-section sequence. Implement it in useful small batches while keeping good work from the prototype. Cursor may continue creating the pages already underway; no new Claude or component approval process is required.

You do not need to pull GitHub just to get this content pack. Push code through your existing workflow when you are ready to deploy. Do not paste the first-hour prompt if it would restart work Cursor is already doing.

## Live revision check

Decision: adopted. A push to a branch other than `main` runs the GitHub Actions check **Verify live revision** (`.github/workflows/verify-live-revision.yml`).

`npm run build` stamps the git revision into `<meta name="davg-revision">` on the homepage and on every page that uses `BaseLayout.astro`, including the eight service hubs. Cloudflare Workers Builds publishes the branch to its preview alias. The check writes that review link in the Actions run summary, then polls `/` and each `/solutions/…/` hub until those public pages serve the pushed commit. The current link is the `Current review URL` line in `docs/live-previews.md`. The check reads the preview only. It does not deploy `davg.ai` or `https://davg-korta-v4.brandon-763.workers.dev/`. Branch preview builds add `noindex` and a `robots.txt` disallow. Production builds do not.


