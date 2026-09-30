# Bethelhem Habtamu — Digital Business Card

A premium personal profile microsite for Bethelhem Habtamu, designed as a digital business card experience for QR-code destinations and mobile-first visitors.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

## Deploy on Vercel

Connect this repository to Vercel, or run:

```bash
npx vercel
```

No special configuration is required.

## Customize

Edit structured content in `src/data/profile.ts`:

- name, role, tagline
- contact links
- skills
- selected work projects
- site URL used for SEO / sharing

## Features

- Mobile-first digital identity card
- Contact links (email, GitHub, LinkedIn, portfolio)
- Save Contact (downloads a `.vcf` vCard)
- Share via Web Share API with clipboard fallback
- SEO metadata (Open Graph + Twitter)
- Accessible focus states and reduced-motion support
