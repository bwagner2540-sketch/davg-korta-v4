# DAVG V4 — Shared build contract
Prepared 29 September 2026 · proposed workflow, activated by the initial Cursor sync task.

## One shared working record
The existing local Cursor project is the working implementation. After the initial import, the repo's `docs/v4-build/` is the versioned active specification. GitHub shares committed code and specification together. Dropbox retains reference assets, incoming proposals and matching handoff copies. Chats explain changes; they are not the only record of an instruction.

This consolidates active instructions into the code repository. It does not delete Dropbox or erase the design references. Imported proposals become active after reconciliation with current local work. An unresolved conflicting source is recorded as pending, never silently made canonical.

## Project identity
Expected repository: `bwagner2540-sketch/davg-korta-v4`.
Read the actual local remote and branch. Preserve work. Do not switch repos, reset, discard edits or force-push to make a snapshot look synchronized.

## Source order
1. Current explicit user instructions.
2. This contract and `BUILD-STATE.md` for status and file ownership.
3. `00-START-HERE.md` and `06-CURSOR-LOCAL-WORKFLOW.md` for workflow.
4. `01-DESIGN-SYSTEM.md`, `02-SERVICE-LAYOUT.md`, `03-PAGES-AND-BUILD-ORDER.md`, `05-BUSINESS-FACTS.md` for active shared intent.
5. Motorized Shading: 09 supersedes 08's chapter map; 08 supersedes the original hub's rendered order. Other hubs: own separate master plus relevant GBB additions.
6. `10-ASTRO-ARCHITECTURE-AND-PREBUILD-AUDIT.md` for proposed technical implementation; inspect local code before applying its findings.
7. Historical masters, old ZIPs, archived governance and `v4-gpt-original-design/` are references. Their retired restrictions do not override current intent.

Do not create another design master. A new numbered supplemental brief may explain a specific decision, but update its affected active file and source index so the decision has one current owner.

## Technical target
Build-time Content Collections with MDX for rich service content; shared Astro components; static service HTML; shared SEO and business configuration. Preserve individual hub stories and the 25/75 desktop shell. Runtime inquiry/support POST endpoints use Workers without making all editorial pages SSR. This target is proposed in the audit; Cursor must record the adopted architecture after inspecting its actual code.

Native CSS is the interaction baseline. No mandatory CMS, motion library, city expansion, fixed screen count or new design approval process. Fonts are self-hosted Schibsted Grotesk, Instrument Sans, and JetBrains Mono. IBM Plex Mono is explicitly retired and must not be loaded or copied back from historical files.

## Status vocabulary
Every substantive change records four separate fields:
- **Decision:** proposed / adopted / superseded.
- **Specification:** exact current file and revision.
- **Implementation:** pending / partial / implemented, with actual source paths.
- **Verification:** not run / pass / fail, with relevant check and date.

Deployment is separate: not deployed / preview / production, with known deployment reference.
A saved document does not mean implemented. A passing local build does not mean deployed.

## At the start of each coding task
Read this contract and BUILD-STATE. Inspect git branch/head/status. Consult only the affected active files. Resolve routine implementation choices autonomously. Record material user-facing changes. Keep remaining uncertainty specific to the affected fact or feature.

## At the end of each coding task
Update changed active specifications and BUILD-STATE together with code. Record changed paths, validation result, remaining items and deployment state. Do not mark unrelated areas complete. If authorized, commit task-related changes and push the current branch normally so the shared record becomes readable here. Preserve unrelated local files and secrets.

Use the current commit SHA as the shared checkpoint. The state file may record the previous inspected SHA because a file cannot contain the hash of its own commit. The handoff identifies the new commit after creation.

## At the end of a ChatGPT design/content change
Name the affected active file and record whether the change is a proposal or an adopted instruction. If repository write access and current state permit, update the canonical file. If only a Dropbox/file handoff is possible, label it pending import and identify the exact local file to update. Never say Cursor is synced until its imported version is confirmed.

Use the shared repo checkpoint for subsequent code reviews. If Cursor has unpublished edits, treat the shared checkpoint as older. No automatic access to the Mac, live file watcher or background Dropbox/GitHub synchronization is assumed.

## Practical handoff
Cursor returns:
- repository / branch / resulting commit, or explicitly uncommitted;
- changed specification and code paths;
- checks actually run and their result;
- remaining concrete items;
- deployment state.

BUILD-STATE stores this information; the user does not need to rewrite the report in chat. Dropbox copies can be refreshed from the same revision when available, but they do not establish implementation status.

