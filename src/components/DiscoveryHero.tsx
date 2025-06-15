
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Brain, Heart, Zap } from 'lucide-react';

const statements = [
  "Stress is a message. VOYCE is the translation.",
  "Your mind. Your heart. Your gut. In harmony.",
  "Transform trauma into wisdom, and find your voice.",
  "Mental clarity is not a destination, but a way of being.",
  "The body keeps the score, but the mind can rewrite the story.",
  "Between stimulus and response lies your power to choose."
];

const FloatingIcon = ({ icon: Icon, delay, className }: { icon: any, delay: number, className: string }) => (
  <div 
    className={`absolute opacity-20 animate-pulse ${className}`}
    style={{ 
      animationDelay: `${delay}s`,
      animationDuration: `${4 + Math.random() * 3}s`
    }}
  >
    <Icon className="w-8 h-8 transform hover:scale-150 transition-all duration-700 hover:rotate-180" />
  </div>
);

export default function DiscoveryHero() {
  const [currentStatement, setCurrentStatement] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentStatement(prev => (prev + 1) % statements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToExplore = () => {
    document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Dynamic Background with Parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-green-900 transition-all duration-[20s] ease-in-out"
        style={{
          background: `linear-gradient(135deg, 
            hsl(${240 + Math.sin(Date.now() / 10000) * 20}, 70%, 20%) 0%,
            hsl(${280 + Math.cos(Date.now() / 8000) * 30}, 60%, 25%) 35%,
            hsl(${200 + Math.sin(Date.now() / 12000) * 25}, 65%, 30%) 70%,
            hsl(${160 + Math.cos(Date.now() / 9000) * 20}, 55%, 25%) 100%)`
        }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + Math.random() * 10}s`
            }}
          >
            <div 
              className="w-2 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 rounded-full transform hover:scale-300 transition-all duration-1000 cursor-pointer"
              style={{
                boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
                animation: `float ${6 + Math.random() * 4}s ease-in-out infinite alternate`
              }}
            />
          </div>
        ))}
      </div>

      {/* Floating Icons */}
      <FloatingIcon icon={Brain} delay={0} className="top-20 left-20 text-blue-400" />
      <FloatingIcon icon={Heart} delay={2} className="top-32 right-24 text-pink-400" />
      <FloatingIcon icon={Zap} delay={4} className="bottom-32 left-32 text-yellow-400" />
      <FloatingIcon icon={Sparkles} delay={1} className="bottom-20 right-20 text-purple-400" />

      {/* Glass Morphism Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      
      {/* Main Content */}
      <div className={`relative z-10 px-4 transition-all duration-2000 ${isLoaded ? 'animate-fade-in transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}>
        {/* 3D Logo */}
        <div className="mb-8 transform hover:scale-110 transition-all duration-700 perspective-1000">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 transform hover:rotateX-12 transition-all duration-700"
              style={{
                background: 'linear-gradient(45deg, #60a5fa, #34d399, #a78bfa, #f472b6)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient-shift 6s ease-in-out infinite'
              }}>
            VOYCE
          </h1>
          <div className="flex justify-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>

        {/* Rotating Statements with 3D Card Effect */}
        <div className="min-h-[120px] flex items-center justify-center mb-12 perspective-1000">
          <div 
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-4xl transform hover:rotateY-5 hover:scale-105 transition-all duration-700 shadow-2xl"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-2xl" />
            <p 
              className="text-2xl md:text-4xl font-light italic transition-all duration-1000 relative z-10 leading-relaxed"
              key={currentStatement}
              style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}
            >
              {statements[currentStatement]}
            </p>
            
            {/* Glowing Border Animation */}
            <div className="absolute inset-0 rounded-2xl opacity-50">
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 animate-spin-slow" 
                   style={{ 
                     mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                     maskComposite: 'exclude',
                     animationDuration: '8s'
                   }} />
            </div>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div className="relative">
          <Button 
            size="lg" 
            onClick={scrollToExplore} 
            className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 hover:from-blue-500 hover:via-purple-500 hover:to-green-500 text-white px-12 py-6 text-xl rounded-2xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 shadow-2xl overflow-hidden"
            style={{
              boxShadow: '0 20px 40px -12px rgba(99, 102, 241, 0.4)'
            }}
          >
            {/* Button Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Ripple Effect */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 rounded-full transition-transform duration-700 origin-center" />
            </div>
            
            <span className="relative z-10 flex items-center">
              Explore VOYCE
              <ArrowDown className="ml-3 h-6 w-6 animate-bounce group-hover:animate-pulse transition-all duration-300" />
            </span>

            {/* Floating Sparkles on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {[...Array(8)].map((_, i) => (
                <Sparkles 
                  key={i}
                  className="absolute w-3 h-3 text-white/60 animate-ping"
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${10 + (i % 3) * 30}%`,
                    animationDelay: `${i * 100}ms`
                  }}
                />
              ))}
            </div>
          </Button>

          {/* Button Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
        </div>
      </div>

      {/* Bottom Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              fill="rgba(255,255,255,0.1)"
              className="animate-pulse"
            />
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              fill="rgba(255,255,255,0.05)"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
