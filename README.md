# DAVG Korta V4

Working repository: bwagner2540-sketch/davg-korta-v4. Current instructions: docs/v4-build/00-START-HERE.md. Repair is based on uploaded checkpoint dc9ff37; no remote push or deployment.

```sh
npm ci
npm run dev
npm run build:sandbox
npm run verify
npm run check
npm test
npm run test:publication
```

The local shading specimen stays at /solutions/motorized-shades/. /systems/motorized-shades/ renders the same source. Other /systems/ pages are content/layout drafts, not visually finished services. Never deploy this sandbox, including a Cloudflare preview.

`npm run build` is a guarded public build: it intentionally stops with an empty approval list. `dist-sandbox/` is separate from Wrangler's `dist/`. No production page is approved by this repair.

See docs/v4-build/BUILD-STATE.md for verified work and remaining release facts. See worker/README.md for the separately configured inquiry endpoint.
