
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
          <span className="hidden sm:inline-block text-sm text-muted-foreground">Mental Health Services</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/newsletters" className="text-sm font-medium transition-colors hover:text-primary">
            {t('newsletters')}
          </Link>
          <Link to="/thoughts" className="text-sm font-medium transition-colors hover:text-primary">
            {t('thoughts')}
          </Link>
          <LanguageSelector />
          <Button asChild variant="outline" size="sm">
            <Link to="/login">{t('login')}</Link>
          </Button>
          <Button asChild variant="default" size="sm">
            <a href="https://mental-health-management-mhm.b12sites.com/" target="_blank" rel="noopener noreferrer">
              {t('visitWebsite')}
            </a>
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
            <LanguageSelector />
            <Link 
              to="/login" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('login')}
            </Link>
            <Button asChild variant="default" size="sm" className="mt-4">
              <a href="https://mental-health-management-mhm.b12sites.com/" target="_blank" rel="noopener noreferrer">
                {t('visitWebsite')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
