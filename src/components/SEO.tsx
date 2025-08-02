'use client';

import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = "Bumi Payangan - Hasil Bumi Segar dari Tabanan, Bali",
  description = "Bumi Payangan menjual hasil bumi segar dan produk olahan langsung dari Desa Payangan, Tabanan, Bali. Jambu kristal, pepaya, kelapa muda, dan bunga segar dari petani lokal.",
  keywords = "hasil bumi Bali, jambu kristal, pepaya, kelapa muda, bunga gemitir, bunga pacah, petani lokal Tabanan, hasil pertanian organik,  produk segar Bali, buah segar, bunga segar, komunitas petani Payangan, payangan, payangan bali, desa payangan, buah, bunga, bunga upacara, bunga bali, kelapa cap, kelapa bali, kelapa muda grosir, jambu kristal bali, jambu kristal payangan, jambu payangan, jambu bali, jambu organik, bunga gemitir bali, bunga pacah bali",
  image = "/images/herofix.png",
  url = "https://bumipayangan.com",
  type = "website"
}: SEOProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bumi Payangan",
    "description": description,
    "url": url,
    "logo": "/images/logo.png",
    "image": image,
    "telephone": "+62 853-3858-6207",
    "email": "info@bumipayangan.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Desa Payangan, Kecamatan Marga",
      "addressLocality": "Tabanan",
      "addressRegion": "Bali",
      "postalCode": "82191",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-8.5021",
      "longitude": "115.1653"
    },
    "openingHours": "Mo-Sa 08:00-17:00",
    "priceRange": "$$",
    "servesCuisine": "Produk Lokal & Organik",
    "hasMenu": {
      "@type": "Menu",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Buah Segar",
          "hasMenuItem": [
            {
              "@type": "MenuItem",
              "name": "Jambu Kristal",
              "description": "Jambu kristal segar langsung dari kebun petani Payangan",
              "offers": {
                "@type": "Offer",
                "price": "25000",
                "priceCurrency": "IDR"
              }
            },
            {
              "@type": "MenuItem",
              "name": "Pepaya",
              "description": "Pepaya matang pohon, manis dan segar",
              "offers": {
                "@type": "Offer",
                "price": "10000",
                "priceCurrency": "IDR"
              }
            },
            {
              "@type": "MenuItem",
              "name": "Kelapa Muda",
              "description": "Kelapa muda segar siap minum",
              "offers": {
                "@type": "Offer",
                "price": "15000",
                "priceCurrency": "IDR"
              }
            }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Bunga Segar",
          "hasMenuItem": [
            {
              "@type": "MenuItem",
              "name": "Bunga Gemitir",
              "description": "Bunga gemitir segar untuk sesajen atau dekorasi",
              "offers": {
                "@type": "Offer",
                "price": "17000",
                "priceCurrency": "IDR"
              }
            },
            {
              "@type": "MenuItem",
              "name": "Bunga Pacah",
              "description": "Bunga pacah segar hasil petik harian",
              "offers": {
                "@type": "Offer",
                "price": "17000",
                "priceCurrency": "IDR"
              }
            }
          ]
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "320"
    }
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Bumi Payangan" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Indonesian" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Bumi Payangan" />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="theme-color" content="#16a34a" />
      <meta name="msapplication-TileColor" content="#16a34a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Favicon & Apple Icon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/images/bumi_payangan_logo.png" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Preload & Preconnect */}
      <link rel="preload" href="/images/bumi_payangan_logo.png" as="image" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
};

export default SEO;
