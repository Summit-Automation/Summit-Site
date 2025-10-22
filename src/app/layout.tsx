import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Summit Automation - Custom Business Automation Solutions | Pittsburgh, PA",
  description: "Custom business automation tailored to your needs. We build API integrations, AI agents, chatbots, voice bots, advanced workflows, and custom software solutions. Serving Pittsburgh, New Castle, and businesses worldwide. Save 20+ hours weekly with custom automation.",
  keywords: "custom automation Pittsburgh, API integration Pennsylvania, workflow automation New Castle PA, business process automation Pittsburgh, AI agents PA, chatbots Pittsburgh, voice bots Pennsylvania, custom software automation Pittsburgh, business integration PA, automation consulting Pittsburgh",
  authors: [{ name: "Summit Automation" }],
  creator: "Summit Automation",
  publisher: "Summit Automation",
  robots: "index, follow",
  applicationName: "Summit Automation",
  referrer: "origin-when-cross-origin",
  category: "Business Automation Services",
  classification: "Custom Business Automation Platform",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://summitautomation.io"
  },
  verification: {
    google: "",
    other: {
      "msvalidate.01": "",
      "yandex-verification": ""
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://summitautomation.io",
    siteName: "Summit Automation",
    title: "Summit Automation - Custom Business Automation Solutions",
    description: "Stop drowning in paperwork. Start growing your business. Custom automation, API integrations, AI agents, and workflow solutions tailored to your business.",
    images: [
      {
        url: "https://summitautomation.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Summit Automation - Custom Business Automation Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Automation - Custom Business Automation",
    description: "Stop drowning in paperwork. Start growing your business with custom automation solutions tailored to your needs.",
    images: ["https://summitautomation.io/og-image.png"],
    creator: "@summitautomation"
  },
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Performance Optimization */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Core Web Vitals Optimization */}
        <link rel="preload" href="/images/4_SVG.svg" as="image" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Summit Automation",
              "alternateName": "Summit",
              "url": "https://summitautomation.io",
              "logo": "https://summitautomation.io/images/4_SVG.svg",
              "description": "Custom business automation solutions for businesses of all sizes. We build API integrations, AI agents, chatbots, voice bots, and tailored workflow automation to save time and grow faster.",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "email": "clientservices@summitautomation.io",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "technical support",
                  "email": "clientservices@summitautomation.io",
                  "availableLanguage": "English"
                }
              ],
              "foundingDate": "2025",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "2-10"
              },
              "industry": "Custom Business Automation Services",
              "knowsAbout": [
                "Custom Automation",
                "API Integration",
                "Workflow Automation",
                "AI Agents",
                "Chatbots",
                "Voice Automation",
                "Business Process Automation",
                "Document Processing"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "New Castle",
                "addressRegion": "PA",
                "postalCode": "",
                "addressCountry": "US"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Pittsburgh",
                  "addressRegion": "PA",
                  "addressCountry": "US"
                },
                {
                  "@type": "City", 
                  "name": "New Castle",
                  "addressRegion": "PA",
                  "addressCountry": "US"
                },
                {
                  "@type": "State",
                  "name": "Pennsylvania",
                  "addressCountry": "US"
                }
              ],
              "sameAs": [
                "https://summitautomation.io",
                "https://www.linkedin.com/company/summitautomation/"
              ]
            })
          }}
        />
        
        {/* WebSite Schema for Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Summit Automation",
              "alternateName": "Summit",
              "url": "https://summitautomation.io",
              "description": "Custom business automation solutions tailored to your business needs",
              "publisher": {
                "@type": "Organization",
                "name": "Summit Automation"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://summitautomation.io/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Software Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Custom Business Automation",
              "name": "Summit Automation",
              "description": "Custom business automation solutions including API integrations, AI agents, chatbots, voice bots, workflow automation, and tailored software development.",
              "url": "https://summitautomation.io",
              "provider": {
                "@type": "Organization",
                "name": "Summit Automation",
                "url": "https://summitautomation.io"
              },
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Custom Automation Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom API Integration",
                      "description": "Connect your existing tools and systems seamlessly"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Agents & Chatbots",
                      "description": "Intelligent conversational AI for customer interactions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Workflow Automation",
                      "description": "Advanced automated workflows tailored to your business"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Summit Automation",
              "description": "Custom business automation services for businesses in Pittsburgh, Pennsylvania and worldwide. Specializing in API integrations, AI agents, chatbots, voice bots, workflow automation, and custom software solutions.",
              "url": "https://summitautomation.io",
              "telephone": "",
              "email": "clientservices@summitautomation.io",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "New Castle",
                "addressRegion": "PA",
                "postalCode": "",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.9909",
                "longitude": "-80.3473"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Pittsburgh",
                  "addressRegion": "PA"
                },
                {
                  "@type": "City",
                  "name": "New Castle", 
                  "addressRegion": "PA"
                },
                {
                  "@type": "State",
                  "name": "Pennsylvania"
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "40.4406",
                  "longitude": "-79.9959"
                },
                "geoRadius": "100000"
              },
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card", "PayPal"],
              "currenciesAccepted": "USD",
              "sameAs": [
                "https://summitautomation.io",
                "https://www.linkedin.com/company/summitautomation/"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {/* Google Analytics with your actual ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HYGTW8V3Z4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HYGTW8V3Z4');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}