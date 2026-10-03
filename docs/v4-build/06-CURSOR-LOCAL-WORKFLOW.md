# Local development and handoff

Keep the existing local repo. Apply the supplied patch only after `git apply --check` succeeds; preserve unpublished work. Run `npm ci`, `npm run dev`, `npm run build:sandbox`, `npm run verify`, `npm run check` and `npm test` as applicable. The repair adds no production deploy script.

`build:sandbox` writes `dist-sandbox/`, adds noindex headers and disallows crawling. `build` uses a release allowlist and stages only approved page source files into an isolated build input; it cannot include a sandbox-only source. It currently fails before writing deployable output because no pages are approved. `wrangler.toml` still deploys only `dist/` and runs an output-policy check. Noindex is an additional draft signal, not the deployment safeguard.

Workers Builds remains connected. This patch does not change its dashboard settings. Keep the checkpoint local and do not push until the preview triggers are disabled/excluded as already required by the checkpoint handoff. Do not merge into main or publish a preview just to share source.

At handoff report the actual branch/head, uncommitted paths, rendered/build checks and deployment state. Do not call files synced based on a ZIP being saved or on a report from another environment.

## Local review surface

The stable review URL is http://127.0.0.1:4321/preview/. It lists the homepage and the eight hubs in the `services` order from `src/config/site.ts`. The page is noindex. It is not in `src/config/publication.json` and it is not in the sitemap. After each local change, the dev server (`astro dev --host 127.0.0.1 --port 4321`) hot-reloads; refresh that index. There is no public deploy of this page.
