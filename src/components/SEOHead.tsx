import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

const DEFAULT_TITLE = "VOYCE-X | Mental Health & Mindfulness Platform";
const DEFAULT_DESCRIPTION = "A compassionate mental health platform offering blogs, stories, and resources for emotional wellbeing, mindfulness, and personal growth.";
const DEFAULT_KEYWORDS = "mental health, mindfulness, emotional wellbeing, psychology, self-care, meditation, mental wellness";
const DEFAULT_OG_IMAGE = "https://voyce-x.lovable.app/og-image.png";

export function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  canonicalUrl,
  noindex = false
}: SEOHeadProps) {
  const fullTitle = title ? `${title} | VOYCE-X` : DEFAULT_TITLE;
  const currentUrl = canonicalUrl || window.location.href;

  useEffect(() => {
    // Set page title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:site_name', 'VOYCE-X', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    
    // Robots
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow');
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // Viewport (ensure it's set)
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=5');
      document.head.appendChild(viewportMeta);
    }
  }, [fullTitle, description, keywords, ogImage, ogType, currentUrl, noindex]);

  return null;
}
