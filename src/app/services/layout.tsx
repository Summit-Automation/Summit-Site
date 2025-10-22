import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services - Custom Business Automation & Web Development | Summit Automation",
  description: "Custom business automation and professional web development services. We build API integrations, AI agents, chatbots, voice bots, workflow automation, and custom websites tailored to your business needs.",
  keywords: "custom automation services, API integration, AI agents, chatbots, voice bots, workflow automation, custom web development, business automation Pittsburgh, automation consulting",
  openGraph: {
    title: "Services - Summit Automation",
    description: "Custom business automation and professional web development services tailored to your unique business needs.",
    url: "https://summitautomation.io/services",
    type: "website"
  },
  alternates: {
    canonical: "https://summitautomation.io/services"
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
