import { error } from '@sveltejs/kit';
import { getPost, getPosts } from '$lib/server/writing';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => getPosts().map(({ slug }) => ({ slug }));
// An empty archive has no article URLs for the static builder to visit.
export const prerender = getPosts().length > 0;

export const load: PageServerLoad = ({ params }) => {
    const post = getPost(params.slug);
    if (!post) error(404, 'Writing not found');
    return { post, title: `${post.title} · Ananmay Sharan` };
};
