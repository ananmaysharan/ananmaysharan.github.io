<script>
    import Gallery from "$lib/components/Gallery.svelte";
</script>

<main class="w-full px-6 pt-4 sm:pt-6 pb-12">
    <section class="w-full max-w-120 mx-auto">
        <header class="mb-12 text-base leading-6 text-black">
            <p class="font-serif text-text-muted">I’m currently studying <a href="https://mde.harvard.edu/" class="no-underline underline-offset-2 hover:underline hover:text-primary">Design Engineering</a> at Harvard University. Most recently, I worked on design at <a href="https://doji.com" class="no-underline underline-offset-2 hover:underline hover:text-primary">Doji</a>.</p>
            <p class="font-serif text-text-muted mt-6">Previously, I worked at the Canadian Urban Institute and Warner Music Group, and earned my bachelor’s degree from the University of Toronto.</p>
            <div class="social-links mt-6 flex items-baseline gap-[0.25em] text-sm leading-5 text-text-muted">
                <a href="mailto:ananmay01@gmail.com">Email</a>
                <span aria-hidden="true">·</span>
                <a href="https://x.com/ananmaysharan" target="_blank" rel="noopener noreferrer">Twitter</a>
                <span aria-hidden="true">·</span>
                <a href="https://www.are.na/ananmay-sharan" target="_blank" rel="noopener noreferrer">Are.na</a>
            </div>
        </header>
        <Gallery/>
    </section>
</main>

<style>
    .social-links {
        font-family: 'ABC Gramercy Interactive', var(--font-serif);
        font-kerning: normal;
        letter-spacing: normal;
    }

    .social-links a {
        display: inline-flex;
        color: inherit;
        text-decoration: none;
        text-underline-offset: 2px;
        font-weight: 400;
    }

    .social-links a:focus-visible {
        text-decoration: underline;
        outline: 1px solid currentColor;
        outline-offset: 3px;
    }

    @media (hover: hover) and (pointer: fine) {
        .social-links a:hover {
            text-decoration: underline;
        }
    }
</style>
