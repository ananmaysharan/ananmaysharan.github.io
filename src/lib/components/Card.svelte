<script>
    // @ts-nocheck
    export let title = '';
    export let tags;
    export let year = '';
    export let img;
    export let url;
    export let description = '';
    import { base } from "$app/paths";

    $: isVideo = img && (img.endsWith('.webm') || img.endsWith('.mp4') || img.endsWith('.mov'));
    $: isComingSoon = url === '/work';

    let mouseX = 0;
    let mouseY = 0;
    let showLabel = false;

    /** @param {MouseEvent} e */
    function handleMouseMove(e) {
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

    /** @param {MouseEvent} e */
    function handleClick(e) {
        if (isComingSoon) {
            e.preventDefault();
        }
    }
</script>

<div 
    id="card" 
    class:coming-soon={isComingSoon}
    on:mousemove={handleMouseMove}
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
>
    {#if isComingSoon && showLabel}
        <div class="coming-soon-label" style="left: {mouseX}px; top: {mouseY}px;">
            COMING SOON
        </div>
    {/if}
    <a href={base + url} on:click={handleClick}>
    <div class="content">
        {#if isVideo}
            <video src={img} class="image" autoplay loop muted playsinline></video>
        {:else}
            <img src={img} alt="img" class="image"/>
        {/if}
    </div>
    <div class="card-header">
        <div class="text-content">
        <h3 class="title">{title}</h3>
        <p class="description">{description}</p>
        </div>
        <p>{year}</p>
    </div>
    </a>    
</div>

<style>
    #card {
        will-change: transform, filter;
        will-change: transform, z-index;
        transition: 0.2s ease;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        /* border-radius: 1em; */
        border: 1px solid #eee;
        /* box-shadow: 0 0 0 1px rgba(14, 63, 126, .06), 0 1px 1px -.5px rgba(42, 51, 70, .03), 0 2px 2px -1px rgba(42, 51, 70, .04), 0 3px 3px -1.5px rgba(42, 51, 70, .04), 0 5px 5px -2.5px rgba(42, 51, 70, .03), 0 10px 10px -5px rgba(42, 51, 70, .03), 0 24px 24px -8px rgba(42, 51, 70, .03); */
        position: relative;
    }

    #card.coming-soon:hover {
        scale: 1;
    }

    #card:hover {
        cursor: pointer;
        scale: 1.01;
        /* box-shadow: rgba(9, 30, 66, 0.1) 0px 4px 8px -2px,
            rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px); */
    }

    .coming-soon-label {
        position: absolute;
        background-color: #fff;
        color: #08090a;
        border: 1px solid #eee;
        padding: 0.5em 1em;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 0.75rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        pointer-events: none;
        z-index: 10;
        white-space: nowrap;
    }

    .card-header {
        display: flex;
        flex-direction: row;
        padding: 1em;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid #eee;
    }

    .content {
        aspect-ratio: 1920 / 1000;
        overflow: hidden;
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-bottom: 1px solid #eee;
    }

    /* .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
        padding: 1em;

    }

    .tag {
        border-radius: 1em;
        border: 1px solid #eee;
        padding: 0.5em;
        font-size: 0.8rem;
        font-family: 'Helvetica Neue', Arial, sans-serif;
        text-transform: uppercase;
    } */

    a {
        text-decoration: none;
        color: #08090a;
    }

    .description {
        color: #808080;
        margin: 0;
    }

    .title {
        margin: 0;
    }

    .text-content {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>
