<script lang="ts">
    import { page } from '$app/state';
    import { base } from '$app/paths';
    import Logo from './Logo.svelte';

    const tabs = [
        { href: '/', label: 'Home' },
        { href: '/work', label: 'Work' },
        { href: '/writing', label: 'Writing' },
        { href: '/about', label: 'About' },
    ];
</script>

<header class="relative flex flex-wrap items-end justify-between gap-6 px-6 py-6 bg-white font-serif text-sm leading-5 lg:block lg:min-h-24">
    <div class="font-serif lg:absolute lg:left-6 lg:top-6">
        <Logo />
    </div>

    <nav aria-label="Main navigation" class="shrink-0 lg:w-full lg:max-w-120 lg:mx-auto">
        <ul class="flex w-fit justify-start list-none m-0 p-0">
            {#each tabs as tab, index}
                {@const href = `${base}${tab.href}`}
                {@const isActive = page.url.pathname === href || (tab.href !== '/' && page.url.pathname.startsWith(`${href}/`))}
                <li class="flex items-baseline">
                    <a {href} class="menu-link no-underline text-primary font-serif" aria-label={tab.label} aria-current={isActive ? (page.url.pathname === href ? 'page' : 'location') : undefined}>
                        <span class="menu-label" aria-hidden="true">{tab.label}</span>
                    </a>
                    {#if index < tabs.length - 1}
                        <span aria-hidden="true" class="menu-label menu-separator mx-[0.25em] text-primary">·</span>
                    {/if}
                </li>
            {/each}
        </ul>
    </nav>

</header>

<style>
    .menu-label {
        display: inline-flex;
        white-space: nowrap;
        font-family: 'ABC Gramercy Interactive', var(--font-serif);
        font-kerning: normal;
        letter-spacing: normal;
        font-weight: 400;
    }

    .menu-link .menu-label {
        transition: font-weight 400ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .menu-separator {
        cursor: default;
        pointer-events: none;
    }

    .menu-link[aria-current] .menu-label {
        font-weight: 600;
    }

    .menu-link:focus-visible {
        outline: 1px solid currentColor;
        outline-offset: 3px;
    }

    .menu-link:focus-visible .menu-label {
        font-weight: 600;
        transition: none;
    }

    @media (hover: hover) and (pointer: fine) {
        ul:has(.menu-link:hover) .menu-link[aria-current]:not(:hover) .menu-label {
            font-weight: 400;
        }

        .menu-link:hover .menu-label {
            font-weight: 600;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .menu-link .menu-label {
            transition: none;
        }
    }

</style>
