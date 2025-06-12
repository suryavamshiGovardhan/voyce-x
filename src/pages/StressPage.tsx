import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import InfiniteKnowledge from "@/components/InfiniteKnowledge";
import ShareStoryButton from "@/components/ShareStoryButton";

export default function StressPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From ancient survival mechanisms to modern overwhelm — explore the complete science of stress, 
            its impact on your mind and body, and evidence-based pathways to resilience.
          </p>
        </div>

        {/* Infinite Knowledge Section */}
        <InfiniteKnowledge 
          topic="Stress" 
          searchTerms={['stress', 'cortisol', 'anxiety', 'stress management', 'chronic stress']} 
        />

        {/* Animated Cortisol Cycle Visual */}
        <div className="mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-orange-200/20 shadow-xl rounded-2xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-100">The Stress Response Cycle</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { phase: "Trigger", color: "bg-red-500", description: "Stressor detected" },
                  { phase: "Alarm", color: "bg-orange-500", description: "Fight/Flight activated" },
                  { phase: "Resistance", color: "bg-yellow-500", description: "Body adapts" },
                  { phase: "Recovery", color: "bg-green-500", description: "Return to baseline" }
                ].map((phase, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 ${phase.color} rounded-full mx-auto mb-4 animate-pulse-gentle`}></div>
                    <h3 className="text-lg font-medium text-slate-200 mb-2">{phase.phase}</h3>
                    <p className="text-sm text-slate-400">{phase.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Definition & History */}
          <Card className="bg-white/10 backdrop-blur-lg border-green-200/20 shadow-xl rounded-2xl card-3d">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-100">What is Stress?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-300">
                Stress is your body's natural response to any demand or threat. When you feel threatened, 
                your nervous system releases stress hormones including adrenaline and cortisol.
              </p>
              <div className="bg-orange-100/10 p-4 rounded-xl">
                <h4 className="font-medium text-orange-300 mb-2">Historical Perspective</h4>
                <p className="text-slate-400 text-sm">
                  The term "stress" was popularized by Hans Selye in 1936, though humans have 
                  experienced stress responses for millennia as essential survival mechanisms.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Types of Stress */}
          <Card className="bg-white/10 backdrop-blur-lg border-blue-200/20 shadow-xl rounded-2xl card-3d">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-100">Types of Stress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { type: "Acute Stress", desc: "Short-term, intense response to immediate threats" },
                  { type: "Chronic Stress", desc: "Long-term stress from ongoing pressures" },
                  { type: "Eustress", desc: "Positive stress that motivates and energizes" },
                  { type: "Distress", desc: "Negative stress that overwhelms and depletes" }
                ].map((item, index) => (
                  <div key={index} className="bg-slate-800/50 p-3 rounded-lg">
                    <h4 className="text-blue-300 font-medium">{item.type}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Biology of Stress */}
          <Card className="bg-white/10 backdrop-blur-lg border-purple-200/20 shadow-xl rounded-2xl card-3d">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-100">The Biology</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-purple-100/10 p-4 rounded-xl">
                <h4 className="font-medium text-purple-300 mb-2">HPA Axis</h4>
                <p className="text-slate-400 text-sm">
                  Hypothalamus → Pituitary → Adrenal glands release cortisol and adrenaline
                </p>
              </div>
              <div className="bg-purple-100/10 p-4 rounded-xl">
                <h4 className="font-medium text-purple-300 mb-2">Sympathetic Nervous System</h4>
                <p className="text-slate-400 text-sm">
                  Triggers fight-or-flight: increased heart rate, breathing, muscle tension
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comprehensive Accordion Sections */}
        <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-slate-100">Deep Dive: Stress Science</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="symptoms" className="border-slate-700">
                <AccordionTrigger className="text-slate-200 hover:text-orange-300">
                  Stress Symptoms & Warning Signs
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 space-y-4">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-orange-300 font-medium mb-2">Physical</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Headaches, muscle tension</li>
                        <li>• Fatigue, sleep problems</li>
                        <li>• Digestive issues</li>
                        <li>• Weakened immune system</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-orange-300 font-medium mb-2">Emotional</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Anxiety, irritability</li>
                        <li>• Depression, mood swings</li>
                        <li>• Restlessness</li>
                        <li>• Feeling overwhelmed</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-orange-300 font-medium mb-2">Behavioral</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Over/under eating</li>
                        <li>• Procrastination</li>
                        <li>• Social withdrawal</li>
                        <li>• Increased substance use</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="prevention" className="border-slate-700">
                <AccordionTrigger className="text-slate-200 hover:text-green-300">
                  Stress Prevention & Management
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-green-300 font-medium mb-3">Lifestyle Strategies</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Regular exercise (30+ min daily)</li>
                        <li>• Mindfulness and meditation</li>
                        <li>• Adequate sleep (7-9 hours)</li>
                        <li>• Balanced nutrition</li>
                        <li>• Time management techniques</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-green-300 font-medium mb-3">Therapeutic Approaches</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Cognitive Behavioral Therapy (CBT)</li>
                        <li>• Acceptance and Commitment Therapy</li>
                        <li>• Stress Reduction Based Mindfulness</li>
                        <li>• Progressive muscle relaxation</li>
                        <li>• Biofeedback training</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="neuroscience" className="border-slate-700">
                <AccordionTrigger className="text-slate-200 hover:text-blue-300">
                  Future of Stress Research
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 space-y-4">
                  <div className="bg-blue-100/10 p-4 rounded-xl">
                    <h4 className="text-blue-300 font-medium mb-2">Emerging Technologies</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Real-time cortisol monitoring via wearables</li>
                      <li>• AI-powered stress prediction models</li>
                      <li>• Personalized intervention protocols</li>
                      <li>• Virtual reality exposure therapy</li>
                      <li>• Neuroplasticity-based treatments</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Newsletter CTA */}
        <Card className="bg-gradient-to-r from-green-500/20 to-orange-500/20 backdrop-blur-lg border-green-200/30 shadow-xl rounded-2xl text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-light text-slate-100 mb-4">
              📬 Join the VOYCE Letter
            </h3>
            <p className="text-slate-300 mb-6">
              Soulful mental health insights, every Sunday. Deep wisdom for stress, trauma, and emotional freedom.
            </p>
            <Button 
              asChild
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-xl haptic-btn"
            >
              <a href="https://mailchi.mp/7027ec706d26/on-a-purpose" target="_blank" rel="noopener noreferrer">
                Subscribe Now
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Share Story Button */}
        <ShareStoryButton />
      </div>

      <Footer />
    </div>
  );
}
