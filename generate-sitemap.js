import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/programs', changefreq: 'monthly', priority: 0.8 },
  { url: '/memories', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

const stream = new SitemapStream({ hostname: 'https://gurukulamkws.com' });

const xml = await streamToPromise(
  Readable.from(links).pipe(stream)
).then((data) => data.toString());

createWriteStream('./public/sitemap.xml').write(xml);

console.log('✅ sitemap.xml generated successfully!');
