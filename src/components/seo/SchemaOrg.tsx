"use client";

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "180 Tattoo Studio",
    "image": "https://180tattoostudio.in/logo.png", // Assuming a logo exists at this path
    "@id": "https://180tattoostudio.in",
    "url": "https://180tattoostudio.in",
    "telephone": "+91-9003157338",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "No 114/128, Eldams Rd, Teynampet",
        "addressLocality": "Chennai",
        "postalCode": "600018",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "New No: 11, G.N. Chetty Road, Teynampet",
        "addressLocality": "Chennai",
        "postalCode": "600006",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    ],
    "geo": [
      {
        "@type": "GeoCoordinates",
        "latitude": 13.045, // Approximate for Teynampet
        "longitude": 80.250
      },
      {
        "@type": "GeoCoordinates",
        "latitude": 13.058, // Approximate for Nungambakkam
        "longitude": 80.245
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "11:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://instagram.com/180_tattoo_studio",
      "https://facebook.com/180tattoostudio"
    ],
    "priceRange": "$$",
    "description": "Premium tattoo studio in Chennai specializing in hyper-realism, fine-line, and color tattoos. Medical-grade hygiene and expert artists."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
