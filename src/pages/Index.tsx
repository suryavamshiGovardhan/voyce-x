
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
  const sectionRef = useRef<HTMLElement>(null);

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
        {/* Hero Section - "Where the Mind Meets the Mirror" */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden slide-3d-enter">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-orange-900/90"></div>
          
          {/* Floating Japanese Icons */}
          <div className="absolute top-10 left-10 opacity-20">
            <JapaneseIcon type="zen" className="text-sky-300" />
          </div>
          <div className="absolute top-20 right-20 opacity-20">
            <JapaneseIcon type="lotus" className="text-orange-300" />
          </div>
          <div className="absolute bottom-20 left-20 opacity-20">
            <JapaneseIcon type="crane" className="text-sky-400" />
          </div>
          
          <div className="max-w-6xl mx-auto relative text-center">
            <Card className="bg-black/40 backdrop-blur-lg border-orange-300/30 shadow-2xl card-3d zen-ripple subtle-glow">
              <CardContent className="p-12">
                <div className="flex items-center justify-center mb-8">
                  <Brain className="h-16 w-16 text-sky-400 mr-4 float-3d" />
                  <h1 className="text-6xl font-light text-white tracking-wide slide-3d-enter">
                    Kill The Ego Academy
                  </h1>
                  <Eye className="h-16 w-16 text-orange-400 ml-4 float-3d" />
                </div>
                
                <h2 className="text-3xl font-light text-orange-200 mb-8 italic">
                  "Where the Mind Meets the Mirror"
                </h2>
                
                <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  A progressive journey from nursery-level self-awareness to PhD-depth neuroscience. 
                  Transform trauma into wisdom. Dissolve the ego. Architect your mind.
                </p>
                
                <div className="flex items-center justify-center space-x-6 mb-8">
                  <JapaneseIcon type="torii" className="text-sky-400" />
                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-sky-600 to-orange-600 hover:from-sky-700 hover:to-orange-700 text-white px-12 py-4 rounded-full transition-all duration-500 haptic-btn shadow-2xl text-lg border border-orange-300/50"
                  >
                    <a href="/path">Begin The Journey</a>
                  </Button>
                  <JapaneseIcon type="cherry" className="text-orange-400" />
                </div>
                
                <div className="flex justify-center space-x-8 text-sm text-slate-400">
                  <span className="flex items-center"><Heart className="w-4 h-4 mr-2 text-orange-400" />Trauma-Informed</span>
                  <span className="flex items-center"><Brain className="w-4 h-4 mr-2 text-sky-400" />Neuroscience-Based</span>
                  <span className="flex items-center"><Zap className="w-4 h-4 mr-2 text-orange-400" />Ego Dissolution</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

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
