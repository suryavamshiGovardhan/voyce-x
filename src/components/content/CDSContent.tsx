
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Brain, BookOpen, Users, Microscope, TrendingUp, AlertTriangle, Heart, Target, Clock, Zap } from 'lucide-react';

const CDSContent = () => {
  return (
    <div className="space-y-8">
      {/* Overview Section */}
      <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Brain className="h-6 w-6 text-purple-600" />
            Cognitive Disengagement Syndrome (CDS) - Complete Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Cognitive Disengagement Syndrome (CDS), formerly known as Sluggish Cognitive Tempo (SCT), 
            represents a distinct neurodevelopmental condition characterized by daydreaming, mental fogginess, 
            and slowed processing speed that affects millions worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <div className="text-2xl font-bold text-purple-600">2-6%</div>
              <div className="text-sm text-gray-600">Children affected globally</div>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <div className="text-2xl font-bold text-indigo-600">30-50%</div>
              <div className="text-sm text-gray-600">Comorbid with ADHD</div>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <div className="text-2xl font-bold text-pink-600">2:1</div>
              <div className="text-sm text-gray-600">More common in girls</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="definition" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="definition">Definition</TabsTrigger>
          <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
          <TabsTrigger value="diagnosis">Diagnosis</TabsTrigger>
          <TabsTrigger value="treatment">Treatment</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="definition" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                What is Cognitive Disengagement Syndrome?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Historical Context</h3>
                  <p className="text-gray-700 leading-relaxed">
                    CDS was first identified in the 1980s by Dr. Russell Barkley and colleagues as a cluster of symptoms 
                    that seemed distinct from ADHD. Originally termed "Sluggish Cognitive Tempo," the condition was 
                    renamed to better reflect its core features and reduce stigma associated with the previous terminology.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Core Characteristics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Cognitive Features</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
                        <li>Slowed information processing</li>
                        <li>Difficulty with working memory</li>
                        <li>Reduced mental energy</li>
                        <li>Impaired sustained attention</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Behavioral Features</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-green-700">
                        <li>Appearing "spacey" or dreamy</li>
                        <li>Slow task completion</li>
                        <li>Social withdrawal tendencies</li>
                        <li>Reduced physical activity</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Neurobiological Basis</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Recent neuroimaging studies suggest CDS involves dysfunction in several brain networks:
                  </p>
                  <div className="space-y-3">
                    <div className="border-l-4 border-purple-400 pl-4">
                      <h4 className="font-semibold">Default Mode Network (DMN)</h4>
                      <p className="text-sm text-gray-600">Hyperactivation during tasks requiring focused attention</p>
                    </div>
                    <div className="border-l-4 border-blue-400 pl-4">
                      <h4 className="font-semibold">Salience Network</h4>
                      <p className="text-sm text-gray-600">Reduced ability to switch between internal and external focus</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-4">
                      <h4 className="font-semibold">Central Executive Network</h4>
                      <p className="text-sm text-gray-600">Impaired working memory and cognitive control</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="symptoms" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Comprehensive Symptom Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Primary Symptoms</h3>
                  <div className="space-y-3">
                    {[
                      { symptom: "Daydreaming", description: "Frequent periods of mind-wandering, especially during tasks requiring sustained attention" },
                      { symptom: "Mental Fogginess", description: "Feeling unclear or confused in thinking, difficulty organizing thoughts" },
                      { symptom: "Slow Processing Speed", description: "Taking longer than peers to complete tasks or respond to questions" },
                      { symptom: "Staring Episodes", description: "Appearing to stare blankly or seem lost in thought for extended periods" },
                      { symptom: "Hypoactivity", description: "Lower energy levels and reduced physical activity compared to peers" }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-semibold text-gray-800">{item.symptom}</div>
                        <div className="text-sm text-gray-600 mt-1">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Secondary Symptoms</h3>
                  <div className="space-y-3">
                    {[
                      { category: "Academic", symptoms: ["Inconsistent performance", "Difficulty with timed tests", "Poor organization"] },
                      { category: "Social", symptoms: ["Social withdrawal", "Difficulty initiating conversations", "Appearing disinterested"] },
                      { category: "Emotional", symptoms: ["Low self-esteem", "Anxiety about performance", "Mood variability"] },
                      { category: "Physical", symptoms: ["Fatigue", "Sleep disturbances", "Poor coordination"] }
                    ].map((category, index) => (
                      <div key={index} className="bg-blue-50 p-3 rounded-lg">
                        <div className="font-semibold text-blue-800">{category.category}</div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {category.symptoms.map((symptom, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">{symptom}</Badge>
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

        <TabsContent value="diagnosis" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Microscope className="h-5 w-5" />
                Diagnostic Approaches and Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Current Diagnostic Status</h3>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <p className="text-yellow-800">
                    <strong>Important Note:</strong> CDS is not yet officially recognized in the DSM-5-TR or ICD-11. 
                    However, research is ongoing to establish formal diagnostic criteria.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Assessment Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-blue-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Rating Scales</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Child Concentration Inventory (CCI)</li>
                        <li>• Sluggish Cognitive Tempo Scale</li>
                        <li>• Barkley CDS Rating Scale</li>
                        <li>• Conners 3rd Edition (SCT subscale)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Clinical Assessments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Comprehensive developmental history</li>
                        <li>• Cognitive testing (IQ, processing speed)</li>
                        <li>• Attention and executive function tests</li>
                        <li>• Academic achievement assessment</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Differential Diagnosis</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-lg mb-3">CDS vs. ADHD</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-purple-600 mb-2">CDS Characteristics</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Underactive/hypoactive</li>
                          <li>• Slow, sluggish behavior</li>
                          <li>• Daydreaming and mental fog</li>
                          <li>• Social withdrawal</li>
                          <li>• Processing speed deficits</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-orange-600 mb-2">ADHD Characteristics</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Hyperactive/impulsive</li>
                          <li>• Fast, restless behavior</li>
                          <li>• Distractibility and inattention</li>
                          <li>• Social impulsivity</li>
                          <li>• Working memory deficits</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="treatment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Treatment Approaches and Interventions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Behavioral Interventions</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Cognitive Training</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Working memory training programs</li>
                        <li>• Attention training exercises</li>
                        <li>• Processing speed improvement activities</li>
                        <li>• Mindfulness and meditation practices</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Environmental Modifications</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Reduced distractions in learning environment</li>
                        <li>• Extended time for task completion</li>
                        <li>• Frequent breaks and movement opportunities</li>
                        <li>• Visual cues and organizational aids</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Medical Interventions</h3>
                  <div className="space-y-3">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Pharmacological Options</h4>
                      <ul className="text-sm text-purple-700 space-y-1">
                        <li>• Stimulant medications (limited efficacy)</li>
                        <li>• Non-stimulant alternatives</li>
                        <li>• Modafinil for processing speed</li>
                        <li>• Individualized medication trials</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Alternative Therapies</h4>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• Neurofeedback training</li>
                        <li>• Cognitive behavioral therapy</li>
                        <li>• Occupational therapy</li>
                        <li>• Exercise and physical activity programs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="research" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Current Research and Future Directions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Recent Research Findings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    {[
                      {
                        title: "Neuroimaging Studies",
                        findings: ["Altered default mode network activity", "Reduced salience network connectivity", "Frontal lobe hypoactivation"]
                      },
                      {
                        title: "Genetic Research",
                        findings: ["Potential genetic markers identified", "Heritability estimates around 0.6", "Gene-environment interactions"]
                      }
                    ].map((study, index) => (
                      <Card key={index} className="border-blue-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-blue-800">{study.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1">
                            {study.findings.map((finding, idx) => (
                              <li key={idx}>• {finding}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      {
                        title: "Treatment Studies",
                        findings: ["Mindfulness interventions show promise", "Cognitive training effectiveness", "Pharmacological response patterns"]
                      },
                      {
                        title: "Longitudinal Research",
                        findings: ["Persistence into adulthood", "Academic outcome predictions", "Comorbidity development patterns"]
                      }
                    ].map((study, index) => (
                      <Card key={index} className="border-green-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-green-800">{study.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1">
                            {study.findings.map((finding, idx) => (
                              <li key={idx}>• {finding}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Support Organizations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-400 pl-3">
                    <h4 className="font-semibold">CHADD (Children and Adults with ADHD)</h4>
                    <p className="text-sm text-gray-600">Provides resources and support for CDS research</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-3">
                    <h4 className="font-semibold">ADDitude Magazine</h4>
                    <p className="text-sm text-gray-600">Regular articles on CDS developments</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-3">
                    <h4 className="font-semibold">CDS Research Consortium</h4>
                    <p className="text-sm text-gray-600">Leading research on diagnostic criteria</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Key Publications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold">Barkley, R. A. (2023)</div>
                    <div className="text-gray-600">"Cognitive Disengagement Syndrome: A New Understanding"</div>
                    <div className="text-xs text-blue-600">Clinical Psychology Review</div>
                  </div>
                  <div>
                    <div className="font-semibold">Carlson, C. L. & Mann, M. (2022)</div>
                    <div className="text-gray-600">"Sluggish Cognitive Tempo Predicts Academic Functioning"</div>
                    <div className="text-xs text-blue-600">Journal of Abnormal Child Psychology</div>
                  </div>
                  <div>
                    <div className="font-semibold">Becker, S. P. (2021)</div>
                    <div className="text-gray-600">"CDS in Adolescents: Prevalence and Correlates"</div>
                    <div className="text-xs text-blue-600">Developmental Psychology</div>
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

export default CDSContent;
