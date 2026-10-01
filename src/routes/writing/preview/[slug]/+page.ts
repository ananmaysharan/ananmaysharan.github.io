import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';
import type { PageLoad } from './$types';

// The entire draft import map is removed from production client builds.
const drafts = dev ? import.meta.glob<{ default: Component }>('/src/content/drafts/*/index.svx') : {};

export const load: PageLoad = async ({ data }) => {
    if (!dev) error(404, 'Not found');
    const loadDraft = drafts[`/src/content/drafts/${data.post.slug}/index.svx`];
    if (!loadDraft) error(404, 'Draft not found');
    const { default: Article } = await loadDraft();
    return { ...data, Article };
};
