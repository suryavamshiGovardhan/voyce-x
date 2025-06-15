
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Shield, Heart, Brain, Lotus, Mountain, Gem, Temple, TreeDeciduous, Compass, Crown } from 'lucide-react';

const TraumaContent = () => {
  return (
    <div className="space-y-8 washi-texture">
      <Card className="bg-gradient-to-br from-amber-50/80 to-orange-50/80 border-amber-200/60 cherry-blossom-bg">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl japanese-heading">
            <Shield className="h-8 w-8 text-amber-700" />
            <Lotus className="h-6 w-6 text-orange-600" />
            Trauma Recovery & Resilience
            <Mountain className="h-6 w-6 text-amber-600" />
          </CardTitle>
          <div className="ink-brush-divider my-4"></div>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-amber-800 leading-relaxed mb-6 japanese-text">
            古の智慧と現代科学の融合 - Ancient wisdom meets modern science in understanding trauma as a transformative journey from suffering to strength, 
            incorporating Greek concepts of catharsis, Indian principles of dharma, and Roman stoic resilience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/70 p-6 rounded-xl border border-amber-200 hover-lift">
              <Temple className="h-8 w-8 text-amber-700 mb-3" />
              <div className="text-3xl font-bold text-amber-700 mb-1">1 in 4</div>
              <div className="text-sm text-amber-600 japanese-text">Adults experience trauma</div>
            </div>
            <div className="bg-white/70 p-6 rounded-xl border border-orange-200 hover-lift">
              <Crown className="h-8 w-8 text-orange-700 mb-3" />
              <div className="text-3xl font-bold text-orange-700 mb-1">70%</div>
              <div className="text-sm text-orange-600 japanese-text">Recovery with proper support</div>
            </div>
            <div className="bg-white/70 p-6 rounded-xl border border-red-200 hover-lift">
              <Gem className="h-8 w-8 text-red-700 mb-3" />
              <div className="text-3xl font-bold text-red-700 mb-1">12 weeks</div>
              <div className="text-sm text-red-600 japanese-text">Average therapy duration</div>
            </div>
            <div className="bg-white/70 p-6 rounded-xl border border-green-200 hover-lift">
              <TreeDeciduous className="h-8 w-8 text-green-700 mb-3" />
              <div className="text-3xl font-bold text-green-700 mb-1">90%</div>
              <div className="text-sm text-green-600 japanese-text">Post-traumatic growth potential</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="understanding" className="w-full">
        <TabsList className="grid w-full grid-cols-8 bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200">
          <TabsTrigger value="understanding" className="japanese-text">Understanding</TabsTrigger>
          <TabsTrigger value="types" className="japanese-text">Types</TabsTrigger>
          <TabsTrigger value="symptoms" className="japanese-text">Symptoms</TabsTrigger>
          <TabsTrigger value="healing" className="japanese-text">Healing</TabsTrigger>
          <TabsTrigger value="therapies" className="japanese-text">Therapies</TabsTrigger>
          <TabsTrigger value="resilience" className="japanese-text">Resilience</TabsTrigger>
          <TabsTrigger value="support" className="japanese-text">Support</TabsTrigger>
          <TabsTrigger value="resources" className="japanese-text">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="understanding" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="edu-card washi-texture">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 japanese-heading">
                  <Brain className="h-6 w-6 text-blue-600" />
                  Neurobiological Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="bg-blue-50/80 p-4 rounded-lg border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-800 mb-2 japanese-heading">Amygdala Hyperactivation</h4>
                    <ul className="text-sm text-blue-700 space-y-2 japanese-text">
                      <li>• Fear center becomes overactive</li>
                      <li>• Heightened threat detection</li>
                      <li>• Emotional dysregulation</li>
                      <li>• Fight-flight-freeze responses</li>
                      <li>• Memory consolidation disruption</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50/80 p-4 rounded-lg border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-800 mb-2 japanese-heading">Hippocampus Changes</h4>
                    <ul className="text-sm text-purple-700 space-y-2 japanese-text">
                      <li>• Volume reduction in chronic trauma</li>
                      <li>• Memory formation difficulties</li>
                      <li>• Contextual memory impairment</li>
                      <li>• Spatial navigation issues</li>
                      <li>• Neurogenesis disruption</li>
                    </ul>
                  </div>

                  <div className="bg-green-50/80 p-4 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-800 mb-2 japanese-heading">Prefrontal Cortex Impact</h4>
                    <ul className="text-sm text-green-700 space-y-2 japanese-text">
                      <li>• Executive function impairment</li>
                      <li>• Decision-making difficulties</li>
                      <li>• Attention and concentration issues</li>
                      <li>• Emotional regulation challenges</li>
                      <li>• Working memory deficits</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="edu-card washi-texture">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 japanese-heading">
                  <Heart className="h-6 w-6 text-red-600" />
                  Cultural Wisdom Traditions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="bg-amber-50/80 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                      <Lotus className="h-4 w-4" />
                      Sanskrit: त्राण (Trana) - Protection
                    </h4>
                    <p className="text-sm text-amber-700 japanese-text">
                      Ancient Vedic understanding of trauma as disruption of dharma (life purpose) and the path to restoration through yoga, meditation, and spiritual practices.
                    </p>
                  </div>

                  <div className="bg-blue-50/80 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                      <Temple className="h-4 w-4" />
                      Greek: Κάθαρσις (Katharsis) - Purification
                    </h4>
                    <p className="text-sm text-blue-700 japanese-text">
                      Aristotelian concept of emotional purification through experiencing and expressing deep emotions, foundational to modern trauma therapy.
                    </p>
                  </div>

                  <div className="bg-orange-50/80 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                      <Crown className="h-4 w-4" />
                      Arabic: صبر (Sabr) - Patient Perseverance
                    </h4>
                    <p className="text-sm text-orange-700 japanese-text">
                      Islamic concept of patient endurance through hardship as a path to spiritual growth and inner strength.
                    </p>
                  </div>

                  <div className="bg-red-50/80 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Latin: Virtus - Virtue Through Adversity
                    </h4>
                    <p className="text-sm text-red-700 japanese-text">
                      Roman Stoic philosophy teaching that virtue and strength emerge through facing challenges with courage and wisdom.
                    </p>
                  </div>

                  <div className="bg-teal-50/80 p-4 rounded-lg border border-teal-200">
                    <h4 className="font-semibold text-teal-800 mb-2 flex items-center gap-2">
                      <Mountain className="h-4 w-4" />
                      Japanese: 金継ぎ (Kintsugi) - Golden Repair
                    </h4>
                    <p className="text-sm text-teal-700 japanese-text">
                      Art of repairing broken pottery with gold, symbolizing that brokenness and healing are part of beauty, not something to hide.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="healing" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Somatic Approaches",
                icon: TreeDeciduous,
                color: "green",
                methods: [
                  "Body-based trauma release",
                  "Nervous system regulation",
                  "Breathwork and movement",
                  "Sensory integration",
                  "Polyvagal theory application"
                ]
              },
              {
                title: "Cognitive Processing",
                icon: Brain,
                color: "blue",
                methods: [
                  "Trauma-focused CBT",
                  "Cognitive restructuring",
                  "Memory processing",
                  "Meaning-making",
                  "Narrative therapy"
                ]
              },
              {
                title: "Expressive Therapies",
                icon: Heart,
                color: "pink",
                methods: [
                  "Art and music therapy",
                  "Dance/movement therapy",
                  "Creative writing",
                  "Drama therapy",
                  "Sand tray therapy"
                ]
              }
            ].map((approach, index) => (
              <Card key={index} className="edu-card">
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 text-${approach.color}-700`}>
                    <approach.icon className="h-5 w-5" />
                    {approach.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {approach.methods.map((method, idx) => (
                      <li key={idx} className={`text-sm text-${approach.color}-600 flex items-center gap-2`}>
                        <div className={`w-2 h-2 rounded-full bg-${approach.color}-400`}></div>
                        {method}
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

export default TraumaContent;
