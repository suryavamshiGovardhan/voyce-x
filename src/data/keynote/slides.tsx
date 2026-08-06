import type { ReactNode } from "react";

export interface KeynoteSlide {
  id: string;
  /** Short label used in grid view and the slide counter */
  label: string;
  /** Speaker notes — what to say */
  notes: string;
  /** Visual direction note for anyone redesigning the slide */
  visual: string;
  /** Optional audience activity */
  activity?: string;
  render: () => ReactNode;
}

/* ---------- layout helpers (paper-diorama planes) ---------- */

function Planes() {
  return (
    <>
      <div className="kn-paper kn-paper-1" style={{ left: -120, top: 620, width: 900, height: 620, transform: "rotate(-4deg)" }} />
      <div className="kn-paper kn-paper-2" style={{ left: 380, top: 720, width: 1100, height: 620, transform: "rotate(2deg)" }} />
      <div className="kn-paper kn-paper-3" style={{ left: 1180, top: 660, width: 900, height: 620, transform: "rotate(-3deg)" }} />
    </>
  );
}

function Frame({ children, kicker, index }: { children: ReactNode; kicker?: string; index?: string }) {
  return (
    <div className="absolute inset-0 kn-vignette">
      <Planes />
      <div className="absolute" style={{ left: 140, top: 120, right: 140, bottom: 120 }}>
        {kicker && <div className="kn-kicker" style={{ marginBottom: 40 }}>{kicker}</div>}
        <div className="kn-anim">{children}</div>
      </div>
      {index && (
        <div className="kn-caption kn-muted kn-sans" style={{ position: "absolute", right: 140, bottom: 60 }}>
          {index}
        </div>
      )}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul style={{ marginTop: 56, display: "flex", flexDirection: "column", gap: 32 }}>
      {items.map((t) => (
        <li key={t} className="kn-body-lg kn-sans" style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
          <span className="kn-accent" style={{ lineHeight: 1.2 }}>—</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function StatCards({ cards }: { cards: { value: string; label: string }[] }) {
  return (
    <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: `repeat(${cards.length}, 1fr)`, gap: 40 }}>
      {cards.map((c) => (
        <div
          key={c.label}
          style={{
            background: "rgb(var(--kn-paper-2))",
            borderRadius: 28,
            padding: "56px 44px",
            minHeight: 300,
            border: "1px solid rgba(245,176,66,0.18)",
          }}
        >
          <div className="kn-accent" style={{ fontSize: 104, fontWeight: 700, lineHeight: 1 }}>{c.value}</div>
          <div className="kn-body kn-sans kn-muted" style={{ marginTop: 24 }}>{c.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- slides ---------- */

export const keynoteSlides: KeynoteSlide[] = [
  {
    id: "cold-open",
    label: "Cold open",
    notes:
      "Walk on in silence. Ask the room: 'On a piece of paper, in 60 seconds, write every career you can name.' Let them write. Then reveal the number. Most classes stop between 12 and 20. Do not judge them — say clearly: this is not your fault. Nobody showed you the rest.",
    visual:
      "Near-black stage. One huge number in warm amber. Layered paper planes low in the frame like a lit diorama.",
    activity: "60-second write-down: list every career you can name.",
    render: () => (
      <div className="absolute inset-0 kn-vignette">
        <Planes />
        <div className="absolute kn-anim" style={{ left: 140, top: 240, right: 140 }}>
          <div className="kn-kicker">A keynote for Classes 8–12</div>
          <div className="kn-title-xl" style={{ marginTop: 48 }}>
            Exposure Is<br />All You Need
          </div>
          <div className="kn-subtitle kn-muted kn-sans" style={{ marginTop: 48, maxWidth: 1100 }}>
            You can probably name 15 careers.<br />The world runs on more than 20,000.
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "why-10-20",
    label: "Why only 10–20?",
    notes:
      "Ask three students to read their lists aloud. You will hear the same words: doctor, engineer, IAS, CA, teacher, lawyer, army, pilot, cricketer, YouTuber. Point out the pattern — every one of those careers is visible. They appear in your home, your street, your television. You cannot want what you have never seen.",
    visual:
      "Left: the ten repeated words stacked large. Right: a dim silhouette crowd of thousands of unnamed roles fading into dark.",
    render: () => (
      <Frame kicker="Part 1" index="02">
        <div className="kn-title">Why do most students<br />know only 10–20 careers?</div>
        <Bullets
          items={[
            "You can only name what you have seen.",
            "You see the careers that live in your house and street.",
            "Television and coaching ads repeat the same six jobs.",
            "So the list feels like the whole world. It is not.",
          ]}
        />
      </Frame>
    ),
  },
  {
    id: "exposure-gap",
    label: "The Exposure Gap",
    notes:
      "Define the term and let it land. The Exposure Gap is the distance between the number of careers that exist and the number a student has ever heard of. It is not an intelligence gap. It is not an effort gap. It is a seeing gap — and a seeing gap can be closed in a single afternoon.",
    visual:
      "Two bars side by side: a tiny amber bar labelled 'careers you know', a huge muted bar labelled 'careers that exist'.",
    render: () => (
      <Frame kicker="Part 2" index="03">
        <div className="kn-title">The Exposure Gap</div>
        <div className="kn-body-lg kn-sans kn-muted" style={{ marginTop: 36, maxWidth: 1300 }}>
          The distance between the careers that exist and the careers you have heard of.
        </div>
        <StatCards
          cards={[
            { value: "~15", label: "Careers the average student can name" },
            { value: "2,000+", label: "Careers in this presentation alone" },
            { value: "20,000+", label: "Job titles recorded worldwide" },
          ]}
        />
      </Frame>
    ),
  },
  {
    id: "thousands-exist",
    label: "Thousands exist",
    notes:
      "Read six or seven strange titles out loud and pause after each: bioacoustician, foley artist, cricket pitch curator, avalanche forecaster, tea taster, planetary protection officer, dialect coach. Every one is a real, paid job someone is doing today. Someone had to be told these existed too.",
    visual:
      "A career tree growing out of a paper plane, branches labelled by industry, dozens of small leaf labels.",
    render: () => (
      <Frame kicker="Part 3" index="04">
        <div className="kn-title">There are thousands<br />of careers out there</div>
        <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {[
            "Foley artist",
            "Bioacoustician",
            "Cricket pitch curator",
            "Avalanche forecaster",
            "Tea taster",
            "Dialect coach",
            "Planetary protection officer",
            "Perfusionist",
            "Neon sign bender",
            "Forensic entomologist",
            "Museum registrar",
            "Esports analyst",
          ].map((t) => (
            <div
              key={t}
              className="kn-body kn-sans"
              style={{
                background: "rgb(var(--kn-paper-2))",
                borderRadius: 20,
                padding: "30px 34px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </Frame>
    ),
  },
  {
    id: "why-not-taught",
    label: "Why nobody taught you",
    notes:
      "Be gentle here — this slide protects parents and teachers. Nobody hid these careers from you. A teacher has 40 students and a syllabus. Your parents can only describe the world they lived in. Nobody can teach 20,000 careers. That is not their job. Finding out is yours.",
    visual:
      "Three small paper dioramas: a classroom, a living room, a newspaper — each with a small circle of light and a large dark area around it.",
    render: () => (
      <Frame kicker="Part 4" index="05">
        <div className="kn-title">Nobody hid these careers<br />from you</div>
        <Bullets
          items={[
            "A teacher has 40 students, a syllabus and a clock.",
            "Your parents can only describe the world they lived in.",
            "No school on earth can cover 20,000 careers.",
            "So the search is not their duty. It is yours — starting today.",
          ]}
        />
      </Frame>
    ),
  },
  {
    id: "how-interest-grows",
    label: "How interest grows",
    notes:
      "Ask: 'Who here loves cricket? Were you born loving it?' No — someone showed you a match. Interest is not something you are born with. It is switched on by exposure. Exposure creates curiosity, curiosity creates practice, practice creates skill, skill creates a career.",
    visual: "A five-step chain of paper cards, each one slightly larger and brighter than the last.",
    render: () => (
      <Frame kicker="Part 5" index="06">
        <div className="kn-title">Interest is not born.<br />It is switched on.</div>
        <div style={{ marginTop: 80, display: "flex", gap: 24, alignItems: "stretch" }}>
          {["Exposure", "Curiosity", "Practice", "Skill", "Career"].map((s, i) => (
            <div
              key={s}
              style={{
                flex: 1,
                background: i === 4 ? "rgba(245,176,66,0.14)" : "rgb(var(--kn-paper-2))",
                border: `1px solid ${i === 4 ? "rgba(245,176,66,0.5)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 24,
                padding: "48px 28px",
                textAlign: "center",
              }}
            >
              <div className="kn-caption kn-muted kn-sans">Step {i + 1}</div>
              <div className={`kn-subtitle ${i === 4 ? "kn-accent" : ""}`} style={{ marginTop: 20 }}>{s}</div>
            </div>
          ))}
        </div>
        <div className="kn-body-lg kn-sans kn-muted" style={{ marginTop: 64 }}>
          You were not born loving cricket. Someone showed you a match.
        </div>
      </Frame>
    ),
  },
  {
    id: "guessing-game",
    label: "Activity: guess the job",
    notes:
      "Run the game. Read the description, take three guesses from the room, then reveal. Keep it fast and loud. Use the Careers Explorer 'random career' button if you want fresh rounds. The point is not to win — it is to feel how many jobs exist that nobody named.",
    visual: "Game-show framing: one description in the centre, a big amber REVEAL bar underneath.",
    activity: "Career guessing game — 5 rounds, 3 guesses each, reveal and move on.",
    render: () => (
      <Frame kicker="Activity" index="07">
        <div className="kn-title">Guess the job</div>
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {[
            ["I make the sound of footsteps and breaking bones using vegetables and shoes.", "Foley artist"],
            ["I decide exactly how much water the pitch gets before a Test match.", "Cricket pitch curator"],
            ["I listen to forest recordings to count animals I never see.", "Bioacoustician"],
            ["I make sure spacecraft carry no Earth germs to other planets.", "Planetary protection officer"],
          ].map(([q, a]) => (
            <div
              key={a}
              style={{
                background: "rgb(var(--kn-paper-2))",
                borderRadius: 24,
                padding: "40px 36px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="kn-body kn-sans">“{q}”</div>
              <div className="kn-caption kn-accent kn-sans" style={{ marginTop: 24 }}>Answer: {a}</div>
            </div>
          ))}
        </div>
      </Frame>
    ),
  },
  {
    id: "showcase",
    label: "Careers showcase",
    notes:
      "Open the Careers Explorer on the projector if you have internet. Otherwise read from any industry column. Let students shout 'stop' and read whatever line lands. Twenty seconds per career is enough — you are planting seeds, not teaching syllabi.",
    visual:
      "Dense multi-column list, industry headers in amber, deliberately overflowing off the bottom edge to feel endless.",
    render: () => (
      <Frame kicker="Part 7" index="08">
        <div className="kn-title">Hundreds you have<br />never heard of</div>
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 36 }}>
          {[
            ["Science", ["Volcanologist", "Glaciologist", "Mycologist", "Seed bank curator", "Hydrogeologist"]],
            ["Making", ["Luthier", "Glassblower", "Bell founder", "Saree weaver", "Boat builder"]],
            ["Media", ["Colourist", "Music supervisor", "Matte painter", "Subtitle timer", "Prop master"]],
            ["Health", ["Perfusionist", "Orthotist", "Genetic counsellor", "Medical illustrator", "Music therapist"]],
          ].map(([head, list]) => (
            <div key={head as string}>
              <div className="kn-kicker" style={{ marginBottom: 28 }}>{head as string}</div>
              {(list as string[]).map((t) => (
                <div key={t} className="kn-body kn-sans" style={{ marginBottom: 22 }}>{t}</div>
              ))}
            </div>
          ))}
        </div>
      </Frame>
    ),
  },
  {
    id: "six-lenses",
    label: "The six lenses",
    notes:
      "Warn them: no career scores full marks on all six. That is normal. The goal is a strong fit on three or four, and eyes open about the rest. Ask them to score one career they are considering out of 6 right now.",
    visual: "Six hexagon cards in two rows, each with an icon-like glyph and one question.",
    activity: "Score one career you are considering against all six lenses.",
    render: () => (
      <Frame kicker="Part 8" index="09">
        <div className="kn-title">Six lenses, one choice</div>
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {[
            ["Passion", "Would I still find this interesting after 1,000 hours?"],
            ["Skill", "Can I actually get good at this with practice?"],
            ["Market", "Will someone pay for this work in ten years?"],
            ["Lifestyle", "Do I want the daily life this job comes with?"],
            ["Purpose", "Does the work matter to someone other than me?"],
            ["Growth", "Where can I be after ten years in this field?"],
          ].map(([t, q]) => (
            <div
              key={t}
              style={{
                background: "rgb(var(--kn-paper-2))",
                borderRadius: 24,
                padding: "40px 36px",
                minHeight: 240,
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="kn-subtitle kn-accent">{t}</div>
              <div className="kn-body kn-sans kn-muted" style={{ marginTop: 20 }}>{q}</div>
            </div>
          ))}
        </div>
      </Frame>
    ),
  },
  {
    id: "real-people",
    label: "Real paths",
    notes:
      "Say plainly: these are real kinds of careers being done in India today, described honestly. Ask students if they know anyone with a job nobody in class can name — an uncle who repairs pianos, a neighbour who grades diamonds. Those people are the proof.",
    visual: "Four portrait-shaped paper frames with abstract vector figures, name plate under each.",
    render: () => (
      <Frame kicker="Part 9" index="10">
        <div className="kn-title">People built lives<br />out of these</div>
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
          {[
            ["A sound designer in a Bengaluru game studio", "Started by recording rain on a phone. Now builds the audio worlds of games played across Asia."],
            ["A propulsion technician on an Indian launch programme", "Loved model rockets in school. Now tests the engines that leave the atmosphere."],
            ["A mango orchard agronomist in Andhra Pradesh", "Studies soil and pests so an entire district's harvest survives a bad summer."],
            ["An esports performance analyst", "Watches thousands of match minutes and turns them into the plan a team wins with."],
          ].map(([t, d]) => (
            <div
              key={t}
              style={{
                background: "rgb(var(--kn-paper-2))",
                borderRadius: 24,
                padding: "40px 36px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="kn-subtitle">{t}</div>
              <div className="kn-body kn-sans kn-muted" style={{ marginTop: 20 }}>{d}</div>
            </div>
          ))}
        </div>
      </Frame>
    ),
  },
  {
    id: "future-careers",
    label: "Future careers",
    notes:
      "Remind them that half the jobs they will hold do not have names yet. Ten years ago there was no prompt engineer, no carbon accountant, no drone pathfinder. The skill that matters is not picking the right job — it is being able to see a new one when it appears.",
    visual: "Timeline sweeping from 2015 to 2040 with new job titles appearing as small amber nodes.",
    render: () => (
      <Frame kicker="Part 10" index="11">
        <div className="kn-title">The jobs of 2040<br />mostly have no name yet</div>
        <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24 }}>
          {[
            ["AI", ["Model evaluator", "AI safety analyst", "Prompt engineer"]],
            ["Climate", ["Carbon accountant", "Coastline planner", "Grid storage engineer"]],
            ["Biotech", ["Gene therapy technician", "Lab-grown food scientist", "Biofoundry operator"]],
            ["Robotics", ["Fleet teleoperator", "Warehouse robot trainer", "Surgical robotics tech"]],
            ["Space", ["Debris tracking analyst", "Lunar habitat designer", "Launch range officer"]],
          ].map(([head, list]) => (
            <div key={head as string}>
              <div className="kn-kicker" style={{ marginBottom: 24 }}>{head as string}</div>
              {(list as string[]).map((t) => (
                <div key={t} className="kn-body kn-sans" style={{ marginBottom: 20 }}>{t}</div>
              ))}
            </div>
          ))}
        </div>
      </Frame>
    ),
  },
  {
    id: "challenge",
    label: "30-Day Challenge",
    notes:
      "Give the challenge as homework with no marks attached. One career a day, thirty days, one line in a notebook: what they do, and would I want their Tuesday? At the end they will have seen more careers than most adults ever will.",
    visual: "A 30-square calendar grid, four squares highlighted with the weekly instruction.",
    activity: "30-Day Career Exploration Challenge — one new career a day.",
    render: () => (
      <Frame kicker="Your turn" index="12">
        <div className="kn-title">The 30-Day Career<br />Exploration Challenge</div>
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
          {[
            ["Week 1", "One new career every day. Write one line: what do they actually do?"],
            ["Week 2", "Pick 5 that interested you. Watch one video about each."],
            ["Week 3", "Talk to 3 real people doing work you cannot name. Ask about their Tuesday."],
            ["Week 4", "Score your top 3 on the six lenses. Keep the list. Do not decide yet."],
          ].map(([w, d]) => (
            <div
              key={w}
              style={{
                background: "rgb(var(--kn-paper-2))",
                borderRadius: 24,
                padding: "40px 36px",
                border: "1px solid rgba(245,176,66,0.2)",
              }}
            >
              <div className="kn-subtitle kn-accent">{w}</div>
              <div className="kn-body kn-sans" style={{ marginTop: 20 }}>{d}</div>
            </div>
          ))}
        </div>
      </Frame>
    ),
  },
  {
    id: "closing",
    label: "Closing",
    notes:
      "Slow down. Say the line, then stop talking for three full seconds before you leave the stage. Do not prescribe a career. Leave them curious, not instructed.",
    visual: "Almost empty frame. One line of type. A single warm light on the lowest paper plane.",
    render: () => (
      <div className="absolute inset-0 kn-vignette">
        <Planes />
        <div className="absolute kn-anim" style={{ left: 140, top: 300, right: 140 }}>
          <div className="kn-title" style={{ maxWidth: 1500 }}>
            Don’t choose the most<br />popular career.
          </div>
          <div className="kn-title kn-accent" style={{ marginTop: 36 }}>Choose the career that fits you.</div>
          <div className="kn-body-lg kn-sans kn-muted" style={{ marginTop: 64 }}>
            Exposure is all you need. Go and look.
          </div>
        </div>
      </div>
    ),
  },
];
