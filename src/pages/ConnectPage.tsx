import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { MessageCircle, Mail, Heart, ExternalLink } from "lucide-react";

export default function ConnectPage() {
  return (
    <>
      <SEOHead
        title="Connect | VOYCE-X"
        description="Soft human contact. Reach out, share, or just say hello. No funnels, no urgency — just connection."
        keywords="contact, connect, mental health support, community, reach out"
      />
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          {/* Header */}
          <section className="safe-space breathing-space border-b border-border">
            <div className="text-center max-w-2xl mx-auto">
              <MessageCircle className="h-10 w-10 text-primary mx-auto mb-6" />
              <h1 className="text-3xl font-semibold text-foreground mb-4">
                Connect
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Reach out when you're ready. No pressure, no funnels, no marketing. 
                Just simple ways to stay connected.
              </p>
            </div>
          </section>
          
          {/* Connection Options */}
          <section className="safe-space py-12">
            <div className="max-w-xl mx-auto space-y-6">
              {/* Newsletter */}
              <a 
                href="https://mailchi.mp/7027ec706d26/on-a-purpose"
                target="_blank"
                rel="noopener noreferrer"
                className="story-card flex items-center gap-4"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-1">VOYCE Letter</h3>
                  <p className="text-sm text-muted-foreground">
                    Occasional reflections and updates. No spam, unsubscribe anytime.
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
              
              {/* Founder */}
              <a 
                href="/suryavamshi-govardhan"
                className="story-card flex items-center gap-4"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-1">Meet the Founder</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn about the person behind VOYCE and why this platform exists.
                  </p>
                </div>
              </a>
              
              {/* Share Story */}
              <div className="story-card">
                <h3 className="font-medium text-foreground mb-3">Share Your Story</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  If you'd like to share your experience anonymously to help others 
                  feel less alone, you can submit your story. All submissions are 
                  reviewed with care and respect.
                </p>
                <a 
                  href="mailto:stories@voyce-x.com?subject=My Story"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  <span>stories@voyce-x.com</span>
                </a>
              </div>
            </div>
          </section>
          
          {/* Important Resources */}
          <section className="safe-space py-12 bg-muted/30">
            <div className="max-w-xl mx-auto">
              <h2 className="text-lg font-medium text-foreground mb-6 text-center">
                If You Need Immediate Support
              </h2>
              
              <div className="disclaimer-box">
                <p className="text-muted-foreground text-sm mb-4">
                  <strong className="text-foreground">VOYCE-X is not a crisis service.</strong> If 
                  you're experiencing a mental health emergency or having thoughts of 
                  self-harm, please reach out to these resources:
                </p>
                
                <div className="space-y-2 text-sm">
                  <p className="text-foreground">
                    <strong>India:</strong> iCALL - 9152987821 | Vandrevala Foundation - 1860-2662-345
                  </p>
                  <p className="text-foreground">
                    <strong>US:</strong> 988 Suicide & Crisis Lifeline
                  </p>
                  <p className="text-foreground">
                    <strong>International:</strong>{" "}
                    <a 
                      href="https://findahelpline.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      findahelpline.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Closing */}
          <section className="safe-space py-16">
            <div className="text-center max-w-lg mx-auto">
              <p className="reflection-prompt">
                "You don't have to have the words. Sometimes reaching out is enough."
              </p>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
