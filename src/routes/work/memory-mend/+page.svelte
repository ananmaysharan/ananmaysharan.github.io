<script>
    import memorymend from "$lib/assets/work/memorymend.webp";
    import prototyping from "$lib/assets/work/memory-mend/prototyping.webm";
    import hardwarerender from "$lib/assets/work/memory-mend/hardwarerender.webp";
    import hardwareprototype from "$lib/assets/work/memory-mend/hardwareprototype.webp";


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
    import songs from "$lib/assets/work/ocean-records/songs.webp";
    import payne from "$lib/assets/work/ocean-records/payne.webp";
    import krill from "$lib/assets/work/ocean-records/krill.webp";
    import palette from "$lib/assets/work/ocean-records/palette.webp";
    import fonts from "$lib/assets/work/ocean-records/fonts.webp";
    import fish from "$lib/assets/work/ocean-records/fish.webp";


    import Contents from "$lib/components/Contents.svelte";
    import Overview from "$lib/components/Overview.svelte";
    import Insight from "$lib/components/Insight.svelte";

    const sections = [
        { id: "overview", title: "Overview" },
        { id: "solution", title: "Solution" },
        { id: "process", title: "Research Process" },
        { id: "prototyping", title: "Prototyping" },
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
            title="Memory Mend"
            link="http://memory-mend.vercel.app/"
            img={memorymend}
            roles={["Product Designer", "Developer"]}
            timeline={["October 2025 - December 2025"]}
            technologies={["SvelteKit", "Arduino", "Python"]}
            skills={[
                "Design Research",
                "Product Design",
                "Hardware Prototyping",
            ]}
        />

        <section id="overview">
            <h3>Overview</h3>
            <h2>
                A retrofit device that brings embroidery capability to any sewing machine, reducing the barrier of entry to mending clothes.
            </h2>
            <p>
                I worked in a team of 4 to research, design and develop this
                digital + physical product design project, completed as part of my Master's in
                Design Engineering program at Harvard University.
                My responsibilities centered around designing and developing the mobile experience, as well as writing software to send embroidery instructions to our device. 
            </p>

            <h4>Problem Statements</h4>
            <div class="insights-container">
            <Insight text="The average consumer throws away 81.5 lbs of clothes a year."></Insight>
            <Insight text="10% of of global carbon emissions are caused by the textile industry."></Insight>
            <Insight text="85% of all donated clothes in the United States still end up in landfills and incinerators creating over 11 million tons of textile waste per year."></Insight>

            </div>

            <h4>Key Insights</h4>

            <div class="insights-container">
            <Insight text="Extending the average garment’s life by nine months can cause a 20% reduction in its carbon and water footprint."></Insight>
            <Insight text="There is a renewed interest in visible mending practices and the right to repair."></Insight>
            <Insight text="The cheapest consumer embroidery machine costs $400+, while there is a surplus of sewing machines on the second hand market."></Insight>
            </div>

            <h4>Approach</h4>
            <p>
                We built a retrofit device using an X-Y plotter with a CNC micro-controller that can be attached to any mechanical sewing machine to add embroidery functionality. 
            <p>
                The device is controlled by a mobile application, Memory Mend, that allows uses to embed memories in the form of photos, videos, text and other media to generate unique embroidery patterns, that can later be scanned to unlock their contents. It also allows users to send patterns to the machines as well as share memory mends they have made in a social feed.
            </p>
            <p>
                Both the software and hardware products are intended to work together to create an intentional experience that aims to (re)build the human capacity for repair by lowering the barrier of entry to mending clothes through embroidery, while also creating a meaningful way to preserve and share memories associated with clothing to help extend their life.
            </p>
        </section>

        <section id="solution">
            <h3>Solution</h3>
            <h4>Hardware</h4>
            <p>
                The device is split into two main parts: once houses the X-Y plotter and CNC micro-controller which sends signals to the the second which contains a Raspberry Pi, a DC motor and a Hall Effect sensor to control the needle movement of the sewing machine.
            </p>
            <div>
                <img class='work-image' src={hardwarerender} alt="hardware prototype" />
                <p class="caption">Render of the Memory Mend retrofit device next to a sewing machine.</p>
            </div>
            <div>
                <img class='work-image' src={hardwareprototype} alt="hardware prototype" />
                <p class="caption">Final working prototype of the Memory Mend retrofit device.</p>
            </div>
            <!-- <h4>Software</h4>

            <p>
                
            </p> -->
            
        </section>

        <section id="process">
            <h3>Process</h3>
            <p>We undertook an iterative prototyping process.</p>
            <video
                src={prototyping}
                autoplay
                muted
                loop
                playsinline
                preload="auto"
                class="work-video"
                style="pointer-events: auto;"
            ></video>
            
        <!-- <section id="visual-identity">
            <h3>Visual Identity</h3> -->

        </section>
        <section id="reflection">

            <h3>Reflection & Next Steps</h3>
            <div>
                <p>We presented the project to a number of textile experts, researchers and designers and were met with positive feedback.</p>
                <p>Next steps for the project include refining the hardware design to make it more compact and user-friendly, as well as expanding the software capabilities to include more customization options for embroidery patterns and enhancing the social sharing features.</p>            </div>
        </section>

    </section>
</div>

<style>
</style>
