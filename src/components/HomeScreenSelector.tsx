import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Settings, Palette, Brain, Heart, Circle, Moon, Sun, Stars } from "lucide-react";
import { hapticFeedback } from "@/utils/hapticFeedback";

interface HomeTheme {
  id: string;
  name: string;
  description: string;
  gradient: string;
  icon: React.ReactNode;
  mood: string;
}

const homeThemes: HomeTheme[] = [
  {
    id: "default",
    name: "VOYCE Original",
    description: "Classic VOYCE experience with green harmony",
    gradient: "from-slate-900 via-green-900 to-slate-800",
    icon: <Brain className="h-5 w-5" />,
    mood: "Balanced"
  },
  {
    id: "zen",
    name: "Zen Garden",
    description: "Peaceful minimalism for deep reflection",
    gradient: "from-gray-900 via-green-800 to-teal-900",
    icon: <Circle className="h-5 w-5" />,
    mood: "Calm"
  },
  {
    id: "warmth",
    name: "Warm Embrace",
    description: "Comforting oranges and soft browns",
    gradient: "from-orange-900 via-red-900 to-pink-900",
    icon: <Heart className="h-5 w-5" />,
    mood: "Comforting"
  },
  {
    id: "night",
    name: "Night Therapy",
    description: "Deep blues for evening contemplation",
    gradient: "from-indigo-900 via-purple-900 to-blue-900",
    icon: <Moon className="h-5 w-5" />,
    mood: "Introspective"
  },
  {
    id: "sunrise",
    name: "Morning Clarity",
    description: "Energizing yellows and warm light",
    gradient: "from-yellow-800 via-orange-800 to-red-800",
    icon: <Sun className="h-5 w-5" />,
    mood: "Energizing"
  },
  {
    id: "cosmic",
    name: "Cosmic Journey",
    description: "Deep space purples for exploration",
    gradient: "from-purple-900 via-indigo-900 to-black",
    icon: <Stars className="h-5 w-5" />,
    mood: "Expansive"
  }
];

export default function HomeScreenSelector() {
  const [selectedTheme, setSelectedTheme] = useState("default");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("voyce-home-theme");
    if (saved && homeThemes.find(t => t.id === saved)) {
      setSelectedTheme(saved);
      applyTheme(saved);
    }
  }, []);

  const applyTheme = (themeId: string) => {
    const theme = homeThemes.find(t => t.id === themeId);
    if (theme) {
      document.documentElement.style.setProperty('--home-gradient', theme.gradient);
      localStorage.setItem("voyce-home-theme", themeId);
    }
  };

  const handleThemeChange = (themeId: string) => {
    hapticFeedback.onSuccess();
    setSelectedTheme(themeId);
    applyTheme(themeId);
    setIsOpen(false);
  };

  const currentTheme = homeThemes.find(t => t.id === selectedTheme) || homeThemes[0];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="fixed top-20 right-4 z-40 bg-white/10 backdrop-blur-lg border-green-200/30 text-slate-100 hover:bg-white/20"
          onClick={() => hapticFeedback.onClick()}
        >
          <Settings className="h-4 w-4 mr-2" />
          Theme
        </Button>
      </DialogTrigger>
      
      <DialogContent className="bg-slate-900/95 backdrop-blur-lg border-green-200/20 text-slate-100 max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-2xl">
            <Palette className="h-6 w-6 text-green-400" />
            <span>Customize Your VOYCE Experience</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-slate-300 mb-4">
              Choose a theme that resonates with your current mood and mental state
            </p>
            <Badge variant="outline" className="border-green-300 text-green-300">
              Current: {currentTheme.name} • {currentTheme.mood}
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {homeThemes.map((theme) => (
              <Card
                key={theme.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedTheme === theme.id 
                    ? 'bg-green-500/20 border-green-400' 
                    : 'bg-white/5 border-slate-600 hover:bg-white/10'
                }`}
                onClick={() => handleThemeChange(theme.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {theme.icon}
                      <CardTitle className="text-lg">{theme.name}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {theme.mood}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400 mb-3">{theme.description}</p>
                  <div className={`h-6 rounded-lg bg-gradient-to-r ${theme.gradient}`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center text-sm text-slate-400">
            Your theme preference is saved automatically
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
