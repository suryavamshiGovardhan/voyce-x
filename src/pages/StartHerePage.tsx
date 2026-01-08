/**
 * Start Here Page - The most important page for first-time users
 * Confidence-first, emotion-safe, human
 */

import { memo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookOpen, PenLine, Lightbulb, ArrowRight, Shield, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: "1",
    title: "Read",
    description: "Read a short, anonymous human story.",
    icon: BookOpen,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    number: "2", 
    title: "Reflect",
    description: "Answer one private question. No one sees it.",
    icon: PenLine,
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  {
    number: "3",
    title: "Learn (optional)",
    description: "Understand the idea behind the feeling — gently.",
    icon: Lightbulb,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  }
];

function StartHerePage() {
  return (
    <>
      <SEOHead 
        title="Start Here | VOYCE-X"
        description="Begin your journey with VOYCE-X. A quiet space for reflection, learning, and self-awareness. No account required."
        keywords="start here, mental health, reflection, self-awareness, mindfulness, VOYCE-X"
      />
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-4 py-12 max-w-3xl">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Start Here
            </h1>
            
            {/* Trust Builder */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <Lock className="h-4 w-4" aria-hidden="true" />
              <p className="text-lg">
                You don't need an account. Nothing is saved unless you want it to be.
              </p>
            </div>
          </header>

          {/* Section 1: What This Is */}
          <section className="mb-12 p-6 bg-muted/30 rounded-xl" aria-labelledby="what-is-this">
            <h2 id="what-is-this" className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-500" aria-hidden="true" />
              What This Is
            </h2>
            
            <ul className="space-y-3 text-lg text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold" aria-hidden="true">•</span>
                A place to pause and reflect
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold" aria-hidden="true">•</span>
                A place to read real human stories
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold" aria-hidden="true">•</span>
                A place to learn without labels
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-amber-700 dark:text-amber-300 text-sm font-medium">
                This is not a medical or diagnostic platform.
              </p>
            </div>
          </section>

          {/* Section 2: How It Works */}
          <section className="mb-12" aria-labelledby="how-it-works">
            <h2 id="how-it-works" className="text-2xl font-semibold text-foreground mb-8 text-center">
              How It Works
            </h2>
            
            <div className="grid gap-6">
              {steps.map((step) => (
                <div 
                  key={step.number}
                  className={`flex items-start gap-4 p-6 rounded-xl ${step.bgColor} border border-transparent hover:border-${step.color}/20 transition-all`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full ${step.bgColor} flex items-center justify-center`}>
                    <span className={`text-xl font-bold ${step.color}`}>{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className={`h-5 w-5 ${step.color}`} aria-hidden="true" />
                      <h3 className={`text-xl font-semibold ${step.color}`}>{step.title}</h3>
                    </div>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Primary CTA */}
          <section className="text-center">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg"
            >
              <Link to="/stories" className="flex items-center gap-2">
                Begin with a story
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            
            <p className="mt-6 text-muted-foreground text-sm">
              Takes about 2 minutes. Completely private.
            </p>
          </section>

          {/* Schools/Educators Link */}
          <section className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground mb-3">
              Are you a school or educator?
            </p>
            <Button asChild variant="outline">
              <a 
                href="https://sites.google.com/view/4igroups/ai4schools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Learn about AI4Schools
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default memo(StartHerePage);
