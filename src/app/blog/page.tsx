// FILE: src/app/blog/page.tsx
// REPLACE THE ENTIRE CONTENT OF YOUR EXISTING FILE WITH THIS

import React from 'react';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

// Add this metadata export for the blog page
export const metadata: Metadata = {
  title: "Blog - Summit Automation | Business Automation Insights",
  description: "Read the latest insights, tips, and updates about business automation, AI tools, and growing your business from the Summit Automation team.",
  keywords: "business automation blog, AI tools insights, business tips, automation trends, CRM advice, invoicing tips",
  openGraph: {
    title: "Blog - Summit Automation",
    description: "Read the latest insights about business automation and AI tools for businesses of all sizes.",
    url: "https://summitautomation.io/blog",
    type: "website",
    images: [
      {
        url: "https://summitautomation.io/blog-og-image.png",
        width: 1200,
        height: 630,
        alt: "Summit Automation Blog"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Summit Automation",
    description: "Read the latest insights about business automation and AI tools for businesses of all sizes.",
    images: ["https://summitautomation.io/blog-og-image.png"]
  },
  alternates: {
    canonical: "https://summitautomation.io/blog"
  }
};

// Type definitions
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  published: boolean;
}

// Updated blog posts for businesses
const blogPosts: BlogPost[] = [
  {
    slug: 'summit-early-access-program',
    title: "Join Summit's Early Access Program: What to Expect",
    excerpt: "We're opening our doors to select businesses for exclusive early access. Learn about our alpha testing program and how to get priority access to Summit's powerful features.",
    author: "Brandon Allshouse",
    date: "2025-08-15",
    readTime: "4 min read",
    category: "Company Updates",
    published: true
  },
  {
    slug: 'complete-business-management-suite',
    title: "Why Your Business Needs More Than Just CRM Software",
    excerpt: "Most business tools solve one problem at a time. Learn why integrated business management platforms are the future and how they can transform your operations.",
    author: "Robert Fusco",
    date: "2025-08-20",
    readTime: "6 min read",
    category: "Business Strategy",
    published: true
  },
  {
    slug: 'ai-powered-inventory-management',
    title: "How AI-Powered Inventory Management Prevents Stockouts",
    excerpt: "Never run out of products again. Discover how intelligent inventory management systems use AI to predict demand, optimize stock levels, and automate reordering.",
    author: "Brandon Allshouse",
    date: "2025-08-25",
    readTime: "5 min read",
    category: "Technology",
    published: true
  },
  {
    slug: 'businesses-drowning-in-paperwork',
    title: "Why Businesses Are Drowning in Paperwork (And How AI Can Save Them)",
    excerpt: "The average business owner spends 20+ hours per week on administrative tasks. Here's how modern AI automation technology can transform your workflow and give you your time back.",
    author: "Robert Fusco",
    date: "2025-07-11",
    readTime: "5 min read",
    category: "Industry Insights",
    published: true
  },
  {
    slug: 'hidden-costs-manual-processes',
    title: "The Hidden Costs of Manual Business Processes",
    excerpt: "Every manual process costs your business more than you think. We break down the true financial impact of inefficient workflows and show you how automation can save thousands annually.",
    author: "Robert Fusco", 
    date: "2025-07-12",
    readTime: "7 min read",
    category: "Business Tips",
    published: true
  },
  {
    slug: 'building-summit-behind-scenes',
    title: "Building Summit: Behind the Scenes of Our AI Development",
    excerpt: "Take a look inside our development process and see how we're building the future of business automation. Learn about our AI training process and upcoming features.",
    author: "Brandon Allshouse",
    date: "2025-07-11",
    readTime: "4 min read", 
    category: "Company Updates",
    published: true
  }
];

export default function BlogPage() {
  const formatDate = (dateString: string): string => {
    // Parse the date string and treat it as local time to avoid timezone issues
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day); // month is 0-indexed
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header scrolled={true} />
      
      {/* Add structured data for the blog */}
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://summitautomation.io"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://summitautomation.io/blog"
              }
            ]
          })
        }}
      />
      
      {/* Blog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Summit Automation Blog",
            "description": "Insights, tips, and updates about business automation, AI tools, and growing your business",
            "url": "https://summitautomation.io/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Summit Automation",
              "logo": {
                "@type": "ImageObject",
                "url": "https://summitautomation.io/images/4_SVG.svg"
              }
            },
            "blogPost": blogPosts.filter(post => post.published).map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://summitautomation.io/blog/${post.slug}`,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author
              }
            }))
          })
        }}
      />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <Link 
              href="/#blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Link>
          </nav>
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
              Summit Automation Blog
            </h1>
            <p className="text-xl text-slate-300">
              Insights, tips, and updates about business automation, AI tools, and growing your business
            </p>
          </header>

          <section className="space-y-12" aria-label="Blog posts">
            {blogPosts.filter(post => post.published).map((post) => (
              <article key={post.slug} className="border-b border-gray-200 pb-12 last:border-b-0">
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-blue-500/20 to-blue-600/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/20">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-4 hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    aria-label={`Read article: ${post.title}`}
                  >
                    Read Article
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}