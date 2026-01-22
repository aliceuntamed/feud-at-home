# UI Wireframe Outline

## 1. Host Control Panel

### Layout
- Top:
  - Game title
  - Round indicator (Round 1 / 2 / 3 / Fast Money)
- Left column:
  - Team A name + score
  - Team B name + score
  - Control indicator (highlight current team)
- Center:
  - Current question text
  - List of answers with:
    - Text
    - Points
    - Reveal toggle/button
- Right column:
  - Strikes (3 X icons)
  - Round multiplier (x1 / x2 / x3)
  - Timer controls (start/stop/reset)
- Bottom:
  - Buttons:
    - Next Question
    - Start Face-Off
    - Skip Face-Off
    - Start Fast Money

## 2. Player Board (Main Game)

### Layout
- Top:
  - Question text (large, centered)
- Middle:
  - Grid of answer tiles (2 columns x 3 rows)
    - Hidden: “_____”
    - Revealed: “ANSWER — POINTS”
- Bottom:
  - Team A name + score
  - Team B name + score
  - Strikes (X icons)
  - Control indicator (which team is playing)

## 3. Face-Off View

### Layout
- Top:
  - Question text
- Middle:
  - Two large areas:
    - Team A Face-Off slot
    - Team B Face-Off slot
  - Each shows:
    - Selected answer
    - Points (once revealed)
- Bottom:
  - Buttons:
    - Mark Team A as winner
    - Mark Team B as winner
    - Skip Face-Off
    - New Face-Off

## 4. Fast Money View

### Layout
- Top:
  - “Fast Money” title
  - Player 1 / Player 2 indicator
- Middle:
  - Current question
  - Input area for host to type answer
  - Points field
- Right:
  - Timer (20s countdown)
- Bottom:
  - List of 5 questions with:
    - Answer
    - Points
  - Total score
  - 200-point goal indicator
