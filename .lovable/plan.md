# Batch A — Ship Plan

Three fixes, all frontend + one small SQL migration. No structural changes.

---

## 1. Fix Stress page broken buttons + add missing content (~1200 words)

**Problem:** `StressContent.tsx` has 8 tab triggers (Physiology, Types, Symptoms, Assessment, Techniques, Lifestyle, Workplace, Crisis) but only 3 have `<TabsContent>` bodies. Clicking Symptoms/Assessment/Lifestyle/Workplace/Crisis shows nothing — this is why the user sees "buttons not working."

**Fix:** Add the 5 missing `<TabsContent>` sections with rich, honest, non-clinical content:

- **Symptoms** — Physical (headaches, GI, sleep, muscle tension, immune), Emotional (irritability, overwhelm, numbness), Cognitive (racing thoughts, forgetfulness, indecision), Behavioral (withdrawal, substance use, procrastination). Each with real explanations, not one-liners.
- **Assessment** — Self-check questions (Perceived Stress Scale-style, non-diagnostic), stress load worksheet, "when to seek help" honest thresholds, journaling prompts.
- **Lifestyle** — Sleep hygiene deep dive, nutrition & stress (blood sugar, caffeine, gut-brain), movement prescription (Zone 2, strength, walking), digital hygiene, nature exposure.
- **Workplace** — Boundary scripts, meeting overload, email triage, saying no, burnout early signs, requesting accommodations, remote work traps.
- **Crisis** — Honest crisis signs, iCall (India) 9152987821, Vandrevala 1860-2662-345, KIRAN 1800-599-0019, iCare emergency plan, safe-person list, grounding for panic.

Target: 1000–1300 words of real content across new sections. Tone: warm, Japanese-minimal, non-clinical, matches VOYCE voice memory.

## 2. Fix Trauma page broken buttons + add missing content (~1200 words)

**Problem:** Same pattern — 8 tab triggers, only 3 have content. Missing: Types, Symptoms, Therapies, Resilience, Support, Resources.

**Fix:** Add 6 missing `<TabsContent>` sections:

- **Types** — Acute, Chronic, Complex (C-PTSD), Developmental, Vicarious, Collective/intergenerational, Medical, Betrayal. Each with definition + example + how it feels.
- **Symptoms** — Re-experiencing, avoidance, negative mood/cognition shifts, hyperarousal, dissociation, somatic signs. Honest framing that these are protection responses, not defects.
- **Therapies** — EMDR, Somatic Experiencing, IFS (parts work), Trauma-focused CBT, Sensorimotor, group therapy, medication basics. What each is, what it feels like, who it suits.
- **Resilience** — Post-traumatic growth (Tedeschi & Calhoun's 5 domains), window of tolerance, co-regulation, meaning-making, ritual & routine.
- **Support** — Building safe relationships, boundary language, telling your story safely, choosing a therapist checklist, peer support groups.
- **Resources** — India: iCall, NIMHANS, Sangath, Vandrevala; Global: ISSTD, EMDRIA, book list (van der Kolk, Maté, Levine), free online tools.

Target: 1000–1300 words. Same voice.

## 3. Blog RLS / moderation fix (Prompt 2)

**Problem (from user memory):** blog approval workflow needs `can_moderate()` gating; anon reads published only; drafts visible to author + moderators; publish action goes through moderation.

**Check first:** query `blogs` policies to see current state, then only patch what's missing. From memory the `can_moderate` function already exists. Likely need:

- SELECT policy for anon: `status = 'published'` only (probably already correct)
- SELECT policy for authenticated: own drafts OR published OR (moderator sees all)
- INSERT: authenticated only, `author_id = auth.uid()`, status forced to `'pending'` or `'draft'`
- UPDATE: author can edit own drafts; only moderators can flip `status` to `'published'`
- DELETE: author own OR moderator

Migration will add/replace policies only where needed. GRANTs verified.

Frontend: `useBlogs` already filters `status = 'published'` — no change needed for public list. `CreateBlogPage` may need to force status to `'pending'` on submit (will check).

---

## Files touched

- `src/components/content/StressContent.tsx` — add 5 TabsContent blocks
- `src/components/content/TraumaContent.tsx` — add 6 TabsContent blocks
- `supabase/migrations/<new>.sql` — blog RLS patch (only what's missing)
- `src/pages/CreateBlogPage.tsx` — force pending status on submit if not already

## Not in this batch (Batch B next turn)

ADHD/Brain/CDS/ACEs/Neuroscience content expansion, Workshop audit, remaining Navigation button sweep, any other prompt-block items.

---

**Approve and I ship immediately, kata style — no more questions.**
