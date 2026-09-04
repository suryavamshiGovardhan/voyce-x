
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImmersionTools from "@/components/ImmersionTools";
import { ArrowLeft, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import JapaneseIcon from "@/components/JapaneseIcon";
import { hapticFeedback } from "@/utils/hapticFeedback";
import { useEffect, useRef } from "react";
import { SEOHead } from "@/components/SEOHead";

export default function ToolsPage() {
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
        title="Mental Health Tools"
        description="Practical mental health tools including breathing exercises, meditation guides, mood trackers, and mindfulness resources for daily emotional wellbeing."
        keywords="mental health tools, meditation, breathing exercises, mood tracking, mindfulness resources, VOYCE tools"
      />
      <div className="min-h-screen flex flex-col bg-background" ref={sectionRef}>
        <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 slide-3d-enter">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-8">
              <Button asChild variant="ghost" className="text-foreground hover:bg-card haptic-btn">
                <Link to="/">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
            
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Zap className="h-16 w-16 text-primary mr-4 float-3d" />
                <h1 className="text-5xl font-light text-foreground tracking-wide">
                  Immersion Tools
                </h1>
                <Brain className="h-16 w-16 text-sky-400 ml-4 float-3d" />
              </div>
              
              <div className="flex items-center justify-center space-x-4 mb-6">
                <JapaneseIcon type="zen" className="text-sky-400" />
                <h2 className="text-2xl font-light text-primary italic">
                  Transform Through Practice
                </h2>
                <JapaneseIcon type="wave" className="text-primary" />
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Interactive tools designed to deepen your understanding and accelerate your transformation. 
                From guided meditations to neural simulations, each tool is crafted to dissolve illusion and build awareness.
              </p>
            </div>
            
            <div className="card-3d">
              <ImmersionTools />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
}
