<script lang="ts">
    import PhoneVideo from './PhoneVideo.svelte';
    import DojiVideos from './DojiVideos.svelte';
    import VideoPlaylist from './VideoPlaylist.svelte';
    interface Props {
        title?: string;
        accessibleLabel?: string;
        phoneVideo?: boolean;
        videoSources?: string[];
        tags: any;
        year?: string;
        img: any;
        url: any;
        description?: string;
        variant?: 'grid' | 'list' | 'feature';
    }

    let {
        title = '',
        accessibleLabel,
        phoneVideo = false,
        videoSources = [],
        tags,
        year = '',
        img,
        url,
        description = '',
        variant = 'grid'
    }: Props = $props();

    let isVideo = $derived(img && (img.endsWith('.webm') || img.endsWith('.mp4') || img.endsWith('.mov')));
    let isComingSoon = $derived(url === '/work');

    let mouseX = $state(0);
    let mouseY = $state(0);
    let showLabel = $state(false);

    function handleMouseMove(e: MouseEvent & { currentTarget: HTMLElement }) {
        if (isComingSoon) {
            const rect = e.currentTarget.getBoundingClientRect();
            mouseX = e.clientX - rect.left + 15;
            mouseY = e.clientY - rect.top + 15;
        }
    }

    function handleMouseEnter() {
        if (isComingSoon) showLabel = true;
    }

    function handleMouseLeave() {
        showLabel = false;
    }

    function handleClick(e: MouseEvent) {
        if (isComingSoon) {
            e.preventDefault();
        }
    }
</script>

{#if variant === 'feature'}
    <svelte:element
        this={url ? 'a' : 'article'}
        role={url ? 'link' : 'article'}
        href={url || undefined}
        aria-label={accessibleLabel}
        onclick={url ? handleClick : undefined}
        class="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:grid-cols-[calc(50%-17rem)_minmax(0,1fr)] md:gap-8 border-t border-border pt-6 items-start no-underline text-primary focus-visible:outline focus-visible:outline-offset-4"
    >
        <div class="min-w-0 text-left font-serif text-base leading-6">
            <h3 class="m-0 font-serif font-normal italic">{title}</h3>
            <p class="m-0 text-primary">{year}</p>
            <p class="mt-4 text-text-muted">{description}</p>
        </div>
        <div class="min-w-0">
            {#if phoneVideo}
                <div class="w-full py-4"><DojiVideos showSettings /></div>
            {:else if videoSources.length}
                <VideoPlaylist sources={videoSources} label={title} class="block w-full h-auto" />
            {:else if !img}
                <div class="w-full aspect-1920/1000" aria-hidden="true"></div>
            {:else if isVideo}
                <video src={img} aria-label={title} class="block w-full h-auto" autoplay loop muted playsinline></video>
            {:else}
                <img src={img} alt={title} class="block w-full h-auto" loading="lazy" />
            {/if}
        </div>
    </svelte:element>
{:else if variant === 'list'}
<div
    role="listitem"
    class="transition-all duration-200 ease-in-out bg-white border-b border-border relative hover:cursor-pointer hover:bg-gray-50 {isComingSoon ? '' : ''}"
    onmousemove={handleMouseMove}
    onmouseenter={handleMouseEnter}
    onmouseleave={handleMouseLeave}
>
    {#if isComingSoon && showLabel}
        <div
            class="absolute bg-white text-primary border border-border py-2 px-4 font-serif text-xs tracking-wide uppercase pointer-events-none z-10 whitespace-nowrap"
            style="left: {mouseX}px; top: {mouseY}px;"
        >
            COMING SOON
        </div>
    {/if}
    <a href={url} aria-label={accessibleLabel} onclick={handleClick} class="no-underline text-primary flex flex-row items-center gap-3 py-3 px-4">
        <div class="h-5 aspect-1920/1000 shrink-0 overflow-hidden border border-border rounded-sm">
            {#if phoneVideo}
                <PhoneVideo />
            {:else if videoSources.length}
                <VideoPlaylist sources={videoSources} label={title} class="w-full h-full object-cover" />
            {:else if isVideo}
                <video src={img} class="w-full h-full object-cover" autoplay loop muted playsinline></video>
            {:else if img}
                <img src={img} alt="img" class="w-full h-full object-cover"/>
            {/if}
        </div>
        <h3 class="m-0 font-serif font-normal shrink-0 min-w-40 sm:min-w-60 md:min-w-80">{title}</h3>
        <p class="text-gray-400 m-0 text-sm truncate flex-1 min-w-0 hidden sm:block">{description}</p>
        <p class="m-0 shrink-0 text-gray-400 text-sm ml-auto">{year}</p>
    </a>
</div>
{:else}
<div
    role="listitem"
    class="will-change-transform transition-all duration-200 ease-in-out flex flex-col bg-white border border-border relative hover:cursor-pointer hover:scale-[1.01] {isComingSoon ? 'hover:scale-100!' : ''}"
    onmousemove={handleMouseMove}
    onmouseenter={handleMouseEnter}
    onmouseleave={handleMouseLeave}
>
    {#if isComingSoon && showLabel}
        <div
            class="absolute bg-white text-primary border border-border py-2 px-4 font-serif text-xs tracking-wide uppercase pointer-events-none z-10 whitespace-nowrap"
            style="left: {mouseX}px; top: {mouseY}px;"
        >
            COMING SOON
        </div>
    {/if}
    <a href={url} aria-label={accessibleLabel} onclick={handleClick} class="no-underline text-primary">
    <div class="aspect-1920/1000 overflow-hidden">
        {#if phoneVideo}
            <div class="h-full w-full py-4"><PhoneVideo /></div>
        {:else if videoSources.length}
            <VideoPlaylist sources={videoSources} label={title} class="w-full h-full object-cover" />
        {:else if isVideo}
            <video src={img} class="w-full h-full object-cover" autoplay loop muted playsinline></video>
        {:else if img}
            <img src={img} alt="img" class="w-full h-full object-cover"/>
        {/if}
    </div>
    <div class="flex flex-row p-4 items-center justify-between border-t border-border">
        <div class="flex flex-col gap-2">
        <h3 class="m-0 font-serif font-normal">{title}</h3>
        <p class="text-text-muted m-0">{description}</p>
        </div>
        <p>{year}</p>
    </div>
    </a>
</div>
{/if}
