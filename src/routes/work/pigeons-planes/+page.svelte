<script>
    import pigeons from "$lib/assets/work/splash/pigeons-splash.webp";
    import Contents from "$lib/components/Contents.svelte";
    import Overview from "$lib/components/Overview.svelte";

    const sections = [
        { id: "overview", title: "Overview" },
    ];
</script>

<div class="flex flex-col gap-8 md:grid md:grid-cols-[1fr_4fr] md:gap-8">
    <aside class="hidden md:block">
    <Contents {sections} />
    </aside>

    <section class="prose mx-8 my-8 flex flex-col gap-16 md:max-w-200">
        <Overview  
            title="Pigeons and Planes"
            link="https://www.pigeonsandplanes.com/read/new-artists-to-watch-2021"
            img={pigeons}
            roles={["Writer", "Music Journalist"]}
            timeline={["2021"]}
            technologies={[]}
            skills={["Music Journalism", "Content Writing", "Cultural Criticism"]}
            showInfo={false}
        />

        <section id="overview">
            <h2>Overview</h2>

            <p>
                In 2021, I contributed to Pigeons and Planes/Complex News, covering new music and interviewing rising artists.
            </p>
        </section>
    </section>
</div>
