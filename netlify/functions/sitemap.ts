import { Handler } from '@netlify/functions';

// Simple sitemap generation for Netlify Functions
const handler: Handler = async (event, context) => {
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
    { url: '/projects', priority: '0.7', changefreq: 'weekly' },
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
    // Try to fetch blog posts from Supabase
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
    
    if (supabaseUrl && supabaseKey) {
      const response = await fetch(`${supabaseUrl}/rest/v1/blog_posts?published=eq.true&select=slug,date`, {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`
        }
      });
      
      if (response.ok) {
        const blogPosts = await response.json();
        blogPosts.forEach((post: any) => {
          const postDate = new Date(post.date).toISOString().split('T')[0];
          sitemap += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
        });
      }
    }
  } catch (error) {
    console.error('Error loading blog posts for sitemap:', error);
    // Continue without blog posts if there's an error
  }

  sitemap += `
</urlset>`;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
    },
    body: sitemap
  };
};

export { handler };