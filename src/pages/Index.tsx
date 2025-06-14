
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Zap, BookOpen, Users, Stethoscope, Leaf, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { hapticFeedback } from "@/utils/hapticFeedback";
import { useEffect, useRef } from "react";

export default function Index() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const buttons = sectionRef.current?.querySelectorAll('button, a');
    buttons?.forEach((button) => {
      button.addEventListener('click', () => hapticFeedback.onClick());
      button.addEventListener('mouseenter', () => hapticFeedback.onHover());
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-green-50" ref={sectionRef}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8 space-x-4">
              <Brain className="h-16 w-16 text-blue-500" />
              <Heart className="h-20 w-20 text-green-500" />
              <Zap className="h-16 w-16 text-orange-500" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              <span className="text-blue-600">VOYCE</span>{" "}
              <span className="text-green-600">Academy</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Mental Clarity, Emotional Freedom — Your journey to understanding the mind, brain, and heart connection
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                <Link to="/voyce">
                  Discover VOYCE
                  <Leaf className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg">
                <Link to="/path">Begin Your Path</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Topics Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Explore Mental Health Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Stress", icon: Brain, color: "blue", path: "/stress", description: "Understanding and managing stress" },
                { title: "Trauma", icon: Heart, color: "purple", path: "/trauma", description: "Healing from traumatic experiences" },
                { title: "ADHD", icon: Zap, color: "orange", path: "/adhd", description: "Managing attention and focus" },
                { title: "Brain Science", icon: Stethoscope, color: "green", path: "/brain", description: "How your brain works" },
                { title: "Mind-Heart-Gut", icon: Target, color: "pink", path: "/mind-heart-gut", description: "The connection trilogy" },
                { title: "Neuroscience", icon: Brain, color: "indigo", path: "/neuroscience", description: "The science of the nervous system" },
                { title: "Schools", icon: BookOpen, color: "teal", path: "/schools", description: "Mental health in education" },
                { title: "Community", icon: Users, color: "cyan", path: "/library", description: "Resources and support" }
              ].map((topic, index) => (
                <Card key={topic.title} className="hover:shadow-lg transition-shadow cursor-pointer bg-white">
                  <Link to={topic.path}>
                    <CardContent className="p-6 text-center">
                      <topic.icon className={`w-12 h-12 mx-auto mb-4 text-${topic.color}-500`} />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
                      <p className="text-sm text-gray-600">{topic.description}</p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-blue-50 hover:bg-blue-100 transition-colors">
                <Link to="/tools">
                  <CardContent className="p-6 text-center">
                    <Zap className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Tools & Resources</h3>
                    <p className="text-sm text-blue-700">Interactive tools for mental wellness</p>
                  </CardContent>
                </Link>
              </Card>
              
              <Card className="bg-green-50 hover:bg-green-100 transition-colors">
                <Link to="/workbook">
                  <CardContent className="p-6 text-center">
                    <BookOpen className="w-10 h-10 mx-auto mb-4 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Workbook</h3>
                    <p className="text-sm text-green-700">Self-assessment and tracking</p>
                  </CardContent>
                </Link>
              </Card>
              
              <Card className="bg-purple-50 hover:bg-purple-100 transition-colors">
                <Link to="/thoughts">
                  <CardContent className="p-6 text-center">
                    <Heart className="w-10 h-10 mx-auto mb-4 text-purple-600" />
                    <h3 className="text-lg font-semibold text-purple-900 mb-2">Share Your Story</h3>
                    <p className="text-sm text-purple-700">Connect with the community</p>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About VOYCE Academy</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              VOYCE Academy is your comprehensive resource for understanding mental health, neuroscience, 
              and emotional wellbeing. We combine ancient wisdom with modern science to provide accessible, 
              evidence-based tools for mental clarity and emotional freedom.
            </p>
            <Button asChild size="lg" variant="outline" className="border-gray-600 text-gray-600 hover:bg-gray-100">
              <Link to="/voyce">Learn More About VOYCE</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
