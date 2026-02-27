<script>
    import { onMount, onDestroy } from "svelte";
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [trigger]
     * @property {import('svelte').Snippet} [content]
     */

    /** @type {Props} */
    let { trigger, content } = $props();

    /** @type {HTMLElement | undefined} */
    let triggerEl = $state();
    /** @type {HTMLElement | undefined} */
    let cardEl = $state();
    let visible = $state(false);
    let above = $state(true);
    let posX = $state(0);
    let posY = $state(0);
    let alignLeft = $state(false);

    /** @type {ReturnType<typeof setTimeout> | undefined} */
    let hideTimeout;

    function isMobile() {
        return window.matchMedia("(hover: none)").matches;
    }

    function calcPosition() {
        if (!triggerEl) return;
        const rect = triggerEl.getBoundingClientRect();
        const cardHeight = cardEl ? cardEl.offsetHeight : 200;
        const cardWidth = cardEl ? cardEl.offsetWidth : 0;
        const spaceAbove = rect.top;
        const vw = window.innerWidth;
        const margin = 12;

        above = spaceAbove > cardHeight + 12;
        posX = rect.left + rect.width / 2;
        posY = above ? rect.top - 4 : rect.bottom + 4;

        alignLeft = false;
        if (cardWidth > 0) {
            const leftEdge = posX - cardWidth / 2;
            const rightEdge = posX + cardWidth / 2;
            if (leftEdge < margin) {
                posX = margin;
                alignLeft = true;
            } else if (rightEdge > vw - margin) {
                posX = vw - margin - cardWidth;
                alignLeft = true;
            }
        }
    }

    function show() {
        if (isMobile()) return;
        clearTimeout(hideTimeout);
        visible = true;
        requestAnimationFrame(calcPosition);
    }

    function hide() {
        if (isMobile()) return;
        hideTimeout = setTimeout(() => {
            visible = false;
        }, 100);
    }

    function cardEnter() {
        clearTimeout(hideTimeout);
    }

    function cardLeave() {
        hide();
    }

    function handleTap() {
        if (!isMobile()) return;
        visible = !visible;
        if (visible) requestAnimationFrame(calcPosition);
    }

    function dismiss() {
        visible = false;
    }

    function handleScroll() {
        if (isMobile() && visible) dismiss();
    }

    /** @param {MouseEvent} e */
    function handleClickOutside(e) {
        if (!visible || !isMobile()) return;
        if (
            triggerEl && !triggerEl.contains(/** @type {Node} */ (e.target)) &&
            cardEl && !cardEl.contains(/** @type {Node} */ (e.target))
        ) {
            visible = false;
        }
    }

    onMount(() => {
        document.addEventListener("click", handleClickOutside, true);
        window.addEventListener("scroll", handleScroll, { passive: true });
    });

    onDestroy(() => {
        clearTimeout(hideTimeout);
        if (typeof document !== "undefined") {
            document.removeEventListener("click", handleClickOutside, true);
            window.removeEventListener("scroll", handleScroll);
        }
    });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<span
    class="inline underline cursor-pointer"
    bind:this={triggerEl}
    onmouseenter={show}
    onmouseleave={hide}
    onclick={handleTap}
>
    {@render trigger?.()}
</span>

{#if visible}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="hover-card"
        class:above
        class:below={!above}
        bind:this={cardEl}
        onmouseenter={cardEnter}
        onmouseleave={cardLeave}
        class:align-left={alignLeft}
        style="left: {posX}px; top: {above ? 'auto' : posY + 'px'}; bottom: {above ? (typeof window !== 'undefined' ? window.innerHeight - posY : 0) + 'px' : 'auto'};"
    >
        {@render content?.()}
    </div>
{/if}

<style>
    .hover-card {
        position: fixed;
        transform: translateX(-50%);
        z-index: 1000;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 0 0 1px #00000014, 0 2px 8px #0000001a;
        padding: 12px 16px;
        pointer-events: auto;
        animation: fadeIn 0.15s ease;
        max-width: min(400px, 90vw);
        font-size: 0.9rem;
    }

    .hover-card.align-left {
        transform: translateX(0);
    }

    .hover-card.above {
        animation-name: fadeInAbove;
    }

    .hover-card.align-left {
        animation-name: fadeInAligned;
    }

    .hover-card.align-left.above {
        animation-name: fadeInAlignedAbove;
    }
</style>
