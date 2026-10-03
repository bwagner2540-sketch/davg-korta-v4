# Live preview

Current review URL: https://cursor-git-hub-source-13db-davg-korta-v4.brandon-763.workers.dev/

That address is the Workers branch preview for `cursor/git-hub-source-13db`. Workers Builds updates it when this branch is pushed. The deployed commit is the `davg-revision` meta on the homepage and on each hub. Affected pages include `/` and `/solutions/<slug>/` (the `/systems/<slug>/` alias is the same page).

Verified 3 October 2026 after the chapter-grammar conversion: `/`, `/solutions/architectural-lighting/`, `/systems/architectural-lighting/`, and `/solutions/home-intelligence/` serve `davg-revision` `9ddf1e05a951f8e02a3d48582455aad6c945cc4e`. The live hub HTML has the ink chapter rail, one masthead, and chapter frames. Production was not updated. Verification details are recorded in `docs/v4-build/BUILD-STATE.md`.

`/preview/` is the review index for this same host. Its relative links stay on the preview being reviewed. The phone-width review displays this host's built HTML in a 390px frame (375px usable width with Chrome's scrollbar); choose a page to inspect its actual responsive layout without opening another deployment. The anti-framing security header is unchanged.

`https://cursor-eight-hubs-homepage-c8d7-davg-korta-v4.brandon-763.workers.dev` is a different branch. Do not review this work there.

`https://davg-korta-v4.brandon-763.workers.dev/` is the Worker production host. It is not this branch preview. `davg.ai` is the coming-soon site. Do not deploy either from a page edit.
