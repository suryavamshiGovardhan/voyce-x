
# Batch B — Ship Plan

Three parts: **(1) broken-tab & content expansion**, **(2) Workshop audit**, **(3) dead-code removal with impact ratings so you decide**.

---

## Part 1 — Content pages (fix broken tabs + expand to 1000+ words)

Same root cause as Batch A: tab triggers exist, `<TabsContent>` bodies don't. Confirmed counts:

| Page | Tab triggers | Content blocks present | Missing |
|---|---|---|---|
| ADHD | 8 | 2 (`neuroscience`, `strengths`) | types, symptoms, diagnosis, treatment, strategies, resources |
| Brain | 8 | 3 (`structure`, `plasticity`, `consciousness`) | networks, development, memory, emotions, optimization |
| CDS | 6 | 6 | none — tabs work, only expand thin sections |
| ACEs | uses `ComprehensiveContent` (generic) | n/a | add rich topic-specific content sections |
| Neuroscience | same generic wrapper | n/a | same |
| Mind‑Heart‑Gut | same generic wrapper | n/a | same |

### 1a. ADHD — add 6 `<TabsContent>` sections (~1100 words total)
- **Types**: Inattentive, Hyperactive‑Impulsive, Combined, with lived‑experience framing.
- **Symptoms**: executive‑function pattern, time‑blindness, RSD, hyperfocus paradox.
- **Diagnosis**: DSM‑5 criteria in plain language, adult vs child assessment, India context (limited providers, self‑advocacy).
- **Treatment**: medication classes (stimulants/non‑stimulants) — honest, non‑prescriptive; therapy (CBT‑ADHD, coaching); lifestyle levers.
- **Strategies**: externalized systems, body‑doubling, timers, dopamine menus, environment design.
- **Resources**: ADDitude, CHADD, How to ADHD, India: NIMHANS, private psychiatrists directories.

### 1b. Brain — add 5 `<TabsContent>` sections (~1100 words total)
- **Networks**: DMN, salience, executive‑control, in plain language.
- **Development**: from neurogenesis to synaptic pruning to age‑25 PFC.
- **Memory**: sensory → working → LTM, encoding vs retrieval, sleep consolidation.
- **Emotions**: limbic system, amygdala hijack, top‑down regulation.
- **Optimization**: sleep, aerobic exercise, learning cycles, novelty & spaced repetition.

### 1c. CDS — expand thin sections (definition, symptoms, treatment) to add ~500 words: distinction from ADHD, sluggish cognitive tempo history, current research (Becker et al.).

### 1d. ACEs / Neuroscience / Mind‑Heart‑Gut
These use the generic `ComprehensiveContent` wrapper — no broken buttons, but the page bodies are ~90% resource lists and statistics. Add a topic‑specific rich content component per page (mirroring `ADHDContent`/`BrainContent` pattern) with 1000+ words: ACEs → the 10 categories, biology of toxic stress, resilience factors, Indian context (family violence, school pressure). Neuroscience → historical timeline expanded (Cajal → connectome → optogenetics → BCI), key methods, India labs (NBRC, NIMHANS). MHG → vagus nerve, HRV coherence, gut‑brain axis, breathwork protocols, HeartMath basics.

---

## Part 2 — Workshop page audit

There is **no dedicated Workshop page** in the codebase. "Workshop" mentions live in `SchoolsPage`, `AI4SchoolsPage`, `WorkbookPage`, `TheoriesPage`, `ModernNavigation`. Before I write content or fixes, I will click through each of these once and list what actually breaks (broken links, empty embeds, non‑working CTAs). That audit gets written into `.lovable/plan.md` and I'll fix the concrete issues in this same batch.

---

## Part 3 — Remove dead code (your call per item)

These files have **zero importers** (verified). I'll list each with an honest importance rating so you can approve/veto:

| File | Importance | Safe to remove? |
|---|---|---|
| `src/components/ModernNavigation.tsx` | **Low** — replaced by `DesktopNavigation` (used via `Navbar.tsx`). Old alternative nav, no route uses it. | Yes |
| `src/components/HomeScreenSelector.tsx` | **Low** — appears to be an old landing chooser. `Index.tsx` uses `TrustHero` + `AccessibleExploreSection` now. | Yes |
| `src/components/WelcomeSection.tsx` | **Low** — legacy homepage block, superseded. | Yes |
| `src/components/PerformanceOptimizedHero.tsx` | **Low** — earlier hero variant. Current homepage uses `TrustHero`. | Yes |
| `src/components/Hero.tsx` | **Low** — original hero. Superseded. | Yes |
| `src/components/DiscoveryHero.tsx` | **Low** — another hero variant. Superseded. | Yes |

**Total**: ~6 files, all UI‑only, no DB/route impact. Removing them shrinks the tree and removes confusion when future edits ask "which hero is the real one?" (answer: `TrustHero`).

**Not removing** (checked, still in use):
- `TrustHero`, `AccessibleExploreSection`, `ExploreSection`, `InvisibleInheritancePopup`, `WelcomeQuoteDialog` — each has at least one live importer.

If you want me to **keep** any of the six, say so and I'll leave them. Default: remove all six.

---

## Files touched

- `src/components/content/ADHDContent.tsx` — add 6 TabsContent
- `src/components/content/BrainContent.tsx` — add 5 TabsContent
- `src/components/content/CDSContent.tsx` — expand 3 sections
- `src/components/content/ACESContent.tsx` (new) + wire into `ACESPage.tsx`
- `src/components/content/NeuroscienceContent.tsx` (new) + wire into `NeurosciencePage.tsx`
- `src/components/content/MindHeartGutContent.tsx` (new) + wire into `MindHeartGutPage.tsx`
- Delete 6 dead components listed above (unless you veto)
- Workshop audit notes + fixes to whichever pages actually broke

## Not in this batch

Any items surfaced by the workshop audit that turn into >200 lines of new content — those get a Batch C.

---

**Reply "go" to ship all of the above (including the 6 deletions), or list which deletions to keep.**
