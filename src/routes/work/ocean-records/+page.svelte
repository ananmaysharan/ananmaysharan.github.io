<script>
    import mms from "$lib/assets/work/ocean.webp";
    import Contents from "$lib/components/Contents.svelte";
    import Overview from "$lib/components/Overview.svelte";

    const sections = [
        { id: "overview", title: "Overview" },
        // { id: "solution", title: "Solution" },
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
            timeline="September 2025 - October 2025"
            technologies={["SvelteKit", "Mapbox", "GSAP", "P5.js"]}
            skills={["Design Research", "Data Visualization", "Web Development"]}

        />

        <section id="overview">
            <h3>Overview</h3>
            <h2>How can we convey the acoustic conflict between human activity and marine life in Monterey Bay, California?</h2>
            <p>
                I worked with a partner to research, design and develop this data visualization project, completed as part of my Master's in Design Engineering program at Harvard University.
                <!-- The requirements were to create an interactive data visualization designed to uncover systems-level constructs, build knowledge and inform decision-making and impact, in response to the theme for the year 2025/26: Artificial + Natural. -->
            </p>
            
            <h4>Problem</h4>
            <ul>
                <li>
                    Ship strikes, which are collisions between vessels and marine animals, are the leading cause of whale deaths worldwide. 
                </li>
                <li>
                    Most ship strikes go unreported, since the animals usually sink to the ocean floor if they die, making it difficult to assess their true impact on marine populations.
                </li>
                <li>
                    Shipping vessels emit similar sound frequencies as whale species, which disrupts their ability to communicate and navigate, making them more prone to strikes.
                </li>   
            </ul>

            <h4>Approach</h4>
            <p>
            We found a NOAA dataset that contained over 4 years of continuous underwater acoustic recordings from the Monterey Bay National Marine Sanctuary in California. Monterey Bay is home to 36 species of marine mammals and one of the busiest shipping lanes in the world, with over 800,000 gross tons of cargo passing through annually.
            </p>
            <p>
            We used the NOAA data in conjunction with Google DeepMind's machine learning model, Perch 2.0, that can accurately classify different whale species and human-made sounds from underwater acoustic recordings.
            </p>
            <p>
            Our interactive web-based data visualization, Ocean Records, allows users to explore the underwater soundscape of Monterey Bay between 2018 and 2022, highlighting the presence of different whale species and human-made sounds such as ship noise and fishing activity.
            </p>
        </section>
<!-- 
        <section id="solution">
            <h3>Solution</h3>
            <h4>Map</h4>
            <h4>Year View</h4>
            <h4>Month View</h4>
            <h4>Day View</h4>
        </section>

        <section id="research">
            <h3>Research</h3>
            <h4>Ideation</h4>
            <h4>Methodology</h4>
            <h4>Sketches</h4>
        </section> -->




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
