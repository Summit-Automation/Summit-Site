import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://summitautomation.io';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  ];

  // Blog posts - add new blog post slugs here as you create them
  const blogPosts = [
    'small-businesses-drowning-in-paperwork',
    'hidden-costs-manual-processes', 
    'building-summit-behind-scenes'
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2025-07-12'), // Update with actual publish dates
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}