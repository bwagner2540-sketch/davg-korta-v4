# Spacing provenance
30 September 2026.

The uploaded checkpoint already contained page inline clamp(1.25rem,3vw,4rem) and section clamp(3rem,6vw,6rem). At a 16px root these correspond to the inspected reference CSS clamp(20px,3vw,64px) and full-section clamp(48px,6vw,96px). The scaffold's middle groups use clamp(40px,5vw,80px), with 40px chapter margins. These are reference baselines, not proof of approved rendered proportions.

The first repair introduced a forced 78svh hero, 8rem hero bottom padding and an enlarged study bottom cushion. Those were implementation choices, not owner-approved design tokens. The final source removes the forced height and extra bottom cushions and uses the existing section spacing variable. It does not compress every section into a screen or invent a new global spacing scale.

Inspect the real computed cascade and screenshots at the current Mac/deployed URL after import. Source presence and successful build do not establish pixel-perfect design approval. Preserve the folio composition, image scale, chapter hierarchy and readable content when refining spacing.
