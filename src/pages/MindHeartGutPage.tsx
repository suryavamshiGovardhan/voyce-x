
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ComprehensiveContent from "@/components/ComprehensiveContent";
import ShareStoryButton from "@/components/ShareStoryButton";
import { mindHeartGutResources } from "@/data/mentalHealthResources";

const mindHeartGutStatistics = [
  { label: 'Neurons in Gut', value: '500 Million', source: 'Nature Reviews Gastroenterology' },
  { label: 'Serotonin Made in Gut', value: '90%', source: 'Journal of Neurogastroenterology' },
  { label: 'Heart-Brain Connections', value: '40,000', source: 'HeartMath Institute' }
];

const mindHeartGutKeyFacts = [
  'The gut is often called the "second brain" due to its extensive neural network',
  'Heart rhythm patterns affect brain function and emotional processing',
  'Gut microbiota directly influences mood and mental health through the vagus nerve',
  'Stress affects gut permeability, leading to "leaky gut syndrome"',
  'Heart rate variability is a key indicator of stress resilience',
  'Breathing exercises can synchronize heart, brain, and gut functions'
];

export default function MindHeartGutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6">
            <span className="text-teal-400">Mind-Heart-Gut</span> Connection
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore the profound interconnection between your mind, heart, and gut — 
            the three intelligence centers that work together for optimal health and wellbeing.
          </p>
        </div>

        <ComprehensiveContent 
          topic="Mind-Heart-Gut Connection"
          resources={mindHeartGutResources}
          statistics={mindHeartGutStatistics}
          keyFacts={mindHeartGutKeyFacts}
        />

        <ShareStoryButton />
      </div>

      <Footer />
    </div>
  );
}
