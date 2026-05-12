# Fraud Tinder

Fraud Tinder is a fictional scam-detection swipe game. Players inspect synthetic online case files, then classify each one as `scam` or `not scam` by swiping, clicking, or using the keyboard.

The vibe is a mix of dating-app card swipes and a bureaucratic inspection desk: a little bit "Papers, Please", but for suspicious marketplace listings, article previews, messages, and receipts.

## Features

- Tinder-style draggable case cards.
- Buttons and keyboard controls for accessible classification.
- Synthetic eBay-style listings, article previews, SMS-like messages, and invoice mockups.
- Score, progress, streak, and final accuracy summary.
- Immediate feedback after each ruling with a short explanation.
- Responsive interface for desktop and mobile.
- GitHub Pages deployment through `gh-pages`.

## Controls

- Swipe or drag left: mark the current case as `scam`.
- Swipe or drag right: mark the current case as `not scam`.
- Left arrow: mark as `scam`.
- Right arrow: mark as `not scam`.
- On-screen buttons: use `Scam` or `Not scam` without dragging.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS v4 via `@tailwindcss/vite`
- Motion for React gestures and card animations
- gh-pages for GitHub Pages deployment

## Project Structure

```text
.
├── public/              # Static public assets, including favicon
├── src/
│   ├── components/      # Swipe deck, case cards, controls, visuals, results
│   ├── data/            # Synthetic scam/not-scam case data
│   ├── App.tsx          # Page shell and visual direction
│   ├── main.tsx         # React entrypoint
│   ├── styles.css       # Tailwind import and custom theme styles
│   └── types.ts         # Shared TypeScript types
├── Makefile             # Common local commands
├── package.json         # npm scripts and dependencies
└── vite.config.ts       # Vite, React, Tailwind, and GitHub Pages base config
```

## Quick Start

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Or use Make:

```bash
make up
```

By default, `make up` starts Vite at `http://127.0.0.1:5173`.

## Commands

```bash
npm run dev       # start the Vite development server
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
npm test          # currently runs the production build
npm run deploy    # build and publish dist/ to GitHub Pages
```

Equivalent Make targets:

```bash
make up           # start Vite on 127.0.0.1:5173
make kill         # stop the process listening on port 5173
make build        # create a production build
make test         # run the build-backed test command
make deploy       # build and publish dist/ via gh-pages
```

You can override the local port for Make commands:

```bash
make up PORT=3000
make kill PORT=3000
```

## Deployment

The app is configured for GitHub Pages at the project path:

```text
/fraud_tinder/
```

Deployment uses the `gh-pages` package:

```bash
npm run deploy
```

That command runs `predeploy` first, so a production build is created before `dist/` is published to the `gh-pages` branch.

## Content Rules

All examples must stay fictional and synthetic.

Do not use:

- Real eBay listings.
- Real scam screenshots.
- Real victims or private messages.
- Third-party marketplace assets copied from real services.

Safe content examples:

- Fake marketplace listings.
- Fictional article previews.
- Fictional SMS or email-style messages.
- Synthetic product illustrations or styled placeholders.
- Fictional receipts and invoices.

## Development Notes

- Read `AGENTS.md` before making changes in this repository.
- Keep swipe interactions accessible with buttons and keyboard alternatives.
- Keep the game state local unless a future task explicitly adds persistence.
- Run `npm run build` or `make build` after code changes.
- Update this README when commands, deployment, structure, or gameplay behavior changes.
