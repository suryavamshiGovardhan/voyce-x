
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ComprehensiveContent from "@/components/ComprehensiveContent";
import ShareStoryButton from "@/components/ShareStoryButton";
import MindHeartGutContent from "@/components/content/MindHeartGutContent";
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-normal tracking-tight text-foreground mb-6">
            <span className="text-primary">Mind-Heart-Gut</span> Connection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore the profound interconnection between your mind, heart, and gut — 
            the three intelligence centers that work together for optimal health and wellbeing.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border shadow-2xl mb-12">
          <MindHeartGutContent />
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
