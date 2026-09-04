# Pre-deployment TODO

Outstanding items identified in a deployment-readiness audit (2026-09-04). Domain-name-specific items (canonical URLs, sitemap base, etc.) are intentionally excluded — handle those separately once the real domain is known.

## Blockers

- [ ] **Broken project image** — `src/content/web-projects/this-site.md` references `image: "/src/assets/maddie-portfolio.png"`, but `src/assets` isn't served publicly, so the built site 404s on this image. Move the file into `public/` or route it through `astro:assets` / `ProjectCard.astro` properly.
- [ ] **No custom 404 page** — add `src/pages/404.astro` so bad URLs don't fall back to the host's generic error page.

## Should-fix

- [ ] **Stale ARIA label** — `src/components/AboutSection.astro` still has `role="img" aria-label="Placeholder for Maddie's photo"` left over from before the real headshot was added. It now redundantly wraps a real `<Image>` that already has correct alt text; remove the stale attributes.
- [ ] **Dead hidden link** — `src/pages/contact.astro` has a GitHub link with `href="#"` under `class="noshow"` (display:none) — an unfinished placeholder shipped in the HTML. Finish it or delete it.
- [ ] **Missing meta description / Open Graph tags** — `src/layouts/Layout.astro` has no `<meta name="description">` or OG tags on any page. Affects search results and social link previews.
- [ ] **Contact form success UX** — `src/components/ContactForm.astro` does a plain HTML POST to Formspree with no `_next`/fetch handling, so a successful submit navigates visitors off-site to Formspree's generic thank-you page instead of showing an inline success message.

## Nice-to-have

- [ ] **Wire up type/a11y checking** — `npm run astro -- check` isn't currently runnable because `@astrojs/check` / `typescript` aren't installed. Add them so this can be a pre-deploy gate.

## Verified clean (no action needed)

- Production build (`npm run build`) completes with no errors/warnings.
- No leftover `TODO`/`console.log`/`debugger` statements.
- Favicon, `robots.txt`, and sitemap integration are present.
- All images have alt text.
- Internal nav/content links resolve to real routes.
