# Aryan Kulshreshtha — Personal Portfolio

A premium personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- ⚡ Next.js 14 App Router
- 🎨 Glassmorphism dark theme with electric blue/purple gradients
- 🌊 Framer Motion animations (page transitions, scroll reveals, typing effect)
- 🎆 Interactive particle background
- 📱 Fully responsive (mobile-first)
- 🌙 Dark/Light mode toggle
- 🔍 SEO optimized with metadata
- 🚀 Vercel deployment ready
- 📜 Scroll progress indicator
- ⬆️ Back-to-top button
- 🏆 Certificate gallery with search/filter + modal
- 📬 Contact form with validation and success animation

## Sections

1. **Hero** — Animated typing effect, floating profile card, CTA buttons
2. **About** — Story beats, personal traits grid
3. **Education** — TAPMI Bengaluru card with coursework tags
4. **Skills** — Animated progress bars, 10 skill cards
5. **Achievements** — Certificate gallery with search, filter, modal viewer
6. **Community** — Youth org profile with mission/vision/impact stats
7. **Interests** — 10 interest cards with micro-interactions
8. **Projects** — 6 project cards with status badges
9. **Social Hub** — 6 platform cards with hover effects
10. **Contact** — Form with validation + success animation
11. **Footer** — Links, social icons, branding

---

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Navigate into the project
cd aryan-portfolio

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Customization Checklist

### Replace Placeholder Content

| Section | What to Update |
|---|---|
| **Hero** | Profile photo — replace the AK monogram div with `<Image src="/photo.jpg" ... />` |
| **Social** | Update all `href` values in `SocialSection.tsx` and `Footer.tsx` |
| **Contact** | Update email, phone in `ContactSection.tsx` and `Footer.tsx` |
| **Community** | Replace "Your Community Name" in `CommunitySection.tsx` |
| **Projects** | Replace placeholder cards with real project data in `ProjectsSection.tsx` |
| **Achievements** | Replace `placeholderCerts` array with real certificates in `AchievementsSection.tsx` |

### Add Your Profile Photo

1. Save your photo as `public/photo.jpg`
2. In `HeroSection.tsx`, replace the AK monogram block with:

```tsx
import Image from "next/image";

// Inside the profile container div:
<Image
  src="/photo.jpg"
  alt="Aryan Kulshreshtha"
  fill
  className="object-cover"
  priority
/>
```

### Update SEO Metadata

Edit `app/layout.tsx`:
- Update the `url` field with your actual domain
- Update social media handles in `twitter.creator`

### Connect Contact Form

The contact form currently simulates a request. To make it real, integrate with:
- **Resend** (recommended): `npm install resend` → create a `/api/contact` route
- **EmailJS**: client-side, no backend needed
- **Formspree**: drop-in form handling

Example API route (`app/api/contact/route.ts`):
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();
  await resend.emails.send({
    from: 'portfolio@yourdomain.com',
    to: 'aryan@email.com',
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name} (${email})\n\n${message}`,
  });
  return Response.json({ ok: true });
}
```

---

## Build for Production

```bash
npm run build
npm start
```

---

## Deploy to Vercel

### Option 1: CLI (fastest)

```bash
npm install -g vercel
vercel
```

### Option 2: GitHub + Vercel Dashboard

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Done! Your site is live in ~60 seconds

### Environment Variables (if using contact form API)

Add in Vercel Dashboard → Settings → Environment Variables:
```
RESEND_API_KEY=your_key_here
```

---

## Project Structure

```
aryan-portfolio/
├── app/
│   ├── globals.css          # Global styles, CSS vars, animations
│   ├── layout.tsx           # Root layout + SEO metadata
│   └── page.tsx             # Main page (section assembly)
├── components/
│   ├── LoadingScreen.tsx    # Animated loading screen
│   ├── Navbar.tsx           # Sticky nav with active section tracking
│   ├── Footer.tsx           # Footer with links + socials
│   ├── ui/
│   │   ├── BackToTop.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── SectionWrapper.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── EducationSection.tsx
│       ├── SkillsSection.tsx
│       ├── AchievementsSection.tsx
│       ├── CommunitySection.tsx
│       ├── InterestsSection.tsx
│       ├── ProjectsSection.tsx
│       ├── SocialSection.tsx
│       └── ContactSection.tsx
├── public/                  # Static assets (add your photo here)
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Tech Stack

| Package | Version | Purpose |
|---|---|---|
| next | 14.2.5 | React framework (App Router) |
| react | 18 | UI library |
| framer-motion | 11 | Animations |
| lucide-react | 0.414 | Icons |
| tailwindcss | 3.4 | Styling |
| typescript | 5 | Type safety |

---

## License

Personal portfolio — for Aryan Kulshreshtha's use. All rights reserved.
