# Invisible Inheritance — PDF, Share Links & Maximalist Redesign

## 1. Download PDF on the Report

On `InvisibleInheritanceReportPage.tsx`, add a **Download PDF** button (top + bottom of report) that captures the rendered reflection as a styled, multi-page PDF.

- Use `html2canvas` + `jspdf` (lightweight, client-side, no backend).
- Wrap the report sections (overall alignment, constellation, dimension cards, conversations, disclaimer) in a `reportRef` div.
- PDF style: dark cinematic canvas, serif headings, session code in header, footer with disclaimer + voyce-x.lovable.app link.
- Filename: `invisible-inheritance-{SESSIONCODE}.pdf`.
- Button only enabled when both partners have completed.

## 2. Shareable Results Link + Copy-to-Clipboard

Already partially exists in `SessionCodeCard.tsx`. Extend and surface on the **report page** too:

- New `ShareLinksPanel` shown at top of report:
  - Partner A link → `/invisible-inheritance/test/{CODE}/take/a`
  - Partner B link → `/invisible-inheritance/test/{CODE}/take/b`
  - Shared report link → `/invisible-inheritance/test/{CODE}/report`
  - Each row: label + truncated URL + **Copy** button (with copied checkmark feedback, reuse existing pattern).
- Add a single **Share** button using `navigator.share()` when available, falling back to copying the report link.
- Same panel also appears on the "waiting for the other half" state so partners can resend.

## 3. Maximalist Redesign — All Invisible Inheritance Pages

Apply a unified **maximalist cinematic** aesthetic across:

- `InvisibleInheritancePage.tsx` (vision page)
- `InvisibleInheritanceTestPage.tsx` (landing/session creation)
- `InvisibleInheritanceTestTakePage.tsx` (test stepper)
- `InvisibleInheritanceReportPage.tsx` (results)
- `InvisibleInheritancePopup.tsx` (home popup)
- Supporting components: `QuestionStage`, `DimensionIntro`, `SessionCodeCard`, `CompatibilityMap`, `ConversationPrompts`

**Maximalist direction** (no token changes outside this feature — scoped):

- **Layered depth**: animated aurora gradient backgrounds (emerald → teal → amber → rose), subtle grain/noise overlay, floating blurred orbs.
- **Typography drama**: oversized serif display (Cormorant / Instrument Serif via Google Fonts) for hero numbers + section openers, paired with refined sans body. Mixed sizes — 96px hero numerals, italic accent words, drop caps on long paragraphs.
- **Editorial composition**: asymmetric grids, pull-quotes, side-marginalia (small caps tracking-widest labels rotated -90° on desktop), ornate divider glyphs.
- **Motion**: framer-motion entrance animations (stagger, fade-up, scale), parallax orbs, animated SVG constellation lines on the map, shimmer on session code, gradient text sweep on headings.
- **Constellation upgrade**: `CompatibilityMap` rewritten as a true starfield — radial layout instead of linear rows, glowing nodes, animated draw-on lines, pulsing zone indicators.
- **Test stepper**: full-bleed dimension intro cards with cinematic imagery cues, progress shown as a constellation being drawn, question options as elevated glass cards with hover bloom.
- **Popup**: re-styled as a layered card with gradient border, ornamental corner marks, animated entry.
- All work stays within existing semantic tokens; introduce **scoped tokens** in `index.css` only (`--ii-aurora-1/2/3`, `--ii-glow`, `--ii-grain`) and a small `ii-*` utility class set. No global theme changes, no impact on other pages.

## Technical Notes

- New deps: `html2canvas`, `jspdf`, `framer-motion` (verify if already installed; if yes, skip).
- New files:
  - `src/components/iit/ShareLinksPanel.tsx`
  - `src/components/iit/AuroraBackground.tsx`
  - `src/components/iit/ReportPDFButton.tsx`
  - `src/lib/iit/generatePdf.ts`
- Edited files: the 5 pages + 5 components above, plus a scoped block appended to `src/index.css`.
- No DB changes. No edge function changes. No routing changes.
- Accessibility preserved: animations respect `prefers-reduced-motion`; PDF button has clear label; copy buttons keep aria-labels.

## Out of Scope

- Server-side PDF rendering, emailing the PDF, authenticated history of past reports, multilingual report, AI-written narrative report (Phase 2).
