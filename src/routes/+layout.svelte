<script lang="ts">
    import '../styles.css'
    import Navbar from '$lib/components/Navbar.svelte';
    import gramercyRegular from '$lib/assets/fonts/ABCGramercyStandardVariable-Trial.woff2?url';
    import gramercyItalic from '$lib/assets/fonts/ABCGramercy-RegularItalic-Trial.woff2?url';
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<svelte:head>
    <link rel="preload" href={gramercyRegular} as="font" type="font/woff2" crossorigin="anonymous" />
    <link rel="preload" href={gramercyItalic} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<Navbar></Navbar>

<main>
{@render children?.()}
</main>
