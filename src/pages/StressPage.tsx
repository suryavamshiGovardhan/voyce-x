
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ComprehensiveContent from "@/components/ComprehensiveContent";
import ShareStoryButton from "@/components/ShareStoryButton";
import { stressResources, topicStatistics, topicKeyFacts } from "@/data/mentalHealthResources";

export default function StressPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900">
      <Navbar />
      <Enh
ancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6">
            Understanding <span className="text-orange-400">Stress</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From ancient survival mechanisms to modern overwhelm — explore the complete science of stress, 
            its impact on your mind and body, and evidence-based pathways to resilience.
          </p>
        </div>

        {/* Comprehensive Content */}
        <ComprehensiveContent 
          topic="Stress"
          resources={stressResources}
          statistics={topicStatistics.stress}
          keyFacts={topicKeyFacts.stress}
        />

        {/* Share Story Button */}
        <ShareStoryButton />
      </div>

      <Footer />
    </div>
  );
}
