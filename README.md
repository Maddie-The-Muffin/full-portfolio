# Human-First Websites
In an age where every second phrase we hear is "artificial intelligence," I want to remind everyone that people still exist--that people are still making great things. And I'm one of them! Everything I make, even if I do have AI help out, I always look over to make sure I'm happy with it before releasing it.

# About the Site
I made this website to show off the games and websites/web apps I've built. Feel free to browse casually--but if you're interested in working with me on something, I'd love to hear it! You can get in touch with me via the contact form on the website or at maddie.law19@gmail.com.

(NOTE: This site was made with the help of Claude Code)

# Project Structure
The site is built with [Astro](https://astro.build) and deployed at https://maddietavares.dev. It uses plain `.astro` components with scoped styles (no UI framework), and content collections for the project listings.

```
.
├── astro.config.mjs        # Site URL, sitemap integration, and fonts (Caveat, Nunito)
├── public/                 # Static files served as-is (resume PDF, favicon leaves, robots.txt)
└── src/
    ├── assets/             # Images, processed through astro:assets
    ├── components/         # Reusable pieces: Navbar, HomeHero, AboutSection,
    │                       #   PhilosophySection, ProjectCard, ContactForm, PageHeader, etc.
    ├── content/
    │   ├── game-projects/  # One Markdown file per game
    │   └── web-projects/   # One Markdown file per website/web app
    ├── content.config.ts   # Collection schemas for the two project types
    ├── layouts/
    │   └── Layout.astro    # Shared page shell: head, fonts, Navbar, global styles
    ├── pages/              # File-based routes
    │   ├── index.astro     # Home
    │   ├── games.astro     # Game projects
    │   ├── web-dev.astro   # Web projects
    │   ├── contact.astro   # Contact form
    │   ├── privacy.astro   # Privacy page
    │   └── 404.astro       # Not-found page
    └── styles/
        └── global.css      # Site-wide styles
```

## Adding a Project
To add projects, I add a Markdown file to `src/content/game-projects/` or `src/content/web-projects/`. The frontmatter is validated by the schema in `src/content.config.ts`:

- Required: `title`, `summary`, `tags`, `year`
- Optional: `image`, `imageAlt`, `featured`, `order`, `display`, `repoUrl`
- Games also accept `playUrl` and `engine`; web projects also accept `liveUrl`

The `games` and `web-dev` pages read from these collections and render each entry with `ProjectCard`.

# License
All rights reserved. The code is public for viewing only; see [LICENSE](LICENSE).