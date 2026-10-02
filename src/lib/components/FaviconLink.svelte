<script lang="ts">
    let { href, icon, label, suffix = '', iconScale = 1, bordered = true }: { href: string; icon: string; label: string; suffix?: string; iconScale?: number; bordered?: boolean } = $props();
    let revealed = $state(false);
    let link: HTMLAnchorElement;
    const displayLabel = $derived(label + suffix);
    const firstWord = $derived(displayLabel.split(' ')[0]);
    const remainder = $derived(displayLabel.slice(firstWord.length));

    function reveal(keyboard = false) {
        if (revealed) return;
        const allowed = link.dispatchEvent(new CustomEvent('faviconreveal', { bubbles: true, cancelable: true, detail: { link, keyboard } }));
        if (!allowed) return;
        revealed = true;
    }

    function revealOnHover(event: PointerEvent) {
        if (event.pointerType === 'mouse' || event.pointerType === 'pen') reveal();
    }
</script>

<a bind:this={link} {href} data-favicon-link class:revealed onpointerenter={revealOnHover} onfocus={() => reveal(true)}><span class="leading-word"><span class="icon-slot" data-favicon-slot aria-hidden="true"><span class="icon-frame" class:bordered><img src={icon} alt="" width="12" height="12" style:scale={iconScale} /></span></span>{firstWord}</span>{remainder}</a>

<style>
    a {
        color: inherit;
        text-decoration: none;
    }

    a:hover { text-decoration: underline; }
    a:hover :global([data-animated-word]) { text-decoration: underline; }

    .leading-word { white-space: nowrap; }

    .icon-slot {
        display: inline-block;
        position: relative;
        width: 0;
        height: 14px;
        vertical-align: -2px;
    }

    .icon-frame {
        position: absolute;
        left: 2px;
        top: 0;
        display: grid;
        place-items: center;
        width: 14px;
        height: 14px;
        overflow: hidden;
        background: white;
        border-radius: 3px;
        opacity: 0;
        transform: translateX(8px);
        filter: blur(2px);
        pointer-events: none;
        transition: transform 360ms cubic-bezier(0.23, 1, 0.32, 1), opacity 280ms ease, filter 360ms ease;
    }

    .icon-frame.bordered {
        box-shadow: 0 0 0 0.5px #d9d9d9;
    }

    img {
        display: block;
        width: 12px;
        height: 12px;
        max-width: none;
        margin: 0;
        object-fit: contain;
    }

    :global([data-stable-reveals="ready"]) .icon-slot,
    a.revealed .icon-slot { width: 22px; }
    a.revealed .icon-frame { opacity: 1; transform: translateX(0); filter: blur(0); }

    a:focus-visible .icon-frame { transition: none; }

    @media (max-width: 39.999rem) {
        .icon-slot { width: 22px; }
        .icon-frame { opacity: 1; transform: none; filter: none; transition: none; }
    }

    @media (prefers-reduced-motion: reduce) {
        .icon-frame { transition: none; }
    }
</style>
