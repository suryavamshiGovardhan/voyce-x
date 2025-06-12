
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";

export default function ADHDPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6">
            Understanding <span className="text-blue-400">ADHD</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Attention Deficit Hyperactivity Disorder — exploring the neurodivergent brain, 
            dopamine systems, and strategies for thriving with ADHD in all its forms.
          </p>
        </div>

        {/* Animated Dopamine Molecule */}
        <div className="mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-blue-200/20 shadow-xl rounded-2xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-100 text-center">Dopamine Function in ADHD</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48">
                  {/* Animated dopamine molecule representation */}
                  <div className="absolute inset-0 border-4 border-blue-400 rounded-full animate-spin"></div>
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute top-8 left-8 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 right-8 w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-75"></div>
                  <div className="absolute top-8 right-8 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-150"></div>
                  <div className="absolute bottom-8 left-8 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
              <p className="text-slate-300 text-center">
                ADHD brains have lower baseline dopamine levels, affecting motivation, focus, and executive function.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* ADHD Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-red-200/20 shadow-xl rounded-2xl card-3d">
            <CardHeader>
              <CardTitle className="text-2xl text-red-300">Inattentive Type</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-300">
                Primarily struggles with attention, focus, and organization without hyperactivity.
              </p>
              <div className="bg-red-100/10 p-4 rounded-xl">
                <h4 className="font-medium text-red-200 mb-2">Key Features</h4>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• Difficulty sustaining attention</li>
                  <li>• Frequent daydreaming</li>
                  <li>• Forgetfulness in daily activities</li>
                  <li>• Avoiding tasks requiring focus</li>
                  <li>• Often appears not listening</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-orange-200/20 shadow-xl rounded-2xl card-3d">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-300">Hyperactive-Impulsive</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-300">
                Characterized by high energy, restlessness, and difficulty with impulse control.
              </p>
              <div className="bg-orange-100/10 p-4 rounded-xl">
                <h4 className="font-medium text-orange-200 mb-2">Key Features</h4>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• Fidgeting, restlessness</li>
                  <li>• Difficulty staying seated</li>
                  <li>• Excessive talking</li>
                  <li>• Interrupting others</li>
                  <li>• Acting without thinking</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-purple-200/20 shadow-xl rounded-2xl card-3d">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-300">Combined Type</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-300">
                Presents with significant symptoms from both inattentive and hyperactive categories.
              </p>
              <div className="bg-purple-100/10 p-4 rounded-xl">
                <h4 className="font-medium text-purple-200 mb-2">Characteristics</h4>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• Mixed attention challenges</li>
                  <li>• Variable energy levels</li>
                  <li>• Complex presentation</li>
                  <li>• Most common type</li>
                  <li>• Requires comprehensive approach</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Brain Wiring Diagram */}
        <Card className="bg-white/10 backdrop-blur-lg border-green-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-slate-100">ADHD Brain Networks</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-green-300 font-medium mb-4">Affected Brain Regions</h4>
                <div className="space-y-3">
                  {[
                    { region: "Prefrontal Cortex", function: "Executive function, working memory" },
                    { region: "Anterior Cingulate", function: "Attention control, conflict monitoring" },
                    { region: "Basal Ganglia", function: "Motor control, reward processing" },
                    { region: "Cerebellum", function: "Motor learning, cognitive functions" }
                  ].map((item, index) => (
                    <div key={index} className="bg-green-100/10 p-3 rounded-lg">
                      <h5 className="text-green-200 font-medium">{item.region}</h5>
                      <p className="text-slate-400 text-sm">{item.function}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-blue-300 font-medium mb-4">Neurotransmitter Systems</h4>
                <div className="space-y-3">
                  {[
                    { system: "Dopamine", impact: "Motivation, reward, attention regulation" },
                    { system: "Norepinephrine", impact: "Alertness, arousal, attention" },
                    { system: "GABA", impact: "Inhibitory control, calming effects" },
                    { system: "Acetylcholine", impact: "Learning, memory, attention" }
                  ].map((item, index) => (
                    <div key={index} className="bg-blue-100/10 p-3 rounded-lg">
                      <h5 className="text-blue-200 font-medium">{item.system}</h5>
                      <p className="text-slate-400 text-sm">{item.impact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Myth-Busting Cards */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-100 text-center mb-8">ADHD Myth-Busting</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                myth: "ADHD isn't real, it's just lack of discipline",
                truth: "ADHD is a well-documented neurobiological condition with genetic components and brain imaging differences."
              },
              {
                myth: "Only children have ADHD",
                truth: "ADHD persists into adulthood in 60-70% of cases, often undiagnosed until later in life."
              },
              {
                myth: "ADHD medication turns children into zombies",
                truth: "Proper medication helps restore normal brain function and can improve quality of life significantly."
              },
              {
                myth: "People with ADHD can't focus on anything",
                truth: "ADHD involves inconsistent attention - hyperfocus on interesting tasks is common."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-yellow-200/20 shadow-xl rounded-2xl">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h4 className="text-red-300 font-medium mb-2">❌ Myth:</h4>
                    <p className="text-slate-300 text-sm italic">"{item.myth}"</p>
                  </div>
                  <div>
                    <h4 className="text-green-300 font-medium mb-2">✅ Truth:</h4>
                    <p className="text-slate-300 text-sm">{item.truth}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coping Tools Accordion */}
        <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-slate-100">ADHD Management Strategies</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="lifestyle" className="border-slate-700">
                <AccordionTrigger className="text-slate-200 hover:text-blue-300">
                  Lifestyle & Environmental Strategies
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-blue-300 font-medium mb-3">Organization Systems</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Use visual reminders and calendars</li>
                        <li>• Break large tasks into smaller steps</li>
                        <li>• Create consistent daily routines</li>
                        <li>• Minimize distractions in workspace</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-blue-300 font-medium mb-3">Self-Care Essentials</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Regular exercise (especially cardio)</li>
                        <li>• Consistent sleep schedule</li>
                        <li>• Mindfulness and meditation</li>
                        <li>• Protein-rich breakfast</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cognitive" className="border-slate-700">
                <AccordionTrigger className="text-slate-200 hover:text-green-300">
                  Cognitive & Behavioral Techniques
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 space-y-4">
                  <div className="space-y-4">
                    <div className="bg-green-100/10 p-4 rounded-xl">
                      <h4 className="text-green-300 font-medium mb-2">Body Doubling</h4>
                      <p className="text-sm">Working alongside others to increase focus and accountability</p>
                    </div>
                    <div className="bg-green-100/10 p-4 rounded-xl">
                      <h4 className="text-green-300 font-medium mb-2">Pomodoro Technique</h4>
                      <p className="text-sm">25-minute focused work sessions with short breaks</p>
                    </div>
                    <div className="bg-green-100/10 p-4 rounded-xl">
                      <h4 className="text-green-300 font-medium mb-2">External Motivation</h4>
                      <p className="text-sm">Using rewards, deadlines, and accountability partners</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Newsletter CTA */}
        <Card className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg border-blue-200/30 shadow-xl rounded-2xl text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-light text-slate-100 mb-4">
              🧠 ADHD Insights & Support
            </h3>
            <p className="text-slate-300 mb-6">
              Weekly strategies, research updates, and community support for thriving with ADHD.
            </p>
            <Button 
              asChild
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl haptic-btn"
            >
              <a href="https://mailchi.mp/7027ec706d26/on-a-purpose" target="_blank" rel="noopener noreferrer">
                Join the ADHD Community
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
