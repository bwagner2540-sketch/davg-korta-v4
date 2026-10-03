# Current Cursor source — service page structure

29 September 2026, Denver. This is the updated source pack. It supersedes the earlier pack's whole-page 25/75 shell and /solutions/ examples.

## Read this first

Keep the existing local Cursor project. Copy this pack into `docs/v4-build/` as reference/source input; merge its components and collection fields into the existing website rather than replacing the project.

The public service URLs are `/systems/<existing-hub-slug>/`. Hub names and existing slugs stay unchanged. The supplied route is `src/pages/systems/[slug].astro`; do not introduce competing /solutions/ routes or deploy an unverified legacy redirect map.

## Approved page frame

1. Full-width hero.
2. Full-width opening question and answer: the main homeowner problem and direct explanation.
3. A bounded 25% sticky Forest rail / 75% right reading field, starting at Overview and ending after Investment.
4. Full-width Questions.
5. Full-width project CTA/inquiry.

Full width means the page field; text still has a readable measure. It does not require every section to be a full viewport high.

## Exact sticky chapters — all eight pages

| Label | Anchor |
|---|---|
| Overview | #overview |
| Design | #design |
| Systems | #systems |
| Installation | #installation |
| Investment | #investment |

The left rail lists these five main chapters only. It is sticky inside the middle wrapper, so it naturally stops at the bottom of Investment. The browser document remains the sole main vertical scroller.

## Content placement

Overview introduces the service in the actual room/property context. Design contains the architectural decisions and signature system study; Systems contains product choices, comparisons, controls and daily-use examples.

Installation contains the relevant existing-home, remodel and custom-build scope and trade coordination. Investment contains complete scope comparisons and cost drivers.

Questions and the CTA are siblings after the split wrapper, not children of its right column. The opening question answers why the service matters; closing Questions resolve practical purchase concerns.

The JSON `groups` map each detailed chapter to one rail chapter. Every detailed chapter is rendered once; multiple compositions can live within one group.

## Visual direction and studies

Use document 11 for the composition vocabulary, image/tab anatomy and service-specific studies. Its older whole-page rail language is superseded by this contract; all middle-page compositions now live within the bounded split wrapper.

The signature study belongs in Design after the relevant room/material decisions and before Systems product selection. Give it dominant artwork, live text/callouts and a short verified ledger, rather than shrinking a complete annotated raster until it becomes illegible.

Shading's study currently belongs after fabric education and mounting coordination. The supplied recessed cutaway is a composition reference, not a source of verified dimensions or performance claims.

Triathlon / Sivoia / Palladiom tabs belong in the Systems group. Pre-render all text, reserve image space, and use an accessible enhancement so the section changes locally without creating a nested wheel-scroller.

Keep a short compare-all ledger visible. Product tabs hold the deeper explanation and images; investment scopes remain visible side by side for a meaningful comparison.

Retain the current typography, tokens and original logo. SHADES can mark the shading opening; RECESSED marks the matching study. Do not fabricate the remaining spatial-word set.

## Source responsibilities

- `src/content/services/`: canonical structured copy after integration, including opening Q&A, group mapping and exact navigation.
- `src/content.config.ts`: fields to merge into the existing collection configuration.
- `src/components/services/`: bounded page renderer, chapter renderer and layout CSS starter.
- `src/pages/systems/[slug].astro`: static route starter.
- `10-ALL-EIGHT-SERVICE-PAGES-CONTENT-AND-BUILD.md`: updated readable all-eight copy master.
- `11-EDITORIAL-LAYOUTS-STUDIES-AND-PROJECT-PATHS.md`: updated visual guidance.
- `references/`: older internal source material, not active shell/URL instructions.

The shared renderer implements the requested HTML grouping and sticky-wrapper boundaries. Final artwork, product galleries, interactive studies, existing-site chrome and the working form still need repository integration.

## Paste into Cursor

Read `docs/v4-build/DAVG-ALL-EIGHT-SERVICE-PAGES/00-START-HERE.md` (or the corresponding extracted path). Preserve this existing project and its current assets.

Update the Motorized Shades test page first. Put Hero and opening Q&A outside the split; create the five-group middle wrapper; stop the sticky rail after Investment; put Questions and the project inquiry full width below it.

Merge the JSON/schema fields and /systems/ route conventions. Reuse existing components where they work; apply the document 11 compositions inside the correct groups. Do not create a new Astro project or replace unrelated collection entries.

Run the content checks, the repository's normal build/type checks, and a desktop/mobile preview. Check the rail's start/end boundary, section anchors, active state, tab controls and actual form submission.
