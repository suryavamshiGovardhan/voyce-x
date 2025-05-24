
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Brain } from "lucide-react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % welcomeMessages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-amber-50"></div>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '20px 20px'
      }}></div>
      
      <div className="max-w-4xl mx-auto relative">
        <Card className="bg-white/70 backdrop-blur-sm border-stone-200 shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Brain className="h-12 w-12 text-indigo-600 mr-3" />
              <h1 className="text-4xl font-light text-slate-800 tracking-wide">
                Welcome to VOYCE
              </h1>
            </div>
            
            <div className="min-h-[60px] flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-amber-500" />
                <p className="text-lg text-slate-600 font-light italic transition-all duration-1000">
                  {welcomeMessages[currentMessage]}
                </p>
                <Sparkles className="h-5 w-5 text-amber-500" />
              </div>
            </div>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              Your journey towards mental wellness starts here. Access resources, connect with support, 
              and discover tools designed specifically for rural communities in Telangana.
            </p>
            
            <Button 
              asChild 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <a href="/dashboard">Begin Your Journey</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
