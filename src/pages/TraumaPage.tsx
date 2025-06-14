import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ComprehensiveContent from "@/components/ComprehensiveContent";
import ShareStoryButton from "@/components/ShareStoryButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Users, Phone, Mail, Heart, Shield, Brain } from "lucide-react";

const traumaResources = [
  {
    type: 'research' as const,
    title: 'The Body Keeps the Score: Brain, Mind, and Body in Healing Trauma',
    description: 'Groundbreaking research on how trauma affects the body and revolutionary treatments for recovery.',
    url: 'https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748',
    author: 'Bessel van der Kolk',
    year: '2014',
    source: 'Penguin Books',
    imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop'
  },
  {
    type: 'website' as const,
    title: 'National Center for PTSD',
    description: 'Comprehensive resources for understanding and treating trauma and PTSD.',
    url: 'https://www.ptsd.va.gov/',
    author: 'U.S. Department of Veterans Affairs',
    year: '2024',
    source: 'VA.gov',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop'
  }
];

const topicStatistics = {
  trauma: [
    { label: 'Adults who experience trauma', value: '70%', source: 'National Council for Mental Wellbeing' },
    { label: 'PTSD lifetime prevalence', value: '3.5%', source: 'National Institute of Mental Health' },
    { label: 'Trauma-related healthcare costs', value: '$103B', source: 'CDC Economic Studies' }
  ]
};

const topicKeyFacts = {
  trauma: [
    'Trauma can alter brain structure, particularly the amygdala and hippocampus',
    'Not everyone who experiences trauma develops PTSD or other trauma-related disorders',
    'Early intervention and support can significantly improve trauma recovery outcomes',
    'Trauma affects individuals, families, and entire communities across generations',
    'Post-traumatic growth is possible - many people report positive changes after trauma',
    'Cultural factors play a significant role in how trauma is experienced and processed'
  ]
};

export default function TraumaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-8">
        {/* Simplified Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Understanding <span className="text-purple-600">Trauma</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Trauma is not what happens to you, it's what happens inside you as a result of what happened to you. 
            Explore pathways to healing, growth, and post-traumatic resilience.
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
              <a href="#healing" className="flex items-center">
                <Heart className="h-4 w-4 mr-2" />
                Healing
              </a>
            </Button>
            <Button variant="outline" className="text-sm">
              <a href="#support" className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Support
              </a>
            </Button>
          </div>
        </div>

        {/* Understanding Trauma Section */}
        <section id="understanding" className="mb-12">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">What is Trauma?</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <p className="text-base leading-relaxed">
                Trauma is the response to a deeply distressing or disturbing event that overwhelms an individual's 
                ability to cope, causes feelings of helplessness, diminishes their sense of self and their ability 
                to feel the full range of emotions and experiences.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-purple-600">Types of Trauma</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Acute Trauma:</strong> Single incident events (accidents, natural disasters)</li>
                    <li><strong>Complex Trauma:</strong> Repeated, prolonged traumatic events</li>
                    <li><strong>Historical Trauma:</strong> Trauma experienced by a group across generations</li>
                    <li><strong>Secondary Trauma:</strong> Trauma from witnessing others' traumatic experiences</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-purple-600">Common Responses</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Flashbacks and intrusive memories</li>
                    <li>Avoidance of triggers</li>
                    <li>Hypervigilance and anxiety</li>
                    <li>Emotional numbing</li>
                    <li>Sleep disturbances</li>
                    <li>Difficulty with relationships</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Healing Approaches */}
        <section id="healing" className="mb-12">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Pathways to Healing</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-green-600">Evidence-Based Therapies</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Trauma-Focused CBT</li>
                    <li>EMDR (Eye Movement Desensitization)</li>
                    <li>Somatic Experiencing</li>
                    <li>Internal Family Systems (IFS)</li>
                    <li>Narrative Therapy</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-green-600">Body-Based Approaches</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Yoga and movement therapy</li>
                    <li>Breathwork and meditation</li>
                    <li>Massage and bodywork</li>
                    <li>Dance/movement therapy</li>
                    <li>Martial arts and grounding</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-green-600">Creative Therapies</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Art and expressive therapy</li>
                    <li>Music and sound therapy</li>
                    <li>Writing and journaling</li>
                    <li>Drama and role-play</li>
                    <li>Nature-based therapy</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Support Resources */}
        <section id="support" className="mb-12">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Support Resources</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-purple-600">Professional Resources</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="https://www.ptsd.va.gov/" target="_blank" rel="noopener noreferrer" 
                         className="flex items-center text-purple-600 hover:text-purple-800 transition-colors">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        National Center for PTSD
                      </a>
                    </li>
                    <li>
                      <a href="https://www.traumainformedcare.chcs.org/" target="_blank" rel="noopener noreferrer"
                         className="flex items-center text-purple-600 hover:text-purple-800 transition-colors">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Trauma-Informed Care Resources
                      </a>
                    </li>
                    <li>
                      <a href="https://www.istss.org/" target="_blank" rel="noopener noreferrer"
                         className="flex items-center text-purple-600 hover:text-purple-800 transition-colors">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        International Society for Traumatic Stress
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-red-600">Crisis Support</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">Immediate Help</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>Crisis Text Line: Text HOME to 741741</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>National Suicide Prevention Lifeline: 988</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>RAINN National Sexual Assault Hotline: 1-800-656-4673</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-purple-600 mb-4">Helpful Apps & Tools</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-gray-50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-800">PTSD Coach</h4>
                      <p className="text-sm text-gray-600">Self-help tool for managing PTSD symptoms</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-800">Trauma Recovery Network</h4>
                      <p className="text-sm text-gray-600">Support and resources for trauma survivors</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-800">Mindshift</h4>
                      <p className="text-sm text-gray-600">CBT-based anxiety and trauma support</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

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
