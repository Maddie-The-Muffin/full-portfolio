---
title: "Elemental Defense"
summary: "A 3D tower-defense game built around setting off elemental reactions to destroy waves of enemies. My capstone project at Full Sail University."
tags: ["Unity", "C#", "3D"]
engine: "Unity"
year: 2023
order: 2
image: "../../assets/emdefense_title_improved.png"
imageAlt: "The title screen for the game Elemental Defense, displaying a rocky path with lava flowing over it."
repoUrl: "https://4mstudios.wordpress.com/"
---

## Background

Elemental Defense is my capstone project for my Game Development program at Full Sail University. Created in Unity, it is a tower defense game in which players deploy towers with different elements (fire, water, grass) that attack elemental enemies. To play the game effectively, one must make use of elemental reactions (e.g. fire + grass = burning damage over time) to clear out enemies before they reach the end of the path.

## My role

I worked on implementing the elemental effects, the protective totems, and the level hazards.

## Challenges and solutions

The game has protective totems that you can buy to protect your turrets from level hazards in a radius around the totem. This was an odd little challenge, as it was entirely possible for a tower to be half-outside the totem's range and I initially programmed the totems to only protect the towers fully enclosed in its radius. After discussion/playtesting with my teammates and our professor, we realized that such design would feel unfair, so I changed the totem's programming to protect _all_ the towers in its radius.

## What went right

- As mentioned, one of my tasks was implementing the level hazards (exploding volcano in stage 1, storms in stage 2, and tornadoes in stage 3). To make them visually attractive and attention-grabbing, I had to spent a lot of time with Unity's particle system to fine-tune the appearance of the hazards. I'm pleased with how they turned out, especially the storms and the strobe-light effect of the lightning.
- Integrating the elemental effects with the towers a teammate made went very smoothly because of his approach to assigning towers an elemental type.

## What went wrong
There was little playtesting done for balancing; my teammates and I only tested to make sure the game worked. As a result, certain tower setups became extremely powerful, to the point where there was little need to use any other towers. For future games, I will make sure to test with balancing in mind and encourage others to do the same.