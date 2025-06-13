
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ComprehensiveContent from "@/components/ComprehensiveContent";
import ShareStoryButton from "@/components/ShareStoryButton";

const cdsResources = [
  {
    type: 'research' as const,
    title: 'Cognitive Disengagement Syndrome: A New Understanding',
    description: 'Latest research on CDS (formerly SCT) and its distinct characteristics from ADHD.',
    url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8567890/',
    author: 'Russell A. Barkley',
    year: '2023',
    source: 'Clinical Psychology Review',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop'
  },
  {
    type: 'article' as const,
    title: 'CDS vs ADHD: Understanding the Differences',
    description: 'Comprehensive comparison of Cognitive Disengagement Syndrome and ADHD symptoms.',
    url: 'https://www.additudemag.com/sluggish-cognitive-tempo-adhd/',
    author: 'ADDitude Magazine',
    year: '2024',
    source: 'ADDitude',
    imageUrl: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=250&fit=crop'
  }
];

const cdsStatistics = [
  { label: 'Children with CDS symptoms', value: '2-6%', source: 'Journal of Abnormal Child Psychology' },
  { label: 'CDS comorbid with ADHD', value: '30-50%', source: 'Clinical Psychology Review' },
  { label: 'More common in girls', value: '2:1 ratio', source: 'Developmental Psychology' }
];

const cdsKeyFacts = [
  'CDS is characterized by daydreaming, mental fogginess, and slow processing speed',
  'Unlike ADHD, CDS involves underactivity rather than hyperactivity',
  'CDS may require different treatment approaches than traditional ADHD interventions',
  'Symptoms often include staring, appearing "spacey," and slow task completion',
  'Research is ongoing to establish CDS as a distinct neurodevelopmental condition'
];

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

        <ComprehensiveContent 
          topic="CDS"
          resources={cdsResources}
          statistics={cdsStatistics}
          keyFacts={cdsKeyFacts}
        />

        <ShareStoryButton />
      </div>

      <Footer />
    </div>
  );
}
