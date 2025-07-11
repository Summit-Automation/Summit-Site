'use client';

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Type definitions
interface BlogPost {
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// This would eventually come from your markdown files or CMS
const blogPosts: Record<string, BlogPost> = {
  'contractors-drowning-in-paperwork': {
    title: "Why Contractors Are Drowning in Paperwork (And How AI Can Save Them)",
    author: "Summit Team",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Industry Insights",
    content: `
# Why Contractors Are Drowning in Paperwork (And How AI Can Save Them)

If you're a contractor, you know the drill. You started your business because you're great at what you do—whether that's plumbing, electrical work, HVAC, or construction. But somewhere along the way, you became a part-time accountant, data entry clerk, and administrative assistant.

## The Hidden Time Drain

The average contractor spends **over 20 hours per week** on administrative tasks:

- **6 hours** manually entering receipt data
- **5 hours** following up with leads and clients  
- **4 hours** creating and sending invoices
- **3 hours** organizing project files
- **2+ hours** on other paperwork

That's more than half a full-time job spent on tasks that don't directly generate revenue.

## The Real Cost

Let's do some quick math. If your billable rate is $75/hour, those 20 hours of admin work represent **$1,500 per week** in lost revenue potential. Over a year, that's **$78,000** you're leaving on the table.

But it gets worse. When you're buried in paperwork:
- You miss follow-up opportunities with leads
- Invoices go out late, slowing cash flow
- You can't take on as many projects
- Work-life balance suffers

## How AI Changes Everything

Modern AI can handle most of these tasks automatically:

### Receipt Processing
Take a photo of any receipt with your phone. AI instantly extracts:
- Vendor information
- Amount and date
- Expense category
- Tax information

### Lead Management
AI tracks every interaction and automatically:
- Schedules follow-ups
- Sends reminder emails
- Updates project status
- Identifies hot prospects

### Invoice Generation
Based on project data, AI creates professional invoices with:
- Accurate time tracking
- Material costs
- Professional formatting
- Automatic sending and follow-up

## The Bottom Line

Technology exists today that can give you back those 20 hours per week. The question isn't whether you can afford to implement AI automation—it's whether you can afford not to.

Your time is too valuable to spend on data entry. Let AI handle the paperwork so you can focus on what you do best: growing your business and serving your customers.

---

*Ready to reclaim your time? [Join our waitlist](/#waitlist) to be the first to try Summit Automation.*
    `
  },
  'hidden-costs-manual-invoices': {
    title: "The Hidden Costs of Manual Invoice Processing", 
    author: "Summit Team",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Business Tips",
    content: `
# The Hidden Costs of Manual Invoice Processing

Every manual invoice costs your business more than you think. While the obvious cost is time, the hidden expenses add up quickly and can seriously impact your bottom line.

## Time Investment Per Invoice

Creating a manual invoice typically takes 15-30 minutes when you factor in:
- Gathering project information
- Calculating hours and materials
- Formatting the invoice
- Sending and filing

With an average of 20 invoices per month, that's **8-10 hours monthly** just on invoicing.

## The Hidden Costs

### 1. Delayed Payments
Manual invoices often contain errors or missing information, leading to:
- Client questions and delays
- Payment disputes
- Extended payment cycles
- Negative cash flow impact

### 2. Missed Billable Items
Without automated tracking, you typically miss:
- 10-15% of billable hours
- Material cost markups
- Change order charges
- Travel time and expenses

### 3. Professional Image Impact
Inconsistent or delayed invoices affect how clients perceive your business, potentially costing you future work.

## The Solution

Automated invoicing systems can reduce invoice processing time by 80% while improving accuracy and consistency.

*Learn how Summit Automation can streamline your invoicing process. [Join our waitlist](/#waitlist) today.*
    `
  },
  'building-summit-behind-scenes': {
    title: "Building Summit: Behind the Scenes of Our AI Development",
    author: "Development Team", 
    date: "2024-01-10",
    readTime: "4 min read",
    category: "Company Updates",
    content: `
# Building Summit: Behind the Scenes of Our AI Development

Building AI that actually works for contractors isn't just about the latest technology—it's about understanding the real problems that need solving.

## Our Development Philosophy

We started by spending months talking to contractors, understanding their daily workflows, and identifying the biggest pain points. Here's what we learned:

### Contractors Don't Want Complexity
Every solution needs to be intuitive. If it takes more than 30 seconds to learn, it's too complicated.

### Accuracy Is Everything
Getting client information or invoice amounts wrong isn't just inconvenient—it's business-damaging.

### Mobile-First Is Critical
Most contractor work happens away from the office, so every feature must work perfectly on mobile.

## Our AI Training Process

We've trained our AI models on thousands of real contractor documents:
- Receipts from every major supplier
- Invoice formats across industries
- Client communication patterns
- Project documentation styles

## What's Coming Next

We're currently working on:
- Advanced lead scoring algorithms
- Predictive cash flow analysis
- Integration with popular accounting software
- Voice-activated data entry

## Beta Testing

We'll be opening our beta program soon. Interested contractors will get early access and direct input into product development.

*Want to be among the first to try Summit? [Join our waitlist](/#waitlist) for beta access.*
    `
  }
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // Unwrap the params Promise using React.use()
  const resolvedParams = use(params);
  const post = blogPosts[resolvedParams.slug];
  
  if (!post) {
    notFound();
  }

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
      
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to blog
          </Link>
          
          <header className="mb-12">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .split('\n')
                  .map(line => {
                    if (line.startsWith('# ')) {
                      return `<h1 class="text-3xl font-bold mt-8 mb-4">${line.slice(2)}</h1>`;
                    }
                    if (line.startsWith('## ')) {
                      return `<h2 class="text-2xl font-bold mt-6 mb-3">${line.slice(3)}</h2>`;
                    }
                    if (line.startsWith('### ')) {
                      return `<h3 class="text-xl font-bold mt-4 mb-2">${line.slice(4)}</h3>`;
                    }
                    if (line.startsWith('- ')) {
                      return `<li class="ml-4">${line.slice(2)}</li>`;
                    }
                    if (line.trim() === '') {
                      return '<br>';
                    }
                    if (line.startsWith('*') && line.endsWith('*')) {
                      return `<p class="italic text-gray-600 border-l-4 border-blue-200 pl-4 my-6">${line.slice(1, -1)}</p>`;
                    }
                    return `<p class="mb-4 leading-relaxed">${line}</p>`;
                  })
                  .join('')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-700 underline">$1</a>')
              }} 
            />
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
}