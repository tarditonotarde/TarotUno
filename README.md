# 🎴 UNO Tarot

> Where your future is as unpredictable as the game

A satirical fortune-telling web app that transforms the classic UNO card game into a darkly humorous tarot reading experience. Get your past, present, and future revealed through 72 UNO cards with biting irony and black humor.

## ✨ Features

- 🎯 **72 Unique Readings:** Every UNO card has a custom interpretation with dark humor
- 📱 **Mobile-First Design:** Optimized for touch interactions and small screens
- 🎨 **Authentic UNO Aesthetic:** True to the original game's bold, minimalist design
- ⚡ **Smooth Animations:** Buttery card flips and transitions
- 🎭 **Three-Card Reading:** Past, Present, and Future in one session
- 🌙 **Dark Mode:** Black background with vibrant UNO colors
- 🚀 **Zero Dependencies:** Pure CSS animations, no bloat

## 🎮 How to Use

1. **Wait for the splash screen** - Let the UNO magic load
2. **Tap the glowing card pile** - Draw your Past card
3. **Read your fate** - Each card reveals for 3 seconds
4. **Continue tapping** - Draw Present and Future cards
5. **Contemplate your doom** - All three cards displayed together
6. **Start over** - Hit "Draw Your Doom" to try again

## 🛠️ Tech Stack

- **React 18** + TypeScript
- **Vite** - Lightning fast builds
- **Tailwind CSS v4.0** - Utility-first styling
- **Figma Imports** - UNO card components
- **Poppins Font** - Clean, modern typography

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/uno-tarot.git

# Navigate to project directory
cd uno-tarot

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app in action!

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## 📦 Project Structure

```
uno-tarot/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── SplashScreen.tsx      # Animated intro
│   │   │   ├── UnoCard.tsx           # Card component
│   │   │   └── CardRenderer.tsx      # Card display logic
│   │   ├── utils/
│   │   │   ├── tarotReadings.ts      # 72 interpretations
│   │   │   └── cardComponents.ts     # Card mappings
│   │   └── App.tsx                   # Main app component
│   ├── imports/
│   │   └── UnoCards.tsx              # Figma components
│   └── styles/
│       ├── fonts.css                 # Poppins font import
│       ├── theme.css                 # Color variables
│       └── tailwind.css              # Tailwind config
├── .github/
│   └── workflows/
│       └── deploy.yml                # Auto-deploy to GitHub Pages
├── CASE_STUDY.md                     # Full project case study
├── DEPLOYMENT.md                     # Deployment guide
└── README.md                         # You are here
```

## 🎨 Design Philosophy

- **Minimalist & Flat:** True to UNO's original visual identity
- **Bold Colors:** Red (#ED1C24), Blue (#0062A8), Green (#179E4D), Yellow (#FED116)
- **Black Background:** Creates dramatic contrast and mystical vibe
- **Responsive:** Works perfectly on mobile, tablet, and desktop
- **Performant:** CSS-only animations, no heavy libraries

## 📖 Reading Examples

**Red 0 (Past):**
> "You started from nothing. Literally. Zero ambition, zero plans, zero clue. And somehow, you're still here. Congratulations on that participation trophy called 'existence.'"

**Blue Reverse (Present):**
> "Everything you thought was moving forward is actually going backward. Your progress is an optical illusion. Enjoy the ride backwards, you're the driver now."

**Wild Card (Future):**
> "Pure chaos awaits. The universe is shuffling the deck and you drew the joker. Anything can happen, and it probably will. Buckle up, buttercup."

## 🌐 Live Demo

🔗 **[View Live App](https://YOUR-USERNAME.github.io/uno-tarot/)**

## 📝 License

This project is a parody/educational work using UNO™ card imagery. UNO™ is a trademark of Mattel, Inc. This is not an official Mattel product and is not affiliated with or endorsed by Mattel.

For educational and entertainment purposes only.

## 👤 Author

**Claudia Tardito**

- Website: [Your Website]
- GitHub: [@YOUR-USERNAME](https://github.com/YOUR-USERNAME)
- Portfolio: [Your Portfolio]

## 🙏 Acknowledgments

- UNO™ by Mattel for the iconic card game
- Google Fonts for Poppins typography
- The React community for amazing tools

## 📚 Documentation

- [Full Case Study](./CASE_STUDY.md) - Deep dive into design and development
- [Deployment Guide](./DEPLOYMENT.md) - How to deploy to GitHub Pages

---

**"Draw your doom, one card at a time"** 🎴✨

Built with ♠️ and dark humor
