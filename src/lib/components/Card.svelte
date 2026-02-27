<script lang="ts">
    import { base } from "$app/paths";
    interface Props {
        title?: string;
        tags: any;
        year?: string;
        img: any;
        url: any;
        description?: string;
    }

    let {
        title = '',
        tags,
        year = '',
        img,
        url,
        description = ''
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

<div
    class="will-change-transform transition-all duration-200 ease-in-out flex flex-col bg-white border border-border relative hover:cursor-pointer hover:scale-[1.01] {isComingSoon ? 'hover:!scale-100' : ''}"
    onmousemove={handleMouseMove}
    onmouseenter={handleMouseEnter}
    onmouseleave={handleMouseLeave}
>
    {#if isComingSoon && showLabel}
        <div
            class="absolute bg-white text-primary border border-border py-2 px-4 font-sans text-xs tracking-wide uppercase pointer-events-none z-10 whitespace-nowrap"
            style="left: {mouseX}px; top: {mouseY}px;"
        >
            COMING SOON
        </div>
    {/if}
    <a href={base + url} onclick={handleClick} class="no-underline text-primary">
    <div class="aspect-[1920/1000] overflow-hidden">
        {#if isVideo}
            <video src={img} class="w-full h-full object-cover border-b border-border" autoplay loop muted playsinline></video>
        {:else}
            <img src={img} alt="img" class="w-full h-full object-cover border-b border-border"/>
        {/if}
    </div>
    <div class="flex flex-row p-4 items-center justify-between border-t border-border">
        <div class="flex flex-col gap-2">
        <h3 class="m-0">{title}</h3>
        <p class="text-gray-500 m-0">{description}</p>
        </div>
        <p>{year}</p>
    </div>
    </a>
</div>
