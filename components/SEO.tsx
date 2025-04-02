"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  structuredData?: boolean;
  articleStructuredData?: boolean;
  canonical?: string;
  type?: string;
  url?: string;
}

export default function SEO({
  title,
  description,
  image = "/og-image.jpg",
  articleStructuredData = false,
  canonical = "https://3mangos.site",
  type = "website",
  url = "https://3mangos.site",
}: SEOProps) {
  const pathname = usePathname();
  
  const defaultTitle = "THREE MANGOS | Development Agency";
  const defaultDescription = 
    "We build beautiful, functional, and high-performance websites and applications with passion. Expert web development, e-commerce, UI/UX, branding, and SEO services.";
  
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `https://3mangos.site${image}`,
    url: `${url}${pathname}`,
    canonical: canonical,
    type: type
  };

  return (
    <>
      {/* Solo mostramos los datos estructurados de artículos, ya que los datos de organización y sitio web
          ya están incluidos en el componente JsonLd en layout.tsx */}
      {articleStructuredData && (
        <Script
          id="article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: seo.title,
              image: [seo.image],
              datePublished: new Date().toISOString(),
              dateModified: new Date().toISOString(),
              author: {
                "@type": "Organization",
                name: "THREE MANGOS",
                url: "https://3mangos.site",
              },
              publisher: {
                "@type": "Organization",
                name: "THREE MANGOS",
                logo: {
                  "@type": "ImageObject",
                  url: "https://3mangos.site/logo.svg",
                },
              },
              description: seo.description,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": seo.url,
              },
            }),
          }}
        />
      )}
    </>
  );
}
