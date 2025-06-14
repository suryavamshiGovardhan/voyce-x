
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Zap, BookOpen, Users, Stethoscope, Leaf, Target, ArrowRight, Sparkles, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { hapticFeedback } from "@/utils/hapticFeedback";
import { useEffect, useRef, useState } from "react";

const welcomeMessages = [
  "A calm mind is a strong mind.",
  "Each day is a new beginning.",
  "Find peace in the small moments.",
  "Breathe deeply, you are capable.",
  "The journey of a thousand miles begins with a single step.",
  "Your mental wellness matters.",
  "Every step forward is progress.",
  "You have the strength within you."
];

export default function Index() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % welcomeMessages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const buttons = sectionRef.current?.querySelectorAll('button, a');
    buttons?.forEach(button => {
      button.addEventListener('click', () => hapticFeedback.onClick());
      button.addEventListener('mouseenter', () => hapticFeedback.onHover());
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-green-50" ref={sectionRef}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Enhanced Hero Section with 3D Elements */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-blue-600 via-green-600 to-purple-600 overflow-hidden">
          {/* Floating 3D particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-pulse opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              >
                <div className="w-2 h-2 bg-white rounded-full transform hover:scale-150 transition-transform duration-300"></div>
              </div>
            ))}
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-8 space-x-4 transform hover:scale-110 transition-transform duration-500">
              <Brain className="h-16 w-16 text-white animate-pulse hover:rotate-12 transition-transform duration-300" />
              <Heart className="h-20 w-20 text-pink-200 animate-bounce hover:scale-125 transition-transform duration-300" />
              <Zap className="h-16 w-16 text-yellow-200 animate-pulse hover:-rotate-12 transition-transform duration-300" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 transform hover:scale-105 transition-transform duration-300">
              <span className="text-blue-200 hover:text-blue-100 transition-colors duration-300">VOYCE</span>{" "}
              <span className="text-green-200 hover:text-green-100 transition-colors duration-300">Academy</span>
            </h1>
            
            <div className="min-h-[60px] flex items-center justify-center mb-8">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-yellow-300 animate-spin" />
                <p className="text-2xl text-white font-light italic transition-all duration-1000 transform hover:scale-105">
                  {welcomeMessages[currentMessage]}
                </p>
                <Sparkles className="h-6 w-6 text-yellow-300 animate-spin" />
              </div>
            </div>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed transform hover:scale-105 transition-transform duration-300">
              Mental Clarity, Emotional Freedom — Your journey to understanding the mind, brain, and heart connection
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <Button asChild size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-8 py-4 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-2xl">
                <Link to="/voyce">
                  Discover VOYCE
                  <Leaf className="ml-2 h-5 w-5 animate-bounce" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-2xl">
                <Link to="/path">
                  Begin Your Path
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-lg border-blue-200 shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-500">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-6 transform hover:scale-110 transition-transform duration-300">
                  <Brain className="h-12 w-12 text-blue-600 mr-3 hover:rotate-180 transition-transform duration-500" />
                  <h2 className="text-4xl font-bold text-slate-800">Welcome to VOYCE</h2>
                  <Heart className="ml-3 h-12 w-12 text-green-500 hover:scale-125 transition-transform duration-300" />
                </div>
                
                <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6 transform hover:scale-105 transition-transform duration-300">
                  Your journey towards mental wellness starts here. Access resources, connect with support, 
                  and discover tools designed for comprehensive mental health understanding.
                </p>
                
                <Button asChild className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 text-lg shadow-lg transform hover:scale-110 hover:-translate-y-2 transition-all duration-300">
                  <Link to="/dashboard">Begin Your Journey</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Topics Grid with 3D Effects */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 transform hover:scale-105 transition-transform duration-300">
              Explore Mental Health Topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Stress",
                  icon: Brain,
                  color: "blue",
                  path: "/stress",
                  description: "Understanding and managing stress in daily life"
                },
                {
                  title: "Trauma",
                  icon: Heart,
                  color: "purple",
                  path: "/trauma",
                  description: "Healing from traumatic experiences with evidence-based approaches"
                },
                {
                  title: "ADHD",
                  icon: Zap,
                  color: "orange",
                  path: "/adhd",
                  description: "Managing attention and focus with practical strategies"
                },
                {
                  title: "Brain Science",
                  icon: Stethoscope,
                  color: "green",
                  path: "/brain",
                  description: "How your brain works and neuroplasticity"
                },
                {
                  title: "Mind-Heart-Gut",
                  icon: Target,
                  color: "pink",
                  path: "/mind-heart-gut",
                  description: "The connection trilogy for holistic wellness"
                },
                {
                  title: "Neuroscience",
                  icon: Brain,
                  color: "indigo",
                  path: "/neuroscience",
                  description: "The science of the nervous system and consciousness"
                },
                {
                  title: "Schools",
                  icon: BookOpen,
                  color: "teal",
                  path: "/schools",
                  description: "Mental health in educational environments"
                },
                {
                  title: "Community",
                  icon: Users,
                  color: "cyan",
                  path: "/library",
                  description: "Resources, support, and shared experiences"
                }
              ].map((topic, index) => (
                <Card 
                  key={topic.title} 
                  className="hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white border border-gray-200 transform hover:scale-110 hover:-translate-y-4 hover:rotate-1"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <Link to={topic.path}>
                    <CardContent className="p-6 text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <topic.icon className={`w-12 h-12 mx-auto mb-4 text-${topic.color}-500 transform hover:scale-125 hover:rotate-12 transition-all duration-300 relative z-10`} />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 relative z-10 transform hover:scale-105 transition-transform duration-300">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-gray-600 relative z-10 leading-relaxed">
                        {topic.description}
                      </p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access with Enhanced Animations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 transform hover:scale-105 transition-transform duration-300">
              Quick Access
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-blue-50 hover:bg-blue-100 transition-all duration-500 border border-blue-200 transform hover:scale-110 hover:-translate-y-6 hover:rotate-2 shadow-lg hover:shadow-2xl">
                <Link to="/tools">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <Zap className="w-12 h-12 mx-auto mb-4 text-blue-600 transform hover:scale-125 hover:rotate-180 transition-all duration-500 relative z-10" />
                    <h3 className="text-xl font-semibold text-blue-900 mb-3 relative z-10">Tools & Resources</h3>
                    <p className="text-blue-700 relative z-10 leading-relaxed">Interactive tools for mental wellness and self-assessment</p>
                  </CardContent>
                </Link>
              </Card>
              
              <Card className="bg-green-50 hover:bg-green-100 transition-all duration-500 border border-green-200 transform hover:scale-110 hover:-translate-y-6 hover:-rotate-2 shadow-lg hover:shadow-2xl">
                <Link to="/workbook">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <BookOpen className="w-12 h-12 mx-auto mb-4 text-green-600 transform hover:scale-125 hover:rotate-12 transition-all duration-500 relative z-10" />
                    <h3 className="text-xl font-semibold text-green-900 mb-3 relative z-10">Workbook</h3>
                    <p className="text-green-700 relative z-10 leading-relaxed">Self-assessment, tracking, and personalized mental health journey</p>
                  </CardContent>
                </Link>
              </Card>
              
              <Card className="bg-purple-50 hover:bg-purple-100 transition-all duration-500 border border-purple-200 transform hover:scale-110 hover:-translate-y-6 hover:rotate-1 shadow-lg hover:shadow-2xl">
                <Link to="/thoughts">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <Heart className="w-12 h-12 mx-auto mb-4 text-purple-600 transform hover:scale-125 hover:pulse transition-all duration-500 relative z-10" />
                    <h3 className="text-xl font-semibold text-purple-900 mb-3 relative z-10">Share Your Story</h3>
                    <p className="text-purple-700 relative z-10 leading-relaxed">Connect with the community and share your healing journey</p>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-orange-50">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-green-200 shadow-2xl rounded-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-2 transition-all duration-500">
              <CardContent className="p-12 text-center">
                <div className="mb-8">
                  <Mail className="h-16 w-16 text-green-600 mx-auto mb-6 transform hover:scale-125 hover:rotate-12 transition-all duration-500" />
                  <h2 className="text-4xl font-light text-slate-800 mb-4 transform hover:scale-105 transition-transform duration-300">
                    ✉️ Join the VOYCE-X Letter
                  </h2>
                  <p className="text-xl text-slate-600">1 Insightful Email Every Week</p>
                  <p className="text-sm text-slate-500 mt-2">Deep insights on mental health, stress management, and emotional intelligence</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transform hover:scale-105 transition-transform duration-300"
                  />
                  <Button 
                    onClick={() => window.open('https://mailchi.mp/7027ec706d26/on-a-purpose', '_blank')}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  >
                    Subscribe Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section with Enhanced Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 transform hover:scale-105 transition-transform duration-300">
                About VOYCE Academy
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8 transform hover:scale-150 transition-transform duration-300"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-3xl font-medium text-slate-700">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  VOYCE Academy is your comprehensive resource for understanding mental health, neuroscience, 
                  and emotional wellbeing. We combine ancient wisdom with modern science to provide accessible, 
                  evidence-based tools for mental clarity and emotional freedom.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded with the vision of making mental health resources accessible to everyone, 
                  especially those in underserved communities. We believe that understanding your mind 
                  is the first step toward healing and growth.
                </p>
              </div>
              
              <div className="relative transform hover:scale-105 hover:rotate-2 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80" 
                  alt="Mental wellness and brain health"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-blue-50 border-blue-200 transform hover:scale-110 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl">
                <CardContent className="p-8 text-center">
                  <Brain className="w-16 h-16 text-blue-600 mx-auto mb-4 transform hover:rotate-180 transition-transform duration-500" />
                  <h4 className="text-xl font-semibold text-blue-900 mb-3">Evidence-Based</h4>
                  <p className="text-blue-700 leading-relaxed">
                    Grounded in neuroscience research and clinical evidence for effective mental health management.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 border-green-200 transform hover:scale-110 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl">
                <CardContent className="p-8 text-center">
                  <Heart className="w-16 h-16 text-green-600 mx-auto mb-4 transform hover:scale-125 hover:pulse transition-all duration-500" />
                  <h4 className="text-xl font-semibold text-green-900 mb-3">Holistic Approach</h4>
                  <p className="text-green-700 leading-relaxed">
                    Integrating mind, heart, and gut wisdom for comprehensive emotional wellbeing and healing.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-purple-50 border-purple-200 transform hover:scale-110 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl">
                <CardContent className="p-8 text-center">
                  <Zap className="w-16 h-16 text-purple-600 mx-auto mb-4 transform hover:rotate-12 transition-transform duration-500" />
                  <h4 className="text-xl font-semibold text-purple-900 mb-3">Practical Tools</h4>
                  <p className="text-purple-700 leading-relaxed">
                    Real-world applications and techniques for immediate and lasting mental health transformation.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-12 py-4 text-lg transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-2xl">
                <Link to="/voyce">Learn More About VOYCE</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-light text-white mb-12 leading-relaxed transform hover:scale-105 transition-transform duration-300">
              Before you heal the world,<br />
              you must hear your own VOYCE
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-12 py-4 rounded-2xl text-lg transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-2xl">
                Start Today
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/20 px-12 py-4 rounded-2xl text-lg transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-2xl backdrop-blur-sm">
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/20 px-12 py-4 rounded-2xl text-lg transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-2xl backdrop-blur-sm">
                Join the Movement
              </Button>
            </div>
            
            <div className="border-t border-white/30 pt-8">
              <p className="text-white/80 italic text-lg leading-relaxed">
                Website built for VOYCE-X – founded by S. Suryavamshi<br />
                Inspired by rural narratives, brain science, emotional healing, and personal truth
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
