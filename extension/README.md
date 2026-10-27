# NarrateAI Chrome Extension

A Manifest V3 extension that lets you highlight text on any webpage and narrate it.

## Features
- Right-click selected text → **Narrate with NarrateAI**
- Popup with a built-in audio player (play / pause / stop / speed) using the browser's speech engine
- **Open in NarrateAI** hands the text to the web app for story analysis and dynamic voices

## Load the unpacked extension (Chrome developer mode)
1. Open `chrome://extensions` in Chrome.
2. Turn on **Developer mode** (top-right toggle).
3. Click **Load unpacked** and select this `extension/` folder.
4. (Optional) Pin NarrateAI from the puzzle-piece menu in the toolbar.

## Usage
1. Highlight text on any page.
2. Right-click and choose **Narrate with NarrateAI**; the popup opens with the text.
3. Press **Play**, or click **Open in NarrateAI** to continue in the web app.

Set your NarrateAI web app URL in the popup (default `http://localhost:5173`). The text is passed as `#text=<encoded text>` in the URL hash.

## Reloading after changes
Go to `chrome://extensions` and click the reload icon on the NarrateAI card.
