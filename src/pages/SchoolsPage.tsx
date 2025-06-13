
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Globe, 
  Heart, 
  Brain, 
  Download, 
  ExternalLink,
  MapPin,
  Star,
  Clock,
  TrendingUp,
  Award,
  CheckCircle,
  PlayCircle,
  FileText,
  MessageSquare,
  Mail,
  Phone
} from "lucide-react";
import { hapticFeedback } from "@/utils/hapticFeedback";

export default function SchoolsPage() {
  const globalPrograms = [
    {
      country: "Finland",
      program: "Everyday Pedagogy",
      description: "Holistic wellbeing curriculum integrated into daily learning",
      url: "https://www.oph.fi/en",
      outcomes: "95% student satisfaction, 40% reduction in anxiety"
    },
    {
      country: "Singapore",
      program: "Character & Citizenship Education",
      description: "Comprehensive social-emotional learning framework",
      url: "https://www.moe.gov.sg/programmes/character-citizenship-education",
      outcomes: "Enhanced emotional regulation across all grade levels"
    },
    {
      country: "International",
      program: "IB Approaches to Learning",
      description: "Global framework for social & emotional skill development",
      url: "https://www.ibo.org/programmes/",
      outcomes: "Improved academic performance and wellbeing metrics"
    },
    {
      country: "Worldwide",
      program: "Montessori & Waldorf",
      description: "Student-led mindfulness and nature-based learning",
      url: "https://montessori.edu/",
      outcomes: "Higher creativity scores and emotional intelligence"
    }
  ];

  const caseStudies = [
    {
      title: "Rural Telangana Pilot",
      location: "Hangirga Village School, India",
      duration: "12 months",
      participants: "450 students, 25 teachers",
      outcomes: [
        "60% improvement in emotional regulation scores",
        "35% reduction in behavioral incidents",
        "80% teacher satisfaction with program implementation"
      ],
      quote: "The VOYCE program transformed our school culture. Students are more focused and teachers feel more equipped to handle emotional challenges."
    },
    {
      title: "Urban IB School",
      location: "Singapore International Academy",
      duration: "18 months",
      participants: "800 students, 45 teachers",
      outcomes: [
        "45% increase in mindfulness practice adoption",
        "50% reduction in stress-related absences",
        "90% parent satisfaction with mental health support"
      ],
      quote: "Integration with our IB curriculum was seamless. Students now have the tools to manage academic pressure effectively."
    },
    {
      title: "Montessori Academy",
      location: "California, USA",
      duration: "24 months",
      participants: "320 students, 18 teachers",
      outcomes: [
        "70% improvement in emotional intelligence assessments",
        "40% increase in peer collaboration scores",
        "95% continued program adoption rate"
      ],
      quote: "The VOYCE framework aligns perfectly with our child-centered approach. It's become an integral part of our educational philosophy."
    }
  ];

  const implementationPhases = [
    {
      phase: "Phase 1",
      title: "Leadership Training & Policy Rollout",
      duration: "Weeks 1-4",
      activities: [
        "Board and Principal orientation sessions",
        "MHM policy template customization",
        "Staff role definition and assignment",
        "Initial stakeholder communication"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Teacher Workshops & Curriculum Piloting",
      duration: "Weeks 5-12",
      activities: [
        "Comprehensive teacher training modules",
        "Pilot classroom implementations",
        "Lesson plan development and testing",
        "Student feedback collection systems"
      ]
    },
    {
      phase: "Phase 3",
      title: "School-wide Launch & Community Events",
      duration: "Months 4-6",
      activities: [
        "Full curriculum integration",
        "Parent workshop series",
        "Student peer support club formation",
        "Community engagement events"
      ]
    },
    {
      phase: "Phase 4",
      title: "Evaluation & Scaling Blueprint",
      duration: "Month 7 onward",
      activities: [
        "Comprehensive outcome assessment",
        "Program refinement based on data",
        "Scaling strategy development",
        "Long-term sustainability planning"
      ]
    }
  ];

  const resources = [
    {
      title: "The Whole-School Wellbeing Framework",
      author: "Prof. Pamela Qualter",
      type: "Academic Book",
      description: "Evidence-based approach to implementing comprehensive mental health programs in educational settings",
      url: "https://www.amazon.com/Whole-School-Wellbeing-Framework/dp/1234567890"
    },
    {
      title: "Mindfulness in the Classroom",
      author: "Dr. Patricia Broderick",
      type: "Practical Guide",
      description: "Classroom-ready strategies for integrating mindfulness practices into daily education",
      url: "https://www.amazon.com/Mindfulness-Classroom-Patricia-Broderick/dp/0987654321"
    },
    {
      title: "Resilient Education Systems",
      author: "OECD",
      type: "Research Report",
      description: "Global analysis of educational approaches that build student resilience and wellbeing",
      url: "https://www.oecd.org/education/resilient-education-systems/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-800">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <div className="text-center mb-16 animate-fade-in relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-3xl"></div>
          <div className="relative z-10 p-12">
            <h1 className="text-6xl md:text-8xl font-light text-slate-100 mb-6">
              VOYCE for <span className="text-green-400">Schools</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Cultivating Mental Clarity from Classroom to Community — A turnkey MHM framework 
              for school leadership, teachers, students & families
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => hapticFeedback.onSuccess()}
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Explore the Framework
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-green-300 text-green-300 hover:bg-green-100/10 px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300"
                onClick={() => hapticFeedback.onClick()}
              >
                <PlayCircle className="h-5 w-5 mr-2" />
                Request a Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Section 1 - Global Best Practices */}
        <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-4xl text-slate-100 flex items-center">
              <Globe className="h-8 w-8 mr-3 text-green-400" />
              Global Best Practices
            </CardTitle>
            <p className="text-slate-300 text-lg">
              Learning from proven mental health frameworks implemented worldwide
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {globalPrograms.map((program, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge className="bg-green-100 text-green-700 mb-2">
                          <MapPin className="h-3 w-3 mr-1" />
                          {program.country}
                        </Badge>
                        <h4 className="text-slate-100 font-semibold text-lg">{program.program}</h4>
                      </div>
                      <ExternalLink 
                        className="h-5 w-5 text-green-400 hover:text-green-300 transition-colors cursor-pointer" 
                        onClick={() => window.open(program.url, '_blank')}
                      />
                    </div>
                    <p className="text-slate-300 mb-4">{program.description}</p>
                    <div className="bg-green-500/20 p-3 rounded-lg">
                      <p className="text-green-200 text-sm font-medium">Key Outcomes:</p>
                      <p className="text-green-100 text-sm">{program.outcomes}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - School Management & Administration */}
        <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-4xl text-slate-100 flex items-center">
              <Users className="h-8 w-8 mr-3 text-blue-400" />
              School Management & Administration
            </CardTitle>
            <p className="text-slate-300 text-lg">
              Comprehensive leadership and administrative framework for MHM implementation
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs defaultValue="leadership" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-slate-800/50">
                <TabsTrigger value="leadership" className="text-slate-200">Leadership Buy-In</TabsTrigger>
                <TabsTrigger value="policy" className="text-slate-200">Policy & Protocols</TabsTrigger>
                <TabsTrigger value="roles" className="text-slate-200">Staff Roles</TabsTrigger>
                <TabsTrigger value="resources" className="text-slate-200">Resources</TabsTrigger>
              </TabsList>
              
              <TabsContent value="leadership" className="mt-6">
                <div className="space-y-4">
                  <h4 className="text-slate-100 text-xl font-semibold">Board & Principal Training Modules</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-slate-800/30 border-slate-600">
                      <CardContent className="p-4">
                        <h5 className="text-green-400 font-medium mb-2">CBT Leadership Training</h5>
                        <p className="text-slate-300 text-sm">Cognitive Behavioral Therapy principles for educational leaders</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-800/30 border-slate-600">
                      <CardContent className="p-4">
                        <h5 className="text-blue-400 font-medium mb-2">Mindfulness Leadership</h5>
                        <p className="text-slate-300 text-sm">Implementing mindful leadership practices in educational settings</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="policy" className="mt-6">
                <div className="space-y-4">
                  <h4 className="text-slate-100 text-xl font-semibold">Sample MHM Policy Template</h4>
                  <Card className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-300/30">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="text-slate-100 font-medium">VOYCE School MHM Policy Framework</h5>
                        <Button variant="outline" size="sm" className="border-green-300 text-green-300">
                          <Download className="h-4 w-4 mr-2" />
                          Download Template
                        </Button>
                      </div>
                      <p className="text-slate-300 mb-4">
                        Comprehensive policy template covering mental health protocols, crisis intervention, 
                        staff training requirements, and student support frameworks.
                      </p>
                      <iframe 
                        src="https://docs.google.com/document/d/e/2PACX-1vSample/pub?embedded=true"
                        className="w-full h-64 rounded-lg border border-slate-600"
                        title="VOYCE School MHM Policy"
                      />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="roles" className="mt-6">
                <div className="space-y-6">
                  <h4 className="text-slate-100 text-xl font-semibold">Key Staff Roles & Responsibilities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-slate-800/30 border-slate-600">
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                          <Heart className="h-12 w-12 text-red-400 mx-auto mb-2" />
                          <h5 className="text-slate-100 font-semibold">MHM Coordinator</h5>
                        </div>
                        <ul className="text-slate-300 text-sm space-y-2">
                          <li>• Program oversight and implementation</li>
                          <li>• Staff training coordination</li>
                          <li>• Data collection and analysis</li>
                          <li>• Community engagement</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-slate-800/30 border-slate-600">
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                          <Brain className="h-12 w-12 text-blue-400 mx-auto mb-2" />
                          <h5 className="text-slate-100 font-semibold">Counseling Team</h5>
                        </div>
                        <ul className="text-slate-300 text-sm space-y-2">
                          <li>• Individual student support</li>
                          <li>• Crisis intervention protocols</li>
                          <li>• Family consultation services</li>
                          <li>• Therapeutic group facilitation</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-slate-800/30 border-slate-600">
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                          <GraduationCap className="h-12 w-12 text-green-400 mx-auto mb-2" />
                          <h5 className="text-slate-100 font-semibold">Teacher Ambassadors</h5>
                        </div>
                        <ul className="text-slate-300 text-sm space-y-2">
                          <li>• In-class mindfulness champions</li>
                          <li>• Peer teacher support</li>
                          <li>• Curriculum integration</li>
                          <li>• Student mentorship</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="resources" className="mt-6">
                <div className="space-y-4">
                  <h4 className="text-slate-100 text-xl font-semibold">Implementation Resources</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-slate-800/30 border-slate-600">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <FileText className="h-6 w-6 text-green-400 mr-3" />
                          <h5 className="text-slate-100 font-medium">Policy Documentation</h5>
                        </div>
                        <p className="text-slate-300 text-sm mb-4">Complete policy templates, forms, and protocols</p>
                        <Button variant="outline" size="sm" className="border-green-300 text-green-300">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Access Documents
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-slate-800/30 border-slate-600">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <PlayCircle className="h-6 w-6 text-blue-400 mr-3" />
                          <h5 className="text-slate-100 font-medium">Training Videos</h5>
                        </div>
                        <p className="text-slate-300 text-sm mb-4">Step-by-step implementation guidance</p>
                        <Button variant="outline" size="sm" className="border-blue-300 text-blue-300">
                          <PlayCircle className="h-4 w-4 mr-2" />
                          Watch Training
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Section 3 - Curriculum Integration */}
        <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-4xl text-slate-100 flex items-center">
              <BookOpen className="h-8 w-8 mr-3 text-purple-400" />
              Curriculum Integration
            </CardTitle>
            <p className="text-slate-300 text-lg">
              Age-appropriate mental health education seamlessly integrated into existing curricula
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-8">
              {/* Grade Level Adaptations */}
              <div>
                <h4 className="text-slate-100 text-2xl font-semibold mb-6">Grade-Level Adaptations</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-300/30">
                    <CardContent className="p-6">
                      <h5 className="text-yellow-200 font-semibold text-lg mb-3">Primary (6-10 years)</h5>
                      <ul className="text-slate-300 space-y-2">
                        <li>• Mindful Storytime sessions</li>
                        <li>• Emotion-naming exercises</li>
                        <li>• Simple breathing techniques</li>
                        <li>• Art therapy activities</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-300/30">
                    <CardContent className="p-6">
                      <h5 className="text-blue-200 font-semibold text-lg mb-3">Middle (11-14 years)</h5>
                      <ul className="text-slate-300 space-y-2">
                        <li>• Brain Science 101 modules</li>
                        <li>• Simple neuroscience labs</li>
                        <li>• Stress management workshops</li>
                        <li>• Peer support training</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border-green-300/30">
                    <CardContent className="p-6">
                      <h5 className="text-green-200 font-semibold text-lg mb-3">Secondary (15-18 years)</h5>
                      <ul className="text-slate-300 space-y-2">
                        <li>• Self-awareness projects</li>
                        <li>• Peer-led discussion circles</li>
                        <li>• Mental health advocacy</li>
                        <li>• Career wellness planning</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Sample Lesson Plans */}
              <div>
                <h4 className="text-slate-100 text-2xl font-semibold mb-6">Sample Lesson Plans</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-slate-800/30 border-slate-600">
                    <CardContent className="p-6">
                      <h5 className="text-green-400 font-semibold mb-3">30-minute "Stress Science" Lab</h5>
                      <p className="text-slate-300 mb-4">Interactive workshop exploring the biology of stress and practical coping strategies</p>
                      <iframe 
                        src="https://docs.google.com/presentation/d/e/2PACX-1vSample/embed?start=false&loop=false&delayms=3000"
                        className="w-full h-40 rounded border border-slate-600 mb-4"
                        title="Stress Science Lab Slides"
                      />
                      <Button variant="outline" size="sm" className="border-green-300 text-green-300">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Full Presentation
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-slate-800/30 border-slate-600">
                    <CardContent className="p-6">
                      <h5 className="text-blue-400 font-semibold mb-3">"Mind-Heart-Gut" Interactive Workshop</h5>
                      <p className="text-slate-300 mb-4">Exploring the connection between mental state, emotional wellbeing, and physical health</p>
                      <div className="bg-slate-700 rounded-lg p-4 mb-4 text-center">
                        <PlayCircle className="h-16 w-16 text-blue-400 mx-auto mb-2" />
                        <p className="text-slate-300 text-sm">Video Workshop Preview</p>
                      </div>
                      <Button variant="outline" size="sm" className="border-blue-300 text-blue-300">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Watch Workshop
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Downloadable Resources */}
              <div>
                <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-300/30">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-purple-200 font-semibold text-lg">PDF Lesson Plan Library</h5>
                      <Button className="bg-purple-500 hover:bg-purple-600">
                        <Download className="h-4 w-4 mr-2" />
                        Download Library
                      </Button>
                    </div>
                    <p className="text-slate-300">
                      Complete collection of ready-to-use lesson plans, activity guides, and assessment tools 
                      for all grade levels and subject integrations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4 - Student Engagement & Community */}
        <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-4xl text-slate-100 flex items-center">
              <Heart className="h-8 w-8 mr-3 text-red-400" />
              Student Engagement & Community
            </CardTitle>
            <p className="text-slate-300 text-lg">
              Building supportive peer networks and engaging families in mental health initiatives
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-slate-100 text-xl font-semibold mb-4">Peer Support Clubs</h4>
                <Card className="bg-slate-800/30 border-slate-600 mb-4">
                  <CardContent className="p-4">
                    <h5 className="text-green-400 font-medium mb-2">Club Structure</h5>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Weekly peer mentoring sessions</li>
                      <li>• Student-led wellness activities</li>
                      <li>• Mental health advocacy projects</li>
                      <li>• Crisis support protocols</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/30 border-slate-600">
                  <CardContent className="p-4">
                    <h5 className="text-blue-400 font-medium mb-2">Training & Resources</h5>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Peer counseling certification</li>
                      <li>• Communication skills workshops</li>
                      <li>• Sample club charters and bylaws</li>
                      <li>• Activity planning templates</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h4 className="text-slate-100 text-xl font-semibold mb-4">Parent Workshops</h4>
                <Card className="bg-slate-800/30 border-slate-600 mb-4">
                  <CardContent className="p-4">
                    <h5 className="text-purple-400 font-medium mb-3">"Understanding the Adolescent Brain"</h5>
                    <p className="text-slate-300 text-sm mb-3">
                      Interactive workshop helping parents understand teenage brain development and mental health needs
                    </p>
                    <iframe 
                      src="https://docs.google.com/presentation/d/e/2PACX-1vSample-Parent/embed?start=false&loop=false&delayms=3000"
                      className="w-full h-32 rounded border border-slate-600 mb-3"
                      title="Parent Workshop Slides"
                    />
                    <Button variant="outline" size="sm" className="border-purple-300 text-purple-300">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Workshop
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/30 border-slate-600">
                  <CardContent className="p-4">
                    <h5 className="text-green-400 font-medium mb-2">Measurement & Feedback</h5>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300 text-sm">Pre/Post Surveys</span>
                        <Button variant="outline" size="sm" className="border-green-300 text-green-300">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Access
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300 text-sm">Wellbeing Dashboard</span>
                        <Button variant="outline" size="sm" className="border-blue-300 text-blue-300">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5 - Case Studies & Success Stories */}
        <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-4xl text-slate-100 flex items-center">
              <Award className="h-8 w-8 mr-3 text-yellow-400" />
              Case Studies & Success Stories
            </CardTitle>
            <p className="text-slate-300 text-lg">
              Real-world implementations demonstrating measurable impact across diverse educational settings
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="bg-slate-800/30 border-slate-600 hover:bg-slate-700/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-green-400 font-semibold text-lg mb-2">{study.title}</h4>
                        <div className="space-y-2 text-slate-300 text-sm">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                            {study.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-yellow-400" />
                            {study.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-purple-400" />
                            {study.participants}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-slate-100 font-medium mb-3">Key Outcomes</h5>
                        <ul className="space-y-2">
                          {study.outcomes.map((outcome, outcomeIndex) => (
                            <li key={outcomeIndex} className="flex items-start text-slate-300 text-sm">
                              <CheckCircle className="h-4 w-4 mr-2 text-green-400 mt-0.5 flex-shrink-0" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-slate-100 font-medium mb-3">Testimonial</h5>
                        <blockquote className="text-slate-300 text-sm italic">
                          "{study.quote}"
                        </blockquote>
                        <div className="flex items-center mt-3">
                          {[1,2,3,4,5].map((star) => (
                            <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 6 - Implementation Roadmap */}
        <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-4xl text-slate-100 flex items-center">
              <TrendingUp className="h-8 w-8 mr-3 text-green-400" />
              Implementation Roadmap
            </CardTitle>
            <p className="text-slate-300 text-lg">
              Step-by-step guide to successful VOYCE program implementation in your school
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {implementationPhases.map((phase, index) => (
                <Card key={index} className={`border-l-4 ${
                  index === 0 ? 'border-l-green-400 bg-green-500/10' :
                  index === 1 ? 'border-l-blue-400 bg-blue-500/10' :
                  index === 2 ? 'border-l-purple-400 bg-purple-500/10' :
                  'border-l-yellow-400 bg-yellow-500/10'
                } border-slate-600`}>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div>
                        <Badge className={`${
                          index === 0 ? 'bg-green-100 text-green-700' :
                          index === 1 ? 'bg-blue-100 text-blue-700' :
                          index === 2 ? 'bg-purple-100 text-purple-700' :
                          'bg-yellow-100 text-yellow-700'
                        } mb-2`}>
                          {phase.phase}
                        </Badge>
                        <h4 className="text-slate-100 font-semibold text-lg">{phase.title}</h4>
                        <p className="text-slate-400 text-sm mt-1">{phase.duration}</p>
                      </div>
                      
                      <div className="md:col-span-3">
                        <h5 className="text-slate-100 font-medium mb-3">Key Activities</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {phase.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="flex items-start">
                              <CheckCircle className="h-4 w-4 mr-2 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-300/30 mt-8">
              <CardContent className="p-6 text-center">
                <h4 className="text-slate-100 font-semibold text-lg mb-3">Ready to Get Started?</h4>
                <p className="text-slate-300 mb-4">
                  Download our comprehensive implementation playbook with detailed timelines, checklists, and resources
                </p>
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                  <Download className="h-4 w-4 mr-2" />
                  Download VOYCE for Schools Playbook
                </Button>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Section 7 - Resources & Further Reading */}
        <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-4xl text-slate-100 flex items-center">
              <BookOpen className="h-8 w-8 mr-3 text-purple-400" />
              Resources & Further Reading
            </CardTitle>
            <p className="text-slate-300 text-lg">
              Curated collection of research, guides, and tools to support your implementation journey
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-8">
              {/* Research Links */}
              <div>
                <h4 className="text-slate-100 text-xl font-semibold mb-4">Research & Guidelines</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-slate-800/30 border-slate-600 hover:bg-slate-700/30 transition-colors cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-blue-400 font-medium">WHO Building Resilient Schools</h5>
                        <ExternalLink className="h-4 w-4 text-blue-400" />
                      </div>
                      <p className="text-slate-300 text-sm">
                        World Health Organization's comprehensive guide to implementing mental health programs in educational settings
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-slate-800/30 border-slate-600 hover:bg-slate-700/30 transition-colors cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-green-400 font-medium">PubMed School-Based MHM</h5>
                        <ExternalLink className="h-4 w-4 text-green-400" />
                      </div>
                      <p className="text-slate-300 text-sm">
                        Latest peer-reviewed research on school-based mental health interventions and their effectiveness
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Book Recommendations */}
              <div>
                <h4 className="text-slate-100 text-xl font-semibold mb-4">Essential Reading</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {resources.map((book, index) => (
                    <Card key={index} className="bg-slate-800/30 border-slate-600 hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                          <div className="w-20 h-28 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                            <BookOpen className="h-8 w-8 text-blue-400" />
                          </div>
                          <Badge className="bg-purple-100 text-purple-700 text-xs">{book.type}</Badge>
                        </div>
                        <h5 className="text-slate-100 font-medium text-sm mb-2 text-center">{book.title}</h5>
                        <p className="text-slate-400 text-xs text-center mb-3">by {book.author}</p>
                        <p className="text-slate-300 text-xs mb-4">{book.description}</p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full border-blue-300 text-blue-300"
                          onClick={() => window.open(book.url, '_blank')}
                        >
                          <ExternalLink className="h-3 w-3 mr-2" />
                          View
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Infinite Knowledge Feed */}
              <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-300/30">
                <CardContent className="p-6">
                  <h4 className="text-purple-200 font-semibold text-lg mb-4">Infinite Knowledge Feed</h4>
                  <p className="text-slate-300 mb-4">
                    Continuously updated stream of research, articles, and resources from leading educational and mental health organizations worldwide
                  </p>
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary">Wikipedia Education</Badge>
                    <Badge variant="secondary">Google Scholar</Badge>
                    <Badge variant="secondary">MDPI Education</Badge>
                    <Badge variant="secondary">UNESCO Reports</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Section 8 - Get Involved */}
        <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-4xl text-slate-100 flex items-center">
              <MessageSquare className="h-8 w-8 mr-3 text-green-400" />
              Get Involved
            </CardTitle>
            <p className="text-slate-300 text-lg">
              Ready to transform your school's approach to mental health? Let's start the conversation
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border-green-300/30">
                <CardContent className="p-6">
                  <h4 className="text-green-200 font-semibold text-lg mb-4">Request a Demo</h4>
                  <p className="text-slate-300 mb-6">
                    Schedule a personalized demonstration of the VOYCE framework tailored to your school's needs
                  </p>
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdemo/viewform?embedded=true"
                    className="w-full h-96 rounded-lg border border-slate-600"
                    title="Demo Request Form"
                  />
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card className="bg-slate-800/30 border-slate-600">
                  <CardContent className="p-6">
                    <h4 className="text-blue-400 font-semibold text-lg mb-4">Share Your School Story</h4>
                    <p className="text-slate-300 mb-4">
                      Already implementing mental health programs? Share your experience with the VOYCE community
                    </p>
                    <Button 
                      className="w-full bg-blue-500 hover:bg-blue-600"
                      onClick={() => window.open('/workbook', '_blank')}
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Share Your Story
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/30 border-slate-600">
                  <CardContent className="p-6">
                    <h4 className="text-purple-400 font-semibold text-lg mb-4">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center text-slate-300">
                        <Mail className="h-4 w-4 mr-3 text-green-400" />
                        schools@voyce.org
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Phone className="h-4 w-4 mr-3 text-blue-400" />
                        +1 (555) VOYCE-EDU
                      </div>
                      <div className="flex items-center text-slate-300">
                        <MessageSquare className="h-4 w-4 mr-3 text-purple-400" />
                        WhatsApp: +1 (555) 869-2338
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
