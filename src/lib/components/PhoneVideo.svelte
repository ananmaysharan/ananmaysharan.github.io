<script lang="ts">
    import frame from '#lib/assets/home/iphone-17-black.webp';
    import recording from '#lib/assets/home/doji-profile-loop.mp4';

    let {
        src = recording,
        label = 'Doji profile sharing demo',
        videoEl = $bindable<HTMLVideoElement | null>(null),
        loop = true,
        onended,
    }: {
        src?: string;
        label?: string;
        videoEl?: HTMLVideoElement | null;
        loop?: boolean;
        onended?: () => void;
    } = $props();
</script>

<div class="phone">
    <video bind:this={videoEl} {src} aria-label={label}
        autoplay muted playsinline {loop} {onended} preload="metadata"></video>
    <img src={frame} alt="" aria-hidden="true" width="1326" height="2742" />
</div>

<style>
    .phone {
        position: relative;
        height: 100%;
        aspect-ratio: 442 / 914;
        max-width: 100%;
        margin-inline: auto;
    }

    video {
        position: absolute;
        left: 4.525%;
        top: 2.188%;
        width: 90.95%;
        height: 95.624%;
        object-fit: contain;
        border-radius: 15.42% / 7.09%;
        background: white;
    }

    img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
</style>
