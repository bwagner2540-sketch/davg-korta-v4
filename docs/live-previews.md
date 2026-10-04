# Live preview

Current review URL: https://cursor-git-hub-source-13db-davg-korta-v4.brandon-763.workers.dev/

That address is the Workers branch preview for `cursor/git-hub-source-13db`. Workers Builds updates it when this branch is pushed. The deployed commit is the `davg-revision` meta on the homepage and on each hub. Affected pages include `/` and `/solutions/<slug>/` (the `/systems/<slug>/` alias is the same page).

Verified 4 October 2026: Architectural Lighting and the branch preview served revision `4e8f8a73ca2f49bff9e7e9e9db083c33044f1baf`. For later page edits, run `npm run preview:deliver -- /solutions/<affected-slug>/` and give Brandon the page URL and revision it prints. That command exits nonzero if the preview is stale. The revision recorded here is a historical observation; the public `davg-revision` is the live check. Production was not updated.

`/preview/` is the review index for this same host. Its relative links stay on the preview being reviewed. The phone-width review displays this host's built HTML in a 390px frame (375px usable width with Chrome's scrollbar); choose a page to inspect its actual responsive layout without opening another deployment. The anti-framing security header is unchanged.

`https://cursor-eight-hubs-homepage-c8d7-davg-korta-v4.brandon-763.workers.dev` is a different branch. Do not review this work there.

`https://davg-korta-v4.brandon-763.workers.dev/` is the Worker production host. It is not this branch preview. `davg.ai` is the coming-soon site. Do not deploy either from a page edit.
