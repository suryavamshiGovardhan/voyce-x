
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ComprehensiveContent from "@/components/ComprehensiveContent";
import ShareStoryButton from "@/components/ShareStoryButton";
import { neuroscienceResources } from "@/data/mentalHealthResources";

const neuroscienceStatistics = [
  { label: 'Neuroscience Papers Published Annually', value: '50,000+', source: 'PubMed' },
  { label: 'Brain Imaging Studies Growth', value: '300%', source: 'Nature Neuroscience' },
  { label: 'Neuroscience Research Funding', value: '$7.6B', source: 'NIH' }
];

const neuroscienceKeyFacts = [
  'Modern neuroscience began in the 1950s with the development of brain imaging technologies',
  'fMRI can measure brain activity in real-time by detecting blood flow changes',
  'Optogenetics allows scientists to control neurons with light, revolutionizing research',
  'Brain organoids grown in labs help researchers study neurological diseases',
  'AI and machine learning are accelerating neuroscience discoveries',
  'The Human Connectome Project mapped the brain\'s neural connections'
];

export default function NeurosciencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6">
            <span className="text-cyan-400">Neuroscience</span> Timeline
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Journey through the history and cutting-edge advances in neuroscience — 
            from early brain studies to modern AI-powered discoveries about consciousness.
          </p>
        </div>

        <ComprehensiveContent 
          topic="Neuroscience"
          resources={neuroscienceResources}
          statistics={neuroscienceStatistics}
          keyFacts={neuroscienceKeyFacts}
        />

        <ShareStoryButton />
      </div>

      <Footer />
    </div>
  );
}
