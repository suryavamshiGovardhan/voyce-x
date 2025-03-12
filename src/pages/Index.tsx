import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Newsletters from "@/components/Newsletters";
import ClearThoughts from "@/components/ClearThoughts";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, MessageSquare } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Services section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Mental Health Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Professional guidance and support for managing anxiety, depression, and other mental health conditions.
                    </p>
                    <Button asChild variant="outline" className="mt-2">
                      <a href="https://mental-health-management-mhm.b12sites.com/" target="_blank" rel="noopener noreferrer">
                        Learn More
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                      <Heart className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Community Resources</h3>
                    <p className="text-muted-foreground mb-4">
                      Access to newsletters, articles, and resources to help you on your mental wellness journey.
                    </p>
                    <Button asChild className="mt-2">
                      <a href="/newsletters">
                        View Newsletters
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-accent/30 flex items-center justify-center mb-4">
                      <MessageSquare className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Express Yourself</h3>
                    <p className="text-muted-foreground mb-4">
                      Share your thoughts and experiences in a safe, supportive environment with our Clear Thoughts platform.
                    </p>
                    <Button asChild variant="outline" className="mt-2">
                      <a href="/thoughts">
                        Share Thoughts
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Featured newsletters preview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-primary">Featured Resources</h2>
              <Button asChild variant="outline">
                <a href="/newsletters">View All</a>
              </Button>
            </div>
            <Newsletters />
          </div>
        </section>
        
        {/* Clear thoughts preview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-primary">Community Thoughts</h2>
              <Button asChild variant="outline">
                <a href="/thoughts">View All</a>
              </Button>
            </div>
            <ClearThoughts />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
