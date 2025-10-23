import { NextResponse } from 'next/server';

// Simple sitemap-like XML. For production, consider adding <lastmod> and dynamic URL discovery.
export async function GET() {
  const baseUrl = 'https://swiftscale.com.ng';
  const urls = [
    '/',
    '/about',
    '/contact',
    '',
    '/software-development',
    '/design',
    '/legal-services',
    '/hr-consultation',
    '/seo-consultations',
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (path) => `  <url>
    <loc>${baseUrl}${path}</loc>
  </url>`
    )
    .join('\n')}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate'
    },
  });
}
