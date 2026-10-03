# DAVG V4 — Shared build contract
Revision: 30 September 2026 · repair against uploaded checkpoint dc9ff37.

The existing local Cursor repository is the working implementation. Versioned `docs/v4-build/` and matching code share the active decisions. Dropbox holds reference assets, incoming work and matching handoff copies. Never infer that a saved document updated the running site.

Source precedence:
1. Current explicit user instructions.
2. This contract and BUILD-STATE for ownership/status.
3. `01-DESIGN-SYSTEM.md`, `13-SURFACE-COLOR-SYSTEM.md` and `02-SERVICE-LAYOUT.md` for active visual/layout intent.
4. `src/data/services/*.json`, `src/config/site.ts` and the integrated page for current content, service names and route contracts.
5. `05-BUSINESS-FACTS.md` for facts and unresolved fields; `06-CURSOR-LOCAL-WORKFLOW.md` / `10-ASTRO-ARCHITECTURE-AND-PREBUILD-AUDIT.md` for workflow and technical implementation.
6. `archive/`, `v4-gpt-original-design/`, old handoff ZIPs and older installed skill guidance are historical references. They cannot override the approved IBM font, frame, nested five-chapter navigation or present source.

Adopted architecture: standalone static Astro routes, shared components, build-time JSON and Tailwind 4 CSS. Content Collections/MDX is not an adopted migration requirement. No compulsory motion ban, 15-screen template, SaaS-card pattern, universal spatial-word set or separate approval process is introduced.

The service frame has two full-width opening sections, a bounded 25/75 middle with Overview/Design/Systems/Installation/Investment, and two full-width closing sections. Chapter links live immediately under the active service. The shading specimen is local-only and never deployable to production or a preview.

Before editing: inspect branch/head/status, read the affected active files and preserve user edits. Keep decisions, specs, implementation and verification separate. Update affected current files and BUILD-STATE in the same change; retire contrary instructions in the source index instead of adding an endless competing master.

After editing: record exact changed paths, checks actually run, remaining items, branch/commit or explicitly uncommitted state and deployment state. A successful build is not visual acceptance, source synchronization or deployment. Do not say 'all files are up to date' without enumerated evidence. Do not push while the existing Workers Builds preview restriction remains unresolved. No reset, force-push or implicit merge to main.
