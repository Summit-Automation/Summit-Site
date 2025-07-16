'use client';

import React from 'react';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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

// Updated blog posts for small businesses
const blogPosts: BlogPost[] = [
  {
    slug: 'small-businesses-drowning-in-paperwork',
    title: "Why Small Businesses Are Drowning in Paperwork (And How AI Can Save Them)",
    excerpt: "The average small business owner spends 20+ hours per week on administrative tasks. Here's how modern technology can change that.",
    author: "Robert Fusco",
    date: "2025-07-11",
    readTime: "5 min read",
    category: "Industry Insights",
    published: true
  },
  {
    slug: 'hidden-costs-manual-processes',
    title: "The Hidden Costs of Manual Business Processes",
    excerpt: "Every manual process costs your business more than you think. We break down the true financial impact of inefficient workflows.",
    author: "Summit Team", 
    date: "2025-07-12",
    readTime: "7 min read",
    category: "Business Tips",
    published: true
  },
  {
    slug: 'building-summit-behind-scenes',
    title: "Building Summit: Behind the Scenes of Our AI Development",
    excerpt: "Take a look inside our development process and see how we're building the future of small business automation.",
    author: "Development Team",
    date: "2025-07-11",
    readTime: "4 min read", 
    category: "Company Updates",
    published: true
  }
];

export default function BlogPage() {
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header scrolled={true} />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <Link 
              href="/#blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Summit Blog
            </h1>
            <p className="text-xl text-gray-600">
              Insights, tips, and updates from the Summit team
            </p>
          </div>

          <div className="space-y-12">
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
                  >
                    Read Article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}