# Live preview

Current review URL: https://cursor-cloudflare-page-revision-link-d2b5-davg-korta-v4.brandon-763.workers.dev/

That address is the Workers branch preview for `cursor/cloudflare-page-revision-link-d2b5`. Workers Builds updates it when this branch is pushed. The deployed commit is the `davg-revision` meta on `/` and on each service hub.

Pushes to a branch other than `main` run the GitHub Actions check **Verify live revision**. The check writes this review link in the run summary immediately, then waits until the homepage and the eight service pages serve the pushed commit. Green means Cloudflare served that revision. The check only reads the preview. It does not deploy production.

`https://davg-korta-v4.brandon-763.workers.dev/` is the Worker production host. `https://davg.ai` is the public site. Neither is this review link.
