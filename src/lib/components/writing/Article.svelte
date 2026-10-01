<script lang="ts">
    import type { Snippet } from 'svelte';
    import { site, siteUrl } from '$lib/site';
    import { formatPostDate, type Post } from '$lib/writing';
    import './article.css';

    let { post, children }: { post: Post; children: Snippet } = $props();
    const canonical = $derived(siteUrl(`/writing/${post.slug}`));
    const image = $derived(post.image ? (post.image.startsWith('/') ? siteUrl(post.image) : post.image) : undefined);
</script>

<svelte:head>
    <meta name="description" content={post.description} />
    <meta name="author" content={site.author} />
    <link rel="canonical" href={canonical} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={post.title} />
    <meta property="og:description" content={post.description} />
    <meta property="og:url" content={canonical} />
    <meta property="article:published_time" content={`${post.date}T00:00:00Z`} />
    {#if post.updated}
        <meta property="article:modified_time" content={`${post.updated}T00:00:00Z`} />
    {/if}
    <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
    {#if image}<meta property="og:image" content={image} />{/if}
</svelte:head>

<div class="w-full px-6 pt-4 sm:pt-6 pb-12">
    <article class="writing-article w-full mx-auto font-serif leading-6">
        <header class="mb-10">
            <h1 class="text-3xl leading-tight text-primary">{post.title}</h1>
            <p class="mt-3 text-sm text-text-muted">
                <time datetime={post.date}>{formatPostDate(post.date)}</time>{#if post.updated}<span class="inline-block"><span class="mx-[0.25em]" aria-hidden="true">·</span>Updated <time datetime={post.updated}>{formatPostDate(post.updated)}</time></span>{/if}
            </p>
        </header>
        <div class="writing-body">{@render children()}</div>
    </article>
</div>
