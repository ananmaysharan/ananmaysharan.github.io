<script lang="ts">
    import { cubicOut } from 'svelte/easing';
    import { ArrowsClockwiseIcon } from 'phosphor-svelte';

    const descriptions = [
        'a designer',
        'an Arsenal fan',
        'a design engineer',
        'a home cook',
        'a soccer player',
        'a bedroom DJ',
        'a mediocre tennis player',
        'an amateur cartographer',
        'a transit enthusiast'
    ];
    let descriptionIndex = $state(0);
    let turns = $state(0);
    let skipMotion = $state(false);

    function refresh(event: MouseEvent) {
        skipMotion = event.detail === 0 || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        descriptionIndex = (descriptionIndex + 1) % descriptions.length;
        turns += 1;
    }

    function roll(_node: Element, { incoming }: { incoming: boolean }) {
        return {
            duration: skipMotion ? 0 : 240,
            easing: cubicOut,
            css: (t: number) => `opacity: ${t}; transform: translateY(${(1 - t) * (incoming ? -70 : 70)}%) scaleY(${0.7 + 0.3 * t});`
        };
    }
</script>

<div class="logo" class:skip-motion={skipMotion}>
    <a href="/" class="logo-text">
        <span class="intro-line">
        <span class="italic">Ananmay Sharan</span> is
        <span class="description" aria-live="polite" aria-atomic="true">
            {#each descriptions as description}
                <span class="description-sizer" aria-hidden="true">{description}</span>
            {/each}
            {#key descriptionIndex}
                <span class="description-value" in:roll={{ incoming: true }} out:roll={{ incoming: false }}>{descriptions[descriptionIndex]}</span>
            {/key}
        </span>
        </span>
        based in Cambridge, MA.</a>&nbsp;<button type="button" class="refresh" aria-label="Show another description" onclick={refresh}>
        <span class="refresh-icon" style:transform={`rotate(${turns * 180}deg)`}>
            <ArrowsClockwiseIcon size={14} weight="bold" aria-hidden="true" />
        </span>
    </button>
</div>

<style>
    .logo {
        width: max-content;
        color: #000;
    }

    .intro-line {
        display: block;
        white-space: nowrap;
    }

    .logo-text {
        color: inherit;
        text-decoration: none;
    }

    .description {
        display: inline-grid;
        vertical-align: bottom;
        overflow: hidden;
    }

    .description-sizer,
    .description-value {
        grid-area: 1 / 1;
        white-space: nowrap;
    }

    .description-sizer {
        visibility: hidden;
    }

    .refresh {
        display: inline-grid;
        vertical-align: -0.125em;
        place-items: center;
        width: 0.875rem;
        height: 0.875rem;
        padding: 0;
        border: 0;
        background: transparent;
        color: #999;
        cursor: pointer;
        border-radius: 0.25rem;
    }

    .refresh-icon {
        display: block;
        width: 0.875rem;
        height: 0.875rem;
        transition: transform 240ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .refresh:focus-visible {
        outline: 1px solid currentColor;
        outline-offset: 2px;
    }

    @media (hover: hover) and (pointer: fine) {
        .refresh:hover {
            color: #555;
        }
    }

    .skip-motion .refresh-icon {
        transition: none;
    }

    @media (prefers-reduced-motion: reduce) {
        .refresh-icon {
            transition: none;
        }
    }
</style>
