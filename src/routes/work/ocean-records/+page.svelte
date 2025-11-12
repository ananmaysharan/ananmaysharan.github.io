<script>
    import mms from "$lib/assets/work/ocean.webp";
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
            title="Ocean Records"
            link="http://ocean-records.vercel.app/"
            img={mms}
            roles={["Designer", "Web Developer"]}
            timeline="September 2025"
            technologies={["SvelteKit", "Mapbox", "GSAP", "P5.js"]}
            skills={["Design Research", "Data Visualization", "Web Development"]}

        />

        <section id="overview">
            <h2>Overview</h2>

            <p>
                Using machine learning to listen to the ocean.
            </p>
        </section>


        <!-- <div id="solution" class="splash">
            <img src={mms} alt="mms-splash" />
        </div> -->
    </section>
</div>

<style>
    img {
        width: 100%;
        height: auto;
    }
</style>
