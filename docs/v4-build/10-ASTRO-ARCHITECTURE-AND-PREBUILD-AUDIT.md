# Technical foundation — implementation and limits

Status, 3 October 2026: the adopted site is static Astro routes, `HubPage.astro`, and the git hubs in `00-START-HERE.md`. Content Collections, MDX, and JSON-as-public-copy in this audit are proposed. They are not a command to migrate. The paragraphs below are the 30 September audit record.



Adopted: standalone static Astro routes; shared components; CSS-first Tailwind 4; build-time JSON content records; no CMS or mandatory MDX migration. Dependency major versions are preserved. The Cloudflare SSR adapter is no longer invoked for a static asset site; the installed adapter package is retained for future evaluation. The inquiry Worker is separate from static editorial output.

Implemented foundations: shared SeoHead (title/description, draft indexing control, public canonical/Open Graph/Twitter slots); conditional Organization/Service/BreadcrumbList generator using verified config; source 404; `/systems/` index and eight draft service routes; robots and sitemap endpoints filtered by release state; self-hosted approved fonts; image dimensions/srcset/sizes and generated WebP sizes; asset headers; guarded production builds; inquiry email composer plus tested server-delivery Worker.

Drafts emit no public canonical/social/business graph. A sitemap never lists drafts. Google discontinued FAQ rich results beginning 7 May 2026, confirmed in its documentation updates. Keep useful visible answers; adding FAQPage markup is not a Google rich-result priority. No special AEO schema, CMS, llms.txt or thin city-page expansion is required. Page text, internal links, real evidence and accurate crawlable public pages remain the foundation.

Still unresolved: public phone, approved homepage, cleared photos/logo/social artwork and project proof, unique visual studies on the other seven drafts, final HubSpot destination/field map and secrets, deployed endpoint and end-to-end delivery test, approved legal/privacy handling, real deployment performance/Search Console checks, actual legacy 301 import from the verified migration register. No external setting or production test is claimed done.

Sources: https://developers.google.com/search/updates ; https://developers.google.com/search/docs/appearance/ai-features ; https://developers.cloudflare.com/turnstile/get-started/server-side-validation/ ; https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/ ; https://developers.hubspot.com/docs/api-reference/legacy/marketing/forms/guide .
