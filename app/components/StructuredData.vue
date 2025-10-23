<script setup>

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Web Design by Ryan",
  "alternateName": "Ryan McGuire Web Developer",
  "description": "Professional web developer in Co. Mayo specializing in Vue.js, C#, and custom web applications. Building modern websites for businesses across Ireland.",
  "url": "https://webdesignbyryan.com",
  "telephone": "+353-83-8934120", // Add your phone number
  "email": "ryan@webdesignbyryan.com", // Add your email
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ballina",
    "addressRegion": "Mayo",
    "addressCountry": "IE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "53.9",
    "longitude": "-9.3"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "Ireland"
    },
    {
      "@type": "State",
      "name": "County Mayo"
    }
  ],
  "priceRange": "€500-€1500+",
  "founder": {
    "@type": "Person",
    "name": "Ryan McGuire",
    "jobTitle": "Full-Stack Web Developer"
  },
  "knowsAbout": [
    "Vue.js",
    "Nuxt.js",
    "C#",
    ".NET",
    "JavaScript",
    "Web Development",
    "Custom Web Applications",
    "Responsive Design",
    "SEO"
  ],
  "offers": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Basic Website Design",
        "description": "3-5 page websites with mobile responsive design and basic SEO"
      },
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "500-900",
        "priceCurrency": "EUR"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Business Website",
        "description": "5-10 page business websites with CMS, advanced SEO, and analytics"
      },
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "900-1500",
        "priceCurrency": "EUR"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Custom Web Solutions",
        "description": "E-commerce, booking systems, and custom web applications"
      },
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "1500",
        "priceCurrency": "EUR",
        "priceType": "https://schema.org/MinimumPrice"
      }
    }
  ]
}

// Use useHead to inject the structured data script
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(structuredData)
    }
  ]
})

</script>

<template>
  <!-- This component doesn't render anything visible -->
  <div></div>
</template>