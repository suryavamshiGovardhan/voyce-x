
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ShareStoryButton from "@/components/ShareStoryButton";
import ADHDContent from "@/components/content/ADHDContent";

export default function ADHDPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6 japanese-heading">
            <span className="text-emerald-400">ADHD</span> Mastery
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed japanese-text">
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
  );
}
