import { Helmet } from 'react-helmet';

const MyHelmet = () => (
  <Helmet>
    {/* Basic Meta Tags */}
    <html lang="en" />
    <meta charSet="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/myFavicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* SEO Meta Tags */}
    <title>Kritika Bhunwal</title>
    <meta
      name="description"
      content="Hello! I am Kritika Bhunwal. I am a creative web designer who's passionate about user experience and interface design, graphic design and fashion design. Explore a palette of innovative projects for design, development and artistic expression."
    />
    <meta
      name="keywords"
      content="Kritika Bhunwal, fashion designer, graphic designer in Vancouver, UX/UI designer, UI/UX designer, UIUX researcher, UXUI researcher, creative portfolio, web design and development, front-end design and development, design and development, design portfolio,"
    />
    <link rel="canonical" href="https://www.kritikabhunwal.com/" />

    {/* Open Graph / Facebook Tags */}
    <meta property="og:title" content="Kritika Bhunwal - Front-End Designer and React Developer" />
    <meta
      property="og:description"
      content="Designed and Developed by Kritika Bhunwal, this design portfolio showcases her extensive work in fashion design, graphic design, UX/UI design, front-end design and development."
    />
    <meta property="og:type" content="Design Portfolio Website" />
    <meta property="og:url" content="https://www.kritikabhunwal.com/" />
    <meta property="og:image" content="https://kritikabhunwal.com/assets/logo-lDoHeESd.png" />

    {/* JSON-LD Structured Data */}
    <script type="application/ld+json">
      {`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Kritika Bhunwal",
        "jobTitle": "Front-End Designer and React Developer",
        "url": "https://www.kritikabhunwal.com/",
        "image": "https://kritikabhunwal.com/assets/logo-lDoHeESd.png",
        "sameAs": [
          "https://www.linkedin.com/in/kritikabhunwal",
          "https://www.instagram.com/kritikabhunwal",
          "https://www.behance.net/kritikabhunwal",
          "https://www.facebook.com/kritika.bhunwal",
          "https://www.instagram.com/pseudo_nova/",
          "https://www.youtube.com/@psuedo_nova"
        ],
        "description": "Kritika Bhunwal is a creative visual designer who specializes in fashion, graphics, and UX/UI design. Through this design portfolio, she innovates a new way to present her visual storytelling and digital experiences."
      }
      `}
    </script>
  </Helmet>
);

export default MyHelmet;
