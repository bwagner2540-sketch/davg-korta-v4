# Pages and build order

Service layouts come first. The eight core hubs remain launch scope; you can preview one completed hub before the others are done. The following support-page anatomy is a working recommendation for this cleanup; current useful local copy takes precedence.

| Route | Page | What to implement |
|---|---|---|
| / | Homepage | Firm index: tagline, the eight hubs, territory, and the owner's contact lines. Constant page index in the forest rail. Not a shades mockup. |
| /solutions/ | Solutions index | Clear introduction and eight service entries with real labels and links; editorial rows rather than a forced card grid. |
| /solutions/home-intelligence/ | Home Intelligence | Use the 25/75 shell and its own hub master. |
| /solutions/architectural-lighting/ | Architectural Lighting | Use the 25/75 shell and its own hub master. |
| /solutions/motorized-shades/ | Motorized Shading | Use the 25/75 shell and its own hub master. |
| /solutions/media-audio/ | Media & Audio | Use the 25/75 shell and its own hub master. |
| /solutions/private-cinemas/ | Private Cinemas | Use the 25/75 shell and its own hub master. |
| /solutions/security-access/ | Security Cameras & Access Control | Use the 25/75 shell and its own hub master. |
| /solutions/infrastructure-privacy/ | Digital Infrastructure & Privacy | Use the 25/75 shell and its own hub master. |
| /solutions/outdoor-entertainment/ | Outdoor Entertainment | Use the 25/75 shell and its own hub master. |
| /contact/ | Begin a project | Form above the fold; project type, location, rooms/services, timeframe, message and optional plans if supported. Test destination and confirmation. |
| /support/ | Service and support | Separate current-system support from new-project inquiry; address, system and issue details; working service request form. Preserve or redirect /service-support/ if already used. |
| /about/ | About DAVG | Company, 2013 history, role and supplied credentials. No invented biography or required byline. |
| /projects/ | Selected work | Belcaro and Castle Rock only to the extent current records and photos support. Hide empty public proof. |
| /trade-partners/ | Trade partners | Builder/architect/designer coordination; planning inputs, drawings, prewire and handoff. Reuse current copy before expanding. |
| /design-build/ | Design and build | Project stages, decisions before framing, responsibilities, next step and a way to provide plans. |
| /service-areas/ | Areas served | Genuine territory list, including Parker and Castle Rock. Map can be added after layout. |
| /privacy-policy/ | Privacy | Current form data handling and contact path; use actual business practice. |
| /thank-you/ | Confirmation | Real submission confirmation; noindex. |
| 404 | Not found | Real 404 response with useful navigation. |

## Constant page index

Adopted 3 October 2026. Every public page renders `SiteIndex` (`data-site-index`) with Home and all eight hubs. The inventory is `src/data/page-inventory.json`. A layout change that omits the index is incomplete.

Do not delete a page, hub, route, or section unless the request names that removal. Record a named removal in `docs/v4-build/named-removals.md` and take it out of the inventory in the same change. `/solutions/motorized-shades/` is the live shading hub. The retired specimen route `/_old/motorized-shades/` stays unpublished.

## Deployment

`davg.ai` is the Cloudflare production domain for this repository. It currently serves the coming-soon page. Do not deploy this site there, and do not treat davg.ai as a different project. Brandon will remove coming soon and point Cloudflare at this site only after he says a page is structurally, design, and technically ready. Until then, review happens on a preview URL.

Do not create the future spoke/city/resource set now. Keep the original /solutions/motorized-shades/, /media-audio/, /security-access/ and /infrastructure-privacy/ route names from the recovered master unless the local project already has a deliberate redirect plan. /support/ follows Brandon’s recent QR destination; reconcile an existing /service-support/ route without breaking links.

## Save a small win

1. **Inspect local project; add pack; build shell and Shading 01–05** — Desktop rail stays put; real opening copy and blank media render.
2. **Build Shading 06–10** — Lutron/fabric/hardware/power guide and opening examples are complete.
3. **Build Shading 11–15 and mobile pass** — Proof slot, scope, FAQ and inquiry exist; mobile reads cleanly.
4. **Build 01–05, 06–10, 11–15 in separate batches** — Lutron platforms/keypads/layers/compatibility retained.
5. **Build its distinct product-led flow** — Speaker counts, Sonance/Triad, TV, Atmos and Control4 retained.
6. **Use the shell; keep the control education** — Scope, local/cloud, interfaces and takeover route retained.
7. **Build dedicated-room decisions and geometry** — Screen, seating, sound, treatment and Castle Rock record retained.
8. **Build network diagnosis and coverage** — ISP/Wi-Fi distinction, backhaul, rack/power and privacy retained.
9. **Build coverage, storage and entry decisions** — Privacy exclusions and permissions remain explicit.
10. **Build property-zone decisions** — Sound, TV exposure, light, weather and pathways retained.
11. **Finish the non-service routes in the Pages tab** — Every visible navigation link has a useful destination.
12. **Run project checks/build and preview deployment** — Routes, mobile, forms and stable media slots work.
13. **Add/hide media; confirm claims/contact; test production** — No empty public proof, failed forms or false claims.

## Release essentials

Build succeeds; routes and anchors work; mobile text/tables are readable; forms reach the actual destination with error/success feedback; contact values are consistent; empty proof is hidden or replaced; visible model/price/project claims are checked or omitted; metadata/canonical/sitemap/robots cover actual public routes. Use existing Cloudflare hosting. Advanced motion, CMS, city pages and exhaustive paperwork are later work.


