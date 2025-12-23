import { Heart, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 mt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">VOYCE</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A calm space for mental clarity and emotional awareness. 
              This platform is not therapy or diagnosis — it's a place for reflection.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-foreground">Navigate</h3>
            <div className="space-y-2">
              <Link to="/stories" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Stories
              </Link>
              <Link to="/reflection" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Reflection
              </Link>
              <Link to="/learn" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Learn
              </Link>
              <Link to="/connect" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Connect
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-foreground">Stay Connected</h3>
            <a 
              href="https://mailchi.mp/7027ec706d26/on-a-purpose" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>VOYCE Letter</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Academic Access Link - Footer Only */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2025 VOYCE-X by Suryavamshi Govardhan
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Not therapy. Not diagnosis. A space for reflection.
              </p>
            </div>
            
            {/* Research Access - Footer Link Only */}
            <Link
              to="/research-access"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              <span>Academic / Research Access</span>
            </Link>
          </div>
        </div>

        {/* Founder Credit */}
        <div className="text-center mt-8 pt-6 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Founded by{" "}
            <Link 
              to="/suryavamshi-govardhan" 
              className="text-primary hover:underline"
            >
              Suryavamshi Govardhan
            </Link>
          </p>
          <p className="text-xs text-muted-foreground/70 italic mt-2">
            "Not just mental health, but clarity. Not just awareness, but a voice."
          </p>
        </div>
      </div>
    </footer>
  );
}
