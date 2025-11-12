<script>
    import adaptive from "$lib/assets/work/splash/adaptive-splash.webp";
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
            title="Adaptive Artifacts"
            link="https://adaptive-artifacts.onrender.com/"
            img={adaptive}
            roles={["Web Developer"]}
            timeline="2023"
            technologies={["Plotly Dash", "Python (Pandas)", "Render"]}
            skills={["Data Visualization"]}
        />

        <section id="overview">
            <h2>Overview</h2>

            <p>
                As part of my internship with The Bentway, I worked on an interactive data dashboard that displays data collected by 4 weather stations as part of Adaptive Artifacts, an installation at The Bentway. It is a research project investigating the way computers, natural systems and fabrication processes can work together to create welcoming and inspiring spaces that are highly adaptive, responsive and resilient.
            </p>

            <p>
                Note: The Render instance takes a little time to spin up on first load, so open the project in a new tab or browse my other projects!
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
