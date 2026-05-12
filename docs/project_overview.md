# Project Overview

Fraud Tinder is a fictional scam-detection game where players inspect synthetic online case files and classify each one as `scam` or `not scam`.

The product combines three ideas:

- Tinder-like swiping for quick binary classification.
- "Papers, Please"-style inspection, suspicion, and stamp-the-file drama.
- Practical scam-literacy patterns presented through fictional examples.

## Audience

The interface should be approachable for casual players, educators, and anyone curious about online scam signals. It should not assume expert security knowledge.

The app should teach through pattern recognition rather than lectures. Players learn by seeing clues, making a ruling, and getting a short explanation.

## Current Gameplay Loop

1. The player sees one case file at a time.
2. The case includes a synthetic visual, short metadata, and inspector notes.
3. The player classifies the case:
   - Left / `Scam`
   - Right / `Not scam`
4. The app records the decision locally.
5. The side panel shows progress, score, streak, and the last ruling.
6. At the end, the player sees final accuracy and a case ledger.

## UX Principles

- Keep decisions fast, readable, and tactile.
- Make scam signals visible but not too obvious every time.
- Keep the interface playful without making real fraud feel trivial.
- Always provide non-drag alternatives: buttons and keyboard controls.
- Prefer short explanations after decisions over long warnings before decisions.
- Reward careful observation, not fear.

## Visual Direction

The visual world is an inspection desk:

- Paper textures.
- Case files.
- Stamps.
- Dossiers.
- Ledger language.
- Warm paper tones, deep green-black ink, warning red, and official gold.

The app should feel handmade and intentional, not like a generic SaaS dashboard.

## Technical Shape

The app is a Vite React TypeScript frontend.

Key implementation choices:

- Tailwind CSS v4 powers styling through `@tailwindcss/vite`.
- Motion for React powers drag/swipe gestures and exit animation.
- Synthetic case data currently lives in `src/data/cases.ts`.
- State is local React state.
- There is no backend, account system, persistence, or analytics.

## Deployment

GitHub Pages deployment is handled with `gh-pages`.

The deployment command builds the app and publishes only `dist/`, so root-level documentation in `docs/` is not deployed.
