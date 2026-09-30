# Optional integration starters

Copy or adapt these two Astro components into the existing project. Merge the token block into existing Tailwind 4 global CSS. The snippets have not been integrated or browser-tested in your local repository.

Use ServicePageShell once per service route, inside the existing base layout but without nesting it in another `main`. Pass the actual sticky masthead height as `headerOffset`. Supply an original DAVG logo through the named `brand` slot. Pass only a handful of meaningful chapter anchors.

MediaPlaceholder accepts an ID, subject, ratio and optional source. Blank slots are for preview/build work. Hide or replace unfinished public media before release. For real hero images use the project's existing responsive image component and appropriate eager loading instead of this generic lazy-loaded starter.

The desktop frame uses 1fr/3fr for the requested 25/75 split. All readable service sections occupy the right field; its height and scrolling are handled by the document.
