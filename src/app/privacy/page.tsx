import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy - Summit Automation",
  description: "Learn how Summit Automation protects your privacy and handles your personal information. Read our comprehensive privacy policy.",
  keywords: "privacy policy, data protection, Summit Automation privacy, personal information, data security",
  openGraph: {
    title: "Privacy Policy - Summit Automation",
    description: "Learn how Summit Automation protects your privacy and handles your personal information.",
    url: "https://summitautomation.io/privacy",
    type: "website"
  },
  alternates: {
    canonical: "https://summitautomation.io/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header scrolled={true} />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Link>
          </nav>

          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-slate-50 mb-8">Privacy Policy</h1>
            
            <p className="text-slate-300 mb-8">
              <strong>Effective Date:</strong> January 15, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-slate-50 mb-3">Website Information</h3>
              <p className="text-slate-300 mb-4">
                We collect information you provide directly to us through our website:
              </p>
              <ul className="list-disc pl-6 text-slate-300 mb-6">
                <li>Contact information (email address, name, phone number)</li>
                <li>Business information you choose to share in contact forms</li>
                <li>Communications with our support team</li>
                <li>Website usage data through cookies and analytics</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-50 mb-3">Summit Platform Data</h3>
              <p className="text-slate-300 mb-4">
                When you use our Summit business management platform, we collect:
              </p>
              <ul className="list-disc pl-6 text-slate-300 mb-4">
                <li><strong>Business Data:</strong> Customer information, transaction records, invoices, receipts</li>
                <li><strong>Financial Information:</strong> Expense data, revenue tracking, accounting records</li>
                <li><strong>Inventory Data:</strong> Stock levels, product information, supplier details</li>
                <li><strong>Location Data:</strong> Mileage tracking, business trip logs (with your permission)</li>
                <li><strong>User Activity:</strong> Login times, feature usage, system interactions</li>
                <li><strong>Images:</strong> Receipt photos, business documents you upload</li>
                <li><strong>Team Data:</strong> User roles, permissions, collaboration activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">2. How We Use Your Information</h2>
              <p className="text-slate-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-slate-300 mb-6">
                <li><strong>Service Delivery:</strong> Provide our Summit platform, process your business data, generate insights and reports</li>
                <li><strong>AI Processing:</strong> Use machine learning to categorize expenses, extract receipt data, and provide business analytics</li>
                <li><strong>Automation:</strong> Enable automated features like lead management, inventory alerts, and recurring payments</li>
                <li><strong>Support:</strong> Respond to your questions, provide technical assistance, and resolve issues</li>
                <li><strong>Communication:</strong> Send service updates, security alerts, and product announcements</li>
                <li><strong>Improvement:</strong> Analyze usage patterns to enhance features and develop new capabilities</li>
                <li><strong>Security:</strong> Protect against fraud, unauthorized access, and security threats</li>
                <li><strong>Compliance:</strong> Meet legal and regulatory requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">3. Information Sharing and Third Parties</h2>
              <p className="text-slate-300 mb-4">
                <strong>We do not sell, trade, or rent your personal or business information to third parties.</strong> We may share your information only in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 text-slate-300 mb-6">
                <li><strong>Service Providers:</strong> Trusted third-party services that help us operate our platform (cloud hosting, payment processing, email delivery)</li>
                <li><strong>Business Integrations:</strong> With your explicit consent, we may integrate with accounting software, payment processors, or other business tools you authorize</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Safety and Security:</strong> To protect our users, prevent fraud, or address security threats</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets (with notification to users)</li>
                <li><strong>With Your Consent:</strong> Any other sharing will require your explicit permission</li>
              </ul>

              <p className="text-slate-300 mb-4">
                All third-party service providers are contractually bound to protect your information and use it only for specified purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">4. Data Security and Protection</h2>
              <p className="text-slate-300 mb-4">
                We implement comprehensive security measures to protect your business and personal information:
              </p>
              <ul className="list-disc pl-6 text-slate-300 mb-6">
                <li><strong>Encryption:</strong> All data is encrypted at rest using AES-256 and in transit via TLS 1.3</li>
                <li><strong>Access Controls:</strong> Multi-factor authentication, role-based permissions, and principle of least privilege</li>
                <li><strong>Infrastructure:</strong> Secure cloud hosting with enterprise-grade firewalls and intrusion detection</li>
                <li><strong>Monitoring:</strong> 24/7 security monitoring and automated threat detection</li>
                <li><strong>Compliance:</strong> SOC 2 Type 2 standards and regular security audits</li>
                <li><strong>Incident Response:</strong> Established procedures for security incident management and user notification</li>
                <li><strong>Data Backup:</strong> Regular encrypted backups with point-in-time recovery capabilities</li>
              </ul>

              <p className="text-slate-300 mb-4">
                While we implement industry-standard security measures, no system is 100% secure. We continuously update our security practices to address emerging threats.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">5. Your Rights</h2>
              <p className="text-slate-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-slate-300 mb-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">6. Data Retention</h2>
              <p className="text-slate-300 mb-4">
                We retain your information for as long as necessary to provide our services and comply with legal obligations:
              </p>
              <ul className="list-disc pl-6 text-slate-300 mb-6">
                <li><strong>Active Accounts:</strong> We retain your business data while your account is active and for up to 7 years after account closure for tax and legal purposes</li>
                <li><strong>Inactive Accounts:</strong> Accounts inactive for more than 3 years may be archived, with 90 days notice before deletion</li>
                <li><strong>Website Data:</strong> Analytics and cookies are retained for up to 26 months</li>
                <li><strong>Communication Records:</strong> Support communications are retained for 3 years</li>
                <li><strong>Legal Requirements:</strong> Some data may be retained longer to comply with applicable laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">7. Cookies and Website Analytics</h2>
              <p className="text-slate-300 mb-4">
                We use cookies and similar technologies to improve your website experience:
              </p>
              <ul className="list-disc pl-6 text-slate-300 mb-6">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality and security</li>
                <li><strong>Analytics Cookies:</strong> Google Analytics to understand website usage and improve user experience</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Chat Cookies:</strong> Enable our AI-powered customer support chat widget</li>
              </ul>

              <p className="text-slate-300 mb-4">
                You can control cookie settings through your browser, though disabling certain cookies may limit website functionality. You can opt out of Google Analytics tracking.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">8. International Data Transfers</h2>
              <p className="text-slate-300 mb-4">
                Summit Automation is based in the United States. If you are accessing our services from outside the US, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located and our central database is operated.
              </p>
              <p className="text-slate-300 mb-6">
                We ensure that international data transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">9. Changes to This Policy</h2>
              <p className="text-slate-300 mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-50 mb-4">10. Contact Us</h2>
              <p className="text-slate-300 mb-4">
                If you have any questions about this privacy policy, your data, or our privacy practices, please contact us:
              </p>
              <div className="text-slate-300 space-y-2">
                <p><strong>Email:</strong> privacy@summitautomation.io</p>
                <p><strong>General Contact:</strong> clientservices@summitautomation.io</p>
                <p><strong>Mailing Address:</strong><br />
                Summit Automation<br />
                Data Protection Officer<br />
                New Castle, PA 16101<br />
                United States</p>
              </div>

              <p className="text-slate-300 mt-6">
                We will respond to privacy-related inquiries within 30 days of receipt.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}