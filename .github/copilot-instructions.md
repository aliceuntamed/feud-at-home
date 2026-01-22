# Project snapshot

This repository is a minimal static frontend app for a Family Feud-style game night: a single-page site with `index.html`, `script.js`, and `style.css` at the repository root. No build system, package manifest, or tests present.

# What the agent should know (big picture)

- Purpose: client-side game app for at-home Family Feud, allowing users to view questions, reveal answers, and add custom questions for personalization.
- File roles: `index.html` holds markup with game UI and add-question form, `script.js` contains game logic, DOM manipulation, and localStorage for custom questions, `style.css` contains styles for Family Feud theme.
- Data flow: questions array in `script.js` (defaults + custom from localStorage), current question index, reveal answers on button click.
- Deployment: static files served from any web server or opened directly in browser.

# Useful patterns & examples from this repo

- Question data structure: `{ prompt: string, answers: [{ text: string, points: number }] }` (see `script.js` lines 1-28).
- DOM manipulation: update text content with `element.textContent = value` (e.g., `loadQuestion()` function).
- Event listeners: attach to buttons with `addEventListener` (e.g., reveal buttons, next question, award points).
- Form handling: prevent default submit, collect inputs, push to array, save to localStorage (see `add-question-form` event listener).
- LocalStorage persistence: `localStorage.setItem('key', JSON.stringify(data))` and `JSON.parse(localStorage.getItem('key'))` for custom questions.
- UI toggling: show/hide elements with `style.display = 'block'/'none'` (e.g., switching between setup, game, and add-question views).
- Team scoring: object with team names and scores, update display after awarding points (see `teams` object and `awardPoints()` function).
- Grid layout: use CSS grid for answer rows with reveal and award buttons (see `.answers` in `style.css`).

# Developer workflows (explicit commands)

- Quick local preview: open `index.html` directly in browser, or run `python -m http.server 8000` from repo root if Python installed.
- Debugging: use browser DevTools Console for JS errors, Network for any future assets, Sources for stepping through `script.js`.
- Adding features: edit `script.js` for logic, `index.html` for UI, `style.css` for appearance; test by refreshing browser.

# Conventions and project-specific guidance for edits

- Keep everything at repository root: no subfolders yet.
- No transpilation: use ES6+ features like `const`, `let`, arrow functions, template literals (browser-compatible).
- Question management: always save custom questions to localStorage after adding; load on page load.
- UI consistency: use grid for answers layout, gold borders for game elements, blue background.
- Avoid frameworks: pure vanilla JS for simplicity.

# Integration points & external dependencies

- None currently: no APIs, no libraries. If adding sounds or images, store in `assets/` folder and reference from `index.html`.

# If you modify project structure

- For more complex features (e.g., multiple teams, scoring), consider adding `src/` for JS modules, but keep simple for now.

# Notes for Copilot/AI agents

- Preserve default questions; custom ones are appended and saved separately.
- When adding UI elements, ensure IDs match JS selectors (e.g., `document.getElementById`).
- Test localStorage: custom questions persist across browser sessions but not across devices.
