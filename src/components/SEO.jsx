import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const SEO = ({
  title = 'Default Title',
  description = 'Default description for my website.',
  keywords = 'keyword1, keyword2, keyword3',
  url = 'https://www.example.com',
  image = 'https://www.example.com/default-image.png',
  type = 'website',
  structuredData = null,
  lang = 'en',
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={lang} />
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="./myFavicon.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Title & Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card (Optional) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data (if provided as prop) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  structuredData: PropTypes.object,
  lang: PropTypes.string,
};
