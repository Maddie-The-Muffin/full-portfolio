# Pre-deployment TODO

Outstanding items identified in a deployment-readiness audit (2026-09-04). Domain-name-specific items (canonical URLs, sitemap base, etc.) are intentionally excluded — handle those separately once the real domain is known.

## Blockers

- [X] **Broken project images** — all 7 project images (`web-projects` and `game-projects` content collections) were referenced as raw `/src/assets/...` strings and rendered via plain `<img src>` in `ProjectCard.astro`, so every one 404'd in the built site, not just `maddie-portfolio.png`. Fixed by adding the `image()` schema helper in `src/content.config.ts`, switching frontmatter to relative paths, and swapping `ProjectCard.astro` to `astro:assets`' `<Image>`.
- [X] **No custom 404 page** — add `src/pages/404.astro` so bad URLs don't fall back to the host's generic error page.

## Should-fix

- [X] **Stale ARIA label** — `src/components/AboutSection.astro` still has `role="img" aria-label="Placeholder for Maddie's photo"` left over from before the real headshot was added. It now redundantly wraps a real `<Image>` that already has correct alt text; remove the stale attributes.
- [X] **Dead hidden link** — `src/pages/contact.astro` has a GitHub link with `href="#"` under `class="noshow"` (display:none) — an unfinished placeholder shipped in the HTML. Finish it or delete it.
- [X] **Missing meta description / Open Graph tags** — `src/layouts/Layout.astro` has no `<meta name="description">` or OG tags on any page. Affects search results and social link previews.

## Nice-to-have

- [X] **Wire up type/a11y checking** — `npm run astro -- check` isn't currently runnable because `@astrojs/check` / `typescript` aren't installed. Add them so this can be a pre-deploy gate.

## Verified clean (no action needed)

- Production build (`npm run build`) completes with no errors/warnings.
- No leftover `TODO`/`console.log`/`debugger` statements.
- Favicon, `robots.txt`, and sitemap integration are present.
- All images have alt text.
- Internal nav/content links resolve to real routes.

# NOTES
- Contact form success UX will be for a later date