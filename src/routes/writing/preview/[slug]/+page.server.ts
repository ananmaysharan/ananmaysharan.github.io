import { dev } from '$app/env';
import { error } from '@sveltejs/kit';
import { parsePost } from '#lib/server/writing.ts';
import type { PageServerLoad } from './$types';

export const prerender = false;

const drafts = dev ? import.meta.glob('/src/content/drafts/*/index.svx', { import: 'metadata' }) : {};

export const load: PageServerLoad = async ({ params }) => {
    if (!dev) error(404, 'Not found');
    const path = `/src/content/drafts/${params.slug}/index.svx`;
    const loadMetadata = drafts[path];
    if (!loadMetadata) error(404, 'Draft not found');
    const post = parsePost(path, await loadMetadata());
    return { post, title: `${post.title} — Draft preview` };
};
