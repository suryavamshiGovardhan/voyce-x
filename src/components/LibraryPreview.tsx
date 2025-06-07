
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Heart, Brain, Zap, Eye, Sparkles } from "lucide-react";
import JapaneseIcon from "./JapaneseIcon";

const libraryContent = [
  {
    title: "The Ego's Last Stand",
    category: "Ego",
    preview: "When you finally see through the illusion of the separate self, the ego doesn't go quietly...",
    tags: ["Shadow Work", "Non-Duality", "Advanced"],
    icon: Eye,
    color: "sky",
    japaneseIcon: "zen",
    level: "L4"
  },
  {
    title: "Trauma as Teacher",
    category: "Trauma", 
    preview: "Your wounds are not punishments. They are invitations to depth, to wisdom, to becoming...",
    tags: ["Healing", "Integration", "Somatic"],
    icon: Heart,
    color: "orange",
    japaneseIcon: "lotus",
    level: "L2"
  },
  {
    title: "The Neuroscience of Ego Death",
    category: "Brain",
    preview: "What happens in the default mode network when the self-story dissolves? A journey into...",
    tags: ["Neuroscience", "Research", "PhD Level"],
    icon: Brain,
    color: "sky",
    japaneseIcon: "crane",
    level: "L6"
  },
  {
    title: "Masculine Shadow Integration",
    category: "Masculinity",
    preview: "The warrior who never learned to feel. The king who never learned to serve. The lover who...",
    tags: ["Masculinity", "Shadow", "Integration"],
    icon: Zap,
    color: "orange",
    japaneseIcon: "mountain",
    level: "L3"
  }
];

export default function LibraryPreview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Sparkles className="h-6 w-6 text-orange-400 float-3d" />
          <span className="text-white text-lg font-light">Featured Wisdom</span>
        </div>
        <div className="flex space-x-2">
          {["Ego", "Brain", "Emotions", "Trauma", "Healing"].map((category) => (
            <Badge key={category} variant="outline" className="border-sky-300/50 text-sky-300 hover:bg-sky-600/20 haptic-btn">
              {category}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {libraryContent.map((content, index) => {
          const IconComponent = content.icon;
          return (
            <Card 
              key={content.title}
              className={`bg-black/40 backdrop-blur-sm border-${content.color}-300/30 hover:border-${content.color}-300/60 zen-transition card-3d haptic-btn group cursor-pointer`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`h-10 w-10 rounded-lg bg-gradient-to-br from-${content.color}-600/20 to-${content.color}-400/20 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <IconComponent className={`h-5 w-5 text-${content.color}-400`} />
                    </div>
                    <div>
                      <Badge variant="outline" className={`border-${content.color}-300/50 text-${content.color}-300 text-xs mb-1`}>
                        {content.level}
                      </Badge>
                      <h3 className="text-white font-medium text-sm">{content.title}</h3>
                    </div>
                  </div>
                  <JapaneseIcon type={content.japaneseIcon as any} className={`text-${content.color === 'sky' ? 'orange' : 'sky'}-400 w-5 h-5 float-3d`} />
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">
                  "{content.preview}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {content.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="text-orange-400 hover:text-orange-300 hover:bg-orange-600/20 haptic-btn text-xs"
                  >
                    Read →
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
