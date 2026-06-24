## Goal
Help you see who's taking the Invisible Inheritance Test, by (a) showing you where the data lives in Supabase and (b) optionally capturing each partner's first name + email so your rows aren't just anonymous codes.

---

## Part 1 — Where to view the data (no code, just links)

Two tables hold everything:

**`iit_sessions`** — one row per couple
- `session_code` (the 6-char code)
- `created_at`
- `partner_a_completed_at` / `partner_b_completed_at`

**`iit_responses`** — one row per answered question (up to 120 per session)
- `session_id`, `partner` (a/b), `dimension`, `question_id`, `answer_value`

Quick links I'll surface in chat after the plan runs:
- Table editor (browse rows visually)
- SQL editor with 3 ready-to-run queries:
  1. **Recent sessions + completion status**
  2. **Per-session answer counts** (drop-off detection)
  3. **Full answer dump for a given session code** (paste a code, see both partners' 60 answers side-by-side)

No code changes for this part.

---

## Part 2 — Capture optional first name + email per partner

### Schema change (1 migration)
Add four nullable columns to `iit_sessions`:
- `partner_a_name`, `partner_a_email`
- `partner_b_name`, `partner_b_email`

All optional. Indexed on email for lookup. No RLS changes (anonymous flow stays).

### Frontend change (test-taking flow only — no redesign)
On the partner's test page (`/invisible-inheritance/test/:code/:partner`), add a small **"Before we begin (optional)"** card shown once at the very start, before the first dimension intro:

- First name (optional, max 50 chars, zod-validated)
- Email (optional, valid email, max 255 chars, zod-validated)
- Microcopy: *"Optional. Helps us send you the reflection if you lose your code. We never share this."*
- Two buttons: **"Continue"** (saves if filled) and **"Skip — stay anonymous"**

Values saved to `iit_sessions` via an `update()` keyed on `session_code` + partner column. If skipped, fields remain `null` — fully backward compatible.

### Where you'll see it in Supabase
Same `iit_sessions` table — the new columns appear automatically in the Table editor. Updated SQL query #1 will join name/email so you see:

```
code   | A name   | A email          | A done | B name | B email | B done
A7K2P9 | Riya     | riya@gmail.com   | ✓      | Arjun  | (null)  | ✗
```

---

## Files

**New migration** (via migration tool — adds 4 nullable columns + 2 indexes to `iit_sessions`)

**Edited:**
- `src/pages/InvisibleInheritanceTestTakePage.tsx` — add the optional intro card before the stepper begins
- `src/lib/validation.ts` (or inline zod) — schema for name/email

**No new components, no design changes** beyond a small glass card matching existing `ii-*` aesthetic.

---

## Out of scope
- Admin dashboard in-app (you chose Supabase-only)
- Emailing the report to partners (separate feature — easy to add later via Lovable transactional email)
- Making name/email mandatory
- Capturing IP, device, location, or any other tracking