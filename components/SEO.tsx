"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";
import { usePathname } from "next/navigation";
import Script from "next/script";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

export default function SEO({
  title,
  description,
  image = "/og-image.jpg",
  article = false,
}: SEOProps) {
  const { locale } = useLanguage();
  const pathname = usePathname();
  
  const defaultTitle = "THREE MANGOS | Development Agency";
  const defaultDescription = 
    "We build beautiful, functional, and high-performance websites and applications with passion. Expert web development, e-commerce, UI/UX, branding, and SEO services.";
  
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `https://3mangos.site${image}`,
    url: `https://3mangos.site${pathname}`,
  };

  // Generate dynamic OG image URL if using the API route
  const dynamicOgImage = `https://3mangos.site/api/og?title=${encodeURIComponent(
    seo.title.split("|")[0].trim()
  )}&description=${encodeURIComponent(
    seo.description.substring(0, 100)
  )}`;

  return (
    <>
      {/* Structured data for organization */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "THREE MANGOS",
            url: "https://3mangos.site",
            logo: "https://3mangos.site/logo.svg",
            sameAs: [
              "https://twitter.com/3mangos",
              "https://www.instagram.com/3mangos",
              "https://www.linkedin.com/company/3mangos",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              email: "info@3mangos.site",
              contactType: "customer service",
            },
          }),
        }}
      />

      {/* Structured data for WebSite */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://3mangos.site",
            name: "THREE MANGOS",
            description: defaultDescription,
            potentialAction: {
              "@type": "SearchAction",
              target: "https://3mangos.site/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Add structured data for article if this is a blog post */}
      {article && (
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
