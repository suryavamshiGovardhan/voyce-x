import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ShareStoryButton from "@/components/ShareStoryButton";
import StressContent from "@/components/content/StressContent";
import { ModuleTracker } from "@/components/engagement/ModuleTracker";
import { SEOHead } from "@/components/SEOHead";

export default function StressPage() {
  return (
    <>
      <SEOHead
        title="Stress Management - VOYCE"
        description="Master the science of stress and develop powerful tools for resilience"
        keywords="stress management, stress relief, mental health, resilience"
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <EnhancedMusicPlayer />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-normal tracking-tight text-foreground mb-6">
              <span className="text-primary">Stress</span> Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Master the science of stress — understanding your body's response system 
              and developing powerful tools for resilience and optimal well-being.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-2xl">
            <StressContent />
            <ModuleTracker 
              moduleId="understanding-stress"
              moduleTitle="Understanding Stress"
            />
          </div>

          <ShareStoryButton />
        </div>

        <Footer />
      </div>
    </>
  );
}
