
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">VOYCE</span>
          <span className="hidden sm:inline-block text-sm text-muted-foreground">Mental Clarity & Emotional Freedom</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/stress" className="text-sm font-medium transition-colors hover:text-primary">
            Stress
          </Link>
          <Link to="/trauma" className="text-sm font-medium transition-colors hover:text-primary">
            Trauma
          </Link>
          <Link to="/adhd" className="text-sm font-medium transition-colors hover:text-primary">
            ADHD
          </Link>
          <Link to="/brain" className="text-sm font-medium transition-colors hover:text-primary">
            Brain
          </Link>
          <Link to="/mind-heart-gut" className="text-sm font-medium transition-colors hover:text-primary">
            Mind-Heart-Gut
          </Link>
          <Link to="/neuroscience" className="text-sm font-medium transition-colors hover:text-primary">
            Neuroscience
          </Link>
          <Link to="/newsletters" className="text-sm font-medium transition-colors hover:text-primary">
            {t('newsletters')}
          </Link>
          <Link to="/thoughts" className="text-sm font-medium transition-colors hover:text-primary">
            {t('thoughts')}
          </Link>
          <LanguageSelector />
          <Button asChild variant="ghost" size="sm">
            <Link to="/profile">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/login">{t('login')}</Link>
          </Button>
          <Button asChild variant="default" size="sm">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile navigation */}
        <div
          className={cn(
            "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background",
            isMenuOpen ? "slide-in-from-top-2" : "hidden"
          )}
        >
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/stress" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Stress
            </Link>
            <Link 
              to="/trauma" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Trauma
            </Link>
            <Link 
              to="/adhd" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              ADHD
            </Link>
            <Link 
              to="/brain" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Brain Functionality
            </Link>
            <Link 
              to="/mind-heart-gut" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Mind-Heart-Gut
            </Link>
            <Link 
              to="/neuroscience" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Neuroscience Timeline
            </Link>
            <Link 
              to="/newsletters" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('newsletters')}
            </Link>
            <Link 
              to="/thoughts" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('thoughts')}
            </Link>
            <Link 
              to="/profile" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
            <LanguageSelector />
            <Link 
              to="/login" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('login')}
            </Link>
            <Button asChild variant="default" size="sm" className="mt-4">
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
