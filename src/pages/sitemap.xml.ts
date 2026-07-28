import type { APIRoute } from 'astro';
import { journalArticles, getAllCategories, getAllTags, slugifyCategory, slugifyTag } from '../data/journal-articles';

const SITE_URL = 'https://literatium-web.vercel.app';

// Static pages — paths and priorities.
// Home: 1.0, dedicated folio pages: 0.8, subpages: 0.6, utility: 0.4
const staticPages: { path: string; priority: number; changefreq: string }[] = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/house', priority: 0.8, changefreq: 'monthly' },
  { path: '/rooms', priority: 0.8, changefreq: 'monthly' },
  { path: '/cafe', priority: 0.8, changefreq: 'monthly' },
  { path: '/mompox', priority: 0.8, changefreq: 'monthly' },
  { path: '/mompox/guias', priority: 0.6, changefreq: 'monthly' },
  { path: '/mompox/sabores', priority: 0.6, changefreq: 'monthly' },
  { path: '/mompox/palabras', priority: 0.6, changefreq: 'monthly' },
  { path: '/mompox/mapas', priority: 0.6, changefreq: 'monthly' },
  { path: '/mompox/juegos', priority: 0.6, changefreq: 'monthly' },
  { path: '/diario', priority: 0.8, changefreq: 'weekly' },
  { path: '/biblioteca', priority: 0.8, changefreq: 'monthly' },
  { path: '/biblioteca/juego-de-palabras', priority: 0.6, changefreq: 'monthly' },
  { path: '/biblioteca/linea-de-tiempo', priority: 0.6, changefreq: 'monthly' },
  { path: '/biblioteca/lista-de-lectura', priority: 0.6, changefreq: 'monthly' },
  { path: '/biblioteca/mapa', priority: 0.6, changefreq: 'monthly' },
  { path: '/biblioteca/quiz', priority: 0.6, changefreq: 'monthly' },
  { path: '/faq', priority: 0.8, changefreq: 'monthly' },
  { path: '/book', priority: 0.8, changefreq: 'monthly' }
];

// Dynamic routes
const dynamicPages: { path: string; priority: number; changefreq: string; lastmod?: string }[] = [];

// Diario articles
for (const article of journalArticles) {
  dynamicPages.push({
    path: `/diario/${article.slug}`,
    priority: 0.6,
    changefreq: 'monthly',
    lastmod: article.date
  });
}

// Diario categorias
for (const cat of getAllCategories()) {
  dynamicPages.push({
    path: `/diario/categoria/${slugifyCategory(cat.es)}`,
    priority: 0.4,
    changefreq: 'monthly'
  });
}

// Diario etiquetas
for (const tag of getAllTags()) {
  dynamicPages.push({
    path: `/diario/etiqueta/${slugifyTag(tag)}`,
    priority: 0.4,
    changefreq: 'monthly'
  });
}

const allPages = [...staticPages, ...dynamicPages];
const buildDate = new Date().toISOString().split('T')[0];

const urls = allPages.map((p) => {
  const lastmod = p.lastmod || buildDate;
  return `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority.toFixed(1)}</priority>
  </url>`;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

export const GET: APIRoute = ({ request }) => {
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
