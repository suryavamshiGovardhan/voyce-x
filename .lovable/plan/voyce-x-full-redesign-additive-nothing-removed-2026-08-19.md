# VOYCE-X — Full Redesign (additive, nothing removed)

A complete visual and narrative redesign of the public site, built on top of the existing content. No existing page, route, article, series episode, tool, admin area or database feature is deleted. Old routes keep working; several are re-skinned or redirected into the new structure.

## Design direction (locked across every page)

- Palette: warm off-white canvas, muted charcoal text, soft natural green primary, quiet clay/sand accent used sparingly. Existing emerald/teal identity is retained but calmed down — no neon, no purple AI gradients, no heavy glassmorphism.
- Typography: one sophisticated sans (body + UI) with a restrained editorial display face for headlines. Large calm hero type, short paragraphs, generous whitespace.
- Motion: fade + 8px upward reveal on scroll, soft hover lift, smooth page transitions. Respects `prefers-reduced-motion`. No animation on every section.
- All values land as semantic tokens in `index.css` / `tailwind.config.ts` — components use tokens only.

## New page structure

New routes (new pages, existing ones stay live):

```text
/how-it-works   /students   /teachers   /parents
/features       /resources  /resources/:slug
/stories        /about      /safety     /faq
/partners
```

Existing routes reused and re-skinned rather than duplicated:
- `/schools` — rebuilt as the institutional school page (existing content retained and reorganised)
- `/privacy-policy` — expanded into the plain-English privacy page with visual privacy principles; `/privacy` added as an alias
- `/contact` — rebuilt with routed enquiry types
- `/library`, `/blog`, `/series`, `/thoughts` — surfaced inside `/resources` as source collections, untouched themselves
- `/suryavamshi-govardhan`, `/article/why-i-built-voyce` — linked from and folded into `/about`
- `/login`, `/signup` — get the role-first onboarding step ("How will you use VOYCE?") before the form

## Homepage narrative

1. Hero — one calm sentence, primary CTA "Explore VOYCE", secondary "How it works", real product interface as the visual.
2. The insight — "Not every struggle looks like a crisis," with the Feeling → Reflection → Understanding → Support → Growth progression.
3. The VOYCE experience — Check in / Understand / Reflect / Support, with the non-replacement disclaimer stated plainly.
4. Real product — scroll-revealed mockups of actual existing screens (journal, mood check-in, dashboard, path, library, Surya guide).
5. Who it's for — four pathways to /students, /teachers, /schools, /parents.
6. Trust — privacy first, safeguarding, human-centred, responsible AI, school ready, transparent. Claims only; no invented logos, stats or testimonials.
7. One closing CTA.

Existing homepage sections (TrustHero content, explore section, Invisible Inheritance popup) are preserved and re-placed inside this narrative.

## Shared system

- New `SiteHeader` with the simplified nav (How it works, For Students, For Teachers, For Schools, Resources, About + Sign in / Get started) and a clean mobile sheet. Existing deeper links move into dropdowns and the footer so nothing becomes unreachable.
- New five-column footer per the brief, keeping every current link plus the new ones and the existing disclaimer.
- Reusable section primitives: `Section`, `Eyebrow`, `StatementHeading`, `StepRail`, `AudienceCard`, `TrustGrid`, `Reveal` (scroll animation), `DeviceFrame` (product screenshots).

## Content rules

- No fabricated testimonials, partners, certifications or statistics. `/stories` ships with a clear "real stories only, with consent" state plus a submission route until real stories exist.
- Safety and privacy pages state limits honestly: not emergency care, not a replacement for professionals, what data is and isn't collected.
- `/resources` is an editorial hub over existing articles, series episodes and library content with category, reading time, author, date and related links.

## Dashboards

Re-skinned only, logic untouched: student dashboard becomes Today / How are you feeling / one reflection / recent patterns / one suggestion / journey. Teacher and school dashboard views are presented as planned-experience previews on their marketing pages rather than fake live data.

## Cross-cutting

- SEO: unique title, meta description, OG, canonical and semantic headings on every new page via the existing `SEOHead`; internal links between audience pages and resources.
- Accessibility: semantic landmarks, one `<main>` per page, visible focus rings, ARIA labels on icon buttons, AA contrast, reduced-motion support, never colour alone for emotional state.
- Performance: lazy routes, lazy images with explicit sizes, no new heavy animation library (CSS + IntersectionObserver only).
- Analytics: existing `useAnalytics` fires the listed CTA/page/conversion events. No emotional content in event payloads.
- Responsive check at 320 / 375 / 390 / 430 / 768 / 1024 / 1440 / 1920 with no horizontal overflow.

## Build order

1. Design system tokens, typography, motion primitives, `SiteHeader` + new footer.
2. Homepage narrative rebuild.
3. `/how-it-works`, `/students`, `/teachers`, `/parents`.
4. `/schools` rebuild, `/features`, `/partners`.
5. `/resources` hub + article template, `/stories`, `/about`.
6. `/safety`, `/privacy`, `/faq`, `/contact`, role-first login/signup.
7. Dashboard re-skin, then a pass applying the new system to the remaining legacy pages (stress, trauma, adhd, brain, neuroscience, library, blog, series, tools, workbook) so everything looks like one company.
8. Final QA: responsive, accessibility, SEO, performance.

## Technical notes

- Product mockups are built as real React "screen" components inside device frames (not screenshots), so they stay accurate and stay fast.
- Legacy routes that are superseded keep redirecting rather than 404ing.
- Admin area, Invisible Inheritance, keynote and careers tools are left functional and get only the new header/footer and token pass.
