export const site = { url: 'https://ananmay.net', author: 'Ananmay Sharan' };

export function siteUrl(path: string): string {
    return new URL(path, site.url).href;
}
