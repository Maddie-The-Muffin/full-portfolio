---
title: "Jeremy Lawrence Jokes"
summary: "A website built for Houston-based comedian Jeremy Lawrence."
tags: ["Astro.js", "Sheets API", "Visual Studio Code", "Claude Code"]
year: 2026
order: 1
display: false
---

## Background

This is a website created for Houston-based comedian Jeremy Lawrence. He has been active for a while but did not yet have a website which I deemed essential in this day and age and offered to make one for him. It displays a bio, upcoming show information, contact information, and a section for merchandise (coming soon). The upcoming show information is dynamic, fetched from a spreadsheet using the Google Sheets API and formatted before display on the site.

## Challenges and solutions

The most difficult part of this website was dealing with show dates and their display on the website. It would have sufficed for most to simply leave the date in the spreadsheet and call it a day, but I wanted the show information to be more dynamic than that. I wanted the site to only show future shows (so if Jeremy had forgotten to remove a past show from his spreadsheet, it would not show on the site) and to show repeating events a certain distance into the future. The former was simple enough (compare the user's current date with the show date), but the latter was tough, as I had to remember to keep into account Daylight Saving Time and timezones. Ultimately, I used Claude Code to help me understand the intricacies of JavaScript's Date class and implement a working solution.

## What went right

Both the client and I are really pleased with the site's current design. Design is not my strongest point, and the original version of the website looked like a very generic modern website. I sat down with Jeremy and we discussed possible aesthetics for the site. He liked the idea of a brick-and-mortar 80s/90s comedy club feel, so (with his permission) I used Claude Code to help with the redesign. The site came out fantastically, and as mentioned, we are both very happy with it.

## What went wrong

I almost forgot to add the buttons in the "About" section that link to Jeremy's social media accounts! It had been requested by him but I had forgotten to add it to my to-do list. In the future I will add client requests promptly to to-do lists (if the requests are feasible).