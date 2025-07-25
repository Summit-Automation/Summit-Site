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
    <div className="min-h-screen bg-white text-gray-900">
      <Header scrolled={true} />
      
      {/* Add structured data for the blog */}
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Summit Automation Blog
            </h1>
            <p className="text-xl text-gray-600">
              Insights, tips, and updates about business automation, AI tools, and growing your business
            </p>
          </header>

          <section className="space-y-12" aria-label="Blog posts">
            {blogPosts.filter(post => post.published).map((post) => (
              <article key={post.slug} className="border-b border-gray-200 pb-12 last:border-b-0">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-gray-500">
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