<script lang="ts">
    import { page } from '$app/state';
    import { resolve } from '$app/paths';
    import Logo from './Logo.svelte';
    import SocialLinks from './SocialLinks.svelte';
    import WorkFilters from './WorkFilters.svelte';
    import Subnav from './Subnav.svelte';

    const tabs = [
        { href: '/', label: 'Home' },
        { href: '/work', label: 'Work' },
        { href: '/garden', label: 'Garden' },
        { href: '/about', label: 'About' },
    ] as const;

    const isWriting = $derived(page.route.id === '/writing' || page.route.id?.startsWith('/writing/'));
    const isBookshelf = $derived(page.route.id === '/bookshelf');
    const isGarden = $derived(page.route.id === '/garden' || page.route.id?.startsWith('/garden/') || isWriting || isBookshelf);
    const gardenItems = $derived([
        { label: 'Writing', href: resolve('/writing'), current: !isBookshelf },
        { label: 'Bookshelf', href: resolve('/bookshelf'), current: isBookshelf },
        { label: 'Setup' },
    ]);
</script>

<header class:home-header={page.route.id === '/'} class="relative flex flex-wrap items-start justify-between gap-6 px-6 py-6 bg-white font-serif text-sm leading-5 lg:block lg:min-h-24">
    <div class="font-serif lg:absolute lg:left-6 lg:top-6">
        <Logo />
    </div>

    <nav aria-label="Main navigation" class="w-min shrink-0 lg:w-full lg:max-w-120 lg:mx-auto">
        <ul class="flex w-max justify-start list-none m-0 p-0">
            {#each tabs as tab, index}
                {@const href = resolve(tab.href)}
                {@const isActive = page.route.id === tab.href || (tab.href !== '/' && page.route.id?.startsWith(`${tab.href}/`)) || (tab.href === '/garden' && isGarden)}
                <li class="flex items-baseline">
                    <a {href} class="menu-link no-underline text-primary font-serif" aria-label={tab.label} aria-current={isActive ? (page.route.id === tab.href ? 'page' : 'location') : undefined}>
                        <span class="menu-label" aria-hidden="true">{tab.label}</span>
                    </a>
                    {#if index < tabs.length - 1}
                        <span aria-hidden="true" class="menu-separator mr-[0.25em] text-primary">,</span>
                    {/if}
                </li>
            {/each}
        </ul>
        {#if page.route.id === '/work'}
            <WorkFilters />
        {:else if isGarden}
            <Subnav label="Garden sections" items={gardenItems} />
        {/if}
    </nav>

    {#if page.route.id === '/'}
        <SocialLinks class="hidden lg:flex lg:absolute lg:right-6 lg:top-6" />
    {/if}

</header>

<style>
    @media (max-width: 39.999rem) {
        .home-header { padding-bottom: 0; }
    }

    @media (min-width: 40rem) and (max-width: 63.999rem) {
        .home-header { min-height: 6rem; }
    }

    .menu-label {
        display: inline-flex;
        white-space: nowrap;
        font-family: 'ABC Gramercy Interactive', var(--font-serif);
        font-kerning: normal;
        letter-spacing: normal;
        font-weight: 400;
    }

    .menu-separator {
        font-family: var(--font-serif);
        font-weight: 400;
        font-variation-settings: 'wght' 400;
        cursor: default;
        pointer-events: none;
    }

    .menu-link:focus-visible {
        outline: 1px solid currentColor;
        outline-offset: 3px;
    }

    .menu-link[aria-current] .menu-label,
    .menu-link:focus-visible .menu-label {
        text-decoration: underline;
    }

    @media (hover: hover) and (pointer: fine) {
        .menu-link:hover .menu-label {
            text-decoration: underline;
        }
    }

</style>
