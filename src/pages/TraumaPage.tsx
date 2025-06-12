import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import InfiniteKnowledge from "@/components/InfiniteKnowledge";
import ShareStoryButton from "@/components/ShareStoryButton";

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
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From individual wounds to generational patterns — explore the profound impact of trauma 
            on the mind, body, and spirit, and discover pathways to healing and post-traumatic growth.
          </p>
        </div>

        {/* Infinite Knowledge Section */}
        <InfiniteKnowledge 
          topic="Trauma" 
          searchTerms={['trauma', 'PTSD', 'EMDR', 'trauma therapy', 'generational trauma']} 
        />

        {/* Gabor Maté Quote Block */}
        <Card className="bg-red-100/10 backdrop-blur-lg border-red-200/30 shadow-xl rounded-2xl mb-16">
          <CardContent className="p-8 text-center">
            <blockquote className="text-2xl md:text-3xl font-light text-slate-100 italic mb-4">
              "Trauma is not what happens to you. Trauma is what happens inside you 
              as a result of what happened to you."
            </blockquote>
            <cite className="text-red-300 font-medium">— Dr. Gabor Maté</cite>
          </CardContent>
        </Card>

        {/* Types of Trauma Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-red-200/20 shadow-xl rounded-2xl card-3d">
            <CardHeader>
              <CardTitle className="text-2xl text-red-300">Emotional Trauma</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-300">
                Psychological wounds from overwhelming emotional experiences that exceed 
                one's ability to cope and integrate.
              </p>
              <div className="bg-red-100/10 p-4 rounded-xl">
                <h4 className="font-medium text-red-200 mb-2">Examples</h4>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• Abandonment, rejection</li>
                  <li>• Emotional abuse, neglect</li>
                  <li>• Betrayal, loss of trust</li>
                  <li>• Sudden loss or grief</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-orange-200/20 shadow-xl rounded-2xl card-3d">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-300">Physical Trauma</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-300">
                Direct physical harm or threat to bodily safety that creates lasting 
                impact on both body and mind.
              </p>
              <div className="bg-orange-100/10 p-4 rounded-xl">
                <h4 className="font-medium text-orange-200 mb-2">Impact Areas</h4>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• Nervous system dysregulation</li>
                  <li>• Chronic pain patterns</li>
                  <li>• Hypervigilance</li>
                  <li>• Body memory storage</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-purple-200/20 shadow-xl rounded-2xl card-3d">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-300">Generational Trauma</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-300">
                Trauma transmitted across generations through epigenetic changes, 
                family patterns, and unconscious behavioral inheritance.
              </p>
              <div className="bg-purple-100/10 p-4 rounded-xl">
                <h4 className="font-medium text-purple-200 mb-2">Transmission Methods</h4>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• Epigenetic modifications</li>
                  <li>• Parenting patterns</li>
                  <li>• Cultural narratives</li>
                  <li>• Unresolved family systems</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* EMDR Animation Section */}
        <Card className="bg-white/10 backdrop-blur-lg border-green-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-slate-100">EMDR: Eye Movement Therapy</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="flex justify-center mb-6">
              <div className="relative w-64 h-16 bg-slate-800 rounded-full overflow-hidden">
                <div className="absolute top-1/2 left-0 w-4 h-4 bg-green-400 rounded-full transform -translate-y-1/2 animate-[slide_2s_ease-in-out_infinite]"></div>
              </div>
            </div>
            <p className="text-slate-300 text-center max-w-2xl mx-auto">
              EMDR (Eye Movement Desensitization and Reprocessing) uses bilateral stimulation 
              to help the brain process traumatic memories and reduce their emotional charge.
            </p>
          </CardContent>
        </Card>

        {/* Historical Timeline */}
        <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-slate-100">Trauma Understanding: Freud to PTSD</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { year: "1896", event: "Freud's Seduction Theory", desc: "Early recognition of childhood trauma's impact" },
                { year: "1917", event: "Shell Shock Recognition", desc: "WWI brings trauma into medical awareness" },
                { year: "1980", event: "PTSD in DSM-III", desc: "Official psychiatric recognition of trauma disorders" },
                { year: "1990s", event: "Body-Based Approaches", desc: "Van der Kolk, Levine pioneer somatic trauma therapy" },
                { year: "2000s", event: "Neuroscience Revolution", desc: "Brain imaging reveals trauma's neurological impact" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 bg-slate-800/30 p-4 rounded-xl">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium min-w-fit">
                    {item.year}
                  </div>
                  <div>
                    <h4 className="text-blue-300 font-medium">{item.event}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Healing Methods Accordion */}
        <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-slate-100">Trauma Healing Approaches</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="somatic" className="border-slate-700">
                <AccordionTrigger className="text-slate-200 hover:text-green-300">
                  Somatic & Body-Based Therapies
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-green-300 font-medium mb-3">Approaches</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Somatic Experiencing (Peter Levine)</li>
                        <li>• Body-Mind Centering</li>
                        <li>• Sensorimotor Psychotherapy</li>
                        <li>• Trauma-Sensitive Yoga</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-green-300 font-medium mb-3">Principles</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Releasing trapped survival energy</li>
                        <li>• Restoring natural resilience</li>
                        <li>• Building body awareness</li>
                        <li>• Nervous system regulation</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cognitive" className="border-slate-700">
                <AccordionTrigger className="text-slate-200 hover:text-blue-300">
                  Cognitive & Integration Therapies
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 space-y-4">
                  <div className="space-y-4">
                    <div className="bg-blue-100/10 p-4 rounded-xl">
                      <h4 className="text-blue-300 font-medium mb-2">EMDR</h4>
                      <p className="text-sm">Bilateral stimulation helps reprocess traumatic memories</p>
                    </div>
                    <div className="bg-blue-100/10 p-4 rounded-xl">
                      <h4 className="text-blue-300 font-medium mb-2">IFS (Internal Family Systems)</h4>
                      <p className="text-sm">Working with different parts of the psyche affected by trauma</p>
                    </div>
                    <div className="bg-blue-100/10 p-4 rounded-xl">
                      <h4 className="text-blue-300 font-medium mb-2">Narrative Therapy</h4>
                      <p className="text-sm">Reauthoring life stories beyond trauma identity</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Newsletter CTA */}
        <Card className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-lg border-red-200/30 shadow-xl rounded-2xl text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-light text-slate-100 mb-4">
              📬 Healing Insights Weekly
            </h3>
            <p className="text-slate-300 mb-6">
              Deep wisdom on trauma, healing, and post-traumatic growth. Join our healing community.
            </p>
            <Button 
              asChild
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-xl haptic-btn"
            >
              <a href="https://mailchi.mp/7027ec706d26/on-a-purpose" target="_blank" rel="noopener noreferrer">
                Join the Healing Journey
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
