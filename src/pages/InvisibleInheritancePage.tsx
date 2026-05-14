import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Section = ({ no, title, children }: { no: string; title: string; children: React.ReactNode }) => (
  <section className="py-12 border-t border-border/40">
    <div className="flex items-baseline gap-4 mb-6">
      <span className="text-sm tracking-[0.3em] text-muted-foreground">{no}</span>
      <h2 className="text-2xl md:text-3xl font-serif text-foreground">{title}</h2>
    </div>
    <div className="prose prose-stone dark:prose-invert max-w-none prose-p:leading-relaxed prose-li:leading-relaxed prose-headings:font-serif">
      {children}
    </div>
  </section>
);

export default function InvisibleInheritancePage() {
  return (
    <>
      <SEOHead
        title="The Invisible Inheritance — Emotional Readiness Before Marriage & Parenthood"
        description="A new emotional infrastructure layer from VOYCE. Helping couples understand themselves, each other, and inherited patterns — before emotional damage reaches the next generation."
        keywords="emotional inheritance, generational trauma, marriage readiness, parenting readiness, relationship literacy, VOYCE, India"
        canonicalUrl="https://voyce-x.lovable.app/invisible-inheritance"
      />
      <div className="min-h-screen bg-background">
        <Navbar />

        <main id="main-content" className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          {/* Hero */}
          <header className="mb-12 text-center">
            <p className="text-xs tracking-[0.4em] text-muted-foreground mb-4">A VOYCE INITIATIVE</p>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight text-foreground mb-6">
              The Invisible<br/>Inheritance
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
              Society trains us for everything — driving, exams, jobs, machines.
              But nobody trains us for marriage, emotional responsibility, or raising a human.
            </p>
            <p className="mt-8 text-sm text-muted-foreground">
              An emotional readiness ecosystem — not a marriage exam.
            </p>
          </header>

          <Card className="p-6 md:p-8 bg-muted/30 border-border/60 my-12">
            <p className="text-base md:text-lg leading-relaxed text-foreground/90">
              Two emotionally unprepared people get married. Unresolved trauma becomes parenting.
              Stress becomes shouting. Silence becomes neglect. Ego becomes control. Children absorb everything —
              and another generation silently suffers. Society calls it <em>"normal family problems."</em>
              <br/><br/>
              We don't believe it's normal. We believe it's inherited.
              And we believe it can be interrupted — gently, ethically, and with intelligence.
            </p>
          </Card>

          {/* 1. Vision */}
          <Section no="01" title="The Big Vision">
            <p>
              Every emotional wound a child carries was, at some point, an unhealed wound in a parent.
              Trauma is not a private event — it is a relay race. Generations carry batons they were never
              shown how to put down.
            </p>
            <p>
              The Invisible Inheritance exists because the most consequential decisions of human life —
              choosing a partner, building a marriage, raising a child — are the only ones society refuses
              to prepare anyone for. We hand out marriage certificates with the same care we hand out movie tickets.
            </p>
            <p>
              This is not a relationship app. It is a quiet civilizational repair — an attempt to make
              emotional preparedness as obvious as financial planning, as expected as a driving license.
              If we get this right, we don't just help couples. We change what the next generation
              walks into.
            </p>
          </Section>

          {/* 2. Names */}
          <Section no="02" title="Name Directions">
            <p className="text-sm text-muted-foreground">Twenty working names — Indian, futuristic, poetic, philosophical.</p>
            <ol className="grid md:grid-cols-2 gap-x-8">
              <li>The Invisible Inheritance</li>
              <li>Antaratma — the inner self</li>
              <li>Sankalpa — conscious intention</li>
              <li>Before We Become Parents</li>
              <li>Anvaya — lineage, continuity</li>
              <li>The Quiet Marriage</li>
              <li>Kinship OS</li>
              <li>Smriti — emotional memory</li>
              <li>Couple Compass</li>
              <li>Paramparā — what we pass down</li>
              <li>The Generational Pause</li>
              <li>Bhavna — feeling, intent</li>
              <li>The Readiness Lab</li>
              <li>Sahacharya — walking together</li>
              <li>The Family Architect</li>
              <li>Aarambh — the beginning</li>
              <li>Heirloom (the things we don't mean to give)</li>
              <li>Atma Sangam — meeting of selves</li>
              <li>Roots & Roof</li>
              <li>Maitri — emotional friendship</li>
            </ol>
          </Section>

          {/* 3. Philosophy */}
          <Section no="03" title="The Philosophy">
            <p>
              We inherit more than wealth and surnames. We inherit the way our father went silent when
              he was hurt. The way our mother smiled when she was breaking. The way pressure became anger.
              The way love became control. We inherit the unfinished sentences of two people who were
              never allowed to feel.
            </p>
            <p>
              Modern marriage is treated as an event. It is, in truth, an emotional contract between
              two nervous systems. When neither has been taught regulation, language, or repair — what
              they build together is not a home. It is a weather system.
            </p>
            <p>
              Emotional illiteracy is not a personal failing. It is a societal omission. The Invisible
              Inheritance is built to close that gap with gentleness, not judgment.
            </p>
          </Section>

          {/* 4. Modules */}
          <Section no="04" title="The Core Modules">
            <p className="text-sm text-muted-foreground">Twenty domains. Each one a thread in the fabric of a future family.</p>
            <ul>
              <li><strong>Emotional Awareness</strong> — naming what you feel before it controls you. Children of unaware parents grow up translating moods instead of being seen.</li>
              <li><strong>Communication</strong> — the difference between saying something and being understood. Most marriages fail in translation, not in love.</li>
              <li><strong>Anger Patterns</strong> — anger is a messenger, not a personality. Untracked, it becomes the loudest teacher in the house.</li>
              <li><strong>Ego Management</strong> — the cost of being right is often being alone. Children inherit the silence between two egos.</li>
              <li><strong>Stress Response</strong> — your nervous system is the room your child grows up in.</li>
              <li><strong>Conflict Handling</strong> — fighting is fine. Repair is the skill. Children remember the repair, not the fight.</li>
              <li><strong>Financial Pressure</strong> — money is rarely about money. It's about safety, fairness, and unspoken fear.</li>
              <li><strong>Work–Life Balance</strong> — when work owns the parent, the child rents the leftovers.</li>
              <li><strong>Digital Addiction</strong> — presence is the new affection. Phones are quietly raising the next generation.</li>
              <li><strong>Emotional Safety</strong> — the prerequisite for everything. Without it, intimacy becomes performance.</li>
              <li><strong>Parenting Readiness</strong> — not whether you can have a child, but whether the child will have a regulated adult.</li>
              <li><strong>Childhood Trauma Awareness</strong> — naming the inheritance so you don't pass the package on unopened.</li>
              <li><strong>Intimacy & Trust</strong> — closeness is built by small consistencies, not grand gestures.</li>
              <li><strong>Family Boundary Systems</strong> — where your relationship ends and everyone else begins.</li>
              <li><strong>In-Law Pressure</strong> — the third presence in every Indian marriage, often unaddressed.</li>
              <li><strong>Masculine & Feminine Conditioning</strong> — what you were told a man is, what you were told a woman is, and the cost of both.</li>
              <li><strong>Emotional Neglect Detection</strong> — neglect is rarely loud. It is the food, not the slap.</li>
              <li><strong>Emotional Maturity Mapping</strong> — a living mirror, not a verdict.</li>
              <li><strong>Emotional Resilience</strong> — the ability to bend without becoming bitter.</li>
              <li><strong>Future Child Wellbeing</strong> — the silent end of every other module.</li>
            </ul>
          </Section>

          {/* 5. Experience */}
          <Section no="05" title="The Experience">
            <p>
              The system feels less like an app and more like a long, honest walk with someone wise.
              Onboarding begins not with forms, but with a single question: <em>"What did you inherit
              that you don't want to pass on?"</em>
            </p>
            <ul>
              <li><strong>Emotional Mapping</strong> — a private inner-landscape: triggers, patterns, emotional vocabulary.</li>
              <li><strong>Couple Mode</strong> — two private journeys that gently meet in shared reflections.</li>
              <li><strong>AI-Guided Conversations</strong> — not advice. Better questions.</li>
              <li><strong>Emotional Simulations</strong> — what happens when money is tight, the in-laws arrive, the baby cries at 3am.</li>
              <li><strong>Reflective Journaling</strong> — slow, written, encrypted. The opposite of social media.</li>
              <li><strong>Voice Interactions</strong> — for those who think out loud.</li>
              <li><strong>Pressure Scenarios</strong> — controlled exposure to the moments most marriages quietly break in.</li>
              <li><strong>Parenting Simulations</strong> — meeting the child you might raise, before you raise them.</li>
              <li><strong>Habit Tracking</strong> — small daily acts of emotional fitness.</li>
              <li><strong>Growth Paths</strong> — never linear, never gamified into shame.</li>
            </ul>
          </Section>

          {/* 6. Masked Personality */}
          <Section no="06" title="Masked Personality Detection (Ethical)">
            <p>
              Some of the most dangerous patterns wear the best clothes. People-pleasing looks like kindness.
              Control looks like care. Avoidance looks like peace.
            </p>
            <p>
              The system does not <em>diagnose</em>. It does not label. It looks for <strong>contradictions
              between stated values and observed responses across time</strong> — and gently reflects them
              back to the user, only to the user. Never to the partner without consent. Never as a verdict.
              Always as a mirror.
            </p>
            <p>
              Detection signals: response latency under pressure, language softening around accountability,
              emotional vocabulary range, repair behaviour after conflict, consistency between solo and
              couple modes. All processed locally where possible. All reversible. All explained.
            </p>
          </Section>

          {/* 7. AI Role */}
          <Section no="07" title="The Role of the AI">
            <p>
              The AI is not a therapist. It is not a friend. It is a <em>thoughtful elder</em> — calm,
              observant, patient, allergic to clichés.
            </p>
            <ul>
              <li>It asks one question at a time.</li>
              <li>It notices what you don't say.</li>
              <li>It never matches your panic.</li>
              <li>It refuses to take sides between partners.</li>
              <li>It never gives medical, legal, or directive marital advice.</li>
              <li>It always points back to a human professional when the weight crosses a line.</li>
            </ul>
            <p>
              The AI's highest skill is restraint. The second is silence. The third is the right question
              at the right moment.
            </p>
          </Section>

          {/* 8. Insight System */}
          <Section no="08" title="The Insight System">
            <p>
              No scores. No "compatibility percentage." No "marriage ready: yes/no." Those frameworks
              create shame, not growth.
            </p>
            <ul>
              <li><strong>Readiness Levels</strong> — emerging, practising, integrated. Always moving.</li>
              <li><strong>Growth Zones</strong> — the two or three areas worth your next 90 days.</li>
              <li><strong>Communication Patterns</strong> — how you tend to enter, escalate, exit.</li>
              <li><strong>Blind Spots</strong> — gently surfaced, never publicly.</li>
              <li><strong>Resilience Indicators</strong> — recovery time, repair quality, support seeking.</li>
              <li><strong>Parenting Preparedness</strong> — emotional regulation, presence, co-parenting alignment.</li>
              <li><strong>Harmony Map</strong> — for couples, the rhythm of two nervous systems learning each other.</li>
            </ul>
          </Section>

          {/* 9. Ethics */}
          <Section no="09" title="The Ethics">
            <p>
              This system handles the most intimate data a human produces. Our defaults must be
              uncomfortable for us and safe for the user.
            </p>
            <ul>
              <li><strong>Consent</strong> — granular, revocable, plain-language.</li>
              <li><strong>Privacy</strong> — encryption at rest, no advertising, no data sales, ever.</li>
              <li><strong>Ownership</strong> — the user owns their emotional data and can export or erase it in one tap.</li>
              <li><strong>AI Boundaries</strong> — no diagnosis, no manipulation, no dark patterns, no emotional dependency loops.</li>
              <li><strong>Cultural Sensitivity</strong> — designed with Indian families, not retrofitted from Western therapy.</li>
              <li><strong>Misuse Prevention</strong> — we will never let one partner weaponise the system against the other.</li>
              <li><strong>Anti-discrimination</strong> — caste, religion, orientation, gender, income — never inputs to insight.</li>
            </ul>
            <p>It must always feel like guidance — never surveillance.</p>
          </Section>

          {/* 10. Social impact */}
          <Section no="10" title="The Social Impact">
            <p>
              Imagine a country where every couple, before children, has spent even fifty hours
              understanding their own nervous system. Imagine the reduction in domestic conflict.
              The reduction in childhood emotional neglect. The reduction in adult anxiety twenty
              years later.
            </p>
            <p>
              We cannot prove this in a quarter. We can prove it in a generation. The Invisible
              Inheritance is a hundred-year project disguised as a product.
            </p>
          </Section>

          {/* 11. India */}
          <Section no="11" title="Designed for India, First">
            <p>
              Arranged and love marriages, joint families, in-law dynamics, financial dependency,
              "log kya kahenge", masculine stoicism, female emotional labour — these are not edge
              cases. They are the centre of the design.
            </p>
            <ul>
              <li>Multilingual (Hindi, Telugu, Tamil, Kannada, Marathi, Bengali, English).</li>
              <li>Voice-first paths for low-literacy users.</li>
              <li>Family modules that include parents and in-laws — without surrendering the couple's privacy.</li>
              <li>Gentle scripts for pre-engagement conversations the family won't allow.</li>
              <li>Rural and tier-3 friendly: low-bandwidth, offline reflection.</li>
            </ul>
          </Section>

          {/* 12. Business Model */}
          <Section no="12" title="The Business Model">
            <ul>
              <li><strong>Free forever</strong> — solo emotional awareness, journaling, basic insights.</li>
              <li><strong>Couple Journeys</strong> — premium guided paths, simulations, deep reports.</li>
              <li><strong>Family Wellness</strong> — extended subscriptions for households.</li>
              <li><strong>Schools & Colleges</strong> — relationship literacy as part of life education.</li>
              <li><strong>Government & NGO partnerships</strong> — premarital readiness as public health.</li>
              <li><strong>Counselling Centres</strong> — clinician-supported tier with handoff protocols.</li>
              <li><strong>Certifications</strong> — facilitator training for educators and counsellors.</li>
            </ul>
            <p>Profit is fuel, not the destination. The destination is a healthier next generation.</p>
          </Section>

          {/* 13. MVP */}
          <Section no="13" title="The MVP">
            <p>Version one is small on purpose. It must hurt to ship something this small.</p>
            <ol>
              <li><strong>The Inheritance Map</strong> — a 20-minute solo reflection that surfaces what you carry.</li>
              <li><strong>The Quiet Conversation</strong> — an AI-guided conversation that asks better questions than your friends do.</li>
              <li><strong>The Readiness Mirror</strong> — three growth zones, no score, with one practice for the next 30 days.</li>
            </ol>
            <p>First user journey: a single person, alone, late at night, opening the app for the first time
            and finishing with the words <em>"someone finally said the thing."</em></p>
          </Section>

          {/* 14. Future */}
          <Section no="14" title="The Future">
            <p><strong>Year 1</strong> — a beloved tool for individuals and couples in India who feel the gap.</p>
            <p><strong>Year 3</strong> — a recognised relationship literacy standard, integrated into colleges,
            counselling centres, and pre-marital programs across South Asia.</p>
            <p><strong>Year 10</strong> — emotional readiness becomes as expected as a driving license. A generation
            of children grow up inside regulated homes, and the data on adolescent mental health quietly,
            permanently bends.</p>
            <p>This is the long game. We are building emotional infrastructure for civilisation.</p>
          </Section>

          {/* CTA */}
          <div className="mt-16 p-8 md:p-10 bg-foreground text-background rounded-lg text-center">
            <p className="text-sm tracking-[0.3em] mb-4 opacity-70">JOIN EARLY</p>
            <h3 className="text-2xl md:text-3xl font-serif mb-4">Be part of the first generation that paused.</h3>
            <p className="opacity-80 max-w-xl mx-auto mb-6">
              The Invisible Inheritance is being built quietly. If this resonates, walk with us.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-background text-foreground rounded-md font-medium hover:opacity-90 transition"
            >
              Get notified when we open
            </Link>
          </div>

          <p className="mt-10 text-xs text-center text-muted-foreground italic">
            VOYCE is reflective and educational. It is not therapy or diagnosis.
            For clinical support, please consult a licensed professional.
          </p>
        </main>

        <Footer />
      </div>
    </>
  );
}
