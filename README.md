# Blazing IT Limited Website

A modern, responsive website for Blazing IT Limited built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with responsive layout
- **Blog System**: Dynamic blog with Supabase backend
- **Admin Panel**: Protected admin interface for content management
- **SEO Optimized**: Comprehensive SEO with meta tags and structured data
- **Authentication**: Auth0 integration for secure admin access
- **Database**: Supabase for blog posts, comments, and image storage

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Authentication**: Auth0
- **Deployment**: Netlify
- **Build Tool**: Vite

## Environment Variables

Set these environment variables in your deployment platform (Netlify Dashboard):

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_AUTH0_DOMAIN=your_auth0_domain
VITE_AUTH0_CLIENT_ID=your_auth0_client_id
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

## Security

- Environment variables are stored securely in Netlify Dashboard
- Row Level Security (RLS) enabled on all Supabase tables
- Auth0 protects admin routes
- Input validation and sanitization

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Database Setup

1. Create a Supabase project
2. Run the migration files in `supabase/migrations/`
3. Set up environment variables
4. Configure Auth0 for admin authentication

## Deployment

The site is configured for Netlify deployment with:
- Automatic builds from Git
- Environment variable management
- Redirect rules for SPA routing
- SEO optimization with sitemap and robots.txt