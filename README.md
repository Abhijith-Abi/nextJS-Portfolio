## Abhijith P A — Frontend Developer Portfolio

This is a modern, animated portfolio website for **Abhijith P A**, built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **GSAP**, and **Recharts**.  
It showcases experience, skills, projects, and contact details in a single-page, scroll-animated layout with a dark, glassmorphic theme.

### Tech Stack

- **Framework**: Next.js (App Router, TypeScript)
- **UI**: Tailwind CSS, custom components
- **Animations**: GSAP + ScrollTrigger, custom cursor, background orbits
- **Charts**: Recharts (skills visualization)
- **Design style**: Dark theme, glassmorphism, smooth scrolling, responsive design

### Getting Started

1. **Install dependencies**

```bash
npm install
```

2. **Run the development server**

```bash
npm run dev
```

3. Open `http://localhost:3000` in your browser.

### Project Structure (key files)

- `app/layout.tsx` — Global layout, metadata, theme, favicon.
- `app/page.tsx` — Main single-page portfolio composition.
- `components/Navbar.tsx` — Sticky navigation with smooth scroll + mobile menu.
- `components/Hero.tsx` — Hero section with intro, CTAs, and GSAP entrance.
- `components/AboutSection.tsx` — About + profile image.
- `components/SkillsSection.tsx` — Tech stack badges + skills bar chart.
- `components/ProjectsSection.tsx` — Project cards with tech tags.
- `components/ExperienceSection.tsx` — Timeline of experience.
- `components/ContactSection.tsx` — Contact form with basic validation.
- `components/SectionWrapper.tsx` — Shared section wrapper with scroll reveal.
- `components/CursorFollower.tsx` — Custom cursor animation.
- `public/profile.png` — Personal photo used as avatar and favicon.

### Customization

- **Content**: Update text, links, and project details directly in the components above.
- **Profile image / logo**: Replace `public/profile.png` with another image (same name) or update the paths in `Navbar` and `layout.tsx`.
- **Colors / theme**: Edit `tailwind.config.ts` (`colors.background`, `accent`, etc.) and any Tailwind classes in components.
- **Animations**: Adjust GSAP settings in `Hero.tsx`, `SectionWrapper.tsx`, `SkillsSection.tsx`, and `CursorFollower.tsx`.

### Production Build

```bash
npm run build
npm start
```

This will create an optimized production build and start the server.


