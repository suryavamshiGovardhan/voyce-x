
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ComprehensiveContent from "@/components/ComprehensiveContent";
import ShareStoryButton from "@/components/ShareStoryButton";

const acesResources = [
  {
    type: 'research' as const,
    title: 'Adverse Childhood Experiences and Adult Health',
    description: 'Landmark study on the relationship between childhood trauma and adult health outcomes.',
    url: 'https://www.cdc.gov/violenceprevention/aces/index.html',
    author: 'CDC',
    year: '2024',
    source: 'Centers for Disease Control',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop'
  },
  {
    type: 'book' as const,
    title: 'Childhood Disrupted',
    description: 'How your biography becomes your biology, and how you can heal.',
    url: 'https://www.amazon.com/Childhood-Disrupted-Biography-Becomes-Biology/dp/1476748365',
    author: 'Donna Jackson Nakazawa',
    year: '2015',
    rating: 4.6,
    source: 'Amazon',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
  }
];

const acesStatistics = [
  { label: 'Adults with 1+ ACEs', value: '61%', source: 'CDC' },
  { label: 'Adults with 4+ ACEs', value: '16%', source: 'CDC' },
  { label: 'Increased Risk of Depression', value: '460%', source: 'ACE Study' }
];

const acesKeyFacts = [
  'ACEs are linked to chronic health problems, mental illness, and substance misuse',
  'Toxic stress from ACEs can affect brain development and immune system',
  'ACEs are preventable through supportive relationships and community programs',
  'Resilience can be built even after experiencing multiple ACEs',
  'Early intervention and trauma-informed care improve outcomes significantly'
];

export default function ACESPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6">
            <span className="text-purple-400">ACEs</span> Impact
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Understanding Adverse Childhood Experiences and their lasting impact on health, 
            behavior, and life outcomes — plus pathways to healing and resilience.
          </p>
        </div>

        <ComprehensiveContent 
          topic="ACEs"
          resources={acesResources}
          statistics={acesStatistics}
          keyFacts={acesKeyFacts}
        />

        <ShareStoryButton />
      </div>

      <Footer />
    </div>
  );
}
