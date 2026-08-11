# VOYCE Admin OS — "Career Exposure Movement" Mega Prompt

## Part 0 — What already exists (audit)

| Piece | Route | State |
|---|---|---|
| Shared passkey gate (`AdminGate.tsx`, sessionStorage, verifies via `admin-blueprint` edge fn) | — | Single shared passkey for all admins |
| Admin hub | `/admin` | Static 3-card list |
| Neural Blueprint (Canva embed) | `/admin/blueprint` | Working |
| Keynote "Exposure Is All You Need" — 13 slides, 1920×1080 scaled, speaker notes, grid (G), fullscreen (F5), print handout | `/admin/keynote`, `/admin/keynote/print` | Working, static slide registry in `src/data/keynote/slides.tsx` |
| Careers Explorer — ~2,170 careers, 8 group files, search + industry filter + future toggle + random career | `/admin/careers` | Client-side data only, no CSV export yet, no per-career story |

Gaps: one passkey for everyone, no roles, no audit trail, no analytics from real sessions, no career stories, no school/event management, no content editing (everything is hardcoded TS), no offline/present-from-phone mode.

---

## Part 1 — THE MEGA PROMPT (paste this into Lovable as one build brief)

> **Build "VOYCE Admin OS" — a multi-admin, role-based control centre for the Career Exposure Movement.**
>
> **Context:** VOYCE runs a school outreach movement called *Exposure Is All You Need* — a KATA-style keynote for Classes 8–12, plus a library of 2,000+ unconventional careers. Today this lives at `/admin/keynote` and `/admin/careers` behind one shared passkey. Rebuild the admin side into a real application without touching the public site's structure, routing, or light theme.
>
> ### 1. Identity & access
> - Replace the single shared passkey with **per-admin accounts**: each admin has their own email + personal passcode (6–10 chars) issued by a super-admin.
> - Store admins in an `admin_users` table (id, email, display_name, role, passcode_hash, is_active, last_login_at, created_by). **Never store raw passcodes** — hash with bcrypt/argon2 inside an edge function; the browser only ever sends `{email, passcode}` to `admin-auth`.
> - Roles in a separate `admin_roles` table (never a column on the profile): `super_admin`, `presenter`, `curator`, `analyst`, `school_coordinator`. Role checks go through a `SECURITY DEFINER` `has_admin_role()` function; RLS on every admin table.
> - Session = short-lived signed token returned by the edge function, kept in sessionStorage, re-validated server-side on every privileged call. Auto-lock after 30 min idle. "Lock" button everywhere.
> - Super-admin screen: invite admin (emails them their passcode via the existing Gmail connector), rotate passcode, deactivate, view last login.
> - **Audit log** table: who did what, when, from which page. Visible to super_admin and analyst.
>
> ### 2. Role-specific UI (different landing, nav and theme accent per role)
> - **super_admin** — dark slate accent. Sees everything + admin management + audit log + secrets health.
> - **presenter** — cinematic near-black + amber (keynote tokens). Lands directly on "Present" — upcoming sessions, one-tap present, phone remote, offline cache.
> - **curator** — warm ivory/emerald. Lands on content: careers CRUD, career stories, slide editor, blog moderation queue.
> - **analyst** — cool teal. Lands on dashboards: sessions run, students reached, quiz results, most-searched careers, blog/traffic metrics.
> - **school_coordinator** — indigo. Lands on schools pipeline: schools, contacts, dates, materials sent, feedback forms.
> Same shell (`AdminShell` with sidebar + command palette ⌘K), different nav sets, different accent token, different default route. Never render a nav item the role cannot use, and enforce the same rule server-side.
>
> ### 3. Careers module (upgrade the Explorer)
> - Move the 2,170 careers from TS files into a `careers` table (title, slug, industry, group, what_they_do, day_in_the_life, salary_band_india, entry_paths, skills[], is_future, story_id, verified_by, updated_at) with a one-time seed migration from the existing files; keep the static files as the seed source of truth.
> - Curator CRUD with inline edit, bulk industry re-tagging, duplicate detection, CSV import/export, and a "needs description" queue.
> - Public-facing read API (anon SELECT on approved rows only) so the main site can later show a Careers Explorer to students.
>
> ### 4. Career Stories library (new — the emotional engine of the movement)
> A `career_stories` table + admin editor + slide-embeddable story cards. Each story: hero image, person, role, the moment they discovered the path existed, the messy middle, what they do today, one quotable line, 3 "you could start with" steps, sources. Seed with 30–50 real, verifiable stories, mixing global founders with Indian and blue-collar/craft paths so it never reads as a startup-worship deck:
> - **Cursor / Anysphere** — four MIT students who were building CAD tooling, pivoted after Copilot showed them AI could write code, forked VS Code instead of waiting for permission, and reached one of the fastest revenue ramps in software history. Lesson: the job "AI code editor founder" did not exist when they were in school.
> - Notion's Ivan Zhao — design-school dropout energy, near-death rebuild in Kyoto.
> - Zoho's Sridhar Vembu — rural Tamil Nadu campuses, hiring students without degrees.
> - Zerodha's Nithin Kamath — trading from a call-centre desk.
> - Nazara / esports analysts; ISRO propulsion technicians; a Bengaluru game-studio foley artist; a Coorg coffee taster; an avalanche forecaster in Himachal; a cricket pitch curator; a dialect coach; a planetary protection officer; a mango-orchard agronomist; a prosthetics sculptor; a bioacoustician recording elephant calls; a Kumbh Mela crowd-flow planner.
> Each story gets a "present this" button that injects it as a live slide.
>
> ### 5. Keynote studio
> - Keep the 1920×1080 `ScaledSlide` engine. Add: slide reorder, per-audience variants (Class 8–10 vs 11–12 vs parents vs teachers), inline speaker-note editing, timer + pacing warnings, laser pointer, blackout key (B), audience-live-poll slide, and QR slide that opens the student Careers Explorer.
> - **Phone remote**: `/admin/keynote/remote?session=CODE` mirrors notes + next/prev over Supabase Realtime.
> - Offline: cache deck + images in a service worker so a school with bad Wi-Fi still works.
> - Export: existing print/PDF handout + generated `.pptx`.
>
> ### 6. Sessions & impact tracking
> - `keynote_sessions` table: school, city, date, presenter, class levels, headcount, deck variant, duration, notes.
> - After-session form: what landed, what died, questions asked, careers students had never heard of (feeds the Explorer).
> - Student feedback via QR → anonymous 4-question form → live results slide.
> - Analyst dashboard: students reached, schools covered on an India map, top-searched careers, before/after "how many careers can you name" delta.
>
> ### 7. Schools pipeline (coordinator)
> Schools table with status (lead → contacted → scheduled → delivered → follow-up), contacts, materials sent, invoices/consent files, and Gmail-connector templates for outreach.
>
> ### 8. Non-negotiables
> - No public route, nav item, sitemap entry, or theme change from this work. All `/admin/*` is `noindex`.
> - Every new public-schema table: `CREATE TABLE` → `GRANT` → `ENABLE ROW LEVEL SECURITY` → policies. No `USING (true)`.
> - Passcodes hashed server-side; verification only in edge functions; rate-limit auth attempts (5 per 15 min per email) and log failures.
> - Keyboard-first, WCAG 2.2 AA, works down to 360px (presenters use phones).
> - Ship in phases and keep typecheck clean at every phase.

