# DAVG V4 — Active service-page layout
Revision: 30 September 2026. This supersedes all prior 9-, 11- and 15-label rendered maps.

The ordered frame is:
1. Full-width architectural hero.
2. Full-width opening question and direct answer.
3. A bounded desktop middle: 25% Forest sticky rail and 75% editorial field.
4. Full-width Questions section, outside the middle.
5. Full-width project inquiry, outside the middle.

The middle has exactly five chapter groups and links: Overview #overview; Design #design; Systems #systems; Installation #installation; Investment #investment. Chapters contain as many meaningful subsections as the service needs. They do not impose fifteen screens, mandatory cards or sentence-length rail labels. FAQ questions stay in Questions and never become chapter names.

The eight service names remain in the rail. The current service is emphasized. Its five chapter links are nested immediately beneath that service inside its navigation item, before the next service. No detached 'On this page' block after all eight services. The single source for chapter labels is `chapterNavigation` in `src/config/site.ts`.

`services` in `src/config/site.ts` is the only ordered list of the eight services. The header Home Solutions menu, the site footer, the sticky rail, `/systems/`, and the local preview index all read that array. Confirmed order, with the public list label (`railLabel`) and the full record name (`label`):

1. Home Intelligence — `home-intelligence`. List label and page name: Home Intelligence.
2. Media & Audio — `media-audio`. This is the media and entertainment hub. The public label stays Media & Audio.
3. Private Cinemas — `private-cinemas`.
4. Architectural Lighting — `architectural-lighting`.
5. Motorized Shading — `motorized-shades`. Local sandbox. The list label stays Motorized Shading. The shading page title in content stays Motorized Shades. Never publish.
6. Outdoor Entertainment — `outdoor-entertainment`.
7. Infrastructure & Privacy — `infrastructure-privacy`. This is the networking and Wi-Fi hub. The list label stays Infrastructure & Privacy. The page name stays Digital Infrastructure & Privacy.
8. Security & Access — `security-access`. The list label stays Security & Access. The page name stays Security Cameras & Access Control.

Header, footer, and rail show `railLabel` in that order. `/systems/` shows `label` from the same records.

Desktop uses `minmax(0,1fr) minmax(0,3fr)` before internal padding. The rail starts with Overview and its sticky lifetime ends at the bottom of Investment. The document owns vertical scrolling. Only the rail menu may scroll when cramped; the right field is not a second scrolling pane. Below 1024px the middle becomes one column with a compact disclosure menu; selecting an anchor closes the menu. Do not shrink wide comparison tables to fit mobile.

Shading placement, with the surface role for each passage:
- Hero, full width: Ink, with the architectural photograph.
- Opening answer, full width: Paper.
- Overview, right field: Paper. Opening types, survey and window conditions.
- Design, right field: Paper for fabric, privacy/darkness, the view-through comparison and ordinary mounting. The recessed plate is the only signature study, marked `data-signature-study`, and keeps the Forest-to-Ink treatment inside that component.
- Systems, right field: Charcoal. Three shade families, supported control platforms, keypads and room scenes.
- Installation, right field: Paper. Retrofit, remodel and custom-build paths.
- Investment, right field: Stone. Complete project scope, dependencies and delivery. No invented installed prices.
- Questions, full width: Paper. Inquiry, full width: Ink.

The rail stays Forest and does not repaint with the chapter. Draft services use the same roles and do not receive a placeholder study.

Hardware families, control platforms, and Good/Better/Best scopes stay three separate comparisons. Palladiom is not an automatic quality or price endpoint.

The reusable section library lives in `src/components/library/` and is catalogued in `12-COMPONENT-LIBRARY.md`. Service pages compose those sections. They do not each invent a new layout.

The signature study is the supplied recessed coordination plate in Design, marked `motorized-shades-04`. The plate is conceptual. Pocket size, drive, finish and solar logic on the artwork are not a universal specification and do not prove a completed DAVG project. The existing solar-versus-darkness comparison is the neutral study `motorized-shades-05` and stays on paper. Existing product photographs stay captioned as illustrations. Kit photographs were not substituted. Slots 06, 07 and 08 remain empty because those photographs are not permission-cleared project proof.

Local specimen source: `src/content/services/motorized-shades.json` rendered by `src/components/services/ServicePage.astro` at both `/systems/motorized-shades/` and `/solutions/motorized-shades/`. The seven draft service hubs use `HubPage.astro` with their JSON files. None of those seven are live collection entries. No public release is implied.

The site header is `SiteNav`, from `src/config/navigation.ts`. Home Solutions items are `services` in the order above. Chapter links stay in the rail. The footer service list is `ServiceLinks`, from the same array.
