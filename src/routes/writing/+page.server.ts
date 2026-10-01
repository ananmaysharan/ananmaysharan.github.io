import { dev } from '$app/environment';
import { getPosts, parsePost } from '$lib/server/writing';
import type { Post } from '$lib/writing';

const drafts = dev ? import.meta.glob('/src/content/drafts/*/index.svx', { import: 'metadata' }) : {};

export async function load() {
    const posts: (Post & { preview: boolean })[] = getPosts().map(post => ({ ...post, preview: false }));
    if (dev) {
        posts.push(...await Promise.all(Object.entries(drafts).map(async ([path, loadMetadata]) => ({
            ...parsePost(path, await loadMetadata()), preview: true
        }))));
    }
    posts.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
    const groups: { year: string; posts: typeof posts }[] = [];
    for (const post of posts) {
        const year = post.date.slice(0, 4);
        let group = groups.at(-1);
        if (group?.year !== year) {
            group = { year, posts: [] };
            groups.push(group);
        }
        group.posts.push(post);
    }
    return { groups, title: 'Writing · Ananmay Sharan' };
}
