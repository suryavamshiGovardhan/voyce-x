import { Heart, Mail, Instagram, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hapticFeedback } from "@/utils/hapticFeedback";
import ViewCounter from "@/components/ViewCounter";
import { Link } from "react-router-dom";

export default function Footer() {
  const handleLinkClick = () => {
    hapticFeedback.onNavigation();
  };

  return (
    <footer className="border-t border-green-200/20 bg-slate-900/50 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold text-slate-100">VOYCE</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Mental Clarity & Emotional Freedom through evidence-based neuroscience and mindful awareness.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-100">Explore</h3>
            <div className="space-y-2">
              <a href="/stress" className="block text-slate-300 hover:text-green-300 transition-colors text-sm" onClick={handleLinkClick}>
                Stress Science
              </a>
              <a href="/trauma" className="block text-slate-300 hover:text-green-300 transition-colors text-sm" onClick={handleLinkClick}>
                Trauma Healing
              </a>
              <a href="/adhd" className="block text-slate-300 hover:text-green-300 transition-colors text-sm" onClick={handleLinkClick}>
                ADHD Understanding
              </a>
              <a href="/brain" className="block text-slate-300 hover:text-green-300 transition-colors text-sm" onClick={handleLinkClick}>
                Brain Functionality
              </a>
            </div>
          </div>

          {/* Connection */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-100">Connect</h3>
            <div className="space-y-2">
              <a href="/mind-heart-gut" className="block text-slate-300 hover:text-green-300 transition-colors text-sm" onClick={handleLinkClick}>
                Mind-Heart-Gut
              </a>
              <a href="/neuroscience" className="block text-slate-300 hover:text-green-300 transition-colors text-sm" onClick={handleLinkClick}>
                Neuroscience Timeline
              </a>
              <a href="/workbook" className="block text-slate-300 hover:text-green-300 transition-colors text-sm" onClick={handleLinkClick}>
                VOYCE Workbook
              </a>
              <a href="/newsletters" className="block text-slate-300 hover:text-green-300 transition-colors text-sm" onClick={handleLinkClick}>
                Newsletter
              </a>
              <a href="/thoughts" className="block text-slate-300 hover:text-green-300 transition-colors text-sm" onClick={handleLinkClick}>
                Thoughts
              </a>
            </div>
          </div>

          {/* Philosophy & Founder */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-100">Philosophy</h3>
            <div className="space-y-2">
              <a href="/suryavamshi-govardhan" className="block text-slate-300 hover:text-green-300 transition-colors text-sm font-medium" onClick={handleLinkClick}>
                Meet the Founder
              </a>
              <a href="/article/desire-suffering-journey" className="block text-slate-300 hover:text-green-300 transition-colors text-sm" onClick={handleLinkClick}>
                Desire & Suffering
              </a>
              <a href="/article/atheism-doctrines" className="block text-slate-300 hover:text-green-300 transition-colors text-sm" onClick={handleLinkClick}>
                Atheism Doctrines
              </a>
              <a href="/schools" className="block text-slate-300 hover:text-green-300 transition-colors text-sm" onClick={handleLinkClick}>
                VOYCE for Schools
              </a>
              <a 
                href="https://sites.google.com/view/4igroups/ai4schools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-green-400 hover:text-green-300 transition-colors text-sm font-medium" 
                onClick={handleLinkClick}
              >
                AI4Schools →
              </a>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-100">Stay Connected</h3>
            <div className="space-y-3">
              <Button 
                asChild
                variant="outline" 
                size="sm" 
                className="w-full border-green-300 text-green-300 hover:bg-green-100/10"
              >
                <a 
                  href="https://mailchi.mp/7027ec706d26/on-a-purpose" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                  onClick={handleLinkClick}
                >
                  <Mail className="h-4 w-4" />
                  <span>VOYCE Letter</span>
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="sm" 
                className="w-full border-pink-300 text-pink-300 hover:bg-pink-100/10"
              >
                <a 
                  href="https://www.instagram.com/suryavamshiiii" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                  onClick={handleLinkClick}
                >
                  <Instagram className="h-4 w-4" />
                  <span>Instagram</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* View Counter */}
        <div className="border-t border-slate-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <ViewCounter />
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end space-x-2 mb-2">
                <Heart className="h-4 w-4 text-red-400" />
                <span className="text-slate-300 text-sm">
                  VOYCE-X — Founded by{" "}
                  <a 
                    href="/suryavamshi-govardhan" 
                    className="text-green-300 hover:text-green-200 transition-colors font-medium"
                    onClick={handleLinkClick}
                  >
                    Suryavamshi Govardhan
                  </a>
                </span>
              </div>
              <p className="text-slate-400 text-sm italic">
                "Not just mental health, but clarity. Not just awareness, but a voice."
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-700 mt-6 pt-4">
          <p className="text-slate-500 text-xs text-center mb-4">
            VOYCE-X is a reflective and educational space. It does not provide therapy, diagnosis, or emergency support.
          </p>
        </div>

        {/* Legal Links */}
        <div className="border-t border-slate-700 pt-4">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link 
              to="/privacy-policy" 
              className="text-slate-400 hover:text-green-300 text-sm transition-colors"
              onClick={handleLinkClick}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-use" 
              className="text-slate-400 hover:text-green-300 text-sm transition-colors"
              onClick={handleLinkClick}
            >
              Terms of Use
            </Link>
            <Link 
              to="/contact" 
              className="text-slate-400 hover:text-green-300 text-sm transition-colors"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>
          <p className="text-slate-500 text-xs text-center">
            © 2025 VOYCE-X by Suryavamshi Govardhan. All rights reserved. Built with love for mental clarity and emotional freedom.
          </p>
        </div>
      </div>
    </footer>
  );
}
