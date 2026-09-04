
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ShareStoryButton from "@/components/ShareStoryButton";
import ADHDContent from "@/components/content/ADHDContent";
import { MandalaPattern, LotusAccent } from "@/components/CulturalPatterns";
import { SEOHead } from "@/components/SEOHead";

export default function ADHDPage() {
  return (
    <>
      <SEOHead 
        title="ADHD Support & Management"
        description="Harness neurodiversity and transform ADHD into your superpower. Learn evidence-based strategies for focus, organization, and celebrating unique cognitive strengths."
        keywords="ADHD support, attention deficit, focus strategies, neurodiversity, ADHD management, executive function, VOYCE"
      />
      <div className="min-h-screen bg-background">
        {/* Subtle Indian/Vedic cultural overlay for ADHD focus themes */}
        <div className="absolute inset-0 pointer-events-none z-0">
        <MandalaPattern className="absolute top-10 right-10 w-64 h-64 animate-mandala-spin" />
        <LotusAccent className="absolute bottom-20 left-10 w-32 h-20 animate-lotus-bloom" />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <EnhancedMusicPlayer />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-normal tracking-tight text-foreground mb-6 font-indian">
              <span className="text-primary">ADHD</span> Mastery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Harness the gift of neurodiversity — transforming scattered attention into focused brilliance 
              through mindful awareness, strategic systems, and celebration of unique cognitive strengths.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-2xl">
            <ADHDContent />
          </div>

          <ShareStoryButton />
        </div>

        <Footer />
      </div>
    </div>
    </>
  );
}
