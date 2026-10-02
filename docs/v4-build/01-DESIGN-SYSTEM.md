# DAVG Korta V4 — Current design system

29 September 2026, token sample aligned to live CSS on 2 October 2026. User decisions override earlier implementation notes. This is not a closed component inventory.

The names and values in `src/styles/global.css` are canonical. The sample below matches that file. Do not replace them with screenshot measurements, with `docs/v4-build/starter/src/styles/v4-tokens.css`, or with `v4-gpt-original-design/`. Those sources are historical. IBM Plex Mono is explicitly retired. Do not reintroduce it from the starter, from `04-RECONCILIATION.md`, `08-SHADING-PAGE-EDITORIAL-REDESIGN.md`, `prompts/01-FIRST-HOUR.md`, or the hub manuscripts. Those files stay historical.

## 1. Color tokens

Use Ink, Forest, Paper and architectural photography as distinct fields. Forest is the brand primary color. It needs to be used in a way that sets it apart from the other colors and makes it stand out as the primary color. It should be used on the left sidebar, and as an accent color on other elements.

Canonical color names are `--color-text-primary-dark`, `--color-text-secondary-dark`, `--color-text-tertiary-dark`, `--color-text-primary-paper`, and `--color-text-secondary-paper`. Border alphas are 18% dark and 16% paper. Spatial-word alphas are 12% on ink and 14% on forest. The older pack names (`on-dark`, `muted`, `quiet`, `on-paper`, `spatial-dark`, `spatial-forest`) are aliases of those live values. They do not restore the retired 16%/14% borders, 10%/12% spatial alphas, or `--spacing-page-inline`.

```css
@theme {
  --color-surface-ink: #090B0A;
  --color-surface-forest: #183B31;
  --color-surface-paper: #EDE9E0;
  --color-cream-01: #F2EFE7;
  --color-cream-02: #EBE7DC;
  --color-cream-03: #E2DDCE;
  --color-text-primary-dark: #F1F0EB;
  --color-text-secondary-dark: #A7AAA5;
  --color-text-tertiary-dark: #7F847E;
  --color-text-primary-paper: #0B0D0C;
  --color-text-secondary-paper: #51544F;
  --color-accent-signal: #1A8F6E;
  --color-border-dark: rgb(241 240 235 / 18%);
  --color-border-dark-soft: rgb(241 240 235 / 10%);
  --color-border-paper: rgb(11 13 12 / 16%);
  --color-rule-accent: rgb(26 143 110 / 78%);
  --color-scrim-ink-soft: rgb(9 11 10 / 38%);
  --color-scrim-ink-strong: rgb(9 11 10 / 66%);
  --color-spatial-word-dark: rgb(241 240 235 / 12%);
  --color-spatial-word-forest: rgb(241 240 235 / 14%);
  /* Aliases. Same rendered colors as the canonical tokens above. */
  --color-text-on-dark: var(--color-text-primary-dark);
  --color-text-muted-dark: var(--color-text-secondary-dark);
  --color-text-quiet-dark: var(--color-text-tertiary-dark);
  --color-text-on-paper: var(--color-text-primary-paper);
  --color-text-muted-paper: var(--color-text-secondary-paper);
  --color-spatial-dark: var(--color-spatial-word-dark);
  --color-spatial-forest: var(--color-spatial-word-forest);
  --font-sans: "Instrument Sans Variable", "Instrument Sans", sans-serif;
  --font-display: "Schibsted Grotesk Variable", "Schibsted Grotesk", sans-serif;
  --font-body: "Instrument Sans Variable", "Instrument Sans", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --text-h1: clamp(2.5rem, 4.5vw, 4rem);
  --text-h1--line-height: 0.98;
  --text-h1--letter-spacing: -0.035em;
  --text-h1--font-weight: 400;
  --text-h2: clamp(2rem, 3vw, 2.75rem);
  --text-h2--line-height: 1.02;
  --text-h2--letter-spacing: -0.025em;
  --text-h2--font-weight: 400;
  --text-h3: clamp(1.5rem, 2.2vw, 2.25rem);
  --text-h3--line-height: 1.08;
  --text-h3--letter-spacing: -0.02em;
  --text-h3--font-weight: 400;
  --text-body: 1rem;
  --text-body--line-height: 1.5;
  --text-body-lg: 1.125rem;
  --text-body-lg--line-height: 1.45;
  --text-caption: 0.8125rem;
  --text-caption--line-height: 1.35;
  --text-mono: 0.6875rem;
  --text-mono--line-height: 1.35;
  --text-mono--letter-spacing: 0.1em;
  --container-measure-narrow: 42ch;
  --container-measure: 62ch;
  --container-measure-wide: 72ch;
  --container-content: 90rem;
  --spacing-micro: 0.5rem;
  --spacing-text: clamp(1.25rem, 2vw, 2rem);
  --spacing-component: clamp(1.5rem, 2.5vw, 2.5rem);
  --spacing-section: clamp(3rem, 6vw, 6rem);
  --spacing-gutter: var(--page-gutter);
}

/* Stepped gutter. Media queries live in global.css. Do not copy a clamp over this. */
:root { --page-gutter: 1.5rem; }          /* below 768px */
/* 768px */  :root { --page-gutter: 3rem; }
/* 1280px */ :root { --page-gutter: 4rem; }
```

This is CSS-first Tailwind 4. The live file is already `src/styles/global.css`. No `tailwind.config.js` migration is needed. Do not redefine Tailwind's default numeric spacing (`--spacing-1` and the rest); `p-4` is 16px, `p-6` is 24px, `p-24` is 96px, and `p-32` is 128px. Preserve installed versions and lockfile. The target is Astro 7 / Tailwind 4.

