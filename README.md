# NarrateAI
Here's a professional, comprehensive README for your NarrateAI project:

---

# 🎙️ NarrateAI

### AI-Powered Multi-Voice Audiobook Engine

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://narrate-ai-gamma.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=flat&logo=github)](https://github.com/AbuAnsari-06/NarrateAI)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.0-blue?style=flat&logo=react)](https://react.dev)
[![Groq](https://img.shields.io/badge/Powered%20by-Groq-orange?style=flat&logo=groq)](https://groq.com)

---

## 📖 What is NarrateAI?

**NarrateAI** is a web application that transforms raw story text into an immersive multi-voice audiobook experience. It uses AI to analyze your story, identify characters, assign them distinct voices, and read the story aloud with emotion-driven speech patterns.

### ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🤖 **AI-Powered Analysis** | Uses Groq's ultra-fast models (GPT-OSS 120B / 20B) to identify characters, emotions, and voice profiles |
| 🎭 **Distinct Character Voices** | Each character gets a unique voice based on their persona (gender, age, personality) |
| 😊 **Emotion-Driven Speech** | Pitch, rate, and volume adjust based on character emotions (happy, sad, angry, fearful, etc.) |
| ⏯️ **Full Playback Controls** | Play, pause, stop, skip forward/backward, and adjustable speed (0.75× to 1.5×) |
| 📱 **Responsive Design** | Works on desktop, tablet, and mobile browsers |
| 💾 **Local Storage** | Saves your API key, story, and playback state automatically |
| 🕒 **History Panel** | Quick access to your last 5 analyzed stories |
| 🎨 **Visual Character Panel** | Click on any character to see their assigned voice and persona |
| 🔍 **Line-by-Line Highlighting** | Active line is highlighted and auto-scrolls during playback |
| ⌨️ **Keyboard Shortcuts** | Space (play/pause), R (reset), Arrow keys (skip) |

---

## 🚀 Live Demo

**Try it now:** [https://narrate-ai-gamma.vercel.app](https://narrate-ai-gamma.vercel.app)

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        User's Browser                          │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                  NarrateAI React App                      │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │ │
│  │  │  API Key    │  │   Story     │  │  Voice Analysis │  │ │
│  │  │    Input    │  │   Input     │  │  & Playback     │  │ │
│  │  └─────────────┘  └─────────────┘  └─────────────────┘  │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                         Groq API                               │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │              GPT-OSS 120B / 20B (with fallbacks)         │ │
│  │   ┌───────────────────────────────────────────────────┐  │ │
│  │   │  Analyzes story → Identifies → Returns JSON      │  │ │
│  │   │  • Characters      • Emotions   • Voice profiles │  │ │
│  │   └───────────────────────────────────────────────────┘  │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                  Browser Web Speech API                        │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  Converts JSON to audio with:                            │ │
│  │  • Distinct voices per character                         │ │
│  │  • Emotion-based pitch/rate/volume adjustments           │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
- **React 19** – UI framework
- **Vite** – Build tool and dev server
- **Web Speech API** – Browser-based text-to-speech
- **Groq API** – AI analysis (OpenAI GPT-OSS 120B / 20B)

### Deployment
- **GitHub** – Version control and code hosting
- **Vercel** – Frontend deployment

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Groq API key (free at [console.groq.com](https://console.groq.com/keys))

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/AbuAnsari-06/NarrateAI.git
cd NarrateAI
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:5173
```

### Production Build

```bash
npm run build
```

The built files will be in the `dist/` folder.

---

## 🎯 How to Use

1. **Get a Groq API Key**
   - Go to [console.groq.com/keys](https://console.groq.com/keys)
   - Sign up for a free account (no credit card required)
   - Create a new API key

2. **Open NarrateAI**
   - Visit [narrate-ai-gamma.vercel.app](https://narrate-ai-gamma.vercel.app)
   - Paste your Groq API key in the first field

3. **Enter Your Story**
   - Paste any story, chapter, or scene in the text area
   - Or click "Sample" to try the built-in example

4. **Analyze & Listen**
   - Click **"Analyse & Prepare Voices"**
   - Wait for the AI to process (usually 5-15 seconds)
   - Click **"Play"** to start the audiobook
   - Characters will have distinct voices with emotion!

---

## 🎮 Controls

### Playback Controls
- ▶️ **Play** – Start or resume playback
- ⏸️ **Pause** – Pause current playback
- ⏹️ **Stop** – Stop and reset to beginning
- ⏮️ **Previous** – Skip to previous line
- ⏭️ **Next** – Skip to next line
- **Speed** – Adjust playback speed (0.75× – 1.5×)

### Keyboard Shortcuts
- `Space` – Play / Pause
- `R` – Stop and reset
- `←` – Skip backward
- `→` – Skip forward

### Character Panel
- Click on any character card to see:
  - Their persona description from the story
  - The assigned voice (browser voice name)

---

## 🧠 How the AI Works

### Stage 1: Story Analysis (Groq LLM)
The AI analyzes the story and returns structured JSON with:
- **Speaker** – Character name or "Narrator"
- **Text** – The dialogue or narration
- **Emotion** – One of: neutral, happy, angry, sad, fearful, excited, surprised
- **isThought** – Boolean (true for inner monologue)
- **Persona** – 4-6 descriptive words (gender, age, vocal traits)
- **Voice Profile** – Pitch and rate values (0.6–1.8 pitch, 0.8–1.3 rate)

### Stage 2: Voice Assignment (Browser TTS)
- Scores available browser voices against character persona hints
- Matches gender (male/female) and age (young/old)
- Prioritizes high-quality "Neural" or "Natural" voices
- Ensures each character gets a distinct voice
- Applies emotion-based pitch/rate/volume adjustments

### Stage 3: Playback (Web Speech API)
- Converts each JSON line to audio
- Applies character voice + emotion parameters
- Auto-scrolls and highlights current line
- Handles edge cases (thoughts, narrator, empty lines)

---

## 🤔 Why This Approach?

| Decision | Reason |
|----------|--------|
| **No backend needed** | Users paste their own API keys → no server costs or key management |
| **Groq API** | Extremely fast, generous free tier, and great JSON output |
| **Web Speech API** | Native browser TTS → no audio file generation needed |
| **React + Vite** | Fast development, modern tooling, easy deployment |
| **Vercel** | Free hosting, auto-deploys from GitHub, CDN included |

---

## 🌟 Upcoming Features

- [ ] **Browser Extension** – One-click narration from any webpage (Wattpad, blogs, etc.)
- [ ] **Backend API** – Optional server-side analysis for shared keys
- [ ] **Audio Export** – Download audiobook as MP3
- [ ] **Custom Voice Training** – Clone character voices
- [ ] **Multi-language Support** – Narrate stories in other languages
- [ ] **Patreon Integration** – Premium features for supporters

---

## 🐛 Known Limitations

- Voice quality depends on the user's browser and operating system
- Microsoft Edge has the best voice quality (Neural voices)
- Chrome and Safari have good voices but fewer options
- Very long stories (>5000 words) may take longer to process
- Free Groq tier has rate limits (check [console.groq.com](https://console.groq.com))

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Use ESLint for code formatting (`npm run lint`)
- Keep components focused and reusable
- Add comments for complex logic
- Test voice assignment on multiple browsers

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Groq** – For their incredible, ultra-low latency inference API (lightning fast!)
- **React** – For making UI development a joy
- **Vercel** – For making deployment effortless
- **Web Speech API** – For bringing TTS to the browser

---

## 📞 Contact

**Abu Ansari**  
- GitHub: [@AbuAnsari-06](https://github.com/AbuAnsari-06)
- Project Link: [https://github.com/AbuAnsari-06/NarrateAI](https://github.com/AbuAnsari-06/NarrateAI)

---

**Made with ❤️ and AI**
