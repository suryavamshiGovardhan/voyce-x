
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";

export default function NeurosciencePage() {
  const timelineEvents = [
    {
      era: "3000 BCE",
      title: "Ancient Ayurveda",
      description: "First documented understanding of mind-body connection and consciousness",
      color: "amber",
      icon: "🕉️"
    },
    {
      era: "400 BCE",
      title: "Hippocrates", 
      description: "Proposed that brain is the seat of consciousness, not the heart",
      color: "blue",
      icon: "⚕️"
    },
    {
      era: "1664",
      title: "Thomas Willis",
      description: "Coined the term 'neurology' and mapped brain anatomy",
      color: "green",
      icon: "🧠"
    },
    {
      era: "1890s",
      title: "Ramon y Cajal",
      description: "Neuron doctrine - brain composed of individual nerve cells",
      color: "purple",
      icon: "🔬"
    },
    {
      era: "1929",
      title: "EEG Discovery",
      description: "Hans Berger records first human brain electrical activity",
      color: "red",
      icon: "⚡"
    },
    {
      era: "1950s",
      title: "Split-Brain Studies",
      description: "Roger Sperry reveals left-right brain hemisphere functions",
      color: "indigo",
      icon: "🧩"
    },
    {
      era: "1970s",
      title: "fMRI Technology",
      description: "First functional brain imaging reveals real-time brain activity",
      color: "pink",
      icon: "📡"
    },
    {
      era: "1990s",
      title: "Neuroplasticity Revolution",
      description: "Discovery that adult brains can rewire throughout life",
      color: "emerald",
      icon: "🔄"
    },
    {
      era: "2000s",
      title: "Connectome Project",
      description: "Mapping complete neural connections of the human brain",
      color: "cyan",
      icon: "🌐"
    },
    {
      era: "2010s",
      title: "Optogenetics",
      description: "Using light to control specific neurons in living tissue",
      color: "yellow",
      icon: "💡"
    },
    {
      era: "2020s",
      title: "AI Brain Interfaces",
      description: "Neural implants and brain-computer interfaces breakthrough",
      color: "violet",
      icon: "🤖"
    },
    {
      era: "Future",
      title: "Quantum Consciousness",
      description: "Exploring quantum mechanics in neural microtubules",
      color: "orange",
      icon: "⚛️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6">
            <span className="text-indigo-400">Neuroscience</span> Timeline
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Journey through 5,000 years of brain science — from ancient wisdom to quantum consciousness, 
            tracing humanity's quest to understand the mind.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-indigo-200/20 shadow-xl rounded-2xl">
            <CardContent className="p-8">
              <div className="flex flex-wrap justify-center gap-4">
                {["Ancient", "Classical", "Renaissance", "Modern", "Digital", "Future"].map((period, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="border-indigo-300 text-indigo-300 hover:bg-indigo-100/10"
                  >
                    {period}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vertical Timeline with Glowing Trail */}
        <div className="relative">
          {/* Glowing timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white rounded-full border-4 border-indigo-400 transform md:-translate-x-1/2 z-10"></div>
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <Card className={`bg-white/10 backdrop-blur-lg border-${event.color}-200/20 shadow-xl rounded-2xl card-3d hover:scale-105 transition-transform duration-300`}>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{event.icon}</div>
                        <div>
                          <div className={`text-${event.color}-300 font-medium text-sm mb-1`}>{event.era}</div>
                          <CardTitle className={`text-xl text-${event.color}-100`}>{event.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Neuroscience Breakthroughs */}
        <div className="mt-32 mb-16">
          <h2 className="text-4xl font-light text-slate-100 text-center mb-12">
            Current Frontiers
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Brain Organoids",
                description: "Lab-grown mini-brains for studying development and disease",
                icon: "🧫",
                color: "green"
              },
              {
                title: "Neural Dust",
                description: "Wireless, implantable sensors the size of dust particles",
                icon: "✨",
                color: "blue"
              },
              {
                title: "Memory Transfer",
                description: "Experiments in transferring memories between organisms",
                icon: "💾",
                color: "purple"
              }
            ].map((breakthrough, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl card-3d">
                <CardHeader>
                  <div className="text-4xl text-center mb-4">{breakthrough.icon}</div>
                  <CardTitle className={`text-xl text-${breakthrough.color}-300 text-center`}>
                    {breakthrough.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-center text-sm">{breakthrough.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Predictions */}
        <Card className="bg-white/10 backdrop-blur-lg border-purple-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-slate-100 text-center">The Next 50 Years</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl text-purple-300 mb-4">🔮 2030s Predictions</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• Direct brain-to-brain communication</li>
                  <li>• Memory enhancement implants</li>
                  <li>• Real-time emotion regulation devices</li>
                  <li>• AI-assisted mental health diagnosis</li>
                </ul>
              </div>
              <div>
                <h4 className="text-2xl text-cyan-300 mb-4">🚀 2050s Vision</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• Consciousness uploading experiments</li>
                  <li>• Artificial hippocampus implants</li>
                  <li>• Quantum consciousness research</li>
                  <li>• Neural-digital hybrid intelligence</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Newsletter CTA */}
        <Card className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-lg border-indigo-200/30 shadow-xl rounded-2xl text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-light text-slate-100 mb-4">
              🧬 Neuroscience Frontiers
            </h3>
            <p className="text-slate-300 mb-6">
              Stay updated on breakthrough discoveries, future predictions, and the evolving understanding of consciousness.
            </p>
            <Button 
              asChild
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl haptic-btn"
            >
              <a href="https://mailchi.mp/7027ec706d26/on-a-purpose" target="_blank" rel="noopener noreferrer">
                Join the Future of Neuroscience
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
