import { lazy, Suspense, memo } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustHero from "@/components/TrustHero";
import { SEOHead } from "@/components/SEOHead";
import { OrganizationSchema, WebSiteSchema, FounderSchema } from "@/components/StructuredData";

// Lazy load non-critical components for better LCP
const AccessibleExploreSection = lazy(() => import("@/components/AccessibleExploreSection"));

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
        title="VOYCE-X | A Quiet Space to Understand Your Own Thoughts"
        description="VOYCE-X: A reflective and educational space for mental wellness. Not therapy, not diagnosis — just reflection, learning, and awareness. Founded by Suryavamshi Govardhan."
        keywords="VOYCE-X, Suryavamshi Govardhan, mental health, mindfulness, reflection, self-awareness, emotional wellbeing, mental wellness"
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
          {/* Hero Section - Trust-first, simplified */}
          <TrustHero />
          
          {/* Explore Section - For returning users who want more */}
          <Suspense fallback={<LoadingFallback />}>
            <AccessibleExploreSection />
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default memo(Index);
