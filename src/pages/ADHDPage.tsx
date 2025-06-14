import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ComprehensiveContent from "@/components/ComprehensiveContent";
import ShareStoryButton from "@/components/ShareStoryButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Users, Phone, Mail, Zap, Star, Brain } from "lucide-react";

const adhdResources = [
  {
    type: 'research' as const,
    title: 'ADHD: A Complete and Authoritative Guide',
    description: 'Comprehensive guide to understanding and managing ADHD across the lifespan.',
    url: 'https://www.amazon.com/ADHD-Complete-Authoritative-Guide/dp/1462542581',
    author: 'Children and Adults with ADHD (CHADD)',
    year: '2020',
    source: 'Guilford Press',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop'
  },
  {
    type: 'website' as const,
    title: 'ADHD Management Tools',
    description: 'Evidence-based tools and strategies for managing ADHD symptoms.',
    url: 'https://chadd.org/',
    author: 'Children and Adults with ADHD',
    year: '2024',
    source: 'CHADD.org',
    imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop'
  }
];

const topicStatistics = {
  adhd: [
    { label: 'Children with ADHD globally', value: '5-7%', source: 'World Health Organization' },
    { label: 'Adults with ADHD', value: '2.5%', source: 'American Psychiatric Association' },
    { label: 'ADHD heritability rate', value: '74%', source: 'Journal of Psychiatric Research' }
  ]
};

const topicKeyFacts = {
  adhd: [
    'ADHD is a neurodevelopmental condition with differences in brain structure and function',
    'Executive function challenges are core features, not just hyperactivity',
    'ADHD symptoms often present differently in girls and women',
    'Many successful entrepreneurs, artists, and innovators have ADHD',
    'Treatment typically includes behavioral interventions, medication, and lifestyle changes',
    'ADHD can be a superpower when properly understood and managed'
  ]
};

export default function ADHDPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-8">
        {/* Simplified Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Understanding <span className="text-orange-600">ADHD</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            ADHD is not a deficit of attention, but rather a difference in how attention is regulated. 
            Discover the neuroscience, strengths, and strategies for thriving with ADHD.
          </p>
          
          {/* Simple Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button variant="outline" className="text-sm">
              <a href="#understanding" className="flex items-center">
                <Brain className="h-4 w-4 mr-2" />
                Understanding
              </a>
            </Button>
            <Button variant="outline" className="text-sm">
              <a href="#management" className="flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                Management
              </a>
            </Button>
            <Button variant="outline" className="text-sm">
              <a href="#strengths" className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                Strengths
              </a>
            </Button>
          </div>
        </div>

        {/* Understanding ADHD Section */}
        <section id="understanding" className="mb-12">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">What is ADHD?</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <p className="text-base leading-relaxed">
                Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental condition 
                characterized by differences in attention regulation, impulse control, and activity levels. 
                It affects how the brain processes information and manages executive functions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-orange-600">Types of ADHD</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Inattentive Type:</strong> Difficulty focusing, organizing, and completing tasks</li>
                    <li><strong>Hyperactive-Impulsive Type:</strong> Restlessness, fidgeting, and impulsive actions</li>
                    <li><strong>Combined Type:</strong> Features of both inattentive and hyperactive-impulsive</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-orange-600">Common Signs</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Difficulty sustaining attention</li>
                    <li>Forgetfulness in daily activities</li>
                    <li>Difficulty organizing tasks</li>
                    <li>Restlessness or fidgeting</li>
                    <li>Impulsive decision-making</li>
                    <li>Time management challenges</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Management Strategies */}
        <section id="management" className="mb-12">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Management Strategies</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-green-600">Behavioral Strategies</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Break tasks into smaller steps</li>
                    <li>Use timers and reminders</li>
                    <li>Create structured routines</li>
                    <li>Minimize distractions</li>
                    <li>Use visual organizers</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-green-600">Lifestyle Support</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Regular exercise and movement</li>
                    <li>Consistent sleep schedule</li>
                    <li>Balanced nutrition</li>
                    <li>Mindfulness and meditation</li>
                    <li>Stress management techniques</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-green-600">Professional Support</h3>
                  <ul className="space-y-2 text-sm">
                    <li>ADHD coaching</li>
                    <li>Cognitive Behavioral Therapy</li>
                    <li>Educational accommodations</li>
                    <li>Medication management</li>
                    <li>Support groups</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ADHD Strengths */}
        <section id="strengths" className="mb-12">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">ADHD Strengths & Superpowers</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <p className="text-base leading-relaxed">
                ADHD comes with unique strengths and abilities that can be incredible assets when properly understood and channeled.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-yellow-600">Cognitive Strengths</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Creativity:</strong> Unique problem-solving and innovative thinking</li>
                    <li><strong>Hyperfocus:</strong> Intense concentration on interesting tasks</li>
                    <li><strong>Out-of-the-box thinking:</strong> Novel approaches and perspectives</li>
                    <li><strong>Rapid idea generation:</strong> Quick brainstorming and connections</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-yellow-600">Personal Strengths</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Energy and enthusiasm:</strong> High levels of passion and drive</li>
                    <li><strong>Adaptability:</strong> Flexibility in changing situations</li>
                    <li><strong>Empathy:</strong> Strong emotional sensitivity and understanding</li>
                    <li><strong>Resilience:</strong> Ability to bounce back from challenges</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-orange-600 mb-4">Professional Resources & Support</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <ul className="space-y-3">
                      <li>
                        <a href="https://chadd.org/" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center text-orange-600 hover:text-orange-800 transition-colors">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Children and Adults with ADHD (CHADD)
                        </a>
                      </li>
                      <li>
                        <a href="https://add.org/" target="_blank" rel="noopener noreferrer"
                           className="flex items-center text-orange-600 hover:text-orange-800 transition-colors">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Attention Deficit Disorder Association
                        </a>
                      </li>
                      <li>
                        <a href="https://www.understood.org/en/learning-thinking-differences/child-learning-disabilities/add-adhd" target="_blank" rel="noopener noreferrer"
                           className="flex items-center text-orange-600 hover:text-orange-800 transition-colors">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Understood.org - ADHD Resources
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-red-600">Crisis Support</h4>
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>Crisis Text Line: Text HOME to 741741</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>National Suicide Prevention Lifeline: 988</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-orange-600 mb-4">Helpful Apps & Tools</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-gray-50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-800">Forest</h4>
                      <p className="text-sm text-gray-600">Focus and productivity timer</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-800">Todoist</h4>
                      <p className="text-sm text-gray-600">Task management and organization</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-800">Brain.fm</h4>
                      <p className="text-sm text-gray-600">Focus-enhancing background music</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Comprehensive Content */}
        <ComprehensiveContent 
          topic="ADHD"
          resources={adhdResources}
          statistics={topicStatistics.adhd}
          keyFacts={topicKeyFacts.adhd}
        />

        {/* Share Story Button */}
        <ShareStoryButton />
      </div>

      <Footer />
    </div>
  );
}
