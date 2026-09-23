<script lang="ts">
    let { sources, label, class: className = '' }: {
        sources: string[];
        label: string;
        class?: string;
    } = $props();
    let index = $state(0);
</script>

{#key sources[index]}
    <video
        src={sources[index]}
        aria-label={label}
        class={className}
        autoplay
        muted
        playsinline
        onended={() => index = (index + 1) % sources.length}
    ></video>
{/key}
