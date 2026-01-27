# Architecture

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript (no framework initially)
- **Runtime:** Browser-only, no backend required
- **Data Storage (v1):** In-memory JS objects + optional `localStorage`
- **Hosting:** GitHub Pages or Netlify (static hosting)

## File Structure (Initial)
```text
feud-at-home/
  index.html          # Entry point, loads host or player view
  style.css           # Global styles
  script.js           # Core game logic
  questions.json      # Optional external question bank
  /assets
    /sounds
    /images
  /docs
    PROJECT_OVERVIEW.md
    ARCHITECTURE.md
    ROADMAP.md
    UI_WIREFRAME.md
