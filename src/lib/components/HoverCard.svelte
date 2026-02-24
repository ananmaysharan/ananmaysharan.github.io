<script>
    import { onMount, onDestroy } from "svelte";

    /** @type {HTMLElement} */
    let triggerEl;
    /** @type {HTMLElement} */
    let cardEl;
    let visible = false;
    let above = true;
    let posX = 0;
    let posY = 0;

    /** @type {ReturnType<typeof setTimeout> | undefined} */
    let hideTimeout;

    function isMobile() {
        return window.matchMedia("(hover: none)").matches;
    }

    function calcPosition() {
        if (!triggerEl) return;
        const rect = triggerEl.getBoundingClientRect();
        const cardHeight = cardEl ? cardEl.offsetHeight : 200;
        const spaceAbove = rect.top;

        above = spaceAbove > cardHeight + 12;
        posX = rect.left + rect.width / 2;
        posY = above ? rect.top - 4 : rect.bottom + 4;
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
    });

    onDestroy(() => {
        clearTimeout(hideTimeout);
        if (typeof document !== "undefined") {
            document.removeEventListener("click", handleClickOutside, true);
        }
    });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<span
    class="hover-card-trigger"
    bind:this={triggerEl}
    on:mouseenter={show}
    on:mouseleave={hide}
    on:click={handleTap}
>
    <slot name="trigger" />
</span>

{#if visible}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="hover-card"
        class:above
        class:below={!above}
        bind:this={cardEl}
        on:mouseenter={cardEnter}
        on:mouseleave={cardLeave}
        style="left: {posX}px; top: {above ? 'auto' : posY + 'px'}; bottom: {above ? (typeof window !== 'undefined' ? window.innerHeight - posY : 0) + 'px' : 'auto'};"
    >
        <slot name="content" />
    </div>
{/if}

<style>



    .hover-card-trigger {
        display: inline-flex;
        text-decoration: underline;
        cursor: pointer;

    }

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

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(4px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    .hover-card.above {
        animation-name: fadeInAbove;
    }

    @keyframes fadeInAbove {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-4px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
</style>
