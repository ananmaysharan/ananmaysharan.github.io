<script>
    import ocean from "$lib/assets/work/ocean.webp";
    import global from "$lib/assets/work/ocean-records/global.webm";
    import year from "$lib/assets/work/ocean-records/year_view.webm";
    import month from "$lib/assets/work/ocean-records/month_view.webm";
    import figma from "$lib/assets/work/ocean-records/figma.webp";
    import perch from "$lib/assets/work/ocean-records/perch.webp";
    import spectrogram from "$lib/assets/work/ocean-records/spectrogram.webp";
    import concept1 from "$lib/assets/work/ocean-records/concept1.webp";
    import concept2 from "$lib/assets/work/ocean-records/concept2.webp";
    import pattern from "$lib/assets/work/ocean-records/pattern.webp";
    import python from "$lib/assets/work/ocean-records/python.webp";
    import web from "$lib/assets/work/ocean-records/web.webp";
    import sketch1 from "$lib/assets/work/ocean-records/sketch1.webp";
    import sketch2 from "$lib/assets/work/ocean-records/sketch2.webp";
    import agile from "$lib/assets/work/ocean-records/agile.webp";
    import perch1 from "$lib/assets/work/ocean-records/perch1.webp";
    import figma1 from "$lib/assets/work/ocean-records/figma1.webp";
    import figma2 from "$lib/assets/work/ocean-records/figma2.webp";
    import figma3 from "$lib/assets/work/ocean-records/figma3.webp";
    import figma4 from "$lib/assets/work/ocean-records/figma4.webp";
    import holoturian from "$lib/assets/work/ocean-records/holoturian.webp";
    import songs from "$lib/assets/work/ocean-records/songs.webp";
    import payne from "$lib/assets/work/ocean-records/payne.webp";
    import krill from "$lib/assets/work/ocean-records/krill.webp";
    import satellite from "$lib/assets/work/ocean-records/satellite.webp";
    import style from "$lib/assets/work/ocean-records/style.webp";
    import palette from "$lib/assets/work/ocean-records/palette.webp";
    import fonts from "$lib/assets/work/ocean-records/fonts.webp";
    import fish from "$lib/assets/work/ocean-records/fish.webp";


    import Contents from "$lib/components/Contents.svelte";
    import Overview from "$lib/components/Overview.svelte";
    import Insight from "$lib/components/Insight.svelte";

    const sections = [
        { id: "overview", title: "Overview" },
        { id: "solution", title: "Solution" },
        { id: "process", title: "Process" },
        { id: "visual-identity", title: "Visual Identity" },
        { id: "reflection", title: "Reflection" },
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
            img={ocean}
            roles={["Designer", "Web Developer"]}
            timeline={["September 2025 - October 2025"]}
            technologies={["SvelteKit", "Tailwind", "Mapbox", "GSAP"]}
            skills={[
                "Design Research",
                "Data Visualization",
                "Web Development",
            ]}
        />

        <section id="overview">
            <h3>Overview</h3>
            <h2>
                How can we convey the acoustic conflict between human activity
                and marine life in Monterey Bay, California?
            </h2>
            <p>
                I worked with a partner to research, design and develop this
                data visualization project, completed as part of my Master's in
                Design Engineering program at Harvard University.
                <!-- The requirements were to create an interactive data visualization designed to uncover systems-level constructs, build knowledge and inform decision-making and impact, in response to the theme for the year 2025/26: Artificial + Natural. -->
            </p>

            <h4>Problem</h4>
            <div class="insights-container">
            <Insight text="Ship strikes, which are collisions between vessels and
                    marine animals, are the leading cause of whale deaths
                    worldwide."></Insight>
            <Insight text="Most ship strikes go unreported, since the animals usually
                    sink to the ocean floor if they die, making it difficult to
                    assess their true impact on marine populations."></Insight>
            <Insight text="Shipping vessels emit similar sound frequencies as whale
                    species, which disrupts their ability to communicate and
                    navigate, making them more prone to strikes."></Insight>
            </div>

            <h4>Approach</h4>
            <p>
                We found a NOAA dataset that contained over 4 years of
                continuous underwater acoustic recordings from the Monterey Bay
                National Marine Sanctuary in California. Monterey Bay is home to
                36 species of marine mammals and one of the busiest shipping
                lanes in the world, with over 800,000 gross tons of cargo
                passing through annually.
            </p>
            <p>
                We used the NOAA data in conjunction with Google DeepMind's
                machine learning model, Perch 2.0, that can accurately classify
                different whale species and human-made sounds from underwater
                acoustic recordings.
            </p>
            <p>
                Our interactive web-based data visualization, Ocean Records,
                allows users to explore the underwater soundscape of Monterey
                Bay, highlighting the presence of different whale species and
                human-made sounds such as ship noise and fishing activity.
            </p>
        </section>

        <section id="solution">
            <h3>Solution</h3>
            <h4>Map</h4>
            <p>
                The main landing page features an interactive globe. When the
                user clicks 'Enter', the map zooms into Monterey Bay and shift
                to the left to reveal the main content.
            </p>
            <video
                src={global}
                autoplay
                muted
                loop
                playsinline
                preload="auto"
                class="work-video"
                style="pointer-events: auto;"
            ></video>
            <h4>Year View</h4>
            <p>
                This view shows the map, a legend of the different sound types
                and a grid with each month. The sound detections grouped
                together in stacked circles, with the size of the circle
                corresponding to the number of detections.
            </p>
            <p>
                Hovering on the circles shows the exact value as well as plays
                the corresponding sound for that activity or animal that is
                visualized in the sidebar.
            </p>
            <p>
                Toggling between different sensors in the map updates the data
                visible for the selected sensor in the main view.
            </p>
            <video
                src={year}
                autoplay
                muted
                loop
                playsinline
                preload="auto"
                class="work-video"
                style="pointer-events: auto;"
            ></video>
            <h4>Month View</h4>
            <p>
                Clicking on a month leads animates all the months into a
                timeline, showcasing the pattern of detections across all 4
                years.
            </p>
            <p>
                Below this, a grid of each day in the selected month is visible,
                with hourly indications of when sounds were detected on that
                day.
            </p>
            <p>
                A filled in circle indicates a presence of that sound and a line
                is drawn between circles each time human activity and sound
                overlap in the same hour.
            </p>
            <video
                src={month}
                autoplay
                muted
                loop
                playsinline
                preload="auto"
                class="work-video"
                style="pointer-events: auto;"
            ></video>
            <!-- <h4>Day View</h4> -->
        </section>

        <section id="process">
            <h3>Process</h3>
            <h4>Ideation</h4>
            <p>We undertook an extensive research and ideation process to understand the problem space and develop our approach.</p>
            <p>Some highlights included talking to the authors of Google's Perch model, NOAA officials and doing desk research to understand the marine ecosystem in Monterey Bay.</p>
            <div class="work-image-grid">
            <div>
                <img class='work-image'src={figma} alt="figma board" />
                <p class="caption">Overview of our Figma file across the 6 week period</p>
            </div>
            <div>
                <img class='work-image' src={perch} alt="perch call" />
                <p class="caption">Talking to Google DeepMind scientists</p>
            </div>
            </div>
            <h4>Understanding Sound and Precedents</h4>
            <p> We developed an understanding of how different sound frequencies are visualized through spectrograms in marine bioacoustics. Simultaneously, we explored various sound based data visualization precedents, including Google's <a href="https://patternradio.withgoogle.com/" target="_blank" rel="noopener noreferrer">"Pattern Radio"</a>, The Pudding's <a href="https://pudding.cool/2023/05/country-radio/" target="_blank" rel="noopener noreferrer">"They Won't Play a Lady-O on Country Radio"</a> and MIT Media Lab's <a href="https://senseable.mit.edu/sonic-cities/" target="_blank" rel="noopener noreferrer">"Sonic Cities"</a>.</p>
            <!-- <div>
                <img class='work-image' src={spectrogram} alt="spectrogram" />
            </div> -->
            <p> Based on these initial explorations, we developed some early concepts for our visualization. They look quite different from our final solution, although some key ideas carried through! </p>
            <div class="work-image-grid">
                <div>
                    <img class='work-image' src={concept2} alt="early concept 2" />
                </div>
                <div>
                    <img class='work-image' src={concept1} alt="early concept 1" />
                </div>
            </div>
            <h4>Exploratory Data Analysis</h4>
            <p>Simultaneously, we processed the NOAA dataset using Python to understand high-level patterns across the 4 years of recordings from 3 different sensors. We found that NOAA had conducted their own detection analysis and wanted to explore the shape of this data.</p>
            <div>
                <img class='work-image' style="margin-bottom: 1rem;" src={pattern} alt="pattern of animal and ship presence" />
            </div>
            <Insight text="The seasonal patterns of marine animal presence, driven by natural migration, contrasted sharply with the year-round, near constant presence of ships."></Insight>
            <h4>Refining Approach & Rapid Prototyping</h4>
            <p>Driven by this insight, we focused our efforts on conceptualizing ways to visualize these patterns effectively at a variety of timescales, both through hand-sketching and rapid prototyping in code.</p>
                        <div class="work-image-grid">
            <div>
                <img class='work-image' src={sketch1} alt="sketch 1" />
                <p class="caption">Global View sketch</p>
            </div>
            <div>
                <img class='work-image' src={sketch2} alt="sketch 2" />
                <p class="caption">Day View sketch</p>
            </div>
            </div>
            <div class="work-image-grid">
            <div>
                <img class='work-image' src={python} alt="python" />
                <p class="caption">Visualizing detection data using Python and matplotlib</p>
            </div>
            <div>
                <img class='work-image' style="padding-bottom:5px;"src={web} alt="web prototype" />
                <p class="caption">Prototyping visualizations using SvelteKit and D3.js</p>
            </div>
            </div>
            <p>While we continued to iterate based on feedback from domain experts and our peers, we defined 3 key goals for our final visualization:</p>
            <div class="insights-container">
            <Insight text="Creatively show the overlaps in frequencies between ships and animal calls."></Insight>
            <Insight text="Create an emotional reaction to the prevalence of anthropogenic noise even within sanctuary areas like Monterey Bay."></Insight>
            <Insight text="Showcase how passive acoustic monitoring offers a multi-dimensional look into marine ecosystems."></Insight>
            </div>
            <h4>Machine Learning: Using Perch</h4>
            <p>We utilized Google DeepMind's Perch 2.0 bioacoustics model to enhance our analysis at the individual day level, enabling more precise identification of marine species and human sounds in comparison to the NOAA detections.</p>
            <p>After consultation with researchers at Google DeepMind, we performed an agile modeling workflow using Google Colab Notebooks, which involved creating embeddings of the recordings and training a custom classifier for each sound type.</p>
            <p>This approach allowed us to compute over 10 days worth of recordings at a detailed level for use in the Day view of our visualization.</p>
            <div>
                <img class='work-image' style="padding:1em" src={agile} alt="agile modeling workflow" />
                <p class="caption">Agile modeling workflow</p>
            </div>
            <div>
                <img class='work-image' style="padding:1em" src={perch1} alt="perch model output" />
                <p class="caption">Outputs from training classifiers</p>
            </div>
            <h4>Design Iteration</h4>
            <p>We went through a number of rounds of iteration based on feedback from critics and peers. We used Figma to create screens at a mid-fidelity that outlined the general structure and elements of the visualization, before working directly in code to implement the design.</p>
            <div class="work-image-grid">
                <div>
                    <img class='work-image' src={figma1} alt="figma iteration 1" />
                </div>
                <div>
                    <img class='work-image' src={figma2} alt="figma iteration 2" />
                </div>
            </div>
            <div class="work-image-grid">
                <div>
                    <img class='work-image' src={figma3} alt="figma iteration 3" />
                </div>
                <div>
                    <img class='work-image' src={figma4} alt="figma iteration 4" />
                </div>
            </div>
            <Insight text="We aimed to incorporate the ability to hear the actual sounds either through hover or autoplay at each temporal scale to create an immersive experience."></Insight>
        </section>
        <section id="visual-identity">
            <h3>Visual Identity</h3>
            <h4>Inspirations</h4>

                <div>
                    <img class='work-image' src={payne} alt="payne" />
                    <p class="caption">Songs of Humpback Whales (1971), Roger Payne & Scott McVay</p>
                </div>  
            <div class="work-image-grid">
                <div>
                    <img class='work-image' src={songs} alt="songs" />
                    <p class="caption">Songs of the Humpback Whale (1970) album cover</p>
                </div>
                <div>
                    <img class='work-image' src={krill} alt="krill illustration" />
                    <p class="caption">Multicolored krill found in the Pacific Ocean</p>
                </div>
            </div>
            <h4>Identity</h4>
            <p>I designed a custom Mapbox style and a consistent visual identity for use across the visualization.</p>
            <div class="work-image-grid">
            <div>
                <img class='work-image' style="padding:1.5em 0 1.5em 0; background-color:#07233f;"src={palette} alt="color palette" />
                <p class="caption">Colors</p>
            </div>
            <div>
                <img class='work-image' src={fonts} alt="fonts" />
                <p class="caption">Fonts</p>

            </div>
            </div>
            <div>
                <iframe width='100%' height='400px' src="https://api.mapbox.com/styles/v1/ananmay/cmi5oq8jm003u01rr9dxd50sa.html?title=false&access_token=pk.eyJ1IjoiYW5hbm1heSIsImEiOiJjbDk0azNmY3oxa203M3huMzhyZndlZDRoIn0.1L-fBYplQMuwz0LGctNeiA&zoomwheel=false#0.57/73.3/-76" title="Ocean Records Portfolio" style="border:none;"></iframe>
                <p class="caption">Custom Mapbox style</p>
            </div>

        </section>
        <section id="reflection">

            <h3>Reflection & Next Steps</h3>
            <div>
            <p>This visualization was a chance to explore the intersection of bioacousitcs, design and data, and was incredibly rewarding to deep dive into.</p>
            <p>Going forward, we are hoping to expand the amount of recordings analyzed using Perch as well as incorporate historical shipping data on the map.</p>
            <p>We are in the process of showcasing this work to NOAA and others at Google DeepMind.</p>
            </div>
            <div style="display:flex; justify-content:center;">
                <img class='work-image' style="max-width: 50%; border:none;"src={fish} alt="fish" />
            </div>
        </section>



        <!-- <div id="solution" class="splash">
            <img src={mms} alt="mms-splash" />
        </div> -->
    </section>
</div>

<style>
</style>
