export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: 'https://axzron.com/sitemap.xml',
    };
}