
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const statements = [
  "Stress is a message. VOYCE is the translation.",
  "Your mind. Your heart. Your gut. In harmony.",
  "Transform trauma into wisdom, and find your voice.",
  "Mental clarity is not a destination, but a way of being."
];

export default function DiscoveryHero() {
  const [currentStatement, setCurrentStatement] = useState(0);

  useEffect(() => {
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
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[15s] ease-in-out transform scale-100 hover:scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547823326-7a7cea5c3e6a?w=1920&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Welcome to <span className="text-green-300">VOYCE</span>
        </h1>
        <div className="min-h-[70px] flex items-center justify-center mb-10">
          <p className="text-2xl md:text-3xl font-light italic transition-opacity duration-1000" key={currentStatement}>
            {statements[currentStatement]}
          </p>
        </div>
        <Button size="lg" onClick={scrollToExplore} className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-lg px-8 py-6">
          Explore VOYCE
          <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
        </Button>
      </div>
    </div>
  );
}
