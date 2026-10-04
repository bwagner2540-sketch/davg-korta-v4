# Component library

Revision: 30 September 2026. These sections are shared. A service page passes its own facts in. It does not copy another service's claims.

| Component | File | Use |
| --- | --- | --- |
| Site header | `src/components/korta/TopNav.astro` and `MenuPanel.astro` | Logo left. Phone and the Company / Home Solutions / Resources / Support links live in the menu. Home Solutions is the `services` order in `src/config/site.ts`. |
| Site footer | `src/components/ServiceLinks.astro` | The eight services, same order as the rail. |
| Chapter rail | `src/components/ServicePageShell.astro` | Sticky 25% Forest rail. Eight services from `services`. Chapter links are the git hub section titles for the active service. |
| Answer frame | `src/components/library/AnswerFrame.astro` | Thick black frame around a direct answer. Used in Questions. |
| Hover-card CTA | `src/components/library/HoverCardCta.astro` | Black squares at the end of a service page. The photograph appears on hover. Each card can set the inquiry path. |
| Comparison | `src/components/library/ComparisonSplit.astro` | Two-column before/after. Shading uses view-through against darkness. |
| Case study | `src/components/library/CaseStudy.astro` | Diptych study page. Specimen: `/company/our-work/`. Product photographs stay labeled as illustrations until a project record is cleared. |
| Hub page | `src/components/services/hubs/HubPage.astro` | Routed renderer for the eight git hubs inside `ServicePageShell.astro`. Architectural Lighting uses `LightingField.astro` and `src/styles/lighting.css`. The other hubs use `Chapter.astro`. `HubStudies.astro` is not mounted by this route. |

Home Solutions, the footer, and the left rail list all eight services from `services` in `src/config/site.ts`. The order is written in `02-SERVICE-LAYOUT.md`.

Do not fill these sections with uncleared prices, project counts, warranties, response times, or client quotes. The navbar mockup shows 720-638-1603. Business facts still record that number as one of three conflicting candidates, so it is displayed in the header and is not a confirmed LocalBusiness telephone.
