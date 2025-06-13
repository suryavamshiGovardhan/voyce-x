
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ComprehensiveContent from "@/components/ComprehensiveContent";
import ShareStoryButton from "@/components/ShareStoryButton";
import { brainResources } from "@/data/mentalHealthResources";

const brainStatistics = [
  { label: 'Neurons in Human Brain', value: '86 Billion', source: 'Nature Neuroscience' },
  { label: 'Brain Energy Usage', value: '20%', source: 'Scientific American' },
  { label: 'New Neurons Daily', value: '700', source: 'Cell Stem Cell' }
];

const brainKeyFacts = [
  'The brain continues developing until age 25, with the prefrontal cortex last to mature',
  'Neuroplasticity allows the brain to reorganize and form new connections throughout life',
  'Sleep is crucial for brain detoxification and memory consolidation',
  'Physical exercise increases BDNF, promoting new neuron growth',
  'Meditation can increase gray matter density in areas linked to learning and memory',
  'The brain uses about 20% of the body\'s total energy despite being only 2% of body weight'
];

export default function BrainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-green-900">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6">
            <span className="text-green-400">Brain</span> Function
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover the incredible complexity and adaptability of the human brain — 
            from neurons to networks, and how understanding your brain can transform your life.
          </p>
        </div>

        <ComprehensiveContent 
          topic="Brain Function"
          resources={brainResources}
          statistics={brainStatistics}
          keyFacts={brainKeyFacts}
        />

        <ShareStoryButton />
      </div>

      <Footer />
    </div>
  );
}
