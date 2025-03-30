import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/fashion', changefreq: 'monthly', priority: 0.8 },
  { url: '/graphics', changefreq: 'monthly', priority: 0.8 },
  { url: '/graphics/logo-design', changefreq: 'monthly', priority: 0.7 },
  { url: '/uiux', changefreq: 'monthly', priority: 0.8 },
  { url: '/uiux/hellow', changefreq: 'monthly', priority: 0.7 },
  { url: '/uiux/javascriptgames', changefreq: 'monthly', priority: 0.7 },
  { url: '/uiux/smokinggun', changefreq: 'monthly', priority: 0.7 }
];

const stream = new SitemapStream({ hostname: 'https://www.kritikabhunwal.com' }); // Replace with your domain

// Convert array to readable stream
const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(data =>
  data.toString()
);

// Save to public/sitemap.xml
const writeStream = createWriteStream('./public/sitemap.xml');
writeStream.write(xml);
writeStream.end();

console.log('✅ Sitemap successfully generated and saved to public/sitemap.xml');
