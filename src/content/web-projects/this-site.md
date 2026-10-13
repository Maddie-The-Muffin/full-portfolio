---
title: "This very site!"
summary: "A website/portfolio built by yours truly."
tags: ["Astro.js", "CSS", "Claude Code"]
year: 2026
order: 999
image: "../../assets/maddie-portfolio.png"
imageAlt: "A thumbnail of the home page from this very site!"
repoUrl: "https://github.com/Maddie-The-Muffin/full-portfolio"
---

## Background

Every web developer needs a site, right? This site is meant to showcase my skills as a full stack web developer and Unity game developer and to pitch my services to interested parties.

## Challenges and solutions

Because I went with a vertical nav menu, I had to ensure the main content would fit on the page and not bleed underneath the navbar - at multiple screen sizes and zoom levels. What I did is I used a global CSS variable that calculated the viewport width minus the navbar width minus some spacing and used the final result as the main content width. I'm happy to see how well it works!

## What went right

I was glad to discover how easy it was for Astro to deliver content on demand like these very project card descriptions. I was worried I had made the wrong choice of framework when I reached this part of development, but I found out about Astro's content collections and now it's a great tool I have in my kit for future Astro projects.

## What went wrong

This being my first (public) site, I didn't think of implementing accessibility considerations like ARIA labels until very late in development, because - as someone who doesn't use those accessibility features - it's not something that was known to me. Having had that experience, I now keep accessibility in mind when developing and remember to include features such as focus rings, screen reader-only text, and ARIA roles.