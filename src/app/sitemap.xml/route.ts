import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_FRONTEND_BASE_URL ||
    'https://adhikarishishir.com.np';
  let links: { url: string; changefreq: string; priority: number }[] = [];
  try {
    // Static URLs
    links.push({ url: '/', changefreq: 'daily', priority: 1.0 });
    links.push({ url: '/about', changefreq: 'monthly', priority: 0.7 });
    links.push({ url: '/contact', changefreq: 'monthly', priority: 0.7 });
    links.push({ url: '/blog', changefreq: 'monthly', priority: 0.7 });
    links.push({ url: '/portfolio', changefreq: 'monthly', priority: 0.7 });

    // Create a stream to write the sitemap
    const stream = new SitemapStream({ hostname: baseUrl });

    // Convert the stream into a promise
    const sitemap = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    // Return the sitemap as an XML response
    const responseHeaders = { 'Content-Type': 'application/xml' };
    return new NextResponse(sitemap, { headers: responseHeaders });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'Failed to generate sitemap' }),
      { status: 500 }
    );
  }
}
