
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Brain, Heart, Compass, Lotus, Gem, TreeDeciduous, Mountain, Temple, Crown, Shield } from 'lucide-react';

const ADHDContent = () => {
  return (
    <div className="space-y-8 bamboo-pattern">
      <Card className="bg-gradient-to-br from-emerald-50/80 to-teal-50/80 border-emerald-200/60 washi-texture">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl japanese-heading">
            <Brain className="h-8 w-8 text-emerald-700" />
            <Compass className="h-6 w-6 text-teal-600" />
            ADHD: Neurodiversity & Focus Mastery
            <Lotus className="h-6 w-6 text-emerald-600" />
          </CardTitle>
          <div className="ink-brush-divider my-4"></div>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-emerald-800 leading-relaxed mb-6 japanese-text">
            注意力の芸術 - The art of attention through the lens of neurodiversity, blending Eastern mindfulness practices 
            with Western neuroscience to transform ADHD challenges into unique cognitive strengths and creative gifts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/70 p-6 rounded-xl border border-emerald-200 hover-lift">
              <Gem className="h-8 w-8 text-emerald-700 mb-3" />
              <div className="text-3xl font-bold text-emerald-700 mb-1">6.4M</div>
              <div className="text-sm text-emerald-600 japanese-text">Children diagnosed in US</div>
            </div>
            <div className="bg-white/70 p-6 rounded-xl border border-teal-200 hover-lift">
              <Mountain className="h-8 w-8 text-teal-700 mb-3" />
              <div className="text-3xl font-bold text-teal-700 mb-1">2.8%</div>
              <div className="text-sm text-teal-600 japanese-text">Global prevalence rate</div>
            </div>
            <div className="bg-white/70 p-6 rounded-xl border border-blue-200 hover-lift">
              <Temple className="h-8 w-8 text-blue-700 mb-3" />
              <div className="text-3xl font-bold text-blue-700 mb-1">75%</div>
              <div className="text-sm text-blue-600 japanese-text">Improvement with treatment</div>
            </div>
            <div className="bg-white/70 p-6 rounded-xl border border-purple-200 hover-lift">
              <Crown className="h-8 w-8 text-purple-700 mb-3" />
              <div className="text-3xl font-bold text-purple-700 mb-1">3:1</div>
              <div className="text-sm text-purple-600 japanese-text">Male to female ratio</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="neuroscience" className="w-full">
        <TabsList className="grid w-full grid-cols-8 bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200">
          <TabsTrigger value="neuroscience" className="japanese-text">Neuroscience</TabsTrigger>
          <TabsTrigger value="types" className="japanese-text">Types</TabsTrigger>
          <TabsTrigger value="symptoms" className="japanese-text">Symptoms</TabsTrigger>
          <TabsTrigger value="diagnosis" className="japanese-text">Diagnosis</TabsTrigger>
          <TabsTrigger value="treatment" className="japanese-text">Treatment</TabsTrigger>
          <TabsTrigger value="strategies" className="japanese-text">Strategies</TabsTrigger>
          <TabsTrigger value="strengths" className="japanese-text">Strengths</TabsTrigger>
          <TabsTrigger value="resources" className="japanese-text">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="neuroscience" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="edu-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 japanese-heading">
                  <Brain className="h-6 w-6 text-blue-600" />
                  Executive Function Networks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="bg-blue-50/80 p-4 rounded-lg border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-800 mb-2 japanese-heading">Prefrontal Cortex</h4>
                    <ul className="text-sm text-blue-700 space-y-1 japanese-text">
                      <li>• Working memory deficits</li>
                      <li>• Impulse control challenges</li>
                      <li>• Planning and organization issues</li>
                      <li>• Attention regulation difficulties</li>
                      <li>• Delayed cortical maturation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50/80 p-4 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-800 mb-2 japanese-heading">Dopamine System</h4>
                    <ul className="text-sm text-green-700 space-y-1 japanese-text">
                      <li>• Reward processing alterations</li>
                      <li>• Motivation and drive issues</li>
                      <li>• Novelty-seeking behaviors</li>
                      <li>• Delayed gratification challenges</li>
                      <li>• Addiction vulnerability</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50/80 p-4 rounded-lg border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-800 mb-2 japanese-heading">Default Mode Network</h4>
                    <ul className="text-sm text-purple-700 space-y-1 japanese-text">
                      <li>• Mind-wandering tendencies</li>
                      <li>• Internal attention issues</li>
                      <li>• Task-switching difficulties</li>
                      <li>• Hyperactive introspection</li>
                      <li>• Meditation benefits</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="edu-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 japanese-heading">
                  <Lotus className="h-6 w-6 text-orange-600" />
                  Ancient Wisdom & Modern Understanding
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="bg-orange-50/80 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                      <Mountain className="h-4 w-4" />
                      Zen: 一心不乱 (Isshin-furan)
                    </h4>
                    <p className="text-sm text-orange-700 japanese-text">
                      Single-minded focus without distraction - traditional meditation practices for cultivating sustained attention and mental clarity.
                    </p>
                  </div>

                  <div className="bg-amber-50/80 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                      <TreeDeciduous className="h-4 w-4" />
                      Ayurveda: वात (Vata) Imbalance
                    </h4>
                    <p className="text-sm text-amber-700 japanese-text">
                      Air and space elements causing mental restlessness, treated through grounding practices, routine, and specific herbs and foods.
                    </p>
                  </div>

                  <div className="bg-blue-50/80 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                      <Temple className="h-4 w-4" />
                      Greek: Ἀκρασία (Akrasia)
                    </h4>
                    <p className="text-sm text-blue-700 japanese-text">
                      Aristotelian concept of acting against one's better judgment due to weakness of will - foundational to understanding ADHD impulsivity.
                    </p>
                  </div>

                  <div className="bg-red-50/80 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Stoic: Προσοχή (Prosoche)
                    </h4>
                    <p className="text-sm text-red-700 japanese-text">
                      Continuous attention to the present moment and one's thoughts - Roman practice of mindful awareness and self-regulation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="strengths" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Creative Thinking",
                icon: Crown,
                color: "purple",
                traits: [
                  "Out-of-the-box solutions",
                  "Innovative approaches",
                  "Artistic expression",
                  "Imaginative storytelling",
                  "Unique perspectives"
                ]
              },
              {
                title: "Hyperfocus Ability",
                icon: Gem,
                color: "blue",
                traits: [
                  "Deep concentration states",
                  "Exceptional productivity",
                  "Mastery of interests",
                  "Flow state access",
                  "Intense learning phases"
                ]
              },
              {
                title: "High Energy",
                icon: Mountain,
                color: "orange",
                traits: [
                  "Enthusiasm and passion",
                  "Physical vitality",
                  "Motivational presence",
                  "Dynamic leadership",
                  "Inspiring others"
                ]
              },
              {
                title: "Quick Processing",
                icon: Compass,
                color: "green",
                traits: [
                  "Rapid idea generation",
                  "Fast problem-solving",
                  "Quick adaptability",
                  "Multi-tasking ability",
                  "Information synthesis"
                ]
              },
              {
                title: "Emotional Intensity",
                icon: Heart,
                color: "red",
                traits: [
                  "Deep empathy",
                  "Passionate connections",
                  "Emotional intelligence",
                  "Authentic expression",
                  "Inspiring advocacy"
                ]
              },
              {
                title: "Risk-Taking",
                icon: TreeDeciduous,
                color: "teal",
                traits: [
                  "Entrepreneurial spirit",
                  "Adventure seeking",
                  "Bold decisions",
                  "Innovation courage",
                  "Change leadership"
                ]
              }
            ].map((strength, index) => (
              <Card key={index} className="edu-card hover-lift">
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 text-${strength.color}-700 japanese-heading`}>
                    <strength.icon className="h-5 w-5" />
                    {strength.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {strength.traits.map((trait, idx) => (
                      <li key={idx} className={`text-sm text-${strength.color}-600 flex items-center gap-2 japanese-text`}>
                        <Lotus className="w-3 h-3" />
                        {trait}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ADHDContent;
