
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, Eye, Zap, Heart, Target, Microscope, Infinity, Crown } from "lucide-react";
import JapaneseIcon from "./JapaneseIcon";

const learningStages = [
  {
    level: "L0",
    name: "Nursery of the Mind",
    description: "What is ego? What is the brain? Your first steps into understanding the architecture of suffering.",
    deepContent: "The ego is not your enemy—it's a confused child who thinks it's protecting you. We begin here, in the nursery of awareness, learning the basic vocabulary of consciousness. You'll discover why your mind creates stories, how emotions are messengers, and why pain is your greatest teacher.",
    tools: ["Basic Breathing", "Emotion Naming", "Body Awareness"],
    icon: Brain,
    color: "text-sky-400",
    bgColor: "bg-sky-600",
    borderColor: "border-sky-300/30",
    hoverBorder: "hover:border-sky-300/60",
    japaneseIcon: "cherry",
    unlocked: true,
    duration: "2-3 weeks"
  },
  {
    level: "L1", 
    name: "The Cracks Appear",
    description: "Trauma isn't what happened to you—it's what you believed about yourself when it happened.",
    deepContent: "Here we meet the wounded child within. Every trigger is a doorway, every reaction a revelation. You'll learn to read the language of your nervous system, understand how childhood programming runs your adult life, and begin the sacred work of reparenting yourself.",
    tools: ["Inner Child Work", "Trigger Mapping", "Safe Space Creation"],
    icon: Eye,
    color: "text-orange-400",
    bgColor: "bg-orange-600",
    borderColor: "border-orange-300/30",
    hoverBorder: "hover:border-orange-300/60",
    japaneseIcon: "wave",
    unlocked: true,
    duration: "3-4 weeks"
  },
  {
    level: "L2",
    name: "The Inner War",
    description: "Your nervous system doesn't know the difference between a saber-tooth tiger and your boss.",
    deepContent: "Fight, flight, freeze, fawn—the four horsemen of your autonomic apocalypse. We dive deep into the battlefield of your nervous system, understanding why your body keeps the score and how chronic stress rewires your brain for survival instead of thriving.",
    tools: ["Nervous System Mapping", "Somatic Tracking", "Regulation Techniques"],
    icon: Zap,
    color: "text-sky-400",
    bgColor: "bg-sky-600",
    borderColor: "border-sky-300/30",
    hoverBorder: "hover:border-sky-300/60",
    japaneseIcon: "mountain",
    unlocked: false,
    duration: "4-5 weeks"
  },
  {
    level: "L3",
    name: "The False Self",
    description: "You are not who you think you are. You are not even who others think you are.",
    deepContent: "The ego's greatest trick is convincing you it IS you. Here we deconstruct the false self—the mask, the persona, the character you've been playing. Shadow work begins in earnest as we meet the parts of yourself you've been running from.",
    tools: ["Shadow Integration", "Persona Deconstruction", "Projection Work"],
    icon: Heart,
    color: "text-orange-400",
    bgColor: "bg-orange-600",
    borderColor: "border-orange-300/30",
    hoverBorder: "hover:border-orange-300/60",
    japaneseIcon: "bamboo",
    unlocked: false,
    duration: "5-6 weeks"
  },
  {
    level: "L4",
    name: "The Witness",
    description: "You are not your thoughts. You are the awareness that observes them.",
    deepContent: "The birth of the witness consciousness—the part of you that can observe your own mind. Through mindfulness and metacognition, you learn to step back from the drama of your thoughts and emotions. Neuroplasticity becomes your ally in rewiring decades of conditioning.",
    tools: ["Witness Meditation", "Metacognitive Training", "Neuroplasticity Exercises"],
    icon: Target,
    color: "text-sky-400",
    bgColor: "bg-sky-600",
    borderColor: "border-sky-300/30",
    hoverBorder: "hover:border-sky-300/60",
    japaneseIcon: "zen",
    unlocked: false,
    duration: "6-8 weeks"
  },
  {
    level: "L5",
    name: "The Architect", 
    description: "You are both the sculptor and the sculpture, the architect and the building.",
    deepContent: "Active reconstruction begins. You learn to consciously rewire thought patterns, build new neural pathways, and architect your internal world. Somatic practices integrate body wisdom as you become the deliberate creator of your consciousness.",
    tools: ["Neural Rewiring", "Somatic Integration", "Conscious Creation"],
    icon: Microscope,
    color: "text-orange-400",
    bgColor: "bg-orange-600",
    borderColor: "border-orange-300/30",
    hoverBorder: "hover:border-orange-300/60",
    japaneseIcon: "torii",
    unlocked: false,
    duration: "8-10 weeks"
  },
  {
    level: "L6",
    name: "PhD Lab",
    description: "The brain is not who you are, but it's the hardware running the software of consciousness.",
    deepContent: "Deep dive into neuroscience: brain anatomy, neurotransmitter systems, the default mode network, and the biological basis of consciousness. Understanding the hardware enhances your ability to upgrade the software.",
    tools: ["Brain Mapping", "Neurotransmitter Analysis", "Consciousness Studies"],
    icon: Infinity,
    color: "text-sky-400",
    bgColor: "bg-sky-600",
    borderColor: "border-sky-300/30",
    hoverBorder: "hover:border-sky-300/60",
    japaneseIcon: "crane",
    unlocked: false,
    duration: "12-16 weeks"
  },
  {
    level: "L7",
    name: "The Void / Godhead",
    description: "In the end, there is no end. There is no ego to kill, no self to find. There is only this.",
    deepContent: "The final dissolution—or perhaps the beginning. Philosophy, mysticism, and the direct experience of non-dual awareness. Integration of all previous work into a lived understanding that transcends concepts and enters pure being.",
    tools: ["Non-Dual Inquiry", "Mystical Integration", "Being Practices"],
    icon: Crown,
    color: "text-orange-400",
    bgColor: "bg-orange-600",
    borderColor: "border-orange-300/30",
    hoverBorder: "hover:border-orange-300/60",
    japaneseIcon: "lotus",
    unlocked: false,
    duration: "Lifetime Practice"
  }
];

