<script>
    import mms from "$lib/assets/work/mms.webp";
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
            title="Measuring Main Streets"
            link="http://measuringmainstreets.ca"
            img={mms}
            roles={["Web Developer", "Data Analyst"]}
            timeline="September 2023 — July 2025"
            technologies={["SvelteKit", "Mapbox", "Supabase", "D3"]}
            skills={["Full Stack Development", "Web Design", "Data Visualization", "GIS"]}

        />

        <section id="overview">
            <h2>Overview</h2>

            <p>
                In my role at the Canadian Urban Institute, I was responsible
                for the development of the Measuring Main Streets platform, a
                part of the Research Knowledge Initiative program from Housing,
                Infrastructure and Communities Canada.
            </p>

            <p>
                I worked to architect the platform's structure, as well as
                decide on the core technologies used to develop and host the
                platform.
            </p>

            <p>
                Working with the wider team, I helped develop an interactive map
                of every main street across Canada, as well a set of interactive
                data visuzaliation tools, case studies and reports. I also
                worked with a graphic designer to develop a visual identity for
                the platform.
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
