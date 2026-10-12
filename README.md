# DAVG Korta V4

Working repository: bwagner2540-sketch/davg-korta-v4. Current source index: `docs/v4-build/00-START-HERE.md`.

```sh
npm ci
npm run dev
npm run build:sandbox
npm run verify
npm run check
npm test
npm run test:publication
```

Service pages render `docs/v4-build/hubs/DAVG-V4-Hub-*.md` at `/solutions/<slug>/`. `/systems/<slug>/` is the same page. `archive/davg-history/` is historical and is not a build input.

`npm run build` is the guarded public build. It stops while `src/config/publication.json` `approvedPages` is empty. `dist-sandbox/` is separate from Wrangler's `dist/`. Preview deploys of the working branch are authorized. Production `davg.ai` stays on its current target until a release is approved. Do not `wrangler deploy` to production from a page edit.

See `docs/v4-build/BUILD-STATE.md` for checks and remaining release facts. See `worker/README.md` for the separate inquiry Worker.
