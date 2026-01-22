# Family Feud at Home

A web-based Family Feud game for at-home play. Play with friends and family using your computer or mobile device.

## Features

- Classic Family Feud gameplay with questions and answers
- Team scoring system
- Add custom questions for personalized gameplay
- Responsive design for desktop and mobile

## How to Play

1. Open `index.html` in your web browser
2. Enter team names (optional)
3. Click "Start Game"
4. Click "Reveal" to show answers and their point values
5. Award points to teams by clicking the team buttons
6. Click "Next Question" to move to the next question
7. Add custom questions using the "Add New Question" button

## Local Development

Since this is a static website, you can simply open `index.html` in any modern web browser.

For a better development experience with live reloading, you can serve the files using a local HTTP server:

### Using Python (if installed)
```bash
python -m http.server 8000
```
Then open http://localhost:8000 in your browser.

### Using Node.js (if installed)
```bash
npx http-server
```

### Using VS Code Extension
Install the "Live Server" extension and click "Go Live" in the status bar.

## Project Structure

- `index.html` - Main HTML file with game UI
- `script.js` - Game logic and interactivity
- `style.css` - Styling for Family Feud theme
- `FEATURE_PLAN.md` - Planned features and roadmap
- `ui_wireframe.md` - UI design notes

## Customization

Questions are stored in `script.js` as an array. Custom questions are saved to localStorage and persist between sessions.

## Browser Compatibility

Works in all modern browsers that support ES6 JavaScript features.

## Contributing

Feel free to add more questions or improve the game mechanics!</content>
<parameter name="filePath">d:\feud-at-home\README.md