
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Zap, Heart, Brain, Shield, Target, TrendingUp, AlertTriangle, Clock, Users, BookOpen } from 'lucide-react';

const StressContent = () => {
  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Zap className="h-6 w-6 text-red-600" />
            Comprehensive Stress Management Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Understanding stress as a complex physiological and psychological response system that affects 
            every aspect of human health and performance. Master evidence-based techniques for optimal stress management.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <div className="text-2xl font-bold text-red-600">75%</div>
              <div className="text-sm text-gray-600">Adults report stress daily</div>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <div className="text-2xl font-bold text-orange-600">$190B</div>
              <div className="text-sm text-gray-600">Annual healthcare costs</div>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <div className="text-2xl font-bold text-yellow-600">120M</div>
              <div className="text-sm text-gray-600">People affected globally</div>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <div className="text-2xl font-bold text-green-600">40%</div>
              <div className="text-sm text-gray-600">Reduction with intervention</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="physiology" className="w-full">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="physiology">Physiology</TabsTrigger>
          <TabsTrigger value="types">Types</TabsTrigger>
          <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
          <TabsTrigger value="assessment">Assessment</TabsTrigger>
          <TabsTrigger value="techniques">Techniques</TabsTrigger>
          <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
          <TabsTrigger value="workplace">Workplace</TabsTrigger>
          <TabsTrigger value="emergency">Crisis</TabsTrigger>
        </TabsList>

        <TabsContent value="physiology" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                The Stress Response System
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">HPA Axis (Hypothalamic-Pituitary-Adrenal)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-800 mb-2">Hypothalamus</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Releases CRH (Corticotropin-releasing hormone)</li>
                      <li>• Activates sympathetic nervous system</li>
                      <li>• Controls circadian rhythms</li>
                      <li>• Regulates body temperature</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-800 mb-2">Pituitary Gland</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Releases ACTH (Adrenocorticotropic hormone)</li>
                      <li>• Controls other endocrine glands</li>
                      <li>• Regulates growth hormone</li>
                      <li>• Manages reproductive hormones</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-800 mb-2">Adrenal Glands</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Produces cortisol and adrenaline</li>
                      <li>• Regulates blood sugar</li>
                      <li>• Controls inflammation</li>
                      <li>• Manages electrolyte balance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Neurotransmitter Systems</h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Norepinephrine",
                      function: "Alertness and arousal",
                      effects: ["Increased heart rate", "Enhanced focus", "Elevated blood pressure", "Muscle tension"],
                      color: "red"
                    },
                    {
                      name: "Serotonin",
                      function: "Mood regulation",
                      effects: ["Mood stability", "Sleep regulation", "Appetite control", "Pain modulation"],
                      color: "blue"
                    },
                    {
                      name: "GABA",
                      function: "Calming and inhibition",
                      effects: ["Anxiety reduction", "Muscle relaxation", "Sleep promotion", "Seizure prevention"],
                      color: "green"
                    },
                    {
                      name: "Dopamine",
                      function: "Reward and motivation",
                      effects: ["Pleasure response", "Motor control", "Attention regulation", "Goal-directed behavior"],
                      color: "purple"
                    }
                  ].map((neurotransmitter, index) => (
                    <div key={index} className={`bg-${neurotransmitter.color}-50 p-4 rounded-lg border border-${neurotransmitter.color}-200`}>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className={`font-semibold text-${neurotransmitter.color}-800 text-lg`}>{neurotransmitter.name}</h4>
                          <p className={`text-sm text-${neurotransmitter.color}-600`}>{neurotransmitter.function}</p>
                        </div>
                        <div className="md:col-span-2">
                          <div className="flex flex-wrap gap-2">
                            {neurotransmitter.effects.map((effect, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">{effect}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="types" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Types and Categories of Stress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Acute vs. Chronic Stress</h3>
                  <div className="space-y-3">
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-800 mb-2">Acute Stress</h4>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• Short-term response to immediate threats</li>
                        <li>• Fight-or-flight activation</li>
                        <li>• Usually resolves quickly</li>
                        <li>• Can be beneficial for performance</li>
                        <li>• Examples: Public speaking, exams, emergencies</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">Chronic Stress</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Long-term exposure to stressors</li>
                        <li>• Persistent activation of stress systems</li>
                        <li>• Leads to health complications</li>
                        <li>• Impairs immune function</li>
                        <li>• Examples: Work pressure, financial problems, relationship issues</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Stress Categories</h3>
                  <div className="space-y-3">
                    {[
                      {
                        category: "Physical Stress",
                        description: "Bodily demands and environmental factors",
                        examples: ["Exercise", "Illness", "Heat/Cold", "Noise", "Pollution"]
                      },
                      {
                        category: "Psychological Stress",
                        description: "Mental and emotional pressures",
                        examples: ["Anxiety", "Depression", "Perfectionism", "Low self-esteem", "Trauma"]
                      },
                      {
                        category: "Social Stress",
                        description: "Interpersonal and societal pressures",
                        examples: ["Relationships", "Work conflicts", "Social isolation", "Discrimination", "Family issues"]
                      },
                      {
                        category: "Environmental Stress",
                        description: "External environmental factors",
                        examples: ["Urban living", "Technology overload", "Natural disasters", "Economic instability", "Political unrest"]
                      }
                    ].map((type, index) => (
                      <div key={index} className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-800">{type.category}</h4>
                        <p className="text-sm text-blue-600 mb-2">{type.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {type.examples.map((example, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">{example}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="techniques" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Immediate Stress Relief Techniques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">4-7-8 Breathing</h4>
                    <ol className="text-sm text-green-700 space-y-1 list-decimal list-inside">
                      <li>Inhale through nose for 4 counts</li>
                      <li>Hold breath for 7 counts</li>
                      <li>Exhale through mouth for 8 counts</li>
                      <li>Repeat 4-8 cycles</li>
                    </ol>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Progressive Muscle Relaxation</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Tense muscle groups for 5-10 seconds</li>
                      <li>• Release tension suddenly</li>
                      <li>• Notice the contrast between tension and relaxation</li>
                      <li>• Work through all major muscle groups</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">5-4-3-2-1 Grounding</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• 5 things you can see</li>
                      <li>• 4 things you can touch</li>
                      <li>• 3 things you can hear</li>
                      <li>• 2 things you can smell</li>
                      <li>• 1 thing you can taste</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Long-term Stress Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Cognitive Restructuring</h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Identify negative thought patterns</li>
                      <li>• Challenge unrealistic beliefs</li>
                      <li>• Replace with balanced thinking</li>
                      <li>• Practice positive self-talk</li>
                    </ul>
                  </div>

                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-teal-800 mb-2">Mindfulness Meditation</h4>
                    <ul className="text-sm text-teal-700 space-y-1">
                      <li>• Daily meditation practice (10-20 minutes)</li>
                      <li>• Body scan techniques</li>
                      <li>• Mindful breathing exercises</li>
                      <li>• Present-moment awareness</li>
                    </ul>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-pink-800 mb-2">Social Support Systems</h4>
                    <ul className="text-sm text-pink-700 space-y-1">
                      <li>• Build strong relationships</li>
                      <li>• Join support groups</li>
                      <li>• Seek professional counseling</li>
                      <li>• Maintain family connections</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StressContent;
