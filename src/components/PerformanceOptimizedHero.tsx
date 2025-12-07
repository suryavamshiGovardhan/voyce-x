/**
 * Performance-Optimized Hero Component
 * - LCP optimized with critical content above fold
 * - Reduced JavaScript for better INP
 * - CLS prevented with explicit dimensions
 * - Accessibility compliant with WCAG 2.2 AA
 */

import { memo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Brain, Heart, Sparkles } from 'lucide-react';

// Static statements to avoid re-renders
const heroStatements = [
  "Transform Your Mental Wellness Journey",
  "Science-Backed Psychology & Personal Growth",
  "Your Voice Matters. Your Mind Matters."
];

// Memoized floating icon for performance
const FloatingIcon = memo(({ 
  icon: Icon, 
  className, 
  ariaLabel 
}: { 
  icon: typeof Brain; 
  className: string; 
  ariaLabel: string;
}) => (
  <div 
    className={`absolute opacity-20 ${className}`}
    aria-hidden="true"
    role="presentation"
  >
    <Icon className="w-8 h-8" aria-label={ariaLabel} />
  </div>
));

FloatingIcon.displayName = 'FloatingIcon';

function PerformanceOptimizedHero() {
  const scrollToExplore = useCallback(() => {
    const element = document.getElementById('explore-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-primary/90 via-accent/80 to-secondary/70"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Optimized Background - CSS only, no JS calculations */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-emerald-900"
        aria-hidden="true"
      />
      
      {/* Static decorative elements - reduced from 25 to 6 for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-green-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-pink-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Floating Icons - Reduced and static */}
      <FloatingIcon icon={Brain} className="top-20 left-20 text-blue-400" ariaLabel="Brain icon" />
      <FloatingIcon icon={Heart} className="top-32 right-24 text-pink-400" ariaLabel="Heart icon" />
      <FloatingIcon icon={Sparkles} className="bottom-20 right-20 text-purple-400" ariaLabel="Sparkles icon" />

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" aria-hidden="true" />
      
      {/* Main Content - Critical LCP Element */}
      <div className="relative z-10 px-4 max-w-5xl mx-auto">
        {/* Logo with explicit dimensions for CLS prevention */}
        <div className="mb-6">
          <h1 
            id="hero-heading"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-purple-400"
            style={{ 
              minHeight: '1.2em',
              lineHeight: 1.2 
            }}
          >
            VOYCE
          </h1>
          
          {/* Loading indicator dots with fixed dimensions */}
          <div className="flex justify-center space-x-2 mb-4" aria-hidden="true">
            <div className="w-3 h-3 bg-blue-400 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <div className="w-3 h-3 bg-purple-400 rounded-full" />
          </div>
        </div>

        {/* Tagline with fixed height to prevent CLS */}
        <div 
          className="min-h-[100px] sm:min-h-[120px] flex items-center justify-center mb-8"
          role="region"
          aria-label="Platform tagline"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-3xl shadow-2xl">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed">
              {heroStatements[0]}
            </p>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Discover mental wellness through evidence-based psychology, mindfulness practices, and personal growth resources.
        </p>

        {/* CTA Button - Accessible with proper focus states */}
        <Button 
          size="lg" 
          onClick={scrollToExplore}
          className="group bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 hover:from-blue-500 hover:via-purple-500 hover:to-green-500 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-xl sm:rounded-2xl shadow-2xl focus:ring-4 focus:ring-white/50 focus:outline-none transition-all duration-300 hover:scale-105"
          aria-label="Scroll down to explore VOYCE features"
        >
          <span className="flex items-center">
            Explore VOYCE
            <ArrowDown className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
          </span>
        </Button>
      </div>

      {/* Bottom Wave - Simplified SVG for performance */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 overflow-hidden" aria-hidden="true">
        <svg 
          viewBox="0 0 1200 120" 
          className="w-full h-full"
          preserveAspectRatio="none"
          role="presentation"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="rgba(255,255,255,0.08)"
          />
        </svg>
      </div>
    </section>
  );
}

export default memo(PerformanceOptimizedHero);
