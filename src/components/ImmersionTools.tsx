
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, BookOpen, Headphones, Activity, Compass, Users } from "lucide-react";
import JapaneseIcon from "./JapaneseIcon";

const immersionTools = [
  {
    title: "Guided Meditations",
    description: "Ego dissolution and inner witness practices",
    icon: Play,
    color: "sky",
    japaneseIcon: "zen",
    sessions: "12 Sessions"
  },
  {
    title: "Daily Reflection Journal", 
    description: "AI-powered prompts for self-discovery",
    icon: BookOpen,
    color: "orange",
    japaneseIcon: "bamboo",
    sessions: "∞ Entries"
  },
  {
    title: "Neuro Simulators",
    description: "Experience trauma, ADHD, anxiety states",
    icon: Activity,
    color: "sky",
    japaneseIcon: "wave",
    sessions: "8 Simulations"
  },
  {
    title: "Breathwork Library",
    description: "Somatic exercises and body-scan audios",
    icon: Headphones,
    color: "orange",
    japaneseIcon: "crane",
    sessions: "24 Practices"
  },
  {
    title: "Shadow Work Navigator",
    description: "Explore your unconscious patterns",
    icon: Compass,
    color: "sky",
    japaneseIcon: "mountain",
    sessions: "Journey Mode"
  },
  {
    title: "Community Circle",
    description: "Anonymous sharing and peer support",
    icon: Users,
    color: "orange", 
    japaneseIcon: "lotus",
    sessions: "Live Daily"
  }
];

export default function ImmersionTools() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {immersionTools.map((tool, index) => {
        const IconComponent = tool.icon;
        return (
          <Card 
            key={tool.title}
            className={`bg-black/40 backdrop-blur-sm border-${tool.color}-300/30 hover:border-${tool.color}-300/60 zen-transition card-3d haptic-btn group`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`h-12 w-12 rounded-full bg-gradient-to-br from-${tool.color}-600/20 to-${tool.color}-400/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`h-6 w-6 text-${tool.color}-400`} />
                </div>
                <JapaneseIcon type={tool.japaneseIcon as any} className={`text-${tool.color === 'sky' ? 'orange' : 'sky'}-400 w-6 h-6 float-3d`} />
              </div>
              
              <h3 className="text-white font-medium mb-2">{tool.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                {tool.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className={`text-${tool.color}-400 text-xs font-mono`}>
                  {tool.sessions}
                </span>
                <Button 
                  size="sm" 
                  variant="outline"
                  className={`border-${tool.color}-300/50 hover:bg-${tool.color}-600/20 text-white haptic-btn text-xs`}
                >
                  Launch
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
