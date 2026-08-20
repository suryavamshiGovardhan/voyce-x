import type { ReactNode } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { SEOHead } from "@/components/SEOHead";

interface PageShellProps {
  children: ReactNode;
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  noindex?: boolean;
}

export default function PageShell({
  children,
  title,
  description,
  canonical,
  keywords,
  noindex,
}: PageShellProps) {
  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonical ? `https://voyce-x.lovable.app${canonical}` : undefined}
        noindex={noindex}
      />
      <div className="flex min-h-screen flex-col bg-background">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
