# Portfolio – CLAUDE.md

Personal portfolio website for Julius Beutel, a software engineer with a background in iOS development, BLE/embedded firmware, and frontend development. Target audience: recruiters and hiring managers.

## Stack

- **Framework**: React 19 + TypeScript (Vite)
- **Styling**: Tailwind CSS v4 (no `tailwind.config.js` — config is in `src/index.css` via `@theme`)
- **Animations**: Framer Motion v12
- **Icons**: lucide-react (note: `Github` and `Linkedin` are NOT in the installed version — use inline SVG components defined in `Hero.tsx`)
- **Build**: `npm run dev` / `npm run build`
- **Assets**: `src/assets/portrait.png` (hero portrait), `src/assets/hero.png` (unused)

## Design System

All design tokens live in `src/index.css` under `@theme`. Tailwind v4 auto-generates utility classes from them:

| Token | Class | Value |
|---|---|---|
| `--color-bg` | `bg-bg` | `#0d0d0d` |
| `--color-bg-surface` | `bg-bg-surface` | `#141414` |
| `--color-bg-elevated` | `bg-bg-elevated` | `#1c1c1c` |
| `--color-border` | `border-border` | `#2a2a2a` |
| `--color-text-primary` | `text-text-primary` | `#f0f0f0` |
| `--color-text-secondary` | `text-text-secondary` | `#a0a0a0` |
| `--color-text-muted` | `text-text-muted` | `#606060` |
| `--color-accent` | `text-accent` / `bg-accent` | `#4f8ef7` |
| `--color-accent-dim` | `bg-accent-dim` | `#2563eb` |

**Always use canonical class names** (e.g. `text-accent`) not CSS variable references (e.g. `text-[var(--color-accent)]`).

Fonts: Inter (sans), JetBrains Mono (mono), loaded via Google Fonts in `index.css`.

**Framer Motion variants**: In FM v12, `ease` inside variant transition objects must be a named string (`'linear'`, `'easeIn'`, `'easeOut'`, `'easeInOut'`, `'circIn'`, etc.) or a bezier tuple. String literals widen to `string` and cause TS errors — omit `ease` from variant transitions or use `as const` on the value.

## Architecture

```
src/
├── hooks/
│   └── useActiveSection.ts     # IntersectionObserver-based active section hook
├── types/index.ts               # Shared TS interfaces
├── data/                        # Content data — never hardcode content in components
│   ├── experience.ts            # 3 STIHL entries with startDate/endDate structured fields
│   ├── projects.ts              # Guitar App, Animal Learning App, Bachelor Thesis
│   ├── skills.ts                # 7 skills with devicon CDN icon URLs + proficiency 0-100
│   └── education.ts             # 1 HdM Stuttgart entry
├── components/
│   ├── background/
│   │   └── BackgroundLayer.tsx  # Global animated particle background (see below)
│   ├── IntroAnimation.tsx       # Full-screen intro: typewriter titles → "Julius Beutel" → fades out
│   ├── CursorTrail.tsx          # 3-dot spring cursor trail (hidden on mobile)
│   ├── MagneticWrapper.tsx      # Magnetic hover effect wrapper for buttons
│   ├── layout/
│   │   ├── Navbar.tsx           # Fixed top, scroll-aware blur, mobile hamburger
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Section.tsx          # id + centered title + accent underline + children
│   │   ├── Card.tsx             # Dark surface card, optional hover state
│   │   └── Button.tsx           # primary (blue fill) / ghost (bordered), supports icon + href
│   └── features/
│       ├── ExperienceItem.tsx   # (legacy, unused)
│       ├── ProjectCard.tsx      # Aspect-ratio screenshot area + GitHub link
│       └── SkillIcon.tsx        # Icon + label card (no proficiency arc)
└── sections/
    ├── Hero.tsx                 # id="hero", IntroAnimation → 2-col layout
    ├── Experience.tsx           # Sticky scroll timeline (id="experience" on inner div)
    ├── Projects.tsx             # id="projects"
    ├── Skills.tsx               # id="skills", grouped by category
    └── Education.tsx            # id="education"
```

## TypeScript Types (`src/types/index.ts`)

```ts
export interface DatePoint { month: number; year: number; }

export interface ExperienceEntry {
  id: string; role: string; company: string; period: string;
  startDate: DatePoint; endDate: DatePoint;
  description: string[]; technologies: string[]; logoUrl?: string;
}
```

`verbatimModuleSyntax` is enabled — always use `import type` for type-only imports.

## Key Implementation Notes

### Global Background System (`BackgroundLayer.tsx`)
Replaces all per-section SVG motifs. Architecture:
- **`useActiveSection(ids)`** — IntersectionObserver hook, returns the id of the section currently centered in the viewport (`rootMargin: '-35% 0px -35% 0px'`). Pass a stable module-level `as const` array.
- **`BackgroundLayer`** — `fixed inset-0 -z-10`, covers full viewport. Uses `useActiveSection` to detect the current section, then cross-fades between particle sets using `AnimatePresence` (no `mode` → simultaneous enter/exit cross-dissolve).
- **Particle positions** — 55 particles with deterministic positions via seeded `Math.sin` pseudo-random, generated at module load. Stable across renders.
- **Mouse parallax** — `window.addEventListener('mousemove')`, translates the background layer ±20px/±14px via `useSpring` (stiffness 40, damping 25).
- **Shapes per section**:

