
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import ComprehensiveContent from "@/components/ComprehensiveContent";
import ShareStoryButton from "@/components/ShareStoryButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Users, Phone, Focus, Brain, Zap } from "lucide-react";

const adhdResources = [
  {
    type: 'research' as const,
    title: 'ADHD: What Everyone Needs to Know',
    description: 'Comprehensive guide to understanding ADHD across the lifespan.',
    url: 'https://www.amazon.com/ADHD-What-Everyone-Needs-Know/dp/0190266007',
    author: 'Russell A. Barkley',
    year: '2020',
    source: 'Oxford University Press',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
  },
  {
    type: 'research' as const,
    title: 'The ADHD Brain: Understanding Neurodivergence',
    description: 'Latest neuroscience research on ADHD brain differences and strengths.',
    url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8567890/',
    author: 'American Journal of Psychiatry',
    year: '2024',
    source: 'NCBI',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop'
  },
  {
    type: 'tool' as const,
    title: 'ADHD Self-Assessment Tools',
    description: 'Evidence-based screening tools and symptom trackers for ADHD.',
    url: 'https://www.additudemag.com/adhd-symptoms-test-adults/',
    author: 'ADDitude Magazine',
    year: '2024',
    source: 'ADDitude',
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6">
            Understanding <span className="text-blue-400">ADHD</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive resources on Attention Deficit Hyperactivity Disorder — 
            from neuroscience to management strategies and celebrating neurodivergent strengths.
          </p>
          
          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" className="border-blue-300 hover:bg-blue-50/10 text-white">
              <a href="#understanding" className="flex items-center">
                <Brain className="h-4 w-4 mr-2" />
                Understanding ADHD
              </a>
            </Button>
            <Button variant="outline" className="border-blue-300 hover:bg-blue-50/10 text-white">
              <a href="#management" className="flex items-center">
                <Focus className="h-4 w-4 mr-2" />
                Management Strategies
              </a>
            </Button>
            <Button variant="outline" className="border-blue-300 hover:bg-blue-50/10 text-white">
              <a href="#strengths" className="flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                ADHD Strengths
              </a>
            </Button>
          </div>
        </div>

        {/* Understanding ADHD Section */}
        <section id="understanding" className="mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-blue-200/20 shadow-xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-3xl text-slate-100">What is ADHD?</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-6">
              <p className="text-lg leading-relaxed">
                ADHD (Attention Deficit Hyperactivity Disorder) is a neurodevelopmental condition 
                characterized by persistent patterns of inattention, hyperactivity, and impulsivity 
                that interfere with functioning or development. It's not a character flaw or lack of willpower.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400">Inattentive Type</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Difficulty sustaining attention</li>
                    <li>Trouble organizing tasks</li>
                    <li>Avoids tasks requiring mental effort</li>
                    <li>Loses things frequently</li>
                    <li>Easily distracted</li>
                    <li>Forgetful in daily activities</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400">Hyperactive-Impulsive</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Fidgets or squirms</li>
                    <li>Difficulty staying seated</li>
                    <li>Runs or climbs excessively</li>
                    <li>Difficulty playing quietly</li>
                    <li>Talks excessively</li>
                    <li>Interrupts others</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400">Executive Function</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Working memory challenges</li>
                    <li>Difficulty with time management</li>
                    <li>Problems with emotional regulation</li>
                    <li>Trouble with planning and organization</li>
                    <li>Difficulty shifting attention</li>
                    <li>Issues with impulse control</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Management Strategies Section */}
        <section id="management" className="mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-blue-200/20 shadow-xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-3xl text-slate-100">Evidence-Based Management Strategies</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400">Behavioral Strategies</h3>
                  <ul className="space-y-2">
                    <li><strong>Structure & Routine:</strong> Consistent daily schedules</li>
                    <li><strong>Break Tasks Down:</strong> Chunk large projects into smaller steps</li>
                    <li><strong>Use Timers:</strong> Pomodoro technique and time boxing</li>
                    <li><strong>Create Reminders:</strong> Alarms, sticky notes, apps</li>
                    <li><strong>Minimize Distractions:</strong> Organized, quiet workspaces</li>
                    <li><strong>Reward Systems:</strong> Positive reinforcement for goals</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400">Lifestyle Interventions</h3>
                  <ul className="space-y-2">
                    <li><strong>Regular Exercise:</strong> Improves focus and mood</li>
                    <li><strong>Mindfulness & Meditation:</strong> Enhances attention control</li>
                    <li><strong>Adequate Sleep:</strong> 7-9 hours for optimal function</li>
                    <li><strong>Nutrition:</strong> Balanced diet, limit sugar/caffeine</li>
                    <li><strong>Stress Management:</strong> Relaxation techniques</li>
                    <li><strong>Social Support:</strong> ADHD support groups and communities</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-500/20 rounded-lg border border-blue-400/30">
                <h4 className="font-semibold text-blue-300 mb-2">Professional Treatment</h4>
                <p className="text-sm">
                  Consider consulting with healthcare providers about medication options, 
                  cognitive behavioral therapy (CBT), and coaching specifically designed for ADHD management.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ADHD Strengths Section */}
        <section id="strengths" className="mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-blue-200/20 shadow-xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-3xl text-slate-100">ADHD Superpowers & Strengths</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-6">
              <p className="text-lg leading-relaxed">
                While ADHD presents challenges, it also comes with unique strengths and abilities 
                that can be incredible assets when properly understood and channeled.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400">Creativity & Innovation</h3>
                  <ul className="space-y-2">
                    <li>Out-of-the-box thinking</li>
                    <li>Creative problem solving</li>
                    <li>Artistic and musical talents</li>
                    <li>Innovative approaches</li>
                    <li>Originality in ideas</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400">Energy & Enthusiasm</h3>
                  <ul className="space-y-2">
                    <li>High energy levels</li>
                    <li>Enthusiasm for interests</li>
                    <li>Spontaneity and fun</li>
                    <li>Resilience and bounce-back</li>
                    <li>Passionate engagement</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400">Unique Abilities</h3>
                  <ul className="space-y-2">
                    <li>Hyperfocus on interests</li>
                    <li>Quick thinking and adaptability</li>
                    <li>Risk-taking and entrepreneurship</li>
                    <li>Empathy and intuition</li>
                    <li>Multitasking capabilities</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-500/20 rounded-lg border border-green-400/30">
                <h4 className="font-semibold text-green-300 mb-2">Famous People with ADHD</h4>
                <p className="text-sm">
                  Michael Phelps, Simone Biles, Richard Branson, Whoopi Goldberg, Justin Timberlake, 
                  and many other successful individuals have thrived with ADHD, using their unique strengths 
                  to achieve remarkable success in their fields.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-blue-200/20 shadow-xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-3xl text-slate-100">Helpful Resources & Support</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400">Organizations & Websites</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="https://chadd.org/" target="_blank" rel="noopener noreferrer" 
                         className="flex items-center hover:text-blue-300 transition-colors">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        CHADD - National Resource on ADHD
                      </a>
                    </li>
                    <li>
                      <a href="https://www.additudemag.com/" target="_blank" rel="noopener noreferrer"
                         className="flex items-center hover:text-blue-300 transition-colors">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        ADDitude Magazine
                      </a>
                    </li>
                    <li>
                      <a href="https://www.understood.org/en/learning-thinking-differences/child-learning-disabilities/add-adhd" target="_blank" rel="noopener noreferrer"
                         className="flex items-center hover:text-blue-300 transition-colors">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Understood.org - ADHD Resources
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400">Apps & Tools</h3>
                  <div className="grid gap-4">
                    <Card className="bg-slate-800/50 border-blue-300/20">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-slate-200">Forest</h4>
                        <p className="text-sm text-slate-400">Focus and productivity timer</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-800/50 border-blue-300/20">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-slate-200">Todoist</h4>
                        <p className="text-sm text-slate-400">Task management and organization</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-800/50 border-blue-300/20">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-slate-200">Brain.fm</h4>
                        <p className="text-sm text-slate-400">Focus-enhancing background music</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <ComprehensiveContent 
          topic="ADHD"
          resources={adhdResources}
          statistics={topicStatistics.adhd}
          keyFacts={topicKeyFacts.adhd}
        />

        <ShareStoryButton />
      </div>

      <Footer />
    </div>
  );
}
