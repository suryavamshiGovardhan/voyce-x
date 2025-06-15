
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ShareStoryButton from "@/components/ShareStoryButton";
import TraumaContent from "@/components/content/TraumaContent";
import { CherryBlossomAccent, PagodaAccent } from "@/components/CulturalPatterns";

export default function TraumaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-orange-900 relative overflow-hidden">
      {/* Japanese/East Asian cultural overlay for healing themes */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-60">
        <CherryBlossomAccent className="absolute top-20 right-20 w-32 h-32 animate-cherry-bloom" />
        <PagodaAccent className="absolute bottom-32 left-16 w-24 h-12 animate-pagoda-rise" />
        <CherryBlossomAccent className="absolute top-1/2 left-1/4 w-24 h-24 animate-cherry-bloom delay-1000" />
        <PagodaAccent className="absolute top-1/3 right-1/3 w-20 h-10 animate-pagoda-rise delay-2000" />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <EnhancedMusicPlayer />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6 font-eastasia">
              <span className="text-eastasia-cherry">Trauma</span> Recovery
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-zen">
              心の癒し - Transform wounds into wisdom through the sacred alchemy of healing, integrating 
              ancient Japanese principles of resilience with modern trauma-informed approaches for complete restoration.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-eastasia-cherry/20 shadow-2xl">
            <TraumaContent />
          </div>

          <ShareStoryButton />
        </div>

        <Footer />
      </div>
    </div>
  );
}
