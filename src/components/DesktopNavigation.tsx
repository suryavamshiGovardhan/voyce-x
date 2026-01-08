import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Brain, Heart, Zap, Shield, Focus, Microscope, TreePine, 
  AlertTriangle, Baby, GraduationCap, FileText, PenTool, 
  Compass, Wrench, Library, BookOpen, FileBarChart, Stethoscope, 
  Mail, MessageSquare, LogIn, User, ChevronDown, Menu, X, Trophy, Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { hapticFeedback } from "@/utils/hapticFeedback";
import { useAuth } from "@/hooks/useAuth";

const navigationSections = [
  {
    title: "Mental Wellness",
    icon: Heart,
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    hoverColor: "hover:bg-pink-500/20",
    items: [
      { title: "Stress Management", href: "/stress", icon: Zap, description: "Understanding stress responses" },
      { title: "Trauma Recovery", href: "/trauma", icon: Shield, description: "Healing from trauma" },
      { title: "ADHD Support", href: "/adhd", icon: Focus, description: "ADHD resources" },
    ]
  },
  {
    title: "Brain Science",
    icon: Brain,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    hoverColor: "hover:bg-blue-500/20",
    items: [
      { title: "Brain Function", href: "/brain", icon: Brain, description: "How your brain works" },
      { title: "Neuroscience", href: "/neuroscience", icon: Microscope, description: "Latest research" },
      { title: "Mind-Heart-Gut", href: "/mind-heart-gut", icon: TreePine, description: "Holistic connection" },
    ]
  },
  {
    title: "Development",
    icon: Baby,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    hoverColor: "hover:bg-purple-500/20",
    items: [
      { title: "ACEs Impact", href: "/aces", icon: AlertTriangle, description: "Childhood experiences" },
      { title: "CDS Research", href: "/cds", icon: Focus, description: "Cognitive syndrome" },
    ]
  },
  {
    title: "Education",
    icon: GraduationCap,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    hoverColor: "hover:bg-green-500/20",
    items: [
      { title: "Start Here", href: "/start-here", icon: Compass, description: "Begin your journey" },
      { title: "VOYCE Schools", href: "/schools", icon: GraduationCap, description: "School programs" },
      { title: "DSM-5 Guide", href: "/dsm5", icon: BookOpen, description: "Diagnostic manual" },
      { title: "DSM-5 Academy", href: "/dsm5-academy", icon: GraduationCap, description: "Professional training" },
      { title: "ICD-9 Hub", href: "/icd9", icon: FileBarChart, description: "Diagnostic codes" },
      { title: "Diagnostics", href: "/diagnostics", icon: Stethoscope, description: "Integrated tools" },
      { title: "Psychology Theories", href: "/theories", icon: BookOpen, description: "100+ theories" },
    ]
  },
  {
    title: "Community",
    icon: MessageSquare,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    hoverColor: "hover:bg-orange-500/20",
    items: [
      { title: "Stories", href: "/stories", icon: BookOpen, description: "Anonymous reflections" },
      { title: "VOYCE Blog", href: "/blog", icon: FileText, description: "Latest insights" },
      { title: "Share Thoughts", href: "/thoughts", icon: MessageSquare, description: "Your stories" },
      { title: "Newsletters", href: "/newsletters", icon: Mail, description: "Stay updated" },
    ]
  },
  {
    title: "Resources",
    icon: Library,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    hoverColor: "hover:bg-cyan-500/20",
    items: [
      { title: "VOYCE Path", href: "/path", icon: Compass, description: "Your journey" },
      { title: "Tools", href: "/tools", icon: Wrench, description: "Mental health tools" },
      { title: "Library", href: "/library", icon: Library, description: "Curated content" },
      { title: "Workbook", href: "/workbook", icon: PenTool, description: "Interactive workbook" },
    ]
  }
];

