<script>
    import memorymend from "$lib/assets/work/memorymend.webp";
    import prototyping from "$lib/assets/work/memory-mend/prototyping.webm";
    import hardwarerender from "$lib/assets/work/memory-mend/hardwarerender.webp";
    import hardwareprototype from "$lib/assets/work/memory-mend/hardwareprototype.webp";
    import uisketch from "$lib/assets/work/memory-mend/uisketch.webp";
    import patterngeneration from "$lib/assets/work/memory-mend/patterngeneration.webp";
    import component0 from "$lib/assets/work/memory-mend/component0.webp";
    import component1 from "$lib/assets/work/memory-mend/component1.webp";
    import component2 from "$lib/assets/work/memory-mend/component2.webp";
    import component3 from "$lib/assets/work/memory-mend/component3.webp";


    import Contents from "$lib/components/Contents.svelte";
    import Overview from "$lib/components/Overview.svelte";
    import Insight from "$lib/components/Insight.svelte";

    const sections = [
        { id: "overview", title: "Overview" },
        { id: "solution", title: "Solution" },
        { id: "process", title: "Process" },
        { id: "reflection", title: "Reflection & Next Steps" },
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
            technologies={["SvelteKit", "Tailwind", "OpenCV", "FastAPI", "Supabase", "FastAPI", "Python", "Raspberry Pi"]}
            skills={[
                "Design Research",
                "Product Design",
                "Hardware Prototyping",
                "Computer Vision"
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
            <h2>How can we build a device that lowers the barrier of entry to mending clothes through embroidery without automating away the meaning derived from manual effort?</h2>
            <p>
                We built a retrofit device using an off the shelf, inexpensive cartesian plotter with a CNC micro-controller, controlled using a Raspberry Pi, that can be attached to any existing mechanical sewing machine to add embroidery functionality. 
            <p>
                The device is controlled by a mobile application, Memory Mend, that allows uses to embed memories in the form of photos, videos, text and other media to generate a unique embroidery pattern. The patterns are scannable, allowing users to "unlock" the embedded memory by taking a photo with their phone.
            </p>
            <p>
                Both the software and hardware products are intended to work together to create an intentional experience that aims to (re)build the human capacity for repair by lowering the barrier of entry to mending clothes through embroidery, while also creating a meaningful way to preserve and share memories associated with clothing to help extend their life.
            </p>
        </section>

        <section id="solution">
            <h3>Solution</h3>
            <h4>Hardware</h4>
            <p>
                The device is split into two main parts: once houses the X-Y plotter and CNC micro-controller which sends signals to the the second which contains a Raspberry Pi, a DC motor and a Hall Effect sensor to control the needle movement of the sewing machine. I wrote Python code that translated the embroidery pattern into G-code instructions that the CNC micro-controller could understand to move the plotter in the X-Y plane.
            </p>
            <div>
                <img class='work-image' src={hardwarerender} alt="hardware prototype" />
                <p class="caption">Render of the Memory Mend retrofit device next to a sewing machine.</p>
            </div>
            <div>
                <img class='work-image' src={hardwareprototype} alt="hardware prototype" />
                <p class="caption">Final working prototype of the Memory Mend retrofit device.</p>
            </div>
            <h4>Software</h4>
            <h4>Starting a Memory Mend</h4>
            <p>Capture a photo and detect the damaged area using the built in YOLOv8 based damage detection computer vision model.</p>
            <h4>Embedding Memory & Pattern Generation</h4>
            <p>Input text, photos, videos or other medias associated with the garment to generate a unique pattern.</p>
            <h4>Scanning a Memory Mend</h4>
            <p>Scanning the embroidery pattern to unlock the embedded memory.</p>
            
        </section>

        <section id="process">
            <h3>Process</h3>
            <h4>Hardware</h4>
            <p>We undertook an iterative prototyping process to arrive at the final device, which involved using off the shelf components to rapidly test various configurations.</p> 
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
            
            <h4>Software</h4>

            <h4>Embedding Memories</h4>
            <p>When surveying users, the majority of people mentioned the primariry reason they hung onto old or damaged clothes was due to the memories associated with them. At the same time, as we talked to practitioners and experts, it became apparent that simply allowing the user to input any image or pattern to be embroidered as the default experience would cheapen the experience, since the project was focused on mending and much of the meaning derived from mending clothes is from the manual effort and time spent doing it. Withb both of these insights in mind, we came up with the idea of concept of memories into the patterns themselves and allowing users to scan or generate these unique patters, similar to QR codes but with a design inspired by traditional repair patterns.</p>
            <img class='work-image' style="border:none;" src={uisketch} alt="ui sketch" />
            <p class="caption">Early sketches exploring various flows within the app.</p>

            <h4>Pattern Generation</h4>
            <p>The pattern is generated by hashing the contents of the memory media (photos, videos, text) to generate a unique 6 digit id. Each digit of the id is then converted into binary, with 0s and 1s representing whether a square in a 7x7 grid is stitched.</p>
            <img class='work-image' src={patterngeneration} alt="pattern generation" />
            <p class="caption">Diagram of memory encoding and decoding process.</p>
        
            <h4>Hardware + Software</h4>
            <p>The biggest challenge was syncing the movement of the cartesian plotter in the XY plane with the sewing machine needle's up and down motion in the Z plane. The X-Y movement had to complete while the needle was above the fabric, to prevent ripping. To accomplish this, we used a hall effect sensor along with a magnet attached to the sewing machine wheel that detected the timing cycle of the sewing machine, and sent signals to the Raspberry Pi, which in turn communicated with the cartesian plotter.</p>
            <div class="work-image-grid">
                <img class='work-image' src={component0} alt="hardware component 1" />
                <img class='work-image' src={component1} alt="hardware component 1" />
                <img class='work-image' src={component2} alt="hardware component 2" />
                <img class='work-image' src={component3} alt="hardware component 3" />
            </div>
        
        </section>



        <section id="reflection">

            <h3>Reflection & Next Steps</h3>
            <div>
                <p>We presented the project to a number of textile experts, researchers and designers and were met with positive feedback.</p>
                <p>Next steps for the project include refining the hardware design to make it more compact and user-friendly, as well as expanding the software capabilities to include more customization options for embroidery patterns.</p>            
            </div>
        </section>

    </section>
</div>

<style>
</style>
