<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/state';
    import Card from "#lib/components/Card.svelte";
    import { workView } from "#lib/workViewMode.svelte.js";
    import { getWorkFilter } from "#lib/workFilters.ts";
    import mms from "#lib/assets/work/mms.webp";
    import ocean from "#lib/assets/work/ocean-records/year_view.webm";
    import oceanGlobal from "#lib/assets/work/ocean-records/global.webm";
    import oceanMonth from "#lib/assets/work/ocean-records/month_view.webm";
    import pollution from "#lib/assets/work/pollution.webp";
    import zinezone from "#lib/assets/work/zinezone.webm";
    import harvard from "#lib/assets/work/harvard.webp";

    const projects = [
        {
            title: "Doji",
            accessibleLabel: "Doji",
            phoneVideo: true,
            description: "Doji is an AI-powered social shopping app. I designed and shipped profile and look sharing features, a redesigned settings page and worked on the Doji iOS extension.",
            tags: [],
            img: null,
            url: null,
            categories: ['product'],
        },
        {
            title: "Ocean Records",
            description: "Data visualization project using Google DeepMind's Perch machine learning model to detect conflict between marine and human sounds in California's Monterey Bay.",
            year: "2025",
            tags: ["Design", "Development", "Research"],
            img: ocean,
            videoSources: [oceanGlobal, ocean, oceanMonth],
            url: "/work/ocean-records",
            categories: ['data-viz'],
        },
        {
            title: "Harvard Libraries",
            description: "Campus library app",
            year: "2026",
            tags: ["Personal", "Development"],
            img: harvard,
            url: "/work/harvard-libraries",
            categories: ['product'],
        },
        {
            title: "Measuring Main Streets",
            description: "Mapping every main street in Canada",
            year: "2024",
            tags: ["Design", "Development", "Research"],
            img: mms,
            url: "/work/measuring-main-streets",
            categories: ['product', 'brand', 'data-viz'],
        },
        {
            title: "Chemical Valley Pollution Map",
            description: "Visualizing 10 years of pollution in Ontario's Chemical Valley",
            year: "2023",
            tags: ["Mapping", "Development"],
            img: pollution,
            url: "/work/chemical-valley-pollution-map",
            categories: ['data-viz'],
        },
        {
            title: "Zine Zone",
            description: "in collaboration with Callia Silverton",
            year: "2024",
            tags: ["Personal", "Development"],
            img: zinezone,
            url: "/work/zine-zone",
            categories: ['brand'],
        },
    ];

    let mounted = $state(false);
    onMount(() => { mounted = true; });

    const selected = $derived(mounted ? getWorkFilter(page.url.searchParams.get('filter')) : 'all');
    const visibleProjects = $derived(projects.filter(project => selected === 'all' || project.categories.includes(selected)));
</script>

<main class="w-full px-6 pt-4 sm:pt-6 pb-12 font-serif text-base leading-6 text-text-muted">
    <div class="grid {workView.mode === 'grid' ? 'grid-cols-1 gap-4 md:grid-cols-2' : workView.mode === 'feature' ? 'grid-cols-1 gap-16 md:gap-24' : 'grid-cols-1 border-t border-border'}">
        {#each visibleProjects as project (project.title)}
            {@const { categories, ...card } = project}
            <Card {...card} variant={workView.mode} />
        {/each}
    </div>
</main>
