
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ComprehensiveContent from "@/components/ComprehensiveContent";
import ShareStoryButton from "@/components/ShareStoryButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Users, Phone, Heart, Shield } from "lucide-react";

const traumaResources = [
  {
    type: 'research' as const,
    title: 'The Body Keeps the Score: Brain, Mind, and Body in Healing',
    description: 'Groundbreaking research on how trauma affects the body and revolutionary treatments.',
    url: 'https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748',
    author: 'Bessel van der Kolk',
    year: '2014',
    source: 'Viking Books',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
  },
  {
    type: 'research' as const,
    title: 'Trauma-Informed Care: Understanding and Healing',
    description: 'Comprehensive guide to trauma-informed approaches in healthcare and therapy.',
    url: 'https://www.samhsa.gov/concept-trauma-informed-care',
    author: 'SAMHSA',
    year: '2024',
    source: 'Substance Abuse and Mental Health Services Administration',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop'
  },
  {
    type: 'tool' as const,
    title: 'PTSD Coach Mobile App',
    description: 'Evidence-based tools for managing PTSD symptoms and connecting with support.',
    url: 'https://www.ptsd.va.gov/appvid/mobile/ptsdcoach_app.asp',
    author: 'U.S. Department of Veterans Affairs',
    year: '2024',
    source: 'VA.gov',
    imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-red-900">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6">
            Understanding <span className="text-red-400">Trauma</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            From individual wounds to generational patterns — explore the profound impact of trauma 
            on the mind, body, and spirit, and discover pathways to healing and post-traumatic growth.
          </p>
          
          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" className="border-red-300 hover:bg-red-50/10 text-white">
              <a href="#understanding" className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Understanding Trauma
              </a>
            </Button>
            <Button variant="outline" className="border-red-300 hover:bg-red-50/10 text-white">
              <a href="#healing" className="flex items-center">
                <Heart className="h-4 w-4 mr-2" />
                Healing Approaches
              </a>
            </Button>
            <Button variant="outline" className="border-red-300 hover:bg-red-50/10 text-white">
              <a href="#support" className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Support Resources
              </a>
            </Button>
          </div>
        </div>

        {/* Understanding Trauma Section */}
        <section id="understanding" className="mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-red-200/20 shadow-xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-3xl text-slate-100">What is Trauma?</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-6">
              <p className="text-lg leading-relaxed">
                Trauma results from events that are emotionally disturbing or life-threatening, 
                overwhelming an individual's ability to cope and causing lasting adverse effects 
                on functioning and mental, physical, social, emotional, or spiritual well-being.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-400">Types of Trauma</h3>
                  <ul className="space-y-2">
                    <li><strong>Acute Trauma:</strong> Single incident events</li>
                    <li><strong>Complex Trauma:</strong> Repeated, prolonged exposure</li>
                    <li><strong>Historical Trauma:</strong> Intergenerational transmission</li>
                    <li><strong>Vicarious Trauma:</strong> Secondary exposure through others</li>
                    <li><strong>Collective Trauma:</strong> Community-wide experiences</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-400">Common Responses</h3>
                  <ul className="space-y-2">
                    <li>Intrusive thoughts and memories</li>
                    <li>Avoidance of trauma reminders</li>
                    <li>Negative changes in thinking and mood</li>
                    <li>Alterations in arousal and reactivity</li>
                    <li>Dissociation and emotional numbing</li>
                    <li>Physical symptoms and health issues</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-red-500/20 rounded-lg border border-red-400/30">
                <h4 className="font-semibold text-red-300 mb-2">Important Note</h4>
                <p className="text-sm">
                  Trauma responses are normal reactions to abnormal situations. Healing is possible, 
                  and seeking help is a sign of strength, not weakness.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Healing Approaches Section */}
        <section id="healing" className="mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-red-200/20 shadow-xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-3xl text-slate-100">Evidence-Based Healing Approaches</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-400">Therapy Approaches</h3>
                  <ul className="space-y-2">
                    <li>Trauma-Focused CBT</li>
                    <li>EMDR (Eye Movement Desensitization)</li>
                    <li>Somatic Therapy</li>
                    <li>Narrative Therapy</li>
                    <li>Internal Family Systems</li>
                    <li>Dialectical Behavior Therapy</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-400">Body-Based Healing</h3>
                  <ul className="space-y-2">
                    <li>Yoga and mindful movement</li>
                    <li>Breathwork practices</li>
                    <li>Massage and bodywork</li>
                    <li>Dance/movement therapy</li>
                    <li>Martial arts and tai chi</li>
                    <li>Nature-based therapies</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-400">Creative & Expressive</h3>
                  <ul className="space-y-2">
                    <li>Art therapy</li>
                    <li>Music and sound therapy</li>
                    <li>Writing and journaling</li>
                    <li>Drama therapy</li>
                    <li>Poetry and storytelling</li>
                    <li>Photography therapy</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Support Resources Section */}
        <section id="support" className="mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-red-200/20 shadow-xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-3xl text-slate-100">Support Resources & Crisis Help</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-400">Professional Organizations</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="https://www.istss.org/" target="_blank" rel="noopener noreferrer" 
                         className="flex items-center hover:text-red-300 transition-colors">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        International Society for Traumatic Stress Studies
                      </a>
                    </li>
                    <li>
                      <a href="https://www.nctsn.org/" target="_blank" rel="noopener noreferrer"
                         className="flex items-center hover:text-red-300 transition-colors">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        National Child Traumatic Stress Network
                      </a>
                    </li>
                    <li>
                      <a href="https://www.samhsa.gov/trauma-informed-care" target="_blank" rel="noopener noreferrer"
                         className="flex items-center hover:text-red-300 transition-colors">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        SAMHSA Trauma-Informed Care
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-400">Crisis Support</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-red-500/20 rounded-lg border border-red-400/30">
                      <h4 className="font-semibold text-red-300 mb-2">24/7 Crisis Lines</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>National Suicide Prevention: 988</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>Crisis Text Line: Text HOME to 741741</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>RAINN National Sexual Assault Hotline: 1-800-656-4673</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>Tele MANAS (India): 14416</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-red-400 mb-4">Support Communities & Apps</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-slate-800/50 border-red-300/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-slate-200">PTSD Coach</h4>
                      <p className="text-sm text-slate-400">VA-developed app for PTSD management</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/50 border-red-300/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-slate-200">Trauma Recovery Network</h4>
                      <p className="text-sm text-slate-400">Online support communities</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/50 border-red-300/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-slate-200">Mindfulness for Trauma</h4>
                      <p className="text-sm text-slate-400">Specialized meditation practices</p>
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
