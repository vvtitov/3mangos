import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://3mangos.site';
  const languages = ['en', 'es'];
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  // XML header and opening tags
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  // Add home pages for each language
  languages.forEach(lang => {
    xml += `
  <url>
    <loc>${baseUrl}/${lang}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>`;
    
    // Add alternate language links
    languages.forEach(altLang => {
      xml += `
    <xhtml:link rel="alternate" hreflang="${altLang}" href="${baseUrl}/${altLang}"/>`;
    });
    
    xml += `
  </url>`;
  });

  // Close the XML
  xml += `
</urlset>`;

  // Return the XML with proper content type
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