---

## Part 2 — How to actually do it (build order)

1. **Phase 1 — Identity.** `admin_users` + `admin_roles` + `has_admin_role()` + `admin_audit_log`; `admin-auth` edge function (login, invite, rotate, deactivate) with hashing and rate limiting; rewrite `AdminGate` into `AdminAuthProvider` + `RequireRole`. Migrate the current shared passkey into one bootstrap `super_admin` account for 4igroupss@gmail.com.
2. **Phase 2 — Shell.** `AdminShell` (sidebar, role accent tokens, ⌘K palette, lock, idle timeout), role-based route map, role landing pages.
3. **Phase 3 — Careers to DB.** Seed migration from the 8 TS files, curator CRUD, CSV in/out, needs-description queue.
4. **Phase 4 — Stories.** Table + editor + story cards + 30–50 seeded stories (Cursor first) + "present this".
5. **Phase 5 — Keynote studio.** Variants, editing, remote, offline, polls, QR.
6. **Phase 6 — Sessions + schools + analyst dashboards.**
7. **Phase 7 — Hardening.** Security scan, audit log review, offline test, present a full deck on a phone hotspot.

## Part 3 — What else is worth adding

- **Student-facing Careers Explorer** on the public site (the deck's QR target) — the movement only compounds if students can browse after the talk.
- **"Name 10 careers" pre/post test** — the single number that proves the movement works.
- **30-Day Challenge tracker** with email/WhatsApp nudges, tied to the existing gamification tables.
- **Career of the day** auto-post to blog + Instagram caption generator.
- **Teacher kit**: 20-minute mini-deck, worksheet PDF, and a facilitation script so schools can run it without you.
- **Regional language decks** (Telugu, Hindi, Tamil) — reuse the existing i18n layer.
- **Alumni wall**: students who mailed you after a talk, with consent.
- **Speaker fee / sponsorship CRM** if the movement needs to fund itself.
