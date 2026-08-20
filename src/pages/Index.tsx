import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow, StatementHeading, Lede, Reveal, StepRail, QuietCard } from "@/components/site/primitives";
import {
  PhoneFrame,
  BrowserFrame,
  CheckInScreen,
  ReflectionScreen,
  PatternsScreen,
  SupportScreen,
  DashboardScreen,
  SchoolDashboardScreen,
} from "@/components/site/ProductScreens";
import { OrganizationSchema, WebSiteSchema, FounderSchema } from "@/components/StructuredData";

const PROGRESSION = [
  { label: "Feeling", body: "Something is off, but there is no word for it yet." },
  { label: "Reflection", body: "A quiet prompt turns the feeling into a sentence." },
  { label: "Understanding", body: "Sentences repeat. A pattern becomes visible." },
  { label: "Support", body: "The pattern points to a next step — or to a person." },
  { label: "Growth", body: "Noticing becomes a habit instead of an emergency." },
];

const EXPERIENCE = [
  { number: "01", title: "Check in", body: "Pause for thirty seconds and name where you actually are today." },
  { number: "02", title: "Understand", body: "VOYCE organises your thoughts, emotions and signals into something readable." },
  { number: "03", title: "Reflect", body: "Prompts and insights that ask better questions instead of giving verdicts." },
  { number: "04", title: "Support", body: "Practices, resources and clear routes to real human support when it matters." },
];

const AUDIENCES = [
  {
    title: "Students",
    line: "Understand yourself without having to explain everything at once.",
    cta: "Explore student experience",
    to: "/students",
  },
  {
    title: "Teachers",
    line: "Notice patterns. Start better conversations.",
    cta: "Explore teacher tools",
    to: "/teachers",
  },
  {
    title: "Schools",
    line: "Build a culture where wellbeing is noticed, supported, and followed through.",
    cta: "Explore VOYCE for Schools",
    to: "/schools",
  },
  {
    title: "Parents",
    line: "Understand the signals behind the silence.",
    cta: "Explore parent support",
    to: "/parents",
  },
];

const TRUST = [
  { title: "Private by default", body: "Your reflections belong to you. Nobody at a school sees an individual entry." },
  { title: "Safeguarding first", body: "Clear escalation routes and honest limits, written in plain language." },
  { title: "Human-centred", body: "VOYCE points towards people. It never pretends to be one." },
  { title: "Responsible AI", body: "AI helps organise and prompt. It does not diagnose, score, or label you." },
  { title: "School ready", body: "Built for classrooms with aggregated, non-identifying insight for staff." },
  { title: "Transparent", body: "No invented statistics, no borrowed logos, no claims we cannot stand behind." },
];

