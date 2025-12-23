import { memo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Heart, BookOpen, Feather, Compass, ArrowRight } from "lucide-react";

function Index() {
  return (
    <>
      <SEOHead 
        title="VOYCE-X | Mental Clarity Ecosystem"
        description="A calm space for mental clarity, emotional awareness, and human connection. VOYCE-X is not therapy or diagnosis — it's a reflection-first platform for students and communities."
        keywords="mental clarity, emotional awareness, reflection, mindfulness, student mental health, VOYCE"
      />
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          {/* Hero Section - Calm, Human, Clear */}
          <section className="safe-space breathing-space">
            <div className="text-center max-w-2xl mx-auto">
              {/* Icon */}
              <div className="mb-8">
                <Heart className="h-12 w-12 text-primary mx-auto animate-breathe" />
              </div>
              
              {/* Main Message */}
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 leading-tight">
                A calm space for mental clarity
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                VOYCE-X is a reflection-first platform designed for awareness, 
                storytelling, and human connection — especially for students 
                and communities in rural and semi-urban contexts.
              </p>
              
              {/* Clear Disclaimer */}
              <div className="disclaimer-box mb-8 text-left">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Important:</strong> This platform is not therapy, 
                  diagnosis, or medical treatment. It's a space for reflection and awareness.
                </p>
              </div>
              
              {/* Gentle CTA */}
              <Link 
                to="/stories" 
                className="gentle-cta group"
              >
                <span>Begin with a story</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>
          
          {/* Section Divider */}
          <div className="section-divider" />
          
          {/* Why VOYCE Exists */}
          <section className="safe-space">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-xl font-medium text-foreground mb-4">
                Why this platform exists
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Too many people struggle in silence — unsure where to start, 
                afraid of judgment, or without access to resources. VOYCE-X 
                exists to offer a gentle first step: a place to read, reflect, 
                and feel less alone.
              </p>
            </div>
          </section>
          
          {/* Section Divider */}
          <div className="section-divider" />
          
          {/* Core Offerings - Simple Cards */}
          <section className="safe-space breathing-space">
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Stories */}
              <Link to="/stories" className="story-card group">
                <BookOpen className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Stories</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Anonymous, first-person human experiences. Read and feel less alone.
                </p>
              </Link>
              
              {/* Reflection */}
              <Link to="/reflection" className="story-card group">
                <Feather className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Reflection</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Guided journaling prompts. Private, personal, at your own pace.
                </p>
              </Link>
              
              {/* Learn */}
              <Link to="/learn" className="story-card group">
                <Heart className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Learn</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Understand emotions, stress, and thinking patterns — without clinical framing.
                </p>
              </Link>
              
              {/* VOYCE Path */}
              <Link to="/path" className="story-card group">
                <Compass className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">VOYCE Path</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A slow, optional journey through awareness, reflection, expression, and clarity.
                </p>
              </Link>
            </div>
          </section>
          
          {/* Final Note */}
          <section className="safe-space pb-16">
            <div className="text-center max-w-lg mx-auto">
              <p className="reflection-prompt">
                "Take your time. There's no rush here."
              </p>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default memo(Index);
