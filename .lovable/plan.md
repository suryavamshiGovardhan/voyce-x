# Sonar Grid Everywhere + Real Engagement Flow

## 1. Sonar grid on every page

- Add one calm, ambient `SonarGrid` instance to the shared layout so it appears on **every** page, not just the homepage:
  - Behind the **footer** of `SiteFooter` (every page renders the footer, including legacy Learn/DSM/ACES pages) — a soft dot field with a slow ring every few seconds.
  - Keep the existing interactive hero instance on the homepage.
- Very low opacity, theme green, non-interactive outside the homepage hero, pauses off-screen and respects reduced-motion (already built into the component).
- No per-page edits needed — one change covers all routes.

## 2. Real website flow — stay, think, play

Goal: turn "view and leave" pages into a slow, reflective journey. All additions are calm and optional — nothing blocks reading.

1. **Continue your journey trail** — at the bottom of every Learn/topic page and episode, a "Where to go next" strip with 2–3 hand-picked next reads (related topics, next episode, a practice tool). Keeps visitors moving deeper instead of bouncing.
2. **Pause & reflect moments** — on long Learn pages, one gentle mid-article reflection card ("Take a breath. What resonated?") with an optional one-line private note saved to the journal (signed-in) or dismissed silently.
3. **Reading rhythm** — subtle reading-progress hairline at the top of article/episode pages, and scroll-reveal (existing `Reveal`) applied so content unfolds as you read instead of dumping a wall of text.
4. **Play moments** — small interactive touches that fit the brand:
   - Homepage hero sonar stays tappable (send your own ring).
   - A "60-second stillness" breathing widget on the Tools page and at the end of heavy topics (grief, trauma, ACES) — a simple expanding circle to breathe with.
5. **Gentle return loop** — footer gains a "Begin again" link row (Start Here, 21-day protocol, Stories) so the journey never dead-ends.

## Technical notes

- `SiteFooter.tsx`: add `<SonarGrid>` absolutely positioned behind footer content (pointer-events off, low opacity).
- New small components: `ContinueJourney.tsx` (next-reads strip), `ReflectPause.tsx` (reflection card), `BreathWidget.tsx` (60s breathing circle), `ReadingProgress.tsx` (top hairline).
- Wire `ContinueJourney` + `ReflectPause` into Learn topic pages, series episodes, and blog articles via the shared shells — no content deleted or reworded, routes unchanged.
- Verify with a Playwright pass over representative pages (home, a Learn topic, an episode, blog) and a clean build.
