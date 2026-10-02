<script lang="ts">
    import '../styles.css'
    import { page } from '$app/state';
    import Navbar from '#lib/components/Navbar.svelte';
    import gramercyRegular from '#lib/assets/fonts/ABCGramercyStandardVariable-Trial.woff2?url';
    import gramercyItalic from '#lib/assets/fonts/ABCGramercy-RegularItalic-Trial.woff2?url';
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<svelte:head>
    <title>{page.data.title ?? 'Ananmay'}</title>
    <link rel="preload" href={gramercyRegular} as="font" type="font/woff2" crossorigin="anonymous" />
    <link rel="preload" href={gramercyItalic} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<div class="site-shell">
    <Navbar></Navbar>

    <main class="site-content">
        {@render children?.()}
    </main>
</div>

<style>
    .site-shell {
        display: flex;
        height: 100svh;
        flex-direction: column;
    }

    .site-content {
        min-height: 0;
        flex: 1;
    }
</style>
