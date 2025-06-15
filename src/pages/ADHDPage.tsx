
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ShareStoryButton from "@/components/ShareStoryButton";
import ADHDContent from "@/components/content/ADHDContent";
import { MandalaPattern, LotusAccent } from "@/components/CulturalPatterns";

export default function ADHDPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden">
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
            <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6 font-indian">
              <span className="text-indian-saffron">ADHD</span> Mastery
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Harness the gift of neurodiversity — transforming scattered attention into focused brilliance 
              through mindful awareness, strategic systems, and celebration of unique cognitive strengths.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
            <ADHDContent />
          </div>

          <ShareStoryButton />
        </div>

        <Footer />
      </div>
    </div>
  );
}
