<script>
    // @ts-nocheck
    import { onMount } from 'svelte';
    
    export let sections = [];
    
    let activeSection = '';
    
    onMount(() => {
        function updateActiveSection() {
            const scrollPosition = window.scrollY + 100; // offset for header
            
            // Find the section closest to the top of viewport
            let current = '';
            
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    if (scrollPosition >= offsetTop) {
                        current = section.id;
                    }
                }
            }
            
            activeSection = current;
        }
        
        // Update on scroll
        window.addEventListener('scroll', updateActiveSection, { passive: true });
        
        // Initial update
        updateActiveSection();
        
        return () => {
            window.removeEventListener('scroll', updateActiveSection);
        };
    });
    
    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // offset for sticky header
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
    }
</script>

<nav class="table-of-contents">
    <button on:click={() => window.history.back()} class="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024" {...$$props}>
            <path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64" />
            <path fill="currentColor" d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z" />
        </svg>
        Work
    </button>
    
    <ul>
        {#each sections as section}
            <li class:active={activeSection === section.id}>
                <button on:click={() => scrollToSection(section.id)}>
                    {section.title}
                </button>
            </li>
        {/each}
    </ul>
</nav>

<style>
    .table-of-contents {
        position: sticky;
        top: 2rem;
        padding: 2rem;
    }
    
    .back-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        margin-bottom: 1rem;
        opacity: 0.5;
        display: flex;
        align-content: center;
        gap:0.2rem;
    }

    .back-button:hover {
        opacity: 0.8;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    
    li button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem 0;
        text-align: left;
        transition: opacity 0.2s, color 0.2s;
        opacity: 0.5;
    }
    
    li.active button {
        color: #08090a;
        opacity: 1;
        font-weight: 500;
    }
    
    li button:hover {
        opacity: 0.8;
    }
</style>