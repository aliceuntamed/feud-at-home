# Copilot Instructions for This Repository

This repository contains a multi‑screen, fully customizable **Family Feud–style web application**.  
Copilot must follow the rules, architecture, and workflows defined below to ensure consistency, safety, and clarity throughout development.

---

# 1. Project Purpose & Vision

Build a browser‑based Family Feud game system with:

- A **host control panel**
- A **player-facing game board**
- **Face-Off** flow
- **Team scoring**, **strikes**, and **round multipliers**
- **Fast Money** round
- **Sound effects**, **timers**, and **animations**
- A **question bank** with add/edit/delete tools
- Clean, modular, maintainable code

The project is **HTML/CSS/JavaScript only** (no frameworks for now) and must remain compatible with static hosting (GitHub Pages, Netlify).

---

# 2. Repository Structure (Current + Expected)

Copilot should assume the following structure:

feud-at-home/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── sounds/
│   └── images/
│
└── docs/
├── PROJECT_OVERVIEW.md
├── ARCHITECTURE.md
├── ROADMAP.md
├── UI_WIREFRAME.md
├── GIT_AGENT.md
└── GUIDELINES.md


Copilot should **not** collapse everything into one file or revert to a single‑page structure.

---

# 3. Technical Architecture (Copilot Must Follow)

### **Tech Stack**
- HTML for structure  
- CSS for layout, theming, animations  
- JavaScript for logic  
- Optional JSON for question bank  
- No build tools, no frameworks, no backend (v1)

### **Core Modules**
Copilot should maintain or create these conceptual modules:

- **Game State Manager**
- **Question Bank Manager**
- **Host Control Logic**
- **Player Board Renderer**
- **Audio Manager**
- **Timer System**
- **Animation Helpers**

### **Data Model**
Copilot should follow this structure:

```js
{
  teams: [
    { name: "Team A", score: 0 },
    { name: "Team B", score: 0 }
  ],
  questions: [
    {
      id: "q1",
      prompt: "Question text",
      answers: [
        { text: "Answer", points: 30 },
        ...
      ]
    }
  ],
  state: {
    currentRoundIndex: 0,
    currentQuestionId: "q1",
    controllingTeamIndex: 0,
    strikes: 0,
    revealedAnswers: [false, false, ...]
  }
}

Copilot must keep this consistent across files.

   # 4. Development Guidelines (How Copilot Should Behave)
 ### **Clarity & Beginner-Friendly**
Assume the user is a beginner.

Avoid jargon unless explained.

Provide step-by-step instructions.

Keep code readable and maintainable.

Strong Technical Opinions
Copilot should:

Recommend best practices.

Warn against bad patterns.

Suggest modularization when files grow too large.

Encourage separation of concerns.

Refactoring
Copilot may:

Extract helper functions

Split large JS files into modules

Improve naming and structure

Reduce duplication

But must not introduce frameworks or build systems unless explicitly requested.

File Size & Organization
Keep files small.

Create new files when logical.

Use /assets for media.

Use /docs for planning documents.

5. Design System Rules
Copilot must follow these UI rules:

Base font size: 14px

Date format: “Jun 10”

Bottom toolbar: max 4 items

Never combine FAB + bottom toolbar

Chips must appear in groups of 3+

Avoid dropdowns with 2 or fewer options

Maintain Family Feud theme:

Deep blue backgrounds

Gold borders

Bold, readable text

6. Git Agent Rules (Critical)
Copilot must follow these Git behaviors:

Safety First
Never rewrite history unless explicitly instructed.

Never delete branches without confirmation.

Always protect the main branch.

Commit Guidance
Copilot should:

Suggest meaningful commit messages.

Identify uncommitted changes.

Encourage frequent commits.

Provide exact commands when asked.

Branching Workflow
Copilot should encourage:
git checkout -b feature-name
Examples:

feature-scoring-system

feature-faceoff-flow

feature-fast-money

feature-question-editor

Merging
Copilot should guide:
git checkout main
git pull
git merge feature-name
Undoing Mistakes
Copilot should prefer safe options:
git revert HEAD
Not destructive ones.

7. Roadmap Awareness
Copilot should align suggestions with the project roadmap:

Phase 1
Core board, reveals, basic scoring

Phase 2
Host panel, strikes, multipliers

Phase 3
Face-Off system

Phase 4
Question bank editor

Phase 5
Fast Money round

Phase 6
Sound effects, animations, polish

Phase 7
Optional advanced features

Copilot should not jump ahead unless asked.

8. Copilot Must Avoid
Reverting to single-page architecture

Suggesting frameworks (React, Vue, etc.)

Adding build tools (Webpack, Vite, etc.)

Overcomplicating the project

Ignoring the design system

Ignoring the roadmap

Rewriting or removing user-created docs

Using localStorage as the primary architecture unless requested

9. Tone & Interaction Style
Copilot should:

Be confident, concise, and supportive

Offer suggestions freely

Ask clarifying questions when needed

Provide copy‑pasteable code

Avoid repeating the user’s prompt

Keep explanations short unless asked for depth

10. Summary
Copilot must treat this repository as a multi-screen, modular, extensible Family Feud web application, not a simple single-page script.
All suggestions, code, and refactoring must align with:

The architecture

The roadmap

The design system

The Git workflow

The user’s beginner-friendly learning style

This file defines the authoritative rules for Copilot’s behavior in this project.