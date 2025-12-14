import { SEOHead } from "@/components/SEOHead";
import { FounderSchema, OrganizationSchema } from "@/components/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Brain, Users, Sparkles, BookOpen, Target } from "lucide-react";

export default function FounderPage() {
  return (
    <>
      <SEOHead
        title="Suryavamshi Govardhan | Founder of VOYCE-X"
        description="Meet Suryavamshi Govardhan, the visionary founder of VOYCE-X — a mental health and wellness platform bridging ancient wisdom with modern psychology for accessible emotional wellbeing."
        keywords="Suryavamshi Govardhan, VOYCE-X founder, mental health advocate, wellness entrepreneur, psychology student, emotional wellbeing, mindfulness leader"
        ogImage="https://voyce-x.lovable.app/og-image.png"
        canonicalUrl="https://voyce-x.lovable.app/suryavamshi-govardhan"
      />
      <FounderSchema />
      <OrganizationSchema />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Founder & Visionary
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Suryavamshi Govardhan
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Founder of VOYCE-X — Bridging Ancient Wisdom with Modern Psychology
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link to="/" aria-label="Visit VOYCE-X Homepage">
                <Button variant="default" size="lg" className="gap-2">
                  <Heart className="w-4 h-4" />
                  Explore VOYCE-X
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a 
                href="https://www.instagram.com/suryavamshiiii" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow Suryavamshi Govardhan on Instagram"
              >
                <Button variant="outline" size="lg">
                  Connect on Instagram
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-background" aria-labelledby="about-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              The Journey Behind VOYCE-X
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                <strong className="text-foreground">Suryavamshi Govardhan</strong> is the founder and visionary behind 
                <Link to="/" className="text-primary hover:underline font-medium"> VOYCE-X</Link>, 
                a transformative mental health and wellness platform designed to make emotional wellbeing accessible to everyone. 
                As a student and aspiring entrepreneur from India, Suryavamshi Govardhan recognized the pressing need for 
                culturally sensitive, scientifically grounded mental health resources in underserved communities.
              </p>

              <p>
                Growing up in an environment where mental health conversations were often stigmatized, Suryavamshi Govardhan 
                witnessed firsthand the struggles of young people who lacked access to proper emotional support and guidance. 
                This personal experience became the catalyst for creating VOYCE-X — a platform that combines the timeless 
                wisdom of Eastern philosophy with evidence-based psychological practices.
              </p>

              <Card className="my-8 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic text-foreground border-l-4 border-primary pl-4">
                    "Mental health is not a luxury — it is a fundamental human right. Through VOYCE-X, I aim to create 
                    a space where every individual, regardless of their background, can find the tools and support they 
                    need for their emotional journey."
                    <footer className="mt-2 text-sm text-muted-foreground not-italic">
                      — Suryavamshi Govardhan, Founder of VOYCE-X
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">
                A Vision Rooted in Purpose
              </h3>
              <p>
                The vision of Suryavamshi Govardhan extends beyond creating just another wellness app. 
                VOYCE-X represents a comprehensive ecosystem for mental health education, featuring DSM-5 training modules, 
                ICD-9 diagnostic references, philosophical exploration, mood tracking, and personalized journaling experiences. 
                Each feature has been thoughtfully designed to serve users across multiple languages including Telugu, Hindi, 
                English, Kannada, and Tamil.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Education and Expertise
              </h3>
              <p>
                As a dedicated student of psychology and human behavior, Suryavamshi Govardhan has immersed himself in 
                the study of neuroscience, cognitive behavioral patterns, and the intersection of spirituality with mental 
                wellness. His approach to VOYCE-X reflects this multidisciplinary understanding — integrating insights from 
                Buddhist philosophy, modern psychology, and neuroscientific research to create content that resonates on 
                both intellectual and emotional levels.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Building for the Future
              </h3>
              <p>
                Under the leadership of Suryavamshi Govardhan, VOYCE-X continues to evolve with new features including 
                AI-powered journal analysis, gamification elements for sustained engagement, and community-driven content 
                creation. The platform serves as a testament to what can be achieved when technology is wielded with 
                compassion and purpose.
              </p>

              <p>
                The journey of Suryavamshi Govardhan with VOYCE-X is just beginning. With a commitment to continuous 
                learning, authentic connection, and unwavering dedication to mental health advocacy, he envisions a world 
                where emotional wellbeing is not just understood but actively nurtured by every individual and community.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-muted/30" aria-labelledby="values-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Core Values of VOYCE-X
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Compassion First",
                  description: "Every feature and piece of content is crafted with genuine care for user wellbeing."
                },
                {
                  icon: Brain,
                  title: "Science-Backed",
                  description: "Integrating evidence-based psychology with proven therapeutic approaches."
                },
                {
                  icon: Users,
                  title: "Inclusive Access",
                  description: "Breaking down barriers to mental health resources across languages and cultures."
                },
                {
                  icon: Sparkles,
                  title: "Ancient Wisdom",
                  description: "Honoring the timeless insights of Eastern philosophy and mindfulness traditions."
                },
                {
                  icon: BookOpen,
                  title: "Continuous Learning",
                  description: "Fostering growth through education, reflection, and self-discovery."
                },
                {
                  icon: Target,
                  title: "Purpose-Driven",
                  description: "Building with intention, always keeping the user's journey at the center."
                }
              ].map((value, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/5" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 id="cta-heading" className="text-3xl font-bold text-foreground mb-4">
              Experience VOYCE-X Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of users on their journey to emotional wellbeing with the platform 
              created by Suryavamshi Govardhan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" aria-label="Start your wellness journey with VOYCE-X">
                <Button size="lg" className="gap-2">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/blog" aria-label="Read articles on VOYCE-X blog">
                <Button variant="outline" size="lg">
                  Read Our Blog
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
