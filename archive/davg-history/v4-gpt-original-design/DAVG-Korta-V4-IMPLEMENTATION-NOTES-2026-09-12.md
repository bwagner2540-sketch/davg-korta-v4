# DAVG Korta V4 — Implementation Notes

**Date:** 2026-09-12  
**Status:** Active design refinement; not approved for production  
**Working specimen:** `/solutions/motorized-shades`

## Purpose

This is a dated implementation record, not a locked design specification. It captures what currently works, what was corrected, and what still needs visual review before any pattern is propagated across the site.

## Corrected in this pass

- Replaced externally hosted Google Fonts with self-hosted variable font packages for Schibsted Grotesk, Instrument Sans, and JetBrains Mono.
- Removed unapproved near-black fills from the working homepage specimen and returned those elements to the shared Ink token.
- Removed the glow around annotation nodes.
- Reduced the hero to one visually dominant action; the second action is now a subordinate text link.
- Removed visible placeholder citation markers from the motorized-shades page.
- Reconciled the conflicting shade-pocket statements into a project-dependent typical range rather than presenting one universal dimension.
- Removed unsupported acoustic and altitude percentages from the primary design copy.
- Removed the unapproved Forest-to-Ink page gradient and returned the closing section to a solid Ink surface.
- Reclassified the design-system document as an evolving working draft.

## Current strengths

- The Ink, Forest, Paper, and photography surface model creates a distinct architectural rhythm.
- Spatial typography, hairline rules, technical labels, and restrained signal green give the page a recognizable DAVG vocabulary.
- Real photography carries more authority than generic product imagery.
- The page explains the hidden coordination work behind motorized shades instead of presenting a product catalog.

## Problems still visible in the working specimen

1. The page is too long and text-dense. Several three-column and ledger sections repeat the same visual grammar.
2. The hero behaves more like a framed editorial spread than the full-bleed architectural opening described in the design direction.
3. The system study needs an original visual artifact—solar diagram, pocket cutaway, or annotated elevation—rather than text doing all the work.
4. Platform comparison and scope comparison partially duplicate one another and should be combined or given clearly different jobs.
5. The FAQ section needs progressive disclosure or stronger editorial grouping so eight answers do not become a wall of text.
6. Some technical dimensions and product limits still require source verification before launch.
7. Mobile composition needs deliberate art direction for cropped spatial words, annotations, and technical comparisons.
8. Shared Astro primitives do not yet exist; the specimen still contains page-local patterns that should not be copied manually.

## Next refinement sequence

1. Visually approve the hero composition and spatial-word scale.
2. Consolidate repetitive sections and establish a stronger dark/light pacing sequence.
3. Design one original solar/pocket technical study and use it as the page's signature evidence.
4. Validate mobile layouts at phone and tablet widths.
5. Extract only the patterns that survive review into reusable Astro components.
6. Update this dated record after each meaningful review pass; do not silently convert experiments into permanent rules.

## Release boundary

No Cloudflare production deployment is authorized. Local builds and Wrangler dry runs are allowed for verification only.
