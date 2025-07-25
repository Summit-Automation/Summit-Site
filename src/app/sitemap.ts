import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://summitautomation.io',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://summitautomation.io/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://summitautomation.io/faq',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://summitautomation.io/privacy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://summitautomation.io/blog/businesses-drowning-in-paperwork',
      lastModified: new Date('2025-07-11'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://summitautomation.io/blog/hidden-costs-manual-processes',
      lastModified: new Date('2025-07-12'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://summitautomation.io/blog/building-summit-behind-scenes',
      lastModified: new Date('2025-07-11'),
      changeFrequency: 'monthly',
      priority: 0.6,
    }
  ];
}