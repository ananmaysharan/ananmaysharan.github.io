import { dev } from '$app/env';
import type { Post, PostGroup } from '#lib/writing.ts';

// Only published folders are imported. Drafts never enter the client import map.
const metadata = import.meta.glob('/src/content/writing/*/index.svx', {
    eager: true, import: 'metadata'
});

const drafts = dev ? import.meta.glob('/src/content/drafts/*/index.svx', { import: 'metadata' }) : {};

export function parsePost(path: string, value: unknown): Post {
    const fail = (message: string): never => { throw new Error(`${path}: ${message}`); };
    if (!value || typeof value !== 'object') return fail('Missing post metadata.');
    const fields = value as Record<string, unknown>;
    const text = (key: string): string => {
        const value = fields[key];
        if (typeof value !== 'string' || !value.trim()) return fail(`"${key}" must be a nonempty string.`);
        return value.trim();
    };
    const date = (key: string): string => {
        const value = text(key);
        const parsed = new Date(`${value}T00:00:00Z`);
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || !Number.isFinite(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== value) {
            return fail(`"${key}" must be a valid quoted YYYY-MM-DD date.`);
        }
        return value;
    };
    const slug = path.split('/').at(-2)!;
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return fail('Use a lowercase, hyphen-separated folder name.');
    if ('draft' in fields) return fail('Keep drafts in src/content/drafts; remove the draft field before publishing.');
    const post: Post = { slug, title: text('title'), date: date('date'), description: text('description') };
    if (fields.updated !== undefined) {
        post.updated = date('updated');
        if (post.updated < post.date) return fail('"updated" cannot precede the publication date.');
    }
    if (fields.image !== undefined) {
        post.image = text('image');
        if (!/^https?:\/\//.test(post.image) && !/^\/(?!\/)/.test(post.image)) {
            return fail('"image" must be an absolute HTTP(S) URL or a site-relative path starting with /.');
        }
    }
    return post;
}

const posts = Object.entries(metadata).map(([path, value]) => parsePost(path, value))
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));

export function getPosts(): Post[] { return posts; }
export function getPost(slug: string): Post | undefined { return posts.find(post => post.slug === slug); }

export async function getPostGroups(): Promise<PostGroup[]> {
    const entries = getPosts().map(post => ({ ...post, preview: false }));
    if (dev) {
        entries.push(...await Promise.all(Object.entries(drafts).map(async ([path, loadMetadata]) => ({
            ...parsePost(path, await loadMetadata()), preview: true
        }))));
    }
    entries.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
    const groups: PostGroup[] = [];
    for (const post of entries) {
        const year = post.date.slice(0, 4);
        let group = groups.at(-1);
        if (group?.year !== year) {
            group = { year, posts: [] };
            groups.push(group);
        }
        group.posts.push(post);
    }
    return groups;
}
