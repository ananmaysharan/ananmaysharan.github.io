<script>
    import pigeons from "$lib/assets/work/splash/pigeons-splash.webp";
    import Overview from "$lib/components/Overview.svelte";

</script>

<div class="flex flex-col items-center px-8">
    <section class="prose w-full my-8 flex flex-col gap-16 md:max-w-200">
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
