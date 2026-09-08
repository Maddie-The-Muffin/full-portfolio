# Pre-deployment TODO

Outstanding items identified in a deployment-readiness audit (2026-09-04, refreshed 2026-09-08).

## Blockers

- [X] **Broken project images** — all 7 project images (`web-projects` and `game-projects` content collections) were referenced as raw `/src/assets/...` strings and rendered via plain `<img src>` in `ProjectCard.astro`, so every one 404'd in the built site, not just `maddie-portfolio.png`. Fixed by adding the `image()` schema helper in `src/content.config.ts`, switching frontmatter to relative paths, and swapping `ProjectCard.astro` to `astro:assets`' `<Image>`.
- [X] **No custom 404 page** — add `src/pages/404.astro` so bad URLs don't fall back to the host's generic error page.

## Should-fix

- [X] **Stale ARIA label** — `src/components/AboutSection.astro` still has `role="img" aria-label="Placeholder for Maddie's photo"` left over from before the real headshot was added. It now redundantly wraps a real `<Image>` that already has correct alt text; remove the stale attributes.
- [X] **Dead hidden link** — `src/pages/contact.astro` has a GitHub link with `href="#"` under `class="noshow"` (display:none) — an unfinished placeholder shipped in the HTML. Finish it or delete it.
- [X] **Missing meta description / Open Graph tags** — `src/layouts/Layout.astro` has no `<meta name="description">` or OG tags on any page. Affects search results and social link previews. `og:title`/`og:description`/`og:url`/`twitter:card` now added; `og:url` and a `<link rel="canonical">` are computed per-page from `Astro.url`/`Astro.site` (previously `og:url` was hardcoded to the homepage on every page — fixed 2026-09-08).

## Domain-specific (update once the real domain is known)

- [X] **`astro.config.mjs`** — `site: 'https://full-portfolio.vercel.app'` is flagged inline with `// Update before going live!`. Drives canonical URLs and the sitemap's base.
- [X] **`public/robots.txt`** — `Sitemap: https://full-portfolio.vercel.app/sitemap-index.xml` is hardcoded (flagged inline) and won't update automatically when `astro.config.mjs`'s `site` changes.
- [X] **`src/pages/privacy.astro`** (line 16) — body text literally reads "This site (madietavares.dev — replace with your actual domain) is a personal portfolio."
- [X] **og:url** meta tag in `src/layouts/Layouts.astro`

## Nice-to-have

- [X] **Wire up type/a11y checking** — `npm run astro -- check` isn't currently runnable because `@astrojs/check` / `typescript` aren't installed. Add them so this can be a pre-deploy gate.
- [X] **Stale README** — `README.md` is still the unedited Astro starter template (wrong project structure, "Seasoned astronaut? Delete this file" callout, etc.), not a description of this project. Low priority, but odd to ship as-is now that the GitHub link is live on the site.

## Deferred

- [ ] **Contact form success UX** — `src/components/ContactForm.astro` does a plain HTML POST to Formspree with no `_next`/fetch handling, so a successful submit navigates visitors off-site to Formspree's generic thank-you page instead of showing an inline success message. Intentionally saved for a later date.

## Verified clean (no action needed)

- Production build (`npm run build`) completes with no errors/warnings.
- `astro check` runs clean (0 errors/warnings/hints).
- No leftover `TODO`/`console.log`/`debugger` statements.
- Favicon, `robots.txt`, and sitemap integration are present.
- All images have alt text.
- Internal nav/content links resolve to real routes.