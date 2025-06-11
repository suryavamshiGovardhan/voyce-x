
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, Heart, Leaf, Waves, Mountain, Music, Mail, Instagram, Youtube, Share2 } from "lucide-react";
import JapaneseIcon from "@/components/JapaneseIcon";
import { hapticFeedback } from "@/utils/hapticFeedback";

export default function VoycePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [email, setEmail] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = heroRef.current;
      if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = () => {
    if (email) {
      window.open('https://mailchi.mp/7027ec706d26/on-a-purpose', '_blank');
      hapticFeedback.onClick();
    }
  };

  const stressGuideContent = [
    {
      title: "Understanding Stress: The Foundation",
      icon: Brain,
      content: "Stress is your body's natural response to challenges and threats. It's an ancient survival mechanism that prepares you to face danger or flee from it. When you encounter a stressful situation, your body releases hormones like cortisol and adrenaline, triggering the 'fight-or-flight' response."
    },
    {
      title: "The Physiology of Stress",
      icon: Heart,
      content: "When stress hits, your sympathetic nervous system activates. Your heart rate increases, breathing becomes shallow, muscles tense, and blood flow redirects to essential organs. The amygdala (fear center) communicates with the hypothalamus, which signals the adrenal glands to release stress hormones."
    },
    {
      title: "Types of Stress",
      icon: Waves,
      content: "Acute stress is short-term and can be beneficial for performance. Chronic stress persists over time and can damage your health. Eustress is positive stress that motivates you, while distress is harmful and overwhelming."
    },
    {
      title: "Stress and the Brain",
      icon: Brain,
      content: "Chronic stress shrinks the prefrontal cortex (decision-making area) and enlarges the amygdala (fear center). It also affects the hippocampus, impairing memory formation. Understanding this helps us recognize why stress makes thinking clearly so difficult."
    },
    {
      title: "Rural Youth & Stress Patterns",
      icon: Mountain,
      content: "In rural India, youth face unique stressors: educational pressure, economic uncertainty, family expectations, and limited mental health resources. These stressors often go unrecognized, creating a silent epidemic of emotional distress."
    },
    {
      title: "The VOYCE Approach to Stress",
      icon: Leaf,
      content: "VOYCE recognizes stress as a language your body speaks. Through Voice (expression), Vulnerability (openness), and Validation (acceptance), we transform stress from an enemy into a teacher. Stress becomes information, not intimidation."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 japanese-pattern">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 via-white/80 to-orange-100/50" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-30 sakura-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            >
              <JapaneseIcon type="cherry" className="text-green-400 w-4 h-4" animate={false} />
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <JapaneseIcon type="lotus" className="text-green-500 w-16 h-16 mx-auto mb-6 float-3d" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-light text-slate-800 mb-6 slide-3d-enter">
            <span className="text-green-600">V</span>
            <span className="text-orange-500">O</span>
            <span className="text-green-600">Y</span>
            <span className="text-orange-500">C</span>
            <span className="text-green-600">E</span>
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <JapaneseIcon type="wave" className="text-green-400" />
            <p className="text-2xl md:text-3xl text-slate-600 italic font-light">
              A whisper to the soul, a voice to the mind
            </p>
            <JapaneseIcon type="bamboo" className="text-orange-400" />
          </div>
          
          <p className="text-xl text-slate-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Mental Clarity, Emotional Freedom – Healing starts with hearing your own voice
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 rounded-2xl text-lg haptic-btn shadow-lg"
              onClick={() => hapticFeedback.onClick()}
            >
              Explore VOYCE
              <Leaf className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-orange-400 text-orange-600 hover:bg-orange-50 px-12 py-4 rounded-2xl text-lg haptic-btn"
              onClick={() => hapticFeedback.onClick()}
            >
              Join Newsletter
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About VOYCE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <JapaneseIcon type="zen" className="text-green-500 w-12 h-12 mx-auto mb-6" />
            <h2 className="text-4xl font-light text-slate-800 mb-8">The VOYCE Story</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-slate-700">Rural India's Silent Crisis</h3>
              <p className="text-slate-600 leading-relaxed">
                In the villages and small towns of India, young minds carry burdens too heavy for their hearts. 
                Educational pressure, economic uncertainty, family expectations, and limited mental health resources 
                create a perfect storm of emotional distress.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Founded by S. Suryavamshi, VOYCE emerges from personal experience and deep understanding of 
                rural narratives, brain science, and emotional healing.
              </p>
            </div>
            
            <Card className="bg-white/60 backdrop-blur-sm border-green-200 shadow-lg rounded-2xl">
              <CardContent className="p-8">
                <h4 className="text-xl font-medium text-green-700 mb-4">Core Pillars</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700"><strong>Voice:</strong> Expression without judgment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-slate-700"><strong>Vulnerability:</strong> Strength in openness</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700"><strong>Validation:</strong> Acceptance of your truth</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stress Guide */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Brain className="h-12 w-12 text-green-600 mx-auto mb-6 float-3d" />
            <h2 className="text-4xl font-light text-slate-800 mb-8">Stress — The Complete Guide</h2>
            <div className="max-w-3xl mx-auto p-6 bg-orange-100/50 rounded-2xl border border-orange-200">
              <p className="text-lg italic text-orange-800 leading-relaxed">
                "You cannot heal what you cannot understand. Stress is a language, VOYCE is the translator."
              </p>
            </div>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {stressGuideContent.map((section, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/60 backdrop-blur-sm border border-green-200 rounded-2xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-green-50/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <section.icon className="h-6 w-6 text-green-600" />
                    <span className="text-left text-lg font-medium text-slate-700">{section.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{section.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Mini-Series */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Instagram className="h-12 w-12 text-orange-500 mx-auto mb-6 float-3d" />
            <h2 className="text-4xl font-light text-slate-800 mb-8">Who Are You When...?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explore identity, vulnerability, and truth through our Instagram mini-series
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { question: "...you fail?", color: "green" },
              { question: "...you succeed?", color: "orange" },
              { question: "...you're unheard?", color: "green" }
            ].map((item, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-green-200 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Heart className={`h-8 w-8 text-${item.color}-600`} />
                  </div>
                  <h3 className="text-xl font-medium text-slate-700 mb-4">Who are you{item.question}</h3>
                  <p className="text-slate-600 text-sm">Discover your authentic self in moments of challenge and growth</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-4 rounded-2xl text-lg haptic-btn shadow-lg"
            >
              <a href="https://www.instagram.com/suryavamshiiii" target="_blank" rel="noopener noreferrer">
                Follow VOYCE on Instagram
                <Instagram className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-green-200 shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <Mail className="h-16 w-16 text-green-600 mx-auto mb-6 float-3d" />
                <h2 className="text-3xl font-light text-slate-800 mb-4">Join the VOYCE Letter</h2>
                <p className="text-xl text-slate-600">1 Insightful Email Every Week</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <Button 
                  onClick={handleSubscribe}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-xl haptic-btn"
                >
                  Subscribe Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <JapaneseIcon type="lotus" className="text-green-500 w-16 h-16 mx-auto mb-8 float-3d" />
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-12 leading-relaxed">
            Before you heal the world,<br />
            you must hear your own VOYCE
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 rounded-2xl text-lg haptic-btn shadow-lg"
            >
              Start Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-orange-400 text-orange-600 hover:bg-orange-50 px-12 py-4 rounded-2xl text-lg haptic-btn"
            >
              Contact Us
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-green-400 text-green-600 hover:bg-green-50 px-12 py-4 rounded-2xl text-lg haptic-btn"
            >
              Join the Movement
            </Button>
          </div>
          
          <div className="border-t border-green-200 pt-8">
            <p className="text-slate-500 italic">
              Website built for VOYCE – founded by S. Suryavamshi<br />
              Inspired by rural narratives, brain science, emotional healing, and personal truth
            </p>
          </div>
        </div>
      </section>

      {/* Music Toggle & Social Share */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <Button
          size="icon"
          variant="outline"
          className="rounded-full bg-white/80 backdrop-blur-sm border-green-200 shadow-lg hover:bg-green-50"
          onClick={() => {
            setIsPlaying(!isPlaying);
            hapticFeedback.onClick();
          }}
        >
          <Music className={`h-5 w-5 ${isPlaying ? 'text-green-600' : 'text-slate-600'}`} />
        </Button>
        
        <Button
          size="icon"
          variant="outline"
          className="rounded-full bg-white/80 backdrop-blur-sm border-green-200 shadow-lg hover:bg-green-50"
          onClick={() => {
            navigator.share && navigator.share({
              title: 'VOYCE - Mental Health Management',
              text: 'Mental Clarity, Emotional Freedom',
              url: window.location.href
            });
            hapticFeedback.onClick();
          }}
        >
          <Share2 className="h-5 w-5 text-slate-600" />
        </Button>
      </div>
    </div>
  );
}
