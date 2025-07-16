import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { OrganizationSchema, SoftwareSchema } from '@/components/seo/StructuredData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Summit Automation - AI-Powered Business Automation for Small Businesses",
  description: "Stop drowning in paperwork. Start growing your business. AI-powered CRM, invoicing, and custom automation tools designed for small businesses. Save 20+ hours weekly with intelligent business automation.",
  keywords: "AI automation, small business CRM, invoice automation, business process automation, receipt processing, lead generation, customer management, small business software, automated invoicing, AI business tools",
  authors: [{ name: "Summit Automation" }],
  creator: "Summit Automation",
  publisher: "Summit Automation",
  robots: "index, follow",
  alternates: {
    canonical: "https://summitautomation.io"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://summitautomation.io",
    siteName: "Summit Automation",
    title: "Summit Automation - AI-Powered Business Automation",
    description: "Stop drowning in paperwork. Start growing your business. AI-powered CRM and invoicing designed for small businesses.",
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
  },
  verification: {
    google: "your-google-site-verification-code",
    // Add your actual Google Search Console verification code here
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.className} bg-white text-gray-900 antialiased`}
      >
        {/* Google Analytics - Using Next.js Script component */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>

        <OrganizationSchema />
        <SoftwareSchema 
          name="Summit Automation"
          description="AI-powered business automation platform for small businesses. Automate CRM, invoicing, and business processes."
          url="https://summitautomation.io"
        />
        {children}
      </body>
    </html>
  );
}