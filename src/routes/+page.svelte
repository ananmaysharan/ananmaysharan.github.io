<script>
    import Gallery from "$lib/components/Gallery.svelte";
</script>

<main class="home-page w-full overflow-hidden px-6 pt-4 sm:pt-6 pb-12">
    <section class="flex h-full min-h-0 w-full max-w-120 flex-col gap-6 mx-auto">
        <header class="home-copy flex flex-col">
            <p class="font-serif text-text-muted">I’m currently studying <a href="https://mde.harvard.edu/" class="no-underline hover:underline hover:text-primary">Design Engineering</a> at Harvard University. Most recently, I worked on design at <a href="https://doji.com" class="no-underline hover:underline hover:text-primary">Doji</a>.</p>
            <p class="font-serif text-text-muted">Previously, I worked at the Canadian Urban Institute and Warner Music Group, and earned my bachelor’s degree from the University of Toronto.</p>
            <nav aria-label="Social links" class="social-links flex items-baseline gap-[0.25em] text-sm leading-5 text-primary">
                <a href="mailto:ananmay01@gmail.com">Email</a>
                <span aria-hidden="true">·</span>
                <a href="https://x.com/ananmaysharan" target="_blank" rel="noopener noreferrer">Twitter</a>
                <span aria-hidden="true">·</span>
                <a href="https://www.are.na/ananmay-sharan" target="_blank" rel="noopener noreferrer">Are.na</a>
            </nav>
        </header>
        <div class="min-h-0 flex-1">
            <Gallery/>
        </div>
    </section>
</main>

<style>
    .home-copy {
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

    .social-links {
        font-family: 'ABC Gramercy Interactive', var(--font-serif);
        font-kerning: normal;
        letter-spacing: normal;
    }

    .social-links a {
        color: inherit;
        text-decoration: none;
        font-weight: 400;
    }

    .social-links a:focus-visible {
        outline: 1px solid currentColor;
        outline-offset: 3px;
        text-decoration: underline;
    }

    @media (hover: hover) and (pointer: fine) {
        .social-links a:hover {
            text-decoration: underline;
        }
    }

</style>
