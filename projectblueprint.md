# Family Feud Web App — Project Blueprint

## 🎯 Project Idea
An interactive, fully customizable Family Feud–style web app featuring:
- A classic answer board with flip/reveal animations  
- Team scoring and strike tracking  
- A complete question bank with add/edit/delete tools  
- A host control panel  
- A player-facing board  
- Sound effects, timers, and round logic  
- Maximum customization while preserving the classic show structure  

---

## 🧩 Game Overview
- Two teams, four players each  
- Four main rounds/questions  
- Each round begins with a **Face-Off** between one player from each team  
- The higher-ranking answer wins control of the board  
- The controlling team attempts to clear the board  
- Three strikes → opposing team gets one chance to steal  
- After all rounds, the highest-scoring team advances to **Fast Money**  
- Fast Money: two players answer 5 rapid-fire questions to reach a 200‑point goal  

---

## ⭐ Core Features

### 🎛 Host Control Panel
- Enter/edit team names  
- Manage questions, answers, and point values  
- Trigger reveal animations  
- Trigger strike animations  
- Control timers  
- Switch rounds  
- Manage Face-Off flow  
- Start Fast Money mode  

### 🎥 Player Screen
- Displays only the question and revealed answers  
- Shows strikes, team control indicator, and round multiplier  
- No answer options visible until revealed  
- Clean, TV-style layout  

### 🔊 Sound Effects
- Correct answer “ding”  
- Wrong answer “X” buzzer  
- Duplicate answer buzz  
- Face-Off bell  
- Timer countdown sounds  

### ⏱ Timer System
- Visual countdown bar  
- Optional audible ticking  
- Used for Face-Off, team turns, and Fast Money  

### 📚 Question Bank
- Add/edit/delete questions  
- Add/edit/delete answers and point values  
- Import/export question sets  
- Organized by round or category  

---

## 🧱 Game Structure

### 🥊 Face-Off Round
**Flow:**
1. Question appears  
2. Two players buzz in  
3. Host selects the answer each player gave  
4. Higher-scoring answer wins control  
5. Winning team chooses **Pass** or **Play**  
6. Game transitions into normal board play  

**Controls:**
- “Skip Face-Off” — jump straight to gameplay  
- “New Face-Off” — restart Face-Off for current question  
- Visual indicator showing which team has control  

---

## 🔄 Round Multipliers
- **Round 1:** Single points  
- **Round 2:** Double points  
- **Round 3:** Triple points  
- **Round 4 (optional):** Single or double (configurable)  

---

## 💥 Strikes & Steals
- Each incorrect guess adds a strike (animated X)  
- Three strikes → opposing team gets one chance to steal  
- If steal is correct → opposing team earns the round’s points  
- If steal fails → original team keeps their points  

---

## 🏆 Fast Money Round
- Two players from the winning team  
- Each gets 20 seconds  
- Five rapid-fire questions  
- Track individual and combined scores  
- Goal: reach 200 points  
- Includes timer, reveal animations, and scoring logic  

---

## 📘 Documentation to Include
- Full instructions guide  
- Host control panel guide  
- Gameplay rules  
- Question bank usage guide  
