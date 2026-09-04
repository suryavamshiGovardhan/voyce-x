
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ShareStoryButton from "@/components/ShareStoryButton";
import BrainContent from "@/components/content/BrainContent";
import { SEOHead } from "@/components/SEOHead";

export default function BrainPage() {
  return (
    <>
      <SEOHead 
        title="Brain Function & Neuroscience"
        description="Explore the magnificent architecture of consciousness and unlock your brain's infinite potential through ancient wisdom and cutting-edge neuroscience."
        keywords="brain function, neuroscience, consciousness, neuroplasticity, cognitive science, brain health, VOYCE"
      />
      <div className="min-h-screen bg-background">
        <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-normal tracking-tight text-foreground mb-6 japanese-heading">
            <span className="text-primary">Brain</span> Mastery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed japanese-text">
            Unlock the infinite potential of your mind — exploring the magnificent architecture of consciousness 
            through the convergence of ancient wisdom and cutting-edge neuroscientific discovery.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border shadow-2xl">
          <BrainContent />
        </div>

        <ShareStoryButton />
      </div>

      <Footer />
    </div>
    </>
  );
}
