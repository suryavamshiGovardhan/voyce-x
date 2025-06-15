import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Brain, Heart, Compass, Mountain, TreeDeciduous, Gem, Church, Crown, Shield, Flower } from 'lucide-react';

const BrainContent = () => {
  return (
    <div className="space-y-8 washi-texture">
      <Card className="bg-gradient-to-br from-indigo-50/80 to-purple-50/80 border-indigo-200/60 cherry-blossom-bg">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl japanese-heading">
            <Brain className="h-8 w-8 text-indigo-700" />
            <Church className="h-6 w-6 text-purple-600" />
            Brain Function & Neuroplasticity
            <Crown className="h-6 w-6 text-indigo-600" />
          </CardTitle>
          <div className="ink-brush-divider my-4"></div>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-indigo-800 leading-relaxed mb-6 japanese-text">
            脳の神秘 - The mystery of the brain unveiled through ancient philosophical inquiry and cutting-edge neuroscience, 
            exploring consciousness, cognition, and the infinite potential of the human mind across cultures and centuries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/70 p-6 rounded-xl border border-indigo-200 hover-lift">
              <Brain className="h-8 w-8 text-indigo-700 mb-3" />
              <div className="text-3xl font-bold text-indigo-700 mb-1">86B</div>
              <div className="text-sm text-indigo-600 japanese-text">Neurons in human brain</div>
            </div>
            <div className="bg-white/70 p-6 rounded-xl border border-purple-200 hover-lift">
              <Flower className="h-8 w-8 text-purple-700 mb-3" />
              <div className="text-3xl font-bold text-purple-700 mb-1">100T</div>
              <div className="text-sm text-purple-600 japanese-text">Synaptic connections</div>
            </div>
            <div className="bg-white/70 p-6 rounded-xl border border-blue-200 hover-lift">
              <Gem className="h-8 w-8 text-blue-700 mb-3" />
              <div className="text-3xl font-bold text-blue-700 mb-1">20%</div>
              <div className="text-sm text-blue-600 japanese-text">Body's energy usage</div>
            </div>
            <div className="bg-white/70 p-6 rounded-xl border border-teal-200 hover-lift">
              <Mountain className="h-8 w-8 text-teal-700 mb-3" />
              <div className="text-3xl font-bold text-teal-700 mb-1">25</div>
              <div className="text-sm text-teal-600 japanese-text">Years for full maturation</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="structure" className="w-full">
        <TabsList className="grid w-full grid-cols-8 bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200">
          <TabsTrigger value="structure" className="japanese-text">Structure</TabsTrigger>
          <TabsTrigger value="networks" className="japanese-text">Networks</TabsTrigger>
          <TabsTrigger value="plasticity" className="japanese-text">Plasticity</TabsTrigger>
          <TabsTrigger value="development" className="japanese-text">Development</TabsTrigger>
          <TabsTrigger value="consciousness" className="japanese-text">Consciousness</TabsTrigger>
          <TabsTrigger value="memory" className="japanese-text">Memory</TabsTrigger>
          <TabsTrigger value="emotions" className="japanese-text">Emotions</TabsTrigger>
          <TabsTrigger value="optimization" className="japanese-text">Optimization</TabsTrigger>
        </TabsList>

        <TabsContent value="structure" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="edu-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 japanese-heading">
                  <Brain className="h-6 w-6 text-indigo-600" />
                  Cerebral Cortex Regions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      region: "Frontal Lobe",
                      functions: ["Executive functions", "Planning", "Decision making", "Personality", "Motor control"],
                      color: "blue"
                    },
                    {
                      region: "Parietal Lobe", 
                      functions: ["Sensory processing", "Spatial awareness", "Attention", "Language", "Mathematics"],
                      color: "green"
                    },
                    {
                      region: "Temporal Lobe",
                      functions: ["Memory formation", "Language comprehension", "Auditory processing", "Emotion", "Recognition"],
                      color: "purple"
                    },
                    {
                      region: "Occipital Lobe",
                      functions: ["Visual processing", "Pattern recognition", "Color perception", "Motion detection", "Depth perception"],
                      color: "orange"
                    }
                  ].map((lobe, index) => (
                    <div key={index} className={`bg-${lobe.color}-50/80 p-4 rounded-lg border border-${lobe.color}-200`}>
                      <h4 className={`font-semibold text-${lobe.color}-800 mb-2 japanese-heading`}>{lobe.region}</h4>
                      <div className="flex flex-wrap gap-1">
                        {lobe.functions.map((func, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs japanese-text">{func}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="edu-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 japanese-heading">
                  <Church className="h-6 w-6 text-amber-600" />
                  Ancient Brain Wisdom
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="bg-amber-50/80 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                      <Flower className="h-4 w-4" />
                      Sanskrit: मनस् (Manas) - Mind Principle
                    </h4>
                    <p className="text-sm text-amber-700 japanese-text">
                      Vedic understanding of mind as subtle matter coordinating sensory experience, thought, and consciousness through chakra energy centers.
                    </p>
                  </div>

                  <div className="bg-blue-50/80 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                      <Crown className="h-4 w-4" />
                      Greek: Ψυχή (Psyche) - Soul-Mind
                    </h4>
                    <p className="text-sm text-blue-700 japanese-text">
                      Platonic three-part soul theory: rational (logos), spirited (thymos), and appetitive (epithymia) - precursor to modern brain structure understanding.
                    </p>
                  </div>

                  <div className="bg-green-50/80 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      Arabic: عقل (Aql) - Intellect
                    </h4>
                    <p className="text-sm text-green-700 japanese-text">
                      Islamic philosophical concept of intellect as divine faculty enabling understanding, moral reasoning, and spiritual insight.
                    </p>
                  </div>

                  <div className="bg-purple-50/80 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                      <Mountain className="h-4 w-4" />
                      Japanese: 心 (Kokoro) - Heart-Mind
                    </h4>
                    <p className="text-sm text-purple-700 japanese-text">
                      Unified concept of heart-mind including emotion, thought, will, and spiritual essence - holistic brain-body understanding.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="plasticity" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Structural Plasticity",
                icon: Mountain,
                color: "blue",
                mechanisms: [
                  "Neurogenesis - new neuron formation",
                  "Synaptogenesis - new connection creation", 
                  "Dendritic branching expansion",
                  "Myelin sheath strengthening",
                  "Glial cell multiplication"
                ]
              },
              {
                title: "Functional Plasticity",
                icon: Compass,
                color: "green", 
                mechanisms: [
                  "Synaptic strength modification",
                  "Network reorganization",
                  "Compensatory activation",
                  "Cross-modal recruitment",
                  "Homeostatic scaling"
                ]
              },
              {
                title: "Activity-Dependent",
                icon: TreeDeciduous,
                color: "purple",
                mechanisms: [
                  "Use-it-or-lose-it principle",
                  "Hebbian learning rules",
                  "Experience-driven changes",
                  "Environmental enrichment",
                  "Skill-specific adaptations"
                ]
              }
            ].map((type, index) => (
              <Card key={index} className="edu-card hover-lift">
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 text-${type.color}-700 japanese-heading`}>
                    <type.icon className="h-5 w-5" />
                    {type.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.mechanisms.map((mechanism, idx) => (
                      <li key={idx} className={`text-sm text-${type.color}-600 flex items-start gap-2 japanese-text`}>
                        <Gem className="w-3 h-3 mt-1 flex-shrink-0" />
                        <span>{mechanism}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="consciousness" className="space-y-8">
          <Card className="edu-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 japanese-heading">
                <Crown className="h-6 w-6 text-purple-600" />
                Theories of Consciousness
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    theory: "Global Workspace Theory",
                    description: "Consciousness emerges when information becomes globally available across brain networks",
                    key_points: ["Neural global workspace", "Attention and awareness", "Information integration", "Broadcast mechanism"]
                  },
                  {
                    theory: "Integrated Information Theory",
                    description: "Consciousness corresponds to integrated information (Φ) in a system",
                    key_points: ["Information integration", "Phi (Φ) measurement", "Causal structure", "Consciousness quantification"]
                  },
                  {
                    theory: "Orchestrated Objective Reduction",
                    description: "Quantum processes in microtubules generate consciousness",
                    key_points: ["Quantum coherence", "Microtubule structures", "Objective reduction", "Non-computational process"]
                  },
                  {
                    theory: "Predictive Processing",
                    description: "Consciousness arises from predictive models of sensory input",
                    key_points: ["Prediction errors", "Hierarchical processing", "Bayesian brain", "Active inference"]
                  }
                ].map((theory, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-50/80 to-indigo-50/80 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2 japanese-heading">{theory.theory}</h4>
                    <p className="text-sm text-purple-700 mb-3 japanese-text">{theory.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {theory.key_points.map((point, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs japanese-text">{point}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BrainContent;
