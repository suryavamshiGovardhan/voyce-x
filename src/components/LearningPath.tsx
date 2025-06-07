
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, Eye, Zap, Heart, Target, Microscope, Infinity, Crown } from "lucide-react";
import JapaneseIcon from "./JapaneseIcon";

const learningStages = [
  {
    level: "L0",
    name: "Nursery of the Mind",
    description: "What is ego? What is the brain? Emotions for beginners",
    icon: Brain,
    color: "sky",
    japaneseIcon: "cherry",
    unlocked: true
  },
  {
    level: "L1", 
    name: "The Cracks Appear",
    description: "Trauma, self-awareness, childhood programming",
    icon: Eye,
    color: "orange",
    japaneseIcon: "wave",
    unlocked: true
  },
  {
    level: "L2",
    name: "The Inner War",
    description: "Fight/Flight, nervous system, toxic patterns",
    icon: Zap,
    color: "sky",
    japaneseIcon: "mountain",
    unlocked: false
  },
  {
    level: "L3",
    name: "The False Self",
    description: "Ego mechanics, projections, persona, shadow work",
    icon: Heart,
    color: "orange", 
    japaneseIcon: "bamboo",
    unlocked: false
  },
  {
    level: "L4",
    name: "The Witness",
    description: "Mindfulness, inner child work, neuroplasticity",
    icon: Target,
    color: "sky",
    japaneseIcon: "zen",
    unlocked: false
  },
  {
    level: "L5",
    name: "The Architect", 
    description: "Rewiring thought patterns, somatic practices",
    icon: Microscope,
    color: "orange",
    japaneseIcon: "torii",
    unlocked: false
  },
  {
    level: "L6",
    name: "PhD Lab",
    description: "Hard neuroscience: brain anatomy, neurotransmitters",
    icon: Infinity,
    color: "sky",
    japaneseIcon: "crane",
    unlocked: false
  },
  {
    level: "L7",
    name: "The Void / Godhead",
    description: "Philosophy, death of ego, mysticism, integration",
    icon: Crown,
    color: "orange",
    japaneseIcon: "lotus",
    unlocked: false
  }
];

export default function LearningPath() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white text-sm">Your Progress</span>
          <span className="text-orange-300 text-sm">25% Complete</span>
        </div>
        <Progress value={25} className="h-2 bg-slate-700" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {learningStages.map((stage, index) => {
          const IconComponent = stage.icon;
          return (
            <Card 
              key={stage.level} 
              className={`bg-black/40 backdrop-blur-sm border-${stage.color}-300/30 hover:border-${stage.color}-300/60 zen-transition card-3d haptic-btn ${!stage.unlocked ? 'opacity-60' : ''}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-${stage.color}-400 font-mono text-sm font-bold`}>{stage.level}</span>
                  <JapaneseIcon type={stage.japaneseIcon as any} className={`text-${stage.color === 'sky' ? 'orange' : 'sky'}-400 w-5 h-5`} />
                </div>
                
                <div className="flex items-center mb-3">
                  <IconComponent className={`h-6 w-6 text-${stage.color}-400 mr-3`} />
                  <h3 className="text-white font-medium text-sm">{stage.name}</h3>
                </div>
                
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  {stage.description}
                </p>
                
                <Button 
                  size="sm" 
                  className={`w-full ${stage.unlocked ? `bg-${stage.color}-600 hover:bg-${stage.color}-700` : 'bg-slate-600 cursor-not-allowed'} haptic-btn text-xs`}
                  disabled={!stage.unlocked}
                >
                  {stage.unlocked ? 'Enter Stage' : 'Locked'}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
