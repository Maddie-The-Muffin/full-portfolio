---
title: "To Appoint A Lord"
summary: "A short game about making the right decisions to progress. A self-imposed, 7-day long game jam project with the word 'appoint' as the theme."
tags: ["Unity", "C#", "2D", "Aseprite"]
engine: "Unity"
year: 2021
order: 5
image: "../../assets/appoint_logo.png"
imageAlt: "The logo for 'To Appoint A Lord,' golden letters over a rippling red cape."
playUrl: "https://sushi-muffin.itch.io/to-appoint-a-lord"
---

## Background

To Appoint a Lord was a self-imposed game jam done by myself and my husband in seven days. "Appoint" was the word we were given for our theme, so we decided to make a game similar to Sort the Court, where you play as someone that is looking to climb ranks by doing favors for the people around you.

## My role

I did all of the programming for the game, most notably the petitioning system, and I wrote the different petitions for each rank.

## What went right

I like that we implemented a time limit on the game (10 in-game days). It challenges the players to climb the ranks as quickly as possible to reach the top rank before the end of the game (which is actually quite difficult on a first playthrough!)

## What went wrong

- Something that happened early on in development was that someone would make a petition right before the day ended, which would result in the game fading to black as the person was still speaking. I was not very familiar with the ins and outs of coroutines so my "solution" was to disallow new petitions an in-game hour before the end of the game day, which could result in the player just sitting there with nothing to do for a few seconds too many. I understand coroutines much better now, and I know that you can stop a coroutine (if you've saved a reference to it) and that you can yield return coroutines with boolean conditions using WaitUntil or WaitWhile.
- There are some petitions that you can't know what the right answer is ahead of time and can get penalized for it (e.g. giving money to someone who is actually a runaway thief). Some could argue it's about taking chances, but looking at it nowadays, it feels unfair to penalize players for something they can't know how to respond to.
- There are very few petitions overall so the game gets repetitive really fast, even for a game jam game.