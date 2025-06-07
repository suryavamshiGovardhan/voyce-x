
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import LearningPath from "@/components/LearningPath";
import ImmersionTools from "@/components/ImmersionTools";
import LibraryPreview from "@/components/LibraryPreview";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Eye, Heart, Zap } from "lucide-react";
import JapaneseIcon from "@/components/JapaneseIcon";
import { hapticFeedback } from "@/utils/hapticFeedback";
import { useEffect, useRef } from "react";

export default function Index() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add haptic feedback to interactive elements
    const buttons = sectionRef.current?.querySelectorAll('button, a');
    buttons?.forEach((button) => {
      button.addEventListener('click', () => hapticFeedback.onClick());
      button.addEventListener('mouseenter', () => hapticFeedback.onHover());
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 japanese-pattern" ref={sectionRef}>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Core Pillars Navigation */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 via-slate-700 to-orange-800 slide-3d-enter">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-light text-white text-center mb-12 tracking-wide float-3d">Core Pillars of Awakening</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { title: "Ego", icon: "zen", color: "sky" },
                { title: "Emotions", icon: "wave", color: "orange" },
                { title: "Mind", icon: "mountain", color: "sky" },
                { title: "Brain", icon: "bamboo", color: "orange" },
                { title: "Trauma", icon: "crane", color: "sky" },
                { title: "Awareness", icon: "lotus", color: "orange" }
              ].map((pillar, index) => (
                <Card key={pillar.title} className="bg-black/30 backdrop-blur-sm hover:bg-black/50 zen-transition border-orange-300/30 hover:border-sky-300/50 card-3d haptic-btn">
                  <CardContent className="pt-6 pb-4">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <JapaneseIcon type={pillar.icon as any} className={`text-${pillar.color}-400 w-8 h-8`} />
                      <h3 className="text-lg font-medium text-white">{pillar.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path Preview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 slide-3d-enter">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-light text-white tracking-wide float-3d">The Path - Stages of Awakening</h2>
              <Button asChild variant="outline" className="border-sky-300 hover:bg-sky-50/10 text-white haptic-btn">
                <a href="/path">View Full Journey</a>
              </Button>
            </div>
            <div className="card-3d">
              <LearningPath />
            </div>
          </div>
        </section>

        {/* Immersion Tools */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 via-slate-700 to-orange-800 slide-3d-enter">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-light text-white tracking-wide float-3d">Immersion Tools</h2>
              <Button asChild variant="outline" className="border-orange-300 hover:bg-orange-50/10 text-white haptic-btn">
                <a href="/tools">Explore Tools</a>
              </Button>
            </div>
            <div className="card-3d">
              <ImmersionTools />
            </div>
          </div>
        </section>

        {/* Library Preview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 slide-3d-enter">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-light text-white tracking-wide float-3d">The Archive - Wisdom Library</h2>
              <Button asChild variant="outline" className="border-sky-300 hover:bg-sky-50/10 text-white haptic-btn">
                <a href="/library">Enter Library</a>
              </Button>
            </div>
            <div className="card-3d">
              <LibraryPreview />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
