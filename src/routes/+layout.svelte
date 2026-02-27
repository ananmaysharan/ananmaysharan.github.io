<script lang="ts">
    import '../styles.css'
    import Navbar from '$lib/components/Navbar.svelte';
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<Navbar></Navbar>

<main>
{@render children?.()}
</main>
