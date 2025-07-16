// File: src/components/sections/BlogSection.tsx
'use client';

import React from 'react';
import { Calendar, Clock, ArrowRight, User, TrendingUp, Zap, Target } from 'lucide-react';
import Link from 'next/link';

// Type definition for blog post
interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  icon: React.ReactNode;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      slug: 'small-businesses-drowning-in-paperwork',
      title: "Why Small Businesses Are Drowning in Paperwork (And How AI Can Save Them)",
      excerpt: "The average small business owner spends 20+ hours per week on administrative tasks. Here's how modern technology can change that.",
      author: "Robert Fusco",
      date: "2025-07-11",
      readTime: "5 min read",
      category: "Industry Insights",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: 2,
      slug: 'hidden-costs-manual-processes',
      title: "The Hidden Costs of Manual Business Processes",
      excerpt: "Every manual process costs your business more than you think. We break down the true financial impact of inefficient workflows.",
      author: "Robert Fusco", 
      date: "2025-07-12",
      readTime: "7 min read",
      category: "Business Tips",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 3,
      slug: 'building-summit-behind-scenes',
      title: "Building Summit: Behind the Scenes of Our AI Development",
      excerpt: "Take a look inside our development process and see how we're building the future of small business automation.",
      author: "Brandon Allshouse",
      date: "2025-07-11",
      readTime: "4 min read", 
      category: "Company Updates",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Latest insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest from our blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Insights, tips, and updates from the Summit team. Learn how to streamline your business operations and stay ahead of the curve.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                {/* Header with blue theme */}
                <div className="h-48 bg-blue-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-700/20" />
                  
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 text-blue-600 px-3 py-1.5 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        {post.icon}
                      </div>
                      <p className="text-sm opacity-90 font-medium">Read Article</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600" />
                      </div>
                      {post.author}
                    </div>
                    
                    <div className="flex items-center text-blue-600 font-medium text-sm">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/blog"
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;