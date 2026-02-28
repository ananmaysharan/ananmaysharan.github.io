<script>
    import { onMount } from 'svelte';
    import {ArrowLeftIcon} from "phosphor-svelte";

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
    <button onclick={() => window.history.back()} class="bg-transparent border-none cursor-pointer p-0 mb-4 opacity-50 flex items-center gap-1 hover:opacity-80">
        <ArrowLeftIcon size={16} weight="bold" />
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
