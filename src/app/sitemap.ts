export default function sitemap() {
    const routes = ['', '/services', '/about', '/contact'].map((route) => ({
        url: `https://axzron.com${route}`,
        lastModified: new Date(),
    }));
    return routes;
}