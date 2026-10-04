# DAVG V4 — shared build contract
Revision: 30 September 2026, latest owner deployment instruction.

The engineer owns source maintenance, recovery of decisions, implementation and verification. The owner should not have to remember decisions or compare hundreds of files. Record supported decisions and unresolved gaps; do not invent missing history.

Source precedence:
1. Current explicit owner instructions, including permission to deploy the temporary test build.
2. This contract and BUILD-STATE for ownership and verified status.
3. Active 01-DESIGN-SYSTEM.md, 02-SERVICE-LAYOUT.md and DAVG-SURFACE-COLOR-SYSTEM.md for visual/layout intent.
4. Complete education input in 10-ALL-EIGHT-SERVICE-PAGES-CONTENT-AND-BUILD.md, integrated src/data/services/*.json, src/config/site.ts and actual page code. Reconcile differences; do not silently discard content to fit a generic template.
5. SOURCE-INDEX.md, source-inputs.json, SPACING-PROVENANCE.md and business/technical files for provenance and limits.
6. Archive, original-design, older ZIPs and stale installed skills are historical reference. They do not govern current rail, fonts, surfaces, route structure or deployment.

Adopted implementation: static Astro routes, shared components, build-time JSON and Tailwind 4. No compulsory Content Collections/MDX migration, motion ban, fifteen-screen template or generic card layout. Reuse mechanics, preserve service-specific compositions.

Layout: two full-width opening sections; bounded 25/75 middle containing Overview/Design/Systems/Installation/Investment; two full-width closing sections. Five links nest directly under the active service. Questions stay in their full-width section.

Deployment: the owner explicitly permits the temporary shading page to deploy and can later delete it. npm run build produces deployable dist with draft indexing directives. Both shading aliases can publish. The previous permanent sandbox denylist and no-push policy are retired. Do not require disabling Cloudflare preview triggers, additional design approval, unresolved final marketing assets or Dropbox archival before deploying this test build. Use the existing Cloudflare project and branch workflow; do not change DNS or connect the final custom domain.

Before applying: inspect actual repo path, branch/head/status and the process serving port 4321. Preserve user edits, choose the matching patch or merge changed files, and do not reset the project.

After applying: run checks, inspect desktop/mobile page, restart the correct server, commit and deploy through the existing configured path. Check the returned deployment URL. Report precise changed paths, commit, checks, URL and remaining gaps. Build success alone does not establish visual acceptance, synchronization or deployed state.

Reference components and all eight images are physically under reference-kit and indexed with hashes. verify:sources establishes their availability, not a guarantee of exact visual fidelity. Source presence and actual layout checks address different failures.
