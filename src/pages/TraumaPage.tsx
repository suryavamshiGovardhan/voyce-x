
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ComprehensiveContent from "@/components/ComprehensiveContent";
import ShareStoryButton from "@/components/ShareStoryButton";
import { traumaResources, topicStatistics, topicKeyFacts } from "@/data/mentalHealthResources";

export default function TraumaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-red-900">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6">
            Understanding <span className="text-red-400">Trauma</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From individual wounds to generational patterns — explore the profound impact of trauma 
            on the mind, body, and spirit, and discover pathways to healing and post-traumatic growth.
          </p>
        </div>

        {/* Comprehensive Content */}
        <ComprehensiveContent 
          topic="Trauma"
          resources={traumaResources}
          statistics={topicStatistics.trauma}
          keyFacts={topicKeyFacts.trauma}
        />

        {/* Share Story Button */}
        <ShareStoryButton />
      </div>

      <Footer />
    </div>
  );
}
