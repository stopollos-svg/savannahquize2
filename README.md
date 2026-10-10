# Scariest Animals of the Savannah Quiz

An immersive, educational wildlife quiz web app hosted by **Ranger Kofi**, featuring Africa's 20 deadliest creatures.

## Vercel Deployment Instructions

This repository is pre-configured for seamless, zero-config deployment on [Vercel](https://vercel.com).

### Option 1: Git Integration (One-Click)
1. Push this repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to your [Vercel Dashboard](https://vercel.com/new).
3. Click **"Add New..."** > **"Project"** and import this repository.
4. Vercel automatically detects the project and `vercel.json` configuration:
   - **Framework Preset**: Other / None
   - **Root Directory**: `./`
   - **Output Directory**: `public`
5. Click **Deploy**. Your quiz will be live on your custom `.vercel.app` URL immediately!

### Option 2: Vercel CLI
If deploying from your terminal using the Vercel CLI:
```bash
# Install Vercel CLI if you haven't already
npm i -g vercel

# Deploy directly to preview
vercel

# Deploy to production
vercel --prod
```

### Local Testing
To test the web app locally before deploying:
```bash
# Start a local static server
npm start
# Opens on http://localhost:3000
```

## Features Included
- **20 Verified Deadly Animals**: Hippos, Cape Buffalo, Black Mambas, Puff Adders, Honey Badgers, and more.
- **Ranger Kofi Expert Guidance**: Real-time feedback, correct/incorrect explanations, and wildlife biology facts.
- **Scoring & Ranks**: Strict 5 points per question (100 total points max), calculating final percentage ranks:
  - 0–30%: *Tourist* 🏕️
  - 31–70%: *Ranger Trainee* 🧭
  - 71–100%: *Apex Predator* 🦁
- **Synthesized Audio Engine**: Web Audio API generated sound effects (lion roars, serpent hisses, hippo grunts, click feedback, victory fanfares) with mute toggle.
- **Smooth Polish & Animations**: CSS fade-out/fade-in transitions between questions and badges.
- **Social Sharing**: Copy score and rank to clipboard or share directly on 𝕏 (Twitter) and WhatsApp.
- **Vercel Optimizations**: `vercel.json` with SPA rewrites, strict security headers, and static caching headers.
