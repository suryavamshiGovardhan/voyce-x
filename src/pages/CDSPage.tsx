
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ShareStoryButton from "@/components/ShareStoryButton";
import CDSContent from "@/components/content/CDSContent";

export default function CDSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6">
            <span className="text-indigo-400">CDS</span> Research
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Exploring Cognitive Disengagement Syndrome — a newly recognized condition 
            distinct from ADHD, characterized by daydreaming and mental fogginess.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          <CDSContent />
        </div>

        <ShareStoryButton />
      </div>

      <Footer />
    </div>
  );
}
