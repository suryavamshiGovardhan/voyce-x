
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Brain } from "lucide-react";
import JapaneseIcon from "./JapaneseIcon";
import { hapticFeedback } from "@/utils/hapticFeedback";

const welcomeMessages = [
  "A calm mind is a strong mind.",
  "Each day is a new beginning.",
  "Find peace in the small moments.",
  "Breathe deeply, you are capable.",
  "The journey of a thousand miles begins with a single step.",
  "Your mental wellness matters.",
  "Every step forward is progress.",
  "You have the strength within you."
];

export default function WelcomeSection() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % welcomeMessages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Add haptic feedback to interactive elements
    const buttons = sectionRef.current?.querySelectorAll('button, a');
    buttons?.forEach((button) => {
      button.addEventListener('click', () => hapticFeedback.onClick());
      button.addEventListener('mouseenter', () => hapticFeedback.onHover());
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden japanese-pattern slide-3d-enter"
    >
      {/* Animated Background with Japanese patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-50 to-orange-100"></div>
      
      {/* Floating Japanese Icons */}
      <div className="absolute top-10 left-10 opacity-20">
        <JapaneseIcon type="cherry" className="text-sky-500" />
      </div>
      <div className="absolute top-20 right-20 opacity-20">
        <JapaneseIcon type="wave" className="text-orange-300" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <JapaneseIcon type="bamboo" className="text-sky-400" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <JapaneseIcon type="lotus" className="text-orange-400" />
      </div>
      <div className="absolute top-1/2 left-1/4 opacity-15">
        <JapaneseIcon type="zen" className="text-sky-600" />
      </div>
      <div className="absolute top-1/3 right-1/3 opacity-15">
        <JapaneseIcon type="crane" className="text-orange-500" />
      </div>
      
      {/* Sakura petals */}
      <div className="sakura-float absolute top-0 left-1/4" style={{ animationDelay: '0s' }}>
        <JapaneseIcon type="cherry" className="text-pink-300 w-4 h-4" animate={false} />
      </div>
      <div className="sakura-float absolute top-0 left-3/4" style={{ animationDelay: '5s' }}>
        <JapaneseIcon type="cherry" className="text-pink-200 w-3 h-3" animate={false} />
      </div>
      <div className="sakura-float absolute top-0 left-1/2" style={{ animationDelay: '10s' }}>
        <JapaneseIcon type="cherry" className="text-pink-300 w-5 h-5" animate={false} />
      </div>
      
      <div className="max-w-4xl mx-auto relative">
        <Card className="bg-white/80 backdrop-blur-lg border-sky-200 shadow-2xl card-3d zen-ripple subtle-glow">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Brain className="h-12 w-12 text-sky-600 mr-3 float-3d" />
                <div className="absolute -top-2 -right-2">
                  <JapaneseIcon type="zen" className="text-orange-400 w-6 h-6" />
                </div>
              </div>
              <h1 className="text-4xl font-light text-slate-800 tracking-wide slide-3d-enter">
                Welcome to VOYCE
              </h1>
              <div className="ml-3">
                <JapaneseIcon type="torii" className="text-sky-500" />
              </div>
            </div>
            
            <div className="min-h-[60px] flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2 zen-transition">
                <Sparkles className="h-5 w-5 text-orange-400 float-3d" />
                <JapaneseIcon type="wave" className="text-sky-400 w-4 h-4" />
                <p className="text-lg text-slate-600 font-light italic transition-all duration-1000 zen-transition">
                  {welcomeMessages[currentMessage]}
                </p>
                <JapaneseIcon type="mountain" className="text-orange-400 w-4 h-4" />
                <Sparkles className="h-5 w-5 text-orange-400 float-3d" />
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <JapaneseIcon type="bamboo" className="text-sky-500 w-6 h-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                Your journey towards mental wellness starts here. Access resources, connect with support, 
                and discover tools designed specifically for rural communities in Telangana.
              </p>
              <JapaneseIcon type="crane" className="text-orange-400 w-6 h-6" />
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <JapaneseIcon type="lotus" className="text-sky-400" />
              <Button 
                asChild 
                className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-8 py-3 rounded-full transition-all duration-300 haptic-btn shadow-lg border border-orange-200"
              >
                <a href="/dashboard">Begin Your Journey</a>
              </Button>
              <JapaneseIcon type="cherry" className="text-orange-400" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
