import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const SEO = ({
  title,
  description,
  keywords,
  url,
  image,
  type,
  locale,
  siteName,
  twitterSite,
  twitterCreator,
  structuredData,
  lang,
  robots,
}) => {
  // Handle structured data (allowing single object or array of objects)
  // If structuredData is an object, wrap in array for uniform handling
  const structuredDataArray = Array.isArray(structuredData)
    ? structuredData
    : structuredData
    ? [structuredData]
    : [];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={lang} />
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/myFavicon.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Robots - control indexing */}
      {robots && <meta name="robots" content={robots} />}

      {/* Title & Description */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Keywords (comma-separated) */}
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* Twitter handle of site (e.g. @siteName) */}
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {/* Twitter handle of content creator */}
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}

      {/* JSON-LD Structured Data (if provided as prop) */}
      {structuredDataArray.map((schema, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  locale: PropTypes.string,
  siteName: PropTypes.string,
  twitterSite: PropTypes.string,
  twitterCreator: PropTypes.string,
  structuredData: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  lang: PropTypes.string,
  robots: PropTypes.string,
};

SEO.defaultProps = {
  title: 'Default Title',
  description: 'Default description for my website.',
  keywords: 'keyword1, keyword2, keyword3',
  url: 'https://www.example.com',
  image: 'https://www.example.com/default-image.png',
  type: 'website',
  locale: 'en_US', // typical default locale
  siteName: 'Example Site',
  twitterSite: null, // e.g. '@example'
  twitterCreator: null, // e.g. '@creatorHandle'
  structuredData: null,
  lang: 'en',
  robots: 'index,follow', // controls whether bots index/follow the page
};

export default SEO;
