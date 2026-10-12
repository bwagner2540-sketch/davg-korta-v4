# DAVG V4 — Active service-page layout
Revision: 30 September 2026. This supersedes all prior 9-, 11- and 15-label rendered maps.

The ordered frame is:
1. Full-width architectural hero.
2. Full-width opening question and direct answer.
3. A bounded desktop middle: 25% Forest sticky rail and 75% editorial field.
4. Full-width Questions section, outside the middle.
5. Full-width project inquiry, outside the middle.

The middle has exactly five chapter groups and links: Overview #overview; Design #design; Systems #systems; Installation #installation; Investment #investment. Chapters contain as many meaningful subsections as the service needs. They do not impose fifteen screens, mandatory cards or sentence-length rail labels. FAQ questions stay in Questions and never become chapter names.

The eight service names remain in the rail. The current service is emphasized. Its five chapter links are nested immediately beneath that service inside its navigation item, before the next service. No detached 'On this page' block after all eight services. The single source for rail labels is `chapterNavigation` in `src/config/site.ts`.

Desktop uses `minmax(0,1fr) minmax(0,3fr)` before internal padding. The rail starts with Overview and its sticky lifetime ends at the bottom of Investment. The document owns vertical scrolling. Only the rail menu may scroll when cramped; the right field is not a second scrolling pane. Below 1024px the middle becomes one column with a compact disclosure menu; selecting an anchor closes the menu. Do not shrink wide comparison tables to fit mobile.

Shading placement:
- Overview: opening types, survey and window conditions.
- Design: fabric, privacy/darkness, layers, mounting, power/access coordination, then the RECESSED signature study.
- Systems: Triathlon/Sivoia QS/Palladiom hardware tabs, supported control platforms, keypads and room scenes.
- Installation: retrofit/remodel/custom-build coordination, trade responsibilities, handoff and the reserved verified-project proof slot.
- Investment: complete project scope, dependencies and delivery. No invented installed prices.

Hardware families, control platforms and Good/Better/Best project scopes are three separate comparisons. Palladiom is not an automatic quality or price endpoint. Power and wireless communication are separate facts.

The signature study is a live conceptual coordination drawing without claimed dimensions or measured performance. It does not replace a manufacturer/shop drawing or prove a completed DAVG project. Existing product photographs are retained and captioned as illustrations. Empty proof/keypad slots remain documented gaps, not invented evidence.

Local specimen source: `src/pages/solutions/motorized-shades.astro`. Its `/systems/motorized-shades/` alias imports the same component. The seven remaining service files use `ServiceDraft.astro` and current JSON; their richer studies/assets remain pending. Deployment of the temporary preview is now explicitly authorized; final service designs remain in progress.

Surface assignments are defined by DAVG-SURFACE-COLOR-SYSTEM.md. They do not change the layout, chapter names or service content. Forest in the 75% field is reserved for the designated study, not ordinary fabric comparisons.
