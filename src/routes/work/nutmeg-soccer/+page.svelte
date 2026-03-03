<script>
    import { onMount } from "svelte";
    import nutmeg from "$lib/assets/work/splash/nutmeg-splash.webp";
    import nutmegOld from "$lib/assets/work/nutmeg/nutmeg_old.webp";
    import nutmegNew from "$lib/assets/work/nutmeg/nutmeg_new.webp";
    import Contents from "$lib/components/Contents.svelte";
    import Overview from "$lib/components/Overview.svelte";

    const sections = [
        { id: "overview", title: "Overview" },
        { id: "before-after", title: "Before & After" },
    ];

    onMount(async () => {
        await import("img-comparison-slider");
    });
</script>

<div class="flex flex-col gap-8 md:grid md:grid-cols-[1fr_4fr] md:gap-8">
    <aside class="hidden md:block">
    <Contents {sections} />
    </aside>

    <section class="prose mx-8 my-8 flex flex-col gap-16 md:max-w-200">
        <Overview
            title="Nutmeg Soccer"
            link="https://nutmegsoccer.org"
            img={nutmeg}
            roles={["Web Developer"]}
            timeline={["2025"]}
            technologies={["WordPress"]}
            skills={["Web Development", "Web Design"]}
        />

        <section id="overview">
            <h2>Overview</h2>

            <p>
                I redesigned and rebuilt the website for Nutmeg Soccer, a community-based soccer organization I volunteer with. The goal was to modernize the site, improve the user experience, and make it easier for players and families to find information about programs, schedules, and registration.
            </p>
        </section>

        <section id="before-after">
            <h2>Before & After</h2>
            <p>While there is limited documentation of the original website, this comparison tool shows the difference in the home page design. Click and drag the divider to compare.</p>

            <img-comparison-slider>
                <img slot="first" src={nutmegOld} alt="Nutmeg Soccer old website" />
                <img slot="second" src={nutmegNew} alt="Nutmeg Soccer new website" />
            </img-comparison-slider>
        </section>
    </section>
</div>
