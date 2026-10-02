<script>
    import Gallery from "#lib/components/Gallery.svelte";
    import SocialLinks from "#lib/components/SocialLinks.svelte";
</script>

<main class="home-page w-full overflow-hidden px-6 pt-6 pb-12">
    <section class="flex h-full min-h-0 w-full max-w-120 flex-col gap-6 mx-auto">
        <header class="home-copy flex flex-col">
            <p class="font-serif text-text-muted">I’m currently studying <a href="https://mde.harvard.edu/" class="no-underline hover:underline hover:text-primary">Design Engineering</a> at Harvard University. Most recently, I worked on design at <a href="https://doji.com" class="no-underline hover:underline hover:text-primary">Doji</a>.</p>
            <p class="font-serif text-text-muted">Previously, I worked at the Canadian Urban Institute and Warner Music Group, and earned my bachelor’s degree from the University of Toronto.</p>
            <SocialLinks class="lg:hidden" />
        </header>
        <div class="home-gallery min-h-0 flex-1">
            <Gallery/>
        </div>
    </section>
</main>

<style>
    .home-copy {
        max-width: 28rem;
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        gap: var(--body-paragraph-space);
    }

    .home-copy > p {
        color: var(--body-color);
    }

    .home-page {
        height: 100%;
    }

    @media (max-width: 63.999rem) {
        .home-page { height: auto; overflow: visible; }
        .home-page > section { height: auto; }
        .home-copy { gap: 1.5rem; }
        .home-gallery { flex: none; }
    }


</style>
