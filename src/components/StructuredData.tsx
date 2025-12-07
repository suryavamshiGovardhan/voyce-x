/**
 * Structured Data Component for SEO
 * Adds JSON-LD schema.org markup for rich search results
 * Enhanced for better Google indexing and rich snippets
 */

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Article' | 'FAQPage' | 'Course' | 'MedicalWebPage' | 'HealthTopicContent';
  data: Record<string, unknown>;
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
 * Organization Schema for VOYCE
 */
export function OrganizationSchema() {
  return (
    <StructuredData
      type="Organization"
      data={{
        name: 'VOYCE',
        alternateName: 'VOYCE Mental Health Platform',
        description: 'Comprehensive mental health and wellness platform offering educational resources, philosophical insights, mood tracking, journaling, DSM-5 training, and personal growth tools.',
        url: 'https://voyce.lovable.app',
        logo: {
          '@type': 'ImageObject',
          url: 'https://storage.googleapis.com/gpt-engineer-file-uploads/TlmOIOM4z7NaylqoW24ZCR1G9mj2/uploads/1758355648497-1000172409.png',
          width: 512,
          height: 512
        },
        image: 'https://storage.googleapis.com/gpt-engineer-file-uploads/TlmOIOM4z7NaylqoW24ZCR1G9mj2/social-images/social-1758355685815-1000172409.png',
        foundingDate: '2025',
        sameAs: [
          'https://www.instagram.com/suryavamshiiii'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          availableLanguage: ['English', 'Hindi', 'Telugu', 'Kannada', 'Tamil']
        },
        areaServed: 'Worldwide',
        knowsAbout: [
          'Mental Health',
          'Psychology',
          'Mindfulness',
          'DSM-5',
          'Emotional Wellbeing',
          'Stress Management',
          'Anxiety',
          'Depression',
          'Personal Growth'
        ]
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
        name: 'VOYCE',
        alternateName: 'VOYCE Mental Health Platform',
        url: 'https://voyce.lovable.app',
        description: 'Mental health and wellness platform for emotional wellbeing, psychology education, and personal growth.',
        inLanguage: ['en', 'hi', 'te'],
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://voyce.lovable.app/blog?search={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
          },
          {
            '@type': 'ReadAction',
            target: 'https://voyce.lovable.app/blog'
          }
        ],
        publisher: {
          '@type': 'Organization',
          name: 'VOYCE',
          url: 'https://voyce.lovable.app'
        }
      }}
    />
  );
}

/**
 * FAQ Schema for common questions
 */
export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  return (
    <StructuredData
      type="FAQPage"
      data={{
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }}
    />
  );
}

/**
 * Medical/Health Content Schema
 */
export function HealthContentSchema({
  name,
  description,
  about,
  audience
}: {
  name: string;
  description: string;
  about: string;
  audience?: string;
}) {
  return (
    <StructuredData
      type="MedicalWebPage"
      data={{
        name,
        description,
        about: {
          '@type': 'MedicalCondition',
          name: about
        },
        audience: audience ? {
          '@type': 'MedicalAudience',
          audienceType: audience
        } : undefined,
        lastReviewed: new Date().toISOString().split('T')[0],
        reviewedBy: {
          '@type': 'Organization',
          name: 'VOYCE'
        }
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
