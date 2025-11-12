<script>
    import gardiner from "$lib/assets/work/splash/under-gardiner-splash.webp";
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
            title="Under Gardiner Archival Map"
            link="https://thebentway.github.io/gardinerwebmap/"
            img={gardiner}
            roles={["Web Developer", "Data Analyst"]}
            timeline="2023"
            technologies={["Mapbox", "HTML", "CSS", "Javascript"]}
            skills={["Web Development", "GIS", "Data Collection", "Archival Research"]}
        />

        <section id="overview">
            <h2>Overview</h2>

            <p>
                I worked as an intern at The Bentway, a non-profit that operates a public space and programming platform under the Gardiner Expressway in Toronto. 
                The Bentway and the City of Toronto have collaborated on the Under Gardiner Public Realm Plan, a vision for underutilized public spaces below and adjacent to the Gardiner Expressway.
            </p>

            <p>
                As part of the Under Gardiner Public Realm Plan, I worked with another intern to create an interactive web map drawing on photographic records from the City of Toronto Archive and Toronto Public Library.
            </p>

            <p>
                We were responsible for the data collection, manipulation, web development and design of the project, which included geocoding and tagging 400+ photos by theme. I built features to filter the images by time and theme.
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
