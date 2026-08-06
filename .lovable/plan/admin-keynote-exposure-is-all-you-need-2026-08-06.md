# Admin Keynote: "Exposure Is All You Need"

A new admin-only area, protected by the same passkey already emailed to 4igroupss@gmail.com, containing a presentable keynote deck, a downloadable PowerPoint version, and a searchable browser of 2000+ unconventional careers.

## What gets built

### 1. Shared admin gate
Right now the passkey check lives inside the blueprint page. It becomes a reusable gate so every admin page (blueprint, keynote, careers) unlocks with one passkey entry per session.

New admin hub at `/admin` listing:
- Neural Blueprint (existing)
- Keynote: Exposure Is All You Need
- Careers Explorer (2000+)

### 2. The keynote — `/admin/keynote`
A real presentation app, not a static page:
- Fixed 1920x1080 slides scaled to fit any screen
- Fullscreen present mode (F5), arrow/space navigation, Esc to exit
- Grid overview of all slides
- Speaker notes panel per slide
- Print route (`/admin/keynote?print`) → Cmd+P → PDF handout

Visual direction: dark cinematic theme, bold high-contrast typography, one idea per slide, layered paper-diorama-inspired scenes built from vector shapes and gradients (no copyrighted characters), original AI-generated illustrations for key moments.

Slide flow follows the 12-part structure:

```text
01  Cold open: "You can name 15 careers. The world has 20,000."
02  Why do students know only 10-20 careers?
03  The Exposure Gap (infographic)
04  Thousands of careers exist (world map / industry spread)
05  Why schools and families can't teach them all
06  How interest is born: exposure -> curiosity -> skill
07  ACTIVITY: Career guessing game (interactive slides)
08  The unconventional careers showcase (career tree)
09  The 6-lens choice framework: Passion, Skill, Market,
    Lifestyle, Purpose, Growth
10  Real people, unconventional paths
11  Future careers: AI, climate, biotech, robotics, space
12  ACTIVITY: 30-Day Career Exploration Challenge
13  Closing: "Don't choose the most popular career.
    Choose the career that fits you."
```

Every slide ships with speaker notes, a visual suggestion note, and where relevant a quotable line and an audience activity.

Language: simple English for Classes 8-12, with Indian examples (a Bengaluru game-studio sound designer, an ISRO propulsion tech, a mango-orchard agronomist, an esports analyst, and so on).

### 3. Careers Explorer — `/admin/careers`
A searchable, filterable browser of 2000+ unconventional careers:
- Instant text search
- Filter by industry (~30 industries), and by "future-facing" tag
- Virtualised list so 2000+ rows stay fast
- Each entry: title, industry, one-line description of what the person actually does
- "Random career" button (feeds the guessing game)
- Export to CSV

Honest note on volume: 2000+ distinct career titles grouped by industry will be authored across data files. Every entry gets a one-line description; they will be real, recognisable roles, not padded variations.

### 4. Downloadable .pptx
A generated `Exposure_Is_All_You_Need.pptx` matching the deck's dark keynote design, with the speaker notes embedded in each slide's notes field, delivered as a downloadable file and linked from the admin keynote page.

## Technical notes

- **Gate**: extract the existing passkey flow into `src/components/admin/AdminGate.tsx` + `useAdminAuth` hook, both calling the existing `admin-blueprint` edge function `verify` action. `AdminBlueprintPage` is refactored to use it — no change to the passkey or the edge function.
- **Deck**: `src/components/keynote/ScaledSlide.tsx` (1920x1080 + transform scale), slide components under `src/components/keynote/slides/`, registry in `src/data/keynote/slides.ts` holding `{ id, Component, notes, visualSuggestion }`. Current slide index in the URL (`?slide=N`).
- **Tokens**: keynote-specific `--kn-*` CSS variables added to `src/index.css` (deep near-black ground, warm ivory type, single amber accent) so the dark deck never touches the site's light theme.
- **Careers data**: `src/data/careers/*.ts` split by industry group into ~8 files, each exporting a typed `Career[]`, merged in `src/data/careers/index.ts`. Roughly 300KB of data, code-split behind the lazy route so it never loads for public visitors.
- **Routes**: `/admin`, `/admin/keynote`, `/admin/careers` added lazily in `src/App.tsx`, all `noindex` via `SEOHead`, and excluded from the sitemap.
- **PPTX**: generated with pptxgenjs in the sandbox, visually QA'd slide by slide, then delivered as a downloadable artifact and committed to `public/` so the admin page can link it.
- No database changes, no new secrets.

## Sequence

1. Admin gate + `/admin` hub, refactor blueprint page
2. Keynote shell (scaling, nav, fullscreen, grid, notes, print)
3. All 13 slides with content, notes and illustrations
4. Careers data files (2000+) + Careers Explorer page
5. PPTX generation and QA
