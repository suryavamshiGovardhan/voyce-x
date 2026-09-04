# One calm reading surface for every Learn page

Right now the marketing pages are light and calm, while the learning pages still carry the old dark-gradient theme (deep slate/purple/emerald backgrounds, white text, glass cards). This plan converts every learning page to the same white, Japanese-minimalist reading surface. No page, route, or paragraph of content is removed — only the shell and styling change.

## What it will look like

- Warm off-white background, generous whitespace, one narrow reading column (about 68–72 characters wide).
- Quiet page opening: small eyebrow label, serif display heading, one calm intro line, a thin rule. No giant 7xl gradient headings, no glass panels.
- Body text in dark charcoal at comfortable reading size and line height; headings in the display serif.
- Cards become soft light surfaces with a hairline border instead of dark translucent glass.
- Tabs and accordions become quiet text-first controls with an underline/soft-fill active state.
- Long pages get an "on this page" section list on desktop and a back-to-top link on mobile.

## Pages being redesigned

Learn / topic pages: Stress, ADHD, ACEs Impact, Mind–Heart–Gut, Neuroscience, Brain, Trauma, CDS, Psychology Theories.

Study / reference pages: DSM-5 Guide, DSM-5 Academy, DSM-5 Module, ICD-9 index and detail, Integrated Diagnostics, Quizzes.

Other dark surfaces on the same reading track: Library, Tools, Path, Workbook, Series episode pages, Blog listing.

## Technical approach

1. New `src/components/site/LearnPageShell.tsx` wrapping the existing `PageShell` (so unified header, footer, and SEO metadata stay). Props: `eyebrow`, `title`, `intro`, `canonical`, `description`, optional `sections` for the on-this-page rail. Renders the light hero, the constrained prose container, and consistent vertical rhythm.
2. Each listed page swaps its `min-h-screen bg-gradient-to-br from-slate-900 …` wrapper plus its own `Navbar`/`Footer` for `LearnPageShell`, keeping all existing children (content components, `ModuleTracker`, `ShareStoryButton`, resource/statistic blocks) untouched in structure.
3. Content components in `src/components/content/*` (Stress, ADHD, ACEs, Brain, Trauma, Neuroscience, MindHeartGut) get a token pass: hardcoded `text-slate-100 / text-slate-300 / text-slate-700 / bg-white/10 / bg-white/70 / border-teal-200` replaced with semantic tokens (`text-foreground`, `text-muted-foreground`, `bg-card`, `border-border`, `text-primary`). Same for the ICD-9, DSM-5, diagnostics and quiz components.
4. Add small shared reading primitives to `src/components/site/primitives.tsx`: `Prose` (typographic container), `ReadingCard`, `QuietTabs` styling helper — so the pages stay consistent instead of each re-inventing spacing.
5. Keep `EnhancedMusicPlayer` where it exists but render it as a discreet corner control rather than an overlay on the reading area.
6. Verify with a type check and a Playwright pass over each converted route, screenshotting a few to confirm contrast and that no content is missing.

## Explicitly not doing

- No content deleted, shortened, or reworded.
- No route changes and no removal of legacy pages.
- Dark mode tokens remain intact; pages simply follow the site theme instead of forcing their own gradients.
  > Remember this:- Don't change our writing style - the style must be KATA style, and we have added all the religious things like islamic, hindu, Greek and many more don't distrub them while re-design, they to important....
  **And complete this as quick as possible with the credits limit now you have..**
- If you are removing any information tell me about that..
- And in invisible INHERITANCE TEST also same re-design required..
- And admin page too I think 