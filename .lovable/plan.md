## The Invisible Inheritance Test — Pre-Marriage Emotional Readiness Assessment

A futuristic, cinematic, deeply human assessment for couples before marriage. Not a quiz. A mirror.

### Concept

Most couples discuss finances, families, careers — but never the *invisible inheritance* they each carry: unspoken childhood patterns, conflict styles, emotional triggers, parenting templates, attachment wounds. This test surfaces what usually surfaces only after the wedding — too late.

Two partners take it separately. The system then generates a **shared compatibility map** showing where they align, where they'll clash, and where one will unknowingly trigger the other's inherited wounds.

### User Flow

```
Landing → Create Couple Session → Partner A code + Partner B code
   ↓
Each partner takes test independently (private, no peek)
   ↓
When both complete → Shared Reflection Report unlocked
   ↓
Conversation Prompts (the 12 conversations to have before vows)
```

### The 10 Dimensions (60 questions, 6 per dimension)

1. **Conflict Inheritance** — how your parents fought becomes your default
2. **Love Language Origin** — what felt like love in your home
3. **Money Memory** — scarcity, control, silence around money
4. **Emotional Vocabulary** — what feelings were allowed
5. **Parenting Template** — the parent you'll become by default
6. **Silence vs Confrontation** — how you handle rupture
7. **Roles & Gender Scripts** — invisible expectations
8. **Triggers & Wounds** — what will unexpectedly hurt
9. **Boundary Architecture** — yours, theirs, in-laws
10. **Vision of "Home"** — what safety actually means

Each question is scenario-based, not Likert. Example: *"It's 11pm. You're upset. Your partner is on their phone. What do you do — and what did your parent do in the same moment?"*

### Output: The Compatibility Map

Not a score. A **reflection artifact**:

- **Resonance Zones** — where you naturally align (green threads)
- **Tension Zones** — where inherited patterns will collide (amber threads)
- **Blind Spots** — what one carries that the other doesn't see (red threads)
- **The 12 Conversations** — generated prompts personalized to their map
- **Inherited Loop Warning** — patterns they're likely to repeat with future children

### Design Direction

Futuristic + realistic, calm cinematic. Dark canvas, warm emerald/teal/amber accents (matches Voyce). Slow type-in narration, KATA-documentary feel. No gamification, no points, no badges. The test feels like a **ritual**, not a form.

- Full-screen single-question view (one question, breathing space)
- Soft ambient gradient that shifts per dimension
- Optional Surya narration of each question (Web Speech API, already in stack)
- Partner pairing via 6-character session code (no account friction)
- Final report renders as a **two-column constellation map** (Partner A | Partner B with threads between)

### Files to Create

```
src/pages/InvisibleInheritanceTestPage.tsx       # /invisible-inheritance/test landing + session
src/pages/InvisibleInheritanceTestTakePage.tsx   # /invisible-inheritance/test/:sessionCode/:partner
src/pages/InvisibleInheritanceReportPage.tsx     # /invisible-inheritance/test/:sessionCode/report
src/components/iit/QuestionStage.tsx             # cinematic single-question view
src/components/iit/DimensionIntro.tsx            # dimension transition scene
src/components/iit/CompatibilityMap.tsx          # constellation report visual
src/components/iit/ConversationPrompts.tsx       # the 12 conversations
src/components/iit/SessionCodeCard.tsx           # shareable code with copy
src/data/invisibleInheritanceQuestions.ts        # 60 scenario questions, 10 dimensions
src/data/conversationPromptTemplates.ts          # report prompt logic
src/lib/iit/scoring.ts                           # resonance/tension/blind-spot computation
```

### Files to Edit

- `src/App.tsx` — three new routes
- `src/pages/InvisibleInheritancePage.tsx` — prominent CTA card linking to the Test
- `src/components/InvisibleInheritancePopup.tsx` — add "Take the Couple Test" secondary CTA

### Backend (Lovable Cloud / Supabase)

Two tables, RLS by session code (no auth required so engaged couples can use without signing up):

- `iit_sessions` — session_code (unique), created_at, partner_a_completed_at, partner_b_completed_at
- `iit_responses` — session_id, partner ('a'|'b'), dimension, question_id, answer_value, answer_text

Public read/insert scoped to session_code (knowledge of code = access). Report computed client-side from both partners' rows once both complete.

### Technical Notes

- Routing: lazy-loaded pages, Suspense fallback uses existing `ThinkingLoader`
- State: React Query for session + responses; localStorage stores current partner code so refresh resumes
- Animation: framer-motion for question transitions; respects `prefers-reduced-motion`
- A11y: WCAG 2.2 AA — full keyboard nav, ARIA-live for question changes, narration toggle
- SEO: dedicated `SEOHead` per page, JSON-LD `Quiz`/`Assessment` schema, indexable landing only (report private)
- Honesty: clear disclaimer — *reflection tool, not clinical/diagnostic, not a predictor*

### Out of Scope (this plan)

- Account-based history of multiple tests
- Therapist dashboard / pro mode
- Multilingual narration beyond English (Phase 2)
- AI-generated personalized report copy (Phase 2 — uses templates first)

Approve and I'll build it end-to-end.
