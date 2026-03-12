<script>
    import pollution from "$lib/assets/work/splash/pollution-splash.webp";
    import chemical1 from "$lib/assets/work/chemical_1.jpg";
    import chemical2 from "$lib/assets/work/chemical_2.jpg";
    import Contents from "$lib/components/Contents.svelte";
    import Overview from "$lib/components/Overview.svelte";

    const sections = [
        { id: "overview", title: "Overview" },
    ];
</script>

<div class="flex flex-col gap-8 md:grid md:grid-cols-[1fr_4fr] md:gap-8">
    <aside class="hidden md:block">
    <Contents {sections} />
    </aside>

    <section class="prose mx-8 my-8 flex flex-col gap-16 md:max-w-200">
        <Overview  
            title="Chemical Valley Pollution Notification Map"
            link="https://www.landandrefinery.org/projects/pollution-notification-map"
            img={pollution}
            roles={["Research Assistant", "Web Developer"]}
            timeline={["2023"]}
            technologies={["Mapbox", "HTML", "CSS", "Javascript"]}
            skills={["Web Development", "GIS", "Data Cleaning"]}
        />

        <section id="overview">
            <h2>Overview</h2>

            <p>
                I worked as a research assistant with the Technoscience Research Unit at Environmental Data Justice Lab within the University of Toronto to help build an interactive map of notifications about pollution incidents in Canada's Chemical Valley that were collected by Aamjiwnaang community members from 2013-2023.
            </p>

            <p>
                The map is connected to a report co-created between the Yellowhead Institute and the Technoscience Research Unit, titled "Data Colonialism in Canada's Chemical Valley: Aamjiwnaang First Nation and the Failure of the Pollution Notification System".
            </p>

            <p>
                I worked to help clean and prepare the raw data, and built several features including the ability to filter the notifications by Season, Company and Pollution Type. I also built an interactive time-slider to help further filter notifications. Finally, I integrated the report's design identity into the web map and helped them host it on Github Pages.
            </p>
        </section>

        <img src={chemical1} alt="Chemical Valley pollution map screenshot" class="rounded-lg" />
        <img src={chemical2} alt="Chemical Valley pollution map screenshot" class="rounded-lg" />
    </section>
</div>

