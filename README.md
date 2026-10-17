# FANTAHUN BELACHEW / STORIES IN MOTION

An original cinematic portfolio website built with **Next.js 16, React 19, Tailwind CSS v4, GSAP, Lenis, Motion, and Lucide React**. Includes eight project case studies, a stills archive, an immersive image-based Director's Cut, an about page, and a contact experience.

## Get started (Windows PowerShell)

Install **Node.js 22 LTS or newer** from https://nodejs.org/, extract this ZIP, then open PowerShell **inside the folder containing `package.json`**.

```powershell
npm install
npm run dev
```

Open **http://localhost:3000**.

To test a deploy-ready build:

```powershell
npm run build
npm run start
```

Or double-click `START-WINDOWS.bat` to install dependencies and start development mode.

## Enable real email / social links

The supplied PDF does not include a verified contact email, LinkedIn URL, or Instagram URL. We deliberately did **not** fabricate them or create a fake backend that claims enquiries are sent.

1. Copy `.env.example` to `.env.local`.
2. Add his confirmed addresses:

```env
NEXT_PUBLIC_CONTACT_EMAIL=confirmed-address@example.com
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/real-profile
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/real-profile
```

3. Restart the development server. Without a configured email, the form copies a draft to the visitor's clipboard. With an email, it opens their email client with a prepared message. For server-side submission, integrate a verified email service and protect its credentials in a server-only environment variable.

## Assets / permissions

- All `/public/images` photos were cropped from the PDF supplied by the user (`photography website(1).pdf`). No invented footage, stock images, or AI-generated visuals were used.
- The source PDF includes project photos but **not playable clips**, so the Director's Cut interaction is clearly a **photographic sequence, not a video showreel**.
- Some images are necessarily limited in quality by the PDF. Replace them with Fantahun's original high-resolution media for a public-facing production site.
- **Get Fantahun's approval and confirm publication rights** before deploying publicly. This ZIP is a portfolio prototype using user-supplied assets, not a statement of ownership.
- Project names, clients, locations, services and roles were transcribed from the PDF. Editorial descriptions are creative presentation copy, not additional client or project claims.
- The About page has deliberately avoided unverifiable years of experience, awards, qualifications, and client testimonials.

## Replace images

Put the new photos into `/public/images/`, keeping the original file paths, or update the entries in `lib/projects.ts`. Aim for 1600–2400px wide JPEG/WebP stills. The image optimization pipeline uses `next/image`.

## Structure

- `app/page.tsx` — cinematic home
- `app/work/page.tsx` — category-filterable project archive
- `app/work/[slug]/page.tsx` — dynamically generated case studies
- `app/stills/page.tsx` — editorial photo wall
- `app/about/page.tsx` — filmmaker profile
- `app/contact/page.tsx` — accessible contact form
- `components/DirectorCut.tsx` — keyboard-friendly image sequence
- `components/SmoothScroll.tsx` — GSAP / Lenis integration
- `app/globals.css` — complete responsive visual system
- `lib/projects.ts` — source-grounded portfolio content

## Design notes

Palette: obsidian `#101112`, film ivory `#eeebe4`, amber `#d8ad69`, warm paper `#e7e4dc`. Typography: Archivo, DM Sans, Cormorant Garamond via `next/font/google`. Reduced-motion preference is respected.

## Deployment

Push the project to GitHub and import it into Vercel; set environment variables in the Vercel dashboard. Alternatively, deploy with `npx vercel` after installing the Vercel CLI. All pages except browser-side interactions are statically renderable, and the case study pages use `generateStaticParams`.
