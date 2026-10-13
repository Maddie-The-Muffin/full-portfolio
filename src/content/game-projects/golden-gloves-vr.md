---
title: "Golden Gloves VR"
summary: "A VR boxing game built in Unity, focused on realistic bag physics and immersive bouts. Made as part of the Engine Room VR team."
tags: ["Unity", "C#", "VR (Meta Quest)", "Git"]
engine: "Unity"
year: 2026
order: 1
image: "../../assets/ggvr.png"
imageAlt: "The main cover of the game Golden Gloves VR."
playUrl: "https://www.meta.com/experiences/golden-gloves/5682829115084320/"
---

## Background

Golden Gloves VR is a boxing game created for the Meta Quest series of headsets, made with the goal of bringing a realistic boxing experience "to your living room." It features multiplayer bouts, physics-enabled bags, and the well-received Fists of Fury minigame. I reached out to the company through a connection of Full Sail and joined the team in summer 2023. I stayed on the team for quite a while until unfortunately being let go due to budget cuts and industry uncertainty in April 2026.

## My role

I programmed several features of the game, the most notable being the Fists of Fury minigame, the calorie tracker, and the AI boxer damage textures.

## Challenges and solutions

For some months after its initial release, subsequent updates to the Fists of Fury minigame would end up breaking the minigame, because of some hardcoded values I used for object/player positions and rotations. This was especially apparent in the XR version - every position had to have an XR equivalent. Thus, over a period of days when I had some downtime, I updated the Fists of Fury code to use points existing in the scene for object spawning/player teleporting instead of hardcoded values. That way, if adjustments did need to be made, the point in the scene could just be moved around - and if new instances of Fists of Fury had to be put in a new level (as did happen several times), placing was all the designers needed to do.

## What went right

- I had to learn VR in a very short amount of time to keep pace with the job and I adapted quickly!
- Fists of Fury, on its release, tripled the game's active users.
- I learned what it was like to collaborate in a production environment, as well as how to work with artists and musicians up and down the pipeline.
- I learned a lot more about edge cases and anticipating every possible scenario.

## What went wrong
Every developer has a "I broke the repository" story, and this is mine: early on, we wished to update the Unity version of the game, and the task fell to me to process the update and make sure nothing broke. I was overzealous and committed the update to the main branch of the repository before opening the project and ensuring everything still worked. Unfortunately, several scripts were broken in the update and our project lead had to spend a day restoring the repository. I'm thankful for his understanding, and I've learned to be very careful with Git - to keep my work in separate branches, and to NOT commit anything breaking.