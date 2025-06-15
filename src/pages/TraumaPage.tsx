
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ShareStoryButton from "@/components/ShareStoryButton";
import TraumaContent from "@/components/content/TraumaContent";

export default function TraumaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-orange-900">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6 japanese-heading">
            <span className="text-amber-400">Trauma</span> Recovery
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed japanese-text">
            Transform wounds into wisdom through the sacred alchemy of healing — integrating ancient 
            spiritual traditions with modern trauma-informed approaches for complete restoration.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          <TraumaContent />
        </div>

        <ShareStoryButton />
      </div>

      <Footer />
    </div>
  );
}
