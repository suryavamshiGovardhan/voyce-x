
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";

export default function BrainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6">
            <span className="text-indigo-400">Brain</span> Functionality
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Journey through the most complex structure in the known universe — your brain. 
            Explore regions, networks, neurotransmitters, and the remarkable capacity for change.
          </p>
        </div>

        {/* Interactive Brain Cross-Section */}
        <Card className="bg-white/10 backdrop-blur-lg border-indigo-200/20 shadow-xl rounded-2xl mb-16 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-3xl text-slate-100 text-center">Brain Architecture</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="relative mx-auto w-full max-w-2xl h-64 bg-slate-800 rounded-2xl overflow-hidden">
              {/* Brain regions as interactive hotspots */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
              
              {/* Prefrontal Cortex */}
              <div className="absolute top-8 left-8 w-16 h-12 bg-blue-400 rounded-lg opacity-80 hover:opacity-100 cursor-pointer transition-opacity group">
                <div className="hidden group-hover:block absolute -top-8 left-0 bg-slate-900 text-white text-xs p-2 rounded whitespace-nowrap">
                  Prefrontal Cortex - Executive Function
                </div>
              </div>
              
              {/* Limbic System */}
              <div className="absolute top-1/2 left-1/2 w-12 h-8 bg-red-400 rounded-full opacity-80 hover:opacity-100 cursor-pointer transition-opacity group transform -translate-x-1/2 -translate-y-1/2">
                <div className="hidden group-hover:block absolute -top-8 left-0 bg-slate-900 text-white text-xs p-2 rounded whitespace-nowrap">
                  Limbic System - Emotions
                </div>
              </div>
              
              {/* Brain Stem */}
              <div className="absolute bottom-8 left-1/2 w-8 h-16 bg-green-400 rounded-lg opacity-80 hover:opacity-100 cursor-pointer transition-opacity group transform -translate-x-1/2">
                <div className="hidden group-hover:block absolute -top-8 left-0 bg-slate-900 text-white text-xs p-2 rounded whitespace-nowrap">
                  Brain Stem - Survival Functions
                </div>
              </div>
              
              {/* Cerebellum */}
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-yellow-400 rounded-full opacity-80 hover:opacity-100 cursor-pointer transition-opacity group">
                <div className="hidden group-hover:block absolute -top-8 right-0 bg-slate-900 text-white text-xs p-2 rounded whitespace-nowrap">
                  Cerebellum - Balance & Coordination
                </div>
              </div>
            </div>
            
            <p className="text-slate-300 text-center mt-6">
              Hover over brain regions to explore their functions
            </p>
          </CardContent>
        </Card>

        {/* Brain Regions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              region: "Frontal Lobe",
              color: "blue",
              functions: ["Executive function", "Planning", "Personality", "Motor control"]
            },
            {
              region: "Parietal Lobe", 
              color: "green",
              functions: ["Sensory processing", "Spatial awareness", "Language", "Attention"]
            },
            {
              region: "Temporal Lobe",
              color: "orange", 
              functions: ["Memory", "Language comprehension", "Auditory processing", "Emotion"]
            },
            {
              region: "Occipital Lobe",
              color: "purple",
              functions: ["Visual processing", "Image recognition", "Color perception", "Motion detection"]
            }
          ].map((lobe, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl card-3d">
              <CardHeader>
                <CardTitle className={`text-xl text-${lobe.color}-300`}>{lobe.region}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {lobe.functions.map((func, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-center">
                      <div className={`w-2 h-2 bg-${lobe.color}-400 rounded-full mr-3`}></div>
                      {func}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Neurotransmitters Section */}
        <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-slate-100">Chemical Messengers</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Dopamine", emoji: "🎯", function: "Motivation & Reward", color: "text-blue-300" },
                { name: "Serotonin", emoji: "😌", function: "Mood & Sleep", color: "text-green-300" },
                { name: "GABA", emoji: "🧘", function: "Calm & Relaxation", color: "text-purple-300" },
                { name: "Norepinephrine", emoji: "⚡", function: "Alertness & Focus", color: "text-orange-300" }
              ].map((nt, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-3">{nt.emoji}</div>
                  <h4 className={`font-medium text-lg ${nt.color} mb-2`}>{nt.name}</h4>
                  <p className="text-slate-400 text-sm">{nt.function}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Neuroplasticity Animation */}
        <Card className="bg-white/10 backdrop-blur-lg border-green-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-slate-100">Neuroplasticity: Your Brain's Superpower</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl text-green-300 mb-4">Brain's Ability to Change</h4>
                <p className="text-slate-300 mb-4">
                  Neuroplasticity is your brain's remarkable ability to reorganize, form new neural 
                  connections, and adapt throughout your entire life.
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li>• New neurons can grow (neurogenesis)</li>
                  <li>• Existing connections can strengthen</li>
                  <li>• Brain regions can take on new functions</li>
                  <li>• Learning physically changes your brain</li>
                </ul>
              </div>
              <div className="relative h-48 bg-slate-800 rounded-xl overflow-hidden">
                {/* Animated neural network */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-2 h-2 bg-green-400 rounded-full animate-pulse"
                      style={{
                        top: `${20 + (i * 10)}%`,
                        left: `${15 + (i * 8)}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    ></div>
                  ))}
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <line x1="20%" y1="30%" x2="35%" y2="40%" stroke="#10b981" strokeWidth="1" className="animate-pulse" />
                    <line x1="35%" y1="40%" x2="50%" y2="50%" stroke="#10b981" strokeWidth="1" className="animate-pulse" />
                    <line x1="50%" y1="50%" x2="65%" y2="60%" stroke="#10b981" strokeWidth="1" className="animate-pulse" />
                  </svg>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Left Brain vs Right Brain Myth Buster */}
        <Card className="bg-red-100/10 backdrop-blur-lg border-red-200/30 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-slate-100">🧠 Myth Buster: Left vs Right Brain</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-red-300 font-medium mb-4 text-xl">❌ The Myth</h4>
                <p className="text-slate-300 mb-4">
                  "Left-brained people are logical and analytical, right-brained people are creative and artistic."
                </p>
                <p className="text-slate-400 text-sm">
                  This oversimplified view has been popularized but isn't supported by neuroscience.
                </p>
              </div>
              <div>
                <h4 className="text-green-300 font-medium mb-4 text-xl">✅ The Reality</h4>
                <p className="text-slate-300 mb-4">
                  Both hemispheres work together in complex networks. Most cognitive functions 
                  involve bilateral brain activity.
                </p>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• Language involves both hemispheres</li>
                  <li>• Creativity requires whole-brain networks</li>
                  <li>• Logic and intuition work together</li>
                  <li>• Individual differences matter more than hemisphere dominance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Newsletter CTA */}
        <Card className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-lg border-indigo-200/30 shadow-xl rounded-2xl text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-light text-slate-100 mb-4">
              🧠 Brain Science Weekly
            </h3>
            <p className="text-slate-300 mb-6">
              Latest neuroscience discoveries, brain health tips, and cognitive enhancement strategies.
            </p>
            <Button 
              asChild
              className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-8 py-3 rounded-xl haptic-btn"
            >
              <a href="https://mailchi.mp/7027ec706d26/on-a-purpose" target="_blank" rel="noopener noreferrer">
                Explore Your Brain
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
