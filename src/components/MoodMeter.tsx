
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Smile, Frown, Angry, Meh, Heart, Brain, Zap, Sparkles } from 'lucide-react';

const moodTips = {
  happy: {
    icon: Smile,
    tip: "Gratitude magnifies happiness. Take a moment to think of three things you're grateful for right now. This activates your prefrontal cortex and releases dopamine.",
    color: "text-emerald-500",
    bgGradient: "from-emerald-500/20 to-green-500/20",
    borderColor: "border-emerald-500/30",
    glowColor: "shadow-emerald-500/20",
  },
  sad: {
    icon: Frown,
    tip: "It's okay to feel sad. Acknowledge the feeling without judgment. Try the 4-7-8 breathing technique or connect with someone who understands. Your limbic system needs compassion.",
    color: "text-blue-500",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    glowColor: "shadow-blue-500/20",
  },
  angry: {
    icon: Angry,
    tip: "Anger is energy seeking expression. Channel it constructively through the STOP technique: Stop, Take a breath, Observe your thoughts, Proceed mindfully. Your amygdala is activated—give it time to calm.",
    color: "text-red-500",
    bgGradient: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
    glowColor: "shadow-red-500/20",
  },
  meh: {
    icon: Meh,
    tip: "Emotional numbness can signal your nervous system is protecting you. Try a small, novel activity to activate your reward pathways. Even 5 minutes in nature can shift your neurochemistry.",
    color: "text-gray-500",
    bgGradient: "from-gray-500/20 to-slate-500/20",
    borderColor: "border-gray-500/30",
    glowColor: "shadow-gray-500/20",
  },
};

const FloatingEmoji = ({ delay }: { delay: number }) => (
  <div 
    className="absolute opacity-10 animate-float pointer-events-none"
    style={{
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 60 + 20}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${6 + Math.random() * 4}s`
    }}
  >
    <div className="text-4xl transform hover:scale-150 transition-transform duration-500">
      {['💭', '🧠', '💖', '✨', '🌸', '🔮'][Math.floor(Math.random() * 6)]}
    </div>
  </div>
);

type Mood = keyof typeof moodTips;

export default function MoodMeter() {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMoodSelect = (mood: Mood) => {
    if (selectedMood === mood) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedMood(mood);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="relative py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/30 rounded-t-3xl -mt-6 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <FloatingEmoji key={i} delay={i * 0.8} />
        ))}
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" 
               style={{
                 backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
                 backgroundSize: '50px 50px',
                 animation: 'grid-float 20s ease-in-out infinite'
               }} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Header with 3D Effect */}
        <div className="mb-12 transform hover:scale-105 transition-all duration-700">
          <div className="flex items-center justify-center mb-6 space-x-4">
            <Brain className="w-12 h-12 text-blue-500 animate-pulse transform hover:rotate-180 transition-all duration-1000" />
            <Heart className="w-14 h-14 text-pink-500 animate-bounce transform hover:scale-125 transition-all duration-500" />
            <Zap className="w-12 h-12 text-yellow-500 animate-pulse transform hover:-rotate-180 transition-all duration-1000" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-800 to-green-800 bg-clip-text text-transparent">
            How are you feeling right now?
          </h2>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Click an emotion to receive personalized insights based on neuroscience and mindfulness practices
          </p>
        </div>

        {/* Mood Icons with Enhanced 3D Effects */}
        <div className="flex justify-center items-center gap-6 md:gap-12 mb-12 flex-wrap">
          {(Object.keys(moodTips) as Mood[]).map((mood, index) => {
            const CurrentIcon = moodTips[mood].icon;
            const isSelected = selectedMood === mood;
            
            return (
              <button
                key={mood}
                onClick={() => handleMoodSelect(mood)}
                className={`group relative p-6 md:p-8 rounded-3xl transition-all duration-500 transform hover:scale-125 hover:-translate-y-4 ${
                  isSelected 
                    ? `bg-gradient-to-br ${moodTips[mood].bgGradient} border-2 ${moodTips[mood].borderColor} scale-110 shadow-2xl ${moodTips[mood].glowColor}` 
                    : 'bg-white/70 backdrop-blur-sm hover:bg-white/90 border-2 border-white/50 shadow-xl hover:shadow-2xl'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
                aria-label={`Select ${mood} mood`}
              >
                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 rounded-full transition-transform duration-700 origin-center" />
                </div>
                
                {/* Icon with 3D Animation */}
                <CurrentIcon className={`${moodTips[mood].color} w-12 h-12 md:w-16 md:h-16 relative z-10 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`} />
                
                {/* Mood Label */}
                <div className="mt-3 text-sm font-medium capitalize text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                  {mood}
                </div>

                {/* Floating Sparkles on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <Sparkles 
                      key={i}
                      className="absolute w-3 h-3 text-white/80 animate-ping"
                      style={{
                        left: `${20 + i * 12}%`,
                        top: `${15 + (i % 3) * 25}%`,
                        animationDelay: `${i * 150}ms`
                      }}
                    />
                  ))}
                </div>

                {/* Glow Effect for Selected */}
                {isSelected && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${moodTips[mood].bgGradient} rounded-3xl blur-xl opacity-50 -z-10`} />
                )}
              </button>
            );
          })}
        </div>
        
        {/* Enhanced Tip Display */}
        <div className="min-h-[200px] flex items-center justify-center">
          {selectedMood && (
            <Card className={`relative bg-white/80 backdrop-blur-lg border-2 ${moodTips[selectedMood].borderColor} text-center transition-all duration-700 w-full shadow-2xl overflow-hidden ${
              isAnimating ? 'animate-pulse scale-95 opacity-50' : 'animate-fade-in scale-100 opacity-100'
            }`}>
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${moodTips[selectedMood].bgGradient} opacity-50`} />
              
              {/* Content */}
              <CardContent className="relative z-10 p-8 md:p-12">
                <div className="flex items-center justify-center mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${moodTips[selectedMood].bgGradient} border ${moodTips[selectedMood].borderColor}`}>
                    <moodTips[selectedMood].icon className={`${moodTips[selectedMood].color} w-8 h-8 animate-pulse`} />
                  </div>
                </div>
                
                <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-medium">
                  {moodTips[selectedMood].tip}
                </p>
                
                {/* Decorative Elements */}
                <div className="flex justify-center mt-6 space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${moodTips[selectedMood].bgGradient} animate-pulse`}
                      style={{ animationDelay: `${i * 200}ms` }}
                    />
                  ))}
                </div>
              </CardContent>

              {/* Corner Decorations */}
              <div className="absolute top-4 right-4 opacity-20">
                <div className="w-16 h-16 border-2 border-current rounded-full animate-spin-slow" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-20">
                <div className="w-12 h-12 border-2 border-current rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
