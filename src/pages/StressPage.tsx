
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ComprehensiveContent from "@/components/ComprehensiveContent";
import ShareStoryButton from "@/components/ShareStoryButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Users, Phone, Mail } from "lucide-react";

const stressResources = [
  {
    type: 'research' as const,
    title: 'The Neuroscience of Stress: From Molecules to Networks',
    description: 'Comprehensive review of stress mechanisms in the human brain and body.',
    url: 'https://www.nature.com/articles/nrn.2015.18',
    author: 'Bruce S. McEwen',
    year: '2024',
    source: 'Nature Reviews Neuroscience',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop'
  },
  {
    type: 'book' as const,
    title: 'Why Zebras Don\'t Get Ulcers',
    description: 'The acclaimed guide to stress, stress-related diseases, and coping mechanisms.',
    url: 'https://www.amazon.com/Why-Zebras-Dont-Ulcers-Third/dp/0805073698',
    author: 'Robert M. Sapolsky',
    year: '2004',
    rating: 4.7,
    source: 'Amazon',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
  },
  {
    type: 'tool' as const,
    title: 'Stress Management Toolkit',
    description: 'Interactive tools for measuring and managing stress levels.',
    url: 'https://www.apa.org/topics/stress',
    author: 'American Psychological Association',
    year: '2024',
    source: 'APA',
    imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop'
  }
];

const topicStatistics = {
  stress: [
    { label: 'Adults experiencing chronic stress', value: '77%', source: 'American Psychological Association' },
    { label: 'Stress-related workplace absence', value: '83%', source: 'Workplace Health & Safety' },
    { label: 'Healthcare costs from stress', value: '$300B', source: 'Harvard Medical School' }
  ]
};

const topicKeyFacts = {
  stress: [
    'Chronic stress can shrink the prefrontal cortex while enlarging the amygdala',
    'The stress hormone cortisol affects memory formation and retrieval',
    'Acute stress can actually improve immune function temporarily',
    'Stress responses evolved to handle physical threats, not modern psychological stressors',
    'Mindfulness meditation can reduce cortisol levels by up to 23%',
    'Social support is one of the most effective stress buffers known'
  ]
};

export default function StressPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6">
            Understanding <span className="text-orange-400">Stress</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            From ancient survival mechanisms to modern overwhelm — explore the complete science of stress, 
            its impact on your mind and body, and evidence-based pathways to resilience.
          </p>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" className="border-orange-300 hover:bg-orange-50/10 text-white">
              <a href="#understanding" className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Understanding Stress
              </a>
            </Button>
            <Button variant="outline" className="border-orange-300 hover:bg-orange-50/10 text-white">
              <a href="#management" className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Management Techniques
              </a>
            </Button>
            <Button variant="outline" className="border-orange-300 hover:bg-orange-50/10 text-white">
              <a href="#resources" className="flex items-center">
                <ExternalLink className="h-4 w-4 mr-2" />
                Resources & Support
              </a>
            </Button>
          </div>
        </div>

        {/* What is Stress Section */}
        <section id="understanding" className="mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-orange-200/20 shadow-xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-3xl text-slate-100">What is Stress?</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-6">
              <p className="text-lg leading-relaxed">
                Stress is your body's natural response to challenges or threats. When you perceive danger, 
                your nervous system releases a flood of stress hormones including adrenaline and cortisol, 
                which prepare your body for emergency action.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-400">Types of Stress</h3>
                  <ul className="space-y-2">
                    <li><strong>Acute Stress:</strong> Short-term stress from immediate challenges</li>
                    <li><strong>Chronic Stress:</strong> Long-term stress from ongoing pressures</li>
                    <li><strong>Eustress:</strong> Positive stress that motivates and energizes</li>
                    <li><strong>Distress:</strong> Negative stress that overwhelms and depletes</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-400">Common Triggers</h3>
                  <ul className="space-y-2">
                    <li>Work pressure and deadlines</li>
                    <li>Financial concerns</li>
                    <li>Relationship conflicts</li>
                    <li>Health issues</li>
                    <li>Major life changes</li>
                    <li>Academic pressure</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Stress Management Techniques */}
        <section id="management" className="mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-orange-200/20 shadow-xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-3xl text-slate-100">Evidence-Based Management Techniques</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-400">Immediate Techniques</h3>
                  <ul className="space-y-2">
                    <li>Deep breathing exercises</li>
                    <li>Progressive muscle relaxation</li>
                    <li>Grounding techniques (5-4-3-2-1)</li>
                    <li>Brief meditation</li>
                    <li>Physical movement</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-400">Long-term Strategies</h3>
                  <ul className="space-y-2">
                    <li>Regular exercise routine</li>
                    <li>Healthy sleep hygiene</li>
                    <li>Balanced nutrition</li>
                    <li>Social support networks</li>
                    <li>Time management skills</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-400">Professional Help</h3>
                  <ul className="space-y-2">
                    <li>Cognitive Behavioral Therapy</li>
                    <li>Mindfulness-Based Stress Reduction</li>
                    <li>Stress management counseling</li>
                    <li>Group therapy sessions</li>
                    <li>Medical evaluation if needed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Resources Section */}
        <section id="resources" className="mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-orange-200/20 shadow-xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-3xl text-slate-100">Helpful Resources & Support</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-400">Organizations & Websites</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="https://www.apa.org/topics/stress" target="_blank" rel="noopener noreferrer" 
                         className="flex items-center hover:text-orange-300 transition-colors">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        American Psychological Association - Stress
                      </a>
                    </li>
                    <li>
                      <a href="https://www.nimh.nih.gov/health/publications/stress" target="_blank" rel="noopener noreferrer"
                         className="flex items-center hover:text-orange-300 transition-colors">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        NIMH - Stress and Mental Health
                      </a>
                    </li>
                    <li>
                      <a href="https://www.helpguide.org/articles/stress/stress-management.htm" target="_blank" rel="noopener noreferrer"
                         className="flex items-center hover:text-orange-300 transition-colors">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        HelpGuide - Stress Management
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-400">Crisis Support</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-red-500/20 rounded-lg border border-red-400/30">
                      <h4 className="font-semibold text-red-300 mb-2">Emergency Help</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>Crisis Helpline: 988</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>Tele MANAS: 14416</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          <span>Text HOME to 741741</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-orange-400 mb-4">Recommended Apps & Tools</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-slate-800/50 border-orange-300/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-slate-200">Headspace</h4>
                      <p className="text-sm text-slate-400">Guided meditation and mindfulness</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/50 border-orange-300/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-slate-200">Calm</h4>
                      <p className="text-sm text-slate-400">Sleep stories and relaxation</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/50 border-orange-300/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-slate-200">Insight Timer</h4>
                      <p className="text-sm text-slate-400">Free meditation community</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

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
