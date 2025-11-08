
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LearningPath from "@/components/LearningPath";
import { ArrowLeft, Brain, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import JapaneseIcon from "@/components/JapaneseIcon";
import { hapticFeedback } from "@/utils/hapticFeedback";
import { useEffect, useRef } from "react";
import { SEOHead } from "@/components/SEOHead";

export default function PathPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const buttons = sectionRef.current?.querySelectorAll('button, a');
    buttons?.forEach((button) => {
      button.addEventListener('click', () => hapticFeedback.onClick());
      button.addEventListener('mouseenter', () => hapticFeedback.onHover());
    });
  }, []);

  return (
    <>
      <SEOHead 
        title="Your Learning Path"
        description="Personalized mental health learning journey. Track your progress through mindfulness, psychology, and emotional wellbeing modules tailored to your needs."
        keywords="mental health journey, personalized learning, mindfulness path, psychology education, VOYCE path"
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 japanese-pattern" ref={sectionRef}>
        <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 slide-3d-enter">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-8">
              <Button asChild variant="ghost" className="text-white hover:bg-white/10 haptic-btn">
                <Link to="/">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
            
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Brain className="h-16 w-16 text-sky-400 mr-4 float-3d" />
                <h1 className="text-5xl font-light text-white tracking-wide">
                  The Path
                </h1>
                <Eye className="h-16 w-16 text-orange-400 ml-4 float-3d" />
              </div>
              
              <div className="flex items-center justify-center space-x-4 mb-6">
                <JapaneseIcon type="torii" className="text-sky-400" />
                <h2 className="text-2xl font-light text-orange-200 italic">
                  Stages of Awakening
                </h2>
                <JapaneseIcon type="lotus" className="text-orange-400" />
              </div>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
                A progressive journey from nursery-level understanding to PhD-depth mastery. 
                Each stage builds upon the last, guiding you through the dissolution of ego and the architecture of consciousness.
              </p>
            </div>
            
            <div className="card-3d">
              <LearningPath />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
}
