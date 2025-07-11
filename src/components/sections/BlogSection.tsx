'use client';

import React from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Contractors Are Drowning in Paperwork (And How AI Can Save Them)",
      excerpt: "The average contractor spends 20+ hours per week on administrative tasks. Here's how modern technology can change that.",
      author: "Summit Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Industry Insights",
      image: "/images/blog-paperwork.jpg"
    },
    {
      id: 2,
      title: "The Hidden Costs of Manual Invoice Processing",
      excerpt: "Every manual invoice costs your business more than you think. We break down the true financial impact.",
      author: "Summit Team", 
      date: "2024-01-12",
      readTime: "7 min read",
      category: "Business Tips",
      image: "/images/blog-invoices.jpg"
    },
    {
      id: 3,
      title: "Building Summit: Behind the Scenes of Our AI Development",
      excerpt: "Take a look inside our development process and see how we're building the future of contractor automation.",
      author: "Development Team",
      date: "2024-01-10",
      readTime: "4 min read", 
      category: "Company Updates",
      image: "/images/blog-development.jpg"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest from our blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and updates from the Summit team. Learn how to streamline your business operations and stay ahead of the curve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              {/* Article Image */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                    <p className="text-sm opacity-90">Read Article</p>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;