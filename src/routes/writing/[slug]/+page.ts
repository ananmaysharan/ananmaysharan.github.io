import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';
import type { PageLoad } from './$types';

const articles = import.meta.glob<{ default: Component }>('/src/content/writing/*/index.svx');

export const load: PageLoad = async ({ data }) => {
    const loadArticle = articles[`/src/content/writing/${data.post.slug}/index.svx`];
    if (!loadArticle) error(404, 'Writing not found');
    const { default: Article } = await loadArticle();
    return { ...data, Article };
};
