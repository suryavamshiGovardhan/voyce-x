import { motion } from "framer-motion";
import { ArrowLeft, Quote, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { ArticleSchema } from "@/components/StructuredData";

const TheMisplacedManPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="The Man Who Misplaced Himself | A Kafkaesque Journey | VOYCE"
        description="A deeply personal exploration of disorientation, identity loss, and quiet despair. A first-person narrative of existing without truly living."
        keywords="kafkaesque, identity loss, mental health, existential crisis, depression, self-awareness, consciousness, personal story"
        ogImage="/og-image.png"
      />
      <ArticleSchema
        title="The Man Who Misplaced Himself"
        description="A Kafkaesque autobiography exploring themes of disorientation, dependency, and the struggle to reclaim one's sense of self in an absurd world."
        author="VOYCE Editorial"
        datePublished="2025-12-01"
        dateModified="2025-12-01"
        image="/og-image.png"
        url="https://voyce-x.lovable.app/article/the-misplaced-man"
      />

      <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-muted/30">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              onClick={() => navigate("/blog")}
              className="gap-2 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Personal Narrative</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent leading-tight">
              The Man Who Misplaced Himself
            </h1>
            <p className="text-xl text-muted-foreground italic">
              A Kafkaesque autobiography
            </p>
          </motion.header>

          {/* Opening */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
          >
            <p className="text-lg leading-relaxed text-muted-foreground italic">
              Some mornings I wake up uncertain whether I have awakened at all.
              The ceiling appears, the fan spins its lazy circles, and yet I feel as though I'm still asleep — trapped inside a dream not vivid enough to fear, yet not dull enough to forget.
            </p>
            <p className="text-lg leading-relaxed">
              I stand. I breathe. I exist.
            </p>
            <p className="text-lg leading-relaxed">
              But none of these feel like proof that I am alive.
            </p>
            <p className="text-lg leading-relaxed">
              I walk through society like a stranger who has forgotten why he was invited.
              Everyone else seems to understand the rules of this existence: when to speak, what to desire, who to be. I, meanwhile, remain stuck in the waiting room of my own life — holding a ticket whose number is never called.
            </p>
          </motion.div>

          {/* Section 1: The Early Error */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">The Early Error</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>As a child, I never learned to belong.</p>
              <p>
                Perhaps someone misplaced the lesson.<br />
                Perhaps I was absent the day identity was distributed.<br />
                Perhaps identity was never meant for everyone.
              </p>
              <p>
                People said things to me — comments, criticisms, commands — and I obeyed.
                Not because I agreed, but because disobedience seemed like a language I never learned.
              </p>
              <p>
                Dependency wasn't a choice.<br />
                It was the architecture of my existence.
              </p>
              <p>
                Slowly, my silence grew roots.<br />
                And soon, even my thoughts asked permission before forming.
              </p>
            </div>
          </motion.section>

          {/* Section 2: The Negotiation That Never Happened */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">The Negotiation That Never Happened</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>Recently, I sat across from the school director — a man who spoke like a judge but smiled like a clerk.</p>
              <p>
                He promised ₹8,000.<br />
                Then, he promised it would increase.<br />
                Then, he handed me ₹14,000 for two months.
              </p>
              <p>He spoke as though performing a ceremony; I nodded as though attending my own sentencing.</p>
              <Card className="my-6 border-l-4 border-primary">
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-primary mb-3" />
                  <p className="text-xl font-medium italic">
                    "This is unfair."
                  </p>
                </CardContent>
              </Card>
              <p>But the words decayed on the way to my tongue, as if some invisible bureaucracy denied their clearance.</p>
              <p>Instead, I accepted the salary like evidence in a trial where my crime remained unspecified.</p>
            </div>
          </motion.section>

          {/* Section 3: The Vanishing Self */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">The Vanishing Self</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>Somewhere along these years, something dissolved.</p>
              <p>
                My will?<br />
                My individuality?<br />
                My consciousness?
              </p>
              <p>I'm not sure.</p>
              <p>
                There are days my thoughts feel like broken machinery—producing fragments, not conclusions. Days when looking at strangers feels easier than speaking to them. Days when I feel surrounded by people, yet marooned — like an accidental witness to humanity rather than a participant.
              </p>
              <p>
                Even pleasure — or its quiet imitation — became mechanical, habitual, hollow.
                A repeated action not for desire but escape… from the absurd emptiness of thoughtless reality.
              </p>
              <p>Each time, my confidence leaked away, like sand slipping through fingers I never learned to tighten.</p>
            </div>
          </motion.section>

          {/* Section 4: The Silent Hunger */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">The Silent Hunger</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>I want someone to speak to, yet the idea of explaining myself feels unbearable — like attempting to translate a language even I do not understand.</p>
              <p>Whenever I try to describe what I feel, my problems multiply, stare at me, and ask:</p>
              <Card className="my-6 border-l-4 border-primary">
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-primary mb-3" />
                  <p className="text-xl font-medium italic">
                    "Are you sure you deserve to be understood?"
                  </p>
                </CardContent>
              </Card>
              <p>So instead, I stay quiet.</p>
              <p>
                Silence becomes easier than clarity.<br />
                Numbness becomes safer than feeling.
              </p>
              <p>I move through life like a file in a system — stamped, stored, but never fully read.</p>
            </div>
          </motion.section>

          {/* Section 5: The Residual Pulse */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">The Residual Pulse</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>Yet — inexplicably — something remains.</p>
              <p>
                Not hope. Hope is too dramatic.<br />
                Not ambition. Ambition requires direction.
              </p>
              <p>Maybe it's simply: I haven't disappeared yet.</p>
              <p>
                A faint, stubborn presence.<br />
                A ghost still auditing the living.
              </p>
              <p>Sometimes, in rare moments — the world pauses just long enough for me to hear a whisper from somewhere deep within:</p>
              <Card className="my-6 border-l-4 border-primary bg-primary/5">
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-primary mb-3" />
                  <p className="text-xl font-medium italic">
                    "You are not finished."
                  </p>
                </CardContent>
              </Card>
              <p>It doesn't reassure me.<br />It doesn't excite me.</p>
              <p>
                But it keeps me existing —<br />
                and perhaps, that is enough for a story still being written.
              </p>
            </div>
          </motion.section>

          {/* Closing Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">Connection to VOYCE</h3>
            <p className="text-lg leading-relaxed mb-4">
              This narrative isn't about despair — it's about recognition. Many of us walk through life feeling like witnesses rather than participants, carrying an unnamed weight that others cannot see.
            </p>
            <p className="text-lg leading-relaxed">
              VOYCE exists for these stories. For the voices that struggle to speak. For the minds that feel misplaced in a world that demands clarity and confidence we don't always possess. You are not alone in feeling lost. And sometimes, acknowledging the disorientation is the first step toward finding your way.
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 text-center"
          >
            <Button
              onClick={() => navigate("/blog")}
              size="lg"
              className="gap-2"
            >
              Explore More Stories
              <BookOpen className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TheMisplacedManPage;
