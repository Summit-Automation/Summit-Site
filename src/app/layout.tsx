import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Summit Automation - AI-Powered Business Automation | Pittsburgh, PA",
  description: "Stop drowning in paperwork. Start growing your business. AI-powered CRM, invoicing, and custom automation tools designed for businesses of all sizes. Serving Pittsburgh, New Castle, and businesses worldwide. Save 20+ hours weekly with intelligent business automation.",
  keywords: "AI automation Pittsburgh, business CRM Pennsylvania, invoice automation New Castle PA, business process automation Pittsburgh, receipt processing PA, lead generation Pittsburgh, customer management Pennsylvania, business automation software Pittsburgh, automated invoicing PA, AI business tools Pittsburgh",
  authors: [{ name: "Summit Automation" }],
  creator: "Summit Automation",
  publisher: "Summit Automation",
  robots: "index, follow",
  applicationName: "Summit Automation",
  referrer: "origin-when-cross-origin",
  category: "Business Software",
  classification: "Business Automation Platform",
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
    title: "Summit Automation - AI-Powered Business Automation",
    description: "Stop drowning in paperwork. Start growing your business. AI-powered CRM and invoicing designed for businesses of all sizes.",
    images: [
      {
        url: "https://summitautomation.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Summit Automation - AI-Powered Business Automation"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Automation - AI-Powered Business Automation",
    description: "Stop drowning in paperwork. Start growing your business with AI automation.",
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
    <html lang="en">
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
              "description": "AI-powered business automation platform for businesses of all sizes. Automate CRM, invoicing, and business processes to save time and grow faster.",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "email": "admin@summitautomation.io",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "technical support",
                  "email": "admin@summitautomation.io",
                  "availableLanguage": "English"
                }
              ],
              "foundingDate": "2025",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "2-10"
              },
              "industry": "Business Automation Software",
              "knowsAbout": [
                "AI Automation",
                "Business Process Automation", 
                "CRM Systems",
                "Invoice Processing",
                "Receipt Processing"
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
                "https://summitautomation.io"
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
              "description": "AI-powered business automation platform for businesses of all sizes",
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
              "@type": "SoftwareApplication",
              "name": "Summit Automation",
              "description": "AI-powered business automation platform for businesses of all sizes. Automate CRM, invoicing, and business processes.",
              "url": "https://summitautomation.io",
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
              "description": "AI-powered business automation services for businesses in Pittsburgh, Pennsylvania and worldwide. Specializing in CRM, invoicing, and business process automation.",
              "url": "https://summitautomation.io",
              "telephone": "",
              "email": "admin@summitautomation.io",
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
              "currenciesAccepted": "USD"
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
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