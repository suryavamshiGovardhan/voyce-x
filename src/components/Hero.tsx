
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Eye, Infinity } from "lucide-react";
import JapaneseIcon from "./JapaneseIcon";

export default function Hero() {
  return (
    <div className="relative py-32 sm:py-40 lg:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden mind-scroll">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-orange-900/95" />
      
      {/* Floating consciousness elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <JapaneseIcon type="zen" className="text-sky-300 w-12 h-12" />
      </div>
      <div className="absolute top-32 right-20 opacity-25">
        <Infinity className="h-16 w-16 text-orange-400 float-3d" />
      </div>
      <div className="absolute bottom-32 left-32 opacity-20">
        <JapaneseIcon type="lotus" className="text-sky-400 w-10 h-10" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center mb-8 space-x-6">
            <Brain className="h-20 w-20 text-sky-400 float-3d" />
            <Eye className="h-24 w-24 text-orange-400 float-3d" />
            <Brain className="h-20 w-20 text-sky-400 float-3d" />
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-light tracking-tight text-white mb-6 slide-3d-enter">
            <span className="text-sky-400">Kill</span>{" "}
            <span className="text-orange-400">The</span>{" "}
            <span className="text-white">Ego</span>
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <JapaneseIcon type="wave" className="text-sky-400" />
            <h2 className="text-2xl sm:text-3xl font-light text-orange-200 italic">
              Academy of Consciousness
            </h2>
            <JapaneseIcon type="mountain" className="text-orange-400" />
          </div>
          
          <p className="mt-8 max-w-4xl mx-auto text-xl sm:text-2xl text-slate-300 leading-relaxed font-light">
            Transform trauma into wisdom. Dissolve the illusion of separation. 
            Architect your mind from nursery-level awareness to PhD-depth neuroscience.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white px-12 py-4 rounded-full text-lg haptic-btn animate-pulse-gentle shadow-2xl border border-sky-300/30">
              <Link to="/path">
                Begin The Journey
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-orange-300/50 text-orange-300 hover:bg-orange-600/20 px-12 py-4 rounded-full text-lg haptic-btn">
              <Link to="/library">Explore The Archive</Link>
            </Button>
          </div>
          
          <div className="mt-16 flex items-center justify-center space-x-8 text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <JapaneseIcon type="torii" className="text-sky-400 w-5 h-5" />
              <span>Trauma-Informed</span>
            </div>
            <div className="flex items-center space-x-2">
              <JapaneseIcon type="zen" className="text-orange-400 w-5 h-5" />
              <span>Neuroscience-Based</span>
            </div>
            <div className="flex items-center space-x-2">
              <JapaneseIcon type="lotus" className="text-sky-400 w-5 h-5" />
              <span>Ego Dissolution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
