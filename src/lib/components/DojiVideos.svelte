<script>
    import PhoneVideo from './PhoneVideo.svelte';
    import education from '#lib/assets/home/doji-education-loop.mp4';
    import settings from '#lib/assets/home/doji-settings.mp4';

    let { showSettings = false } = $props();
</script>

<div class="recordings" class:three-recordings={showSettings}>
    <div class="device"><PhoneVideo /></div>
    {#if showSettings}
        <div class="device"><PhoneVideo src={settings} label="Doji settings demo" /></div>
    {/if}
    <div class="device"><PhoneVideo src={education} label="Doji share extension setup demo" /></div>
</div>

<style>
    .recordings {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 24px;
        width: min(100%, 640px, calc(65svh * 884 / 914 + 24px));
        margin-inline: auto;
    }

    .three-recordings {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        width: min(100%, 960px, calc(65svh * 1326 / 914 + 48px));
    }

    .device {
        min-width: 0;
        aspect-ratio: 442 / 914;
    }
</style>
