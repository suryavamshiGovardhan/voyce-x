/**
 * Structured Data Component for SEO
 * Adds JSON-LD schema.org markup for rich search results
 */

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Article' | 'FAQPage' | 'Course';
  data: Record<string, any>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

/**
 * Organization Schema for VOYCE-X
 */
export function OrganizationSchema() {
  return (
    <StructuredData
      type="Organization"
      data={{
        name: 'VOYCE-X',
        description: 'Mental health and mindfulness platform for emotional wellbeing',
        url: 'https://voyce-x.lovable.app',
        logo: 'https://voyce-x.lovable.app/og-image.png',
        sameAs: [
          'https://www.instagram.com/suryavamshiiii',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: 'support@voyce-x.com',
        },
      }}
    />
  );
}

/**
 * WebSite Schema with Search Action
 */
export function WebSiteSchema() {
  return (
    <StructuredData
      type="WebSite"
      data={{
        name: 'VOYCE-X',
        url: 'https://voyce-x.lovable.app',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://voyce-x.lovable.app/blog?search={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      }}
    />
  );
}

/**
 * Article Schema for Blog Posts
 */
export function ArticleSchema({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
}: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) {
  return (
    <StructuredData
      type="Article"
      data={{
        headline: title,
        description,
        author: {
          '@type': 'Person',
          name: author,
        },
        datePublished,
        dateModified: dateModified || datePublished,
        image: image || 'https://voyce-x.lovable.app/og-image.png',
        publisher: {
          '@type': 'Organization',
          name: 'VOYCE-X',
          logo: {
            '@type': 'ImageObject',
            url: 'https://voyce-x.lovable.app/og-image.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url,
        },
      }}
    />
  );
}
