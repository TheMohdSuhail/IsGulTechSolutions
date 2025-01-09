const fs = require('fs');
const path = require('path');

const hostname = 'https://isgultechsolutions.onrender.com';
const routes = [
  '/',
  '/about',
  '/contact',
  '/404',
  '/intership',
  '/career',


];

const generateSitemap = () => {
  const urls = routes
    .map((route) => `<url><loc>${hostname}${route}</loc></url>`)
    .join('');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;
  
  fs.writeFileSync(path.resolve(__dirname, './public/sitemap.xml'), sitemap, 'utf-8');
  console.log('Sitemap generated at public/sitemap.xml');
};

generateSitemap();
