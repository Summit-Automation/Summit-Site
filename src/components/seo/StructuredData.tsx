'use client';

interface OrganizationSchemaProps {
  url?: string;
}

export const OrganizationSchema = ({ url = "https://summitautomation.io" }: OrganizationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Summit Automation",
    "alternateName": "Summit",
    "url": url,
    "logo": "https://summitautomation.io/images/4_SVG.svg",
    "description": "AI-powered business automation platform for small businesses. Automate CRM, invoicing, and business processes to save time and grow faster.",
    "sameAs": [
      // Add your social media URLs here when available
      // "https://twitter.com/summitautomation",
      // "https://linkedin.com/company/summit-automation"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "admin@summitautomation.io"
    },
    "foundingDate": "2025",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "2-10"
    },
    "industry": "Business Automation Software",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface SoftwareSchemaProps {
  name: string;
  description: string;
  url: string;
}

export const SoftwareSchema = ({ name, description, url }: SoftwareSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "0",
      "description": "Free trial available - Join waitlist for early access"
    },
    "creator": {
      "@type": "Organization",
      "name": "Summit Automation",
      "url": "https://summitautomation.io"
    },
    "featureList": [
      "AI Receipt Processing",
      "Automated CRM",
      "Invoice Generation", 
      "Lead Management",
      "Business Process Automation"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface BlogPostSchemaProps {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  url: string;
  imageUrl?: string;
}

export const BlogPostSchema = ({ 
  title, 
  description, 
  author, 
  datePublished, 
  url,
  imageUrl = "https://summitautomation.io/blog-og-image.png"
}: BlogPostSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Summit Automation",
      "logo": {
        "@type": "ImageObject",
        "url": "https://summitautomation.io/images/4_SVG.svg"
      }
    },
    "datePublished": datePublished,
    "dateModified": datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": 1200,
      "height": 630
    },
    "articleSection": "Business Automation",
    "keywords": [
      "business automation",
      "AI tools",
      "small business",
      "productivity",
      "CRM",
      "invoicing"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const FAQSchema = ({ faqs }: FAQSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};