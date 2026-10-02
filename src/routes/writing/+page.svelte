<script lang="ts">
    import { resolve } from '$app/paths';
    import { siteUrl } from '#lib/site.ts';
    import { formatPostDate } from '#lib/writing.ts';
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <meta name="description" content="Writing by Ananmay Sharan." />
    <link rel="canonical" href={siteUrl('/writing')} />
    <meta property="og:title" content="Writing · Ananmay Sharan" />
    <meta property="og:description" content="Writing by Ananmay Sharan." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteUrl('/writing')} />
</svelte:head>

<div class="w-full px-6 pt-4 sm:pt-6 pb-12">
    <section class="w-full max-w-120 mx-auto font-serif text-base leading-6" aria-labelledby="writing-title">
        <h1 id="writing-title" class="sr-only">Writing</h1>
        {#each data.groups as group, index (group.year)}
            <section class:mt-10={index > 0} aria-labelledby={`year-${group.year}`}>
                <h2 id={`year-${group.year}`} class="text-sm text-text-muted mb-3">{group.year}</h2>
                <ul class="list-none m-0 p-0">
                    {#each group.posts as post (post.slug)}
                        <li class="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-1 py-1.5">
                            <span class="post-title min-w-0">
                                <a class="post-link text-primary no-underline" href={post.preview ? resolve('/writing/preview/[slug]', { slug: post.slug }) : resolve('/writing/[slug]', { slug: post.slug })}>{post.title}</a>{#if post.preview}<span class="text-sm text-text-muted"><span class="mx-[0.25em]" aria-hidden="true">·</span>Draft</span>{/if}
                            </span>
                            <time class="text-sm text-text-muted whitespace-nowrap" datetime={post.date}>{formatPostDate(post.date)}</time>
                        </li>
                    {/each}
                </ul>
            </section>
        {:else}
            <p>Nothing published yet.</p>
        {/each}
    </section>
</div>

<style>
    .post-title { text-wrap: balance; }
    .post-link { overflow-wrap: anywhere; }
    .post-link:hover { text-decoration: underline;  }
    .post-link:focus-visible { outline: 1px solid currentColor; outline-offset: 4px; }
</style>
