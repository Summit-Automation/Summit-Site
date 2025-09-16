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
      slug: 'businesses-drowning-in-paperwork',
      title: "Why Businesses Are Drowning in Paperwork (And How AI Can Save Them)",
      excerpt: "The average business owner spends 20+ hours per week on administrative tasks. Here's how modern technology can change that.",
      author: "Robert Fusco",
      date: "2025-07-11",
      readTime: "5 min read",
      category: "Industry Insights",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: 2,
      slug: 'summit-early-access-program',
      title: "Join Summit's Early Access Program: What to Expect",
      excerpt: "We're opening our doors to select businesses for exclusive early access. Learn about our alpha testing program and how to get priority access to Summit's powerful features.",
      author: "Brandon Allshouse",
      date: "2025-08-15",
      readTime: "4 min read",
      category: "Company Updates",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 3,
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
      id: 4,
      slug: 'complete-business-management-suite',
      title: "Why Your Business Needs More Than Just CRM Software",
      excerpt: "Most business tools solve one problem at a time. Learn why integrated business management platforms are the future and how they can transform your operations.",
      author: "Robert Fusco",
      date: "2025-08-20",
      readTime: "6 min read",
      category: "Business Strategy",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: 5,
      slug: 'building-summit-behind-scenes',
      title: "Building Summit: Behind the Scenes of Our AI Development",
      excerpt: "Take a look inside our development process and see how we're building the future of business automation.",
      author: "Brandon Allshouse",
      date: "2025-07-11",
      readTime: "4 min read", 
      category: "Development",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 6,
      slug: 'ai-powered-inventory-management',
      title: "How AI-Powered Inventory Management Prevents Stockouts",
      excerpt: "Never run out of products again. Discover how intelligent inventory management systems use AI to predict demand, optimize stock levels, and automate reordering.",
      author: "Brandon Allshouse",
      date: "2025-08-25",
      readTime: "5 min read",
      category: "Technology",
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
    <section id="blog" className="py-24 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-muted/50 text-primary/80 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-muted/500 rounded-full mr-2"></span>
            Latest insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest from our blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Insights, tips, and updates from the Summit team. Learn how to streamline your business operations and stay ahead of the curve.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {blogPosts.slice(0, 3).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="relative group h-full">
                {/* Professional card with texture and depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 rounded-xl shadow-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-xl"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_70%)] rounded-xl"></div>
                
                {/* Enhanced border treatment */}
                <div className="absolute inset-0 rounded-xl border border-slate-700/40 group-hover:border-slate-600/50 transition-all duration-300 shadow-inner"></div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"></div>
                
                {/* Content container */}
                <div className="relative h-full backdrop-blur-sm overflow-hidden rounded-xl">
                {/* Header with blue theme */}
                <div className="h-48 bg-blue-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-700/20" />
                  
                  <div className="absolute top-6 left-6">
                    <span className="bg-slate-900/90 text-primary px-3 py-1.5 rounded-full text-sm font-medium border border-slate-700/40">
                      {post.category}
                    </span>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-slate-900/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-slate-700/40">
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

                  <h3 className="text-xl font-bold text-foreground mb-4 hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      {post.author}
                    </div>
                    
                    <div className="flex items-center text-primary font-medium text-sm">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
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