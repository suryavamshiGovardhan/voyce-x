
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Brain, Heart } from "lucide-react";
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
    const buttons = sectionRef.current?.querySelectorAll('button, a');
    buttons?.forEach((button) => {
      button.addEventListener('click', () => hapticFeedback.onClick());
      button.addEventListener('mouseenter', () => hapticFeedback.onHover());
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50"
    >
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/90 backdrop-blur-lg border-blue-200 shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Brain className="h-12 w-12 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold text-slate-800">
                Welcome to VOYCE
              </h1>
              <Heart className="ml-3 h-12 w-12 text-green-500" />
            </div>
            
            <div className="min-h-[60px] flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-orange-400" />
                <p className="text-lg text-slate-600 font-light italic transition-all duration-1000">
                  {welcomeMessages[currentMessage]}
                </p>
                <Sparkles className="h-5 w-5 text-orange-400" />
              </div>
            </div>
            
            <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
              Your journey towards mental wellness starts here. Access resources, connect with support, 
              and discover tools designed for comprehensive mental health understanding.
            </p>
            
            <Button 
              asChild 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 text-lg shadow-lg"
            >
              <a href="/dashboard">Begin Your Journey</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
