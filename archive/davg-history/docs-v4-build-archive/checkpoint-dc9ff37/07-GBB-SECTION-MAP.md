# DAVG V4 — Place the cleaned GBB content

29 September 2026. Adapted from **Claude GBB Refined 6.7.pdf** for the existing Cursor build.

## Start here

Use the PDF’s comparisons inside the existing eight service pages. Its proposed product URLs do not replace the V4 site map. The PDF is a source document, not a deployment instruction or a list of new pages to build.

Copy `content-additions/gbb/` into the local Cursor project’s `docs/v4-build/content-additions/gbb/`, and copy this file to `docs/v4-build/07-GBB-SECTION-MAP.md`. Then paste the supplied `CURSOR-IMPLEMENT.md` prompt into the Cursor conversation already building the site. Start with Motorized Shading. No GitHub pull, new project, or code reset is needed to use this content.

The per-page Markdown files are easy to review. `gbb-sections.json` contains exactly the same public copy plus route, section and placement metadata. Publish only the `public` fields. Use the existing components; the JSON is content, not a command to replace the application’s architecture.

## Exact placement

| PDF topic | Existing page | Section / action |
|---|---|---|
| Lutron Ecosystem Hub | `/solutions/architectural-lighting/` | 04 — Fixtures, loads, scenes and control; lutron-connected-light-and-shade |
| Lutron Lighting | `/solutions/architectural-lighting/` | 06 — Choose a Lutron platform and keypad; lutron-platforms |
| Control4 Lighting | `/solutions/architectural-lighting/` | 06 — Choose a Lutron platform and keypad; lighting-control-architectures |
| HomeWorks QSX | `/solutions/architectural-lighting/` | 12 — What changes lighting investment?; homeworks-project-scopes |
| Motorized Shading | `/solutions/motorized-shades/` | 06 — Choose fabric, form and Lutron family; shade-design-paths |
| Control4 Hub | `/solutions/home-intelligence/` | 06 — Choose the Control4 system scope; control4-project-scopes |
| Control4 Interfaces & Voice | `/solutions/home-intelligence/` | 07 — Interfaces and household use cases; household-interfaces |
| Sonos Whole-Home Audio | `/solutions/media-audio/` | 06 — Which speaker type, and why Sonance or Triad?; sonos-audio-paths |
| Control4 Audio & Entertainment | `/solutions/media-audio/` | 10 — What does Control4 do for TV and music?; control4-entertainment-scenes |
| Media Rooms | `/solutions/media-audio/` | 12 — What changes the investment?; media-room-scopes |
| Private Cinemas | `/solutions/private-cinemas/` | 07 — Cinema capabilities by room brief; cinema-room-scopes |
| Security & Surveillance | `/solutions/security-access/` | 06 — Choose events, cameras and credentials; security-recording-options |
| Security & Surveillance | `/solutions/security-access/` | 12 — What changes security investment?; security-property-scopes |
| Networking & Infrastructure | `/solutions/infrastructure-privacy/` | 12 — What changes network investment?; network-project-scopes |
| Outdoor Entertainment | `/solutions/outdoor-entertainment/` | 12 — What changes outdoor investment?; outdoor-project-scopes |
| Trade Partner — Builder & Designer | `/trade-partners/` | workflow — Project coordination / ways to work together; trade-coordination-paths |

## How to merge into the existing sections

Use section title and topic if the current test page has fewer than fifteen chapter wrappers. The IDs above describe the approved content flow; they do not require fifteen new full-screen blocks. Do not renumber or delete existing chapters just to match these numbers.

Replace a matching comparison when one already exists. Otherwise add the module at the specified point within the section. Do not show the old table and the new comparison twice. Keep the selection depth that the PDF lacks: fabric and treatment choices; fixture/driver compatibility; speaker count; TV selection; Atmos; cinema geometry; camera privacy; network behavior; outdoor exposure.

Each comparison stays inside the 75% right field. Use an unboxed heading and introduction, three clear columns on desktop, and stacked choices on mobile. Use fine dividers, ordinary body text and the current typography. If three columns feel cramped in the local implementation, stack them or use rows. Keep square-edged media placeholders where imagery is planned; these comparisons do not require images to ship in a preview.

Use project-fit names in the public headings rather than treating every decision as Good / Better / Best. The useful GBB progression remains where scope grows. Interfaces, storage and product ecosystems are choices that may coexist; they are not automatic quality rankings.

## What was cleaned up

- Folded the PDF’s product spokes into the eight current service pages, with one trade-partner module.
- Removed internal SEO/GEO scores, search-volume claims, keyword instructions and AI-ranking promises from public copy.
- Removed unsupported percentages, performance absolutes, THX/DCI certification promises, and universal brand rankings.
- Kept Lutron, Control4 and Sonos names where they explain a real choice. Other source brands can be selected later against the actual equipment brief; they are not assumed packages or DAVG dealer credentials.
- Removed the stale Control4 Gold badge and unestablished DAVG OS / 24-hour support language. This add-on makes no new dealer-status claim.
- Corrected the idea that Josh.ai needs no wake phrase. The public copy describes voice as an optional interface, without promising behavior across all models.
- Separated shade power from wireless communication and allowed wired or wire-free Palladiom where appropriate.
- Removed the PDF’s fixed price figures because their inclusions, installation conditions and recurring costs were not defined.

Pricing is optional for this build pass. If DAVG has a current installed range it wants to publish, add it with the scope and inclusions. Otherwise these comparisons work as written. This is not a pricing-approval gate or a reason to delay layout.

## Small wins checklist

- [x] Motorized Shading: replace Section 06’s family comparison and review the localhost test page. Applied 30 September 2026 inside document 09 chapter 4 (“Choose how the shade meets the architecture”), not as a fifteenth standalone chapter. Public copy only.
- [ ] Architectural Lighting: merge Sections 04, 06 and 12.
- [ ] Media & Audio: merge Sections 06, 10 and 12.
- [ ] Home Intelligence: merge Sections 06 and 07.
- [ ] Private Cinemas: merge Section 07.
- [ ] Security & Access: merge Sections 06 and 12.
- [ ] Infrastructure & Privacy: merge Section 12.
- [ ] Outdoor Entertainment: merge Section 12.
- [ ] Trade Partners: add the coordination module once.

For each win: review the copy in context, check the narrow/mobile layout, and run the existing project’s normal check/build commands when implemented. Save the work already in Cursor. Brand/design review happens on the test page, not through a new pre-build workflow.