export default function Index() {
  return (
    <PageShell
      title="VOYCE — Understand what you're feeling. Find what comes next."
      description="VOYCE is a calm, private wellbeing space for students, teachers, parents and schools. Check in, reflect, notice patterns, and find the next small step. Not therapy, not diagnosis."
      keywords="student wellbeing platform, school mental health platform, emotional wellbeing, teacher wellbeing tools, reflection app"
      canonical="/"
    >
      <OrganizationSchema />
      <WebSiteSchema />
      <FounderSchema />

      {/* 01 — HERO */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(60% 50% at 15% 0%, hsl(var(--primary)/0.10) 0%, transparent 70%), radial-gradient(50% 40% at 90% 10%, hsl(var(--accent)/0.10) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs tracking-wide text-muted-foreground">
              A wellbeing space, not a diagnosis engine
            </p>
            <h1 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              Understand what you&rsquo;re feeling. Find what comes next.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Some things are easier to say when something simply listens first. VOYCE gives students, teachers,
              parents and schools a calm, private way to notice emotional wellbeing before it becomes a crisis.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-7 text-base">
                <Link to="/start-here">
                  Explore VOYCE
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-7 text-base">
                <Link to="/how-it-works">How it works</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Free to explore. No diagnosis. No pressure to explain yourself.
            </p>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="flex items-start justify-center gap-4 sm:gap-6">
              <PhoneFrame className="translate-y-6">
                <CheckInScreen />
              </PhoneFrame>
              <PhoneFrame className="hidden sm:block">
                <PatternsScreen />
              </PhoneFrame>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — THE INSIGHT */}
      <Section tone="ink" ariaLabel="The insight behind VOYCE">
        <Reveal className="max-w-3xl">
          <Eyebrow className="text-primary-foreground/60">The insight</Eyebrow>
          <StatementHeading className="text-ink-foreground">
            Not every struggle looks like a crisis.
          </StatementHeading>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/70 sm:text-lg">
            Most emotional difficulty is quiet. It shows up as tiredness, avoidance, irritation, silence — long before
            anyone thinks to ask for help. By the time it looks serious enough to name, months have usually passed.
            VOYCE exists in that gap: the long, ordinary stretch where noticing is still cheap.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-4 md:grid-cols-5">
          {PROGRESSION.map((step, i) => (
            <li key={step.label}>
              <Reveal delay={i * 80}>
                <div className="h-full rounded-2xl border border-ink-foreground/12 bg-ink-foreground/5 p-6">
                  <div className="mb-4 flex items-center gap-2" aria-hidden="true">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="h-px flex-1 bg-ink-foreground/20" />
                  </div>
                  <h3 className="font-display text-lg text-ink-foreground">{step.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-foreground/60">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* 03 — THE EXPERIENCE */}
      <Section>
        <Reveal className="max-w-3xl">
          <Eyebrow>The VOYCE experience</Eyebrow>
          <StatementHeading>Four small movements, repeated gently.</StatementHeading>
          <Lede>
            VOYCE is a support and wellbeing platform. It does not replace psychologists, doctors, counsellors,
            teachers, parents, or emergency services — it helps you reach them sooner and with clearer words.
          </Lede>
        </Reveal>
        <StepRail steps={EXPERIENCE} className="mt-14" />
      </Section>

      {/* 04 — REAL PRODUCT */}
      <Section tone="muted" ariaLabel="Inside VOYCE">
        <Reveal className="max-w-3xl">
          <Eyebrow>Inside VOYCE</Eyebrow>
          <StatementHeading>The product, not a metaphor for it.</StatementHeading>
          <Lede>
            Every screen below reflects something VOYCE actually does today: check-ins, private reflection, personal
            patterns, guided practices, and an aggregated view for schools that never exposes an individual.
          </Lede>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            { screen: <CheckInScreen />, title: "Daily check-in", body: "Thirty seconds. One honest line." },
            { screen: <ReflectionScreen />, title: "Private reflection", body: "Prompts that ask, never judge." },
            { screen: <SupportScreen />, title: "Next steps", body: "Practices and routes to real support." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <QuietCard interactive className="flex h-full flex-col items-center text-center">
                <PhoneFrame className="w-full max-w-[248px]">{item.screen}</PhoneFrame>
                <h3 className="mt-7 text-lg font-medium tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </QuietCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <BrowserFrame label="voyce-x.lovable.app/dashboard">
              <DashboardScreen />
            </BrowserFrame>
            <p className="mt-4 text-sm text-muted-foreground">
              Your dashboard — today, your patterns, one suggestion. Never a scoreboard.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <BrowserFrame label="voyce-x.lovable.app/schools">
              <SchoolDashboardScreen />
            </BrowserFrame>
            <p className="mt-4 text-sm text-muted-foreground">
              The school view — aggregated participation and patterns, with individual entries kept private.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* 05 — AUDIENCES */}
      <Section>
        <Reveal className="max-w-3xl">
          <Eyebrow>Who VOYCE is for</Eyebrow>
          <StatementHeading>Four people in the same room, needing different things.</StatementHeading>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <QuietCard interactive className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl tracking-tight">{a.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{a.line}</p>
                </div>
                <Link
                  to={a.to}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  {a.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </QuietCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 06 — TRUST */}
      <Section tone="muted" ariaLabel="Trust and safety">
        <Reveal className="max-w-3xl">
          <Eyebrow>Trust architecture</Eyebrow>
          <StatementHeading>What we will and won&rsquo;t do with your inner life.</StatementHeading>
          <Lede>
            We make no claims we cannot support. No fabricated statistics, no partner logos we haven&rsquo;t earned, no
            promises of anonymity we can&rsquo;t technically keep.
          </Lede>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-3">
          {TRUST.map((t, i) => (
            <div key={t.title} className="bg-background">
              <Reveal delay={i * 60} className="h-full">
                <div className="h-full p-7">
                  <h3 className="text-base font-medium tracking-tight">{t.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
        <Reveal className="mt-10 flex flex-wrap gap-4">
          <Link to="/privacy" className="text-sm font-medium text-primary hover:underline">
            Read the privacy page
          </Link>
          <Link to="/safety" className="text-sm font-medium text-primary hover:underline">
            Read the safety page
          </Link>
        </Reveal>
      </Section>

      {/* 07 — CLOSING CTA */}
      <Section tone="ink" className="py-24 sm:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <StatementHeading className="text-ink-foreground">
            Start with one honest sentence.
          </StatementHeading>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-foreground/70">
            Two minutes is enough to begin. Nothing you write is shared, scored, or shown to your school.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full px-8 text-base">
              <Link to="/start-here">Start with VOYCE</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-ink-foreground/25 bg-transparent px-8 text-base text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
            >
              <Link to="/schools">Talk to VOYCE about your school</Link>
            </Button>
          </div>
        </Reveal>
      </Section>
    </PageShell>
  );
}
