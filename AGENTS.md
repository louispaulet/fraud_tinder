# Agent Instructions

Always read this file before starting any task in this repository.

## Project

Fraud Tinder is planned as a Vite, React, TypeScript, and Tailwind CSS v4 frontend for classifying fictional online cases as `scam` or `not scam`.

## Working Guidelines

- Preserve user changes. Do not revert or overwrite work you did not make unless the user explicitly asks.
- Avoid destructive git commands such as `git reset --hard` or `git checkout --` unless the user explicitly approves them.
- Always commit and push after every change, even when working directly on `main`.
- Prefer small, focused changes that keep the app easy to inspect and iterate on.
- Once the frontend is scaffolded, follow the project's Vite, React, TypeScript, Tailwind, and Motion conventions.
- Keep the swipe interface accessible. Provide button and keyboard alternatives in addition to drag gestures.
- Keep scam examples fictional and synthetic. Do not copy real marketplace listings, real scam screenshots, private messages, victim details, or third-party branded assets.
- Run relevant checks after code changes when scripts are available, such as `npm run build`, linting, or tests.

## Documentation

- Extended project documentation lives in `docs/`; this folder is not deployed because GitHub Pages publishes only the generated `dist/` directory.
- Read `docs/project_overview.md`, `docs/content_guidelines.md`, and `docs/tone_of_voice.md` when making product, gameplay, content, or copy changes.
- Follow `docs/tone_of_voice.md` for all website wording and user-facing copy.
- Keep `README.md` current when setup commands, scripts, stack choices, or gameplay behavior change.
- Update this file when project-specific workflow expectations change.
