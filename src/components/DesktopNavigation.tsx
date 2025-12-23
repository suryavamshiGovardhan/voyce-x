import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Heart, BookOpen, Feather, GraduationCap, 
  Compass, School, MessageCircle, Menu, X, User, LogIn
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

// VOYCE-X Ethical Navigation - Exactly 7 Items (Fixed)
const publicNavItems = [
  { title: "Home", href: "/", icon: Heart },
  { title: "Stories", href: "/stories", icon: BookOpen },
  { title: "Reflection", href: "/reflection", icon: Feather },
  { title: "Learn", href: "/learn", icon: GraduationCap },
  { title: "VOYCE Path", href: "/path", icon: Compass },
  { title: "Schools", href: "/schools", icon: School },
  { title: "Connect", href: "/connect", icon: MessageCircle },
];

export default function DesktopNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Calm, Human */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Heart className="h-7 w-7 text-primary group-hover:scale-105 transition-transform" />
            </div>
            <div>
              <span className="text-xl font-semibold text-foreground tracking-tight">
                VOYCE
              </span>
              <span className="text-xs text-muted-foreground block -mt-1">
                Mental Clarity
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Simple, Calm */}
          <div className="hidden lg:flex items-center space-x-1">
            {publicNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center space-x-1.5 px-4 py-2 rounded-lg transition-all duration-200",
                  "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  "text-sm font-medium",
                  location.pathname === item.href && "text-primary bg-primary/5"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Right Side - Minimal */}
          <div className="hidden lg:flex items-center space-x-3">
            {user ? (
              <Link
                to="/dashboard"
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-lg",
                  "bg-primary/10 text-primary hover:bg-primary/20 transition-all",
                  "text-sm font-medium"
                )}
              >
                <User className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            ) : (
              <Link
                to="/login"
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-lg",
                  "bg-primary text-primary-foreground hover:bg-primary/90 transition-all",
                  "text-sm font-medium"
                )}
              >
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu - Simple List */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-1 animate-fade-in">
            {publicNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all",
                  "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  location.pathname === item.href && "text-primary bg-primary/5"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.title}</span>
              </Link>
            ))}
            
            <div className="border-t border-border pt-3 mt-3">
              {user ? (
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-primary/10 text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                  <span className="font-medium">Dashboard</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-primary text-primary-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LogIn className="h-5 w-5" />
                  <span className="font-medium">Sign In</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
