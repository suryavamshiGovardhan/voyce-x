
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ComprehensiveContent from "@/components/ComprehensiveContent";
import ShareStoryButton from "@/components/ShareStoryButton";
import { adhdResources, topicStatistics, topicKeyFacts } from "@/data/mentalHealthResources";

export default function ADHDPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6">
            Understanding <span className="text-blue-400">ADHD</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive resources on Attention Deficit Hyperactivity Disorder — 
            from neuroscience to management strategies and celebrating neurodivergent strengths.
          </p>
        </div>

        <ComprehensiveContent 
          topic="ADHD"
          resources={adhdResources}
          statistics={topicStatistics.adhd}
          keyFacts={topicKeyFacts.adhd}
        />

        <ShareStoryButton />
      </div>

      <Footer />
    </div>
  );
}
