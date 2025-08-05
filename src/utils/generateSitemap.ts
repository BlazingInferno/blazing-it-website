import { getPublishedBlogPosts } from '../lib/supabase';

export const generateDynamicSitemap = async (): Promise<string> => {
  const baseUrl = 'https://blazingit.co.uk';
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Static pages
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/services', priority: '0.9', changefreq: 'monthly' },
    { url: '/services/cybersecurity', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/cloud-solutions', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/data-backup', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/it-support', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog', priority: '0.7', changefreq: 'weekly' },
    { url: '/leeds', priority: '0.6', changefreq: 'monthly' }
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  try {
    // Add dynamic blog posts
    const blogPosts = await getPublishedBlogPosts();
    blogPosts.forEach(post => {
      const postDate = new Date(post.date).toISOString().split('T')[0];
      sitemap += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });
  } catch (error) {
    console.error('Error loading blog posts for sitemap:', error);
    // Continue without blog posts if there's an error
  }

  sitemap += `
</urlset>`;

  return sitemap;
};