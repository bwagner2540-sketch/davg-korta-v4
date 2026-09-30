# Paste into the existing Cursor Agent conversation

```text
Continue in the DAVG Korta V4 local project already open. Preserve the work you have built.

Read docs/v4-build/07-GBB-SECTION-MAP.md and docs/v4-build/content-additions/gbb/03-Motorized-Shading.md. The full matching content is also in gbb-sections.json.

Implement only the shade-design-paths module on /solutions/motorized-shades/ first. Put it inside “Choose fabric, form and Lutron family”, replacing the existing Good / Better / Best family comparison. If our current prototype has different chapter numbers, match the title/topic, not the number.

Keep the goal → fabric → treatment → family comparison → dimensions → pocket/light gap → power → gallery → measurement flow. Keep the existing page code, the 25% sticky left / 75% document-scrolling right layout, typography and colors. Use the current comparison components or a simple unboxed three-column comparison, stacked on mobile. Blank square-edged image placeholders are sufficient.

Use only the module’s public copy on the website. Do not expose placement notes, source topics or editorial change logs. Do not create the PDF’s Lutron/Control4 product routes, add pricing from the PDF, duplicate the existing comparison, or rebuild the page shell as part of this task.

Check the result at desktop and mobile widths, then run the existing normal checks/build. Show the changed local files and any actual errors. Finish this page’s comparison before moving to another service.
```

## Next page prompt

```text
Apply the cleaned GBB modules for [SERVICE PAGE] using docs/v4-build/07-GBB-SECTION-MAP.md and that page’s Markdown file in docs/v4-build/content-additions/gbb/. Match the existing section by title/topic. Replace a matching old comparison, otherwise add it inside the specified section. Keep the existing section sequence, detailed education, brand system and 25%/75% layout. Reuse the current components and import public copy only. Implement this one page, check desktop/mobile and the normal build, then show changed files.
```

## If importing JSON

Filter `modules` by the existing route and take the named `id` inside its mapped section. Render `public.title`, `public.intro`, each path’s `title`, `description` and `details`, then `public.closing` and supported `related_links`. Use existing section wrappers/IDs. Do not dynamically create a page for each module, and do not use the module title as a second navigation chapter unless the current layout needs one.


