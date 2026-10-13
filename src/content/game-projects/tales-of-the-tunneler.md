---
title: "Tales of the Tunneler"
summary: "A top-down roguelite adventure into a long-abandoned mine. Explore numerous biomes, craft dozens of tools... and find out why the mine was abandoned."
tags: ["Unity", "C#", "Aseprite", "Git", "2D"]
engine: "Unity"
year: 2022
order: 3
image: "../../assets/tott_menu.png"
imageAlt: "A title screen for the game Tales of the Tunneler. It shows a rocky mountain path leading to a mine entrance over a large gap."
playUrl: "https://sushi-muffin.itch.io/tales-of-the-tunneler"
---

## Background

Tales of the Tunneler was a game my husband and I made together back when we dreamed of running an indie game studio. We took the mining section of Stardew Valley and expanded it into a full game, complete with ten different biomes, multitudes of enemies, and dozens of collectibles.

## My role

I handled all of the programming (including inventory system, enemy AI, and level generation) and some of the static pixel art assets.

## Challenges and solutions

One of the hardest things for me to implement was the inventory screen in the hub area. There were two separate inventories: the hub storage, and the player's inventory which they took with them on each run, and the player could swap items between inventories in the hub. It was a hassle for me to figure out, because I had to keep track of values across two dictionaries, make sure values added/subtracted correctly, and take into account edge cases. The solution to this was perseverance; after much hard work, I had a working inventory system!

## What went right

- This was approximately a two year project, and I'm proud of the both of us for sticking with it for the whole duration.
- As development on the game progressed, I noticed an increase in my pixel art skill, and I redid some older sprites. The progress is clear, and I'm very proud of it!

## What went wrong

I did not fully understand the concept of class inheritance, so - though all the enemies in the game shared many variables and methods - they still all had their own scripts. This resulted in a lot of unnecessary code and space bloat. Now that I know how inheritance works, if I ever remade this game, the enemies would be handled totally differently.