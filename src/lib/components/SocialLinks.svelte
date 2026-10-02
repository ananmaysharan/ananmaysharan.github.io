<script lang="ts">
    let { class: className = '' }: { class?: string } = $props();
</script>

<nav aria-label="Social links" class="social-links flex items-baseline gap-[0.25em] text-sm leading-5 text-primary {className}">
    <a href="mailto:ananmay01@gmail.com">Email</a>
    <span aria-hidden="true">·</span>
    <a href="https://x.com/ananmaysharan" target="_blank" rel="noopener noreferrer">Twitter</a>
    <span aria-hidden="true">·</span>
    <a href="https://www.are.na/ananmay-sharan" target="_blank" rel="noopener noreferrer">Are.na</a>
</nav>

<style>
    .social-links {
        font-family: 'ABC Gramercy Interactive', var(--font-serif);
        font-kerning: normal;
        letter-spacing: normal;
    }

    a {
        color: inherit;
        text-decoration: none;
        font-weight: 400;
    }

    a:focus-visible {
        outline: 1px solid currentColor;
        outline-offset: 3px;
        text-decoration: underline;
    }

    @media (hover: hover) and (pointer: fine) {
        a:hover { text-decoration: underline; }
    }
</style>
