import { lazy, Suspense, memo } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PerformanceOptimizedHero from "@/components/PerformanceOptimizedHero";
import QuickEngagementBar from "@/components/QuickEngagementBar";
import AccessibleExploreSection from "@/components/AccessibleExploreSection";
import { SEOHead } from "@/components/SEOHead";
import { OrganizationSchema, WebSiteSchema, FounderSchema } from "@/components/StructuredData";

// Lazy load non-critical components for better LCP
const MoodMeter = lazy(() => import("@/components/MoodMeter"));
const LatestNews = lazy(() => import("@/components/LatestNews"));

// Loading fallback with explicit dimensions to prevent CLS
const LoadingFallback = memo(() => (
  <div 
    className="w-full h-48 bg-muted/30 animate-pulse rounded-lg flex items-center justify-center"
    role="status"
    aria-label="Loading content"
  >
    <span className="sr-only">Loading...</span>
  </div>
));

LoadingFallback.displayName = 'LoadingFallback';

function Index() {
  return (
    <>
      {/* SEO Meta Tags */}
      <SEOHead 
        title="VOYCE-X | Mental Health & Wellness Platform by Suryavamshi Govardhan"
        description="VOYCE-X: Your comprehensive mental health companion founded by Suryavamshi Govardhan. Explore evidence-based psychology, mindfulness practices, DSM-5 training, mood tracking, and personal growth resources."
        keywords="VOYCE-X, Suryavamshi Govardhan, mental health, mindfulness, psychology, emotional wellbeing, self-care, meditation, mental wellness, DSM-5, therapy resources, mood tracking, journaling"
        ogImage="https://storage.googleapis.com/gpt-engineer-file-uploads/TlmOIOM4z7NaylqoW24ZCR1G9mj2/social-images/social-1758355685815-1000172409.png"
        canonicalUrl="https://voyce-x.lovable.app/"
      />
      
      {/* Structured Data for SEO */}
      <OrganizationSchema />
      <WebSiteSchema />
      <FounderSchema />
      
      <div className="min-h-screen bg-background">
        {/* Skip Navigation Link - Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Skip to main content
        </a>
        
        <Navbar />
        
        <main id="main-content" role="main" tabIndex={-1}>
          {/* Hero Section - Critical LCP element */}
          <PerformanceOptimizedHero />
          
          {/* Quick Engagement Bar - Immediate user actions */}
          <QuickEngagementBar />
          
          {/* Explore Section - Main content */}
          <AccessibleExploreSection />
          
          {/* Secondary Content - Lazy loaded */}
          <div className="container mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Suspense fallback={<LoadingFallback />}>
                  <MoodMeter />
                </Suspense>
              </div>
              <div className="lg:col-span-1">
                <Suspense fallback={<LoadingFallback />}>
                  <LatestNews />
                </Suspense>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default memo(Index);
