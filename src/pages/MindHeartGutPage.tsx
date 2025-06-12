
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";

export default function MindHeartGutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-orange-900">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-light text-slate-100 mb-6">
            <span className="text-emerald-400">Mind</span>
            <span className="text-red-400">–Heart</span>
            <span className="text-orange-400">–Gut</span> Connection
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover the profound interconnectedness of your mind, heart, and gut — 
            three "brains" working in harmony to create your thoughts, emotions, and intuition.
          </p>
        </div>

        {/* Ripple Animation Background */}
        <div className="relative mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-emerald-200/20 shadow-xl rounded-2xl overflow-hidden zen-ripple">
            <CardHeader>
              <CardTitle className="text-3xl text-slate-100 text-center">The Three Intelligence Centers</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Mind/Brain */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-emerald-400 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl animate-pulse-gentle">
                    🧠
                  </div>
                  <h3 className="text-2xl text-emerald-300 mb-4">Mind (Brain)</h3>
                  <p className="text-slate-300 text-sm">
                    100 billion neurons processing thoughts, memories, and conscious awareness.
                  </p>
                </div>

                {/* Heart */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-red-400 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl animate-pulse-gentle" style={{animationDelay: '0.5s'}}>
                    ❤️
                  </div>
                  <h3 className="text-2xl text-red-300 mb-4">Heart (Cardiac)</h3>
                  <p className="text-slate-300 text-sm">
                    40,000 neurons creating emotional intelligence and heart coherence.
                  </p>
                </div>

                {/* Gut */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-orange-400 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl animate-pulse-gentle" style={{animationDelay: '1s'}}>
                    🦋
                  </div>
                  <h3 className="text-2xl text-orange-300 mb-4">Gut (Enteric)</h3>
                  <p className="text-slate-300 text-sm">
                    500 million neurons influencing intuition, mood, and "gut feelings."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vagus Nerve Section */}
        <Card className="bg-white/10 backdrop-blur-lg border-blue-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-slate-100">The Vagus Nerve: Your Body's Superhighway</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl text-blue-300 mb-4">The Wandering Nerve</h4>
                <p className="text-slate-300 mb-4">
                  The vagus nerve is the longest cranial nerve, connecting your brain to your heart, 
                  lungs, and digestive system. It's the primary pathway of the parasympathetic nervous system.
                </p>
                <div className="space-y-3">
                  <div className="bg-blue-100/10 p-3 rounded-lg">
                    <h5 className="text-blue-200 font-medium">High Vagal Tone Benefits</h5>
                    <p className="text-slate-400 text-sm">Better emotional regulation, resilience, and physical health</p>
                  </div>
                  <div className="bg-blue-100/10 p-3 rounded-lg">
                    <h5 className="text-blue-200 font-medium">Vagus Nerve Stimulation</h5>
                    <p className="text-slate-400 text-sm">Deep breathing, cold exposure, meditation, singing, laughter</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                {/* Animated vagus nerve pathway */}
                <div className="h-64 bg-slate-800 rounded-xl p-6 overflow-hidden">
                  <div className="relative h-full">
                    {/* Brain */}
                    <div className="absolute top-0 left-1/2 w-8 h-6 bg-blue-400 rounded-full transform -translate-x-1/2"></div>
                    
                    {/* Pathway line */}
                    <div className="absolute top-6 left-1/2 w-1 h-32 bg-gradient-to-b from-blue-400 to-green-400 transform -translate-x-1/2"></div>
                    
                    {/* Heart */}
                    <div className="absolute top-20 left-1/3 w-6 h-6 bg-red-400 rounded-full animate-pulse"></div>
                    
                    {/* Lungs */}
                    <div className="absolute top-28 right-1/3 w-6 h-6 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    
                    {/* Gut */}
                    <div className="absolute bottom-8 left-1/2 w-8 h-6 bg-orange-400 rounded-lg transform -translate-x-1/2 animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gut-Brain Axis */}
        <Card className="bg-white/10 backdrop-blur-lg border-orange-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-slate-100">The Gut-Brain Axis</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl text-orange-300 mb-4">Your Second Brain</h4>
                <p className="text-slate-300 mb-4">
                  The enteric nervous system in your gut contains more neurons than your spinal cord. 
                  It produces 90% of your body's serotonin and significantly influences mood and cognition.
                </p>
                <div className="space-y-4">
                  <div className="bg-orange-100/10 p-4 rounded-xl">
                    <h5 className="text-orange-200 font-medium mb-2">Microbiome Impact</h5>
                    <p className="text-slate-400 text-sm">
                      Trillions of bacteria in your gut produce neurotransmitters and communicate 
                      directly with your brain via the vagus nerve.
                    </p>
                  </div>
                  <div className="bg-orange-100/10 p-4 rounded-xl">
                    <h5 className="text-orange-200 font-medium mb-2">Gut Feelings</h5>
                    <p className="text-slate-400 text-sm">
                      Intuitive "gut feelings" are real signals from your enteric nervous system 
                      processing environmental and emotional information.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-2xl text-green-300 mb-4">Optimizing Gut Health</h4>
                <div className="space-y-3">
                  {[
                    "Diverse, fiber-rich foods",
                    "Fermented foods (kefir, kimchi)",
                    "Minimize processed foods",
                    "Manage stress levels",
                    "Regular movement",
                    "Adequate sleep",
                    "Mindful eating practices"
                  ].map((tip, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Heart Coherence */}
        <Card className="bg-white/10 backdrop-blur-lg border-red-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-slate-100">Heart Coherence & Emotional Intelligence</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl text-red-300 mb-4">The Heart's Intelligence</h4>
                <p className="text-slate-300 mb-4">
                  Your heart has its own neural network that influences emotions, intuition, 
                  and decision-making. Heart rhythm patterns directly affect brain function.
                </p>
                <div className="bg-red-100/10 p-4 rounded-xl">
                  <h5 className="text-red-200 font-medium mb-2">Heart Rate Variability (HRV)</h5>
                  <p className="text-slate-400 text-sm">
                    Higher HRV indicates better stress resilience, emotional regulation, 
                    and overall health. It's a key marker of autonomic nervous system balance.
                  </p>
                </div>
              </div>
              <div className="relative">
                {/* Heart-beat line animation */}
                <div className="h-32 bg-slate-800 rounded-xl p-4 overflow-hidden">
                  <div className="relative h-full flex items-center">
                    <svg className="w-full h-16" viewBox="0 0 400 100">
                      <path 
                        d="M0,50 Q100,50 100,50 T200,30 T300,70 T400,50"
                        stroke="#ef4444"
                        strokeWidth="2"
                        fill="none"
                        className="animate-pulse"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-center text-slate-400 text-sm mt-4">Coherent Heart Rhythm Pattern</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Thoughts-Emotions-Hormones Cycle */}
        <Card className="bg-white/10 backdrop-blur-lg border-purple-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-slate-100">The Thought-Emotion-Hormone Loop</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <p className="text-slate-300 text-lg">
                Your thoughts create emotions, emotions trigger hormones, and hormones influence your thoughts — 
                creating a powerful feedback loop you can learn to direct.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stage: "Thoughts",
                  icon: "💭",
                  description: "Conscious and unconscious mental patterns",
                  color: "purple"
                },
                {
                  stage: "Emotions", 
                  icon: "🎭",
                  description: "Chemical responses to thoughts and experiences",
                  color: "blue"
                },
                {
                  stage: "Hormones",
                  icon: "⚗️", 
                  description: "Chemical messengers affecting whole-body state",
                  color: "green"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h4 className={`text-2xl text-${item.color}-300 mb-3`}>{item.stage}</h4>
                  <p className="text-slate-300 text-sm">{item.description}</p>
                  {index < 2 && (
                    <div className="hidden md:block absolute right-0 top-1/2 text-slate-400 text-2xl transform translate-x-8 -translate-y-1/2">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Newsletter CTA */}
        <Card className="bg-gradient-to-r from-emerald-500/20 via-red-500/20 to-orange-500/20 backdrop-blur-lg border-emerald-200/30 shadow-xl rounded-2xl text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-light text-slate-100 mb-4">
              🔗 Mind-Body Integration Insights
            </h3>
            <p className="text-slate-300 mb-6">
              Weekly wisdom on connecting your three intelligence centers for optimal health and intuition.
            </p>
            <Button 
              asChild
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl haptic-btn"
            >
              <a href="https://mailchi.mp/7027ec706d26/on-a-purpose" target="_blank" rel="noopener noreferrer">
                Connect Your Intelligence Centers
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
