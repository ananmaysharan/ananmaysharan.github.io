<script>
    import { onMount } from 'svelte';

    /** @type {{ sections?: Array<{id: string, title: string}> }} */
    let { sections = [] } = $props();

    let activeSection = $state('');

    onMount(() => {
        function updateActiveSection() {
            const scrollPosition = window.scrollY + 100;
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

        window.addEventListener('scroll', updateActiveSection, { passive: true });
        updateActiveSection();

        return () => {
            window.removeEventListener('scroll', updateActiveSection);
        };
    });

    /** @param {string} id */
    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
    }
</script>

<nav class="sticky top-8 p-8">
    <button onclick={() => window.history.back()} class="bg-transparent border-none cursor-pointer p-0 mb-4 opacity-50 flex items-center gap-0.5 hover:opacity-80">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
            <path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64" />
            <path fill="currentColor" d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z" />
        </svg>
        Work
    </button>

    <ul class="list-none p-0 m-0">
        {#each sections as section}
            <li>
                <button
                    onclick={() => scrollToSection(section.id)}
                    class="bg-transparent font-sans border-none cursor-pointer py-2 px-0 text-left transition-[opacity,color] duration-200 {activeSection === section.id ? 'text-primary opacity-100 font-normal' : 'opacity-50 hover:opacity-80'}"
                >
                    {section.title}
                </button>
            </li>
        {/each}
    </ul>
</nav>
