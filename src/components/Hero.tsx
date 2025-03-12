
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Healing Starts with <br className="hidden sm:block" />
            <span className="text-secondary">Your Voice</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            VOYCE Mental Health Services provides support, resources, and community to help you navigate your mental health journey. 
            Share your thoughts and connect with others on the path to healing.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg" className="animate-pulse-gentle">
              <Link to="/newsletters">
                Explore Newsletters
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/thoughts">Share Your Thoughts</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
