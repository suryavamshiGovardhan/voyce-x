import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { GraduationCap, Brain, Heart, CloudRain, Lightbulb } from "lucide-react";

// Learning Topics (NO disorder names, NO diagnostic framing, NO checklists)
const learningTopics = [
  {
    id: "emotions",
    title: "Understanding Emotions",
    icon: Heart,
    description: "Emotions are messengers. They tell us something about our inner world and how we're responding to life.",
    content: [
      "Emotions are natural responses to experiences. They aren't good or bad — they're information.",
      "Sometimes emotions feel overwhelming. This is often because they've been building up without release.",
      "Learning to name what you feel can help you understand what you need.",
      "It's okay to feel multiple emotions at once. Humans are complex."
    ],
    reflection: "What emotion do you find hardest to sit with?"
  },
  {
    id: "stress",
    title: "How Stress Works",
    icon: CloudRain,
    description: "Stress is your body's natural response to challenges. Understanding it can help you work with it, not against it.",
    content: [
      "Stress isn't always harmful. Short-term stress can help you focus and perform.",
      "Chronic stress — the kind that doesn't let up — is what can affect your wellbeing.",
      "Your body has a stress response system that evolved to protect you from danger.",
      "Learning to recognize your stress signals is the first step to managing them."
    ],
    reflection: "Where in your body do you first notice stress?"
  },
  {
    id: "thinking",
    title: "Thinking Patterns",
    icon: Brain,
    description: "The way we think shapes how we feel. Understanding common thinking patterns can offer new perspectives.",
    content: [
      "We all have habitual ways of thinking. Some are helpful, others less so.",
      "Thoughts aren't always facts. They're interpretations, shaped by our experiences.",
      "Noticing your thoughts without judging them is a skill that can be developed.",
      "Changing thought patterns takes time and practice. Be patient with yourself."
    ],
    reflection: "What's a thought you have often that you've never questioned?"
  },
  {
    id: "connection",
    title: "Human Connection",
    icon: Lightbulb,
    description: "We're social beings. Connection isn't a luxury — it's a fundamental need.",
    content: [
      "Feeling understood by even one person can make a significant difference.",
      "It's normal to feel lonely sometimes, even when surrounded by people.",
      "Vulnerability is often the gateway to deeper connection.",
      "Quality of connection matters more than quantity."
    ],
    reflection: "When did you last feel truly heard by someone?"
  }
];

export default function LearnPage() {
  return (
    <>
      <SEOHead
        title="Learn | VOYCE-X"
        description="Understand emotions, stress, and thinking patterns — without clinical framing. High-level explanations for awareness and clarity."
        keywords="emotional awareness, stress understanding, thinking patterns, mental clarity, self-awareness"
      />
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          {/* Header */}
          <section className="safe-space breathing-space border-b border-border">
            <div className="text-center max-w-2xl mx-auto">
              <GraduationCap className="h-10 w-10 text-primary mx-auto mb-6" />
              <h1 className="text-3xl font-semibold text-foreground mb-4">
                Learn
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                High-level understanding of emotions, stress, and how we think. 
                No labels. No checklists. Just awareness.
              </p>
              
              {/* Clear Disclaimer */}
              <div className="disclaimer-box text-left">
                <p className="text-muted-foreground text-sm">
                  <strong className="text-foreground">Understanding does not equal diagnosis.</strong> This 
                  information is for awareness and reflection, not self-diagnosis or treatment. 
                  For personal concerns, please consult a qualified professional.
                </p>
              </div>
            </div>
          </section>
          
          {/* Topics */}
          <section className="safe-space py-12">
            <div className="space-y-12 max-w-2xl mx-auto">
              {learningTopics.map((topic) => (
                <article key={topic.id} className="voyce-card p-8">
                  {/* Topic Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <topic.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-medium text-foreground mb-2">
                        {topic.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Content Points */}
                  <div className="space-y-4 mb-6">
                    {topic.content.map((point, index) => (
                      <p key={index} className="text-foreground leading-relaxed pl-4 border-l-2 border-border">
                        {point}
                      </p>
                    ))}
                  </div>
                  
                  {/* Reflection Prompt */}
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-sm text-primary italic">
                      Reflect: {topic.reflection}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          
          {/* Closing Disclaimer */}
          <section className="safe-space pb-16">
            <div className="max-w-xl mx-auto">
              <div className="disclaimer-box">
                <p className="text-muted-foreground text-sm">
                  <strong className="text-foreground">A note on learning:</strong> Reading about 
                  emotions and stress can sometimes bring up feelings. That's normal. 
                  If something feels too heavy, it's okay to step away and return later — 
                  or to talk to someone you trust.
                </p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