export default function DesktopNavigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const handleMouseEnter = (title: string) => {
    setOpenDropdown(title);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-green-900 to-slate-800 backdrop-blur-lg border-b border-green-400/20 sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={() => hapticFeedback.onNavigation()}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-400/20 rounded-full blur-lg group-hover:bg-green-400/40 transition-all" />
              <Brain className="h-10 w-10 text-green-400 group-hover:text-green-300 transition-all relative animate-pulse-gentle" />
            </div>
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-green-300 bg-clip-text text-transparent">
                VOYCE
              </span>
              <p className="text-xs text-green-300/80 -mt-1 font-medium">Mental Clarity & Emotional Freedom</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationSections.map((section) => (
              <div
                key={section.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(section.title)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-200",
                    "text-white/90 hover:text-white font-medium text-sm",
                    section.bgColor,
                    section.hoverColor,
                    "border border-transparent hover:border-white/10"
                  )}
                >
                  <section.icon className={cn("h-5 w-5", section.color)} />
                  <span>{section.title}</span>
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    openDropdown === section.title && "rotate-180"
                  )} />
                </button>

                {/* Dropdown */}
                {openDropdown === section.title && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/98 backdrop-blur-2xl border border-green-400/20 rounded-xl shadow-2xl overflow-hidden animate-scale-in z-50">
                    <div className="p-2">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={cn(
                            "flex items-start space-x-3 p-3 rounded-lg transition-all duration-200",
                            "hover:bg-white/10",
                            location.pathname === item.href && "bg-green-500/20 border border-green-400/30"
                          )}
                          onClick={() => {
                            hapticFeedback.onNavigation();
                            setOpenDropdown(null);
                          }}
                        >
                          <item.icon className={cn("h-5 w-5 mt-0.5 flex-shrink-0", section.color)} />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-white">{item.title}</div>
                            <div className="text-xs text-slate-400 mt-0.5">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {user ? (
              <>
                <Link
                  to="/quizzes"
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-white border border-purple-400/20 hover:border-purple-400/40 transition-all"
                  onClick={() => hapticFeedback.onNavigation()}
                >
                  <Target className="h-5 w-5 text-purple-400" />
                  <span className="font-medium text-sm">Quizzes</span>
                </Link>
                <Link
                  to="/leaderboard"
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 text-white border border-yellow-400/20 hover:border-yellow-400/40 transition-all"
                  onClick={() => hapticFeedback.onNavigation()}
                >
                  <Trophy className="h-5 w-5 text-yellow-400" />
                  <span className="font-medium text-sm">Leaderboard</span>
                </Link>
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all border border-green-400/30 font-semibold"
                  onClick={() => hapticFeedback.onNavigation()}
                >
                  <User className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all border border-green-400/30 font-semibold"
                onClick={() => hapticFeedback.onNavigation()}
              >
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              hapticFeedback.onClick();
            }}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 space-y-2 max-h-[70vh] overflow-y-auto animate-fade-in">
            {navigationSections.flatMap(section => 
              section.items.map(item => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all",
                    "text-white/90 hover:text-white hover:bg-white/10",
                    location.pathname === item.href && "bg-green-500/20 border border-green-400/30"
                  )}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    hapticFeedback.onNavigation();
                  }}
                >
                  <item.icon className={cn("h-5 w-5", section.color)} />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{item.title}</div>
                    <div className="text-xs text-slate-400">{item.description}</div>
                  </div>
                </Link>
              ))
            )}
            <div className="border-t border-slate-700 pt-4 mt-4 space-y-2">
              {user ? (
                <>
                  <Link
                    to="/quizzes"
                    className="block w-full text-center py-3 rounded-lg bg-purple-500/20 text-white font-medium"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      hapticFeedback.onNavigation();
                    }}
                  >
                    <Target className="inline h-5 w-5 mr-2" />
                    Quizzes
                  </Link>
                  <Link
                    to="/leaderboard"
                    className="block w-full text-center py-3 rounded-lg bg-yellow-500/20 text-white font-medium"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      hapticFeedback.onNavigation();
                    }}
                  >
                    <Trophy className="inline h-5 w-5 mr-2" />
                    Leaderboard
                  </Link>
                  <Link
                    to="/dashboard"
                    className="block w-full text-center py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      hapticFeedback.onNavigation();
                    }}
                  >
                    <User className="inline h-5 w-5 mr-2" />
                    Dashboard
                  </Link>
                </>
              ) : (
                <Link
                  to="/login"
                  className="block w-full text-center py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    hapticFeedback.onNavigation();
                  }}
                >
                  <LogIn className="inline h-5 w-5 mr-2" />
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
