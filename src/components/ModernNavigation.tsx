
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Brain, Heart, Zap, Shield, TreePine, Microscope, AlertTriangle, Baby, Focus, BookOpen, Compass, Wrench, Library, Mail, MessageSquare, User, LogIn, GraduationCap, FileText, PenTool, FileBarChart, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { hapticFeedback } from "@/utils/hapticFeedback";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navigationItems = [
  {
    title: "Mental Wellness",
    icon: Heart,
    items: [
      { title: "Stress Management", href: "/stress", icon: Zap, description: "Understanding and managing stress responses" },
      { title: "Trauma Recovery", href: "/trauma", icon: Shield, description: "Healing from traumatic experiences" },
      { title: "ADHD Support", href: "/adhd", icon: Focus, description: "Attention and hyperactivity resources" },
    ]
  },
  {
    title: "Brain Science",
    icon: Brain,
    items: [
      { title: "Brain Function", href: "/brain", icon: Brain, description: "How your brain works and adapts" },
      { title: "Neuroscience", href: "/neuroscience", icon: Microscope, description: "Latest neuroscience research" },
      { title: "Mind-Heart-Gut", href: "/mind-heart-gut", icon: TreePine, description: "Holistic mind-body connection" },
    ]
  },
  {
    title: "Developmental",
    icon: Baby,
    items: [
      { title: "ACEs Impact", href: "/aces", icon: AlertTriangle, description: "Adverse childhood experiences" },
      { title: "CDS Research", href: "/cds", icon: Focus, description: "Cognitive disengagement syndrome" },
    ]
  },
  {
    title: "Educational",
    icon: GraduationCap,
    items: [
      { title: "VOYCE for Schools", href: "/schools", icon: GraduationCap, description: "Mental health framework for educational institutions" },
    ]
  },
  {
    title: "Blog & Content",
    icon: PenTool,
    items: [
      { title: "VOYCE Blog", href: "/blog", icon: FileText, description: "Latest insights and articles" },
      { title: "Draft Posts", href: "/drafts", icon: PenTool, description: "Work in progress content" },
    ]
  },
  {
    title: "Resources",
    icon: Library,
    items: [
      { title: "VOYCE Path", href: "/path", icon: Compass, description: "Your personal growth journey" },
      { title: "Tools & Techniques", href: "/tools", icon: Wrench, description: "Practical mental health tools" },
      { title: "Knowledge Library", href: "/library", icon: Library, description: "Curated resources and content" },
      { title: "Psychology Theories", href: "/theories", icon: BookOpen, description: "100+ theories for workshops & education" },
      { title: "DSM-5-TR Guide", href: "/dsm5", icon: BookOpen, description: "Comprehensive diagnostic manual reference" },
      { title: "DSM-5 Academy", href: "/dsm5-academy", icon: GraduationCap, description: "Professional DSM-5 training platform" },
      { title: "ICD-9-CM Master Hub", href: "/icd9", icon: FileBarChart, description: "Complete ICD-9 diagnostic codes with multi-language support" },
      { title: "Integrated Diagnostics", href: "/diagnostics", icon: Stethoscope, description: "ICD-9 & DSM-5 with case studies and cross-references" },
      { title: "Newsletters", href: "/newsletters", icon: Mail, description: "Stay updated with latest insights" },
      { title: "Share Thoughts", href: "/thoughts", icon: MessageSquare, description: "Community stories and experiences" },
      { title: "Personal Stories", href: "/story", icon: BookOpen, description: "Deeply personal reflections on mental health" },
    ]
  }
];

export default function ModernNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-slate-900/95 via-green-900/95 to-slate-800/95 backdrop-blur-lg border-b border-green-200/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={() => hapticFeedback.onNavigation()}
          >
            <Brain className="h-8 w-8 text-green-400 group-hover:text-green-300 transition-colors" />
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                VOYCE
              </span>
              <p className="text-xs text-slate-300 -mt-1">Mental Clarity & Emotional Freedom</p>
            </div>
          </Link>

          {/* Desktop Navigation - Full menu on lg+, Compact on md-lg */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1 lg:space-x-2">
                {navigationItems.map((section) => (
                  <NavigationMenuItem key={section.title}>
                    <NavigationMenuTrigger className="bg-transparent text-slate-200 hover:text-green-300 hover:bg-white/10 border-0 text-sm lg:text-base px-2 lg:px-3">
                      <section.icon className="h-4 w-4 mr-1 lg:mr-2" />
                      <span className="hidden lg:inline">{section.title}</span>
                      <span className="lg:hidden">{section.title.split(' ')[0]}</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-slate-900/98 backdrop-blur-lg border border-green-200/20">
                      <div className="grid w-[320px] md:w-[400px] gap-3 p-4">
                        {section.items.map((item) => (
                          <NavigationMenuLink key={item.href} asChild>
                            <Link
                              to={item.href}
                              className={cn(
                                "group grid grid-cols-[auto_1fr] gap-3 rounded-lg p-3 transition-colors hover:bg-white/10",
                                location.pathname === item.href && "bg-green-500/20"
                              )}
                              onClick={() => hapticFeedback.onNavigation()}
                            >
                              <item.icon className="h-5 w-5 text-green-400 mt-1" />
                              <div>
                                <div className="text-sm font-medium text-slate-200">{item.title}</div>
                                <div className="text-xs text-slate-400">{item.description}</div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-2 lg:space-x-4">
              <Link
                to="/workbook"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200"
                onClick={() => hapticFeedback.onNavigation()}
              >
                <span className="hidden lg:inline">VOYCE Workbook</span>
                <span className="lg:hidden">Workbook</span>
              </Link>
              <Link
                to="/login"
                className="text-slate-300 hover:text-green-300 text-xs lg:text-sm font-medium transition-colors flex items-center"
                onClick={() => hapticFeedback.onNavigation()}
              >
                <LogIn className="h-4 w-4 lg:mr-1" />
                <span className="hidden lg:inline">Login</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-200 hover:text-green-300"
            onClick={() => {
              setIsOpen(!isOpen);
              hapticFeedback.onClick();
            }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navigationItems.flatMap(section => 
              section.items.map(item => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-200 hover:bg-white/10 transition-colors",
                    location.pathname === item.href && "bg-green-500/20"
                  )}
                  onClick={() => {
                    setIsOpen(false);
                    hapticFeedback.onNavigation();
                  }}
                >
                  <item.icon className="h-5 w-5 text-green-400" />
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-xs text-slate-400">{item.description}</div>
                  </div>
                </Link>
              ))
            )}
            <div className="border-t border-slate-600 pt-4 mt-4 space-y-2">
              <Link
                to="/workbook"
                className="block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium text-center"
                onClick={() => {
                  setIsOpen(false);
                  hapticFeedback.onNavigation();
                }}
              >
                VOYCE Workbook
              </Link>
              <Link
                to="/login"
                className="flex items-center justify-center space-x-2 text-slate-300 hover:text-green-300 px-4 py-2 text-sm font-medium transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  hapticFeedback.onNavigation();
                }}
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
