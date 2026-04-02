# NoRobot.ai

A warm, human positioning page for NoRobot — tools that make life better.

## What this site is

NoRobot.ai is the public home of the NoRobot brand. It's not a tool or product, but a positioning page that explains who NoRobot is and which tools fall under it. No pricing, no sign-ups, no forms.

Visual inspiration: [posthuman.nl](https://posthuman.nl) — warm, human, playful but confident. Studio aesthetic, not SaaS.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Google Fonts: Playfair Display + Inter (loaded via next/font)
- Fully static export (no backend, no auth, no database)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Build for Production

```bash
npm run build
```

This creates a static export in the `dist/` folder.

## Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Build settings are auto-detected from `next.config.js`
4. Deploy

## Design System

**Colors:**
- Background: #F5F0E8 (warm cream/off-white)
- Primary text: #1A1A1A
- Subtext: #6B6560
- Logo accent: #D4580A (warm orange/terracotta)
- Button signal: #CBFF00 (electric yellow)

**Typography:**
- Headlines: Playfair Display (serif, mix of normal + italic)
- Body/UI: Inter (sans-serif)
- Tool names: Compact uppercase sans-serif

**Style Rules:**
- No large decorative icons
- No em-dashes in copy
- Generous whitespace
- No gradients