| Section | Shape | Opacity |
|---|---|---|
| `hero` | dot (1.5×1.5 rounded div) | 0.14 |
| `experience` | dash (14×1.5 rect) | 0.11 |
| `projects` | code (`< >` SVG brackets) | 0.12 |
| `skills` | diamond (1.5×1.5 rotated div) | 0.13 |
| `education` | cap (mortarboard SVG) | 0.12 |

- **Transition**: `AnimatePresence` keys on active section. `containerVariants` stagger children 0.006s. `itemVariants` animate `opacity: 0→1, scale: 0.3→1` (enter) and reverse (exit).

### Section IDs (required for background detection)
Every section must have its HTML element carry the correct id:
- Hero: `<section id="hero">` (in `Hero.tsx` directly, since it doesn't use `Section.tsx`)
- Experience: `<div id="experience">` (the sticky inner div in the 500vh wrapper)
- Projects/Skills/Education: id passed to `<Section id="...">` which renders `<section id="...">`

### Intro Animation (`IntroAnimation.tsx`)
- Cycles through 5 titles with a per-character typewriter effect (38ms/char)
- After the last title, "Julius Beutel" fades in center-screen, then overlay exits (0.55s)
- Has "skip →" button top-right
- Controlled via `introComplete` state in `Hero.tsx` using `AnimatePresence`
- Hero `h1` uses `initial={{ opacity: 0, y: -24 }}` to simulate name descending from intro center

### Hero Section (`Hero.tsx`)
- Left: label, h1, tagline, 3 buttons (GitHub primary + LinkedIn ghost + Contact ghost)
- Right: portrait (`src/assets/portrait.png`), `w-72 md:w-96`, natural aspect ratio (`h-auto`)
- All content only renders after `introComplete === true`
- `GithubIcon` and `LinkedinIcon` are inline SVG components at the top of Hero.tsx
- All 3 buttons wrapped in `<MagneticWrapper>`

### Cursor Trail (`CursorTrail.tsx`)
- Three `useSpring` dots: stiffness 600/200/70 for natural trail lag
- Opacity: `bg-accent/70`, `bg-accent/50`, `bg-accent/40`
- `hidden md:block`, `pointer-events-none`, `z-[9998]`
- Negative `top`/`left` offsets to center each dot on cursor

### Magnetic Wrapper (`MagneticWrapper.tsx`)
- `strength=0.35`, spring `stiffness: 180, damping: 14`
- `onMouseMove`: computes delta from element center × strength
- `onMouseLeave`: springs back to 0

### Section Component (`Section.tsx`)
- Props: `{ id, title, children, className? }` — **no motif prop** (global background replaced it)
- Renders `<section id={id} className="py-24 px-6 relative">` with centered h2 + accent underline

### Experience Section (`Experience.tsx`) — Sticky Scroll Timeline
**Structure**: `<div style={{ height: '500vh' }}>` wrapper + `<div id="experience" class="sticky top-0 h-screen">` inner

**Scroll behavior**: Derives `fraction` (0→1) from `wrapperRef.current.getBoundingClientRect().top` on native `scroll` event. No wheel event interception — uses sticky positioning instead.

**Layout (left → right)**:
1. Year labels column (34px): years 2022–2024 at correct fractional Y
2. Timeline spine column (40px): 1px vertical line, month ticks (8px, 15px for quarters), STIHL icons at each entry's midpoint, blue cursor dot tracking `fraction`
3. Card area (flex-1): horizontal connector + `DetailCard`, spring-animated to `activeY`

**Constants**: `TIMELINE_H = 380`, `TOTAL_MONTHS = 35`, `TIMELINE_START = {month:1,year:2022}`, `TIMELINE_END = {month:12,year:2024}`

**Active entry**: closest entry by `midFraction` distance from current `fraction`.

**STIHL icon**: Orange (#FF6600) + scale 1.3 when active, `bg-elevated` when inactive.

### Skill Icons (`SkillIcon.tsx`)
- Simple: devicon image + label, no proficiency arc
- `whileHover={{ scale: 1.08 }}`

### Project Cards (`ProjectCard.tsx`)
- Top: `aspect-video` image area (placeholder `ImageIcon` if no `imageUrl`)
- Bottom-right: "View on GitHub" ghost button

### Button Component (`Button.tsx`)
- Accepts `icon?: React.ReactNode`
- External links (http/https): `target="_blank" rel="noopener noreferrer"`
- `mailto:` and internal links: no target

### Tailwind v4 Notes
- No `tailwind.config.js` — all config in `src/index.css`
- Plugin: `@tailwindcss/vite` (in `vite.config.ts`)
- Dark mode: `<html class="dark">` in `index.html`; whole site is dark-only

## Content To Fill In Later

- `src/data/projects.ts`: Add real `imageUrl` per project
- `src/data/projects.ts`: Add real `githubUrl` per project (currently all point to profile)
- `src/data/education.ts`: Verify institution name and date range
- `src/data/experience.ts`: `logoUrl` field exists on `ExperienceEntry` to swap STIHL text badge for real logo
