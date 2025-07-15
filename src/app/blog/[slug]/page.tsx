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

// Updated blog posts with full content for small businesses
const blogPosts: Record<string, BlogPost> = {
  'small-businesses-drowning-in-paperwork': {
    title: "Why Small Businesses Are Drowning in Paperwork (And How AI Can Save Them)",
    author: "Summit Team",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Industry Insights",
    content: `
# Why Small Businesses Are Drowning in Paperwork (And How AI Can Save Them)

If you're a small business owner, you know the drill. You started your business because you're passionate about your product or service—whether that's consulting, retail, food service, or professional services. But somewhere along the way, you became a part-time accountant, data entry clerk, and administrative assistant.

## The Hidden Time Drain

The average small business owner spends **over 20 hours per week** on administrative tasks:

- **6 hours** manually entering receipt data and expense tracking
- **5 hours** following up with leads and managing customer relationships
- **4 hours** creating and sending invoices
- **3 hours** organizing project files and documentation
- **2+ hours** on other paperwork and compliance tasks

That's more than half a full-time job spent on tasks that don't directly generate revenue.

## The Real Cost

Let's do some quick math. If your time is worth $75/hour (a conservative estimate for most business owners), those 20 hours of admin work represent **$1,500 per week** in lost revenue potential. Over a year, that's **$78,000** you're leaving on the table.

But it gets worse. When you're buried in paperwork:
- You miss follow-up opportunities with leads
- Invoices go out late, slowing cash flow
- You can't focus on strategic growth initiatives
- Work-life balance suffers dramatically

## How AI Changes Everything

Modern AI can handle most of these tasks automatically:

### Receipt Processing
Take a photo of any receipt with your phone. AI instantly extracts:
- Vendor information
- Amount and date
- Expense category
- Tax information

### Customer Relationship Management
AI tracks every interaction and automatically:
- Schedules follow-ups
- Sends reminder emails
- Updates customer status
- Identifies sales opportunities

### Invoice Generation
Based on project data, AI creates professional invoices with:
- Accurate time tracking
- Service or product costs
- Professional formatting
- Automatic sending and follow-up

## The Bottom Line

Technology exists today that can give you back those 20 hours per week. The question isn't whether you can afford to implement AI automation—it's whether you can afford not to.

Your time is too valuable to spend on data entry. Let AI handle the paperwork so you can focus on what you do best: growing your business and serving your customers.

---

*Ready to reclaim your time? [Join our waitlist](/#waitlist) to be the first to try Summit Automation.*
    `
  },
  'hidden-costs-manual-processes': {
    title: "The Hidden Costs of Manual Business Processes",
    author: "Summit Team",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Business Tips",
    content: `
# The Hidden Costs of Manual Business Processes

Every manual business process costs more than you think. While the obvious cost is time, the hidden expenses add up quickly and can seriously impact your bottom line.

## Time Investment Analysis

Manual processes typically require significant time investment:
- **Data Entry**: 15-30 minutes per transaction
- **Customer Follow-ups**: 10-20 minutes per contact
- **Invoice Creation**: 20-45 minutes per invoice
- **Expense Tracking**: 5-15 minutes per receipt

With multiple transactions daily, this adds up to **8-15 hours weekly** just on routine tasks.

## The Hidden Costs

### 1. Delayed Cash Flow
Manual processes often contain errors or missing information, leading to:
- Customer questions and payment delays
- Billing disputes and corrections
- Extended payment cycles
- Negative impact on working capital

### 2. Missed Revenue Opportunities
Without automated tracking, businesses typically miss:
- 10-15% of billable time or services
- Upselling opportunities during customer interactions
- Follow-up sales from existing customers
- Cross-selling complementary products or services

### 3. Professional Image Impact
Inconsistent or delayed communications affect how customers perceive your business, potentially costing you:
- Customer retention
- Referral opportunities
- Premium pricing power
- Competitive advantage

### 4. Employee Productivity Loss
Manual processes cause:
- Context switching between tasks
- Repetitive strain and fatigue
- Lower job satisfaction
- Higher turnover rates

### 5. Scalability Constraints
As your business grows, manual processes:
- Don't scale efficiently
- Require proportional staff increases
- Create bottlenecks
- Limit growth potential

## The Solution

Automated business processes can:
- Reduce processing time by 80-90%
- Improve accuracy and consistency
- Free up time for strategic activities
- Scale seamlessly with business growth

## ROI Calculation Example

**Before Automation:**
- 10 hours/week on manual processes
- Business owner time valued at $100/hour
- Weekly cost: $1,000
- Annual cost: $52,000

**After Automation:**
- 2 hours/week on oversight
- Same hourly rate
- Weekly cost: $200
- Annual cost: $10,400
- **Annual savings: $41,600**

This doesn't include the additional revenue from time freed up for business development and customer service.

## Getting Started

The key is to start with the processes that consume the most time or cause the most frustration:
1. Identify your biggest time drains
2. Evaluate automation options
3. Start with high-impact, low-complexity processes
4. Gradually expand automation coverage

*Learn how Summit Automation can streamline your business processes. [Join our waitlist](/#waitlist) today.*
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

Building AI that actually works for small businesses isn't just about the latest technology—it's about understanding the real problems that need solving.

## Our Development Philosophy

We started by spending months talking to small business owners across different industries, understanding their daily workflows, and identifying the biggest pain points. Here's what we learned:

### Small Business Owners Don't Want Complexity
Every solution needs to be intuitive. If it takes more than 30 seconds to learn, it's too complicated for busy entrepreneurs.

### Accuracy Is Everything
Getting customer information or invoice amounts wrong isn't just inconvenient—it's business-damaging and can hurt relationships.

### Mobile-First Is Critical
Most business operations happen away from the desk, so every feature must work perfectly on mobile devices.

### Affordability Matters
Small businesses need enterprise-level functionality at a price point that makes sense for their revenue.

## Our AI Training Process

We've trained our AI models on thousands of real business documents from various industries:
- Receipts from major suppliers and vendors
- Invoice formats across different business types
- Customer communication patterns
- Project documentation from service businesses
- E-commerce transaction data

## Industry-Agnostic Approach

Unlike solutions built for specific industries, Summit is designed to work across:
- **Professional Services**: Consultants, agencies, freelancers
- **Retail**: Online and brick-and-mortar stores
- **Food Service**: Restaurants, catering, food trucks
- **Health & Wellness**: Clinics, gyms, spas
- **Home Services**: Cleaning, maintenance, landscaping
- **Creative Services**: Design, photography, marketing

## What's Coming Next

We're currently working on:
- Advanced customer behavior analytics
- Predictive cash flow analysis
- Integration with popular business tools
- Voice-activated data entry
- Multi-language support for global businesses

## Beta Testing Program

We'll be opening our beta program soon to select small businesses. Beta participants will get:
- Free access during the testing period
- Direct input into product development
- Priority access to new features
- Dedicated support from our team

## Our Commitment

We're building Summit with a simple mission: to give small business owners their time back so they can focus on what they love about their business.

Every feature we develop is tested with real business owners to ensure it actually solves real problems, not just looks good in demos.

*Want to be among the first to try Summit? [Join our waitlist](/#waitlist) for beta access and regular updates on our progress.*
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