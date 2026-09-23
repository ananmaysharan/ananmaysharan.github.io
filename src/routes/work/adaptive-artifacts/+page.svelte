<script>
    import adaptive from "$lib/assets/work/splash/adaptive-splash.webp";
    import Overview from "$lib/components/Overview.svelte";

</script>

<div class="flex flex-col items-center px-8">
    <section class="prose w-full my-8 flex flex-col gap-16 md:max-w-200">
        <Overview  
            title="Adaptive Artifacts"
            link="https://adaptive-artifacts.onrender.com/"
            img={adaptive}
            roles={["Web Developer"]}
            timeline={["2023"]}
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
