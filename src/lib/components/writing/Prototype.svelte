<script lang="ts">
    import { ArrowClockwiseIcon } from 'phosphor-svelte';
    let { document, title, id, compact = false }: { document: string; title: string; id: string; compact?: boolean } = $props();
    let refresh = $state(0);
</script>

<figure {id} class="prototype" class:compact>
    <button type="button" class="refresh" aria-label={`Restart ${title}`} onclick={() => refresh++}>
        <ArrowClockwiseIcon size={16} weight="bold" />
    </button>
    {#key refresh}
        <iframe {title} srcdoc={document} sandbox="allow-scripts" loading="lazy"></iframe>
    {/key}
</figure>

<style>
    .prototype { position: relative; scroll-margin-top: 4rem; }
    .refresh { position: absolute; top: .5rem; right: .5rem; z-index: 1; display: grid; place-items: center; width: 2rem; height: 2rem; border: 0; background: transparent; color: #777; cursor: pointer; }
    .refresh:hover { color: var(--color-primary); }
    .refresh:focus-visible { outline: 1px solid currentColor; outline-offset: 2px; }
    iframe { border: 0; height: clamp(440px, 65vw, 640px); background: white; }
    .compact { outline: 1px solid #d4d4d4; }
    .compact iframe { height: clamp(320px, 48vw, 480px); }
</style>
