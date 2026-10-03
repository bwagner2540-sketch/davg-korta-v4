# DAVG V4 — Active service-page layout
Revision: 3 October 2026. One shell. The git hub is the page. The source index is `00-START-HERE.md`.

## Current frame — chapter grammar

This section is the live frame. The 25/75 Forest rail and the per-role padding below are the earlier repair. They are not the current paint.

1. Masthead: `src/components/korta/TopNav.astro`. Logo left, 36px. The phone number is the nav CTA and is repeated in `MenuPanel`. There is no utility bar above the masthead.
2. Rail: ink, `minmax(240px, 18%)`, sticky under the masthead. It is this page's chapter index. The eight services stay in a switcher that is closed until opened. Chapter labels are one line. The foot is `Chapter NN / NN` and one button. Certification lines are not in the rail.
3. Hero (section 01): ink. One H1 at `--text-h1`, max-width 14ch, caption under the photograph. The hero is the only bleeding photograph.
4. Chapters: `src/components/korta/Chapter.astro`. Same padding. Paper, except section 06 on each hub, which is the comparison chapter and is the one ink chapter. A chapter with one portrait or square image uses the aside slot. Other images sit in the chapter as one figure or a pair. Captions sit under the image.
5. One table is visible in a chapter. Any further table in that chapter is inside `details.k-more`, using its existing heading. Lists use `.k-list`.
6. FAQ (section 14) is a paper chapter. The inquiry (section 15) is ink and is not a second ink chapter.
7. Below 900px the rail is hidden and the chapter list is the disclosure in the main column.
8. Authoring notes (layout briefs, photo direction, rights, sourcing, `Caption:` and `Core lesson:` labels) stay in the hub markdown. The page renders `Caption` as the figure caption and `Core lesson` as the first paragraph, without those labels. Other notes are HTML comments.

Desktop frame that this grammar replaces:

1. Left column, 25%: Forest rail in `ServicePageShell.astro`. It is sticky for the whole service page. It lists the eight services. The current service is emphasized. Its chapter links are the `## 01 —` titles from that service's git hub, nested under the service. The rail menu scrolls when the list is taller than the viewport.
2. Right column, 75%: the git hub, in file order. Section 01, including the H1 and the hero media, is the first block in this column. Later sections follow. The inquiry form is inside section 15.
3. The document is the only vertical scroller. The right column is not a second scroll pane.
4. Below 1024px the rail becomes the shell's disclosure menu.

Use `grid-template-columns: minmax(0, 1fr) minmax(0, 3fr)` before internal padding. The right column uses the spacing scale in `src/styles/global.css` (`--page-gutter`, `--spacing-micro`, `--spacing-text`, `--spacing-component`, `--spacing-section`, and the measures). Those tokens are a scale. They are not a rule that every section receives the same padding.

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

## Presentation inside the field

`src/lib/hub-composition.mjs` tells `HubPage.astro` which surface, frame, study, catalog photograph, and product row belong to each section. It does not store a second copy of the prose. The git hub file still owns the words and the section order.

The frame is the composition, not a second copy of the chapter. A uniform Markdown loop — the same `hub-section` padding on every chapter — is rejected. `080a0b3` flattened the hubs into that loop. Surfaces and studies were added later, and the pages still read as repeated document sections. The frames below are the layout that replaces it.

