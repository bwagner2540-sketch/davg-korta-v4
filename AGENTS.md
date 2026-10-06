# AGENTS.md

## DAVG V4 shared sources
For DAVG V4 work, read `docs/v4-build/11-SYNC-CONTRACT.md` and `docs/v4-build/BUILD-STATE.md`.
Use their active source order; preserve current local work and existing project guidance.
Update the affected active specification and implementation record with each substantive change.
Report the exact branch/commit or uncommitted state, checks and deployment status.
Do not infer implementation or synchronization from a saved document.

## Cloud Agent development

`npm ci` installs dependencies from `package-lock.json`. It is idempotent. The dev server is `npm run dev -- --host 0.0.0.0 --port 4321` at http://localhost:4321/. `npm run build` writes the static site to `dist/`.

Routes that exist today are `/` and `/solutions/motorized-shades/`. Other solution links are not pages yet.

`npm ci` may print an `EBADENGINE` warning because `undici` asks for Node >=22.19 while the default image is Node 22.14. Install, `astro dev`, and `astro build` still complete on that Node version. No Cloudflare login or secrets are required for local dev or the static build.
