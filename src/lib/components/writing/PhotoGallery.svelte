<script lang="ts">
    import emblaCarouselSvelte from 'embla-carousel-svelte';
    import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
    import { CaretLeftIcon, CaretRightIcon } from 'phosphor-svelte';

    type Photo = { src: string; alt: string; caption: string; description?: string; definition?: string; outline?: boolean };
    let { items, label = 'Photo gallery', aspectRatio = '1 / 1', fit = 'contain' }: {
        items: Photo[]; label?: string; aspectRatio?: string; fit?: 'contain' | 'cover';
    } = $props();
    let api = $state<EmblaCarouselType>();
    let index = $state(0);
    const options: EmblaOptionsType = {
        align: 'start',
        loop: true,
        skipSnaps: false,
        watchDrag: (_carousel, event) => event.type.startsWith('touch'),
        breakpoints: { '(prefers-reduced-motion: reduce)': { duration: 0 } }
    };

    function init(event: CustomEvent<EmblaCarouselType>) {
        api = event.detail;
        const updateCaption = (carousel: EmblaCarouselType) => index = carousel.selectedScrollSnap();
        updateCaption(api);
        api.on('select', updateCaption).on('reInit', updateCaption);
    }

    function keydown(event: KeyboardEvent) {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        if (event.key === 'ArrowRight') api?.scrollNext();
        else api?.scrollPrev();
    }
</script>

{#if items.length}
    <figure class="photo-gallery">
        <div class="stage" class:has-outline={items[index]?.outline}>
        <!-- A focusable carousel lets keyboard users navigate the photos directly. -->
        <!-- svelte-ignore a11y_no_noninteractive_tabindex, a11y_no_noninteractive_element_interactions -->
        <div
            class="viewport"
            role="region"
            aria-label={label}
            aria-roledescription="carousel"
            tabindex="0"
            use:emblaCarouselSvelte={{ options, plugins: [] }}
            onemblaInit={init}
            onkeydown={keydown}
        >
            <div class="track">
                {#each items as photo}
                    <div class="slide">
                        <div class="photo" style:aspect-ratio={aspectRatio}>
                            <img src={photo.src} alt={photo.alt} draggable="false" loading="lazy" style:object-fit={fit} />
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        {#if items.length > 1}
            <button type="button" class="arrow previous" aria-label="Previous photo" disabled={!api} onclick={() => api?.scrollPrev()}>
                <CaretLeftIcon size={16} weight="bold" />
            </button>
            <button type="button" class="arrow next" aria-label="Next photo" disabled={!api} onclick={() => api?.scrollNext()}>
                <CaretRightIcon size={16} weight="bold" />
            </button>
        {/if}
        </div>
        <figcaption>
            <div class="caption-copy" aria-live="polite" aria-atomic="true">
                <span>{items[index]?.caption}{#if items[index]?.description}<span class="caption-separator">·</span>{items[index].description}{/if}</span>
                {#if items[index]?.definition}
                    <p class="caption-definition">{items[index].definition}</p>
                {/if}
            </div>
            {#if items.length > 1}
                <div class="dots" role="group" aria-label="Choose photo">
                    {#each items as photo, position}
                        <button
                            type="button"
                            class="dot"
                            class:active={position === index}
                            aria-label={`Show ${photo.caption || `photo ${position + 1}`}`}
                            aria-current={position === index ? 'true' : undefined}
                            onclick={() => api?.scrollTo(position)}
                        ></button>
                    {/each}
                </div>
            {/if}
        </figcaption>
    </figure>
{/if}

<style>
    .photo-gallery { width: 100%; }
    .stage { position: relative; border: 1px solid transparent; }
    .stage.has-outline { border-color: #d4d4d4; }
    .viewport { overflow: hidden; cursor: default; }
    .viewport:focus-visible { outline: 1px solid #777; outline-offset: 3px; }
    .track { display: flex; align-items: flex-start; touch-action: pan-y pinch-zoom; }
    .slide { flex: 0 0 calc(100% + 1rem); min-width: 0; padding-right: 1rem; }
    .photo img { display: block; width: 100%; height: 100%; margin: 0; object-fit: contain; }
    .photo-gallery figcaption { display: flex; justify-content: space-between; width: 100%; align-items: flex-start; gap: 1rem; margin-top: .5rem; color: #777; font-size: .875em; line-height: 1.4; }
    .caption-copy { min-width: 0; padding-top: .35rem; }
    .caption-separator { margin-inline: .25em; }
    .photo-gallery .caption-definition { margin: .5em 0 0; font-style: italic; }
    .dots { display: flex; flex-shrink: 0; align-items: center; }
    button.dot { width: .75rem; height: 2rem; }
    .dot::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: #d4d4d4; }
    .dot.active::before, .dot:hover::before { background: #777; }
    button.arrow { position: absolute; top: 50%; transform: translateY(-50%); width: 1.75rem; height: 1.75rem; border: 1px solid #e5e5e5; border-radius: 50%; background: #fff; color: #000; opacity: 0; pointer-events: none; user-select: none; touch-action: manipulation; transition: opacity 150ms cubic-bezier(.4, 0, .2, 1), background-color 150ms cubic-bezier(.4, 0, .2, 1), border-color 150ms cubic-bezier(.4, 0, .2, 1), transform 150ms cubic-bezier(.4, 0, .2, 1); }
    button.arrow:hover { background: #f5f5f5; color: #000; }
    button.arrow:active { transform: translateY(calc(-50% + 1px)); }
    button.arrow:focus-visible { border-color: #a3a3a3; outline: 3px solid rgb(163 163 163 / 50%); outline-offset: 0; }
    .previous { left: .75rem; }
    .next { right: .75rem; }
    .stage:hover .arrow, .stage:has(:focus-visible) .arrow { opacity: 1; pointer-events: auto; }
    @media (hover: none) { button.arrow { opacity: 1; pointer-events: auto; } }
    .stage .arrow:disabled { opacity: .5; pointer-events: none; }
    @media (prefers-reduced-motion: reduce) { button.arrow { transition: none; } }
    button { display: grid; place-items: center; width: 1.5rem; height: 2rem; padding: 0; border: 0; background: transparent; color: #777; cursor: pointer; }
    button:hover { color: var(--color-primary); }
    button:focus-visible { outline: 1px solid currentColor; outline-offset: 2px; }
</style>
