# Local development and handoff

Keep the existing checkout. Inspect branch and status before editing. Read `00-START-HERE.md` for the files that own the change. Do not restart from `main` or from `archive/davg-history/`.

## Checks
`npm run dev` serves http://127.0.0.1:4321/ and hot-reloads. `npm run build:sandbox` writes `dist-sandbox/` with noindex headers. `npm run verify` checks the sandbox output. `npm test` runs `tests/*.test.mjs`. `npm run check` is available. `npm run build` is the public-release build. It stops while `src/config/publication.json` `approvedPages` is empty, and it does not write a deployable `dist/`. `wrangler.toml` deploys only `./dist` and its build command is `node scripts/assert-production.mjs`.

## After a change
Commit the intended change on the working branch and push it. Wait for the automatic Workers preview of that branch, then open the affected page and confirm the deployed commit. Record the URL in `docs/live-previews.md`. Return that same preview address on the next change.

If the preview does not publish, say it is stale and name the blocker. Do not point `docs/live-previews.md` at an older branch.

Preview deployments of this working branch are authorized. Production `davg.ai` is a separate release. Do not run `wrangler deploy` to production or to `davg.ai` unless the owner approves that release. Do not merge into `main` as part of a page edit.

## Local index
http://127.0.0.1:4321/preview/ lists the homepage and the eight hubs in the `services` order from `src/config/site.ts`. The page is noindex. It is not in `publication.json` and it is not in the sitemap.

At handoff report the branch, commit, uncommitted paths, checks, and whether the preview or production deploy actually happened.