| Frame | Where it applies | Composition |
|---|---|---|
| `opening` | Section 01 | No section padding. The git H1 and the hero photograph share one field. Type sits in a narrow column. The photograph bleeds to the right and bottom edges of the right column and carries its caption on the image. |
| `answer` | Section 02 | Quiet Paper band. Vertical padding is `--spacing-text`, not `--spacing-section`. Prose stays on the standard measure. |
| `moments` | Section 03 | Short reading measure, then a full-bleed room photograph when the catalog has one. Side inset is removed from the photograph. |
| `system` | Section 04 | Charcoal. The explanation stays on a readable measure. Tables break out to the column width as a ledger: mono header, hairline rows, horizontal scroll only when the table is wider than the field. A technical study, when present, is a Stone band under the ledger, not a card inside the same padding. |
| `study` | Section 05 | The git introduction is a short Paper measure. The signature study then changes surface: Forest-to-Ink, split plate, spatial word, annotated photograph or diagram at study scale. It is not an inset card under another padded heading. |
| `ledger` | Comparison sections whose content is the table | Same ledger treatment as system layers, on the section’s own surface. |
| `comparison` | Comparison sections that also have a photograph or product row | Headline column beside a large photograph, then the ledger and product row at field width. |
| `products` / `interfaces` | Interface and product sections | Product photographs align on a baseline. The first is larger. Contain-fit product shots sit on the field without a thumbnail border. An interface photograph, when that is the section image, occupies the opposite column from the headline. |
| `reading` / `quiet` / `detail` | Installation, pitfalls, handoff, proof, and detail | Tighter than a document section. Proof uses the narrow measure. A detail study is the Stone band, full width of the column. |
| `investment` | Section 12 | Stone. Headline and scope sit in two columns. |
| `questions` | Section 14 | Paper. Question headings are separated by hairlines. |
| `inquiry` | Section 15 | Ink, with more air than the chapters above it. The git close sits in one column and the inquiry form in the other. |

Surfaces follow `13-SURFACE-COLOR-SYSTEM.md`: hero and inquiry stay Ink, the opening answer and ordinary reading stay Paper, systems stay Charcoal, investment stays Stone, and the sticky rail stays Forest. The signature study is the only Forest-to-Ink passage, and it carries that hub’s spatial word (`CONTROL`, `LIGHTING`, `SHADES`, `MEDIA`, `CINEMA`, `SECURITY`, `NETWORK`, `OUTDOOR`) with the existing `.architectural-background-title` treatment. The parent chapter is not repainted Forest. The study plate is.

Body photographs come from `src/data/hubs/catalog.json` only when `src/data/images.json` has the file and the slot is a selected illustration. Hero slot 01 stays the opening photograph. Missing, withheld, and not-yet-substituted assets are not painted into the body. Studies reuse `HubStudies.astro`, including the shading specimen plates. A section without a matching photograph or study stays editorial type on its own frame. Do not put `--spacing-section` back on every `hub-section`.

The site header is `SiteNav`, from `src/config/navigation.ts`. Home Solutions items are `services` in the order above. Chapter links stay in the rail. The footer service list is `ServiceLinks`, from the same array.

## Visual repair — 3 October 2026

The source index above remains the shell contract. The rendering details below supersede the earlier frame descriptions where they differ:

- `HubPage.astro` keeps the one sticky frame and Git section order. The opening uses its existing photograph across the entire right-column field, with a contrast scrim and a wider headline measure. Answer and moments use opposing text columns; the room image bleeds across the field.
- `SectionBody.astro` and `src/lib/hub-presentation.mjs` present the existing Git HTML without rewriting its content. A section's primary comparison uses named editorial rows. Additional comparison matrices and long technical explanations are native details disclosures. Their entire contents and links remain in the built HTML. FAQ questions become individually operable disclosures. Installation, pitfalls and handoff use distinct step/list compositions.
- Section padding follows the composition, rather than reusing the text-gap token for every outside edge. Investment and detail use Stone; the remaining editorial passages remain Paper.
- A section with only internal project instructions has a hidden reserved anchor, no visible empty heading, and no chapter-menu item. Its source remains in Git for later verified project content.
- Home Intelligence's study uses the selected wall touchscreen once. The two remotes appear once in the product rail. Lighting uses its installed interface once in the signature study, rather than repeating the opening and room photographs.
- Shading restores existing solar-fabric and bedroom photographs to sections 03 and 07, plus the manufacturer fascia detail in section 09. The previous `available-not-substituted` state is not used to hide those restored selections. This does not add them as DAVG project proof.
- Figure captions use the asset title and a short manufacturer/conceptual attribution. Original review notes and rights status remain in the catalog, not visitor copy. The existing publication policy still applies.
- Global fonts, logo files, routes, copy source and hosting project are unchanged. The old mockups remain exploratory references; this repair does not declare their signature studies accepted.
