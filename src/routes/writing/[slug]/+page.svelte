<script lang="ts">
    import Article from '#lib/components/writing/Article.svelte';
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
</script>

<Article post={data.post}>
    <data.Article />
</Article>
