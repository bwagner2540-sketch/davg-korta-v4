# DAVG Korta V4 — Active visual system
Revision: 30 September 2026.

Current tokens live in `src/styles/global.css`, with CSS-first Tailwind 4 `@theme`. Ink #090B0A; Forest #183B31; Paper #EDE9E0; signal #1A8F6E. Preserve the cream variants and existing text/rule aliases. No Tailwind config migration or framework upgrade is required.

Self-hosted display: Schibsted Grotesk Variable. Body, controls and navigation: Instrument Sans Variable. Selective factual labels: IBM Plex Mono 400/500 through `@fontsource/ibm-plex-mono`. The prior JetBrains import and dependency are removed. IBM is not a mandatory eyebrow on every section. Do not typeset the navigation like a terminal.

Display headings use upright sentence case, 300/400, −.035em for display and −.025em for H2. Background words use Schibsted 300, filled glyphs, large scale and intentional cropping. The installed Schibsted package declares an actual wght range of 400–900. The CSS 300 target therefore renders its minimum outline; a true 300 asset remains missing. Do not describe that as a verified weight match. The registered font-family names include Variable; active tokens must match them exactly.

Shading uses SHADES in the opening and RECESSED in the Design study. This is not a hero-only restriction. Do not invent a universal background-word set or restore PROJECT/city fillers. Keep words subordinate to readable copy and controls.

Use the current DAVG-SURFACE-COLOR-SYSTEM.md for section surface roles. The bounded left rail stays Forest. In the right 75% field, Forest is reserved for the designated signature study; ordinary editorial passages use Paper, Systems uses the recommended supporting Charcoal, and Investment uses the existing deepest cream as Stone. Adjacent editorial passages may share a surface. Do not force a dark/cream alternation or fixed color ratio. Build editorial comparisons, product studies, tables and diagrams according to the content. Reuse mechanics without forcing the same composition onto all eight services. No blanket motion ban, screen-count rule, card-template requirement or separate design-approval bureaucracy exists.

Preserve the original colors, geometry and lockup of supplied DAVG logo assets. The checkpoint contains no approved logo asset; its existing textual DAVG wordmark is retained. The neutral window favicon is a temporary navigation asset, not a replacement logo.

Spacing follows the existing 4/8px rhythm, readable 55–70-character measures and responsive insets. Do not force every chapter into one viewport. See `02-SERVICE-LAYOUT.md` for the page-level width contract.

Spacing provenance: the checkpoint already supplied --spacing-page-inline: clamp(1.25rem, 3vw, 4rem) and --spacing-section: clamp(3rem, 6vw, 6rem). The kit CSS uses equivalent full-section values and a distinct group padding baseline of clamp(40px, 5vw, 80px), with 40px chapter margins. These are reference/working baselines, not proof the whole rendered page matches the approved visual design. The final handoff removes the unverified forced hero height and extra hero/study bottom padding, using the existing section spacing baseline. See SPACING-PROVENANCE.md before changing them.
