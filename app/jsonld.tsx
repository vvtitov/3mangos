"use client";

import Script from "next/script";

export default function JsonLd() {
  return (
    <>
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
            description: "Web Development Agency specializing in beautiful, functional, and high-performance websites and applications.",
            sameAs: [
              "https://twitter.com/3mangos",
              "https://www.instagram.com/3mangos",
              "https://www.linkedin.com/company/3mangos",
            ],
            address: {
              "@type": "PostalAddress",
              addressCountry: "Global",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "info@3mangos.site",
              availableLanguage: ["English", "Spanish"],
            },
          }),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://3mangos.site",
            name: "THREE MANGOS",
            description: "Web Development Agency specializing in beautiful, functional, and high-performance websites and applications.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://3mangos.site/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Web Development",
            provider: {
              "@type": "Organization",
              name: "THREE MANGOS",
              url: "https://3mangos.site",
            },
            description: "Professional web development services including website creation, e-commerce solutions, UI/UX design, branding, and SEO optimization.",
            areaServed: "Global",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Web Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Web Development",
                    description: "Custom website development using modern technologies",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "E-commerce",
                    description: "Online store development with secure payment processing",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "UI/UX Design",
                    description: "User-centered design for optimal user experience",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Branding",
                    description: "Brand identity development and design",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SEO",
                    description: "Search engine optimization to improve visibility",
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
