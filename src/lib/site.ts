import { base } from '$app/paths';

export const site = { url: 'https://ananmay.net', author: 'Ananmay Sharan' };

export function siteUrl(path: string): string {
    return new URL(`${base}${path}`, site.url).href;
}
