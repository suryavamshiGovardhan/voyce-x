/**
 * Trust Hero Component - Polished, confidence-first hero
 */

import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

const PARTICLES = [
  { top: '12%', left: '8%', size: 6, delay: '0s' },
  { top: '22%', left: '82%', size: 4, delay: '1.4s' },
  { top: '38%', left: '18%', size: 5, delay: '2.8s' },
  { top: '55%', left: '72%', size: 7, delay: '0.7s' },
  { top: '68%', left: '28%', size: 4, delay: '3.6s' },
  { top: '78%', left: '62%', size: 6, delay: '2.1s' },
  { top: '30%', left: '50%', size: 3, delay: '4.2s' },
  { top: '85%', left: '88%', size: 5, delay: '1.9s' },
];

function TrustHero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-slate-900 via-green-900/80 to-slate-800"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(34,197,94,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59,130,246,0.10) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      <div className="absolute inset-0" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="voyce-particle"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 px-4 max-w-3xl mx-auto py-20">
        {/* New series ribbon */}
        <Link
          to="/series"
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-emerald-400/10 border border-emerald-300/30 text-emerald-200 text-xs sm:text-sm font-medium tracking-wide hover:bg-emerald-400/20 transition-all"
        >
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          New series — The Unheard Mind
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>

        {/* Logo / Title */}
        <h1
          id="hero-heading"
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-200 to-green-400"
        >
          VOYCE-X
        </h1>

        {/* Tagline */}
        <p className="font-display text-2xl sm:text-3xl md:text-4xl text-white/90 font-medium mb-4 leading-tight italic">
          A quiet space to understand your own thoughts.
        </p>

        {/* Trust builder */}
        <p className="text-base sm:text-lg text-white/60 mb-12 max-w-xl mx-auto leading-relaxed">
          Not therapy. Not diagnosis.
          <br />
          Just reflection, learning, and awareness.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all"
          >
            <Link to="/start-here" className="flex items-center gap-2">
              Start here (2 minutes)
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="lg"
            className="text-white/75 hover:text-white hover:bg-white/10 px-6 py-6 text-lg rounded-xl"
          >
            <Link to="/stories" className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" aria-hidden="true" />
              Explore stories
            </Link>
          </Button>
        </div>

        {/* Schools/Educators */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm mb-2">For schools and educators</p>
          <a
            href="https://sites.google.com/view/4igroups/ai4schools"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 text-sm font-medium inline-flex items-center gap-1 transition-colors"
          >
            Learn about AI4Schools
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none" role="presentation">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="rgba(255,255,255,0.05)"
          />
        </svg>
      </div>
    </section>
  );
}

export default memo(TrustHero);