Utilities generated from these keys: `text-h1`, `text-h2`, `text-h3`, `text-body`, `text-body-lg`, `text-caption`, `text-mono`, `max-w-measure-narrow`, `max-w-measure`, `max-w-measure-wide`, `max-w-content`, and `py-section`. The shared frame class is `.folio` (`max-width: var(--container-content)` and `padding-inline: var(--page-gutter)`).

## 2. Typography

Active font system, restored 2 October 2026 in `src/styles/global.css`. Self-hosted. IBM Plex Mono is explicitly retired and is not part of the active design system. Do not load Google Fonts or IBM Plex.

| Role | Family | Working size / weight / tracking |
|---|---|---|
| H1 | Schibsted Grotesk | `text-h1`: 40–64px responsive; 400; −.035em; line-height 0.98 |
| H2 | Schibsted Grotesk | `text-h2`: 32–44px; 400; −.025em; line-height 1.02 |
| H3 | Schibsted Grotesk | `text-h3`: 24–36px; 400; −.02em; line-height 1.08 |
| Body | Instrument Sans | `text-body`: 16px; 400; line-height 1.5 |
| Emphasized body | Instrument Sans | `text-body-lg`: 18px; line-height 1.45 |
| Captions | Instrument Sans | `text-caption`: 13px; line-height 1.35 |
| Buttons / navigation | Instrument Sans | `text-caption` (13px) at weight 500; no extra tracking utility |
| Eyebrow / measurement / technical metadata | JetBrains Mono | `text-mono`: 11px; .1em; line-height 1.35 |
| Background word | Schibsted Grotesk | CSS still requests 300; solid, large, cropped, low opacity |

Do not typeset navigation, body copy or section titles like a terminal. Keep headings upright and sentence case. Display weights stay at 400. Pages use `text-h1`, `text-h2`, and `text-h3`, so the heading utilities and the base rules carry the same sizes. Do not set a page weight of 300. Installed variable faces start at 400, so 300 snaps to 400.

The installed Schibsted variable file covers weights 400–900 only. Instrument Sans variable covers 400–700. A `font-weight: 300` declaration therefore resolves to 400. The 300 target stays in the spatial-word rules only. No separate 300 cut exists in the self-hosted files. No `font-feature-settings` were present in the recovered CSS.

Foundation tokens, applied on the homepage and the shading page for type, measure, the `.folio` gutter, and section padding:

| Token | Value |
|---|---|
| Narrow measure | 42ch |
| Standard body measure | 62ch |
| Wider measure | 72ch |
| Content width | 90rem (1440px, current homepage folio) |
| Page gutter | `--page-gutter` on `:root`: 1.5rem / 3rem / 4rem at 768px and 1280px. `.folio` is the only frame. |
| Micro / text / component / section spacing | 0.5rem; clamp(1.25rem, 2vw, 2rem); clamp(1.5rem, 2.5vw, 2.5rem); clamp(3rem, 6vw, 6rem). Section vertical padding is `py-section` once. |

## 3. Spacing, radius and borders

Work on a 4/8px rhythm: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128. Desktop content insets typically 48–64px; mobile 20–24px. Headline/body gaps 20–32px. Technical rows 14–18px. Use 1px hairlines and 0–2px corners. Adjust these for the 75% content field; do not copy full-page padding blindly.

Allow long selection guides to breathe across multiple viewports. Dense chapters do not have to fit one screen. Background words should match the same light, filled, cropped treatment on Paper and green fields. Keep them away from readable text and controls. Scale them to the available field, not automatically the whole browser width.

The earlier compulsory six-column separation, 160px cushion, mobile ban and fixed section-number placement are retired as global rules. They may be useful locally. Keep at least an ordinary content interval between large word moments when using the earlier spaced rhythm. The service identifiers are recovered; remaining words can wait. Do not restore PROJECT/city fillers or mechanically stamp SYSTEM/CONCEALED/INVESTMENT across every page.

## 4. Components

Use the shared service shell, unboxed editorial text, full-width media, side-by-side comparison, selection table, image/text product study, annotated cutaway, specification ledger, native FAQ, investment scopes and inquiry form when the content needs them.

Reuse mechanics, not a forced universal page story. Media's speaker-count/TV/Atmos flow differs from Shading's fabric/hardware/power flow. Each hub's section map is authoritative for this build pass.

Prefer one clear primary action in a composition. A quieter supporting link can coexist. Keep architecture dominant. Devices or product images should explain a choice. Avoid default SaaS card grids, decorative pills, glow and stock lifestyle imagery. This is a visual direction, not a ban on every future layout or technique.

## 5. Layout

All eight service pages use the requested 25% sticky left rail / 75% right reading field on desktop. The right field scrolls vertically with the document. Its sections can be unboxed splits, wide photographs, comparisons, tables and studies. Mobile stacks into a readable single column with a compact service/chapter menu.

Homepage, About and Projects can use the horizontal magazine-style direction. Build a simple useful version first; the horizontal treatment is available, not a prerequisite for completing the service pages. No JS motion library is assumed. Native CSS and a small focused script can handle ordinary navigation and controls. Further motion is judged by its usefulness and does not require a separate Claude sign-off.

## 6. Reference reconciliation

The September 3 files guide Korta typography, paper/green/dark fields, architecture, comparisons and cutaways. The September 28 screenshots guide the sticky rail and scrolling editorial field. Use DAVG typography and colors instead of copying the reference's portrait, gold labels, social links or branding.

Raster mockups cannot establish font-file identity or exact product dimensions. Their rendered metrics and project claims are visual examples. Keep those numbers out of public claims until checked. Website controls use the restrained radius even when a photographed device has rounded UI. Blank media boxes are valid in the build preview.