export default function LearningPath() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white text-sm">Your Journey Progress</span>
          <span className="text-orange-300 text-sm">25% Complete (L0-L1)</span>
        </div>
        <Progress value={25} className="h-3 bg-slate-700" />
        <p className="text-slate-400 text-xs mt-2 italic">
          "The path is not about becoming someone else. It's about unbecoming everything you're not."
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {learningStages.map((stage, index) => {
          const IconComponent = stage.icon;
          return (
            <Card 
              key={stage.level} 
              className={`bg-black/40 backdrop-blur-sm ${stage.borderColor} ${stage.hoverBorder} zen-transition card-3d haptic-btn ${!stage.unlocked ? 'opacity-70' : ''} min-h-[400px]`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`${stage.color} font-mono text-lg font-bold`}>{stage.level}</span>
                  <JapaneseIcon type={stage.japaneseIcon as any} className={`${stage.color} w-6 h-6`} />
                </div>
                
                <div className="flex items-center mb-4">
                  <IconComponent className={`h-8 w-8 ${stage.color} mr-3`} />
                  <h3 className="text-white font-medium text-lg">{stage.name}</h3>
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">
                  "{stage.description}"
                </p>
                
                <div className="mb-4">
                  <p className="text-slate-400 text-xs leading-relaxed mb-3">
                    {stage.deepContent}
                  </p>
                  
                  <div className="mb-3">
                    <span className="text-orange-300 text-xs font-medium">Core Tools:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {stage.tools.map((tool) => (
                        <span key={tool} className="bg-slate-700/50 text-slate-300 text-xs px-2 py-1 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-xs text-slate-500 mb-4">
                    <span>Duration: {stage.duration}</span>
                    <span>{stage.unlocked ? 'Available' : 'Locked'}</span>
                  </div>
                </div>
                
                <Button 
                  size="sm" 
                  className={`w-full ${stage.unlocked ? `${stage.bgColor} hover:${stage.bgColor}/80` : 'bg-slate-600 cursor-not-allowed'} haptic-btn text-sm`}
                  disabled={!stage.unlocked}
                >
                  {stage.unlocked ? 'Enter Stage' : 'Complete Previous Stages'}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="mt-12 text-center">
        <div className="bg-black/30 backdrop-blur-sm border border-orange-300/30 rounded-lg p-6">
          <h3 className="text-white text-xl font-light mb-3">The Journey Never Ends</h3>
          <p className="text-slate-300 text-sm leading-relaxed italic max-w-2xl mx-auto">
            "Each stage is not a destination but a deepening. You don't graduate from consciousness—you fall deeper into it. 
            The ego you're killing is the one that thinks it knows, that thinks it's separate, that thinks it's in control."
          </p>
        </div>
      </div>
    </div>
  );
}
