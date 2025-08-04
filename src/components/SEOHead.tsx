import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  article?: {
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    tags?: string[];
  };
}

export default function SEOHead({
  title = "Blazing IT Limited - Lightning Fast IT Solutions",
  description = "Blazing IT Limited provides cutting-edge technology solutions including Microsoft 365, Azure, Google Workspace and IT consulting services.",
  keywords = "IT support, cybersecurity, cloud solutions, Microsoft 365, Azure, Google Workspace, IT consulting, data backup, Leeds IT services",
  image = "https://blazingit.co.uk/unnamed.png",
  url = "https://blazingit.co.uk",
  type = "website",
  article
}: SEOHeadProps) {
  const fullTitle = title.includes("Blazing IT") ? title : `${title} | Blazing IT Limited`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Blazing IT Limited" />
      <meta property="og:locale" content="en_GB" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:author" content={article.author} />
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
    </Helmet>
  );
}