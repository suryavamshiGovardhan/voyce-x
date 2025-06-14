
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Heart, Zap, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-8 space-x-4">
          <Brain className="h-16 w-16 text-blue-500" />
          <Heart className="h-20 w-20 text-green-500" />
          <Zap className="h-16 w-16 text-orange-500" />
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
          <span className="text-blue-400">Transform</span>{" "}
          <span className="text-green-400">Your</span>{" "}
          <span className="text-white">Mind</span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl font-light text-orange-200 italic mb-8">
          Academy of Consciousness & Mental Clarity
        </h2>
        
        <div className="space-y-6 mb-12">
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-slate-300 leading-relaxed">
            Transform trauma into wisdom. Dissolve the illusion of separation. 
            Architect your mind from basic awareness to advanced neuroscience.
          </p>
          
          <p className="text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            This is not therapy. This is not self-help. This is the systematic understanding of 
            your mind, brain, and heart connection for lasting mental clarity and emotional freedom.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg">
            <Link to="/path">
              Begin The Journey
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-green-300/50 text-green-300 hover:bg-green-600/20 px-10 py-4 text-lg">
            <Link to="/library">Explore Resources</Link>
          </Button>
          <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 text-lg">
            <Link to="/voyce">
              Discover VOYCE
              <Leaf className="ml-3 h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-black/20 backdrop-blur-sm border border-blue-300/30 rounded-lg p-6">
            <Brain className="text-blue-400 w-8 h-8 mx-auto mb-3" />
            <h3 className="text-white font-medium mb-2">Evidence-Based</h3>
            <p className="text-slate-400 text-sm">
              Grounded in neuroscience research and clinical evidence for effective mental health management.
            </p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm border border-green-300/30 rounded-lg p-6">
            <Heart className="text-green-400 w-8 h-8 mx-auto mb-3" />
            <h3 className="text-white font-medium mb-2">Holistic Approach</h3>
            <p className="text-slate-400 text-sm">
              Integrating mind, heart, and gut wisdom for comprehensive emotional wellbeing.
            </p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm border border-orange-300/30 rounded-lg p-6">
            <Zap className="text-orange-400 w-8 h-8 mx-auto mb-3" />
            <h3 className="text-white font-medium mb-2">Practical Tools</h3>
            <p className="text-slate-400 text-sm">
              Real-world applications and techniques for immediate and lasting transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
