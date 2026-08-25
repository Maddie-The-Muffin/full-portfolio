# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Maddie Tavares's personal portfolio site, built with Astro (no UI framework integrations — plain `.astro` components only, styled via scoped `<style>` blocks using `define:vars` for per-component color tokens). No test runner or linter is configured.

## Development

Start the dev server in background mode:

```
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Other commands (run via `npm run <script>`):

- `npm run build` — production build to `./dist/`
- `npm run preview` — preview the production build
- `npm run astro -- <cmd>` — run any Astro CLI command (e.g. `astro check`)

## Architecture

- `src/pages/*.astro` — file-based routes. Each page wraps its content in `src/layouts/Layout.astro`, which renders the shared `<Navbar>` and injects the two site fonts (DM Mono for body text, Kalam for headings) via Astro's `Font` component and CSS variables `--font-dm-mono` / `--font-kalam`.
- `src/components/` — one Astro component per content section/tile (`HeroTile`, `AboutTile`, `PitchTile`, `GameCard`, `Navbar`). Pages are composed by stacking these tiles inside `Layout`.
- Styling convention: each component/page declares its palette as frontmatter constants (e.g. `backgroundColor`, `textColor`, `linkColor`) and passes them into its `<style>` block with `define:vars={{...}}`, referencing them as `var(--backgroundColor)` etc. Follow this pattern rather than hardcoding colors in CSS or introducing a global stylesheet/Tailwind.
- Fonts are loaded globally in `Layout.astro`; individual components reference them via `var(--font-kalam)` / `var(--font-dm-mono)` with serif/monospace fallbacks — don't re-import fonts per component.
- Images go through `astro:assets` (`import X from '../assets/...'` + `<Image>`), not plain `<img src>`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
