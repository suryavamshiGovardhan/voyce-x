
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Heart, Zap, Leaf, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const heroMessages = [
  "Transform trauma into wisdom",
  "Dissolve the illusion of separation", 
  "Architect your mind with neuroscience",
  "Find clarity in the chaos",
  "Heal your heart, free your mind"
];

export default function Hero() {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % heroMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 6}s`
            }}
          >
            <Sparkles className="w-3 h-3 text-white transform rotate-45" />
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-8 space-x-4 transform hover:scale-110 transition-all duration-700">
          <Brain className="h-16 w-16 text-blue-500 animate-pulse hover:rotate-180 transition-transform duration-1000" />
          <Heart className="h-20 w-20 text-green-500 animate-bounce hover:scale-150 transition-transform duration-500" />
          <Zap className="h-16 w-16 text-orange-500 animate-pulse hover:-rotate-180 transition-transform duration-1000" />
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 transform hover:scale-105 transition-transform duration-500">
          <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300">Transform</span>{" "}
          <span className="text-green-400 hover:text-green-300 transition-colors duration-300">Your</span>{" "}
          <span className="text-white hover:text-gray-100 transition-colors duration-300">Mind</span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl font-light text-orange-200 italic mb-8 transform hover:scale-105 transition-transform duration-300">
          Academy of Consciousness & Mental Clarity
        </h2>
        
        <div className="space-y-6 mb-12">
          <div className="min-h-[80px] flex items-center justify-center">
            <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-slate-300 leading-relaxed transition-all duration-1000 transform hover:scale-105">
              {heroMessages[currentMessage]}
            </p>
          </div>
          
          <p className="text-base text-slate-400 leading-relaxed max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
            This is not therapy. This is not self-help. This is the systematic understanding of 
            your mind, brain, and heart connection for lasting mental clarity and emotional freedom.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg transform hover:scale-110 hover:-translate-y-3 transition-all duration-300 shadow-2xl">
            <Link to="/path">
              Begin The Journey
              <ArrowRight className="ml-3 h-5 w-5 animate-bounce" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-green-300/50 text-green-300 hover:bg-green-600/20 px-10 py-4 text-lg transform hover:scale-110 hover:-translate-y-3 transition-all duration-300 shadow-2xl backdrop-blur-sm">
            <Link to="/library">Explore Resources</Link>
          </Button>
          <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 text-lg transform hover:scale-110 hover:-translate-y-3 transition-all duration-300 shadow-2xl">
            <Link to="/voyce">
              Discover VOYCE
              <Leaf className="ml-3 h-5 w-5 animate-pulse" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-black/20 backdrop-blur-sm border border-blue-300/30 rounded-lg p-6 transform hover:scale-110 hover:-translate-y-4 hover:rotate-2 transition-all duration-500 hover:shadow-2xl">
            <Brain className="text-blue-400 w-8 h-8 mx-auto mb-3 transform hover:rotate-180 transition-transform duration-500" />
            <h3 className="text-white font-medium mb-2">Evidence-Based</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Grounded in neuroscience research and clinical evidence for effective mental health management.
            </p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm border border-green-300/30 rounded-lg p-6 transform hover:scale-110 hover:-translate-y-4 hover:-rotate-2 transition-all duration-500 hover:shadow-2xl">
            <Heart className="text-green-400 w-8 h-8 mx-auto mb-3 transform hover:scale-125 hover:pulse transition-all duration-500" />
            <h3 className="text-white font-medium mb-2">Holistic Approach</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Integrating mind, heart, and gut wisdom for comprehensive emotional wellbeing.
            </p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm border border-orange-300/30 rounded-lg p-6 transform hover:scale-110 hover:-translate-y-4 hover:rotate-1 transition-all duration-500 hover:shadow-2xl">
            <Zap className="text-orange-400 w-8 h-8 mx-auto mb-3 transform hover:rotate-45 transition-transform duration-500" />
            <h3 className="text-white font-medium mb-2">Practical Tools</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Real-world applications and techniques for immediate and lasting transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
