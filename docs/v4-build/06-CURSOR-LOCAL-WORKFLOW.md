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

## Motorized Shading is the live hub

The earlier “test page” role is retired. `/solutions/motorized-shades/` is the live Motorized Shading hub. Keep that route. Do not republish a second shades mockup, including `/_old/motorized-shades/`. The current content master still provides the fifteen-section sequence for later reconciliation. Implement further shading edits on the live hub in small batches. Cursor may continue creating the pages already underway; no new Claude or component approval process is required.

You do not need to pull GitHub just to get this content pack. Push code through your existing workflow when you are ready to deploy. Do not paste the first-hour prompt if it would restart work Cursor is already doing.


