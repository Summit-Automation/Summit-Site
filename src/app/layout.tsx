import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Summit Automation - CRM & Invoicing for Contractors",
  description: "Stop drowning in paperwork. Start growing your business. AI-powered CRM and invoicing designed for real contractors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}