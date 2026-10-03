# DAVG V4 — Active service-page layout
Revision: 3 October 2026. One shell. The git hub is the page. The source index is `00-START-HERE.md`.

Desktop frame, under the existing site header:

1. Left column, 25%: Forest rail in `ServicePageShell.astro`. It is sticky for the whole service page. It lists the eight services. The current service is emphasized. Its chapter links are the `## 01 —` titles from that service's git hub, nested under the service. The rail menu scrolls when the list is taller than the viewport.
2. Right column, 75%: the git hub, in file order. Section 01, including the H1 and the hero media, is the first block in this column. Later sections follow. The inquiry form is inside section 15.
3. The document is the only vertical scroller. The right column is not a second scroll pane.
4. Below 1024px the rail becomes the shell's disclosure menu.

Use `grid-template-columns: minmax(0, 1fr) minmax(0, 3fr)` before internal padding. Spacing inside the right column uses `--page-gutter` and `--spacing-section` from `src/styles/global.css`.

Public words, section order, and the `/solutions/<slug>/` route come from `docs/v4-build/hubs/DAVG-V4-Hub-*.md`, rendered only by `HubPage.astro`. `/systems/<slug>/` is the same page. Do not render `archive/davg-history/src-data-services/` or `src/content/services/*.json`.

This replaces the 30 September frame that put a full-width hero and a full-width answer outside a five-chapter middle.

`services` in `src/config/site.ts` is the only ordered list of the eight services. The header Home Solutions menu, the site footer, the sticky rail, `/systems/`, and the local preview index all read that array. Each `href` is `/solutions/<slug>/`. Confirmed order, with the public list label (`railLabel`) and the full record name (`label`):

1. Home Intelligence — `home-intelligence`. List label and page name: Home Intelligence.
2. Media & Audio — `media-audio`. This is the media and entertainment hub. The public label stays Media & Audio.
3. Private Cinemas — `private-cinemas`.
4. Architectural Lighting — `architectural-lighting`.
5. Motorized Shading — `motorized-shades`. Same shell and git hub as the other seven. The list label stays Motorized Shading. Not on the production allowlist.
6. Outdoor Entertainment — `outdoor-entertainment`.
7. Infrastructure & Privacy — `infrastructure-privacy`. This is the networking and Wi-Fi hub. The list label stays Infrastructure & Privacy. The page name stays Digital Infrastructure & Privacy.
8. Security & Access — `security-access`. The list label stays Security & Access. The page name stays Security Cameras & Access Control.

Header, footer, and rail show `railLabel` in that order. `/systems/` shows `label` from the same records.

Wide comparison tables stay in a horizontal scroller on small screens. Do not shrink the type to fit every column.

The rail stays Forest on every chapter. Do not invent installed prices. Hardware families, control platforms, and Good/Better/Best scopes stay separate comparisons. Palladiom is not an automatic quality or price endpoint. Photographs stay captioned as illustrations unless a project record is cleared. The shading story in the git hub is the shading page.

All eight hubs, including shading, use `HubPage.astro` and the git hub file. `ServicePage.astro` is not routed. The old JSON drafts are in `archive/davg-history/src-data-services/`. No public release is implied. The production allowlist stays empty until the owner approves a page.

The site header is `SiteNav`, from `src/config/navigation.ts`. Home Solutions items are `services` in the order above. Chapter links stay in the rail. The footer service list is `ServiceLinks`, from the same array.
