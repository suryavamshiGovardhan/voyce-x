
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Brain, Heart, Zap, Leaf, ArrowRight } from "lucide-react";
import { hapticFeedback } from "@/utils/hapticFeedback";

const welcomeMessages = [
  "A calm mind is a strong mind.",
  "Each day is a new beginning.",
  "Find peace in the small moments.",
  "Breathe deeply, you are capable.",
  "The journey of a thousand miles begins with a single step.",
  "Your mental wellness matters.",
  "Every step forward is progress.",
  "You have the strength within you.",
  "Healing begins with self-compassion.",
  "Your story matters, your voice matters."
];

const inspirationalQuotes = [
  "Mental health is not a destination, but a process.",
  "You are not broken, you are breaking through.",
  "Courage doesn't mean you don't get afraid. Courage means you don't let fear stop you.",
  "Your current situation is not your final destination.",
  "Growth and comfort do not coexist."
];

export default function WelcomeSection() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % welcomeMessages.length);
    }, 4000);

    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 8000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(quoteInterval);
    };
  }, []);

  useEffect(() => {
    const buttons = sectionRef.current?.querySelectorAll('button, a');
    buttons?.forEach((button) => {
      button.addEventListener('click', () => hapticFeedback.onClick());
      button.addEventListener('mouseenter', () => hapticFeedback.onHover());
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden"
    >
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-green-400 rounded-full transform hover:scale-150 transition-transform duration-300"></div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <Card className="bg-white/95 backdrop-blur-lg border-blue-200 shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-700 relative overflow-hidden">
          {/* Card background animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/50 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          
          <CardContent className="p-12 text-center relative z-10">
            <div className="flex items-center justify-center mb-8 transform hover:scale-110 transition-transform duration-500">
              <Brain className="h-16 w-16 text-blue-600 mr-4 transform hover:rotate-180 transition-transform duration-700" />
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 transform hover:scale-105 transition-transform duration-300">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">VOYCE</span>
              </h1>
              <Heart className="ml-4 h-16 w-16 text-green-500 transform hover:scale-125 hover:pulse transition-all duration-500" />
            </div>
            
            <div className="min-h-[100px] flex flex-col items-center justify-center mb-8 space-y-4">
              <div className="flex items-center space-x-3">
                <Sparkles className="h-6 w-6 text-orange-400 animate-spin" />
                <p className="text-2xl text-slate-600 font-light italic transition-all duration-1000 transform hover:scale-105 max-w-2xl">
                  {welcomeMessages[currentMessage]}
                </p>
                <Sparkles className="h-6 w-6 text-orange-400 animate-spin" />
              </div>
              
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent transform hover:scale-150 transition-transform duration-300"></div>
              
              <p className="text-lg text-blue-600 font-medium italic transition-all duration-1000 transform hover:scale-105 max-w-3xl">
                "{inspirationalQuotes[currentQuote]}"
              </p>
            </div>
            
            <div className="space-y-6 mb-8">
              <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto text-lg transform hover:scale-105 transition-transform duration-300">
                Your journey towards mental wellness starts here. Access comprehensive resources, connect with supportive community, 
                and discover evidence-based tools designed for holistic mental health understanding and healing.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-blue-50 p-4 rounded-lg transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
                  <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2 transform hover:rotate-12 transition-transform duration-300" />
                  <h3 className="font-semibold text-blue-900 mb-1">Mind Science</h3>
                  <p className="text-sm text-blue-700">Evidence-based neuroscience</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
                  <Heart className="w-8 h-8 text-green-600 mx-auto mb-2 transform hover:scale-125 transition-transform duration-300" />
                  <h3 className="font-semibold text-green-900 mb-1">Heart Healing</h3>
                  <p className="text-sm text-green-700">Emotional wellness approach</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
                  <Zap className="w-8 h-8 text-orange-600 mx-auto mb-2 transform hover:rotate-45 transition-transform duration-300" />
                  <h3 className="font-semibold text-orange-900 mb-1">Life Energy</h3>
                  <p className="text-sm text-orange-700">Practical transformation tools</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button 
                asChild 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 text-lg shadow-xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-300"
              >
                <a href="/dashboard">
                  Begin Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 animate-bounce" />
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline"
                className="border-green-500 text-green-600 hover:bg-green-50 px-10 py-4 text-lg transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-lg"
              >
                <a href="/voyce">
                  Discover VOYCE
                  <Leaf className="ml-2 h-5 w-5 animate-pulse" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
