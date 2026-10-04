<script lang="ts">
    interface Item {
        label: string;
        href?: string;
        current?: boolean;
    }

    let { label, items }: { label: string; items: Item[] } = $props();
</script>

<nav aria-label={label} class="subnav">
    <ul>
        {#each items as item, index}
            <li>
                {#if item.href}
                    <a href={item.href} aria-current={item.current ? 'true' : undefined}
                        data-sveltekit-reset="false">{item.label}</a>
                {:else}
                    <span class="disabled" aria-disabled="true">{item.label}</span>
                {/if}
                {#if index < items.length - 1}<span class="separator" aria-hidden="true">,</span>{/if}
            </li>
        {/each}
    </ul>
</nav>

<style>
    .subnav {
        font-family: 'ABC Gramercy Interactive', var(--font-serif);
        font-size: inherit;
        line-height: inherit;
        color: var(--color-primary);
        font-weight: 400;
        font-kerning: normal;
    }

    ul { display: flex; flex-wrap: wrap; list-style: none; margin: 0; padding: 0; font-family: inherit; color: inherit; }
    li { display: flex; align-items: baseline; }
    a, .disabled { white-space: nowrap; }
    a { color: inherit; font-weight: 400; text-decoration: none; }
    a[aria-current], a:focus-visible { text-decoration: underline; }
    a:focus-visible { outline: 1px solid currentColor; outline-offset: 3px; }
    .disabled { color: #999; cursor: default; }
    .separator { margin-right: .25em; font-family: var(--font-serif); font-weight: 400; font-variation-settings: 'wght' 400; }

    @media (hover: hover) and (pointer: fine) {
        a:hover { text-decoration: underline; }
    }
</style>
