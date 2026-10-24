export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digmaitsolutions.com';

  const routes = [
    '',
    '/services',
    '/services/web-development',
    '/services/app-development',
    '/services/digital-marketing',
    '/portfolio',
    '/about',
    '/contact',
    '/privacy-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.9 : 0.8,
  }));
}
