<script lang="ts">
    import { siteUrl } from '#lib/site.ts';
    import PostList from '#lib/components/writing/PostList.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <meta name="description" content="Writing by Ananmay Sharan." />
    <link rel="canonical" href={siteUrl('/garden')} />
    <meta property="og:title" content="Garden · Ananmay Sharan" />
    <meta property="og:description" content="Writing by Ananmay Sharan." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteUrl('/garden')} />
</svelte:head>

<PostList groups={data.groups} />
