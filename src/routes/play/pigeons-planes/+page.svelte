<script>
    import pigeons from "$lib/assets/work/splash/pigeons-splash.webp";
    import Contents from "$lib/components/Contents.svelte";
    import Overview from "$lib/components/Overview.svelte";

    const sections = [
        { id: "overview", title: "Overview" },
    ];
</script>

<div class="splash-container">
    <aside>
    <Contents {sections} />
    </aside>

    <section class="splash-content">
        <Overview  
            title="Pigeons and Planes"
            link="https://www.complex.com/author/loveinamovie"
            img={pigeons}
            roles={["Writer", "Music Journalist"]}
            timeline={["2021"]}
            technologies={[]}
            skills={["Music Journalism", "Content Writing", "Cultural Criticism"]}
            
        />

        <section id="overview">
            <h2>Overview</h2>

            <p>
                In 2022,, I contributed to Pigeons and Planes/Complex News, covering new music and rising artists.
            </p>
        </section>
    </section>
</div>

<style>
    img {
        width: 100%;
        height: auto;
    }
</style>
