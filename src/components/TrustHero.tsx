/**
 * Trust Hero Component - Simplified, confidence-first hero
 * Dead simple headline, trust builder, one primary CTA
 */

import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';

function TrustHero() {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-slate-900 via-green-900/80 to-slate-800"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Subtle background elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
        }}
        aria-hidden="true"
      />
      
      {/* Main Content */}
      <div className="relative z-10 px-4 max-w-3xl mx-auto">
        {/* Logo */}
        <h1 
          id="hero-heading"
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-green-300"
        >
          VOYCE-X
        </h1>
        
        {/* Simple, dead-honest tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-4 leading-relaxed">
          A quiet space to understand your own thoughts.
        </p>
        
        {/* Trust builder */}
        <p className="text-base sm:text-lg text-white/60 mb-12 max-w-xl mx-auto">
          Not therapy. Not diagnosis.<br />
          Just reflection, learning, and awareness.
        </p>
        
        {/* CTAs - ONE strong, one light */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary CTA */}
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all"
          >
            <Link to="/start-here" className="flex items-center gap-2">
              Start here (2 minutes)
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
          
          {/* Secondary CTA - lighter */}
          <Button 
            asChild
            variant="ghost"
            size="lg"
            className="text-white/70 hover:text-white hover:bg-white/10 px-6 py-6 text-lg"
          >
            <Link to="/stories" className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" aria-hidden="true" />
              Explore stories
            </Link>
          </Button>
        </div>
        
        {/* Schools/Educators link */}
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
        <svg 
          viewBox="0 0 1200 120" 
          className="w-full h-full"
          preserveAspectRatio="none"
          role="presentation"
        >
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
